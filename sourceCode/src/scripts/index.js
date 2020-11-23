import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import 'materialize-css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  const hashContent = window.location.hash.substr(1);
  if (hashContent === 'nav-mobile') {
    const elem = document.querySelector('.sidenav');
    const instance = M.Sidenav.init(elem);
    instance.open();
    window.location.hash = '#/home';
  } else {
    app.renderPage();
  }
});

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

async function registerServiceWorker() {
  await swRegister();
  const serviceWorkerRegistration = await navigator.serviceWorker.ready;
  if (serviceWorkerRegistration) {
    if ('Notification' in window) {
      Notification.requestPermission().then((result) => {
        if (result === 'denied') {
          console.log('Fitur notifikasi tidak diijinkan.');
          return;
        }
        if (result === 'default') {
          console.error('Pengguna menutup kotak dialog permintaan ijin.');
          return;
        }

        if ('PushManager' in window) {
          navigator.serviceWorker.getRegistration().then((registration) => {
            registration.pushManager
              .subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(
                  'BERWOdVH3rQU3HBSOK8WusBRZH15GygjWa4UbzsEMIYJk6cLUlEJoRyhP7PCkcTloAk2hYirJbPpwckA7rGLtR0'
                ),
              })
              .then((subscribe) => {
                console.log(
                  'Berhasil melakukan subscribe dengan endpoint: ',
                  subscribe.endpoint
                );
                console.log(
                  'Berhasil melakukan subscribe dengan p256dh key: ',
                  btoa(
                    String.fromCharCode.apply(
                      null,
                      new Uint8Array(subscribe.getKey('p256dh'))
                    )
                  )
                );
                console.log(
                  'Berhasil melakukan subscribe dengan auth key: ',
                  btoa(
                    String.fromCharCode.apply(
                      null,
                      new Uint8Array(subscribe.getKey('auth'))
                    )
                  )
                );
              })
              .catch((e) =>
                console.error('Tidak dapat melakukan subscribe ', e.message)
              );
          });
        }
      });
    }
  }
}

window.addEventListener('load', () => {
  app.renderPage();
  registerServiceWorker();
});
