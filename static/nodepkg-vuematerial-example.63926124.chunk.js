import { c as e, r as l, j as i, b as n, F as a } from "./lib-nodepkg-vuekit.a575cf60.chunk.js";
import { B as r } from "./lib-nodepkg-vueuikit.1b7874bb.chunk.js";
import { d as s, D as c, i as t, I as h, a as d, j as o, T as u, M as p, L as v } from "./lib-nodepkg-vuematerial.a98574a5.chunk.js";
import { C as m } from "./webapp-vuekit-layout.de49e4aa.chunk.js";
let x = e(() => {
  let e2 = l(false), x2 = l(false), k2 = l(false);
  return () => i(m, { children: n(r, { sx: { display: "flex", flexDirection: "column", gap: 8 }, children: [i(s, { onClick: () => {
    x2.value = true;
  }, children: "Open Dialog" }), i(c, { isOpen: x2.value, onClose: () => {
    x2.value = false;
  }, children: n(t, { sx: { minH: "40vh" }, children: [n(r, { sx: { display: "flex", alignItems: "center", px: 16, textStyle: "sys.title-large" }, children: [i(r, { sx: { flex: 1 }, children: "我是对话框" }), i(h, { onClick: () => {
    x2.value = false;
  }, children: i(d, { path: o }) })] }), i(s, { onClick: () => {
    k2.value = true;
  }, children: "Open Dialog In Dialog" }), i(c, { isOpen: k2.value, onClose: () => {
    k2.value = false;
  }, children: i(t, { sx: { minH: "40vh" }, children: n(r, { sx: { display: "flex", alignItems: "center", px: 16, textStyle: "sys.title-large" }, children: [i(r, { sx: { flex: 1 }, children: "我是对话框 2" }), i(h, { onClick: () => {
    k2.value = false;
  }, children: i(d, { path: o }) })] }) }) })] }) }), i(u, { title: "Tooltip", children: i(s, { children: "Hover me" }) }), i(u, { title: "Menu", children: i(p, { $menu: n(a, { children: [i(v, { children: "选项一" }), i(v, { onClick: () => {
    e2.value = true;
  }, children: "选项二" }), i(c, { isOpen: e2.value, onClose: () => {
    e2.value = false;
  }, children: i(t, { sx: { minH: "40vh" }, children: "我是对话框" }) }), i(p, { placement: "right-start", $menu: n(a, { children: [i(v, { children: "选项三.1" }), i(v, { children: "选项三.2" })] }), children: i(v, { children: "选项三" }) })] }), children: i(s, { children: "Menu" }) }) })] }) });
}), k = Object.assign(x, { displayName: "OverlaysDefault" });
export {
  k as default
};
