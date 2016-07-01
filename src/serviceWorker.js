/**
 * Created by ikay on 01.07.16.
 */
var cacheName = 'notencache1222';
var filesToCache = [
  '/',
  '/index.html',
  'libs/material.min.js',
  'libs/material.min.css',
  'js/app.js',
  'styles/main.css',

];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
