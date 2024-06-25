<template>
 
  <AuthForm /> 
  <div v-if="firebaseUser">Welcome, {{ firebaseUser?.email }}</div>

</template>

<script setup>
const firebaseUser = useFirebaseUser();
</script>

<style scoped>
</style>
