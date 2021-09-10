import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBt0gIOxPeeyo763mn22EKvEvf-7V7Ee6k",
  authDomain: "slack-clone-9.firebaseapp.com",
  projectId: "slack-clone-9",
  storageBucket: "slack-clone-9.appspot.com",
  messagingSenderId: "885443963017",
  appId: "1:885443963017:web:bd0e180dba7dca17c87e58",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
