<template>
  <div>
    <navbar />
    <div class="container">
      <h2 class="mt-3">Detail Category</h2>
      <div class="row">
        <div class="col-md-4" v-for="item in category" :key="item.idMeal">
          <div class="card mb-3">
            <img
              :src="item.strMealThumb"
              class="card-img-top"
              alt="Category Image"
            />
            <div class="card-body">
              <h5 class="card-title">{{ item.strMeal }}</h5>
            </div>
            <router-link
              :to="{ name: 'DetailFoods', params: { idMeal: item.idMeal } }"
              class="btn btn-success"
            >
              See Detail
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "./Navbar.vue";
import { ref } from "vue";
export default {
  components: { Navbar },
  name: "DetailCategory",

  data() {
    return {
      category: [],
    };
  },

  async mounted() {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.$route.params.strCategory}`
      );
      this.category = response.data.meals;
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    viewCategory(strCategory) {
      console.log(
        "Navigating to DetailFoodsCategory with category:",
        strCategory
      );
      this.$router.push({
        name: "DetailFoods",
        params: { idMeal: strCategory },
      });
    },
  },

  setup() {
    const count = ref(0);
    return { count };
  },
};
</script>

<style></style>
