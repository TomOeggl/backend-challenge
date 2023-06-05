<template>
    <div>
      <h1>Dashboard</h1>
  
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="event in events" :key="event.id">
            <td>{{ event.name }}</td>
            <td>{{ event.description }}</td>
            <td>{{ event.startDateAndTime }}</td>
            <td>{{ event.endDateAndTime }}</td>
            <td>
              <button @click="viewEvent(event.id)">View</button>
              <button @click="editEvent(event.id)">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    layout: 'dashboardLayout',
    data() {
      return {
        events: [],
      };
    },
    async created() {
      try {
        const response = await axios.get('http://localhost:9000/api/events');
        this.events = response.data.data;
      } catch (error) {
        console.error(error);
      }
    },
    methods: {
      viewEvent(id) {
        this.$router.push(`/dashboard/events/${id}`);
      },
      editEvent(id) {
        this.$router.push(`/dashboard/events/${id}/edit`);
      },
    },
  };
  </script>
  
  <style scoped>

  </style>
  