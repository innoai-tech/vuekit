var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a;
let e = (e2) => void 0 === e2, t = (e2) => !!e2 && "object" == typeof e2, r = (e2) => !!e2 && e2.constructor == Object, n = (e2) => Array.isArray(e2), i = (e2) => "number" == typeof e2 && !Number.isNaN(e2) && Number.isInteger(e2), o = (e2) => "boolean" == typeof e2, a = (e2) => "string" == typeof e2, s = (e2) => "object" == typeof e2 && "function" == typeof e2[Symbol.iterator], l = (e2) => "function" == typeof e2 && `${e2}`.startsWith("class"), c = (e2) => !!(e2 && e2.constructor && e2.call && e2.apply);
var u, f = /* @__PURE__ */ Symbol.for("immer-nothing"), d = /* @__PURE__ */ Symbol.for("immer-draftable"), p = /* @__PURE__ */ Symbol.for("immer-state");
function h(e2) {
  for (var t2 = arguments.length, r2 = Array(t2 > 1 ? t2 - 1 : 0), n2 = 1; n2 < t2; n2++) r2[n2 - 1] = arguments[n2];
  throw Error(`[Immer] minified error nr: ${e2}. Full error at: https://bit.ly/3cXEKWf`);
}
var y = Object.getPrototypeOf;
function m(e2) {
  return !!e2 && !!e2[p];
}
function v(e2) {
  var t2;
  return !!e2 && (g(e2) || Array.isArray(e2) || !!e2[d] || !!(null === (t2 = e2.constructor) || void 0 === t2 ? void 0 : t2[d]) || j(e2) || S(e2));
}
var _ = /* @__PURE__ */ Object.prototype.constructor.toString();
function g(e2) {
  if (!e2 || "object" != typeof e2) return false;
  let t2 = /* @__PURE__ */ y(e2);
  if (null === t2) return true;
  let r2 = Object.hasOwnProperty.call(t2, "constructor") && t2.constructor;
  return r2 === Object || "function" == typeof r2 && Function.toString.call(r2) === _;
}
function b(e2, t2) {
  0 === w(e2) ? Reflect.ownKeys(e2).forEach((r2) => {
    t2(r2, e2[r2], e2);
  }) : e2.forEach((r2, n2) => t2(n2, r2, e2));
}
function w(e2) {
  let t2 = e2[p];
  return t2 ? t2.type_ : Array.isArray(e2) ? 1 : j(e2) ? 2 : S(e2) ? 3 : 0;
}
function P(e2, t2) {
  return 2 === w(e2) ? e2.has(t2) : Object.prototype.hasOwnProperty.call(e2, t2);
}
function O(e2, t2, r2) {
  let n2 = /* @__PURE__ */ w(e2);
  2 === n2 ? e2.set(t2, r2) : 3 === n2 ? e2.add(r2) : e2[t2] = r2;
}
function j(e2) {
  return e2 instanceof Map;
}
function S(e2) {
  return e2 instanceof Set;
}
function A(e2) {
  return e2.copy_ || e2.base_;
}
function x(e2, t2) {
  if (j(e2)) return new Map(e2);
  if (S(e2)) return new Set(e2);
  if (Array.isArray(e2)) return Array.prototype.slice.call(e2);
  let r2 = /* @__PURE__ */ g(e2);
  if (true !== t2 && ("class_only" !== t2 || r2)) {
    let t3 = /* @__PURE__ */ y(e2);
    return null !== t3 && r2 ? { ...e2 } : Object.assign(/* @__PURE__ */ Object.create(t3), e2);
  }
  {
    let t3 = /* @__PURE__ */ Object.getOwnPropertyDescriptors(e2);
    delete t3[p];
    let r3 = /* @__PURE__ */ Reflect.ownKeys(t3);
    for (let n2 = 0; n2 < r3.length; n2++) {
      let i2 = r3[n2], o2 = t3[i2];
      false === o2.writable && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (t3[i2] = { configurable: true, writable: true, enumerable: o2.enumerable, value: e2[i2] });
    }
    return Object.create(/* @__PURE__ */ y(e2), t3);
  }
}
function N(e2) {
  let t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return M(e2) || m(e2) || !v(e2) || (w(e2) > 1 && (e2.set = e2.add = e2.clear = e2.delete = z), Object.freeze(e2), t2 && Object.entries(e2).forEach((e3) => {
    let [t3, r2] = e3;
    return N(r2, true);
  })), e2;
}
function z() {
  h(2);
}
function M(e2) {
  return Object.isFrozen(e2);
}
var E = {};
function k(e2) {
  let t2 = E[e2];
  return t2 || h(0, e2), t2;
}
function F(e2, t2) {
  t2 && (k("Patches"), e2.patches_ = [], e2.inversePatches_ = [], e2.patchListener_ = t2);
}
function K(e2) {
  R(e2), e2.drafts_.forEach(D), e2.drafts_ = null;
}
function R(e2) {
  e2 === u && (u = e2.parent_);
}
function $(e2) {
  return u = { drafts_: [], parent_: u, immer_: e2, canAutoFreeze_: true, unfinalizedDrafts_: 0 };
}
function D(e2) {
  let t2 = e2[p];
  0 === t2.type_ || 1 === t2.type_ ? t2.revoke_() : t2.revoked_ = true;
}
function C(e2, t2) {
  t2.unfinalizedDrafts_ = t2.drafts_.length;
  let r2 = t2.drafts_[0];
  return void 0 !== e2 && e2 !== r2 ? (r2[p].modified_ && (K(t2), h(4)), v(e2) && (e2 = /* @__PURE__ */ T(t2, e2), t2.parent_ || V(t2, e2)), t2.patches_ && k("Patches").generateReplacementPatches_(r2[p].base_, e2, t2.patches_, t2.inversePatches_)) : e2 = /* @__PURE__ */ T(t2, r2, []), K(t2), t2.patches_ && t2.patchListener_(t2.patches_, t2.inversePatches_), e2 !== f ? e2 : void 0;
}
function T(e2, t2, r2) {
  if (M(t2)) return t2;
  let n2 = t2[p];
  if (!n2) return b(t2, (i2, o2) => W(e2, n2, t2, i2, o2, r2)), t2;
  if (n2.scope_ !== e2) return t2;
  if (!n2.modified_) return V(e2, n2.base_, true), n2.base_;
  if (!n2.finalized_) {
    n2.finalized_ = true, n2.scope_.unfinalizedDrafts_--;
    let t3 = n2.copy_, i2 = t3, o2 = false;
    3 === n2.type_ && (i2 = new Set(t3), t3.clear(), o2 = true), b(i2, (i3, a2) => W(e2, n2, t3, i3, a2, r2, o2)), V(e2, t3, false), r2 && e2.patches_ && k("Patches").generatePatches_(n2, r2, e2.patches_, e2.inversePatches_);
  }
  return n2.copy_;
}
function W(e2, t2, r2, n2, i2, o2, a2) {
  if (m(i2)) {
    let a3 = /* @__PURE__ */ T(e2, i2, o2 && t2 && 3 !== t2.type_ && !P(t2.assigned_, n2) ? o2.concat(n2) : void 0);
    if (O(r2, n2, a3), !m(a3)) return;
    e2.canAutoFreeze_ = false;
  } else a2 && r2.add(i2);
  if (v(i2) && !M(i2)) {
    if (!e2.immer_.autoFreeze_ && e2.unfinalizedDrafts_ < 1) return;
    T(e2, i2), (!t2 || !t2.scope_.parent_) && "symbol" != typeof n2 && Object.prototype.propertyIsEnumerable.call(r2, n2) && V(e2, i2);
  }
}
function V(e2, t2) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  !e2.parent_ && e2.immer_.autoFreeze_ && e2.canAutoFreeze_ && N(t2, r2);
}
var I = { get(e2, t2) {
  if (t2 === p) return e2;
  let r2 = /* @__PURE__ */ A(e2);
  if (!P(r2, t2)) return function(e3, t3, r3) {
    var n3;
    let i2 = /* @__PURE__ */ U(t3, r3);
    return i2 ? "value" in i2 ? i2.value : null === (n3 = i2.get) || void 0 === n3 ? void 0 : n3.call(e3.draft_) : void 0;
  }(e2, r2, t2);
  let n2 = r2[t2];
  return e2.finalized_ || !v(n2) ? n2 : n2 === J(e2.base_, t2) ? (X(e2), e2.copy_[t2] = /* @__PURE__ */ B(n2, e2)) : n2;
}, has: (e2, t2) => t2 in A(e2), ownKeys: (e2) => Reflect.ownKeys(/* @__PURE__ */ A(e2)), set(e2, t2, r2) {
  let n2 = /* @__PURE__ */ U(/* @__PURE__ */ A(e2), t2);
  if (null == n2 ? void 0 : n2.set) return n2.set.call(e2.draft_, r2), true;
  if (!e2.modified_) {
    let n3 = /* @__PURE__ */ J(/* @__PURE__ */ A(e2), t2), i2 = null == n3 ? void 0 : n3[p];
    if (i2 && i2.base_ === r2) return e2.copy_[t2] = r2, e2.assigned_[t2] = false, true;
    if ((r2 === n3 ? 0 !== r2 || 1 / r2 == 1 / n3 : r2 != r2 && n3 != n3) && (void 0 !== r2 || P(e2.base_, t2))) return true;
    X(e2), L(e2);
  }
  return !!(e2.copy_[t2] === r2 && (void 0 !== r2 || t2 in e2.copy_) || Number.isNaN(r2) && Number.isNaN(e2.copy_[t2])) || (e2.copy_[t2] = r2, e2.assigned_[t2] = true, true);
}, deleteProperty: (e2, t2) => (void 0 !== J(e2.base_, t2) || t2 in e2.base_ ? (e2.assigned_[t2] = false, X(e2), L(e2)) : delete e2.assigned_[t2], e2.copy_ && delete e2.copy_[t2], true), getOwnPropertyDescriptor(e2, t2) {
  let r2 = /* @__PURE__ */ A(e2), n2 = /* @__PURE__ */ Reflect.getOwnPropertyDescriptor(r2, t2);
  return n2 ? { writable: true, configurable: 1 !== e2.type_ || "length" !== t2, enumerable: n2.enumerable, value: r2[t2] } : n2;
}, defineProperty() {
  h(11);
}, getPrototypeOf: (e2) => y(e2.base_), setPrototypeOf() {
  h(12);
} }, q = {};
function J(e2, t2) {
  let r2 = e2[p];
  return (r2 ? A(r2) : e2)[t2];
}
function U(e2, t2) {
  if (!(t2 in e2)) return;
  let r2 = /* @__PURE__ */ y(e2);
  for (; r2; ) {
    let e3 = /* @__PURE__ */ Object.getOwnPropertyDescriptor(r2, t2);
    if (e3) return e3;
    r2 = /* @__PURE__ */ y(r2);
  }
}
function L(e2) {
  !e2.modified_ && (e2.modified_ = true, e2.parent_ && L(e2.parent_));
}
function X(e2) {
  e2.copy_ || (e2.copy_ = /* @__PURE__ */ x(e2.base_, e2.scope_.immer_.useStrictShallowCopy_));
}
function B(e2, t2) {
  let r2 = j(e2) ? k("MapSet").proxyMap_(e2, t2) : S(e2) ? k("MapSet").proxySet_(e2, t2) : function(e3, t3) {
    let r3 = /* @__PURE__ */ Array.isArray(e3), n2 = { type_: r3 ? 1 : 0, scope_: t3 ? t3.scope_ : u, modified_: false, finalized_: false, assigned_: {}, parent_: t3, base_: e3, draft_: null, copy_: null, revoke_: null, isManual_: false }, i2 = n2, o2 = I;
    r3 && (i2 = [n2], o2 = q);
    let { revoke: a2, proxy: s2 } = Proxy.revocable(i2, o2);
    return n2.draft_ = s2, n2.revoke_ = a2, s2;
  }(e2, t2);
  return (t2 ? t2.scope_ : u).drafts_.push(r2), r2;
}
b(I, (e2, t2) => {
  q[e2] = function() {
    return arguments[0] = arguments[0][0], t2.apply(this, arguments);
  };
}), q.deleteProperty = function(e2, t2) {
  return q.set.call(this, e2, t2, void 0);
}, q.set = function(e2, t2, r2) {
  return I.set.call(this, e2[0], t2, r2, e2[0]);
};
var G = new class {
  constructor(e2) {
    this.autoFreeze_ = true, this.useStrictShallowCopy_ = false, this.produce = (e3, t2, r2) => {
      let n2;
      if ("function" == typeof e3 && "function" != typeof t2) {
        let r3 = t2;
        t2 = e3;
        let n3 = this;
        return function() {
          let e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r3;
          for (var i2 = arguments.length, o2 = Array(i2 > 1 ? i2 - 1 : 0), a2 = 1; a2 < i2; a2++) o2[a2 - 1] = arguments[a2];
          return n3.produce(e4, (e5) => t2.call(this, e5, ...o2));
        };
      }
      if ("function" != typeof t2 && h(6), void 0 !== r2 && "function" != typeof r2 && h(7), v(e3)) {
        let i2 = /* @__PURE__ */ $(this), o2 = /* @__PURE__ */ B(e3, void 0), a2 = true;
        try {
          n2 = /* @__PURE__ */ t2(o2), a2 = false;
        } finally {
          a2 ? K(i2) : R(i2);
        }
        return F(i2, r2), C(n2, i2);
      }
      if (e3 && "object" == typeof e3) h(1, e3);
      else {
        if (void 0 === (n2 = /* @__PURE__ */ t2(e3)) && (n2 = e3), n2 === f && (n2 = void 0), this.autoFreeze_ && N(n2, true), r2) {
          let t3 = [], i2 = [];
          k("Patches").generateReplacementPatches_(e3, n2, t3, i2), r2(t3, i2);
        }
        return n2;
      }
    }, this.produceWithPatches = (e3, t2) => {
      let r2, n2;
      if ("function" == typeof e3) {
        var i2 = this;
        return function(t3) {
          for (var r3 = arguments.length, n3 = Array(r3 > 1 ? r3 - 1 : 0), o2 = 1; o2 < r3; o2++) n3[o2 - 1] = arguments[o2];
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
    v(e2) || h(8), m(e2) && (m(t2 = e2) || h(10, t2), e2 = function e3(t3) {
      let r3;
      if (!v(t3) || M(t3)) return t3;
      let n3 = t3[p];
      if (n3) {
        if (!n3.modified_) return n3.base_;
        n3.finalized_ = true, r3 = /* @__PURE__ */ x(t3, n3.scope_.immer_.useStrictShallowCopy_);
      } else r3 = /* @__PURE__ */ x(t3, true);
      return b(r3, (t4, n4) => {
        O(r3, t4, /* @__PURE__ */ e3(n4));
      }), n3 && (n3.finalized_ = false), r3;
    }(t2));
    let r2 = /* @__PURE__ */ $(this), n2 = /* @__PURE__ */ B(e2, void 0);
    return n2[p].isManual_ = true, R(r2), n2;
  }
  finishDraft(e2, t2) {
    let r2 = e2 && e2[p];
    r2 && r2.isManual_ || h(9);
    let { scope_: n2 } = r2;
    return F(n2, t2), C(void 0, n2);
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
    let n2 = k("Patches").applyPatches_;
    return m(e2) ? n2(e2, t2) : this.produce(e2, (e3) => n2(e3, t2));
  }
}(), H = G.produce;
G.produceWithPatches.bind(G), G.setAutoFreeze.bind(G), G.setUseStrictShallowCopy.bind(G), G.applyPatches.bind(G), G.createDraft.bind(G), G.finishDraft.bind(G);
const _Q = class _Q {
  static getOwnPropertyNames(e2) {
    if (e2 && e2.constructor && e2.constructor != Object) {
      var t2, r2;
      return null !== (r2 = null === (t2 = e2.constructor[_Q.metadata]) || void 0 === t2 ? void 0 : t2.keys().filter((e3) => a(e3))) && void 0 !== r2 ? r2 : [];
    }
    return [];
  }
  static get(e2, t2) {
    if (e2 && e2.constructor && e2.constructor != Object) {
      var r2;
      return null === (r2 = e2.constructor[_Q.metadata]) || void 0 === r2 ? void 0 : r2.get(t2);
    }
  }
  static define(e2, t2, r2, n2) {
    if (e2 && e2.constructor && e2.constructor != Object) {
      var i2, o2, a2, s2, l2;
      let u2 = null !== (a2 = (i2 = e2.constructor)[o2 = _Q.metadata]) && void 0 !== a2 ? a2 : i2[o2] = /* @__PURE__ */ new Map();
      if (c(r2)) {
        u2.set(t2, /* @__PURE__ */ H(null !== (l2 = null !== (s2 = /* @__PURE__ */ u2.get(t2)) && void 0 !== s2 ? s2 : n2) && void 0 !== l2 ? l2 : {}, r2));
        return;
      }
      u2.set(t2, r2);
    }
  }
};
__publicField(_Q, "metadata", Symbol("metadata"));
let Q = _Q;
let Y = { path: [], branch: [] };
class Z extends TypeError {
  constructor(e2, t2) {
    let r2;
    let { message: n2, explanation: i2, ...o2 } = e2, { path: a2 } = e2, s2 = 0 === a2.length ? n2 : `At path: ${a2.join(".")} -- ${n2}`;
    super(null != i2 ? i2 : s2);
    __publicField(this, "value");
    __publicField(this, "key");
    __publicField(this, "type");
    __publicField(this, "refinement");
    __publicField(this, "path");
    __publicField(this, "branch");
    __publicField(this, "failures");
    null != i2 && (this.cause = s2), Object.assign(this, o2), this.name = this.constructor.name, this.failures = () => null != r2 ? r2 : r2 = [e2, .../* @__PURE__ */ t2()];
  }
}
let ee = (e2) => !!e2 && e2[et] == et, et = /* @__PURE__ */ Symbol("Type");
function* er(t2, r2, n2, i2) {
  let o2 = t2;
  for (let t3 of (s(o2) || (o2 = [o2]), o2)) {
    let o3 = /* @__PURE__ */ function(t4, r3, n3, i3) {
      if (true === t4) return;
      let o4 = {};
      o4 = false === t4 ? {} : a(t4) ? { message: t4 } : t4;
      let { path: s2, branch: l2, node: c2 } = r3, { type: u2 } = n3, { refinement: f2, message: d2 = e(i3) ? "Required" : `Expected a value of type \`${u2}\`${f2 ? ` with refinement \`${f2}\`` : ""}, but received: \`${i3}\`` } = o4;
      return { ...o4, value: i3, type: u2, refinement: f2, key: s2[s2.length - 1], path: s2, branch: l2, node: c2, message: d2 };
    }(t3, r2, n2, i2);
    o3 && (yield o3);
  }
}
function en(e2, t2) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n2 = /* @__PURE__ */ ei(e2, t2, r2), i2 = /* @__PURE__ */ function(e3) {
    let { done: t3, value: r3 } = e3.next();
    return t3 ? void 0 : r3;
  }(n2);
  return i2[0] ? [new Z(i2[0], function* () {
    for (let e3 of n2) e3[0] && (yield e3[0]);
  }), void 0] : [void 0, i2[1]];
}
function* ei(e2, r2) {
  let n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, { path: i2 = [], branch: o2 = [e2], node: a2 = { current: r2 }, coerce: s2 = false, mask: l2 = false } = n2, c2 = { mask: l2, path: i2, branch: o2, node: a2 }, u2 = e2;
  if (s2) {
    let t2 = /* @__PURE__ */ r2.coercer(e2, c2);
    void 0 != t2 && (u2 = t2);
  }
  let f2 = 0;
  for (let t2 of er(/* @__PURE__ */ r2.validator(u2, c2), c2, r2, e2)) t2.explanation = n2.message, f2 = 2, yield [t2, void 0];
  for (let [e3, d2, p2] of r2.entries(u2, c2)) for (let r3 of /* @__PURE__ */ ei(d2, p2, { path: void 0 === e3 ? i2 : [...i2, e3], branch: void 0 === e3 ? o2 : [...o2, d2], node: void 0 === e3 ? a2 : { current: p2, parent: a2 }, coerce: s2, mask: l2, message: n2.message })) r3[0] ? (f2 = null != r3[0].refinement ? 1 : 2, yield [r3[0], void 0]) : s2 && (d2 = r3[1], void 0 === e3 ? u2 = d2 : u2 instanceof Map ? u2.set(e3, d2) : u2 instanceof Set ? u2.add(d2) : t(u2) && (u2[e3] = d2));
  if (2 !== f2) for (let t2 of er(/* @__PURE__ */ r2.refiner(u2, c2), c2, r2, e2)) t2.explanation = n2.message, f2 = 1, yield [t2, void 0];
  0 === f2 && (yield [void 0, u2]);
}
let eo = (e2) => function() {
  for (var t2 = arguments.length, r2 = Array(t2), n2 = 0; n2 < t2; n2++) r2[n2] = arguments[n2];
  let i2 = /* @__PURE__ */ e2(...r2), o2 = (e3, t3) => {
    var r3;
    let n3 = null !== (r3 = /* @__PURE__ */ Q.get(e3, t3)) && void 0 !== r3 ? r3 : {};
    Q.define(e3, t3, { ...n3, type: i2 });
  };
  return o2.toString = () => `@type:${i2.type}`, new Proxy(o2, { ownKeys: () => [.../* @__PURE__ */ Object.getOwnPropertyNames(i2), .../* @__PURE__ */ Object.getOwnPropertySymbols(i2)], get: (e3, t3) => i2[t3] });
}, ea = (e2) => function() {
  for (var t2 = arguments.length, r2 = Array(t2), n2 = 0; n2 < t2; n2++) r2[n2] = arguments[n2];
  let i2 = (t3) => e2(t3, ...r2);
  return new Proxy((e3, t3) => {
    Q.define(e3, t3, (e4) => {
      var t4;
      (null !== (t4 = e4.modifies) && void 0 !== t4 ? t4 : e4.modifies = []).push({ modify: i2 });
    }, {});
  }, { get(e3, t3) {
    if ("modify" == t3) return i2;
  } });
};
const _es = class _es {
  static create(t2, n2, i2) {
    var o2, a2;
    let s2;
    let l2 = null !== (a2 = null != n2 ? n2 : null === (o2 = t2[_es.underlying]) || void 0 === o2 ? void 0 : o2.schema) && void 0 !== a2 ? a2 : {};
    return new Proxy({}, { ownKeys(e2) {
      let r2 = /* @__PURE__ */ new Map();
      if (i2) {
        if (t2[i2]) for (let e3 of Object.getOwnPropertyNames(t2[i2])) r2.set(e3, e3);
        if (l2 && l2[i2]) for (let e3 of Object.getOwnPropertyNames(l2[i2])) r2.set(e3, e3);
      } else {
        for (let e3 of Object.getOwnPropertyNames(t2)) r2.set(e3, e3);
        if (l2) for (let e3 of Object.getOwnPropertyNames(l2)) r2.set(e3, e3);
      }
      return [.../* @__PURE__ */ r2.keys()];
    }, get(n3, o3) {
      var a3, c2, u2;
      if (o3 === _es.meta) return null != s2 ? s2 : s2 = /* @__PURE__ */ _es.create(t2, l2, _es.meta);
      if (i2) {
        if (r(t2)) {
          let r2 = null == t2 ? void 0 : null === (c2 = t2[i2]) || void 0 === c2 ? void 0 : c2[o3];
          if (!e(r2)) return r2;
        }
        return l2 ? null == l2 ? void 0 : null === (a3 = l2[i2]) || void 0 === a3 ? void 0 : a3[o3] : void 0;
      }
      if (r(t2)) {
        let r2 = null == t2 ? void 0 : t2[o3];
        if (!e(r2)) return r2;
      }
      return null !== (u2 = t2[o3]) && void 0 !== u2 ? u2 : l2 ? l2[o3] : void 0;
    } });
  }
  static schemaProp(e2, t2) {
    return el(e2.schema, t2);
  }
  static metaProp(e2, t2) {
    return ec(e2.schema, t2);
  }
};
__publicField(_es, "RecordKey", Symbol("RecordKey"));
__publicField(_es, "meta", Symbol("meta"));
__publicField(_es, "optional", Symbol("optional"));
__publicField(_es, "underlying", Symbol("underlying"));
__publicField(_es, "unwrap", Symbol("unwrap"));
__publicField(_es, "extractSchema", (e2) => new eu().toValue(e2));
__publicField(_es, "extractMeta", (e2) => {
  var t2;
  return new eu().toValue(null !== (t2 = e2.meta) && void 0 !== t2 ? t2 : e2[_es.meta]);
});
let es = _es;
let el = (e2, t2) => {
  var n2;
  if (r(e2)) return null !== (n2 = e2[t2]) && void 0 !== n2 ? n2 : e2[es.unwrap] ? el(e2[es.unwrap]().schema, t2) : void 0;
}, ec = (e2, t2) => {
  var n2, i2;
  if (r(e2)) return null !== (i2 = null === (n2 = e2[es.meta]) || void 0 === n2 ? void 0 : n2[t2]) && void 0 !== i2 ? i2 : e2[es.unwrap] ? ec(e2[es.unwrap]().schema, t2) : void 0;
};
class eu {
  constructor(e2 = false) {
    this.deref = e2;
  }
  toValue(t2) {
    if (t2) {
      if (!e(t2.schema)) return this.toValue(t2.schema);
      if (this.deref && t2[es.unwrap]) return this.toValue(/* @__PURE__ */ t2[es.unwrap]());
      if (n(t2)) return this.toArray(t2);
      if (t2.constructor === Object) return this.toObject(t2);
    }
    return t2;
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
class ef {
  static parse(e2) {
    if ("" === e2) return [];
    if ("/" === e2) return [""];
    if ("/" !== e2.charAt(0)) throw Error("Invalid JSON pointer: " + e2);
    let t2 = /* @__PURE__ */ e2.substring(1).split(/\//);
    return t2.map((e3, r2) => ef.unescape(e3, r2 === t2.length - 1));
  }
  static create() {
    let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return 0 === e2.length ? "" : "/" + e2.map(ef.escape).join("/");
  }
  static unescape(e2, t2) {
    return "" == e2 && t2 ? es.RecordKey : e2.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  static escape(e2) {
    return e2 == es.RecordKey ? "" : e2.toString().replace(/~/g, "~0").replace(/\//g, "~1");
  }
  static get(e2, t2) {
    let r2 = Array.isArray(t2) ? t2 : ef.parse(t2);
    for (let t3 = 0; t3 < r2.length; t3++) {
      let n2 = r2[t3];
      if (t3 > 0 && n2 == es.RecordKey) return r2[t3 - 1];
      if (!("object" == typeof e2 && n2 in e2)) throw Error("Invalid reference token: " + n2);
      e2 = e2[n2];
    }
    return e2;
  }
}
_a = et;
const _ed = class _ed {
  constructor(e2) {
    __publicField(this, _a, et);
    __publicField(this, "schema");
    if (e2) {
      this.schema = /* @__PURE__ */ es.create(e2);
      return;
    }
    this.schema = null != e2 ? e2 : null;
  }
  get meta() {
    return this.schema ? this.schema[es.meta] : {};
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
    if (a(e2)) {
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
    return en(e2, this, t2);
  }
  create(e2) {
    let t2 = /* @__PURE__ */ en(e2, this, { coerce: true });
    if (t2[0]) throw t2[0];
    return t2[1];
  }
  mask(e2) {
    let t2 = /* @__PURE__ */ en(e2, this, { coerce: true, mask: true });
    if (t2[0]) throw t2[0];
    return t2[1];
  }
  use() {
    for (var e2 = arguments.length, t2 = Array(e2), r2 = 0; r2 < e2; r2++) t2[r2] = arguments[r2];
    return t2.reduce((e3, t3) => t3.modify(e3), this);
  }
  optional() {
    return ey.create(this);
  }
  default(e2) {
    return eh.create(this, e2);
  }
};
__publicField(_ed, "define", eo(function() {
  let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => true;
  return new class extends _ed {
    validator(t2, r2) {
      return e2(t2, r2);
    }
  }(null);
}));
__publicField(_ed, "fromTypeObject", (e2, t2) => {
  var r2, n2, i2;
  let o2 = null !== (n2 = null !== (r2 = e2.type) && void 0 !== r2 ? r2 : t2) && void 0 !== n2 ? n2 : new _ed({});
  return e2.modifies ? o2.use(...null !== (i2 = e2.modifies) && void 0 !== i2 ? i2 : []) : o2;
});
let ed = _ed;
class ep extends ed {
  static of(e2, t2) {
    return new ep({ ...t2, [es.underlying]: e2 });
  }
  static refine(e2, t2, r2) {
    return new class extends ep {
      *refiner(n2, i2) {
        for (let o2 of (yield* this.unwrap.refiner(n2, i2), /* @__PURE__ */ er(/* @__PURE__ */ t2(n2, i2), i2, e2, n2))) yield { ...o2, refinement: /* @__PURE__ */ Object.keys(r2).join(",") };
      }
    }({ ...r2, [es.underlying]: e2 });
  }
  get unwrap() {
    let e2 = this.schema[es.unwrap];
    return e2 ? e2() : this.schema[es.underlying];
  }
  get type() {
    return this.unwrap.type;
  }
  *entries(e2) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Y;
    yield* this.unwrap.entries(e2, { ...t2, node: { current: this, parent: t2.node } });
  }
  validator(e2, t2) {
    return er(/* @__PURE__ */ this.unwrap.validator(e2, t2), t2, this, e2);
  }
  refiner(e2, t2) {
    return er(/* @__PURE__ */ this.unwrap.refiner(e2, t2), t2, this, e2);
  }
  coercer(e2, t2) {
    return this.unwrap.coercer(e2, t2);
  }
}
const _eh = class _eh extends ep {
  coercer(e2, t2) {
    return void 0 === e2 ? this.schema.default : super.unwrap.coercer(e2, t2);
  }
};
__publicField(_eh, "create", eo((e2, t2) => new _eh({ default: t2, [es.underlying]: e2 })));
let eh = _eh;
const _ey = class _ey extends ep {
  refiner(e2, t2) {
    return void 0 === e2 || super.unwrap.refiner(e2, t2);
  }
  validator(e2, t2) {
    return void 0 === e2 || super.unwrap.validator(e2, t2);
  }
};
__publicField(_ey, "create", eo((e2) => new _ey({ [es.underlying]: e2, [es.optional]: e2 })));
let ey = _ey;
const _em = class _em extends ep {
};
__publicField(_em, "create", eo((e2, t2) => new _em({ $ref: e2, [es.unwrap]: t2 })));
let em = _em;
const _ev = class _ev extends ed {
  get type() {
    return this.schema.type;
  }
  validator(e2, t2) {
    return a(e2);
  }
};
__publicField(_ev, "create", eo(() => new _ev({ type: "string" })));
let ev = _ev;
const _e_ = class _e_ extends ed {
  get type() {
    return this.schema.type;
  }
  validator(e2, t2) {
    return i(e2);
  }
  coercer(e2, t2) {
    try {
      let t3 = void 0 != e2 ? parseInt(/* @__PURE__ */ String(e2)) : void 0;
      return i(t3) ? t3 : void 0;
    } catch (e3) {
      return;
    }
  }
};
__publicField(_e_, "create", eo(() => new _e_({ type: "integer" })));
let e_ = _e_;
const _eg = class _eg extends ed {
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
__publicField(_eg, "create", eo(() => new _eg({ type: "boolean" })));
let eg = _eg;
const _eb = class _eb extends ed {
  static createEnum(e2) {
    return new _eb({ enum: e2 });
  }
  get type() {
    return "enums";
  }
  validator(e2, t2) {
    return this.schema.enum.includes(e2);
  }
};
__publicField(_eb, "create", eo(_eb.createEnum));
__publicField(_eb, "literal", eo((e2) => new _eb({ enum: [e2] })));
__publicField(_eb, "nativeEnum", eo((e2) => new _eb({ enum: /* @__PURE__ */ Object.values(e2) })));
let eb = _eb;
const _ew = class _ew extends ed {
  get type() {
    return "never";
  }
  validator(e2, t2) {
    return false;
  }
};
__publicField(_ew, "create", eo(() => new _ew(false)));
let ew = _ew;
class eP extends ed {
  static create(e2) {
    let t2 = function() {
      let e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t3 = [];
      for (let [r2, n2] of Object.entries(e3)) /* @__PURE__ */ es.schemaProp(n2, es.optional) || t3.push(r2);
      return t3;
    };
    return eo(() => {
      if (e2) {
        if (l(e2)) {
          let i2 = new e2(), o2 = {};
          for (let [e3, t3] of Object.entries(i2)) o2[e3] = /* @__PURE__ */ eb.literal(t3);
          for (let e3 of Q.getOwnPropertyNames(i2)) {
            let t3 = /* @__PURE__ */ Q.get(i2, e3);
            if (t3) {
              let i3 = /* @__PURE__ */ ed.fromTypeObject(t3, o2[e3]);
              if (e3 in o2) {
                var r2, n2;
                o2[e3] = /* @__PURE__ */ i3.default(null === (n2 = o2[e3].schema) || void 0 === n2 ? void 0 : null === (r2 = n2.enum) || void 0 === r2 ? void 0 : r2[0]);
              } else o2[e3] = i3;
            }
          }
          return em.create(e2.name, () => new eP({ type: "object", properties: o2, required: /* @__PURE__ */ t2(o2), additionalProperties: /* @__PURE__ */ ew.create() }));
        }
        return new eP({ type: "object", properties: e2, required: /* @__PURE__ */ t2(e2), additionalProperties: /* @__PURE__ */ ew.create() });
      }
      return new eP({ type: "object", properties: {}, required: [], additionalProperties: /* @__PURE__ */ ew.create() });
    })();
  }
  get type() {
    return this.schema.type;
  }
  *entries(e2) {
    let r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Y;
    if (t(e2)) {
      var n2;
      let t2 = new Set(Object.keys(e2));
      if (this.schema.properties) for (let r3 in this.schema.properties) t2.delete(r3), yield [r3, e2[r3], this.schema.properties[r3]];
      if ((null === (n2 = r2.node) || void 0 === n2 ? void 0 : n2.current.type) !== "intersection") for (let r3 of t2) yield [r3, e2[r3], this.schema.additionalProperties];
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
const _eO = class _eO extends ed {
  get type() {
    return "record";
  }
  *entries(e2) {
    if (t(e2)) for (let [t2, r2] of Object.entries(e2)) yield [es.RecordKey, t2, this.schema.propertyNames], yield [t2, r2, this.schema.additionalProperties];
  }
  validator(e2) {
    return t(e2);
  }
};
__publicField(_eO, "create", eo((e2, t2) => new _eO({ type: "object", propertyNames: e2, additionalProperties: t2 })));
let eO = _eO;
const _ej = class _ej extends ed {
  get type() {
    return this.schema.type;
  }
  *entries(e2) {
    if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1], Array.isArray(e2)) for (let [t2, r2] of e2.entries()) yield [t2, r2, this.schema.items];
  }
  validator(e2) {
    return n(e2);
  }
  coercer(e2) {
    return n(e2) ? e2.slice() : e2;
  }
};
__publicField(_ej, "create", eo((e2) => new _ej({ type: "array", items: e2 })));
let ej = _ej;
const _eS = class _eS extends ed {
  constructor() {
    super(...arguments);
    __publicField(this, "_discriminatorPropName");
    __publicField(this, "_discriminatorMappingProps", /* @__PURE__ */ new Map());
  }
  static discriminatorMapping(e2) {
    for (var t2 = arguments.length, r2 = Array(t2 > 1 ? t2 - 1 : 0), n2 = 1; n2 < t2; n2++) r2[n2 - 1] = arguments[n2];
    return eo(() => {
      let t3 = [];
      if (1 == r2.length && r2[0].constructor == Object) for (let [n3, i2] of Object.entries(r2[0])) if (es.schemaProp(i2, "$ref")) t3.push(i2);
      else {
        let r3 = { [e2]: /* @__PURE__ */ eb.literal(n3) };
        for (let [e3, t4, n4] of i2.entries({}, Y)) r3[String(e3)] = n4;
        t3.push(/* @__PURE__ */ eP.create(r3));
      }
      else for (let e3 of r2) l(e3) && t3.push(/* @__PURE__ */ eP.create(e3));
      return new _eS({ oneOf: t3, discriminator: { propertyName: e2 } });
    })();
  }
  discriminatorPropType(e2) {
    var t2;
    return null !== (t2 = this._discriminatorPropName) && void 0 !== t2 ? t2 : this._discriminatorPropName = /* @__PURE__ */ (() => {
      var t3, r2, n2, i2;
      let o2 = null !== (n2 = null === (t3 = this.schema.discriminator) || void 0 === t3 ? void 0 : t3.propertyName) && void 0 !== n2 ? n2 : "", a2 = [], s2 = [];
      for (let e3 of this.schema.oneOf) {
        let t4 = es.schemaProp(e3, "properties")[o2];
        if (!t4) continue;
        let r3 = t4.schema.enum;
        r3 && a2.push(...r3), s2.push(t4.meta);
      }
      return ep.of(/* @__PURE__ */ eb.create(a2), { [es.meta]: /* @__PURE__ */ es.create(s2[0], null !== (i2 = null === (r2 = e2.node) || void 0 === r2 ? void 0 : r2.current.meta) && void 0 !== i2 ? i2 : {}) });
    })();
  }
  discriminatorMapping(e2, t2, r2) {
    var n2, i2, o2;
    if (this._discriminatorMappingProps.get(t2)) return this._discriminatorMappingProps.get(t2);
    if ((null !== (o2 = null === (i2 = /* @__PURE__ */ this.discriminatorPropType(r2)) || void 0 === i2 ? void 0 : null === (n2 = i2.schema) || void 0 === n2 ? void 0 : n2.enum) && void 0 !== o2 ? o2 : []).includes(t2)) {
      let r3 = /* @__PURE__ */ this.schema.oneOf.find((r4) => {
        let n3 = es.schemaProp(r4, "properties")[e2];
        if (n3) {
          let [e3, r5] = n3.validate(t2);
          return !e3;
        }
        return false;
      });
      if (r3) {
        if (!this._discriminatorMappingProps.has(t2)) {
          let n3 = {};
          for (let [t3, i3] of Object.entries(/* @__PURE__ */ es.schemaProp(r3, "properties"))) t3 !== e2 && (n3[t3] = i3);
          this._discriminatorMappingProps.set(t2, n3);
        }
        return this._discriminatorMappingProps.get(t2);
      }
    }
    return {};
  }
  *entries(e2) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Y;
    if (this.schema.discriminator) {
      let r2 = this.schema.discriminator.propertyName, n2 = null == e2 ? void 0 : e2[r2], i2 = /* @__PURE__ */ eP.create({ [r2]: /* @__PURE__ */ this.discriminatorPropType(t2), ...this.discriminatorMapping(r2, n2, t2) });
      yield* i2.entries(e2, t2);
    }
  }
  get type() {
    return "union";
  }
  coercer(e2) {
    for (let t2 of this.schema.oneOf) {
      let [r2, n2] = en(e2, t2, { coerce: true });
      if (!r2) return n2;
    }
    return e2;
  }
  validator(e2, t2) {
    if (this.schema.discriminator) {
      let r3 = this.schema.discriminator.propertyName, n2 = null == e2 ? void 0 : e2[r3];
      return eP.create({ [r3]: /* @__PURE__ */ this.discriminatorPropType(t2), ...this.discriminatorMapping(r3, n2, t2) }).validator(e2, t2);
    }
    let r2 = [];
    for (let n2 of this.schema.oneOf) {
      let [...i2] = ei(e2, n2, t2), [o2] = i2;
      if (o2 && !o2[0]) return [];
      for (let [e3] of i2) e3 && r2.push(e3);
    }
    return [`Expected the value to satisfy a union of \`${this.schema.oneOf.map((e3) => e3.type).join(" | ")}\`, but received: ${e2}`, ...r2];
  }
};
__publicField(_eS, "create", eo(function() {
  for (var e2 = arguments.length, t2 = Array(e2), r2 = 0; r2 < e2; r2++) t2[r2] = arguments[r2];
  return new _eS({ oneOf: t2 });
}));
let eS = _eS;
let eA = ev.create, ex = e_.create, eN = eg.create, ez = eb.create, eM = eb.nativeEnum, eE = eP.create, ek = eO.create, eF = ej.create, eK = eS.create, eR = ed.define, e$ = /* @__PURE__ */ ea((e2) => ey.create(e2)), eD = /* @__PURE__ */ ea((e2, t2) => ep.of(e2, { [es.meta]: t2 }));
export {
  Y as E,
  ef as J,
  es as S,
  eD as a,
  ex as b,
  eR as c,
  e$ as d,
  eF as e,
  eN as f,
  ez as g,
  ee as i,
  eM as n,
  eE as o,
  H as p,
  ek as r,
  eA as s,
  eK as u
};
