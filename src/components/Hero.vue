<template>
  <div>
    <!-- dekstop -->
    <div class="hero container mt-4 d-md-block d-none">
      <div class="row">
        <div class="col">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h1 class="fw-bold">Makanan Khas Indonesia</h1>
              <p class="lead">Temukan makanan khas Indonesia yang terbaik</p>
              <router-link to="/" class="btn btn-success">
                Pesan Sekarang
                <b-icon-arrow-right-circle></b-icon-arrow-right-circle>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col">
          <img src="../assets/images/hero.png" alt="Image Foods" width="100%" />
        </div>
      </div>
    </div>
    <!-- Mobile -->
    <div class="hero container mt-4 d-sm-block d-md-none">
      <div class="row">
        <div class="col-sm-12 col-md-6 mb-2">
          <img src="../assets/images/hero.png" alt="Image Foods" width="100%" />
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="d-flex h-100 flex-column">
            <div class="justify-content-center align-self-center">
              <h1 class="fw-bold">Makanan Khas Indonesia</h1>
              <p class="lead">Temukan makanan khas Indonesia yang terbaik</p>
              <router-link to="/" class="btn btn-success">
                Pesan Sekarang
                <b-icon-arrow-right-circle></b-icon-arrow-right-circle>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-4">
      <div class="row mb-3">
        <div class="col">
          <h2 class="fw-bold">Best Categories Foods</h2>
        </div>
      </div>
      <div v-if="loading" class="loading text-center align-items-center justify-content-center">
        <b-spinner></b-spinner>
      </div>
      <div v-if="error" class="error">{{ error }}</div>
      <div class="row" v-if="fetchdata">
        <div
          v-for="category in categories"
          :key="category.idCategory"
          class="col-md-4 mb-3"
        >
          <div class="card">
            <img
              :src="category.strCategoryThumb"
              class="card-img-top"
              alt="Category Image"
              width="100%"
            />
            <div class="card-body">
              <h5 class="card-title">{{ category.strCategory }}</h5>
              <p class="card-text">
                {{ category.strCategoryDescription.substring(0, 100) }}...
              </p>
              <router-link
                :to="{
                  name: 'DetailCategory',
                  params: { strCategory: category.strCategory },
                }"
                class="btn btn-success"
              >
                See Foods
                <b-icon-arrow-right-circle></b-icon-arrow-right-circle>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      categories: [],
      loading: true,
      error: null,
    };
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Hero",

  mounted() {
    this.fetchData();
  },

  methods: {

    async fetchData() {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        this.categories = response.data.categories;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },

    // eslint-disable-next-line vue/no-unused-components
    viewCategory(strCategory) {
      this.$router.push({ name: "category", params: { strCategory } });
    },
  },

  computed: {
    fetchdata() {
      return this.categories;
    },
  },
};
</script>

<style></style>
