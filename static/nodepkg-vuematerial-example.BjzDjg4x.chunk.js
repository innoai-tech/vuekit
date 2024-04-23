import { j as e, a as l } from "./lib--nodepkg-vue-jsx-runtime.DL8fEjf_.chunk.js";
import { c as i, r as n, F as a } from "./lib--nodepkg-vuekit.C4CbSFwU.chunk.js";
import { a as r, D as s, d as c, c as t, I as d, e as h, f as o, M as u, L as p } from "./lib--nodepkg-vuematerial.B3vjsZbQ.chunk.js";
import { B as m } from "./lib--nodepkg-vueuikit.CEMh5M-A.chunk.js";
import { C as v } from "./webapp-vuekit-layout-Container_tsx.BRNlLrsU.chunk.js";
let x = Object.assign(i(() => {
  let i2 = n(false), x2 = n(false), k = n(false);
  return () => e(v, { children: l(m, { sx: { display: "flex", flexDirection: "column", gap: 8 }, children: [e(r, { onClick: () => {
    x2.value = true;
  }, children: "Open Dialog" }), e(s, { isOpen: x2.value, onClose: () => {
    x2.value = false;
  }, children: l(c, { sx: { minH: "40vh" }, children: [l(m, { sx: { display: "flex", alignItems: "center", px: 16, textStyle: "sys.title-large" }, children: [e(m, { sx: { flex: 1 }, children: "我是对话框" }), e(t, { onClick: () => {
    x2.value = false;
  }, children: e(d, { path: h }) })] }), e(r, { onClick: () => {
    k.value = true;
  }, children: "Open Dialog In Dialog" }), e(s, { isOpen: k.value, onClose: () => {
    k.value = false;
  }, children: e(c, { sx: { minH: "40vh" }, children: l(m, { sx: { display: "flex", alignItems: "center", px: 16, textStyle: "sys.title-large" }, children: [e(m, { sx: { flex: 1 }, children: "我是对话框 2" }), e(t, { onClick: () => {
    k.value = false;
  }, children: e(d, { path: h }) })] }) }) })] }) }), e(o, { title: "Tooltip", children: e(r, { children: "Hover me" }) }), e(o, { title: "Menu", children: e(u, { $menu: l(a, { children: [e(p, { children: "选项一" }), e(p, { onClick: () => {
    i2.value = true;
  }, children: "选项二" }), e(s, { isOpen: i2.value, onClose: () => {
    i2.value = false;
  }, children: e(c, { sx: { minH: "40vh" }, children: "我是对话框" }) }), e(u, { placement: "right-start", $menu: l(a, { children: [e(p, { children: "选项三.1" }), e(p, { children: "选项三.2" })] }), children: e(p, { children: "选项三" }) })] }), children: e(r, { children: "Menu" }) }) })] }) });
}), { displayName: "OverlaysDefault" });
export {
  x as default
};
