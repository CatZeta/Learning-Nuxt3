<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <!-- Create Account -->
    <Card v-if="showCreateAccount && !firebaseUser" class="w-96 h-96 p-5 shadow-lg rounded-lg">
      <template #title>
        <h1>Create an Account</h1>
      </template>
      <template #subtitle>
        <p class="text-blue-500 cursor-pointer" @click="showCreateAccount = !showCreateAccount">
          Already have an account? Sign in.
        </p>
      </template>
      <template #content>
        <div class="p-fluid">
          <div class="field">
            <label for="name">Name</label>
            <InputText v-model="name" id="name" placeholder="Enter your name" />
          </div>
          <div class="field">
            <label for="email">Email</label>
            <InputText v-model="email" id="email" placeholder="Enter your email" />
          </div>
          <div class="field">
            <label for="password">Password</label>
            <InputText v-model="password" id="password" type="password" placeholder="Enter your password" />
          </div>
          <div class="field-checkbox">
            <Checkbox v-model="remember" id="remember" />
            <label for="remember">Remember me</label>
          </div>
          <p v-if="error" class="text-red-500">{{ error }}</p>
        </div>
      </template>
    </Card>

    <!-- Sign In -->
    <Card v-if="!showCreateAccount && !firebaseUser" class="w-96 h-96 p-5 shadow-lg rounded-lg">
      <template #title>
        <h1>Welcome back!</h1>
      </template>
      <template #subtitle>
        <p class="text-blue-500 cursor-pointer" @click="showCreateAccount = !showCreateAccount">
          Don't have an account? Sign up.
        </p>
      </template>
      <template #content>
        <div class="p-fluid">
          <div class="field">
            <label for="email">Email</label>
            <InputText v-model="email" id="email" placeholder="Enter your email" />
          </div>
          <div class="field">
            <label for="password">Password</label>
            <InputText v-model="password" id="password" type="password" placeholder="Enter your password" />
          </div>
          <div class="field-checkbox">
            <Checkbox v-model="remember" id="remember" />
            <label for="remember"> Remember me</label>
          </div>
          <p v-if="error" class="text-red-500">{{ error }}</p>
        </div>
      </template>
    </Card>

    <!-- Buttons -->
    <div class="button-group mt-4 flex justify-center">
      <Button label="Create User" icon="pi pi-user-plus" @click="createAccount"
        v-if="!firebaseUser && showCreateAccount" />
      <Button label="Sign In" icon="pi pi-sign-in" @click="signIn" v-if="!firebaseUser && !showCreateAccount" />
      <Button label="Sign Out" icon="pi pi-sign-out" @click="signOut" v-if="firebaseUser" />
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

        toast.add({ severity: 'success', summary: 'Success', detail: 'Yay! Signed in successfully' });
      } else {
        error.value = credentials ? credentials.message : 'Unknown error';

        toast.add({ severity: 'error', summary: 'Error', detail: error.value });
      }
    } catch (err) {
      error.value = 'Error signing in: ' + err.message;

      toast.add({ severity: 'error', summary: 'Error', detail: err.message });
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
      toast.add({ severity: 'info', summary: 'Signed out', detail: 'You have signed out successfully' });
    } catch (err) {
      error.value = err.message;
      toast.add({ severity: 'error', summary: 'Error', detail: err.message });
    }
  };

  const createAccount = async () => {
    try {
      const credentials = await createUser(email.value, password.value);
      if (credentials && credentials.user) {
        firebaseUser.value = credentials.user;
        error.value = null;
        toast.add({ severity: 'success', summary: 'Success', detail: 'User created successfully' });
      } else {
        error.value = credentials ? credentials.message : 'Unknown error';
        toast.add({ severity: 'error', summary: 'Error', detail: error.value });
      }
    } catch (err) {
      error.value = 'Error creating user: ' + err.message;
      toast.add({ severity: 'error', summary: 'Error', detail: err.message });
    }

    // reset form
    name.value = '';
    email.value = '';
    password.value = '';
    remember.value = false;
  };
</script>

<style scoped>
  .field {
    margin-bottom: 1rem;
  }

  .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.card {
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

  .button-group {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .clickable {
    cursor: pointer;
  }

  .clickable:hover {
    color: rgb(107, 71, 71);
    text-decoration: underline;
  }
</style>
