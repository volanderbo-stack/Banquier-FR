// Exercise generators and the quiz/test runner
BF.ex = (() => {
  const U = BF.util;
  const D = BF.data;
  const esc = U.esc;

  const TYPES = {
    mix: { ua: 'Мікс', icon: '🎲', desc: 'Різні типи завдань' },
    fr_ua: { ua: 'Переклад FR → UA', icon: '🔤', desc: 'Оберіть українське значення' },
    ua_fr: { ua: 'Переклад UA → FR', icon: '🇫🇷', desc: 'Оберіть французький термін' },
    listen: { ua: 'Аудіювання', icon: '🎧', desc: 'Почуйте й упізнайте слово' },
    write: { ua: 'Написання', icon: '⌨️', desc: 'Напишіть термін французькою' },
    cloze: { ua: 'Пропуски', icon: '🧩', desc: 'Вставте слово в речення' },
    reply: { ua: 'Відповідь клієнту', icon: '💬', desc: 'Оберіть репліку працівника банку' },
    order: { ua: 'Порядок слів', icon: '🔀', desc: 'Зберіть фразу зі слів' },
    match: { ua: 'Знайдіть пари', icon: '🔗', desc: 'Поєднайте FR і UA' },
    phrases: { ua: 'Розмовні фрази', icon: '🗣️', desc: 'Як сказати це клієнту?' },
    numbers: { ua: 'Числа та суми', icon: '💶', desc: 'Почуйте суму, запишіть цифрами' }
  };

  // ---------- pools ----------
  const vocabPool = (t, l) => D.vocab.filter(w => (t === 'all' || w.t === t) && (l === 'all' || w.l === l));

  function distract(w, field, n, pool) {
    const val = w[field];
    let c = U.uniqBy(U.shuffle(pool.filter(x => x[field] !== val)), x => x[field]);
    if (c.length < n) c = U.uniqBy(c.concat(U.shuffle(D.vocab.filter(x => x.l === w.l && x[field] !== val))), x => x[field]);
    if (c.length < n) c = U.uniqBy(c.concat(U.shuffle(D.vocab.filter(x => x[field] !== val))), x => x[field]);
    return c.slice(0, n).map(x => x[field]);
  }

  function replyPairs(t, l) {
    const pairs = [];
    D.dialogues.filter(d => (t === 'all' || d.t === t) && (l === 'all' || d.l === l)).forEach(d => {
      d.lines.forEach((ln, i) => {
        const nx = d.lines[i + 1];
        if (ln[0] === 'C' && nx && nx[0] === 'B') {
          pairs.push({ c: ln[1], cu: ln[2], b: nx[1], bu: nx[2], cid: d.c, bid: d.b, l: d.l, t: d.t, src: d.id });
        }
      });
    });
    D.videos.filter(v => (t === 'all' || v.t === t) && (l === 'all' || v.l === l)).forEach(v => {
      v.tasks.forEach(task => {
        pairs.push({ c: task.c, cu: task.cu, b: task.opts[0], bu: task.mu, wrong: task.opts.slice(1), cid: v.c, bid: v.b, l: v.l, t: v.t, src: v.id });
      });
    });
    return pairs;
  }
  function bankerLines(l, exceptSrc) {
    return D.dialogues.filter(d => d.l === l && d.id !== exceptSrc).flatMap(d => d.lines.filter(x => x[0] === 'B').map(x => x[1]));
  }

  // ---------- question builders ----------
  const chr = id => D.characters[id];

  function qFrUa(w, pool) {
    return {
      kind: 'choice', label: 'Що означає?', word: w.f,
      prompt: `<div class="q-big">${esc(w.f)} ${U.sayBtn(w.f)}</div>`,
      plain: w.f, say: w.f,
      options: U.shuffle([w.u, ...distract(w, 'u', 3, pool)]), answer: w.u,
      explain: `${w.f} — ${w.u}`
    };
  }
  function qUaFr(w, pool) {
    return {
      kind: 'choice', label: 'Як це французькою?', word: w.f,
      prompt: `<div class="q-big">${esc(w.u)}</div>`, plain: w.u,
      options: U.shuffle([w.f, ...distract(w, 'f', 3, pool)]), answer: w.f,
      sayAfter: w.f, explain: `${w.u} — ${w.f}`
    };
  }
  function qListen(w, pool) {
    return {
      kind: 'choice', label: 'Аудіювання: яке слово прозвучало?', word: w.f,
      prompt: `<div class="q-big">${U.sayBtn(w.f, 'f', 'big')}</div><div class="q-hint">Натисніть 🔊, щоб прослухати ще раз</div>`,
      plain: '🔊 (аудіо)', say: w.f,
      options: U.shuffle([w.f, ...distract(w, 'f', 3, pool)]), answer: w.f,
      explain: `${w.f} — ${w.u}`
    };
  }
  function qWrite(w) {
    const first = U.alts(w.f)[0];
    const c = U.stripArticle(first);
    const hint = first.slice(0, first.length - c.length) + c[0] + '…' + ` (${c.length} симв.)`;
    return {
      kind: 'input', label: 'Напишіть французькою', word: w.f,
      prompt: `<div class="q-big">${esc(w.u)}</div><div class="q-hint">Підказка: ${esc(hint)}</div>`,
      plain: w.u, answer: w.f, sayAfter: first, explain: `${w.u} — ${w.f}`,
      check(input) {
        const n = U.norm(input);
        if (!n) return { ok: false };
        for (const a of U.alts(w.f)) {
          const na = U.norm(a), nc = U.norm(U.stripArticle(a));
          if (n === na) return { ok: true };
          if (n === nc && na !== nc) return { ok: true, note: `Не забувайте артикль: «${a}»` };
          if (na.length >= 5 && U.lev(n, na) <= 1) return { ok: true, note: `Майже! Правильне написання: «${a}»` };
        }
        return { ok: false };
      }
    };
  }
  function qCloze(w, pool) {
    const c = U.core(w.f);
    const i = w.e.toLowerCase().indexOf(c.toLowerCase());
    if (!c || i < 0) return null;
    const sentence = w.e.slice(0, i) + '_____' + w.e.slice(i + c.length);
    const others = U.uniqBy(U.shuffle(pool.concat(U.shuffle(D.vocab.filter(x => x.l === w.l)))).map(x => U.core(x.f)), x => x)
      .filter(x => x && x.toLowerCase() !== c.toLowerCase()).slice(0, 3);
    return {
      kind: 'choice', label: 'Вставте пропущене слово', word: w.f,
      prompt: `<div class="q-sentence">${esc(sentence)}</div><div class="q-hint">${esc(w.eu)}</div>`,
      plain: sentence, options: U.shuffle([c, ...others]), answer: c, sayAfter: w.e, explain: w.e
    };
  }
  function qOrder(item) {
    const tokens = item.fr.split(' ');
    if (tokens.length < 3 || tokens.length > 13) return null;
    let sh = U.shuffle(tokens);
    for (let k = 0; k < 4 && sh.join(' ') === item.fr; k++) sh = U.shuffle(tokens);
    return {
      kind: 'order', label: 'Складіть фразу французькою',
      prompt: `<div class="q-sentence">${esc(item.ua)}</div>`, plain: item.ua,
      tokens: sh, answer: item.fr, sayAfter: item.fr, explain: item.fr
    };
  }
  function qReply(p) {
    let wrong = p.wrong;
    if (!wrong) {
      const pool = bankerLines(p.l, p.src).filter(x => x !== p.b);
      wrong = U.sample(pool, 2);
    }
    const c = chr(p.cid), b = chr(p.bid);
    return {
      kind: 'choice', label: 'Що відповість працівник банку?',
      prompt: `<div class="client-line">${BF.scene.avatarCircle(p.cid)}<div style="flex:1"><div class="small muted">${esc(c.name)}:</div><div class="fr">${esc(p.c)}</div><div class="q-hint">${esc(p.cu)}</div></div>${U.sayBtn(p.c, c.g)}</div>`,
      plain: p.c, say: p.c, sayG: c.g,
      options: U.shuffle([p.b, ...wrong]), answer: p.b, sayAfter: p.b, sayAfterG: b.g, explain: p.b
    };
  }
  function qPhrase(p, pool) {
    const others = U.sample(pool.filter(x => x.fr !== p.fr), 3).map(x => x.fr);
    return {
      kind: 'choice', label: 'Як сказати це клієнту французькою?',
      prompt: `<div class="q-sentence">${esc(p.ua)}</div>`, plain: p.ua,
      options: U.shuffle([p.fr, ...others]), answer: p.fr, sayAfter: p.fr, explain: p.fr
    };
  }
  function randomAmount(l) {
    const r = Math.random();
    if (l === 'A1') return [15, 20, 40, 75, 90, 99, 120, 150, 180, 250, 300, 480, 500, 650, 720, 800, 970][Math.floor(r * 17)];
    if (l === 'A2') {
      const base = Math.round((300 + Math.random() * 25000) / 10) * 10;
      return Math.random() < .35 ? base + [0.5, 0.2, 0.75, 0.99][Math.floor(Math.random() * 4)] : base;
    }
    const base = Math.round(1000 + Math.random() * 280000);
    return Math.random() < .5 ? base + Math.round(Math.random() * 99) / 100 : base;
  }
  function qNumber(l) {
    const x = randomAmount(l);
    const words = U.amountFr(x);
    return {
      kind: 'number', label: 'Прослухайте суму й запишіть цифрами',
      prompt: `<div class="q-big">${U.sayBtn(words, 'f', 'big')}</div><div class="q-hint">Наприклад: 1250,50</div>`,
      plain: '🔊 сума', say: words, answer: U.formatEUR(x), explain: `${U.formatEUR(x)} — ${words}`,
      check(input) {
        const n = parseFloat(String(input).replace(/[\s  €]/g, '').replace(',', '.'));
        return { ok: !isNaN(n) && Math.abs(n - x) < 0.005 };
      }
    };
  }
  function qMatch(words) {
    return {
      kind: 'match', label: 'Знайдіть пари', pairs: words.map(w => [w.f, w.u]),
      prompt: '<div class="q-hint">Натисніть на французьке слово, потім — на його переклад.</div>',
      plain: 'Пари слів', answer: words.map(w => `${w.f} — ${w.u}`).join('; ')
    };
  }

  // ---------- builders ----------
  function build(type, { t = 'all', l = 'A1', n = 10, used = new Set() } = {}) {
    let pool = vocabPool(t, l);
    if (pool.length < 4) pool = vocabPool('all', l);
    const fresh = () => U.shuffle(pool.filter(w => !used.has(w.f)));
    const takeWords = k => {
      // prefer words that are due for review or not yet learned
      const st = BF.store;
      const ws = fresh().sort((a, b) => (st.word(a.f).box - st.word(b.f).box) + (Math.random() - .5) * 2).slice(0, k);
      ws.forEach(w => used.add(w.f));
      return ws;
    };
    const fill = (fn, k) => takeWords(k).map(w => fn(w, pool)).filter(Boolean);
    switch (type) {
      case 'fr_ua': return fill(qFrUa, n);
      case 'ua_fr': return fill(qUaFr, n);
      case 'listen': return fill(qListen, n);
      case 'write': return fill(qWrite, n);
      case 'cloze': {
        const out = [];
        for (const w of fresh()) {
          if (out.length >= n) break;
          const q = qCloze(w, pool);
          if (q) { out.push(q); used.add(w.f); }
        }
        return out;
      }
      case 'reply': {
        let ps = replyPairs(t, l);
        if (ps.length < n && t !== 'all') ps = ps.concat(U.shuffle(replyPairs('all', l)).slice(0, n - ps.length));
        ps = U.shuffle(ps).filter(p => !used.has(p.c)).slice(0, n);
        ps.forEach(p => used.add(p.c));
        return ps.map(qReply);
      }
      case 'order': {
        const items = D.phrases.filter(p => l === 'all' || p.l === l).map(p => ({ fr: p.fr, ua: p.ua }))
          .concat(D.dialogues.filter(d => (t === 'all' || d.t === t) && (l === 'all' || d.l === l))
            .flatMap(d => d.lines.map(x => ({ fr: x[1], ua: x[2] }))));
        return U.shuffle(items).filter(x => !used.has(x.fr)).map(qOrder).filter(Boolean).slice(0, n)
          .map(q => { used.add(q.answer); return q; });
      }
      case 'phrases': {
        const ps = D.phrases.filter(p => l === 'all' || p.l === l);
        return U.sample(ps, n).map(p => qPhrase(p, ps));
      }
      case 'numbers': return Array.from({ length: n }, () => qNumber(l === 'all' ? 'A2' : l));
      case 'match': {
        const rounds = Math.max(1, Math.round(n / 5));
        const out = [];
        for (let r = 0; r < rounds; r++) {
          const ws = U.uniqBy(takeWords(5), w => w.u);
          if (ws.length >= 3) out.push(qMatch(ws));
        }
        return out;
      }
      case 'mix': {
        const plan = [['fr_ua', 2], ['ua_fr', 2], ['listen', 1], ['cloze', 1], ['reply', 2], ['order', 1], ['write', 1]];
        let qs = plan.flatMap(([ty, k]) => build(ty, { t, l, n: k, used }));
        if (qs.length < n) qs = qs.concat(build('fr_ua', { t, l, n: n - qs.length, used }));
        return U.shuffle(qs).slice(0, n);
      }
    }
    return [];
  }

  function buildTest(t, l) {
    const used = new Set();
    const plan = t === 'all'
      ? [['fr_ua', 5], ['ua_fr', 4], ['listen', 3], ['cloze', 3], ['write', 2], ['reply', 4], ['order', 2], ['numbers', 2]]
      : [['fr_ua', 3], ['ua_fr', 2], ['listen', 2], ['cloze', 1], ['write', 1], ['reply', 2], ['order', 1]];
    let qs = plan.flatMap(([ty, k]) => build(ty, { t, l, n: k, used }));
    const target = t === 'all' ? 25 : 12;
    for (const ty of ['fr_ua', 'reply', 'order']) {
      if (qs.length >= target) break;
      qs = qs.concat(build(ty, { t, l, n: target - qs.length, used }));
    }
    return U.shuffle(qs);
  }

  // ---------- runner ----------
  const ACCENTS = ['é', 'è', 'ê', 'à', 'â', 'ç', 'ô', 'î', 'û', 'ù', 'ë', 'ï', 'œ', '’'];

  function run(root, qs, opts = {}) {
    let i = 0, answered = false;
    const results = [];
    if (!qs.length) {
      root.innerHTML = `<div class="card empty">Для цього вибору поки немає завдань. Спробуйте іншу тему або рівень.</div>`;
      return;
    }

    function say(text, g) { if (text) BF.speech.speak(text, { g: g || 'f' }); }

    function render() {
      answered = false;
      const q = qs[i];
      let body = '';
      if (q.kind === 'choice') {
        body = `<div class="options">${q.options.map((o, k) =>
          `<button class="opt" data-opt="${k}"><span class="muted small">${k + 1}.</span> ${esc(o)}</button>`).join('')}</div>`;
      } else if (q.kind === 'input' || q.kind === 'number') {
        body = `<div class="row"><input class="input" id="qIn" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${q.kind === 'number' ? 'Наприклад: 1250,50' : 'Ваша відповідь французькою…'}" style="flex:1;min-width:200px">
          <button class="btn btn-primary" data-q="check">Перевірити</button></div>
          ${q.kind === 'input' ? `<div class="chips" style="margin-top:8px">${ACCENTS.map(a => `<button class="chip" data-acc="${a}">${a}</button>`).join('')}</div>` : ''}`;
      } else if (q.kind === 'order') {
        body = `<div class="tokens answer" id="ans"></div>
          <div class="tokens" id="pool">${q.tokens.map((tk, k) => `<button class="token" data-tok="${k}">${esc(tk)}</button>`).join('')}</div>
          <div class="row" style="margin-top:10px"><button class="btn btn-sm" data-q="clear">Очистити</button><span class="spacer"></span><button class="btn btn-primary" data-q="check">Перевірити</button></div>`;
      } else if (q.kind === 'match') {
        const left = U.shuffle(q.pairs.map((p, k) => ({ k, s: p[0] })));
        const right = U.shuffle(q.pairs.map((p, k) => ({ k, s: p[1] })));
        body = `<div class="match-grid">
          <div class="match-col">${left.map(x => `<button class="match-item" data-ml="${x.k}">${esc(x.s)}</button>`).join('')}</div>
          <div class="match-col">${right.map(x => `<button class="match-item" data-mr="${x.k}">${esc(x.s)}</button>`).join('')}</div></div>`;
      }
      root.innerHTML = `<div class="quiz card">
        <div class="quiz-top">
          <button class="btn btn-sm btn-ghost" data-q="exit" title="Вийти">✕</button>
          ${U.bar(i / qs.length * 100, opts.test ? 'accent' : '')}
          <span class="small muted">${i + 1} / ${qs.length}</span>
        </div>
        ${opts.title ? `<div class="small muted" style="margin-bottom:4px">${esc(opts.title)}</div>` : ''}
        <div class="q-label">${esc(q.label)}</div>
        <div class="q-prompt">${q.prompt}</div>
        ${body}
        <div id="fb"></div>
        <div class="quiz-next hidden"><button class="btn btn-primary" data-q="next">${i + 1 < qs.length ? 'Далі →' : 'Результат'}</button></div>
      </div>`;
      if (q.say) setTimeout(() => { if (qs[i] === q) say(q.say, q.sayG); }, 300);
      const inp = root.querySelector('#qIn');
      if (inp) inp.focus();
      if (q.kind === 'match') initMatch(q);
      if (q.kind === 'order') initOrder(q);
    }

    function initOrder(q) {
      const ans = root.querySelector('#ans');
      root.querySelector('#pool').addEventListener('click', e => {
        const b = e.target.closest('[data-tok]');
        if (!b || answered || b.classList.contains('used')) return;
        b.classList.add('used');
        const t = document.createElement('button');
        t.className = 'token';
        t.dataset.from = b.dataset.tok;
        t.textContent = q.tokens[+b.dataset.tok];
        ans.appendChild(t);
      });
      ans.addEventListener('click', e => {
        const t = e.target.closest('[data-from]');
        if (!t || answered) return;
        root.querySelector(`[data-tok="${t.dataset.from}"]`).classList.remove('used');
        t.remove();
      });
    }

    function initMatch(q) {
      let sel = null, errors = 0, done = 0;
      const errWords = new Set();
      root.querySelector('.match-grid').addEventListener('click', e => {
        const l = e.target.closest('[data-ml]'), r = e.target.closest('[data-mr]');
        if (l && !l.classList.contains('done')) {
          root.querySelectorAll('[data-ml]').forEach(x => x.classList.remove('sel'));
          l.classList.add('sel');
          sel = l;
          say(q.pairs[+l.dataset.ml][0]);
          return;
        }
        if (r && sel && !r.classList.contains('done')) {
          if (r.dataset.mr === sel.dataset.ml) {
            sel.classList.remove('sel');
            sel.classList.add('done'); r.classList.add('done');
            done++;
            sel = null;
            if (done === q.pairs.length) {
              q.pairs.forEach(p => BF.store.wordResult(p[0], !errWords.has(p[0])));
              answer(errors === 0, errors ? `Помилок: ${errors}` : '', errors ? `Помилок: ${errors}` : '');
            }
          } else {
            errors++;
            errWords.add(q.pairs[+sel.dataset.ml][0]);
            r.classList.add('err');
            setTimeout(() => r.classList.remove('err'), 500);
          }
        }
      });
    }

    function answer(ok, given, note) {
      if (answered) return;
      answered = true;
      const q = qs[i];
      results.push({ q, ok, given });
      if (q.word) BF.store.wordResult(q.word, ok);
      BF.store.exResult(ok);
      BF.store.addXP(ok ? 5 : 1);
      if (opts.test) { setTimeout(next, 700); return; }
      const fb = root.querySelector('#fb');
      const sayAns = q.sayAfter ? U.sayBtn(q.sayAfter, q.sayAfterG || 'f') : '';
      fb.innerHTML = ok
        ? `<div class="feedback ok">✓ Правильно!${note ? `<div class="fb-detail">${esc(note)}</div>` : ''}${q.explain && q.kind !== 'choice' ? `<div class="fb-detail">${sayAns}<span>${esc(q.explain)}</span></div>` : (sayAns ? `<div class="fb-detail">${sayAns}<span>${esc(q.explain || '')}</span></div>` : '')}</div>`
        : `<div class="feedback bad">✗ Не зовсім.${note ? ` ${esc(note)}` : ''}<div class="fb-detail">${sayAns}<span>Правильно: <b>${esc(q.kind === 'match' ? q.answer : (q.explain || q.answer))}</b></span></div></div>`;
      if (q.sayAfter) say(q.sayAfter, q.sayAfterG);
      root.querySelector('.quiz-next').classList.remove('hidden');
      root.querySelector('[data-q="next"]').focus();
    }

    function next() {
      BF.speech.cancel();
      i++;
      if (i >= qs.length) finish(); else render();
    }

    function check() {
      const q = qs[i];
      if (answered) return;
      if (q.kind === 'input' || q.kind === 'number') {
        const inp = root.querySelector('#qIn');
        if (!inp.value.trim()) { inp.focus(); return; }
        const r = q.check(inp.value);
        inp.disabled = true;
        answer(r.ok, inp.value, r.note);
      } else if (q.kind === 'order') {
        const built = [...root.querySelectorAll('#ans [data-from]')].map(t => t.textContent).join(' ');
        if (!built) return;
        answer(built === q.answer, built);
      }
    }

    function finish() {
      const correct = results.filter(r => r.ok).length;
      const pct = U.pct(correct, results.length);
      BF.store.sessionDone();
      if (opts.onFinish) opts.onFinish(pct, results);
      const msg = pct >= 90 ? 'Excellent ! Чудовий результат 🎉' : pct >= 75 ? 'Très bien ! Дуже добре 👏' : pct >= 50 ? 'Pas mal ! Непогано — повторіть помилки' : 'Courage ! Варто повторити матеріал';
      const list = opts.test ? results : results.filter(r => !r.ok);
      root.innerHTML = `<div class="quiz card">
        <div class="result-big">
          ${U.ring(pct, pct + '%', pct >= 80 ? 'var(--ok)' : pct >= 50 ? 'var(--accent)' : 'var(--bad)')}
          <h2>${msg}</h2>
          <p class="muted">Правильно ${correct} з ${results.length}${opts.test ? (pct >= 80 ? ' · Тест складено ✓' : ' · Для заліку потрібно 80 %') : ''}</p>
        </div>
        ${list.length ? `<h3>${opts.test ? 'Перегляд відповідей' : 'Над чим попрацювати'}</h3>
          <div>${list.map(r => `<div class="review-item">${r.ok ? '✅' : '❌'} <span class="muted">${esc(r.q.plain || '')}</span><br>
            ${r.ok ? '' : `<span>Ваша відповідь: ${esc(r.given || '—')}</span><br>`}
            <b>${esc(r.q.kind === 'match' ? r.q.answer : (r.q.explain || r.q.answer))}</b></div>`).join('')}</div>` : ''}
        <div class="row" style="margin-top:16px;justify-content:center">
          ${opts.retry ? '<button class="btn btn-primary" data-q="retry">↻ Ще раз</button>' : ''}
          <button class="btn" data-q="exit">Готово</button>
        </div></div>`;
    }

    root.onclick = e => {
      const opt = e.target.closest('[data-opt]');
      if (opt && !answered) {
        const q = qs[i];
        const val = q.options[+opt.dataset.opt];
        const ok = val === q.answer;
        root.querySelectorAll('.opt').forEach(b => {
          b.disabled = true;
          if (opts.test) { if (b === opt) b.classList.add('chosen'); return; }
          const v = q.options[+b.dataset.opt];
          if (v === q.answer) b.classList.add('correct');
          else if (b === opt) b.classList.add('wrong');
        });
        answer(ok, val);
        return;
      }
      const acc = e.target.closest('[data-acc]');
      if (acc) {
        const inp = root.querySelector('#qIn');
        if (inp && !inp.disabled) {
          const s = inp.selectionStart ?? inp.value.length, en = inp.selectionEnd ?? inp.value.length;
          inp.value = inp.value.slice(0, s) + acc.dataset.acc + inp.value.slice(en);
          inp.focus();
          inp.setSelectionRange(s + 1, s + 1);
        }
        return;
      }
      const b = e.target.closest('[data-q]');
      if (!b) return;
      const a = b.dataset.q;
      if (a === 'check') check();
      else if (a === 'next') next();
      else if (a === 'clear') {
        root.querySelectorAll('#ans [data-from]').forEach(t => t.remove());
        root.querySelectorAll('.token.used').forEach(t => t.classList.remove('used'));
      }
      else if (a === 'exit') { BF.speech.cancel(); opts.onExit && opts.onExit(); }
      else if (a === 'retry') opts.retry && opts.retry();
    };
    root.onkeydown = e => {
      if (e.key === 'Enter') {
        if (answered && !opts.test) { e.preventDefault(); next(); }
        else if (e.target.id === 'qIn') { e.preventDefault(); check(); }
        return;
      }
      if (!answered && qs[i] && qs[i].kind === 'choice' && /^[1-4]$/.test(e.key) && e.target.tagName !== 'INPUT') {
        const b = root.querySelector(`[data-opt="${+e.key - 1}"]`);
        if (b) b.click();
      }
    };
    render();
  }

  return { TYPES, build, buildTest, run, vocabPool, replyPairs };
})();
