import { createRouter, createWebHistory } from "vue-router";

// 페이지 컴포넌트 import
import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";
import ProductDetail from "@/pages/ProductDetail.vue";
import Register from "@/pages/Register.vue";
import Cart from "@/pages/CartView.vue";
import MyPage from "@/pages/MyPage.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", name: "Login", component: Login },
  { path: "/product/:id", name: "ProductDetail", component: ProductDetail },
  { path: "/cart", name: "Cart", component: Cart },
  { path: "/mypage", name: "MyPage", component: MyPage },
  { path: "/register", name: "Register", component: Register },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
