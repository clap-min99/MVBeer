<template>
  <div class="background-image">
    <nav >
      <!-- <template v-if="!isLogin">
        <RouterLink :to="{ name: 'LoginView' }">로그인</RouterLink>
        <span> | </span>
        <RouterLink :to="{ name: 'SignUpView' }">회원가입</RouterLink>
      </template>
      <template v-else>
        <button @click="logOut">로그아웃</button>
      </template> -->
    </nav>
    <HeaderComponent />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router'
import { useMovieStore } from './stores/movie';
import HeaderComponent from './components/shared/HeaderComponent.vue';
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import LoginView from './views/LoginView.vue';
import { useLogStore } from './stores/log'

// const route = useRoute()
// const store = useMovieStore()
// const logStore = useLogStore()

// const isLogin = computed(() => logStore.isLogin)

// const logOut = () => {
//   logStore.logOut()
//   router.push({name:'MainView'})
// }

</script>

<style scoped>
nav {
  display: flex;
  gap: 10px;
  margin: 10px 0;
}

button {
  background: none;
  border: none;
  color: blue;
  cursor: pointer;
  text-decoration: underline;
}

button:hover {
  color: darkblue;
}

/* .background {
  background-color: black
} */

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/back.png'); /* 배경 이미지 경로 */
  background-size: cover;
  background-position: center;
  z-index: -1; /* 배경이 콘텐츠 뒤로 */
  /* filter: brightness(0.4); 약간 어둡게 처리 */
}
</style>