var t, r, e, n, o, i, u, a, c, f, l, s, p, y, h, d, g = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function v(t2) {
  return t2 && t2.__esModule && Object.prototype.hasOwnProperty.call(t2, "default") ? t2.default : t2;
}
var b = "object" == typeof document && document.all, w = void 0 === b && void 0 !== b ? function(t2) {
  return "function" == typeof t2 || t2 === b;
} : function(t2) {
  return "function" == typeof t2;
}, m = {}, A = function(t2) {
  try {
    return !!t2();
  } catch (t10) {
    return true;
  }
}, x = !A(function() {
  return 7 !== Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1];
}), E = function(t2) {
  return t2 && t2.Math === Math && t2;
}, O = (
  // eslint-disable-next-line es/no-global-this -- safe
  E("object" == typeof globalThis && globalThis) || E("object" == typeof window && window) || // eslint-disable-next-line no-restricted-globals -- safe
  E("object" == typeof self && self) || E("object" == typeof g && g) || E("object" == typeof g && g) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")()
), T = function(t2) {
  return "object" == typeof t2 ? null !== t2 : w(t2);
}, S = O.document, j = T(S) && T(S.createElement), I = function(t2) {
  return j ? S.createElement(t2) : {};
}, R = !x && !A(function() {
  return 7 !== Object.defineProperty(/* @__PURE__ */ I("div"), "a", { get: function() {
    return 7;
  } }).a;
}), P = x && A(function() {
  return 42 !== Object.defineProperty(function() {
  }, "prototype", { value: 42, writable: false }).prototype;
}), k = String, _ = TypeError, C = function(t2) {
  if (T(t2))
    return t2;
  throw new _(k(t2) + " is not an object");
}, F = !A(function() {
  var t2 = /* @__PURE__ */ (function() {
  }).bind();
  return "function" != typeof t2 || t2.hasOwnProperty("prototype");
}), M = Function.prototype.call, L = F ? M.bind(M) : function() {
  return M.apply(M, arguments);
}, U = function(t2, r10) {
  var e10;
  return arguments.length < 2 ? w(e10 = O[t2]) ? e10 : void 0 : O[t2] && O[t2][r10];
}, D = Function.prototype, z = D.call, W = F && D.bind.bind(z, z), $ = F ? W : function(t2) {
  return function() {
    return z.apply(t2, arguments);
  };
}, B = /* @__PURE__ */ $({}.isPrototypeOf), N = "undefined" != typeof navigator && String(navigator.userAgent) || "", V = O.process, Y = O.Deno, G = V && V.versions || Y && Y.version, q = G && G.v8;
q && // in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(i = (o = /* @__PURE__ */ q.split("."))[0] > 0 && o[0] < 4 ? 1 : +(o[0] + o[1])), !i && N && (!(o = /* @__PURE__ */ N.match(/Edge\/(\d+)/)) || o[1] >= 74) && (o = /* @__PURE__ */ N.match(/Chrome\/(\d+)/)) && (i = +o[1]);
var K = i, X = O.String, H = !!Object.getOwnPropertySymbols && !A(function() {
  var t2 = /* @__PURE__ */ Symbol("symbol detection");
  return !X(t2) || !(Object(t2) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && K && K < 41;
}), J = H && !Symbol.sham && "symbol" == typeof Symbol.iterator, Q = Object, Z = J ? function(t2) {
  return "symbol" == typeof t2;
} : function(t2) {
  var r10 = /* @__PURE__ */ U("Symbol");
  return w(r10) && B(r10.prototype, /* @__PURE__ */ Q(t2));
}, tt = String, tr = function(t2) {
  try {
    return tt(t2);
  } catch (t10) {
    return "Object";
  }
}, te = TypeError, tn = function(t2) {
  if (w(t2))
    return t2;
  throw new te(tr(t2) + " is not a function");
}, to = function(t2) {
  return null == t2;
}, ti = function(t2, r10) {
  var e10 = t2[r10];
  return to(e10) ? void 0 : tn(e10);
}, tu = TypeError, ta = { exports: {} }, tc = Object.defineProperty, tf = function(t2, r10) {
  try {
    tc(O, t2, { value: r10, configurable: true, writable: true });
  } catch (e10) {
    O[t2] = r10;
  }
  return r10;
}, tl = "__core-js_shared__", ts = ta.exports = O[tl] || tf(tl, {});
(ts.versions || (ts.versions = [])).push({ version: "3.36.0", mode: "global", copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE", source: "https://github.com/zloirock/core-js" });
var tp = ta.exports, ty = function(t2, r10) {
  return tp[t2] || (tp[t2] = r10 || {});
}, th = TypeError, td = function(t2) {
  if (to(t2))
    throw new th("Can't call method on " + t2);
  return t2;
}, tg = Object, tv = function(t2) {
  return tg(/* @__PURE__ */ td(t2));
}, tb = /* @__PURE__ */ $({}.hasOwnProperty), tw = Object.hasOwn || function(t2, r10) {
  return tb(/* @__PURE__ */ tv(t2), r10);
}, tm = 0, tA = /* @__PURE__ */ Math.random(), tx = /* @__PURE__ */ $(1 .toString), tE = function(t2) {
  return "Symbol(" + (void 0 === t2 ? "" : t2) + ")_" + tx(++tm + tA, 36);
}, tO = O.Symbol, tT = /* @__PURE__ */ ty("wks"), tS = J ? tO.for || tO : tO && tO.withoutSetter || tE, tj = function(t2) {
  return tw(tT, t2) || (tT[t2] = H && tw(tO, t2) ? tO[t2] : tS("Symbol." + t2)), tT[t2];
}, tI = function(t2, r10) {
  var e10, n10;
  if ("string" === r10 && w(e10 = t2.toString) && !T(n10 = /* @__PURE__ */ L(e10, t2)) || w(e10 = t2.valueOf) && !T(n10 = /* @__PURE__ */ L(e10, t2)) || "string" !== r10 && w(e10 = t2.toString) && !T(n10 = /* @__PURE__ */ L(e10, t2)))
    return n10;
  throw new tu("Can't convert object to primitive value");
}, tR = TypeError, tP = /* @__PURE__ */ tj("toPrimitive"), tk = function(t2, r10) {
  if (!T(t2) || Z(t2))
    return t2;
  var e10, n10 = /* @__PURE__ */ ti(t2, tP);
  if (n10) {
    if (void 0 === r10 && (r10 = "default"), !T(e10 = /* @__PURE__ */ L(n10, t2, r10)) || Z(e10))
      return e10;
    throw new tR("Can't convert object to primitive value");
  }
  return void 0 === r10 && (r10 = "number"), tI(t2, r10);
}, t_ = function(t2) {
  var r10 = /* @__PURE__ */ tk(t2, "string");
  return Z(r10) ? r10 : r10 + "";
}, tC = TypeError, tF = Object.defineProperty, tM = Object.getOwnPropertyDescriptor, tL = "enumerable", tU = "configurable", tD = "writable";
m.f = x ? P ? function(t2, r10, e10) {
  if (C(t2), r10 = /* @__PURE__ */ t_(r10), C(e10), "function" == typeof t2 && "prototype" === r10 && "value" in e10 && tD in e10 && !e10[tD]) {
    var n10 = /* @__PURE__ */ tM(t2, r10);
    n10 && n10[tD] && (t2[r10] = e10.value, e10 = { configurable: tU in e10 ? e10[tU] : n10[tU], enumerable: tL in e10 ? e10[tL] : n10[tL], writable: false });
  }
  return tF(t2, r10, e10);
} : tF : function(t2, r10, e10) {
  if (C(t2), r10 = /* @__PURE__ */ t_(r10), C(e10), R)
    try {
      return tF(t2, r10, e10);
    } catch (t10) {
    }
  if ("get" in e10 || "set" in e10)
    throw new tC("Accessors not supported");
  return "value" in e10 && (t2[r10] = e10.value), t2;
};
var tz = { exports: {} }, tW = Function.prototype, t$ = x && Object.getOwnPropertyDescriptor, tB = /* @__PURE__ */ tw(tW, "name") && (!x || x && t$(tW, "name").configurable), tN = /* @__PURE__ */ $(Function.toString);
w(tp.inspectSource) || (tp.inspectSource = function(t2) {
  return tN(t2);
});
var tV = tp.inspectSource, tY = O.WeakMap, tG = w(tY) && /native code/.test(/* @__PURE__ */ String(tY)), tq = function(t2, r10) {
  return { enumerable: !(1 & t2), configurable: !(2 & t2), writable: !(4 & t2), value: r10 };
}, tK = x ? function(t2, r10, e10) {
  return m.f(t2, r10, /* @__PURE__ */ tq(1, e10));
} : function(t2, r10, e10) {
  return t2[r10] = e10, t2;
}, tX = /* @__PURE__ */ ty("keys"), tH = function(t2) {
  return tX[t2] || (tX[t2] = /* @__PURE__ */ tE(t2));
}, tJ = {}, tQ = "Object already initialized", tZ = O.TypeError, t0 = O.WeakMap;
if (tG || tp.state) {
  var t1 = tp.state || (tp.state = new t0());
  t1.get = t1.get, t1.has = t1.has, t1.set = t1.set, /* eslint-enable no-self-assign -- prototype methods protection */
  u = function(t2, r10) {
    if (t1.has(t2))
      throw new tZ(tQ);
    return r10.facade = t2, t1.set(t2, r10), r10;
  }, a = function(t2) {
    return t1.get(t2) || {};
  }, c = function(t2) {
    return t1.has(t2);
  };
} else {
  var t2 = /* @__PURE__ */ tH("state");
  tJ[t2] = true, u = function(t10, r10) {
    if (tw(t10, t2))
      throw new tZ(tQ);
    return r10.facade = t10, tK(t10, t2, r10), r10;
  }, a = function(t10) {
    return tw(t10, t2) ? t10[t2] : {};
  }, c = function(t10) {
    return tw(t10, t2);
  };
}
var t4 = { set: u, get: a, has: c, enforce: function(t2) {
  return c(t2) ? a(t2) : u(t2, {});
}, getterFor: function(t2) {
  return function(r10) {
    var e10;
    if (!T(r10) || (e10 = /* @__PURE__ */ a(r10)).type !== t2)
      throw new tZ("Incompatible receiver, " + t2 + " required");
    return e10;
  };
} }, t9 = t4.enforce, t6 = t4.get, t7 = String, t3 = Object.defineProperty, t8 = /* @__PURE__ */ $("".slice), t5 = /* @__PURE__ */ $("".replace), rt = /* @__PURE__ */ $([].join), rr = x && !A(function() {
  return 8 !== t3(function() {
  }, "length", { value: 8 }).length;
}), re = /* @__PURE__ */ String(String).split("String"), rn = tz.exports = function(t2, r10, e10) {
  "Symbol(" === t8(/* @__PURE__ */ t7(r10), 0, 7) && (r10 = "[" + t5(/* @__PURE__ */ t7(r10), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), e10 && e10.getter && (r10 = "get " + r10), e10 && e10.setter && (r10 = "set " + r10), (!tw(t2, "name") || tB && t2.name !== r10) && (x ? t3(t2, "name", { value: r10, configurable: true }) : t2.name = r10), rr && e10 && tw(e10, "arity") && t2.length !== e10.arity && t3(t2, "length", { value: e10.arity });
  try {
    e10 && tw(e10, "constructor") && e10.constructor ? x && t3(t2, "prototype", { writable: false }) : t2.prototype && (t2.prototype = void 0);
  } catch (t10) {
  }
  var n10 = /* @__PURE__ */ t9(t2);
  return tw(n10, "source") || (n10.source = /* @__PURE__ */ rt(re, "string" == typeof r10 ? r10 : "")), t2;
};
Function.prototype.toString = /* @__PURE__ */ rn(function() {
  return w(this) && t6(this).source || tV(this);
}, "toString");
var ro = tz.exports, ri = function(t2, r10, e10, n10) {
  n10 || (n10 = {});
  var o10 = n10.enumerable, i2 = void 0 !== n10.name ? n10.name : r10;
  if (w(e10) && ro(e10, i2, n10), n10.global)
    o10 ? t2[r10] = e10 : tf(r10, e10);
  else {
    try {
      n10.unsafe ? t2[r10] && (o10 = true) : delete t2[r10];
    } catch (t10) {
    }
    o10 ? t2[r10] = e10 : m.f(t2, r10, { value: e10, enumerable: false, configurable: !n10.nonConfigurable, writable: !n10.nonWritable });
  }
  return t2;
}, ru = /* @__PURE__ */ tj("toStringTag"), ra = {};
ra[ru] = "z";
var rc = "[object z]" === String(ra), rf = /* @__PURE__ */ $({}.toString), rl = /* @__PURE__ */ $("".slice), rs = function(t2) {
  return rl(/* @__PURE__ */ rf(t2), 8, -1);
}, rp = /* @__PURE__ */ tj("toStringTag"), ry = Object, rh = "Arguments" === rs(/* @__PURE__ */ function() {
  return arguments;
}()), rd = function(t2, r10) {
  try {
    return t2[r10];
  } catch (t10) {
  }
}, rg = rc ? rs : function(t2) {
  var r10, e10, n10;
  return void 0 === t2 ? "Undefined" : null === t2 ? "Null" : "string" == typeof (e10 = /* @__PURE__ */ rd(r10 = /* @__PURE__ */ ry(t2), rp)) ? e10 : rh ? rs(r10) : "Object" === (n10 = /* @__PURE__ */ rs(r10)) && w(r10.callee) ? "Arguments" : n10;
}, rv = String, rb = function(t2) {
  if ("Symbol" === rg(t2))
    throw TypeError("Cannot convert a Symbol value to a string");
  return rv(t2);
}, rw = TypeError, rm = function(t2, r10) {
  if (t2 < r10)
    throw new rw("Not enough arguments");
  return t2;
}, rA = URLSearchParams, rx = rA.prototype, rE = /* @__PURE__ */ $(rx.append), rO = /* @__PURE__ */ $(rx.delete), rT = /* @__PURE__ */ $(rx.forEach), rS = /* @__PURE__ */ $([].push), rj = new rA("a=1&a=2&b=3");
rj.delete("a", 1), // `undefined` case is a Chromium 117 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=14222
rj.delete("b", void 0), rj + "" != "a=2" && ri(rx, "delete", function(t2) {
  var r10, e10 = arguments.length, n10 = e10 < 2 ? void 0 : arguments[1];
  if (e10 && void 0 === n10)
    return rO(this, t2);
  var o10 = [];
  rT(this, function(t10, r11) {
    rS(o10, { key: r11, value: t10 });
  }), rm(e10, 1);
  for (var i2 = /* @__PURE__ */ rb(t2), u2 = /* @__PURE__ */ rb(n10), a2 = 0, c2 = 0, f2 = false, l2 = o10.length; a2 < l2; )
    r10 = o10[a2++], f2 || r10.key === i2 ? (f2 = true, rO(this, r10.key)) : c2++;
  for (; c2 < l2; )
    (r10 = o10[c2++]).key === i2 && r10.value === u2 || rE(this, r10.key, r10.value);
}, { enumerable: true, unsafe: true });
var rI = URLSearchParams, rR = rI.prototype, rP = /* @__PURE__ */ $(rR.getAll), rk = /* @__PURE__ */ $(rR.has), r_ = new rI("a=1");
(r_.has("a", 2) || !r_.has("a", void 0)) && ri(rR, "has", function(t2) {
  var r10 = arguments.length, e10 = r10 < 2 ? void 0 : arguments[1];
  if (r10 && void 0 === e10)
    return rk(this, t2);
  var n10 = /* @__PURE__ */ rP(this, t2);
  rm(r10, 1);
  for (var o10 = /* @__PURE__ */ rb(e10), i2 = 0; i2 < n10.length; )
    if (n10[i2++] === o10)
      return true;
  return false;
}, { enumerable: true, unsafe: true });
var rC = function(t2, r10, e10) {
  return e10.get && ro(e10.get, r10, { getter: true }), e10.set && ro(e10.set, r10, { setter: true }), m.f(t2, r10, e10);
}, rF = URLSearchParams.prototype, rM = /* @__PURE__ */ $(rF.forEach);
!x || "size" in rF || rC(rF, "size", { get: function() {
  var t2 = 0;
  return rM(this, function() {
    t2++;
  }), t2;
}, configurable: true, enumerable: true });
var rL = {}, rU = {}, rD = {}.propertyIsEnumerable, rz = Object.getOwnPropertyDescriptor, rW = rz && !rD.call({ 1: 2 }, 1);
rU.f = rW ? function(t2) {
  var r10 = /* @__PURE__ */ rz(this, t2);
  return !!r10 && r10.enumerable;
} : rD;
var r$ = Object, rB = /* @__PURE__ */ $("".split), rN = A(function() {
  return !r$("z").propertyIsEnumerable(0);
}) ? function(t2) {
  return "String" === rs(t2) ? rB(t2, "") : r$(t2);
} : r$, rV = function(t2) {
  return rN(/* @__PURE__ */ td(t2));
}, rY = Object.getOwnPropertyDescriptor;
rL.f = x ? rY : function(t2, r10) {
  if (t2 = /* @__PURE__ */ rV(t2), r10 = /* @__PURE__ */ t_(r10), R)
    try {
      return rY(t2, r10);
    } catch (t10) {
    }
  if (tw(t2, r10))
    return tq(!L(rU.f, t2, r10), t2[r10]);
};
var rG = {}, rq = Math.ceil, rK = Math.floor, rX = Math.trunc || function(t2) {
  var r10 = +t2;
  return (r10 > 0 ? rK : rq)(r10);
}, rH = function(t2) {
  var r10 = +t2;
  return r10 != r10 || 0 === r10 ? 0 : rX(r10);
}, rJ = Math.max, rQ = Math.min, rZ = Math.min, r0 = function(t2) {
  var r10 = /* @__PURE__ */ rH(t2);
  return r10 > 0 ? rZ(r10, 9007199254740991) : 0;
}, r1 = function(t2) {
  return r0(t2.length);
}, r2 = function(t2, r10) {
  var e10 = /* @__PURE__ */ rH(t2);
  return e10 < 0 ? rJ(e10 + r10, 0) : rQ(e10, r10);
}, r4 = function(t2) {
  return function(r10, e10, n10) {
    var o10, i2 = /* @__PURE__ */ rV(r10), u2 = /* @__PURE__ */ r1(i2);
    if (0 === u2)
      return !t2 && -1;
    var a2 = /* @__PURE__ */ r2(n10, u2);
    if (t2 && e10 != e10) {
      for (; u2 > a2; )
        if ((o10 = i2[a2++]) != o10)
          return true;
    } else
      for (; u2 > a2; a2++)
        if ((t2 || a2 in i2) && i2[a2] === e10)
          return t2 || a2 || 0;
    return !t2 && -1;
  };
}, r9 = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: /* @__PURE__ */ r4(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: /* @__PURE__ */ r4(false)
}.indexOf, r6 = /* @__PURE__ */ $([].push), r7 = function(t2, r10) {
  var e10, n10 = /* @__PURE__ */ rV(t2), o10 = 0, i2 = [];
  for (e10 in n10)
    !tw(tJ, e10) && tw(n10, e10) && r6(i2, e10);
  for (; r10.length > o10; )
    tw(n10, e10 = r10[o10++]) && (~r9(i2, e10) || r6(i2, e10));
  return i2;
}, r3 = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], r8 = /* @__PURE__ */ r3.concat("length", "prototype");
rG.f = Object.getOwnPropertyNames || function(t2) {
  return r7(t2, r8);
};
var r5 = {};
r5.f = Object.getOwnPropertySymbols;
var et = /* @__PURE__ */ $([].concat), er = U("Reflect", "ownKeys") || function(t2) {
  var r10 = /* @__PURE__ */ rG.f(/* @__PURE__ */ C(t2)), e10 = r5.f;
  return e10 ? et(r10, /* @__PURE__ */ e10(t2)) : r10;
}, ee = function(t2, r10, e10) {
  for (var n10 = /* @__PURE__ */ er(r10), o10 = m.f, i2 = rL.f, u2 = 0; u2 < n10.length; u2++) {
    var a2 = n10[u2];
    tw(t2, a2) || e10 && tw(e10, a2) || o10(t2, a2, /* @__PURE__ */ i2(r10, a2));
  }
}, en = /#|\.prototype\./, eo = function(t2, r10) {
  var e10 = eu[ei(t2)];
  return e10 === ec || e10 !== ea && (w(r10) ? A(r10) : !!r10);
}, ei = eo.normalize = function(t2) {
  return String(t2).replace(en, ".").toLowerCase();
}, eu = eo.data = {}, ea = eo.NATIVE = "N", ec = eo.POLYFILL = "P", ef = rL.f, el = function(t2, r10) {
  var e10, n10, o10, i2, u2, a2 = t2.target, c2 = t2.global, f2 = t2.stat;
  if (e10 = c2 ? O : f2 ? O[a2] || tf(a2, {}) : O[a2] && O[a2].prototype)
    for (n10 in r10) {
      if (i2 = r10[n10], o10 = t2.dontCallGetSet ? (u2 = /* @__PURE__ */ ef(e10, n10)) && u2.value : e10[n10], !/* @__PURE__ */ eo(c2 ? n10 : a2 + (f2 ? "." : "#") + n10, t2.forced) && void 0 !== o10) {
        if (typeof i2 == typeof o10)
          continue;
        ee(i2, o10);
      }
      (t2.sham || o10 && o10.sham) && tK(i2, "sham", true), ri(e10, n10, i2, t2);
    }
}, es = TypeError, ep = "Reduce of empty array with no initial value", ey = function(t2) {
  return function(r10, e10, n10, o10) {
    var i2 = /* @__PURE__ */ tv(r10), u2 = /* @__PURE__ */ rN(i2), a2 = /* @__PURE__ */ r1(i2);
    if (tn(e10), 0 === a2 && n10 < 2)
      throw new es(ep);
    var c2 = t2 ? a2 - 1 : 0, f2 = t2 ? -1 : 1;
    if (n10 < 2)
      for (; ; ) {
        if (c2 in u2) {
          o10 = u2[c2], c2 += f2;
          break;
        }
        if (c2 += f2, t2 ? c2 < 0 : a2 <= c2)
          throw new es(ep);
      }
    for (; t2 ? c2 >= 0 : a2 > c2; c2 += f2)
      c2 in u2 && (o10 = /* @__PURE__ */ e10(o10, u2[c2], c2, i2));
    return o10;
  };
}, eh = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: /* @__PURE__ */ ey(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: /* @__PURE__ */ ey(true)
}, ed = "process" === rs(O.process), eg = eh.left;
el({ target: "Array", proto: true, forced: !ed && K > 79 && K < 83 || !((t = [].reduce) && A(function() {
  t.call(null, function() {
    return 1;
  }, 1);
})) }, { reduce: function(t2) {
  var r10 = arguments.length;
  return eg(this, t2, r10, r10 > 1 ? arguments[1] : void 0);
} });
var ev = TypeError, eb = Object.defineProperty, ew = O.self !== O;
try {
  if (x) {
    var em = /* @__PURE__ */ Object.getOwnPropertyDescriptor(O, "self");
    !ew && em && em.get && em.enumerable || rC(O, "self", { get: function() {
      return O;
    }, set: function(t2) {
      if (this !== O)
        throw new ev("Illegal invocation");
      eb(O, "self", { value: t2, writable: true, configurable: true, enumerable: true });
    }, configurable: true, enumerable: true });
  } else
    el({ global: true, simple: true, forced: ew }, { self: O });
} catch (t2) {
}
var eA = Function.prototype, ex = eA.apply, eE = eA.call, eO = "object" == typeof Reflect && Reflect.apply || (F ? eE.bind(ex) : function() {
  return eE.apply(ex, arguments);
}), eT = String, eS = TypeError, ej = function(t2, r10, e10) {
  try {
    return $(/* @__PURE__ */ tn(Object.getOwnPropertyDescriptor(t2, r10)[e10]));
  } catch (t10) {
  }
}, eI = function(t2) {
  if (T(t2) || null === t2)
    return t2;
  throw new eS("Can't set " + eT(t2) + " as a prototype");
}, eR = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var t2, r10 = false, e10 = {};
  try {
    (t2 = /* @__PURE__ */ ej(Object.prototype, "__proto__", "set"))(e10, []), r10 = e10 instanceof Array;
  } catch (t10) {
  }
  return function(e11, n10) {
    return C(e11), eI(n10), r10 ? t2(e11, n10) : e11.__proto__ = n10, e11;
  };
}() : void 0), eP = m.f, ek = Error, e_ = /* @__PURE__ */ $("".replace), eC = String(new ek("zxcasd").stack), eF = /\n\s*at [^:]*:[^\n]*/, eM = /* @__PURE__ */ eF.test(eC), eL = !A(function() {
  var t2 = Error("a");
  return !("stack" in t2) || // eslint-disable-next-line es/no-object-defineproperty -- safe
  (Object.defineProperty(t2, "stack", /* @__PURE__ */ tq(1, 7)), 7 !== t2.stack);
}), eU = function(t2, r10) {
  if (eM && "string" == typeof t2 && !ek.prepareStackTrace)
    for (; r10--; )
      t2 = /* @__PURE__ */ e_(t2, eF, "");
  return t2;
}, eD = Error.captureStackTrace, ez = function(t2, r10, e10) {
  e10 in t2 || eP(t2, e10, { configurable: true, get: function() {
    return r10[e10];
  }, set: function(t10) {
    r10[e10] = t10;
  } });
}, eW = function(t2, r10, e10) {
  var n10, o10;
  return eR && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
  w(n10 = r10.constructor) && n10 !== e10 && T(o10 = n10.prototype) && o10 !== e10.prototype && eR(t2, o10), t2;
}, e$ = function(t2, r10) {
  T(r10) && "cause" in r10 && tK(t2, "cause", r10.cause);
}, eB = function(t2, r10, e10, n10) {
  eL && (eD ? eD(t2, r10) : tK(t2, "stack", /* @__PURE__ */ eU(e10, n10)));
}, eN = function(t2, r10, e10, n10) {
  var o10 = "stackTraceLimit", i2 = n10 ? 2 : 1, u2 = /* @__PURE__ */ t2.split("."), a2 = u2[u2.length - 1], c2 = /* @__PURE__ */ U.apply(null, u2);
  if (c2) {
    var f2 = c2.prototype;
    if (tw(f2, "cause") && delete f2.cause, !e10)
      return c2;
    var l2 = /* @__PURE__ */ U("Error"), s2 = r10(function(t10, r11) {
      var e11 = /* @__PURE__ */ function(t11, r12) {
        return void 0 === t11 ? arguments.length < 2 ? "" : r12 : rb(t11);
      }(n10 ? r11 : t10, void 0), o11 = n10 ? new c2(t10) : new c2();
      return void 0 !== e11 && tK(o11, "message", e11), eB(o11, s2, o11.stack, 2), this && B(f2, this) && eW(o11, this, s2), arguments.length > i2 && e$(o11, arguments[i2]), o11;
    });
    s2.prototype = f2, "Error" !== a2 ? eR ? eR(s2, l2) : ee(s2, l2, { name: true }) : x && o10 in c2 && (ez(s2, c2, o10), ez(s2, c2, "prepareStackTrace")), ee(s2, c2);
    try {
      f2.name !== a2 && tK(f2, "name", a2), f2.constructor = s2;
    } catch (t10) {
    }
    return s2;
  }
}, eV = "WebAssembly", eY = O[eV], eG = 7 !== Error("e", { cause: 7 }).cause, eq = function(t2, r10) {
  var e10 = {};
  e10[t2] = /* @__PURE__ */ eN(t2, r10, eG), el({ global: true, constructor: true, arity: 1, forced: eG }, e10);
}, eK = function(t2, r10) {
  if (eY && eY[t2]) {
    var e10 = {};
    e10[t2] = /* @__PURE__ */ eN(eV + "." + t2, r10, eG), el({ target: eV, stat: true, constructor: true, arity: 1, forced: eG }, e10);
  }
};
eq("Error", function(t2) {
  return function(r10) {
    return eO(t2, this, arguments);
  };
}), eq("EvalError", function(t2) {
  return function(r10) {
    return eO(t2, this, arguments);
  };
}), eq("RangeError", function(t2) {
  return function(r10) {
    return eO(t2, this, arguments);
  };
}), eq("ReferenceError", function(t2) {
  return function(r10) {
    return eO(t2, this, arguments);
  };
}), eq("SyntaxError", function(t2) {
  return function(r10) {
    return eO(t2, this, arguments);
  };
}), eq("TypeError", function(t2) {
  return function(r10) {
    return eO(t2, this, arguments);
  };
}), eq("URIError", function(t2) {
  return function(r10) {
    return eO(t2, this, arguments);
  };
}), eK("CompileError", function(t2) {
  return function(r10) {
    return eO(t2, this, arguments);
  };
}), eK("LinkError", function(t2) {
  return function(r10) {
    return eO(t2, this, arguments);
  };
}), eK("RuntimeError", function(t2) {
  return function(r10) {
    return eO(t2, this, arguments);
  };
});
var eX = Array.isArray || function(t2) {
  return "Array" === rs(t2);
}, eH = TypeError, eJ = Object.getOwnPropertyDescriptor, eQ = x && !function() {
  if (void 0 !== this)
    return true;
  try {
    Object.defineProperty([], "length", { writable: false }).length = 1;
  } catch (t2) {
    return t2 instanceof TypeError;
  }
}() ? function(t2, r10) {
  if (eX(t2) && !eJ(t2, "length").writable)
    throw new eH("Cannot set read only .length");
  return t2.length = r10;
} : function(t2, r10) {
  return t2.length = r10;
}, eZ = TypeError, e0 = function(t2) {
  if (t2 > 9007199254740991)
    throw eZ("Maximum allowed index exceeded");
  return t2;
};
el({ target: "Array", proto: true, arity: 1, forced: /* @__PURE__ */ A(function() {
  return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
}) || !function() {
  try {
    Object.defineProperty([], "length", { writable: false }).push();
  } catch (t2) {
    return t2 instanceof TypeError;
  }
}() }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function(t2) {
    var r10 = /* @__PURE__ */ tv(this), e10 = /* @__PURE__ */ r1(r10), n10 = arguments.length;
    e0(e10 + n10);
    for (var o10 = 0; o10 < n10; o10++)
      r10[e10] = arguments[o10], e10++;
    return eQ(r10, e10), e10;
  }
});
var e1 = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView, e2 = !A(function() {
  function t2() {
  }
  return t2.prototype.constructor = null, Object.getPrototypeOf(new t2()) !== t2.prototype;
}), e4 = /* @__PURE__ */ tH("IE_PROTO"), e9 = Object, e6 = e9.prototype, e7 = e2 ? e9.getPrototypeOf : function(t2) {
  var r10 = /* @__PURE__ */ tv(t2);
  if (tw(r10, e4))
    return r10[e4];
  var e10 = r10.constructor;
  return w(e10) && r10 instanceof e10 ? e10.prototype : r10 instanceof e9 ? e6 : null;
}, e3 = t4.enforce, e8 = t4.get, e5 = O.Int8Array, nt = e5 && e5.prototype, nr = O.Uint8ClampedArray, ne = nr && nr.prototype, nn = e5 && e7(e5), no = nt && e7(nt), ni = Object.prototype, nu = O.TypeError, na = /* @__PURE__ */ tj("toStringTag"), nc = /* @__PURE__ */ tE("TYPED_ARRAY_TAG"), nf = "TypedArrayConstructor", nl = e1 && !!eR && "Opera" !== rg(O.opera), ns = false, np = { Int8Array: 1, Uint8Array: 1, Uint8ClampedArray: 1, Int16Array: 2, Uint16Array: 2, Int32Array: 4, Uint32Array: 4, Float32Array: 4, Float64Array: 8 }, ny = { BigInt64Array: 8, BigUint64Array: 8 }, nh = function(t2) {
  var r10 = /* @__PURE__ */ e7(t2);
  if (T(r10)) {
    var e10 = /* @__PURE__ */ e8(r10);
    return e10 && tw(e10, nf) ? e10[nf] : nh(r10);
  }
}, nd = function(t2) {
  if (!T(t2))
    return false;
  var r10 = /* @__PURE__ */ rg(t2);
  return tw(np, r10) || tw(ny, r10);
};
for (f in np)
  (s = (l = O[f]) && l.prototype) ? e3(s)[nf] = l : nl = false;
