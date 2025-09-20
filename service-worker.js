
// set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'mcs',
    suffix: 'v1.1', // Updated version for cache invalidation
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.core.skipWaiting();
workbox.core.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `NetworkFirst` strategy for html
workbox.routing.registerRoute(
    /\.html$/,
    new workbox.strategies.NetworkFirst({
        cacheName: 'html-cache',
        networkTimeoutSeconds: 3
    })
);

// use `CacheFirst` strategy for css and js (static assets)
workbox.routing.registerRoute(
    /\.(?:js|css)$/,
    new workbox.strategies.CacheFirst({
        cacheName: 'static-assets',
        plugins: [{
            cacheKeyWillBeUsed: async ({ request }) => {
                return `${request.url}?v=${new Date().getTime()}`;
            }
        }]
    })
);

// use `CacheFirst` strategy for images
workbox.routing.registerRoute(
    /assets\/(img|icons|images)/,
    new workbox.strategies.CacheFirst({
        cacheName: 'image-cache',
        plugins: [{
            cacheExpiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
            }
        }]
    })
);

// use `StaleWhileRevalidate` for third party files
workbox.routing.registerRoute(
    /^https?:\/\/(cdn\.staticfile\.org|fonts\.googleapis\.com|pro\.fontawesome\.com)/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'third-party-cache'
    })
);
