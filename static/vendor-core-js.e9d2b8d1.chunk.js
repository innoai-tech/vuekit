var r, t, n, e, o, i, u, a, c = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, f = function(r10) {
  try {
    return !!r10();
  } catch (r11) {
    return true;
  }
}, p = !f(function() {
  return 7 != Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1];
}), l = !f(function() {
  var r10 = function() {
  }.bind();
  return "function" != typeof r10 || r10.hasOwnProperty("prototype");
}), s = Function.prototype, y = s.call, h = l && s.bind.bind(y, y), v = l ? h : function(r10) {
  return function() {
    return y.apply(r10, arguments);
  };
}, g = { exports: {} }, d = "object" == typeof document && document.all, b = { all: d, IS_HTMLDDA: void 0 === d && void 0 !== d }, m = b.all, w = b.IS_HTMLDDA ? function(r10) {
  return "function" == typeof r10 || r10 === m;
} : function(r10) {
  return "function" == typeof r10;
}, A = function(r10) {
  return null == r10;
}, T = TypeError, O = function(r10) {
  if (A(r10))
    throw T("Can't call method on " + r10);
  return r10;
}, S = Object, E = function(r10) {
  return S(O(r10));
}, j = v({}.hasOwnProperty), P = Object.hasOwn || function(r10, t10) {
  return j(E(r10), t10);
}, x = Function.prototype, I = p && Object.getOwnPropertyDescriptor, _ = P(x, "name") && (!p || p && I(x, "name").configurable), R = function(r10) {
  return r10 && r10.Math == Math && r10;
}, M = R("object" == typeof globalThis && globalThis) || R("object" == typeof window && window) || R("object" == typeof self && self) || R("object" == typeof c && c) || function() {
  return this;
}() || c || Function("return this")(), C = Object.defineProperty, k = function(r10, t10) {
  try {
    C(M, r10, { value: t10, configurable: true, writable: true });
  } catch (n10) {
    M[r10] = t10;
  }
  return t10;
}, D = "__core-js_shared__", L = M[D] || k(D, {}), F = v(Function.toString);
w(L.inspectSource) || (L.inspectSource = function(r10) {
  return F(r10);
});
var U = L.inspectSource, z = M.WeakMap, B = w(z) && /native code/.test(String(z)), V = b.all, W = b.IS_HTMLDDA ? function(r10) {
  return "object" == typeof r10 ? null !== r10 : w(r10) || r10 === V;
} : function(r10) {
  return "object" == typeof r10 ? null !== r10 : w(r10);
}, N = {}, Y = M.document, $ = W(Y) && W(Y.createElement), G = !p && !f(function() {
  return 7 != Object.defineProperty($ ? Y.createElement("div") : {}, "a", { get: function() {
    return 7;
  } }).a;
}), H = p && f(function() {
  return 42 != Object.defineProperty(function() {
  }, "prototype", { value: 42, writable: false }).prototype;
}), q = String, K = TypeError, J = function(r10) {
  if (W(r10))
    return r10;
  throw K(q(r10) + " is not an object");
}, Q = Function.prototype.call, X = l ? Q.bind(Q) : function() {
  return Q.apply(Q, arguments);
}, Z = function(r10, t10) {
  var n10;
  return arguments.length < 2 ? w(n10 = M[r10]) ? n10 : void 0 : M[r10] && M[r10][t10];
}, rr = v({}.isPrototypeOf), rt = "undefined" != typeof navigator && String(navigator.userAgent) || "", rn = M.process, re = M.Deno, ro = rn && rn.versions || re && re.version, ri = ro && ro.v8;
ri && (t = (r = ri.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !t && rt && (!(r = rt.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = rt.match(/Chrome\/(\d+)/)) && (t = +r[1]);
var ru = t, ra = M.String, rc = !!Object.getOwnPropertySymbols && !f(function() {
  var r10 = Symbol();
  return !ra(r10) || !(Object(r10) instanceof Symbol) || !Symbol.sham && ru && ru < 41;
}), rf = rc && !Symbol.sham && "symbol" == typeof Symbol.iterator, rp = Object, rl = rf ? function(r10) {
  return "symbol" == typeof r10;
} : function(r10) {
  var t10 = Z("Symbol");
  return w(t10) && rr(t10.prototype, rp(r10));
}, rs = String, ry = function(r10) {
  try {
    return rs(r10);
  } catch (r11) {
    return "Object";
  }
}, rh = TypeError, rv = function(r10) {
  if (w(r10))
    return r10;
  throw rh(ry(r10) + " is not a function");
}, rg = function(r10, t10) {
  var n10 = r10[t10];
  return A(n10) ? void 0 : rv(n10);
}, rd = TypeError, rb = { exports: {} };
(rb.exports = function(r10, t10) {
  return L[r10] || (L[r10] = void 0 !== t10 ? t10 : {});
})("versions", []).push({ version: "3.31.0", mode: "global", copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.31.0/LICENSE", source: "https://github.com/zloirock/core-js" });
var rm = rb.exports, rw = 0, rA = Math.random(), rT = v(1 .toString), rO = function(r10) {
  return "Symbol(" + (void 0 === r10 ? "" : r10) + ")_" + rT(++rw + rA, 36);
}, rS = M.Symbol, rE = rm("wks"), rj = rf ? rS.for || rS : rS && rS.withoutSetter || rO, rP = function(r10) {
  return P(rE, r10) || (rE[r10] = rc && P(rS, r10) ? rS[r10] : rj("Symbol." + r10)), rE[r10];
}, rx = function(r10, t10) {
  var n10, e2;
  if ("string" === t10 && w(n10 = r10.toString) && !W(e2 = X(n10, r10)) || w(n10 = r10.valueOf) && !W(e2 = X(n10, r10)) || "string" !== t10 && w(n10 = r10.toString) && !W(e2 = X(n10, r10)))
    return e2;
  throw rd("Can't convert object to primitive value");
}, rI = TypeError, r_ = rP("toPrimitive"), rR = function(r10, t10) {
  if (!W(r10) || rl(r10))
    return r10;
  var n10, e2 = rg(r10, r_);
  if (e2) {
    if (void 0 === t10 && (t10 = "default"), !W(n10 = X(e2, r10, t10)) || rl(n10))
      return n10;
    throw rI("Can't convert object to primitive value");
  }
  return void 0 === t10 && (t10 = "number"), rx(r10, t10);
}, rM = function(r10) {
  var t10 = rR(r10, "string");
  return rl(t10) ? t10 : t10 + "";
}, rC = TypeError, rk = Object.defineProperty, rD = Object.getOwnPropertyDescriptor, rL = "enumerable", rF = "configurable", rU = "writable";
N.f = p ? H ? function(r10, t10, n10) {
  if (J(r10), t10 = rM(t10), J(n10), "function" == typeof r10 && "prototype" === t10 && "value" in n10 && rU in n10 && !n10[rU]) {
    var e2 = rD(r10, t10);
    e2 && e2[rU] && (r10[t10] = n10.value, n10 = { configurable: rF in n10 ? n10[rF] : e2[rF], enumerable: rL in n10 ? n10[rL] : e2[rL], writable: false });
  }
  return rk(r10, t10, n10);
} : rk : function(r10, t10, n10) {
  if (J(r10), t10 = rM(t10), J(n10), G)
    try {
      return rk(r10, t10, n10);
    } catch (r11) {
    }
  if ("get" in n10 || "set" in n10)
    throw rC("Accessors not supported");
  return "value" in n10 && (r10[t10] = n10.value), r10;
};
var rz = function(r10, t10) {
  return { enumerable: !(1 & r10), configurable: !(2 & r10), writable: !(4 & r10), value: t10 };
}, rB = p ? function(r10, t10, n10) {
  return N.f(r10, t10, rz(1, n10));
} : function(r10, t10, n10) {
  return r10[t10] = n10, r10;
}, rV = rm("keys"), rW = function(r10) {
  return rV[r10] || (rV[r10] = rO(r10));
}, rN = {}, rY = "Object already initialized", r$ = M.TypeError, rG = M.WeakMap;
if (B || L.state) {
  var rH = L.state || (L.state = new rG());
  rH.get = rH.get, rH.has = rH.has, rH.set = rH.set, n = function(r10, t10) {
    if (rH.has(r10))
      throw r$(rY);
    return t10.facade = r10, rH.set(r10, t10), t10;
  }, e = function(r10) {
    return rH.get(r10) || {};
  }, o = function(r10) {
    return rH.has(r10);
  };
} else {
  var rq = rW("state");
  rN[rq] = true, n = function(r10, t10) {
    if (P(r10, rq))
      throw r$(rY);
    return t10.facade = r10, rB(r10, rq, t10), t10;
  }, e = function(r10) {
    return P(r10, rq) ? r10[rq] : {};
  }, o = function(r10) {
    return P(r10, rq);
  };
}
var rK = { set: n, get: e, has: o, enforce: function(r10) {
  return o(r10) ? e(r10) : n(r10, {});
}, getterFor: function(r10) {
  return function(t10) {
    var n10;
    if (!W(t10) || (n10 = e(t10)).type !== r10)
      throw r$("Incompatible receiver, " + r10 + " required");
    return n10;
  };
} }, rJ = rK.enforce, rQ = rK.get, rX = String, rZ = Object.defineProperty, r0 = v("".slice), r1 = v("".replace), r2 = v([].join), r4 = p && !f(function() {
  return 8 !== rZ(function() {
  }, "length", { value: 8 }).length;
}), r7 = String(String).split("String"), r8 = g.exports = function(r10, t10, n10) {
  "Symbol(" === r0(rX(t10), 0, 7) && (t10 = "[" + r1(rX(t10), /^Symbol\(([^)]*)\)/, "$1") + "]"), n10 && n10.getter && (t10 = "get " + t10), n10 && n10.setter && (t10 = "set " + t10), (!P(r10, "name") || _ && r10.name !== t10) && (p ? rZ(r10, "name", { value: t10, configurable: true }) : r10.name = t10), r4 && n10 && P(n10, "arity") && r10.length !== n10.arity && rZ(r10, "length", { value: n10.arity });
  try {
    n10 && P(n10, "constructor") && n10.constructor ? p && rZ(r10, "prototype", { writable: false }) : r10.prototype && (r10.prototype = void 0);
  } catch (r11) {
  }
  var e2 = rJ(r10);
  return P(e2, "source") || (e2.source = r2(r7, "string" == typeof t10 ? t10 : "")), r10;
};
Function.prototype.toString = r8(function() {
  return w(this) && rQ(this).source || U(this);
}, "toString");
var r9 = g.exports, r3 = function(r10, t10, n10) {
  return n10.get && r9(n10.get, t10, { getter: true }), n10.set && r9(n10.set, t10, { setter: true }), N.f(r10, t10, n10);
}, r6 = URLSearchParams.prototype, r5 = v(r6.forEach);
!p || "size" in r6 || r3(r6, "size", { get: function() {
  var r10 = 0;
  return r5(this, function() {
    r10++;
  }), r10;
}, configurable: true, enumerable: true });
var tr = {}, tt = {}, tn = {}.propertyIsEnumerable, te = Object.getOwnPropertyDescriptor, to = te && !tn.call({ 1: 2 }, 1);
tt.f = to ? function(r10) {
  var t10 = te(this, r10);
  return !!t10 && t10.enumerable;
} : tn;
var ti = v({}.toString), tu = v("".slice), ta = function(r10) {
  return tu(ti(r10), 8, -1);
}, tc = Object, tf = v("".split), tp = f(function() {
  return !tc("z").propertyIsEnumerable(0);
}) ? function(r10) {
  return "String" == ta(r10) ? tf(r10, "") : tc(r10);
} : tc, tl = function(r10) {
  return tp(O(r10));
}, ts = Object.getOwnPropertyDescriptor;
tr.f = p ? ts : function(r10, t10) {
  if (r10 = tl(r10), t10 = rM(t10), G)
    try {
      return ts(r10, t10);
    } catch (r11) {
    }
  if (P(r10, t10))
    return rz(!X(tt.f, r10, t10), r10[t10]);
};
var ty = function(r10, t10, n10, e2) {
  e2 || (e2 = {});
  var o2 = e2.enumerable, i2 = void 0 !== e2.name ? e2.name : t10;
  if (w(n10) && r9(n10, i2, e2), e2.global)
    o2 ? r10[t10] = n10 : k(t10, n10);
  else {
    try {
      e2.unsafe ? r10[t10] && (o2 = true) : delete r10[t10];
    } catch (r11) {
    }
    o2 ? r10[t10] = n10 : N.f(r10, t10, { value: n10, enumerable: false, configurable: !e2.nonConfigurable, writable: !e2.nonWritable });
  }
  return r10;
}, th = {}, tv = Math.ceil, tg = Math.floor, td = Math.trunc || function(r10) {
  var t10 = +r10;
  return (t10 > 0 ? tg : tv)(t10);
}, tb = function(r10) {
  var t10 = +r10;
  return t10 != t10 || 0 === t10 ? 0 : td(t10);
}, tm = Math.max, tw = Math.min, tA = Math.min, tT = function(r10) {
  var t10;
  return (t10 = r10.length) > 0 ? tA(tb(t10), 9007199254740991) : 0;
}, tO = function(r10, t10) {
  var n10 = tb(r10);
  return n10 < 0 ? tm(n10 + t10, 0) : tw(n10, t10);
}, tS = function(r10) {
  return function(t10, n10, e2) {
    var o2, i2 = tl(t10), u2 = tT(i2), a2 = tO(e2, u2);
    if (r10 && n10 != n10) {
      for (; u2 > a2; )
        if ((o2 = i2[a2++]) != o2)
          return true;
    } else
      for (; u2 > a2; a2++)
        if ((r10 || a2 in i2) && i2[a2] === n10)
          return r10 || a2 || 0;
    return !r10 && -1;
  };
}, tE = { includes: tS(true), indexOf: tS(false) }.indexOf, tj = v([].push), tP = function(r10, t10) {
  var n10, e2 = tl(r10), o2 = 0, i2 = [];
  for (n10 in e2)
    !P(rN, n10) && P(e2, n10) && tj(i2, n10);
  for (; t10.length > o2; )
    P(e2, n10 = t10[o2++]) && (~tE(i2, n10) || tj(i2, n10));
  return i2;
}, tx = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"].concat("length", "prototype");
th.f = Object.getOwnPropertyNames || function(r10) {
  return tP(r10, tx);
};
var tI = {};
tI.f = Object.getOwnPropertySymbols;
var t_ = v([].concat), tR = Z("Reflect", "ownKeys") || function(r10) {
  var t10 = th.f(J(r10)), n10 = tI.f;
  return n10 ? t_(t10, n10(r10)) : t10;
}, tM = function(r10, t10, n10) {
  for (var e2 = tR(t10), o2 = N.f, i2 = tr.f, u2 = 0; u2 < e2.length; u2++) {
    var a2 = e2[u2];
    P(r10, a2) || n10 && P(n10, a2) || o2(r10, a2, i2(t10, a2));
  }
}, tC = /#|\.prototype\./, tk = function(r10, t10) {
  var n10 = tL[tD(r10)];
  return n10 == tU || n10 != tF && (w(t10) ? f(t10) : !!t10);
}, tD = tk.normalize = function(r10) {
  return String(r10).replace(tC, ".").toLowerCase();
}, tL = tk.data = {}, tF = tk.NATIVE = "N", tU = tk.POLYFILL = "P", tz = tr.f, tB = function(r10, t10) {
  var n10, e2, o2, i2, u2, a2 = r10.target, c2 = r10.global, f2 = r10.stat;
  if (n10 = c2 ? M : f2 ? M[a2] || k(a2, {}) : (M[a2] || {}).prototype)
    for (e2 in t10) {
      if (i2 = t10[e2], o2 = r10.dontCallGetSet ? (u2 = tz(n10, e2)) && u2.value : n10[e2], !tk(c2 ? e2 : a2 + (f2 ? "." : "#") + e2, r10.forced) && void 0 !== o2) {
        if (typeof i2 == typeof o2)
          continue;
        tM(i2, o2);
      }
      (r10.sham || o2 && o2.sham) && rB(i2, "sham", true), ty(n10, e2, i2, r10);
    }
}, tV = Array.isArray || function(r10) {
  return "Array" == ta(r10);
}, tW = TypeError, tN = Object.getOwnPropertyDescriptor, tY = p && !function() {
  if (void 0 !== this)
    return true;
  try {
    Object.defineProperty([], "length", { writable: false }).length = 1;
  } catch (r10) {
    return r10 instanceof TypeError;
  }
}() ? function(r10, t10) {
  if (tV(r10) && !tN(r10, "length").writable)
    throw tW("Cannot set read only .length");
  return r10.length = t10;
} : function(r10, t10) {
  return r10.length = t10;
}, t$ = TypeError, tG = function(r10) {
  if (r10 > 9007199254740991)
    throw t$("Maximum allowed index exceeded");
  return r10;
};
tB({ target: "Array", proto: true, arity: 1, forced: f(function() {
  return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
}) || !function() {
  try {
    Object.defineProperty([], "length", { writable: false }).push();
  } catch (r10) {
    return r10 instanceof TypeError;
  }
}() }, { push: function(r10) {
  var t10 = E(this), n10 = tT(t10), e2 = arguments.length;
  tG(n10 + e2);
  for (var o2 = 0; o2 < e2; o2++)
    t10[n10] = arguments[o2], n10++;
  return tY(t10, n10), n10;
} });
var tH = Function.prototype, tq = tH.apply, tK = tH.call, tJ = "object" == typeof Reflect && Reflect.apply || (l ? tK.bind(tq) : function() {
  return tK.apply(tq, arguments);
}), tQ = String, tX = TypeError, tZ = function(r10, t10, n10) {
  try {
    return v(rv(Object.getOwnPropertyDescriptor(r10, t10)[n10]));
  } catch (r11) {
  }
}, t0 = function(r10) {
  if ("object" == typeof r10 || w(r10))
    return r10;
  throw tX("Can't set " + tQ(r10) + " as a prototype");
}, t1 = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var r10, t10 = false, n10 = {};
  try {
    (r10 = tZ(Object.prototype, "__proto__", "set"))(n10, []), t10 = n10 instanceof Array;
  } catch (r11) {
  }
  return function(n11, e2) {
    return J(n11), t0(e2), t10 ? r10(n11, e2) : n11.__proto__ = e2, n11;
  };
}() : void 0), t2 = N.f, t4 = rP("toStringTag"), t7 = {};
t7[t4] = "z";
var t8 = "[object z]" === String(t7), t9 = rP("toStringTag"), t3 = Object, t6 = "Arguments" == ta(function() {
  return arguments;
}()), t5 = function(r10, t10) {
  try {
    return r10[t10];
  } catch (r11) {
  }
}, nr = t8 ? ta : function(r10) {
  var t10, n10, e2;
  return void 0 === r10 ? "Undefined" : null === r10 ? "Null" : "string" == typeof (n10 = t5(t10 = t3(r10), t9)) ? n10 : t6 ? ta(t10) : "Object" == (e2 = ta(t10)) && w(t10.callee) ? "Arguments" : e2;
}, nt = String, nn = function(r10) {
  if ("Symbol" === nr(r10))
    throw TypeError("Cannot convert a Symbol value to a string");
  return nt(r10);
}, ne = Error, no = v("".replace), ni = String(ne("zxcasd").stack), nu = /\n\s*at [^:]*:[^\n]*/, na = nu.test(ni), nc = !f(function() {
  var r10 = Error("a");
  return !("stack" in r10) || (Object.defineProperty(r10, "stack", rz(1, 7)), 7 !== r10.stack);
}), nf = function(r10, t10) {
  if (na && "string" == typeof r10 && !ne.prepareStackTrace)
    for (; t10--; )
      r10 = no(r10, nu, "");
  return r10;
}, np = Error.captureStackTrace, nl = function(r10, t10, n10) {
  n10 in r10 || t2(r10, n10, { configurable: true, get: function() {
    return t10[n10];
  }, set: function(r11) {
    t10[n10] = r11;
  } });
}, ns = function(r10, t10, n10) {
  var e2, o2;
  return t1 && w(e2 = t10.constructor) && e2 !== n10 && W(o2 = e2.prototype) && o2 !== n10.prototype && t1(r10, o2), r10;
}, ny = function(r10, t10) {
  W(t10) && "cause" in t10 && rB(r10, "cause", t10.cause);
}, nh = function(r10, t10, n10, e2) {
  nc && (np ? np(r10, t10) : rB(r10, "stack", nf(n10, e2)));
}, nv = function(r10, t10, n10, e2) {
  var o2 = "stackTraceLimit", i2 = e2 ? 2 : 1, u2 = r10.split("."), a2 = u2[u2.length - 1], c2 = Z.apply(null, u2);
  if (c2) {
    var f2 = c2.prototype;
    if (P(f2, "cause") && delete f2.cause, !n10)
      return c2;
    var l2 = Z("Error"), s2 = t10(function(r11, t11) {
      var n11 = function(r12, t12) {
        return void 0 === r12 ? arguments.length < 2 ? "" : t12 : nn(r12);
      }(e2 ? t11 : r11, void 0), o3 = e2 ? new c2(r11) : new c2();
      return void 0 !== n11 && rB(o3, "message", n11), nh(o3, s2, o3.stack, 2), this && rr(f2, this) && ns(o3, this, s2), arguments.length > i2 && ny(o3, arguments[i2]), o3;
    });
    s2.prototype = f2, "Error" !== a2 ? t1 ? t1(s2, l2) : tM(s2, l2, { name: true }) : p && o2 in c2 && (nl(s2, c2, o2), nl(s2, c2, "prepareStackTrace")), tM(s2, c2);
    try {
      f2.name !== a2 && rB(f2, "name", a2), f2.constructor = s2;
    } catch (r11) {
    }
    return s2;
  }
}, ng = "WebAssembly", nd = M[ng], nb = 7 !== Error("e", { cause: 7 }).cause, nm = function(r10, t10) {
  var n10 = {};
  n10[r10] = nv(r10, t10, nb), tB({ global: true, constructor: true, arity: 1, forced: nb }, n10);
}, nw = function(r10, t10) {
  if (nd && nd[r10]) {
    var n10 = {};
    n10[r10] = nv(ng + "." + r10, t10, nb), tB({ target: ng, stat: true, constructor: true, arity: 1, forced: nb }, n10);
  }
};
nm("Error", function(r10) {
  return function(t10) {
    return tJ(r10, this, arguments);
  };
}), nm("EvalError", function(r10) {
  return function(t10) {
    return tJ(r10, this, arguments);
  };
}), nm("RangeError", function(r10) {
  return function(t10) {
    return tJ(r10, this, arguments);
  };
}), nm("ReferenceError", function(r10) {
  return function(t10) {
    return tJ(r10, this, arguments);
  };
}), nm("SyntaxError", function(r10) {
  return function(t10) {
    return tJ(r10, this, arguments);
  };
}), nm("TypeError", function(r10) {
  return function(t10) {
    return tJ(r10, this, arguments);
  };
}), nm("URIError", function(r10) {
  return function(t10) {
    return tJ(r10, this, arguments);
  };
}), nw("CompileError", function(r10) {
  return function(t10) {
    return tJ(r10, this, arguments);
  };
}), nw("LinkError", function(r10) {
  return function(t10) {
    return tJ(r10, this, arguments);
  };
}), nw("RuntimeError", function(r10) {
  return function(t10) {
    return tJ(r10, this, arguments);
  };
});
var nA = N.f, nT = rP("toStringTag");
tB({ global: true }, { Reflect: {} }), function(r10, t10, n10) {
  r10 && !n10 && (r10 = r10.prototype), r10 && !P(r10, nT) && nA(r10, nT, { configurable: true, value: t10 });
}(M.Reflect, "Reflect", true);
var nO = TypeError, nS = function(r10) {
  return function(t10, n10, e2, o2) {
    rv(n10);
    var i2 = E(t10), u2 = tp(i2), a2 = tT(i2), c2 = r10 ? a2 - 1 : 0, f2 = r10 ? -1 : 1;
    if (e2 < 2)
      for (; ; ) {
        if (c2 in u2) {
          o2 = u2[c2], c2 += f2;
          break;
        }
        if (c2 += f2, r10 ? c2 < 0 : a2 <= c2)
          throw nO("Reduce of empty array with no initial value");
      }
    for (; r10 ? c2 >= 0 : a2 > c2; c2 += f2)
      c2 in u2 && (o2 = n10(o2, u2[c2], c2, i2));
    return o2;
  };
}, nE = { left: nS(false), right: nS(true) }, nj = "undefined" != typeof process && "process" == ta(process), nP = nE.left;
tB({ target: "Array", proto: true, forced: !nj && ru > 79 && ru < 83 || !function(r10, t10) {
  var n10 = [][r10];
  return !!n10 && f(function() {
    n10.call(null, function() {
      return 1;
    }, 1);
  });
}("reduce") }, { reduce: function(r10) {
  var t10 = arguments.length;
  return nP(this, r10, t10, t10 > 1 ? arguments[1] : void 0);
} });
var nx = TypeError, nI = Object.defineProperty, n_ = M.self !== M;
try {
  if (p) {
    var nR = Object.getOwnPropertyDescriptor(M, "self");
    !n_ && nR && nR.get && nR.enumerable || r3(M, "self", { get: function() {
      return M;
    }, set: function(r10) {
      if (this !== M)
        throw nx("Illegal invocation");
      nI(M, "self", { value: r10, writable: true, configurable: true, enumerable: true });
    }, configurable: true, enumerable: true });
  } else
    tB({ global: true, simple: true, forced: n_ }, { self: M });
} catch (r10) {
}
var nM = rP("match"), nC = function() {
  var r10 = J(this), t10 = "";
  return r10.hasIndices && (t10 += "d"), r10.global && (t10 += "g"), r10.ignoreCase && (t10 += "i"), r10.multiline && (t10 += "m"), r10.dotAll && (t10 += "s"), r10.unicode && (t10 += "u"), r10.unicodeSets && (t10 += "v"), r10.sticky && (t10 += "y"), t10;
}, nk = RegExp.prototype, nD = Math.floor, nL = v("".charAt), nF = v("".replace), nU = v("".slice), nz = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, nB = /\$([$&'`]|\d{1,2})/g, nV = function(r10) {
  var t10;
  return W(r10) && (void 0 !== (t10 = r10[nM]) ? !!t10 : "RegExp" == ta(r10));
}, nW = function(r10) {
  var t10 = r10.flags;
  return void 0 === t10 && !("flags" in nk) && !P(r10, "flags") && rr(nk, r10) ? X(nC, r10) : t10;
}, nN = function(r10, t10, n10, e2, o2, i2) {
  var u2 = n10 + r10.length, a2 = e2.length, c2 = nB;
  return void 0 !== o2 && (o2 = E(o2), c2 = nz), nF(i2, c2, function(i3, c3) {
    var f2;
    switch (nL(c3, 0)) {
      case "$":
        return "$";
      case "&":
        return r10;
      case "`":
        return nU(t10, 0, n10);
      case "'":
        return nU(t10, u2);
      case "<":
        f2 = o2[nU(c3, 1, -1)];
        break;
      default:
        var p2 = +c3;
        if (0 === p2)
          return i3;
        if (p2 > a2) {
          var l2 = nD(p2 / 10);
          if (0 === l2)
            return i3;
          if (l2 <= a2)
            return void 0 === e2[l2 - 1] ? nL(c3, 1) : e2[l2 - 1] + nL(c3, 1);
          return i3;
        }
        f2 = e2[p2 - 1];
    }
    return void 0 === f2 ? "" : f2;
  });
}, nY = rP("replace"), n$ = TypeError, nG = v("".indexOf);
v("".replace);
var nH = v("".slice), nq = Math.max, nK = function(r10, t10, n10) {
  return n10 > r10.length ? -1 : "" === t10 ? n10 : nG(r10, t10, n10);
};
tB({ target: "String", proto: true }, { replaceAll: function(r10, t10) {
  var n10, e2, o2, i2, u2, a2, c2, f2 = O(this), p2 = 0, l2 = 0, s2 = "";
  if (!A(r10)) {
    if (nV(r10) && !~nG(nn(O(nW(r10))), "g"))
      throw n$("`.replaceAll` does not allow non-global regexes");
    if (n10 = rg(r10, nY))
      return X(n10, r10, f2, t10);
  }
  for (e2 = nn(f2), o2 = nn(r10), (i2 = w(t10)) || (t10 = nn(t10)), a2 = nq(1, u2 = o2.length), p2 = nK(e2, o2, 0); -1 !== p2; )
    c2 = i2 ? nn(t10(o2, p2, e2)) : nN(o2, e2, p2, [], void 0, t10), s2 += nH(e2, l2, p2) + c2, l2 = p2 + u2, p2 = nK(e2, o2, p2 + a2);
  return l2 < e2.length && (s2 += nH(e2, l2)), s2;
} });
var nJ = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView, nQ = !f(function() {
  function r10() {
  }
  return r10.prototype.constructor = null, Object.getPrototypeOf(new r10()) !== r10.prototype;
}), nX = rW("IE_PROTO"), nZ = Object, n0 = nZ.prototype, n1 = nQ ? nZ.getPrototypeOf : function(r10) {
  var t10 = E(r10);
  if (P(t10, nX))
    return t10[nX];
  var n10 = t10.constructor;
  return w(n10) && t10 instanceof n10 ? n10.prototype : t10 instanceof nZ ? n0 : null;
}, n2 = rK.enforce, n4 = rK.get, n7 = M.Int8Array, n8 = n7 && n7.prototype, n9 = M.Uint8ClampedArray, n3 = n9 && n9.prototype, n6 = n7 && n1(n7), n5 = n8 && n1(n8), er = Object.prototype, et = M.TypeError, en = rP("toStringTag"), ee = rO("TYPED_ARRAY_TAG"), eo = "TypedArrayConstructor", ei = nJ && !!t1 && "Opera" !== nr(M.opera), eu = false, ea = { Int8Array: 1, Uint8Array: 1, Uint8ClampedArray: 1, Int16Array: 2, Uint16Array: 2, Int32Array: 4, Uint32Array: 4, Float32Array: 4, Float64Array: 8 }, ec = { BigInt64Array: 8, BigUint64Array: 8 }, ef = function(r10) {
  var t10 = n1(r10);
  if (W(t10)) {
    var n10 = n4(t10);
    return n10 && P(n10, eo) ? n10[eo] : ef(t10);
  }
}, ep = function(r10) {
  if (!W(r10))
    return false;
  var t10 = nr(r10);
  return P(ea, t10) || P(ec, t10);
};
for (i in ea)
  (a = (u = M[i]) && u.prototype) ? n2(a)[eo] = u : ei = false;
for (i in ec)
  (a = (u = M[i]) && u.prototype) && (n2(a)[eo] = u);
if ((!ei || !w(n6) || n6 === Function.prototype) && (n6 = function() {
  throw et("Incorrect invocation");
}, ei))
  for (i in ea)
    M[i] && t1(M[i], n6);
if ((!ei || !n5 || n5 === er) && (n5 = n6.prototype, ei))
  for (i in ea)
    M[i] && t1(M[i].prototype, n5);
if (ei && n1(n3) !== n5 && t1(n3, n5), p && !P(n5, en))
  for (i in eu = true, r3(n5, en, { configurable: true, get: function() {
    return W(this) ? this[ee] : void 0;
  } }), ea)
    M[i] && rB(M[i], ee, i);
var el = { NATIVE_ARRAY_BUFFER_VIEWS: ei, TYPED_ARRAY_TAG: eu && ee, aTypedArray: function(r10) {
  if (ep(r10))
    return r10;
  throw et("Target is not a typed array");
}, aTypedArrayConstructor: function(r10) {
  if (w(r10) && (!t1 || rr(n6, r10)))
    return r10;
  throw et(ry(r10) + " is not a typed array constructor");
}, exportTypedArrayMethod: function(r10, t10, n10, e2) {
  if (p) {
    if (n10)
      for (var o2 in ea) {
        var i2 = M[o2];
        if (i2 && P(i2.prototype, r10))
          try {
            delete i2.prototype[r10];
          } catch (n11) {
            try {
              i2.prototype[r10] = t10;
            } catch (r11) {
            }
          }
      }
    (!n5[r10] || n10) && ty(n5, r10, n10 ? t10 : ei && n8[r10] || t10, e2);
  }
}, exportTypedArrayStaticMethod: function(r10, t10, n10) {
  var e2, o2;
  if (p) {
    if (t1) {
      if (n10) {
        for (e2 in ea)
          if ((o2 = M[e2]) && P(o2, r10))
            try {
              delete o2[r10];
            } catch (r11) {
            }
      }
      if (n6[r10] && !n10)
        return;
      try {
        return ty(n6, r10, n10 ? t10 : ei && n6[r10] || t10);
      } catch (r11) {
      }
    }
    for (e2 in ea)
      (o2 = M[e2]) && (!o2[r10] || n10) && ty(o2, r10, t10);
  }
}, getTypedArrayConstructor: ef, isView: function(r10) {
  if (!W(r10))
    return false;
  var t10 = nr(r10);
  return "DataView" === t10 || P(ea, t10) || P(ec, t10);
}, isTypedArray: ep, TypedArray: n6, TypedArrayPrototype: n5 }, es = el.aTypedArray;
(0, el.exportTypedArrayMethod)("at", function(r10) {
  var t10 = es(this), n10 = tT(t10), e2 = tb(r10), o2 = e2 >= 0 ? e2 : n10 + e2;
  return o2 < 0 || o2 >= n10 ? void 0 : t10[o2];
});
var ey = function(r10) {
  if ("Function" === ta(r10))
    return v(r10);
}, eh = ey(ey.bind), ev = function(r10) {
  var t10 = 1 == r10;
  return function(n10, e2, o2) {
    for (var i2, u2 = E(n10), a2 = tp(u2), c2 = (rv(e2), void 0 === o2 ? e2 : l ? eh(e2, o2) : function() {
      return e2.apply(o2, arguments);
    }), f2 = tT(a2); f2-- > 0; )
      if (c2(i2 = a2[f2], f2, u2))
        switch (r10) {
          case 0:
            return i2;
          case 1:
            return f2;
        }
    return t10 ? -1 : void 0;
  };
}, eg = { findLast: ev(0), findLastIndex: ev(1) }, ed = eg.findLast, eb = el.aTypedArray;
(0, el.exportTypedArrayMethod)("findLast", function(r10) {
  return ed(eb(this), r10, arguments.length > 1 ? arguments[1] : void 0);
});
var em = eg.findLastIndex, ew = el.aTypedArray;
(0, el.exportTypedArrayMethod)("findLastIndex", function(r10) {
  return em(ew(this), r10, arguments.length > 1 ? arguments[1] : void 0);
});
var eA = RangeError, eT = function(r10) {
  var t10 = tb(r10);
  if (t10 < 0)
    throw eA("The argument can't be less than 0");
  return t10;
}, eO = RangeError, eS = function(r10, t10) {
  var n10 = eT(r10);
  if (n10 % t10)
    throw eO("Wrong offset");
  return n10;
}, eE = M.RangeError, ej = M.Int8Array, eP = ej && ej.prototype, ex = eP && eP.set, eI = el.aTypedArray, e_ = el.exportTypedArrayMethod, eR = !f(function() {
  var r10 = new Uint8ClampedArray(2);
  return X(ex, r10, { length: 1, 0: 3 }, 1), 3 !== r10[1];
}), eM = eR && el.NATIVE_ARRAY_BUFFER_VIEWS && f(function() {
  var r10 = new ej(2);
  return r10.set(1), r10.set("2", 1), 0 !== r10[0] || 2 !== r10[1];
});
e_("set", function(r10) {
  eI(this);
  var t10 = eS(arguments.length > 1 ? arguments[1] : void 0, 1), n10 = E(r10);
  if (eR)
    return X(ex, this, n10, t10);
  var e2 = this.length, o2 = tT(n10), i2 = 0;
  if (o2 + t10 > e2)
    throw eE("Wrong length");
  for (; i2 < o2; )
    this[t10 + i2] = n10[i2++];
}, !eR || eM);
var eC = function(r10, t10) {
  for (var n10 = tT(r10), e2 = new t10(n10), o2 = 0; o2 < n10; o2++)
    e2[o2] = r10[n10 - o2 - 1];
  return e2;
}, ek = el.aTypedArray, eD = el.exportTypedArrayMethod, eL = el.getTypedArrayConstructor;
eD("toReversed", function() {
  return eC(ek(this), eL(this));
});
var eF = function(r10, t10) {
  for (var n10 = 0, e2 = tT(t10), o2 = new r10(e2); e2 > n10; )
    o2[n10] = t10[n10++];
  return o2;
}, eU = el.aTypedArray, ez = el.getTypedArrayConstructor, eB = el.exportTypedArrayMethod, eV = v(el.TypedArrayPrototype.sort);
eB("toSorted", function(r10) {
  void 0 !== r10 && rv(r10);
  var t10 = eU(this);
  return eV(eF(ez(t10), t10), r10);
});
var eW = RangeError, eN = TypeError, eY = function(r10, t10, n10, e2) {
  var o2 = tT(r10), i2 = tb(n10), u2 = i2 < 0 ? o2 + i2 : i2;
  if (u2 >= o2 || u2 < 0)
    throw eW("Incorrect index");
  for (var a2 = new t10(o2), c2 = 0; c2 < o2; c2++)
    a2[c2] = c2 === u2 ? e2 : r10[c2];
  return a2;
}, e$ = function(r10) {
  var t10 = nr(r10);
  return "BigInt64Array" == t10 || "BigUint64Array" == t10;
}, eG = function(r10) {
  var t10 = rR(r10, "number");
  if ("number" == typeof t10)
    throw eN("Can't convert number to bigint");
  return BigInt(t10);
}, eH = el.aTypedArray, eq = el.getTypedArrayConstructor;
(0, el.exportTypedArrayMethod)("with", { with: function(r10, t10) {
  var n10 = eH(this), e2 = tb(r10), o2 = e$(n10) ? eG(t10) : +t10;
  return eY(n10, eq(n10), e2, o2);
} }.with, !function() {
  try {
    new Int8Array(1).with(2, { valueOf: function() {
      throw 8;
    } });
  } catch (r10) {
    return 8 === r10;
  }
}());
