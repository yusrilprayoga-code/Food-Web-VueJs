<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <HeroSection />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import HeroSection from '@/components/Hero.vue'; 

export default {
  name: 'HomeView',
  components: {
    Navbar,
    HeroSection,
  }
}
</script>
