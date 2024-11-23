<template>
    <div class="beer-view">
      <h1 class="view-title">Beer</h1>
      <div v-if="loading" class="loading">Loading...</div>
      <div v-else-if="!beers.length" class="no-data">
        No beers or associated movies found.
      </div>
      <div class="movies-container">
        <div v-for="beer in beers" :key="beer.id" class="beer-section">
          <h2 class="beer-title">{{ beer.subtype }}</h2>
          <p class="beer-description">{{ beer.description }}</p>
          <div class="movies-scroll">
            <div
              v-for="movie in getBeerMovies(beer.subtype)"
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
    </div>
  </template>
  
  <script setup>
  import { useLiquorStore } from "@/stores/liquor";
  import { useMovieStore } from "@/stores/movie";
  import { computed, onMounted } from "vue";
  import { RouterLink } from "vue-router";
  
  const liquorStore = useLiquorStore();
  const movieStore = useMovieStore();
  
  onMounted(() => {
    liquorStore.getBeers();
    movieStore.getMovies();
    movieStore.getGenres();
  });
  
  const beers = computed(() => liquorStore.beers);
  const movies = computed(() => movieStore.movies);
  const genres = computed(() => movieStore.genres);
  const loading = computed(() => !liquorStore.beers.length || !movieStore.movies.length);
  
  const getBeerMovies = (subtype) => {
    return movies.value.filter((movie) => {
      return movie.genres.some((genreId) => {
        const genre = genres.value.find((g) => g.id === genreId);
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
  .beer-view {
    padding: 20px;
    font-family: "Arial", sans-serif;
  }
  
  .view-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .loading,
  .no-data {
    text-align: center;
    font-size: 1.5rem;
    color: #666;
  }
  
  .beer-section {
    margin-bottom: 40px;
  }
  
  .beer-title {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: #333;
  }
  
  .beer-description {
    font-size: 1rem;
    margin-bottom: 20px;
    color: #555;
  }
  
  .movies-scroll {
    display: flex; /* Flexbox 사용 */
    gap: 20px; /* 카드 간격 */
    overflow-x: auto; /* 가로 스크롤 활성화 */
    padding-bottom: 10px; /* 스크롤바 공간 확보 */
  }
  
  .movies-scroll::-webkit-scrollbar {
    height: 8px; /* 스크롤바 높이 */
  }
  
  .movies-scroll::-webkit-scrollbar-thumb {
    background: #888; /* 스크롤바 색상 */
    border-radius: 4px;
  }
  
  .movies-scroll::-webkit-scrollbar-thumb:hover {
    background: #555; /* 호버 시 색상 */
  }
  
  .movie-card {
    flex: 0 0 auto; /* 고정 너비 */
    width: 150px;
    text-align: center;
  }
  
  .movie-poster {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s;
  }
  
  .movie-poster:hover {
    transform: scale(1.05);
  }
  
  .movie-title {
    font-size: 1rem;
    margin-top: 10px;
    color: #333;
    font-weight: bold;
  }
  </style>
  