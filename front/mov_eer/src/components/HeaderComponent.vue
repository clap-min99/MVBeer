<template>
  <div class="header-container">
    <!-- 로고 섹션 -->
    <div class="logo-container">
      <img src="@/assets/image.png" alt="MVBeer Logo" class="logo-image" />
    </div>

    <!-- 검색창 섹션 -->
    <input type="text" placeholder="영화를 검색하세요" class="search-bar" />
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
/* 헤더 전체 컨테이너 */
.header-container {
  display: flex;
  justify-content: space-between; /* 로고와 검색창을 양쪽 끝으로 배치 */
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
