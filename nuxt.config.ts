// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({  
    typescript: {    
        shim: false  
    },
    modules: [    
        "@nuxt/image-edge",
        ["@storyblok/nuxt",
            { accessToken: "<your-access-token>" }
        ]
    ]
})