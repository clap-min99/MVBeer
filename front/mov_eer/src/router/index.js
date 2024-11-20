import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import MovieDetailView from '@/views/MovieDetailView.vue'
import AlcoholView from '@/views/AlcoholView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainView',
      component: MainView
    },
    {
      path: '/movies/:id',
      name: 'MovieDetail',
      component: MovieDetailView
    },
    {
      path: '/AlcoholView/',
      name: 'AlcoholView',
      component: AlcoholView
    },
  ],
  
})

export default router
