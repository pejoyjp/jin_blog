
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
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