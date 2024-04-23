import { a as r } from "./vendor--copy-to-clipboard.0-XIsMJU.chunk.js";
var e, t, n, o, a, i, c, u, f, s, l, p, y, h, d, v = "object" == typeof document && document.all, g = void 0 === v && void 0 !== v ? function(r10) {
  return "function" == typeof r10 || r10 === v;
} : function(r10) {
  return "function" == typeof r10;
}, b = {}, m = function(r10) {
  try {
    return !!r10();
  } catch (r11) {
    return true;
  }
}, w = !m(function() {
  return 7 !== Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1];
}), E = function(r10) {
  return r10 && r10.Math === Math && r10;
}, A = E("object" == typeof globalThis && globalThis) || E("object" == typeof window && window) || E("object" == typeof self && self) || E("object" == typeof r && r) || E("object" == typeof r && r) || /* @__PURE__ */ function() {
  return this;
}() || Function("return this")(), O = function(r10) {
  return "object" == typeof r10 ? null !== r10 : g(r10);
}, R = A.document, T = O(R) && O(R.createElement), S = !w && !m(function() {
  return 7 !== Object.defineProperty(T ? R.createElement("div") : {}, "a", { get: function() {
    return 7;
  } }).a;
}), I = w && m(function() {
  return 42 !== Object.defineProperty(function() {
  }, "prototype", { value: 42, writable: false }).prototype;
}), _ = String, k = TypeError, D = function(r10) {
  if (O(r10))
    return r10;
  throw new k(_(r10) + " is not an object");
}, M = !m(function() {
  var r10 = (function() {
  }).bind();
  return "function" != typeof r10 || r10.hasOwnProperty("prototype");
}), j = Function.prototype.call, C = M ? j.bind(j) : function() {
  return j.apply(j, arguments);
}, x = function(r10, e10) {
  var t10;
  return arguments.length < 2 ? g(t10 = A[r10]) ? t10 : void 0 : A[r10] && A[r10][e10];
}, P = Function.prototype, L = P.call, N = M && P.bind.bind(L, L), U = M ? N : function(r10) {
  return function() {
    return L.apply(r10, arguments);
  };
}, F = U({}.isPrototypeOf), B = "undefined" != typeof navigator && String(navigator.userAgent) || "", V = A.process, z = A.Deno, W = V && V.versions || z && z.version, H = W && W.v8;
H && (a = (o = H.split("."))[0] > 0 && o[0] < 4 ? 1 : +(o[0] + o[1])), !a && B && (!(o = B.match(/Edge\/(\d+)/)) || o[1] >= 74) && (o = B.match(/Chrome\/(\d+)/)) && (a = +o[1]);
var Y = a, G = A.String, $ = !!Object.getOwnPropertySymbols && !m(function() {
  var r10 = Symbol("symbol detection");
  return !G(r10) || !(Object(r10) instanceof Symbol) || !Symbol.sham && Y && Y < 41;
}), Q = $ && !Symbol.sham && "symbol" == typeof Symbol.iterator, q = Object, K = Q ? function(r10) {
  return "symbol" == typeof r10;
} : function(r10) {
  var e10 = x("Symbol");
  return g(e10) && F(e10.prototype, q(r10));
}, X = String, Z = function(r10) {
  try {
    return X(r10);
  } catch (r11) {
    return "Object";
  }
}, J = TypeError, rr = function(r10) {
  if (g(r10))
    return r10;
  throw new J(Z(r10) + " is not a function");
}, re = function(r10) {
  return null == r10;
}, rt = function(r10, e10) {
  var t10 = r10[e10];
  return re(t10) ? void 0 : rr(t10);
}, rn = TypeError, ro = { exports: {} }, ra = Object.defineProperty, ri = function(r10, e10) {
  try {
    ra(A, r10, { value: e10, configurable: true, writable: true });
  } catch (t10) {
    A[r10] = e10;
  }
  return e10;
}, rc = "__core-js_shared__", ru = ro.exports = A[rc] || ri(rc, {});
(ru.versions || (ru.versions = [])).push({ version: "3.37.0", mode: "global", copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.37.0/LICENSE", source: "https://github.com/zloirock/core-js" });
var rf = ro.exports, rs = function(r10, e10) {
  return rf[r10] || (rf[r10] = e10 || {});
}, rl = TypeError, rp = function(r10) {
  if (re(r10))
    throw new rl("Can't call method on " + r10);
  return r10;
}, ry = Object, rh = function(r10) {
  return ry(rp(r10));
}, rd = U({}.hasOwnProperty), rv = Object.hasOwn || function(r10, e10) {
  return rd(rh(r10), e10);
}, rg = 0, rb = Math.random(), rm = U(1 .toString), rw = function(r10) {
  return "Symbol(" + (void 0 === r10 ? "" : r10) + ")_" + rm(++rg + rb, 36);
}, rE = A.Symbol, rA = rs("wks"), rO = Q ? rE.for || rE : rE && rE.withoutSetter || rw, rR = function(r10) {
  return rv(rA, r10) || (rA[r10] = $ && rv(rE, r10) ? rE[r10] : rO("Symbol." + r10)), rA[r10];
}, rT = function(r10, e10) {
  var t10, n10;
  if ("string" === e10 && g(t10 = r10.toString) && !O(n10 = C(t10, r10)) || g(t10 = r10.valueOf) && !O(n10 = C(t10, r10)) || "string" !== e10 && g(t10 = r10.toString) && !O(n10 = C(t10, r10)))
    return n10;
  throw new rn("Can't convert object to primitive value");
}, rS = TypeError, rI = rR("toPrimitive"), r_ = function(r10, e10) {
  if (!O(r10) || K(r10))
    return r10;
  var t10, n10 = rt(r10, rI);
  if (n10) {
    if (void 0 === e10 && (e10 = "default"), !O(t10 = C(n10, r10, e10)) || K(t10))
      return t10;
    throw new rS("Can't convert object to primitive value");
  }
  return void 0 === e10 && (e10 = "number"), rT(r10, e10);
}, rk = function(r10) {
  var e10 = r_(r10, "string");
  return K(e10) ? e10 : e10 + "";
}, rD = TypeError, rM = Object.defineProperty, rj = Object.getOwnPropertyDescriptor, rC = "enumerable", rx = "configurable", rP = "writable";
b.f = w ? I ? function(r10, e10, t10) {
  if (D(r10), e10 = rk(e10), D(t10), "function" == typeof r10 && "prototype" === e10 && "value" in t10 && rP in t10 && !t10[rP]) {
    var n10 = rj(r10, e10);
    n10 && n10[rP] && (r10[e10] = t10.value, t10 = { configurable: rx in t10 ? t10[rx] : n10[rx], enumerable: rC in t10 ? t10[rC] : n10[rC], writable: false });
  }
  return rM(r10, e10, t10);
} : rM : function(r10, e10, t10) {
  if (D(r10), e10 = rk(e10), D(t10), S)
    try {
      return rM(r10, e10, t10);
    } catch (r11) {
    }
  if ("get" in t10 || "set" in t10)
    throw new rD("Accessors not supported");
  return "value" in t10 && (r10[e10] = t10.value), r10;
};
var rL = { exports: {} }, rN = Function.prototype, rU = w && Object.getOwnPropertyDescriptor, rF = rv(rN, "name") && (!w || w && rU(rN, "name").configurable), rB = U(Function.toString);
g(rf.inspectSource) || (rf.inspectSource = function(r10) {
  return rB(r10);
});
var rV = rf.inspectSource, rz = A.WeakMap, rW = g(rz) && /native code/.test(String(rz)), rH = function(r10, e10) {
  return { enumerable: !(1 & r10), configurable: !(2 & r10), writable: !(4 & r10), value: e10 };
}, rY = w ? function(r10, e10, t10) {
  return b.f(r10, e10, rH(1, t10));
} : function(r10, e10, t10) {
  return r10[e10] = t10, r10;
}, rG = rs("keys"), r$ = function(r10) {
  return rG[r10] || (rG[r10] = rw(r10));
}, rQ = {}, rq = "Object already initialized", rK = A.TypeError, rX = A.WeakMap;
if (rW || rf.state) {
  var rZ = rf.state || (rf.state = new rX());
  rZ.get = rZ.get, rZ.has = rZ.has, rZ.set = rZ.set, i = function(r10, e10) {
    if (rZ.has(r10))
      throw new rK(rq);
    return e10.facade = r10, rZ.set(r10, e10), e10;
  }, c = function(r10) {
    return rZ.get(r10) || {};
  }, u = function(r10) {
    return rZ.has(r10);
  };
} else {
  var rJ = r$("state");
  rQ[rJ] = true, i = function(r10, e10) {
    if (rv(r10, rJ))
      throw new rK(rq);
    return e10.facade = r10, rY(r10, rJ, e10), e10;
  }, c = function(r10) {
    return rv(r10, rJ) ? r10[rJ] : {};
  }, u = function(r10) {
    return rv(r10, rJ);
  };
}
var r0 = c, r1 = function(r10) {
  return u(r10) ? c(r10) : i(r10, {});
}, r2 = String, r4 = Object.defineProperty, r7 = U("".slice), r8 = U("".replace), r9 = U([].join), r3 = w && !m(function() {
  return 8 !== r4(function() {
  }, "length", { value: 8 }).length;
}), r6 = String(String).split("String"), r5 = rL.exports = function(r10, e10, t10) {
  "Symbol(" === r7(r2(e10), 0, 7) && (e10 = "[" + r8(r2(e10), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), t10 && t10.getter && (e10 = "get " + e10), t10 && t10.setter && (e10 = "set " + e10), (!rv(r10, "name") || rF && r10.name !== e10) && (w ? r4(r10, "name", { value: e10, configurable: true }) : r10.name = e10), r3 && t10 && rv(t10, "arity") && r10.length !== t10.arity && r4(r10, "length", { value: t10.arity });
  try {
    t10 && rv(t10, "constructor") && t10.constructor ? w && r4(r10, "prototype", { writable: false }) : r10.prototype && (r10.prototype = void 0);
  } catch (r11) {
  }
  var n10 = r1(r10);
  return rv(n10, "source") || (n10.source = r9(r6, "string" == typeof e10 ? e10 : "")), r10;
};
Function.prototype.toString = r5(function() {
  return g(this) && r0(this).source || rV(this);
}, "toString");
var er = rL.exports, ee = function(r10, e10, t10, n10) {
  n10 || (n10 = {});
  var o10 = n10.enumerable, a2 = void 0 !== n10.name ? n10.name : e10;
  if (g(t10) && er(t10, a2, n10), n10.global)
    o10 ? r10[e10] = t10 : ri(e10, t10);
  else {
    try {
      n10.unsafe ? r10[e10] && (o10 = true) : delete r10[e10];
    } catch (r11) {
    }
    o10 ? r10[e10] = t10 : b.f(r10, e10, { value: t10, enumerable: false, configurable: !n10.nonConfigurable, writable: !n10.nonWritable });
  }
  return r10;
}, et = rR("toStringTag"), en = {};
en[et] = "z";
var eo = "[object z]" === String(en), ea = U({}.toString), ei = U("".slice), ec = function(r10) {
  return ei(ea(r10), 8, -1);
}, eu = rR("toStringTag"), ef = Object, es = "Arguments" === ec(/* @__PURE__ */ function() {
  return arguments;
}()), el = function(r10, e10) {
  try {
    return r10[e10];
  } catch (r11) {
  }
}, ep = eo ? ec : function(r10) {
  var e10, t10, n10;
  return void 0 === r10 ? "Undefined" : null === r10 ? "Null" : "string" == typeof (t10 = el(e10 = ef(r10), eu)) ? t10 : es ? ec(e10) : "Object" === (n10 = ec(e10)) && g(e10.callee) ? "Arguments" : n10;
}, ey = String, eh = function(r10) {
  if ("Symbol" === ep(r10))
    throw TypeError("Cannot convert a Symbol value to a string");
  return ey(r10);
}, ed = TypeError, ev = function(r10, e10) {
  if (r10 < e10)
    throw new ed("Not enough arguments");
  return r10;
}, eg = URLSearchParams, eb = eg.prototype, em = U(eb.append), ew = U(eb.delete), eE = U(eb.forEach), eA = U([].push), eO = new eg("a=1&a=2&b=3");
eO.delete("a", 1), eO.delete("b", void 0), eO + "" != "a=2" && ee(eb, "delete", function(r10) {
  var e10, t10 = arguments.length, n10 = t10 < 2 ? void 0 : arguments[1];
  if (t10 && void 0 === n10)
    return ew(this, r10);
  var o10 = [];
  eE(this, function(r11, e11) {
    eA(o10, { key: e11, value: r11 });
  }), ev(t10, 1);
  for (var a2 = eh(r10), i2 = eh(n10), c2 = 0, u2 = 0, f2 = false, s2 = o10.length; c2 < s2; )
    e10 = o10[c2++], f2 || e10.key === a2 ? (f2 = true, ew(this, e10.key)) : u2++;
  for (; u2 < s2; )
    (e10 = o10[u2++]).key === a2 && e10.value === i2 || em(this, e10.key, e10.value);
}, { enumerable: true, unsafe: true });
var eR = URLSearchParams, eT = eR.prototype, eS = U(eT.getAll), eI = U(eT.has), e_ = new eR("a=1");
(e_.has("a", 2) || !e_.has("a", void 0)) && ee(eT, "has", function(r10) {
  var e10 = arguments.length, t10 = e10 < 2 ? void 0 : arguments[1];
  if (e10 && void 0 === t10)
    return eI(this, r10);
  var n10 = eS(this, r10);
  ev(e10, 1);
  for (var o10 = eh(t10), a2 = 0; a2 < n10.length; )
    if (n10[a2++] === o10)
      return true;
  return false;
}, { enumerable: true, unsafe: true });
var ek = function(r10, e10, t10) {
  return t10.get && er(t10.get, e10, { getter: true }), t10.set && er(t10.set, e10, { setter: true }), b.f(r10, e10, t10);
}, eD = URLSearchParams.prototype, eM = U(eD.forEach);
!w || "size" in eD || ek(eD, "size", { get: function() {
  var r10 = 0;
  return eM(this, function() {
    r10++;
  }), r10;
}, configurable: true, enumerable: true });
var ej = {}, eC = {}, ex = {}.propertyIsEnumerable, eP = Object.getOwnPropertyDescriptor, eL = eP && !ex.call({ 1: 2 }, 1);
eC.f = eL ? function(r10) {
  var e10 = eP(this, r10);
  return !!e10 && e10.enumerable;
} : ex;
var eN = Object, eU = U("".split), eF = m(function() {
  return !eN("z").propertyIsEnumerable(0);
}) ? function(r10) {
  return "String" === ec(r10) ? eU(r10, "") : eN(r10);
} : eN, eB = function(r10) {
  return eF(rp(r10));
}, eV = Object.getOwnPropertyDescriptor;
ej.f = w ? eV : function(r10, e10) {
  if (r10 = eB(r10), e10 = rk(e10), S)
    try {
      return eV(r10, e10);
    } catch (r11) {
    }
  if (rv(r10, e10))
    return rH(!C(eC.f, r10, e10), r10[e10]);
};
var ez = {}, eW = Math.ceil, eH = Math.floor, eY = Math.trunc || function(r10) {
  var e10 = +r10;
  return (e10 > 0 ? eH : eW)(e10);
}, eG = function(r10) {
  var e10 = +r10;
  return e10 != e10 || 0 === e10 ? 0 : eY(e10);
}, e$ = Math.max, eQ = Math.min, eq = Math.min, eK = function(r10) {
  var e10 = eG(r10);
  return e10 > 0 ? eq(e10, 9007199254740991) : 0;
}, eX = function(r10) {
  return eK(r10.length);
}, eZ = function(r10, e10) {
  var t10 = eG(r10);
  return t10 < 0 ? e$(t10 + e10, 0) : eQ(t10, e10);
}, eJ = function(r10) {
  return function(e10, t10, n10) {
    var o10, a2 = eB(e10), i2 = eX(a2);
    if (0 === i2)
      return !r10 && -1;
    var c2 = eZ(n10, i2);
    if (r10 && t10 != t10) {
      for (; i2 > c2; )
        if ((o10 = a2[c2++]) != o10)
          return true;
    } else
      for (; i2 > c2; c2++)
        if ((r10 || c2 in a2) && a2[c2] === t10)
          return r10 || c2 || 0;
    return !r10 && -1;
  };
}, e0 = { includes: eJ(true), indexOf: eJ(false) }.indexOf, e1 = U([].push), e2 = function(r10, e10) {
  var t10, n10 = eB(r10), o10 = 0, a2 = [];
  for (t10 in n10)
    !rv(rQ, t10) && rv(n10, t10) && e1(a2, t10);
  for (; e10.length > o10; )
    rv(n10, t10 = e10[o10++]) && (~e0(a2, t10) || e1(a2, t10));
  return a2;
}, e4 = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"].concat("length", "prototype");
ez.f = Object.getOwnPropertyNames || function(r10) {
  return e2(r10, e4);
};
var e7 = {};
e7.f = Object.getOwnPropertySymbols;
var e8 = U([].concat), e9 = x("Reflect", "ownKeys") || function(r10) {
  var e10 = ez.f(D(r10)), t10 = e7.f;
  return t10 ? e8(e10, t10(r10)) : e10;
}, e3 = function(r10, e10, t10) {
  for (var n10 = e9(e10), o10 = b.f, a2 = ej.f, i2 = 0; i2 < n10.length; i2++) {
    var c2 = n10[i2];
    rv(r10, c2) || t10 && rv(t10, c2) || o10(r10, c2, a2(e10, c2));
  }
}, e6 = /#|\.prototype\./, e5 = function(r10, e10) {
  var t10 = te[tr(r10)];
  return t10 === tn || t10 !== tt && (g(e10) ? m(e10) : !!e10);
}, tr = e5.normalize = function(r10) {
  return String(r10).replace(e6, ".").toLowerCase();
}, te = e5.data = {}, tt = e5.NATIVE = "N", tn = e5.POLYFILL = "P", to = ej.f, ta = function(r10, e10) {
  var t10, n10, o10, a2, i2, c2 = r10.target, u2 = r10.global, f2 = r10.stat;
  if (t10 = u2 ? A : f2 ? A[c2] || ri(c2, {}) : A[c2] && A[c2].prototype)
    for (n10 in e10) {
      if (a2 = e10[n10], o10 = r10.dontCallGetSet ? (i2 = to(t10, n10)) && i2.value : t10[n10], !e5(u2 ? n10 : c2 + (f2 ? "." : "#") + n10, r10.forced) && void 0 !== o10) {
        if (typeof a2 == typeof o10)
          continue;
        e3(a2, o10);
      }
      (r10.sham || o10 && o10.sham) && rY(a2, "sham", true), ee(t10, n10, a2, r10);
    }
}, ti = TypeError, tc = "Reduce of empty array with no initial value", tu = function(r10) {
  return function(e10, t10, n10, o10) {
    var a2 = rh(e10), i2 = eF(a2), c2 = eX(a2);
    if (rr(t10), 0 === c2 && n10 < 2)
      throw new ti(tc);
    var u2 = r10 ? c2 - 1 : 0, f2 = r10 ? -1 : 1;
    if (n10 < 2)
      for (; ; ) {
        if (u2 in i2) {
          o10 = i2[u2], u2 += f2;
          break;
        }
        if (u2 += f2, r10 ? u2 < 0 : c2 <= u2)
          throw new ti(tc);
      }
    for (; r10 ? u2 >= 0 : c2 > u2; u2 += f2)
      u2 in i2 && (o10 = t10(o10, i2[u2], u2, a2));
    return o10;
  };
}, tf = { left: tu(false), right: tu(true) }, ts = "process" === ec(A.process), tl = tf.left;
ta({ target: "Array", proto: true, forced: !ts && Y > 79 && Y < 83 || !((e = [].reduce) && m(function() {
  e.call(null, function() {
    return 1;
  }, 1);
})) }, { reduce: function(r10) {
  var e10 = arguments.length;
  return tl(this, r10, e10, e10 > 1 ? arguments[1] : void 0);
} });
var tp = TypeError, ty = Object.defineProperty, th = A.self !== A;
try {
  if (w) {
    var td = Object.getOwnPropertyDescriptor(A, "self");
    !th && td && td.get && td.enumerable || ek(A, "self", { get: function() {
      return A;
    }, set: function(r10) {
      if (this !== A)
        throw new tp("Illegal invocation");
      ty(A, "self", { value: r10, writable: true, configurable: true, enumerable: true });
    }, configurable: true, enumerable: true });
  } else
    ta({ global: true, simple: true, forced: th }, { self: A });
} catch (r10) {
}
var tv = Function.prototype, tg = tv.apply, tb = tv.call, tm = "object" == typeof Reflect && Reflect.apply || (M ? tb.bind(tg) : function() {
  return tb.apply(tg, arguments);
}), tw = String, tE = TypeError, tA = function(r10, e10, t10) {
  try {
    return U(rr(Object.getOwnPropertyDescriptor(r10, e10)[t10]));
  } catch (r11) {
  }
}, tO = function(r10) {
  if (O(r10) || null === r10)
    return r10;
  throw new tE("Can't set " + tw(r10) + " as a prototype");
}, tR = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var r10, e10 = false, t10 = {};
  try {
    (r10 = tA(Object.prototype, "__proto__", "set"))(t10, []), e10 = t10 instanceof Array;
  } catch (r11) {
  }
  return function(t11, n10) {
    return rp(t11), tO(n10), O(t11) && (e10 ? r10(t11, n10) : t11.__proto__ = n10), t11;
  };
}() : void 0), tT = b.f, tS = function(r10, e10, t10) {
  var n10, o10;
  return tR && g(n10 = e10.constructor) && n10 !== t10 && O(o10 = n10.prototype) && o10 !== t10.prototype && tR(r10, o10), r10;
}, tI = function(r10, e10) {
  return void 0 === r10 ? arguments.length < 2 ? "" : e10 : eh(r10);
}, t_ = Error, tk = U("".replace), tD = String(new t_("zxcasd").stack), tM = /\n\s*at [^:]*:[^\n]*/, tj = tM.test(tD), tC = function(r10, e10) {
  if (tj && "string" == typeof r10 && !t_.prepareStackTrace)
    for (; e10--; )
      r10 = tk(r10, tM, "");
  return r10;
}, tx = !m(function() {
  var r10 = Error("a");
  return !("stack" in r10) || (Object.defineProperty(r10, "stack", rH(1, 7)), 7 !== r10.stack);
}), tP = Error.captureStackTrace, tL = function(r10, e10, t10) {
  t10 in r10 || tT(r10, t10, { configurable: true, get: function() {
    return e10[t10];
  }, set: function(r11) {
    e10[t10] = r11;
  } });
}, tN = function(r10, e10) {
  O(e10) && "cause" in e10 && rY(r10, "cause", e10.cause);
}, tU = function(r10, e10, t10, n10) {
  tx && (tP ? tP(r10, e10) : rY(r10, "stack", tC(t10, n10)));
}, tF = function(r10, e10, t10, n10) {
  var o10 = "stackTraceLimit", a2 = n10 ? 2 : 1, i2 = r10.split("."), c2 = i2[i2.length - 1], u2 = x.apply(null, i2);
  if (u2) {
    var f2 = u2.prototype;
    if (rv(f2, "cause") && delete f2.cause, !t10)
      return u2;
    var s2 = x("Error"), l2 = e10(function(r11, e11) {
      var t11 = tI(n10 ? e11 : r11, void 0), o11 = n10 ? new u2(r11) : new u2();
      return void 0 !== t11 && rY(o11, "message", t11), tU(o11, l2, o11.stack, 2), this && F(f2, this) && tS(o11, this, l2), arguments.length > a2 && tN(o11, arguments[a2]), o11;
    });
    l2.prototype = f2, "Error" !== c2 ? tR ? tR(l2, s2) : e3(l2, s2, { name: true }) : w && o10 in u2 && (tL(l2, u2, o10), tL(l2, u2, "prepareStackTrace")), e3(l2, u2);
    try {
      f2.name !== c2 && rY(f2, "name", c2), f2.constructor = l2;
    } catch (r11) {
    }
    return l2;
  }
}, tB = "WebAssembly", tV = A[tB], tz = 7 !== Error("e", { cause: 7 }).cause, tW = function(r10, e10) {
  var t10 = {};
  t10[r10] = tF(r10, e10, tz), ta({ global: true, constructor: true, arity: 1, forced: tz }, t10);
}, tH = function(r10, e10) {
  if (tV && tV[r10]) {
    var t10 = {};
    t10[r10] = tF(tB + "." + r10, e10, tz), ta({ target: tB, stat: true, constructor: true, arity: 1, forced: tz }, t10);
  }
};
tW("Error", function(r10) {
  return function(e10) {
    return tm(r10, this, arguments);
  };
}), tW("EvalError", function(r10) {
  return function(e10) {
    return tm(r10, this, arguments);
  };
}), tW("RangeError", function(r10) {
  return function(e10) {
    return tm(r10, this, arguments);
  };
}), tW("ReferenceError", function(r10) {
  return function(e10) {
    return tm(r10, this, arguments);
  };
}), tW("SyntaxError", function(r10) {
  return function(e10) {
    return tm(r10, this, arguments);
  };
}), tW("TypeError", function(r10) {
  return function(e10) {
    return tm(r10, this, arguments);
  };
}), tW("URIError", function(r10) {
  return function(e10) {
    return tm(r10, this, arguments);
  };
}), tH("CompileError", function(r10) {
  return function(e10) {
    return tm(r10, this, arguments);
  };
}), tH("LinkError", function(r10) {
  return function(e10) {
    return tm(r10, this, arguments);
  };
}), tH("RuntimeError", function(r10) {
  return function(e10) {
    return tm(r10, this, arguments);
  };
});
var tY = Array.isArray || function(r10) {
  return "Array" === ec(r10);
}, tG = TypeError, t$ = Object.getOwnPropertyDescriptor, tQ = w && !function() {
  if (void 0 !== this)
    return true;
  try {
    Object.defineProperty([], "length", { writable: false }).length = 1;
  } catch (r10) {
    return r10 instanceof TypeError;
  }
}() ? function(r10, e10) {
  if (tY(r10) && !t$(r10, "length").writable)
    throw new tG("Cannot set read only .length");
  return r10.length = e10;
} : function(r10, e10) {
  return r10.length = e10;
}, tq = TypeError, tK = function(r10) {
  if (r10 > 9007199254740991)
    throw tq("Maximum allowed index exceeded");
  return r10;
};
ta({ target: "Array", proto: true, arity: 1, forced: m(function() {
  return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
}) || !function() {
  try {
    Object.defineProperty([], "length", { writable: false }).push();
  } catch (r10) {
    return r10 instanceof TypeError;
  }
}() }, { push: function(r10) {
  var e10 = rh(this), t10 = eX(e10), n10 = arguments.length;
  tK(t10 + n10);
  for (var o10 = 0; o10 < n10; o10++)
    e10[t10] = arguments[o10], t10++;
  return tQ(e10, t10), t10;
} });
var tX = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView, tZ = !m(function() {
  function r10() {
  }
  return r10.prototype.constructor = null, Object.getPrototypeOf(new r10()) !== r10.prototype;
}), tJ = r$("IE_PROTO"), t0 = Object, t1 = t0.prototype, t2 = tZ ? t0.getPrototypeOf : function(r10) {
  var e10 = rh(r10);
  if (rv(e10, tJ))
    return e10[tJ];
  var t10 = e10.constructor;
  return g(t10) && e10 instanceof t10 ? t10.prototype : e10 instanceof t0 ? t1 : null;
}, t4 = A.Int8Array, t7 = t4 && t4.prototype, t8 = A.Uint8ClampedArray, t9 = t8 && t8.prototype, t3 = t4 && t2(t4), t6 = t7 && t2(t7), t5 = Object.prototype, nr = A.TypeError, ne = rR("toStringTag"), nt = rw("TYPED_ARRAY_TAG"), nn = "TypedArrayConstructor", no = tX && !!tR && "Opera" !== ep(A.opera), na = false, ni = { Int8Array: 1, Uint8Array: 1, Uint8ClampedArray: 1, Int16Array: 2, Uint16Array: 2, Int32Array: 4, Uint32Array: 4, Float32Array: 4, Float64Array: 8 }, nc = { BigInt64Array: 8, BigUint64Array: 8 }, nu = function(r10) {
  var e10 = t2(r10);
  if (O(e10)) {
    var t10 = r0(e10);
    return t10 && rv(t10, nn) ? t10[nn] : nu(e10);
  }
}, nf = function(r10) {
  if (!O(r10))
    return false;
  var e10 = ep(r10);
  return rv(ni, e10) || rv(nc, e10);
};
for (f in ni)
  (l = (s = A[f]) && s.prototype) ? r1(l)[nn] = s : no = false;
