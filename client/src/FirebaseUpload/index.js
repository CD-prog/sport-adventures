import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAOXa2ZvM37PLEpIOzlblWIkF_4jx62McA",
    authDomain: "react-upload-10cec.firebaseapp.com",
    databaseURL: "https://react-upload-10cec.firebaseio.com",
    projectId: "react-upload-10cec",
    storageBucket: "react-upload-10cec.appspot.com",
    messagingSenderId: "281900719471",
    appId: "1:281900719471:web:544814223c3cc35ab85c9a",
    measurementId: "G-3SPG2X08K2"
  };
const secondary = firebase.initializeApp(firebaseConfig, 'secondary');

  const storage = secondary.storage();

  export { storage, secondary as default };