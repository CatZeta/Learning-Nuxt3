<template>
    <div class="text-3x1 font-bold underline">
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