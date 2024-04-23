import { j as e, a } from "./lib--nodepkg-vue-jsx-runtime.DL8fEjf_.chunk.js";
import { c as o, r as n } from "./lib--nodepkg-vuekit.C4CbSFwU.chunk.js";
import { d as t, t as s, B as i, P as r } from "./lib--nodepkg-vueuikit.CEMh5M-A.chunk.js";
let d = t({ from: { opacity: 0 }, to: { opacity: 1 }, duration: s.duration.md1, easing: s.easing.standard.accelerate }, { from: { opacity: 1 }, to: { opacity: 0 }, duration: s.duration.sm4, easing: s.easing.standard.decelerate }), u = o(() => {
  let o2 = n(true);
  return () => e(r, { isOpen: o2.value, $transition: (a2) => {
    let { content: o3 } = a2;
    return e(c, { children: o3 });
  }, $content: a(i, { sx: { containerStyle: "sys.on-surface", shadow: "2", py: 2, px: 4, rounded: "sm" }, children: ["Popper ", `${o2.value}`, "!"] }), children: e(i, { sx: { p: 4 }, component: "button", onMouseover: () => o2.value = true, onMouseout: () => o2.value = false, children: "Animated Popper" }) });
}), c = Object.assign(d, { displayName: "FadeInOutTransition" }), p = Object.assign(u, { displayName: "PopperMdCodeBlock4A44Dc15Default" });
export {
  p as C
};
