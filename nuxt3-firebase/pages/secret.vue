<template>
    <div class="text-3xl font-bold underline">
        Secret
    </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"]
  // or middleware: 'auth'
})
</script>

<style lang="scss" scoped>

</style>