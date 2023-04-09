
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDfszKfimd5EfzPBB1cwWp9PypmuJ5M6mY",
  authDomain: "jingpt-e9539.firebaseapp.com",
  projectId: "jingpt-e9539",
  storageBucket: "jingpt-e9539.appspot.com",
  messagingSenderId: "362425261716",
  appId: "1:362425261716:web:12db8c4cad91d624749e81",
  measurementId: "G-HZVC9VM6M0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)