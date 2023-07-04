var n, e;
import { c as t, k as i, j as o, b as r, r as a, R as s, F as l, l as d, m as p, n as c, p as m } from "./lib-nodepkg-vuekit.171adedb.chunk.js";
import { B as u, C as h, G as _ } from "./lib-nodepkg-vueuikit.dfd5c493.chunk.js";
import { c as f, x as v, y as g, p as b, q as y } from "./lib-nodepkg-typedef.9aa925ea.chunk.js";
import { I as k, a as E, b as x, c as I, T as w, d as R, e as O } from "./lib-nodepkg-vuematerial.1509d2f6.chunk.js";
import { C as S } from "./webapp-vuekit-layout.1a4769d8.chunk.js";
(function() {
  let n2 = document.createElement("link").relList;
  if (!(n2 && n2.supports && n2.supports("modulepreload"))) {
    for (let n3 of document.querySelectorAll('link[rel="modulepreload"]'))
      e2(n3);
    new MutationObserver((n3) => {
      for (let t2 of n3)
        if ("childList" === t2.type)
          for (let n4 of t2.addedNodes)
            "LINK" === n4.tagName && "modulepreload" === n4.rel && e2(n4);
    }).observe(document, { childList: true, subtree: true });
  }
  function e2(n3) {
    if (n3.ep)
      return;
    n3.ep = true;
    let e3 = function(n4) {
      let e4 = {};
      return n4.integrity && (e4.integrity = n4.integrity), n4.referrerPolicy && (e4.referrerPolicy = n4.referrerPolicy), "use-credentials" === n4.crossOrigin ? e4.credentials = "include" : "anonymous" === n4.crossOrigin ? e4.credentials = "omit" : e4.credentials = "same-origin", e4;
    }(n3);
    fetch(n3.href, e3);
  }
})();
let C = t(() => {
  let n2 = i(), e2 = v(n2.options.routes.filter((n3) => "/" != n3.path), (n3) => n3.path.split("/")[1]);
  return () => o(u, { sx: { py: 16, px: 0, textTransform: "capitalize" }, children: g(e2, (n3, e3) => {
    var t2;
    let [i2, a2] = b(n3, (n4) => n4.path === `/${e3}`);
    return r(u, { sx: { px: 8 }, children: [i2[0] ? o(R, { component: s, sx: { width: "100%", justifyContent: "flex-start" }, activeClass: "active", to: null === (t2 = i2[0]) || void 0 === t2 ? void 0 : t2.path, children: e3 }) : o(R, { sx: { width: "100%", justifyContent: "flex-start" }, children: e3 }), o(u, { sx: { pl: 16 }, children: g(a2, (n4) => {
      var e4;
      return o(R, { component: s, activeClass: "active", to: n4.path, sx: { width: "100%", justifyContent: "flex-start" }, children: null === (e4 = y(n4.path.split("/"))) || void 0 === e4 ? void 0 : e4.replaceAll("-", " ") }, n4.name);
    }) })] }, e3);
  }) });
}), T = t({ $default: f().optional() }, (n2, e2) => {
  let { slots: t2 } = e2, i2 = a("light");
  return () => {
    var n3;
    return r(u, { "data-theme": i2.value, sx: { display: "flex", height: "100vh", width: "100vw", containerStyle: "sys.surface" }, children: [r(u, { sx: { display: "flex", flexDirection: "column", width: "280px", height: "100vh", borderRightRadius: "lg", overflowY: "auto", containerStyle: "sys.surface-container-low", elevation: "0", _hover: { elevation: "2" } }, children: [o(u, { sx: { flex: 1 }, children: o(z, {}) }), r(u, { sx: { p: 16, display: "flex", justifyContent: "flex-end" }, children: [o(k, { component: "a", target: "_blank", sx: { color: "sys.on-surface-variant" }, href: "//github.com/innoai-tech/vuekit", children: o(E, { path: O }) }), o(w, { title: `切换到${"light" == i2.value ? "深色模式" : "浅色模式"}`, children: o(u, { component: k, "data-test": true, sx: { color: "sys.on-surface-variant" }, onClick: () => {
      i2.value = "light" == i2.value ? "dark" : "light";
    }, children: o(E, { path: "light" == i2.value ? x : I }) }) })] })] }), o(u, { sx: { flex: 1, overflow: "auto" }, children: o(S, { children: null === (n3 = t2.default) || void 0 === n3 ? void 0 : n3.call(t2) }) })] });
  };
}), j = t(() => () => r(l, { children: [o(h, {}), o(_, { styles: '/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n' }), o(D, { children: o(d, {}) })] })), z = Object.assign(C, { displayName: "Nav" }), D = Object.assign(T, { displayName: "Scaffold" }), V = Object.assign(j, { displayName: "App" }), A = {}, N = function(n2, e2, t2) {
  if (!e2 || 0 === e2.length)
    return n2();
  let i2 = document.getElementsByTagName("link");
  return Promise.all(e2.map((n3) => {
    if ((n3 = "/vuekit/" + n3) in A)
      return;
    A[n3] = true;
    let e3 = n3.endsWith(".css");
    if (t2)
      for (let t3 = i2.length - 1; t3 >= 0; t3--) {
        let o3 = i2[t3];
        if (o3.href === n3 && (!e3 || "stylesheet" === o3.rel))
          return;
      }
    else if (document.querySelector(`link[href="${n3}"]${e3 ? '[rel="stylesheet"]' : ""}`))
      return;
    let o2 = document.createElement("link");
    if (o2.rel = e3 ? "stylesheet" : "modulepreload", e3 || (o2.as = "script", o2.crossOrigin = ""), o2.href = n3, document.head.appendChild(o2), e3)
      return new Promise((e4, t3) => {
        o2.addEventListener("load", e4), o2.addEventListener("error", () => t3(Error(`Unable to preload CSS for ${n3}`)));
      });
  })).then(() => n2());
}, L = t(() => () => o(u, { sx: { display: "flex", alignItems: "center", justifyContent: "center", textStyle: "sys.display-large" }, children: "Vuekit" })), P = Object.assign(L, { displayName: "IndexDefault" }), M = [{ name: "vuematerial-textfields", path: "/vuematerial/textfields", component: () => N(() => import("./nodepkg-vuematerial-example.33e58ad4.chunk.js"), true ? ["static/nodepkg-vuematerial-example.33e58ad4.chunk.js","static/lib-nodepkg-vuekit.171adedb.chunk.js","static/vendor-core-js.e9d2b8d1.chunk.js","static/lib-nodepkg-typedef.9aa925ea.chunk.js","static/webapp-vuekit-layout.1a4769d8.chunk.js","static/lib-nodepkg-vueuikit.dfd5c493.chunk.js","static/lib-nodepkg-vuematerial.1509d2f6.chunk.js"] : void 0), props: true }, { name: "vuematerial-overlays", path: "/vuematerial/overlays", component: () => N(() => import("./nodepkg-vuematerial-example.de027127.chunk.js"), true ? ["static/nodepkg-vuematerial-example.de027127.chunk.js","static/lib-nodepkg-vuekit.171adedb.chunk.js","static/vendor-core-js.e9d2b8d1.chunk.js","static/lib-nodepkg-typedef.9aa925ea.chunk.js","static/lib-nodepkg-vueuikit.dfd5c493.chunk.js","static/lib-nodepkg-vuematerial.1509d2f6.chunk.js","static/webapp-vuekit-layout.1a4769d8.chunk.js"] : void 0), props: true }, { name: "vuematerial", path: "/vuematerial", component: () => N(() => import("./nodepkg-vuematerial-example.bbcbf4ea.chunk.js"), true ? ["static/nodepkg-vuematerial-example.bbcbf4ea.chunk.js","static/lib-nodepkg-vuekit.171adedb.chunk.js","static/vendor-core-js.e9d2b8d1.chunk.js","static/lib-nodepkg-typedef.9aa925ea.chunk.js"] : void 0), props: true }, { name: "vuematerial-icons", path: "/vuematerial/icons", component: () => N(() => import("./nodepkg-vuematerial-example.96b28817.chunk.js"), true ? ["static/nodepkg-vuematerial-example.96b28817.chunk.js","static/lib-nodepkg-vuekit.171adedb.chunk.js","static/vendor-core-js.e9d2b8d1.chunk.js","static/lib-nodepkg-typedef.9aa925ea.chunk.js","static/lib-nodepkg-vuematerial.1509d2f6.chunk.js","static/lib-nodepkg-vueuikit.dfd5c493.chunk.js"] : void 0), props: true }, { name: "vuematerial-buttons", path: "/vuematerial/buttons", component: () => N(() => import("./nodepkg-vuematerial-example.96b87528.chunk.js"), true ? ["static/nodepkg-vuematerial-example.96b87528.chunk.js","static/lib-nodepkg-vuekit.171adedb.chunk.js","static/vendor-core-js.e9d2b8d1.chunk.js","static/lib-nodepkg-typedef.9aa925ea.chunk.js","static/lib-nodepkg-vuematerial.1509d2f6.chunk.js","static/lib-nodepkg-vueuikit.dfd5c493.chunk.js","static/webapp-vuekit-layout.1a4769d8.chunk.js"] : void 0), props: true }, { name: "vueuikit-typography", path: "/vueuikit/typography", component: () => N(() => import("./nodepkg-vueuikit-example.a93dec2d.chunk.js"), true ? ["static/nodepkg-vueuikit-example.a93dec2d.chunk.js","static/lib-nodepkg-vuekit.171adedb.chunk.js","static/vendor-core-js.e9d2b8d1.chunk.js","static/lib-nodepkg-typedef.9aa925ea.chunk.js","static/lib-nodepkg-vueuikit.dfd5c493.chunk.js"] : void 0), props: true }, { name: "vueuikit-popper", path: "/vueuikit/popper", component: () => N(() => import("./nodepkg-vueuikit-example.ec8035ac.chunk.js"), true ? ["static/nodepkg-vueuikit-example.ec8035ac.chunk.js","static/lib-nodepkg-vuekit.171adedb.chunk.js","static/vendor-core-js.e9d2b8d1.chunk.js","static/lib-nodepkg-typedef.9aa925ea.chunk.js","static/lib-nodepkg-vueuikit.dfd5c493.chunk.js"] : void 0), props: true }, { name: "vueuikit", path: "/vueuikit", component: () => N(() => import("./nodepkg-vueuikit-example.e5ffdd91.chunk.js"), true ? ["static/nodepkg-vueuikit-example.e5ffdd91.chunk.js","static/lib-nodepkg-vuekit.171adedb.chunk.js","static/vendor-core-js.e9d2b8d1.chunk.js","static/lib-nodepkg-typedef.9aa925ea.chunk.js","static/lib-nodepkg-vueuikit.dfd5c493.chunk.js"] : void 0), props: true }, { name: "vueuikit-elevation", path: "/vueuikit/elevation", component: () => N(() => import("./nodepkg-vueuikit-example.1a484528.chunk.js"), true ? ["static/nodepkg-vueuikit-example.1a484528.chunk.js","static/lib-nodepkg-vuekit.171adedb.chunk.js","static/vendor-core-js.e9d2b8d1.chunk.js","static/lib-nodepkg-typedef.9aa925ea.chunk.js","static/lib-nodepkg-vueuikit.dfd5c493.chunk.js"] : void 0), props: true }, { name: "vueuikit-color-scheme", path: "/vueuikit/color-scheme", component: () => N(() => import("./nodepkg-vueuikit-example.a3673738.chunk.js"), true ? ["static/nodepkg-vueuikit-example.a3673738.chunk.js","static/lib-nodepkg-vuekit.171adedb.chunk.js","static/vendor-core-js.e9d2b8d1.chunk.js","static/lib-nodepkg-typedef.9aa925ea.chunk.js","static/lib-nodepkg-vueuikit.dfd5c493.chunk.js"] : void 0), props: true }, { name: "vuekit-rx-in-vue", path: "/vuekit/rx-in-vue", component: () => N(() => import("./nodepkg-vuekit-example.891a3aa5.chunk.js"), true ? ["static/nodepkg-vuekit-example.891a3aa5.chunk.js","static/lib-nodepkg-vuekit.171adedb.chunk.js","static/vendor-core-js.e9d2b8d1.chunk.js","static/lib-nodepkg-typedef.9aa925ea.chunk.js"] : void 0), props: true }, { name: "vuekit", path: "/vuekit", component: () => N(() => import("./nodepkg-vuekit-example.d08314fd.chunk.js"), true ? ["static/nodepkg-vuekit-example.d08314fd.chunk.js","static/lib-nodepkg-vuekit.171adedb.chunk.js","static/vendor-core-js.e9d2b8d1.chunk.js","static/lib-nodepkg-typedef.9aa925ea.chunk.js"] : void 0), props: true }, { name: "index", path: "/", component: Object.assign(P, { meta: { name: "Home", icon: () => N(() => import("./webapp-vuekit-layout.1a4769d8.chunk.js").then((n2) => n2.i), true ? ["static/webapp-vuekit-layout.1a4769d8.chunk.js","static/lib-nodepkg-vueuikit.dfd5c493.chunk.js","static/vendor-core-js.e9d2b8d1.chunk.js","static/lib-nodepkg-vuekit.171adedb.chunk.js","static/lib-nodepkg-typedef.9aa925ea.chunk.js","static/lib-nodepkg-vuematerial.1509d2f6.chunk.js"] : void 0) } }), props: true }];
console.log(M);
let F = new URL(null !== (e = null === (n = document.querySelector("base")) || void 0 === n ? void 0 : n.href) && void 0 !== e ? e : "/"), $ = p({ history: c(F.pathname), routes: M });
m(V).use($).mount("#root");
