<template>
  <div>
    <nav>
      <RouterLink :to="{name:'MainView'}">Main</RouterLink>
    </nav>
    
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue';



</script>

<style scoped>

</style>