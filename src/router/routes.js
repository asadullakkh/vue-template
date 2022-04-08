export const routes = [
  {
    path: "/",
    meta: { title: "Home" },
    component: () => import("~/pages/index.vue"),
  },
  {
    path: "/go",
    meta: { title: "Go" },
    component: () => import("~/pages/go.vue"),
  },
];