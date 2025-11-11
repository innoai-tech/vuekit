import { L as e, c as o, it as n, l as t } from "./vendor-innoai-tech-vuekit.CihhMnsl.chunk.js";
import { M as r } from "./vendor-innoai-tech-vueuikit.NK6jZyVd.chunk.js";
import { r as a } from "./vendor-innoai-tech-jsoneditor.DvKm6ROx.chunk.js";
var i = r("code", { displayName: "StyledCode" })({
	containerStyle: "sys.surface-container",
	py: 4,
	rounded: "xs"
}), s = e(() => () => t(n, { children: [
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
