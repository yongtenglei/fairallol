<template>
  <div class="container-fluid">
    <!-- header -->
    <Header></Header>

    <!-- main -->
    <router-view />

    <!-- footer -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './views/Header.vue'
import Footer from './views/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<style lang="scss">
@import './assets/fonts/fonts.css';

#app {
  font-family: 'Merriweather', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  padding: 0;
  margin: 0;
}
</style>
