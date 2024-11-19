import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useMovieStore = defineStore('movie', () => {

  const movies = ref([ ])

  const API_URL = 'http://127.0.0.1:8000'

  const getMovies = function() {
    axios({
      method: 'get',
      url: `${API_URL}/api/v1/movies`
    })
    .then((res) => {
      movies.value = res.data
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return { getMovies, API_URL }
},{ persist: true})
