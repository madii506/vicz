// VICZ · your Solana wallet through Wallet Standard (Phantom, Solflare, Backpack...). VICZ never sees a key:
// it builds unsigned transactions, your wallet shows them and signs them, and only signed bytes come back.
import { emit, store } from './core.js';

export const W = { list: [], w: null, account: null, address: null };
const reg = (...ws) => {
  for (const w of ws) {
    if (!w || !w.features || !w.features['standard:connect']) continue;
    if (!w.features['solana:signTransaction'] && !w.features['solana:signAndSendTransaction']) continue;
    if (!(w.chains || []).some(c => String(c).startsWith('solana:'))) continue;
    if (!W.list.find(x => x.name === w.name)) W.list.push(w);
  }
  emit('wallets');
  return () => {};
};
const API = Object.freeze({ register: reg });
try {
  window.addEventListener('wallet-standard:register-wallet', e => { try { e.detail(API); } catch {} });
  window.dispatchEvent(new CustomEvent('wallet-standard:app-ready', { detail: API }));
} catch {}
const use = (w, acc) => {
  W.w = w; W.account = acc; W.address = acc.address; store.set('vicz:wallet', w.name);
  if (w.features['standard:events'] && !w.__vicz) {
    w.__vicz = 1;
    w.features['standard:events'].on('change', ({ accounts }) => { if (W.w === w && accounts && accounts[0] && accounts[0].address !== W.address) { W.account = accounts[0]; W.address = accounts[0].address; emit('wallet'); } });
  }
  emit('wallet');
};
export async function connect(name) {
  const w = W.list.find(x => x.name === name) || W.list[0];
  if (!w) throw new Error('No Solana wallet found. Install Phantom, Solflare or Backpack.');
  const r = await w.features['standard:connect'].connect();
  const acc = (r && r.accounts && r.accounts[0]) || w.accounts[0];
  if (!acc) throw new Error('The wallet returned no account.');
  use(w, acc);
  return W.address;
}
export async function restore() {
  const n = store.get('vicz:wallet'); if (!n || W.address) return;
  const w = W.list.find(x => x.name === n); if (!w) return;
  try { const r = await w.features['standard:connect'].connect({ silent: true }); const acc = (r && r.accounts && r.accounts[0]) || w.accounts[0]; if (acc) use(w, acc); } catch {}
}
export async function disconnect() {
  try { W.w && W.w.features['standard:disconnect'] && await W.w.features['standard:disconnect'].disconnect(); } catch {}
  W.w = W.account = W.address = null; store.del('vicz:wallet'); emit('wallet');
}
const chain = () => (W.account.chains || []).find(c => c === 'solana:mainnet') || 'solana:mainnet';
// sign every transaction in one wallet prompt when the wallet allows it; returns the signed bytes
export const canSignAll = () => !!(W.w && W.w.features['solana:signTransaction']);
export async function signAll(txs) {
  if (!W.w || !W.account) throw new Error('Connect a wallet first.');
  const f = W.w.features['solana:signTransaction'];
  const out = await f.signTransaction(...txs.map(transaction => ({ account: W.account, transaction, chain: chain() })));
  return out.map(o => o.signedTransaction);
}
// for wallets that only sign and send: one prompt per transaction, the wallet lands it and returns the signature
export async function signAndSend(tx) {
  const f = W.w.features['solana:signAndSendTransaction'];
  const [r] = await f.signAndSendTransaction({ account: W.account, transaction: tx, chain: chain(), options: { skipPreflight: true } });
  return r.signature; // Uint8Array
}
