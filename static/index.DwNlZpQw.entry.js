const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/webapp-vuekit-layout.BmQhjQBl.chunk.js","static/vendor-innoai-tech-vueuikit.C4g2OQui.chunk.js","static/vendor-innoai-tech-vuekit.CmmKMl5x.chunk.js","static/vendor-rxjs.B52GCUIj.chunk.js","static/rolldown-runtime.L2H4EfuM.chunk.js","static/nodepkg-jsoneditor-example.BoeJvQVE.chunk.js","static/vendor-innoai-tech-jsoneditor.CqEMAEzi.chunk.js","static/nodepkg-jsoneditor-example.BaUTyRE7.chunk.js","static/nodepkg-vuemarkdown-example.BzqnBHaC.chunk.js","static/nodepkg-vuematerial-example.YFTtwbCW.chunk.js","static/nodepkg-vuematerial-example.CrBa2U8c.chunk.js","static/nodepkg-vuematerial-example.l3yeQy3f.chunk.js","static/nodepkg-vuematerial-example.DH6NU8qJ.chunk.js","static/nodepkg-vuematerial-example.BifUiC_-.chunk.js","static/nodepkg-vuematerial-example.COAtAEum.chunk.js","static/nodepkg-vueuikit-example.Fqrk7B1q.chunk.js","static/nodepkg-vueuikit-example.CZdSLNs0.chunk.js","static/nodepkg-vueuikit-example.yeXYlvdd.chunk.js","static/nodepkg-vueuikit-example.DgUYcKk0.chunk.js","static/nodepkg-vueuikit-example.DpBMiSsX.chunk.js","static/nodepkg-vueuikit-example.T9Q2vfOd.chunk.js","static/nodepkg-vueuikit-example.0ci_gaoy.chunk.js","static/nodepkg-vuekit-example.cuHlfg9G.chunk.js","static/nodepkg-vuekit-example.CzZJ6aDp.chunk.js"])))=>i.map(i=>d[i]);
import { A as RouterLink, Jt as partition, L as component, M as createRouter, N as createWebHistory, P as useRouter, Qt as last, W as custom, Xt as map, Yt as groupBy, c as jsx, ht as ref, j as RouterView, l as jsxs, mt as watch } from "./vendor-innoai-tech-vuekit.CmmKMl5x.chunk.js";
import { A as CSSReset, B as Theming, E as mdiWhiteBalanceSunny, F as ThemeProvider, I as defaultTheme, L as Palette, N as Box, P as CacheProvider, T as mdiWeatherNight, W as createApp, j as GlobalStyle, l as DynamicThemingProvider, u as Container, y as mdiGithub } from "./vendor-innoai-tech-vueuikit.C4g2OQui.chunk.js";
import { _ as Icon, g as IconButton, h as Tooltip, y as TextButton } from "./vendor-innoai-tech-jsoneditor.CqEMAEzi.chunk.js";
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = /* @__PURE__ */ getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
var normalize_default = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n";
var Nav = /* @__PURE__ */ component(() => {
	const groups = /* @__PURE__ */ groupBy(/* @__PURE__ */ useRouter().options.routes.filter((p) => p.path !== "/"), (route) => route.path.split("/")[1]);
	return () => {
		return /* @__PURE__ */ jsx(Box, {
			sx: {
				py: 16,
				px: 0,
				textTransform: "capitalize"
			},
			children: /* @__PURE__ */ map(groups, (routes$1, group) => {
				const [index, subRoutes] = partition(routes$1, (r) => r.path === `/${group}`);
				return /* @__PURE__ */ jsxs(Box, {
					sx: { px: 8 },
					children: [index[0] ? /* @__PURE__ */ jsx(TextButton, {
						component: RouterLink,
						sx: {
							width: "100%",
							justifyContent: "flex-start"
						},
						activeClass: "active",
						to: index[0]?.path,
						children: group
					}) : /* @__PURE__ */ jsx(TextButton, {
						sx: {
							width: "100%",
							justifyContent: "flex-start"
						},
						children: group
					}), /* @__PURE__ */ jsx(Box, {
						sx: { pl: 16 },
						children: /* @__PURE__ */ map(subRoutes, (subRoute) => /* @__PURE__ */ jsx(TextButton, {
							component: RouterLink,
							activeClass: "active",
							to: subRoute.path,
							sx: {
								width: "100%",
								justifyContent: "flex-start"
							},
							children: last(/* @__PURE__ */ subRoute.path.split("/"))?.replaceAll("-", " ")
						}, subRoute.name))
					})]
				}, group);
			})
		});
	};
}, { displayName: "Nav" });
var Scaffold = /* @__PURE__ */ component({ $default: /* @__PURE__ */ custom().optional() }, (_, { slots }) => {
	const themeMode = /* @__PURE__ */ ref("light");
	return () => /* @__PURE__ */ jsxs(Box, {
		"data-theme": themeMode.value,
		sx: {
			display: "flex",
			height: "100vh",
			width: "100vw",
			containerStyle: "sys.surface"
		},
		children: [/* @__PURE__ */ jsxs(Box, {
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
			children: [/* @__PURE__ */ jsx(Box, {
				sx: { flex: 1 },
				children: /* @__PURE__ */ jsx(Nav, {})
			}), /* @__PURE__ */ jsxs(Box, {
				sx: {
					p: 16,
					display: "flex",
					justifyContent: "flex-end"
				},
				children: [/* @__PURE__ */ jsx(IconButton, {
					component: "a",
					target: "_blank",
					sx: { color: "sys.on-surface-variant" },
					href: "//github.com/innoai-tech/vuekit",
					children: /* @__PURE__ */ jsx(Icon, { path: mdiGithub })
				}), /* @__PURE__ */ jsx(Tooltip, {
					title: `切换到${themeMode.value === "light" ? "深色模式" : "浅色模式"}`,
					children: /* @__PURE__ */ jsx(Box, {
						component: IconButton,
						"data-test": true,
						sx: { color: "sys.on-surface-variant" },
						onClick: () => {
							themeMode.value = themeMode.value === "light" ? "dark" : "light";
						},
						children: /* @__PURE__ */ jsx(Icon, { path: themeMode.value === "light" ? mdiWeatherNight : mdiWhiteBalanceSunny })
					})
				})]
			})]
		}), /* @__PURE__ */ jsx(Box, {
			sx: {
				flex: 1,
				overflow: "auto"
			},
			children: /* @__PURE__ */ jsx(Container, { children: slots.default?.() })
		})]
	});
}, { displayName: "Scaffold" });
var App = /* @__PURE__ */ component(() => {
	const x = /* @__PURE__ */ DynamicThemingProvider.use();
	const cache = /* @__PURE__ */ CacheProvider.use();
	watch([() => x.value.seed, () => x.value.rules], ([seed, rules]) => {
		x.next((x$1) => {
			x$1.theming = /* @__PURE__ */ Theming.create({
				...defaultTheme,
				...Palette.fromColors(seed).toDesignTokens(rules)
			}, { varPrefix: "vk" });
		});
	});
	return () => {
		const theming = x.value.theming;
		const v = /* @__PURE__ */ theming.unstable_css(cache, { ":root": theming.rootCSSVars });
		return /* @__PURE__ */ jsx(DynamicThemingProvider, {
			value: x,
			children: /* @__PURE__ */ jsxs(ThemeProvider, {
				value: theming,
				children: [
					/* @__PURE__ */ jsx(CSSReset, {}),
					/* @__PURE__ */ jsx(GlobalStyle, { styles: normalize_default }),
					/* @__PURE__ */ jsx(Scaffold, { children: /* @__PURE__ */ jsx(RouterView, {}) })
				]
			}, v.name)
		});
	};
}, { displayName: "App" });
var scriptRel = "modulepreload";
var assetsURL = function(dep) {
	return "/vuekit/" + dep;
};
var seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
	let promise = /* @__PURE__ */ Promise.resolve();
	if (deps && deps.length > 0) {
		let allSettled = function(promises$2) {
			return Promise.all(/* @__PURE__ */ promises$2.map((p) => Promise.resolve(p).then((value$1) => ({
				status: "fulfilled",
				value: value$1
			}), (reason) => ({
				status: "rejected",
				reason
			}))));
		};
		const links = /* @__PURE__ */ document.getElementsByTagName("link"), cspNonceMeta = /* @__PURE__ */ document.querySelector("meta[property=csp-nonce]"), cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
		promise = /* @__PURE__ */ allSettled(/* @__PURE__ */ deps.map((dep) => {
			dep = /* @__PURE__ */ assetsURL(dep, importerUrl);
			if (dep in seen) return;
			seen[dep] = !0;
			const isCss = /* @__PURE__ */ dep.endsWith(".css"), cssSelector = isCss ? "[rel=\"stylesheet\"]" : "";
			if (importerUrl) for (let i$1 = links.length - 1; i$1 >= 0; i$1--) {
				const link$1 = links[i$1];
				if (link$1.href === dep && (!isCss || link$1.rel === "stylesheet")) return;
			}
			else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) return;
			const link = /* @__PURE__ */ document.createElement("link");
			link.rel = isCss ? "stylesheet" : scriptRel;
			if (!isCss) link.as = "script";
			link.crossOrigin = "";
			link.href = dep;
			if (cspNonce) link.setAttribute("nonce", cspNonce);
			document.head.appendChild(link);
			if (isCss) return new Promise((res, rej) => {
				link.addEventListener("load", res);
				link.addEventListener("error", () => rej(/* @__PURE__ */ Error(`Unable to preload CSS for ${dep}`)));
			});
		}));
	}
	function handlePreloadError(err$2) {
		const e$1 = new Event("vite:preloadError", { cancelable: !0 });
		e$1.payload = err$2;
		window.dispatchEvent(e$1);
		if (!e$1.defaultPrevented) throw err$2;
	}
	return promise.then((res) => {
		for (const item of res || []) {
			if (item.status !== "rejected") continue;
			handlePreloadError(item.reason);
		}
		return baseModule().catch(handlePreloadError);
	});
};
var index_tsx_id__page_meta_default = { meta: {
	name: "Home",
	icon: () => __vitePreload(async () => {
		const { mdiGroup } = await import("./webapp-vuekit-layout.BmQhjQBl.chunk.js");
		return { mdiGroup };
	}, __vite__mapDeps([0,1,2,3,4])).then(({ mdiGroup }) => ({ "default": mdiGroup }))
} };
var page_default = /* @__PURE__ */ component(() => () => /* @__PURE__ */ jsx(Box, {
	sx: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		textStyle: "sys.display-large"
	},
	children: "Vuekit"
}));
var __pages_import_0__ = () => __vitePreload(() => import("./nodepkg-jsoneditor-example.BoeJvQVE.chunk.js"), __vite__mapDeps([5,6,1,2,3,4]));
var __pages_import_1__ = () => __vitePreload(() => import("./nodepkg-jsoneditor-example.BaUTyRE7.chunk.js"), __vite__mapDeps([7,6,1,2,3,4]));
var __pages_import_2__ = () => __vitePreload(() => import("./nodepkg-vuemarkdown-example.BzqnBHaC.chunk.js"), __vite__mapDeps([8,6,1,2,3,4]));
var __pages_import_3__ = () => __vitePreload(() => import("./nodepkg-vuematerial-example.YFTtwbCW.chunk.js"), __vite__mapDeps([9,2,3,4]));
var __pages_import_4__ = () => __vitePreload(() => import("./nodepkg-vuematerial-example.CrBa2U8c.chunk.js"), __vite__mapDeps([10,6,1,2,3,4]));
var __pages_import_5__ = () => __vitePreload(() => import("./nodepkg-vuematerial-example.l3yeQy3f.chunk.js"), __vite__mapDeps([11,6,1,2,3,4]));
var __pages_import_6__ = () => __vitePreload(() => import("./nodepkg-vuematerial-example.DH6NU8qJ.chunk.js"), __vite__mapDeps([12,6,1,2,3,4]));
var __pages_import_7__ = () => __vitePreload(() => import("./nodepkg-vuematerial-example.BifUiC_-.chunk.js"), __vite__mapDeps([13,6,1,2,3,4]));
var __pages_import_8__ = () => __vitePreload(() => import("./nodepkg-vuematerial-example.COAtAEum.chunk.js"), __vite__mapDeps([14,6,1,2,3,4]));
var __pages_import_9__ = () => __vitePreload(() => import("./nodepkg-vueuikit-example.Fqrk7B1q.chunk.js"), __vite__mapDeps([15,1,2,3,4]));
var __pages_import_10__ = () => __vitePreload(() => import("./nodepkg-vueuikit-example.CZdSLNs0.chunk.js"), __vite__mapDeps([16,1,2,3,4]));
var __pages_import_11__ = () => __vitePreload(() => import("./nodepkg-vueuikit-example.yeXYlvdd.chunk.js"), __vite__mapDeps([17,1,2,3,4]));
var __pages_import_12__ = () => __vitePreload(() => import("./nodepkg-vueuikit-example.DgUYcKk0.chunk.js"), __vite__mapDeps([18,1,2,3,4]));
var __pages_import_13__ = () => __vitePreload(() => import("./nodepkg-vueuikit-example.DpBMiSsX.chunk.js"), __vite__mapDeps([19,1,2,3,4]));
var __pages_import_14__ = () => __vitePreload(() => import("./nodepkg-vueuikit-example.T9Q2vfOd.chunk.js"), __vite__mapDeps([20,1,2,3,4]));
var __pages_import_15__ = () => __vitePreload(() => import("./nodepkg-vueuikit-example.0ci_gaoy.chunk.js"), __vite__mapDeps([21,1,2,3,4]));
var __pages_import_16__ = () => __vitePreload(() => import("./nodepkg-vuekit-example.cuHlfg9G.chunk.js"), __vite__mapDeps([22,2,3,4]));
var __pages_import_17__ = () => __vitePreload(() => import("./nodepkg-vuekit-example.CzZJ6aDp.chunk.js"), __vite__mapDeps([23,2,3,4]));
var generated_pages_id__pages_default = [
	{
		"name": "jsoneditor-jsoneditor",
		"path": "/jsoneditor/jsoneditor",
		"component": __pages_import_0__,
		"props": true
	},
	{
		"name": "jsoneditor-jsoneditor-large",
		"path": "/jsoneditor/jsoneditor-large",
		"component": __pages_import_1__,
		"props": true
	},
	{
		"name": "vuemarkdown-markdown",
		"path": "/vuemarkdown/markdown",
		"component": __pages_import_2__,
		"props": true
	},
	{
		"name": "vuematerial",
		"path": "/vuematerial",
		"component": __pages_import_3__,
		"props": true
	},
	{
		"name": "vuematerial-buttons",
		"path": "/vuematerial/buttons",
		"component": __pages_import_4__,
		"props": true
	},
	{
		"name": "vuematerial-textfields",
		"path": "/vuematerial/textfields",
		"component": __pages_import_5__,
		"props": true
	},
	{
		"name": "vuematerial-overlays",
		"path": "/vuematerial/overlays",
		"component": __pages_import_6__,
		"props": true
	},
	{
		"name": "vuematerial-icons",
		"path": "/vuematerial/icons",
		"component": __pages_import_7__,
		"props": true
	},
	{
		"name": "vuematerial-progresses",
		"path": "/vuematerial/progresses",
		"component": __pages_import_8__,
		"props": true
	},
	{
		"name": "vueuikit",
		"path": "/vueuikit",
		"component": __pages_import_9__,
		"props": true
	},
	{
		"name": "vueuikit-color-palette",
		"path": "/vueuikit/color-palette",
		"component": __pages_import_10__,
		"props": true
	},
	{
		"name": "vueuikit-color-scheme",
		"path": "/vueuikit/color-scheme",
		"component": __pages_import_11__,
		"props": true
	},
	{
		"name": "vueuikit-popper",
		"path": "/vueuikit/popper",
		"component": __pages_import_12__,
		"props": true
	},
	{
		"name": "vueuikit-elevation",
		"path": "/vueuikit/elevation",
		"component": __pages_import_13__,
		"props": true
	},
	{
		"name": "vueuikit-typography",
		"path": "/vueuikit/typography",
		"component": __pages_import_14__,
		"props": true
	},
	{
		"name": "vueuikit-figma-tokens",
		"path": "/vueuikit/figma-tokens",
		"component": __pages_import_15__,
		"props": true
	},
	{
		"name": "vuekit",
		"path": "/vuekit",
		"component": __pages_import_16__,
		"props": true
	},
	{
		"name": "vuekit-rx-in-vue",
		"path": "/vuekit/rx-in-vue",
		"component": __pages_import_17__,
		"props": true
	},
	{
		"name": "index",
		"path": "/",
		"component": /* @__PURE__ */ Object.assign(page_default, index_tsx_id__page_meta_default),
		"props": true
	}
];
console.log(generated_pages_id__pages_default);
var router = /* @__PURE__ */ createRouter({
	history: /* @__PURE__ */ createWebHistory(new URL(document.querySelector("base")?.href ?? "/").pathname),
	routes: generated_pages_id__pages_default
});
createApp(App).use(router).mount("#root");
