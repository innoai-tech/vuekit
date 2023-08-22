var t, r, e, n, o, i, u, a, c, f, l, s, p, y, h, d, g = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function v(t4) {
  return t4 && t4.__esModule && Object.prototype.hasOwnProperty.call(t4, "default") ? t4.default : t4;
}
var b = "object" == typeof document && document.all, m = { all: b, IS_HTMLDDA: void 0 === b && void 0 !== b }, w = m.all, A = m.IS_HTMLDDA ? function(t4) {
  return "function" == typeof t4 || t4 === w;
} : function(t4) {
  return "function" == typeof t4;
}, x = {}, E = function(t4) {
  try {
    return !!t4();
  } catch (t9) {
    return true;
  }
}, O = !E(function() {
  return 7 !== Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1];
}), T = function(t4) {
  return t4 && t4.Math === Math && t4;
}, S = T("object" == typeof globalThis && globalThis) || T("object" == typeof window && window) || T("object" == typeof self && self) || T("object" == typeof g && g) || function() {
  return this;
}() || g || Function("return this")(), j = m.all, I = m.IS_HTMLDDA ? function(t4) {
  return "object" == typeof t4 ? null !== t4 : A(t4) || t4 === j;
} : function(t4) {
  return "object" == typeof t4 ? null !== t4 : A(t4);
}, R = S.document, P = I(R) && I(R.createElement), _ = function(t4) {
  return P ? R.createElement(t4) : {};
}, k = !O && !E(function() {
  return 7 !== Object.defineProperty(_("div"), "a", { get: function() {
    return 7;
  } }).a;
}), M = O && E(function() {
  return 42 !== Object.defineProperty(function() {
  }, "prototype", { value: 42, writable: false }).prototype;
}), C = String, F = TypeError, D = function(t4) {
  if (I(t4))
    return t4;
  throw F(C(t4) + " is not an object");
}, L = !E(function() {
  var t4 = (function() {
  }).bind();
  return "function" != typeof t4 || t4.hasOwnProperty("prototype");
}), U = Function.prototype.call, z = L ? U.bind(U) : function() {
  return U.apply(U, arguments);
}, W = function(t4, r10) {
  var e9;
  return arguments.length < 2 ? A(e9 = S[t4]) ? e9 : void 0 : S[t4] && S[t4][r10];
}, $ = Function.prototype, B = $.call, N = L && $.bind.bind(B, B), V = L ? N : function(t4) {
  return function() {
    return B.apply(t4, arguments);
  };
}, Y = V({}.isPrototypeOf), G = "undefined" != typeof navigator && String(navigator.userAgent) || "", H = S.process, q = S.Deno, K = H && H.versions || q && q.version, X = K && K.v8;
X && (i = (o = X.split("."))[0] > 0 && o[0] < 4 ? 1 : +(o[0] + o[1])), !i && G && (!(o = G.match(/Edge\/(\d+)/)) || o[1] >= 74) && (o = G.match(/Chrome\/(\d+)/)) && (i = +o[1]);
var J = i, Q = S.String, Z = !!Object.getOwnPropertySymbols && !E(function() {
  var t4 = Symbol("symbol detection");
  return !Q(t4) || !(Object(t4) instanceof Symbol) || !Symbol.sham && J && J < 41;
}), tt = Z && !Symbol.sham && "symbol" == typeof Symbol.iterator, tr = Object, te = tt ? function(t4) {
  return "symbol" == typeof t4;
} : function(t4) {
  var r10 = W("Symbol");
  return A(r10) && Y(r10.prototype, tr(t4));
}, tn = String, to = function(t4) {
  try {
    return tn(t4);
  } catch (t9) {
    return "Object";
  }
}, ti = TypeError, tu = function(t4) {
  if (A(t4))
    return t4;
  throw ti(to(t4) + " is not a function");
}, ta = function(t4) {
  return null == t4;
}, tc = function(t4, r10) {
  var e9 = t4[r10];
  return ta(e9) ? void 0 : tu(e9);
}, tf = TypeError, tl = { exports: {} }, ts = Object.defineProperty, tp = function(t4, r10) {
  try {
    ts(S, t4, { value: r10, configurable: true, writable: true });
  } catch (e9) {
    S[t4] = r10;
  }
  return r10;
}, ty = "__core-js_shared__", th = S[ty] || tp(ty, {});
(tl.exports = function(t4, r10) {
  return th[t4] || (th[t4] = void 0 !== r10 ? r10 : {});
})("versions", []).push({ version: "3.32.1", mode: "global", copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.32.1/LICENSE", source: "https://github.com/zloirock/core-js" });
var td = tl.exports, tg = TypeError, tv = function(t4) {
  if (ta(t4))
    throw tg("Can't call method on " + t4);
  return t4;
}, tb = Object, tm = function(t4) {
  return tb(tv(t4));
}, tw = V({}.hasOwnProperty), tA = Object.hasOwn || function(t4, r10) {
  return tw(tm(t4), r10);
}, tx = 0, tE = Math.random(), tO = V(1 .toString), tT = function(t4) {
  return "Symbol(" + (void 0 === t4 ? "" : t4) + ")_" + tO(++tx + tE, 36);
}, tS = S.Symbol, tj = td("wks"), tI = tt ? tS.for || tS : tS && tS.withoutSetter || tT, tR = function(t4) {
  return tA(tj, t4) || (tj[t4] = Z && tA(tS, t4) ? tS[t4] : tI("Symbol." + t4)), tj[t4];
}, tP = function(t4, r10) {
  var e9, n10;
  if ("string" === r10 && A(e9 = t4.toString) && !I(n10 = z(e9, t4)) || A(e9 = t4.valueOf) && !I(n10 = z(e9, t4)) || "string" !== r10 && A(e9 = t4.toString) && !I(n10 = z(e9, t4)))
    return n10;
  throw tf("Can't convert object to primitive value");
}, t_ = TypeError, tk = tR("toPrimitive"), tM = function(t4, r10) {
  if (!I(t4) || te(t4))
    return t4;
  var e9, n10 = tc(t4, tk);
  if (n10) {
    if (void 0 === r10 && (r10 = "default"), !I(e9 = z(n10, t4, r10)) || te(e9))
      return e9;
    throw t_("Can't convert object to primitive value");
  }
  return void 0 === r10 && (r10 = "number"), tP(t4, r10);
}, tC = function(t4) {
  var r10 = tM(t4, "string");
  return te(r10) ? r10 : r10 + "";
}, tF = TypeError, tD = Object.defineProperty, tL = Object.getOwnPropertyDescriptor, tU = "enumerable", tz = "configurable", tW = "writable";
x.f = O ? M ? function(t4, r10, e9) {
  if (D(t4), r10 = tC(r10), D(e9), "function" == typeof t4 && "prototype" === r10 && "value" in e9 && tW in e9 && !e9[tW]) {
    var n10 = tL(t4, r10);
    n10 && n10[tW] && (t4[r10] = e9.value, e9 = { configurable: tz in e9 ? e9[tz] : n10[tz], enumerable: tU in e9 ? e9[tU] : n10[tU], writable: false });
  }
  return tD(t4, r10, e9);
} : tD : function(t4, r10, e9) {
  if (D(t4), r10 = tC(r10), D(e9), k)
    try {
      return tD(t4, r10, e9);
    } catch (t9) {
    }
  if ("get" in e9 || "set" in e9)
    throw tF("Accessors not supported");
  return "value" in e9 && (t4[r10] = e9.value), t4;
};
var t$ = { exports: {} }, tB = Function.prototype, tN = O && Object.getOwnPropertyDescriptor, tV = tA(tB, "name") && (!O || O && tN(tB, "name").configurable), tY = V(Function.toString);
A(th.inspectSource) || (th.inspectSource = function(t4) {
  return tY(t4);
});
var tG = th.inspectSource, tH = S.WeakMap, tq = A(tH) && /native code/.test(String(tH)), tK = function(t4, r10) {
  return { enumerable: !(1 & t4), configurable: !(2 & t4), writable: !(4 & t4), value: r10 };
}, tX = O ? function(t4, r10, e9) {
  return x.f(t4, r10, tK(1, e9));
} : function(t4, r10, e9) {
  return t4[r10] = e9, t4;
}, tJ = td("keys"), tQ = function(t4) {
  return tJ[t4] || (tJ[t4] = tT(t4));
}, tZ = {}, t0 = "Object already initialized", t1 = S.TypeError, t2 = S.WeakMap;
if (tq || th.state) {
  var t4 = th.state || (th.state = new t2());
  t4.get = t4.get, t4.has = t4.has, t4.set = t4.set, u = function(t9, r10) {
    if (t4.has(t9))
      throw t1(t0);
    return r10.facade = t9, t4.set(t9, r10), r10;
  }, a = function(t9) {
    return t4.get(t9) || {};
  }, c = function(t9) {
    return t4.has(t9);
  };
} else {
  var t9 = tQ("state");
  tZ[t9] = true, u = function(t4, r10) {
    if (tA(t4, t9))
      throw t1(t0);
    return r10.facade = t4, tX(t4, t9, r10), r10;
  }, a = function(t4) {
    return tA(t4, t9) ? t4[t9] : {};
  }, c = function(t4) {
    return tA(t4, t9);
  };
}
var t3 = { set: u, get: a, has: c, enforce: function(t4) {
  return c(t4) ? a(t4) : u(t4, {});
}, getterFor: function(t4) {
  return function(r10) {
    var e9;
    if (!I(r10) || (e9 = a(r10)).type !== t4)
      throw t1("Incompatible receiver, " + t4 + " required");
    return e9;
  };
} }, t7 = t3.enforce, t6 = t3.get, t8 = String, t5 = Object.defineProperty, rt = V("".slice), rr = V("".replace), re = V([].join), rn = O && !E(function() {
  return 8 !== t5(function() {
  }, "length", { value: 8 }).length;
}), ro = String(String).split("String"), ri = t$.exports = function(t4, r10, e9) {
  "Symbol(" === rt(t8(r10), 0, 7) && (r10 = "[" + rr(t8(r10), /^Symbol\(([^)]*)\)/, "$1") + "]"), e9 && e9.getter && (r10 = "get " + r10), e9 && e9.setter && (r10 = "set " + r10), (!tA(t4, "name") || tV && t4.name !== r10) && (O ? t5(t4, "name", { value: r10, configurable: true }) : t4.name = r10), rn && e9 && tA(e9, "arity") && t4.length !== e9.arity && t5(t4, "length", { value: e9.arity });
  try {
    e9 && tA(e9, "constructor") && e9.constructor ? O && t5(t4, "prototype", { writable: false }) : t4.prototype && (t4.prototype = void 0);
  } catch (t9) {
  }
  var n10 = t7(t4);
  return tA(n10, "source") || (n10.source = re(ro, "string" == typeof r10 ? r10 : "")), t4;
};
Function.prototype.toString = ri(function() {
  return A(this) && t6(this).source || tG(this);
}, "toString");
var ru = t$.exports, ra = function(t4, r10, e9, n10) {
  n10 || (n10 = {});
  var o10 = n10.enumerable, i2 = void 0 !== n10.name ? n10.name : r10;
  if (A(e9) && ru(e9, i2, n10), n10.global)
    o10 ? t4[r10] = e9 : tp(r10, e9);
  else {
    try {
      n10.unsafe ? t4[r10] && (o10 = true) : delete t4[r10];
    } catch (t9) {
    }
    o10 ? t4[r10] = e9 : x.f(t4, r10, { value: e9, enumerable: false, configurable: !n10.nonConfigurable, writable: !n10.nonWritable });
  }
  return t4;
}, rc = tR("toStringTag"), rf = {};
rf[rc] = "z";
var rl = "[object z]" === String(rf), rs = V({}.toString), rp = V("".slice), ry = function(t4) {
  return rp(rs(t4), 8, -1);
}, rh = tR("toStringTag"), rd = Object, rg = "Arguments" === ry(function() {
  return arguments;
}()), rv = function(t4, r10) {
  try {
    return t4[r10];
  } catch (t9) {
  }
}, rb = rl ? ry : function(t4) {
  var r10, e9, n10;
  return void 0 === t4 ? "Undefined" : null === t4 ? "Null" : "string" == typeof (e9 = rv(r10 = rd(t4), rh)) ? e9 : rg ? ry(r10) : "Object" === (n10 = ry(r10)) && A(r10.callee) ? "Arguments" : n10;
}, rm = String, rw = function(t4) {
  if ("Symbol" === rb(t4))
    throw TypeError("Cannot convert a Symbol value to a string");
  return rm(t4);
}, rA = TypeError, rx = function(t4, r10) {
  if (t4 < r10)
    throw rA("Not enough arguments");
  return t4;
}, rE = URLSearchParams, rO = rE.prototype, rT = V(rO.append), rS = V(rO.delete), rj = V(rO.forEach), rI = V([].push), rR = new rE("a=1&a=2&b=3");
rR.delete("a", 1), rR.delete("b", void 0), rR + "" != "a=2" && ra(rO, "delete", function(t4) {
  var r10, e9 = arguments.length, n10 = e9 < 2 ? void 0 : arguments[1];
  if (e9 && void 0 === n10)
    return rS(this, t4);
  var o10 = [];
  rj(this, function(t9, r11) {
    rI(o10, { key: r11, value: t9 });
  }), rx(e9, 1);
  for (var i2 = rw(t4), u2 = rw(n10), a2 = 0, c2 = 0, f2 = false, l2 = o10.length; a2 < l2; )
    r10 = o10[a2++], f2 || r10.key === i2 ? (f2 = true, rS(this, r10.key)) : c2++;
  for (; c2 < l2; )
    (r10 = o10[c2++]).key === i2 && r10.value === u2 || rT(this, r10.key, r10.value);
}, { enumerable: true, unsafe: true });
var rP = URLSearchParams, r_ = rP.prototype, rk = V(r_.getAll), rM = V(r_.has), rC = new rP("a=1");
(rC.has("a", 2) || !rC.has("a", void 0)) && ra(r_, "has", function(t4) {
  var r10 = arguments.length, e9 = r10 < 2 ? void 0 : arguments[1];
  if (r10 && void 0 === e9)
    return rM(this, t4);
  var n10 = rk(this, t4);
  rx(r10, 1);
  for (var o10 = rw(e9), i2 = 0; i2 < n10.length; )
    if (n10[i2++] === o10)
      return true;
  return false;
}, { enumerable: true, unsafe: true });
var rF = function(t4, r10, e9) {
  return e9.get && ru(e9.get, r10, { getter: true }), e9.set && ru(e9.set, r10, { setter: true }), x.f(t4, r10, e9);
}, rD = URLSearchParams.prototype, rL = V(rD.forEach);
!O || "size" in rD || rF(rD, "size", { get: function() {
  var t4 = 0;
  return rL(this, function() {
    t4++;
  }), t4;
}, configurable: true, enumerable: true });
var rU = {}, rz = {}, rW = {}.propertyIsEnumerable, r$ = Object.getOwnPropertyDescriptor, rB = r$ && !rW.call({ 1: 2 }, 1);
rz.f = rB ? function(t4) {
  var r10 = r$(this, t4);
  return !!r10 && r10.enumerable;
} : rW;
var rN = Object, rV = V("".split), rY = E(function() {
  return !rN("z").propertyIsEnumerable(0);
}) ? function(t4) {
  return "String" === ry(t4) ? rV(t4, "") : rN(t4);
} : rN, rG = function(t4) {
  return rY(tv(t4));
}, rH = Object.getOwnPropertyDescriptor;
rU.f = O ? rH : function(t4, r10) {
  if (t4 = rG(t4), r10 = tC(r10), k)
    try {
      return rH(t4, r10);
    } catch (t9) {
    }
  if (tA(t4, r10))
    return tK(!z(rz.f, t4, r10), t4[r10]);
};
var rq = {}, rK = Math.ceil, rX = Math.floor, rJ = Math.trunc || function(t4) {
  var r10 = +t4;
  return (r10 > 0 ? rX : rK)(r10);
}, rQ = function(t4) {
  var r10 = +t4;
  return r10 != r10 || 0 === r10 ? 0 : rJ(r10);
}, rZ = Math.max, r0 = Math.min, r1 = Math.min, r2 = function(t4) {
  return t4 > 0 ? r1(rQ(t4), 9007199254740991) : 0;
}, r4 = function(t4) {
  return r2(t4.length);
}, r9 = function(t4, r10) {
  var e9 = rQ(t4);
  return e9 < 0 ? rZ(e9 + r10, 0) : r0(e9, r10);
}, r3 = function(t4) {
  return function(r10, e9, n10) {
    var o10, i2 = rG(r10), u2 = r4(i2), a2 = r9(n10, u2);
    if (t4 && e9 != e9) {
      for (; u2 > a2; )
        if ((o10 = i2[a2++]) != o10)
          return true;
    } else
      for (; u2 > a2; a2++)
        if ((t4 || a2 in i2) && i2[a2] === e9)
          return t4 || a2 || 0;
    return !t4 && -1;
  };
}, r7 = { includes: r3(true), indexOf: r3(false) }.indexOf, r6 = V([].push), r8 = function(t4, r10) {
  var e9, n10 = rG(t4), o10 = 0, i2 = [];
  for (e9 in n10)
    !tA(tZ, e9) && tA(n10, e9) && r6(i2, e9);
  for (; r10.length > o10; )
    tA(n10, e9 = r10[o10++]) && (~r7(i2, e9) || r6(i2, e9));
  return i2;
}, r5 = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], et = r5.concat("length", "prototype");
rq.f = Object.getOwnPropertyNames || function(t4) {
  return r8(t4, et);
};
var er = {};
er.f = Object.getOwnPropertySymbols;
var ee = V([].concat), en = W("Reflect", "ownKeys") || function(t4) {
  var r10 = rq.f(D(t4)), e9 = er.f;
  return e9 ? ee(r10, e9(t4)) : r10;
}, eo = function(t4, r10, e9) {
  for (var n10 = en(r10), o10 = x.f, i2 = rU.f, u2 = 0; u2 < n10.length; u2++) {
    var a2 = n10[u2];
    tA(t4, a2) || e9 && tA(e9, a2) || o10(t4, a2, i2(r10, a2));
  }
}, ei = /#|\.prototype\./, eu = function(t4, r10) {
  var e9 = ec[ea(t4)];
  return e9 === el || e9 !== ef && (A(r10) ? E(r10) : !!r10);
}, ea = eu.normalize = function(t4) {
  return String(t4).replace(ei, ".").toLowerCase();
}, ec = eu.data = {}, ef = eu.NATIVE = "N", el = eu.POLYFILL = "P", es = rU.f, ep = function(t4, r10) {
  var e9, n10, o10, i2, u2, a2 = t4.target, c2 = t4.global, f2 = t4.stat;
  if (e9 = c2 ? S : f2 ? S[a2] || tp(a2, {}) : (S[a2] || {}).prototype)
    for (n10 in r10) {
      if (i2 = r10[n10], o10 = t4.dontCallGetSet ? (u2 = es(e9, n10)) && u2.value : e9[n10], !eu(c2 ? n10 : a2 + (f2 ? "." : "#") + n10, t4.forced) && void 0 !== o10) {
        if (typeof i2 == typeof o10)
          continue;
        eo(i2, o10);
      }
      (t4.sham || o10 && o10.sham) && tX(i2, "sham", true), ra(e9, n10, i2, t4);
    }
}, ey = Array.isArray || function(t4) {
  return "Array" === ry(t4);
}, eh = TypeError, ed = Object.getOwnPropertyDescriptor, eg = O && !function() {
  if (void 0 !== this)
    return true;
  try {
    Object.defineProperty([], "length", { writable: false }).length = 1;
  } catch (t4) {
    return t4 instanceof TypeError;
  }
}() ? function(t4, r10) {
  if (ey(t4) && !ed(t4, "length").writable)
    throw eh("Cannot set read only .length");
  return t4.length = r10;
} : function(t4, r10) {
  return t4.length = r10;
}, ev = TypeError, eb = function(t4) {
  if (t4 > 9007199254740991)
    throw ev("Maximum allowed index exceeded");
  return t4;
};
ep({ target: "Array", proto: true, arity: 1, forced: E(function() {
  return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
}) || !function() {
  try {
    Object.defineProperty([], "length", { writable: false }).push();
  } catch (t4) {
    return t4 instanceof TypeError;
  }
}() }, { push: function(t4) {
  var r10 = tm(this), e9 = r4(r10), n10 = arguments.length;
  eb(e9 + n10);
  for (var o10 = 0; o10 < n10; o10++)
    r10[e9] = arguments[o10], e9++;
  return eg(r10, e9), e9;
} });
var em = Function.prototype, ew = em.apply, eA = em.call, ex = "object" == typeof Reflect && Reflect.apply || (L ? eA.bind(ew) : function() {
  return eA.apply(ew, arguments);
}), eE = String, eO = TypeError, eT = function(t4, r10, e9) {
  try {
    return V(tu(Object.getOwnPropertyDescriptor(t4, r10)[e9]));
  } catch (t9) {
  }
}, eS = function(t4) {
  if ("object" == typeof t4 || A(t4))
    return t4;
  throw eO("Can't set " + eE(t4) + " as a prototype");
}, ej = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var t4, r10 = false, e9 = {};
  try {
    (t4 = eT(Object.prototype, "__proto__", "set"))(e9, []), r10 = e9 instanceof Array;
  } catch (t9) {
  }
  return function(e10, n10) {
    return D(e10), eS(n10), r10 ? t4(e10, n10) : e10.__proto__ = n10, e10;
  };
}() : void 0), eI = x.f, eR = Error, eP = V("".replace), e_ = String(eR("zxcasd").stack), ek = /\n\s*at [^:]*:[^\n]*/, eM = ek.test(e_), eC = !E(function() {
  var t4 = Error("a");
  return !("stack" in t4) || (Object.defineProperty(t4, "stack", tK(1, 7)), 7 !== t4.stack);
}), eF = function(t4, r10) {
  if (eM && "string" == typeof t4 && !eR.prepareStackTrace)
    for (; r10--; )
      t4 = eP(t4, ek, "");
  return t4;
}, eD = Error.captureStackTrace, eL = function(t4, r10, e9) {
  e9 in t4 || eI(t4, e9, { configurable: true, get: function() {
    return r10[e9];
  }, set: function(t9) {
    r10[e9] = t9;
  } });
}, eU = function(t4, r10, e9) {
  var n10, o10;
  return ej && A(n10 = r10.constructor) && n10 !== e9 && I(o10 = n10.prototype) && o10 !== e9.prototype && ej(t4, o10), t4;
}, ez = function(t4, r10) {
  I(r10) && "cause" in r10 && tX(t4, "cause", r10.cause);
}, eW = function(t4, r10, e9, n10) {
  eC && (eD ? eD(t4, r10) : tX(t4, "stack", eF(e9, n10)));
}, e$ = function(t4, r10, e9, n10) {
  var o10 = "stackTraceLimit", i2 = n10 ? 2 : 1, u2 = t4.split("."), a2 = u2[u2.length - 1], c2 = W.apply(null, u2);
  if (c2) {
    var f2 = c2.prototype;
    if (tA(f2, "cause") && delete f2.cause, !e9)
      return c2;
    var l2 = W("Error"), s2 = r10(function(t9, r11) {
      var e10 = function(t10, r12) {
        return void 0 === t10 ? arguments.length < 2 ? "" : r12 : rw(t10);
      }(n10 ? r11 : t9, void 0), o11 = n10 ? new c2(t9) : new c2();
      return void 0 !== e10 && tX(o11, "message", e10), eW(o11, s2, o11.stack, 2), this && Y(f2, this) && eU(o11, this, s2), arguments.length > i2 && ez(o11, arguments[i2]), o11;
    });
    s2.prototype = f2, "Error" !== a2 ? ej ? ej(s2, l2) : eo(s2, l2, { name: true }) : O && o10 in c2 && (eL(s2, c2, o10), eL(s2, c2, "prepareStackTrace")), eo(s2, c2);
    try {
      f2.name !== a2 && tX(f2, "name", a2), f2.constructor = s2;
    } catch (t9) {
    }
    return s2;
  }
}, eB = "WebAssembly", eN = S[eB], eV = 7 !== Error("e", { cause: 7 }).cause, eY = function(t4, r10) {
  var e9 = {};
  e9[t4] = e$(t4, r10, eV), ep({ global: true, constructor: true, arity: 1, forced: eV }, e9);
}, eG = function(t4, r10) {
  if (eN && eN[t4]) {
    var e9 = {};
    e9[t4] = e$(eB + "." + t4, r10, eV), ep({ target: eB, stat: true, constructor: true, arity: 1, forced: eV }, e9);
  }
};
eY("Error", function(t4) {
  return function(r10) {
    return ex(t4, this, arguments);
  };
}), eY("EvalError", function(t4) {
  return function(r10) {
    return ex(t4, this, arguments);
  };
}), eY("RangeError", function(t4) {
  return function(r10) {
    return ex(t4, this, arguments);
  };
}), eY("ReferenceError", function(t4) {
  return function(r10) {
    return ex(t4, this, arguments);
  };
}), eY("SyntaxError", function(t4) {
  return function(r10) {
    return ex(t4, this, arguments);
  };
}), eY("TypeError", function(t4) {
  return function(r10) {
    return ex(t4, this, arguments);
  };
}), eY("URIError", function(t4) {
  return function(r10) {
    return ex(t4, this, arguments);
  };
}), eG("CompileError", function(t4) {
  return function(r10) {
    return ex(t4, this, arguments);
  };
}), eG("LinkError", function(t4) {
  return function(r10) {
    return ex(t4, this, arguments);
  };
}), eG("RuntimeError", function(t4) {
  return function(r10) {
    return ex(t4, this, arguments);
  };
});
var eH = x.f, eq = tR("toStringTag"), eK = function(t4, r10, e9) {
  t4 && !e9 && (t4 = t4.prototype), t4 && !tA(t4, eq) && eH(t4, eq, { configurable: true, value: r10 });
};
ep({ global: true }, { Reflect: {} }), eK(S.Reflect, "Reflect", true);
var eX = TypeError, eJ = function(t4) {
  return function(r10, e9, n10, o10) {
    tu(e9);
    var i2 = tm(r10), u2 = rY(i2), a2 = r4(i2), c2 = t4 ? a2 - 1 : 0, f2 = t4 ? -1 : 1;
    if (n10 < 2)
      for (; ; ) {
        if (c2 in u2) {
          o10 = u2[c2], c2 += f2;
          break;
        }
        if (c2 += f2, t4 ? c2 < 0 : a2 <= c2)
          throw eX("Reduce of empty array with no initial value");
      }
    for (; t4 ? c2 >= 0 : a2 > c2; c2 += f2)
      c2 in u2 && (o10 = e9(o10, u2[c2], c2, i2));
    return o10;
  };
}, eQ = { left: eJ(false), right: eJ(true) }, eZ = "process" === ry(S.process), e0 = eQ.left;
ep({ target: "Array", proto: true, forced: !eZ && J > 79 && J < 83 || !((t = [].reduce) && E(function() {
  t.call(null, function() {
    return 1;
  }, 1);
})) }, { reduce: function(t4) {
  var r10 = arguments.length;
  return e0(this, t4, r10, r10 > 1 ? arguments[1] : void 0);
} });
var e1 = TypeError, e2 = Object.defineProperty, e4 = S.self !== S;
try {
  if (O) {
    var e9 = Object.getOwnPropertyDescriptor(S, "self");
    !e4 && e9 && e9.get && e9.enumerable || rF(S, "self", { get: function() {
      return S;
    }, set: function(t4) {
      if (this !== S)
        throw e1("Illegal invocation");
      e2(S, "self", { value: t4, writable: true, configurable: true, enumerable: true });
    }, configurable: true, enumerable: true });
  } else
    ep({ global: true, simple: true, forced: e4 }, { self: S });
} catch (t4) {
}
var e3 = tR("match"), e7 = function(t4) {
  var r10;
  return I(t4) && (void 0 !== (r10 = t4[e3]) ? !!r10 : "RegExp" === ry(t4));
}, e6 = function() {
  var t4 = D(this), r10 = "";
  return t4.hasIndices && (r10 += "d"), t4.global && (r10 += "g"), t4.ignoreCase && (r10 += "i"), t4.multiline && (r10 += "m"), t4.dotAll && (r10 += "s"), t4.unicode && (r10 += "u"), t4.unicodeSets && (r10 += "v"), t4.sticky && (r10 += "y"), r10;
}, e8 = RegExp.prototype, e5 = function(t4) {
  var r10 = t4.flags;
  return void 0 === r10 && !("flags" in e8) && !tA(t4, "flags") && Y(e8, t4) ? z(e6, t4) : r10;
}, nt = Math.floor, nr = V("".charAt), ne = V("".replace), nn = V("".slice), no = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, ni = /\$([$&'`]|\d{1,2})/g, nu = function(t4, r10, e9, n10, o10, i2) {
  var u2 = e9 + t4.length, a2 = n10.length, c2 = ni;
  return void 0 !== o10 && (o10 = tm(o10), c2 = no), ne(i2, c2, function(i3, c3) {
    var f2;
    switch (nr(c3, 0)) {
      case "$":
        return "$";
      case "&":
        return t4;
      case "`":
        return nn(r10, 0, e9);
      case "'":
        return nn(r10, u2);
      case "<":
        f2 = o10[nn(c3, 1, -1)];
        break;
      default:
        var l2 = +c3;
        if (0 === l2)
          return i3;
        if (l2 > a2) {
          var s2 = nt(l2 / 10);
          if (0 === s2)
            return i3;
          if (s2 <= a2)
            return void 0 === n10[s2 - 1] ? nr(c3, 1) : n10[s2 - 1] + nr(c3, 1);
          return i3;
        }
        f2 = n10[l2 - 1];
    }
    return void 0 === f2 ? "" : f2;
  });
}, na = tR("replace"), nc = TypeError, nf = V("".indexOf);
V("".replace);
var nl = V("".slice), ns = Math.max, np = function(t4, r10, e9) {
  return e9 > t4.length ? -1 : "" === r10 ? e9 : nf(t4, r10, e9);
};
ep({ target: "String", proto: true }, { replaceAll: function(t4, r10) {
  var e9, n10, o10, i2, u2, a2, c2, f2 = tv(this), l2 = 0, s2 = 0, p2 = "";
  if (!ta(t4)) {
    if (e7(t4) && !~nf(rw(tv(e5(t4))), "g"))
      throw nc("`.replaceAll` does not allow non-global regexes");
    if (e9 = tc(t4, na))
      return z(e9, t4, f2, r10);
  }
  for (n10 = rw(f2), o10 = rw(t4), (i2 = A(r10)) || (r10 = rw(r10)), a2 = ns(1, u2 = o10.length), l2 = np(n10, o10, 0); -1 !== l2; )
    c2 = i2 ? rw(r10(o10, l2, n10)) : nu(o10, n10, l2, [], void 0, r10), p2 += nl(n10, s2, l2) + c2, s2 = l2 + u2, l2 = np(n10, o10, l2 + a2);
  return s2 < n10.length && (p2 += nl(n10, s2)), p2;
} });
var ny = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView, nh = !E(function() {
  function t4() {
  }
  return t4.prototype.constructor = null, Object.getPrototypeOf(new t4()) !== t4.prototype;
}), nd = tQ("IE_PROTO"), ng = Object, nv = ng.prototype, nb = nh ? ng.getPrototypeOf : function(t4) {
  var r10 = tm(t4);
  if (tA(r10, nd))
    return r10[nd];
  var e9 = r10.constructor;
  return A(e9) && r10 instanceof e9 ? e9.prototype : r10 instanceof ng ? nv : null;
}, nm = t3.enforce, nw = t3.get, nA = S.Int8Array, nx = nA && nA.prototype, nE = S.Uint8ClampedArray, nO = nE && nE.prototype, nT = nA && nb(nA), nS = nx && nb(nx), nj = Object.prototype, nI = S.TypeError, nR = tR("toStringTag"), nP = tT("TYPED_ARRAY_TAG"), n_ = "TypedArrayConstructor", nk = ny && !!ej && "Opera" !== rb(S.opera), nM = false, nC = { Int8Array: 1, Uint8Array: 1, Uint8ClampedArray: 1, Int16Array: 2, Uint16Array: 2, Int32Array: 4, Uint32Array: 4, Float32Array: 4, Float64Array: 8 }, nF = { BigInt64Array: 8, BigUint64Array: 8 }, nD = function(t4) {
  var r10 = nb(t4);
  if (I(r10)) {
    var e9 = nw(r10);
    return e9 && tA(e9, n_) ? e9[n_] : nD(r10);
  }
}, nL = function(t4) {
  if (!I(t4))
    return false;
  var r10 = rb(t4);
  return tA(nC, r10) || tA(nF, r10);
};
for (f in nC)
  (s = (l = S[f]) && l.prototype) ? nm(s)[n_] = l : nk = false;
for (f in nF)
  (s = (l = S[f]) && l.prototype) && (nm(s)[n_] = l);
if ((!nk || !A(nT) || nT === Function.prototype) && (nT = function() {
  throw nI("Incorrect invocation");
}, nk))
  for (f in nC)
    S[f] && ej(S[f], nT);
if ((!nk || !nS || nS === nj) && (nS = nT.prototype, nk))
  for (f in nC)
    S[f] && ej(S[f].prototype, nS);
if (nk && nb(nO) !== nS && ej(nO, nS), O && !tA(nS, nR))
  for (f in nM = true, rF(nS, nR, { configurable: true, get: function() {
    return I(this) ? this[nP] : void 0;
  } }), nC)
    S[f] && tX(S[f], nP, f);
var nU = { NATIVE_ARRAY_BUFFER_VIEWS: nk, TYPED_ARRAY_TAG: nM && nP, aTypedArray: function(t4) {
  if (nL(t4))
    return t4;
  throw nI("Target is not a typed array");
}, aTypedArrayConstructor: function(t4) {
  if (A(t4) && (!ej || Y(nT, t4)))
    return t4;
  throw nI(to(t4) + " is not a typed array constructor");
}, exportTypedArrayMethod: function(t4, r10, e9, n10) {
  if (O) {
    if (e9)
      for (var o10 in nC) {
        var i2 = S[o10];
        if (i2 && tA(i2.prototype, t4))
          try {
            delete i2.prototype[t4];
          } catch (e10) {
            try {
              i2.prototype[t4] = r10;
            } catch (t9) {
            }
          }
      }
    (!nS[t4] || e9) && ra(nS, t4, e9 ? r10 : nk && nx[t4] || r10, n10);
  }
}, exportTypedArrayStaticMethod: function(t4, r10, e9) {
  var n10, o10;
  if (O) {
    if (ej) {
      if (e9) {
        for (n10 in nC)
          if ((o10 = S[n10]) && tA(o10, t4))
            try {
              delete o10[t4];
            } catch (t9) {
            }
      }
      if (nT[t4] && !e9)
        return;
      try {
        return ra(nT, t4, e9 ? r10 : nk && nT[t4] || r10);
      } catch (t9) {
      }
    }
    for (n10 in nC)
      (o10 = S[n10]) && (!o10[t4] || e9) && ra(o10, t4, r10);
  }
}, getTypedArrayConstructor: nD, isView: function(t4) {
  if (!I(t4))
    return false;
  var r10 = rb(t4);
  return "DataView" === r10 || tA(nC, r10) || tA(nF, r10);
}, isTypedArray: nL, TypedArray: nT, TypedArrayPrototype: nS }, nz = nU.aTypedArray;
(0, nU.exportTypedArrayMethod)("at", function(t4) {
  var r10 = nz(this), e9 = r4(r10), n10 = rQ(t4), o10 = n10 >= 0 ? n10 : e9 + n10;
  return o10 < 0 || o10 >= e9 ? void 0 : r10[o10];
});
var nW = function(t4) {
  if ("Function" === ry(t4))
    return V(t4);
}, n$ = nW(nW.bind), nB = function(t4) {
  var r10 = 1 === t4;
  return function(e9, n10, o10) {
    for (var i2, u2 = tm(e9), a2 = rY(u2), c2 = (tu(n10), void 0 === o10 ? n10 : L ? n$(n10, o10) : function() {
      return n10.apply(o10, arguments);
    }), f2 = r4(a2); f2-- > 0; )
      if (c2(i2 = a2[f2], f2, u2))
        switch (t4) {
          case 0:
            return i2;
          case 1:
            return f2;
        }
    return r10 ? -1 : void 0;
  };
}, nN = { findLast: nB(0), findLastIndex: nB(1) }, nV = nN.findLast, nY = nU.aTypedArray;
(0, nU.exportTypedArrayMethod)("findLast", function(t4) {
  return nV(nY(this), t4, arguments.length > 1 ? arguments[1] : void 0);
});
var nG = nN.findLastIndex, nH = nU.aTypedArray;
(0, nU.exportTypedArrayMethod)("findLastIndex", function(t4) {
  return nG(nH(this), t4, arguments.length > 1 ? arguments[1] : void 0);
});
var nq = RangeError, nK = function(t4) {
  var r10 = rQ(t4);
  if (r10 < 0)
    throw nq("The argument can't be less than 0");
  return r10;
}, nX = RangeError, nJ = function(t4, r10) {
  var e9 = nK(t4);
  if (e9 % r10)
    throw nX("Wrong offset");
  return e9;
}, nQ = S.RangeError, nZ = S.Int8Array, n0 = nZ && nZ.prototype, n1 = n0 && n0.set, n2 = nU.aTypedArray, n4 = nU.exportTypedArrayMethod, n9 = !E(function() {
  var t4 = new Uint8ClampedArray(2);
  return z(n1, t4, { length: 1, 0: 3 }, 1), 3 !== t4[1];
}), n3 = n9 && nU.NATIVE_ARRAY_BUFFER_VIEWS && E(function() {
  var t4 = new nZ(2);
  return t4.set(1), t4.set("2", 1), 0 !== t4[0] || 2 !== t4[1];
});
n4("set", function(t4) {
  n2(this);
  var r10 = nJ(arguments.length > 1 ? arguments[1] : void 0, 1), e9 = tm(t4);
  if (n9)
    return z(n1, this, e9, r10);
  var n10 = this.length, o10 = r4(e9), i2 = 0;
  if (o10 + r10 > n10)
    throw nQ("Wrong length");
  for (; i2 < o10; )
    this[r10 + i2] = e9[i2++];
}, !n9 || n3);
var n7 = function(t4, r10) {
  for (var e9 = r4(t4), n10 = new r10(e9), o10 = 0; o10 < e9; o10++)
    n10[o10] = t4[e9 - o10 - 1];
  return n10;
}, n6 = nU.aTypedArray, n8 = nU.exportTypedArrayMethod, n5 = nU.getTypedArrayConstructor;
n8("toReversed", function() {
  return n7(n6(this), n5(this));
});
var ot = function(t4, r10) {
  for (var e9 = 0, n10 = r4(r10), o10 = new t4(n10); n10 > e9; )
    o10[e9] = r10[e9++];
  return o10;
}, or = nU.aTypedArray, oe = nU.getTypedArrayConstructor, on = nU.exportTypedArrayMethod, oo = V(nU.TypedArrayPrototype.sort);
on("toSorted", function(t4) {
  void 0 !== t4 && tu(t4);
  var r10 = or(this);
  return oo(ot(oe(r10), r10), t4);
});
var oi = RangeError, ou = TypeError, oa = function(t4, r10, e9, n10) {
  var o10 = r4(t4), i2 = rQ(e9), u2 = i2 < 0 ? o10 + i2 : i2;
  if (u2 >= o10 || u2 < 0)
    throw oi("Incorrect index");
  for (var a2 = new r10(o10), c2 = 0; c2 < o10; c2++)
    a2[c2] = c2 === u2 ? n10 : t4[c2];
  return a2;
}, oc = function(t4) {
  var r10 = rb(t4);
  return "BigInt64Array" === r10 || "BigUint64Array" === r10;
}, of = function(t4) {
  var r10 = tM(t4, "number");
  if ("number" == typeof r10)
    throw ou("Can't convert number to bigint");
  return BigInt(r10);
}, ol = nU.aTypedArray, os = nU.getTypedArrayConstructor;
(0, nU.exportTypedArrayMethod)("with", { with: function(t4, r10) {
  var e9 = ol(this), n10 = rQ(t4), o10 = oc(e9) ? of(r10) : +r10;
  return oa(e9, os(e9), n10, o10);
} }.with, !function() {
  try {
    new Int8Array(1).with(2, { valueOf: function() {
      throw 8;
    } });
  } catch (t4) {
    return 8 === t4;
  }
}());
var op = {}, oy = Object.keys || function(t4) {
  return r8(t4, r5);
};
op.f = O && !M ? Object.defineProperties : function(t4, r10) {
  D(t4);
  for (var e9, n10 = rG(r10), o10 = oy(r10), i2 = o10.length, u2 = 0; i2 > u2; )
    x.f(t4, e9 = o10[u2++], n10[e9]);
  return t4;
};
var oh = W("document", "documentElement"), od = "prototype", og = "script", ov = tQ("IE_PROTO"), ob = function() {
}, om = function(t4) {
  return "<" + og + ">" + t4 + "</" + og + ">";
}, ow = function(t4) {
  t4.write(om("")), t4.close();
  var r10 = t4.parentWindow.Object;
  return t4 = null, r10;
}, oA = function() {
  var t4, r10 = _("iframe");
  return r10.style.display = "none", oh.appendChild(r10), r10.src = String("java" + og + ":"), (t4 = r10.contentWindow.document).open(), t4.write(om("document.F=Object")), t4.close(), t4.F;
}, ox = function() {
  try {
    p = new ActiveXObject("htmlfile");
  } catch (t9) {
  }
  ox = "undefined" != typeof document ? document.domain && p ? ow(p) : oA() : ow(p);
  for (var t4 = r5.length; t4--; )
    delete ox[od][r5[t4]];
  return ox();
};
tZ[ov] = true;
var oE = Object.create || function(t4, r10) {
  var e9;
  return null !== t4 ? (ob[od] = D(t4), e9 = new ob(), ob[od] = null, e9[ov] = t4) : e9 = ox(), void 0 === r10 ? e9 : op.f(e9, r10);
}, oO = tR("iterator");
[].keys && "next" in (d = [].keys()) && (h = nb(nb(d))) !== Object.prototype && (y = h), (!I(y) || E(function() {
  var t4 = {};
  return y[oO].call(t4) !== t4;
})) && (y = {}), A(y[oO]) || ra(y, oO, function() {
  return this;
});
var oT = y, oS = function() {
}, oj = [], oI = W("Reflect", "construct"), oR = /^\s*(?:class|function)\b/, oP = V(oR.exec), o_ = !oR.exec(oS), ok = function(t4) {
  if (!A(t4))
    return false;
  try {
    return oI(oS, oj, t4), true;
  } catch (t9) {
    return false;
  }
}, oM = function(t4) {
  if (!A(t4))
    return false;
  switch (rb(t4)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return false;
  }
  try {
    return o_ || !!oP(oR, tG(t4));
  } catch (t9) {
    return true;
  }
};
oM.sham = true;
var oC = !oI || E(function() {
  var t4;
  return ok(ok.call) || !ok(Object) || !ok(function() {
    t4 = true;
  }) || t4;
}) ? oM : ok, oF = TypeError, oD = function(t4) {
  if (oC(t4))
    return t4;
  throw oF(to(t4) + " is not a constructor");
}, oL = tR("species"), oU = V("".charAt), oz = V("".charCodeAt), oW = V("".slice), o$ = function(t4) {
  return function(r10, e9) {
    var n10, o10, i2 = rw(tv(r10)), u2 = rQ(e9), a2 = i2.length;
    return u2 < 0 || u2 >= a2 ? t4 ? "" : void 0 : (n10 = oz(i2, u2)) < 55296 || n10 > 56319 || u2 + 1 === a2 || (o10 = oz(i2, u2 + 1)) < 56320 || o10 > 57343 ? t4 ? oU(i2, u2) : n10 : t4 ? oW(i2, u2, u2 + 2) : (n10 - 55296 << 10) + (o10 - 56320) + 65536;
  };
}, oB = { codeAt: o$(false), charAt: o$(true) }.charAt, oN = S.RegExp, oV = E(function() {
  var t4 = oN("a", "y");
  return t4.lastIndex = 2, null !== t4.exec("abcd");
}), oY = (oV || E(function() {
  return !oN("a", "y").sticky;
}), oV || E(function() {
  var t4 = oN("^r", "gy");
  return t4.lastIndex = 2, null !== t4.exec("str");
})), oG = S.RegExp, oH = E(function() {
  var t4 = oG(".", "s");
  return !(t4.dotAll && t4.exec("\n") && "s" === t4.flags);
}), oq = S.RegExp, oK = E(function() {
  var t4 = oq("(?<a>b)", "g");
  return "b" !== t4.exec("b").groups.a || "bc" !== "b".replace(t4, "$<a>c");
}), oX = t3.get, oJ = td("native-string-replace", String.prototype.replace), oQ = RegExp.prototype.exec, oZ = oQ, o0 = V("".charAt), o1 = V("".indexOf), o2 = V("".replace), o4 = V("".slice), o9 = (e = /b*/g, z(oQ, r = /a/, "a"), z(oQ, e, "a"), 0 !== r.lastIndex || 0 !== e.lastIndex), o3 = void 0 !== /()??/.exec("")[1];
(o9 || o3 || oY || oH || oK) && (oZ = function(t4) {
  var r10, e9, n10, o10, i2, u2, a2, c2 = oX(this), f2 = rw(t4), l2 = c2.raw;
  if (l2)
    return l2.lastIndex = this.lastIndex, r10 = z(oZ, l2, f2), this.lastIndex = l2.lastIndex, r10;
  var s2 = c2.groups, p2 = oY && this.sticky, y2 = z(e6, this), h2 = this.source, d2 = 0, g2 = f2;
  if (p2 && (-1 === o1(y2 = o2(y2, "y", ""), "g") && (y2 += "g"), g2 = o4(f2, this.lastIndex), this.lastIndex > 0 && (!this.multiline || this.multiline && "\n" !== o0(f2, this.lastIndex - 1)) && (h2 = "(?: " + h2 + ")", g2 = " " + g2, d2++), e9 = RegExp("^(?:" + h2 + ")", y2)), o3 && (e9 = RegExp("^" + h2 + "$(?!\\s)", y2)), o9 && (n10 = this.lastIndex), o10 = z(oQ, p2 ? e9 : this, g2), p2 ? o10 ? (o10.input = o4(o10.input, d2), o10[0] = o4(o10[0], d2), o10.index = this.lastIndex, this.lastIndex += o10[0].length) : this.lastIndex = 0 : o9 && o10 && (this.lastIndex = this.global ? o10.index + o10[0].length : n10), o3 && o10 && o10.length > 1 && z(oJ, o10[0], e9, function() {
    for (i2 = 1; i2 < arguments.length - 2; i2++)
      void 0 === arguments[i2] && (o10[i2] = void 0);
  }), o10 && s2)
    for (i2 = 0, o10.groups = u2 = oE(null); i2 < s2.length; i2++)
      u2[(a2 = s2[i2])[0]] = o10[a2[1]];
  return o10;
});
var o7 = oZ, o6 = TypeError, o8 = function(t4, r10) {
  return { value: t4, done: r10 };
}, o5 = function(t4, r10) {
  var e9, n10 = D(t4).constructor;
  return void 0 === n10 || ta(e9 = D(n10)[oL]) ? r10 : oD(e9);
}, it = function(t4, r10) {
  var e9 = t4.exec;
  if (A(e9)) {
    var n10 = z(e9, t4, r10);
    return null !== n10 && D(n10), n10;
  }
  if ("RegExp" === ry(t4))
    return z(o7, t4, r10);
  throw o6("RegExp#exec called on incompatible receiver");
}, ir = tR("matchAll"), ie = "RegExp String", io = ie + " Iterator", ii = t3.set, iu = t3.getterFor(io), ia = RegExp.prototype, ic = TypeError, il = nW("".indexOf), is = nW("".matchAll), ip = !!is && !E(function() {
  is("a", /./);
}), iy = ((n = function(t4, r10, e9, n10) {
  ii(this, { type: io, regexp: t4, string: r10, global: e9, unicode: n10, done: false });
}).prototype = oE(oT, { next: tK(1, function() {
  var t4, r10 = iu(this);
  if (r10.done)
    return o8(void 0, true);
  var e9 = r10.regexp, n10 = r10.string, o10 = it(e9, n10);
  return null === o10 ? (r10.done = true, o8(void 0, true)) : (r10.global ? "" === rw(o10[0]) && (e9.lastIndex = (t4 = r2(e9.lastIndex)) + (r10.unicode ? oB(n10, t4).length : 1)) : r10.done = true, o8(o10, false));
}) }), eK(n, ie + " Iterator", false), n);
ep({ target: "String", proto: true, forced: ip }, { matchAll: function(t4) {
  var r10, e9, n10 = tv(this);
  if (ta(t4)) {
    if (ip)
      return is(n10, t4);
  } else {
    if (e7(t4) && !~il(rw(tv(e5(t4))), "g"))
      throw ic("`.matchAll` does not allow non-global regexes");
    if (ip)
      return is(n10, t4);
    if (e9 = tc(t4, ir))
      return z(e9, t4, n10);
  }
  return r10 = rw(n10), RegExp(t4, "g")[ir](r10);
} }), ir in ia || ra(ia, ir, function(t4) {
  var r10, e9, n10, o10 = D(this), i2 = rw(t4), u2 = o5(o10, RegExp), a2 = rw(e5(o10));
  return r10 = new u2(u2 === RegExp ? o10.source : o10, a2), e9 = !!~il(a2, "g"), n10 = !!~il(a2, "u"), r10.lastIndex = r2(o10.lastIndex), new iy(r10, i2, e9, n10);
});
export {
  v as g
};
