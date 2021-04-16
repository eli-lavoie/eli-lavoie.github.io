import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ProjectList from "../views/ProjectList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectList,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
