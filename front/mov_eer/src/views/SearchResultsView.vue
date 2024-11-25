<template>
    <div class="search-results-page">
      <h2>"{{ searchQuery }}"에 대한 검색 결과</h2>
      <div v-if="loading">검색 중...</div>
      <div v-else-if="searchResults.length">
        <ul>
          <li v-for="(result, index) in searchResults" :key="index">
            {{ result }}
          </li>
        </ul>
      </div>
      <div v-else>
        <p>검색 결과가 없습니다.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import axios from 'axios';
  
  // API URL 정의
  const API_URL = 'http://127.0.0.1:8000'; // API 기본 URL
  
  // 상태 정의
  const route = useRoute();
  const searchQuery = ref(route.query.q || '');
  const searchResults = ref([]);
  const loading = ref(false);
  
  // 검색 API 호출 함수
  const fetchSearchResults = async () => {
    if (!searchQuery.value.trim()) {
      return;
    }
  
    loading.value = true;
  
    try {
      // Axios를 사용해 API 호출
      const response = await axios({
        method: 'get',
        url: `${API_URL}/api/v1/movies/search/`,
        params: { q: searchQuery.value }
      });
      searchResults.value = response.data || [];
    } catch (error) {
      console.error("검색 실패:", error);
      searchResults.value = [];
    } finally {
      loading.value = false;
    }
  };
  
  // 컴포넌트가 마운트되었을 때 검색 API 호출
  onMounted(() => {
    fetchSearchResults();
  });
  </script>
  
  <style scoped>
  .search-results-page {
    padding: 20px;
  }
  
  h2 {
    color: #ee9191;
    margin-bottom: 20px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    padding: 10px;
    background-color: #2e2e2e;
    color: #fff;
    margin-bottom: 10px;
    border-radius: 4px;
  }
  
  li:hover {
    background-color: #444;
  }
  </style>
  