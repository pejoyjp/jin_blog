// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "jin-blog-90cb8.firebaseapp.com",
  projectId: "jin-blog-90cb8",
  storageBucket: "jin-blog-90cb8.appspot.com",
  messagingSenderId: "445914251991",
  appId: "1:445914251991:web:afce97eb8209d198e46692",
  measurementId: "G-L6KZTPS9JC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)