const tokenString = document.getElementById("token");
const errorMessage = document.getElementById("error");
const message = document.getElementById("message");


var firebaseConfig = {
    apiKey: "AIzaSyC9G_-yG6vsZw540ocg9C-gcJrwvfw69qM",
    authDomain: "chrome-notification-d2bc6.firebaseapp.com",
    projectId: "chrome-notification-d2bc6",
    storageBucket: "chrome-notification-d2bc6.appspot.com",
    messagingSenderId: "398727703947",
    appId: "1:398727703947:web:4a7ab301a20a9fcd2d138e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging()

messaging
    .requestPermission()
    .then(() => {
        message.innerHTML = "Notifications allowed"
        return messaging.getToken()
    })
    .then(token => {
        tokenString.innerHTML = "Token Is :" + token
    })
    .catch(err => {
        errorMessage.innerHTML = errorMessage.innerHTML +  ": " + err
        console.log("No permission to send push", err);
    })

messaging.onMessage(payload => {
    console.log("Message received. ", payload);
    const {title, ...options} = payload.data.notification
})
