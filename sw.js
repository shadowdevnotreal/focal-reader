var CACHE = 'focal-v24';
var ASSETS = ['./index.html', './manifest.json'];

self.addEventListener('install', function (e) {
    e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); }));
    self.skipWaiting();
});

self.addEventListener('activate', function (e) {
    e.waitUntil(
        caches.keys().then(function (names) {
            return Promise.all(names.filter(function (n) { return n !== CACHE; }).map(function (n) { return caches.delete(n); }));
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', function (e) {
    // Never cache Groq API responses
    if (e.request.url.includes('api.groq.com')) {
        e.respondWith(fetch(e.request).catch(function () {
            return new Response(JSON.stringify({ error: 'Offline — AI unavailable' }), { headers: { 'Content-Type': 'application/json' } });
        }));
        return;
    }

    // Cache-first for everything else (app files, CDN libs, fonts, etc.)
    // On cache miss: fetch, persist to cache, then serve — enabling full offline use
    e.respondWith(
        caches.match(e.request).then(function (cached) {
            if (cached) return cached;
            return fetch(e.request).then(function (resp) {
                if (resp && resp.status === 200 && e.request.method === 'GET') {
                    var clone = resp.clone();
                    caches.open(CACHE).then(function (c) { c.put(e.request, clone); });
                }
                return resp;
            }).catch(function () {
                // Offline and not cached — return a simple offline placeholder for navigations
                if (e.request.mode === 'navigate') {
                    return caches.match('./index.html');
                }
            });
        })
    );
});
