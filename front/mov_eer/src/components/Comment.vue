<template>
    <div>
    <!-- 댓글 섹션 -->
    <div class="comments-section">
      <h5>댓글</h5>
      <ul class="comments-list">
        <li v-for="(comment, index) in comments" :key="index" class="comment">
          {{ comment }}
        </li>
      </ul>
      <form @submit.prevent="addComment">
        <input
          type="text"
          v-model="newComment"
          placeholder="댓글을 입력하세요"
          class="comment-input"
        />
        <button type="submit" class="comment-submit">댓글 달기</button>
      </form>
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
// 댓글 데이터 관리
const comments = ref([]); // 댓글 목록
const newComment = ref(""); // 새로 입력된 댓글

// 댓글 추가 함수
const addComment = () => {
  if (newComment.value.trim() !== "") {
    comments.value.push(newComment.value); // 새 댓글 추가
    newComment.value = ""; // 입력 필드 초기화
  }
};
</script>

<style scoped>
/* 댓글 스타일 */
.comments-section {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.comments-list {
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
}

.comment {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.comment-input {
  width: calc(100% - 100px);
  padding: 0.5rem;
  margin-right: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.comment-submit {
  padding: 0.5rem 1rem;
  background-color: hsl(49, 93%, 73%);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.comment-submit:hover {
  background-color: #f3d38c;
}
</style>