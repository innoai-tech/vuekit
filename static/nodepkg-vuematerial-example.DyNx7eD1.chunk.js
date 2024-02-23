import { c as e, j as t, G as i } from "./lib-nodepkg-vuekit.BljiiEAD.chunk.js";
import { d as a, b as l } from "./index.BkPqZiMt.entry.js";
import { B as n } from "./lib-nodepkg-vueuikit.BLT6cpk3.chunk.js";
import { C as p, d, e as s } from "./webapp-vuekit-layout.m7BsAc37.chunk.js";
import { z as r } from "./lib-nodepkg-typedef.BqHL_H1W.chunk.js";
let u = Object.assign(e(() => {
  let e2 = { Enabled: {}, Focused: { focus: true }, Invalid: { invalid: true }, Disabled: { disabled: true } }, u2 = { TextField: a };
  return () => t(p, { children: t(n, { sx: { display: "flex", flexDirection: "column", gap: 48 }, children: r(u2, (a2, p2) => t(n, { sx: { display: "flex", flexDirection: "column", gap: 16 }, children: [(e3) => t(a2, { ...e3, children: t("input", { "data-input": "", type: "text", placeholder: "Type" }) }), (e3) => t(a2, { ...e3, valued: true, children: t("input", { "data-input": "", type: "text", value: "Username" }) }), (e3) => t(a2, { ...e3, $leading: t(l, { path: d }), children: t("input", { "data-input": "", type: "text" }) }), (e3) => t(a2, { ...e3, $trailing: t(l, { path: s }), children: t("input", { "data-input": "", type: "text" }) })].map((a3, l2) => t(i, { children: t(n, { sx: { display: "flex", gap: 16 }, children: r(e2, (e3) => a3({ ...e3, $label: "Name", $supporting: "Desc" })) }) }, `${l2}`)) }, p2)) }) });
}), { displayName: "TextfieldsDefault" });
export {
  u as default
};
