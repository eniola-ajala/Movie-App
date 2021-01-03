import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

let firebaseConfig = {
    apiKey: "AIzaSyAlam-AOGL_HKDpYgal24sElUoNec_PUPc",
    authDomain: "movie-app-71740.firebaseapp.com",
    projectId: "movie-app-71740",
    storageBucket: "movie-app-71740.appspot.com",
    messagingSenderId: "826840950385",
    appId: "1:826840950385:web:6b6182220624037e799dd0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();