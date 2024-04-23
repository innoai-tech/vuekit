import { c as e, y as t, w as a, R as s, r as i, z as l } from "./lib--nodepkg-vuekit.C4CbSFwU.chunk.js";
import { j as n, a as r } from "./lib--nodepkg-vue-jsx-runtime.DL8fEjf_.chunk.js";
import { c as o, C as c, A as h, p as u, l as p } from "./lib--nodepkg-typedef.DdnEDJY6.chunk.js";
import { c as d, I as v, i as f, j as m, f as x, a as g, k } from "./lib--nodepkg-vuematerial.B3vjsZbQ.chunk.js";
import { B as y, C as j, e as b, G as C, T as w, f as A, g as S, b as _ } from "./lib--nodepkg-vueuikit.CEMh5M-A.chunk.js";
import { n as z } from "./vendor--normalize.css.B1ng_4q_.chunk.js";
import { C as D } from "./webapp-vuekit-layout-Container_tsx.BRNlLrsU.chunk.js";
import { D as N } from "./webapp-vuekit-layout-DynamicTheming_tsx.CYemvuKa.chunk.js";
let T = e(() => {
  let e2 = c(t().options.routes.filter((e3) => "/" !== e3.path), (e3) => e3.path.split("/")[1]);
  return () => n(y, { sx: { py: 16, px: 0, textTransform: "capitalize" }, children: h(e2, (e3, t2) => {
    var a2;
    let [s2, i2] = u(e3, (e4) => e4.path === `/${t2}`);
    return r(y, { sx: { px: 8 }, children: [s2[0] ? n(g, { component: l, sx: { width: "100%", justifyContent: "flex-start" }, activeClass: "active", to: null === (a2 = s2[0]) || void 0 === a2 ? void 0 : a2.path, children: t2 }) : n(g, { sx: { width: "100%", justifyContent: "flex-start" }, children: t2 }), n(y, { sx: { pl: 16 }, children: h(i2, (e4) => {
      var t3;
      return n(g, { component: l, activeClass: "active", to: e4.path, sx: { width: "100%", justifyContent: "flex-start" }, children: null === (t3 = p(e4.path.split("/"))) || void 0 === t3 ? void 0 : t3.replaceAll("-", " ") }, e4.name);
    }) })] }, t2);
  }) });
}), O = e({ $default: o().optional() }, (e2, t2) => {
  let { slots: a2 } = t2, s2 = i("light");
  return () => {
    var e3;
    return r(y, { "data-theme": s2.value, sx: { display: "flex", height: "100vh", width: "100vw", containerStyle: "sys.surface" }, children: [r(y, { sx: { display: "flex", flexDirection: "column", width: "280px", height: "100vh", borderRightRadius: "lg", overflowY: "auto", containerStyle: "sys.surface-container-low", elevation: "0", _hover: { elevation: "2" } }, children: [n(y, { sx: { flex: 1 }, children: n($, {}) }), r(y, { sx: { p: 16, display: "flex", justifyContent: "flex-end" }, children: [n(d, { component: "a", target: "_blank", sx: { color: "sys.on-surface-variant" }, href: "//github.com/innoai-tech/vuekit", children: n(v, { path: k }) }), n(x, { title: `切换到${"light" === s2.value ? "深色模式" : "浅色模式"}`, children: n(y, { component: d, "data-test": true, sx: { color: "sys.on-surface-variant" }, onClick: () => {
      s2.value = "light" === s2.value ? "dark" : "light";
    }, children: n(v, { path: "light" === s2.value ? f : m }) }) })] })] }), n(y, { sx: { flex: 1, overflow: "auto" }, children: n(D, { children: null === (e3 = a2.default) || void 0 === e3 ? void 0 : e3.call(a2) }) })] });
  };
}), R = e(() => {
  let e2 = N.use(), t2 = j.use();
  return a([() => e2.value.seed, () => e2.value.rules], (t3) => {
    let [a2, s2] = t3;
    e2.next((e3) => {
      e3.theming = A.create({ ...S, ..._.fromColors(a2).toDesignTokens(s2) }, { varPrefix: "vk" });
    });
  }), () => {
    let a2 = e2.value.theming, i2 = a2.unstable_css(t2, { ":root": a2.rootCSSVars });
    return n(N, { value: e2, children: r(w, { value: a2, children: [n(b, {}), n(C, { styles: z }), n(B, { children: n(s, {}) })] }, i2.name) });
  };
}), $ = Object.assign(T, { displayName: "Nav" }), B = Object.assign(O, { displayName: "Scaffold" }), G = Object.assign(R, { displayName: "App" });
export {
  G as A
};
