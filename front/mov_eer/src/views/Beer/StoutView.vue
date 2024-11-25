<template>
  <div class="stout-view">
    <h1>🍺 스타우트(Stout)</h1>
    <div class="stout-intro">
      <img
        src="@/assets/Stout.png"
        alt="Stout Beer"
        class="stout-image"
      />
      <div class="stout-description">
        <p>
          <strong>스타우트(Stout)</strong>는 어두운 색상과 깊은 풍미가 특징인 상면 발효 맥주입니다.
          일반적으로 초콜릿, 커피, 카라멜의 맛과 향이 느껴지며, 부드러운 질감과 진한 몰트의 맛을 제공합니다.
        </p>
        <p>
          스타우트는 처음에는 강한 포터(Porter)에서 유래했으며, 이후 진한 맛과 고급스러운 풍미로 독자적인 맥주 스타일로 자리 잡았습니다.
          차분한 분위기에서 느긋하게 즐기기에 적합하며, 특히 겨울철 따뜻한 순간을 더해줍니다.
        </p>
        <p class="stout-horror-pairing">
          🍿 스타우트는 호러 영화와 완벽한 페어링을 자랑합니다.
          진하고 어두운 스타우트의 맛은 영화 속의 긴장감과 스릴을 한층 더 극대화시켜줍니다.
          한 모금의 스타우트와 함께 소름 돋는 장면을 감상해보세요!
        </p>
      </div>
    </div>

    <div class="beer-list">
      <h2>스타우트 맥주 리스트</h2>
      <div class="beer-card-container">
        <div v-for="beer in beers" :key="beer.id" class="beer-card">
          <h3>{{ beer.name }}</h3>
          <p>{{ beer.description }}</p>
          <p><strong>대표 브랜드:</strong> {{ beer.representativeBrands }}</p>
          <p><strong>스타일:</strong> {{ beer.style }}</p>
          <p>
            <strong>추천 안주:</strong> {{ beer.foodPairing }}
            <span>{{ beer.foodEmoji }}</span>
          </p>
        </div>
      </div>
    </div>

    <div class="movies-scroll">
      <h2>페어링 with 스타우트🍺</h2>
      <div class="movie-card-container">
        <div
          v-for="movie in getBeerMovies('Stout')" 
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

const beers = [
  {
    id: 1,
    name: "기네스 드래프트 (Guinness Draught)",
    description: "부드럽고 크리미한 질감과 초콜릿, 커피의 풍미가 돋보이는 스타우트.",
    representativeBrands: "Guinness, Left Hand Milk Stout",
    style: "Dry Stout",
    foodPairing: "굴, 초콜릿 디저트",
    foodEmoji: "🦪🍫"
  },
  {
    id: 2,
    name: "임페리얼 스타우트 (Imperial Stout)",
    description: "진한 몰트와 높은 알코올 도수가 특징인 고급 스타우트.",
    representativeBrands: "North Coast Old Rasputin, Founders KBS",
    style: "Imperial Stout",
    foodPairing: "스테이크, 블루 치즈",
    foodEmoji: "🥩🧀"
  },
  {
    id: 3,
    name: "밀크 스타우트 (Milk Stout)",
    description: "부드러운 질감과 달콤한 풍미를 제공하는 스타우트.",
    representativeBrands: "Left Hand Milk Stout, Mackeson",
    style: "Milk Stout",
    foodPairing: "바닐라 아이스크림, 카라멜 디저트",
    foodEmoji: "🍦🍮"
  }
];

const liquorStore = useLiquorStore();
const movieStore = useMovieStore();

onMounted(() => {
  liquorStore.getBeers();
  movieStore.getMovies();
  movieStore.getGenres();
});

const getBeerMovies = (subtype) => {
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
/* 스타우트 페이지 스타일 */
.stout-view {
  padding: 20px;
  background-color: #1e1e1e; /* 어두운 배경색 */
  color: #e8e8e8; /* 기본 텍스트 색상 */
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #ffffff;
  margin-bottom: 30px;
}

.stout-intro {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}

.stout-image {
  width: 300px;
  height: auto;
  margin-right: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5); /* 그림자 어둡게 */
}

.stout-description {
  font-size: 16px;
  line-height: 1.8;
  flex: 1;
}

.stout-horror-pairing {
  margin-top: 20px;
  color: #dddddd; /* 밝은 회색 텍스트 */
  font-size: 15px;
}

/* 맥주 리스트 섹션 */
.beer-list h2 {
  color: #ffffff;
  margin-bottom: 20px;
}

.beer-card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.beer-card {
  background-color: #333333; /* 어두운 카드 배경색 */
  color: #ffffff; /* 밝은 텍스트 색상 */
  border-radius: 8px;
  padding: 20px;
  width: 20%;
  min-width: 250px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  transition: transform 0.2s, box-shadow 0.2s;
}

.beer-card:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.7);
}

/* 영화 페어링 섹션 */
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
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.7); /* 어두운 그림자 */
}

.movie-title {
  margin-top: 10px;
  font-size: 14px;
  color: #ffffff; /* 밝은 텍스트 색상 */
}
</style>
