import { K as e, V as i, o as l, s as n } from "./lib-nodepkg-vuekit.Dng4O0gc.chunk.js";
import { s as h } from "./lib-nodepkg-vueuikit.BAbl8dOa.chunk.js";
import { a as r, c, d, f as a, h as s, i as o, k as t, l as m, m as p, n as u, o as k, p as x, s as f, u as v, x as g } from "./index.DvdiqX_t.entry.js";
var C = i(() => {
	let i = v(() => () => l(o, {
		sx: {
			h: "auto",
			minH: 40
		},
		children: n(f, { children: [l(c, { children: "我是对话框" }), l(p, {
			onClick: () => {
				i.hide();
			},
			children: l(s, { path: g })
		})] })
	})), C = v(() => () => n(o, {
		sx: {
			h: "auto",
			minH: 40
		},
		children: [
			n(f, { children: [l(c, { children: "我是对话框" }), l(p, {
				onClick: () => {
					C.hide();
				},
				children: l(s, { path: g })
			})] }),
			l(r, { children: "xxx" }),
			n(k, { children: [l(t, {
				onClick: () => {
					i.show();
				},
				children: "Open Dialog"
			}), i.$elem] })
		]
	})), $ = m(() => () => l(o, {
		sx: {
			h: "100vh",
			w: 300,
			maxH: "100vh"
		},
		children: n(f, { children: [l(c, { children: "我是对话框" }), l(p, {
			onClick: () => {
				C.hide();
			},
			children: l(s, { path: g })
		})] })
	}));
	return () => l(u, { children: n(h, {
		sx: {
			display: "flex",
			flexDirection: "column",
			gap: 8
		},
		children: [
			l(t, {
				onClick: () => {
					C.show();
				},
				children: "Open Dialog"
			}),
			C.$elem,
			l(x, {
				title: "Tooltip",
				children: l(t, { children: "Hover me" })
			}),
			l(x, {
				title: "Menu",
				children: l(d, {
					$menu: n(e, { children: [
						l(a, { children: "选项一" }),
						l(a, {
							onClick: () => {
								$.show();
							},
							children: "选项二"
						}),
						$.$elem,
						l(d, {
							placement: "right-start",
							$menu: n(e, { children: [l(a, { children: "选项三.1" }), l(a, { children: "选项三.2" })] }),
							children: l(a, { children: "选项三" })
						})
					] }),
					children: l(t, { children: "Menu" })
				})
			})
		]
	}) });
});
export { C as default };
