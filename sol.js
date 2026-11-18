// VICZ · a tiny Solana toolkit with no dependencies: base58, legacy transactions and the few instructions the wash uses
// (close an account, burn dust, set compute budget, pay a fee). Your wallet signs; nothing here ever sees a key.
const ALPHA = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz', MAP = Object.fromEntries([...ALPHA].map((c, i) => [c, i]));
export function b58decode(s) {
  let zeros = 0; while (zeros < s.length && s[zeros] === '1') zeros++;
  const bytes = [];
  for (let i = zeros; i < s.length; i++) {
    const v = MAP[s[i]]; if (v == null) throw new Error('bad base58'); let carry = v;
    for (let j = 0; j < bytes.length; j++) { carry += bytes[j] * 58; bytes[j] = carry & 255; carry >>= 8; }
    while (carry) { bytes.push(carry & 255); carry >>= 8; }
  }
  const out = new Uint8Array(zeros + bytes.length); out.set(bytes.reverse(), zeros); return out;
}
export function b58encode(b) {
  let zeros = 0; while (zeros < b.length && b[zeros] === 0) zeros++;
  const digits = [];
  for (let i = zeros; i < b.length; i++) {
    let carry = b[i];
    for (let j = 0; j < digits.length; j++) { carry += digits[j] << 8; digits[j] = carry % 58; carry = (carry / 58) | 0; }
    while (carry) { digits.push(carry % 58); carry = (carry / 58) | 0; }
  }
  return '1'.repeat(zeros) + digits.reverse().map(d => ALPHA[d]).join('');
}
export const isAddr = s => { try { return /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(s) && b58decode(s).length === 32; } catch { return false; } };
export const b64e = u8 => { let s = ''; for (let i = 0; i < u8.length; i += 0x8000) s += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000)); return btoa(s); };
export const b64d = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));

export const PROGRAMS = {
  TOKEN: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA', TOKEN22: 'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb',
  SYSTEM: '11111111111111111111111111111111', BUDGET: 'ComputeBudget111111111111111111111111111111',
};
export const WSOL = 'So11111111111111111111111111111111111111112';

const u64 = v => { const b = new Uint8Array(8); let x = BigInt(v); for (let i = 0; i < 8; i++) { b[i] = Number(x & 255n); x >>= 8n; } return b; };
const u32 = v => { const b = new Uint8Array(4); new DataView(b.buffer).setUint32(0, v, true); return b; };
const cat = (...a) => { const n = a.reduce((s, x) => s + x.length, 0), o = new Uint8Array(n); let k = 0; for (const x of a) { o.set(x, k); k += x.length; } return o; };
function compact(n) { const o = []; let v = n; for (;;) { let e = v & 0x7f; v >>= 7; if (!v) { o.push(e); break; } o.push(e | 0x80); } return Uint8Array.from(o); }

// instructions
export const ix = {
  close: (account, dest, owner, program) => ({ programId: program, keys: [{ pubkey: account, w: 1 }, { pubkey: dest, w: 1 }, { pubkey: owner, s: 1 }], data: Uint8Array.of(9) }),
  burn: (account, mint, owner, amount, decimals, program) => ({ programId: program, keys: [{ pubkey: account, w: 1 }, { pubkey: mint, w: 1 }, { pubkey: owner, s: 1 }], data: cat(Uint8Array.of(15), u64(amount), Uint8Array.of(decimals)) }),
  cuLimit: units => ({ programId: PROGRAMS.BUDGET, keys: [], data: cat(Uint8Array.of(2), u32(units)) }),
  cuPrice: micro => ({ programId: PROGRAMS.BUDGET, keys: [], data: cat(Uint8Array.of(3), u64(micro)) }),
  transfer: (from, to, lamports) => ({ programId: PROGRAMS.SYSTEM, keys: [{ pubkey: from, s: 1, w: 1 }, { pubkey: to, w: 1 }], data: cat(u32(2), u64(lamports)) }),
};

// a legacy transaction with empty signature slots, ready for a wallet to sign
export function buildTx(feePayer, blockhash, instructions) {
  const metas = new Map();
  const add = (k, s, w) => { const m = metas.get(k); if (m) { m.s = m.s || !!s; m.w = m.w || !!w; } else metas.set(k, { k, s: !!s, w: !!w, n: metas.size }); };
  add(feePayer, true, true);
  for (const i of instructions) { for (const a of i.keys) add(a.pubkey, a.s, a.w); add(i.programId, false, false); }
  const all = [...metas.values()], fp = all.shift();
  const grp = (s, w) => all.filter(m => m.s === s && m.w === w).sort((a, b) => a.n - b.n);
  const keys = [fp, ...grp(true, true), ...grp(true, false), ...grp(false, true), ...grp(false, false)];
  const idx = new Map(keys.map((m, i) => [m.k, i]));
  const nSig = keys.filter(m => m.s).length, nRoS = keys.filter(m => m.s && !m.w).length, nRoU = keys.filter(m => !m.s && !m.w).length;
  const ixBytes = instructions.map(i => cat(Uint8Array.of(idx.get(i.programId)), compact(i.keys.length), Uint8Array.from(i.keys.map(a => idx.get(a.pubkey))), compact(i.data.length), i.data));
  const msg = cat(Uint8Array.of(nSig, nRoS, nRoU), compact(keys.length), ...keys.map(m => b58decode(m.k)), b58decode(blockhash), compact(instructions.length), ...ixBytes);
  return cat(compact(nSig), new Uint8Array(64 * nSig), msg);
}
// the first signature of a signed transaction, as the explorer shows it
export function txSig(bytes) { return b58encode(bytes.slice(1, 65)); }
