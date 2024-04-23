import { j as e, a as t } from "./lib--nodepkg-vue-jsx-runtime.DL8fEjf_.chunk.js";
import { c as o, r } from "./lib--nodepkg-vuekit.C4CbSFwU.chunk.js";
import { c as s, B as i, P as a } from "./lib--nodepkg-vueuikit.CEMh5M-A.chunk.js";
let n = Object.assign(o(() => {
  let o2 = r(false), n2 = s((e2) => {
    let { state: t2 } = e2;
    t2.styles.popper.width = `${t2.rects.reference.width}px`;
  }, { name: "sameWidth", phase: "beforeWrite", requires: ["computeStyles"] });
  return () => e(a, { isOpen: o2.value, onClickOutside: () => o2.value = false, placement: "bottom-start", modifiers: [n2], $content: t(i, { sx: { containerStyle: "sys.on-surface" }, children: ["Popper ", `${o2.value}`, "!"] }), children: e(i, { sx: { p: 4 }, component: "button", onClick: () => o2.value = !o2.value, children: "Click Trigger Popper" }) });
}), { displayName: "PopperMdCodeBlockd4735E3ADefault" });
export {
  n as C
};
