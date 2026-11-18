// VICZ · bring your fallen home. Every token account on Solana locks about 0.002 SOL of rent. Dead coins leave those accounts
// behind: empty ones, and ones holding dust nobody will ever buy. Closing them brings the rent back to you as SOL.
// Empty accounts are just closed. Dust is burned first (it has to be, to close), and only when you pick it.
// Nothing worth $1 or more, no NFT, no stablecoin and no $VICZ is ever burned.
import { rpc, tokens, SOL_MINT } from './rpc.js';
import { buildTx, ix, PROGRAMS, WSOL, b64e, b64d, txSig, isAddr, b58encode } from './sol.js';
import { CONFIG, TIERS, tierFor, store, sleep } from './core.js';
import * as wallet from './wallet.js';

const PROTECT = new Set([
  'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v', 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB', '2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo',
  '2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH', 'USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB', 'JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN',
  SOL_MINT,
]);
const DUST_USD = 1, MAX_BYTES = 1100, MAX_PER_TX = 20, BASE_FEE = 5000;
export const RENT = 2039280;

// ---------------------------------------------------------------- 1 · scan: every token account you own, sorted into piles
export async function scan(owner) {
  const req = p => rpc('getTokenAccountsByOwner', [owner, { programId: p }, { encoding: 'jsonParsed', commitment: 'confirmed' }]);
  const [a, b, bal] = await Promise.all([req(PROGRAMS.TOKEN), req(PROGRAMS.TOKEN22), rpc('getBalance', [owner, { commitment: 'confirmed' }])]);
  const items = [];
  for (const [program, res] of [[PROGRAMS.TOKEN, a], [PROGRAMS.TOKEN22, b]]) for (const v of (res && res.value) || []) {
    const info = v.account.data && v.account.data.parsed && v.account.data.parsed.info; if (!info) continue;
    const ta = info.tokenAmount || {}, ext = info.extensions || [];
    const it = { pubkey: v.pubkey, program, mint: info.mint, raw: String(ta.amount || '0'), decimals: +ta.decimals || 0,
      ui: ta.uiAmount != null ? +ta.uiAmount : +(ta.uiAmountString || 0), lamports: +v.account.lamports || 0, native: !!info.isNative,
      kind: 'empty', why: '', pick: false, usd: null, sym: null, name: null, icon: null };
    const withheld = ext.some(e => e && e.extension === 'transferFeeAmount' && e.state && +e.state.withheldAmount > 0);
    if (info.state === 'frozen') { it.kind = 'keep'; it.why = 'Frozen by its issuer'; }
    else if (info.closeAuthority && info.closeAuthority !== owner) { it.kind = 'keep'; it.why = 'Someone else controls closing it'; }
    else if (withheld) { it.kind = 'keep'; it.why = 'Holds withheld transfer fees'; }
    else if (it.native) { it.kind = 'wsol'; }
    else if (it.raw !== '0') it.kind = 'dust';
    items.push(it);
  }
  // names, icons and prices from Jupiter (held coins first, then the rest for their names)
  const held = items.filter(i => i.raw !== '0').map(i => i.mint), rest = items.filter(i => i.raw === '0').map(i => i.mint);
  const meta = await tokens([...held, ...rest].slice(0, 250).concat(SOL_MINT));
  const solUsd = meta[SOL_MINT] && meta[SOL_MINT].usdPrice || null;
  for (const it of items) {
    const m = meta[it.mint];
    if (m) { it.sym = m.symbol || null; it.name = m.name || null; it.icon = m.icon || null; if (m.usdPrice != null) { it.usd = it.ui * m.usdPrice; it.price = m.usdPrice; } it.ch24 = m.stats24h ? m.stats24h.priceChange ?? null : null; }
    if (it.native) { it.sym = 'wSOL'; it.name = 'Wrapped SOL'; it.usd = solUsd != null ? it.ui * solUsd : null; }
    if (it.kind !== 'dust') continue;
    if (it.decimals === 0 && it.raw === '1') { it.kind = 'keep'; it.why = 'Looks like an NFT'; }
    else if (PROTECT.has(it.mint) || it.mint === CONFIG.ca) { it.kind = 'keep'; it.why = 'Never touched'; }
    else if (it.usd != null && it.usd >= DUST_USD) { it.kind = 'keep'; it.why = 'Worth $1 or more'; }
  }
  for (const it of items) it.pick = it.kind === 'empty' || (it.kind === 'wsol' && it.ui < .01);
  let vice = null, tier = null;
  if (CONFIG.ca) { vice = items.filter(i => i.mint === CONFIG.ca).reduce((s, i) => s + i.ui, 0); tier = tierFor(vice); }
  const order = { empty: 0, wsol: 1, dust: 2, keep: 3 };
  items.sort((x, y) => order[x.kind] - order[y.kind] || (y.lamports - x.lamports) || String(x.sym || x.mint).localeCompare(String(y.sym || y.mint)));
  return { owner, items, balance: +((bal && bal.value) || 0), solUsd, vice, tier, at: Date.now() };
}

