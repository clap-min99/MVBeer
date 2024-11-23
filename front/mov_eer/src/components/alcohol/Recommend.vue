<template>
    <div>
      <h2>오늘의 추천 주류</h2>
      <div class="recommendation">
        <h3>{{ randomAlcohol?.name }}</h3>
        <img :src="randomAlcohol.imageUrl" alt="Alcohol Image" class="alcohol-image" />
        <p class="description">{{ randomAlcohol?.description }}</p>
        <p class="region">생산 지역: {{ randomAlcohol?.region }}</p>
        <p class="taste">맛: {{ randomAlcohol?.taste }}</p>
        <button @click="getRandomAlcohol">다른 추천 보기</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useAlcoholStore } from '@/stores/alcohol_select'; // Pinia 스토어 가져오기
  
  // Pinia 스토어 사용
  const alcoholStore = useAlcoholStore();
  
  // 랜덤 주류 데이터 상태
  const randomAlcohol = ref({}); // 초기값
  
  // 모든 주류를 하나의 배열로 합치기
  const allAlcohols = [
    ...alcoholStore.beers,
    ...alcoholStore.whisky || [], // whiskies가 존재하지 않으면 빈 배열 처리
    ...alcoholStore.wine || [], // wines가 존재하지 않으면 빈 배열 처리
  ];
  
  // 랜덤 주류 선택 함수
  const getRandomAlcohol = () => {
    const randomIndex = Math.floor(Math.random() * allAlcohols.length); // 랜덤 인덱스 생성
    randomAlcohol.value = allAlcohols[randomIndex]; // 랜덤 주류 설정
  };
  
  // 컴포넌트 로드 시 초기값 설정
  getRandomAlcohol();
  </script>
  
  <style scoped>
  .recommendation {
    border: 1px solid #ddd;
    padding: 1rem;
    margin-top: 1rem;
    text-align: center;
    background-color: #f9f9f9;
    border-radius: 5px;
  }
  
  .alcohol-image {
    max-width: 100%;
    height: auto;
    margin-top: 1rem;
  }
  
  .description {
    margin-top: 0.5rem;
    font-style: italic;
    color: #666;
  }
  
  .region,
  .taste {
    margin-top: 0.5rem;
    font-weight: bold;
  }
  
  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    background-color: #3b3b3b;
    color: white;
    cursor: pointer;
    border-radius: 5px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  