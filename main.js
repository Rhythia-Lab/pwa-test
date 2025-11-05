import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-messaging.js";

// 🔹 Firebase Webアプリの設定（SDKスニペット）
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// 🔹 VAPID公開鍵（フロント用、安全に公開OK）
const vapidKey = "YOUR_PUBLIC_VAPID_KEY";

// 通知許可ボタン
document.getElementById("allow").addEventListener("click", async () => {
  try {
    const token = await getToken(messaging, { vapidKey });
    console.log("通知トークン:", token);

    // ⚠️ ここでトークンをサーバに送信して保存する
    // fetch("https://あなたのサーバ/send-token", { method: "POST", body: JSON.stringify({ token }) })

    alert("通知が許可されました！\nトークンはコンソールに表示されます。");
  } catch (err) {
    console.error("通知拒否:", err);
  }
});

// ページ表示中に通知を受信
onMessage(messaging, (payload) => {
  console.log("通知受信:", payload);
  alert(payload.notification.title);
});
