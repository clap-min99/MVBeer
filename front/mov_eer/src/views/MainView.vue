<template>
    <div>
        <MovieList />
        <!-- 주류별 영화 추천 -->
        <AlcoholMain />
        <!-- 오늘의 추천 주류 -->
        <Recommend />
    </div>
</template>

<script setup>
import MovieList from '@/components/movie/MovieList.vue'
import AlcoholMain from '@/components/alcohol/AlcoholMain.vue'
import { onMounted } from 'vue'
import { useMovieStore } from '@/stores/movie'
import Recommend from '@/components/alcohol/Recommend.vue'


const store = useMovieStore()

onMounted(() => {
    store.getMovies()
})

</script>

<style scoped>

</style>