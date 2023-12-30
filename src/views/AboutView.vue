<template>
    <div>
        <Navbar />
        <div class="container mt-5">
            <div class="row">
                <div class="col">
                    <h1>About Page</h1>
                </div>
                <div class="col">
                    <img src="../assets/images/hero.png" alt="Image Foods" width="100%" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: { Navbar },
  name : 'AboutView'
}
</script>

<style>

</style>
