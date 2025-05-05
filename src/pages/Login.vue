<template>
  <div
    class="container d-flex justify-content-center align-items-center min-vh-100"
  >
    <div class="card p-5 shadow-lg" style="max-width: 400px; width: 100%">
      <h3 class="text-center mb-4">로그인</h3>

      <form @submit.prevent="login">
        <div class="mb-3">
          <label for="email" class="form-label">이메일</label>
          <input
            type="email"
            v-model="email"
            class="form-control"
            id="email"
            placeholder="이메일을 입력하세요"
            required
          />
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">비밀번호</label>
          <input
            type="password"
            v-model="password"
            class="form-control"
            id="password"
            placeholder="비밀번호를 입력하세요"
            required
          />
        </div>

        <button type="submit" class="btn btn-primary w-100">로그인</button>
      </form>

      <div class="text-center mt-3">
        <a href="#" class="text-decoration-none">비밀번호 찾기</a> |
        <a href="#" class="text-decoration-none">회원가입</a>
      </div>

      <hr class="my-4" />

      <button class="btn btn-outline-dark w-100 mb-2">
        <i class="bi bi-google"></i> 구글로 로그인
      </button>
      <button class="btn btn-outline-primary w-100">
        <i class="bi bi-facebook"></i> 페이스북으로 로그인
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");

function login() {
  console.log("로그인 시도:", email.value, password.value);
  // 로그인 API 연동은 여기에!
}
</script>
