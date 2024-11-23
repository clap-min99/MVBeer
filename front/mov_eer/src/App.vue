<template>
  <div class="background">
    <nav >
      <RouterLink :to="{name:'LoginView'}">로그인</RouterLink>
      <span> | </span>
      <RouterLink :to="{name:'SignUpView'}">회원가입</RouterLink>
    </nav>
    <HeaderComponent />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router'
import { useMovieStore } from './stores/movie';
import HeaderComponent from './components/shared/HeaderComponent.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import LoginView from './views/LoginView.vue';


const route = useRoute()
const store = useMovieStore()


</script>

<style scoped>
.background{
  background-color: #2e2e2e
}
</style>