import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/input',
    name: 'input',
    component: () => import(/* webpackChunkName: "about" */ '../views/input_show/index.vue')
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
