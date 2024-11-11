import { s as o, v as e, a, d as t, t as r, P as n, O as s } from "./lib-nodepkg-vueuikit.COo5eI3v.chunk.js";
import { j as l, b as i, h as d, f as p, w as c, d as u } from "./lib-nodepkg-vuekit.hhdOaADt.chunk.js";
import { g as y } from "./vendor-innoai-tech-lodash.B5yuHYMQ.chunk.js";
let b = /* @__PURE__ */ o("button", { displayName: "ButtonBase", props: ["hover", "focus", "active", "disabled"] })({ textStyle: "sys.label-large", display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none", outline: "none", overflow: "hidden", border: 0, margin: 0, userSelect: "none", cursor: "pointer", _disabled: { cursor: "not-allowed" }, gap: 8, h: 40, px: 24, rounded: 20, transitionDuration: "md4", transitionTimingFunction: "standard-accelerate", bg: "none", pos: "relative", zIndex: 1, _$before: { content: '""', pos: "absolute", top: 0, right: 0, left: 0, bottom: 0, zIndex: -1, transitionDuration: "md1", transitionTimingFunction: "standard-accelerate" }, $data_icon: { boxSize: 18, _data_placement__start: { ml: -8 }, _data_placement__end: { mr: -8 } } }), m = /* @__PURE__ */ o(b, { displayName: "FilledButton" })({ containerStyle: "sys.primary", shadow: "1", _hover: { shadow: "2", _$before: { bgColor: /* @__PURE__ */ e("white", /* @__PURE__ */ a(0.08)) } }, _focus: { shadow: "2", _$before: { bgColor: /* @__PURE__ */ e("white", /* @__PURE__ */ a(0.12)) } }, _active: { shadow: "2", _$before: { bgColor: /* @__PURE__ */ e("white", /* @__PURE__ */ a(0.12)) } }, _disabled: { shadow: "0", color: /* @__PURE__ */ e("sys.on-surface", /* @__PURE__ */ a(0.38)), bgColor: "rgba(0,0,0,0)", _$before: { bgColor: /* @__PURE__ */ e("sys.on-surface", /* @__PURE__ */ a(0.12)) } } }), _ = /* @__PURE__ */ o(b, { displayName: "ElevatedButton" })({ color: "sys.primary", shadow: "1", _$before: { bgColor: "sys.surface-container-low" }, _hover: { shadow: "2", _$before: { bgColor: /* @__PURE__ */ e("sys.primary", /* @__PURE__ */ a(0.08)) } }, _focus: { shadow: "2", _$before: { bgColor: /* @__PURE__ */ e("sys.primary", /* @__PURE__ */ a(0.12)) } }, _active: { shadow: "2", _$before: { bgColor: /* @__PURE__ */ e("sys.primary", /* @__PURE__ */ a(0.12)) } }, _disabled: { shadow: "0", color: /* @__PURE__ */ e("sys.on-surface", /* @__PURE__ */ a(0.38)), _$before: { bgColor: /* @__PURE__ */ e("sys.on-surface", /* @__PURE__ */ a(0.12)) } } }), g = /* @__PURE__ */ o(b, { displayName: "TextButton" })({ extends: [{ px: 16, $data_icon: { _data_placement__start: { ml: -4 }, _data_placement__end: { mr: -4 } } }], color: "sys.primary", _$before: { bgColor: "rgba(0,0,0,0)" }, _hover: { _$before: { bgColor: /* @__PURE__ */ e("sys.primary", /* @__PURE__ */ a(0.08)) } }, _focus: { _$before: { bgColor: /* @__PURE__ */ e("sys.primary", /* @__PURE__ */ a(0.12)) } }, _active: { _$before: { bgColor: /* @__PURE__ */ e("sys.primary", /* @__PURE__ */ a(0.12)) } }, _disabled: { color: /* @__PURE__ */ e("sys.on-surface", /* @__PURE__ */ a(0.38)), bgColor: "rgba(0,0,0,0)", _$before: { bgColor: "rgba(0,0,0,0)" } } }), v = /* @__PURE__ */ o(b, { displayName: "TonalButton" })({ containerStyle: "sys.secondary-container", color: "sys.primary", shadow: "0", _hover: { shadow: "1", _$before: { bgColor: /* @__PURE__ */ e("sys.on-secondary-container", /* @__PURE__ */ a(0.08)) } }, _focus: { _$before: { bgColor: /* @__PURE__ */ e("sys.on-secondary-container", /* @__PURE__ */ a(0.12)) } }, _active: { _$before: { bgColor: /* @__PURE__ */ e("sys.on-secondary-container", /* @__PURE__ */ a(0.12)) } }, _disabled: { color: /* @__PURE__ */ e("sys.on-surface", /* @__PURE__ */ a(0.38)), bgColor: "rgba(0,0,0,0)", shadow: "0", _$before: { bgColor: /* @__PURE__ */ e("sys.on-surface", /* @__PURE__ */ a(0.12)) } } }), f = /* @__PURE__ */ o(b, { displayName: "OutlinedButton" })({ extends: [{ border: "1px solid" }], color: "sys.primary", bgColor: "rgba(0,0,0,0)", borderColor: "sys.outline", _hover: { bgColor: /* @__PURE__ */ e("sys.primary", /* @__PURE__ */ a(0.08)) }, _active: { bgColor: /* @__PURE__ */ e("sys.primary", /* @__PURE__ */ a(0.12)) }, _focus: { bgColor: /* @__PURE__ */ e("sys.primary", /* @__PURE__ */ a(0.12)) }, _disabled: { color: /* @__PURE__ */ e("sys.on-surface", /* @__PURE__ */ a(0.38)), bgColor: "rgba(0,0,0,0)", borderColor: /* @__PURE__ */ e("sys.on-surface", /* @__PURE__ */ a(0.12)) } }), h = /* @__PURE__ */ o(g, { displayName: "IconButton" })({ boxSize: 40, p: 0 }), C = /* @__PURE__ */ o("span", (o2, e2) => (e3) => /* @__PURE__ */ l(e3, { "data-icon": true, "data-placement": o2.placement, children: /* @__PURE__ */ l("svg", { viewBox: "0 0 24 24", children: /* @__PURE__ */ l("path", { d: o2.path }) }) }), { displayName: "Icon", props: ["path", "placement"] })({ boxSize: "1.2em" }), x = /* @__PURE__ */ t({ from: { opacity: 0 }, to: { opacity: 1 }, duration: r.duration.md1, easing: r.easing.standard.accelerate }, { from: { opacity: 1 }, to: { opacity: 0 }, duration: r.duration.sm4, easing: r.easing.standard.decelerate }), $ = /* @__PURE__ */ o("div", { displayName: "TooltipContainer" })({ py: 4, px: 12, rounded: "sm", shadow: "3", containerStyle: "sys.on-surface", pos: "relative", zIndex: 100 }), w = /* @__PURE__ */ i((o2, e2) => {
  let { slots: a2 } = e2, t2 = /* @__PURE__ */ d(false);
  return () => {
    let e3 = a2.default()[0];
    return /* @__PURE__ */ l(n, { isOpen: t2.value, $content: /* @__PURE__ */ l($, { children: o2.title }), $transition: (o3) => {
      let { content: e4 } = o3;
      return /* @__PURE__ */ l(x, { children: e4 });
    }, children: e3 ? p(e3, { onMouseover: () => {
      t2.value = true;
    }, onMouseout: () => {
      t2.value = false;
    } }) : null });
  };
}, { displayName: "Tooltip", props: ["title"] }), B = /* @__PURE__ */ o("div", { displayName: "MenuContainer" })({ py: 8, rounded: "sm", shadow: "2", minW: 120, containerStyle: "sys.surface-container", pos: "relative", zIndex: 100 }), N = /* @__PURE__ */ o("div", { displayName: "ListItem" })({ "& + &": { borderTop: "1px solid", borderColor: "sys.outline-variant" }, py: 8, px: 16, textStyle: "sys.label-large", containerStyle: "sys.surface-container", _hover: { cursor: "pointer", bgColor: /* @__PURE__ */ e("sys.on-surface", /* @__PURE__ */ a(0.08)) } }), I = /* @__PURE__ */ i((o2, e2) => {
  let { slots: a2 } = e2, t2 = /* @__PURE__ */ d(false);
  return () => {
    var e3;
    let r2 = a2.default ? a2.default()[0] : void 0;
    return /* @__PURE__ */ l(n, { isOpen: t2.value, placement: o2.placement, onClickOutside: () => {
      t2.value = false;
    }, $content: /* @__PURE__ */ l(B, { children: null === (e3 = a2.menu) || void 0 === e3 ? void 0 : e3.call(a2) }), children: r2 ? p(r2, { onClick: () => {
      t2.value = true;
    } }) : null });
  };
}, { displayName: "Menu", props: ["placement"] }), S = /* @__PURE__ */ o("div", { displayName: "Container" })({ pos: "absolute", top: 0, left: 0, h: "100vh", w: "100vw", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center" }), T = /* @__PURE__ */ o("div", { displayName: "DialogBackdrop" })({ cursor: "pointer", pos: "absolute", top: 0, left: 0, h: "100vh", w: "100vw", zIndex: -1, bgColor: /* @__PURE__ */ e("sys.scrim", /* @__PURE__ */ a(0.38)) }), k = /* @__PURE__ */ o("div", { displayName: "DialogContainer" })({ py: 12, rounded: "sm", shadow: "3", minW: "50vw", containerStyle: "sys.surface-container-high" }), D = /* @__PURE__ */ t({ from: { opacity: 0 }, to: { opacity: 1 }, duration: r.duration.md1, easing: r.easing.standard.accelerate }, { from: { opacity: 1 }, to: { opacity: 0 }, duration: r.duration.sm4, easing: r.easing.standard.accelerate }), O = /* @__PURE__ */ i((o2, e2) => {
  var a2;
  let { slots: t2, emit: r2 } = e2, n2 = /* @__PURE__ */ d(null !== (a2 = o2.isOpen) && void 0 !== a2 && a2), i2 = /* @__PURE__ */ d(false);
  return c(() => o2.isOpen, (o3) => {
    true === o3 ? n2.value = true : false === o3 && (i2.value = false);
  }), () => {
    var o3;
    return /* @__PURE__ */ l(s, { isOpen: n2.value, onContentBeforeMount: () => {
      i2.value = true;
    }, onEscKeydown: () => {
      i2.value = false;
    }, children: /* @__PURE__ */ u(S, { children: [/* @__PURE__ */ l(D, { onComplete: (o4) => {
      "leave" === o4 && (n2.value = false, r2("close"));
    }, children: i2.value ? /* @__PURE__ */ l(T, { onClick: () => {
      i2.value = false;
    } }) : null }), null === (o3 = t2.default) || void 0 === o3 ? void 0 : o3.call(t2)] }) });
  };
}, { displayName: "Dialog", props: ["isOpen"], emits: ["close"] }), z = /* @__PURE__ */ o("label", (o2, e2) => {
  let { slots: a2 } = e2;
  return (e3) => {
    var t2, r2, n2, s2;
    let i2 = o2.valued, d2 = o2.invalid, c2 = o2.disabled, b2 = /* @__PURE__ */ (null !== (s2 = null === (t2 = a2.default) || void 0 === t2 ? void 0 : t2.call(a2)) && void 0 !== s2 ? s2 : []).map((o3) => "input" === o3.type ? (i2 = !!y(o3.props, ["value"], /* @__PURE__ */ y(o3.props, ["placeholder"], i2)), c2 = /* @__PURE__ */ y(o3.props, ["disabled"], c2), p(o3, { disabled: c2 })) : p(o3));
    return /* @__PURE__ */ u(e3, { "data-valued": i2, "data-invalid": d2, "data-disabled": c2, "data-focus-within": o2.focus, "data-has-leading": !!a2.leading, "data-has-trailing": !!a2.trailing, children: [/* @__PURE__ */ u("div", { "data-input-container": "", children: [a2.leading && /* @__PURE__ */ l(F, { role: "leading", children: /* @__PURE__ */ a2.leading() }), /* @__PURE__ */ l("div", { "data-input-label": "", children: null === (r2 = a2.label) || void 0 === r2 ? void 0 : r2.call(a2) }), b2, a2.trailing && /* @__PURE__ */ l(F, { role: "trailing", children: /* @__PURE__ */ a2.trailing() })] }), a2.supporting && /* @__PURE__ */ l("div", { "data-input-supporting": "", children: null === (n2 = a2.supporting) || void 0 === n2 ? void 0 : n2.call(a2) })] });
  };
}, { displayName: "TextField", props: ["valued", "focus", "invalid", "disabled"] })({ display: "block", pos: "relative", textStyle: "sys.body-large", $data_input_container: { pos: "relative" }, $data_input: { outline: "none", flex: 1, w: "100%", m: 0, px: 16, py: 4, minHeight: 56, bg: "none", border: "none", cursor: "text", "&[readonly]": { cursor: "pointer" }, bgColor: "sys.surface-container-highest", color: "sys.on-surface", roundedTop: "xs", borderBottom: "1px solid", borderColor: "sys.outline-variant", textStyle: "sys.body-large", transitionDuration: "sm1", transitionTimingFunction: "standard" }, $data_input_label: { pos: "absolute", top: 4, bottom: 4, left: 16, color: "sys.on-surface-variant", display: "flex", alignItems: "center", transitionDuration: "sm2", transitionTimingFunction: "standard-accelerate" }, $data_input_supporting: { textStyle: "sys.body-small", px: 16, pt: 4, display: "flex", gap: 16, color: "sys.on-surface-variant" }, _has_leading: { $data_input: { pl: 36 }, $data_input_label: { left: 36 } }, _has_trailing: { $data_input: { pr: 32 } }, _valued: { $data_input: { pt: 18 }, $data_input_label: { top: 8, bottom: "auto", textStyle: "sys.body-small" } }, _focusWithin: { $data_input: { pt: 18, borderBottom: "2px solid", borderColor: "sys.primary" }, $data_input_label: { top: 8, bottom: "auto", textStyle: "sys.body-small", color: "sys.primary" } }, _invalid: { $data_input: { borderBottom: "2px solid", borderColor: "sys.error" }, $data_input_label: { color: "sys.error" }, $data_input_supporting: { color: "sys.error" } }, _disabled: { opacity: 0.38, cursor: "not-allowed" } }), F = /* @__PURE__ */ o("div", { displayName: "Maker", props: ["role"] })({ pos: "absolute", top: 4, bottom: 4, display: "flex", alignItems: "center", color: "sys.on-surface-variant", _role__leading: { left: 12, $data_icon: { ml: -4 } }, _role__trailing: { right: 12, $data_icon: { mr: -4 } } });
export {
  O as D,
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
  z as e
};
