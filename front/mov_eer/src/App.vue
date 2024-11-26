<template>
  <div class="container">
    <div class="background-image"></div> <!-- 배경 -->
    <div class="content">
      <HeaderComponent />
      <RouterView />
    </div>
  </div>
</template>


<script setup>
import { RouterView, RouterLink } from 'vue-router'
import { useMovieStore } from './stores/movie';
import HeaderComponent from './components/shared/HeaderComponent.vue';
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import LoginView from './views/LoginView.vue';
import { useLogStore } from './stores/log'



</script>

<style scoped>
nav {
  display: flex;
  gap: 10px;
  margin: 10px 0;
}

button {
  background: none;
  border: none;
  color: blue;
  cursor: pointer;
  text-decoration: underline;
}

button:hover {
  color: darkblue;
}

/* .background {
  background-color: black
} */

.container {
  position: relative;
  width: 100%;
  height: 100%;
}

.background-image {
  position: fixed; /* 스크롤에도 고정 */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/back.png'); /* 배경 이미지 경로 */
  background-size: cover;
  background-position: center;
  z-index: -1; /* 배경을 콘텐츠 뒤로 */
  filter: brightness(0.4); /* 약간 어둡게 처리 */
  opacity: 0.8; /* 투명도 조정 */
}

.content {
  position: relative;
  z-index: 1; /* 콘텐츠를 배경 위로 배치 */
}


</style>