// 筋トレバランス管理 PWA Service Worker
// ネットワーク優先（更新を取りこぼさない）＋ オフライン時はキャッシュ
const CACHE = 'kintore-2026-08-02j';
const SHELL = ['./', './index.html', './lucide.min.js', './manifest.webmanifest', './icon.svg', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.allSettled(SHELL.map(u => c.add(u)))) // 1つ失敗しても止めない
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  // 画像はキャッシュ優先（2026-07-11d）：ヒットすれば即返し、無ければfetch→cache.put。
  // 画像は不変前提なので通信を省いて高速化・データ節約（アプリ本体は下のnetwork-first維持）
  const isImage = e.request.destination === 'image' || e.request.url.includes('/images/');
  if (isImage) {
    e.respondWith(
      caches.match(e.request).then(hit => hit || fetch(e.request).then(resp => {
        const copy = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
        return resp;
      }).catch(() => caches.match(e.request)))
    );
    return;
  }
  e.respondWith(
    fetch(e.request)
      .then(resp => {
        const copy = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
        return resp;
      })
      // オフライン時：キャッシュ優先。ナビゲーション要求のみ index.html へフォールバック
      // （全GETに index.html を返すと画像・manifest等が破損する 2026-07-08修正）
      .catch(() => caches.match(e.request).then(r => r || (e.request.mode === 'navigate' ? caches.match('./index.html') : undefined)))
  );
});
