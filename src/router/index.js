import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Products from "@/pages/Products.vue";

const routes = [{ path: "/", component: Products }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
