import { V as e, o as n, s as o } from "./lib-nodepkg-vuekit.Dng4O0gc.chunk.js";
import { l as i, s as t } from "./lib-nodepkg-vueuikit.BAbl8dOa.chunk.js";
var l = e(() => {
	let e = i.use();
	return () => o(t, {
		sx: {
			display: "flex",
			gap: 16,
			flexDirection: "column"
		},
		children: [n("div", { children: "点击下载，通过 Figma Tokens 全量导入文件" }), n("pre", {
			onClick: () => {
				(function(e, n, o = "application/json") {
					let i = document.createElement("a"), t = new Blob([e], { type: o }), l = URL.createObjectURL(t);
					i.href = l, i.download = n, document.body.appendChild(i), i.click(), setTimeout(() => {
						document.body.removeChild(i), window.URL.revokeObjectURL(l);
					}, 0);
				})(JSON.stringify(e.toFigmaTokens(), null, 2), `tokens.${(/* @__PURE__ */ new Date()).getTime()}.json`);
			},
			children: n("code", { children: JSON.stringify(e.toFigmaTokens(), null, 2) })
		})]
	});
});
export { l as default };
