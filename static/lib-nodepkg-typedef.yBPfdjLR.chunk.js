var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a;
import { i as e } from "./lib-nodepkg-vuekit.hhdOaADt.chunk.js";
let t = (e2) => void 0 === e2, r = (e2) => !!e2 && "object" == typeof e2, n = (e2) => !!e2 && e2.constructor == Object, i = (e2) => Array.isArray(e2), a = (e2) => "number" == typeof e2 && !Number.isNaN(e2) && Number.isInteger(e2), o = (e2) => "boolean" == typeof e2, s = (e2) => "string" == typeof e2, c = (e2) => "object" == typeof e2 && "function" == typeof e2[Symbol.iterator], l = (e2) => "function" == typeof e2 && `${e2}`.startsWith("class"), u = (e2) => !!(e2 && e2.constructor && e2.call && e2.apply);
var f, d, p, h = /* @__PURE__ */ Symbol.for("immer-nothing"), y = /* @__PURE__ */ Symbol.for("immer-draftable"), v = /* @__PURE__ */ Symbol.for("immer-state");
function m(e2) {
  for (var t2 = arguments.length, r2 = Array(t2 > 1 ? t2 - 1 : 0), n2 = 1; n2 < t2; n2++) r2[n2 - 1] = arguments[n2];
  throw Error(`[Immer] minified error nr: ${e2}. Full error at: https://bit.ly/3cXEKWf`);
}
var g = Object.getPrototypeOf;
function b(e2) {
  return !!e2 && !!e2[v];
}
function w(e2) {
  var t2;
  return !!e2 && (O(e2) || Array.isArray(e2) || !!e2[y] || !!(null === (t2 = e2.constructor) || void 0 === t2 ? void 0 : t2[y]) || E(e2) || A(e2));
}
var _ = /* @__PURE__ */ Object.prototype.constructor.toString();
function O(e2) {
  if (!e2 || "object" != typeof e2) return false;
  let t2 = /* @__PURE__ */ g(e2);
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
  let t2 = e2[v];
  return t2 ? t2.type_ : Array.isArray(e2) ? 1 : E(e2) ? 2 : A(e2) ? 3 : 0;
}
function M(e2, t2) {
  return 2 === j(e2) ? e2.has(t2) : Object.prototype.hasOwnProperty.call(e2, t2);
}
function S(e2, t2, r2) {
  let n2 = /* @__PURE__ */ j(e2);
  2 === n2 ? e2.set(t2, r2) : 3 === n2 ? e2.add(r2) : e2[t2] = r2;
}
function E(e2) {
  return e2 instanceof Map;
}
function A(e2) {
  return e2 instanceof Set;
}
function x(e2) {
  return e2.copy_ || e2.base_;
}
function R(e2, t2) {
  if (E(e2)) return new Map(e2);
  if (A(e2)) return new Set(e2);
  if (Array.isArray(e2)) return Array.prototype.slice.call(e2);
  let r2 = /* @__PURE__ */ O(e2);
  if (true !== t2 && ("class_only" !== t2 || r2)) {
    let t3 = /* @__PURE__ */ g(e2);
    return null !== t3 && r2 ? { ...e2 } : Object.assign(/* @__PURE__ */ Object.create(t3), e2);
  }
  {
    let t3 = /* @__PURE__ */ Object.getOwnPropertyDescriptors(e2);
    delete t3[v];
    let r3 = /* @__PURE__ */ Reflect.ownKeys(t3);
    for (let n2 = 0; n2 < r3.length; n2++) {
      let i2 = r3[n2], a2 = t3[i2];
      false === a2.writable && (a2.writable = true, a2.configurable = true), (a2.get || a2.set) && (t3[i2] = { configurable: true, writable: true, enumerable: a2.enumerable, value: e2[i2] });
    }
    return Object.create(/* @__PURE__ */ g(e2), t3);
  }
}
function T(e2) {
  let t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return z(e2) || b(e2) || !w(e2) || (j(e2) > 1 && (e2.set = e2.add = e2.clear = e2.delete = N), Object.freeze(e2), t2 && Object.entries(e2).forEach((e3) => {
    let [t3, r2] = e3;
    return T(r2, true);
  })), e2;
}
function N() {
  m(2);
}
function z(e2) {
  return Object.isFrozen(e2);
}
var k = {};
function F(e2) {
  let t2 = k[e2];
  return t2 || m(0, e2), t2;
}
function K(e2, t2) {
  t2 && (F("Patches"), e2.patches_ = [], e2.inversePatches_ = [], e2.patchListener_ = t2);
}
function D(e2) {
  W(e2), e2.drafts_.forEach(C), e2.drafts_ = null;
}
function W(e2) {
  e2 === d && (d = e2.parent_);
}
function $(e2) {
  return d = { drafts_: [], parent_: d, immer_: e2, canAutoFreeze_: true, unfinalizedDrafts_: 0 };
}
function C(e2) {
  let t2 = e2[v];
  0 === t2.type_ || 1 === t2.type_ ? t2.revoke_() : t2.revoked_ = true;
}
function I(e2, t2) {
  t2.unfinalizedDrafts_ = t2.drafts_.length;
  let r2 = t2.drafts_[0];
  return void 0 !== e2 && e2 !== r2 ? (r2[v].modified_ && (D(t2), m(4)), w(e2) && (e2 = /* @__PURE__ */ V(t2, e2), t2.parent_ || J(t2, e2)), t2.patches_ && F("Patches").generateReplacementPatches_(r2[v].base_, e2, t2.patches_, t2.inversePatches_)) : e2 = /* @__PURE__ */ V(t2, r2, []), D(t2), t2.patches_ && t2.patchListener_(t2.patches_, t2.inversePatches_), e2 !== h ? e2 : void 0;
}
function V(e2, t2, r2) {
  if (z(t2)) return t2;
  let n2 = t2[v];
  if (!n2) return P(t2, (i2, a2) => q(e2, n2, t2, i2, a2, r2)), t2;
  if (n2.scope_ !== e2) return t2;
  if (!n2.modified_) return J(e2, n2.base_, true), n2.base_;
  if (!n2.finalized_) {
    n2.finalized_ = true, n2.scope_.unfinalizedDrafts_--;
    let t3 = n2.copy_, i2 = t3, a2 = false;
    3 === n2.type_ && (i2 = new Set(t3), t3.clear(), a2 = true), P(i2, (i3, o2) => q(e2, n2, t3, i3, o2, r2, a2)), J(e2, t3, false), r2 && e2.patches_ && F("Patches").generatePatches_(n2, r2, e2.patches_, e2.inversePatches_);
  }
  return n2.copy_;
}
function q(e2, t2, r2, n2, i2, a2, o2) {
  if (b(i2)) {
    let o3 = /* @__PURE__ */ V(e2, i2, a2 && t2 && 3 !== t2.type_ && !M(t2.assigned_, n2) ? a2.concat(n2) : void 0);
    if (S(r2, n2, o3), !b(o3)) return;
    e2.canAutoFreeze_ = false;
  } else o2 && r2.add(i2);
  if (w(i2) && !z(i2)) {
    if (!e2.immer_.autoFreeze_ && e2.unfinalizedDrafts_ < 1) return;
    V(e2, i2), (!t2 || !t2.scope_.parent_) && "symbol" != typeof n2 && Object.prototype.propertyIsEnumerable.call(r2, n2) && J(e2, i2);
  }
}
function J(e2, t2) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  !e2.parent_ && e2.immer_.autoFreeze_ && e2.canAutoFreeze_ && T(t2, r2);
}
var G = { get(e2, t2) {
  if (t2 === v) return e2;
  let r2 = /* @__PURE__ */ x(e2);
  if (!M(r2, t2)) return function(e3, t3, r3) {
    var n3;
    let i2 = /* @__PURE__ */ L(t3, r3);
    return i2 ? "value" in i2 ? i2.value : null === (n3 = i2.get) || void 0 === n3 ? void 0 : n3.call(e3.draft_) : void 0;
  }(e2, r2, t2);
  let n2 = r2[t2];
  return e2.finalized_ || !w(n2) ? n2 : n2 === U(e2.base_, t2) ? (B(e2), e2.copy_[t2] = /* @__PURE__ */ Q(n2, e2)) : n2;
}, has: (e2, t2) => t2 in x(e2), ownKeys: (e2) => Reflect.ownKeys(/* @__PURE__ */ x(e2)), set(e2, t2, r2) {
  let n2 = /* @__PURE__ */ L(/* @__PURE__ */ x(e2), t2);
  if (null == n2 ? void 0 : n2.set) return n2.set.call(e2.draft_, r2), true;
  if (!e2.modified_) {
    let n3 = /* @__PURE__ */ U(/* @__PURE__ */ x(e2), t2), i2 = null == n3 ? void 0 : n3[v];
    if (i2 && i2.base_ === r2) return e2.copy_[t2] = r2, e2.assigned_[t2] = false, true;
    if ((r2 === n3 ? 0 !== r2 || 1 / r2 == 1 / n3 : r2 != r2 && n3 != n3) && (void 0 !== r2 || M(e2.base_, t2))) return true;
    B(e2), X(e2);
  }
  return !!(e2.copy_[t2] === r2 && (void 0 !== r2 || t2 in e2.copy_) || Number.isNaN(r2) && Number.isNaN(e2.copy_[t2])) || (e2.copy_[t2] = r2, e2.assigned_[t2] = true, true);
}, deleteProperty: (e2, t2) => (void 0 !== U(e2.base_, t2) || t2 in e2.base_ ? (e2.assigned_[t2] = false, B(e2), X(e2)) : delete e2.assigned_[t2], e2.copy_ && delete e2.copy_[t2], true), getOwnPropertyDescriptor(e2, t2) {
  let r2 = /* @__PURE__ */ x(e2), n2 = /* @__PURE__ */ Reflect.getOwnPropertyDescriptor(r2, t2);
  return n2 ? { writable: true, configurable: 1 !== e2.type_ || "length" !== t2, enumerable: n2.enumerable, value: r2[t2] } : n2;
}, defineProperty() {
  m(11);
}, getPrototypeOf: (e2) => g(e2.base_), setPrototypeOf() {
  m(12);
} }, H = {};
function U(e2, t2) {
  let r2 = e2[v];
  return (r2 ? x(r2) : e2)[t2];
}
function L(e2, t2) {
  if (!(t2 in e2)) return;
  let r2 = /* @__PURE__ */ g(e2);
  for (; r2; ) {
    let e3 = /* @__PURE__ */ Object.getOwnPropertyDescriptor(r2, t2);
    if (e3) return e3;
    r2 = /* @__PURE__ */ g(r2);
  }
}
function X(e2) {
  !e2.modified_ && (e2.modified_ = true, e2.parent_ && X(e2.parent_));
}
function B(e2) {
  e2.copy_ || (e2.copy_ = /* @__PURE__ */ R(e2.base_, e2.scope_.immer_.useStrictShallowCopy_));
}
function Q(e2, t2) {
  let r2 = E(e2) ? F("MapSet").proxyMap_(e2, t2) : A(e2) ? F("MapSet").proxySet_(e2, t2) : function(e3, t3) {
    let r3 = /* @__PURE__ */ Array.isArray(e3), n2 = { type_: r3 ? 1 : 0, scope_: t3 ? t3.scope_ : d, modified_: false, finalized_: false, assigned_: {}, parent_: t3, base_: e3, draft_: null, copy_: null, revoke_: null, isManual_: false }, i2 = n2, a2 = G;
    r3 && (i2 = [n2], a2 = H);
    let { revoke: o2, proxy: s2 } = Proxy.revocable(i2, a2);
    return n2.draft_ = s2, n2.revoke_ = o2, s2;
  }(e2, t2);
  return (t2 ? t2.scope_ : d).drafts_.push(r2), r2;
}
P(G, (e2, t2) => {
  H[e2] = function() {
    return arguments[0] = arguments[0][0], t2.apply(this, arguments);
  };
}), H.deleteProperty = function(e2, t2) {
  return H.set.call(this, e2, t2, void 0);
}, H.set = function(e2, t2, r2) {
  return G.set.call(this, e2[0], t2, r2, e2[0]);
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
      if ("function" != typeof t2 && m(6), void 0 !== r2 && "function" != typeof r2 && m(7), w(e3)) {
        let i2 = /* @__PURE__ */ $(this), a2 = /* @__PURE__ */ Q(e3, void 0), o2 = true;
        try {
          n2 = /* @__PURE__ */ t2(a2), o2 = false;
        } finally {
          o2 ? D(i2) : W(i2);
        }
        return K(i2, r2), I(n2, i2);
      }
      if (e3 && "object" == typeof e3) m(1, e3);
      else {
        if (void 0 === (n2 = /* @__PURE__ */ t2(e3)) && (n2 = e3), n2 === h && (n2 = void 0), this.autoFreeze_ && T(n2, true), r2) {
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
      return [/* @__PURE__ */ this.produce(e3, t2, (e4, t3) => {
        r2 = e4, n2 = t3;
      }), r2, n2];
    }, "boolean" == typeof (null == e2 ? void 0 : e2.autoFreeze) && this.setAutoFreeze(e2.autoFreeze), "boolean" == typeof (null == e2 ? void 0 : e2.useStrictShallowCopy) && this.setUseStrictShallowCopy(e2.useStrictShallowCopy);
  }
  createDraft(e2) {
    var t2;
    w(e2) || m(8), b(e2) && (b(t2 = e2) || m(10, t2), e2 = function e3(t3) {
      let r3;
      if (!w(t3) || z(t3)) return t3;
      let n3 = t3[v];
      if (n3) {
        if (!n3.modified_) return n3.base_;
        n3.finalized_ = true, r3 = /* @__PURE__ */ R(t3, n3.scope_.immer_.useStrictShallowCopy_);
      } else r3 = /* @__PURE__ */ R(t3, true);
      return P(r3, (t4, n4) => {
        S(r3, t4, /* @__PURE__ */ e3(n4));
      }), n3 && (n3.finalized_ = false), r3;
    }(t2));
    let r2 = /* @__PURE__ */ $(this), n2 = /* @__PURE__ */ Q(e2, void 0);
    return n2[v].isManual_ = true, W(r2), n2;
  }
  finishDraft(e2, t2) {
    let r2 = e2 && e2[v];
    r2 && r2.isManual_ || m(9);
    let { scope_: n2 } = r2;
    return K(n2, t2), I(void 0, n2);
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
    r2 > -1 && (t2 = /* @__PURE__ */ t2.slice(r2 + 1));
    let n2 = F("Patches").applyPatches_;
    return b(e2) ? n2(e2, t2) : this.produce(e2, (e3) => n2(e3, t2));
  }
}(), Z = Y.produce;
Y.produceWithPatches.bind(Y), Y.setAutoFreeze.bind(Y), Y.setUseStrictShallowCopy.bind(Y), Y.applyPatches.bind(Y), Y.createDraft.bind(Y), Y.finishDraft.bind(Y), f = p || (p = {}), function(t2) {
  var r2 = "object" == typeof globalThis ? globalThis : "object" == typeof e ? e : "object" == typeof self ? self : "object" == typeof this ? this : function() {
    throw ReferenceError("globalThis could not be found. Please polyfill globalThis before loading this module.");
  }(), n2 = /* @__PURE__ */ i2(f);
  function i2(e2, t3) {
    return function(r3, n3) {
      Object.defineProperty(e2, r3, { configurable: true, writable: true, value: n3 }), t3 && t3(r3, n3);
    };
  }
  void 0 !== r2.Reflect && (n2 = /* @__PURE__ */ i2(r2.Reflect, n2)), t2(n2, r2), void 0 === r2.Reflect && (r2.Reflect = f);
}(function(e2, t2) {
  var r2, n2 = "function" == typeof Symbol, i2 = n2 && void 0 !== Symbol.toPrimitive ? Symbol.toPrimitive : R2("Symbol.toPrimitive not found."), a2 = n2 && void 0 !== Symbol.iterator ? Symbol.iterator : R2("Symbol.iterator not found."), o2 = /* @__PURE__ */ Object.getPrototypeOf(Function), s2 = "function" == typeof Map && "function" == typeof Map.prototype.entries ? Map : R2("A valid Map constructor could not be found."), c2 = "function" == typeof Set && "function" == typeof Set.prototype.entries ? Set : R2("A valid Set constructor could not be found."), l2 = "function" == typeof WeakMap ? WeakMap : R2("A valid WeakMap constructor could not be found."), u2 = n2 ? Symbol.for("@reflect-metadata:registry") : void 0, f2 = (!g2(u2) && w2(t2.Reflect) && Object.isExtensible(t2.Reflect) && (r2 = t2.Reflect[u2]), g2(r2) && (r2 = /* @__PURE__ */ function() {
    g2(u2) || void 0 === t2.Reflect || u2 in t2.Reflect || "function" != typeof t2.Reflect.defineMetadata || (r3 = (e3 = t2.Reflect).defineMetadata, n3 = e3.hasOwnMetadata, i3 = e3.getOwnMetadata, a3 = e3.getOwnMetadataKeys, o3 = e3.deleteMetadata, f3 = new l2(), d3 = { isProviderFor: function(e4, t3) {
      var r4 = /* @__PURE__ */ f3.get(e4);
      return !!(!g2(r4) && r4.has(t3)) || !!a3(e4, t3).length && (g2(r4) && (r4 = new c2(), f3.set(e4, r4)), r4.add(t3), true);
    }, OrdinaryDefineOwnMetadata: r3, OrdinaryHasOwnMetadata: n3, OrdinaryGetOwnMetadata: i3, OrdinaryOwnMetadataKeys: a3, OrdinaryDeleteMetadata: o3 });
    var e3, r3, n3, i3, a3, o3, f3, d3, p3, h3, y3, v3 = new l2(), m3 = { registerProvider: function(e4) {
      if (!Object.isExtensible(m3)) throw Error("Cannot add provider to a frozen registry.");
      switch (true) {
        case d3 === e4:
          break;
        case g2(p3):
          p3 = e4;
          break;
        case p3 === e4:
          break;
        case g2(h3):
          h3 = e4;
          break;
        case h3 === e4:
          break;
        default:
          void 0 === y3 && (y3 = new c2()), y3.add(e4);
      }
    }, getProvider: b3, setProvider: function(e4, t3, r4) {
      if (!function(e5) {
        if (g2(e5)) throw TypeError();
        return p3 === e5 || h3 === e5 || !g2(y3) && y3.has(e5);
      }(r4)) throw Error("Metadata provider not registered.");
      var n4 = /* @__PURE__ */ b3(e4, t3);
      if (n4 !== r4) {
        if (!g2(n4)) return false;
        var i4 = /* @__PURE__ */ v3.get(e4);
        g2(i4) && (i4 = new s2(), v3.set(e4, i4)), i4.set(t3, r4);
      }
      return true;
    } };
    return m3;
    function b3(e4, t3) {
      var r4, n4 = /* @__PURE__ */ v3.get(e4);
      return g2(n4) || (r4 = /* @__PURE__ */ n4.get(t3)), g2(r4) && (r4 = /* @__PURE__ */ function(e5, t4) {
        if (!g2(p3)) {
          if (p3.isProviderFor(e5, t4)) return p3;
          if (!g2(h3)) {
            if (h3.isProviderFor(e5, t4)) return p3;
            if (!g2(y3)) for (var r5 = /* @__PURE__ */ S2(y3); ; ) {
              var n5 = /* @__PURE__ */ E2(r5);
              if (!n5) return;
              var i4 = n5.value;
              if (i4.isProviderFor(e5, t4)) return A2(r5), i4;
            }
          }
        }
        if (!g2(d3) && d3.isProviderFor(e5, t4)) return d3;
      }(e4, t3), g2(r4) || (g2(n4) && (n4 = new s2(), v3.set(e4, n4)), n4.set(t3, r4))), r4;
    }
  }()), !g2(u2) && w2(t2.Reflect) && Object.isExtensible(t2.Reflect) && Object.defineProperty(t2.Reflect, u2, { enumerable: false, configurable: false, writable: false, value: r2 }), r2), d2 = /* @__PURE__ */ function(e3) {
    var t3 = new l2(), r3 = { isProviderFor: function(e4, r4) {
      var n4 = /* @__PURE__ */ t3.get(e4);
      return !g2(n4) && n4.has(r4);
    }, OrdinaryDefineOwnMetadata: function(e4, t4, r4, i3) {
      /* @__PURE__ */ n3(r4, i3, true).set(e4, t4);
    }, OrdinaryHasOwnMetadata: function(e4, t4, r4) {
      var i3 = /* @__PURE__ */ n3(t4, r4, false);
      return !g2(i3) && !!/* @__PURE__ */ i3.has(e4);
    }, OrdinaryGetOwnMetadata: function(e4, t4, r4) {
      var i3 = /* @__PURE__ */ n3(t4, r4, false);
      if (!g2(i3)) return i3.get(e4);
    }, OrdinaryOwnMetadataKeys: function(e4, t4) {
      var r4 = [], i3 = /* @__PURE__ */ n3(e4, t4, false);
      if (g2(i3)) return r4;
      for (var a3 = /* @__PURE__ */ S2(/* @__PURE__ */ i3.keys()), o3 = 0; ; ) {
        var s3 = /* @__PURE__ */ E2(a3);
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
      var a3 = /* @__PURE__ */ n3(r4, i3, false);
      if (g2(a3) || !a3.delete(e4)) return false;
      if (0 === a3.size) {
        var o3 = /* @__PURE__ */ t3.get(r4);
        g2(o3) || (o3.delete(i3), 0 === o3.size && t3.delete(o3));
      }
      return true;
    } };
    return f2.registerProvider(r3), r3;
    function n3(n4, i3, a3) {
      var o3 = /* @__PURE__ */ t3.get(n4), c3 = false;
      if (g2(o3)) {
        if (!a3) return;
        o3 = new s2(), t3.set(n4, o3), c3 = true;
      }
      var l3 = /* @__PURE__ */ o3.get(i3);
      if (g2(l3)) {
        if (!a3) return;
        if (l3 = new s2(), o3.set(i3, l3), !e3.setProvider(n4, i3, r3)) throw o3.delete(i3), c3 && t3.delete(n4), Error("Wrong provider for target.");
      }
      return l3;
    }
  }(f2);
  function p2(e3, t3, r3) {
    var n3 = /* @__PURE__ */ T2(t3, r3, false);
    return !g2(n3) && !!/* @__PURE__ */ n3.OrdinaryHasOwnMetadata(e3, t3, r3);
  }
  function h2(e3, t3, r3) {
    var n3 = /* @__PURE__ */ T2(t3, r3, false);
    if (!g2(n3)) return n3.OrdinaryGetOwnMetadata(e3, t3, r3);
  }
  function y2(e3, t3, r3, n3) {
    /* @__PURE__ */ T2(r3, n3, true).OrdinaryDefineOwnMetadata(e3, t3, r3, n3);
  }
  function v2(e3, t3) {
    var r3 = /* @__PURE__ */ T2(e3, t3, false);
    return r3 ? r3.OrdinaryOwnMetadataKeys(e3, t3) : [];
  }
  function m2(e3) {
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
    var t3 = /* @__PURE__ */ function(e4, t4) {
      switch (m2(e4)) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          return e4;
      }
      var r3 = /* @__PURE__ */ M2(e4, i2);
      if (void 0 !== r3) {
        var n3 = /* @__PURE__ */ r3.call(e4, "string");
        if (w2(n3)) throw TypeError();
        return n3;
      }
      return function(e5, t5) {
        var r4, n4, i3 = e5.toString;
        if (P2(i3)) {
          var n4 = /* @__PURE__ */ i3.call(e5);
          if (!w2(n4)) return n4;
        }
        var r4 = e5.valueOf;
        if (P2(r4)) {
          var n4 = /* @__PURE__ */ r4.call(e5);
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
  function M2(e3, t3) {
    var r3 = e3[t3];
    if (null != r3) {
      if (!P2(r3)) throw TypeError();
      return r3;
    }
  }
  function S2(e3) {
    var t3 = /* @__PURE__ */ M2(e3, a2);
    if (!P2(t3)) throw TypeError();
    var r3 = /* @__PURE__ */ t3.call(e3);
    if (!w2(r3)) throw TypeError();
    return r3;
  }
  function E2(e3) {
    var t3 = /* @__PURE__ */ e3.next();
    return !t3.done && t3;
  }
  function A2(e3) {
    var t3 = e3.return;
    t3 && t3.call(e3);
  }
  function x2(e3) {
    var t3 = /* @__PURE__ */ Object.getPrototypeOf(e3);
    if ("function" != typeof e3 || e3 === o2 || t3 !== o2) return t3;
    var r3 = e3.prototype, n3 = r3 && Object.getPrototypeOf(r3);
    if (null == n3 || n3 === Object.prototype) return t3;
    var i3 = n3.constructor;
    return "function" != typeof i3 || i3 === e3 ? t3 : i3;
  }
  function R2(e3) {
    throw e3;
  }
  function T2(e3, t3, r3) {
    var n3 = /* @__PURE__ */ f2.getProvider(e3, t3);
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
          var n4 = /* @__PURE__ */ (0, e4[r4])(t4);
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
        var a3 = /* @__PURE__ */ (0, e4[i3])(t4, r4, n4);
        if (!g2(a3) && !b2(a3)) {
          if (!w2(a3)) throw TypeError();
          n4 = a3;
        }
      }
      return n4;
    }(e3, t3, r3 = /* @__PURE__ */ _2(r3), n3);
  }), e2("metadata", function(e3, t3) {
    return function(r3, n3) {
      if (!w2(r3) || !g2(n3) && !function(e4) {
        switch (m2(e4)) {
          case 3:
          case 4:
            return true;
          default:
            return false;
        }
      }(n3)) throw TypeError();
      y2(e3, t3, r3, n3);
    };
  }), e2("defineMetadata", function(e3, t3, r3, n3) {
    if (!w2(r3)) throw TypeError();
    return g2(n3) || (n3 = /* @__PURE__ */ _2(n3)), y2(e3, t3, r3, n3);
  }), e2("hasMetadata", function(e3, t3, r3) {
    if (!w2(t3)) throw TypeError();
    return g2(r3) || (r3 = /* @__PURE__ */ _2(r3)), function e4(t4, r4, n3) {
      if (/* @__PURE__ */ p2(t4, r4, n3)) return true;
      var i3 = /* @__PURE__ */ x2(r4);
      return !b2(i3) && e4(t4, i3, n3);
    }(e3, t3, r3);
  }), e2("hasOwnMetadata", function(e3, t3, r3) {
    if (!w2(t3)) throw TypeError();
    return g2(r3) || (r3 = /* @__PURE__ */ _2(r3)), p2(e3, t3, r3);
  }), e2("getMetadata", function(e3, t3, r3) {
    if (!w2(t3)) throw TypeError();
    return g2(r3) || (r3 = /* @__PURE__ */ _2(r3)), function e4(t4, r4, n3) {
      if (/* @__PURE__ */ p2(t4, r4, n3)) return h2(t4, r4, n3);
      var i3 = /* @__PURE__ */ x2(r4);
      if (!b2(i3)) return e4(t4, i3, n3);
    }(e3, t3, r3);
  }), e2("getOwnMetadata", function(e3, t3, r3) {
    if (!w2(t3)) throw TypeError();
    return g2(r3) || (r3 = /* @__PURE__ */ _2(r3)), h2(e3, t3, r3);
  }), e2("getMetadataKeys", function(e3, t3) {
    if (!w2(e3)) throw TypeError();
    return g2(t3) || (t3 = /* @__PURE__ */ _2(t3)), function e4(t4, r3) {
      var n3 = /* @__PURE__ */ v2(t4, r3), i3 = /* @__PURE__ */ x2(t4);
      if (null === i3) return n3;
      var a3 = /* @__PURE__ */ e4(i3, r3);
      if (a3.length <= 0) return n3;
      if (n3.length <= 0) return a3;
      for (var o3 = new c2(), s3 = [], l3 = 0; l3 < n3.length; l3++) {
        var u3 = n3[l3], f3 = /* @__PURE__ */ o3.has(u3);
        f3 || (o3.add(u3), s3.push(u3));
      }
      for (var d3 = 0; d3 < a3.length; d3++) {
        var u3 = a3[d3], f3 = /* @__PURE__ */ o3.has(u3);
        f3 || (o3.add(u3), s3.push(u3));
      }
      return s3;
    }(e3, t3);
  }), e2("getOwnMetadataKeys", function(e3, t3) {
    if (!w2(e3)) throw TypeError();
    return g2(t3) || (t3 = /* @__PURE__ */ _2(t3)), v2(e3, t3);
  }), e2("deleteMetadata", function(e3, t3, r3) {
    if (!w2(t3)) throw TypeError();
    g2(r3) || (r3 = /* @__PURE__ */ _2(r3));
    var n3 = /* @__PURE__ */ T2(t3, r3, false);
    return !g2(n3) && n3.OrdinaryDeleteMetadata(e3, t3, r3);
  });
});
class ee {
  static getOwnPropertyNames(e2) {
    return Reflect.getMetadataKeys(e2);
  }
  static get(e2, t2) {
    return Reflect.getMetadata(t2, e2);
  }
  static define(e2, t2, r2, n2) {
    if (e2 && e2.constructor && e2.constructor != Object) {
      if (u(r2)) {
        var i2, a2;
        Reflect.defineMetadata(t2, /* @__PURE__ */ Z(null !== (a2 = null !== (i2 = /* @__PURE__ */ Reflect.getMetadata(t2, e2)) && void 0 !== i2 ? i2 : n2) && void 0 !== a2 ? a2 : {}, r2), e2);
        return;
      }
      Reflect.defineMetadata(t2, r2, e2);
    }
  }
}
let et = { path: [], branch: [] };
class er extends TypeError {
  constructor(e2, t2) {
    let r2;
    let { message: n2, explanation: i2, ...a2 } = e2, { path: o2 } = e2, s2 = 0 === o2.length ? n2 : `At path: ${o2.join(".")} -- ${n2}`;
    super(null != i2 ? i2 : s2);
    __publicField(this, "value");
    __publicField(this, "key");
    __publicField(this, "type");
    __publicField(this, "refinement");
    __publicField(this, "path");
    __publicField(this, "branch");
    __publicField(this, "failures");
    null != i2 && (this.cause = s2), Object.assign(this, a2), this.name = this.constructor.name, this.failures = () => null != r2 ? r2 : r2 = [e2, .../* @__PURE__ */ t2()];
  }
}
let en = (e2) => !!e2 && e2[ei] == ei, ei = /* @__PURE__ */ Symbol("Type");
function* ea(e2, r2, n2, i2) {
  let a2 = e2;
  for (let e3 of (c(a2) || (a2 = [a2]), a2)) {
    let a3 = /* @__PURE__ */ function(e4, r3, n3, i3) {
      if (true === e4) return;
      let a4 = {};
      a4 = false === e4 ? {} : s(e4) ? { message: e4 } : e4;
      let { path: o2, branch: c2, node: l2 } = r3, { type: u2 } = n3, { refinement: f2, message: d2 = t(i3) ? "Required" : `Expected a value of type \`${u2}\`${f2 ? ` with refinement \`${f2}\`` : ""}, but received: \`${i3}\`` } = a4;
      return { ...a4, value: i3, type: u2, refinement: f2, key: o2[o2.length - 1], path: o2, branch: c2, node: l2, message: d2 };
    }(e3, r2, n2, i2);
    a3 && (yield a3);
  }
}
function eo(e2, t2) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n2 = /* @__PURE__ */ es(e2, t2, r2), i2 = /* @__PURE__ */ function(e3) {
    let { done: t3, value: r3 } = e3.next();
    return t3 ? void 0 : r3;
  }(n2);
  return i2[0] ? [new er(i2[0], function* () {
    for (let e3 of n2) e3[0] && (yield e3[0]);
  }), void 0] : [void 0, i2[1]];
}
function* es(e2, t2) {
  let n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, { path: i2 = [], branch: a2 = [e2], node: o2 = { current: t2 }, coerce: s2 = false, mask: c2 = false } = n2, l2 = { mask: c2, path: i2, branch: a2, node: o2 }, u2 = e2;
  if (s2) {
    let r2 = /* @__PURE__ */ t2.coercer(e2, l2);
    void 0 != r2 && (u2 = r2);
  }
  let f2 = 0;
  for (let r2 of ea(/* @__PURE__ */ t2.validator(u2, l2), l2, t2, e2)) r2.explanation = n2.message, f2 = 2, yield [r2, void 0];
  for (let [e3, d2, p2] of t2.entries(u2, l2)) for (let t3 of /* @__PURE__ */ es(d2, p2, { path: void 0 === e3 ? i2 : [...i2, e3], branch: void 0 === e3 ? a2 : [...a2, d2], node: void 0 === e3 ? o2 : { current: p2, parent: o2 }, coerce: s2, mask: c2, message: n2.message })) t3[0] ? (f2 = null != t3[0].refinement ? 1 : 2, yield [t3[0], void 0]) : s2 && (d2 = t3[1], void 0 === e3 ? u2 = d2 : u2 instanceof Map ? u2.set(e3, d2) : u2 instanceof Set ? u2.add(d2) : r(u2) && (u2[e3] = d2));
  if (2 !== f2) for (let r2 of ea(/* @__PURE__ */ t2.refiner(u2, l2), l2, t2, e2)) r2.explanation = n2.message, f2 = 1, yield [r2, void 0];
  0 === f2 && (yield [void 0, u2]);
}
let ec = (e2) => function() {
  for (var t2 = arguments.length, r2 = Array(t2), n2 = 0; n2 < t2; n2++) r2[n2] = arguments[n2];
  let i2 = /* @__PURE__ */ e2(...r2), a2 = (e3, t3) => {
    var r3;
    let n3 = null !== (r3 = /* @__PURE__ */ ee.get(e3, t3)) && void 0 !== r3 ? r3 : {};
    ee.define(e3, t3, { ...n3, type: i2 });
  };
  return a2.toString = () => `@type:${i2.type}`, new Proxy(a2, { ownKeys: () => [.../* @__PURE__ */ Object.getOwnPropertyNames(i2), .../* @__PURE__ */ Object.getOwnPropertySymbols(i2)], get: (e3, t3) => i2[t3] });
}, el = (e2) => function() {
  for (var t2 = arguments.length, r2 = Array(t2), n2 = 0; n2 < t2; n2++) r2[n2] = arguments[n2];
  let i2 = (t3) => e2(t3, ...r2);
  return new Proxy((e3, t3) => {
    ee.define(e3, t3, (e4) => {
      var t4;
      (null !== (t4 = e4.modifies) && void 0 !== t4 ? t4 : e4.modifies = []).push({ modify: i2 });
    }, {});
  }, { get(e3, t3) {
    if ("modify" == t3) return i2;
  } });
};
const _eu = class _eu {
  static create(e2, r2, i2) {
    var a2, o2;
    let s2;
    let c2 = null !== (o2 = null != r2 ? r2 : null === (a2 = e2[_eu.underlying]) || void 0 === a2 ? void 0 : a2.schema) && void 0 !== o2 ? o2 : {};
    return new Proxy({}, { ownKeys(t2) {
      let r3 = /* @__PURE__ */ new Map();
      if (i2) {
        if (e2[i2]) for (let t3 of Object.getOwnPropertyNames(e2[i2])) r3.set(t3, t3);
        if (c2 && c2[i2]) for (let e3 of Object.getOwnPropertyNames(c2[i2])) r3.set(e3, e3);
      } else {
        for (let t3 of Object.getOwnPropertyNames(e2)) r3.set(t3, t3);
        if (c2) for (let e3 of Object.getOwnPropertyNames(c2)) r3.set(e3, e3);
      }
      return [.../* @__PURE__ */ r3.keys()];
    }, get(r3, a3) {
      if (a3 === _eu.meta) return null != s2 ? s2 : s2 = /* @__PURE__ */ _eu.create(e2, c2, _eu.meta);
      if (i2) {
        var o3, l2;
        if (n(e2)) {
          let r4 = null == e2 ? void 0 : null === (l2 = e2[i2]) || void 0 === l2 ? void 0 : l2[a3];
          if (!t(r4)) return r4;
        }
        return c2 ? null == c2 ? void 0 : null === (o3 = c2[i2]) || void 0 === o3 ? void 0 : o3[a3] : void 0;
      }
      if (n(e2)) {
        let r4 = null == e2 ? void 0 : e2[a3];
        if (!t(r4)) return r4;
      }
      return c2 ? c2[a3] : void 0;
    } });
  }
  static schemaProp(e2, t2) {
    return ef(e2.schema, t2);
  }
  static metaProp(e2, t2) {
    return ed(e2.schema, t2);
  }
};
__publicField(_eu, "RecordKey", Symbol("RecordKey"));
__publicField(_eu, "meta", Symbol("meta"));
__publicField(_eu, "optional", Symbol("optional"));
__publicField(_eu, "underlying", Symbol("underlying"));
__publicField(_eu, "unwrap", Symbol("unwrap"));
__publicField(_eu, "extractSchema", (e2) => new ep().toValue(e2));
__publicField(_eu, "extractMeta", (e2) => {
  var t2;
  return new ep().toValue(null !== (t2 = e2.meta) && void 0 !== t2 ? t2 : e2[_eu.meta]);
});
let eu = _eu;
let ef = (e2, t2) => {
  var r2;
  if (n(e2)) return null !== (r2 = e2[t2]) && void 0 !== r2 ? r2 : e2[eu.unwrap] ? ef(e2[eu.unwrap]().schema, t2) : void 0;
}, ed = (e2, t2) => {
  var r2, i2;
  if (n(e2)) return null !== (i2 = null === (r2 = e2[eu.meta]) || void 0 === r2 ? void 0 : r2[t2]) && void 0 !== i2 ? i2 : e2[eu.unwrap] ? ed(e2[eu.unwrap]().schema, t2) : void 0;
};
class ep {
  constructor(e2 = false) {
    this.deref = e2;
  }
  toValue(e2) {
    if (e2) {
      if (!t(e2.schema)) return this.toValue(e2.schema);
      if (this.deref && e2[eu.unwrap]) return this.toValue(/* @__PURE__ */ e2[eu.unwrap]());
      if (i(e2)) return this.toArray(e2);
      if (e2.constructor === Object) return this.toObject(e2);
    }
    return e2;
  }
  toObject(e2) {
    let t2 = {};
    for (let r2 of Object.getOwnPropertyNames(e2)) t2[r2] = /* @__PURE__ */ this.toValue(e2[r2]);
    return t2;
  }
  toArray(e2) {
    let t2 = [];
    for (let r2 of e2) t2.push(/* @__PURE__ */ this.toValue(r2));
    return t2;
  }
}
class eh {
  static parse(e2) {
    if ("" === e2) return [];
    if ("/" === e2) return [""];
    if ("/" !== e2.charAt(0)) throw Error("Invalid JSON pointer: " + e2);
    let t2 = /* @__PURE__ */ e2.substring(1).split(/\//);
    return t2.map((e3, r2) => eh.unescape(e3, r2 === t2.length - 1));
  }
  static create() {
    let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return 0 === e2.length ? "" : "/" + e2.map(eh.escape).join("/");
  }
  static unescape(e2, t2) {
    return "" == e2 && t2 ? eu.RecordKey : e2.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  static escape(e2) {
    return e2 == eu.RecordKey ? "" : e2.toString().replace(/~/g, "~0").replace(/\//g, "~1");
  }
  static get(e2, t2) {
    let r2 = Array.isArray(t2) ? t2 : eh.parse(t2);
    for (let t3 = 0; t3 < r2.length; t3++) {
      let n2 = r2[t3];
      if (t3 > 0 && n2 == eu.RecordKey) return r2[t3 - 1];
      if (!("object" == typeof e2 && n2 in e2)) throw Error("Invalid reference token: " + n2);
      e2 = e2[n2];
    }
    return e2;
  }
}
_a = ei;
const _ey = class _ey {
  constructor(e2) {
    __publicField(this, _a, ei);
    __publicField(this, "schema");
    if (e2) {
      this.schema = /* @__PURE__ */ eu.create(e2);
      return;
    }
    this.schema = null != e2 ? e2 : null;
  }
  get meta() {
    return this.schema ? this.schema[eu.meta] : {};
  }
  get type() {
    var e2, t2;
    return null !== (t2 = null === (e2 = this.schema) || void 0 === e2 ? void 0 : e2.type) && void 0 !== t2 ? t2 : "unknown";
  }
  refiner(e2, t2) {
    return [];
  }
  validator(e2, t2) {
    return [];
  }
  coercer(e2, t2) {
    if (s(e2)) {
      let t3 = /* @__PURE__ */ e2.trim();
      if (t3.length >= 2 && (t3.startsWith("{") && t3.endsWith("}") || t3.startsWith("[") && t3.endsWith("]"))) try {
        return JSON.parse(t3);
      } catch (e3) {
      }
    }
    return e2;
  }
  *entries(e2) {
    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  }
  validate(e2) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return eo(e2, this, t2);
  }
  create(e2) {
    let t2 = /* @__PURE__ */ eo(e2, this, { coerce: true });
    if (t2[0]) throw t2[0];
    return t2[1];
  }
  mask(e2) {
    let t2 = /* @__PURE__ */ eo(e2, this, { coerce: true, mask: true });
    if (t2[0]) throw t2[0];
    return t2[1];
  }
  use() {
    for (var e2 = arguments.length, t2 = Array(e2), r2 = 0; r2 < e2; r2++) t2[r2] = arguments[r2];
    return t2.reduce((e3, t3) => t3.modify(e3), this);
  }
  optional() {
    return eg.create(this);
  }
  default(e2) {
    return em.create(this, e2);
  }
};
__publicField(_ey, "define", ec(function() {
  let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => true;
  return new class extends _ey {
    validator(t2, r2) {
      return e2(t2, r2);
    }
  }(null);
}));
__publicField(_ey, "fromTypeObject", (e2, t2) => {
  var r2, n2, i2;
  let a2 = null !== (n2 = null !== (r2 = e2.type) && void 0 !== r2 ? r2 : t2) && void 0 !== n2 ? n2 : new _ey({});
  return e2.modifies ? a2.use(...null !== (i2 = e2.modifies) && void 0 !== i2 ? i2 : []) : a2;
});
let ey = _ey;
class ev extends ey {
  static of(e2, t2) {
    return new ev({ ...t2, [eu.underlying]: e2 });
  }
  static refine(e2, t2, r2) {
    return new class extends ev {
      *refiner(n2, i2) {
        for (let a2 of (yield* this.unwrap.refiner(n2, i2), /* @__PURE__ */ ea(/* @__PURE__ */ t2(n2, i2), i2, e2, n2))) yield { ...a2, refinement: /* @__PURE__ */ Object.keys(r2).join(",") };
      }
    }({ ...r2, [eu.underlying]: e2 });
  }
  get unwrap() {
    let e2 = this.schema[eu.unwrap];
    return e2 ? e2() : this.schema[eu.underlying];
  }
  get type() {
    return this.unwrap.type;
  }
  *entries(e2) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : et;
    yield* this.unwrap.entries(e2, { ...t2, node: { current: this, parent: t2.node } });
  }
  validator(e2, t2) {
    return ea(/* @__PURE__ */ this.unwrap.validator(e2, t2), t2, this, e2);
  }
  refiner(e2, t2) {
    return ea(/* @__PURE__ */ this.unwrap.refiner(e2, t2), t2, this, e2);
  }
  coercer(e2, t2) {
    return this.unwrap.coercer(e2, t2);
  }
}
const _em = class _em extends ev {
  coercer(e2, t2) {
    return void 0 === e2 ? this.schema.default : super.unwrap.coercer(e2, t2);
  }
};
__publicField(_em, "create", ec((e2, t2) => new _em({ default: t2, [eu.underlying]: e2 })));
let em = _em;
const _eg = class _eg extends ev {
  refiner(e2, t2) {
    return void 0 === e2 || super.unwrap.refiner(e2, t2);
  }
  validator(e2, t2) {
    return void 0 === e2 || super.unwrap.validator(e2, t2);
  }
};
__publicField(_eg, "create", ec((e2) => new _eg({ [eu.underlying]: e2, [eu.optional]: e2 })));
let eg = _eg;
const _eb = class _eb extends ey {
  get type() {
    return this.schema.type;
  }
  validator(e2, t2) {
    return s(e2);
  }
};
__publicField(_eb, "create", ec(() => new _eb({ type: "string" })));
let eb = _eb;
const _ew = class _ew extends ey {
  get type() {
    return this.schema.type;
  }
  validator(e2, t2) {
    return a(e2);
  }
  coercer(e2, t2) {
    try {
      let t3 = void 0 != e2 ? parseInt(/* @__PURE__ */ String(e2)) : void 0;
      return a(t3) ? t3 : void 0;
    } catch (e3) {
      return;
    }
  }
};
__publicField(_ew, "create", ec(() => new _ew({ type: "integer" })));
let ew = _ew;
const _e_ = class _e_ extends ey {
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
__publicField(_e_, "create", ec(() => new _e_({ type: "boolean" })));
let e_ = _e_;
const _eO = class _eO extends ey {
  static createEnum(e2) {
    return new _eO({ enum: e2 });
  }
  get type() {
    return "enums";
  }
  validator(e2, t2) {
    return this.schema.enum.includes(e2);
  }
};
__publicField(_eO, "create", ec(_eO.createEnum));
__publicField(_eO, "literal", ec((e2) => new _eO({ enum: [e2] })));
__publicField(_eO, "nativeEnum", ec((e2) => new _eO({ enum: /* @__PURE__ */ Object.values(e2) })));
let eO = _eO;
const _eP = class _eP extends ey {
  get type() {
    return "never";
  }
  validator(e2, t2) {
    return false;
  }
};
__publicField(_eP, "create", ec(() => new _eP(false)));
let eP = _eP;
class ej extends ey {
  static create(e2) {
    let t2 = function() {
      let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t3 = [];
      for (let [r2, n2] of Object.entries(e3)) /* @__PURE__ */ eu.schemaProp(n2, eu.optional) || t3.push(r2);
      return t3;
    };
    return ec(() => {
      if (e2) {
        if (l(e2)) {
          let i2 = new e2(), a2 = {};
          for (let [e3, t3] of Object.entries(i2)) a2[e3] = /* @__PURE__ */ eO.literal(t3);
          for (let e3 of ee.getOwnPropertyNames(i2)) {
            let t3 = /* @__PURE__ */ ee.get(i2, e3);
            if (t3) {
              let i3 = /* @__PURE__ */ ey.fromTypeObject(t3, a2[e3]);
              if (e3 in a2) {
                var r2, n2;
                a2[e3] = /* @__PURE__ */ i3.default(null === (n2 = a2[e3].schema) || void 0 === n2 ? void 0 : null === (r2 = n2.enum) || void 0 === r2 ? void 0 : r2[0]);
              } else a2[e3] = i3;
            }
          }
          return new ej({ type: "object", properties: a2, required: /* @__PURE__ */ t2(a2), additionalProperties: /* @__PURE__ */ eP.create() });
        }
        return new ej({ type: "object", properties: e2, required: /* @__PURE__ */ t2(e2), additionalProperties: /* @__PURE__ */ eP.create() });
      }
      return new ej({ type: "object", properties: {}, required: [], additionalProperties: /* @__PURE__ */ eP.create() });
    })();
  }
  get type() {
    return this.schema.type;
  }
  *entries(e2) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : et;
    if (r(e2)) {
      var n2;
      let r2 = new Set(Object.keys(e2));
      if (this.schema.properties) for (let t3 in this.schema.properties) r2.delete(t3), yield [t3, e2[t3], this.schema.properties[t3]];
      if ((null === (n2 = t2.node) || void 0 === n2 ? void 0 : n2.current.type) !== "intersection") for (let t3 of r2) yield [t3, e2[t3], this.schema.additionalProperties];
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
const _eM = class _eM extends ey {
  get type() {
    return "record";
  }
  *entries(e2) {
    if (r(e2)) for (let [t2, r2] of Object.entries(e2)) yield [eu.RecordKey, t2, this.schema.propertyNames], yield [t2, r2, this.schema.additionalProperties];
  }
  validator(e2) {
    return r(e2);
  }
};
__publicField(_eM, "create", ec((e2, t2) => new _eM({ type: "object", propertyNames: e2, additionalProperties: t2 })));
let eM = _eM;
const _eS = class _eS extends ey {
  get type() {
    return this.schema.type;
  }
  *entries(e2) {
    if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1], Array.isArray(e2)) for (let [t2, r2] of e2.entries()) yield [t2, r2, this.schema.items];
  }
  validator(e2) {
    return i(e2);
  }
  coercer(e2) {
    return i(e2) ? e2.slice() : e2;
  }
};
__publicField(_eS, "create", ec((e2) => new _eS({ type: "array", items: e2 })));
let eS = _eS;
const _eE = class _eE extends ey {
  constructor() {
    super(...arguments);
    __publicField(this, "_discriminatorPropName");
    __publicField(this, "_discriminatorMappingProps", /* @__PURE__ */ new Map());
  }
  static discriminatorMapping(e2) {
    for (var t2 = arguments.length, r2 = Array(t2 > 1 ? t2 - 1 : 0), n2 = 1; n2 < t2; n2++) r2[n2 - 1] = arguments[n2];
    return ec(() => {
      let t3 = [];
      if (1 == r2.length && r2[0].constructor == Object) for (let [n3, i2] of Object.entries(r2[0])) if (eu.schemaProp(i2, "$ref")) t3.push(i2);
      else {
        let r3 = { [e2]: /* @__PURE__ */ eO.literal(n3) };
        for (let [e3, t4, n4] of i2.entries({}, et)) r3[String(e3)] = n4;
        t3.push(/* @__PURE__ */ ej.create(r3));
      }
      else for (let e3 of r2) l(e3) && t3.push(/* @__PURE__ */ ej.create(e3));
      return new _eE({ oneOf: t3, discriminator: { propertyName: e2 } });
    })();
  }
  discriminatorPropType(e2) {
    var t2;
    return null !== (t2 = this._discriminatorPropName) && void 0 !== t2 ? t2 : this._discriminatorPropName = /* @__PURE__ */ (() => {
      var t3, r2, n2, i2;
      let a2 = null !== (n2 = null === (t3 = this.schema.discriminator) || void 0 === t3 ? void 0 : t3.propertyName) && void 0 !== n2 ? n2 : "", o2 = [], s2 = [];
      for (let e3 of this.schema.oneOf) {
        let t4 = eu.schemaProp(e3, "properties")[a2];
        if (!t4) continue;
        let r3 = t4.schema.enum;
        r3 && o2.push(...r3), s2.push(t4.meta);
      }
      return ev.of(/* @__PURE__ */ eO.create(o2), { [eu.meta]: /* @__PURE__ */ eu.create(s2[0], null !== (i2 = null === (r2 = e2.node) || void 0 === r2 ? void 0 : r2.current.meta) && void 0 !== i2 ? i2 : {}) });
    })();
  }
  discriminatorMapping(e2, t2, r2) {
    var n2, i2, a2;
    if (this._discriminatorMappingProps.get(t2)) return this._discriminatorMappingProps.get(t2);
    if ((null !== (a2 = null === (i2 = /* @__PURE__ */ this.discriminatorPropType(r2)) || void 0 === i2 ? void 0 : null === (n2 = i2.schema) || void 0 === n2 ? void 0 : n2.enum) && void 0 !== a2 ? a2 : []).includes(t2)) {
      let r3 = /* @__PURE__ */ this.schema.oneOf.find((r4) => {
        let n3 = eu.schemaProp(r4, "properties")[e2];
        if (n3) {
          let [e3, r5] = n3.validate(t2);
          return !e3;
        }
        return false;
      });
      if (r3) {
        if (!this._discriminatorMappingProps.has(t2)) {
          let n3 = {};
          for (let [t3, i3] of Object.entries(/* @__PURE__ */ eu.schemaProp(r3, "properties"))) t3 !== e2 && (n3[t3] = i3);
          this._discriminatorMappingProps.set(t2, n3);
        }
        return this._discriminatorMappingProps.get(t2);
      }
    }
    return {};
  }
  *entries(e2) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : et;
    if (this.schema.discriminator) {
      let r2 = this.schema.discriminator.propertyName, n2 = null == e2 ? void 0 : e2[r2], i2 = /* @__PURE__ */ ej.create({ [r2]: /* @__PURE__ */ this.discriminatorPropType(t2), ...this.discriminatorMapping(r2, n2, t2) });
      yield* i2.entries(e2, t2);
    }
  }
  get type() {
    return "union";
  }
  coercer(e2) {
    for (let t2 of this.schema.oneOf) {
      let [r2, n2] = eo(e2, t2, { coerce: true });
      if (!r2) return n2;
    }
    return e2;
  }
  validator(e2, t2) {
    if (this.schema.discriminator) {
      let r3 = this.schema.discriminator.propertyName, n2 = null == e2 ? void 0 : e2[r3];
      return ej.create({ [r3]: /* @__PURE__ */ this.discriminatorPropType(t2), ...this.discriminatorMapping(r3, n2, t2) }).validator(e2, t2);
    }
    let r2 = [];
    for (let n2 of this.schema.oneOf) {
      let [...i2] = es(e2, n2, t2), [a2] = i2;
      if (a2 && !a2[0]) return [];
      for (let [e3] of i2) e3 && r2.push(e3);
    }
    return [`Expected the value to satisfy a union of \`${this.schema.oneOf.map((e3) => e3.type).join(" | ")}\`, but received: ${e2}`, ...r2];
  }
};
__publicField(_eE, "create", ec(function() {
  for (var e2 = arguments.length, t2 = Array(e2), r2 = 0; r2 < e2; r2++) t2[r2] = arguments[r2];
  return new _eE({ oneOf: t2 });
}));
let eE = _eE;
let eA = eb.create, ex = ew.create, eR = e_.create, eT = eO.create, eN = eO.nativeEnum, ez = ej.create, ek = eM.create, eF = eS.create, eK = eE.create, eD = ey.define, eW = /* @__PURE__ */ el((e2) => eg.create(e2)), e$ = /* @__PURE__ */ el((e2, t2) => ev.of(e2, { [eu.meta]: t2 }));
export {
  et as E,
  eh as J,
  eu as S,
  e$ as a,
  ex as b,
  eD as c,
  eW as d,
  eF as e,
  eR as f,
  eT as g,
  en as i,
  eN as n,
  ez as o,
  Z as p,
  ek as r,
  eA as s,
  eK as u
};
