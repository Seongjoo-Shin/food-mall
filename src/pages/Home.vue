<template>
  <div class="container py-4">
    <h2 class="mb-4">상품 목록</h2>
    <div class="row row-cols-2 row-cols-md-4 g-4">
      <div class="col" v-for="product in products" :key="product.id">
        <div
          class="card h-100"
          @click="goToDetail(product.id)"
          style="cursor: pointer"
        >
          <img :src="product.image" class="card-img-top" alt="상품 이미지" />
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.price.toLocaleString() }}원</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const products = ref(
  Array.from({ length: 16 }).map((_, i) => ({
    id: i + 1,
    name: `상품 ${i + 1}`,
    price: Math.floor(Math.random() * 10000 + 3000),
    image: "https://placehold.co/200x200",
  }))
);

const goToDetail = (id) => {
  router.push(`/product/${id}`);
};

const productId = route.params.id;
</script>
