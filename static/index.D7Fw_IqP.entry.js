const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/nodepkg-jsoneditor-example.Cim8F6zC.chunk.js","static/vendor-innoai-tech-jsoneditor.CAHNwY1n.chunk.js","static/vendor-innoai-tech-vueuikit.BMK7Na-R.chunk.js","static/vendor-innoai-tech-vuekit.2IFYurzk.chunk.js","static/vendor-rxjs.DL8ozOFE.chunk.js","static/rolldown-runtime.D8qhy2Lt.chunk.js","static/nodepkg-jsoneditor-example.By3c62Kw.chunk.js","static/nodepkg-vuemarkdown-example.D77EHE9E.chunk.js","static/nodepkg-vuematerial-example.ykjDRC88.chunk.js","static/nodepkg-vuematerial-example.CRXH-gjp.chunk.js","static/nodepkg-vuematerial-example.FMTHkXhO.chunk.js","static/nodepkg-vuematerial-example.CoNAmICv.chunk.js","static/nodepkg-vuematerial-example.Dsuwsw72.chunk.js","static/nodepkg-vueuikit-example.CJOkCa5q.chunk.js","static/nodepkg-vueuikit-example.C6riyY-D.chunk.js","static/nodepkg-vueuikit-example.DoxLKyxS.chunk.js","static/nodepkg-vueuikit-example.DLf0Nm8v.chunk.js","static/nodepkg-vueuikit-example.CE0knFca.chunk.js","static/nodepkg-vueuikit-example.BvERAOOf.chunk.js","static/nodepkg-vueuikit-example.BVsam-ON.chunk.js","static/nodepkg-vuekit-example.CSzINGQ-.chunk.js","static/nodepkg-vuekit-example.BqZs0E7z.chunk.js","static/webapp-vuekit-layout.C4mFRSx_.chunk.js"])))=>i.map(i=>d[i]);
import { Ct as e, _ as n, b as t, c as o, j as i, l as r, nt as a, tt as s, v as l, w as p, x as d, y as c, yt as u } from "./vendor-innoai-tech-vuekit.2IFYurzk.chunk.js";
import { A as m, B as h, E as _, F as f, I as v, J as g, L as k, N as E, P as b, T as y, U as x, Y as I, j as w, l as R, q as O, u as S, y as j } from "./vendor-innoai-tech-vueuikit.BMK7Na-R.chunk.js";
import { g as T, h as D, m as V, v as C } from "./vendor-innoai-tech-jsoneditor.CAHNwY1n.chunk.js";
let A = document.createElement("link").relList;
if (!(A && A.supports && A.supports("modulepreload"))) {
	for (let e of document.querySelectorAll("link[rel=\"modulepreload\"]")) z(e);
	new MutationObserver((e) => {
		for (let n of e) if ("childList" === n.type) for (let e of n.addedNodes) "LINK" === e.tagName && "modulepreload" === e.rel && z(e);
	}).observe(document, {
		childList: !0,
		subtree: !0
	});
}
function z(e) {
	if (e.ep) return;
	e.ep = !0;
	let n = function(e) {
		let n = {};
		return e.integrity && (n.integrity = e.integrity), e.referrerPolicy && (n.referrerPolicy = e.referrerPolicy), "use-credentials" === e.crossOrigin ? n.credentials = "include" : "anonymous" === e.crossOrigin ? n.credentials = "omit" : n.credentials = "same-origin", n;
	}(e);
	fetch(e.href, n);
}
var P = Object.prototype.hasOwnProperty, N = e(function(e, n, t) {
	P.call(e, t) ? e[t].push(n) : I(e, t, [n]);
}), L = p(() => {
	let e = N(d().options.routes.filter((e) => "/" !== e.path), (e) => e.path.split("/")[1]);
	return () => o(E, {
		sx: {
			py: 16,
			px: 0,
			textTransform: "capitalize"
		},
		children: O(e, (e, t) => {
			let [i, a] = u(e, (e) => e.path === `/${t}`);
			return r(E, {
				sx: { px: 8 },
				children: [i[0] ? o(C, {
					component: n,
					sx: {
						width: "100%",
						justifyContent: "flex-start"
					},
					activeClass: "active",
					to: i[0]?.path,
					children: t
				}) : o(C, {
					sx: {
						width: "100%",
						justifyContent: "flex-start"
					},
					children: t
				}), o(E, {
					sx: { pl: 16 },
					children: O(a, (e) => o(C, {
						component: n,
						activeClass: "active",
						to: e.path,
						sx: {
							width: "100%",
							justifyContent: "flex-start"
						},
						children: g(e.path.split("/"))?.replaceAll("-", " ")
					}, e.name))
				})]
			}, t);
		})
	});
}, { displayName: "Nav" }), M = p({ $default: i().optional() }, (e, { slots: n }) => {
	let t = a("light");
	return () => r(E, {
		"data-theme": t.value,
		sx: {
			display: "flex",
			height: "100vh",
			width: "100vw",
			containerStyle: "sys.surface"
		},
		children: [r(E, {
			sx: {
				display: "flex",
				flexDirection: "column",
				width: "280px",
				height: "100vh",
				borderRightRadius: "lg",
				overflowY: "auto",
				containerStyle: "sys.surface-container-low",
				elevation: "0",
				_hover: { elevation: "2" }
			},
			children: [o(E, {
				sx: { flex: 1 },
				children: o(L, {})
			}), r(E, {
				sx: {
					p: 16,
					display: "flex",
					justifyContent: "flex-end"
				},
				children: [o(D, {
					component: "a",
					target: "_blank",
					sx: { color: "sys.on-surface-variant" },
					href: "//github.com/innoai-tech/vuekit",
					children: o(T, { path: j })
				}), o(V, {
					title: `切换到${"light" === t.value ? "深色模式" : "浅色模式"}`,
					children: o(E, {
						component: D,
						"data-test": !0,
						sx: { color: "sys.on-surface-variant" },
						onClick: () => {
							t.value = "light" === t.value ? "dark" : "light";
						},
						children: o(T, { path: "light" === t.value ? y : _ })
					})
				})]
			})]
		}), o(E, {
			sx: {
				flex: 1,
				overflow: "auto"
			},
			children: o(S, { children: n.default?.() })
		})]
	});
}, { displayName: "Scaffold" }), F = p(() => {
	let e = R.use(), n = b.use();
	return s([() => e.value.seed, () => e.value.rules], ([n, t]) => {
		e.next((e) => {
			e.theming = h.create({
				...v,
				...k.fromColors(n).toDesignTokens(t)
			}, { varPrefix: "vk" });
		});
	}), () => {
		let t = e.value.theming, i = t.unstable_css(n, { ":root": t.rootCSSVars });
		return o(R, {
			value: e,
			children: r(f, {
				value: t,
				children: [
					o(m, {}),
					o(w, { styles: "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n" }),
					o(M, { children: o(l, {}) })
				]
			}, i.name)
		});
	};
}, { displayName: "App" }), $ = {};
let q = function(e, n, t) {
	let o = Promise.resolve();
	if (n && n.length > 0) {
		let e = document.getElementsByTagName("link"), i = document.querySelector("meta[property=csp-nonce]"), r = i?.nonce || i?.getAttribute("nonce");
		o = Promise.all(n.map((n) => {
			if ((n = "/vuekit/" + n) in $) return;
			$[n] = !0;
			let o = n.endsWith(".css");
			if (t) for (let t = e.length - 1; t >= 0; t--) {
				let i = e[t];
				if (i.href === n && (!o || "stylesheet" === i.rel)) return;
			}
			else if (document.querySelector(`link[href="${n}"]${o ? "[rel=\"stylesheet\"]" : ""}`)) return;
			let i = document.createElement("link");
			if (i.rel = o ? "stylesheet" : "modulepreload", o || (i.as = "script"), i.crossOrigin = "", i.href = n, r && i.setAttribute("nonce", r), document.head.appendChild(i), o) return new Promise((e, t) => {
				i.addEventListener("load", e), i.addEventListener("error", () => t(Error(`Unable to preload CSS for ${n}`)));
			});
		}).map((e) => Promise.resolve(e).then((e) => ({
			status: "fulfilled",
			value: e
		}), (e) => ({
			status: "rejected",
			reason: e
		}))));
	}
	function i(e) {
		let n = new Event("vite:preloadError", { cancelable: !0 });
		if (n.payload = e, window.dispatchEvent(n), !n.defaultPrevented) throw e;
	}
	return o.then((n) => {
		for (let e of n || []) "rejected" === e.status && i(e.reason);
		return e().catch(i);
	});
};
var B = [
	{
		name: "jsoneditor-jsoneditor",
		path: "/jsoneditor/jsoneditor",
		component: () => q(() => import("./nodepkg-jsoneditor-example.Cim8F6zC.chunk.js"), __vite__mapDeps([0,1,2,3,4,5])),
		props: !0
	},
	{
		name: "jsoneditor-jsoneditor-large",
		path: "/jsoneditor/jsoneditor-large",
		component: () => q(() => import("./nodepkg-jsoneditor-example.By3c62Kw.chunk.js"), __vite__mapDeps([6,1,2,3,4,5])),
		props: !0
	},
	{
		name: "vuemarkdown-markdown",
		path: "/vuemarkdown/markdown",
		component: () => q(() => import("./nodepkg-vuemarkdown-example.D77EHE9E.chunk.js"), __vite__mapDeps([7,1,2,3,4,5])),
		props: !0
	},
	{
		name: "vuematerial",
		path: "/vuematerial",
		component: () => q(() => import("./nodepkg-vuematerial-example.ykjDRC88.chunk.js"), __vite__mapDeps([8,3,4])),
		props: !0
	},
	{
		name: "vuematerial-buttons",
		path: "/vuematerial/buttons",
		component: () => q(() => import("./nodepkg-vuematerial-example.CRXH-gjp.chunk.js"), __vite__mapDeps([9,1,2,3,4,5])),
		props: !0
	},
	{
		name: "vuematerial-textfields",
		path: "/vuematerial/textfields",
		component: () => q(() => import("./nodepkg-vuematerial-example.FMTHkXhO.chunk.js"), __vite__mapDeps([10,1,2,3,4,5])),
		props: !0
	},
	{
		name: "vuematerial-overlays",
		path: "/vuematerial/overlays",
		component: () => q(() => import("./nodepkg-vuematerial-example.CoNAmICv.chunk.js"), __vite__mapDeps([11,1,2,3,4,5])),
		props: !0
	},
	{
		name: "vuematerial-icons",
		path: "/vuematerial/icons",
		component: () => q(() => import("./nodepkg-vuematerial-example.Dsuwsw72.chunk.js"), __vite__mapDeps([12,1,2,3,4,5])),
		props: !0
	},
	{
		name: "vueuikit",
		path: "/vueuikit",
		component: () => q(() => import("./nodepkg-vueuikit-example.CJOkCa5q.chunk.js"), __vite__mapDeps([13,2,3,4,5])),
		props: !0
	},
	{
		name: "vueuikit-color-palette",
		path: "/vueuikit/color-palette",
		component: () => q(() => import("./nodepkg-vueuikit-example.C6riyY-D.chunk.js"), __vite__mapDeps([14,2,3,4,5])),
		props: !0
	},
	{
		name: "vueuikit-color-scheme",
		path: "/vueuikit/color-scheme",
		component: () => q(() => import("./nodepkg-vueuikit-example.DoxLKyxS.chunk.js"), __vite__mapDeps([15,2,3,4,5])),
		props: !0
	},
	{
		name: "vueuikit-popper",
		path: "/vueuikit/popper",
		component: () => q(() => import("./nodepkg-vueuikit-example.DLf0Nm8v.chunk.js"), __vite__mapDeps([16,2,3,4,5])),
		props: !0
	},
	{
		name: "vueuikit-elevation",
		path: "/vueuikit/elevation",
		component: () => q(() => import("./nodepkg-vueuikit-example.CE0knFca.chunk.js"), __vite__mapDeps([17,2,3,4,5])),
		props: !0
	},
	{
		name: "vueuikit-typography",
		path: "/vueuikit/typography",
		component: () => q(() => import("./nodepkg-vueuikit-example.BvERAOOf.chunk.js"), __vite__mapDeps([18,2,3,4,5])),
		props: !0
	},
	{
		name: "vueuikit-figma-tokens",
		path: "/vueuikit/figma-tokens",
		component: () => q(() => import("./nodepkg-vueuikit-example.BVsam-ON.chunk.js"), __vite__mapDeps([19,2,3,4,5])),
		props: !0
	},
	{
		name: "vuekit",
		path: "/vuekit",
		component: () => q(() => import("./nodepkg-vuekit-example.CSzINGQ-.chunk.js"), __vite__mapDeps([20,3,4])),
		props: !0
	},
	{
		name: "vuekit-rx-in-vue",
		path: "/vuekit/rx-in-vue",
		component: () => q(() => import("./nodepkg-vuekit-example.BqZs0E7z.chunk.js"), __vite__mapDeps([21,3,4])),
		props: !0
	},
	{
		name: "index",
		path: "/",
		component: Object.assign(p(() => () => o(E, {
			sx: {
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				textStyle: "sys.display-large"
			},
			children: "Vuekit"
		})), { meta: {
			name: "Home",
			icon: () => q(() => import("./webapp-vuekit-layout.C4mFRSx_.chunk.js"), __vite__mapDeps([22,2,3,4,5]))
		} }),
		props: !0
	}
];
console.log(B);
var U = c({
	history: t(new URL(document.querySelector("base")?.href ?? "/").pathname),
	routes: B
});
x(F).use(U).mount("#root");
