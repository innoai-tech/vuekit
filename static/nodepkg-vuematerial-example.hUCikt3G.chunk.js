import { C as e, G as a, Lt as s, c as i, l as n, w as r } from "./vendor-innoai-tech-vuekit.BWaMSRNh.chunk.js";
import { C as l, N as t, u as d, w as c } from "./vendor-innoai-tech-vueuikit.Bs4gsjgh.chunk.js";
import { _ as o, b as h, v as p, y as u } from "./vendor-innoai-tech-jsoneditor.BdjxPQkF.chunk.js";
var f = r(() => {
	let r = {
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
				(e) => n(a, { children: [i(o, {
					path: l,
					placement: "start"
				}), e] }),
				(e) => n(a, { children: [e, i(o, {
					path: c,
					placement: "end"
				})] })
			].map((a, n) => i(e, { children: i(t, {
				sx: {
					display: "flex",
					gap: 16
				},
				children: s(r, (e, s) => i(d, {
					...e,
					children: a(s)
				}))
			}) }, `${n}`))
		}, h))
	}) });
});
export { f as default };
