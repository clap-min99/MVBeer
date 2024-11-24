<template>
  <div class="lager-view">
    <h1>🍺 라거(Lager)</h1>
    <div class="lager-intro">
      <img
        src="@/assets/Lager.png"
        alt="Lager Beer"
        class="lager-image"
      />
      <div class="lager-description">
  <p>
    <strong>라거(Lager)</strong>는 하부 발효 방식으로 만들어지는 맥주로, 비교적 낮은 온도에서 발효되어
    깨끗하고 청량한 맛이 특징입니다. 
    라거는 전 세계적으로 가장 소비되는 맥주 스타일로, 부드럽고 깔끔한 맛 덕분에 많은 사람들이 즐길 수 있는 맥주입니다.
  </p>
  <p>
    라거는 단순히 청량함뿐만 아니라 각 지역에서 독특한 스타일로 변주되었습니다.
    예를 들어, 독일의 헬레스(Helles)는 부드러운 몰트 맛과 은은한 홉 향으로 사랑받으며,
    미국의 아메리칸 라거(American Lager)는 깔끔하고 가벼운 바디감으로 일상적인 음료로 즐겨집니다.
  </p>
  <p>
    라거는 다양한 상황에 어울립니다. 스포츠 경기 관람, 여유로운 바비큐 파티, 혹은 긴 하루를 마무리하며
    가볍게 즐기기에 완벽한 동반자입니다. 
    또한, 치킨, 버거, 감자튀김과 같은 대중적인 음식과 훌륭한 페어링을 자랑합니다.
  </p>
  <p class="lager-comedy-pairing">
    🍿 라거는 코미디 영화와 잘 어울립니다.
    상쾌한 라거 한 모금은 가벼운 웃음과 함께 여유로운 순간을 더해줍니다.
    친구들과 라거를 즐기며 영화 속 웃음 가득한 장면을 감상해보세요!
  </p>
</div>
    </div>

    <div class="beer-list">
      <!-- <h2>라거 맥주 리스트</h2> -->
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
      <h2>페어링 with 라거🍺</h2>
      <div class="movie-card-container">
        <div
          v-for="movie in getBeerMovies('Lager')" 
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
  name: "엠버 라거 (Amber Lager)",
  description: "풍부한 몰트 맛과 은은한 카라멜 향이 특징인 라거 스타일.",
  representativeBrands: "Samuel Adams Boston Lager, Yuengling Traditional Lager",
  style: "Amber Lager",
  foodPairing: "바비큐, 구운 고기 요리",
  foodEmoji: "🍖🍗"
},
  {
    id: 2,
    name: "둔켈 (Dunkel)",
    description: "깊은 몰트 풍미와 부드러운 맛이 특징인 독일 라거.",
    representativeBrands: "Paulaner Dunkel, Ayinger Altbairisch Dunkel",
    style: "Dunkel",
    foodPairing: "소시지, 브렛첼",
    foodEmoji: "🌭🥨"
  },
  {
    id: 3,
    name: "헬레스 (Helles)",
    description: "밝고 부드러운 맛을 가진 독일식 라거.",
    representativeBrands: "Augustiner Helles, Hofbräu Original",
    style: "Helles",
    foodPairing: "치킨, 감자튀김",
    foodEmoji: "🍗🍟"
  },
  {
    id: 4,
    name: "보크 (Bock)",
    description: "진한 몰트 풍미와 약간의 단맛이 느껴지는 강한 라거.",
    representativeBrands: "Weihenstephaner Vitus, Einbecker Ur-Bock",
    style: "Bock",
    foodPairing: "스튜, 치즈 플래터",
    foodEmoji: "🍲🧀"
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
/* 기존 에일 스타일을 라거에 적용 */
.lager-view {
  padding: 20px;
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

.lager-intro {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}

.lager-image {
  width: 300px;
  height: auto;
  margin-right: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.lager-description {
  color: #555;
  font-size: 16px;
  line-height: 1.8;
  flex: 1;
}

.lager-comedy-pairing {
  margin-top: 20px;
  font-style: italic;
  color: #444;
  font-size: 15px;
}

.beer-list h2 {
  color: #444;
  margin-bottom: 20px;
}

.beer-card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.beer-card {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  width: 20%;
  min-width: 250px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.beer-card:hover {
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
