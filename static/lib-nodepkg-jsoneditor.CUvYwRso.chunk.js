var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var _e, _t, _n;
var e, t, n, r;
import { c as i, I as a, j as l, a as o, r as s, s as d, b as c, d as p, e as u, f as h, T as y, F as f, o as x, t as v, g as m } from "./lib-nodepkg-vuekit.CHzlo9N-.chunk.js";
import { J as g, o as b, g as w, S as $, a as k, b as S, r as C, s as O, E } from "./lib-nodepkg-typedef.BFByxoLV.chunk.js";
import { s as N, a as T, P as D, v as A, b as I, B as J } from "./lib-nodepkg-vueuikit.BW1khRTk.chunk.js";
import { I as R, a as _ } from "./lib-nodepkg-vuematerial.Db9aG9Zu.chunk.js";
import { m as M, a as j, b as L, c as P, d as W } from "./webapp-vuekit-layout.DIgu0-7_.chunk.js";
import { O as B, s as z, m as H, f as U, d as F, t as K, E as V, c as X, B as q, S as G } from "./vendor-rxjs.DRCj7jR9.chunk.js";
import { i as Q, g as Y, a as Z, b as ee, s as et, l as en, c as er, d as ei, e as ea } from "./vendor-innoai-tech-lodash.DPqHE-zk.chunk.js";
import { M as el } from "./lib-nodepkg-vuemarkdown.CGtATy5_.chunk.js";
const _eo = class _eo extends B {
  constructor(e9, t2) {
    super((e10) => {
      let t3 = __privateGet(this, _e).subscribe(e10);
      return () => {
        t3.unsubscribe();
      };
    });
    __privateAdd(this, _e, new a({}));
    __privateAdd(this, _t, new a({}));
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
    if (__privateGet(this, _t).next({}), 0 == e9.length) return void __privateGet(this, _e).next(t2);
    ee(t2) ? __privateGet(this, _e).next((r2) => {
      let i2 = Y(r2, e9, n2);
      t2(i2), et(r2, e9, i2);
    }) : __privateGet(this, _e).next((n3) => {
      et(n3, e9, t2);
    });
  }
  delete(e9) {
    0 != e9.length && __privateGet(this, _e).next((t2) => {
      let n2 = en(e9);
      if (er(n2)) {
        let r3 = e9.slice(0, e9.length - 1), i3 = r3.length > 0 ? Y(t2, r3) : t2;
        if (ei(i3)) return void i3.splice(n2, 1);
      }
      let r2 = e9.slice(0, e9.length - 1), i2 = r2.length > 0 ? Y(t2, r2) : t2;
      delete i2[n2];
    });
  }
  get error$() {
    return __privateGet(this, _t);
  }
  setError(e9, t2) {
    let n2 = g.create(e9);
    __privateGet(this, _t).next((e10) => {
      null === t2 ? delete e10[n2] : e10[n2] = t2;
    });
  }
};
_e = new WeakMap();
_t = new WeakMap();
let eo = _eo;
let es = i(() => new eo(b(), {})), ed = i(() => ({})), ec = N("span")({ px: 2, pos: "relative", display: "flex", alignItems: "center", gap: 8, visibility: "hidden" }), ep = N("span", (e9, t2) => {
  let { slots: n2 } = t2;
  return (e10) => {
    var _a;
    return l(e10, { children: l(ec, { "data-visible-on-hover": true, children: (_a = n2.default) == null ? void 0 : _a.call(n2) }) });
  };
})({ display: "flex" }), eu = N(R)({ transition: "none", width: 24, height: 24, rounded: 12, [`& ${_}`]: { svg: { width: 18, height: 18 } } });
class eh extends a {
  static from(e9) {
    let t2 = new eh(false);
    return s(e9, z((e10) => e10 ? H(s(U(e10, "focus"), K(() => {
      t2.show();
    })), s(U(e10, "blur"), F(200), K(() => {
      t2.value && t2.hide();
    }))) : V), d()), t2;
  }
  show() {
    this.next(true);
  }
  hide() {
    this.next(false);
  }
}
let ey = T({ apply(e9) {
  let { elements: t2, rects: n2 } = e9;
  Object.assign(t2.floating.style, { width: `${n2.reference.width}px` });
} }), ef = o((e9, t2) => {
  let { emit: n2, slots: r2, render: i2 } = t2, a2 = e9.open$ ?? new eh(false), o2 = (e10) => {
    let t3 = [e10.target, ...e10.composedPath()].find((e11) => {
      var _a;
      return (_a = e11 == null ? void 0 : e11.hasAttribute) == null ? void 0 : _a.call(e11, "data-value");
    });
    if (t3) {
      let e11 = t3.getAttribute("data-value");
      Z(e11) || (n2("selected", e11), a2.hide());
    }
  };
  return s(a2, i2((e10) => {
    var _a, _b, _c;
    return l(D, { isOpen: e10, onClickOutside: () => a2.hide(), onEscKeydown: () => a2.hide(), placement: "bottom-start", middleware: [ey], $content: l(ex, { onClick: o2, children: (_a = r2.content) == null ? void 0 : _a.call(r2) }), children: ((_c = (_b = r2.default) == null ? void 0 : _b.call(r2)) == null ? void 0 : _c[0]) ?? null });
  }));
});
o((e9, t2) => {
  let { slots: n2, render: r2 } = t2, i2 = e9.open$ ?? new eh(false);
  return s(i2, r2((e10) => {
    var _a, _b, _c;
    return l(D, { isOpen: e10, onClickOutside: () => i2.hide(), placement: "bottom-start", $content: l(ex, { children: (_a = n2.content) == null ? void 0 : _a.call(n2) }), children: ((_c = (_b = n2.default) == null ? void 0 : _b.call(n2)) == null ? void 0 : _c[0]) ?? null });
  }));
});
let ex = N("div")({ textStyle: "sys.body-small", pos: "relative", roundedBottom: "sm", containerStyle: "sys.surface-container-lowest", borderBottom: "1px solid", borderRight: "1px solid", borderLeft: "1px solid", borderColor: A("sys.outline-variant", I(0.38)) }), ev = N("div")({ px: 8, py: 2, gap: 8, display: "flex", alignItems: "center", justifyContent: "space-between", textAlign: "right", textStyle: "sys.body-small", cursor: "pointer", _hover: { containerStyle: "sys.surface-container" }, _focus: { containerStyle: "sys.surface-container", outline: 0 } }), em = o((e9, t2) => {
  let { slots: n2, render: r2 } = t2, i2 = new eh(false);
  return s(i2, r2((t3) => {
    var _a;
    let r3 = (_a = n2.default) == null ? void 0 : _a.call(n2)[0];
    return l(D, { isOpen: t3, placement: e9.placement ?? "left", $content: l(eb, { children: l(eg, { children: n2.title() }) }), children: r3 ? c(r3, { onMouseover: () => {
      i2.show();
    }, onMouseout: () => {
      i2.hide();
    } }) : null });
  }));
}), eg = N("div")({ py: 4, px: 12, rounded: "xs", shadow: "3", textStyle: "sys.body-small", containerStyle: "sys.on-surface", pos: "relative", zIndex: 100 }), eb = N("div")({ px: 8 }), ew = N("span")({ textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", fontSize: 12, lineHeight: 24, wordBreak: "keep-all", whiteSpace: "nowrap", font: "code", opacity: 0.3 }), e$ = o((e9, t2) => {
  let { slots: n2 } = t2;
  return () => {
    var _a;
    return p(eS, { "data-deprecated": e9.deprecated, "data-optional": e9.optional, "data-nullable": e9.nullable, children: [n2.leading && l(ek, { "data-visible-on-hover": true, children: n2.leading() }), (_a = n2.default) == null ? void 0 : _a.call(n2)] });
  };
}), ek = N(ec)({ position: "absolute", ml: -28 }), eS = N("div")({ position: "relative", display: "flex", alignItems: "center", textStyle: "sys.label-small", fontWeight: "bold", fontFamily: "inherit", wordBreak: "keep-all", whiteSpace: "nowrap", border: "1px solid", borderColor: "rgba(0,0,0,0)", fontSize: 12, lineHeight: 24, _deprecated: { textDecoration: "line-through" }, _optional: { "&:after": { content: '"?"', color: "sys.secondary", opacity: 0.58 } } }), eC = N("div")({ position: "absolute", zIndex: 1, left: 0, opacity: 0.58, fontSize: 10, lineHeight: 10, top: 0, "& > *": { display: "flex", alignItems: "center", gap: 4, "&::before": { content: '"// "', font: "code" } } }), eO = N("div")({ display: "block", fontSize: 10, lineHeight: 14, color: "sys.error" }), eE = N("div")({ position: "relative", py: 4, _hover: { containerStyle: "sys.surface-container", "& [data-visible-on-hover]": { visibility: "visible" } }, "&:focus-within": { containerStyle: "sys.surface-container" }, _dirty: { bgColor: A("sys.warning-container", I(0.38)) }, _error: { bgColor: "sys.error-container" }, [`&:has(${ep})`]: { [`& > ${eO}`]: { display: "none" }, _error: { bgColor: "inherit" } } }), eN = i(() => ({ indent: 0, $container: u(null) }), { name: "IntentContext" }), eT = h((e9, t2) => {
  let { slots: n2 } = t2, r2 = eN.use(), i2 = u(null), a2 = u(null);
  return () => {
    var _a, _b, _c;
    return p(f, { children: [l(ew, { children: e9.openToken }), (_a = n2.leading) == null ? void 0 : _a.call(n2), p(y, { to: r2.$container.value, children: [p(eI, { "data-indent": r2.indent, children: [l(eA, { ref: i2 }), l(eJ, { ref: a2 }), a2.value && l(eN, { value: { $container: a2, indent: 1 + (r2.indent ?? 0) }, children: (_b = n2.trailing) == null ? void 0 : _b.call(n2) })] }), l(eR, { style: { paddingLeft: `${32 * r2.indent}px`, display: "flex" }, children: l(ew, { children: e9.closeToken }) })] }), i2.value && l(eN, { value: { $container: i2, indent: 1 + (r2.indent ?? 0) }, children: (_c = n2.default) == null ? void 0 : _c.call(n2) })] });
  };
}), eD = o((e9, t2) => {
  let { slots: n2, render: r2 } = t2, i2 = eN.use(), a2 = s(es.use().error$, r2((t3) => {
    var _a;
    let r3 = g.create(e9.path), a3 = !e9.viewOnly && !!t3[r3];
    return p(eE, { "data-error": a3, "data-dirty": e9.dirty, style: { paddingLeft: `${32 * i2.indent}px` }, children: [(e9.title || e9.description) && l(eC, { style: { paddingLeft: `${32 * i2.indent}px` }, children: e9.description ? l(em, { $title: l(e_, { children: l(el, { text: e9.description }) }), children: p("div", { children: [e9.title, " ", l(_, { path: M })] }) }) : l("span", { children: e9.title }) }), l(eR, { children: (_a = n2.default) == null ? void 0 : _a.call(n2) }), a3 && l(eO, { children: `${t3[r3]}` })] });
  }));
  return () => l(y, { to: i2.$container.value, children: a2 });
}), eA = N("div")({}), eI = N("section")({}), eJ = N("div")({}), eR = N("div")({ display: "flex", alignItems: "start", pr: 10 }), e_ = N("span")({ display: "block", textStyle: "sys.body-small", "& p": { my: 1, wordBreak: "keep-all", whiteSpace: "nowrap", opacity: 0.7 }, "& code": { wordBreak: "keep-all", whiteSpace: "nowrap" } }), eM = N("form")({ display: "flex", pos: "absolute", right: 0, bottom: 0, px: 8 });
N("div")({ display: "flex", flexDirection: "column", pos: "relative", textarea: { minW: 400, outline: "none", border: "none", bg: "none", py: 8, px: 12 } }), N("div")({ display: "flex", alignItems: "center", gap: 8, pos: "relative", px: 8, input: { outline: "none", border: "none", bg: "none", minWidth: "10vw", py: 8, px: 12 }, [`& ${eM}`]: { pos: "relative", px: 0 } });
let ej = w(function() {
  if (r) return n;
  r = 1;
  var i2 = t ? e : (t = 1, e = function() {
    var e9 = document.getSelection();
    if (!e9.rangeCount) return function() {
    };
    for (var t2 = document.activeElement, n2 = [], r2 = 0; r2 < e9.rangeCount; r2++) n2.push(e9.getRangeAt(r2));
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
  }), a2 = { "text/plain": "Text", "text/html": "Url", default: "Text" };
  return n = function(e9, t2) {
    var n2, r2, l2, o2, s2, d2, c2, p2, u2 = false;
    t2 || (t2 = {}), l2 = t2.debug || false;
    try {
      if (s2 = i2(), d2 = document.createRange(), c2 = document.getSelection(), (p2 = document.createElement("span")).textContent = e9, p2.ariaHidden = "true", p2.style.all = "unset", p2.style.position = "fixed", p2.style.top = 0, p2.style.clip = "rect(0, 0, 0, 0)", p2.style.whiteSpace = "pre", p2.style.webkitUserSelect = "text", p2.style.MozUserSelect = "text", p2.style.msUserSelect = "text", p2.style.userSelect = "text", p2.addEventListener("copy", function(n3) {
        if (n3.stopPropagation(), t2.format) if (n3.preventDefault(), void 0 === n3.clipboardData) {
          l2 && console.warn("unable to use e.clipboardData"), l2 && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var r3 = a2[t2.format] || a2.default;
          window.clipboardData.setData(r3, e9);
        } else n3.clipboardData.clearData(), n3.clipboardData.setData(t2.format, e9);
        t2.onCopy && (n3.preventDefault(), t2.onCopy(n3.clipboardData));
      }), document.body.appendChild(p2), d2.selectNodeContents(p2), c2.addRange(d2), !document.execCommand("copy")) throw Error("copy command was unsuccessful");
      u2 = true;
    } catch (i3) {
      l2 && console.error("unable to copy using execCommand: ", i3), l2 && console.warn("trying IE specific stuff");
      try {
        window.clipboardData.setData(t2.format || "text", e9), t2.onCopy && t2.onCopy(window.clipboardData), u2 = true;
      } catch (i4) {
        l2 && console.error("unable to copy using clipboardData: ", i4), l2 && console.error("falling back to prompt"), n2 = "message" in t2 ? t2.message : "Copy to clipboard: #{key}, Enter", r2 = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C", o2 = n2.replace(/#{\s*key\s*}/g, r2), window.prompt(o2, e9);
      }
    } finally {
      c2 && ("function" == typeof c2.removeRange ? c2.removeRange(d2) : c2.removeAllRanges()), p2 && document.body.removeChild(p2), s2();
    }
    return u2;
  };
}()), eL = o((e9, t2) => () => l(em, { $title: "复制当前节点为 JSON 字符串", children: l(eu, { type: "button", onClick: () => ej(JSON.stringify(e9.value, null, 2)), children: l(_, { path: j }) }) }));
class eP extends q {
  static from(e9) {
    let t2 = new eP("");
    return s(e9, z((e10) => e10 ? s(U(e10, "input"), K((e11) => {
      t2.next(e11.target.value.trim());
    })) : V), d()), t2;
  }
}
class eW extends G {
  static from(e9) {
    let t2 = new eW();
    return s(e9, z((e10) => e10 ? H(s(U(e10, "keypress"), K((e11) => {
      "Enter" !== e11.key || e11.shiftKey || (e11.preventDefault(), t2.next({ type: "COMMIT" }));
    })), s(U(e10, "keydown"), K((e11) => {
      switch (e11.key) {
        case "Tab":
        case "ArrowDown":
          e11.target.getAttribute("data-options") && (e11.preventDefault(), t2.next({ type: "SELECT", direction: 1 }));
          break;
        case "ArrowUp":
          e11.target.getAttribute("data-options") && (e11.preventDefault(), t2.next({ type: "SELECT", direction: -1 }));
      }
    })), s(U(e10, "keyup"), K((e11) => {
      "Escape" === e11.key && t2.next({ type: "CANCEL" });
    }))) : V), d()), t2;
  }
}
class eB extends B {
  constructor() {
    super((e9) => {
      let t2 = __privateGet(this, _n).subscribe(e9);
      return () => t2.unsubscribe();
    });
    __privateAdd(this, _n, new q(null));
  }
  static sync(e9, t2) {
    return s(H(s(e9, K((e10) => {
      e10 && e10 == g.create(t2.path()) && t2.editing$.show();
    })), s(t2.editing$, F(1), K((n2) => {
      n2 || e9.disable(t2.path());
    })), s(X([t2.value$, e9]), F(1), K((n2) => {
      let [r2, i2] = n2;
      Z(r2) && !i2 && e9.enable(t2.path());
    }))), d());
  }
  enable(e9) {
    __privateGet(this, _n).value || __privateGet(this, _n).next(g.create(e9));
  }
  disable(e9) {
    __privateGet(this, _n).value === g.create(e9) && __privateGet(this, _n).next(null);
  }
}
_n = new WeakMap();
let ez = i(() => new eB()), eH = o((e9, t2) => {
  let n2, { render: r2 } = t2, i2 = x(null), o2 = x(null), c2 = x(null), u2 = eW.from(c2), h2 = eP.from(c2), y2 = ez.use(), f2 = eh.from(c2), m2 = es.use();
  eB.sync(y2, { editing$: f2, value$: e9.value$, path: () => e9.ctx.path });
  let g2 = () => {
    if ("enums" === e9.typedef.type) {
      let t3 = ($.schemaProp(e9.typedef, "enum") ?? []).indexOf(e9.value);
      if (t3 > -1) return t3;
    }
    return 0;
  }, b2 = new a({ index: g2() }), w2 = () => {
    h2.next(""), f2.hide();
  }, k2 = () => {
    w2(), b2.next({ index: g2() }), Z(e9.value) && m2.delete(e9.ctx.path);
  }, S2 = (t3) => {
    var _a, _b;
    if ("enums" === e9.typedef.type) {
      let n4 = $.schemaProp(e9.typedef, "enum") ?? [];
      t3 ?? (t3 = n4[b2.value.index % n4.length]);
    } else t3 ?? (t3 = ((_a = c2.value) == null ? void 0 : _a.value) ? (_b = c2.value) == null ? void 0 : _b.value : void 0);
    if (Z(t3)) return void m2.delete(e9.ctx.path);
    let [n3, r3] = e9.typedef.validate(t3, { coerce: true });
    if (n3) return void m2.setError(e9.ctx.path, n3.message);
    m2.update(e9.ctx.path, r3), w2();
  };
  return (e9.allowRawJSON && s(h2, K((t3) => {
    let n3 = t3.trim();
    if (n3.startsWith("{") && n3.endsWith("}") || n3.startsWith("[") && n3.endsWith("]")) try {
      let t4 = JSON.parse(n3);
      m2.update(e9.ctx.path, t4), w2();
    } catch (t4) {
      m2.setError(e9.ctx.path, "无效的 JSON 字符串");
    }
  }), d()), s(u2, K((e10) => {
    switch (e10.type) {
      case "SELECT":
        b2.next((t3) => {
          t3.index += e10.direction;
        });
        break;
      case "COMMIT":
        S2();
        break;
      case "CANCEL":
        k2();
    }
  }), d()), s(H(s(o2, v((e10) => {
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
  })), s(c2, F(1), K((e10) => {
    e10 && (e10 == null ? void 0 : e10.focus(), e10.value && (e10.selectionStart = 0, e10.selectionEnd = e10.value.length));
  })), s(c2, z((e10) => {
    if (e10) {
      let t3 = n2 ? n2 - 2 : e10.getBoundingClientRect().height, r3 = (e11) => {
        e11.style.height = `${t3 ?? 0}px`, e11.style.height = `${e11.scrollHeight}px`;
      };
      return setTimeout(() => r3(e10)), H(s(U(e10, "blur"), K((t4) => {
        var _a, _b;
        t4.relatedTarget && (((_a = o2.value) == null ? void 0 : _a.contains(t4.relatedTarget)) || ((_b = i2.value) == null ? void 0 : _b.contains(t4.relatedTarget))) || (t4.preventDefault(), S2(e10.value));
      })), s(U(e10, "input"), K((e11) => {
        r3(e11.target), h2.next(e11.target.value);
      })));
    }
    return V;
  }))), d()), "enums" == e9.typedef.type) ? s(X([e9.value$, f2, b2]), r2((t3) => {
    let [n3, r3, { index: a2 }] = t3, s2 = $.schemaProp(e9.typedef, "enum") ?? [], d2 = $.metaProp(e9.typedef, "enumLabels") ?? [];
    return l(eV, { ref: o2, onClick: () => {
      f2.show();
    }, "data-type": typeof n3, tabindex: 0, children: r3 ? l(ef, { onSelected: (e10) => {
      S2(e10);
    }, open$: f2, $content: l("div", { ref: i2, children: s2.map((e10, t4) => l(eq, { "data-focus": a2 % s2.length === t4, value: e10, label: d2[t4] })) }), children: l(eF, { children: l("input", { value: void 0 == n3 ? "" : `${n3}`, ref: c2, "data-options": true }) }) }) : l(eK, { children: JSON.stringify(n3) ?? "undefined" }) });
  })) : s(X([e9.value$, f2]), r2((e10) => {
    let [t3, n3] = e10;
    return l(eV, { ref: o2, onClick: () => {
      f2.show();
    }, "data-type": typeof t3, tabindex: 0, onFocus: () => {
      f2.show();
    }, children: n3 ? l(D, { isOpen: true, placement: "right-start", $content: p(eU, { ref: i2, children: [l(eu, { type: "button", onClick: () => u2.next({ type: "CANCEL" }), children: l(_, { path: L }) }), l(eu, { type: "button", onClick: () => u2.next({ type: "COMMIT" }), children: l(_, { path: P }) })] }), children: l(eF, { children: l("textarea", { ref: c2, rows: 1, value: void 0 == t3 ? "" : `${t3}` }) }) }) : l(eK, { children: JSON.stringify(t3) ?? "undefined" }) });
  }));
}), eU = N("div")({ borderRight: "1px solid", borderTop: "1px solid", borderBottom: "1px solid", borderColor: A("sys.outline-variant", I(0.38)), containerStyle: "sys.surface-container-lowest", roundedRight: "sm", display: "flex", px: 2, py: 0, ml: -4 }), eF = N("div")({ width: "100%", maxWidth: "40vw", display: "flex", alignItems: "center", border: "1px solid", overflow: "hidden", borderColor: A("sys.outline-variant", I(0.38)), opacity: 0.38, "&:hover": { opacity: 1 }, "&:focus-within": { opacity: 1 }, "& > textarea,input": { flex: 1, rounded: "xs", containerStyle: "sys.surface-container-lowest", width: "100%", outline: "none", border: "none", px: 8, py: 0, m: 0, fontSize: "inherit", color: "inherit", lineHeight: "inherit", overflow: "hidden", resize: "none", "&[data-options]:focus": { roundedBottom: 0 } } }), eK = N("div")({ border: "1px solid", borderColor: "rgba(0,0,0,0)", maxWidth: "40vw", width: "100%", overflow: "hidden", textOverflow: "ellipsis", _hover: { textOverflow: "clip", whiteSpace: "normal", wordBreak: "break-all" } }), eV = N("div")({ wordBreak: "keep-all", whiteSpace: "nowrap", cursor: "pointer", display: "flex", alignItems: "center", font: "code", width: "100%", textStyle: "sys.label-small", fontSize: 12, lineHeight: 24, gap: 8, _type__string: { color: "sys.primary" }, _type__number: { color: "sys.primary" }, _type__boolean: { color: "sys.warning" }, _type__undefined: { color: "sys.error" } }), eX = N(ev)({ [`& ${e$}`]: { textAlign: "left" } }), eq = h((e9) => () => p(eX, { "data-value": e9.value, tabindex: 0, children: [l(e$, { children: e9.value }), e9.label && l(e_, { children: e9.label })] })), eG = o((e9, t2) => {
  let { emit: n2 } = t2;
  return () => l(em, { $title: "删除属性", children: l(eu, { type: "button", onClick: () => n2("remove"), children: l(_, { path: W }) }) });
}), eQ = o((e9, t2) => {
  let { render: n2 } = t2, r2 = es.use(), i2 = ed.use();
  return s(e9.value$, n2((t3) => l(eT, { openToken: "{", closeToken: "}", $leading: l(ep, { children: l(eL, { value: t3 }) }), $trailing: l(eY, { ctx: e9.ctx, onAdd: (t4) => {
    r2.update([...e9.ctx.path, t4], void 0);
  }, options: [...e9.typedef.entries(t3, e9.ctx)].filter((e10) => {
    let [n3] = e10;
    return !Object.hasOwn(t3, n3);
  }).map((e10) => {
    let [t4, n3, r3] = e10;
    return { propName: String(t4), typedef: r3 };
  }) }, "prop-input"), children: [...e9.typedef.entries(t3, e9.ctx)].map((n3) => {
    var _a;
    let [a2, o2, s2] = n3;
    if (!Object.hasOwn(t3, a2)) return null;
    let d2 = [...e9.ctx.path, a2];
    return p(eD, { path: d2, dirty: r2.isDirty(o2, d2), title: $.metaProp(s2, "title"), description: $.metaProp(s2, "description"), children: [l(e$, { deprecated: $.schemaProp(s2, "deprecated"), $leading: l(eG, { onRemove: () => {
      r2.delete(d2);
    } }), children: String(a2) }), p(ew, { children: [":", " "] }), (_a = i2.$value) == null ? void 0 : _a.call(i2, s2, o2, { ...e9.ctx, path: d2, branch: [...e9.ctx.branch, o2] })] });
  }) })));
}), eY = o((e9, t2) => {
  let { emit: n2, render: r2 } = t2, i2 = x(null), o2 = eW.from(i2), c2 = eP.from(i2), u2 = eh.from(i2), h2 = es.use(), y2 = new a({ index: 0 }), f2 = () => {
    u2.hide(), c2.next(""), i2.value && (i2.value.value = "", i2.value.blur()), y2.next({ index: 0 });
  };
  s(c2, K((t3) => {
    let n3 = t3.trim();
    if (n3.startsWith("{") && n3.endsWith("}")) try {
      let t4 = JSON.parse(n3);
      h2.update(e9.ctx.path, t4), f2();
    } catch (t4) {
      h2.setError(e9.ctx.path, "无效的 JSON 字符串");
    }
  }), d());
  let v2 = (t3) => {
    var _a;
    e9.options ? t3 ?? (t3 = (_a = e9.options[y2.value.index % e9.options.length]) == null ? void 0 : _a.propName) : t3 ?? (t3 = c2.value), t3 ? (n2("add", t3), f2()) : h2.setError([...e9.ctx.path, $.RecordKey], "无效的属性值");
  };
  s(o2, K((e10) => {
    switch (e10.type) {
      case "SELECT":
        y2.next((t3) => {
          t3.index += e10.direction;
        });
        break;
      case "COMMIT":
        v2();
        break;
      case "CANCEL":
        f2();
    }
  }), d());
  let m2 = s(u2, r2((e10) => l(eF, { children: l("input", { ref: i2, type: "text", placeholder: "添加属性 (可粘贴 JSON 字符串)", "data-options": e10 }) })));
  return s(X([c2, u2, y2, e9.options$]), r2((t3) => {
    let [n3, r3, a2, s2] = t3;
    return s2 ? s2.length > 0 ? l(eD, { path: e9.ctx.path, children: l(eV, { sx: { mx: -4 }, children: l(ef, { onSelected: (e10) => {
      v2(e10);
    }, open$: u2, $content: l("div", { children: s2.map((e10, t4) => n3 && !e10.propName.includes(n3) ? null : l(eZ, { propName: e10.propName, typedef: e10.typedef, "data-focus": t4 === a2.index % s2.length })) }), children: m2 }) }) }) : null : l(eD, { path: [...e9.ctx.path, $.RecordKey], children: l(eV, { sx: { mx: -4 }, children: l(D, { isOpen: r3, placement: "right-start", $content: p(eU, { children: [l(eu, { type: "button", onClick: () => o2.next({ type: "CANCEL" }), children: l(_, { path: L }) }), l(eu, { type: "button", onClick: () => o2.next({ type: "COMMIT" }), children: l(_, { path: P }) })] }), children: l(eF, { children: l("input", { ref: i2, type: "text", placeholder: "添加属性 (可粘贴 JSON 字符串)" }) }) }) }) });
  }));
}), eZ = h((e9) => () => p(e0, { "data-value": e9.propName, tabindex: 0, children: [l(e$, { optional: $.schemaProp(e9.typedef, $.optional), children: e9.propName }), l(e_, { children: $.metaProp(e9.typedef, "title") })] })), e0 = N(ev)({ [`& ${e$}`]: { textAlign: "left" } }), e1 = o((e9, t2) => {
  let { render: n2 } = t2, r2 = es.use(), i2 = ed.use();
  return s(e9.value$, n2((t3) => l(eT, { openToken: "[", closeToken: "]", $leading: l(ep, { children: l(eL, { value: t3 }) }), $trailing: l(e2, { ctx: e9.ctx, typedef: e9.typedef, onAdd: (t4) => {
    r2.update(e9.ctx.path, (e10) => {
      e10.push(t4);
    }, []);
  } }), children: [...e9.typedef.entries(t3, e9.ctx)].map((t4) => {
    var _a;
    let [n3, a2, o2] = t4, s2 = [...e9.ctx.path, n3];
    return p(eD, { path: s2, dirty: r2.isDirty(a2, s2), children: [l(e$, { $leading: l(e8, { onRemove: () => {
      r2.delete(s2);
    } }), children: l(J, { sx: { opacity: 0.3, mr: "0.5em" }, children: String(n3) }) }), (_a = i2.$value) == null ? void 0 : _a.call(i2, o2, a2, { ...e9.ctx, path: s2, branch: [...e9.ctx.branch, a2] })] });
  }) })));
}), e2 = o((e9, t2) => {
  let { emit: n2, render: r2 } = t2, i2 = x(null), a2 = eP.from(i2), o2 = eW.from(i2), c2 = eh.from(i2), u2 = es.use(), h2 = () => {
    i2.value && (i2.value.value = "", i2.value.blur());
  }, y2 = (t3) => {
    if (t3 ?? (t3 = a2.value)) {
      let [r3, i3] = $.schemaProp(e9.typedef, "items").validate(t3, { coerce: true });
      if (r3) return void u2.setError(e9.ctx.path, r3);
      n2("add", i3);
    } else n2("add", void 0);
    h2();
  };
  s(a2, K((t3) => {
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
  }), d()), s(o2, K((e10) => {
    switch (e10.type) {
      case "COMMIT":
        y2();
        break;
      case "CANCEL":
        h2();
    }
  }), d());
  let f2 = s(c2, r2((e10) => l(D, { isOpen: e10, placement: "right-start", $content: p(eU, { children: [l(eu, { type: "button", onClick: () => o2.next({ type: "CANCEL" }), children: l(_, { path: L }) }), l(eu, { type: "button", onClick: () => o2.next({ type: "COMMIT" }), children: l(_, { path: P }) })] }), children: l(eF, { children: l("input", { ref: i2, type: "text", placeholder: "添加数组项 (可粘贴 JSON 字符串)" }) }) })));
  return () => l(eD, { path: e9.ctx.path, children: l(eV, { sx: { mx: -4 }, children: f2 }) });
}), e8 = o((e9, t2) => {
  let { emit: n2 } = t2;
  return () => l(em, { $title: "移除项", children: l(eu, { type: "button", onClick: () => n2("remove"), children: l(_, { path: W }) }) });
}), e4 = o((e9, t2) => {
  let { render: n2 } = t2, r2 = es.use(), i2 = ed.use();
  return s(e9.value$, n2((t3) => l(eT, { openToken: "{", closeToken: "}", $leading: l(ep, { children: l(eL, { value: t3 }) }), $trailing: l(eY, { ctx: e9.ctx, onAdd: (t4) => {
    r2.update([...e9.ctx.path, t4], void 0);
  } }, "prop-input"), children: [...e9.typedef.entries((() => {
    let e10 = {};
    for (let n3 of Object.keys(t3 ?? {}).toSorted()) e10[n3] = t3 == null ? void 0 : t3[n3];
    return e10;
  })(), e9.ctx)].map((n3) => {
    var _a;
    let [a2, o2, s2] = n3;
    if (!Object.hasOwn(t3, a2)) return null;
    let d2 = [...e9.ctx.path, a2];
    return p(eD, { path: d2, dirty: r2.isDirty(o2, d2), children: [l(e$, { $leading: l(eG, { onRemove: () => {
      r2.delete(d2);
    } }), children: String(a2) }), p(ew, { children: [":", " "] }), (_a = i2.$value) == null ? void 0 : _a.call(i2, s2, o2, { ...e9.ctx, path: d2, branch: [...e9.ctx.branch, o2] })] });
  }) })));
}), e3 = o((e9, t2) => {
  let { render: n2 } = t2;
  return s(e9.value$, n2((t3) => ei(t3) ? l(e1, { value: t3, typedef: k(S()), ctx: e9.ctx }) : ea(t3) ? l(e4, { value: t3, typedef: C(O(), S()), ctx: e9.ctx }) : l(eH, { value: t3, typedef: S(), ctx: e9.ctx, allowRawJSON: true })));
}), e5 = (e9, t2, n2) => "object" == e9.type || "intersection" == e9.type || "union" == e9.type && $.schemaProp(e9, "discriminator") ? l(eQ, { typedef: e9, value: t2 ?? {}, ctx: n2 }) : "union" == e9.type && Z($.schemaProp(e9, "discriminator")) ? l(eH, { typedef: e9, value: t2, ctx: n2 }) : "record" == e9.type ? l(e4, { typedef: e9, value: t2, ctx: n2 }) : "array" == e9.type ? l(e1, { typedef: e9, value: t2, ctx: n2 }) : "any" == e9.type || "unknown" == e9.type ? l(e3, { typedef: e9, value: t2, ctx: n2 }) : l(eH, { typedef: e9, value: t2, ctx: n2 }), e7 = o((e9, t2) => {
  let { render: n2 } = t2, r2 = es.use(), i2 = ed.use(), a2 = m(null);
  return s(r2, n2((e10) => {
    let t3 = i2.$value ?? e5;
    return l(ez, { children: l(ed, { value: { $value: i2.$value ?? e5 }, children: p(e6, { children: [l("section", { ref: a2 }), a2.value && l(eN, { value: { indent: 0, $container: a2 }, children: l(eD, { path: [], viewOnly: true, children: t3(r2.typedef, e10, E) }) })] }) }) });
  }));
}), e6 = N("div")({ width: "100%", height: "100%", overflow: "auto", section: { display: "flex", flexDirection: "column", minWidth: "max-content" } });
export {
  eo as J,
  es as a,
  e7 as b,
  ej as c
};
