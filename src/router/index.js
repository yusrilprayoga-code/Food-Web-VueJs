import Vue from 'vue'
import VueRouter from 'vue-router'
import Foods from '../views/Foods.vue'
import Hero from '../components/Hero.vue'
import DetailCategory from '../components/detailCategory.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Hero
  },
  {
    path: '/foods',
    name: 'Foods',
    component: Foods
  },
  {
    path: '/category/:id',
    name: 'DetailCategory',
    component: DetailCategory
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
