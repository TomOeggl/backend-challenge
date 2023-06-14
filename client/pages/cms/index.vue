<template>
  <div>
    <h1>Welcome to the CMS</h1>

    <p>Here you can create new events and team members and administrate the page.</p>
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
  },
};
</script>
  
<style scoped>
td{
  padding: 8px;
}
</style>
  