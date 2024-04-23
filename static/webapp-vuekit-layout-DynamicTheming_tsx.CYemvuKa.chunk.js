import { b as e, n as r } from "./lib--nodepkg-vuekit.C4CbSFwU.chunk.js";
import { b as a, f as o, g as i } from "./lib--nodepkg-vueuikit.CEMh5M-A.chunk.js";
let n = e(() => {
  let e2 = { primary: "#1270f5", secondary: "#8a90a5", tertiary: "#b58391", neutral: "#5e5e5e", neutralVariant: "#757780", error: "#d93f23", warning: "#e69c00", success: "#5ac220" }, n2 = a.fromColors(e2).normalizeRoleRules();
  return r({ seed: e2, rules: n2, theming: o.create({ ...i, ...a.fromColors(e2).toDesignTokens(n2) }, { varPrefix: "vk" }) });
});
export {
  n as D
};
