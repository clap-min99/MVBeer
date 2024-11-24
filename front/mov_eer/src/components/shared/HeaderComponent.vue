<template>
  <div class="header-container">
    <!-- 로고 섹션 -->
    <div class="logo-container">
      <RouterLink :to="{ name: 'MainView' }">
        <img src="@/assets/logo_white.png" alt="MVBeer Logo" class="logo-image" />
      </RouterLink>
    </div>

    <!-- 네비게이션 섹션 -->
    <div class="nav-container">
      <div class="dropdown">
        <RouterLink to="/beer" class="nav-link">Beer</RouterLink>
        <ul class="dropdown-menu">
          <li><RouterLink to="/ale" class="dropdown-item">Ale</RouterLink></li>
          <li><RouterLink to="/lager" class="dropdown-item">Lager</RouterLink></li>
          <li><RouterLink to="/pilsner" class="dropdown-item">Pilsner</RouterLink></li>
          <li><RouterLink to="/stout" class="dropdown-item">Stout</RouterLink></li>
          <li><RouterLink to="/wheat" class="dropdown-item">Wheat</RouterLink></li>
        </ul>
      </div>
      <RouterLink to="/whiskey" class="nav-link">Whiskey</RouterLink>
      <RouterLink to="/wine" class="nav-link">Wine</RouterLink>
    </div>

  <!-- 검색창 섹션 -->
  <div class="search-container">
    <input
      type="text"
      v-model="searchQuery"
      placeholder="영화를 검색하세요"
      @input="searchMovies"
      class="search-bar"
    />
    <!-- 검색 결과 -->
    <div v-if="searchResults && searchResults.length > 0" class="search-results">
      <ul>
        <li v-for="movie in searchResults" :key="movie.id" class="search-result-item">
          <RouterLink :to="{ name: 'MovieDetailView', params: { movieId: movie.id } }">
            {{ movie.title }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>


    <!-- 로그인 섹션 -->
    <template v-if="!isLogin">
      <RouterLink :to="{ name: 'LoginView' }">로그인</RouterLink>
      <span> | </span>
      <RouterLink :to="{ name: 'SignUpView' }">회원가입</RouterLink>
    </template>
    <template v-else>
      <button @click="logOut">로그아웃</button>
    </template>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useLogStore } from '@/stores/log';
import { useRouter } from 'vue-router';
import axios from 'axios';



// Pinia와 라우터 연결
const logStore = useLogStore();
const router = useRouter();

// 로그인 상태 계산
const isLogin = computed(() => logStore.isLogin);

// 로그아웃 함수
const logOut = () => {
  logStore.logOut();
  alert("로그아웃 되었습니다.");
  router.push({ name: 'MainView' });
};

// 상태 정의
const searchQuery = ref('')
const searchResults = ref([])
const API_URL = 'http://127.0.0.1:8000'; // API 기본 URL

// 검색 API 호출 함수
const searchMovies = function() {
  // 검색어가 비어있으면 결과 초기화
  if (!searchQuery.value.trim()) {
    searchResults.value = [];
    return;
  }

  // Axios를 사용하여 영화 검색 API 호출
  axios({
    method: 'get',
    url: `${API_URL}/api/v1/movies/search/`, // API 엔드포인트
    params: { q: searchQuery.value } // 검색어를 쿼리 파라미터로 전달
  })
  .then((res) => {
    searchResults.value = res.data || []; // 검색 결과 저장
  })
  .catch((err) => {
    console.log("검색 실패:", err); // 에러 처리
    searchResults.value = []; // 에러 발생 시 결과 초기화
  });
  console.log("Search Query:", searchQuery.value);
  console.log("Search Results:", searchResults.value);

};

</script>


<style scoped>
/* 헤더 전체 컨테이너 */
.header-container {
  display: flex;
  justify-content: space-between; /* 로고, 네비게이션, 검색창을 양쪽 끝으로 배치 */
  align-items: center;
  padding: 10px 20px; /* 내부 여백 */
  background-color: #2e2e2e; /* 다크그레이 배경색 */
}

/* 로고 섹션 */
.logo-container {
  display: flex;
  align-items: center; /* 로고를 수직 정렬 */
}

/* 로고 이미지 */
.logo-image {
  width: 120px; /* 로고 크기 */
  height: auto;
}

/* 네비게이션 섹션 */
.nav-container {
  display: flex;
  gap: 60px; /* 네비게이션 아이템 간 간격 */
  margin-right: 20px; /* 검색창과 네비게이션 간 간격 */
}

/* 네비게이션 링크 */
.nav-link {
  text-decoration: none;
  color: #ee9191; /* 밝은 색상으로 링크 표시 */
  font-size: 1.5rem;
  font-weight: bold;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #f1c40f; /* 링크 호버 효과: 따뜻한 노란색 */
}

/* 드롭다운 메뉴 */
.dropdown {
  position: relative;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #3b3b3b; /* 드롭다운 배경색 */
  list-style: none;
  padding: 10px 0;
  margin: 0;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-item {
  padding: 8px 20px;
  text-decoration: none;
  color: #f8f8f8;
  display: block;
}

.dropdown-item:hover {
  background-color: #555; /* 호버 시 배경색 변경 */
  color: #f1c40f;
}

/* 검색창 */
.search-container {
  position: relative;
  flex-grow: 1;
  max-width: 300px;
}

.search-bar {
  width: 100%;
  padding: 8px 10px;
  font-size: 1rem;
  border: 1px solid #444;
  border-radius: 4px;
  background-color: #3b3b3b;
  color: #f8f8f8;
}

.search-bar::placeholder {
  color: #bfbfbf;
}

/* 검색 결과 */
.search-results {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #2e2e2e;
  border: 1px solid #444;
  border-radius: 4px;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  max-height: 200px;
  overflow-y: auto;
}

.search-result-item {
  padding: 10px;
  color: #fff;
  text-decoration: none;
}

.search-result-item:hover {
  background-color: #444;
  cursor: pointer;
}
</style>
