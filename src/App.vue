<template>
  <div id="app">
    <navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar, Footer },
  name: 'App'
}
</script>

