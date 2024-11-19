<template>
    <div>
    <nav>
       <h1>Detail</h1>
    </nav>   
    </div>

</template>


<script setup>
import axios from 'axios'
import { RouterView, RouterLink } from 'vue-router'
import { onMounted, ref } from 'vue'
import { useMovieStore } from '@/stores/movie';

const store = useMovieStore()

onMounted(() => {
    store.getMovies()
})
</script>

<style scoped>

</style>