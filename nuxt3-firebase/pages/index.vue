<template>
  <div>
    <span v-if="firebaseUser" class="text-3x1 font-bold underline">Welcome, {{ firebaseUser?.displayName }}</span>

    <Card v-if="firebaseUser" class="card-base border border-slate-500 card-dark mt-4 overflow-auto">
      <template #content>
        <pre>{{ firebaseUser }}</pre>
      </template>
      <template #footer>
        <Button label="Sign Out" icon="pi pi-sign-out" @click="signOut" v-if="firebaseUser"
          class="button-base button-danger" />
      </template>
    </Card>

    <nuxtLink to="/secret">Go to secret</nuxtLink>
  </div>
</template>

<script setup>
  const firebaseUser = useFirebaseUser();
  const error = ref(null);

  const signOut = async () => {
    try {
      await signOutUser();
      firebaseUser.value = null;
      error.value = null;
      toast.add({ severity: 'info', summary: 'Signed out', detail: 'You have signed out successfully', life: 3000 });
    } catch (err) {
      error.value = err.message;
      toast.add({ severity: 'error', summary: 'Error', detail: err.message, life: 3000 });
    }
  };

</script>
