window.BF = window.BF || { data: {} };
BF.views = BF.views || {};

BF.util = (() => {
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const shuffle = arr => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const sample = (arr, n) => shuffle(arr).slice(0, n);
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];
  const uniqBy = (arr, fn) => {
    const seen = new Set();
    return arr.filter(x => { const k = fn(x); if (seen.has(k)) return false; seen.add(k); return true; });
  };

  // Accent-, case- and punctuation-insensitive form for answer checking
  const norm = s => String(s || '')
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[’`´]/g, "'")
    .replace(/[«»"!?.,;:()…–—\-\/]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const stripArticle = s => s.replace(/^(le|la|les|un|une|des)\s+/i, '').replace(/^l['’]/i, '');
  const alts = f => f.split(' / ').map(x => x.trim());
  const core = f => stripArticle(alts(f)[0]);

  function lev(a, b) {
    const m = a.length, n = b.length;
    if (!m) return n;
    if (!n) return m;
    let prev = Array.from({ length: n + 1 }, (_, j) => j);
    for (let i = 1; i <= m; i++) {
      const cur = [i];
      for (let j = 1; j <= n; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      }
      prev = cur;
    }
    return prev[n];
  }

  const pad = n => String(n).padStart(2, '0');
  const localDate = (d = new Date()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

  const LEVELS = ['A1', 'A2', 'B1'];

  // ---- Numbers in French words (traditional spelling) ----
  const U = ['zéro', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze',
    'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];
  const T = ['', '', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante', 'quatre-vingt', 'quatre-vingt'];

  function below100(n, final) {
    if (n < 20) return U[n];
    const t = Math.floor(n / 10), u = n % 10;
    if (t === 7 || t === 9) {
      if (t === 7 && u === 1) return 'soixante et onze';
      return T[t] + '-' + U[10 + u];
    }
    if (t === 8) return u === 0 ? (final ? 'quatre-vingts' : 'quatre-vingt') : 'quatre-vingt-' + U[u];
    if (u === 0) return T[t];
    if (u === 1) return T[t] + ' et un';
    return T[t] + '-' + U[u];
  }
  function below1000(n, final) {
    const h = Math.floor(n / 100), r = n % 100;
    let s = '';
    if (h) s = h === 1 ? 'cent' : U[h] + ' cent' + (r === 0 && final ? 's' : '');
    if (r) s += (s ? ' ' : '') + below100(r, final);
    return s;
  }
  function numFr(n) {
    n = Math.floor(n);
    if (n === 0) return 'zéro';
    const mil = Math.floor(n / 1e6), k = Math.floor((n % 1e6) / 1000), r = n % 1000;
    const parts = [];
    if (mil) parts.push(mil === 1 ? 'un million' : below1000(mil, true) + ' millions');
    if (k) parts.push(k === 1 ? 'mille' : below1000(k, false) + ' mille');
    if (r) parts.push(below1000(r, true));
    return parts.join(' ');
  }
  function amountFr(x) {
    const e = Math.floor(x + 1e-9);
    const c = Math.round((x - e) * 100);
    let s = numFr(e) + (e > 1 ? ' euros' : ' euro');
    if (c) s += ' et ' + numFr(c) + (c > 1 ? ' centimes' : ' centime');
    return s;
  }
  const formatEUR = x => x.toLocaleString('fr-FR', {
    minimumFractionDigits: x % 1 ? 2 : 0, maximumFractionDigits: 2
  }) + ' €';

  let toastTimer;
  function toast(msg) {
    const el = document.getElementById('toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2400);
  }

  const lvlBadge = l => `<span class="badge lvl-${l}">${l}</span>`;
  const pct = (a, b) => b ? Math.round(a / b * 100) : 0;
  const ring = (p, label, color) =>
    `<div class="ring" style="--p:${p};${color ? `--c:${color}` : ''}"><b>${label ?? p + '%'}</b></div>`;
  const bar = (p, cls = '') => `<div class="bar ${cls}"><i style="width:${Math.max(0, Math.min(100, p))}%"></i></div>`;
  const sayBtn = (text, g = 'f', cls = '') =>
    `<button class="say ${cls}" data-say="${esc(text)}" data-g="${g}" title="Прослухати" aria-label="Прослухати">🔊</button>`;

  return {
    esc, shuffle, sample, pick, uniqBy, norm, stripArticle, alts, core, lev, localDate, LEVELS,
    numFr, amountFr, formatEUR, toast, lvlBadge, pct, ring, bar, sayBtn
  };
})();
