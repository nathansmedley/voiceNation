// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({  
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
        bridge: true,
        useApiClient: true,
        apiOptions: {},
      },
    ],
    '@nuxt/devtools',
    '@nuxt/image-edge'
  ],
  nitro: {
    prerender: {
      routes: [ 
        '/', 
        '/phone-answering-service/' 
      ]
    }
  },
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
      baseURL: 'https://res.cloudinary.com/moneypenny/image/upload/',
    }
  },
})