// the fee: a share of what comes back, set by your wanted level. Only taken when a treasury is set.
export function feePct(s) { return CONFIG.treasury && isAddr(CONFIG.treasury) ? (s.tier || TIERS[0]).fee : 0; }

// ---------------------------------------------------------------- 2 · the plan: picked accounts packed into as few transactions as fit
const ixsFor = (it, owner) => it.kind === 'dust'
  ? [ix.burn(it.pubkey, it.mint, owner, it.raw, it.decimals, it.program), ix.close(it.pubkey, owner, owner, it.program)]
  : [ix.close(it.pubkey, owner, owner, it.program)];
const ZERO = '11111111111111111111111111111111';
function assemble(chunk, owner, pct, limit, price, blockhash) {
  const list = [ix.cuLimit(limit), ix.cuPrice(price)];
  for (const it of chunk) list.push(...ixsFor(it, owner));
  const fee = pct ? Math.floor(chunk.reduce((s, i) => s + i.lamports, 0) * pct / 100) : 0;
  if (fee > 0) list.push(ix.transfer(owner, CONFIG.treasury, fee));
  return { bytes: buildTx(owner, blockhash || ZERO, list), fee, n: list.length };
}
export function plan(items, owner, pct) {
  const chunks = []; let cur = [];
  for (const it of items) {
    const next = [...cur, it];
    if (cur.length && (next.length > MAX_PER_TX || assemble(next, owner, pct, 1400000, 100000).bytes.length > MAX_BYTES)) { chunks.push(cur); cur = [it]; }
    else cur = next;
  }
  if (cur.length) chunks.push(cur);
  return chunks;
}
export function quote(s, picked) {
  const pct = feePct(s), gross = picked.reduce((a, i) => a + i.lamports, 0);
  const chunks = plan(picked, s.owner, pct), fee = Math.floor(gross * pct / 100);
  const net = BASE_FEE * chunks.length + chunks.length * 3000;   // base fee + a small priority fee per transaction
  return { gross, fee, pct, txs: chunks.length, network: net, back: gross - fee - net };
}

// which picked account an instruction belongs to, so a failed simulation can drop just that one
function owner_of(chunk, idx) {
  let k = 2;
  for (const it of chunk) { const n = it.kind === 'dust' ? 2 : 1; if (idx >= k && idx < k + n) return it; k += n; }
  return null;
}
const explain = (e, logs) => {
  const s = JSON.stringify(e || '') + ' ' + (logs || []).join(' ');
  if (/no record of a prior credit|insufficient funds for fee|InsufficientFundsForFee/i.test(s)) return 'Your wallet needs a little SOL (about 0.0001) to pay the network fee.';
  if (/BlockhashNotFound|block height exceeded|expired/i.test(s)) return 'That took too long and the transaction expired. Try again.';
  return null;
};
async function priorityPrice() {
  try {
    const r = await rpc('getRecentPrioritizationFees', [[PROGRAMS.TOKEN]]);
    const v = (r || []).map(x => +x.prioritizationFee).filter(x => x > 0).sort((a, b) => a - b);
    if (!v.length) return 20000;
    return Math.max(5000, Math.min(300000, v[Math.floor(v.length * .75)]));
  } catch { return 20000; }
}

