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
let e = (e2) => void 0 === e2, t = (e2) => !!e2 && "object" == typeof e2, r = (e2) => !!e2 && e2.constructor == Object, n = (e2) => Array.isArray(e2), i = (e2) => "number" == typeof e2 && !Number.isNaN(e2) && Number.isInteger(e2), a = (e2) => "boolean" == typeof e2, o = (e2) => "string" == typeof e2, s = (e2) => "object" == typeof e2 && "function" == typeof e2[Symbol.iterator], c = (e2) => "function" == typeof e2 && `${e2}`.startsWith("class"), u = (e2) => !!(e2 && e2.constructor && e2.call && e2.apply);
var l, f, d, p, y = Symbol.for("immer-nothing"), h = Symbol.for("immer-draftable"), m = Symbol.for("immer-state");
function v(e2) {
  for (var t2 = arguments.length, r2 = Array(t2 > 1 ? t2 - 1 : 0), n2 = 1; n2 < t2; n2++) r2[n2 - 1] = arguments[n2];
  throw Error(`[Immer] minified error nr: ${e2}. Full error at: https://bit.ly/3cXEKWf`);
}
var g = Object.getPrototypeOf;
function b(e2) {
  return !!e2 && !!e2[m];
}
function w(e2) {
  var _a2;
  return !!e2 && (O(e2) || Array.isArray(e2) || !!e2[h] || !!((_a2 = e2.constructor) == null ? void 0 : _a2[h]) || E(e2) || A(e2));
}
var _ = Object.prototype.constructor.toString();
function O(e2) {
  if (!e2 || "object" != typeof e2) return false;
  let t2 = g(e2);
  if (null === t2) return true;
  let r2 = Object.hasOwnProperty.call(t2, "constructor") && t2.constructor;
  return r2 === Object || "function" == typeof r2 && Function.toString.call(r2) === _;
}
function P(e2, t2) {
  0 === j(e2) ? Reflect.ownKeys(e2).forEach((r2) => {
    t2(r2, e2[r2], e2);
  }) : e2.forEach((r2, n2) => t2(n2, r2, e2));
}
function j(e2) {
  let t2 = e2[m];
  return t2 ? t2.type_ : Array.isArray(e2) ? 1 : E(e2) ? 2 : A(e2) ? 3 : 0;
}
function S(e2, t2) {
  return 2 === j(e2) ? e2.has(t2) : Object.prototype.hasOwnProperty.call(e2, t2);
}
function M(e2, t2, r2) {
  let n2 = j(e2);
  2 === n2 ? e2.set(t2, r2) : 3 === n2 ? e2.add(r2) : e2[t2] = r2;
}
function E(e2) {
  return e2 instanceof Map;
}
function A(e2) {
  return e2 instanceof Set;
}
function T(e2) {
  return e2.copy_ || e2.base_;
}
function x(e2, t2) {
  if (E(e2)) return new Map(e2);
  if (A(e2)) return new Set(e2);
  if (Array.isArray(e2)) return Array.prototype.slice.call(e2);
  let r2 = O(e2);
  if (true !== t2 && ("class_only" !== t2 || r2)) {
    let t3 = g(e2);
    return null !== t3 && r2 ? { ...e2 } : Object.assign(Object.create(t3), e2);
  }
  {
    let t3 = Object.getOwnPropertyDescriptors(e2);
    delete t3[m];
    let r3 = Reflect.ownKeys(t3);
    for (let n2 = 0; n2 < r3.length; n2++) {
      let i2 = r3[n2], a2 = t3[i2];
      false === a2.writable && (a2.writable = true, a2.configurable = true), (a2.get || a2.set) && (t3[i2] = { configurable: true, writable: true, enumerable: a2.enumerable, value: e2[i2] });
    }
    return Object.create(g(e2), t3);
  }
}
function N(e2) {
  let t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return k(e2) || b(e2) || !w(e2) || (j(e2) > 1 && (e2.set = e2.add = e2.clear = e2.delete = R), Object.freeze(e2), t2 && Object.entries(e2).forEach((e3) => {
    let [t3, r2] = e3;
    return N(r2, true);
  })), e2;
}
function R() {
  v(2);
}
function k(e2) {
  return Object.isFrozen(e2);
}
var z = {};
function F(e2) {
  let t2 = z[e2];
  return t2 || v(0, e2), t2;
}
function D(e2, t2) {
  t2 && (F("Patches"), e2.patches_ = [], e2.inversePatches_ = [], e2.patchListener_ = t2);
}
function K(e2) {
  $(e2), e2.drafts_.forEach(W), e2.drafts_ = null;
}
function $(e2) {
  e2 === d && (d = e2.parent_);
}
function C(e2) {
  return d = { drafts_: [], parent_: d, immer_: e2, canAutoFreeze_: true, unfinalizedDrafts_: 0 };
}
function W(e2) {
  let t2 = e2[m];
  0 === t2.type_ || 1 === t2.type_ ? t2.revoke_() : t2.revoked_ = true;
}
function I(e2, t2) {
  t2.unfinalizedDrafts_ = t2.drafts_.length;
  let r2 = t2.drafts_[0];
  return void 0 !== e2 && e2 !== r2 ? (r2[m].modified_ && (K(t2), v(4)), w(e2) && (e2 = V(t2, e2), t2.parent_ || q(t2, e2)), t2.patches_ && F("Patches").generateReplacementPatches_(r2[m].base_, e2, t2.patches_, t2.inversePatches_)) : e2 = V(t2, r2, []), K(t2), t2.patches_ && t2.patchListener_(t2.patches_, t2.inversePatches_), e2 !== y ? e2 : void 0;
}
function V(e2, t2, r2) {
  if (k(t2)) return t2;
  let n2 = t2[m];
  if (!n2) return P(t2, (i2, a2) => L(e2, n2, t2, i2, a2, r2)), t2;
  if (n2.scope_ !== e2) return t2;
  if (!n2.modified_) return q(e2, n2.base_, true), n2.base_;
  if (!n2.finalized_) {
    n2.finalized_ = true, n2.scope_.unfinalizedDrafts_--;
    let t3 = n2.copy_, i2 = t3, a2 = false;
    3 === n2.type_ && (i2 = new Set(t3), t3.clear(), a2 = true), P(i2, (i3, o2) => L(e2, n2, t3, i3, o2, r2, a2)), q(e2, t3, false), r2 && e2.patches_ && F("Patches").generatePatches_(n2, r2, e2.patches_, e2.inversePatches_);
  }
  return n2.copy_;
}
function L(e2, t2, r2, n2, i2, a2, o2) {
  if (b(i2)) {
    let o3 = V(e2, i2, a2 && t2 && 3 !== t2.type_ && !S(t2.assigned_, n2) ? a2.concat(n2) : void 0);
    if (M(r2, n2, o3), !b(o3)) return;
    e2.canAutoFreeze_ = false;
  } else o2 && r2.add(i2);
  if (w(i2) && !k(i2)) {
    if (!e2.immer_.autoFreeze_ && e2.unfinalizedDrafts_ < 1) return;
    V(e2, i2), (!t2 || !t2.scope_.parent_) && "symbol" != typeof n2 && Object.prototype.propertyIsEnumerable.call(r2, n2) && q(e2, i2);
  }
}
function q(e2, t2) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  !e2.parent_ && e2.immer_.autoFreeze_ && e2.canAutoFreeze_ && N(t2, r2);
}
var J = { get(e2, t2) {
  if (t2 === m) return e2;
  let r2 = T(e2);
  if (!S(r2, t2)) return function(e3, t3, r3) {
    var _a2;
    let n3 = H(t3, r3);
    return n3 ? "value" in n3 ? n3.value : (_a2 = n3.get) == null ? void 0 : _a2.call(e3.draft_) : void 0;
  }(e2, r2, t2);
  let n2 = r2[t2];
  return e2.finalized_ || !w(n2) ? n2 : n2 === G(e2.base_, t2) ? (X(e2), e2.copy_[t2] = Q(n2, e2)) : n2;
}, has: (e2, t2) => t2 in T(e2), ownKeys: (e2) => Reflect.ownKeys(T(e2)), set(e2, t2, r2) {
  let n2 = H(T(e2), t2);
  if (n2 == null ? void 0 : n2.set) return n2.set.call(e2.draft_, r2), true;
  if (!e2.modified_) {
    let n3 = G(T(e2), t2), i2 = n3 == null ? void 0 : n3[m];
    if (i2 && i2.base_ === r2) return e2.copy_[t2] = r2, e2.assigned_[t2] = false, true;
    if ((r2 === n3 ? 0 !== r2 || 1 / r2 == 1 / n3 : r2 != r2 && n3 != n3) && (void 0 !== r2 || S(e2.base_, t2))) return true;
    X(e2), B(e2);
  }
  return !!(e2.copy_[t2] === r2 && (void 0 !== r2 || t2 in e2.copy_) || Number.isNaN(r2) && Number.isNaN(e2.copy_[t2])) || (e2.copy_[t2] = r2, e2.assigned_[t2] = true, true);
}, deleteProperty: (e2, t2) => (void 0 !== G(e2.base_, t2) || t2 in e2.base_ ? (e2.assigned_[t2] = false, X(e2), B(e2)) : delete e2.assigned_[t2], e2.copy_ && delete e2.copy_[t2], true), getOwnPropertyDescriptor(e2, t2) {
  let r2 = T(e2), n2 = Reflect.getOwnPropertyDescriptor(r2, t2);
  return n2 ? { writable: true, configurable: 1 !== e2.type_ || "length" !== t2, enumerable: n2.enumerable, value: r2[t2] } : n2;
}, defineProperty() {
  v(11);
}, getPrototypeOf: (e2) => g(e2.base_), setPrototypeOf() {
  v(12);
} }, U = {};
function G(e2, t2) {
  let r2 = e2[m];
  return (r2 ? T(r2) : e2)[t2];
}
function H(e2, t2) {
  if (!(t2 in e2)) return;
  let r2 = g(e2);
  for (; r2; ) {
    let e3 = Object.getOwnPropertyDescriptor(r2, t2);
    if (e3) return e3;
    r2 = g(r2);
  }
}
function B(e2) {
  !e2.modified_ && (e2.modified_ = true, e2.parent_ && B(e2.parent_));
}
function X(e2) {
  e2.copy_ || (e2.copy_ = x(e2.base_, e2.scope_.immer_.useStrictShallowCopy_));
}
function Q(e2, t2) {
  let r2 = E(e2) ? F("MapSet").proxyMap_(e2, t2) : A(e2) ? F("MapSet").proxySet_(e2, t2) : function(e3, t3) {
    let r3 = Array.isArray(e3), n2 = { type_: r3 ? 1 : 0, scope_: t3 ? t3.scope_ : d, modified_: false, finalized_: false, assigned_: {}, parent_: t3, base_: e3, draft_: null, copy_: null, revoke_: null, isManual_: false }, i2 = n2, a2 = J;
    r3 && (i2 = [n2], a2 = U);
    let { revoke: o2, proxy: s2 } = Proxy.revocable(i2, a2);
    return n2.draft_ = s2, n2.revoke_ = o2, s2;
  }(e2, t2);
  return (t2 ? t2.scope_ : d).drafts_.push(r2), r2;
}
P(J, (e2, t2) => {
  U[e2] = function() {
    return arguments[0] = arguments[0][0], t2.apply(this, arguments);
  };
}), U.deleteProperty = function(e2, t2) {
  return U.set.call(this, e2, t2, void 0);
}, U.set = function(e2, t2, r2) {
  return J.set.call(this, e2[0], t2, r2, e2[0]);
};
var Y = new class {
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
      if ("function" != typeof t2 && v(6), void 0 !== r2 && "function" != typeof r2 && v(7), w(e3)) {
        let i2 = C(this), a2 = Q(e3, void 0), o2 = true;
        try {
          n2 = t2(a2), o2 = false;
        } finally {
          o2 ? K(i2) : $(i2);
        }
        return D(i2, r2), I(n2, i2);
      }
      if (e3 && "object" == typeof e3) v(1, e3);
      else {
        if (void 0 === (n2 = t2(e3)) && (n2 = e3), n2 === y && (n2 = void 0), this.autoFreeze_ && N(n2, true), r2) {
          let t3 = [], i2 = [];
          F("Patches").generateReplacementPatches_(e3, n2, t3, i2), r2(t3, i2);
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
    w(e2) || v(8), b(e2) && (b(t2 = e2) || v(10, t2), e2 = function e3(t3) {
      let r3;
      if (!w(t3) || k(t3)) return t3;
      let n3 = t3[m];
      if (n3) {
        if (!n3.modified_) return n3.base_;
        n3.finalized_ = true, r3 = x(t3, n3.scope_.immer_.useStrictShallowCopy_);
      } else r3 = x(t3, true);
      return P(r3, (t4, n4) => {
        M(r3, t4, e3(n4));
      }), n3 && (n3.finalized_ = false), r3;
    }(t2));
    let r2 = C(this), n2 = Q(e2, void 0);
    return n2[m].isManual_ = true, $(r2), n2;
  }
  finishDraft(e2, t2) {
    let r2 = e2 && e2[m];
    r2 && r2.isManual_ || v(9);
    let { scope_: n2 } = r2;
    return D(n2, t2), I(void 0, n2);
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
    let n2 = F("Patches").applyPatches_;
    return b(e2) ? n2(e2, t2) : this.produce(e2, (e3) => n2(e3, t2));
  }
}(), Z = Y.produce;
Y.produceWithPatches.bind(Y), Y.setAutoFreeze.bind(Y), Y.setUseStrictShallowCopy.bind(Y), Y.applyPatches.bind(Y), Y.createDraft.bind(Y), Y.finishDraft.bind(Y);
var ee = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function et(e2) {
  return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
}
p || (p = 1, f = l || (l = {}), function(e2) {
  var t2 = "object" == typeof globalThis ? globalThis : "object" == typeof ee ? ee : "object" == typeof self ? self : "object" == typeof this ? this : function() {
    throw ReferenceError("globalThis could not be found. Please polyfill globalThis before loading this module.");
  }(), r2 = n2(f);
  function n2(e3, t3) {
    return function(r3, n3) {
      Object.defineProperty(e3, r3, { configurable: true, writable: true, value: n3 }), t3 && t3(r3, n3);
    };
  }
  void 0 !== t2.Reflect && (r2 = n2(t2.Reflect, r2)), e2(r2, t2), void 0 === t2.Reflect && (t2.Reflect = f);
}(function(e2, t2) {
  var r2, n2 = "function" == typeof Symbol, i2 = n2 && void 0 !== Symbol.toPrimitive ? Symbol.toPrimitive : x2("Symbol.toPrimitive not found."), a2 = n2 && void 0 !== Symbol.iterator ? Symbol.iterator : x2("Symbol.iterator not found."), o2 = Object.getPrototypeOf(Function), s2 = "function" == typeof Map && "function" == typeof Map.prototype.entries ? Map : x2("A valid Map constructor could not be found."), c2 = "function" == typeof Set && "function" == typeof Set.prototype.entries ? Set : x2("A valid Set constructor could not be found."), u2 = "function" == typeof WeakMap ? WeakMap : x2("A valid WeakMap constructor could not be found."), l2 = n2 ? Symbol.for("@reflect-metadata:registry") : void 0, f2 = (!g2(l2) && w2(t2.Reflect) && Object.isExtensible(t2.Reflect) && (r2 = t2.Reflect[l2]), g2(r2) && (r2 = function() {
    g2(l2) || void 0 === t2.Reflect || l2 in t2.Reflect || "function" != typeof t2.Reflect.defineMetadata || (r3 = (e3 = t2.Reflect).defineMetadata, n3 = e3.hasOwnMetadata, i3 = e3.getOwnMetadata, a3 = e3.getOwnMetadataKeys, o3 = e3.deleteMetadata, f3 = new u2(), d3 = { isProviderFor: function(e4, t3) {
      var r4 = f3.get(e4);
      return !!(!g2(r4) && r4.has(t3)) || !!a3(e4, t3).length && (g2(r4) && (r4 = new c2(), f3.set(e4, r4)), r4.add(t3), true);
    }, OrdinaryDefineOwnMetadata: r3, OrdinaryHasOwnMetadata: n3, OrdinaryGetOwnMetadata: i3, OrdinaryOwnMetadataKeys: a3, OrdinaryDeleteMetadata: o3 });
    var e3, r3, n3, i3, a3, o3, f3, d3, p3, y3, h3, m3 = new u2(), v3 = { registerProvider: function(e4) {
      if (!Object.isExtensible(v3)) throw Error("Cannot add provider to a frozen registry.");
      switch (true) {
        case d3 === e4:
          break;
        case g2(p3):
          p3 = e4;
          break;
        case p3 === e4:
          break;
        case g2(y3):
          y3 = e4;
          break;
        case y3 === e4:
          break;
        default:
          void 0 === h3 && (h3 = new c2()), h3.add(e4);
      }
    }, getProvider: b3, setProvider: function(e4, t3, r4) {
      if (!function(e5) {
        if (g2(e5)) throw TypeError();
        return p3 === e5 || y3 === e5 || !g2(h3) && h3.has(e5);
      }(r4)) throw Error("Metadata provider not registered.");
      var n4 = b3(e4, t3);
      if (n4 !== r4) {
        if (!g2(n4)) return false;
        var i4 = m3.get(e4);
        g2(i4) && (i4 = new s2(), m3.set(e4, i4)), i4.set(t3, r4);
      }
      return true;
    } };
    return v3;
    function b3(e4, t3) {
      var r4, n4 = m3.get(e4);
      return g2(n4) || (r4 = n4.get(t3)), g2(r4) && (r4 = function(e5, t4) {
        if (!g2(p3)) {
          if (p3.isProviderFor(e5, t4)) return p3;
          if (!g2(y3)) {
            if (y3.isProviderFor(e5, t4)) return p3;
            if (!g2(h3)) for (var r5 = M2(h3); ; ) {
              var n5 = E2(r5);
              if (!n5) return;
              var i4 = n5.value;
              if (i4.isProviderFor(e5, t4)) return A2(r5), i4;
            }
          }
        }
        if (!g2(d3) && d3.isProviderFor(e5, t4)) return d3;
      }(e4, t3), g2(r4) || (g2(n4) && (n4 = new s2(), m3.set(e4, n4)), n4.set(t3, r4))), r4;
    }
  }()), !g2(l2) && w2(t2.Reflect) && Object.isExtensible(t2.Reflect) && Object.defineProperty(t2.Reflect, l2, { enumerable: false, configurable: false, writable: false, value: r2 }), r2), d2 = function(e3) {
    var t3 = new u2(), r3 = { isProviderFor: function(e4, r4) {
      var n4 = t3.get(e4);
      return !g2(n4) && n4.has(r4);
    }, OrdinaryDefineOwnMetadata: function(e4, t4, r4, i3) {
      n3(r4, i3, true).set(e4, t4);
    }, OrdinaryHasOwnMetadata: function(e4, t4, r4) {
      var i3 = n3(t4, r4, false);
      return !g2(i3) && !!i3.has(e4);
    }, OrdinaryGetOwnMetadata: function(e4, t4, r4) {
      var i3 = n3(t4, r4, false);
      if (!g2(i3)) return i3.get(e4);
    }, OrdinaryOwnMetadataKeys: function(e4, t4) {
      var r4 = [], i3 = n3(e4, t4, false);
      if (g2(i3)) return r4;
      for (var a3 = M2(i3.keys()), o3 = 0; ; ) {
        var s3 = E2(a3);
        if (!s3) return r4.length = o3, r4;
        var c3 = s3.value;
        try {
          r4[o3] = c3;
        } catch (e5) {
          try {
            A2(a3);
          } finally {
            throw e5;
          }
        }
        o3++;
      }
    }, OrdinaryDeleteMetadata: function(e4, r4, i3) {
      var a3 = n3(r4, i3, false);
      if (g2(a3) || !a3.delete(e4)) return false;
      if (0 === a3.size) {
        var o3 = t3.get(r4);
        g2(o3) || (o3.delete(i3), 0 === o3.size && t3.delete(o3));
      }
      return true;
    } };
    return f2.registerProvider(r3), r3;
    function n3(n4, i3, a3) {
      var o3 = t3.get(n4), c3 = false;
      if (g2(o3)) {
        if (!a3) return;
        o3 = new s2(), t3.set(n4, o3), c3 = true;
      }
      var u3 = o3.get(i3);
      if (g2(u3)) {
        if (!a3) return;
        if (u3 = new s2(), o3.set(i3, u3), !e3.setProvider(n4, i3, r3)) throw o3.delete(i3), c3 && t3.delete(n4), Error("Wrong provider for target.");
      }
      return u3;
    }
  }(f2);
  function p2(e3, t3, r3) {
    var n3 = N2(t3, r3, false);
    return !g2(n3) && !!n3.OrdinaryHasOwnMetadata(e3, t3, r3);
  }
  function y2(e3, t3, r3) {
    var n3 = N2(t3, r3, false);
    if (!g2(n3)) return n3.OrdinaryGetOwnMetadata(e3, t3, r3);
  }
  function h2(e3, t3, r3, n3) {
    N2(r3, n3, true).OrdinaryDefineOwnMetadata(e3, t3, r3, n3);
  }
  function m2(e3, t3) {
    var r3 = N2(e3, t3, false);
    return r3 ? r3.OrdinaryOwnMetadataKeys(e3, t3) : [];
  }
  function v2(e3) {
    if (null === e3) return 1;
    switch (typeof e3) {
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
        return null === e3 ? 1 : 6;
      default:
        return 6;
    }
  }
  function g2(e3) {
    return void 0 === e3;
  }
  function b2(e3) {
    return null === e3;
  }
  function w2(e3) {
    return "object" == typeof e3 ? null !== e3 : "function" == typeof e3;
  }
  function _2(e3) {
    var t3 = function(e4, t4) {
      switch (v2(e4)) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          return e4;
      }
      var r3 = S2(e4, i2);
      if (void 0 !== r3) {
        var n3 = r3.call(e4, "string");
        if (w2(n3)) throw TypeError();
        return n3;
      }
      return function(e5, t5) {
        var r4, n4, i3 = e5.toString;
        if (P2(i3)) {
          var n4 = i3.call(e5);
          if (!w2(n4)) return n4;
        }
        var r4 = e5.valueOf;
        if (P2(r4)) {
          var n4 = r4.call(e5);
          if (!w2(n4)) return n4;
        }
        throw TypeError();
      }(e4);
    }(e3);
    return "symbol" == typeof t3 ? t3 : "" + t3;
  }
  function O2(e3) {
    return Array.isArray ? Array.isArray(e3) : e3 instanceof Object ? e3 instanceof Array : "[object Array]" === Object.prototype.toString.call(e3);
  }
  function P2(e3) {
    return "function" == typeof e3;
  }
  function j2(e3) {
    return "function" == typeof e3;
  }
  function S2(e3, t3) {
    var r3 = e3[t3];
    if (null != r3) {
      if (!P2(r3)) throw TypeError();
      return r3;
    }
  }
  function M2(e3) {
    var t3 = S2(e3, a2);
    if (!P2(t3)) throw TypeError();
    var r3 = t3.call(e3);
    if (!w2(r3)) throw TypeError();
    return r3;
  }
  function E2(e3) {
    var t3 = e3.next();
    return !t3.done && t3;
  }
  function A2(e3) {
    var t3 = e3.return;
    t3 && t3.call(e3);
  }
  function T2(e3) {
    var t3 = Object.getPrototypeOf(e3);
    if ("function" != typeof e3 || e3 === o2 || t3 !== o2) return t3;
    var r3 = e3.prototype, n3 = r3 && Object.getPrototypeOf(r3);
    if (null == n3 || n3 === Object.prototype) return t3;
    var i3 = n3.constructor;
    return "function" != typeof i3 || i3 === e3 ? t3 : i3;
  }
  function x2(e3) {
    throw e3;
  }
  function N2(e3, t3, r3) {
    var n3 = f2.getProvider(e3, t3);
    if (!g2(n3)) return n3;
    if (r3) {
      if (f2.setProvider(e3, t3, d2)) return d2;
      throw Error("Illegal state.");
    }
  }
  e2("decorate", function(e3, t3, r3, n3) {
    if (g2(r3)) {
      if (!O2(e3) || !j2(t3)) throw TypeError();
      return function(e4, t4) {
        for (var r4 = e4.length - 1; r4 >= 0; --r4) {
          var n4 = (0, e4[r4])(t4);
          if (!g2(n4) && !b2(n4)) {
            if (!j2(n4)) throw TypeError();
            t4 = n4;
          }
        }
        return t4;
      }(e3, t3);
    }
    if (!O2(e3) || !w2(t3) || !w2(n3) && !g2(n3) && !b2(n3)) throw TypeError();
    return b2(n3) && (n3 = void 0), function(e4, t4, r4, n4) {
      for (var i3 = e4.length - 1; i3 >= 0; --i3) {
        var a3 = (0, e4[i3])(t4, r4, n4);
        if (!g2(a3) && !b2(a3)) {
          if (!w2(a3)) throw TypeError();
          n4 = a3;
        }
      }
      return n4;
    }(e3, t3, r3 = _2(r3), n3);
  }), e2("metadata", function(e3, t3) {
    return function(r3, n3) {
      if (!w2(r3) || !g2(n3) && !function(e4) {
        switch (v2(e4)) {
          case 3:
          case 4:
            return true;
          default:
            return false;
        }
      }(n3)) throw TypeError();
      h2(e3, t3, r3, n3);
    };
  }), e2("defineMetadata", function(e3, t3, r3, n3) {
    if (!w2(r3)) throw TypeError();
    return g2(n3) || (n3 = _2(n3)), h2(e3, t3, r3, n3);
  }), e2("hasMetadata", function(e3, t3, r3) {
    if (!w2(t3)) throw TypeError();
    return g2(r3) || (r3 = _2(r3)), function e4(t4, r4, n3) {
      if (p2(t4, r4, n3)) return true;
      var i3 = T2(r4);
      return !b2(i3) && e4(t4, i3, n3);
    }(e3, t3, r3);
  }), e2("hasOwnMetadata", function(e3, t3, r3) {
    if (!w2(t3)) throw TypeError();
    return g2(r3) || (r3 = _2(r3)), p2(e3, t3, r3);
  }), e2("getMetadata", function(e3, t3, r3) {
    if (!w2(t3)) throw TypeError();
    return g2(r3) || (r3 = _2(r3)), function e4(t4, r4, n3) {
      if (p2(t4, r4, n3)) return y2(t4, r4, n3);
      var i3 = T2(r4);
      if (!b2(i3)) return e4(t4, i3, n3);
    }(e3, t3, r3);
  }), e2("getOwnMetadata", function(e3, t3, r3) {
    if (!w2(t3)) throw TypeError();
    return g2(r3) || (r3 = _2(r3)), y2(e3, t3, r3);
  }), e2("getMetadataKeys", function(e3, t3) {
    if (!w2(e3)) throw TypeError();
    return g2(t3) || (t3 = _2(t3)), function e4(t4, r3) {
      var n3 = m2(t4, r3), i3 = T2(t4);
      if (null === i3) return n3;
      var a3 = e4(i3, r3);
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
    }(e3, t3);
  }), e2("getOwnMetadataKeys", function(e3, t3) {
    if (!w2(e3)) throw TypeError();
    return g2(t3) || (t3 = _2(t3)), m2(e3, t3);
  }), e2("deleteMetadata", function(e3, t3, r3) {
    if (!w2(t3)) throw TypeError();
    g2(r3) || (r3 = _2(r3));
    var n3 = N2(t3, r3, false);
    return !g2(n3) && n3.OrdinaryDeleteMetadata(e3, t3, r3);
  });
}));
class er {
  static getOwnPropertyNames(e2) {
    return Reflect.getMetadataKeys(e2);
  }
  static get(e2, t2) {
    return Reflect.getMetadata(t2, e2);
  }
  static define(e2, t2, r2, n2) {
    if (e2 && e2.constructor && e2.constructor != Object) {
      if (u(r2)) {
        Reflect.defineMetadata(t2, Z(Reflect.getMetadata(t2, e2) ?? n2 ?? {}, r2), e2);
        return;
      }
      Reflect.defineMetadata(t2, r2, e2);
    }
  }
}
let en = { path: [], branch: [] };
class ei extends TypeError {
  constructor(e2, t2) {
    let r2;
    let { message: n2, explanation: i2, ...a2 } = e2, { path: o2 } = e2, s2 = 0 === o2.length ? n2 : `At path: ${o2.join(".")} -- ${n2}`;
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
let ea = (e2) => !!e2 && e2[eo] == eo, eo = Symbol("Type");
function* es(t2, r2, n2, i2) {
  let a2 = t2;
  for (let t3 of (s(a2) || (a2 = [a2]), a2)) {
    let a3 = function(t4, r3, n3, i3) {
      if (true === t4) return;
      let a4 = {};
      a4 = false === t4 ? {} : o(t4) ? { message: t4 } : t4;
      let { path: s2, branch: c2, node: u2 } = r3, { type: l2 } = n3, { refinement: f2, message: d2 = e(i3) ? "Required" : `Expected a value of type \`${l2}\`${f2 ? ` with refinement \`${f2}\`` : ""}, but received: \`${i3}\`` } = a4;
      return { ...a4, value: i3, type: l2, refinement: f2, key: s2[s2.length - 1], path: s2, branch: c2, node: u2, message: d2 };
    }(t3, r2, n2, i2);
    a3 && (yield a3);
  }
}
function ec(e2, t2) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n2 = eu(e2, t2, r2), i2 = function(e3) {
    let { done: t3, value: r3 } = e3.next();
    return t3 ? void 0 : r3;
  }(n2);
  return i2[0] ? [new ei(i2[0], function* () {
    for (let e3 of n2) e3[0] && (yield e3[0]);
  }), void 0] : [void 0, i2[1]];
}
function* eu(e2, r2) {
  let n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, { path: i2 = [], branch: a2 = [e2], node: o2 = { current: r2 }, coerce: s2 = false, mask: c2 = false } = n2, u2 = { mask: c2, path: i2, branch: a2, node: o2 }, l2 = e2;
  if (s2) {
    let t2 = r2.coercer(e2, u2);
    void 0 != t2 && (l2 = t2);
  }
  let f2 = 0;
  for (let t2 of es(r2.validator(l2, u2), u2, r2, e2)) t2.explanation = n2.message, f2 = 2, yield [t2, void 0];
  for (let [e3, d2, p2] of r2.entries(l2, u2)) for (let r3 of eu(d2, p2, { path: void 0 === e3 ? i2 : [...i2, e3], branch: void 0 === e3 ? a2 : [...a2, d2], node: void 0 === e3 ? o2 : { current: p2, parent: o2 }, coerce: s2, mask: c2, message: n2.message })) r3[0] ? (f2 = null != r3[0].refinement ? 1 : 2, yield [r3[0], void 0]) : s2 && (d2 = r3[1], void 0 === e3 ? l2 = d2 : l2 instanceof Map ? l2.set(e3, d2) : l2 instanceof Set ? l2.add(d2) : t(l2) && (l2[e3] = d2));
  if (2 !== f2) for (let t2 of es(r2.refiner(l2, u2), u2, r2, e2)) t2.explanation = n2.message, f2 = 1, yield [t2, void 0];
  0 === f2 && (yield [void 0, l2]);
}
let el = (e2) => function() {
  for (var t2 = arguments.length, r2 = Array(t2), n2 = 0; n2 < t2; n2++) r2[n2] = arguments[n2];
  let i2 = e2(...r2), a2 = (e3, t3) => {
    let r3 = er.get(e3, t3) ?? {};
    er.define(e3, t3, { ...r3, type: i2 });
  };
  return a2.toString = () => `@type:${i2.type}`, new Proxy(a2, { ownKeys: () => [...Object.getOwnPropertyNames(i2), ...Object.getOwnPropertySymbols(i2)], get: (e3, t3) => i2[t3] });
}, ef = (e2) => function() {
  for (var t2 = arguments.length, r2 = Array(t2), n2 = 0; n2 < t2; n2++) r2[n2] = arguments[n2];
  let i2 = (t3) => e2(t3, ...r2);
  return new Proxy((e3, t3) => {
    er.define(e3, t3, (e4) => {
      (e4.modifies ?? (e4.modifies = [])).push({ modify: i2 });
    }, {});
  }, { get(e3, t3) {
    if ("modify" == t3) return i2;
  } });
};
const _ed = class _ed {
  static create(t2, n2, i2) {
    var _a2;
    let a2;
    let o2 = n2 ?? ((_a2 = t2[_ed.underlying]) == null ? void 0 : _a2.schema) ?? {};
    return new Proxy({}, { ownKeys(e2) {
      let r2 = /* @__PURE__ */ new Map();
      if (i2) {
        if (t2[i2]) for (let e3 of Object.getOwnPropertyNames(t2[i2])) r2.set(e3, e3);
        if (o2 && o2[i2]) for (let e3 of Object.getOwnPropertyNames(o2[i2])) r2.set(e3, e3);
      } else {
        for (let e3 of Object.getOwnPropertyNames(t2)) r2.set(e3, e3);
        if (o2) for (let e3 of Object.getOwnPropertyNames(o2)) r2.set(e3, e3);
      }
      return [...r2.keys()];
    }, get(n3, s2) {
      var _a3, _b;
      if (s2 === _ed.meta) return a2 ?? (a2 = _ed.create(t2, o2, _ed.meta));
      if (i2) {
        if (r(t2)) {
          let r2 = (_a3 = t2 == null ? void 0 : t2[i2]) == null ? void 0 : _a3[s2];
          if (!e(r2)) return r2;
        }
        return o2 ? (_b = o2 == null ? void 0 : o2[i2]) == null ? void 0 : _b[s2] : void 0;
      }
      if (r(t2)) {
        let r2 = t2 == null ? void 0 : t2[s2];
        if (!e(r2)) return r2;
      }
      return o2 ? o2[s2] : void 0;
    } });
  }
  static schemaProp(e2, t2) {
    return ep(e2.schema, t2);
  }
  static metaProp(e2, t2) {
    return ey(e2.schema, t2);
  }
};
__publicField(_ed, "RecordKey", Symbol("RecordKey"));
__publicField(_ed, "meta", Symbol("meta"));
__publicField(_ed, "optional", Symbol("optional"));
__publicField(_ed, "underlying", Symbol("underlying"));
__publicField(_ed, "unwrap", Symbol("unwrap"));
__publicField(_ed, "extractSchema", (e2) => new eh().toValue(e2));
__publicField(_ed, "extractMeta", (e2) => new eh().toValue(e2.meta ?? e2[_ed.meta]));
let ed = _ed;
let ep = (e2, t2) => {
  if (r(e2)) return e2[t2] ?? (e2[ed.unwrap] ? ep(e2[ed.unwrap]().schema, t2) : void 0);
}, ey = (e2, t2) => {
  var _a2;
  if (r(e2)) return ((_a2 = e2[ed.meta]) == null ? void 0 : _a2[t2]) ?? (e2[ed.unwrap] ? ey(e2[ed.unwrap]().schema, t2) : void 0);
};
class eh {
  constructor(e2 = false) {
    this.deref = e2;
  }
  toValue(t2) {
    if (t2) {
      if (!e(t2.schema)) return this.toValue(t2.schema);
      if (this.deref && t2[ed.unwrap]) return this.toValue(t2[ed.unwrap]());
      if (n(t2)) return this.toArray(t2);
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
class em {
  static parse(e2) {
    if ("" === e2) return [];
    if ("/" === e2) return [""];
    if ("/" !== e2.charAt(0)) throw Error("Invalid JSON pointer: " + e2);
    let t2 = e2.substring(1).split(/\//);
    return t2.map((e3, r2) => em.unescape(e3, r2 === t2.length - 1));
  }
  static create() {
    let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return 0 === e2.length ? "" : "/" + e2.map(em.escape).join("/");
  }
  static unescape(e2, t2) {
    return "" == e2 && t2 ? ed.RecordKey : e2.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  static escape(e2) {
    return e2 == ed.RecordKey ? "" : e2.toString().replace(/~/g, "~0").replace(/\//g, "~1");
  }
  static get(e2, t2) {
    let r2 = Array.isArray(t2) ? t2 : em.parse(t2);
    for (let t3 = 0; t3 < r2.length; t3++) {
      let n2 = r2[t3];
      if (t3 > 0 && n2 == ed.RecordKey) return r2[t3 - 1];
      if (!("object" == typeof e2 && n2 in e2)) throw Error("Invalid reference token: " + n2);
      e2 = e2[n2];
    }
    return e2;
  }
}
_a = eo;
const _ev = class _ev {
  constructor(e2) {
    __publicField(this, _a, eo);
    __publicField(this, "schema");
    if (e2) {
      this.schema = ed.create(e2);
      return;
    }
    this.schema = e2 ?? null;
  }
  get meta() {
    return this.schema ? this.schema[ed.meta] : {};
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
    if (o(e2)) {
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
    return ec(e2, this, t2);
  }
  create(e2) {
    let t2 = ec(e2, this, { coerce: true });
    if (t2[0]) throw t2[0];
    return t2[1];
  }
  mask(e2) {
    let t2 = ec(e2, this, { coerce: true, mask: true });
    if (t2[0]) throw t2[0];
    return t2[1];
  }
  use() {
    for (var e2 = arguments.length, t2 = Array(e2), r2 = 0; r2 < e2; r2++) t2[r2] = arguments[r2];
    return t2.reduce((e3, t3) => t3.modify(e3), this);
  }
  optional() {
    return ew.create(this);
  }
  default(e2) {
    return eb.create(this, e2);
  }
};
__publicField(_ev, "define", el(function() {
  let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => true;
  return new class extends _ev {
    validator(t2, r2) {
      return e2(t2, r2);
    }
  }(null);
}));
__publicField(_ev, "fromTypeObject", (e2, t2) => {
  let r2 = e2.type ?? t2 ?? new _ev({});
  return e2.modifies ? r2.use(...e2.modifies ?? []) : r2;
});
let ev = _ev;
class eg extends ev {
  static of(e2, t2) {
    return new eg({ ...t2, [ed.underlying]: e2 });
  }
  static refine(e2, t2, r2) {
    return new class extends eg {
      *refiner(n2, i2) {
        for (let a2 of (yield* this.unwrap.refiner(n2, i2), es(t2(n2, i2), i2, e2, n2))) yield { ...a2, refinement: Object.keys(r2).join(",") };
      }
    }({ ...r2, [ed.underlying]: e2 });
  }
  get unwrap() {
    let e2 = this.schema[ed.unwrap];
    return e2 ? e2() : this.schema[ed.underlying];
  }
  get type() {
    return this.unwrap.type;
  }
  *entries(e2) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : en;
    yield* this.unwrap.entries(e2, { ...t2, node: { current: this, parent: t2.node } });
  }
  validator(e2, t2) {
    return es(this.unwrap.validator(e2, t2), t2, this, e2);
  }
  refiner(e2, t2) {
    return es(this.unwrap.refiner(e2, t2), t2, this, e2);
  }
  coercer(e2, t2) {
    return this.unwrap.coercer(e2, t2);
  }
}
const _eb = class _eb extends eg {
  coercer(e2, t2) {
    return void 0 === e2 ? this.schema.default : super.unwrap.coercer(e2, t2);
  }
};
__publicField(_eb, "create", el((e2, t2) => new _eb({ default: t2, [ed.underlying]: e2 })));
let eb = _eb;
const _ew = class _ew extends eg {
  refiner(e2, t2) {
    return void 0 === e2 || super.unwrap.refiner(e2, t2);
  }
  validator(e2, t2) {
    return void 0 === e2 || super.unwrap.validator(e2, t2);
  }
};
__publicField(_ew, "create", el((e2) => new _ew({ [ed.underlying]: e2, [ed.optional]: e2 })));
let ew = _ew;
const _e_ = class _e_ extends ev {
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
__publicField(_e_, "create", el(() => new _e_()));
let e_ = _e_;
const _eO = class _eO extends ev {
  get type() {
    return this.schema.type;
  }
  validator(e2, t2) {
    return o(e2);
  }
};
__publicField(_eO, "create", el(() => new _eO({ type: "string" })));
let eO = _eO;
const _eP = class _eP extends ev {
  get type() {
    return this.schema.type;
  }
  validator(e2, t2) {
    return i(e2);
  }
  coercer(e2, t2) {
    try {
      let t3 = void 0 != e2 ? parseInt(String(e2)) : void 0;
      return i(t3) ? t3 : void 0;
    } catch (e3) {
      return;
    }
  }
};
__publicField(_eP, "create", el(() => new _eP({ type: "integer" })));
let eP = _eP;
const _ej = class _ej extends ev {
  get type() {
    return this.schema.type;
  }
  validator(e2, t2) {
    return a(e2);
  }
  coercer(e2, t2) {
    try {
      return void 0 != e2 ? "true" === String(e2) : void 0;
    } catch (e3) {
      return;
    }
  }
};
__publicField(_ej, "create", el(() => new _ej({ type: "boolean" })));
let ej = _ej;
const _eS = class _eS extends ev {
  static createEnum(e2) {
    return new _eS({ enum: e2 });
  }
  get type() {
    return "enums";
  }
  validator(e2, t2) {
    return this.schema.enum.includes(e2);
  }
};
__publicField(_eS, "create", el(_eS.createEnum));
__publicField(_eS, "literal", el((e2) => new _eS({ enum: [e2] })));
__publicField(_eS, "nativeEnum", el((e2) => new _eS({ enum: Object.values(e2) })));
let eS = _eS;
const _eM = class _eM extends ev {
  get type() {
    return "never";
  }
  validator(e2, t2) {
    return false;
  }
};
__publicField(_eM, "create", el(() => new _eM(false)));
let eM = _eM;
class eE extends ev {
  static create(e2) {
    let t2 = function() {
      let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t3 = [];
      for (let [r2, n2] of Object.entries(e3)) ed.schemaProp(n2, ed.optional) || t3.push(r2);
      return t3;
    };
    return el(() => {
      var _a2, _b;
      if (e2) {
        if (c(e2)) {
          let r2 = new e2(), n2 = {};
          for (let [e3, t3] of Object.entries(r2)) n2[e3] = eS.literal(t3);
          for (let e3 of er.getOwnPropertyNames(r2)) {
            let t3 = er.get(r2, e3);
            if (t3) {
              let r3 = ev.fromTypeObject(t3, n2[e3]);
              e3 in n2 ? n2[e3] = r3.default((_b = (_a2 = n2[e3].schema) == null ? void 0 : _a2.enum) == null ? void 0 : _b[0]) : n2[e3] = r3;
            }
          }
          return new eE({ type: "object", properties: n2, required: t2(n2), additionalProperties: eM.create() });
        }
        return new eE({ type: "object", properties: e2, required: t2(e2), additionalProperties: eM.create() });
      }
      return new eE({ type: "object", properties: {}, required: [], additionalProperties: eM.create() });
    })();
  }
  get type() {
    return this.schema.type;
  }
  *entries(e2) {
    var _a2;
    let r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : en;
    if (t(e2)) {
      let t2 = new Set(Object.keys(e2));
      if (this.schema.properties) for (let r3 in this.schema.properties) t2.delete(r3), yield [r3, e2[r3], this.schema.properties[r3]];
      if (((_a2 = r2.node) == null ? void 0 : _a2.current.type) !== "intersection") for (let r3 of t2) yield [r3, e2[r3], this.schema.additionalProperties];
    }
  }
  validator(e2, r2) {
    return t(e2);
  }
  coercer(e2, r2) {
    if (t(e2)) {
      let t2 = { ...e2 };
      if (r2.mask) {
        let e3 = this.schema.properties;
        if (e3) for (let r3 in t2) void 0 === e3[r3] && delete t2[r3];
      }
      return t2;
    }
    return super.coercer(e2, r2);
  }
}
const _eA = class _eA extends ev {
  get type() {
    return "record";
  }
  *entries(e2) {
    if (t(e2)) for (let [t2, r2] of Object.entries(e2)) yield [ed.RecordKey, t2, this.schema.propertyNames], yield [t2, r2, this.schema.additionalProperties];
  }
  validator(e2) {
    return t(e2);
  }
};
__publicField(_eA, "create", el((e2, t2) => new _eA({ type: "object", propertyNames: e2, additionalProperties: t2 })));
let eA = _eA;
const _eT = class _eT extends ev {
  get type() {
    return this.schema.type;
  }
  *entries(e2) {
    if (Array.isArray(e2)) for (let [t2, r2] of e2.entries()) yield [t2, r2, this.schema.items];
  }
  validator(e2) {
    return n(e2);
  }
  coercer(e2) {
    return n(e2) ? e2.slice() : e2;
  }
};
__publicField(_eT, "create", el((e2) => new _eT({ type: "array", items: e2 })));
let eT = _eT;
const _ex = class _ex extends ev {
  constructor() {
    super(...arguments);
    __publicField(this, "_discriminatorPropName");
    __publicField(this, "_discriminatorMappingProps", /* @__PURE__ */ new Map());
  }
  static discriminatorMapping(e2) {
    for (var t2 = arguments.length, r2 = Array(t2 > 1 ? t2 - 1 : 0), n2 = 1; n2 < t2; n2++) r2[n2 - 1] = arguments[n2];
    return el(() => {
      let t3 = [];
      if (1 == r2.length && r2[0].constructor == Object) for (let [n3, i2] of Object.entries(r2[0])) if (ed.schemaProp(i2, "$ref")) t3.push(i2);
      else {
        let r3 = { [e2]: eS.literal(n3) };
        for (let [e3, t4, n4] of i2.entries({}, en)) r3[String(e3)] = n4;
        t3.push(eE.create(r3));
      }
      else for (let e3 of r2) c(e3) && t3.push(eE.create(e3));
      return new _ex({ oneOf: t3, discriminator: { propertyName: e2 } });
    })();
  }
  discriminatorPropType(e2) {
    return this._discriminatorPropName ?? (this._discriminatorPropName = (() => {
      var _a2, _b;
      let t2 = ((_a2 = this.schema.discriminator) == null ? void 0 : _a2.propertyName) ?? "", r2 = [], n2 = [];
      for (let e3 of this.schema.oneOf) {
        let i2 = ed.schemaProp(e3, "properties")[t2];
        if (!i2) continue;
        let a2 = i2.schema.enum;
        a2 && r2.push(...a2), n2.push(i2.meta);
      }
      return eg.of(eS.create(r2), { [ed.meta]: ed.create(n2[0], ((_b = e2.node) == null ? void 0 : _b.current.meta) ?? {}) });
    })());
  }
  discriminatorMapping(e2, t2, r2) {
    var _a2, _b;
    if (this._discriminatorMappingProps.get(t2)) return this._discriminatorMappingProps.get(t2);
    if ((((_b = (_a2 = this.discriminatorPropType(r2)) == null ? void 0 : _a2.schema) == null ? void 0 : _b.enum) ?? []).includes(t2)) {
      let r3 = this.schema.oneOf.find((r4) => {
        let n2 = ed.schemaProp(r4, "properties")[e2];
        if (n2) {
          let [e3, r5] = n2.validate(t2);
          return !e3;
        }
        return false;
      });
      if (r3) {
        if (!this._discriminatorMappingProps.has(t2)) {
          let n2 = {};
          for (let [t3, i2] of Object.entries(ed.schemaProp(r3, "properties"))) t3 !== e2 && (n2[t3] = i2);
          this._discriminatorMappingProps.set(t2, n2);
        }
        return this._discriminatorMappingProps.get(t2);
      }
    }
    return {};
  }
  *entries(e2) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : en;
    if (this.schema.discriminator) {
      let r2 = this.schema.discriminator.propertyName, n2 = e2 == null ? void 0 : e2[r2], i2 = eE.create({ [r2]: this.discriminatorPropType(t2), ...this.discriminatorMapping(r2, n2, t2) });
      yield* i2.entries(e2, t2);
    }
  }
  get type() {
    return "union";
  }
  coercer(e2) {
    for (let t2 of this.schema.oneOf) {
      let [r2, n2] = ec(e2, t2, { coerce: true });
      if (!r2) return n2;
    }
    return e2;
  }
  validator(e2, t2) {
    if (this.schema.discriminator) {
      let r3 = this.schema.discriminator.propertyName, n2 = e2 == null ? void 0 : e2[r3];
      return eE.create({ [r3]: this.discriminatorPropType(t2), ...this.discriminatorMapping(r3, n2, t2) }).validator(e2, t2);
    }
    let r2 = [];
    for (let n2 of this.schema.oneOf) {
      let [...i2] = eu(e2, n2, t2), [a2] = i2;
      if (a2 && !a2[0]) return [];
      for (let [e3] of i2) e3 && r2.push(e3);
    }
    return [`Expected the value to satisfy a union of \`${this.schema.oneOf.map((e3) => e3.type).join(" | ")}\`, but received: ${e2}`, ...r2];
  }
};
__publicField(_ex, "create", el(function() {
  for (var e2 = arguments.length, t2 = Array(e2), r2 = 0; r2 < e2; r2++) t2[r2] = arguments[r2];
  return new _ex({ oneOf: t2 });
}));
let ex = _ex;
let eN = e_.create, eR = eO.create, ek = eP.create, ez = ej.create, eF = eS.create, eD = eS.nativeEnum, eK = eE.create, e$ = eA.create, eC = eT.create, eW = ex.create, eI = ev.define, eV = ef((e2) => ew.create(e2)), eL = ef((e2, t2) => eg.of(e2, { [ed.meta]: t2 })), eq = {}, eJ = function(e2, t2, r2) {
  let n2 = Promise.resolve();
  if (t2 && t2.length > 0) {
    document.getElementsByTagName("link");
    let e3 = document.querySelector("meta[property=csp-nonce]"), r3 = (e3 == null ? void 0 : e3.nonce) || (e3 == null ? void 0 : e3.getAttribute("nonce"));
    n2 = Promise.allSettled(t2.map((e4) => {
      if ((e4 = "/vuekit/" + e4) in eq) return;
      eq[e4] = true;
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
  en as E,
  em as J,
  ed as S,
  eJ as _,
  eC as a,
  eN as b,
  eI as c,
  eL as d,
  ek as e,
  eV as f,
  et as g,
  ez as h,
  ea as i,
  eF as j,
  eD as n,
  eK as o,
  Z as p,
  e$ as r,
  eR as s,
  eW as u
};
