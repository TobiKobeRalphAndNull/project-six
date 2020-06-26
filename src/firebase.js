import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig ={
  apiKey: "AIzaSyBCUsX2ILvXh1sITHinQJ9PHk5nGiJ90fM",
  authDomain: "binge-watch-list.firebaseapp.com",
  databaseURL: "https://binge-watch-list.firebaseio.com",
  projectId: "binge-watch-list",
  storageBucket: "binge-watch-list.appspot.com",
  messagingSenderId: "665131961000",
  appId: "1:665131961000:web:23bbca1d60f97622fad09d"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

