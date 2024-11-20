<template>
    <div>
    <nav>
       <h1>Detail</h1>
       <div v-if="movie">
            <MovieDetailInfo :movie="movie" />
       </div>
    </nav>   
    </div>

</template>


<script setup>
import axios from 'axios'
import { RouterView, RouterLink } from 'vue-router'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
import { useMovieStore } from '@/stores/movie';

const store = useMovieStore()
const route = useRoute()
const movie = ref({})
const prop = defineProps(["movie"])
// onMounted(() => {
//     axios({
//         method:'get',
//         url: `${store.API_URL}/api/v1/movies/${route.}`
//     })
    
// })
</script>

<style scoped>

</style>