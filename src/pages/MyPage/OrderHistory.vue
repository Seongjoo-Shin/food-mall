<template>
  <div>
    <h4>주문 내역</h4>
    <table class="table mt-3">
      <thead>
        <tr>
          <th>주문번호</th>
          <th>주문일</th>
          <th>상품명</th>
          <th>수량</th>
          <th>금액</th>
          <th>배송상태</th>
          <th>상세</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td>{{ order.id }}</td>
          <td>{{ order.date }}</td>
          <td>{{ order.product }}</td>
          <td>{{ order.quantity }}</td>
          <td>{{ order.total }}원</td>
          <td>{{ order.status }}</td>
          <td>
            <button
              class="btn btn-sm btn-outline-secondary"
              @click="openModal(order)"
            >
              상세 보기
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 주문 상세 모달 -->
    <div
      class="modal fade show"
      tabindex="-1"
      style="display: block"
      v-if="selectedOrder"
      @click.self="closeModal"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">주문 상세 - {{ selectedOrder.id }}</h5>
            <button
              type="button"
              class="btn-close"
              @click="closeModal"
            ></button>
          </div>
          <div class="modal-body">
            <p><strong>주문일자:</strong> {{ selectedOrder.date }}</p>
            <p><strong>상품명:</strong> {{ selectedOrder.product }}</p>
            <p><strong>수량:</strong> {{ selectedOrder.quantity }}</p>
            <p><strong>총 금액:</strong> {{ selectedOrder.total }}원</p>
            <p><strong>배송 상태:</strong> {{ selectedOrder.status }}</p>
            <hr />
            <p><strong>배송지:</strong> 서울특별시 강남구 논현로 123</p>
            <p><strong>수령인:</strong> 홍길동 (010-1234-5678)</p>
            <!-- 여기에 상품 여러 개인 경우도 확장 가능 -->
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" @click="closeModal">닫기</button>
          </div>
        </div>
      </div>
    </div>

    <!-- 뒷배경 어둡게 -->
    <div class="modal-backdrop fade show" v-if="selectedOrder"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const orders = ref([
  {
    id: "2024061501",
    date: "2025-06-15",
    product: "친환경 양파 1kg",
    quantity: 3,
    total: 9000,
    status: "배송중",
  },
  {
    id: "2024061401",
    date: "2025-06-14",
    product: "유기농 당근 2kg",
    quantity: 1,
    total: 5000,
    status: "배송완료",
  },
]);

const selectedOrder = ref(null);

function openModal(order) {
  selectedOrder.value = order;
}

function closeModal() {
  selectedOrder.value = null;
}
</script>

<style scoped>
.modal {
  background: rgba(0, 0, 0, 0.3);
}
</style>
