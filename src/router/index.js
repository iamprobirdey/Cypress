import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Api from "@/views/Api.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/api",
    name: "Api",
    component: Api,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
