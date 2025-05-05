<template>
  <div class="container py-4">
    <div class="row">
      <!-- 상품 이미지 -->
      <div class="col-md-5 p-5">
        <img
          src="https://placehold.co/400x200"
          alt="상품 이미지"
          class="img-fluid"
        />
      </div>

      <!-- 상품 정보 -->
      <div class="col-md-7">
        <h4 class="text-muted">온국민 신선몰</h4>
        <h2 class="fw-bold">♡신선야채 초특가♡</h2>
        <p class="text-decoration-line-through">100원</p>
        <p class="text-danger fw-bold fs-5">
          90원 <span class="badge bg-danger">10%↓</span>
        </p>
        <div class="d-flex align-items-center mb-2">
          <label class="me-2">수량:</label>
          <input type="number" class="form-control w-auto" min="1" value="1" />
        </div>
        <div class="mb-3">
          <strong class="fs-4 text-success">10,000,000원</strong>
        </div>
        <div class="d-flex gap-2">
          <button class="btn btn-success">장바구니</button>
          <button class="btn btn-outline-secondary">바로구매</button>
        </div>
        <p class="mt-3 text-muted">설정 지역: 서울시 강남구</p>
      </div>
    </div>

    <!-- 추천 상품 -->
    <hr class="my-4" />
    <h5 class="mb-3">배송비 절약을 위한 추천 상품</h5>
    <div class="row row-cols-1 row-cols-md-5 g-4">
      <div class="col" v-for="n in 5" :key="n">
        <div class="card h-100">
          <img src="https://placehold.co/150x150" class="card-img-top" />
          <div class="card-body p-2">
            <p class="card-text small">추천 상품 {{ n }}</p>
            <strong class="text-danger">7,500원</strong>
          </div>
        </div>
      </div>
    </div>

    <!-- 상품 정보, 구매 정보, 배송 정보, 문의 -->
    <hr class="my-4" />
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#">상품 설명</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">구매 정보</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">배송 정보</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">상품 문의</a>
      </li>
    </ul>

    <!-- 하단 공지 이미지 -->
    <div class="mt-4">
      <img
        src="https://placehold.co/200x200"
        alt="배송 공지 이미지"
        class="img-fluid"
      />
    </div>
  </div>
</template>

<script setup>
// 이 페이지는 임시로 정적인 데이터를 사용하고 있습니다.
</script>

<style scoped>
input[type="number"] {
  max-width: 100px;
}
</style>
