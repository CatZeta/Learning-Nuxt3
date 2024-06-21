<script setup>
import InputText from 'primevue/inputtext';

  const product = ref()
  

  onMounted(async () => {
    const {result} = await $fetch('/api/query?col=product')
    product.value =  result

    console.log('Result', result)
  })
</script>

<template>
  <div v-for="p in product" :key="p.id">
    Product: {{p.name}}
  </div>
  <div>
    <InputText />
    <Button label="Check" icon="pi pi-check" />
  </div>
</template>

<style scoped></style>
