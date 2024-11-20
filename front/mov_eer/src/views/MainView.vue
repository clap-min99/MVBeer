<template>
    <div>
        <HeaderComponent />
        <MovieList />
        <MovieCard />
        
    </div>
</template>

<script setup>
import MovieList from '@/components/MovieList.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import { onMounted } from 'vue'
import { useMovieStore } from '@/stores/movie'
import MovieCard from '@/components/MovieCard.vue'


const store = useMovieStore()

onMounted(() => {
    store.getMovies()
})

</script>

<style scoped>

</style>