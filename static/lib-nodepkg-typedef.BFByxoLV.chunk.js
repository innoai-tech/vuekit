var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a;
(function() {
  let e2 = document.createElement("link").relList;
  if (!(e2 && e2.supports && e2.supports("modulepreload"))) {
    for (let e3 of document.querySelectorAll('link[rel="modulepreload"]')) t2(e3);
    new MutationObserver((e3) => {
      for (let r2 of e3) if ("childList" === r2.type) for (let e4 of r2.addedNodes) "LINK" === e4.tagName && "modulepreload" === e4.rel && t2(e4);
    }).observe(document, { childList: true, subtree: true });
  }
  function t2(e3) {
    if (e3.ep) return;
    e3.ep = true;
    let t3 = function(e4) {
      let t4 = {};
      return e4.integrity && (t4.integrity = e4.integrity), e4.referrerPolicy && (t4.referrerPolicy = e4.referrerPolicy), "use-credentials" === e4.crossOrigin ? t4.credentials = "include" : "anonymous" === e4.crossOrigin ? t4.credentials = "omit" : t4.credentials = "same-origin", t4;
    }(e3);
    fetch(e3.href, t3);
  }
})();
let e = (e2) => void 0 === e2, t = (e2) => Object.is(e2, null), r = (e2) => !!e2 && "object" == typeof e2, n = (e2) => !!e2 && e2.constructor == Object, i = (e2) => Array.isArray(e2), a = (e2) => "number" == typeof e2 && !Number.isNaN(e2) && Number.isInteger(e2), o = (e2) => "boolean" == typeof e2, s = (e2) => "string" == typeof e2, c = (e2) => "object" == typeof e2 && "function" == typeof e2[Symbol.iterator], u = (e2) => "function" == typeof e2 && `${e2}`.startsWith("class"), l = (e2) => !!(e2 && e2.constructor && e2.call && e2.apply);
var f, d, p = Symbol.for("immer-nothing"), y = Symbol.for("immer-draftable"), h = Symbol.for("immer-state");
function m(e2) {
  for (var t2 = arguments.length, r2 = Array(t2 > 1 ? t2 - 1 : 0), n2 = 1; n2 < t2; n2++) r2[n2 - 1] = arguments[n2];
  throw Error(`[Immer] minified error nr: ${e2}. Full error at: https://bit.ly/3cXEKWf`);
}
var v = Object.getPrototypeOf;
function g(e2) {
  return !!e2 && !!e2[h];
}
function b(e2) {
  var _a2;
  return !!e2 && (_(e2) || Array.isArray(e2) || !!e2[y] || !!((_a2 = e2.constructor) == null ? void 0 : _a2[y]) || M(e2) || E(e2));
}
var w = Object.prototype.constructor.toString();
function _(e2) {
  if (!e2 || "object" != typeof e2) return false;
  let t2 = v(e2);
  if (null === t2) return true;
  let r2 = Object.hasOwnProperty.call(t2, "constructor") && t2.constructor;
  return r2 === Object || "function" == typeof r2 && Function.toString.call(r2) === w;
}
function O(e2, t2) {
  0 === P(e2) ? Reflect.ownKeys(e2).forEach((r2) => {
    t2(r2, e2[r2], e2);
  }) : e2.forEach((r2, n2) => t2(n2, r2, e2));
}
function P(e2) {
  let t2 = e2[h];
  return t2 ? t2.type_ : Array.isArray(e2) ? 1 : M(e2) ? 2 : 3 * !!E(e2);
}
function j(e2, t2) {
  return 2 === P(e2) ? e2.has(t2) : Object.prototype.hasOwnProperty.call(e2, t2);
}
function S(e2, t2, r2) {
  let n2 = P(e2);
  2 === n2 ? e2.set(t2, r2) : 3 === n2 ? e2.add(r2) : e2[t2] = r2;
}
function M(e2) {
  return e2 instanceof Map;
}
function E(e2) {
  return e2 instanceof Set;
}
function A(e2) {
  return e2.copy_ || e2.base_;
}
function T(e2, t2) {
  if (M(e2)) return new Map(e2);
  if (E(e2)) return new Set(e2);
  if (Array.isArray(e2)) return Array.prototype.slice.call(e2);
  let r2 = _(e2);
  if (true !== t2 && ("class_only" !== t2 || r2)) {
    let t3 = v(e2);
    return null !== t3 && r2 ? { ...e2 } : Object.assign(Object.create(t3), e2);
  }
  {
    let t3 = Object.getOwnPropertyDescriptors(e2);
    delete t3[h];
    let r3 = Reflect.ownKeys(t3);
    for (let n2 = 0; n2 < r3.length; n2++) {
      let i2 = r3[n2], a2 = t3[i2];
      false === a2.writable && (a2.writable = true, a2.configurable = true), (a2.get || a2.set) && (t3[i2] = { configurable: true, writable: true, enumerable: a2.enumerable, value: e2[i2] });
    }
    return Object.create(v(e2), t3);
  }
}
function x(e2) {
  let t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return R(e2) || g(e2) || !b(e2) || (P(e2) > 1 && (e2.set = e2.add = e2.clear = e2.delete = N), Object.freeze(e2), t2 && Object.entries(e2).forEach((e3) => {
    let [t3, r2] = e3;
    return x(r2, true);
  })), e2;
}
function N() {
  m(2);
}
function R(e2) {
  return Object.isFrozen(e2);
}
var k = {};
function z(e2) {
  let t2 = k[e2];
  return t2 || m(0, e2), t2;
}
function F(e2, t2) {
  t2 && (z("Patches"), e2.patches_ = [], e2.inversePatches_ = [], e2.patchListener_ = t2);
}
function D(e2) {
  K(e2), e2.drafts_.forEach(C), e2.drafts_ = null;
}
function K(e2) {
  e2 === f && (f = e2.parent_);
}
function $(e2) {
  return f = { drafts_: [], parent_: f, immer_: e2, canAutoFreeze_: true, unfinalizedDrafts_: 0 };
}
function C(e2) {
  let t2 = e2[h];
  0 === t2.type_ || 1 === t2.type_ ? t2.revoke_() : t2.revoked_ = true;
}
function W(e2, t2) {
  t2.unfinalizedDrafts_ = t2.drafts_.length;
  let r2 = t2.drafts_[0];
  return void 0 !== e2 && e2 !== r2 ? (r2[h].modified_ && (D(t2), m(4)), b(e2) && (e2 = I(t2, e2), t2.parent_ || L(t2, e2)), t2.patches_ && z("Patches").generateReplacementPatches_(r2[h].base_, e2, t2.patches_, t2.inversePatches_)) : e2 = I(t2, r2, []), D(t2), t2.patches_ && t2.patchListener_(t2.patches_, t2.inversePatches_), e2 !== p ? e2 : void 0;
}
function I(e2, t2, r2) {
  if (R(t2)) return t2;
  let n2 = t2[h];
  if (!n2) return O(t2, (i2, a2) => V(e2, n2, t2, i2, a2, r2)), t2;
  if (n2.scope_ !== e2) return t2;
  if (!n2.modified_) return L(e2, n2.base_, true), n2.base_;
  if (!n2.finalized_) {
    n2.finalized_ = true, n2.scope_.unfinalizedDrafts_--;
    let t3 = n2.copy_, i2 = t3, a2 = false;
    3 === n2.type_ && (i2 = new Set(t3), t3.clear(), a2 = true), O(i2, (i3, o2) => V(e2, n2, t3, i3, o2, r2, a2)), L(e2, t3, false), r2 && e2.patches_ && z("Patches").generatePatches_(n2, r2, e2.patches_, e2.inversePatches_);
  }
  return n2.copy_;
}
function V(e2, t2, r2, n2, i2, a2, o2) {
  if (g(i2)) {
    let o3 = I(e2, i2, a2 && t2 && 3 !== t2.type_ && !j(t2.assigned_, n2) ? a2.concat(n2) : void 0);
    if (S(r2, n2, o3), !g(o3)) return;
    e2.canAutoFreeze_ = false;
  } else o2 && r2.add(i2);
  if (b(i2) && !R(i2)) {
    if (!e2.immer_.autoFreeze_ && e2.unfinalizedDrafts_ < 1) return;
    I(e2, i2), (!t2 || !t2.scope_.parent_) && "symbol" != typeof n2 && Object.prototype.propertyIsEnumerable.call(r2, n2) && L(e2, i2);
  }
}
function L(e2, t2) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  !e2.parent_ && e2.immer_.autoFreeze_ && e2.canAutoFreeze_ && x(t2, r2);
}
var q = { get(e2, t2) {
  var _a2;
  if (t2 === h) return e2;
  let r2 = A(e2);
  if (!j(r2, t2)) {
    var n2 = e2, i2 = r2, a2 = t2;
    let o3 = G(i2, a2);
    return o3 ? "value" in o3 ? o3.value : (_a2 = o3.get) == null ? void 0 : _a2.call(n2.draft_) : void 0;
  }
  let o2 = r2[t2];
  return e2.finalized_ || !b(o2) ? o2 : o2 === U(e2.base_, t2) ? (B(e2), e2.copy_[t2] = X(o2, e2)) : o2;
}, has: (e2, t2) => t2 in A(e2), ownKeys: (e2) => Reflect.ownKeys(A(e2)), set(e2, t2, r2) {
  let n2 = G(A(e2), t2);
  if (n2 == null ? void 0 : n2.set) return n2.set.call(e2.draft_, r2), true;
  if (!e2.modified_) {
    let n3 = U(A(e2), t2), i2 = n3 == null ? void 0 : n3[h];
    if (i2 && i2.base_ === r2) return e2.copy_[t2] = r2, e2.assigned_[t2] = false, true;
    if ((r2 === n3 ? 0 !== r2 || 1 / r2 == 1 / n3 : r2 != r2 && n3 != n3) && (void 0 !== r2 || j(e2.base_, t2))) return true;
    B(e2), H(e2);
  }
  return !!(e2.copy_[t2] === r2 && (void 0 !== r2 || t2 in e2.copy_) || Number.isNaN(r2) && Number.isNaN(e2.copy_[t2])) || (e2.copy_[t2] = r2, e2.assigned_[t2] = true, true);
}, deleteProperty: (e2, t2) => (void 0 !== U(e2.base_, t2) || t2 in e2.base_ ? (e2.assigned_[t2] = false, B(e2), H(e2)) : delete e2.assigned_[t2], e2.copy_ && delete e2.copy_[t2], true), getOwnPropertyDescriptor(e2, t2) {
  let r2 = A(e2), n2 = Reflect.getOwnPropertyDescriptor(r2, t2);
  return n2 ? { writable: true, configurable: 1 !== e2.type_ || "length" !== t2, enumerable: n2.enumerable, value: r2[t2] } : n2;
}, defineProperty() {
  m(11);
}, getPrototypeOf: (e2) => v(e2.base_), setPrototypeOf() {
  m(12);
} }, J = {};
function U(e2, t2) {
  let r2 = e2[h];
  return (r2 ? A(r2) : e2)[t2];
}
function G(e2, t2) {
  if (!(t2 in e2)) return;
  let r2 = v(e2);
  for (; r2; ) {
    let e3 = Object.getOwnPropertyDescriptor(r2, t2);
    if (e3) return e3;
    r2 = v(r2);
  }
}
function H(e2) {
  !e2.modified_ && (e2.modified_ = true, e2.parent_ && H(e2.parent_));
}
function B(e2) {
  e2.copy_ || (e2.copy_ = T(e2.base_, e2.scope_.immer_.useStrictShallowCopy_));
}
function X(e2, t2) {
  let r2 = M(e2) ? z("MapSet").proxyMap_(e2, t2) : E(e2) ? z("MapSet").proxySet_(e2, t2) : function(e3, t3) {
    let r3 = Array.isArray(e3), n2 = { type_: +!!r3, scope_: t3 ? t3.scope_ : f, modified_: false, finalized_: false, assigned_: {}, parent_: t3, base_: e3, draft_: null, copy_: null, revoke_: null, isManual_: false }, i2 = n2, a2 = q;
    r3 && (i2 = [n2], a2 = J);
    let { revoke: o2, proxy: s2 } = Proxy.revocable(i2, a2);
    return n2.draft_ = s2, n2.revoke_ = o2, s2;
  }(e2, t2);
  return (t2 ? t2.scope_ : f).drafts_.push(r2), r2;
}
O(q, (e2, t2) => {
  J[e2] = function() {
    return arguments[0] = arguments[0][0], t2.apply(this, arguments);
  };
}), J.deleteProperty = function(e2, t2) {
  return J.set.call(this, e2, t2, void 0);
}, J.set = function(e2, t2, r2) {
  return q.set.call(this, e2[0], t2, r2, e2[0]);
};
var Q = new class {
  constructor(e2) {
    this.autoFreeze_ = true, this.useStrictShallowCopy_ = false, this.produce = (e3, t2, r2) => {
      let n2;
      if ("function" == typeof e3 && "function" != typeof t2) {
        let r3 = t2;
        t2 = e3;
        let n3 = this;
        return function() {
          let e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r3;
          for (var i2 = arguments.length, a2 = Array(i2 > 1 ? i2 - 1 : 0), o2 = 1; o2 < i2; o2++) a2[o2 - 1] = arguments[o2];
          return n3.produce(e4, (e5) => t2.call(this, e5, ...a2));
        };
      }
      if ("function" != typeof t2 && m(6), void 0 !== r2 && "function" != typeof r2 && m(7), b(e3)) {
        let i2 = $(this), a2 = X(e3, void 0), o2 = true;
        try {
          n2 = t2(a2), o2 = false;
        } finally {
          o2 ? D(i2) : K(i2);
        }
        return F(i2, r2), W(n2, i2);
      }
      if (e3 && "object" == typeof e3) m(1, e3);
      else {
        if (void 0 === (n2 = t2(e3)) && (n2 = e3), n2 === p && (n2 = void 0), this.autoFreeze_ && x(n2, true), r2) {
          let t3 = [], i2 = [];
          z("Patches").generateReplacementPatches_(e3, n2, t3, i2), r2(t3, i2);
        }
        return n2;
      }
    }, this.produceWithPatches = (e3, t2) => {
      let r2, n2;
      if ("function" == typeof e3) {
        var i2 = this;
        return function(t3) {
          for (var r3 = arguments.length, n3 = Array(r3 > 1 ? r3 - 1 : 0), a2 = 1; a2 < r3; a2++) n3[a2 - 1] = arguments[a2];
          return i2.produceWithPatches(t3, (t4) => e3(t4, ...n3));
        };
      }
      return [this.produce(e3, t2, (e4, t3) => {
        r2 = e4, n2 = t3;
      }), r2, n2];
    }, "boolean" == typeof (e2 == null ? void 0 : e2.autoFreeze) && this.setAutoFreeze(e2.autoFreeze), "boolean" == typeof (e2 == null ? void 0 : e2.useStrictShallowCopy) && this.setUseStrictShallowCopy(e2.useStrictShallowCopy);
  }
  createDraft(e2) {
    var t2;
    b(e2) || m(8), g(e2) && (g(t2 = e2) || m(10, t2), e2 = function e3(t3) {
      let r3;
      if (!b(t3) || R(t3)) return t3;
      let n3 = t3[h];
      if (n3) {
        if (!n3.modified_) return n3.base_;
        n3.finalized_ = true, r3 = T(t3, n3.scope_.immer_.useStrictShallowCopy_);
      } else r3 = T(t3, true);
      return O(r3, (t4, n4) => {
        S(r3, t4, e3(n4));
      }), n3 && (n3.finalized_ = false), r3;
    }(t2));
    let r2 = $(this), n2 = X(e2, void 0);
    return n2[h].isManual_ = true, K(r2), n2;
  }
  finishDraft(e2, t2) {
    let r2 = e2 && e2[h];
    r2 && r2.isManual_ || m(9);
    let { scope_: n2 } = r2;
    return F(n2, t2), W(void 0, n2);
  }
  setAutoFreeze(e2) {
    this.autoFreeze_ = e2;
  }
  setUseStrictShallowCopy(e2) {
    this.useStrictShallowCopy_ = e2;
  }
  applyPatches(e2, t2) {
    let r2;
    for (r2 = t2.length - 1; r2 >= 0; r2--) {
      let n3 = t2[r2];
      if (0 === n3.path.length && "replace" === n3.op) {
        e2 = n3.value;
        break;
      }
    }
    r2 > -1 && (t2 = t2.slice(r2 + 1));
    let n2 = z("Patches").applyPatches_;
    return g(e2) ? n2(e2, t2) : this.produce(e2, (e3) => n2(e3, t2));
  }
}(), Y = Q.produce;
Q.produceWithPatches.bind(Q), Q.setAutoFreeze.bind(Q), Q.setUseStrictShallowCopy.bind(Q), Q.applyPatches.bind(Q), Q.createDraft.bind(Q), Q.finishDraft.bind(Q);
var Z = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function ee(e2) {
  return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
}
!function() {
  var e2, t2;
  if (!d) d = 1, t2 = e2 || (e2 = {}), function(e3) {
    var r2 = "object" == typeof globalThis ? globalThis : "object" == typeof Z ? Z : "object" == typeof self ? self : "object" == typeof this ? this : function() {
      throw ReferenceError("globalThis could not be found. Please polyfill globalThis before loading this module.");
    }(), n2 = i2(t2);
    function i2(e4, t3) {
      return function(r3, n3) {
        Object.defineProperty(e4, r3, { configurable: true, writable: true, value: n3 }), t3 && t3(r3, n3);
      };
    }
    void 0 !== r2.Reflect && (n2 = i2(r2.Reflect, n2)), e3(n2, r2), void 0 === r2.Reflect && (r2.Reflect = t2);
  }(function(e3, t3) {
    var r2, n2 = "function" == typeof Symbol, i2 = n2 && void 0 !== Symbol.toPrimitive ? Symbol.toPrimitive : x2("Symbol.toPrimitive not found."), a2 = n2 && void 0 !== Symbol.iterator ? Symbol.iterator : x2("Symbol.iterator not found."), o2 = Object.getPrototypeOf(Function), s2 = "function" == typeof Map && "function" == typeof Map.prototype.entries ? Map : x2("A valid Map constructor could not be found."), c2 = "function" == typeof Set && "function" == typeof Set.prototype.entries ? Set : x2("A valid Set constructor could not be found."), u2 = "function" == typeof WeakMap ? WeakMap : x2("A valid WeakMap constructor could not be found."), l2 = n2 ? Symbol.for("@reflect-metadata:registry") : void 0, f2 = (!g2(l2) && w2(t3.Reflect) && Object.isExtensible(t3.Reflect) && (r2 = t3.Reflect[l2]), g2(r2) && (r2 = function() {
      g2(l2) || void 0 === t3.Reflect || l2 in t3.Reflect || "function" != typeof t3.Reflect.defineMetadata || (r3 = (e4 = t3.Reflect).defineMetadata, n3 = e4.hasOwnMetadata, i3 = e4.getOwnMetadata, a3 = e4.getOwnMetadataKeys, o3 = e4.deleteMetadata, f3 = new u2(), d3 = { isProviderFor: function(e5, t4) {
        var r4 = f3.get(e5);
        return !!(!g2(r4) && r4.has(t4)) || !!a3(e5, t4).length && (g2(r4) && (r4 = new c2(), f3.set(e5, r4)), r4.add(t4), true);
      }, OrdinaryDefineOwnMetadata: r3, OrdinaryHasOwnMetadata: n3, OrdinaryGetOwnMetadata: i3, OrdinaryOwnMetadataKeys: a3, OrdinaryDeleteMetadata: o3 });
      var e4, r3, n3, i3, a3, o3, f3, d3, p3, y3, h3, m3 = new u2(), v3 = { registerProvider: function(e5) {
        if (!Object.isExtensible(v3)) throw Error("Cannot add provider to a frozen registry.");
        switch (true) {
          case d3 === e5:
            break;
          case g2(p3):
            p3 = e5;
            break;
          case p3 === e5:
            break;
          case g2(y3):
            y3 = e5;
            break;
          case y3 === e5:
            break;
          default:
            void 0 === h3 && (h3 = new c2()), h3.add(e5);
        }
      }, getProvider: b3, setProvider: function(e5, t4, r4) {
        if (!function(e6) {
          if (g2(e6)) throw TypeError();
          return p3 === e6 || y3 === e6 || !g2(h3) && h3.has(e6);
        }(r4)) throw Error("Metadata provider not registered.");
        var n4 = b3(e5, t4);
        if (n4 !== r4) {
          if (!g2(n4)) return false;
          var i4 = m3.get(e5);
          g2(i4) && (i4 = new s2(), m3.set(e5, i4)), i4.set(t4, r4);
        }
        return true;
      } };
      return v3;
      function b3(e5, t4) {
        var r4, n4 = m3.get(e5);
        return g2(n4) || (r4 = n4.get(t4)), g2(r4) && (r4 = function(e6, t5) {
          if (!g2(p3)) {
            if (p3.isProviderFor(e6, t5)) return p3;
            if (!g2(y3)) {
              if (y3.isProviderFor(e6, t5)) return p3;
              if (!g2(h3)) for (var r5 = M2(h3); ; ) {
                var n5 = E2(r5);
                if (!n5) return;
                var i4 = n5.value;
                if (i4.isProviderFor(e6, t5)) return A2(r5), i4;
              }
            }
          }
          if (!g2(d3) && d3.isProviderFor(e6, t5)) return d3;
        }(e5, t4), g2(r4) || (g2(n4) && (n4 = new s2(), m3.set(e5, n4)), n4.set(t4, r4))), r4;
      }
    }()), !g2(l2) && w2(t3.Reflect) && Object.isExtensible(t3.Reflect) && Object.defineProperty(t3.Reflect, l2, { enumerable: false, configurable: false, writable: false, value: r2 }), r2), d2 = function(e4) {
      var t4 = new u2(), r3 = { isProviderFor: function(e5, r4) {
        var n4 = t4.get(e5);
        return !g2(n4) && n4.has(r4);
      }, OrdinaryDefineOwnMetadata: function(e5, t5, r4, i3) {
        n3(r4, i3, true).set(e5, t5);
      }, OrdinaryHasOwnMetadata: function(e5, t5, r4) {
        var i3 = n3(t5, r4, false);
        return !g2(i3) && !!i3.has(e5);
      }, OrdinaryGetOwnMetadata: function(e5, t5, r4) {
        var i3 = n3(t5, r4, false);
        if (!g2(i3)) return i3.get(e5);
      }, OrdinaryOwnMetadataKeys: function(e5, t5) {
        var r4 = [], i3 = n3(e5, t5, false);
        if (g2(i3)) return r4;
        for (var a3 = M2(i3.keys()), o3 = 0; ; ) {
          var s3 = E2(a3);
          if (!s3) return r4.length = o3, r4;
          var c3 = s3.value;
          try {
            r4[o3] = c3;
          } catch (e6) {
            try {
              A2(a3);
            } finally {
              throw e6;
            }
          }
          o3++;
        }
      }, OrdinaryDeleteMetadata: function(e5, r4, i3) {
        var a3 = n3(r4, i3, false);
        if (g2(a3) || !a3.delete(e5)) return false;
        if (0 === a3.size) {
          var o3 = t4.get(r4);
          g2(o3) || (o3.delete(i3), 0 === o3.size && t4.delete(o3));
        }
        return true;
      } };
      return f2.registerProvider(r3), r3;
      function n3(n4, i3, a3) {
        var o3 = t4.get(n4), c3 = false;
        if (g2(o3)) {
          if (!a3) return;
          o3 = new s2(), t4.set(n4, o3), c3 = true;
        }
        var u3 = o3.get(i3);
        if (g2(u3)) {
          if (!a3) return;
          if (u3 = new s2(), o3.set(i3, u3), !e4.setProvider(n4, i3, r3)) throw o3.delete(i3), c3 && t4.delete(n4), Error("Wrong provider for target.");
        }
        return u3;
      }
    }(f2);
    function p2(e4, t4, r3) {
      var n3 = N2(t4, r3, false);
      return !g2(n3) && !!n3.OrdinaryHasOwnMetadata(e4, t4, r3);
    }
    function y2(e4, t4, r3) {
      var n3 = N2(t4, r3, false);
      if (!g2(n3)) return n3.OrdinaryGetOwnMetadata(e4, t4, r3);
    }
    function h2(e4, t4, r3, n3) {
      N2(r3, n3, true).OrdinaryDefineOwnMetadata(e4, t4, r3, n3);
    }
    function m2(e4, t4) {
      var r3 = N2(e4, t4, false);
      return r3 ? r3.OrdinaryOwnMetadataKeys(e4, t4) : [];
    }
    function v2(e4) {
      if (null === e4) return 1;
      switch (typeof e4) {
        case "undefined":
          return 0;
        case "boolean":
          return 2;
        case "string":
          return 3;
        case "symbol":
          return 4;
        case "number":
          return 5;
        case "object":
          return null === e4 ? 1 : 6;
        default:
          return 6;
      }
    }
    function g2(e4) {
      return void 0 === e4;
    }
    function b2(e4) {
      return null === e4;
    }
    function w2(e4) {
      return "object" == typeof e4 ? null !== e4 : "function" == typeof e4;
    }
    e3("decorate", function(e4, t4, r3, n3) {
      if (g2(r3)) {
        if (!O2(e4) || !j2(t4)) throw TypeError();
        for (var i3 = e4, a3 = t4, o3 = i3.length - 1; o3 >= 0; --o3) {
          var s3 = (0, i3[o3])(a3);
          if (!g2(s3) && !b2(s3)) {
            if (!j2(s3)) throw TypeError();
            a3 = s3;
          }
        }
        return a3;
      }
      if (!O2(e4) || !w2(t4) || !w2(n3) && !g2(n3) && !b2(n3)) throw TypeError();
      return b2(n3) && (n3 = void 0), function(e5, t5, r4, n4) {
        for (var i4 = e5.length - 1; i4 >= 0; --i4) {
          var a4 = (0, e5[i4])(t5, r4, n4);
          if (!g2(a4) && !b2(a4)) {
            if (!w2(a4)) throw TypeError();
            n4 = a4;
          }
        }
        return n4;
      }(e4, t4, r3 = _2(r3), n3);
    }), e3("metadata", function(e4, t4) {
      return function(r3, n3) {
        if (!w2(r3) || !g2(n3) && !function(e5) {
          switch (v2(e5)) {
            case 3:
            case 4:
              return true;
            default:
              return false;
          }
        }(n3)) throw TypeError();
        h2(e4, t4, r3, n3);
      };
    }), e3("defineMetadata", function(e4, t4, r3, n3) {
      if (!w2(r3)) throw TypeError();
      return g2(n3) || (n3 = _2(n3)), h2(e4, t4, r3, n3);
    }), e3("hasMetadata", function(e4, t4, r3) {
      if (!w2(t4)) throw TypeError();
      return g2(r3) || (r3 = _2(r3)), function e5(t5, r4, n3) {
        if (p2(t5, r4, n3)) return true;
        var i3 = T2(r4);
        return !b2(i3) && e5(t5, i3, n3);
      }(e4, t4, r3);
    }), e3("hasOwnMetadata", function(e4, t4, r3) {
      if (!w2(t4)) throw TypeError();
      return g2(r3) || (r3 = _2(r3)), p2(e4, t4, r3);
    }), e3("getMetadata", function(e4, t4, r3) {
      if (!w2(t4)) throw TypeError();
      return g2(r3) || (r3 = _2(r3)), function e5(t5, r4, n3) {
        if (p2(t5, r4, n3)) return y2(t5, r4, n3);
        var i3 = T2(r4);
        if (!b2(i3)) return e5(t5, i3, n3);
      }(e4, t4, r3);
    }), e3("getOwnMetadata", function(e4, t4, r3) {
      if (!w2(t4)) throw TypeError();
      return g2(r3) || (r3 = _2(r3)), y2(e4, t4, r3);
    }), e3("getMetadataKeys", function(e4, t4) {
      if (!w2(e4)) throw TypeError();
      return g2(t4) || (t4 = _2(t4)), function e5(t5, r3) {
        var n3 = m2(t5, r3), i3 = T2(t5);
        if (null === i3) return n3;
        var a3 = e5(i3, r3);
        if (a3.length <= 0) return n3;
        if (n3.length <= 0) return a3;
        for (var o3 = new c2(), s3 = [], u3 = 0; u3 < n3.length; u3++) {
          var l3 = n3[u3], f3 = o3.has(l3);
          f3 || (o3.add(l3), s3.push(l3));
        }
        for (var d3 = 0; d3 < a3.length; d3++) {
          var l3 = a3[d3], f3 = o3.has(l3);
          f3 || (o3.add(l3), s3.push(l3));
        }
        return s3;
      }(e4, t4);
    }), e3("getOwnMetadataKeys", function(e4, t4) {
      if (!w2(e4)) throw TypeError();
      return g2(t4) || (t4 = _2(t4)), m2(e4, t4);
    }), e3("deleteMetadata", function(e4, t4, r3) {
      if (!w2(t4)) throw TypeError();
      g2(r3) || (r3 = _2(r3));
      var n3 = N2(t4, r3, false);
      return !g2(n3) && n3.OrdinaryDeleteMetadata(e4, t4, r3);
    });
    function _2(e4) {
      var t4 = function(e5, t5) {
        switch (v2(e5)) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            return e5;
        }
        var r3 = S2(e5, i2);
        if (void 0 !== r3) {
          var n3 = r3.call(e5, "string");
          if (w2(n3)) throw TypeError();
          return n3;
        }
        return function(e6, t6) {
          var r4, n4, i3 = e6.toString;
          if (P2(i3)) {
            var n4 = i3.call(e6);
            if (!w2(n4)) return n4;
          }
          var r4 = e6.valueOf;
          if (P2(r4)) {
            var n4 = r4.call(e6);
            if (!w2(n4)) return n4;
          }
          throw TypeError();
        }(e5);
      }(e4);
      return "symbol" == typeof t4 ? t4 : "" + t4;
    }
    function O2(e4) {
      return Array.isArray ? Array.isArray(e4) : e4 instanceof Object ? e4 instanceof Array : "[object Array]" === Object.prototype.toString.call(e4);
    }
    function P2(e4) {
      return "function" == typeof e4;
    }
    function j2(e4) {
      return "function" == typeof e4;
    }
    function S2(e4, t4) {
      var r3 = e4[t4];
      if (null != r3) {
        if (!P2(r3)) throw TypeError();
        return r3;
      }
    }
    function M2(e4) {
      var t4 = S2(e4, a2);
      if (!P2(t4)) throw TypeError();
      var r3 = t4.call(e4);
      if (!w2(r3)) throw TypeError();
      return r3;
    }
    function E2(e4) {
      var t4 = e4.next();
      return !t4.done && t4;
    }
    function A2(e4) {
      var t4 = e4.return;
      t4 && t4.call(e4);
    }
    function T2(e4) {
      var t4 = Object.getPrototypeOf(e4);
      if ("function" != typeof e4 || e4 === o2 || t4 !== o2) return t4;
      var r3 = e4.prototype, n3 = r3 && Object.getPrototypeOf(r3);
      if (null == n3 || n3 === Object.prototype) return t4;
      var i3 = n3.constructor;
      return "function" != typeof i3 || i3 === e4 ? t4 : i3;
    }
    function x2(e4) {
      throw e4;
    }
    function N2(e4, t4, r3) {
      var n3 = f2.getProvider(e4, t4);
      if (!g2(n3)) return n3;
      if (r3) {
        if (f2.setProvider(e4, t4, d2)) return d2;
        throw Error("Illegal state.");
      }
    }
  });
}();
class et {
  static getOwnPropertyNames(e2) {
    return Reflect.getMetadataKeys(e2);
  }
  static get(e2, t2) {
    return Reflect.getMetadata(t2, e2);
  }
  static define(e2, t2, r2, n2) {
    if (e2 && e2.constructor && e2.constructor != Object) {
      if (l(r2)) return void Reflect.defineMetadata(t2, Y(Reflect.getMetadata(t2, e2) ?? n2 ?? {}, r2), e2);
      Reflect.defineMetadata(t2, r2, e2);
    }
  }
}
let er = { path: [], branch: [] };
class en extends TypeError {
  constructor(e2, t2) {
    let r2, { message: n2, explanation: i2, ...a2 } = e2, { path: o2 } = e2, s2 = 0 === o2.length ? n2 : `At path: ${o2.join(".")} -- ${n2}`;
    super(i2 ?? s2);
    __publicField(this, "value");
    __publicField(this, "key");
    __publicField(this, "type");
    __publicField(this, "refinement");
    __publicField(this, "path");
    __publicField(this, "branch");
    __publicField(this, "failures");
    null != i2 && (this.cause = s2), Object.assign(this, a2), this.name = this.constructor.name, this.failures = () => r2 ?? (r2 = [e2, ...t2()]);
  }
}
let ei = (e2) => !!e2 && e2[ea] == ea, ea = Symbol("Type");
function* eo(t2, r2, n2, i2) {
  let a2 = t2;
  for (let t3 of (c(a2) || (a2 = [a2]), a2)) {
    let a3 = function(t4, r3, n3, i3) {
      if (true === t4) return;
      let a4 = {};
      a4 = false === t4 ? {} : s(t4) ? { message: t4 } : t4;
      let { path: o2, branch: c2, node: u2 } = r3, { type: l2 } = n3, { refinement: f2, message: d2 = e(i3) ? "Required" : `Expected a value of type \`${l2}\`${f2 ? ` with refinement \`${f2}\`` : ""}, but received: \`${i3}\`` } = a4;
      return { ...a4, value: i3, type: l2, refinement: f2, key: o2[o2.length - 1], path: o2, branch: c2, node: u2, message: d2 };
    }(t3, r2, n2, i2);
    a3 && (yield a3);
  }
}
function es(e2, t2) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n2 = ec(e2, t2, r2), i2 = function(e3) {
    let { done: t3, value: r3 } = e3.next();
    return t3 ? void 0 : r3;
  }(n2);
  return i2[0] ? [new en(i2[0], function* () {
    for (let e3 of n2) e3[0] && (yield e3[0]);
  }), void 0] : [void 0, i2[1]];
}
function* ec(e2, t2) {
  let n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, { path: i2 = [], branch: a2 = [e2], node: o2 = { current: t2 }, coerce: s2 = false, mask: c2 = false } = n2, u2 = { mask: c2, path: i2, branch: a2, node: o2 }, l2 = e2;
  if (s2) {
    let r2 = t2.coercer(e2, u2);
    void 0 != r2 && (l2 = r2);
  }
  let f2 = 0;
  for (let r2 of eo(t2.validator(l2, u2), u2, t2, e2)) r2.explanation = n2.message, f2 = 2, yield [r2, void 0];
  for (let [e3, d2, p2] of t2.entries(l2, u2)) for (let t3 of ec(d2, p2, { path: void 0 === e3 ? i2 : [...i2, e3], branch: void 0 === e3 ? a2 : [...a2, d2], node: void 0 === e3 ? o2 : { current: p2, parent: o2 }, coerce: s2, mask: c2, message: n2.message })) t3[0] ? (f2 = null != t3[0].refinement ? 1 : 2, yield [t3[0], void 0]) : s2 && (d2 = t3[1], void 0 === e3 ? l2 = d2 : l2 instanceof Map ? l2.set(e3, d2) : l2 instanceof Set ? l2.add(d2) : r(l2) && (l2[e3] = d2));
  if (2 !== f2) for (let r2 of eo(t2.refiner(l2, u2), u2, t2, e2)) r2.explanation = n2.message, f2 = 1, yield [r2, void 0];
  0 === f2 && (yield [void 0, l2]);
}
let eu = (e2) => function() {
  for (var t2 = arguments.length, r2 = Array(t2), n2 = 0; n2 < t2; n2++) r2[n2] = arguments[n2];
  let i2 = e2(...r2), a2 = (e3, t3) => {
    let r3 = et.get(e3, t3) ?? {};
    et.define(e3, t3, { ...r3, type: i2 });
  };
  return a2.toString = () => `@type:${i2.type}`, new Proxy(a2, { ownKeys: () => [...Object.getOwnPropertyNames(i2), ...Object.getOwnPropertySymbols(i2)], get: (e3, t3) => i2[t3] });
}, el = (e2) => function() {
  for (var t2 = arguments.length, r2 = Array(t2), n2 = 0; n2 < t2; n2++) r2[n2] = arguments[n2];
  let i2 = (t3) => e2(t3, ...r2);
  return new Proxy((e3, t3) => {
    et.define(e3, t3, (e4) => {
      (e4.modifies ?? (e4.modifies = [])).push({ modify: i2 });
    }, {});
  }, { get(e3, t3) {
    if ("modify" == t3) return i2;
  } });
};
const _ef = class _ef {
  static create(t2, r2, i2) {
    var _a2;
    let a2, o2 = r2 ?? ((_a2 = t2[_ef.underlying]) == null ? void 0 : _a2.schema) ?? {};
    return new Proxy({}, { ownKeys(e2) {
      let r3 = /* @__PURE__ */ new Map();
      if (i2) {
        if (t2[i2]) for (let e3 of Object.getOwnPropertyNames(t2[i2])) r3.set(e3, e3);
        if (o2 && o2[i2]) for (let e3 of Object.getOwnPropertyNames(o2[i2])) r3.set(e3, e3);
      } else {
        for (let e3 of Object.getOwnPropertyNames(t2)) r3.set(e3, e3);
        if (o2) for (let e3 of Object.getOwnPropertyNames(o2)) r3.set(e3, e3);
      }
      return [...r3.keys()];
    }, get(r3, s2) {
      var _a3, _b;
      if (s2 === _ef.meta) return a2 ?? (a2 = _ef.create(t2, o2, _ef.meta));
      if (i2) {
        if (n(t2)) {
          let r4 = (_a3 = t2 == null ? void 0 : t2[i2]) == null ? void 0 : _a3[s2];
          if (!e(r4)) return r4;
        }
        return o2 ? (_b = o2 == null ? void 0 : o2[i2]) == null ? void 0 : _b[s2] : void 0;
      }
      if (n(t2)) {
        let r4 = t2 == null ? void 0 : t2[s2];
        if (!e(r4)) return r4;
      }
      return o2 ? o2[s2] : void 0;
    } });
  }
  static schemaProp(e2, t2) {
    return ed(e2.schema, t2);
  }
  static metaProp(e2, t2) {
    return ep(e2.schema, t2);
  }
};
__publicField(_ef, "RecordKey", Symbol("RecordKey"));
__publicField(_ef, "meta", Symbol("meta"));
__publicField(_ef, "optional", Symbol("optional"));
__publicField(_ef, "underlying", Symbol("underlying"));
__publicField(_ef, "unwrap", Symbol("unwrap"));
__publicField(_ef, "extractSchema", (e2) => new ey().toValue(e2));
__publicField(_ef, "extractMeta", (e2) => new ey().toValue(e2.meta ?? e2[_ef.meta]));
let ef = _ef;
let ed = (e2, t2) => {
  if (n(e2)) return e2[t2] ?? (e2[ef.unwrap] ? ed(e2[ef.unwrap]().schema, t2) : void 0);
}, ep = (e2, t2) => {
  var _a2;
  if (n(e2)) return ((_a2 = e2[ef.meta]) == null ? void 0 : _a2[t2]) ?? (e2[ef.unwrap] ? ep(e2[ef.unwrap]().schema, t2) : void 0);
};
class ey {
  constructor(e2 = false) {
    this.deref = e2;
  }
  toValue(t2) {
    if (t2) {
      if (!e(t2.schema)) return this.toValue(t2.schema);
      if (this.deref && t2[ef.unwrap]) return this.toValue(t2[ef.unwrap]());
      if (i(t2)) return this.toArray(t2);
      if (t2.constructor === Object) return this.toObject(t2);
    }
    return t2;
  }
  toObject(e2) {
    let t2 = {};
    for (let r2 of Object.getOwnPropertyNames(e2)) t2[r2] = this.toValue(e2[r2]);
    return t2;
  }
  toArray(e2) {
    let t2 = [];
    for (let r2 of e2) t2.push(this.toValue(r2));
    return t2;
  }
}
class eh {
  static parse(e2) {
    if ("" === e2) return [];
    if ("/" === e2) return [""];
    if ("/" !== e2.charAt(0)) throw Error("Invalid JSON pointer: " + e2);
    let t2 = e2.substring(1).split(/\//);
    return t2.map((e3, r2) => eh.unescape(e3, r2 === t2.length - 1));
  }
  static create() {
    let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return 0 === e2.length ? "" : "/" + e2.map(eh.escape).join("/");
  }
  static unescape(e2, t2) {
    return "" == e2 && t2 ? ef.RecordKey : e2.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  static escape(e2) {
    return e2 == ef.RecordKey ? "" : e2.toString().replace(/~/g, "~0").replace(/\//g, "~1");
  }
  static get(e2, t2) {
    let r2 = Array.isArray(t2) ? t2 : eh.parse(t2);
    for (let t3 = 0; t3 < r2.length; t3++) {
      let n2 = r2[t3];
      if (t3 > 0 && n2 == ef.RecordKey) return r2[t3 - 1];
      if (!("object" == typeof e2 && n2 in e2)) throw Error("Invalid reference token: " + n2);
      e2 = e2[n2];
    }
    return e2;
  }
}
_a = ea;
const _em = class _em {
  constructor(e2) {
    __publicField(this, _a, ea);
    __publicField(this, "schema");
    if (e2) {
      this.schema = ef.create(e2);
      return;
    }
    this.schema = e2 ?? null;
  }
  get meta() {
    return this.schema ? this.schema[ef.meta] : {};
  }
  get type() {
    var _a2;
    return ((_a2 = this.schema) == null ? void 0 : _a2.type) ?? "unknown";
  }
  refiner(e2, t2) {
    return [];
  }
  validator(e2, t2) {
    return [];
  }
  coercer(e2, t2) {
    if (s(e2)) {
      let t3 = e2.trim();
      if (t3.length >= 2) {
        if (t3.startsWith("{") && t3.endsWith("}")) try {
          return JSON.parse(t3);
        } catch (e3) {
        }
        if (t3.startsWith("[") && t3.endsWith("]")) try {
          return JSON.parse(t3);
        } catch (e3) {
        }
      }
    }
    return e2;
  }
  *entries(e2) {
  }
  validate(e2) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return es(e2, this, t2);
  }
  create(e2) {
    let t2 = es(e2, this, { coerce: true });
    if (t2[0]) throw t2[0];
    return t2[1];
  }
  mask(e2) {
    let t2 = es(e2, this, { coerce: true, mask: true });
    if (t2[0]) throw t2[0];
    return t2[1];
  }
  use() {
    for (var e2 = arguments.length, t2 = Array(e2), r2 = 0; r2 < e2; r2++) t2[r2] = arguments[r2];
    return t2.reduce((e3, t3) => t3.modify(e3), this);
  }
  optional() {
    return eb.create(this);
  }
  default(e2) {
    return eg.create(this, e2);
  }
};
__publicField(_em, "define", eu(function() {
  let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => true;
  return new class extends _em {
    validator(t2, r2) {
      return e2(t2, r2);
    }
  }(null);
}));
__publicField(_em, "fromTypeObject", (e2, t2) => {
  let r2 = e2.type ?? t2 ?? new _em({});
  return e2.modifies ? r2.use(...e2.modifies ?? []) : r2;
});
let em = _em;
class ev extends em {
  static of(e2, t2) {
    return new ev({ ...t2, [ef.underlying]: e2 });
  }
  static refine(e2, t2, r2) {
    return new class extends ev {
      *refiner(n2, i2) {
        for (let a2 of (yield* this.unwrap.refiner(n2, i2), eo(t2(n2, i2), i2, e2, n2))) yield { ...a2, refinement: Object.keys(r2).join(",") };
      }
    }({ ...r2, [ef.underlying]: e2 });
  }
  get unwrap() {
    let e2 = this.schema[ef.unwrap];
    return e2 ? e2() : this.schema[ef.underlying];
  }
  get type() {
    return this.unwrap.type;
  }
  *entries(e2) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er;
    yield* this.unwrap.entries(e2, { ...t2, node: { current: this, parent: t2.node } });
  }
  validator(e2, t2) {
    return eo(this.unwrap.validator(e2, t2), t2, this, e2);
  }
  refiner(e2, t2) {
    return eo(this.unwrap.refiner(e2, t2), t2, this, e2);
  }
  coercer(e2, t2) {
    return this.unwrap.coercer(e2, t2);
  }
}
const _eg = class _eg extends ev {
  coercer(e2, t2) {
    return void 0 === e2 ? this.schema.default : super.unwrap.coercer(e2, t2);
  }
};
__publicField(_eg, "create", eu((e2, t2) => new _eg({ default: t2, [ef.underlying]: e2 })));
let eg = _eg;
const _eb = class _eb extends ev {
  refiner(e2, t2) {
    return void 0 === e2 || super.unwrap.refiner(e2, t2);
  }
  validator(e2, t2) {
    return void 0 === e2 || super.unwrap.validator(e2, t2);
  }
};
__publicField(_eb, "create", eu((e2) => new _eb({ [ef.underlying]: e2, [ef.optional]: e2 })));
let eb = _eb;
const _ew = class _ew extends em {
  constructor() {
    super({});
  }
  get type() {
    return "any";
  }
  validator() {
    return true;
  }
};
__publicField(_ew, "create", eu(() => new _ew()));
let ew = _ew;
const _e_ = class _e_ extends em {
  get type() {
    return this.schema.type;
  }
  validator(e2, t2) {
    return s(e2);
  }
  coercer(r2, n2) {
    return e(r2) || t(r2) ? r2 : String(r2);
  }
};
__publicField(_e_, "create", eu(() => new _e_({ type: "string" })));
let e_ = _e_;
const _eO = class _eO extends em {
  get type() {
    return this.schema.type;
  }
  validator(e2, t2) {
    return a(e2);
  }
  coercer(e2, t2) {
    try {
      let t3 = void 0 != e2 ? parseInt(String(e2)) : void 0;
      return a(t3) ? t3 : void 0;
    } catch (e3) {
      return;
    }
  }
};
__publicField(_eO, "create", eu(() => new _eO({ type: "integer" })));
let eO = _eO;
const _eP = class _eP extends em {
  get type() {
    return this.schema.type;
  }
  validator(e2, t2) {
    return o(e2);
  }
  coercer(e2, t2) {
    try {
      return void 0 != e2 ? "true" === String(e2) : void 0;
    } catch (e3) {
      return;
    }
  }
};
__publicField(_eP, "create", eu(() => new _eP({ type: "boolean" })));
let eP = _eP;
const _ej = class _ej extends em {
  static createEnum(e2) {
    return new _ej({ enum: e2 });
  }
  get type() {
    return "enums";
  }
  validator(e2, t2) {
    return this.schema.enum.includes(e2);
  }
  coercer(e2, t2) {
    return e2;
  }
};
__publicField(_ej, "create", eu(_ej.createEnum));
__publicField(_ej, "literal", eu((e2) => new _ej({ enum: [e2] })));
__publicField(_ej, "nativeEnum", eu((e2) => new _ej({ enum: Object.values(e2) })));
let ej = _ej;
const _eS = class _eS extends em {
  get type() {
    return "never";
  }
  validator(e2, t2) {
    return false;
  }
  coercer(e2, t2) {
    return e2;
  }
};
__publicField(_eS, "create", eu(() => new _eS(false)));
let eS = _eS;
class eM extends em {
  static create(e2) {
    let t2 = function() {
      let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t3 = [];
      for (let [r2, n2] of Object.entries(e3)) ef.schemaProp(n2, ef.optional) || t3.push(r2);
      return t3;
    };
    return eu(() => {
      var _a2, _b;
      if (e2) {
        if (u(e2)) {
          let r2 = new e2(), n2 = {};
          for (let [e3, t3] of Object.entries(r2)) n2[e3] = ej.literal(t3);
          for (let e3 of et.getOwnPropertyNames(r2)) {
            let t3 = et.get(r2, e3);
            if (t3) {
              let r3 = em.fromTypeObject(t3, n2[e3]);
              e3 in n2 ? n2[e3] = r3.default((_b = (_a2 = n2[e3].schema) == null ? void 0 : _a2.enum) == null ? void 0 : _b[0]) : n2[e3] = r3;
            }
          }
          return new eM({ type: "object", properties: n2, required: t2(n2), additionalProperties: eS.create() });
        }
        return new eM({ type: "object", properties: e2, required: t2(e2), additionalProperties: eS.create() });
      }
      return new eM({ type: "object", properties: {}, required: [], additionalProperties: eS.create() });
    })();
  }
  get type() {
    return this.schema.type;
  }
  *entries(e2) {
    var _a2;
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er;
    if (r(e2)) {
      let r2 = new Set(Object.keys(e2));
      if (this.schema.properties) for (let t3 in this.schema.properties) r2.delete(t3), yield [t3, e2[t3], this.schema.properties[t3]];
      if (((_a2 = t2.node) == null ? void 0 : _a2.current.type) !== "intersection") for (let t3 of r2) yield [t3, e2[t3], this.schema.additionalProperties];
    }
  }
  validator(e2, t2) {
    return r(e2);
  }
  coercer(e2, t2) {
    if (r(e2)) {
      let r2 = { ...e2 };
      if (t2.mask) {
        let e3 = this.schema.properties;
        if (e3) for (let t3 in r2) void 0 === e3[t3] && delete r2[t3];
      }
      return r2;
    }
    return super.coercer(e2, t2);
  }
}
const _eE = class _eE extends em {
  get type() {
    return "record";
  }
  *entries(e2) {
    if (r(e2)) for (let [t2, r2] of Object.entries(e2)) yield [ef.RecordKey, t2, this.schema.propertyNames], yield [t2, r2, this.schema.additionalProperties];
  }
  validator(e2) {
    return r(e2);
  }
};
__publicField(_eE, "create", eu((e2, t2) => new _eE({ type: "object", propertyNames: e2, additionalProperties: t2 })));
let eE = _eE;
const _eA = class _eA extends em {
  get type() {
    return this.schema.type;
  }
  *entries(e2) {
    if (Array.isArray(e2)) for (let [t2, r2] of e2.entries()) yield [t2, r2, this.schema.items];
  }
  validator(e2) {
    return i(e2);
  }
  coercer(e2) {
    return i(e2) ? e2.slice() : e2;
  }
};
__publicField(_eA, "create", eu((e2) => new _eA({ type: "array", items: e2 })));
let eA = _eA;
const _eT = class _eT extends em {
  constructor() {
    super(...arguments);
    __publicField(this, "_discriminatorPropName");
    __publicField(this, "_discriminatorMappingProps", /* @__PURE__ */ new Map());
  }
  static discriminatorMapping(e2) {
    for (var t2 = arguments.length, r2 = Array(t2 > 1 ? t2 - 1 : 0), n2 = 1; n2 < t2; n2++) r2[n2 - 1] = arguments[n2];
    return eu(() => {
      let t3 = [];
      if (1 == r2.length && r2[0].constructor == Object) for (let [n3, i2] of Object.entries(r2[0])) if (ef.schemaProp(i2, "$ref")) t3.push(i2);
      else {
        let r3 = { [e2]: ej.literal(n3) };
        for (let [e3, t4, n4] of i2.entries({}, er)) r3[String(e3)] = n4;
        t3.push(eM.create(r3));
      }
      else for (let e3 of r2) u(e3) && t3.push(eM.create(e3));
      return new _eT({ oneOf: t3, discriminator: { propertyName: e2 } });
    })();
  }
  discriminatorPropType(e2) {
    return this._discriminatorPropName ?? (this._discriminatorPropName = (() => {
      var _a2, _b;
      let t2 = ((_a2 = this.schema.discriminator) == null ? void 0 : _a2.propertyName) ?? "", r2 = [], n2 = [];
      for (let e3 of this.schema.oneOf) {
        let i2 = ef.schemaProp(e3, "properties")[t2];
        if (!i2) continue;
        let a2 = i2.schema.enum;
        a2 && r2.push(...a2), n2.push(i2.meta);
      }
      return ev.of(ej.create(r2), { [ef.meta]: ef.create(n2[0], ((_b = e2.node) == null ? void 0 : _b.current.meta) ?? {}) });
    })());
  }
  discriminatorMapping(e2, t2, r2) {
    var _a2, _b;
    if (this._discriminatorMappingProps.get(t2)) return this._discriminatorMappingProps.get(t2);
    if ((((_b = (_a2 = this.discriminatorPropType(r2)) == null ? void 0 : _a2.schema) == null ? void 0 : _b.enum) ?? []).includes(t2)) {
      let r3 = this.schema.oneOf.find((r4) => {
        let n2 = ef.schemaProp(r4, "properties")[e2];
        if (n2) {
          let [e3, r5] = n2.validate(t2);
          return !e3;
        }
        return false;
      });
      if (r3) {
        if (!this._discriminatorMappingProps.has(t2)) {
          let n2 = {};
          for (let [t3, i2] of Object.entries(ef.schemaProp(r3, "properties"))) t3 !== e2 && (n2[t3] = i2);
          this._discriminatorMappingProps.set(t2, n2);
        }
        return this._discriminatorMappingProps.get(t2);
      }
    }
    return {};
  }
  *entries(e2) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er;
    if (this.schema.discriminator) {
      let r2 = this.schema.discriminator.propertyName, n2 = e2 == null ? void 0 : e2[r2], i2 = eM.create({ [r2]: this.discriminatorPropType(t2), ...this.discriminatorMapping(r2, n2, t2) });
      yield* i2.entries(e2, t2);
    }
  }
  get type() {
    return "union";
  }
  coercer(e2) {
    for (let t2 of this.schema.oneOf) {
      let [r2, n2] = es(e2, t2, { coerce: true });
      if (!r2) return n2;
    }
    return e2;
  }
  validator(e2, t2) {
    if (this.schema.discriminator) {
      let r3 = this.schema.discriminator.propertyName, n2 = e2 == null ? void 0 : e2[r3];
      return eM.create({ [r3]: this.discriminatorPropType(t2), ...this.discriminatorMapping(r3, n2, t2) }).validator(e2, t2);
    }
    let r2 = [];
    for (let n2 of this.schema.oneOf) {
      let [...i2] = ec(e2, n2, t2), [a2] = i2;
      if (a2 && !a2[0]) return [];
      for (let [e3] of i2) e3 && r2.push(e3);
    }
    return [`Expected the value to satisfy a union of \`${this.schema.oneOf.map((e3) => e3.type).join(" | ")}\`, but received: ${e2}`, ...r2];
  }
};
__publicField(_eT, "create", eu(function() {
  for (var e2 = arguments.length, t2 = Array(e2), r2 = 0; r2 < e2; r2++) t2[r2] = arguments[r2];
  return new _eT({ oneOf: t2 });
}));
let eT = _eT;
let ex = ew.create, eN = e_.create, eR = eO.create, ek = eP.create, ez = ej.create, eF = ej.nativeEnum, eD = eM.create, eK = eE.create, e$ = eA.create, eC = eT.create, eW = em.define, eI = el((e2) => eb.create(e2)), eV = el((e2, t2) => ev.of(e2, { [ef.meta]: t2 })), eL = {}, eq = function(e2, t2, r2) {
  let n2 = Promise.resolve();
  if (t2 && t2.length > 0) {
    document.getElementsByTagName("link");
    let e3 = document.querySelector("meta[property=csp-nonce]"), r3 = (e3 == null ? void 0 : e3.nonce) || (e3 == null ? void 0 : e3.getAttribute("nonce"));
    n2 = Promise.allSettled(t2.map((e4) => {
      if ((e4 = "/vuekit/" + e4) in eL) return;
      eL[e4] = true;
      let t3 = e4.endsWith(".css");
      if (document.querySelector(`link[href="${e4}"]${t3 ? '[rel="stylesheet"]' : ""}`)) return;
      let n3 = document.createElement("link");
      if (n3.rel = t3 ? "stylesheet" : "modulepreload", t3 || (n3.as = "script"), n3.crossOrigin = "", n3.href = e4, r3 && n3.setAttribute("nonce", r3), document.head.appendChild(n3), t3) return new Promise((t4, r4) => {
        n3.addEventListener("load", t4), n3.addEventListener("error", () => r4(Error(`Unable to preload CSS for ${e4}`)));
      });
    }));
  }
  function i2(e3) {
    let t3 = new Event("vite:preloadError", { cancelable: true });
    if (t3.payload = e3, window.dispatchEvent(t3), !t3.defaultPrevented) throw e3;
  }
  return n2.then((t3) => {
    for (let e3 of t3 || []) "rejected" === e3.status && i2(e3.reason);
    return e2().catch(i2);
  });
};
export {
  er as E,
  eh as J,
  ef as S,
  eq as _,
  e$ as a,
  ex as b,
  eW as c,
  eV as d,
  eR as e,
  eI as f,
  ee as g,
  ek as h,
  ei as i,
  ez as j,
  eF as n,
  eD as o,
  Y as p,
  eK as r,
  eN as s,
  eC as u
};
