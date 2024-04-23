import { j as e } from "./lib--nodepkg-vue-jsx-runtime.DL8fEjf_.chunk.js";
import { c as i, v as t } from "./lib--nodepkg-vuekit.C4CbSFwU.chunk.js";
import { g as a, I as l, h as n, m as p } from "./lib--nodepkg-vuematerial.B3vjsZbQ.chunk.js";
import { B as d } from "./lib--nodepkg-vueuikit.CEMh5M-A.chunk.js";
import { C as s } from "./webapp-vuekit-layout-Container_tsx.BRNlLrsU.chunk.js";
import { A as r } from "./lib--nodepkg-typedef.DdnEDJY6.chunk.js";
let u = Object.assign(i(() => {
  let i2 = { Enabled: {}, Focused: { focus: true }, Invalid: { invalid: true }, Disabled: { disabled: true } }, u2 = { TextField: a };
  return () => e(s, { children: e(d, { sx: { display: "flex", flexDirection: "column", gap: 48 }, children: r(u2, (a2, s2) => e(d, { sx: { display: "flex", flexDirection: "column", gap: 16 }, children: [(i3) => e(a2, { ...i3, children: e("input", { "data-input": "", type: "text", placeholder: "Type" }) }), (i3) => e(a2, { ...i3, valued: true, children: e("input", { "data-input": "", type: "text", value: "Username" }) }), (i3) => e(a2, { ...i3, $leading: e(l, { path: n }), children: e("input", { "data-input": "", type: "text" }) }), (i3) => e(a2, { ...i3, $trailing: e(l, { path: p }), children: e("input", { "data-input": "", type: "text" }) })].map((a3, l2) => e(t, { children: e(d, { sx: { display: "flex", gap: 16 }, children: r(i2, (e2) => a3({ ...e2, $label: "Name", $supporting: "Desc" })) }) }, `${l2}`)) }, s2)) }) });
}), { displayName: "TextfieldsDefault" });
export {
  u as default
};
