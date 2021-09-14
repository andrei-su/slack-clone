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
  apiKey: "AIzaSyBt0gIOxPeeyo763mn22EKvEvf-7V7Ee6k",
  authDomain: "slack-clone-9.firebaseapp.com",
  projectId: "slack-clone-9",
  storageBucket: "slack-clone-9.appspot.com",
  messagingSenderId: "885443963017",
  appId: "1:885443963017:web:bd0e180dba7dca17c87e58",
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
