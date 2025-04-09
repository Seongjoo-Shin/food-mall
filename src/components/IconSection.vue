<!-- src/components/IconSection.vue -->
<template>
  <div class="bg-light py-3 border-top border-bottom">
    <div class="container d-flex justify-content-between flex-wrap gap-3">
      <div
        v-for="icon in icons"
        :key="icon.label"
        class="text-center"
        style="width: 80px"
      >
        <img :src="icon.img" alt="" class="img-fluid rounded-circle mb-1" />
        <div style="font-size: 14px">{{ icon.label }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const icons = [
  { img: "https://via.placeholder.com/60?text=채소", label: "채소품질보장" },
  { img: "https://via.placeholder.com/60?text=카페", label: "카페 추천템" },
  { img: "https://via.placeholder.com/60?text=특가", label: "특가딜" },
  { img: "https://via.placeholder.com/60?text=할인", label: "첫주문 혜택" },
  { img: "https://via.placeholder.com/60?text=음료", label: "음료모음" },
  { img: "https://via.placeholder.com/60?text=육류", label: "육류 특가" },
  { img: "https://via.placeholder.com/60?text=배송", label: "배송 혁신!" },
  { img: "https://via.placeholder.com/60?text=세일", label: "세일중" },
];
</script>

<style scoped>
img {
  width: 60px;
  height: 60px;
  object-fit: cover;
}
</style>
