import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'examples',
    component: () => import(/* webpackChunkName: "about" */ '../views/examples/index.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
