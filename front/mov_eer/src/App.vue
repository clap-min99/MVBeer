<template>
  <div>
    <nav>
      <RouterLink :to="{name:'MainView'}">Main</RouterLink>
      <br>
      <RouterLink :to="{name:'AlcoholView'}">Alcohol</RouterLink>
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

const route = useRoute()
const store = useMovieStore()

</script>

<style scoped>

</style>