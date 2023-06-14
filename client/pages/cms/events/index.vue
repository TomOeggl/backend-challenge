<template>
  <div>
    <h1>Events</h1>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Time</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="event in events" :key="event.id">
          <td>{{ event.name }}</td>
          <td>{{ convertedStartDate(event.startDateAndTime) }}</td>
          <td>{{ convertedStartTime(event.startDateAndTime) }}</td>
          <td>
            <button @click="viewEvent(event.id)">View</button>
            <button @click="editEvent(event.id)">Edit</button>
            <button @click="deleteEvent(event.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button class="btn__create-event" @click="goToCreateEvent">+</button>
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
      this.$router.push(`/events/${id}`);
    },
    editEvent(id) {
      this.$router.push(`/cms/events/${id}`);
    },
    async deleteEvent(id) {
      if (window.confirm('Are you sure you want to delete this event?')) {
        try {
          await this.$axios.$delete(`http://localhost:9000/api/events/${id}`);
          this.events = this.events.filter(event => event.id !== id);
        } catch (error) {
          console.error(error);
        }
      }
    },
    goToCreateEvent() {
    this.$router.push('/cms/events/create');
  },
    convertedStartDate(dateAndTime) {
      const startDateOnly = dateAndTime.split('T')[0]
      const yearMonthDay = startDateOnly.split('-');
      return `${yearMonthDay[2]}.${yearMonthDay[1]}.${yearMonthDay[0]}`
    },
    convertedStartTime(dateAndTime) {
      const startTimeOnly = dateAndTime.split('T')[1]
      return startTimeOnly.slice(0, 5);
    }
  },
};
</script>
  
<style scoped>
td {
  padding: 8px;
}

.btn__create-event {
  font-size: 36px;
  font-weight: bold;
  color: white;
  background-color: green;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  cursor: pointer;
}

.btn__create-event:hover {
  background-color: rgb(17, 148, 17);
}
</style>
  