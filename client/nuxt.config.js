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
            logout: { url: '/api/users/logout', method: 'post' },
            user: { url: '/api/users/me', method: 'get', propertyName: 'user' }
          },
          tokenRequired: true,
          tokenType: 'bearer'
        }
      },
      redirect: {
        logout: '/login',
      }
    },
    
    build: {
     
      extend(config, ctx) {
      }
    }
  }
  