// VICZ · pump.fun whales: the SOL balance and latest pump.fun trades of a few known traders' public wallets, read straight
// from Solana (public RPC). A whale's own address is buried under thousands of spam transactions a minute, so the trades
// are found through the wallet's pump.fun volume accounts instead: pump.fun and PumpSwap keep one per trader
// ("user_volume_accumulator"), and only that trader's own buys and sells touch it.
// A trade is a transaction where the wallet's SOL went one way and a token went the other.
// Live trades after this come from PumpPortal's stream in the browser; this fills the history so nothing starts empty.
const crypto = require('crypto');
const RPCS = ['https://solana-rpc.publicnode.com', 'https://api.mainnet-beta.solana.com'];
const B58 = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/, WSOL = 'So11111111111111111111111111111111111111112';
const STABLE = new Set(['EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v', 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB']);
const PUMP = '6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P', AMM = 'pAMMBay6oceH9fJKBRHGP5D4bD4sWpmSwMn52FMfXEA';

// ---- base58 and program addresses (the same math as findProgramAddress)
const AL = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
function dec(s) { let n = 0n; for (const c of s) n = n * 58n + BigInt(AL.indexOf(c)); const o = []; while (n > 0n) { o.unshift(Number(n & 255n)); n >>= 8n; } for (const c of s) { if (c === '1') o.unshift(0); else break; } while (o.length < 32) o.unshift(0); return Buffer.from(o); }
function enc(b) { let n = 0n; for (const x of b) n = n * 256n + BigInt(x); let s = ''; while (n > 0n) { s = AL[Number(n % 58n)] + s; n /= 58n; } for (const x of b) { if (x === 0) s = '1' + s; else break; } return s; }
const P = 2n ** 255n - 19n, mod = a => ((a % P) + P) % P;
const pow = (b, e) => { let r = 1n; b = mod(b); while (e > 0n) { if (e & 1n) r = r * b % P; b = b * b % P; e >>= 1n; } return r; };
const D = mod(-121665n * pow(121666n, P - 2n)), I = pow(2n, (P - 1n) / 4n);
function onCurve(h) {             // does these 32 bytes decompress to an ed25519 point?
  const b = Buffer.from(h); b[31] &= 0x7f; let y = 0n; for (let i = 31; i >= 0; i--) y = (y << 8n) | BigInt(b[i]); if (y >= P) return false;
  const u = mod(y * y - 1n), v = mod(D * y * y + 1n); let x = mod(u * pow(v, 3n) * pow(u * pow(v, 7n), (P - 5n) / 8n));
  if (mod(v * x * x) === u) return true; x = mod(x * I); return mod(v * x * x) === u;
}
function pda(seeds, prog) {
  for (let bump = 255; bump >= 0; bump--) {
    const h = crypto.createHash('sha256').update(Buffer.concat([...seeds, Buffer.from([bump]), dec(prog), Buffer.from('ProgramDerivedAddress')])).digest();
    if (!onCurve(h)) return enc(h);
  }
  return null;
}
const vol = (a, prog) => pda([Buffer.from('user_volume_accumulator'), dec(a)], prog);

async function rpc(method, params) {
  for (const u of RPCS) {
    try {
      const r = await fetch(u, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ jsonrpc: '2.0', id: 1, method, params }), signal: AbortSignal.timeout(7000) });
      if (!r.ok) continue; const j = await r.json(); if (j && j.result !== undefined) return j.result;
    } catch { }
  }
  return null;
}
async function wallet(a) {
  const accs = [vol(a, PUMP), vol(a, AMM)].filter(Boolean);
  const [bal, ...lists] = await Promise.all([rpc('getBalance', [a, { commitment: 'confirmed' }]), ...accs.map(x => rpc('getSignaturesForAddress', [x, { limit: 12, commitment: 'confirmed' }]))]);
  const seen = new Set(), ok = lists.flatMap(l => l || []).filter(s => !s.err && !seen.has(s.signature) && seen.add(s.signature)).sort((x, y) => (y.blockTime || 0) - (x.blockTime || 0)).slice(0, 10);
  const txs = await Promise.all(ok.map(s => rpc('getTransaction', [s.signature, { encoding: 'jsonParsed', maxSupportedTransactionVersion: 1, commitment: 'confirmed' }])));
  const trades = [];
  txs.forEach((tx, i) => {
    if (!tx || !tx.meta || tx.meta.err) return;
    const keys = (tx.transaction.message.accountKeys || []).map(k => k.pubkey || k), wi = keys.indexOf(a); if (wi < 0) return;
    const pre = new Map(), post = new Map();
    for (const b of tx.meta.preTokenBalances || []) if (b.owner === a) pre.set(b.mint, (pre.get(b.mint) || 0) + (+b.uiTokenAmount.uiAmount || 0));
    for (const b of tx.meta.postTokenBalances || []) if (b.owner === a) post.set(b.mint, (post.get(b.mint) || 0) + (+b.uiTokenAmount.uiAmount || 0));
    const dSol = (tx.meta.postBalances[wi] - tx.meta.preBalances[wi]) / 1e9 + ((post.get(WSOL) || 0) - (pre.get(WSOL) || 0));
    let best = null;
    for (const m of new Set([...pre.keys(), ...post.keys()])) { if (m === WSOL || STABLE.has(m)) continue; const d = (post.get(m) || 0) - (pre.get(m) || 0); if (d && (!best || Math.abs(d) > Math.abs(best.d))) best = { m, d }; }
    if (!best || Math.abs(dSol) < .01) return;                                  // not a swap against SOL
    const side = best.d > 0 ? 'buy' : 'sell'; if ((side === 'buy') !== (dSol < 0)) return;
    trades.push({ sig: ok[i].signature, t: (ok[i].blockTime || tx.blockTime || 0) * 1000, mint: best.m, side, sol: Math.abs(dSol), amt: Math.abs(best.d) });
  });
  return { a, sol: bal && bal.value != null ? bal.value / 1e9 : null, trades };
}
// tickers and logos for every coin they traded, in one lookup (Jupiter; pump.fun's own record for any it doesn't know)
async function getJson(u, ms) { try { const r = await fetch(u, { headers: { accept: 'application/json' }, signal: AbortSignal.timeout(ms) }); return r.ok ? await r.json() : null; } catch { return null; } }
async function names(rows) {
  const mints = [...new Set(rows.flatMap(r => r.trades.map(t => t.mint)))], by = new Map(); if (!mints.length) return;
  const a = await getJson('https://lite-api.jup.ag/tokens/v2/search?query=' + mints.slice(0, 90).join(','), 5000);
  if (Array.isArray(a)) for (const t of a) if (t && t.id && t.symbol) by.set(t.id, { sym: String(t.symbol).slice(0, 14), icon: t.icon || '' });
  await Promise.all(mints.filter(m => !by.has(m) && /pump$/.test(m)).slice(0, 6).map(async m => { const j = await getJson('https://frontend-api-v3.pump.fun/coins/' + m, 3000); if (j && j.symbol) by.set(m, { sym: String(j.symbol).slice(0, 14), icon: j.image_uri || '' }); }));
  for (const r of rows) for (const t of r.trades) { const v = by.get(t.mint); if (v) { t.sym = v.sym; t.icon = v.icon; } }
}
module.exports = async (req, res) => {
  const list = String(req.query.a || '').split(',').map(s => s.trim()).filter(s => B58.test(s)).slice(0, 5);
  res.setHeader('content-type', 'application/json; charset=utf-8');
  if (!list.length) { res.statusCode = 400; return res.end('{"rows":[]}'); }
  try {
    const rows = await Promise.all(list.map(wallet)); await names(rows);
    res.setHeader('cache-control', 'public, s-maxage=40, stale-while-revalidate=120');
    res.end(JSON.stringify({ at: Date.now(), rows }));
  } catch {
    res.setHeader('cache-control', 'no-store'); res.end(JSON.stringify({ at: Date.now(), rows: [] }));
  }
};
module.exports._t = { pda, vol, onCurve, dec, enc };
