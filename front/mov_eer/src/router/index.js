import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import MovieDetailView from '@/views/MovieDetailView.vue'

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      
    },
  ],
})

export default router
