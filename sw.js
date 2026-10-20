// Service worker: makes Banquier FR work offline and installable.
// Strategy: serve from cache immediately, refresh the cache from the network in the background.
const CACHE = 'banquierfr-v1';
const ASSETS = [
  './',
  'index.html',
  'manifest.webmanifest',
  'css/styles.css',
  'js/util.js',
  'js/data/topics.js',
  'js/data/vocab.js',
  'js/data/phrases.js',
  'js/data/grammar.js',
  'js/data/characters.js',
  'js/data/dialogues.js',
  'js/data/videos.js',
  'js/store.js',
  'js/speech.js',
  'js/scene.js',
  'js/exercises.js',
  'js/views-learn.js',
  'js/views-video.js',
  'js/views-practice.js',
  'js/app.js',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'icons/apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(
    caches.open(CACHE).then(async cache => {
      const cached = await cache.match(req, { ignoreSearch: true });
      const fresh = fetch(req).then(res => {
        if (res.ok) cache.put(req.url.split('?')[0], res.clone());
        return res;
      }).catch(() => cached);
      return cached || fresh;
    })
  );
});
