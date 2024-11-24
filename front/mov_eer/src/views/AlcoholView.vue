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
  border: 1px solid #444; /* 테두리를 어둡게 */
  padding: 1rem;
  margin-top: 1rem;
  text-align: center;
  background-color: #2e2e2e; /* 다크그레이 배경 */
  border-radius: 5px;
  color: #f8f8f8; /* 텍스트를 밝게 */
}

.alcohol-image {
  max-width: 100%;
  height: auto;
  margin-top: 1rem;
  border-radius: 5px; /* 이미지를 부드럽게 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* 이미지 그림자 효과 */
}

button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  background-color: #f39c12; /* 따뜻한 오렌지 */
  color: white; /* 버튼 텍스트 색상 */
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #e67e22; /* 호버 시 더 짙은 오렌지색 */
}
</style>
