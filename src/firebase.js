import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  doc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsN-NRC3iArMfE0gypNuDbMyLDu5CJsr4",
  authDomain: "clone-projects-9.firebaseapp.com",
  projectId: "clone-projects-9",
  storageBucket: "clone-projects-9.appspot.com",
  messagingSenderId: "174316682985",
  appId: "1:174316682985:web:ab1cf64bfead39386dba78"
};

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {
  db,
  auth,
  provider,
  collection,
  onSnapshot,
  addDoc,
  doc,
  query,
  orderBy,
  signInWithPopup,
  serverTimestamp,
};
