<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="keranjang-view mt-4 container">
        <h3 class="text-center">Keranjang Belanja</h3>
        <div class="card">
            <div class="card-body">
                <div class="card-text">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="table-responsive">
                                <table class="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Nama Resep</th>
                                            <th scope="col">Image</th>
                                            <th scope="col">Kategori</th>
                                            <th scope="col">Area</th>
                                            <th scope="col">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody class="body-card align-items-center justify-content-center ">
                                        <tr v-for="(item, index) in keranjang" :key="index">
                                            <th scope="row">{{ index + 1 }}</th>
                                            <td>{{ item.strMeal }}</td>
                                            <td>
                                                <img :src="item.strMealThumb" alt="Image Foods" width="100" class="rounded" />
                                            </td>
                                            <td>{{ item.strCategory }}</td>
                                            <td>{{ item.strArea }}</td>
                                            <td>
                                                <button class="btn btn-danger" @click="hapusKeranjang(index)">
                                                    <b-icon-trash></b-icon-trash>
                                                    Hapus
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="5" class="text-left">
                                                <h5 v-if="keranjang.length === 0" class="mt-5">Keranjang Kosong</h5>
                                                <p v-else class="text text-success">
                                                    <b-icon-bag></b-icon-bag>
                                                    Total: {{ keranjang.length }}
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="text-center">
                                <button class="btn btn-danger" @click="hapusSemua">
                                    <b-icon-trash></b-icon-trash>
                                    Hapus Semua
                                </button>
                                <router-link to="/checkout" class="btn btn-success mt-2">
                                    <b-icon-arrow-right-circle></b-icon-arrow-right-circle>
                                    Checkout
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Keranjang",
    data() {
        return {
            keranjang: [],
        };
    },
    methods: {
        
        getKeranjang() {
            this.keranjang = JSON.parse(localStorage.getItem("keranjang"));
        },
        hapusKeranjang(index) {
            this.keranjang.splice(index, 1);
            localStorage.setItem("keranjang", JSON.stringify(this.keranjang));
        },
        hapusSemua() {
            this.keranjang = [];
            localStorage.setItem("keranjang", JSON.stringify(this.keranjang));
        },
    },
    created() {
        this.getKeranjang();
    },
}
</script>

<style>

</style>