var t, r, e, n, o, i, u, a, c, f, l, s, p = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function y(t10) {
  return t10 && t10.__esModule && Object.prototype.hasOwnProperty.call(t10, "default") ? t10.default : t10;
}
var d = function(t10) {
  try {
    return !!t10();
  } catch (t11) {
    return true;
  }
}, h = !d(function() {
  return 7 != Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1];
}), g = !d(function() {
  var t10 = (function() {
  }).bind();
  return "function" != typeof t10 || t10.hasOwnProperty("prototype");
}), v = Function.prototype, b = v.call, m = g && v.bind.bind(b, b), w = g ? m : function(t10) {
  return function() {
    return b.apply(t10, arguments);
  };
}, A = { exports: {} }, x = "object" == typeof document && document.all, E = { all: x, IS_HTMLDDA: void 0 === x && void 0 !== x }, O = E.all, T = E.IS_HTMLDDA ? function(t10) {
  return "function" == typeof t10 || t10 === O;
} : function(t10) {
  return "function" == typeof t10;
}, S = function(t10) {
  return null == t10;
}, j = TypeError, I = function(t10) {
  if (S(t10))
    throw j("Can't call method on " + t10);
  return t10;
}, R = Object, P = function(t10) {
  return R(I(t10));
}, _ = w({}.hasOwnProperty), k = Object.hasOwn || function(t10, r10) {
  return _(P(t10), r10);
}, M = Function.prototype, C = h && Object.getOwnPropertyDescriptor, F = k(M, "name") && (!h || h && C(M, "name").configurable), D = function(t10) {
  return t10 && t10.Math == Math && t10;
}, L = D("object" == typeof globalThis && globalThis) || D("object" == typeof window && window) || D("object" == typeof self && self) || D("object" == typeof p && p) || function() {
  return this;
}() || p || Function("return this")(), U = Object.defineProperty, z = function(t10, r10) {
  try {
    U(L, t10, { value: r10, configurable: true, writable: true });
  } catch (e10) {
    L[t10] = r10;
  }
  return r10;
}, W = "__core-js_shared__", $ = L[W] || z(W, {}), B = w(Function.toString);
T($.inspectSource) || ($.inspectSource = function(t10) {
  return B(t10);
});
var V = $.inspectSource, N = L.WeakMap, Y = T(N) && /native code/.test(String(N)), G = E.all, H = E.IS_HTMLDDA ? function(t10) {
  return "object" == typeof t10 ? null !== t10 : T(t10) || t10 === G;
} : function(t10) {
  return "object" == typeof t10 ? null !== t10 : T(t10);
}, q = {}, K = L.document, X = H(K) && H(K.createElement), J = function(t10) {
  return X ? K.createElement(t10) : {};
}, Q = !h && !d(function() {
  return 7 != Object.defineProperty(J("div"), "a", { get: function() {
    return 7;
  } }).a;
}), Z = h && d(function() {
  return 42 != Object.defineProperty(function() {
  }, "prototype", { value: 42, writable: false }).prototype;
}), tt = String, tr = TypeError, te = function(t10) {
  if (H(t10))
    return t10;
  throw tr(tt(t10) + " is not an object");
}, tn = Function.prototype.call, to = g ? tn.bind(tn) : function() {
  return tn.apply(tn, arguments);
}, ti = function(t10, r10) {
  var e10;
  return arguments.length < 2 ? T(e10 = L[t10]) ? e10 : void 0 : L[t10] && L[t10][r10];
}, tu = w({}.isPrototypeOf), ta = "undefined" != typeof navigator && String(navigator.userAgent) || "", tc = L.process, tf = L.Deno, tl = tc && tc.versions || tf && tf.version, ts = tl && tl.v8;
ts && (r = (t = ts.split("."))[0] > 0 && t[0] < 4 ? 1 : +(t[0] + t[1])), !r && ta && (!(t = ta.match(/Edge\/(\d+)/)) || t[1] >= 74) && (t = ta.match(/Chrome\/(\d+)/)) && (r = +t[1]);
var tp = r, ty = L.String, td = !!Object.getOwnPropertySymbols && !d(function() {
  var t10 = Symbol();
  return !ty(t10) || !(Object(t10) instanceof Symbol) || !Symbol.sham && tp && tp < 41;
}), th = td && !Symbol.sham && "symbol" == typeof Symbol.iterator, tg = Object, tv = th ? function(t10) {
  return "symbol" == typeof t10;
} : function(t10) {
  var r10 = ti("Symbol");
  return T(r10) && tu(r10.prototype, tg(t10));
}, tb = String, tm = function(t10) {
  try {
    return tb(t10);
  } catch (t11) {
    return "Object";
  }
}, tw = TypeError, tA = function(t10) {
  if (T(t10))
    return t10;
  throw tw(tm(t10) + " is not a function");
}, tx = function(t10, r10) {
  var e10 = t10[r10];
  return S(e10) ? void 0 : tA(e10);
}, tE = TypeError, tO = { exports: {} };
(tO.exports = function(t10, r10) {
  return $[t10] || ($[t10] = void 0 !== r10 ? r10 : {});
})("versions", []).push({ version: "3.32.0", mode: "global", copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.32.0/LICENSE", source: "https://github.com/zloirock/core-js" });
var tT = tO.exports, tS = 0, tj = Math.random(), tI = w(1 .toString), tR = function(t10) {
  return "Symbol(" + (void 0 === t10 ? "" : t10) + ")_" + tI(++tS + tj, 36);
}, tP = L.Symbol, t_ = tT("wks"), tk = th ? tP.for || tP : tP && tP.withoutSetter || tR, tM = function(t10) {
  return k(t_, t10) || (t_[t10] = td && k(tP, t10) ? tP[t10] : tk("Symbol." + t10)), t_[t10];
}, tC = function(t10, r10) {
  var e10, n10;
  if ("string" === r10 && T(e10 = t10.toString) && !H(n10 = to(e10, t10)) || T(e10 = t10.valueOf) && !H(n10 = to(e10, t10)) || "string" !== r10 && T(e10 = t10.toString) && !H(n10 = to(e10, t10)))
    return n10;
  throw tE("Can't convert object to primitive value");
}, tF = TypeError, tD = tM("toPrimitive"), tL = function(t10, r10) {
  if (!H(t10) || tv(t10))
    return t10;
  var e10, n10 = tx(t10, tD);
  if (n10) {
    if (void 0 === r10 && (r10 = "default"), !H(e10 = to(n10, t10, r10)) || tv(e10))
      return e10;
    throw tF("Can't convert object to primitive value");
  }
  return void 0 === r10 && (r10 = "number"), tC(t10, r10);
}, tU = function(t10) {
  var r10 = tL(t10, "string");
  return tv(r10) ? r10 : r10 + "";
}, tz = TypeError, tW = Object.defineProperty, t$ = Object.getOwnPropertyDescriptor, tB = "enumerable", tV = "configurable", tN = "writable";
q.f = h ? Z ? function(t10, r10, e10) {
  if (te(t10), r10 = tU(r10), te(e10), "function" == typeof t10 && "prototype" === r10 && "value" in e10 && tN in e10 && !e10[tN]) {
    var n10 = t$(t10, r10);
    n10 && n10[tN] && (t10[r10] = e10.value, e10 = { configurable: tV in e10 ? e10[tV] : n10[tV], enumerable: tB in e10 ? e10[tB] : n10[tB], writable: false });
  }
  return tW(t10, r10, e10);
} : tW : function(t10, r10, e10) {
  if (te(t10), r10 = tU(r10), te(e10), Q)
    try {
      return tW(t10, r10, e10);
    } catch (t11) {
    }
  if ("get" in e10 || "set" in e10)
    throw tz("Accessors not supported");
  return "value" in e10 && (t10[r10] = e10.value), t10;
};
var tY = function(t10, r10) {
  return { enumerable: !(1 & t10), configurable: !(2 & t10), writable: !(4 & t10), value: r10 };
}, tG = h ? function(t10, r10, e10) {
  return q.f(t10, r10, tY(1, e10));
} : function(t10, r10, e10) {
  return t10[r10] = e10, t10;
}, tH = tT("keys"), tq = function(t10) {
  return tH[t10] || (tH[t10] = tR(t10));
}, tK = {}, tX = "Object already initialized", tJ = L.TypeError, tQ = L.WeakMap;
if (Y || $.state) {
  var tZ = $.state || ($.state = new tQ());
  tZ.get = tZ.get, tZ.has = tZ.has, tZ.set = tZ.set, e = function(t10, r10) {
    if (tZ.has(t10))
      throw tJ(tX);
    return r10.facade = t10, tZ.set(t10, r10), r10;
  }, n = function(t10) {
    return tZ.get(t10) || {};
  }, o = function(t10) {
    return tZ.has(t10);
  };
} else {
  var t0 = tq("state");
  tK[t0] = true, e = function(t10, r10) {
    if (k(t10, t0))
      throw tJ(tX);
    return r10.facade = t10, tG(t10, t0, r10), r10;
  }, n = function(t10) {
    return k(t10, t0) ? t10[t0] : {};
  }, o = function(t10) {
    return k(t10, t0);
  };
}
var t1 = { set: e, get: n, has: o, enforce: function(t10) {
  return o(t10) ? n(t10) : e(t10, {});
}, getterFor: function(t10) {
  return function(r10) {
    var e10;
    if (!H(r10) || (e10 = n(r10)).type !== t10)
      throw tJ("Incompatible receiver, " + t10 + " required");
    return e10;
  };
} }, t2 = t1.enforce, t4 = t1.get, t9 = String, t7 = Object.defineProperty, t3 = w("".slice), t6 = w("".replace), t8 = w([].join), t5 = h && !d(function() {
  return 8 !== t7(function() {
  }, "length", { value: 8 }).length;
}), rt = String(String).split("String"), rr = A.exports = function(t10, r10, e10) {
  "Symbol(" === t3(t9(r10), 0, 7) && (r10 = "[" + t6(t9(r10), /^Symbol\(([^)]*)\)/, "$1") + "]"), e10 && e10.getter && (r10 = "get " + r10), e10 && e10.setter && (r10 = "set " + r10), (!k(t10, "name") || F && t10.name !== r10) && (h ? t7(t10, "name", { value: r10, configurable: true }) : t10.name = r10), t5 && e10 && k(e10, "arity") && t10.length !== e10.arity && t7(t10, "length", { value: e10.arity });
  try {
    e10 && k(e10, "constructor") && e10.constructor ? h && t7(t10, "prototype", { writable: false }) : t10.prototype && (t10.prototype = void 0);
  } catch (t11) {
  }
  var n10 = t2(t10);
  return k(n10, "source") || (n10.source = t8(rt, "string" == typeof r10 ? r10 : "")), t10;
};
Function.prototype.toString = rr(function() {
  return T(this) && t4(this).source || V(this);
}, "toString");
var re = A.exports, rn = function(t10, r10, e10) {
  return e10.get && re(e10.get, r10, { getter: true }), e10.set && re(e10.set, r10, { setter: true }), q.f(t10, r10, e10);
}, ro = URLSearchParams.prototype, ri = w(ro.forEach);
!h || "size" in ro || rn(ro, "size", { get: function() {
  var t10 = 0;
  return ri(this, function() {
    t10++;
  }), t10;
}, configurable: true, enumerable: true });
var ru = {}, ra = {}, rc = {}.propertyIsEnumerable, rf = Object.getOwnPropertyDescriptor, rl = rf && !rc.call({ 1: 2 }, 1);
ra.f = rl ? function(t10) {
  var r10 = rf(this, t10);
  return !!r10 && r10.enumerable;
} : rc;
var rs = w({}.toString), rp = w("".slice), ry = function(t10) {
  return rp(rs(t10), 8, -1);
}, rd = Object, rh = w("".split), rg = d(function() {
  return !rd("z").propertyIsEnumerable(0);
}) ? function(t10) {
  return "String" == ry(t10) ? rh(t10, "") : rd(t10);
} : rd, rv = function(t10) {
  return rg(I(t10));
}, rb = Object.getOwnPropertyDescriptor;
ru.f = h ? rb : function(t10, r10) {
  if (t10 = rv(t10), r10 = tU(r10), Q)
    try {
      return rb(t10, r10);
    } catch (t11) {
    }
  if (k(t10, r10))
    return tY(!to(ra.f, t10, r10), t10[r10]);
};
var rm = function(t10, r10, e10, n10) {
  n10 || (n10 = {});
  var o5 = n10.enumerable, i2 = void 0 !== n10.name ? n10.name : r10;
  if (T(e10) && re(e10, i2, n10), n10.global)
    o5 ? t10[r10] = e10 : z(r10, e10);
  else {
    try {
      n10.unsafe ? t10[r10] && (o5 = true) : delete t10[r10];
    } catch (t11) {
    }
    o5 ? t10[r10] = e10 : q.f(t10, r10, { value: e10, enumerable: false, configurable: !n10.nonConfigurable, writable: !n10.nonWritable });
  }
  return t10;
}, rw = {}, rA = Math.ceil, rx = Math.floor, rE = Math.trunc || function(t10) {
  var r10 = +t10;
  return (r10 > 0 ? rx : rA)(r10);
}, rO = function(t10) {
  var r10 = +t10;
  return r10 != r10 || 0 === r10 ? 0 : rE(r10);
}, rT = Math.max, rS = Math.min, rj = Math.min, rI = function(t10) {
  return t10 > 0 ? rj(rO(t10), 9007199254740991) : 0;
}, rR = function(t10) {
  return rI(t10.length);
}, rP = function(t10, r10) {
  var e10 = rO(t10);
  return e10 < 0 ? rT(e10 + r10, 0) : rS(e10, r10);
}, r_ = function(t10) {
  return function(r10, e10, n10) {
    var o5, i2 = rv(r10), u2 = rR(i2), a2 = rP(n10, u2);
    if (t10 && e10 != e10) {
      for (; u2 > a2; )
        if ((o5 = i2[a2++]) != o5)
          return true;
    } else
      for (; u2 > a2; a2++)
        if ((t10 || a2 in i2) && i2[a2] === e10)
          return t10 || a2 || 0;
    return !t10 && -1;
  };
}, rk = { includes: r_(true), indexOf: r_(false) }.indexOf, rM = w([].push), rC = function(t10, r10) {
  var e10, n10 = rv(t10), o5 = 0, i2 = [];
  for (e10 in n10)
    !k(tK, e10) && k(n10, e10) && rM(i2, e10);
  for (; r10.length > o5; )
    k(n10, e10 = r10[o5++]) && (~rk(i2, e10) || rM(i2, e10));
  return i2;
}, rF = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], rD = rF.concat("length", "prototype");
rw.f = Object.getOwnPropertyNames || function(t10) {
  return rC(t10, rD);
};
var rL = {};
rL.f = Object.getOwnPropertySymbols;
var rU = w([].concat), rz = ti("Reflect", "ownKeys") || function(t10) {
  var r10 = rw.f(te(t10)), e10 = rL.f;
  return e10 ? rU(r10, e10(t10)) : r10;
}, rW = function(t10, r10, e10) {
  for (var n10 = rz(r10), o5 = q.f, i2 = ru.f, u2 = 0; u2 < n10.length; u2++) {
    var a2 = n10[u2];
    k(t10, a2) || e10 && k(e10, a2) || o5(t10, a2, i2(r10, a2));
  }
}, r$ = /#|\.prototype\./, rB = function(t10, r10) {
  var e10 = rN[rV(t10)];
  return e10 == rG || e10 != rY && (T(r10) ? d(r10) : !!r10);
}, rV = rB.normalize = function(t10) {
  return String(t10).replace(r$, ".").toLowerCase();
}, rN = rB.data = {}, rY = rB.NATIVE = "N", rG = rB.POLYFILL = "P", rH = ru.f, rq = function(t10, r10) {
  var e10, n10, o5, i2, u2, a2 = t10.target, c2 = t10.global, f2 = t10.stat;
  if (e10 = c2 ? L : f2 ? L[a2] || z(a2, {}) : (L[a2] || {}).prototype)
    for (n10 in r10) {
      if (i2 = r10[n10], o5 = t10.dontCallGetSet ? (u2 = rH(e10, n10)) && u2.value : e10[n10], !rB(c2 ? n10 : a2 + (f2 ? "." : "#") + n10, t10.forced) && void 0 !== o5) {
        if (typeof i2 == typeof o5)
          continue;
        rW(i2, o5);
      }
      (t10.sham || o5 && o5.sham) && tG(i2, "sham", true), rm(e10, n10, i2, t10);
    }
}, rK = Array.isArray || function(t10) {
  return "Array" == ry(t10);
}, rX = TypeError, rJ = Object.getOwnPropertyDescriptor, rQ = h && !function() {
  if (void 0 !== this)
    return true;
  try {
    Object.defineProperty([], "length", { writable: false }).length = 1;
  } catch (t10) {
    return t10 instanceof TypeError;
  }
}() ? function(t10, r10) {
  if (rK(t10) && !rJ(t10, "length").writable)
    throw rX("Cannot set read only .length");
  return t10.length = r10;
} : function(t10, r10) {
  return t10.length = r10;
}, rZ = TypeError, r0 = function(t10) {
  if (t10 > 9007199254740991)
    throw rZ("Maximum allowed index exceeded");
  return t10;
};
rq({ target: "Array", proto: true, arity: 1, forced: d(function() {
  return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
}) || !function() {
  try {
    Object.defineProperty([], "length", { writable: false }).push();
  } catch (t10) {
    return t10 instanceof TypeError;
  }
}() }, { push: function(t10) {
  var r10 = P(this), e10 = rR(r10), n10 = arguments.length;
  r0(e10 + n10);
  for (var o5 = 0; o5 < n10; o5++)
    r10[e10] = arguments[o5], e10++;
  return rQ(r10, e10), e10;
} });
var r1 = Function.prototype, r2 = r1.apply, r4 = r1.call, r9 = "object" == typeof Reflect && Reflect.apply || (g ? r4.bind(r2) : function() {
  return r4.apply(r2, arguments);
}), r7 = String, r3 = TypeError, r6 = function(t10, r10, e10) {
  try {
    return w(tA(Object.getOwnPropertyDescriptor(t10, r10)[e10]));
  } catch (t11) {
  }
}, r8 = function(t10) {
  if ("object" == typeof t10 || T(t10))
    return t10;
  throw r3("Can't set " + r7(t10) + " as a prototype");
}, r5 = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var t10, r10 = false, e10 = {};
  try {
    (t10 = r6(Object.prototype, "__proto__", "set"))(e10, []), r10 = e10 instanceof Array;
  } catch (t11) {
  }
  return function(e11, n10) {
    return te(e11), r8(n10), r10 ? t10(e11, n10) : e11.__proto__ = n10, e11;
  };
}() : void 0), et = q.f, er = tM("toStringTag"), ee = {};
ee[er] = "z";
var en = "[object z]" === String(ee), eo = tM("toStringTag"), ei = Object, eu = "Arguments" == ry(function() {
  return arguments;
}()), ea = function(t10, r10) {
  try {
    return t10[r10];
  } catch (t11) {
  }
}, ec = en ? ry : function(t10) {
  var r10, e10, n10;
  return void 0 === t10 ? "Undefined" : null === t10 ? "Null" : "string" == typeof (e10 = ea(r10 = ei(t10), eo)) ? e10 : eu ? ry(r10) : "Object" == (n10 = ry(r10)) && T(r10.callee) ? "Arguments" : n10;
}, ef = String, el = function(t10) {
  if ("Symbol" === ec(t10))
    throw TypeError("Cannot convert a Symbol value to a string");
  return ef(t10);
}, es = Error, ep = w("".replace), ey = String(es("zxcasd").stack), ed = /\n\s*at [^:]*:[^\n]*/, eh = ed.test(ey), eg = !d(function() {
  var t10 = Error("a");
  return !("stack" in t10) || (Object.defineProperty(t10, "stack", tY(1, 7)), 7 !== t10.stack);
}), ev = function(t10, r10) {
  if (eh && "string" == typeof t10 && !es.prepareStackTrace)
    for (; r10--; )
      t10 = ep(t10, ed, "");
  return t10;
}, eb = Error.captureStackTrace, em = function(t10, r10, e10) {
  e10 in t10 || et(t10, e10, { configurable: true, get: function() {
    return r10[e10];
  }, set: function(t11) {
    r10[e10] = t11;
  } });
}, ew = function(t10, r10, e10) {
  var n10, o5;
  return r5 && T(n10 = r10.constructor) && n10 !== e10 && H(o5 = n10.prototype) && o5 !== e10.prototype && r5(t10, o5), t10;
}, eA = function(t10, r10) {
  H(r10) && "cause" in r10 && tG(t10, "cause", r10.cause);
}, ex = function(t10, r10, e10, n10) {
  eg && (eb ? eb(t10, r10) : tG(t10, "stack", ev(e10, n10)));
}, eE = function(t10, r10, e10, n10) {
  var o5 = "stackTraceLimit", i2 = n10 ? 2 : 1, u2 = t10.split("."), a2 = u2[u2.length - 1], c2 = ti.apply(null, u2);
  if (c2) {
    var f2 = c2.prototype;
    if (k(f2, "cause") && delete f2.cause, !e10)
      return c2;
    var l2 = ti("Error"), s2 = r10(function(t11, r11) {
      var e11 = function(t12, r12) {
        return void 0 === t12 ? arguments.length < 2 ? "" : r12 : el(t12);
      }(n10 ? r11 : t11, void 0), o6 = n10 ? new c2(t11) : new c2();
      return void 0 !== e11 && tG(o6, "message", e11), ex(o6, s2, o6.stack, 2), this && tu(f2, this) && ew(o6, this, s2), arguments.length > i2 && eA(o6, arguments[i2]), o6;
    });
    s2.prototype = f2, "Error" !== a2 ? r5 ? r5(s2, l2) : rW(s2, l2, { name: true }) : h && o5 in c2 && (em(s2, c2, o5), em(s2, c2, "prepareStackTrace")), rW(s2, c2);
    try {
      f2.name !== a2 && tG(f2, "name", a2), f2.constructor = s2;
    } catch (t11) {
    }
    return s2;
  }
}, eO = "WebAssembly", eT = L[eO], eS = 7 !== Error("e", { cause: 7 }).cause, ej = function(t10, r10) {
  var e10 = {};
  e10[t10] = eE(t10, r10, eS), rq({ global: true, constructor: true, arity: 1, forced: eS }, e10);
}, eI = function(t10, r10) {
  if (eT && eT[t10]) {
    var e10 = {};
    e10[t10] = eE(eO + "." + t10, r10, eS), rq({ target: eO, stat: true, constructor: true, arity: 1, forced: eS }, e10);
  }
};
ej("Error", function(t10) {
  return function(r10) {
    return r9(t10, this, arguments);
  };
}), ej("EvalError", function(t10) {
  return function(r10) {
    return r9(t10, this, arguments);
  };
}), ej("RangeError", function(t10) {
  return function(r10) {
    return r9(t10, this, arguments);
  };
}), ej("ReferenceError", function(t10) {
  return function(r10) {
    return r9(t10, this, arguments);
  };
}), ej("SyntaxError", function(t10) {
  return function(r10) {
    return r9(t10, this, arguments);
  };
}), ej("TypeError", function(t10) {
  return function(r10) {
    return r9(t10, this, arguments);
  };
}), ej("URIError", function(t10) {
  return function(r10) {
    return r9(t10, this, arguments);
  };
}), eI("CompileError", function(t10) {
  return function(r10) {
    return r9(t10, this, arguments);
  };
}), eI("LinkError", function(t10) {
  return function(r10) {
    return r9(t10, this, arguments);
  };
}), eI("RuntimeError", function(t10) {
  return function(r10) {
    return r9(t10, this, arguments);
  };
});
var eR = q.f, eP = tM("toStringTag"), e_ = function(t10, r10, e10) {
  t10 && !e10 && (t10 = t10.prototype), t10 && !k(t10, eP) && eR(t10, eP, { configurable: true, value: r10 });
};
rq({ global: true }, { Reflect: {} }), e_(L.Reflect, "Reflect", true);
var ek = TypeError, eM = function(t10) {
  return function(r10, e10, n10, o5) {
    tA(e10);
    var i2 = P(r10), u2 = rg(i2), a2 = rR(i2), c2 = t10 ? a2 - 1 : 0, f2 = t10 ? -1 : 1;
    if (n10 < 2)
      for (; ; ) {
        if (c2 in u2) {
          o5 = u2[c2], c2 += f2;
          break;
        }
        if (c2 += f2, t10 ? c2 < 0 : a2 <= c2)
          throw ek("Reduce of empty array with no initial value");
      }
    for (; t10 ? c2 >= 0 : a2 > c2; c2 += f2)
      c2 in u2 && (o5 = e10(o5, u2[c2], c2, i2));
    return o5;
  };
}, eC = { left: eM(false), right: eM(true) }, eF = "undefined" != typeof process && "process" == ry(process), eD = eC.left;
rq({ target: "Array", proto: true, forced: !eF && tp > 79 && tp < 83 || !function(t10, r10) {
  var e10 = [][t10];
  return !!e10 && d(function() {
    e10.call(null, function() {
      return 1;
    }, 1);
  });
}("reduce") }, { reduce: function(t10) {
  var r10 = arguments.length;
  return eD(this, t10, r10, r10 > 1 ? arguments[1] : void 0);
} });
var eL = TypeError, eU = Object.defineProperty, ez = L.self !== L;
try {
  if (h) {
    var eW = Object.getOwnPropertyDescriptor(L, "self");
    !ez && eW && eW.get && eW.enumerable || rn(L, "self", { get: function() {
      return L;
    }, set: function(t10) {
      if (this !== L)
        throw eL("Illegal invocation");
      eU(L, "self", { value: t10, writable: true, configurable: true, enumerable: true });
    }, configurable: true, enumerable: true });
  } else
    rq({ global: true, simple: true, forced: ez }, { self: L });
} catch (t10) {
}
var e$ = tM("match"), eB = function(t10) {
  var r10;
  return H(t10) && (void 0 !== (r10 = t10[e$]) ? !!r10 : "RegExp" == ry(t10));
}, eV = function() {
  var t10 = te(this), r10 = "";
  return t10.hasIndices && (r10 += "d"), t10.global && (r10 += "g"), t10.ignoreCase && (r10 += "i"), t10.multiline && (r10 += "m"), t10.dotAll && (r10 += "s"), t10.unicode && (r10 += "u"), t10.unicodeSets && (r10 += "v"), t10.sticky && (r10 += "y"), r10;
}, eN = RegExp.prototype, eY = function(t10) {
  var r10 = t10.flags;
  return void 0 === r10 && !("flags" in eN) && !k(t10, "flags") && tu(eN, t10) ? to(eV, t10) : r10;
}, eG = Math.floor, eH = w("".charAt), eq = w("".replace), eK = w("".slice), eX = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, eJ = /\$([$&'`]|\d{1,2})/g, eQ = function(t10, r10, e10, n10, o5, i2) {
  var u2 = e10 + t10.length, a2 = n10.length, c2 = eJ;
  return void 0 !== o5 && (o5 = P(o5), c2 = eX), eq(i2, c2, function(i3, c3) {
    var f2;
    switch (eH(c3, 0)) {
      case "$":
        return "$";
      case "&":
        return t10;
      case "`":
        return eK(r10, 0, e10);
      case "'":
        return eK(r10, u2);
      case "<":
        f2 = o5[eK(c3, 1, -1)];
        break;
      default:
        var l2 = +c3;
        if (0 === l2)
          return i3;
        if (l2 > a2) {
          var s2 = eG(l2 / 10);
          if (0 === s2)
            return i3;
          if (s2 <= a2)
            return void 0 === n10[s2 - 1] ? eH(c3, 1) : n10[s2 - 1] + eH(c3, 1);
          return i3;
        }
        f2 = n10[l2 - 1];
    }
    return void 0 === f2 ? "" : f2;
  });
}, eZ = tM("replace"), e0 = TypeError, e1 = w("".indexOf);
w("".replace);
var e2 = w("".slice), e4 = Math.max, e9 = function(t10, r10, e10) {
  return e10 > t10.length ? -1 : "" === r10 ? e10 : e1(t10, r10, e10);
};
rq({ target: "String", proto: true }, { replaceAll: function(t10, r10) {
  var e10, n10, o5, i2, u2, a2, c2, f2 = I(this), l2 = 0, s2 = 0, p2 = "";
  if (!S(t10)) {
    if (eB(t10) && !~e1(el(I(eY(t10))), "g"))
      throw e0("`.replaceAll` does not allow non-global regexes");
    if (e10 = tx(t10, eZ))
      return to(e10, t10, f2, r10);
  }
  for (n10 = el(f2), o5 = el(t10), (i2 = T(r10)) || (r10 = el(r10)), a2 = e4(1, u2 = o5.length), l2 = e9(n10, o5, 0); -1 !== l2; )
    c2 = i2 ? el(r10(o5, l2, n10)) : eQ(o5, n10, l2, [], void 0, r10), p2 += e2(n10, s2, l2) + c2, s2 = l2 + u2, l2 = e9(n10, o5, l2 + a2);
  return s2 < n10.length && (p2 += e2(n10, s2)), p2;
} });
var e7 = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView, e3 = !d(function() {
  function t10() {
  }
  return t10.prototype.constructor = null, Object.getPrototypeOf(new t10()) !== t10.prototype;
}), e6 = tq("IE_PROTO"), e8 = Object, e5 = e8.prototype, nt = e3 ? e8.getPrototypeOf : function(t10) {
  var r10 = P(t10);
  if (k(r10, e6))
    return r10[e6];
  var e10 = r10.constructor;
  return T(e10) && r10 instanceof e10 ? e10.prototype : r10 instanceof e8 ? e5 : null;
}, nr = t1.enforce, ne = t1.get, nn = L.Int8Array, no = nn && nn.prototype, ni = L.Uint8ClampedArray, nu = ni && ni.prototype, na = nn && nt(nn), nc = no && nt(no), nf = Object.prototype, nl = L.TypeError, ns = tM("toStringTag"), np = tR("TYPED_ARRAY_TAG"), ny = "TypedArrayConstructor", nd = e7 && !!r5 && "Opera" !== ec(L.opera), nh = false, ng = { Int8Array: 1, Uint8Array: 1, Uint8ClampedArray: 1, Int16Array: 2, Uint16Array: 2, Int32Array: 4, Uint32Array: 4, Float32Array: 4, Float64Array: 8 }, nv = { BigInt64Array: 8, BigUint64Array: 8 }, nb = function(t10) {
  var r10 = nt(t10);
  if (H(r10)) {
    var e10 = ne(r10);
    return e10 && k(e10, ny) ? e10[ny] : nb(r10);
  }
}, nm = function(t10) {
  if (!H(t10))
    return false;
  var r10 = ec(t10);
  return k(ng, r10) || k(nv, r10);
};
for (i in ng)
  (a = (u = L[i]) && u.prototype) ? nr(a)[ny] = u : nd = false;
for (i in nv)
  (a = (u = L[i]) && u.prototype) && (nr(a)[ny] = u);
if ((!nd || !T(na) || na === Function.prototype) && (na = function() {
  throw nl("Incorrect invocation");
}, nd))
  for (i in ng)
    L[i] && r5(L[i], na);
if ((!nd || !nc || nc === nf) && (nc = na.prototype, nd))
  for (i in ng)
    L[i] && r5(L[i].prototype, nc);
if (nd && nt(nu) !== nc && r5(nu, nc), h && !k(nc, ns))
  for (i in nh = true, rn(nc, ns, { configurable: true, get: function() {
    return H(this) ? this[np] : void 0;
  } }), ng)
    L[i] && tG(L[i], np, i);
var nw = { NATIVE_ARRAY_BUFFER_VIEWS: nd, TYPED_ARRAY_TAG: nh && np, aTypedArray: function(t10) {
  if (nm(t10))
    return t10;
  throw nl("Target is not a typed array");
}, aTypedArrayConstructor: function(t10) {
  if (T(t10) && (!r5 || tu(na, t10)))
    return t10;
  throw nl(tm(t10) + " is not a typed array constructor");
}, exportTypedArrayMethod: function(t10, r10, e10, n10) {
  if (h) {
    if (e10)
      for (var o5 in ng) {
        var i2 = L[o5];
        if (i2 && k(i2.prototype, t10))
          try {
            delete i2.prototype[t10];
          } catch (e11) {
            try {
              i2.prototype[t10] = r10;
            } catch (t11) {
            }
          }
      }
    (!nc[t10] || e10) && rm(nc, t10, e10 ? r10 : nd && no[t10] || r10, n10);
  }
}, exportTypedArrayStaticMethod: function(t10, r10, e10) {
  var n10, o5;
  if (h) {
    if (r5) {
      if (e10) {
        for (n10 in ng)
          if ((o5 = L[n10]) && k(o5, t10))
            try {
              delete o5[t10];
            } catch (t11) {
            }
      }
      if (na[t10] && !e10)
        return;
      try {
        return rm(na, t10, e10 ? r10 : nd && na[t10] || r10);
      } catch (t11) {
      }
    }
    for (n10 in ng)
      (o5 = L[n10]) && (!o5[t10] || e10) && rm(o5, t10, r10);
  }
}, getTypedArrayConstructor: nb, isView: function(t10) {
  if (!H(t10))
    return false;
  var r10 = ec(t10);
  return "DataView" === r10 || k(ng, r10) || k(nv, r10);
}, isTypedArray: nm, TypedArray: na, TypedArrayPrototype: nc }, nA = nw.aTypedArray;
(0, nw.exportTypedArrayMethod)("at", function(t10) {
  var r10 = nA(this), e10 = rR(r10), n10 = rO(t10), o5 = n10 >= 0 ? n10 : e10 + n10;
  return o5 < 0 || o5 >= e10 ? void 0 : r10[o5];
});
var nx = function(t10) {
  if ("Function" === ry(t10))
    return w(t10);
}, nE = nx(nx.bind), nO = function(t10) {
  var r10 = 1 == t10;
  return function(e10, n10, o5) {
    for (var i2, u2 = P(e10), a2 = rg(u2), c2 = (tA(n10), void 0 === o5 ? n10 : g ? nE(n10, o5) : function() {
      return n10.apply(o5, arguments);
    }), f2 = rR(a2); f2-- > 0; )
      if (c2(i2 = a2[f2], f2, u2))
        switch (t10) {
          case 0:
            return i2;
          case 1:
            return f2;
        }
    return r10 ? -1 : void 0;
  };
}, nT = { findLast: nO(0), findLastIndex: nO(1) }, nS = nT.findLast, nj = nw.aTypedArray;
(0, nw.exportTypedArrayMethod)("findLast", function(t10) {
  return nS(nj(this), t10, arguments.length > 1 ? arguments[1] : void 0);
});
var nI = nT.findLastIndex, nR = nw.aTypedArray;
(0, nw.exportTypedArrayMethod)("findLastIndex", function(t10) {
  return nI(nR(this), t10, arguments.length > 1 ? arguments[1] : void 0);
});
var nP = RangeError, n_ = function(t10) {
  var r10 = rO(t10);
  if (r10 < 0)
    throw nP("The argument can't be less than 0");
  return r10;
}, nk = RangeError, nM = function(t10, r10) {
  var e10 = n_(t10);
  if (e10 % r10)
    throw nk("Wrong offset");
  return e10;
}, nC = L.RangeError, nF = L.Int8Array, nD = nF && nF.prototype, nL = nD && nD.set, nU = nw.aTypedArray, nz = nw.exportTypedArrayMethod, nW = !d(function() {
  var t10 = new Uint8ClampedArray(2);
  return to(nL, t10, { length: 1, 0: 3 }, 1), 3 !== t10[1];
}), n$ = nW && nw.NATIVE_ARRAY_BUFFER_VIEWS && d(function() {
  var t10 = new nF(2);
  return t10.set(1), t10.set("2", 1), 0 !== t10[0] || 2 !== t10[1];
});
nz("set", function(t10) {
  nU(this);
  var r10 = nM(arguments.length > 1 ? arguments[1] : void 0, 1), e10 = P(t10);
  if (nW)
    return to(nL, this, e10, r10);
  var n10 = this.length, o5 = rR(e10), i2 = 0;
  if (o5 + r10 > n10)
    throw nC("Wrong length");
  for (; i2 < o5; )
    this[r10 + i2] = e10[i2++];
}, !nW || n$);
var nB = function(t10, r10) {
  for (var e10 = rR(t10), n10 = new r10(e10), o5 = 0; o5 < e10; o5++)
    n10[o5] = t10[e10 - o5 - 1];
  return n10;
}, nV = nw.aTypedArray, nN = nw.exportTypedArrayMethod, nY = nw.getTypedArrayConstructor;
nN("toReversed", function() {
  return nB(nV(this), nY(this));
});
var nG = function(t10, r10) {
  for (var e10 = 0, n10 = rR(r10), o5 = new t10(n10); n10 > e10; )
    o5[e10] = r10[e10++];
  return o5;
}, nH = nw.aTypedArray, nq = nw.getTypedArrayConstructor, nK = nw.exportTypedArrayMethod, nX = w(nw.TypedArrayPrototype.sort);
nK("toSorted", function(t10) {
  void 0 !== t10 && tA(t10);
  var r10 = nH(this);
  return nX(nG(nq(r10), r10), t10);
});
var nJ = RangeError, nQ = TypeError, nZ = function(t10, r10, e10, n10) {
  var o5 = rR(t10), i2 = rO(e10), u2 = i2 < 0 ? o5 + i2 : i2;
  if (u2 >= o5 || u2 < 0)
    throw nJ("Incorrect index");
  for (var a2 = new r10(o5), c2 = 0; c2 < o5; c2++)
    a2[c2] = c2 === u2 ? n10 : t10[c2];
  return a2;
}, n0 = function(t10) {
  var r10 = ec(t10);
  return "BigInt64Array" == r10 || "BigUint64Array" == r10;
}, n1 = function(t10) {
  var r10 = tL(t10, "number");
  if ("number" == typeof r10)
    throw nQ("Can't convert number to bigint");
  return BigInt(r10);
}, n2 = nw.aTypedArray, n4 = nw.getTypedArrayConstructor;
(0, nw.exportTypedArrayMethod)("with", { with: function(t10, r10) {
  var e10 = n2(this), n10 = rO(t10), o5 = n0(e10) ? n1(r10) : +r10;
  return nZ(e10, n4(e10), n10, o5);
} }.with, !function() {
  try {
    new Int8Array(1).with(2, { valueOf: function() {
      throw 8;
    } });
  } catch (t10) {
    return 8 === t10;
  }
}());
var n9 = {}, n7 = Object.keys || function(t10) {
  return rC(t10, rF);
};
n9.f = h && !Z ? Object.defineProperties : function(t10, r10) {
  te(t10);
  for (var e10, n10 = rv(r10), o5 = n7(r10), i2 = o5.length, u2 = 0; i2 > u2; )
    q.f(t10, e10 = o5[u2++], n10[e10]);
  return t10;
};
var n3 = ti("document", "documentElement"), n6 = "prototype", n8 = "script", n5 = tq("IE_PROTO"), ot = function() {
}, or = function(t10) {
  return "<" + n8 + ">" + t10 + "</" + n8 + ">";
}, oe = function(t10) {
  t10.write(or("")), t10.close();
  var r10 = t10.parentWindow.Object;
  return t10 = null, r10;
}, on = function() {
  var t10, r10 = J("iframe");
  return r10.style.display = "none", n3.appendChild(r10), r10.src = String("java" + n8 + ":"), (t10 = r10.contentWindow.document).open(), t10.write(or("document.F=Object")), t10.close(), t10.F;
}, oo = function() {
  try {
    c = new ActiveXObject("htmlfile");
  } catch (t11) {
  }
  oo = "undefined" != typeof document ? document.domain && c ? oe(c) : on() : oe(c);
  for (var t10 = rF.length; t10--; )
    delete oo[n6][rF[t10]];
  return oo();
};
tK[n5] = true;
var oi = Object.create || function(t10, r10) {
  var e10;
  return null !== t10 ? (ot[n6] = te(t10), e10 = new ot(), ot[n6] = null, e10[n5] = t10) : e10 = oo(), void 0 === r10 ? e10 : n9.f(e10, r10);
}, ou = tM("iterator"), oa = false;
[].keys && ("next" in (s = [].keys()) ? (l = nt(nt(s))) !== Object.prototype && (f = l) : oa = true), (!H(f) || d(function() {
  var t10 = {};
  return f[ou].call(t10) !== t10;
})) && (f = {}), T(f[ou]) || rm(f, ou, function() {
  return this;
});
var oc = f, of = {}, ol = function() {
  return this;
}, os = function() {
}, op = [], oy = ti("Reflect", "construct"), od = /^\s*(?:class|function)\b/, oh = w(od.exec), og = !od.exec(os), ov = function(t10) {
  if (!T(t10))
    return false;
  try {
    return oy(os, op, t10), true;
  } catch (t11) {
    return false;
  }
}, ob = function(t10) {
  if (!T(t10))
    return false;
  switch (ec(t10)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return false;
  }
  try {
    return og || !!oh(od, V(t10));
  } catch (t11) {
    return true;
  }
};
ob.sham = true;
var om = !oy || d(function() {
  var t10;
  return ov(ov.call) || !ov(Object) || !ov(function() {
    t10 = true;
  }) || t10;
}) ? ob : ov, ow = TypeError, oA = function(t10) {
  if (om(t10))
    return t10;
  throw ow(tm(t10) + " is not a constructor");
}, ox = tM("species"), oE = w("".charAt), oO = w("".charCodeAt), oT = w("".slice), oS = function(t10) {
  return function(r10, e10) {
    var n10, o5, i2 = el(I(r10)), u2 = rO(e10), a2 = i2.length;
    return u2 < 0 || u2 >= a2 ? t10 ? "" : void 0 : (n10 = oO(i2, u2)) < 55296 || n10 > 56319 || u2 + 1 === a2 || (o5 = oO(i2, u2 + 1)) < 56320 || o5 > 57343 ? t10 ? oE(i2, u2) : n10 : t10 ? oT(i2, u2, u2 + 2) : (n10 - 55296 << 10) + (o5 - 56320) + 65536;
  };
}, oj = { codeAt: oS(false), charAt: oS(true) }.charAt, oI = L.RegExp, oR = d(function() {
  var t10 = oI("a", "y");
  return t10.lastIndex = 2, null != t10.exec("abcd");
}), oP = (oR || d(function() {
  return !oI("a", "y").sticky;
}), oR || d(function() {
  var t10 = oI("^r", "gy");
  return t10.lastIndex = 2, null != t10.exec("str");
})), o_ = L.RegExp, ok = d(function() {
  var t10 = o_(".", "s");
  return !(t10.dotAll && t10.exec("\n") && "s" === t10.flags);
}), oM = L.RegExp, oC = d(function() {
  var t10 = oM("(?<a>b)", "g");
  return "b" !== t10.exec("b").groups.a || "bc" !== "b".replace(t10, "$<a>c");
}), oF = t1.get, oD = tT("native-string-replace", String.prototype.replace), oL = RegExp.prototype.exec, oU = oL, oz = w("".charAt), oW = w("".indexOf), o$ = w("".replace), oB = w("".slice), oV = function() {
  var t10 = /a/, r10 = /b*/g;
  return to(oL, t10, "a"), to(oL, r10, "a"), 0 !== t10.lastIndex || 0 !== r10.lastIndex;
}(), oN = void 0 !== /()??/.exec("")[1];
(oV || oN || oP || ok || oC) && (oU = function(t10) {
  var r10, e10, n10, o5, i2, u2, a2, c2 = oF(this), f2 = el(t10), l2 = c2.raw;
  if (l2)
    return l2.lastIndex = this.lastIndex, r10 = to(oU, l2, f2), this.lastIndex = l2.lastIndex, r10;
  var s2 = c2.groups, p2 = oP && this.sticky, y2 = to(eV, this), d2 = this.source, h2 = 0, g2 = f2;
  if (p2 && (-1 === oW(y2 = o$(y2, "y", ""), "g") && (y2 += "g"), g2 = oB(f2, this.lastIndex), this.lastIndex > 0 && (!this.multiline || this.multiline && "\n" !== oz(f2, this.lastIndex - 1)) && (d2 = "(?: " + d2 + ")", g2 = " " + g2, h2++), e10 = RegExp("^(?:" + d2 + ")", y2)), oN && (e10 = RegExp("^" + d2 + "$(?!\\s)", y2)), oV && (n10 = this.lastIndex), o5 = to(oL, p2 ? e10 : this, g2), p2 ? o5 ? (o5.input = oB(o5.input, h2), o5[0] = oB(o5[0], h2), o5.index = this.lastIndex, this.lastIndex += o5[0].length) : this.lastIndex = 0 : oV && o5 && (this.lastIndex = this.global ? o5.index + o5[0].length : n10), oN && o5 && o5.length > 1 && to(oD, o5[0], e10, function() {
    for (i2 = 1; i2 < arguments.length - 2; i2++)
      void 0 === arguments[i2] && (o5[i2] = void 0);
  }), o5 && s2)
    for (i2 = 0, o5.groups = u2 = oi(null); i2 < s2.length; i2++)
      u2[(a2 = s2[i2])[0]] = o5[a2[1]];
  return o5;
});
var oY = oU, oG = TypeError, oH = function(t10, r10) {
  return { value: t10, done: r10 };
}, oq = function(t10, r10) {
  var e10, n10 = te(t10).constructor;
  return void 0 === n10 || S(e10 = te(n10)[ox]) ? r10 : oA(e10);
}, oK = function(t10, r10) {
  var e10 = t10.exec;
  if (T(e10)) {
    var n10 = to(e10, t10, r10);
    return null !== n10 && te(n10), n10;
  }
  if ("RegExp" === ry(t10))
    return to(oY, t10, r10);
  throw oG("RegExp#exec called on incompatible receiver");
}, oX = tM("matchAll"), oJ = "RegExp String", oQ = oJ + " Iterator", oZ = t1.set, o0 = t1.getterFor(oQ), o1 = RegExp.prototype, o2 = TypeError, o4 = nx("".indexOf), o9 = nx("".matchAll), o7 = !!o9 && !d(function() {
  o9("a", /./);
}), o3 = function(t10, r10, e10, n10) {
  var o5 = r10 + " Iterator";
  return t10.prototype = oi(oc, { next: tY(1, e10) }), e_(t10, o5, false), of[o5] = ol, t10;
}(function(t10, r10, e10, n10) {
  oZ(this, { type: oQ, regexp: t10, string: r10, global: e10, unicode: n10, done: false });
}, oJ, function() {
  var t10, r10 = o0(this);
  if (r10.done)
    return oH(void 0, true);
  var e10 = r10.regexp, n10 = r10.string, o5 = oK(e10, n10);
  return null === o5 ? (r10.done = true, oH(void 0, true)) : r10.global ? ("" === el(o5[0]) && (e10.lastIndex = (t10 = rI(e10.lastIndex)) + (r10.unicode ? oj(n10, t10).length : 1)), oH(o5, false)) : (r10.done = true, oH(o5, false));
});
rq({ target: "String", proto: true, forced: o7 }, { matchAll: function(t10) {
  var r10, e10, n10 = I(this);
  if (S(t10)) {
    if (o7)
      return o9(n10, t10);
  } else {
    if (eB(t10) && !~o4(el(I(eY(t10))), "g"))
      throw o2("`.matchAll` does not allow non-global regexes");
    if (o7)
      return o9(n10, t10);
    if (e10 = tx(t10, oX))
      return to(e10, t10, n10);
  }
  return r10 = el(n10), RegExp(t10, "g")[oX](r10);
} }), oX in o1 || rm(o1, oX, function(t10) {
  var r10, e10, n10, o5 = te(this), i2 = el(t10), u2 = oq(o5, RegExp), a2 = el(eY(o5));
  return r10 = new u2(u2 === RegExp ? o5.source : o5, a2), e10 = !!~o4(a2, "g"), n10 = !!~o4(a2, "u"), r10.lastIndex = rI(o5.lastIndex), new o3(r10, i2, e10, n10);
});
export {
  y as g
};
