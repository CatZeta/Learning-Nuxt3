<script setup>
  const product = ref()
  

  onMounted(async () => {
    const {result} = await $fetch('/api/query?col=product')
    product.value =  result

    console.log('Result', result)
  })
</script>

<template>
  <div>
    Page: {{product}}
  </div>
</template>

<style scoped></style>
