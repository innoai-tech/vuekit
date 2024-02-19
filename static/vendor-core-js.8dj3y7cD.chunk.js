var r, t, e, n, o, i, a, u, c, f, l = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function p(r10) {
  return r10 && r10.__esModule && Object.prototype.hasOwnProperty.call(r10, "default") ? r10.default : r10;
}
var s = "object" == typeof document && document.all, y = void 0 === s && void 0 !== s ? function(r10) {
  return "function" == typeof r10 || r10 === s;
} : function(r10) {
  return "function" == typeof r10;
}, h = {}, v = function(r10) {
  try {
    return !!r10();
  } catch (r11) {
    return true;
  }
}, g = !v(function() {
  return 7 !== Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1];
}), d = function(r10) {
  return r10 && r10.Math === Math && r10;
}, b = (
  // eslint-disable-next-line es/no-global-this -- safe
  d("object" == typeof globalThis && globalThis) || d("object" == typeof window && window) || // eslint-disable-next-line no-restricted-globals -- safe
  d("object" == typeof self && self) || d("object" == typeof l && l) || d("object" == typeof l && l) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")()
), w = function(r10) {
  return "object" == typeof r10 ? null !== r10 : y(r10);
}, m = b.document, A = w(m) && w(m.createElement), T = !g && !v(function() {
  return 7 !== Object.defineProperty(A ? m.createElement("div") : {}, "a", { get: function() {
    return 7;
  } }).a;
}), O = g && v(function() {
  return 42 !== Object.defineProperty(function() {
  }, "prototype", { value: 42, writable: false }).prototype;
}), E = String, S = TypeError, j = function(r10) {
  if (w(r10))
    return r10;
  throw new S(E(r10) + " is not an object");
}, P = !v(function() {
  var r10 = /* @__PURE__ */ (function() {
  }).bind();
  return "function" != typeof r10 || r10.hasOwnProperty("prototype");
}), x = Function.prototype.call, R = P ? x.bind(x) : function() {
  return x.apply(x, arguments);
}, _ = function(r10, t10) {
  var e10;
  return arguments.length < 2 ? y(e10 = b[r10]) ? e10 : void 0 : b[r10] && b[r10][t10];
}, I = Function.prototype, k = I.call, C = P && I.bind.bind(k, k), M = P ? C : function(r10) {
  return function() {
    return k.apply(r10, arguments);
  };
}, F = /* @__PURE__ */ M({}.isPrototypeOf), L = "undefined" != typeof navigator && String(navigator.userAgent) || "", U = b.process, D = b.Deno, z = U && U.versions || D && D.version, B = z && z.v8;
B && // in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(n = (e = /* @__PURE__ */ B.split("."))[0] > 0 && e[0] < 4 ? 1 : +(e[0] + e[1])), !n && L && (!(e = /* @__PURE__ */ L.match(/Edge\/(\d+)/)) || e[1] >= 74) && (e = /* @__PURE__ */ L.match(/Chrome\/(\d+)/)) && (n = +e[1]);
var N = n, V = b.String, W = !!Object.getOwnPropertySymbols && !v(function() {
  var r10 = /* @__PURE__ */ Symbol("symbol detection");
  return !V(r10) || !(Object(r10) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && N && N < 41;
}), $ = W && !Symbol.sham && "symbol" == typeof Symbol.iterator, Y = Object, G = $ ? function(r10) {
  return "symbol" == typeof r10;
} : function(r10) {
  var t10 = /* @__PURE__ */ _("Symbol");
  return y(t10) && F(t10.prototype, /* @__PURE__ */ Y(r10));
}, K = String, q = function(r10) {
  try {
    return K(r10);
  } catch (r11) {
    return "Object";
  }
}, H = TypeError, J = function(r10) {
  if (y(r10))
    return r10;
  throw new H(q(r10) + " is not a function");
}, Q = function(r10) {
  return null == r10;
}, X = function(r10, t10) {
  var e10 = r10[t10];
  return Q(e10) ? void 0 : J(e10);
}, Z = TypeError, rr = { exports: {} }, rt = Object.defineProperty, re = function(r10, t10) {
  try {
    rt(b, r10, { value: t10, configurable: true, writable: true });
  } catch (e10) {
    b[r10] = t10;
  }
  return t10;
}, rn = "__core-js_shared__", ro = rr.exports = b[rn] || re(rn, {});
(ro.versions || (ro.versions = [])).push({ version: "3.36.0", mode: "global", copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE", source: "https://github.com/zloirock/core-js" });
var ri = rr.exports, ra = function(r10, t10) {
  return ri[r10] || (ri[r10] = t10 || {});
}, ru = TypeError, rc = function(r10) {
  if (Q(r10))
    throw new ru("Can't call method on " + r10);
  return r10;
}, rf = Object, rl = function(r10) {
  return rf(/* @__PURE__ */ rc(r10));
}, rp = /* @__PURE__ */ M({}.hasOwnProperty), rs = Object.hasOwn || function(r10, t10) {
  return rp(/* @__PURE__ */ rl(r10), t10);
}, ry = 0, rh = /* @__PURE__ */ Math.random(), rv = /* @__PURE__ */ M(1 .toString), rg = function(r10) {
  return "Symbol(" + (void 0 === r10 ? "" : r10) + ")_" + rv(++ry + rh, 36);
}, rd = b.Symbol, rb = /* @__PURE__ */ ra("wks"), rw = $ ? rd.for || rd : rd && rd.withoutSetter || rg, rm = function(r10) {
  return rs(rb, r10) || (rb[r10] = W && rs(rd, r10) ? rd[r10] : rw("Symbol." + r10)), rb[r10];
}, rA = function(r10, t10) {
  var e10, n10;
  if ("string" === t10 && y(e10 = r10.toString) && !w(n10 = /* @__PURE__ */ R(e10, r10)) || y(e10 = r10.valueOf) && !w(n10 = /* @__PURE__ */ R(e10, r10)) || "string" !== t10 && y(e10 = r10.toString) && !w(n10 = /* @__PURE__ */ R(e10, r10)))
    return n10;
  throw new Z("Can't convert object to primitive value");
}, rT = TypeError, rO = /* @__PURE__ */ rm("toPrimitive"), rE = function(r10, t10) {
  if (!w(r10) || G(r10))
    return r10;
  var e10, n10 = /* @__PURE__ */ X(r10, rO);
  if (n10) {
    if (void 0 === t10 && (t10 = "default"), !w(e10 = /* @__PURE__ */ R(n10, r10, t10)) || G(e10))
      return e10;
    throw new rT("Can't convert object to primitive value");
  }
  return void 0 === t10 && (t10 = "number"), rA(r10, t10);
}, rS = function(r10) {
  var t10 = /* @__PURE__ */ rE(r10, "string");
  return G(t10) ? t10 : t10 + "";
}, rj = TypeError, rP = Object.defineProperty, rx = Object.getOwnPropertyDescriptor, rR = "enumerable", r_ = "configurable", rI = "writable";
h.f = g ? O ? function(r10, t10, e10) {
  if (j(r10), t10 = /* @__PURE__ */ rS(t10), j(e10), "function" == typeof r10 && "prototype" === t10 && "value" in e10 && rI in e10 && !e10[rI]) {
    var n10 = /* @__PURE__ */ rx(r10, t10);
    n10 && n10[rI] && (r10[t10] = e10.value, e10 = { configurable: r_ in e10 ? e10[r_] : n10[r_], enumerable: rR in e10 ? e10[rR] : n10[rR], writable: false });
  }
  return rP(r10, t10, e10);
} : rP : function(r10, t10, e10) {
  if (j(r10), t10 = /* @__PURE__ */ rS(t10), j(e10), T)
    try {
      return rP(r10, t10, e10);
    } catch (r11) {
    }
  if ("get" in e10 || "set" in e10)
    throw new rj("Accessors not supported");
  return "value" in e10 && (r10[t10] = e10.value), r10;
};
var rk = { exports: {} }, rC = Function.prototype, rM = g && Object.getOwnPropertyDescriptor, rF = /* @__PURE__ */ rs(rC, "name") && (!g || g && rM(rC, "name").configurable), rL = /* @__PURE__ */ M(Function.toString);
y(ri.inspectSource) || (ri.inspectSource = function(r10) {
  return rL(r10);
});
var rU = ri.inspectSource, rD = b.WeakMap, rz = y(rD) && /native code/.test(/* @__PURE__ */ String(rD)), rB = function(r10, t10) {
  return { enumerable: !(1 & r10), configurable: !(2 & r10), writable: !(4 & r10), value: t10 };
}, rN = g ? function(r10, t10, e10) {
  return h.f(r10, t10, /* @__PURE__ */ rB(1, e10));
} : function(r10, t10, e10) {
  return r10[t10] = e10, r10;
}, rV = /* @__PURE__ */ ra("keys"), rW = function(r10) {
  return rV[r10] || (rV[r10] = /* @__PURE__ */ rg(r10));
}, r$ = {}, rY = "Object already initialized", rG = b.TypeError, rK = b.WeakMap;
if (rz || ri.state) {
  var rq = ri.state || (ri.state = new rK());
  rq.get = rq.get, rq.has = rq.has, rq.set = rq.set, /* eslint-enable no-self-assign -- prototype methods protection */
  o = function(r10, t10) {
    if (rq.has(r10))
      throw new rG(rY);
    return t10.facade = r10, rq.set(r10, t10), t10;
  }, i = function(r10) {
    return rq.get(r10) || {};
  }, a = function(r10) {
    return rq.has(r10);
  };
} else {
  var rH = /* @__PURE__ */ rW("state");
  r$[rH] = true, o = function(r10, t10) {
    if (rs(r10, rH))
      throw new rG(rY);
    return t10.facade = r10, rN(r10, rH, t10), t10;
  }, i = function(r10) {
    return rs(r10, rH) ? r10[rH] : {};
  }, a = function(r10) {
    return rs(r10, rH);
  };
}
var rJ = { get: i, enforce: function(r10) {
  return a(r10) ? i(r10) : o(r10, {});
} }, rQ = rJ.enforce, rX = rJ.get, rZ = String, r0 = Object.defineProperty, r1 = /* @__PURE__ */ M("".slice), r2 = /* @__PURE__ */ M("".replace), r4 = /* @__PURE__ */ M([].join), r7 = g && !v(function() {
  return 8 !== r0(function() {
  }, "length", { value: 8 }).length;
}), r8 = /* @__PURE__ */ String(String).split("String"), r9 = rk.exports = function(r10, t10, e10) {
  "Symbol(" === r1(/* @__PURE__ */ rZ(t10), 0, 7) && (t10 = "[" + r2(/* @__PURE__ */ rZ(t10), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), e10 && e10.getter && (t10 = "get " + t10), e10 && e10.setter && (t10 = "set " + t10), (!rs(r10, "name") || rF && r10.name !== t10) && (g ? r0(r10, "name", { value: t10, configurable: true }) : r10.name = t10), r7 && e10 && rs(e10, "arity") && r10.length !== e10.arity && r0(r10, "length", { value: e10.arity });
  try {
    e10 && rs(e10, "constructor") && e10.constructor ? g && r0(r10, "prototype", { writable: false }) : r10.prototype && (r10.prototype = void 0);
  } catch (r11) {
  }
  var n10 = /* @__PURE__ */ rQ(r10);
  return rs(n10, "source") || (n10.source = /* @__PURE__ */ r4(r8, "string" == typeof t10 ? t10 : "")), r10;
};
Function.prototype.toString = /* @__PURE__ */ r9(function() {
  return y(this) && rX(this).source || rU(this);
}, "toString");
var r6 = rk.exports, r3 = function(r10, t10, e10, n10) {
  n10 || (n10 = {});
  var o2 = n10.enumerable, i2 = void 0 !== n10.name ? n10.name : t10;
  if (y(e10) && r6(e10, i2, n10), n10.global)
    o2 ? r10[t10] = e10 : re(t10, e10);
  else {
    try {
      n10.unsafe ? r10[t10] && (o2 = true) : delete r10[t10];
    } catch (r11) {
    }
    o2 ? r10[t10] = e10 : h.f(r10, t10, { value: e10, enumerable: false, configurable: !n10.nonConfigurable, writable: !n10.nonWritable });
  }
  return r10;
}, r5 = /* @__PURE__ */ rm("toStringTag"), tr = {};
tr[r5] = "z";
var tt = "[object z]" === String(tr), te = /* @__PURE__ */ M({}.toString), tn = /* @__PURE__ */ M("".slice), to = function(r10) {
  return tn(/* @__PURE__ */ te(r10), 8, -1);
}, ti = /* @__PURE__ */ rm("toStringTag"), ta = Object, tu = "Arguments" === to(/* @__PURE__ */ function() {
  return arguments;
}()), tc = function(r10, t10) {
  try {
    return r10[t10];
  } catch (r11) {
  }
}, tf = tt ? to : function(r10) {
  var t10, e10, n10;
  return void 0 === r10 ? "Undefined" : null === r10 ? "Null" : "string" == typeof (e10 = /* @__PURE__ */ tc(t10 = /* @__PURE__ */ ta(r10), ti)) ? e10 : tu ? to(t10) : "Object" === (n10 = /* @__PURE__ */ to(t10)) && y(t10.callee) ? "Arguments" : n10;
}, tl = String, tp = function(r10) {
  if ("Symbol" === tf(r10))
    throw TypeError("Cannot convert a Symbol value to a string");
  return tl(r10);
}, ts = TypeError, ty = function(r10, t10) {
  if (r10 < t10)
    throw new ts("Not enough arguments");
  return r10;
}, th = URLSearchParams, tv = th.prototype, tg = /* @__PURE__ */ M(tv.append), td = /* @__PURE__ */ M(tv.delete), tb = /* @__PURE__ */ M(tv.forEach), tw = /* @__PURE__ */ M([].push), tm = new th("a=1&a=2&b=3");
tm.delete("a", 1), // `undefined` case is a Chromium 117 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=14222
tm.delete("b", void 0), tm + "" != "a=2" && r3(tv, "delete", function(r10) {
  var t10, e10 = arguments.length, n10 = e10 < 2 ? void 0 : arguments[1];
  if (e10 && void 0 === n10)
    return td(this, r10);
  var o2 = [];
  tb(this, function(r11, t11) {
    tw(o2, { key: t11, value: r11 });
  }), ty(e10, 1);
  for (var i2 = /* @__PURE__ */ tp(r10), a2 = /* @__PURE__ */ tp(n10), u2 = 0, c2 = 0, f2 = false, l2 = o2.length; u2 < l2; )
    t10 = o2[u2++], f2 || t10.key === i2 ? (f2 = true, td(this, t10.key)) : c2++;
  for (; c2 < l2; )
    (t10 = o2[c2++]).key === i2 && t10.value === a2 || tg(this, t10.key, t10.value);
}, { enumerable: true, unsafe: true });
var tA = URLSearchParams, tT = tA.prototype, tO = /* @__PURE__ */ M(tT.getAll), tE = /* @__PURE__ */ M(tT.has), tS = new tA("a=1");
(tS.has("a", 2) || !tS.has("a", void 0)) && r3(tT, "has", function(r10) {
  var t10 = arguments.length, e10 = t10 < 2 ? void 0 : arguments[1];
  if (t10 && void 0 === e10)
    return tE(this, r10);
  var n10 = /* @__PURE__ */ tO(this, r10);
  ty(t10, 1);
  for (var o2 = /* @__PURE__ */ tp(e10), i2 = 0; i2 < n10.length; )
    if (n10[i2++] === o2)
      return true;
  return false;
}, { enumerable: true, unsafe: true });
var tj = function(r10, t10, e10) {
  return e10.get && r6(e10.get, t10, { getter: true }), e10.set && r6(e10.set, t10, { setter: true }), h.f(r10, t10, e10);
}, tP = URLSearchParams.prototype, tx = /* @__PURE__ */ M(tP.forEach);
!g || "size" in tP || tj(tP, "size", { get: function() {
  var r10 = 0;
  return tx(this, function() {
    r10++;
  }), r10;
}, configurable: true, enumerable: true });
var tR = {}, t_ = {}, tI = {}.propertyIsEnumerable, tk = Object.getOwnPropertyDescriptor, tC = tk && !tI.call({ 1: 2 }, 1);
t_.f = tC ? function(r10) {
  var t10 = /* @__PURE__ */ tk(this, r10);
  return !!t10 && t10.enumerable;
} : tI;
var tM = Object, tF = /* @__PURE__ */ M("".split), tL = v(function() {
  return !tM("z").propertyIsEnumerable(0);
}) ? function(r10) {
  return "String" === to(r10) ? tF(r10, "") : tM(r10);
} : tM, tU = function(r10) {
  return tL(/* @__PURE__ */ rc(r10));
}, tD = Object.getOwnPropertyDescriptor;
tR.f = g ? tD : function(r10, t10) {
  if (r10 = /* @__PURE__ */ tU(r10), t10 = /* @__PURE__ */ rS(t10), T)
    try {
      return tD(r10, t10);
    } catch (r11) {
    }
  if (rs(r10, t10))
    return rB(!R(t_.f, r10, t10), r10[t10]);
};
var tz = {}, tB = Math.ceil, tN = Math.floor, tV = Math.trunc || function(r10) {
  var t10 = +r10;
  return (t10 > 0 ? tN : tB)(t10);
}, tW = function(r10) {
  var t10 = +r10;
  return t10 != t10 || 0 === t10 ? 0 : tV(t10);
}, t$ = Math.max, tY = Math.min, tG = Math.min, tK = function(r10) {
  var t10 = /* @__PURE__ */ tW(r10);
  return t10 > 0 ? tG(t10, 9007199254740991) : 0;
}, tq = function(r10) {
  return tK(r10.length);
}, tH = function(r10, t10) {
  var e10 = /* @__PURE__ */ tW(r10);
  return e10 < 0 ? t$(e10 + t10, 0) : tY(e10, t10);
}, tJ = function(r10) {
  return function(t10, e10, n10) {
    var o2, i2 = /* @__PURE__ */ tU(t10), a2 = /* @__PURE__ */ tq(i2);
    if (0 === a2)
      return !r10 && -1;
    var u2 = /* @__PURE__ */ tH(n10, a2);
    if (r10 && e10 != e10) {
      for (; a2 > u2; )
        if ((o2 = i2[u2++]) != o2)
          return true;
    } else
      for (; a2 > u2; u2++)
        if ((r10 || u2 in i2) && i2[u2] === e10)
          return r10 || u2 || 0;
    return !r10 && -1;
  };
}, tQ = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: /* @__PURE__ */ tJ(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: /* @__PURE__ */ tJ(false)
}.indexOf, tX = /* @__PURE__ */ M([].push), tZ = function(r10, t10) {
  var e10, n10 = /* @__PURE__ */ tU(r10), o2 = 0, i2 = [];
  for (e10 in n10)
    !rs(r$, e10) && rs(n10, e10) && tX(i2, e10);
  for (; t10.length > o2; )
    rs(n10, e10 = t10[o2++]) && (~tQ(i2, e10) || tX(i2, e10));
  return i2;
}, t0 = /* @__PURE__ */ ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"].concat("length", "prototype");
tz.f = Object.getOwnPropertyNames || function(r10) {
  return tZ(r10, t0);
};
var t1 = {};
t1.f = Object.getOwnPropertySymbols;
var t2 = /* @__PURE__ */ M([].concat), t4 = _("Reflect", "ownKeys") || function(r10) {
  var t10 = /* @__PURE__ */ tz.f(/* @__PURE__ */ j(r10)), e10 = t1.f;
  return e10 ? t2(t10, /* @__PURE__ */ e10(r10)) : t10;
}, t7 = function(r10, t10, e10) {
  for (var n10 = /* @__PURE__ */ t4(t10), o2 = h.f, i2 = tR.f, a2 = 0; a2 < n10.length; a2++) {
    var u2 = n10[a2];
    rs(r10, u2) || e10 && rs(e10, u2) || o2(r10, u2, /* @__PURE__ */ i2(t10, u2));
  }
}, t8 = /#|\.prototype\./, t9 = function(r10, t10) {
  var e10 = t3[t6(r10)];
  return e10 === er || e10 !== t5 && (y(t10) ? v(t10) : !!t10);
}, t6 = t9.normalize = function(r10) {
  return String(r10).replace(t8, ".").toLowerCase();
}, t3 = t9.data = {}, t5 = t9.NATIVE = "N", er = t9.POLYFILL = "P", et = tR.f, ee = function(r10, t10) {
  var e10, n10, o2, i2, a2, u2 = r10.target, c2 = r10.global, f2 = r10.stat;
  if (e10 = c2 ? b : f2 ? b[u2] || re(u2, {}) : b[u2] && b[u2].prototype)
    for (n10 in t10) {
      if (i2 = t10[n10], o2 = r10.dontCallGetSet ? (a2 = /* @__PURE__ */ et(e10, n10)) && a2.value : e10[n10], !/* @__PURE__ */ t9(c2 ? n10 : u2 + (f2 ? "." : "#") + n10, r10.forced) && void 0 !== o2) {
        if (typeof i2 == typeof o2)
          continue;
        t7(i2, o2);
      }
      (r10.sham || o2 && o2.sham) && rN(i2, "sham", true), r3(e10, n10, i2, r10);
    }
}, en = TypeError, eo = "Reduce of empty array with no initial value", ei = function(r10) {
  return function(t10, e10, n10, o2) {
    var i2 = /* @__PURE__ */ rl(t10), a2 = /* @__PURE__ */ tL(i2), u2 = /* @__PURE__ */ tq(i2);
    if (J(e10), 0 === u2 && n10 < 2)
      throw new en(eo);
    var c2 = r10 ? u2 - 1 : 0, f2 = r10 ? -1 : 1;
    if (n10 < 2)
      for (; ; ) {
        if (c2 in a2) {
          o2 = a2[c2], c2 += f2;
          break;
        }
        if (c2 += f2, r10 ? c2 < 0 : u2 <= c2)
          throw new en(eo);
      }
    for (; r10 ? c2 >= 0 : u2 > c2; c2 += f2)
      c2 in a2 && (o2 = /* @__PURE__ */ e10(o2, a2[c2], c2, i2));
    return o2;
  };
}, ea = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: /* @__PURE__ */ ei(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: /* @__PURE__ */ ei(true)
}, eu = "process" === to(b.process), ec = ea.left;
ee({ target: "Array", proto: true, forced: !eu && N > 79 && N < 83 || !((r = [].reduce) && v(function() {
  r.call(null, function() {
    return 1;
  }, 1);
})) }, { reduce: function(r10) {
  var t10 = arguments.length;
  return ec(this, r10, t10, t10 > 1 ? arguments[1] : void 0);
} });
var ef = TypeError, el = Object.defineProperty, ep = b.self !== b;
try {
  if (g) {
    var es = /* @__PURE__ */ Object.getOwnPropertyDescriptor(b, "self");
    !ep && es && es.get && es.enumerable || tj(b, "self", { get: function() {
      return b;
    }, set: function(r10) {
      if (this !== b)
        throw new ef("Illegal invocation");
      el(b, "self", { value: r10, writable: true, configurable: true, enumerable: true });
    }, configurable: true, enumerable: true });
  } else
    ee({ global: true, simple: true, forced: ep }, { self: b });
} catch (r10) {
}
var ey = Function.prototype, eh = ey.apply, ev = ey.call, eg = "object" == typeof Reflect && Reflect.apply || (P ? ev.bind(eh) : function() {
  return ev.apply(eh, arguments);
}), ed = String, eb = TypeError, ew = function(r10, t10, e10) {
  try {
    return M(/* @__PURE__ */ J(Object.getOwnPropertyDescriptor(r10, t10)[e10]));
  } catch (r11) {
  }
}, em = function(r10) {
  if (w(r10) || null === r10)
    return r10;
  throw new eb("Can't set " + ed(r10) + " as a prototype");
}, eA = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var r10, t10 = false, e10 = {};
  try {
    (r10 = /* @__PURE__ */ ew(Object.prototype, "__proto__", "set"))(e10, []), t10 = e10 instanceof Array;
  } catch (r11) {
  }
  return function(e11, n10) {
    return j(e11), em(n10), t10 ? r10(e11, n10) : e11.__proto__ = n10, e11;
  };
}() : void 0), eT = h.f, eO = Error, eE = /* @__PURE__ */ M("".replace), eS = String(new eO("zxcasd").stack), ej = /\n\s*at [^:]*:[^\n]*/, eP = /* @__PURE__ */ ej.test(eS), ex = !v(function() {
  var r10 = Error("a");
  return !("stack" in r10) || // eslint-disable-next-line es/no-object-defineproperty -- safe
  (Object.defineProperty(r10, "stack", /* @__PURE__ */ rB(1, 7)), 7 !== r10.stack);
}), eR = function(r10, t10) {
  if (eP && "string" == typeof r10 && !eO.prepareStackTrace)
    for (; t10--; )
      r10 = /* @__PURE__ */ eE(r10, ej, "");
  return r10;
}, e_ = Error.captureStackTrace, eI = function(r10, t10, e10) {
  e10 in r10 || eT(r10, e10, { configurable: true, get: function() {
    return t10[e10];
  }, set: function(r11) {
    t10[e10] = r11;
  } });
}, ek = function(r10, t10, e10) {
  var n10, o2;
  return eA && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
  y(n10 = t10.constructor) && n10 !== e10 && w(o2 = n10.prototype) && o2 !== e10.prototype && eA(r10, o2), r10;
}, eC = function(r10, t10) {
  w(t10) && "cause" in t10 && rN(r10, "cause", t10.cause);
}, eM = function(r10, t10, e10, n10) {
  ex && (e_ ? e_(r10, t10) : rN(r10, "stack", /* @__PURE__ */ eR(e10, n10)));
}, eF = function(r10, t10, e10, n10) {
  var o2 = "stackTraceLimit", i2 = n10 ? 2 : 1, a2 = /* @__PURE__ */ r10.split("."), u2 = a2[a2.length - 1], c2 = /* @__PURE__ */ _.apply(null, a2);
  if (c2) {
    var f2 = c2.prototype;
    if (rs(f2, "cause") && delete f2.cause, !e10)
      return c2;
    var l2 = /* @__PURE__ */ _("Error"), p2 = t10(function(r11, t11) {
      var e11 = /* @__PURE__ */ function(r12, t12) {
        return void 0 === r12 ? arguments.length < 2 ? "" : t12 : tp(r12);
      }(n10 ? t11 : r11, void 0), o3 = n10 ? new c2(r11) : new c2();
      return void 0 !== e11 && rN(o3, "message", e11), eM(o3, p2, o3.stack, 2), this && F(f2, this) && ek(o3, this, p2), arguments.length > i2 && eC(o3, arguments[i2]), o3;
    });
    p2.prototype = f2, "Error" !== u2 ? eA ? eA(p2, l2) : t7(p2, l2, { name: true }) : g && o2 in c2 && (eI(p2, c2, o2), eI(p2, c2, "prepareStackTrace")), t7(p2, c2);
    try {
      f2.name !== u2 && rN(f2, "name", u2), f2.constructor = p2;
    } catch (r11) {
    }
    return p2;
  }
}, eL = "WebAssembly", eU = b[eL], eD = 7 !== Error("e", { cause: 7 }).cause, ez = function(r10, t10) {
  var e10 = {};
  e10[r10] = /* @__PURE__ */ eF(r10, t10, eD), ee({ global: true, constructor: true, arity: 1, forced: eD }, e10);
}, eB = function(r10, t10) {
  if (eU && eU[r10]) {
    var e10 = {};
    e10[r10] = /* @__PURE__ */ eF(eL + "." + r10, t10, eD), ee({ target: eL, stat: true, constructor: true, arity: 1, forced: eD }, e10);
  }
};
ez("Error", function(r10) {
  return function(t10) {
    return eg(r10, this, arguments);
  };
}), ez("EvalError", function(r10) {
  return function(t10) {
    return eg(r10, this, arguments);
  };
}), ez("RangeError", function(r10) {
  return function(t10) {
    return eg(r10, this, arguments);
  };
}), ez("ReferenceError", function(r10) {
  return function(t10) {
    return eg(r10, this, arguments);
  };
}), ez("SyntaxError", function(r10) {
  return function(t10) {
    return eg(r10, this, arguments);
  };
}), ez("TypeError", function(r10) {
  return function(t10) {
    return eg(r10, this, arguments);
  };
}), ez("URIError", function(r10) {
  return function(t10) {
    return eg(r10, this, arguments);
  };
}), eB("CompileError", function(r10) {
  return function(t10) {
    return eg(r10, this, arguments);
  };
}), eB("LinkError", function(r10) {
  return function(t10) {
    return eg(r10, this, arguments);
  };
}), eB("RuntimeError", function(r10) {
  return function(t10) {
    return eg(r10, this, arguments);
  };
});
var eN = Array.isArray || function(r10) {
  return "Array" === to(r10);
}, eV = TypeError, eW = Object.getOwnPropertyDescriptor, e$ = g && !function() {
  if (void 0 !== this)
    return true;
  try {
    Object.defineProperty([], "length", { writable: false }).length = 1;
  } catch (r10) {
    return r10 instanceof TypeError;
  }
}() ? function(r10, t10) {
  if (eN(r10) && !eW(r10, "length").writable)
    throw new eV("Cannot set read only .length");
  return r10.length = t10;
} : function(r10, t10) {
  return r10.length = t10;
}, eY = TypeError, eG = function(r10) {
  if (r10 > 9007199254740991)
    throw eY("Maximum allowed index exceeded");
  return r10;
};
ee({ target: "Array", proto: true, arity: 1, forced: /* @__PURE__ */ v(function() {
  return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
}) || !function() {
  try {
    Object.defineProperty([], "length", { writable: false }).push();
  } catch (r10) {
    return r10 instanceof TypeError;
  }
}() }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function(r10) {
    var t10 = /* @__PURE__ */ rl(this), e10 = /* @__PURE__ */ tq(t10), n10 = arguments.length;
    eG(e10 + n10);
    for (var o2 = 0; o2 < n10; o2++)
      t10[e10] = arguments[o2], e10++;
    return e$(t10, e10), e10;
  }
});
var eK = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView, eq = !v(function() {
  function r10() {
  }
  return r10.prototype.constructor = null, Object.getPrototypeOf(new r10()) !== r10.prototype;
}), eH = /* @__PURE__ */ rW("IE_PROTO"), eJ = Object, eQ = eJ.prototype, eX = eq ? eJ.getPrototypeOf : function(r10) {
  var t10 = /* @__PURE__ */ rl(r10);
  if (rs(t10, eH))
    return t10[eH];
  var e10 = t10.constructor;
  return y(e10) && t10 instanceof e10 ? e10.prototype : t10 instanceof eJ ? eQ : null;
}, eZ = rJ.enforce, e0 = rJ.get, e1 = b.Int8Array, e2 = e1 && e1.prototype, e4 = b.Uint8ClampedArray, e7 = e4 && e4.prototype, e8 = e1 && eX(e1), e9 = e2 && eX(e2), e6 = Object.prototype, e3 = b.TypeError, e5 = /* @__PURE__ */ rm("toStringTag"), nr = /* @__PURE__ */ rg("TYPED_ARRAY_TAG"), nt = "TypedArrayConstructor", ne = eK && !!eA && "Opera" !== tf(b.opera), nn = false, no = { Int8Array: 1, Uint8Array: 1, Uint8ClampedArray: 1, Int16Array: 2, Uint16Array: 2, Int32Array: 4, Uint32Array: 4, Float32Array: 4, Float64Array: 8 }, ni = { BigInt64Array: 8, BigUint64Array: 8 }, na = function(r10) {
  var t10 = /* @__PURE__ */ eX(r10);
  if (w(t10)) {
    var e10 = /* @__PURE__ */ e0(t10);
    return e10 && rs(e10, nt) ? e10[nt] : na(t10);
  }
}, nu = function(r10) {
  if (!w(r10))
    return false;
  var t10 = /* @__PURE__ */ tf(r10);
  return rs(no, t10) || rs(ni, t10);
};
for (u in no)
  (f = (c = b[u]) && c.prototype) ? eZ(f)[nt] = c : ne = false;
