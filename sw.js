const CACHE_NAME = 'billy-bible-v1';
const ASSETS = [
  './',
  './index.html',
  './main.js',
  './manifest.json',
  './bibleText.txt',
  './icon-180.png'
];

// 安裝並寫入快取
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// 激活
self.addEventListener('activate', e => {
  e.waitUntil(self.clients.claim());
});

// 🔥 攔截請求：優先從本地快取獲取，無網絡時 100% 正常讀經
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cachedResponse => {
      return cachedResponse || fetch(e.request);
    })
  );
});