<template>
  <header class="border-bottom shadow-sm bg-white">
    <div
      class="container py-2 d-flex justify-content-between align-items-center"
    >
      <!-- 로고 -->
      <div class="d-flex align-items-center">
        <img src="@/assets/logo.png" alt="식봄 로고" style="height: 40px" />
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
        <a href="#" class="text-dark text-decoration-none">마이승현</a>
        <a href="#" class="text-dark text-decoration-none">최근구매</a>
        <a href="#" class="text-dark text-decoration-none">장바구니</a>
      </div>
    </div>

    <!-- 하단 메뉴 바 -->
    <div class="bg-light border-top">
      <div
        class="container py-2 d-flex justify-content-between align-items-center"
      >
        <div class="d-flex gap-4">
          <a href="#" class="fw-bold text-dark">☰ 전체 카테고리</a>
          <a href="#" class="text-dark">식봄 기획전</a>
          <a href="#" class="text-dark">직배송 업체</a>
          <a href="#" class="text-dark">업종 찾기</a>
          <a href="#" class="text-dark">지역 찾기</a>
        </div>
        <div class="d-flex gap-3">
          <a href="#" class="text-dark">로그인</a>
          <span>/</span>
          <a href="#" class="text-dark">회원가입</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
// 필요한 경우 props나 emits 정의 가능
</script>

<style scoped>
a:hover {
  text-decoration: underline;
}
</style>
