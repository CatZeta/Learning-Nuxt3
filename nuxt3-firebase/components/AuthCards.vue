<!-- 
 https://tailwindcss.com/docs/hover-focus-and-other-states#hover-focus-and-active 
 https://tailwindcss.com/docs/flex
 https://tailwindcss.com/docs/responsive-design
 https://tailwindcss.com/docs/plugins (Form)
 -->
<template>
  <div class="flex flex-col items-center justify-center min-h-screen">

    <!-- Card create account -->
    <Card v-if="!firebaseUser" class="card-base border border-slate-500 card-dark mt-4">

      <!-- Header -->
      <template #title>
        <h1>{{ showCreateAccount ? 'Create an Account' : 'Welcome back!' }}</h1>
      </template>

      <template #subtitle>
        <p class="text-blue-500 cursor-pointer dark:text-blue-300 dark:hover:text-blue-200"
          @click="showCreateAccount = !showCreateAccount">
          {{ showCreateAccount ? "Already have an account? Sign in." : "Don't have an account? Sign up." }}
        </p>
      </template>

      <!-- Form -->
      <template #content>
        <div class="p-fluid">
          <div class="field" v-if="showCreateAccount">
            <label for="name" class="form-required">Name</label>
            <InputText v-model="displayName" id="name" placeholder="Enter your name"
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
            <Checkbox v-model="remember" id="remember" class="p-checkbox" />
            <label for="remember" class="ml-2">Remember me</label>
          </div>
        </div>
      </template>

      <!--button-->
      <template #footer>
        <Button label="" icon="{{ showCreateAccount ? 'pi pi-user-plus' : 'pi pi-sign-in' }}"
          @click="showCreateAccount ? createAccount() : signIn()"
          class="button-base button-primary button-primary-dark w-full">
          {{ showCreateAccount ? 'Create Account' : 'Sign In' }}
        </Button>
      </template>
    </Card>

    <!-- Toast (exibe mensagens de sucesso e erro) -->
    <Toast />
  </div>
</template>

<script setup>
  import { useToast } from "primevue/usetoast";
  // Importe useFirebaseUser e outras funções necessárias

  const toast = useToast();
  const firebaseUser = useFirebaseUser();
  const error = ref(null);

  const displayName = ref('');
  const email = ref('');
  const password = ref('');
  const remember = ref(false);
  const showCreateAccount = ref(false);

  // Função auxiliar para reset dos inputs
  const resetForm = () => {
    displayName.value = '';
    email.value = '';
    password.value = '';
    remember.value = false;
  };

  // Função para adicionar uma mensagem de toast
  const showToast = (severity, summary, detail) => {
    toast.add({ severity, summary, detail, life: 3000 });
  };

  const signIn = async () => {
    try {
      const credentials = await signInUser(email.value, password.value);
      if (credentials && credentials.user) {
        firebaseUser.value = credentials.user;
        error.value = null;
        showToast('success', 'Success', 'Yay! Signed in successfully');
      } else {
        error.value = credentials ? credentials.message : 'Unknown error';
        showToast('error', 'Error', error.value);
      }
    } catch (err) {
      error.value = 'Error signing in: ' + err.message;
      showToast('error', 'Error', error.value);
    }

    resetForm();
  };

  const createAccount = async () => {
    try {
      const credentials = await createUser(email.value, password.value, displayName.value);
      if (credentials && credentials.user) {
        firebaseUser.value = {
          ...credentials.user,
          displayName: displayName.value,
        };
        error.value = null;
        showToast('success', 'Success', 'User created successfully');
      } else {
        error.value = credentials ? credentials.message : 'Unknown error';
        showToast('error', 'Error', error.value);
      }
    } catch (err) {
      error.value = 'Error creating user: ' + err.message;
      showToast('error', 'Error', error.value);
    }

    resetForm();
  };
</script>
