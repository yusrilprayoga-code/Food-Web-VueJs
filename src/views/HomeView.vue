<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Hero />
      <div class="row mt-4">
        <div class="col">
          <h2 class="fw-bold">Makanan Khas Indonesia</h2>
          <p class="lead">Temukan makanan khas Indonesia yang terbaik</p>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';

export default {
  name: 'HomeView',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Navbar,
    Hero,
  }
}
</script>
