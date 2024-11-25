<template>
    <div class="tennessee-whiskey-view">
      <h1>🥃 Tennessee 위스키</h1>
      <div class="whiskey-intro">
        <img
          src="@/assets/Tennessee.png"
          alt="Tennessee Whiskey"
          class="whiskey-image"
        />
        <div class="whiskey-description">
          <p>
            <strong>Tennessee 위스키</strong>는 미국 테네시주에서 만들어지는 독특한 스타일의 위스키로,
            부드러운 풍미와 달콤한 맛이 특징입니다. Lincoln County Process라 불리는 특별한 숯 여과 과정을 거쳐
            더 부드럽고 깨끗한 맛을 자랑합니다.
          </p>
          <p>
            테네시 위스키는 종종 스트레이트로 즐기거나 칵테일의 베이스로 사용되며,
            특히 Jack Daniel's와 George Dickel 같은 브랜드가 세계적으로 사랑받고 있습니다.
          </p>
          <p class="tennessee-scifi-pairing">
            🍿 Tennessee 위스키는 Science Fiction(공상 과학) 장르와 환상적인 조합을 이룹니다.
            부드러운 위스키 한 잔과 함께 영화 속 미래 세계를 탐험해보세요!
          </p>
        </div>
      </div>
  
      <div class="whiskey-list">
        <h2>추천 Tennessee 위스키 리스트</h2>
        <div class="whiskey-card-container">
          <div v-for="whiskey in whiskeys" :key="whiskey.id" class="whiskey-card">
            <h3>{{ whiskey.name }}</h3>
            <p>{{ whiskey.description }}</p>
            <p><strong>대표 브랜드:</strong> {{ whiskey.representativeBrands }}</p>
            <p><strong>지역:</strong> {{ whiskey.region }}</p>
            <p>
              <strong>추천 안주:</strong> {{ whiskey.foodPairing }}
              <span>{{ whiskey.foodEmoji }}</span>
            </p>
          </div>
        </div>
      </div>
  
      <div class="movies-scroll">
        <h2>페어링 with Tennessee 🥃</h2>
        <div class="movie-card-container">
          <div
            v-for="movie in getWhiskeyMovies('Tennessee')" 
            :key="movie.id"
            class="movie-card"
          >
            <RouterLink :to="{ name: 'MovieDetailView', params: { moviePk: movie.id } }">
              <img :src="getImageUrl(movie.poster_url)" class="movie-poster" alt="Movie Poster" />
            </RouterLink>
            <p class="movie-title">{{ movie.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useLiquorStore } from "@/stores/liquor";
  import { useMovieStore } from "@/stores/movie";
  import { onMounted } from "vue";
  import { RouterLink } from "vue-router";
  
  const whiskeys = [
    {
      id: 1,
      name: "Jack Daniel's Old No. 7",
      description: "특유의 달콤함과 부드러움이 조화로운 세계적인 테네시 위스키.",
      representativeBrands: "Jack Daniel's",
      region: "미국 테네시",
      foodPairing: "바비큐, 버거",
      foodEmoji: "🍖🍔"
    },
    {
      id: 2,
      name: "George Dickel No. 12",
      description: "스모키한 풍미와 달콤한 곡물 향이 어우러진 위스키.",
      representativeBrands: "George Dickel",
      region: "미국 테네시",
      foodPairing: "치킨 윙, 감자튀김",
      foodEmoji: "🍗🍟"
    },
    {
      id: 3,
      name: "Heaven's Door Tennessee Bourbon",
      description: "버번과 테네시 위스키의 풍미를 동시에 즐길 수 있는 독특한 맛.",
      representativeBrands: "Heaven's Door",
      region: "미국 테네시",
      foodPairing: "크림 파스타, 피칸 파이",
      foodEmoji: "🍝🥧"
    }
  ];
  
  const liquorStore = useLiquorStore();
  const movieStore = useMovieStore();
  
  onMounted(() => {
    liquorStore.getWhiskeys();
    movieStore.getMovies();
    movieStore.getGenres();
  });
  
  const getWhiskeyMovies = (subtype) => {
    return movieStore.movies.filter((movie) => {
      return movie.genres.some((genreId) => {
        const genre = movieStore.genres.find((g) => g.id === genreId);
        return genre && genre.subtype === subtype;
      });
    });
  };
  
  const getImageUrl = (path) => {
    if (!path) {
      return "https://via.placeholder.com/300x450";
    }
    return `https://image.tmdb.org/t/p/w300${path}`;
  };
  </script>
  
  <style scoped>
  /* Tennessee 위스키 스타일 */
  .tennessee-whiskey-view {
    padding: 20px;
    background-color: #f9f9f9;
    font-family: Arial, sans-serif;
  }
  
  h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
  }
  
  .whiskey-intro {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
  }
  
  .whiskey-image {
    width: 300px;
    height: auto;
    margin-right: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .whiskey-description {
    color: #555;
    font-size: 16px;
    line-height: 1.8;
    flex: 1;
  }
  
  .tennessee-scifi-pairing {
    margin-top: 20px;
    font-style: italic;
    color: #444;
    font-size: 15px;
  }
  
  .whiskey-list h2 {
    color: #444;
    margin-bottom: 20px;
  }
  
  .whiskey-card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .whiskey-card {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 20px;
    width: 20%;
    min-width: 250px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .whiskey-card:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  }
  
  h3 {
    color: #444;
    margin-bottom: 10px;
  }
  
  p {
    color: #555;
    margin: 5px 0;
    line-height: 1.6;
  }
  
  /* 영화 스타일 */
  .movies-scroll {
    margin-top: 40px;
  }
  
  .movie-card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .movie-card {
    width: 150px;
    text-align: center;
  }
  
  .movie-poster {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }
  
  .movie-title {
    margin-top: 10px;
    font-size: 14px;
    color: #333;
  }
  </style>
  