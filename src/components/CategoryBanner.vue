<template>
  <div class="category-banner shadow-sm border bg-white">
    <div class="container py-4">
      <div class="row">
        <div class="col-md-2 fw-bold text-success">✅ 식봄 특별관</div>
        <div class="col-md-10">
          <div class="row row-cols-4 g-2">
            <div v-for="(item, index) in categories" :key="index" class="col">
              <span>🍱 {{ item }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const categories = [
  "4월 정육 핫딜!",
  "품질 보장, 닭발 할인",
  "마라재료 인기 업체",
  "가성비 갑, 쭈꾸미",
  "포장 용기 샘플관",
  "야간 주문도 내일도착!",
  "오늘의 채소 시세",
  "채소·과일",
  "쌀·잡곡·견과",
  "축산·계란류",
  "생선·해산물·건어물",
  "냉장·냉동·간편식",
  "반찬류",
  "소스·양념·육수",
  "장류·조미료·식용유",
  "캔·통조림",
  "면류·가공식품",
  "스낵·안주류",
  "커피·차·음료·생수",
  "일반용품",
  "주방용품",
  "포장용기·일회용품",
];
</script>

<style scoped>
.category-banner {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 10;
}
</style>
