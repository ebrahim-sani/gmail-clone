import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDIkQ7R9jRapb3RVlPYjcDbj_Kr0JE5Vx4",
  authDomain: "clone-50bd1.firebaseapp.com",
  projectId: "clone-50bd1",
  storageBucket: "clone-50bd1.appspot.com",
  messagingSenderId: "218717539226",
  appId: "1:218717539226:web:0abab552423f33d8fe4823",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
