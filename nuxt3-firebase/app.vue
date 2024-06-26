<template>
  <div class="flex flex-col items-center justify-center min-h-screen ">
    <DarkModeToggle />
    <AuthCards v-if="!firebaseUser"/>
    <NuxtPage v-else/>
  </div>
</template>

<script setup>
  const firebaseUser = useFirebaseUser();
</script>
