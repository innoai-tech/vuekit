import { K as e, V as o, o as s, s as t } from "./lib-nodepkg-vuekit.Dng4O0gc.chunk.js";
import { o as r } from "./lib-nodepkg-vueuikit.BAbl8dOa.chunk.js";
import { t as a } from "./vendor-rxjs.CN26Be5v.chunk.js";
var d = r("code", { displayName: "StyledCode" })({
	containerStyle: "sys.surface-container",
	py: 4,
	rounded: "xs"
}), n = o(() => () => t(e, { children: [
	s(d, {
		sx: { px: 2 },
		children: "123123"
	}),
	s(a, { text: "标题 1" }),
	s(a, {
		text: "`code`",
		components: { code: d }
	})
] }));
export { n as default };
