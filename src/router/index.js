import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/releases',
    name: 'Releases',    
    component: () => import(/* webpackChunkName: "releases" */ '../views/Releases.vue')
  },
  {
    path: '/accountRegistration',
    name: 'AccountRegistration',
    component: () => import(/* webpackChunkName: "accountRegistration" */ '../views/AccountRegistration.vue')
  },
  {
    path: '/reports',
    name: 'Reports',
    component: () => import(/* webpackChunkName: "reports" */ '../views/Reports.vue')
  },
  {
    path: '/dashboards',
    name: 'Dashboards',
    component: () => import(/* webpackChunkName: "dashboards" */ '../views/Dashboards.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunckName: "login" */'../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
