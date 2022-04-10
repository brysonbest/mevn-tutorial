import { createWebHistory, createRouter } from "vue-router";
const routes = [
  {
    path: "/",
    alias: "/tutorials",
    name: "tutorials",
    component: () => import("./components/TutorialsList"),
  },
  {
    path: "/tutorials/:id",
    name: "tutorial-details",
    component: () => import("./components/Tutorial"),
  },
  {
    path: "/add",
    name: "add-tutorial",
    component: () => import("./components/AddTutorial"),
  },
  {
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
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
