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
  let firebaseApp
  
  if (!firebaseApp) {
    firebaseApp = initializeApp(firebaseConfig);

    console.log('Firebase initialized');
  }
  initUser();

  //Provide auth to nuxt app
  const auth = getAuth();
  nuxtApp.vueApp.provide('auth', auth);
  nuxtApp.provide('auth', auth);

  //Provide db to nuxt app
  const db = getFirestore();
  nuxtApp.vueApp.provide('db', db);
  nuxtApp.provide('db', db);




});
