import { G as e, c as i, l as n, w as l } from "./vendor-innoai-tech-vuekit.MKBnlEgu.chunk.js";
import { N as h, _ as r, u as c } from "./vendor-innoai-tech-vueuikit.Dn_svbHX.chunk.js";
import { a as d, c as a, d as s, f as o, g as t, h as m, l as u, m as p, o as k, p as v, s as x, u as f, v as C } from "./vendor-innoai-tech-jsoneditor.CaFa3F5t.chunk.js";
var g = l(() => {
	let l = s(() => () => i(d, {
		sx: {
			h: "auto",
			minH: 40
		},
		children: n(a, { children: [i(u, { children: "我是对话框" }), i(m, {
			onClick: () => {
				l.hide();
			},
			children: i(t, { path: r })
		})] })
	})), g = s(() => () => n(d, {
		sx: {
			h: "auto",
			minH: 40
		},
		children: [
			n(a, { children: [i(u, { children: "我是对话框" }), i(m, {
				onClick: () => {
					g.hide();
				},
				children: i(t, { path: r })
			})] }),
			i(k, { children: "xxx" }),
			n(x, { children: [i(C, {
				onClick: () => {
					l.show();
				},
				children: "Open Dialog"
			}), l.$elem] })
		]
	})), w = f(() => () => i(d, {
		sx: {
			h: "100vh",
			w: 300,
			maxH: "100vh"
		},
		children: n(a, { children: [i(u, { children: "我是对话框" }), i(m, {
			onClick: () => {
				g.hide();
			},
			children: i(t, { path: r })
		})] })
	}));
	return () => i(c, { children: n(h, {
		sx: {
			display: "flex",
			flexDirection: "column",
			gap: 8
		},
		children: [
			i(C, {
				onClick: () => {
					g.show();
				},
				children: "Open Dialog"
			}),
			g.$elem,
			i(p, {
				title: "Tooltip",
				children: i(C, { children: "Hover me" })
			}),
			i(p, {
				title: "Menu",
				children: i(o, {
					$menu: n(e, { children: [
						i(v, { children: "选项一" }),
						i(v, {
							onClick: () => {
								w.show();
							},
							children: "选项二"
						}),
						w.$elem,
						i(o, {
							placement: "right-start",
							$menu: n(e, { children: [i(v, { children: "选项三.1" }), i(v, { children: "选项三.2" })] }),
							children: i(v, { children: "选项三" })
						})
					] }),
					children: i(C, { children: "Menu" })
				})
			})
		]
	}) });
});
export { g as default };
