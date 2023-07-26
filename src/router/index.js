import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/grade',
    name: 'grade',
    component: () => import('../views/grade.vue')
  },
  {
    path: '/presence',
    name: 'presence',
    // this generates a separate chunk (about.[hash].js) for this route
    component: () => import(/* webpackChunkName: "about" */ '../views/presence.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import ('../views/other.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
