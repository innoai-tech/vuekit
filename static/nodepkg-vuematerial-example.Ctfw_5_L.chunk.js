import { c as e, j as a, B as t, m as i, C as l, T as n, I as d, a as s, b as p, F as r } from "./index.-RbwNzz2.entry.js";
let c = Object.assign(e(() => {
  let e2 = { Enabled: {}, Focused: { focus: true }, Invalid: { invalid: true }, Disabled: { disabled: true } }, c2 = { TextField: n };
  return () => a(l, { children: a(t, { sx: { display: "flex", flexDirection: "column", gap: 48 }, children: i(c2, (l2, n2) => a(t, { sx: { display: "flex", flexDirection: "column", gap: 16 }, children: [(e3) => a(l2, { ...e3, children: a("input", { "data-input": "", type: "text", placeholder: "Type" }) }), (e3) => a(l2, { ...e3, valued: true, children: a("input", { "data-input": "", type: "text", value: "Username" }) }), (e3) => a(l2, { ...e3, $leading: a(d, { path: s }), children: a("input", { "data-input": "", type: "text" }) }), (e3) => a(l2, { ...e3, $trailing: a(d, { path: p }), children: a("input", { "data-input": "", type: "text" }) })].map((l3, n3) => a(r, { children: a(t, { sx: { display: "flex", gap: 16 }, children: i(e2, (e3) => l3({ ...e3, $label: "Name", $supporting: "Desc" })) }) }, `${n3}`)) }, n2)) }) });
}), { displayName: "TextfieldsDefault" });
export {
  c as default
};
