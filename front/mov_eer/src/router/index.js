import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import MovieDetailView from '@/views/MovieDetailView.vue'
import AlcoholView from '@/views/AlcoholView.vue'
import SignUpView from '@/views/SignUpView.vue'
import LoginView from '@/views/LoginView.vue'
import BeerView from '@/views/BeerView.vue'
import WhiskeyView from '@/views/WhiskeyView.vue'
import WineView from '@/views/WineView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainView',
      component: MainView
    },
    {
      path: '/movies/:moviePk/',
      name: 'MovieDetailView',
      component: MovieDetailView,
      props: true
    },
    {
      path: '/AlcoholView/',
      name: 'AlcoholView',
      component: AlcoholView
    },
    {
      path: '/signup',
      name: 'SignUpView',
      component: SignUpView
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView
    },
    {
      path: '/beer/',
      name: 'BeerView',
      component: BeerView
    },
    {
      path: '/whiskey/',
      name: 'WhiskeyView',
      component: WhiskeyView
    },
    {
      path: '/wine/',
      name: 'WineView',
      component: WineView
    }
  ],
})

export default router
