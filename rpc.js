// VICZ · talking to Solana through our relay (/api/rpc)
let id = 0;
export async function rpc(method, params = [], ms = 25000) {
  const c = new AbortController(), t = setTimeout(() => c.abort(), ms);
  try {
    const r = await fetch('/api/rpc', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ jsonrpc: '2.0', id: ++id, method, params }), signal: c.signal });
    const d = await r.json().catch(() => null);
    if (!d) throw new Error('RPC: HTTP ' + r.status);
    if (d.error) { const e = new Error(d.error.message || 'RPC error'); e.data = d.error.data; e.code = d.error.code; throw e; }
    return d.result;
  } catch (e) { if (e.name === 'AbortError') throw new Error('The network is slow right now. Try again.'); throw e; }
  finally { clearTimeout(t); }
}
const JUP = 'https://lite-api.jup.ag', GT = 'https://api.geckoterminal.com/api/v2/networks/solana';
async function j(url, ms = 12000) {
  const c = new AbortController(), t = setTimeout(() => c.abort(), ms);
  try { const r = await fetch(url, { signal: c.signal }); if (!r.ok) throw new Error('HTTP ' + r.status); return await r.json(); }
  finally { clearTimeout(t); }
}
// Jupiter's token list: price, symbol, icon for up to 100 mints a call
export async function tokens(mints) {
  const out = {}, list = [...new Set(mints)];
  for (let i = 0; i < list.length; i += 50) {
    const part = list.slice(i, i + 50);
    try { const d = await j(`${JUP}/tokens/v2/search?query=${part.join(',')}`); for (const t of d || []) out[t.id] = t; } catch {}
  }
  return out;
}
export const SOL_MINT = 'So11111111111111111111111111111111111111112';
export const gtPools = mint => j(`${GT}/tokens/${mint}/pools`).then(d => (d.data || []).map(p => ({ id: p.attributes.address, liq: +p.attributes.reserve_in_usd || 0, name: p.attributes.name })));
export const gtCandles = (pool, tf = 'hour', agg = 1, limit = 168) => j(`${GT}/pools/${pool}/ohlcv/${tf}?aggregate=${agg}&limit=${limit}&currency=usd`)
  .then(d => ((d.data && d.data.attributes && d.data.attributes.ohlcv_list) || []).map(c => ({ t: c[0] * 1000, o: +c[1], h: +c[2], l: +c[3], c: +c[4], v: +c[5] })).reverse());
