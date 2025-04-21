
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('metapulso-v5').then(cache => {
      return cache.addAll(['/', '/index.html', '/manifest.json']);
    })
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
