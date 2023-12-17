// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEniabIHGY7zV0B-KvDQlJdxZHWGkBV2s",
  authDomain: "youmovie-382cc.firebaseapp.com",
  projectId: "youmovie-382cc",
  storageBucket: "youmovie-382cc.appspot.com",
  messagingSenderId: "412862697678",
  appId: "1:412862697678:web:e6c62a371d433fe8cfc09f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

