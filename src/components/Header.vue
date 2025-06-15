<template>
  <header class="border-bottom shadow-sm bg-white position-relative">
    <div
      class="container py-2 d-flex justify-content-between align-items-center"
    >
      <!-- 로고 -->
      <div class="d-flex align-items-center">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="식봄 로고" style="height: 40px" />
        </router-link>
      </div>

      <!-- 검색창 -->
      <div class="flex-grow-1 mx-4">
        <form class="d-flex">
          <input
            class="form-control rounded-pill px-4"
            type="search"
            placeholder="부쩍 더워지는 날씨에도, [채소] 안전 배송!"
            aria-label="Search"
          />
        </form>
      </div>

      <!-- 유저 기능 -->
      <div class="d-flex align-items-center gap-3">
        <router-link to="/mypage" class="text-dark text-decoration-none"
          >마이승현</router-link
        >
        <router-link to="/cart" class="text-dark text-decoration-none"
          >장바구니</router-link
        >
      </div>
    </div>

    <!-- 하단 메뉴 바 -->
    <div class="bg-light border-top">
      <div
        class="container py-2 d-flex justify-content-between align-items-center"
      >
        <div class="d-flex gap-4">
          <!-- 전체 카테고리 -->
          <button
            @click="toggleCategory"
            class="fw-bold text-dark btn p-0 border-0 bg-transparent"
          >
            ☰ 전체 카테고리
          </button>
          <router-link to="/events" class="text-dark">식봄 기획전</router-link>
          <router-link to="/vendors" class="text-dark">직배송 업체</router-link>
          <router-link to="/industry" class="text-dark">업종 찾기</router-link>
          <router-link to="/region" class="text-dark">지역 찾기</router-link>
        </div>
        <div class="d-flex gap-1">
          <router-link to="/login" class="text-dark">로그인</router-link>
          <span>/</span>
          <router-link to="/register" class="text-dark">회원가입</router-link>
        </div>
      </div>
    </div>

    <!-- 전체 카테고리 배너 -->
    <CategoryBanner v-if="showCategoryBanner" />
  </header>
</template>

<script setup>
import { ref } from "vue";
import CategoryBanner from "@/components/CategoryBanner.vue";

const showCategoryBanner = ref(false);
const toggleCategory = () => {
  showCategoryBanner.value = !showCategoryBanner.value;
};
</script>

<style scoped>
a:hover {
  text-decoration: underline;
}
</style>