for (f in ny)
  (s = (l = O[f]) && l.prototype) && (e3(s)[nf] = l);
if ((!nl || !w(nn) || nn === Function.prototype) && // eslint-disable-next-line no-shadow -- safe
(nn = function() {
  throw new nu("Incorrect invocation");
}, nl))
  for (f in np)
    O[f] && eR(O[f], nn);
if ((!nl || !no || no === ni) && (no = nn.prototype, nl))
  for (f in np)
    O[f] && eR(O[f].prototype, no);
if (nl && e7(ne) !== no && eR(ne, no), x && !tw(no, na))
  for (f in ns = true, rC(no, na, { configurable: true, get: function() {
    return T(this) ? this[nc] : void 0;
  } }), np)
    O[f] && tK(O[f], nc, f);
var ng = { NATIVE_ARRAY_BUFFER_VIEWS: nl, TYPED_ARRAY_TAG: ns && nc, aTypedArray: function(t2) {
  if (nd(t2))
    return t2;
  throw new nu("Target is not a typed array");
}, aTypedArrayConstructor: function(t2) {
  if (w(t2) && (!eR || B(nn, t2)))
    return t2;
  throw new nu(tr(t2) + " is not a typed array constructor");
}, exportTypedArrayMethod: function(t2, r10, e10, n10) {
  if (x) {
    if (e10)
      for (var o10 in np) {
        var i2 = O[o10];
        if (i2 && tw(i2.prototype, t2))
          try {
            delete i2.prototype[t2];
          } catch (e11) {
            try {
              i2.prototype[t2] = r10;
            } catch (t10) {
            }
          }
      }
    (!no[t2] || e10) && ri(no, t2, e10 ? r10 : nl && nt[t2] || r10, n10);
  }
}, exportTypedArrayStaticMethod: function(t2, r10, e10) {
  var n10, o10;
  if (x) {
    if (eR) {
      if (e10) {
        for (n10 in np)
          if ((o10 = O[n10]) && tw(o10, t2))
            try {
              delete o10[t2];
            } catch (t10) {
            }
      }
      if (nn[t2] && !e10)
        return;
      try {
        return ri(nn, t2, e10 ? r10 : nl && nn[t2] || r10);
      } catch (t10) {
      }
    }
    for (n10 in np)
      (o10 = O[n10]) && (!o10[t2] || e10) && ri(o10, t2, r10);
  }
}, getTypedArrayConstructor: nh, isView: function(t2) {
  if (!T(t2))
    return false;
  var r10 = /* @__PURE__ */ rg(t2);
  return "DataView" === r10 || tw(np, r10) || tw(ny, r10);
}, isTypedArray: nd, TypedArray: nn, TypedArrayPrototype: no }, nv = ng.aTypedArray;
(0, ng.exportTypedArrayMethod)("at", function(t2) {
  var r10 = /* @__PURE__ */ nv(this), e10 = /* @__PURE__ */ r1(r10), n10 = /* @__PURE__ */ rH(t2), o10 = n10 >= 0 ? n10 : e10 + n10;
  return o10 < 0 || o10 >= e10 ? void 0 : r10[o10];
});
var nb = function(t2) {
  if ("Function" === rs(t2))
    return $(t2);
}, nw = /* @__PURE__ */ nb(nb.bind), nm = function(t2) {
  var r10 = 1 === t2;
  return function(e10, n10, o10) {
    for (var i2, u2 = /* @__PURE__ */ tv(e10), a2 = /* @__PURE__ */ rN(u2), c2 = /* @__PURE__ */ r1(a2), f2 = (tn(n10), void 0 === o10 ? n10 : F ? nw(n10, o10) : function() {
      return n10.apply(o10, arguments);
    }); c2-- > 0; )
      if (/* @__PURE__ */ f2(i2 = a2[c2], c2, u2))
        switch (t2) {
          case 0:
            return i2;
          case 1:
            return c2;
        }
    return r10 ? -1 : void 0;
  };
}, nA = {
  // `Array.prototype.findLast` method
  // https://github.com/tc39/proposal-array-find-from-last
  findLast: /* @__PURE__ */ nm(0),
  // `Array.prototype.findLastIndex` method
  // https://github.com/tc39/proposal-array-find-from-last
  findLastIndex: /* @__PURE__ */ nm(1)
}, nx = nA.findLast, nE = ng.aTypedArray;
(0, ng.exportTypedArrayMethod)("findLast", function(t2) {
  return nx(/* @__PURE__ */ nE(this), t2, arguments.length > 1 ? arguments[1] : void 0);
});
var nO = nA.findLastIndex, nT = ng.aTypedArray;
(0, ng.exportTypedArrayMethod)("findLastIndex", function(t2) {
  return nO(/* @__PURE__ */ nT(this), t2, arguments.length > 1 ? arguments[1] : void 0);
});
var nS = RangeError, nj = function(t2) {
  var r10 = /* @__PURE__ */ rH(t2);
  if (r10 < 0)
    throw new nS("The argument can't be less than 0");
  return r10;
}, nI = RangeError, nR = function(t2, r10) {
  var e10 = /* @__PURE__ */ nj(t2);
  if (e10 % r10)
    throw new nI("Wrong offset");
  return e10;
}, nP = O.RangeError, nk = O.Int8Array, n_ = nk && nk.prototype, nC = n_ && n_.set, nF = ng.aTypedArray, nM = ng.exportTypedArrayMethod, nL = !A(function() {
  var t2 = new Uint8ClampedArray(2);
  return L(nC, t2, { length: 1, 0: 3 }, 1), 3 !== t2[1];
}), nU = nL && ng.NATIVE_ARRAY_BUFFER_VIEWS && A(function() {
  var t2 = new nk(2);
  return t2.set(1), t2.set("2", 1), 0 !== t2[0] || 2 !== t2[1];
});
nM("set", function(t2) {
  nF(this);
  var r10 = /* @__PURE__ */ nR(arguments.length > 1 ? arguments[1] : void 0, 1), e10 = /* @__PURE__ */ tv(t2);
  if (nL)
    return L(nC, this, e10, r10);
  var n10 = this.length, o10 = /* @__PURE__ */ r1(e10), i2 = 0;
  if (o10 + r10 > n10)
    throw new nP("Wrong length");
  for (; i2 < o10; )
    this[r10 + i2] = e10[i2++];
}, !nL || nU);
var nD = function(t2, r10) {
  for (var e10 = /* @__PURE__ */ r1(t2), n10 = new r10(e10), o10 = 0; o10 < e10; o10++)
    n10[o10] = t2[e10 - o10 - 1];
  return n10;
}, nz = ng.aTypedArray, nW = ng.exportTypedArrayMethod, n$ = ng.getTypedArrayConstructor;
nW("toReversed", function() {
  return nD(/* @__PURE__ */ nz(this), /* @__PURE__ */ n$(this));
});
var nB = function(t2, r10, e10) {
  for (var n10 = 0, o10 = arguments.length > 2 ? e10 : r1(r10), i2 = new t2(o10); o10 > n10; )
    i2[n10] = r10[n10++];
  return i2;
}, nN = ng.aTypedArray, nV = ng.getTypedArrayConstructor, nY = ng.exportTypedArrayMethod, nG = /* @__PURE__ */ $(ng.TypedArrayPrototype.sort);
nY("toSorted", function(t2) {
  void 0 !== t2 && tn(t2);
  var r10 = /* @__PURE__ */ nN(this);
  return nG(/* @__PURE__ */ nB(/* @__PURE__ */ nV(r10), r10), t2);
});
var nq = RangeError, nK = TypeError, nX = function(t2, r10, e10, n10) {
  var o10 = /* @__PURE__ */ r1(t2), i2 = /* @__PURE__ */ rH(e10), u2 = i2 < 0 ? o10 + i2 : i2;
  if (u2 >= o10 || u2 < 0)
    throw new nq("Incorrect index");
  for (var a2 = new r10(o10), c2 = 0; c2 < o10; c2++)
    a2[c2] = c2 === u2 ? n10 : t2[c2];
  return a2;
}, nH = function(t2) {
  var r10 = /* @__PURE__ */ rg(t2);
  return "BigInt64Array" === r10 || "BigUint64Array" === r10;
}, nJ = function(t2) {
  var r10 = /* @__PURE__ */ tk(t2, "number");
  if ("number" == typeof r10)
    throw new nK("Can't convert number to bigint");
  return BigInt(r10);
}, nQ = ng.aTypedArray, nZ = ng.getTypedArrayConstructor;
(0, ng.exportTypedArrayMethod)("with", { with: function(t2, r10) {
  var e10 = /* @__PURE__ */ nQ(this), n10 = /* @__PURE__ */ rH(t2), o10 = nH(e10) ? nJ(r10) : +r10;
  return nX(e10, /* @__PURE__ */ nZ(e10), n10, o10);
} }.with, !function() {
  try {
    new Int8Array(1).with(2, { valueOf: function() {
      throw 8;
    } });
  } catch (t2) {
    return 8 === t2;
  }
}());
var n0 = {}, n1 = Object.keys || function(t2) {
  return r7(t2, r3);
};
n0.f = x && !P ? Object.defineProperties : function(t2, r10) {
  C(t2);
  for (var e10, n10 = /* @__PURE__ */ rV(r10), o10 = /* @__PURE__ */ n1(r10), i2 = o10.length, u2 = 0; i2 > u2; )
    m.f(t2, e10 = o10[u2++], n10[e10]);
  return t2;
};
var n2 = /* @__PURE__ */ U("document", "documentElement"), n4 = "prototype", n9 = "script", n6 = /* @__PURE__ */ tH("IE_PROTO"), n7 = function() {
}, n3 = function(t2) {
  return "<" + n9 + ">" + t2 + "</" + n9 + ">";
}, n8 = function(t2) {
  t2.write(/* @__PURE__ */ n3("")), t2.close();
  var r10 = t2.parentWindow.Object;
  return t2 = null, r10;
}, n5 = function() {
  var t2, r10 = /* @__PURE__ */ I("iframe");
  return r10.style.display = "none", n2.appendChild(r10), // https://github.com/zloirock/core-js/issues/475
  r10.src = /* @__PURE__ */ String("java" + n9 + ":"), (t2 = r10.contentWindow.document).open(), t2.write(/* @__PURE__ */ n3("document.F=Object")), t2.close(), t2.F;
}, ot = function() {
  try {
    p = new ActiveXObject("htmlfile");
  } catch (t10) {
  }
  ot = "undefined" != typeof document ? document.domain && p ? n8(p) : n5() : n8(p);
  for (var t2 = r3.length; t2--; )
    delete ot[n4][r3[t2]];
  return ot();
};
tJ[n6] = true;
var or = Object.create || function(t2, r10) {
  var e10;
  return null !== t2 ? (n7[n4] = /* @__PURE__ */ C(t2), e10 = new n7(), n7[n4] = null, // add "__proto__" for Object.getPrototypeOf polyfill
  e10[n6] = t2) : e10 = /* @__PURE__ */ ot(), void 0 === r10 ? e10 : n0.f(e10, r10);
}, oe = m.f, on = /* @__PURE__ */ tj("toStringTag"), oo = function(t2, r10, e10) {
  t2 && !e10 && (t2 = t2.prototype), t2 && !tw(t2, on) && oe(t2, on, { configurable: true, value: r10 });
};
el({ global: true }, { Reflect: {} }), // Reflect[@@toStringTag] property
// https://tc39.es/ecma262/#sec-reflect-@@tostringtag
oo(O.Reflect, "Reflect", true);
var oi = /* @__PURE__ */ tj("match"), ou = function(t2) {
  var r10;
  return T(t2) && (void 0 !== (r10 = t2[oi]) ? !!r10 : "RegExp" === rs(t2));
}, oa = function() {
  var t2 = /* @__PURE__ */ C(this), r10 = "";
  return t2.hasIndices && (r10 += "d"), t2.global && (r10 += "g"), t2.ignoreCase && (r10 += "i"), t2.multiline && (r10 += "m"), t2.dotAll && (r10 += "s"), t2.unicode && (r10 += "u"), t2.unicodeSets && (r10 += "v"), t2.sticky && (r10 += "y"), r10;
}, oc = RegExp.prototype, of = function(t2) {
  var r10 = t2.flags;
  return void 0 === r10 && !("flags" in oc) && !tw(t2, "flags") && B(oc, t2) ? L(oa, t2) : r10;
}, ol = Math.floor, os = /* @__PURE__ */ $("".charAt), op = /* @__PURE__ */ $("".replace), oy = /* @__PURE__ */ $("".slice), oh = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, od = /\$([$&'`]|\d{1,2})/g, og = function(t2, r10, e10, n10, o10, i2) {
  var u2 = e10 + t2.length, a2 = n10.length, c2 = od;
  return void 0 !== o10 && (o10 = /* @__PURE__ */ tv(o10), c2 = oh), op(i2, c2, function(i3, c3) {
    var f2;
    switch (os(c3, 0)) {
      case "$":
        return "$";
      case "&":
        return t2;
      case "`":
        return oy(r10, 0, e10);
      case "'":
        return oy(r10, u2);
      case "<":
        f2 = o10[oy(c3, 1, -1)];
        break;
      default:
        var l2 = +c3;
        if (0 === l2)
          return i3;
        if (l2 > a2) {
          var s2 = /* @__PURE__ */ ol(l2 / 10);
          if (0 === s2)
            return i3;
          if (s2 <= a2)
            return void 0 === n10[s2 - 1] ? os(c3, 1) : n10[s2 - 1] + os(c3, 1);
          return i3;
        }
        f2 = n10[l2 - 1];
    }
    return void 0 === f2 ? "" : f2;
  });
}, ov = /* @__PURE__ */ tj("replace"), ob = TypeError, ow = /* @__PURE__ */ $("".indexOf);
$("".replace);
var om = /* @__PURE__ */ $("".slice), oA = Math.max;
el({ target: "String", proto: true }, { replaceAll: function(t2, r10) {
  var e10, n10, o10, i2, u2, a2, c2, f2 = /* @__PURE__ */ td(this), l2 = 0, s2 = 0, p2 = "";
  if (!to(t2)) {
    if (/* @__PURE__ */ ou(t2) && !~ow(/* @__PURE__ */ rb(/* @__PURE__ */ td(/* @__PURE__ */ of(t2))), "g"))
      throw new ob("`.replaceAll` does not allow non-global regexes");
    if (e10 = /* @__PURE__ */ ti(t2, ov))
      return L(e10, t2, f2, r10);
  }
  for (n10 = /* @__PURE__ */ rb(f2), o10 = /* @__PURE__ */ rb(t2), (i2 = /* @__PURE__ */ w(r10)) || (r10 = /* @__PURE__ */ rb(r10)), a2 = /* @__PURE__ */ oA(1, u2 = o10.length), l2 = /* @__PURE__ */ ow(n10, o10); -1 !== l2; )
    c2 = i2 ? rb(/* @__PURE__ */ r10(o10, l2, n10)) : og(o10, n10, l2, [], void 0, r10), p2 += om(n10, s2, l2) + c2, s2 = l2 + u2, l2 = l2 + a2 > n10.length ? -1 : ow(n10, o10, l2 + a2);
  return s2 < n10.length && (p2 += /* @__PURE__ */ om(n10, s2)), p2;
} });
var ox = /* @__PURE__ */ tj("iterator");
[].keys && "next" in (d = /* @__PURE__ */ [].keys()) && (h = /* @__PURE__ */ e7(/* @__PURE__ */ e7(d))) !== Object.prototype && (y = h), (!T(y) || A(function() {
  var t2 = {};
  return y[ox].call(t2) !== t2;
})) && (y = {}), w(y[ox]) || ri(y, ox, function() {
  return this;
});
var oE = y, oO = function() {
}, oT = /* @__PURE__ */ U("Reflect", "construct"), oS = /^\s*(?:class|function)\b/, oj = /* @__PURE__ */ $(oS.exec), oI = !oS.test(oO), oR = function(t2) {
  if (!w(t2))
    return false;
  try {
    return oT(oO, [], t2), true;
  } catch (t10) {
    return false;
  }
}, oP = function(t2) {
  if (!w(t2))
    return false;
  switch (rg(t2)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return false;
  }
  try {
    return oI || !!oj(oS, /* @__PURE__ */ tV(t2));
  } catch (t10) {
    return true;
  }
};
oP.sham = true;
var ok = !oT || A(function() {
  var t2;
  return oR(oR.call) || !oR(Object) || !oR(function() {
    t2 = true;
  }) || t2;
}) ? oP : oR, o_ = TypeError, oC = function(t2) {
  if (ok(t2))
    return t2;
  throw new o_(tr(t2) + " is not a constructor");
}, oF = /* @__PURE__ */ tj("species"), oM = /* @__PURE__ */ $("".charAt), oL = /* @__PURE__ */ $("".charCodeAt), oU = /* @__PURE__ */ $("".slice), oD = function(t2) {
  return function(r10, e10) {
    var n10, o10, i2 = /* @__PURE__ */ rb(/* @__PURE__ */ td(r10)), u2 = /* @__PURE__ */ rH(e10), a2 = i2.length;
    return u2 < 0 || u2 >= a2 ? t2 ? "" : void 0 : (n10 = /* @__PURE__ */ oL(i2, u2)) < 55296 || n10 > 56319 || u2 + 1 === a2 || (o10 = /* @__PURE__ */ oL(i2, u2 + 1)) < 56320 || o10 > 57343 ? t2 ? oM(i2, u2) : n10 : t2 ? oU(i2, u2, u2 + 2) : (n10 - 55296 << 10) + (o10 - 56320) + 65536;
  };
}, oz = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: /* @__PURE__ */ oD(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: /* @__PURE__ */ oD(true)
}.charAt, oW = O.RegExp, o$ = /* @__PURE__ */ A(function() {
  var t2 = /* @__PURE__ */ oW("a", "y");
  return t2.lastIndex = 2, null !== t2.exec("abcd");
}), oB = (o$ || A(function() {
  return !oW("a", "y").sticky;
}), o$ || A(function() {
  var t2 = /* @__PURE__ */ oW("^r", "gy");
  return t2.lastIndex = 2, null !== t2.exec("str");
})), oN = O.RegExp, oV = /* @__PURE__ */ A(function() {
  var t2 = /* @__PURE__ */ oN(".", "s");
  return !(t2.dotAll && t2.test("\n") && "s" === t2.flags);
}), oY = O.RegExp, oG = /* @__PURE__ */ A(function() {
  var t2 = /* @__PURE__ */ oY("(?<a>b)", "g");
  return "b" !== t2.exec("b").groups.a || "bc" !== "b".replace(t2, "$<a>c");
}), oq = t4.get, oK = /* @__PURE__ */ ty("native-string-replace", String.prototype.replace), oX = RegExp.prototype.exec, oH = oX, oJ = /* @__PURE__ */ $("".charAt), oQ = /* @__PURE__ */ $("".indexOf), oZ = /* @__PURE__ */ $("".replace), o0 = /* @__PURE__ */ $("".slice), o1 = (e = /b*/g, L(oX, r = /a/, "a"), L(oX, e, "a"), 0 !== r.lastIndex || 0 !== e.lastIndex), o2 = void 0 !== /()??/.exec("")[1];
(o1 || o2 || oB || oV || oG) && (oH = function(t2) {
  var r10, e10, n10, o10, i2, u2, a2, c2 = /* @__PURE__ */ oq(this), f2 = /* @__PURE__ */ rb(t2), l2 = c2.raw;
  if (l2)
    return l2.lastIndex = this.lastIndex, r10 = /* @__PURE__ */ L(oH, l2, f2), this.lastIndex = l2.lastIndex, r10;
  var s2 = c2.groups, p2 = oB && this.sticky, y2 = /* @__PURE__ */ L(oa, this), h2 = this.source, d2 = 0, g2 = f2;
  if (p2 && (-1 === oQ(y2 = /* @__PURE__ */ oZ(y2, "y", ""), "g") && (y2 += "g"), g2 = /* @__PURE__ */ o0(f2, this.lastIndex), this.lastIndex > 0 && (!this.multiline || this.multiline && "\n" !== oJ(f2, this.lastIndex - 1)) && (h2 = "(?: " + h2 + ")", g2 = " " + g2, d2++), // ^(? + rx + ) is needed, in combination with some str slicing, to
  // simulate the 'y' flag.
  e10 = RegExp("^(?:" + h2 + ")", y2)), o2 && (e10 = RegExp("^" + h2 + "$(?!\\s)", y2)), o1 && (n10 = this.lastIndex), o10 = /* @__PURE__ */ L(oX, p2 ? e10 : this, g2), p2 ? o10 ? (o10.input = /* @__PURE__ */ o0(o10.input, d2), o10[0] = /* @__PURE__ */ o0(o10[0], d2), o10.index = this.lastIndex, this.lastIndex += o10[0].length) : this.lastIndex = 0 : o1 && o10 && (this.lastIndex = this.global ? o10.index + o10[0].length : n10), o2 && o10 && o10.length > 1 && // Fix browsers whose `exec` methods don't consistently return `undefined`
  // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
  L(oK, o10[0], e10, function() {
    for (i2 = 1; i2 < arguments.length - 2; i2++)
      void 0 === arguments[i2] && (o10[i2] = void 0);
  }), o10 && s2)
    for (i2 = 0, o10.groups = u2 = /* @__PURE__ */ or(null); i2 < s2.length; i2++)
      u2[(a2 = s2[i2])[0]] = o10[a2[1]];
  return o10;
});
var o4 = oH, o9 = TypeError, o6 = function(t2, r10) {
  return { value: t2, done: r10 };
}, o7 = function(t2, r10) {
  var e10, n10 = C(t2).constructor;
  return void 0 === n10 || to(e10 = C(n10)[oF]) ? r10 : oC(e10);
}, o3 = function(t2, r10) {
  var e10 = t2.exec;
  if (w(e10)) {
    var n10 = /* @__PURE__ */ L(e10, t2, r10);
    return null !== n10 && C(n10), n10;
  }
  if ("RegExp" === rs(t2))
    return L(o4, t2, r10);
  throw new o9("RegExp#exec called on incompatible receiver");
}, o8 = /* @__PURE__ */ tj("matchAll"), o5 = "RegExp String", it = o5 + " Iterator", ir = t4.set, ie = /* @__PURE__ */ t4.getterFor(it), io = RegExp.prototype, ii = TypeError, iu = /* @__PURE__ */ nb("".indexOf), ia = /* @__PURE__ */ nb("".matchAll), ic = !!ia && !A(function() {
  ia("a", /./);
}), il = ((n = function(t2, r10, e10, n10) {
  ir(this, { type: it, regexp: t2, string: r10, global: e10, unicode: n10, done: false });
}).prototype = /* @__PURE__ */ or(oE, { next: /* @__PURE__ */ tq(1, function() {
  var t2, r10 = /* @__PURE__ */ ie(this);
  if (r10.done)
    return o6(void 0, true);
  var e10 = r10.regexp, n10 = r10.string, o10 = /* @__PURE__ */ o3(e10, n10);
  return null === o10 ? (r10.done = true, o6(void 0, true)) : (r10.global ? "" === rb(o10[0]) && (e10.lastIndex = (t2 = /* @__PURE__ */ r0(e10.lastIndex)) + (r10.unicode ? oz(n10, t2).length : 1)) : r10.done = true, o6(o10, false));
}) }), oo(n, o5 + " Iterator", false), n);
el({ target: "String", proto: true, forced: ic }, { matchAll: function(t2) {
  var r10, e10, n10 = /* @__PURE__ */ td(this);
  if (to(t2)) {
    if (ic)
      return ia(n10, t2);
  } else {
    if (ou(t2) && !~iu(/* @__PURE__ */ rb(/* @__PURE__ */ td(/* @__PURE__ */ of(t2))), "g"))
      throw new ii("`.matchAll` does not allow non-global regexes");
    if (ic)
      return ia(n10, t2);
    if (e10 = /* @__PURE__ */ ti(t2, o8))
      return L(e10, t2, n10);
  }
  return r10 = /* @__PURE__ */ rb(n10), RegExp(t2, "g")[o8](r10);
} }), o8 in io || ri(io, o8, function(t2) {
  var r10, e10, n10, o10 = /* @__PURE__ */ C(this), i2 = /* @__PURE__ */ rb(t2), u2 = /* @__PURE__ */ o7(o10, RegExp), a2 = /* @__PURE__ */ rb(/* @__PURE__ */ of(o10));
  return r10 = new u2(u2 === RegExp ? o10.source : o10, a2), e10 = !!~iu(a2, "g"), n10 = !!~iu(a2, "u"), r10.lastIndex = /* @__PURE__ */ r0(o10.lastIndex), new il(r10, i2, e10, n10);
});
export {
  v as g
};
