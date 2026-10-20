// Progress storage (localStorage) + spaced repetition for words
BF.store = (() => {
  const KEY = 'banquierfr.v1';
  const DAY = 86400000;
  const INTERVALS = [0, DAY, 2 * DAY, 4 * DAY, 8 * DAY, 16 * DAY, 32 * DAY];
  const LEARNED_BOX = 3;

  const defaults = () => ({
    v: 1,
    words: {},       // fr -> { box, seen, ok, due, last }
    dialogues: {},   // id -> timestamp
    videos: {},      // id -> { watched, tasks: { i: pct } }
    tests: {},       // key -> { best, last, tries, ts }
    ex: { answered: 0, correct: 0, sessions: 0 },
    xp: 0,
    xpDays: {},      // yyyy-mm-dd -> xp
    settings: { level: 'A1', rate: 0.95, subs: 'both', theme: 'auto', voiceF: '', voiceM: '', goal: 50 }
  });

  let s = defaults();

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const d = JSON.parse(raw);
        s = { ...defaults(), ...d, settings: { ...defaults().settings, ...(d.settings || {}) } };
      }
    } catch (e) { s = defaults(); }
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) { /* storage unavailable */ }
  }

  const today = () => BF.util.localDate();
  const changed = () => { if (BF.app && BF.app.updateTop) BF.app.updateTop(); };

  function addXP(n) {
    s.xp += n;
    const d = today();
    s.xpDays[d] = (s.xpDays[d] || 0) + n;
    save();
    changed();
  }
  function streak() {
    const d = new Date();
    if (!s.xpDays[BF.util.localDate(d)]) d.setDate(d.getDate() - 1);
    let n = 0;
    while (s.xpDays[BF.util.localDate(d)]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }

  // ---- words ----
  const word = f => s.words[f] || { box: 0, seen: 0, ok: 0, due: 0 };
  const isLearned = f => word(f).box >= LEARNED_BOX;
  function wordResult(f, ok) {
    const w = { ...word(f) };
    w.seen++;
    if (ok) { w.ok++; w.box = Math.min(INTERVALS.length - 1, w.box + 1); }
    else w.box = Math.max(0, w.box - 2);
    w.due = Date.now() + INTERVALS[w.box];
    w.last = Date.now();
    s.words[f] = w;
    save();
  }
  function setLearned(f, yes) {
    const w = { ...word(f) };
    w.box = yes ? 4 : 0;
    w.due = Date.now() + INTERVALS[w.box];
    s.words[f] = w;
    save();
  }

  // ---- content ----
  function markDialogue(id) {
    if (!s.dialogues[id]) { s.dialogues[id] = Date.now(); save(); addXP(10); return true; }
    return false;
  }
  function markVideo(id) {
    const v = s.videos[id] || {};
    if (!v.watched) { v.watched = Date.now(); s.videos[id] = v; save(); addXP(15); return true; }
    return false;
  }
  function videoTask(id, i, pct) {
    const v = s.videos[id] || {};
    v.tasks = v.tasks || {};
    if (pct > (v.tasks[i] || 0)) v.tasks[i] = pct;
    s.videos[id] = v;
    save();
  }
  function videoTaskScore(video) {
    const t = (s.videos[video.id] || {}).tasks || {};
    if (!video.tasks.length) return 0;
    return Math.round(video.tasks.reduce((a, _, i) => a + (t[i] || 0), 0) / video.tasks.length);
  }
  function testResult(key, pct) {
    const t = s.tests[key] || { best: 0, tries: 0 };
    t.tries++; t.last = pct; t.best = Math.max(t.best, pct); t.ts = Date.now();
    s.tests[key] = t;
    save();
  }
  function exResult(ok) { s.ex.answered++; if (ok) s.ex.correct++; save(); }
  function sessionDone() { s.ex.sessions++; save(); }

  // ---- progress ----
  function moduleProgress(t, l) {
    const D = BF.data;
    const words = D.vocab.filter(w => w.t === t && w.l === l);
    const dlgs = D.dialogues.filter(d => d.t === t && d.l === l);
    const vids = D.videos.filter(v => v.t === t && v.l === l);
    const test = (s.tests[`mod:${t}:${l}`] || {}).best || 0;
    const parts = [];
    const wl = words.filter(w => isLearned(w.f)).length;
    parts.push([0.4, words.length ? wl / words.length : 0]);
    const dr = dlgs.filter(d => s.dialogues[d.id]).length;
    if (dlgs.length) parts.push([0.2, dr / dlgs.length]);
    const vw = vids.filter(v => (s.videos[v.id] || {}).watched).length;
    if (vids.length) parts.push([0.15, vw / vids.length]);
    parts.push([0.25, test / 100]);
    const wsum = parts.reduce((a, [w]) => a + w, 0);
    const pct = Math.round(parts.reduce((a, [w, v]) => a + w * v, 0) / wsum * 100);
    return { pct, words: [wl, words.length], dlg: [dr, dlgs.length], vid: [vw, vids.length], test };
  }
  function levelProgress(l) {
    const ts = BF.data.topics;
    return Math.round(ts.reduce((a, t) => a + moduleProgress(t.id, l).pct, 0) / ts.length);
  }

  function exportJSON() { return JSON.stringify(s, null, 2); }
  function importJSON(txt) {
    const d = JSON.parse(txt);
    if (!d || typeof d !== 'object' || !d.words) throw new Error('bad file');
    s = { ...defaults(), ...d, settings: { ...defaults().settings, ...(d.settings || {}) } };
    save();
  }
  function reset() { const keep = s.settings; s = defaults(); s.settings = keep; save(); }

  load();

  return {
    get state() { return s; },
    get settings() { return s.settings; },
    save, addXP, streak, word, isLearned, wordResult, setLearned,
    markDialogue, markVideo, videoTask, videoTaskScore, testResult, exResult, sessionDone,
    moduleProgress, levelProgress, exportJSON, importJSON, reset, today
  };
})();
