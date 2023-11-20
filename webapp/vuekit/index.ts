import { createRouter, createWebHistory } from "@innoai-tech/vuekit";
import { type Plugin, createApp } from "vue";
import { App } from "./App";

// from vite plugin
// @ts-ignore
import routes from "~pages";

console.log(routes);

const base = new URL(document.querySelector("base")?.href ?? "/");

const router = createRouter({
	history: createWebHistory(base.pathname),
	routes,
});

createApp(App)
	.use(router as unknown as Plugin)
	.mount("#root");
