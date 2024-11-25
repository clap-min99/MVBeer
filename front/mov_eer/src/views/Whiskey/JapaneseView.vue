<template>
    <div class="japanese-whiskey-view">
      <h1>🥃 Japanese 위스키</h1>
      <div class="whiskey-intro">
        <img
          src="@/assets/JapaneseWhiskey.png"
          alt="Japanese Whiskey"
          class="whiskey-image"
        />
        <div class="whiskey-description">
          <p>
            <strong>Japanese 위스키</strong>는 섬세함과 정교함을 자랑하며,
            일본 특유의 전통과 현대 기술이 융합된 독특한 맛을 제공합니다.
            야마자키(Yamazaki), 하쿠슈(Hakushu), 니카(Nikka)와 같은 브랜드는 세계적으로 찬사를 받고 있습니다.
          </p>
          <p>
            일본 위스키는 자몽이나 레몬 껍질의 상쾌한 향, 가벼운 바닐라와 꿀의 단맛,
            그리고 은은한 스모키함이 조화롭게 어우러져 있습니다.
            식사 후 디저트와 잘 어울리며, 온더락이나 하이볼로 즐기기에 적합합니다.
          </p>
          <p class="japanese-war-pairing">
            🎖️ Japanese 위스키는 War(전쟁) 영화와 잘 어울립니다.
            강렬하고 깊이 있는 스토리라인을 따라, 섬세한 Japanese 위스키를 한 모금씩 음미하며 영화의 감동을 느껴보세요.
          </p>
        </div>
      </div>
  
      <div class="whiskey-list">
        <h2>추천 Japanese 위스키</h2>
        <div class="whiskey-card-container">
          <div v-for="whiskey in whiskeys" :key="whiskey.id" class="whiskey-card">
            <h3>{{ whiskey.name }}</h3>
            <p>{{ whiskey.description }}</p>
            <p><strong>대표 브랜드:</strong> {{ whiskey.representativeBrands }}</p>
            <p><strong>추천 페어링:</strong> {{ whiskey.foodPairing }}</p>
            <p>
              <span>{{ whiskey.foodEmoji }}</span>
            </p>
          </div>
        </div>
      </div>
  
      <div class="movies-scroll">
        <h2>페어링 with Japanese Whiskey 🎖️</h2>
        <div class="movie-card-container">
          <div
            v-for="movie in getWhiskeyMovies('Japanese')" 
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
  
  const whiskeys = [
    {
      id: 1,
      name: "Yamazaki Single Malt",
      description: "일본 최초의 싱글 몰트 위스키로, 부드럽고 깊이 있는 풍미를 자랑합니다.",
      representativeBrands: "Suntory Yamazaki, Hakushu",
      foodPairing: "스시, 사시미",
      foodEmoji: "🍣🍤"
    },
    {
      id: 2,
      name: "Nikka From The Barrel",
      description: "강렬한 향과 복잡한 맛이 어우러진 니카의 대표 위스키.",
      representativeBrands: "Nikka",
      foodPairing: "그릴드 스테이크, 다크 초콜릿",
      foodEmoji: "🥩🍫"
    },
    {
      id: 3,
      name: "Hibiki Harmony",
      description: "다양한 몰트를 혼합하여 균형 잡힌 맛과 향을 자랑하는 하모니 블렌드.",
      representativeBrands: "Suntory Hibiki",
      foodPairing: "치즈 플래터, 훈제 연어",
      foodEmoji: "🧀🐟"
    }
  ];
  
  const liquorStore = useLiquorStore();
  const movieStore = useMovieStore();
  
  onMounted(() => {
    liquorStore.getWhiskeys();
    movieStore.getMovies();
    movieStore.getGenres();
  });
  
  const getWhiskeyMovies = (subtype) => {
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
  /* Japanese 위스키 스타일 */
  .japanese-whiskey-view {
    padding: 20px;
    background-color: #f9f9f9;
    font-family: Arial, sans-serif;
  }
  
  h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
  }
  
  .whiskey-intro {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
  }
  
  .whiskey-image {
    width: 300px;
    height: auto;
    margin-right: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .whiskey-description {
    color: #555;
    font-size: 16px;
    line-height: 1.8;
    flex: 1;
  }
  
  .japanese-war-pairing {
    margin-top: 20px;
    font-style: italic;
    color: #444;
    font-size: 15px;
  }
  
  .whiskey-list h2 {
    color: #444;
    margin-bottom: 20px;
  }
  
  .whiskey-card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .whiskey-card {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 20px;
    width: 20%;
    min-width: 250px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .whiskey-card:hover {
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
  