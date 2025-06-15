<template>
  <div class="container py-5">
    <h2 class="mb-4">마이페이지</h2>
    <ul class="nav nav-tabs">
      <li class="nav-item" v-for="(tab, i) in tabs" :key="i">
        <button
          class="nav-link"
          :class="{ active: activeTab === tab.name }"
          @click="activeTab = tab.name"
        >
          {{ tab.label }}
        </button>
      </li>
    </ul>
    <div class="mt-4">
      <component :is="activeTabComponent" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import MyInfo from "./MyPage/MyInfo.vue";
import OrderHistory from "./MyPage/OrderHistory.vue";
import AddressBook from "./MyPage/AddressBook.vue";

const tabs = [
  { name: "MyInfo", label: "내 정보" },
  { name: "OrderHistory", label: "주문 내역" },
  { name: "AddressBook", label: "배송지 관리" },
];

const activeTab = ref("MyInfo");

const activeTabComponent = computed(() => {
  switch (activeTab.value) {
    case "MyInfo":
      return MyInfo;
    case "OrderHistory":
      return OrderHistory;
    case "AddressBook":
      return AddressBook;
    default:
      return MyInfo;
  }
});
</script>
