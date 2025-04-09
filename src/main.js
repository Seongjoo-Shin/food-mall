// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"; // JavaScript 기능 (드롭다운 등) 필요할 경우

createApp(App).use(router).mount("#app");
