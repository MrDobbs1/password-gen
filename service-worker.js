self.addEventListener('install', (e) => {
    console.log('Service Worker: Installed');
    e.waitUntil(
        caches.open('static').then((cache) => {
            return cache.addAll([
                './',
                './password.css',
                './password.js',
                './favicon-32x32.png',
                './Passifest.json'
            ]);
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});