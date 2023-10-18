import { s as e, v as o, a as r, b as s, T as a, c as t } from "./lib-nodepkg-vueuikit.0cd81685.chunk.js";
import { b as n, i } from "./lib-nodepkg-vuekit.07a3eb77.chunk.js";
import { m as l } from "./lib-nodepkg-vuematerial.7bb53047.chunk.js";
let c = /* @__PURE__ */ e("div")({ bgColor: "sys.surface-container" }), u = /* @__PURE__ */ e("div")({ padding: 24, "& [data-example]": { display: "flex", flexDirection: "row-reverse", gap: 8, "& > *": { flex: 1 }, "& [data-example-container]": { display: "flex", alignItems: "center", justifyContent: "center" } }, "& :not(pre) > code": { font: "code", rounded: "xs", px: 4, bgColor: "sys.surface-container-low" }, "& pre": { overflow: "auto", textStyle: "sys.body-small", containerStyle: "sys.surface-container-low", m: 0, rounded: "sm", p: 16, font: "code", "& .comment": { color: /* @__PURE__ */ o("sys.on-surface", /* @__PURE__ */ r(0.38)) }, "& .string": { color: "sys.success" }, "& .tag .attr-name": { color: "sys.success" }, "& .function": { color: "sys.warning" }, "& .punctuation": { color: /* @__PURE__ */ o("sys.on-surface", /* @__PURE__ */ r(0.38)) }, "& .keyword": { color: "sys.error" } }, "& p,li": { my: "1em" }, overflowY: "auto" });
Object.assign(c, { displayName: "Unused" });
let d = /* @__PURE__ */ Object.assign(u, { displayName: "Container" }), m = /* @__PURE__ */ n(() => {
  let e2 = { primary: "#1270f5", secondary: "#8a90a5", tertiary: "#b58391", neutral: "#5e5e5e", neutralVariant: "#757780", error: "#d93f23", warning: "#e69c00", success: "#5ac220" }, o2 = /* @__PURE__ */ s.fromColors(e2).normalizeRoleRules();
  return i({ seed: e2, rules: o2, theming: /* @__PURE__ */ a.create({ ...t, ...s.fromColors(e2).toDesignTokens(o2) }, { varPrefix: "vk" }) });
}), f = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, default: l }, Symbol.toStringTag, { value: "Module" }));
export {
  d as C,
  m as D,
  f as i
};
