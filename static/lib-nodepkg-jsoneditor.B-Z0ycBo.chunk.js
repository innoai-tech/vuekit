var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _e, _t, _n;
var e, t, n, a;
import { c as r, I as i, j as l, a as o, r as s, s as d, b as p, d as c, e as u, f as h, T as y, F as m, o as f, t as x, g as v } from "./lib-nodepkg-vuekit.iZz6KoUH.chunk.js";
import { J as b, o as g, g as w, S as N, a as C, b as k, r as S, s as $, E as O } from "./lib-nodepkg-typedef.CYjeQHiI.chunk.js";
import { s as E, a as I, P as T, v as A, b as D, B as R } from "./lib-nodepkg-vueuikit.CtWkpL3v.chunk.js";
import { I as J, a as L } from "./lib-nodepkg-vuematerial.CEmpTi6I.chunk.js";
import { m as P, a as M, b as B, c as _, d as W } from "./webapp-vuekit-layout.DMwQ5a96.chunk.js";
import { O as j, s as z, m as H, f as V, d as F, t as U, E as K, c as X, B as q, S as G } from "./vendor-rxjs.l2K9P2ty.chunk.js";
import { i as Q, g as Y, a as Z, b as ee, s as et, l as en, c as ea, d as er, e as ei } from "./vendor-innoai-tech-lodash.ds7rw71w.chunk.js";
import { M as el } from "./lib-nodepkg-vuemarkdown.CViUWqqE.chunk.js";
const _eo = class _eo extends j {
  constructor(e9, t2) {
    super((e10) => {
      let t3 = __privateGet(this, _e).subscribe(e10);
      return () => {
        t3.unsubscribe();
      };
    });
    __privateAdd(this, _e, new i({}));
    __privateAdd(this, _t, new i({}));
    this.typedef = e9, this.initials = t2, __privateGet(this, _e).next(t2);
  }
  static of(e9, t2) {
    return new _eo(e9, t2 ?? ("array" == e9.type ? [] : {}));
  }
  isDirty(e9, t2) {
    if (!Q(e9)) {
      let n2 = Y(this.initials, t2);
      return Z(n2) || n2 !== e9;
    }
    return false;
  }
  update(e9, t2, n2) {
    if (__privateGet(this, _t).next({}), 0 == e9.length) {
      __privateGet(this, _e).next(t2);
      return;
    }
    ee(t2) ? __privateGet(this, _e).next((a2) => {
      let r2 = Y(a2, e9, n2);
      t2(r2), et(a2, e9, r2);
    }) : __privateGet(this, _e).next((n3) => {
      et(n3, e9, t2);
    });
  }
  delete(e9) {
    0 != e9.length && __privateGet(this, _e).next((t2) => {
      let n2 = en(e9);
      if (ea(n2)) {
        let a3 = e9.slice(0, e9.length - 1), r3 = a3.length > 0 ? Y(t2, a3) : t2;
        if (er(r3)) {
          r3.splice(n2, 1);
          return;
        }
      }
      let a2 = e9.slice(0, e9.length - 1), r2 = a2.length > 0 ? Y(t2, a2) : t2;
      delete r2[n2];
    });
  }
  get error$() {
    return __privateGet(this, _t);
  }
  setError(e9, t2) {
    let n2 = b.create(e9);
    __privateGet(this, _t).next((e10) => {
      null === t2 ? delete e10[n2] : e10[n2] = t2;
    });
  }
};
_e = new WeakMap();
_t = new WeakMap();
let eo = _eo;
let es = r(() => new eo(g(), {})), ed = r(() => ({})), ep = E("span", { displayName: "ActionToolbar" })({ px: 2, pos: "relative", display: "flex", alignItems: "center", gap: 8, visibility: "hidden" }), ec = E("span", (e9, t2) => {
  let { slots: n2 } = t2;
  return (e10) => {
    var _a;
    return l(e10, { children: l(ep, { "data-visible-on-hover": true, children: (_a = n2.default) == null ? void 0 : _a.call(n2) }) });
  };
}, { displayName: "Actions" })({ display: "flex" }), eu = E(J, { displayName: "ActionBtn" })({ transition: "none", width: 24, height: 24, rounded: 12, [`& ${L}`]: { svg: { width: 18, height: 18 } } });
class eh extends i {
  static from(e9) {
    let t2 = new eh(false);
    return s(e9, z((e10) => e10 ? H(s(V(e10, "focus"), U(() => {
      t2.show();
    })), s(V(e10, "blur"), F(200), U(() => {
      t2.value && t2.hide();
    }))) : K), d()), t2;
  }
  show() {
    this.next(true);
  }
  hide() {
    this.next(false);
  }
}
let ey = I({ apply(e9) {
  let { elements: t2, rects: n2 } = e9;
  Object.assign(t2.floating.style, { width: `${n2.reference.width}px` });
} }), em = o((e9, t2) => {
  let { emit: n2, slots: a2, render: r2 } = t2, i2 = e9.open$ ?? new eh(false), o2 = (e10) => {
    let t3 = [e10.target, ...e10.composedPath()].find((e11) => {
      var _a;
      return (_a = e11 == null ? void 0 : e11.hasAttribute) == null ? void 0 : _a.call(e11, "data-value");
    });
    if (t3) {
      let e11 = t3.getAttribute("data-value");
      Z(e11) || (n2("selected", e11), i2.hide());
    }
  };
  return s(i2, r2((e10) => {
    var _a, _b, _c;
    return l(T, { isOpen: e10, onClickOutside: () => i2.hide(), onEscKeydown: () => i2.hide(), placement: "bottom-start", middleware: [ey], $content: l(ef, { onClick: o2, children: (_a = a2.content) == null ? void 0 : _a.call(a2) }), children: ((_c = (_b = a2.default) == null ? void 0 : _b.call(a2)) == null ? void 0 : _c[0]) ?? null });
  }));
}, { displayName: "Menu", props: ["open$"], emits: ["selected"] });
o((e9, t2) => {
  let { slots: n2, render: a2 } = t2, r2 = e9.open$ ?? new eh(false);
  return s(r2, a2((e10) => {
    var _a, _b, _c;
    return l(T, { isOpen: e10, onClickOutside: () => r2.hide(), placement: "bottom-start", $content: l(ef, { children: (_a = n2.content) == null ? void 0 : _a.call(n2) }), children: ((_c = (_b = n2.default) == null ? void 0 : _b.call(n2)) == null ? void 0 : _c[0]) ?? null });
  }));
}, { displayName: "Popover", props: ["open$"] });
let ef = E("div", { displayName: "PopoverContainer" })({ textStyle: "sys.body-small", pos: "relative", roundedBottom: "sm", containerStyle: "sys.surface-container-lowest", borderBottom: "1px solid", borderRight: "1px solid", borderLeft: "1px solid", borderColor: A("sys.outline-variant", D(0.38)) }), ex = E("div", { displayName: "MenuItem" })({ px: 8, py: 2, gap: 8, display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "right", textStyle: "sys.body-small", cursor: "pointer", _hover: { containerStyle: "sys.surface-container" }, _focus: { containerStyle: "sys.surface-container", outline: 0 } }), ev = o((e9, t2) => {
  let { slots: n2, render: a2 } = t2, r2 = new eh(false);
  return s(r2, a2((t3) => {
    var _a;
    let a3 = (_a = n2.default) == null ? void 0 : _a.call(n2)[0];
    return l(T, { isOpen: t3, placement: e9.placement ?? "left", $content: l(eg, { children: l(eb, { children: n2.title() }) }), children: a3 ? p(a3, { onMouseover: () => {
      r2.show();
    }, onMouseout: () => {
      r2.hide();
    } }) : null });
  }));
}, { displayName: "Tooltip", props: ["placement"] }), eb = E("div", { displayName: "TooltipContainer" })({ py: 4, px: 12, rounded: "xs", shadow: "3", textStyle: "sys.body-small", containerStyle: "sys.on-surface", pos: "relative", zIndex: 100 }), eg = E("div", { displayName: "TooltipWrapper" })({ px: 8 }), ew = E("span", { displayName: "Token" })({ textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 12, lineHeight: 24, wordBreak: "keep-all", whiteSpace: "nowrap", font: "code", opacity: 0.3 }), eN = o((e9, t2) => {
  let { slots: n2 } = t2;
  return () => {
    var _a;
    return c(ek, { "data-deprecated": e9.deprecated, "data-optional": e9.optional, "data-nullable": e9.nullable, children: [n2.leading && l(eC, { "data-visible-on-hover": true, children: n2.leading() }), (_a = n2.default) == null ? void 0 : _a.call(n2)] });
  };
}, { displayName: "PropName", props: ["deprecated", "optional", "nullable"] }), eC = E(ep, { displayName: "PropLeading" })({ position: "absolute", ml: -28 }), ek = E("div", { displayName: "PropNameView" })({ position: "relative", display: "flex", alignItems: "center", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", wordBreak: "keep-all", whiteSpace: "nowrap", border: "1px solid", borderColor: "rgba(0,0,0,0)", fontSize: 12, lineHeight: 24, _deprecated: { textDecoration: "line-through" }, _optional: { "&:after": { content: '"?"', color: "sys.secondary", opacity: 0.58 } } }), eS = E("div", { displayName: "LineTitle" })({ position: "absolute", zIndex: 1, left: 0, opacity: 0.58, fontSize: 10, lineHeight: 10, top: 0, "& > *": { display: "flex", alignItems: "center", gap: 4, "&::before": { content: '"// "', font: "code" } } }), e$ = E("div", { displayName: "LineError" })({ display: "block", fontSize: 10, lineHeight: 14, color: "sys.error" }), eO = E("div", { displayName: "LineContainer" })({ position: "relative", py: 4, _hover: { containerStyle: "sys.surface-container", "& [data-visible-on-hover]": { visibility: "visible" } }, "&:focus-within": { containerStyle: "sys.surface-container" }, _dirty: { bgColor: A("sys.warning-container", D(0.38)) }, _error: { bgColor: "sys.error-container" }, [`&:has(${ec})`]: { [`& > ${e$}`]: { display: "none" }, _error: { bgColor: "inherit" } } }), eE = r(() => ({ indent: 0, $container: u(null) }), { name: "IntentContext" }), eI = h((e9, t2) => {
  let { slots: n2 } = t2, a2 = eE.use(), r2 = u(null), i2 = u(null);
  return () => {
    var _a, _b, _c;
    return c(m, { children: [l(ew, { children: e9.openToken }), (_a = n2.leading) == null ? void 0 : _a.call(n2), c(y, { to: a2.$container.value, children: [c(eD, { "data-indent": a2.indent, children: [l(eA, { ref: r2 }), l(eR, { ref: i2 }), i2.value && l(eE, { value: { $container: i2, indent: 1 + (a2.indent ?? 0) }, children: (_b = n2.trailing) == null ? void 0 : _b.call(n2) })] }), l(eJ, { style: { paddingLeft: `${32 * a2.indent}px`, display: "flex" }, children: l(ew, { children: e9.closeToken }) })] }), r2.value && l(eE, { value: { $container: r2, indent: 1 + (a2.indent ?? 0) }, children: (_c = n2.default) == null ? void 0 : _c.call(n2) })] });
  };
}, { displayName: "Block", props: ["openToken", "closeToken"] }), eT = o((e9, t2) => {
  let { slots: n2, render: a2 } = t2, r2 = eE.use(), i2 = s(es.use().error$, a2((t3) => {
    var _a;
    let a3 = b.create(e9.path), i3 = !e9.viewOnly && !!t3[a3];
    return c(eO, { "data-error": i3, "data-dirty": e9.dirty, style: { paddingLeft: `${32 * r2.indent}px` }, children: [(e9.title || e9.description) && l(eS, { style: { paddingLeft: `${32 * r2.indent}px` }, children: e9.description ? l(ev, { $title: l(eL, { children: l(el, { text: e9.description }) }), children: c("div", { children: [e9.title, " ", l(L, { path: P })] }) }) : l("span", { children: e9.title }) }), l(eJ, { children: (_a = n2.default) == null ? void 0 : _a.call(n2) }), i3 && l(e$, { children: `${t3[a3]}` })] });
  }));
  return () => l(y, { to: r2.$container.value, children: i2 });
}, { displayName: "Line", props: ["path", "dirty", "viewOnly", "title", "description"] }), eA = E("div", { displayName: "Lines" })({}), eD = E("section", { displayName: "LineSection" })({}), eR = E("div", { displayName: "LinesTrailing" })({}), eJ = E("div", { displayName: "LineRow" })({ display: "flex", alignItems: "start", pr: 10 }), eL = E("span", { displayName: "Description" })({ display: "block", textStyle: "sys.body-small", "& p": { my: 1, wordBreak: "keep-all", whiteSpace: "nowrap", opacity: 0.7 }, "& code": { wordBreak: "keep-all", whiteSpace: "nowrap" } }), eP = E("form", { displayName: "FormControls" })({ display: "flex", pos: "absolute", right: 0, bottom: 0, px: 8 });
E("div", { displayName: "FormContainer" })({ display: "flex", flexDirection: "column", pos: "relative", textarea: { minW: 400, outline: "none", border: "none", bg: "none", py: 8, px: 12 } }), E("div", { displayName: "FormContainerAsRow" })({ display: "flex", alignItems: "center", gap: 8, pos: "relative", px: 8, input: { outline: "none", border: "none", bg: "none", minWidth: "10vw", py: 8, px: 12 }, [`& ${eP}`]: { pos: "relative", px: 0 } });
let eM = w(function() {
  if (a) return n;
  a = 1;
  var r2 = t ? e : (t = 1, e = function() {
    var e9 = document.getSelection();
    if (!e9.rangeCount) return function() {
    };
    for (var t2 = document.activeElement, n2 = [], a2 = 0; a2 < e9.rangeCount; a2++) n2.push(e9.getRangeAt(a2));
    switch (t2.tagName.toUpperCase()) {
      case "INPUT":
      case "TEXTAREA":
        t2.blur();
        break;
      default:
        t2 = null;
    }
    return e9.removeAllRanges(), function() {
      "Caret" === e9.type && e9.removeAllRanges(), e9.rangeCount || n2.forEach(function(t3) {
        e9.addRange(t3);
      }), t2 && t2.focus();
    };
  }), i2 = { "text/plain": "Text", "text/html": "Url", default: "Text" };
  return n = function(e9, t2) {
    var n2, a2, l2, o2, s2, d2, p2, c2, u2 = false;
    t2 || (t2 = {}), l2 = t2.debug || false;
    try {
      if (s2 = r2(), d2 = document.createRange(), p2 = document.getSelection(), (c2 = document.createElement("span")).textContent = e9, c2.ariaHidden = "true", c2.style.all = "unset", c2.style.position = "fixed", c2.style.top = 0, c2.style.clip = "rect(0, 0, 0, 0)", c2.style.whiteSpace = "pre", c2.style.webkitUserSelect = "text", c2.style.MozUserSelect = "text", c2.style.msUserSelect = "text", c2.style.userSelect = "text", c2.addEventListener("copy", function(n3) {
        if (n3.stopPropagation(), t2.format) {
          if (n3.preventDefault(), void 0 === n3.clipboardData) {
            l2 && console.warn("unable to use e.clipboardData"), l2 && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
            var a3 = i2[t2.format] || i2.default;
            window.clipboardData.setData(a3, e9);
          } else n3.clipboardData.clearData(), n3.clipboardData.setData(t2.format, e9);
        }
        t2.onCopy && (n3.preventDefault(), t2.onCopy(n3.clipboardData));
      }), document.body.appendChild(c2), d2.selectNodeContents(c2), p2.addRange(d2), !document.execCommand("copy")) throw Error("copy command was unsuccessful");
      u2 = true;
    } catch (r3) {
      l2 && console.error("unable to copy using execCommand: ", r3), l2 && console.warn("trying IE specific stuff");
      try {
        window.clipboardData.setData(t2.format || "text", e9), t2.onCopy && t2.onCopy(window.clipboardData), u2 = true;
      } catch (r4) {
        l2 && console.error("unable to copy using clipboardData: ", r4), l2 && console.error("falling back to prompt"), n2 = "message" in t2 ? t2.message : "Copy to clipboard: #{key}, Enter", a2 = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C", o2 = n2.replace(/#{\s*key\s*}/g, a2), window.prompt(o2, e9);
      }
    } finally {
      p2 && ("function" == typeof p2.removeRange ? p2.removeRange(d2) : p2.removeAllRanges()), c2 && document.body.removeChild(c2), s2();
    }
    return u2;
  };
}()), eB = o((e9, t2) => () => l(ev, { $title: "复制当前节点为 JSON 字符串", children: l(eu, { type: "button", onClick: () => eM(JSON.stringify(e9.value, null, 2)), children: l(L, { path: M }) }) }), { displayName: "CopyAsJSONIconBtn", props: ["value"] });
class e_ extends q {
  static from(e9) {
    let t2 = new e_("");
    return s(e9, z((e10) => e10 ? s(V(e10, "input"), U((e11) => {
      t2.next(e11.target.value.trim());
    })) : K), d()), t2;
  }
}
class eW extends G {
  static from(e9) {
    let t2 = new eW();
    return s(e9, z((e10) => e10 ? H(s(V(e10, "keypress"), U((e11) => {
      "Enter" !== e11.key || e11.shiftKey || (e11.preventDefault(), t2.next({ type: "COMMIT" }));
    })), s(V(e10, "keydown"), U((e11) => {
      switch (e11.key) {
        case "Tab":
        case "ArrowDown":
          e11.target.getAttribute("data-options") && (e11.preventDefault(), t2.next({ type: "SELECT", direction: 1 }));
          break;
        case "ArrowUp":
          e11.target.getAttribute("data-options") && (e11.preventDefault(), t2.next({ type: "SELECT", direction: -1 }));
      }
    })), s(V(e10, "keyup"), U((e11) => {
      "Escape" === e11.key && t2.next({ type: "CANCEL" });
    }))) : K), d()), t2;
  }
}
class ej extends j {
  constructor() {
    super((e9) => {
      let t2 = __privateGet(this, _n).subscribe(e9);
      return () => t2.unsubscribe();
    });
    __privateAdd(this, _n, new q(null));
  }
  static sync(e9, t2) {
    return s(H(s(e9, U((e10) => {
      e10 && e10 == b.create(t2.path()) && t2.editing$.show();
    })), s(t2.editing$, F(1), U((n2) => {
      n2 || e9.disable(t2.path());
    })), s(X([t2.value$, e9]), F(1), U((n2) => {
      let [a2, r2] = n2;
      Z(a2) && !r2 && e9.enable(t2.path());
    }))), d());
  }
  enable(e9) {
    __privateGet(this, _n).value || __privateGet(this, _n).next(b.create(e9));
  }
  disable(e9) {
    __privateGet(this, _n).value === b.create(e9) && __privateGet(this, _n).next(null);
  }
}
_n = new WeakMap();
let ez = r(() => new ej()), eH = o((e9, t2) => {
  let n2, { render: a2 } = t2, r2 = f(null), o2 = f(null), p2 = f(null), u2 = eW.from(p2), h2 = e_.from(p2), y2 = ez.use(), m2 = eh.from(p2), v2 = es.use();
  ej.sync(y2, { editing$: m2, value$: e9.value$, path: () => e9.ctx.path });
  let b2 = () => {
    if ("enums" === e9.typedef.type) {
      let t3 = (N.schemaProp(e9.typedef, "enum") ?? []).indexOf(e9.value);
      if (t3 > -1) return t3;
    }
    return 0;
  }, g2 = new i({ index: b2() }), w2 = () => {
    h2.next(""), m2.hide();
  }, C2 = () => {
    w2(), g2.next({ index: b2() }), Z(e9.value) && v2.delete(e9.ctx.path);
  }, k2 = (t3) => {
    var _a, _b;
    if ("enums" === e9.typedef.type) {
      let n4 = N.schemaProp(e9.typedef, "enum") ?? [];
      t3 ?? (t3 = n4[g2.value.index % n4.length]);
    } else t3 ?? (t3 = ((_a = p2.value) == null ? void 0 : _a.value) ? (_b = p2.value) == null ? void 0 : _b.value : void 0);
    if (Z(t3)) {
      v2.delete(e9.ctx.path);
      return;
    }
    let [n3, a3] = e9.typedef.validate(t3, { coerce: true });
    if (n3) {
      v2.setError(e9.ctx.path, n3.message);
      return;
    }
    v2.update(e9.ctx.path, a3), w2();
  };
  return (e9.allowRawJSON && s(h2, U((t3) => {
    let n3 = t3.trim();
    if (n3.startsWith("{") && n3.endsWith("}") || n3.startsWith("[") && n3.endsWith("]")) try {
      let t4 = JSON.parse(n3);
      v2.update(e9.ctx.path, t4), w2();
    } catch (t4) {
      v2.setError(e9.ctx.path, "无效的 JSON 字符串");
    }
  }), d()), s(u2, U((e10) => {
    switch (e10.type) {
      case "SELECT":
        g2.next((t3) => {
          t3.index += e10.direction;
        });
        break;
      case "COMMIT":
        k2();
        break;
      case "CANCEL":
        C2();
    }
  }), d()), s(H(s(o2, x((e10) => {
    if (e10) {
      let t3 = new ResizeObserver((e11) => {
        var _a;
        for (let t4 of e11) t4.contentBoxSize && (n2 = (_a = t4.contentBoxSize[0]) == null ? void 0 : _a.blockSize);
      });
      return t3.observe(e10), () => {
        t3.disconnect();
      };
    }
    return () => {
    };
  })), s(p2, F(1), U((e10) => {
    e10 && (e10 == null ? void 0 : e10.focus(), e10.value && (e10.selectionStart = 0, e10.selectionEnd = e10.value.length));
  })), s(p2, z((e10) => {
    if (e10) {
      let t3 = n2 ? n2 - 2 : e10.getBoundingClientRect().height, a3 = (e11) => {
        e11.style.height = `${t3 ?? 0}px`, e11.style.height = `${e11.scrollHeight}px`;
      };
      return setTimeout(() => a3(e10)), H(s(V(e10, "blur"), U((t4) => {
        var _a, _b;
        !(t4.relatedTarget && (((_a = o2.value) == null ? void 0 : _a.contains(t4.relatedTarget)) || ((_b = r2.value) == null ? void 0 : _b.contains(t4.relatedTarget)))) && (t4.preventDefault(), k2(e10.value));
      })), s(V(e10, "input"), U((e11) => {
        a3(e11.target), h2.next(e11.target.value);
      })));
    }
    return K;
  }))), d()), "enums" == e9.typedef.type) ? s(X([e9.value$, m2, g2]), a2((t3) => {
    let [n3, a3, { index: i2 }] = t3, s2 = N.schemaProp(e9.typedef, "enum") ?? [], d2 = N.metaProp(e9.typedef, "enumLabels") ?? [];
    return l(eK, { ref: o2, onClick: () => {
      m2.show();
    }, "data-type": typeof n3, tabindex: 0, children: a3 ? l(em, { onSelected: (e10) => {
      k2(e10);
    }, open$: m2, $content: l("div", { ref: r2, children: s2.map((e10, t4) => l(eq, { "data-focus": i2 % s2.length === t4, value: e10, label: d2[t4] })) }), children: l(eF, { children: l("input", { value: void 0 == n3 ? "" : `${n3}`, ref: p2, "data-options": true }) }) }) : l(eU, { children: JSON.stringify(n3) ?? "undefined" }) });
  })) : s(X([e9.value$, m2]), a2((e10) => {
    let [t3, n3] = e10;
    return l(eK, { ref: o2, onClick: () => {
      m2.show();
    }, "data-type": typeof t3, tabindex: 0, onFocus: () => {
      m2.show();
    }, children: n3 ? l(T, { isOpen: true, placement: "right-start", $content: c(eV, { ref: r2, children: [l(eu, { type: "button", onClick: () => u2.next({ type: "CANCEL" }), children: l(L, { path: B }) }), l(eu, { type: "button", onClick: () => u2.next({ type: "COMMIT" }), children: l(L, { path: _ }) })] }), children: l(eF, { children: l("textarea", { ref: p2, rows: 1, value: void 0 == t3 ? "" : `${t3}` }) }) }) : l(eU, { children: JSON.stringify(t3) ?? "undefined" }) });
  }));
}, { displayName: "ValueInput", props: ["typedef", "ctx", "value", "allowRawJSON"] }), eV = E("div", { displayName: "ValueInputActions" })({ borderRight: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: A("sys.outline-variant", D(0.38)), containerStyle: "sys.surface-container-lowest", roundedRight: "sm", display: "flex", px: 2, py: 0, ml: -4 }), eF = E("div", { displayName: "InputWrapper" })({ width: "100%", maxWidth: "40vw", display: "flex", alignItems: "center", border: "1px solid", overflow: "hidden", borderColor: A("sys.outline-variant", D(0.38)), opacity: 0.38, "&:hover": { opacity: 1 }, "&:focus-within": { opacity: 1 }, "& > textarea,input": { flex: 1, rounded: "xs", containerStyle: "sys.surface-container-lowest", width: "100%", outline: "none", border: "none", px: 8, py: 0, m: 0, fontSize: "inherit", color: "inherit", lineHeight: "inherit", overflow: "hidden", resize: "none", "&[data-options]:focus": { roundedBottom: 0 } } }), eU = E("div", { displayName: "Value" })({ border: "1px solid", borderColor: "rgba(0,0,0,0)", maxWidth: "40vw", width: "100%", overflow: "hidden", textOverflow: "ellipsis", _hover: { textOverflow: "clip", whiteSpace: "normal", wordBreak: "break-all" } }), eK = E("div", { displayName: "ValueContainer" })({ wordBreak: "keep-all", whiteSpace: "nowrap", cursor: "pointer", display: "flex", alignItems: "center", font: "code", width: "100%", textStyle: "sys.label-small", fontSize: 12, lineHeight: 24, gap: 8, _type__string: { color: "sys.primary" }, _type__number: { color: "sys.primary" }, _type__boolean: { color: "sys.warning" }, _type__undefined: { color: "sys.error" } }), eX = E(ex, { displayName: "EnumMenuItemContainer" })({ [`& ${eN}`]: { textAlign: "left" } }), eq = h((e9) => () => c(eX, { "data-value": e9.value, tabindex: 0, children: [l(eN, { children: e9.value }), e9.label && l(eL, { children: e9.label })] }), { displayName: "EnumMenuItem", props: ["value", "label"] }), eG = o((e9, t2) => {
  let { emit: n2 } = t2;
  return () => l(ev, { $title: "删除属性", children: l(eu, { type: "button", onClick: () => n2("remove"), children: l(L, { path: W }) }) });
}, { displayName: "RemovePropIconBtn", emits: ["remove"] }), eQ = o((e9, t2) => {
  let { render: n2 } = t2, a2 = es.use(), r2 = ed.use();
  return s(e9.value$, n2((t3) => l(eI, { openToken: "{", closeToken: "}", $leading: l(ec, { children: l(eB, { value: t3 }) }), $trailing: l(eY, { ctx: e9.ctx, onAdd: (t4) => {
    a2.update([...e9.ctx.path, t4], void 0);
  }, options: [...e9.typedef.entries(t3, e9.ctx)].filter((e10) => {
    let [n3] = e10;
    return !Object.hasOwn(t3, n3);
  }).map((e10) => {
    let [t4, n3, a3] = e10;
    return { propName: String(t4), typedef: a3 };
  }) }, "prop-input"), children: [...e9.typedef.entries(t3, e9.ctx)].map((n3) => {
    var _a;
    let [i2, o2, s2] = n3;
    if (!Object.hasOwn(t3, i2)) return null;
    let d2 = [...e9.ctx.path, i2];
    return c(eT, { path: d2, dirty: a2.isDirty(o2, d2), title: N.metaProp(s2, "title"), description: N.metaProp(s2, "description"), children: [l(eN, { deprecated: N.schemaProp(s2, "deprecated"), $leading: l(eG, { onRemove: () => {
      a2.delete(d2);
    } }), children: String(i2) }), c(ew, { children: [":", " "] }), (_a = r2.$value) == null ? void 0 : _a.call(r2, s2, o2, { ...e9.ctx, path: d2, branch: [...e9.ctx.branch, o2] })] });
  }) })));
}, { displayName: "ObjectInput", props: ["typedef", "ctx", "value"] }), eY = o((e9, t2) => {
  let { emit: n2, render: a2 } = t2, r2 = f(null), o2 = eW.from(r2), p2 = e_.from(r2), u2 = eh.from(r2), h2 = es.use(), y2 = new i({ index: 0 }), m2 = () => {
    u2.hide(), p2.next(""), r2.value && (r2.value.value = "", r2.value.blur()), y2.next({ index: 0 });
  };
  s(p2, U((t3) => {
    let n3 = t3.trim();
    if (n3.startsWith("{") && n3.endsWith("}")) try {
      let t4 = JSON.parse(n3);
      h2.update(e9.ctx.path, t4), m2();
    } catch (t4) {
      h2.setError(e9.ctx.path, "无效的 JSON 字符串");
    }
  }), d());
  let x2 = (t3) => {
    var _a;
    e9.options ? t3 ?? (t3 = (_a = e9.options[y2.value.index % e9.options.length]) == null ? void 0 : _a.propName) : t3 ?? (t3 = p2.value), t3 ? (n2("add", t3), m2()) : h2.setError([...e9.ctx.path, N.RecordKey], "无效的属性值");
  };
  s(o2, U((e10) => {
    switch (e10.type) {
      case "SELECT":
        y2.next((t3) => {
          t3.index += e10.direction;
        });
        break;
      case "COMMIT":
        x2();
        break;
      case "CANCEL":
        m2();
    }
  }), d());
  let v2 = s(u2, a2((e10) => l(eF, { children: l("input", { ref: r2, type: "text", placeholder: "添加属性 (可粘贴 JSON 字符串)", "data-options": e10 }) })));
  return s(X([p2, u2, y2, e9.options$]), a2((t3) => {
    let [n3, a3, i2, s2] = t3;
    return s2 ? s2.length > 0 ? l(eT, { path: e9.ctx.path, children: l(eK, { sx: { mx: -4 }, children: l(em, { onSelected: (e10) => {
      x2(e10);
    }, open$: u2, $content: l("div", { children: s2.map((e10, t4) => n3 && !e10.propName.includes(n3) ? null : l(eZ, { propName: e10.propName, typedef: e10.typedef, "data-focus": t4 === i2.index % s2.length })) }), children: v2 }) }) }) : null : l(eT, { path: [...e9.ctx.path, N.RecordKey], children: l(eK, { sx: { mx: -4 }, children: l(T, { isOpen: a3, placement: "right-start", $content: c(eV, { children: [l(eu, { type: "button", onClick: () => o2.next({ type: "CANCEL" }), children: l(L, { path: B }) }), l(eu, { type: "button", onClick: () => o2.next({ type: "COMMIT" }), children: l(L, { path: _ }) })] }), children: l(eF, { children: l("input", { ref: r2, type: "text", placeholder: "添加属性 (可粘贴 JSON 字符串)" }) }) }) }) });
  }));
}, { displayName: "PropValueInput", props: ["ctx", "options"], emits: ["add"] }), eZ = h((e9) => () => c(e0, { "data-value": e9.propName, tabindex: 0, children: [l(eN, { optional: N.schemaProp(e9.typedef, N.optional), children: e9.propName }), l(eL, { children: N.metaProp(e9.typedef, "title") })] }), { displayName: "PropMenuItem", props: ["propName", "typedef"] }), e0 = E(ex, { displayName: "AddPropMenuItemContainer" })({ [`& ${eN}`]: { textAlign: "left" } }), e1 = o((e9, t2) => {
  let { render: n2 } = t2, a2 = es.use(), r2 = ed.use();
  return s(e9.value$, n2((t3) => l(eI, { openToken: "[", closeToken: "]", $leading: l(ec, { children: l(eB, { value: t3 }) }), $trailing: l(e2, { ctx: e9.ctx, typedef: e9.typedef, onAdd: (t4) => {
    a2.update(e9.ctx.path, (e10) => {
      e10.push(t4);
    }, []);
  } }), children: [...e9.typedef.entries(t3, e9.ctx)].map((t4) => {
    var _a;
    let [n3, i2, o2] = t4, s2 = [...e9.ctx.path, n3];
    return c(eT, { path: s2, dirty: a2.isDirty(i2, s2), children: [l(eN, { $leading: l(e8, { onRemove: () => {
      a2.delete(s2);
    } }), children: l(R, { sx: { opacity: 0.3, mr: "0.5em" }, children: String(n3) }) }), (_a = r2.$value) == null ? void 0 : _a.call(r2, o2, i2, { ...e9.ctx, path: s2, branch: [...e9.ctx.branch, i2] })] });
  }) })));
}, { displayName: "ArrayInput", props: ["ctx", "value", "typedef"] }), e2 = o((e9, t2) => {
  let { emit: n2, render: a2 } = t2, r2 = f(null), i2 = e_.from(r2), o2 = eW.from(r2), p2 = eh.from(r2), u2 = es.use(), h2 = () => {
    r2.value && (r2.value.value = "", r2.value.blur());
  }, y2 = (t3) => {
    if (t3 ?? (t3 = i2.value)) {
      let [a3, r3] = N.schemaProp(e9.typedef, "items").validate(t3, { coerce: true });
      if (a3) {
        u2.setError(e9.ctx.path, a3);
        return;
      }
      n2("add", r3);
    } else n2("add", void 0);
    h2();
  };
  s(i2, U((t3) => {
    let n3 = t3.trim();
    if (n3.startsWith("[") && n3.endsWith("]")) try {
      let t4 = JSON.parse(n3);
      u2.update(e9.ctx.path, t4), h2();
    } catch (t4) {
      u2.setError(e9.ctx.path, "无效的 JSON 字符串");
    }
    if (n3.startsWith("{") && n3.endsWith("}")) try {
      y2(JSON.parse(n3));
    } catch (t4) {
      u2.setError(e9.ctx.path, "无效的 JSON 字符串");
    }
  }), d()), s(o2, U((e10) => {
    switch (e10.type) {
      case "COMMIT":
        y2();
        break;
      case "CANCEL":
        h2();
    }
  }), d());
  let m2 = s(p2, a2((e10) => l(T, { isOpen: e10, placement: "right-start", $content: c(eV, { children: [l(eu, { type: "button", onClick: () => o2.next({ type: "CANCEL" }), children: l(L, { path: B }) }), l(eu, { type: "button", onClick: () => o2.next({ type: "COMMIT" }), children: l(L, { path: _ }) })] }), children: l(eF, { children: l("input", { ref: r2, type: "text", placeholder: "添加数组项 (可粘贴 JSON 字符串)" }) }) })));
  return () => l(eT, { path: e9.ctx.path, children: l(eK, { sx: { mx: -4 }, children: m2 }) });
}, { displayName: "AddItemIconBtn", props: ["ctx", "typedef"], emits: ["add"] }), e8 = o((e9, t2) => {
  let { emit: n2 } = t2;
  return () => l(ev, { $title: "移除项", children: l(eu, { type: "button", onClick: () => n2("remove"), children: l(L, { path: W }) }) });
}, { displayName: "RemoteItemIconBtn", emits: ["remove"] }), e4 = o((e9, t2) => {
  let { render: n2 } = t2, a2 = es.use(), r2 = ed.use();
  return s(e9.value$, n2((t3) => l(eI, { openToken: "{", closeToken: "}", $leading: l(ec, { children: l(eB, { value: t3 }) }), $trailing: l(eY, { ctx: e9.ctx, onAdd: (t4) => {
    a2.update([...e9.ctx.path, t4], void 0);
  } }, "prop-input"), children: [...e9.typedef.entries((() => {
    let e10 = {};
    for (let n3 of Object.keys(t3 ?? {}).toSorted()) e10[n3] = t3 == null ? void 0 : t3[n3];
    return e10;
  })(), e9.ctx)].map((n3) => {
    var _a;
    let [i2, o2, s2] = n3;
    if (!Object.hasOwn(t3, i2)) return null;
    let d2 = [...e9.ctx.path, i2];
    return c(eT, { path: d2, dirty: a2.isDirty(o2, d2), children: [l(eN, { $leading: l(eG, { onRemove: () => {
      a2.delete(d2);
    } }), children: String(i2) }), c(ew, { children: [":", " "] }), (_a = r2.$value) == null ? void 0 : _a.call(r2, s2, o2, { ...e9.ctx, path: d2, branch: [...e9.ctx.branch, o2] })] });
  }) })));
}, { displayName: "RecordInput", props: ["ctx", "value", "typedef"] }), e3 = o((e9, t2) => {
  let { render: n2 } = t2;
  return s(e9.value$, n2((t3) => er(t3) ? l(e1, { value: t3, typedef: C(k()), ctx: e9.ctx }) : ei(t3) ? l(e4, { value: t3, typedef: S($(), k()), ctx: e9.ctx }) : l(eH, { value: t3, typedef: k(), ctx: e9.ctx, allowRawJSON: true })));
}, { displayName: "AnyInput", props: ["typedef", "ctx", "value"] }), e5 = (e9, t2, n2) => "object" == e9.type || "intersection" == e9.type || "union" == e9.type && N.schemaProp(e9, "discriminator") ? l(eQ, { typedef: e9, value: t2 ?? {}, ctx: n2 }) : "union" == e9.type && Z(N.schemaProp(e9, "discriminator")) ? l(eH, { typedef: e9, value: t2, ctx: n2 }) : "record" == e9.type ? l(e4, { typedef: e9, value: t2, ctx: n2 }) : "array" == e9.type ? l(e1, { typedef: e9, value: t2, ctx: n2 }) : "any" == e9.type || "unknown" == e9.type ? l(e3, { typedef: e9, value: t2, ctx: n2 }) : l(eH, { typedef: e9, value: t2, ctx: n2 }), e7 = o((e9, t2) => {
  let { render: n2 } = t2, a2 = es.use(), r2 = ed.use(), i2 = v(null);
  return s(a2, n2((e10) => {
    let t3 = r2.$value ?? e5;
    return l(ez, { children: l(ed, { value: { $value: r2.$value ?? e5 }, children: c(e6, { children: [l("section", { ref: i2 }), i2.value && l(eE, { value: { indent: 0, $container: i2 }, children: l(eT, { path: [], viewOnly: true, children: t3(a2.typedef, e10, O) }) })] }) }) });
  }));
}, { displayName: "JSONEditorView" }), e6 = E("div", { displayName: "JSONEditorContainer" })({ width: "100%", height: "100%", overflow: "auto", section: { display: "flex", flexDirection: "column", minWidth: "max-content" } });
export {
  eo as J,
  es as a,
  e7 as b,
  eM as c
};
