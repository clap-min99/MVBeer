import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import MovieDetailView from '@/views/MovieDetailView.vue'
import AlcoholView from '@/views/AlcoholView.vue'
import SignUpView from '@/views/SignUpView.vue'
import LoginView from '@/views/LoginView.vue'
import BeerView from '@/views/Beer/BeerView.vue'
import WhiskeyView from '@/views/WhiskeyView.vue'
import WineView from '@/views/WineView.vue'
import { useLogStore } from '@/stores/log'


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

router.beforeEach((to, from) => {
  const store = useLogStore()
  // 만약 이동하는 목적지가 메인 페이지이면서
  // 현재 로그인 상태가 아니라면 로그인 페이지로 보냄
  if (to.name === 'MainView' && !store.isLogin) {
    window.alert('로그인이 필요합니다.')
    return { name: 'LoginView' }
  }

  // 만약 로그인 사용자가 회원가입 또는 로그인 페이지로 이동하려고 하면
  // 메인 페이지로 보냄
  if ((to.name === 'SignUpView' || to.name === 'LogInView') && (store.isLogin)) {
    window.alert('이미 로그인 되어있습니다.')
    return { name: 'MainView' }
  }
})

export default router