// ---------------------------------------------------------------- 3 · bring them home: simulate, sign once, send, confirm
export async function wash(s, picked, step = () => {}) {
  const owner = s.owner, pct = feePct(s), dropped = [];
  let chunks = plan(picked, owner, pct);
  step('build', { txs: chunks.length });
  const price = await priorityPrice();
  // simulate every transaction first; an account that can't be closed is dropped and its transaction rebuilt
  const limits = [];
  for (let c = 0; c < chunks.length; c++) {
    for (let tries = 0; tries < 6 && chunks[c].length; tries++) {
      step('sim', { i: c + 1, of: chunks.length });
      const { bytes } = assemble(chunks[c], owner, pct, 1400000, price);
      const r = await rpc('simulateTransaction', [b64e(bytes), { encoding: 'base64', sigVerify: false, replaceRecentBlockhash: true, commitment: 'confirmed' }]);
      const v = r && r.value || {};
      if (!v.err) { limits[c] = Math.min(1400000, Math.max(20000, Math.ceil((v.unitsConsumed || 100000) * 1.2) + 5000)); break; }
      const human = explain(v.err, v.logs); if (human) throw new Error(human);
      const ie = v.err && v.err.InstructionError, bad = ie ? owner_of(chunks[c], ie[0]) : null;
      if (!bad) throw new Error('The network refused this: ' + JSON.stringify(v.err).slice(0, 120));
      bad.failed = 'Can’t be closed right now'; dropped.push(bad);
      chunks[c] = chunks[c].filter(x => x !== bad);
    }
    if (chunks[c].length && !limits[c]) throw new Error('One transaction kept failing in simulation. Nothing was sent.');
  }
  const keep = chunks.map((ch, i) => ({ ch, limit: limits[i] })).filter(x => x.ch.length);
  if (!keep.length) throw new Error('None of the picked accounts can be closed right now.');
  // build the real transactions on a fresh blockhash and sign them all in one prompt
  const bh = await rpc('getLatestBlockhash', [{ commitment: 'confirmed' }]);
  const built = keep.map(k => ({ ...k, ...assemble(k.ch, owner, pct, k.limit, price, bh.value.blockhash) }));
  step('sign', { txs: built.length });
  const sent = [];
  if (wallet.canSignAll()) {
    const signed = await wallet.signAll(built.map(b => b.bytes));
    step('send', { i: 0, of: built.length });
    for (let i = 0; i < built.length; i++) {
      const raw = signed[i], sig = txSig(raw), b64 = b64e(raw);
      await rpc('sendTransaction', [b64, { encoding: 'base64', skipPreflight: true, maxRetries: 3 }]).catch(e => { const h = explain(e.message); if (h) throw new Error(h); });
      sent.push({ sig, b64, b: built[i] }); step('send', { i: i + 1, of: built.length });
    }
  } else {
    for (let i = 0; i < built.length; i++) { const sig = b58encode(await wallet.signAndSend(built[i].bytes)); sent.push({ sig, b64: null, b: built[i] }); step('send', { i: i + 1, of: built.length }); }
  }
  // confirm: poll the statuses and re-broadcast until each lands or the blockhash runs out
  step('confirm', { done: 0, of: sent.length });
  const t0 = Date.now(); let lastPush = Date.now();
  while (Date.now() - t0 < 90000) {
    const st = await rpc('getSignatureStatuses', [sent.map(x => x.sig), { searchTransactionHistory: false }]).catch(() => null);
    (st && st.value || []).forEach((v, i) => { if (v && !sent[i].done && (v.confirmationStatus === 'confirmed' || v.confirmationStatus === 'finalized' || v.err)) { sent[i].done = true; sent[i].err = v.err || null; } });
    const done = sent.filter(x => x.done).length; step('confirm', { done, of: sent.length });
    if (done === sent.length) break;
    if (Date.now() - lastPush > 3000) { lastPush = Date.now(); for (const x of sent) if (!x.done && x.b64) rpc('sendTransaction', [x.b64, { encoding: 'base64', skipPreflight: true, maxRetries: 0 }]).catch(() => {}); }
    await sleep(1400);
  }
  const ok = sent.filter(x => x.done && !x.err), bad = sent.filter(x => x.err), lost = sent.filter(x => !x.done);
  const closed = ok.flatMap(x => x.b.ch), gross = closed.reduce((a, i) => a + i.lamports, 0), fee = ok.reduce((a, x) => a + (x.b.fee || 0), 0);
  const r = { at: Date.now(), owner, sigs: ok.map(x => x.sig), failedSigs: bad.map(x => x.sig), pending: lost.map(x => x.sig), closed: closed.length, dust: closed.filter(i => i.kind === 'dust').length,
    gross, fee, back: gross - fee, dropped: dropped.length };
  if (ok.length) { const log = store.get('vicz:log:' + owner, []); log.unshift({ at: r.at, n: r.closed, back: r.back, sigs: r.sigs }); store.set('vicz:log:' + owner, log.slice(0, 50)); }
  return r;
}
export const history = owner => store.get('vicz:log:' + owner, []);
export const washedTotal = owner => history(owner).reduce((a, x) => a + x.back, 0);
