import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD1CM84w6Dj8voyf5bsPOlCCLgWLEL7BYA",
  authDomain: "instagram-clone-e059e.firebaseapp.com",
  databaseURL: "https://instagram-clone-e059e-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-e059e",
  storageBucket: "instagram-clone-e059e.appspot.com",
  messagingSenderId: "925608283062",
  appId: "1:925608283062:web:97e5d926dc9399049ccf17",
  measurementId: "G-5WPHRZ5WQR",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
