import { GlobalRegistrator } from "@happy-dom/global-registrator";

// https://github.com/oven-sh/bun/issues/6044#issuecomment-1743414281
const global = {
	console: console,
};

GlobalRegistrator.register();

Object.assign(window, global);
