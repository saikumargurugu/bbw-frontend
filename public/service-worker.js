// Service Worker for image caching
const CACHE_NAME = 'bbw-image-cache-v1';
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.svg', '.webp', '.gif'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.add('/'))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const { request } = event;
  const url = request.url;
  if (IMAGE_EXTENSIONS.some(ext => url.endsWith(ext))) {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache =>
        cache.match(request).then(response =>
          response ||
          fetch(request).then(networkResponse => {
            if (
              networkResponse &&
              networkResponse.status === 200 &&
              (networkResponse.type === 'basic' || networkResponse.type === 'cors')
            ) {
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          }).catch(() => response || Response.error())
        )
      )
    );
  }
});
