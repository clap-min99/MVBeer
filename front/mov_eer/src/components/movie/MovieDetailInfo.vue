<template>
  <div class="movie-detail">
    <div class="movie-header">
      <h1 class="movie-title">{{ movie.title }}</h1>
      <p class="movie-rating">평점: {{ movie.star_rating }}</p>
    </div>
    <div class="movie-content">
      <img :src="getImageUrl(movie.poster_url)" alt="movie poster" class="movie-poster" />
      <div class="movie-info">
        <p class="movie-summary">{{ movie.summary }}</p>
        <ul class="movie-genres">
          <p class="section-title">장르:</p>
          <li v-for="genre in movie.genres" :key="genre.id">
            {{ genre.name }}
          </li>
        </ul>
        <p><strong>출시일:</strong> {{ movie.release_date }}</p>
        <p><strong>감독:</strong> {{ movie.director }}</p>
      </div>
    </div>

    <!-- 추천 음료 섹션 -->
    <div class="recommended-beverages">
      <h3>추천 주류</h3>
      <div class="beverages-container">
        <div
          v-for="genre in movie.genres"
          :key="genre.id"
          class="beverage-card"
        >
          <h3>{{ genre.recommended_beverage.type }} ({{ genre.recommended_beverage.subtype }})</h3>
          <div class="beverage-images">
            <img
              v-for="image in getBeverageImages(genre.recommended_beverage.subtype)"
              :key="image.image"
              :src="`http://127.0.0.1:8000${image.image}`"
              :alt="image.description"
              class="beverage-image"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="comments-container">
      <Comment :movieId="movie.id"/>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useLiquorStore } from "@/stores/liquor"; // 주류 스토어
import Comment from "@/components/Comment.vue";

defineProps({
  movie: {
    type: Object,
    required: true,
  },
});

// 주류 데이터 관리
const liquorStore = useLiquorStore();

// 영화 디테일용 함수
const getImageUrl = (path) => {
  if (!path) {
    return "https://via.placeholder.com/500"; // 기본 이미지
  }
  return `https://image.tmdb.org/t/p/w500${path}`;
};

// 음료 이미지 가져오기
const getBeverageImages = (subtype) => {
  const allBeers = liquorStore.beers;
  const allWhiskeys = liquorStore.whiskeys;
  const allWines = liquorStore.wines;

  const beverages = [...allBeers, ...allWhiskeys, ...allWines];

  // 주류 subtype과 일치하는 이미지 반환
  const beverage = beverages.find((b) => b.subtype === subtype);
  return beverage ? beverage.images : [];
};

// 주류 데이터 불러오기
onMounted(() => {
  liquorStore.getBeers();
  liquorStore.getWhiskeys();
  liquorStore.getWines();
});
</script>

<style scoped>
/* 기존 영화 디테일 스타일 */
.movie-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-family: "Arial", sans-serif;
}

.movie-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.movie-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
}

.movie-rating {
  font-size: 1.2rem;
  color: #ffcc00;
}

.movie-content {
  display: flex;
  gap: 20px;
}

.movie-poster {
  width: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.movie-info {
  flex: 1;
  font-size: 1rem;
  color: #555;
}

.movie-summary {
  margin-bottom: 20px;
  line-height: 1.6;
}

.movie-genres {
  list-style: none;
  padding: 0;
  margin: 0;
}

.movie-genres li {
  margin-bottom: 8px;
  font-weight: bold;
}

.section-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

/* 추천 음료 섹션 */
.recommended-beverages {
  margin-top: 30px;
}

.recommended-beverages h2 {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.beverages-container {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 10px;
}

.beverage-card {
  flex: 0 0 auto;
  text-align: center;
}

.beverage-images {
  display: flex;
  gap: 10px;
}

.beverage-image {
  width: 100px;
  height: 100px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
