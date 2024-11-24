<template>
    <div class="red-wine-view">
      <h1>🍷 Red 와인</h1>
      <div class="wine-intro">
        <img
          src="@/assets/RedWine.png"
          alt="Red Wine"
          class="wine-image"
        />
        <div class="wine-description">
          <p>
            <strong>Red 와인</strong>은 포도의 껍질과 함께 발효되어 풍부한 색감과 깊은 풍미를 지닌 와인입니다.
            다양한 품종과 지역적 특성에 따라 고유한 향과 맛을 가지고 있으며, 대개 육류와 잘 어울리는 와인으로 알려져 있습니다.
          </p>
          <p>
            레드 와인은 그 자체로도 훌륭하지만, 특별한 저녁식사나 감동적인 드라마를 감상할 때 더욱 빛을 발합니다.
            피노 누아(Pinot Noir), 카베르네 소비뇽(Cabernet Sauvignon), 멀롯(Merlot) 등이 대표적인 레드 와인 품종입니다.
          </p>
          <p class="red-drama-pairing">
            🍿 Red 와인은 Drama(드라마) 장르와 잘 어울립니다.
            깊이 있는 와인의 풍미는 감동적인 이야기와 완벽한 조화를 이룹니다. 와인 한 잔과 함께 진한 여운을 즐겨보세요.
          </p>
        </div>
      </div>
  
      <div class="wine-list">
        <h2>추천 Red 와인 리스트</h2>
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
        <h2>페어링 with Red 🍷</h2>
        <div class="movie-card-container">
          <div
            v-for="movie in getWineMovies('Red')" 
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
      name: "Cabernet Sauvignon",
      description: "풍부한 타닌과 블랙베리 향이 돋보이는 풀바디 와인.",
      representativeBrands: "Robert Mondavi, Penfolds",
      foodPairing: "스테이크, 양고기",
      foodEmoji: "🥩🐑"
    },
    {
      id: 2,
      name: "Pinot Noir",
      description: "부드럽고 과일 향이 강한 미디엄 바디 와인.",
      representativeBrands: "Louis Jadot, Cloudy Bay",
      foodPairing: "구운 연어, 치즈 플래터",
      foodEmoji: "🐟🧀"
    },
    {
      id: 3,
      name: "Merlot",
      description: "매끄럽고 부드러운 구조를 가진 와인으로 초보자에게 적합.",
      representativeBrands: "Duckhorn, Chateau Petrus",
      foodPairing: "치즈 플래터, 초콜릿 디저트",
      foodEmoji: "🧀🍫"
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
  /* Red 와인 스타일 */
  .red-wine-view {
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
  
  .red-drama-pairing {
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
  