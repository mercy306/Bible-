// Minimal offline cache. The reader is served from this machine, so the cache
// only needs to keep the page working when the server is briefly unavailable.
const CACHE = 'sixty-six-v24'
const CORE = ['/', '/manifest.webmanifest', '/icon-192.png']

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(CORE)).then(() => self.skipWaiting()))
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET') return

  const url = new URL(request.url)
  // Scripture and commentary data must stay fresh; a stale chapter would be
  // worse than no chapter.
  if (url.pathname.startsWith('/api/')) return

  event.respondWith(
    fetch(request)
      .then((response) => {
        const copy = response.clone()
        caches.open(CACHE).then((cache) => cache.put(request, copy)).catch(() => undefined)
        return response
      })
      .catch(() =>
        caches.match(request).then((hit) => hit ?? caches.match('/')),
      ),
  )
})