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
import AlcoholMain from '@/components/alcohol/AlcoholMain.vue';

const store = useMovieStore()
</script>

<style scoped>
.scroll-container {
  display: flex;
  overflow-x: auto;
  gap: 16px;
  padding: 16px 0;
  scroll-behavior: smooth;
  background-color: #2e2e2e; /* 다크그레이 배경 색 추가 */
}

.scroll-container::-webkit-scrollbar {
  height: 8px;
}

.scroll-container::-webkit-scrollbar-thumb {
  background: #cccccc;
  border-radius: 4px;
}

.scroll-container::-webkit-scrollbar-track {
  background: #1c1c1c; /* 스크롤 트랙도 다크그레이에 어울리게 조정 */
}

.scroll-item {
  flex: 0 0 auto;
  width: 200px; /* 카드의 고정 너비 */
}
</style>
