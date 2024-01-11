var t, r, e, n, o, i, u, a, c, f, l, s, p, y, h, d, g = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function v(t10) {
  return t10 && t10.__esModule && Object.prototype.hasOwnProperty.call(t10, "default") ? t10.default : t10;
}
var b = "object" == typeof document && document.all, w = void 0 === b && void 0 !== b ? function(t10) {
  return "function" == typeof t10 || t10 === b;
} : function(t10) {
  return "function" == typeof t10;
}, m = {}, A = function(t10) {
  try {
    return !!t10();
  } catch (t11) {
    return true;
  }
}, x = !A(function() {
  return 7 !== Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1];
}), E = function(t10) {
  return t10 && t10.Math === Math && t10;
}, O = (
  // eslint-disable-next-line es/no-global-this -- safe
  E("object" == typeof globalThis && globalThis) || E("object" == typeof window && window) || // eslint-disable-next-line no-restricted-globals -- safe
  E("object" == typeof self && self) || E("object" == typeof g && g) || E("object" == typeof g && g) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")()
), T = function(t10) {
  return "object" == typeof t10 ? null !== t10 : w(t10);
}, S = O.document, j = T(S) && T(S.createElement), I = function(t10) {
  return j ? S.createElement(t10) : {};
}, R = !x && !A(function() {
  return 7 !== Object.defineProperty(/* @__PURE__ */ I("div"), "a", { get: function() {
    return 7;
  } }).a;
}), P = x && A(function() {
  return 42 !== Object.defineProperty(function() {
  }, "prototype", { value: 42, writable: false }).prototype;
}), k = String, _ = TypeError, C = function(t10) {
  if (T(t10))
    return t10;
  throw new _(k(t10) + " is not an object");
}, F = !A(function() {
  var t10 = /* @__PURE__ */ (function() {
  }).bind();
  return "function" != typeof t10 || t10.hasOwnProperty("prototype");
}), M = Function.prototype.call, L = F ? M.bind(M) : function() {
  return M.apply(M, arguments);
}, U = function(t10, r10) {
  var e10;
  return arguments.length < 2 ? w(e10 = O[t10]) ? e10 : void 0 : O[t10] && O[t10][r10];
}, D = Function.prototype, z = D.call, W = F && D.bind.bind(z, z), $ = F ? W : function(t10) {
  return function() {
    return z.apply(t10, arguments);
  };
}, B = /* @__PURE__ */ $({}.isPrototypeOf), N = "undefined" != typeof navigator && String(navigator.userAgent) || "", V = O.process, Y = O.Deno, G = V && V.versions || Y && Y.version, q = G && G.v8;
q && // in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(i = (o = /* @__PURE__ */ q.split("."))[0] > 0 && o[0] < 4 ? 1 : +(o[0] + o[1])), !i && N && (!(o = /* @__PURE__ */ N.match(/Edge\/(\d+)/)) || o[1] >= 74) && (o = /* @__PURE__ */ N.match(/Chrome\/(\d+)/)) && (i = +o[1]);
var K = i, X = O.String, H = !!Object.getOwnPropertySymbols && !A(function() {
  var t10 = /* @__PURE__ */ Symbol("symbol detection");
  return !X(t10) || !(Object(t10) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && K && K < 41;
}), J = H && !Symbol.sham && "symbol" == typeof Symbol.iterator, Q = Object, Z = J ? function(t10) {
  return "symbol" == typeof t10;
} : function(t10) {
  var r10 = /* @__PURE__ */ U("Symbol");
  return w(r10) && B(r10.prototype, /* @__PURE__ */ Q(t10));
}, tt = String, tr = function(t10) {
  try {
    return tt(t10);
  } catch (t11) {
    return "Object";
  }
}, te = TypeError, tn = function(t10) {
  if (w(t10))
    return t10;
  throw new te(tr(t10) + " is not a function");
}, to = function(t10) {
  return null == t10;
}, ti = function(t10, r10) {
  var e10 = t10[r10];
  return to(e10) ? void 0 : tn(e10);
}, tu = TypeError, ta = { exports: {} }, tc = Object.defineProperty, tf = function(t10, r10) {
  try {
    tc(O, t10, { value: r10, configurable: true, writable: true });
  } catch (e10) {
    O[t10] = r10;
  }
  return r10;
}, tl = "__core-js_shared__", ts = O[tl] || tf(tl, {});
(ta.exports = function(t10, r10) {
  return ts[t10] || (ts[t10] = void 0 !== r10 ? r10 : {});
})("versions", []).push({ version: "3.35.0", mode: "global", copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.35.0/LICENSE", source: "https://github.com/zloirock/core-js" });
var tp = ta.exports, ty = TypeError, th = function(t10) {
  if (to(t10))
    throw new ty("Can't call method on " + t10);
  return t10;
}, td = Object, tg = function(t10) {
  return td(/* @__PURE__ */ th(t10));
}, tv = /* @__PURE__ */ $({}.hasOwnProperty), tb = Object.hasOwn || function(t10, r10) {
  return tv(/* @__PURE__ */ tg(t10), r10);
}, tw = 0, tm = /* @__PURE__ */ Math.random(), tA = /* @__PURE__ */ $(1 .toString), tx = function(t10) {
  return "Symbol(" + (void 0 === t10 ? "" : t10) + ")_" + tA(++tw + tm, 36);
}, tE = O.Symbol, tO = /* @__PURE__ */ tp("wks"), tT = J ? tE.for || tE : tE && tE.withoutSetter || tx, tS = function(t10) {
  return tb(tO, t10) || (tO[t10] = H && tb(tE, t10) ? tE[t10] : tT("Symbol." + t10)), tO[t10];
}, tj = function(t10, r10) {
  var e10, n10;
  if ("string" === r10 && w(e10 = t10.toString) && !T(n10 = /* @__PURE__ */ L(e10, t10)) || w(e10 = t10.valueOf) && !T(n10 = /* @__PURE__ */ L(e10, t10)) || "string" !== r10 && w(e10 = t10.toString) && !T(n10 = /* @__PURE__ */ L(e10, t10)))
    return n10;
  throw new tu("Can't convert object to primitive value");
}, tI = TypeError, tR = /* @__PURE__ */ tS("toPrimitive"), tP = function(t10, r10) {
  if (!T(t10) || Z(t10))
    return t10;
  var e10, n10 = /* @__PURE__ */ ti(t10, tR);
  if (n10) {
    if (void 0 === r10 && (r10 = "default"), !T(e10 = /* @__PURE__ */ L(n10, t10, r10)) || Z(e10))
      return e10;
    throw new tI("Can't convert object to primitive value");
  }
  return void 0 === r10 && (r10 = "number"), tj(t10, r10);
}, tk = function(t10) {
  var r10 = /* @__PURE__ */ tP(t10, "string");
  return Z(r10) ? r10 : r10 + "";
}, t_ = TypeError, tC = Object.defineProperty, tF = Object.getOwnPropertyDescriptor, tM = "enumerable", tL = "configurable", tU = "writable";
m.f = x ? P ? function(t10, r10, e10) {
  if (C(t10), r10 = /* @__PURE__ */ tk(r10), C(e10), "function" == typeof t10 && "prototype" === r10 && "value" in e10 && tU in e10 && !e10[tU]) {
    var n10 = /* @__PURE__ */ tF(t10, r10);
    n10 && n10[tU] && (t10[r10] = e10.value, e10 = { configurable: tL in e10 ? e10[tL] : n10[tL], enumerable: tM in e10 ? e10[tM] : n10[tM], writable: false });
  }
  return tC(t10, r10, e10);
} : tC : function(t10, r10, e10) {
  if (C(t10), r10 = /* @__PURE__ */ tk(r10), C(e10), R)
    try {
      return tC(t10, r10, e10);
    } catch (t11) {
    }
  if ("get" in e10 || "set" in e10)
    throw new t_("Accessors not supported");
  return "value" in e10 && (t10[r10] = e10.value), t10;
};
var tD = { exports: {} }, tz = Function.prototype, tW = x && Object.getOwnPropertyDescriptor, t$ = /* @__PURE__ */ tb(tz, "name") && (!x || x && tW(tz, "name").configurable), tB = /* @__PURE__ */ $(Function.toString);
w(ts.inspectSource) || (ts.inspectSource = function(t10) {
  return tB(t10);
});
var tN = ts.inspectSource, tV = O.WeakMap, tY = w(tV) && /native code/.test(/* @__PURE__ */ String(tV)), tG = function(t10, r10) {
  return { enumerable: !(1 & t10), configurable: !(2 & t10), writable: !(4 & t10), value: r10 };
}, tq = x ? function(t10, r10, e10) {
  return m.f(t10, r10, /* @__PURE__ */ tG(1, e10));
} : function(t10, r10, e10) {
  return t10[r10] = e10, t10;
}, tK = /* @__PURE__ */ tp("keys"), tX = function(t10) {
  return tK[t10] || (tK[t10] = /* @__PURE__ */ tx(t10));
}, tH = {}, tJ = "Object already initialized", tQ = O.TypeError, tZ = O.WeakMap;
if (tY || ts.state) {
  var t0 = ts.state || (ts.state = new tZ());
  t0.get = t0.get, t0.has = t0.has, t0.set = t0.set, /* eslint-enable no-self-assign -- prototype methods protection */
  u = function(t10, r10) {
    if (t0.has(t10))
      throw new tQ(tJ);
    return r10.facade = t10, t0.set(t10, r10), r10;
  }, a = function(t10) {
    return t0.get(t10) || {};
  }, c = function(t10) {
    return t0.has(t10);
  };
} else {
  var t1 = /* @__PURE__ */ tX("state");
  tH[t1] = true, u = function(t10, r10) {
    if (tb(t10, t1))
      throw new tQ(tJ);
    return r10.facade = t10, tq(t10, t1, r10), r10;
  }, a = function(t10) {
    return tb(t10, t1) ? t10[t1] : {};
  }, c = function(t10) {
    return tb(t10, t1);
  };
}
var t2 = { set: u, get: a, has: c, enforce: function(t10) {
  return c(t10) ? a(t10) : u(t10, {});
}, getterFor: function(t10) {
  return function(r10) {
    var e10;
    if (!T(r10) || (e10 = /* @__PURE__ */ a(r10)).type !== t10)
      throw new tQ("Incompatible receiver, " + t10 + " required");
    return e10;
  };
} }, t4 = t2.enforce, t9 = t2.get, t3 = String, t7 = Object.defineProperty, t6 = /* @__PURE__ */ $("".slice), t8 = /* @__PURE__ */ $("".replace), t5 = /* @__PURE__ */ $([].join), rt = x && !A(function() {
  return 8 !== t7(function() {
  }, "length", { value: 8 }).length;
}), rr = /* @__PURE__ */ String(String).split("String"), re = tD.exports = function(t10, r10, e10) {
  "Symbol(" === t6(/* @__PURE__ */ t3(r10), 0, 7) && (r10 = "[" + t8(/* @__PURE__ */ t3(r10), /^Symbol\(([^)]*)\)/, "$1") + "]"), e10 && e10.getter && (r10 = "get " + r10), e10 && e10.setter && (r10 = "set " + r10), (!tb(t10, "name") || t$ && t10.name !== r10) && (x ? t7(t10, "name", { value: r10, configurable: true }) : t10.name = r10), rt && e10 && tb(e10, "arity") && t10.length !== e10.arity && t7(t10, "length", { value: e10.arity });
  try {
    e10 && tb(e10, "constructor") && e10.constructor ? x && t7(t10, "prototype", { writable: false }) : t10.prototype && (t10.prototype = void 0);
  } catch (t11) {
  }
  var n10 = /* @__PURE__ */ t4(t10);
  return tb(n10, "source") || (n10.source = /* @__PURE__ */ t5(rr, "string" == typeof r10 ? r10 : "")), t10;
};
Function.prototype.toString = /* @__PURE__ */ re(function() {
  return w(this) && t9(this).source || tN(this);
}, "toString");
var rn = tD.exports, ro = function(t10, r10, e10, n10) {
  n10 || (n10 = {});
  var o10 = n10.enumerable, i2 = void 0 !== n10.name ? n10.name : r10;
  if (w(e10) && rn(e10, i2, n10), n10.global)
    o10 ? t10[r10] = e10 : tf(r10, e10);
  else {
    try {
      n10.unsafe ? t10[r10] && (o10 = true) : delete t10[r10];
    } catch (t11) {
    }
    o10 ? t10[r10] = e10 : m.f(t10, r10, { value: e10, enumerable: false, configurable: !n10.nonConfigurable, writable: !n10.nonWritable });
  }
  return t10;
}, ri = /* @__PURE__ */ tS("toStringTag"), ru = {};
ru[ri] = "z";
var ra = "[object z]" === String(ru), rc = /* @__PURE__ */ $({}.toString), rf = /* @__PURE__ */ $("".slice), rl = function(t10) {
  return rf(/* @__PURE__ */ rc(t10), 8, -1);
}, rs = /* @__PURE__ */ tS("toStringTag"), rp = Object, ry = "Arguments" === rl(/* @__PURE__ */ function() {
  return arguments;
}()), rh = function(t10, r10) {
  try {
    return t10[r10];
  } catch (t11) {
  }
}, rd = ra ? rl : function(t10) {
  var r10, e10, n10;
  return void 0 === t10 ? "Undefined" : null === t10 ? "Null" : "string" == typeof (e10 = /* @__PURE__ */ rh(r10 = /* @__PURE__ */ rp(t10), rs)) ? e10 : ry ? rl(r10) : "Object" === (n10 = /* @__PURE__ */ rl(r10)) && w(r10.callee) ? "Arguments" : n10;
}, rg = String, rv = function(t10) {
  if ("Symbol" === rd(t10))
    throw TypeError("Cannot convert a Symbol value to a string");
  return rg(t10);
}, rb = TypeError, rw = function(t10, r10) {
  if (t10 < r10)
    throw new rb("Not enough arguments");
  return t10;
}, rm = URLSearchParams, rA = rm.prototype, rx = /* @__PURE__ */ $(rA.append), rE = /* @__PURE__ */ $(rA.delete), rO = /* @__PURE__ */ $(rA.forEach), rT = /* @__PURE__ */ $([].push), rS = new rm("a=1&a=2&b=3");
rS.delete("a", 1), // `undefined` case is a Chromium 117 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=14222
rS.delete("b", void 0), rS + "" != "a=2" && ro(rA, "delete", function(t10) {
  var r10, e10 = arguments.length, n10 = e10 < 2 ? void 0 : arguments[1];
  if (e10 && void 0 === n10)
    return rE(this, t10);
  var o10 = [];
  rO(this, function(t11, r11) {
    rT(o10, { key: r11, value: t11 });
  }), rw(e10, 1);
  for (var i2 = /* @__PURE__ */ rv(t10), u2 = /* @__PURE__ */ rv(n10), a2 = 0, c2 = 0, f2 = false, l2 = o10.length; a2 < l2; )
    r10 = o10[a2++], f2 || r10.key === i2 ? (f2 = true, rE(this, r10.key)) : c2++;
  for (; c2 < l2; )
    (r10 = o10[c2++]).key === i2 && r10.value === u2 || rx(this, r10.key, r10.value);
}, { enumerable: true, unsafe: true });
var rj = URLSearchParams, rI = rj.prototype, rR = /* @__PURE__ */ $(rI.getAll), rP = /* @__PURE__ */ $(rI.has), rk = new rj("a=1");
(rk.has("a", 2) || !rk.has("a", void 0)) && ro(rI, "has", function(t10) {
  var r10 = arguments.length, e10 = r10 < 2 ? void 0 : arguments[1];
  if (r10 && void 0 === e10)
    return rP(this, t10);
  var n10 = /* @__PURE__ */ rR(this, t10);
  rw(r10, 1);
  for (var o10 = /* @__PURE__ */ rv(e10), i2 = 0; i2 < n10.length; )
    if (n10[i2++] === o10)
      return true;
  return false;
}, { enumerable: true, unsafe: true });
var r_ = function(t10, r10, e10) {
  return e10.get && rn(e10.get, r10, { getter: true }), e10.set && rn(e10.set, r10, { setter: true }), m.f(t10, r10, e10);
}, rC = URLSearchParams.prototype, rF = /* @__PURE__ */ $(rC.forEach);
!x || "size" in rC || r_(rC, "size", { get: function() {
  var t10 = 0;
  return rF(this, function() {
    t10++;
  }), t10;
}, configurable: true, enumerable: true });
var rM = {}, rL = {}, rU = {}.propertyIsEnumerable, rD = Object.getOwnPropertyDescriptor, rz = rD && !rU.call({ 1: 2 }, 1);
rL.f = rz ? function(t10) {
  var r10 = /* @__PURE__ */ rD(this, t10);
  return !!r10 && r10.enumerable;
} : rU;
var rW = Object, r$ = /* @__PURE__ */ $("".split), rB = A(function() {
  return !rW("z").propertyIsEnumerable(0);
}) ? function(t10) {
  return "String" === rl(t10) ? r$(t10, "") : rW(t10);
} : rW, rN = function(t10) {
  return rB(/* @__PURE__ */ th(t10));
}, rV = Object.getOwnPropertyDescriptor;
rM.f = x ? rV : function(t10, r10) {
  if (t10 = /* @__PURE__ */ rN(t10), r10 = /* @__PURE__ */ tk(r10), R)
    try {
      return rV(t10, r10);
    } catch (t11) {
    }
  if (tb(t10, r10))
    return tG(!L(rL.f, t10, r10), t10[r10]);
};
var rY = {}, rG = Math.ceil, rq = Math.floor, rK = Math.trunc || function(t10) {
  var r10 = +t10;
  return (r10 > 0 ? rq : rG)(r10);
}, rX = function(t10) {
  var r10 = +t10;
  return r10 != r10 || 0 === r10 ? 0 : rK(r10);
}, rH = Math.max, rJ = Math.min, rQ = Math.min, rZ = function(t10) {
  return t10 > 0 ? rQ(/* @__PURE__ */ rX(t10), 9007199254740991) : 0;
}, r0 = function(t10) {
  return rZ(t10.length);
}, r1 = function(t10, r10) {
  var e10 = /* @__PURE__ */ rX(t10);
  return e10 < 0 ? rH(e10 + r10, 0) : rJ(e10, r10);
}, r2 = function(t10) {
  return function(r10, e10, n10) {
    var o10, i2 = /* @__PURE__ */ rN(r10), u2 = /* @__PURE__ */ r0(i2), a2 = /* @__PURE__ */ r1(n10, u2);
    if (t10 && e10 != e10) {
      for (; u2 > a2; )
        if ((o10 = i2[a2++]) != o10)
          return true;
    } else
      for (; u2 > a2; a2++)
        if ((t10 || a2 in i2) && i2[a2] === e10)
          return t10 || a2 || 0;
    return !t10 && -1;
  };
}, r4 = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: /* @__PURE__ */ r2(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: /* @__PURE__ */ r2(false)
}.indexOf, r9 = /* @__PURE__ */ $([].push), r3 = function(t10, r10) {
  var e10, n10 = /* @__PURE__ */ rN(t10), o10 = 0, i2 = [];
  for (e10 in n10)
    !tb(tH, e10) && tb(n10, e10) && r9(i2, e10);
  for (; r10.length > o10; )
    tb(n10, e10 = r10[o10++]) && (~r4(i2, e10) || r9(i2, e10));
  return i2;
}, r7 = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], r6 = /* @__PURE__ */ r7.concat("length", "prototype");
rY.f = Object.getOwnPropertyNames || function(t10) {
  return r3(t10, r6);
};
var r8 = {};
r8.f = Object.getOwnPropertySymbols;
var r5 = /* @__PURE__ */ $([].concat), et = U("Reflect", "ownKeys") || function(t10) {
  var r10 = /* @__PURE__ */ rY.f(/* @__PURE__ */ C(t10)), e10 = r8.f;
  return e10 ? r5(r10, /* @__PURE__ */ e10(t10)) : r10;
}, er = function(t10, r10, e10) {
  for (var n10 = /* @__PURE__ */ et(r10), o10 = m.f, i2 = rM.f, u2 = 0; u2 < n10.length; u2++) {
    var a2 = n10[u2];
    tb(t10, a2) || e10 && tb(e10, a2) || o10(t10, a2, /* @__PURE__ */ i2(r10, a2));
  }
}, ee = /#|\.prototype\./, en = function(t10, r10) {
  var e10 = ei[eo(t10)];
  return e10 === ea || e10 !== eu && (w(r10) ? A(r10) : !!r10);
}, eo = en.normalize = function(t10) {
  return String(t10).replace(ee, ".").toLowerCase();
}, ei = en.data = {}, eu = en.NATIVE = "N", ea = en.POLYFILL = "P", ec = rM.f, ef = function(t10, r10) {
  var e10, n10, o10, i2, u2, a2 = t10.target, c2 = t10.global, f2 = t10.stat;
  if (e10 = c2 ? O : f2 ? O[a2] || tf(a2, {}) : (O[a2] || {}).prototype)
    for (n10 in r10) {
      if (i2 = r10[n10], o10 = t10.dontCallGetSet ? (u2 = /* @__PURE__ */ ec(e10, n10)) && u2.value : e10[n10], !/* @__PURE__ */ en(c2 ? n10 : a2 + (f2 ? "." : "#") + n10, t10.forced) && void 0 !== o10) {
        if (typeof i2 == typeof o10)
          continue;
        er(i2, o10);
      }
      (t10.sham || o10 && o10.sham) && tq(i2, "sham", true), ro(e10, n10, i2, t10);
    }
}, el = TypeError, es = function(t10) {
  return function(r10, e10, n10, o10) {
    var i2 = /* @__PURE__ */ tg(r10), u2 = /* @__PURE__ */ rB(i2), a2 = /* @__PURE__ */ r0(i2);
    tn(e10);
    var c2 = t10 ? a2 - 1 : 0, f2 = t10 ? -1 : 1;
    if (n10 < 2)
      for (; ; ) {
        if (c2 in u2) {
          o10 = u2[c2], c2 += f2;
          break;
        }
        if (c2 += f2, t10 ? c2 < 0 : a2 <= c2)
          throw new el("Reduce of empty array with no initial value");
      }
    for (; t10 ? c2 >= 0 : a2 > c2; c2 += f2)
      c2 in u2 && (o10 = /* @__PURE__ */ e10(o10, u2[c2], c2, i2));
    return o10;
  };
}, ep = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: /* @__PURE__ */ es(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: /* @__PURE__ */ es(true)
}, ey = "process" === rl(O.process), eh = ep.left;
ef({ target: "Array", proto: true, forced: !ey && K > 79 && K < 83 || !((t = [].reduce) && A(function() {
  t.call(null, function() {
    return 1;
  }, 1);
})) }, { reduce: function(t10) {
  var r10 = arguments.length;
  return eh(this, t10, r10, r10 > 1 ? arguments[1] : void 0);
} });
var ed = TypeError, eg = Object.defineProperty, ev = O.self !== O;
try {
  if (x) {
    var eb = /* @__PURE__ */ Object.getOwnPropertyDescriptor(O, "self");
    !ev && eb && eb.get && eb.enumerable || r_(O, "self", { get: function() {
      return O;
    }, set: function(t10) {
      if (this !== O)
        throw new ed("Illegal invocation");
      eg(O, "self", { value: t10, writable: true, configurable: true, enumerable: true });
    }, configurable: true, enumerable: true });
  } else
    ef({ global: true, simple: true, forced: ev }, { self: O });
} catch (t10) {
}
var ew = Function.prototype, em = ew.apply, eA = ew.call, ex = "object" == typeof Reflect && Reflect.apply || (F ? eA.bind(em) : function() {
  return eA.apply(em, arguments);
}), eE = String, eO = TypeError, eT = function(t10, r10, e10) {
  try {
    return $(/* @__PURE__ */ tn(Object.getOwnPropertyDescriptor(t10, r10)[e10]));
  } catch (t11) {
  }
}, eS = function(t10) {
  if (T(t10) || null === t10)
    return t10;
  throw new eO("Can't set " + eE(t10) + " as a prototype");
}, ej = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var t10, r10 = false, e10 = {};
  try {
    (t10 = /* @__PURE__ */ eT(Object.prototype, "__proto__", "set"))(e10, []), r10 = e10 instanceof Array;
  } catch (t11) {
  }
  return function(e11, n10) {
    return C(e11), eS(n10), r10 ? t10(e11, n10) : e11.__proto__ = n10, e11;
  };
}() : void 0), eI = m.f, eR = Error, eP = /* @__PURE__ */ $("".replace), ek = String(new eR("zxcasd").stack), e_ = /\n\s*at [^:]*:[^\n]*/, eC = /* @__PURE__ */ e_.test(ek), eF = !A(function() {
  var t10 = Error("a");
  return !("stack" in t10) || // eslint-disable-next-line es/no-object-defineproperty -- safe
  (Object.defineProperty(t10, "stack", /* @__PURE__ */ tG(1, 7)), 7 !== t10.stack);
}), eM = function(t10, r10) {
  if (eC && "string" == typeof t10 && !eR.prepareStackTrace)
    for (; r10--; )
      t10 = /* @__PURE__ */ eP(t10, e_, "");
  return t10;
}, eL = Error.captureStackTrace, eU = function(t10, r10, e10) {
  e10 in t10 || eI(t10, e10, { configurable: true, get: function() {
    return r10[e10];
  }, set: function(t11) {
    r10[e10] = t11;
  } });
}, eD = function(t10, r10, e10) {
  var n10, o10;
  return ej && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
  w(n10 = r10.constructor) && n10 !== e10 && T(o10 = n10.prototype) && o10 !== e10.prototype && ej(t10, o10), t10;
}, ez = function(t10, r10) {
  T(r10) && "cause" in r10 && tq(t10, "cause", r10.cause);
}, eW = function(t10, r10, e10, n10) {
  eF && (eL ? eL(t10, r10) : tq(t10, "stack", /* @__PURE__ */ eM(e10, n10)));
}, e$ = function(t10, r10, e10, n10) {
  var o10 = "stackTraceLimit", i2 = n10 ? 2 : 1, u2 = /* @__PURE__ */ t10.split("."), a2 = u2[u2.length - 1], c2 = /* @__PURE__ */ U.apply(null, u2);
  if (c2) {
    var f2 = c2.prototype;
    if (tb(f2, "cause") && delete f2.cause, !e10)
      return c2;
    var l2 = /* @__PURE__ */ U("Error"), s2 = r10(function(t11, r11) {
      var e11 = /* @__PURE__ */ function(t12, r12) {
        return void 0 === t12 ? arguments.length < 2 ? "" : r12 : rv(t12);
      }(n10 ? r11 : t11, void 0), o11 = n10 ? new c2(t11) : new c2();
      return void 0 !== e11 && tq(o11, "message", e11), eW(o11, s2, o11.stack, 2), this && B(f2, this) && eD(o11, this, s2), arguments.length > i2 && ez(o11, arguments[i2]), o11;
    });
    s2.prototype = f2, "Error" !== a2 ? ej ? ej(s2, l2) : er(s2, l2, { name: true }) : x && o10 in c2 && (eU(s2, c2, o10), eU(s2, c2, "prepareStackTrace")), er(s2, c2);
    try {
      f2.name !== a2 && tq(f2, "name", a2), f2.constructor = s2;
    } catch (t11) {
    }
    return s2;
  }
}, eB = "WebAssembly", eN = O[eB], eV = 7 !== Error("e", { cause: 7 }).cause, eY = function(t10, r10) {
  var e10 = {};
  e10[t10] = /* @__PURE__ */ e$(t10, r10, eV), ef({ global: true, constructor: true, arity: 1, forced: eV }, e10);
}, eG = function(t10, r10) {
  if (eN && eN[t10]) {
    var e10 = {};
    e10[t10] = /* @__PURE__ */ e$(eB + "." + t10, r10, eV), ef({ target: eB, stat: true, constructor: true, arity: 1, forced: eV }, e10);
  }
};
eY("Error", function(t10) {
  return function(r10) {
    return ex(t10, this, arguments);
  };
}), eY("EvalError", function(t10) {
  return function(r10) {
    return ex(t10, this, arguments);
  };
}), eY("RangeError", function(t10) {
  return function(r10) {
    return ex(t10, this, arguments);
  };
}), eY("ReferenceError", function(t10) {
  return function(r10) {
    return ex(t10, this, arguments);
  };
}), eY("SyntaxError", function(t10) {
  return function(r10) {
    return ex(t10, this, arguments);
  };
}), eY("TypeError", function(t10) {
  return function(r10) {
    return ex(t10, this, arguments);
  };
}), eY("URIError", function(t10) {
  return function(r10) {
    return ex(t10, this, arguments);
  };
}), eG("CompileError", function(t10) {
  return function(r10) {
    return ex(t10, this, arguments);
  };
}), eG("LinkError", function(t10) {
  return function(r10) {
    return ex(t10, this, arguments);
  };
}), eG("RuntimeError", function(t10) {
  return function(r10) {
    return ex(t10, this, arguments);
  };
});
var eq = Array.isArray || function(t10) {
  return "Array" === rl(t10);
}, eK = TypeError, eX = Object.getOwnPropertyDescriptor, eH = x && !function() {
  if (void 0 !== this)
    return true;
  try {
    Object.defineProperty([], "length", { writable: false }).length = 1;
  } catch (t10) {
    return t10 instanceof TypeError;
  }
}() ? function(t10, r10) {
  if (eq(t10) && !eX(t10, "length").writable)
    throw new eK("Cannot set read only .length");
  return t10.length = r10;
} : function(t10, r10) {
  return t10.length = r10;
}, eJ = TypeError, eQ = function(t10) {
  if (t10 > 9007199254740991)
    throw eJ("Maximum allowed index exceeded");
  return t10;
};
ef({ target: "Array", proto: true, arity: 1, forced: /* @__PURE__ */ A(function() {
  return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
}) || !function() {
  try {
    Object.defineProperty([], "length", { writable: false }).push();
  } catch (t10) {
    return t10 instanceof TypeError;
  }
}() }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function(t10) {
    var r10 = /* @__PURE__ */ tg(this), e10 = /* @__PURE__ */ r0(r10), n10 = arguments.length;
    eQ(e10 + n10);
    for (var o10 = 0; o10 < n10; o10++)
      r10[e10] = arguments[o10], e10++;
    return eH(r10, e10), e10;
  }
});
var eZ = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView, e0 = !A(function() {
  function t10() {
  }
  return t10.prototype.constructor = null, Object.getPrototypeOf(new t10()) !== t10.prototype;
}), e1 = /* @__PURE__ */ tX("IE_PROTO"), e2 = Object, e4 = e2.prototype, e9 = e0 ? e2.getPrototypeOf : function(t10) {
  var r10 = /* @__PURE__ */ tg(t10);
  if (tb(r10, e1))
    return r10[e1];
  var e10 = r10.constructor;
  return w(e10) && r10 instanceof e10 ? e10.prototype : r10 instanceof e2 ? e4 : null;
}, e3 = t2.enforce, e7 = t2.get, e6 = O.Int8Array, e8 = e6 && e6.prototype, e5 = O.Uint8ClampedArray, nt = e5 && e5.prototype, nr = e6 && e9(e6), ne = e8 && e9(e8), nn = Object.prototype, no = O.TypeError, ni = /* @__PURE__ */ tS("toStringTag"), nu = /* @__PURE__ */ tx("TYPED_ARRAY_TAG"), na = "TypedArrayConstructor", nc = eZ && !!ej && "Opera" !== rd(O.opera), nf = false, nl = { Int8Array: 1, Uint8Array: 1, Uint8ClampedArray: 1, Int16Array: 2, Uint16Array: 2, Int32Array: 4, Uint32Array: 4, Float32Array: 4, Float64Array: 8 }, ns = { BigInt64Array: 8, BigUint64Array: 8 }, np = function(t10) {
  var r10 = /* @__PURE__ */ e9(t10);
  if (T(r10)) {
    var e10 = /* @__PURE__ */ e7(r10);
    return e10 && tb(e10, na) ? e10[na] : np(r10);
  }
}, ny = function(t10) {
  if (!T(t10))
    return false;
  var r10 = /* @__PURE__ */ rd(t10);
  return tb(nl, r10) || tb(ns, r10);
};
for (f in nl)
  (s = (l = O[f]) && l.prototype) ? e3(s)[na] = l : nc = false;
