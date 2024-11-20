<template>
    <div>
        <h2>MovieList</h2>
        <MovieDetailInfo
        v-for="movie in store.movies"
        :key="movie.id"
        :movie="movie"/>
        <div class="container">
        <div class="row row-cols-md-2 row-cols-lg-3 g-4">
        <div v-for="movie in movies" :key="movie.id" class="col">
        <MovieCard :movie="movie" />
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { useMovieStore } from '@/stores/movie';
import MovieDetailInfo from './MovieDetailInfo.vue';
import MovieCard from './MovieCard.vue';



const store = useMovieStore()
</script>

<style scoped>

</style>