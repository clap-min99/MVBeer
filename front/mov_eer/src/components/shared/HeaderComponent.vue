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
      <!-- Beer 드롭다운 -->
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

      <!-- Whiskey 드롭다운 -->
      <div class="dropdown">
        <RouterLink to="/whiskey" class="nav-link">Whiskey</RouterLink>
        <ul class="dropdown-menu">
          <li><RouterLink to="/blended" class="dropdown-item">Blended</RouterLink></li>
          <li><RouterLink to="/scotch" class="dropdown-item">Scotch</RouterLink></li>
          <li><RouterLink to="/irish" class="dropdown-item">Irish</RouterLink></li>
          <li><RouterLink to="/bourbon" class="dropdown-item">Bourbon</RouterLink></li>
          <li><RouterLink to="/rye" class="dropdown-item">Rye</RouterLink></li>
          <li><RouterLink to="/tennessee" class="dropdown-item">Tennessee</RouterLink></li>
          <li><RouterLink to="/japanese" class="dropdown-item">Japanese</RouterLink></li>
          <li><RouterLink to="/singlemalt" class="dropdown-item">SingleMalt</RouterLink></li>
        </ul>
      </div>

      <!-- Wine 드롭다운 -->
      <div class="dropdown">
        <RouterLink to="/wine" class="nav-link">Wine</RouterLink>
        <ul class="dropdown-menu horizontal">
          <li><RouterLink to="/red" class="dropdown-item">Red</RouterLink></li>
          <li><RouterLink to="/white" class="dropdown-item">White</RouterLink></li>
          <li><RouterLink to="/rose" class="dropdown-item">Rosé</RouterLink></li>
          <li><RouterLink to="/sparkling" class="dropdown-item">Sparkling</RouterLink></li>
          <li><RouterLink to="/natural" class="dropdown-item">Natural</RouterLink></li>
        </ul>
      </div>
    </div>

    <!-- 검색창 섹션 -->

    <div class="search-container">
    <input
      type="text"
      v-model="searchQuery"
      placeholder="검색어를 입력하세요"
      class="search-bar"
    />
    <div>
      <!-- 검색 이미지 -->
      <img
        src="@/assets/wine_image.png"
        alt="MVBeer Logo"
        class="wine-image"
        @click="handleSearch" 
      />
      <div v-if="searchResults.length" class="search-results">
        <ul>
          <li v-for="(result, index) in searchResults" :key="index" class="search-result-item">
            {{ result.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>

    <!-- 로그인 섹션 -->
    <div class="auth-container">
      <template v-if="!isLogin">
        <!-- 로그인 이미지 -->
        <img
          src="@/assets/login.png"
          alt="Login"
          class="auth-image"
          @click="navigateTo('LoginView')"
        />
        <!-- 회원가입 이미지 -->
        <!-- <img
          src="@/assets/signup_image.png"
          alt="Sign Up"
          class="auth-image"
          @click="navigateTo('SignUpView')"
        /> -->
      </template>
      <template v-else>
        <!-- 로그아웃 이미지 -->
        <img
          src="@/assets/logout.png"
          alt="Logout"
          class="auth-image"
          @click="logOut"
        />
      </template>
    </div>
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
const searchQuery = ref('');
const searchResults = ref([]);

// 검색 버튼 클릭 시 결과 페이지로 이동하는 함수
const handleSearch = () => {
  if (!searchQuery.value.trim()) {
    alert('검색어를 입력해주세요.');
    return;
  }

  // 검색어와 함께 SearchResultsView로 이동
  router.push({ 
    name: 'SearchResultsView', 
    query: { q: searchQuery.value } // 검색어를 쿼리로 전달
  });
};

// 로그인/회원가입 페이지로 이동하는 함수
const navigateTo = (viewName) => {
  router.push({ name: viewName });
};

// 검색 API 호출 함수
// const handleSearch = () => {
//   // 검색어가 비어있으면 결과 초기화
//   if (!searchQuery.value.trim()) {
//     searchResults.value = [];
//     return;
//   }

//   // Axios를 사용하여 영화 검색 API 호출
//   axios({
//     method: 'get',
//     url: `${API_URL}/api/v1/movies/search/`, // API 엔드포인트
//     params: { q: searchQuery.value } // 검색어를 쿼리 파라미터로 전달
//   })
//   .then((res) => {
//     searchResults.value = res.data || []; // 검색 결과 저장
//     console.log("Search Query:", searchQuery.value);
//     console.log("Search Results:", searchResults.value);
//   })
//   .catch((err) => {
//     console.log("검색 실패:", err); // 에러 처리
//     searchResults.value = []; // 에러 발생 시 결과 초기화
//   });
// };
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
  display: flex;
  align-items: center;
}

.search-bar {
  width: 100%;
  padding: 8px 10px;
  font-size: 1rem;
  border: 1px solid #444;
  border-radius: 4px;
  background-color: #3b3b3b;
  color: #f8f8f8;
  margin-right: 10px;
}

.search-bar::placeholder {
  color: #bfbfbf;
}

button {
  padding: 8px 10px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #ee9191;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #f1c40f;
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

.wine-image {
  width: 30px; /* 로고 크기 */
  height: auto;
}

.auth-image {
  width: 40px; /* 로그인/회원가입/로그아웃 이미지 크기 */
  height: auto;
  cursor: pointer;
}
</style>
