<template>
    <div>
  
      <main>
        <h2>Our Team</h2>
        <div class="member__container">
          <TeamCard v-for="member in members" :key="member.id" :name="member.name" :description="member.description" :imageLink="member.imageLink"/>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import TeamCard from '../components/TeamCard.vue'

  export default {
    components: {
      TeamCard
    },
    data() {
      return {
        members: [],
      };
    },
    async created() {
      const response = await axios.get('http://localhost:9000/api/members');
      this.members = response.data.data;
      console.log(this.members);
    },

  }
  </script>
  
  <style scoped>

  .member__container{
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
  }

  </style>
  