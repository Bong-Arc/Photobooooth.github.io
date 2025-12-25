// sw.js 최종 수정 버전
const CACHE_NAME = 'life4cut-v5'; // 버전을 올려서 새로고침 강제

const ASSETS = [
  './',
  'index.html',
  './index.html',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // 하나라도 실패하면 캐싱이 안 되므로, 중요 파일부터 넣습니다.
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // 캐시에 있으면 캐시 반환, 없으면 네트워크 시도
      return cachedResponse || fetch(event.request);
    })
  );
});