// Dictionary, flashcards, dialogues, phrases, grammar
(() => {
  const U = BF.util, D = BF.data, S = BF.store, esc = U.esc;

  // ---------- Dictionary ----------
  BF.views.dictionary = (el, { params }) => {
    let q = '', t = params.get('t') || 'all', l = params.get('l') || 'all', onlyNew = false;
    el.innerHTML = `
      <div class="page-head"><div><h1>Словник банківських термінів</h1><p>Французька — українська, з озвученням, прикладами та поясненнями французьких реалій.</p></div></div>
      <div class="toolbar">
        <input class="input" id="dq" placeholder="🔎 Пошук французькою або українською…" style="flex:1;min-width:220px">
        ${BF.ui.selectTopic('dt', t, true, true)}
        ${BF.ui.selectLevel('dl', l)}
        <label class="check small"><input type="checkbox" id="dn"> лише невивчені</label>
      </div>
      <div class="row" style="margin-bottom:12px"><span class="muted small" id="dc"></span><span class="spacer"></span>
        <a class="btn btn-sm btn-primary" id="dfl" href="#/flashcards">🃏 Вчити ці слова картками</a></div>
      <div id="dlist"></div>`;
    const list = el.querySelector('#dlist');
    BF.ui.bindWords(list);

    function render() {
      const nq = U.norm(q);
      const words = D.vocab.filter(w =>
        (t === 'all' || w.t === t) && (l === 'all' || w.l === l) &&
        (!onlyNew || !S.isLearned(w.f)) &&
        (!nq || U.norm(w.f).includes(nq) || w.u.toLowerCase().includes(q.toLowerCase().trim())));
      el.querySelector('#dc').textContent = `Знайдено термінів: ${words.length} · вивчено: ${words.filter(w => S.isLearned(w.f)).length}`;
      el.querySelector('#dfl').href = `#/flashcards?t=${t}&l=${l}`;
      const groups = [D.general, ...D.topics].map(tp => ({ tp, ws: words.filter(w => w.t === tp.id) })).filter(g => g.ws.length);
      list.innerHTML = groups.length ? groups.map(g => `<div class="card"><h3>${g.tp.icon} ${esc(g.tp.ua)} <span class="muted small">· ${esc(g.tp.fr)}</span></h3>${BF.ui.wordRows(g.ws)}</div>`).join('')
        : '<div class="card empty">Нічого не знайдено</div>';
    }
    el.querySelector('#dq').addEventListener('input', e => { q = e.target.value; render(); });
    el.querySelector('#dt').addEventListener('change', e => { t = e.target.value; render(); });
    el.querySelector('#dl').addEventListener('change', e => { l = e.target.value; render(); });
    el.querySelector('#dn').addEventListener('change', e => { onlyNew = e.target.checked; render(); });
    render();
  };

  // ---------- Flashcards ----------
  BF.views.flashcards = (el, { params }) => {
    let t = params.get('t') || 'all', l = params.get('l') || S.settings.level, dir = 'fr';
    let deck = [], i = 0, known = 0, flipped = false;

    el.innerHTML = `
      <div class="page-head"><div><h1>Картки</h1><p>Інтервальне повторення: слова, які ви знаєте, повертаються рідше; складні — частіше.</p></div></div>
      <div class="toolbar">
        ${BF.ui.selectTopic('ft', t, true, true)}
        ${BF.ui.selectLevel('fl', l)}
        <select class="input" id="fd"><option value="fr">FR → UA</option><option value="ua">UA → FR</option></select>
        <button class="btn btn-primary" id="fgo">↻ Нова колода</button>
      </div>
      <div id="fbox" class="flash-wrap"></div>`;
    const box = el.querySelector('#fbox');

    function makeDeck() {
      const now = Date.now();
      const pool = D.vocab.filter(w => (t === 'all' || w.t === t) && (l === 'all' || w.l === l));
      const st = w => S.word(w.f);
      const due = pool.filter(w => st(w).seen && st(w).due <= now);
      const fresh = pool.filter(w => !st(w).seen);
      const rest = pool.filter(w => st(w).seen && st(w).due > now).sort((a, b) => st(a).due - st(b).due);
      deck = U.shuffle(due).concat(U.shuffle(fresh)).concat(rest).slice(0, 20);
      deck = U.shuffle(deck);
      i = 0; known = 0;
      render();
    }
    function render() {
      flipped = false;
      if (!deck.length) { box.innerHTML = '<div class="card empty">Немає слів для цього вибору.</div>'; return; }
      if (i >= deck.length) {
        box.innerHTML = `<div class="card result-big">${U.ring(U.pct(known, deck.length))}
          <h2>Колоду завершено!</h2><p class="muted">Знаю: ${known} з ${deck.length}. Слова, які ви не знали, з'являться знову найближчим часом.</p>
          <div class="row" style="justify-content:center"><button class="btn btn-primary" id="fagain">↻ Ще одна колода</button>
          <a class="btn" href="#/practice?t=${t}&l=${l}&type=mix&go=1">✏️ Закріпити у вправі</a></div></div>`;
        box.querySelector('#fagain').onclick = makeDeck;
        return;
      }
      const w = deck[i];
      const front = dir === 'fr'
        ? `<div class="big">${esc(w.f)}</div>${w.g ? `<div class="muted small">${esc(w.g)}</div>` : ''}${U.sayBtn(w.f)}`
        : `<div class="big" style="font-size:1.4rem">${esc(w.u)}</div>`;
      const back = `<div class="big" style="font-size:1.35rem">${esc(dir === 'fr' ? w.u : w.f)}</div>
        ${dir === 'ua' ? U.sayBtn(w.f) : ''}
        <div class="ex">${esc(w.e)}<br><i>${esc(w.eu)}</i></div>
        ${w.n ? `<div class="small">💡 ${esc(w.n)}</div>` : ''}`;
      box.innerHTML = `
        <div class="row small muted" style="margin-bottom:8px"><span>${i + 1} / ${deck.length}</span><span class="spacer"></span>${U.lvlBadge(w.l)} ${BF.ui.dots(w.f)}</div>
        <div class="flash" id="card"><div class="flash-inner">
          <div class="flash-face">${front}<div class="small muted">натисніть, щоб перевернути (пробіл)</div></div>
          <div class="flash-face back">${back}</div>
        </div></div>
        <div class="flash-actions">
          <button class="btn btn-bad btn-lg" data-k="0">✗ Не знаю <span class="small">(←)</span></button>
          <button class="btn btn-ok btn-lg" data-k="1">✓ Знаю <span class="small">(→)</span></button>
        </div>`;
      if (dir === 'fr') BF.speech.speak(w.f);
      box.querySelector('#card').onclick = e => { if (!e.target.closest('[data-say]')) flip(); };
      box.querySelectorAll('[data-k]').forEach(b => { b.onclick = () => grade(b.dataset.k === '1'); });
    }
    function flip() {
      const c = box.querySelector('#card');
      if (!c) return;
      flipped = !flipped;
      c.classList.toggle('flipped', flipped);
      if (flipped && dir === 'ua') BF.speech.speak(deck[i].f);
    }
    function grade(ok) {
      const w = deck[i];
      S.wordResult(w.f, ok);
      S.addXP(ok ? 2 : 1);
      if (ok) known++;
      i++;
      render();
    }
    const onKey = e => {
      if (/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) return;
      if (i >= deck.length) return;
      if (e.code === 'Space') { e.preventDefault(); flip(); }
      else if (e.key === 'ArrowLeft') grade(false);
      else if (e.key === 'ArrowRight') grade(true);
    };
    document.addEventListener('keydown', onKey);
    el.querySelector('#ft').onchange = e => { t = e.target.value; makeDeck(); };
    el.querySelector('#fl').onchange = e => { l = e.target.value; makeDeck(); };
    el.querySelector('#fd').onchange = e => { dir = e.target.value; render(); };
    el.querySelector('#fgo').onclick = makeDeck;
    makeDeck();
    return () => document.removeEventListener('keydown', onKey);
  };

  // ---------- Dialogues list ----------
  BF.views.dialogues = (el, { params }) => {
    let l = params.get('l') || 'all', t = params.get('t') || 'all';
    el.innerHTML = `
      <div class="page-head"><div><h1>Діалоги «клієнт — працівник банку»</h1><p>${D.dialogues.length} діалогів: кожна тема на кожному рівні. Слухайте, читайте з перекладом і грайте роль працівника банку.</p></div></div>
      <div class="toolbar">${BF.ui.selectTopic('gt', t)}${BF.ui.selectLevel('gl', l)}</div>
      <div id="glist"></div>`;
    function render() {
      const ds = D.dialogues.filter(d => (t === 'all' || d.t === t) && (l === 'all' || d.l === l));
      el.querySelector('#glist').innerHTML = D.topics.map(tp => {
        const xs = ds.filter(d => d.t === tp.id);
        return xs.length ? `<div class="section"><h3>${tp.icon} ${esc(tp.ua)}</h3><div class="grid grid-3">${xs.map(BF.ui.dialogueCard).join('')}</div></div>` : '';
      }).join('') || '<div class="card empty">Нічого не знайдено</div>';
    }
    el.querySelector('#gt').onchange = e => { t = e.target.value; render(); };
    el.querySelector('#gl').onchange = e => { l = e.target.value; render(); };
    render();
  };

  // ---------- Dialogue ----------
  BF.views.dialogue = (el, { m }) => {
    const d = D.dialogues.find(x => x.id === m[0]);
    if (!d) { location.hash = '#/dialogues'; return; }
    const C = D.characters, bc = C[d.b], cc = C[d.c];
    const tp = D.topicById(d.t);
    let token = 0;
    const idxAll = D.dialogues.indexOf(d);
    const nextD = D.dialogues[idxAll + 1];

    el.innerHTML = `
      <div class="page-head">
        <span class="avatars">${BF.scene.avatarCircle(d.b)}${BF.scene.avatarCircle(d.c)}</span>
        <div style="flex:1;min-width:220px"><h1>${esc(d.title)} ${U.lvlBadge(d.l)}</h1><p>${tp.icon} ${esc(tp.ua)} · ${esc(d.ua)}</p></div>
      </div>
      <div class="note tip">🎬 ${esc(d.ctx)} <br><span class="small">Працівник: <b>${esc(bc.name)}</b> (${esc(bc.role.toLowerCase())}) · ${cc.g === 'f' ? 'Клієнтка' : 'Клієнт'}: <b>${esc(cc.name)}</b></span></div>
      <div class="toolbar" style="margin-top:14px">
        <button class="btn btn-primary" id="dplay">▶ Прослухати діалог</button>
        <button class="btn" id="drole">🎭 Рольова гра: я — працівник банку</button>
        <button class="btn btn-ghost" id="dstop">⏹ Стоп</button>
        <span class="spacer"></span>
        <label class="check small"><input type="checkbox" id="dua" checked> переклад</label>
      </div>
      <div id="rolehint" class="note hidden" style="margin-bottom:10px">Ви — ${esc(bc.name)}. Слухайте клієнта, вимовте свою репліку вголос (або натисніть 🎤), потім відкрийте правильний варіант.</div>
      <div class="chat" id="chat">
        ${d.lines.map(([s, fr, ua], i) => {
          const ch = s === 'B' ? bc : cc;
          const id = s === 'B' ? d.b : d.c;
          return `<div class="msg ${s}" data-i="${i}">${BF.scene.avatarCircle(id)}
            <div class="bubble"><div class="who">${esc(ch.name)}</div>
              <div class="b-fr"><span>${esc(fr)}</span>${U.sayBtn(fr, ch.g)}</div>
              <div class="b-ua">${esc(ua)}</div>
              <div class="b-role"></div></div></div>`;
        }).join('')}
      </div>
      <div class="card" style="margin-top:20px">
        <div class="row">
          <button class="btn btn-ok" id="ddone">${S.state.dialogues[d.id] ? '✓ Вивчено' : '✓ Позначити як вивчений'}</button>
          <a class="btn" href="#/practice?t=${d.t}&l=${d.l}&type=reply&go=1">💬 Вправа «Відповідь клієнту»</a>
          <a class="btn" href="#/m/${d.t}/${d.l}">← До модуля</a>
          <span class="spacer"></span>
          ${nextD ? `<a class="btn btn-ghost" href="#/dialogue/${nextD.id}">Наступний діалог →</a>` : ''}
        </div>
      </div>`;

    const chat = el.querySelector('#chat');
    const bubbles = [...chat.querySelectorAll('.msg')];
    el.querySelector('#dua').onchange = e => chat.classList.toggle('hide-ua', !e.target.checked);
    const wait = ms => new Promise(r => setTimeout(r, ms));
    const clearPlaying = () => chat.querySelectorAll('.bubble.playing').forEach(b => b.classList.remove('playing'));
    function done() {
      if (S.markDialogue(d.id)) U.toast('Діалог вивчено! +10 XP');
      el.querySelector('#ddone').textContent = '✓ Вивчено';
    }

    async function playLine(i, my) {
      const [s, fr] = d.lines[i];
      const b = bubbles[i].querySelector('.bubble');
      clearPlaying();
      b.classList.add('playing');
      bubbles[i].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      await BF.speech.speak(fr, { g: (s === 'B' ? bc : cc).g });
      if (my === token) b.classList.remove('playing');
    }
    async function playAll() {
      const my = ++token;
      stopRole();
      for (let i = 0; i < d.lines.length; i++) {
        if (my !== token) return;
        await playLine(i, my);
        await wait(350);
      }
      if (my === token) done();
    }
    function stopRole() {
      el.querySelector('#rolehint').classList.add('hidden');
      chat.querySelectorAll('.bubble.masked').forEach(b => b.classList.remove('masked'));
      chat.querySelectorAll('.b-role').forEach(r => { r.innerHTML = ''; });
    }
    function overlap(said, target) {
      const tw = U.norm(target).split(' ').filter(w => w.length > 2);
      const sw = new Set(U.norm(said).split(' '));
      return tw.length ? Math.round(tw.filter(w => sw.has(w)).length / tw.length * 100) : 0;
    }
    async function role() {
      const my = ++token;
      BF.speech.cancel();
      stopRole();
      el.querySelector('#rolehint').classList.remove('hidden');
      d.lines.forEach(([s], i) => { if (s === 'B') bubbles[i].querySelector('.bubble').classList.add('masked'); });
      for (let i = 0; i < d.lines.length; i++) {
        if (my !== token) return;
        const [s, fr] = d.lines[i];
        const bub = bubbles[i].querySelector('.bubble');
        if (s === 'C') { await playLine(i, my); await wait(300); continue; }
        clearPlaying();
        bub.classList.add('playing');
        bubbles[i].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        const slot = bub.querySelector('.b-role');
        slot.innerHTML = `<div class="row" style="margin-top:8px">
          ${BF.speech.canListen ? '<button class="btn btn-sm" data-r="mic">🎤 Сказати</button>' : ''}
          <button class="btn btn-sm btn-primary" data-r="show">Показати відповідь</button></div><div class="small r-res"></div>`;
        await new Promise(res => {
          slot.onclick = async e => {
            const b = e.target.closest('[data-r]');
            if (!b) return;
            if (b.dataset.r === 'mic') {
              b.textContent = '🎙 Слухаю…';
              try {
                const said = await BF.speech.listen();
                const sc = overlap(said, fr);
                slot.querySelector('.r-res').innerHTML = said ? `Ви сказали: «${esc(said)}» — збіг ключових слів ${sc}%` : 'Нічого не розпізнано, спробуйте ще раз.';
              } catch (err) {
                slot.querySelector('.r-res').textContent = 'Мікрофон недоступний. Скажіть репліку вголос і відкрийте відповідь.';
              }
              b.textContent = '🎤 Ще раз';
            } else res();
          };
        });
        if (my !== token) return;
        bub.classList.remove('masked');
        slot.querySelector('.row').remove();
        await playLine(i, my);
        await wait(300);
      }
      if (my === token) { done(); el.querySelector('#rolehint').classList.add('hidden'); }
    }

    el.querySelector('#dplay').onclick = playAll;
    el.querySelector('#drole').onclick = role;
    el.querySelector('#dstop').onclick = () => { token++; BF.speech.cancel(); clearPlaying(); stopRole(); };
    el.querySelector('#ddone').onclick = done;
    return () => { token++; };
  };

  // ---------- Phrases ----------
  BF.views.phrases = (el, { params }) => {
    let l = params.get('l') || 'all';
    el.innerHTML = `
      <div class="page-head"><div><h1>Розмовні фрази для роботи з клієнтами</h1><p>Привітання, уточнення, пояснення, ввічлива відмова, робота зі скаргами, телефон.</p></div></div>
      <div class="toolbar">
        <div class="chips" id="pl">${['all', ...U.LEVELS].map(x => `<button class="chip ${x === l ? 'active' : ''}" data-pl="${x}">${x === 'all' ? 'Усі' : x}</button>`).join('')}</div>
        <span class="spacer"></span>
        <a class="btn btn-primary" id="ptrain" href="#">🗣️ Тренувати фрази</a>
        <a class="btn" id="porder" href="#">🔀 Скласти фразу</a>
      </div>
      <div class="note tip" style="margin-bottom:14px">💡 Порада: слухайте фразу й повторюйте вголос одразу після диктора (shadowing). Ввічливі формули — Je voudrais, Pourriez-vous, Je regrette, mais… — роблять мову банкіра професійною.</div>
      <div id="plist" class="grid grid-2"></div>`;
    function render() {
      el.querySelectorAll('[data-pl]').forEach(b => b.classList.toggle('active', b.dataset.pl === l));
      const lv = l === 'all' ? S.settings.level : l;
      el.querySelector('#ptrain').href = `#/practice?type=phrases&l=${lv}&go=1`;
      el.querySelector('#porder').href = `#/practice?type=order&l=${lv}&go=1`;
      el.querySelector('#plist').innerHTML = D.phraseCats.map(c => {
        const items = c.items.filter(x => l === 'all' || x[2] === l);
        if (!items.length) return '';
        return `<div class="card"><h3>${c.icon} ${esc(c.ua)}</h3>${items.map(([fr, ua, lv]) =>
          `<div class="phrase">${U.sayBtn(fr)}<div class="p-body"><div class="p-fr">${esc(fr)}</div><div class="p-ua">${esc(ua)}</div></div>${U.lvlBadge(lv)}</div>`).join('')}</div>`;
      }).join('');
    }
    el.querySelector('#pl').onclick = e => { const b = e.target.closest('[data-pl]'); if (b) { l = b.dataset.pl; render(); } };
    render();
  };

  // ---------- Grammar ----------
  BF.views.grammar = (el, { params }) => {
    let l = params.get('l') || S.settings.level;
    el.innerHTML = `
      <div class="page-head"><div><h1>Граматика для банкіра</h1><p>Лише те, що реально потрібно в розмові з клієнтом, — з банківськими прикладами.</p></div></div>
      <div class="toolbar"><div class="chips" id="grl">${U.LEVELS.map(x => `<button class="chip" data-gl="${x}">${x}</button>`).join('')}</div></div>
      <div id="glist" class="grid grid-2"></div>`;
    function render() {
      el.querySelectorAll('[data-gl]').forEach(b => b.classList.toggle('active', b.dataset.gl === l));
      el.querySelector('#glist').innerHTML = D.grammar.filter(g => g.l === l).map(g => `
        <div class="card"><h3>${esc(g.title)}</h3><p class="small">${esc(g.text)}</p>
          ${g.ex.map(([fr, ua]) => `<div class="gram-ex">${U.sayBtn(fr)}<div><div class="g-fr">${esc(fr)}</div><div class="g-ua">${esc(ua)}</div></div></div>`).join('')}
        </div>`).join('');
    }
    el.querySelector('#grl').onclick = e => { const b = e.target.closest('[data-gl]'); if (b) { l = b.dataset.gl; render(); } };
    render();
  };
})();
