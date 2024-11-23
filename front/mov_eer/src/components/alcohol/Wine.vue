<template>
    <div>
      <div v-if="wines.length">
        <div 
          v-for="wine in wines" 
          :key="wine.id" 
          class="wine-card"
        >
          <h4>{{ wine.subtype }}</h4>
          <p>{{ wine.description }}</p>
          <p>{{ wine.examples }}</p>
          <div class="wine-images">
            <img 
              v-for="image in wine.images" 
              :key="image.image" 
              :src="`http://127.0.0.1:8000${image.image}`" 
              :alt="image.description" 
              class="wine-image"
            />
          </div>
        </div>
      </div>
      <div v-else>
        <p>Loading wines...</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useLiquorStore } from '@/stores/liquor';
  
  const store = useLiquorStore(); // 스토어 사용
  const wines = ref([]); // 와인 데이터를 저장할 ref
  
  // 컴포넌트가 마운트될 때 API 호출
  onMounted(() => {
    store.getWines(); // 스토어의 메서드 호출
    wines.value = store.wines; // 스토어의 wines를 컴포넌트 데이터로 연결
  });
  </script>
  
  <style scoped>
  .wine-card {
    border: 1px solid #ccc;
    padding: 16px;
    margin-bottom: 16px;
    border-radius: 8px;
  }
  .wine-images {
    display: flex;
    gap: 8px;
  }
  .wine-image {
    width: 100px;
    height: auto;
    border-radius: 4px;
  }
  </style>
  