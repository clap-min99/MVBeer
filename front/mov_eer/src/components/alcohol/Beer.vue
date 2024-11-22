<template>
    <div>
      <h3>Beer</h3>
      <div v-if="beers.length">
        <div 
          v-for="beer in beers" 
          :key="beer.id" 
          class="beer-card"
        >
          <h4>{{ beer.subtype }}</h4>
          <p>{{ beer.description }}</p>
          <p>{{ beer.examples }}</p>
          <div class="beer-images">
            <img 
                v-for="image in beer.images" 
                :key="image.image" 
                :src="`http://127.0.0.1:8000${image.image}`" 
                :alt="image.description" 
                class="beer-image"
                />
          </div>
        </div>
      </div>
      <div v-else>
        <p>Loading beers...</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useLiquorStore } from '@/stores/liquor';
  
  const store = useLiquorStore(); // 스토어 사용
  const beers = ref([]); // 맥주 데이터를 저장할 ref
  
  // 컴포넌트가 마운트될 때 API 호출
  onMounted(() => {
    store.getBeers(); // 스토어의 메서드 호출
    beers.value = store.beers; // 스토어의 beers를 컴포넌트 데이터로 연결
  });
  </script>
  
  <style scoped>
  .beer-card {
    border: 1px solid #ccc;
    padding: 16px;
    margin-bottom: 16px;
    border-radius: 8px;
  }
  .beer-images {
    display: flex;
    gap: 8px;
  }
  .beer-image {
    width: 100px;
    height: auto;
    border-radius: 4px;
  }
  </style>
  