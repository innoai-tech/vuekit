import { a as e, r as l, j as i, k as n, F as a } from "./lib-nodepkg-vuekit.YjJGCx9f.chunk.js";
import { c as r, D as s, d as c, a as d, I as t, e as h, M as o, L as u } from "./index.m9XzTHpE.entry.js";
import { B as p } from "./lib-nodepkg-vueuikit.evI34-rO.chunk.js";
import { f as m, C as x } from "./node_modules-@mdi-js.pWuFxqs_.chunk.js";
let v = /* @__PURE__ */ e(() => {
  let e2 = /* @__PURE__ */ l(false), v2 = /* @__PURE__ */ l(false), f2 = /* @__PURE__ */ l(false);
  return () => /* @__PURE__ */ i(x, { children: /* @__PURE__ */ n(p, { sx: { display: "flex", flexDirection: "column", gap: 8 }, children: [/* @__PURE__ */ i(r, { onClick: () => {
    v2.value = true;
  }, children: "Open Dialog" }), /* @__PURE__ */ i(s, { isOpen: v2.value, onClose: () => {
    v2.value = false;
  }, children: /* @__PURE__ */ n(c, { sx: { minH: "40vh" }, children: [/* @__PURE__ */ n(p, { sx: { display: "flex", alignItems: "center", px: 16, textStyle: "sys.title-large" }, children: [/* @__PURE__ */ i(p, { sx: { flex: 1 }, children: "我是对话框" }), /* @__PURE__ */ i(d, { onClick: () => {
    v2.value = false;
  }, children: /* @__PURE__ */ i(t, { path: m }) })] }), /* @__PURE__ */ i(r, { onClick: () => {
    f2.value = true;
  }, children: "Open Dialog In Dialog" }), /* @__PURE__ */ i(s, { isOpen: f2.value, onClose: () => {
    f2.value = false;
  }, children: /* @__PURE__ */ i(c, { sx: { minH: "40vh" }, children: /* @__PURE__ */ n(p, { sx: { display: "flex", alignItems: "center", px: 16, textStyle: "sys.title-large" }, children: [/* @__PURE__ */ i(p, { sx: { flex: 1 }, children: "我是对话框 2" }), /* @__PURE__ */ i(d, { onClick: () => {
    f2.value = false;
  }, children: /* @__PURE__ */ i(t, { path: m }) })] }) }) })] }) }), /* @__PURE__ */ i(h, { title: "Tooltip", children: /* @__PURE__ */ i(r, { children: "Hover me" }) }), /* @__PURE__ */ i(h, { title: "Menu", children: /* @__PURE__ */ i(o, { $menu: /* @__PURE__ */ n(a, { children: [/* @__PURE__ */ i(u, { children: "选项一" }), /* @__PURE__ */ i(u, { onClick: () => {
    e2.value = true;
  }, children: "选项二" }), /* @__PURE__ */ i(s, { isOpen: e2.value, onClose: () => {
    e2.value = false;
  }, children: /* @__PURE__ */ i(c, { sx: { minH: "40vh" }, children: "我是对话框" }) }), /* @__PURE__ */ i(o, { placement: "right-start", $menu: /* @__PURE__ */ n(a, { children: [/* @__PURE__ */ i(u, { children: "选项三.1" }), /* @__PURE__ */ i(u, { children: "选项三.2" })] }), children: /* @__PURE__ */ i(u, { children: "选项三" }) })] }), children: /* @__PURE__ */ i(r, { children: "Menu" }) }) })] }) });
}), f = /* @__PURE__ */ Object.assign(v, { displayName: "OverlaysDefault" });
export {
  f as default
};
