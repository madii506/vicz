// VICZ · the page: live pump.fun data in, the world and the panels out. Scrolling digs the camera down through the trenches.
import { createWorld } from './world.js?v=5';
import * as api from './api.js';
import { CONFIG, $, $$, esc, short, usd, pct, cls, img, ago, toast, copy, sol, solscan, on, store } from './core.js';
import * as wallet from './wallet.js';
import * as fallen from './fallen.js';

const mobile = matchMedia('(pointer:coarse)').matches || innerWidth < 760;
let world = null;
try { world = createWorld($('#world'), { onPick: openCard }); } catch (e) { console.error(e); document.body.classList.add('noworld'); }

// ---------------------------------------------------------------- the scroll: each section holds its station, the gaps between are the camera moves
const secs = $$('.sec'), N = secs.length, STY = [24, 11, 2.4, 8.5, -13, -28.6, -46, -65];
let fNow = 0;
function stationFromScroll() {
  const y = scrollY, vh = innerHeight;
  for (let i = 0; i < N; i++) {
    const s = secs[i], top = s.offsetTop, h = s.offsetHeight, holdEnd = top + h - 1.25 * vh, nextStart = top + h - .15 * vh;
    if (y < holdEnd || i === N - 1) return i;
    if (y < nextStart) { const k = (y - holdEnd) / (nextStart - holdEnd); return i + Math.max(0, Math.min(1, k)); }
  }
  return N - 1;
}
const navA = $$('.links a'), depthLi = $$('#depth li');
function onScroll() {
  const f = stationFromScroll(); fNow = f; if (world) world.setF(f);
  document.body.classList.toggle('night', f > .8); document.body.classList.toggle('atTop', f < .45); document.body.classList.toggle('noRadio', !mobile && f > 5.45 && f < 6.55);
  const k = f / (N - 1); $('.dfill').style.height = k * 100 + '%'; $('.dknob').style.top = k * 100 + '%';
  const i = Math.floor(f), e = f - i, d = STY[i] + (STY[Math.min(N - 1, i + 1)] - STY[i]) * e; $('#depthNow').textContent = (d > 0 ? '+' : '') + Math.round(d);
  const cur = Math.round(f); navA.forEach(a => a.classList.toggle('on', +a.dataset.st === cur)); depthLi.forEach(l => l.classList.toggle('on', +l.dataset.st <= f + .5));
}
addEventListener('scroll', onScroll, { passive: true }); addEventListener('resize', onScroll);
depthLi.forEach(l => l.addEventListener('click', () => secs[+l.dataset.st].scrollIntoView({ behavior: 'smooth' })));
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }), { threshold: .12 });
secs.forEach(s => io.observe(s));

// ---------------------------------------------------------------- live data: pump.fun right now (Jupiter's boards, PumpPortal's stream)
const F = { new: [], hot: [], trending: [], migrated: [], bonding: [] };
let launches = []; const launchTs = []; let streamSince = 0;
const BAD = /hitler|nazi|swastika|\b1488\b|\bkkk\b|holocaust|n[i1!]gg|f[a@]gg[o0]t|\bpedo|\brape\b|\bisis\b/i;
const heatOf = t => { const s = t.s5m || {}; return (s.numBuys || 0) + (s.numSells || 0); };
const isPump = t => t && (t.launchpad === 'pump.fun' || /pump$/.test(t.mint || ''));
function shape(t, cat, hmax) {
  const h = hmax ? heatOf(t) / hmax : 0, s5 = t.s5m || {}, s1 = t.s1h || {}, has5 = s5.priceChange != null, ch = has5 ? s5.priceChange : s1.priceChange;
  return { ...t, cat, isNew: cat === 'new', iconUrl: t.iconUrl || img(t.icon, t.mint), heat: h, up: (ch || 0) >= 0, chg: ch ?? null, ch1: s1.priceChange ?? null };
}
const fromGem = (p, cat) => { const b = p.baseAsset || {}; return { mint: b.id, name: b.name || '', symbol: b.symbol || '', icon: /^https:\/\//.test(b.icon || '') ? b.icon : '', mcap: +(b.mcap ?? b.fdv) || null, holders: b.holderCount ?? null,
  s5m: b.stats5m || {}, s1h: b.stats1h || {}, created: Date.parse((b.firstPool && b.firstPool.createdAt) || b.createdAt || '') || null, grad: Date.parse(b.graduatedAt || '') || null, prog: p.bondingCurve != null ? +p.bondingCurve : null, launchpad: 'pump.fun' }; };
