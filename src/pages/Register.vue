<template>
  <div class="container my-5" style="max-width: 500px">
    <h2 class="mb-4 text-center">회원가입</h2>
    <form @submit.prevent="register">
      <div class="mb-3">
        <label class="form-label">이름</label>
        <input type="text" class="form-control" v-model="form.name" required />
      </div>
      <div class="mb-3">
        <label class="form-label">이메일</label>
        <input
          type="email"
          class="form-control"
          v-model="form.email"
          required
        />
      </div>
      <div class="mb-3">
        <label class="form-label">비밀번호</label>
        <input
          type="password"
          class="form-control"
          v-model="form.password"
          required
        />
      </div>
      <div class="mb-3">
        <label class="form-label">비밀번호 확인</label>
        <input
          type="password"
          class="form-control"
          v-model="form.passwordConfirm"
          required
        />
      </div>
      <div class="mb-3">
        <label class="form-label">휴대폰 번호</label>
        <input type="tel" class="form-control" v-model="form.phone" />
      </div>

      <div class="form-check mb-3">
        <input
          class="form-check-input"
          type="checkbox"
          id="terms"
          v-model="form.agree"
          required
        />
        <label class="form-check-label" for="terms">
          이용 약관에 동의합니다.
        </label>
      </div>

      <button type="submit" class="btn btn-primary w-100">회원가입</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
  phone: "",
  agree: false,
});

function register() {
  if (form.password !== form.passwordConfirm) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  // 추후 API 연동 예정
  console.log("회원가입 정보:", { ...form });
  alert("회원가입 완료 (데모)");
}
</script>
