<template>
  <div>
    <!-- 댓글 섹션 -->
    <div class="comments-section">
      <h5>댓글</h5>
      <ul class="comments-list">
        <li v-for="comment in comments" :key="comment.id" class="comment">
          <p>
            <strong>{{ comment.user }}</strong>: {{ comment.content }}
          </p>
          <small>{{ new Date(comment.created_at).toLocaleString() }}</small>
          <button v-if="isAuthor(comment)" @click="editComment(comment)">수정</button>
          <button v-if="isAuthor(comment)" @click="deleteComment(comment.id)">삭제</button>
        </li>
      </ul>
      <form @submit.prevent="submitComment">
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
import { ref, onMounted } from "vue";
import axios from "axios";
import { useLogStore } from "@/stores/log";

const props = defineProps({
  movieId: {
    type: Number,
    required: true,
  },
});

const comments = ref([]);
const newComment = ref("");
const editingComment = ref(null);
const store = useLogStore();

console.log(store.API_URL)
// 댓글 불러오기
const fetchComments = () => {
  const url = `${store.API_URL}/api/v1/movies/${props.movieId}/comments/`;
  console.log(store.token)
  console.log("Fetching comments from:", url); // 디버깅용 콘솔 출력

  axios({
    method: 'get',
    url:  `${store.API_URL}/api/v1/movies/${props.movieId}/comments/`,
    headers: {
      Authorization: `Token ${store.token}`
    },
  }).then((response) => {
      console.log("댓글 API 응답:", response.data); // 응답 데이터 확인
      comments.value = response.data;
    })
    .catch((error) => {
      console.error("댓글 불러오기 실패:", error);
    });
};
    
    

// 댓글 작성
const submitComment = () => {
  if (newComment.value.trim() === "") {
    alert("댓글 내용을 입력하세요!");
    return;
  }

  const url = `${store.API_URL}/api/v1/movies/${props.movieId}/comments/`;
  console.log("Submitting comment to:", url); // 디버깅용 콘솔 출력

  axios
  ({
    method: 'post',
    url:  `${store.API_URL}/api/v1/movies/${props.movieId}/comments/`,
    headers: {
      Authorization: `Token ${store.token}`
    },
    data:{content: newComment.value}},)
    .then((response) => {
      // 댓글 추가 시 중복 방지
      if (!comments.value.some((comment) => comment.id === response.data.id)) {
        comments.value.push(response.data);
      }
      newComment.value = "";
      alert("댓글 작성 성공!");
    })
    .catch((error) => {
      console.error("댓글 작성 실패:", error);
    });
};

// 댓글 삭제
const deleteComment = (commentId) => {
  const url = `${store.API_URL}/api/v1/comments/${commentId}/`;
  console.log("Deleting comment from:", url); // 디버깅용 콘솔 출력

  axios
    .delete(url, {
      headers: {
        Authorization: `Token ${store.token}`,
      },
    })
    .then(() => {
      comments.value = comments.value.filter((comment) => comment.id !== commentId);
      alert("댓글 삭제 성공!");
    })
    .catch((error) => {
      console.error("댓글 삭제 실패:", error);
    });
};

// 댓글 수정
const editComment = (comment) => {
  editingComment.value = comment;
  newComment.value = comment.content;
};

const updateComment = () => {
  const url = `${store.API_URL}/api/v1/comments/${editingComment.value.id}/`;
  console.log("Updating comment at:", url); // 디버깅용 콘솔 출력

  axios
    .put(
      url,
      { content: newComment.value },
      {
        headers: {
          Authorization: `Token ${store.token}`,
        },
      }
    )
    .then((response) => {
      const index = comments.value.findIndex((c) => c.id === editingComment.value.id);
      comments.value[index] = response.data;
      editingComment.value = null;
      newComment.value = "";
      alert("댓글 수정 성공!");
    })
    .catch((error) => {
      console.error("댓글 수정 실패:", error);
    });
};

// 작성자 확인
const isAuthor = (comment) => {
  return store.user?.username === comment.user;
};

// 컴포넌트 초기 로드
onMounted(() => {
  console.log("Movie ID:", props.movieId); // movieId 출력
  if (!store.token) {
    alert("로그인이 필요합니다.");
    return;
  }
  fetchComments();
});
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
