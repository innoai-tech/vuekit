import { c as e, j as a, i as s, F as i, G as l } from "./lib-nodepkg-vuekit.c8aa0df1.chunk.js";
import { E as t, F as n, T as r, O as d, a as o, I as c } from "./index.c2987cae.entry.js";
import { C as p, c as u, d as m } from "./webapp-vuekit-layout.267ceb16.chunk.js";
import { B as h } from "./lib-nodepkg-vueuikit.d9454114.chunk.js";
import { x as f } from "./lib-nodepkg-typedef.6f3dc261.chunk.js";
let x = /* @__PURE__ */ e(() => {
  let e2 = { Enabled: {}, Disabled: { disabled: true }, Hovered: { hover: true }, Focused: { focus: true }, Pressed: { active: true } }, x2 = { ElevatedButton: t, FilledButton: n, TonalButton: r, OutlinedButton: d, TextButton: o };
  return () => /* @__PURE__ */ a(p, { children: /* @__PURE__ */ a(h, { sx: { display: "flex", flexDirection: "column", gap: 48 }, children: /* @__PURE__ */ f(x2, (t2, n2) => /* @__PURE__ */ a(h, { sx: { display: "flex", flexDirection: "column", gap: 16 }, children: /* @__PURE__ */ [(e3) => e3, (e3) => /* @__PURE__ */ s(i, { children: [/* @__PURE__ */ a(c, { path: u, placement: "start" }), e3] }), (e3) => /* @__PURE__ */ s(i, { children: [e3, /* @__PURE__ */ a(c, { path: m, placement: "end" })] })].map((s2, i2) => /* @__PURE__ */ a(l, { children: /* @__PURE__ */ a(h, { sx: { display: "flex", gap: 16 }, children: /* @__PURE__ */ f(e2, (e3, i3) => /* @__PURE__ */ a(t2, { ...e3, children: /* @__PURE__ */ s2(i3) })) }) }, i2)) }, n2)) }) });
}), k = /* @__PURE__ */ Object.assign(x, { displayName: "ButtonsDefault" });
export {
  k as default
};
