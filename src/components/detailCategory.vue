<template>
  <div>
    <navbar />
    <div class="container">
      <h3 class="mt-3">Detail Category</h3>
      <div class="row">
        <div class="col-md-4">
          <div class="input-group mb-3">
            <input
              v-model="searchQuery"
              type="text"
              class="form-control"
              placeholder="Search Foods"
              aria-label="Search Foods"
              aria-describedby="button-addon2"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4" v-for="item in filteredCategory" :key="item.idMeal">
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
      searchQuery: "",
    };
  },

  async mounted() {
    await this.fetchData();
  },

  methods: {
    async fetchData() {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.$route.params.strCategory}`
        );
        this.category = response.data.meals;
      } catch (error) {
        console.log(error);
      }
    },

    async searchCategory() {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.searchQuery}`
        );
        this.category = response.data.meals;
      } catch (error) {
        console.log(error);
      }
    },
  },

  computed: {
    //filtered and not found
    filteredCategory() {
      return this.category.filter((item) => {
        return item.strMeal
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());
      });
    },
  },

  watch: {
    $route() {
      this.fetchData();
    },
  },

  setup() {
    const count = ref(0);
    return { count };
  },
};
</script>

<style></style>
