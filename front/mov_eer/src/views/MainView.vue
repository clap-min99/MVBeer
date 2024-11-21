<template>
    <div>
        <HeaderComponent />
        <!-- 오늘의 추천 주류 -->
        <MovieList />
        <!-- 주류별 영화 추천 -->
        <AlcoholMain />
    </div>
</template>

<script setup>
import MovieList from '@/components/MovieList.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import AlcoholMain from '@/components/AlcoholMain.vue'
import { onMounted } from 'vue'
import { useMovieStore } from '@/stores/movie'


const store = useMovieStore()

onMounted(() => {
    store.getMovies()
})

</script>

<style scoped>

</style>