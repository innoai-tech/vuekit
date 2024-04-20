import { c as e, j as a, B as s, m as l, C as i, E as d, e as n, f as t, O as r, g as c, i as p, F as o, I as h, b as f, k as x, l as m } from "./index.CxFCMZJ4.entry.js";
let u = Object.assign(e(() => {
  let e2 = { Enabled: {}, Disabled: { disabled: true }, Hovered: { hover: true }, Focused: { focus: true }, Pressed: { active: true } }, u2 = { ElevatedButton: d, FilledButton: n, TonalButton: t, OutlinedButton: r, TextButton: c };
  return () => a(i, { children: a(s, { sx: { display: "flex", flexDirection: "column", gap: 48 }, children: l(u2, (i2, d2) => a(s, { sx: { display: "flex", flexDirection: "column", gap: 16 }, children: [(e3) => e3, (e3) => p(x, { children: [a(h, { path: f, placement: "start" }), e3] }), (e3) => p(x, { children: [e3, a(h, { path: m, placement: "end" })] })].map((d3, n2) => a(o, { children: a(s, { sx: { display: "flex", gap: 16 }, children: l(e2, (e3, s2) => a(i2, { ...e3, children: d3(s2) })) }) }, `${n2}`)) }, d2)) }) });
}), { displayName: "ButtonsDefault" });
export {
  u as default
};
