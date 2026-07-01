/* ============================================================
   Corso IS1 2026 — Service Worker (PWA offline shell)
   ============================================================ */
const CACHE = 'is1-2026-v1';

const ASSETS = [
  './',
  './index.html',
  './style.css',
  './data.js',
  './script.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png'
];

// Pre-cache the app shell on install
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

// Clean up old caches on activate
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Cache-first for same-origin app assets; network-first fallback for the rest.
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;

  if (sameOrigin) {
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req)
          .then((res) => {
            const copy = res.clone();
            caches.open(CACHE).then((cache) => cache.put(req, copy)).catch(() => {});
            return res;
          })
          .catch(() => caches.match('./index.html'));
      })
    );
  } else {
    // CDN assets (Three.js, GSAP, fonts): try network, fall back to cache
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(req, copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match(req))
    );
  }
});
