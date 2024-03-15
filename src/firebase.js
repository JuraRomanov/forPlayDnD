
// import 'dotenv/config'
import { initializeApp } from "firebase/app";


// require('dotenv').config()
// console.log(process.env.VITE_FIREBASE_APP_ID)
console.log(import.meta.env.VITE_FIREBASE_KEY)

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_KEY,
    authDomain:import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId:import.meta.env.VITE_FIREBASE_APP_ID
  };

const app = initializeApp(firebaseConfig);