importScripts('https://www.gstatic.com/firebasejs/11.0.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.0.1/firebase-messaging-compat.js');

firebase.initializeApp({
  messagingSenderId: 'YOUR_SENDER_ID' // フロントと同じ、公開してOK
});

const messaging = firebase.messaging();

// バックグラウンド通知
messaging.onBackgroundMessage((payload) => {
  console.log('バックグラウンド通知:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = { body: payload.notification.body };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
