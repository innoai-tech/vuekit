import { K as e, V as s, o as l, s as t } from "./lib-nodepkg-vuekit.Dng4O0gc.chunk.js";
import { l as r, s as o } from "./lib-nodepkg-vueuikit.BAbl8dOa.chunk.js";
var n = s(() => {
	let s = r.use();
	return () => l(e, { children: l(o, {
		sx: {
			height: "40vh",
			display: "flex",
			flexDirection: "column",
			flexWrap: "wrap",
			justifyContent: "space-between",
			gap: 8
		},
		children: s.token.textStyle.tokens.map((e) => t(o, {
			sx: {
				flex: 1,
				rounded: "md",
				textStyle: e,
				p: 16,
				border: "2px solid",
				borderColor: "sys.outline-variant",
				bgColor: "sys.surface-container",
				color: "sys.primary",
				minW: "10vw",
				whiteSpace: "nowrap",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between"
			},
			children: [
				l(o, {
					sx: { textStyle: "sys.label-small" },
					children: e
				}),
				l(o, { sx: { flex: 1 } }),
				l(o, {
					sx: { py: 16 },
					children: "中文测试"
				})
			]
		}, e))
	}) });
});
export { n as default };
