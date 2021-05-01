import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAtN_HzTK6TTFPMrB1db_IRhROkuRn2OnI",
    authDomain: "abril-2021-1.firebaseapp.com",
    projectId: "abril-2021-1",
    storageBucket: "abril-2021-1.appspot.com",
    messagingSenderId: "237667483185",
    appId: "1:237667483185:web:432f79700dfcfe5e631f10"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

// https://firebase.google.com/docs/reference/js/firebase.auth.Auth#onauthstatechanged
// El observador solo se activa al iniciar o cerrar sesión
firebase.getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged((user) => {
            resolve(user);
        }, reject);
    });
};

export {provider, auth, firebase}