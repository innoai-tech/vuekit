import { c as e, r as l, j as i, i as n, F as a } from "./lib-nodepkg-vuekit.Cz_QR0I8.chunk.js";
import { B as r } from "./lib-nodepkg-vueuikit.gwY3YMh0.chunk.js";
import { a as s, D as c, d as t, b as d, I as h, e as o, M as u, L as p } from "./index.9qiuLA0f.entry.js";
import { f as v, C as x } from "./webapp-vuekit-layout.VC44meto.chunk.js";
let m = /* @__PURE__ */ e(() => {
  let e2 = /* @__PURE__ */ l(false), m2 = /* @__PURE__ */ l(false), f2 = /* @__PURE__ */ l(false);
  return () => /* @__PURE__ */ i(x, { children: /* @__PURE__ */ n(r, { sx: { display: "flex", flexDirection: "column", gap: 8 }, children: [/* @__PURE__ */ i(s, { onClick: () => {
    m2.value = true;
  }, children: "Open Dialog" }), /* @__PURE__ */ i(c, { isOpen: m2.value, onClose: () => {
    m2.value = false;
  }, children: /* @__PURE__ */ n(t, { sx: { minH: "40vh" }, children: [/* @__PURE__ */ n(r, { sx: { display: "flex", alignItems: "center", px: 16, textStyle: "sys.title-large" }, children: [/* @__PURE__ */ i(r, { sx: { flex: 1 }, children: "我是对话框" }), /* @__PURE__ */ i(d, { onClick: () => {
    m2.value = false;
  }, children: /* @__PURE__ */ i(h, { path: v }) })] }), /* @__PURE__ */ i(s, { onClick: () => {
    f2.value = true;
  }, children: "Open Dialog In Dialog" }), /* @__PURE__ */ i(c, { isOpen: f2.value, onClose: () => {
    f2.value = false;
  }, children: /* @__PURE__ */ i(t, { sx: { minH: "40vh" }, children: /* @__PURE__ */ n(r, { sx: { display: "flex", alignItems: "center", px: 16, textStyle: "sys.title-large" }, children: [/* @__PURE__ */ i(r, { sx: { flex: 1 }, children: "我是对话框 2" }), /* @__PURE__ */ i(d, { onClick: () => {
    f2.value = false;
  }, children: /* @__PURE__ */ i(h, { path: v }) })] }) }) })] }) }), /* @__PURE__ */ i(o, { title: "Tooltip", children: /* @__PURE__ */ i(s, { children: "Hover me" }) }), /* @__PURE__ */ i(o, { title: "Menu", children: /* @__PURE__ */ i(u, { $menu: /* @__PURE__ */ n(a, { children: [/* @__PURE__ */ i(p, { children: "选项一" }), /* @__PURE__ */ i(p, { onClick: () => {
    e2.value = true;
  }, children: "选项二" }), /* @__PURE__ */ i(c, { isOpen: e2.value, onClose: () => {
    e2.value = false;
  }, children: /* @__PURE__ */ i(t, { sx: { minH: "40vh" }, children: "我是对话框" }) }), /* @__PURE__ */ i(u, { placement: "right-start", $menu: /* @__PURE__ */ n(a, { children: [/* @__PURE__ */ i(p, { children: "选项三.1" }), /* @__PURE__ */ i(p, { children: "选项三.2" })] }), children: /* @__PURE__ */ i(p, { children: "选项三" }) })] }), children: /* @__PURE__ */ i(s, { children: "Menu" }) }) })] }) });
}), f = /* @__PURE__ */ Object.assign(m, { displayName: "OverlaysDefault" });
export {
  f as default
};
