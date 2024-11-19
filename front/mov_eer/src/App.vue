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
</script>

<style scoped>

</style>