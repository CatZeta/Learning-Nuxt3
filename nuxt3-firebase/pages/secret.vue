<template>
      <div v-for="p in product" :key="p.id">
    Product: {{p.name}}
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"]
  // or middleware: 'auth'
})


   const product = ref()


  onMounted(async () => {
    const { result } = await $fetch('/api/query?col=product')
    product.value = result

    console.log('Result', result) 
  })
</script>

