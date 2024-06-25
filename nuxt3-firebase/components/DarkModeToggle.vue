<template>
    <div>
      <Button label="Toggle Dark Mode" @click="toggleDarkMode" />
    </div>
  </template>
  
  <script setup>
  import { useDark } from '@vueuse/core';
  
  const isDark = useDark({
    selector: 'html',
    attribute: 'class',
    valueDark: 'dark',
    valueLight: 'light',
  });
  
  const toggleDarkMode = () => {
    isDark.value = !isDark.value;
  };
  </script>