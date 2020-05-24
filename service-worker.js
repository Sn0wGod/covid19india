/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "/covid19india/precache-manifest.553ac980a4509580101451d698fa3a33.js"
);


var CACHE_NAME='covid-cache';
var urlsToCache=[
  '/',
  '/favicon.ico',
  '/asset-manifest.json',
  '/manifest.json',
  '/service-worker.js',
  '/index.html',
  '/static/js/2.ce97c6ba.chunk.js',
  '/static/js/main.4667ddb1.chunk.js',
  '/static/js/runtime-main.f2fdf7b1.js',
  'https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise'
];

self.addEventListener('install',event=>{
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache=>{
      return cache.addAll(urlsToCache);
    })
  )
})





self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/covid19india/index.html"), {
  
  blacklist: [/^\/_/,/\/[^/?]+\.[^/]+$/],
});
