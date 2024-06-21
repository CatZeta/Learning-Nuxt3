<script setup>

  const signIn = async () => {
    const email = 'z@querias.com'
    const password = 'Test123'

    const credentials = await signInUser(email, password)
    console.log('Sign In', credentials)
  }

  const signOut = async () => {
    const email = 'z@querias.com'
    const password = 'Test123'

    const result = await signOutUser()
    console.log('Sign Out', result)
  }

  /* const product = ref()


  onMounted(async () => {
    const { result } = await $fetch('/api/query?col=product')
    product.value = result

    console.log('Result', result) 

    const email = 'z@querias.com'
    const password = 'Test123'

    const credentials = await createUser(email, password)
    console.log('Credentials', credentials)

  }) */
</script>

<template>
  <!--   <div v-for="p in product" :key="p.id">
    Product: {{p.name}}
  </div>
  <div>
    <InputText />
    <Button label="Check" icon="pi pi-check" />
  </div> -->


  <Button label="Sign In" @click="signIn" />
  <Button label="Sign Out" @click="signOut" />
</template>

<style scoped></style>
