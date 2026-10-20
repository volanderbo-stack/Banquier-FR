// Video list and video page (player, subtitles, new words, "answer instead of the banker")
(() => {
  const U = BF.util, D = BF.data, S = BF.store, esc = U.esc;

  BF.views.videos = (el, { params }) => {
    let l = params.get('l') || 'all', t = params.get('t') || 'all';
    el.innerHTML = `
      <div class="page-head"><div><h1>Відео-сцени</h1>
        <p>Згенеровані анімовані персонажі (вигадані, без реальних людей) розігрують ситуації в банку французькою. A1 — короткі фрази, A2 — повніші діалоги, B1 — скарги, умови кредиту, ризики.</p></div></div>
      <div class="toolbar">${BF.ui.selectTopic('vt', t)}${BF.ui.selectLevel('vl', l)}</div>
      <div id="vlist"></div>`;
    function render() {
      const vs = D.videos.filter(v => (t === 'all' || v.t === t) && (l === 'all' || v.l === l));
      el.querySelector('#vlist').innerHTML = U.LEVELS.map(lv => {
        const xs = vs.filter(v => v.l === lv);
        const info = D.levels.find(x => x.id === lv);
        return xs.length ? `<div class="section"><div class="section-head"><h2>${U.lvlBadge(lv)} ${esc(info.name)}</h2><span class="small muted">${xs.length} відео</span></div>
          <div class="grid grid-3">${xs.map(BF.ui.videoCard).join('')}</div></div>` : '';
      }).join('') || '<div class="card empty">Нічого не знайдено</div>';
    }
    el.querySelector('#vt').onchange = e => { t = e.target.value; render(); };
    el.querySelector('#vl').onchange = e => { l = e.target.value; render(); };
    render();
  };

  BF.views.video = (el, { m }) => {
    const v = D.videos.find(x => x.id === m[0]);
    if (!v) { location.hash = '#/videos'; return; }
    const C = D.characters, bc = C[v.b], cc = C[v.c];
    const tp = D.topicById(v.t);
    const sameTopic = D.videos.filter(x => x.t === v.t && x.id !== v.id);

    el.innerHTML = `
      <div class="page-head">
        <div style="flex:1;min-width:220px"><h1>${esc(v.title)} ${U.lvlBadge(v.l)}</h1><p>${tp.icon} ${esc(tp.ua)} · ${esc(v.ua)}</p></div>
        <a class="btn btn-sm" href="#/videos">← Усі відео</a>
      </div>
      <div id="player"></div>
      <p class="small muted" style="margin-top:8px">${esc(v.desc)} Пробіл — пауза; ⏮ ⏭ — попередня/наступна репліка; натисніть на смугу, щоб перейти до репліки.</p>

      <div class="grid grid-2" style="margin-top:16px;align-items:start">
        <div class="card">
          <div class="section-head"><h3>📜 Субтитри та переклад</h3>
            <label class="check small"><input type="checkbox" id="tua" checked> українською</label></div>
          <div id="transcript">${v.lines.map(([s, fr, ua], i) => {
            const ch = s === 'B' ? bc : cc;
            return `<div class="transcript-line" data-i="${i}">${U.sayBtn(fr, ch.g)}<span class="t-who">${esc(ch.name.split(' ')[0])}</span>
              <div><div class="t-fr">${esc(fr)}</div><div class="t-ua">${esc(ua)}</div></div></div>`;
          }).join('')}</div>
        </div>
        <div class="card">
          <h3>🆕 Нові слова</h3>
          ${v.words.map(([fr, ua]) => `<div class="phrase">${U.sayBtn(fr)}<div class="p-body"><div class="p-fr">${esc(fr)}</div><div class="p-ua">${esc(ua)}</div></div></div>`).join('')}
          <div class="row" style="margin-top:12px"><a class="btn btn-sm" href="#/m/${v.t}/${v.l}">📚 Модуль «${esc(tp.ua)}» ${v.l}</a></div>
        </div>
      </div>

      <div class="section" id="tasks">
        <div class="section-head"><h2>✏️ Ваша черга: відповідайте замість працівника банку</h2>
          <span class="badge" id="tscore">Результат: ${S.videoTaskScore(v)}%</span></div>
        <p class="muted small">Прослухайте репліку клієнта. Крок 1 — оберіть найкращу відповідь. Крок 2 — сформулюйте власну відповідь (вголос через 🎤 або письмово): застосунок перевірить, чи є в ній ключові ідеї.</p>
        <div id="tlist"></div>
      </div>

      ${sameTopic.length ? `<div class="section"><h3>Інші відео теми «${esc(tp.ua)}»</h3><div class="grid grid-3">${sameTopic.map(BF.ui.videoCard).join('')}</div></div>` : ''}`;

    const transcript = el.querySelector('#transcript');
    el.querySelector('#tua').onchange = e => transcript.querySelectorAll('.t-ua').forEach(x => x.classList.toggle('hidden', !e.target.checked));

    const player = BF.scene.player(el.querySelector('#player'), v, {
      onLine(i) {
        transcript.querySelectorAll('.transcript-line').forEach(x => x.classList.toggle('now', +x.dataset.i === i));
      },
      onEnd() {
        transcript.querySelectorAll('.now').forEach(x => x.classList.remove('now'));
        if (S.markVideo(v.id)) U.toast('Відео переглянуто! +15 XP');
      },
      onTasks() { el.querySelector('#tasks').scrollIntoView({ behavior: 'smooth' }); }
    });

    // ----- tasks -----
    const tlist = el.querySelector('#tlist');
    tlist.innerHTML = v.tasks.map((task, i) => {
      const opts = U.shuffle(task.opts.map((o, k) => ({ o, k })));
      return `<div class="card task-card" data-t="${i}">
        <div class="row" style="margin-bottom:10px"><b>Ситуація ${i + 1}</b><span class="spacer"></span><span class="badge t-best">${(((S.state.videos[v.id] || {}).tasks || {})[i] || 0)}%</span></div>
        <div class="client-line">${BF.scene.avatarCircle(v.c)}
          <div style="flex:1"><div class="small muted">${esc(cc.name)} каже:</div><div class="fr">${esc(task.c)}</div>
          <div class="q-hint hidden t-cu">${esc(task.cu)}</div></div>
          ${U.sayBtn(task.c, cc.g)}<button class="btn btn-sm btn-ghost" data-a="cu" title="Показати переклад">UA</button></div>
        <div class="q-label" style="margin-top:14px">Крок 1 · Оберіть відповідь</div>
        <div class="options" style="margin-top:8px">${opts.map(x => `<button class="opt" data-k="${x.k}">${esc(x.o)}</button>`).join('')}</div>
        <div class="t-step2 hidden">
          <div class="q-label" style="margin-top:16px">Крок 2 · Ваша власна відповідь</div>
          <textarea class="input t-in" rows="2" placeholder="Напишіть або продиктуйте відповідь французькою…" style="margin-top:8px"></textarea>
          <div class="row" style="margin-top:8px">
            ${BF.speech.canListen ? '<button class="btn btn-sm" data-a="mic">🎤 Сказати</button>' : ''}
            <button class="btn btn-sm btn-primary" data-a="check">Перевірити</button>
            <button class="btn btn-sm btn-ghost" data-a="model">Показати зразок</button>
          </div>
          <div class="t-res"></div>
        </div>
      </div>`;
    }).join('');

    function checkAnswer(task, text) {
      const n = ' ' + U.norm(text) + ' ';
      const res = task.k.map(group => {
        const found = group.find(alt => { const a = U.norm(alt); return n.includes(' ' + a + ' ') || (a.length >= 5 && n.includes(a)); });
        return { label: found || group[0], hit: !!found };
      });
      const pct = U.pct(res.filter(r => r.hit).length, res.length);
      return { res, pct };
    }
    function modelHTML(task) {
      return `<div class="note tip" style="margin-top:10px"><div class="row">${U.sayBtn(task.m, bc.g)}<div><b>Зразок:</b> ${esc(task.m)}<div class="muted small">${esc(task.mu)}</div></div></div></div>`;
    }
    function updateScore() { el.querySelector('#tscore').textContent = `Результат: ${S.videoTaskScore(v)}%`; }

    tlist.addEventListener('click', async e => {
      const card = e.target.closest('[data-t]');
      if (!card) return;
      const i = +card.dataset.t;
      const task = v.tasks[i];
      const opt = e.target.closest('.opt');
      if (opt && !opt.disabled) {
        const ok = opt.dataset.k === '0';
        card.querySelectorAll('.opt').forEach(b => {
          b.disabled = true;
          if (b.dataset.k === '0') b.classList.add('correct');
          else if (b === opt) b.classList.add('wrong');
        });
        S.exResult(ok);
        S.addXP(ok ? 5 : 1);
        BF.speech.speak(task.opts[0], { g: bc.g });
        card.querySelector('.t-step2').classList.remove('hidden');
        card.dataset.step1 = ok ? '1' : '0';
        return;
      }
      const a = e.target.closest('[data-a]');
      if (!a) return;
      if (a.dataset.a === 'cu') card.querySelector('.t-cu').classList.toggle('hidden');
      else if (a.dataset.a === 'model') {
        const r = card.querySelector('.t-res');
        if (!r.querySelector('.note')) r.insertAdjacentHTML('beforeend', modelHTML(task));
        BF.speech.speak(task.m, { g: bc.g });
      } else if (a.dataset.a === 'mic') {
        a.textContent = '🎙 Слухаю…';
        try {
          const said = await BF.speech.listen();
          if (said) card.querySelector('.t-in').value = said;
          else U.toast('Нічого не розпізнано — спробуйте ще раз');
        } catch (err) {
          U.toast('Мікрофон недоступний — напишіть відповідь');
        }
        a.textContent = '🎤 Сказати';
      } else if (a.dataset.a === 'check') {
        const text = card.querySelector('.t-in').value.trim();
        if (!text) { card.querySelector('.t-in').focus(); return; }
        const { res, pct } = checkAnswer(task, text);
        const score = Math.round(pct * 0.7 + (card.dataset.step1 === '1' ? 30 : 0));
        S.videoTask(v.id, i, score);
        S.addXP(pct >= 67 ? 10 : 3);
        card.querySelector('.t-best').textContent = `${(((S.state.videos[v.id] || {}).tasks || {})[i] || 0)}%`;
        updateScore();
        card.querySelector('.t-res').innerHTML = `
          <div class="feedback ${pct >= 67 ? 'ok' : 'bad'}">${pct >= 67 ? '✓ Добре! Ключові ідеї є у вашій відповіді.' : 'Спробуйте додати ключові ідеї:'}
            <div class="kw-list">${res.map(r => `<span class="kw ${r.hit ? 'hit' : 'miss'}">${r.hit ? '✓' : '✗'} ${esc(r.label)}</span>`).join('')}</div>
            <div class="fb-detail small">Оцінка за ситуацію: ${score}% (крок 1: ${card.dataset.step1 === '1' ? '30/30' : '0/30'}, ключові ідеї: ${Math.round(pct * 0.7)}/70). Перевірка автоматична й приблизна — порівняйте зі зразком.</div>
          </div>${modelHTML(task)}`;
      }
    });

    return () => player.destroy();
  };
})();
