// VICZ · same-origin image proxy for coin logos: WebGL can draw them (textures need CORS) and lists load from the edge cache.
// Any public https host. IPFS and Arweave links race several gateways at once. With j= (a coin's metadata JSON, the way
// brand-new pump.fun coins arrive) the logo is read out of the metadata; with m= (the mint) a dead or missing link falls back
// to the coin's record at Jupiter, pump.fun, GeckoTerminal, DexScreener and Trust Wallet. Private networks are never fetched.
const dns = require('dns').promises;
const net = require('net');

const MAX = 8e6, UA = { 'user-agent': 'Mozilla/5.0 (compatible; blox-img/2)' };
const IMG_ACCEPT = 'image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5';
const MINT = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
const IPFS_GW = ['https://pump.mypinata.cloud/ipfs/', 'https://ipfs.io/ipfs/', 'https://dweb.link/ipfs/', 'https://w3s.link/ipfs/', 'https://nftstorage.link/ipfs/', 'https://ipfs.filebase.io/ipfs/', 'https://gateway.pinata.cloud/ipfs/'];
const AR_GW = ['https://arweave.net/', 'https://ar-io.net/', 'https://permagate.io/', 'https://gateway.irys.xyz/'];

const sniff = b => b[0] === 0x89 && b[1] === 0x50 ? 'image/png' : b[0] === 0xff && b[1] === 0xd8 ? 'image/jpeg' : b[0] === 0x47 && b[1] === 0x49 ? 'image/gif'
  : b[0] === 0x52 && b[1] === 0x49 && b[8] === 0x57 ? 'image/webp' : b.slice(4, 12).toString('latin1').includes('ftypavif') ? 'image/avif'
  : /^\s*(<\?xml[^>]*>\s*)?(<!--[\s\S]*?-->\s*)*<svg[\s>]/i.test(b.slice(0, 600).toString('utf8')) ? 'image/svg+xml' : null;

