// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({  
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
        apiOptions: {
          region: "us",
        },
      },
    ],
    '@nuxt/devtools',
    '@nuxt/image-edge',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/global.scss" as *;'
        }
      }
    }
  },
  image: {
    provider: 'cloudinary',
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/moneypenny/image/upload/voiceNation/',
    }
  },
})