for (f in nc)
  (l = (s = A[f]) && s.prototype) && (r1(l)[nn] = s);
if ((!no || !g(t3) || t3 === Function.prototype) && (t3 = function() {
  throw new nr("Incorrect invocation");
}, no))
  for (f in ni)
    A[f] && tR(A[f], t3);
if ((!no || !t6 || t6 === t5) && (t6 = t3.prototype, no))
  for (f in ni)
    A[f] && tR(A[f].prototype, t6);
if (no && t2(t9) !== t6 && tR(t9, t6), w && !rv(t6, ne))
  for (f in ek(t6, ne, { configurable: true, get: function() {
    return O(this) ? this[nt] : void 0;
  } }), ni)
    A[f] && rY(A[f], nt, f);
var ns = { NATIVE_ARRAY_BUFFER_VIEWS: no, aTypedArray: function(r10) {
  if (nf(r10))
    return r10;
  throw new nr("Target is not a typed array");
}, exportTypedArrayMethod: function(r10, e10, t10, n10) {
  if (w) {
    if (t10)
      for (var o10 in ni) {
        var a2 = A[o10];
        if (a2 && rv(a2.prototype, r10))
          try {
            delete a2.prototype[r10];
          } catch (t11) {
            try {
              a2.prototype[r10] = e10;
            } catch (r11) {
            }
          }
      }
    (!t6[r10] || t10) && ee(t6, r10, t10 ? e10 : no && t7[r10] || e10, n10);
  }
}, getTypedArrayConstructor: nu, TypedArrayPrototype: t6 }, nl = ns.aTypedArray;
(0, ns.exportTypedArrayMethod)("at", function(r10) {
  var e10 = nl(this), t10 = eX(e10), n10 = eG(r10), o10 = n10 >= 0 ? n10 : t10 + n10;
  return o10 < 0 || o10 >= t10 ? void 0 : e10[o10];
});
var np = function(r10) {
  if ("Function" === ec(r10))
    return U(r10);
}, ny = np(np.bind), nh = function(r10, e10) {
  return rr(r10), void 0 === e10 ? r10 : M ? ny(r10, e10) : function() {
    return r10.apply(e10, arguments);
  };
}, nd = function(r10) {
  var e10 = 1 === r10;
  return function(t10, n10, o10) {
    for (var a2, i2 = rh(t10), c2 = eF(i2), u2 = eX(c2), f2 = nh(n10, o10); u2-- > 0; )
      if (f2(a2 = c2[u2], u2, i2))
        switch (r10) {
          case 0:
            return a2;
          case 1:
            return u2;
        }
    return e10 ? -1 : void 0;
  };
}, nv = { findLast: nd(0), findLastIndex: nd(1) }, ng = nv.findLast, nb = ns.aTypedArray;
(0, ns.exportTypedArrayMethod)("findLast", function(r10) {
  return ng(nb(this), r10, arguments.length > 1 ? arguments[1] : void 0);
});
var nm = nv.findLastIndex, nw = ns.aTypedArray;
(0, ns.exportTypedArrayMethod)("findLastIndex", function(r10) {
  return nm(nw(this), r10, arguments.length > 1 ? arguments[1] : void 0);
});
var nE = RangeError, nA = function(r10) {
  var e10 = eG(r10);
  if (e10 < 0)
    throw new nE("The argument can't be less than 0");
  return e10;
}, nO = RangeError, nR = function(r10, e10) {
  var t10 = nA(r10);
  if (t10 % e10)
    throw new nO("Wrong offset");
  return t10;
}, nT = A.RangeError, nS = A.Int8Array, nI = nS && nS.prototype, n_ = nI && nI.set, nk = ns.aTypedArray, nD = ns.exportTypedArrayMethod, nM = !m(function() {
  var r10 = new Uint8ClampedArray(2);
  return C(n_, r10, { length: 1, 0: 3 }, 1), 3 !== r10[1];
}), nj = nM && ns.NATIVE_ARRAY_BUFFER_VIEWS && m(function() {
  var r10 = new nS(2);
  return r10.set(1), r10.set("2", 1), 0 !== r10[0] || 2 !== r10[1];
});
nD("set", function(r10) {
  nk(this);
  var e10 = nR(arguments.length > 1 ? arguments[1] : void 0, 1), t10 = rh(r10);
  if (nM)
    return C(n_, this, t10, e10);
  var n10 = this.length, o10 = eX(t10), a2 = 0;
  if (o10 + e10 > n10)
    throw new nT("Wrong length");
  for (; a2 < o10; )
    this[e10 + a2] = t10[a2++];
}, !nM || nj);
var nC = function(r10, e10) {
  for (var t10 = eX(r10), n10 = new e10(t10), o10 = 0; o10 < t10; o10++)
    n10[o10] = r10[t10 - o10 - 1];
  return n10;
}, nx = ns.aTypedArray, nP = ns.exportTypedArrayMethod, nL = ns.getTypedArrayConstructor;
nP("toReversed", function() {
  return nC(nx(this), nL(this));
});
var nN = function(r10, e10, t10) {
  for (var n10 = 0, o10 = arguments.length > 2 ? t10 : eX(e10), a2 = new r10(o10); o10 > n10; )
    a2[n10] = e10[n10++];
  return a2;
}, nU = ns.aTypedArray, nF = ns.getTypedArrayConstructor, nB = ns.exportTypedArrayMethod, nV = U(ns.TypedArrayPrototype.sort);
nB("toSorted", function(r10) {
  void 0 !== r10 && rr(r10);
  var e10 = nU(this);
  return nV(nN(nF(e10), e10), r10);
});
var nz = RangeError, nW = TypeError, nH = function(r10, e10, t10, n10) {
  var o10 = eX(r10), a2 = eG(t10), i2 = a2 < 0 ? o10 + a2 : a2;
  if (i2 >= o10 || i2 < 0)
    throw new nz("Incorrect index");
  for (var c2 = new e10(o10), u2 = 0; u2 < o10; u2++)
    c2[u2] = u2 === i2 ? n10 : r10[u2];
  return c2;
}, nY = function(r10) {
  var e10 = ep(r10);
  return "BigInt64Array" === e10 || "BigUint64Array" === e10;
}, nG = function(r10) {
  var e10 = r_(r10, "number");
  if ("number" == typeof e10)
    throw new nW("Can't convert number to bigint");
  return BigInt(e10);
}, n$ = ns.aTypedArray, nQ = ns.getTypedArrayConstructor;
(0, ns.exportTypedArrayMethod)("with", { with: function(r10, e10) {
  var t10 = n$(this), n10 = eG(r10), o10 = nY(t10) ? nG(e10) : +e10;
  return nH(t10, nQ(t10), n10, o10);
} }.with, !function() {
  try {
    new Int8Array(1).with(2, { valueOf: function() {
      throw 8;
    } });
  } catch (r10) {
    return 8 === r10;
  }
}());
var nq = b.f, nK = rR("toStringTag");
ta({ global: true }, { Reflect: {} }), t = A.Reflect, n = "Reflect", t && !rv(t, nK) && nq(t, nK, { configurable: true, value: n });
var nX = function() {
}, nZ = x("Reflect", "construct"), nJ = /^\s*(?:class|function)\b/, n0 = U(nJ.exec), n1 = !nJ.test(nX), n2 = function(r10) {
  if (!g(r10))
    return false;
  try {
    return nZ(nX, [], r10), true;
  } catch (r11) {
    return false;
  }
}, n4 = function(r10) {
  if (!g(r10))
    return false;
  switch (ep(r10)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return false;
  }
  try {
    return n1 || !!n0(nJ, rV(r10));
  } catch (r11) {
    return true;
  }
};
n4.sham = true;
var n7 = !nZ || m(function() {
  var r10;
  return n2(n2.call) || !n2(Object) || !n2(function() {
    r10 = true;
  }) || r10;
}) ? n4 : n2, n8 = {}, n9 = rR("iterator"), n3 = Array.prototype, n6 = rR("iterator"), n5 = function(r10) {
  if (!re(r10))
    return rt(r10, n6) || rt(r10, "@@iterator") || n8[ep(r10)];
}, or = TypeError, oe = function(r10, e10) {
  var t10 = arguments.length < 2 ? n5(r10) : e10;
  if (rr(t10))
    return D(C(t10, r10));
  throw new or(Z(r10) + " is not iterable");
}, ot = function(r10, e10, t10) {
  var n10, o10;
  D(r10);
  try {
    if (!(n10 = rt(r10, "return"))) {
      if ("throw" === e10)
        throw t10;
      return t10;
    }
    n10 = C(n10, r10);
  } catch (r11) {
    o10 = true, n10 = r11;
  }
  if ("throw" === e10)
    throw t10;
  if (o10)
    throw n10;
  return D(n10), t10;
}, on = TypeError, oo = function(r10, e10) {
  this.stopped = r10, this.result = e10;
}, oa = oo.prototype, oi = function() {
  var r10 = D(this), e10 = "";
  return r10.hasIndices && (e10 += "d"), r10.global && (e10 += "g"), r10.ignoreCase && (e10 += "i"), r10.multiline && (e10 += "m"), r10.dotAll && (e10 += "s"), r10.unicode && (e10 += "u"), r10.unicodeSets && (e10 += "v"), r10.sticky && (e10 += "y"), e10;
}, oc = RegExp.prototype, ou = function(r10) {
  var e10 = r10.flags;
  return void 0 === e10 && !("flags" in oc) && !rv(r10, "flags") && F(oc, r10) ? C(oi, r10) : e10;
}, of = Map.prototype, os = { Map, set: U(of.set), get: U(of.get), has: U(of.has), remove: U(of.delete), proto: of }, ol = Set.prototype, op = { Set, add: U(ol.add), has: U(ol.has), remove: U(ol.delete), proto: ol }, oy = op.Set, oh = op.proto, od = U(oh.forEach), ov = (U(oh.keys)(new oy()).next, "object" == typeof Deno && Deno && "object" == typeof Deno.version), og = !ov && !ts && "object" == typeof window && "object" == typeof document, ob = A.structuredClone, om = !!ob && !m(function() {
  if (ov && Y > 92 || ts && Y > 94 || og && Y > 97)
    return false;
  var r10 = new ArrayBuffer(8), e10 = ob(r10, { transfer: [r10] });
  return 0 !== r10.byteLength || 8 !== e10.byteLength;
}), ow = A.structuredClone, oE = A.ArrayBuffer, oA = A.MessageChannel, oO = false;
if (om)
  oO = function(r10) {
    ow(r10, { transfer: [r10] });
  };
