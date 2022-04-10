import { createWebHistory, createRouter } from "vue-router";
const routes = [
  {
    path: "/",
    alias: "/tutorials",
    name: "tutorials-list",
    component: () => import("./components/TutorialsList.vue"),
  },
  {
    path: "/tutorials/:id",
    name: "tutorial-details",
    component: () => import("./components/Tutorial.vue"),
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddTutorial.vue"),
  },
  /* {
    path: "/tags",
    alias: "/tags",
    name: "tags",
    component: () => import("./components/TagsList"),
  },
  {
    path: "/tags/:id",
    name: "tag-details",
    component: () => import("./components/Tag"),
  },
  {
    path: "/tags/add",
    name: "add-tag",
    component: () => import("./components/AddTag"),
  }, */
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
