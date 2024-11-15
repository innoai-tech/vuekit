import { s as e, v as o, a, d as t, t as r, P as s, O as n } from "./lib-nodepkg-vueuikit.BA8_i_he.chunk.js";
import { j as i, e as l, h as d, b as p, w as c, f as u } from "./lib-nodepkg-vuekit.Dm-i5ZAp.chunk.js";
import { g as y } from "./vendor-innoai-tech-lodash.BEztC5WG.chunk.js";
let b = /* @__PURE__ */ e("button", { displayName: "ButtonBase", props: ["hover", "focus", "active", "disabled"] })({ textStyle: "sys.label-large", display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none", outline: "none", overflow: "hidden", border: 0, margin: 0, userSelect: "none", cursor: "pointer", _disabled: { cursor: "not-allowed" }, gap: 8, h: 40, px: 24, rounded: 20, transitionDuration: "md4", transitionTimingFunction: "standard-accelerate", bg: "none", pos: "relative", zIndex: 1, _$before: { content: '""', pos: "absolute", top: 0, right: 0, left: 0, bottom: 0, zIndex: -1, transitionDuration: "md1", transitionTimingFunction: "standard-accelerate" }, $data_icon: { boxSize: 18, _data_placement__start: { ml: -8 }, _data_placement__end: { mr: -8 } } }), m = /* @__PURE__ */ e(b, { displayName: "FilledButton" })({ containerStyle: "sys.primary", shadow: "1", _hover: { shadow: "2", _$before: { bgColor: /* @__PURE__ */ o("white", /* @__PURE__ */ a(0.08)) } }, _focus: { shadow: "2", _$before: { bgColor: /* @__PURE__ */ o("white", /* @__PURE__ */ a(0.12)) } }, _active: { shadow: "2", _$before: { bgColor: /* @__PURE__ */ o("white", /* @__PURE__ */ a(0.12)) } }, _disabled: { shadow: "0", color: /* @__PURE__ */ o("sys.on-surface", /* @__PURE__ */ a(0.38)), bgColor: "rgba(0,0,0,0)", _$before: { bgColor: /* @__PURE__ */ o("sys.on-surface", /* @__PURE__ */ a(0.12)) } } }), _ = /* @__PURE__ */ e(b, { displayName: "ElevatedButton" })({ color: "sys.primary", shadow: "1", _$before: { bgColor: "sys.surface-container-low" }, _hover: { shadow: "2", _$before: { bgColor: /* @__PURE__ */ o("sys.primary", /* @__PURE__ */ a(0.08)) } }, _focus: { shadow: "2", _$before: { bgColor: /* @__PURE__ */ o("sys.primary", /* @__PURE__ */ a(0.12)) } }, _active: { shadow: "2", _$before: { bgColor: /* @__PURE__ */ o("sys.primary", /* @__PURE__ */ a(0.12)) } }, _disabled: { shadow: "0", color: /* @__PURE__ */ o("sys.on-surface", /* @__PURE__ */ a(0.38)), _$before: { bgColor: /* @__PURE__ */ o("sys.on-surface", /* @__PURE__ */ a(0.12)) } } }), g = /* @__PURE__ */ e(b, { displayName: "TextButton" })({ extends: [{ px: 16, $data_icon: { _data_placement__start: { ml: -4 }, _data_placement__end: { mr: -4 } } }], color: "sys.primary", _$before: { bgColor: "rgba(0,0,0,0)" }, _hover: { _$before: { bgColor: /* @__PURE__ */ o("sys.primary", /* @__PURE__ */ a(0.08)) } }, _focus: { _$before: { bgColor: /* @__PURE__ */ o("sys.primary", /* @__PURE__ */ a(0.12)) } }, _active: { _$before: { bgColor: /* @__PURE__ */ o("sys.primary", /* @__PURE__ */ a(0.12)) } }, _disabled: { color: /* @__PURE__ */ o("sys.on-surface", /* @__PURE__ */ a(0.38)), bgColor: "rgba(0,0,0,0)", _$before: { bgColor: "rgba(0,0,0,0)" } } }), v = /* @__PURE__ */ e(b, { displayName: "TonalButton" })({ containerStyle: "sys.secondary-container", color: "sys.primary", shadow: "0", _hover: { shadow: "1", _$before: { bgColor: /* @__PURE__ */ o("sys.on-secondary-container", /* @__PURE__ */ a(0.08)) } }, _focus: { _$before: { bgColor: /* @__PURE__ */ o("sys.on-secondary-container", /* @__PURE__ */ a(0.12)) } }, _active: { _$before: { bgColor: /* @__PURE__ */ o("sys.on-secondary-container", /* @__PURE__ */ a(0.12)) } }, _disabled: { color: /* @__PURE__ */ o("sys.on-surface", /* @__PURE__ */ a(0.38)), bgColor: "rgba(0,0,0,0)", shadow: "0", _$before: { bgColor: /* @__PURE__ */ o("sys.on-surface", /* @__PURE__ */ a(0.12)) } } }), f = /* @__PURE__ */ e(b, { displayName: "OutlinedButton" })({ extends: [{ border: "1px solid" }], color: "sys.primary", bgColor: "rgba(0,0,0,0)", borderColor: "sys.outline", _hover: { bgColor: /* @__PURE__ */ o("sys.primary", /* @__PURE__ */ a(0.08)) }, _active: { bgColor: /* @__PURE__ */ o("sys.primary", /* @__PURE__ */ a(0.12)) }, _focus: { bgColor: /* @__PURE__ */ o("sys.primary", /* @__PURE__ */ a(0.12)) }, _disabled: { color: /* @__PURE__ */ o("sys.on-surface", /* @__PURE__ */ a(0.38)), bgColor: "rgba(0,0,0,0)", borderColor: /* @__PURE__ */ o("sys.on-surface", /* @__PURE__ */ a(0.12)) } }), h = /* @__PURE__ */ e(g, { displayName: "IconButton" })({ boxSize: 40, p: 0 }), C = /* @__PURE__ */ e("span", (e2, o2) => (o3) => {
  var a2;
  let t2 = null !== (a2 = e2.size) && void 0 !== a2 ? a2 : 24;
  return /* @__PURE__ */ i(o3, { "data-icon": true, "data-placement": e2.placement, "data-has-size": !!e2.size, children: /* @__PURE__ */ i("svg", { viewBox: "0 0 24 24", width: t2, height: t2, children: /* @__PURE__ */ i("path", { d: e2.path }) }) });
}, { displayName: "Icon", props: ["path", "size", "placement"] })({ display: "inline-block", _data_has_size__false: { boxSize: "1.2em", "& svg": { w: "100%", h: "100%" } } }), x = /* @__PURE__ */ t({ from: { opacity: 0 }, to: { opacity: 1 }, duration: r.duration.md1, easing: r.easing.standard.accelerate }, { from: { opacity: 1 }, to: { opacity: 0 }, duration: r.duration.sm4, easing: r.easing.standard.decelerate }), $ = /* @__PURE__ */ e("div", { displayName: "TooltipContainer" })({ py: 4, px: 12, rounded: "sm", shadow: "3", containerStyle: "sys.on-surface", pos: "relative", zIndex: 100 }), w = /* @__PURE__ */ l((e2, o2) => {
  let { slots: a2 } = o2, t2 = /* @__PURE__ */ d(false);
  return () => {
    let o3 = a2.default()[0];
    return /* @__PURE__ */ i(s, { isOpen: t2.value, $content: /* @__PURE__ */ i($, { children: e2.title }), $transition: (e3) => {
      let { content: o4 } = e3;
      return /* @__PURE__ */ i(x, { children: o4 });
    }, children: o3 ? p(o3, { onMouseover: () => {
      t2.value = true;
    }, onMouseout: () => {
      t2.value = false;
    } }) : null });
  };
}, { displayName: "Tooltip", props: ["title"] }), B = /* @__PURE__ */ e("div", { displayName: "MenuContainer" })({ py: 8, rounded: "sm", shadow: "2", minW: 120, containerStyle: "sys.surface-container", pos: "relative", zIndex: 100 }), N = /* @__PURE__ */ e("div", { displayName: "ListItem" })({ "& + &": { borderTop: "1px solid", borderColor: "sys.outline-variant" }, py: 8, px: 16, textStyle: "sys.label-large", containerStyle: "sys.surface-container", _hover: { cursor: "pointer", bgColor: /* @__PURE__ */ o("sys.on-surface", /* @__PURE__ */ a(0.08)) } }), I = /* @__PURE__ */ l((e2, o2) => {
  let { slots: a2 } = o2, t2 = /* @__PURE__ */ d(false);
  return () => {
    var o3;
    let r2 = a2.default ? a2.default()[0] : void 0;
    return /* @__PURE__ */ i(s, { isOpen: t2.value, placement: e2.placement, onClickOutside: () => {
      t2.value = false;
    }, $content: /* @__PURE__ */ i(B, { children: null === (o3 = a2.menu) || void 0 === o3 ? void 0 : o3.call(a2) }), children: r2 ? p(r2, { onClick: () => {
      t2.value = true;
    } }) : null });
  };
}, { displayName: "Menu", props: ["placement"] }), S = /* @__PURE__ */ e("div", { displayName: "Container" })({ pos: "absolute", top: 0, left: 0, h: "100vh", w: "100vw", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center" }), T = /* @__PURE__ */ e("div", { displayName: "DialogBackdrop" })({ cursor: "pointer", pos: "absolute", top: 0, left: 0, h: "100vh", w: "100vw", zIndex: -1, bgColor: /* @__PURE__ */ o("sys.scrim", /* @__PURE__ */ a(0.38)) }), k = /* @__PURE__ */ e("div", { displayName: "DialogContainer" })({ py: 12, rounded: "sm", shadow: "3", minW: "50vw", containerStyle: "sys.surface-container-high" }), z = /* @__PURE__ */ t({ from: { opacity: 0 }, to: { opacity: 1 }, duration: r.duration.md1, easing: r.easing.standard.accelerate }, { from: { opacity: 1 }, to: { opacity: 0 }, duration: r.duration.sm4, easing: r.easing.standard.accelerate }), D = /* @__PURE__ */ l((e2, o2) => {
  var a2;
  let { slots: t2, emit: r2 } = o2, s2 = /* @__PURE__ */ d(null !== (a2 = e2.isOpen) && void 0 !== a2 && a2), l2 = /* @__PURE__ */ d(false);
  return c(() => e2.isOpen, (e3) => {
    true === e3 ? s2.value = true : false === e3 && (l2.value = false);
  }), () => {
    var e3;
    return /* @__PURE__ */ i(n, { isOpen: s2.value, onContentBeforeMount: () => {
      l2.value = true;
    }, onEscKeydown: () => {
      l2.value = false;
    }, children: /* @__PURE__ */ u(S, { children: [/* @__PURE__ */ i(z, { onComplete: (e4) => {
      "leave" === e4 && (s2.value = false, r2("close"));
    }, children: l2.value ? /* @__PURE__ */ i(T, { onClick: () => {
      l2.value = false;
    } }) : null }), null === (e3 = t2.default) || void 0 === e3 ? void 0 : e3.call(t2)] }) });
  };
}, { displayName: "Dialog", props: ["isOpen"], emits: ["close"] }), O = /* @__PURE__ */ e("label", (e2, o2) => {
  let { slots: a2 } = o2;
  return (o3) => {
    var t2, r2, s2, n2;
    let l2 = e2.valued, d2 = e2.invalid, c2 = e2.disabled, b2 = /* @__PURE__ */ (null !== (n2 = null === (t2 = a2.default) || void 0 === t2 ? void 0 : t2.call(a2)) && void 0 !== n2 ? n2 : []).map((e3) => "input" === e3.type ? (l2 = !!y(e3.props, ["value"], /* @__PURE__ */ y(e3.props, ["placeholder"], l2)), c2 = /* @__PURE__ */ y(e3.props, ["disabled"], c2), p(e3, { disabled: c2 })) : p(e3));
    return /* @__PURE__ */ u(o3, { "data-valued": l2, "data-invalid": d2, "data-disabled": c2, "data-focus-within": e2.focus, "data-has-leading": !!a2.leading, "data-has-trailing": !!a2.trailing, children: [/* @__PURE__ */ u("div", { "data-input-container": "", children: [a2.leading && /* @__PURE__ */ i(F, { role: "leading", children: /* @__PURE__ */ a2.leading() }), /* @__PURE__ */ i("div", { "data-input-label": "", children: null === (r2 = a2.label) || void 0 === r2 ? void 0 : r2.call(a2) }), b2, a2.trailing && /* @__PURE__ */ i(F, { role: "trailing", children: /* @__PURE__ */ a2.trailing() })] }), a2.supporting && /* @__PURE__ */ i("div", { "data-input-supporting": "", children: null === (s2 = a2.supporting) || void 0 === s2 ? void 0 : s2.call(a2) })] });
  };
}, { displayName: "TextField", props: ["valued", "focus", "invalid", "disabled"] })({ display: "block", pos: "relative", textStyle: "sys.body-large", $data_input_container: { pos: "relative" }, $data_input: { outline: "none", flex: 1, w: "100%", m: 0, px: 16, py: 4, minHeight: 56, bg: "none", border: "none", cursor: "text", "&[readonly]": { cursor: "pointer" }, bgColor: "sys.surface-container-highest", color: "sys.on-surface", roundedTop: "xs", borderBottom: "1px solid", borderColor: "sys.outline-variant", textStyle: "sys.body-large", transitionDuration: "sm1", transitionTimingFunction: "standard" }, $data_input_label: { pos: "absolute", top: 4, bottom: 4, left: 16, color: "sys.on-surface-variant", display: "flex", alignItems: "center", transitionDuration: "sm2", transitionTimingFunction: "standard-accelerate" }, $data_input_supporting: { textStyle: "sys.body-small", px: 16, pt: 4, display: "flex", gap: 16, color: "sys.on-surface-variant" }, _has_leading: { $data_input: { pl: 36 }, $data_input_label: { left: 36 } }, _has_trailing: { $data_input: { pr: 32 } }, _valued: { $data_input: { pt: 18 }, $data_input_label: { top: 8, bottom: "auto", textStyle: "sys.body-small" } }, _focusWithin: { $data_input: { pt: 18, borderBottom: "2px solid", borderColor: "sys.primary" }, $data_input_label: { top: 8, bottom: "auto", textStyle: "sys.body-small", color: "sys.primary" } }, _invalid: { $data_input: { borderBottom: "2px solid", borderColor: "sys.error" }, $data_input_label: { color: "sys.error" }, $data_input_supporting: { color: "sys.error" } }, _disabled: { opacity: 0.38, cursor: "not-allowed" } }), F = /* @__PURE__ */ e("div", { displayName: "Maker", props: ["role"] })({ pos: "absolute", top: 4, bottom: 4, display: "flex", alignItems: "center", color: "sys.on-surface-variant", _role__leading: { left: 12, $data_icon: { ml: -4 } }, _role__trailing: { right: 12, $data_icon: { mr: -4 } } });
export {
  D,
  _ as E,
  m as F,
  h as I,
  N as L,
  I as M,
  f as O,
  w as T,
  C as a,
  g as b,
  k as c,
  v as d,
  O as e
};
