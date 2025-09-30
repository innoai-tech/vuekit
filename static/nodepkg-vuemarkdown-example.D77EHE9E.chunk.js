import { G as e, c as o, l as n, w as t } from "./vendor-innoai-tech-vuekit.2IFYurzk.chunk.js";
import { M as r } from "./vendor-innoai-tech-vueuikit.BMK7Na-R.chunk.js";
import { r as a } from "./vendor-innoai-tech-jsoneditor.CAHNwY1n.chunk.js";
var i = r("code", { displayName: "StyledCode" })({
	containerStyle: "sys.surface-container",
	py: 4,
	rounded: "xs"
}), s = t(() => () => n(e, { children: [
	o(i, {
		sx: { px: 2 },
		children: "123123"
	}),
	o(a, { text: "标题 1" }),
	o(a, {
		text: "`code`",
		components: { code: i }
	})
] }));
export { s as default };
