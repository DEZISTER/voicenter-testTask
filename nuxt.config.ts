// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    "@/assets/scss/global.scss"
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/scss/_fonts.scss";
            @import "@/assets/scss/utils/_variables.scss"; 
            @import "@/assets/scss/utils/_mixins.scss";
          `,
        },
      },
    },
  },

  components: [
    { path: '@/components/UI' },
    '~/components'
  ],

  modules: [
    // ...
    '@pinia/nuxt',
    ],
})
