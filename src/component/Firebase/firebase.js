import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCath-DLr-wyEEutppS7TzEcCyLKFbE5EY",
    authDomain: "etatbank.firebaseapp.com",
    databaseURL: "https://etatbank.firebaseio.com",
    projectId: "etatbank",
    storageBucket: "etatbank.appspot.com",
    messagingSenderId: "653688129489",
    appId: "1:653688129489:web:bb7f7b4df74ada6e0342f0"
};

firebase.initializeApp(config);

export default firebase;