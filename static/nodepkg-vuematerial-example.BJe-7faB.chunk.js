import { B as e, K as a, V as s, o as l, s as i } from "./lib-nodepkg-vuekit.Dng4O0gc.chunk.js";
import { s as n } from "./lib-nodepkg-vueuikit.BAbl8dOa.chunk.js";
import { A as r, D as d, E as t, N as c, O as o, h as p, k as h, n as u } from "./index.DvdiqX_t.entry.js";
var f = s(() => {
	let s = {
		Enabled: {},
		Disabled: { disabled: !0 },
		Hovered: { hover: !0 },
		Focused: { focus: !0 },
		Pressed: { active: !0 }
	}, f = {
		FilledButton: r,
		OutlinedButton: o,
		TextButton: h
	};
	return () => l(u, { children: l(n, {
		sx: {
			display: "flex",
			flexDirection: "column",
			gap: 48
		},
		children: c(f, (r, o) => l(n, {
			sx: {
				display: "flex",
				flexDirection: "column",
				gap: 16
			},
			children: [
				(e) => e,
				(e) => i(a, { children: [l(p, {
					path: t,
					placement: "start"
				}), e] }),
				(e) => i(a, { children: [e, l(p, {
					path: d,
					placement: "end"
				})] })
			].map((a, i) => l(e, { children: l(n, {
				sx: {
					display: "flex",
					gap: 16
				},
				children: c(s, (e, s) => l(r, {
					...e,
					children: a(s)
				}))
			}) }, `${i}`))
		}, o))
	}) });
});
export { f as default };
