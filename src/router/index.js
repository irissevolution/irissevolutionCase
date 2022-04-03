import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/d_web',
    name: 'D_web',
    component: () => import(/* webpackChunkName: "about" */ '../views/D_web.vue')
  },
  {
    path: '/chatbot',
    name: 'Chatbot',
    component: () => import(/* webpackChunkName: "about" */ '../views/Chatbot.vue')
  },
  {
    path: '/robotica',
    name: 'Robotica',
    component: () => import(/* webpackChunkName: "about" */ '../views/Robotica.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacto.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
