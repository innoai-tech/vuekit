import { I as e, L as a, Xt as s, c as i, it as n, l as r } from "./vendor-innoai-tech-vuekit.BPGmk3ir.chunk.js";
import { C as l, N as t, u as d, w as c } from "./vendor-innoai-tech-vueuikit.Dixq5_ax.chunk.js";
import { _ as o, b as h, v as p, y as u } from "./vendor-innoai-tech-jsoneditor.Dpw7bHFQ.chunk.js";
var f = a(() => {
	let a = {
		Enabled: {},
		Disabled: { disabled: !0 },
		Hovered: { hover: !0 },
		Focused: { focus: !0 },
		Pressed: { active: !0 }
	}, f = {
		FilledButton: h,
		OutlinedButton: p,
		TextButton: u
	};
	return () => i(d, { children: i(t, {
		sx: {
			display: "flex",
			flexDirection: "column",
			gap: 48
		},
		children: s(f, (d, h) => i(t, {
			sx: {
				display: "flex",
				flexDirection: "column",
				gap: 16
			},
			children: [
				(e) => e,
				(e) => r(n, { children: [i(o, {
					path: l,
					placement: "start"
				}), e] }),
				(e) => r(n, { children: [e, i(o, {
					path: c,
					placement: "end"
				})] })
			].map((n, r) => i(e, { children: i(t, {
				sx: {
					display: "flex",
					gap: 16
				},
				children: s(a, (e, a) => i(d, {
					...e,
					children: n(a)
				}))
			}) }, `${r}`))
		}, h))
	}) });
});
export { f as default };
