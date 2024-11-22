<template>
    <div>
    <!-- 댓글 섹션 -->
    <div class="comments-section">
      <h5>댓글</h5>
      <ul class="comments-list">
        <li v-for="(comment, index) in comments" :key="index" class="comment">
          <!-- <p><strong>{{ comment.author }}</strong>: {{ comment.content }}</p> -->
          <!-- <small>{{ new Date(comment.created_at).toLocaleString() }}</small> -->
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
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useLogStore } from '@/stores/log';

const props = defineProps({
  movieId: {
    type: Number,
    required: true,
  },
});

const comments = ref([]);
const newComment = ref('');
const store = useLogStore();

// const loadComments = async () => {
//   try {
//     const response = await axios.get(`${store.API_URL}/movies/${props.movieId}/comments/`, {
//       headers: {
//         Authorization: `Token ${store.token}`,
//       },
//     });
//     console.log('댓글 API 응답:', response.data); // 응답 확인
//     // comments.value = response.data; // 댓글 데이터 저장
//     console.log(response.data)
//   } catch (error) {
//     console.error('댓글 불러오기 실패:', error);
//   }
// };

const addComment = async () => {
  
  if (newComment.value.trim() === '') {
    alert('댓글 내용을 입력하세요!');
    return;
  }

  try {
    const response = await axios.post(
      `${store.API_URL}/movies/${props.movieId}/comments/`,
      { content: newComment.value },
      {
        headers: {
          Authorization: `Token ${store.token}`,
        },
      }
    );
    comments.value.push(response.data); // 댓글 추가
    newComment.value = ''; // 입력 필드 초기화
    alert('댓글 작성 성공!');
  } catch (error) {
    console.error('댓글 작성 실패:', error);
    alert('댓글 작성에 실패했습니다.');
  }
};

// 컴포넌트 초기 로드 시 댓글 불러오기
onMounted(() => {
  // store.
})
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