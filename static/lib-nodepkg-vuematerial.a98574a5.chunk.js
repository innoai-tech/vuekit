import { s as a, v as e, a as o, d as t, t as n, P as s, O as i } from "./lib-nodepkg-vueuikit.1b7874bb.chunk.js";
import { j as r, c as l, r as d, a as c, w as p, b as u, F as y } from "./lib-nodepkg-vuekit.a575cf60.chunk.js";
import { e as b, f as g, s as m, c as _, g as v } from "./lib-nodepkg-typedef.60c9c151.chunk.js";
let C = a("button", { hover: b().optional(), focus: b().optional(), active: b().optional(), disabled: b().optional() })({ textStyle: "sys.label-large", display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none", outline: "none", overflow: "hidden", border: 0, margin: 0, userSelect: "none", cursor: "pointer", _disabled: { cursor: "not-allowed" }, gap: 8, h: 40, px: 24, rounded: 20, transitionDuration: "md4", transitionTimingFunction: "standard-accelerate", bg: "none", pos: "relative", zIndex: 1, _$before: { content: '""', pos: "absolute", top: 0, right: 0, left: 0, bottom: 0, zIndex: -1, transitionDuration: "md1", transitionTimingFunction: "standard-accelerate" }, $data_icon: { boxSize: 18, _data_placement__start: { ml: -8 }, _data_placement__end: { mr: -8 } } }), f = Object.assign(C, { displayName: "ButtonBase" }), h = a(f)({ containerStyle: "sys.primary", shadow: "1", _hover: { shadow: "2", _$before: { bgColor: e("white", o(0.08)) } }, _focus: { shadow: "2", _$before: { bgColor: e("white", o(0.12)) } }, _active: { shadow: "2", _$before: { bgColor: e("white", o(0.12)) } }, _disabled: { shadow: "0", color: e("sys.on-surface", o(0.38)), bgColor: "rgba(0,0,0,0)", _$before: { bgColor: e("sys.on-surface", o(0.12)) } } }), L = Object.assign(h, { displayName: "FilledButton" }), $ = a(f)({ color: "sys.primary", shadow: "1", _$before: { bgColor: "sys.surface-container-low" }, _hover: { shadow: "2", _$before: { bgColor: e("sys.primary", o(0.08)) } }, _focus: { shadow: "2", _$before: { bgColor: e("sys.primary", o(0.12)) } }, _active: { shadow: "2", _$before: { bgColor: e("sys.primary", o(0.12)) } }, _disabled: { shadow: "0", color: e("sys.on-surface", o(0.38)), _$before: { bgColor: e("sys.on-surface", o(0.12)) } } }), x = Object.assign($, { displayName: "ElevatedButton" }), H = a(f)({ extends: [{ px: 16, $data_icon: { _data_placement__start: { ml: -4 }, _data_placement__end: { mr: -4 } } }], color: "sys.primary", _$before: { bgColor: "rgba(0,0,0,0)" }, _hover: { _$before: { bgColor: e("sys.primary", o(0.08)) } }, _focus: { _$before: { bgColor: e("sys.primary", o(0.12)) } }, _active: { _$before: { bgColor: e("sys.primary", o(0.12)) } }, _disabled: { color: e("sys.on-surface", o(0.38)), bgColor: "rgba(0,0,0,0)", _$before: { bgColor: "rgba(0,0,0,0)" } } }), V = Object.assign(H, { displayName: "TextButton" }), w = a(f)({ containerStyle: "sys.secondary-container", color: "sys.primary", shadow: "0", _hover: { shadow: "1", _$before: { bgColor: e("sys.on-secondary-container", o(0.08)) } }, _focus: { _$before: { bgColor: e("sys.on-secondary-container", o(0.12)) } }, _active: { _$before: { bgColor: e("sys.on-secondary-container", o(0.12)) } }, _disabled: { color: e("sys.on-surface", o(0.38)), bgColor: "rgba(0,0,0,0)", shadow: "0", _$before: { bgColor: e("sys.on-surface", o(0.12)) } } }), M = Object.assign(w, { displayName: "TonalButton" }), O = a(f)({ extends: [{ border: "1px solid" }], color: "sys.primary", bgColor: "rgba(0,0,0,0)", borderColor: "sys.outline", _hover: { bgColor: e("sys.primary", o(0.08)) }, _active: { bgColor: e("sys.primary", o(0.12)) }, _focus: { bgColor: e("sys.primary", o(0.12)) }, _disabled: { color: e("sys.on-surface", o(0.38)), bgColor: "rgba(0,0,0,0)", borderColor: e("sys.on-surface", o(0.12)) } }), j = Object.assign(O, { displayName: "OutlinedButton" }), B = a(V, {})({ boxSize: 40, p: 0 }), S = Object.assign(B, { displayName: "IconButton" });
var I = "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z", N = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z", T = "M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z", k = "M1,1V5H2V19H1V23H5V22H19V23H23V19H22V5H23V1H19V2H5V1M5,4H19V5H20V19H19V20H5V19H4V5H5M6,6V14H9V18H18V9H14V6M8,8H12V12H8M14,11H16V16H11V14H14", D = "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z", F = "M2,21L23,12L2,3V10L17,12L2,14V21Z", z = "M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z", A = "M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13";
let Z = a("span", { placement: g(["start", "end"]).optional(), path: m() }, (a2, e2) => {
  let {} = e2;
  return (e3) => r(e3, { "data-icon": true, "data-placement": a2.placement, children: r("svg", { viewBox: "0 0 24 24", children: r("path", { d: a2.path }) }) });
})({ boxSize: "1.2em" }), W = Object.assign(Z, { displayName: "Icon" }), E = t({ from: { opacity: 0 }, to: { opacity: 1 }, duration: n.duration.md1, easing: n.easing.standard.accelerate }, { from: { opacity: 1 }, to: { opacity: 0 }, duration: n.duration.sm4, easing: n.easing.standard.decelerate }), G = a("div")({ py: 4, px: 12, rounded: "sm", shadow: "3", containerStyle: "sys.on-surface", pos: "relative", zIndex: 100 }), P = l({ title: _(), $default: _() }, (a2, e2) => {
  let { slots: o2 } = e2, t2 = d(false);
  return () => {
    let e3 = o2.default()[0];
    return r(s, { isOpen: t2.value, $content: r(G, { children: a2.title }), $transition: (a3) => {
      let { content: e4 } = a3;
      return r(E, { children: e4 });
    }, children: e3 ? c(e3, { onMouseover: () => t2.value = true, onMouseout: () => t2.value = false }) : null });
  };
}), K = Object.assign(P, { displayName: "Tooltip" }), q = a("div")({ py: 8, rounded: "sm", shadow: "2", minW: 120, containerStyle: "sys.surface-container", pos: "relative", zIndex: 100 }), J = a("div")({ "& + &": { borderTop: "1px solid", borderColor: "sys.outline-variant" }, py: 8, px: 16, textStyle: "sys.label-large", containerStyle: "sys.surface-container", _hover: { cursor: "pointer", bgColor: e("sys.on-surface", o(0.08)) } }), Q = l({ placement: _().optional(), $menu: _(), $default: _() }, (a2, e2) => {
  let { slots: o2 } = e2, t2 = d(false);
  return () => {
    var e3;
    let n2 = o2.default ? o2.default()[0] : void 0;
    return r(s, { isOpen: t2.value, placement: a2.placement, onClickOutside: () => t2.value = false, $content: r(R, { children: null === (e3 = o2.menu) || void 0 === e3 ? void 0 : e3.call(o2) }), children: n2 ? c(n2, { onClick: () => t2.value = true }) : null });
  };
}), R = Object.assign(q, { displayName: "MenuContainer" }), U = Object.assign(J, { displayName: "ListItem" }), X = Object.assign(Q, { displayName: "Menu" }), Y = a("div")({ pos: "absolute", top: 0, left: 0, h: "100vh", w: "100vw", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center" }), aa = a("div")({ cursor: "pointer", pos: "absolute", top: 0, left: 0, h: "100vh", w: "100vw", zIndex: -1, bgColor: e("sys.scrim", o(0.38)) }), ae = a("div")({ py: 12, rounded: "sm", shadow: "3", minW: "50vw", containerStyle: "sys.surface-container-high" }), ao = t({ from: { opacity: 0 }, to: { opacity: 1 }, duration: n.duration.md1, easing: n.easing.standard.accelerate }, { from: { opacity: 1 }, to: { opacity: 0 }, duration: n.duration.sm4, easing: n.easing.standard.accelerate }), at = l({ isOpen: i.propTypes.isOpen, onClose: _(), $default: _().optional() }, (a2, e2) => {
  var o2;
  let { slots: t2, emit: n2 } = e2, s2 = d(null !== (o2 = a2.isOpen) && void 0 !== o2 && o2), l2 = d(false);
  return p(() => a2.isOpen, (a3) => {
    true === a3 ? s2.value = true : false === a3 && (l2.value = false);
  }), () => {
    var a3;
    return r(i, { isOpen: s2.value, onContentBeforeMount: () => l2.value = true, onEscKeydown: () => l2.value = false, children: u(Y, { children: [r(ao, { onComplete: (a4) => {
      "leave" == a4 && (s2.value = false, n2("close"));
    }, children: l2.value ? r(an, { onClick: () => l2.value = false }) : null }), r(y, { children: null === (a3 = t2.default) || void 0 === a3 ? void 0 : a3.call(t2) })] }) });
  };
}), an = Object.assign(aa, { displayName: "DialogBackdrop" }), as = Object.assign(ae, { displayName: "DialogContainer" }), ai = Object.assign(at, { displayName: "Dialog" }), ar = a("label", { valued: b().optional(), focus: b().optional(), invalid: b().optional(), disabled: b().optional(), $label: _().optional(), $supporting: _().optional(), $leading: _().optional(), $trailing: _().optional(), $default: _() }, (a2, e2) => {
  let { slots: o2 } = e2;
  return (e3) => {
    var t2, n2, s2, i2;
    let l2 = a2.valued, d2 = a2.invalid, p2 = a2.disabled, y2 = (null !== (i2 = null === (t2 = o2.default) || void 0 === t2 ? void 0 : t2.call(o2)) && void 0 !== i2 ? i2 : []).map((a3) => "input" === a3.type ? (l2 = !!v(a3.props, ["value"], v(a3.props, ["placeholder"], l2)), p2 = v(a3.props, ["disabled"], p2), c(a3, { disabled: p2 })) : c(a3));
    return u(e3, { "data-valued": l2, "data-invalid": d2, "data-disabled": p2, "data-focus-within": a2.focus, "data-has-leading": !!o2.leading, "data-has-trailing": !!o2.trailing, children: [u("div", { "data-input-container": "", children: [o2.leading && r(al, { role: "leading", children: o2.leading() }), r("div", { "data-input-label": "", children: null === (n2 = o2.label) || void 0 === n2 ? void 0 : n2.call(o2) }), y2, o2.trailing && r(al, { role: "trailing", children: o2.trailing() })] }), o2.supporting && r("div", { "data-input-supporting": "", children: null === (s2 = o2.supporting) || void 0 === s2 ? void 0 : s2.call(o2) })] });
  };
})({ display: "block", pos: "relative", textStyle: "sys.body-large", $data_input_container: { pos: "relative" }, $data_input: { outline: "none", flex: 1, w: "100%", m: 0, px: 16, py: 4, minHeight: 56, bg: "none", border: "none", cursor: "text", "&[readonly]": { cursor: "pointer" }, bgColor: "sys.surface-container-highest", color: "sys.on-surface", roundedTop: "xs", borderBottom: "1px solid", borderColor: "sys.outline-variant", textStyle: "sys.body-large", transitionDuration: "sm1", transitionTimingFunction: "standard" }, $data_input_label: { pos: "absolute", top: 4, bottom: 4, left: 16, color: "sys.on-surface-variant", display: "flex", alignItems: "center", transitionDuration: "sm2", transitionTimingFunction: "standard-accelerate" }, $data_input_supporting: { textStyle: "sys.body-small", px: 16, pt: 4, display: "flex", gap: 16, color: "sys.on-surface-variant" }, _has_leading: { $data_input: { pl: 36 }, $data_input_label: { left: 36 } }, _has_trailing: { $data_input: { pr: 32 } }, _valued: { $data_input: { pt: 18 }, $data_input_label: { top: 8, bottom: "auto", textStyle: "sys.body-small" } }, _focusWithin: { $data_input: { pt: 18, borderBottom: "2px solid", borderColor: "sys.primary" }, $data_input_label: { top: 8, bottom: "auto", textStyle: "sys.body-small", color: "sys.primary" } }, _invalid: { $data_input: { borderBottom: "2px solid", borderColor: "sys.error" }, $data_input_label: { color: "sys.error" }, $data_input_supporting: { color: "sys.error" } }, _disabled: { opacity: 0.38, cursor: "not-allowed" } }), al = a("div", { role: g(["leading", "trailing"]) })({ pos: "absolute", top: 4, bottom: 4, display: "flex", alignItems: "center", color: "sys.on-surface-variant", _role__leading: { left: 12, $data_icon: { ml: -4 } }, _role__trailing: { right: 12, $data_icon: { mr: -4 } } }), ad = Object.assign(ar, { displayName: "TextField" });
export {
  ai as D,
  x as E,
  L as F,
  S as I,
  U as L,
  X as M,
  j as O,
  K as T,
  W as a,
  z as b,
  A as c,
  V as d,
  T as e,
  ad as f,
  I as g,
  D as h,
  as as i,
  N as j,
  F as k,
  M as l,
  k as m
};
