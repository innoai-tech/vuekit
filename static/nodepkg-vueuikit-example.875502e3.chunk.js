import { c as e, j as t, b as n, F as a } from "./lib-nodepkg-vuekit.bd88abd3.chunk.js";
import { T as i, B as s } from "./lib-nodepkg-vueuikit.2b27bb0d.chunk.js";
let o = e(() => {
  let e2 = i.use();
  return () => t(a, { children: Object.keys(e2.token.elevation.tokens).map((e3) => t(s, { sx: { mt: 16, p: 16, rounded: "lg", transitionDuration: "md4", transitionTimingFunction: "standard", shadow: e3, _hover: { shadow: `${1 + parseInt(e3)}` } }, children: n("div", { children: ["Elevation ", e3] }) }, e3)) });
}), r = Object.assign(o, { displayName: "ElevationDefault" });
export {
  r as default
};
