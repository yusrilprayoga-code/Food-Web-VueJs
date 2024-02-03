<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="footer">
    <div class="container">
      <div class="row gy-2 gx-3">
        <div class="col-md-4">
          <h5 class="fw-bold">About Us</h5>
          <p class="text-justify">
            Selamat datang di FoodWebs! Kami adalah tim pecinta makanan yang
            berkomitmen untuk menyajikan pengalaman kuliner yang tak terlupakan.
            Dengan lidah yang berpetualang dan hati yang penuh kasih.
          </p>
        </div>
        <div class="col-md-4">
          <h5 class="fw-bold">Alamat</h5>
          <p class="text-justify">
            Jl. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam
          </p>
        </div>
        <div class="col-md-4">
          <h5 class="fw-bold">Social Media</h5>
          <div class="row mt-3">
            <div class="col">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                class="text-decoration-none"
              >
                <b-icon-facebook></b-icon-facebook>
              </a>
            </div>
            <div class="col">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                class="text-decoration-none"
              >
                <b-icon-instagram></b-icon-instagram>
              </a>
            </div>
            <div class="col">
              <a
                href="https://www.twitter.com/"
                target="_blank"
                class="text-decoration-none"
              >
                <b-icon-twitter></b-icon-twitter>
              </a>
            </div>
          </div>
          <p class="mt-3 text-justify">
            Jangan lewatkan update terbaru kami! Temukan kami di berbagai
            platform media sosial untuk mendapatkan inspirasi kuliner, resep
            eksklusif, dan cerita di balik setiap hidangan.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
};
</script>

<style>
.footer {
  margin-top: 20px;
  background-color: #dbdbdb;
  padding: 50px;
}
</style>
