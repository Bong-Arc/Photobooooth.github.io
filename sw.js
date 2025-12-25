// sw.js
const CACHE_NAME = 'life4cut-cache-v3';

const FILES_TO_CACHE = [
  './',
  'index.html',
  './index.html'
];

// 설치 단계
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('캐시 저장 중...');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// 데이터 호출 단계
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});