import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfdvyisTslnDs_jftr4zx-MjiMyGNQz2k",
  authDomain: "finalhackathon-a71f5.firebaseapp.com",
  projectId: "finalhackathon-a71f5",
  storageBucket: "finalhackathon-a71f5.appspot.com",
  messagingSenderId: "1071482299213",
  appId: "1:1071482299213:web:946ee363725fb433c70d04",
  measurementId: "G-TPXCV001EN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);