// plugins/firebase.client.ts
import { defineNuxtPlugin } from "#app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig().public.firebase;

  const firebaseConfig = {
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    projectId: config.projectId,
    storageBucket: config.storageBucket,
    messagingSenderId: config.messagingSenderId,
    appId: config.appId, 
  };

  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  // Initialize Firebase services
  const auth = getAuth(firebaseApp);
  const firestoreDb = getFirestore(firebaseApp);

  console.log("firebaseApp", firebaseApp);
  
  return {
    provide: {
      firebase: {
        auth,
        firestoreDb,
      },
    },
  };
});
