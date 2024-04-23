import { j as e, a as l } from "./lib--nodepkg-vue-jsx-runtime.DL8fEjf_.chunk.js";
import { c as t, r as a } from "./lib--nodepkg-vuekit.C4CbSFwU.chunk.js";
import { s as i, f as d, c as n } from "./lib--nodepkg-typedef.DdnEDJY6.chunk.js";
let u = t({ value: i().optional().default("1"), type: d(["text", "number"]), onValueChange: n() }, (l2, t2) => {
  let { emit: a2 } = t2;
  return () => e("input", { value: l2.value, onInput: (e2) => {
    a2("value-change", e2.target.value);
  } });
}), r = t({ $title: n().optional(), $item: n().optional(), $default: n().optional() }, (t2, a2) => {
  let {} = t2, { slots: i2 } = a2;
  return () => {
    var t3, a3;
    return l("dl", { children: [e("dt", { children: "default" }), e("dd", { children: null === (t3 = i2.default) || void 0 === t3 ? void 0 : t3.call(i2) }), e("dt", { children: "title" }), e("dd", { children: null === (a3 = i2.title) || void 0 === a3 ? void 0 : a3.call(i2) }), e("dt", { children: "item" }), e("dd", { children: [{ label: "1", value: "1" }, { label: "2", value: "2" }].map((e2) => {
      var l2;
      return null === (l2 = i2.item) || void 0 === l2 ? void 0 : l2.call(i2, e2);
    }) })] });
  };
}), o = t(() => {
  let t2 = a("");
  return () => e(s, { $title: l("div", { children: ["Inputted: ", t2.value] }), $item: (l2) => e("div", { children: l2.label }), children: e(c, { type: "text", onValueChange: (e2) => {
    t2.value = e2;
  } }) });
}), c = Object.assign(u, { displayName: "TextInput" }), s = Object.assign(r, { displayName: "List" }), p = Object.assign(o, { displayName: "IndexMdCodeBlock4A44Dc15Default" });
export {
  p as C
};
