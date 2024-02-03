import Vue from "vue";
import VueRouter from "vue-router";
import Hero from "../components/Hero.vue";
import DetailCategory from "../components/detailCategory.vue";
import DetailFoodsCategory from "../components/detailFoods.vue"
import KeranjangVue from "@/views/Keranjang.vue";
import checkout from "../views/checkout.vue";
import Categories from "@/views/Categories.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Hero,
  },
  {
    path: '/categories',
    name: 'categories',
    component: Categories
  },
  {
    path: "/detailCategory/:strCategory", 
    name: "DetailCategory",
    component: DetailCategory,
  },
  {
    path: "/detailFoods/:idMeal",
    name: "DetailFoods",
    component: DetailFoodsCategory,
  },
  {
    path: "/keranjang-belanja",
    name: "keranjang",
    component: KeranjangVue,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: checkout,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
