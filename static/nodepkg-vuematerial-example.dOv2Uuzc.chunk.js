import { F as e } from "./vendor-innoai-tech-vuekit.CrdESE0J.chunk.js";
import { m as i } from "./vendor-innoai-tech-vueuikit.6XObxuYp.chunk.js";
import { a as n, c as l, d as r, f as h, g as c, i as d, l as a, m as o, o as s, p as t, r as m, s as u, u as p } from "./lib-nodepkg-vuematerial.DOllZ8PI.chunk.js";
import { o as k } from "./vendor-innoai-tech-jsoneditor.VwAXinyt.chunk.js";
import { U as x, W as f, n as v, q as g } from "./index.7YZvkNcF.entry.js";
var j = e(() => {
	let e = a(() => () => x(m, {
		sx: {
			h: "auto",
			minH: 40
		},
		children: f(s, { children: [x(u, { children: "我是对话框" }), x(t, {
			onClick: () => {
				e.hide();
			},
			children: x(o, { path: k })
		})] })
	})), j = a(() => () => f(m, {
		sx: {
			h: "auto",
			minH: 40
		},
		children: [
			f(s, { children: [x(u, { children: "我是对话框" }), x(t, {
				onClick: () => {
					j.hide();
				},
				children: x(o, { path: k })
			})] }),
			x(d, { children: "xxx" }),
			f(n, { children: [x(c, {
				onClick: () => {
					e.show();
				},
				children: "Open Dialog"
			}), e.$elem] })
		]
	})), C = l(() => () => x(m, {
		sx: {
			h: "100vh",
			w: 300,
			maxH: "100vh"
		},
		children: f(s, { children: [x(u, { children: "我是对话框" }), x(t, {
			onClick: () => {
				j.hide();
			},
			children: x(o, { path: k })
		})] })
	}));
	return () => x(v, { children: f(i, {
		sx: {
			display: "flex",
			flexDirection: "column",
			gap: 8
		},
		children: [
			x(c, {
				onClick: () => {
					j.show();
				},
				children: "Open Dialog"
			}),
			j.$elem,
			x(h, {
				title: "Tooltip",
				children: x(c, { children: "Hover me" })
			}),
			x(h, {
				title: "Menu",
				children: x(p, {
					$menu: f(g, { children: [
						x(r, { children: "选项一" }),
						x(r, {
							onClick: () => {
								C.show();
							},
							children: "选项二"
						}),
						C.$elem,
						x(p, {
							placement: "right-start",
							$menu: f(g, { children: [x(r, { children: "选项三.1" }), x(r, { children: "选项三.2" })] }),
							children: x(r, { children: "选项三" })
						})
					] }),
					children: x(c, { children: "Menu" })
				})
			})
		]
	}) });
});
export { j as default };
