var t, r, e, n, o, i, u, a, c, f, l, s, p, y, h, d, g = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function v(t3) {
  return t3 && t3.__esModule && Object.prototype.hasOwnProperty.call(t3, "default") ? t3.default : t3;
}
var b = "object" == typeof document && document.all, w = { all: b, IS_HTMLDDA: void 0 === b && void 0 !== b }, m = w.all, A = w.IS_HTMLDDA ? function(t3) {
  return "function" == typeof t3 || t3 === m;
} : function(t3) {
  return "function" == typeof t3;
}, x = {}, E = function(t3) {
  try {
    return !!t3();
  } catch (t4) {
    return true;
  }
}, O = !E(function() {
  return 7 !== Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1];
}), T = function(t3) {
  return t3 && t3.Math === Math && t3;
}, S = (
  // eslint-disable-next-line es/no-global-this -- safe
  T("object" == typeof globalThis && globalThis) || T("object" == typeof window && window) || // eslint-disable-next-line no-restricted-globals -- safe
  T("object" == typeof self && self) || T("object" == typeof g && g) || // eslint-disable-next-line no-new-func -- fallback
  function() {
    return this;
  }() || g || Function("return this")()
), j = w.all, I = w.IS_HTMLDDA ? function(t3) {
  return "object" == typeof t3 ? null !== t3 : A(t3) || t3 === j;
} : function(t3) {
  return "object" == typeof t3 ? null !== t3 : A(t3);
}, R = S.document, P = I(R) && I(R.createElement), _ = function(t3) {
  return P ? R.createElement(t3) : {};
}, k = !O && !E(function() {
  return 7 !== Object.defineProperty(/* @__PURE__ */ _("div"), "a", { get: function() {
    return 7;
  } }).a;
}), M = O && E(function() {
  return 42 !== Object.defineProperty(function() {
  }, "prototype", { value: 42, writable: false }).prototype;
}), C = String, F = TypeError, D = function(t3) {
  if (I(t3))
    return t3;
  throw new F(C(t3) + " is not an object");
}, L = !E(function() {
  var t3 = /* @__PURE__ */ (function() {
  }).bind();
  return "function" != typeof t3 || t3.hasOwnProperty("prototype");
}), U = Function.prototype.call, z = L ? U.bind(U) : function() {
  return U.apply(U, arguments);
}, W = function(t3, r10) {
  var e3;
  return arguments.length < 2 ? A(e3 = S[t3]) ? e3 : void 0 : S[t3] && S[t3][r10];
}, $ = Function.prototype, B = $.call, N = L && $.bind.bind(B, B), V = L ? N : function(t3) {
  return function() {
    return B.apply(t3, arguments);
  };
}, Y = /* @__PURE__ */ V({}.isPrototypeOf), G = "undefined" != typeof navigator && String(navigator.userAgent) || "", H = S.process, q = S.Deno, K = H && H.versions || q && q.version, X = K && K.v8;
X && // in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(i = (o = /* @__PURE__ */ X.split("."))[0] > 0 && o[0] < 4 ? 1 : +(o[0] + o[1])), !i && G && (!(o = /* @__PURE__ */ G.match(/Edge\/(\d+)/)) || o[1] >= 74) && (o = /* @__PURE__ */ G.match(/Chrome\/(\d+)/)) && (i = +o[1]);
var J = i, Q = S.String, Z = !!Object.getOwnPropertySymbols && !E(function() {
  var t3 = /* @__PURE__ */ Symbol("symbol detection");
  return !Q(t3) || !(Object(t3) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && J && J < 41;
}), tt = Z && !Symbol.sham && "symbol" == typeof Symbol.iterator, tr = Object, te = tt ? function(t3) {
  return "symbol" == typeof t3;
} : function(t3) {
  var r10 = /* @__PURE__ */ W("Symbol");
  return A(r10) && Y(r10.prototype, /* @__PURE__ */ tr(t3));
}, tn = String, to = function(t3) {
  try {
    return tn(t3);
  } catch (t4) {
    return "Object";
  }
}, ti = TypeError, tu = function(t3) {
  if (A(t3))
    return t3;
  throw new ti(to(t3) + " is not a function");
}, ta = function(t3) {
  return null == t3;
}, tc = function(t3, r10) {
  var e3 = t3[r10];
  return ta(e3) ? void 0 : tu(e3);
}, tf = TypeError, tl = { exports: {} }, ts = Object.defineProperty, tp = function(t3, r10) {
  try {
    ts(S, t3, { value: r10, configurable: true, writable: true });
  } catch (e3) {
    S[t3] = r10;
  }
  return r10;
}, ty = "__core-js_shared__", th = S[ty] || tp(ty, {});
(tl.exports = function(t3, r10) {
  return th[t3] || (th[t3] = void 0 !== r10 ? r10 : {});
})("versions", []).push({ version: "3.33.0", mode: "global", copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.33.0/LICENSE", source: "https://github.com/zloirock/core-js" });
var td = tl.exports, tg = TypeError, tv = function(t3) {
  if (ta(t3))
    throw new tg("Can't call method on " + t3);
  return t3;
}, tb = Object, tw = function(t3) {
  return tb(/* @__PURE__ */ tv(t3));
}, tm = /* @__PURE__ */ V({}.hasOwnProperty), tA = Object.hasOwn || function(t3, r10) {
  return tm(/* @__PURE__ */ tw(t3), r10);
}, tx = 0, tE = /* @__PURE__ */ Math.random(), tO = /* @__PURE__ */ V(1 .toString), tT = function(t3) {
  return "Symbol(" + (void 0 === t3 ? "" : t3) + ")_" + tO(++tx + tE, 36);
}, tS = S.Symbol, tj = /* @__PURE__ */ td("wks"), tI = tt ? tS.for || tS : tS && tS.withoutSetter || tT, tR = function(t3) {
  return tA(tj, t3) || (tj[t3] = Z && tA(tS, t3) ? tS[t3] : tI("Symbol." + t3)), tj[t3];
}, tP = function(t3, r10) {
  var e3, n10;
  if ("string" === r10 && A(e3 = t3.toString) && !I(n10 = /* @__PURE__ */ z(e3, t3)) || A(e3 = t3.valueOf) && !I(n10 = /* @__PURE__ */ z(e3, t3)) || "string" !== r10 && A(e3 = t3.toString) && !I(n10 = /* @__PURE__ */ z(e3, t3)))
    return n10;
  throw new tf("Can't convert object to primitive value");
}, t_ = TypeError, tk = /* @__PURE__ */ tR("toPrimitive"), tM = function(t3, r10) {
  if (!I(t3) || te(t3))
    return t3;
  var e3, n10 = /* @__PURE__ */ tc(t3, tk);
  if (n10) {
    if (void 0 === r10 && (r10 = "default"), !I(e3 = /* @__PURE__ */ z(n10, t3, r10)) || te(e3))
      return e3;
    throw new t_("Can't convert object to primitive value");
  }
  return void 0 === r10 && (r10 = "number"), tP(t3, r10);
}, tC = function(t3) {
  var r10 = /* @__PURE__ */ tM(t3, "string");
  return te(r10) ? r10 : r10 + "";
}, tF = TypeError, tD = Object.defineProperty, tL = Object.getOwnPropertyDescriptor, tU = "enumerable", tz = "configurable", tW = "writable";
x.f = O ? M ? function(t3, r10, e3) {
  if (D(t3), r10 = /* @__PURE__ */ tC(r10), D(e3), "function" == typeof t3 && "prototype" === r10 && "value" in e3 && tW in e3 && !e3[tW]) {
    var n10 = /* @__PURE__ */ tL(t3, r10);
    n10 && n10[tW] && (t3[r10] = e3.value, e3 = { configurable: tz in e3 ? e3[tz] : n10[tz], enumerable: tU in e3 ? e3[tU] : n10[tU], writable: false });
  }
  return tD(t3, r10, e3);
} : tD : function(t3, r10, e3) {
  if (D(t3), r10 = /* @__PURE__ */ tC(r10), D(e3), k)
    try {
      return tD(t3, r10, e3);
    } catch (t4) {
    }
  if ("get" in e3 || "set" in e3)
    throw new tF("Accessors not supported");
  return "value" in e3 && (t3[r10] = e3.value), t3;
};
var t$ = { exports: {} }, tB = Function.prototype, tN = O && Object.getOwnPropertyDescriptor, tV = /* @__PURE__ */ tA(tB, "name") && (!O || O && tN(tB, "name").configurable), tY = /* @__PURE__ */ V(Function.toString);
A(th.inspectSource) || (th.inspectSource = function(t3) {
  return tY(t3);
});
var tG = th.inspectSource, tH = S.WeakMap, tq = A(tH) && /native code/.test(/* @__PURE__ */ String(tH)), tK = function(t3, r10) {
  return { enumerable: !(1 & t3), configurable: !(2 & t3), writable: !(4 & t3), value: r10 };
}, tX = O ? function(t3, r10, e3) {
  return x.f(t3, r10, /* @__PURE__ */ tK(1, e3));
} : function(t3, r10, e3) {
  return t3[r10] = e3, t3;
}, tJ = /* @__PURE__ */ td("keys"), tQ = function(t3) {
  return tJ[t3] || (tJ[t3] = /* @__PURE__ */ tT(t3));
}, tZ = {}, t0 = "Object already initialized", t1 = S.TypeError, t2 = S.WeakMap;
if (tq || th.state) {
  var t4 = th.state || (th.state = new t2());
  t4.get = t4.get, t4.has = t4.has, t4.set = t4.set, /* eslint-enable no-self-assign -- prototype methods protection */
  u = function(t3, r10) {
    if (t4.has(t3))
      throw new t1(t0);
    return r10.facade = t3, t4.set(t3, r10), r10;
  }, a = function(t3) {
    return t4.get(t3) || {};
  }, c = function(t3) {
    return t4.has(t3);
  };
} else {
  var t3 = /* @__PURE__ */ tQ("state");
  tZ[t3] = true, u = function(t4, r10) {
    if (tA(t4, t3))
      throw new t1(t0);
    return r10.facade = t4, tX(t4, t3, r10), r10;
  }, a = function(t4) {
    return tA(t4, t3) ? t4[t3] : {};
  }, c = function(t4) {
    return tA(t4, t3);
  };
}
var t9 = { set: u, get: a, has: c, enforce: function(t3) {
  return c(t3) ? a(t3) : u(t3, {});
}, getterFor: function(t3) {
  return function(r10) {
    var e3;
    if (!I(r10) || (e3 = /* @__PURE__ */ a(r10)).type !== t3)
      throw new t1("Incompatible receiver, " + t3 + " required");
    return e3;
  };
} }, t7 = t9.enforce, t6 = t9.get, t8 = String, t5 = Object.defineProperty, rt = /* @__PURE__ */ V("".slice), rr = /* @__PURE__ */ V("".replace), re = /* @__PURE__ */ V([].join), rn = O && !E(function() {
  return 8 !== t5(function() {
  }, "length", { value: 8 }).length;
}), ro = /* @__PURE__ */ String(String).split("String"), ri = t$.exports = function(t3, r10, e3) {
  "Symbol(" === rt(/* @__PURE__ */ t8(r10), 0, 7) && (r10 = "[" + rr(/* @__PURE__ */ t8(r10), /^Symbol\(([^)]*)\)/, "$1") + "]"), e3 && e3.getter && (r10 = "get " + r10), e3 && e3.setter && (r10 = "set " + r10), (!tA(t3, "name") || tV && t3.name !== r10) && (O ? t5(t3, "name", { value: r10, configurable: true }) : t3.name = r10), rn && e3 && tA(e3, "arity") && t3.length !== e3.arity && t5(t3, "length", { value: e3.arity });
  try {
    e3 && tA(e3, "constructor") && e3.constructor ? O && t5(t3, "prototype", { writable: false }) : t3.prototype && (t3.prototype = void 0);
  } catch (t4) {
  }
  var n10 = /* @__PURE__ */ t7(t3);
  return tA(n10, "source") || (n10.source = /* @__PURE__ */ re(ro, "string" == typeof r10 ? r10 : "")), t3;
};
Function.prototype.toString = /* @__PURE__ */ ri(function() {
  return A(this) && t6(this).source || tG(this);
}, "toString");
var ru = t$.exports, ra = function(t3, r10, e3, n10) {
  n10 || (n10 = {});
  var o10 = n10.enumerable, i2 = void 0 !== n10.name ? n10.name : r10;
  if (A(e3) && ru(e3, i2, n10), n10.global)
    o10 ? t3[r10] = e3 : tp(r10, e3);
  else {
    try {
      n10.unsafe ? t3[r10] && (o10 = true) : delete t3[r10];
    } catch (t4) {
    }
    o10 ? t3[r10] = e3 : x.f(t3, r10, { value: e3, enumerable: false, configurable: !n10.nonConfigurable, writable: !n10.nonWritable });
  }
  return t3;
}, rc = /* @__PURE__ */ tR("toStringTag"), rf = {};
rf[rc] = "z";
var rl = "[object z]" === String(rf), rs = /* @__PURE__ */ V({}.toString), rp = /* @__PURE__ */ V("".slice), ry = function(t3) {
  return rp(/* @__PURE__ */ rs(t3), 8, -1);
}, rh = /* @__PURE__ */ tR("toStringTag"), rd = Object, rg = "Arguments" === ry(/* @__PURE__ */ function() {
  return arguments;
}()), rv = function(t3, r10) {
  try {
    return t3[r10];
  } catch (t4) {
  }
}, rb = rl ? ry : function(t3) {
  var r10, e3, n10;
  return void 0 === t3 ? "Undefined" : null === t3 ? "Null" : "string" == typeof (e3 = /* @__PURE__ */ rv(r10 = /* @__PURE__ */ rd(t3), rh)) ? e3 : rg ? ry(r10) : "Object" === (n10 = /* @__PURE__ */ ry(r10)) && A(r10.callee) ? "Arguments" : n10;
}, rw = String, rm = function(t3) {
  if ("Symbol" === rb(t3))
    throw TypeError("Cannot convert a Symbol value to a string");
  return rw(t3);
}, rA = TypeError, rx = function(t3, r10) {
  if (t3 < r10)
    throw new rA("Not enough arguments");
  return t3;
}, rE = URLSearchParams, rO = rE.prototype, rT = /* @__PURE__ */ V(rO.append), rS = /* @__PURE__ */ V(rO.delete), rj = /* @__PURE__ */ V(rO.forEach), rI = /* @__PURE__ */ V([].push), rR = new rE("a=1&a=2&b=3");
rR.delete("a", 1), // `undefined` case is a Chromium 117 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=14222
rR.delete("b", void 0), rR + "" != "a=2" && ra(rO, "delete", function(t3) {
  var r10, e3 = arguments.length, n10 = e3 < 2 ? void 0 : arguments[1];
  if (e3 && void 0 === n10)
    return rS(this, t3);
  var o10 = [];
  rj(this, function(t4, r11) {
    rI(o10, { key: r11, value: t4 });
  }), rx(e3, 1);
  for (var i2 = /* @__PURE__ */ rm(t3), u2 = /* @__PURE__ */ rm(n10), a2 = 0, c2 = 0, f2 = false, l2 = o10.length; a2 < l2; )
    r10 = o10[a2++], f2 || r10.key === i2 ? (f2 = true, rS(this, r10.key)) : c2++;
  for (; c2 < l2; )
    (r10 = o10[c2++]).key === i2 && r10.value === u2 || rT(this, r10.key, r10.value);
}, { enumerable: true, unsafe: true });
var rP = URLSearchParams, r_ = rP.prototype, rk = /* @__PURE__ */ V(r_.getAll), rM = /* @__PURE__ */ V(r_.has), rC = new rP("a=1");
(rC.has("a", 2) || !rC.has("a", void 0)) && ra(r_, "has", function(t3) {
  var r10 = arguments.length, e3 = r10 < 2 ? void 0 : arguments[1];
  if (r10 && void 0 === e3)
    return rM(this, t3);
  var n10 = /* @__PURE__ */ rk(this, t3);
  rx(r10, 1);
  for (var o10 = /* @__PURE__ */ rm(e3), i2 = 0; i2 < n10.length; )
    if (n10[i2++] === o10)
      return true;
  return false;
}, { enumerable: true, unsafe: true });
var rF = function(t3, r10, e3) {
  return e3.get && ru(e3.get, r10, { getter: true }), e3.set && ru(e3.set, r10, { setter: true }), x.f(t3, r10, e3);
}, rD = URLSearchParams.prototype, rL = /* @__PURE__ */ V(rD.forEach);
!O || "size" in rD || rF(rD, "size", { get: function() {
  var t3 = 0;
  return rL(this, function() {
    t3++;
  }), t3;
}, configurable: true, enumerable: true });
var rU = {}, rz = {}, rW = {}.propertyIsEnumerable, r$ = Object.getOwnPropertyDescriptor, rB = r$ && !rW.call({ 1: 2 }, 1);
rz.f = rB ? function(t3) {
  var r10 = /* @__PURE__ */ r$(this, t3);
  return !!r10 && r10.enumerable;
} : rW;
var rN = Object, rV = /* @__PURE__ */ V("".split), rY = E(function() {
  return !rN("z").propertyIsEnumerable(0);
}) ? function(t3) {
  return "String" === ry(t3) ? rV(t3, "") : rN(t3);
} : rN, rG = function(t3) {
  return rY(/* @__PURE__ */ tv(t3));
}, rH = Object.getOwnPropertyDescriptor;
rU.f = O ? rH : function(t3, r10) {
  if (t3 = /* @__PURE__ */ rG(t3), r10 = /* @__PURE__ */ tC(r10), k)
    try {
      return rH(t3, r10);
    } catch (t4) {
    }
  if (tA(t3, r10))
    return tK(!z(rz.f, t3, r10), t3[r10]);
};
var rq = {}, rK = Math.ceil, rX = Math.floor, rJ = Math.trunc || function(t3) {
  var r10 = +t3;
  return (r10 > 0 ? rX : rK)(r10);
}, rQ = function(t3) {
  var r10 = +t3;
  return r10 != r10 || 0 === r10 ? 0 : rJ(r10);
}, rZ = Math.max, r0 = Math.min, r1 = Math.min, r2 = function(t3) {
  return t3 > 0 ? r1(/* @__PURE__ */ rQ(t3), 9007199254740991) : 0;
}, r4 = function(t3) {
  return r2(t3.length);
}, r3 = function(t3, r10) {
  var e3 = /* @__PURE__ */ rQ(t3);
  return e3 < 0 ? rZ(e3 + r10, 0) : r0(e3, r10);
}, r9 = function(t3) {
  return function(r10, e3, n10) {
    var o10, i2 = /* @__PURE__ */ rG(r10), u2 = /* @__PURE__ */ r4(i2), a2 = /* @__PURE__ */ r3(n10, u2);
    if (t3 && e3 != e3) {
      for (; u2 > a2; )
        if ((o10 = i2[a2++]) != o10)
          return true;
    } else
      for (; u2 > a2; a2++)
        if ((t3 || a2 in i2) && i2[a2] === e3)
          return t3 || a2 || 0;
    return !t3 && -1;
  };
}, r7 = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: /* @__PURE__ */ r9(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: /* @__PURE__ */ r9(false)
}.indexOf, r6 = /* @__PURE__ */ V([].push), r8 = function(t3, r10) {
  var e3, n10 = /* @__PURE__ */ rG(t3), o10 = 0, i2 = [];
  for (e3 in n10)
    !tA(tZ, e3) && tA(n10, e3) && r6(i2, e3);
  for (; r10.length > o10; )
    tA(n10, e3 = r10[o10++]) && (~r7(i2, e3) || r6(i2, e3));
  return i2;
}, r5 = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], et = /* @__PURE__ */ r5.concat("length", "prototype");
rq.f = Object.getOwnPropertyNames || function(t3) {
  return r8(t3, et);
};
var er = {};
er.f = Object.getOwnPropertySymbols;
var ee = /* @__PURE__ */ V([].concat), en = W("Reflect", "ownKeys") || function(t3) {
  var r10 = /* @__PURE__ */ rq.f(/* @__PURE__ */ D(t3)), e3 = er.f;
  return e3 ? ee(r10, /* @__PURE__ */ e3(t3)) : r10;
}, eo = function(t3, r10, e3) {
  for (var n10 = /* @__PURE__ */ en(r10), o10 = x.f, i2 = rU.f, u2 = 0; u2 < n10.length; u2++) {
    var a2 = n10[u2];
    tA(t3, a2) || e3 && tA(e3, a2) || o10(t3, a2, /* @__PURE__ */ i2(r10, a2));
  }
}, ei = /#|\.prototype\./, eu = function(t3, r10) {
  var e3 = ec[ea(t3)];
  return e3 === el || e3 !== ef && (A(r10) ? E(r10) : !!r10);
}, ea = eu.normalize = function(t3) {
  return String(t3).replace(ei, ".").toLowerCase();
}, ec = eu.data = {}, ef = eu.NATIVE = "N", el = eu.POLYFILL = "P", es = rU.f, ep = function(t3, r10) {
  var e3, n10, o10, i2, u2, a2 = t3.target, c2 = t3.global, f2 = t3.stat;
  if (e3 = c2 ? S : f2 ? S[a2] || tp(a2, {}) : (S[a2] || {}).prototype)
    for (n10 in r10) {
      if (i2 = r10[n10], o10 = t3.dontCallGetSet ? (u2 = /* @__PURE__ */ es(e3, n10)) && u2.value : e3[n10], !/* @__PURE__ */ eu(c2 ? n10 : a2 + (f2 ? "." : "#") + n10, t3.forced) && void 0 !== o10) {
        if (typeof i2 == typeof o10)
          continue;
        eo(i2, o10);
      }
      (t3.sham || o10 && o10.sham) && tX(i2, "sham", true), ra(e3, n10, i2, t3);
    }
}, ey = Array.isArray || function(t3) {
  return "Array" === ry(t3);
}, eh = TypeError, ed = Object.getOwnPropertyDescriptor, eg = O && !function() {
  if (void 0 !== this)
    return true;
  try {
    Object.defineProperty([], "length", { writable: false }).length = 1;
  } catch (t3) {
    return t3 instanceof TypeError;
  }
}() ? function(t3, r10) {
  if (ey(t3) && !ed(t3, "length").writable)
    throw new eh("Cannot set read only .length");
  return t3.length = r10;
} : function(t3, r10) {
  return t3.length = r10;
}, ev = TypeError, eb = function(t3) {
  if (t3 > 9007199254740991)
    throw ev("Maximum allowed index exceeded");
  return t3;
};
ep({ target: "Array", proto: true, arity: 1, forced: /* @__PURE__ */ E(function() {
  return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
}) || !function() {
  try {
    Object.defineProperty([], "length", { writable: false }).push();
  } catch (t3) {
    return t3 instanceof TypeError;
  }
}() }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function(t3) {
    var r10 = /* @__PURE__ */ tw(this), e3 = /* @__PURE__ */ r4(r10), n10 = arguments.length;
    eb(e3 + n10);
    for (var o10 = 0; o10 < n10; o10++)
      r10[e3] = arguments[o10], e3++;
    return eg(r10, e3), e3;
  }
});
var ew = Function.prototype, em = ew.apply, eA = ew.call, ex = "object" == typeof Reflect && Reflect.apply || (L ? eA.bind(em) : function() {
  return eA.apply(em, arguments);
}), eE = String, eO = TypeError, eT = function(t3, r10, e3) {
  try {
    return V(/* @__PURE__ */ tu(Object.getOwnPropertyDescriptor(t3, r10)[e3]));
  } catch (t4) {
  }
}, eS = function(t3) {
  if ("object" == typeof t3 || A(t3))
    return t3;
  throw new eO("Can't set " + eE(t3) + " as a prototype");
}, ej = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var t3, r10 = false, e3 = {};
  try {
    (t3 = /* @__PURE__ */ eT(Object.prototype, "__proto__", "set"))(e3, []), r10 = e3 instanceof Array;
  } catch (t4) {
  }
  return function(e10, n10) {
    return D(e10), eS(n10), r10 ? t3(e10, n10) : e10.__proto__ = n10, e10;
  };
}() : void 0), eI = x.f, eR = Error, eP = /* @__PURE__ */ V("".replace), e_ = String(new eR("zxcasd").stack), ek = /\n\s*at [^:]*:[^\n]*/, eM = /* @__PURE__ */ ek.test(e_), eC = !E(function() {
  var t3 = Error("a");
  return !("stack" in t3) || // eslint-disable-next-line es/no-object-defineproperty -- safe
  (Object.defineProperty(t3, "stack", /* @__PURE__ */ tK(1, 7)), 7 !== t3.stack);
}), eF = function(t3, r10) {
  if (eM && "string" == typeof t3 && !eR.prepareStackTrace)
    for (; r10--; )
      t3 = /* @__PURE__ */ eP(t3, ek, "");
  return t3;
}, eD = Error.captureStackTrace, eL = function(t3, r10, e3) {
  e3 in t3 || eI(t3, e3, { configurable: true, get: function() {
    return r10[e3];
  }, set: function(t4) {
    r10[e3] = t4;
  } });
}, eU = function(t3, r10, e3) {
  var n10, o10;
  return ej && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
  A(n10 = r10.constructor) && n10 !== e3 && I(o10 = n10.prototype) && o10 !== e3.prototype && ej(t3, o10), t3;
}, ez = function(t3, r10) {
  I(r10) && "cause" in r10 && tX(t3, "cause", r10.cause);
}, eW = function(t3, r10, e3, n10) {
  eC && (eD ? eD(t3, r10) : tX(t3, "stack", /* @__PURE__ */ eF(e3, n10)));
}, e$ = function(t3, r10, e3, n10) {
  var o10 = "stackTraceLimit", i2 = n10 ? 2 : 1, u2 = /* @__PURE__ */ t3.split("."), a2 = u2[u2.length - 1], c2 = /* @__PURE__ */ W.apply(null, u2);
  if (c2) {
    var f2 = c2.prototype;
    if (tA(f2, "cause") && delete f2.cause, !e3)
      return c2;
    var l2 = /* @__PURE__ */ W("Error"), s2 = r10(function(t4, r11) {
      var e10 = /* @__PURE__ */ function(t10, r12) {
        return void 0 === t10 ? arguments.length < 2 ? "" : r12 : rm(t10);
      }(n10 ? r11 : t4, void 0), o11 = n10 ? new c2(t4) : new c2();
      return void 0 !== e10 && tX(o11, "message", e10), eW(o11, s2, o11.stack, 2), this && Y(f2, this) && eU(o11, this, s2), arguments.length > i2 && ez(o11, arguments[i2]), o11;
    });
    s2.prototype = f2, "Error" !== a2 ? ej ? ej(s2, l2) : eo(s2, l2, { name: true }) : O && o10 in c2 && (eL(s2, c2, o10), eL(s2, c2, "prepareStackTrace")), eo(s2, c2);
    try {
      f2.name !== a2 && tX(f2, "name", a2), f2.constructor = s2;
    } catch (t4) {
    }
    return s2;
  }
}, eB = "WebAssembly", eN = S[eB], eV = 7 !== Error("e", { cause: 7 }).cause, eY = function(t3, r10) {
  var e3 = {};
  e3[t3] = /* @__PURE__ */ e$(t3, r10, eV), ep({ global: true, constructor: true, arity: 1, forced: eV }, e3);
}, eG = function(t3, r10) {
  if (eN && eN[t3]) {
    var e3 = {};
    e3[t3] = /* @__PURE__ */ e$(eB + "." + t3, r10, eV), ep({ target: eB, stat: true, constructor: true, arity: 1, forced: eV }, e3);
  }
};
eY("Error", function(t3) {
  return function(r10) {
    return ex(t3, this, arguments);
  };
}), eY("EvalError", function(t3) {
  return function(r10) {
    return ex(t3, this, arguments);
  };
}), eY("RangeError", function(t3) {
  return function(r10) {
    return ex(t3, this, arguments);
  };
}), eY("ReferenceError", function(t3) {
  return function(r10) {
    return ex(t3, this, arguments);
  };
}), eY("SyntaxError", function(t3) {
  return function(r10) {
    return ex(t3, this, arguments);
  };
}), eY("TypeError", function(t3) {
  return function(r10) {
    return ex(t3, this, arguments);
  };
}), eY("URIError", function(t3) {
  return function(r10) {
    return ex(t3, this, arguments);
  };
}), eG("CompileError", function(t3) {
  return function(r10) {
    return ex(t3, this, arguments);
  };
}), eG("LinkError", function(t3) {
  return function(r10) {
    return ex(t3, this, arguments);
  };
}), eG("RuntimeError", function(t3) {
  return function(r10) {
    return ex(t3, this, arguments);
  };
});
var eH = x.f, eq = /* @__PURE__ */ tR("toStringTag"), eK = function(t3, r10, e3) {
  t3 && !e3 && (t3 = t3.prototype), t3 && !tA(t3, eq) && eH(t3, eq, { configurable: true, value: r10 });
};
ep({ global: true }, { Reflect: {} }), // Reflect[@@toStringTag] property
// https://tc39.es/ecma262/#sec-reflect-@@tostringtag
eK(S.Reflect, "Reflect", true);
var eX = TypeError, eJ = function(t3) {
  return function(r10, e3, n10, o10) {
    tu(e3);
    var i2 = /* @__PURE__ */ tw(r10), u2 = /* @__PURE__ */ rY(i2), a2 = /* @__PURE__ */ r4(i2), c2 = t3 ? a2 - 1 : 0, f2 = t3 ? -1 : 1;
    if (n10 < 2)
      for (; ; ) {
        if (c2 in u2) {
          o10 = u2[c2], c2 += f2;
          break;
        }
        if (c2 += f2, t3 ? c2 < 0 : a2 <= c2)
          throw new eX("Reduce of empty array with no initial value");
      }
    for (; t3 ? c2 >= 0 : a2 > c2; c2 += f2)
      c2 in u2 && (o10 = /* @__PURE__ */ e3(o10, u2[c2], c2, i2));
    return o10;
  };
}, eQ = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: /* @__PURE__ */ eJ(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: /* @__PURE__ */ eJ(true)
}, eZ = "process" === ry(S.process), e0 = eQ.left;
ep({ target: "Array", proto: true, forced: !eZ && J > 79 && J < 83 || !((t = [].reduce) && E(function() {
  t.call(null, function() {
    return 1;
  }, 1);
})) }, { reduce: function(t3) {
  var r10 = arguments.length;
  return e0(this, t3, r10, r10 > 1 ? arguments[1] : void 0);
} });
var e1 = TypeError, e2 = Object.defineProperty, e4 = S.self !== S;
try {
  if (O) {
    var e3 = /* @__PURE__ */ Object.getOwnPropertyDescriptor(S, "self");
    !e4 && e3 && e3.get && e3.enumerable || rF(S, "self", { get: function() {
      return S;
    }, set: function(t3) {
      if (this !== S)
        throw new e1("Illegal invocation");
      e2(S, "self", { value: t3, writable: true, configurable: true, enumerable: true });
    }, configurable: true, enumerable: true });
  } else
    ep({ global: true, simple: true, forced: e4 }, { self: S });
} catch (t3) {
}
var e9 = /* @__PURE__ */ tR("match"), e7 = function(t3) {
  var r10;
  return I(t3) && (void 0 !== (r10 = t3[e9]) ? !!r10 : "RegExp" === ry(t3));
}, e6 = function() {
  var t3 = /* @__PURE__ */ D(this), r10 = "";
  return t3.hasIndices && (r10 += "d"), t3.global && (r10 += "g"), t3.ignoreCase && (r10 += "i"), t3.multiline && (r10 += "m"), t3.dotAll && (r10 += "s"), t3.unicode && (r10 += "u"), t3.unicodeSets && (r10 += "v"), t3.sticky && (r10 += "y"), r10;
}, e8 = RegExp.prototype, e5 = function(t3) {
  var r10 = t3.flags;
  return void 0 === r10 && !("flags" in e8) && !tA(t3, "flags") && Y(e8, t3) ? z(e6, t3) : r10;
}, nt = Math.floor, nr = /* @__PURE__ */ V("".charAt), ne = /* @__PURE__ */ V("".replace), nn = /* @__PURE__ */ V("".slice), no = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, ni = /\$([$&'`]|\d{1,2})/g, nu = function(t3, r10, e3, n10, o10, i2) {
  var u2 = e3 + t3.length, a2 = n10.length, c2 = ni;
  return void 0 !== o10 && (o10 = /* @__PURE__ */ tw(o10), c2 = no), ne(i2, c2, function(i3, c3) {
    var f2;
    switch (nr(c3, 0)) {
      case "$":
        return "$";
      case "&":
        return t3;
      case "`":
        return nn(r10, 0, e3);
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
          var s2 = /* @__PURE__ */ nt(l2 / 10);
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
}, na = /* @__PURE__ */ tR("replace"), nc = TypeError, nf = /* @__PURE__ */ V("".indexOf);
V("".replace);
var nl = /* @__PURE__ */ V("".slice), ns = Math.max, np = function(t3, r10, e3) {
  return e3 > t3.length ? -1 : "" === r10 ? e3 : nf(t3, r10, e3);
};
ep({ target: "String", proto: true }, { replaceAll: function(t3, r10) {
  var e3, n10, o10, i2, u2, a2, c2, f2 = /* @__PURE__ */ tv(this), l2 = 0, s2 = 0, p2 = "";
  if (!ta(t3)) {
    if (/* @__PURE__ */ e7(t3) && !~nf(/* @__PURE__ */ rm(/* @__PURE__ */ tv(/* @__PURE__ */ e5(t3))), "g"))
      throw new nc("`.replaceAll` does not allow non-global regexes");
    if (e3 = /* @__PURE__ */ tc(t3, na))
      return z(e3, t3, f2, r10);
  }
  for (n10 = /* @__PURE__ */ rm(f2), o10 = /* @__PURE__ */ rm(t3), (i2 = /* @__PURE__ */ A(r10)) || (r10 = /* @__PURE__ */ rm(r10)), a2 = /* @__PURE__ */ ns(1, u2 = o10.length), l2 = /* @__PURE__ */ np(n10, o10, 0); -1 !== l2; )
    c2 = i2 ? rm(/* @__PURE__ */ r10(o10, l2, n10)) : nu(o10, n10, l2, [], void 0, r10), p2 += nl(n10, s2, l2) + c2, s2 = l2 + u2, l2 = /* @__PURE__ */ np(n10, o10, l2 + a2);
  return s2 < n10.length && (p2 += /* @__PURE__ */ nl(n10, s2)), p2;
} });
var ny = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView, nh = !E(function() {
  function t3() {
  }
  return t3.prototype.constructor = null, Object.getPrototypeOf(new t3()) !== t3.prototype;
}), nd = /* @__PURE__ */ tQ("IE_PROTO"), ng = Object, nv = ng.prototype, nb = nh ? ng.getPrototypeOf : function(t3) {
  var r10 = /* @__PURE__ */ tw(t3);
  if (tA(r10, nd))
    return r10[nd];
  var e3 = r10.constructor;
  return A(e3) && r10 instanceof e3 ? e3.prototype : r10 instanceof ng ? nv : null;
}, nw = t9.enforce, nm = t9.get, nA = S.Int8Array, nx = nA && nA.prototype, nE = S.Uint8ClampedArray, nO = nE && nE.prototype, nT = nA && nb(nA), nS = nx && nb(nx), nj = Object.prototype, nI = S.TypeError, nR = /* @__PURE__ */ tR("toStringTag"), nP = /* @__PURE__ */ tT("TYPED_ARRAY_TAG"), n_ = "TypedArrayConstructor", nk = ny && !!ej && "Opera" !== rb(S.opera), nM = false, nC = { Int8Array: 1, Uint8Array: 1, Uint8ClampedArray: 1, Int16Array: 2, Uint16Array: 2, Int32Array: 4, Uint32Array: 4, Float32Array: 4, Float64Array: 8 }, nF = { BigInt64Array: 8, BigUint64Array: 8 }, nD = function(t3) {
  var r10 = /* @__PURE__ */ nb(t3);
  if (I(r10)) {
    var e3 = /* @__PURE__ */ nm(r10);
    return e3 && tA(e3, n_) ? e3[n_] : nD(r10);
  }
}, nL = function(t3) {
  if (!I(t3))
    return false;
  var r10 = /* @__PURE__ */ rb(t3);
  return tA(nC, r10) || tA(nF, r10);
};
for (f in nC)
  (s = (l = S[f]) && l.prototype) ? nw(s)[n_] = l : nk = false;
for (f in nF)
  (s = (l = S[f]) && l.prototype) && (nw(s)[n_] = l);
if ((!nk || !A(nT) || nT === Function.prototype) && // eslint-disable-next-line no-shadow -- safe
(nT = function() {
  throw new nI("Incorrect invocation");
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
var nU = { NATIVE_ARRAY_BUFFER_VIEWS: nk, TYPED_ARRAY_TAG: nM && nP, aTypedArray: function(t3) {
  if (nL(t3))
    return t3;
  throw new nI("Target is not a typed array");
}, aTypedArrayConstructor: function(t3) {
  if (A(t3) && (!ej || Y(nT, t3)))
    return t3;
  throw new nI(to(t3) + " is not a typed array constructor");
}, exportTypedArrayMethod: function(t3, r10, e3, n10) {
  if (O) {
    if (e3)
      for (var o10 in nC) {
        var i2 = S[o10];
        if (i2 && tA(i2.prototype, t3))
          try {
            delete i2.prototype[t3];
          } catch (e10) {
            try {
              i2.prototype[t3] = r10;
            } catch (t4) {
            }
          }
      }
    (!nS[t3] || e3) && ra(nS, t3, e3 ? r10 : nk && nx[t3] || r10, n10);
  }
}, exportTypedArrayStaticMethod: function(t3, r10, e3) {
  var n10, o10;
  if (O) {
    if (ej) {
      if (e3) {
        for (n10 in nC)
          if ((o10 = S[n10]) && tA(o10, t3))
            try {
              delete o10[t3];
            } catch (t4) {
            }
      }
      if (nT[t3] && !e3)
        return;
      try {
        return ra(nT, t3, e3 ? r10 : nk && nT[t3] || r10);
      } catch (t4) {
      }
    }
    for (n10 in nC)
      (o10 = S[n10]) && (!o10[t3] || e3) && ra(o10, t3, r10);
  }
}, getTypedArrayConstructor: nD, isView: function(t3) {
  if (!I(t3))
    return false;
  var r10 = /* @__PURE__ */ rb(t3);
  return "DataView" === r10 || tA(nC, r10) || tA(nF, r10);
}, isTypedArray: nL, TypedArray: nT, TypedArrayPrototype: nS }, nz = nU.aTypedArray;
(0, nU.exportTypedArrayMethod)("at", function(t3) {
  var r10 = /* @__PURE__ */ nz(this), e3 = /* @__PURE__ */ r4(r10), n10 = /* @__PURE__ */ rQ(t3), o10 = n10 >= 0 ? n10 : e3 + n10;
  return o10 < 0 || o10 >= e3 ? void 0 : r10[o10];
});
var nW = function(t3) {
  if ("Function" === ry(t3))
    return V(t3);
}, n$ = /* @__PURE__ */ nW(nW.bind), nB = function(t3) {
  var r10 = 1 === t3;
  return function(e3, n10, o10) {
    for (var i2, u2 = /* @__PURE__ */ tw(e3), a2 = /* @__PURE__ */ rY(u2), c2 = (tu(n10), void 0 === o10 ? n10 : L ? n$(n10, o10) : function() {
      return n10.apply(o10, arguments);
    }), f2 = /* @__PURE__ */ r4(a2); f2-- > 0; )
      if (/* @__PURE__ */ c2(i2 = a2[f2], f2, u2))
        switch (t3) {
          case 0:
            return i2;
          case 1:
            return f2;
        }
    return r10 ? -1 : void 0;
  };
}, nN = {
  // `Array.prototype.findLast` method
  // https://github.com/tc39/proposal-array-find-from-last
  findLast: /* @__PURE__ */ nB(0),
  // `Array.prototype.findLastIndex` method
  // https://github.com/tc39/proposal-array-find-from-last
  findLastIndex: /* @__PURE__ */ nB(1)
}, nV = nN.findLast, nY = nU.aTypedArray;
(0, nU.exportTypedArrayMethod)("findLast", function(t3) {
  return nV(/* @__PURE__ */ nY(this), t3, arguments.length > 1 ? arguments[1] : void 0);
});
var nG = nN.findLastIndex, nH = nU.aTypedArray;
(0, nU.exportTypedArrayMethod)("findLastIndex", function(t3) {
  return nG(/* @__PURE__ */ nH(this), t3, arguments.length > 1 ? arguments[1] : void 0);
});
var nq = RangeError, nK = function(t3) {
  var r10 = /* @__PURE__ */ rQ(t3);
  if (r10 < 0)
    throw new nq("The argument can't be less than 0");
  return r10;
}, nX = RangeError, nJ = function(t3, r10) {
  var e3 = /* @__PURE__ */ nK(t3);
  if (e3 % r10)
    throw new nX("Wrong offset");
  return e3;
}, nQ = S.RangeError, nZ = S.Int8Array, n0 = nZ && nZ.prototype, n1 = n0 && n0.set, n2 = nU.aTypedArray, n4 = nU.exportTypedArrayMethod, n3 = !E(function() {
  var t3 = new Uint8ClampedArray(2);
  return z(n1, t3, { length: 1, 0: 3 }, 1), 3 !== t3[1];
}), n9 = n3 && nU.NATIVE_ARRAY_BUFFER_VIEWS && E(function() {
  var t3 = new nZ(2);
  return t3.set(1), t3.set("2", 1), 0 !== t3[0] || 2 !== t3[1];
});
n4("set", function(t3) {
  n2(this);
  var r10 = /* @__PURE__ */ nJ(arguments.length > 1 ? arguments[1] : void 0, 1), e3 = /* @__PURE__ */ tw(t3);
  if (n3)
    return z(n1, this, e3, r10);
  var n10 = this.length, o10 = /* @__PURE__ */ r4(e3), i2 = 0;
  if (o10 + r10 > n10)
    throw new nQ("Wrong length");
  for (; i2 < o10; )
    this[r10 + i2] = e3[i2++];
}, !n3 || n9);
var n7 = function(t3, r10) {
  for (var e3 = /* @__PURE__ */ r4(t3), n10 = new r10(e3), o10 = 0; o10 < e3; o10++)
    n10[o10] = t3[e3 - o10 - 1];
  return n10;
}, n6 = nU.aTypedArray, n8 = nU.exportTypedArrayMethod, n5 = nU.getTypedArrayConstructor;
n8("toReversed", function() {
  return n7(/* @__PURE__ */ n6(this), /* @__PURE__ */ n5(this));
});
var ot = function(t3, r10) {
  for (var e3 = 0, n10 = /* @__PURE__ */ r4(r10), o10 = new t3(n10); n10 > e3; )
    o10[e3] = r10[e3++];
  return o10;
}, or = nU.aTypedArray, oe = nU.getTypedArrayConstructor, on = nU.exportTypedArrayMethod, oo = /* @__PURE__ */ V(nU.TypedArrayPrototype.sort);
on("toSorted", function(t3) {
  void 0 !== t3 && tu(t3);
  var r10 = /* @__PURE__ */ or(this);
  return oo(/* @__PURE__ */ ot(/* @__PURE__ */ oe(r10), r10), t3);
});
var oi = RangeError, ou = TypeError, oa = function(t3, r10, e3, n10) {
  var o10 = /* @__PURE__ */ r4(t3), i2 = /* @__PURE__ */ rQ(e3), u2 = i2 < 0 ? o10 + i2 : i2;
  if (u2 >= o10 || u2 < 0)
    throw new oi("Incorrect index");
  for (var a2 = new r10(o10), c2 = 0; c2 < o10; c2++)
    a2[c2] = c2 === u2 ? n10 : t3[c2];
  return a2;
}, oc = function(t3) {
  var r10 = /* @__PURE__ */ rb(t3);
  return "BigInt64Array" === r10 || "BigUint64Array" === r10;
}, of = function(t3) {
  var r10 = /* @__PURE__ */ tM(t3, "number");
  if ("number" == typeof r10)
    throw new ou("Can't convert number to bigint");
  return BigInt(r10);
}, ol = nU.aTypedArray, os = nU.getTypedArrayConstructor;
(0, nU.exportTypedArrayMethod)("with", { with: function(t3, r10) {
  var e3 = /* @__PURE__ */ ol(this), n10 = /* @__PURE__ */ rQ(t3), o10 = oc(e3) ? of(r10) : +r10;
  return oa(e3, /* @__PURE__ */ os(e3), n10, o10);
} }.with, !function() {
  try {
    new Int8Array(1).with(2, { valueOf: function() {
      throw 8;
    } });
  } catch (t3) {
    return 8 === t3;
  }
}());
var op = {}, oy = Object.keys || function(t3) {
  return r8(t3, r5);
};
op.f = O && !M ? Object.defineProperties : function(t3, r10) {
  D(t3);
  for (var e3, n10 = /* @__PURE__ */ rG(r10), o10 = /* @__PURE__ */ oy(r10), i2 = o10.length, u2 = 0; i2 > u2; )
    x.f(t3, e3 = o10[u2++], n10[e3]);
  return t3;
};
var oh = /* @__PURE__ */ W("document", "documentElement"), od = "prototype", og = "script", ov = /* @__PURE__ */ tQ("IE_PROTO"), ob = function() {
}, ow = function(t3) {
  return "<" + og + ">" + t3 + "</" + og + ">";
}, om = function(t3) {
  t3.write(/* @__PURE__ */ ow("")), t3.close();
  var r10 = t3.parentWindow.Object;
  return t3 = null, r10;
}, oA = function() {
  var t3, r10 = /* @__PURE__ */ _("iframe");
  return r10.style.display = "none", oh.appendChild(r10), // https://github.com/zloirock/core-js/issues/475
  r10.src = /* @__PURE__ */ String("java" + og + ":"), (t3 = r10.contentWindow.document).open(), t3.write(/* @__PURE__ */ ow("document.F=Object")), t3.close(), t3.F;
}, ox = function() {
  try {
    p = new ActiveXObject("htmlfile");
  } catch (t4) {
  }
  ox = "undefined" != typeof document ? document.domain && p ? om(p) : oA() : om(p);
  for (var t3 = r5.length; t3--; )
    delete ox[od][r5[t3]];
  return ox();
};
tZ[ov] = true;
var oE = Object.create || function(t3, r10) {
  var e3;
  return null !== t3 ? (ob[od] = /* @__PURE__ */ D(t3), e3 = new ob(), ob[od] = null, // add "__proto__" for Object.getPrototypeOf polyfill
  e3[ov] = t3) : e3 = /* @__PURE__ */ ox(), void 0 === r10 ? e3 : op.f(e3, r10);
}, oO = /* @__PURE__ */ tR("iterator");
[].keys && "next" in (d = /* @__PURE__ */ [].keys()) && (h = /* @__PURE__ */ nb(/* @__PURE__ */ nb(d))) !== Object.prototype && (y = h), (!I(y) || E(function() {
  var t3 = {};
  return y[oO].call(t3) !== t3;
})) && (y = {}), A(y[oO]) || ra(y, oO, function() {
  return this;
});
var oT = y, oS = function() {
}, oj = [], oI = /* @__PURE__ */ W("Reflect", "construct"), oR = /^\s*(?:class|function)\b/, oP = /* @__PURE__ */ V(oR.exec), o_ = !oR.test(oS), ok = function(t3) {
  if (!A(t3))
    return false;
  try {
    return oI(oS, oj, t3), true;
  } catch (t4) {
    return false;
  }
}, oM = function(t3) {
  if (!A(t3))
    return false;
  switch (rb(t3)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return false;
  }
  try {
    return o_ || !!oP(oR, /* @__PURE__ */ tG(t3));
  } catch (t4) {
    return true;
  }
};
oM.sham = true;
var oC = !oI || E(function() {
  var t3;
  return ok(ok.call) || !ok(Object) || !ok(function() {
    t3 = true;
  }) || t3;
}) ? oM : ok, oF = TypeError, oD = function(t3) {
  if (oC(t3))
    return t3;
  throw new oF(to(t3) + " is not a constructor");
}, oL = /* @__PURE__ */ tR("species"), oU = /* @__PURE__ */ V("".charAt), oz = /* @__PURE__ */ V("".charCodeAt), oW = /* @__PURE__ */ V("".slice), o$ = function(t3) {
  return function(r10, e3) {
    var n10, o10, i2 = /* @__PURE__ */ rm(/* @__PURE__ */ tv(r10)), u2 = /* @__PURE__ */ rQ(e3), a2 = i2.length;
    return u2 < 0 || u2 >= a2 ? t3 ? "" : void 0 : (n10 = /* @__PURE__ */ oz(i2, u2)) < 55296 || n10 > 56319 || u2 + 1 === a2 || (o10 = /* @__PURE__ */ oz(i2, u2 + 1)) < 56320 || o10 > 57343 ? t3 ? oU(i2, u2) : n10 : t3 ? oW(i2, u2, u2 + 2) : (n10 - 55296 << 10) + (o10 - 56320) + 65536;
  };
}, oB = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: /* @__PURE__ */ o$(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: /* @__PURE__ */ o$(true)
}.charAt, oN = S.RegExp, oV = /* @__PURE__ */ E(function() {
  var t3 = /* @__PURE__ */ oN("a", "y");
  return t3.lastIndex = 2, null !== t3.exec("abcd");
}), oY = (oV || E(function() {
  return !oN("a", "y").sticky;
}), oV || E(function() {
  var t3 = /* @__PURE__ */ oN("^r", "gy");
  return t3.lastIndex = 2, null !== t3.exec("str");
})), oG = S.RegExp, oH = /* @__PURE__ */ E(function() {
  var t3 = /* @__PURE__ */ oG(".", "s");
  return !(t3.dotAll && t3.test("\n") && "s" === t3.flags);
}), oq = S.RegExp, oK = /* @__PURE__ */ E(function() {
  var t3 = /* @__PURE__ */ oq("(?<a>b)", "g");
  return "b" !== t3.exec("b").groups.a || "bc" !== "b".replace(t3, "$<a>c");
}), oX = t9.get, oJ = /* @__PURE__ */ td("native-string-replace", String.prototype.replace), oQ = RegExp.prototype.exec, oZ = oQ, o0 = /* @__PURE__ */ V("".charAt), o1 = /* @__PURE__ */ V("".indexOf), o2 = /* @__PURE__ */ V("".replace), o4 = /* @__PURE__ */ V("".slice), o3 = (e = /b*/g, z(oQ, r = /a/, "a"), z(oQ, e, "a"), 0 !== r.lastIndex || 0 !== e.lastIndex), o9 = void 0 !== /()??/.exec("")[1];
(o3 || o9 || oY || oH || oK) && (oZ = function(t3) {
  var r10, e3, n10, o10, i2, u2, a2, c2 = /* @__PURE__ */ oX(this), f2 = /* @__PURE__ */ rm(t3), l2 = c2.raw;
  if (l2)
    return l2.lastIndex = this.lastIndex, r10 = /* @__PURE__ */ z(oZ, l2, f2), this.lastIndex = l2.lastIndex, r10;
  var s2 = c2.groups, p2 = oY && this.sticky, y2 = /* @__PURE__ */ z(e6, this), h2 = this.source, d2 = 0, g2 = f2;
  if (p2 && (-1 === o1(y2 = /* @__PURE__ */ o2(y2, "y", ""), "g") && (y2 += "g"), g2 = /* @__PURE__ */ o4(f2, this.lastIndex), this.lastIndex > 0 && (!this.multiline || this.multiline && "\n" !== o0(f2, this.lastIndex - 1)) && (h2 = "(?: " + h2 + ")", g2 = " " + g2, d2++), // ^(? + rx + ) is needed, in combination with some str slicing, to
  // simulate the 'y' flag.
  e3 = RegExp("^(?:" + h2 + ")", y2)), o9 && (e3 = RegExp("^" + h2 + "$(?!\\s)", y2)), o3 && (n10 = this.lastIndex), o10 = /* @__PURE__ */ z(oQ, p2 ? e3 : this, g2), p2 ? o10 ? (o10.input = /* @__PURE__ */ o4(o10.input, d2), o10[0] = /* @__PURE__ */ o4(o10[0], d2), o10.index = this.lastIndex, this.lastIndex += o10[0].length) : this.lastIndex = 0 : o3 && o10 && (this.lastIndex = this.global ? o10.index + o10[0].length : n10), o9 && o10 && o10.length > 1 && // Fix browsers whose `exec` methods don't consistently return `undefined`
  // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
  z(oJ, o10[0], e3, function() {
    for (i2 = 1; i2 < arguments.length - 2; i2++)
      void 0 === arguments[i2] && (o10[i2] = void 0);
  }), o10 && s2)
    for (i2 = 0, o10.groups = u2 = /* @__PURE__ */ oE(null); i2 < s2.length; i2++)
      u2[(a2 = s2[i2])[0]] = o10[a2[1]];
  return o10;
});
var o7 = oZ, o6 = TypeError, o8 = function(t3, r10) {
  return { value: t3, done: r10 };
}, o5 = function(t3, r10) {
  var e3, n10 = D(t3).constructor;
  return void 0 === n10 || ta(e3 = D(n10)[oL]) ? r10 : oD(e3);
}, it = function(t3, r10) {
  var e3 = t3.exec;
  if (A(e3)) {
    var n10 = /* @__PURE__ */ z(e3, t3, r10);
    return null !== n10 && D(n10), n10;
  }
  if ("RegExp" === ry(t3))
    return z(o7, t3, r10);
  throw new o6("RegExp#exec called on incompatible receiver");
}, ir = /* @__PURE__ */ tR("matchAll"), ie = "RegExp String", io = ie + " Iterator", ii = t9.set, iu = /* @__PURE__ */ t9.getterFor(io), ia = RegExp.prototype, ic = TypeError, il = /* @__PURE__ */ nW("".indexOf), is = /* @__PURE__ */ nW("".matchAll), ip = !!is && !E(function() {
  is("a", /./);
}), iy = ((n = function(t3, r10, e3, n10) {
  ii(this, { type: io, regexp: t3, string: r10, global: e3, unicode: n10, done: false });
}).prototype = /* @__PURE__ */ oE(oT, { next: /* @__PURE__ */ tK(1, function() {
  var t3, r10 = /* @__PURE__ */ iu(this);
  if (r10.done)
    return o8(void 0, true);
  var e3 = r10.regexp, n10 = r10.string, o10 = /* @__PURE__ */ it(e3, n10);
  return null === o10 ? (r10.done = true, o8(void 0, true)) : (r10.global ? "" === rm(o10[0]) && (e3.lastIndex = (t3 = /* @__PURE__ */ r2(e3.lastIndex)) + (r10.unicode ? oB(n10, t3).length : 1)) : r10.done = true, o8(o10, false));
}) }), eK(n, ie + " Iterator", false), n);
ep({ target: "String", proto: true, forced: ip }, { matchAll: function(t3) {
  var r10, e3, n10 = /* @__PURE__ */ tv(this);
  if (ta(t3)) {
    if (ip)
      return is(n10, t3);
  } else {
    if (e7(t3) && !~il(/* @__PURE__ */ rm(/* @__PURE__ */ tv(/* @__PURE__ */ e5(t3))), "g"))
      throw new ic("`.matchAll` does not allow non-global regexes");
    if (ip)
      return is(n10, t3);
    if (e3 = /* @__PURE__ */ tc(t3, ir))
      return z(e3, t3, n10);
  }
  return r10 = /* @__PURE__ */ rm(n10), RegExp(t3, "g")[ir](r10);
} }), ir in ia || ra(ia, ir, function(t3) {
  var r10, e3, n10, o10 = /* @__PURE__ */ D(this), i2 = /* @__PURE__ */ rm(t3), u2 = /* @__PURE__ */ o5(o10, RegExp), a2 = /* @__PURE__ */ rm(/* @__PURE__ */ e5(o10));
  return r10 = new u2(u2 === RegExp ? o10.source : o10, a2), e3 = !!~il(a2, "g"), n10 = !!~il(a2, "u"), r10.lastIndex = /* @__PURE__ */ r2(o10.lastIndex), new iy(r10, i2, e3, n10);
});
export {
  v as g
};
