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
      path: '/page',
      name: 'page',
      component: () => import('../pages/UserLocation.vue')
    },
    {
      path: '/details',
      name: 'details',
      component: () => import('../pages/Details.vue'),
      props: true,
    }
  ]
})

export default router
