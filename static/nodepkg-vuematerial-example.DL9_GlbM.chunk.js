import { c as e, b as l, j as i, k as n, F as a } from "./lib-nodepkg-vuekit.BljiiEAD.chunk.js";
import { T as r, D as s, a as c, I as t, b as h, c as d, M as o, L as u } from "./index.BkPqZiMt.entry.js";
import { B as p } from "./lib-nodepkg-vueuikit.BLT6cpk3.chunk.js";
import { c as v, C as x } from "./webapp-vuekit-layout.m7BsAc37.chunk.js";
let m = Object.assign(e(() => {
  let e2 = l(false), m2 = l(false), k = l(false);
  return () => i(x, { children: n(p, { sx: { display: "flex", flexDirection: "column", gap: 8 }, children: [i(r, { onClick: () => {
    m2.value = true;
  }, children: "Open Dialog" }), i(s, { isOpen: m2.value, onClose: () => {
    m2.value = false;
  }, children: n(c, { sx: { minH: "40vh" }, children: [n(p, { sx: { display: "flex", alignItems: "center", px: 16, textStyle: "sys.title-large" }, children: [i(p, { sx: { flex: 1 }, children: "我是对话框" }), i(t, { onClick: () => {
    m2.value = false;
  }, children: i(h, { path: v }) })] }), i(r, { onClick: () => {
    k.value = true;
  }, children: "Open Dialog In Dialog" }), i(s, { isOpen: k.value, onClose: () => {
    k.value = false;
  }, children: i(c, { sx: { minH: "40vh" }, children: n(p, { sx: { display: "flex", alignItems: "center", px: 16, textStyle: "sys.title-large" }, children: [i(p, { sx: { flex: 1 }, children: "我是对话框 2" }), i(t, { onClick: () => {
    k.value = false;
  }, children: i(h, { path: v }) })] }) }) })] }) }), i(d, { title: "Tooltip", children: i(r, { children: "Hover me" }) }), i(d, { title: "Menu", children: i(o, { $menu: n(a, { children: [i(u, { children: "选项一" }), i(u, { onClick: () => {
    e2.value = true;
  }, children: "选项二" }), i(s, { isOpen: e2.value, onClose: () => {
    e2.value = false;
  }, children: i(c, { sx: { minH: "40vh" }, children: "我是对话框" }) }), i(o, { placement: "right-start", $menu: n(a, { children: [i(u, { children: "选项三.1" }), i(u, { children: "选项三.2" })] }), children: i(u, { children: "选项三" }) })] }), children: i(r, { children: "Menu" }) }) })] }) });
}), { displayName: "OverlaysDefault" });
export {
  m as default
};
