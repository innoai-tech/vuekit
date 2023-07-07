var r, t, e, n, o, i, u, a, c = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function f(r10) {
  return r10 && r10.__esModule && Object.prototype.hasOwnProperty.call(r10, "default") ? r10.default : r10;
}
var p = function(r10) {
  try {
    return !!r10();
  } catch (r11) {
    return true;
  }
}, l = !p(function() {
  return 7 != Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1];
}), s = !p(function() {
  var r10 = function() {
  }.bind();
  return "function" != typeof r10 || r10.hasOwnProperty("prototype");
}), y = Function.prototype, h = y.call, g = s && y.bind.bind(h, h), v = s ? g : function(r10) {
  return function() {
    return h.apply(r10, arguments);
  };
}, d = { exports: {} }, b = "object" == typeof document && document.all, m = { all: b, IS_HTMLDDA: void 0 === b && void 0 !== b }, w = m.all, A = m.IS_HTMLDDA ? function(r10) {
  return "function" == typeof r10 || r10 === w;
} : function(r10) {
  return "function" == typeof r10;
}, T = function(r10) {
  return null == r10;
}, O = TypeError, S = function(r10) {
  if (T(r10))
    throw O("Can't call method on " + r10);
  return r10;
}, E = Object, j = function(r10) {
  return E(S(r10));
}, P = v({}.hasOwnProperty), x = Object.hasOwn || function(r10, t10) {
  return P(j(r10), t10);
}, _ = Function.prototype, I = l && Object.getOwnPropertyDescriptor, R = x(_, "name") && (!l || l && I(_, "name").configurable), M = function(r10) {
  return r10 && r10.Math == Math && r10;
}, C = M("object" == typeof globalThis && globalThis) || M("object" == typeof window && window) || M("object" == typeof self && self) || M("object" == typeof c && c) || function() {
  return this;
}() || c || Function("return this")(), k = Object.defineProperty, D = function(r10, t10) {
  try {
    k(C, r10, { value: t10, configurable: true, writable: true });
  } catch (e10) {
    C[r10] = t10;
  }
  return t10;
}, F = "__core-js_shared__", L = C[F] || D(F, {}), U = v(Function.toString);
A(L.inspectSource) || (L.inspectSource = function(r10) {
  return U(r10);
});
var z = L.inspectSource, B = C.WeakMap, V = A(B) && /native code/.test(String(B)), W = m.all, N = m.IS_HTMLDDA ? function(r10) {
  return "object" == typeof r10 ? null !== r10 : A(r10) || r10 === W;
} : function(r10) {
  return "object" == typeof r10 ? null !== r10 : A(r10);
}, Y = {}, $ = C.document, G = N($) && N($.createElement), H = !l && !p(function() {
  return 7 != Object.defineProperty(G ? $.createElement("div") : {}, "a", { get: function() {
    return 7;
  } }).a;
}), q = l && p(function() {
  return 42 != Object.defineProperty(function() {
  }, "prototype", { value: 42, writable: false }).prototype;
}), K = String, J = TypeError, Q = function(r10) {
  if (N(r10))
    return r10;
  throw J(K(r10) + " is not an object");
}, X = Function.prototype.call, Z = s ? X.bind(X) : function() {
  return X.apply(X, arguments);
}, rr = function(r10, t10) {
  var e10;
  return arguments.length < 2 ? A(e10 = C[r10]) ? e10 : void 0 : C[r10] && C[r10][t10];
}, rt = v({}.isPrototypeOf), re = "undefined" != typeof navigator && String(navigator.userAgent) || "", rn = C.process, ro = C.Deno, ri = rn && rn.versions || ro && ro.version, ru = ri && ri.v8;
ru && (t = (r = ru.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !t && re && (!(r = re.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = re.match(/Chrome\/(\d+)/)) && (t = +r[1]);
var ra = t, rc = C.String, rf = !!Object.getOwnPropertySymbols && !p(function() {
  var r10 = Symbol();
  return !rc(r10) || !(Object(r10) instanceof Symbol) || !Symbol.sham && ra && ra < 41;
}), rp = rf && !Symbol.sham && "symbol" == typeof Symbol.iterator, rl = Object, rs = rp ? function(r10) {
  return "symbol" == typeof r10;
} : function(r10) {
  var t10 = rr("Symbol");
  return A(t10) && rt(t10.prototype, rl(r10));
}, ry = String, rh = function(r10) {
  try {
    return ry(r10);
  } catch (r11) {
    return "Object";
  }
}, rg = TypeError, rv = function(r10) {
  if (A(r10))
    return r10;
  throw rg(rh(r10) + " is not a function");
}, rd = function(r10, t10) {
  var e10 = r10[t10];
  return T(e10) ? void 0 : rv(e10);
}, rb = TypeError, rm = { exports: {} };
(rm.exports = function(r10, t10) {
  return L[r10] || (L[r10] = void 0 !== t10 ? t10 : {});
})("versions", []).push({ version: "3.31.0", mode: "global", copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.31.0/LICENSE", source: "https://github.com/zloirock/core-js" });
var rw = rm.exports, rA = 0, rT = Math.random(), rO = v(1 .toString), rS = function(r10) {
  return "Symbol(" + (void 0 === r10 ? "" : r10) + ")_" + rO(++rA + rT, 36);
}, rE = C.Symbol, rj = rw("wks"), rP = rp ? rE.for || rE : rE && rE.withoutSetter || rS, rx = function(r10) {
  return x(rj, r10) || (rj[r10] = rf && x(rE, r10) ? rE[r10] : rP("Symbol." + r10)), rj[r10];
}, r_ = function(r10, t10) {
  var e10, n2;
  if ("string" === t10 && A(e10 = r10.toString) && !N(n2 = Z(e10, r10)) || A(e10 = r10.valueOf) && !N(n2 = Z(e10, r10)) || "string" !== t10 && A(e10 = r10.toString) && !N(n2 = Z(e10, r10)))
    return n2;
  throw rb("Can't convert object to primitive value");
}, rI = TypeError, rR = rx("toPrimitive"), rM = function(r10, t10) {
  if (!N(r10) || rs(r10))
    return r10;
  var e10, n2 = rd(r10, rR);
  if (n2) {
    if (void 0 === t10 && (t10 = "default"), !N(e10 = Z(n2, r10, t10)) || rs(e10))
      return e10;
    throw rI("Can't convert object to primitive value");
  }
  return void 0 === t10 && (t10 = "number"), r_(r10, t10);
}, rC = function(r10) {
  var t10 = rM(r10, "string");
  return rs(t10) ? t10 : t10 + "";
}, rk = TypeError, rD = Object.defineProperty, rF = Object.getOwnPropertyDescriptor, rL = "enumerable", rU = "configurable", rz = "writable";
Y.f = l ? q ? function(r10, t10, e10) {
  if (Q(r10), t10 = rC(t10), Q(e10), "function" == typeof r10 && "prototype" === t10 && "value" in e10 && rz in e10 && !e10[rz]) {
    var n2 = rF(r10, t10);
    n2 && n2[rz] && (r10[t10] = e10.value, e10 = { configurable: rU in e10 ? e10[rU] : n2[rU], enumerable: rL in e10 ? e10[rL] : n2[rL], writable: false });
  }
  return rD(r10, t10, e10);
} : rD : function(r10, t10, e10) {
  if (Q(r10), t10 = rC(t10), Q(e10), H)
    try {
      return rD(r10, t10, e10);
    } catch (r11) {
    }
  if ("get" in e10 || "set" in e10)
    throw rk("Accessors not supported");
  return "value" in e10 && (r10[t10] = e10.value), r10;
};
var rB = function(r10, t10) {
  return { enumerable: !(1 & r10), configurable: !(2 & r10), writable: !(4 & r10), value: t10 };
}, rV = l ? function(r10, t10, e10) {
  return Y.f(r10, t10, rB(1, e10));
} : function(r10, t10, e10) {
  return r10[t10] = e10, r10;
}, rW = rw("keys"), rN = function(r10) {
  return rW[r10] || (rW[r10] = rS(r10));
}, rY = {}, r$ = "Object already initialized", rG = C.TypeError, rH = C.WeakMap;
if (V || L.state) {
  var rq = L.state || (L.state = new rH());
  rq.get = rq.get, rq.has = rq.has, rq.set = rq.set, e = function(r10, t10) {
    if (rq.has(r10))
      throw rG(r$);
    return t10.facade = r10, rq.set(r10, t10), t10;
  }, n = function(r10) {
    return rq.get(r10) || {};
  }, o = function(r10) {
    return rq.has(r10);
  };
} else {
  var rK = rN("state");
  rY[rK] = true, e = function(r10, t10) {
    if (x(r10, rK))
      throw rG(r$);
    return t10.facade = r10, rV(r10, rK, t10), t10;
  }, n = function(r10) {
    return x(r10, rK) ? r10[rK] : {};
  }, o = function(r10) {
    return x(r10, rK);
  };
}
var rJ = { set: e, get: n, has: o, enforce: function(r10) {
  return o(r10) ? n(r10) : e(r10, {});
}, getterFor: function(r10) {
  return function(t10) {
    var e10;
    if (!N(t10) || (e10 = n(t10)).type !== r10)
      throw rG("Incompatible receiver, " + r10 + " required");
    return e10;
  };
} }, rQ = rJ.enforce, rX = rJ.get, rZ = String, r0 = Object.defineProperty, r1 = v("".slice), r2 = v("".replace), r4 = v([].join), r7 = l && !p(function() {
  return 8 !== r0(function() {
  }, "length", { value: 8 }).length;
}), r8 = String(String).split("String"), r9 = d.exports = function(r10, t10, e10) {
  "Symbol(" === r1(rZ(t10), 0, 7) && (t10 = "[" + r2(rZ(t10), /^Symbol\(([^)]*)\)/, "$1") + "]"), e10 && e10.getter && (t10 = "get " + t10), e10 && e10.setter && (t10 = "set " + t10), (!x(r10, "name") || R && r10.name !== t10) && (l ? r0(r10, "name", { value: t10, configurable: true }) : r10.name = t10), r7 && e10 && x(e10, "arity") && r10.length !== e10.arity && r0(r10, "length", { value: e10.arity });
  try {
    e10 && x(e10, "constructor") && e10.constructor ? l && r0(r10, "prototype", { writable: false }) : r10.prototype && (r10.prototype = void 0);
  } catch (r11) {
  }
  var n2 = rQ(r10);
  return x(n2, "source") || (n2.source = r4(r8, "string" == typeof t10 ? t10 : "")), r10;
};
Function.prototype.toString = r9(function() {
  return A(this) && rX(this).source || z(this);
}, "toString");
var r3 = d.exports, r6 = function(r10, t10, e10) {
  return e10.get && r3(e10.get, t10, { getter: true }), e10.set && r3(e10.set, t10, { setter: true }), Y.f(r10, t10, e10);
}, r5 = URLSearchParams.prototype, tr = v(r5.forEach);
!l || "size" in r5 || r6(r5, "size", { get: function() {
  var r10 = 0;
  return tr(this, function() {
    r10++;
  }), r10;
}, configurable: true, enumerable: true });
var tt = {}, te = {}, tn = {}.propertyIsEnumerable, to = Object.getOwnPropertyDescriptor, ti = to && !tn.call({ 1: 2 }, 1);
te.f = ti ? function(r10) {
  var t10 = to(this, r10);
  return !!t10 && t10.enumerable;
} : tn;
var tu = v({}.toString), ta = v("".slice), tc = function(r10) {
  return ta(tu(r10), 8, -1);
}, tf = Object, tp = v("".split), tl = p(function() {
  return !tf("z").propertyIsEnumerable(0);
}) ? function(r10) {
  return "String" == tc(r10) ? tp(r10, "") : tf(r10);
} : tf, ts = function(r10) {
  return tl(S(r10));
}, ty = Object.getOwnPropertyDescriptor;
tt.f = l ? ty : function(r10, t10) {
  if (r10 = ts(r10), t10 = rC(t10), H)
    try {
      return ty(r10, t10);
    } catch (r11) {
    }
  if (x(r10, t10))
    return rB(!Z(te.f, r10, t10), r10[t10]);
};
var th = function(r10, t10, e10, n2) {
  n2 || (n2 = {});
  var o2 = n2.enumerable, i2 = void 0 !== n2.name ? n2.name : t10;
  if (A(e10) && r3(e10, i2, n2), n2.global)
    o2 ? r10[t10] = e10 : D(t10, e10);
  else {
    try {
      n2.unsafe ? r10[t10] && (o2 = true) : delete r10[t10];
    } catch (r11) {
    }
    o2 ? r10[t10] = e10 : Y.f(r10, t10, { value: e10, enumerable: false, configurable: !n2.nonConfigurable, writable: !n2.nonWritable });
  }
  return r10;
}, tg = {}, tv = Math.ceil, td = Math.floor, tb = Math.trunc || function(r10) {
  var t10 = +r10;
  return (t10 > 0 ? td : tv)(t10);
}, tm = function(r10) {
  var t10 = +r10;
  return t10 != t10 || 0 === t10 ? 0 : tb(t10);
}, tw = Math.max, tA = Math.min, tT = Math.min, tO = function(r10) {
  var t10;
  return (t10 = r10.length) > 0 ? tT(tm(t10), 9007199254740991) : 0;
}, tS = function(r10, t10) {
  var e10 = tm(r10);
  return e10 < 0 ? tw(e10 + t10, 0) : tA(e10, t10);
}, tE = function(r10) {
  return function(t10, e10, n2) {
    var o2, i2 = ts(t10), u2 = tO(i2), a2 = tS(n2, u2);
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
}, tj = { includes: tE(true), indexOf: tE(false) }.indexOf, tP = v([].push), tx = function(r10, t10) {
  var e10, n2 = ts(r10), o2 = 0, i2 = [];
  for (e10 in n2)
    !x(rY, e10) && x(n2, e10) && tP(i2, e10);
  for (; t10.length > o2; )
    x(n2, e10 = t10[o2++]) && (~tj(i2, e10) || tP(i2, e10));
  return i2;
}, t_ = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"].concat("length", "prototype");
tg.f = Object.getOwnPropertyNames || function(r10) {
  return tx(r10, t_);
};
var tI = {};
tI.f = Object.getOwnPropertySymbols;
var tR = v([].concat), tM = rr("Reflect", "ownKeys") || function(r10) {
  var t10 = tg.f(Q(r10)), e10 = tI.f;
  return e10 ? tR(t10, e10(r10)) : t10;
}, tC = function(r10, t10, e10) {
  for (var n2 = tM(t10), o2 = Y.f, i2 = tt.f, u2 = 0; u2 < n2.length; u2++) {
    var a2 = n2[u2];
    x(r10, a2) || e10 && x(e10, a2) || o2(r10, a2, i2(t10, a2));
  }
}, tk = /#|\.prototype\./, tD = function(r10, t10) {
  var e10 = tL[tF(r10)];
  return e10 == tz || e10 != tU && (A(t10) ? p(t10) : !!t10);
}, tF = tD.normalize = function(r10) {
  return String(r10).replace(tk, ".").toLowerCase();
}, tL = tD.data = {}, tU = tD.NATIVE = "N", tz = tD.POLYFILL = "P", tB = tt.f, tV = function(r10, t10) {
  var e10, n2, o2, i2, u2, a2 = r10.target, c2 = r10.global, f2 = r10.stat;
  if (e10 = c2 ? C : f2 ? C[a2] || D(a2, {}) : (C[a2] || {}).prototype)
    for (n2 in t10) {
      if (i2 = t10[n2], o2 = r10.dontCallGetSet ? (u2 = tB(e10, n2)) && u2.value : e10[n2], !tD(c2 ? n2 : a2 + (f2 ? "." : "#") + n2, r10.forced) && void 0 !== o2) {
        if (typeof i2 == typeof o2)
          continue;
        tC(i2, o2);
      }
      (r10.sham || o2 && o2.sham) && rV(i2, "sham", true), th(e10, n2, i2, r10);
    }
}, tW = Array.isArray || function(r10) {
  return "Array" == tc(r10);
}, tN = TypeError, tY = Object.getOwnPropertyDescriptor, t$ = l && !function() {
  if (void 0 !== this)
    return true;
  try {
    Object.defineProperty([], "length", { writable: false }).length = 1;
  } catch (r10) {
    return r10 instanceof TypeError;
  }
}() ? function(r10, t10) {
  if (tW(r10) && !tY(r10, "length").writable)
    throw tN("Cannot set read only .length");
  return r10.length = t10;
} : function(r10, t10) {
  return r10.length = t10;
}, tG = TypeError, tH = function(r10) {
  if (r10 > 9007199254740991)
    throw tG("Maximum allowed index exceeded");
  return r10;
};
tV({ target: "Array", proto: true, arity: 1, forced: p(function() {
  return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
}) || !function() {
  try {
    Object.defineProperty([], "length", { writable: false }).push();
  } catch (r10) {
    return r10 instanceof TypeError;
  }
}() }, { push: function(r10) {
  var t10 = j(this), e10 = tO(t10), n2 = arguments.length;
  tH(e10 + n2);
  for (var o2 = 0; o2 < n2; o2++)
    t10[e10] = arguments[o2], e10++;
  return t$(t10, e10), e10;
} });
var tq = Function.prototype, tK = tq.apply, tJ = tq.call, tQ = "object" == typeof Reflect && Reflect.apply || (s ? tJ.bind(tK) : function() {
  return tJ.apply(tK, arguments);
}), tX = String, tZ = TypeError, t0 = function(r10, t10, e10) {
  try {
    return v(rv(Object.getOwnPropertyDescriptor(r10, t10)[e10]));
  } catch (r11) {
  }
}, t1 = function(r10) {
  if ("object" == typeof r10 || A(r10))
    return r10;
  throw tZ("Can't set " + tX(r10) + " as a prototype");
}, t2 = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var r10, t10 = false, e10 = {};
  try {
    (r10 = t0(Object.prototype, "__proto__", "set"))(e10, []), t10 = e10 instanceof Array;
  } catch (r11) {
  }
  return function(e11, n2) {
    return Q(e11), t1(n2), t10 ? r10(e11, n2) : e11.__proto__ = n2, e11;
  };
}() : void 0), t4 = Y.f, t7 = rx("toStringTag"), t8 = {};
t8[t7] = "z";
var t9 = "[object z]" === String(t8), t3 = rx("toStringTag"), t6 = Object, t5 = "Arguments" == tc(function() {
  return arguments;
}()), er = function(r10, t10) {
  try {
    return r10[t10];
  } catch (r11) {
  }
}, et = t9 ? tc : function(r10) {
  var t10, e10, n2;
  return void 0 === r10 ? "Undefined" : null === r10 ? "Null" : "string" == typeof (e10 = er(t10 = t6(r10), t3)) ? e10 : t5 ? tc(t10) : "Object" == (n2 = tc(t10)) && A(t10.callee) ? "Arguments" : n2;
}, ee = String, en = function(r10) {
  if ("Symbol" === et(r10))
    throw TypeError("Cannot convert a Symbol value to a string");
  return ee(r10);
}, eo = Error, ei = v("".replace), eu = String(eo("zxcasd").stack), ea = /\n\s*at [^:]*:[^\n]*/, ec = ea.test(eu), ef = !p(function() {
  var r10 = Error("a");
  return !("stack" in r10) || (Object.defineProperty(r10, "stack", rB(1, 7)), 7 !== r10.stack);
}), ep = function(r10, t10) {
  if (ec && "string" == typeof r10 && !eo.prepareStackTrace)
    for (; t10--; )
      r10 = ei(r10, ea, "");
  return r10;
}, el = Error.captureStackTrace, es = function(r10, t10, e10) {
  e10 in r10 || t4(r10, e10, { configurable: true, get: function() {
    return t10[e10];
  }, set: function(r11) {
    t10[e10] = r11;
  } });
}, ey = function(r10, t10, e10) {
  var n2, o2;
  return t2 && A(n2 = t10.constructor) && n2 !== e10 && N(o2 = n2.prototype) && o2 !== e10.prototype && t2(r10, o2), r10;
}, eh = function(r10, t10) {
  N(t10) && "cause" in t10 && rV(r10, "cause", t10.cause);
}, eg = function(r10, t10, e10, n2) {
  ef && (el ? el(r10, t10) : rV(r10, "stack", ep(e10, n2)));
}, ev = function(r10, t10, e10, n2) {
  var o2 = "stackTraceLimit", i2 = n2 ? 2 : 1, u2 = r10.split("."), a2 = u2[u2.length - 1], c2 = rr.apply(null, u2);
  if (c2) {
    var f2 = c2.prototype;
    if (x(f2, "cause") && delete f2.cause, !e10)
      return c2;
    var p2 = rr("Error"), s2 = t10(function(r11, t11) {
      var e11 = function(r12, t12) {
        return void 0 === r12 ? arguments.length < 2 ? "" : t12 : en(r12);
      }(n2 ? t11 : r11, void 0), o3 = n2 ? new c2(r11) : new c2();
      return void 0 !== e11 && rV(o3, "message", e11), eg(o3, s2, o3.stack, 2), this && rt(f2, this) && ey(o3, this, s2), arguments.length > i2 && eh(o3, arguments[i2]), o3;
    });
    s2.prototype = f2, "Error" !== a2 ? t2 ? t2(s2, p2) : tC(s2, p2, { name: true }) : l && o2 in c2 && (es(s2, c2, o2), es(s2, c2, "prepareStackTrace")), tC(s2, c2);
    try {
      f2.name !== a2 && rV(f2, "name", a2), f2.constructor = s2;
    } catch (r11) {
    }
    return s2;
  }
}, ed = "WebAssembly", eb = C[ed], em = 7 !== Error("e", { cause: 7 }).cause, ew = function(r10, t10) {
  var e10 = {};
  e10[r10] = ev(r10, t10, em), tV({ global: true, constructor: true, arity: 1, forced: em }, e10);
}, eA = function(r10, t10) {
  if (eb && eb[r10]) {
    var e10 = {};
    e10[r10] = ev(ed + "." + r10, t10, em), tV({ target: ed, stat: true, constructor: true, arity: 1, forced: em }, e10);
  }
};
ew("Error", function(r10) {
  return function(t10) {
    return tQ(r10, this, arguments);
  };
}), ew("EvalError", function(r10) {
  return function(t10) {
    return tQ(r10, this, arguments);
  };
}), ew("RangeError", function(r10) {
  return function(t10) {
    return tQ(r10, this, arguments);
  };
}), ew("ReferenceError", function(r10) {
  return function(t10) {
    return tQ(r10, this, arguments);
  };
}), ew("SyntaxError", function(r10) {
  return function(t10) {
    return tQ(r10, this, arguments);
  };
}), ew("TypeError", function(r10) {
  return function(t10) {
    return tQ(r10, this, arguments);
  };
}), ew("URIError", function(r10) {
  return function(t10) {
    return tQ(r10, this, arguments);
  };
}), eA("CompileError", function(r10) {
  return function(t10) {
    return tQ(r10, this, arguments);
  };
}), eA("LinkError", function(r10) {
  return function(t10) {
    return tQ(r10, this, arguments);
  };
}), eA("RuntimeError", function(r10) {
  return function(t10) {
    return tQ(r10, this, arguments);
  };
});
var eT = Y.f, eO = rx("toStringTag");
tV({ global: true }, { Reflect: {} }), function(r10, t10, e10) {
  r10 && !e10 && (r10 = r10.prototype), r10 && !x(r10, eO) && eT(r10, eO, { configurable: true, value: t10 });
}(C.Reflect, "Reflect", true);
var eS = TypeError, eE = function(r10) {
  return function(t10, e10, n2, o2) {
    rv(e10);
    var i2 = j(t10), u2 = tl(i2), a2 = tO(i2), c2 = r10 ? a2 - 1 : 0, f2 = r10 ? -1 : 1;
    if (n2 < 2)
      for (; ; ) {
        if (c2 in u2) {
          o2 = u2[c2], c2 += f2;
          break;
        }
        if (c2 += f2, r10 ? c2 < 0 : a2 <= c2)
          throw eS("Reduce of empty array with no initial value");
      }
    for (; r10 ? c2 >= 0 : a2 > c2; c2 += f2)
      c2 in u2 && (o2 = e10(o2, u2[c2], c2, i2));
    return o2;
  };
}, ej = { left: eE(false), right: eE(true) }, eP = "undefined" != typeof process && "process" == tc(process), ex = ej.left;
tV({ target: "Array", proto: true, forced: !eP && ra > 79 && ra < 83 || !function(r10, t10) {
  var e10 = [][r10];
  return !!e10 && p(function() {
    e10.call(null, function() {
      return 1;
    }, 1);
  });
}("reduce") }, { reduce: function(r10) {
  var t10 = arguments.length;
  return ex(this, r10, t10, t10 > 1 ? arguments[1] : void 0);
} });
var e_ = TypeError, eI = Object.defineProperty, eR = C.self !== C;
try {
  if (l) {
    var eM = Object.getOwnPropertyDescriptor(C, "self");
    !eR && eM && eM.get && eM.enumerable || r6(C, "self", { get: function() {
      return C;
    }, set: function(r10) {
      if (this !== C)
        throw e_("Illegal invocation");
      eI(C, "self", { value: r10, writable: true, configurable: true, enumerable: true });
    }, configurable: true, enumerable: true });
  } else
    tV({ global: true, simple: true, forced: eR }, { self: C });
} catch (r10) {
}
var eC = rx("match"), ek = function() {
  var r10 = Q(this), t10 = "";
  return r10.hasIndices && (t10 += "d"), r10.global && (t10 += "g"), r10.ignoreCase && (t10 += "i"), r10.multiline && (t10 += "m"), r10.dotAll && (t10 += "s"), r10.unicode && (t10 += "u"), r10.unicodeSets && (t10 += "v"), r10.sticky && (t10 += "y"), t10;
}, eD = RegExp.prototype, eF = Math.floor, eL = v("".charAt), eU = v("".replace), ez = v("".slice), eB = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, eV = /\$([$&'`]|\d{1,2})/g, eW = function(r10) {
  var t10;
  return N(r10) && (void 0 !== (t10 = r10[eC]) ? !!t10 : "RegExp" == tc(r10));
}, eN = function(r10) {
  var t10 = r10.flags;
  return void 0 === t10 && !("flags" in eD) && !x(r10, "flags") && rt(eD, r10) ? Z(ek, r10) : t10;
}, eY = function(r10, t10, e10, n2, o2, i2) {
  var u2 = e10 + r10.length, a2 = n2.length, c2 = eV;
  return void 0 !== o2 && (o2 = j(o2), c2 = eB), eU(i2, c2, function(i3, c3) {
    var f2;
    switch (eL(c3, 0)) {
      case "$":
        return "$";
      case "&":
        return r10;
      case "`":
        return ez(t10, 0, e10);
      case "'":
        return ez(t10, u2);
      case "<":
        f2 = o2[ez(c3, 1, -1)];
        break;
      default:
        var p2 = +c3;
        if (0 === p2)
          return i3;
        if (p2 > a2) {
          var l2 = eF(p2 / 10);
          if (0 === l2)
            return i3;
          if (l2 <= a2)
            return void 0 === n2[l2 - 1] ? eL(c3, 1) : n2[l2 - 1] + eL(c3, 1);
          return i3;
        }
        f2 = n2[p2 - 1];
    }
    return void 0 === f2 ? "" : f2;
  });
}, e$ = rx("replace"), eG = TypeError, eH = v("".indexOf);
v("".replace);
var eq = v("".slice), eK = Math.max, eJ = function(r10, t10, e10) {
  return e10 > r10.length ? -1 : "" === t10 ? e10 : eH(r10, t10, e10);
};
tV({ target: "String", proto: true }, { replaceAll: function(r10, t10) {
  var e10, n2, o2, i2, u2, a2, c2, f2 = S(this), p2 = 0, l2 = 0, s2 = "";
  if (!T(r10)) {
    if (eW(r10) && !~eH(en(S(eN(r10))), "g"))
      throw eG("`.replaceAll` does not allow non-global regexes");
    if (e10 = rd(r10, e$))
      return Z(e10, r10, f2, t10);
  }
  for (n2 = en(f2), o2 = en(r10), (i2 = A(t10)) || (t10 = en(t10)), a2 = eK(1, u2 = o2.length), p2 = eJ(n2, o2, 0); -1 !== p2; )
    c2 = i2 ? en(t10(o2, p2, n2)) : eY(o2, n2, p2, [], void 0, t10), s2 += eq(n2, l2, p2) + c2, l2 = p2 + u2, p2 = eJ(n2, o2, p2 + a2);
  return l2 < n2.length && (s2 += eq(n2, l2)), s2;
} });
var eQ = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView, eX = !p(function() {
  function r10() {
  }
  return r10.prototype.constructor = null, Object.getPrototypeOf(new r10()) !== r10.prototype;
}), eZ = rN("IE_PROTO"), e0 = Object, e1 = e0.prototype, e2 = eX ? e0.getPrototypeOf : function(r10) {
  var t10 = j(r10);
  if (x(t10, eZ))
    return t10[eZ];
  var e10 = t10.constructor;
  return A(e10) && t10 instanceof e10 ? e10.prototype : t10 instanceof e0 ? e1 : null;
}, e4 = rJ.enforce, e7 = rJ.get, e8 = C.Int8Array, e9 = e8 && e8.prototype, e3 = C.Uint8ClampedArray, e6 = e3 && e3.prototype, e5 = e8 && e2(e8), nr = e9 && e2(e9), nt = Object.prototype, ne = C.TypeError, nn = rx("toStringTag"), no = rS("TYPED_ARRAY_TAG"), ni = "TypedArrayConstructor", nu = eQ && !!t2 && "Opera" !== et(C.opera), na = false, nc = { Int8Array: 1, Uint8Array: 1, Uint8ClampedArray: 1, Int16Array: 2, Uint16Array: 2, Int32Array: 4, Uint32Array: 4, Float32Array: 4, Float64Array: 8 }, nf = { BigInt64Array: 8, BigUint64Array: 8 }, np = function(r10) {
  var t10 = e2(r10);
  if (N(t10)) {
    var e10 = e7(t10);
    return e10 && x(e10, ni) ? e10[ni] : np(t10);
  }
}, nl = function(r10) {
  if (!N(r10))
    return false;
  var t10 = et(r10);
  return x(nc, t10) || x(nf, t10);
};
for (i in nc)
  (a = (u = C[i]) && u.prototype) ? e4(a)[ni] = u : nu = false;
for (i in nf)
  (a = (u = C[i]) && u.prototype) && (e4(a)[ni] = u);
if ((!nu || !A(e5) || e5 === Function.prototype) && (e5 = function() {
  throw ne("Incorrect invocation");
}, nu))
  for (i in nc)
    C[i] && t2(C[i], e5);
if ((!nu || !nr || nr === nt) && (nr = e5.prototype, nu))
  for (i in nc)
    C[i] && t2(C[i].prototype, nr);
if (nu && e2(e6) !== nr && t2(e6, nr), l && !x(nr, nn))
  for (i in na = true, r6(nr, nn, { configurable: true, get: function() {
    return N(this) ? this[no] : void 0;
  } }), nc)
    C[i] && rV(C[i], no, i);
var ns = { NATIVE_ARRAY_BUFFER_VIEWS: nu, TYPED_ARRAY_TAG: na && no, aTypedArray: function(r10) {
  if (nl(r10))
    return r10;
  throw ne("Target is not a typed array");
}, aTypedArrayConstructor: function(r10) {
  if (A(r10) && (!t2 || rt(e5, r10)))
    return r10;
  throw ne(rh(r10) + " is not a typed array constructor");
}, exportTypedArrayMethod: function(r10, t10, e10, n2) {
  if (l) {
    if (e10)
      for (var o2 in nc) {
        var i2 = C[o2];
        if (i2 && x(i2.prototype, r10))
          try {
            delete i2.prototype[r10];
          } catch (e11) {
            try {
              i2.prototype[r10] = t10;
            } catch (r11) {
            }
          }
      }
    (!nr[r10] || e10) && th(nr, r10, e10 ? t10 : nu && e9[r10] || t10, n2);
  }
}, exportTypedArrayStaticMethod: function(r10, t10, e10) {
  var n2, o2;
  if (l) {
    if (t2) {
      if (e10) {
        for (n2 in nc)
          if ((o2 = C[n2]) && x(o2, r10))
            try {
              delete o2[r10];
            } catch (r11) {
            }
      }
      if (e5[r10] && !e10)
        return;
      try {
        return th(e5, r10, e10 ? t10 : nu && e5[r10] || t10);
      } catch (r11) {
      }
    }
    for (n2 in nc)
      (o2 = C[n2]) && (!o2[r10] || e10) && th(o2, r10, t10);
  }
}, getTypedArrayConstructor: np, isView: function(r10) {
  if (!N(r10))
    return false;
  var t10 = et(r10);
  return "DataView" === t10 || x(nc, t10) || x(nf, t10);
}, isTypedArray: nl, TypedArray: e5, TypedArrayPrototype: nr }, ny = ns.aTypedArray;
(0, ns.exportTypedArrayMethod)("at", function(r10) {
  var t10 = ny(this), e10 = tO(t10), n2 = tm(r10), o2 = n2 >= 0 ? n2 : e10 + n2;
  return o2 < 0 || o2 >= e10 ? void 0 : t10[o2];
});
var nh = function(r10) {
  if ("Function" === tc(r10))
    return v(r10);
}, ng = nh(nh.bind), nv = function(r10) {
  var t10 = 1 == r10;
  return function(e10, n2, o2) {
    for (var i2, u2 = j(e10), a2 = tl(u2), c2 = (rv(n2), void 0 === o2 ? n2 : s ? ng(n2, o2) : function() {
      return n2.apply(o2, arguments);
    }), f2 = tO(a2); f2-- > 0; )
      if (c2(i2 = a2[f2], f2, u2))
        switch (r10) {
          case 0:
            return i2;
          case 1:
            return f2;
        }
    return t10 ? -1 : void 0;
  };
}, nd = { findLast: nv(0), findLastIndex: nv(1) }, nb = nd.findLast, nm = ns.aTypedArray;
(0, ns.exportTypedArrayMethod)("findLast", function(r10) {
  return nb(nm(this), r10, arguments.length > 1 ? arguments[1] : void 0);
});
var nw = nd.findLastIndex, nA = ns.aTypedArray;
(0, ns.exportTypedArrayMethod)("findLastIndex", function(r10) {
  return nw(nA(this), r10, arguments.length > 1 ? arguments[1] : void 0);
});
var nT = RangeError, nO = function(r10) {
  var t10 = tm(r10);
  if (t10 < 0)
    throw nT("The argument can't be less than 0");
  return t10;
}, nS = RangeError, nE = function(r10, t10) {
  var e10 = nO(r10);
  if (e10 % t10)
    throw nS("Wrong offset");
  return e10;
}, nj = C.RangeError, nP = C.Int8Array, nx = nP && nP.prototype, n_ = nx && nx.set, nI = ns.aTypedArray, nR = ns.exportTypedArrayMethod, nM = !p(function() {
  var r10 = new Uint8ClampedArray(2);
  return Z(n_, r10, { length: 1, 0: 3 }, 1), 3 !== r10[1];
}), nC = nM && ns.NATIVE_ARRAY_BUFFER_VIEWS && p(function() {
  var r10 = new nP(2);
  return r10.set(1), r10.set("2", 1), 0 !== r10[0] || 2 !== r10[1];
});
nR("set", function(r10) {
  nI(this);
  var t10 = nE(arguments.length > 1 ? arguments[1] : void 0, 1), e10 = j(r10);
  if (nM)
    return Z(n_, this, e10, t10);
  var n2 = this.length, o2 = tO(e10), i2 = 0;
  if (o2 + t10 > n2)
    throw nj("Wrong length");
  for (; i2 < o2; )
    this[t10 + i2] = e10[i2++];
}, !nM || nC);
var nk = function(r10, t10) {
  for (var e10 = tO(r10), n2 = new t10(e10), o2 = 0; o2 < e10; o2++)
    n2[o2] = r10[e10 - o2 - 1];
  return n2;
}, nD = ns.aTypedArray, nF = ns.exportTypedArrayMethod, nL = ns.getTypedArrayConstructor;
nF("toReversed", function() {
  return nk(nD(this), nL(this));
});
var nU = function(r10, t10) {
  for (var e10 = 0, n2 = tO(t10), o2 = new r10(n2); n2 > e10; )
    o2[e10] = t10[e10++];
  return o2;
}, nz = ns.aTypedArray, nB = ns.getTypedArrayConstructor, nV = ns.exportTypedArrayMethod, nW = v(ns.TypedArrayPrototype.sort);
nV("toSorted", function(r10) {
  void 0 !== r10 && rv(r10);
  var t10 = nz(this);
  return nW(nU(nB(t10), t10), r10);
});
var nN = RangeError, nY = TypeError, n$ = function(r10, t10, e10, n2) {
  var o2 = tO(r10), i2 = tm(e10), u2 = i2 < 0 ? o2 + i2 : i2;
  if (u2 >= o2 || u2 < 0)
    throw nN("Incorrect index");
  for (var a2 = new t10(o2), c2 = 0; c2 < o2; c2++)
    a2[c2] = c2 === u2 ? n2 : r10[c2];
  return a2;
}, nG = function(r10) {
  var t10 = et(r10);
  return "BigInt64Array" == t10 || "BigUint64Array" == t10;
}, nH = function(r10) {
  var t10 = rM(r10, "number");
  if ("number" == typeof t10)
    throw nY("Can't convert number to bigint");
  return BigInt(t10);
}, nq = ns.aTypedArray, nK = ns.getTypedArrayConstructor;
(0, ns.exportTypedArrayMethod)("with", { with: function(r10, t10) {
  var e10 = nq(this), n2 = tm(r10), o2 = nG(e10) ? nH(t10) : +t10;
  return n$(e10, nK(e10), n2, o2);
} }.with, !function() {
  try {
    new Int8Array(1).with(2, { valueOf: function() {
      throw 8;
    } });
  } catch (r10) {
    return 8 === r10;
  }
}());
export {
  f as g
};
