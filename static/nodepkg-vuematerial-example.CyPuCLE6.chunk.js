import { Q as e, U as n, Z as t } from "./index.7YZvkNcF.entry.js";
function r(e) {
	return n({
		p: "p",
		...e.components
	}.p, { children: "这不是一个完整的组件库，只是一个示例，作为 vueuikit 的参考" });
}
function o(e = {}) {
	let { wrapper: t } = e.components || {};
	return t ? n(t, {
		...e,
		children: n(r, { ...e })
	}) : r(e);
}
var p = t(() => () => e(o, { components: {} }));
export { p as default };
