<template>
  <div class="container py-4 min-vh-100">
    <h3>장바구니</h3>

    <!-- ✅ 장바구니가 비었을 때 -->
    <div v-if="cartItems.length === 0" class="text-center my-5">
      <img
        src="https://placehold.co/200x200?text=Empty+Cart"
        alt="Empty Cart"
        class="mb-3"
      />
      <h5 class="mb-3">장바구니에 담긴 상품이 없습니다.</h5>
      <router-link to="/" class="btn btn-outline-primary"
        >쇼핑 계속하기</router-link
      >
    </div>
    <div class="row">
      <!-- 왼쪽 상품 목록 -->
      <div class="col-md-8">
        <div class="form-check mb-3">
          <input
            class="form-check-input"
            type="checkbox"
            v-model="allSelected"
            @change="toggleAll"
          />
          <label class="form-check-label">전체선택</label>
          <button
            class="btn btn-sm btn-outline-secondary float-end"
            @click="deleteSelected"
          >
            선택 삭제
          </button>
        </div>

        <!-- 공급업체/카테고리별 그룹핑 -->
        <div class="card mb-3" v-for="group in groupedCart" :key="group.name">
          <div
            class="card-header bg-success text-white d-flex justify-content-between"
          >
            <strong>{{ group.name }}</strong>
            <span>무료배송</span>
          </div>
          <div class="card-body" v-for="item in group.items" :key="item.id">
            <div class="d-flex align-items-center">
              <input
                class="form-check-input me-2"
                type="checkbox"
                v-model="item.selected"
              />
              <img
                :src="item.image"
                alt="상품"
                style="width: 80px; height: 80px"
                class="me-3"
              />
              <div class="flex-grow-1">
                <div>{{ item.name }}</div>
                <div class="text-muted">최소수량 {{ item.minQty }}개</div>
                <div class="input-group w-50 mt-2">
                  <button
                    class="btn btn-outline-secondary"
                    @click="decreaseQty(item)"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    class="form-control text-center"
                    :value="item.qty"
                    readonly
                  />
                  <button
                    class="btn btn-outline-secondary"
                    @click="increaseQty(item)"
                  >
                    +
                  </button>
                </div>
              </div>
              <div class="fw-bold ms-auto">
                {{ (item.price * item.qty).toLocaleString() }}원
              </div>
              <button class="btn-close ms-3" @click="removeItem(item)"></button>
            </div>
          </div>
        </div>
      </div>

      <!-- 오른쪽 주문 요약 -->
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <p class="text-danger mb-2">
              🧾 이 금액에서 더 할인 받기!
              <button class="btn btn-sm btn-danger">쿠폰 받기</button>
            </p>
            <hr />
            <p>선택상품 수: {{ selectedItems.length }}개</p>
            <p>식봄 회원가: {{ totalPrice.toLocaleString() }}원</p>
            <p>배송비: <strong>0원</strong></p>
            <hr />
            <h5>
              총 주문금액: <strong>{{ totalPrice.toLocaleString() }}원</strong>
            </h5>
            <button class="btn btn-success w-100 mt-3">주문하기</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const allSelected = ref(false);

const cartItems = ref([
  {
    id: 1,
    name: "★수산 샘플 모음전★",
    price: 9999900,
    qty: 1,
    minQty: 1,
    image: "https://placehold.co/80x80",
    selected: false,
    group: "다복푸드",
  },
  {
    id: 2,
    name: "★신선야채 베스트 모음★",
    price: 999900,
    qty: 1,
    minQty: 1,
    image: "https://placehold.co/80x80",
    selected: false,
    group: "다복푸드",
  },
]);

const groupedCart = computed(() => {
  const groups = {};
  cartItems.value.forEach((item) => {
    if (!groups[item.group]) groups[item.group] = [];
    groups[item.group].push(item);
  });
  return Object.entries(groups).map(([name, items]) => ({ name, items }));
});

const selectedItems = computed(() =>
  cartItems.value.filter((item) => item.selected)
);

const totalPrice = computed(() =>
  selectedItems.value.reduce((sum, item) => sum + item.price * item.qty, 0)
);

function toggleAll() {
  cartItems.value.forEach((item) => (item.selected = allSelected.value));
}

function deleteSelected() {
  cartItems.value = cartItems.value.filter((item) => !item.selected);
}

function removeItem(item) {
  cartItems.value = cartItems.value.filter((i) => i.id !== item.id);
}

function decreaseQty(item) {
  if (item.qty > item.minQty) item.qty--;
}

function increaseQty(item) {
  item.qty++;
}
</script>