for (f in ns)
  (s = (l = O[f]) && l.prototype) && (e3(s)[na] = l);
if ((!nc || !w(nr) || nr === Function.prototype) && // eslint-disable-next-line no-shadow -- safe
(nr = function() {
  throw new no("Incorrect invocation");
}, nc))
  for (f in nl)
    O[f] && ej(O[f], nr);
if ((!nc || !ne || ne === nn) && (ne = nr.prototype, nc))
  for (f in nl)
    O[f] && ej(O[f].prototype, ne);
if (nc && e9(nt) !== ne && ej(nt, ne), x && !tb(ne, ni))
  for (f in nf = true, r_(ne, ni, { configurable: true, get: function() {
    return T(this) ? this[nu] : void 0;
  } }), nl)
    O[f] && tq(O[f], nu, f);
var nh = { NATIVE_ARRAY_BUFFER_VIEWS: nc, TYPED_ARRAY_TAG: nf && nu, aTypedArray: function(t10) {
  if (ny(t10))
    return t10;
  throw new no("Target is not a typed array");
}, aTypedArrayConstructor: function(t10) {
  if (w(t10) && (!ej || B(nr, t10)))
    return t10;
  throw new no(tr(t10) + " is not a typed array constructor");
}, exportTypedArrayMethod: function(t10, r10, e10, n10) {
  if (x) {
    if (e10)
      for (var o10 in nl) {
        var i2 = O[o10];
        if (i2 && tb(i2.prototype, t10))
          try {
            delete i2.prototype[t10];
          } catch (e11) {
            try {
              i2.prototype[t10] = r10;
            } catch (t11) {
            }
          }
      }
    (!ne[t10] || e10) && ro(ne, t10, e10 ? r10 : nc && e8[t10] || r10, n10);
  }
}, exportTypedArrayStaticMethod: function(t10, r10, e10) {
  var n10, o10;
  if (x) {
    if (ej) {
      if (e10) {
        for (n10 in nl)
          if ((o10 = O[n10]) && tb(o10, t10))
            try {
              delete o10[t10];
            } catch (t11) {
            }
      }
      if (nr[t10] && !e10)
        return;
      try {
        return ro(nr, t10, e10 ? r10 : nc && nr[t10] || r10);
      } catch (t11) {
      }
    }
    for (n10 in nl)
      (o10 = O[n10]) && (!o10[t10] || e10) && ro(o10, t10, r10);
  }
}, getTypedArrayConstructor: np, isView: function(t10) {
  if (!T(t10))
    return false;
  var r10 = /* @__PURE__ */ rd(t10);
  return "DataView" === r10 || tb(nl, r10) || tb(ns, r10);
}, isTypedArray: ny, TypedArray: nr, TypedArrayPrototype: ne }, nd = nh.aTypedArray;
(0, nh.exportTypedArrayMethod)("at", function(t10) {
  var r10 = /* @__PURE__ */ nd(this), e10 = /* @__PURE__ */ r0(r10), n10 = /* @__PURE__ */ rX(t10), o10 = n10 >= 0 ? n10 : e10 + n10;
  return o10 < 0 || o10 >= e10 ? void 0 : r10[o10];
});
var ng = function(t10) {
  if ("Function" === rl(t10))
    return $(t10);
}, nv = /* @__PURE__ */ ng(ng.bind), nb = function(t10) {
  var r10 = 1 === t10;
  return function(e10, n10, o10) {
    for (var i2, u2 = /* @__PURE__ */ tg(e10), a2 = /* @__PURE__ */ rB(u2), c2 = /* @__PURE__ */ r0(a2), f2 = (tn(n10), void 0 === o10 ? n10 : F ? nv(n10, o10) : function() {
      return n10.apply(o10, arguments);
    }); c2-- > 0; )
      if (/* @__PURE__ */ f2(i2 = a2[c2], c2, u2))
        switch (t10) {
          case 0:
            return i2;
          case 1:
            return c2;
        }
    return r10 ? -1 : void 0;
  };
}, nw = {
  // `Array.prototype.findLast` method
  // https://github.com/tc39/proposal-array-find-from-last
  findLast: /* @__PURE__ */ nb(0),
  // `Array.prototype.findLastIndex` method
  // https://github.com/tc39/proposal-array-find-from-last
  findLastIndex: /* @__PURE__ */ nb(1)
}, nm = nw.findLast, nA = nh.aTypedArray;
(0, nh.exportTypedArrayMethod)("findLast", function(t10) {
  return nm(/* @__PURE__ */ nA(this), t10, arguments.length > 1 ? arguments[1] : void 0);
});
var nx = nw.findLastIndex, nE = nh.aTypedArray;
(0, nh.exportTypedArrayMethod)("findLastIndex", function(t10) {
  return nx(/* @__PURE__ */ nE(this), t10, arguments.length > 1 ? arguments[1] : void 0);
});
var nO = RangeError, nT = function(t10) {
  var r10 = /* @__PURE__ */ rX(t10);
  if (r10 < 0)
    throw new nO("The argument can't be less than 0");
  return r10;
}, nS = RangeError, nj = function(t10, r10) {
  var e10 = /* @__PURE__ */ nT(t10);
  if (e10 % r10)
    throw new nS("Wrong offset");
  return e10;
}, nI = O.RangeError, nR = O.Int8Array, nP = nR && nR.prototype, nk = nP && nP.set, n_ = nh.aTypedArray, nC = nh.exportTypedArrayMethod, nF = !A(function() {
  var t10 = new Uint8ClampedArray(2);
  return L(nk, t10, { length: 1, 0: 3 }, 1), 3 !== t10[1];
}), nM = nF && nh.NATIVE_ARRAY_BUFFER_VIEWS && A(function() {
  var t10 = new nR(2);
  return t10.set(1), t10.set("2", 1), 0 !== t10[0] || 2 !== t10[1];
});
nC("set", function(t10) {
  n_(this);
  var r10 = /* @__PURE__ */ nj(arguments.length > 1 ? arguments[1] : void 0, 1), e10 = /* @__PURE__ */ tg(t10);
  if (nF)
    return L(nk, this, e10, r10);
  var n10 = this.length, o10 = /* @__PURE__ */ r0(e10), i2 = 0;
  if (o10 + r10 > n10)
    throw new nI("Wrong length");
  for (; i2 < o10; )
    this[r10 + i2] = e10[i2++];
}, !nF || nM);
var nL = function(t10, r10) {
  for (var e10 = /* @__PURE__ */ r0(t10), n10 = new r10(e10), o10 = 0; o10 < e10; o10++)
    n10[o10] = t10[e10 - o10 - 1];
  return n10;
}, nU = nh.aTypedArray, nD = nh.exportTypedArrayMethod, nz = nh.getTypedArrayConstructor;
nD("toReversed", function() {
  return nL(/* @__PURE__ */ nU(this), /* @__PURE__ */ nz(this));
});
var nW = function(t10, r10, e10) {
  for (var n10 = 0, o10 = arguments.length > 2 ? e10 : r0(r10), i2 = new t10(o10); o10 > n10; )
    i2[n10] = r10[n10++];
  return i2;
}, n$ = nh.aTypedArray, nB = nh.getTypedArrayConstructor, nN = nh.exportTypedArrayMethod, nV = /* @__PURE__ */ $(nh.TypedArrayPrototype.sort);
nN("toSorted", function(t10) {
  void 0 !== t10 && tn(t10);
  var r10 = /* @__PURE__ */ n$(this);
  return nV(/* @__PURE__ */ nW(/* @__PURE__ */ nB(r10), r10), t10);
});
var nY = RangeError, nG = TypeError, nq = function(t10, r10, e10, n10) {
  var o10 = /* @__PURE__ */ r0(t10), i2 = /* @__PURE__ */ rX(e10), u2 = i2 < 0 ? o10 + i2 : i2;
  if (u2 >= o10 || u2 < 0)
    throw new nY("Incorrect index");
  for (var a2 = new r10(o10), c2 = 0; c2 < o10; c2++)
    a2[c2] = c2 === u2 ? n10 : t10[c2];
  return a2;
}, nK = function(t10) {
  var r10 = /* @__PURE__ */ rd(t10);
  return "BigInt64Array" === r10 || "BigUint64Array" === r10;
}, nX = function(t10) {
  var r10 = /* @__PURE__ */ tP(t10, "number");
  if ("number" == typeof r10)
    throw new nG("Can't convert number to bigint");
  return BigInt(r10);
}, nH = nh.aTypedArray, nJ = nh.getTypedArrayConstructor;
(0, nh.exportTypedArrayMethod)("with", { with: function(t10, r10) {
  var e10 = /* @__PURE__ */ nH(this), n10 = /* @__PURE__ */ rX(t10), o10 = nK(e10) ? nX(r10) : +r10;
  return nq(e10, /* @__PURE__ */ nJ(e10), n10, o10);
} }.with, !function() {
  try {
    new Int8Array(1).with(2, { valueOf: function() {
      throw 8;
    } });
  } catch (t10) {
    return 8 === t10;
  }
}());
var nQ = {}, nZ = Object.keys || function(t10) {
  return r3(t10, r7);
};
nQ.f = x && !P ? Object.defineProperties : function(t10, r10) {
  C(t10);
  for (var e10, n10 = /* @__PURE__ */ rN(r10), o10 = /* @__PURE__ */ nZ(r10), i2 = o10.length, u2 = 0; i2 > u2; )
    m.f(t10, e10 = o10[u2++], n10[e10]);
  return t10;
};
var n0 = /* @__PURE__ */ U("document", "documentElement"), n1 = "prototype", n2 = "script", n4 = /* @__PURE__ */ tX("IE_PROTO"), n9 = function() {
}, n3 = function(t10) {
  return "<" + n2 + ">" + t10 + "</" + n2 + ">";
}, n7 = function(t10) {
  t10.write(/* @__PURE__ */ n3("")), t10.close();
  var r10 = t10.parentWindow.Object;
  return t10 = null, r10;
}, n6 = function() {
  var t10, r10 = /* @__PURE__ */ I("iframe");
  return r10.style.display = "none", n0.appendChild(r10), // https://github.com/zloirock/core-js/issues/475
  r10.src = /* @__PURE__ */ String("java" + n2 + ":"), (t10 = r10.contentWindow.document).open(), t10.write(/* @__PURE__ */ n3("document.F=Object")), t10.close(), t10.F;
}, n8 = function() {
  try {
    p = new ActiveXObject("htmlfile");
  } catch (t11) {
  }
  n8 = "undefined" != typeof document ? document.domain && p ? n7(p) : n6() : n7(p);
  for (var t10 = r7.length; t10--; )
    delete n8[n1][r7[t10]];
  return n8();
};
tH[n4] = true;
var n5 = Object.create || function(t10, r10) {
  var e10;
  return null !== t10 ? (n9[n1] = /* @__PURE__ */ C(t10), e10 = new n9(), n9[n1] = null, // add "__proto__" for Object.getPrototypeOf polyfill
  e10[n4] = t10) : e10 = /* @__PURE__ */ n8(), void 0 === r10 ? e10 : nQ.f(e10, r10);
}, ot = m.f, or = /* @__PURE__ */ tS("toStringTag"), oe = function(t10, r10, e10) {
  t10 && !e10 && (t10 = t10.prototype), t10 && !tb(t10, or) && ot(t10, or, { configurable: true, value: r10 });
};
ef({ global: true }, { Reflect: {} }), // Reflect[@@toStringTag] property
// https://tc39.es/ecma262/#sec-reflect-@@tostringtag
oe(O.Reflect, "Reflect", true);
var on = /* @__PURE__ */ tS("match"), oo = function(t10) {
  var r10;
  return T(t10) && (void 0 !== (r10 = t10[on]) ? !!r10 : "RegExp" === rl(t10));
}, oi = function() {
  var t10 = /* @__PURE__ */ C(this), r10 = "";
  return t10.hasIndices && (r10 += "d"), t10.global && (r10 += "g"), t10.ignoreCase && (r10 += "i"), t10.multiline && (r10 += "m"), t10.dotAll && (r10 += "s"), t10.unicode && (r10 += "u"), t10.unicodeSets && (r10 += "v"), t10.sticky && (r10 += "y"), r10;
}, ou = RegExp.prototype, oa = function(t10) {
  var r10 = t10.flags;
  return void 0 === r10 && !("flags" in ou) && !tb(t10, "flags") && B(ou, t10) ? L(oi, t10) : r10;
}, oc = Math.floor, of = /* @__PURE__ */ $("".charAt), ol = /* @__PURE__ */ $("".replace), os = /* @__PURE__ */ $("".slice), op = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, oy = /\$([$&'`]|\d{1,2})/g, oh = function(t10, r10, e10, n10, o10, i2) {
  var u2 = e10 + t10.length, a2 = n10.length, c2 = oy;
  return void 0 !== o10 && (o10 = /* @__PURE__ */ tg(o10), c2 = op), ol(i2, c2, function(i3, c3) {
    var f2;
    switch (of(c3, 0)) {
      case "$":
        return "$";
      case "&":
        return t10;
      case "`":
        return os(r10, 0, e10);
      case "'":
        return os(r10, u2);
      case "<":
        f2 = o10[os(c3, 1, -1)];
        break;
      default:
        var l2 = +c3;
        if (0 === l2)
          return i3;
        if (l2 > a2) {
          var s2 = /* @__PURE__ */ oc(l2 / 10);
          if (0 === s2)
            return i3;
          if (s2 <= a2)
            return void 0 === n10[s2 - 1] ? of(c3, 1) : n10[s2 - 1] + of(c3, 1);
          return i3;
        }
        f2 = n10[l2 - 1];
    }
    return void 0 === f2 ? "" : f2;
  });
}, od = /* @__PURE__ */ tS("replace"), og = TypeError, ov = /* @__PURE__ */ $("".indexOf);
$("".replace);
var ob = /* @__PURE__ */ $("".slice), ow = Math.max, om = function(t10, r10, e10) {
  return e10 > t10.length ? -1 : "" === r10 ? e10 : ov(t10, r10, e10);
};
ef({ target: "String", proto: true }, { replaceAll: function(t10, r10) {
  var e10, n10, o10, i2, u2, a2, c2, f2 = /* @__PURE__ */ th(this), l2 = 0, s2 = 0, p2 = "";
  if (!to(t10)) {
    if (/* @__PURE__ */ oo(t10) && !~ov(/* @__PURE__ */ rv(/* @__PURE__ */ th(/* @__PURE__ */ oa(t10))), "g"))
      throw new og("`.replaceAll` does not allow non-global regexes");
    if (e10 = /* @__PURE__ */ ti(t10, od))
      return L(e10, t10, f2, r10);
  }
  for (n10 = /* @__PURE__ */ rv(f2), o10 = /* @__PURE__ */ rv(t10), (i2 = /* @__PURE__ */ w(r10)) || (r10 = /* @__PURE__ */ rv(r10)), a2 = /* @__PURE__ */ ow(1, u2 = o10.length), l2 = /* @__PURE__ */ om(n10, o10, 0); -1 !== l2; )
    c2 = i2 ? rv(/* @__PURE__ */ r10(o10, l2, n10)) : oh(o10, n10, l2, [], void 0, r10), p2 += ob(n10, s2, l2) + c2, s2 = l2 + u2, l2 = /* @__PURE__ */ om(n10, o10, l2 + a2);
  return s2 < n10.length && (p2 += /* @__PURE__ */ ob(n10, s2)), p2;
} });
var oA = /* @__PURE__ */ tS("iterator");
[].keys && "next" in (d = /* @__PURE__ */ [].keys()) && (h = /* @__PURE__ */ e9(/* @__PURE__ */ e9(d))) !== Object.prototype && (y = h), (!T(y) || A(function() {
  var t10 = {};
  return y[oA].call(t10) !== t10;
})) && (y = {}), w(y[oA]) || ro(y, oA, function() {
  return this;
});
var ox = y, oE = function() {
}, oO = [], oT = /* @__PURE__ */ U("Reflect", "construct"), oS = /^\s*(?:class|function)\b/, oj = /* @__PURE__ */ $(oS.exec), oI = !oS.test(oE), oR = function(t10) {
  if (!w(t10))
    return false;
  try {
    return oT(oE, oO, t10), true;
  } catch (t11) {
    return false;
  }
}, oP = function(t10) {
  if (!w(t10))
    return false;
  switch (rd(t10)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return false;
  }
  try {
    return oI || !!oj(oS, /* @__PURE__ */ tN(t10));
  } catch (t11) {
    return true;
  }
};
oP.sham = true;
var ok = !oT || A(function() {
  var t10;
  return oR(oR.call) || !oR(Object) || !oR(function() {
    t10 = true;
  }) || t10;
}) ? oP : oR, o_ = TypeError, oC = function(t10) {
  if (ok(t10))
    return t10;
  throw new o_(tr(t10) + " is not a constructor");
}, oF = /* @__PURE__ */ tS("species"), oM = /* @__PURE__ */ $("".charAt), oL = /* @__PURE__ */ $("".charCodeAt), oU = /* @__PURE__ */ $("".slice), oD = function(t10) {
  return function(r10, e10) {
    var n10, o10, i2 = /* @__PURE__ */ rv(/* @__PURE__ */ th(r10)), u2 = /* @__PURE__ */ rX(e10), a2 = i2.length;
    return u2 < 0 || u2 >= a2 ? t10 ? "" : void 0 : (n10 = /* @__PURE__ */ oL(i2, u2)) < 55296 || n10 > 56319 || u2 + 1 === a2 || (o10 = /* @__PURE__ */ oL(i2, u2 + 1)) < 56320 || o10 > 57343 ? t10 ? oM(i2, u2) : n10 : t10 ? oU(i2, u2, u2 + 2) : (n10 - 55296 << 10) + (o10 - 56320) + 65536;
  };
}, oz = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: /* @__PURE__ */ oD(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: /* @__PURE__ */ oD(true)
}.charAt, oW = O.RegExp, o$ = /* @__PURE__ */ A(function() {
  var t10 = /* @__PURE__ */ oW("a", "y");
  return t10.lastIndex = 2, null !== t10.exec("abcd");
}), oB = (o$ || A(function() {
  return !oW("a", "y").sticky;
}), o$ || A(function() {
  var t10 = /* @__PURE__ */ oW("^r", "gy");
  return t10.lastIndex = 2, null !== t10.exec("str");
})), oN = O.RegExp, oV = /* @__PURE__ */ A(function() {
  var t10 = /* @__PURE__ */ oN(".", "s");
  return !(t10.dotAll && t10.test("\n") && "s" === t10.flags);
}), oY = O.RegExp, oG = /* @__PURE__ */ A(function() {
  var t10 = /* @__PURE__ */ oY("(?<a>b)", "g");
  return "b" !== t10.exec("b").groups.a || "bc" !== "b".replace(t10, "$<a>c");
}), oq = t2.get, oK = /* @__PURE__ */ tp("native-string-replace", String.prototype.replace), oX = RegExp.prototype.exec, oH = oX, oJ = /* @__PURE__ */ $("".charAt), oQ = /* @__PURE__ */ $("".indexOf), oZ = /* @__PURE__ */ $("".replace), o0 = /* @__PURE__ */ $("".slice), o1 = (e = /b*/g, L(oX, r = /a/, "a"), L(oX, e, "a"), 0 !== r.lastIndex || 0 !== e.lastIndex), o2 = void 0 !== /()??/.exec("")[1];
(o1 || o2 || oB || oV || oG) && (oH = function(t10) {
  var r10, e10, n10, o10, i2, u2, a2, c2 = /* @__PURE__ */ oq(this), f2 = /* @__PURE__ */ rv(t10), l2 = c2.raw;
  if (l2)
    return l2.lastIndex = this.lastIndex, r10 = /* @__PURE__ */ L(oH, l2, f2), this.lastIndex = l2.lastIndex, r10;
  var s2 = c2.groups, p2 = oB && this.sticky, y2 = /* @__PURE__ */ L(oi, this), h2 = this.source, d2 = 0, g2 = f2;
  if (p2 && (-1 === oQ(y2 = /* @__PURE__ */ oZ(y2, "y", ""), "g") && (y2 += "g"), g2 = /* @__PURE__ */ o0(f2, this.lastIndex), this.lastIndex > 0 && (!this.multiline || this.multiline && "\n" !== oJ(f2, this.lastIndex - 1)) && (h2 = "(?: " + h2 + ")", g2 = " " + g2, d2++), // ^(? + rx + ) is needed, in combination with some str slicing, to
  // simulate the 'y' flag.
  e10 = RegExp("^(?:" + h2 + ")", y2)), o2 && (e10 = RegExp("^" + h2 + "$(?!\\s)", y2)), o1 && (n10 = this.lastIndex), o10 = /* @__PURE__ */ L(oX, p2 ? e10 : this, g2), p2 ? o10 ? (o10.input = /* @__PURE__ */ o0(o10.input, d2), o10[0] = /* @__PURE__ */ o0(o10[0], d2), o10.index = this.lastIndex, this.lastIndex += o10[0].length) : this.lastIndex = 0 : o1 && o10 && (this.lastIndex = this.global ? o10.index + o10[0].length : n10), o2 && o10 && o10.length > 1 && // Fix browsers whose `exec` methods don't consistently return `undefined`
  // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
  L(oK, o10[0], e10, function() {
    for (i2 = 1; i2 < arguments.length - 2; i2++)
      void 0 === arguments[i2] && (o10[i2] = void 0);
  }), o10 && s2)
    for (i2 = 0, o10.groups = u2 = /* @__PURE__ */ n5(null); i2 < s2.length; i2++)
      u2[(a2 = s2[i2])[0]] = o10[a2[1]];
  return o10;
});
var o4 = oH, o9 = TypeError, o3 = function(t10, r10) {
  return { value: t10, done: r10 };
}, o7 = function(t10, r10) {
  var e10, n10 = C(t10).constructor;
  return void 0 === n10 || to(e10 = C(n10)[oF]) ? r10 : oC(e10);
}, o6 = function(t10, r10) {
  var e10 = t10.exec;
  if (w(e10)) {
    var n10 = /* @__PURE__ */ L(e10, t10, r10);
    return null !== n10 && C(n10), n10;
  }
  if ("RegExp" === rl(t10))
    return L(o4, t10, r10);
  throw new o9("RegExp#exec called on incompatible receiver");
}, o8 = /* @__PURE__ */ tS("matchAll"), o5 = "RegExp String", it = o5 + " Iterator", ir = t2.set, ie = /* @__PURE__ */ t2.getterFor(it), io = RegExp.prototype, ii = TypeError, iu = /* @__PURE__ */ ng("".indexOf), ia = /* @__PURE__ */ ng("".matchAll), ic = !!ia && !A(function() {
  ia("a", /./);
}), il = ((n = function(t10, r10, e10, n10) {
  ir(this, { type: it, regexp: t10, string: r10, global: e10, unicode: n10, done: false });
}).prototype = /* @__PURE__ */ n5(ox, { next: /* @__PURE__ */ tG(1, function() {
  var t10, r10 = /* @__PURE__ */ ie(this);
  if (r10.done)
    return o3(void 0, true);
  var e10 = r10.regexp, n10 = r10.string, o10 = /* @__PURE__ */ o6(e10, n10);
  return null === o10 ? (r10.done = true, o3(void 0, true)) : (r10.global ? "" === rv(o10[0]) && (e10.lastIndex = (t10 = /* @__PURE__ */ rZ(e10.lastIndex)) + (r10.unicode ? oz(n10, t10).length : 1)) : r10.done = true, o3(o10, false));
}) }), oe(n, o5 + " Iterator", false), n);
ef({ target: "String", proto: true, forced: ic }, { matchAll: function(t10) {
  var r10, e10, n10 = /* @__PURE__ */ th(this);
  if (to(t10)) {
    if (ic)
      return ia(n10, t10);
  } else {
    if (oo(t10) && !~iu(/* @__PURE__ */ rv(/* @__PURE__ */ th(/* @__PURE__ */ oa(t10))), "g"))
      throw new ii("`.matchAll` does not allow non-global regexes");
    if (ic)
      return ia(n10, t10);
    if (e10 = /* @__PURE__ */ ti(t10, o8))
      return L(e10, t10, n10);
  }
  return r10 = /* @__PURE__ */ rv(n10), RegExp(t10, "g")[o8](r10);
} }), o8 in io || ro(io, o8, function(t10) {
  var r10, e10, n10, o10 = /* @__PURE__ */ C(this), i2 = /* @__PURE__ */ rv(t10), u2 = /* @__PURE__ */ o7(o10, RegExp), a2 = /* @__PURE__ */ rv(/* @__PURE__ */ oa(o10));
  return r10 = new u2(u2 === RegExp ? o10.source : o10, a2), e10 = !!~iu(a2, "g"), n10 = !!~iu(a2, "u"), r10.lastIndex = /* @__PURE__ */ rZ(o10.lastIndex), new il(r10, i2, e10, n10);
});
export {
  v as g
};
