<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="member in teamMembers" :key="member.id">
            <td>{{ member.id }}</td>
            <td>{{ member.name }}</td>
            <td>
              <button @click="inspectMember(member.id)">Inspect</button>
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
        teamMembers: [],
      };
    },
    async created() {
      try {
        const response = await axios.get('http://localhost:9000/api/members');
        this.teamMembers = response.data.data;
        console.log(this.teamMembers);
      } catch (error) {
        console.error('Failed to fetch team members:', error);
      }
    },
    methods: {
      inspectMember(id) {
        this.$router.push(`/cms/team/${id}`);
      },
    },
  };
  </script>
  