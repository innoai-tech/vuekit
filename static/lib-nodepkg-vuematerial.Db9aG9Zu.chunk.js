import { s as e, v as o, b as a, d as t, t as r, P as n, O as s } from "./lib-nodepkg-vueuikit.BW1khRTk.chunk.js";
import { j as i, f as l, g as d, b as c, w as u, d as p } from "./lib-nodepkg-vuekit.CHzlo9N-.chunk.js";
import "./lib-nodepkg-typedef.BFByxoLV.chunk.js";
import { g as y } from "./vendor-innoai-tech-lodash.DPqHE-zk.chunk.js";
let b = e("button")({ textStyle: "sys.label-large", display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none", outline: "none", overflow: "hidden", border: 0, margin: 0, userSelect: "none", cursor: "pointer", _disabled: { cursor: "not-allowed" }, gap: 8, h: 40, px: 24, rounded: 20, transitionDuration: "md4", transitionTimingFunction: "standard-accelerate", bg: "none", pos: "relative", zIndex: 1, _$before: { content: '""', pos: "absolute", top: 0, right: 0, left: 0, bottom: 0, zIndex: -1, transitionDuration: "md1", transitionTimingFunction: "standard-accelerate" }, $data_icon: { boxSize: 18, _data_placement__start: { ml: -8 }, _data_placement__end: { mr: -8 } } }), _ = e(b)({ containerStyle: "sys.primary", shadow: "1", _hover: { shadow: "2", _$before: { bgColor: o("white", a(0.08)) } }, _focus: { shadow: "2", _$before: { bgColor: o("white", a(0.12)) } }, _active: { shadow: "2", _$before: { bgColor: o("white", a(0.12)) } }, _disabled: { shadow: "0", color: o("sys.on-surface", a(0.38)), bgColor: "rgba(0,0,0,0)", _$before: { bgColor: o("sys.on-surface", a(0.12)) } } }), g = e(b)({ color: "sys.primary", shadow: "1", _$before: { bgColor: "sys.surface-container-low" }, _hover: { shadow: "2", _$before: { bgColor: o("sys.primary", a(0.08)) } }, _focus: { shadow: "2", _$before: { bgColor: o("sys.primary", a(0.12)) } }, _active: { shadow: "2", _$before: { bgColor: o("sys.primary", a(0.12)) } }, _disabled: { shadow: "0", color: o("sys.on-surface", a(0.38)), _$before: { bgColor: o("sys.on-surface", a(0.12)) } } }), m = e(b)({ extends: [{ px: 16, $data_icon: { _data_placement__start: { ml: -4 }, _data_placement__end: { mr: -4 } } }], color: "sys.primary", _$before: { bgColor: "rgba(0,0,0,0)" }, _hover: { _$before: { bgColor: o("sys.primary", a(0.08)) } }, _focus: { _$before: { bgColor: o("sys.primary", a(0.12)) } }, _active: { _$before: { bgColor: o("sys.primary", a(0.12)) } }, _disabled: { color: o("sys.on-surface", a(0.38)), bgColor: "rgba(0,0,0,0)", _$before: { bgColor: "rgba(0,0,0,0)" } } }), f = e(b)({ containerStyle: "sys.secondary-container", color: "sys.primary", shadow: "0", _hover: { shadow: "1", _$before: { bgColor: o("sys.on-secondary-container", a(0.08)) } }, _focus: { _$before: { bgColor: o("sys.on-secondary-container", a(0.12)) } }, _active: { _$before: { bgColor: o("sys.on-secondary-container", a(0.12)) } }, _disabled: { color: o("sys.on-surface", a(0.38)), bgColor: "rgba(0,0,0,0)", shadow: "0", _$before: { bgColor: o("sys.on-surface", a(0.12)) } } }), h = e(b)({ extends: [{ border: "1px solid" }], color: "sys.primary", bgColor: "rgba(0,0,0,0)", borderColor: "sys.outline", _hover: { bgColor: o("sys.primary", a(0.08)) }, _active: { bgColor: o("sys.primary", a(0.12)) }, _focus: { bgColor: o("sys.primary", a(0.12)) }, _disabled: { color: o("sys.on-surface", a(0.38)), bgColor: "rgba(0,0,0,0)", borderColor: o("sys.on-surface", a(0.12)) } }), v = e(m)({ boxSize: 40, p: 0 }), C = e("span", (e2, o2) => (o3) => {
  let a2 = e2.size ?? 24;
  return i(o3, { "data-icon": true, "data-placement": e2.placement, "data-has-size": !!e2.size, children: i("svg", { viewBox: "0 0 24 24", width: a2, height: a2, children: i("path", { d: e2.path }) }) });
})({ display: "inline-block", _data_has_size__false: { boxSize: "1.2em", "& svg": { w: "100%", h: "100%" } } }), x = t({ from: { opacity: 0 }, to: { opacity: 1 }, duration: r.duration.md1, easing: r.easing.standard.accelerate }, { from: { opacity: 1 }, to: { opacity: 0 }, duration: r.duration.sm4, easing: r.easing.standard.decelerate }), $ = e("div")({ py: 4, px: 12, rounded: "sm", shadow: "3", containerStyle: "sys.on-surface", pos: "relative", zIndex: 100 }), w = l((e2, o2) => {
  let { slots: a2 } = o2, t2 = d(false);
  return () => {
    let o3 = a2.default()[0];
    return i(n, { isOpen: t2.value, $content: i($, { children: e2.title }), $transition: (e3) => {
      let { content: o4 } = e3;
      return i(x, { children: o4 });
    }, children: o3 ? c(o3, { onMouseover: () => {
      t2.value = true;
    }, onMouseout: () => {
      t2.value = false;
    } }) : null });
  };
}), S = e("div")({ py: 8, rounded: "sm", shadow: "2", minW: 120, containerStyle: "sys.surface-container", pos: "relative", zIndex: 100 }), k = e("div")({ "& + &": { borderTop: "1px solid", borderColor: "sys.outline-variant" }, py: 8, px: 16, textStyle: "sys.label-large", containerStyle: "sys.surface-container", _hover: { cursor: "pointer", bgColor: o("sys.on-surface", a(0.08)) } }), I = l((e2, o2) => {
  let { slots: a2 } = o2, t2 = d(false);
  return () => {
    var _a;
    let o3 = a2.default ? a2.default()[0] : void 0;
    return i(n, { isOpen: t2.value, placement: e2.placement, onClickOutside: () => {
      t2.value = false;
    }, $content: i(S, { children: (_a = a2.menu) == null ? void 0 : _a.call(a2) }), children: o3 ? c(o3, { onClick: () => {
      t2.value = true;
    } }) : null });
  };
}), z = e("div")({ pos: "absolute", top: 0, left: 0, h: "100vh", w: "100vw", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center" }), B = e("div")({ cursor: "pointer", pos: "absolute", top: 0, left: 0, h: "100vh", w: "100vw", zIndex: -1, bgColor: o("sys.scrim", a(0.38)) }), T = e("div")({ py: 12, rounded: "sm", shadow: "3", minW: "50vw", containerStyle: "sys.surface-container-high" }), O = t({ from: { opacity: 0 }, to: { opacity: 1 }, duration: r.duration.md1, easing: r.easing.standard.accelerate }, { from: { opacity: 1 }, to: { opacity: 0 }, duration: r.duration.sm4, easing: r.easing.standard.accelerate }), D = l((e2, o2) => {
  let { slots: a2, emit: t2 } = o2, r2 = d(e2.isOpen ?? false), n2 = d(false);
  return u(() => e2.isOpen, (e3) => {
    true === e3 ? r2.value = true : false === e3 && (n2.value = false);
  }), () => {
    var _a;
    return i(s, { isOpen: r2.value, onContentBeforeMount: () => {
      n2.value = true;
    }, onEscKeydown: () => {
      n2.value = false;
    }, children: p(z, { children: [i(O, { onComplete: (e3) => {
      "leave" === e3 && (r2.value = false, t2("close"));
    }, children: n2.value ? i(B, { onClick: () => {
      n2.value = false;
    } }) : null }), (_a = a2.default) == null ? void 0 : _a.call(a2)] }) });
  };
}), j = e("label", (e2, o2) => {
  let { slots: a2 } = o2;
  return (o3) => {
    var _a, _b, _c;
    let t2 = e2.valued, r2 = e2.invalid, n2 = e2.disabled, s2 = (((_a = a2.default) == null ? void 0 : _a.call(a2)) ?? []).map((e3) => "input" === e3.type ? (t2 = !!y(e3.props, ["value"], y(e3.props, ["placeholder"], t2)), n2 = y(e3.props, ["disabled"], n2), c(e3, { disabled: n2 })) : c(e3));
    return p(o3, { "data-valued": t2, "data-invalid": r2, "data-disabled": n2, "data-focus-within": e2.focus, "data-has-leading": !!a2.leading, "data-has-trailing": !!a2.trailing, children: [p("div", { "data-input-container": "", children: [a2.leading && i(F, { role: "leading", children: a2.leading() }), i("div", { "data-input-label": "", children: (_b = a2.label) == null ? void 0 : _b.call(a2) }), s2, a2.trailing && i(F, { role: "trailing", children: a2.trailing() })] }), a2.supporting && i("div", { "data-input-supporting": "", children: (_c = a2.supporting) == null ? void 0 : _c.call(a2) })] });
  };
})({ display: "block", pos: "relative", textStyle: "sys.body-large", $data_input_container: { pos: "relative" }, $data_input: { outline: "none", flex: 1, w: "100%", m: 0, px: 16, py: 4, minHeight: 56, bg: "none", border: "none", cursor: "text", "&[readonly]": { cursor: "pointer" }, bgColor: "sys.surface-container-highest", color: "sys.on-surface", roundedTop: "xs", borderBottom: "1px solid", borderColor: "sys.outline-variant", textStyle: "sys.body-large", transitionDuration: "sm1", transitionTimingFunction: "standard" }, $data_input_label: { pos: "absolute", top: 4, bottom: 4, left: 16, color: "sys.on-surface-variant", display: "flex", alignItems: "center", transitionDuration: "sm2", transitionTimingFunction: "standard-accelerate" }, $data_input_supporting: { textStyle: "sys.body-small", px: 16, pt: 4, display: "flex", gap: 16, color: "sys.on-surface-variant" }, _has_leading: { $data_input: { pl: 36 }, $data_input_label: { left: 36 } }, _has_trailing: { $data_input: { pr: 32 } }, _valued: { $data_input: { pt: 18 }, $data_input_label: { top: 8, bottom: "auto", textStyle: "sys.body-small" } }, _focusWithin: { $data_input: { pt: 18, borderBottom: "2px solid", borderColor: "sys.primary" }, $data_input_label: { top: 8, bottom: "auto", textStyle: "sys.body-small", color: "sys.primary" } }, _invalid: { $data_input: { borderBottom: "2px solid", borderColor: "sys.error" }, $data_input_label: { color: "sys.error" }, $data_input_supporting: { color: "sys.error" } }, _disabled: { opacity: 0.38, cursor: "not-allowed" } }), F = e("div")({ pos: "absolute", top: 4, bottom: 4, display: "flex", alignItems: "center", color: "sys.on-surface-variant", _role__leading: { left: 12, $data_icon: { ml: -4 } }, _role__trailing: { right: 12, $data_icon: { mr: -4 } } });
export {
  D,
  g as E,
  _ as F,
  v as I,
  k as L,
  I as M,
  h as O,
  w as T,
  C as a,
  m as b,
  T as c,
  f as d,
  j as e
};
