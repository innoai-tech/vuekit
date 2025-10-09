import { G as e, c as o, l as n, w as t } from "./vendor-innoai-tech-vuekit.BzJ0CBX5.chunk.js";
import { M as r } from "./vendor-innoai-tech-vueuikit.CyLdjQA1.chunk.js";
import { r as a } from "./vendor-innoai-tech-jsoneditor.CaCqtzu8.chunk.js";
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
