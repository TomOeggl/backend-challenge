<template>
    <div>
      <section class="banner">
        <h1>Our Events</h1>
        <p>Check out our upcoming events!</p>
      </section>

      <main>
        <section v-for="event in events" :key="event.id">
          <h2>{{ event.name }}</h2>
          <p>{{ event.description }}</p>
        </section>
      </main>
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
      this.events = response.data.data;
    },
  }
  </script>
  
  <style scoped>

  </style>
  