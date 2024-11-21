<template>
    <div>
      <h3>Whiskey</h3>
      <div v-if="whiskeys.length">
        <div 
          v-for="whiskey in whiskeys" 
          :key="whiskey.id" 
          class="whiskey-card"
        >
          <h4>{{ whiskey.subtype }}</h4>
          <p>{{ whiskey.description }}</p>
          <p><{{ whiskey.examples }}</p>
          <div class="whiskey-images">
            <img 
              v-for="image in whiskey.images" 
              :key="image.image" 
              :src="`http://127.0.0.1:8000${image.image}`" 
              :alt="image.description" 
              class="whiskey-image"
            />
          </div>
        </div>
      </div>
      <div v-else>
        <p>Loading whiskeys...</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useLiquorStore } from '@/stores/liquor';
  
  const store = useLiquorStore(); // 스토어 사용
  const whiskeys = ref([]); // 위스키 데이터를 저장할 ref
  
  // 컴포넌트가 마운트될 때 API 호출
  onMounted(() => {
    store.getWhiskeys(); // 스토어의 메서드 호출
    whiskeys.value = store.whiskeys; // 스토어의 whiskeys를 컴포넌트 데이터로 연결
  });
  </script>
  
  <style scoped>
  .whiskey-card {
    border: 1px solid #ccc;
    padding: 16px;
    margin-bottom: 16px;
    border-radius: 8px;
  }
  .whiskey-images {
    display: flex;
    gap: 8px;
  }
  .whiskey-image {
    width: 100px;
    height: auto;
    border-radius: 4px;
  }
  </style>
  