import firebase from "@firebase/app-compat";
import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";


export default defineNuxtRouteMiddleware((to, from) => {
  // @ts-ignore
    const firebaseUser = useFirebaseUser()

    if (!firebaseUser.value) {
        return navigateTo('/')
    }

})
