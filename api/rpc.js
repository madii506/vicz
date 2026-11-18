// VICZ · a small Solana RPC relay. Browsers can't call the public mainnet endpoint from a website, so the page's
// reads and the transactions your wallet already signed come through here. Only the methods the wash needs are allowed,
// nothing is stored, and this function never holds or sees a key.
const ALLOW = new Set(['getTokenAccountsByOwner', 'getLatestBlockhash', 'sendTransaction', 'getSignatureStatuses', 'simulateTransaction',
  'getBalance', 'getMultipleAccounts', 'getAccountInfo', 'getRecentPrioritizationFees', 'getTokenAccountBalance', 'getMinimumBalanceForRentExemption']);
const UPSTREAMS = () => [process.env.RPC_URL, 'https://solana-rpc.publicnode.com', 'https://api.mainnet-beta.solana.com'].filter(Boolean);
const hits = new Map();
function limited(ip) {
  const now = Date.now(), h = hits.get(ip) || { n: 0, t: now };
  if (now - h.t > 60000) { h.n = 0; h.t = now; }
  h.n++; hits.set(ip, h);
  if (hits.size > 5000) hits.clear();
  return h.n > 240;
}
async function body(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') return JSON.parse(req.body);
  const chunks = []; let n = 0;
  for await (const c of req) { n += c.length; if (n > 256 * 1024) throw new Error('too large'); chunks.push(c); }
  return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}');
}
async function forward(payload) {
  let last = null;
  for (const url of UPSTREAMS()) {
    const c = new AbortController(), t = setTimeout(() => c.abort(), 25000);
    try {
      const r = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload), signal: c.signal });
      if (r.status === 429 || r.status >= 500 || r.status === 403) { last = 'upstream ' + r.status; continue; }
      return await r.json();
    } catch (e) { last = String(e && e.message || e); }
    finally { clearTimeout(t); }
  }
  throw new Error(last || 'no upstream');
}
module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  const fail = (code, msg, id = null) => { res.statusCode = code; res.end(JSON.stringify({ jsonrpc: '2.0', id, error: { code: -32000, message: msg } })); };
  if (req.method !== 'POST') return fail(405, 'POST only');
  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'x';
  if (limited(ip)) return fail(429, 'Too many requests. Wait a minute.');
  let p; try { p = await body(req); } catch { return fail(400, 'bad body'); }
  const list = Array.isArray(p) ? p : [p];
  if (!list.length || list.length > 12) return fail(400, 'bad batch');
  for (const x of list) if (!x || !ALLOW.has(x.method)) return fail(403, 'method not allowed: ' + (x && x.method), x && x.id);
  try { res.end(JSON.stringify(await forward(Array.isArray(p) ? list.map(x => ({ jsonrpc: '2.0', id: x.id, method: x.method, params: x.params || [] })) : { jsonrpc: '2.0', id: p.id ?? 1, method: p.method, params: p.params || [] }))); }
  catch (e) { fail(502, 'RPC unavailable: ' + e.message, p.id ?? null); }
};
