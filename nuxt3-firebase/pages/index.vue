<script setup>
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

<template>
  <Button label="Sign In" @click="signIn" />
  <Button label="Sign Out" @click="signOut" />
  
  <pre>
    {{ firebaseUser }}
  </pre>

</template>

<style scoped></style>
