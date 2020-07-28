import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAXbx3usrZCkouFPyWsWmbIRAPrnveGxeM",
  authDomain: "tinder-clone-c4691.firebaseapp.com",
  databaseURL: "https://tinder-clone-c4691.firebaseio.com",
  projectId: "tinder-clone-c4691",
  storageBucket: "tinder-clone-c4691.appspot.com",
  messagingSenderId: "666366160712",
  appId: "1:666366160712:web:6dc8b2d0580aa2e859cd7d",
  measurementId: "G-GWJCM2P4GJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
export default database;
