const CACHE = 'eljoker-v1';
const ASSETS = [
  '/eljoker/',
  '/eljoker/index.html',
  '/eljoker/defense.html'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});