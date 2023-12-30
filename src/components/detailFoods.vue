<template>
  <div class="detail-foods-category">
    <Navbar />
    <div class="container mt-4">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item mb-5 mt-2">
            <router-link to="/">Home</router-link>
          </li>
          <li class="breadcrumb-item active mb-5 mt-2" aria-current="page">
            <router-link
              :to="{
                name: 'DetailCategory',
                params: { strCategory: category.strCategory },
              }"
              class="text-decoration-none"
            >
              {{ category.strCategory }}
            </router-link>
          </li>
          <li class="breadcrumb-item active mb-5 mt-2" aria-current="page">
            {{ category.strMeal }}
          </li>
          <div class="row">
            <div class="col-md-4">
              <img
                :src="category.strMealThumb"
                class="img-fluid"
                alt="Category Image"
              />
            </div>
            <div class="col-md-8">
              <h2 class="fw-bold">{{ category.strMeal }}</h2>
              <p class="text-muted">Category: {{ category.strCategory }}</p>
              <p class="text-muted">Area: {{ category.strArea }}</p>
              <p class="text-muted">Tags: {{ category.strTags }}</p>
              <p class="text-muted">
                Instructions: {{ category.strInstructions }}
              </p>
              <p class="text-muted">Youtube: {{ category.strYoutube }}</p>
              <p class="text-muted">Source: {{ category.strSource }}</p>
            </div>
          </div>
        </ol>
      </nav>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "./Navbar.vue";

export default {
  components: { Navbar },
  name: "DetailFoodsCategory",

  data() {
    return {
      category: {},
    };
  },

  async mounted() {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.$route.params.idMeal}`
      );
      this.category = response.data.meals[0];
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
};
</script>

<style></style>
