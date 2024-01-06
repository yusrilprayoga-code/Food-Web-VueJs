<template>
  <div class="detail-foods-category container-fluid">
    <div class="container mt-4">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item mt-3 mb-3">
            <router-link to="/">Home</router-link>
          </li>
          <li class="breadcrumb-item mt-3 mb-3" aria-current="page">
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
          <li class="breadcrumb-item active mt-3 mb-3" aria-current="page">
            {{ category.strMeal }}
          </li>
          <div class="row flex-md-row">
            <div class="col-md-4 mb-3 mb-md-0">
              <img
                :src="category.strMealThumb"
                class="img-fluid"
                alt="Category Image"
              />
              <h5 class="mt-3">Ingredients</h5>
              <ul>
                <li v-if="category.strIngredient1">
                  {{ category.strIngredient1 }}
                </li>
                <li v-if="category.strIngredient2">
                  {{ category.strIngredient2 }}
                </li>
                <li v-if="category.strIngredient3">
                  {{ category.strIngredient3 }}
                </li>
                <li v-if="category.strIngredient4">
                  {{ category.strIngredient4 }}
                </li>
                <li v-if="category.strIngredient5">
                  {{ category.strIngredient5 }}
                </li>
                <li v-if="category.strIngredient6">
                  {{ category.strIngredient6 }}
                </li>
                <li v-if="category.strIngredient7">
                  {{ category.strIngredient7 }}
                </li>
                <li v-if="category.strIngredient8">
                  {{ category.strIngredient8 }}
                </li>
                <li v-if="category.strIngredient9">
                  {{ category.strIngredient9 }}
                </li>
              </ul>
              <button class="btn btn-success mt-3" @click="addtocart">
                Add to Cart
              </button>
            </div>
            <div class="col-md-8">
              <h2 class="fw-bold">{{ category.strMeal }}</h2>
              <p class="text-muted">Category: {{ category.strCategory }}</p>
              <p class="text-muted">Area: {{ category.strArea }}</p>
              <p class="text-muted">Tags: {{ category.strTags }}</p>
              <p class="text-muted">ID: {{ category.idMeal }}</p>
              <p class="text-muted instructions">
                Instructions: {{ category.strInstructions }}
              </p>
              <iframe
                class="youtube"
                width="100%"
                height="315"
                :src="`https://www.youtube.com/embed/${category.strYoutube.slice(
                  -11
                )}`"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>

              <!-- section comments -->
              <div class="comment-section">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Add Comment"
                  v-model="newComment"
                />
                <button class="btn btn-success mt-3" @click="addComment">
                  Add Comment
                </button>
                <button class="btn btn-danger mt-3" @click="deletAll">
                  Delete All Comment
                </button>
              </div>

              <!-- Display Comments -->
              <div class="addcomments mt-4">
                <div
                  class="row"
                  v-for="(comment, index) in comments"
                  :key="index"
                >
                  <div class="col-md-12">
                    <div class="card mt-4">
                      <div class="card-body">
                        <p class="card-text">{{ comment }}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <button
                      type="button"
                      class="btn btn-primary btn-block"
                      v-if="comments.length > 0"
                      @click="editComment"
                    >
                      Edit
                    </button>
                  </div>
                  <div class="col-md-2">
                    <button
                      type="button"
                      class="btn btn-danger btn-block"
                      @click="deleteComment(index)"
                      v-if="comments.length > 0"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ol>
      </nav>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DetailFoodsCategory",

  data() {
    return {
      category: {},
      newComment: "",
      comments: this.loadfromlocalstorage() || [],
      keranjang: [],
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

    addtocart() {
      if (localStorage.getItem("keranjang")) {
        this.keranjang = JSON.parse(localStorage.getItem("keranjang"));
        this.keranjang.push(this.category);
        localStorage.setItem("keranjang", JSON.stringify(this.keranjang));
        this.$bvToast.toast("Berhasil Memasukkan ke keranjang", {
                title: "Keranjang",
                variant: "success",
                solid: true,
            });
        this.$router.go();
      } else {
        this.keranjang = [];
      }
    },

    deletAll() {
      this.comments = [];
      this.savetolocalstorage();
      this.$bvToast.toast("Berhasil Dihapus Semua", {
        title: "Delete Comment",
        variant: "success",
        solid: true,
      });      
    },

    addComment() {
      this.comments.push(this.newComment);
      this.newComment = "";
      this.savetolocalstorage();
    },

    editComment() {
      this.$bvToast.toast("Masih Dalam Tahap Pengembangan", {
        title: "Edit Comment",
        variant: "warning",
        solid: true,
      });
    },

    deleteComment(index) {
      this.comments.splice(index, 1);
      this.savetolocalstorage();
      this.$bvToast.toast("Berhasil Dihapus", {
        title: "Delete Comment",
        variant: "success",
        solid: true,
      });
    },

    savetolocalstorage() {
      localStorage.setItem("comments", JSON.stringify(this.comments));
    },

    loadfromlocalstorage() {
      return JSON.parse(localStorage.getItem("comments"));
    },
  },
};
</script>

<style scoped>
.instructions {
  white-space: pre-line;
}

.btn {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.addcomments {
  margin-top: 20px;
}

.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
}

.card-body {
  padding: 15px;
}

.btn-block {
  width: 100%;
  margin-top: 5px;
}

@media (max-width: 767.98px) {
  .flex-md-row {
    flex-direction: column;
  }

  .comment-section {
    order: 3;
    margin-top: 20px;
  }
  .img-fluid {
    width: 100%;
  }

  .instructions {
    white-space: pre-wrap;
    width: 100%;
  }

  .youtube {
    width: 100%;
  }
}

@media (max-width: 575.98px) {
  .btn {
    width: 100%;
  }
}
</style>
