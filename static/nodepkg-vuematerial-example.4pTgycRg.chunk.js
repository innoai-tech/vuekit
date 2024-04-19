import { c as e, r as l, j as n, i, g as a, D as s, n as r, B as c, o as d, I as h, p as t, q as o, M as x, k as p, L as u, C as v } from "./index.-RbwNzz2.entry.js";
let m = Object.assign(e(() => {
  let e2 = l(false), m2 = l(false), g = l(false);
  return () => n(v, { children: i(c, { sx: { display: "flex", flexDirection: "column", gap: 8 }, children: [n(a, { onClick: () => {
    m2.value = true;
  }, children: "Open Dialog" }), n(s, { isOpen: m2.value, onClose: () => {
    m2.value = false;
  }, children: i(r, { sx: { minH: "40vh" }, children: [i(c, { sx: { display: "flex", alignItems: "center", px: 16, textStyle: "sys.title-large" }, children: [n(c, { sx: { flex: 1 }, children: "我是对话框" }), n(d, { onClick: () => {
    m2.value = false;
  }, children: n(h, { path: t }) })] }), n(a, { onClick: () => {
    g.value = true;
  }, children: "Open Dialog In Dialog" }), n(s, { isOpen: g.value, onClose: () => {
    g.value = false;
  }, children: n(r, { sx: { minH: "40vh" }, children: i(c, { sx: { display: "flex", alignItems: "center", px: 16, textStyle: "sys.title-large" }, children: [n(c, { sx: { flex: 1 }, children: "我是对话框 2" }), n(d, { onClick: () => {
    g.value = false;
  }, children: n(h, { path: t }) })] }) }) })] }) }), n(o, { title: "Tooltip", children: n(a, { children: "Hover me" }) }), n(o, { title: "Menu", children: n(x, { $menu: i(p, { children: [n(u, { children: "选项一" }), n(u, { onClick: () => {
    e2.value = true;
  }, children: "选项二" }), n(s, { isOpen: e2.value, onClose: () => {
    e2.value = false;
  }, children: n(r, { sx: { minH: "40vh" }, children: "我是对话框" }) }), n(x, { placement: "right-start", $menu: i(p, { children: [n(u, { children: "选项三.1" }), n(u, { children: "选项三.2" })] }), children: n(u, { children: "选项三" }) })] }), children: n(a, { children: "Menu" }) }) })] }) });
}), { displayName: "OverlaysDefault" });
export {
  m as default
};
