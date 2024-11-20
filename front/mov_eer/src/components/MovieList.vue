<template>
    <div>
        <h2>현재 인기작</h2>
        <div class="scroll-container">
        <MovieMainInfo
          v-for="movie in store.movies.slice(0,10)"
        :key="movie.id"
        :movie="movie"
        class="scroll-item" />
        </div>
       
      
</div>
</template>

<script setup>
import { useMovieStore } from '@/stores/movie';
import MovieMainInfo from './MovieMainInfo.vue';



const store = useMovieStore()
</script>

<style scoped>
.scroll-container {
  display: flex;
  overflow-x: auto;
  gap: 16px;
  padding: 16px 0;
  scroll-behavior: smooth;
}

.scroll-container::-webkit-scrollbar {
  height: 8px;
}

.scroll-container::-webkit-scrollbar-thumb {
  background: #cccccc;
  border-radius: 4px;
}

.scroll-container::-webkit-scrollbar-track {
  background: #f5f5f5;
}

.scroll-item {
  flex: 0 0 auto;
  width: 200px; /* 카드의 고정 너비 */
}

</style>