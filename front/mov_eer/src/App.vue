<template>
  <div>
    <nav >
      <RouterLink :to="{name:'MainView'}">Main</RouterLink>
      <span> | </span>
      <RouterLink :to="{name:'AlcoholView'}">Alcohol</RouterLink>
      <span> | </span>
      <RouterLink :to="{name:'LoginView'}">로그인</RouterLink>
      <span> | </span>
      <RouterLink :to="{name:'SignUpView'}">회원가입</RouterLink>
    </nav>
    
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router'
import { useMovieStore } from './stores/movie';
import HeaderComponent from './components/HeaderComponent.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import LoginView from './views/LoginView.vue';


const route = useRoute()
const store = useMovieStore()


</script>

<style scoped>

</style>