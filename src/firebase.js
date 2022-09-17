import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAsN-NRC3iArMfE0gypNuDbMyLDu5CJsr4",
  authDomain: "clone-projects-9.firebaseapp.com",
  projectId: "clone-projects-9",
  storageBucket: "clone-projects-9.appspot.com",
  messagingSenderId: "174316682985",
  appId: "1:174316682985:web:ab1cf64bfead39386dba78"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
