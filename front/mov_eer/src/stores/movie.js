import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useRouter } from 'vue-router'


export const useMovieStore = defineStore('movie', () => {

  
  const movies = ref([ ]) // 전체영화목록 
  const movie_detail = ref(null) // 단일 영화 상세
  const API_URL = 'http://127.0.0.1:8000'

  const router = useRouter()

  // 전체 영화 목록
  const getMovies = function() {
    axios({
      method: 'get',
      url: `${API_URL}/api/v1/movies/`
    })
    .then((res) => {
      movies.value = res.data
    })
    .catch((err) => {
      console.log(err)
    })
  }

  // 영화 상세
  const getMovie = function(moviePk) {
    axios({
      method: 'get',
      url: `${API_URL}/api/v1/movies/${moviePk}`
    })
    .then((res) => {
      movie_detail.value = res.data
    })
    .catch((err) => {
      console.log(err)
    })
  }


  return { movies, getMovies, API_URL, getMovie, movie_detail}
},{ persist: true })
