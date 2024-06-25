<template>
 <div v-if="firebaseUser" class="text-3x1 font-bold underline">Welcome, {{ firebaseUser?.email }}</div>
  <AuthForm /> 
  
  <nuxtLink to="/secret">Go to secret</nuxtLink>

</template>

<script setup>
const firebaseUser = useFirebaseUser();
</script>

<style scoped>
</style>
