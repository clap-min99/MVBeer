<template>
    <div>
        <h2>MovieList</h2>
        <MovieListItem
        v-for="movie in store.movies"
        :key="movie.id"
        :movie="movie"/>
    </div>
</template>

<script setup>
import { useMovieStore } from '@/stores/movie';
import MovieListItem from './MovieListItem.vue';

const store = useMovieStore()
</script>

<style scoped>

</style>