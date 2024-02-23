var r, t, e, n, o, i, u, a, c, f, l, p = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function s(r10) {
  return r10 && r10.__esModule && Object.prototype.hasOwnProperty.call(r10, "default") ? r10.default : r10;
}
var y = "object" == typeof document && document.all, h = void 0 === y && void 0 !== y ? function(r10) {
  return "function" == typeof r10 || r10 === y;
} : function(r10) {
  return "function" == typeof r10;
}, v = {}, g = function(r10) {
  try {
    return !!r10();
  } catch (r11) {
    return true;
  }
}, d = !g(function() {
  return 7 !== Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1];
}), b = function(r10) {
  return r10 && r10.Math === Math && r10;
}, w = b("object" == typeof globalThis && globalThis) || b("object" == typeof window && window) || b("object" == typeof self && self) || b("object" == typeof p && p) || b("object" == typeof p && p) || /* @__PURE__ */ function() {
  return this;
}() || Function("return this")(), m = function(r10) {
  return "object" == typeof r10 ? null !== r10 : h(r10);
}, A = w.document, O = m(A) && m(A.createElement), T = !d && !g(function() {
  return 7 !== Object.defineProperty(O ? A.createElement("div") : {}, "a", { get: function() {
    return 7;
  } }).a;
}), E = d && g(function() {
  return 42 !== Object.defineProperty(function() {
  }, "prototype", { value: 42, writable: false }).prototype;
}), S = String, j = TypeError, P = function(r10) {
  if (m(r10))
    return r10;
  throw new j(S(r10) + " is not an object");
}, x = !g(function() {
  var r10 = (function() {
  }).bind();
  return "function" != typeof r10 || r10.hasOwnProperty("prototype");
}), R = Function.prototype.call, _ = x ? R.bind(R) : function() {
  return R.apply(R, arguments);
}, I = function(r10, t10) {
  var e10;
  return arguments.length < 2 ? h(e10 = w[r10]) ? e10 : void 0 : w[r10] && w[r10][t10];
}, k = Function.prototype, C = k.call, M = x && k.bind.bind(C, C), F = x ? M : function(r10) {
  return function() {
    return C.apply(r10, arguments);
  };
}, L = F({}.isPrototypeOf), U = "undefined" != typeof navigator && String(navigator.userAgent) || "", D = w.process, z = w.Deno, B = D && D.versions || z && z.version, N = B && B.v8;
N && (o = (n = N.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])), !o && U && (!(n = U.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = U.match(/Chrome\/(\d+)/)) && (o = +n[1]);
var W = o, $ = w.String, V = !!Object.getOwnPropertySymbols && !g(function() {
  var r10 = Symbol("symbol detection");
  return !$(r10) || !(Object(r10) instanceof Symbol) || !Symbol.sham && W && W < 41;
}), Y = V && !Symbol.sham && "symbol" == typeof Symbol.iterator, G = Object, K = Y ? function(r10) {
  return "symbol" == typeof r10;
} : function(r10) {
  var t10 = I("Symbol");
  return h(t10) && L(t10.prototype, G(r10));
}, q = String, H = function(r10) {
  try {
    return q(r10);
  } catch (r11) {
    return "Object";
  }
}, J = TypeError, Q = function(r10) {
  if (h(r10))
    return r10;
  throw new J(H(r10) + " is not a function");
}, X = function(r10) {
  return null == r10;
}, Z = function(r10, t10) {
  var e10 = r10[t10];
  return X(e10) ? void 0 : Q(e10);
}, rr = TypeError, rt = { exports: {} }, re = Object.defineProperty, rn = function(r10, t10) {
  try {
    re(w, r10, { value: t10, configurable: true, writable: true });
  } catch (e10) {
    w[r10] = t10;
  }
  return t10;
}, ro = "__core-js_shared__", ri = rt.exports = w[ro] || rn(ro, {});
(ri.versions || (ri.versions = [])).push({ version: "3.36.0", mode: "global", copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE", source: "https://github.com/zloirock/core-js" });
var ru = rt.exports, ra = function(r10, t10) {
  return ru[r10] || (ru[r10] = t10 || {});
}, rc = TypeError, rf = function(r10) {
  if (X(r10))
    throw new rc("Can't call method on " + r10);
  return r10;
}, rl = Object, rp = function(r10) {
  return rl(rf(r10));
}, rs = F({}.hasOwnProperty), ry = Object.hasOwn || function(r10, t10) {
  return rs(rp(r10), t10);
}, rh = 0, rv = Math.random(), rg = F(1 .toString), rd = function(r10) {
  return "Symbol(" + (void 0 === r10 ? "" : r10) + ")_" + rg(++rh + rv, 36);
}, rb = w.Symbol, rw = ra("wks"), rm = Y ? rb.for || rb : rb && rb.withoutSetter || rd, rA = function(r10) {
  return ry(rw, r10) || (rw[r10] = V && ry(rb, r10) ? rb[r10] : rm("Symbol." + r10)), rw[r10];
}, rO = function(r10, t10) {
  var e10, n5;
  if ("string" === t10 && h(e10 = r10.toString) && !m(n5 = _(e10, r10)) || h(e10 = r10.valueOf) && !m(n5 = _(e10, r10)) || "string" !== t10 && h(e10 = r10.toString) && !m(n5 = _(e10, r10)))
    return n5;
  throw new rr("Can't convert object to primitive value");
}, rT = TypeError, rE = rA("toPrimitive"), rS = function(r10, t10) {
  if (!m(r10) || K(r10))
    return r10;
  var e10, n5 = Z(r10, rE);
  if (n5) {
    if (void 0 === t10 && (t10 = "default"), !m(e10 = _(n5, r10, t10)) || K(e10))
      return e10;
    throw new rT("Can't convert object to primitive value");
  }
  return void 0 === t10 && (t10 = "number"), rO(r10, t10);
}, rj = function(r10) {
  var t10 = rS(r10, "string");
  return K(t10) ? t10 : t10 + "";
}, rP = TypeError, rx = Object.defineProperty, rR = Object.getOwnPropertyDescriptor, r_ = "enumerable", rI = "configurable", rk = "writable";
v.f = d ? E ? function(r10, t10, e10) {
  if (P(r10), t10 = rj(t10), P(e10), "function" == typeof r10 && "prototype" === t10 && "value" in e10 && rk in e10 && !e10[rk]) {
    var n5 = rR(r10, t10);
    n5 && n5[rk] && (r10[t10] = e10.value, e10 = { configurable: rI in e10 ? e10[rI] : n5[rI], enumerable: r_ in e10 ? e10[r_] : n5[r_], writable: false });
  }
  return rx(r10, t10, e10);
} : rx : function(r10, t10, e10) {
  if (P(r10), t10 = rj(t10), P(e10), T)
    try {
      return rx(r10, t10, e10);
    } catch (r11) {
    }
  if ("get" in e10 || "set" in e10)
    throw new rP("Accessors not supported");
  return "value" in e10 && (r10[t10] = e10.value), r10;
};
var rC = { exports: {} }, rM = Function.prototype, rF = d && Object.getOwnPropertyDescriptor, rL = ry(rM, "name") && (!d || d && rF(rM, "name").configurable), rU = F(Function.toString);
h(ru.inspectSource) || (ru.inspectSource = function(r10) {
  return rU(r10);
});
var rD = ru.inspectSource, rz = w.WeakMap, rB = h(rz) && /native code/.test(String(rz)), rN = function(r10, t10) {
  return { enumerable: !(1 & r10), configurable: !(2 & r10), writable: !(4 & r10), value: t10 };
}, rW = d ? function(r10, t10, e10) {
  return v.f(r10, t10, rN(1, e10));
} : function(r10, t10, e10) {
  return r10[t10] = e10, r10;
}, r$ = ra("keys"), rV = function(r10) {
  return r$[r10] || (r$[r10] = rd(r10));
}, rY = {}, rG = "Object already initialized", rK = w.TypeError, rq = w.WeakMap;
if (rB || ru.state) {
  var rH = ru.state || (ru.state = new rq());
  rH.get = rH.get, rH.has = rH.has, rH.set = rH.set, i = function(r10, t10) {
    if (rH.has(r10))
      throw new rK(rG);
    return t10.facade = r10, rH.set(r10, t10), t10;
  }, u = function(r10) {
    return rH.get(r10) || {};
  }, a = function(r10) {
    return rH.has(r10);
  };
} else {
  var rJ = rV("state");
  rY[rJ] = true, i = function(r10, t10) {
    if (ry(r10, rJ))
      throw new rK(rG);
    return t10.facade = r10, rW(r10, rJ, t10), t10;
  }, u = function(r10) {
    return ry(r10, rJ) ? r10[rJ] : {};
  }, a = function(r10) {
    return ry(r10, rJ);
  };
}
var rQ = u, rX = function(r10) {
  return a(r10) ? u(r10) : i(r10, {});
}, rZ = String, r0 = Object.defineProperty, r1 = F("".slice), r2 = F("".replace), r4 = F([].join), r7 = d && !g(function() {
  return 8 !== r0(function() {
  }, "length", { value: 8 }).length;
}), r8 = String(String).split("String"), r9 = rC.exports = function(r10, t10, e10) {
  "Symbol(" === r1(rZ(t10), 0, 7) && (t10 = "[" + r2(rZ(t10), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), e10 && e10.getter && (t10 = "get " + t10), e10 && e10.setter && (t10 = "set " + t10), (!ry(r10, "name") || rL && r10.name !== t10) && (d ? r0(r10, "name", { value: t10, configurable: true }) : r10.name = t10), r7 && e10 && ry(e10, "arity") && r10.length !== e10.arity && r0(r10, "length", { value: e10.arity });
  try {
    e10 && ry(e10, "constructor") && e10.constructor ? d && r0(r10, "prototype", { writable: false }) : r10.prototype && (r10.prototype = void 0);
  } catch (r11) {
  }
  var n5 = rX(r10);
  return ry(n5, "source") || (n5.source = r4(r8, "string" == typeof t10 ? t10 : "")), r10;
};
Function.prototype.toString = r9(function() {
  return h(this) && rQ(this).source || rD(this);
}, "toString");
var r6 = rC.exports, r3 = function(r10, t10, e10, n5) {
  n5 || (n5 = {});
  var o2 = n5.enumerable, i2 = void 0 !== n5.name ? n5.name : t10;
  if (h(e10) && r6(e10, i2, n5), n5.global)
    o2 ? r10[t10] = e10 : rn(t10, e10);
  else {
    try {
      n5.unsafe ? r10[t10] && (o2 = true) : delete r10[t10];
    } catch (r11) {
    }
    o2 ? r10[t10] = e10 : v.f(r10, t10, { value: e10, enumerable: false, configurable: !n5.nonConfigurable, writable: !n5.nonWritable });
  }
  return r10;
}, r5 = rA("toStringTag"), tr = {};
tr[r5] = "z";
var tt = "[object z]" === String(tr), te = F({}.toString), tn = F("".slice), to = function(r10) {
  return tn(te(r10), 8, -1);
}, ti = rA("toStringTag"), tu = Object, ta = "Arguments" === to(/* @__PURE__ */ function() {
  return arguments;
}()), tc = function(r10, t10) {
  try {
    return r10[t10];
  } catch (r11) {
  }
}, tf = tt ? to : function(r10) {
  var t10, e10, n5;
  return void 0 === r10 ? "Undefined" : null === r10 ? "Null" : "string" == typeof (e10 = tc(t10 = tu(r10), ti)) ? e10 : ta ? to(t10) : "Object" === (n5 = to(t10)) && h(t10.callee) ? "Arguments" : n5;
}, tl = String, tp = function(r10) {
  if ("Symbol" === tf(r10))
    throw TypeError("Cannot convert a Symbol value to a string");
  return tl(r10);
}, ts = TypeError, ty = function(r10, t10) {
  if (r10 < t10)
    throw new ts("Not enough arguments");
  return r10;
}, th = URLSearchParams, tv = th.prototype, tg = F(tv.append), td = F(tv.delete), tb = F(tv.forEach), tw = F([].push), tm = new th("a=1&a=2&b=3");
tm.delete("a", 1), tm.delete("b", void 0), tm + "" != "a=2" && r3(tv, "delete", function(r10) {
  var t10, e10 = arguments.length, n5 = e10 < 2 ? void 0 : arguments[1];
  if (e10 && void 0 === n5)
    return td(this, r10);
  var o2 = [];
  tb(this, function(r11, t11) {
    tw(o2, { key: t11, value: r11 });
  }), ty(e10, 1);
  for (var i2 = tp(r10), u2 = tp(n5), a2 = 0, c2 = 0, f2 = false, l2 = o2.length; a2 < l2; )
    t10 = o2[a2++], f2 || t10.key === i2 ? (f2 = true, td(this, t10.key)) : c2++;
  for (; c2 < l2; )
    (t10 = o2[c2++]).key === i2 && t10.value === u2 || tg(this, t10.key, t10.value);
}, { enumerable: true, unsafe: true });
var tA = URLSearchParams, tO = tA.prototype, tT = F(tO.getAll), tE = F(tO.has), tS = new tA("a=1");
(tS.has("a", 2) || !tS.has("a", void 0)) && r3(tO, "has", function(r10) {
  var t10 = arguments.length, e10 = t10 < 2 ? void 0 : arguments[1];
  if (t10 && void 0 === e10)
    return tE(this, r10);
  var n5 = tT(this, r10);
  ty(t10, 1);
  for (var o2 = tp(e10), i2 = 0; i2 < n5.length; )
    if (n5[i2++] === o2)
      return true;
  return false;
}, { enumerable: true, unsafe: true });
var tj = function(r10, t10, e10) {
  return e10.get && r6(e10.get, t10, { getter: true }), e10.set && r6(e10.set, t10, { setter: true }), v.f(r10, t10, e10);
}, tP = URLSearchParams.prototype, tx = F(tP.forEach);
!d || "size" in tP || tj(tP, "size", { get: function() {
  var r10 = 0;
  return tx(this, function() {
    r10++;
  }), r10;
}, configurable: true, enumerable: true });
var tR = {}, t_ = {}, tI = {}.propertyIsEnumerable, tk = Object.getOwnPropertyDescriptor, tC = tk && !tI.call({ 1: 2 }, 1);
t_.f = tC ? function(r10) {
  var t10 = tk(this, r10);
  return !!t10 && t10.enumerable;
} : tI;
var tM = Object, tF = F("".split), tL = g(function() {
  return !tM("z").propertyIsEnumerable(0);
}) ? function(r10) {
  return "String" === to(r10) ? tF(r10, "") : tM(r10);
} : tM, tU = function(r10) {
  return tL(rf(r10));
}, tD = Object.getOwnPropertyDescriptor;
tR.f = d ? tD : function(r10, t10) {
  if (r10 = tU(r10), t10 = rj(t10), T)
    try {
      return tD(r10, t10);
    } catch (r11) {
    }
  if (ry(r10, t10))
    return rN(!_(t_.f, r10, t10), r10[t10]);
};
var tz = {}, tB = Math.ceil, tN = Math.floor, tW = Math.trunc || function(r10) {
  var t10 = +r10;
  return (t10 > 0 ? tN : tB)(t10);
}, t$ = function(r10) {
  var t10 = +r10;
  return t10 != t10 || 0 === t10 ? 0 : tW(t10);
}, tV = Math.max, tY = Math.min, tG = Math.min, tK = function(r10) {
  var t10 = t$(r10);
  return t10 > 0 ? tG(t10, 9007199254740991) : 0;
}, tq = function(r10) {
  return tK(r10.length);
}, tH = function(r10, t10) {
  var e10 = t$(r10);
  return e10 < 0 ? tV(e10 + t10, 0) : tY(e10, t10);
}, tJ = function(r10) {
  return function(t10, e10, n5) {
    var o2, i2 = tU(t10), u2 = tq(i2);
    if (0 === u2)
      return !r10 && -1;
    var a2 = tH(n5, u2);
    if (r10 && e10 != e10) {
      for (; u2 > a2; )
        if ((o2 = i2[a2++]) != o2)
          return true;
    } else
      for (; u2 > a2; a2++)
        if ((r10 || a2 in i2) && i2[a2] === e10)
          return r10 || a2 || 0;
    return !r10 && -1;
  };
}, tQ = { includes: tJ(true), indexOf: tJ(false) }.indexOf, tX = F([].push), tZ = function(r10, t10) {
  var e10, n5 = tU(r10), o2 = 0, i2 = [];
  for (e10 in n5)
    !ry(rY, e10) && ry(n5, e10) && tX(i2, e10);
  for (; t10.length > o2; )
    ry(n5, e10 = t10[o2++]) && (~tQ(i2, e10) || tX(i2, e10));
  return i2;
}, t0 = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"].concat("length", "prototype");
tz.f = Object.getOwnPropertyNames || function(r10) {
  return tZ(r10, t0);
};
var t1 = {};
t1.f = Object.getOwnPropertySymbols;
var t2 = F([].concat), t4 = I("Reflect", "ownKeys") || function(r10) {
  var t10 = tz.f(P(r10)), e10 = t1.f;
  return e10 ? t2(t10, e10(r10)) : t10;
}, t7 = function(r10, t10, e10) {
  for (var n5 = t4(t10), o2 = v.f, i2 = tR.f, u2 = 0; u2 < n5.length; u2++) {
    var a2 = n5[u2];
    ry(r10, a2) || e10 && ry(e10, a2) || o2(r10, a2, i2(t10, a2));
  }
}, t8 = /#|\.prototype\./, t9 = function(r10, t10) {
  var e10 = t3[t6(r10)];
  return e10 === er || e10 !== t5 && (h(t10) ? g(t10) : !!t10);
}, t6 = t9.normalize = function(r10) {
  return String(r10).replace(t8, ".").toLowerCase();
}, t3 = t9.data = {}, t5 = t9.NATIVE = "N", er = t9.POLYFILL = "P", et = tR.f, ee = function(r10, t10) {
  var e10, n5, o2, i2, u2, a2 = r10.target, c2 = r10.global, f2 = r10.stat;
  if (e10 = c2 ? w : f2 ? w[a2] || rn(a2, {}) : w[a2] && w[a2].prototype)
    for (n5 in t10) {
      if (i2 = t10[n5], o2 = r10.dontCallGetSet ? (u2 = et(e10, n5)) && u2.value : e10[n5], !t9(c2 ? n5 : a2 + (f2 ? "." : "#") + n5, r10.forced) && void 0 !== o2) {
        if (typeof i2 == typeof o2)
          continue;
        t7(i2, o2);
      }
      (r10.sham || o2 && o2.sham) && rW(i2, "sham", true), r3(e10, n5, i2, r10);
    }
}, en = TypeError, eo = "Reduce of empty array with no initial value", ei = function(r10) {
  return function(t10, e10, n5, o2) {
    var i2 = rp(t10), u2 = tL(i2), a2 = tq(i2);
    if (Q(e10), 0 === a2 && n5 < 2)
      throw new en(eo);
    var c2 = r10 ? a2 - 1 : 0, f2 = r10 ? -1 : 1;
    if (n5 < 2)
      for (; ; ) {
        if (c2 in u2) {
          o2 = u2[c2], c2 += f2;
          break;
        }
        if (c2 += f2, r10 ? c2 < 0 : a2 <= c2)
          throw new en(eo);
      }
    for (; r10 ? c2 >= 0 : a2 > c2; c2 += f2)
      c2 in u2 && (o2 = e10(o2, u2[c2], c2, i2));
    return o2;
  };
}, eu = { left: ei(false), right: ei(true) }, ea = "process" === to(w.process), ec = eu.left;
ee({ target: "Array", proto: true, forced: !ea && W > 79 && W < 83 || !((r = [].reduce) && g(function() {
  r.call(null, function() {
    return 1;
  }, 1);
})) }, { reduce: function(r10) {
  var t10 = arguments.length;
  return ec(this, r10, t10, t10 > 1 ? arguments[1] : void 0);
} });
var ef = TypeError, el = Object.defineProperty, ep = w.self !== w;
try {
  if (d) {
    var es = Object.getOwnPropertyDescriptor(w, "self");
    !ep && es && es.get && es.enumerable || tj(w, "self", { get: function() {
      return w;
    }, set: function(r10) {
      if (this !== w)
        throw new ef("Illegal invocation");
      el(w, "self", { value: r10, writable: true, configurable: true, enumerable: true });
    }, configurable: true, enumerable: true });
  } else
    ee({ global: true, simple: true, forced: ep }, { self: w });
} catch (r10) {
}
var ey = Function.prototype, eh = ey.apply, ev = ey.call, eg = "object" == typeof Reflect && Reflect.apply || (x ? ev.bind(eh) : function() {
  return ev.apply(eh, arguments);
}), ed = String, eb = TypeError, ew = function(r10, t10, e10) {
  try {
    return F(Q(Object.getOwnPropertyDescriptor(r10, t10)[e10]));
  } catch (r11) {
  }
}, em = function(r10) {
  if (m(r10) || null === r10)
    return r10;
  throw new eb("Can't set " + ed(r10) + " as a prototype");
}, eA = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var r10, t10 = false, e10 = {};
  try {
    (r10 = ew(Object.prototype, "__proto__", "set"))(e10, []), t10 = e10 instanceof Array;
  } catch (r11) {
  }
  return function(e11, n5) {
    return P(e11), em(n5), t10 ? r10(e11, n5) : e11.__proto__ = n5, e11;
  };
}() : void 0), eO = v.f, eT = Error, eE = F("".replace), eS = String(new eT("zxcasd").stack), ej = /\n\s*at [^:]*:[^\n]*/, eP = ej.test(eS), ex = !g(function() {
  var r10 = Error("a");
  return !("stack" in r10) || (Object.defineProperty(r10, "stack", rN(1, 7)), 7 !== r10.stack);
}), eR = function(r10, t10) {
  if (eP && "string" == typeof r10 && !eT.prepareStackTrace)
    for (; t10--; )
      r10 = eE(r10, ej, "");
  return r10;
}, e_ = Error.captureStackTrace, eI = function(r10, t10, e10) {
  e10 in r10 || eO(r10, e10, { configurable: true, get: function() {
    return t10[e10];
  }, set: function(r11) {
    t10[e10] = r11;
  } });
}, ek = function(r10, t10, e10) {
  var n5, o2;
  return eA && h(n5 = t10.constructor) && n5 !== e10 && m(o2 = n5.prototype) && o2 !== e10.prototype && eA(r10, o2), r10;
}, eC = function(r10, t10) {
  m(t10) && "cause" in t10 && rW(r10, "cause", t10.cause);
}, eM = function(r10, t10, e10, n5) {
  ex && (e_ ? e_(r10, t10) : rW(r10, "stack", eR(e10, n5)));
}, eF = function(r10, t10, e10, n5) {
  var o2 = "stackTraceLimit", i2 = n5 ? 2 : 1, u2 = r10.split("."), a2 = u2[u2.length - 1], c2 = I.apply(null, u2);
  if (c2) {
    var f2 = c2.prototype;
    if (ry(f2, "cause") && delete f2.cause, !e10)
      return c2;
    var l2 = I("Error"), p2 = t10(function(r11, t11) {
      var e11 = function(r12, t12) {
        return void 0 === r12 ? arguments.length < 2 ? "" : t12 : tp(r12);
      }(n5 ? t11 : r11, void 0), o3 = n5 ? new c2(r11) : new c2();
      return void 0 !== e11 && rW(o3, "message", e11), eM(o3, p2, o3.stack, 2), this && L(f2, this) && ek(o3, this, p2), arguments.length > i2 && eC(o3, arguments[i2]), o3;
    });
    p2.prototype = f2, "Error" !== a2 ? eA ? eA(p2, l2) : t7(p2, l2, { name: true }) : d && o2 in c2 && (eI(p2, c2, o2), eI(p2, c2, "prepareStackTrace")), t7(p2, c2);
    try {
      f2.name !== a2 && rW(f2, "name", a2), f2.constructor = p2;
    } catch (r11) {
    }
    return p2;
  }
}, eL = "WebAssembly", eU = w[eL], eD = 7 !== Error("e", { cause: 7 }).cause, ez = function(r10, t10) {
  var e10 = {};
  e10[r10] = eF(r10, t10, eD), ee({ global: true, constructor: true, arity: 1, forced: eD }, e10);
}, eB = function(r10, t10) {
  if (eU && eU[r10]) {
    var e10 = {};
    e10[r10] = eF(eL + "." + r10, t10, eD), ee({ target: eL, stat: true, constructor: true, arity: 1, forced: eD }, e10);
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
}, eW = TypeError, e$ = Object.getOwnPropertyDescriptor, eV = d && !function() {
  if (void 0 !== this)
    return true;
  try {
    Object.defineProperty([], "length", { writable: false }).length = 1;
  } catch (r10) {
    return r10 instanceof TypeError;
  }
}() ? function(r10, t10) {
  if (eN(r10) && !e$(r10, "length").writable)
    throw new eW("Cannot set read only .length");
  return r10.length = t10;
} : function(r10, t10) {
  return r10.length = t10;
}, eY = TypeError, eG = function(r10) {
  if (r10 > 9007199254740991)
    throw eY("Maximum allowed index exceeded");
  return r10;
};
ee({ target: "Array", proto: true, arity: 1, forced: g(function() {
  return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
}) || !function() {
  try {
    Object.defineProperty([], "length", { writable: false }).push();
  } catch (r10) {
    return r10 instanceof TypeError;
  }
}() }, { push: function(r10) {
  var t10 = rp(this), e10 = tq(t10), n5 = arguments.length;
  eG(e10 + n5);
  for (var o2 = 0; o2 < n5; o2++)
    t10[e10] = arguments[o2], e10++;
  return eV(t10, e10), e10;
} });
var eK = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView, eq = !g(function() {
  function r10() {
  }
  return r10.prototype.constructor = null, Object.getPrototypeOf(new r10()) !== r10.prototype;
}), eH = rV("IE_PROTO"), eJ = Object, eQ = eJ.prototype, eX = eq ? eJ.getPrototypeOf : function(r10) {
  var t10 = rp(r10);
  if (ry(t10, eH))
    return t10[eH];
  var e10 = t10.constructor;
  return h(e10) && t10 instanceof e10 ? e10.prototype : t10 instanceof eJ ? eQ : null;
}, eZ = w.Int8Array, e0 = eZ && eZ.prototype, e1 = w.Uint8ClampedArray, e2 = e1 && e1.prototype, e4 = eZ && eX(eZ), e7 = e0 && eX(e0), e8 = Object.prototype, e9 = w.TypeError, e6 = rA("toStringTag"), e3 = rd("TYPED_ARRAY_TAG"), e5 = "TypedArrayConstructor", nr = eK && !!eA && "Opera" !== tf(w.opera), nt = false, ne = { Int8Array: 1, Uint8Array: 1, Uint8ClampedArray: 1, Int16Array: 2, Uint16Array: 2, Int32Array: 4, Uint32Array: 4, Float32Array: 4, Float64Array: 8 }, nn = { BigInt64Array: 8, BigUint64Array: 8 }, no = function(r10) {
  var t10 = eX(r10);
  if (m(t10)) {
    var e10 = rQ(t10);
    return e10 && ry(e10, e5) ? e10[e5] : no(t10);
  }
}, ni = function(r10) {
  if (!m(r10))
    return false;
  var t10 = tf(r10);
  return ry(ne, t10) || ry(nn, t10);
};
for (c in ne)
  (l = (f = w[c]) && f.prototype) ? rX(l)[e5] = f : nr = false;
for (c in nn)
  (l = (f = w[c]) && f.prototype) && (rX(l)[e5] = f);
if ((!nr || !h(e4) || e4 === Function.prototype) && (e4 = function() {
  throw new e9("Incorrect invocation");
}, nr))
  for (c in ne)
    w[c] && eA(w[c], e4);
if ((!nr || !e7 || e7 === e8) && (e7 = e4.prototype, nr))
  for (c in ne)
    w[c] && eA(w[c].prototype, e7);
if (nr && eX(e2) !== e7 && eA(e2, e7), d && !ry(e7, e6))
  for (c in tj(e7, e6, { configurable: true, get: function() {
    return m(this) ? this[e3] : void 0;
  } }), ne)
    w[c] && rW(w[c], e3, c);
var nu = { NATIVE_ARRAY_BUFFER_VIEWS: nr, aTypedArray: function(r10) {
  if (ni(r10))
    return r10;
  throw new e9("Target is not a typed array");
}, exportTypedArrayMethod: function(r10, t10, e10, n5) {
  if (d) {
    if (e10)
      for (var o2 in ne) {
        var i2 = w[o2];
        if (i2 && ry(i2.prototype, r10))
          try {
            delete i2.prototype[r10];
          } catch (e11) {
            try {
              i2.prototype[r10] = t10;
            } catch (r11) {
            }
          }
      }
    (!e7[r10] || e10) && r3(e7, r10, e10 ? t10 : nr && e0[r10] || t10, n5);
  }
}, getTypedArrayConstructor: no, TypedArrayPrototype: e7 }, na = nu.aTypedArray;
(0, nu.exportTypedArrayMethod)("at", function(r10) {
  var t10 = na(this), e10 = tq(t10), n5 = t$(r10), o2 = n5 >= 0 ? n5 : e10 + n5;
  return o2 < 0 || o2 >= e10 ? void 0 : t10[o2];
});
var nc = function(r10) {
  if ("Function" === to(r10))
    return F(r10);
}, nf = nc(nc.bind), nl = function(r10) {
  var t10 = 1 === r10;
  return function(e10, n5, o2) {
    for (var i2, u2 = rp(e10), a2 = tL(u2), c2 = tq(a2), f2 = (Q(n5), void 0 === o2 ? n5 : x ? nf(n5, o2) : function() {
      return n5.apply(o2, arguments);
    }); c2-- > 0; )
      if (f2(i2 = a2[c2], c2, u2))
        switch (r10) {
          case 0:
            return i2;
          case 1:
            return c2;
        }
    return t10 ? -1 : void 0;
  };
}, np = { findLast: nl(0), findLastIndex: nl(1) }, ns = np.findLast, ny = nu.aTypedArray;
(0, nu.exportTypedArrayMethod)("findLast", function(r10) {
  return ns(ny(this), r10, arguments.length > 1 ? arguments[1] : void 0);
});
var nh = np.findLastIndex, nv = nu.aTypedArray;
(0, nu.exportTypedArrayMethod)("findLastIndex", function(r10) {
  return nh(nv(this), r10, arguments.length > 1 ? arguments[1] : void 0);
});
var ng = RangeError, nd = function(r10) {
  var t10 = t$(r10);
  if (t10 < 0)
    throw new ng("The argument can't be less than 0");
  return t10;
}, nb = RangeError, nw = function(r10, t10) {
  var e10 = nd(r10);
  if (e10 % t10)
    throw new nb("Wrong offset");
  return e10;
}, nm = w.RangeError, nA = w.Int8Array, nO = nA && nA.prototype, nT = nO && nO.set, nE = nu.aTypedArray, nS = nu.exportTypedArrayMethod, nj = !g(function() {
  var r10 = new Uint8ClampedArray(2);
  return _(nT, r10, { length: 1, 0: 3 }, 1), 3 !== r10[1];
}), nP = nj && nu.NATIVE_ARRAY_BUFFER_VIEWS && g(function() {
  var r10 = new nA(2);
  return r10.set(1), r10.set("2", 1), 0 !== r10[0] || 2 !== r10[1];
});
nS("set", function(r10) {
  nE(this);
  var t10 = nw(arguments.length > 1 ? arguments[1] : void 0, 1), e10 = rp(r10);
  if (nj)
    return _(nT, this, e10, t10);
  var n5 = this.length, o2 = tq(e10), i2 = 0;
  if (o2 + t10 > n5)
    throw new nm("Wrong length");
  for (; i2 < o2; )
    this[t10 + i2] = e10[i2++];
}, !nj || nP);
var nx = function(r10, t10) {
  for (var e10 = tq(r10), n5 = new t10(e10), o2 = 0; o2 < e10; o2++)
    n5[o2] = r10[e10 - o2 - 1];
  return n5;
}, nR = nu.aTypedArray, n_ = nu.exportTypedArrayMethod, nI = nu.getTypedArrayConstructor;
n_("toReversed", function() {
  return nx(nR(this), nI(this));
});
var nk = function(r10, t10, e10) {
  for (var n5 = 0, o2 = arguments.length > 2 ? e10 : tq(t10), i2 = new r10(o2); o2 > n5; )
    i2[n5] = t10[n5++];
  return i2;
}, nC = nu.aTypedArray, nM = nu.getTypedArrayConstructor, nF = nu.exportTypedArrayMethod, nL = F(nu.TypedArrayPrototype.sort);
nF("toSorted", function(r10) {
  void 0 !== r10 && Q(r10);
  var t10 = nC(this);
  return nL(nk(nM(t10), t10), r10);
});
var nU = RangeError, nD = TypeError, nz = function(r10, t10, e10, n5) {
  var o2 = tq(r10), i2 = t$(e10), u2 = i2 < 0 ? o2 + i2 : i2;
  if (u2 >= o2 || u2 < 0)
    throw new nU("Incorrect index");
  for (var a2 = new t10(o2), c2 = 0; c2 < o2; c2++)
    a2[c2] = c2 === u2 ? n5 : r10[c2];
  return a2;
}, nB = function(r10) {
  var t10 = tf(r10);
  return "BigInt64Array" === t10 || "BigUint64Array" === t10;
}, nN = function(r10) {
  var t10 = rS(r10, "number");
  if ("number" == typeof t10)
    throw new nD("Can't convert number to bigint");
  return BigInt(t10);
}, nW = nu.aTypedArray, n$ = nu.getTypedArrayConstructor;
(0, nu.exportTypedArrayMethod)("with", { with: function(r10, t10) {
  var e10 = nW(this), n5 = t$(r10), o2 = nB(e10) ? nN(t10) : +t10;
  return nz(e10, n$(e10), n5, o2);
} }.with, !function() {
  try {
    new Int8Array(1).with(2, { valueOf: function() {
      throw 8;
    } });
  } catch (r10) {
    return 8 === r10;
  }
}());
var nV = v.f, nY = rA("toStringTag");
ee({ global: true }, { Reflect: {} }), t = w.Reflect, e = "Reflect", t && !ry(t, nY) && nV(t, nY, { configurable: true, value: e });
var nG = rA("match"), nK = function() {
  var r10 = P(this), t10 = "";
  return r10.hasIndices && (t10 += "d"), r10.global && (t10 += "g"), r10.ignoreCase && (t10 += "i"), r10.multiline && (t10 += "m"), r10.dotAll && (t10 += "s"), r10.unicode && (t10 += "u"), r10.unicodeSets && (t10 += "v"), r10.sticky && (t10 += "y"), t10;
}, nq = RegExp.prototype, nH = Math.floor, nJ = F("".charAt), nQ = F("".replace), nX = F("".slice), nZ = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, n0 = /\$([$&'`]|\d{1,2})/g, n1 = function(r10) {
  var t10;
  return m(r10) && (void 0 !== (t10 = r10[nG]) ? !!t10 : "RegExp" === to(r10));
}, n2 = function(r10) {
  var t10 = r10.flags;
  return void 0 === t10 && !("flags" in nq) && !ry(r10, "flags") && L(nq, r10) ? _(nK, r10) : t10;
}, n4 = function(r10, t10, e10, n5, o2, i2) {
  var u2 = e10 + r10.length, a2 = n5.length, c2 = n0;
  return void 0 !== o2 && (o2 = rp(o2), c2 = nZ), nQ(i2, c2, function(i3, c3) {
    var f2;
    switch (nJ(c3, 0)) {
      case "$":
        return "$";
      case "&":
        return r10;
      case "`":
        return nX(t10, 0, e10);
      case "'":
        return nX(t10, u2);
      case "<":
        f2 = o2[nX(c3, 1, -1)];
        break;
      default:
        var l2 = +c3;
        if (0 === l2)
          return i3;
        if (l2 > a2) {
          var p2 = nH(l2 / 10);
          if (0 === p2)
            return i3;
          if (p2 <= a2)
            return void 0 === n5[p2 - 1] ? nJ(c3, 1) : n5[p2 - 1] + nJ(c3, 1);
          return i3;
        }
        f2 = n5[l2 - 1];
    }
    return void 0 === f2 ? "" : f2;
  });
}, n7 = rA("replace"), n8 = TypeError, n9 = F("".indexOf);
F("".replace);
var n6 = F("".slice), n3 = Math.max;
ee({ target: "String", proto: true }, { replaceAll: function(r10, t10) {
  var e10, n5, o2, i2, u2, a2, c2, f2 = rf(this), l2 = 0, p2 = 0, s2 = "";
  if (!X(r10)) {
    if (n1(r10) && !~n9(tp(rf(n2(r10))), "g"))
      throw new n8("`.replaceAll` does not allow non-global regexes");
    if (e10 = Z(r10, n7))
      return _(e10, r10, f2, t10);
  }
  for (n5 = tp(f2), o2 = tp(r10), (i2 = h(t10)) || (t10 = tp(t10)), a2 = n3(1, u2 = o2.length), l2 = n9(n5, o2); -1 !== l2; )
    c2 = i2 ? tp(t10(o2, l2, n5)) : n4(o2, n5, l2, [], void 0, t10), s2 += n6(n5, p2, l2) + c2, p2 = l2 + u2, l2 = l2 + a2 > n5.length ? -1 : n9(n5, o2, l2 + a2);
  return p2 < n5.length && (s2 += n6(n5, p2)), s2;
} });
export {
  s as g
};
