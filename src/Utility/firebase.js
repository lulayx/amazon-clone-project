// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcP4MOmdyg0yyJnKwodkMPHY9xncFnsQg",
  authDomain: "clone-2cb10.firebaseapp.com",
  projectId: "clone-2cb10",
  storageBucket: "clone-2cb10.firebasestorage.app",
  messagingSenderId: "73949133477",
  appId: "1:73949133477:web:a2cdc4e078d0550ee92b4c",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
