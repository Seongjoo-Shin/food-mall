import { createRouter, createWebHistory } from "vue-router";

// 페이지 컴포넌트 import
import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";
import ProductDetail from "@/pages/ProductDetail.vue";
// import Signup from "@/pages/SignupView.vue";
import Cart from "@/pages/CartView.vue";
// import MyPage from "@/pages/MyPage.vue";
// import Recent from "@/pages/RecentView.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", name: "Login", component: Login },
  { path: "/product/:id", name: "ProductDetail", component: ProductDetail },
  { path: "/cart", name: "Cart", component: Cart },
  // { path: "/signup", name: "Signup", component: Signup },
  // { path: "/mypage", name: "MyPage", component: MyPage },
  // { path: "/recent", name: "Recent", component: Recent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
