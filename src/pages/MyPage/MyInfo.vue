<template>
  <div>
    <h4>내 정보</h4>
    <form>
      <div class="mb-3">
        <label class="form-label">이름</label>
        <input type="text" class="form-control" v-model="user.name" />
      </div>
      <div class="mb-3">
        <label class="form-label">이메일</label>
        <input type="email" class="form-control" v-model="user.email" />
      </div>
      <!-- 더 필요한 항목들 추가 -->
      <button class="btn btn-primary">수정하기</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const user = ref({
  name: "홍길동",
  email: "hong@freshmoa.com",
});
</script>
