<template>
  <div>
    <Header />
    <IconSection />

    <main class="container my-4">
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
