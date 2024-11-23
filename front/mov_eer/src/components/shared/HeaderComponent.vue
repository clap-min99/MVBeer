<template>
  <div class="header-container">
    <!-- 로고 섹션 -->
    <div class="logo-container">
      <img src="@/assets/image.png" alt="MVBeer Logo" class="logo-image" />
    </div>

    <!-- 네비게이션 섹션 -->
    <div class="nav-container">
      <RouterLink to="/beer" class="nav-link">Beer</RouterLink>
      <RouterLink to="/whiskey" class="nav-link">Whiskey</RouterLink>
      <RouterLink to="/wine" class="nav-link">Wine</RouterLink>
    </div>

    <!-- 검색창 섹션 -->
    <input type="text" placeholder="영화를 검색하세요" class="search-bar" />
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  name: "Header",
};
</script>

<style scoped>
/* 헤더 전체 컨테이너 */
.header-container {
  display: flex;
  justify-content: space-between; /* 로고, 네비게이션, 검색창을 양쪽 끝으로 배치 */
  align-items: center;
  padding: 10px 20px; /* 내부 여백 */
  background-color: #f8f8f8; /* 배경색 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 가벼운 그림자 효과 */
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
  color: #333;
  font-size: 1rem;
  font-weight: bold;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #007bff; /* 링크 호버 효과 */
}

/* 검색창 */
.search-bar {
  flex-grow: 1; /* 검색창 크기를 유연하게 */
  max-width: 300px; /* 검색창 최대 너비 */
  padding: 8px 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;

}
</style>
