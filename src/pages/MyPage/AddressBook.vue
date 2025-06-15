<template>
  <div>
    <h4>배송지 관리</h4>
    <ul class="list-group mt-3">
      <li
        v-for="address in addresses"
        :key="address.id"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <div>
          <div>{{ address.recipient }} ({{ address.phone }})</div>
          <div>{{ address.address }}</div>
        </div>
        <div>
          <button class="btn btn-sm btn-outline-primary me-2">수정</button>
          <button class="btn btn-sm btn-outline-danger">삭제</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const addresses = ref([
  {
    id: 1,
    recipient: "홍길동",
    phone: "010-1234-5678",
    address: "서울특별시 강남구 논현로 123",
  },
  {
    id: 2,
    recipient: "회사",
    phone: "02-123-4567",
    address: "서울특별시 서초구 서초대로 456",
  },
]);
</script>