else if (oE)
  try {
    !oA && (p = function(r10) {
      try {
        if (ts)
          return Function('return require("' + r10 + '")')();
      } catch (r11) {
      }
    }("worker_threads")) && (oA = p.MessageChannel), oA && (y = new oA(), h = new oE(2), d = function(r10) {
      y.port1.postMessage(null, [r10]);
    }, 2 === h.byteLength && (d(h), 0 === h.byteLength && (oO = d)));
  } catch (r10) {
  }
var oR = oO, oT = function(r10, e10, t10) {
  var n10, o10, a2, i2, c2, u2, f2, s2 = t10 && t10.that, l2 = !!(t10 && t10.AS_ENTRIES), p2 = !!(t10 && t10.IS_RECORD), y2 = !!(t10 && t10.IS_ITERATOR), h2 = !!(t10 && t10.INTERRUPTED), d2 = nh(e10, s2), v2 = function(r11) {
    return n10 && ot(n10, "normal", r11), new oo(true, r11);
  }, g2 = function(r11) {
    return l2 ? (D(r11), h2 ? d2(r11[0], r11[1], v2) : d2(r11[0], r11[1])) : h2 ? d2(r11, v2) : d2(r11);
  };
  if (p2)
    n10 = r10.iterator;
  else if (y2)
    n10 = r10;
  else {
    if (!(o10 = n5(r10)))
      throw new on(Z(r10) + " is not iterable");
    if (void 0 !== o10 && (n8.Array === o10 || n3[n9] === o10)) {
      for (a2 = 0, i2 = eX(r10); i2 > a2; a2++)
        if ((c2 = g2(r10[a2])) && F(oa, c2))
          return c2;
      return new oo(false);
    }
    n10 = oe(r10, o10);
  }
  for (u2 = p2 ? r10.next : n10.next; !(f2 = C(u2, n10)).done; ) {
    try {
      c2 = g2(f2.value);
    } catch (r11) {
      ot(n10, "throw", r11);
    }
    if ("object" == typeof c2 && c2 && F(oa, c2))
      return c2;
  }
  return new oo(false);
}, oS = function(r10, e10, t10) {
  w ? b.f(r10, e10, rH(0, t10)) : r10[e10] = t10;
}, oI = A.Object, o_ = A.Array, ok = A.Date, oD = A.Error, oM = A.TypeError, oj = A.PerformanceMark, oC = x("DOMException"), ox = os.Map, oP = os.has, oL = os.get, oN = os.set, oU = op.Set, oF = op.add, oB = op.has, oV = x("Object", "keys"), oz = U([].push), oW = U(true.valueOf), oH = U(1 .valueOf), oY = U("".valueOf), oG = U(ok.prototype.getTime), o$ = rw("structuredClone"), oQ = "DataCloneError", oq = "Transferring", oK = function(r10) {
  return !m(function() {
    var e10 = new A.Set([7]), t10 = r10(e10), n10 = r10(oI(7));
    return t10 === e10 || !t10.has(7) || !O(n10) || 7 != +n10;
  }) && r10;
}, oX = function(r10, e10) {
  return !m(function() {
    var t10 = new e10(), n10 = r10({ a: t10, b: t10 });
    return !(n10 && n10.a === n10.b && n10.a instanceof e10 && n10.a.stack === t10.stack);
  });
}, oZ = A.structuredClone, oJ = !oX(oZ, oD) || !oX(oZ, oC) || !!m(function() {
  var r10 = oZ(new A.AggregateError([1], o$, { cause: 3 }));
  return "AggregateError" !== r10.name || 1 !== r10.errors[0] || r10.message !== o$ || 3 !== r10.cause;
}), o0 = !oZ && oK(function(r10) {
  return new oj(o$, { detail: r10 }).detail;
}), o1 = oK(oZ) || o0, o2 = function(r10) {
  throw new oC("Uncloneable type: " + r10, oQ);
}, o4 = function(r10, e10) {
  throw new oC((e10 || "Cloning") + " of " + r10 + " cannot be properly polyfilled in this engine", oQ);
}, o7 = function(r10, e10) {
  return o1 || o4(e10), o1(r10);
}, o8 = function() {
  var r10;
  try {
    r10 = new A.DataTransfer();
  } catch (e10) {
    try {
      r10 = new A.ClipboardEvent("").clipboardData;
    } catch (r11) {
    }
  }
  return r10 && r10.items && r10.files ? r10 : null;
}, o9 = function(r10, e10, t10) {
  if (oP(e10, r10))
    return oL(e10, r10);
  if ("SharedArrayBuffer" === (t10 || ep(r10)))
    n10 = o1 ? o1(r10) : r10;
  else {
    var n10, o10, a2, i2, c2, u2, f2 = A.DataView;
    f2 || g(r10.slice) || o4("ArrayBuffer");
    try {
      if (g(r10.slice) && !r10.resizable)
        n10 = r10.slice(0);
      else
        for (u2 = 0, o10 = r10.byteLength, a2 = ("maxByteLength" in r10) ? { maxByteLength: r10.maxByteLength } : void 0, n10 = new ArrayBuffer(o10, a2), i2 = new f2(r10), c2 = new f2(n10); u2 < o10; u2++)
          c2.setUint8(u2, i2.getUint8(u2));
    } catch (r11) {
      throw new oC("ArrayBuffer is detached", oQ);
    }
  }
  return oN(e10, r10, n10), n10;
}, o3 = function(r10, e10, t10, n10, o10) {
  var a2 = A[e10];
  return O(a2) || o4(e10), new a2(o9(r10.buffer, o10), t10, n10);
}, o6 = function(r10, e10) {
  if (K(r10) && o2("Symbol"), !O(r10))
    return r10;
  if (e10) {
    if (oP(e10, r10))
      return oL(e10, r10);
  } else
    e10 = new ox();
  var t10, n10, o10, a2, i2, c2, u2, f2, s2 = ep(r10);
  switch (s2) {
    case "Array":
      o10 = o_(eX(r10));
      break;
    case "Object":
      o10 = {};
      break;
    case "Map":
      o10 = new ox();
      break;
    case "Set":
      o10 = new oU();
      break;
    case "RegExp":
      o10 = new RegExp(r10.source, ou(r10));
      break;
    case "Error":
      switch (n10 = r10.name) {
        case "AggregateError":
          o10 = new (x(n10))([]);
          break;
        case "EvalError":
        case "RangeError":
        case "ReferenceError":
        case "SuppressedError":
        case "SyntaxError":
        case "TypeError":
        case "URIError":
          o10 = new (x(n10))();
          break;
        case "CompileError":
        case "LinkError":
        case "RuntimeError":
          o10 = new (x("WebAssembly", n10))();
          break;
        default:
          o10 = new oD();
      }
      break;
    case "DOMException":
      o10 = new oC(r10.message, r10.name);
      break;
    case "ArrayBuffer":
    case "SharedArrayBuffer":
      o10 = o9(r10, e10, s2);
      break;
    case "DataView":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float16Array":
    case "Float32Array":
    case "Float64Array":
    case "BigInt64Array":
    case "BigUint64Array":
      c2 = "DataView" === s2 ? r10.byteLength : r10.length, o10 = o3(r10, s2, r10.byteOffset, c2, e10);
      break;
    case "DOMQuad":
      try {
        o10 = new DOMQuad(o6(r10.p1, e10), o6(r10.p2, e10), o6(r10.p3, e10), o6(r10.p4, e10));
      } catch (e11) {
        o10 = o7(r10, s2);
      }
      break;
    case "File":
      if (o1)
        try {
          o10 = o1(r10), ep(o10) !== s2 && (o10 = void 0);
        } catch (r11) {
        }
      if (!o10)
        try {
          o10 = new File([r10], r10.name, r10);
        } catch (r11) {
        }
      o10 || o4(s2);
      break;
    case "FileList":
      if (a2 = o8()) {
        for (i2 = 0, c2 = eX(r10); i2 < c2; i2++)
          a2.items.add(o6(r10[i2], e10));
        o10 = a2.files;
      } else
        o10 = o7(r10, s2);
      break;
    case "ImageData":
      try {
        o10 = new ImageData(o6(r10.data, e10), r10.width, r10.height, { colorSpace: r10.colorSpace });
      } catch (e11) {
        o10 = o7(r10, s2);
      }
      break;
    default:
      if (o1)
        o10 = o1(r10);
      else
        switch (s2) {
          case "BigInt":
            o10 = oI(r10.valueOf());
            break;
          case "Boolean":
            o10 = oI(oW(r10));
            break;
          case "Number":
            o10 = oI(oH(r10));
            break;
          case "String":
            o10 = oI(oY(r10));
            break;
          case "Date":
            o10 = new ok(oG(r10));
            break;
          case "Blob":
            try {
              o10 = r10.slice(0, r10.size, r10.type);
            } catch (r11) {
              o4(s2);
            }
            break;
          case "DOMPoint":
          case "DOMPointReadOnly":
            t10 = A[s2];
            try {
              o10 = t10.fromPoint ? t10.fromPoint(r10) : new t10(r10.x, r10.y, r10.z, r10.w);
            } catch (r11) {
              o4(s2);
            }
            break;
          case "DOMRect":
          case "DOMRectReadOnly":
            t10 = A[s2];
            try {
              o10 = t10.fromRect ? t10.fromRect(r10) : new t10(r10.x, r10.y, r10.width, r10.height);
            } catch (r11) {
              o4(s2);
            }
            break;
          case "DOMMatrix":
          case "DOMMatrixReadOnly":
            t10 = A[s2];
            try {
              o10 = t10.fromMatrix ? t10.fromMatrix(r10) : new t10(r10);
            } catch (r11) {
              o4(s2);
            }
            break;
          case "AudioData":
          case "VideoFrame":
            g(r10.clone) || o4(s2);
            try {
              o10 = r10.clone();
            } catch (r11) {
              o2(s2);
            }
            break;
          case "CropTarget":
          case "CryptoKey":
          case "FileSystemDirectoryHandle":
          case "FileSystemFileHandle":
          case "FileSystemHandle":
          case "GPUCompilationInfo":
          case "GPUCompilationMessage":
          case "ImageBitmap":
          case "RTCCertificate":
          case "WebAssembly.Module":
            o4(s2);
          default:
            o2(s2);
        }
  }
  switch (oN(e10, r10, o10), s2) {
    case "Array":
    case "Object":
      for (i2 = 0, c2 = eX(u2 = oV(r10)); i2 < c2; i2++)
        f2 = u2[i2], oS(o10, f2, o6(r10[f2], e10));
      break;
    case "Map":
      r10.forEach(function(r11, t11) {
        oN(o10, o6(t11, e10), o6(r11, e10));
      });
      break;
    case "Set":
      r10.forEach(function(r11) {
        oF(o10, o6(r11, e10));
      });
      break;
    case "Error":
      rY(o10, "message", o6(r10.message, e10)), rv(r10, "cause") && rY(o10, "cause", o6(r10.cause, e10)), "AggregateError" === n10 ? o10.errors = o6(r10.errors, e10) : "SuppressedError" === n10 && (o10.error = o6(r10.error, e10), o10.suppressed = o6(r10.suppressed, e10));
    case "DOMException":
      tx && rY(o10, "stack", o6(r10.stack, e10));
  }
  return o10;
}, o5 = function(r10, e10) {
  if (!O(r10))
    throw new oM("Transfer option cannot be converted to a sequence");
  var t10, n10, o10, a2, i2, c2 = [];
  oT(r10, function(r11) {
    oz(c2, D(r11));
  });
  for (var u2 = 0, f2 = eX(c2), s2 = new oU(); u2 < f2; ) {
    if ("ArrayBuffer" === (n10 = ep(t10 = c2[u2++])) ? oB(s2, t10) : oP(e10, t10))
      throw new oC("Duplicate transferable", oQ);
    if ("ArrayBuffer" === n10) {
      oF(s2, t10);
      continue;
    }
    if (om)
      a2 = oZ(t10, { transfer: [t10] });
    else
      switch (n10) {
        case "ImageBitmap":
          n7(o10 = A.OffscreenCanvas) || o4(n10, oq);
          try {
            (i2 = new o10(t10.width, t10.height)).getContext("bitmaprenderer").transferFromImageBitmap(t10), a2 = i2.transferToImageBitmap();
          } catch (r11) {
          }
          break;
        case "AudioData":
        case "VideoFrame":
          g(t10.clone) && g(t10.close) || o4(n10, oq);
          try {
            a2 = t10.clone(), t10.close();
          } catch (r11) {
          }
          break;
        case "MediaSourceHandle":
        case "MessagePort":
        case "OffscreenCanvas":
        case "ReadableStream":
        case "TransformStream":
        case "WritableStream":
          o4(n10, oq);
      }
    if (void 0 === a2)
      throw new oC("This object cannot be transferred: " + n10, oQ);
    oN(e10, t10, a2);
  }
  return s2;
}, ar = function(r10) {
  od(r10, function(r11) {
    om ? o1(r11, { transfer: [r11] }) : g(r11.transfer) ? r11.transfer() : oR ? oR(r11) : o4("ArrayBuffer", oq);
  });
};
ta({ global: true, enumerable: true, sham: !om, forced: oJ }, { structuredClone: function(r10) {
  var e10, t10, n10 = ev(arguments.length, 1) > 1 && !re(arguments[1]) ? D(arguments[1]) : void 0, o10 = n10 ? n10.transfer : void 0;
  void 0 !== o10 && (t10 = o5(o10, e10 = new ox()));
  var a2 = o6(r10, e10);
  return t10 && ar(t10), a2;
} });
var ae = TypeError, at = b.f, an = function(r10, e10) {
  if (F(e10, r10))
    return r10;
  throw new ae("Incorrect invocation");
}, ao = { IndexSizeError: { s: "INDEX_SIZE_ERR", c: 1, m: 1 }, DOMStringSizeError: { s: "DOMSTRING_SIZE_ERR", c: 2, m: 0 }, HierarchyRequestError: { s: "HIERARCHY_REQUEST_ERR", c: 3, m: 1 }, WrongDocumentError: { s: "WRONG_DOCUMENT_ERR", c: 4, m: 1 }, InvalidCharacterError: { s: "INVALID_CHARACTER_ERR", c: 5, m: 1 }, NoDataAllowedError: { s: "NO_DATA_ALLOWED_ERR", c: 6, m: 0 }, NoModificationAllowedError: { s: "NO_MODIFICATION_ALLOWED_ERR", c: 7, m: 1 }, NotFoundError: { s: "NOT_FOUND_ERR", c: 8, m: 1 }, NotSupportedError: { s: "NOT_SUPPORTED_ERR", c: 9, m: 1 }, InUseAttributeError: { s: "INUSE_ATTRIBUTE_ERR", c: 10, m: 1 }, InvalidStateError: { s: "INVALID_STATE_ERR", c: 11, m: 1 }, SyntaxError: { s: "SYNTAX_ERR", c: 12, m: 1 }, InvalidModificationError: { s: "INVALID_MODIFICATION_ERR", c: 13, m: 1 }, NamespaceError: { s: "NAMESPACE_ERR", c: 14, m: 1 }, InvalidAccessError: { s: "INVALID_ACCESS_ERR", c: 15, m: 1 }, ValidationError: { s: "VALIDATION_ERR", c: 16, m: 0 }, TypeMismatchError: { s: "TYPE_MISMATCH_ERR", c: 17, m: 1 }, SecurityError: { s: "SECURITY_ERR", c: 18, m: 1 }, NetworkError: { s: "NETWORK_ERR", c: 19, m: 1 }, AbortError: { s: "ABORT_ERR", c: 20, m: 1 }, URLMismatchError: { s: "URL_MISMATCH_ERR", c: 21, m: 1 }, QuotaExceededError: { s: "QUOTA_EXCEEDED_ERR", c: 22, m: 1 }, TimeoutError: { s: "TIMEOUT_ERR", c: 23, m: 1 }, InvalidNodeTypeError: { s: "INVALID_NODE_TYPE_ERR", c: 24, m: 1 }, DataCloneError: { s: "DATA_CLONE_ERR", c: 25, m: 1 } }, aa = "DOMException", ai = x("Error"), ac = x(aa), au = function() {
  an(this, af);
  var r10 = arguments.length, e10 = tI(r10 < 1 ? void 0 : arguments[0]), t10 = tI(r10 < 2 ? void 0 : arguments[1], "Error"), n10 = new ac(e10, t10), o10 = new ai(e10);
  return o10.name = aa, at(n10, "stack", rH(1, tC(o10.stack, 1))), tS(n10, this, au), n10;
}, af = au.prototype = ac.prototype, as = "stack" in new ai(aa), al = "stack" in new ac(1, 2), ap = ac && w && Object.getOwnPropertyDescriptor(A, aa), ay = !!ap && !(ap.writable && ap.configurable), ah = as && !ay && !al;
ta({ global: true, constructor: true, forced: ah }, { DOMException: ah ? au : ac });
var ad = x(aa), av = ad.prototype;
if (av.constructor !== ad) {
  for (var ag in at(av, "constructor", rH(1, ad)), ao)
    if (rv(ao, ag)) {
      var ab = ao[ag], am = ab.s;
      rv(ad, am) || at(ad, am, rH(6, ab.c));
    }
}
var aw = rR("match"), aE = Math.floor, aA = U("".charAt), aO = U("".replace), aR = U("".slice), aT = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, aS = /\$([$&'`]|\d{1,2})/g, aI = function(r10) {
  var e10;
  return O(r10) && (void 0 !== (e10 = r10[aw]) ? !!e10 : "RegExp" === ec(r10));
}, a_ = function(r10, e10, t10, n10, o10, a2) {
  var i2 = t10 + r10.length, c2 = n10.length, u2 = aS;
  return void 0 !== o10 && (o10 = rh(o10), u2 = aT), aO(a2, u2, function(a3, u3) {
    var f2;
    switch (aA(u3, 0)) {
      case "$":
        return "$";
      case "&":
        return r10;
      case "`":
        return aR(e10, 0, t10);
      case "'":
        return aR(e10, i2);
      case "<":
        f2 = o10[aR(u3, 1, -1)];
        break;
      default:
        var s2 = +u3;
        if (0 === s2)
          return a3;
        if (s2 > c2) {
          var l2 = aE(s2 / 10);
          if (0 === l2)
            return a3;
          if (l2 <= c2)
            return void 0 === n10[l2 - 1] ? aA(u3, 1) : n10[l2 - 1] + aA(u3, 1);
          return a3;
        }
        f2 = n10[s2 - 1];
    }
    return void 0 === f2 ? "" : f2;
  });
}, ak = rR("replace"), aD = TypeError, aM = U("".indexOf);
U("".replace);
var aj = U("".slice), aC = Math.max;
ta({ target: "String", proto: true }, { replaceAll: function(r10, e10) {
  var t10, n10, o10, a2, i2, c2, u2, f2 = rp(this), s2 = 0, l2 = 0, p2 = "";
  if (!re(r10)) {
    if (aI(r10) && !~aM(eh(rp(ou(r10))), "g"))
      throw new aD("`.replaceAll` does not allow non-global regexes");
    if (t10 = rt(r10, ak))
      return C(t10, r10, f2, e10);
  }
  for (n10 = eh(f2), o10 = eh(r10), (a2 = g(e10)) || (e10 = eh(e10)), c2 = aC(1, i2 = o10.length), s2 = aM(n10, o10); -1 !== s2; )
    u2 = a2 ? eh(e10(o10, s2, n10)) : a_(o10, n10, s2, [], void 0, e10), p2 += aj(n10, l2, s2) + u2, l2 = s2 + i2, s2 = s2 + c2 > n10.length ? -1 : aM(n10, o10, s2 + c2);
  return l2 < n10.length && (p2 += aj(n10, l2)), p2;
} });
