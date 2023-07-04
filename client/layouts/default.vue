<template>
  <CThemeProvider>
    <div class="wrapper">
      <Banner class="page-header" />
      <PublicNav />
      <nuxt class="content" />
      <Footer class="page-footer" />
    </div>
  </CThemeProvider>
</template>

<script>
import PublicNav from '../components/PublicNav.vue';
import Footer from '../components/Footer.vue';
import Banner from '../components/Banner.vue';
import { CThemeProvider, CReset, CButton } from '@chakra-ui/vue'

export default {
  name:'DefaultLayout',
  components: {
    PublicNav,
    Banner,
    Footer,
    CThemeProvider,
    CReset,
    CButton
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
  font-family: Arial, Helvetica, sans-serif;
}

html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
}

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  margin: 0 auto;
  width: 80%;

}
</style>