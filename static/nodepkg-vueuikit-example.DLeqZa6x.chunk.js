import { r as e } from "./rolldown-runtime.D8qhy2Lt.chunk.js";
import { V as l, f as r, o as t, s as a } from "./lib-nodepkg-vuekit.Dng4O0gc.chunk.js";
import { d as s, s as n } from "./lib-nodepkg-vueuikit.BAbl8dOa.chunk.js";
import { N as i, t as o } from "./index.DvdiqX_t.entry.js";
import { t as d } from "./vendor-toggle-selection.BhsMKh4i.chunk.js";
var u = e(d()), c = l(() => {
	let e = o.use(), l = r(null);
	return () => {
		let r = s.fromColors(e.value.seed);
		return a(n, {
			ref: l,
			sx: {
				display: "flex",
				flexDirection: "column",
				gap: 24
			},
			children: [a(n, {
				sx: {
					display: "flex",
					gap: 56
				},
				children: [t(n, {
					sx: {
						display: "flex",
						flexDirection: "column"
					},
					children: i(e.value.seed, (l, r) => a(n, {
						sx: {
							flex: 1,
							display: "flex",
							alignItems: "center",
							gap: 16
						},
						children: [t(n, {
							sx: { flex: 1 },
							children: r
						}), t("input", {
							type: "color",
							value: l,
							onChange: (l) => {
								e.next((e) => {
									e.seed[r] = l.target.value;
								});
							}
						})]
					}))
				}), t(n, {
					sx: {
						display: "flex",
						flexWrap: "wrap",
						gap: 16
					},
					children: i(e.value.rules, ([l, i], o) => a(n, {
						sx: {
							display: "flex",
							alignItems: "center",
							width: "30%"
						},
						children: [t(n, {
							sx: { flex: 1 },
							children: o
						}), t(n, {
							sx: {
								flex: 1,
								display: "flex",
								gap: 4,
								"& input": {
									width: "40%",
									border: "1px solid",
									borderColor: "sys.outline"
								}
							},
							children: t("input", {
								type: "number",
								value: i,
								max: 100,
								min: 0,
								style: {
									backgroundColor: s.toHEX(r.seeds[l].tone(i)),
									color: i > 50 ? "black" : "white"
								},
								"data-color": s.toHEX(r.seeds[l].tone(i)),
								"data-theme": "dark",
								onChange: (r) => {
									try {
										let t = parseInt(r.target.value);
										e.next((e) => {
											e.rules[o] = [
												l,
												t,
												i
											];
										});
									} catch (e) {}
								}
							})
						})]
					}))
				})]
			}), t(n, {
				sx: {
					display: "flex",
					gap: 16,
					"& > *": { flex: 1 }
				},
				children: t("pre", {
					onClick: () => (0, u.default)(JSON.stringify(e.value)),
					children: t("code", { children: JSON.stringify(e.value, null, 2) })
				})
			})]
		});
	};
});
export { c as default };
