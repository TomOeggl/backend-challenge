<template>
    <div>
      <section class="banner">
        <h1>Login</h1>
        <p>Welcome back! Please login to continue.</p>
      </section>
  
      <nav>
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/team">Team</nuxt-link></li>
          <li><nuxt-link to="/events">Events</nuxt-link></li>
          <li><nuxt-link to="/about">About</nuxt-link></li>
          <li><nuxt-link to="/login">Login</nuxt-link></li>
        </ul>
      </nav>
  

      <main>
        <form @submit.prevent="login">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
  
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required>
  
          <button type="submit">Login</button>
        </form>
        <p v-if="errorMessage">{{ errorMessage }}</p>
      </main>
  

      <footer>
        <p>© 2023 soundlabs vienna. All rights reserved.</p>
      </footer>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        errorMessage: '',
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('http://localhost:9000/api/users/login', {
            email: this.email,
            password: this.password,
          });
          localStorage.setItem('authToken', response.data.token);
          this.$router.push('/dashboard');
        } catch (error) {
          this.errorMessage = 'Invalid email or password. Please try again.';
        }
      },
    },
  }
  </script>
  
  <style scoped>
  
  </style>
  