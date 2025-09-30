import { Q as e, Z as n, o as t } from "./lib-nodepkg-vuekit.Dng4O0gc.chunk.js";
function o(e) {
	return t({
		p: "p",
		...e.components
	}.p, { children: "这不是一个完整的组件库，只是一个示例，作为 vueuikit 的参考" });
}
function p(e = {}) {
	let { wrapper: n } = e.components || {};
	return n ? t(n, {
		...e,
		children: t(o, { ...e })
	}) : o(e);
}
var r = n(() => () => e(p, { components: {} }));
export { r as default };