async function jx(url, opt = {}, ms = 12000) { const c = new AbortController(), t = setTimeout(() => c.abort(), ms); try { const r = await fetch(url, { ...opt, signal: c.signal }); if (!r.ok) throw new Error('HTTP ' + r.status); return await r.json(); } finally { clearTimeout(t); } }
const live = { gems: 0, hot: 0, ws: 0 };
async function loadGems() {
  try {
    const f = { timeframe: '24h', launchpads: ['pump.fun'] };
    const d = await jx('https://datapi.jup.ag/v1/pools/gems', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ recent: f, aboutToGraduate: f, graduated: f }) });
    const pick = k => ((d[k] && d[k].pools) || []).filter(p => p && p.baseAsset && p.baseAsset.id).map(p => fromGem(p, k)).filter(t => (t.symbol || t.name) && !BAD.test(t.symbol + ' ' + t.name));
    const rec = pick('recent').sort((a, b) => (b.created || 0) - (a.created || 0)), grad = pick('graduated').sort((a, b) => (b.grad || 0) - (a.grad || 0)), bond = pick('aboutToGraduate').sort((a, b) => (b.prog || 0) - (a.prog || 0));
    const seen = new Set(); F.new = [...launches.slice(0, 10), ...rec].filter(t => !seen.has(t.mint) && seen.add(t.mint)).slice(0, 30).map(t => shape(t, 'new'));
    const hm = Math.max(1, ...grad.map(heatOf)); F.migrated = grad.slice(0, 24).map(t => shape(t, 'migrated', hm));
    F.bonding = bond.slice(0, 12).map(t => shape(t, 'bonding'));
    live.gems = Date.now(); paintAll();
  } catch { }
}
let trendRetry = 0;
async function loadTrending() {
  const [h, t] = await Promise.allSettled([api.trending('5m', 100), api.trending('1h', 100)]);
  if (h.status === 'fulfilled') { const L = (h.value || []).filter(isPump).filter(t => !BAD.test(t.symbol + ' ' + t.name)), hm = Math.max(1, ...L.map(heatOf)); F.hot = L.slice(0, 36).map(t => shape(t, 'hot', hm)); live.hot = Date.now(); }
  if (t.status === 'fulfilled') { const L = (t.value || []).filter(isPump).filter(t => !BAD.test(t.symbol + ' ' + t.name)), hm = Math.max(1, ...L.map(heatOf)); F.trending = L.slice(0, 30).map(t => shape(t, 'trending', hm)); }
  paintAll();
  for (const c of F.hot.slice(0, 24)) { if (c.chg == null) continue;
    if (c.chg >= 30) radio('pump', c, `<b>$${esc(c.symbol)}</b> broke through · <b class="g">${pct(c.chg)}</b> in 5m`);
    else if (c.chg <= -25) radio('dump', c, `<b>$${esc(c.symbol)}</b> is under fire · <b class="r">${pct(c.chg)}</b> in 5m`); }
  if (h.status === 'fulfilled' && t.status === 'fulfilled') trendRetry = 0; else if (trendRetry < 6) { trendRetry++; setTimeout(loadTrending, 3000 + trendRetry * 2500); }
}
// the whales in the choppers: two public pump.fun traders, their SOL and latest trades
const PW = [{ a: '2fg5QD1eD7rzNNCsvnhmXFm5hqNgwTTG8p7kQ6f3rx6f', n: 'Cupsey' }, { a: 'CyaE1VxvBrahnPWkqm5VsdCvyS2QmNht2UFrKJHga54o', n: 'Cented' }].map(w => ({ ...w, sol: null, trades: [] }));
const PWset = new Set(PW.map(w => w.a)), symCache = new Map();
const allCoins = () => [...F.hot, ...F.trending, ...F.new, ...F.migrated, ...F.bonding, ...launches];
const findCoin = m => allCoins().find(c => c.mint === m) || null;
async function symPrime(mints) {
  const need = [...new Set(mints)].filter(m => m && !findCoin(m) && !symCache.has(m)); if (!need.length) return;
  try { for (const t of await api.tokens(need)) if (t && t.mint && t.symbol) symCache.set(t.mint, { symbol: String(t.symbol).slice(0, 14), iconUrl: img(t.icon, t.mint) }); } catch { }
}
const symOf = m => { const c = findCoin(m); if (c) return { symbol: c.symbol, iconUrl: c.iconUrl }; return symCache.get(m) || { symbol: short(m), iconUrl: img('', m) }; };
async function loadWhales() {
  await Promise.allSettled(PW.map(async w => { const h = await api.holdings(w.a); if (h && h.uiAmount != null) w.sol = +h.uiAmount; }));
  try {
    const d = await jx('/api/pwhales?a=' + PW.map(w => w.a).join(','), {}, 25000);
    for (const r of d.rows || []) { const w = PW.find(x => x.a === r.a); if (!w) continue; if (w.sol == null && r.sol != null) w.sol = r.sol;
      for (const t of r.trades || []) { if (w.trades.some(x => x.sig === t.sig)) continue; if (t.sym) t.iconUrl = img(t.icon, t.mint); w.trades.push(t); } w.trades.sort((a, b) => b.t - a.t); w.trades.length = Math.min(w.trades.length, 8); }
  } catch { }
  await symPrime(PW.flatMap(w => w.trades.filter(t => !t.sym).map(t => t.mint)));
  for (const w of PW) for (const t of w.trades) if (!t.sym) { const v = symOf(t.mint); t.sym = v.symbol; t.iconUrl = v.iconUrl; }
  paintWhales();
}
function onWhaleTrade(d) {
  const w = PW.find(x => x.a === d.traderPublicKey); if (!w || w.trades.some(x => x.sig === d.signature)) return;
  const v = symOf(d.mint); w.trades.unshift({ sig: d.signature, t: Date.now(), mint: d.mint, side: d.txType, sol: +d.solAmount || 0, sym: v.symbol, iconUrl: v.iconUrl }); w.trades.length = Math.min(w.trades.length, 8);
  paintWhales(); radio('whale', { mint: d.mint, symbol: v.symbol, iconUrl: v.iconUrl }, `<b>${esc(w.n)}</b> ${d.txType === 'buy' ? 'bought' : 'sold'} <b>$${esc(v.symbol)}</b> · ${(+d.solAmount || 0).toFixed(1)} SOL`, 'w' + d.signature);
}
// every new pump.fun coin and every migration the second it happens
function pumpStream() {
  let ws = null, tries = 0;
  const open = () => {
    try { ws = new WebSocket('wss://pumpportal.fun/api/data'); } catch { return; }
    ws.onopen = () => { tries = 0; live.ws = Date.now(); if (!streamSince) streamSince = Date.now(); ws.send(JSON.stringify({ method: 'subscribeNewToken' })); ws.send(JSON.stringify({ method: 'subscribeMigration' })); ws.send(JSON.stringify({ method: 'subscribeAccountTrade', keys: PW.map(w => w.a) })); };
    ws.onmessage = e => { let d; try { d = JSON.parse(e.data); } catch { return; } if (!d || !d.mint) return; live.ws = Date.now();
      if (d.traderPublicKey && PWset.has(d.traderPublicKey) && /^(buy|sell)$/.test(d.txType || '')) return onWhaleTrade(d);
      if (d.txType === 'create') onLaunch(d); else if (/migrat/i.test(d.txType || '') || d.pool === 'pump-amm') onMigrate(d); };
    ws.onclose = () => { ws = null; setTimeout(open, Math.min(30000, 2500 * 2 ** tries++)); };
    ws.onerror = () => { try { ws.close(); } catch { } };
  };
  open();
  document.addEventListener('visibilitychange', () => { if (!document.hidden && !ws) open(); });
}
function onLaunch(d) {
  if (!d.symbol || BAD.test(d.symbol + ' ' + (d.name || ''))) return;
  const icon = /^(https|ipfs|ar):\/\//.test(d.uri || '') ? '/api/img?j=' + encodeURIComponent(d.uri) + '&m=' + d.mint : img('', d.mint);
  const t = { mint: d.mint, name: d.name || '', symbol: String(d.symbol).slice(0, 14), created: Date.now(), iconUrl: icon, cat: 'new', isNew: true, chg: null, s5m: {}, s1h: {} };
  launches.unshift(t); if (launches.length > 40) launches.pop(); launchTs.push(Date.now()); if (launchTs.length > 600) launchTs.splice(0, 300);
  if (world) world.recruit(t);
  addStream(t); paintHero(); radio('recruit', t, `<b>$${esc(t.symbol)}</b> enlisted${t.name ? ' · ' + esc(t.name.slice(0, 22)) : ''}`);
}
async function onMigrate(d) {
  let c = findCoin(d.mint);
  if (!c) { try { const r = await api.tokens([d.mint]); if (r && r[0]) c = shape({ ...r[0], launchpad: 'pump.fun' }, 'migrated'); } catch { } }
  if (!c) return; c = { ...c, cat: 'migrated', isNew: false, grad: Date.now() };
  F.migrated = [c, ...F.migrated.filter(x => x.mint !== c.mint)].slice(0, 24);
  if (world) world.graduate(c, true);
  radio('over', c, `<b>$${esc(c.symbol)}</b> went over the top · into PumpSwap`); paintAll();
}
const perMin = () => { if (!streamSince) return null; const sec = Math.min(60, (Date.now() - streamSince) / 1000); return sec < 15 ? null : Math.round(launchTs.filter(t => t > Date.now() - sec * 1000).length / sec * 60); };


