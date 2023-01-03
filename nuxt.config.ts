// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({  
    target: 'static',
    vite: {
        css: {
          preprocessorOptions: {
            scss: {
              additionalData: '@use "@/assets/scss/global.scss" as *;'
            }
          }
        }
    },
    typescript: {    
        shim: false  
    },
    vue: {
        config: {
          productionTip: true,
          devtools: false
        }
    },
})
