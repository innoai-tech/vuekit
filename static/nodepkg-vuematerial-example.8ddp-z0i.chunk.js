import { X as e, Z as n, c as t } from "./vendor-innoai-tech-vuekit.BzJ0CBX5.chunk.js";
function o(e) {
	return t({
		p: "p",
		...e.components
	}.p, { children: "这不是一个完整的组件库，只是一个示例，作为 vueuikit 的参考" });
}
function r(e = {}) {
	let { wrapper: n } = e.components || {};
	return n ? t(n, {
		...e,
		children: t(o, { ...e })
	}) : o(e);
}
var p = e(() => () => n(r, { components: {} }));
export { p as default };
