import { c as e, j as t, G as i } from "./lib-nodepkg-vuekit.c8aa0df1.chunk.js";
import { C as a, e as l, c as n } from "./webapp-vuekit-layout.267ceb16.chunk.js";
import { B as p } from "./lib-nodepkg-vueuikit.d9454114.chunk.js";
import { c as d, I as s } from "./index.c2987cae.entry.js";
import { x as r } from "./lib-nodepkg-typedef.6f3dc261.chunk.js";
let u = /* @__PURE__ */ e(() => {
  let e2 = { Enabled: {}, Focused: { focus: true }, Invalid: { invalid: true }, Disabled: { disabled: true } }, u2 = { TextField: d };
  return () => /* @__PURE__ */ t(a, { children: /* @__PURE__ */ t(p, { sx: { display: "flex", flexDirection: "column", gap: 48 }, children: /* @__PURE__ */ r(u2, (a2, d2) => /* @__PURE__ */ t(p, { sx: { display: "flex", flexDirection: "column", gap: 16 }, children: /* @__PURE__ */ [(e3) => /* @__PURE__ */ t(a2, { ...e3, children: /* @__PURE__ */ t("input", { "data-input": "", type: "text", placeholder: "Type" }) }), (e3) => /* @__PURE__ */ t(a2, { ...e3, valued: true, children: /* @__PURE__ */ t("input", { "data-input": "", type: "text", value: "Username" }) }), (e3) => /* @__PURE__ */ t(a2, { ...e3, $leading: /* @__PURE__ */ t(s, { path: l }), children: /* @__PURE__ */ t("input", { "data-input": "", type: "text" }) }), (e3) => /* @__PURE__ */ t(a2, { ...e3, $trailing: /* @__PURE__ */ t(s, { path: n }), children: /* @__PURE__ */ t("input", { "data-input": "", type: "text" }) })].map((a3, l2) => /* @__PURE__ */ t(i, { children: /* @__PURE__ */ t(p, { sx: { display: "flex", gap: 16 }, children: /* @__PURE__ */ r(e2, (e3) => a3({ ...e3, $label: "Name", $supporting: "Desc" })) }) }, l2)) }, d2)) }) });
}), c = /* @__PURE__ */ Object.assign(u, { displayName: "TextfieldsDefault" });
export {
  c as default
};
