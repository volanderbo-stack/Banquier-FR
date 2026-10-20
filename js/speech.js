// Text-to-speech (Web Speech API, French voices) and speech recognition
BF.speech = (() => {
  const synth = window.speechSynthesis || null;
  let voices = [];
  let pending = null;
  const keep = [];   // keep utterances referenced (Chrome GC bug)
  const listeners = [];

  const MALE = /(henri|paul|claude|thomas|remy|rémy|jerome|jérôme|alain|antoine|yves|gerard|gérard|guillaume|maxime|nicolas|olivier|mathieu|daniel|fabrice|jean|louis|vincent|male|homme)/i;
  const voiceGender = v => (MALE.test(v.name) ? 'm' : 'f');

  function rank(v) {
    let r = 0;
    if (/fr[-_]FR/i.test(v.lang)) r += 10;
    if (/natural|online|neural|premium|enhanced/i.test(v.name)) r += 6;
    if (/google/i.test(v.name)) r += 3;
    if (v.localService === false) r += 1;
    return r;
  }
  function load() {
    if (!synth) return;
    voices = synth.getVoices().filter(v => /^fr/i.test(v.lang)).sort((a, b) => rank(b) - rank(a));
    listeners.forEach(fn => fn(voices));
  }
  if (synth) {
    load();
    if (typeof synth.addEventListener === 'function') synth.addEventListener('voiceschanged', load);
    else synth.onvoiceschanged = load;
  }

  function pickVoice(g) {
    const set = BF.store.settings;
    const wanted = g === 'm' ? set.voiceM : set.voiceF;
    if (wanted) {
      const v = voices.find(x => x.name === wanted);
      if (v) return v;
    }
    return voices.find(v => voiceGender(v) === g) || voices[0] || null;
  }

  // Spoken form: expand abbreviations so the voice reads them correctly
  function prep(text) {
    return String(text)
      .replace(/\bM\. /g, 'Monsieur ')
      .replace(/\bMme /g, 'Madame ')
      .replace(/\bTAEG\b/g, 'T.A.E.G.')
      .replace(/\bLDDS\b/g, 'L.D.D.S.')
      .replace(/\bPEL\b/g, 'P.E.L.')
      .replace(/\bPFU\b/g, 'P.F.U.')
      .replace(/\bFICP\b/g, 'F.I.C.P.')
      .replace(/\bFGDR\b/g, 'F.G.D.R.')
      .replace(/\bKYC\b/g, 'K.Y.C.')
      .replace(/\bLCB-FT\b/g, 'L.C.B. F.T.')
      .replace(/\bCDI\b/g, 'C.D.I.')
      .replace(/\bCVV\b/g, 'C.V.V.')
      .replace(/\s\/\s/g, ', ')
      .replace(/€/g, ' euros');
  }

  function speak(text, o = {}) {
    return new Promise(resolve => {
      const t = prep(text);
      const rateMul = o.rate || 1;
      const est = Math.max(1200, t.length * 68 / rateMul);
      if (!synth || !voices.length && !synth.getVoices().length) {
        o.onstart && o.onstart(false);
        setTimeout(resolve, est);
        return;
      }
      cancel();
      const u = new SpeechSynthesisUtterance(t);
      const v = pickVoice(o.g || 'f');
      if (v) { u.voice = v; u.lang = v.lang; } else u.lang = 'fr-FR';
      u.rate = Math.max(0.5, Math.min(1.6, (BF.store.settings.rate || 0.95) * rateMul));
      // only one voice available: vary the pitch so the two characters sound different
      u.pitch = (!v || voiceGender(v) !== (o.g || 'f')) ? (o.g === 'm' ? 0.75 : 1.2) : 1;
      let done = false;
      const fin = () => { if (done) return; done = true; clearTimeout(timer); resolve(); };
      u.onend = fin;
      u.onerror = fin;
      u.onstart = () => o.onstart && o.onstart(true);
      if (o.onboundary && t === text) u.onboundary = e => o.onboundary(e);
      const timer = setTimeout(fin, est * 3 + 5000);
      keep.push(u);
      if (keep.length > 8) keep.shift();
      pending = setTimeout(() => { pending = null; synth.speak(u); }, 40);
    });
  }

  function cancel() {
    if (pending) { clearTimeout(pending); pending = null; }
    if (synth) synth.cancel();
  }

  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  function listen() {
    return new Promise((resolve, reject) => {
      if (!SR) { reject(new Error('unsupported')); return; }
      const r = new SR();
      r.lang = 'fr-FR';
      r.interimResults = false;
      r.maxAlternatives = 1;
      let got = '';
      r.onresult = e => { got = e.results[0][0].transcript; };
      r.onerror = e => reject(e);
      r.onend = () => resolve(got);
      r.start();
    });
  }

  return {
    speak, cancel, listen, prep,
    get voices() { return voices; },
    get available() { return !!synth; },
    get canListen() { return !!SR; },
    onVoices: fn => listeners.push(fn),
    voiceGender
  };
})();
