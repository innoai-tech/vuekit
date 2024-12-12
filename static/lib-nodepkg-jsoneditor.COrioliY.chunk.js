var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _e, _t, _n;
var e, t, n, l;
import { c as a, I as i, j as r, a as o, r as d, s, b as p, d as c, e as u, f as h, T as y, F as v, g as m, o as f, t as x, h as b } from "./lib-nodepkg-vuekit.PcF-IhaE.chunk.js";
import { o as g, J as w, S as N, a as C, r as k, s as $, E as S } from "./lib-nodepkg-typedef.CtpP1aZU.chunk.js";
import { s as O, v as E, a as I, P as T, b as A, B as D } from "./lib-nodepkg-vueuikit.qGF7ZHJL.chunk.js";
import { I as R, a as J } from "./lib-nodepkg-vuematerial.lbF8se0E.chunk.js";
import { m as L, a as P, b as M, c as B, d as _ } from "./webapp-vuekit-layout.5YlcGs1I.chunk.js";
import { O as W, s as j, m as z, f as H, d as F, t as U, E as V, c as K, B as X, S as q } from "./vendor-rxjs.Ceq9fhEZ.chunk.js";
import { i as G, g as Q, a as Y, b as Z, s as ee, l as et, c as en, d as el, e as ea } from "./vendor-innoai-tech-lodash.1IBb5NLI.chunk.js";
import { M as ei } from "./lib-nodepkg-vuemarkdown.BG0YMncm.chunk.js";
const _er = class _er extends W {
  constructor(e5, t2) {
    super((e6) => {
      let t3 = __privateGet(this, _e).subscribe(e6);
      return () => {
        t3.unsubscribe();
      };
    });
    __privateAdd(this, _e, new i({}));
    __privateAdd(this, _t, new i({}));
    this.typedef = e5, this.initials = t2, __privateGet(this, _e).next(t2);
  }
  static of(e5, t2) {
    return new _er(e5, null != t2 ? t2 : "array" == e5.type ? [] : {});
  }
  isDirty(e5, t2) {
    if (!G(e5)) {
      let n2 = Q(this.initials, t2);
      return Y(n2) || n2 !== e5;
    }
    return false;
  }
  update(e5, t2, n2) {
    if (__privateGet(this, _t).next({}), 0 == e5.length) {
      __privateGet(this, _e).next(t2);
      return;
    }
    Z(t2) ? __privateGet(this, _e).next((l2) => {
      let a2 = Q(l2, e5, n2);
      t2(a2), ee(l2, e5, a2);
    }) : __privateGet(this, _e).next((n3) => {
      ee(n3, e5, t2);
    });
  }
  delete(e5) {
    0 != e5.length && __privateGet(this, _e).next((t2) => {
      let n2 = et(e5);
      if (en(n2)) {
        let l3 = e5.slice(0, e5.length - 1), a3 = l3.length > 0 ? Q(t2, l3) : t2;
        if (el(a3)) {
          a3.splice(n2, 1);
          return;
        }
      }
      let l2 = e5.slice(0, e5.length - 1), a2 = l2.length > 0 ? Q(t2, l2) : t2;
      delete a2[n2];
    });
  }
  get error$() {
    return __privateGet(this, _t);
  }
  setError(e5, t2) {
    let n2 = w.create(e5);
    __privateGet(this, _t).next((e6) => {
      null === t2 ? delete e6[n2] : e6[n2] = t2;
    });
  }
};
_e = new WeakMap();
_t = new WeakMap();
let er = _er;
let eo = a(() => new er(g(), {})), ed = a(() => ({})), es = O("span", { displayName: "ActionToolbar" })({ px: 2, pos: "relative", display: "flex", alignItems: "center", gap: 8, visibility: "hidden" }), ep = O("span", (e5, t2) => {
  let {} = e5, { slots: n2 } = t2;
  return (e6) => {
    var t3;
    return r(e6, { children: r(es, { "data-visible-on-hover": true, children: null === (t3 = n2.default) || void 0 === t3 ? void 0 : t3.call(n2) }) });
  };
}, { displayName: "Actions" })({ display: "flex" }), ec = O(R, { displayName: "ActionBtn" })({ transition: "none", width: 24, height: 24, rounded: 12, [`& ${J}`]: { svg: { width: 18, height: 18 } } });
class eu extends i {
  static from(e5) {
    let t2 = new eu(false);
    return d(e5, j((e6) => e6 ? z(d(H(e6, "focus"), U(() => {
      t2.show();
    })), d(H(e6, "blur"), F(200), U(() => {
      t2.value && t2.hide();
    }))) : V), s()), t2;
  }
  show() {
    this.next(true);
  }
  hide() {
    this.next(false);
  }
}
let eh = A({ apply(e5) {
  let { elements: t2, rects: n2 } = e5;
  Object.assign(t2.floating.style, { width: `${n2.reference.width}px` });
} }), ey = o((e5, t2) => {
  var n2;
  let { emit: l2, slots: a2, render: i2 } = t2, o2 = null !== (n2 = e5.open$) && void 0 !== n2 ? n2 : new eu(false), s2 = (e6) => {
    let t3 = [e6.target, ...e6.composedPath()].find((e7) => {
      var t4;
      return null == e7 ? void 0 : null === (t4 = e7.hasAttribute) || void 0 === t4 ? void 0 : t4.call(e7, "data-value");
    });
    if (t3) {
      let e7 = t3.getAttribute("data-value");
      Y(e7) || (l2("selected", e7), o2.hide());
    }
  };
  return d(o2, i2((e6) => {
    var t3, n3, l3, i3;
    return r(T, { isOpen: e6, onClickOutside: () => o2.hide(), onEscKeydown: () => o2.hide(), placement: "bottom-start", middleware: [eh], $content: r(ev, { onClick: s2, children: null === (t3 = a2.content) || void 0 === t3 ? void 0 : t3.call(a2) }), children: null !== (i3 = null === (l3 = a2.default) || void 0 === l3 ? void 0 : null === (n3 = l3.call(a2)) || void 0 === n3 ? void 0 : n3[0]) && void 0 !== i3 ? i3 : null });
  }));
}, { displayName: "Menu", props: ["open$"], emits: ["selected"] });
o((e5, t2) => {
  var n2;
  let { slots: l2, render: a2 } = t2, i2 = null !== (n2 = e5.open$) && void 0 !== n2 ? n2 : new eu(false);
  return d(i2, a2((e6) => {
    var t3, n3, a3, o2;
    return r(T, { isOpen: e6, onClickOutside: () => i2.hide(), placement: "bottom-start", $content: r(ev, { children: null === (t3 = l2.content) || void 0 === t3 ? void 0 : t3.call(l2) }), children: null !== (o2 = null === (a3 = l2.default) || void 0 === a3 ? void 0 : null === (n3 = a3.call(l2)) || void 0 === n3 ? void 0 : n3[0]) && void 0 !== o2 ? o2 : null });
  }));
}, { displayName: "Popover", props: ["open$"] });
let ev = O("div", { displayName: "PopoverContainer" })({ textStyle: "sys.body-small", pos: "relative", roundedBottom: "sm", containerStyle: "sys.surface-container-lowest", borderBottom: "1px solid", borderRight: "1px solid", borderLeft: "1px solid", borderColor: E("sys.outline-variant", I(0.38)) }), em = O("div", { displayName: "MenuItem" })({ px: 8, py: 2, gap: 8, display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "right", textStyle: "sys.body-small", cursor: "pointer", _hover: { containerStyle: "sys.surface-container" }, _focus: { containerStyle: "sys.surface-container", outline: 0 } }), ef = o((e5, t2) => {
  let { slots: n2, render: l2 } = t2, a2 = new eu(false);
  return d(a2, l2((t3) => {
    var l3, i2;
    let o2 = null === (l3 = n2.default) || void 0 === l3 ? void 0 : l3.call(n2)[0];
    return r(T, { isOpen: t3, placement: null !== (i2 = e5.placement) && void 0 !== i2 ? i2 : "left", $content: r(eb, { children: r(ex, { children: n2.title() }) }), children: o2 ? p(o2, { onMouseover: () => {
      a2.show();
    }, onMouseout: () => {
      a2.hide();
    } }) : null });
  }));
}, { displayName: "Tooltip", props: ["placement"] }), ex = O("div", { displayName: "TooltipContainer" })({ py: 4, px: 12, rounded: "xs", shadow: "3", textStyle: "sys.body-small", containerStyle: "sys.on-surface", pos: "relative", zIndex: 100 }), eb = O("div", { displayName: "TooltipWrapper" })({ px: 8 }), eg = O("span", { displayName: "Token" })({ textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 12, lineHeight: 24, wordBreak: "keep-all", whiteSpace: "nowrap", font: "code", opacity: 0.3 }), ew = o((e5, t2) => {
  let { slots: n2 } = t2;
  return () => {
    var t3;
    return h(eC, { "data-deprecated": e5.deprecated, "data-optional": e5.optional, "data-nullable": e5.nullable, children: [n2.leading && r(eN, { "data-visible-on-hover": true, children: n2.leading() }), null === (t3 = n2.default) || void 0 === t3 ? void 0 : t3.call(n2)] });
  };
}, { displayName: "PropName", props: ["deprecated", "optional", "nullable"] }), eN = O(es, { displayName: "PropLeading" })({ position: "absolute", ml: -28 }), eC = O("div", { displayName: "PropNameView" })({ position: "relative", display: "flex", alignItems: "center", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", wordBreak: "keep-all", whiteSpace: "nowrap", border: "1px solid", borderColor: "rgba(0,0,0,0)", fontSize: 12, lineHeight: 24, _deprecated: { textDecoration: "line-through" }, _optional: { "&:after": { content: '"?"', color: "sys.secondary", opacity: 0.58 } } }), ek = O("div", { displayName: "LineTitle" })({ position: "absolute", zIndex: 1, left: 0, opacity: 0.58, fontSize: 10, lineHeight: 10, top: 0, "& > *": { display: "flex", alignItems: "center", gap: 4, "&::before": { content: '"// "', font: "code" } } }), e$ = O("div", { displayName: "LineError" })({ display: "block", fontSize: 10, lineHeight: 14, color: "sys.error" }), eS = O("div", { displayName: "LineContainer" })({ position: "relative", py: 4, _hover: { containerStyle: "sys.surface-container", "& [data-visible-on-hover]": { visibility: "visible" } }, "&:focus-within": { containerStyle: "sys.surface-container" }, _dirty: { bgColor: E("sys.warning-container", I(0.38)) }, _error: { bgColor: "sys.error-container" }, [`&:has(${ep})`]: { [`& > ${e$}`]: { display: "none" }, _error: { bgColor: "inherit" } } }), eO = a(() => ({ indent: 0, $container: c(null) }), { name: "IntentContext" }), eE = u((e5, t2) => {
  let { slots: n2 } = t2, l2 = eO.use(), a2 = c(null), i2 = c(null);
  return () => {
    var t3, o2, d2, s2, p2;
    return h(v, { children: [r(eg, { children: e5.openToken }), null === (t3 = n2.leading) || void 0 === t3 ? void 0 : t3.call(n2), h(y, { to: l2.$container.value, children: [h(eA, { "data-indent": l2.indent, children: [r(eT, { ref: a2 }), r(eD, { ref: i2 }), i2.value && r(eO, { value: { $container: i2, indent: 1 + (null !== (s2 = l2.indent) && void 0 !== s2 ? s2 : 0) }, children: null === (o2 = n2.trailing) || void 0 === o2 ? void 0 : o2.call(n2) })] }), r(eR, { style: { paddingLeft: `${32 * l2.indent}px`, display: "flex" }, children: r(eg, { children: e5.closeToken }) })] }), a2.value && r(eO, { value: { $container: a2, indent: 1 + (null !== (p2 = l2.indent) && void 0 !== p2 ? p2 : 0) }, children: null === (d2 = n2.default) || void 0 === d2 ? void 0 : d2.call(n2) })] });
  };
}, { displayName: "Block", props: ["openToken", "closeToken"] }), eI = o((e5, t2) => {
  let { slots: n2, render: l2 } = t2, a2 = eO.use(), i2 = d(eo.use().error$, l2((t3) => {
    var l3;
    let i3 = w.create(e5.path), o2 = !e5.viewOnly && !!t3[i3];
    return h(eS, { "data-error": o2, "data-dirty": e5.dirty, style: { paddingLeft: `${32 * a2.indent}px` }, children: [(e5.title || e5.description) && r(ek, { style: { paddingLeft: `${32 * a2.indent}px` }, children: e5.description ? r(ef, { $title: r(eJ, { children: r(ei, { text: e5.description }) }), children: h("div", { children: [e5.title, " ", r(J, { path: L })] }) }) : r("span", { children: e5.title }) }), r(eR, { children: null === (l3 = n2.default) || void 0 === l3 ? void 0 : l3.call(n2) }), o2 && r(e$, { children: `${t3[i3]}` })] });
  }));
  return () => r(y, { to: a2.$container.value, children: i2 });
}, { displayName: "Line", props: ["path", "dirty", "viewOnly", "title", "description"] }), eT = O("div", { displayName: "Lines" })({}), eA = O("section", { displayName: "LineSection" })({}), eD = O("div", { displayName: "LinesTrailing" })({}), eR = O("div", { displayName: "LineRow" })({ display: "flex", alignItems: "start", pr: 10 }), eJ = O("span", { displayName: "Description" })({ display: "block", textStyle: "sys.body-small", "& p": { my: 1, wordBreak: "keep-all", whiteSpace: "nowrap", opacity: 0.7 }, "& code": { wordBreak: "keep-all", whiteSpace: "nowrap" } }), eL = O("form", { displayName: "FormControls" })({ display: "flex", pos: "absolute", right: 0, bottom: 0, px: 8 });
O("div", { displayName: "FormContainer" })({ display: "flex", flexDirection: "column", pos: "relative", textarea: { minW: 400, outline: "none", border: "none", bg: "none", py: 8, px: 12 } }), O("div", { displayName: "FormContainerAsRow" })({ display: "flex", alignItems: "center", gap: 8, pos: "relative", px: 8, input: { outline: "none", border: "none", bg: "none", minWidth: "10vw", py: 8, px: 12 }, [`& ${eL}`]: { pos: "relative", px: 0 } });
let eP = m(function() {
  if (l) return n;
  l = 1;
  var a2 = t ? e : (t = 1, e = function() {
    var e5 = document.getSelection();
    if (!e5.rangeCount) return function() {
    };
    for (var t2 = document.activeElement, n2 = [], l2 = 0; l2 < e5.rangeCount; l2++) n2.push(e5.getRangeAt(l2));
    switch (t2.tagName.toUpperCase()) {
      case "INPUT":
      case "TEXTAREA":
        t2.blur();
        break;
      default:
        t2 = null;
    }
    return e5.removeAllRanges(), function() {
      "Caret" === e5.type && e5.removeAllRanges(), e5.rangeCount || n2.forEach(function(t3) {
        e5.addRange(t3);
      }), t2 && t2.focus();
    };
  }), i2 = { "text/plain": "Text", "text/html": "Url", default: "Text" };
  return n = function(e5, t2) {
    var n2, l2, r2, o2, d2, s2, p2, c2, u2 = false;
    t2 || (t2 = {}), r2 = t2.debug || false;
    try {
      if (d2 = a2(), s2 = document.createRange(), p2 = document.getSelection(), (c2 = document.createElement("span")).textContent = e5, c2.ariaHidden = "true", c2.style.all = "unset", c2.style.position = "fixed", c2.style.top = 0, c2.style.clip = "rect(0, 0, 0, 0)", c2.style.whiteSpace = "pre", c2.style.webkitUserSelect = "text", c2.style.MozUserSelect = "text", c2.style.msUserSelect = "text", c2.style.userSelect = "text", c2.addEventListener("copy", function(n3) {
        if (n3.stopPropagation(), t2.format) {
          if (n3.preventDefault(), void 0 === n3.clipboardData) {
            r2 && console.warn("unable to use e.clipboardData"), r2 && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
            var l3 = i2[t2.format] || i2.default;
            window.clipboardData.setData(l3, e5);
          } else n3.clipboardData.clearData(), n3.clipboardData.setData(t2.format, e5);
        }
        t2.onCopy && (n3.preventDefault(), t2.onCopy(n3.clipboardData));
      }), document.body.appendChild(c2), s2.selectNodeContents(c2), p2.addRange(s2), !document.execCommand("copy")) throw Error("copy command was unsuccessful");
      u2 = true;
    } catch (a3) {
      r2 && console.error("unable to copy using execCommand: ", a3), r2 && console.warn("trying IE specific stuff");
      try {
        window.clipboardData.setData(t2.format || "text", e5), t2.onCopy && t2.onCopy(window.clipboardData), u2 = true;
      } catch (a4) {
        r2 && console.error("unable to copy using clipboardData: ", a4), r2 && console.error("falling back to prompt"), n2 = "message" in t2 ? t2.message : "Copy to clipboard: #{key}, Enter", l2 = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C", o2 = n2.replace(/#{\s*key\s*}/g, l2), window.prompt(o2, e5);
      }
    } finally {
      p2 && ("function" == typeof p2.removeRange ? p2.removeRange(s2) : p2.removeAllRanges()), c2 && document.body.removeChild(c2), d2();
    }
    return u2;
  };
}()), eM = o((e5, t2) => {
  let {} = t2;
  return () => r(ef, { $title: "复制当前节点为 JSON 字符串", children: r(ec, { type: "button", onClick: () => eP(JSON.stringify(e5.value, null, 2)), children: r(J, { path: P }) }) });
}, { displayName: "CopyAsJSONIconBtn", props: ["value"] });
class eB extends X {
  static from(e5) {
    let t2 = new eB("");
    return d(e5, j((e6) => e6 ? d(H(e6, "input"), U((e7) => {
      t2.next(e7.target.value.trim());
    })) : V), s()), t2;
  }
}
class e_ extends q {
  static from(e5) {
    let t2 = new e_();
    return d(e5, j((e6) => e6 ? z(d(H(e6, "keypress"), U((e7) => {
      "Enter" !== e7.key || e7.shiftKey || (e7.preventDefault(), t2.next({ type: "COMMIT" }));
    })), d(H(e6, "keydown"), U((e7) => {
      switch (e7.key) {
        case "Tab":
        case "ArrowDown":
          e7.target.getAttribute("data-options") && (e7.preventDefault(), t2.next({ type: "SELECT", direction: 1 }));
          break;
        case "ArrowUp":
          e7.target.getAttribute("data-options") && (e7.preventDefault(), t2.next({ type: "SELECT", direction: -1 }));
      }
    })), d(H(e6, "keyup"), U((e7) => {
      "Escape" === e7.key && t2.next({ type: "CANCEL" });
    }))) : V), s()), t2;
  }
}
class eW extends W {
  constructor() {
    super((e5) => {
      let t2 = __privateGet(this, _n).subscribe(e5);
      return () => t2.unsubscribe();
    });
    __privateAdd(this, _n, new X(null));
  }
  static sync(e5, t2) {
    return d(z(d(e5, U((e6) => {
      e6 && e6 == w.create(t2.path()) && t2.editing$.show();
    })), d(t2.editing$, F(1), U((n2) => {
      n2 || e5.disable(t2.path());
    })), d(K([t2.value$, e5]), F(1), U((n2) => {
      let [l2, a2] = n2;
      Y(l2) && !a2 && e5.enable(t2.path());
    }))), s());
  }
  enable(e5) {
    __privateGet(this, _n).value || __privateGet(this, _n).next(w.create(e5));
  }
  disable(e5) {
    __privateGet(this, _n).value === w.create(e5) && __privateGet(this, _n).next(null);
  }
}
_n = new WeakMap();
let ej = a(() => new eW()), ez = o((e5, t2) => {
  let n2, { render: l2 } = t2, a2 = f(null), o2 = f(null), p2 = f(null), c2 = e_.from(p2), u2 = eB.from(p2), y2 = ej.use(), v2 = eu.from(p2), m2 = eo.use();
  eW.sync(y2, { editing$: v2, value$: e5.value$, path: () => e5.ctx.path });
  let b2 = () => {
    if ("enums" === e5.typedef.type) {
      var t3;
      let n3 = (null !== (t3 = N.schemaProp(e5.typedef, "enum")) && void 0 !== t3 ? t3 : []).indexOf(e5.value);
      if (n3 > -1) return n3;
    }
    return 0;
  }, g2 = new i({ index: b2() }), w2 = () => {
    u2.next(""), v2.hide();
  }, C2 = () => {
    w2(), g2.next({ index: b2() }), Y(e5.value) && m2.delete(e5.ctx.path);
  }, k2 = (t3) => {
    var n3, l3, a3;
    if ("enums" === e5.typedef.type) {
      let l4 = null !== (n3 = N.schemaProp(e5.typedef, "enum")) && void 0 !== n3 ? n3 : [];
      null != t3 || (t3 = l4[g2.value.index % l4.length]);
    } else null != t3 || (t3 = (null === (l3 = p2.value) || void 0 === l3 ? void 0 : l3.value) ? null === (a3 = p2.value) || void 0 === a3 ? void 0 : a3.value : void 0);
    if (Y(t3)) {
      m2.delete(e5.ctx.path);
      return;
    }
    let [i2, r2] = e5.typedef.validate(t3, { coerce: true });
    if (i2) {
      m2.setError(e5.ctx.path, i2.message);
      return;
    }
    m2.update(e5.ctx.path, r2), w2();
  };
  return (e5.allowRawJSON && d(u2, U((t3) => {
    let n3 = t3.trim();
    if (n3.startsWith("{") && n3.endsWith("}") || n3.startsWith("[") && n3.endsWith("]")) try {
      let t4 = JSON.parse(n3);
      m2.update(e5.ctx.path, t4), w2();
    } catch (t4) {
      m2.setError(e5.ctx.path, "无效的 JSON 字符串");
    }
  }), s()), d(c2, U((e6) => {
    switch (e6.type) {
      case "SELECT":
        g2.next((t3) => {
          t3.index += e6.direction;
        });
        break;
      case "COMMIT":
        k2();
        break;
      case "CANCEL":
        C2();
    }
  }), s()), d(z(d(o2, x((e6) => {
    if (e6) {
      let t3 = new ResizeObserver((e7) => {
        for (let l3 of e7) if (l3.contentBoxSize) {
          var t4;
          n2 = null === (t4 = l3.contentBoxSize[0]) || void 0 === t4 ? void 0 : t4.blockSize;
        }
      });
      return t3.observe(e6), () => {
        t3.disconnect();
      };
    }
    return () => {
    };
  })), d(p2, F(1), U((e6) => {
    e6 && (null == e6 || e6.focus(), e6.value && (e6.selectionStart = 0, e6.selectionEnd = e6.value.length));
  })), d(p2, j((e6) => {
    if (e6) {
      let t3 = null != n2 ? n2 : e6.getBoundingClientRect().height, l3 = (e7) => {
        e7.style.height = `${null != t3 ? t3 : 0}px`, e7.style.height = `${e7.scrollHeight}px`;
      };
      return l3(e6), z(d(H(e6, "blur"), U((t4) => {
        if (t4.relatedTarget) {
          var n3, l4;
          if ((null === (n3 = o2.value) || void 0 === n3 ? void 0 : n3.contains(t4.relatedTarget)) || (null === (l4 = a2.value) || void 0 === l4 ? void 0 : l4.contains(t4.relatedTarget))) return;
        }
        t4.preventDefault(), k2(e6.value);
      })), d(H(e6, "input"), U((e7) => {
        l3(e7.target), u2.next(e7.target.value);
      })));
    }
    return V;
  }))), s()), "enums" == e5.typedef.type) ? d(K([e5.value$, v2, g2]), l2((t3) => {
    var n3, l3, i2;
    let [d2, s2, { index: c3 }] = t3, u3 = null !== (n3 = N.schemaProp(e5.typedef, "enum")) && void 0 !== n3 ? n3 : [], h2 = null !== (l3 = N.metaProp(e5.typedef, "enumLabels")) && void 0 !== l3 ? l3 : [];
    return r(eF, { ref: o2, onClick: () => {
      v2.show();
    }, "data-type": typeof d2, tabindex: 0, children: s2 ? r(ey, { onSelected: (e6) => {
      k2(e6);
    }, open$: v2, $content: r("div", { ref: a2, children: u3.map((e6, t4) => r(eV, { "data-focus": c3 % u3.length === t4, value: e6, label: h2[t4] })) }), children: r("div", { "data-input-wrapper": true, children: r("input", { value: void 0 == d2 ? "" : `${d2}`, ref: p2, "data-options": true }) }) }) : r("span", { children: null !== (i2 = JSON.stringify(d2)) && void 0 !== i2 ? i2 : "undefined" }) });
  })) : d(K([e5.value$, v2]), l2((e6) => {
    var t3;
    let [n3, l3] = e6;
    return r(eF, { ref: o2, onClick: () => {
      v2.show();
    }, "data-type": typeof n3, tabindex: 0, onFocus: () => {
      v2.show();
    }, children: l3 ? r(T, { isOpen: true, placement: "right-start", $content: h(eH, { ref: a2, children: [r(ec, { type: "button", onClick: () => c2.next({ type: "CANCEL" }), children: r(J, { path: M }) }), r(ec, { type: "button", onClick: () => c2.next({ type: "COMMIT" }), children: r(J, { path: B }) })] }), children: r("div", { "data-input-wrapper": true, children: r("textarea", { ref: p2, rows: 1, value: void 0 == n3 ? "" : `${n3}` }) }) }) : r("span", { "data-value": true, children: null !== (t3 = JSON.stringify(n3)) && void 0 !== t3 ? t3 : "undefined" }) });
  }));
}, { displayName: "ValueInput", props: ["typedef", "ctx", "value", "allowRawJSON"] }), eH = O("div", { displayName: "ValueInputActions" })({ borderRight: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: E("sys.outline-variant", I(0.38)), containerStyle: "sys.surface-container-lowest", roundedRight: "sm", display: "flex", px: 2, ml: -4 }), eF = O("div", { displayName: "ValueContainer" })({ wordBreak: "keep-all", whiteSpace: "nowrap", cursor: "pointer", display: "flex", alignItems: "center", font: "code", width: "100%", textStyle: "sys.label-small", fontSize: 12, lineHeight: 24, gap: 8, "& [data-value]": { border: "1px solid", borderColor: "rgba(0,0,0,0)", maxWidth: "40vw", width: "100%", overflow: "hidden", textOverflow: "ellipsis", _hover: { textOverflow: "clip", whiteSpace: "normal", wordBreak: "break-all" } }, "& [data-input-wrapper]": { width: "100%", maxWidth: "40vw", display: "flex", alignItems: "center", border: "1px solid", overflow: "hidden", borderColor: E("sys.outline-variant", I(0.38)) }, "& textarea,input": { border: "1px solid", borderColor: "rgba(0,0,0,0)", flex: 1, rounded: "xs", containerStyle: "sys.surface-container-lowest", width: "100%", outline: "none", px: 8, py: 0, m: 0, fontSize: "inherit", color: "inherit", lineHeight: "inherit", overflow: "hidden", resize: "none", "&[data-options]:focus": { roundedBottom: 0 } }, _type__string: { color: "sys.primary" }, _type__number: { color: "sys.primary" }, _type__boolean: { color: "sys.warning" }, _type__undefined: { color: "sys.error" } }), eU = O(em, { displayName: "EnumMenuItemContainer" })({ [`& ${ew}`]: { textAlign: "left" } }), eV = u((e5) => () => h(eU, { "data-value": e5.value, tabindex: 0, children: [r(ew, { children: e5.value }), e5.label && r(eJ, { children: e5.label })] }), { displayName: "EnumMenuItem", props: ["value", "label"] }), eK = o((e5, t2) => {
  let {} = e5, { emit: n2 } = t2;
  return () => r(ef, { $title: "删除属性", children: r(ec, { type: "button", onClick: () => n2("remove"), children: r(J, { path: _ }) }) });
}, { displayName: "RemovePropIconBtn", emits: ["remove"] }), eX = o((e5, t2) => {
  let { render: n2 } = t2, l2 = eo.use(), a2 = ed.use();
  return d(e5.value$, n2((t3) => r(eE, { openToken: "{", closeToken: "}", $leading: r(ep, { children: r(eM, { value: t3 }) }), $trailing: r(eq, { ctx: e5.ctx, onAdd: (t4) => {
    l2.update([...e5.ctx.path, t4], void 0);
  }, options: [...e5.typedef.entries(t3, e5.ctx)].filter((e6) => {
    let [n3] = e6;
    return !Object.hasOwn(t3, n3);
  }).map((e6) => {
    let [t4, n3, l3] = e6;
    return { propName: String(t4), typedef: l3 };
  }) }, "prop-input"), children: [...e5.typedef.entries(t3, e5.ctx)].map((n3) => {
    var i2;
    let [o2, d2, s2] = n3;
    if (!Object.hasOwn(t3, o2)) return null;
    let p2 = [...e5.ctx.path, o2];
    return h(eI, { path: p2, dirty: l2.isDirty(d2, p2), title: N.metaProp(s2, "title"), description: N.metaProp(s2, "description"), children: [r(ew, { deprecated: N.schemaProp(s2, "deprecated"), $leading: r(eK, { onRemove: () => {
      l2.delete(p2);
    } }), children: String(o2) }), h(eg, { children: [":", " "] }), null === (i2 = a2.$value) || void 0 === i2 ? void 0 : i2.call(a2, s2, d2, { ...e5.ctx, path: p2, branch: [...e5.ctx.branch, d2] })] });
  }) })));
}, { displayName: "ObjectInput", props: ["typedef", "ctx", "value"] }), eq = o((e5, t2) => {
  let { emit: n2, render: l2 } = t2, a2 = f(null), o2 = e_.from(a2), p2 = eB.from(a2), c2 = eu.from(a2), u2 = eo.use(), y2 = new i({ index: 0 }), v2 = () => {
    c2.hide(), p2.next(""), a2.value && (a2.value.value = "", a2.value.blur()), y2.next({ index: 0 });
  };
  d(p2, U((t3) => {
    let n3 = t3.trim();
    if (n3.startsWith("{") && n3.endsWith("}")) try {
      let t4 = JSON.parse(n3);
      u2.update(e5.ctx.path, t4), v2();
    } catch (t4) {
      u2.setError(e5.ctx.path, "无效的 JSON 字符串");
    }
  }), s());
  let m2 = (t3) => {
    if (e5.options) {
      var l3;
      null != t3 || (t3 = null === (l3 = e5.options[y2.value.index % e5.options.length]) || void 0 === l3 ? void 0 : l3.propName);
    } else null != t3 || (t3 = p2.value);
    t3 ? (n2("add", t3), v2()) : u2.setError([...e5.ctx.path, N.RecordKey], "无效的属性值");
  };
  d(o2, U((e6) => {
    switch (e6.type) {
      case "SELECT":
        y2.next((t3) => {
          t3.index += e6.direction;
        });
        break;
      case "COMMIT":
        m2();
        break;
      case "CANCEL":
        v2();
    }
  }), s());
  let x2 = d(c2, l2((e6) => r("div", { "data-input-wrapper": true, children: r("input", { ref: a2, type: "text", placeholder: "添加属性 (可粘贴 JSON 字符串)", "data-options": e6 }) })));
  return d(K([p2, c2, y2, e5.options$]), l2((t3) => {
    let [n3, l3, i2, d2] = t3;
    return d2 ? d2.length > 0 ? r(eI, { path: e5.ctx.path, children: r(eF, { sx: { mx: -4 }, children: r(ey, { onSelected: (e6) => {
      m2(e6);
    }, open$: c2, $content: r("div", { children: d2.map((e6, t4) => n3 && !e6.propName.includes(n3) ? null : r(eG, { propName: e6.propName, typedef: e6.typedef, "data-focus": t4 === i2.index % d2.length })) }), children: x2 }) }) }) : null : r(eI, { path: [...e5.ctx.path, N.RecordKey], children: r(eF, { sx: { mx: -4 }, children: r(T, { isOpen: l3, placement: "right-start", $content: h(eH, { children: [r(ec, { type: "button", onClick: () => o2.next({ type: "CANCEL" }), children: r(J, { path: M }) }), r(ec, { type: "button", onClick: () => o2.next({ type: "COMMIT" }), children: r(J, { path: B }) })] }), children: r("div", { "data-input-wrapper": true, children: r("input", { ref: a2, type: "text", placeholder: "添加属性 (可粘贴 JSON 字符串)" }) }) }) }) });
  }));
}, { displayName: "PropValueInput", props: ["ctx", "options"], emits: ["add"] }), eG = u((e5) => () => h(eQ, { "data-value": e5.propName, tabindex: 0, children: [r(ew, { optional: N.schemaProp(e5.typedef, N.optional), children: e5.propName }), r(eJ, { children: N.metaProp(e5.typedef, "title") })] }), { displayName: "PropMenuItem", props: ["propName", "typedef"] }), eQ = O(em, { displayName: "AddPropMenuItemContainer" })({ [`& ${ew}`]: { textAlign: "left" } }), eY = o((e5, t2) => {
  let { render: n2 } = t2, l2 = eo.use(), a2 = ed.use();
  return d(e5.value$, n2((t3) => r(eE, { openToken: "[", closeToken: "]", $leading: r(ep, { children: r(eM, { value: t3 }) }), $trailing: r(eZ, { ctx: e5.ctx, typedef: e5.typedef, onAdd: (t4) => {
    l2.update(e5.ctx.path, (e6) => {
      e6.push(t4);
    }, []);
  } }), children: [...e5.typedef.entries(t3, e5.ctx)].map((t4) => {
    var n3;
    let [i2, o2, d2] = t4, s2 = [...e5.ctx.path, i2];
    return h(eI, { path: s2, dirty: l2.isDirty(o2, s2), children: [r(ew, { $leading: r(e0, { onRemove: () => {
      l2.delete(s2);
    } }), children: r(D, { sx: { opacity: 0.3, mr: "0.5em" }, children: String(i2) }) }), null === (n3 = a2.$value) || void 0 === n3 ? void 0 : n3.call(a2, d2, o2, { ...e5.ctx, path: s2, branch: [...e5.ctx.branch, o2] })] });
  }) })));
}, { displayName: "ArrayInput", props: ["ctx", "value", "typedef"] }), eZ = o((e5, t2) => {
  let { emit: n2, render: l2 } = t2, a2 = f(null), i2 = eB.from(a2), o2 = e_.from(a2), p2 = eu.from(a2), c2 = eo.use(), u2 = () => {
    a2.value && (a2.value.value = "", a2.value.blur());
  }, y2 = (t3) => {
    if (null != t3 || (t3 = i2.value), t3) {
      let [l3, a3] = N.schemaProp(e5.typedef, "items").validate(t3, { coerce: true });
      if (l3) {
        c2.setError(e5.ctx.path, l3);
        return;
      }
      n2("add", a3);
    } else n2("add", void 0);
    u2();
  };
  d(i2, U((t3) => {
    let n3 = t3.trim();
    if (n3.startsWith("[") && n3.endsWith("]")) try {
      let t4 = JSON.parse(n3);
      c2.update(e5.ctx.path, t4), u2();
    } catch (t4) {
      c2.setError(e5.ctx.path, "无效的 JSON 字符串");
    }
    if (n3.startsWith("{") && n3.endsWith("}")) try {
      y2(JSON.parse(n3));
    } catch (t4) {
      c2.setError(e5.ctx.path, "无效的 JSON 字符串");
    }
  }), s()), d(o2, U((e6) => {
    switch (e6.type) {
      case "COMMIT":
        y2();
        break;
      case "CANCEL":
        u2();
    }
  }), s());
  let v2 = d(p2, l2((e6) => r(T, { isOpen: e6, placement: "right-start", $content: h(eH, { children: [r(ec, { type: "button", onClick: () => o2.next({ type: "CANCEL" }), children: r(J, { path: M }) }), r(ec, { type: "button", onClick: () => o2.next({ type: "COMMIT" }), children: r(J, { path: B }) })] }), children: r("div", { "data-input-wrapper": true, children: r("input", { ref: a2, type: "text", placeholder: "添加数组项 (可粘贴 JSON 字符串)" }) }) })));
  return () => r(eI, { path: e5.ctx.path, children: r(eF, { sx: { mx: -4 }, children: v2 }) });
}, { displayName: "AddItemIconBtn", props: ["ctx", "typedef"], emits: ["add"] }), e0 = o((e5, t2) => {
  let {} = e5, { emit: n2 } = t2;
  return () => r(ef, { $title: "移除项", children: r(ec, { type: "button", onClick: () => n2("remove"), children: r(J, { path: _ }) }) });
}, { displayName: "RemoteItemIconBtn", emits: ["remove"] }), e1 = o((e5, t2) => {
  let { render: n2 } = t2, l2 = eo.use(), a2 = ed.use();
  return d(e5.value$, n2((t3) => r(eE, { openToken: "{", closeToken: "}", $leading: r(ep, { children: r(eM, { value: t3 }) }), $trailing: r(eq, { ctx: e5.ctx, onAdd: (t4) => {
    l2.update([...e5.ctx.path, t4], void 0);
  } }, "prop-input"), children: [...e5.typedef.entries(t3, e5.ctx)].map((n3) => {
    var i2;
    let [o2, d2, s2] = n3;
    if (!Object.hasOwn(t3, o2)) return null;
    let p2 = [...e5.ctx.path, o2];
    return h(eI, { path: p2, dirty: l2.isDirty(d2, p2), children: [r(ew, { $leading: r(eK, { onRemove: () => {
      l2.delete(p2);
    } }), children: String(o2) }), h(eg, { children: [":", " "] }), null === (i2 = a2.$value) || void 0 === i2 ? void 0 : i2.call(a2, s2, d2, { ...e5.ctx, path: p2, branch: [...e5.ctx.branch, d2] })] });
  }) })));
}, { displayName: "RecordInput", props: ["ctx", "value", "typedef"] }), e2 = o((e5, t2) => {
  let { render: n2 } = t2;
  return d(e5.value$, n2((t3) => el(t3) ? r(eY, { value: t3, typedef: C(), ctx: e5.ctx }) : ea(t3) ? r(e1, { value: t3, typedef: k($(), C()), ctx: e5.ctx }) : r(ez, { value: t3, typedef: C(), ctx: e5.ctx, allowRawJSON: true })));
}, { displayName: "AnyInput", props: ["typedef", "ctx", "value"] }), e8 = (e5, t2, n2) => "object" == e5.type || "intersection" == e5.type || "union" == e5.type && N.schemaProp(e5, "discriminator") ? r(eX, { typedef: e5, value: null != t2 ? t2 : {}, ctx: n2 }) : "union" == e5.type && Y(N.schemaProp(e5, "discriminator")) ? r(ez, { typedef: e5, value: t2, ctx: n2 }) : "record" == e5.type ? r(e1, { typedef: e5, value: t2, ctx: n2 }) : "array" == e5.type ? r(eY, { typedef: e5, value: t2, ctx: n2 }) : "any" == e5.type || "unknown" == e5.type ? r(e2, { typedef: e5, value: t2, ctx: n2 }) : r(ez, { typedef: e5, value: t2, ctx: n2 }), e4 = o((e5, t2) => {
  let {} = e5, { render: n2 } = t2, l2 = eo.use(), a2 = ed.use(), i2 = b(null);
  return d(l2, n2((e6) => {
    var t3, n3;
    let o2 = null !== (t3 = a2.$value) && void 0 !== t3 ? t3 : e8;
    return r(ej, { children: r(ed, { value: { $value: null !== (n3 = a2.$value) && void 0 !== n3 ? n3 : e8 }, children: h(e3, { children: [r("section", { ref: i2 }), i2.value && r(eO, { value: { indent: 0, $container: i2 }, children: r(eI, { path: [], viewOnly: true, children: o2(l2.typedef, e6, S) }) })] }) }) });
  }));
}, { displayName: "JSONEditorView" }), e3 = O("div", { displayName: "JSONEditorContainer" })({ width: "100%", height: "100%", overflow: "auto", section: { display: "flex", flexDirection: "column", minWidth: "max-content" } });
export {
  er as J,
  eo as a,
  e4 as b,
  eP as c
};
