/**
 * Created by ikay on 01.07.16.
 */
var cacheName = 'notenrechnerjk82982932893';
var filesToCache = [
  '/notenRechner/',
  '/notenRechner/manifest.json',
  '/notenRechner/index.html',
  '/notenRechner/libs/material.min.js',
  '/notenRechner/libs/material.min.css',
  '/notenRechner/js/app.js',
  '/notenRechner/styles/main.css',

];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

self.addEventListener('activate', function(e) {

  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
});
