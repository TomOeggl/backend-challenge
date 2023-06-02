<template>
    <div>
      <section class="banner">
        <h1>Our Events</h1>
        <p>Check out our upcoming events!</p>
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
        <section v-for="event in events" :key="event.id">
          <h2>{{ event.name }}</h2>
          <p>{{ event.description }}</p>
        </section>
      </main>
  
      <!-- Footer -->
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
        events: [],
      };
    },
    async created() {
      const response = await axios.get('http://localhost:9000/api/events');
      console.log(response.data)
      this.events = response.data.data;
    },
  }
  </script>
  
  <style scoped>
  </style>
  