<template>
  <div>
    <div class="container mt-5">
      <div class="row">
        <div class="col">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <!-- about -->
                <h1 class="fw-bold">FOODWEBS</h1>
                <p>
                    Selamat datang di FoodWebs! 
                </p>
              <router-link to="/" class="btn btn-success">
                Explore
                <b-icon-arrow-right-circle></b-icon-arrow-right-circle>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col">
          <img src="../assets/images/hero.png" alt="Image Foods" width="100%" />
        </div>
      </div>
      <div class="about-content">
        <div class="row">
          <div class="col">
            <h2>Our Story</h2>
            <p>
              Sejak awal perjalanan kami di dunia kuliner, FoodWebs memiliki
              kisah yang membanggakan. Dari awal yang sederhana hingga saat ini,
              kami telah tumbuh sebagai komunitas makanan yang penuh semangat.
              Kisah kami ditenun oleh cinta pada cita rasa, keinginan untuk
              berbagi pengalaman kuliner, dan dedikasi untuk memberikan
              pengalaman berharga kepada para pecinta makanan di seluruh dunia.
            </p>
          </div>
          <div class="col">
            <h2>Our Vision</h2>
            <p>
              Visi kami adalah menjadi panduan utama bagi semua pencinta makanan
              yang mencari petualangan kuliner. Kami bermimpi menjadi destinasi
              terdepan untuk inspirasi makanan, resep kreatif, dan cerita-cerita
              menarik di dunia kuliner. Melalui kesempurnaan dan inovasi, kami
              berharap dapat membangun komunitas global yang terkoneksi melalui
              cinta pada makanan.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h2>Our Mission</h2>
            <p>
              Kami berkomitmen untuk menciptakan pengalaman kuliner yang
              menginspirasi dan tak terlupakan. Melalui eksplorasi rasa,
              pembagian cerita, dan kegembiraan bersama, misi kami adalah
              membawa kelezatan dunia langsung ke meja makan Anda. Kami percaya
              bahwa makanan bukan hanya tentang mencerna, tetapi juga merayakan
              kehidupan dan kebudayaan.
            </p>
          </div>
          <div class="col">
            <h2>Our Value</h2>
            <p>
              Di FoodWebs, kami menjunjung tinggi nilai-nilai yang membentuk
              inti identitas kami. Kejujuran, keberagaman, inovasi, dan kepuasan
              pelanggan adalah pilar utama yang mengarahkan setiap tindakan
              kami. Kami berkomitmen untuk memberikan layanan yang luar biasa,
              menciptakan lingkungan inklusif, dan terus mendorong batas-batas
              rasa dan kreativitas.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
};
</script>

<style></style>
