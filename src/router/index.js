import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/receitas',
    name: 'Receitas',    
    component: () => import(/* webpackChunkName: "receitas" */ '../components/Receitas.vue')
  },
  {
    path: '/despesas',
    name: 'Despesas',
    component: () => import(/* webpackChunkName: "despesas" */ '../components/Despesas.vue')
  },
  {
    path: '/investimentos',
    name: 'Investimentos',
    component: () => import(/* webpackChunkName: "investimentos" */ '../components/Investimentos.vue')
  },
  {
    path: '/graficos',
    name: 'Gráficos',
    component: () => import(/* webpackChunkName: "graficos" */ '../components/Graficos.vue')
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
