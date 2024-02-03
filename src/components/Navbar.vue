
<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-light mt-3">
        <div class="container">
            <span class="navbar-brand mb-0 h1">Food App</span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/keranjang-belanja">
                            Keranjang
                            <b-icon-bag></b-icon-bag>
                            <span class="badge bg-success ml-2">
                                {{ keranjangLength }}
                            </span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Navbar',
    data() {
        return {
            keranjang: [],
        };
    },

    computed: {
        keranjangLength() {
            return this.keranjang.length;
        },
    },

    methods: {
        getKeranjang() {
            const keranjang = localStorage.getItem('keranjang');
            if (keranjang) {
                this.keranjang = JSON.parse(keranjang);
            }
        },
    },

    created() {
        this.getKeranjang();
    },
}
</script>

<style>
</style>