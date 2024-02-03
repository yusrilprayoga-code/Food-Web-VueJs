<template>
  <div class="container mt-5">
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
      <ol class="breadcrumb bg-white">
        <li class="breadcrumb-item">
            <router-link to="/" class="text-dark">Home</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
            {{ $route.name }}
        </li>
      </ol>
    </nav>
    <div class="mb-4 text-center">
      <h2 class="fw-bold">All Categories Foods</h2>
    </div>
    <div
      v-if="loading"
      class="loading text-center align-items-center justify-content-center"
    >
      <b-spinner></b-spinner>
    </div>
    <div v-if="error" class="error">{{ error }}</div>
    <div class="row" v-if="fetchdata">
      <div
        v-for="category in categories"
        :key="category.idCategory"
        class="col-md-4 mb-3"
      >
        <div class="card cardall">
          <img
            :src="category.strCategoryThumb"
            class="card-img-top cardimage"
            alt="Category Image"
            width="100%"
          />
          <div class="card-body">
            <h5 class="card-title">{{ category.strCategory }}</h5>
            <p class="card-text">
              {{ category.strCategoryDescription.substring(0, 50) }}...
            </p>
            <router-link
              :to="{
                name: 'DetailCategory',
                params: { strCategory: category.strCategory },
              }"
              class="btn btn-success seecategory"
            >
              See Foods
              <b-icon-arrow-right-circle></b-icon-arrow-right-circle>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Categories",
  data() {
    return {
      categories: [],
      loading: true,
      error: null,
    };
  },

  methods: {
    fetchCategories() {
      this.loading = true;
      this.error = null;
      axios
        .get("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((response) => {
          this.categories = response.data.categories;
        })
        .catch((error) => {
          this.error = error;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },

  mounted() {
    this.fetchCategories();
  },

  computed: {
    fetchdata() {
      return this.loading === false && this.error === null;
    },
  },
};
</script>

<style>
    .cardimage {
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
    }

    .seecategory {
        background-color: #4caf50;
        color: white;
        border: none;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 16px;
    }

    .cardall {
        border-radius: 50px;
    }

    .cardall:hover {
        box-shadow: 0 0 10px 0 rgb(4, 216, 4);
        transform: scale(1.05);
        border: none; 
        transition-duration: 300ms;
    }
</style>
