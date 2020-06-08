import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'es-input',
    component: () => import(/* webpackChunkName: "about" */ '../views/examples/es-input.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
