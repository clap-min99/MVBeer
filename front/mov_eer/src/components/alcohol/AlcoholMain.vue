<template>
    <div>
      <h2>주류별 영화 추천</h2>
      <div class="tabs">
        <button
          v-for="tab in tabs"
          :key="tab"
          @click="currentTab = tab"
          :class="{ active: currentTab === tab }"
        >
          {{ tab }}
        </button>
      </div>
  
      <!-- 동적으로 컴포넌트 렌더링 -->
      <component :is="currentComponent" />
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import Beer from './Beer.vue';
  import Whiskey from './Whiskey.vue';
  import Wine from './Wine.vue';
  import Nonalcohol from './Nonalcohol.vue';
  
  // 탭 이름과 컴포넌트 매칭
  const tabs = ['Beer', 'Whiskey', 'Wine', 'Nonalcohol'];
  const currentTab = ref('Beer');
  
  // 현재 선택된 컴포넌트 동적으로 계산
  const components = {
    Beer,
    Whiskey,
    Wine,
    Nonalcohol,
  };
  const currentComponent = computed(() => components[currentTab.value]);
  </script>
  
  <style scoped>
  h2 {
    margin-bottom: 1rem;
  }
  
  .tabs {
    display: flex;
    margin-bottom: 1rem;
  }
  
  button {
    margin-right: 0.5rem;
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    background: #fff;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  button.active {
    font-weight: bold;
    background: #007bff;
    color: white;
  }
  
  button:hover {
    background: #f0f0f0;
  }
  
  .tabs + .component {
    margin-top: 1rem;
  }
  </style>
  