// ---------------------------------------------------------------- the field radio: every real event on the front, one dispatch at a time
const RADIO = { q: [], seen: new Map() }, RTAG = { recruit: ['RECRUIT', 'y'], over: ['OVER THE TOP', 'c'], whale: ['WHALE', 'p'], pump: ['BREAKTHROUGH', 'g'], dump: ['UNDER FIRE', 'r'] };
function radio(kind, c, html, key) {
  if (!c || !c.mint) return; const now = Date.now(); key = key || kind + c.mint;
  if (now - (RADIO.seen.get(key) || 0) < 300000) return; RADIO.seen.set(key, now);
  const ev = { kind, c, html };
  if (kind === 'recruit') { if (RADIO.q.length) return; RADIO.q.push(ev); } else if (kind === 'whale' || kind === 'over') RADIO.q.unshift(ev); else RADIO.q.push(ev);
  if (RADIO.q.length > 6) RADIO.q.length = 6;
  if (!RADIO.on) radioTick();
}
function typeIn(el, html) {
  const tmp = document.createElement('span'); tmp.innerHTML = html; const txt = tmp.textContent; let i = 0;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { el.innerHTML = html; return; }
  const tick = () => { i += 2; if (i >= txt.length) { el.innerHTML = html; return; } el.textContent = txt.slice(0, i) + '▌'; setTimeout(tick, 24); }; tick();
}
function radioTick() {
  if (document.hidden) return; const ev = RADIO.q.shift(); if (!ev) return;
  RADIO.on = true; clearTimeout(RADIO.t); RADIO.t = setTimeout(() => { RADIO.on = false; if (RADIO.q.length) radioTick(); }, 3400);
  const ol = $('#radioL'); if (!ol) return; const em = ol.querySelector('.empty'); if (em) em.remove();
  const [tag, tone] = RTAG[ev.kind], li = document.createElement('li'); li.className = 'r-' + tone; li.dataset.m = ev.c.mint; li.dataset.t = Date.now();
  li.innerHTML = `<em>${tag}</em>${av(ev.c)}<span class="tx"></span><small>now</small>`; ol.prepend(li); while (ol.children.length > 3) ol.lastElementChild.remove();
  typeIn(li.querySelector('.tx'), ev.html);
  const r = $('#radio'); r.classList.remove('ping'); void r.offsetWidth; r.classList.add('ping');
}
setInterval(() => { const n = $('#radioClock'); if (n) n.textContent = new Date().toLocaleTimeString('en-GB'); $$('#radioL li[data-t]').forEach(li => { const s = li.querySelector('small'); if (s) s.textContent = ago(+li.dataset.t); }); }, 1000);

