import 'regenerator-runtime';

// PUSH NOTIFIKASI
self.addEventListener('push', (event) => {
  let body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push message no payload';
  }
  const options = {
    body,
    icon: 'icons/icon-72-72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});

importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js'
);
const { assets } = global.serviceWorkerOption;

const pesanConsoleBerhasil = () => console.log('Workbox berhasil dimuat');
const pesanConsoleGagal = () => console.log('Workbox gagal dimuat');
workbox ? pesanConsoleBerhasil() : pesanConsoleGagal();

workbox.precaching.precacheAndRoute(
  [
    { url: 'index.html', revision: '1' },
    { url: 'manifest.json', revision: '1' },
    { url: 'icons/bundesliga.png', revision: '1' },
    { url: 'icons/icon-48-48.png', revision: '1' },
    { url: 'icons/icon-72-72.png', revision: '1' },
    { url: 'icons/icon-96-96.png', revision: '1' },
    { url: 'icons/icon-144-144.png', revision: '1' },
    { url: 'icons/icon-192-192.png', revision: '1' },
    { url: 'img/bundesliga.png', revision: '1' },
    { url: 'bundle.js', revision: '1' },
  ],
  {
    ignoreUrlParametersMatching: [/.*/],
  }
);

workbox.routing.registerRoute(
  new RegExp('/#/'),
  workbox.strategies.cacheFirst({
    cacheName: 'pages',
  })
);

workbox.routing.registerRoute(
  /^https:\/\/api\.football-data\.org/,
  workbox.strategies.cacheFirst({
    cacheName: 'https://api.football-data.org/',
  })
);

workbox.routing.registerRoute(
  new RegExp(''),
  workbox.strategies.cacheFirst({
    cacheName: 'depan',
  })
);
