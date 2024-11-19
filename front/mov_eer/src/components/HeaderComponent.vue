<template>
    <header class="header">
      <div class="logo-container">
        <img src="@/assets/MVBeer.png" alt="MVBeer 로고" class="logo" />
        <h1 class="logo-text">MVBeer</h1>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: "Header",
  };

  
  </script>
  
  <style scoped>
.header {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: #f5f5f5; /* 부드러운 배경 색상 */
  color: #333; /* 텍스트 색상 */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* 약간의 그림자 효과 */
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  width: 80px; /* 로고 크기 */
  height: 80px; /* 정사각형 */
  border-radius: 50%; /* 동그랗게 */
  margin-right: 15px; /* 텍스트와의 간격 */
}

.logo-text {
  font-size: 1.5rem; /* 글자 크기 */
  font-weight: bold; /* 굵게 */
  color: #333; /* 글자 색상 */
}
  </style>
  