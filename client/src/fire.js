import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/storage';

  var firebaseConfig = {
    apiKey: "AIzaSyCfBfwXk2p9aUvWSpplDuVAJzU1pRzdnqE",
    authDomain: "sport-adventures.firebaseapp.com",
    databaseURL: "https://sport-adventures.firebaseio.com",
    projectId: "sport-adventures",
    storageBucket: "sport-adventures.appspot.com",
    messagingSenderId: "338297074338",
    appId: "1:338297074338:web:96afd4e80f01916276ddfb",
    measurementId: "G-9RD90QL64V"
  };
  const fire = firebase.initializeApp(firebaseConfig);
  const storage = fire.storage();
  firebase.analytics();

  export {storage, fire as default};