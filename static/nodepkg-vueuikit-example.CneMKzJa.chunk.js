import { K as e, V as n, o as t, s as a } from "./lib-nodepkg-vuekit.Dng4O0gc.chunk.js";
import { l as i, s as o } from "./lib-nodepkg-vueuikit.BAbl8dOa.chunk.js";
var s = n(() => {
	let n = i.use();
	return () => t(e, { children: Object.keys(n.token.elevation.tokens).map((e) => t(o, {
		sx: {
			mt: 16,
			p: 16,
			rounded: "lg",
			transitionDuration: "md4",
			transitionTimingFunction: "standard",
			shadow: e,
			_hover: { shadow: `${1 + parseInt(e)}` }
		},
		children: a("div", { children: ["Elevation ", e] })
	}, e)) });
});
export { s as default };
