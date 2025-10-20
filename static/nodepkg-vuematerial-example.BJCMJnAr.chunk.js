import { I as e, L as i, Xt as a, c as t } from "./vendor-innoai-tech-vuekit.rtF9gus2.chunk.js";
import { C as n, N as l, d, u as p } from "./vendor-innoai-tech-vueuikit.BC3LWh99.chunk.js";
import { _ as r, i as s } from "./vendor-innoai-tech-jsoneditor.safzNH3x.chunk.js";
var u = i(() => {
	let i = {
		Enabled: {},
		Focused: { focus: !0 },
		Invalid: { invalid: !0 },
		Disabled: { disabled: !0 }
	}, u = { TextField: s };
	return () => t(p, { children: t(l, {
		sx: {
			display: "flex",
			flexDirection: "column",
			gap: 48
		},
		children: a(u, (p, s) => t(l, {
			sx: {
				display: "flex",
				flexDirection: "column",
				gap: 16
			},
			children: [
				(e) => t(p, {
					...e,
					children: t("input", {
						"data-input": "",
						type: "text",
						placeholder: "Type"
					})
				}),
				(e) => t(p, {
					...e,
					valued: !0,
					children: t("input", {
						"data-input": "",
						type: "text",
						value: "Username"
					})
				}),
				(e) => t(p, {
					...e,
					$leading: t(r, { path: d }),
					children: t("input", {
						"data-input": "",
						type: "text"
					})
				}),
				(e) => t(p, {
					...e,
					$trailing: t(r, { path: n }),
					children: t("input", {
						"data-input": "",
						type: "text"
					})
				})
			].map((n, d) => t(e, { children: t(l, {
				sx: {
					display: "flex",
					gap: 16
				},
				children: a(i, (e) => n({
					...e,
					$label: "Name",
					$supporting: "Desc"
				}))
			}) }, `${d}`))
		}, s))
	}) });
});
export { u as default };
