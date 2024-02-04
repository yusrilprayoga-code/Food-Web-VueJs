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
    <!-- Banner -->
    <div class="container mt-5 mb-5">
      <div class="OurClient">
        <h2 class="fw-bold text-center">Our Clients</h2>
        <small class="text-center mb-5"
          >We are trusted by more than 1000+ clients</small
        >
        <div class="row align-items-center justify-content-center">
          <div class="col-md-1">
            <img src="../assets/images/Logo.png" alt="Client 1" width="100%" />
          </div>
          <div class="col-md-1">
            <img src="../assets/images/logo1.png" alt="Client 2" width="100%" />
          </div>
          <div class="col-md-1">
            <img src="../assets/images/logo2.png" alt="Client 3" width="100%" />
          </div>
          <div class="col-md-1">
            <img src="../assets/images/logo3.png" alt="Client 4" width="100%" />
          </div>
          <div class="col-md-1">
            <img src="../assets/images/logo4.png" alt="Client 4" width="100%" />
          </div>
          <div class="col-md-1">
            <img src="../assets/images/logo5.png" alt="Client 4" width="100%" />
          </div>
          <div class="col-md-1">
            <img src="../assets/images/logo7.png" alt="Client 4" width="100%" />
          </div>
        </div>
      </div>
    </div>

    <!-- Manage Community -->
    <div class="container mt-5 mb-5">
      <h2 class="fw-bold text-center">
        Manage your entire community <br />
        in a single system
      </h2>
      <p class="text-center mb-5">Who is FoodWebs for?</p>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card community">
            <img
              src="../assets/images/hero.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h3 class="card-title">
                Membership<br />
                Organisations
              </h3>
              <p class="card-text text-center">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card community">
            <img
              src="../assets/images/hero.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h3 class="card-title">
                National<br />
                Assosiations
              </h3>
              <p class="card-text text-center">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card community">
            <img
              src="../assets/images/hero.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h3 class="card-title">
                Clubs and <br />
                Groups
              </h3>
              <p class="card-text text-center">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-5">
      <h2 class="fw-bold text-center">Learn More</h2>
      <p class="text-center mb-5">Learn About FoodWebs</p>
      <div class="row">
        <div class="col-md-6">
          <img src="../assets/images/hero.png" alt="Image Foods" width="100%" />
        </div>
        <div class="col-md-6">
          <h5 class="fw-bold">Membership Management</h5>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
          <h5 class="fw-bold">Event Management</h5>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
          <h5 class="fw-bold">Website Integration</h5>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
    </div>

    <!-- Best Foods -->
    <div class="container mt-5">
      <div class="row mb-3">
        <div class="col">
          <h2 class="fw-bold">Best Categories Foods</h2>
        </div>
        <div class="col">
          <router-link to="/categories" class="allcategories">
            See All Categories
            <b-icon-arrow-right-circle></b-icon-arrow-right-circle>
          </router-link>
        </div>
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
          v-for="category in categories < 3
            ? categories
            : categories.slice(0, 3)"
          :key="category.idCategory"
          class="col-md-4 mb-3"
        >
          <div class="card shadow">
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

    <!-- Our Partner -->
    <div class="container">
      <div class="row ourpartner">
        <div class="col">
          <h2 class="fw-bold">Our Partner</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <img src="../assets/images/hero.png" alt="Image Foods" width="100%" />
          <h5 class="fw-bold text-center">Partner 1</h5>
          <p class="text-center">Lorem ipsum dolor sit amet.</p>
        </div>
        <div class="col-md-3">
          <img src="../assets/images/hero.png" alt="Image Foods" width="100%" />
          <h5 class="fw-bold text-center">Partner 2</h5>
          <p class="text-center">Lorem ipsum dolor sit amet.</p>
        </div>
        <div class="col-md-3">
          <img src="../assets/images/hero.png" alt="Image Foods" width="100%" />
          <h5 class="fw-bold text-center">Partner 3</h5>
          <p class="text-center">Lorem ipsum dolor sit amet.</p>
        </div>
        <div class="col-md-3">
          <img src="../assets/images/hero.png" alt="Image Foods" width="100%" />
          <h5 class="fw-bold text-center">Partner 4</h5>
          <p class="text-center">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>

    <!-- Testimonial -->
    <div class="container mt-5">
      <div class="row">
        <div class="col">
          <h2 class="fw-bold text-center">Testimonial</h2>
          <p class="text-center mb-5">What Our Clients Say</p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="card mb-3" style="max-width: 540px">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="../assets/images/hero.png"
                  class="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Yusril Prayoga</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary"
                      >Last updated 3 mins ago</small
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-3" style="max-width: 540px">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="../assets/images/hero.png"
                  class="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">John Due</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary"
                      >Last updated 3 mins ago</small
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Us -->
    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col">
          <h2 class="fw-bold text-center">Contact Us</h2>
          <p class="text-center mb-5">Get In Touch With Us</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <form @submit.prevent="email()">
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                aria-describedby="name"
                v-model="name"
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                aria-describedby="email"
                v-model="emailv"
              />
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea
                class="form-control"
                id="message"
                rows="3"
                v-model="message"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-success">Send Message</button>
          </form>
        </div>
        <div class="col-md-6">
          <img src="../assets/images/hero.png" alt="Image Foods" width="100%" />
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

    email() {
      const formData = new FormData();
      formData.append("service_id", "service_h9hf4co");
      formData.append("template_id", "template_kv6gx9t");
      formData.append("user_id", "FLVTZfnG-Bx5Y3q2X");

      formData.append("name", this.name);
      formData.append("emailv", this.emailv);
      formData.append("message", this.message);

      axios
        .post("https://api.emailjs.com/api/v1.0/email/send-form", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);
          // Message
          alert("Email Sent");
        })
        .catch((error) => {
          console.error(error);
          // Message
          alert("Email Failed");
        });
    },
  },

  computed: {
    fetchdata() {
      return this.categories;
    },
  },
};
</script>

<style>
.community {
  border: none;
  border-radius: 20px;
}

.allcategories {
  height: auto;
  float: right;
  text-decoration: none;
}

.OurClient {
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
  width: 100%;
}

.OurClient .row {
  overflow: hidden;
  white-space: nowrap;
  padding: 20px 0;
  margin: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
}

.OurClient .row img {
  margin: 0 20px;
  object-fit: cover;
  object-position: center;
}

.ourpartner {
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
  width: 100%;
}

.ourpartner .row {
  overflow: hidden;
  white-space: nowrap;
  padding: 20px 0;
  margin: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
}

.ourpartner .row img {
  margin: 0 20px;
  object-fit: cover;
  object-position: center;
}
</style>
