<template>
    <div>
        <h4>{{ movie.title }}</h4>
    <div class="movie-poster">
      <img :src="getImageUrl(movie.poster_url)" alt="..." />
    </div>
        <h5>{{ movie.summary }}</h5>
    </div>
</template>

<script setup>
defineProps({
    movie:Object
})

const getImageUrl = (path) => {
    if (!path) {
        return
    }
    return `https://image.tmdb.org/t/p/w500${path}`;
}
// onMounted(() => {
//   getImageUrl();
// })

</script>

<style scoped>
.movie-poster img {
  max-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

</style>