var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _e, _t, _n;
var e, t, n, l;
import { c as a, I as i, j as r, a as o, r as d, s, b as p, d as c, e as u, f as h, T as y, F as v, g as m, o as f, t as x, h as b } from "./lib-nodepkg-vuekit.Cts2VpE6.chunk.js";
import { o as g, J as w, S as N, a as C, b as k, r as S, s as $, E as O } from "./lib-nodepkg-typedef.DMOVrfQL.chunk.js";
import { s as E, v as I, a as T, P as A, b as D, B as R } from "./lib-nodepkg-vueuikit.sHEjjijg.chunk.js";
import { I as J, a as L } from "./lib-nodepkg-vuematerial.CnNkBSmz.chunk.js";
import { m as P, a as M, b as B, c as _, d as j } from "./webapp-vuekit-layout.DyZyXPWm.chunk.js";
import { O as W, s as z, m as H, f as F, d as U, t as V, E as K, c as X, B as q, S as G } from "./vendor-rxjs.CROJHUGX.chunk.js";
import { i as Q, g as Y, a as Z, b as ee, s as et, l as en, c as el, d as ea, e as ei } from "./vendor-innoai-tech-lodash.C5hOAnRW.chunk.js";
import { M as er } from "./lib-nodepkg-vuemarkdown.gq9ck2jY.chunk.js";
const _eo = class _eo extends W {
  constructor(e6, t2) {
    super((e7) => {
      let t3 = __privateGet(this, _e).subscribe(e7);
      return () => {
        t3.unsubscribe();
      };
    });
    __privateAdd(this, _e, new i({}));
    __privateAdd(this, _t, new i({}));
    this.typedef = e6, this.initials = t2, __privateGet(this, _e).next(t2);
  }
  static of(e6, t2) {
    return new _eo(e6, null != t2 ? t2 : "array" == e6.type ? [] : {});
  }
  isDirty(e6, t2) {
    if (!Q(e6)) {
      let n2 = Y(this.initials, t2);
      return Z(n2) || n2 !== e6;
    }
    return false;
  }
  update(e6, t2, n2) {
    if (__privateGet(this, _t).next({}), 0 == e6.length) {
      __privateGet(this, _e).next(t2);
      return;
    }
    ee(t2) ? __privateGet(this, _e).next((l2) => {
      let a2 = Y(l2, e6, n2);
      t2(a2), et(l2, e6, a2);
    }) : __privateGet(this, _e).next((n3) => {
      et(n3, e6, t2);
    });
  }
  delete(e6) {
    0 != e6.length && __privateGet(this, _e).next((t2) => {
      let n2 = en(e6);
      if (el(n2)) {
        let l3 = e6.slice(0, e6.length - 1), a3 = l3.length > 0 ? Y(t2, l3) : t2;
        if (ea(a3)) {
          a3.splice(n2, 1);
          return;
        }
      }
      let l2 = e6.slice(0, e6.length - 1), a2 = l2.length > 0 ? Y(t2, l2) : t2;
      delete a2[n2];
    });
  }
  get error$() {
    return __privateGet(this, _t);
  }
  setError(e6, t2) {
    let n2 = w.create(e6);
    __privateGet(this, _t).next((e7) => {
      null === t2 ? delete e7[n2] : e7[n2] = t2;
    });
  }
};
_e = new WeakMap();
_t = new WeakMap();
let eo = _eo;
let ed = a(() => new eo(g(), {})), es = a(() => ({})), ep = E("span", { displayName: "ActionToolbar" })({ px: 2, pos: "relative", display: "flex", alignItems: "center", gap: 8, visibility: "hidden" }), ec = E("span", (e6, t2) => {
  let {} = e6, { slots: n2 } = t2;
  return (e7) => {
    var t3;
    return r(e7, { children: r(ep, { "data-visible-on-hover": true, children: null === (t3 = n2.default) || void 0 === t3 ? void 0 : t3.call(n2) }) });
  };
}, { displayName: "Actions" })({ display: "flex" }), eu = E(J, { displayName: "ActionBtn" })({ transition: "none", width: 24, height: 24, rounded: 12, [`& ${L}`]: { svg: { width: 18, height: 18 } } });
class eh extends i {
  static from(e6) {
    let t2 = new eh(false);
    return d(e6, z((e7) => e7 ? H(d(F(e7, "focus"), V(() => {
      t2.show();
    })), d(F(e7, "blur"), U(200), V(() => {
      t2.value && t2.hide();
    }))) : K), s()), t2;
  }
  show() {
    this.next(true);
  }
  hide() {
    this.next(false);
  }
}
let ey = D({ apply(e6) {
  let { elements: t2, rects: n2 } = e6;
  Object.assign(t2.floating.style, { width: `${n2.reference.width}px` });
} }), ev = o((e6, t2) => {
  var n2;
  let { emit: l2, slots: a2, render: i2 } = t2, o2 = null !== (n2 = e6.open$) && void 0 !== n2 ? n2 : new eh(false), s2 = (e7) => {
    let t3 = [e7.target, ...e7.composedPath()].find((e9) => {
      var t4;
      return null == e9 ? void 0 : null === (t4 = e9.hasAttribute) || void 0 === t4 ? void 0 : t4.call(e9, "data-value");
    });
    if (t3) {
      let e9 = t3.getAttribute("data-value");
      Z(e9) || (l2("selected", e9), o2.hide());
    }
  };
  return d(o2, i2((e7) => {
    var t3, n3, l3, i3;
    return r(A, { isOpen: e7, onClickOutside: () => o2.hide(), onEscKeydown: () => o2.hide(), placement: "bottom-start", middleware: [ey], $content: r(em, { onClick: s2, children: null === (t3 = a2.content) || void 0 === t3 ? void 0 : t3.call(a2) }), children: null !== (i3 = null === (l3 = a2.default) || void 0 === l3 ? void 0 : null === (n3 = l3.call(a2)) || void 0 === n3 ? void 0 : n3[0]) && void 0 !== i3 ? i3 : null });
  }));
}, { displayName: "Menu", props: ["open$"], emits: ["selected"] });
o((e6, t2) => {
  var n2;
  let { slots: l2, render: a2 } = t2, i2 = null !== (n2 = e6.open$) && void 0 !== n2 ? n2 : new eh(false);
  return d(i2, a2((e7) => {
    var t3, n3, a3, o2;
    return r(A, { isOpen: e7, onClickOutside: () => i2.hide(), placement: "bottom-start", $content: r(em, { children: null === (t3 = l2.content) || void 0 === t3 ? void 0 : t3.call(l2) }), children: null !== (o2 = null === (a3 = l2.default) || void 0 === a3 ? void 0 : null === (n3 = a3.call(l2)) || void 0 === n3 ? void 0 : n3[0]) && void 0 !== o2 ? o2 : null });
  }));
}, { displayName: "Popover", props: ["open$"] });
let em = E("div", { displayName: "PopoverContainer" })({ textStyle: "sys.body-small", pos: "relative", roundedBottom: "sm", containerStyle: "sys.surface-container-lowest", borderBottom: "1px solid", borderRight: "1px solid", borderLeft: "1px solid", borderColor: I("sys.outline-variant", T(0.38)) }), ef = E("div", { displayName: "MenuItem" })({ px: 8, py: 2, gap: 8, display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "right", textStyle: "sys.body-small", cursor: "pointer", _hover: { containerStyle: "sys.surface-container" }, _focus: { containerStyle: "sys.surface-container", outline: 0 } }), ex = o((e6, t2) => {
  let { slots: n2, render: l2 } = t2, a2 = new eh(false);
  return d(a2, l2((t3) => {
    var l3, i2;
    let o2 = null === (l3 = n2.default) || void 0 === l3 ? void 0 : l3.call(n2)[0];
    return r(A, { isOpen: t3, placement: null !== (i2 = e6.placement) && void 0 !== i2 ? i2 : "left", $content: r(eg, { children: r(eb, { children: n2.title() }) }), children: o2 ? p(o2, { onMouseover: () => {
      a2.show();
    }, onMouseout: () => {
      a2.hide();
    } }) : null });
  }));
}, { displayName: "Tooltip", props: ["placement"] }), eb = E("div", { displayName: "TooltipContainer" })({ py: 4, px: 12, rounded: "xs", shadow: "3", textStyle: "sys.body-small", containerStyle: "sys.on-surface", pos: "relative", zIndex: 100 }), eg = E("div", { displayName: "TooltipWrapper" })({ px: 8 }), ew = E("span", { displayName: "Token" })({ textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 12, lineHeight: 24, wordBreak: "keep-all", whiteSpace: "nowrap", font: "code", opacity: 0.3 }), eN = o((e6, t2) => {
  let { slots: n2 } = t2;
  return () => {
    var t3;
    return h(ek, { "data-deprecated": e6.deprecated, "data-optional": e6.optional, "data-nullable": e6.nullable, children: [n2.leading && r(eC, { "data-visible-on-hover": true, children: n2.leading() }), null === (t3 = n2.default) || void 0 === t3 ? void 0 : t3.call(n2)] });
  };
}, { displayName: "PropName", props: ["deprecated", "optional", "nullable"] }), eC = E(ep, { displayName: "PropLeading" })({ position: "absolute", ml: -28 }), ek = E("div", { displayName: "PropNameView" })({ position: "relative", display: "flex", alignItems: "center", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", wordBreak: "keep-all", whiteSpace: "nowrap", border: "1px solid", borderColor: "rgba(0,0,0,0)", fontSize: 12, lineHeight: 24, _deprecated: { textDecoration: "line-through" }, _optional: { "&:after": { content: '"?"', color: "sys.secondary", opacity: 0.58 } } }), eS = E("div", { displayName: "LineTitle" })({ position: "absolute", zIndex: 1, left: 0, opacity: 0.58, fontSize: 10, lineHeight: 10, top: 0, "& > *": { display: "flex", alignItems: "center", gap: 4, "&::before": { content: '"// "', font: "code" } } }), e$ = E("div", { displayName: "LineError" })({ display: "block", fontSize: 10, lineHeight: 14, color: "sys.error" }), eO = E("div", { displayName: "LineContainer" })({ position: "relative", py: 4, _hover: { containerStyle: "sys.surface-container", "& [data-visible-on-hover]": { visibility: "visible" } }, "&:focus-within": { containerStyle: "sys.surface-container" }, _dirty: { bgColor: I("sys.warning-container", T(0.38)) }, _error: { bgColor: "sys.error-container" }, [`&:has(${ec})`]: { [`& > ${e$}`]: { display: "none" }, _error: { bgColor: "inherit" } } }), eE = a(() => ({ indent: 0, $container: c(null) }), { name: "IntentContext" }), eI = u((e6, t2) => {
  let { slots: n2 } = t2, l2 = eE.use(), a2 = c(null), i2 = c(null);
  return () => {
    var t3, o2, d2, s2, p2;
    return h(v, { children: [r(ew, { children: e6.openToken }), null === (t3 = n2.leading) || void 0 === t3 ? void 0 : t3.call(n2), h(y, { to: l2.$container.value, children: [h(eD, { "data-indent": l2.indent, children: [r(eA, { ref: a2 }), r(eR, { ref: i2 }), i2.value && r(eE, { value: { $container: i2, indent: 1 + (null !== (s2 = l2.indent) && void 0 !== s2 ? s2 : 0) }, children: null === (o2 = n2.trailing) || void 0 === o2 ? void 0 : o2.call(n2) })] }), r(eJ, { style: { paddingLeft: `${32 * l2.indent}px`, display: "flex" }, children: r(ew, { children: e6.closeToken }) })] }), a2.value && r(eE, { value: { $container: a2, indent: 1 + (null !== (p2 = l2.indent) && void 0 !== p2 ? p2 : 0) }, children: null === (d2 = n2.default) || void 0 === d2 ? void 0 : d2.call(n2) })] });
  };
}, { displayName: "Block", props: ["openToken", "closeToken"] }), eT = o((e6, t2) => {
  let { slots: n2, render: l2 } = t2, a2 = eE.use(), i2 = d(ed.use().error$, l2((t3) => {
    var l3;
    let i3 = w.create(e6.path), o2 = !e6.viewOnly && !!t3[i3];
    return h(eO, { "data-error": o2, "data-dirty": e6.dirty, style: { paddingLeft: `${32 * a2.indent}px` }, children: [(e6.title || e6.description) && r(eS, { style: { paddingLeft: `${32 * a2.indent}px` }, children: e6.description ? r(ex, { $title: r(eL, { children: r(er, { text: e6.description }) }), children: h("div", { children: [e6.title, " ", r(L, { path: P })] }) }) : r("span", { children: e6.title }) }), r(eJ, { children: null === (l3 = n2.default) || void 0 === l3 ? void 0 : l3.call(n2) }), o2 && r(e$, { children: `${t3[i3]}` })] });
  }));
  return () => r(y, { to: a2.$container.value, children: i2 });
}, { displayName: "Line", props: ["path", "dirty", "viewOnly", "title", "description"] }), eA = E("div", { displayName: "Lines" })({}), eD = E("section", { displayName: "LineSection" })({}), eR = E("div", { displayName: "LinesTrailing" })({}), eJ = E("div", { displayName: "LineRow" })({ display: "flex", alignItems: "start", pr: 10 }), eL = E("span", { displayName: "Description" })({ display: "block", textStyle: "sys.body-small", "& p": { my: 1, wordBreak: "keep-all", whiteSpace: "nowrap", opacity: 0.7 }, "& code": { wordBreak: "keep-all", whiteSpace: "nowrap" } }), eP = E("form", { displayName: "FormControls" })({ display: "flex", pos: "absolute", right: 0, bottom: 0, px: 8 });
E("div", { displayName: "FormContainer" })({ display: "flex", flexDirection: "column", pos: "relative", textarea: { minW: 400, outline: "none", border: "none", bg: "none", py: 8, px: 12 } }), E("div", { displayName: "FormContainerAsRow" })({ display: "flex", alignItems: "center", gap: 8, pos: "relative", px: 8, input: { outline: "none", border: "none", bg: "none", minWidth: "10vw", py: 8, px: 12 }, [`& ${eP}`]: { pos: "relative", px: 0 } });
let eM = m(function() {
  if (l) return n;
  l = 1;
  var a2 = t ? e : (t = 1, e = function() {
    var e6 = document.getSelection();
    if (!e6.rangeCount) return function() {
    };
    for (var t2 = document.activeElement, n2 = [], l2 = 0; l2 < e6.rangeCount; l2++) n2.push(e6.getRangeAt(l2));
    switch (t2.tagName.toUpperCase()) {
      case "INPUT":
      case "TEXTAREA":
        t2.blur();
        break;
      default:
        t2 = null;
    }
    return e6.removeAllRanges(), function() {
      "Caret" === e6.type && e6.removeAllRanges(), e6.rangeCount || n2.forEach(function(t3) {
        e6.addRange(t3);
      }), t2 && t2.focus();
    };
  }), i2 = { "text/plain": "Text", "text/html": "Url", default: "Text" };
  return n = function(e6, t2) {
    var n2, l2, r2, o2, d2, s2, p2, c2, u2 = false;
    t2 || (t2 = {}), r2 = t2.debug || false;
    try {
      if (d2 = a2(), s2 = document.createRange(), p2 = document.getSelection(), (c2 = document.createElement("span")).textContent = e6, c2.ariaHidden = "true", c2.style.all = "unset", c2.style.position = "fixed", c2.style.top = 0, c2.style.clip = "rect(0, 0, 0, 0)", c2.style.whiteSpace = "pre", c2.style.webkitUserSelect = "text", c2.style.MozUserSelect = "text", c2.style.msUserSelect = "text", c2.style.userSelect = "text", c2.addEventListener("copy", function(n3) {
        if (n3.stopPropagation(), t2.format) {
          if (n3.preventDefault(), void 0 === n3.clipboardData) {
            r2 && console.warn("unable to use e.clipboardData"), r2 && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
            var l3 = i2[t2.format] || i2.default;
            window.clipboardData.setData(l3, e6);
          } else n3.clipboardData.clearData(), n3.clipboardData.setData(t2.format, e6);
        }
        t2.onCopy && (n3.preventDefault(), t2.onCopy(n3.clipboardData));
      }), document.body.appendChild(c2), s2.selectNodeContents(c2), p2.addRange(s2), !document.execCommand("copy")) throw Error("copy command was unsuccessful");
      u2 = true;
    } catch (a3) {
      r2 && console.error("unable to copy using execCommand: ", a3), r2 && console.warn("trying IE specific stuff");
      try {
        window.clipboardData.setData(t2.format || "text", e6), t2.onCopy && t2.onCopy(window.clipboardData), u2 = true;
      } catch (a4) {
        r2 && console.error("unable to copy using clipboardData: ", a4), r2 && console.error("falling back to prompt"), n2 = "message" in t2 ? t2.message : "Copy to clipboard: #{key}, Enter", l2 = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C", o2 = n2.replace(/#{\s*key\s*}/g, l2), window.prompt(o2, e6);
      }
    } finally {
      p2 && ("function" == typeof p2.removeRange ? p2.removeRange(s2) : p2.removeAllRanges()), c2 && document.body.removeChild(c2), d2();
    }
    return u2;
  };
}()), eB = o((e6, t2) => {
  let {} = t2;
  return () => r(ex, { $title: "复制当前节点为 JSON 字符串", children: r(eu, { type: "button", onClick: () => eM(JSON.stringify(e6.value, null, 2)), children: r(L, { path: M }) }) });
}, { displayName: "CopyAsJSONIconBtn", props: ["value"] });
class e_ extends q {
  static from(e6) {
    let t2 = new e_("");
    return d(e6, z((e7) => e7 ? d(F(e7, "input"), V((e9) => {
      t2.next(e9.target.value.trim());
    })) : K), s()), t2;
  }
}
class ej extends G {
  static from(e6) {
    let t2 = new ej();
    return d(e6, z((e7) => e7 ? H(d(F(e7, "keypress"), V((e9) => {
      "Enter" !== e9.key || e9.shiftKey || (e9.preventDefault(), t2.next({ type: "COMMIT" }));
    })), d(F(e7, "keydown"), V((e9) => {
      switch (e9.key) {
        case "Tab":
        case "ArrowDown":
          e9.target.getAttribute("data-options") && (e9.preventDefault(), t2.next({ type: "SELECT", direction: 1 }));
          break;
        case "ArrowUp":
          e9.target.getAttribute("data-options") && (e9.preventDefault(), t2.next({ type: "SELECT", direction: -1 }));
      }
    })), d(F(e7, "keyup"), V((e9) => {
      "Escape" === e9.key && t2.next({ type: "CANCEL" });
    }))) : K), s()), t2;
  }
}
class eW extends W {
  constructor() {
    super((e6) => {
      let t2 = __privateGet(this, _n).subscribe(e6);
      return () => t2.unsubscribe();
    });
    __privateAdd(this, _n, new q(null));
  }
  static sync(e6, t2) {
    return d(H(d(e6, V((e7) => {
      e7 && e7 == w.create(t2.path()) && t2.editing$.show();
    })), d(t2.editing$, U(1), V((n2) => {
      n2 || e6.disable(t2.path());
    })), d(X([t2.value$, e6]), U(1), V((n2) => {
      let [l2, a2] = n2;
      Z(l2) && !a2 && e6.enable(t2.path());
    }))), s());
  }
  enable(e6) {
    __privateGet(this, _n).value || __privateGet(this, _n).next(w.create(e6));
  }
  disable(e6) {
    __privateGet(this, _n).value === w.create(e6) && __privateGet(this, _n).next(null);
  }
}
_n = new WeakMap();
let ez = a(() => new eW()), eH = o((e6, t2) => {
  let n2, { render: l2 } = t2, a2 = f(null), o2 = f(null), p2 = f(null), c2 = ej.from(p2), u2 = e_.from(p2), y2 = ez.use(), v2 = eh.from(p2), m2 = ed.use();
  eW.sync(y2, { editing$: v2, value$: e6.value$, path: () => e6.ctx.path });
  let b2 = () => {
    if ("enums" === e6.typedef.type) {
      var t3;
      let n3 = (null !== (t3 = N.schemaProp(e6.typedef, "enum")) && void 0 !== t3 ? t3 : []).indexOf(e6.value);
      if (n3 > -1) return n3;
    }
    return 0;
  }, g2 = new i({ index: b2() }), w2 = () => {
    u2.next(""), v2.hide();
  }, C2 = () => {
    w2(), g2.next({ index: b2() }), Z(e6.value) && m2.delete(e6.ctx.path);
  }, k2 = (t3) => {
    var n3, l3, a3;
    if ("enums" === e6.typedef.type) {
      let l4 = null !== (n3 = N.schemaProp(e6.typedef, "enum")) && void 0 !== n3 ? n3 : [];
      null != t3 || (t3 = l4[g2.value.index % l4.length]);
    } else null != t3 || (t3 = (null === (l3 = p2.value) || void 0 === l3 ? void 0 : l3.value) ? null === (a3 = p2.value) || void 0 === a3 ? void 0 : a3.value : void 0);
    if (Z(t3)) {
      m2.delete(e6.ctx.path);
      return;
    }
    let [i2, r2] = e6.typedef.validate(t3, { coerce: true });
    if (i2) {
      m2.setError(e6.ctx.path, i2.message);
      return;
    }
    m2.update(e6.ctx.path, r2), w2();
  };
  return (e6.allowRawJSON && d(u2, V((t3) => {
    let n3 = t3.trim();
    if (n3.startsWith("{") && n3.endsWith("}") || n3.startsWith("[") && n3.endsWith("]")) try {
      let t4 = JSON.parse(n3);
      m2.update(e6.ctx.path, t4), w2();
    } catch (t4) {
      m2.setError(e6.ctx.path, "无效的 JSON 字符串");
    }
  }), s()), d(c2, V((e7) => {
    switch (e7.type) {
      case "SELECT":
        g2.next((t3) => {
          t3.index += e7.direction;
        });
        break;
      case "COMMIT":
        k2();
        break;
      case "CANCEL":
        C2();
    }
  }), s()), d(H(d(o2, x((e7) => {
    if (e7) {
      let t3 = new ResizeObserver((e9) => {
        for (let l3 of e9) if (l3.contentBoxSize) {
          var t4;
          n2 = null === (t4 = l3.contentBoxSize[0]) || void 0 === t4 ? void 0 : t4.blockSize;
        }
      });
      return t3.observe(e7), () => {
        t3.disconnect();
      };
    }
    return () => {
    };
  })), d(p2, U(1), V((e7) => {
    e7 && (null == e7 || e7.focus(), e7.value && (e7.selectionStart = 0, e7.selectionEnd = e7.value.length));
  })), d(p2, z((e7) => {
    if (e7) {
      let t3 = null != n2 ? n2 : e7.getBoundingClientRect().height, l3 = (e9) => {
        e9.style.height = `${null != t3 ? t3 : 0}px`, e9.style.height = `${e9.scrollHeight}px`;
      };
      return l3(e7), H(d(F(e7, "blur"), V((t4) => {
        if (t4.relatedTarget) {
          var n3, l4;
          if ((null === (n3 = o2.value) || void 0 === n3 ? void 0 : n3.contains(t4.relatedTarget)) || (null === (l4 = a2.value) || void 0 === l4 ? void 0 : l4.contains(t4.relatedTarget))) return;
        }
        t4.preventDefault(), k2(e7.value);
      })), d(F(e7, "input"), V((e9) => {
        l3(e9.target), u2.next(e9.target.value);
      })));
    }
    return K;
  }))), s()), "enums" == e6.typedef.type) ? d(X([e6.value$, v2, g2]), l2((t3) => {
    var n3, l3, i2;
    let [d2, s2, { index: c3 }] = t3, u3 = null !== (n3 = N.schemaProp(e6.typedef, "enum")) && void 0 !== n3 ? n3 : [], h2 = null !== (l3 = N.metaProp(e6.typedef, "enumLabels")) && void 0 !== l3 ? l3 : [];
    return r(eU, { ref: o2, onClick: () => {
      v2.show();
    }, "data-type": typeof d2, tabindex: 0, children: s2 ? r(ev, { onSelected: (e7) => {
      k2(e7);
    }, open$: v2, $content: r("div", { ref: a2, children: u3.map((e7, t4) => r(eK, { "data-focus": c3 % u3.length === t4, value: e7, label: h2[t4] })) }), children: r("div", { "data-input-wrapper": true, children: r("input", { value: void 0 == d2 ? "" : `${d2}`, ref: p2, "data-options": true }) }) }) : r("span", { children: null !== (i2 = JSON.stringify(d2)) && void 0 !== i2 ? i2 : "undefined" }) });
  })) : d(X([e6.value$, v2]), l2((e7) => {
    var t3;
    let [n3, l3] = e7;
    return r(eU, { ref: o2, onClick: () => {
      v2.show();
    }, "data-type": typeof n3, tabindex: 0, onFocus: () => {
      v2.show();
    }, children: l3 ? r(A, { isOpen: true, placement: "right-start", $content: h(eF, { ref: a2, children: [r(eu, { type: "button", onClick: () => c2.next({ type: "CANCEL" }), children: r(L, { path: B }) }), r(eu, { type: "button", onClick: () => c2.next({ type: "COMMIT" }), children: r(L, { path: _ }) })] }), children: r("div", { "data-input-wrapper": true, children: r("textarea", { ref: p2, rows: 1, value: void 0 == n3 ? "" : `${n3}` }) }) }) : r("span", { "data-value": true, children: null !== (t3 = JSON.stringify(n3)) && void 0 !== t3 ? t3 : "undefined" }) });
  }));
}, { displayName: "ValueInput", props: ["typedef", "ctx", "value", "allowRawJSON"] }), eF = E("div", { displayName: "ValueInputActions" })({ borderRight: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: I("sys.outline-variant", T(0.38)), containerStyle: "sys.surface-container-lowest", roundedRight: "sm", display: "flex", px: 2, ml: -4 }), eU = E("div", { displayName: "ValueContainer" })({ wordBreak: "keep-all", whiteSpace: "nowrap", cursor: "pointer", display: "flex", alignItems: "center", font: "code", width: "100%", textStyle: "sys.label-small", fontSize: 12, lineHeight: 24, gap: 8, "& [data-value]": { border: "1px solid", borderColor: "rgba(0,0,0,0)", maxWidth: "40vw", width: "100%", overflow: "hidden", textOverflow: "ellipsis", _hover: { textOverflow: "clip", whiteSpace: "normal", wordBreak: "break-all" } }, "& [data-input-wrapper]": { width: "100%", maxWidth: "40vw", display: "flex", alignItems: "center", border: "1px solid", overflow: "hidden", borderColor: I("sys.outline-variant", T(0.38)), opacity: 0.38, "&:hover": { opacity: 1 }, "&:focus-within": { opacity: 1 } }, "& textarea,input": { border: "none", flex: 1, rounded: "xs", containerStyle: "sys.surface-container-lowest", width: "100%", outline: "none", px: 8, py: 0, m: 0, fontSize: "inherit", color: "inherit", lineHeight: "inherit", overflow: "hidden", resize: "none", "&[data-options]:focus": { roundedBottom: 0 } }, _type__string: { color: "sys.primary" }, _type__number: { color: "sys.primary" }, _type__boolean: { color: "sys.warning" }, _type__undefined: { color: "sys.error" } }), eV = E(ef, { displayName: "EnumMenuItemContainer" })({ [`& ${eN}`]: { textAlign: "left" } }), eK = u((e6) => () => h(eV, { "data-value": e6.value, tabindex: 0, children: [r(eN, { children: e6.value }), e6.label && r(eL, { children: e6.label })] }), { displayName: "EnumMenuItem", props: ["value", "label"] }), eX = o((e6, t2) => {
  let {} = e6, { emit: n2 } = t2;
  return () => r(ex, { $title: "删除属性", children: r(eu, { type: "button", onClick: () => n2("remove"), children: r(L, { path: j }) }) });
}, { displayName: "RemovePropIconBtn", emits: ["remove"] }), eq = o((e6, t2) => {
  let { render: n2 } = t2, l2 = ed.use(), a2 = es.use();
  return d(e6.value$, n2((t3) => r(eI, { openToken: "{", closeToken: "}", $leading: r(ec, { children: r(eB, { value: t3 }) }), $trailing: r(eG, { ctx: e6.ctx, onAdd: (t4) => {
    l2.update([...e6.ctx.path, t4], void 0);
  }, options: [...e6.typedef.entries(t3, e6.ctx)].filter((e7) => {
    let [n3] = e7;
    return !Object.hasOwn(t3, n3);
  }).map((e7) => {
    let [t4, n3, l3] = e7;
    return { propName: String(t4), typedef: l3 };
  }) }, "prop-input"), children: [...e6.typedef.entries(t3, e6.ctx)].map((n3) => {
    var i2;
    let [o2, d2, s2] = n3;
    if (!Object.hasOwn(t3, o2)) return null;
    let p2 = [...e6.ctx.path, o2];
    return h(eT, { path: p2, dirty: l2.isDirty(d2, p2), title: N.metaProp(s2, "title"), description: N.metaProp(s2, "description"), children: [r(eN, { deprecated: N.schemaProp(s2, "deprecated"), $leading: r(eX, { onRemove: () => {
      l2.delete(p2);
    } }), children: String(o2) }), h(ew, { children: [":", " "] }), null === (i2 = a2.$value) || void 0 === i2 ? void 0 : i2.call(a2, s2, d2, { ...e6.ctx, path: p2, branch: [...e6.ctx.branch, d2] })] });
  }) })));
}, { displayName: "ObjectInput", props: ["typedef", "ctx", "value"] }), eG = o((e6, t2) => {
  let { emit: n2, render: l2 } = t2, a2 = f(null), o2 = ej.from(a2), p2 = e_.from(a2), c2 = eh.from(a2), u2 = ed.use(), y2 = new i({ index: 0 }), v2 = () => {
    c2.hide(), p2.next(""), a2.value && (a2.value.value = "", a2.value.blur()), y2.next({ index: 0 });
  };
  d(p2, V((t3) => {
    let n3 = t3.trim();
    if (n3.startsWith("{") && n3.endsWith("}")) try {
      let t4 = JSON.parse(n3);
      u2.update(e6.ctx.path, t4), v2();
    } catch (t4) {
      u2.setError(e6.ctx.path, "无效的 JSON 字符串");
    }
  }), s());
  let m2 = (t3) => {
    if (e6.options) {
      var l3;
      null != t3 || (t3 = null === (l3 = e6.options[y2.value.index % e6.options.length]) || void 0 === l3 ? void 0 : l3.propName);
    } else null != t3 || (t3 = p2.value);
    t3 ? (n2("add", t3), v2()) : u2.setError([...e6.ctx.path, N.RecordKey], "无效的属性值");
  };
  d(o2, V((e7) => {
    switch (e7.type) {
      case "SELECT":
        y2.next((t3) => {
          t3.index += e7.direction;
        });
        break;
      case "COMMIT":
        m2();
        break;
      case "CANCEL":
        v2();
    }
  }), s());
  let x2 = d(c2, l2((e7) => r("div", { "data-input-wrapper": true, children: r("input", { ref: a2, type: "text", placeholder: "添加属性 (可粘贴 JSON 字符串)", "data-options": e7 }) })));
  return d(X([p2, c2, y2, e6.options$]), l2((t3) => {
    let [n3, l3, i2, d2] = t3;
    return d2 ? d2.length > 0 ? r(eT, { path: e6.ctx.path, children: r(eU, { sx: { mx: -4 }, children: r(ev, { onSelected: (e7) => {
      m2(e7);
    }, open$: c2, $content: r("div", { children: d2.map((e7, t4) => n3 && !e7.propName.includes(n3) ? null : r(eQ, { propName: e7.propName, typedef: e7.typedef, "data-focus": t4 === i2.index % d2.length })) }), children: x2 }) }) }) : null : r(eT, { path: [...e6.ctx.path, N.RecordKey], children: r(eU, { sx: { mx: -4 }, children: r(A, { isOpen: l3, placement: "right-start", $content: h(eF, { children: [r(eu, { type: "button", onClick: () => o2.next({ type: "CANCEL" }), children: r(L, { path: B }) }), r(eu, { type: "button", onClick: () => o2.next({ type: "COMMIT" }), children: r(L, { path: _ }) })] }), children: r("div", { "data-input-wrapper": true, children: r("input", { ref: a2, type: "text", placeholder: "添加属性 (可粘贴 JSON 字符串)" }) }) }) }) });
  }));
}, { displayName: "PropValueInput", props: ["ctx", "options"], emits: ["add"] }), eQ = u((e6) => () => h(eY, { "data-value": e6.propName, tabindex: 0, children: [r(eN, { optional: N.schemaProp(e6.typedef, N.optional), children: e6.propName }), r(eL, { children: N.metaProp(e6.typedef, "title") })] }), { displayName: "PropMenuItem", props: ["propName", "typedef"] }), eY = E(ef, { displayName: "AddPropMenuItemContainer" })({ [`& ${eN}`]: { textAlign: "left" } }), eZ = o((e6, t2) => {
  let { render: n2 } = t2, l2 = ed.use(), a2 = es.use();
  return d(e6.value$, n2((t3) => r(eI, { openToken: "[", closeToken: "]", $leading: r(ec, { children: r(eB, { value: t3 }) }), $trailing: r(e0, { ctx: e6.ctx, typedef: e6.typedef, onAdd: (t4) => {
    l2.update(e6.ctx.path, (e7) => {
      e7.push(t4);
    }, []);
  } }), children: [...e6.typedef.entries(t3, e6.ctx)].map((t4) => {
    var n3;
    let [i2, o2, d2] = t4, s2 = [...e6.ctx.path, i2];
    return h(eT, { path: s2, dirty: l2.isDirty(o2, s2), children: [r(eN, { $leading: r(e1, { onRemove: () => {
      l2.delete(s2);
    } }), children: r(R, { sx: { opacity: 0.3, mr: "0.5em" }, children: String(i2) }) }), null === (n3 = a2.$value) || void 0 === n3 ? void 0 : n3.call(a2, d2, o2, { ...e6.ctx, path: s2, branch: [...e6.ctx.branch, o2] })] });
  }) })));
}, { displayName: "ArrayInput", props: ["ctx", "value", "typedef"] }), e0 = o((e6, t2) => {
  let { emit: n2, render: l2 } = t2, a2 = f(null), i2 = e_.from(a2), o2 = ej.from(a2), p2 = eh.from(a2), c2 = ed.use(), u2 = () => {
    a2.value && (a2.value.value = "", a2.value.blur());
  }, y2 = (t3) => {
    if (null != t3 || (t3 = i2.value), t3) {
      let [l3, a3] = N.schemaProp(e6.typedef, "items").validate(t3, { coerce: true });
      if (l3) {
        c2.setError(e6.ctx.path, l3);
        return;
      }
      n2("add", a3);
    } else n2("add", void 0);
    u2();
  };
  d(i2, V((t3) => {
    let n3 = t3.trim();
    if (n3.startsWith("[") && n3.endsWith("]")) try {
      let t4 = JSON.parse(n3);
      c2.update(e6.ctx.path, t4), u2();
    } catch (t4) {
      c2.setError(e6.ctx.path, "无效的 JSON 字符串");
    }
    if (n3.startsWith("{") && n3.endsWith("}")) try {
      y2(JSON.parse(n3));
    } catch (t4) {
      c2.setError(e6.ctx.path, "无效的 JSON 字符串");
    }
  }), s()), d(o2, V((e7) => {
    switch (e7.type) {
      case "COMMIT":
        y2();
        break;
      case "CANCEL":
        u2();
    }
  }), s());
  let v2 = d(p2, l2((e7) => r(A, { isOpen: e7, placement: "right-start", $content: h(eF, { children: [r(eu, { type: "button", onClick: () => o2.next({ type: "CANCEL" }), children: r(L, { path: B }) }), r(eu, { type: "button", onClick: () => o2.next({ type: "COMMIT" }), children: r(L, { path: _ }) })] }), children: r("div", { "data-input-wrapper": true, children: r("input", { ref: a2, type: "text", placeholder: "添加数组项 (可粘贴 JSON 字符串)" }) }) })));
  return () => r(eT, { path: e6.ctx.path, children: r(eU, { sx: { mx: -4 }, children: v2 }) });
}, { displayName: "AddItemIconBtn", props: ["ctx", "typedef"], emits: ["add"] }), e1 = o((e6, t2) => {
  let {} = e6, { emit: n2 } = t2;
  return () => r(ex, { $title: "移除项", children: r(eu, { type: "button", onClick: () => n2("remove"), children: r(L, { path: j }) }) });
}, { displayName: "RemoteItemIconBtn", emits: ["remove"] }), e8 = o((e6, t2) => {
  let { render: n2 } = t2, l2 = ed.use(), a2 = es.use();
  return d(e6.value$, n2((t3) => r(eI, { openToken: "{", closeToken: "}", $leading: r(ec, { children: r(eB, { value: t3 }) }), $trailing: r(eG, { ctx: e6.ctx, onAdd: (t4) => {
    l2.update([...e6.ctx.path, t4], void 0);
  } }, "prop-input"), children: [...e6.typedef.entries((() => {
    let e7 = {};
    for (let n3 of Object.keys(null != t3 ? t3 : {}).toSorted()) e7[n3] = null == t3 ? void 0 : t3[n3];
    return e7;
  })(), e6.ctx)].map((n3) => {
    var i2;
    let [o2, d2, s2] = n3;
    if (!Object.hasOwn(t3, o2)) return null;
    let p2 = [...e6.ctx.path, o2];
    return h(eT, { path: p2, dirty: l2.isDirty(d2, p2), children: [r(eN, { $leading: r(eX, { onRemove: () => {
      l2.delete(p2);
    } }), children: String(o2) }), h(ew, { children: [":", " "] }), null === (i2 = a2.$value) || void 0 === i2 ? void 0 : i2.call(a2, s2, d2, { ...e6.ctx, path: p2, branch: [...e6.ctx.branch, d2] })] });
  }) })));
}, { displayName: "RecordInput", props: ["ctx", "value", "typedef"] }), e2 = o((e6, t2) => {
  let { render: n2 } = t2;
  return d(e6.value$, n2((t3) => ea(t3) ? r(eZ, { value: t3, typedef: C(k()), ctx: e6.ctx }) : ei(t3) ? r(e8, { value: t3, typedef: S($(), k()), ctx: e6.ctx }) : r(eH, { value: t3, typedef: k(), ctx: e6.ctx, allowRawJSON: true })));
}, { displayName: "AnyInput", props: ["typedef", "ctx", "value"] }), e4 = (e6, t2, n2) => "object" == e6.type || "intersection" == e6.type || "union" == e6.type && N.schemaProp(e6, "discriminator") ? r(eq, { typedef: e6, value: null != t2 ? t2 : {}, ctx: n2 }) : "union" == e6.type && Z(N.schemaProp(e6, "discriminator")) ? r(eH, { typedef: e6, value: t2, ctx: n2 }) : "record" == e6.type ? r(e8, { typedef: e6, value: t2, ctx: n2 }) : "array" == e6.type ? r(eZ, { typedef: e6, value: t2, ctx: n2 }) : "any" == e6.type || "unknown" == e6.type ? r(e2, { typedef: e6, value: t2, ctx: n2 }) : r(eH, { typedef: e6, value: t2, ctx: n2 }), e3 = o((e6, t2) => {
  let {} = e6, { render: n2 } = t2, l2 = ed.use(), a2 = es.use(), i2 = b(null);
  return d(l2, n2((e7) => {
    var t3, n3;
    let o2 = null !== (t3 = a2.$value) && void 0 !== t3 ? t3 : e4;
    return r(ez, { children: r(es, { value: { $value: null !== (n3 = a2.$value) && void 0 !== n3 ? n3 : e4 }, children: h(e5, { children: [r("section", { ref: i2 }), i2.value && r(eE, { value: { indent: 0, $container: i2 }, children: r(eT, { path: [], viewOnly: true, children: o2(l2.typedef, e7, O) }) })] }) }) });
  }));
}, { displayName: "JSONEditorView" }), e5 = E("div", { displayName: "JSONEditorContainer" })({ width: "100%", height: "100%", overflow: "auto", section: { display: "flex", flexDirection: "column", minWidth: "max-content" } });
export {
  eo as J,
  ed as a,
  e3 as b,
  eM as c
};
