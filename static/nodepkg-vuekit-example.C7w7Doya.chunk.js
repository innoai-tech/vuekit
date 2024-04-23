import { j as e, a } from "./lib--nodepkg-vue-jsx-runtime.DL8fEjf_.chunk.js";
import { m as l, c as u, r as n, n as s, g as t, s as d, p as i, q as o } from "./lib--nodepkg-vuekit.C4CbSFwU.chunk.js";
import { s as r, c as p } from "./lib--nodepkg-typedef.DdnEDJY6.chunk.js";
let v = l({ value: r().optional().default("1"), onValueChange: p() }, (a2, l2) => {
  var u2;
  let { emit: n2 } = l2, r2 = s(null !== (u2 = a2.value) && void 0 !== u2 ? u2 : "");
  return t(r2, i(300), d((e2) => n2("value-change", e2))), t(r2, o((a3) => e("input", { value: a3, onInput: (e2) => {
    r2.value = e2.target.value;
  } })));
}), c = u(() => {
  let l2 = n("default");
  return () => e("div", { children: a("div", { style: { display: "flex", gap: "1rem" }, children: [e(g, { value: l2.value, onValueChange: (e2) => {
    l2.value = e2;
  } }), a("div", { children: ["Inputted: ", l2.value] })] }) });
}), g = Object.assign(v, { displayName: "TextDebounceInput" }), m = Object.assign(c, { displayName: "RxInVueMdCodeBlockd4735E3ADefault" });
export {
  m as C
};
