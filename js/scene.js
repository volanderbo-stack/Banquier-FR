// Generated SVG characters, bank office scenes and the animated video player
BF.scene = (() => {
  const U = BF.util;
  const C = () => BF.data.characters;

  function shade(hex, amt) {
    const n = parseInt(hex.slice(1), 16);
    const f = c => Math.max(0, Math.min(255, Math.round(c * (1 - amt))));
    const r = f(n >> 16), g = f((n >> 8) & 255), b = f(n & 255);
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  // ---- Character bust in a 200x220 box ----
  function bust(id, opt = {}) {
    const c = C()[id];
    const skin = c.skin, hair = c.hair, out = c.outfit, shirt = c.shirt || '#ffffff';
    let back = '', front = '';
    const fringe = `<path d="M57,92 C54,52 76,40 100,40 C124,40 146,52 143,92 C136,66 118,60 100,60 C82,60 64,66 57,92Z" fill="${hair}"/>`;
    switch (c.hairStyle) {
      case 'long':
        back = `<path d="M46,178 C32,112 42,32 100,30 C158,32 168,112 154,178 Z" fill="${hair}"/>`;
        front = fringe;
        break;
      case 'bob':
        back = `<path d="M50,130 C40,62 60,32 100,32 C140,32 160,62 150,130 C146,136 138,136 135,128 L137,92 L63,92 L65,128 C62,136 54,136 50,130Z" fill="${hair}"/>`;
        front = `<path d="M56,96 C52,52 78,38 102,38 C126,38 150,54 144,96 C132,76 120,62 98,62 C86,68 70,78 56,96Z" fill="${hair}"/>`;
        break;
      case 'bun':
        back = `<circle cx="100" cy="32" r="19" fill="${hair}"/>`;
        front = fringe;
        break;
      case 'ponytail':
        back = `<path d="M134,58 C174,66 172,142 150,168 C160,124 152,92 130,78Z" fill="${hair}"/>`;
        front = fringe;
        break;
      case 'curly': {
        const pts = [[58, 84], [62, 64], [72, 49], [87, 40], [103, 37], [119, 41], [132, 51], [140, 66], [143, 85]];
        if (c.curlyLong) pts.push([54, 104], [146, 104], [52, 124], [148, 124], [56, 142], [144, 142]);
        front = pts.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="13" fill="${hair}"/>`).join('');
        back = c.curlyLong ? `<path d="M44,150 C36,100 50,40 100,36 C150,40 164,100 156,150Z" fill="${hair}"/>` : '';
        break;
      }
      case 'bald':
        front = `<path d="M57,100 C55,82 58,72 66,66 L70,98Z" fill="${hair}"/><path d="M143,100 C145,82 142,72 134,66 L130,98Z" fill="${hair}"/>`;
        break;
      default: // short
        front = `<path d="M57,92 C52,46 80,34 102,34 C128,34 150,50 143,92 C140,72 132,62 120,58 C104,66 84,64 70,62 C62,68 59,80 57,92Z" fill="${hair}"/>`;
    }
    const body = `<path d="M16,222 C18,174 48,152 80,147 L120,147 C152,152 182,174 184,222Z" fill="${out}"/>`;
    let torso;
    if (c.casual) {
      torso = `<path d="M80,147 C88,160 112,160 120,147" fill="none" stroke="${shade(out, .25)}" stroke-width="4"/>`;
    } else {
      torso = `<path d="M82,147 L100,186 L118,147Z" fill="${shirt}"/>` +
        `<path d="M80,147 L100,192 L89,204 L69,152Z" fill="${shade(out, .18)}"/>` +
        `<path d="M120,147 L100,192 L111,204 L131,152Z" fill="${shade(out, .18)}"/>` +
        (c.tie ? `<path d="M96,151 L104,151 L106,160 L102,188 L98,188 L94,160Z" fill="${c.tie}"/>` : '');
    }
    const neck = `<path d="M86,116 L86,150 C92,158 108,158 114,150 L114,116Z" fill="${shade(skin, .1)}"/>`;
    const ears = `<ellipse cx="57" cy="95" rx="7" ry="11" fill="${shade(skin, .04)}"/><ellipse cx="143" cy="95" rx="7" ry="11" fill="${shade(skin, .04)}"/>`;
    const earrings = c.earrings ? `<circle cx="56" cy="109" r="3.2" fill="#e0a526"/><circle cx="144" cy="109" r="3.2" fill="#e0a526"/>` : '';
    const head = `<ellipse cx="100" cy="90" rx="43" ry="52" fill="${skin}"/>`;
    const cheeks = `<ellipse cx="77" cy="109" rx="7" ry="4" fill="#e46a6a" opacity=".16"/><ellipse cx="123" cy="109" rx="7" ry="4" fill="#e46a6a" opacity=".16"/>`;
    const beard = c.beard ? `<path d="M60,102 C62,140 82,146 100,146 C118,146 138,140 140,102 C134,126 120,132 100,132 C80,132 66,126 60,102Z" fill="${c.beardColor || hair}" opacity=".9"/>` : '';
    const brow = shade(hair === '#c4c4c4' || hair === '#9a9a9a' ? '#777777' : hair, .1);
    const brows = `<path d="M75,77 Q85,72 94,76" stroke="${brow}" stroke-width="3.2" fill="none" stroke-linecap="round"/><path d="M106,76 Q115,72 125,77" stroke="${brow}" stroke-width="3.2" fill="none" stroke-linecap="round"/>`;
    const eyes = `<g class="eyes"><ellipse cx="85" cy="90" rx="4.2" ry="5.2" fill="#2a2a2a"/><ellipse cx="115" cy="90" rx="4.2" ry="5.2" fill="#2a2a2a"/><circle cx="86.6" cy="88.4" r="1.4" fill="#fff"/><circle cx="116.6" cy="88.4" r="1.4" fill="#fff"/></g>`;
    const nose = `<path d="M100,96 Q96,108 100,111 Q103,112 106,110" stroke="${shade(skin, .28)}" stroke-width="2" fill="none" stroke-linecap="round"/>`;
    const mouth = `<g class="mouth"><path class="m-closed" d="M89,121 Q100,128 111,121" stroke="#8a3b3b" stroke-width="2.6" fill="none" stroke-linecap="round"/><ellipse class="m-open" cx="100" cy="123" rx="8.5" ry="6.5" fill="#6b2430"/></g>`;
    const glasses = c.glasses ? `<g fill="none" stroke="#2b2b2b" stroke-width="2.4"><rect x="72" y="80" width="24" height="19" rx="6"/><rect x="104" y="80" width="24" height="19" rx="6"/><path d="M96,88 L104,88"/></g>` : '';
    const badge = c.staff ? `<rect x="128" y="170" width="28" height="10" rx="2" fill="#e0a526"/><rect x="131" y="173" width="16" height="2" fill="#7a5a10"/>` : '';
    const headset = opt.headset ? `<path d="M52,92 C48,26 152,26 148,92" stroke="#2b2b2b" stroke-width="6" fill="none"/><rect x="45" y="84" width="13" height="22" rx="5" fill="#2b2b2b"/><path d="M52,104 Q58,130 86,126" stroke="#2b2b2b" stroke-width="3" fill="none"/><circle cx="87" cy="126" r="3.5" fill="#2b2b2b"/>` : '';
    const phone = opt.phone ? `<g transform="rotate(14 150 98)"><rect x="140" y="74" width="20" height="38" rx="5" fill="#1d1d1f"/><rect x="143" y="79" width="14" height="26" rx="2" fill="#3a4a66"/></g><ellipse cx="152" cy="118" rx="11" ry="9" fill="${skin}"/>` : '';
    const cls = ['char', opt.cls || ''].join(' ');
    return `<g class="${cls}" data-char="${id}">${back}${body}${torso}${neck}${badge}` +
      `<g class="head">${ears}${earrings}${head}${cheeks}${beard}${eyes}${brows}${nose}${mouth}${glasses}${front}${headset}</g>${phone}</g>`;
  }

  const avatar = (id, opt = {}) =>
    `<svg class="avatar" viewBox="${opt.full ? '0 0 200 222' : '28 18 144 150'}" aria-hidden="true">${bust(id, opt)}</svg>`;
  const avatarCircle = id => `<span class="avatar-circle" title="${U.esc(C()[id].name)}">${avatar(id)}</span>`;

  // ---- Background pieces (800x450) ----
  function officeBg() {
    return `
      <defs>
        <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e9eef6"/><stop offset="1" stop-color="#d5deec"/></linearGradient>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9cc3ea"/><stop offset="1" stop-color="#dcebf8"/></linearGradient>
        <linearGradient id="desk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4efe7"/><stop offset="1" stop-color="#d9cfc0"/></linearGradient>
      </defs>
      <rect width="800" height="450" fill="url(#wall)"/>
      <rect y="300" width="800" height="150" fill="#c9d3e3"/>
      <g>
        <rect x="290" y="44" width="220" height="160" rx="4" fill="url(#sky)" stroke="#f8fafc" stroke-width="8"/>
        <path d="M296,204 L296,160 L322,160 L322,140 L346,128 L370,140 L370,170 L392,170 L392,150 L420,150 L420,132 L446,120 L470,132 L470,166 L504,166 L504,204Z" fill="#b6c6dc"/>
        <path d="M400,204 L400,96 L404,96 L404,204Z" fill="#8fa3bf"/>
        <path d="M384,204 L402,92 L420,204" fill="none" stroke="#8fa3bf" stroke-width="4"/>
        <path d="M390,166 L414,166" stroke="#8fa3bf" stroke-width="3"/>
        <rect x="396" y="44" width="8" height="160" fill="#f8fafc"/>
      </g>
      <g transform="translate(40,40)">
        <rect width="190" height="54" rx="10" fill="#1f4e9c"/>
        <circle cx="30" cy="27" r="15" fill="#e0a526"/>
        <path d="M30,12 Q36,6 42,9" stroke="#3f7a2a" stroke-width="3" fill="none"/>
        <text x="54" y="25" font-family="Georgia, serif" font-size="17" font-weight="700" fill="#fff">Banque</text>
        <text x="54" y="44" font-family="Georgia, serif" font-size="17" font-weight="700" fill="#e0a526">Mirabelle</text>
      </g>
      <g transform="translate(700,160)">
        <rect x="-22" y="110" width="44" height="40" rx="6" fill="#8a6a4a"/>
        <ellipse cx="0" cy="96" rx="34" ry="26" fill="#3f8a4a"/>
        <ellipse cx="-20" cy="70" rx="20" ry="26" fill="#4f9d58"/>
        <ellipse cx="18" cy="64" rx="18" ry="30" fill="#5aab63"/>
      </g>
      <g transform="translate(560,58)">
        <rect width="96" height="70" rx="4" fill="#fff" stroke="#c4cfe0" stroke-width="3"/>
        <path d="M14,52 L34,34 L50,44 L68,22 L84,30" stroke="#1f4e9c" stroke-width="4" fill="none" stroke-linecap="round"/>
        <text x="12" y="18" font-family="Arial" font-size="10" font-weight="700" fill="#5d6779">TAUX 2026</text>
      </g>`;
  }
  function deskFront(banker) {
    const b = C()[banker];
    return `
      <rect x="0" y="338" width="800" height="112" fill="url(#desk)"/>
      <rect x="0" y="332" width="800" height="12" fill="#efe8dd"/>
      <rect x="0" y="342" width="800" height="3" fill="#cbbfae"/>
      <g transform="translate(296,256)">
        <rect width="104" height="70" rx="5" fill="#2b3446"/>
        <rect x="46" y="70" width="12" height="12" fill="#3a4458"/>
        <rect x="30" y="80" width="44" height="6" rx="3" fill="#3a4458"/>
      </g>
      <g transform="translate(470,346)">
        <rect width="70" height="50" rx="2" fill="#fff" transform="rotate(-6)"/>
        <rect x="8" y="10" width="44" height="3" fill="#c8d0dd" transform="rotate(-6)"/>
        <rect x="8" y="18" width="50" height="3" fill="#c8d0dd" transform="rotate(-6)"/>
        <rect x="8" y="26" width="36" height="3" fill="#c8d0dd" transform="rotate(-6)"/>
        <rect x="70" y="20" width="56" height="5" rx="2" fill="#1f4e9c" transform="rotate(18)"/>
      </g>
      <g transform="translate(96,372)">
        <path d="M0,40 L14,0 L196,0 L210,40Z" fill="#1f4e9c"/>
        <text x="105" y="20" text-anchor="middle" font-family="Arial" font-size="15" font-weight="700" fill="#fff">${U.esc(b.name)}</text>
        <text x="105" y="35" text-anchor="middle" font-family="Arial" font-size="11" fill="#e0a526">${U.esc(b.role)}</text>
      </g>`;
  }

  function stageSVG(video) {
    const b = video.b, c = video.c;
    if (video.set === 'phone') {
      return `<svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="pw1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e6edf7"/><stop offset="1" stop-color="#cfdaea"/></linearGradient>
          <linearGradient id="pw2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f7ead9"/><stop offset="1" stop-color="#ecd6bb"/></linearGradient>
        </defs>
        <rect width="398" height="450" fill="url(#pw1)"/>
        <g transform="translate(24,26)"><rect width="150" height="44" rx="8" fill="#1f4e9c"/><circle cx="24" cy="22" r="12" fill="#e0a526"/><text x="44" y="28" font-family="Georgia,serif" font-size="15" font-weight="700" fill="#fff">Mirabelle</text></g>
        <rect x="250" y="40" width="110" height="80" rx="4" fill="#fff" stroke="#c4cfe0" stroke-width="3"/>
        <path d="M262,104 L284,84 L300,94 L322,68 L346,78" stroke="#1f4e9c" stroke-width="4" fill="none"/>
        <g transform="translate(60,104) scale(1.38)">${bust(b, { headset: true, cls: 'B' })}</g>
        <rect x="0" y="372" width="398" height="78" fill="#d9cfc0"/><rect x="0" y="366" width="398" height="10" fill="#efe8dd"/>
        <rect x="402" width="398" height="450" fill="url(#pw2)"/>
        <rect x="610" y="40" width="150" height="120" rx="4" fill="#bfe0f5" stroke="#fff" stroke-width="8"/>
        <path d="M614,156 L614,120 Q650,90 690,118 Q720,96 756,124 L756,156Z" fill="#9cc79a"/>
        <g transform="translate(440,52)"><rect x="0" y="0" width="60" height="78" rx="3" fill="#fff" stroke="#c49a6c" stroke-width="5"/><circle cx="30" cy="34" r="14" fill="#f2b880"/><path d="M8,70 Q30,46 52,70Z" fill="#d48a52"/></g>
        <g transform="translate(468,104) scale(1.38)">${bust(c, { phone: true, cls: 'C' })}</g>
        <rect x="402" y="380" width="398" height="70" fill="#b98d64"/><rect x="402" y="372" width="398" height="12" rx="6" fill="#c99d72"/>
        <rect x="398" width="4" height="450" fill="#0d1320"/>
        <rect class="panel-dim B" width="398" height="450" fill="#0d1320"/>
        <rect class="panel-dim C" x="402" width="398" height="450" fill="#0d1320"/>
        <g transform="translate(372,24)"><circle cx="28" cy="28" r="24" fill="#21925f"/><path d="M18,22 C18,34 24,40 36,40 L40,35 L34,31 L31,34 C27,32 25,30 23,26 L26,23 L22,17Z" fill="#fff"/></g>
      </svg>`;
    }
    return `<svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
      ${officeBg()}
      <g transform="translate(62,96) scale(1.3)">${bust(b, { cls: 'B' })}</g>
      <g transform="translate(478,96) scale(1.3)">${bust(c, { cls: 'C' })}</g>
      ${deskFront(b)}
    </svg>`;
  }

  // Thumbnail for video lists
  function thumb(video) {
    return `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="320" height="180" fill="${video.set === 'phone' ? '#e9e2d6' : '#dfe7f3'}"/>
      <rect y="132" width="320" height="48" fill="${video.set === 'phone' ? '#cdb79c' : '#d9cfc0'}"/>
      <g transform="translate(18,30) scale(.68)">${bust(video.b)}</g>
      <g transform="translate(166,30) scale(.68)">${bust(video.c, { phone: video.set === 'phone' })}</g>
    </svg>`;
  }

  // ---- Video player ----
  function player(root, video, hooks = {}) {
    const chars = C();
    const lines = video.lines;
    const set = BF.store.settings;
    let idx = -1, token = 0, playing = false, ended = false;
    let rate = 1;
    let subsMode = set.subs || 'both';

    root.innerHTML = `
      <div class="player">
        <div class="stage ${video.set === 'phone' ? 'phone' : ''}">
          <div class="stage-inner">${stageSVG(video)}</div>
          <div class="subs"></div>
          <div class="overlay start">
            <span class="badge lvl-${video.l}" style="background:#fff">${video.l}</span>
            <h2>${U.esc(video.title)}</h2>
            <p>${U.esc(video.ua)}</p>
            <p class="small">${U.esc(chars[video.b].name)} (${U.esc(chars[video.b].role.toLowerCase())}) · ${U.esc(chars[video.c].name)} (${chars[video.c].g === 'f' ? 'клієнтка' : 'клієнт'})</p>
            <button class="big-play" data-p="start" aria-label="Відтворити">▶</button>
          </div>
        </div>
        <div class="controls">
          <button class="c" data-p="prev" title="Попередня репліка">⏮</button>
          <button class="c" data-p="toggle" title="Пуск / пауза (пробіл)">▶</button>
          <button class="c" data-p="next" title="Наступна репліка">⏭</button>
          <button class="c" data-p="replay" title="Повторити репліку">↻</button>
          <div class="segs">${lines.map((_, i) => `<i data-seg="${i}" title="Репліка ${i + 1}"></i>`).join('')}</div>
          <select data-p="rate" title="Швидкість">
            <option value="0.75">0.75×</option><option value="0.9">0.9×</option><option value="1" selected>1×</option><option value="1.15">1.15×</option>
          </select>
          <select data-p="subs" title="Субтитри">
            <option value="both">FR + UA</option><option value="fr">FR</option><option value="ua">UA</option><option value="off">Без субтитрів</option>
          </select>
        </div>
      </div>`;

    const stage = root.querySelector('.stage');
    const subs = root.querySelector('.subs');
    const toggleBtn = root.querySelector('[data-p="toggle"]');
    const segs = [...root.querySelectorAll('.segs i')];
    root.querySelector('[data-p="subs"]').value = subsMode;
    const charEl = s => stage.querySelector(`.char.${s}`);

    function setSpeaker(s) {
      stage.classList.remove('focus-B', 'focus-C');
      if (s) stage.classList.add('focus-' + s);
      ['B', 'C'].forEach(k => {
        const el = charEl(k);
        if (!el) return;
        el.classList.toggle('listening', !!s && k !== s);
      });
    }
    function talking(s, on) {
      const el = charEl(s);
      if (el) el.classList.toggle('talking', on);
    }
    function renderSubs(i) {
      if (i < 0 || subsMode === 'off') { subs.innerHTML = ''; return; }
      const [s, fr, ua] = lines[i];
      const who = chars[s === 'B' ? video.b : video.c].name;
      let words = '';
      let pos = 0;
      fr.split(' ').forEach((w, k) => {
        words += (k ? ' ' : '') + `<span class="w" data-i="${pos}">${U.esc(w)}</span>`;
        pos += w.length + 1;
      });
      subs.innerHTML = `<span class="s-name">${U.esc(who)}</span>` +
        (subsMode !== 'ua' ? `<span class="s-fr">${words}</span>` : '') +
        (subsMode === 'both' || subsMode === 'ua' ? `<span class="s-ua">${U.esc(ua)}</span>` : '');
    }
    function highlight(charIndex) {
      let cur = null;
      subs.querySelectorAll('.w').forEach(w => { if (+w.dataset.i <= charIndex) cur = w; w.classList.remove('cur'); });
      if (cur) cur.classList.add('cur');
    }
    function markSegs() {
      segs.forEach((el, i) => { el.classList.toggle('past', i < idx); el.classList.toggle('now', i === idx); });
    }
    function setBtn() { toggleBtn.textContent = playing ? '⏸' : '▶'; }
    const wait = ms => new Promise(r => setTimeout(r, ms));

    async function playFrom(i) {
      const my = ++token;
      BF.speech.cancel();
      ['B', 'C'].forEach(k => talking(k, false));
      root.querySelector('.overlay')?.remove();
      playing = true; ended = false; setBtn();
      for (let k = i; k < lines.length; k++) {
        if (my !== token) return;
        idx = k;
        const [s, fr] = lines[k];
        const ch = chars[s === 'B' ? video.b : video.c];
        setSpeaker(s);
        renderSubs(k);
        markSegs();
        hooks.onLine && hooks.onLine(k);
        await wait(k === i ? 350 : 150);
        if (my !== token) return;
        talking(s, true);
        await BF.speech.speak(fr, { g: ch.g, rate, onboundary: e => highlight(e.charIndex) });
        talking(s, false);
        if (my !== token) return;
        await wait(550 / rate);
      }
      if (my !== token) return;
      playing = false; ended = true; setBtn();
      setSpeaker(null);
      idx = lines.length;
      markSegs();
      showEnd();
      hooks.onEnd && hooks.onEnd();
    }
    function pause() {
      token++;
      playing = false;
      BF.speech.cancel();
      ['B', 'C'].forEach(k => talking(k, false));
      setBtn();
    }
    function showEnd() {
      const ov = document.createElement('div');
      ov.className = 'overlay end';
      ov.innerHTML = `<h2>Fin · Кінець</h2><p>Тепер спробуйте відповісти клієнту замість працівника банку ↓</p>
        <div class="row" style="justify-content:center;margin-top:8px">
          <button class="btn btn-accent" data-p="restart">↻ Ще раз</button>
          <button class="btn" data-p="totasks">✏️ До вправи</button>
        </div>`;
      stage.appendChild(ov);
    }

    root.addEventListener('click', e => {
      const seg = e.target.closest('[data-seg]');
      if (seg) { playFrom(+seg.dataset.seg); return; }
      const b = e.target.closest('[data-p]');
      if (!b || b.tagName === 'SELECT') return;
      const p = b.dataset.p;
      if (p === 'start' || p === 'restart') { stage.querySelector('.overlay.end')?.remove(); playFrom(0); }
      else if (p === 'toggle') {
        if (playing) pause();
        else { stage.querySelector('.overlay.end')?.remove(); playFrom(ended || idx < 0 ? 0 : idx); }
      }
      else if (p === 'prev') playFrom(Math.max(0, Math.min(idx, lines.length) - 1));
      else if (p === 'next') playFrom(Math.min(lines.length - 1, Math.max(0, idx + 1)));
      else if (p === 'replay') playFrom(Math.max(0, Math.min(idx, lines.length - 1)));
      else if (p === 'totasks') hooks.onTasks && hooks.onTasks();
    });
    root.querySelector('[data-p="rate"]').addEventListener('change', e => { rate = +e.target.value; });
    root.querySelector('[data-p="subs"]').addEventListener('change', e => {
      subsMode = e.target.value;
      set.subs = subsMode; BF.store.save();
      renderSubs(idx < lines.length ? idx : -1);
    });
    const onKey = e => {
      if (e.code === 'Space' && !/INPUT|TEXTAREA|SELECT|BUTTON/.test(document.activeElement.tagName)) {
        e.preventDefault();
        toggleBtn.click();
      }
    };
    document.addEventListener('keydown', onKey);

    return {
      playFrom, pause,
      destroy() { pause(); document.removeEventListener('keydown', onKey); }
    };
  }

  return { bust, avatar, avatarCircle, stageSVG, thumb, player };
})();
