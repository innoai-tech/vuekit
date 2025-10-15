import { F as e, P as i, ot as t } from "./vendor-innoai-tech-vuekit.CrdESE0J.chunk.js";
import { m as a } from "./vendor-innoai-tech-vueuikit.6XObxuYp.chunk.js";
import { m as n, t as l } from "./lib-nodepkg-vuematerial.DOllZ8PI.chunk.js";
import { i as d, l as r } from "./vendor-innoai-tech-jsoneditor.VwAXinyt.chunk.js";
import { U as p, n as s } from "./index.7YZvkNcF.entry.js";
var o = e(() => {
	let e = {
		Enabled: {},
		Focused: { focus: !0 },
		Invalid: { invalid: !0 },
		Disabled: { disabled: !0 }
	}, o = { TextField: l };
	return () => p(s, { children: p(a, {
		sx: {
			display: "flex",
			flexDirection: "column",
			gap: 48
		},
		children: t(o, (l, s) => p(a, {
			sx: {
				display: "flex",
				flexDirection: "column",
				gap: 16
			},
			children: [
				(e) => p(l, {
					...e,
					children: p("input", {
						"data-input": "",
						type: "text",
						placeholder: "Type"
					})
				}),
				(e) => p(l, {
					...e,
					valued: !0,
					children: p("input", {
						"data-input": "",
						type: "text",
						value: "Username"
					})
				}),
				(e) => p(l, {
					...e,
					$leading: p(n, { path: d }),
					children: p("input", {
						"data-input": "",
						type: "text"
					})
				}),
				(e) => p(l, {
					...e,
					$trailing: p(n, { path: r }),
					children: p("input", {
						"data-input": "",
						type: "text"
					})
				})
			].map((n, l) => p(i, { children: p(a, {
				sx: {
					display: "flex",
					gap: 16
				},
				children: t(e, (e) => n({
					...e,
					$label: "Name",
					$supporting: "Desc"
				}))
			}) }, `${l}`))
		}, s))
	}) });
});
export { o as default };
