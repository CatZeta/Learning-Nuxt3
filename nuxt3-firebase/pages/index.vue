
<template>
  <div>
    <NuxtLink to="/secret">Go to Secret</NuxtLink>
  </div>
  
  <Button label="Sign In" v-if="!firebaseUser" @click="signIn" />
  <Button label="Sign Out" v-else @click="signOut" />
  <div v-if="firebaseUser">
    <pre>
    {{ firebaseUser }}
  </pre>
  </div>
  <div v-else>
    User logged Out
  </div>
</template>

<script setup>
/* definePageMeta({
  middleware: ["auth"]
  // or middleware: 'auth'
}) */

  const firebaseUser = useFirebaseUser();
  const credentials = ref()

  const signIn = async () => {
    const email = 'z@querias.com'
    const password = 'Test123'

    credentials.value = await signInUser(email, password)
    /* console.log('Sign In', credentials) */
  }

  const signOut = async () => {
    credentials.value = await signOutUser()
  }
</script>

<style scoped></style>
