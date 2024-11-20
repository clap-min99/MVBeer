<template>
    <div>
        <h2>MovieList</h2>
        <MovieDetailInfo
        v-for="movie in store.movies"
        :key="movie.id"
        :movie="movie"/>
    </div>
</template>

<script setup>
import { useMovieStore } from '@/stores/movie';
import MovieDetailInfo from './MovieDetailInfo.vue';

const store = useMovieStore()
</script>

<style scoped>

</style>