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
    <ul class="mt-5 nav nav-tabs sticky-top bg-white z-10" style="top: 0">
      <li class="nav-item" v-for="tab in tabs" :key="tab.key">
        <span
          class="nav-link"
          :class="{ active: activeTab === tab.key }"
          @click="() => handleTabClick(tab.key)"
          style="cursor: pointer"
        >
          {{ tab.label }}
        </span>
      </li>
    </ul>

    <!-- 각 섹션 -->
    <div class="mt-4" ref="descriptionRef">
      <h4>상품 설명</h4>
      <div class="col-md-5 p-5">
        <img
          src="https://placehold.co/400x2000"
          alt="상품 이미지"
          class="img-fluid"
        />
      </div>
    </div>
    <div class="mt-4" ref="purchaseRef">
      <h4>구매 정보</h4>
      <div class="col-md-5 p-5">
        <img
          src="https://placehold.co/300x2000"
          alt="상품 이미지"
          class="img-fluid"
        />
      </div>
    </div>
    <div class="mt-4" ref="shippingRef">
      <h4>배송 정보</h4>
      <div class="col-md-5 p-5">
        <img
          src="https://placehold.co/200x2000"
          alt="상품 이미지"
          class="img-fluid"
        />
      </div>
    </div>
    <div class="mt-4" ref="inquiryRef">
      <h4>상품 문의</h4>
      <div class="col-md-5 p-5">
        <img
          src="https://placehold.co/100x2000"
          alt="상품 이미지"
          class="img-fluid"
        />
      </div>
    </div>

    <!-- 하단 공지 이미지 -->
    <div class="mt-4">
      <div class="align-items-center">
        <span>하단 공지 이미지</span>
      </div>
    </div>
  </div>

  <div class="position-fixed" style="bottom: 30px; right: 30px; z-index: 999">
    <button
      class="btn btn-outline-primary position-relative rounded-circle"
      style="width: 60px; height: 60px"
      @click="goToCart"
    >
      🛒
      <span
        v-if="cartCount > 0"
        class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        style="font-size: 0.75rem"
      >
        {{ cartCount }}
      </span>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const cartCount = ref(3); // 예시용 담긴 개수 (store에서 불러올 수도 있음)

const goToCart = () => {
  router.push("/cart");
};
const tabs = [
  { key: "description", label: "상품 설명" },
  { key: "purchase", label: "구매 정보" },
  { key: "shipping", label: "배송 정보" },
  { key: "inquiry", label: "상품 문의" },
];

const activeTab = ref("description");

// 섹션 refs
const descriptionRef = ref(null);
const purchaseRef = ref(null);
const shippingRef = ref(null);
const inquiryRef = ref(null);

const sectionRefs = {
  description: descriptionRef,
  purchase: purchaseRef,
  shipping: shippingRef,
  inquiry: inquiryRef,
};

// 클릭 시 이동 및 탭 변경
const handleTabClick = (key) => {
  activeTab.value = key;
  const el = sectionRefs[key]?.value;
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
</script>
