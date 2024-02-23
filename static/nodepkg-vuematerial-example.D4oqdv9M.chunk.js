import { c as e, j as a, k as s, F as i, G as l } from "./lib-nodepkg-vuekit.BljiiEAD.chunk.js";
import { E as t, F as n, e as r, O as d, T as o, b as p } from "./index.BkPqZiMt.entry.js";
import { B as c } from "./lib-nodepkg-vueuikit.BLT6cpk3.chunk.js";
import { C as u, e as m, f } from "./webapp-vuekit-layout.m7BsAc37.chunk.js";
import { z as h } from "./lib-nodepkg-typedef.BqHL_H1W.chunk.js";
let k = Object.assign(e(() => {
  let e2 = { Enabled: {}, Disabled: { disabled: true }, Hovered: { hover: true }, Focused: { focus: true }, Pressed: { active: true } }, k2 = { ElevatedButton: t, FilledButton: n, TonalButton: r, OutlinedButton: d, TextButton: o };
  return () => a(u, { children: a(c, { sx: { display: "flex", flexDirection: "column", gap: 48 }, children: h(k2, (t2, n2) => a(c, { sx: { display: "flex", flexDirection: "column", gap: 16 }, children: [(e3) => e3, (e3) => s(i, { children: [a(p, { path: m, placement: "start" }), e3] }), (e3) => s(i, { children: [e3, a(p, { path: f, placement: "end" })] })].map((s2, i2) => a(l, { children: a(c, { sx: { display: "flex", gap: 16 }, children: h(e2, (e3, i3) => a(t2, { ...e3, children: s2(i3) })) }) }, `${i2}`)) }, n2)) }) });
}), { displayName: "ButtonsDefault" });
export {
  k as default
};
