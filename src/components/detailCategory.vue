<template>
  <div>
    <div class="container">
      <h3 class="mt-5 mb-3 text-center">Detail Category</h3>
      <div class="row" v-if="fetchData">
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
      <div v-if="loading" class="loading text-center align-items-center justify-content-center">
        <b-spinner></b-spinner>
      </div>
      <div v-if="error" class="error">{{ error }}</div>
      <div class="row">
        <div class="col-md-4 mb-3" v-for="item in filteredCategory" :key="item.idMeal">
          <div class="card cardetail mb-3">
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
import { ref } from "vue";

export default {
  name: "DetailCategory",

  data() {
    return {
      category: [],
      searchQuery: "",
      loading: true,
      error: null,
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
        this.loading = false;
      } catch (error) {
        console.log(error);
        this.error = error.message;
        this.loading = false;
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

<style>
.form-control {
  border-radius: 20px;
  margin: 0 auto;
  width: 100%;
}

.card {
  width: 100%;
  margin-bottom: 20px;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.cardetail:hover {
  border: none;
  box-shadow: 0 0 15px rgb(19, 235, 19);
  transition: 300ms;
  transform: translate(0, -10px);
}

.card-title {
  font-weight: bold;
  font-size: 20px;
  text-align: center;
}

.btn {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
</style>
