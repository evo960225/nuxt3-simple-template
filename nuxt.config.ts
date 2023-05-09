export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
  ],
  runtimeConfig: {
    public: {
    }
  },
  css: ['@/assets/styles/main.scss'],
})
