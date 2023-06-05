<template>
  <div class="wrapper">
    <Banner class="page-header" />
    <PublicNav />
    <nuxt class="page-body" />
    <Footer class="page-footer" />
  </div>
</template>

<script>
import PublicNav from '../components/PublicNav.vue';
import Footer from '../components/Footer.vue';
import Banner from '../components/Banner.vue';

export default {
  components: {
    PublicNav,
    Banner,
    Footer,
  }
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  text-decoration: none;
}

html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
}

.wrapper {
  box-sizing: border-box;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.page-body {
  flex-grow: 1;
  margin: 0 auto;
  min-height: 90vh;
  width: 80%;

}

.page-header,
.page-footer {
  flex-grow: 0;
  flex-shrink: 0;
}</style>