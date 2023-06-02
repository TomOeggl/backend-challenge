<template>
    <div>
      <nav>
        <ul>
            <li><nuxt-link to="/dashboard/profile">Profile</nuxt-link></li>
          <li><nuxt-link to="/dashboard/events">Events</nuxt-link></li>
          <li><nuxt-link to="/dashboard/artists">Artists</nuxt-link></li>
        </ul>
      </nav>
  
      <main>
        <nuxt />
      </main>
    </div>
  </template>
  
  <script>
  export default {

  };
  </script>
  
  <style scoped>
  
  nav {
    width: 200px;
    height: 100vh;
    position: fixed;
    background-color: #f5f5f5;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 1em;
  }
  
  main {
    margin-left: 200px;
    padding: 1em;
  }
  </style>
  