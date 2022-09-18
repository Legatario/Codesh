import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/listviews',
      name: 'listviews',
      component: () => import('../views/ListViews.vue')
    },
    {
      path: '/articulo/:id',
      name: 'articulo',
      component: () => import('../views/Articulo.vue')
    }
  ]
})

export default router
