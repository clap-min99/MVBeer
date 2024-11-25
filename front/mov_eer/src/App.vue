<template>
  <div class="background">
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
</style>