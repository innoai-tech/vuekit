import { c as e, j as a, q as i } from "./lib-nodepkg-vuekit.171adedb.chunk.js";
import { C as t } from "./webapp-vuekit-layout.1a4769d8.chunk.js";
import { f as l, a as n, g as p, h as d } from "./lib-nodepkg-vuematerial.1509d2f6.chunk.js";
import { B as s } from "./lib-nodepkg-vueuikit.dfd5c493.chunk.js";
import { y as r } from "./lib-nodepkg-typedef.9aa925ea.chunk.js";
let u = e(() => {
  let e2 = { Enabled: {}, Focused: { focus: true }, Invalid: { invalid: true }, Disabled: { disabled: true } }, u2 = { TextField: l };
  return () => a(t, { children: a(s, { sx: { display: "flex", flexDirection: "column", gap: 48 }, children: r(u2, (t2, l2) => a(s, { sx: { display: "flex", flexDirection: "column", gap: 16 }, children: [(e3) => a(t2, { ...e3, children: a("input", { "data-input": "", type: "text", placeholder: "Type" }) }), (e3) => a(t2, { ...e3, valued: true, children: a("input", { "data-input": "", type: "text", value: "Username" }) }), (e3) => a(t2, { ...e3, $leading: a(n, { path: p }), children: a("input", { "data-input": "", type: "text" }) }), (e3) => a(t2, { ...e3, $trailing: a(n, { path: d }), children: a("input", { "data-input": "", type: "text" }) })].map((t3, l3) => a(i, { children: a(s, { sx: { display: "flex", gap: 16 }, children: r(e2, (e3) => t3({ ...e3, $label: "Name", $supporting: "Desc" })) }) }, l3)) }, l2)) }) });
}), c = Object.assign(u, { displayName: "TextfieldsDefault" });
export {
  c as default
};
