// nuxt.config.ts
export default defineNuxtConfig({
  build: {
    transpile: ['primevue']
  },
  css: [
    '@/assets/css/tailwind.css',
    'primevue/resources/themes/saga-blue/theme.css',
    'primevue/resources/primevue.min.css',
    'primeicons/primeicons.css'
  ],
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt',
  ],
  plugins: [
    '~/plugins/primevue.js' // PrimeVue plugin
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      firebase: {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID,
      },
    },
  }
});