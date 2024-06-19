// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrD-3naIzFDPnApGKlVNW5Ix_D7stAHZc",
  authDomain: "nuxt3-firebase-e8014.firebaseapp.com",
  projectId: "nuxt3-firebase-e8014",
  storageBucket: "nuxt3-firebase-e8014.appspot.com",
  messagingSenderId: "949170394641",
  appId: "1:949170394641:web:e1d85b58d5e6485ced03b0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(firebaseApp)