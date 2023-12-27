<template>
  <div>
    <navbar />
    <div class="container">
      <h2 class="mt-3">Detail Category</h2>
      <div class="row">
        <div class="col-md-4" v-for="item in category" :key="item.idMeal">
          <div class="card mb-3">
            <router-link :to="{ name: 'DetailFood', params: { id: item.idMeal } }">
              <img :src="item.strMealThumb" class="card-img-top" alt="...">
            </router-link>
            <div class="card-body">
              <h5 class="card-title">{{ item.strMeal }}</h5>
            </div>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
              See Detail
            </button>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
              aria-hidden="true" >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h3 class="modal-title fs-5" id="exampleModalLabel">
                      {{ item.strMeal }}
                    </h3>
                    <button type="button" class="btn btn-close" data-bs-dismiss="modal" aria-label="Close">
                      <b-icon-x-circle></b-icon-x-circle>
                    </button>
                  </div>
                  <div class="modal-body">
                    <img :src="item.strMealThumb" class="card-img-top" alt="...">
                    <p class="mt-3">{{ item.strInstructions }}</p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <div id="app">
                      <button class="btn btn-success" @click="count++">
                        Add to Cart
                        <b-icon-plus-circle> </b-icon-plus-circle>
                        <span>
                          {{ count }}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from './Navbar.vue';
import { ref } from 'vue';
export default {
  components: { Navbar },
  name: 'DetailCategory',

  data() {
    return {
      category: [],
    }
  },

  mounted() {
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then((response) => {
        this.category = response.data.meals;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  setup() {
    const count = ref(0)
    return { count }
  }
}
</script>

<style></style>