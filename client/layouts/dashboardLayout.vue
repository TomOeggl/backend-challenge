<template>
  <div>
    <nav>
      <ul>
        <li><nuxt-link to="/">Homepage</nuxt-link></li>
        <li><nuxt-link to="/cms/profile">Profile</nuxt-link></li>
        <li><nuxt-link to="/cms/events">Events</nuxt-link></li>
        <li><nuxt-link to="/cms/artists">Artists</nuxt-link></li>
        <li><nuxt-link to="/cms/team">Team</nuxt-link></li>
        
      </ul>
      <LogOutButton />
    </nav>

    <main>
      <nuxt />
    </main>
  </div>
</template>
  
<script>
import LogOutButton from '../components/LogOutButton.vue';

export default {
  components: {
    LogOutButton
  },
};
</script>
  
<style scoped>
nav {
  width: 200px;
  height: 100vh;
  position: fixed;
  background-color: #f5f5f5;
  padding: 8px;
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

.btn__logout {
  position: fixed;
  bottom: 8px;
}
</style>
  