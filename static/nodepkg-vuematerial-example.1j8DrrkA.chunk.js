import { c as e, r as l, j as i, i as n, F as a } from "./lib-nodepkg-vuekit.QHAWcTCw.chunk.js";
import { c as r, D as s, d as c, a as t, I as d, e as h, M as o, L as u } from "./index.Hur5gU2E.entry.js";
import { B as p } from "./lib-nodepkg-vueuikit.uX64lanI.chunk.js";
import { f as v, C as x } from "./webapp-vuekit-layout.L-hnlA5E.chunk.js";
let m = /* @__PURE__ */ e(() => {
  let e2 = /* @__PURE__ */ l(false), m2 = /* @__PURE__ */ l(false), f2 = /* @__PURE__ */ l(false);
  return () => /* @__PURE__ */ i(x, { children: /* @__PURE__ */ n(p, { sx: { display: "flex", flexDirection: "column", gap: 8 }, children: [/* @__PURE__ */ i(r, { onClick: () => {
    m2.value = true;
  }, children: "Open Dialog" }), /* @__PURE__ */ i(s, { isOpen: m2.value, onClose: () => {
    m2.value = false;
  }, children: /* @__PURE__ */ n(c, { sx: { minH: "40vh" }, children: [/* @__PURE__ */ n(p, { sx: { display: "flex", alignItems: "center", px: 16, textStyle: "sys.title-large" }, children: [/* @__PURE__ */ i(p, { sx: { flex: 1 }, children: "我是对话框" }), /* @__PURE__ */ i(t, { onClick: () => {
    m2.value = false;
  }, children: /* @__PURE__ */ i(d, { path: v }) })] }), /* @__PURE__ */ i(r, { onClick: () => {
    f2.value = true;
  }, children: "Open Dialog In Dialog" }), /* @__PURE__ */ i(s, { isOpen: f2.value, onClose: () => {
    f2.value = false;
  }, children: /* @__PURE__ */ i(c, { sx: { minH: "40vh" }, children: /* @__PURE__ */ n(p, { sx: { display: "flex", alignItems: "center", px: 16, textStyle: "sys.title-large" }, children: [/* @__PURE__ */ i(p, { sx: { flex: 1 }, children: "我是对话框 2" }), /* @__PURE__ */ i(t, { onClick: () => {
    f2.value = false;
  }, children: /* @__PURE__ */ i(d, { path: v }) })] }) }) })] }) }), /* @__PURE__ */ i(h, { title: "Tooltip", children: /* @__PURE__ */ i(r, { children: "Hover me" }) }), /* @__PURE__ */ i(h, { title: "Menu", children: /* @__PURE__ */ i(o, { $menu: /* @__PURE__ */ n(a, { children: [/* @__PURE__ */ i(u, { children: "选项一" }), /* @__PURE__ */ i(u, { onClick: () => {
    e2.value = true;
  }, children: "选项二" }), /* @__PURE__ */ i(s, { isOpen: e2.value, onClose: () => {
    e2.value = false;
  }, children: /* @__PURE__ */ i(c, { sx: { minH: "40vh" }, children: "我是对话框" }) }), /* @__PURE__ */ i(o, { placement: "right-start", $menu: /* @__PURE__ */ n(a, { children: [/* @__PURE__ */ i(u, { children: "选项三.1" }), /* @__PURE__ */ i(u, { children: "选项三.2" })] }), children: /* @__PURE__ */ i(u, { children: "选项三" }) })] }), children: /* @__PURE__ */ i(r, { children: "Menu" }) }) })] }) });
}), f = /* @__PURE__ */ Object.assign(m, { displayName: "OverlaysDefault" });
export {
  f as default
};