// ---------------------------------------------------------------- painting the panels
const hue = s => { let h = 0; s = String(s || ''); for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h % 360; };
const av = (c, cl = 'av') => c.iconUrl ? `<img class="${cl}" src="${esc(c.iconUrl)}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.outerHTML='<i class=&quot;${cl}&quot; style=&quot;background:hsl(${hue(c.mint || c.symbol)},70%,50%)&quot;>${esc((c.symbol || '?').slice(0, 2))}</i>'">` : `<i class="${cl}" style="background:hsl(${hue(c.mint || c.symbol)},70%,50%)">${esc((c.symbol || '?').slice(0, 2))}</i>`;
const lineList = () => { const seen = new Set(), out = []; for (const c of [...F.hot, ...F.trending.slice(0, 12)]) if (c.mint && !seen.has(c.mint)) { seen.add(c.mint); out.push(c); } return out.slice(0, mobile ? 26 : 44); };
let moodV = .5;
function sync() {
  const line = lineList(), up = line.filter(c => c.chg != null && c.chg >= 0).length, known = line.filter(c => c.chg != null).length;
  moodV = known ? up / known : .5;
  if (!world) return;
  world.setCoins(line); world.setGrads(F.migrated); world.setMood(moodV);
  world.setScreens({ hot: F.hot, fresh: launches.length ? launches : F.new, grads: F.migrated });
}
function paintHero() {
  const set = (k, v) => $$(`[data-live="${k}"]`).forEach(e => { if (e.textContent !== String(v)) { e.textContent = v; e.animate([{ transform: 'translateY(6px)', opacity: .3 }, { transform: 'none', opacity: 1 }], { duration: 420, easing: 'ease-out' }); } });
  const pm = perMin(); set('perMin', pm == null ? '—' : pm); const pmEl = $('#perMin'); if (pmEl) pmEl.textContent = pm == null ? '—' : pm;
  set('line', F.hot.length ? lineList().length : '—');
  const nb = F.bonding[0]; set('next', nb && nb.prog != null ? Math.round(nb.prog) + '%' : '—');
}
function paintTape() {
  const L = F.hot.slice(0, 20); if (!L.length) return;
  const one = L.map(c => `<span>${av(c)}$${esc(c.symbol)} <b class="${cls(c.chg)}">${pct(c.chg)}</b></span>`).join('');
  $('#tape').innerHTML = one + one;
}
function paintWhales() {
  if (world) world.setWhales(PW.map(w => ({ a: w.a, n: w.n, sol: w.sol, last: w.trades[0] || null })));
  $('#whales').innerHTML = PW.map(w => `<div class="whale"><i class="wv">${esc(w.n[0])}</i><div><b>${esc(w.n)}</b><small>${short(w.a)} · pump.fun whale</small>
    <div class="tr">${w.trades.slice(0, 3).map(t => `<span class="chip ${t.side === 'buy' ? 'buy' : 'sell'}">${av({ iconUrl: t.iconUrl, mint: t.mint, symbol: t.sym })}${t.side === 'buy' ? 'Bought' : 'Sold'} $${esc(t.sym || '…')} · ${(+t.sol || 0).toFixed(1)}</span>`).join('') || '<small>No trades read yet</small>'}</div></div>
    <div class="sol">${w.sol == null ? '—' : Math.round(w.sol).toLocaleString('en-US')}<small>SOL</small></div></div>`).join('');
}
function paintRoll() {
  const L = F.hot.slice(0, 8);
  $('#roll').innerHTML = L.length ? L.map(c => `<li data-m="${c.mint}">${av(c)}<span class="nm"><b>$${esc(c.symbol)}</b><small>${esc(c.name || '')}</small></span><span class="v ${cls(c.chg)}">${pct(c.chg)}<small>${usd(c.mcap)}</small></span></li>`).join('')
    : `<li class="empty">${live.hot ? 'The line is quiet right now.' : 'Calling the line…'}</li>`;
  $('#mood b').style.width = Math.round(moodV * 100) + '%';
}
function paintGrads() {
  const G = F.migrated.slice(0, 5);
  $('#grads').innerHTML = G.length ? G.map(c => `<li data-m="${c.mint}">${av(c)}<span class="nm"><b>$${esc(c.symbol)}</b><small>graduated ${c.grad ? ago(c.grad) + ' ago' : 'today'}</small></span><span class="v">${usd(c.mcap)}<small>mcap</small></span></li>`).join('')
    : `<li class="empty">${live.gems ? 'No graduations in the window.' : 'Watching the curve…'}</li>`;
  const B = F.bonding.slice(0, 5);
  $('#bonds').innerHTML = B.map(c => `<div class="bond" data-m="${c.mint}">${av(c)}<div><b>$${esc(c.symbol)}</b><div class="bar"><b style="width:${Math.max(2, Math.min(100, c.prog || 0))}%"></b></div></div><strong>${c.prog == null ? '—' : Math.round(c.prog) + '%'}</strong></div>`).join('') || '<p class="empty">Nothing close to graduating.</p>';
}
const streamShown = new Set();
function addStream(t) {
  const ul = $('#stream'); if (!ul) return; const em = ul.querySelector('.empty'); if (em) em.remove();
  if (streamShown.has(t.mint)) return; streamShown.add(t.mint);
  const li = document.createElement('li'); li.dataset.m = t.mint; li.innerHTML = `${av(t)}<span><b>$${esc(t.symbol)}</b> <small>${esc((t.name || '').slice(0, 24))}</small></span><small class="t">${ago(t.created)}</small>`;
  ul.prepend(li); while (ul.children.length > 9) ul.lastElementChild.remove();
}
function paintStream() { if (!launches.length && F.new.length) for (const t of F.new.slice(0, 8).reverse()) addStream(t); $$('#stream li[data-m]').forEach(li => { const t = findCoin(li.dataset.m); const s = li.querySelector('.t'); if (t && s) s.textContent = ago(t.created); }); }
let tab = 'hot';
function paintBoard() {
  const L = (F[tab] || []).slice(0, 30), tb = $('#board tbody');
  tb.innerHTML = L.length ? L.map(c => `<tr data-m="${c.mint}"><td><span class="co">${av(c)}<span>$${esc(c.symbol)}<small>${esc(c.name || '')}</small></span></span></td>
    <td class="${cls(c.chg)}">${tab === 'bonding' ? (c.prog == null ? '—' : Math.round(c.prog) + '% curve') : pct(c.chg)}</td><td class="${cls(c.ch1)}">${pct(c.ch1)}</td><td>${usd(c.mcap)}</td><td>${c.holders == null ? '—' : (+c.holders).toLocaleString('en-US')}</td>
    <td><a class="go" href="https://pump.fun/coin/${c.mint}" target="_blank" rel="noopener">pump.fun ↗</a></td></tr>`).join('')
    : `<tr><td colspan="6" class="empty">${live.gems || live.hot ? 'Nothing on this board right now.' : 'Loading the board…'}</td></tr>`;
}
$('#tabs').addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; tab = b.dataset.tab; $$('#tabs button').forEach(x => x.setAttribute('aria-selected', x === b)); paintBoard(); });
let paintT = 0;
function paintAll() { if (paintT) return; paintT = requestAnimationFrame(() => { paintT = 0; sync(); paintHero(); paintTape(); paintRoll(); paintGrads(); paintStream(); paintBoard(); }); }
// a row or a soldier's tag opens the coin's card
document.addEventListener('click', e => { const r = e.target.closest('[data-m]'); if (!r || e.target.closest('a')) return; const c = findCoin(r.dataset.m); if (c) openCard(c); });
function openCard(c) {
  const el = $('#card'); el.hidden = false;
  el.innerHTML = `<div class="hd">${av(c)}<div><b>$${esc(c.symbol)}</b><small>${esc(c.name || '')}</small></div><button class="x" aria-label="Close">✕</button></div>
    <div class="kv"><div><span>5 min</span><b class="${cls(c.chg)}">${pct(c.chg)}</b></div><div><span>1 hour</span><b class="${cls(c.ch1)}">${pct(c.ch1)}</b></div><div><span>Mcap</span><b>${usd(c.mcap)}</b></div></div>
    <div class="acts"><a href="https://pump.fun/coin/${c.mint}" target="_blank" rel="noopener">pump.fun</a><a href="https://dexscreener.com/solana/${c.mint}" target="_blank" rel="noopener">Chart</a><button data-copy="${c.mint}">Copy CA</button></div>`;
  el.querySelector('.x').onclick = () => { el.hidden = true; };
  el.querySelector('[data-copy]').onclick = e => copy(e.target.dataset.copy);
}

