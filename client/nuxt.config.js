module.exports = {
    ssr: true,
    telemetry: false,
    srcDir: "../client",
   
   
    head: {
      title: 'My Nuxt App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'My awesome Nuxt.js app' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    
    loading: { color: '#fff' },
    
    css: [
    ],
    
    plugins: [
    ],
    
    modules: [
    ],
    
    build: {
     
      extend(config, ctx) {
      }
    }
  }
  