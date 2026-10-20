// App shell: router, top bar, home, modules
BF.views = BF.views || {};

BF.app = (() => {
  const U = BF.util, D = BF.data, S = BF.store;
  const view = document.getElementById('view');
  let cleanup = null;

  function applyTheme() {
    const t = S.settings.theme;
    if (t === 'auto') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', t);
  }

  function updateTop() {
    const l = S.settings.level;
    document.getElementById('levelSwitch').innerHTML = U.LEVELS.map(x =>
      `<button data-level="${x}" class="${x === l ? 'active' : ''}" title="Рівень ${x}">${x}</button>`).join('');
    const today = S.state.xpDays[S.today()] || 0;
    document.getElementById('topStats').innerHTML =
      `<span title="Днів поспіль">🔥 ${S.streak()}</span>
       <span title="Досвід сьогодні / денна ціль">⭐ ${today}/${S.settings.goal}</span>
       <span class="xp-total muted" title="Усього досвіду">XP ${S.state.xp}</span>`;
  }

  const routes = [
    [/^$/, 'home'], [/^modules$/, 'modules'], [/^m\/(\w+)\/(A1|A2|B1)$/, 'module'],
    [/^dictionary$/, 'dictionary'], [/^flashcards$/, 'flashcards'],
    [/^dialogues$/, 'dialogues'], [/^dialogue\/([\w-]+)$/, 'dialogue'],
    [/^phrases$/, 'phrases'], [/^videos$/, 'videos'], [/^video\/([\w-]+)$/, 'video'],
    [/^practice$/, 'practice'], [/^tests$/, 'tests'], [/^grammar$/, 'grammar'],
    [/^progress$/, 'progress'], [/^settings$/, 'settings']
  ];
  const navOf = { module: 'modules', dialogue: 'dialogues', video: 'videos' };

  function route() {
    if (cleanup) { try { cleanup(); } catch (e) { /* ignore */ } cleanup = null; }
    BF.speech.cancel();
    const h = location.hash.replace(/^#\/?/, '');
    const [path, qs] = h.split('?');
    const params = new URLSearchParams(qs || '');
    let name = 'home', m = [];
    for (const [re, n] of routes) {
      const mm = path.match(re);
      if (mm) { name = n; m = mm.slice(1); break; }
    }
    document.querySelectorAll('#nav a').forEach(a => a.classList.toggle('active', a.dataset.nav === (navOf[name] || name)));
    view.innerHTML = '';
    const el = document.createElement('div');
    view.appendChild(el);
    const fn = BF.views[name] || BF.views.home;
    const ret = fn(el, { params, m });
    if (typeof ret === 'function') cleanup = ret;
    document.body.classList.remove('nav-open');
    window.scrollTo(0, 0);
  }

  // ---------- global events ----------
  document.addEventListener('click', e => {
    const s = e.target.closest('[data-say]');
    if (s) {
      e.preventDefault();
      e.stopPropagation();
      document.querySelectorAll('.say.speaking').forEach(x => x.classList.remove('speaking'));
      s.classList.add('speaking');
      BF.speech.speak(s.dataset.say, { g: s.dataset.g || 'f' }).then(() => s.classList.remove('speaking'));
      return;
    }
    const lv = e.target.closest('[data-level]');
    if (lv) {
      S.settings.level = lv.dataset.level;
      S.save();
      updateTop();
      route();
    }
  }, true);
  document.getElementById('menuBtn').addEventListener('click', () => document.body.classList.toggle('nav-open'));
  document.getElementById('scrim').addEventListener('click', () => document.body.classList.remove('nav-open'));
  window.addEventListener('hashchange', route);

  return { route, updateTop, applyTheme };
})();

// ---------- shared UI helpers ----------
BF.ui = (() => {
  const U = BF.util, D = BF.data, S = BF.store;
  const esc = U.esc;

  function topicCard(t, l) {
    const p = S.moduleProgress(t.id, l);
    return `<a class="card topic-card" href="#/m/${t.id}/${l}">
      <span class="topic-icon">${t.icon}</span>
      <span class="t-body"><b>${esc(t.ua)}</b><span class="small muted">${esc(t.fr)}</span>${U.bar(p.pct, p.pct >= 80 ? 'ok' : '')}</span>
      <span class="small muted">${p.pct}%</span>
    </a>`;
  }

  function dots(f) {
    const b = S.word(f).box;
    return `<span class="dots" title="Рівень запам'ятовування: ${Math.min(b, 5)}/5">${[1, 2, 3, 4, 5].map(k => `<i class="${b >= k ? 'on' : ''}"></i>`).join('')}</span>`;
  }

  function wordRows(words, { showTopic = false } = {}) {
    if (!words.length) return '<div class="empty">Нічого не знайдено</div>';
    return `<div class="word-list">${words.map(w => {
      const t = D.topicById(w.t);
      return `<div class="word" data-word="${esc(w.f)}">
        ${U.sayBtn(w.f)}
        <span class="w-fr" data-expand>${esc(w.f)}${w.g ? `<span class="gender">${esc(w.g)}</span>` : ''}</span>
        <span class="w-ua">${esc(w.u)}${showTopic && t ? ` <span class="small">${t.icon}</span>` : ''}</span>
        <span class="w-meta">${U.lvlBadge(w.l)} ${dots(w.f)}
          <button class="star ${S.isLearned(w.f) ? 'on' : ''}" data-star title="Позначити як вивчене">★</button>
          <button class="btn btn-sm btn-ghost" data-expand title="Приклад">▾</button></span>
        <div class="w-ex hidden">
          <div class="row">${U.sayBtn(w.e)}<div><div class="fr">${esc(w.e)}</div><div class="muted">${esc(w.eu)}</div></div></div>
          ${w.n ? `<div class="note" style="margin-top:8px">💡 ${esc(w.n)}</div>` : ''}
        </div>
      </div>`;
    }).join('')}</div>`;
  }

  function bindWords(el) {
    el.addEventListener('click', e => {
      const row = e.target.closest('.word');
      if (!row) return;
      if (e.target.closest('[data-star]')) {
        const f = row.dataset.word;
        const on = !S.isLearned(f);
        S.setLearned(f, on);
        e.target.closest('[data-star]').classList.toggle('on', on);
        row.querySelector('.dots').outerHTML = dots(f);
        U.toast(on ? 'Позначено як вивчене ★' : 'Повернуто до вивчення');
        return;
      }
      if (e.target.closest('[data-expand]')) row.querySelector('.w-ex').classList.toggle('hidden');
    });
  }

  function dialogueCard(d) {
    const done = S.state.dialogues[d.id];
    const t = D.topicById(d.t);
    return `<a class="card dlg-card" href="#/dialogue/${d.id}">
      <span class="avatars">${BF.scene.avatarCircle(d.b)}${BF.scene.avatarCircle(d.c)}</span>
      <span class="d-body"><b>${esc(d.title)}</b><br><span class="small muted">${t.icon} ${esc(d.ua)}</span></span>
      ${U.lvlBadge(d.l)} ${done ? '<span class="badge ok">✓</span>' : ''}
    </a>`;
  }

  function videoCard(v) {
    const st = S.state.videos[v.id] || {};
    const t = D.topicById(v.t);
    const score = S.videoTaskScore(v);
    return `<a class="card video-card" href="#/video/${v.id}">
      <div class="video-thumb">${BF.scene.thumb(v)}<span class="play">▶</span>
        <span class="badges">${U.lvlBadge(v.l)}${v.set === 'phone' ? '<span class="badge">📞</span>' : ''}${st.watched ? '<span class="badge ok">✓ переглянуто</span>' : ''}</span></div>
      <div class="v-body"><b>${esc(v.title)}</b><div class="small muted">${t.icon} ${esc(v.ua)}</div>
        ${st.watched ? `<div class="small" style="margin-top:6px">Вправа: ${score}%</div>` : ''}</div>
    </a>`;
  }

  const levelTabs = (cur, href) => `<div class="chips">${U.LEVELS.map(l =>
    `<a class="chip ${l === cur ? 'active' : ''}" href="${href(l)}">${l}</a>`).join('')}</div>`;

  function selectTopic(id, val, withAll = true, withGeneral = false) {
    return `<select class="input" id="${id}">
      ${withAll ? `<option value="all">Усі теми</option>` : ''}
      ${D.topics.map(t => `<option value="${t.id}" ${t.id === val ? 'selected' : ''}>${t.icon} ${esc(t.ua)}</option>`).join('')}
      ${withGeneral ? `<option value="general" ${val === 'general' ? 'selected' : ''}>🤝 Загальне обслуговування</option>` : ''}
    </select>`;
  }
  function selectLevel(id, val, withAll = true) {
    return `<select class="input" id="${id}">
      ${withAll ? `<option value="all" ${val === 'all' ? 'selected' : ''}>Усі рівні</option>` : ''}
      ${U.LEVELS.map(l => `<option value="${l}" ${l === val ? 'selected' : ''}>${l}</option>`).join('')}
    </select>`;
  }

  return { topicCard, wordRows, bindWords, dots, dialogueCard, videoCard, levelTabs, selectTopic, selectLevel };
})();

// ---------- Home ----------
BF.views.home = el => {
  const U = BF.util, D = BF.data, S = BF.store, esc = U.esc;
  const l = S.settings.level;
  const lv = D.levels.find(x => x.id === l);
  const lp = S.levelProgress(l);
  const mods = D.topics.map(t => ({ t, p: S.moduleProgress(t.id, l) }));
  const nextMod = mods.find(x => x.p.pct < 80) || mods[0];
  const learned = D.vocab.filter(w => S.isLearned(w.f)).length;
  const due = D.vocab.filter(w => { const s = S.word(w.f); return s.seen && s.due <= Date.now(); }).length;
  const todayXP = S.state.xpDays[S.today()] || 0;
  const watched = D.videos.filter(v => (S.state.videos[v.id] || {}).watched).length;
  const passed = Object.values(S.state.tests).filter(t => t.best >= 80).length;
  const hour = new Date().getHours();
  const hello = hour < 18 ? 'Bonjour' : 'Bonsoir';

  el.innerHTML = `
    <section class="hero">
      ${U.ring(lp, lp + '%')}
      <div class="hero-body">
        <h1>${hello} ! 👋</h1>
        <p>Рівень <b>${l}</b> — ${esc(lv.name.toLowerCase())}. ${esc(lv.goal)}</p>
        <div class="hero-actions">
          <a class="btn btn-accent btn-lg" href="#/m/${nextMod.t.id}/${l}">▶ Продовжити: ${nextMod.t.icon} ${esc(nextMod.t.ua)}</a>
          <a class="btn" href="#/flashcards?l=${l}">🃏 Картки${due ? ` (${due} на повторення)` : ''}</a>
        </div>
      </div>
    </section>

    <div class="stat-tiles">
      <div class="tile"><div class="v">🔥 ${S.streak()}</div><div class="l">днів поспіль</div></div>
      <div class="tile"><div class="v">⭐ ${todayXP}</div><div class="l">XP сьогодні (ціль ${S.settings.goal})</div>${U.bar(todayXP / S.settings.goal * 100, 'accent')}</div>
      <div class="tile"><div class="v">📖 ${learned}</div><div class="l">з ${D.vocab.length} термінів вивчено</div></div>
      <div class="tile"><div class="v">🎬 ${watched}/${D.videos.length}</div><div class="l">відео переглянуто</div></div>
      <div class="tile"><div class="v">📝 ${passed}</div><div class="l">тестів складено (≥80 %)</div></div>
    </div>

    <div class="section">
      <div class="section-head"><h2>Шлях: A1 → A2 → B1</h2><span class="muted small">Натисніть, щоб обрати рівень</span></div>
      <div class="grid grid-3">
        ${D.levels.map(x => {
          const p = S.levelProgress(x.id);
          return `<div class="card level-card ${x.id} ${x.id === l ? 'current' : ''}" data-level="${x.id}">
            <div class="row"><span class="badge lvl-${x.id}">${x.id}</span><b>${esc(x.name)}</b><span class="spacer"></span><span class="small muted">${p}%</span></div>
            <div class="small muted">${esc(x.desc)}</div>
            ${U.bar(p, p >= 70 ? 'ok' : '')}
            ${x.id !== 'B1' && p >= 70 ? `<div class="small" style="color:var(--ok)">Готово до наступного рівня ✓</div>` : ''}
          </div>`;
        }).join('')}
      </div>
    </div>

    <div class="section">
      <div class="section-head"><h2>Модулі рівня ${l}</h2><a href="#/modules">Усі модулі →</a></div>
      <div class="grid grid-3">${D.topics.map(t => BF.ui.topicCard(t, l)).join('')}</div>
    </div>

    <div class="section">
      <div class="section-head"><h2>Швидке тренування</h2></div>
      <div class="grid grid-4">
        <a class="card topic-card" href="#/practice?type=reply&l=${l}&go=1"><span class="topic-icon">💬</span><span class="t-body"><b>Відповідь клієнту</b><span class="small muted">10 ситуацій</span></span></a>
        <a class="card topic-card" href="#/practice?type=mix&l=${l}&go=1"><span class="topic-icon">🎲</span><span class="t-body"><b>Мікс-вправа</b><span class="small muted">слова, фрази, діалоги</span></span></a>
        <a class="card topic-card" href="#/practice?type=numbers&l=${l}&go=1"><span class="topic-icon">💶</span><span class="t-body"><b>Суми на слух</b><span class="small muted">числа в банку</span></span></a>
        <a class="card topic-card" href="#/videos"><span class="topic-icon">🎬</span><span class="t-body"><b>Відео-сцени</b><span class="small muted">${D.videos.length} ситуацій</span></span></a>
      </div>
    </div>`;
};

// ---------- Modules overview ----------
BF.views.modules = el => {
  const U = BF.util, D = BF.data, S = BF.store, esc = U.esc;
  el.innerHTML = `
    <div class="page-head"><div><h1>Модулі</h1><p>7 банківських тем × 3 рівні. Кожен модуль: лексика → діалог → відео → фрази → вправи → тест.</p></div></div>
    <div class="grid grid-2">
      ${D.topics.map(t => `<div class="card">
        <div class="row" style="margin-bottom:12px"><span class="topic-icon">${t.icon}</span><div><b>${esc(t.ua)}</b><div class="small muted">${esc(t.fr)}</div></div></div>
        <div class="grid" style="grid-template-columns:repeat(3,1fr);gap:8px">
          ${U.LEVELS.map(l => {
            const p = S.moduleProgress(t.id, l);
            return `<a class="btn" href="#/m/${t.id}/${l}" style="flex-direction:column;gap:4px">
              <span class="badge lvl-${l}">${l}</span><span class="small">${p.pct}%</span>${U.bar(p.pct, p.pct >= 80 ? 'ok' : '')}</a>`;
          }).join('')}
        </div></div>`).join('')}
    </div>`;
  el.querySelectorAll('.btn .bar').forEach(b => { b.style.width = '100%'; });
};

// ---------- Module page ----------
BF.views.module = (el, { m }) => {
  const U = BF.util, D = BF.data, S = BF.store, esc = U.esc;
  const [tid, l] = m;
  const t = D.topicById(tid);
  if (!t) { location.hash = '#/modules'; return; }
  const p = S.moduleProgress(tid, l);
  const words = D.vocab.filter(w => w.t === tid && w.l === l);
  const dlgs = D.dialogues.filter(d => d.t === tid && d.l === l);
  const vids = D.videos.filter(v => v.t === tid && v.l === l);
  const otherVids = D.videos.filter(v => v.t === tid && v.l !== l);
  const phrases = D.phrases.filter(x => x.l === l);
  const shownPhrases = U.uniqBy(U.shuffle(phrases), x => x.cat).concat(U.shuffle(phrases)).filter((x, i, a) => a.indexOf(x) === i).slice(0, 8);
  const test = S.state.tests[`mod:${tid}:${l}`];
  const wordsDone = p.words[1] && p.words[0] / p.words[1] >= 0.8;

  el.innerHTML = `
    <div class="page-head">
      <span class="topic-icon" style="width:60px;height:60px;font-size:30px">${t.icon}</span>
      <div style="flex:1;min-width:220px"><h1>${esc(t.ua)} ${U.lvlBadge(l)}</h1><p>${esc(t.fr)}</p></div>
      ${BF.ui.levelTabs(l, x => `#/m/${tid}/${x}`)}
    </div>

    <div class="card row" style="gap:18px;align-items:center">
      ${U.ring(p.pct, p.pct + '%', p.pct >= 80 ? 'var(--ok)' : null)}
      <div class="breakdown">
        <div>Лексика<b>${p.words[0]} / ${p.words[1]}</b></div>
        <div>Діалог<b>${p.dlg[0] ? '✓ прочитано' : '—'}</b></div>
        <div>Відео<b>${p.vid[1] ? `${p.vid[0]} / ${p.vid[1]}` : 'інші рівні'}</b></div>
        <div>Тест<b>${test ? test.best + '%' : '—'}</b></div>
      </div>
    </div>

    <div class="card">
      <h3>🇫🇷 Що важливо знати про цю тему у Франції</h3>
      <ul class="intro-list">${t.intro.map(x => `<li>${esc(x)}</li>`).join('')}</ul>
    </div>

    <div class="module-steps">
      <div class="card step ${wordsDone ? 'done' : ''}">
        <div class="section-head"><h3>Лексика рівня ${l} (${words.length})</h3>
          <div class="row"><a class="btn btn-sm btn-primary" href="#/flashcards?t=${tid}&l=${l}">🃏 Вчити картками</a>
          <a class="btn btn-sm" href="#/practice?t=${tid}&l=${l}&type=fr_ua&go=1">✏️ Вправа</a></div></div>
        <p class="small muted">Натисніть на слово, щоб побачити приклад. ★ — позначити як вивчене. Слово вважається вивченим після 3 правильних відповідей поспіль у вправах чи картках.</p>
        <div id="words">${BF.ui.wordRows(words)}</div>
      </div>

      <div class="card step ${p.dlg[1] && p.dlg[0] === p.dlg[1] ? 'done' : ''}">
        <h3>Діалог «клієнт — працівник банку»</h3>
        <div class="grid">${dlgs.map(BF.ui.dialogueCard).join('') || '<div class="muted">—</div>'}</div>
      </div>

      <div class="card step ${p.vid[1] && p.vid[0] === p.vid[1] ? 'done' : ''}">
        <h3>Відео-сцена</h3>
        ${vids.length ? `<div class="grid grid-3">${vids.map(BF.ui.videoCard).join('')}</div>`
          : `<p class="muted small">Для рівня ${l} у цій темі окремого відео немає. Відео цієї теми інших рівнів:</p>
             <div class="grid grid-3">${otherVids.map(BF.ui.videoCard).join('')}</div>`}
      </div>

      <div class="card step">
        <div class="section-head"><h3>Корисні фрази рівня ${l}</h3><a class="small" href="#/phrases">Усі фрази →</a></div>
        <div>${shownPhrases.map(x => `<div class="phrase">${U.sayBtn(x.fr)}<div class="p-body"><div class="p-fr">${esc(x.fr)}</div><div class="p-ua">${esc(x.ua)}</div></div></div>`).join('')}</div>
      </div>

      <div class="card step">
        <h3>Практика</h3>
        <div class="row">
          <a class="btn btn-primary" href="#/practice?t=${tid}&l=${l}&type=mix&go=1">🎲 Мікс</a>
          <a class="btn" href="#/practice?t=${tid}&l=${l}&type=reply&go=1">💬 Відповідь клієнту</a>
          <a class="btn" href="#/practice?t=${tid}&l=${l}&type=listen&go=1">🎧 Аудіювання</a>
          <a class="btn" href="#/practice?t=${tid}&l=${l}&type=write&go=1">⌨️ Написання</a>
          <a class="btn" href="#/practice?t=${tid}&l=${l}&type=cloze&go=1">🧩 Пропуски</a>
        </div>
      </div>

      <div class="card step ${test && test.best >= 80 ? 'done' : ''}">
        <div class="section-head"><h3>Тест модуля</h3>${test ? `<span class="badge ${test.best >= 80 ? 'ok' : ''}">Найкращий результат: ${test.best}%</span>` : ''}</div>
        <p class="small muted">12 запитань: переклад, аудіювання, пропуски, написання, відповідь клієнту. Залік — від 80 %.</p>
        <a class="btn btn-accent" href="#/tests?t=${tid}&l=${l}&go=1">📝 Почати тест</a>
      </div>
    </div>`;
  BF.ui.bindWords(el.querySelector('#words'));
};

// ---------- install as an app (PWA) ----------
BF.install = (() => {
  let deferred = null;
  const btn = document.getElementById('installBtn');
  const standalone = () => window.matchMedia('(display-mode: standalone)').matches || navigator.standalone;
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
  }
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferred = e;
    btn.classList.remove('hidden');
  });
  window.addEventListener('appinstalled', () => {
    deferred = null;
    btn.classList.add('hidden');
    BF.util.toast('Застосунок встановлено ✓');
  });
  async function prompt() {
    if (!deferred) return false;
    deferred.prompt();
    await deferred.userChoice;
    deferred = null;
    btn.classList.add('hidden');
    return true;
  }
  btn.addEventListener('click', prompt);
  return { prompt, get available() { return !!deferred; }, standalone };
})();

// ---------- boot ----------
BF.app.applyTheme();
BF.app.updateTop();
BF.app.route();
