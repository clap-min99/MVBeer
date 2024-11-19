<template>
    <div>
      <h1>Upload an Image</h1>
      <form @submit.prevent="uploadImage">
        <input type="file" @change="onFileChange" />
        <button type="submit">Upload</button>
      </form>
      <div v-if="imageUrl">
        <h2>Uploaded Image</h2>
        <img :src="imageUrl" alt="Uploaded Image" />
      </div>
      <div v-if="error" style="color: red;">{{ error }}</div>
    </div>
  </template>

<script setup>
import { ref } from 'vue';

// 상태 변수 정의
const file = ref(null); // 업로드할 파일
const imageUrl = ref(null); // 업로드된 이미지 URL
const error = ref(null); // 에러 메시지

// 파일 선택 핸들러
function onFileChange(event) {
  file.value = event.target.files[0];
}

// 이미지 업로드 함수
async function uploadImage() {
  if (!file.value) {
    error.value = "Please select a file.";
    return;
  }

  const formData = new FormData();
  formData.append("image", file.value);

  try {
    const response = await fetch("http://localhost:8000/api/upload/", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();

    if (data.success) {
      imageUrl.value = data.url; // Django에서 반환된 URL
      error.value = null;
    } else {
      error.value = data.message || "Failed to upload image.";
    }
  } catch (err) {
    error.value = "An error occurred: " + err.message;
  }
}
</script>

<style scoped>

</style>