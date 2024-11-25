<template>
  <div class="background-container">
    <h2>현재 인기작</h2>
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

const radius = 350; // 원형 배치의 반지름 (화면 비율 확대에 맞춰 증가)

// 영화 슬라이드의 스타일을 동적으로 계산
const getItemStyle = (index) => {
  const total = store.movies.slice(0, 10).length;
  const angle = ((index - currentIndex.value + total) % total) * (360 / total);
  const radian = (angle * Math.PI) / 180;
  return {
    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
    opacity: index === currentIndex.value ? 1 : 0.5,
    zIndex: index === currentIndex.value ? 2 : 1,
    transition: "transform 0.5s ease, opacity 0.5s ease",
  };
};

// 이전 슬라이드로 이동
const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + store.movies.slice(0, 10).length) %
    store.movies.slice(0, 10).length;
};

// 다음 슬라이드로 이동
const nextSlide = () => {
  currentIndex.value =
    (currentIndex.value + 1) % store.movies.slice(0, 10).length;
};
</script>

<style scoped>
/* 전체 배경 컨테이너 */
.background-container {
  position: relative;
  background-image: url('@/assets/back.'); /* Vue의 assets 폴더 경로 */
  background-size: cover;
  background-position: center;
  padding: 50px 0;
}


/* 헤더 텍스트 */
h2 {
  color: #f5f5f5;
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.3rem;
}

/* 캐러셀 컨테이너 */
.carousel-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  perspective: 1200px; /* 3D 효과를 위한 원근감 추가 */
  height: 400px; /* 화면 비율 증가 */
  margin-top: 160px; /* 캐러셀 자체를 아래로 이동 */
  transform: translateX(-50px); /* 캐러셀을 왼쪽으로 50px 이동 */
}

/* 캐러셀 */
.carousel {
  display: flex;
  position: relative;
  transform-style: preserve-3d; /* 3D 효과 유지 */
  width: 100%; /* 중앙 콘텐츠의 너비 */
  height: 100%; /* 높이 비율 */
}

/* 캐러셀 아이템 */
.carousel-item {
  position: absolute;
  width: 250px; /* 카드 크기 증가 */
  height: 350px; /* 카드 크기 증가 */
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
  color: #ccc;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}

.arrow.left {
  left: -330px; /* 왼쪽 화살표 간격 */
}

.arrow.right {
  right: -420px; /* 오른쪽 화살표 간격 */
}

.arrow:hover {
  color: #fff;
}
</style>
