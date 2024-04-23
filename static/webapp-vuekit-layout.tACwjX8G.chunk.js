import { s as e, v as o, a as r, b as s, f as a, g as t } from "./lib--nodepkg-vueuikit.C6JhOhKI.chunk.js";
import { b as n, m as i } from "./lib--nodepkg-vuekit.DLZfr_ED.chunk.js";
import { g as l } from "./vendor--mdi-js.et_sAQgv.chunk.js";
let c = e("div")({ bgColor: "sys.surface-container" }), d = e("div")({ padding: 24, "& [data-example]": { display: "flex", flexDirection: "row-reverse", gap: 8, "& > *": { flex: 1 }, "& [data-example-container]": { display: "flex", alignItems: "center", justifyContent: "center" } }, "& :not(pre) > code": { font: "code", rounded: "xs", px: 4, bgColor: "sys.surface-container-low" }, "& pre": { overflow: "auto", textStyle: "sys.body-small", containerStyle: "sys.surface-container-low", m: 0, rounded: "sm", p: 16, font: "code", "& .comment": { color: o("sys.on-surface", r(0.38)) }, "& .string": { color: "sys.success" }, "& .tag .attr-name": { color: "sys.success" }, "& .function": { color: "sys.warning" }, "& .punctuation": { color: o("sys.on-surface", r(0.38)) }, "& .keyword": { color: "sys.error" } }, "& p,li": { my: "1em" }, overflowY: "auto" });
Object.assign(c, { displayName: "Unused" });
let u = Object.assign(d, { displayName: "Container" }), m = n(() => {
  let e2 = { primary: "#1270f5", secondary: "#8a90a5", tertiary: "#b58391", neutral: "#5e5e5e", neutralVariant: "#757780", error: "#d93f23", warning: "#e69c00", success: "#5ac220" }, o2 = s.fromColors(e2).normalizeRoleRules();
  return i({ seed: e2, rules: o2, theming: a.create({ ...t, ...s.fromColors(e2).toDesignTokens(o2) }, { varPrefix: "vk" }) });
}), f = Object.freeze(Object.defineProperty({ __proto__: null, default: l }, Symbol.toStringTag, { value: "Module" }));
export {
  u as C,
  m as D,
  f as i
};
