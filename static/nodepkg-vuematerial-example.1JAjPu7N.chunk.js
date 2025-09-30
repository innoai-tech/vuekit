import { B as e, V as a, o as i } from "./lib-nodepkg-vuekit.Dng4O0gc.chunk.js";
import { s as t } from "./lib-nodepkg-vueuikit.BAbl8dOa.chunk.js";
import { E as l, N as n, g as d, h as p, n as s, r } from "./index.DvdiqX_t.entry.js";
var u = a(() => {
	let a = {
		Enabled: {},
		Focused: { focus: !0 },
		Invalid: { invalid: !0 },
		Disabled: { disabled: !0 }
	}, u = { TextField: r };
	return () => i(s, { children: i(t, {
		sx: {
			display: "flex",
			flexDirection: "column",
			gap: 48
		},
		children: n(u, (s, r) => i(t, {
			sx: {
				display: "flex",
				flexDirection: "column",
				gap: 16
			},
			children: [
				(e) => i(s, {
					...e,
					children: i("input", {
						"data-input": "",
						type: "text",
						placeholder: "Type"
					})
				}),
				(e) => i(s, {
					...e,
					valued: !0,
					children: i("input", {
						"data-input": "",
						type: "text",
						value: "Username"
					})
				}),
				(e) => i(s, {
					...e,
					$leading: i(p, { path: d }),
					children: i("input", {
						"data-input": "",
						type: "text"
					})
				}),
				(e) => i(s, {
					...e,
					$trailing: i(p, { path: l }),
					children: i("input", {
						"data-input": "",
						type: "text"
					})
				})
			].map((l, d) => i(e, { children: i(t, {
				sx: {
					display: "flex",
					gap: 16
				},
				children: n(a, (e) => l({
					...e,
					$label: "Name",
					$supporting: "Desc"
				}))
			}) }, `${d}`))
		}, r))
	}) });
});
export { u as default };
