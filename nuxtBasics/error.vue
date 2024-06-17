<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
      <p class="mt-7 text-7xl font-bold">{{error.statusCode}}</p>
      <p class="mt-7 text-6xl">Ooops.</p>
      <p class="mt-7">{{error.message}}</p>
      <button class="btn my-7" @click="handleError">Go Home...</button>
    </div>
  </template>
  
  <script setup>
    defineProps({
      error: Object
    })
  
    /**
     * Handle the error by clearing it and redirecting the user to the home page.
     * The `clearError` function is used to clear the error, and the `redirect` option is set to '/' to redirect the user to the home page.
     */
    const handleError = () => clearError({ redirect: '/' })
  </script>