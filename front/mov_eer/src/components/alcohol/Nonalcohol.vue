<template>
    <div>
      <div v-if="nonalcohols.length">
        <div 
          v-for="nonalcohol in nonalcohols" 
          :key="nonalcohol.id" 
          class="nonalcohol-card"
        >
          <h4>{{ nonalcohol.subtype }}</h4>
          <p>{{ nonalcohol.description }}</p>
         
          <div class="nonalcohol-images">
            <img 
              v-for="image in nonalcohol.images" 
              :key="image.image" 
              :src="`http://127.0.0.1:8000${image.image}`" 
              :alt="image.description" 
              class="nonalcohol-image"
            /> 
          </div>
        </div>
      </div>
      <div v-else>
        <p>Loading non-alcoholic drinks...</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useLiquorStore } from '@/stores/liquor';
  
  const store = useLiquorStore(); // 스토어 사용
  const nonalcohols = ref([]); // 논알콜 데이터를 저장할 ref
  
  // 컴포넌트가 마운트될 때 API 호출
  onMounted(() => {
    store.getNonalcohols(); // 스토어의 메서드 호출
    nonalcohols.value = store.nonalcohols; // 스토어의 nonalcohols를 컴포넌트 데이터로 연결
  });
  </script>
  
  <style scoped>
  .nonalcohol-card {
    border: 1px solid #ccc;
    padding: 16px;
    margin-bottom: 16px;
    border-radius: 8px;
  }
  .nonalcohol-images {
    display: flex;
    gap: 8px;
  }
  .nonalcohol-image {
    width: 100px;
    height: auto;
    border-radius: 4px;
  }
  </style>
  