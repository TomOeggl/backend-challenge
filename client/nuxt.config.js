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
   
    modules: [
      '@nuxtjs/axios',
      '@nuxtjs/auth',
    ],
    
    axios: {
      baseURL: 'http://localhost:9000',
    },
    
    auth: {
      strategies: {
        local: {
          endpoints: {
            login: { url: '/api/users/login', method: 'post', propertyName: 'token' },
            user: { url: '/api/users/login', method: 'post', propertyName: 'user' },
            logout: { url: '/api/users/logout', method: 'post' },
          },
          tokenRequired: true,
          tokenType: 'bearer'
        }
      },
      redirect: {
        logout: '/cms/login',
      }
    },
    
    build: {
     
      extend(config, ctx) {
      }
    }
  }
  