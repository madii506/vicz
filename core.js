// VICZ · shared helpers and the one config block
export const CONFIG = {
  ca: '',          // the $VICZ mint, once it is live: turns on Buy, Chart and the CA pill
  x: '',           // the X account, e.g. 'https://x.com/...'
  treasury: '',    // no fee is taken when bringing the fallen home (left empty on purpose)
  gta: '2026-11-19T00:00:00',
};
export const TIERS = [{ stars: 0, min: 0, fee: 0, name: 'Soldier' }];
export const tierFor = () => TIERS[0];
const BUS = new Map();
export const on = (e, f) => { (BUS.get(e) || BUS.set(e, []).get(e)).push(f); };
export const emit = (e, v) => (BUS.get(e) || []).forEach(f => { try { f(v); } catch (err) { console.error(err); } });
export const store = {
  get(k, d = null) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
  del(k) { try { localStorage.removeItem(k); } catch {} },
};
export const $ = (s, r = document) => r.querySelector(s);
export const $$ = (s, r = document) => [...r.querySelectorAll(s)];
export const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export const sleep = ms => new Promise(r => setTimeout(r, ms));
export const short = a => a ? a.slice(0, 4) + '…' + a.slice(-4) : '';
export const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
export const ok = v => v != null && isFinite(v);
export const LAMPORTS = 1e9;
export const sol = (lamports, d) => { const v = lamports / LAMPORTS; return v.toFixed(d ?? (v >= 1 ? 3 : v >= .01 ? 4 : 6)); };
export function usd(v, d) {
  if (!ok(v)) return '—';
  const a = Math.abs(v), sg = v < 0 ? '-' : '';
  if (a >= 1e9) return sg + '$' + (a / 1e9).toFixed(2) + 'B';
  if (a >= 1e6) return sg + '$' + (a / 1e6).toFixed(2) + 'M';
  if (a >= 1e4) return sg + '$' + (a / 1e3).toFixed(1) + 'K';
  return sg + '$' + a.toLocaleString('en-US', { minimumFractionDigits: d ?? (a < 100 ? 2 : 0), maximumFractionDigits: d ?? (a < 100 ? 2 : 0) });
}
export const pct = (v, d = 1) => !ok(v) ? '—' : (v > 0 ? '+' : '') + v.toFixed(Math.abs(v) >= 100 ? 0 : d) + '%';
export const cls = v => !ok(v) ? '' : v > 0 ? 'up' : v < 0 ? 'dn' : '';
export const solscan = (x, kind = 'tx') => `https://solscan.io/${kind}/${x}`;
export function toast(msg, kind = '', ms = 5000) {
  const t = document.createElement('div'); t.className = 'toast ' + kind; t.innerHTML = msg;
  $('#toasts').appendChild(t); setTimeout(() => { t.style.transition = 'opacity .4s'; t.style.opacity = '0'; setTimeout(() => t.remove(), 450); }, ms);
}
export async function copy(text) { try { await navigator.clipboard.writeText(text); toast('Copied', 'ok', 2200); } catch { toast('Copy failed. Select it by hand.', 'err'); } }
// token art through our proxy; with the mint it can still find the logo when the link itself is dead
export const img = (url, mint) => {
  const q = [];
  if (/^(https|ipfs|ar):\/\//.test(url || '')) q.push('u=' + encodeURIComponent(url));
  if (mint && /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(mint)) q.push('m=' + mint);
  return q.length ? '/api/img?' + q.join('&') : (url || '');
};
export function ago(t) { if (!t) return '—'; const s = Math.max(0, (Date.now() - t) / 1000); return s < 60 ? Math.floor(s) + 's' : s < 3600 ? Math.floor(s / 60) + 'm' : s < 86400 ? Math.floor(s / 3600) + 'h' : Math.floor(s / 86400) + 'd'; }
