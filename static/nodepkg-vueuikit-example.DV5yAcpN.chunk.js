import { B as e, K as s, V as r, o as l, s as i } from "./lib-nodepkg-vuekit.Dng4O0gc.chunk.js";
import { D as n, s as o } from "./lib-nodepkg-vueuikit.BAbl8dOa.chunk.js";
import { N as a } from "./index.DvdiqX_t.entry.js";
var c = {
	0: !0,
	10: !0,
	20: !0,
	30: !0,
	40: !0,
	50: !0,
	60: !0,
	70: !0,
	80: !0,
	90: !0,
	95: !0,
	100: !0
}, t = r(() => () => l(s, { children: ["light", "dark"].map((s) => i("div", {
	"data-theme": s,
	children: [i(o, {
		component: "h1",
		sx: {
			textStyle: "sys.headline-medium",
			pb: 8,
			mt: 16
		},
		children: [n(s), " Scheme"]
	}), i(o, {
		sx: {
			display: "flex",
			flexDirection: "column",
			gap: 16
		},
		children: [l(o, {
			sx: {
				display: "flex",
				flexWrap: "wrap",
				gap: 16
			},
			children: [
				"primary",
				"secondary",
				"tertiary",
				"error",
				"warning",
				"success"
			].map((s) => i(o, {
				sx: {
					flex: 1,
					minW: 1 / 4,
					display: "flex",
					alignItems: "stretch"
				},
				children: [l(o, {
					sx: {
						flex: 1,
						display: "flex",
						flexDirection: "column"
					},
					children: ["", "-container"].map((r) => i(e, { children: [l(o, {
						sx: {
							bgColor: `sys.${s}${r}`,
							color: `sys.on-${s}${r}`,
							p: 8,
							flex: 3
						},
						children: `${s}${r}`
					}), l(o, {
						sx: {
							color: `sys.${s}${r}`,
							bgColor: `sys.on-${s}${r}`,
							p: 8,
							flex: 1
						},
						children: `on-${s}${r}`
					})] }, r))
				}), l(o, {
					sx: {
						display: "flex",
						flexDirection: "column"
					},
					children: a(c, (e, r) => i(o, {
						sx: {
							color: `${s}.${parseInt(r) > 50 ? 0 : 100}`,
							bgColor: `${s}.${r}`,
							w: 60,
							p: 8,
							textAlign: "right"
						},
						children: [".", r]
					}))
				})]
			}, s))
		}), i("div", { children: [
			l(o, {
				sx: {
					display: "flex",
					"& > *": { width: 1 / 3 }
				},
				children: [
					"-dim",
					"",
					"-bright"
				].map((e) => l(o, {
					sx: {
						color: "sys.on-surface",
						bgColor: `sys.surface${e}`,
						height: 80,
						p: 8
					},
					children: `surface${e}`
				}))
			}),
			l(o, {
				sx: {
					display: "flex",
					"& > *": { width: 1 / 4 }
				},
				children: [
					"-lowest",
					"-low",
					"",
					"-high",
					"-highest"
				].map((e) => l(o, {
					sx: {
						color: "sys.on-surface",
						bgColor: `sys.surface-container${e}`,
						height: 80,
						p: 8
					},
					children: `surface-container${e}`
				}))
			}),
			l(o, {
				sx: {
					display: "flex",
					"& > *": { width: 1 / 4 }
				},
				children: [
					"on-surface",
					"on-surface-variant",
					"outline",
					"outline-variant"
				].map((e) => l(o, {
					sx: {
						color: e.includes("outline-variant") ? "sys.inverse-surface" : "sys.inverse-on-surface",
						bgColor: `sys.${e}`,
						height: 80,
						p: 8
					},
					children: e
				}))
			}),
			l(o, {
				sx: { display: "flex" },
				children: a(c, (e, s) => i(o, {
					sx: {
						color: `neutral.${parseInt(s) > 50 ? 0 : 100}`,
						bgColor: `neutral.${s}`,
						flex: 1,
						p: 8,
						textAlign: "right"
					},
					children: [".", s]
				}))
			})
		] })]
	})]
}, s)) }));
export { t as default };
