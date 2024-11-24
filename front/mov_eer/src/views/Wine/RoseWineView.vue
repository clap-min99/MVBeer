<template>
    <div class="rose-wine-view">
      <h1>🌹 Rosé 와인</h1>
      <div class="wine-intro">
        <img
          src="@/assets/RoseWine.png"
          alt="Rosé Wine"
          class="wine-image"
        />
        <div class="wine-description">
          <p>
            <strong>Rosé 와인</strong>은 붉은 포도 껍질과 짧은 시간 동안 접촉하여 만들어지며,
            밝은 핑크빛이 특징입니다. 가볍고 상쾌하며 과일향이 풍부하여 따뜻한 날씨에 적합한 와인입니다.
          </p>
          <p>
            프랑스의 프로방스 지역이 Rosé 와인의 중심지로, 이 지역에서 생산된 Rosé는 
            그 고유의 청량감과 부드러운 풍미로 전 세계에서 사랑받고 있습니다.
          </p>
          <p class="rose-romance-pairing">
            💕 Rosé 와인은 Romance(로맨스) 영화와 완벽한 조화를 이룹니다.
            와인의 섬세한 맛과 향이 영화 속 사랑 이야기에 감미로움을 더해줍니다.
            Rosé 한 잔과 함께 따뜻한 감성을 느껴보세요!
          </p>
        </div>
      </div>
  
      <div class="wine-list">
        <h2>추천 Rosé 와인 리스트</h2>
        <div class="wine-card-container">
          <div v-for="wine in wines" :key="wine.id" class="wine-card">
            <h3>{{ wine.name }}</h3>
            <p>{{ wine.description }}</p>
            <p><strong>대표 브랜드:</strong> {{ wine.representativeBrands }}</p>
            <p><strong>추천 페어링:</strong> {{ wine.foodPairing }}</p>
            <p>
              <span>{{ wine.foodEmoji }}</span>
            </p>
          </div>
        </div>
      </div>
  
      <div class="movies-scroll">
        <h2>페어링 with Rosé Wine 💕</h2>
        <div class="movie-card-container">
          <div
            v-for="movie in getWineMovies('Rosé')" 
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
      name: "Whispering Angel",
      description: "프랑스 프로방스 지역에서 생산된 부드럽고 섬세한 Rosé.",
      representativeBrands: "Château d'Esclans",
      foodPairing: "과일 샐러드, 연어 요리",
      foodEmoji: "🍓🐟"
    },
    {
      id: 2,
      name: "Miraval Rosé",
      description: "브래드 피트와 안젤리나 졸리가 소유한 와이너리에서 탄생한 유명한 Rosé.",
      representativeBrands: "Miraval",
      foodPairing: "치즈 플래터, 조개 요리",
      foodEmoji: "🧀🦪"
    },
    {
      id: 3,
      name: "The Palm by Whispering Angel",
      description: "가볍고 산뜻한 Rosé로 여름철에 완벽한 선택.",
      representativeBrands: "Château d'Esclans",
      foodPairing: "가벼운 샐러드, 크로스티니",
      foodEmoji: "🥗🍞"
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
  /* Rosé 와인 스타일 */
  .rose-wine-view {
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
  
  .rose-romance-pairing {
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
  