<template>
  <div class="layout-wrapper d-flex flex-column min-vh-100">
    <Header />
    <IconSection />

    <main class="container my-3 flex-fill">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import IconSection from "@/components/IconSection.vue";
import Footer from "@/components/Footer.vue";
</script>

<style scoped>
/* 필요 시 main padding 추가 가능 */
</style>