function privateIp(ip) {
  if (net.isIPv4(ip)) {
    const [a, b] = ip.split('.').map(Number);
    return a === 0 || a === 10 || a === 127 || a >= 224 || (a === 100 && b >= 64 && b <= 127) || (a === 169 && b === 254) || (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168) || (a === 192 && b === 0) || (a === 198 && (b === 18 || b === 19));
  }
  const s = ip.toLowerCase();
  if (s.startsWith('::ffff:')) return privateIp(s.slice(7));
  return s === '::' || s === '::1' || s.startsWith('fc') || s.startsWith('fd') || s.startsWith('fe8') || s.startsWith('fe9') || s.startsWith('fea') || s.startsWith('feb');
}
const hostOk = new Map();
async function safe(u) {
  if (u.protocol !== 'https:' || (u.port && u.port !== '443')) return false;
  const h = u.hostname.replace(/^\[|\]$/g, '');
  if (/^(localhost|.*\.local|.*\.internal|metadata\.google\.internal)$/i.test(h)) return false;
  if (net.isIP(h)) return !privateIp(h);
  if (hostOk.has(h)) return hostOk.get(h);
  let ok = false;
  try { const a = await dns.lookup(h, { all: true }); ok = a.length > 0 && a.every(x => !privateIp(x.address)); } catch {}
  hostOk.set(h, ok); return ok;
}
// ipfs:// and ar:// links become gateway links; anything that is not https is dropped
function toUrl(s) {
  if (!s || typeof s !== 'string') return null; s = s.trim();
  if (/^ipfs:\/\//i.test(s)) s = 'https://ipfs.io/ipfs/' + s.replace(/^ipfs:\/\/(ipfs\/)?/i, '');
  else if (/^ar:\/\//i.test(s)) s = 'https://arweave.net/' + s.slice(5);
  try { const u = new URL(s); return u.protocol === 'https:' ? u : null; } catch { return null; }
}

// one request: follow up to 3 redirects by hand (each hop checked)
async function fetchSafe(href, signal, accept) {
  let url = new URL(href);
  for (let hop = 0; hop < 4; hop++) {
    if (!(await safe(url))) throw new Error('blocked');
    const r = await fetch(url, { signal, headers: { ...UA, accept }, redirect: 'manual' });
    if (r.status >= 300 && r.status < 400 && r.headers.get('location')) { url = new URL(r.headers.get('location'), url); continue; }
    if (!r.ok) throw new Error('http ' + r.status);
    return r;
  }
  throw new Error('redirects');
}
// an image: read it and make sure it really is one
async function grab(href, signal) {
  const r = await fetchSafe(href, signal, IMG_ACCEPT);
  if (+r.headers.get('content-length') > MAX) throw new Error('too big');
  const buf = Buffer.from(await r.arrayBuffer());
  if (!buf.length || buf.length > MAX) throw new Error('size');
  const ct = sniff(buf); if (!ct) throw new Error('not an image');
  return { buf, ct };
}
// a token's metadata JSON: the logo link inside it
async function grabMeta(href, signal) {
  const r = await fetchSafe(href, signal, 'application/json,*/*;q=0.5');
  const t = await r.text(); if (t.length > 4e5) throw new Error('size');
  const j = JSON.parse(t), f = j && j.properties && Array.isArray(j.properties.files) && j.properties.files[0];
  const im = j && (j.image || j.image_uri || j.imageUrl || j.logo || j.icon || (f && (f.uri || (typeof f === 'string' ? f : ''))));
  if (!toUrl(im)) throw new Error('no image');
  return im;
}
// the first good answer wins, the rest are cancelled
async function race(hrefs, ms, fn) {
  const list = [...new Set(hrefs.filter(Boolean))]; if (!list.length || ms <= 0) return null;
  const c = new AbortController(), t = setTimeout(() => c.abort(), ms);
  try { return await Promise.any(list.map(h => fn(h, c.signal))); } catch { return null; } finally { clearTimeout(t); c.abort(); }
}
const first = (hrefs, ms) => race(hrefs, ms, grab);
// the same file on other gateways
function mirrors(u) {
  if (!u) return [];
  const out = [u.href];
  let m = u.pathname.match(/\/ipfs\/([^/?#]+)(\/[^?#]*)?/);
  let cid = m && m[1], rest = (m && m[2]) || '';
  if (!cid) { const s = u.hostname.match(/^([a-z0-9]{40,})\.ipfs\./i); if (s) { cid = s[1]; rest = u.pathname === '/' ? '' : u.pathname; } }
  if (cid) IPFS_GW.forEach(g => out.push(g + cid + rest + (g.includes('mypinata') ? '?img-width=512&img-dpr=1' : '')));
  const ar = /(^|\.)(arweave\.net|ar-io\.net|ar-io\.dev|permagate\.io|irys\.xyz)$/i.test(u.hostname) && u.pathname.match(/^\/([A-Za-z0-9_-]{43})(\/.*)?$/);
  if (ar) AR_GW.forEach(g => out.push(g + ar[1] + (ar[2] || '')));
  return out;
}
const metaMirrors = u => mirrors(u).map(h => h.replace(/\?img-width=512&img-dpr=1$/, ''));

async function json(href, ms) {
  const c = new AbortController(), t = setTimeout(() => c.abort(), ms);
  try { const r = await fetch(href, { signal: c.signal, headers: { accept: 'application/json', 'user-agent': UA['user-agent'] } }); return r.ok ? await r.json() : null; } catch { return null; } finally { clearTimeout(t); }
}
// the logo by mint: every public record of the coin at once, then the first image that loads
async function byMint(mint, ms) {
  const end = Date.now() + ms, left = () => Math.max(800, end - Date.now());
  const look = await Promise.all([
    json(`https://lite-api.jup.ag/tokens/v2/search?query=${mint}`, 2600).then(a => { const t = Array.isArray(a) && a.find(x => x && x.id === mint); return t && t.icon; }),
    /pump$/.test(mint) ? json(`https://frontend-api-v3.pump.fun/coins/${mint}`, 2600).then(j => j && j.image_uri) : null,
    json(`https://api.geckoterminal.com/api/v2/networks/solana/tokens/${mint}`, 2600).then(j => j && j.data && j.data.attributes && j.data.attributes.image_url),
    json(`https://api.dexscreener.com/tokens/v1/solana/${mint}`, 2600).then(a => Array.isArray(a) && a[0] && a[0].info && a[0].info.imageUrl),
  ]);
  const hrefs = [];
  for (const s of look) { const u = toUrl(s); if (u && !/missing/i.test(u.href)) hrefs.push(...mirrors(u)); }
  hrefs.push(`https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/solana/assets/${mint}/logo.png`);
  return first(hrefs, left());
}

module.exports = async (req, res) => {
  const t0 = Date.now(), left = () => 15000 - (Date.now() - t0);
  const u = toUrl(String(req.query.u || '')), j = toUrl(String(req.query.j || '')), mint = MINT.test(String(req.query.m || '')) ? String(req.query.m) : null;
  if (!u && !j && !mint) { res.statusCode = 400; return res.end(); }
  let got = u ? await first(mirrors(u), j || mint ? 5000 : 9000) : null;          // with a plan B, give up on a dead link sooner
  if (!got && j) { const im = await race(metaMirrors(j), Math.min(5000, left()), grabMeta); if (im) got = await first(mirrors(toUrl(im)), Math.min(6000, left())); }
  if (!got && mint) got = await byMint(mint, Math.max(1500, left()));
  if (!got) {
    res.statusCode = 404;
    res.setHeader('Cache-Control', 'public, max-age=30, s-maxage=60');           // brand-new coins: their logo may land on IPFS a minute later
    return res.end();
  }
  res.setHeader('Content-Type', got.ct);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  // an SVG opened on its own must never run anything on this origin
  if (got.ct === 'image/svg+xml') res.setHeader('Content-Security-Policy', "default-src 'none'; style-src 'unsafe-inline'; img-src data:; sandbox");
  res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=2592000, stale-while-revalidate=604800');
  return res.end(got.buf);
};
module.exports._t = { mirrors, privateIp, sniff, safe, toUrl };
