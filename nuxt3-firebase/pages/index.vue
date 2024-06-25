<template>

<DarkModeToggle />

  <div class="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-[#454e5b]">

    <div v-if="firebaseUser" class="text-3x1 font-bold underline">Welcome, {{ firebaseUser?.email }}</div>
    <AuthCards />

    <nuxtLink to="/secret">Go to secret</nuxtLink>
  </div>

</template>

<script setup>
import AuthCards from '~/components/AuthCards.vue';



  const firebaseUser = useFirebaseUser();

</script>

<style scoped></style>
