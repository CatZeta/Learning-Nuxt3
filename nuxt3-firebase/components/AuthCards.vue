<!-- 
 https://tailwindcss.com/docs/hover-focus-and-other-states#hover-focus-and-active 
 https://tailwindcss.com/docs/flex
 https://tailwindcss.com/docs/responsive-design
 https://tailwindcss.com/docs/plugins (Form)
 -->
<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <!-- Create Account -->
    <Card v-if="showCreateAccount && !firebaseUser" class="card-base border border-slate-500 card-dark">
      <template #title>
        <h1>Create an Account</h1>
      </template>
      <template #subtitle>
        <p class="text-blue-500 cursor-pointer dark:text-blue-300 dark:hover:text-blue-200"
          @click="showCreateAccount = !showCreateAccount">
          Already have an account? Sign in.
        </p>
      </template>
      <template #content>
        <div class="p-fluid">
          <div class="field">
            <label for="name" class="form-required">Name</label>
            <InputText v-model="name" id="name" placeholder="Enter your name"
              class="input-base border-slate-500 input-dark" />
          </div>
          <div class="field">
            <label for="email" class="form-required">Email</label>
            <InputText v-model="email" id="email" placeholder="Enter your email"
              class="input-base border-slate-500 input-dark" />
          </div>
          <div class="field">
            <label for="password" class="form-required">Password</label>
            <InputText v-model="password" id="password" type="password" placeholder="Enter your password"
              class="input-base border-slate-500 input-dark" />
          </div>
          <div class="field-checkbox flex items-center">
            <Checkbox v-model="remember" id="remember" class="mr-2" />
            <label for="remember">Remember me</label>
          </div>
        </div>
      </template>
    </Card>

    <!-- Sign In -->
    <Card v-if="!showCreateAccount && !firebaseUser" class="card-base border border-slate-500 card-dark mt-4">
      <template #title>
        <h1>Welcome back!</h1>
      </template>
      <template #subtitle>
        <p class="text-blue-500 cursor-pointer dark:text-blue-300 dark:hover:text-blue-200"
          @click="showCreateAccount = !showCreateAccount">
          Don't have an account? Sign up.
        </p>
      </template>
      <template #content>
        <div class="p-fluid">
          <div class="field">
            <label for="email" class="form-required">Email</label>
            <InputText v-model="email" id="email" placeholder="Enter your email" class="input-base border-slate-500 input-dark" />
          </div>
          <div class="field">
            <label for="password" class="form-required">Password</label>
            <InputText v-model="password" id="password" type="password" placeholder="Enter your password"
              class="input-base border-slate-500 input-dark" />
          </div>
          <div class="field-checkbox flex items-center">
            <Checkbox v-model="remember" id="remember" class="p-checkbox" />
            <label for="remember" class="ml-2">Remember me</label>
          </div>
        </div>
      </template>
    </Card>

    <!-- Buttons -->
    <div class="mt-4 flex flex-col items-center w-96">

      <Button label="Create User" icon="pi pi-user-plus" @click="createAccount"
        v-if="!firebaseUser && showCreateAccount" class="button-base button-primary button-primary-dark" />

      <Button label="Sign In" icon="pi pi-sign-in" @click="signIn" v-if="!firebaseUser && !showCreateAccount"
        class="button-base button-primary button-primary-dark" />

      <Button label="Sign Out" icon="pi pi-sign-out" @click="signOut" v-if="firebaseUser"
        class="button-base button-danger" />
    </div>

    <!-- Toast (displays success and error messages)-->
    <Toast />
  </div>
</template>

<script setup>
  import { useToast } from "primevue/usetoast";

  const toast = useToast();
  const firebaseUser = useFirebaseUser();
  const error = ref(null);

  const name = ref('');
  const email = ref('');
  const password = ref('');

  const remember = ref(false);
  const showCreateAccount = ref(false);



  const signIn = async () => {
    try {
      const credentials = await signInUser(email.value, password.value);
      if (credentials && credentials.user) {
        firebaseUser.value = credentials.user;
        error.value = null;

        toast.add({ severity: 'success', summary: 'Success', detail: 'Yay! Signed in successfully', life: 3000 });
      } else {
        error.value = credentials ? credentials.message : 'Unknown error';

        toast.add({ severity: 'error', summary: 'Error', detail: error.value, life: 3000 });
      }
    } catch (err) {
      error.value = 'Error signing in: ' + err.message;

      toast.add({ severity: 'error', summary: 'Error', detail: err.message, life: 3000 });
    }

    // reset form
    email.value = '';
    password.value = '';
    remember.value = false;
  };

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

  const createAccount = async () => {
    try {
      const credentials = await createUser(email.value, password.value);
      if (credentials && credentials.user) {
        firebaseUser.value = credentials.user;
        error.value = null;
        toast.add({ severity: 'success', summary: 'Success', detail: 'User created successfully', life: 3000 });
      } else {
        error.value = credentials ? credentials.message : 'Unknown error';
        toast.add({ severity: 'error', summary: 'Error', detail: error.value, life: 3000 });
      }
    } catch (err) {
      error.value = 'Error creating user: ' + err.message;
      toast.add({ severity: 'error', summary: 'Error', detail: err.message, life: 3000 });
    }

    // reset form
    name.value = '';
    email.value = '';
    password.value = '';
    remember.value = false;
  };
</script>

<style scoped></style>
