<template>
    <div>
      <Banner />
      <PublicNav />
      <nuxt />
      <Footer />
    </div>
  </template>

<script>
import PublicNav from '../components/PublicNav.vue';
import Footer from '../components/Footer.vue';
import Banner from '../components/Banner.vue';

export default {
  components: {
    PublicNav,
    Footer,
    Banner
  }
};
</script>

<style >

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  text-decoration: none;
}

body {
  margin: 0px;
  padding: 0px;
  background-color: #f5f5f5; 
}

</style>