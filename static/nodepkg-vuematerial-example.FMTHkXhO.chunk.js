import { C as e, c as i, w as a } from "./vendor-innoai-tech-vuekit.2IFYurzk.chunk.js";
import { C as t, N as n, d as l, q as d, u as p } from "./vendor-innoai-tech-vueuikit.BMK7Na-R.chunk.js";
import { g as r, i as s } from "./vendor-innoai-tech-jsoneditor.CAHNwY1n.chunk.js";
var u = a(() => {
	let a = {
		Enabled: {},
		Focused: { focus: !0 },
		Invalid: { invalid: !0 },
		Disabled: { disabled: !0 }
	}, u = { TextField: s };
	return () => i(p, { children: i(n, {
		sx: {
			display: "flex",
			flexDirection: "column",
			gap: 48
		},
		children: d(u, (p, s) => i(n, {
			sx: {
				display: "flex",
				flexDirection: "column",
				gap: 16
			},
			children: [
				(e) => i(p, {
					...e,
					children: i("input", {
						"data-input": "",
						type: "text",
						placeholder: "Type"
					})
				}),
				(e) => i(p, {
					...e,
					valued: !0,
					children: i("input", {
						"data-input": "",
						type: "text",
						value: "Username"
					})
				}),
				(e) => i(p, {
					...e,
					$leading: i(r, { path: l }),
					children: i("input", {
						"data-input": "",
						type: "text"
					})
				}),
				(e) => i(p, {
					...e,
					$trailing: i(r, { path: t }),
					children: i("input", {
						"data-input": "",
						type: "text"
					})
				})
			].map((t, l) => i(e, { children: i(n, {
				sx: {
					display: "flex",
					gap: 16
				},
				children: d(a, (e) => t({
					...e,
					$label: "Name",
					$supporting: "Desc"
				}))
			}) }, `${l}`))
		}, s))
	}) });
});
export { u as default };
