import { c as e, lt as n, ut as t } from "./vendor-innoai-tech-vuekit.BPGmk3ir.chunk.js";
function o(n) {
	return e({
		p: "p",
		...n.components
	}.p, { children: "这不是一个完整的组件库，只是一个示例，作为 vueuikit 的参考" });
}
function r(n = {}) {
	let { wrapper: t } = n.components || {};
	return t ? e(t, {
		...n,
		children: e(o, { ...n })
	}) : o(n);
}
var p = n(() => () => t(r, { components: {} }));
export { p as default };
