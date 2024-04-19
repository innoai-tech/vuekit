var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
let e, t, r, o, i, a, l, s;
(function() {
  let e10 = document.createElement("link").relList;
  if (!(e10 && e10.supports && e10.supports("modulepreload"))) {
    for (let e11 of document.querySelectorAll('link[rel="modulepreload"]'))
      t10(e11);
    new MutationObserver((e11) => {
      for (let r3 of e11)
        if ("childList" === r3.type)
          for (let e12 of r3.addedNodes)
            "LINK" === e12.tagName && "modulepreload" === e12.rel && t10(e12);
    }).observe(document, { childList: true, subtree: true });
  }
  function t10(e11) {
    if (e11.ep)
      return;
    e11.ep = true;
    let t11 = function(e12) {
      let t12 = {};
      return e12.integrity && (t12.integrity = e12.integrity), e12.referrerPolicy && (t12.referrerPolicy = e12.referrerPolicy), "use-credentials" === e12.crossOrigin ? t12.credentials = "include" : "anonymous" === e12.crossOrigin ? t12.credentials = "omit" : t12.credentials = "same-origin", t12;
    }(e11);
    fetch(e11.href, t11);
  }
})();
var u, c, f, d, p, h, m, g, y, b, _, w, x, k, S, O, C, E, A, P, M, j, R, T, I, $, D, L, F, V, z, N, B, U, H, W, q, G, Y, K, Z, X, J, Q, ee, et, er, en = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function eo(e10) {
  return e10 && e10.__esModule && Object.prototype.hasOwnProperty.call(e10, "default") ? e10.default : e10;
}
var ei = "object" == typeof document && document.all, ea = void 0 === ei && void 0 !== ei ? function(e10) {
  return "function" == typeof e10 || e10 === ei;
} : function(e10) {
  return "function" == typeof e10;
}, el = {}, es = function(e10) {
  try {
    return !!e10();
  } catch (e11) {
    return true;
  }
}, eu = !es(function() {
  return 7 !== Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1];
}), ec = function(e10) {
  return e10 && e10.Math === Math && e10;
}, ef = ec("object" == typeof globalThis && globalThis) || ec("object" == typeof window && window) || ec("object" == typeof self && self) || ec("object" == typeof en && en) || ec("object" == typeof en && en) || /* @__PURE__ */ function() {
  return this;
}() || Function("return this")(), ed = function(e10) {
  return "object" == typeof e10 ? null !== e10 : ea(e10);
}, ep = ef.document, eh = ed(ep) && ed(ep.createElement), em = !eu && !es(function() {
  return 7 !== Object.defineProperty(eh ? ep.createElement("div") : {}, "a", { get: function() {
    return 7;
  } }).a;
}), ev = eu && es(function() {
  return 42 !== Object.defineProperty(function() {
  }, "prototype", { value: 42, writable: false }).prototype;
}), eg = String, ey = TypeError, eb = function(e10) {
  if (ed(e10))
    return e10;
  throw new ey(eg(e10) + " is not an object");
}, e_ = !es(function() {
  var e10 = (function() {
  }).bind();
  return "function" != typeof e10 || e10.hasOwnProperty("prototype");
}), ew = Function.prototype.call, ex = e_ ? ew.bind(ew) : function() {
  return ew.apply(ew, arguments);
}, ek = function(e10, t10) {
  var r3;
  return arguments.length < 2 ? ea(r3 = ef[e10]) ? r3 : void 0 : ef[e10] && ef[e10][t10];
}, eS = Function.prototype, eO = eS.call, eC = e_ && eS.bind.bind(eO, eO), eE = e_ ? eC : function(e10) {
  return function() {
    return eO.apply(e10, arguments);
  };
}, eA = eE({}.isPrototypeOf), eP = "undefined" != typeof navigator && String(navigator.userAgent) || "", eM = ef.process, ej = ef.Deno, eR = eM && eM.versions || ej && ej.version, eT = eR && eR.v8;
eT && (F = (L = eT.split("."))[0] > 0 && L[0] < 4 ? 1 : +(L[0] + L[1])), !F && eP && (!(L = eP.match(/Edge\/(\d+)/)) || L[1] >= 74) && (L = eP.match(/Chrome\/(\d+)/)) && (F = +L[1]);
var eI = F, e$ = ef.String, eD = !!Object.getOwnPropertySymbols && !es(function() {
  var e10 = Symbol("symbol detection");
  return !e$(e10) || !(Object(e10) instanceof Symbol) || !Symbol.sham && eI && eI < 41;
}), eL = eD && !Symbol.sham && "symbol" == typeof Symbol.iterator, eF = Object, eV = eL ? function(e10) {
  return "symbol" == typeof e10;
} : function(e10) {
  var t10 = ek("Symbol");
  return ea(t10) && eA(t10.prototype, eF(e10));
}, ez = String, eN = function(e10) {
  try {
    return ez(e10);
  } catch (e11) {
    return "Object";
  }
}, eB = TypeError, eU = function(e10) {
  if (ea(e10))
    return e10;
  throw new eB(eN(e10) + " is not a function");
}, eH = function(e10) {
  return null == e10;
}, eW = function(e10, t10) {
  var r3 = e10[t10];
  return eH(r3) ? void 0 : eU(r3);
}, eq = TypeError, eG = { exports: {} }, eY = Object.defineProperty, eK = function(e10, t10) {
  try {
    eY(ef, e10, { value: t10, configurable: true, writable: true });
  } catch (r3) {
    ef[e10] = t10;
  }
  return t10;
}, eZ = "__core-js_shared__", eX = eG.exports = ef[eZ] || eK(eZ, {});
(eX.versions || (eX.versions = [])).push({ version: "3.37.0", mode: "global", copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.37.0/LICENSE", source: "https://github.com/zloirock/core-js" });
var eJ = eG.exports, eQ = function(e10, t10) {
  return eJ[e10] || (eJ[e10] = t10 || {});
}, e0 = TypeError, e1 = function(e10) {
  if (eH(e10))
    throw new e0("Can't call method on " + e10);
  return e10;
}, e2 = Object, e4 = function(e10) {
  return e2(e1(e10));
}, e3 = eE({}.hasOwnProperty), e5 = Object.hasOwn || function(e10, t10) {
  return e3(e4(e10), t10);
}, e6 = 0, e8 = Math.random(), e9 = eE(1 .toString), e7 = function(e10) {
  return "Symbol(" + (void 0 === e10 ? "" : e10) + ")_" + e9(++e6 + e8, 36);
}, te = ef.Symbol, tt = eQ("wks"), tr = eL ? te.for || te : te && te.withoutSetter || e7, tn = function(e10) {
  return e5(tt, e10) || (tt[e10] = eD && e5(te, e10) ? te[e10] : tr("Symbol." + e10)), tt[e10];
}, to = function(e10, t10) {
  var r3, o10;
  if ("string" === t10 && ea(r3 = e10.toString) && !ed(o10 = ex(r3, e10)) || ea(r3 = e10.valueOf) && !ed(o10 = ex(r3, e10)) || "string" !== t10 && ea(r3 = e10.toString) && !ed(o10 = ex(r3, e10)))
    return o10;
  throw new eq("Can't convert object to primitive value");
}, ti = TypeError, ta = tn("toPrimitive"), tl = function(e10, t10) {
  if (!ed(e10) || eV(e10))
    return e10;
  var r3, o10 = eW(e10, ta);
  if (o10) {
    if (void 0 === t10 && (t10 = "default"), !ed(r3 = ex(o10, e10, t10)) || eV(r3))
      return r3;
    throw new ti("Can't convert object to primitive value");
  }
  return void 0 === t10 && (t10 = "number"), to(e10, t10);
}, ts = function(e10) {
  var t10 = tl(e10, "string");
  return eV(t10) ? t10 : t10 + "";
}, tu = TypeError, tc = Object.defineProperty, tf = Object.getOwnPropertyDescriptor, td = "enumerable", tp = "configurable", th = "writable";
el.f = eu ? ev ? function(e10, t10, r3) {
  if (eb(e10), t10 = ts(t10), eb(r3), "function" == typeof e10 && "prototype" === t10 && "value" in r3 && th in r3 && !r3[th]) {
    var o10 = tf(e10, t10);
    o10 && o10[th] && (e10[t10] = r3.value, r3 = { configurable: tp in r3 ? r3[tp] : o10[tp], enumerable: td in r3 ? r3[td] : o10[td], writable: false });
  }
  return tc(e10, t10, r3);
} : tc : function(e10, t10, r3) {
  if (eb(e10), t10 = ts(t10), eb(r3), em)
    try {
      return tc(e10, t10, r3);
    } catch (e11) {
    }
  if ("get" in r3 || "set" in r3)
    throw new tu("Accessors not supported");
  return "value" in r3 && (e10[t10] = r3.value), e10;
};
var tm = { exports: {} }, tv = Function.prototype, tg = eu && Object.getOwnPropertyDescriptor, ty = e5(tv, "name") && (!eu || eu && tg(tv, "name").configurable), tb = eE(Function.toString);
ea(eJ.inspectSource) || (eJ.inspectSource = function(e10) {
  return tb(e10);
});
var t_ = eJ.inspectSource, tw = ef.WeakMap, tx = ea(tw) && /native code/.test(String(tw)), tk = function(e10, t10) {
  return { enumerable: !(1 & e10), configurable: !(2 & e10), writable: !(4 & e10), value: t10 };
}, tS = eu ? function(e10, t10, r3) {
  return el.f(e10, t10, tk(1, r3));
} : function(e10, t10, r3) {
  return e10[t10] = r3, e10;
}, tO = eQ("keys"), tC = function(e10) {
  return tO[e10] || (tO[e10] = e7(e10));
}, tE = {}, tA = "Object already initialized", tP = ef.TypeError, tM = ef.WeakMap;
if (tx || eJ.state) {
  var tj = eJ.state || (eJ.state = new tM());
  tj.get = tj.get, tj.has = tj.has, tj.set = tj.set, V = function(e10, t10) {
    if (tj.has(e10))
      throw new tP(tA);
    return t10.facade = e10, tj.set(e10, t10), t10;
  }, z = function(e10) {
    return tj.get(e10) || {};
  }, N = function(e10) {
    return tj.has(e10);
  };
} else {
  var tR = tC("state");
  tE[tR] = true, V = function(e10, t10) {
    if (e5(e10, tR))
      throw new tP(tA);
    return t10.facade = e10, tS(e10, tR, t10), t10;
  }, z = function(e10) {
    return e5(e10, tR) ? e10[tR] : {};
  }, N = function(e10) {
    return e5(e10, tR);
  };
}
var tT = z, tI = function(e10) {
  return N(e10) ? z(e10) : V(e10, {});
}, t$ = String, tD = Object.defineProperty, tL = eE("".slice), tF = eE("".replace), tV = eE([].join), tz = eu && !es(function() {
  return 8 !== tD(function() {
  }, "length", { value: 8 }).length;
}), tN = String(String).split("String"), tB = tm.exports = function(e10, t10, r3) {
  "Symbol(" === tL(t$(t10), 0, 7) && (t10 = "[" + tF(t$(t10), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), r3 && r3.getter && (t10 = "get " + t10), r3 && r3.setter && (t10 = "set " + t10), (!e5(e10, "name") || ty && e10.name !== t10) && (eu ? tD(e10, "name", { value: t10, configurable: true }) : e10.name = t10), tz && r3 && e5(r3, "arity") && e10.length !== r3.arity && tD(e10, "length", { value: r3.arity });
  try {
    r3 && e5(r3, "constructor") && r3.constructor ? eu && tD(e10, "prototype", { writable: false }) : e10.prototype && (e10.prototype = void 0);
  } catch (e11) {
  }
  var o10 = tI(e10);
  return e5(o10, "source") || (o10.source = tV(tN, "string" == typeof t10 ? t10 : "")), e10;
};
Function.prototype.toString = tB(function() {
  return ea(this) && tT(this).source || t_(this);
}, "toString");
var tU = tm.exports, tH = function(e10, t10, r3, o10) {
  o10 || (o10 = {});
  var i10 = o10.enumerable, a10 = void 0 !== o10.name ? o10.name : t10;
  if (ea(r3) && tU(r3, a10, o10), o10.global)
    i10 ? e10[t10] = r3 : eK(t10, r3);
  else {
    try {
      o10.unsafe ? e10[t10] && (i10 = true) : delete e10[t10];
    } catch (e11) {
    }
    i10 ? e10[t10] = r3 : el.f(e10, t10, { value: r3, enumerable: false, configurable: !o10.nonConfigurable, writable: !o10.nonWritable });
  }
  return e10;
}, tW = tn("toStringTag"), tq = {};
tq[tW] = "z";
var tG = "[object z]" === String(tq), tY = eE({}.toString), tK = eE("".slice), tZ = function(e10) {
  return tK(tY(e10), 8, -1);
}, tX = tn("toStringTag"), tJ = Object, tQ = "Arguments" === tZ(/* @__PURE__ */ function() {
  return arguments;
}()), t0 = function(e10, t10) {
  try {
    return e10[t10];
  } catch (e11) {
  }
}, t1 = tG ? tZ : function(e10) {
  var t10, r3, o10;
  return void 0 === e10 ? "Undefined" : null === e10 ? "Null" : "string" == typeof (r3 = t0(t10 = tJ(e10), tX)) ? r3 : tQ ? tZ(t10) : "Object" === (o10 = tZ(t10)) && ea(t10.callee) ? "Arguments" : o10;
}, t2 = String, t4 = function(e10) {
  if ("Symbol" === t1(e10))
    throw TypeError("Cannot convert a Symbol value to a string");
  return t2(e10);
}, t3 = TypeError, t5 = function(e10, t10) {
  if (e10 < t10)
    throw new t3("Not enough arguments");
  return e10;
}, t6 = URLSearchParams, t8 = t6.prototype, t9 = eE(t8.append), t7 = eE(t8.delete), re = eE(t8.forEach), rt = eE([].push), rr = new t6("a=1&a=2&b=3");
rr.delete("a", 1), rr.delete("b", void 0), rr + "" != "a=2" && tH(t8, "delete", function(e10) {
  var t10, r3 = arguments.length, o10 = r3 < 2 ? void 0 : arguments[1];
  if (r3 && void 0 === o10)
    return t7(this, e10);
  var i10 = [];
  re(this, function(e11, t11) {
    rt(i10, { key: t11, value: e11 });
  }), t5(r3, 1);
  for (var a10 = t4(e10), l10 = t4(o10), s10 = 0, u10 = 0, c10 = false, f10 = i10.length; s10 < f10; )
    t10 = i10[s10++], c10 || t10.key === a10 ? (c10 = true, t7(this, t10.key)) : u10++;
  for (; u10 < f10; )
    (t10 = i10[u10++]).key === a10 && t10.value === l10 || t9(this, t10.key, t10.value);
}, { enumerable: true, unsafe: true });
var rn = URLSearchParams, ro = rn.prototype, ri = eE(ro.getAll), ra = eE(ro.has), rl = new rn("a=1");
(rl.has("a", 2) || !rl.has("a", void 0)) && tH(ro, "has", function(e10) {
  var t10 = arguments.length, r3 = t10 < 2 ? void 0 : arguments[1];
  if (t10 && void 0 === r3)
    return ra(this, e10);
  var o10 = ri(this, e10);
  t5(t10, 1);
  for (var i10 = t4(r3), a10 = 0; a10 < o10.length; )
    if (o10[a10++] === i10)
      return true;
  return false;
}, { enumerable: true, unsafe: true });
var rs = function(e10, t10, r3) {
  return r3.get && tU(r3.get, t10, { getter: true }), r3.set && tU(r3.set, t10, { setter: true }), el.f(e10, t10, r3);
}, ru = URLSearchParams.prototype, rc = eE(ru.forEach);
!eu || "size" in ru || rs(ru, "size", { get: function() {
  var e10 = 0;
  return rc(this, function() {
    e10++;
  }), e10;
}, configurable: true, enumerable: true });
var rf = {}, rd = {}, rp = {}.propertyIsEnumerable, rh = Object.getOwnPropertyDescriptor, rm = rh && !rp.call({ 1: 2 }, 1);
rd.f = rm ? function(e10) {
  var t10 = rh(this, e10);
  return !!t10 && t10.enumerable;
} : rp;
var rv = Object, rg = eE("".split), ry = es(function() {
  return !rv("z").propertyIsEnumerable(0);
}) ? function(e10) {
  return "String" === tZ(e10) ? rg(e10, "") : rv(e10);
} : rv, rb = function(e10) {
  return ry(e1(e10));
}, r_ = Object.getOwnPropertyDescriptor;
rf.f = eu ? r_ : function(e10, t10) {
  if (e10 = rb(e10), t10 = ts(t10), em)
    try {
      return r_(e10, t10);
    } catch (e11) {
    }
  if (e5(e10, t10))
    return tk(!ex(rd.f, e10, t10), e10[t10]);
};
var rw = {}, rx = Math.ceil, rk = Math.floor, rS = Math.trunc || function(e10) {
  var t10 = +e10;
  return (t10 > 0 ? rk : rx)(t10);
}, rO = function(e10) {
  var t10 = +e10;
  return t10 != t10 || 0 === t10 ? 0 : rS(t10);
}, rC = Math.max, rE = Math.min, rA = Math.min, rP = function(e10) {
  var t10 = rO(e10);
  return t10 > 0 ? rA(t10, 9007199254740991) : 0;
}, rM = function(e10) {
  return rP(e10.length);
}, rj = function(e10, t10) {
  var r3 = rO(e10);
  return r3 < 0 ? rC(r3 + t10, 0) : rE(r3, t10);
}, rR = function(e10) {
  return function(t10, r3, o10) {
    var i10, a10 = rb(t10), l10 = rM(a10);
    if (0 === l10)
      return !e10 && -1;
    var s10 = rj(o10, l10);
    if (e10 && r3 != r3) {
      for (; l10 > s10; )
        if ((i10 = a10[s10++]) != i10)
          return true;
    } else
      for (; l10 > s10; s10++)
        if ((e10 || s10 in a10) && a10[s10] === r3)
          return e10 || s10 || 0;
    return !e10 && -1;
  };
}, rT = { includes: rR(true), indexOf: rR(false) }.indexOf, rI = eE([].push), r$ = function(e10, t10) {
  var r3, o10 = rb(e10), i10 = 0, a10 = [];
  for (r3 in o10)
    !e5(tE, r3) && e5(o10, r3) && rI(a10, r3);
  for (; t10.length > i10; )
    e5(o10, r3 = t10[i10++]) && (~rT(a10, r3) || rI(a10, r3));
  return a10;
}, rD = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"].concat("length", "prototype");
rw.f = Object.getOwnPropertyNames || function(e10) {
  return r$(e10, rD);
};
var rL = {};
rL.f = Object.getOwnPropertySymbols;
var rF = eE([].concat), rV = ek("Reflect", "ownKeys") || function(e10) {
  var t10 = rw.f(eb(e10)), r3 = rL.f;
  return r3 ? rF(t10, r3(e10)) : t10;
}, rz = function(e10, t10, r3) {
  for (var o10 = rV(t10), i10 = el.f, a10 = rf.f, l10 = 0; l10 < o10.length; l10++) {
    var s10 = o10[l10];
    e5(e10, s10) || r3 && e5(r3, s10) || i10(e10, s10, a10(t10, s10));
  }
}, rN = /#|\.prototype\./, rB = function(e10, t10) {
  var r3 = rH[rU(e10)];
  return r3 === rq || r3 !== rW && (ea(t10) ? es(t10) : !!t10);
}, rU = rB.normalize = function(e10) {
  return String(e10).replace(rN, ".").toLowerCase();
}, rH = rB.data = {}, rW = rB.NATIVE = "N", rq = rB.POLYFILL = "P", rG = rf.f, rY = function(e10, t10) {
  var r3, o10, i10, a10, l10, s10 = e10.target, u10 = e10.global, c10 = e10.stat;
  if (r3 = u10 ? ef : c10 ? ef[s10] || eK(s10, {}) : ef[s10] && ef[s10].prototype)
    for (o10 in t10) {
      if (a10 = t10[o10], i10 = e10.dontCallGetSet ? (l10 = rG(r3, o10)) && l10.value : r3[o10], !rB(u10 ? o10 : s10 + (c10 ? "." : "#") + o10, e10.forced) && void 0 !== i10) {
        if (typeof a10 == typeof i10)
          continue;
        rz(a10, i10);
      }
      (e10.sham || i10 && i10.sham) && tS(a10, "sham", true), tH(r3, o10, a10, e10);
    }
}, rK = TypeError, rZ = "Reduce of empty array with no initial value", rX = function(e10) {
  return function(t10, r3, o10, i10) {
    var a10 = e4(t10), l10 = ry(a10), s10 = rM(a10);
    if (eU(r3), 0 === s10 && o10 < 2)
      throw new rK(rZ);
    var u10 = e10 ? s10 - 1 : 0, c10 = e10 ? -1 : 1;
    if (o10 < 2)
      for (; ; ) {
        if (u10 in l10) {
          i10 = l10[u10], u10 += c10;
          break;
        }
        if (u10 += c10, e10 ? u10 < 0 : s10 <= u10)
          throw new rK(rZ);
      }
    for (; e10 ? u10 >= 0 : s10 > u10; u10 += c10)
      u10 in l10 && (i10 = r3(i10, l10[u10], u10, a10));
    return i10;
  };
}, rJ = { left: rX(false), right: rX(true) }, rQ = "process" === tZ(ef.process), r0 = rJ.left;
rY({ target: "Array", proto: true, forced: !rQ && eI > 79 && eI < 83 || !((u = [].reduce) && es(function() {
  u.call(null, function() {
    return 1;
  }, 1);
})) }, { reduce: function(e10) {
  var t10 = arguments.length;
  return r0(this, e10, t10, t10 > 1 ? arguments[1] : void 0);
} });
var r1 = TypeError, r2 = Object.defineProperty, r4 = ef.self !== ef;
try {
  if (eu) {
    var r3 = Object.getOwnPropertyDescriptor(ef, "self");
    !r4 && r3 && r3.get && r3.enumerable || rs(ef, "self", { get: function() {
      return ef;
    }, set: function(e10) {
      if (this !== ef)
        throw new r1("Illegal invocation");
      r2(ef, "self", { value: e10, writable: true, configurable: true, enumerable: true });
    }, configurable: true, enumerable: true });
  } else
    rY({ global: true, simple: true, forced: r4 }, { self: ef });
} catch (e10) {
}
var r5 = "object" == typeof global && global && global.Object === Object && global, r6 = "object" == typeof self && self && self.Object === Object && self, r8 = r5 || r6 || Function("return this")(), r9 = r8.Symbol, r7 = Object.prototype, ne = r7.hasOwnProperty, nt = r7.toString, nr = r9 ? r9.toStringTag : void 0, nn = Object.prototype.toString, no = r9 ? r9.toStringTag : void 0;
function ni(e10) {
  return null == e10 ? void 0 === e10 ? "[object Undefined]" : "[object Null]" : no && no in Object(e10) ? function(e11) {
    var t10 = ne.call(e11, nr), r3 = e11[nr];
    try {
      e11[nr] = void 0;
      var o10 = true;
    } catch (e12) {
    }
    var i10 = nt.call(e11);
    return o10 && (t10 ? e11[nr] = r3 : delete e11[nr]), i10;
  }(e10) : nn.call(e10);
}
function na(e10) {
  return null != e10 && "object" == typeof e10;
}
function nl(e10) {
  return "symbol" == typeof e10 || na(e10) && "[object Symbol]" == ni(e10);
}
function ns(e10, t10) {
  for (var r3 = -1, o10 = null == e10 ? 0 : e10.length, i10 = Array(o10); ++r3 < o10; )
    i10[r3] = t10(e10[r3], r3, e10);
  return i10;
}
var nu = Array.isArray, nc = 1 / 0, nf = r9 ? r9.prototype : void 0, nd = nf ? nf.toString : void 0;
function np(e10) {
  if ("string" == typeof e10)
    return e10;
  if (nu(e10))
    return ns(e10, np) + "";
  if (nl(e10))
    return nd ? nd.call(e10) : "";
  var t10 = e10 + "";
  return "0" == t10 && 1 / e10 == -nc ? "-0" : t10;
}
var nh = Function.prototype, nm = nh.apply, nv = nh.call, ng = "object" == typeof Reflect && Reflect.apply || (e_ ? nv.bind(nm) : function() {
  return nv.apply(nm, arguments);
}), ny = String, nb = TypeError, n_ = function(e10, t10, r3) {
  try {
    return eE(eU(Object.getOwnPropertyDescriptor(e10, t10)[r3]));
  } catch (e11) {
  }
}, nw = function(e10) {
  if (ed(e10) || null === e10)
    return e10;
  throw new nb("Can't set " + ny(e10) + " as a prototype");
}, nx = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var e10, t10 = false, r3 = {};
  try {
    (e10 = n_(Object.prototype, "__proto__", "set"))(r3, []), t10 = r3 instanceof Array;
  } catch (e11) {
  }
  return function(r10, o10) {
    return e1(r10), nw(o10), ed(r10) && (t10 ? e10(r10, o10) : r10.__proto__ = o10), r10;
  };
}() : void 0), nk = el.f, nS = function(e10, t10, r3) {
  var o10, i10;
  return nx && ea(o10 = t10.constructor) && o10 !== r3 && ed(i10 = o10.prototype) && i10 !== r3.prototype && nx(e10, i10), e10;
}, nO = function(e10, t10) {
  return void 0 === e10 ? arguments.length < 2 ? "" : t10 : t4(e10);
}, nC = Error, nE = eE("".replace), nA = String(new nC("zxcasd").stack), nP = /\n\s*at [^:]*:[^\n]*/, nM = nP.test(nA), nj = function(e10, t10) {
  if (nM && "string" == typeof e10 && !nC.prepareStackTrace)
    for (; t10--; )
      e10 = nE(e10, nP, "");
  return e10;
}, nR = !es(function() {
  var e10 = Error("a");
  return !("stack" in e10) || (Object.defineProperty(e10, "stack", tk(1, 7)), 7 !== e10.stack);
}), nT = Error.captureStackTrace, nI = function(e10, t10, r3) {
  r3 in e10 || nk(e10, r3, { configurable: true, get: function() {
    return t10[r3];
  }, set: function(e11) {
    t10[r3] = e11;
  } });
}, n$ = function(e10, t10) {
  ed(t10) && "cause" in t10 && tS(e10, "cause", t10.cause);
}, nD = function(e10, t10, r3, o10) {
  nR && (nT ? nT(e10, t10) : tS(e10, "stack", nj(r3, o10)));
}, nL = function(e10, t10, r3, o10) {
  var i10 = "stackTraceLimit", a10 = o10 ? 2 : 1, l10 = e10.split("."), s10 = l10[l10.length - 1], u10 = ek.apply(null, l10);
  if (u10) {
    var c10 = u10.prototype;
    if (e5(c10, "cause") && delete c10.cause, !r3)
      return u10;
    var f10 = ek("Error"), d10 = t10(function(e11, t11) {
      var r10 = nO(o10 ? t11 : e11, void 0), i11 = o10 ? new u10(e11) : new u10();
      return void 0 !== r10 && tS(i11, "message", r10), nD(i11, d10, i11.stack, 2), this && eA(c10, this) && nS(i11, this, d10), arguments.length > a10 && n$(i11, arguments[a10]), i11;
    });
    d10.prototype = c10, "Error" !== s10 ? nx ? nx(d10, f10) : rz(d10, f10, { name: true }) : eu && i10 in u10 && (nI(d10, u10, i10), nI(d10, u10, "prepareStackTrace")), rz(d10, u10);
    try {
      c10.name !== s10 && tS(c10, "name", s10), c10.constructor = d10;
    } catch (e11) {
    }
    return d10;
  }
}, nF = "WebAssembly", nV = ef[nF], nz = 7 !== Error("e", { cause: 7 }).cause, nN = function(e10, t10) {
  var r3 = {};
  r3[e10] = nL(e10, t10, nz), rY({ global: true, constructor: true, arity: 1, forced: nz }, r3);
}, nB = function(e10, t10) {
  if (nV && nV[e10]) {
    var r3 = {};
    r3[e10] = nL(nF + "." + e10, t10, nz), rY({ target: nF, stat: true, constructor: true, arity: 1, forced: nz }, r3);
  }
};
nN("Error", function(e10) {
  return function(t10) {
    return ng(e10, this, arguments);
  };
}), nN("EvalError", function(e10) {
  return function(t10) {
    return ng(e10, this, arguments);
  };
}), nN("RangeError", function(e10) {
  return function(t10) {
    return ng(e10, this, arguments);
  };
}), nN("ReferenceError", function(e10) {
  return function(t10) {
    return ng(e10, this, arguments);
  };
}), nN("SyntaxError", function(e10) {
  return function(t10) {
    return ng(e10, this, arguments);
  };
}), nN("TypeError", function(e10) {
  return function(t10) {
    return ng(e10, this, arguments);
  };
}), nN("URIError", function(e10) {
  return function(t10) {
    return ng(e10, this, arguments);
  };
}), nB("CompileError", function(e10) {
  return function(t10) {
    return ng(e10, this, arguments);
  };
}), nB("LinkError", function(e10) {
  return function(t10) {
    return ng(e10, this, arguments);
  };
}), nB("RuntimeError", function(e10) {
  return function(t10) {
    return ng(e10, this, arguments);
  };
});
var nU = /\s/, nH = /^\s+/;
function nW(e10) {
  var t10 = typeof e10;
  return null != e10 && ("object" == t10 || "function" == t10);
}
var nq = 0 / 0, nG = /^[-+]0x[0-9a-f]+$/i, nY = /^0b[01]+$/i, nK = /^0o[0-7]+$/i, nZ = parseInt, nX = 1 / 0;
function nJ(e10) {
  return e10;
}
function nQ(e10) {
  if (!nW(e10))
    return false;
  var t10 = ni(e10);
  return "[object Function]" == t10 || "[object GeneratorFunction]" == t10 || "[object AsyncFunction]" == t10 || "[object Proxy]" == t10;
}
var n0 = r8["__core-js_shared__"], n1 = (c = /[^.]+$/.exec(n0 && n0.keys && n0.keys.IE_PROTO || "")) ? "Symbol(src)_1." + c : "", n2 = Function.prototype.toString;
function n4(e10) {
  if (null != e10) {
    try {
      return n2.call(e10);
    } catch (e11) {
    }
    try {
      return e10 + "";
    } catch (e11) {
    }
  }
  return "";
}
var n3 = /^\[object .+?Constructor\]$/, n5 = Object.prototype, n6 = Function.prototype.toString, n8 = n5.hasOwnProperty, n9 = RegExp("^" + n6.call(n8).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function n7(e10, t10) {
  var r3 = null == e10 ? void 0 : e10[t10];
  return nW(r3) && (!n1 || !(n1 in r3)) && (nQ(r3) ? n9 : n3).test(n4(r3)) ? r3 : void 0;
}
var oe = n7(r8, "WeakMap"), ot = Object.create, or = /* @__PURE__ */ function() {
  function e10() {
  }
  return function(t10) {
    if (!nW(t10))
      return {};
    if (ot)
      return ot(t10);
    e10.prototype = t10;
    var r3 = new e10();
    return e10.prototype = void 0, r3;
  };
}(), on = Date.now, oo = function() {
  try {
    var e10 = n7(Object, "defineProperty");
    return e10({}, "", {}), e10;
  } catch (e11) {
  }
}(), oi = (f = oo ? function(e10, t10) {
  return oo(e10, "toString", { configurable: true, enumerable: false, value: function() {
    return t10;
  }, writable: true });
} : nJ, d = 0, p = 0, function() {
  var e10 = on(), t10 = 16 - (e10 - p);
  if (p = e10, t10 > 0) {
    if (++d >= 800)
      return arguments[0];
  } else
    d = 0;
  return f.apply(void 0, arguments);
}), oa = Array.isArray || function(e10) {
  return "Array" === tZ(e10);
}, ol = TypeError, os = Object.getOwnPropertyDescriptor, ou = eu && !function() {
  if (void 0 !== this)
    return true;
  try {
    Object.defineProperty([], "length", { writable: false }).length = 1;
  } catch (e10) {
    return e10 instanceof TypeError;
  }
}() ? function(e10, t10) {
  if (oa(e10) && !os(e10, "length").writable)
    throw new ol("Cannot set read only .length");
  return e10.length = t10;
} : function(e10, t10) {
  return e10.length = t10;
}, oc = TypeError, of = function(e10) {
  if (e10 > 9007199254740991)
    throw oc("Maximum allowed index exceeded");
  return e10;
};
rY({ target: "Array", proto: true, arity: 1, forced: es(function() {
  return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
}) || !function() {
  try {
    Object.defineProperty([], "length", { writable: false }).push();
  } catch (e10) {
    return e10 instanceof TypeError;
  }
}() }, { push: function(e10) {
  var t10 = e4(this), r3 = rM(t10), o10 = arguments.length;
  of(r3 + o10);
  for (var i10 = 0; i10 < o10; i10++)
    t10[r3] = arguments[i10], r3++;
  return ou(t10, r3), r3;
} });
var od = /^(?:0|[1-9]\d*)$/;
function op(e10, t10) {
  var r3 = typeof e10;
  return !!(t10 = null == t10 ? 9007199254740991 : t10) && ("number" == r3 || "symbol" != r3 && od.test(e10)) && e10 > -1 && e10 % 1 == 0 && e10 < t10;
}
function oh(e10, t10, r3) {
  "__proto__" == t10 && oo ? oo(e10, t10, { configurable: true, enumerable: true, value: r3, writable: true }) : e10[t10] = r3;
}
function om(e10, t10) {
  return e10 === t10 || e10 != e10 && t10 != t10;
}
var ov = Object.prototype.hasOwnProperty;
function og(e10, t10, r3) {
  var o10 = e10[t10];
  ov.call(e10, t10) && om(o10, r3) && (void 0 !== r3 || t10 in e10) || oh(e10, t10, r3);
}
function oy(e10, t10, r3, o10) {
  var i10 = !r3;
  r3 || (r3 = {});
  for (var a10 = -1, l10 = t10.length; ++a10 < l10; ) {
    var s10 = t10[a10], u10 = o10 ? o10(r3[s10], e10[s10], s10, r3, e10) : void 0;
    void 0 === u10 && (u10 = e10[s10]), i10 ? oh(r3, s10, u10) : og(r3, s10, u10);
  }
  return r3;
}
var ob = Math.max;
function o_(e10) {
  return "number" == typeof e10 && e10 > -1 && e10 % 1 == 0 && e10 <= 9007199254740991;
}
function ow(e10) {
  return null != e10 && o_(e10.length) && !nQ(e10);
}
var ox = Object.prototype;
function ok(e10) {
  var t10 = e10 && e10.constructor;
  return e10 === ("function" == typeof t10 && t10.prototype || ox);
}
function oS(e10) {
  return na(e10) && "[object Arguments]" == ni(e10);
}
var oO = Object.prototype, oC = oO.hasOwnProperty, oE = oO.propertyIsEnumerable, oA = oS(/* @__PURE__ */ function() {
  return arguments;
}()) ? oS : function(e10) {
  return na(e10) && oC.call(e10, "callee") && !oE.call(e10, "callee");
}, oP = "object" == typeof exports && exports && !exports.nodeType && exports, oM = oP && "object" == typeof module && module && !module.nodeType && module, oj = oM && oM.exports === oP ? r8.Buffer : void 0;
let oR = (oj ? oj.isBuffer : void 0) || function() {
  return false;
};
var oT = {};
function oI(e10) {
  return function(t10) {
    return e10(t10);
  };
}
oT["[object Float32Array]"] = oT["[object Float64Array]"] = oT["[object Int8Array]"] = oT["[object Int16Array]"] = oT["[object Int32Array]"] = oT["[object Uint8Array]"] = oT["[object Uint8ClampedArray]"] = oT["[object Uint16Array]"] = oT["[object Uint32Array]"] = true, oT["[object Arguments]"] = oT["[object Array]"] = oT["[object ArrayBuffer]"] = oT["[object Boolean]"] = oT["[object DataView]"] = oT["[object Date]"] = oT["[object Error]"] = oT["[object Function]"] = oT["[object Map]"] = oT["[object Number]"] = oT["[object Object]"] = oT["[object RegExp]"] = oT["[object Set]"] = oT["[object String]"] = oT["[object WeakMap]"] = false;
var o$ = "object" == typeof exports && exports && !exports.nodeType && exports, oD = o$ && "object" == typeof module && module && !module.nodeType && module, oL = oD && oD.exports === o$ && r5.process, oF = function() {
  try {
    var e10 = oD && oD.require && oD.require("util").types;
    if (e10)
      return e10;
    return oL && oL.binding && oL.binding("util");
  } catch (e11) {
  }
}(), oV = oF && oF.isTypedArray, oz = oV ? oI(oV) : function(e10) {
  return na(e10) && o_(e10.length) && !!oT[ni(e10)];
}, oN = Object.prototype.hasOwnProperty;
function oB(e10, t10) {
  var r3 = nu(e10), o10 = !r3 && oA(e10), i10 = !r3 && !o10 && oR(e10), a10 = !r3 && !o10 && !i10 && oz(e10), l10 = r3 || o10 || i10 || a10, s10 = l10 ? function(e11, t11) {
    for (var r10 = -1, o11 = Array(e11); ++r10 < e11; )
      o11[r10] = t11(r10);
    return o11;
  }(e10.length, String) : [], u10 = s10.length;
  for (var c10 in e10)
    (t10 || oN.call(e10, c10)) && !(l10 && ("length" == c10 || i10 && ("offset" == c10 || "parent" == c10) || a10 && ("buffer" == c10 || "byteLength" == c10 || "byteOffset" == c10) || op(c10, u10))) && s10.push(c10);
  return s10;
}
function oU(e10, t10) {
  return function(r3) {
    return e10(t10(r3));
  };
}
var oH = oU(Object.keys, Object), oW = Object.prototype.hasOwnProperty;
function oq(e10) {
  if (!ok(e10))
    return oH(e10);
  var t10 = [];
  for (var r3 in Object(e10))
    oW.call(e10, r3) && "constructor" != r3 && t10.push(r3);
  return t10;
}
function oG(e10) {
  return ow(e10) ? oB(e10) : oq(e10);
}
var oY = Object.prototype.hasOwnProperty;
function oK(e10) {
  return ow(e10) ? oB(e10, true) : function(e11) {
    if (!nW(e11))
      return function(e12) {
        var t11 = [];
        if (null != e12)
          for (var r10 in Object(e12))
            t11.push(r10);
        return t11;
      }(e11);
    var t10 = ok(e11), r3 = [];
    for (var o10 in e11)
      "constructor" == o10 && (t10 || !oY.call(e11, o10)) || r3.push(o10);
    return r3;
  }(e10);
}
var oZ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, oX = /^\w*$/;
function oJ(e10, t10) {
  if (nu(e10))
    return false;
  var r3 = typeof e10;
  return !!("number" == r3 || "symbol" == r3 || "boolean" == r3 || null == e10 || nl(e10)) || oX.test(e10) || !oZ.test(e10) || null != t10 && e10 in Object(t10);
}
var oQ = n7(Object, "create"), o0 = Object.prototype.hasOwnProperty, o1 = Object.prototype.hasOwnProperty;
function o2(e10) {
  var t10 = -1, r3 = null == e10 ? 0 : e10.length;
  for (this.clear(); ++t10 < r3; ) {
    var o10 = e10[t10];
    this.set(o10[0], o10[1]);
  }
}
function o4(e10, t10) {
  for (var r3 = e10.length; r3--; )
    if (om(e10[r3][0], t10))
      return r3;
  return -1;
}
o2.prototype.clear = function() {
  this.__data__ = oQ ? oQ(null) : {}, this.size = 0;
}, o2.prototype.delete = function(e10) {
  var t10 = this.has(e10) && delete this.__data__[e10];
  return this.size -= t10 ? 1 : 0, t10;
}, o2.prototype.get = function(e10) {
  var t10 = this.__data__;
  if (oQ) {
    var r3 = t10[e10];
    return "__lodash_hash_undefined__" === r3 ? void 0 : r3;
  }
  return o0.call(t10, e10) ? t10[e10] : void 0;
}, o2.prototype.has = function(e10) {
  var t10 = this.__data__;
  return oQ ? void 0 !== t10[e10] : o1.call(t10, e10);
}, o2.prototype.set = function(e10, t10) {
  var r3 = this.__data__;
  return this.size += this.has(e10) ? 0 : 1, r3[e10] = oQ && void 0 === t10 ? "__lodash_hash_undefined__" : t10, this;
};
var o3 = Array.prototype.splice;
function o5(e10) {
  var t10 = -1, r3 = null == e10 ? 0 : e10.length;
  for (this.clear(); ++t10 < r3; ) {
    var o10 = e10[t10];
    this.set(o10[0], o10[1]);
  }
}
o5.prototype.clear = function() {
  this.__data__ = [], this.size = 0;
}, o5.prototype.delete = function(e10) {
  var t10 = this.__data__, r3 = o4(t10, e10);
  return !(r3 < 0) && (r3 == t10.length - 1 ? t10.pop() : o3.call(t10, r3, 1), --this.size, true);
}, o5.prototype.get = function(e10) {
  var t10 = this.__data__, r3 = o4(t10, e10);
  return r3 < 0 ? void 0 : t10[r3][1];
}, o5.prototype.has = function(e10) {
  return o4(this.__data__, e10) > -1;
}, o5.prototype.set = function(e10, t10) {
  var r3 = this.__data__, o10 = o4(r3, e10);
  return o10 < 0 ? (++this.size, r3.push([e10, t10])) : r3[o10][1] = t10, this;
};
var o6 = n7(r8, "Map");
function o8(e10, t10) {
  var r3, o10 = e10.__data__;
  return ("string" == (r3 = typeof t10) || "number" == r3 || "symbol" == r3 || "boolean" == r3 ? "__proto__" !== t10 : null === t10) ? o10["string" == typeof t10 ? "string" : "hash"] : o10.map;
}
function o9(e10) {
  var t10 = -1, r3 = null == e10 ? 0 : e10.length;
  for (this.clear(); ++t10 < r3; ) {
    var o10 = e10[t10];
    this.set(o10[0], o10[1]);
  }
}
function o7(e10, t10) {
  if ("function" != typeof e10 || null != t10 && "function" != typeof t10)
    throw TypeError("Expected a function");
  var r3 = function() {
    var o10 = arguments, i10 = t10 ? t10.apply(this, o10) : o10[0], a10 = r3.cache;
    if (a10.has(i10))
      return a10.get(i10);
    var l10 = e10.apply(this, o10);
    return r3.cache = a10.set(i10, l10) || a10, l10;
  };
  return r3.cache = new (o7.Cache || o9)(), r3;
}
o9.prototype.clear = function() {
  this.size = 0, this.__data__ = { hash: new o2(), map: new (o6 || o5)(), string: new o2() };
}, o9.prototype.delete = function(e10) {
  var t10 = o8(this, e10).delete(e10);
  return this.size -= t10 ? 1 : 0, t10;
}, o9.prototype.get = function(e10) {
  return o8(this, e10).get(e10);
}, o9.prototype.has = function(e10) {
  return o8(this, e10).has(e10);
}, o9.prototype.set = function(e10, t10) {
  var r3 = o8(this, e10), o10 = r3.size;
  return r3.set(e10, t10), this.size += r3.size == o10 ? 0 : 1, this;
}, o7.Cache = o9;
var ie = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, it = /\\(\\)?/g, ir = (m = (h = o7(function(e10) {
  var t10 = [];
  return 46 === e10.charCodeAt(0) && t10.push(""), e10.replace(ie, function(e11, r3, o10, i10) {
    t10.push(o10 ? i10.replace(it, "$1") : r3 || e11);
  }), t10;
}, function(e10) {
  return 500 === m.size && m.clear(), e10;
})).cache, h);
function io(e10) {
  return null == e10 ? "" : np(e10);
}
function ii(e10, t10) {
  return nu(e10) ? e10 : oJ(e10, t10) ? [e10] : ir(io(e10));
}
var ia = 1 / 0;
function il(e10) {
  if ("string" == typeof e10 || nl(e10))
    return e10;
  var t10 = e10 + "";
  return "0" == t10 && 1 / e10 == -ia ? "-0" : t10;
}
function is(e10, t10) {
  t10 = ii(t10, e10);
  for (var r3 = 0, o10 = t10.length; null != e10 && r3 < o10; )
    e10 = e10[il(t10[r3++])];
  return r3 && r3 == o10 ? e10 : void 0;
}
function iu(e10, t10, r3) {
  var o10 = null == e10 ? void 0 : is(e10, t10);
  return void 0 === o10 ? r3 : o10;
}
function ic(e10, t10) {
  for (var r3 = -1, o10 = t10.length, i10 = e10.length; ++r3 < o10; )
    e10[i10 + r3] = t10[r3];
  return e10;
}
var id = r9 ? r9.isConcatSpreadable : void 0;
function ip(e10) {
  return nu(e10) || oA(e10) || !!(id && e10 && e10[id]);
}
var ih = oU(Object.getPrototypeOf, Object), im = Object.prototype, iv = Function.prototype.toString, ig = im.hasOwnProperty, iy = iv.call(Object);
function ib(e10) {
  if (!na(e10) || "[object Object]" != ni(e10))
    return false;
  var t10 = ih(e10);
  if (null === t10)
    return true;
  var r3 = ig.call(t10, "constructor") && t10.constructor;
  return "function" == typeof r3 && r3 instanceof r3 && iv.call(r3) == iy;
}
function i_(e10, t10, r3) {
  var o10 = -1, i10 = e10.length;
  t10 < 0 && (t10 = -t10 > i10 ? 0 : i10 + t10), (r3 = r3 > i10 ? i10 : r3) < 0 && (r3 += i10), i10 = t10 > r3 ? 0 : r3 - t10 >>> 0, t10 >>>= 0;
  for (var a10 = Array(i10); ++o10 < i10; )
    a10[o10] = e10[o10 + t10];
  return a10;
}
function iw(e10, t10, r3) {
  var o10 = e10.length;
  return r3 = void 0 === r3 ? o10 : r3, !t10 && r3 >= o10 ? e10 : i_(e10, t10, r3);
}
var ix = RegExp("[\\u200d\uD800-\uDFFF\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
function ik(e10) {
  return ix.test(e10);
}
var iS = "\uD800-\uDFFF", iO = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", iC = "\uD83C[\uDFFB-\uDFFF]", iE = "[^" + iS + "]", iA = "(?:\uD83C[\uDDE6-\uDDFF]){2}", iP = "[\uD800-\uDBFF][\uDC00-\uDFFF]", iM = "(?:" + iO + "|" + iC + ")?", ij = "[\\ufe0e\\ufe0f]?", iR = "(?:\\u200d(?:" + [iE, iA, iP].join("|") + ")" + ij + iM + ")*", iT = RegExp(iC + "(?=" + iC + ")|(?:" + [iE + iO + "?", iO, iA, iP, "[" + iS + "]"].join("|") + ")" + (ij + iM + iR), "g");
function iI(e10) {
  return ik(e10) ? e10.match(iT) || [] : e10.split("");
}
var i$ = function(e10) {
  var t10 = ik(e10 = io(e10)) ? iI(e10) : void 0, r3 = t10 ? t10[0] : e10.charAt(0), o10 = t10 ? iw(t10, 1).join("") : e10.slice(1);
  return r3.toUpperCase() + o10;
}, iD = (g = { À: "A", Á: "A", Â: "A", Ã: "A", Ä: "A", Å: "A", à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", Ç: "C", ç: "c", Ð: "D", ð: "d", È: "E", É: "E", Ê: "E", Ë: "E", è: "e", é: "e", ê: "e", ë: "e", Ì: "I", Í: "I", Î: "I", Ï: "I", ì: "i", í: "i", î: "i", ï: "i", Ñ: "N", ñ: "n", Ò: "O", Ó: "O", Ô: "O", Õ: "O", Ö: "O", Ø: "O", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o", Ù: "U", Ú: "U", Û: "U", Ü: "U", ù: "u", ú: "u", û: "u", ü: "u", Ý: "Y", ý: "y", ÿ: "y", Æ: "Ae", æ: "ae", Þ: "Th", þ: "th", ß: "ss", Ā: "A", Ă: "A", Ą: "A", ā: "a", ă: "a", ą: "a", Ć: "C", Ĉ: "C", Ċ: "C", Č: "C", ć: "c", ĉ: "c", ċ: "c", č: "c", Ď: "D", Đ: "D", ď: "d", đ: "d", Ē: "E", Ĕ: "E", Ė: "E", Ę: "E", Ě: "E", ē: "e", ĕ: "e", ė: "e", ę: "e", ě: "e", Ĝ: "G", Ğ: "G", Ġ: "G", Ģ: "G", ĝ: "g", ğ: "g", ġ: "g", ģ: "g", Ĥ: "H", Ħ: "H", ĥ: "h", ħ: "h", Ĩ: "I", Ī: "I", Ĭ: "I", Į: "I", İ: "I", ĩ: "i", ī: "i", ĭ: "i", į: "i", ı: "i", Ĵ: "J", ĵ: "j", Ķ: "K", ķ: "k", ĸ: "k", Ĺ: "L", Ļ: "L", Ľ: "L", Ŀ: "L", Ł: "L", ĺ: "l", ļ: "l", ľ: "l", ŀ: "l", ł: "l", Ń: "N", Ņ: "N", Ň: "N", Ŋ: "N", ń: "n", ņ: "n", ň: "n", ŋ: "n", Ō: "O", Ŏ: "O", Ő: "O", ō: "o", ŏ: "o", ő: "o", Ŕ: "R", Ŗ: "R", Ř: "R", ŕ: "r", ŗ: "r", ř: "r", Ś: "S", Ŝ: "S", Ş: "S", Š: "S", ś: "s", ŝ: "s", ş: "s", š: "s", Ţ: "T", Ť: "T", Ŧ: "T", ţ: "t", ť: "t", ŧ: "t", Ũ: "U", Ū: "U", Ŭ: "U", Ů: "U", Ű: "U", Ų: "U", ũ: "u", ū: "u", ŭ: "u", ů: "u", ű: "u", ų: "u", Ŵ: "W", ŵ: "w", Ŷ: "Y", ŷ: "y", Ÿ: "Y", Ź: "Z", Ż: "Z", Ž: "Z", ź: "z", ż: "z", ž: "z", Ĳ: "IJ", ĳ: "ij", Œ: "Oe", œ: "oe", ŉ: "'n", ſ: "s" }, function(e10) {
  return null == g ? void 0 : g[e10];
}), iL = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, iF = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g"), iV = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, iz = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, iN = "\uD800-\uDFFF", iB = "\\u2700-\\u27bf", iU = "a-z\\xdf-\\xf6\\xf8-\\xff", iH = "A-Z\\xc0-\\xd6\\xd8-\\xde", iW = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", iq = "['’]", iG = "[" + iW + "]", iY = "[" + iU + "]", iK = "[^" + iN + iW + "\\d+" + iB + iU + iH + "]", iZ = "(?:\uD83C[\uDDE6-\uDDFF]){2}", iX = "[\uD800-\uDBFF][\uDC00-\uDFFF]", iJ = "[" + iH + "]", iQ = "(?:" + iY + "|" + iK + ")", i0 = "(?:" + iq + "(?:d|ll|m|re|s|t|ve))?", i1 = "(?:" + iq + "(?:D|LL|M|RE|S|T|VE))?", i2 = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\uD83C[\uDFFB-\uDFFF])?", i4 = "[\\ufe0e\\ufe0f]?", i3 = "(?:\\u200d(?:" + ["[^" + iN + "]", iZ, iX].join("|") + ")" + i4 + i2 + ")*", i5 = "(?:" + ["[" + iB + "]", iZ, iX].join("|") + ")" + (i4 + i2 + i3), i6 = RegExp([iJ + "?" + iY + "+" + i0 + "(?=" + [iG, iJ, "$"].join("|") + ")", "(?:" + iJ + "|" + iK + ")+" + i1 + "(?=" + [iG, iJ + iQ, "$"].join("|") + ")", iJ + "?" + iQ + "+" + i0, iJ + "+" + i1, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", i5].join("|"), "g"), i8 = RegExp("['’]", "g");
function i9(e10) {
  return function(t10) {
    var r3;
    return function(e11, t11, r10, o10) {
      for (var i10 = -1, a10 = null == e11 ? 0 : e11.length; ++i10 < a10; )
        r10 = t11(r10, e11[i10], i10, e11);
      return r10;
    }(function(e11, t11, r10) {
      var o10;
      e11 = io(e11);
      return (o10 = e11, iz.test(o10)) ? e11.match(i6) || [] : e11.match(iV) || [];
    }(((r3 = io(r3 = t10)) && r3.replace(iL, iD).replace(iF, "")).replace(i8, "")), e10, "");
  };
}
var i7 = i9(function(e10, t10, r3) {
  return t10 = t10.toLowerCase(), e10 + (r3 ? i$(io(t10).toLowerCase()) : t10);
});
function ae(e10) {
  var t10 = this.__data__ = new o5(e10);
  this.size = t10.size;
}
ae.prototype.clear = function() {
  this.__data__ = new o5(), this.size = 0;
}, ae.prototype.delete = function(e10) {
  var t10 = this.__data__, r3 = t10.delete(e10);
  return this.size = t10.size, r3;
}, ae.prototype.get = function(e10) {
  return this.__data__.get(e10);
}, ae.prototype.has = function(e10) {
  return this.__data__.has(e10);
}, ae.prototype.set = function(e10, t10) {
  var r3 = this.__data__;
  if (r3 instanceof o5) {
    var o10 = r3.__data__;
    if (!o6 || o10.length < 199)
      return o10.push([e10, t10]), this.size = ++r3.size, this;
    r3 = this.__data__ = new o9(o10);
  }
  return r3.set(e10, t10), this.size = r3.size, this;
};
var at = "object" == typeof exports && exports && !exports.nodeType && exports, ar = at && "object" == typeof module && module && !module.nodeType && module, an = ar && ar.exports === at ? r8.Buffer : void 0, ao = an ? an.allocUnsafe : void 0;
function ai() {
  return [];
}
var aa = Object.prototype.propertyIsEnumerable, al = Object.getOwnPropertySymbols, as = al ? function(e10) {
  return null == e10 ? [] : function(e11, t10) {
    for (var r3 = -1, o10 = null == e11 ? 0 : e11.length, i10 = 0, a10 = []; ++r3 < o10; ) {
      var l10 = e11[r3];
      t10(l10, r3, e11) && (a10[i10++] = l10);
    }
    return a10;
  }(al(e10 = Object(e10)), function(t10) {
    return aa.call(e10, t10);
  });
} : ai, au = Object.getOwnPropertySymbols ? function(e10) {
  for (var t10 = []; e10; )
    ic(t10, as(e10)), e10 = ih(e10);
  return t10;
} : ai;
function ac(e10, t10, r3) {
  var o10 = t10(e10);
  return nu(e10) ? o10 : ic(o10, r3(e10));
}
function af(e10) {
  return ac(e10, oG, as);
}
function ad(e10) {
  return ac(e10, oK, au);
}
var ap = n7(r8, "DataView"), ah = n7(r8, "Promise"), am = n7(r8, "Set"), av = "[object Map]", ag = "[object Promise]", ay = "[object Set]", ab = "[object WeakMap]", a_ = "[object DataView]", aw = n4(ap), ax = n4(o6), ak = n4(ah), aS = n4(am), aO = n4(oe), aC = ni;
(ap && aC(new ap(new ArrayBuffer(1))) != a_ || o6 && aC(new o6()) != av || ah && aC(ah.resolve()) != ag || am && aC(new am()) != ay || oe && aC(new oe()) != ab) && (aC = function(e10) {
  var t10 = ni(e10), r3 = "[object Object]" == t10 ? e10.constructor : void 0, o10 = r3 ? n4(r3) : "";
  if (o10)
    switch (o10) {
      case aw:
        return a_;
      case ax:
        return av;
      case ak:
        return ag;
      case aS:
        return ay;
      case aO:
        return ab;
    }
  return t10;
});
let aE = aC;
var aA = Object.prototype.hasOwnProperty, aP = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView, aM = !es(function() {
  function e10() {
  }
  return e10.prototype.constructor = null, Object.getPrototypeOf(new e10()) !== e10.prototype;
}), aj = tC("IE_PROTO"), aR = Object, aT = aR.prototype, aI = aM ? aR.getPrototypeOf : function(e10) {
  var t10 = e4(e10);
  if (e5(t10, aj))
    return t10[aj];
  var r3 = t10.constructor;
  return ea(r3) && t10 instanceof r3 ? r3.prototype : t10 instanceof aR ? aT : null;
}, a$ = ef.Int8Array, aD = a$ && a$.prototype, aL = ef.Uint8ClampedArray, aF = aL && aL.prototype, aV = a$ && aI(a$), az = aD && aI(aD), aN = Object.prototype, aB = ef.TypeError, aU = tn("toStringTag"), aH = e7("TYPED_ARRAY_TAG"), aW = "TypedArrayConstructor", aq = aP && !!nx && "Opera" !== t1(ef.opera), aG = false, aY = { Int8Array: 1, Uint8Array: 1, Uint8ClampedArray: 1, Int16Array: 2, Uint16Array: 2, Int32Array: 4, Uint32Array: 4, Float32Array: 4, Float64Array: 8 }, aK = { BigInt64Array: 8, BigUint64Array: 8 }, aZ = function(e10) {
  var t10 = aI(e10);
  if (ed(t10)) {
    var r3 = tT(t10);
    return r3 && e5(r3, aW) ? r3[aW] : aZ(t10);
  }
}, aX = function(e10) {
  if (!ed(e10))
    return false;
  var t10 = t1(e10);
  return e5(aY, t10) || e5(aK, t10);
};
for (B in aY)
  (H = (U = ef[B]) && U.prototype) ? tI(H)[aW] = U : aq = false;
for (B in aK)
  (H = (U = ef[B]) && U.prototype) && (tI(H)[aW] = U);
if ((!aq || !ea(aV) || aV === Function.prototype) && (aV = function() {
  throw new aB("Incorrect invocation");
}, aq))
  for (B in aY)
    ef[B] && nx(ef[B], aV);
if ((!aq || !az || az === aN) && (az = aV.prototype, aq))
  for (B in aY)
    ef[B] && nx(ef[B].prototype, az);
if (aq && aI(aF) !== az && nx(aF, az), eu && !e5(az, aU))
  for (B in rs(az, aU, { configurable: true, get: function() {
    return ed(this) ? this[aH] : void 0;
  } }), aY)
    ef[B] && tS(ef[B], aH, B);
var aJ = { NATIVE_ARRAY_BUFFER_VIEWS: aq, aTypedArray: function(e10) {
  if (aX(e10))
    return e10;
  throw new aB("Target is not a typed array");
}, exportTypedArrayMethod: function(e10, t10, r3, o10) {
  if (eu) {
    if (r3)
      for (var i10 in aY) {
        var a10 = ef[i10];
        if (a10 && e5(a10.prototype, e10))
          try {
            delete a10.prototype[e10];
          } catch (r10) {
            try {
              a10.prototype[e10] = t10;
            } catch (e11) {
            }
          }
      }
    (!az[e10] || r3) && tH(az, e10, r3 ? t10 : aq && aD[e10] || t10, o10);
  }
}, getTypedArrayConstructor: aZ, TypedArrayPrototype: az }, aQ = aJ.aTypedArray;
(0, aJ.exportTypedArrayMethod)("at", function(e10) {
  var t10 = aQ(this), r3 = rM(t10), o10 = rO(e10), i10 = o10 >= 0 ? o10 : r3 + o10;
  return i10 < 0 || i10 >= r3 ? void 0 : t10[i10];
});
var a0 = function(e10) {
  if ("Function" === tZ(e10))
    return eE(e10);
}, a1 = a0(a0.bind), a2 = function(e10, t10) {
  return eU(e10), void 0 === t10 ? e10 : e_ ? a1(e10, t10) : function() {
    return e10.apply(t10, arguments);
  };
}, a4 = function(e10) {
  var t10 = 1 === e10;
  return function(r3, o10, i10) {
    for (var a10, l10 = e4(r3), s10 = ry(l10), u10 = rM(s10), c10 = a2(o10, i10); u10-- > 0; )
      if (c10(a10 = s10[u10], u10, l10))
        switch (e10) {
          case 0:
            return a10;
          case 1:
            return u10;
        }
    return t10 ? -1 : void 0;
  };
}, a3 = { findLast: a4(0), findLastIndex: a4(1) }, a5 = a3.findLast, a6 = aJ.aTypedArray;
(0, aJ.exportTypedArrayMethod)("findLast", function(e10) {
  return a5(a6(this), e10, arguments.length > 1 ? arguments[1] : void 0);
});
var a8 = a3.findLastIndex, a9 = aJ.aTypedArray;
(0, aJ.exportTypedArrayMethod)("findLastIndex", function(e10) {
  return a8(a9(this), e10, arguments.length > 1 ? arguments[1] : void 0);
});
var a7 = RangeError, le = function(e10) {
  var t10 = rO(e10);
  if (t10 < 0)
    throw new a7("The argument can't be less than 0");
  return t10;
}, lt = RangeError, lr = function(e10, t10) {
  var r3 = le(e10);
  if (r3 % t10)
    throw new lt("Wrong offset");
  return r3;
}, ln = ef.RangeError, lo = ef.Int8Array, li = lo && lo.prototype, la = li && li.set, ll = aJ.aTypedArray, ls = aJ.exportTypedArrayMethod, lu = !es(function() {
  var e10 = new Uint8ClampedArray(2);
  return ex(la, e10, { length: 1, 0: 3 }, 1), 3 !== e10[1];
}), lc = lu && aJ.NATIVE_ARRAY_BUFFER_VIEWS && es(function() {
  var e10 = new lo(2);
  return e10.set(1), e10.set("2", 1), 0 !== e10[0] || 2 !== e10[1];
});
ls("set", function(e10) {
  ll(this);
  var t10 = lr(arguments.length > 1 ? arguments[1] : void 0, 1), r3 = e4(e10);
  if (lu)
    return ex(la, this, r3, t10);
  var o10 = this.length, i10 = rM(r3), a10 = 0;
  if (i10 + t10 > o10)
    throw new ln("Wrong length");
  for (; a10 < i10; )
    this[t10 + a10] = r3[a10++];
}, !lu || lc);
var lf = function(e10, t10) {
  for (var r3 = rM(e10), o10 = new t10(r3), i10 = 0; i10 < r3; i10++)
    o10[i10] = e10[r3 - i10 - 1];
  return o10;
}, ld = aJ.aTypedArray, lp = aJ.exportTypedArrayMethod, lh = aJ.getTypedArrayConstructor;
lp("toReversed", function() {
  return lf(ld(this), lh(this));
});
var lm = function(e10, t10, r3) {
  for (var o10 = 0, i10 = arguments.length > 2 ? r3 : rM(t10), a10 = new e10(i10); i10 > o10; )
    a10[o10] = t10[o10++];
  return a10;
}, lv = aJ.aTypedArray, lg = aJ.getTypedArrayConstructor, ly = aJ.exportTypedArrayMethod, lb = eE(aJ.TypedArrayPrototype.sort);
ly("toSorted", function(e10) {
  void 0 !== e10 && eU(e10);
  var t10 = lv(this);
  return lb(lm(lg(t10), t10), e10);
});
var l_ = RangeError, lw = TypeError, lx = function(e10, t10, r3, o10) {
  var i10 = rM(e10), a10 = rO(r3), l10 = a10 < 0 ? i10 + a10 : a10;
  if (l10 >= i10 || l10 < 0)
    throw new l_("Incorrect index");
  for (var s10 = new t10(i10), u10 = 0; u10 < i10; u10++)
    s10[u10] = u10 === l10 ? o10 : e10[u10];
  return s10;
}, lk = function(e10) {
  var t10 = t1(e10);
  return "BigInt64Array" === t10 || "BigUint64Array" === t10;
}, lS = function(e10) {
  var t10 = tl(e10, "number");
  if ("number" == typeof t10)
    throw new lw("Can't convert number to bigint");
  return BigInt(t10);
}, lO = aJ.aTypedArray, lC = aJ.getTypedArrayConstructor;
(0, aJ.exportTypedArrayMethod)("with", { with: function(e10, t10) {
  var r3 = lO(this), o10 = rO(e10), i10 = lk(r3) ? lS(t10) : +t10;
  return lx(r3, lC(r3), o10, i10);
} }.with, !function() {
  try {
    new Int8Array(1).with(2, { valueOf: function() {
      throw 8;
    } });
  } catch (e10) {
    return 8 === e10;
  }
}());
var lE = r8.Uint8Array;
function lA(e10) {
  var t10 = new e10.constructor(e10.byteLength);
  return new lE(t10).set(new lE(e10)), t10;
}
var lP = /\w*$/, lM = r9 ? r9.prototype : void 0, lj = lM ? lM.valueOf : void 0, lR = oF && oF.isMap, lT = lR ? oI(lR) : function(e10) {
  return na(e10) && "[object Map]" == aE(e10);
}, lI = oF && oF.isSet, l$ = lI ? oI(lI) : function(e10) {
  return na(e10) && "[object Set]" == aE(e10);
}, lD = "[object Arguments]", lL = "[object Function]", lF = "[object Object]", lV = {};
function lz(e10) {
  var t10 = -1, r3 = null == e10 ? 0 : e10.length;
  for (this.__data__ = new o9(); ++t10 < r3; )
    this.add(e10[t10]);
}
function lN(e10, t10) {
  for (var r3 = -1, o10 = null == e10 ? 0 : e10.length; ++r3 < o10; )
    if (t10(e10[r3], r3, e10))
      return true;
  return false;
}
function lB(e10, t10, r3, o10, i10, a10) {
  var l10 = 1 & r3, s10 = e10.length, u10 = t10.length;
  if (s10 != u10 && !(l10 && u10 > s10))
    return false;
  var c10 = a10.get(e10), f10 = a10.get(t10);
  if (c10 && f10)
    return c10 == t10 && f10 == e10;
  var d10 = -1, p10 = true, h10 = 2 & r3 ? new lz() : void 0;
  for (a10.set(e10, t10), a10.set(t10, e10); ++d10 < s10; ) {
    var m10 = e10[d10], g10 = t10[d10];
    if (o10)
      var y10 = l10 ? o10(g10, m10, d10, t10, e10, a10) : o10(m10, g10, d10, e10, t10, a10);
    if (void 0 !== y10) {
      if (y10)
        continue;
      p10 = false;
      break;
    }
    if (h10) {
      if (!lN(t10, function(e11, t11) {
        if (!h10.has(t11) && (m10 === e11 || i10(m10, e11, r3, o10, a10)))
          return h10.push(t11);
      })) {
        p10 = false;
        break;
      }
    } else if (!(m10 === g10 || i10(m10, g10, r3, o10, a10))) {
      p10 = false;
      break;
    }
  }
  return a10.delete(e10), a10.delete(t10), p10;
}
function lU(e10) {
  var t10 = -1, r3 = Array(e10.size);
  return e10.forEach(function(e11, o10) {
    r3[++t10] = [o10, e11];
  }), r3;
}
function lH(e10) {
  var t10 = -1, r3 = Array(e10.size);
  return e10.forEach(function(e11) {
    r3[++t10] = e11;
  }), r3;
}
lV[lD] = lV["[object Array]"] = lV["[object ArrayBuffer]"] = lV["[object DataView]"] = lV["[object Boolean]"] = lV["[object Date]"] = lV["[object Float32Array]"] = lV["[object Float64Array]"] = lV["[object Int8Array]"] = lV["[object Int16Array]"] = lV["[object Int32Array]"] = lV["[object Map]"] = lV["[object Number]"] = lV[lF] = lV["[object RegExp]"] = lV["[object Set]"] = lV["[object String]"] = lV["[object Symbol]"] = lV["[object Uint8Array]"] = lV["[object Uint8ClampedArray]"] = lV["[object Uint16Array]"] = lV["[object Uint32Array]"] = true, lV["[object Error]"] = lV[lL] = lV["[object WeakMap]"] = false, lz.prototype.add = lz.prototype.push = function(e10) {
  return this.__data__.set(e10, "__lodash_hash_undefined__"), this;
}, lz.prototype.has = function(e10) {
  return this.__data__.has(e10);
};
var lW = r9 ? r9.prototype : void 0, lq = lW ? lW.valueOf : void 0, lG = Object.prototype.hasOwnProperty, lY = "[object Arguments]", lK = "[object Array]", lZ = "[object Object]", lX = Object.prototype.hasOwnProperty;
function lJ(e10, t10, r3, o10, i10) {
  return e10 === t10 || (null != e10 && null != t10 && (na(e10) || na(t10)) ? function(e11, t11, r10, o11, i11, a10) {
    var l10 = nu(e11), s10 = nu(t11), u10 = l10 ? lK : aE(e11), c10 = s10 ? lK : aE(t11);
    u10 = u10 == lY ? lZ : u10, c10 = c10 == lY ? lZ : c10;
    var f10 = u10 == lZ, d10 = c10 == lZ, p10 = u10 == c10;
    if (p10 && oR(e11)) {
      if (!oR(t11))
        return false;
      l10 = true, f10 = false;
    }
    if (p10 && !f10)
      return a10 || (a10 = new ae()), l10 || oz(e11) ? lB(e11, t11, r10, o11, i11, a10) : function(e12, t12, r11, o12, i12, a11, l11) {
        switch (r11) {
          case "[object DataView]":
            if (e12.byteLength != t12.byteLength || e12.byteOffset != t12.byteOffset)
              break;
            e12 = e12.buffer, t12 = t12.buffer;
          case "[object ArrayBuffer]":
            if (e12.byteLength != t12.byteLength || !a11(new lE(e12), new lE(t12)))
              break;
            return true;
          case "[object Boolean]":
          case "[object Date]":
          case "[object Number]":
            return om(+e12, +t12);
          case "[object Error]":
            return e12.name == t12.name && e12.message == t12.message;
          case "[object RegExp]":
          case "[object String]":
            return e12 == t12 + "";
          case "[object Map]":
            var s11 = lU;
          case "[object Set]":
            var u11 = 1 & o12;
            if (s11 || (s11 = lH), e12.size != t12.size && !u11)
              break;
            var c11 = l11.get(e12);
            if (c11)
              return c11 == t12;
            o12 |= 2, l11.set(e12, t12);
            var f11 = lB(s11(e12), s11(t12), o12, i12, a11, l11);
            return l11.delete(e12), f11;
          case "[object Symbol]":
            if (lq)
              return lq.call(e12) == lq.call(t12);
        }
        return false;
      }(e11, t11, u10, r10, o11, i11, a10);
    if (!(1 & r10)) {
      var h10 = f10 && lX.call(e11, "__wrapped__"), m10 = d10 && lX.call(t11, "__wrapped__");
      if (h10 || m10) {
        var g10 = h10 ? e11.value() : e11, y10 = m10 ? t11.value() : t11;
        return a10 || (a10 = new ae()), i11(g10, y10, r10, o11, a10);
      }
    }
    return !!p10 && (a10 || (a10 = new ae()), function(e12, t12, r11, o12, i12, a11) {
      var l11 = 1 & r11, s11 = af(e12), u11 = s11.length;
      if (u11 != af(t12).length && !l11)
        return false;
      for (var c11 = u11; c11--; ) {
        var f11 = s11[c11];
        if (!(l11 ? f11 in t12 : lG.call(t12, f11)))
          return false;
      }
      var d11 = a11.get(e12), p11 = a11.get(t12);
      if (d11 && p11)
        return d11 == t12 && p11 == e12;
      var h11 = true;
      a11.set(e12, t12), a11.set(t12, e12);
      for (var m11 = l11; ++c11 < u11; ) {
        var g11 = e12[f11 = s11[c11]], y11 = t12[f11];
        if (o12)
          var b10 = l11 ? o12(y11, g11, f11, t12, e12, a11) : o12(g11, y11, f11, e12, t12, a11);
        if (!(void 0 === b10 ? g11 === y11 || i12(g11, y11, r11, o12, a11) : b10)) {
          h11 = false;
          break;
        }
        m11 || (m11 = "constructor" == f11);
      }
      if (h11 && !m11) {
        var _10 = e12.constructor, w10 = t12.constructor;
        _10 != w10 && "constructor" in e12 && "constructor" in t12 && !("function" == typeof _10 && _10 instanceof _10 && "function" == typeof w10 && w10 instanceof w10) && (h11 = false);
      }
      return a11.delete(e12), a11.delete(t12), h11;
    }(e11, t11, r10, o11, i11, a10));
  }(e10, t10, r3, o10, lJ, i10) : e10 != e10 && t10 != t10);
}
function lQ(e10, t10) {
  return function(r3) {
    return null != r3 && r3[e10] === t10 && (void 0 !== t10 || e10 in Object(r3));
  };
}
function l0(e10, t10) {
  return null != e10 && t10 in Object(e10);
}
function l1(e10, t10, r3) {
  t10 = ii(t10, e10);
  for (var o10 = -1, i10 = t10.length, a10 = false; ++o10 < i10; ) {
    var l10 = il(t10[o10]);
    if (!(a10 = null != e10 && r3(e10, l10)))
      break;
    e10 = e10[l10];
  }
  return a10 || ++o10 != i10 ? a10 : !!(i10 = null == e10 ? 0 : e10.length) && o_(i10) && op(l10, i10) && (nu(e10) || oA(e10));
}
function l2(e10) {
  return function(t10) {
    return null == t10 ? void 0 : t10[e10];
  };
}
function l4(e10) {
  var t10, r3, o10, i10;
  return "function" == typeof e10 ? e10 : null == e10 ? nJ : "object" == typeof e10 ? nu(e10) ? (t10 = e10[0], r3 = e10[1], oJ(t10) && (o10 = r3) == o10 && !nW(o10) ? lQ(il(t10), r3) : function(e11) {
    var o11 = iu(e11, t10);
    return void 0 === o11 && o11 === r3 ? null != e11 && l1(e11, t10, l0) : lJ(r3, o11, 3);
  }) : 1 == (i10 = function(e11) {
    for (var t11 = oG(e11), r10 = t11.length; r10--; ) {
      var o11 = t11[r10], i11 = e11[o11];
      t11[r10] = [o11, i11, i11 == i11 && !nW(i11)];
    }
    return t11;
  }(e10)).length && i10[0][2] ? lQ(i10[0][0], i10[0][1]) : function(t11) {
    return t11 === e10 || function(e11, t12, r10, o11) {
      var i11 = r10.length, a10 = i11;
      if (null == e11)
        return !a10;
      for (e11 = Object(e11); i11--; ) {
        var l10 = r10[i11];
        if (l10[2] ? l10[1] !== e11[l10[0]] : !(l10[0] in e11))
          return false;
      }
      for (; ++i11 < a10; ) {
        var s10 = (l10 = r10[i11])[0], u10 = e11[s10], c10 = l10[1];
        if (l10[2]) {
          if (void 0 === u10 && !(s10 in e11))
            return false;
        } else {
          var f10, d10 = new ae();
          if (!(void 0 === f10 ? lJ(c10, u10, 3, void 0, d10) : f10))
            return false;
        }
      }
      return true;
    }(t11, 0, i10);
  } : oJ(e10) ? l2(il(e10)) : function(t11) {
    return is(t11, e10);
  };
}
function l3(e10, t10, r3, o10) {
  for (var i10 = -1, a10 = null == e10 ? 0 : e10.length; ++i10 < a10; ) {
    var l10 = e10[i10];
    t10(o10, l10, r3(l10), e10);
  }
  return o10;
}
var l5 = function(e10, t10, r3) {
  for (var o10 = -1, i10 = Object(e10), a10 = r3(e10), l10 = a10.length; l10--; ) {
    var s10 = a10[++o10];
    if (false === t10(i10[s10], s10, i10))
      break;
  }
  return e10;
};
function l6(e10, t10) {
  return e10 && l5(e10, t10, oG);
}
var l8 = function(e10, t10) {
  if (null == e10)
    return e10;
  if (!ow(e10)) {
    var r3, o10;
    return r3 = e10, o10 = t10, r3 && l5(r3, o10, oG);
  }
  for (var i10 = e10.length, a10 = -1, l10 = Object(e10); (y ? a10-- : ++a10 < i10) && false !== t10(l10[a10], a10, l10); )
    ;
  return e10;
};
function l9(e10, t10, r3, o10) {
  return l8(e10, function(e11, i10, a10) {
    t10(o10, e11, r3(e11), a10);
  }), o10;
}
function l7(e10, t10) {
  return function(r3, o10) {
    var i10 = nu(r3) ? l3 : l9, a10 = t10 ? t10() : {};
    return i10(r3, e10, l4(o10), a10);
  };
}
function se(e10) {
  var t10 = null == e10 ? 0 : e10.length;
  return t10 ? e10[t10 - 1] : void 0;
}
function st(e10, t10) {
  return (nu(e10) ? ns : function(e11, t11) {
    var r3 = -1, o10 = ow(e11) ? Array(e11.length) : [];
    return l8(e11, function(e12, i10, a10) {
      o10[++r3] = t11(e12, i10, a10);
    }), o10;
  })(e10, l4(t10));
}
var sr = Object.prototype.hasOwnProperty, sn = l7(function(e10, t10, r3) {
  sr.call(e10, r3) ? e10[r3].push(t10) : oh(e10, r3, [t10]);
}), so = Object.prototype.hasOwnProperty;
function si(e10, t10) {
  return null != e10 && so.call(e10, t10);
}
function sa(e10, t10) {
  return null != e10 && l1(e10, t10, si);
}
function sl(e10) {
  return "string" == typeof e10 || !nu(e10) && na(e10) && "[object String]" == ni(e10);
}
var ss = Object.prototype.hasOwnProperty;
function su(e10) {
  if (null == e10)
    return true;
  if (ow(e10) && (nu(e10) || "string" == typeof e10 || "function" == typeof e10.splice || oR(e10) || oz(e10) || oA(e10)))
    return !e10.length;
  var t10 = aE(e10);
  if ("[object Map]" == t10 || "[object Set]" == t10)
    return !e10.size;
  if (ok(e10))
    return !oq(e10).length;
  for (var r3 in e10)
    if (ss.call(e10, r3))
      return false;
  return true;
}
function sc(e10) {
  return "number" == typeof e10 || na(e10) && "[object Number]" == ni(e10);
}
function sf(e10) {
  return void 0 === e10;
}
var sd = i9(function(e10, t10, r3) {
  return e10 + (r3 ? "-" : "") + t10.toLowerCase();
});
function sp(e10, t10) {
  var r3, o10, i10 = {};
  return t10 = l4(t10), r3 = e10, o10 = function(e11, r10, o11) {
    oh(i10, r10, t10(e11, r10, o11));
  }, r3 && l5(r3, o10, oG), i10;
}
function sh(e10) {
  return ib(e10) ? void 0 : e10;
}
var sm = oi((_ = b = function(e10, t10) {
  var r3 = {};
  if (null == e10)
    return r3;
  var o10 = false;
  t10 = ns(t10, function(t11) {
    return t11 = ii(t11, e10), o10 || (o10 = t11.length > 1), t11;
  }), oy(e10, ad(e10), r3), o10 && (r3 = function e11(t11, r10, o11, i11, a10, l10) {
    var s10, u10 = 1 & r10, c10 = 2 & r10, f10 = 4 & r10;
    if (o11 && (s10 = a10 ? o11(t11, i11, a10, l10) : o11(t11)), void 0 !== s10)
      return s10;
    if (!nW(t11))
      return t11;
    var d10 = nu(t11);
    if (d10) {
      if (p10 = t11.length, h10 = new t11.constructor(p10), p10 && "string" == typeof t11[0] && aA.call(t11, "index") && (h10.index = t11.index, h10.input = t11.input), s10 = h10, !u10)
        return function(e12, t12) {
          var r11 = -1, o12 = e12.length;
          for (t12 || (t12 = Array(o12)); ++r11 < o12; )
            t12[r11] = e12[r11];
          return t12;
        }(t11, s10);
    } else {
      var p10, h10, m10, g10, y10, b10, _10 = aE(t11), w10 = _10 == lL || "[object GeneratorFunction]" == _10;
      if (oR(t11))
        return function(e12, t12) {
          if (t12)
            return e12.slice();
          var r11 = e12.length, o12 = ao ? ao(r11) : new e12.constructor(r11);
          return e12.copy(o12), o12;
        }(t11, u10);
      if (_10 == lF || _10 == lD || w10 && !a10) {
        if (s10 = c10 || w10 ? {} : "function" != typeof t11.constructor || ok(t11) ? {} : or(ih(t11)), !u10)
          return c10 ? (g10 = (m10 = s10) && oy(t11, oK(t11), m10), oy(t11, au(t11), g10)) : (b10 = (y10 = s10) && oy(t11, oG(t11), y10), oy(t11, as(t11), b10));
      } else {
        if (!lV[_10])
          return a10 ? t11 : {};
        s10 = function(e12, t12, r11) {
          var o12, i12, a11, l11 = e12.constructor;
          switch (t12) {
            case "[object ArrayBuffer]":
              return lA(e12);
            case "[object Boolean]":
            case "[object Date]":
              return new l11(+e12);
            case "[object DataView]":
              return o12 = r11 ? lA(e12.buffer) : e12.buffer, new e12.constructor(o12, e12.byteOffset, e12.byteLength);
            case "[object Float32Array]":
            case "[object Float64Array]":
            case "[object Int8Array]":
            case "[object Int16Array]":
            case "[object Int32Array]":
            case "[object Uint8Array]":
            case "[object Uint8ClampedArray]":
            case "[object Uint16Array]":
            case "[object Uint32Array]":
              return i12 = r11 ? lA(e12.buffer) : e12.buffer, new e12.constructor(i12, e12.byteOffset, e12.length);
            case "[object Map]":
            case "[object Set]":
              return new l11();
            case "[object Number]":
            case "[object String]":
              return new l11(e12);
            case "[object RegExp]":
              return (a11 = new e12.constructor(e12.source, lP.exec(e12))).lastIndex = e12.lastIndex, a11;
            case "[object Symbol]":
              return lj ? Object(lj.call(e12)) : {};
          }
        }(t11, _10, u10);
      }
    }
    l10 || (l10 = new ae());
    var x6 = l10.get(t11);
    if (x6)
      return x6;
    l10.set(t11, s10), l$(t11) ? t11.forEach(function(i12) {
      s10.add(e11(i12, r10, o11, i12, t11, l10));
    }) : lT(t11) && t11.forEach(function(i12, a11) {
      s10.set(a11, e11(i12, r10, o11, a11, t11, l10));
    });
    var k2 = f10 ? c10 ? ad : af : c10 ? oK : oG, S2 = d10 ? void 0 : k2(t11);
    return function(e12, t12) {
      for (var r11 = -1, o12 = null == e12 ? 0 : e12.length; ++r11 < o12 && false !== t12(e12[r11], r11, e12); )
        ;
    }(S2 || t11, function(i12, a11) {
      S2 && (i12 = t11[a11 = i12]), og(s10, a11, e11(i12, r10, o11, a11, t11, l10));
    }), s10;
  }(r3, 7, sh));
  for (var i10 = t10.length; i10--; )
    !function(e11, t11) {
      var r10, o11;
      t11 = ii(t11, e11), r10 = e11, null == (e11 = (o11 = t11).length < 2 ? r10 : is(r10, i_(o11, 0, -1))) || delete e11[il(se(t11))];
    }(r3, t10[i10]);
  return r3;
}, w = void 0, x = function(e10) {
  return (null == e10 ? 0 : e10.length) ? function e11(t10, r3, o10, i10, a10) {
    var l10 = -1, s10 = t10.length;
    for (o10 || (o10 = ip), a10 || (a10 = []); ++l10 < s10; ) {
      var u10 = t10[l10];
      r3 > 0 && o10(u10) ? r3 > 1 ? e11(u10, r3 - 1, o10, i10, a10) : ic(a10, u10) : i10 || (a10[a10.length] = u10);
    }
    return a10;
  }(e10, 1) : [];
}, w = ob(void 0 === w ? _.length - 1 : w, 0), function() {
  for (var e10 = arguments, t10 = -1, r3 = ob(e10.length - w, 0), o10 = Array(r3); ++t10 < r3; )
    o10[t10] = e10[w + t10];
  t10 = -1;
  for (var i10 = Array(w + 1); ++t10 < w; )
    i10[t10] = e10[t10];
  return i10[w] = x(o10), function(e11, t11, r10) {
    switch (r10.length) {
      case 0:
        return e11.call(t11);
      case 1:
        return e11.call(t11, r10[0]);
      case 2:
        return e11.call(t11, r10[0], r10[1]);
      case 3:
        return e11.call(t11, r10[0], r10[1], r10[2]);
    }
    return e11.apply(t11, r10);
  }(_, this, i10);
}), b + "");
function sv(e10, t10, r3, o10) {
  if (!nW(e10))
    return e10;
  t10 = ii(t10, e10);
  for (var i10 = -1, a10 = t10.length, l10 = a10 - 1, s10 = e10; null != s10 && ++i10 < a10; ) {
    var u10 = il(t10[i10]), c10 = r3;
    if ("__proto__" === u10 || "constructor" === u10 || "prototype" === u10)
      break;
    if (i10 != l10) {
      var f10 = s10[u10];
      void 0 === (c10 = o10 ? o10(f10, u10, s10) : void 0) && (c10 = nW(f10) ? f10 : op(t10[i10 + 1]) ? [] : {});
    }
    og(s10, u10, c10), s10 = s10[u10];
  }
  return e10;
}
var sg = Math.floor;
function sy(e10, t10) {
  var r3 = "";
  if (!e10 || t10 < 1 || t10 > 9007199254740991)
    return r3;
  do
    t10 % 2 && (r3 += e10), (t10 = sg(t10 / 2)) && (e10 += e10);
  while (t10);
  return r3;
}
var sb = l2("length"), s_ = "\uD800-\uDFFF", sw = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", sx = "\uD83C[\uDFFB-\uDFFF]", sk = "[^" + s_ + "]", sS = "(?:\uD83C[\uDDE6-\uDDFF]){2}", sO = "[\uD800-\uDBFF][\uDC00-\uDFFF]", sC = "(?:" + sw + "|" + sx + ")?", sE = "[\\ufe0e\\ufe0f]?", sA = "(?:\\u200d(?:" + [sk, sS, sO].join("|") + ")" + sE + sC + ")*", sP = RegExp(sx + "(?=" + sx + ")|(?:" + [sk + sw + "?", sw, sS, sO, "[" + s_ + "]"].join("|") + ")" + (sE + sC + sA), "g");
function sM(e10) {
  return ik(e10) ? function(e11) {
    for (var t10 = sP.lastIndex = 0; sP.test(e11); )
      ++t10;
    return t10;
  }(e10) : sb(e10);
}
var sj = Math.ceil, sR = l7(function(e10, t10, r3) {
  e10[r3 ? 0 : 1].push(t10);
}, function() {
  return [[], []];
});
function sT(e10, t10, r3) {
  return null == e10 ? e10 : sv(e10, t10, r3);
}
var sI = el.f, s$ = tn("toStringTag");
function sD(e10, t10) {
  let r3 = new Set(e10.split(","));
  return t10 ? (e11) => r3.has(e11.toLowerCase()) : (e11) => r3.has(e11);
}
rY({ global: true }, { Reflect: {} }), k = ef.Reflect, S = "Reflect", k && !e5(k, s$) && sI(k, s$, { configurable: true, value: S });
let sL = {}, sF = [], sV = () => {
}, sz = () => false, sN = (e10) => 111 === e10.charCodeAt(0) && 110 === e10.charCodeAt(1) && (e10.charCodeAt(2) > 122 || 97 > e10.charCodeAt(2)), sB = (e10) => e10.startsWith("onUpdate:"), sU = Object.assign, sH = (e10, t10) => {
  let r3 = e10.indexOf(t10);
  r3 > -1 && e10.splice(r3, 1);
}, sW = Object.prototype.hasOwnProperty, sq = (e10, t10) => sW.call(e10, t10), sG = Array.isArray, sY = (e10) => "[object Map]" === s2(e10), sK = (e10) => "[object Set]" === s2(e10), sZ = (e10) => "function" == typeof e10, sX = (e10) => "string" == typeof e10, sJ = (e10) => "symbol" == typeof e10, sQ = (e10) => null !== e10 && "object" == typeof e10, s0 = (e10) => (sQ(e10) || sZ(e10)) && sZ(e10.then) && sZ(e10.catch), s1 = Object.prototype.toString, s2 = (e10) => s1.call(e10), s4 = (e10) => s2(e10).slice(8, -1), s3 = (e10) => "[object Object]" === s2(e10), s5 = (e10) => sX(e10) && "NaN" !== e10 && "-" !== e10[0] && "" + parseInt(e10, 10) === e10, s6 = sD(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), s8 = (e10) => {
  let t10 = /* @__PURE__ */ Object.create(null);
  return (r3) => t10[r3] || (t10[r3] = e10(r3));
}, s9 = /-(\w)/g, s7 = s8((e10) => e10.replace(s9, (e11, t10) => t10 ? t10.toUpperCase() : "")), ue = /\B([A-Z])/g, ut = s8((e10) => e10.replace(ue, "-$1").toLowerCase()), ur = s8((e10) => e10.charAt(0).toUpperCase() + e10.slice(1)), un = s8((e10) => e10 ? `on${ur(e10)}` : ""), uo = (e10, t10) => !Object.is(e10, t10), ui = (e10, t10) => {
  for (let r3 = 0; r3 < e10.length; r3++)
    e10[r3](t10);
}, ua = (e10, t10, r3) => {
  Object.defineProperty(e10, t10, { configurable: true, enumerable: false, value: r3 });
}, ul = (e10) => {
  let t10 = parseFloat(e10);
  return isNaN(t10) ? e10 : t10;
}, us = (e10) => {
  let t10 = sX(e10) ? Number(e10) : NaN;
  return isNaN(t10) ? e10 : t10;
}, uu = () => e || (e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
function uc(e10) {
  if (sG(e10)) {
    let t10 = {};
    for (let r3 = 0; r3 < e10.length; r3++) {
      let o10 = e10[r3], i10 = sX(o10) ? function(e11) {
        let t11 = {};
        return e11.replace(up, "").split(uf).forEach((e12) => {
          if (e12) {
            let r10 = e12.split(ud);
            r10.length > 1 && (t11[r10[0].trim()] = r10[1].trim());
          }
        }), t11;
      }(o10) : uc(o10);
      if (i10)
        for (let e11 in i10)
          t10[e11] = i10[e11];
    }
    return t10;
  }
  if (sX(e10) || sQ(e10))
    return e10;
}
let uf = /;(?![^(]*\))/g, ud = /:([^]+)/, up = /\/\*[^]*?\*\//g;
function uh(e10) {
  let t10 = "";
  if (sX(e10))
    t10 = e10;
  else if (sG(e10))
    for (let r3 = 0; r3 < e10.length; r3++) {
      let o10 = uh(e10[r3]);
      o10 && (t10 += o10 + " ");
    }
  else if (sQ(e10))
    for (let r3 in e10)
      e10[r3] && (t10 += r3 + " ");
  return t10.trim();
}
let um = sD("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");
class uv {
  constructor(e10 = false) {
    this.detached = e10, this._active = true, this.effects = [], this.cleanups = [], this.parent = t, !e10 && t && (this.index = (t.scopes || (t.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(e10) {
    if (this._active) {
      let r3 = t;
      try {
        return t = this, e10();
      } finally {
        t = r3;
      }
    }
  }
  on() {
    t = this;
  }
  off() {
    t = this.parent;
  }
  stop(e10) {
    if (this._active) {
      let t10, r3;
      for (t10 = 0, r3 = this.effects.length; t10 < r3; t10++)
        this.effects[t10].stop();
      for (t10 = 0, r3 = this.cleanups.length; t10 < r3; t10++)
        this.cleanups[t10]();
      if (this.scopes)
        for (t10 = 0, r3 = this.scopes.length; t10 < r3; t10++)
          this.scopes[t10].stop(true);
      if (!this.detached && this.parent && !e10) {
        let e11 = this.parent.scopes.pop();
        e11 && e11 !== this && (this.parent.scopes[this.index] = e11, e11.index = this.index);
      }
      this.parent = void 0, this._active = false;
    }
  }
}
class ug {
  constructor(e10, r3, o10, i10) {
    this.fn = e10, this.trigger = r3, this.scheduler = o10, this.active = true, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = false, this._depsLength = 0, function(e11) {
      let r10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
      r10 && r10.active && r10.effects.push(e11);
    }(this, i10);
  }
  get dirty() {
    if (2 === this._dirtyLevel || 3 === this._dirtyLevel) {
      this._dirtyLevel = 1, uS();
      for (let e10 = 0; e10 < this._depsLength; e10++) {
        let t10 = this.deps[e10];
        if (t10.computed && (t10.computed.value, this._dirtyLevel >= 4))
          break;
      }
      1 === this._dirtyLevel && (this._dirtyLevel = 0), uO();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(e10) {
    this._dirtyLevel = e10 ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let e10 = uw, t10 = r;
    try {
      return uw = true, r = this, this._runnings++, uy(this), this.fn();
    } finally {
      ub(this), this._runnings--, r = t10, uw = e10;
    }
  }
  stop() {
    var e10;
    this.active && (uy(this), ub(this), null == (e10 = this.onStop) || e10.call(this), this.active = false);
  }
}
function uy(e10) {
  e10._trackId++, e10._depsLength = 0;
}
function ub(e10) {
  if (e10.deps.length > e10._depsLength) {
    for (let t10 = e10._depsLength; t10 < e10.deps.length; t10++)
      u_(e10.deps[t10], e10);
    e10.deps.length = e10._depsLength;
  }
}
function u_(e10, t10) {
  let r3 = e10.get(t10);
  void 0 !== r3 && t10._trackId !== r3 && (e10.delete(t10), 0 === e10.size && e10.cleanup());
}
let uw = true, ux = 0, uk = [];
function uS() {
  uk.push(uw), uw = false;
}
function uO() {
  let e10 = uk.pop();
  uw = void 0 === e10 || e10;
}
function uC() {
  for (ux--; !ux && uA.length; )
    uA.shift()();
}
function uE(e10, t10, r3) {
  if (t10.get(e10) !== e10._trackId) {
    t10.set(e10, e10._trackId);
    let r10 = e10.deps[e10._depsLength];
    r10 !== t10 ? (r10 && u_(r10, e10), e10.deps[e10._depsLength++] = t10) : e10._depsLength++;
  }
}
let uA = [];
function uP(e10, t10, r3) {
  for (let r10 of (ux++, e10.keys())) {
    let o10;
    r10._dirtyLevel < t10 && (null != o10 ? o10 : o10 = e10.get(r10) === r10._trackId) && (r10._shouldSchedule || (r10._shouldSchedule = 0 === r10._dirtyLevel), r10._dirtyLevel = t10), r10._shouldSchedule && (null != o10 ? o10 : o10 = e10.get(r10) === r10._trackId) && (r10.trigger(), (!r10._runnings || r10.allowRecurse) && 2 !== r10._dirtyLevel && (r10._shouldSchedule = false, r10.scheduler && uA.push(r10.scheduler)));
  }
  uC();
}
let uM = (e10, t10) => {
  let r3 = /* @__PURE__ */ new Map();
  return r3.cleanup = e10, r3.computed = t10, r3;
}, uj = /* @__PURE__ */ new WeakMap(), uR = Symbol(""), uT = Symbol("");
function uI(e10, t10, o10) {
  if (uw && r) {
    let t11 = uj.get(e10);
    t11 || uj.set(e10, t11 = /* @__PURE__ */ new Map());
    let i10 = t11.get(o10);
    i10 || t11.set(o10, i10 = uM(() => t11.delete(o10))), uE(r, i10);
  }
}
function u$(e10, t10, r3, o10, i10, a10) {
  let l10 = uj.get(e10);
  if (!l10)
    return;
  let s10 = [];
  if ("clear" === t10)
    s10 = [...l10.values()];
  else if ("length" === r3 && sG(e10)) {
    let e11 = Number(o10);
    l10.forEach((t11, r10) => {
      ("length" === r10 || !sJ(r10) && r10 >= e11) && s10.push(t11);
    });
  } else
    switch (void 0 !== r3 && s10.push(l10.get(r3)), t10) {
      case "add":
        sG(e10) ? s5(r3) && s10.push(l10.get("length")) : (s10.push(l10.get(uR)), sY(e10) && s10.push(l10.get(uT)));
        break;
      case "delete":
        !sG(e10) && (s10.push(l10.get(uR)), sY(e10) && s10.push(l10.get(uT)));
        break;
      case "set":
        sY(e10) && s10.push(l10.get(uR));
    }
  for (let e11 of (ux++, s10))
    e11 && uP(e11, 4);
  uC();
}
let uD = sD("__proto__,__v_isRef,__isVue"), uL = new Set(Object.getOwnPropertyNames(Symbol).filter((e10) => "arguments" !== e10 && "caller" !== e10).map((e10) => Symbol[e10]).filter(sJ)), uF = function() {
  let e10 = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t10) => {
    e10[t10] = function() {
      for (var e11 = arguments.length, r3 = Array(e11), o10 = 0; o10 < e11; o10++)
        r3[o10] = arguments[o10];
      let i10 = cd(this);
      for (let e12 = 0, t11 = this.length; e12 < t11; e12++)
        uI(i10, "get", e12 + "");
      let a10 = i10[t10](...r3);
      return -1 === a10 || false === a10 ? i10[t10](...r3.map(cd)) : a10;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t10) => {
    e10[t10] = function() {
      for (var e11 = arguments.length, r3 = Array(e11), o10 = 0; o10 < e11; o10++)
        r3[o10] = arguments[o10];
      uS(), ux++;
      let i10 = cd(this)[t10].apply(this, r3);
      return uC(), uO(), i10;
    };
  }), e10;
}();
function uV(e10) {
  let t10 = cd(this);
  return uI(t10, "has", e10), t10.hasOwnProperty(e10);
}
class uz {
  constructor(e10 = false, t10 = false) {
    this._isReadonly = e10, this._isShallow = t10;
  }
  get(e10, t10, r3) {
    let o10 = this._isReadonly, i10 = this._isShallow;
    if ("__v_isReactive" === t10)
      return !o10;
    if ("__v_isReadonly" === t10)
      return o10;
    if ("__v_isShallow" === t10)
      return i10;
    if ("__v_raw" === t10)
      return r3 === (o10 ? i10 ? co : cn : i10 ? cr : ct).get(e10) || Object.getPrototypeOf(e10) === Object.getPrototypeOf(r3) ? e10 : void 0;
    let a10 = sG(e10);
    if (!o10) {
      if (a10 && sq(uF, t10))
        return Reflect.get(uF, t10, r3);
      if ("hasOwnProperty" === t10)
        return uV;
    }
    let l10 = Reflect.get(e10, t10, r3);
    return (sJ(t10) ? uL.has(t10) : uD(t10)) ? l10 : (o10 || uI(e10, "get", t10), i10) ? l10 : cb(l10) ? a10 && s5(t10) ? l10 : l10.value : sQ(l10) ? o10 ? cl(l10) : ci(l10) : l10;
  }
}
class uN extends uz {
  constructor(e10 = false) {
    super(false, e10);
  }
  set(e10, t10, r3, o10) {
    let i10 = e10[t10];
    if (!this._isShallow) {
      let t11 = cc(i10);
      if (cf(r3) || cc(r3) || (i10 = cd(i10), r3 = cd(r3)), !sG(e10) && cb(i10) && !cb(r3))
        return !t11 && (i10.value = r3, true);
    }
    let a10 = sG(e10) && s5(t10) ? Number(t10) < e10.length : sq(e10, t10), l10 = Reflect.set(e10, t10, r3, o10);
    return e10 === cd(o10) && (a10 ? uo(r3, i10) && u$(e10, "set", t10, r3) : u$(e10, "add", t10, r3)), l10;
  }
  deleteProperty(e10, t10) {
    let r3 = sq(e10, t10);
    e10[t10];
    let o10 = Reflect.deleteProperty(e10, t10);
    return o10 && r3 && u$(e10, "delete", t10, void 0), o10;
  }
  has(e10, t10) {
    let r3 = Reflect.has(e10, t10);
    return sJ(t10) && uL.has(t10) || uI(e10, "has", t10), r3;
  }
  ownKeys(e10) {
    return uI(e10, "iterate", sG(e10) ? "length" : uR), Reflect.ownKeys(e10);
  }
}
let uB = new uN(), uU = new class extends uz {
  constructor(e10 = false) {
    super(true, e10);
  }
  set(e10, t10) {
    return true;
  }
  deleteProperty(e10, t10) {
    return true;
  }
}(), uH = new uN(true), uW = (e10) => e10, uq = (e10) => Reflect.getPrototypeOf(e10);
function uG(e10, t10) {
  let r3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o10 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], i10 = cd(e10 = e10.__v_raw), a10 = cd(t10);
  r3 || (uo(t10, a10) && uI(i10, "get", t10), uI(i10, "get", a10));
  let { has: l10 } = uq(i10), s10 = o10 ? uW : r3 ? cm : ch;
  return l10.call(i10, t10) ? s10(e10.get(t10)) : l10.call(i10, a10) ? s10(e10.get(a10)) : void (e10 !== i10 && e10.get(t10));
}
function uY(e10) {
  let t10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r3 = this.__v_raw, o10 = cd(r3), i10 = cd(e10);
  return t10 || (uo(e10, i10) && uI(o10, "has", e10), uI(o10, "has", i10)), e10 === i10 ? r3.has(e10) : r3.has(e10) || r3.has(i10);
}
function uK(e10) {
  let t10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return e10 = e10.__v_raw, t10 || uI(cd(e10), "iterate", uR), Reflect.get(e10, "size", e10);
}
function uZ(e10) {
  e10 = cd(e10);
  let t10 = cd(this);
  return uq(t10).has.call(t10, e10) || (t10.add(e10), u$(t10, "add", e10, e10)), this;
}
function uX(e10, t10) {
  t10 = cd(t10);
  let r3 = cd(this), { has: o10, get: i10 } = uq(r3), a10 = o10.call(r3, e10);
  a10 || (e10 = cd(e10), a10 = o10.call(r3, e10));
  let l10 = i10.call(r3, e10);
  return r3.set(e10, t10), a10 ? uo(t10, l10) && u$(r3, "set", e10, t10) : u$(r3, "add", e10, t10), this;
}
function uJ(e10) {
  let t10 = cd(this), { has: r3, get: o10 } = uq(t10), i10 = r3.call(t10, e10);
  i10 || (e10 = cd(e10), i10 = r3.call(t10, e10)), o10 && o10.call(t10, e10);
  let a10 = t10.delete(e10);
  return i10 && u$(t10, "delete", e10, void 0), a10;
}
function uQ() {
  let e10 = cd(this), t10 = 0 !== e10.size, r3 = e10.clear();
  return t10 && u$(e10, "clear", void 0, void 0), r3;
}
function u0(e10, t10) {
  return function(r3, o10) {
    let i10 = this, a10 = i10.__v_raw, l10 = cd(a10), s10 = t10 ? uW : e10 ? cm : ch;
    return e10 || uI(l10, "iterate", uR), a10.forEach((e11, t11) => r3.call(o10, s10(e11), s10(t11), i10));
  };
}
function u1(e10, t10, r3) {
  return function() {
    for (var o10 = arguments.length, i10 = Array(o10), a10 = 0; a10 < o10; a10++)
      i10[a10] = arguments[a10];
    let l10 = this.__v_raw, s10 = cd(l10), u10 = sY(s10), c10 = "entries" === e10 || e10 === Symbol.iterator && u10, f10 = l10[e10](...i10), d10 = r3 ? uW : t10 ? cm : ch;
    return t10 || uI(s10, "iterate", "keys" === e10 && u10 ? uT : uR), { next() {
      let { value: e11, done: t11 } = f10.next();
      return t11 ? { value: e11, done: t11 } : { value: c10 ? [d10(e11[0]), d10(e11[1])] : d10(e11), done: t11 };
    }, [Symbol.iterator]() {
      return this;
    } };
  };
}
function u2(e10) {
  return function() {
    for (var t10 = arguments.length, r3 = Array(t10), o10 = 0; o10 < t10; o10++)
      r3[o10] = arguments[o10];
    return "delete" !== e10 && ("clear" === e10 ? void 0 : this);
  };
}
let [u4, u3, u5, u6] = function() {
  let e10 = { get(e11) {
    return uG(this, e11);
  }, get size() {
    return uK(this);
  }, has: uY, add: uZ, set: uX, delete: uJ, clear: uQ, forEach: u0(false, false) }, t10 = { get(e11) {
    return uG(this, e11, false, true);
  }, get size() {
    return uK(this);
  }, has: uY, add: uZ, set: uX, delete: uJ, clear: uQ, forEach: u0(false, true) }, r3 = { get(e11) {
    return uG(this, e11, true);
  }, get size() {
    return uK(this, true);
  }, has(e11) {
    return uY.call(this, e11, true);
  }, add: u2("add"), set: u2("set"), delete: u2("delete"), clear: u2("clear"), forEach: u0(true, false) }, o10 = { get(e11) {
    return uG(this, e11, true, true);
  }, get size() {
    return uK(this, true);
  }, has(e11) {
    return uY.call(this, e11, true);
  }, add: u2("add"), set: u2("set"), delete: u2("delete"), clear: u2("clear"), forEach: u0(true, true) };
  return ["keys", "values", "entries", Symbol.iterator].forEach((i10) => {
    e10[i10] = u1(i10, false, false), r3[i10] = u1(i10, true, false), t10[i10] = u1(i10, false, true), o10[i10] = u1(i10, true, true);
  }), [e10, r3, t10, o10];
}();
function u8(e10, t10) {
  let r3 = t10 ? e10 ? u6 : u5 : e10 ? u3 : u4;
  return (t11, o10, i10) => "__v_isReactive" === o10 ? !e10 : "__v_isReadonly" === o10 ? e10 : "__v_raw" === o10 ? t11 : Reflect.get(sq(r3, o10) && o10 in t11 ? r3 : t11, o10, i10);
}
let u9 = { get: u8(false, false) }, u7 = { get: u8(false, true) }, ce = { get: u8(true, false) }, ct = /* @__PURE__ */ new WeakMap(), cr = /* @__PURE__ */ new WeakMap(), cn = /* @__PURE__ */ new WeakMap(), co = /* @__PURE__ */ new WeakMap();
function ci(e10) {
  return cc(e10) ? e10 : cs(e10, false, uB, u9, ct);
}
function ca(e10) {
  return cs(e10, false, uH, u7, cr);
}
function cl(e10) {
  return cs(e10, true, uU, ce, cn);
}
function cs(e10, t10, r3, o10, i10) {
  if (!sQ(e10) || e10.__v_raw && !(t10 && e10.__v_isReactive))
    return e10;
  let a10 = i10.get(e10);
  if (a10)
    return a10;
  let l10 = e10.__v_skip || !Object.isExtensible(e10) ? 0 : function(e11) {
    switch (e11) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }(s4(e10));
  if (0 === l10)
    return e10;
  let s10 = new Proxy(e10, 2 === l10 ? o10 : r3);
  return i10.set(e10, s10), s10;
}
function cu(e10) {
  return cc(e10) ? cu(e10.__v_raw) : !!(e10 && e10.__v_isReactive);
}
function cc(e10) {
  return !!(e10 && e10.__v_isReadonly);
}
function cf(e10) {
  return !!(e10 && e10.__v_isShallow);
}
function cd(e10) {
  let t10 = e10 && e10.__v_raw;
  return t10 ? cd(t10) : e10;
}
function cp(e10) {
  return Object.isExtensible(e10) && ua(e10, "__v_skip", true), e10;
}
let ch = (e10) => sQ(e10) ? ci(e10) : e10, cm = (e10) => sQ(e10) ? cl(e10) : e10;
class cv {
  constructor(e10, t10, r3, o10) {
    this.getter = e10, this._setter = t10, this.dep = void 0, this.__v_isRef = true, this.__v_isReadonly = false, this.effect = new ug(() => e10(this._value), () => cy(this, 2 === this.effect._dirtyLevel ? 2 : 3)), this.effect.computed = this, this.effect.active = this._cacheable = !o10, this.__v_isReadonly = r3;
  }
  get value() {
    let e10 = cd(this);
    return (!e10._cacheable || e10.effect.dirty) && uo(e10._value, e10._value = e10.effect.run()) && cy(e10, 4), cg(e10), e10.effect._dirtyLevel >= 2 && cy(e10, 2), e10._value;
  }
  set value(e10) {
    this._setter(e10);
  }
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(e10) {
    this.effect.dirty = e10;
  }
}
function cg(e10) {
  var t10;
  uw && r && (e10 = cd(e10), uE(r, null != (t10 = e10.dep) ? t10 : e10.dep = uM(() => e10.dep = void 0, e10 instanceof cv ? e10 : void 0)));
}
function cy(e10) {
  let t10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4;
  arguments.length > 2 && arguments[2];
  let r3 = (e10 = cd(e10)).dep;
  r3 && uP(r3, t10);
}
function cb(e10) {
  return !!(e10 && true === e10.__v_isRef);
}
function c_(e10) {
  return cw(e10, false);
}
function cw(e10, t10) {
  return cb(e10) ? e10 : new cx(e10, t10);
}
class cx {
  constructor(e10, t10) {
    this.__v_isShallow = t10, this.dep = void 0, this.__v_isRef = true, this._rawValue = t10 ? e10 : cd(e10), this._value = t10 ? e10 : ch(e10);
  }
  get value() {
    return cg(this), this._value;
  }
  set value(e10) {
    let t10 = this.__v_isShallow || cf(e10) || cc(e10);
    uo(e10 = t10 ? e10 : cd(e10), this._rawValue) && (this._rawValue = e10, this._value = t10 ? e10 : ch(e10), cy(this, 4));
  }
}
function ck(e10) {
  return cb(e10) ? e10.value : e10;
}
let cS = { get: (e10, t10, r3) => ck(Reflect.get(e10, t10, r3)), set: (e10, t10, r3, o10) => {
  let i10 = e10[t10];
  return cb(i10) && !cb(r3) ? (i10.value = r3, true) : Reflect.set(e10, t10, r3, o10);
} };
function cO(e10) {
  return cu(e10) ? e10 : new Proxy(e10, cS);
}
class cC {
  constructor(e10) {
    this.dep = void 0, this.__v_isRef = true;
    let { get: t10, set: r3 } = e10(() => cg(this), () => cy(this));
    this._get = t10, this._set = r3;
  }
  get value() {
    return this._get();
  }
  set value(e10) {
    this._set(e10);
  }
}
function cE(e10, t10, r3, o10) {
  try {
    return o10 ? e10(...o10) : e10();
  } catch (e11) {
    cP(e11, t10, r3);
  }
}
function cA(e10, t10, r3, o10) {
  if (sZ(e10)) {
    let i11 = cE(e10, t10, r3, o10);
    return i11 && s0(i11) && i11.catch((e11) => {
      cP(e11, t10, r3);
    }), i11;
  }
  let i10 = [];
  for (let a10 = 0; a10 < e10.length; a10++)
    i10.push(cA(e10[a10], t10, r3, o10));
  return i10;
}
function cP(e10, t10, r3) {
  let o10 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3], i10 = t10 ? t10.vnode : null;
  if (t10) {
    let o11 = t10.parent, i11 = t10.proxy, a10 = `https://vuejs.org/error-reference/#runtime-${r3}`;
    for (; o11; ) {
      let t11 = o11.ec;
      if (t11) {
        for (let r10 = 0; r10 < t11.length; r10++)
          if (false === t11[r10](e10, i11, a10))
            return;
      }
      o11 = o11.parent;
    }
    let l10 = t10.appContext.config.errorHandler;
    if (l10) {
      cE(l10, null, 10, [e10, i11, a10]);
      return;
    }
  }
  !function(e11, t11, r10) {
    arguments.length > 3 && void 0 !== arguments[3] && arguments[3], console.error(e11);
  }(e10, r3, i10, o10);
}
let cM = false, cj = false, cR = [], cT = 0, cI = [], c$ = null, cD = 0, cL = Promise.resolve(), cF = null;
function cV(e10) {
  let t10 = cF || cL;
  return e10 ? t10.then(this ? e10.bind(this) : e10) : t10;
}
function cz(e10) {
  cR.length && cR.includes(e10, cM && e10.allowRecurse ? cT + 1 : cT) || (null == e10.id ? cR.push(e10) : cR.splice(function(e11) {
    let t10 = cT + 1, r3 = cR.length;
    for (; t10 < r3; ) {
      let o10 = t10 + r3 >>> 1, i10 = cR[o10], a10 = cH(i10);
      a10 < e11 || a10 === e11 && i10.pre ? t10 = o10 + 1 : r3 = o10;
    }
    return t10;
  }(e10.id), 0, e10), cN());
}
function cN() {
  cM || cj || (cj = true, cF = cL.then(function e10(t10) {
    cj = false, cM = true, cR.sort(cW);
    try {
      for (cT = 0; cT < cR.length; cT++) {
        let e11 = cR[cT];
        e11 && false !== e11.active && cE(e11, null, 14);
      }
    } finally {
      cT = 0, cR.length = 0, cU(), cM = false, cF = null, (cR.length || cI.length) && e10();
    }
  }));
}
function cB(e10, t10) {
  let r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cM ? cT + 1 : 0;
  for (; r3 < cR.length; r3++) {
    let t11 = cR[r3];
    if (t11 && t11.pre) {
      if (e10 && t11.id !== e10.uid)
        continue;
      cR.splice(r3, 1), r3--, t11();
    }
  }
}
function cU(e10) {
  if (cI.length) {
    let e11 = [...new Set(cI)].sort((e12, t10) => cH(e12) - cH(t10));
    if (cI.length = 0, c$) {
      c$.push(...e11);
      return;
    }
    for (cD = 0, c$ = e11; cD < c$.length; cD++)
      c$[cD]();
    c$ = null, cD = 0;
  }
}
let cH = (e10) => null == e10.id ? 1 / 0 : e10.id, cW = (e10, t10) => {
  let r3 = cH(e10) - cH(t10);
  if (0 === r3) {
    if (e10.pre && !t10.pre)
      return -1;
    if (t10.pre && !e10.pre)
      return 1;
  }
  return r3;
};
function cq(e10, t10) {
  let r3;
  for (var o10 = arguments.length, i10 = Array(o10 > 2 ? o10 - 2 : 0), a10 = 2; a10 < o10; a10++)
    i10[a10 - 2] = arguments[a10];
  if (e10.isUnmounted)
    return;
  let l10 = e10.vnode.props || sL, s10 = i10, u10 = t10.startsWith("update:"), c10 = u10 && t10.slice(7);
  if (c10 && c10 in l10) {
    let { number: e11, trim: t11 } = l10[`${"modelValue" === c10 ? "model" : c10}Modifiers`] || sL;
    t11 && (s10 = i10.map((e12) => sX(e12) ? e12.trim() : e12)), e11 && (s10 = i10.map(ul));
  }
  let f10 = l10[r3 = un(t10)] || l10[r3 = un(s7(t10))];
  !f10 && u10 && (f10 = l10[r3 = un(ut(t10))]), f10 && cA(f10, e10, 6, s10);
  let d10 = l10[r3 + "Once"];
  if (d10) {
    if (e10.emitted) {
      if (e10.emitted[r3])
        return;
    } else
      e10.emitted = {};
    e10.emitted[r3] = true, cA(d10, e10, 6, s10);
  }
}
function cG(e10, t10) {
  return !!(e10 && sN(t10)) && (sq(e10, (t10 = t10.slice(2).replace(/Once$/, ""))[0].toLowerCase() + t10.slice(1)) || sq(e10, ut(t10)) || sq(e10, t10));
}
let cY = null, cK = null;
function cZ(e10) {
  let t10 = cY;
  return cY = e10, cK = e10 && e10.type.__scopeId || null, t10;
}
function cX(e10) {
  let t10, r3;
  let { type: o10, vnode: i10, proxy: a10, withProxy: l10, props: s10, propsOptions: [u10], slots: c10, attrs: f10, emit: d10, render: p10, renderCache: h10, data: m10, setupState: g10, ctx: y10, inheritAttrs: b10 } = e10, _10 = cZ(e10);
  try {
    if (4 & i10.shapeFlag) {
      let e11 = l10 || a10;
      t10 = dk(p10.call(e11, e11, h10, s10, g10, m10, y10)), r3 = f10;
    } else
      t10 = dk(o10.length > 1 ? o10(s10, { attrs: f10, slots: c10, emit: d10 }) : o10(s10, null)), r3 = o10.props ? f10 : cJ(f10);
  } catch (r10) {
    cP(r10, e10, 1), t10 = dw(dp);
  }
  let w10 = t10;
  if (r3 && false !== b10) {
    let e11 = Object.keys(r3), { shapeFlag: t11 } = w10;
    e11.length && 7 & t11 && (u10 && e11.some(sB) && (r3 = cQ(r3, u10)), w10 = dx(w10, r3));
  }
  return i10.dirs && ((w10 = dx(w10)).dirs = w10.dirs ? w10.dirs.concat(i10.dirs) : i10.dirs), i10.transition && (w10.transition = i10.transition), t10 = w10, cZ(_10), t10;
}
let cJ = (e10) => {
  let t10;
  for (let r3 in e10)
    ("class" === r3 || "style" === r3 || sN(r3)) && ((t10 || (t10 = {}))[r3] = e10[r3]);
  return t10;
}, cQ = (e10, t10) => {
  let r3 = {};
  for (let o10 in e10)
    sB(o10) && o10.slice(9) in t10 || (r3[o10] = e10[o10]);
  return r3;
};
function c0(e10, t10, r3) {
  let o10 = Object.keys(t10);
  if (o10.length !== Object.keys(e10).length)
    return true;
  for (let i10 = 0; i10 < o10.length; i10++) {
    let a10 = o10[i10];
    if (t10[a10] !== e10[a10] && !cG(r3, a10))
      return true;
  }
  return false;
}
let c1 = Symbol.for("v-ndc"), c2 = (e10) => e10.__isSuspense, c4 = Symbol.for("v-scx"), c3 = () => fY(c4), c5 = {};
function c6(e10, r3) {
  let o10, i10, a10, l10, { immediate: s10, deep: u10, flush: c10, once: f10, onTrack: d10, onTrigger: p10 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : sL;
  if (r3 && f10) {
    let e11 = r3;
    r3 = function() {
      for (var t10 = arguments.length, r10 = Array(t10), o11 = 0; o11 < t10; o11++)
        r10[o11] = arguments[o11];
      e11(...r10), S2();
    };
  }
  let h10 = dP, m10 = (e11) => true === u10 ? e11 : c7(e11, false === u10 ? 1 : void 0), g10 = false, y10 = false;
  if (cb(e10) ? (o10 = () => e10.value, g10 = cf(e10)) : cu(e10) ? (o10 = () => m10(e10), g10 = true) : sG(e10) ? (y10 = true, g10 = e10.some((e11) => cu(e11) || cf(e11)), o10 = () => e10.map((e11) => cb(e11) ? e11.value : cu(e11) ? m10(e11) : sZ(e11) ? cE(e11, h10, 2) : void 0)) : o10 = sZ(e10) ? r3 ? () => cE(e10, h10, 2) : () => (i10 && i10(), cA(e10, h10, 3, [b10])) : sV, r3 && u10) {
    let e11 = o10;
    o10 = () => c7(e11());
  }
  let b10 = (e11) => {
    i10 = x6.onStop = () => {
      cE(e11, h10, 4), i10 = x6.onStop = void 0;
    };
  };
  if (dI) {
    if (b10 = sV, r3 ? s10 && cA(r3, h10, 3, [o10(), y10 ? [] : void 0, b10]) : o10(), "sync" !== c10)
      return sV;
    {
      let e11 = c3();
      a10 = e11.__watcherHandles || (e11.__watcherHandles = []);
    }
  }
  let _10 = y10 ? Array(e10.length).fill(c5) : c5, w10 = () => {
    if (x6.active && x6.dirty) {
      if (r3) {
        let e11 = x6.run();
        (u10 || g10 || (y10 ? e11.some((e12, t10) => uo(e12, _10[t10])) : uo(e11, _10))) && (i10 && i10(), cA(r3, h10, 3, [e11, _10 === c5 ? void 0 : y10 && _10[0] === c5 ? [] : _10, b10]), _10 = e11);
      } else
        x6.run();
    }
  };
  w10.allowRecurse = !!r3, "sync" === c10 ? l10 = w10 : "post" === c10 ? l10 = () => f9(w10, h10 && h10.suspense) : (w10.pre = true, h10 && (w10.id = h10.uid), l10 = () => cz(w10));
  let x6 = new ug(o10, sV, l10), k2 = t, S2 = () => {
    x6.stop(), k2 && sH(k2.effects, x6);
  };
  return r3 ? s10 ? w10() : _10 = x6.run() : "post" === c10 ? f9(x6.run.bind(x6), h10 && h10.suspense) : x6.run(), a10 && a10.push(S2), S2;
}
function c8(e10, t10, r3) {
  let o10;
  let i10 = this.proxy, a10 = sX(e10) ? e10.includes(".") ? c9(i10, e10) : () => i10[e10] : e10.bind(i10, i10);
  sZ(t10) ? o10 = t10 : (o10 = t10.handler, r3 = t10);
  let l10 = dj(this), s10 = c6(a10, o10.bind(i10), r3);
  return l10(), s10;
}
function c9(e10, t10) {
  let r3 = t10.split(".");
  return () => {
    let t11 = e10;
    for (let e11 = 0; e11 < r3.length && t11; e11++)
      t11 = t11[r3[e11]];
    return t11;
  };
}
function c7(e10, t10) {
  let r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o10 = arguments.length > 3 ? arguments[3] : void 0;
  if (!sQ(e10) || e10.__v_skip)
    return e10;
  if (t10 && t10 > 0) {
    if (r3 >= t10)
      return e10;
    r3++;
  }
  if ((o10 = o10 || /* @__PURE__ */ new Set()).has(e10))
    return e10;
  if (o10.add(e10), cb(e10))
    c7(e10.value, t10, r3, o10);
  else if (sG(e10))
    for (let i10 = 0; i10 < e10.length; i10++)
      c7(e10[i10], t10, r3, o10);
  else if (sK(e10) || sY(e10))
    e10.forEach((e11) => {
      c7(e11, t10, r3, o10);
    });
  else if (s3(e10))
    for (let i10 in e10)
      c7(e10[i10], t10, r3, o10);
  return e10;
}
function fe(e10, t10, r3, o10) {
  let i10 = e10.dirs, a10 = t10 && t10.dirs;
  for (let l10 = 0; l10 < i10.length; l10++) {
    let s10 = i10[l10];
    a10 && (s10.oldValue = a10[l10].value);
    let u10 = s10.dir[o10];
    u10 && (uS(), cA(u10, r3, 8, [e10.el, s10, e10, t10]), uO());
  }
}
let ft = Symbol("_leaveCb"), fr = Symbol("_enterCb"), fn = [Function, Array], fo = { mode: String, appear: Boolean, persisted: Boolean, onBeforeEnter: fn, onEnter: fn, onAfterEnter: fn, onEnterCancelled: fn, onBeforeLeave: fn, onLeave: fn, onAfterLeave: fn, onLeaveCancelled: fn, onBeforeAppear: fn, onAppear: fn, onAfterAppear: fn, onAppearCancelled: fn }, fi = { name: "BaseTransition", props: fo, setup(e10, t10) {
  let { slots: r3 } = t10, o10 = dM(), i10 = function() {
    let e11 = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
    return f_(() => {
      e11.isMounted = true;
    }), fk(() => {
      e11.isUnmounting = true;
    }), e11;
  }();
  return () => {
    let t11 = r3.default && function e11(t12) {
      let r10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], o11 = arguments.length > 2 ? arguments[2] : void 0, i11 = [], a11 = 0;
      for (let l11 = 0; l11 < t12.length; l11++) {
        let s11 = t12[l11], u11 = null == o11 ? s11.key : String(o11) + String(null != s11.key ? s11.key : l11);
        s11.type === df ? (128 & s11.patchFlag && a11++, i11 = i11.concat(e11(s11.children, r10, u11))) : (r10 || s11.type !== dp) && i11.push(null != u11 ? dx(s11, { key: u11 }) : s11);
      }
      if (a11 > 1)
        for (let e12 = 0; e12 < i11.length; e12++)
          i11[e12].patchFlag = -2;
      return i11;
    }(r3.default(), true);
    if (!t11 || !t11.length)
      return;
    let a10 = t11[0];
    if (t11.length > 1) {
      for (let e11 of t11)
        if (e11.type !== dp) {
          a10 = e11;
          break;
        }
    }
    let l10 = cd(e10), { mode: s10 } = l10;
    if (i10.isLeaving)
      return fs(a10);
    let u10 = fu(a10);
    if (!u10)
      return fs(a10);
    let c10 = fl(u10, l10, i10, o10);
    fc(u10, c10);
    let f10 = o10.subTree, d10 = f10 && fu(f10);
    if (d10 && d10.type !== dp && !dg(u10, d10)) {
      let e11 = fl(d10, l10, i10, o10);
      if (fc(d10, e11), "out-in" === s10)
        return i10.isLeaving = true, e11.afterLeave = () => {
          i10.isLeaving = false, false !== o10.update.active && (o10.effect.dirty = true, o10.update());
        }, fs(a10);
      "in-out" === s10 && u10.type !== dp && (e11.delayLeave = (e12, t12, r10) => {
        fa(i10, d10)[String(d10.key)] = d10, e12[ft] = () => {
          t12(), e12[ft] = void 0, delete c10.delayedLeave;
        }, c10.delayedLeave = r10;
      });
    }
    return a10;
  };
} };
function fa(e10, t10) {
  let { leavingVNodes: r3 } = e10, o10 = r3.get(t10.type);
  return o10 || (o10 = /* @__PURE__ */ Object.create(null), r3.set(t10.type, o10)), o10;
}
function fl(e10, t10, r3, o10) {
  let { appear: i10, mode: a10, persisted: l10 = false, onBeforeEnter: s10, onEnter: u10, onAfterEnter: c10, onEnterCancelled: f10, onBeforeLeave: d10, onLeave: p10, onAfterLeave: h10, onLeaveCancelled: m10, onBeforeAppear: g10, onAppear: y10, onAfterAppear: b10, onAppearCancelled: _10 } = t10, w10 = String(e10.key), x6 = fa(r3, e10), k2 = (e11, t11) => {
    e11 && cA(e11, o10, 9, t11);
  }, S2 = (e11, t11) => {
    let r10 = t11[1];
    k2(e11, t11), sG(e11) ? e11.every((e12) => e12.length <= 1) && r10() : e11.length <= 1 && r10();
  }, O2 = { mode: a10, persisted: l10, beforeEnter(t11) {
    let o11 = s10;
    if (!r3.isMounted) {
      if (!i10)
        return;
      o11 = g10 || s10;
    }
    t11[ft] && t11[ft](true);
    let a11 = x6[w10];
    a11 && dg(e10, a11) && a11.el[ft] && a11.el[ft](), k2(o11, [t11]);
  }, enter(e11) {
    let t11 = u10, o11 = c10, a11 = f10;
    if (!r3.isMounted) {
      if (!i10)
        return;
      t11 = y10 || u10, o11 = b10 || c10, a11 = _10 || f10;
    }
    let l11 = false, s11 = e11[fr] = (t12) => {
      l11 || (l11 = true, t12 ? k2(a11, [e11]) : k2(o11, [e11]), O2.delayedLeave && O2.delayedLeave(), e11[fr] = void 0);
    };
    t11 ? S2(t11, [e11, s11]) : s11();
  }, leave(t11, o11) {
    let i11 = String(e10.key);
    if (t11[fr] && t11[fr](true), r3.isUnmounting)
      return o11();
    k2(d10, [t11]);
    let a11 = false, l11 = t11[ft] = (r10) => {
      a11 || (a11 = true, o11(), r10 ? k2(m10, [t11]) : k2(h10, [t11]), t11[ft] = void 0, x6[i11] !== e10 || delete x6[i11]);
    };
    x6[i11] = e10, p10 ? S2(p10, [t11, l11]) : l11();
  }, clone: (e11) => fl(e11, t10, r3, o10) };
  return O2;
}
function fs(e10) {
  if (fp(e10))
    return (e10 = dx(e10)).children = null, e10;
}
function fu(e10) {
  return fp(e10) ? e10.children ? e10.children[0] : void 0 : e10;
}
function fc(e10, t10) {
  6 & e10.shapeFlag && e10.component ? fc(e10.component.subTree, t10) : 128 & e10.shapeFlag ? (e10.ssContent.transition = t10.clone(e10.ssContent), e10.ssFallback.transition = t10.clone(e10.ssFallback)) : e10.transition = t10;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ff(e10, t10) {
  return sZ(e10) ? sU({ name: e10.name }, t10, { setup: e10 }) : e10;
}
let fd = (e10) => !!e10.type.__asyncLoader, fp = (e10) => e10.type.__isKeepAlive;
function fh(e10, t10) {
  fv(e10, "a", t10);
}
function fm(e10, t10) {
  fv(e10, "da", t10);
}
function fv(e10, t10) {
  let r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dP, o10 = e10.__wdc || (e10.__wdc = () => {
    let t11 = r3;
    for (; t11; ) {
      if (t11.isDeactivated)
        return;
      t11 = t11.parent;
    }
    return e10();
  });
  if (fg(t10, o10, r3), r3) {
    let e11 = r3.parent;
    for (; e11 && e11.parent; )
      fp(e11.parent.vnode) && function(e12, t11, r10, o11) {
        let i10 = fg(t11, e12, o11, true);
        fS(() => {
          sH(o11[t11], i10);
        }, r10);
      }(o10, t10, r3, e11), e11 = e11.parent;
  }
}
function fg(e10, t10) {
  let r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dP, o10 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  if (r3) {
    let i10 = r3[e10] || (r3[e10] = []), a10 = t10.__weh || (t10.__weh = function() {
      for (var o11 = arguments.length, i11 = Array(o11), a11 = 0; a11 < o11; a11++)
        i11[a11] = arguments[a11];
      if (r3.isUnmounted)
        return;
      uS();
      let l10 = dj(r3), s10 = cA(t10, r3, e10, i11);
      return l10(), uO(), s10;
    });
    return o10 ? i10.unshift(a10) : i10.push(a10), a10;
  }
}
let fy = (e10) => function(t10) {
  let r3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dP;
  return (!dI || "sp" === e10) && fg(e10, function() {
    for (var e11 = arguments.length, r10 = Array(e11), o10 = 0; o10 < e11; o10++)
      r10[o10] = arguments[o10];
    return t10(...r10);
  }, r3);
}, fb = fy("bm"), f_ = fy("m"), fw = fy("bu"), fx = fy("u"), fk = fy("bum"), fS = fy("um"), fO = fy("sp"), fC = fy("rtg"), fE = fy("rtc");
function fA(e10) {
  let t10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dP;
  fg("ec", e10, t10);
}
let fP = (e10) => e10 ? dT(e10) ? dL(e10) || e10.proxy : fP(e10.parent) : null, fM = sU(/* @__PURE__ */ Object.create(null), { $: (e10) => e10, $el: (e10) => e10.vnode.el, $data: (e10) => e10.data, $props: (e10) => e10.props, $attrs: (e10) => e10.attrs, $slots: (e10) => e10.slots, $refs: (e10) => e10.refs, $parent: (e10) => fP(e10.parent), $root: (e10) => fP(e10.root), $emit: (e10) => e10.emit, $options: (e10) => fD(e10), $forceUpdate: (e10) => e10.f || (e10.f = () => {
  e10.effect.dirty = true, cz(e10.update);
}), $nextTick: (e10) => e10.n || (e10.n = cV.bind(e10.proxy)), $watch: (e10) => c8.bind(e10) }), fj = (e10, t10) => e10 !== sL && !e10.__isScriptSetup && sq(e10, t10), fR = { get(e10, t10) {
  let r3, o10, i10, { _: a10 } = e10, { ctx: l10, setupState: s10, data: u10, props: c10, accessCache: f10, type: d10, appContext: p10 } = a10;
  if ("$" !== t10[0]) {
    let e11 = f10[t10];
    if (void 0 !== e11)
      switch (e11) {
        case 1:
          return s10[t10];
        case 2:
          return u10[t10];
        case 4:
          return l10[t10];
        case 3:
          return c10[t10];
      }
    else {
      if (fj(s10, t10))
        return f10[t10] = 1, s10[t10];
      if (u10 !== sL && sq(u10, t10))
        return f10[t10] = 2, u10[t10];
      if ((r3 = a10.propsOptions[0]) && sq(r3, t10))
        return f10[t10] = 3, c10[t10];
      if (l10 !== sL && sq(l10, t10))
        return f10[t10] = 4, l10[t10];
      fI && (f10[t10] = 0);
    }
  }
  let h10 = fM[t10];
  return h10 ? ("$attrs" === t10 && uI(a10, "get", t10), h10(a10)) : (o10 = d10.__cssModules) && (o10 = o10[t10]) ? o10 : l10 !== sL && sq(l10, t10) ? (f10[t10] = 4, l10[t10]) : sq(i10 = p10.config.globalProperties, t10) ? i10[t10] : void 0;
}, set(e10, t10, r3) {
  let { _: o10 } = e10, { data: i10, setupState: a10, ctx: l10 } = o10;
  return fj(a10, t10) ? (a10[t10] = r3, true) : i10 !== sL && sq(i10, t10) ? (i10[t10] = r3, true) : !sq(o10.props, t10) && !("$" === t10[0] && t10.slice(1) in o10) && (l10[t10] = r3, true);
}, has(e10, t10) {
  let r3, { _: { data: o10, setupState: i10, accessCache: a10, ctx: l10, appContext: s10, propsOptions: u10 } } = e10;
  return !!a10[t10] || o10 !== sL && sq(o10, t10) || fj(i10, t10) || (r3 = u10[0]) && sq(r3, t10) || sq(l10, t10) || sq(fM, t10) || sq(s10.config.globalProperties, t10);
}, defineProperty(e10, t10, r3) {
  return null != r3.get ? e10._.accessCache[t10] = 0 : sq(r3, "value") && this.set(e10, t10, r3.value, null), Reflect.defineProperty(e10, t10, r3);
} };
function fT(e10) {
  return sG(e10) ? e10.reduce((e11, t10) => (e11[t10] = null, e11), {}) : e10;
}
let fI = true;
function f$(e10, t10, r3) {
  cA(sG(e10) ? e10.map((e11) => e11.bind(t10.proxy)) : e10.bind(t10.proxy), t10, r3);
}
function fD(e10) {
  let t10;
  let r3 = e10.type, { mixins: o10, extends: i10 } = r3, { mixins: a10, optionsCache: l10, config: { optionMergeStrategies: s10 } } = e10.appContext, u10 = l10.get(r3);
  return u10 ? t10 = u10 : a10.length || o10 || i10 ? (t10 = {}, a10.length && a10.forEach((e11) => fL(t10, e11, s10, true)), fL(t10, r3, s10)) : t10 = r3, sQ(r3) && l10.set(r3, t10), t10;
}
function fL(e10, t10, r3) {
  let o10 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], { mixins: i10, extends: a10 } = t10;
  for (let l10 in a10 && fL(e10, a10, r3, true), i10 && i10.forEach((t11) => fL(e10, t11, r3, true)), t10)
    if (o10 && "expose" === l10)
      ;
    else {
      let o11 = fF[l10] || r3 && r3[l10];
      e10[l10] = o11 ? o11(e10[l10], t10[l10]) : t10[l10];
    }
  return e10;
}
let fF = { data: fV, props: fU, emits: fU, methods: fB, computed: fB, beforeCreate: fN, created: fN, beforeMount: fN, mounted: fN, beforeUpdate: fN, updated: fN, beforeDestroy: fN, beforeUnmount: fN, destroyed: fN, unmounted: fN, activated: fN, deactivated: fN, errorCaptured: fN, serverPrefetch: fN, components: fB, directives: fB, watch: function(e10, t10) {
  if (!e10)
    return t10;
  if (!t10)
    return e10;
  let r3 = sU(/* @__PURE__ */ Object.create(null), e10);
  for (let o10 in t10)
    r3[o10] = fN(e10[o10], t10[o10]);
  return r3;
}, provide: fV, inject: function(e10, t10) {
  return fB(fz(e10), fz(t10));
} };
function fV(e10, t10) {
  return t10 ? e10 ? function() {
    return sU(sZ(e10) ? e10.call(this, this) : e10, sZ(t10) ? t10.call(this, this) : t10);
  } : t10 : e10;
}
function fz(e10) {
  if (sG(e10)) {
    let t10 = {};
    for (let r3 = 0; r3 < e10.length; r3++)
      t10[e10[r3]] = e10[r3];
    return t10;
  }
  return e10;
}
function fN(e10, t10) {
  return e10 ? [...new Set([].concat(e10, t10))] : t10;
}
function fB(e10, t10) {
  return e10 ? sU(/* @__PURE__ */ Object.create(null), e10, t10) : t10;
}
function fU(e10, t10) {
  return e10 ? sG(e10) && sG(t10) ? [.../* @__PURE__ */ new Set([...e10, ...t10])] : sU(/* @__PURE__ */ Object.create(null), fT(e10), fT(null != t10 ? t10 : {})) : t10;
}
function fH() {
  return { app: null, config: { isNativeTag: sz, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let fW = 0, fq = null;
function fG(e10, t10) {
  if (dP) {
    let r3 = dP.provides, o10 = dP.parent && dP.parent.provides;
    o10 === r3 && (r3 = dP.provides = Object.create(o10)), r3[e10] = t10;
  }
}
function fY(e10, t10) {
  let r3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o10 = dP || cY;
  if (o10 || fq) {
    let i10 = o10 ? null == o10.parent ? o10.vnode.appContext && o10.vnode.appContext.provides : o10.parent.provides : fq._context.provides;
    if (i10 && e10 in i10)
      return i10[e10];
    if (arguments.length > 1)
      return r3 && sZ(t10) ? t10.call(o10 && o10.proxy) : t10;
  }
}
function fK(e10, t10, r3, o10) {
  let i10;
  let [a10, l10] = e10.propsOptions, s10 = false;
  if (t10)
    for (let u10 in t10) {
      let c10;
      if (s6(u10))
        continue;
      let f10 = t10[u10];
      a10 && sq(a10, c10 = s7(u10)) ? l10 && l10.includes(c10) ? (i10 || (i10 = {}))[c10] = f10 : r3[c10] = f10 : cG(e10.emitsOptions, u10) || u10 in o10 && f10 === o10[u10] || (o10[u10] = f10, s10 = true);
    }
  if (l10) {
    let t11 = cd(r3), o11 = i10 || sL;
    for (let i11 = 0; i11 < l10.length; i11++) {
      let s11 = l10[i11];
      r3[s11] = fZ(a10, t11, s11, o11[s11], e10, !sq(o11, s11));
    }
  }
  return s10;
}
function fZ(e10, t10, r3, o10, i10, a10) {
  let l10 = e10[r3];
  if (null != l10) {
    let e11 = sq(l10, "default");
    if (e11 && void 0 === o10) {
      let e12 = l10.default;
      if (l10.type !== Function && !l10.skipFactory && sZ(e12)) {
        let { propsDefaults: a11 } = i10;
        if (r3 in a11)
          o10 = a11[r3];
        else {
          let l11 = dj(i10);
          o10 = a11[r3] = e12.call(null, t10), l11();
        }
      } else
        o10 = e12;
    }
    l10[0] && (a10 && !e11 ? o10 = false : l10[1] && ("" === o10 || o10 === ut(r3)) && (o10 = true));
  }
  return o10;
}
function fX(e10) {
  return !("$" === e10[0] || s6(e10));
}
function fJ(e10) {
  return null === e10 ? "null" : "function" == typeof e10 ? e10.name || "" : "object" == typeof e10 && e10.constructor && e10.constructor.name || "";
}
function fQ(e10, t10) {
  return sG(t10) ? t10.findIndex((t11) => fJ(t11) === fJ(e10)) : sZ(t10) ? fJ(t10) === fJ(e10) ? 0 : -1 : -1;
}
let f0 = (e10) => "_" === e10[0] || "$stable" === e10, f1 = (e10) => sG(e10) ? e10.map(dk) : [dk(e10)], f2 = (e10, t10, r3) => {
  if (t10._n)
    return t10;
  let o10 = function(e11) {
    let t11 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cY;
    if (arguments.length > 2 && arguments[2], !t11 || e11._n)
      return e11;
    let r10 = function() {
      let o11;
      for (var i10 = arguments.length, a10 = Array(i10), l10 = 0; l10 < i10; l10++)
        a10[l10] = arguments[l10];
      r10._d && (dm += -1);
      let s10 = cZ(t11);
      try {
        o11 = e11(...a10);
      } finally {
        cZ(s10), r10._d && (dm += 1);
      }
      return o11;
    };
    return r10._n = true, r10._c = true, r10._d = true, r10;
  }(function() {
    for (var e11 = arguments.length, r10 = Array(e11), o11 = 0; o11 < e11; o11++)
      r10[o11] = arguments[o11];
    return f1(t10(...r10));
  }, r3);
  return o10._c = false, o10;
}, f4 = (e10, t10, r3) => {
  let o10 = e10._ctx;
  for (let r10 in e10) {
    if (f0(r10))
      continue;
    let i10 = e10[r10];
    if (sZ(i10))
      t10[r10] = f2(r10, i10, o10);
    else if (null != i10) {
      let e11 = f1(i10);
      t10[r10] = () => e11;
    }
  }
}, f3 = (e10, t10) => {
  let r3 = f1(t10);
  e10.slots.default = () => r3;
}, f5 = (e10, t10) => {
  if (32 & e10.vnode.shapeFlag) {
    let r3 = t10._;
    r3 ? (e10.slots = cd(t10), ua(t10, "_", r3)) : f4(t10, e10.slots = {});
  } else
    e10.slots = {}, t10 && f3(e10, t10);
  ua(e10.slots, dy, 1);
}, f6 = (e10, t10, r3) => {
  let { vnode: o10, slots: i10 } = e10, a10 = true, l10 = sL;
  if (32 & o10.shapeFlag) {
    let e11 = t10._;
    e11 ? r3 && 1 === e11 ? a10 = false : (sU(i10, t10), r3 || 1 !== e11 || delete i10._) : (a10 = !t10.$stable, f4(t10, i10)), l10 = t10;
  } else
    t10 && (f3(e10, t10), l10 = { default: 1 });
  if (a10)
    for (let e11 in i10)
      f0(e11) || null != l10[e11] || delete i10[e11];
};
function f8(e10, t10, r3, o10) {
  let i10 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
  if (sG(e10)) {
    e10.forEach((e11, a11) => f8(e11, t10 && (sG(t10) ? t10[a11] : t10), r3, o10, i10));
    return;
  }
  if (fd(o10) && !i10)
    return;
  let a10 = 4 & o10.shapeFlag ? dL(o10.component) || o10.component.proxy : o10.el, l10 = i10 ? null : a10, { i: s10, r: u10 } = e10, c10 = t10 && t10.r, f10 = s10.refs === sL ? s10.refs = {} : s10.refs, d10 = s10.setupState;
  if (null != c10 && c10 !== u10 && (sX(c10) ? (f10[c10] = null, sq(d10, c10) && (d10[c10] = null)) : cb(c10) && (c10.value = null)), sZ(u10))
    cE(u10, s10, 12, [l10, f10]);
  else {
    let t11 = sX(u10), o11 = cb(u10);
    if (t11 || o11) {
      let s11 = () => {
        if (e10.f) {
          let r10 = t11 ? sq(d10, u10) ? d10[u10] : f10[u10] : u10.value;
          i10 ? sG(r10) && sH(r10, a10) : sG(r10) ? r10.includes(a10) || r10.push(a10) : t11 ? (f10[u10] = [a10], sq(d10, u10) && (d10[u10] = f10[u10])) : (u10.value = [a10], e10.k && (f10[e10.k] = u10.value));
        } else
          t11 ? (f10[u10] = l10, sq(d10, u10) && (d10[u10] = l10)) : o11 && (u10.value = l10, e10.k && (f10[e10.k] = l10));
      };
      l10 ? (s11.id = -1, f9(s11, r3)) : s11();
    }
  }
}
let f9 = function(e10, t10) {
  t10 && t10.pendingBranch ? sG(e10) ? t10.effects.push(...e10) : t10.effects.push(e10) : (sG(e10) ? cI.push(...e10) : c$ && c$.includes(e10, e10.allowRecurse ? cD + 1 : cD) || cI.push(e10), cN());
};
function f7(e10, t10) {
  let { type: r3, props: o10 } = e10;
  return "svg" === t10 && "foreignObject" === r3 || "mathml" === t10 && "annotation-xml" === r3 && o10 && o10.encoding && o10.encoding.includes("html") ? void 0 : t10;
}
function de(e10, t10) {
  let { effect: r3, update: o10 } = e10;
  r3.allowRecurse = o10.allowRecurse = t10;
}
function dt(e10, t10) {
  let r3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o10 = e10.children, i10 = t10.children;
  if (sG(o10) && sG(i10))
    for (let e11 = 0; e11 < o10.length; e11++) {
      let t11 = o10[e11], a10 = i10[e11];
      !(1 & a10.shapeFlag) || a10.dynamicChildren || ((a10.patchFlag <= 0 || 32 === a10.patchFlag) && ((a10 = i10[e11] = dS(i10[e11])).el = t11.el), r3 || dt(t11, a10)), a10.type === dd && (a10.el = t11.el);
    }
}
let dr = (e10) => e10.__isTeleport, dn = (e10) => e10 && (e10.disabled || "" === e10.disabled), di = (e10) => "undefined" != typeof SVGElement && e10 instanceof SVGElement, da = (e10) => "function" == typeof MathMLElement && e10 instanceof MathMLElement, dl = (e10, t10) => {
  let r3 = e10 && e10.to;
  return sX(r3) ? t10 ? t10(r3) : null : r3;
};
function ds(e10, t10, r3, o10) {
  let { o: { insert: i10 }, m: a10 } = o10, l10 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2;
  0 === l10 && i10(e10.targetAnchor, t10, r3);
  let { el: s10, anchor: u10, shapeFlag: c10, children: f10, props: d10 } = e10, p10 = 2 === l10;
  if (p10 && i10(s10, t10, r3), (!p10 || dn(d10)) && 16 & c10)
    for (let e11 = 0; e11 < f10.length; e11++)
      a10(f10[e11], t10, r3, 2);
  p10 && i10(u10, t10, r3);
}
let du = { name: "Teleport", __isTeleport: true, process(e10, t10, r3, o10, i10, a10, l10, s10, u10, c10) {
  let { mc: f10, pc: d10, pbc: p10, o: { insert: h10, querySelector: m10, createText: g10, createComment: y10 } } = c10, b10 = dn(t10.props), { shapeFlag: _10, children: w10, dynamicChildren: x6 } = t10;
  if (null == e10) {
    let e11 = t10.el = g10(""), c11 = t10.anchor = g10("");
    h10(e11, r3, o10), h10(c11, r3, o10);
    let d11 = t10.target = dl(t10.props, m10), p11 = t10.targetAnchor = g10("");
    d11 && (h10(p11, d11), "svg" === l10 || di(d11) ? l10 = "svg" : ("mathml" === l10 || da(d11)) && (l10 = "mathml"));
    let y11 = (e12, t11) => {
      16 & _10 && f10(w10, e12, t11, i10, a10, l10, s10, u10);
    };
    b10 ? y11(r3, c11) : d11 && y11(d11, p11);
  } else {
    t10.el = e10.el;
    let o11 = t10.anchor = e10.anchor, f11 = t10.target = e10.target, h11 = t10.targetAnchor = e10.targetAnchor, g11 = dn(e10.props), y11 = g11 ? r3 : f11;
    if ("svg" === l10 || di(f11) ? l10 = "svg" : ("mathml" === l10 || da(f11)) && (l10 = "mathml"), x6 ? (p10(e10.dynamicChildren, x6, y11, i10, a10, l10, s10), dt(e10, t10, true)) : u10 || d10(e10, t10, y11, g11 ? o11 : h11, i10, a10, l10, s10, false), b10)
      g11 ? t10.props && e10.props && t10.props.to !== e10.props.to && (t10.props.to = e10.props.to) : ds(t10, r3, o11, c10, 1);
    else if ((t10.props && t10.props.to) !== (e10.props && e10.props.to)) {
      let e11 = t10.target = dl(t10.props, m10);
      e11 && ds(t10, e11, null, c10, 0);
    } else
      g11 && ds(t10, f11, h11, c10, 1);
  }
  dc(t10);
}, remove(e10, t10, r3, o10, i10, a10) {
  let { um: l10, o: { remove: s10 } } = i10, { shapeFlag: u10, children: c10, anchor: f10, targetAnchor: d10, target: p10, props: h10 } = e10;
  if (p10 && s10(d10), a10 && s10(f10), 16 & u10) {
    let e11 = a10 || !dn(h10);
    for (let o11 = 0; o11 < c10.length; o11++) {
      let i11 = c10[o11];
      l10(i11, t10, r3, e11, !!i11.dynamicChildren);
    }
  }
}, move: ds, hydrate: function(e10, t10, r3, o10, i10, a10, l10, s10) {
  let { o: { nextSibling: u10, parentNode: c10, querySelector: f10 } } = l10, d10 = t10.target = dl(t10.props, f10);
  if (d10) {
    let l11 = d10._lpa || d10.firstChild;
    if (16 & t10.shapeFlag) {
      if (dn(t10.props))
        t10.anchor = s10(u10(e10), t10, c10(e10), r3, o10, i10, a10), t10.targetAnchor = l11;
      else {
        t10.anchor = u10(e10);
        let c11 = l11;
        for (; c11; )
          if ((c11 = u10(c11)) && 8 === c11.nodeType && "teleport anchor" === c11.data) {
            t10.targetAnchor = c11, d10._lpa = t10.targetAnchor && u10(t10.targetAnchor);
            break;
          }
        s10(l11, t10, d10, r3, o10, i10, a10);
      }
    }
    dc(t10);
  }
  return t10.anchor && u10(t10.anchor);
} };
function dc(e10) {
  let t10 = e10.ctx;
  if (t10 && t10.ut) {
    let r3 = e10.children[0].el;
    for (; r3 && r3 !== e10.targetAnchor; )
      1 === r3.nodeType && r3.setAttribute("data-v-owner", t10.uid), r3 = r3.nextSibling;
    t10.ut();
  }
}
let df = Symbol.for("v-fgt"), dd = Symbol.for("v-txt"), dp = Symbol.for("v-cmt"), dh = Symbol.for("v-stc"), dm = 1;
function dv(e10) {
  return !!e10 && true === e10.__v_isVNode;
}
function dg(e10, t10) {
  return e10.type === t10.type && e10.key === t10.key;
}
let dy = "__vInternal", db = (e10) => {
  let { key: t10 } = e10;
  return null != t10 ? t10 : null;
}, d_ = (e10) => {
  let { ref: t10, ref_key: r3, ref_for: o10 } = e10;
  return "number" == typeof t10 && (t10 = "" + t10), null != t10 ? sX(t10) || cb(t10) || sZ(t10) ? { i: cY, r: t10, k: r3, f: !!o10 } : t10 : null;
}, dw = function(e10) {
  var t10, r3, o10;
  let i10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, a10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, l10 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, s10 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null, u10 = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
  if (e10 && e10 !== c1 || (e10 = dp), dv(e10)) {
    let t11 = dx(e10, i10, true);
    return a10 && dO(t11, a10), t11.patchFlag |= -2, t11;
  }
  if (sZ(t10 = e10) && "__vccOpts" in t10 && (e10 = e10.__vccOpts), i10) {
    let { class: e11, style: t11 } = i10 = (o10 = i10) ? cu(o10) || cc(o10) || dy in o10 ? sU({}, o10) : o10 : null;
    e11 && !sX(e11) && (i10.class = uh(e11)), sQ(t11) && ((cu(r3 = t11) || cc(r3)) && !sG(t11) && (t11 = sU({}, t11)), i10.style = uc(t11));
  }
  let c10 = sX(e10) ? 1 : c2(e10) ? 128 : dr(e10) ? 64 : sQ(e10) ? 4 : sZ(e10) ? 2 : 0;
  return function(e11) {
    let t11 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, o11 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, i11 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null, a11 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : e11 === df ? 0 : 1, l11 = (arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7]), s11 = { __v_isVNode: true, __v_skip: true, type: e11, props: t11, key: t11 && db(t11), ref: t11 && d_(t11), scopeId: cK, slotScopeIds: null, children: r10, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetAnchor: null, staticCount: 0, shapeFlag: a11, patchFlag: o11, dynamicProps: i11, dynamicChildren: null, appContext: null, ctx: cY };
    return l11 ? (dO(s11, r10), 128 & a11 && e11.normalize(s11)) : r10 && (s11.shapeFlag |= sX(r10) ? 8 : 16), s11;
  }(e10, i10, a10, l10, s10, c10, u10, true);
};
function dx(e10, t10) {
  let r3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], { props: o10, ref: i10, patchFlag: a10, children: l10 } = e10, s10 = t10 ? function() {
    for (var e11 = arguments.length, t11 = Array(e11), r10 = 0; r10 < e11; r10++)
      t11[r10] = arguments[r10];
    let o11 = {};
    for (let e12 = 0; e12 < t11.length; e12++) {
      let r11 = t11[e12];
      for (let e13 in r11)
        if ("class" === e13)
          o11.class !== r11.class && (o11.class = uh([o11.class, r11.class]));
        else if ("style" === e13)
          o11.style = uc([o11.style, r11.style]);
        else if (sN(e13)) {
          let t12 = o11[e13], i11 = r11[e13];
          i11 && t12 !== i11 && !(sG(t12) && t12.includes(i11)) && (o11[e13] = t12 ? [].concat(t12, i11) : i11);
        } else
          "" !== e13 && (o11[e13] = r11[e13]);
    }
    return o11;
  }(o10 || {}, t10) : o10;
  return { __v_isVNode: true, __v_skip: true, type: e10.type, props: s10, key: s10 && db(s10), ref: t10 && t10.ref ? r3 && i10 ? sG(i10) ? i10.concat(d_(t10)) : [i10, d_(t10)] : d_(t10) : i10, scopeId: e10.scopeId, slotScopeIds: e10.slotScopeIds, children: l10, target: e10.target, targetAnchor: e10.targetAnchor, staticCount: e10.staticCount, shapeFlag: e10.shapeFlag, patchFlag: t10 && e10.type !== df ? -1 === a10 ? 16 : 16 | a10 : a10, dynamicProps: e10.dynamicProps, dynamicChildren: e10.dynamicChildren, appContext: e10.appContext, dirs: e10.dirs, transition: e10.transition, component: e10.component, suspense: e10.suspense, ssContent: e10.ssContent && dx(e10.ssContent), ssFallback: e10.ssFallback && dx(e10.ssFallback), el: e10.el, anchor: e10.anchor, ctx: e10.ctx, ce: e10.ce };
}
function dk(e10) {
  return null == e10 || "boolean" == typeof e10 ? dw(dp) : sG(e10) ? dw(df, null, e10.slice()) : "object" == typeof e10 ? dS(e10) : dw(dd, null, String(e10));
}
function dS(e10) {
  return null === e10.el && -1 !== e10.patchFlag || e10.memo ? e10 : dx(e10);
}
function dO(e10, t10) {
  let r3 = 0, { shapeFlag: o10 } = e10;
  if (null == t10)
    t10 = null;
  else if (sG(t10))
    r3 = 16;
  else if ("object" == typeof t10) {
    if (65 & o10) {
      let r10 = t10.default;
      r10 && (r10._c && (r10._d = false), dO(e10, r10()), r10._c && (r10._d = true));
      return;
    }
    {
      r3 = 32;
      let o11 = t10._;
      o11 || dy in t10 ? 3 === o11 && cY && (1 === cY.slots._ ? t10._ = 1 : (t10._ = 2, e10.patchFlag |= 1024)) : t10._ctx = cY;
    }
  } else
    sZ(t10) ? (t10 = { default: t10, _ctx: cY }, r3 = 32) : (t10 = String(t10), 64 & o10 ? (r3 = 16, t10 = [function() {
      let e11 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : " ", t11 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return dw(dd, null, e11, t11);
    }(t10)]) : r3 = 8);
  e10.children = t10, e10.shapeFlag |= r3;
}
function dC(e10, t10, r3) {
  let o10 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
  cA(e10, t10, 7, [r3, o10]);
}
let dE = fH(), dA = 0, dP = null, dM = () => dP || cY;
{
  let e10 = uu(), t10 = (t11, r3) => {
    let o10;
    return (o10 = e10[t11]) || (o10 = e10[t11] = []), o10.push(r3), (e11) => {
      o10.length > 1 ? o10.forEach((t12) => t12(e11)) : o10[0](e11);
    };
  };
  o = t10("__VUE_INSTANCE_SETTERS__", (e11) => dP = e11), i = t10("__VUE_SSR_SETTERS__", (e11) => dI = e11);
}
let dj = (e10) => {
  let t10 = dP;
  return o(e10), e10.scope.on(), () => {
    e10.scope.off(), o(t10);
  };
}, dR = () => {
  dP && dP.scope.off(), o(null);
};
function dT(e10) {
  return 4 & e10.vnode.shapeFlag;
}
let dI = false;
function d$(e10, t10, r3) {
  sZ(t10) ? e10.type.__ssrInlineRender ? e10.ssrRender = t10 : e10.render = t10 : sQ(t10) && (e10.setupState = cO(t10)), dD(e10, r3);
}
function dD(e10, t10, r3) {
  let o10 = e10.type;
  if (!e10.render) {
    if (!t10 && a && !o10.render) {
      let t11 = o10.template || fD(e10).template;
      if (t11) {
        let { isCustomElement: r10, compilerOptions: i10 } = e10.appContext.config, { delimiters: l10, compilerOptions: s10 } = o10, u10 = sU(sU({ isCustomElement: r10, delimiters: l10 }, i10), s10);
        o10.render = a(t11, u10);
      }
    }
    e10.render = o10.render || sV;
  }
  {
    let t11 = dj(e10);
    uS();
    try {
      !function(e11) {
        let t12 = fD(e11), r10 = e11.proxy, o11 = e11.ctx;
        fI = false, t12.beforeCreate && f$(t12.beforeCreate, e11, "bc");
        let { data: i10, computed: a10, methods: l10, watch: s10, provide: u10, inject: c10, created: f10, beforeMount: d10, mounted: p10, beforeUpdate: h10, updated: m10, activated: g10, deactivated: y10, beforeDestroy: b10, beforeUnmount: _10, destroyed: w10, unmounted: x6, render: k2, renderTracked: S2, renderTriggered: O2, errorCaptured: C2, serverPrefetch: E2, expose: A2, inheritAttrs: P2, components: M2, directives: j2, filters: R2 } = t12;
        if (c10 && function(e12, t13) {
          for (let r11 in arguments.length > 2 && void 0 !== arguments[2] && arguments[2], sG(e12) && (e12 = fz(e12)), e12) {
            let o12;
            let i11 = e12[r11];
            cb(o12 = sQ(i11) ? "default" in i11 ? fY(i11.from || r11, i11.default, true) : fY(i11.from || r11) : fY(i11)) ? Object.defineProperty(t13, r11, { enumerable: true, configurable: true, get: () => o12.value, set: (e13) => o12.value = e13 }) : t13[r11] = o12;
          }
        }(c10, o11, null), l10)
          for (let e12 in l10) {
            let t13 = l10[e12];
            sZ(t13) && (o11[e12] = t13.bind(r10));
          }
        if (i10) {
          let t13 = i10.call(r10, r10);
          sQ(t13) && (e11.data = ci(t13));
        }
        if (fI = true, a10)
          for (let e12 in a10) {
            let t13 = a10[e12], i11 = sZ(t13) ? t13.bind(r10, r10) : sZ(t13.get) ? t13.get.bind(r10, r10) : sV, l11 = dV({ get: i11, set: !sZ(t13) && sZ(t13.set) ? t13.set.bind(r10) : sV });
            Object.defineProperty(o11, e12, { enumerable: true, configurable: true, get: () => l11.value, set: (e13) => l11.value = e13 });
          }
        if (s10)
          for (let e12 in s10)
            !function e13(t13, r11, o12, i11) {
              let a11 = i11.includes(".") ? c9(o12, i11) : () => o12[i11];
              if (sX(t13)) {
                let e14 = r11[t13];
                sZ(e14) && c6(a11, e14, void 0);
              } else if (sZ(t13))
                c6(a11, t13.bind(o12), void 0);
              else if (sQ(t13)) {
                if (sG(t13))
                  t13.forEach((t14) => e13(t14, r11, o12, i11));
                else {
                  let e14 = sZ(t13.handler) ? t13.handler.bind(o12) : r11[t13.handler];
                  sZ(e14) && c6(a11, e14, t13);
                }
              }
            }(s10[e12], o11, r10, e12);
        if (u10) {
          let e12 = sZ(u10) ? u10.call(r10) : u10;
          Reflect.ownKeys(e12).forEach((t13) => {
            fG(t13, e12[t13]);
          });
        }
        function T2(e12, t13) {
          sG(t13) ? t13.forEach((t14) => e12(t14.bind(r10))) : t13 && e12(t13.bind(r10));
        }
        if (f10 && f$(f10, e11, "c"), T2(fb, d10), T2(f_, p10), T2(fw, h10), T2(fx, m10), T2(fh, g10), T2(fm, y10), T2(fA, C2), T2(fE, S2), T2(fC, O2), T2(fk, _10), T2(fS, x6), T2(fO, E2), sG(A2)) {
          if (A2.length) {
            let t13 = e11.exposed || (e11.exposed = {});
            A2.forEach((e12) => {
              Object.defineProperty(t13, e12, { get: () => r10[e12], set: (t14) => r10[e12] = t14 });
            });
          } else
            e11.exposed || (e11.exposed = {});
        }
        k2 && e11.render === sV && (e11.render = k2), null != P2 && (e11.inheritAttrs = P2), M2 && (e11.components = M2), j2 && (e11.directives = j2);
      }(e10);
    } finally {
      uO(), t11();
    }
  }
}
function dL(e10) {
  if (e10.exposed)
    return e10.exposeProxy || (e10.exposeProxy = new Proxy(cO(cp(e10.exposed)), { get: (t10, r3) => r3 in t10 ? t10[r3] : r3 in fM ? fM[r3](e10) : void 0, has: (e11, t10) => t10 in e11 || t10 in fM }));
}
let dF = /(?:^|[-_])(\w)/g, dV = (e10, t10) => function(e11, t11) {
  let r3, o10, i10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], a10 = sZ(e11);
  return a10 ? (r3 = e11, o10 = sV) : (r3 = e11.get, o10 = e11.set), new cv(r3, o10, a10 || !o10, i10);
}(e10, t10, dI);
function dz(e10, t10, r3) {
  let o10 = arguments.length;
  return 2 !== o10 ? (o10 > 3 ? r3 = Array.prototype.slice.call(arguments, 2) : 3 === o10 && dv(r3) && (r3 = [r3]), dw(e10, t10, r3)) : !sQ(t10) || sG(t10) ? dw(e10, null, t10) : dv(t10) ? dw(e10, null, [t10]) : dw(e10, t10);
}
let dN = "undefined" != typeof document ? document : null, dB = dN && dN.createElement("template"), dU = "transition", dH = "animation", dW = Symbol("_vtc"), dq = (e10, t10) => {
  let { slots: r3 } = t10;
  return dz(fi, function(e11) {
    let t11 = {};
    for (let r11 in e11)
      r11 in dG || (t11[r11] = e11[r11]);
    if (false === e11.css)
      return t11;
    let { name: r10 = "v", type: o10, duration: i10, enterFromClass: a10 = `${r10}-enter-from`, enterActiveClass: l10 = `${r10}-enter-active`, enterToClass: s10 = `${r10}-enter-to`, appearFromClass: u10 = a10, appearActiveClass: c10 = l10, appearToClass: f10 = s10, leaveFromClass: d10 = `${r10}-leave-from`, leaveActiveClass: p10 = `${r10}-leave-active`, leaveToClass: h10 = `${r10}-leave-to` } = e11, m10 = function(e12) {
      if (null == e12)
        return null;
      if (sQ(e12))
        return [us(e12.enter), us(e12.leave)];
      {
        let t12 = us(e12);
        return [t12, t12];
      }
    }(i10), g10 = m10 && m10[0], y10 = m10 && m10[1], { onBeforeEnter: b10, onEnter: _10, onEnterCancelled: w10, onLeave: x6, onLeaveCancelled: k2, onBeforeAppear: S2 = b10, onAppear: O2 = _10, onAppearCancelled: C2 = w10 } = t11, E2 = (e12, t12, r11) => {
      dX(e12, t12 ? f10 : s10), dX(e12, t12 ? c10 : l10), r11 && r11();
    }, A2 = (e12, t12) => {
      e12._isLeaving = false, dX(e12, d10), dX(e12, h10), dX(e12, p10), t12 && t12();
    }, P2 = (e12) => (t12, r11) => {
      let i11 = e12 ? O2 : _10, l11 = () => E2(t12, e12, r11);
      dY(i11, [t12, l11]), dJ(() => {
        dX(t12, e12 ? u10 : a10), dZ(t12, e12 ? f10 : s10), dK(i11) || d0(t12, o10, g10, l11);
      });
    };
    return sU(t11, { onBeforeEnter(e12) {
      dY(b10, [e12]), dZ(e12, a10), dZ(e12, l10);
    }, onBeforeAppear(e12) {
      dY(S2, [e12]), dZ(e12, u10), dZ(e12, c10);
    }, onEnter: P2(false), onAppear: P2(true), onLeave(e12, t12) {
      e12._isLeaving = true;
      let r11 = () => A2(e12, t12);
      dZ(e12, d10), document.body.offsetHeight, dZ(e12, p10), dJ(() => {
        e12._isLeaving && (dX(e12, d10), dZ(e12, h10), dK(x6) || d0(e12, o10, y10, r11));
      }), dY(x6, [e12, r11]);
    }, onEnterCancelled(e12) {
      E2(e12, false), dY(w10, [e12]);
    }, onAppearCancelled(e12) {
      E2(e12, true), dY(C2, [e12]);
    }, onLeaveCancelled(e12) {
      A2(e12), dY(k2, [e12]);
    } });
  }(e10), r3);
};
dq.displayName = "Transition";
let dG = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String };
dq.props = sU({}, fo, dG);
let dY = function(e10) {
  let t10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
  sG(e10) ? e10.forEach((e11) => e11(...t10)) : e10 && e10(...t10);
}, dK = (e10) => !!e10 && (sG(e10) ? e10.some((e11) => e11.length > 1) : e10.length > 1);
function dZ(e10, t10) {
  t10.split(/\s+/).forEach((t11) => t11 && e10.classList.add(t11)), (e10[dW] || (e10[dW] = /* @__PURE__ */ new Set())).add(t10);
}
function dX(e10, t10) {
  t10.split(/\s+/).forEach((t11) => t11 && e10.classList.remove(t11));
  let r3 = e10[dW];
  r3 && (r3.delete(t10), r3.size || (e10[dW] = void 0));
}
function dJ(e10) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e10);
  });
}
let dQ = 0;
function d0(e10, t10, r3, o10) {
  let i10 = e10._endId = ++dQ, a10 = () => {
    i10 === e10._endId && o10();
  };
  if (r3)
    return setTimeout(a10, r3);
  let { type: l10, timeout: s10, propCount: u10 } = function(e11, t11) {
    let r10 = window.getComputedStyle(e11), o11 = (e12) => (r10[e12] || "").split(", "), i11 = o11(`${dU}Delay`), a11 = o11(`${dU}Duration`), l11 = d1(i11, a11), s11 = o11(`${dH}Delay`), u11 = o11(`${dH}Duration`), c11 = d1(s11, u11), f11 = null, d11 = 0, p11 = 0;
    t11 === dU ? l11 > 0 && (f11 = dU, d11 = l11, p11 = a11.length) : t11 === dH ? c11 > 0 && (f11 = dH, d11 = c11, p11 = u11.length) : p11 = (f11 = (d11 = Math.max(l11, c11)) > 0 ? l11 > c11 ? dU : dH : null) ? f11 === dU ? a11.length : u11.length : 0;
    let h10 = f11 === dU && /\b(transform|all)(,|$)/.test(o11(`${dU}Property`).toString());
    return { type: f11, timeout: d11, propCount: p11, hasTransform: h10 };
  }(e10, t10);
  if (!l10)
    return o10();
  let c10 = l10 + "end", f10 = 0, d10 = () => {
    e10.removeEventListener(c10, p10), a10();
  }, p10 = (t11) => {
    t11.target === e10 && ++f10 >= u10 && d10();
  };
  setTimeout(() => {
    f10 < u10 && d10();
  }, s10 + 1), e10.addEventListener(c10, p10);
}
function d1(e10, t10) {
  for (; e10.length < t10.length; )
    e10 = e10.concat(e10);
  return Math.max(...t10.map((t11, r3) => d2(t11) + d2(e10[r3])));
}
function d2(e10) {
  return "auto" === e10 ? 0 : 1e3 * Number(e10.slice(0, -1).replace(",", "."));
}
let d4 = Symbol("_vod"), d3 = Symbol("_vsh"), d5 = Symbol(""), d6 = /(^|;)\s*display\s*:/, d8 = /\s*!important$/;
function d9(e10, t10, r3) {
  if (sG(r3))
    r3.forEach((r10) => d9(e10, t10, r10));
  else if (null == r3 && (r3 = ""), t10.startsWith("--"))
    e10.setProperty(t10, r3);
  else {
    let o10 = function(e11, t11) {
      let r10 = pe[t11];
      if (r10)
        return r10;
      let o11 = s7(t11);
      if ("filter" !== o11 && o11 in e11)
        return pe[t11] = o11;
      o11 = ur(o11);
      for (let r11 = 0; r11 < d7.length; r11++) {
        let i10 = d7[r11] + o11;
        if (i10 in e11)
          return pe[t11] = i10;
      }
      return t11;
    }(e10, t10);
    d8.test(r3) ? e10.setProperty(ut(o10), r3.replace(d8, ""), "important") : e10[o10] = r3;
  }
}
let d7 = ["Webkit", "Moz", "ms"], pe = {}, pt = "http://www.w3.org/1999/xlink", pr = Symbol("_vei"), pn = /(?:Once|Passive|Capture)$/, po = 0, pi = Promise.resolve(), pa = () => po || (pi.then(() => po = 0), po = Date.now()), pl = (e10) => 111 === e10.charCodeAt(0) && 110 === e10.charCodeAt(1) && e10.charCodeAt(2) > 96 && 123 > e10.charCodeAt(2), ps = sU({ patchProp: (e10, t10, r3, o10, i10, a10, l10, s10, u10) => {
  let c10 = "svg" === i10;
  "class" === t10 ? function(e11, t11, r10) {
    let o11 = e11[dW];
    o11 && (t11 = (t11 ? [t11, ...o11] : [...o11]).join(" ")), null == t11 ? e11.removeAttribute("class") : r10 ? e11.setAttribute("class", t11) : e11.className = t11;
  }(e10, o10, c10) : "style" === t10 ? function(e11, t11, r10) {
    let o11 = e11.style, i11 = sX(r10), a11 = false;
    if (r10 && !i11) {
      if (t11) {
        if (sX(t11))
          for (let e12 of t11.split(";")) {
            let t12 = e12.slice(0, e12.indexOf(":")).trim();
            null == r10[t12] && d9(o11, t12, "");
          }
        else
          for (let e12 in t11)
            null == r10[e12] && d9(o11, e12, "");
      }
      for (let e12 in r10)
        "display" === e12 && (a11 = true), d9(o11, e12, r10[e12]);
    } else if (i11) {
      if (t11 !== r10) {
        let e12 = o11[d5];
        e12 && (r10 += ";" + e12), o11.cssText = r10, a11 = d6.test(r10);
      }
    } else
      t11 && e11.removeAttribute("style");
    d4 in e11 && (e11[d4] = a11 ? o11.display : "", e11[d3] && (o11.display = "none"));
  }(e10, r3, o10) : sN(t10) ? sB(t10) || function(e11, t11, r10, o11) {
    let i11 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null, a11 = e11[pr] || (e11[pr] = {}), l11 = a11[t11];
    if (o11 && l11)
      l11.value = o11;
    else {
      let [r11, s11] = function(e12) {
        let t12;
        if (pn.test(e12)) {
          let r12;
          for (t12 = {}; r12 = e12.match(pn); )
            e12 = e12.slice(0, e12.length - r12[0].length), t12[r12[0].toLowerCase()] = true;
        }
        return [":" === e12[2] ? e12.slice(3) : ut(e12.slice(2)), t12];
      }(t11);
      o11 ? function(e12, t12, r12, o12) {
        e12.addEventListener(t12, r12, o12);
      }(e11, r11, a11[t11] = function(e12, t12) {
        let r12 = (e13) => {
          if (e13._vts) {
            if (e13._vts <= r12.attached)
              return;
          } else
            e13._vts = Date.now();
          cA(function(e14, t13) {
            if (!sG(t13))
              return t13;
            {
              let r13 = e14.stopImmediatePropagation;
              return e14.stopImmediatePropagation = () => {
                r13.call(e14), e14._stopped = true;
              }, t13.map((e15) => (t14) => !t14._stopped && e15 && e15(t14));
            }
          }(e13, r12.value), t12, 5, [e13]);
        };
        return r12.value = e12, r12.attached = pa(), r12;
      }(o11, i11), s11) : l11 && (!function(e12, t12, r12, o12) {
        e12.removeEventListener(t12, r12, o12);
      }(e11, r11, l11, s11), a11[t11] = void 0);
    }
  }(e10, t10, r3, o10, l10) : ("." === t10[0] ? (t10 = t10.slice(1), 0) : "^" === t10[0] ? (t10 = t10.slice(1), 1) : !function(e11, t11, r10, o11) {
    if (o11)
      return !!("innerHTML" === t11 || "textContent" === t11 || t11 in e11 && pl(t11) && sZ(r10));
    if ("spellcheck" === t11 || "draggable" === t11 || "translate" === t11 || "form" === t11 || "list" === t11 && "INPUT" === e11.tagName || "type" === t11 && "TEXTAREA" === e11.tagName)
      return false;
    if ("width" === t11 || "height" === t11) {
      let t12 = e11.tagName;
      if ("IMG" === t12 || "VIDEO" === t12 || "CANVAS" === t12 || "SOURCE" === t12)
        return false;
    }
    return !(pl(t11) && sX(r10)) && t11 in e11;
  }(e10, t10, o10, c10)) ? ("true-value" === t10 ? e10._trueValue = o10 : "false-value" === t10 && (e10._falseValue = o10), function(e11, t11, r10, o11, i11) {
    if (o11 && t11.startsWith("xlink:"))
      null == r10 ? e11.removeAttributeNS(pt, t11.slice(6, t11.length)) : e11.setAttributeNS(pt, t11, r10);
    else {
      let o12 = um(t11);
      null == r10 || o12 && !(r10 || "" === r10) ? e11.removeAttribute(t11) : e11.setAttribute(t11, o12 ? "" : r10);
    }
  }(e10, t10, o10, c10)) : function(e11, t11, r10, o11, i11, a11, l11) {
    if ("innerHTML" === t11 || "textContent" === t11) {
      o11 && l11(o11, i11, a11), e11[t11] = null == r10 ? "" : r10;
      return;
    }
    let s11 = e11.tagName;
    if ("value" === t11 && "PROGRESS" !== s11 && !s11.includes("-")) {
      let o12 = "OPTION" === s11 ? e11.getAttribute("value") || "" : e11.value, i12 = null == r10 ? "" : r10;
      o12 === i12 && "_value" in e11 || (e11.value = i12), null == r10 && e11.removeAttribute(t11), e11._value = r10;
      return;
    }
    let u11 = false;
    if ("" === r10 || null == r10) {
      let o12 = typeof e11[t11];
      if ("boolean" === o12) {
        var c11;
        r10 = !!(c11 = r10) || "" === c11;
      } else
        null == r10 && "string" === o12 ? (r10 = "", u11 = true) : "number" === o12 && (r10 = 0, u11 = true);
    }
    try {
      e11[t11] = r10;
    } catch (e12) {
    }
    u11 && e11.removeAttribute(t11);
  }(e10, t10, o10, a10, l10, s10, u10);
} }, { insert: (e10, t10, r3) => {
  t10.insertBefore(e10, r3 || null);
}, remove: (e10) => {
  let t10 = e10.parentNode;
  t10 && t10.removeChild(e10);
}, createElement: (e10, t10, r3, o10) => {
  let i10 = "svg" === t10 ? dN.createElementNS("http://www.w3.org/2000/svg", e10) : "mathml" === t10 ? dN.createElementNS("http://www.w3.org/1998/Math/MathML", e10) : dN.createElement(e10, r3 ? { is: r3 } : void 0);
  return "select" === e10 && o10 && null != o10.multiple && i10.setAttribute("multiple", o10.multiple), i10;
}, createText: (e10) => dN.createTextNode(e10), createComment: (e10) => dN.createComment(e10), setText: (e10, t10) => {
  e10.nodeValue = t10;
}, setElementText: (e10, t10) => {
  e10.textContent = t10;
}, parentNode: (e10) => e10.parentNode, nextSibling: (e10) => e10.nextSibling, querySelector: (e10) => dN.querySelector(e10), setScopeId(e10, t10) {
  e10.setAttribute(t10, "");
}, insertStaticContent(e10, t10, r3, o10, i10, a10) {
  let l10 = r3 ? r3.previousSibling : t10.lastChild;
  if (i10 && (i10 === a10 || i10.nextSibling))
    for (; t10.insertBefore(i10.cloneNode(true), r3), i10 !== a10 && (i10 = i10.nextSibling); )
      ;
  else {
    dB.innerHTML = "svg" === o10 ? `<svg>${e10}</svg>` : "mathml" === o10 ? `<math>${e10}</math>` : e10;
    let i11 = dB.content;
    if ("svg" === o10 || "mathml" === o10) {
      let e11 = i11.firstChild;
      for (; e11.firstChild; )
        i11.appendChild(e11.firstChild);
      i11.removeChild(e11);
    }
    t10.insertBefore(i11, r3);
  }
  return [l10 ? l10.nextSibling : t10.firstChild, r3 ? r3.previousSibling : t10.lastChild];
} }), pu = "undefined" != typeof document, pc = Object.assign;
function pf(e10, t10) {
  let r3 = {};
  for (let o10 in t10) {
    let i10 = t10[o10];
    r3[o10] = pp(i10) ? i10.map(e10) : e10(i10);
  }
  return r3;
}
let pd = () => {
}, pp = Array.isArray, ph = /#/g, pm = /&/g, pv = /\//g, pg = /=/g, py = /\?/g, pb = /\+/g, p_ = /%5B/g, pw = /%5D/g, px = /%5E/g, pk = /%60/g, pS = /%7B/g, pO = /%7C/g, pC = /%7D/g, pE = /%20/g;
function pA(e10) {
  return encodeURI("" + e10).replace(pO, "|").replace(p_, "[").replace(pw, "]");
}
function pP(e10) {
  return pA(e10).replace(pb, "%2B").replace(pE, "+").replace(ph, "%23").replace(pm, "%26").replace(pk, "`").replace(pS, "{").replace(pC, "}").replace(px, "^");
}
function pM(e10) {
  return null == e10 ? "" : pA(e10).replace(ph, "%23").replace(py, "%3F").replace(pv, "%2F");
}
function pj(e10) {
  try {
    return decodeURIComponent("" + e10);
  } catch (e11) {
  }
  return "" + e10;
}
let pR = /\/$/, pT = (e10) => e10.replace(pR, "");
function pI(e10, t10) {
  let r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/", o10, i10 = {}, a10 = "", l10 = "", s10 = t10.indexOf("#"), u10 = t10.indexOf("?");
  return s10 < u10 && s10 >= 0 && (u10 = -1), u10 > -1 && (o10 = t10.slice(0, u10), i10 = e10(a10 = t10.slice(u10 + 1, s10 > -1 ? s10 : t10.length))), s10 > -1 && (o10 = o10 || t10.slice(0, s10), l10 = t10.slice(s10, t10.length)), { fullPath: (o10 = function(e11, t11) {
    let r10, o11;
    if (e11.startsWith("/"))
      return e11;
    if (!e11)
      return t11;
    let i11 = t11.split("/"), a11 = e11.split("/"), l11 = a11[a11.length - 1];
    (".." === l11 || "." === l11) && a11.push("");
    let s11 = i11.length - 1;
    for (r10 = 0; r10 < a11.length; r10++)
      if ("." !== (o11 = a11[r10])) {
        if (".." === o11)
          s11 > 1 && s11--;
        else
          break;
      }
    return i11.slice(0, s11).join("/") + "/" + a11.slice(r10).join("/");
  }(null != o10 ? o10 : t10, r3)) + (a10 && "?") + a10 + l10, path: o10, query: i10, hash: pj(l10) };
}
function p$(e10, t10) {
  return t10 && e10.toLowerCase().startsWith(t10.toLowerCase()) ? e10.slice(t10.length) || "/" : e10;
}
function pD(e10, t10) {
  return (e10.aliasOf || e10) === (t10.aliasOf || t10);
}
function pL(e10, t10) {
  if (Object.keys(e10).length !== Object.keys(t10).length)
    return false;
  for (let i10 in e10) {
    var r3, o10;
    if (r3 = e10[i10], o10 = t10[i10], pp(r3) ? !pF(r3, o10) : pp(o10) ? !pF(o10, r3) : r3 !== o10)
      return false;
  }
  return true;
}
function pF(e10, t10) {
  return pp(t10) ? e10.length === t10.length && e10.every((e11, r3) => e11 === t10[r3]) : 1 === e10.length && e10[0] === t10;
}
(O = W || (W = {})).pop = "pop", O.push = "push", (C = q || (q = {})).back = "back", C.forward = "forward", C.unknown = "";
let pV = /^[^#]+#/;
function pz(e10, t10) {
  return e10.replace(pV, "#") + t10;
}
let pN = () => ({ left: window.scrollX, top: window.scrollY });
function pB(e10, t10) {
  return (history.state ? history.state.position - t10 : -1) + e10;
}
let pU = /* @__PURE__ */ new Map(), pH = () => location.protocol + "//" + location.host;
function pW(e10, t10) {
  let { pathname: r3, search: o10, hash: i10 } = t10, a10 = e10.indexOf("#");
  if (a10 > -1) {
    let t11 = i10.includes(e10.slice(a10)) ? e10.slice(a10).length : 1, r10 = i10.slice(t11);
    return "/" !== r10[0] && (r10 = "/" + r10), p$(r10, "");
  }
  return p$(r3, e10) + o10 + i10;
}
function pq(e10, t10, r3) {
  let o10 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], i10 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
  return { back: e10, current: t10, forward: r3, replaced: o10, position: window.history.length, scroll: i10 ? pN() : null };
}
function pG(e10) {
  return "string" == typeof e10 || "symbol" == typeof e10;
}
let pY = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 }, pK = Symbol("");
function pZ(e10, t10) {
  return pc(Error(), { type: e10, [pK]: true }, t10);
}
function pX(e10, t10) {
  return e10 instanceof Error && pK in e10 && (null == t10 || !!(e10.type & t10));
}
(E = G || (G = {}))[E.aborted = 4] = "aborted", E[E.cancelled = 8] = "cancelled", E[E.duplicated = 16] = "duplicated";
let pJ = "[^/]+?", pQ = { sensitive: false, strict: false, start: true, end: true }, p0 = /[.+*?^${}()[\]/\\]/g;
function p1(e10) {
  let t10 = e10[e10.length - 1];
  return e10.length > 0 && t10[t10.length - 1] < 0;
}
let p2 = { type: 0, value: "" }, p4 = /[a-zA-Z0-9_]/;
function p3(e10, t10) {
  let r3 = {};
  for (let o10 of t10)
    o10 in e10 && (r3[o10] = e10[o10]);
  return r3;
}
function p5(e10) {
  for (; e10; ) {
    if (e10.record.aliasOf)
      return true;
    e10 = e10.parent;
  }
  return false;
}
function p6(e10, t10) {
  let r3 = {};
  for (let o10 in e10)
    r3[o10] = o10 in t10 ? t10[o10] : e10[o10];
  return r3;
}
function p8(e10) {
  let t10 = {};
  if ("" === e10 || "?" === e10)
    return t10;
  let r3 = ("?" === e10[0] ? e10.slice(1) : e10).split("&");
  for (let e11 = 0; e11 < r3.length; ++e11) {
    let o10 = r3[e11].replace(pb, " "), i10 = o10.indexOf("="), a10 = pj(i10 < 0 ? o10 : o10.slice(0, i10)), l10 = i10 < 0 ? null : pj(o10.slice(i10 + 1));
    if (a10 in t10) {
      let e12 = t10[a10];
      pp(e12) || (e12 = t10[a10] = [e12]), e12.push(l10);
    } else
      t10[a10] = l10;
  }
  return t10;
}
function p9(e10) {
  let t10 = "";
  for (let r3 in e10) {
    let o10 = e10[r3];
    if (r3 = pP(r3).replace(pg, "%3D"), null == o10) {
      void 0 !== o10 && (t10 += (t10.length ? "&" : "") + r3);
      continue;
    }
    (pp(o10) ? o10.map((e11) => e11 && pP(e11)) : [o10 && pP(o10)]).forEach((e11) => {
      void 0 !== e11 && (t10 += (t10.length ? "&" : "") + r3, null != e11 && (t10 += "=" + e11));
    });
  }
  return t10;
}
let p7 = Symbol(""), he = Symbol(""), ht = Symbol(""), hr = Symbol(""), hn = Symbol("");
function ho() {
  let e10 = [];
  return { add: function(t10) {
    return e10.push(t10), () => {
      let r3 = e10.indexOf(t10);
      r3 > -1 && e10.splice(r3, 1);
    };
  }, list: () => e10.slice(), reset: function() {
    e10 = [];
  } };
}
function hi(e10, t10, r3, o10, i10) {
  let a10 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : (e11) => e11(), l10 = o10 && (o10.enterCallbacks[i10] = o10.enterCallbacks[i10] || []);
  return () => new Promise((s10, u10) => {
    let c10 = (e11) => {
      false === e11 ? u10(pZ(4, { from: r3, to: t10 })) : e11 instanceof Error ? u10(e11) : "string" == typeof e11 || e11 && "object" == typeof e11 ? u10(pZ(2, { from: t10, to: e11 })) : (l10 && o10.enterCallbacks[i10] === l10 && "function" == typeof e11 && l10.push(e11), s10());
    }, f10 = Promise.resolve(a10(() => e10.call(o10 && o10.instances[i10], t10, r3, c10)));
    e10.length < 3 && (f10 = f10.then(c10)), f10.catch((e11) => u10(e11));
  });
}
function ha(e10, t10, r3, o10) {
  let i10 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : (e11) => e11(), a10 = [];
  for (let l10 of e10)
    for (let e11 in l10.components) {
      let s10 = l10.components[e11];
      if ("beforeRouteEnter" === t10 || l10.instances[e11]) {
        if ("object" == typeof s10 || "displayName" in s10 || "props" in s10 || "__vccOpts" in s10) {
          let u10 = (s10.__vccOpts || s10)[t10];
          u10 && a10.push(hi(u10, r3, o10, l10, e11, i10));
        } else {
          let u10 = s10();
          a10.push(() => u10.then((a11) => {
            if (!a11)
              return Promise.reject(Error(`Couldn't resolve component "${e11}" at "${l10.path}"`));
            let s11 = a11.__esModule || "Module" === a11[Symbol.toStringTag] ? a11.default : a11;
            l10.components[e11] = s11;
            let u11 = (s11.__vccOpts || s11)[t10];
            return u11 && hi(u11, r3, o10, l10, e11, i10)();
          }));
        }
      }
    }
  return a10;
}
function hl(e10) {
  let t10 = fY(ht), r3 = fY(hr), o10 = dV(() => {
    let r10 = ck(e10.to);
    return t10.resolve(r10);
  }), i10 = dV(() => {
    let { matched: e11 } = o10.value, { length: t11 } = e11, i11 = e11[t11 - 1], a11 = r3.matched;
    if (!i11 || !a11.length)
      return -1;
    let l11 = a11.findIndex(pD.bind(null, i11));
    if (l11 > -1)
      return l11;
    let s10 = hu(e11[t11 - 2]);
    return t11 > 1 && hu(i11) === s10 && a11[a11.length - 1].path !== s10 ? a11.findIndex(pD.bind(null, e11[t11 - 2])) : l11;
  }), a10 = dV(() => i10.value > -1 && function(e11, t11) {
    for (let r10 in t11) {
      let o11 = t11[r10], i11 = e11[r10];
      if ("string" == typeof o11) {
        if (o11 !== i11)
          return false;
      } else if (!pp(i11) || i11.length !== o11.length || o11.some((e12, t12) => e12 !== i11[t12]))
        return false;
    }
    return true;
  }(r3.params, o10.value.params)), l10 = dV(() => i10.value > -1 && i10.value === r3.matched.length - 1 && pL(r3.params, o10.value.params));
  return { route: o10, href: dV(() => o10.value.href), isActive: a10, isExactActive: l10, navigate: function() {
    let r10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return !function(e11) {
      if (!e11.metaKey && !e11.altKey && !e11.ctrlKey && !e11.shiftKey && !e11.defaultPrevented && (void 0 === e11.button || 0 === e11.button)) {
        if (e11.currentTarget && e11.currentTarget.getAttribute) {
          let t11 = e11.currentTarget.getAttribute("target");
          if (/\b_blank\b/i.test(t11))
            return;
        }
        return e11.preventDefault && e11.preventDefault(), true;
      }
    }(r10) ? Promise.resolve() : t10[ck(e10.replace) ? "replace" : "push"](ck(e10.to)).catch(pd);
  } };
}
let hs = /* @__PURE__ */ ff({ name: "RouterLink", compatConfig: { MODE: 3 }, props: { to: { type: [String, Object], required: true }, replace: Boolean, activeClass: String, exactActiveClass: String, custom: Boolean, ariaCurrentValue: { type: String, default: "page" } }, useLink: hl, setup(e10, t10) {
  let { slots: r3 } = t10, o10 = ci(hl(e10)), { options: i10 } = fY(ht), a10 = dV(() => ({ [hc(e10.activeClass, i10.linkActiveClass, "router-link-active")]: o10.isActive, [hc(e10.exactActiveClass, i10.linkExactActiveClass, "router-link-exact-active")]: o10.isExactActive }));
  return () => {
    let t11 = r3.default && r3.default(o10);
    return e10.custom ? t11 : dz("a", { "aria-current": o10.isExactActive ? e10.ariaCurrentValue : null, href: o10.href, onClick: o10.navigate, class: a10.value }, t11);
  };
} });
function hu(e10) {
  return e10 ? e10.aliasOf ? e10.aliasOf.path : e10.path : "";
}
let hc = (e10, t10, r3) => null != e10 ? e10 : null != t10 ? t10 : r3, hf = /* @__PURE__ */ ff({ name: "RouterView", inheritAttrs: false, props: { name: { type: String, default: "default" }, route: Object }, compatConfig: { MODE: 3 }, setup(e10, t10) {
  let { attrs: r3, slots: o10 } = t10, i10 = fY(hn), a10 = dV(() => e10.route || i10.value), l10 = fY(he, 0), s10 = dV(() => {
    let e11, t11 = ck(l10), { matched: r10 } = a10.value;
    for (; (e11 = r10[t11]) && !e11.components; )
      t11++;
    return t11;
  }), u10 = dV(() => a10.value.matched[s10.value]);
  fG(he, dV(() => s10.value + 1)), fG(p7, u10), fG(hn, a10);
  let c10 = c_();
  return c6(() => [c10.value, u10.value, e10.name], (e11, t11) => {
    let [r10, o11, i11] = e11, [a11, l11, s11] = t11;
    o11 && (o11.instances[i11] = r10, l11 && l11 !== o11 && r10 && r10 === a11 && (o11.leaveGuards.size || (o11.leaveGuards = l11.leaveGuards), o11.updateGuards.size || (o11.updateGuards = l11.updateGuards))), !r10 || !o11 || l11 && pD(o11, l11) && a11 || (o11.enterCallbacks[i11] || []).forEach((e12) => e12(r10));
  }, { flush: "post" }), () => {
    let t11 = a10.value, i11 = e10.name, l11 = u10.value, s11 = l11 && l11.components[i11];
    if (!s11)
      return hd(o10.default, { Component: s11, route: t11 });
    let f10 = l11.props[i11], d10 = dz(s11, pc({}, f10 ? true === f10 ? t11.params : "function" == typeof f10 ? f10(t11) : f10 : null, r3, { onVnodeUnmounted: (e11) => {
      e11.component.isUnmounted && (l11.instances[i11] = null);
    }, ref: c10 }));
    return hd(o10.default, { Component: d10, route: t11 }) || d10;
  };
} });
function hd(e10, t10) {
  if (!e10)
    return null;
  let r3 = e10(t10);
  return 1 === r3.length ? r3[0] : r3;
}
var hp = function(e10, t10) {
  return (hp = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e11, t11) {
    e11.__proto__ = t11;
  } || function(e11, t11) {
    for (var r3 in t11)
      Object.prototype.hasOwnProperty.call(t11, r3) && (e11[r3] = t11[r3]);
  })(e10, t10);
};
function hh(e10, t10) {
  if ("function" != typeof t10 && null !== t10)
    throw TypeError("Class extends value " + String(t10) + " is not a constructor or null");
  function r3() {
    this.constructor = e10;
  }
  hp(e10, t10), e10.prototype = null === t10 ? Object.create(t10) : (r3.prototype = t10.prototype, new r3());
}
function hm(e10, t10) {
  var r3, o10, i10, a10, l10 = { label: 0, sent: function() {
    if (1 & i10[0])
      throw i10[1];
    return i10[1];
  }, trys: [], ops: [] };
  return a10 = { next: s10(0), throw: s10(1), return: s10(2) }, "function" == typeof Symbol && (a10[Symbol.iterator] = function() {
    return this;
  }), a10;
  function s10(s11) {
    return function(u10) {
      return function(s12) {
        if (r3)
          throw TypeError("Generator is already executing.");
        for (; a10 && (a10 = 0, s12[0] && (l10 = 0)), l10; )
          try {
            if (r3 = 1, o10 && (i10 = 2 & s12[0] ? o10.return : s12[0] ? o10.throw || ((i10 = o10.return) && i10.call(o10), 0) : o10.next) && !(i10 = i10.call(o10, s12[1])).done)
              return i10;
            switch (o10 = 0, i10 && (s12 = [2 & s12[0], i10.value]), s12[0]) {
              case 0:
              case 1:
                i10 = s12;
                break;
              case 4:
                return l10.label++, { value: s12[1], done: false };
              case 5:
                l10.label++, o10 = s12[1], s12 = [0];
                continue;
              case 7:
                s12 = l10.ops.pop(), l10.trys.pop();
                continue;
              default:
                if (!(i10 = (i10 = l10.trys).length > 0 && i10[i10.length - 1]) && (6 === s12[0] || 2 === s12[0])) {
                  l10 = 0;
                  continue;
                }
                if (3 === s12[0] && (!i10 || s12[1] > i10[0] && s12[1] < i10[3])) {
                  l10.label = s12[1];
                  break;
                }
                if (6 === s12[0] && l10.label < i10[1]) {
                  l10.label = i10[1], i10 = s12;
                  break;
                }
                if (i10 && l10.label < i10[2]) {
                  l10.label = i10[2], l10.ops.push(s12);
                  break;
                }
                i10[2] && l10.ops.pop(), l10.trys.pop();
                continue;
            }
            s12 = t10.call(e10, l10);
          } catch (e11) {
            s12 = [6, e11], o10 = 0;
          } finally {
            r3 = i10 = 0;
          }
        if (5 & s12[0])
          throw s12[1];
        return { value: s12[0] ? s12[1] : void 0, done: true };
      }([s11, u10]);
    };
  }
}
function hv(e10) {
  var t10 = "function" == typeof Symbol && Symbol.iterator, r3 = t10 && e10[t10], o10 = 0;
  if (r3)
    return r3.call(e10);
  if (e10 && "number" == typeof e10.length)
    return { next: function() {
      return e10 && o10 >= e10.length && (e10 = void 0), { value: e10 && e10[o10++], done: !e10 };
    } };
  throw TypeError(t10 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function hg(e10, t10) {
  var r3 = "function" == typeof Symbol && e10[Symbol.iterator];
  if (!r3)
    return e10;
  var o10, i10, a10 = r3.call(e10), l10 = [];
  try {
    for (; (void 0 === t10 || t10-- > 0) && !(o10 = a10.next()).done; )
      l10.push(o10.value);
  } catch (e11) {
    i10 = { error: e11 };
  } finally {
    try {
      o10 && !o10.done && (r3 = a10.return) && r3.call(a10);
    } finally {
      if (i10)
        throw i10.error;
    }
  }
  return l10;
}
function hy(e10, t10, r3) {
  if (r3 || 2 == arguments.length)
    for (var o10, i10 = 0, a10 = t10.length; i10 < a10; i10++)
      !o10 && i10 in t10 || (o10 || (o10 = Array.prototype.slice.call(t10, 0, i10)), o10[i10] = t10[i10]);
  return e10.concat(o10 || Array.prototype.slice.call(t10));
}
function hb(e10) {
  return this instanceof hb ? (this.v = e10, this) : new hb(e10);
}
function h_(e10) {
  return "function" == typeof e10;
}
function hw(e10) {
  var t10 = e10(function(e11) {
    Error.call(e11), e11.stack = Error().stack;
  });
  return t10.prototype = Object.create(Error.prototype), t10.prototype.constructor = t10, t10;
}
"function" == typeof SuppressedError && SuppressedError;
var hx = hw(function(e10) {
  return function(t10) {
    e10(this), this.message = t10 ? t10.length + " errors occurred during unsubscription:\n" + t10.map(function(e11, t11) {
      return t11 + 1 + ") " + e11.toString();
    }).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t10;
  };
});
function hk(e10, t10) {
  if (e10) {
    var r3 = e10.indexOf(t10);
    0 <= r3 && e10.splice(r3, 1);
  }
}
var hS = function() {
  var e10;
  function t10(e11) {
    this.initialTeardown = e11, this.closed = false, this._parentage = null, this._finalizers = null;
  }
  return t10.prototype.unsubscribe = function() {
    if (!this.closed) {
      this.closed = true;
      var e11, t11, r3, o10, i10, a10 = this._parentage;
      if (a10) {
        if (this._parentage = null, Array.isArray(a10))
          try {
            for (var l10 = hv(a10), s10 = l10.next(); !s10.done; s10 = l10.next())
              s10.value.remove(this);
          } catch (t12) {
            e11 = { error: t12 };
          } finally {
            try {
              s10 && !s10.done && (t11 = l10.return) && t11.call(l10);
            } finally {
              if (e11)
                throw e11.error;
            }
          }
        else
          a10.remove(this);
      }
      var u10 = this.initialTeardown;
      if (h_(u10))
        try {
          u10();
        } catch (e12) {
          i10 = e12 instanceof hx ? e12.errors : [e12];
        }
      var c10 = this._finalizers;
      if (c10) {
        this._finalizers = null;
        try {
          for (var f10 = hv(c10), d10 = f10.next(); !d10.done; d10 = f10.next()) {
            var p10 = d10.value;
            try {
              hE(p10);
            } catch (e12) {
              i10 = null != i10 ? i10 : [], e12 instanceof hx ? i10 = hy(hy([], hg(i10)), hg(e12.errors)) : i10.push(e12);
            }
          }
        } catch (e12) {
          r3 = { error: e12 };
        } finally {
          try {
            d10 && !d10.done && (o10 = f10.return) && o10.call(f10);
          } finally {
            if (r3)
              throw r3.error;
          }
        }
      }
      if (i10)
        throw new hx(i10);
    }
  }, t10.prototype.add = function(e11) {
    var r3;
    if (e11 && e11 !== this) {
      if (this.closed)
        hE(e11);
      else {
        if (e11 instanceof t10) {
          if (e11.closed || e11._hasParent(this))
            return;
          e11._addParent(this);
        }
        (this._finalizers = null !== (r3 = this._finalizers) && void 0 !== r3 ? r3 : []).push(e11);
      }
    }
  }, t10.prototype._hasParent = function(e11) {
    var t11 = this._parentage;
    return t11 === e11 || Array.isArray(t11) && t11.includes(e11);
  }, t10.prototype._addParent = function(e11) {
    var t11 = this._parentage;
    this._parentage = Array.isArray(t11) ? (t11.push(e11), t11) : t11 ? [t11, e11] : e11;
  }, t10.prototype._removeParent = function(e11) {
    var t11 = this._parentage;
    t11 === e11 ? this._parentage = null : Array.isArray(t11) && hk(t11, e11);
  }, t10.prototype.remove = function(e11) {
    var r3 = this._finalizers;
    r3 && hk(r3, e11), e11 instanceof t10 && e11._removeParent(this);
  }, t10.EMPTY = ((e10 = new t10()).closed = true, e10), t10;
}(), hO = hS.EMPTY;
function hC(e10) {
  return e10 instanceof hS || e10 && "closed" in e10 && h_(e10.remove) && h_(e10.add) && h_(e10.unsubscribe);
}
function hE(e10) {
  h_(e10) ? e10() : e10.unsubscribe();
}
var hA = { Promise: void 0, useDeprecatedNextContext: false }, hP = function(e10, t10) {
  for (var r3 = [], o10 = 2; o10 < arguments.length; o10++)
    r3[o10 - 2] = arguments[o10];
  return setTimeout.apply(void 0, hy([e10, t10], hg(r3)));
};
function hM(e10) {
  hP(function() {
    throw e10;
  });
}
function hj() {
}
var hR = function(e10) {
  function t10(t11) {
    var r3 = e10.call(this) || this;
    return r3.isStopped = false, t11 ? (r3.destination = t11, hC(t11) && t11.add(r3)) : r3.destination = hL, r3;
  }
  return hh(t10, e10), t10.create = function(e11, t11, r3) {
    return new hD(e11, t11, r3);
  }, t10.prototype.next = function(e11) {
    this.isStopped || this._next(e11);
  }, t10.prototype.error = function(e11) {
    this.isStopped || (this.isStopped = true, this._error(e11));
  }, t10.prototype.complete = function() {
    this.isStopped || (this.isStopped = true, this._complete());
  }, t10.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = true, e10.prototype.unsubscribe.call(this), this.destination = null);
  }, t10.prototype._next = function(e11) {
    this.destination.next(e11);
  }, t10.prototype._error = function(e11) {
    try {
      this.destination.error(e11);
    } finally {
      this.unsubscribe();
    }
  }, t10.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, t10;
}(hS), hT = Function.prototype.bind;
function hI(e10, t10) {
  return hT.call(e10, t10);
}
var h$ = function() {
  function e10(e11) {
    this.partialObserver = e11;
  }
  return e10.prototype.next = function(e11) {
    var t10 = this.partialObserver;
    if (t10.next)
      try {
        t10.next(e11);
      } catch (e12) {
        hM(e12);
      }
  }, e10.prototype.error = function(e11) {
    var t10 = this.partialObserver;
    if (t10.error)
      try {
        t10.error(e11);
      } catch (e12) {
        hM(e12);
      }
    else
      hM(e11);
  }, e10.prototype.complete = function() {
    var e11 = this.partialObserver;
    if (e11.complete)
      try {
        e11.complete();
      } catch (e12) {
        hM(e12);
      }
  }, e10;
}(), hD = function(e10) {
  function t10(t11, r3, o10) {
    var i10, a10, l10 = e10.call(this) || this;
    return h_(t11) || !t11 ? i10 = { next: null != t11 ? t11 : void 0, error: null != r3 ? r3 : void 0, complete: null != o10 ? o10 : void 0 } : l10 && hA.useDeprecatedNextContext ? ((a10 = Object.create(t11)).unsubscribe = function() {
      return l10.unsubscribe();
    }, i10 = { next: t11.next && hI(t11.next, a10), error: t11.error && hI(t11.error, a10), complete: t11.complete && hI(t11.complete, a10) }) : i10 = t11, l10.destination = new h$(i10), l10;
  }
  return hh(t10, e10), t10;
}(hR), hL = { closed: true, next: hj, error: function(e10) {
  throw e10;
}, complete: hj }, hF = "function" == typeof Symbol && Symbol.observable || "@@observable";
function hV(e10) {
  return e10;
}
function hz(e10) {
  return 0 === e10.length ? hV : 1 === e10.length ? e10[0] : function(t10) {
    return e10.reduce(function(e11, t11) {
      return t11(e11);
    }, t10);
  };
}
var hN = function() {
  function e10(e11) {
    e11 && (this._subscribe = e11);
  }
  return e10.prototype.lift = function(t10) {
    var r3 = new e10();
    return r3.source = this, r3.operator = t10, r3;
  }, e10.prototype.subscribe = function(e11, t10, r3) {
    var o10, i10, a10, l10 = (o10 = e11) && o10 instanceof hR || o10 && h_(o10.next) && h_(o10.error) && h_(o10.complete) && hC(o10) ? e11 : new hD(e11, t10, r3);
    return i10 = this.operator, a10 = this.source, l10.add(i10 ? i10.call(l10, a10) : a10 ? this._subscribe(l10) : this._trySubscribe(l10)), l10;
  }, e10.prototype._trySubscribe = function(e11) {
    try {
      return this._subscribe(e11);
    } catch (t10) {
      e11.error(t10);
    }
  }, e10.prototype.forEach = function(e11, t10) {
    var r3 = this;
    return new (t10 = hB(t10))(function(t11, o10) {
      var i10 = new hD({ next: function(t12) {
        try {
          e11(t12);
        } catch (e12) {
          o10(e12), i10.unsubscribe();
        }
      }, error: o10, complete: t11 });
      r3.subscribe(i10);
    });
  }, e10.prototype._subscribe = function(e11) {
    var t10;
    return null === (t10 = this.source) || void 0 === t10 ? void 0 : t10.subscribe(e11);
  }, e10.prototype[hF] = function() {
    return this;
  }, e10.prototype.pipe = function() {
    for (var e11 = [], t10 = 0; t10 < arguments.length; t10++)
      e11[t10] = arguments[t10];
    return hz(e11)(this);
  }, e10.prototype.toPromise = function(e11) {
    var t10 = this;
    return new (e11 = hB(e11))(function(e12, r3) {
      var o10;
      t10.subscribe(function(e13) {
        return o10 = e13;
      }, function(e13) {
        return r3(e13);
      }, function() {
        return e12(o10);
      });
    });
  }, e10.create = function(t10) {
    return new e10(t10);
  }, e10;
}();
function hB(e10) {
  var t10;
  return null !== (t10 = null != e10 ? e10 : hA.Promise) && void 0 !== t10 ? t10 : Promise;
}
function hU(e10) {
  return function(t10) {
    if (h_(null == t10 ? void 0 : t10.lift))
      return t10.lift(function(t11) {
        try {
          return e10(t11, this);
        } catch (e11) {
          this.error(e11);
        }
      });
    throw TypeError("Unable to lift unknown Observable type");
  };
}
function hH(e10, t10, r3, o10, i10) {
  return new hW(e10, t10, r3, o10, i10);
}
var hW = function(e10) {
  function t10(t11, r3, o10, i10, a10, l10) {
    var s10 = e10.call(this, t11) || this;
    return s10.onFinalize = a10, s10.shouldUnsubscribe = l10, s10._next = r3 ? function(e11) {
      try {
        r3(e11);
      } catch (e12) {
        t11.error(e12);
      }
    } : e10.prototype._next, s10._error = i10 ? function(e11) {
      try {
        i10(e11);
      } catch (e12) {
        t11.error(e12);
      } finally {
        this.unsubscribe();
      }
    } : e10.prototype._error, s10._complete = o10 ? function() {
      try {
        o10();
      } catch (e11) {
        t11.error(e11);
      } finally {
        this.unsubscribe();
      }
    } : e10.prototype._complete, s10;
  }
  return hh(t10, e10), t10.prototype.unsubscribe = function() {
    var t11;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var r3 = this.closed;
      e10.prototype.unsubscribe.call(this), r3 || null === (t11 = this.onFinalize) || void 0 === t11 || t11.call(this);
    }
  }, t10;
}(hR), hq = hw(function(e10) {
  return function() {
    e10(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), hG = function(e10) {
  function t10() {
    var t11 = e10.call(this) || this;
    return t11.closed = false, t11.currentObservers = null, t11.observers = [], t11.isStopped = false, t11.hasError = false, t11.thrownError = null, t11;
  }
  return hh(t10, e10), t10.prototype.lift = function(e11) {
    var t11 = new hY(this, this);
    return t11.operator = e11, t11;
  }, t10.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new hq();
  }, t10.prototype.next = function(e11) {
    var t11 = this;
    (function() {
      var r3, o10;
      if (t11._throwIfClosed(), !t11.isStopped) {
        t11.currentObservers || (t11.currentObservers = Array.from(t11.observers));
        try {
          for (var i10 = hv(t11.currentObservers), a10 = i10.next(); !a10.done; a10 = i10.next())
            a10.value.next(e11);
        } catch (e12) {
          r3 = { error: e12 };
        } finally {
          try {
            a10 && !a10.done && (o10 = i10.return) && o10.call(i10);
          } finally {
            if (r3)
              throw r3.error;
          }
        }
      }
    })();
  }, t10.prototype.error = function(e11) {
    var t11 = this;
    (function() {
      if (t11._throwIfClosed(), !t11.isStopped) {
        t11.hasError = t11.isStopped = true, t11.thrownError = e11;
        for (var r3 = t11.observers; r3.length; )
          r3.shift().error(e11);
      }
    })();
  }, t10.prototype.complete = function() {
    var e11 = this;
    (function() {
      if (e11._throwIfClosed(), !e11.isStopped) {
        e11.isStopped = true;
        for (var t11 = e11.observers; t11.length; )
          t11.shift().complete();
      }
    })();
  }, t10.prototype.unsubscribe = function() {
    this.isStopped = this.closed = true, this.observers = this.currentObservers = null;
  }, Object.defineProperty(t10.prototype, "observed", { get: function() {
    var e11;
    return (null === (e11 = this.observers) || void 0 === e11 ? void 0 : e11.length) > 0;
  }, enumerable: false, configurable: true }), t10.prototype._trySubscribe = function(t11) {
    return this._throwIfClosed(), e10.prototype._trySubscribe.call(this, t11);
  }, t10.prototype._subscribe = function(e11) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(e11), this._innerSubscribe(e11);
  }, t10.prototype._innerSubscribe = function(e11) {
    var t11 = this, r3 = this.hasError, o10 = this.isStopped, i10 = this.observers;
    return r3 || o10 ? hO : (this.currentObservers = null, i10.push(e11), new hS(function() {
      t11.currentObservers = null, hk(i10, e11);
    }));
  }, t10.prototype._checkFinalizedStatuses = function(e11) {
    var t11 = this.hasError, r3 = this.thrownError, o10 = this.isStopped;
    t11 ? e11.error(r3) : o10 && e11.complete();
  }, t10.prototype.asObservable = function() {
    var e11 = new hN();
    return e11.source = this, e11;
  }, t10.create = function(e11, t11) {
    return new hY(e11, t11);
  }, t10;
}(hN), hY = function(e10) {
  function t10(t11, r3) {
    var o10 = e10.call(this) || this;
    return o10.destination = t11, o10.source = r3, o10;
  }
  return hh(t10, e10), t10.prototype.next = function(e11) {
    var t11, r3;
    null === (r3 = null === (t11 = this.destination) || void 0 === t11 ? void 0 : t11.next) || void 0 === r3 || r3.call(t11, e11);
  }, t10.prototype.error = function(e11) {
    var t11, r3;
    null === (r3 = null === (t11 = this.destination) || void 0 === t11 ? void 0 : t11.error) || void 0 === r3 || r3.call(t11, e11);
  }, t10.prototype.complete = function() {
    var e11, t11;
    null === (t11 = null === (e11 = this.destination) || void 0 === e11 ? void 0 : e11.complete) || void 0 === t11 || t11.call(e11);
  }, t10.prototype._subscribe = function(e11) {
    var t11, r3;
    return null !== (r3 = null === (t11 = this.source) || void 0 === t11 ? void 0 : t11.subscribe(e11)) && void 0 !== r3 ? r3 : hO;
  }, t10;
}(hG), hK = function(e10) {
  function t10(t11) {
    var r3 = e10.call(this) || this;
    return r3._value = t11, r3;
  }
  return hh(t10, e10), Object.defineProperty(t10.prototype, "value", { get: function() {
    return this.getValue();
  }, enumerable: false, configurable: true }), t10.prototype._subscribe = function(t11) {
    var r3 = e10.prototype._subscribe.call(this, t11);
    return r3.closed || t11.next(this._value), r3;
  }, t10.prototype.getValue = function() {
    var e11 = this.hasError, t11 = this.thrownError, r3 = this._value;
    if (e11)
      throw t11;
    return this._throwIfClosed(), r3;
  }, t10.prototype.next = function(t11) {
    e10.prototype.next.call(this, this._value = t11);
  }, t10;
}(hG), hZ = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
function hX(e10) {
  return new hN(function(t10) {
    (function(e11, t11) {
      var r3, o10, i10, a10, l10, s10, u10, c10;
      return l10 = this, s10 = void 0, u10 = void 0, c10 = function() {
        var l11;
        return hm(this, function(s11) {
          switch (s11.label) {
            case 0:
              s11.trys.push([0, 5, 6, 11]), r3 = function(e12) {
                if (!Symbol.asyncIterator)
                  throw TypeError("Symbol.asyncIterator is not defined.");
                var t12, r10 = e12[Symbol.asyncIterator];
                return r10 ? r10.call(e12) : (e12 = hv(e12), t12 = {}, o11("next"), o11("throw"), o11("return"), t12[Symbol.asyncIterator] = function() {
                  return this;
                }, t12);
                function o11(r11) {
                  t12[r11] = e12[r11] && function(t13) {
                    return new Promise(function(o12, i11) {
                      (function(e13, t14, r12, o13) {
                        Promise.resolve(o13).then(function(t15) {
                          e13({ value: t15, done: r12 });
                        }, t14);
                      })(o12, i11, (t13 = e12[r11](t13)).done, t13.value);
                    });
                  };
                }
              }(e11), s11.label = 1;
            case 1:
              return [4, r3.next()];
            case 2:
              if ((o10 = s11.sent()).done)
                return [3, 4];
              if (l11 = o10.value, t11.next(l11), t11.closed)
                return [2];
              s11.label = 3;
            case 3:
              return [3, 1];
            case 4:
              return [3, 11];
            case 5:
              return i10 = { error: s11.sent() }, [3, 11];
            case 6:
              if (s11.trys.push([6, , 9, 10]), !(o10 && !o10.done && (a10 = r3.return)))
                return [3, 8];
              return [4, a10.call(r3)];
            case 7:
              s11.sent(), s11.label = 8;
            case 8:
              return [3, 10];
            case 9:
              if (i10)
                throw i10.error;
              return [7];
            case 10:
              return [7];
            case 11:
              return t11.complete(), [2];
          }
        });
      }, new (u10 || (u10 = Promise))(function(e12, t12) {
        function r10(e13) {
          try {
            i11(c10.next(e13));
          } catch (e14) {
            t12(e14);
          }
        }
        function o11(e13) {
          try {
            i11(c10.throw(e13));
          } catch (e14) {
            t12(e14);
          }
        }
        function i11(t13) {
          var i12;
          t13.done ? e12(t13.value) : ((i12 = t13.value) instanceof u10 ? i12 : new u10(function(e13) {
            e13(i12);
          })).then(r10, o11);
        }
        i11((c10 = c10.apply(l10, s10 || [])).next());
      });
    })(e10, t10).catch(function(e11) {
      return t10.error(e11);
    });
  });
}
function hJ(e10, t10, r3) {
  var o10 = h_(e10) || t10 || r3 ? { next: e10, error: t10, complete: r3 } : e10;
  return o10 ? hU(function(e11, t11) {
    null === (r10 = o10.subscribe) || void 0 === r10 || r10.call(o10);
    var r10, i10 = true;
    e11.subscribe(hH(t11, function(e12) {
      var r11;
      null === (r11 = o10.next) || void 0 === r11 || r11.call(o10, e12), t11.next(e12);
    }, function() {
      var e12;
      i10 = false, null === (e12 = o10.complete) || void 0 === e12 || e12.call(o10), t11.complete();
    }, function(e12) {
      var r11;
      i10 = false, null === (r11 = o10.error) || void 0 === r11 || r11.call(o10, e12), t11.error(e12);
    }, function() {
      var e12, t12;
      i10 && (null === (e12 = o10.unsubscribe) || void 0 === e12 || e12.call(o10)), null === (t12 = o10.finalize) || void 0 === t12 || t12.call(o10);
    }));
  }) : hV;
}
var hQ = Symbol.for("immer-nothing"), h0 = Symbol.for("immer-draftable"), h1 = Symbol.for("immer-state");
function h2(e10) {
  for (var t10 = arguments.length, r3 = Array(t10 > 1 ? t10 - 1 : 0), o10 = 1; o10 < t10; o10++)
    r3[o10 - 1] = arguments[o10];
  throw Error(`[Immer] minified error nr: ${e10}. Full error at: https://bit.ly/3cXEKWf`);
}
var h4 = Object.getPrototypeOf;
function h3(e10) {
  return !!e10 && !!e10[h1];
}
function h5(e10) {
  var t10;
  return !!e10 && (h8(e10) || Array.isArray(e10) || !!e10[h0] || !!(null === (t10 = e10.constructor) || void 0 === t10 ? void 0 : t10[h0]) || mr(e10) || mn(e10));
}
var h6 = Object.prototype.constructor.toString();
function h8(e10) {
  if (!e10 || "object" != typeof e10)
    return false;
  let t10 = h4(e10);
  if (null === t10)
    return true;
  let r3 = Object.hasOwnProperty.call(t10, "constructor") && t10.constructor;
  return r3 === Object || "function" == typeof r3 && Function.toString.call(r3) === h6;
}
function h9(e10, t10) {
  0 === h7(e10) ? Reflect.ownKeys(e10).forEach((r3) => {
    t10(r3, e10[r3], e10);
  }) : e10.forEach((r3, o10) => t10(o10, r3, e10));
}
function h7(e10) {
  let t10 = e10[h1];
  return t10 ? t10.type_ : Array.isArray(e10) ? 1 : mr(e10) ? 2 : mn(e10) ? 3 : 0;
}
function me(e10, t10) {
  return 2 === h7(e10) ? e10.has(t10) : Object.prototype.hasOwnProperty.call(e10, t10);
}
function mt(e10, t10, r3) {
  let o10 = h7(e10);
  2 === o10 ? e10.set(t10, r3) : 3 === o10 ? e10.add(r3) : e10[t10] = r3;
}
function mr(e10) {
  return e10 instanceof Map;
}
function mn(e10) {
  return e10 instanceof Set;
}
function mo(e10) {
  return e10.copy_ || e10.base_;
}
function mi(e10, t10) {
  if (mr(e10))
    return new Map(e10);
  if (mn(e10))
    return new Set(e10);
  if (Array.isArray(e10))
    return Array.prototype.slice.call(e10);
  if (!t10 && h8(e10))
    return h4(e10) ? { ...e10 } : Object.assign(/* @__PURE__ */ Object.create(null), e10);
  let r3 = Object.getOwnPropertyDescriptors(e10);
  delete r3[h1];
  let o10 = Reflect.ownKeys(r3);
  for (let t11 = 0; t11 < o10.length; t11++) {
    let i10 = o10[t11], a10 = r3[i10];
    false === a10.writable && (a10.writable = true, a10.configurable = true), (a10.get || a10.set) && (r3[i10] = { configurable: true, writable: true, enumerable: a10.enumerable, value: e10[i10] });
  }
  return Object.create(h4(e10), r3);
}
function ma(e10) {
  let t10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return ms(e10) || h3(e10) || !h5(e10) || (h7(e10) > 1 && (e10.set = e10.add = e10.clear = e10.delete = ml), Object.freeze(e10), t10 && Object.entries(e10).forEach((e11) => {
    let [t11, r3] = e11;
    return ma(r3, true);
  })), e10;
}
function ml() {
  h2(2);
}
function ms(e10) {
  return Object.isFrozen(e10);
}
var mu = {};
function mc(e10) {
  let t10 = mu[e10];
  return t10 || h2(0, e10), t10;
}
function mf(e10, t10) {
  t10 && (mc("Patches"), e10.patches_ = [], e10.inversePatches_ = [], e10.patchListener_ = t10);
}
function md(e10) {
  mp(e10), e10.drafts_.forEach(mm), e10.drafts_ = null;
}
function mp(e10) {
  e10 === Y && (Y = e10.parent_);
}
function mh(e10) {
  return Y = { drafts_: [], parent_: Y, immer_: e10, canAutoFreeze_: true, unfinalizedDrafts_: 0 };
}
function mm(e10) {
  let t10 = e10[h1];
  0 === t10.type_ || 1 === t10.type_ ? t10.revoke_() : t10.revoked_ = true;
}
function mv(e10, t10) {
  t10.unfinalizedDrafts_ = t10.drafts_.length;
  let r3 = t10.drafts_[0];
  return void 0 !== e10 && e10 !== r3 ? (r3[h1].modified_ && (md(t10), h2(4)), h5(e10) && (e10 = mg(t10, e10), t10.parent_ || mb(t10, e10)), t10.patches_ && mc("Patches").generateReplacementPatches_(r3[h1].base_, e10, t10.patches_, t10.inversePatches_)) : e10 = mg(t10, r3, []), md(t10), t10.patches_ && t10.patchListener_(t10.patches_, t10.inversePatches_), e10 !== hQ ? e10 : void 0;
}
function mg(e10, t10, r3) {
  if (ms(t10))
    return t10;
  let o10 = t10[h1];
  if (!o10)
    return h9(t10, (i10, a10) => my(e10, o10, t10, i10, a10, r3)), t10;
  if (o10.scope_ !== e10)
    return t10;
  if (!o10.modified_)
    return mb(e10, o10.base_, true), o10.base_;
  if (!o10.finalized_) {
    o10.finalized_ = true, o10.scope_.unfinalizedDrafts_--;
    let t11 = o10.copy_, i10 = t11, a10 = false;
    3 === o10.type_ && (i10 = new Set(t11), t11.clear(), a10 = true), h9(i10, (i11, l10) => my(e10, o10, t11, i11, l10, r3, a10)), mb(e10, t11, false), r3 && e10.patches_ && mc("Patches").generatePatches_(o10, r3, e10.patches_, e10.inversePatches_);
  }
  return o10.copy_;
}
function my(e10, t10, r3, o10, i10, a10, l10) {
  if (h3(i10)) {
    let l11 = mg(e10, i10, a10 && t10 && 3 !== t10.type_ && !me(t10.assigned_, o10) ? a10.concat(o10) : void 0);
    if (mt(r3, o10, l11), !h3(l11))
      return;
    e10.canAutoFreeze_ = false;
  } else
    l10 && r3.add(i10);
  if (h5(i10) && !ms(i10)) {
    if (!e10.immer_.autoFreeze_ && e10.unfinalizedDrafts_ < 1)
      return;
    mg(e10, i10), (!t10 || !t10.scope_.parent_) && "symbol" != typeof o10 && Object.prototype.propertyIsEnumerable.call(r3, o10) && mb(e10, i10);
  }
}
function mb(e10, t10) {
  let r3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  !e10.parent_ && e10.immer_.autoFreeze_ && e10.canAutoFreeze_ && ma(t10, r3);
}
var m_ = { get(e10, t10) {
  if (t10 === h1)
    return e10;
  let r3 = mo(e10);
  if (!me(r3, t10))
    return function(e11, t11, r10) {
      var o11;
      let i10 = mk(t11, r10);
      return i10 ? "value" in i10 ? i10.value : null === (o11 = i10.get) || void 0 === o11 ? void 0 : o11.call(e11.draft_) : void 0;
    }(e10, r3, t10);
  let o10 = r3[t10];
  return e10.finalized_ || !h5(o10) ? o10 : o10 === mx(e10.base_, t10) ? (mO(e10), e10.copy_[t10] = mC(o10, e10)) : o10;
}, has: (e10, t10) => t10 in mo(e10), ownKeys: (e10) => Reflect.ownKeys(mo(e10)), set(e10, t10, r3) {
  let o10 = mk(mo(e10), t10);
  if (null == o10 ? void 0 : o10.set)
    return o10.set.call(e10.draft_, r3), true;
  if (!e10.modified_) {
    let o11 = mx(mo(e10), t10), i10 = null == o11 ? void 0 : o11[h1];
    if (i10 && i10.base_ === r3)
      return e10.copy_[t10] = r3, e10.assigned_[t10] = false, true;
    if ((r3 === o11 ? 0 !== r3 || 1 / r3 == 1 / o11 : r3 != r3 && o11 != o11) && (void 0 !== r3 || me(e10.base_, t10)))
      return true;
    mO(e10), mS(e10);
  }
  return !!(e10.copy_[t10] === r3 && (void 0 !== r3 || t10 in e10.copy_) || Number.isNaN(r3) && Number.isNaN(e10.copy_[t10])) || (e10.copy_[t10] = r3, e10.assigned_[t10] = true, true);
}, deleteProperty: (e10, t10) => (void 0 !== mx(e10.base_, t10) || t10 in e10.base_ ? (e10.assigned_[t10] = false, mO(e10), mS(e10)) : delete e10.assigned_[t10], e10.copy_ && delete e10.copy_[t10], true), getOwnPropertyDescriptor(e10, t10) {
  let r3 = mo(e10), o10 = Reflect.getOwnPropertyDescriptor(r3, t10);
  return o10 ? { writable: true, configurable: 1 !== e10.type_ || "length" !== t10, enumerable: o10.enumerable, value: r3[t10] } : o10;
}, defineProperty() {
  h2(11);
}, getPrototypeOf: (e10) => h4(e10.base_), setPrototypeOf() {
  h2(12);
} }, mw = {};
function mx(e10, t10) {
  let r3 = e10[h1];
  return (r3 ? mo(r3) : e10)[t10];
}
function mk(e10, t10) {
  if (!(t10 in e10))
    return;
  let r3 = h4(e10);
  for (; r3; ) {
    let e11 = Object.getOwnPropertyDescriptor(r3, t10);
    if (e11)
      return e11;
    r3 = h4(r3);
  }
}
function mS(e10) {
  !e10.modified_ && (e10.modified_ = true, e10.parent_ && mS(e10.parent_));
}
function mO(e10) {
  e10.copy_ || (e10.copy_ = mi(e10.base_, e10.scope_.immer_.useStrictShallowCopy_));
}
function mC(e10, t10) {
  let r3 = mr(e10) ? mc("MapSet").proxyMap_(e10, t10) : mn(e10) ? mc("MapSet").proxySet_(e10, t10) : function(e11, t11) {
    let r10 = Array.isArray(e11), o10 = { type_: r10 ? 1 : 0, scope_: t11 ? t11.scope_ : Y, modified_: false, finalized_: false, assigned_: {}, parent_: t11, base_: e11, draft_: null, copy_: null, revoke_: null, isManual_: false }, i10 = o10, a10 = m_;
    r10 && (i10 = [o10], a10 = mw);
    let { revoke: l10, proxy: s10 } = Proxy.revocable(i10, a10);
    return o10.draft_ = s10, o10.revoke_ = l10, s10;
  }(e10, t10);
  return (t10 ? t10.scope_ : Y).drafts_.push(r3), r3;
}
h9(m_, (e10, t10) => {
  mw[e10] = function() {
    return arguments[0] = arguments[0][0], t10.apply(this, arguments);
  };
}), mw.deleteProperty = function(e10, t10) {
  return mw.set.call(this, e10, t10, void 0);
}, mw.set = function(e10, t10, r3) {
  return m_.set.call(this, e10[0], t10, r3, e10[0]);
};
var mE = new class {
  constructor(e10) {
    this.autoFreeze_ = true, this.useStrictShallowCopy_ = false, this.produce = (e11, t10, r3) => {
      let o10;
      if ("function" == typeof e11 && "function" != typeof t10) {
        let r10 = t10;
        t10 = e11;
        let o11 = this;
        return function() {
          let e12 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r10;
          for (var i10 = arguments.length, a10 = Array(i10 > 1 ? i10 - 1 : 0), l10 = 1; l10 < i10; l10++)
            a10[l10 - 1] = arguments[l10];
          return o11.produce(e12, (e13) => t10.call(this, e13, ...a10));
        };
      }
      if ("function" != typeof t10 && h2(6), void 0 !== r3 && "function" != typeof r3 && h2(7), h5(e11)) {
        let i10 = mh(this), a10 = mC(e11, void 0), l10 = true;
        try {
          o10 = t10(a10), l10 = false;
        } finally {
          l10 ? md(i10) : mp(i10);
        }
        return mf(i10, r3), mv(o10, i10);
      }
      if (e11 && "object" == typeof e11)
        h2(1, e11);
      else {
        if (void 0 === (o10 = t10(e11)) && (o10 = e11), o10 === hQ && (o10 = void 0), this.autoFreeze_ && ma(o10, true), r3) {
          let t11 = [], i10 = [];
          mc("Patches").generateReplacementPatches_(e11, o10, t11, i10), r3(t11, i10);
        }
        return o10;
      }
    }, this.produceWithPatches = (e11, t10) => {
      let r3, o10;
      if ("function" == typeof e11) {
        var i10 = this;
        return function(t11) {
          for (var r10 = arguments.length, o11 = Array(r10 > 1 ? r10 - 1 : 0), a10 = 1; a10 < r10; a10++)
            o11[a10 - 1] = arguments[a10];
          return i10.produceWithPatches(t11, (t12) => e11(t12, ...o11));
        };
      }
      return [this.produce(e11, t10, (e12, t11) => {
        r3 = e12, o10 = t11;
      }), r3, o10];
    }, "boolean" == typeof (null == e10 ? void 0 : e10.autoFreeze) && this.setAutoFreeze(e10.autoFreeze), "boolean" == typeof (null == e10 ? void 0 : e10.useStrictShallowCopy) && this.setUseStrictShallowCopy(e10.useStrictShallowCopy);
  }
  createDraft(e10) {
    var t10;
    h5(e10) || h2(8), h3(e10) && (h3(t10 = e10) || h2(10, t10), e10 = function e11(t11) {
      let r10;
      if (!h5(t11) || ms(t11))
        return t11;
      let o11 = t11[h1];
      if (o11) {
        if (!o11.modified_)
          return o11.base_;
        o11.finalized_ = true, r10 = mi(t11, o11.scope_.immer_.useStrictShallowCopy_);
      } else
        r10 = mi(t11, true);
      return h9(r10, (t12, o12) => {
        mt(r10, t12, e11(o12));
      }), o11 && (o11.finalized_ = false), r10;
    }(t10));
    let r3 = mh(this), o10 = mC(e10, void 0);
    return o10[h1].isManual_ = true, mp(r3), o10;
  }
  finishDraft(e10, t10) {
    let r3 = e10 && e10[h1];
    r3 && r3.isManual_ || h2(9);
    let { scope_: o10 } = r3;
    return mf(o10, t10), mv(void 0, o10);
  }
  setAutoFreeze(e10) {
    this.autoFreeze_ = e10;
  }
  setUseStrictShallowCopy(e10) {
    this.useStrictShallowCopy_ = e10;
  }
  applyPatches(e10, t10) {
    let r3;
    for (r3 = t10.length - 1; r3 >= 0; r3--) {
      let o11 = t10[r3];
      if (0 === o11.path.length && "replace" === o11.op) {
        e10 = o11.value;
        break;
      }
    }
    r3 > -1 && (t10 = t10.slice(r3 + 1));
    let o10 = mc("Patches").applyPatches_;
    return h3(e10) ? o10(e10, t10) : this.produce(e10, (e11) => o10(e11, t10));
  }
}(), mA = mE.produce;
mE.produceWithPatches.bind(mE), mE.setAutoFreeze.bind(mE), mE.setUseStrictShallowCopy.bind(mE), mE.applyPatches.bind(mE), mE.createDraft.bind(mE), mE.finishDraft.bind(mE);
let mP = (e10) => "function" == typeof e10, mM = (e10) => void 0 === e10, mj = (e10) => e10 === df, mR = (e10) => !!mj(e10) || "string" == typeof e10 || "object" == typeof e10 && !!e10.__isTeleport, mT = (e10) => !!e10 && "object" == typeof e10 && !!e10.__vInternal, mI = (e10) => mP(e10) ? e10 : Array.isArray(e10) ? () => e10 : mM(e10) ? e10 : () => e10, m$ = (e10, t10) => {
  let { children: r3, ...o10 } = e10;
  if (mT(r3))
    return [t10 ? { ...o10, key: t10 } : o10, r3];
  let i10 = {}, a10 = {}, l10 = false;
  for (let e11 in o10) {
    let t11 = o10[e11];
    if (e11.startsWith("$")) {
      a10[e11.slice(1)] = mI(t11), l10 = true;
      continue;
    }
    i10[e11] = t11;
  }
  let s10 = mI(r3);
  return s10 && (a10.default = s10, l10 = true), [t10 ? { ...i10, key: t10 } : i10, l10 ? a10 : void 0];
}, mD = (e10, t10, r3) => mL(e10, t10, r3), mL = (e10, t10, r3) => {
  let [o10, i10] = m$(t10, r3);
  if (mR(e10)) {
    var a10, l10;
    return dz(e10, o10, null !== (l10 = null == i10 ? void 0 : null === (a10 = i10.default) || void 0 === a10 ? void 0 : a10.call(i10)) && void 0 !== l10 ? l10 : mj(e10) ? [] : void 0);
  }
  return dz(e10, o10, i10);
};
var mF = function() {
}, mV = ek("Reflect", "construct"), mz = /^\s*(?:class|function)\b/, mN = eE(mz.exec), mB = !mz.test(mF), mU = function(e10) {
  if (!ea(e10))
    return false;
  try {
    return mV(mF, [], e10), true;
  } catch (e11) {
    return false;
  }
}, mH = function(e10) {
  if (!ea(e10))
    return false;
  switch (t1(e10)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return false;
  }
  try {
    return mB || !!mN(mz, t_(e10));
  } catch (e11) {
    return true;
  }
};
mH.sham = true;
var mW = !mV || es(function() {
  var e10;
  return mU(mU.call) || !mU(Object) || !mU(function() {
    e10 = true;
  }) || e10;
}) ? mH : mU, mq = {}, mG = tn("iterator"), mY = Array.prototype, mK = tn("iterator"), mZ = function(e10) {
  if (!eH(e10))
    return eW(e10, mK) || eW(e10, "@@iterator") || mq[t1(e10)];
}, mX = TypeError, mJ = function(e10, t10) {
  var r3 = arguments.length < 2 ? mZ(e10) : t10;
  if (eU(r3))
    return eb(ex(r3, e10));
  throw new mX(eN(e10) + " is not iterable");
}, mQ = function(e10, t10, r3) {
  var o10, i10;
  eb(e10);
  try {
    if (!(o10 = eW(e10, "return"))) {
      if ("throw" === t10)
        throw r3;
      return r3;
    }
    o10 = ex(o10, e10);
  } catch (e11) {
    i10 = true, o10 = e11;
  }
  if ("throw" === t10)
    throw r3;
  if (i10)
    throw o10;
  return eb(o10), r3;
}, m0 = TypeError, m1 = function(e10, t10) {
  this.stopped = e10, this.result = t10;
}, m2 = m1.prototype, m4 = function() {
  var e10 = eb(this), t10 = "";
  return e10.hasIndices && (t10 += "d"), e10.global && (t10 += "g"), e10.ignoreCase && (t10 += "i"), e10.multiline && (t10 += "m"), e10.dotAll && (t10 += "s"), e10.unicode && (t10 += "u"), e10.unicodeSets && (t10 += "v"), e10.sticky && (t10 += "y"), t10;
}, m3 = RegExp.prototype, m5 = function(e10) {
  var t10 = e10.flags;
  return void 0 === t10 && !("flags" in m3) && !e5(e10, "flags") && eA(m3, e10) ? ex(m4, e10) : t10;
}, m6 = Map.prototype, m8 = { Map, set: eE(m6.set), get: eE(m6.get), has: eE(m6.has), remove: eE(m6.delete), proto: m6 }, m9 = Set.prototype, m7 = { Set, add: eE(m9.add), has: eE(m9.has), remove: eE(m9.delete), proto: m9 }, ve = m7.Set, vt = m7.proto, vr = eE(vt.forEach), vn = (eE(vt.keys)(new ve()).next, "object" == typeof Deno && Deno && "object" == typeof Deno.version), vo = !vn && !rQ && "object" == typeof window && "object" == typeof document, vi = ef.structuredClone, va = !!vi && !es(function() {
  if (vn && eI > 92 || rQ && eI > 94 || vo && eI > 97)
    return false;
  var e10 = new ArrayBuffer(8), t10 = vi(e10, { transfer: [e10] });
  return 0 !== e10.byteLength || 8 !== t10.byteLength;
}), vl = ef.structuredClone, vs = ef.ArrayBuffer, vu = ef.MessageChannel, vc = false;
if (va)
  vc = function(e10) {
    vl(e10, { transfer: [e10] });
  };
else if (vs)
  try {
    !vu && (K = function(e10) {
      try {
        if (rQ)
          return Function('return require("' + e10 + '")')();
      } catch (e11) {
      }
    }("worker_threads")) && (vu = K.MessageChannel), vu && (Z = new vu(), X = new vs(2), J = function(e10) {
      Z.port1.postMessage(null, [e10]);
    }, 2 === X.byteLength && (J(X), 0 === X.byteLength && (vc = J)));
  } catch (e10) {
  }
var vf = vc, vd = function(e10, t10, r3) {
  var o10, i10, a10, l10, s10, u10, c10, f10 = r3 && r3.that, d10 = !!(r3 && r3.AS_ENTRIES), p10 = !!(r3 && r3.IS_RECORD), h10 = !!(r3 && r3.IS_ITERATOR), m10 = !!(r3 && r3.INTERRUPTED), g10 = a2(t10, f10), y10 = function(e11) {
    return o10 && mQ(o10, "normal", e11), new m1(true, e11);
  }, b10 = function(e11) {
    return d10 ? (eb(e11), m10 ? g10(e11[0], e11[1], y10) : g10(e11[0], e11[1])) : m10 ? g10(e11, y10) : g10(e11);
  };
  if (p10)
    o10 = e10.iterator;
  else if (h10)
    o10 = e10;
  else {
    if (!(i10 = mZ(e10)))
      throw new m0(eN(e10) + " is not iterable");
    if (void 0 !== i10 && (mq.Array === i10 || mY[mG] === i10)) {
      for (a10 = 0, l10 = rM(e10); l10 > a10; a10++)
        if ((s10 = b10(e10[a10])) && eA(m2, s10))
          return s10;
      return new m1(false);
    }
    o10 = mJ(e10, i10);
  }
  for (u10 = p10 ? e10.next : o10.next; !(c10 = ex(u10, o10)).done; ) {
    try {
      s10 = b10(c10.value);
    } catch (e11) {
      mQ(o10, "throw", e11);
    }
    if ("object" == typeof s10 && s10 && eA(m2, s10))
      return s10;
  }
  return new m1(false);
}, vp = function(e10, t10, r3) {
  eu ? el.f(e10, t10, tk(0, r3)) : e10[t10] = r3;
}, vh = ef.Object, vm = ef.Array, vv = ef.Date, vg = ef.Error, vy = ef.TypeError, vb = ef.PerformanceMark, v_ = ek("DOMException"), vw = m8.Map, vx = m8.has, vk = m8.get, vS = m8.set, vO = m7.Set, vC = m7.add, vE = m7.has, vA = ek("Object", "keys"), vP = eE([].push), vM = eE(true.valueOf), vj = eE(1 .valueOf), vR = eE("".valueOf), vT = eE(vv.prototype.getTime), vI = e7("structuredClone"), v$ = "DataCloneError", vD = "Transferring", vL = function(e10) {
  return !es(function() {
    var t10 = new ef.Set([7]), r3 = e10(t10), o10 = e10(vh(7));
    return r3 === t10 || !r3.has(7) || !ed(o10) || 7 != +o10;
  }) && e10;
}, vF = function(e10, t10) {
  return !es(function() {
    var r3 = new t10(), o10 = e10({ a: r3, b: r3 });
    return !(o10 && o10.a === o10.b && o10.a instanceof t10 && o10.a.stack === r3.stack);
  });
}, vV = ef.structuredClone, vz = !vF(vV, vg) || !vF(vV, v_) || !!es(function() {
  var e10 = vV(new ef.AggregateError([1], vI, { cause: 3 }));
  return "AggregateError" !== e10.name || 1 !== e10.errors[0] || e10.message !== vI || 3 !== e10.cause;
}), vN = !vV && vL(function(e10) {
  return new vb(vI, { detail: e10 }).detail;
}), vB = vL(vV) || vN, vU = function(e10) {
  throw new v_("Uncloneable type: " + e10, v$);
}, vH = function(e10, t10) {
  throw new v_((t10 || "Cloning") + " of " + e10 + " cannot be properly polyfilled in this engine", v$);
}, vW = function(e10, t10) {
  return vB || vH(t10), vB(e10);
}, vq = function() {
  var e10;
  try {
    e10 = new ef.DataTransfer();
  } catch (t10) {
    try {
      e10 = new ef.ClipboardEvent("").clipboardData;
    } catch (e11) {
    }
  }
  return e10 && e10.items && e10.files ? e10 : null;
}, vG = function(e10, t10, r3) {
  if (vx(t10, e10))
    return vk(t10, e10);
  if ("SharedArrayBuffer" === (r3 || t1(e10)))
    o10 = vB ? vB(e10) : e10;
  else {
    var o10, i10, a10, l10, s10, u10, c10 = ef.DataView;
    c10 || ea(e10.slice) || vH("ArrayBuffer");
    try {
      if (ea(e10.slice) && !e10.resizable)
        o10 = e10.slice(0);
      else
        for (u10 = 0, i10 = e10.byteLength, a10 = ("maxByteLength" in e10) ? { maxByteLength: e10.maxByteLength } : void 0, o10 = new ArrayBuffer(i10, a10), l10 = new c10(e10), s10 = new c10(o10); u10 < i10; u10++)
          s10.setUint8(u10, l10.getUint8(u10));
    } catch (e11) {
      throw new v_("ArrayBuffer is detached", v$);
    }
  }
  return vS(t10, e10, o10), o10;
}, vY = function(e10, t10, r3, o10, i10) {
  var a10 = ef[t10];
  return ed(a10) || vH(t10), new a10(vG(e10.buffer, i10), r3, o10);
}, vK = function(e10, t10) {
  if (eV(e10) && vU("Symbol"), !ed(e10))
    return e10;
  if (t10) {
    if (vx(t10, e10))
      return vk(t10, e10);
  } else
    t10 = new vw();
  var r3, o10, i10, a10, l10, s10, u10, c10, f10 = t1(e10);
  switch (f10) {
    case "Array":
      i10 = vm(rM(e10));
      break;
    case "Object":
      i10 = {};
      break;
    case "Map":
      i10 = new vw();
      break;
    case "Set":
      i10 = new vO();
      break;
    case "RegExp":
      i10 = new RegExp(e10.source, m5(e10));
      break;
    case "Error":
      switch (o10 = e10.name) {
        case "AggregateError":
          i10 = new (ek(o10))([]);
          break;
        case "EvalError":
        case "RangeError":
        case "ReferenceError":
        case "SuppressedError":
        case "SyntaxError":
        case "TypeError":
        case "URIError":
          i10 = new (ek(o10))();
          break;
        case "CompileError":
        case "LinkError":
        case "RuntimeError":
          i10 = new (ek("WebAssembly", o10))();
          break;
        default:
          i10 = new vg();
      }
      break;
    case "DOMException":
      i10 = new v_(e10.message, e10.name);
      break;
    case "ArrayBuffer":
    case "SharedArrayBuffer":
      i10 = vG(e10, t10, f10);
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
      s10 = "DataView" === f10 ? e10.byteLength : e10.length, i10 = vY(e10, f10, e10.byteOffset, s10, t10);
      break;
    case "DOMQuad":
      try {
        i10 = new DOMQuad(vK(e10.p1, t10), vK(e10.p2, t10), vK(e10.p3, t10), vK(e10.p4, t10));
      } catch (t11) {
        i10 = vW(e10, f10);
      }
      break;
    case "File":
      if (vB)
        try {
          i10 = vB(e10), t1(i10) !== f10 && (i10 = void 0);
        } catch (e11) {
        }
      if (!i10)
        try {
          i10 = new File([e10], e10.name, e10);
        } catch (e11) {
        }
      i10 || vH(f10);
      break;
    case "FileList":
      if (a10 = vq()) {
        for (l10 = 0, s10 = rM(e10); l10 < s10; l10++)
          a10.items.add(vK(e10[l10], t10));
        i10 = a10.files;
      } else
        i10 = vW(e10, f10);
      break;
    case "ImageData":
      try {
        i10 = new ImageData(vK(e10.data, t10), e10.width, e10.height, { colorSpace: e10.colorSpace });
      } catch (t11) {
        i10 = vW(e10, f10);
      }
      break;
    default:
      if (vB)
        i10 = vB(e10);
      else
        switch (f10) {
          case "BigInt":
            i10 = vh(e10.valueOf());
            break;
          case "Boolean":
            i10 = vh(vM(e10));
            break;
          case "Number":
            i10 = vh(vj(e10));
            break;
          case "String":
            i10 = vh(vR(e10));
            break;
          case "Date":
            i10 = new vv(vT(e10));
            break;
          case "Blob":
            try {
              i10 = e10.slice(0, e10.size, e10.type);
            } catch (e11) {
              vH(f10);
            }
            break;
          case "DOMPoint":
          case "DOMPointReadOnly":
            r3 = ef[f10];
            try {
              i10 = r3.fromPoint ? r3.fromPoint(e10) : new r3(e10.x, e10.y, e10.z, e10.w);
            } catch (e11) {
              vH(f10);
            }
            break;
          case "DOMRect":
          case "DOMRectReadOnly":
            r3 = ef[f10];
            try {
              i10 = r3.fromRect ? r3.fromRect(e10) : new r3(e10.x, e10.y, e10.width, e10.height);
            } catch (e11) {
              vH(f10);
            }
            break;
          case "DOMMatrix":
          case "DOMMatrixReadOnly":
            r3 = ef[f10];
            try {
              i10 = r3.fromMatrix ? r3.fromMatrix(e10) : new r3(e10);
            } catch (e11) {
              vH(f10);
            }
            break;
          case "AudioData":
          case "VideoFrame":
            ea(e10.clone) || vH(f10);
            try {
              i10 = e10.clone();
            } catch (e11) {
              vU(f10);
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
            vH(f10);
          default:
            vU(f10);
        }
  }
  switch (vS(t10, e10, i10), f10) {
    case "Array":
    case "Object":
      for (l10 = 0, s10 = rM(u10 = vA(e10)); l10 < s10; l10++)
        c10 = u10[l10], vp(i10, c10, vK(e10[c10], t10));
      break;
    case "Map":
      e10.forEach(function(e11, r10) {
        vS(i10, vK(r10, t10), vK(e11, t10));
      });
      break;
    case "Set":
      e10.forEach(function(e11) {
        vC(i10, vK(e11, t10));
      });
      break;
    case "Error":
      tS(i10, "message", vK(e10.message, t10)), e5(e10, "cause") && tS(i10, "cause", vK(e10.cause, t10)), "AggregateError" === o10 ? i10.errors = vK(e10.errors, t10) : "SuppressedError" === o10 && (i10.error = vK(e10.error, t10), i10.suppressed = vK(e10.suppressed, t10));
    case "DOMException":
      nR && tS(i10, "stack", vK(e10.stack, t10));
  }
  return i10;
}, vZ = function(e10, t10) {
  if (!ed(e10))
    throw new vy("Transfer option cannot be converted to a sequence");
  var r3, o10, i10, a10, l10, s10 = [];
  vd(e10, function(e11) {
    vP(s10, eb(e11));
  });
  for (var u10 = 0, c10 = rM(s10), f10 = new vO(); u10 < c10; ) {
    if ("ArrayBuffer" === (o10 = t1(r3 = s10[u10++])) ? vE(f10, r3) : vx(t10, r3))
      throw new v_("Duplicate transferable", v$);
    if ("ArrayBuffer" === o10) {
      vC(f10, r3);
      continue;
    }
    if (va)
      a10 = vV(r3, { transfer: [r3] });
    else
      switch (o10) {
        case "ImageBitmap":
          mW(i10 = ef.OffscreenCanvas) || vH(o10, vD);
          try {
            (l10 = new i10(r3.width, r3.height)).getContext("bitmaprenderer").transferFromImageBitmap(r3), a10 = l10.transferToImageBitmap();
          } catch (e11) {
          }
          break;
        case "AudioData":
        case "VideoFrame":
          ea(r3.clone) && ea(r3.close) || vH(o10, vD);
          try {
            a10 = r3.clone(), r3.close();
          } catch (e11) {
          }
          break;
        case "MediaSourceHandle":
        case "MessagePort":
        case "OffscreenCanvas":
        case "ReadableStream":
        case "TransformStream":
        case "WritableStream":
          vH(o10, vD);
      }
    if (void 0 === a10)
      throw new v_("This object cannot be transferred: " + o10, v$);
    vS(t10, r3, a10);
  }
  return f10;
}, vX = function(e10) {
  vr(e10, function(e11) {
    va ? vB(e11, { transfer: [e11] }) : ea(e11.transfer) ? e11.transfer() : vf ? vf(e11) : vH("ArrayBuffer", vD);
  });
};
rY({ global: true, enumerable: true, sham: !va, forced: vz }, { structuredClone: function(e10) {
  var t10, r3, o10 = t5(arguments.length, 1) > 1 && !eH(arguments[1]) ? eb(arguments[1]) : void 0, i10 = o10 ? o10.transfer : void 0;
  void 0 !== i10 && (r3 = vZ(i10, t10 = new vw()));
  var a10 = vK(e10, t10);
  return r3 && vX(r3), a10;
} });
var vJ = TypeError, vQ = el.f, v0 = function(e10, t10) {
  if (eA(t10, e10))
    return e10;
  throw new vJ("Incorrect invocation");
}, v1 = { IndexSizeError: { s: "INDEX_SIZE_ERR", c: 1, m: 1 }, DOMStringSizeError: { s: "DOMSTRING_SIZE_ERR", c: 2, m: 0 }, HierarchyRequestError: { s: "HIERARCHY_REQUEST_ERR", c: 3, m: 1 }, WrongDocumentError: { s: "WRONG_DOCUMENT_ERR", c: 4, m: 1 }, InvalidCharacterError: { s: "INVALID_CHARACTER_ERR", c: 5, m: 1 }, NoDataAllowedError: { s: "NO_DATA_ALLOWED_ERR", c: 6, m: 0 }, NoModificationAllowedError: { s: "NO_MODIFICATION_ALLOWED_ERR", c: 7, m: 1 }, NotFoundError: { s: "NOT_FOUND_ERR", c: 8, m: 1 }, NotSupportedError: { s: "NOT_SUPPORTED_ERR", c: 9, m: 1 }, InUseAttributeError: { s: "INUSE_ATTRIBUTE_ERR", c: 10, m: 1 }, InvalidStateError: { s: "INVALID_STATE_ERR", c: 11, m: 1 }, SyntaxError: { s: "SYNTAX_ERR", c: 12, m: 1 }, InvalidModificationError: { s: "INVALID_MODIFICATION_ERR", c: 13, m: 1 }, NamespaceError: { s: "NAMESPACE_ERR", c: 14, m: 1 }, InvalidAccessError: { s: "INVALID_ACCESS_ERR", c: 15, m: 1 }, ValidationError: { s: "VALIDATION_ERR", c: 16, m: 0 }, TypeMismatchError: { s: "TYPE_MISMATCH_ERR", c: 17, m: 1 }, SecurityError: { s: "SECURITY_ERR", c: 18, m: 1 }, NetworkError: { s: "NETWORK_ERR", c: 19, m: 1 }, AbortError: { s: "ABORT_ERR", c: 20, m: 1 }, URLMismatchError: { s: "URL_MISMATCH_ERR", c: 21, m: 1 }, QuotaExceededError: { s: "QUOTA_EXCEEDED_ERR", c: 22, m: 1 }, TimeoutError: { s: "TIMEOUT_ERR", c: 23, m: 1 }, InvalidNodeTypeError: { s: "INVALID_NODE_TYPE_ERR", c: 24, m: 1 }, DataCloneError: { s: "DATA_CLONE_ERR", c: 25, m: 1 } }, v2 = "DOMException", v4 = ek("Error"), v3 = ek(v2), v5 = function() {
  v0(this, v6);
  var e10 = arguments.length, t10 = nO(e10 < 1 ? void 0 : arguments[0]), r3 = nO(e10 < 2 ? void 0 : arguments[1], "Error"), o10 = new v3(t10, r3), i10 = new v4(t10);
  return i10.name = v2, vQ(o10, "stack", tk(1, nj(i10.stack, 1))), nS(o10, this, v5), o10;
}, v6 = v5.prototype = v3.prototype, v8 = "stack" in new v4(v2), v9 = "stack" in new v3(1, 2), v7 = v3 && eu && Object.getOwnPropertyDescriptor(ef, v2), ge = !!v7 && !(v7.writable && v7.configurable), gt = v8 && !ge && !v9;
rY({ global: true, constructor: true, forced: gt }, { DOMException: gt ? v5 : v3 });
var gr = ek(v2), gn = gr.prototype;
if (gn.constructor !== gr) {
  for (var go in vQ(gn, "constructor", tk(1, gr)), v1)
    if (e5(v1, go)) {
      var gi = v1[go], ga = gi.s;
      e5(gr, ga) || vQ(gr, ga, tk(6, gi.c));
    }
}
let gl = { path: [], branch: [] };
class gs extends TypeError {
  constructor(e10, t10) {
    let r3;
    let { message: o10, explanation: i10, ...a10 } = e10, { path: l10 } = e10, s10 = 0 === l10.length ? o10 : `At path: ${l10.join(".")} -- ${o10}`;
    super(null != i10 ? i10 : s10);
    __publicField(this, "value");
    __publicField(this, "key");
    __publicField(this, "type");
    __publicField(this, "refinement");
    __publicField(this, "path");
    __publicField(this, "branch");
    __publicField(this, "failures");
    null != i10 && (this.cause = s10), Object.assign(this, a10), this.name = this.constructor.name, this.failures = () => null != r3 ? r3 : r3 = [e10, ...t10()];
  }
}
class gu {
  constructor(e10) {
    __publicField(this, "Type");
    __publicField(this, "Schema");
    this.schema = e10;
  }
  static define() {
    let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => true;
    return new class extends gu {
      validator(t10, r3) {
        return e10(t10, r3);
      }
    }(null);
  }
  get type() {
    var e10;
    return null !== (e10 = (this.schema || {}).type) && void 0 !== e10 ? e10 : "unknown";
  }
  *entries(e10) {
    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  }
  refiner(e10, t10) {
    return [];
  }
  validator(e10, t10) {
    return [];
  }
  coercer(e10, t10) {
    return e10;
  }
  validate(e10) {
    let t10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return gm(e10, this, t10);
  }
  create(e10) {
    let t10 = gm(e10, this, { coerce: true });
    if (t10[0])
      throw t10[0];
    return t10[1];
  }
  mask(e10) {
    let t10 = gm(e10, this, { coerce: true, mask: true });
    if (t10[0])
      throw t10[0];
    return t10[1];
  }
  default(e10) {
    return gd.create(this, e10);
  }
  optional() {
    return gp.create(this);
  }
  use() {
    for (var e10 = arguments.length, t10 = Array(e10), r3 = 0; r3 < e10; r3++)
      t10[r3] = arguments[r3];
    return t10.reduce((e11, t11) => t11(e11), this);
  }
  get unwrap() {
    return this;
  }
  get meta() {
    if (this.schema) {
      var e10;
      return null !== (e10 = iu(this.schema, ["$meta"])) && void 0 !== e10 ? e10 : {};
    }
    return {};
  }
  getMeta(e10) {
    if (this.schema)
      return iu(this.schema, ["$meta", e10]);
  }
  getSchema(e10) {
    if (e10 && this.schema)
      return iu(this.schema, [e10]);
  }
  get isOptional() {
    return false;
  }
}
class gc extends gu {
  static of(e10, t10) {
    return new gc({ ...t10, $unwrap: e10 });
  }
  static refine(e10, t10, r3) {
    return new class extends gc {
      *refiner(o10, i10) {
        for (let a10 of (yield* this.unwrap.refiner(o10, i10), gh(t10(o10, i10), i10, e10, o10)))
          yield { ...a10, refinement: Object.keys(r3).join(",") };
      }
    }({ ...r3, $unwrap: e10 });
  }
  get type() {
    return this.unwrap.type;
  }
  get unwrap() {
    return "function" == typeof this.schema.$unwrap ? this.schema.$unwrap() : this.schema.$unwrap;
  }
  get isOptional() {
    return this.unwrap.isOptional;
  }
  get meta() {
    return { ...this.unwrap.meta, ...iu(this.schema, ["$meta"], {}) };
  }
  getMeta(e10) {
    if (this.schema) {
      var t10;
      return null !== (t10 = iu(this.schema, ["$meta", e10])) && void 0 !== t10 ? t10 : this.unwrap.getMeta(e10);
    }
  }
  getSchema(e10) {
    if (e10) {
      var t10;
      return null !== (t10 = iu(this.schema, [e10])) && void 0 !== t10 ? t10 : this.unwrap.getSchema(e10);
    }
  }
  *entries(e10) {
    let t10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gl;
    yield* this.unwrap.entries(e10, { ...t10, node: gf.create(this, t10.node) });
  }
  validator(e10, t10) {
    return gh(this.unwrap.validator(e10, t10), t10, this, e10);
  }
  refiner(e10, t10) {
    return gh(this.unwrap.refiner(e10, t10), t10, this, e10);
  }
  coercer(e10, t10) {
    return this.unwrap.coercer(e10, t10);
  }
}
class gf extends gc {
  static create(e10, t10) {
    return new gf({ $unwrap: e10, $parent: t10 || null });
  }
}
class gd extends gc {
  static create(e10, t10) {
    return new gd({ $unwrap: e10, default: t10 });
  }
  coercer(e10, t10) {
    return void 0 === e10 ? this.schema.default : super.unwrap.coercer(e10, t10);
  }
}
class gp extends gc {
  static create(e10) {
    return new gp({ $unwrap: e10 });
  }
  get isOptional() {
    return true;
  }
  refiner(e10, t10) {
    return void 0 === e10 || super.unwrap.refiner(e10, t10);
  }
  validator(e10, t10) {
    return void 0 === e10 || super.unwrap.validator(e10, t10);
  }
}
function* gh(e10, t10, r3, o10) {
  var i10;
  let a10 = e10;
  for (let e11 of (nW(i10 = a10) && "function" == typeof i10[Symbol.iterator] || (a10 = [a10]), a10)) {
    let i11 = function(e12, t11, r10, o11) {
      if (true === e12)
        return;
      let i12 = {}, { path: a11, branch: l10, node: s10 } = t11, { type: u10 } = r10, { refinement: c10, message: f10 = `Expected a value of type \`${u10}\`${c10 ? ` with refinement \`${c10}\`` : ""}, but received: \`${o11}\`` } = i12 = false === e12 ? {} : "string" == typeof e12 ? { message: e12 } : e12;
      return { value: o11, type: u10, refinement: c10, key: a11[a11.length - 1], path: a11, branch: l10, node: s10, ...i12, message: f10 };
    }(e11, t10, r3, o10);
    i11 && (yield i11);
  }
}
function gm(e10, t10) {
  let r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o10 = gv(e10, t10, r3), i10 = function(e11) {
    let { done: t11, value: r10 } = e11.next();
    return t11 ? void 0 : r10;
  }(o10);
  return i10[0] ? [new gs(i10[0], function* () {
    for (let e11 of o10)
      e11[0] && (yield e11[0]);
  }), void 0] : [void 0, i10[1]];
}
function* gv(e10, t10) {
  let r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, { path: o10 = [], branch: i10 = [e10], node: a10 = gf.create(t10, null), coerce: l10 = false, mask: s10 = false } = r3, u10 = { mask: s10, path: o10, branch: i10, node: a10 }, c10 = e10;
  l10 && (c10 = t10.coercer(c10, u10));
  let f10 = 0;
  for (let e11 of gh(t10.validator(c10, u10), u10, t10, c10))
    e11.explanation = r3.message, f10 = 2, yield [e11, void 0];
  for (let [e11, d10, p10] of t10.entries(c10, u10))
    for (let t11 of gv(d10, p10, { path: void 0 === e11 ? o10 : [...o10, e11], branch: void 0 === e11 ? i10 : [...i10, d10], node: void 0 === e11 ? a10 : gf.create(p10, a10), coerce: l10, mask: s10, message: r3.message }))
      t11[0] ? (f10 = null != t11[0].refinement ? 1 : 2, yield [t11[0], void 0]) : l10 && (d10 = t11[1], void 0 === e11 ? c10 = d10 : c10 instanceof Map ? c10.set(e11, d10) : c10 instanceof Set ? c10.add(d10) : nW(c10) && (void 0 !== d10 || e11 in c10) && (c10[e11] = d10));
  if (2 !== f10)
    for (let e11 of gh(t10.refiner(c10, u10), u10, t10, c10))
      e11.explanation = r3.message, f10 = 1, yield [e11, void 0];
  0 === f10 && (yield [void 0, c10]);
}
class gg extends gu {
  static create() {
    return new gg(false);
  }
  get type() {
    return "never";
  }
  validator(e10, t10) {
    return false;
  }
}
class gy extends gc {
  static create(e10, t10) {
    return new gy({ $unwrap: t10, $ref: e10 });
  }
  get isOptional() {
    return false;
  }
}
class gb extends gu {
  static create() {
    return new gb();
  }
  constructor() {
    super({});
  }
  get type() {
    return "any";
  }
  validator() {
    return true;
  }
}
class g_ extends gu {
  static create() {
    return new g_({ type: "null" });
  }
  get type() {
    return "null";
  }
  validator(e10, t10) {
    return Object.is(e10, null);
  }
}
class gw extends gu {
  static create() {
    return new gw({ type: "string" });
  }
  get type() {
    return this.schema.type;
  }
  validator(e10, t10) {
    return "string" == typeof e10;
  }
}
class gx extends gu {
  static create() {
    return new gx({ type: "number" });
  }
  get type() {
    return this.schema.type;
  }
  validator(e10, t10) {
    return "number" == typeof e10 && !Number.isNaN(e10);
  }
}
class gk extends gu {
  static create() {
    return new gk({ type: "integer" });
  }
  get type() {
    return this.schema.type;
  }
  validator(e10, t10) {
    return "number" == typeof e10 && !Number.isNaN(e10) && Number.isInteger(e10);
  }
}
class gS extends gu {
  static create() {
    return new gS({ type: "boolean" });
  }
  get type() {
    return this.schema.type;
  }
  validator(e10, t10) {
    return "boolean" == typeof e10;
  }
}
class gO extends gu {
  static create() {
    return new gO({ type: "string", format: "binary" });
  }
  get type() {
    return "binary";
  }
  validator(e10, t10) {
    return e10 instanceof File || e10 instanceof Blob;
  }
}
class gC extends gu {
  static create(e10) {
    return new gC({ enum: e10 });
  }
  static literal(e10) {
    return new gC({ enum: [e10] });
  }
  static nativeEnum(e10) {
    return new gC({ enum: Object.values(e10) });
  }
  get type() {
    return "enums";
  }
  validator(e10, t10) {
    return this.schema.enum.includes(e10);
  }
}
class gE extends gu {
  static create(e10) {
    let t10 = [];
    if (e10)
      for (let r3 in e10) {
        let o10 = e10[r3];
        (null == o10 ? void 0 : o10.isOptional) || t10.push(r3);
      }
    return new gE({ type: "object", properties: e10, required: t10, additionalProperties: gg.create() });
  }
  get type() {
    return this.schema.type;
  }
  *entries(e10, t10) {
    if (nW(e10)) {
      var r3;
      let o10 = new Set(Object.keys(e10));
      if (this.schema.properties)
        for (let t11 in this.schema.properties)
          o10.delete(t11), yield [t11, e10[t11], this.schema.properties[t11]];
      if ((null === (r3 = t10.node) || void 0 === r3 ? void 0 : r3.type) !== "intersection")
        for (let t11 of o10)
          yield [t11, e10[t11], this.schema.additionalProperties];
    }
  }
  validator(e10, t10) {
    return nW(e10);
  }
  coercer(e10, t10) {
    if (nW(e10)) {
      let r3 = { ...e10 };
      if (t10.mask) {
        let e11 = this.schema.properties;
        if (e11)
          for (let t11 in r3)
            void 0 === e11[t11] && delete r3[t11];
      }
      return r3;
    }
    return e10;
  }
}
let gA = Symbol("$_key");
class gP extends gu {
  static create(e10, t10) {
    return new gP({ propertyNames: e10, additionalProperties: t10, type: "object" });
  }
  get type() {
    return "record";
  }
  *entries(e10) {
    if (nW(e10))
      for (let t10 in e10) {
        let r3 = e10[t10];
        yield [gA, t10, this.schema.propertyNames], yield [t10, r3, this.schema.additionalProperties];
      }
  }
  validator(e10) {
    return nW(e10);
  }
}
class gM extends gu {
  static create(e10) {
    return new gM({ type: "array", items: e10 });
  }
  get type() {
    return this.schema.type;
  }
  *entries(e10) {
    if ("any" !== this.schema.items.type && Array.isArray(e10))
      for (let [t10, r3] of e10.entries())
        yield [t10, r3, this.schema.items];
  }
  validator(e10) {
    return Array.isArray(e10);
  }
  coercer(e10) {
    return Array.isArray(e10) ? e10.slice() : e10;
  }
}
class gj extends gu {
  static create(e10) {
    return new gj({ type: "array", items: e10 });
  }
  get type() {
    return "tuple";
  }
  *entries(e10, t10) {
    if (Array.isArray(e10)) {
      let t11 = Math.max(this.schema.items.length, e10.length);
      for (let o10 = 0; o10 < t11; o10++) {
        var r3;
        yield [o10, e10[o10], null !== (r3 = this.schema.items[o10]) && void 0 !== r3 ? r3 : gg.create()];
      }
    }
  }
  validator(e10) {
    return Array.isArray(e10);
  }
  coercer(e10) {
    return Array.isArray(e10) ? e10.slice() : e10;
  }
}
class gR extends gu {
  static create() {
    for (var e10 = arguments.length, t10 = Array(e10), r3 = 0; r3 < e10; r3++)
      t10[r3] = arguments[r3];
    return new gR({ allOf: t10 });
  }
  get type() {
    return "intersection";
  }
  *entries(e10) {
    let t10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gl;
    for (let r3 of this.schema.allOf)
      yield* r3.entries(e10, t10);
  }
  *validator(e10, t10) {
    for (let r3 of this.schema.allOf)
      yield* gh(r3.validator(e10, t10), t10, this, e10);
  }
  *refiner(e10, t10) {
    for (let r3 of this.schema.allOf)
      yield* gh(r3.refiner(e10, t10), t10, this, e10);
  }
}
class gT extends gu {
  constructor() {
    super(...arguments);
    __publicField(this, "_discriminatorPropName");
    __publicField(this, "_discriminatorMapping", {});
  }
  static create() {
    for (var e10 = arguments.length, t10 = Array(e10), r3 = 0; r3 < e10; r3++)
      t10[r3] = arguments[r3];
    return new gT({ oneOf: t10 });
  }
  static discriminatorMapping(e10, t10) {
    return new gT({ oneOf: Object.values(sp(t10, (t11, r3) => {
      let o10 = { [e10]: gC.literal(r3) };
      for (let [e11, r10, i10] of t11.entries({}, gl))
        o10[String(e11)] = i10;
      return gE.create(o10);
    })), discriminator: { propertyName: e10 } });
  }
  discriminatorPropType(e10) {
    return sf(this._discriminatorPropName) && (this._discriminatorPropName = (() => {
      var t10, r3, o10, i10;
      let a10 = null !== (o10 = null === (t10 = this.schema.discriminator) || void 0 === t10 ? void 0 : t10.propertyName) && void 0 !== o10 ? o10 : "", l10 = this.schema.oneOf.reduce((e11, t11) => [...e11, ...t11.unwrap.schema.properties[a10].unwrap.schema.enum], []);
      return gc.of(gC.create(l10), { $meta: null !== (i10 = null === (r3 = e10.node) || void 0 === r3 ? void 0 : r3.meta) && void 0 !== i10 ? i10 : {} });
    })()), this._discriminatorPropName;
  }
  discriminatorMapping(e10, t10) {
    var r3, o10;
    let i10 = null !== (o10 = null === (r3 = this.schema.discriminator) || void 0 === r3 ? void 0 : r3.propertyName) && void 0 !== o10 ? o10 : "";
    if (this._discriminatorMapping[e10])
      return this._discriminatorMapping[e10];
    if (this.discriminatorPropType(t10).unwrap.schema.enum.includes(e10)) {
      let t11 = this.schema.oneOf.find((t12) => {
        let r10 = t12.unwrap.schema.properties[i10];
        if (r10.unwrap.schema.enum) {
          let [t13, o11] = r10.validate(e10);
          return !t13;
        }
        return false;
      });
      if (t11)
        return sf(this._discriminatorMapping[`${e10}`]) && (this._discriminatorMapping[`${e10}`] = sm(t11.unwrap.schema.properties, [i10])), this._discriminatorMapping[`${e10}`];
    }
    return {};
  }
  *entries(e10, t10) {
    if (this.schema.discriminator) {
      let r3 = this.schema.discriminator.propertyName, o10 = null == e10 ? void 0 : e10[r3], i10 = gE.create({ [r3]: this.discriminatorPropType(t10), ...this.discriminatorMapping(o10, t10) });
      yield* i10.entries(e10, t10);
    }
  }
  get type() {
    return "union";
  }
  coercer(e10) {
    for (let t10 of this.schema.oneOf) {
      let [r3, o10] = gm(e10, t10, { coerce: true });
      if (!r3)
        return o10;
    }
    return e10;
  }
  validator(e10, t10) {
    if (this.schema.discriminator) {
      let r10 = this.schema.discriminator.propertyName, o10 = null == e10 ? void 0 : e10[r10];
      return gE.create({ [r10]: this.discriminatorPropType(t10), ...this.discriminatorMapping(o10, t10) }).validator(e10, t10);
    }
    let r3 = [];
    for (let o10 of this.schema.oneOf) {
      let [...i10] = gv(e10, o10, t10), [a10] = i10;
      if (a10 && !a10[0])
        return [];
      for (let [e11] of i10)
        e11 && r3.push(e11);
    }
    return [`Expected the value to satisfy a union of \`${this.schema.oneOf.map((e11) => e11.type).join(" | ")}\`, but received: ${e10}`, ...r3];
  }
}
let gI = gy.create, g$ = gb.create, gD = gg.create, gL = g_.create, gF = gw.create, gV = gx.create, gz = gk.create, gN = gS.create, gB = gO.create, gU = gC.create, gH = gC.nativeEnum, gW = gC.literal, gq = gE.create, gG = gP.create, gY = gj.create, gK = gM.create, gZ = gR.create, gX = gT.create, gJ = gT.discriminatorMapping;
var gQ = Object.freeze({ __proto__: null, annotate: function(e10) {
  return (t10) => gc.of(t10, { $meta: e10 });
}, any: g$, array: gK, binary: gB, boolean: gN, custom: gu.define, defaults: function(e10) {
  return (t10) => gd.create(t10, e10);
}, discriminatorMapping: gJ, enums: gU, exclusiveMaximum: function(e10, t10) {
  return (r3) => gc.refine(r3, (r10) => r10 < e10 || (null != t10 ? t10 : `Expected value less than or equal ${e10}, but received "${r10}"`), { exclusiveMaximum: e10 });
}, exclusiveMinimum: function(e10, t10) {
  return (r3) => gc.refine(r3, (r10) => r10 > e10 || (null != t10 ? t10 : `Expected value great than ${e10}, but received "${r10}"`), { exclusiveMinimum: e10 });
}, integer: gz, intersection: gZ, literal: gW, maxItems: function(e10, t10) {
  return (r3) => gc.refine(r3, (r10) => !!Array.isArray(r10) && r10.length <= e10 || (null != t10 ? t10 : `Expected array value  ${e10}, but received "${null == r10 ? void 0 : r10.length}"`), { maxItems: e10 });
}, maximum: function(e10, t10) {
  return (r3) => gc.refine(r3, (r10) => r10 <= e10 || (null != t10 ? t10 : `Expected value less than or equal ${e10}, but received "${r10}"`), { maximum: e10 });
}, minItems: function(e10, t10) {
  return (r3) => gc.refine(r3, (r10) => !!Array.isArray(r10) && r10.length >= e10 || (null != t10 ? t10 : `Expected array value at least ${e10}, but received "${null == r10 ? void 0 : r10.length}"`), { minItems: e10 });
}, minimum: function(e10, t10) {
  return (r3) => gc.refine(r3, (r10) => r10 >= e10 || (null != t10 ? t10 : `Expected value great than or equal ${e10}, but received "${r10}"`), { minimum: e10 });
}, multipleOf: function(e10, t10) {
  return (r3) => gc.refine(r3, (r10) => r10 % e10 == 0 || (null != t10 ? t10 : `Expected value multiple of ${e10}, but received "${r10}"`), { multipleOf: e10 });
}, nativeEnum: gH, never: gD, nil: gL, number: gV, object: gq, optional: function() {
  return (e10) => gp.create(e10);
}, pattern: function(e10, t10) {
  return (r3) => gc.refine(r3, (o10) => !!e10.test(o10) || (null != t10 ? t10 : `Expected a ${r3.type} matching \`/${e10.source}/\` but received "${o10}"`), { pattern: e10.source });
}, record: gG, ref: gI, refine: gc.refine, string: gF, tuple: gY, union: gX });
let g0 = df;
function g1(e10, t10) {
  let r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o10 = null != r3 ? r3 : t10, i10 = null != t10 ? t10 : e10, a10 = nQ(e10) ? {} : e10, [l10, s10] = sR(Object.keys(a10), (e11) => /^on[A-Z]/.test(e11)), u10 = { emits: l10.map((e11) => sd(e11.slice(2))), props: s10.filter((e11) => !/^[$]/.test(e11)).reduce((e11, t11) => {
    let r10 = a10[t11];
    return { ...e11, [t11]: { default: () => {
      try {
        return r10.create(void 0);
      } catch (e12) {
      }
    }, validator: (e12) => r10.validate(e12) } };
  }, {}) }, { name: c10, inheritAttrs: f10, ...d10 } = o10;
  return { ...d10, get name() {
    var p10;
    return null !== (p10 = this.displayName) && void 0 !== p10 ? p10 : c10;
  }, set name(n) {
    o10.name = n;
  }, setup: (e11, t11) => i10(e11, t11), emits: u10.emits, props: u10.props, inheritAttrs: f10, propTypes: a10 };
}
let g2 = (e10, t10) => new Proxy(e10, { get(e11, r3) {
  var o10;
  return null !== (o10 = t10[r3]) && void 0 !== o10 ? o10 : e11[r3];
} });
function g4(e10) {
  for (var t10 = arguments.length, r3 = Array(t10 > 1 ? t10 - 1 : 0), o10 = 1; o10 < t10; o10++)
    r3[o10 - 1] = arguments[o10];
  return function() {
    for (var e11 = [], t11 = 0; t11 < arguments.length; t11++)
      e11[t11] = arguments[t11];
    return hz(e11);
  }(...r3)(function(e11) {
    if (e11 instanceof hN)
      return e11;
    if (null != e11) {
      if (h_(e11[hF]))
        return new hN(function(t11) {
          var r10 = e11[hF]();
          if (h_(r10.subscribe))
            return r10.subscribe(t11);
          throw TypeError("Provided object does not correctly implement Symbol.observable");
        });
      if (e11 && "number" == typeof e11.length && "function" != typeof e11)
        return new hN(function(t11) {
          for (var r10 = 0; r10 < e11.length && !t11.closed; r10++)
            t11.next(e11[r10]);
          t11.complete();
        });
      if (h_(null == e11 ? void 0 : e11.then))
        return new hN(function(t11) {
          e11.then(function(e12) {
            t11.closed || (t11.next(e12), t11.complete());
          }, function(e12) {
            return t11.error(e12);
          }).then(null, hM);
        });
      if (Symbol.asyncIterator && h_(null == e11 ? void 0 : e11[Symbol.asyncIterator]))
        return hX(e11);
      if (h_(null == e11 ? void 0 : e11[hZ]))
        return new hN(function(t11) {
          var r10, o11;
          try {
            for (var i10 = hv(e11), a10 = i10.next(); !a10.done; a10 = i10.next()) {
              var l10 = a10.value;
              if (t11.next(l10), t11.closed)
                return;
            }
          } catch (e12) {
            r10 = { error: e12 };
          } finally {
            try {
              a10 && !a10.done && (o11 = i10.return) && o11.call(i10);
            } finally {
              if (r10)
                throw r10.error;
            }
          }
          t11.complete();
        });
      if (h_(null == e11 ? void 0 : e11.getReader))
        return hX(function(e12) {
          return function(e13, t11, r10) {
            if (!Symbol.asyncIterator)
              throw TypeError("Symbol.asyncIterator is not defined.");
            var o11, i10 = r10.apply(e13, t11 || []), a10 = [];
            return o11 = {}, l10("next"), l10("throw"), l10("return"), o11[Symbol.asyncIterator] = function() {
              return this;
            }, o11;
            function l10(e14) {
              i10[e14] && (o11[e14] = function(t12) {
                return new Promise(function(r11, o12) {
                  a10.push([e14, t12, r11, o12]) > 1 || s10(e14, t12);
                });
              });
            }
            function s10(e14, t12) {
              try {
                var r11;
                (r11 = i10[e14](t12)).value instanceof hb ? Promise.resolve(r11.value.v).then(u10, c10) : f10(a10[0][2], r11);
              } catch (e15) {
                f10(a10[0][3], e15);
              }
            }
            function u10(e14) {
              s10("next", e14);
            }
            function c10(e14) {
              s10("throw", e14);
            }
            function f10(e14, t12) {
              e14(t12), a10.shift(), a10.length && s10(a10[0][0], a10[0][1]);
            }
          }(this, arguments, function() {
            var t11, r10, o11;
            return hm(this, function(i10) {
              switch (i10.label) {
                case 0:
                  t11 = e12.getReader(), i10.label = 1;
                case 1:
                  i10.trys.push([1, , 9, 10]), i10.label = 2;
                case 2:
                  return [4, hb(t11.read())];
                case 3:
                  if (o11 = (r10 = i10.sent()).value, !r10.done)
                    return [3, 5];
                  return [4, hb(void 0)];
                case 4:
                  return [2, i10.sent()];
                case 5:
                  return [4, hb(o11)];
                case 6:
                  return [4, i10.sent()];
                case 7:
                  return i10.sent(), [3, 2];
                case 8:
                  return [3, 10];
                case 9:
                  return t11.releaseLock(), [7];
                case 10:
                  return [2];
              }
            });
          });
        }(e11));
    }
    throw TypeError("You provided " + (null !== e11 && "object" == typeof e11 ? "an invalid object" : "'" + e11 + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
  }(e10));
}
class g3 extends hK {
  next(e10) {
    let t10 = nQ(e10) ? mA(this.value, e10) : e10;
    Object.is(t10, this.value) || super.next(t10);
  }
}
function g5(e10) {
  return (t10) => {
    let r3 = t10.subscribe(e10);
    fk(() => r3.unsubscribe());
  };
}
function g6(e10) {
  return (t10) => {
    var r3;
    return mL(g8, { elem$: t10.pipe((r3 = (t11) => () => e10(t11), hU(function(e11, t11) {
      var o10 = 0;
      e11.subscribe(hH(t11, function(e12) {
        t11.next(r3.call(void 0, e12, o10++));
      }));
    }))), children: {} });
  };
}
let g8 = g1({ elem$: gQ.custom(), $default: gQ.custom() }, (e10, t10) => {
  let r3 = cw(null, true);
  return g4(e10.elem$, hJ((e11) => {
    r3.value = e11;
  }), g5()), () => {
    var e11;
    return null === (e11 = r3.value) || void 0 === e11 ? void 0 : e11.call(r3);
  };
}, { name: "RxSlot" }), g9 = (e10, t10) => {
  let r3 = new hK(e10[t10]);
  return c6(() => e10[t10], (e11) => r3.next(e11), void 0), r3;
}, g7 = (e10) => {
  let t10 = {};
  for (let o10 in e10) {
    var r3;
    if (nQ(e10[o10]) || (r3 = e10[o10]) && (r3 instanceof hN || h_(r3.lift) && h_(r3.subscribe))) {
      t10[o10] = e10[o10];
      continue;
    }
    t10[`${o10}$`] = g9(e10, o10);
  }
  return t10;
};
function ye(e10, t10) {
  let r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o10 = null != t10 ? t10 : e10;
  return g1(null != e10 ? e10 : {}, (e11, t11) => {
    let r10 = g7(e11), i10 = o10(new Proxy({}, { get(t12, o11) {
      var i11;
      return null !== (i11 = e11[o11]) && void 0 !== i11 ? i11 : r10[o11];
    } }), new Proxy({}, { get: (e12, r11) => "render" === r11 ? g6 : t11[r11] }));
    return nQ(i10) ? i10 : () => i10;
  }, null != r3 ? r3 : t10);
}
let yt = (e10) => {
  let t10 = new g3(e10), r3 = new cC((e11, r10) => ({ get: () => (e11(), t10.value), set(e12) {
    var o10;
    let i10 = null !== (o10 = null == e12 ? void 0 : e12.$$forwardRef) && void 0 !== o10 ? o10 : e12;
    Object.is(i10, t10.value) || (t10.next(i10), r10());
  } }));
  return new Proxy(t10, { get(e11, o10) {
    var i10;
    return "next" === o10 ? (e12) => {
      r3.value = nQ(e12) ? mA(t10.value, e12) : e12;
    } : "value" === o10 ? r3.value : null !== (i10 = t10[o10]) && void 0 !== i10 ? i10 : r3[o10];
  }, set: (e11, t11, o10) => ("value" === t11 ? r3.value = o10 : e11[t11] = o10, true) });
}, yr = (e10, t10) => {
  if (nu(e10) && nu(t10)) {
    if (e10.length !== t10.length)
      return false;
    for (let r3 in e10)
      if (!Object.is(e10[r3], t10[r3]))
        return false;
    return true;
  }
  return Object.is(e10, t10);
}, yn = (e10) => {
  let t10;
  let r3 = null;
  return hJ({ next: (o10) => {
    yr(o10, r3) || (null == t10 || t10(), t10 = e10(o10), r3 = o10);
  }, unsubscribe: () => {
    null == t10 || t10();
  } });
};
function yo() {
  let e10;
  return new cC((t10, r3) => ({ get: () => (t10(), e10), set(t11) {
    var o10;
    let i10 = null !== (o10 = null == t11 ? void 0 : t11.$$forwardRef) && void 0 !== o10 ? o10 : t11;
    i10 !== e10 && (e10 = i10, r3());
  } }));
}
function yi(e10, t10, r3) {
  var o10, i10, a10, l10;
  let s10;
  let u10 = ib(e10) ? e10 : {}, c10 = nQ(e10) ? e10 : t10, f10 = null !== (o10 = null != r3 ? r3 : t10) && void 0 !== o10 ? o10 : {}, d10 = Symbol(null !== (i10 = f10.name) && void 0 !== i10 ? i10 : "");
  if (su(u10)) {
    let e11;
    let t11 = () => (void 0 === e11 && (e11 = c10({})), e11);
    return g2(g1({ value: gQ.custom().optional(), $default: gQ.custom().optional() }, (e12, r10) => {
      var o11;
      let { slots: i11 } = r10;
      return fG(d10, null !== (o11 = e12.value) && void 0 !== o11 ? o11 : t11()), () => {
        var e13;
        return null === (e13 = i11.default) || void 0 === e13 ? void 0 : e13.call(i11);
      };
    }, { ...f10, name: `Provide(${null !== (a10 = f10.name) && void 0 !== a10 ? a10 : ""})` }), { use: () => fY(d10, t11, true) });
  }
  let p10 = gQ.object(u10), h10 = () => p10.create({}), m10 = () => (void 0 === s10 && (s10 = c10(h10())), s10);
  return g2(g1({ ...u10, $default: gQ.custom().optional() }, (e11, t11) => {
    let { slots: r10 } = t11;
    return fG(d10, c10(e11)), () => {
      var e12;
      return null === (e12 = r10.default) || void 0 === e12 ? void 0 : e12.call(r10);
    };
  }, { ...f10, name: `Provide(${null !== (l10 = f10.name) && void 0 !== l10 ? l10 : ""})` }), { use: () => fY(d10, m10, true) });
}
var ya = tn("match"), yl = Math.floor, ys = eE("".charAt), yu = eE("".replace), yc = eE("".slice), yf = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, yd = /\$([$&'`]|\d{1,2})/g, yp = function(e10) {
  var t10;
  return ed(e10) && (void 0 !== (t10 = e10[ya]) ? !!t10 : "RegExp" === tZ(e10));
}, yh = function(e10, t10, r3, o10, i10, a10) {
  var l10 = r3 + e10.length, s10 = o10.length, u10 = yd;
  return void 0 !== i10 && (i10 = e4(i10), u10 = yf), yu(a10, u10, function(a11, u11) {
    var c10;
    switch (ys(u11, 0)) {
      case "$":
        return "$";
      case "&":
        return e10;
      case "`":
        return yc(t10, 0, r3);
      case "'":
        return yc(t10, l10);
      case "<":
        c10 = i10[yc(u11, 1, -1)];
        break;
      default:
        var f10 = +u11;
        if (0 === f10)
          return a11;
        if (f10 > s10) {
          var d10 = yl(f10 / 10);
          if (0 === d10)
            return a11;
          if (d10 <= s10)
            return void 0 === o10[d10 - 1] ? ys(u11, 1) : o10[d10 - 1] + ys(u11, 1);
          return a11;
        }
        c10 = o10[f10 - 1];
    }
    return void 0 === c10 ? "" : c10;
  });
}, ym = tn("replace"), yv = TypeError, yg = eE("".indexOf);
eE("".replace);
var yy = eE("".slice), yb = Math.max;
function y_(e10, t10) {
  var r3 = {};
  for (var o10 in e10)
    Object.prototype.hasOwnProperty.call(e10, o10) && 0 > t10.indexOf(o10) && (r3[o10] = e10[o10]);
  if (null != e10 && "function" == typeof Object.getOwnPropertySymbols)
    for (var i10 = 0, o10 = Object.getOwnPropertySymbols(e10); i10 < o10.length; i10++)
      0 > t10.indexOf(o10[i10]) && Object.prototype.propertyIsEnumerable.call(e10, o10[i10]) && (r3[o10[i10]] = e10[o10[i10]]);
  return r3;
}
rY({ target: "String", proto: true }, { replaceAll: function(e10, t10) {
  var r3, o10, i10, a10, l10, s10, u10, c10 = e1(this), f10 = 0, d10 = 0, p10 = "";
  if (!eH(e10)) {
    if (yp(e10) && !~yg(t4(e1(m5(e10))), "g"))
      throw new yv("`.replaceAll` does not allow non-global regexes");
    if (r3 = eW(e10, ym))
      return ex(r3, e10, c10, t10);
  }
  for (o10 = t4(c10), i10 = t4(e10), (a10 = ea(t10)) || (t10 = t4(t10)), s10 = yb(1, l10 = i10.length), f10 = yg(o10, i10); -1 !== f10; )
    u10 = a10 ? t4(t10(i10, f10, o10)) : yh(i10, o10, f10, [], void 0, t10), p10 += yy(o10, d10, f10) + u10, d10 = f10 + l10, f10 = f10 + s10 > o10.length ? -1 : yg(o10, i10, f10 + s10);
  return d10 < o10.length && (p10 += yy(o10, d10)), p10;
} });
var yw = function() {
};
let yx = (e10, t10, r3) => Math.min(Math.max(r3, e10), t10);
function yk(e10, t10) {
  return e10 * Math.sqrt(1 - t10 * t10);
}
let yS = ["duration", "bounce"], yO = ["stiffness", "damping", "mass"];
function yC(e10, t10) {
  return t10.some((t11) => void 0 !== e10[t11]);
}
function yE(e10) {
  var { from: t10 = 0, to: r3 = 1, restSpeed: o10 = 2, restDelta: i10 } = e10, a10 = y_(e10, ["from", "to", "restSpeed", "restDelta"]);
  let l10 = { done: false, value: t10 }, { stiffness: s10, damping: u10, mass: c10, velocity: f10, duration: d10, isResolvedFromDuration: p10 } = function(e11) {
    let t11 = Object.assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: false }, e11);
    if (!yC(e11, yO) && yC(e11, yS)) {
      let r10 = function(e12) {
        let t12, r11, { duration: o11 = 800, bounce: i11 = 0.25, velocity: a11 = 0, mass: l11 = 1 } = e12, s11 = 1 - i11;
        s11 = yx(0.05, 1, s11), o11 = yx(0.01, 10, o11 / 1e3), s11 < 1 ? (t12 = (e13) => {
          let t13 = e13 * s11, r12 = t13 * o11;
          return 1e-3 - (t13 - a11) / yk(e13, s11) * Math.exp(-r12);
        }, r11 = (e13) => {
          let r12 = e13 * s11 * o11, i12 = Math.pow(s11, 2) * Math.pow(e13, 2) * o11, l12 = yk(Math.pow(e13, 2), s11);
          return (r12 * a11 + a11 - i12) * Math.exp(-r12) * (-t12(e13) + 1e-3 > 0 ? -1 : 1) / l12;
        }) : (t12 = (e13) => -1e-3 + Math.exp(-e13 * o11) * ((e13 - a11) * o11 + 1), r11 = (e13) => o11 * o11 * (a11 - e13) * Math.exp(-e13 * o11));
        let u11 = function(e13, t13, r12) {
          let o12 = r12;
          for (let r13 = 1; r13 < 12; r13++)
            o12 -= e13(o12) / t13(o12);
          return o12;
        }(t12, r11, 5 / o11);
        if (o11 *= 1e3, isNaN(u11))
          return { stiffness: 100, damping: 10, duration: o11 };
        {
          let e13 = Math.pow(u11, 2) * l11;
          return { stiffness: e13, damping: 2 * s11 * Math.sqrt(l11 * e13), duration: o11 };
        }
      }(e11);
      (t11 = Object.assign(Object.assign(Object.assign({}, t11), r10), { velocity: 0, mass: 1 })).isResolvedFromDuration = true;
    }
    return t11;
  }(a10), h10 = yA, m10 = yA;
  function g10() {
    let e11 = f10 ? -(f10 / 1e3) : 0, o11 = r3 - t10, a11 = u10 / (2 * Math.sqrt(s10 * c10)), l11 = Math.sqrt(s10 / c10) / 1e3;
    if (void 0 === i10 && (i10 = Math.min(Math.abs(r3 - t10) / 100, 0.4)), a11 < 1) {
      let t11 = yk(l11, a11);
      h10 = (i11) => r3 - Math.exp(-a11 * l11 * i11) * ((e11 + a11 * l11 * o11) / t11 * Math.sin(t11 * i11) + o11 * Math.cos(t11 * i11)), m10 = (r10) => {
        let i11 = Math.exp(-a11 * l11 * r10);
        return a11 * l11 * i11 * (Math.sin(t11 * r10) * (e11 + a11 * l11 * o11) / t11 + o11 * Math.cos(t11 * r10)) - i11 * (Math.cos(t11 * r10) * (e11 + a11 * l11 * o11) - t11 * o11 * Math.sin(t11 * r10));
      };
    } else if (1 === a11)
      h10 = (t11) => r3 - Math.exp(-l11 * t11) * (o11 + (e11 + l11 * o11) * t11);
    else {
      let t11 = l11 * Math.sqrt(a11 * a11 - 1);
      h10 = (i11) => {
        let s11 = Math.exp(-a11 * l11 * i11), u11 = Math.min(t11 * i11, 300);
        return r3 - s11 * ((e11 + a11 * l11 * o11) * Math.sinh(u11) + t11 * o11 * Math.cosh(u11)) / t11;
      };
    }
  }
  return g10(), { next: (e11) => {
    let t11 = h10(e11);
    if (p10)
      l10.done = e11 >= d10;
    else {
      let a11 = 1e3 * m10(e11), s11 = Math.abs(r3 - t11) <= i10;
      l10.done = Math.abs(a11) <= o10 && s11;
    }
    return l10.value = l10.done ? r3 : t11, l10;
  }, flipTarget: () => {
    f10 = -f10, [t10, r3] = [r3, t10], g10();
  } };
}
yE.needsInterpolation = (e10, t10) => "string" == typeof e10 || "string" == typeof t10;
let yA = (e10) => 0, yP = (e10, t10, r3) => {
  let o10 = t10 - e10;
  return 0 === o10 ? 1 : (r3 - e10) / o10;
}, yM = (e10, t10, r3) => -r3 * e10 + r3 * t10 + e10, yj = (e10, t10) => (r3) => Math.max(Math.min(r3, t10), e10), yR = (e10) => e10 % 1 ? Number(e10.toFixed(5)) : e10, yT = /(-)?([\d]*\.?[\d])+/g, yI = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, y$ = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function yD(e10) {
  return "string" == typeof e10;
}
let yL = { test: (e10) => "number" == typeof e10, parse: parseFloat, transform: (e10) => e10 }, yF = Object.assign(Object.assign({}, yL), { transform: yj(0, 1) });
Object.assign(Object.assign({}, yL), { default: 1 });
let yV = { test: (e10) => yD(e10) && e10.endsWith("%") && 1 === e10.split(" ").length, parse: parseFloat, transform: (e10) => `${e10}%` };
Object.assign(Object.assign({}, yV), { parse: (e10) => yV.parse(e10) / 100, transform: (e10) => yV.transform(100 * e10) });
let yz = (e10, t10) => (r3) => !!(yD(r3) && y$.test(r3) && r3.startsWith(e10) || t10 && Object.prototype.hasOwnProperty.call(r3, t10)), yN = (e10, t10, r3) => (o10) => {
  if (!yD(o10))
    return o10;
  let [i10, a10, l10, s10] = o10.match(yT);
  return { [e10]: parseFloat(i10), [t10]: parseFloat(a10), [r3]: parseFloat(l10), alpha: void 0 !== s10 ? parseFloat(s10) : 1 };
}, yB = { test: yz("hsl", "hue"), parse: yN("hue", "saturation", "lightness"), transform: (e10) => {
  let { hue: t10, saturation: r3, lightness: o10, alpha: i10 = 1 } = e10;
  return "hsla(" + Math.round(t10) + ", " + yV.transform(yR(r3)) + ", " + yV.transform(yR(o10)) + ", " + yR(yF.transform(i10)) + ")";
} }, yU = yj(0, 255), yH = Object.assign(Object.assign({}, yL), { transform: (e10) => Math.round(yU(e10)) }), yW = { test: yz("rgb", "red"), parse: yN("red", "green", "blue"), transform: (e10) => {
  let { red: t10, green: r3, blue: o10, alpha: i10 = 1 } = e10;
  return "rgba(" + yH.transform(t10) + ", " + yH.transform(r3) + ", " + yH.transform(o10) + ", " + yR(yF.transform(i10)) + ")";
} }, yq = { test: yz("#"), parse: function(e10) {
  let t10 = "", r3 = "", o10 = "", i10 = "";
  return e10.length > 5 ? (t10 = e10.substr(1, 2), r3 = e10.substr(3, 2), o10 = e10.substr(5, 2), i10 = e10.substr(7, 2)) : (t10 = e10.substr(1, 1), r3 = e10.substr(2, 1), o10 = e10.substr(3, 1), i10 = e10.substr(4, 1), t10 += t10, r3 += r3, o10 += o10, i10 += i10), { red: parseInt(t10, 16), green: parseInt(r3, 16), blue: parseInt(o10, 16), alpha: i10 ? parseInt(i10, 16) / 255 : 1 };
}, transform: yW.transform }, yG = { test: (e10) => yW.test(e10) || yq.test(e10) || yB.test(e10), parse: (e10) => yW.test(e10) ? yW.parse(e10) : yB.test(e10) ? yB.parse(e10) : yq.parse(e10), transform: (e10) => yD(e10) ? e10 : e10.hasOwnProperty("red") ? yW.transform(e10) : yB.transform(e10) }, yY = "${c}", yK = "${n}";
function yZ(e10) {
  "number" == typeof e10 && (e10 = `${e10}`);
  let t10 = [], r3 = 0, o10 = e10.match(yI);
  o10 && (r3 = o10.length, e10 = e10.replace(yI, yY), t10.push(...o10.map(yG.parse)));
  let i10 = e10.match(yT);
  return i10 && (e10 = e10.replace(yT, yK), t10.push(...i10.map(yL.parse))), { values: t10, numColors: r3, tokenised: e10 };
}
let yX = function(e10) {
  let { values: t10, numColors: r3, tokenised: o10 } = yZ(e10), i10 = t10.length;
  return (e11) => {
    let t11 = o10;
    for (let o11 = 0; o11 < i10; o11++)
      t11 = t11.replace(o11 < r3 ? yY : yK, o11 < r3 ? yG.transform(e11[o11]) : yR(e11[o11]));
    return t11;
  };
};
function yJ(e10, t10, r3) {
  return (r3 < 0 && (r3 += 1), r3 > 1 && (r3 -= 1), r3 < 1 / 6) ? e10 + (t10 - e10) * 6 * r3 : r3 < 0.5 ? t10 : r3 < 2 / 3 ? e10 + (t10 - e10) * (2 / 3 - r3) * 6 : e10;
}
function yQ(e10) {
  let { hue: t10, saturation: r3, lightness: o10, alpha: i10 } = e10;
  t10 /= 360, o10 /= 100;
  let a10 = 0, l10 = 0, s10 = 0;
  if (r3 /= 100) {
    let e11 = o10 < 0.5 ? o10 * (1 + r3) : o10 + r3 - o10 * r3, i11 = 2 * o10 - e11;
    a10 = yJ(i11, e11, t10 + 1 / 3), l10 = yJ(i11, e11, t10), s10 = yJ(i11, e11, t10 - 1 / 3);
  } else
    a10 = l10 = s10 = o10;
  return { red: Math.round(255 * a10), green: Math.round(255 * l10), blue: Math.round(255 * s10), alpha: i10 };
}
let y0 = (e10, t10, r3) => {
  let o10 = e10 * e10;
  return Math.sqrt(Math.max(0, r3 * (t10 * t10 - o10) + o10));
}, y1 = [yq, yW, yB], y2 = (e10) => y1.find((t10) => t10.test(e10)), y4 = (e10, t10) => {
  let r3 = y2(e10), o10 = y2(t10), i10 = r3.parse(e10), a10 = o10.parse(t10);
  r3 === yB && (i10 = yQ(i10), r3 = yW), o10 === yB && (a10 = yQ(a10), o10 = yW);
  let l10 = Object.assign({}, i10);
  return (e11) => {
    for (let t11 in l10)
      "alpha" !== t11 && (l10[t11] = y0(i10[t11], a10[t11], e11));
    return l10.alpha = yM(i10.alpha, a10.alpha, e11), r3.transform(l10);
  };
}, y3 = (e10) => "number" == typeof e10, y5 = (e10, t10) => (r3) => t10(e10(r3)), y6 = function() {
  for (var e10 = arguments.length, t10 = Array(e10), r3 = 0; r3 < e10; r3++)
    t10[r3] = arguments[r3];
  return t10.reduce(y5);
};
function y8(e10, t10) {
  return y3(e10) ? (r3) => yM(e10, t10, r3) : yG.test(e10) ? y4(e10, t10) : bt(e10, t10);
}
let y9 = (e10, t10) => {
  let r3 = [...e10], o10 = r3.length, i10 = e10.map((e11, r10) => y8(e11, t10[r10]));
  return (e11) => {
    for (let t11 = 0; t11 < o10; t11++)
      r3[t11] = i10[t11](e11);
    return r3;
  };
}, y7 = (e10, t10) => {
  let r3 = Object.assign(Object.assign({}, e10), t10), o10 = {};
  for (let i10 in r3)
    void 0 !== e10[i10] && void 0 !== t10[i10] && (o10[i10] = y8(e10[i10], t10[i10]));
  return (e11) => {
    for (let t11 in o10)
      r3[t11] = o10[t11](e11);
    return r3;
  };
};
function be(e10) {
  let t10 = yZ(e10).values, r3 = t10.length, o10 = 0, i10 = 0, a10 = 0;
  for (let e11 = 0; e11 < r3; e11++)
    o10 || "number" == typeof t10[e11] ? o10++ : void 0 !== t10[e11].hue ? a10++ : i10++;
  return { parsed: t10, numNumbers: o10, numRGB: i10, numHSL: a10 };
}
let bt = (e10, t10) => {
  let r3 = yX(t10), o10 = be(e10), i10 = be(t10);
  return o10.numHSL === i10.numHSL && o10.numRGB === i10.numRGB && o10.numNumbers >= i10.numNumbers ? y6(y9(o10.parsed, i10.parsed), r3) : (r10) => `${r10 > 0 ? t10 : e10}`;
}, br = (e10, t10) => (r3) => yM(e10, t10, r3);
function bn(e10, t10) {
  let { clamp: r3 = true, ease: o10, mixer: i10 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a10 = e10.length;
  yw(a10 === t10.length), yw(!o10 || !Array.isArray(o10) || o10.length === a10 - 1), e10[0] > e10[a10 - 1] && (e10 = [].concat(e10), t10 = [].concat(t10), e10.reverse(), t10.reverse());
  let l10 = function(e11, t11, r10) {
    var o11;
    let i11 = [], a11 = r10 || ("number" == typeof (o11 = e11[0]) ? br : "string" == typeof o11 ? yG.test(o11) ? y4 : bt : Array.isArray(o11) ? y9 : "object" == typeof o11 ? y7 : void 0), l11 = e11.length - 1;
    for (let r11 = 0; r11 < l11; r11++) {
      let o12 = a11(e11[r11], e11[r11 + 1]);
      t11 && (o12 = y6(Array.isArray(t11) ? t11[r11] : t11, o12)), i11.push(o12);
    }
    return i11;
  }(t10, o10, i10), s10 = 2 === a10 ? function(e11, t11) {
    let [r10, o11] = e11, [i11] = t11;
    return (e12) => i11(yP(r10, o11, e12));
  }(e10, l10) : function(e11, t11) {
    let r10 = e11.length, o11 = r10 - 1;
    return (i11) => {
      let a11 = 0, l11 = false;
      if (i11 <= e11[0] ? l11 = true : i11 >= e11[o11] && (a11 = o11 - 1, l11 = true), !l11) {
        let t12 = 1;
        for (; t12 < r10 && !(e11[t12] > i11) && t12 !== o11; t12++)
          ;
        a11 = t12 - 1;
      }
      let s11 = yP(e11[a11], e11[a11 + 1], i11);
      return t11[a11](s11);
    };
  }(e10, l10);
  return r3 ? (t11) => s10(yx(e10[0], e10[a10 - 1], t11)) : s10;
}
let bo = (e10) => e10, bi = (s = (e10) => Math.pow(e10, 2), (e10) => e10 <= 0.5 ? s(2 * e10) / 2 : (2 - s(2 * (1 - e10))) / 2);
function ba(e10) {
  let { from: t10 = 0, to: r3 = 1, ease: o10, offset: i10, duration: a10 = 300 } = e10, l10 = { done: false, value: t10 }, s10 = Array.isArray(r3) ? r3 : [t10, r3], u10 = (i10 && i10.length === s10.length ? i10 : function(e11) {
    let t11 = e11.length;
    return e11.map((e12, r10) => 0 !== r10 ? r10 / (t11 - 1) : 0);
  }(s10)).map((e11) => e11 * a10);
  function c10() {
    return bn(u10, s10, { ease: Array.isArray(o10) ? o10 : s10.map(() => o10 || bi).splice(0, s10.length - 1) });
  }
  let f10 = c10();
  return { next: (e11) => (l10.value = f10(e11), l10.done = e11 >= a10, l10), flipTarget: () => {
    s10.reverse(), f10 = c10();
  } };
}
let bl = { keyframes: ba, spring: yE, decay: function(e10) {
  let { velocity: t10 = 0, from: r3 = 0, power: o10 = 0.8, timeConstant: i10 = 350, restDelta: a10 = 0.5, modifyTarget: l10 } = e10, s10 = { done: false, value: r3 }, u10 = o10 * t10, c10 = r3 + u10, f10 = void 0 === l10 ? c10 : l10(c10);
  return f10 !== c10 && (u10 = f10 - r3), { next: (e11) => {
    let t11 = -u10 * Math.exp(-e11 / i10);
    return s10.done = !(t11 > a10 || t11 < -a10), s10.value = s10.done ? f10 : f10 + t11, s10;
  }, flipTarget: () => {
  } };
} }, bs = 1 / 60 * 1e3, bu = "undefined" != typeof performance ? () => performance.now() : () => Date.now(), bc = "undefined" != typeof window ? (e10) => window.requestAnimationFrame(e10) : (e10) => setTimeout(() => e10(bu()), bs), bf = true, bd = false, bp = false, bh = { delta: 0, timestamp: 0 }, bm = ["read", "update", "preRender", "render", "postRender"], bv = bm.reduce((e10, t10) => (e10[t10] = /* @__PURE__ */ function(e11) {
  let t11 = [], r3 = [], o10 = 0, i10 = false, a10 = false, l10 = /* @__PURE__ */ new WeakSet(), s10 = { schedule: function(e12) {
    let a11 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], s11 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], u10 = s11 && i10, c10 = u10 ? t11 : r3;
    return a11 && l10.add(e12), -1 === c10.indexOf(e12) && (c10.push(e12), u10 && i10 && (o10 = t11.length)), e12;
  }, cancel: (e12) => {
    let t12 = r3.indexOf(e12);
    -1 !== t12 && r3.splice(t12, 1), l10.delete(e12);
  }, process: (u10) => {
    if (i10) {
      a10 = true;
      return;
    }
    if (i10 = true, [t11, r3] = [r3, t11], r3.length = 0, o10 = t11.length)
      for (let r10 = 0; r10 < o10; r10++) {
        let o11 = t11[r10];
        o11(u10), l10.has(o11) && (s10.schedule(o11), e11());
      }
    i10 = false, a10 && (a10 = false, s10.process(u10));
  } };
  return s10;
}(() => bd = true), e10), {}), bg = bm.reduce((e10, t10) => {
  let r3 = bv[t10];
  return e10[t10] = function(e11) {
    let t11 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], o10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return bd || bw(), r3.schedule(e11, t11, o10);
  }, e10;
}, {}), by = bm.reduce((e10, t10) => (e10[t10] = bv[t10].cancel, e10), {});
bm.reduce((e10, t10) => (e10[t10] = () => bv[t10].process(bh), e10), {});
let bb = (e10) => bv[e10].process(bh), b_ = (e10) => {
  bd = false, bh.delta = bf ? bs : Math.max(Math.min(e10 - bh.timestamp, 40), 1), bh.timestamp = e10, bp = true, bm.forEach(bb), bp = false, bd && (bf = false, bc(b_));
}, bw = () => {
  bd = true, bf = true, bp || bc(b_);
};
function bx(e10, t10) {
  let r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
  return e10 - t10 - r3;
}
let bk = (e10) => {
  let t10 = (t11) => {
    let { delta: r3 } = t11;
    return e10(r3);
  };
  return { start: () => bg.update(t10, true), stop: () => by.update(t10) };
};
function bS(e10) {
  let t10, r3, o10;
  var i10, { from: a10, autoplay: l10 = true, driver: s10 = bk, elapsed: u10 = 0, repeat: c10 = 0, repeatType: f10 = "loop", repeatDelay: d10 = 0, onPlay: p10, onStop: h10, onComplete: m10, onRepeat: g10, onUpdate: y10 } = e10, b10 = y_(e10, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
  let { to: _10 } = b10, w10 = 0, x6 = b10.duration, k2 = false, S2 = true, O2 = function(e11) {
    if (Array.isArray(e11.to))
      return ba;
    if (bl[e11.type])
      return bl[e11.type];
    let t11 = new Set(Object.keys(e11));
    if (t11.has("ease") || t11.has("duration") && !t11.has("dampingRatio"))
      ;
    else if (t11.has("dampingRatio") || t11.has("stiffness") || t11.has("mass") || t11.has("damping") || t11.has("restSpeed") || t11.has("restDelta"))
      return yE;
    return ba;
  }(b10);
  (null === (i10 = O2.needsInterpolation) || void 0 === i10 ? void 0 : i10.call(O2, a10, _10)) && (o10 = bn([0, 100], [a10, _10], { clamp: false }), a10 = 0, _10 = 100);
  let C2 = O2(Object.assign(Object.assign({}, b10), { from: a10, to: _10 }));
  return l10 && (null == p10 || p10(), (t10 = s10(function(e11) {
    if (S2 || (e11 = -e11), u10 += e11, !k2) {
      let e12 = C2.next(Math.max(0, u10));
      r3 = e12.value, o10 && (r3 = o10(r3)), k2 = S2 ? e12.done : u10 <= 0;
    }
    if (null == y10 || y10(r3), k2) {
      if (0 === w10 && (null != x6 || (x6 = u10)), w10 < c10) {
        var i11, a11;
        i11 = u10, a11 = x6, (S2 ? i11 >= a11 + d10 : i11 <= -d10) && (w10++, "reverse" === f10 ? u10 = function(e12, t11) {
          let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o11 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
          return o11 ? bx(t11 + -e12, t11, r10) : t11 - (e12 - t11) + r10;
        }(u10, x6, d10, S2 = w10 % 2 == 0) : (u10 = bx(u10, x6, d10), "mirror" === f10 && C2.flipTarget()), k2 = false, g10 && g10());
      } else
        t10.stop(), m10 && m10();
    }
  })).start()), { stop: () => {
    null == h10 || h10(), t10.stop();
  } };
}
let bO = (e10, t10) => 1 - 3 * t10 + 3 * e10, bC = (e10, t10) => 3 * t10 - 6 * e10, bE = (e10) => 3 * e10, bA = (e10, t10, r3) => ((bO(t10, r3) * e10 + bC(t10, r3)) * e10 + bE(t10)) * e10, bP = (e10, t10, r3) => 3 * bO(t10, r3) * e10 * e10 + 2 * bC(t10, r3) * e10 + bE(t10);
var bM = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, bj = /[A-Z]|^ms/g, bR = /_EMO_([^_]+?)_([^]*?)_EMO_/g, bT = function(e10) {
  return 45 === e10.charCodeAt(1);
}, bI = function(e10) {
  return null != e10 && "boolean" != typeof e10;
}, b$ = (A = function(e10) {
  return bT(e10) ? e10 : e10.replace(bj, "-$&").toLowerCase();
}, P = /* @__PURE__ */ Object.create(null), function(e10) {
  return void 0 === P[e10] && (P[e10] = A(e10)), P[e10];
}), bD = function(e10, t10) {
  switch (e10) {
    case "animation":
    case "animationName":
      if ("string" == typeof t10)
        return t10.replace(bR, function(e11, t11, r3) {
          return Q = { name: t11, styles: r3, next: Q }, t11;
        });
  }
  return 1 === bM[e10] || bT(e10) || "number" != typeof t10 || 0 === t10 ? t10 : t10 + "px";
};
function bL(e10, t10, r3) {
  if (null == r3)
    return "";
  if (void 0 !== r3.__emotion_styles)
    return r3;
  switch (typeof r3) {
    case "boolean":
      return "";
    case "object":
      if (1 === r3.anim)
        return Q = { name: r3.name, styles: r3.styles, next: Q }, r3.name;
      if (void 0 !== r3.styles) {
        var o10 = r3.next;
        if (void 0 !== o10)
          for (; void 0 !== o10; )
            Q = { name: o10.name, styles: o10.styles, next: Q }, o10 = o10.next;
        return r3.styles + ";";
      }
      return function(e11, t11, r10) {
        var o11 = "";
        if (Array.isArray(r10))
          for (var i11 = 0; i11 < r10.length; i11++)
            o11 += bL(e11, t11, r10[i11]) + ";";
        else
          for (var a11 in r10) {
            var l11 = r10[a11];
            if ("object" != typeof l11)
              null != t11 && void 0 !== t11[l11] ? o11 += a11 + "{" + t11[l11] + "}" : bI(l11) && (o11 += b$(a11) + ":" + bD(a11, l11) + ";");
            else if (Array.isArray(l11) && "string" == typeof l11[0] && (null == t11 || void 0 === t11[l11[0]]))
              for (var s10 = 0; s10 < l11.length; s10++)
                bI(l11[s10]) && (o11 += b$(a11) + ":" + bD(a11, l11[s10]) + ";");
            else {
              var u10 = bL(e11, t11, l11);
              switch (a11) {
                case "animation":
                case "animationName":
                  o11 += b$(a11) + ":" + u10 + ";";
                  break;
                default:
                  o11 += a11 + "{" + u10 + "}";
              }
            }
          }
        return o11;
      }(e10, t10, r3);
    case "function":
      if (void 0 !== e10) {
        var i10 = Q, a10 = r3(e10);
        return Q = i10, bL(e10, t10, a10);
      }
  }
  if (null == t10)
    return r3;
  var l10 = t10[r3];
  return void 0 !== l10 ? l10 : r3;
}
var bF = /label:\s*([^\s;\n{]+)\s*(;|$)/g, bV = function(e10, t10, r3) {
  if (1 === e10.length && "object" == typeof e10[0] && null !== e10[0] && void 0 !== e10[0].styles)
    return e10[0];
  var o10, i10 = true, a10 = "";
  Q = void 0;
  var l10 = e10[0];
  null == l10 || void 0 === l10.raw ? (i10 = false, a10 += bL(r3, t10, l10)) : a10 += l10[0];
  for (var s10 = 1; s10 < e10.length; s10++)
    a10 += bL(r3, t10, e10[s10]), i10 && (a10 += l10[s10]);
  bF.lastIndex = 0;
  for (var u10 = ""; null !== (o10 = bF.exec(a10)); )
    u10 += "-" + o10[1];
  return { name: function(e11) {
    for (var t11, r10 = 0, o11 = 0, i11 = e11.length; i11 >= 4; ++o11, i11 -= 4)
      t11 = (65535 & (t11 = 255 & e11.charCodeAt(o11) | (255 & e11.charCodeAt(++o11)) << 8 | (255 & e11.charCodeAt(++o11)) << 16 | (255 & e11.charCodeAt(++o11)) << 24)) * 1540483477 + ((t11 >>> 16) * 59797 << 16), t11 ^= t11 >>> 24, r10 = (65535 & t11) * 1540483477 + ((t11 >>> 16) * 59797 << 16) ^ (65535 & r10) * 1540483477 + ((r10 >>> 16) * 59797 << 16);
    switch (i11) {
      case 3:
        r10 ^= (255 & e11.charCodeAt(o11 + 2)) << 16;
      case 2:
        r10 ^= (255 & e11.charCodeAt(o11 + 1)) << 8;
      case 1:
        r10 ^= 255 & e11.charCodeAt(o11), r10 = (65535 & r10) * 1540483477 + ((r10 >>> 16) * 59797 << 16);
    }
    return r10 ^= r10 >>> 13, (((r10 = (65535 & r10) * 1540483477 + ((r10 >>> 16) * 59797 << 16)) ^ r10 >>> 15) >>> 0).toString(36);
  }(a10) + u10, styles: a10, next: Q };
};
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function bz(e10) {
  return e10 < 0 ? -1 : 0 === e10 ? 0 : 1;
}
function bN(e10, t10, r3) {
  return r3 < e10 ? e10 : r3 > t10 ? t10 : r3;
}
function bB(e10, t10) {
  return [e10[0] * t10[0][0] + e10[1] * t10[0][1] + e10[2] * t10[0][2], e10[0] * t10[1][0] + e10[1] * t10[1][1] + e10[2] * t10[1][2], e10[0] * t10[2][0] + e10[1] * t10[2][1] + e10[2] * t10[2][2]];
}
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let bU = [[0.41233895, 0.35762064, 0.18051042], [0.2126, 0.7152, 0.0722], [0.01932141, 0.11916382, 0.95034478]], bH = [[3.2413774792388685, -1.5376652402851851, -0.49885366846268053], [-0.9691452513005321, 1.8758853451067872, 0.04156585616912061], [0.05562093689691305, -0.20395524564742123, 1.0571799111220335]], bW = [95.047, 100, 108.883];
function bq(e10, t10, r3) {
  return (-16777216 | (255 & e10) << 16 | (255 & t10) << 8 | 255 & r3) >>> 0;
}
function bG(e10) {
  return bq(bJ(e10[0]), bJ(e10[1]), bJ(e10[2]));
}
function bY(e10) {
  var t10;
  return 116 * bQ(bB([bX((t10 = e10) >> 16 & 255), bX(t10 >> 8 & 255), bX(255 & t10)], bU)[1] / 100) - 16;
}
function bK(e10) {
  return 100 * function(e11) {
    let t10 = e11 * e11 * e11;
    return t10 > 216 / 24389 ? t10 : (116 * e11 - 16) / (24389 / 27);
  }((e10 + 16) / 116);
}
function bZ(e10) {
  return 116 * bQ(e10 / 100) - 16;
}
function bX(e10) {
  let t10 = e10 / 255;
  return t10 <= 0.040449936 ? t10 / 12.92 * 100 : 100 * Math.pow((t10 + 0.055) / 1.055, 2.4);
}
function bJ(e10) {
  var t10;
  let r3 = e10 / 100;
  return (t10 = Math.round(255 * (r3 <= 31308e-7 ? 12.92 * r3 : 1.055 * Math.pow(r3, 1 / 2.4) - 0.055))) < 0 ? 0 : t10 > 255 ? 255 : t10;
}
function bQ(e10) {
  return e10 > 216 / 24389 ? Math.pow(e10, 1 / 3) : (24389 / 27 * e10 + 16) / 116;
}
class b0 {
  static make() {
    var e10, t10;
    let r3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bW, o10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200 / Math.PI * bK(50) / 100, i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50, a10 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2, l10 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], s10 = 0.401288 * r3[0] + 0.650173 * r3[1] + -0.051461 * r3[2], u10 = -0.250268 * r3[0] + 1.204414 * r3[1] + 0.045854 * r3[2], c10 = -2079e-6 * r3[0] + 0.048952 * r3[1] + 0.953127 * r3[2], f10 = 0.8 + a10 / 10, d10 = f10 >= 0.9 ? (1 - (e10 = (f10 - 0.9) * 10)) * 0.59 + 0.69 * e10 : (1 - (t10 = (f10 - 0.8) * 10)) * 0.525 + 0.59 * t10, p10 = l10 ? 1 : f10 * (1 - 1 / 3.6 * Math.exp((-o10 - 42) / 92)), h10 = [100 / s10 * (p10 = p10 > 1 ? 1 : p10 < 0 ? 0 : p10) + 1 - p10, 100 / u10 * p10 + 1 - p10, 100 / c10 * p10 + 1 - p10], m10 = 1 / (5 * o10 + 1), g10 = m10 * m10 * m10 * m10, y10 = 1 - g10, b10 = g10 * o10 + 0.1 * y10 * y10 * Math.cbrt(5 * o10), _10 = bK(i10) / r3[1], w10 = 1.48 + Math.sqrt(_10), x6 = 0.725 / Math.pow(_10, 0.2), k2 = [Math.pow(b10 * h10[0] * s10 / 100, 0.42), Math.pow(b10 * h10[1] * u10 / 100, 0.42), Math.pow(b10 * h10[2] * c10 / 100, 0.42)], S2 = [400 * k2[0] / (k2[0] + 27.13), 400 * k2[1] / (k2[1] + 27.13), 400 * k2[2] / (k2[2] + 27.13)];
    return new b0(_10, (2 * S2[0] + S2[1] + 0.05 * S2[2]) * x6, x6, x6, d10, f10, h10, b10, Math.pow(b10, 0.25), w10);
  }
  constructor(e10, t10, r3, o10, i10, a10, l10, s10, u10, c10) {
    this.n = e10, this.aw = t10, this.nbb = r3, this.ncb = o10, this.c = i10, this.nc = a10, this.rgbD = l10, this.fl = s10, this.fLRoot = u10, this.z = c10;
  }
}
b0.DEFAULT = b0.make();
class b1 {
  constructor(e10, t10, r3, o10, i10, a10, l10, s10, u10) {
    this.hue = e10, this.chroma = t10, this.j = r3, this.q = o10, this.m = i10, this.s = a10, this.jstar = l10, this.astar = s10, this.bstar = u10;
  }
  distance(e10) {
    let t10 = this.jstar - e10.jstar, r3 = this.astar - e10.astar, o10 = this.bstar - e10.bstar;
    return 1.41 * Math.pow(Math.sqrt(t10 * t10 + r3 * r3 + o10 * o10), 0.63);
  }
  static fromInt(e10) {
    return b1.fromIntInViewingConditions(e10, b0.DEFAULT);
  }
  static fromIntInViewingConditions(e10, t10) {
    let r3 = bX((16711680 & e10) >> 16), o10 = bX((65280 & e10) >> 8), i10 = bX(255 & e10), a10 = 0.41233895 * r3 + 0.35762064 * o10 + 0.18051042 * i10, l10 = 0.2126 * r3 + 0.7152 * o10 + 0.0722 * i10, s10 = 0.01932141 * r3 + 0.11916382 * o10 + 0.95034478 * i10, u10 = t10.rgbD[0] * (0.401288 * a10 + 0.650173 * l10 - 0.051461 * s10), c10 = t10.rgbD[1] * (-0.250268 * a10 + 1.204414 * l10 + 0.045854 * s10), f10 = t10.rgbD[2] * (-2079e-6 * a10 + 0.048952 * l10 + 0.953127 * s10), d10 = Math.pow(t10.fl * Math.abs(u10) / 100, 0.42), p10 = Math.pow(t10.fl * Math.abs(c10) / 100, 0.42), h10 = Math.pow(t10.fl * Math.abs(f10) / 100, 0.42), m10 = 400 * bz(u10) * d10 / (d10 + 27.13), g10 = 400 * bz(c10) * p10 / (p10 + 27.13), y10 = 400 * bz(f10) * h10 / (h10 + 27.13), b10 = (11 * m10 + -12 * g10 + y10) / 11, _10 = (m10 + g10 - 2 * y10) / 9, w10 = 180 * Math.atan2(_10, b10) / Math.PI, x6 = w10 < 0 ? w10 + 360 : w10 >= 360 ? w10 - 360 : w10, k2 = x6 * Math.PI / 180, S2 = 100 * Math.pow((40 * m10 + 20 * g10 + y10) / 20 * t10.nbb / t10.aw, t10.c * t10.z), O2 = 4 / t10.c * Math.sqrt(S2 / 100) * (t10.aw + 4) * t10.fLRoot, C2 = Math.pow(5e4 / 13 * (0.25 * (Math.cos((x6 < 20.14 ? x6 + 360 : x6) * Math.PI / 180 + 2) + 3.8)) * t10.nc * t10.ncb * Math.sqrt(b10 * b10 + _10 * _10) / ((20 * m10 + 20 * g10 + 21 * y10) / 20 + 0.305), 0.9) * Math.pow(1.64 - Math.pow(0.29, t10.n), 0.73), E2 = C2 * Math.sqrt(S2 / 100), A2 = E2 * t10.fLRoot, P2 = 50 * Math.sqrt(C2 * t10.c / (t10.aw + 4)), M2 = 1 / 0.0228 * Math.log(1 + 0.0228 * A2);
    return new b1(x6, E2, S2, O2, A2, P2, (1 + 100 * 7e-3) * S2 / (1 + 7e-3 * S2), M2 * Math.cos(k2), M2 * Math.sin(k2));
  }
  static fromJch(e10, t10, r3) {
    return b1.fromJchInViewingConditions(e10, t10, r3, b0.DEFAULT);
  }
  static fromJchInViewingConditions(e10, t10, r3, o10) {
    let i10 = 4 / o10.c * Math.sqrt(e10 / 100) * (o10.aw + 4) * o10.fLRoot, a10 = t10 * o10.fLRoot, l10 = 50 * Math.sqrt(t10 / Math.sqrt(e10 / 100) * o10.c / (o10.aw + 4)), s10 = r3 * Math.PI / 180, u10 = 1 / 0.0228 * Math.log(1 + 0.0228 * a10);
    return new b1(r3, t10, e10, i10, a10, l10, (1 + 100 * 7e-3) * e10 / (1 + 7e-3 * e10), u10 * Math.cos(s10), u10 * Math.sin(s10));
  }
  static fromUcs(e10, t10, r3) {
    return b1.fromUcsInViewingConditions(e10, t10, r3, b0.DEFAULT);
  }
  static fromUcsInViewingConditions(e10, t10, r3, o10) {
    let i10 = (Math.exp(0.0228 * Math.sqrt(t10 * t10 + r3 * r3)) - 1) / 0.0228 / o10.fLRoot, a10 = 180 / Math.PI * Math.atan2(r3, t10);
    return a10 < 0 && (a10 += 360), b1.fromJchInViewingConditions(e10 / (1 - (e10 - 100) * 7e-3), i10, a10, o10);
  }
  toInt() {
    return this.viewed(b0.DEFAULT);
  }
  viewed(e10) {
    let t10 = Math.pow((0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100)) / Math.pow(1.64 - Math.pow(0.29, e10.n), 0.73), 1 / 0.9), r3 = this.hue * Math.PI / 180, o10 = e10.aw * Math.pow(this.j / 100, 1 / e10.c / e10.z), i10 = 5e4 / 13 * (0.25 * (Math.cos(r3 + 2) + 3.8)) * e10.nc * e10.ncb, a10 = o10 / e10.nbb, l10 = Math.sin(r3), s10 = Math.cos(r3), u10 = 23 * (a10 + 0.305) * t10 / (23 * i10 + 11 * t10 * s10 + 108 * t10 * l10), c10 = u10 * s10, f10 = u10 * l10, d10 = (460 * a10 + 451 * c10 + 288 * f10) / 1403, p10 = (460 * a10 - 891 * c10 - 261 * f10) / 1403, h10 = (460 * a10 - 220 * c10 - 6300 * f10) / 1403, m10 = Math.max(0, 27.13 * Math.abs(d10) / (400 - Math.abs(d10))), g10 = bz(d10) * (100 / e10.fl) * Math.pow(m10, 1 / 0.42), y10 = Math.max(0, 27.13 * Math.abs(p10) / (400 - Math.abs(p10))), b10 = bz(p10) * (100 / e10.fl) * Math.pow(y10, 1 / 0.42), _10 = Math.max(0, 27.13 * Math.abs(h10) / (400 - Math.abs(h10))), w10 = bz(h10) * (100 / e10.fl) * Math.pow(_10, 1 / 0.42), x6 = g10 / e10.rgbD[0], k2 = b10 / e10.rgbD[1], S2 = w10 / e10.rgbD[2];
    return function(e11, t11, r10) {
      let o11 = bH[0][0] * e11 + bH[0][1] * t11 + bH[0][2] * r10, i11 = bH[1][0] * e11 + bH[1][1] * t11 + bH[1][2] * r10, a11 = bH[2][0] * e11 + bH[2][1] * t11 + bH[2][2] * r10;
      return bq(bJ(o11), bJ(i11), bJ(a11));
    }(1.86206786 * x6 - 1.01125463 * k2 + 0.14918677 * S2, 0.38752654 * x6 + 0.62144744 * k2 - 897398e-8 * S2, -0.0158415 * x6 - 0.03412294 * k2 + 1.04996444 * S2);
  }
  static fromXyzInViewingConditions(e10, t10, r3, o10) {
    let i10 = o10.rgbD[0] * (0.401288 * e10 + 0.650173 * t10 - 0.051461 * r3), a10 = o10.rgbD[1] * (-0.250268 * e10 + 1.204414 * t10 + 0.045854 * r3), l10 = o10.rgbD[2] * (-2079e-6 * e10 + 0.048952 * t10 + 0.953127 * r3), s10 = Math.pow(o10.fl * Math.abs(i10) / 100, 0.42), u10 = Math.pow(o10.fl * Math.abs(a10) / 100, 0.42), c10 = Math.pow(o10.fl * Math.abs(l10) / 100, 0.42), f10 = 400 * bz(i10) * s10 / (s10 + 27.13), d10 = 400 * bz(a10) * u10 / (u10 + 27.13), p10 = 400 * bz(l10) * c10 / (c10 + 27.13), h10 = (11 * f10 + -12 * d10 + p10) / 11, m10 = (f10 + d10 - 2 * p10) / 9, g10 = 180 * Math.atan2(m10, h10) / Math.PI, y10 = g10 < 0 ? g10 + 360 : g10 >= 360 ? g10 - 360 : g10, b10 = y10 * Math.PI / 180, _10 = 100 * Math.pow((40 * f10 + 20 * d10 + p10) / 20 * o10.nbb / o10.aw, o10.c * o10.z), w10 = 4 / o10.c * Math.sqrt(_10 / 100) * (o10.aw + 4) * o10.fLRoot, x6 = Math.pow(5e4 / 13 * (0.25 * (Math.cos((y10 < 20.14 ? y10 + 360 : y10) * Math.PI / 180 + 2) + 3.8)) * o10.nc * o10.ncb * Math.sqrt(h10 * h10 + m10 * m10) / ((20 * f10 + 20 * d10 + 21 * p10) / 20 + 0.305), 0.9) * Math.pow(1.64 - Math.pow(0.29, o10.n), 0.73), k2 = x6 * Math.sqrt(_10 / 100), S2 = k2 * o10.fLRoot, O2 = 50 * Math.sqrt(x6 * o10.c / (o10.aw + 4)), C2 = Math.log(1 + 0.0228 * S2) / 0.0228;
    return new b1(y10, k2, _10, w10, S2, O2, (1 + 100 * 7e-3) * _10 / (1 + 7e-3 * _10), C2 * Math.cos(b10), C2 * Math.sin(b10));
  }
  xyzInViewingConditions(e10) {
    let t10 = Math.pow((0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100)) / Math.pow(1.64 - Math.pow(0.29, e10.n), 0.73), 1 / 0.9), r3 = this.hue * Math.PI / 180, o10 = e10.aw * Math.pow(this.j / 100, 1 / e10.c / e10.z), i10 = 5e4 / 13 * (0.25 * (Math.cos(r3 + 2) + 3.8)) * e10.nc * e10.ncb, a10 = o10 / e10.nbb, l10 = Math.sin(r3), s10 = Math.cos(r3), u10 = 23 * (a10 + 0.305) * t10 / (23 * i10 + 11 * t10 * s10 + 108 * t10 * l10), c10 = u10 * s10, f10 = u10 * l10, d10 = (460 * a10 + 451 * c10 + 288 * f10) / 1403, p10 = (460 * a10 - 891 * c10 - 261 * f10) / 1403, h10 = (460 * a10 - 220 * c10 - 6300 * f10) / 1403, m10 = Math.max(0, 27.13 * Math.abs(d10) / (400 - Math.abs(d10))), g10 = bz(d10) * (100 / e10.fl) * Math.pow(m10, 1 / 0.42), y10 = Math.max(0, 27.13 * Math.abs(p10) / (400 - Math.abs(p10))), b10 = bz(p10) * (100 / e10.fl) * Math.pow(y10, 1 / 0.42), _10 = Math.max(0, 27.13 * Math.abs(h10) / (400 - Math.abs(h10))), w10 = bz(h10) * (100 / e10.fl) * Math.pow(_10, 1 / 0.42), x6 = g10 / e10.rgbD[0], k2 = b10 / e10.rgbD[1], S2 = w10 / e10.rgbD[2];
    return [1.86206786 * x6 - 1.01125463 * k2 + 0.14918677 * S2, 0.38752654 * x6 + 0.62144744 * k2 - 897398e-8 * S2, -0.0158415 * x6 - 0.03412294 * k2 + 1.04996444 * S2];
  }
}
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class b2 {
  static sanitizeRadians(e10) {
    return (e10 + 8 * Math.PI) % (2 * Math.PI);
  }
  static trueDelinearized(e10) {
    let t10 = e10 / 100;
    return 255 * (t10 <= 31308e-7 ? 12.92 * t10 : 1.055 * Math.pow(t10, 1 / 2.4) - 0.055);
  }
  static chromaticAdaptation(e10) {
    let t10 = Math.pow(Math.abs(e10), 0.42);
    return 400 * bz(e10) * t10 / (t10 + 27.13);
  }
  static hueOf(e10) {
    let t10 = bB(e10, b2.SCALED_DISCOUNT_FROM_LINRGB), r3 = b2.chromaticAdaptation(t10[0]), o10 = b2.chromaticAdaptation(t10[1]), i10 = b2.chromaticAdaptation(t10[2]);
    return Math.atan2((r3 + o10 - 2 * i10) / 9, (11 * r3 + -12 * o10 + i10) / 11);
  }
  static areInCyclicOrder(e10, t10, r3) {
    return b2.sanitizeRadians(t10 - e10) < b2.sanitizeRadians(r3 - e10);
  }
  static intercept(e10, t10, r3) {
    return (t10 - e10) / (r3 - e10);
  }
  static lerpPoint(e10, t10, r3) {
    return [e10[0] + (r3[0] - e10[0]) * t10, e10[1] + (r3[1] - e10[1]) * t10, e10[2] + (r3[2] - e10[2]) * t10];
  }
  static setCoordinate(e10, t10, r3, o10) {
    let i10 = b2.intercept(e10[o10], t10, r3[o10]);
    return b2.lerpPoint(e10, i10, r3);
  }
  static isBounded(e10) {
    return 0 <= e10 && e10 <= 100;
  }
  static nthVertex(e10, t10) {
    let r3 = b2.Y_FROM_LINRGB[0], o10 = b2.Y_FROM_LINRGB[1], i10 = b2.Y_FROM_LINRGB[2], a10 = t10 % 4 <= 1 ? 0 : 100, l10 = t10 % 2 == 0 ? 0 : 100;
    if (t10 < 4) {
      let t11 = (e10 - a10 * o10 - l10 * i10) / r3;
      return b2.isBounded(t11) ? [t11, a10, l10] : [-1, -1, -1];
    }
    if (t10 < 8) {
      let t11 = (e10 - l10 * r3 - a10 * i10) / o10;
      return b2.isBounded(t11) ? [l10, t11, a10] : [-1, -1, -1];
    }
    {
      let t11 = (e10 - a10 * r3 - l10 * o10) / i10;
      return b2.isBounded(t11) ? [a10, l10, t11] : [-1, -1, -1];
    }
  }
  static bisectToSegment(e10, t10) {
    let r3 = [-1, -1, -1], o10 = r3, i10 = 0, a10 = 0, l10 = false, s10 = true;
    for (let u10 = 0; u10 < 12; u10++) {
      let c10 = b2.nthVertex(e10, u10);
      if (c10[0] < 0)
        continue;
      let f10 = b2.hueOf(c10);
      if (!l10) {
        r3 = c10, o10 = c10, i10 = f10, a10 = f10, l10 = true;
        continue;
      }
      (s10 || b2.areInCyclicOrder(i10, f10, a10)) && (s10 = false, b2.areInCyclicOrder(i10, t10, f10) ? (o10 = c10, a10 = f10) : (r3 = c10, i10 = f10));
    }
    return [r3, o10];
  }
  static midpoint(e10, t10) {
    return [(e10[0] + t10[0]) / 2, (e10[1] + t10[1]) / 2, (e10[2] + t10[2]) / 2];
  }
  static criticalPlaneBelow(e10) {
    return Math.floor(e10 - 0.5);
  }
  static criticalPlaneAbove(e10) {
    return Math.ceil(e10 - 0.5);
  }
  static bisectToLimit(e10, t10) {
    let r3 = b2.bisectToSegment(e10, t10), o10 = r3[0], i10 = b2.hueOf(o10), a10 = r3[1];
    for (let e11 = 0; e11 < 3; e11++)
      if (o10[e11] !== a10[e11]) {
        let r10 = -1, l10 = 255;
        o10[e11] < a10[e11] ? (r10 = b2.criticalPlaneBelow(b2.trueDelinearized(o10[e11])), l10 = b2.criticalPlaneAbove(b2.trueDelinearized(a10[e11]))) : (r10 = b2.criticalPlaneAbove(b2.trueDelinearized(o10[e11])), l10 = b2.criticalPlaneBelow(b2.trueDelinearized(a10[e11])));
        for (let s10 = 0; s10 < 8 && !(1 >= Math.abs(l10 - r10)); s10++) {
          let s11 = Math.floor((r10 + l10) / 2), u10 = b2.CRITICAL_PLANES[s11], c10 = b2.setCoordinate(o10, u10, a10, e11), f10 = b2.hueOf(c10);
          b2.areInCyclicOrder(i10, t10, f10) ? (a10 = c10, l10 = s11) : (o10 = c10, i10 = f10, r10 = s11);
        }
      }
    return b2.midpoint(o10, a10);
  }
  static inverseChromaticAdaptation(e10) {
    let t10 = Math.abs(e10);
    return bz(e10) * Math.pow(Math.max(0, 27.13 * t10 / (400 - t10)), 1 / 0.42);
  }
  static findResultByJ(e10, t10, r3) {
    let o10 = 11 * Math.sqrt(r3), i10 = b0.DEFAULT, a10 = 1 / Math.pow(1.64 - Math.pow(0.29, i10.n), 0.73), l10 = 5e4 / 13 * (0.25 * (Math.cos(e10 + 2) + 3.8)) * i10.nc * i10.ncb, s10 = Math.sin(e10), u10 = Math.cos(e10);
    for (let e11 = 0; e11 < 5; e11++) {
      let c10 = o10 / 100, f10 = Math.pow((0 === t10 || 0 === o10 ? 0 : t10 / Math.sqrt(c10)) * a10, 1 / 0.9), d10 = i10.aw * Math.pow(c10, 1 / i10.c / i10.z) / i10.nbb, p10 = 23 * (d10 + 0.305) * f10 / (23 * l10 + 11 * f10 * u10 + 108 * f10 * s10), h10 = p10 * u10, m10 = p10 * s10, g10 = (460 * d10 + 451 * h10 + 288 * m10) / 1403, y10 = (460 * d10 - 891 * h10 - 261 * m10) / 1403, b10 = (460 * d10 - 220 * h10 - 6300 * m10) / 1403, _10 = bB([b2.inverseChromaticAdaptation(g10), b2.inverseChromaticAdaptation(y10), b2.inverseChromaticAdaptation(b10)], b2.LINRGB_FROM_SCALED_DISCOUNT);
      if (_10[0] < 0 || _10[1] < 0 || _10[2] < 0)
        break;
      let w10 = b2.Y_FROM_LINRGB[0], x6 = b2.Y_FROM_LINRGB[1], k2 = b2.Y_FROM_LINRGB[2], S2 = w10 * _10[0] + x6 * _10[1] + k2 * _10[2];
      if (S2 <= 0)
        break;
      if (4 === e11 || 2e-3 > Math.abs(S2 - r3)) {
        if (_10[0] > 100.01 || _10[1] > 100.01 || _10[2] > 100.01)
          return 0;
        return bG(_10);
      }
      o10 -= (S2 - r3) * o10 / (2 * S2);
    }
    return 0;
  }
  static solveToInt(e10, t10, r3) {
    var o10;
    if (t10 < 1e-4 || r3 < 1e-4 || r3 > 99.9999)
      return function(e11) {
        let t11 = bJ(bK(e11));
        return bq(t11, t11, t11);
      }(r3);
    (o10 = e10 % 360) < 0 && (o10 += 360);
    let i10 = (e10 = o10) / 180 * Math.PI, a10 = bK(r3), l10 = b2.findResultByJ(i10, t10, a10);
    return 0 !== l10 ? l10 : bG(b2.bisectToLimit(a10, i10));
  }
  static solveToCam(e10, t10, r3) {
    return b1.fromInt(b2.solveToInt(e10, t10, r3));
  }
}
b2.SCALED_DISCOUNT_FROM_LINRGB = [[0.001200833568784504, 0.002389694492170889, 2795742885861124e-19], [5891086651375999e-19, 0.0029785502573438758, 3270666104008398e-19], [10146692491640572e-20, 5364214359186694e-19, 0.0032979401770712076]], b2.LINRGB_FROM_SCALED_DISCOUNT = [[1373.2198709594231, -1100.4251190754821, -7.278681089101213], [-271.815969077903, 559.6580465940733, -32.46047482791194], [1.9622899599665666, -57.173814538844006, 308.7233197812385]], b2.Y_FROM_LINRGB = [0.2126, 0.7152, 0.0722], b2.CRITICAL_PLANES = [0.015176349177441876, 0.045529047532325624, 0.07588174588720938, 0.10623444424209313, 0.13658714259697685, 0.16693984095186062, 0.19729253930674434, 0.2276452376616281, 0.2579979360165119, 0.28835063437139563, 0.3188300904430532, 0.350925934958123, 0.3848314933096426, 0.42057480301049466, 0.458183274052838, 0.4976837250274023, 0.5391024159806381, 0.5824650784040898, 0.6277969426914107, 0.6751227633498623, 0.7244668422128921, 0.775853049866786, 0.829304845476233, 0.8848452951698498, 0.942497089126609, 1.0022825574869039, 1.0642236851973577, 1.1283421258858297, 1.1946592148522128, 1.2631959812511864, 1.3339731595349034, 1.407011200216447, 1.4823302800086415, 1.5599503113873272, 1.6398909516233677, 1.7221716113234105, 1.8068114625156377, 1.8938294463134073, 1.9832442801866852, 2.075074464868551, 2.1693382909216234, 2.2660538449872063, 2.36523901573795, 2.4669114995532007, 2.5710888059345764, 2.6777882626779785, 2.7870270208169257, 2.898822059350997, 3.0131901897720907, 3.1301480604002863, 3.2497121605402226, 3.3718988244681087, 3.4967242352587946, 3.624204428461639, 3.754355295633311, 3.887192587735158, 4.022731918402185, 4.160988767090289, 4.301978482107941, 4.445716283538092, 4.592217266055746, 4.741496401646282, 4.893568542229298, 5.048448422192488, 5.20615066083972, 5.3666897647573375, 5.5300801301023865, 5.696336044816294, 5.865471690767354, 6.037501145825082, 6.212438385869475, 6.390297286737924, 6.571091626112461, 6.7548350853498045, 6.941541251256611, 7.131223617812143, 7.323895587840543, 7.5195704746346665, 7.7182615035334345, 7.919981813454504, 8.124744458384042, 8.332562408825165, 8.543448553206703, 8.757415699253682, 8.974476575321063, 9.194643831691977, 9.417930041841839, 9.644347703669503, 9.873909240696694, 10.106627003236781, 10.342513269534024, 10.58158024687427, 10.8238400726681, 11.069304815507364, 11.317986476196008, 11.569896988756009, 11.825048221409341, 12.083451977536606, 12.345119996613247, 12.610063955123938, 12.878295467455942, 13.149826086772048, 13.42466730586372, 13.702830557985108, 13.984327217668513, 14.269168601521828, 14.55736596900856, 14.848930523210871, 15.143873411576273, 15.44220572664832, 15.743938506781891, 16.04908273684337, 16.35764934889634, 16.66964922287304, 16.985093187232053, 17.30399201960269, 17.62635644741625, 17.95219714852476, 18.281524751807332, 18.614349837764564, 18.95068293910138, 19.290534541298456, 19.633915083172692, 19.98083495742689, 20.331304511189067, 20.685334046541502, 21.042933821039977, 21.404114048223256, 21.76888489811322, 22.137256497705877, 22.50923893145328, 22.884842241736916, 23.264076429332462, 23.6469514538663, 24.033477234264016, 24.42366364919083, 24.817520537484558, 25.21505769858089, 25.61628489293138, 26.021211842414342, 26.429848230738664, 26.842203703840827, 27.258287870275353, 27.678110301598522, 28.10168053274597, 28.529008062403893, 28.96010235337422, 29.39497283293396, 29.83362889318845, 30.276079891419332, 30.722335150426627, 31.172403958865512, 31.62629557157785, 32.08401920991837, 32.54558406207592, 33.010999283389665, 33.4802739966603, 33.953417292456834, 34.430438229418264, 34.911345834551085, 35.39614910352207, 35.88485700094671, 36.37747846067349, 36.87402238606382, 37.37449765026789, 37.87891309649659, 38.38727753828926, 38.89959975977785, 39.41588851594697, 39.93615253289054, 40.460400508064545, 40.98864111053629, 41.520882981230194, 42.05713473317016, 42.597404951718396, 43.141702194811224, 43.6900349931913, 44.24241185063697, 44.798841244188324, 45.35933162437017, 45.92389141541209, 46.49252901546552, 47.065252796817916, 47.64207110610409, 48.22299226451468, 48.808024568002054, 49.3971762874833, 49.9904556690408, 50.587870934119984, 51.189430279724725, 51.79514187861014, 52.40501387947288, 53.0190544071392, 53.637271562750364, 54.259673423945976, 54.88626804504493, 55.517063457223934, 56.15206766869424, 56.79128866487574, 57.43473440856916, 58.08241284012621, 58.734331877617365, 59.39049941699807, 60.05092333227251, 60.715611475655585, 61.38457167773311, 62.057811747619894, 62.7353394731159, 63.417162620860914, 64.10328893648692, 64.79372614476921, 65.48848194977529, 66.18756403501224, 66.89098006357258, 67.59873767827808, 68.31084450182222, 69.02730813691093, 69.74813616640164, 70.47333615344107, 71.20291564160104, 71.93688215501312, 72.67524319850172, 73.41800625771542, 74.16517879925733, 74.9167682708136, 75.67278210128072, 76.43322770089146, 77.1981124613393, 77.96744375590167, 78.74122893956174, 79.51947534912904, 80.30219030335869, 81.08938110306934, 81.88105503125999, 82.67721935322541, 83.4778813166706, 84.28304815182372, 85.09272707154808, 85.90692527145302, 86.72564993000343, 87.54890820862819, 88.3767072518277, 89.2090541872801, 90.04595612594655, 90.88742016217518, 91.73345337380438, 92.58406282226491, 93.43925555268066, 94.29903859396902, 95.16341895893969, 96.03240364439274, 96.9059996312159, 97.78421388448044, 98.6670533535366, 99.55452497210776];
class b4 {
  static from(e10, t10, r3) {
    return new b4(b2.solveToInt(e10, t10, r3));
  }
  static fromInt(e10) {
    return new b4(e10);
  }
  toInt() {
    return this.argb;
  }
  get hue() {
    return this.internalHue;
  }
  set hue(e10) {
    this.setInternalState(b2.solveToInt(e10, this.internalChroma, this.internalTone));
  }
  get chroma() {
    return this.internalChroma;
  }
  set chroma(e10) {
    this.setInternalState(b2.solveToInt(this.internalHue, e10, this.internalTone));
  }
  get tone() {
    return this.internalTone;
  }
  set tone(e10) {
    this.setInternalState(b2.solveToInt(this.internalHue, this.internalChroma, e10));
  }
  constructor(e10) {
    this.argb = e10;
    let t10 = b1.fromInt(e10);
    this.internalHue = t10.hue, this.internalChroma = t10.chroma, this.internalTone = bY(e10), this.argb = e10;
  }
  setInternalState(e10) {
    let t10 = b1.fromInt(e10);
    this.internalHue = t10.hue, this.internalChroma = t10.chroma, this.internalTone = bY(e10), this.argb = e10;
  }
  inViewingConditions(e10) {
    let t10 = b1.fromInt(this.toInt()).xyzInViewingConditions(e10), r3 = b1.fromXyzInViewingConditions(t10[0], t10[1], t10[2], b0.make());
    return b4.from(r3.hue, r3.chroma, bZ(t10[1]));
  }
}
/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class b3 {
  static ratioOfTones(e10, t10) {
    return e10 = bN(0, 100, e10), t10 = bN(0, 100, t10), b3.ratioOfYs(bK(e10), bK(t10));
  }
  static ratioOfYs(e10, t10) {
    let r3 = e10 > t10 ? e10 : t10;
    return (r3 + 5) / ((r3 === t10 ? e10 : t10) + 5);
  }
  static lighter(e10, t10) {
    if (e10 < 0 || e10 > 100)
      return -1;
    let r3 = bK(e10), o10 = t10 * (r3 + 5) - 5, i10 = b3.ratioOfYs(o10, r3);
    if (i10 < t10 && Math.abs(i10 - t10) > 0.04)
      return -1;
    let a10 = bZ(o10) + 0.4;
    return a10 < 0 || a10 > 100 ? -1 : a10;
  }
  static darker(e10, t10) {
    if (e10 < 0 || e10 > 100)
      return -1;
    let r3 = bK(e10), o10 = (r3 + 5) / t10 - 5, i10 = b3.ratioOfYs(r3, o10);
    if (i10 < t10 && Math.abs(i10 - t10) > 0.04)
      return -1;
    let a10 = bZ(o10) - 0.4;
    return a10 < 0 || a10 > 100 ? -1 : a10;
  }
  static lighterUnsafe(e10, t10) {
    let r3 = b3.lighter(e10, t10);
    return r3 < 0 ? 100 : r3;
  }
  static darkerUnsafe(e10, t10) {
    let r3 = b3.darker(e10, t10);
    return r3 < 0 ? 0 : r3;
  }
}
class b5 {
  static isDisliked(e10) {
    let t10 = Math.round(e10.hue) >= 90 && 111 >= Math.round(e10.hue), r3 = Math.round(e10.chroma) > 16, o10 = 65 > Math.round(e10.tone);
    return t10 && r3 && o10;
  }
  static fixIfDisliked(e10) {
    return b5.isDisliked(e10) ? b4.from(e10.hue, e10.chroma, 70) : e10;
  }
}
class b6 {
  static fromPalette(e10) {
    var t10, r3;
    return new b6(null !== (t10 = e10.name) && void 0 !== t10 ? t10 : "", e10.palette, e10.tone, null !== (r3 = e10.isBackground) && void 0 !== r3 && r3, e10.background, e10.secondBackground, e10.contrastCurve, e10.toneDeltaPair);
  }
  constructor(e10, t10, r3, o10, i10, a10, l10, s10) {
    if (this.name = e10, this.palette = t10, this.tone = r3, this.isBackground = o10, this.background = i10, this.secondBackground = a10, this.contrastCurve = l10, this.toneDeltaPair = s10, this.hctCache = /* @__PURE__ */ new Map(), !i10 && a10)
      throw Error(`Color ${e10} has secondBackgrounddefined, but background is not defined.`);
    if (!i10 && l10)
      throw Error(`Color ${e10} has contrastCurvedefined, but background is not defined.`);
    if (i10 && !l10)
      throw Error(`Color ${e10} has backgrounddefined, but contrastCurve is not defined.`);
  }
  getArgb(e10) {
    return this.getHct(e10).toInt();
  }
  getHct(e10) {
    let t10 = this.hctCache.get(e10);
    if (null != t10)
      return t10;
    let r3 = this.getTone(e10), o10 = this.palette(e10).getHct(r3);
    return this.hctCache.size > 4 && this.hctCache.clear(), this.hctCache.set(e10, o10), o10;
  }
  getTone(e10) {
    let t10 = e10.contrastLevel < 0;
    if (this.toneDeltaPair) {
      let r3 = this.toneDeltaPair(e10), o10 = r3.roleA, i10 = r3.roleB, a10 = r3.delta, l10 = r3.polarity, s10 = r3.stayTogether, u10 = this.background(e10).getTone(e10), c10 = "nearer" === l10 || "lighter" === l10 && !e10.isDark || "darker" === l10 && e10.isDark, f10 = c10 ? o10 : i10, d10 = c10 ? i10 : o10, p10 = this.name === f10.name, h10 = e10.isDark ? 1 : -1, m10 = f10.contrastCurve.getContrast(e10.contrastLevel), g10 = d10.contrastCurve.getContrast(e10.contrastLevel), y10 = f10.tone(e10), b10 = b3.ratioOfTones(u10, y10) >= m10 ? y10 : b6.foregroundTone(u10, m10), _10 = d10.tone(e10), w10 = b3.ratioOfTones(u10, _10) >= g10 ? _10 : b6.foregroundTone(u10, g10);
      return t10 && (b10 = b6.foregroundTone(u10, m10), w10 = b6.foregroundTone(u10, g10)), (w10 - b10) * h10 >= a10 || ((w10 = bN(0, 100, b10 + a10 * h10)) - b10) * h10 >= a10 || (b10 = bN(0, 100, w10 - a10 * h10)), 50 <= b10 && b10 < 60 ? w10 = h10 > 0 ? Math.max(w10, (b10 = 60) + a10 * h10) : Math.min(w10, (b10 = 49) + a10 * h10) : 50 <= w10 && w10 < 60 && (w10 = s10 ? h10 > 0 ? Math.max(w10, (b10 = 60) + a10 * h10) : Math.min(w10, (b10 = 49) + a10 * h10) : h10 > 0 ? 60 : 49), p10 ? b10 : w10;
    }
    {
      let r3 = this.tone(e10);
      if (null == this.background)
        return r3;
      let o10 = this.background(e10).getTone(e10), i10 = this.contrastCurve.getContrast(e10.contrastLevel);
      if (b3.ratioOfTones(o10, r3) >= i10 || (r3 = b6.foregroundTone(o10, i10)), t10 && (r3 = b6.foregroundTone(o10, i10)), this.isBackground && 50 <= r3 && r3 < 60 && (r3 = b3.ratioOfTones(49, o10) >= i10 ? 49 : 60), this.secondBackground) {
        let [t11, o11] = [this.background, this.secondBackground], [a10, l10] = [t11(e10).getTone(e10), o11(e10).getTone(e10)], [s10, u10] = [Math.max(a10, l10), Math.min(a10, l10)];
        if (b3.ratioOfTones(s10, r3) >= i10 && b3.ratioOfTones(u10, r3) >= i10)
          return r3;
        let c10 = b3.lighter(s10, i10), f10 = b3.darker(u10, i10), d10 = [];
        return (-1 !== c10 && d10.push(c10), -1 !== f10 && d10.push(f10), b6.tonePrefersLightForeground(a10) || b6.tonePrefersLightForeground(l10)) ? c10 < 0 ? 100 : c10 : 1 === d10.length ? d10[0] : f10 < 0 ? 0 : f10;
      }
      return r3;
    }
  }
  static foregroundTone(e10, t10) {
    let r3 = b3.lighterUnsafe(e10, t10), o10 = b3.darkerUnsafe(e10, t10), i10 = b3.ratioOfTones(r3, e10), a10 = b3.ratioOfTones(o10, e10);
    if (!b6.tonePrefersLightForeground(e10))
      return a10 >= t10 || a10 >= i10 ? o10 : r3;
    {
      let e11 = 0.1 > Math.abs(i10 - a10) && i10 < t10 && a10 < t10;
      return i10 >= t10 || i10 >= a10 || e11 ? r3 : o10;
    }
  }
  static tonePrefersLightForeground(e10) {
    return 60 > Math.round(e10);
  }
  static toneAllowsLightForeground(e10) {
    return 49 >= Math.round(e10);
  }
  static enableLightForeground(e10) {
    return b6.tonePrefersLightForeground(e10) && !b6.toneAllowsLightForeground(e10) ? 49 : e10;
  }
}
(M = ee || (ee = {}))[M.MONOCHROME = 0] = "MONOCHROME", M[M.NEUTRAL = 1] = "NEUTRAL", M[M.TONAL_SPOT = 2] = "TONAL_SPOT", M[M.VIBRANT = 3] = "VIBRANT", M[M.EXPRESSIVE = 4] = "EXPRESSIVE", M[M.FIDELITY = 5] = "FIDELITY", M[M.CONTENT = 6] = "CONTENT", M[M.RAINBOW = 7] = "RAINBOW", M[M.FRUIT_SALAD = 8] = "FRUIT_SALAD";
class b8 {
  constructor(e10, t10, r3, o10) {
    this.low = e10, this.normal = t10, this.medium = r3, this.high = o10;
  }
  getContrast(e10) {
    var t10, r3, o10, i10, a10, l10, s10, u10, c10;
    return e10 <= -1 ? this.low : e10 < 0 ? (t10 = this.low, r3 = this.normal, (1 - (o10 = (e10 - -1) / 1)) * t10 + o10 * r3) : e10 < 0.5 ? (i10 = this.normal, a10 = this.medium, (1 - (l10 = (e10 - 0) / 0.5)) * i10 + l10 * a10) : e10 < 1 ? (s10 = this.medium, u10 = this.high, (1 - (c10 = (e10 - 0.5) / 0.5)) * s10 + c10 * u10) : this.high;
  }
}
/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class b9 {
  constructor(e10, t10, r3, o10, i10) {
    this.roleA = e10, this.roleB = t10, this.delta = r3, this.polarity = o10, this.stayTogether = i10;
  }
}
function b7(e10) {
  return e10.variant === ee.FIDELITY || e10.variant === ee.CONTENT;
}
function _e(e10) {
  return e10.variant === ee.MONOCHROME;
}
function _t(e10, t10) {
  let r3 = e10.inViewingConditions(b0.make(void 0, void 0, t10.isDark ? 30 : 80, void 0, void 0));
  return b6.tonePrefersLightForeground(e10.tone) && !b6.toneAllowsLightForeground(r3.tone) ? b6.enableLightForeground(e10.tone) : b6.enableLightForeground(r3.tone);
}
class _r {
  static highestSurface(e10) {
    return e10.isDark ? _r.surfaceBright : _r.surfaceDim;
  }
}
_r.contentAccentToneDelta = 15, _r.primaryPaletteKeyColor = b6.fromPalette({ name: "primary_palette_key_color", palette: (e10) => e10.primaryPalette, tone: (e10) => e10.primaryPalette.keyColor.tone }), _r.secondaryPaletteKeyColor = b6.fromPalette({ name: "secondary_palette_key_color", palette: (e10) => e10.secondaryPalette, tone: (e10) => e10.secondaryPalette.keyColor.tone }), _r.tertiaryPaletteKeyColor = b6.fromPalette({ name: "tertiary_palette_key_color", palette: (e10) => e10.tertiaryPalette, tone: (e10) => e10.tertiaryPalette.keyColor.tone }), _r.neutralPaletteKeyColor = b6.fromPalette({ name: "neutral_palette_key_color", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.neutralPalette.keyColor.tone }), _r.neutralVariantPaletteKeyColor = b6.fromPalette({ name: "neutral_variant_palette_key_color", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.neutralVariantPalette.keyColor.tone }), _r.background = b6.fromPalette({ name: "background", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 6 : 98, isBackground: true }), _r.onBackground = b6.fromPalette({ name: "on_background", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 90 : 10, background: (e10) => _r.background, contrastCurve: new b8(3, 3, 4.5, 7) }), _r.surface = b6.fromPalette({ name: "surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 6 : 98, isBackground: true }), _r.surfaceDim = b6.fromPalette({ name: "surface_dim", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 6 : 87, isBackground: true }), _r.surfaceBright = b6.fromPalette({ name: "surface_bright", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 24 : 98, isBackground: true }), _r.surfaceContainerLowest = b6.fromPalette({ name: "surface_container_lowest", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 4 : 100, isBackground: true }), _r.surfaceContainerLow = b6.fromPalette({ name: "surface_container_low", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 10 : 96, isBackground: true }), _r.surfaceContainer = b6.fromPalette({ name: "surface_container", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 12 : 94, isBackground: true }), _r.surfaceContainerHigh = b6.fromPalette({ name: "surface_container_high", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 17 : 92, isBackground: true }), _r.surfaceContainerHighest = b6.fromPalette({ name: "surface_container_highest", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 22 : 90, isBackground: true }), _r.onSurface = b6.fromPalette({ name: "on_surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 90 : 10, background: (e10) => _r.highestSurface(e10), contrastCurve: new b8(4.5, 7, 11, 21) }), _r.surfaceVariant = b6.fromPalette({ name: "surface_variant", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 30 : 90, isBackground: true }), _r.onSurfaceVariant = b6.fromPalette({ name: "on_surface_variant", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 80 : 30, background: (e10) => _r.highestSurface(e10), contrastCurve: new b8(3, 4.5, 7, 11) }), _r.inverseSurface = b6.fromPalette({ name: "inverse_surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 90 : 20 }), _r.inverseOnSurface = b6.fromPalette({ name: "inverse_on_surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 20 : 95, background: (e10) => _r.inverseSurface, contrastCurve: new b8(4.5, 7, 11, 21) }), _r.outline = b6.fromPalette({ name: "outline", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 60 : 50, background: (e10) => _r.highestSurface(e10), contrastCurve: new b8(1.5, 3, 4.5, 7) }), _r.outlineVariant = b6.fromPalette({ name: "outline_variant", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 30 : 80, background: (e10) => _r.highestSurface(e10), contrastCurve: new b8(1, 1, 3, 7) }), _r.shadow = b6.fromPalette({ name: "shadow", palette: (e10) => e10.neutralPalette, tone: (e10) => 0 }), _r.scrim = b6.fromPalette({ name: "scrim", palette: (e10) => e10.neutralPalette, tone: (e10) => 0 }), _r.surfaceTint = b6.fromPalette({ name: "surface_tint", palette: (e10) => e10.primaryPalette, tone: (e10) => e10.isDark ? 80 : 40, isBackground: true }), _r.primary = b6.fromPalette({ name: "primary", palette: (e10) => e10.primaryPalette, tone: (e10) => _e(e10) ? e10.isDark ? 100 : 0 : e10.isDark ? 80 : 40, isBackground: true, background: (e10) => _r.highestSurface(e10), contrastCurve: new b8(3, 4.5, 7, 11), toneDeltaPair: (e10) => new b9(_r.primaryContainer, _r.primary, 15, "nearer", false) }), _r.onPrimary = b6.fromPalette({ name: "on_primary", palette: (e10) => e10.primaryPalette, tone: (e10) => _e(e10) ? e10.isDark ? 10 : 90 : e10.isDark ? 20 : 100, background: (e10) => _r.primary, contrastCurve: new b8(4.5, 7, 11, 21) }), _r.primaryContainer = b6.fromPalette({ name: "primary_container", palette: (e10) => e10.primaryPalette, tone: (e10) => b7(e10) ? _t(e10.sourceColorHct, e10) : _e(e10) ? e10.isDark ? 85 : 25 : e10.isDark ? 30 : 90, isBackground: true, background: (e10) => _r.highestSurface(e10), contrastCurve: new b8(1, 1, 3, 7), toneDeltaPair: (e10) => new b9(_r.primaryContainer, _r.primary, 15, "nearer", false) }), _r.onPrimaryContainer = b6.fromPalette({ name: "on_primary_container", palette: (e10) => e10.primaryPalette, tone: (e10) => b7(e10) ? b6.foregroundTone(_r.primaryContainer.tone(e10), 4.5) : _e(e10) ? e10.isDark ? 0 : 100 : e10.isDark ? 90 : 10, background: (e10) => _r.primaryContainer, contrastCurve: new b8(4.5, 7, 11, 21) }), _r.inversePrimary = b6.fromPalette({ name: "inverse_primary", palette: (e10) => e10.primaryPalette, tone: (e10) => e10.isDark ? 40 : 80, background: (e10) => _r.inverseSurface, contrastCurve: new b8(3, 4.5, 7, 11) }), _r.secondary = b6.fromPalette({ name: "secondary", palette: (e10) => e10.secondaryPalette, tone: (e10) => e10.isDark ? 80 : 40, isBackground: true, background: (e10) => _r.highestSurface(e10), contrastCurve: new b8(3, 4.5, 7, 11), toneDeltaPair: (e10) => new b9(_r.secondaryContainer, _r.secondary, 15, "nearer", false) }), _r.onSecondary = b6.fromPalette({ name: "on_secondary", palette: (e10) => e10.secondaryPalette, tone: (e10) => _e(e10) ? e10.isDark ? 10 : 100 : e10.isDark ? 20 : 100, background: (e10) => _r.secondary, contrastCurve: new b8(4.5, 7, 11, 21) }), _r.secondaryContainer = b6.fromPalette({ name: "secondary_container", palette: (e10) => e10.secondaryPalette, tone: (e10) => {
  let t10 = e10.isDark ? 30 : 90;
  if (_e(e10))
    return e10.isDark ? 30 : 85;
  if (!b7(e10))
    return t10;
  let r3 = function(e11, t11, r10, o10) {
    let i10 = r10, a10 = b4.from(e11, t11, r10);
    if (a10.chroma < t11) {
      let r11 = a10.chroma;
      for (; a10.chroma < t11; ) {
        i10 += o10 ? -1 : 1;
        let l10 = b4.from(e11, t11, i10);
        if (r11 > l10.chroma || 0.4 > Math.abs(l10.chroma - t11))
          break;
        Math.abs(l10.chroma - t11) < Math.abs(a10.chroma - t11) && (a10 = l10), r11 = Math.max(r11, l10.chroma);
      }
    }
    return i10;
  }(e10.secondaryPalette.hue, e10.secondaryPalette.chroma, t10, !e10.isDark);
  return _t(e10.secondaryPalette.getHct(r3), e10);
}, isBackground: true, background: (e10) => _r.highestSurface(e10), contrastCurve: new b8(1, 1, 3, 7), toneDeltaPair: (e10) => new b9(_r.secondaryContainer, _r.secondary, 15, "nearer", false) }), _r.onSecondaryContainer = b6.fromPalette({ name: "on_secondary_container", palette: (e10) => e10.secondaryPalette, tone: (e10) => b7(e10) ? b6.foregroundTone(_r.secondaryContainer.tone(e10), 4.5) : e10.isDark ? 90 : 10, background: (e10) => _r.secondaryContainer, contrastCurve: new b8(4.5, 7, 11, 21) }), _r.tertiary = b6.fromPalette({ name: "tertiary", palette: (e10) => e10.tertiaryPalette, tone: (e10) => _e(e10) ? e10.isDark ? 90 : 25 : e10.isDark ? 80 : 40, isBackground: true, background: (e10) => _r.highestSurface(e10), contrastCurve: new b8(3, 4.5, 7, 11), toneDeltaPair: (e10) => new b9(_r.tertiaryContainer, _r.tertiary, 15, "nearer", false) }), _r.onTertiary = b6.fromPalette({ name: "on_tertiary", palette: (e10) => e10.tertiaryPalette, tone: (e10) => _e(e10) ? e10.isDark ? 10 : 90 : e10.isDark ? 20 : 100, background: (e10) => _r.tertiary, contrastCurve: new b8(4.5, 7, 11, 21) }), _r.tertiaryContainer = b6.fromPalette({ name: "tertiary_container", palette: (e10) => e10.tertiaryPalette, tone: (e10) => {
  if (_e(e10))
    return e10.isDark ? 60 : 49;
  if (!b7(e10))
    return e10.isDark ? 30 : 90;
  let t10 = _t(e10.tertiaryPalette.getHct(e10.sourceColorHct.tone), e10), r3 = e10.tertiaryPalette.getHct(t10);
  return b5.fixIfDisliked(r3).tone;
}, isBackground: true, background: (e10) => _r.highestSurface(e10), contrastCurve: new b8(1, 1, 3, 7), toneDeltaPair: (e10) => new b9(_r.tertiaryContainer, _r.tertiary, 15, "nearer", false) }), _r.onTertiaryContainer = b6.fromPalette({ name: "on_tertiary_container", palette: (e10) => e10.tertiaryPalette, tone: (e10) => _e(e10) ? e10.isDark ? 0 : 100 : b7(e10) ? b6.foregroundTone(_r.tertiaryContainer.tone(e10), 4.5) : e10.isDark ? 90 : 10, background: (e10) => _r.tertiaryContainer, contrastCurve: new b8(4.5, 7, 11, 21) }), _r.error = b6.fromPalette({ name: "error", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 80 : 40, isBackground: true, background: (e10) => _r.highestSurface(e10), contrastCurve: new b8(3, 4.5, 7, 11), toneDeltaPair: (e10) => new b9(_r.errorContainer, _r.error, 15, "nearer", false) }), _r.onError = b6.fromPalette({ name: "on_error", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 20 : 100, background: (e10) => _r.error, contrastCurve: new b8(4.5, 7, 11, 21) }), _r.errorContainer = b6.fromPalette({ name: "error_container", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 30 : 90, isBackground: true, background: (e10) => _r.highestSurface(e10), contrastCurve: new b8(1, 1, 3, 7), toneDeltaPair: (e10) => new b9(_r.errorContainer, _r.error, 15, "nearer", false) }), _r.onErrorContainer = b6.fromPalette({ name: "on_error_container", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 90 : 10, background: (e10) => _r.errorContainer, contrastCurve: new b8(4.5, 7, 11, 21) }), _r.primaryFixed = b6.fromPalette({ name: "primary_fixed", palette: (e10) => e10.primaryPalette, tone: (e10) => _e(e10) ? 40 : 90, isBackground: true, background: (e10) => _r.highestSurface(e10), contrastCurve: new b8(1, 1, 3, 7), toneDeltaPair: (e10) => new b9(_r.primaryFixed, _r.primaryFixedDim, 10, "lighter", true) }), _r.primaryFixedDim = b6.fromPalette({ name: "primary_fixed_dim", palette: (e10) => e10.primaryPalette, tone: (e10) => _e(e10) ? 30 : 80, isBackground: true, background: (e10) => _r.highestSurface(e10), contrastCurve: new b8(1, 1, 3, 7), toneDeltaPair: (e10) => new b9(_r.primaryFixed, _r.primaryFixedDim, 10, "lighter", true) }), _r.onPrimaryFixed = b6.fromPalette({ name: "on_primary_fixed", palette: (e10) => e10.primaryPalette, tone: (e10) => _e(e10) ? 100 : 10, background: (e10) => _r.primaryFixedDim, secondBackground: (e10) => _r.primaryFixed, contrastCurve: new b8(4.5, 7, 11, 21) }), _r.onPrimaryFixedVariant = b6.fromPalette({ name: "on_primary_fixed_variant", palette: (e10) => e10.primaryPalette, tone: (e10) => _e(e10) ? 90 : 30, background: (e10) => _r.primaryFixedDim, secondBackground: (e10) => _r.primaryFixed, contrastCurve: new b8(3, 4.5, 7, 11) }), _r.secondaryFixed = b6.fromPalette({ name: "secondary_fixed", palette: (e10) => e10.secondaryPalette, tone: (e10) => _e(e10) ? 80 : 90, isBackground: true, background: (e10) => _r.highestSurface(e10), contrastCurve: new b8(1, 1, 3, 7), toneDeltaPair: (e10) => new b9(_r.secondaryFixed, _r.secondaryFixedDim, 10, "lighter", true) }), _r.secondaryFixedDim = b6.fromPalette({ name: "secondary_fixed_dim", palette: (e10) => e10.secondaryPalette, tone: (e10) => _e(e10) ? 70 : 80, isBackground: true, background: (e10) => _r.highestSurface(e10), contrastCurve: new b8(1, 1, 3, 7), toneDeltaPair: (e10) => new b9(_r.secondaryFixed, _r.secondaryFixedDim, 10, "lighter", true) }), _r.onSecondaryFixed = b6.fromPalette({ name: "on_secondary_fixed", palette: (e10) => e10.secondaryPalette, tone: (e10) => 10, background: (e10) => _r.secondaryFixedDim, secondBackground: (e10) => _r.secondaryFixed, contrastCurve: new b8(4.5, 7, 11, 21) }), _r.onSecondaryFixedVariant = b6.fromPalette({ name: "on_secondary_fixed_variant", palette: (e10) => e10.secondaryPalette, tone: (e10) => _e(e10) ? 25 : 30, background: (e10) => _r.secondaryFixedDim, secondBackground: (e10) => _r.secondaryFixed, contrastCurve: new b8(3, 4.5, 7, 11) }), _r.tertiaryFixed = b6.fromPalette({ name: "tertiary_fixed", palette: (e10) => e10.tertiaryPalette, tone: (e10) => _e(e10) ? 40 : 90, isBackground: true, background: (e10) => _r.highestSurface(e10), contrastCurve: new b8(1, 1, 3, 7), toneDeltaPair: (e10) => new b9(_r.tertiaryFixed, _r.tertiaryFixedDim, 10, "lighter", true) }), _r.tertiaryFixedDim = b6.fromPalette({ name: "tertiary_fixed_dim", palette: (e10) => e10.tertiaryPalette, tone: (e10) => _e(e10) ? 30 : 80, isBackground: true, background: (e10) => _r.highestSurface(e10), contrastCurve: new b8(1, 1, 3, 7), toneDeltaPair: (e10) => new b9(_r.tertiaryFixed, _r.tertiaryFixedDim, 10, "lighter", true) }), _r.onTertiaryFixed = b6.fromPalette({ name: "on_tertiary_fixed", palette: (e10) => e10.tertiaryPalette, tone: (e10) => _e(e10) ? 100 : 10, background: (e10) => _r.tertiaryFixedDim, secondBackground: (e10) => _r.tertiaryFixed, contrastCurve: new b8(4.5, 7, 11, 21) }), _r.onTertiaryFixedVariant = b6.fromPalette({ name: "on_tertiary_fixed_variant", palette: (e10) => e10.tertiaryPalette, tone: (e10) => _e(e10) ? 90 : 30, background: (e10) => _r.tertiaryFixedDim, secondBackground: (e10) => _r.tertiaryFixed, contrastCurve: new b8(3, 4.5, 7, 11) });
class _n {
  static fromInt(e10) {
    let t10 = b4.fromInt(e10);
    return _n.fromHct(t10);
  }
  static fromHct(e10) {
    return new _n(e10.hue, e10.chroma, e10);
  }
  static fromHueAndChroma(e10, t10) {
    return new _n(e10, t10, _n.createKeyColor(e10, t10));
  }
  constructor(e10, t10, r3) {
    this.hue = e10, this.chroma = t10, this.keyColor = r3, this.cache = /* @__PURE__ */ new Map();
  }
  static createKeyColor(e10, t10) {
    let r3 = b4.from(e10, t10, 50), o10 = Math.abs(r3.chroma - t10);
    for (let i10 = 1; i10 < 50 && Math.round(t10) !== Math.round(r3.chroma); i10 += 1) {
      let a10 = b4.from(e10, t10, 50 + i10), l10 = Math.abs(a10.chroma - t10);
      l10 < o10 && (o10 = l10, r3 = a10);
      let s10 = b4.from(e10, t10, 50 - i10), u10 = Math.abs(s10.chroma - t10);
      u10 < o10 && (o10 = u10, r3 = s10);
    }
    return r3;
  }
  tone(e10) {
    let t10 = this.cache.get(e10);
    return void 0 === t10 && (t10 = b4.from(this.hue, this.chroma, e10).toInt(), this.cache.set(e10, t10)), t10;
  }
  getHct(e10) {
    return b4.fromInt(this.tone(e10));
  }
}
class _o {
  static of(e10) {
    return new _o(e10, false);
  }
  static contentOf(e10) {
    return new _o(e10, true);
  }
  static fromColors(e10) {
    return _o.createPaletteFromColors(false, e10);
  }
  static contentFromColors(e10) {
    return _o.createPaletteFromColors(true, e10);
  }
  static createPaletteFromColors(e10, t10) {
    let r3 = new _o(t10.primary, e10);
    if (t10.secondary) {
      let o10 = new _o(t10.secondary, e10);
      r3.a2 = o10.a1;
    }
    if (t10.tertiary) {
      let o10 = new _o(t10.tertiary, e10);
      r3.a3 = o10.a1;
    }
    if (t10.error) {
      let o10 = new _o(t10.error, e10);
      r3.error = o10.a1;
    }
    if (t10.neutral) {
      let o10 = new _o(t10.neutral, e10);
      r3.n1 = o10.n1;
    }
    if (t10.neutralVariant) {
      let o10 = new _o(t10.neutralVariant, e10);
      r3.n2 = o10.n2;
    }
    return r3;
  }
  constructor(e10, t10) {
    let r3 = b4.fromInt(e10), o10 = r3.hue, i10 = r3.chroma;
    t10 ? (this.a1 = _n.fromHueAndChroma(o10, i10), this.a2 = _n.fromHueAndChroma(o10, i10 / 3), this.a3 = _n.fromHueAndChroma(o10 + 60, i10 / 2), this.n1 = _n.fromHueAndChroma(o10, Math.min(i10 / 12, 4)), this.n2 = _n.fromHueAndChroma(o10, Math.min(i10 / 6, 8))) : (this.a1 = _n.fromHueAndChroma(o10, Math.max(48, i10)), this.a2 = _n.fromHueAndChroma(o10, 16), this.a3 = _n.fromHueAndChroma(o10 + 60, 24), this.n1 = _n.fromHueAndChroma(o10, 4), this.n2 = _n.fromHueAndChroma(o10, 8)), this.error = _n.fromHueAndChroma(25, 84);
  }
}
function _i(e10) {
  let t10 = 3 === (e10 = e10.replace("#", "")).length, r3 = 6 === e10.length, o10 = 8 === e10.length;
  if (!t10 && !r3 && !o10)
    throw Error("unexpected hex " + e10);
  let i10 = 0, a10 = 0, l10 = 0;
  return t10 ? (i10 = _a(e10.slice(0, 1).repeat(2)), a10 = _a(e10.slice(1, 2).repeat(2)), l10 = _a(e10.slice(2, 3).repeat(2))) : r3 ? (i10 = _a(e10.slice(0, 2)), a10 = _a(e10.slice(2, 4)), l10 = _a(e10.slice(4, 6))) : o10 && (i10 = _a(e10.slice(2, 4)), a10 = _a(e10.slice(4, 6)), l10 = _a(e10.slice(6, 8))), (-16777216 | (255 & i10) << 16 | (255 & a10) << 8 | 255 & l10) >>> 0;
}
function _a(e10) {
  return parseInt(e10, 16);
}
var _l = function() {
  function e10(e11) {
    var t11 = this;
    this._insertTag = function(e12) {
      var r3;
      r3 = 0 === t11.tags.length ? t11.insertionPoint ? t11.insertionPoint.nextSibling : t11.prepend ? t11.container.firstChild : t11.before : t11.tags[t11.tags.length - 1].nextSibling, t11.container.insertBefore(e12, r3), t11.tags.push(e12);
    }, this.isSpeedy = void 0 === e11.speedy || e11.speedy, this.tags = [], this.ctr = 0, this.nonce = e11.nonce, this.key = e11.key, this.container = e11.container, this.prepend = e11.prepend, this.insertionPoint = e11.insertionPoint, this.before = null;
  }
  var t10 = e10.prototype;
  return t10.hydrate = function(e11) {
    e11.forEach(this._insertTag);
  }, t10.insert = function(e11) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) == 0) {
      var t11;
      this._insertTag(((t11 = document.createElement("style")).setAttribute("data-emotion", this.key), void 0 !== this.nonce && t11.setAttribute("nonce", this.nonce), t11.appendChild(document.createTextNode("")), t11.setAttribute("data-s", ""), t11));
    }
    var r3 = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var o10 = function(e12) {
        if (e12.sheet)
          return e12.sheet;
        for (var t12 = 0; t12 < document.styleSheets.length; t12++)
          if (document.styleSheets[t12].ownerNode === e12)
            return document.styleSheets[t12];
      }(r3);
      try {
        o10.insertRule(e11, o10.cssRules.length);
      } catch (e12) {
      }
    } else
      r3.appendChild(document.createTextNode(e11));
    this.ctr++;
  }, t10.flush = function() {
    this.tags.forEach(function(e11) {
      return e11.parentNode && e11.parentNode.removeChild(e11);
    }), this.tags = [], this.ctr = 0;
  }, e10;
}(), _s = "-ms-", _u = "-moz-", _c = "-webkit-", _f = "comm", _d = "rule", _p = "decl", _h = "@keyframes", _m = Math.abs, _v = String.fromCharCode, _g = Object.assign;
function _y(e10, t10, r3) {
  return e10.replace(t10, r3);
}
function _b(e10, t10) {
  return e10.indexOf(t10);
}
function __(e10, t10) {
  return 0 | e10.charCodeAt(t10);
}
function _w(e10, t10, r3) {
  return e10.slice(t10, r3);
}
function _x(e10) {
  return e10.length;
}
function _k(e10, t10) {
  return t10.push(e10), e10;
}
var _S = 1, _O = 1, _C = 0, _E = 0, _A = 0, _P = "";
function _M(e10, t10, r3, o10, i10, a10, l10) {
  return { value: e10, root: t10, parent: r3, type: o10, props: i10, children: a10, line: _S, column: _O, length: l10, return: "" };
}
function _j(e10, t10) {
  return _g(_M("", null, null, "", null, null, 0), e10, { length: -e10.length }, t10);
}
function _R() {
  return _A = _E < _C ? __(_P, _E++) : 0, _O++, 10 === _A && (_O = 1, _S++), _A;
}
function _T() {
  return __(_P, _E);
}
function _I(e10) {
  switch (e10) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function _$(e10) {
  return _S = _O = 1, _C = _x(_P = e10), _E = 0, [];
}
function _D(e10) {
  var t10, r3;
  return (t10 = _E - 1, r3 = function e11(t11) {
    for (; _R(); )
      switch (_A) {
        case t11:
          return _E;
        case 34:
        case 39:
          34 !== t11 && 39 !== t11 && e11(_A);
          break;
        case 40:
          41 === t11 && e11(t11);
          break;
        case 92:
          _R();
      }
    return _E;
  }(91 === e10 ? e10 + 2 : 40 === e10 ? e10 + 1 : e10), _w(_P, t10, r3)).trim();
}
function _L(e10, t10, r3, o10, i10, a10, l10, s10, u10, c10, f10) {
  for (var d10 = i10 - 1, p10 = 0 === i10 ? a10 : [""], h10 = p10.length, m10 = 0, g10 = 0, y10 = 0; m10 < o10; ++m10)
    for (var b10 = 0, _10 = _w(e10, d10 + 1, d10 = _m(g10 = l10[m10])), w10 = e10; b10 < h10; ++b10)
      (w10 = (g10 > 0 ? p10[b10] + " " + _10 : _y(_10, /&\f/g, p10[b10])).trim()) && (u10[y10++] = w10);
  return _M(e10, t10, r3, 0 === i10 ? _d : s10, u10, c10, f10);
}
function _F(e10, t10, r3, o10) {
  return _M(e10, t10, r3, _p, _w(e10, 0, o10), _w(e10, o10 + 1, -1), o10);
}
function _V(e10, t10) {
  for (var r3 = "", o10 = e10.length, i10 = 0; i10 < o10; i10++)
    r3 += t10(e10[i10], i10, e10, t10) || "";
  return r3;
}
function _z(e10, t10, r3, o10) {
  switch (e10.type) {
    case "@layer":
      if (e10.children.length)
        break;
    case "@import":
    case _p:
      return e10.return = e10.return || e10.value;
    case _f:
      return "";
    case _h:
      return e10.return = e10.value + "{" + _V(e10.children, o10) + "}";
    case _d:
      e10.value = e10.props.join(",");
  }
  return _x(r3 = _V(e10.children, o10)) ? e10.return = e10.value + "{" + r3 + "}" : "";
}
var _N = function(e10, t10, r3) {
  for (var o10 = 0, i10 = 0; o10 = i10, i10 = _T(), 38 === o10 && 12 === i10 && (t10[r3] = 1), !_I(i10); )
    _R();
  return _w(_P, e10, _E);
}, _B = function(e10, t10) {
  var r3 = -1, o10 = 44;
  do
    switch (_I(o10)) {
      case 0:
        38 === o10 && 12 === _T() && (t10[r3] = 1), e10[r3] += _N(_E - 1, t10, r3);
        break;
      case 2:
        e10[r3] += _D(o10);
        break;
      case 4:
        if (44 === o10) {
          e10[++r3] = 58 === _T() ? "&\f" : "", t10[r3] = e10[r3].length;
          break;
        }
      default:
        e10[r3] += _v(o10);
    }
  while (o10 = _R());
  return e10;
}, _U = function(e10, t10) {
  var r3;
  return r3 = _B(_$(e10), t10), _P = "", r3;
}, _H = /* @__PURE__ */ new WeakMap(), _W = function(e10) {
  if ("rule" === e10.type && e10.parent && !(e10.length < 1)) {
    for (var t10 = e10.value, r3 = e10.parent, o10 = e10.column === r3.column && e10.line === r3.line; "rule" !== r3.type; )
      if (!(r3 = r3.parent))
        return;
    if ((1 !== e10.props.length || 58 === t10.charCodeAt(0) || _H.get(r3)) && !o10) {
      _H.set(e10, true);
      for (var i10 = [], a10 = _U(t10, i10), l10 = r3.props, s10 = 0, u10 = 0; s10 < a10.length; s10++)
        for (var c10 = 0; c10 < l10.length; c10++, u10++)
          e10.props[u10] = i10[s10] ? a10[s10].replace(/&\f/g, l10[c10]) : l10[c10] + " " + a10[s10];
    }
  }
}, _q = function(e10) {
  if ("decl" === e10.type) {
    var t10 = e10.value;
    108 === t10.charCodeAt(0) && 98 === t10.charCodeAt(2) && (e10.return = "", e10.value = "");
  }
}, _G = [function(e10, t10, r3, o10) {
  if (e10.length > -1 && !e10.return)
    switch (e10.type) {
      case _p:
        e10.return = function e11(t11, r10) {
          switch (45 ^ __(t11, 0) ? (((r10 << 2 ^ __(t11, 0)) << 2 ^ __(t11, 1)) << 2 ^ __(t11, 2)) << 2 ^ __(t11, 3) : 0) {
            case 5103:
              return _c + "print-" + t11 + t11;
            case 5737:
            case 4201:
            case 3177:
            case 3433:
            case 1641:
            case 4457:
            case 2921:
            case 5572:
            case 6356:
            case 5844:
            case 3191:
            case 6645:
            case 3005:
            case 6391:
            case 5879:
            case 5623:
            case 6135:
            case 4599:
            case 4855:
            case 4215:
            case 6389:
            case 5109:
            case 5365:
            case 5621:
            case 3829:
              return _c + t11 + t11;
            case 5349:
            case 4246:
            case 4810:
            case 6968:
            case 2756:
              return _c + t11 + _u + t11 + _s + t11 + t11;
            case 6828:
            case 4268:
              return _c + t11 + _s + t11 + t11;
            case 6165:
              return _c + t11 + _s + "flex-" + t11 + t11;
            case 5187:
              return _c + t11 + _y(t11, /(\w+).+(:[^]+)/, _c + "box-$1$2" + _s + "flex-$1$2") + t11;
            case 5443:
              return _c + t11 + _s + "flex-item-" + _y(t11, /flex-|-self/, "") + t11;
            case 4675:
              return _c + t11 + _s + "flex-line-pack" + _y(t11, /align-content|flex-|-self/, "") + t11;
            case 5548:
              return _c + t11 + _s + _y(t11, "shrink", "negative") + t11;
            case 5292:
              return _c + t11 + _s + _y(t11, "basis", "preferred-size") + t11;
            case 6060:
              return _c + "box-" + _y(t11, "-grow", "") + _c + t11 + _s + _y(t11, "grow", "positive") + t11;
            case 4554:
              return _c + _y(t11, /([^-])(transform)/g, "$1" + _c + "$2") + t11;
            case 6187:
              return _y(_y(_y(t11, /(zoom-|grab)/, _c + "$1"), /(image-set)/, _c + "$1"), t11, "") + t11;
            case 5495:
            case 3959:
              return _y(t11, /(image-set\([^]*)/, _c + "$1$`$1");
            case 4968:
              return _y(_y(t11, /(.+:)(flex-)?(.*)/, _c + "box-pack:$3" + _s + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + _c + t11 + t11;
            case 4095:
            case 3583:
            case 4068:
            case 2532:
              return _y(t11, /(.+)-inline(.+)/, _c + "$1$2") + t11;
            case 8116:
            case 7059:
            case 5753:
            case 5535:
            case 5445:
            case 5701:
            case 4933:
            case 4677:
            case 5533:
            case 5789:
            case 5021:
            case 4765:
              if (_x(t11) - 1 - r10 > 6)
                switch (__(t11, r10 + 1)) {
                  case 109:
                    if (45 !== __(t11, r10 + 4))
                      break;
                  case 102:
                    return _y(t11, /(.+:)(.+)-([^]+)/, "$1" + _c + "$2-$3$1" + _u + (108 == __(t11, r10 + 3) ? "$3" : "$2-$3")) + t11;
                  case 115:
                    return ~_b(t11, "stretch") ? e11(_y(t11, "stretch", "fill-available"), r10) + t11 : t11;
                }
              break;
            case 4949:
              if (115 !== __(t11, r10 + 1))
                break;
            case 6444:
              switch (__(t11, _x(t11) - 3 - (~_b(t11, "!important") && 10))) {
                case 107:
                  return _y(t11, ":", ":" + _c) + t11;
                case 101:
                  return _y(t11, /(.+:)([^;!]+)(;|!.+)?/, "$1" + _c + (45 === __(t11, 14) ? "inline-" : "") + "box$3$1" + _c + "$2$3$1" + _s + "$2box$3") + t11;
              }
              break;
            case 5936:
              switch (__(t11, r10 + 11)) {
                case 114:
                  return _c + t11 + _s + _y(t11, /[svh]\w+-[tblr]{2}/, "tb") + t11;
                case 108:
                  return _c + t11 + _s + _y(t11, /[svh]\w+-[tblr]{2}/, "tb-rl") + t11;
                case 45:
                  return _c + t11 + _s + _y(t11, /[svh]\w+-[tblr]{2}/, "lr") + t11;
              }
              return _c + t11 + _s + t11 + t11;
          }
          return t11;
        }(e10.value, e10.length);
        break;
      case _h:
        return _V([_j(e10, { value: _y(e10.value, "@", "@" + _c) })], o10);
      case _d:
        if (e10.length) {
          var i10, a10;
          return i10 = e10.props, a10 = function(t11) {
            var r10;
            switch (r10 = t11, (r10 = /(::plac\w+|:read-\w+)/.exec(r10)) ? r10[0] : r10) {
              case ":read-only":
              case ":read-write":
                return _V([_j(e10, { props: [_y(t11, /:(read-\w+)/, ":" + _u + "$1")] })], o10);
              case "::placeholder":
                return _V([_j(e10, { props: [_y(t11, /:(plac\w+)/, ":" + _c + "input-$1")] }), _j(e10, { props: [_y(t11, /:(plac\w+)/, ":" + _u + "$1")] }), _j(e10, { props: [_y(t11, /:(plac\w+)/, _s + "input-$1")] })], o10);
            }
            return "";
          }, i10.map(a10).join("");
        }
    }
}], _Y = function(e10) {
  var t10, r3, o10, i10, a10, l10, s10 = e10.key;
  if ("css" === s10) {
    var u10 = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(u10, function(e11) {
      -1 !== e11.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e11), e11.setAttribute("data-s", ""));
    });
  }
  var c10 = e10.stylisPlugins || _G, f10 = {}, d10 = [];
  i10 = e10.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + s10 + ' "]'), function(e11) {
    for (var t11 = e11.getAttribute("data-emotion").split(" "), r10 = 1; r10 < t11.length; r10++)
      f10[t11[r10]] = true;
    d10.push(e11);
  });
  var p10 = (r3 = (t10 = [_W, _q].concat(c10, [_z, (o10 = function(e11) {
    l10.insert(e11);
  }, function(e11) {
    !e11.root && (e11 = e11.return) && o10(e11);
  })])).length, function(e11, o11, i11, a11) {
    for (var l11 = "", s11 = 0; s11 < r3; s11++)
      l11 += t10[s11](e11, o11, i11, a11) || "";
    return l11;
  }), h10 = function(e11) {
    var t11, r10;
    return _V((r10 = function e12(t12, r11, o11, i11, a11, l11, s11, u11, c11) {
      for (var f11, d11 = 0, p11 = 0, h11 = s11, m11 = 0, g10 = 0, y10 = 0, b10 = 1, _10 = 1, w10 = 1, x6 = 0, k2 = "", S2 = a11, O2 = l11, C2 = i11, E2 = k2; _10; )
        switch (y10 = x6, x6 = _R()) {
          case 40:
            if (108 != y10 && 58 == __(E2, h11 - 1)) {
              -1 != _b(E2 += _y(_D(x6), "&", "&\f"), "&\f") && (w10 = -1);
              break;
            }
          case 34:
          case 39:
          case 91:
            E2 += _D(x6);
            break;
          case 9:
          case 10:
          case 13:
          case 32:
            E2 += function(e13) {
              for (; _A = _T(); )
                if (_A < 33)
                  _R();
                else
                  break;
              return _I(e13) > 2 || _I(_A) > 3 ? "" : " ";
            }(y10);
            break;
          case 92:
            E2 += function(e13, t13) {
              for (var r12; --t13 && _R() && !(_A < 48) && !(_A > 102) && (!(_A > 57) || !(_A < 65)) && (!(_A > 70) || !(_A < 97)); )
                ;
              return r12 = _E + (t13 < 6 && 32 == _T() && 32 == _R()), _w(_P, e13, r12);
            }(_E - 1, 7);
            continue;
          case 47:
            switch (_T()) {
              case 42:
              case 47:
                _k(_M(f11 = function(e13, t13) {
                  for (; _R(); )
                    if (e13 + _A === 57)
                      break;
                    else if (e13 + _A === 84 && 47 === _T())
                      break;
                  return "/*" + _w(_P, t13, _E - 1) + "*" + _v(47 === e13 ? e13 : _R());
                }(_R(), _E), r11, o11, _f, _v(_A), _w(f11, 2, -2), 0), c11);
                break;
              default:
                E2 += "/";
            }
            break;
          case 123 * b10:
            u11[d11++] = _x(E2) * w10;
          case 125 * b10:
          case 59:
          case 0:
            switch (x6) {
              case 0:
              case 125:
                _10 = 0;
              case 59 + p11:
                -1 == w10 && (E2 = _y(E2, /\f/g, "")), g10 > 0 && _x(E2) - h11 && _k(g10 > 32 ? _F(E2 + ";", i11, o11, h11 - 1) : _F(_y(E2, " ", "") + ";", i11, o11, h11 - 2), c11);
                break;
              case 59:
                E2 += ";";
              default:
                if (_k(C2 = _L(E2, r11, o11, d11, p11, a11, u11, k2, S2 = [], O2 = [], h11), l11), 123 === x6) {
                  if (0 === p11)
                    e12(E2, r11, C2, C2, S2, l11, h11, u11, O2);
                  else
                    switch (99 === m11 && 110 === __(E2, 3) ? 100 : m11) {
                      case 100:
                      case 108:
                      case 109:
                      case 115:
                        e12(t12, C2, C2, i11 && _k(_L(t12, C2, C2, 0, 0, a11, u11, k2, a11, S2 = [], h11), O2), a11, O2, h11, u11, i11 ? S2 : O2);
                        break;
                      default:
                        e12(E2, C2, C2, C2, [""], O2, 0, u11, O2);
                    }
                }
            }
            d11 = p11 = g10 = 0, b10 = w10 = 1, k2 = E2 = "", h11 = s11;
            break;
          case 58:
            h11 = 1 + _x(E2), g10 = y10;
          default:
            if (b10 < 1) {
              if (123 == x6)
                --b10;
              else if (125 == x6 && 0 == b10++ && 125 == (_A = _E > 0 ? __(_P, --_E) : 0, _O--, 10 === _A && (_O = 1, _S--), _A))
                continue;
            }
            switch (E2 += _v(x6), x6 * b10) {
              case 38:
                w10 = p11 > 0 ? 1 : (E2 += "\f", -1);
                break;
              case 44:
                u11[d11++] = (_x(E2) - 1) * w10, w10 = 1;
                break;
              case 64:
                45 === _T() && (E2 += _D(_R())), m11 = _T(), p11 = h11 = _x(k2 = E2 += function(e13) {
                  for (; !_I(_T()); )
                    _R();
                  return _w(_P, e13, _E);
                }(_E)), x6++;
                break;
              case 45:
                45 === y10 && 2 == _x(E2) && (b10 = 0);
            }
        }
      return l11;
    }("", null, null, null, [""], t11 = _$(t11 = e11), 0, [0], t11), _P = "", r10), p10);
  };
  a10 = function(e11, t11, r10, o11) {
    l10 = r10, h10(e11 ? e11 + "{" + t11.styles + "}" : t11.styles), o11 && (m10.inserted[t11.name] = true);
  };
  var m10 = { key: s10, sheet: new _l({ key: s10, container: i10, nonce: e10.nonce, speedy: e10.speedy, prepend: e10.prepend, insertionPoint: e10.insertionPoint }), nonce: e10.nonce, inserted: f10, registered: {}, insert: a10 };
  return m10.sheet.hydrate(d10), m10;
}, _K = function(e10, t10, r3) {
  var o10 = e10.key + "-" + t10.name;
  false === r3 && void 0 === e10.registered[o10] && (e10.registered[o10] = t10.styles);
}, _Z = function(e10, t10, r3) {
  _K(e10, t10, r3);
  var o10 = e10.key + "-" + t10.name;
  if (void 0 === e10.inserted[t10.name]) {
    var i10 = t10;
    do
      e10.insert(t10 === i10 ? "." + o10 : "", i10, e10.sheet, true), i10 = i10.next;
    while (void 0 !== i10);
  }
}, _X = "bottom", _J = "right", _Q = "left", _0 = "auto", _1 = ["top", _X, _J, _Q], _2 = "start", _4 = "viewport", _3 = "popper", _5 = _1.reduce(function(e10, t10) {
  return e10.concat([t10 + "-" + _2, t10 + "-end"]);
}, []), _6 = [].concat(_1, [_0]).reduce(function(e10, t10) {
  return e10.concat([t10, t10 + "-" + _2, t10 + "-end"]);
}, []), _8 = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
function _9(e10) {
  return e10 ? (e10.nodeName || "").toLowerCase() : null;
}
function _7(e10) {
  if (null == e10)
    return window;
  if ("[object Window]" !== e10.toString()) {
    var t10 = e10.ownerDocument;
    return t10 && t10.defaultView || window;
  }
  return e10;
}
function we(e10) {
  var t10 = _7(e10).Element;
  return e10 instanceof t10 || e10 instanceof Element;
}
function wt(e10) {
  var t10 = _7(e10).HTMLElement;
  return e10 instanceof t10 || e10 instanceof HTMLElement;
}
function wr(e10) {
  if ("undefined" == typeof ShadowRoot)
    return false;
  var t10 = _7(e10).ShadowRoot;
  return e10 instanceof t10 || e10 instanceof ShadowRoot;
}
function wn(e10) {
  return e10.split("-")[0];
}
var wo = Math.max, wi = Math.min, wa = Math.round;
function wl() {
  var e10 = navigator.userAgentData;
  return null != e10 && e10.brands && Array.isArray(e10.brands) ? e10.brands.map(function(e11) {
    return e11.brand + "/" + e11.version;
  }).join(" ") : navigator.userAgent;
}
function ws() {
  return !/^((?!chrome|android).)*safari/i.test(wl());
}
function wu(e10, t10, r3) {
  void 0 === t10 && (t10 = false), void 0 === r3 && (r3 = false);
  var o10 = e10.getBoundingClientRect(), i10 = 1, a10 = 1;
  t10 && wt(e10) && (i10 = e10.offsetWidth > 0 && wa(o10.width) / e10.offsetWidth || 1, a10 = e10.offsetHeight > 0 && wa(o10.height) / e10.offsetHeight || 1);
  var l10 = (we(e10) ? _7(e10) : window).visualViewport, s10 = !ws() && r3, u10 = (o10.left + (s10 && l10 ? l10.offsetLeft : 0)) / i10, c10 = (o10.top + (s10 && l10 ? l10.offsetTop : 0)) / a10, f10 = o10.width / i10, d10 = o10.height / a10;
  return { width: f10, height: d10, top: c10, right: u10 + f10, bottom: c10 + d10, left: u10, x: u10, y: c10 };
}
function wc(e10) {
  return _7(e10).getComputedStyle(e10);
}
function wf(e10) {
  return ((we(e10) ? e10.ownerDocument : e10.document) || window.document).documentElement;
}
function wd(e10) {
  return "html" === _9(e10) ? e10 : e10.assignedSlot || e10.parentNode || (wr(e10) ? e10.host : null) || wf(e10);
}
function wp(e10) {
  return wt(e10) && "fixed" !== wc(e10).position ? e10.offsetParent : null;
}
function wh(e10) {
  for (var t10 = _7(e10), r3 = wp(e10); r3 && ["table", "td", "th"].indexOf(_9(r3)) >= 0 && "static" === wc(r3).position; )
    r3 = wp(r3);
  return r3 && ("html" === _9(r3) || "body" === _9(r3) && "static" === wc(r3).position) ? t10 : r3 || function(e11) {
    var t11 = /firefox/i.test(wl());
    if (/Trident/i.test(wl()) && wt(e11) && "fixed" === wc(e11).position)
      return null;
    var r10 = wd(e11);
    for (wr(r10) && (r10 = r10.host); wt(r10) && 0 > ["html", "body"].indexOf(_9(r10)); ) {
      var o10 = wc(r10);
      if ("none" !== o10.transform || "none" !== o10.perspective || "paint" === o10.contain || -1 !== ["transform", "perspective"].indexOf(o10.willChange) || t11 && "filter" === o10.willChange || t11 && o10.filter && "none" !== o10.filter)
        return r10;
      r10 = r10.parentNode;
    }
    return null;
  }(e10) || t10;
}
function wm(e10) {
  return e10.split("-")[1];
}
var wv = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function wg(e10) {
  var t10, r3, o10, i10, a10, l10, s10, u10 = e10.popper, c10 = e10.popperRect, f10 = e10.placement, d10 = e10.variation, p10 = e10.offsets, h10 = e10.position, m10 = e10.gpuAcceleration, g10 = e10.adaptive, y10 = e10.roundOffsets, b10 = e10.isFixed, _10 = p10.x, w10 = void 0 === _10 ? 0 : _10, x6 = p10.y, k2 = void 0 === x6 ? 0 : x6, S2 = "function" == typeof y10 ? y10({ x: w10, y: k2 }) : { x: w10, y: k2 };
  w10 = S2.x, k2 = S2.y;
  var O2 = p10.hasOwnProperty("x"), C2 = p10.hasOwnProperty("y"), E2 = _Q, A2 = "top", P2 = window;
  if (g10) {
    var M2 = wh(u10), j2 = "clientHeight", R2 = "clientWidth";
    M2 === _7(u10) && "static" !== wc(M2 = wf(u10)).position && "absolute" === h10 && (j2 = "scrollHeight", R2 = "scrollWidth"), ("top" === f10 || (f10 === _Q || f10 === _J) && "end" === d10) && (A2 = _X, k2 -= (b10 && M2 === P2 && P2.visualViewport ? P2.visualViewport.height : M2[j2]) - c10.height, k2 *= m10 ? 1 : -1), (f10 === _Q || ("top" === f10 || f10 === _X) && "end" === d10) && (E2 = _J, w10 -= (b10 && M2 === P2 && P2.visualViewport ? P2.visualViewport.width : M2[R2]) - c10.width, w10 *= m10 ? 1 : -1);
  }
  var T2 = Object.assign({ position: h10 }, g10 && wv), I2 = true === y10 ? (t10 = { x: w10, y: k2 }, r3 = _7(u10), o10 = t10.x, i10 = t10.y, { x: wa(o10 * (a10 = r3.devicePixelRatio || 1)) / a10 || 0, y: wa(i10 * a10) / a10 || 0 }) : { x: w10, y: k2 };
  return (w10 = I2.x, k2 = I2.y, m10) ? Object.assign({}, T2, ((s10 = {})[A2] = C2 ? "0" : "", s10[E2] = O2 ? "0" : "", s10.transform = 1 >= (P2.devicePixelRatio || 1) ? "translate(" + w10 + "px, " + k2 + "px)" : "translate3d(" + w10 + "px, " + k2 + "px, 0)", s10)) : Object.assign({}, T2, ((l10 = {})[A2] = C2 ? k2 + "px" : "", l10[E2] = O2 ? w10 + "px" : "", l10.transform = "", l10));
}
var wy = { passive: true }, wb = { left: "right", right: "left", bottom: "top", top: "bottom" };
function w_(e10) {
  return e10.replace(/left|right|bottom|top/g, function(e11) {
    return wb[e11];
  });
}
var ww = { start: "end", end: "start" };
function wx(e10) {
  return e10.replace(/start|end/g, function(e11) {
    return ww[e11];
  });
}
function wk(e10) {
  var t10 = _7(e10);
  return { scrollLeft: t10.pageXOffset, scrollTop: t10.pageYOffset };
}
function wS(e10) {
  return wu(wf(e10)).left + wk(e10).scrollLeft;
}
function wO(e10) {
  var t10 = wc(e10), r3 = t10.overflow, o10 = t10.overflowX, i10 = t10.overflowY;
  return /auto|scroll|overlay|hidden/.test(r3 + i10 + o10);
}
function wC(e10, t10) {
  void 0 === t10 && (t10 = []);
  var r3, o10 = function e11(t11) {
    return ["html", "body", "#document"].indexOf(_9(t11)) >= 0 ? t11.ownerDocument.body : wt(t11) && wO(t11) ? t11 : e11(wd(t11));
  }(e10), i10 = o10 === (null == (r3 = e10.ownerDocument) ? void 0 : r3.body), a10 = _7(o10), l10 = i10 ? [a10].concat(a10.visualViewport || [], wO(o10) ? o10 : []) : o10, s10 = t10.concat(l10);
  return i10 ? s10 : s10.concat(wC(wd(l10)));
}
function wE(e10) {
  return Object.assign({}, e10, { left: e10.x, top: e10.y, right: e10.x + e10.width, bottom: e10.y + e10.height });
}
function wA(e10, t10, r3) {
  var o10, i10, a10, l10, s10, u10, c10, f10, d10, p10;
  return t10 === _4 ? wE(function(e11, t11) {
    var r10 = _7(e11), o11 = wf(e11), i11 = r10.visualViewport, a11 = o11.clientWidth, l11 = o11.clientHeight, s11 = 0, u11 = 0;
    if (i11) {
      a11 = i11.width, l11 = i11.height;
      var c11 = ws();
      (c11 || !c11 && "fixed" === t11) && (s11 = i11.offsetLeft, u11 = i11.offsetTop);
    }
    return { width: a11, height: l11, x: s11 + wS(e11), y: u11 };
  }(e10, r3)) : we(t10) ? ((o10 = wu(t10, false, "fixed" === r3)).top = o10.top + t10.clientTop, o10.left = o10.left + t10.clientLeft, o10.bottom = o10.top + t10.clientHeight, o10.right = o10.left + t10.clientWidth, o10.width = t10.clientWidth, o10.height = t10.clientHeight, o10.x = o10.left, o10.y = o10.top, o10) : wE((i10 = wf(e10), l10 = wf(i10), s10 = wk(i10), u10 = null == (a10 = i10.ownerDocument) ? void 0 : a10.body, c10 = wo(l10.scrollWidth, l10.clientWidth, u10 ? u10.scrollWidth : 0, u10 ? u10.clientWidth : 0), f10 = wo(l10.scrollHeight, l10.clientHeight, u10 ? u10.scrollHeight : 0, u10 ? u10.clientHeight : 0), d10 = -s10.scrollLeft + wS(i10), p10 = -s10.scrollTop, "rtl" === wc(u10 || l10).direction && (d10 += wo(l10.clientWidth, u10 ? u10.clientWidth : 0) - c10), { width: c10, height: f10, x: d10, y: p10 }));
}
function wP(e10) {
  var t10, r3 = e10.reference, o10 = e10.element, i10 = e10.placement, a10 = i10 ? wn(i10) : null, l10 = i10 ? wm(i10) : null, s10 = r3.x + r3.width / 2 - o10.width / 2, u10 = r3.y + r3.height / 2 - o10.height / 2;
  switch (a10) {
    case "top":
      t10 = { x: s10, y: r3.y - o10.height };
      break;
    case _X:
      t10 = { x: s10, y: r3.y + r3.height };
      break;
    case _J:
      t10 = { x: r3.x + r3.width, y: u10 };
      break;
    case _Q:
      t10 = { x: r3.x - o10.width, y: u10 };
      break;
    default:
      t10 = { x: r3.x, y: r3.y };
  }
  var c10 = a10 ? ["top", "bottom"].indexOf(a10) >= 0 ? "x" : "y" : null;
  if (null != c10) {
    var f10 = "y" === c10 ? "height" : "width";
    switch (l10) {
      case _2:
        t10[c10] = t10[c10] - (r3[f10] / 2 - o10[f10] / 2);
        break;
      case "end":
        t10[c10] = t10[c10] + (r3[f10] / 2 - o10[f10] / 2);
    }
  }
  return t10;
}
function wM(e10, t10) {
  void 0 === t10 && (t10 = {});
  var r3, o10, i10, a10, l10, s10, u10, c10, f10 = t10, d10 = f10.placement, p10 = void 0 === d10 ? e10.placement : d10, h10 = f10.strategy, m10 = void 0 === h10 ? e10.strategy : h10, g10 = f10.boundary, y10 = f10.rootBoundary, b10 = f10.elementContext, _10 = void 0 === b10 ? _3 : b10, w10 = f10.altBoundary, x6 = f10.padding, k2 = void 0 === x6 ? 0 : x6, S2 = Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, "number" != typeof k2 ? k2 : _1.reduce(function(e11, t11) {
    return e11[t11] = k2, e11;
  }, {})), O2 = e10.rects.popper, C2 = e10.elements[void 0 !== w10 && w10 ? _10 === _3 ? "reference" : _3 : _10], E2 = (r3 = we(C2) ? C2 : C2.contextElement || wf(e10.elements.popper), o10 = void 0 === g10 ? "clippingParents" : g10, i10 = void 0 === y10 ? _4 : y10, u10 = (s10 = [].concat("clippingParents" === o10 ? (a10 = wC(wd(r3)), we(l10 = ["absolute", "fixed"].indexOf(wc(r3).position) >= 0 && wt(r3) ? wh(r3) : r3) ? a10.filter(function(e11) {
    return we(e11) && function(e12, t11) {
      var r10 = t11.getRootNode && t11.getRootNode();
      if (e12.contains(t11))
        return true;
      if (r10 && wr(r10)) {
        var o11 = t11;
        do {
          if (o11 && e12.isSameNode(o11))
            return true;
          o11 = o11.parentNode || o11.host;
        } while (o11);
      }
      return false;
    }(e11, l10) && "body" !== _9(e11);
  }) : []) : [].concat(o10), [i10]))[0], (c10 = s10.reduce(function(e11, t11) {
    var o11 = wA(r3, t11, m10);
    return e11.top = wo(o11.top, e11.top), e11.right = wi(o11.right, e11.right), e11.bottom = wi(o11.bottom, e11.bottom), e11.left = wo(o11.left, e11.left), e11;
  }, wA(r3, u10, m10))).width = c10.right - c10.left, c10.height = c10.bottom - c10.top, c10.x = c10.left, c10.y = c10.top, c10), A2 = wu(e10.elements.reference), P2 = wP({ reference: A2, element: O2, strategy: "absolute", placement: p10 }), M2 = wE(Object.assign({}, O2, P2)), j2 = _10 === _3 ? M2 : A2, R2 = { top: E2.top - j2.top + S2.top, bottom: j2.bottom - E2.bottom + S2.bottom, left: E2.left - j2.left + S2.left, right: j2.right - E2.right + S2.right }, T2 = e10.modifiersData.offset;
  if (_10 === _3 && T2) {
    var I2 = T2[p10];
    Object.keys(R2).forEach(function(e11) {
      var t11 = [_J, _X].indexOf(e11) >= 0 ? 1 : -1, r10 = ["top", _X].indexOf(e11) >= 0 ? "y" : "x";
      R2[e11] += I2[r10] * t11;
    });
  }
  return R2;
}
let wj = { name: "flip", enabled: true, phase: "main", fn: function(e10) {
  var t10 = e10.state, r3 = e10.options, o10 = e10.name;
  if (!t10.modifiersData[o10]._skip) {
    for (var i10 = r3.mainAxis, a10 = void 0 === i10 || i10, l10 = r3.altAxis, s10 = void 0 === l10 || l10, u10 = r3.fallbackPlacements, c10 = r3.padding, f10 = r3.boundary, d10 = r3.rootBoundary, p10 = r3.altBoundary, h10 = r3.flipVariations, m10 = void 0 === h10 || h10, g10 = r3.allowedAutoPlacements, y10 = t10.options.placement, b10 = wn(y10) === y10, _10 = u10 || (b10 || !m10 ? [w_(y10)] : function(e11) {
      if (wn(e11) === _0)
        return [];
      var t11 = w_(e11);
      return [wx(e11), t11, wx(t11)];
    }(y10)), w10 = [y10].concat(_10).reduce(function(e11, r10) {
      var o11, i11, a11, l11, s11, u11, p11, h11, y11, b11, _11, w11;
      return e11.concat(wn(r10) === _0 ? (i11 = (o11 = { placement: r10, boundary: f10, rootBoundary: d10, padding: c10, flipVariations: m10, allowedAutoPlacements: g10 }).placement, a11 = o11.boundary, l11 = o11.rootBoundary, s11 = o11.padding, u11 = o11.flipVariations, h11 = void 0 === (p11 = o11.allowedAutoPlacements) ? _6 : p11, 0 === (_11 = (b11 = (y11 = wm(i11)) ? u11 ? _5 : _5.filter(function(e12) {
        return wm(e12) === y11;
      }) : _1).filter(function(e12) {
        return h11.indexOf(e12) >= 0;
      })).length && (_11 = b11), Object.keys(w11 = _11.reduce(function(e12, r11) {
        return e12[r11] = wM(t10, { placement: r11, boundary: a11, rootBoundary: l11, padding: s11 })[wn(r11)], e12;
      }, {})).sort(function(e12, t11) {
        return w11[e12] - w11[t11];
      })) : r10);
    }, []), x6 = t10.rects.reference, k2 = t10.rects.popper, S2 = /* @__PURE__ */ new Map(), O2 = true, C2 = w10[0], E2 = 0; E2 < w10.length; E2++) {
      var A2 = w10[E2], P2 = wn(A2), M2 = wm(A2) === _2, j2 = ["top", _X].indexOf(P2) >= 0, R2 = j2 ? "width" : "height", T2 = wM(t10, { placement: A2, boundary: f10, rootBoundary: d10, altBoundary: p10, padding: c10 }), I2 = j2 ? M2 ? _J : _Q : M2 ? _X : "top";
      x6[R2] > k2[R2] && (I2 = w_(I2));
      var $2 = w_(I2), D2 = [];
      if (a10 && D2.push(T2[P2] <= 0), s10 && D2.push(T2[I2] <= 0, T2[$2] <= 0), D2.every(function(e11) {
        return e11;
      })) {
        C2 = A2, O2 = false;
        break;
      }
      S2.set(A2, D2);
    }
    if (O2)
      for (var L2 = m10 ? 3 : 1, F2 = function(e11) {
        var t11 = w10.find(function(t12) {
          var r10 = S2.get(t12);
          if (r10)
            return r10.slice(0, e11).every(function(e12) {
              return e12;
            });
        });
        if (t11)
          return C2 = t11, "break";
      }, V2 = L2; V2 > 0 && "break" !== F2(V2); V2--)
        ;
    t10.placement !== C2 && (t10.modifiersData[o10]._skip = true, t10.placement = C2, t10.reset = true);
  }
}, requiresIfExists: ["offset"], data: { _skip: false } };
var wR = { placement: "bottom", modifiers: [], strategy: "absolute" };
function wT() {
  for (var e10 = arguments.length, t10 = Array(e10), r3 = 0; r3 < e10; r3++)
    t10[r3] = arguments[r3];
  return !t10.some(function(e11) {
    return !(e11 && "function" == typeof e11.getBoundingClientRect);
  });
}
var wI = (T = void 0 === (R = (j = { defaultModifiers: [{ name: "eventListeners", enabled: true, phase: "write", fn: function() {
}, effect: function(e10) {
  var t10 = e10.state, r3 = e10.instance, o10 = e10.options, i10 = o10.scroll, a10 = void 0 === i10 || i10, l10 = o10.resize, s10 = void 0 === l10 || l10, u10 = _7(t10.elements.popper), c10 = [].concat(t10.scrollParents.reference, t10.scrollParents.popper);
  return a10 && c10.forEach(function(e11) {
    e11.addEventListener("scroll", r3.update, wy);
  }), s10 && u10.addEventListener("resize", r3.update, wy), function() {
    a10 && c10.forEach(function(e11) {
      e11.removeEventListener("scroll", r3.update, wy);
    }), s10 && u10.removeEventListener("resize", r3.update, wy);
  };
}, data: {} }, { name: "popperOffsets", enabled: true, phase: "read", fn: function(e10) {
  var t10 = e10.state, r3 = e10.name;
  t10.modifiersData[r3] = wP({ reference: t10.rects.reference, element: t10.rects.popper, strategy: "absolute", placement: t10.placement });
}, data: {} }, { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: function(e10) {
  var t10 = e10.state, r3 = e10.options, o10 = r3.gpuAcceleration, i10 = r3.adaptive, a10 = r3.roundOffsets, l10 = void 0 === a10 || a10, s10 = { placement: wn(t10.placement), variation: wm(t10.placement), popper: t10.elements.popper, popperRect: t10.rects.popper, gpuAcceleration: void 0 === o10 || o10, isFixed: "fixed" === t10.options.strategy };
  null != t10.modifiersData.popperOffsets && (t10.styles.popper = Object.assign({}, t10.styles.popper, wg(Object.assign({}, s10, { offsets: t10.modifiersData.popperOffsets, position: t10.options.strategy, adaptive: void 0 === i10 || i10, roundOffsets: l10 })))), null != t10.modifiersData.arrow && (t10.styles.arrow = Object.assign({}, t10.styles.arrow, wg(Object.assign({}, s10, { offsets: t10.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: l10 })))), t10.attributes.popper = Object.assign({}, t10.attributes.popper, { "data-popper-placement": t10.placement });
}, data: {} }, { name: "applyStyles", enabled: true, phase: "write", fn: function(e10) {
  var t10 = e10.state;
  Object.keys(t10.elements).forEach(function(e11) {
    var r3 = t10.styles[e11] || {}, o10 = t10.attributes[e11] || {}, i10 = t10.elements[e11];
    wt(i10) && _9(i10) && (Object.assign(i10.style, r3), Object.keys(o10).forEach(function(e12) {
      var t11 = o10[e12];
      false === t11 ? i10.removeAttribute(e12) : i10.setAttribute(e12, true === t11 ? "" : t11);
    }));
  });
}, effect: function(e10) {
  var t10 = e10.state, r3 = { popper: { position: t10.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t10.elements.popper.style, r3.popper), t10.styles = r3, t10.elements.arrow && Object.assign(t10.elements.arrow.style, r3.arrow), function() {
    Object.keys(t10.elements).forEach(function(e11) {
      var o10 = t10.elements[e11], i10 = t10.attributes[e11] || {}, a10 = Object.keys(t10.styles.hasOwnProperty(e11) ? t10.styles[e11] : r3[e11]).reduce(function(e12, t11) {
        return e12[t11] = "", e12;
      }, {});
      wt(o10) && _9(o10) && (Object.assign(o10.style, a10), Object.keys(i10).forEach(function(e12) {
        o10.removeAttribute(e12);
      }));
    });
  };
}, requires: ["computeStyles"] }] }).defaultModifiers) ? [] : R, $ = void 0 === (I = j.defaultOptions) ? wR : I, function(e10, t10, r3) {
  void 0 === r3 && (r3 = $);
  var o10, i10, a10 = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, wR, $), modifiersData: {}, elements: { reference: e10, popper: t10 }, attributes: {}, styles: {} }, l10 = [], s10 = false, u10 = { state: a10, setOptions: function(r10) {
    var o11, i11, s11, f10, d10, p10 = "function" == typeof r10 ? r10(a10.options) : r10;
    c10(), a10.options = Object.assign({}, $, a10.options, p10), a10.scrollParents = { reference: we(e10) ? wC(e10) : e10.contextElement ? wC(e10.contextElement) : [], popper: wC(t10) };
    var h10 = (i11 = Object.keys(o11 = [].concat(T, a10.options.modifiers).reduce(function(e11, t11) {
      var r11 = e11[t11.name];
      return e11[t11.name] = r11 ? Object.assign({}, r11, t11, { options: Object.assign({}, r11.options, t11.options), data: Object.assign({}, r11.data, t11.data) }) : t11, e11;
    }, {})).map(function(e11) {
      return o11[e11];
    }), s11 = /* @__PURE__ */ new Map(), f10 = /* @__PURE__ */ new Set(), d10 = [], i11.forEach(function(e11) {
      s11.set(e11.name, e11);
    }), i11.forEach(function(e11) {
      f10.has(e11.name) || function e12(t11) {
        f10.add(t11.name), [].concat(t11.requires || [], t11.requiresIfExists || []).forEach(function(t12) {
          if (!f10.has(t12)) {
            var r11 = s11.get(t12);
            r11 && e12(r11);
          }
        }), d10.push(t11);
      }(e11);
    }), _8.reduce(function(e11, t11) {
      return e11.concat(d10.filter(function(e12) {
        return e12.phase === t11;
      }));
    }, []));
    return a10.orderedModifiers = h10.filter(function(e11) {
      return e11.enabled;
    }), a10.orderedModifiers.forEach(function(e11) {
      var t11 = e11.name, r11 = e11.options, o12 = e11.effect;
      if ("function" == typeof o12) {
        var i12 = o12({ state: a10, name: t11, instance: u10, options: void 0 === r11 ? {} : r11 });
        l10.push(i12 || function() {
        });
      }
    }), u10.update();
  }, forceUpdate: function() {
    if (!s10) {
      var e11, t11, r10, o11, i11, l11, c11, f10, d10, p10, h10, m10, g10, y10, b10, _10 = a10.elements, w10 = _10.reference, x6 = _10.popper;
      if (wT(w10, x6)) {
        a10.rects = { reference: (t11 = wh(x6), r10 = "fixed" === a10.options.strategy, o11 = wt(t11), f10 = wt(t11) && (l11 = wa((i11 = t11.getBoundingClientRect()).width) / t11.offsetWidth || 1, c11 = wa(i11.height) / t11.offsetHeight || 1, 1 !== l11 || 1 !== c11), d10 = wf(t11), p10 = wu(w10, f10, r10), h10 = { scrollLeft: 0, scrollTop: 0 }, m10 = { x: 0, y: 0 }, (o11 || !o11 && !r10) && (("body" !== _9(t11) || wO(d10)) && (h10 = (e11 = t11) !== _7(e11) && wt(e11) ? { scrollLeft: e11.scrollLeft, scrollTop: e11.scrollTop } : wk(e11)), wt(t11) ? (m10 = wu(t11, true), m10.x += t11.clientLeft, m10.y += t11.clientTop) : d10 && (m10.x = wS(d10))), { x: p10.left + h10.scrollLeft - m10.x, y: p10.top + h10.scrollTop - m10.y, width: p10.width, height: p10.height }), popper: (g10 = wu(x6), y10 = x6.offsetWidth, b10 = x6.offsetHeight, 1 >= Math.abs(g10.width - y10) && (y10 = g10.width), 1 >= Math.abs(g10.height - b10) && (b10 = g10.height), { x: x6.offsetLeft, y: x6.offsetTop, width: y10, height: b10 }) }, a10.reset = false, a10.placement = a10.options.placement, a10.orderedModifiers.forEach(function(e12) {
          return a10.modifiersData[e12.name] = Object.assign({}, e12.data);
        });
        for (var k2 = 0; k2 < a10.orderedModifiers.length; k2++) {
          if (true === a10.reset) {
            a10.reset = false, k2 = -1;
            continue;
          }
          var S2 = a10.orderedModifiers[k2], O2 = S2.fn, C2 = S2.options, E2 = void 0 === C2 ? {} : C2, A2 = S2.name;
          "function" == typeof O2 && (a10 = O2({ state: a10, options: E2, name: A2, instance: u10 }) || a10);
        }
      }
    }
  }, update: (o10 = function() {
    return new Promise(function(e11) {
      u10.forceUpdate(), e11(a10);
    });
  }, function() {
    return i10 || (i10 = new Promise(function(e11) {
      Promise.resolve().then(function() {
        i10 = void 0, e11(o10());
      });
    })), i10;
  }), destroy: function() {
    c10(), s10 = true;
  } };
  if (!wT(e10, t10))
    return u10;
  function c10() {
    l10.forEach(function(e11) {
      return e11();
    }), l10 = [];
  }
  return u10.setOptions(r3).then(function(e11) {
    !s10 && r3.onFirstUpdate && r3.onFirstUpdate(e11);
  }), u10;
});
function w$() {
  return new Proxy({}, { get: (e10, t10) => t10 });
}
let wD = w$(), wL = { paddingX: [wD.paddingLeft, wD.paddingRight], paddingY: [wD.paddingTop, wD.paddingBottom], marginX: [wD.marginInlineStart, wD.marginInlineEnd], marginY: [wD.marginTop, wD.marginBottom], borderX: [wD.borderLeft, wD.borderRight], borderY: [wD.borderTop, wD.borderBottom], color: [wD.color, wD.fill], borderTopRadius: [wD.borderTopLeftRadius, wD.borderTopRightRadius], borderBottomRadius: [wD.borderBottomLeftRadius, wD.borderBottomRightRadius], borderRightRadius: [wD.borderTopRightRadius, wD.borderBottomRightRadius], borderLeftRadius: [wD.borderTopLeftRadius, wD.borderBottomLeftRadius], backgroundGradient: [wD.backgroundImage], boxSize: [wD.width, wD.height] }, wF = w$(), wV = { font: wF.fontFamily, shadow: wF.boxShadow, rounded: wF.borderRadius, roundedTop: wF.borderTopRadius, roundedBottom: wF.borderBottomRadius, roundedLeft: wF.borderLeftRadius, roundedRight: wF.borderRightRadius, bg: wF.background, bgImage: wF.backgroundImage, bgSize: wF.backgroundSize, bgPosition: wF.backgroundPosition, bgRepeat: wF.backgroundRepeat, bgAttachment: wF.backgroundAttachment, bgColor: wF.backgroundColor, bgGradient: wF.backgroundGradient, bgClip: wF.backgroundClip, pos: wF.position, p: wF.padding, pt: wF.paddingTop, pr: wF.paddingRight, pl: wF.paddingLeft, pb: wF.paddingBottom, ps: wF.paddingInlineStart, pe: wF.paddingInlineEnd, px: wF.paddingX, py: wF.paddingY, m: wF.margin, mt: wF.marginTop, mr: wF.marginRight, ml: wF.marginLeft, mb: wF.marginBottom, ms: wF.marginInlineStart, me: wF.marginInlineEnd, mx: wF.marginX, my: wF.marginY, w: wF.width, minW: wF.minWidth, maxW: wF.maxWidth, h: wF.height, minH: wF.minHeight, maxH: wF.maxHeight }, wz = w$(), wN = function() {
  for (var e10 = arguments.length, t10 = Array(e10), r3 = 0; r3 < e10; r3++)
    t10[r3] = arguments[r3];
  let o10 = [...t10];
  for (let e11 of t10)
    wV[e11] && o10.push(wV[e11]);
  return o10;
}, wB = { _rtl: "[dir=rtl] &, &[dir=rtl]", _ltr: "[dir=ltr] &, &[dir=ltr]", _dark: "&[data-theme=dark]", _light: "&[data-theme=light]" };
const _wU = class _wU {
  constructor(e10) {
    this.opt = e10;
  }
  processAll(e10) {
    let t10 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], r3 = [], { state: o10, extends: i10, ...a10 } = e10;
    if (i10)
      for (let e11 of i10)
        r3.push(...this.processAll(e11, t10));
    if (o10) {
      let e11 = {}, t11 = {};
      _wU.walkStateValues(o10, (r10, o11, i11) => {
        var a11;
        let l10 = `--${this.opt.varPrefix}-state-${o11.join("-")}`, s10 = null !== (a11 = se(o11)) && void 0 !== a11 ? a11 : "", u10 = {};
        this.process(u10, s10, r10, false), e11[l10] = u10[s10], sT(t11, [...i11, s10], `var(${l10})`);
      }), r3.push(e11), r3.push(...this.processAll(t11));
    }
    if (!su(a10)) {
      let e11 = {};
      this.processTo(e11, a10, t10), r3.push(e11);
    }
    return r3;
  }
  processTo(e10, t10) {
    let r3 = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    for (let o10 in t10)
      this.process(e10, o10, t10[o10], r3);
  }
  process(e10, t10, r3) {
    var o10, i10, a10, l10;
    let s10 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (this.opt.mixins[t10]) {
      let i11 = null === (o10 = this.opt.mixins[t10]) || void 0 === o10 ? void 0 : o10.get(r3);
      if (i11)
        for (let t11 in i11)
          this.process(e10, t11, i11[t11], s10);
      return;
    }
    let u10 = t10;
    if (ib(r3)) {
      e10[u10 = null !== (i10 = _wU.convertSelector(u10)) && void 0 !== i10 ? i10 : u10] = null !== (a10 = e10[u10]) && void 0 !== a10 ? a10 : {}, this.processTo(e10[u10], r3);
      return;
    }
    if (s10 && wL[u10 = null !== (l10 = wV[u10]) && void 0 !== l10 ? l10 : u10]) {
      for (let t11 of wL[u10])
        e10[t11] = this.opt.processValue(t11, r3);
      return;
    }
    e10[u10] = this.opt.processValue(u10, r3);
  }
};
__publicField(_wU, "supportedPseudoClasses", { active: "active", after: "after", anyLink: "any-link", before: "before", blank: "blank", checked: "checked", current: "current", default: "default", defined: "defined", disabled: "disabled", empty: "empty", enabled: "enabled", first: "first", firstChild: "first-child", firstLetter: "first-letter", firstLine: "first-line", firstOfType: "first-of-type", focus: "focus", focusVisible: "focus-visible", focusWithin: "focus-within", fullscreen: "fullscreen", future: "future", hover: "hover", inRange: "in-range", indeterminate: "indeterminate", invalid: "invalid", lastChild: "last-child", lastOfType: "last-of-type", left: "left", link: "link", localLink: "local-link", nthCol: "nth-col", nthLastCol: "nth-last-col", onlyChild: "only-child", onlyOfType: "only-of-type", optional: "optional", outOfRange: "out-of-range", past: "past", paused: "paused", pictureInPicture: "picture-in-picture", placeholderShown: "placeholder-shown", playing: "playing", readOnly: "read-only", readWrite: "read-write", required: "required", right: "right", root: "root", scope: "scope", target: "target", targetWithin: "target-within", userInvalid: "user-invalid", userValid: "user-valid", valid: "valid", visited: "visited" });
__publicField(_wU, "convertSelector", (e10) => {
  if (wB[e10])
    return wB[e10];
  let t10 = e10;
  if (t10.startsWith("$") || t10.endsWith("$") || t10.startsWith("_")) {
    let e11 = "", r3 = "";
    if (t10.startsWith("_") ? (e11 = "&", t10 = t10.slice(1)) : t10.startsWith("$") ? (e11 = "& ", t10 = t10.slice(1)) : (r3 = " &", t10 = t10.slice(0, t10.length - 1)), t10.startsWith("data") || t10.startsWith("aria")) {
      let [o10, i10] = t10.split("__");
      return i10 ? `${e11}[${sd(o10)}='${sd(i10)}']${r3}` : `${e11}[${sd(o10)}]${r3}`;
    }
    if ("&" === e11) {
      if (t10.startsWith("$"))
        return `${e11}::${t10.slice(1)}`;
      if (_wU.supportedPseudoClasses[t10]) {
        let r11 = _wU.supportedPseudoClasses[t10];
        return `${e11}:${r11}, ${e11}[data-${r11}]:not([data-${r11}='false']), ${e11}.${r11}`;
      }
      let [r10, o10] = t10.split("__"), i10 = sd(r10);
      return o10 ? `${e11}[data-${i10}='${sd(o10)}']` : `${e11}[data-${i10}]:not([data-${i10}='false'])`;
    }
  }
});
__publicField(_wU, "walkStateValues", function(e10, t10) {
  let r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { default: {}, selectorPath: [], path: [] }, { $: o10, ...i10 } = e10;
  for (let e11 in i10) {
    var a10;
    let l10 = i10[e11], s10 = null !== (a10 = i10.default) && void 0 !== a10 ? a10 : r3.default, u10 = null != o10 ? o10 : iu(s10, [...r3.path.slice(1), "$"]), c10 = u10 ? [...r3.selectorPath, u10] : r3.selectorPath, f10 = [...r3.path, e11];
    if (ib(l10)) {
      _wU.walkStateValues(l10, t10, { path: f10, selectorPath: c10, default: s10 });
      continue;
    }
    t10(l10, f10, c10);
  }
});
let wU = _wU;
var wH = ((D = wH || {}).var = "var", D.mixin = "mixin", D);
class wW {
  static create(e10, t10) {
    let { value: r3, on: o10, transform: i10 } = t10;
    return { type: e10, value: r3, on: o10, transform: i10, __Tokens: void 0, __ValueType: void 0, __CSSTokens: void 0 };
  }
  static color(e10) {
    return wW.create("var", { value: e10, on: wN(wz.color, wz.bgColor, wz.outlineColor, wz.borderColor, wz.accentColor, wz.fill, wz.stroke), transform: (e11, t10) => sl(e11) ? { default: `var(${t10(e11)})`, rgb: `var(${t10(`${e11}/rgb`)})` } : { default: `rgb(${e11[0]}, ${e11[1]}, ${e11[2]})`, rgb: `${e11[0]} ${e11[1]} ${e11[2]}` }, fallback: "" });
  }
  static space(e10) {
    return wW.create("var", { value: e10, on: wN(wz.gap, wz.rowGap, wz.columnGap, wz.top, wz.right, wz.bottom, wz.left, wz.m, wz.ms, wz.me, wz.mt, wz.mr, wz.mb, wz.ml, wz.mx, wz.my, wz.p, wz.ps, wz.pe, wz.pt, wz.pr, wz.pb, wz.pl, wz.px, wz.py) });
  }
  static boxSize(e10) {
    return wW.create("var", { value: e10, on: wN(wz.w, wz.minW, wz.maxW, wz.h, wz.minH, wz.maxH, wz.boxSize), fallback: 0 });
  }
  static fontSize(e10) {
    return wW.create("var", { value: e10, on: wN(wz.fontSize), fallback: 0 });
  }
  static lineHeight(e10) {
    return wW.create("var", { value: e10, on: wN(wz.lineHeight), fallback: 0 });
  }
  static rounded(e10) {
    return wW.create("var", { value: e10, fallback: 0, on: wN(wz.rounded, wz.roundedTop, wz.roundedBottom, wz.roundedLeft, wz.roundedRight, wD.borderTopLeftRadius, wD.borderTopRightRadius, wD.borderBottomLeftRadius, wD.borderBottomRightRadius, wD.borderTopRightRadius, wD.borderBottomRightRadius, wD.borderTopLeftRadius, wD.borderBottomLeftRadius) });
  }
  static transitionTimingFunction(e10) {
    return wW.create("var", { value: e10, on: wN(wz.transitionTimingFunction) });
  }
  static transitionDuration(e10) {
    return wW.create("var", { value: e10, on: wN(wz.transitionDuration), transform: (e11) => `${e11}ms` });
  }
  static font(e10) {
    return wW.create("var", { value: e10, on: wN(wz.font) });
  }
  static fontWeight(e10) {
    return wW.create("var", { value: e10, on: wN(wz.fontWeight) });
  }
  static letterSpacing(e10) {
    return wW.create("var", { value: e10, on: wN(wz.letterSpacing) });
  }
  static shadow(e10) {
    return wW.create("var", { value: e10, on: wN(wz.shadow) });
  }
  static customMixin(e10, t10) {
    return wW.create("mixin", { value: t10, on: [e10] });
  }
  static mixin(e10) {
    return { ...e10, __mixin: true };
  }
}
let wq = (e10, t10, r3) => {
  let o10 = e10;
  for (let e11 = 0; e11 < t10.length; e11++) {
    var i10;
    let a10 = t10[e11];
    if (e11 === t10.length - 1) {
      o10[a10] = r3;
      continue;
    }
    o10[a10] = null !== (i10 = o10[a10]) && void 0 !== i10 ? i10 : {}, o10 = o10[a10];
  }
};
const _wG = class _wG {
  constructor(e10, { cssVar: t10, transformFallback: r3 }) {
    __publicField(this, "__Tokens");
    __publicField(this, "_values", {});
    __publicField(this, "_cssVarRefs", {});
    _wG.walkValues(e10.value, (o10, i10) => {
      let a10 = i10.join("."), l10 = (o11, i11) => {
        let a11 = e10.transform ? e10.transform(o11, t10) : r3(o11);
        if (nW(a11))
          for (let e11 in a11)
            i11(a11[e11], "default" === e11 ? "" : e11);
        else
          i11(a11, "");
      };
      if (sT(this._cssVarRefs, [a10], t10(a10)), ib(o10))
        for (let e11 in o10)
          l10(o10[e11], (t11, r10) => {
            sT(this._values, [`${a10}${r10 ? `/${r10}` : ""}`, e11], t11);
          });
      else
        l10(o10, (e11, t11) => {
          sT(this._values, [`${a10}${t11 ? `/${t11}` : ""}`], e11);
        });
    });
  }
  get tokens() {
    return oG(this._values);
  }
  get(e10, t10, r3) {
    let o10 = this._values[e10];
    if (nW(o10)) {
      var i10;
      return r3 ? o10[t10] : null !== (i10 = o10[t10]) && void 0 !== i10 ? i10 : o10[_wG.defaultMode];
    }
    return r3 ? t10 === _wG.defaultMode ? o10 : void 0 : o10;
  }
  use(e10) {
    let t10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (this._cssVarRefs[e10])
      return t10 ? `${this._cssVarRefs[e10]}` : `var(${this._cssVarRefs[e10]})`;
  }
};
__publicField(_wG, "defaultMode", "_default");
__publicField(_wG, "walkValues", function(e10, t10) {
  let r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let o10 in e10) {
    let i10 = e10[o10];
    if (ib(i10)) {
      if (sa(i10, "_default")) {
        t10(i10, [...r3, o10]);
        continue;
      }
      _wG.walkValues(i10, t10, [...r3, o10]);
      continue;
    }
    t10(i10, [...r3, o10]);
  }
});
let wG = _wG;
const _wY = class _wY {
  constructor(e10) {
    __publicField(this, "_values", {});
    _wY.walkValue(e10.value, (e11, t10) => {
      let r3 = t10.join(".");
      sT(this._values, [r3], sm(e11, "__mixin"));
    });
  }
  get tokens() {
    return oG(this._values);
  }
  get(e10) {
    return this._values[e10];
  }
};
__publicField(_wY, "walkValue", function(e10, t10) {
  let r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let o10 in e10) {
    let i10 = e10[o10];
    if (ib(i10)) {
      if (sa(i10, "__mixin")) {
        t10(i10, [...r3, o10]);
        continue;
      }
      _wY.walkValue(i10, t10, [...r3, o10]);
      continue;
    }
    t10(i10, [...r3, o10]);
  }
});
let wY = _wY;
let wK = { primary: ["primary"], secondary: ["secondary"], tertiary: ["tertiary"], error: ["error"], warning: ["warning"], success: ["success"], neutral: ["surface", "outline"] }, wZ = (e10) => {
  let t10 = iu(e10, ["color", "sys"], {});
  return { ...e10, color: { sys: sp(wK, (e11) => function(e12, t11) {
    if (null == e12)
      return {};
    var r3 = ns(ad(e12), function(e13) {
      return [e13];
    });
    return t11 = l4(t11), function(e13, t12, r10) {
      for (var o10 = -1, i10 = t12.length, a10 = {}; ++o10 < i10; ) {
        var l10 = t12[o10], s10 = is(e13, l10);
        r10(s10, l10) && sv(a10, ii(l10, e13), s10);
      }
      return a10;
    }(e12, r3, function(e13, r10) {
      return t11(e13, r10[0]);
    });
  }(t10, (t11, r3) => {
    var o10;
    return o10 = (e12) => r3.indexOf(e12) > -1, (nu(e11) ? lN : function(e12, t12) {
      var r10;
      return l8(e12, function(e13, o11, i10) {
        return !(r10 = t12(e13, o11, i10));
      }), !!r10;
    })(e11, l4(o10));
  })) } };
}, wX = (e10) => (t10) => `rgba(var(${t10}--rgb) / ${e10})`, wJ = (e10) => nQ(e10) && sa(e10, "token");
function wQ(e10, t10) {
  return Object.assign((e11) => t10(e11), { toString: () => e10, token: e10 });
}
let w0 = (e10) => e10.reduce((e11, t10) => Object.assign(e11, { [t10]: true }), {});
const _w1 = class _w1 {
  constructor(e10, t10 = {}) {
    __publicField(this, "mode");
    __publicField(this, "varPrefix");
    __publicField(this, "cssVars", {});
    __publicField(this, "tokens", {});
    __publicField(this, "propValues", {});
    __publicField(this, "mixins", {});
    __publicField(this, "dp", (e10) => 0 === e10 ? 0 : `calc(${e10} * var(${this.cssVar("space", "dp")}))`);
    __publicField(this, "transformFallback", (e10, t10) => _w1.propsCanBaseDp[e10] && sc(t10) ? _w1.propsCanPercent[e10] && 1 > Math.abs(t10) ? `${100 * t10}%` : this.dp(t10) : t10);
    __publicField(this, "token", new Proxy({}, { get: (e10, t10) => {
      var r3, o10;
      return this.tokens[t10] ? Object.assign((e11) => {
        var r10;
        return null === (r10 = this.tokens[t10]) || void 0 === r10 ? void 0 : r10.get(e11, `_${this.mode}`);
      }, { tokens: null === (r3 = this.tokens[t10]) || void 0 === r3 ? void 0 : r3.tokens }) : this.mixins[t10] ? Object.assign((e11) => {
        var r10;
        return null === (r10 = this.mixins[t10]) || void 0 === r10 ? void 0 : r10.get(e11);
      }, { tokens: null === (o10 = this.mixins[t10]) || void 0 === o10 ? void 0 : o10.tokens }) : void 0;
    } }));
    __publicField(this, "processValue", (e10, t10) => {
      var r3, o10, i10;
      if (wJ(t10)) {
        let r10 = null === (o10 = this.propValues[e10]) || void 0 === o10 ? void 0 : o10.use(t10.token, true);
        return r10 ? t10(r10) : void 0;
      }
      return null !== (i10 = null === (r3 = this.propValues[e10]) || void 0 === r3 ? void 0 : r3.use(t10)) && void 0 !== i10 ? i10 : this.transformFallback(e10, t10);
    });
    __publicField(this, "unstable_sx", (e10) => new wU({ mixins: this.mixins, varPrefix: this.varPrefix, processValue: this.processValue }).processAll(e10));
    var r3, o10;
    for (let i10 in this.theme = e10, this.varPrefix = null !== (r3 = t10.varPrefix) && void 0 !== r3 ? r3 : "vk", this.mode = null !== (o10 = t10.mode) && void 0 !== o10 ? o10 : "light", sT(this.cssVars, [this.cssVar("space", "dp")], "0.1rem"), e10) {
      let t11 = e10[i10];
      if (t11) {
        if (t11.type === wH.var) {
          let e11 = new wG(t11, { cssVar: (e12) => this.cssVar(i10, e12), transformFallback: (e12) => this.transformFallback(t11.on[0], e12) });
          for (let r10 of (this.tokens[i10] = e11, t11.on))
            this.propValues[r10] = e11;
          for (let t12 of e11.tokens)
            for (let r10 of ["light", "dark"]) {
              let o11 = r10 === this.mode ? "_default" : `_${r10}`, a10 = e11.get(t12, o11, true);
              sf(a10) || ("_default" === o11 ? sT(this.cssVars, [this.cssVar(i10, t12)], a10) : sT(this.cssVars, [o11, this.cssVar(i10, t12)], a10));
            }
          continue;
        }
        if (t11.type === wH.mixin) {
          let e11 = new wY(t11);
          for (let r10 of t11.on)
            this.mixins[r10] = e11;
        }
      }
    }
  }
  static create(e10, t10) {
    return new _w1(e10, t10);
  }
  cssVar(e10, t10) {
    return `--${this.varPrefix}-${sd(e10)}__${t10.replaceAll("/", "--").replaceAll(".", "__")}`;
  }
  get rootCSSVars() {
    return this.cssVars;
  }
  unstable_css(e10, t10) {
    var r3;
    let o10 = null != t10 ? t10 : {};
    return o10.__emotion_styles = null !== (r3 = o10.__emotion_styles) && void 0 !== r3 ? r3 : bV(this.unstable_sx(t10), null == e10 ? void 0 : e10.registered, {}), o10.__emotion_styles;
  }
  toFigmaTokens() {
    let e10 = { space: { dp: { $type: "sizing", $value: 1 } } }, t10 = {}, r3 = {}, o10 = (e11, t11) => nW(t11) ? { $type: e11, $value: sp(t11, (t12) => o10(e11, t12).$value) } : sl(t11) ? { $type: e11, $value: t11.replace(/var\(([^)]+)\)/g, (e12) => {
      var t12, r10;
      let o11 = null !== (r10 = null === (t12 = e12.slice(4, e12.length - 1).slice(`--${this.varPrefix}-`.length).split("--")[0]) || void 0 === t12 ? void 0 : t12.split("__").map((e13, t13) => 0 === t13 ? i7(e13) : e13).join(".")) && void 0 !== r10 ? r10 : "";
      return o11.startsWith("sys.") ? `{${o11}}` : `{seed.${o11}}`;
    }).replace(/calc\(.+\)$/g, (e12) => e12.slice(5, e12.length - 1)) } : { $type: e11, $value: t11 };
    for (let i10 in this.tokens) {
      let a10 = this.tokens[i10], l10 = (l11) => {
        for (let s10 of a10.tokens)
          if (!s10.includes("/")) {
            if (s10.startsWith("sys.")) {
              let e11 = a10.get(s10, "_default"), u10 = a10.get(s10, "_dark");
              wq(t10, [i10, ...s10.split(".")], o10(l11, e11)), e11 !== u10 && wq(r3, [i10, ...s10.split(".")], o10(l11, u10));
            } else
              wq(e10, [i10, ...s10.split(".")], o10(l11, a10.get(s10, "_default")));
          }
      };
      switch (i10) {
        case "color":
          l10("color");
          break;
        case "rounded":
          l10("borderRadius");
          break;
        case "shadow":
          l10("boxShadow");
          break;
        case "font":
          l10("fontFamily");
          break;
        case "fontWeight":
          l10("fontWeight");
      }
    }
    for (let e11 in this.mixins) {
      let r10 = this.mixins[e11];
      if (!r10)
        continue;
      let i10 = (i11) => {
        for (let a10 of r10.tokens) {
          let l10 = r10.get(a10);
          if (!l10)
            continue;
          let s10 = this.unstable_sx(l10)[0];
          wq(t10, [e11, ...a10.split(".")], o10(i11, s10));
        }
      };
      "textStyle" === e11 && i10("typography");
    }
    return { seed: e10, base: wZ(t10), dark: wZ(r3) };
  }
};
__publicField(_w1, "propsCanPercent", w0([...wW.boxSize({}).on]));
__publicField(_w1, "propsCanBaseDp", w0([...wW.boxSize({}).on, ...wW.space({}).on, ...wW.fontSize({}).on, ...wW.letterSpacing({}).on, ...wW.lineHeight({}).on, ...wW.rounded({}).on]));
let w1 = _w1;
let w2 = { shadow: wW.shadow({ 0: { _default: "0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0)", _dark: "0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0)" }, 1: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)", _dark: "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 2: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)", _dark: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 3: { _default: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)" }, 4: { _default: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)" }, 5: { _default: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)", _dark: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)" } }), elevation: wW.customMixin("elevation", { 0: wW.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "0", _hover: { shadow: "1" } }), 1: wW.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "1", _hover: { shadow: "2" } }), 2: wW.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "2", _hover: { shadow: "3" } }), 3: wW.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "3", _hover: { shadow: "4" } }), 4: wW.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "4", _hover: { shadow: "5" } }) }) }, w4 = (e10, t10, r3, o10) => Object.assign(function(e11, t11, r10, o11) {
  if (e11 === t11 && r10 === o11)
    return bo;
  let i10 = new Float32Array(11);
  for (let t12 = 0; t12 < 11; ++t12)
    i10[t12] = bA(0.1 * t12, e11, r10);
  return (a10) => 0 === a10 || 1 === a10 ? a10 : bA(function(t12) {
    let o12 = 0, a11 = 1;
    for (; 10 !== a11 && i10[a11] <= t12; ++a11)
      o12 += 0.1;
    let l10 = o12 + (t12 - i10[--a11]) / (i10[a11 + 1] - i10[a11]) * 0.1, s10 = bP(l10, e11, r10);
    return s10 >= 1e-3 ? function(e12, t13, r11, o13) {
      for (let i11 = 0; i11 < 8; ++i11) {
        let i12 = bP(t13, r11, o13);
        if (0 === i12)
          break;
        let a12 = bA(t13, r11, o13) - e12;
        t13 -= a12 / i12;
      }
      return t13;
    }(t12, l10, e11, r10) : 0 === s10 ? l10 : function(e12, t13, r11, o13, i11) {
      let a12, l11;
      let s11 = 0;
      do
        (a12 = bA(l11 = t13 + (r11 - t13) / 2, o13, i11) - e12) > 0 ? r11 = l11 : t13 = l11;
      while (Math.abs(a12) > 1e-7 && ++s11 < 10);
      return l11;
    }(t12, o12, o12 + 0.1, e11, r10);
  }(a10), t11, o11);
}(e10, t10, r3, o10), { toString: () => `cubic-bezier(${e10}, ${t10}, ${r3}, ${o10})` }), w3 = { duration: { sm1: 50, sm2: 100, sm3: 150, sm4: 200, md1: 250, md2: 300, md3: 350, md4: 400, lg1: 450, lg2: 500, lg3: 550, lg4: 600, xl1: 700, xl2: 800, xl3: 900, xl4: 1e3 }, easing: { linear: w4(0, 0, 1, 1), standard: Object.assign(w4(0.2, 0, 0, 1), { accelerate: w4(0.3, 0, 1, 1), decelerate: w4(0, 0, 0, 1) }), emphasized: Object.assign(w4(0.2, 0, 0, 1), { accelerate: w4(0.3, 0, 0.8, 0.15), decelerate: w4(0.05, 0.7, 0.1, 1) }), legacy: Object.assign(w4(0.4, 0, 0.2, 1), { decelerate: w4(0, 0, 0.2, 1), accelerate: w4(0.4, 0, 1, 1) }) } }, w5 = (e10, t10) => {
  let r3 = null != t10 ? t10 : { ...e10, from: { ...e10.to }, to: { ...e10.from } };
  return g1({ onComplete: gQ.custom(), $default: gQ.custom() }, (t11, o10) => {
    let i10, { slots: a10, emit: l10 } = o10, s10 = (t12, r10) => {
      i10 = bS({ ...e10, autoplay: true, onComplete: () => {
        r10(), l10("complete", "enter");
      }, onUpdate: (e11) => {
        Object.assign(t12.style, e11);
      } });
    }, u10 = (e11, t12) => {
      i10 = bS({ ...r3, autoplay: true, onComplete: () => {
        t12(), l10("complete", "leave");
      }, onUpdate: (t13) => {
        Object.assign(e11.style, t13);
      } });
    }, c10 = () => {
      null == i10 || i10.stop();
    };
    return () => {
      var e11;
      return mL(dq, { css: false, onEnter: s10, onEnterCancelled: c10, onLeave: u10, onLeaveCancelled: c10, children: null === (e11 = a10.default) || void 0 === e11 ? void 0 : e11.call(a10) });
    };
  }, { name: "Transition" });
}, w6 = { transitionDuration: wW.transitionDuration(w3.duration), transitionTimingFunction: wW.transitionTimingFunction({ linear: w3.easing.linear.toString(), standard: w3.easing.standard.toString(), "standard-accelerate": w3.easing.standard.accelerate.toString(), "standard-decelerate": w3.easing.standard.decelerate.toString(), emphasized: w3.easing.emphasized.toString(), "emphasized-decelerate": w3.easing.emphasized.decelerate.toString(), "emphasized-accelerate": w3.easing.emphasized.accelerate.toString(), legacy: w3.easing.legacy.toString(), "legacy-decelerate": w3.easing.legacy.decelerate.toString(), "legacy-accelerate": w3.easing.legacy.accelerate.toString() }) }, w8 = { 0: true, 10: true, 20: true, 30: true, 40: true, 50: true, 60: true, 70: true, 80: true, 90: true, 95: true, 100: true }, w9 = (e10) => {
  let t10 = { r: e10 >> 16 & 255, g: e10 >> 8 & 255, b: 255 & e10 };
  return [t10.r, t10.g, t10.b];
}, w7 = (e10) => ({ primary: true, secondary: true, tertiary: true, error: true, warning: true, success: true })[e10];
const _xe = class _xe {
  constructor(e10) {
    this.seeds = e10;
  }
  normalizeRoleRules() {
    let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t10 = { shadow: ["neutral", 0, 0], scrim: ["neutral", 0, 0], outline: ["neutralVariant", 60, 87], "outline-variant": ["neutralVariant", 30, 80], surface: ["neutral", 10, 99], "on-surface": ["neutral", 90, 10], "surface-variant": ["neutralVariant", 30, 90], "on-surface-variant": ["neutralVariant", 80, 30], "surface-dim": ["neutral", 6, 87], "surface-bright": ["neutral", 24, 98], "surface-container-lowest": ["neutral", 4, 100], "surface-container-low": ["neutral", 10, 96], "surface-container": ["neutral", 12, 94], "surface-container-high": ["neutral", 17, 92], "surface-container-highest": ["neutral", 22, 90], "inverse-surface": ["neutral", 90, 20], "inverse-on-surface": ["neutral", 20, 95], "inverse-primary": ["primary", 40, 80] };
    for (let e11 in this.seeds)
      e11.startsWith("neutral") || (t10[e11] = [e11, 80, 40], t10[`on-${e11}`] = [e11, 20, 100], t10[`${e11}-container`] = [e11, 30, 90], t10[`on-${e11}-container`] = [e11, 90, 10]);
    return { ...t10, ...e10 };
  }
  getThemeRoleColors(e10) {
    let t10 = {}, r3 = {};
    for (let a10 in e10) {
      let [l10, s10, u10] = iu(e10, [a10], []);
      if (this.seeds[l10]) {
        var o10, i10;
        r3[a10] = w8[s10] ? `${l10}.${s10}` : null === (o10 = this.seeds[l10]) || void 0 === o10 ? void 0 : o10.tone(s10), t10[a10] = w8[u10] ? `${l10}.${u10}` : null === (i10 = this.seeds[l10]) || void 0 === i10 ? void 0 : i10.tone(u10);
      }
    }
    return [t10, r3];
  }
  toDesignTokens() {
    let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [t10, r3] = this.getThemeRoleColors(this.normalizeRoleRules(e10)), o10 = {}, i10 = {};
    for (let e11 in t10)
      if (o10[`${e11}`] = { _default: sc(t10[e11]) ? w9(t10[e11]) : t10[e11], _dark: sc(r3[e11]) ? w9(r3[e11]) : r3[e11] }, w7(e11) && (i10[`${e11}`] = wW.mixin({ bgColor: `sys.${e11}`, color: `sys.on-${e11}` }), i10[`${e11}-container`] = wW.mixin({ bgColor: `sys.${e11}-container`, color: `sys.on-${e11}-container` })), e11.startsWith("surface")) {
        if (e11.includes("container")) {
          i10[`${e11}`] = wW.mixin({ bgColor: `sys.${e11}`, color: "sys.on-surface" });
          continue;
        }
        i10[`${e11}`] = wW.mixin({ bgColor: `sys.${e11}`, color: "sys.on-surface" }), i10[`on-${e11}`] = wW.mixin({ bgColor: `sys.on-${e11}`, color: "sys.inverse-on-surface" });
      }
    let a10 = (e11) => Object.keys(w8).reduce((t11, r10) => Object.assign(t11, { [r10]: w9(e11.tone(parseInt(r10))) }), {});
    return { color: wW.color({ ...sp(this.seeds, (e11) => a10(e11)), white: [255, 255, 255], black: [0, 0, 0], sys: o10 }), containerStyle: wW.customMixin("containerStyle", { sys: i10 }) };
  }
};
__publicField(_xe, "toHEX", (e10) => `#${w9(e10).map((e11) => {
  var t10, r3, o10, i10, a10, l10;
  return t10 = e11.toString(16), r3 = 2, t10 = io(t10), a10 = (i10 = (o10 = r3) ? (o10 = function(e12) {
    if ("number" == typeof e12)
      return e12;
    if (nl(e12))
      return nq;
    if (nW(e12)) {
      var t11, r10 = "function" == typeof e12.valueOf ? e12.valueOf() : e12;
      e12 = nW(r10) ? r10 + "" : r10;
    }
    if ("string" != typeof e12)
      return 0 === e12 ? e12 : +e12;
    e12 = (t11 = e12) ? t11.slice(0, function(e13) {
      for (var t12 = e13.length; t12-- && nU.test(e13.charAt(t12)); )
        ;
      return t12;
    }(t11) + 1).replace(nH, "") : t11;
    var o11 = nY.test(e12);
    return o11 || nK.test(e12) ? nZ(e12.slice(2), o11 ? 2 : 8) : nG.test(e12) ? nq : +e12;
  }(o10)) === nX || o10 === -nX ? (o10 < 0 ? -1 : 1) * 17976931348623157e292 : o10 == o10 ? o10 : 0 : 0 === o10 ? o10 : 0) % 1, l10 = (r3 = i10 == i10 ? a10 ? i10 - a10 : i10 : 0) ? sM(t10) : 0, r3 && l10 < r3 ? function(e12, t11) {
    var r10 = (t11 = void 0 === t11 ? " " : np(t11)).length;
    if (r10 < 2)
      return r10 ? sy(t11, e12) : t11;
    var o11 = sy(t11, sj(e12 / sM(t11)));
    return ik(t11) ? iw(iI(o11), 0, e12).join("") : o11.slice(0, e12);
  }(r3 - l10, "0") + t10 : t10;
}).join("")}`);
__publicField(_xe, "fromColors", (e10) => {
  let { primary: t10, secondary: r3, tertiary: o10, neutral: i10, neutralVariant: a10, error: l10, ...s10 } = e10, u10 = _o.contentFromColors({ primary: _i(t10), secondary: r3 ? _i(r3) : void 0, tertiary: o10 ? _i(o10) : void 0, error: l10 ? _i(l10) : void 0 });
  return i10 && (u10.n1 = _n.fromHueAndChroma(_i(i10), 4)), a10 && (u10.n2 = _n.fromHueAndChroma(_i(a10), 8)), new _xe({ primary: u10.a1, secondary: u10.a2, tertiary: u10.a3, neutral: u10.n1, neutralVariant: u10.n2, error: u10.error, ...sp(s10, (e11) => _n.fromInt(_i(e11))) });
});
let xe = _xe;
let xt = wW.rounded({ xs: 4, sm: 8, md: 12, lg: 16, xl: 28 }), xr = { font: wW.font({ brand: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', plain: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', code: "'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace" }), fontWeight: wW.fontWeight({ regular: 400, medium: 500, bold: 700 }), textStyle: wW.customMixin("textStyle", { sys: { "display-large": wW.mixin({ lineHeight: 64, fontSize: 57, letterSpacing: -0.25, fontWeight: "regular", font: "brand" }), "display-medium": wW.mixin({ lineHeight: 52, fontSize: 45, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "display-small": wW.mixin({ lineHeight: 44, fontSize: 36, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-large": wW.mixin({ lineHeight: 40, fontSize: 32, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-medium": wW.mixin({ lineHeight: 36, fontSize: 28, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-small": wW.mixin({ lineHeight: 32, fontSize: 24, letterSpacing: 0, fontWeight: "regular", font: "plain" }), "title-large": wW.mixin({ lineHeight: 28, fontSize: 22, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "title-medium": wW.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.15, fontWeight: "medium", font: "plain" }), "title-small": wW.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-large": wW.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-medium": wW.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "label-small": wW.mixin({ lineHeight: 16, fontSize: 11, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "body-large": wW.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.5, fontWeight: "regular", font: "plain" }), "body-medium": wW.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.25, fontWeight: "regular", font: "plain" }), "body-small": wW.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.4, fontWeight: "regular", font: "plain" }) } }) }, xn = xe.fromColors({ primary: "#1270f5", secondary: "#8a90a5", tertiary: "#b58391", neutral: "#5e5e5e", error: "#d93f23", warning: "#e69c00", success: "#5ac220" }), xo = { ...xr, ...w6, ...w2, rounded: xt, ...xn.toDesignTokens({ primary: ["primary", 80, 50] }) }, xi = w1.create(xo, { varPrefix: "vk" }), xa = yi(() => xi, { name: "Theme" }), xl = yi(() => _Y({ key: "css" }), { name: "Cache" }), xs = (e10) => (t10) => {
  if (t10.serialized) {
    if (t10.withoutScoping)
      e10.insert("", t10.serialized, e10.sheet, true);
    else {
      var r3;
      _Z(e10, t10.serialized, null === (r3 = t10.isStringTag) || void 0 === r3 || r3);
    }
  }
}, xu = g1({ sx: gQ.custom(), component: gQ.custom().optional().default("div") }, (e10, t10) => {
  var r3;
  let { slots: o10, expose: i10 } = t10, a10 = xa.use(), l10 = xl.use(), s10 = a10.unstable_css(l10, null !== (r3 = e10.sx) && void 0 !== r3 ? r3 : {}), u10 = () => "0" !== s10.name ? `${l10.key}-${s10.name}` : "", c10 = xs(l10);
  f_(() => {
    c10({ serialized: s10, isStringTag: true });
  });
  let f10 = yo();
  return i10({ $$forwardRef: f10 }), () => {
    var t11;
    return mL(null !== (t11 = e10.component) && void 0 !== t11 ? t11 : "div", { ref: f10, class: u10(), children: o10 });
  };
}), xc = (e10, t10) => (r3) => {
  let o10 = {};
  for (let t11 in e10)
    "component" !== t11 && "sx" !== t11 && e10[t11] && (o10[`data-${t11}`] = e10[t11]);
  return mL(r3, { ...o10, children: t10.slots });
};
function xf(e10, t10, r3) {
  var o10;
  let i10 = null !== (o10 = nQ(t10) ? t10 : r3) && void 0 !== o10 ? o10 : xc, a10 = ib(t10) ? t10 : {};
  return (t11) => {
    let r10 = g1({ ...a10, sx: gQ.custom().optional(), component: gQ.custom().optional() }, (o11, a11) => {
      let l10 = xa.use(), s10 = xl.use(), u10 = xs(s10);
      t11.label = r10.name;
      let c10 = c_(""), f10 = l10.unstable_css(s10, t11), d10 = () => "0" !== f10.name ? `${s10.key}-${f10.name}${c10.value}` : `${c10.value}`;
      if (e10.__styled) {
        var p10;
        let e11 = l10.unstable_css(s10, null !== (p10 = o11.sx) && void 0 !== p10 ? p10 : {});
        "0" !== e11.name && (c10.value = ` ${s10.key}-${e11.name}`), f_(() => {
          u10({ serialized: f10, isStringTag: true }), u10({ serialized: e11, isStringTag: true });
        });
      } else
        fb(() => {
          u10({ serialized: f10, isStringTag: true });
        });
      let h10 = i10(o11, a11);
      return () => {
        if (e10.__styled) {
          let t13 = h10(e10);
          return t13 ? dx(t13, { component: o11.component, class: d10() }) : null;
        }
        let t12 = h10(xu);
        return t12 ? dx(t12, { component: o11.component || e10, sx: o11.sx, class: d10() }) : null;
      };
    });
    return r10.__styled = true, r10;
  };
}
let xd = g1({ styles: gQ.custom() }, (e10) => {
  let { styles: t10 } = e10, r3 = xa.use(), o10 = xl.use(), i10 = xs(o10), a10 = r3.unstable_css(o10, sl(t10) ? { "&": t10 } : t10);
  return fb(() => {
    i10({ serialized: a10, withoutScoping: true });
  }), () => null;
}), xp = g1(() => {
  let e10 = xa.use().rootCSSVars;
  return () => mL(xd, { styles: { ":host, :root, [data-theme]": e10, "*, *::after, *::before": { boxSizing: "border-box" }, html: { fontSize: "10px" }, a: { color: "inherit" }, body: { textStyle: "sys.body-medium" } } });
}), xh = yi(() => ({ mountPoint: () => document.body }), { name: "OverlaySetting" }), xm = yi(() => new xv(c_(null), c_(null), () => false), { name: "Overlay" });
class xv {
  constructor(e10, t10, r3) {
    __publicField(this, "children", []);
    __publicField(this, "add", (e10) => (this.children = [...this.children, e10], () => {
      this.children = this.children.filter((t10) => t10 !== e10);
    }));
    __publicField(this, "isClickInside", (e10) => {
      for (let t11 of this.children)
        if (t11.isClickInside(e10))
          return true;
      let t10 = ck(this.triggerRef), r3 = ck(this.contentRef);
      return t10 && (t10 === e10.target || e10.composedPath().includes(t10)) || r3 && (r3 === e10.target || e10.composedPath().includes(r3));
    });
    this.triggerRef = e10, this.contentRef = t10, this.isOpen = r3;
  }
  topmost() {
    return 0 === this.children.filter((e10) => e10.isOpen()).length;
  }
}
let xg = g1({ isOpen: gQ.boolean().optional(), style: gQ.custom().optional(), contentRef: gQ.custom().optional(), triggerRef: gQ.custom().optional(), onClickOutside: gQ.custom(), onEscKeydown: gQ.custom(), onContentBeforeMount: gQ.custom(), $transition: gQ.custom().optional(), $default: gQ.custom().optional() }, (e10, t10) => {
  var r3;
  let { slots: o10, attrs: i10, emit: a10 } = t10, l10 = e10.contentRef || c_(null), s10 = new xv(null !== (r3 = e10.triggerRef) && void 0 !== r3 ? r3 : c_(null), l10, () => !!e10.isOpen), u10 = xh.use();
  return fk(xm.use().add(s10)), window && g4(g9(l10, "value"), yn((e11) => {
    if (!e11)
      return;
    let t11 = (e12) => {
      s10.isClickInside(e12) || a10("click-outside", e12);
    };
    return window.addEventListener("pointerdown", t11), () => {
      window.removeEventListener("pointerdown", t11);
    };
  }), yn((e11) => {
    if (!e11)
      return;
    let t11 = (e12) => {
      "Escape" === e12.key && s10.topmost() && a10("esc-keydown", e12);
    };
    return window.addEventListener("keydown", t11), () => {
      window.removeEventListener("keydown", t11);
    };
  }), g5()), () => {
    var t11;
    let r10 = e10.isOpen ? dx(mL("div", { ...i10, ref: l10, style: e10.style, children: mL(xm, { value: s10, children: null === (t11 = o10.default) || void 0 === t11 ? void 0 : t11.call(o10) }) }), { onVnodeBeforeMount: () => {
      a10("content-before-mount");
    } }) : null;
    return mL(du, { to: u10.mountPoint(), children: o10.transition ? o10.transition({ content: r10 }) : r10 });
  };
}, { inheritAttrs: false, name: "Overlay" });
function xy(e10, t10) {
  return { fn: e10, enabled: true, ...t10 };
}
let xb = g1({ isOpen: xg.propTypes.isOpen, onClickOutside: xg.propTypes.onClickOutside, placement: gQ.custom().optional(), modifiers: gQ.custom().optional(), $transition: xg.propTypes.$transition, $content: gQ.custom(), $default: gQ.custom() }, (e10, t10) => {
  let { slots: r3, emit: o10, attrs: i10 } = t10, a10 = c_(null), l10 = c_(null);
  return c6(() => l10.value, (t11) => {
    if (t11 && a10.value) {
      var r10, o11;
      wI(a10.value, t11, { placement: null !== (r10 = e10.placement) && void 0 !== r10 ? r10 : "bottom", modifiers: [...null !== (o11 = e10.modifiers) && void 0 !== o11 ? o11 : [], wj] });
    }
  }, void 0), () => {
    var t11, s10;
    let u10 = null === (t11 = r3.default) || void 0 === t11 ? void 0 : t11.call(r3)[0];
    return u10 ? mD(df, { children: [dx(u10, { ...i10, onVnodeMounted: (e11) => {
      a10.value = function e12(t12) {
        if (t12) {
          if (t12 instanceof HTMLElement)
            return t12;
          if (t12 instanceof Text)
            return e12(t12.nextElementSibling);
        }
        return null;
      }(e11.el);
    } }), mL(xg, { triggerRef: a10, contentRef: l10, isOpen: e10.isOpen, onClickOutside: (e11) => o10("click-outside", e11), style: { zIndex: 100 }, $transition: r3.transition, children: null === (s10 = r3.content) || void 0 === s10 ? void 0 : s10.call(r3) })] }) : null;
  };
}, { name: "Popper", inheritAttrs: false });
var x_ = "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z", xw = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z", xx = "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z", xk = "M2,21L23,12L2,3V10L17,12L2,14V21Z";
let xS = xf("button", { hover: gQ.boolean().optional(), focus: gQ.boolean().optional(), active: gQ.boolean().optional(), disabled: gQ.boolean().optional() })({ textStyle: "sys.label-large", display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none", outline: "none", overflow: "hidden", border: 0, margin: 0, userSelect: "none", cursor: "pointer", _disabled: { cursor: "not-allowed" }, gap: 8, h: 40, px: 24, rounded: 20, transitionDuration: "md4", transitionTimingFunction: "standard-accelerate", bg: "none", pos: "relative", zIndex: 1, _$before: { content: '""', pos: "absolute", top: 0, right: 0, left: 0, bottom: 0, zIndex: -1, transitionDuration: "md1", transitionTimingFunction: "standard-accelerate" }, $data_icon: { boxSize: 18, _data_placement__start: { ml: -8 }, _data_placement__end: { mr: -8 } } }), xO = xf(xS)({ containerStyle: "sys.primary", shadow: "1", _hover: { shadow: "2", _$before: { bgColor: wQ("white", wX(0.08)) } }, _focus: { shadow: "2", _$before: { bgColor: wQ("white", wX(0.12)) } }, _active: { shadow: "2", _$before: { bgColor: wQ("white", wX(0.12)) } }, _disabled: { shadow: "0", color: wQ("sys.on-surface", wX(0.38)), bgColor: "rgba(0,0,0,0)", _$before: { bgColor: wQ("sys.on-surface", wX(0.12)) } } }), xC = xf(xS)({ color: "sys.primary", shadow: "1", _$before: { bgColor: "sys.surface-container-low" }, _hover: { shadow: "2", _$before: { bgColor: wQ("sys.primary", wX(0.08)) } }, _focus: { shadow: "2", _$before: { bgColor: wQ("sys.primary", wX(0.12)) } }, _active: { shadow: "2", _$before: { bgColor: wQ("sys.primary", wX(0.12)) } }, _disabled: { shadow: "0", color: wQ("sys.on-surface", wX(0.38)), _$before: { bgColor: wQ("sys.on-surface", wX(0.12)) } } }), xE = xf(xS)({ extends: [{ px: 16, $data_icon: { _data_placement__start: { ml: -4 }, _data_placement__end: { mr: -4 } } }], color: "sys.primary", _$before: { bgColor: "rgba(0,0,0,0)" }, _hover: { _$before: { bgColor: wQ("sys.primary", wX(0.08)) } }, _focus: { _$before: { bgColor: wQ("sys.primary", wX(0.12)) } }, _active: { _$before: { bgColor: wQ("sys.primary", wX(0.12)) } }, _disabled: { color: wQ("sys.on-surface", wX(0.38)), bgColor: "rgba(0,0,0,0)", _$before: { bgColor: "rgba(0,0,0,0)" } } }), xA = xf(xS)({ containerStyle: "sys.secondary-container", color: "sys.primary", shadow: "0", _hover: { shadow: "1", _$before: { bgColor: wQ("sys.on-secondary-container", wX(0.08)) } }, _focus: { _$before: { bgColor: wQ("sys.on-secondary-container", wX(0.12)) } }, _active: { _$before: { bgColor: wQ("sys.on-secondary-container", wX(0.12)) } }, _disabled: { color: wQ("sys.on-surface", wX(0.38)), bgColor: "rgba(0,0,0,0)", shadow: "0", _$before: { bgColor: wQ("sys.on-surface", wX(0.12)) } } }), xP = xf(xS)({ extends: [{ border: "1px solid" }], color: "sys.primary", bgColor: "rgba(0,0,0,0)", borderColor: "sys.outline", _hover: { bgColor: wQ("sys.primary", wX(0.08)) }, _active: { bgColor: wQ("sys.primary", wX(0.12)) }, _focus: { bgColor: wQ("sys.primary", wX(0.12)) }, _disabled: { color: wQ("sys.on-surface", wX(0.38)), bgColor: "rgba(0,0,0,0)", borderColor: wQ("sys.on-surface", wX(0.12)) } }), xM = xf(xE, {})({ boxSize: 40, p: 0 }), xj = xf("span", { placement: gQ.enums(["start", "end"]).optional(), path: gQ.string() }, (e10, t10) => (t11) => mL(t11, { "data-icon": true, "data-placement": e10.placement, children: mL("svg", { viewBox: "0 0 24 24", children: mL("path", { d: e10.path }) }) }))({ boxSize: "1.2em" }), xR = w5({ from: { opacity: 0 }, to: { opacity: 1 }, duration: w3.duration.md1, easing: w3.easing.standard.accelerate }, { from: { opacity: 1 }, to: { opacity: 0 }, duration: w3.duration.sm4, easing: w3.easing.standard.decelerate }), xT = xf("div")({ py: 4, px: 12, rounded: "sm", shadow: "3", containerStyle: "sys.on-surface", pos: "relative", zIndex: 100 }), xI = g1({ title: gQ.custom(), $default: gQ.custom() }, (e10, t10) => {
  let { slots: r3 } = t10, o10 = c_(false);
  return () => {
    let t11 = r3.default()[0];
    return mL(xb, { isOpen: o10.value, $content: mL(xT, { children: e10.title }), $transition: (e11) => {
      let { content: t12 } = e11;
      return mL(xR, { children: t12 });
    }, children: t11 ? dx(t11, { onMouseover: () => {
      o10.value = true;
    }, onMouseout: () => {
      o10.value = false;
    } }) : null });
  };
}), x$ = xf("div")({ py: 8, rounded: "sm", shadow: "2", minW: 120, containerStyle: "sys.surface-container", pos: "relative", zIndex: 100 }), xD = xf("div")({ "& + &": { borderTop: "1px solid", borderColor: "sys.outline-variant" }, py: 8, px: 16, textStyle: "sys.label-large", containerStyle: "sys.surface-container", _hover: { cursor: "pointer", bgColor: wQ("sys.on-surface", wX(0.08)) } }), xL = g1({ placement: gQ.custom().optional(), $menu: gQ.custom(), $default: gQ.custom() }, (e10, t10) => {
  let { slots: r3 } = t10, o10 = c_(false);
  return () => {
    var t11;
    let i10 = r3.default ? r3.default()[0] : void 0;
    return mL(xb, { isOpen: o10.value, placement: e10.placement, onClickOutside: () => {
      o10.value = false;
    }, $content: mL(x$, { children: null === (t11 = r3.menu) || void 0 === t11 ? void 0 : t11.call(r3) }), children: i10 ? dx(i10, { onClick: () => {
      o10.value = true;
    } }) : null });
  };
}), xF = xf("div")({ pos: "absolute", top: 0, left: 0, h: "100vh", w: "100vw", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center" }), xV = xf("div")({ cursor: "pointer", pos: "absolute", top: 0, left: 0, h: "100vh", w: "100vw", zIndex: -1, bgColor: wQ("sys.scrim", wX(0.38)) }), xz = xf("div")({ py: 12, rounded: "sm", shadow: "3", minW: "50vw", containerStyle: "sys.surface-container-high" }), xN = w5({ from: { opacity: 0 }, to: { opacity: 1 }, duration: w3.duration.md1, easing: w3.easing.standard.accelerate }, { from: { opacity: 1 }, to: { opacity: 0 }, duration: w3.duration.sm4, easing: w3.easing.standard.accelerate }), xB = g1({ isOpen: xg.propTypes.isOpen, onClose: gQ.custom(), $default: gQ.custom().optional() }, (e10, t10) => {
  var r3;
  let { slots: o10, emit: i10 } = t10, a10 = c_(null !== (r3 = e10.isOpen) && void 0 !== r3 && r3), l10 = c_(false);
  return c6(() => e10.isOpen, (e11) => {
    true === e11 ? a10.value = true : false === e11 && (l10.value = false);
  }, void 0), () => {
    var e11;
    return mL(xg, { isOpen: a10.value, onContentBeforeMount: () => {
      l10.value = true;
    }, onEscKeydown: () => {
      l10.value = false;
    }, children: mD(xF, { children: [mL(xN, { onComplete: (e12) => {
      "leave" === e12 && (a10.value = false, i10("close"));
    }, children: l10.value ? mL(xV, { onClick: () => {
      l10.value = false;
    } }) : null }), null === (e11 = o10.default) || void 0 === e11 ? void 0 : e11.call(o10)] }) });
  };
}), xU = xf("label", { valued: gQ.boolean().optional(), focus: gQ.boolean().optional(), invalid: gQ.boolean().optional(), disabled: gQ.boolean().optional(), $label: gQ.custom().optional(), $supporting: gQ.custom().optional(), $leading: gQ.custom().optional(), $trailing: gQ.custom().optional(), $default: gQ.custom() }, (e10, t10) => {
  let { slots: r3 } = t10;
  return (t11) => {
    var o10, i10, a10, l10;
    let s10 = e10.valued, u10 = e10.invalid, c10 = e10.disabled, f10 = (null !== (l10 = null === (o10 = r3.default) || void 0 === o10 ? void 0 : o10.call(r3)) && void 0 !== l10 ? l10 : []).map((e11) => "input" === e11.type ? (s10 = !!iu(e11.props, ["value"], iu(e11.props, ["placeholder"], s10)), c10 = iu(e11.props, ["disabled"], c10), dx(e11, { disabled: c10 })) : dx(e11));
    return mD(t11, { "data-valued": s10, "data-invalid": u10, "data-disabled": c10, "data-focus-within": e10.focus, "data-has-leading": !!r3.leading, "data-has-trailing": !!r3.trailing, children: [mD("div", { "data-input-container": "", children: [r3.leading && mL(xH, { children: r3.leading() }), mL("div", { "data-input-label": "", children: null === (i10 = r3.label) || void 0 === i10 ? void 0 : i10.call(r3) }), f10, r3.trailing && mL(xH, { children: r3.trailing() })] }), r3.supporting && mL("div", { "data-input-supporting": "", children: null === (a10 = r3.supporting) || void 0 === a10 ? void 0 : a10.call(r3) })] });
  };
})({ display: "block", pos: "relative", textStyle: "sys.body-large", $data_input_container: { pos: "relative" }, $data_input: { outline: "none", flex: 1, w: "100%", m: 0, px: 16, py: 4, minHeight: 56, bg: "none", border: "none", cursor: "text", "&[readonly]": { cursor: "pointer" }, bgColor: "sys.surface-container-highest", color: "sys.on-surface", roundedTop: "xs", borderBottom: "1px solid", borderColor: "sys.outline-variant", textStyle: "sys.body-large", transitionDuration: "sm1", transitionTimingFunction: "standard" }, $data_input_label: { pos: "absolute", top: 4, bottom: 4, left: 16, color: "sys.on-surface-variant", display: "flex", alignItems: "center", transitionDuration: "sm2", transitionTimingFunction: "standard-accelerate" }, $data_input_supporting: { textStyle: "sys.body-small", px: 16, pt: 4, display: "flex", gap: 16, color: "sys.on-surface-variant" }, _has_leading: { $data_input: { pl: 36 }, $data_input_label: { left: 36 } }, _has_trailing: { $data_input: { pr: 32 } }, _valued: { $data_input: { pt: 18 }, $data_input_label: { top: 8, bottom: "auto", textStyle: "sys.body-small" } }, _focusWithin: { $data_input: { pt: 18, borderBottom: "2px solid", borderColor: "sys.primary" }, $data_input_label: { top: 8, bottom: "auto", textStyle: "sys.body-small", color: "sys.primary" } }, _invalid: { $data_input: { borderBottom: "2px solid", borderColor: "sys.error" }, $data_input_label: { color: "sys.error" }, $data_input_supporting: { color: "sys.error" } }, _disabled: { opacity: 0.38, cursor: "not-allowed" } }), xH = xf("div", { role: gQ.enums(["leading", "trailing"]).optional().default("leading") })({ pos: "absolute", top: 4, bottom: 4, display: "flex", alignItems: "center", color: "sys.on-surface-variant", _role__leading: { left: 12, $data_icon: { ml: -4 } }, _role__trailing: { right: 12, $data_icon: { mr: -4 } } }), xW = xf("div")({ bgColor: "sys.surface-container" }), xq = xf("div")({ padding: 24, "& [data-example]": { display: "flex", flexDirection: "row-reverse", gap: 8, "& > *": { flex: 1 }, "& [data-example-container]": { display: "flex", alignItems: "center", justifyContent: "center" } }, "& :not(pre) > code": { font: "code", rounded: "xs", px: 4, bgColor: "sys.surface-container-low" }, "& pre": { overflow: "auto", textStyle: "sys.body-small", containerStyle: "sys.surface-container-low", m: 0, rounded: "sm", p: 16, font: "code", "& .comment": { color: wQ("sys.on-surface", wX(0.38)) }, "& .string": { color: "sys.success" }, "& .tag .attr-name": { color: "sys.success" }, "& .function": { color: "sys.warning" }, "& .punctuation": { color: wQ("sys.on-surface", wX(0.38)) }, "& .keyword": { color: "sys.error" } }, "& p,li": { my: "1em" }, overflowY: "auto" });
Object.assign(xW, { displayName: "Unused" });
let xG = Object.assign(xq, { displayName: "Container" }), xY = yi(() => {
  let e10 = { primary: "#1270f5", secondary: "#8a90a5", tertiary: "#b58391", neutral: "#5e5e5e", neutralVariant: "#757780", error: "#d93f23", warning: "#e69c00", success: "#5ac220" }, t10 = xe.fromColors(e10).normalizeRoleRules();
  return yt({ seed: e10, rules: t10, theming: w1.create({ ...xo, ...xe.fromColors(e10).toDesignTokens(t10) }, { varPrefix: "vk" }) });
}), xK = g1(() => {
  let e10 = sn(fY(ht).options.routes.filter((e11) => "/" !== e11.path), (e11) => e11.path.split("/")[1]);
  return () => mL(xu, { sx: { py: 16, px: 0, textTransform: "capitalize" }, children: st(e10, (e11, t10) => {
    var r3;
    let [o10, i10] = sR(e11, (e12) => e12.path === `/${t10}`);
    return mD(xu, { sx: { px: 8 }, children: [o10[0] ? mL(xE, { component: hs, sx: { width: "100%", justifyContent: "flex-start" }, activeClass: "active", to: null === (r3 = o10[0]) || void 0 === r3 ? void 0 : r3.path, children: t10 }) : mL(xE, { sx: { width: "100%", justifyContent: "flex-start" }, children: t10 }), mL(xu, { sx: { pl: 16 }, children: st(i10, (e12) => {
      var t11;
      return mL(xE, { component: hs, activeClass: "active", to: e12.path, sx: { width: "100%", justifyContent: "flex-start" }, children: null === (t11 = se(e12.path.split("/"))) || void 0 === t11 ? void 0 : t11.replaceAll("-", " ") }, e12.name);
    }) })] }, t10);
  }) });
}), xZ = g1({ $default: gQ.custom().optional() }, (e10, t10) => {
  let { slots: r3 } = t10, o10 = c_("light");
  return () => {
    var e11;
    return mD(xu, { "data-theme": o10.value, sx: { display: "flex", height: "100vh", width: "100vw", containerStyle: "sys.surface" }, children: [mD(xu, { sx: { display: "flex", flexDirection: "column", width: "280px", height: "100vh", borderRightRadius: "lg", overflowY: "auto", containerStyle: "sys.surface-container-low", elevation: "0", _hover: { elevation: "2" } }, children: [mL(xu, { sx: { flex: 1 }, children: mL(xJ, {}) }), mD(xu, { sx: { p: 16, display: "flex", justifyContent: "flex-end" }, children: [mL(xM, { component: "a", target: "_blank", sx: { color: "sys.on-surface-variant" }, href: "//github.com/innoai-tech/vuekit", children: mL(xj, { path: "M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" }) }), mL(xI, { title: `切换到${"light" === o10.value ? "深色模式" : "浅色模式"}`, children: mL(xu, { component: xM, "data-test": true, sx: { color: "sys.on-surface-variant" }, onClick: () => {
      o10.value = "light" === o10.value ? "dark" : "light";
    }, children: mL(xj, { path: "light" === o10.value ? "M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z" : "M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13" }) }) })] })] }), mL(xu, { sx: { flex: 1, overflow: "auto" }, children: mL(xG, { children: null === (e11 = r3.default) || void 0 === e11 ? void 0 : e11.call(r3) }) })] });
  };
}), xX = g1(() => {
  let e10 = xY.use(), t10 = xl.use();
  return c6([() => e10.value.seed, () => e10.value.rules], (t11) => {
    let [r3, o10] = t11;
    e10.next((e11) => {
      e11.theming = w1.create({ ...xo, ...xe.fromColors(r3).toDesignTokens(o10) }, { varPrefix: "vk" });
    });
  }, void 0), () => {
    let r3 = e10.value.theming, o10 = r3.unstable_css(t10, { ":root": r3.rootCSSVars });
    return mL(xY, { value: e10, children: mD(xa, { value: r3, children: [mL(xp, {}), mL(xd, { styles: '/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n' }), mL(xQ, { children: mL(hf, {}) })] }, o10.name) });
  };
}), xJ = Object.assign(xK, { displayName: "Nav" }), xQ = Object.assign(xZ, { displayName: "Scaffold" }), x0 = Object.assign(xX, { displayName: "App" }), x1 = {}, x2 = function(e10, t10, r3) {
  let o10 = Promise.resolve();
  if (t10 && t10.length > 0) {
    let e11 = document.getElementsByTagName("link"), i10 = document.querySelector("meta[property=csp-nonce]"), a10 = (null == i10 ? void 0 : i10.nonce) || (null == i10 ? void 0 : i10.getAttribute("nonce"));
    o10 = Promise.all(t10.map((t11) => {
      if ((t11 = "/vuekit/" + t11) in x1)
        return;
      x1[t11] = true;
      let o11 = t11.endsWith(".css");
      if (r3)
        for (let r10 = e11.length - 1; r10 >= 0; r10--) {
          let i12 = e11[r10];
          if (i12.href === t11 && (!o11 || "stylesheet" === i12.rel))
            return;
        }
      else if (document.querySelector(`link[href="${t11}"]${o11 ? '[rel="stylesheet"]' : ""}`))
        return;
      let i11 = document.createElement("link");
      if (i11.rel = o11 ? "stylesheet" : "modulepreload", o11 || (i11.as = "script", i11.crossOrigin = ""), i11.href = t11, a10 && i11.setAttribute("nonce", a10), document.head.appendChild(i11), o11)
        return new Promise((e12, r10) => {
          i11.addEventListener("load", e12), i11.addEventListener("error", () => r10(Error(`Unable to preload CSS for ${t11}`)));
        });
    }));
  }
  return o10.then(() => e10()).catch((e11) => {
    let t11 = new Event("vite:preloadError", { cancelable: true });
    if (t11.payload = e11, window.dispatchEvent(t11), !t11.defaultPrevented)
      throw e11;
  });
}, x4 = [{ name: "vuematerial-textfields", path: "/vuematerial/textfields", component: () => x2(() => import("./nodepkg-vuematerial-example.Ctfw_5_L.chunk.js"), true ? [] : void 0), props: true }, { name: "vuematerial", path: "/vuematerial", component: () => x2(() => import("./nodepkg-vuematerial-example.DjscOzQ3.chunk.js"), true ? [] : void 0), props: true }, { name: "vuematerial-icons", path: "/vuematerial/icons", component: () => x2(() => import("./nodepkg-vuematerial-example.1f6RxWwG.chunk.js"), true ? [] : void 0), props: true }, { name: "vuematerial-buttons", path: "/vuematerial/buttons", component: () => x2(() => import("./nodepkg-vuematerial-example.PW3db429.chunk.js"), true ? [] : void 0), props: true }, { name: "vuematerial-overlays", path: "/vuematerial/overlays", component: () => x2(() => import("./nodepkg-vuematerial-example.4pTgycRg.chunk.js"), true ? [] : void 0), props: true }, { name: "vueuikit-elevation", path: "/vueuikit/elevation", component: () => x2(() => import("./nodepkg-vueuikit-example.BrhLZkVj.chunk.js"), true ? [] : void 0), props: true }, { name: "vueuikit-figma-tokens", path: "/vueuikit/figma-tokens", component: () => x2(() => import("./nodepkg-vueuikit-example.CgKVArCF.chunk.js"), true ? [] : void 0), props: true }, { name: "vueuikit-color-scheme", path: "/vueuikit/color-scheme", component: () => x2(() => import("./nodepkg-vueuikit-example.DsDEm6qD.chunk.js"), true ? [] : void 0), props: true }, { name: "vueuikit-color-palette", path: "/vueuikit/color-palette", component: () => x2(() => import("./node_modules-toggle-selection.CEZeT4iL.chunk.js"), true ? [] : void 0), props: true }, { name: "vueuikit-popper", path: "/vueuikit/popper", component: () => x2(() => import("./nodepkg-vueuikit-example.pQpwxh1D.chunk.js"), true ? [] : void 0), props: true }, { name: "vueuikit", path: "/vueuikit", component: () => x2(() => import("./nodepkg-vueuikit-example.JZLi3GQm.chunk.js"), true ? [] : void 0), props: true }, { name: "vueuikit-typography", path: "/vueuikit/typography", component: () => x2(() => import("./nodepkg-vueuikit-example.C1XJb9vs.chunk.js"), true ? [] : void 0), props: true }, { name: "vuekit-rx-in-vue", path: "/vuekit/rx-in-vue", component: () => x2(() => import("./node_modules-rxjs-dist-esm5-internal-scheduler.CHq_BXkC.chunk.js"), true ? [] : void 0), props: true }, { name: "vuekit", path: "/vuekit", component: () => x2(() => import("./nodepkg-vuekit-example.BwbEIf8q.chunk.js"), true ? [] : void 0), props: true }, { name: "index", path: "/", component: Object.assign(Object.assign(g1(() => () => mL(xu, { sx: { display: "flex", alignItems: "center", justifyContent: "center", textStyle: "sys.display-large" }, children: "Vuekit" })), { displayName: "IndexDefault" }), { meta: { name: "Home", icon: () => x2(() => Promise.resolve().then(() => x5), true ? void 0 : void 0) } }), props: true }];
console.log(x4);
let x3 = function(e10) {
  let t10, r3, o10;
  let i10 = function(e11, t11) {
    let r10 = [], o11 = /* @__PURE__ */ new Map();
    function i11(e12, l11, s11) {
      let u11, c11;
      let f11 = !s11, d11 = { path: e12.path, redirect: e12.redirect, name: e12.name, meta: e12.meta || {}, aliasOf: void 0, beforeEnter: e12.beforeEnter, props: function(e13) {
        let t12 = {}, r11 = e13.props || false;
        if ("component" in e13)
          t12.default = r11;
        else
          for (let o12 in e13.components)
            t12[o12] = "object" == typeof r11 ? r11[o12] : r11;
        return t12;
      }(e12), children: e12.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e12 ? e12.components || null : e12.component && { default: e12.component } };
      d11.aliasOf = s11 && s11.record;
      let p11 = p6(t11, e12), h11 = [d11];
      if ("alias" in e12)
        for (let t12 of "string" == typeof e12.alias ? [e12.alias] : e12.alias)
          h11.push(pc({}, d11, { components: s11 ? s11.record.components : d11.components, path: t12, aliasOf: s11 ? s11.record : d11 }));
      for (let t12 of h11) {
        let { path: h12 } = t12;
        if (l11 && "/" !== h12[0]) {
          let e13 = l11.record.path, r11 = "/" === e13[e13.length - 1] ? "" : "/";
          t12.path = l11.record.path + (h12 && r11 + h12);
        }
        if (u11 = function(e13, t13, r11) {
          let o12 = function(e14, t14) {
            let r12 = pc({}, pQ, t14), o13 = [], i13 = r12.start ? "^" : "", a12 = [];
            for (let t15 of e14) {
              let e15 = t15.length ? [] : [90];
              r12.strict && !t15.length && (i13 += "/");
              for (let o14 = 0; o14 < t15.length; o14++) {
                let l13 = t15[o14], s12 = 40 + (r12.sensitive ? 0.25 : 0);
                if (0 === l13.type)
                  o14 || (i13 += "/"), i13 += l13.value.replace(p0, "\\$&"), s12 += 40;
                else if (1 === l13.type) {
                  let { value: e16, repeatable: r13, optional: u12, regexp: c12 } = l13;
                  a12.push({ name: e16, repeatable: r13, optional: u12 });
                  let f12 = c12 || pJ;
                  if (f12 !== pJ) {
                    s12 += 10;
                    try {
                      RegExp(`(${f12})`);
                    } catch (t16) {
                      throw Error(`Invalid custom RegExp for param "${e16}" (${f12}): ` + t16.message);
                    }
                  }
                  let d12 = r13 ? `((?:${f12})(?:/(?:${f12}))*)` : `(${f12})`;
                  o14 || (d12 = u12 && t15.length < 2 ? `(?:/${d12})` : "/" + d12), u12 && (d12 += "?"), i13 += d12, s12 += 20, u12 && (s12 += -8), r13 && (s12 += -20), ".*" === f12 && (s12 += -50);
                }
                e15.push(s12);
              }
              o13.push(e15);
            }
            if (r12.strict && r12.end) {
              let e15 = o13.length - 1;
              o13[e15][o13[e15].length - 1] += 0.7000000000000001;
            }
            r12.strict || (i13 += "/?"), r12.end ? i13 += "$" : r12.strict && (i13 += "(?:/|$)");
            let l12 = new RegExp(i13, r12.sensitive ? "" : "i");
            return { re: l12, score: o13, keys: a12, parse: function(e15) {
              let t15 = e15.match(l12), r13 = {};
              if (!t15)
                return null;
              for (let e16 = 1; e16 < t15.length; e16++) {
                let o14 = t15[e16] || "", i14 = a12[e16 - 1];
                r13[i14.name] = o14 && i14.repeatable ? o14.split("/") : o14;
              }
              return r13;
            }, stringify: function(t15) {
              let r13 = "", o14 = false;
              for (let i14 of e14)
                for (let e15 of (o14 && r13.endsWith("/") || (r13 += "/"), o14 = false, i14))
                  if (0 === e15.type)
                    r13 += e15.value;
                  else if (1 === e15.type) {
                    let { value: a13, repeatable: l13, optional: s12 } = e15, u12 = a13 in t15 ? t15[a13] : "";
                    if (pp(u12) && !l13)
                      throw Error(`Provided param "${a13}" is an array but it is not repeatable (* or + modifiers)`);
                    let c12 = pp(u12) ? u12.join("/") : u12;
                    if (!c12) {
                      if (s12)
                        i14.length < 2 && (r13.endsWith("/") ? r13 = r13.slice(0, -1) : o14 = true);
                      else
                        throw Error(`Missing required param "${a13}"`);
                    }
                    r13 += c12;
                  }
              return r13 || "/";
            } };
          }(function(e14) {
            let t14, r12;
            if (!e14)
              return [[]];
            if ("/" === e14)
              return [[p2]];
            if (!e14.startsWith("/"))
              throw Error(`Invalid path "${e14}"`);
            function o13(e15) {
              throw Error(`ERR (${i13})/"${c12}": ${e15}`);
            }
            let i13 = 0, a12 = 0, l12 = [];
            function s12() {
              t14 && l12.push(t14), t14 = [];
            }
            let u12 = 0, c12 = "", f12 = "";
            function d12() {
              c12 && (0 === i13 ? t14.push({ type: 0, value: c12 }) : 1 === i13 || 2 === i13 || 3 === i13 ? (t14.length > 1 && ("*" === r12 || "+" === r12) && o13(`A repeatable param (${c12}) must be alone in its segment. eg: '/:ids+.`), t14.push({ type: 1, value: c12, regexp: f12, repeatable: "*" === r12 || "+" === r12, optional: "*" === r12 || "?" === r12 })) : o13("Invalid state to consume buffer"), c12 = "");
            }
            for (; u12 < e14.length; ) {
              if ("\\" === (r12 = e14[u12++]) && 2 !== i13) {
                a12 = i13, i13 = 4;
                continue;
              }
              switch (i13) {
                case 0:
                  "/" === r12 ? (c12 && d12(), s12()) : ":" === r12 ? (d12(), i13 = 1) : c12 += r12;
                  break;
                case 4:
                  c12 += r12, i13 = a12;
                  break;
                case 1:
                  "(" === r12 ? i13 = 2 : p4.test(r12) ? c12 += r12 : (d12(), i13 = 0, "*" !== r12 && "?" !== r12 && "+" !== r12 && u12--);
                  break;
                case 2:
                  ")" === r12 ? "\\" == f12[f12.length - 1] ? f12 = f12.slice(0, -1) + r12 : i13 = 3 : f12 += r12;
                  break;
                case 3:
                  d12(), i13 = 0, "*" !== r12 && "?" !== r12 && "+" !== r12 && u12--, f12 = "";
                  break;
                default:
                  o13("Unknown state");
              }
            }
            return 2 === i13 && o13(`Unfinished custom RegExp for param "${c12}"`), d12(), s12(), l12;
          }(e13.path), r11), i12 = pc(o12, { record: e13, parent: t13, children: [], alias: [] });
          return t13 && !i12.record.aliasOf == !t13.record.aliasOf && t13.children.push(i12), i12;
        }(t12, l11, p11), s11 ? s11.alias.push(u11) : ((c11 = c11 || u11) !== u11 && c11.alias.push(u11), f11 && e12.name && !p5(u11) && a11(e12.name)), d11.children) {
          let e13 = d11.children;
          for (let t13 = 0; t13 < e13.length; t13++)
            i11(e13[t13], u11, s11 && s11.children[t13]);
        }
        s11 = s11 || u11, (u11.record.components && Object.keys(u11.record.components).length || u11.record.name || u11.record.redirect) && function(e13) {
          let t13 = 0;
          for (; t13 < r10.length && function(e14, t14) {
            let r11 = 0, o12 = e14.score, i12 = t14.score;
            for (; r11 < o12.length && r11 < i12.length; ) {
              let e15 = function(e16, t15) {
                let r12 = 0;
                for (; r12 < e16.length && r12 < t15.length; ) {
                  let o13 = t15[r12] - e16[r12];
                  if (o13)
                    return o13;
                  r12++;
                }
                return e16.length < t15.length ? 1 === e16.length && 80 === e16[0] ? -1 : 1 : e16.length > t15.length ? 1 === t15.length && 80 === t15[0] ? 1 : -1 : 0;
              }(o12[r11], i12[r11]);
              if (e15)
                return e15;
              r11++;
            }
            if (1 === Math.abs(i12.length - o12.length)) {
              if (p1(o12))
                return 1;
              if (p1(i12))
                return -1;
            }
            return i12.length - o12.length;
          }(e13, r10[t13]) >= 0 && (e13.record.path !== r10[t13].record.path || !function e14(t14, r11) {
            return r11.children.some((r12) => r12 === t14 || e14(t14, r12));
          }(e13, r10[t13])); )
            t13++;
          r10.splice(t13, 0, e13), e13.record.name && !p5(e13) && o11.set(e13.record.name, e13);
        }(u11);
      }
      return c11 ? () => {
        a11(c11);
      } : pd;
    }
    function a11(e12) {
      if (pG(e12)) {
        let t12 = o11.get(e12);
        t12 && (o11.delete(e12), r10.splice(r10.indexOf(t12), 1), t12.children.forEach(a11), t12.alias.forEach(a11));
      } else {
        let t12 = r10.indexOf(e12);
        t12 > -1 && (r10.splice(t12, 1), e12.record.name && o11.delete(e12.record.name), e12.children.forEach(a11), e12.alias.forEach(a11));
      }
    }
    return t11 = p6({ strict: false, end: true, sensitive: false }, t11), e11.forEach((e12) => i11(e12)), { addRoute: i11, resolve: function(e12, t12) {
      let i12, a12, l11;
      let s11 = {};
      if ("name" in e12 && e12.name) {
        if (!(i12 = o11.get(e12.name)))
          throw pZ(1, { location: e12 });
        l11 = i12.record.name, s11 = pc(p3(t12.params, i12.keys.filter((e13) => !e13.optional).concat(i12.parent ? i12.parent.keys.filter((e13) => e13.optional) : []).map((e13) => e13.name)), e12.params && p3(e12.params, i12.keys.map((e13) => e13.name))), a12 = i12.stringify(s11);
      } else if (null != e12.path)
        a12 = e12.path, (i12 = r10.find((e13) => e13.re.test(a12))) && (s11 = i12.parse(a12), l11 = i12.record.name);
      else {
        if (!(i12 = t12.name ? o11.get(t12.name) : r10.find((e13) => e13.re.test(t12.path))))
          throw pZ(1, { location: e12, currentLocation: t12 });
        l11 = i12.record.name, s11 = pc({}, t12.params, e12.params), a12 = i12.stringify(s11);
      }
      let u11 = [], c11 = i12;
      for (; c11; )
        u11.unshift(c11.record), c11 = c11.parent;
      return { name: l11, path: a12, params: s11, matched: u11, meta: u11.reduce((e13, t13) => pc(e13, t13.meta), {}) };
    }, removeRoute: a11, getRoutes: function() {
      return r10;
    }, getRecordMatcher: function(e12) {
      return o11.get(e12);
    } };
  }(e10.routes, e10), a10 = e10.parseQuery || p8, l10 = e10.stringifyQuery || p9, s10 = e10.history, u10 = ho(), c10 = ho(), f10 = ho(), d10 = cw(pY, true), p10 = pY;
  pu && e10.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  let h10 = pf.bind(null, (e11) => "" + e11), m10 = pf.bind(null, pM), g10 = pf.bind(null, pj);
  function y10(e11, t11) {
    let r10;
    if (t11 = pc({}, t11 || d10.value), "string" == typeof e11) {
      let r11 = pI(a10, e11, t11.path), o12 = i10.resolve({ path: r11.path }, t11), l11 = s10.createHref(r11.fullPath);
      return pc(r11, o12, { params: g10(o12.params), hash: pj(r11.hash), redirectedFrom: void 0, href: l11 });
    }
    if (null != e11.path)
      r10 = pc({}, e11, { path: pI(a10, e11.path, t11.path).path });
    else {
      let o12 = pc({}, e11.params);
      for (let e12 in o12)
        null == o12[e12] && delete o12[e12];
      r10 = pc({}, e11, { params: m10(o12) }), t11.params = m10(t11.params);
    }
    let o11 = i10.resolve(r10, t11), u11 = e11.hash || "";
    o11.params = h10(g10(o11.params));
    let c11 = function(e12, t12) {
      let r11 = t12.query ? e12(t12.query) : "";
      return t12.path + (r11 && "?") + r11 + (t12.hash || "");
    }(l10, pc({}, e11, { hash: pA(u11).replace(pS, "{").replace(pC, "}").replace(px, "^"), path: o11.path })), f11 = s10.createHref(c11);
    return pc({ fullPath: c11, hash: u11, query: l10 === p9 ? function(e12) {
      let t12 = {};
      for (let r11 in e12) {
        let o12 = e12[r11];
        void 0 !== o12 && (t12[r11] = pp(o12) ? o12.map((e13) => null == e13 ? null : "" + e13) : null == o12 ? o12 : "" + o12);
      }
      return t12;
    }(e11.query) : e11.query || {} }, o11, { redirectedFrom: void 0, href: f11 });
  }
  function b10(e11) {
    return "string" == typeof e11 ? pI(a10, e11, d10.value.path) : pc({}, e11);
  }
  function _10(e11, t11) {
    if (p10 !== e11)
      return pZ(8, { from: t11, to: e11 });
  }
  function w10(e11) {
    let t11 = e11.matched[e11.matched.length - 1];
    if (t11 && t11.redirect) {
      let { redirect: r10 } = t11, o11 = "function" == typeof r10 ? r10(e11) : r10;
      return "string" == typeof o11 && ((o11 = o11.includes("?") || o11.includes("#") ? o11 = b10(o11) : { path: o11 }).params = {}), pc({ query: e11.query, hash: e11.hash, params: null != o11.path ? {} : e11.params }, o11);
    }
  }
  function x6(e11, t11) {
    let r10;
    let o11 = p10 = y10(e11), i11 = d10.value, a11 = e11.state, s11 = e11.force, u11 = true === e11.replace, c11 = w10(o11);
    return c11 ? x6(pc(b10(c11), { state: "object" == typeof c11 ? pc({}, a11, c11.state) : a11, force: s11, replace: u11 }), t11 || o11) : (o11.redirectedFrom = t11, !s11 && function(e12, t12, r11) {
      let o12 = t12.matched.length - 1, i12 = r11.matched.length - 1;
      return o12 > -1 && o12 === i12 && pD(t12.matched[o12], r11.matched[i12]) && pL(t12.params, r11.params) && e12(t12.query) === e12(r11.query) && t12.hash === r11.hash;
    }(l10, i11, o11) && (r10 = pZ(16, { to: o11, from: i11 }), R2(i11, i11, true, false)), (r10 ? Promise.resolve(r10) : O2(o11, i11)).catch((e12) => pX(e12) ? pX(e12, 2) ? e12 : j2(e12) : M2(e12, o11, i11)).then((e12) => {
      if (e12) {
        if (pX(e12, 2))
          return x6(pc({ replace: u11 }, b10(e12.to), { state: "object" == typeof e12.to ? pc({}, a11, e12.to.state) : a11, force: s11 }), t11 || o11);
      } else
        e12 = E2(o11, i11, true, u11, a11);
      return C2(o11, i11, e12), e12;
    }));
  }
  function k2(e11, t11) {
    let r10 = _10(e11, t11);
    return r10 ? Promise.reject(r10) : Promise.resolve();
  }
  function S2(e11) {
    let t11 = I2.values().next().value;
    return t11 && "function" == typeof t11.runWithContext ? t11.runWithContext(e11) : e11();
  }
  function O2(e11, t11) {
    let r10;
    let [o11, i11, a11] = function(e12, t12) {
      let r11 = [], o12 = [], i12 = [], a12 = Math.max(t12.matched.length, e12.matched.length);
      for (let l12 = 0; l12 < a12; l12++) {
        let a13 = t12.matched[l12];
        a13 && (e12.matched.find((e13) => pD(e13, a13)) ? o12.push(a13) : r11.push(a13));
        let s11 = e12.matched[l12];
        s11 && !t12.matched.find((e13) => pD(e13, s11)) && i12.push(s11);
      }
      return [r11, o12, i12];
    }(e11, t11);
    for (let i12 of (r10 = ha(o11.reverse(), "beforeRouteLeave", e11, t11), o11))
      i12.leaveGuards.forEach((o12) => {
        r10.push(hi(o12, e11, t11));
      });
    let l11 = k2.bind(null, e11, t11);
    return r10.push(l11), D2(r10).then(() => {
      for (let o12 of (r10 = [], u10.list()))
        r10.push(hi(o12, e11, t11));
      return r10.push(l11), D2(r10);
    }).then(() => {
      for (let o12 of (r10 = ha(i11, "beforeRouteUpdate", e11, t11), i11))
        o12.updateGuards.forEach((o13) => {
          r10.push(hi(o13, e11, t11));
        });
      return r10.push(l11), D2(r10);
    }).then(() => {
      for (let o12 of (r10 = [], a11))
        if (o12.beforeEnter) {
          if (pp(o12.beforeEnter))
            for (let i12 of o12.beforeEnter)
              r10.push(hi(i12, e11, t11));
          else
            r10.push(hi(o12.beforeEnter, e11, t11));
        }
      return r10.push(l11), D2(r10);
    }).then(() => (e11.matched.forEach((e12) => e12.enterCallbacks = {}), (r10 = ha(a11, "beforeRouteEnter", e11, t11, S2)).push(l11), D2(r10))).then(() => {
      for (let o12 of (r10 = [], c10.list()))
        r10.push(hi(o12, e11, t11));
      return r10.push(l11), D2(r10);
    }).catch((e12) => pX(e12, 8) ? e12 : Promise.reject(e12));
  }
  function C2(e11, t11, r10) {
    f10.list().forEach((o11) => S2(() => o11(e11, t11, r10)));
  }
  function E2(e11, t11, r10, o11, i11) {
    let a11 = _10(e11, t11);
    if (a11)
      return a11;
    let l11 = t11 === pY, u11 = pu ? history.state : {};
    r10 && (o11 || l11 ? s10.replace(e11.fullPath, pc({ scroll: l11 && u11 && u11.scroll }, i11)) : s10.push(e11.fullPath, i11)), d10.value = e11, R2(e11, t11, r10, l11), j2();
  }
  let A2 = ho(), P2 = ho();
  function M2(e11, t11, r10) {
    j2(e11);
    let o11 = P2.list();
    return o11.length ? o11.forEach((o12) => o12(e11, t11, r10)) : console.error(e11), Promise.reject(e11);
  }
  function j2(e11) {
    return r3 || (r3 = !e11, t10 || (t10 = s10.listen((e12, t11, r10) => {
      if (!$2.listening)
        return;
      let o11 = y10(e12), i11 = w10(o11);
      if (i11) {
        x6(pc(i11, { replace: true }), o11).catch(pd);
        return;
      }
      p10 = o11;
      let a11 = d10.value;
      if (pu) {
        var l11, u11;
        l11 = pB(a11.fullPath, r10.delta), u11 = pN(), pU.set(l11, u11);
      }
      O2(o11, a11).catch((e13) => pX(e13, 12) ? e13 : pX(e13, 2) ? (x6(e13.to, o11).then((e14) => {
        pX(e14, 20) && !r10.delta && r10.type === W.pop && s10.go(-1, false);
      }).catch(pd), Promise.reject()) : (r10.delta && s10.go(-r10.delta, false), M2(e13, o11, a11))).then((e13) => {
        (e13 = e13 || E2(o11, a11, false)) && (r10.delta && !pX(e13, 8) ? s10.go(-r10.delta, false) : r10.type === W.pop && pX(e13, 20) && s10.go(-1, false)), C2(o11, a11, e13);
      }).catch(pd);
    })), A2.list().forEach((t11) => {
      let [r10, o11] = t11;
      return e11 ? o11(e11) : r10();
    }), A2.reset()), e11;
  }
  function R2(t11, r10, o11, i11) {
    let { scrollBehavior: a11 } = e10;
    if (!pu || !a11)
      return Promise.resolve();
    let l11 = !o11 && function(e11) {
      let t12 = pU.get(e11);
      return pU.delete(e11), t12;
    }(pB(t11.fullPath, 0)) || (i11 || !o11) && history.state && history.state.scroll || null;
    return cV().then(() => a11(t11, r10, l11)).then((e11) => e11 && function(e12) {
      let t12;
      if ("el" in e12) {
        let r11 = e12.el, o12 = "string" == typeof r11 && r11.startsWith("#"), i12 = "string" == typeof r11 ? o12 ? document.getElementById(r11.slice(1)) : document.querySelector(r11) : r11;
        if (!i12)
          return;
        t12 = function(e13, t13) {
          let r12 = document.documentElement.getBoundingClientRect(), o13 = e13.getBoundingClientRect();
          return { behavior: t13.behavior, left: o13.left - r12.left - (t13.left || 0), top: o13.top - r12.top - (t13.top || 0) };
        }(i12, e12);
      } else
        t12 = e12;
      "scrollBehavior" in document.documentElement.style ? window.scrollTo(t12) : window.scrollTo(null != t12.left ? t12.left : window.scrollX, null != t12.top ? t12.top : window.scrollY);
    }(e11)).catch((e11) => M2(e11, t11, r10));
  }
  let T2 = (e11) => s10.go(e11), I2 = /* @__PURE__ */ new Set(), $2 = { currentRoute: d10, listening: true, addRoute: function(e11, t11) {
    let r10, o11;
    return pG(e11) ? (r10 = i10.getRecordMatcher(e11), o11 = t11) : o11 = e11, i10.addRoute(o11, r10);
  }, removeRoute: function(e11) {
    let t11 = i10.getRecordMatcher(e11);
    t11 && i10.removeRoute(t11);
  }, hasRoute: function(e11) {
    return !!i10.getRecordMatcher(e11);
  }, getRoutes: function() {
    return i10.getRoutes().map((e11) => e11.record);
  }, resolve: y10, options: e10, push: function(e11) {
    return x6(e11);
  }, replace: function(e11) {
    return x6(pc(b10(e11), { replace: true }));
  }, go: T2, back: () => T2(-1), forward: () => T2(1), beforeEach: u10.add, beforeResolve: c10.add, afterEach: f10.add, onError: P2.add, isReady: function() {
    return r3 && d10.value !== pY ? Promise.resolve() : new Promise((e11, t11) => {
      A2.add([e11, t11]);
    });
  }, install(e11) {
    e11.component("RouterLink", hs), e11.component("RouterView", hf), e11.config.globalProperties.$router = this, Object.defineProperty(e11.config.globalProperties, "$route", { enumerable: true, get: () => ck(d10) }), pu && !o10 && d10.value === pY && (o10 = true, x6(s10.location).catch((e12) => {
    }));
    let i11 = {};
    for (let e12 in pY)
      Object.defineProperty(i11, e12, { get: () => d10.value[e12], enumerable: true });
    e11.provide(ht, this), e11.provide(hr, ca(i11)), e11.provide(hn, d10);
    let a11 = e11.unmount;
    I2.add(e11), e11.unmount = function() {
      I2.delete(e11), I2.size < 1 && (p10 = pY, t10 && t10(), t10 = null, d10.value = pY, o10 = false, r3 = false), a11();
    };
  } };
  function D2(e11) {
    return e11.reduce((e12, t11) => e12.then(() => S2(t11)), Promise.resolve());
  }
  return $2;
}({ history: function(e10) {
  let t10 = function(e11) {
    let { history: t11, location: r10 } = window, o11 = { value: pW(e11, r10) }, i10 = { value: t11.state };
    function a10(o12, a11, l10) {
      let s10 = e11.indexOf("#"), u10 = s10 > -1 ? (r10.host && document.querySelector("base") ? e11 : e11.slice(s10)) + o12 : pH() + e11 + o12;
      try {
        t11[l10 ? "replaceState" : "pushState"](a11, "", u10), i10.value = a11;
      } catch (e12) {
        console.error(e12), r10[l10 ? "replace" : "assign"](u10);
      }
    }
    return i10.value || a10(o11.value, { back: null, current: o11.value, forward: null, position: t11.length - 1, replaced: true, scroll: null }, true), { location: o11, state: i10, push: function(e12, r11) {
      let l10 = pc({}, i10.value, t11.state, { forward: e12, scroll: pN() });
      a10(l10.current, l10, true);
      let s10 = pc({}, pq(o11.value, e12, null), { position: l10.position + 1 }, r11);
      a10(e12, s10, false), o11.value = e12;
    }, replace: function(e12, r11) {
      let l10 = pc({}, t11.state, pq(i10.value.back, e12, i10.value.forward, true), r11, { position: i10.value.position });
      a10(e12, l10, true), o11.value = e12;
    } };
  }(e10 = function(e11) {
    if (!e11) {
      if (pu) {
        let t11 = document.querySelector("base");
        e11 = (e11 = t11 && t11.getAttribute("href") || "/").replace(/^\w+:\/\/[^\/]+/, "");
      } else
        e11 = "/";
    }
    return "/" !== e11[0] && "#" !== e11[0] && (e11 = "/" + e11), pT(e11);
  }(e10)), r3 = function(e11, t11, r10, o11) {
    let i10 = [], a10 = [], l10 = null, s10 = (a11) => {
      let { state: s11 } = a11, u11 = pW(e11, location), c10 = r10.value, f10 = t11.value, d10 = 0;
      if (s11) {
        if (r10.value = u11, t11.value = s11, l10 && l10 === c10) {
          l10 = null;
          return;
        }
        d10 = f10 ? s11.position - f10.position : 0;
      } else
        o11(u11);
      i10.forEach((e12) => {
        e12(r10.value, c10, { delta: d10, type: W.pop, direction: d10 ? d10 > 0 ? q.forward : q.back : q.unknown });
      });
    };
    function u10() {
      let { history: e12 } = window;
      e12.state && e12.replaceState(pc({}, e12.state, { scroll: pN() }), "");
    }
    return window.addEventListener("popstate", s10), window.addEventListener("beforeunload", u10, { passive: true }), { pauseListeners: function() {
      l10 = r10.value;
    }, listen: function(e12) {
      i10.push(e12);
      let t12 = () => {
        let t13 = i10.indexOf(e12);
        t13 > -1 && i10.splice(t13, 1);
      };
      return a10.push(t12), t12;
    }, destroy: function() {
      for (let e12 of a10)
        e12();
      a10 = [], window.removeEventListener("popstate", s10), window.removeEventListener("beforeunload", u10);
    } };
  }(e10, t10.state, t10.location, t10.replace), o10 = pc({ location: "", base: e10, go: function(e11) {
    let t11 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    t11 || r3.pauseListeners(), history.go(e11);
  }, createHref: pz.bind(null, e10) }, t10, r3);
  return Object.defineProperty(o10, "location", { enumerable: true, get: () => t10.location.value }), Object.defineProperty(o10, "state", { enumerable: true, get: () => t10.state.value }), o10;
}(new URL(null !== (er = null === (et = document.querySelector("base")) || void 0 === et ? void 0 : et.href) && void 0 !== er ? er : "/").pathname), routes: x4 });
(function() {
  for (var e10 = arguments.length, t10 = Array(e10), r3 = 0; r3 < e10; r3++)
    t10[r3] = arguments[r3];
  let o10 = (l || (l = function(e11, t11) {
    var r10;
    let o11, a11;
    uu().__VUE__ = true;
    let { insert: l10, remove: s10, patchProp: u10, createElement: c10, createText: f10, createComment: d10, setText: p10, setElementText: h10, parentNode: m10, nextSibling: g10, setScopeId: y10 = sV, insertStaticContent: b10 } = e11, _10 = function(e12, t12, r11) {
      let o12 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, i10 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null, a12 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null, l11 = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : void 0, s11 = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, u11 = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : !!t12.dynamicChildren;
      if (e12 === t12)
        return;
      e12 && !dg(e12, t12) && (o12 = Y2(e12), U2(e12, i10, a12, true), e12 = null), -2 === t12.patchFlag && (u11 = false, t12.dynamicChildren = null);
      let { type: c11, ref: f11, shapeFlag: d11 } = t12;
      switch (c11) {
        case dd:
          w10(e12, t12, r11, o12);
          break;
        case dp:
          x6(e12, t12, r11, o12);
          break;
        case dh:
          null == e12 && k2(t12, r11, o12, l11);
          break;
        case df:
          T2(e12, t12, r11, o12, i10, a12, l11, s11, u11);
          break;
        default:
          1 & d11 ? C2(e12, t12, r11, o12, i10, a12, l11, s11, u11) : 6 & d11 ? I2(e12, t12, r11, o12, i10, a12, l11, s11, u11) : 64 & d11 ? c11.process(e12, t12, r11, o12, i10, a12, l11, s11, u11, X2) : 128 & d11 && c11.process(e12, t12, r11, o12, i10, a12, l11, s11, u11, X2);
      }
      null != f11 && i10 && f8(f11, e12 && e12.ref, a12, t12 || e12, !t12);
    }, w10 = (e12, t12, r11, o12) => {
      if (null == e12)
        l10(t12.el = f10(t12.children), r11, o12);
      else {
        let r12 = t12.el = e12.el;
        t12.children !== e12.children && p10(r12, t12.children);
      }
    }, x6 = (e12, t12, r11, o12) => {
      null == e12 ? l10(t12.el = d10(t12.children || ""), r11, o12) : t12.el = e12.el;
    }, k2 = (e12, t12, r11, o12) => {
      [e12.el, e12.anchor] = b10(e12.children, t12, r11, o12, e12.el, e12.anchor);
    }, S2 = (e12, t12, r11) => {
      let o12, { el: i10, anchor: a12 } = e12;
      for (; i10 && i10 !== a12; )
        o12 = g10(i10), l10(i10, t12, r11), i10 = o12;
      l10(a12, t12, r11);
    }, O2 = (e12) => {
      let t12, { el: r11, anchor: o12 } = e12;
      for (; r11 && r11 !== o12; )
        t12 = g10(r11), s10(r11), r11 = t12;
      s10(o12);
    }, C2 = (e12, t12, r11, o12, i10, a12, l11, s11, u11) => {
      "svg" === t12.type ? l11 = "svg" : "math" === t12.type && (l11 = "mathml"), null == e12 ? E2(t12, r11, o12, i10, a12, l11, s11, u11) : M2(e12, t12, i10, a12, l11, s11, u11);
    }, E2 = (e12, t12, r11, o12, i10, a12, s11, f11) => {
      let d11, p11;
      let { props: m11, shapeFlag: g11, transition: y11, dirs: b11 } = e12;
      if (d11 = e12.el = c10(e12.type, a12, m11 && m11.is, m11), 8 & g11 ? h10(d11, e12.children) : 16 & g11 && P2(e12.children, d11, null, o12, i10, f7(e12, a12), s11, f11), b11 && fe(e12, null, o12, "created"), A2(d11, e12, e12.scopeId, s11, o12), m11) {
        for (let t13 in m11)
          "value" === t13 || s6(t13) || u10(d11, t13, null, m11[t13], a12, e12.children, o12, i10, G2);
        "value" in m11 && u10(d11, "value", null, m11.value, a12), (p11 = m11.onVnodeBeforeMount) && dC(p11, o12, e12);
      }
      b11 && fe(e12, null, o12, "beforeMount");
      let _11 = (!i10 || i10 && !i10.pendingBranch) && y11 && !y11.persisted;
      _11 && y11.beforeEnter(d11), l10(d11, t12, r11), ((p11 = m11 && m11.onVnodeMounted) || _11 || b11) && f9(() => {
        p11 && dC(p11, o12, e12), _11 && y11.enter(d11), b11 && fe(e12, null, o12, "mounted");
      }, i10);
    }, A2 = (e12, t12, r11, o12, i10) => {
      if (r11 && y10(e12, r11), o12)
        for (let t13 = 0; t13 < o12.length; t13++)
          y10(e12, o12[t13]);
      if (i10 && t12 === i10.subTree) {
        let t13 = i10.vnode;
        A2(e12, t13, t13.scopeId, t13.slotScopeIds, i10.parent);
      }
    }, P2 = function(e12, t12, r11, o12, i10, a12, l11, s11) {
      let u11 = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0;
      for (let c11 = u11; c11 < e12.length; c11++)
        _10(null, e12[c11] = s11 ? dS(e12[c11]) : dk(e12[c11]), t12, r11, o12, i10, a12, l11, s11);
    }, M2 = (e12, t12, r11, o12, i10, a12, l11) => {
      let s11;
      let c11 = t12.el = e12.el, { patchFlag: f11, dynamicChildren: d11, dirs: p11 } = t12;
      f11 |= 16 & e12.patchFlag;
      let m11 = e12.props || sL, g11 = t12.props || sL;
      if (r11 && de(r11, false), (s11 = g11.onVnodeBeforeUpdate) && dC(s11, r11, t12, e12), p11 && fe(t12, e12, r11, "beforeUpdate"), r11 && de(r11, true), d11 ? j2(e12.dynamicChildren, d11, c11, r11, o12, f7(t12, i10), a12) : l11 || V2(e12, t12, c11, null, r11, o12, f7(t12, i10), a12, false), f11 > 0) {
        if (16 & f11)
          R2(c11, t12, m11, g11, r11, o12, i10);
        else if (2 & f11 && m11.class !== g11.class && u10(c11, "class", null, g11.class, i10), 4 & f11 && u10(c11, "style", m11.style, g11.style, i10), 8 & f11) {
          let a13 = t12.dynamicProps;
          for (let t13 = 0; t13 < a13.length; t13++) {
            let l12 = a13[t13], s12 = m11[l12], f12 = g11[l12];
            (f12 !== s12 || "value" === l12) && u10(c11, l12, s12, f12, i10, e12.children, r11, o12, G2);
          }
        }
        1 & f11 && e12.children !== t12.children && h10(c11, t12.children);
      } else
        l11 || null != d11 || R2(c11, t12, m11, g11, r11, o12, i10);
      ((s11 = g11.onVnodeUpdated) || p11) && f9(() => {
        s11 && dC(s11, r11, t12, e12), p11 && fe(t12, e12, r11, "updated");
      }, o12);
    }, j2 = (e12, t12, r11, o12, i10, a12, l11) => {
      for (let s11 = 0; s11 < t12.length; s11++) {
        let u11 = e12[s11], c11 = t12[s11], f11 = u11.el && (u11.type === df || !dg(u11, c11) || 70 & u11.shapeFlag) ? m10(u11.el) : r11;
        _10(u11, c11, f11, null, o12, i10, a12, l11, true);
      }
    }, R2 = (e12, t12, r11, o12, i10, a12, l11) => {
      if (r11 !== o12) {
        if (r11 !== sL)
          for (let s11 in r11)
            s6(s11) || s11 in o12 || u10(e12, s11, r11[s11], null, l11, t12.children, i10, a12, G2);
        for (let s11 in o12) {
          if (s6(s11))
            continue;
          let c11 = o12[s11], f11 = r11[s11];
          c11 !== f11 && "value" !== s11 && u10(e12, s11, f11, c11, l11, t12.children, i10, a12, G2);
        }
        "value" in o12 && u10(e12, "value", r11.value, o12.value, l11);
      }
    }, T2 = (e12, t12, r11, o12, i10, a12, s11, u11, c11) => {
      let d11 = t12.el = e12 ? e12.el : f10(""), p11 = t12.anchor = e12 ? e12.anchor : f10(""), { patchFlag: h11, dynamicChildren: m11, slotScopeIds: g11 } = t12;
      g11 && (u11 = u11 ? u11.concat(g11) : g11), null == e12 ? (l10(d11, r11, o12), l10(p11, r11, o12), P2(t12.children || [], r11, p11, i10, a12, s11, u11, c11)) : h11 > 0 && 64 & h11 && m11 && e12.dynamicChildren ? (j2(e12.dynamicChildren, m11, r11, i10, a12, s11, u11), (null != t12.key || i10 && t12 === i10.subTree) && dt(e12, t12, true)) : V2(e12, t12, r11, p11, i10, a12, s11, u11, c11);
    }, I2 = (e12, t12, r11, o12, i10, a12, l11, s11, u11) => {
      t12.slotScopeIds = s11, null == e12 ? 512 & t12.shapeFlag ? i10.ctx.activate(t12, r11, o12, l11, u11) : $2(t12, r11, o12, i10, a12, l11, u11) : D2(e12, t12, u11);
    }, $2 = (e12, t12, r11, o12, a12, l11, s11) => {
      let u11 = e12.component = function(e13, t13, r12) {
        let o13 = e13.type, i10 = (t13 ? t13.appContext : e13.appContext) || dE, a13 = { uid: dA++, vnode: e13, type: o13, parent: t13, appContext: i10, root: null, next: null, subTree: null, effect: null, update: null, scope: new uv(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: t13 ? t13.provides : Object.create(i10.provides), accessCache: null, renderCache: [], components: null, directives: null, propsOptions: function e14(t14, r13) {
          let o14 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i11 = r13.propsCache, a14 = i11.get(t14);
          if (a14)
            return a14;
          let l12 = t14.props, s12 = {}, u12 = [], c11 = false;
          if (!sZ(t14)) {
            let i12 = (t15) => {
              c11 = true;
              let [o15, i13] = e14(t15, r13, true);
              sU(s12, o15), i13 && u12.push(...i13);
            };
            !o14 && r13.mixins.length && r13.mixins.forEach(i12), t14.extends && i12(t14.extends), t14.mixins && t14.mixins.forEach(i12);
          }
          if (!l12 && !c11)
            return sQ(t14) && i11.set(t14, sF), sF;
          if (sG(l12))
            for (let e15 = 0; e15 < l12.length; e15++) {
              let t15 = s7(l12[e15]);
              fX(t15) && (s12[t15] = sL);
            }
          else if (l12)
            for (let e15 in l12) {
              let t15 = s7(e15);
              if (fX(t15)) {
                let r14 = l12[e15], o15 = s12[t15] = sG(r14) || sZ(r14) ? { type: r14 } : sU({}, r14);
                if (o15) {
                  let e16 = fQ(Boolean, o15.type), r15 = fQ(String, o15.type);
                  o15[0] = e16 > -1, o15[1] = r15 < 0 || e16 < r15, (e16 > -1 || sq(o15, "default")) && u12.push(t15);
                }
              }
            }
          let f11 = [s12, u12];
          return sQ(t14) && i11.set(t14, f11), f11;
        }(o13, i10), emitsOptions: function e14(t14, r13) {
          let o14 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i11 = r13.emitsCache, a14 = i11.get(t14);
          if (void 0 !== a14)
            return a14;
          let l12 = t14.emits, s12 = {}, u12 = false;
          if (!sZ(t14)) {
            let i12 = (t15) => {
              let o15 = e14(t15, r13, true);
              o15 && (u12 = true, sU(s12, o15));
            };
            !o14 && r13.mixins.length && r13.mixins.forEach(i12), t14.extends && i12(t14.extends), t14.mixins && t14.mixins.forEach(i12);
          }
          return l12 || u12 ? (sG(l12) ? l12.forEach((e15) => s12[e15] = null) : sU(s12, l12), sQ(t14) && i11.set(t14, s12), s12) : (sQ(t14) && i11.set(t14, null), null);
        }(o13, i10), emit: null, emitted: null, propsDefaults: sL, inheritAttrs: o13.inheritAttrs, ctx: sL, data: sL, props: sL, attrs: sL, slots: sL, refs: sL, setupState: sL, setupContext: null, attrsProxy: null, slotsProxy: null, suspense: r12, suspenseId: r12 ? r12.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
        return a13.ctx = { _: a13 }, a13.root = t13 ? t13.root : a13, a13.emit = cq.bind(null, a13), e13.ce && e13.ce(a13), a13;
      }(e12, o12, a12);
      fp(e12) && (u11.ctx.renderer = X2), function(e13) {
        let t13 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        t13 && i(t13);
        let { props: r12, children: o13 } = e13.vnode, a13 = dT(e13);
        (function(e14, t14, r13) {
          let o14 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], i10 = {}, a14 = {};
          for (let r14 in ua(a14, dy, 1), e14.propsDefaults = /* @__PURE__ */ Object.create(null), fK(e14, t14, i10, a14), e14.propsOptions[0])
            r14 in i10 || (i10[r14] = void 0);
          r13 ? e14.props = o14 ? i10 : ca(i10) : e14.type.props ? e14.props = i10 : e14.props = a14, e14.attrs = a14;
        })(e13, r12, a13, t13), f5(e13, o13), a13 && function(e14, t14) {
          let r13 = e14.type;
          e14.accessCache = /* @__PURE__ */ Object.create(null), e14.proxy = cp(new Proxy(e14.ctx, fR));
          let { setup: o14 } = r13;
          if (o14) {
            var i10;
            let r14 = e14.setupContext = o14.length > 1 ? { get attrs() {
              return i10.attrsProxy || (i10.attrsProxy = new Proxy(i10.attrs, { get: (e15, t15) => (uI(i10, "get", "$attrs"), e15[t15]) }));
            }, slots: (i10 = e14).slots, emit: i10.emit, expose: (e15) => {
              i10.exposed = e15 || {};
            } } : null, a14 = dj(e14);
            uS();
            let l12 = cE(o14, e14, 0, [e14.props, r14]);
            if (uO(), a14(), s0(l12)) {
              if (l12.then(dR, dR), t14)
                return l12.then((r15) => {
                  d$(e14, r15, t14);
                }).catch((t15) => {
                  cP(t15, e14, 0);
                });
              e14.asyncDep = l12;
            } else
              d$(e14, l12, t14);
          } else
            dD(e14, t14);
        }(e13, t13), t13 && i(false);
      }(u11), u11.asyncDep ? (a12 && a12.registerDep(u11, L2), e12.el || x6(null, u11.subTree = dw(dp), t12, r11)) : L2(u11, e12, t12, r11, a12, l11, s11);
    }, D2 = (e12, t12, r11) => {
      let o12 = t12.component = e12.component;
      if (function(e13, t13, r12) {
        let { props: o13, children: i10, component: a12 } = e13, { props: l11, children: s11, patchFlag: u11 } = t13, c11 = a12.emitsOptions;
        if (t13.dirs || t13.transition)
          return true;
        if (!r12 || !(u11 >= 0))
          return (!!i10 || !!s11) && (!s11 || !s11.$stable) || o13 !== l11 && (o13 ? !l11 || c0(o13, l11, c11) : !!l11);
        if (1024 & u11)
          return true;
        if (16 & u11)
          return o13 ? c0(o13, l11, c11) : !!l11;
        if (8 & u11) {
          let e14 = t13.dynamicProps;
          for (let t14 = 0; t14 < e14.length; t14++) {
            let r13 = e14[t14];
            if (l11[r13] !== o13[r13] && !cG(c11, r13))
              return true;
          }
        }
        return false;
      }(e12, t12, r11)) {
        if (o12.asyncDep && !o12.asyncResolved) {
          F2(o12, t12, r11);
          return;
        }
        o12.next = t12, function(e13) {
          let t13 = cR.indexOf(e13);
          t13 > cT && cR.splice(t13, 1);
        }(o12.update), o12.effect.dirty = true, o12.update();
      } else
        t12.el = e12.el, o12.vnode = t12;
    }, L2 = (e12, t12, r11, o12, i10, l11, s11) => {
      let u11 = () => {
        if (e12.isMounted) {
          let t13, { next: r12, bu: o13, u: a12, parent: c12, vnode: f12 } = e12;
          {
            let t14 = function e13(t15) {
              let r13 = t15.subTree.component;
              if (r13)
                return r13.asyncDep && !r13.asyncResolved ? r13 : e13(r13);
            }(e12);
            if (t14) {
              r12 && (r12.el = f12.el, F2(e12, r12, s11)), t14.asyncDep.then(() => {
                e12.isUnmounted || u11();
              });
              return;
            }
          }
          let d11 = r12;
          de(e12, false), r12 ? (r12.el = f12.el, F2(e12, r12, s11)) : r12 = f12, o13 && ui(o13), (t13 = r12.props && r12.props.onVnodeBeforeUpdate) && dC(t13, c12, r12, f12), de(e12, true);
          let p11 = cX(e12), h11 = e12.subTree;
          e12.subTree = p11, _10(h11, p11, m10(h11.el), Y2(h11), e12, i10, l11), r12.el = p11.el, null === d11 && function(e13, t14) {
            let { vnode: r13, parent: o14 } = e13;
            for (; o14; ) {
              let e14 = o14.subTree;
              if (e14.suspense && e14.suspense.activeBranch === r13 && (e14.el = r13.el), e14 === r13)
                (r13 = o14.vnode).el = t14, o14 = o14.parent;
              else
                break;
            }
          }(e12, p11.el), a12 && f9(a12, i10), (t13 = r12.props && r12.props.onVnodeUpdated) && f9(() => dC(t13, c12, r12, f12), i10);
        } else {
          let s12;
          let { el: u12, props: c12 } = t12, { bm: f12, m: d11, parent: p11 } = e12, h11 = fd(t12);
          if (de(e12, false), f12 && ui(f12), !h11 && (s12 = c12 && c12.onVnodeBeforeMount) && dC(s12, p11, t12), de(e12, true), u12 && a11) {
            let r12 = () => {
              e12.subTree = cX(e12), a11(u12, e12.subTree, e12, i10, null);
            };
            h11 ? t12.type.__asyncLoader().then(() => !e12.isUnmounted && r12()) : r12();
          } else {
            let a12 = e12.subTree = cX(e12);
            _10(null, a12, r11, o12, e12, i10, l11), t12.el = a12.el;
          }
          if (d11 && f9(d11, i10), !h11 && (s12 = c12 && c12.onVnodeMounted)) {
            let e13 = t12;
            f9(() => dC(s12, p11, e13), i10);
          }
          (256 & t12.shapeFlag || p11 && fd(p11.vnode) && 256 & p11.vnode.shapeFlag) && e12.a && f9(e12.a, i10), e12.isMounted = true, t12 = r11 = o12 = null;
        }
      }, c11 = e12.effect = new ug(u11, sV, () => cz(f11), e12.scope), f11 = e12.update = () => {
        c11.dirty && c11.run();
      };
      f11.id = e12.uid, de(e12, true), f11();
    }, F2 = (e12, t12, r11) => {
      t12.component = e12;
      let o12 = e12.vnode.props;
      e12.vnode = t12, e12.next = null, function(e13, t13, r12, o13) {
        let { props: i10, attrs: a12, vnode: { patchFlag: l11 } } = e13, s11 = cd(i10), [u11] = e13.propsOptions, c11 = false;
        if ((o13 || l11 > 0) && !(16 & l11)) {
          if (8 & l11) {
            let r13 = e13.vnode.dynamicProps;
            for (let o14 = 0; o14 < r13.length; o14++) {
              let l12 = r13[o14];
              if (cG(e13.emitsOptions, l12))
                continue;
              let f11 = t13[l12];
              if (u11) {
                if (sq(a12, l12))
                  f11 !== a12[l12] && (a12[l12] = f11, c11 = true);
                else {
                  let t14 = s7(l12);
                  i10[t14] = fZ(u11, s11, t14, f11, e13, false);
                }
              } else
                f11 !== a12[l12] && (a12[l12] = f11, c11 = true);
            }
          }
        } else {
          let o14;
          for (let l12 in fK(e13, t13, i10, a12) && (c11 = true), s11)
            t13 && (sq(t13, l12) || (o14 = ut(l12)) !== l12 && sq(t13, o14)) || (u11 ? r12 && (void 0 !== r12[l12] || void 0 !== r12[o14]) && (i10[l12] = fZ(u11, s11, l12, void 0, e13, true)) : delete i10[l12]);
          if (a12 !== s11)
            for (let e14 in a12)
              t13 && sq(t13, e14) || (delete a12[e14], c11 = true);
        }
        c11 && u$(e13, "set", "$attrs");
      }(e12, t12.props, o12, r11), f6(e12, t12.children, r11), uS(), cB(e12), uO();
    }, V2 = function(e12, t12, r11, o12, i10, a12, l11, s11) {
      let u11 = arguments.length > 8 && void 0 !== arguments[8] && arguments[8], c11 = e12 && e12.children, f11 = e12 ? e12.shapeFlag : 0, d11 = t12.children, { patchFlag: p11, shapeFlag: m11 } = t12;
      if (p11 > 0) {
        if (128 & p11) {
          N2(c11, d11, r11, o12, i10, a12, l11, s11, u11);
          return;
        }
        if (256 & p11) {
          z2(c11, d11, r11, o12, i10, a12, l11, s11, u11);
          return;
        }
      }
      8 & m11 ? (16 & f11 && G2(c11, i10, a12), d11 !== c11 && h10(r11, d11)) : 16 & f11 ? 16 & m11 ? N2(c11, d11, r11, o12, i10, a12, l11, s11, u11) : G2(c11, i10, a12, true) : (8 & f11 && h10(r11, ""), 16 & m11 && P2(d11, r11, o12, i10, a12, l11, s11, u11));
    }, z2 = (e12, t12, r11, o12, i10, a12, l11, s11, u11) => {
      let c11;
      e12 = e12 || sF, t12 = t12 || sF;
      let f11 = e12.length, d11 = t12.length, p11 = Math.min(f11, d11);
      for (c11 = 0; c11 < p11; c11++) {
        let o13 = t12[c11] = u11 ? dS(t12[c11]) : dk(t12[c11]);
        _10(e12[c11], o13, r11, null, i10, a12, l11, s11, u11);
      }
      f11 > d11 ? G2(e12, i10, a12, true, false, p11) : P2(t12, r11, o12, i10, a12, l11, s11, u11, p11);
    }, N2 = (e12, t12, r11, o12, i10, a12, l11, s11, u11) => {
      let c11 = 0, f11 = t12.length, d11 = e12.length - 1, p11 = f11 - 1;
      for (; c11 <= d11 && c11 <= p11; ) {
        let o13 = e12[c11], f12 = t12[c11] = u11 ? dS(t12[c11]) : dk(t12[c11]);
        if (dg(o13, f12))
          _10(o13, f12, r11, null, i10, a12, l11, s11, u11);
        else
          break;
        c11++;
      }
      for (; c11 <= d11 && c11 <= p11; ) {
        let o13 = e12[d11], c12 = t12[p11] = u11 ? dS(t12[p11]) : dk(t12[p11]);
        if (dg(o13, c12))
          _10(o13, c12, r11, null, i10, a12, l11, s11, u11);
        else
          break;
        d11--, p11--;
      }
      if (c11 > d11) {
        if (c11 <= p11) {
          let e13 = p11 + 1, d12 = e13 < f11 ? t12[e13].el : o12;
          for (; c11 <= p11; )
            _10(null, t12[c11] = u11 ? dS(t12[c11]) : dk(t12[c11]), r11, d12, i10, a12, l11, s11, u11), c11++;
        }
      } else if (c11 > p11)
        for (; c11 <= d11; )
          U2(e12[c11], i10, a12, true), c11++;
      else {
        let h11;
        let m11 = c11, g11 = c11, y11 = /* @__PURE__ */ new Map();
        for (c11 = g11; c11 <= p11; c11++) {
          let e13 = t12[c11] = u11 ? dS(t12[c11]) : dk(t12[c11]);
          null != e13.key && y11.set(e13.key, c11);
        }
        let b11 = 0, w11 = p11 - g11 + 1, x7 = false, k3 = 0, S3 = Array(w11);
        for (c11 = 0; c11 < w11; c11++)
          S3[c11] = 0;
        for (c11 = m11; c11 <= d11; c11++) {
          let o13;
          let f12 = e12[c11];
          if (b11 >= w11) {
            U2(f12, i10, a12, true);
            continue;
          }
          if (null != f12.key)
            o13 = y11.get(f12.key);
          else
            for (h11 = g11; h11 <= p11; h11++)
              if (0 === S3[h11 - g11] && dg(f12, t12[h11])) {
                o13 = h11;
                break;
              }
          void 0 === o13 ? U2(f12, i10, a12, true) : (S3[o13 - g11] = c11 + 1, o13 >= k3 ? k3 = o13 : x7 = true, _10(f12, t12[o13], r11, null, i10, a12, l11, s11, u11), b11++);
        }
        let O3 = x7 ? function(e13) {
          let t13, r12, o13, i11, a13;
          let l12 = e13.slice(), s12 = [0], u12 = e13.length;
          for (t13 = 0; t13 < u12; t13++) {
            let u13 = e13[t13];
            if (0 !== u13) {
              if (e13[r12 = s12[s12.length - 1]] < u13) {
                l12[t13] = r12, s12.push(t13);
                continue;
              }
              for (o13 = 0, i11 = s12.length - 1; o13 < i11; )
                e13[s12[a13 = o13 + i11 >> 1]] < u13 ? o13 = a13 + 1 : i11 = a13;
              u13 < e13[s12[o13]] && (o13 > 0 && (l12[t13] = s12[o13 - 1]), s12[o13] = t13);
            }
          }
          for (o13 = s12.length, i11 = s12[o13 - 1]; o13-- > 0; )
            s12[o13] = i11, i11 = l12[i11];
          return s12;
        }(S3) : sF;
        for (h11 = O3.length - 1, c11 = w11 - 1; c11 >= 0; c11--) {
          let e13 = g11 + c11, d12 = t12[e13], p12 = e13 + 1 < f11 ? t12[e13 + 1].el : o12;
          0 === S3[c11] ? _10(null, d12, r11, p12, i10, a12, l11, s11, u11) : x7 && (h11 < 0 || c11 !== O3[h11] ? B2(d12, r11, p12, 2) : h11--);
        }
      }
    }, B2 = function(e12, t12, r11, o12) {
      let i10 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null, { el: a12, type: s11, transition: u11, children: c11, shapeFlag: f11 } = e12;
      if (6 & f11) {
        B2(e12.component.subTree, t12, r11, o12);
        return;
      }
      if (128 & f11) {
        e12.suspense.move(t12, r11, o12);
        return;
      }
      if (64 & f11) {
        s11.move(e12, t12, r11, X2);
        return;
      }
      if (s11 === df) {
        l10(a12, t12, r11);
        for (let e13 = 0; e13 < c11.length; e13++)
          B2(c11[e13], t12, r11, o12);
        l10(e12.anchor, t12, r11);
        return;
      }
      if (s11 === dh) {
        S2(e12, t12, r11);
        return;
      }
      if (2 !== o12 && 1 & f11 && u11) {
        if (0 === o12)
          u11.beforeEnter(a12), l10(a12, t12, r11), f9(() => u11.enter(a12), i10);
        else {
          let { leave: e13, delayLeave: o13, afterLeave: i11 } = u11, s12 = () => l10(a12, t12, r11), c12 = () => {
            e13(a12, () => {
              s12(), i11 && i11();
            });
          };
          o13 ? o13(a12, s12, c12) : c12();
        }
      } else
        l10(a12, t12, r11);
    }, U2 = function(e12, t12, r11) {
      let o12, i10 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], a12 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], { type: l11, props: s11, ref: u11, children: c11, dynamicChildren: f11, shapeFlag: d11, patchFlag: p11, dirs: h11 } = e12;
      if (null != u11 && f8(u11, null, r11, e12, true), 256 & d11) {
        t12.ctx.deactivate(e12);
        return;
      }
      let m11 = 1 & d11 && h11, g11 = !fd(e12);
      if (g11 && (o12 = s11 && s11.onVnodeBeforeUnmount) && dC(o12, t12, e12), 6 & d11)
        q2(e12.component, r11, i10);
      else {
        if (128 & d11) {
          e12.suspense.unmount(r11, i10);
          return;
        }
        m11 && fe(e12, null, t12, "beforeUnmount"), 64 & d11 ? e12.type.remove(e12, t12, r11, a12, X2, i10) : f11 && (l11 !== df || p11 > 0 && 64 & p11) ? G2(f11, t12, r11, false, true) : (l11 === df && 384 & p11 || !a12 && 16 & d11) && G2(c11, t12, r11), i10 && H2(e12);
      }
      (g11 && (o12 = s11 && s11.onVnodeUnmounted) || m11) && f9(() => {
        o12 && dC(o12, t12, e12), m11 && fe(e12, null, t12, "unmounted");
      }, r11);
    }, H2 = (e12) => {
      let { type: t12, el: r11, anchor: o12, transition: i10 } = e12;
      if (t12 === df) {
        W2(r11, o12);
        return;
      }
      if (t12 === dh) {
        O2(e12);
        return;
      }
      let a12 = () => {
        s10(r11), i10 && !i10.persisted && i10.afterLeave && i10.afterLeave();
      };
      if (1 & e12.shapeFlag && i10 && !i10.persisted) {
        let { leave: t13, delayLeave: o13 } = i10, l11 = () => t13(r11, a12);
        o13 ? o13(e12.el, a12, l11) : l11();
      } else
        a12();
    }, W2 = (e12, t12) => {
      let r11;
      for (; e12 !== t12; )
        r11 = g10(e12), s10(e12), e12 = r11;
      s10(t12);
    }, q2 = (e12, t12, r11) => {
      let { bum: o12, scope: i10, update: a12, subTree: l11, um: s11 } = e12;
      o12 && ui(o12), i10.stop(), a12 && (a12.active = false, U2(l11, e12, t12, r11)), s11 && f9(s11, t12), f9(() => {
        e12.isUnmounted = true;
      }, t12), t12 && t12.pendingBranch && !t12.isUnmounted && e12.asyncDep && !e12.asyncResolved && e12.suspenseId === t12.pendingId && (t12.deps--, 0 === t12.deps && t12.resolve());
    }, G2 = function(e12, t12, r11) {
      let o12 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], i10 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], a12 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
      for (let l11 = a12; l11 < e12.length; l11++)
        U2(e12[l11], t12, r11, o12, i10);
    }, Y2 = (e12) => 6 & e12.shapeFlag ? Y2(e12.component.subTree) : 128 & e12.shapeFlag ? e12.suspense.next() : g10(e12.anchor || e12.el), K2 = false, Z2 = (e12, t12, r11) => {
      null == e12 ? t12._vnode && U2(t12._vnode, null, null, true) : _10(t12._vnode || null, e12, t12, null, null, null, r11), K2 || (K2 = true, cB(), cU(), K2 = false), t12._vnode = e12;
    }, X2 = { p: _10, um: U2, m: B2, r: H2, mt: $2, mc: P2, pc: V2, pbc: j2, n: Y2, o: e11 };
    return t11 && ([o11, a11] = t11(X2)), { render: Z2, hydrate: o11, createApp: (r10 = o11, function(e12) {
      let t12 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      sZ(e12) || (e12 = sU({}, e12)), null == t12 || sQ(t12) || (t12 = null);
      let o12 = fH(), i10 = /* @__PURE__ */ new WeakSet(), a12 = false, l11 = o12.app = { _uid: fW++, _component: e12, _props: t12, _container: null, _context: o12, _instance: null, version: "3.4.21", get config() {
        return o12.config;
      }, set config(v) {
      }, use(e13) {
        for (var t13 = arguments.length, r11 = Array(t13 > 1 ? t13 - 1 : 0), o13 = 1; o13 < t13; o13++)
          r11[o13 - 1] = arguments[o13];
        return i10.has(e13) || (e13 && sZ(e13.install) ? (i10.add(e13), e13.install(l11, ...r11)) : sZ(e13) && (i10.add(e13), e13(l11, ...r11))), l11;
      }, mixin: (e13) => (o12.mixins.includes(e13) || o12.mixins.push(e13), l11), component: (e13, t13) => t13 ? (o12.components[e13] = t13, l11) : o12.components[e13], directive: (e13, t13) => t13 ? (o12.directives[e13] = t13, l11) : o12.directives[e13], mount(i11, s11, u11) {
        if (!a12) {
          let c11 = dw(e12, t12);
          return c11.appContext = o12, true === u11 ? u11 = "svg" : false === u11 && (u11 = void 0), s11 && r10 ? r10(c11, i11) : Z2(c11, i11, u11), a12 = true, l11._container = i11, i11.__vue_app__ = l11, dL(c11.component) || c11.component.proxy;
        }
      }, unmount() {
        a12 && (Z2(null, l11._container), delete l11._container.__vue_app__);
      }, provide: (e13, t13) => (o12.provides[e13] = t13, l11), runWithContext(e13) {
        let t13 = fq;
        fq = l11;
        try {
          return e13();
        } finally {
          fq = t13;
        }
      } };
      return l11;
    }) };
  }(ps))).createApp(...t10), { mount: a10 } = o10;
  return o10.mount = (e11) => {
    let t11 = sX(e11) ? document.querySelector(e11) : e11;
    if (!t11)
      return;
    let r10 = o10._component;
    sZ(r10) || r10.render || r10.template || (r10.template = t11.innerHTML), t11.innerHTML = "";
    let i10 = a10(t11, false, t11 instanceof SVGElement ? "svg" : "function" == typeof MathMLElement && t11 instanceof MathMLElement ? "mathml" : void 0);
    return t11 instanceof Element && (t11.removeAttribute("v-cloak"), t11.setAttribute("data-v-app", "")), i10;
  }, o10;
})(x0).use(x3).mount("#root");
let x5 = Object.freeze(Object.defineProperty({ __proto__: null, default: "M1,1V5H2V19H1V23H5V22H19V23H23V19H22V5H23V1H19V2H5V1M5,4H19V5H20V19H19V20H5V19H4V5H5M6,6V14H9V18H18V9H14V6M8,8H12V12H8M14,11H16V16H11V14H14" }, Symbol.toStringTag, { value: "Module" }));
export {
  g6 as $,
  wX as A,
  xu as B,
  xG as C,
  xB as D,
  xC as E,
  g0 as F,
  xy as G,
  xb as H,
  xj as I,
  w5 as J,
  w3 as K,
  xD as L,
  xL as M,
  hy as N,
  xP as O,
  xe as P,
  hg as Q,
  hk as R,
  hS as S,
  xU as T,
  hU as U,
  hH as V,
  ye as W,
  yt as X,
  g4 as Y,
  g5 as Z,
  hh as _,
  x_ as a,
  xx as b,
  g1 as c,
  ff as d,
  xO as e,
  xA as f,
  xE as g,
  dz as h,
  mD as i,
  mL as j,
  df as k,
  xk as l,
  st as m,
  xz as n,
  xM as o,
  xw as p,
  xI as q,
  c_ as r,
  xa as s,
  eo as t,
  i$ as u,
  xY as v,
  yo as w,
  xf as x,
  gQ as y,
  wQ as z
};
