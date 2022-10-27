<<<<<<< HEAD
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
=======
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Main from '@/views/Main.vue'
>>>>>>> 17aa9252a3558d7992cfe6d26ba978fbdc3068dd

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
<<<<<<< HEAD
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];
=======
    path: '/',
    name: 'main',
    component: Main
  }
]
>>>>>>> 17aa9252a3558d7992cfe6d26ba978fbdc3068dd

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
