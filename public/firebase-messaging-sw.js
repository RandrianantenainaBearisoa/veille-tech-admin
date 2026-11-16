// Importation des scripts Firebase en version compat pour le Service Worker
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

const FIREBASE_APIKEY = 'AIzaSyAunrZK8CHqysSATZRnDJ7XJyM3HCZShZo';
const FIREBASE_AUTHDOMAIN = 'veille-tech-agent.firebaseapp.com';
const FIREBASE_PROJECTID = 'veille-tech-agent';
const FIREBASE_STORAGEBUCKET = 'veille-tech-agent.firebasestorage.app';
const FIREBASE_MESSAGINGSENDERID = '188068533519';
const FIREBASE_APPID = '1:188068533519:web:9dc0b65c2a78dcedbc5a7a';

// Configuration Firebase
firebase.initializeApp({
  apiKey: FIREBASE_APIKEY,
  authDomain: FIREBASE_AUTHDOMAIN,
  projectId: FIREBASE_PROJECTID,
  storageBucket: FIREBASE_STORAGEBUCKET,
  messagingSenderId: FIREBASE_MESSAGINGSENDERID,
  appId: FIREBASE_APPID,
});

const messaging = firebase.messaging();

// Gestion des notifications reçues quand l'app est en arrière-plan / fermée
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Message reçu en arrière-plan : ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icons/favicon-128x128.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
