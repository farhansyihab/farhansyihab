let webPush = require("web-push");
const vapidKeys = {
  publicKey:
    "BCtumdy2y-JEFSBcWYUFwhVAuIlVfu0MLouSzHoxCQaD3hFTkbhmGpobaYyrVA4ziBXjM7rQrvIKneGCZ4gmvMQ",
  privateKey: "gEcIzouNwx6ZFhSwn9CoH8tU485yV12HF5KmMZCY9lI",
};

webPush.setVapidDetails(
  "mailto:agiptek@gmail.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
let pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/dtpPJTG9M_E:APA91bHigJXko4XMlwfU0N-9jZj_Dh_yjltaQy1n10JOKPGOVmZtfg6bZxKAtHMawYQ-5XmyiVrx6QEM6YYv0RVo3uBB71nEIvcUQtQ9h-shTGBnJLe4xCbTo6v8eR8VKRgpTLm8FN2c",
  keys: {
    p256dh:
      "BNQaXArlDrAtOYBZ4lBfkFzCcNQQdgvKLItFyPt2gKMjms065sXu/bBB7tKZRQULUaBgSxAyJTzMtsiT+kGAi3I=",
    auth: "SNIpYIP9CGi5hOrjgvXYYg==",
  },
};
let payload =
  "Silahkan buka aplikasi dengan alamat : \nhttp://127.0.0.1:8080 (jika nmp run start pada node) \nhttp://127.0.0.1:8887 (jika menggunakan ekstensi live server pada VSC) \nhttp://127.0.0.1:5500  (jika menggunakan webserver for chrome)";
let options = {
  gcmAPIKey: "728822763029",
  TTL: 60,
};
webPush.sendNotification(pushSubscription, payload, options);
