import { s as o, v as a, a as e, d as t, t as r, P as n, O as l } from "./lib-nodepkg-vueuikit.fDlD6Ee8.chunk.js";
import { j as i, c as s, r as d, a as p, w as u, b as c } from "./lib-nodepkg-vuekit.BJ5kHDzH.chunk.js";
import { b as y, c as b, e as m } from "./lib-nodepkg-typedef.BsExPB8Y.chunk.js";
import { g } from "./vendor-innoai-tech-lodash.PTir9V15.chunk.js";
let _ = /* @__PURE__ */ o("button", { hover: /* @__PURE__ */ y().optional(), focus: /* @__PURE__ */ y().optional(), active: /* @__PURE__ */ y().optional(), disabled: /* @__PURE__ */ y().optional() }, { displayName: "ButtonBase" })({ textStyle: "sys.label-large", display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none", outline: "none", overflow: "hidden", border: 0, margin: 0, userSelect: "none", cursor: "pointer", _disabled: { cursor: "not-allowed" }, gap: 8, h: 40, px: 24, rounded: 20, transitionDuration: "md4", transitionTimingFunction: "standard-accelerate", bg: "none", pos: "relative", zIndex: 1, _$before: { content: '""', pos: "absolute", top: 0, right: 0, left: 0, bottom: 0, zIndex: -1, transitionDuration: "md1", transitionTimingFunction: "standard-accelerate" }, $data_icon: { boxSize: 18, _data_placement__start: { ml: -8 }, _data_placement__end: { mr: -8 } } }), v = /* @__PURE__ */ o(_, { displayName: "FilledButton" })({ containerStyle: "sys.primary", shadow: "1", _hover: { shadow: "2", _$before: { bgColor: /* @__PURE__ */ a("white", /* @__PURE__ */ e(0.08)) } }, _focus: { shadow: "2", _$before: { bgColor: /* @__PURE__ */ a("white", /* @__PURE__ */ e(0.12)) } }, _active: { shadow: "2", _$before: { bgColor: /* @__PURE__ */ a("white", /* @__PURE__ */ e(0.12)) } }, _disabled: { shadow: "0", color: /* @__PURE__ */ a("sys.on-surface", /* @__PURE__ */ e(0.38)), bgColor: "rgba(0,0,0,0)", _$before: { bgColor: /* @__PURE__ */ a("sys.on-surface", /* @__PURE__ */ e(0.12)) } } }), f = /* @__PURE__ */ o(_, { displayName: "ElevatedButton" })({ color: "sys.primary", shadow: "1", _$before: { bgColor: "sys.surface-container-low" }, _hover: { shadow: "2", _$before: { bgColor: /* @__PURE__ */ a("sys.primary", /* @__PURE__ */ e(0.08)) } }, _focus: { shadow: "2", _$before: { bgColor: /* @__PURE__ */ a("sys.primary", /* @__PURE__ */ e(0.12)) } }, _active: { shadow: "2", _$before: { bgColor: /* @__PURE__ */ a("sys.primary", /* @__PURE__ */ e(0.12)) } }, _disabled: { shadow: "0", color: /* @__PURE__ */ a("sys.on-surface", /* @__PURE__ */ e(0.38)), _$before: { bgColor: /* @__PURE__ */ a("sys.on-surface", /* @__PURE__ */ e(0.12)) } } }), h = /* @__PURE__ */ o(_, { displayName: "TextButton" })({ extends: [{ px: 16, $data_icon: { _data_placement__start: { ml: -4 }, _data_placement__end: { mr: -4 } } }], color: "sys.primary", _$before: { bgColor: "rgba(0,0,0,0)" }, _hover: { _$before: { bgColor: /* @__PURE__ */ a("sys.primary", /* @__PURE__ */ e(0.08)) } }, _focus: { _$before: { bgColor: /* @__PURE__ */ a("sys.primary", /* @__PURE__ */ e(0.12)) } }, _active: { _$before: { bgColor: /* @__PURE__ */ a("sys.primary", /* @__PURE__ */ e(0.12)) } }, _disabled: { color: /* @__PURE__ */ a("sys.on-surface", /* @__PURE__ */ e(0.38)), bgColor: "rgba(0,0,0,0)", _$before: { bgColor: "rgba(0,0,0,0)" } } }), C = /* @__PURE__ */ o(_, { displayName: "TonalButton" })({ containerStyle: "sys.secondary-container", color: "sys.primary", shadow: "0", _hover: { shadow: "1", _$before: { bgColor: /* @__PURE__ */ a("sys.on-secondary-container", /* @__PURE__ */ e(0.08)) } }, _focus: { _$before: { bgColor: /* @__PURE__ */ a("sys.on-secondary-container", /* @__PURE__ */ e(0.12)) } }, _active: { _$before: { bgColor: /* @__PURE__ */ a("sys.on-secondary-container", /* @__PURE__ */ e(0.12)) } }, _disabled: { color: /* @__PURE__ */ a("sys.on-surface", /* @__PURE__ */ e(0.38)), bgColor: "rgba(0,0,0,0)", shadow: "0", _$before: { bgColor: /* @__PURE__ */ a("sys.on-surface", /* @__PURE__ */ e(0.12)) } } }), $ = /* @__PURE__ */ o(_, { displayName: "OutlinedButton" })({ extends: [{ border: "1px solid" }], color: "sys.primary", bgColor: "rgba(0,0,0,0)", borderColor: "sys.outline", _hover: { bgColor: /* @__PURE__ */ a("sys.primary", /* @__PURE__ */ e(0.08)) }, _active: { bgColor: /* @__PURE__ */ a("sys.primary", /* @__PURE__ */ e(0.12)) }, _focus: { bgColor: /* @__PURE__ */ a("sys.primary", /* @__PURE__ */ e(0.12)) }, _disabled: { color: /* @__PURE__ */ a("sys.on-surface", /* @__PURE__ */ e(0.38)), bgColor: "rgba(0,0,0,0)", borderColor: /* @__PURE__ */ a("sys.on-surface", /* @__PURE__ */ e(0.12)) } }), x = /* @__PURE__ */ o(h, { displayName: "IconButton" })({ boxSize: 40, p: 0 }), w = /* @__PURE__ */ o("span", (o2, a2) => (a3) => /* @__PURE__ */ i(a3, { "data-icon": true, "data-placement": o2.placement, children: /* @__PURE__ */ i("svg", { viewBox: "0 0 24 24", children: /* @__PURE__ */ i("path", { d: o2.path }) }) }), { displayName: "Icon", props: ["path", "placement"] })({ boxSize: "1.2em" }), B = /* @__PURE__ */ t({ from: { opacity: 0 }, to: { opacity: 1 }, duration: r.duration.md1, easing: r.easing.standard.accelerate }, { from: { opacity: 1 }, to: { opacity: 0 }, duration: r.duration.sm4, easing: r.easing.standard.decelerate }), N = /* @__PURE__ */ o("div", { displayName: "TooltipContainer" })({ py: 4, px: 12, rounded: "sm", shadow: "3", containerStyle: "sys.on-surface", pos: "relative", zIndex: 100 }), I = /* @__PURE__ */ s({ title: /* @__PURE__ */ b(), $default: /* @__PURE__ */ b() }, (o2, a2) => {
  let { slots: e2 } = a2, t2 = /* @__PURE__ */ d(false);
  return () => {
    let a3 = e2.default()[0];
    return /* @__PURE__ */ i(n, { isOpen: t2.value, $content: /* @__PURE__ */ i(N, { children: o2.title }), $transition: (o3) => {
      let { content: a4 } = o3;
      return /* @__PURE__ */ i(B, { children: a4 });
    }, children: a3 ? p(a3, { onMouseover: () => {
      t2.value = true;
    }, onMouseout: () => {
      t2.value = false;
    } }) : null });
  };
}, { displayName: "Tooltip" }), S = /* @__PURE__ */ o("div", { displayName: "MenuContainer" })({ py: 8, rounded: "sm", shadow: "2", minW: 120, containerStyle: "sys.surface-container", pos: "relative", zIndex: 100 }), T = /* @__PURE__ */ o("div", { displayName: "ListItem" })({ "& + &": { borderTop: "1px solid", borderColor: "sys.outline-variant" }, py: 8, px: 16, textStyle: "sys.label-large", containerStyle: "sys.surface-container", _hover: { cursor: "pointer", bgColor: /* @__PURE__ */ a("sys.on-surface", /* @__PURE__ */ e(0.08)) } }), k = /* @__PURE__ */ s((o2, a2) => {
  let { slots: e2 } = a2, t2 = /* @__PURE__ */ d(false);
  return () => {
    var a3;
    let r2 = e2.default ? e2.default()[0] : void 0;
    return /* @__PURE__ */ i(n, { isOpen: t2.value, placement: o2.placement, onClickOutside: () => {
      t2.value = false;
    }, $content: /* @__PURE__ */ i(S, { children: null === (a3 = e2.menu) || void 0 === a3 ? void 0 : a3.call(e2) }), children: r2 ? p(r2, { onClick: () => {
      t2.value = true;
    } }) : null });
  };
}, { displayName: "Menu", props: ["placement"] }), D = /* @__PURE__ */ o("div", { displayName: "Container" })({ pos: "absolute", top: 0, left: 0, h: "100vh", w: "100vw", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center" }), O = /* @__PURE__ */ o("div", { displayName: "DialogBackdrop" })({ cursor: "pointer", pos: "absolute", top: 0, left: 0, h: "100vh", w: "100vw", zIndex: -1, bgColor: /* @__PURE__ */ a("sys.scrim", /* @__PURE__ */ e(0.38)) }), z = /* @__PURE__ */ o("div", { displayName: "DialogContainer" })({ py: 12, rounded: "sm", shadow: "3", minW: "50vw", containerStyle: "sys.surface-container-high" }), F = /* @__PURE__ */ t({ from: { opacity: 0 }, to: { opacity: 1 }, duration: r.duration.md1, easing: r.easing.standard.accelerate }, { from: { opacity: 1 }, to: { opacity: 0 }, duration: r.duration.sm4, easing: r.easing.standard.accelerate }), M = /* @__PURE__ */ s({ isOpen: /* @__PURE__ */ y().optional(), onClose: /* @__PURE__ */ b(), $default: /* @__PURE__ */ b().optional() }, (o2, a2) => {
  var e2;
  let { slots: t2, emit: r2 } = a2, n2 = /* @__PURE__ */ d(null !== (e2 = o2.isOpen) && void 0 !== e2 && e2), s2 = /* @__PURE__ */ d(false);
  return u(() => o2.isOpen, (o3) => {
    true === o3 ? n2.value = true : false === o3 && (s2.value = false);
  }), () => {
    var o3;
    return /* @__PURE__ */ i(l, { isOpen: n2.value, onContentBeforeMount: () => {
      s2.value = true;
    }, onEscKeydown: () => {
      s2.value = false;
    }, children: /* @__PURE__ */ c(D, { children: [/* @__PURE__ */ i(F, { onComplete: (o4) => {
      "leave" === o4 && (n2.value = false, r2("close"));
    }, children: s2.value ? /* @__PURE__ */ i(O, { onClick: () => {
      s2.value = false;
    } }) : null }), null === (o3 = t2.default) || void 0 === o3 ? void 0 : o3.call(t2)] }) });
  };
}, { displayName: "Dialog" }), j = /* @__PURE__ */ o("label", { valued: /* @__PURE__ */ y().optional(), focus: /* @__PURE__ */ y().optional(), invalid: /* @__PURE__ */ y().optional(), disabled: /* @__PURE__ */ y().optional(), $label: /* @__PURE__ */ b().optional(), $supporting: /* @__PURE__ */ b().optional(), $leading: /* @__PURE__ */ b().optional(), $trailing: /* @__PURE__ */ b().optional(), $default: /* @__PURE__ */ b() }, (o2, a2) => {
  let { slots: e2 } = a2;
  return (a3) => {
    var t2, r2, n2, l2;
    let s2 = o2.valued, d2 = o2.invalid, u2 = o2.disabled, y2 = /* @__PURE__ */ (null !== (l2 = null === (t2 = e2.default) || void 0 === t2 ? void 0 : t2.call(e2)) && void 0 !== l2 ? l2 : []).map((o3) => "input" === o3.type ? (s2 = !!g(o3.props, ["value"], /* @__PURE__ */ g(o3.props, ["placeholder"], s2)), u2 = /* @__PURE__ */ g(o3.props, ["disabled"], u2), p(o3, { disabled: u2 })) : p(o3));
    return /* @__PURE__ */ c(a3, { "data-valued": s2, "data-invalid": d2, "data-disabled": u2, "data-focus-within": o2.focus, "data-has-leading": !!e2.leading, "data-has-trailing": !!e2.trailing, children: [/* @__PURE__ */ c("div", { "data-input-container": "", children: [e2.leading && /* @__PURE__ */ i(E, { children: /* @__PURE__ */ e2.leading() }), /* @__PURE__ */ i("div", { "data-input-label": "", children: null === (r2 = e2.label) || void 0 === r2 ? void 0 : r2.call(e2) }), y2, e2.trailing && /* @__PURE__ */ i(E, { children: /* @__PURE__ */ e2.trailing() })] }), e2.supporting && /* @__PURE__ */ i("div", { "data-input-supporting": "", children: null === (n2 = e2.supporting) || void 0 === n2 ? void 0 : n2.call(e2) })] });
  };
}, { displayName: "TextField" })({ display: "block", pos: "relative", textStyle: "sys.body-large", $data_input_container: { pos: "relative" }, $data_input: { outline: "none", flex: 1, w: "100%", m: 0, px: 16, py: 4, minHeight: 56, bg: "none", border: "none", cursor: "text", "&[readonly]": { cursor: "pointer" }, bgColor: "sys.surface-container-highest", color: "sys.on-surface", roundedTop: "xs", borderBottom: "1px solid", borderColor: "sys.outline-variant", textStyle: "sys.body-large", transitionDuration: "sm1", transitionTimingFunction: "standard" }, $data_input_label: { pos: "absolute", top: 4, bottom: 4, left: 16, color: "sys.on-surface-variant", display: "flex", alignItems: "center", transitionDuration: "sm2", transitionTimingFunction: "standard-accelerate" }, $data_input_supporting: { textStyle: "sys.body-small", px: 16, pt: 4, display: "flex", gap: 16, color: "sys.on-surface-variant" }, _has_leading: { $data_input: { pl: 36 }, $data_input_label: { left: 36 } }, _has_trailing: { $data_input: { pr: 32 } }, _valued: { $data_input: { pt: 18 }, $data_input_label: { top: 8, bottom: "auto", textStyle: "sys.body-small" } }, _focusWithin: { $data_input: { pt: 18, borderBottom: "2px solid", borderColor: "sys.primary" }, $data_input_label: { top: 8, bottom: "auto", textStyle: "sys.body-small", color: "sys.primary" } }, _invalid: { $data_input: { borderBottom: "2px solid", borderColor: "sys.error" }, $data_input_label: { color: "sys.error" }, $data_input_supporting: { color: "sys.error" } }, _disabled: { opacity: 0.38, cursor: "not-allowed" } }), E = /* @__PURE__ */ o("div", { role: /* @__PURE__ */ m(["leading", "trailing"]).optional().default("leading") }, { displayName: "Maker" })({ pos: "absolute", top: 4, bottom: 4, display: "flex", alignItems: "center", color: "sys.on-surface-variant", _role__leading: { left: 12, $data_icon: { ml: -4 } }, _role__trailing: { right: 12, $data_icon: { mr: -4 } } });
export {
  M as D,
  f as E,
  v as F,
  x as I,
  T as L,
  k as M,
  $ as O,
  I as T,
  w as a,
  h as b,
  z as c,
  C as d,
  j as e
};
