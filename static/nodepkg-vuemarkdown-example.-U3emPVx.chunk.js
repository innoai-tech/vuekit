import { F as e } from "./vendor-innoai-tech-vuekit.CrdESE0J.chunk.js";
import { p as o } from "./vendor-innoai-tech-vueuikit.6XObxuYp.chunk.js";
import { U as n, W as t, q as r } from "./index.7YZvkNcF.entry.js";
import { t as a } from "./lib-nodepkg-vuemarkdown.DG7jtmya.chunk.js";
var d = o("code", { displayName: "StyledCode" })({
	containerStyle: "sys.surface-container",
	py: 4,
	rounded: "xs"
}), i = e(() => () => t(r, { children: [
	n(d, {
		sx: { px: 2 },
		children: "123123"
	}),
	n(a, { text: "标题 1" }),
	n(a, {
		text: "`code`",
		components: { code: d }
	})
] }));
export { i as default };
