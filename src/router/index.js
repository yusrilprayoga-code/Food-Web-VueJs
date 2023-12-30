import Vue from "vue";
import VueRouter from "vue-router";
import Hero from "../components/Hero.vue";
import DetailCategory from "../components/detailCategory.vue";
import DetailFoodsCategory from "../components/detailFoods.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Hero,
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
