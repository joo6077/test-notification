importScripts("https://www.gstatic.com/firebasejs/7.2.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.2.1/firebase-messaging.js");
importScripts("https://www.gstatic.com/firebasejs/7.2.1/firebase-analytics.js");




firebase.initializeApp({
    messagingSenderId: "398727703947"
})

const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler(payload => {
    console.log(payload);
    const notification = JSON.parse(payload.data['gcm.notification.data'])
    const notificationTitle = notification.title
    const notificationOptions = {
        body: notification.body,
        requireInteraction: true
    }
    // Show the notification :)
    // return self.ServiceWorkerRegistration.showNotification(
    //     notificationTitle,
    //     notificationOptions
    // )
    alert('hello')
    return self.registration.showNotification(
        notificationTitle,
        notificationOptions,
    )
})
self.onnotificationclick(event => {
    console.log('event', event)
})