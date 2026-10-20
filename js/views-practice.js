// Practice, tests, progress, settings
(() => {
  const U = BF.util, D = BF.data, S = BF.store, esc = U.esc;

  // ---------- Practice ----------
  BF.views.practice = (el, { params }) => {
    let t = params.get('t') || 'all', l = params.get('l') || S.settings.level, type = params.get('type') || 'mix';
    const types = BF.ex.TYPES;

    function setup() {
      el.innerHTML = `
        <div class="page-head"><div><h1>Вправи</h1><p>Оберіть тему, рівень і тип завдання. Кожна сесія — 10 завдань; правильні відповіді рухають слова у словнику до стану «вивчено».</p></div></div>
        <div class="card">
          <div class="toolbar">${BF.ui.selectTopic('pt', t)}${BF.ui.selectLevel('pl', l)}</div>
          <div class="grid grid-4" id="ptypes">
            ${Object.entries(types).map(([k, x]) => `<button class="card topic-card" data-type="${k}" style="text-align:left;cursor:pointer;${k === type ? 'border-color:var(--primary);box-shadow:0 0 0 2px var(--primary-soft)' : ''}">
              <span class="topic-icon">${x.icon}</span><span class="t-body"><b>${esc(x.ua)}</b><span class="small muted">${esc(x.desc)}</span></span></button>`).join('')}
          </div>
          <div class="row" style="margin-top:16px;justify-content:flex-end"><button class="btn btn-primary btn-lg" id="pgo">▶ Почати</button></div>
        </div>`;
      el.querySelector('#pt').onchange = e => { t = e.target.value; };
      el.querySelector('#pl').onchange = e => { l = e.target.value; };
      el.querySelector('#ptypes').onclick = e => {
        const b = e.target.closest('[data-type]');
        if (!b) return;
        type = b.dataset.type;
        if (e.detail >= 2) start(); else setup();
      };
      el.querySelector('#pgo').onclick = start;
    }
    function start() {
      const lv = l === 'all' ? S.settings.level : l;
      const n = type === 'match' ? 15 : 10;
      const qs = BF.ex.build(type, { t, l: type === 'numbers' ? lv : l, n });
      const tp = t === 'all' ? 'усі теми' : D.topicById(t).ua;
      BF.ex.run(el, qs, {
        title: `${types[type].ua} · ${tp} · ${l === 'all' ? 'усі рівні' : l}`,
        retry: start,
        onExit: setup
      });
    }
    if (params.get('go')) start(); else setup();
  };

  // ---------- Tests ----------
  BF.views.tests = (el, { params }) => {
    function list() {
      el.innerHTML = `
        <div class="page-head"><div><h1>Тести</h1><p>Тест модуля — 12 запитань, іспит рівня — 25 запитань з усіх тем. Залік — 80 %. Під час тесту правильні відповіді не показуються — лише в кінці.</p></div></div>
        ${U.LEVELS.map(l => {
          const ex = S.state.tests[`lvl:${l}`];
          return `<div class="card">
            <div class="section-head"><h2>${U.lvlBadge(l)} Рівень ${l}</h2>
              <button class="btn btn-accent" data-test="all:${l}">🎓 Іспит рівня ${l}${ex ? ` · найкраще ${ex.best}%` : ''}</button></div>
            <div class="grid grid-4">${D.topics.map(tp => {
              const r = S.state.tests[`mod:${tp.id}:${l}`];
              return `<button class="card topic-card" data-test="${tp.id}:${l}" style="text-align:left;cursor:pointer">
                <span class="topic-icon">${tp.icon}</span><span class="t-body"><b>${esc(tp.ua)}</b>
                <span class="small ${r && r.best >= 80 ? '' : 'muted'}" style="${r && r.best >= 80 ? 'color:var(--ok)' : ''}">${r ? `${r.best >= 80 ? '✓ ' : ''}найкраще ${r.best}% · спроб ${r.tries}` : 'ще не складали'}</span></span></button>`;
            }).join('')}</div></div>`;
        }).join('')}`;
      el.onclick = e => {
        const b = e.target.closest('[data-test]');
        if (!b) return;
        const [t, l] = b.dataset.test.split(':');
        start(t, l);
      };
    }
    function start(t, l) {
      el.onclick = null;
      const key = t === 'all' ? `lvl:${l}` : `mod:${t}:${l}`;
      const title = t === 'all' ? `Іспит рівня ${l}` : `Тест: ${D.topicById(t).ua} · ${l}`;
      BF.ex.run(el, BF.ex.buildTest(t, l), {
        test: true, title,
        onFinish(pct) {
          S.testResult(key, pct);
          if (pct >= 80) S.addXP(30);
        },
        retry: () => start(t, l),
        onExit: () => (params.get('go') && t !== 'all' ? (location.hash = `#/m/${t}/${l}`) : list())
      });
    }
    if (params.get('go') && params.get('t') && params.get('l')) start(params.get('t'), params.get('l'));
    else list();
  };

  // ---------- Progress ----------
  BF.views.progress = el => {
    const st = S.state;
    const learned = D.vocab.filter(w => S.isLearned(w.f)).length;
    const seen = D.vocab.filter(w => S.word(w.f).seen).length;
    const dl = Object.keys(st.dialogues).length;
    const vw = D.videos.filter(v => (st.videos[v.id] || {}).watched).length;
    const acc = U.pct(st.ex.correct, st.ex.answered);

    const days = [];
    const d0 = new Date();
    d0.setDate(d0.getDate() - 34);
    for (let k = 0; k < 35; k++) {
      const d = new Date(d0);
      d.setDate(d0.getDate() + k);
      const key = U.localDate(d);
      const xp = st.xpDays[key] || 0;
      days.push(`<i class="${xp >= S.settings.goal ? 'l3' : xp >= 20 ? 'l2' : xp > 0 ? 'l1' : ''} ${key === S.today() ? 'today' : ''}" title="${key}: ${xp} XP"></i>`);
    }

    el.innerHTML = `
      <div class="page-head"><div><h1>Прогрес</h1><p>Усе зберігається локально в цьому браузері. Робіть резервну копію, щоб перенести прогрес на інший пристрій.</p></div></div>
      <div class="stat-tiles">
        <div class="tile"><div class="v">${learned}/${D.vocab.length}</div><div class="l">термінів вивчено (бачили ${seen})</div>${U.bar(learned / D.vocab.length * 100, 'ok')}</div>
        <div class="tile"><div class="v">${dl}/${D.dialogues.length}</div><div class="l">діалогів вивчено</div>${U.bar(dl / D.dialogues.length * 100)}</div>
        <div class="tile"><div class="v">${vw}/${D.videos.length}</div><div class="l">відео переглянуто</div>${U.bar(vw / D.videos.length * 100)}</div>
        <div class="tile"><div class="v">${acc}%</div><div class="l">точність (${st.ex.answered} відповідей)</div></div>
        <div class="tile"><div class="v">🔥 ${S.streak()}</div><div class="l">днів поспіль · XP ${st.xp}</div></div>
      </div>

      <div class="grid grid-2 section" style="align-items:start">
        <div class="card"><h3>Рівні</h3>
          ${D.levels.map(x => { const p = S.levelProgress(x.id); return `<div style="margin:10px 0"><div class="row"><span class="badge lvl-${x.id}">${x.id}</span><span>${esc(x.name)}</span><span class="spacer"></span><b>${p}%</b></div>${U.bar(p, p >= 70 ? 'ok' : '')}</div>`; }).join('')}
          <p class="small muted">Рекомендація: переходьте до наступного рівня, коли поточний пройдено на 70 % і більше.</p>
        </div>
        <div class="card"><h3>Активність (5 тижнів)</h3><div class="cal">${days.join('')}</div>
          <p class="small muted" style="margin-top:8px">Темніше — більше XP. Денна ціль: ${S.settings.goal} XP.</p></div>
      </div>

      ${U.LEVELS.map(l => `<div class="card section"><h3>${U.lvlBadge(l)} Модулі рівня ${l}</h3><div class="table-wrap"><table class="prog">
        <thead><tr><th>Тема</th><th>Слова</th><th>Діалог</th><th>Відео</th><th>Тест</th><th>Разом</th></tr></thead>
        <tbody>${D.topics.map(tp => {
          const p = S.moduleProgress(tp.id, l);
          return `<tr><td><a href="#/m/${tp.id}/${l}">${tp.icon} ${esc(tp.ua)}</a></td><td>${p.words[0]}/${p.words[1]}</td>
            <td>${p.dlg[0] ? '✓' : '—'}</td><td>${p.vid[1] ? `${p.vid[0]}/${p.vid[1]}` : '·'}</td>
            <td>${p.test ? p.test + '%' : '—'}</td><td style="min-width:110px">${U.bar(p.pct, p.pct >= 80 ? 'ok' : '')}<span class="small">${p.pct}%</span></td></tr>`;
        }).join('')}</tbody></table></div></div>`).join('')}

      <div class="card section"><h3>Резервна копія</h3>
        <div class="row">
          <button class="btn" id="pexp">⬇ Зберегти прогрес у файл</button>
          <label class="btn">⬆ Відновити з файлу<input type="file" id="pimp" accept="application/json" hidden></label>
          <span class="spacer"></span>
          <button class="btn btn-bad" id="preset">Скинути прогрес</button>
        </div></div>`;

    el.querySelector('#pexp').onclick = () => {
      const blob = new Blob([S.exportJSON()], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `banquier-fr-progress-${S.today()}.json`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    };
    el.querySelector('#pimp').onchange = e => {
      const f = e.target.files[0];
      if (!f) return;
      f.text().then(txt => {
        try { S.importJSON(txt); U.toast('Прогрес відновлено'); BF.app.updateTop(); BF.app.route(); }
        catch (err) { U.toast('Не вдалося прочитати файл'); }
      });
    };
    el.querySelector('#preset').onclick = () => {
      if (confirm('Скинути весь прогрес? Цю дію не можна скасувати.')) { S.reset(); BF.app.updateTop(); BF.app.route(); U.toast('Прогрес скинуто'); }
    };
  };

  // ---------- Settings ----------
  BF.views.settings = el => {
    const set = S.settings;
    function voiceOptions(sel) {
      const vs = BF.speech.voices;
      return `<option value="">Автоматично</option>` + vs.map(v => `<option value="${esc(v.name)}" ${v.name === sel ? 'selected' : ''}>${esc(v.name)} (${esc(v.lang)})</option>`).join('');
    }
    function render() {
      const vs = BF.speech.voices;
      el.innerHTML = `
        <div class="page-head"><div><h1>Налаштування</h1></div></div>
        <div class="card">
          <h3>🔊 Озвучення</h3>
          ${!BF.speech.available ? '<div class="note">Цей браузер не підтримує синтез мовлення. Спробуйте Microsoft Edge або Google Chrome.</div>'
            : vs.length ? `<p class="small muted">Знайдено французьких голосів: ${vs.length}. Найприродніше звучать голоси «Natural» / «Online» у Microsoft Edge.</p>`
            : '<div class="note">Французьких голосів не знайдено. У Windows: Параметри → Час і мова → Мовлення → Додати голоси → Français (France). Або відкрийте застосунок у Microsoft Edge — там є онлайн-голоси.</div>'}
          <div class="grid grid-2" style="margin-top:10px">
            <label>Жіночі персонажі<br><select class="input" id="svf" style="width:100%">${voiceOptions(set.voiceF)}</select></label>
            <label>Чоловічі персонажі<br><select class="input" id="svm" style="width:100%">${voiceOptions(set.voiceM)}</select></label>
          </div>
          <div class="row" style="margin-top:12px">
            <label>Швидкість мовлення: <b id="srv">${set.rate}</b>×<br><input type="range" id="sr" min="0.6" max="1.3" step="0.05" value="${set.rate}" style="width:240px"></label>
            <span class="spacer"></span>
            <button class="btn" data-say="Bonjour Madame, je suis votre conseillère. Comment puis-je vous aider ?" data-g="f">▶ Тест (жін.)</button>
            <button class="btn" data-say="Bonjour Monsieur, votre carte est bloquée. Vous allez recevoir une nouvelle carte." data-g="m">▶ Тест (чол.)</button>
          </div>
          <p class="small muted" style="margin-top:10px">🎤 Розпізнавання мовлення (для рольових ігор і відповідей у відео): ${BF.speech.canListen ? 'доступне' : 'недоступне в цьому браузері — використовуйте письмові відповіді'}.</p>
        </div>
        <div class="card">
          <h3>🎯 Навчання</h3>
          <div class="grid grid-2">
            <label>Поточний рівень<br>${BF.ui.selectLevel('slv', set.level, false)}</label>
            <label>Денна ціль (XP)<br><select class="input" id="sgoal">${[20, 50, 80, 120].map(g => `<option ${g === set.goal ? 'selected' : ''}>${g}</option>`).join('')}</select></label>
            <label>Субтитри у відео за замовчуванням<br><select class="input" id="ssubs">
              <option value="both">FR + UA</option><option value="fr">лише FR</option><option value="ua">лише UA</option><option value="off">без субтитрів</option></select></label>
            <label>Тема оформлення<br><select class="input" id="sth"><option value="auto">Як у системі</option><option value="light">Світла</option><option value="dark">Темна</option></select></label>
          </div>
        </div>
        <div class="card">
          <h3>📲 Встановити як застосунок</h3>
          ${BF.install.standalone() ? '<p class="small">Застосунок уже встановлено й відкрито як окрему програму ✓</p>' : `
          <p class="small">Після встановлення Banquier FR відкривається як звичайна програма (з іконкою на робочому столі або телефоні) і працює без інтернету.</p>
          ${BF.install.available ? '<button class="btn btn-accent" id="sinstall">⬇ Встановити зараз</button>' : ''}
          <ul class="intro-list small" style="margin-top:10px">
            <li><b>Chrome / Edge на комп'ютері:</b> значок «Встановити» праворуч в адресному рядку або меню ⋮ → «Встановити Banquier FR».</li>
            <li><b>Android (Chrome):</b> меню ⋮ → «Додати на головний екран» / «Встановити застосунок».</li>
            <li><b>iPhone / iPad (Safari):</b> кнопка «Поділитися» → «На початковий екран».</li>
          </ul>`}
        </div>
        <div class="card">
          <h3>ℹ️ Про застосунок</h3>
          <p class="small">Banquier FR — тренажер французької для банківського працівника: ${D.vocab.length} термінів, ${D.dialogues.length} діалогів, ${D.videos.length} відео-сцен, ${D.phrases.length} розмовних фраз, ${D.grammar.length} граматичних тем. Банк «Banque Mirabelle» і всі персонажі вигадані.</p>
          <p class="small muted">Цифри та правила (ліміти Livret A/LDDS, норма 35 %, строки на роздуми тощо) актуальні на момент створення; ставки й тарифи в реальних банках змінюються — перевіряйте актуальні дані перед співбесідою.</p>
        </div>`;
      const ib = el.querySelector('#sinstall');
      if (ib) ib.onclick = () => BF.install.prompt().then(render);
      el.querySelector('#ssubs').value = set.subs;
      el.querySelector('#sth').value = set.theme;
      el.querySelector('#svf').onchange = e => { set.voiceF = e.target.value; S.save(); };
      el.querySelector('#svm').onchange = e => { set.voiceM = e.target.value; S.save(); };
      el.querySelector('#sr').oninput = e => { set.rate = +e.target.value; el.querySelector('#srv').textContent = set.rate; S.save(); };
      el.querySelector('#slv').onchange = e => { set.level = e.target.value; S.save(); BF.app.updateTop(); };
      el.querySelector('#sgoal').onchange = e => { set.goal = +e.target.value; S.save(); BF.app.updateTop(); };
      el.querySelector('#ssubs').onchange = e => { set.subs = e.target.value; S.save(); };
      el.querySelector('#sth').onchange = e => { set.theme = e.target.value; S.save(); BF.app.applyTheme(); };
    }
    render();
    let alive = true;
    BF.speech.onVoices(() => { if (alive && el.isConnected) render(); });
    return () => { alive = false; };
  };
})();
