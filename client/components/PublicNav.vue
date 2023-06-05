<template>
      <nav >
        <ul class="nav-container">
          <li class="nav-link"><nuxt-link to="/">Home</nuxt-link></li>
          <li class="nav-link"><nuxt-link to="/team">Team</nuxt-link></li>
          <li class="nav-link"><nuxt-link to="/events">Events</nuxt-link></li>
          <li class="nav-link"><nuxt-link to="/about">About</nuxt-link></li>
          <li class="nav-link"><nuxt-link to="cms/login">Login</nuxt-link></li>
        </ul>
      </nav>
  
</template>   
  
<script>
  export default {
  }
</script>
  
<style scoped>
  .nav-container {
    display: flex;
    justify-content: flex-end;
    text-decoration: none;
  }

  .nav-link,
  .nav-link > a {
    list-style: none;
    color: black;
    padding: 4px 4px;
  }
</style>
  