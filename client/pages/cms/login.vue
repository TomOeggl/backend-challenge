<template>
  <div>

    <main class="login-container">
      <p>Welcome back! Please login to continue.</p>
      <form class="login-form" @submit.prevent="login">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>

        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>

        <button type="submit">Login</button>
      </form>
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </main>

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
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        });
        this.$router.push('/cms/');
      } catch (error) {
        this.errorMessage = 'Invalid email or password. Please try again.';
      }
    },
  },
}
</script>
  
<style scoped>
.login-container {
  width: 300px;
  margin: 0 auto;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.login-form>* {
  margin: 4px 0;

}
</style>
  