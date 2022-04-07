export const routes = [
  {
    path: "/",
    meta: { title: "Home" },
    component: () => import("~/pages/index.vue"),
  },
  {
    path: "/asad",
    meta: { title: "Asad" },
    component: () => import("./pages/asad.vue"),
  },
];