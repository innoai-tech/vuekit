var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _e, _t, _n;
var e, t, n, a;
import { c as r, I as i, j as l, a as o, r as s, s as d, b as p, d as c, e as u, f as h, T as y, F as m, o as f, t as x, g as v } from "./lib-nodepkg-vuekit.CLtD3_gK.chunk.js";
import { o as b, J as g, g as w, S as N, a as C, b as k, r as S, s as $, E as O } from "./lib-nodepkg-typedef.BsSH2HWO.chunk.js";
import { s as E, v as I, a as T, P as A, b as D, B as R } from "./lib-nodepkg-vueuikit.nz_P-Esq.chunk.js";
import { I as J, a as L } from "./lib-nodepkg-vuematerial.C1xSeNg6.chunk.js";
import { m as P, a as M, b as B, c as _, d as j } from "./webapp-vuekit-layout.BC7YT2MU.chunk.js";
import { O as W, s as z, m as H, f as F, d as U, t as V, E as K, c as X, B as q, S as G } from "./vendor-rxjs.CROJHUGX.chunk.js";
import { i as Q, g as Y, a as Z, b as ee, s as et, l as en, c as ea, d as er, e as ei } from "./vendor-innoai-tech-lodash.C5hOAnRW.chunk.js";
import { M as el } from "./lib-nodepkg-vuemarkdown.DsD8WW9Y.chunk.js";
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
    return new _eo(e6, t2 ?? ("array" == e6.type ? [] : {}));
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
    ee(t2) ? __privateGet(this, _e).next((a2) => {
      let r2 = Y(a2, e6, n2);
      t2(r2), et(a2, e6, r2);
    }) : __privateGet(this, _e).next((n3) => {
      et(n3, e6, t2);
    });
  }
  delete(e6) {
    0 != e6.length && __privateGet(this, _e).next((t2) => {
      let n2 = en(e6);
      if (ea(n2)) {
        let a3 = e6.slice(0, e6.length - 1), r3 = a3.length > 0 ? Y(t2, a3) : t2;
        if (er(r3)) {
          r3.splice(n2, 1);
          return;
        }
      }
      let a2 = e6.slice(0, e6.length - 1), r2 = a2.length > 0 ? Y(t2, a2) : t2;
      delete r2[n2];
    });
  }
  get error$() {
    return __privateGet(this, _t);
  }
  setError(e6, t2) {
    let n2 = g.create(e6);
    __privateGet(this, _t).next((e7) => {
      null === t2 ? delete e7[n2] : e7[n2] = t2;
    });
  }
};
_e = new WeakMap();
_t = new WeakMap();
let eo = _eo;
let es = r(() => new eo(b(), {})), ed = r(() => ({})), ep = E("span", { displayName: "ActionToolbar" })({ px: 2, pos: "relative", display: "flex", alignItems: "center", gap: 8, visibility: "hidden" }), ec = E("span", (e6, t2) => {
  let { slots: n2 } = t2;
  return (e7) => {
    var _a;
    return l(e7, { children: l(ep, { "data-visible-on-hover": true, children: (_a = n2.default) == null ? void 0 : _a.call(n2) }) });
  };
}, { displayName: "Actions" })({ display: "flex" }), eu = E(J, { displayName: "ActionBtn" })({ transition: "none", width: 24, height: 24, rounded: 12, [`& ${L}`]: { svg: { width: 18, height: 18 } } });
class eh extends i {
  static from(e6) {
    let t2 = new eh(false);
    return s(e6, z((e7) => e7 ? H(s(F(e7, "focus"), V(() => {
      t2.show();
    })), s(F(e7, "blur"), U(200), V(() => {
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
let ey = D({ apply(e6) {
  let { elements: t2, rects: n2 } = e6;
  Object.assign(t2.floating.style, { width: `${n2.reference.width}px` });
} }), em = o((e6, t2) => {
  let { emit: n2, slots: a2, render: r2 } = t2, i2 = e6.open$ ?? new eh(false), o2 = (e7) => {
    let t3 = [e7.target, ...e7.composedPath()].find((e9) => {
      var _a;
      return (_a = e9 == null ? void 0 : e9.hasAttribute) == null ? void 0 : _a.call(e9, "data-value");
    });
    if (t3) {
      let e9 = t3.getAttribute("data-value");
      Z(e9) || (n2("selected", e9), i2.hide());
    }
  };
  return s(i2, r2((e7) => {
    var _a, _b, _c;
    return l(A, { isOpen: e7, onClickOutside: () => i2.hide(), onEscKeydown: () => i2.hide(), placement: "bottom-start", middleware: [ey], $content: l(ef, { onClick: o2, children: (_a = a2.content) == null ? void 0 : _a.call(a2) }), children: ((_c = (_b = a2.default) == null ? void 0 : _b.call(a2)) == null ? void 0 : _c[0]) ?? null });
  }));
}, { displayName: "Menu", props: ["open$"], emits: ["selected"] });
o((e6, t2) => {
  let { slots: n2, render: a2 } = t2, r2 = e6.open$ ?? new eh(false);
  return s(r2, a2((e7) => {
    var _a, _b, _c;
    return l(A, { isOpen: e7, onClickOutside: () => r2.hide(), placement: "bottom-start", $content: l(ef, { children: (_a = n2.content) == null ? void 0 : _a.call(n2) }), children: ((_c = (_b = n2.default) == null ? void 0 : _b.call(n2)) == null ? void 0 : _c[0]) ?? null });
  }));
}, { displayName: "Popover", props: ["open$"] });
let ef = E("div", { displayName: "PopoverContainer" })({ textStyle: "sys.body-small", pos: "relative", roundedBottom: "sm", containerStyle: "sys.surface-container-lowest", borderBottom: "1px solid", borderRight: "1px solid", borderLeft: "1px solid", borderColor: I("sys.outline-variant", T(0.38)) }), ex = E("div", { displayName: "MenuItem" })({ px: 8, py: 2, gap: 8, display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "right", textStyle: "sys.body-small", cursor: "pointer", _hover: { containerStyle: "sys.surface-container" }, _focus: { containerStyle: "sys.surface-container", outline: 0 } }), ev = o((e6, t2) => {
  let { slots: n2, render: a2 } = t2, r2 = new eh(false);
  return s(r2, a2((t3) => {
    var _a;
    let a3 = (_a = n2.default) == null ? void 0 : _a.call(n2)[0];
    return l(A, { isOpen: t3, placement: e6.placement ?? "left", $content: l(eg, { children: l(eb, { children: n2.title() }) }), children: a3 ? p(a3, { onMouseover: () => {
      r2.show();
    }, onMouseout: () => {
      r2.hide();
    } }) : null });
  }));
}, { displayName: "Tooltip", props: ["placement"] }), eb = E("div", { displayName: "TooltipContainer" })({ py: 4, px: 12, rounded: "xs", shadow: "3", textStyle: "sys.body-small", containerStyle: "sys.on-surface", pos: "relative", zIndex: 100 }), eg = E("div", { displayName: "TooltipWrapper" })({ px: 8 }), ew = E("span", { displayName: "Token" })({ textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 12, lineHeight: 24, wordBreak: "keep-all", whiteSpace: "nowrap", font: "code", opacity: 0.3 }), eN = o((e6, t2) => {
  let { slots: n2 } = t2;
  return () => {
    var _a;
    return h(ek, { "data-deprecated": e6.deprecated, "data-optional": e6.optional, "data-nullable": e6.nullable, children: [n2.leading && l(eC, { "data-visible-on-hover": true, children: n2.leading() }), (_a = n2.default) == null ? void 0 : _a.call(n2)] });
  };
}, { displayName: "PropName", props: ["deprecated", "optional", "nullable"] }), eC = E(ep, { displayName: "PropLeading" })({ position: "absolute", ml: -28 }), ek = E("div", { displayName: "PropNameView" })({ position: "relative", display: "flex", alignItems: "center", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", wordBreak: "keep-all", whiteSpace: "nowrap", border: "1px solid", borderColor: "rgba(0,0,0,0)", fontSize: 12, lineHeight: 24, _deprecated: { textDecoration: "line-through" }, _optional: { "&:after": { content: '"?"', color: "sys.secondary", opacity: 0.58 } } }), eS = E("div", { displayName: "LineTitle" })({ position: "absolute", zIndex: 1, left: 0, opacity: 0.58, fontSize: 10, lineHeight: 10, top: 0, "& > *": { display: "flex", alignItems: "center", gap: 4, "&::before": { content: '"// "', font: "code" } } }), e$ = E("div", { displayName: "LineError" })({ display: "block", fontSize: 10, lineHeight: 14, color: "sys.error" }), eO = E("div", { displayName: "LineContainer" })({ position: "relative", py: 4, _hover: { containerStyle: "sys.surface-container", "& [data-visible-on-hover]": { visibility: "visible" } }, "&:focus-within": { containerStyle: "sys.surface-container" }, _dirty: { bgColor: I("sys.warning-container", T(0.38)) }, _error: { bgColor: "sys.error-container" }, [`&:has(${ec})`]: { [`& > ${e$}`]: { display: "none" }, _error: { bgColor: "inherit" } } }), eE = r(() => ({ indent: 0, $container: c(null) }), { name: "IntentContext" }), eI = u((e6, t2) => {
  let { slots: n2 } = t2, a2 = eE.use(), r2 = c(null), i2 = c(null);
  return () => {
    var _a, _b, _c;
    return h(m, { children: [l(ew, { children: e6.openToken }), (_a = n2.leading) == null ? void 0 : _a.call(n2), h(y, { to: a2.$container.value, children: [h(eD, { "data-indent": a2.indent, children: [l(eA, { ref: r2 }), l(eR, { ref: i2 }), i2.value && l(eE, { value: { $container: i2, indent: 1 + (a2.indent ?? 0) }, children: (_b = n2.trailing) == null ? void 0 : _b.call(n2) })] }), l(eJ, { style: { paddingLeft: `${32 * a2.indent}px`, display: "flex" }, children: l(ew, { children: e6.closeToken }) })] }), r2.value && l(eE, { value: { $container: r2, indent: 1 + (a2.indent ?? 0) }, children: (_c = n2.default) == null ? void 0 : _c.call(n2) })] });
  };
}, { displayName: "Block", props: ["openToken", "closeToken"] }), eT = o((e6, t2) => {
  let { slots: n2, render: a2 } = t2, r2 = eE.use(), i2 = s(es.use().error$, a2((t3) => {
    var _a;
    let a3 = g.create(e6.path), i3 = !e6.viewOnly && !!t3[a3];
    return h(eO, { "data-error": i3, "data-dirty": e6.dirty, style: { paddingLeft: `${32 * r2.indent}px` }, children: [(e6.title || e6.description) && l(eS, { style: { paddingLeft: `${32 * r2.indent}px` }, children: e6.description ? l(ev, { $title: l(eL, { children: l(el, { text: e6.description }) }), children: h("div", { children: [e6.title, " ", l(L, { path: P })] }) }) : l("span", { children: e6.title }) }), l(eJ, { children: (_a = n2.default) == null ? void 0 : _a.call(n2) }), i3 && l(e$, { children: `${t3[a3]}` })] });
  }));
  return () => l(y, { to: r2.$container.value, children: i2 });
}, { displayName: "Line", props: ["path", "dirty", "viewOnly", "title", "description"] }), eA = E("div", { displayName: "Lines" })({}), eD = E("section", { displayName: "LineSection" })({}), eR = E("div", { displayName: "LinesTrailing" })({}), eJ = E("div", { displayName: "LineRow" })({ display: "flex", alignItems: "start", pr: 10 }), eL = E("span", { displayName: "Description" })({ display: "block", textStyle: "sys.body-small", "& p": { my: 1, wordBreak: "keep-all", whiteSpace: "nowrap", opacity: 0.7 }, "& code": { wordBreak: "keep-all", whiteSpace: "nowrap" } }), eP = E("form", { displayName: "FormControls" })({ display: "flex", pos: "absolute", right: 0, bottom: 0, px: 8 });
E("div", { displayName: "FormContainer" })({ display: "flex", flexDirection: "column", pos: "relative", textarea: { minW: 400, outline: "none", border: "none", bg: "none", py: 8, px: 12 } }), E("div", { displayName: "FormContainerAsRow" })({ display: "flex", alignItems: "center", gap: 8, pos: "relative", px: 8, input: { outline: "none", border: "none", bg: "none", minWidth: "10vw", py: 8, px: 12 }, [`& ${eP}`]: { pos: "relative", px: 0 } });
let eM = w(function() {
  if (a) return n;
  a = 1;
  var r2 = t ? e : (t = 1, e = function() {
    var e6 = document.getSelection();
    if (!e6.rangeCount) return function() {
    };
    for (var t2 = document.activeElement, n2 = [], a2 = 0; a2 < e6.rangeCount; a2++) n2.push(e6.getRangeAt(a2));
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
    var n2, a2, l2, o2, s2, d2, p2, c2, u2 = false;
    t2 || (t2 = {}), l2 = t2.debug || false;
    try {
      if (s2 = r2(), d2 = document.createRange(), p2 = document.getSelection(), (c2 = document.createElement("span")).textContent = e6, c2.ariaHidden = "true", c2.style.all = "unset", c2.style.position = "fixed", c2.style.top = 0, c2.style.clip = "rect(0, 0, 0, 0)", c2.style.whiteSpace = "pre", c2.style.webkitUserSelect = "text", c2.style.MozUserSelect = "text", c2.style.msUserSelect = "text", c2.style.userSelect = "text", c2.addEventListener("copy", function(n3) {
        if (n3.stopPropagation(), t2.format) {
          if (n3.preventDefault(), void 0 === n3.clipboardData) {
            l2 && console.warn("unable to use e.clipboardData"), l2 && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
            var a3 = i2[t2.format] || i2.default;
            window.clipboardData.setData(a3, e6);
          } else n3.clipboardData.clearData(), n3.clipboardData.setData(t2.format, e6);
        }
        t2.onCopy && (n3.preventDefault(), t2.onCopy(n3.clipboardData));
      }), document.body.appendChild(c2), d2.selectNodeContents(c2), p2.addRange(d2), !document.execCommand("copy")) throw Error("copy command was unsuccessful");
      u2 = true;
    } catch (r3) {
      l2 && console.error("unable to copy using execCommand: ", r3), l2 && console.warn("trying IE specific stuff");
      try {
        window.clipboardData.setData(t2.format || "text", e6), t2.onCopy && t2.onCopy(window.clipboardData), u2 = true;
      } catch (r4) {
        l2 && console.error("unable to copy using clipboardData: ", r4), l2 && console.error("falling back to prompt"), n2 = "message" in t2 ? t2.message : "Copy to clipboard: #{key}, Enter", a2 = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C", o2 = n2.replace(/#{\s*key\s*}/g, a2), window.prompt(o2, e6);
      }
    } finally {
      p2 && ("function" == typeof p2.removeRange ? p2.removeRange(d2) : p2.removeAllRanges()), c2 && document.body.removeChild(c2), s2();
    }
    return u2;
  };
}()), eB = o((e6, t2) => () => l(ev, { $title: "复制当前节点为 JSON 字符串", children: l(eu, { type: "button", onClick: () => eM(JSON.stringify(e6.value, null, 2)), children: l(L, { path: M }) }) }), { displayName: "CopyAsJSONIconBtn", props: ["value"] });
class e_ extends q {
  static from(e6) {
    let t2 = new e_("");
    return s(e6, z((e7) => e7 ? s(F(e7, "input"), V((e9) => {
      t2.next(e9.target.value.trim());
    })) : K), d()), t2;
  }
}
class ej extends G {
  static from(e6) {
    let t2 = new ej();
    return s(e6, z((e7) => e7 ? H(s(F(e7, "keypress"), V((e9) => {
      "Enter" !== e9.key || e9.shiftKey || (e9.preventDefault(), t2.next({ type: "COMMIT" }));
    })), s(F(e7, "keydown"), V((e9) => {
      switch (e9.key) {
        case "Tab":
        case "ArrowDown":
          e9.target.getAttribute("data-options") && (e9.preventDefault(), t2.next({ type: "SELECT", direction: 1 }));
          break;
        case "ArrowUp":
          e9.target.getAttribute("data-options") && (e9.preventDefault(), t2.next({ type: "SELECT", direction: -1 }));
      }
    })), s(F(e7, "keyup"), V((e9) => {
      "Escape" === e9.key && t2.next({ type: "CANCEL" });
    }))) : K), d()), t2;
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
    return s(H(s(e6, V((e7) => {
      e7 && e7 == g.create(t2.path()) && t2.editing$.show();
    })), s(t2.editing$, U(1), V((n2) => {
      n2 || e6.disable(t2.path());
    })), s(X([t2.value$, e6]), U(1), V((n2) => {
      let [a2, r2] = n2;
      Z(a2) && !r2 && e6.enable(t2.path());
    }))), d());
  }
  enable(e6) {
    __privateGet(this, _n).value || __privateGet(this, _n).next(g.create(e6));
  }
  disable(e6) {
    __privateGet(this, _n).value === g.create(e6) && __privateGet(this, _n).next(null);
  }
}
_n = new WeakMap();
let ez = r(() => new eW()), eH = o((e6, t2) => {
  let n2, { render: a2 } = t2, r2 = f(null), o2 = f(null), p2 = f(null), c2 = ej.from(p2), u2 = e_.from(p2), y2 = ez.use(), m2 = eh.from(p2), v2 = es.use();
  eW.sync(y2, { editing$: m2, value$: e6.value$, path: () => e6.ctx.path });
  let b2 = () => {
    if ("enums" === e6.typedef.type) {
      let t3 = (N.schemaProp(e6.typedef, "enum") ?? []).indexOf(e6.value);
      if (t3 > -1) return t3;
    }
    return 0;
  }, g2 = new i({ index: b2() }), w2 = () => {
    u2.next(""), m2.hide();
  }, C2 = () => {
    w2(), g2.next({ index: b2() }), Z(e6.value) && v2.delete(e6.ctx.path);
  }, k2 = (t3) => {
    var _a, _b;
    if ("enums" === e6.typedef.type) {
      let n4 = N.schemaProp(e6.typedef, "enum") ?? [];
      t3 ?? (t3 = n4[g2.value.index % n4.length]);
    } else t3 ?? (t3 = ((_a = p2.value) == null ? void 0 : _a.value) ? (_b = p2.value) == null ? void 0 : _b.value : void 0);
    if (Z(t3)) {
      v2.delete(e6.ctx.path);
      return;
    }
    let [n3, a3] = e6.typedef.validate(t3, { coerce: true });
    if (n3) {
      v2.setError(e6.ctx.path, n3.message);
      return;
    }
    v2.update(e6.ctx.path, a3), w2();
  };
  return (e6.allowRawJSON && s(u2, V((t3) => {
    let n3 = t3.trim();
    if (n3.startsWith("{") && n3.endsWith("}") || n3.startsWith("[") && n3.endsWith("]")) try {
      let t4 = JSON.parse(n3);
      v2.update(e6.ctx.path, t4), w2();
    } catch (t4) {
      v2.setError(e6.ctx.path, "无效的 JSON 字符串");
    }
  }), d()), s(c2, V((e7) => {
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
  }), d()), s(H(s(o2, x((e7) => {
    if (e7) {
      let t3 = new ResizeObserver((e9) => {
        var _a;
        for (let t4 of e9) t4.contentBoxSize && (n2 = (_a = t4.contentBoxSize[0]) == null ? void 0 : _a.blockSize);
      });
      return t3.observe(e7), () => {
        t3.disconnect();
      };
    }
    return () => {
    };
  })), s(p2, U(1), V((e7) => {
    e7 && (e7 == null ? void 0 : e7.focus(), e7.value && (e7.selectionStart = 0, e7.selectionEnd = e7.value.length));
  })), s(p2, z((e7) => {
    if (e7) {
      let t3 = n2 ?? e7.getBoundingClientRect().height, a3 = (e9) => {
        e9.style.height = `${t3 ?? 0}px`, e9.style.height = `${e9.scrollHeight}px`;
      };
      return a3(e7), H(s(F(e7, "blur"), V((t4) => {
        var _a, _b;
        t4.relatedTarget && (((_a = o2.value) == null ? void 0 : _a.contains(t4.relatedTarget)) || ((_b = r2.value) == null ? void 0 : _b.contains(t4.relatedTarget))) || (t4.preventDefault(), k2(e7.value));
      })), s(F(e7, "input"), V((e9) => {
        a3(e9.target), u2.next(e9.target.value);
      })));
    }
    return K;
  }))), d()), "enums" == e6.typedef.type) ? s(X([e6.value$, m2, g2]), a2((t3) => {
    let [n3, a3, { index: i2 }] = t3, s2 = N.schemaProp(e6.typedef, "enum") ?? [], d2 = N.metaProp(e6.typedef, "enumLabels") ?? [];
    return l(eU, { ref: o2, onClick: () => {
      m2.show();
    }, "data-type": typeof n3, tabindex: 0, children: a3 ? l(em, { onSelected: (e7) => {
      k2(e7);
    }, open$: m2, $content: l("div", { ref: r2, children: s2.map((e7, t4) => l(eK, { "data-focus": i2 % s2.length === t4, value: e7, label: d2[t4] })) }), children: l("div", { "data-input-wrapper": true, children: l("input", { value: void 0 == n3 ? "" : `${n3}`, ref: p2, "data-options": true }) }) }) : l("span", { children: JSON.stringify(n3) ?? "undefined" }) });
  })) : s(X([e6.value$, m2]), a2((e7) => {
    let [t3, n3] = e7;
    return l(eU, { ref: o2, onClick: () => {
      m2.show();
    }, "data-type": typeof t3, tabindex: 0, onFocus: () => {
      m2.show();
    }, children: n3 ? l(A, { isOpen: true, placement: "right-start", $content: h(eF, { ref: r2, children: [l(eu, { type: "button", onClick: () => c2.next({ type: "CANCEL" }), children: l(L, { path: B }) }), l(eu, { type: "button", onClick: () => c2.next({ type: "COMMIT" }), children: l(L, { path: _ }) })] }), children: l("div", { "data-input-wrapper": true, children: l("textarea", { ref: p2, rows: 1, value: void 0 == t3 ? "" : `${t3}` }) }) }) : l("span", { "data-value": true, children: JSON.stringify(t3) ?? "undefined" }) });
  }));
}, { displayName: "ValueInput", props: ["typedef", "ctx", "value", "allowRawJSON"] }), eF = E("div", { displayName: "ValueInputActions" })({ borderRight: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: I("sys.outline-variant", T(0.38)), containerStyle: "sys.surface-container-lowest", roundedRight: "sm", display: "flex", px: 2, ml: -4 }), eU = E("div", { displayName: "ValueContainer" })({ wordBreak: "keep-all", whiteSpace: "nowrap", cursor: "pointer", display: "flex", alignItems: "center", font: "code", width: "100%", textStyle: "sys.label-small", fontSize: 12, lineHeight: 24, gap: 8, "& [data-value]": { border: "1px solid", borderColor: "rgba(0,0,0,0)", maxWidth: "40vw", width: "100%", overflow: "hidden", textOverflow: "ellipsis", _hover: { textOverflow: "clip", whiteSpace: "normal", wordBreak: "break-all" } }, "& [data-input-wrapper]": { width: "100%", maxWidth: "40vw", display: "flex", alignItems: "center", border: "1px solid", overflow: "hidden", borderColor: I("sys.outline-variant", T(0.38)), opacity: 0.38, "&:hover": { opacity: 1 }, "&:focus-within": { opacity: 1 } }, "& textarea,input": { border: "none", flex: 1, rounded: "xs", containerStyle: "sys.surface-container-lowest", width: "100%", outline: "none", px: 8, py: 0, m: 0, fontSize: "inherit", color: "inherit", lineHeight: "inherit", overflow: "hidden", resize: "none", "&[data-options]:focus": { roundedBottom: 0 } }, _type__string: { color: "sys.primary" }, _type__number: { color: "sys.primary" }, _type__boolean: { color: "sys.warning" }, _type__undefined: { color: "sys.error" } }), eV = E(ex, { displayName: "EnumMenuItemContainer" })({ [`& ${eN}`]: { textAlign: "left" } }), eK = u((e6) => () => h(eV, { "data-value": e6.value, tabindex: 0, children: [l(eN, { children: e6.value }), e6.label && l(eL, { children: e6.label })] }), { displayName: "EnumMenuItem", props: ["value", "label"] }), eX = o((e6, t2) => {
  let { emit: n2 } = t2;
  return () => l(ev, { $title: "删除属性", children: l(eu, { type: "button", onClick: () => n2("remove"), children: l(L, { path: j }) }) });
}, { displayName: "RemovePropIconBtn", emits: ["remove"] }), eq = o((e6, t2) => {
  let { render: n2 } = t2, a2 = es.use(), r2 = ed.use();
  return s(e6.value$, n2((t3) => l(eI, { openToken: "{", closeToken: "}", $leading: l(ec, { children: l(eB, { value: t3 }) }), $trailing: l(eG, { ctx: e6.ctx, onAdd: (t4) => {
    a2.update([...e6.ctx.path, t4], void 0);
  }, options: [...e6.typedef.entries(t3, e6.ctx)].filter((e7) => {
    let [n3] = e7;
    return !Object.hasOwn(t3, n3);
  }).map((e7) => {
    let [t4, n3, a3] = e7;
    return { propName: String(t4), typedef: a3 };
  }) }, "prop-input"), children: [...e6.typedef.entries(t3, e6.ctx)].map((n3) => {
    var _a;
    let [i2, o2, s2] = n3;
    if (!Object.hasOwn(t3, i2)) return null;
    let d2 = [...e6.ctx.path, i2];
    return h(eT, { path: d2, dirty: a2.isDirty(o2, d2), title: N.metaProp(s2, "title"), description: N.metaProp(s2, "description"), children: [l(eN, { deprecated: N.schemaProp(s2, "deprecated"), $leading: l(eX, { onRemove: () => {
      a2.delete(d2);
    } }), children: String(i2) }), h(ew, { children: [":", " "] }), (_a = r2.$value) == null ? void 0 : _a.call(r2, s2, o2, { ...e6.ctx, path: d2, branch: [...e6.ctx.branch, o2] })] });
  }) })));
}, { displayName: "ObjectInput", props: ["typedef", "ctx", "value"] }), eG = o((e6, t2) => {
  let { emit: n2, render: a2 } = t2, r2 = f(null), o2 = ej.from(r2), p2 = e_.from(r2), c2 = eh.from(r2), u2 = es.use(), y2 = new i({ index: 0 }), m2 = () => {
    c2.hide(), p2.next(""), r2.value && (r2.value.value = "", r2.value.blur()), y2.next({ index: 0 });
  };
  s(p2, V((t3) => {
    let n3 = t3.trim();
    if (n3.startsWith("{") && n3.endsWith("}")) try {
      let t4 = JSON.parse(n3);
      u2.update(e6.ctx.path, t4), m2();
    } catch (t4) {
      u2.setError(e6.ctx.path, "无效的 JSON 字符串");
    }
  }), d());
  let x2 = (t3) => {
    var _a;
    e6.options ? t3 ?? (t3 = (_a = e6.options[y2.value.index % e6.options.length]) == null ? void 0 : _a.propName) : t3 ?? (t3 = p2.value), t3 ? (n2("add", t3), m2()) : u2.setError([...e6.ctx.path, N.RecordKey], "无效的属性值");
  };
  s(o2, V((e7) => {
    switch (e7.type) {
      case "SELECT":
        y2.next((t3) => {
          t3.index += e7.direction;
        });
        break;
      case "COMMIT":
        x2();
        break;
      case "CANCEL":
        m2();
    }
  }), d());
  let v2 = s(c2, a2((e7) => l("div", { "data-input-wrapper": true, children: l("input", { ref: r2, type: "text", placeholder: "添加属性 (可粘贴 JSON 字符串)", "data-options": e7 }) })));
  return s(X([p2, c2, y2, e6.options$]), a2((t3) => {
    let [n3, a3, i2, s2] = t3;
    return s2 ? s2.length > 0 ? l(eT, { path: e6.ctx.path, children: l(eU, { sx: { mx: -4 }, children: l(em, { onSelected: (e7) => {
      x2(e7);
    }, open$: c2, $content: l("div", { children: s2.map((e7, t4) => n3 && !e7.propName.includes(n3) ? null : l(eQ, { propName: e7.propName, typedef: e7.typedef, "data-focus": t4 === i2.index % s2.length })) }), children: v2 }) }) }) : null : l(eT, { path: [...e6.ctx.path, N.RecordKey], children: l(eU, { sx: { mx: -4 }, children: l(A, { isOpen: a3, placement: "right-start", $content: h(eF, { children: [l(eu, { type: "button", onClick: () => o2.next({ type: "CANCEL" }), children: l(L, { path: B }) }), l(eu, { type: "button", onClick: () => o2.next({ type: "COMMIT" }), children: l(L, { path: _ }) })] }), children: l("div", { "data-input-wrapper": true, children: l("input", { ref: r2, type: "text", placeholder: "添加属性 (可粘贴 JSON 字符串)" }) }) }) }) });
  }));
}, { displayName: "PropValueInput", props: ["ctx", "options"], emits: ["add"] }), eQ = u((e6) => () => h(eY, { "data-value": e6.propName, tabindex: 0, children: [l(eN, { optional: N.schemaProp(e6.typedef, N.optional), children: e6.propName }), l(eL, { children: N.metaProp(e6.typedef, "title") })] }), { displayName: "PropMenuItem", props: ["propName", "typedef"] }), eY = E(ex, { displayName: "AddPropMenuItemContainer" })({ [`& ${eN}`]: { textAlign: "left" } }), eZ = o((e6, t2) => {
  let { render: n2 } = t2, a2 = es.use(), r2 = ed.use();
  return s(e6.value$, n2((t3) => l(eI, { openToken: "[", closeToken: "]", $leading: l(ec, { children: l(eB, { value: t3 }) }), $trailing: l(e0, { ctx: e6.ctx, typedef: e6.typedef, onAdd: (t4) => {
    a2.update(e6.ctx.path, (e7) => {
      e7.push(t4);
    }, []);
  } }), children: [...e6.typedef.entries(t3, e6.ctx)].map((t4) => {
    var _a;
    let [n3, i2, o2] = t4, s2 = [...e6.ctx.path, n3];
    return h(eT, { path: s2, dirty: a2.isDirty(i2, s2), children: [l(eN, { $leading: l(e1, { onRemove: () => {
      a2.delete(s2);
    } }), children: l(R, { sx: { opacity: 0.3, mr: "0.5em" }, children: String(n3) }) }), (_a = r2.$value) == null ? void 0 : _a.call(r2, o2, i2, { ...e6.ctx, path: s2, branch: [...e6.ctx.branch, i2] })] });
  }) })));
}, { displayName: "ArrayInput", props: ["ctx", "value", "typedef"] }), e0 = o((e6, t2) => {
  let { emit: n2, render: a2 } = t2, r2 = f(null), i2 = e_.from(r2), o2 = ej.from(r2), p2 = eh.from(r2), c2 = es.use(), u2 = () => {
    r2.value && (r2.value.value = "", r2.value.blur());
  }, y2 = (t3) => {
    if (t3 ?? (t3 = i2.value)) {
      let [a3, r3] = N.schemaProp(e6.typedef, "items").validate(t3, { coerce: true });
      if (a3) {
        c2.setError(e6.ctx.path, a3);
        return;
      }
      n2("add", r3);
    } else n2("add", void 0);
    u2();
  };
  s(i2, V((t3) => {
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
  }), d()), s(o2, V((e7) => {
    switch (e7.type) {
      case "COMMIT":
        y2();
        break;
      case "CANCEL":
        u2();
    }
  }), d());
  let m2 = s(p2, a2((e7) => l(A, { isOpen: e7, placement: "right-start", $content: h(eF, { children: [l(eu, { type: "button", onClick: () => o2.next({ type: "CANCEL" }), children: l(L, { path: B }) }), l(eu, { type: "button", onClick: () => o2.next({ type: "COMMIT" }), children: l(L, { path: _ }) })] }), children: l("div", { "data-input-wrapper": true, children: l("input", { ref: r2, type: "text", placeholder: "添加数组项 (可粘贴 JSON 字符串)" }) }) })));
  return () => l(eT, { path: e6.ctx.path, children: l(eU, { sx: { mx: -4 }, children: m2 }) });
}, { displayName: "AddItemIconBtn", props: ["ctx", "typedef"], emits: ["add"] }), e1 = o((e6, t2) => {
  let { emit: n2 } = t2;
  return () => l(ev, { $title: "移除项", children: l(eu, { type: "button", onClick: () => n2("remove"), children: l(L, { path: j }) }) });
}, { displayName: "RemoteItemIconBtn", emits: ["remove"] }), e8 = o((e6, t2) => {
  let { render: n2 } = t2, a2 = es.use(), r2 = ed.use();
  return s(e6.value$, n2((t3) => l(eI, { openToken: "{", closeToken: "}", $leading: l(ec, { children: l(eB, { value: t3 }) }), $trailing: l(eG, { ctx: e6.ctx, onAdd: (t4) => {
    a2.update([...e6.ctx.path, t4], void 0);
  } }, "prop-input"), children: [...e6.typedef.entries((() => {
    let e7 = {};
    for (let n3 of Object.keys(t3 ?? {}).toSorted()) e7[n3] = t3 == null ? void 0 : t3[n3];
    return e7;
  })(), e6.ctx)].map((n3) => {
    var _a;
    let [i2, o2, s2] = n3;
    if (!Object.hasOwn(t3, i2)) return null;
    let d2 = [...e6.ctx.path, i2];
    return h(eT, { path: d2, dirty: a2.isDirty(o2, d2), children: [l(eN, { $leading: l(eX, { onRemove: () => {
      a2.delete(d2);
    } }), children: String(i2) }), h(ew, { children: [":", " "] }), (_a = r2.$value) == null ? void 0 : _a.call(r2, s2, o2, { ...e6.ctx, path: d2, branch: [...e6.ctx.branch, o2] })] });
  }) })));
}, { displayName: "RecordInput", props: ["ctx", "value", "typedef"] }), e2 = o((e6, t2) => {
  let { render: n2 } = t2;
  return s(e6.value$, n2((t3) => er(t3) ? l(eZ, { value: t3, typedef: C(k()), ctx: e6.ctx }) : ei(t3) ? l(e8, { value: t3, typedef: S($(), k()), ctx: e6.ctx }) : l(eH, { value: t3, typedef: k(), ctx: e6.ctx, allowRawJSON: true })));
}, { displayName: "AnyInput", props: ["typedef", "ctx", "value"] }), e4 = (e6, t2, n2) => "object" == e6.type || "intersection" == e6.type || "union" == e6.type && N.schemaProp(e6, "discriminator") ? l(eq, { typedef: e6, value: t2 ?? {}, ctx: n2 }) : "union" == e6.type && Z(N.schemaProp(e6, "discriminator")) ? l(eH, { typedef: e6, value: t2, ctx: n2 }) : "record" == e6.type ? l(e8, { typedef: e6, value: t2, ctx: n2 }) : "array" == e6.type ? l(eZ, { typedef: e6, value: t2, ctx: n2 }) : "any" == e6.type || "unknown" == e6.type ? l(e2, { typedef: e6, value: t2, ctx: n2 }) : l(eH, { typedef: e6, value: t2, ctx: n2 }), e3 = o((e6, t2) => {
  let { render: n2 } = t2, a2 = es.use(), r2 = ed.use(), i2 = v(null);
  return s(a2, n2((e7) => {
    let t3 = r2.$value ?? e4;
    return l(ez, { children: l(ed, { value: { $value: r2.$value ?? e4 }, children: h(e5, { children: [l("section", { ref: i2 }), i2.value && l(eE, { value: { indent: 0, $container: i2 }, children: l(eT, { path: [], viewOnly: true, children: t3(a2.typedef, e7, O) }) })] }) }) });
  }));
}, { displayName: "JSONEditorView" }), e5 = E("div", { displayName: "JSONEditorContainer" })({ width: "100%", height: "100%", overflow: "auto", section: { display: "flex", flexDirection: "column", minWidth: "max-content" } });
export {
  eo as J,
  es as a,
  e3 as b,
  eM as c
};
