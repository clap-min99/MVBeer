<template>
  <div class="logo-container">
    <img src="@/assets/image.png" alt="MVBeer Logo" class="logo-image" />
    <h1 class="logo-title">MVBEER</h1>
  </div>
</template>

<script>
export default {
  name: "Logo",
};
</script>

<style scoped>
.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
}

.logo-image {
  width: 150px; /* 원하는 크기로 조정 */
  height: auto;
  margin-bottom: 10px;
}

.logo-title {
  font-family: 'Arial', sans-serif;
  font-size: 2rem;
  color: #5a3c29; /* 로고와 어울리는 색상 */
  margin: 0;
}

.logo-subtitle {
  font-family: 'Arial', sans-serif;
  font-size: 1.2rem;
  color: #8b6b5e;
  margin: 5px 0 0;
}
</style>