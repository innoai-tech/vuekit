import { s as a, v as e, a as o, d as t, t as n, P as s, O as r } from "./lib--nodepkg-vueuikit.C6JhOhKI.chunk.js";
import { e as i, f as l, s as d, c, g as p } from "./lib--nodepkg-typedef.DdnEDJY6.chunk.js";
import { c as u, r as y, a as b, w as g } from "./lib--nodepkg-vuekit.DLZfr_ED.chunk.js";
import { j as m, a as _ } from "./lib--nodepkg-vue-jsx-runtime.BKjV4fr1.chunk.js";
let v = Object.assign(a("button", { hover: i().optional(), focus: i().optional(), active: i().optional(), disabled: i().optional() })({ textStyle: "sys.label-large", display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none", outline: "none", overflow: "hidden", border: 0, margin: 0, userSelect: "none", cursor: "pointer", _disabled: { cursor: "not-allowed" }, gap: 8, h: 40, px: 24, rounded: 20, transitionDuration: "md4", transitionTimingFunction: "standard-accelerate", bg: "none", pos: "relative", zIndex: 1, _$before: { content: '""', pos: "absolute", top: 0, right: 0, left: 0, bottom: 0, zIndex: -1, transitionDuration: "md1", transitionTimingFunction: "standard-accelerate" }, $data_icon: { boxSize: 18, _data_placement__start: { ml: -8 }, _data_placement__end: { mr: -8 } } }), { displayName: "ButtonBase" }), f = Object.assign(a(v)({ containerStyle: "sys.primary", shadow: "1", _hover: { shadow: "2", _$before: { bgColor: e("white", o(0.08)) } }, _focus: { shadow: "2", _$before: { bgColor: e("white", o(0.12)) } }, _active: { shadow: "2", _$before: { bgColor: e("white", o(0.12)) } }, _disabled: { shadow: "0", color: e("sys.on-surface", o(0.38)), bgColor: "rgba(0,0,0,0)", _$before: { bgColor: e("sys.on-surface", o(0.12)) } } }), { displayName: "FilledButton" }), h = Object.assign(a(v)({ color: "sys.primary", shadow: "1", _$before: { bgColor: "sys.surface-container-low" }, _hover: { shadow: "2", _$before: { bgColor: e("sys.primary", o(0.08)) } }, _focus: { shadow: "2", _$before: { bgColor: e("sys.primary", o(0.12)) } }, _active: { shadow: "2", _$before: { bgColor: e("sys.primary", o(0.12)) } }, _disabled: { shadow: "0", color: e("sys.on-surface", o(0.38)), _$before: { bgColor: e("sys.on-surface", o(0.12)) } } }), { displayName: "ElevatedButton" }), $ = Object.assign(a(v)({ extends: [{ px: 16, $data_icon: { _data_placement__start: { ml: -4 }, _data_placement__end: { mr: -4 } } }], color: "sys.primary", _$before: { bgColor: "rgba(0,0,0,0)" }, _hover: { _$before: { bgColor: e("sys.primary", o(0.08)) } }, _focus: { _$before: { bgColor: e("sys.primary", o(0.12)) } }, _active: { _$before: { bgColor: e("sys.primary", o(0.12)) } }, _disabled: { color: e("sys.on-surface", o(0.38)), bgColor: "rgba(0,0,0,0)", _$before: { bgColor: "rgba(0,0,0,0)" } } }), { displayName: "TextButton" }), C = Object.assign(a(v)({ containerStyle: "sys.secondary-container", color: "sys.primary", shadow: "0", _hover: { shadow: "1", _$before: { bgColor: e("sys.on-secondary-container", o(0.08)) } }, _focus: { _$before: { bgColor: e("sys.on-secondary-container", o(0.12)) } }, _active: { _$before: { bgColor: e("sys.on-secondary-container", o(0.12)) } }, _disabled: { color: e("sys.on-surface", o(0.38)), bgColor: "rgba(0,0,0,0)", shadow: "0", _$before: { bgColor: e("sys.on-surface", o(0.12)) } } }), { displayName: "TonalButton" }), x = Object.assign(a(v)({ extends: [{ border: "1px solid" }], color: "sys.primary", bgColor: "rgba(0,0,0,0)", borderColor: "sys.outline", _hover: { bgColor: e("sys.primary", o(0.08)) }, _active: { bgColor: e("sys.primary", o(0.12)) }, _focus: { bgColor: e("sys.primary", o(0.12)) }, _disabled: { color: e("sys.on-surface", o(0.38)), bgColor: "rgba(0,0,0,0)", borderColor: e("sys.on-surface", o(0.12)) } }), { displayName: "OutlinedButton" }), w = Object.assign(a($, {})({ boxSize: 40, p: 0 }), { displayName: "IconButton" }), O = Object.assign(a("span", { placement: l(["start", "end"]).optional(), path: d() }, (a2, e2) => (e3) => m(e3, { "data-icon": true, "data-placement": a2.placement, children: m("svg", { viewBox: "0 0 24 24", children: m("path", { d: a2.path }) }) }))({ boxSize: "1.2em" }), { displayName: "Icon" }), j = t({ from: { opacity: 0 }, to: { opacity: 1 }, duration: n.duration.md1, easing: n.easing.standard.accelerate }, { from: { opacity: 1 }, to: { opacity: 0 }, duration: n.duration.sm4, easing: n.easing.standard.decelerate }), B = a("div")({ py: 4, px: 12, rounded: "sm", shadow: "3", containerStyle: "sys.on-surface", pos: "relative", zIndex: 100 }), I = Object.assign(u({ title: c(), $default: c() }, (a2, e2) => {
  let { slots: o2 } = e2, t2 = y(false);
  return () => {
    let e3 = o2.default()[0];
    return m(s, { isOpen: t2.value, $content: m(B, { children: a2.title }), $transition: (a3) => {
      let { content: e4 } = a3;
      return m(j, { children: e4 });
    }, children: e3 ? b(e3, { onMouseover: () => {
      t2.value = true;
    }, onMouseout: () => {
      t2.value = false;
    } }) : null });
  };
}), { displayName: "Tooltip" }), S = a("div")({ py: 8, rounded: "sm", shadow: "2", minW: 120, containerStyle: "sys.surface-container", pos: "relative", zIndex: 100 }), N = a("div")({ "& + &": { borderTop: "1px solid", borderColor: "sys.outline-variant" }, py: 8, px: 16, textStyle: "sys.label-large", containerStyle: "sys.surface-container", _hover: { cursor: "pointer", bgColor: e("sys.on-surface", o(0.08)) } }), T = u({ placement: c().optional(), $menu: c(), $default: c() }, (a2, e2) => {
  let { slots: o2 } = e2, t2 = y(false);
  return () => {
    var e3;
    let n2 = o2.default ? o2.default()[0] : void 0;
    return m(s, { isOpen: t2.value, placement: a2.placement, onClickOutside: () => {
      t2.value = false;
    }, $content: m(k, { children: null === (e3 = o2.menu) || void 0 === e3 ? void 0 : e3.call(o2) }), children: n2 ? b(n2, { onClick: () => {
      t2.value = true;
    } }) : null });
  };
}), k = Object.assign(S, { displayName: "MenuContainer" }), D = Object.assign(N, { displayName: "ListItem" }), z = Object.assign(T, { displayName: "Menu" }), F = a("div")({ pos: "absolute", top: 0, left: 0, h: "100vh", w: "100vw", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center" }), M = a("div")({ cursor: "pointer", pos: "absolute", top: 0, left: 0, h: "100vh", w: "100vw", zIndex: -1, bgColor: e("sys.scrim", o(0.38)) }), E = a("div")({ py: 12, rounded: "sm", shadow: "3", minW: "50vw", containerStyle: "sys.surface-container-high" }), L = t({ from: { opacity: 0 }, to: { opacity: 1 }, duration: n.duration.md1, easing: n.easing.standard.accelerate }, { from: { opacity: 1 }, to: { opacity: 0 }, duration: n.duration.sm4, easing: n.easing.standard.accelerate }), W = u({ isOpen: r.propTypes.isOpen, onClose: c(), $default: c().optional() }, (a2, e2) => {
  var o2;
  let { slots: t2, emit: n2 } = e2, s2 = y(null !== (o2 = a2.isOpen) && void 0 !== o2 && o2), i2 = y(false);
  return g(() => a2.isOpen, (a3) => {
    true === a3 ? s2.value = true : false === a3 && (i2.value = false);
  }), () => {
    var a3;
    return m(r, { isOpen: s2.value, onContentBeforeMount: () => {
      i2.value = true;
    }, onEscKeydown: () => {
      i2.value = false;
    }, children: _(F, { children: [m(L, { onComplete: (a4) => {
      "leave" === a4 && (s2.value = false, n2("close"));
    }, children: i2.value ? m(H, { onClick: () => {
      i2.value = false;
    } }) : null }), null === (a3 = t2.default) || void 0 === a3 ? void 0 : a3.call(t2)] }) });
  };
}), H = Object.assign(M, { displayName: "DialogBackdrop" }), K = Object.assign(E, { displayName: "DialogContainer" }), P = Object.assign(W, { displayName: "Dialog" }), q = a("label", { valued: i().optional(), focus: i().optional(), invalid: i().optional(), disabled: i().optional(), $label: c().optional(), $supporting: c().optional(), $leading: c().optional(), $trailing: c().optional(), $default: c() }, (a2, e2) => {
  let { slots: o2 } = e2;
  return (e3) => {
    var t2, n2, s2, r2;
    let i2 = a2.valued, l2 = a2.invalid, d2 = a2.disabled, c2 = (null !== (r2 = null === (t2 = o2.default) || void 0 === t2 ? void 0 : t2.call(o2)) && void 0 !== r2 ? r2 : []).map((a3) => "input" === a3.type ? (i2 = !!p(a3.props, ["value"], p(a3.props, ["placeholder"], i2)), d2 = p(a3.props, ["disabled"], d2), b(a3, { disabled: d2 })) : b(a3));
    return _(e3, { "data-valued": i2, "data-invalid": l2, "data-disabled": d2, "data-focus-within": a2.focus, "data-has-leading": !!o2.leading, "data-has-trailing": !!o2.trailing, children: [_("div", { "data-input-container": "", children: [o2.leading && m(A, { children: o2.leading() }), m("div", { "data-input-label": "", children: null === (n2 = o2.label) || void 0 === n2 ? void 0 : n2.call(o2) }), c2, o2.trailing && m(A, { children: o2.trailing() })] }), o2.supporting && m("div", { "data-input-supporting": "", children: null === (s2 = o2.supporting) || void 0 === s2 ? void 0 : s2.call(o2) })] });
  };
})({ display: "block", pos: "relative", textStyle: "sys.body-large", $data_input_container: { pos: "relative" }, $data_input: { outline: "none", flex: 1, w: "100%", m: 0, px: 16, py: 4, minHeight: 56, bg: "none", border: "none", cursor: "text", "&[readonly]": { cursor: "pointer" }, bgColor: "sys.surface-container-highest", color: "sys.on-surface", roundedTop: "xs", borderBottom: "1px solid", borderColor: "sys.outline-variant", textStyle: "sys.body-large", transitionDuration: "sm1", transitionTimingFunction: "standard" }, $data_input_label: { pos: "absolute", top: 4, bottom: 4, left: 16, color: "sys.on-surface-variant", display: "flex", alignItems: "center", transitionDuration: "sm2", transitionTimingFunction: "standard-accelerate" }, $data_input_supporting: { textStyle: "sys.body-small", px: 16, pt: 4, display: "flex", gap: 16, color: "sys.on-surface-variant" }, _has_leading: { $data_input: { pl: 36 }, $data_input_label: { left: 36 } }, _has_trailing: { $data_input: { pr: 32 } }, _valued: { $data_input: { pt: 18 }, $data_input_label: { top: 8, bottom: "auto", textStyle: "sys.body-small" } }, _focusWithin: { $data_input: { pt: 18, borderBottom: "2px solid", borderColor: "sys.primary" }, $data_input_label: { top: 8, bottom: "auto", textStyle: "sys.body-small", color: "sys.primary" } }, _invalid: { $data_input: { borderBottom: "2px solid", borderColor: "sys.error" }, $data_input_label: { color: "sys.error" }, $data_input_supporting: { color: "sys.error" } }, _disabled: { opacity: 0.38, cursor: "not-allowed" } }), A = a("div", { role: l(["leading", "trailing"]).optional().default("leading") })({ pos: "absolute", top: 4, bottom: 4, display: "flex", alignItems: "center", color: "sys.on-surface-variant", _role__leading: { left: 12, $data_icon: { ml: -4 } }, _role__trailing: { right: 12, $data_icon: { mr: -4 } } }), G = Object.assign(q, { displayName: "TextField" });
export {
  P as D,
  h as E,
  f as F,
  O as I,
  D as L,
  z as M,
  x as O,
  G as T,
  w as a,
  C as b,
  $ as c,
  K as d,
  I as e
};
