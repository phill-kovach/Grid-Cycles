const CACHE_NAME = 'lightcycles-cache-v1';
const urlsToCache = [
    './',
    './Lightcycles.html',
    'https://fonts.googleapis.com/css2?family=VT323&display=swap',
    'https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/dist/phosphor.css',
    'https://cdn.tailwindcss.com',
    'https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js',
    'https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js',
    'https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js'
];

self.addEventListener('install', (event) => {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
