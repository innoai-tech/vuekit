import { C as e, Lt as i, c as a, w as t } from "./vendor-innoai-tech-vuekit.BzJ0CBX5.chunk.js";
import { C as n, N as l, d, u as p } from "./vendor-innoai-tech-vueuikit.CyLdjQA1.chunk.js";
import { g as r, i as s } from "./vendor-innoai-tech-jsoneditor.CaCqtzu8.chunk.js";
var u = t(() => {
	let t = {
		Enabled: {},
		Focused: { focus: !0 },
		Invalid: { invalid: !0 },
		Disabled: { disabled: !0 }
	}, u = { TextField: s };
	return () => a(p, { children: a(l, {
		sx: {
			display: "flex",
			flexDirection: "column",
			gap: 48
		},
		children: i(u, (p, s) => a(l, {
			sx: {
				display: "flex",
				flexDirection: "column",
				gap: 16
			},
			children: [
				(e) => a(p, {
					...e,
					children: a("input", {
						"data-input": "",
						type: "text",
						placeholder: "Type"
					})
				}),
				(e) => a(p, {
					...e,
					valued: !0,
					children: a("input", {
						"data-input": "",
						type: "text",
						value: "Username"
					})
				}),
				(e) => a(p, {
					...e,
					$leading: a(r, { path: d }),
					children: a("input", {
						"data-input": "",
						type: "text"
					})
				}),
				(e) => a(p, {
					...e,
					$trailing: a(r, { path: n }),
					children: a("input", {
						"data-input": "",
						type: "text"
					})
				})
			].map((n, d) => a(e, { children: a(l, {
				sx: {
					display: "flex",
					gap: 16
				},
				children: i(t, (e) => n({
					...e,
					$label: "Name",
					$supporting: "Desc"
				}))
			}) }, `${d}`))
		}, s))
	}) });
});
export { u as default };
