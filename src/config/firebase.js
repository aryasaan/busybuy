// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhwikDAbtv2lFCreInjPsKdjA_Q8h-HL0",
  authDomain: "busybuy2.firebaseapp.com",
  projectId: "busybuy2",
  storageBucket: "busybuy2.firebasestorage.app",
  messagingSenderId: "766908022051",
  appId: "1:766908022051:web:5af732f8596218cd2a2096",
  measurementId: "G-JE1VJ061HK"
};

console.log(process.env);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
setPersistence(auth, browserLocalPersistence);
export { db };
