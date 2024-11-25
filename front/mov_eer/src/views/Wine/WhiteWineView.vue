<template>
    <div class="white-wine-view">
      <h1>🍷 White 와인</h1>
      <div class="wine-intro">
        <img
          src="@/assets/WhiteWine.png"
          alt="White Wine"
          class="wine-image"
        />
        <div class="wine-description">
          <p>
            <strong>White 와인</strong>은 주로 백포도 또는 껍질을 제거한 포도를 발효하여 만들어지며,
            상쾌하고 산뜻한 맛이 특징입니다. 주로 해산물, 가벼운 치즈, 샐러드와 같은 요리와 완벽한 조화를 이룹니다.
          </p>
          <p>
            샤르도네(Chardonnay), 소비뇽 블랑(Sauvignon Blanc), 리슬링(Riesling) 등
            대표적인 품종을 통해 다채로운 향과 맛을 경험할 수 있습니다.
            White 와인은 따뜻한 여름날, 또는 음악과 함께 분위기를 돋우기 위한 완벽한 선택입니다.
          </p>
          <p class="white-music-pairing">
            🎵 White 와인은 Music(음악) 장르와 잘 어울립니다.
            청량한 와인 한 잔과 함께 마음을 울리는 선율을 즐겨보세요.
          </p>
        </div>
      </div>
  
      <div class="wine-list">
        <h2>추천 White 와인 리스트</h2>
        <div class="wine-card-container">
          <div v-for="wine in wines" :key="wine.id" class="wine-card">
            <h3>{{ wine.name }}</h3>
            <p>{{ wine.description }}</p>
            <p><strong>대표 브랜드:</strong> {{ wine.representativeBrands }}</p>
            <p><strong>추천 안주:</strong> {{ wine.foodPairing }}</p>
            <p>
              <span>{{ wine.foodEmoji }}</span>
            </p>
          </div>
        </div>
      </div>
  
      <div class="movies-scroll">
        <h2>페어링 with White 🍷</h2>
        <div class="movie-card-container">
          <div
            v-for="movie in getWineMovies('White')" 
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
  
  const wines = [
    {
      id: 1,
      name: "Chardonnay",
      description: "풍부한 과일 향과 부드러운 맛이 특징인 화이트 와인.",
      representativeBrands: "Kendall-Jackson, Robert Mondavi",
      foodPairing: "구운 닭고기, 크림 소스 파스타",
      foodEmoji: "🍗🍝"
    },
    {
      id: 2,
      name: "Sauvignon Blanc",
      description: "상큼한 산미와 허브 향이 돋보이는 와인.",
      representativeBrands: "Cloudy Bay, Kim Crawford",
      foodPairing: "샐러드, 해산물",
      foodEmoji: "🥗🦞"
    },
    {
      id: 3,
      name: "Riesling",
      description: "달콤한 맛과 함께 높은 산미를 지닌 화이트 와인.",
      representativeBrands: "Dr. Loosen, Chateau Ste. Michelle",
      foodPairing: "매운 음식, 디저트",
      foodEmoji: "🌶️🍨"
    }
  ];
  
  const liquorStore = useLiquorStore();
  const movieStore = useMovieStore();
  
  onMounted(() => {
    liquorStore.getWines();
    movieStore.getMovies();
    movieStore.getGenres();
  });
  
  const getWineMovies = (subtype) => {
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
  /* White 와인 스타일 */
  .white-wine-view {
    padding: 20px;
    background-color: #f9f9f9;
    font-family: Arial, sans-serif;
  }
  
  h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
  }
  
  .wine-intro {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
  }
  
  .wine-image {
    width: 300px;
    height: auto;
    margin-right: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .wine-description {
    color: #555;
    font-size: 16px;
    line-height: 1.8;
    flex: 1;
  }
  
  .white-music-pairing {
    margin-top: 20px;
    font-style: italic;
    color: #444;
    font-size: 15px;
  }
  
  .wine-list h2 {
    color: #444;
    margin-bottom: 20px;
  }
  
  .wine-card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .wine-card {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 20px;
    width: 20%;
    min-width: 250px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .wine-card:hover {
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
  