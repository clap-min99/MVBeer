<template>
  <div>
    <h2>오늘의 추천 주류</h2>
    <div class="recommendation">
      <h3>{{ randomAlcohol.name }}</h3>
      <img :src="randomAlcohol.imageUrl" alt="Alcohol Image" class="alcohol-image" />
      <button @click="getRandomAlcohol">다른 추천 보기</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useAlcoholStore } from '@/stores/alcohol'; // Pinia 스토어 가져오기

const alcoholStore = useAlcoholStore();

// 랜덤 추천 데이터 상태
const randomAlcohol = ref({});

// 모든 주류 데이터를 통합하는 함수
const allAlcohols = ref([]);
const updateAllAlcohols = () => {
  allAlcohols.value = [
    // ...alcoholStore.beers,
    ...alcoholStore.whisky || [],
    ...alcoholStore.wine || [],
    ...alcoholStore.nonalcohol || []
  ];
};

// 랜덤 주류 선택 함수
const getRandomAlcohol = () => {
  if (allAlcohols.value.length > 0) {
    const randomIndex = Math.floor(Math.random() * allAlcohols.value.length);
    randomAlcohol.value = allAlcohols.value[randomIndex];
  }
};

// Pinia 데이터가 준비되면 업데이트
watch(
  () => [alcoholStore.beers, alcoholStore.whisky, alcoholStore.wine, alcoholStore.nonalcohol],
  () => {
    updateAllAlcohols();
    getRandomAlcohol(); // 첫 번째 랜덤 추천 설정
  },
  { immediate: true } // 컴포넌트가 로드될 때 실행
);

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

button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #0056b3;
}
</style>