for (u in ni)
  (f = (c = b[u]) && c.prototype) && (eZ(f)[nt] = c);
if ((!ne || !y(e8) || e8 === Function.prototype) && // eslint-disable-next-line no-shadow -- safe
(e8 = function() {
  throw new e3("Incorrect invocation");
}, ne))
  for (u in no)
    b[u] && eA(b[u], e8);
if ((!ne || !e9 || e9 === e6) && (e9 = e8.prototype, ne))
  for (u in no)
    b[u] && eA(b[u].prototype, e9);
if (ne && eX(e7) !== e9 && eA(e7, e9), g && !rs(e9, e5))
  for (u in nn = true, tj(e9, e5, { configurable: true, get: function() {
    return w(this) ? this[nr] : void 0;
  } }), no)
    b[u] && rN(b[u], nr, u);
var nc = { NATIVE_ARRAY_BUFFER_VIEWS: ne, TYPED_ARRAY_TAG: nn && nr, aTypedArray: function(r10) {
  if (nu(r10))
    return r10;
  throw new e3("Target is not a typed array");
}, aTypedArrayConstructor: function(r10) {
  if (y(r10) && (!eA || F(e8, r10)))
    return r10;
  throw new e3(q(r10) + " is not a typed array constructor");
}, exportTypedArrayMethod: function(r10, t10, e10, n10) {
  if (g) {
    if (e10)
      for (var o2 in no) {
        var i2 = b[o2];
        if (i2 && rs(i2.prototype, r10))
          try {
            delete i2.prototype[r10];
          } catch (e11) {
            try {
              i2.prototype[r10] = t10;
            } catch (r11) {
            }
          }
      }
    (!e9[r10] || e10) && r3(e9, r10, e10 ? t10 : ne && e2[r10] || t10, n10);
  }
}, exportTypedArrayStaticMethod: function(r10, t10, e10) {
  var n10, o2;
  if (g) {
    if (eA) {
      if (e10) {
        for (n10 in no)
          if ((o2 = b[n10]) && rs(o2, r10))
            try {
              delete o2[r10];
            } catch (r11) {
            }
      }
      if (e8[r10] && !e10)
        return;
      try {
        return r3(e8, r10, e10 ? t10 : ne && e8[r10] || t10);
      } catch (r11) {
      }
    }
    for (n10 in no)
      (o2 = b[n10]) && (!o2[r10] || e10) && r3(o2, r10, t10);
  }
}, getTypedArrayConstructor: na, isView: function(r10) {
  if (!w(r10))
    return false;
  var t10 = /* @__PURE__ */ tf(r10);
  return "DataView" === t10 || rs(no, t10) || rs(ni, t10);
}, isTypedArray: nu, TypedArray: e8, TypedArrayPrototype: e9 }, nf = nc.aTypedArray;
(0, nc.exportTypedArrayMethod)("at", function(r10) {
  var t10 = /* @__PURE__ */ nf(this), e10 = /* @__PURE__ */ tq(t10), n10 = /* @__PURE__ */ tW(r10), o2 = n10 >= 0 ? n10 : e10 + n10;
  return o2 < 0 || o2 >= e10 ? void 0 : t10[o2];
});
var nl = function(r10) {
  if ("Function" === to(r10))
    return M(r10);
}, np = /* @__PURE__ */ nl(nl.bind), ns = function(r10) {
  var t10 = 1 === r10;
  return function(e10, n10, o2) {
    for (var i2, a2 = /* @__PURE__ */ rl(e10), u2 = /* @__PURE__ */ tL(a2), c2 = /* @__PURE__ */ tq(u2), f2 = (J(n10), void 0 === o2 ? n10 : P ? np(n10, o2) : function() {
      return n10.apply(o2, arguments);
    }); c2-- > 0; )
      if (/* @__PURE__ */ f2(i2 = u2[c2], c2, a2))
        switch (r10) {
          case 0:
            return i2;
          case 1:
            return c2;
        }
    return t10 ? -1 : void 0;
  };
}, ny = {
  // `Array.prototype.findLast` method
  // https://github.com/tc39/proposal-array-find-from-last
  findLast: /* @__PURE__ */ ns(0),
  // `Array.prototype.findLastIndex` method
  // https://github.com/tc39/proposal-array-find-from-last
  findLastIndex: /* @__PURE__ */ ns(1)
}, nh = ny.findLast, nv = nc.aTypedArray;
(0, nc.exportTypedArrayMethod)("findLast", function(r10) {
  return nh(/* @__PURE__ */ nv(this), r10, arguments.length > 1 ? arguments[1] : void 0);
});
var ng = ny.findLastIndex, nd = nc.aTypedArray;
(0, nc.exportTypedArrayMethod)("findLastIndex", function(r10) {
  return ng(/* @__PURE__ */ nd(this), r10, arguments.length > 1 ? arguments[1] : void 0);
});
var nb = RangeError, nw = function(r10) {
  var t10 = /* @__PURE__ */ tW(r10);
  if (t10 < 0)
    throw new nb("The argument can't be less than 0");
  return t10;
}, nm = RangeError, nA = function(r10, t10) {
  var e10 = /* @__PURE__ */ nw(r10);
  if (e10 % t10)
    throw new nm("Wrong offset");
  return e10;
}, nT = b.RangeError, nO = b.Int8Array, nE = nO && nO.prototype, nS = nE && nE.set, nj = nc.aTypedArray, nP = nc.exportTypedArrayMethod, nx = !v(function() {
  var r10 = new Uint8ClampedArray(2);
  return R(nS, r10, { length: 1, 0: 3 }, 1), 3 !== r10[1];
}), nR = nx && nc.NATIVE_ARRAY_BUFFER_VIEWS && v(function() {
  var r10 = new nO(2);
  return r10.set(1), r10.set("2", 1), 0 !== r10[0] || 2 !== r10[1];
});
nP("set", function(r10) {
  nj(this);
  var t10 = /* @__PURE__ */ nA(arguments.length > 1 ? arguments[1] : void 0, 1), e10 = /* @__PURE__ */ rl(r10);
  if (nx)
    return R(nS, this, e10, t10);
  var n10 = this.length, o2 = /* @__PURE__ */ tq(e10), i2 = 0;
  if (o2 + t10 > n10)
    throw new nT("Wrong length");
  for (; i2 < o2; )
    this[t10 + i2] = e10[i2++];
}, !nx || nR);
var n_ = function(r10, t10) {
  for (var e10 = /* @__PURE__ */ tq(r10), n10 = new t10(e10), o2 = 0; o2 < e10; o2++)
    n10[o2] = r10[e10 - o2 - 1];
  return n10;
}, nI = nc.aTypedArray, nk = nc.exportTypedArrayMethod, nC = nc.getTypedArrayConstructor;
nk("toReversed", function() {
  return n_(/* @__PURE__ */ nI(this), /* @__PURE__ */ nC(this));
});
var nM = function(r10, t10, e10) {
  for (var n10 = 0, o2 = arguments.length > 2 ? e10 : tq(t10), i2 = new r10(o2); o2 > n10; )
    i2[n10] = t10[n10++];
  return i2;
}, nF = nc.aTypedArray, nL = nc.getTypedArrayConstructor, nU = nc.exportTypedArrayMethod, nD = /* @__PURE__ */ M(nc.TypedArrayPrototype.sort);
nU("toSorted", function(r10) {
  void 0 !== r10 && J(r10);
  var t10 = /* @__PURE__ */ nF(this);
  return nD(/* @__PURE__ */ nM(/* @__PURE__ */ nL(t10), t10), r10);
});
var nz = RangeError, nB = TypeError, nN = function(r10, t10, e10, n10) {
  var o2 = /* @__PURE__ */ tq(r10), i2 = /* @__PURE__ */ tW(e10), a2 = i2 < 0 ? o2 + i2 : i2;
  if (a2 >= o2 || a2 < 0)
    throw new nz("Incorrect index");
  for (var u2 = new t10(o2), c2 = 0; c2 < o2; c2++)
    u2[c2] = c2 === a2 ? n10 : r10[c2];
  return u2;
}, nV = function(r10) {
  var t10 = /* @__PURE__ */ tf(r10);
  return "BigInt64Array" === t10 || "BigUint64Array" === t10;
}, nW = function(r10) {
  var t10 = /* @__PURE__ */ rE(r10, "number");
  if ("number" == typeof t10)
    throw new nB("Can't convert number to bigint");
  return BigInt(t10);
}, n$ = nc.aTypedArray, nY = nc.getTypedArrayConstructor;
(0, nc.exportTypedArrayMethod)("with", { with: function(r10, t10) {
  var e10 = /* @__PURE__ */ n$(this), n10 = /* @__PURE__ */ tW(r10), o2 = nV(e10) ? nW(t10) : +t10;
  return nN(e10, /* @__PURE__ */ nY(e10), n10, o2);
} }.with, !function() {
  try {
    new Int8Array(1).with(2, { valueOf: function() {
      throw 8;
    } });
  } catch (r10) {
    return 8 === r10;
  }
}());
var nG = h.f, nK = /* @__PURE__ */ rm("toStringTag");
ee({ global: true }, { Reflect: {} }), (t = b.Reflect) && !rs(t, nK) && nG(t, nK, { configurable: true, value: "Reflect" });
var nq = /* @__PURE__ */ rm("match"), nH = function() {
  var r10 = /* @__PURE__ */ j(this), t10 = "";
  return r10.hasIndices && (t10 += "d"), r10.global && (t10 += "g"), r10.ignoreCase && (t10 += "i"), r10.multiline && (t10 += "m"), r10.dotAll && (t10 += "s"), r10.unicode && (t10 += "u"), r10.unicodeSets && (t10 += "v"), r10.sticky && (t10 += "y"), t10;
}, nJ = RegExp.prototype, nQ = Math.floor, nX = /* @__PURE__ */ M("".charAt), nZ = /* @__PURE__ */ M("".replace), n0 = /* @__PURE__ */ M("".slice), n1 = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, n2 = /\$([$&'`]|\d{1,2})/g, n4 = function(r10) {
  var t10;
  return w(r10) && (void 0 !== (t10 = r10[nq]) ? !!t10 : "RegExp" === to(r10));
}, n7 = function(r10) {
  var t10 = r10.flags;
  return void 0 === t10 && !("flags" in nJ) && !rs(r10, "flags") && F(nJ, r10) ? R(nH, r10) : t10;
}, n8 = function(r10, t10, e10, n10, o2, i2) {
  var a2 = e10 + r10.length, u2 = n10.length, c2 = n2;
  return void 0 !== o2 && (o2 = /* @__PURE__ */ rl(o2), c2 = n1), nZ(i2, c2, function(i3, c3) {
    var f2;
    switch (nX(c3, 0)) {
      case "$":
        return "$";
      case "&":
        return r10;
      case "`":
        return n0(t10, 0, e10);
      case "'":
        return n0(t10, a2);
      case "<":
        f2 = o2[n0(c3, 1, -1)];
        break;
      default:
        var l2 = +c3;
        if (0 === l2)
          return i3;
        if (l2 > u2) {
          var p2 = /* @__PURE__ */ nQ(l2 / 10);
          if (0 === p2)
            return i3;
          if (p2 <= u2)
            return void 0 === n10[p2 - 1] ? nX(c3, 1) : n10[p2 - 1] + nX(c3, 1);
          return i3;
        }
        f2 = n10[l2 - 1];
    }
    return void 0 === f2 ? "" : f2;
  });
}, n9 = /* @__PURE__ */ rm("replace"), n6 = TypeError, n3 = /* @__PURE__ */ M("".indexOf);
M("".replace);
var n5 = /* @__PURE__ */ M("".slice), or = Math.max;
ee({ target: "String", proto: true }, { replaceAll: function(r10, t10) {
  var e10, n10, o2, i2, a2, u2, c2, f2 = /* @__PURE__ */ rc(this), l2 = 0, p2 = 0, s2 = "";
  if (!Q(r10)) {
    if (/* @__PURE__ */ n4(r10) && !~n3(/* @__PURE__ */ tp(/* @__PURE__ */ rc(/* @__PURE__ */ n7(r10))), "g"))
      throw new n6("`.replaceAll` does not allow non-global regexes");
    if (e10 = /* @__PURE__ */ X(r10, n9))
      return R(e10, r10, f2, t10);
  }
  for (n10 = /* @__PURE__ */ tp(f2), o2 = /* @__PURE__ */ tp(r10), (i2 = /* @__PURE__ */ y(t10)) || (t10 = /* @__PURE__ */ tp(t10)), u2 = /* @__PURE__ */ or(1, a2 = o2.length), l2 = /* @__PURE__ */ n3(n10, o2); -1 !== l2; )
    c2 = i2 ? tp(/* @__PURE__ */ t10(o2, l2, n10)) : n8(o2, n10, l2, [], void 0, t10), s2 += n5(n10, p2, l2) + c2, p2 = l2 + a2, l2 = l2 + u2 > n10.length ? -1 : n3(n10, o2, l2 + u2);
  return p2 < n10.length && (s2 += /* @__PURE__ */ n5(n10, p2)), s2;
} });
export {
  p as g
};
