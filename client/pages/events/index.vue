<template>
    <div>
      <section class="banner">
        <h1>Our Events</h1>
        <p>Check out our upcoming events!</p>
      </section>

      <main>
        <div class="event-container">

          <EventCard v-for="event in events" :key="event.id" :id="event.id" :name="event.name" :description="event.description" :startDateAndTime="event.startDateAndTime" :image="event.image"/>        
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import EventCard from '../../components/EventCard.vue';
  
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
      const response = await axios.get('http://localhost:9000/api/events/public');
      this.events = response.data.data;
      console.log(this.events);
    },
    
  }
  </script>
  
  <style scoped>
    .event-container {
      display: flex;
      justify-content: space-between;
    }
  </style>
  