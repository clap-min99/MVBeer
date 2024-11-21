<template>
  <RouterLink
    :to="{ name: 'MovieDetailView', params: { moviePk: movie.id } }"
  >
    <div class="card">
      <img :src="getImageUrl(movie.poster_url)" class="movie-poster" alt="movieposter" />
      <!-- <div class="card-body">
        <h5 class="card-title">{{ movie.title }}</h5>
      </div> -->
    </div>
  </RouterLink>
</template>

<script setup>
defineProps({
  movie: Object
});

const getImageUrl = (path) => {
  if (!path) {
    return;
  }
  return `https://image.tmdb.org/t/p/w500${path}`;
};
</script>

<style scoped>
.card {
  width: 100%; /* MovieList에서 지정한 고정 너비에 맞춤 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
  display: flex;
  flex-direction: column;
}

.movie-poster {
  width: 100%;
  height: auto;
}

.card-body {
  padding: 8px;
}

.card-title {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
</style>
