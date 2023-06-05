<template>
    <div>
      <section class="banner">
        <h1>Our Events</h1>
        <p>Check out our upcoming events!</p>
      </section>

      <main>
        <div class="event-container">

          <EventCard v-for="event in events" :key="event.id" :event="event" :name="event.name" :description="event.description" :startDateAndTime="event.startDateAndTime" image="https://images.unsplash.com/photo-1555086156-e6c7353d283f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"/>        
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import EventCard from '../components/EventCard.vue';
  
  export default {
    components: {
      EventCard,
    },
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
    .event-container {
      display: flex;
      justify-content: space-between;
    }
  </style>
  