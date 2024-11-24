import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useRouter } from 'vue-router'


export const useLogStore = defineStore('log', () => {
    const API_URL = 'http://127.0.0.1:8000'
    const router = useRouter()
    const user = ref(null)
    const token = ref(null)
    const isLogin = computed(() => !!token.value);
    // const isLogin = computed(() => {
    //     if (token.value === null) {
    //     return false
    //     } else {
    //     return true
    //     }
    // })
    // 회원가입 요청 액션
    const signUp = function (payload) {
    
    const { username, password1, password2 } = payload

    axios({
      method: 'post',
      url: `${API_URL}/accounts/signup/`,
      data: {
        username, password1, password2
      }
    })
      .then((res) => {
        // console.log(res)
        // console.log('회원가입 성공')
        const password = password1
        logIn({ username, password })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // 로그인 요청 액션
  const logIn = function (payload) {
    const { username, password } = payload;

    axios({
      method: 'post',
      url: `${API_URL}/accounts/login/`,
      data: { username, password },
    })
      .then((res) => {
        token.value = res.data.key;

        // 사용자 정보 가져오기
        axios({
          method: 'get',
          url: `${API_URL}/accounts/user/`, // 사용자 정보 API 엔드포인트
          headers: { Authorization: `Token ${token.value}` },
        })
          .then((userRes) => {
            user.value = userRes.data; // 사용자 정보 저장
            router.push({ name: 'MainView' });
            console.log('로그인 성공:', user.value)
          })
          .catch((err) => {
            console.error('사용자 정보 가져오기 실패:', err)
          })
      })
      .catch((err) => {
        console.error('로그인 실패:', err);
      })
  }
  
  // [추가기능] 로그아웃
  const logOut = function () {
    axios({
      method: 'post',
      url: `${API_URL}/accounts/logout/`,
    })
      .then((res) => {
        console.log(res.data)
        token.value = null
        router.push({ name: 'MainView' })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return { signUp, logIn, token, isLogin, logOut, API_URL }
  
},{persist: true})