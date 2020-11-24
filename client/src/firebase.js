import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBKofterZGZkjqEbJnUkmyIu06yY5ye19c",
    authDomain: "social-dashboard-fb.firebaseapp.com",
    databaseURL: "https://social-dashboard-fb.firebaseio.com",
    projectId: "social-dashboard-fb",
    storageBucket: "social-dashboard-fb.appspot.com",
    messagingSenderId: "388740299463",
    appId: "1:388740299463:web:107b4e8db12600b1a35ce2",
    measurementId: "G-PQ2DVSEBT1"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore()
//   firebase.analytics();