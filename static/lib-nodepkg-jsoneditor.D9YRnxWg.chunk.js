var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _e, _t, _n;
import { c as e, I as t, j as n, a as l, r as a, s as i, b as r, d as o, e as d, f as s, T as p, F as c, g as u, o as h, t as y, h as v } from "./lib-nodepkg-vuekit.CG6e198v.chunk.js";
import { o as m, J as f, S as x, a as b, r as g, s as w, E as N } from "./lib-nodepkg-typedef.BB0LFIQb.chunk.js";
import { s as C, v as $, a as k, P as S, b as O, B as E } from "./lib-nodepkg-vueuikit.5ZJpfML9.chunk.js";
import { I, a as T } from "./lib-nodepkg-vuematerial.ecIMID-Z.chunk.js";
import { m as A, a as D, b as R, c as J, d as L } from "./webapp-vuekit-layout.BzA6XKQH.chunk.js";
import { O as P, s as M, m as B, f as _, d as W, t as j, E as z, c as H, B as F, S as U } from "./vendor-rxjs.2rASjH9I.chunk.js";
import { i as V, g as K, a as X, b as q, s as G, l as Q, c as Y, d as Z, e as ee } from "./vendor-innoai-tech-lodash.BEztC5WG.chunk.js";
import { M as et } from "./lib-nodepkg-vuemarkdown.BLhed3E2.chunk.js";
const _en = class _en extends P {
  constructor(e3, t2) {
    super((e4) => {
      let t3 = /* @__PURE__ */ __privateGet(this, _e).subscribe(e4);
      return () => {
        t3.unsubscribe();
      };
    });
    __privateAdd(this, _e, new t({}));
    __privateAdd(this, _t, new t({}));
    this.typedef = e3, this.initials = t2, __privateGet(this, _e).next(t2);
  }
  static of(e3, t2) {
    return new _en(e3, null != t2 ? t2 : "array" == e3.type ? [] : {});
  }
  isDirty(e3, t2) {
    if (!V(e3)) {
      let n2 = /* @__PURE__ */ K(this.initials, t2);
      return X(n2) || n2 !== e3;
    }
    return false;
  }
  update(e3, t2, n2) {
    if (__privateGet(this, _t).next({}), 0 == e3.length) {
      __privateGet(this, _e).next(t2);
      return;
    }
    q(t2) ? __privateGet(this, _e).next((l2) => {
      let a2 = /* @__PURE__ */ K(l2, e3, n2);
      t2(a2), G(l2, e3, a2);
    }) : __privateGet(this, _e).next((n3) => {
      G(n3, e3, t2);
    });
  }
  delete(e3) {
    0 != e3.length && __privateGet(this, _e).next((t2) => {
      let n2 = /* @__PURE__ */ Q(e3);
      if (Y(n2)) {
        let l3 = /* @__PURE__ */ e3.slice(0, e3.length - 1), a3 = l3.length > 0 ? K(t2, l3) : t2;
        if (Z(a3)) {
          a3.splice(n2, 1);
          return;
        }
      }
      let l2 = /* @__PURE__ */ e3.slice(0, e3.length - 1), a2 = l2.length > 0 ? K(t2, l2) : t2;
      delete a2[n2];
    });
  }
  get error$() {
    return __privateGet(this, _t);
  }
  setError(e3, t2) {
    let n2 = /* @__PURE__ */ f.create(e3);
    __privateGet(this, _t).next((e4) => {
      null === t2 ? delete e4[n2] : e4[n2] = t2;
    });
  }
};
_e = new WeakMap();
_t = new WeakMap();
let en = _en;
let el = /* @__PURE__ */ e(() => new en(m(), {})), ea = /* @__PURE__ */ e(() => ({})), ei = /* @__PURE__ */ C("span", { displayName: "ActionToolbar" })({ px: 2, pos: "relative", display: "flex", alignItems: "center", gap: 8, visibility: "hidden" }), er = /* @__PURE__ */ C("span", (e3, t2) => {
  let {} = e3, { slots: l2 } = t2;
  return (e4) => {
    var t3;
    return /* @__PURE__ */ n(e4, { children: /* @__PURE__ */ n(ei, { "data-visible-on-hover": true, children: null === (t3 = l2.default) || void 0 === t3 ? void 0 : t3.call(l2) }) });
  };
}, { displayName: "Actions" })({ display: "flex" }), eo = /* @__PURE__ */ C(I, { displayName: "ActionBtn" })({ transition: "none", width: 24, height: 24, rounded: 12, [`& ${T}`]: { svg: { width: 18, height: 18 } } });
class ed extends t {
  static from(e3) {
    let t2 = new ed(false);
    return a(e3, /* @__PURE__ */ M((e4) => e4 ? B(/* @__PURE__ */ a(/* @__PURE__ */ _(e4, "focus"), /* @__PURE__ */ j(() => {
      t2.show();
    })), /* @__PURE__ */ a(/* @__PURE__ */ _(e4, "blur"), /* @__PURE__ */ W(200), /* @__PURE__ */ j(() => {
      t2.value && t2.hide();
    }))) : z), /* @__PURE__ */ i()), t2;
  }
  show() {
    this.next(true);
  }
  hide() {
    this.next(false);
  }
}
let es = /* @__PURE__ */ O({ apply(e3) {
  let { elements: t2, rects: n2 } = e3;
  Object.assign(t2.floating.style, { width: `${n2.reference.width}px` });
} }), ep = /* @__PURE__ */ l((e3, t2) => {
  var l2;
  let { emit: i2, slots: r2, render: o2 } = t2, d2 = null !== (l2 = e3.open$) && void 0 !== l2 ? l2 : new ed(false), s2 = (e4) => {
    let t3 = /* @__PURE__ */ [e4.target, .../* @__PURE__ */ e4.composedPath()].find((e5) => {
      var t4;
      return null == e5 ? void 0 : null === (t4 = e5.hasAttribute) || void 0 === t4 ? void 0 : t4.call(e5, "data-value");
    });
    if (t3) {
      let e5 = /* @__PURE__ */ t3.getAttribute("data-value");
      X(e5) || (i2("selected", e5), d2.hide());
    }
  };
  return a(d2, /* @__PURE__ */ o2((e4) => {
    var t3, l3, a2, i3;
    return /* @__PURE__ */ n(S, { isOpen: e4, onClickOutside: () => d2.hide(), onEscKeydown: () => d2.hide(), placement: "bottom-start", middleware: [es], $content: /* @__PURE__ */ n(ec, { onClick: s2, children: null === (t3 = r2.content) || void 0 === t3 ? void 0 : t3.call(r2) }), children: null !== (i3 = null === (a2 = r2.default) || void 0 === a2 ? void 0 : null === (l3 = /* @__PURE__ */ a2.call(r2)) || void 0 === l3 ? void 0 : l3[0]) && void 0 !== i3 ? i3 : null });
  }));
}, { displayName: "Menu", props: ["open$"], emits: ["selected"] });
l((e3, t2) => {
  var l2;
  let { slots: i2, render: r2 } = t2, o2 = null !== (l2 = e3.open$) && void 0 !== l2 ? l2 : new ed(false);
  return a(o2, /* @__PURE__ */ r2((e4) => {
    var t3, l3, a2, r3;
    return /* @__PURE__ */ n(S, { isOpen: e4, onClickOutside: () => o2.hide(), placement: "bottom-start", $content: /* @__PURE__ */ n(ec, { children: null === (t3 = i2.content) || void 0 === t3 ? void 0 : t3.call(i2) }), children: null !== (r3 = null === (a2 = i2.default) || void 0 === a2 ? void 0 : null === (l3 = /* @__PURE__ */ a2.call(i2)) || void 0 === l3 ? void 0 : l3[0]) && void 0 !== r3 ? r3 : null });
  }));
}, { displayName: "Popover", props: ["open$"] });
let ec = /* @__PURE__ */ C("div", { displayName: "PopoverContainer" })({ textStyle: "sys.body-small", pos: "relative", roundedBottom: "sm", containerStyle: "sys.surface-container-lowest", borderBottom: "1px solid", borderRight: "1px solid", borderLeft: "1px solid", borderColor: /* @__PURE__ */ $("sys.outline-variant", /* @__PURE__ */ k(0.38)) }), eu = /* @__PURE__ */ C("div", { displayName: "MenuItem" })({ px: 8, py: 2, gap: 8, display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "right", textStyle: "sys.body-small", cursor: "pointer", _hover: { containerStyle: "sys.surface-container" }, _focus: { containerStyle: "sys.surface-container", outline: 0 } }), eh = /* @__PURE__ */ l((e3, t2) => {
  let { slots: l2, render: i2 } = t2, o2 = new ed(false);
  return a(o2, /* @__PURE__ */ i2((t3) => {
    var a2, i3;
    let d2 = null === (a2 = l2.default) || void 0 === a2 ? void 0 : a2.call(l2)[0];
    return /* @__PURE__ */ n(S, { isOpen: t3, placement: null !== (i3 = e3.placement) && void 0 !== i3 ? i3 : "left", $content: /* @__PURE__ */ n(ev, { children: /* @__PURE__ */ n(ey, { children: /* @__PURE__ */ l2.title() }) }), children: d2 ? r(d2, { onMouseover: () => {
      o2.show();
    }, onMouseout: () => {
      o2.hide();
    } }) : null });
  }));
}, { displayName: "Tooltip", props: ["placement"] }), ey = /* @__PURE__ */ C("div", { displayName: "TooltipContainer" })({ py: 4, px: 12, rounded: "xs", shadow: "3", textStyle: "sys.body-small", containerStyle: "sys.on-surface", pos: "relative", zIndex: 100 }), ev = /* @__PURE__ */ C("div", { displayName: "TooltipWrapper" })({ px: 8 }), em = /* @__PURE__ */ C("span", { displayName: "Token" })({ textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 12, lineHeight: 24, wordBreak: "keep-all", whiteSpace: "nowrap", font: "code", opacity: 0.3 }), ef = /* @__PURE__ */ l((e3, t2) => {
  let { slots: l2 } = t2;
  return () => {
    var t3;
    return /* @__PURE__ */ s(eb, { "data-deprecated": e3.deprecated, "data-optional": e3.optional, "data-nullable": e3.nullable, children: [l2.leading && /* @__PURE__ */ n(ex, { "data-visible-on-hover": true, children: /* @__PURE__ */ l2.leading() }), null === (t3 = l2.default) || void 0 === t3 ? void 0 : t3.call(l2)] });
  };
}, { displayName: "PropName", props: ["deprecated", "optional", "nullable"] }), ex = /* @__PURE__ */ C(ei, { displayName: "PropLeading" })({ position: "absolute", ml: -28 }), eb = /* @__PURE__ */ C("div", { displayName: "PropNameView" })({ position: "relative", display: "flex", alignItems: "center", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", wordBreak: "keep-all", whiteSpace: "nowrap", border: "1px solid", borderColor: "rgba(0,0,0,0)", fontSize: 12, lineHeight: 24, _deprecated: { textDecoration: "line-through" }, _optional: { "&:after": { content: '"?"', color: "sys.secondary", opacity: 0.58 } } }), eg = /* @__PURE__ */ C("div", { displayName: "LineTitle" })({ position: "absolute", zIndex: 1, left: 0, opacity: 0.58, fontSize: 10, lineHeight: 10, top: 0, "& > *": { display: "flex", alignItems: "center", gap: 4, "&::before": { content: '"// "', font: "code" } } }), ew = /* @__PURE__ */ C("div", { displayName: "LineError" })({ display: "block", fontSize: 10, lineHeight: 14, color: "sys.error" }), eN = /* @__PURE__ */ C("div", { displayName: "LineContainer" })({ position: "relative", py: 4, _hover: { containerStyle: "sys.surface-container", "& [data-visible-on-hover]": { visibility: "visible" } }, "&:focus-within": { containerStyle: "sys.surface-container" }, _dirty: { bgColor: /* @__PURE__ */ $("sys.warning-container", /* @__PURE__ */ k(0.38)) }, _error: { bgColor: "sys.error-container" }, [`&:has(${er})`]: { [`& > ${ew}`]: { display: "none" }, _error: { bgColor: "inherit" } } }), eC = /* @__PURE__ */ e(() => ({ indent: 0, $container: /* @__PURE__ */ o(null) }), { name: "IntentContext" }), e$ = /* @__PURE__ */ d((e3, t2) => {
  let { slots: l2 } = t2, a2 = /* @__PURE__ */ eC.use(), i2 = /* @__PURE__ */ o(null), r2 = /* @__PURE__ */ o(null);
  return () => {
    var t3, o2, d2, u2, h2;
    return /* @__PURE__ */ s(c, { children: [/* @__PURE__ */ n(em, { children: e3.openToken }), null === (t3 = l2.leading) || void 0 === t3 ? void 0 : t3.call(l2), /* @__PURE__ */ s(p, { to: a2.$container.value, children: [/* @__PURE__ */ s(eO, { "data-indent": a2.indent, children: [/* @__PURE__ */ n(eS, { ref: i2 }), /* @__PURE__ */ n(eE, { ref: r2 }), r2.value && /* @__PURE__ */ n(eC, { value: { $container: r2, indent: 1 + (null !== (u2 = a2.indent) && void 0 !== u2 ? u2 : 0) }, children: null === (o2 = l2.trailing) || void 0 === o2 ? void 0 : o2.call(l2) })] }), /* @__PURE__ */ n(eI, { style: { paddingLeft: `${32 * a2.indent}px`, display: "flex" }, children: /* @__PURE__ */ n(em, { children: e3.closeToken }) })] }), i2.value && /* @__PURE__ */ n(eC, { value: { $container: i2, indent: 1 + (null !== (h2 = a2.indent) && void 0 !== h2 ? h2 : 0) }, children: null === (d2 = l2.default) || void 0 === d2 ? void 0 : d2.call(l2) })] });
  };
}, { displayName: "Block", props: ["openToken", "closeToken"] }), ek = /* @__PURE__ */ l((e3, t2) => {
  let { slots: l2, render: i2 } = t2, r2 = /* @__PURE__ */ eC.use(), o2 = /* @__PURE__ */ a(el.use().error$, /* @__PURE__ */ i2((t3) => {
    var a2;
    let i3 = /* @__PURE__ */ f.create(e3.path), o3 = !e3.viewOnly && !!t3[i3];
    return /* @__PURE__ */ s(eN, { "data-error": o3, "data-dirty": e3.dirty, style: { paddingLeft: `${32 * r2.indent}px` }, children: [(e3.title || e3.description) && /* @__PURE__ */ n(eg, { style: { paddingLeft: `${32 * r2.indent}px` }, children: e3.description ? /* @__PURE__ */ n(eh, { $title: /* @__PURE__ */ n(eT, { children: /* @__PURE__ */ n(et, { text: e3.description }) }), children: /* @__PURE__ */ s("div", { children: [e3.title, " ", /* @__PURE__ */ n(T, { path: A })] }) }) : /* @__PURE__ */ n("span", { children: e3.title }) }), /* @__PURE__ */ n(eI, { children: null === (a2 = l2.default) || void 0 === a2 ? void 0 : a2.call(l2) }), o3 && /* @__PURE__ */ n(ew, { children: `${t3[i3]}` })] });
  }));
  return () => /* @__PURE__ */ n(p, { to: r2.$container.value, children: o2 });
}, { displayName: "Line", props: ["path", "dirty", "viewOnly", "title", "description"] }), eS = /* @__PURE__ */ C("div", { displayName: "Lines" })({}), eO = /* @__PURE__ */ C("section", { displayName: "LineSection" })({}), eE = /* @__PURE__ */ C("div", { displayName: "LinesTrailing" })({}), eI = /* @__PURE__ */ C("div", { displayName: "LineRow" })({ display: "flex", alignItems: "start", pr: 10 }), eT = /* @__PURE__ */ C("span", { displayName: "Description" })({ display: "block", textStyle: "sys.body-small", "& p": { my: 1, wordBreak: "keep-all", whiteSpace: "nowrap", opacity: 0.7 }, "& code": { wordBreak: "keep-all", whiteSpace: "nowrap" } }), eA = /* @__PURE__ */ C("form", { displayName: "FormControls" })({ display: "flex", pos: "absolute", right: 0, bottom: 0, px: 8 });
C("div", { displayName: "FormContainer" })({ display: "flex", flexDirection: "column", pos: "relative", textarea: { minW: 400, outline: "none", border: "none", bg: "none", py: 8, px: 12 } }), C("div", { displayName: "FormContainerAsRow" })({ display: "flex", alignItems: "center", gap: 8, pos: "relative", px: 8, input: { outline: "none", border: "none", bg: "none", minWidth: "10vw", py: 8, px: 12 }, [`& ${eA}`]: { pos: "relative", px: 0 } });
var eD = function() {
  var e3 = /* @__PURE__ */ document.getSelection();
  if (!e3.rangeCount) return function() {
  };
  for (var t2 = document.activeElement, n2 = [], l2 = 0; l2 < e3.rangeCount; l2++) n2.push(/* @__PURE__ */ e3.getRangeAt(l2));
  switch (t2.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      t2.blur();
      break;
    default:
      t2 = null;
  }
  return e3.removeAllRanges(), function() {
    "Caret" === e3.type && e3.removeAllRanges(), e3.rangeCount || n2.forEach(function(t3) {
      e3.addRange(t3);
    }), t2 && t2.focus();
  };
}, eR = { "text/plain": "Text", "text/html": "Url", default: "Text" };
let eJ = /* @__PURE__ */ u(function(e3, t2) {
  var n2, l2, a2, i2, r2, o2, d2, s2, p2 = false;
  t2 || (t2 = {}), a2 = t2.debug || false;
  try {
    if (r2 = /* @__PURE__ */ eD(), o2 = /* @__PURE__ */ document.createRange(), d2 = /* @__PURE__ */ document.getSelection(), (s2 = /* @__PURE__ */ document.createElement("span")).textContent = e3, s2.ariaHidden = "true", s2.style.all = "unset", s2.style.position = "fixed", s2.style.top = 0, s2.style.clip = "rect(0, 0, 0, 0)", s2.style.whiteSpace = "pre", s2.style.webkitUserSelect = "text", s2.style.MozUserSelect = "text", s2.style.msUserSelect = "text", s2.style.userSelect = "text", s2.addEventListener("copy", function(n3) {
      if (n3.stopPropagation(), t2.format) {
        if (n3.preventDefault(), void 0 === n3.clipboardData) {
          a2 && console.warn("unable to use e.clipboardData"), a2 && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var l3 = eR[t2.format] || eR.default;
          window.clipboardData.setData(l3, e3);
        } else n3.clipboardData.clearData(), n3.clipboardData.setData(t2.format, e3);
      }
      t2.onCopy && (n3.preventDefault(), t2.onCopy(n3.clipboardData));
    }), document.body.appendChild(s2), o2.selectNodeContents(s2), d2.addRange(o2), !/* @__PURE__ */ document.execCommand("copy")) throw Error("copy command was unsuccessful");
    p2 = true;
  } catch (r3) {
    a2 && console.error("unable to copy using execCommand: ", r3), a2 && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(t2.format || "text", e3), t2.onCopy && t2.onCopy(window.clipboardData), p2 = true;
    } catch (r4) {
      a2 && console.error("unable to copy using clipboardData: ", r4), a2 && console.error("falling back to prompt"), n2 = "message" in t2 ? t2.message : "Copy to clipboard: #{key}, Enter", l2 = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C", i2 = n2.replace(/#{\s*key\s*}/g, l2), window.prompt(i2, e3);
    }
  } finally {
    d2 && ("function" == typeof d2.removeRange ? d2.removeRange(o2) : d2.removeAllRanges()), s2 && document.body.removeChild(s2), r2();
  }
  return p2;
}), eL = /* @__PURE__ */ l((e3, t2) => {
  let {} = t2;
  return () => /* @__PURE__ */ n(eh, { $title: "复制当前节点为 JSON 字符串", children: /* @__PURE__ */ n(eo, { type: "button", onClick: () => eJ(/* @__PURE__ */ JSON.stringify(e3.value, null, 2)), children: /* @__PURE__ */ n(T, { path: D }) }) });
}, { displayName: "CopyAsJSONIconBtn", props: ["value"] });
class eP extends F {
  static from(e3) {
    let t2 = new eP("");
    return a(e3, /* @__PURE__ */ M((e4) => e4 ? a(/* @__PURE__ */ _(e4, "input"), /* @__PURE__ */ j((e5) => {
      t2.next(/* @__PURE__ */ e5.target.value.trim());
    })) : z), /* @__PURE__ */ i()), t2;
  }
}
class eM extends U {
  static from(e3) {
    let t2 = new eM();
    return a(e3, /* @__PURE__ */ M((e4) => e4 ? B(/* @__PURE__ */ a(/* @__PURE__ */ _(e4, "keypress"), /* @__PURE__ */ j((e5) => {
      "Enter" !== e5.key || e5.shiftKey || (e5.preventDefault(), t2.next({ type: "COMMIT" }));
    })), /* @__PURE__ */ a(/* @__PURE__ */ _(e4, "keydown"), /* @__PURE__ */ j((e5) => {
      switch (e5.key) {
        case "Tab":
        case "ArrowDown":
          e5.target.getAttribute("data-options") && (e5.preventDefault(), t2.next({ type: "SELECT", direction: 1 }));
          break;
        case "ArrowUp":
          e5.target.getAttribute("data-options") && (e5.preventDefault(), t2.next({ type: "SELECT", direction: -1 }));
      }
    })), /* @__PURE__ */ a(/* @__PURE__ */ _(e4, "keyup"), /* @__PURE__ */ j((e5) => {
      "Escape" === e5.key && t2.next({ type: "CANCEL" });
    }))) : z), /* @__PURE__ */ i()), t2;
  }
}
class eB extends P {
  constructor() {
    super((e3) => {
      let t2 = /* @__PURE__ */ __privateGet(this, _n).subscribe(e3);
      return () => t2.unsubscribe();
    });
    __privateAdd(this, _n, new F(null));
  }
  static sync(e3, t2) {
    return a(/* @__PURE__ */ B(/* @__PURE__ */ a(e3, /* @__PURE__ */ j((e4) => {
      e4 && e4 == f.create(/* @__PURE__ */ t2.path()) && t2.editing$.show();
    })), /* @__PURE__ */ a(t2.editing$, /* @__PURE__ */ W(1), /* @__PURE__ */ j((n2) => {
      n2 || e3.disable(/* @__PURE__ */ t2.path());
    })), /* @__PURE__ */ a(/* @__PURE__ */ H([t2.value$, e3]), /* @__PURE__ */ W(1), /* @__PURE__ */ j((n2) => {
      let [l2, a2] = n2;
      X(l2) && !a2 && e3.enable(/* @__PURE__ */ t2.path());
    }))), /* @__PURE__ */ i());
  }
  enable(e3) {
    __privateGet(this, _n).value || __privateGet(this, _n).next(/* @__PURE__ */ f.create(e3));
  }
  disable(e3) {
    __privateGet(this, _n).value === f.create(e3) && __privateGet(this, _n).next(null);
  }
}
_n = new WeakMap();
let e_ = /* @__PURE__ */ e(() => new eB()), eW = /* @__PURE__ */ l((e3, l2) => {
  let r2, { render: o2 } = l2, d2 = /* @__PURE__ */ h(null), p2 = /* @__PURE__ */ h(null), c2 = /* @__PURE__ */ h(null), u2 = /* @__PURE__ */ eM.from(c2), v2 = /* @__PURE__ */ eP.from(c2), m2 = /* @__PURE__ */ e_.use(), f2 = /* @__PURE__ */ ed.from(c2), b2 = /* @__PURE__ */ el.use();
  eB.sync(m2, { editing$: f2, value$: e3.value$, path: () => e3.ctx.path });
  let g2 = () => {
    if ("enums" === e3.typedef.type) {
      var t2;
      let n2 = /* @__PURE__ */ (null !== (t2 = /* @__PURE__ */ x.schemaProp(e3.typedef, "enum")) && void 0 !== t2 ? t2 : []).indexOf(e3.value);
      if (n2 > -1) return n2;
    }
    return 0;
  }, w2 = new t({ index: /* @__PURE__ */ g2() }), N2 = () => {
    v2.next(""), f2.hide();
  }, C2 = () => {
    N2(), w2.next({ index: /* @__PURE__ */ g2() }), X(e3.value) && b2.delete(e3.ctx.path);
  }, $2 = (t2) => {
    var n2, l3, a2;
    if ("enums" === e3.typedef.type) {
      let l4 = null !== (n2 = /* @__PURE__ */ x.schemaProp(e3.typedef, "enum")) && void 0 !== n2 ? n2 : [];
      null != t2 || (t2 = l4[w2.value.index % l4.length]);
    } else null != t2 || (t2 = (null === (l3 = c2.value) || void 0 === l3 ? void 0 : l3.value) ? null === (a2 = c2.value) || void 0 === a2 ? void 0 : a2.value : void 0);
    if (X(t2)) {
      b2.delete(e3.ctx.path);
      return;
    }
    let [i2, r3] = e3.typedef.validate(t2, { coerce: true });
    if (i2) {
      b2.setError(e3.ctx.path, i2.message);
      return;
    }
    b2.update(e3.ctx.path, r3), N2();
  };
  return (e3.allowRawJSON && a(v2, /* @__PURE__ */ j((t2) => {
    let n2 = /* @__PURE__ */ t2.trim();
    if (n2.startsWith("{") && n2.endsWith("}") || n2.startsWith("[") && n2.endsWith("]")) try {
      let t3 = /* @__PURE__ */ JSON.parse(n2);
      b2.update(e3.ctx.path, t3), N2();
    } catch (t3) {
      b2.setError(e3.ctx.path, "无效的 JSON 字符串");
    }
  }), /* @__PURE__ */ i()), a(u2, /* @__PURE__ */ j((e4) => {
    switch (e4.type) {
      case "SELECT":
        w2.next((t2) => {
          t2.index += e4.direction;
        });
        break;
      case "COMMIT":
        $2();
        break;
      case "CANCEL":
        C2();
    }
  }), /* @__PURE__ */ i()), a(/* @__PURE__ */ B(/* @__PURE__ */ a(p2, /* @__PURE__ */ y((e4) => {
    if (e4) {
      let t2 = new ResizeObserver((e5) => {
        for (let n2 of e5) if (n2.contentBoxSize) {
          var t3;
          r2 = null === (t3 = n2.contentBoxSize[0]) || void 0 === t3 ? void 0 : t3.blockSize;
        }
      });
      return t2.observe(e4), () => {
        t2.disconnect();
      };
    }
    return () => {
    };
  })), /* @__PURE__ */ a(c2, /* @__PURE__ */ W(1), /* @__PURE__ */ j((e4) => {
    e4 && (null == e4 || e4.focus(), e4.value && (e4.selectionStart = 0, e4.selectionEnd = e4.value.length));
  })), /* @__PURE__ */ a(c2, /* @__PURE__ */ M((e4) => {
    if (e4) {
      let t2 = null != r2 ? r2 : e4.getBoundingClientRect().height, n2 = (e5) => {
        e5.style.height = `${null != t2 ? t2 : 0}px`, e5.style.height = `${e5.scrollHeight}px`;
      };
      return n2(e4), B(/* @__PURE__ */ a(/* @__PURE__ */ _(e4, "blur"), /* @__PURE__ */ j((t3) => {
        if (t3.relatedTarget) {
          var n3, l3;
          if ((null === (n3 = p2.value) || void 0 === n3 ? void 0 : n3.contains(t3.relatedTarget)) || (null === (l3 = d2.value) || void 0 === l3 ? void 0 : l3.contains(t3.relatedTarget))) return;
        }
        t3.preventDefault(), $2(e4.value);
      })), /* @__PURE__ */ a(/* @__PURE__ */ _(e4, "input"), /* @__PURE__ */ j((e5) => {
        n2(e5.target), v2.next(e5.target.value);
      })));
    }
    return z;
  }))), /* @__PURE__ */ i()), "enums" == e3.typedef.type) ? a(/* @__PURE__ */ H([e3.value$, f2, w2]), /* @__PURE__ */ o2((t2) => {
    var l3, a2, i2;
    let [r3, o3, { index: s2 }] = t2, u3 = null !== (l3 = /* @__PURE__ */ x.schemaProp(e3.typedef, "enum")) && void 0 !== l3 ? l3 : [], h2 = null !== (a2 = /* @__PURE__ */ x.metaProp(e3.typedef, "enumLabels")) && void 0 !== a2 ? a2 : [];
    return /* @__PURE__ */ n(ez, { ref: p2, onClick: () => {
      f2.show();
    }, "data-type": typeof r3, tabindex: 0, children: o3 ? /* @__PURE__ */ n(ep, { onSelected: (e4) => {
      $2(e4);
    }, open$: f2, $content: /* @__PURE__ */ n("div", { ref: d2, children: /* @__PURE__ */ u3.map((e4, t3) => /* @__PURE__ */ n(eF, { "data-focus": s2 % u3.length === t3, value: e4, label: h2[t3] })) }), children: /* @__PURE__ */ n("div", { "data-input-wrapper": true, children: /* @__PURE__ */ n("input", { value: void 0 == r3 ? "" : `${r3}`, ref: c2, "data-options": true }) }) }) : /* @__PURE__ */ n("span", { children: null !== (i2 = /* @__PURE__ */ JSON.stringify(r3)) && void 0 !== i2 ? i2 : "undefined" }) });
  })) : a(/* @__PURE__ */ H([e3.value$, f2]), /* @__PURE__ */ o2((e4) => {
    var t2;
    let [l3, a2] = e4;
    return /* @__PURE__ */ n(ez, { ref: p2, onClick: () => {
      f2.show();
    }, "data-type": typeof l3, tabindex: 0, onFocus: () => {
      f2.show();
    }, children: a2 ? /* @__PURE__ */ n(S, { isOpen: true, placement: "right-start", $content: /* @__PURE__ */ s(ej, { ref: d2, children: [/* @__PURE__ */ n(eo, { type: "button", onClick: () => u2.next({ type: "CANCEL" }), children: /* @__PURE__ */ n(T, { path: R }) }), /* @__PURE__ */ n(eo, { type: "button", onClick: () => u2.next({ type: "COMMIT" }), children: /* @__PURE__ */ n(T, { path: J }) })] }), children: /* @__PURE__ */ n("div", { "data-input-wrapper": true, children: /* @__PURE__ */ n("textarea", { ref: c2, rows: 1, value: void 0 == l3 ? "" : `${l3}` }) }) }) : /* @__PURE__ */ n("span", { "data-value": true, children: null !== (t2 = /* @__PURE__ */ JSON.stringify(l3)) && void 0 !== t2 ? t2 : "undefined" }) });
  }));
}, { displayName: "ValueInput", props: ["typedef", "ctx", "value", "allowRawJSON"] }), ej = /* @__PURE__ */ C("div", { displayName: "ValueInputActions" })({ borderRight: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: /* @__PURE__ */ $("sys.outline-variant", /* @__PURE__ */ k(0.38)), containerStyle: "sys.surface-container-lowest", roundedRight: "sm", display: "flex", px: 2, ml: -4 }), ez = /* @__PURE__ */ C("div", { displayName: "ValueContainer" })({ wordBreak: "keep-all", whiteSpace: "nowrap", cursor: "pointer", display: "flex", alignItems: "center", font: "code", width: "100%", textStyle: "sys.label-small", fontSize: 12, lineHeight: 24, gap: 8, "& [data-value]": { border: "1px solid", borderColor: "rgba(0,0,0,0)", maxWidth: "40vw", width: "100%", overflow: "hidden", textOverflow: "ellipsis", _hover: { textOverflow: "clip", whiteSpace: "normal", wordBreak: "break-all" } }, "& [data-input-wrapper]": { width: "100%", maxWidth: "40vw", display: "flex", alignItems: "center", border: "1px solid", overflow: "hidden", borderColor: /* @__PURE__ */ $("sys.outline-variant", /* @__PURE__ */ k(0.38)) }, "& textarea,input": { border: "1px solid", borderColor: "rgba(0,0,0,0)", flex: 1, rounded: "xs", containerStyle: "sys.surface-container-lowest", width: "100%", outline: "none", px: 8, py: 0, m: 0, fontSize: "inherit", color: "inherit", lineHeight: "inherit", overflow: "hidden", resize: "none", "&[data-options]:focus": { roundedBottom: 0 } }, _type__string: { color: "sys.primary" }, _type__number: { color: "sys.primary" }, _type__boolean: { color: "sys.warning" }, _type__undefined: { color: "sys.error" } }), eH = /* @__PURE__ */ C(eu, { displayName: "EnumMenuItemContainer" })({ [`& ${ef}`]: { textAlign: "left" } }), eF = /* @__PURE__ */ d((e3) => () => /* @__PURE__ */ s(eH, { "data-value": e3.value, tabindex: 0, children: [/* @__PURE__ */ n(ef, { children: e3.value }), e3.label && /* @__PURE__ */ n(eT, { children: e3.label })] }), { displayName: "EnumMenuItem", props: ["value", "label"] }), eU = /* @__PURE__ */ l((e3, t2) => {
  let {} = e3, { emit: l2 } = t2;
  return () => /* @__PURE__ */ n(eh, { $title: "删除属性", children: /* @__PURE__ */ n(eo, { type: "button", onClick: () => l2("remove"), children: /* @__PURE__ */ n(T, { path: L }) }) });
}, { displayName: "RemovePropIconBtn", emits: ["remove"] }), eV = /* @__PURE__ */ l((e3, t2) => {
  let { render: l2 } = t2, i2 = /* @__PURE__ */ el.use(), r2 = /* @__PURE__ */ ea.use();
  return a(e3.value$, /* @__PURE__ */ l2((t3) => /* @__PURE__ */ n(e$, { openToken: "{", closeToken: "}", $leading: /* @__PURE__ */ n(er, { children: /* @__PURE__ */ n(eL, { value: t3 }) }), $trailing: /* @__PURE__ */ n(eK, { ctx: e3.ctx, onAdd: (t4) => {
    i2.update([...e3.ctx.path, t4], void 0);
  }, options: /* @__PURE__ */ [.../* @__PURE__ */ e3.typedef.entries(t3, e3.ctx)].filter((e4) => {
    let [n2] = e4;
    return !Object.hasOwn(t3, n2);
  }).map((e4) => {
    let [t4, n2, l3] = e4;
    return { propName: /* @__PURE__ */ String(t4), typedef: l3 };
  }) }, "prop-input"), children: /* @__PURE__ */ [.../* @__PURE__ */ e3.typedef.entries(t3, e3.ctx)].map((l3) => {
    var a2;
    let [o2, d2, p2] = l3;
    if (!Object.hasOwn(t3, o2)) return null;
    let c2 = [...e3.ctx.path, o2];
    return /* @__PURE__ */ s(ek, { path: c2, dirty: /* @__PURE__ */ i2.isDirty(d2, c2), title: /* @__PURE__ */ x.metaProp(p2, "title"), description: /* @__PURE__ */ x.metaProp(p2, "description"), children: [/* @__PURE__ */ n(ef, { deprecated: /* @__PURE__ */ x.schemaProp(p2, "deprecated"), $leading: /* @__PURE__ */ n(eU, { onRemove: () => {
      i2.delete(c2);
    } }), children: /* @__PURE__ */ String(o2) }), /* @__PURE__ */ s(em, { children: [":", " "] }), null === (a2 = r2.$value) || void 0 === a2 ? void 0 : a2.call(r2, p2, d2, { ...e3.ctx, path: c2, branch: [...e3.ctx.branch, d2] })] });
  }) })));
}, { displayName: "ObjectInput", props: ["typedef", "ctx", "value"] }), eK = /* @__PURE__ */ l((e3, l2) => {
  let { emit: r2, render: o2 } = l2, d2 = /* @__PURE__ */ h(null), p2 = /* @__PURE__ */ eM.from(d2), c2 = /* @__PURE__ */ eP.from(d2), u2 = /* @__PURE__ */ ed.from(d2), y2 = /* @__PURE__ */ el.use(), v2 = new t({ index: 0 }), m2 = () => {
    u2.hide(), c2.next(""), d2.value && (d2.value.value = "", d2.value.blur()), v2.next({ index: 0 });
  };
  a(c2, /* @__PURE__ */ j((t2) => {
    let n2 = /* @__PURE__ */ t2.trim();
    if (n2.startsWith("{") && n2.endsWith("}")) try {
      let t3 = /* @__PURE__ */ JSON.parse(n2);
      y2.update(e3.ctx.path, t3), m2();
    } catch (t3) {
      y2.setError(e3.ctx.path, "无效的 JSON 字符串");
    }
  }), /* @__PURE__ */ i());
  let f2 = (t2) => {
    if (e3.options) {
      var n2;
      null != t2 || (t2 = null === (n2 = e3.options[v2.value.index % e3.options.length]) || void 0 === n2 ? void 0 : n2.propName);
    } else null != t2 || (t2 = c2.value);
    t2 ? (r2("add", t2), m2()) : y2.setError([...e3.ctx.path, x.RecordKey], "无效的属性值");
  };
  a(p2, /* @__PURE__ */ j((e4) => {
    switch (e4.type) {
      case "SELECT":
        v2.next((t2) => {
          t2.index += e4.direction;
        });
        break;
      case "COMMIT":
        f2();
        break;
      case "CANCEL":
        m2();
    }
  }), /* @__PURE__ */ i());
  let b2 = /* @__PURE__ */ a(u2, /* @__PURE__ */ o2((e4) => /* @__PURE__ */ n("div", { "data-input-wrapper": true, children: /* @__PURE__ */ n("input", { ref: d2, type: "text", placeholder: "添加属性 (可粘贴 JSON 字符串)", "data-options": e4 }) })));
  return a(/* @__PURE__ */ H([c2, u2, v2, e3.options$]), /* @__PURE__ */ o2((t2) => {
    let [l3, a2, i2, r3] = t2;
    return r3 ? r3.length > 0 ? /* @__PURE__ */ n(ek, { path: e3.ctx.path, children: /* @__PURE__ */ n(ez, { sx: { mx: -4 }, children: /* @__PURE__ */ n(ep, { onSelected: (e4) => {
      f2(e4);
    }, open$: u2, $content: /* @__PURE__ */ n("div", { children: /* @__PURE__ */ r3.map((e4, t3) => l3 && !e4.propName.includes(l3) ? null : /* @__PURE__ */ n(eX, { propName: e4.propName, typedef: e4.typedef, "data-focus": t3 === i2.index % r3.length })) }), children: b2 }) }) }) : null : /* @__PURE__ */ n(ek, { path: [...e3.ctx.path, x.RecordKey], children: /* @__PURE__ */ n(ez, { sx: { mx: -4 }, children: /* @__PURE__ */ n(S, { isOpen: a2, placement: "right-start", $content: /* @__PURE__ */ s(ej, { children: [/* @__PURE__ */ n(eo, { type: "button", onClick: () => p2.next({ type: "CANCEL" }), children: /* @__PURE__ */ n(T, { path: R }) }), /* @__PURE__ */ n(eo, { type: "button", onClick: () => p2.next({ type: "COMMIT" }), children: /* @__PURE__ */ n(T, { path: J }) })] }), children: /* @__PURE__ */ n("div", { "data-input-wrapper": true, children: /* @__PURE__ */ n("input", { ref: d2, type: "text", placeholder: "添加属性 (可粘贴 JSON 字符串)" }) }) }) }) });
  }));
}, { displayName: "PropValueInput", props: ["ctx", "options"], emits: ["add"] }), eX = /* @__PURE__ */ d((e3) => () => /* @__PURE__ */ s(eq, { "data-value": e3.propName, tabindex: 0, children: [/* @__PURE__ */ n(ef, { optional: /* @__PURE__ */ x.schemaProp(e3.typedef, x.optional), children: e3.propName }), /* @__PURE__ */ n(eT, { children: /* @__PURE__ */ x.metaProp(e3.typedef, "title") })] }), { displayName: "PropMenuItem", props: ["propName", "typedef"] }), eq = /* @__PURE__ */ C(eu, { displayName: "AddPropMenuItemContainer" })({ [`& ${ef}`]: { textAlign: "left" } }), eG = /* @__PURE__ */ l((e3, t2) => {
  let { render: l2 } = t2, i2 = /* @__PURE__ */ el.use(), r2 = /* @__PURE__ */ ea.use();
  return a(e3.value$, /* @__PURE__ */ l2((t3) => /* @__PURE__ */ n(e$, { openToken: "[", closeToken: "]", $leading: /* @__PURE__ */ n(er, { children: /* @__PURE__ */ n(eL, { value: t3 }) }), $trailing: /* @__PURE__ */ n(eQ, { ctx: e3.ctx, typedef: e3.typedef, onAdd: (t4) => {
    i2.update(e3.ctx.path, (e4) => {
      e4.push(t4);
    }, []);
  } }), children: /* @__PURE__ */ [.../* @__PURE__ */ e3.typedef.entries(t3, e3.ctx)].map((t4) => {
    var l3;
    let [a2, o2, d2] = t4, p2 = [...e3.ctx.path, a2];
    return /* @__PURE__ */ s(ek, { path: p2, dirty: /* @__PURE__ */ i2.isDirty(o2, p2), children: [/* @__PURE__ */ n(ef, { $leading: /* @__PURE__ */ n(eY, { onRemove: () => {
      i2.delete(p2);
    } }), children: /* @__PURE__ */ n(E, { sx: { opacity: 0.3, mr: "0.5em" }, children: /* @__PURE__ */ String(a2) }) }), null === (l3 = r2.$value) || void 0 === l3 ? void 0 : l3.call(r2, d2, o2, { ...e3.ctx, path: p2, branch: [...e3.ctx.branch, o2] })] });
  }) })));
}, { displayName: "ArrayInput", props: ["ctx", "value", "typedef"] }), eQ = /* @__PURE__ */ l((e3, t2) => {
  let { emit: l2, render: r2 } = t2, o2 = /* @__PURE__ */ h(null), d2 = /* @__PURE__ */ eP.from(o2), p2 = /* @__PURE__ */ eM.from(o2), c2 = /* @__PURE__ */ ed.from(o2), u2 = /* @__PURE__ */ el.use(), y2 = () => {
    o2.value && (o2.value.value = "", o2.value.blur());
  }, v2 = (t3) => {
    if (null != t3 || (t3 = d2.value), t3) {
      let [n2, a2] = /* @__PURE__ */ x.schemaProp(e3.typedef, "items").validate(t3, { coerce: true });
      if (n2) {
        u2.setError(e3.ctx.path, n2);
        return;
      }
      l2("add", a2);
    } else l2("add", void 0);
    y2();
  };
  a(d2, /* @__PURE__ */ j((t3) => {
    let n2 = /* @__PURE__ */ t3.trim();
    if (n2.startsWith("[") && n2.endsWith("]")) try {
      let t4 = /* @__PURE__ */ JSON.parse(n2);
      u2.update(e3.ctx.path, t4), y2();
    } catch (t4) {
      u2.setError(e3.ctx.path, "无效的 JSON 字符串");
    }
    if (n2.startsWith("{") && n2.endsWith("}")) try {
      v2(/* @__PURE__ */ JSON.parse(n2));
    } catch (t4) {
      u2.setError(e3.ctx.path, "无效的 JSON 字符串");
    }
  }), /* @__PURE__ */ i()), a(p2, /* @__PURE__ */ j((e4) => {
    switch (e4.type) {
      case "COMMIT":
        v2();
        break;
      case "CANCEL":
        y2();
    }
  }), /* @__PURE__ */ i());
  let m2 = /* @__PURE__ */ a(c2, /* @__PURE__ */ r2((e4) => /* @__PURE__ */ n(S, { isOpen: e4, placement: "right-start", $content: /* @__PURE__ */ s(ej, { children: [/* @__PURE__ */ n(eo, { type: "button", onClick: () => p2.next({ type: "CANCEL" }), children: /* @__PURE__ */ n(T, { path: R }) }), /* @__PURE__ */ n(eo, { type: "button", onClick: () => p2.next({ type: "COMMIT" }), children: /* @__PURE__ */ n(T, { path: J }) })] }), children: /* @__PURE__ */ n("div", { "data-input-wrapper": true, children: /* @__PURE__ */ n("input", { ref: o2, type: "text", placeholder: "添加数组项 (可粘贴 JSON 字符串)" }) }) })));
  return () => /* @__PURE__ */ n(ek, { path: e3.ctx.path, children: /* @__PURE__ */ n(ez, { sx: { mx: -4 }, children: m2 }) });
}, { displayName: "AddItemIconBtn", props: ["ctx", "typedef"], emits: ["add"] }), eY = /* @__PURE__ */ l((e3, t2) => {
  let {} = e3, { emit: l2 } = t2;
  return () => /* @__PURE__ */ n(eh, { $title: "移除项", children: /* @__PURE__ */ n(eo, { type: "button", onClick: () => l2("remove"), children: /* @__PURE__ */ n(T, { path: L }) }) });
}, { displayName: "RemoteItemIconBtn", emits: ["remove"] }), eZ = /* @__PURE__ */ l((e3, t2) => {
  let { render: l2 } = t2, i2 = /* @__PURE__ */ el.use(), r2 = /* @__PURE__ */ ea.use();
  return a(e3.value$, /* @__PURE__ */ l2((t3) => /* @__PURE__ */ n(e$, { openToken: "{", closeToken: "}", $leading: /* @__PURE__ */ n(er, { children: /* @__PURE__ */ n(eL, { value: t3 }) }), $trailing: /* @__PURE__ */ n(eK, { ctx: e3.ctx, onAdd: (t4) => {
    i2.update([...e3.ctx.path, t4], void 0);
  } }, "prop-input"), children: /* @__PURE__ */ [.../* @__PURE__ */ e3.typedef.entries(t3, e3.ctx)].map((l3) => {
    var a2;
    let [o2, d2, p2] = l3;
    if (!Object.hasOwn(t3, o2)) return null;
    let c2 = [...e3.ctx.path, o2];
    return /* @__PURE__ */ s(ek, { path: c2, dirty: /* @__PURE__ */ i2.isDirty(d2, c2), children: [/* @__PURE__ */ n(ef, { $leading: /* @__PURE__ */ n(eU, { onRemove: () => {
      i2.delete(c2);
    } }), children: /* @__PURE__ */ String(o2) }), /* @__PURE__ */ s(em, { children: [":", " "] }), null === (a2 = r2.$value) || void 0 === a2 ? void 0 : a2.call(r2, p2, d2, { ...e3.ctx, path: c2, branch: [...e3.ctx.branch, d2] })] });
  }) })));
}, { displayName: "RecordInput", props: ["ctx", "value", "typedef"] }), e0 = /* @__PURE__ */ l((e3, t2) => {
  let { render: l2 } = t2;
  return a(e3.value$, /* @__PURE__ */ l2((t3) => Z(t3) ? /* @__PURE__ */ n(eG, { value: t3, typedef: /* @__PURE__ */ b(), ctx: e3.ctx }) : ee(t3) ? /* @__PURE__ */ n(eZ, { value: t3, typedef: /* @__PURE__ */ g(/* @__PURE__ */ w(), /* @__PURE__ */ b()), ctx: e3.ctx }) : /* @__PURE__ */ n(eW, { value: t3, typedef: /* @__PURE__ */ b(), ctx: e3.ctx, allowRawJSON: true })));
}, { displayName: "AnyInput", props: ["typedef", "ctx", "value"] }), e1 = (e3, t2, l2) => "object" == e3.type || "intersection" == e3.type || "union" == e3.type && x.schemaProp(e3, "discriminator") ? /* @__PURE__ */ n(eV, { typedef: e3, value: null != t2 ? t2 : {}, ctx: l2 }) : "union" == e3.type && X(/* @__PURE__ */ x.schemaProp(e3, "discriminator")) ? /* @__PURE__ */ n(eW, { typedef: e3, value: t2, ctx: l2 }) : "record" == e3.type ? /* @__PURE__ */ n(eZ, { typedef: e3, value: t2, ctx: l2 }) : "array" == e3.type ? /* @__PURE__ */ n(eG, { typedef: e3, value: t2, ctx: l2 }) : "any" == e3.type || "unknown" == e3.type ? /* @__PURE__ */ n(e0, { typedef: e3, value: t2, ctx: l2 }) : /* @__PURE__ */ n(eW, { typedef: e3, value: t2, ctx: l2 }), e2 = /* @__PURE__ */ l((e3, t2) => {
  let {} = e3, { render: l2 } = t2, i2 = /* @__PURE__ */ el.use(), r2 = /* @__PURE__ */ ea.use(), o2 = /* @__PURE__ */ v(null);
  return a(i2, /* @__PURE__ */ l2((e4) => {
    var t3, l3;
    let a2 = null !== (t3 = r2.$value) && void 0 !== t3 ? t3 : e1;
    return /* @__PURE__ */ n(e_, { children: /* @__PURE__ */ n(ea, { value: { $value: null !== (l3 = r2.$value) && void 0 !== l3 ? l3 : e1 }, children: /* @__PURE__ */ s(e8, { children: [/* @__PURE__ */ n("section", { ref: o2 }), o2.value && /* @__PURE__ */ n(eC, { value: { indent: 0, $container: o2 }, children: /* @__PURE__ */ n(ek, { path: [], viewOnly: true, children: /* @__PURE__ */ a2(i2.typedef, e4, N) }) })] }) }) });
  }));
}, { displayName: "JSONEditorView" }), e8 = /* @__PURE__ */ C("div", { displayName: "JSONEditorContainer" })({ width: "100%", height: "100%", overflow: "auto", section: { display: "flex", flexDirection: "column", minWidth: "max-content" } });
export {
  en as J,
  el as a,
  e2 as b,
  eJ as c
};
