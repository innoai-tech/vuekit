import { s as e, v as o, b as a, d as t, t as r, P as s, O as n } from "./lib-nodepkg-vueuikit.BLluTNcy.chunk.js";
import { j as i, f as l, g as d, b as p, w as c, d as u } from "./lib-nodepkg-vuekit.CWaOoEye.chunk.js";
import { g as y } from "./vendor-innoai-tech-lodash.ds7rw71w.chunk.js";
let b = e("button", { displayName: "ButtonBase", props: ["hover", "focus", "active", "disabled"] })({ textStyle: "sys.label-large", display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none", outline: "none", overflow: "hidden", border: 0, margin: 0, userSelect: "none", cursor: "pointer", _disabled: { cursor: "not-allowed" }, gap: 8, h: 40, px: 24, rounded: 20, transitionDuration: "md4", transitionTimingFunction: "standard-accelerate", bg: "none", pos: "relative", zIndex: 1, _$before: { content: '""', pos: "absolute", top: 0, right: 0, left: 0, bottom: 0, zIndex: -1, transitionDuration: "md1", transitionTimingFunction: "standard-accelerate" }, $data_icon: { boxSize: 18, _data_placement__start: { ml: -8 }, _data_placement__end: { mr: -8 } } }), m = e(b, { displayName: "FilledButton" })({ containerStyle: "sys.primary", shadow: "1", _hover: { shadow: "2", _$before: { bgColor: o("white", a(0.08)) } }, _focus: { shadow: "2", _$before: { bgColor: o("white", a(0.12)) } }, _active: { shadow: "2", _$before: { bgColor: o("white", a(0.12)) } }, _disabled: { shadow: "0", color: o("sys.on-surface", a(0.38)), bgColor: "rgba(0,0,0,0)", _$before: { bgColor: o("sys.on-surface", a(0.12)) } } }), _ = e(b, { displayName: "ElevatedButton" })({ color: "sys.primary", shadow: "1", _$before: { bgColor: "sys.surface-container-low" }, _hover: { shadow: "2", _$before: { bgColor: o("sys.primary", a(0.08)) } }, _focus: { shadow: "2", _$before: { bgColor: o("sys.primary", a(0.12)) } }, _active: { shadow: "2", _$before: { bgColor: o("sys.primary", a(0.12)) } }, _disabled: { shadow: "0", color: o("sys.on-surface", a(0.38)), _$before: { bgColor: o("sys.on-surface", a(0.12)) } } }), g = e(b, { displayName: "TextButton" })({ extends: [{ px: 16, $data_icon: { _data_placement__start: { ml: -4 }, _data_placement__end: { mr: -4 } } }], color: "sys.primary", _$before: { bgColor: "rgba(0,0,0,0)" }, _hover: { _$before: { bgColor: o("sys.primary", a(0.08)) } }, _focus: { _$before: { bgColor: o("sys.primary", a(0.12)) } }, _active: { _$before: { bgColor: o("sys.primary", a(0.12)) } }, _disabled: { color: o("sys.on-surface", a(0.38)), bgColor: "rgba(0,0,0,0)", _$before: { bgColor: "rgba(0,0,0,0)" } } }), f = e(b, { displayName: "TonalButton" })({ containerStyle: "sys.secondary-container", color: "sys.primary", shadow: "0", _hover: { shadow: "1", _$before: { bgColor: o("sys.on-secondary-container", a(0.08)) } }, _focus: { _$before: { bgColor: o("sys.on-secondary-container", a(0.12)) } }, _active: { _$before: { bgColor: o("sys.on-secondary-container", a(0.12)) } }, _disabled: { color: o("sys.on-surface", a(0.38)), bgColor: "rgba(0,0,0,0)", shadow: "0", _$before: { bgColor: o("sys.on-surface", a(0.12)) } } }), h = e(b, { displayName: "OutlinedButton" })({ extends: [{ border: "1px solid" }], color: "sys.primary", bgColor: "rgba(0,0,0,0)", borderColor: "sys.outline", _hover: { bgColor: o("sys.primary", a(0.08)) }, _active: { bgColor: o("sys.primary", a(0.12)) }, _focus: { bgColor: o("sys.primary", a(0.12)) }, _disabled: { color: o("sys.on-surface", a(0.38)), bgColor: "rgba(0,0,0,0)", borderColor: o("sys.on-surface", a(0.12)) } }), v = e(g, { displayName: "IconButton" })({ boxSize: 40, p: 0 }), C = e("span", (e2, o2) => (o3) => {
  let a2 = e2.size ?? 24;
  return i(o3, { "data-icon": true, "data-placement": e2.placement, "data-has-size": !!e2.size, children: i("svg", { viewBox: "0 0 24 24", width: a2, height: a2, children: i("path", { d: e2.path }) }) });
}, { displayName: "Icon", props: ["path", "size", "placement"] })({ display: "inline-block", _data_has_size__false: { boxSize: "1.2em", "& svg": { w: "100%", h: "100%" } } }), x = t({ from: { opacity: 0 }, to: { opacity: 1 }, duration: r.duration.md1, easing: r.easing.standard.accelerate }, { from: { opacity: 1 }, to: { opacity: 0 }, duration: r.duration.sm4, easing: r.easing.standard.decelerate }), $ = e("div", { displayName: "TooltipContainer" })({ py: 4, px: 12, rounded: "sm", shadow: "3", containerStyle: "sys.on-surface", pos: "relative", zIndex: 100 }), w = l((e2, o2) => {
  let { slots: a2 } = o2, t2 = d(false);
  return () => {
    let o3 = a2.default()[0];
    return i(s, { isOpen: t2.value, $content: i($, { children: e2.title }), $transition: (e3) => {
      let { content: o4 } = e3;
      return i(x, { children: o4 });
    }, children: o3 ? p(o3, { onMouseover: () => {
      t2.value = true;
    }, onMouseout: () => {
      t2.value = false;
    } }) : null });
  };
}, { displayName: "Tooltip", props: ["title"] }), B = e("div", { displayName: "MenuContainer" })({ py: 8, rounded: "sm", shadow: "2", minW: 120, containerStyle: "sys.surface-container", pos: "relative", zIndex: 100 }), N = e("div", { displayName: "ListItem" })({ "& + &": { borderTop: "1px solid", borderColor: "sys.outline-variant" }, py: 8, px: 16, textStyle: "sys.label-large", containerStyle: "sys.surface-container", _hover: { cursor: "pointer", bgColor: o("sys.on-surface", a(0.08)) } }), I = l((e2, o2) => {
  let { slots: a2 } = o2, t2 = d(false);
  return () => {
    var _a;
    let o3 = a2.default ? a2.default()[0] : void 0;
    return i(s, { isOpen: t2.value, placement: e2.placement, onClickOutside: () => {
      t2.value = false;
    }, $content: i(B, { children: (_a = a2.menu) == null ? void 0 : _a.call(a2) }), children: o3 ? p(o3, { onClick: () => {
      t2.value = true;
    } }) : null });
  };
}, { displayName: "Menu", props: ["placement"] }), S = e("div", { displayName: "Container" })({ pos: "absolute", top: 0, left: 0, h: "100vh", w: "100vw", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center" }), T = e("div", { displayName: "DialogBackdrop" })({ cursor: "pointer", pos: "absolute", top: 0, left: 0, h: "100vh", w: "100vw", zIndex: -1, bgColor: o("sys.scrim", a(0.38)) }), k = e("div", { displayName: "DialogContainer" })({ py: 12, rounded: "sm", shadow: "3", minW: "50vw", containerStyle: "sys.surface-container-high" }), z = t({ from: { opacity: 0 }, to: { opacity: 1 }, duration: r.duration.md1, easing: r.easing.standard.accelerate }, { from: { opacity: 1 }, to: { opacity: 0 }, duration: r.duration.sm4, easing: r.easing.standard.accelerate }), D = l((e2, o2) => {
  let { slots: a2, emit: t2 } = o2, r2 = d(e2.isOpen ?? false), s2 = d(false);
  return c(() => e2.isOpen, (e3) => {
    true === e3 ? r2.value = true : false === e3 && (s2.value = false);
  }), () => {
    var _a;
    return i(n, { isOpen: r2.value, onContentBeforeMount: () => {
      s2.value = true;
    }, onEscKeydown: () => {
      s2.value = false;
    }, children: u(S, { children: [i(z, { onComplete: (e3) => {
      "leave" === e3 && (r2.value = false, t2("close"));
    }, children: s2.value ? i(T, { onClick: () => {
      s2.value = false;
    } }) : null }), (_a = a2.default) == null ? void 0 : _a.call(a2)] }) });
  };
}, { displayName: "Dialog", props: ["isOpen"], emits: ["close"] }), O = e("label", (e2, o2) => {
  let { slots: a2 } = o2;
  return (o3) => {
    var _a, _b, _c;
    let t2 = e2.valued, r2 = e2.invalid, s2 = e2.disabled, n2 = (((_a = a2.default) == null ? void 0 : _a.call(a2)) ?? []).map((e3) => "input" === e3.type ? (t2 = !!y(e3.props, ["value"], y(e3.props, ["placeholder"], t2)), s2 = y(e3.props, ["disabled"], s2), p(e3, { disabled: s2 })) : p(e3));
    return u(o3, { "data-valued": t2, "data-invalid": r2, "data-disabled": s2, "data-focus-within": e2.focus, "data-has-leading": !!a2.leading, "data-has-trailing": !!a2.trailing, children: [u("div", { "data-input-container": "", children: [a2.leading && i(F, { role: "leading", children: a2.leading() }), i("div", { "data-input-label": "", children: (_b = a2.label) == null ? void 0 : _b.call(a2) }), n2, a2.trailing && i(F, { role: "trailing", children: a2.trailing() })] }), a2.supporting && i("div", { "data-input-supporting": "", children: (_c = a2.supporting) == null ? void 0 : _c.call(a2) })] });
  };
}, { displayName: "TextField", props: ["valued", "focus", "invalid", "disabled"] })({ display: "block", pos: "relative", textStyle: "sys.body-large", $data_input_container: { pos: "relative" }, $data_input: { outline: "none", flex: 1, w: "100%", m: 0, px: 16, py: 4, minHeight: 56, bg: "none", border: "none", cursor: "text", "&[readonly]": { cursor: "pointer" }, bgColor: "sys.surface-container-highest", color: "sys.on-surface", roundedTop: "xs", borderBottom: "1px solid", borderColor: "sys.outline-variant", textStyle: "sys.body-large", transitionDuration: "sm1", transitionTimingFunction: "standard" }, $data_input_label: { pos: "absolute", top: 4, bottom: 4, left: 16, color: "sys.on-surface-variant", display: "flex", alignItems: "center", transitionDuration: "sm2", transitionTimingFunction: "standard-accelerate" }, $data_input_supporting: { textStyle: "sys.body-small", px: 16, pt: 4, display: "flex", gap: 16, color: "sys.on-surface-variant" }, _has_leading: { $data_input: { pl: 36 }, $data_input_label: { left: 36 } }, _has_trailing: { $data_input: { pr: 32 } }, _valued: { $data_input: { pt: 18 }, $data_input_label: { top: 8, bottom: "auto", textStyle: "sys.body-small" } }, _focusWithin: { $data_input: { pt: 18, borderBottom: "2px solid", borderColor: "sys.primary" }, $data_input_label: { top: 8, bottom: "auto", textStyle: "sys.body-small", color: "sys.primary" } }, _invalid: { $data_input: { borderBottom: "2px solid", borderColor: "sys.error" }, $data_input_label: { color: "sys.error" }, $data_input_supporting: { color: "sys.error" } }, _disabled: { opacity: 0.38, cursor: "not-allowed" } }), F = e("div", { displayName: "Maker", props: ["role"] })({ pos: "absolute", top: 4, bottom: 4, display: "flex", alignItems: "center", color: "sys.on-surface-variant", _role__leading: { left: 12, $data_icon: { ml: -4 } }, _role__trailing: { right: 12, $data_icon: { mr: -4 } } });
export {
  D,
  _ as E,
  m as F,
  v as I,
  N as L,
  I as M,
  h as O,
  w as T,
  C as a,
  g as b,
  k as c,
  f as d,
  O as e
};
