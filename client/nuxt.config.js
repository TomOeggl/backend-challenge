module.exports = {
    ssr: true,
    telemetry: false,
    srcDir: "../client",
    components: true,
   
   
    head: {
      title: 'soundlabs vienna',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'soundlabs vienna' }
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
  