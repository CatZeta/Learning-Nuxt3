// https://nuxt.com/docs/api/configuration/nuxt-config
// Define the Nuxt 3 configuration
export default defineNuxtConfig({
  // Enable the Tailwind CSS module
  modules: ['@nuxtjs/tailwindcss'],
  // Enable the devtools for debugging
  devtools: { enabled: true },
  // Configure the default app settings
  app: {
    // Set the page title
    head: {
      title: 'Nuxt 3 Basics',
      // Set the meta tags
      meta: [
        { name: 'description', content: 'Nuxt 3 Basics' }
      ],
      // Set the link tags
      link: [
        { rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css2?family=Material+Icons' }
      ]
    }
  },
  
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY
  }
})

