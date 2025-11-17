import { L as e, c as i, it as n, l } from "./vendor-innoai-tech-vuekit.CRQzMVgg.chunk.js";
import { N as h, _ as r, u as c } from "./vendor-innoai-tech-vueuikit.0gpSXcTu.chunk.js";
import { _ as d, c as a, d as s, f as o, g as t, h as m, l as u, m as p, o as k, p as x, s as v, u as f, y as C } from "./vendor-innoai-tech-jsoneditor.xOcY4H82.chunk.js";
var g = e(() => {
	let e = o(() => () => i(k, {
		sx: {
			h: "auto",
			minH: 40
		},
		children: l(u, { children: [i(f, { children: "我是对话框" }), i(t, {
			onClick: () => {
				e.hide();
			},
			children: i(d, { path: r })
		})] })
	})), g = o(() => () => l(k, {
		sx: {
			h: "auto",
			minH: 40
		},
		children: [
			l(u, { children: [i(f, { children: "我是对话框" }), i(t, {
				onClick: () => {
					g.hide();
				},
				children: i(d, { path: r })
			})] }),
			i(v, { children: "xxx" }),
			l(a, { children: [i(C, {
				onClick: () => {
					e.show();
				},
				children: "Open Dialog"
			}), e.$elem] })
		]
	})), $ = s(() => () => i(k, {
		sx: {
			h: "100vh",
			w: 300,
			maxH: "100vh"
		},
		children: l(u, { children: [i(f, { children: "我是对话框" }), i(t, {
			onClick: () => {
				g.hide();
			},
			children: i(d, { path: r })
		})] })
	}));
	return () => i(c, { children: l(h, {
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
					$menu: l(n, { children: [
						i(p, { children: "选项一" }),
						i(p, {
							onClick: () => {
								$.show();
							},
							children: "选项二"
						}),
						$.$elem,
						i(x, {
							placement: "right-start",
							$menu: l(n, { children: [i(p, { children: "选项三.1" }), i(p, { children: "选项三.2" })] }),
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
