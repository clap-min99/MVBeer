<template>
    <div class="beer-view">
      <h1 class="view-title">Beer Movies</h1>
      <div v-if="loading" class="loading">Loading...</div>
      <div v-else-if="!beers.length" class="no-data">
        No beers or associated movies found.
      </div>
      <div v-else class="movies-container">
        <div v-for="beer in beers" :key="beer.id" class="beer-section">
          <h2 class="beer-title">{{ beer.subtype }}</h2>
          <p class="beer-description">{{ beer.description }}</p>
          <div class="movies-grid">
            <div
              v-for="movie in getBeerMovies(beer.subtype)"
              :key="movie.pk"
              class="movie-card"
            >
              <!-- 영화 포스터 클릭 시 MovieDetailView로 이동 -->
              <RouterLink :to="{ name: 'MovieDetailView', params: { moviePk: movie.pk } }">
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
  // Pinia stores
  const liquorStore = useLiquorStore();
  const movieStore = useMovieStore();
  
  // Load data on mount
  onMounted(() => {
    liquorStore.getBeers();
    movieStore.getMovies();
  });
  
  // Computed properties
  const beers = computed(() => liquorStore.beers);
  const movies = computed(() => movieStore.movies);
  const genres = computed(() => movieStore.id); // Assume genres are loaded in movie store
  const loading = computed(() => !liquorStore.beers.length || !movieStore.movies.length);
  
  // Match movies by beer subtype
  const getBeerMovies = (subtype) => {
    return movies.value.filter((movie) => {
      return movie.genres.some((genreId) => {
        const genre = genres.value.find((g) => g.pk === genreId);
        return genre && genre.subtype === subtype;
      });
    });
  };
  
  // Generate image URL
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
  
  .movies-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .movie-card {
    text-align: center;
    max-width: 150px;
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
  