// ---------------------------------------------------------------- the CA, once $VICZ is live
function paintCA() {
  const pill = ca => `<code>${short(ca)}</code><button data-copy="${ca}">Copy</button><a href="https://pump.fun/coin/${ca}" target="_blank" rel="noopener">Buy</a><a href="https://dexscreener.com/solana/${ca}" target="_blank" rel="noopener">Chart</a>${CONFIG.x ? `<a href="${esc(CONFIG.x)}" target="_blank" rel="noopener">𝕏</a>` : ''}`;
  if (CONFIG.ca) $('#caHQ').innerHTML = pill(CONFIG.ca);
  else $('#caHQ').innerHTML = `<span class="soon">The CA lands here at launch.</span>${CONFIG.x ? `<a href="${esc(CONFIG.x)}" target="_blank" rel="noopener">Follow on 𝕏</a>` : ''}`;
  $$('[data-copy]').forEach(b => b.onclick = () => copy(b.dataset.copy));
  const nx = $('#navX'); if (CONFIG.x) { nx.href = CONFIG.x; nx.target = '_blank'; nx.rel = 'noopener'; }
}

// ---------------------------------------------------------------- the fallen: close dead coins' token accounts, the rent comes home
const FT = { stage: 'idle', scan: null, dust: false, err: '', step: '', res: null };
const tool = $('#tool');
const picked = () => FT.scan ? FT.scan.items.filter(i => i.kind === 'empty' || (i.kind === 'wsol' && i.ui < .01) || (FT.dust && i.kind === 'dust')) : [];
function renderTool() {
  if (!wallet.W.address) {
    const ws = wallet.W.list;
    tool.innerHTML = `<p class="msg">Connect a Solana wallet and VICZ looks for the coins that died in it.</p><div class="wl">${ws.length ? ws.map(w => `<button data-w="${esc(w.name)}">${w.icon ? `<img src="${esc(w.icon)}" alt="">` : ''}${esc(w.name)}</button>`).join('') : '<p class="msg">No Solana wallet found in this browser. Open this page in Phantom, Solflare or Backpack.</p>'}</div>${FT.err ? `<p class="msg err">${esc(FT.err)}</p>` : ''}`;
    return;
  }
  const head = `<div class="row"><span class="addr">${short(wallet.W.address)}</span><button class="btn sm ghost" data-a="out">Disconnect</button></div>`;
  if (FT.stage === 'scanning') { tool.innerHTML = head + '<p class="msg">Searching your wallet for the fallen…</p>'; return; }
  if (FT.stage === 'running') { tool.innerHTML = head + `<ul class="steps">${['Building the transactions', 'Checking each one on the network', 'Waiting for your signature', 'Sending', 'Confirming'].map((s, i) => `<li class="${FT.stepI > i ? 'ok' : FT.stepI === i ? 'on' : ''}">${FT.stepI > i ? '✓' : FT.stepI === i ? '›' : '·'} ${s}</li>`).join('')}</ul>`; return; }
  if (FT.stage === 'done' && FT.res) {
    const r = FT.res;
    tool.innerHTML = head + `<div class="res"><p>Brought home <b>${r.closed}</b> fallen · <b>+${sol(r.back)} SOL</b> back in your wallet.</p>${r.sigs.map(s => `<a href="${solscan(s)}" target="_blank" rel="noopener">${short(s)} ↗</a>`).join('<br>')}${r.pending.length ? `<p class="msg">${r.pending.length} still confirming; check Solscan in a minute.</p>` : ''}</div><div class="row" style="margin-top:12px"><button class="btn sm pri" data-a="scan">Scan again</button></div>`;
    return;
  }
  if (!FT.scan) { tool.innerHTML = head + `<div class="row" style="margin-top:12px"><button class="btn pri" data-a="scan">Find my fallen</button></div>${FT.err ? `<p class="msg err">${esc(FT.err)}</p>` : ''}`; return; }
  const items = FT.scan.items, empty = items.filter(i => i.kind === 'empty'), dust = items.filter(i => i.kind === 'dust'), P = picked();
  const q = P.length ? fallen.quote(FT.scan, P) : null;
  const chip = i => `<span class="${i.kind === 'dust' ? 'dust' : ''}">${av({ iconUrl: i.icon ? img(i.icon, i.mint) : img('', i.mint), mint: i.mint, symbol: i.sym || '?' })}${esc(i.sym || short(i.mint))}</span>`;
  tool.innerHTML = head + `<div class="sum"><div><b>${empty.length}</b><span>fallen (empty)</span></div><div><b>${dust.length}</b><span>with dust</span></div><div class="back"><b>${q ? sol(Math.max(0, q.back), 3) : '0'}</b><span>SOL back</span></div></div>
    ${P.length ? `<div class="tags">${P.slice(0, 80).map(chip).join('')}</div>` : '<p class="msg">No fallen in this wallet. Clean bags, soldier.</p>'}
    ${dust.length ? `<label class="tg"><input type="checkbox" ${FT.dust ? 'checked' : ''} data-a="dust"> Also burn ${dust.length} worthless leftover${dust.length > 1 ? 's' : ''} (under $1) to close ${dust.length > 1 ? 'them' : 'it'}</label>` : ''}
    <div class="row"><button class="btn pri" data-a="go" ${P.length ? '' : 'disabled'}>Bring ${P.length || ''} home</button><button class="btn sm ghost" data-a="scan">Rescan</button></div>
    ${q ? `<p class="fine">${q.txs} transaction${q.txs > 1 ? 's' : ''} · network fee about ${sol(q.network, 5)} SOL · no VICZ fee</p>` : ''}${FT.err ? `<p class="msg err">${esc(FT.err)}</p>` : ''}`;
}
tool.addEventListener('click', async e => {
  const b = e.target.closest('button,input'); if (!b) return;
  if (b.dataset.w) { FT.err = ''; try { await wallet.connect(b.dataset.w); FT.scan = null; FT.stage = 'idle'; renderTool(); scanNow(); } catch (er) { FT.err = er.message || String(er); renderTool(); } return; }
  const a = b.dataset.a;
  if (a === 'out') { await wallet.disconnect(); FT.scan = null; FT.res = null; FT.stage = 'idle'; if (world) world.setFallen(0); renderTool(); }
  else if (a === 'scan') scanNow();
  else if (a === 'dust') { FT.dust = b.checked; renderTool(); if (world) world.setFallen(picked().length); }
  else if (a === 'go') runFallen();
});
async function scanNow() {
  FT.stage = 'scanning'; FT.err = ''; FT.res = null; renderTool();
  try { FT.scan = await fallen.scan(wallet.W.address); FT.stage = 'scanned'; if (world) world.setFallen(picked().length); }
  catch (er) { FT.scan = null; FT.stage = 'idle'; FT.err = 'Could not read the wallet: ' + (er.message || er); }
  renderTool();
}
async function runFallen() {
  const P = picked(); if (!P.length) return;
  FT.stage = 'running'; FT.stepI = 0; FT.err = ''; renderTool();
  const idx = { build: 0, sim: 1, sign: 2, send: 3, confirm: 4 };
  try { FT.res = await fallen.wash(FT.scan, P, s => { FT.stepI = idx[s] ?? FT.stepI; renderTool(); }); FT.stage = 'done'; if (world) world.setFallen(FT.res.closed); toast(`Brought home ${FT.res.closed} fallen · +${sol(FT.res.back)} SOL`, 'ok', 6000); }
  catch (er) { FT.stage = 'scanned'; FT.err = er.message || String(er); }
  renderTool();
}
on('wallets', () => { if (!wallet.W.address) renderTool(); });
on('wallet', () => renderTool());

// ---------------------------------------------------------------- boot
paintCA(); renderTool(); onScroll();
setTimeout(() => wallet.restore(), 600);
if (world && fNow < .2) world.hold();
const hide = () => { $('#intro').classList.add('done'); document.body.classList.remove('loading'); if (world) setTimeout(() => world.intro(), 150); };
document.body.classList.add('loading');
Promise.race([document.fonts.ready, new Promise(r => setTimeout(r, 1800))]).then(() => setTimeout(hide, 900));
loadGems(); loadTrending(); loadWhales(); pumpStream();
setInterval(loadGems, 25000); setInterval(loadTrending, 20000); setInterval(loadWhales, 60000); setInterval(() => { paintHero(); paintStream(); }, 5000);
window.__vicz = { world, F };
