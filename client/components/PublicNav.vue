<template>
  <nav>
    <ul class="nav-container">
      <li class="nav-link"><nuxt-link to="/">Home</nuxt-link></li>
      <li class="nav-link"><nuxt-link to="/team">Team</nuxt-link></li>
      <li class="nav-link"><nuxt-link to="/events">Events</nuxt-link></li>
      <li class="nav-link"><nuxt-link to="/about">About</nuxt-link></li>
      <li class="nav-link" v-if="isLoggedIn"><nuxt-link to="/cms/">CMS</nuxt-link></li>
      <li class="nav-link" v-if="isLoggedIn"> <button class="btn__logout" @click="logout">Logout</button> </li>
      <li class="nav-link" v-else><nuxt-link to="/cms/login">Login</nuxt-link></li>
    </ul>
  </nav>
</template>

<script>

export default {
  computed: {
    isLoggedIn() {
      return this.$auth.loggedIn;
    },
  },
  methods: {
    async logout() {
            try {
                await this.$auth.logout();
                await this.$router.push('/');
            } catch (error) {
                console.log("Failed to log out:", error.message);
            }
        }
  }
};
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

.btn__logout{
  border: none;
  background-color: white;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
}
</style>
