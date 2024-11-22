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
            <p class="section-title">추천 음료:</p>
            <li v-for="genre in movie.genres" :key="genre.id">
                {{ genre.recommended_beverage.type }} ({{ genre.recommended_beverage.subtype }})
            </li>
          </ul>
          <p><strong>출시일:</strong> {{ movie.release_date }}</p>
          <p><strong>감독:</strong> {{ movie.director }}</p>
          
        </div>
      </div>
    </div>
    <div class="comments-container">
      <Comment />
    </div>
  </template>
  
  <script setup>

  import Comment from '@/components/Comment.vue';

  defineProps({
    movie: {
      type: Object,
      required: true,
    },
  });
  
  // 이미지 URL을 처리하는 함수
  const getImageUrl = (path) => {
    if (!path) {
      return 'https://via.placeholder.com/500'; // 기본 이미지
    }
    return `https://image.tmdb.org/t/p/w500${path}`;
  };
  
  
  </script>

  <style scoped>
  /* 전체 레이아웃 */
  .movie-detail {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    font-family: 'Arial', sans-serif;
  }
  
  /* 헤더 스타일 */
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
  
  /* 콘텐츠 레이아웃 */
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
  
  /* 요약 스타일 */
  .movie-summary {
    margin-bottom: 20px;
    line-height: 1.6;
  }
  
  /* 장르 스타일 */
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


  /* 배우 리스트 스타일 */
  .movie-actors {
    list-style: none;
    padding: 0;
  }
  
  .movie-actors li {
    margin-bottom: 5px;
    font-size: 1rem;
    color: #333;
  }
  </style>
  