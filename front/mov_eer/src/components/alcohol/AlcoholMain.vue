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
  color: #f8f8f8; /* 헤더 텍스트 색상 */
}

.tabs {
  display: flex;
  margin-bottom: 1rem;
  background-color: #2e2e2e; /* 다크그레이 배경 */
  padding: 10px;
  border-radius: 8px; /* 부드러운 모서리 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

button {
  margin-right: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #444; /* 어두운 테두리 */
  background: #3b3b3b; /* 버튼 배경 어둡게 */
  color: #f8f8f8; /* 텍스트 색상 밝게 */
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
}

button.active {
  font-weight: bold;
  background: #3b3b3b; /* 활성 버튼: 파란색 */
  color: white;
  border-color: #e67e22; /* 활성 버튼 테두리 */
}

button:hover {
  background: #555555; /* 버튼 호버 시 밝아짐 */
  color: #ffffff;
}

.tabs + .component {
  margin-top: 1rem;
}
</style>
