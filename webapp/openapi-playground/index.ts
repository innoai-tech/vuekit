import { createRouter, createWebHistory } from "@innoai-tech/vuekit";
import { createApp } from "vue";
import { App } from "./App";

// from vite plugin
// @ts-ignore
import routes from "~pages";

const base = new URL(document.querySelector("base")?.href ?? "/");

const router = createRouter({
  history: createWebHistory(base.pathname),
  routes,
});

createApp(App).use(router).mount("#root");
