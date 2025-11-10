import { G as e, c as i, l as n, w as l } from "./vendor-innoai-tech-vuekit.DtvXJv7T.chunk.js";
import { N as h, _ as r, u as c } from "./vendor-innoai-tech-vueuikit.p_1pV-aE.chunk.js";
import { _ as d, c as a, d as s, f as o, g as t, h as m, l as u, m as p, o as k, p as x, s as v, u as f, y as C } from "./vendor-innoai-tech-jsoneditor.D0TF8nNi.chunk.js";
var g = l(() => {
	let l = o(() => () => i(k, {
		sx: {
			h: "auto",
			minH: 40
		},
		children: n(u, { children: [i(f, { children: "我是对话框" }), i(t, {
			onClick: () => {
				l.hide();
			},
			children: i(d, { path: r })
		})] })
	})), g = o(() => () => n(k, {
		sx: {
			h: "auto",
			minH: 40
		},
		children: [
			n(u, { children: [i(f, { children: "我是对话框" }), i(t, {
				onClick: () => {
					g.hide();
				},
				children: i(d, { path: r })
			})] }),
			i(v, { children: "xxx" }),
			n(a, { children: [i(C, {
				onClick: () => {
					l.show();
				},
				children: "Open Dialog"
			}), l.$elem] })
		]
	})), w = s(() => () => i(k, {
		sx: {
			h: "100vh",
			w: 300,
			maxH: "100vh"
		},
		children: n(u, { children: [i(f, { children: "我是对话框" }), i(t, {
			onClick: () => {
				g.hide();
			},
			children: i(d, { path: r })
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
			i(m, {
				title: "Tooltip",
				children: i(C, { children: "Hover me" })
			}),
			i(m, {
				title: "Menu",
				children: i(x, {
					$menu: n(e, { children: [
						i(p, { children: "选项一" }),
						i(p, {
							onClick: () => {
								w.show();
							},
							children: "选项二"
						}),
						w.$elem,
						i(x, {
							placement: "right-start",
							$menu: n(e, { children: [i(p, { children: "选项三.1" }), i(p, { children: "选项三.2" })] }),
							children: i(p, { children: "选项三" })
						})
					] }),
					children: i(C, { children: "Menu" })
				})
			})
		]
	}) });
});
export { g as default };
