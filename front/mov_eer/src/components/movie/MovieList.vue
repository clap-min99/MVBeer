<template>
  <div class="movie-list-container">
    <div class="header-container">
      <h2 class="header-text">현재 인기작</h2>
    </div>
    <div class="carousel-container">
      <div class="carousel">
        <div
          v-for="(movie, index) in store.movies.slice(0, 10)"
          :key="movie.id"
          class="carousel-item"
          :style="getItemStyle(index)"
        >
          <MovieMainInfo :movie="movie" />
        </div>
      </div>
      <button class="arrow left" @click="prevSlide">‹</button>
      <button class="arrow right" @click="nextSlide">›</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useMovieStore } from "@/stores/movie";
import MovieMainInfo from "./MovieMainInfo.vue";

const store = useMovieStore();
const currentIndex = ref(0);

const radius = 300;

// 영화 슬라이드의 스타일을 동적으로 계산
const getItemStyle = (index) => {
  const total = store.movies.slice(0, 10).length;
  const angle = ((index - currentIndex.value + total) % total) * (360 / total);
  return {
    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
    opacity: index === currentIndex.value ? 1 : 0.5,
    zIndex: index === currentIndex.value ? 2 : 1,
    transition: "transform 0.5s ease, opacity 0.5s ease",
  };
};

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + store.movies.slice(0, 10).length) %
    store.movies.slice(0, 10).length;
};

const nextSlide = () => {
  currentIndex.value =
    (currentIndex.value + 1) % store.movies.slice(0, 10).length;
};
</script>

<style scoped>
.movie-list-container {
  position: relative;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

/* 헤더 텍스트 컨테이너 */
.header-container {
  position: absolute;
  top: 10px;
  width: 100%;
  text-align: center;
}

/* 헤더 텍스트 */
.header-text {
  font-size: 2.5rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  z-index: 2;
}

/* 캐러셀 컨테이너 */
.carousel-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  perspective: 1200px;
  height: 350px;
  width: 100%;
}

/* 캐러셀 */
.carousel {
  display: flex;
  position: relative;
  transform-style: preserve-3d;
  width: 80%;
  height: 100%;
}

/* 캐러셀 아이템 */
.carousel-item {
  position: absolute;
  width: 250px;
  height: 350px;
  border-radius: 8px;
  overflow: hidden;
  transform-origin: center;
}

/* 화살표 */
.arrow {
  background: none;
  border: none;
  font-size: 2.5rem;
  cursor: pointer;
  color: white;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
}

.arrow.left {
  left: -150px;
}

.arrow.right {
  right: -150px;
}

.arrow:hover {
  color: #ff9900;
}
</style>
