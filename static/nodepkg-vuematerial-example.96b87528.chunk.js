import { c as e, j as a, b as s, F as l, q as i } from "./lib-nodepkg-vuekit.171adedb.chunk.js";
import { E as t, F as n, l as r, O as d, d as o, a as p, h as c, k as u } from "./lib-nodepkg-vuematerial.1509d2f6.chunk.js";
import { C as h } from "./webapp-vuekit-layout.1a4769d8.chunk.js";
import { B as m } from "./lib-nodepkg-vueuikit.dfd5c493.chunk.js";
import { y as f } from "./lib-nodepkg-typedef.9aa925ea.chunk.js";
let k = e(() => {
  let e2 = { Enabled: {}, Disabled: { disabled: true }, Hovered: { hover: true }, Focused: { focus: true }, Pressed: { active: true } }, k2 = { ElevatedButton: t, FilledButton: n, TonalButton: r, OutlinedButton: d, TextButton: o };
  return () => a(h, { children: a(m, { sx: { display: "flex", flexDirection: "column", gap: 48 }, children: f(k2, (t2, n2) => a(m, { sx: { display: "flex", flexDirection: "column", gap: 16 }, children: [(e3) => e3, (e3) => s(l, { children: [a(p, { path: c, placement: "start" }), e3] }), (e3) => s(l, { children: [e3, a(p, { path: u, placement: "end" })] })].map((s2, l2) => a(i, { children: a(m, { sx: { display: "flex", gap: 16 }, children: f(e2, (e3, l3) => a(t2, { ...e3, children: s2(l3) })) }) }, l2)) }, n2)) }) });
}), b = Object.assign(k, { displayName: "ButtonsDefault" });
export {
  b as default
};
