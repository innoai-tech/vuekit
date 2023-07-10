var t, r, e, n, o, i, u, a, c, f, l, s, p = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, y = function(t10) {
  try {
    return !!t10();
  } catch (t11) {
    return true;
  }
}, d = !y(function() {
  return 7 != Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1];
}), h = !y(function() {
  var t10 = function() {
  }.bind();
  return "function" != typeof t10 || t10.hasOwnProperty("prototype");
}), g = Function.prototype, b = g.call, m = h && g.bind.bind(b, b), w = h ? m : function(t10) {
  return function() {
    return b.apply(t10, arguments);
  };
}, A = {}, x = "object" == typeof document && document.all, E = { all: x, IS_HTMLDDA: void 0 === x && void 0 !== x }, O = E.all, T = E.IS_HTMLDDA ? function(t10) {
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
}, M = Function.prototype, C = d && Object.getOwnPropertyDescriptor, F = k(M, "name") && (!d || d && C(M, "name").configurable), D = function(t10) {
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
}, Q = !d && !y(function() {
  return 7 != Object.defineProperty(J("div"), "a", { get: function() {
    return 7;
  } }).a;
}), Z = d && y(function() {
  return 42 != Object.defineProperty(function() {
  }, "prototype", { value: 42, writable: false }).prototype;
}), tt = String, tr = TypeError, te = function(t10) {
  if (H(t10))
    return t10;
  throw tr(tt(t10) + " is not an object");
}, tn = Function.prototype.call, to = h ? tn.bind(tn) : function() {
  return tn.apply(tn, arguments);
}, ti = function(t10, r10) {
  var e10;
  return arguments.length < 2 ? T(e10 = L[t10]) ? e10 : void 0 : L[t10] && L[t10][r10];
}, tu = w({}.isPrototypeOf), ta = "undefined" != typeof navigator && String(navigator.userAgent) || "", tc = L.process, tf = L.Deno, tl = tc && tc.versions || tf && tf.version, ts = tl && tl.v8;
ts && (r = (t = ts.split("."))[0] > 0 && t[0] < 4 ? 1 : +(t[0] + t[1])), !r && ta && (!(t = ta.match(/Edge\/(\d+)/)) || t[1] >= 74) && (t = ta.match(/Chrome\/(\d+)/)) && (r = +t[1]);
var tp = r, ty = L.String, td = !!Object.getOwnPropertySymbols && !y(function() {
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
}, tE = TypeError, tO = {};
({ get exports() {
  return tO;
}, set exports(v) {
  tO = v;
} }.exports = function(t10, r10) {
  return $[t10] || ($[t10] = void 0 !== r10 ? r10 : {});
})("versions", []).push({ version: "3.31.1", mode: "global", copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.31.1/LICENSE", source: "https://github.com/zloirock/core-js" });
var tT = 0, tS = Math.random(), tj = w(1 .toString), tI = function(t10) {
  return "Symbol(" + (void 0 === t10 ? "" : t10) + ")_" + tj(++tT + tS, 36);
}, tR = tO, tP = L.Symbol, t_ = tR("wks"), tk = th ? tP.for || tP : tP && tP.withoutSetter || tI, tM = function(t10) {
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
q.f = d ? Z ? function(t10, r10, e10) {
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
}, tG = d ? function(t10, r10, e10) {
  return q.f(t10, r10, tY(1, e10));
} : function(t10, r10, e10) {
  return t10[r10] = e10, t10;
}, tH = tO("keys"), tq = function(t10) {
  return tH[t10] || (tH[t10] = tI(t10));
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
} }, t2 = t1.enforce, t4 = t1.get, t9 = String, t7 = Object.defineProperty, t3 = w("".slice), t6 = w("".replace), t8 = w([].join), t5 = d && !y(function() {
  return 8 !== t7(function() {
  }, "length", { value: 8 }).length;
}), rt = String(String).split("String"), rr = { get exports() {
  return A;
}, set exports(v) {
  A = v;
} }.exports = function(t10, r10, e10) {
  "Symbol(" === t3(t9(r10), 0, 7) && (r10 = "[" + t6(t9(r10), /^Symbol\(([^)]*)\)/, "$1") + "]"), e10 && e10.getter && (r10 = "get " + r10), e10 && e10.setter && (r10 = "set " + r10), (!k(t10, "name") || F && t10.name !== r10) && (d ? t7(t10, "name", { value: r10, configurable: true }) : t10.name = r10), t5 && e10 && k(e10, "arity") && t10.length !== e10.arity && t7(t10, "length", { value: e10.arity });
  try {
    e10 && k(e10, "constructor") && e10.constructor ? d && t7(t10, "prototype", { writable: false }) : t10.prototype && (t10.prototype = void 0);
  } catch (t11) {
  }
  var n10 = t2(t10);
  return k(n10, "source") || (n10.source = t8(rt, "string" == typeof r10 ? r10 : "")), t10;
};
Function.prototype.toString = rr(function() {
  return T(this) && t4(this).source || V(this);
}, "toString");
var re = A, rn = function(t10, r10, e10) {
  return e10.get && re(e10.get, r10, { getter: true }), e10.set && re(e10.set, r10, { setter: true }), q.f(t10, r10, e10);
}, ro = URLSearchParams.prototype, ri = w(ro.forEach);
!d || "size" in ro || rn(ro, "size", { get: function() {
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
}, rd = Object, rh = w("".split), rg = y(function() {
  return !rd("z").propertyIsEnumerable(0);
}) ? function(t10) {
  return "String" == ry(t10) ? rh(t10, "") : rd(t10);
} : rd, rv = function(t10) {
  return rg(I(t10));
}, rb = Object.getOwnPropertyDescriptor;
ru.f = d ? rb : function(t10, r10) {
  if (t10 = rv(t10), r10 = tU(r10), Q)
    try {
      return rb(t10, r10);
    } catch (t11) {
    }
  if (k(t10, r10))
    return tY(!to(ra.f, t10, r10), t10[r10]);
};
var rm = A, rw = function(t10, r10, e10, n10) {
  n10 || (n10 = {});
  var o5 = n10.enumerable, i2 = void 0 !== n10.name ? n10.name : r10;
  if (T(e10) && rm(e10, i2, n10), n10.global)
    o5 ? t10[r10] = e10 : z(r10, e10);
  else {
    try {
      n10.unsafe ? t10[r10] && (o5 = true) : delete t10[r10];
    } catch (t11) {
    }
    o5 ? t10[r10] = e10 : q.f(t10, r10, { value: e10, enumerable: false, configurable: !n10.nonConfigurable, writable: !n10.nonWritable });
  }
  return t10;
}, rA = {}, rx = Math.ceil, rE = Math.floor, rO = Math.trunc || function(t10) {
  var r10 = +t10;
  return (r10 > 0 ? rE : rx)(r10);
}, rT = function(t10) {
  var r10 = +t10;
  return r10 != r10 || 0 === r10 ? 0 : rO(r10);
}, rS = Math.max, rj = Math.min, rI = Math.min, rR = function(t10) {
  return t10 > 0 ? rI(rT(t10), 9007199254740991) : 0;
}, rP = function(t10) {
  return rR(t10.length);
}, r_ = function(t10, r10) {
  var e10 = rT(t10);
  return e10 < 0 ? rS(e10 + r10, 0) : rj(e10, r10);
}, rk = function(t10) {
  return function(r10, e10, n10) {
    var o5, i2 = rv(r10), u2 = rP(i2), a2 = r_(n10, u2);
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
}, rM = { includes: rk(true), indexOf: rk(false) }.indexOf, rC = w([].push), rF = function(t10, r10) {
  var e10, n10 = rv(t10), o5 = 0, i2 = [];
  for (e10 in n10)
    !k(tK, e10) && k(n10, e10) && rC(i2, e10);
  for (; r10.length > o5; )
    k(n10, e10 = r10[o5++]) && (~rM(i2, e10) || rC(i2, e10));
  return i2;
}, rD = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], rL = rD.concat("length", "prototype");
rA.f = Object.getOwnPropertyNames || function(t10) {
  return rF(t10, rL);
};
var rU = {};
rU.f = Object.getOwnPropertySymbols;
var rz = w([].concat), rW = ti("Reflect", "ownKeys") || function(t10) {
  var r10 = rA.f(te(t10)), e10 = rU.f;
  return e10 ? rz(r10, e10(t10)) : r10;
}, r$ = function(t10, r10, e10) {
  for (var n10 = rW(r10), o5 = q.f, i2 = ru.f, u2 = 0; u2 < n10.length; u2++) {
    var a2 = n10[u2];
    k(t10, a2) || e10 && k(e10, a2) || o5(t10, a2, i2(r10, a2));
  }
}, rB = /#|\.prototype\./, rV = function(t10, r10) {
  var e10 = rY[rN(t10)];
  return e10 == rH || e10 != rG && (T(r10) ? y(r10) : !!r10);
}, rN = rV.normalize = function(t10) {
  return String(t10).replace(rB, ".").toLowerCase();
}, rY = rV.data = {}, rG = rV.NATIVE = "N", rH = rV.POLYFILL = "P", rq = ru.f, rK = function(t10, r10) {
  var e10, n10, o5, i2, u2, a2 = t10.target, c2 = t10.global, f2 = t10.stat;
  if (e10 = c2 ? L : f2 ? L[a2] || z(a2, {}) : (L[a2] || {}).prototype)
    for (n10 in r10) {
      if (i2 = r10[n10], o5 = t10.dontCallGetSet ? (u2 = rq(e10, n10)) && u2.value : e10[n10], !rV(c2 ? n10 : a2 + (f2 ? "." : "#") + n10, t10.forced) && void 0 !== o5) {
        if (typeof i2 == typeof o5)
          continue;
        r$(i2, o5);
      }
      (t10.sham || o5 && o5.sham) && tG(i2, "sham", true), rw(e10, n10, i2, t10);
    }
}, rX = Array.isArray || function(t10) {
  return "Array" == ry(t10);
}, rJ = TypeError, rQ = Object.getOwnPropertyDescriptor, rZ = d && !function() {
  if (void 0 !== this)
    return true;
  try {
    Object.defineProperty([], "length", { writable: false }).length = 1;
  } catch (t10) {
    return t10 instanceof TypeError;
  }
}() ? function(t10, r10) {
  if (rX(t10) && !rQ(t10, "length").writable)
    throw rJ("Cannot set read only .length");
  return t10.length = r10;
} : function(t10, r10) {
  return t10.length = r10;
}, r0 = TypeError, r1 = function(t10) {
  if (t10 > 9007199254740991)
    throw r0("Maximum allowed index exceeded");
  return t10;
};
rK({ target: "Array", proto: true, arity: 1, forced: y(function() {
  return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
}) || !function() {
  try {
    Object.defineProperty([], "length", { writable: false }).push();
  } catch (t10) {
    return t10 instanceof TypeError;
  }
}() }, { push: function(t10) {
  var r10 = P(this), e10 = rP(r10), n10 = arguments.length;
  r1(e10 + n10);
  for (var o5 = 0; o5 < n10; o5++)
    r10[e10] = arguments[o5], e10++;
  return rZ(r10, e10), e10;
} });
var r2 = Function.prototype, r4 = r2.apply, r9 = r2.call, r7 = "object" == typeof Reflect && Reflect.apply || (h ? r9.bind(r4) : function() {
  return r9.apply(r4, arguments);
}), r3 = String, r6 = TypeError, r8 = function(t10, r10, e10) {
  try {
    return w(tA(Object.getOwnPropertyDescriptor(t10, r10)[e10]));
  } catch (t11) {
  }
}, r5 = function(t10) {
  if ("object" == typeof t10 || T(t10))
    return t10;
  throw r6("Can't set " + r3(t10) + " as a prototype");
}, et = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var t10, r10 = false, e10 = {};
  try {
    (t10 = r8(Object.prototype, "__proto__", "set"))(e10, []), r10 = e10 instanceof Array;
  } catch (t11) {
  }
  return function(e11, n10) {
    return te(e11), r5(n10), r10 ? t10(e11, n10) : e11.__proto__ = n10, e11;
  };
}() : void 0), er = q.f, ee = tM("toStringTag"), en = {};
en[ee] = "z";
var eo = "[object z]" === String(en), ei = tM("toStringTag"), eu = Object, ea = "Arguments" == ry(function() {
  return arguments;
}()), ec = function(t10, r10) {
  try {
    return t10[r10];
  } catch (t11) {
  }
}, ef = eo ? ry : function(t10) {
  var r10, e10, n10;
  return void 0 === t10 ? "Undefined" : null === t10 ? "Null" : "string" == typeof (e10 = ec(r10 = eu(t10), ei)) ? e10 : ea ? ry(r10) : "Object" == (n10 = ry(r10)) && T(r10.callee) ? "Arguments" : n10;
}, el = String, es = function(t10) {
  if ("Symbol" === ef(t10))
    throw TypeError("Cannot convert a Symbol value to a string");
  return el(t10);
}, ep = Error, ey = w("".replace), ed = String(ep("zxcasd").stack), eh = /\n\s*at [^:]*:[^\n]*/, eg = eh.test(ed), ev = !y(function() {
  var t10 = Error("a");
  return !("stack" in t10) || (Object.defineProperty(t10, "stack", tY(1, 7)), 7 !== t10.stack);
}), eb = function(t10, r10) {
  if (eg && "string" == typeof t10 && !ep.prepareStackTrace)
    for (; r10--; )
      t10 = ey(t10, eh, "");
  return t10;
}, em = Error.captureStackTrace, ew = function(t10, r10, e10) {
  e10 in t10 || er(t10, e10, { configurable: true, get: function() {
    return r10[e10];
  }, set: function(t11) {
    r10[e10] = t11;
  } });
}, eA = function(t10, r10, e10) {
  var n10, o5;
  return et && T(n10 = r10.constructor) && n10 !== e10 && H(o5 = n10.prototype) && o5 !== e10.prototype && et(t10, o5), t10;
}, ex = function(t10, r10) {
  H(r10) && "cause" in r10 && tG(t10, "cause", r10.cause);
}, eE = function(t10, r10, e10, n10) {
  ev && (em ? em(t10, r10) : tG(t10, "stack", eb(e10, n10)));
}, eO = function(t10, r10, e10, n10) {
  var o5 = "stackTraceLimit", i2 = n10 ? 2 : 1, u2 = t10.split("."), a2 = u2[u2.length - 1], c2 = ti.apply(null, u2);
  if (c2) {
    var f2 = c2.prototype;
    if (k(f2, "cause") && delete f2.cause, !e10)
      return c2;
    var l2 = ti("Error"), s2 = r10(function(t11, r11) {
      var e11 = function(t12, r12) {
        return void 0 === t12 ? arguments.length < 2 ? "" : r12 : es(t12);
      }(n10 ? r11 : t11, void 0), o6 = n10 ? new c2(t11) : new c2();
      return void 0 !== e11 && tG(o6, "message", e11), eE(o6, s2, o6.stack, 2), this && tu(f2, this) && eA(o6, this, s2), arguments.length > i2 && ex(o6, arguments[i2]), o6;
    });
    s2.prototype = f2, "Error" !== a2 ? et ? et(s2, l2) : r$(s2, l2, { name: true }) : d && o5 in c2 && (ew(s2, c2, o5), ew(s2, c2, "prepareStackTrace")), r$(s2, c2);
    try {
      f2.name !== a2 && tG(f2, "name", a2), f2.constructor = s2;
    } catch (t11) {
    }
    return s2;
  }
}, eT = "WebAssembly", eS = L[eT], ej = 7 !== Error("e", { cause: 7 }).cause, eI = function(t10, r10) {
  var e10 = {};
  e10[t10] = eO(t10, r10, ej), rK({ global: true, constructor: true, arity: 1, forced: ej }, e10);
}, eR = function(t10, r10) {
  if (eS && eS[t10]) {
    var e10 = {};
    e10[t10] = eO(eT + "." + t10, r10, ej), rK({ target: eT, stat: true, constructor: true, arity: 1, forced: ej }, e10);
  }
};
eI("Error", function(t10) {
  return function(r10) {
    return r7(t10, this, arguments);
  };
}), eI("EvalError", function(t10) {
  return function(r10) {
    return r7(t10, this, arguments);
  };
}), eI("RangeError", function(t10) {
  return function(r10) {
    return r7(t10, this, arguments);
  };
}), eI("ReferenceError", function(t10) {
  return function(r10) {
    return r7(t10, this, arguments);
  };
}), eI("SyntaxError", function(t10) {
  return function(r10) {
    return r7(t10, this, arguments);
  };
}), eI("TypeError", function(t10) {
  return function(r10) {
    return r7(t10, this, arguments);
  };
}), eI("URIError", function(t10) {
  return function(r10) {
    return r7(t10, this, arguments);
  };
}), eR("CompileError", function(t10) {
  return function(r10) {
    return r7(t10, this, arguments);
  };
}), eR("LinkError", function(t10) {
  return function(r10) {
    return r7(t10, this, arguments);
  };
}), eR("RuntimeError", function(t10) {
  return function(r10) {
    return r7(t10, this, arguments);
  };
});
var eP = q.f, e_ = tM("toStringTag"), ek = function(t10, r10, e10) {
  t10 && !e10 && (t10 = t10.prototype), t10 && !k(t10, e_) && eP(t10, e_, { configurable: true, value: r10 });
};
rK({ global: true }, { Reflect: {} }), ek(L.Reflect, "Reflect", true);
var eM = TypeError, eC = function(t10) {
  return function(r10, e10, n10, o5) {
    tA(e10);
    var i2 = P(r10), u2 = rg(i2), a2 = rP(i2), c2 = t10 ? a2 - 1 : 0, f2 = t10 ? -1 : 1;
    if (n10 < 2)
      for (; ; ) {
        if (c2 in u2) {
          o5 = u2[c2], c2 += f2;
          break;
        }
        if (c2 += f2, t10 ? c2 < 0 : a2 <= c2)
          throw eM("Reduce of empty array with no initial value");
      }
    for (; t10 ? c2 >= 0 : a2 > c2; c2 += f2)
      c2 in u2 && (o5 = e10(o5, u2[c2], c2, i2));
    return o5;
  };
}, eF = { left: eC(false), right: eC(true) }, eD = "undefined" != typeof process && "process" == ry(process), eL = eF.left;
rK({ target: "Array", proto: true, forced: !eD && tp > 79 && tp < 83 || !function(t10, r10) {
  var e10 = [][t10];
  return !!e10 && y(function() {
    e10.call(null, function() {
      return 1;
    }, 1);
  });
}("reduce") }, { reduce: function(t10) {
  var r10 = arguments.length;
  return eL(this, t10, r10, r10 > 1 ? arguments[1] : void 0);
} });
var eU = TypeError, ez = Object.defineProperty, eW = L.self !== L;
try {
  if (d) {
    var e$ = Object.getOwnPropertyDescriptor(L, "self");
    !eW && e$ && e$.get && e$.enumerable || rn(L, "self", { get: function() {
      return L;
    }, set: function(t10) {
      if (this !== L)
        throw eU("Illegal invocation");
      ez(L, "self", { value: t10, writable: true, configurable: true, enumerable: true });
    }, configurable: true, enumerable: true });
  } else
    rK({ global: true, simple: true, forced: eW }, { self: L });
} catch (t10) {
}
var eB = tM("match"), eV = function(t10) {
  var r10;
  return H(t10) && (void 0 !== (r10 = t10[eB]) ? !!r10 : "RegExp" == ry(t10));
}, eN = function() {
  var t10 = te(this), r10 = "";
  return t10.hasIndices && (r10 += "d"), t10.global && (r10 += "g"), t10.ignoreCase && (r10 += "i"), t10.multiline && (r10 += "m"), t10.dotAll && (r10 += "s"), t10.unicode && (r10 += "u"), t10.unicodeSets && (r10 += "v"), t10.sticky && (r10 += "y"), r10;
}, eY = RegExp.prototype, eG = function(t10) {
  var r10 = t10.flags;
  return void 0 === r10 && !("flags" in eY) && !k(t10, "flags") && tu(eY, t10) ? to(eN, t10) : r10;
}, eH = Math.floor, eq = w("".charAt), eK = w("".replace), eX = w("".slice), eJ = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, eQ = /\$([$&'`]|\d{1,2})/g, eZ = function(t10, r10, e10, n10, o5, i2) {
  var u2 = e10 + t10.length, a2 = n10.length, c2 = eQ;
  return void 0 !== o5 && (o5 = P(o5), c2 = eJ), eK(i2, c2, function(i3, c3) {
    var f2;
    switch (eq(c3, 0)) {
      case "$":
        return "$";
      case "&":
        return t10;
      case "`":
        return eX(r10, 0, e10);
      case "'":
        return eX(r10, u2);
      case "<":
        f2 = o5[eX(c3, 1, -1)];
        break;
      default:
        var l2 = +c3;
        if (0 === l2)
          return i3;
        if (l2 > a2) {
          var s2 = eH(l2 / 10);
          if (0 === s2)
            return i3;
          if (s2 <= a2)
            return void 0 === n10[s2 - 1] ? eq(c3, 1) : n10[s2 - 1] + eq(c3, 1);
          return i3;
        }
        f2 = n10[l2 - 1];
    }
    return void 0 === f2 ? "" : f2;
  });
}, e0 = tM("replace"), e1 = TypeError, e2 = w("".indexOf);
w("".replace);
var e4 = w("".slice), e9 = Math.max, e7 = function(t10, r10, e10) {
  return e10 > t10.length ? -1 : "" === r10 ? e10 : e2(t10, r10, e10);
};
rK({ target: "String", proto: true }, { replaceAll: function(t10, r10) {
  var e10, n10, o5, i2, u2, a2, c2, f2 = I(this), l2 = 0, s2 = 0, p2 = "";
  if (!S(t10)) {
    if (eV(t10) && !~e2(es(I(eG(t10))), "g"))
      throw e1("`.replaceAll` does not allow non-global regexes");
    if (e10 = tx(t10, e0))
      return to(e10, t10, f2, r10);
  }
  for (n10 = es(f2), o5 = es(t10), (i2 = T(r10)) || (r10 = es(r10)), a2 = e9(1, u2 = o5.length), l2 = e7(n10, o5, 0); -1 !== l2; )
    c2 = i2 ? es(r10(o5, l2, n10)) : eZ(o5, n10, l2, [], void 0, r10), p2 += e4(n10, s2, l2) + c2, s2 = l2 + u2, l2 = e7(n10, o5, l2 + a2);
  return s2 < n10.length && (p2 += e4(n10, s2)), p2;
} });
var e3 = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView, e6 = !y(function() {
  function t10() {
  }
  return t10.prototype.constructor = null, Object.getPrototypeOf(new t10()) !== t10.prototype;
}), e8 = tq("IE_PROTO"), e5 = Object, nt = e5.prototype, nr = e6 ? e5.getPrototypeOf : function(t10) {
  var r10 = P(t10);
  if (k(r10, e8))
    return r10[e8];
  var e10 = r10.constructor;
  return T(e10) && r10 instanceof e10 ? e10.prototype : r10 instanceof e5 ? nt : null;
}, ne = t1.enforce, nn = t1.get, no = L.Int8Array, ni = no && no.prototype, nu = L.Uint8ClampedArray, na = nu && nu.prototype, nc = no && nr(no), nf = ni && nr(ni), nl = Object.prototype, ns = L.TypeError, np = tM("toStringTag"), ny = tI("TYPED_ARRAY_TAG"), nd = "TypedArrayConstructor", nh = e3 && !!et && "Opera" !== ef(L.opera), ng = false, nv = { Int8Array: 1, Uint8Array: 1, Uint8ClampedArray: 1, Int16Array: 2, Uint16Array: 2, Int32Array: 4, Uint32Array: 4, Float32Array: 4, Float64Array: 8 }, nb = { BigInt64Array: 8, BigUint64Array: 8 }, nm = function(t10) {
  var r10 = nr(t10);
  if (H(r10)) {
    var e10 = nn(r10);
    return e10 && k(e10, nd) ? e10[nd] : nm(r10);
  }
}, nw = function(t10) {
  if (!H(t10))
    return false;
  var r10 = ef(t10);
  return k(nv, r10) || k(nb, r10);
};
for (i in nv)
  (a = (u = L[i]) && u.prototype) ? ne(a)[nd] = u : nh = false;
for (i in nb)
  (a = (u = L[i]) && u.prototype) && (ne(a)[nd] = u);
if ((!nh || !T(nc) || nc === Function.prototype) && (nc = function() {
  throw ns("Incorrect invocation");
}, nh))
  for (i in nv)
    L[i] && et(L[i], nc);
if ((!nh || !nf || nf === nl) && (nf = nc.prototype, nh))
  for (i in nv)
    L[i] && et(L[i].prototype, nf);
if (nh && nr(na) !== nf && et(na, nf), d && !k(nf, np))
  for (i in ng = true, rn(nf, np, { configurable: true, get: function() {
    return H(this) ? this[ny] : void 0;
  } }), nv)
    L[i] && tG(L[i], ny, i);
var nA = { NATIVE_ARRAY_BUFFER_VIEWS: nh, TYPED_ARRAY_TAG: ng && ny, aTypedArray: function(t10) {
  if (nw(t10))
    return t10;
  throw ns("Target is not a typed array");
}, aTypedArrayConstructor: function(t10) {
  if (T(t10) && (!et || tu(nc, t10)))
    return t10;
  throw ns(tm(t10) + " is not a typed array constructor");
}, exportTypedArrayMethod: function(t10, r10, e10, n10) {
  if (d) {
    if (e10)
      for (var o5 in nv) {
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
    (!nf[t10] || e10) && rw(nf, t10, e10 ? r10 : nh && ni[t10] || r10, n10);
  }
}, exportTypedArrayStaticMethod: function(t10, r10, e10) {
  var n10, o5;
  if (d) {
    if (et) {
      if (e10) {
        for (n10 in nv)
          if ((o5 = L[n10]) && k(o5, t10))
            try {
              delete o5[t10];
            } catch (t11) {
            }
      }
      if (nc[t10] && !e10)
        return;
      try {
        return rw(nc, t10, e10 ? r10 : nh && nc[t10] || r10);
      } catch (t11) {
      }
    }
    for (n10 in nv)
      (o5 = L[n10]) && (!o5[t10] || e10) && rw(o5, t10, r10);
  }
}, getTypedArrayConstructor: nm, isView: function(t10) {
  if (!H(t10))
    return false;
  var r10 = ef(t10);
  return "DataView" === r10 || k(nv, r10) || k(nb, r10);
}, isTypedArray: nw, TypedArray: nc, TypedArrayPrototype: nf }, nx = nA.aTypedArray;
(0, nA.exportTypedArrayMethod)("at", function(t10) {
  var r10 = nx(this), e10 = rP(r10), n10 = rT(t10), o5 = n10 >= 0 ? n10 : e10 + n10;
  return o5 < 0 || o5 >= e10 ? void 0 : r10[o5];
});
var nE = function(t10) {
  if ("Function" === ry(t10))
    return w(t10);
}, nO = nE(nE.bind), nT = function(t10) {
  var r10 = 1 == t10;
  return function(e10, n10, o5) {
    for (var i2, u2 = P(e10), a2 = rg(u2), c2 = (tA(n10), void 0 === o5 ? n10 : h ? nO(n10, o5) : function() {
      return n10.apply(o5, arguments);
    }), f2 = rP(a2); f2-- > 0; )
      if (c2(i2 = a2[f2], f2, u2))
        switch (t10) {
          case 0:
            return i2;
          case 1:
            return f2;
        }
    return r10 ? -1 : void 0;
  };
}, nS = { findLast: nT(0), findLastIndex: nT(1) }, nj = nS.findLast, nI = nA.aTypedArray;
(0, nA.exportTypedArrayMethod)("findLast", function(t10) {
  return nj(nI(this), t10, arguments.length > 1 ? arguments[1] : void 0);
});
var nR = nS.findLastIndex, nP = nA.aTypedArray;
(0, nA.exportTypedArrayMethod)("findLastIndex", function(t10) {
  return nR(nP(this), t10, arguments.length > 1 ? arguments[1] : void 0);
});
var n_ = RangeError, nk = function(t10) {
  var r10 = rT(t10);
  if (r10 < 0)
    throw n_("The argument can't be less than 0");
  return r10;
}, nM = RangeError, nC = function(t10, r10) {
  var e10 = nk(t10);
  if (e10 % r10)
    throw nM("Wrong offset");
  return e10;
}, nF = L.RangeError, nD = L.Int8Array, nL = nD && nD.prototype, nU = nL && nL.set, nz = nA.aTypedArray, nW = nA.exportTypedArrayMethod, n$ = !y(function() {
  var t10 = new Uint8ClampedArray(2);
  return to(nU, t10, { length: 1, 0: 3 }, 1), 3 !== t10[1];
}), nB = n$ && nA.NATIVE_ARRAY_BUFFER_VIEWS && y(function() {
  var t10 = new nD(2);
  return t10.set(1), t10.set("2", 1), 0 !== t10[0] || 2 !== t10[1];
});
nW("set", function(t10) {
  nz(this);
  var r10 = nC(arguments.length > 1 ? arguments[1] : void 0, 1), e10 = P(t10);
  if (n$)
    return to(nU, this, e10, r10);
  var n10 = this.length, o5 = rP(e10), i2 = 0;
  if (o5 + r10 > n10)
    throw nF("Wrong length");
  for (; i2 < o5; )
    this[r10 + i2] = e10[i2++];
}, !n$ || nB);
var nV = function(t10, r10) {
  for (var e10 = rP(t10), n10 = new r10(e10), o5 = 0; o5 < e10; o5++)
    n10[o5] = t10[e10 - o5 - 1];
  return n10;
}, nN = nA.aTypedArray, nY = nA.exportTypedArrayMethod, nG = nA.getTypedArrayConstructor;
nY("toReversed", function() {
  return nV(nN(this), nG(this));
});
var nH = function(t10, r10) {
  for (var e10 = 0, n10 = rP(r10), o5 = new t10(n10); n10 > e10; )
    o5[e10] = r10[e10++];
  return o5;
}, nq = nA.aTypedArray, nK = nA.getTypedArrayConstructor, nX = nA.exportTypedArrayMethod, nJ = w(nA.TypedArrayPrototype.sort);
nX("toSorted", function(t10) {
  void 0 !== t10 && tA(t10);
  var r10 = nq(this);
  return nJ(nH(nK(r10), r10), t10);
});
var nQ = RangeError, nZ = TypeError, n0 = function(t10, r10, e10, n10) {
  var o5 = rP(t10), i2 = rT(e10), u2 = i2 < 0 ? o5 + i2 : i2;
  if (u2 >= o5 || u2 < 0)
    throw nQ("Incorrect index");
  for (var a2 = new r10(o5), c2 = 0; c2 < o5; c2++)
    a2[c2] = c2 === u2 ? n10 : t10[c2];
  return a2;
}, n1 = function(t10) {
  var r10 = ef(t10);
  return "BigInt64Array" == r10 || "BigUint64Array" == r10;
}, n2 = function(t10) {
  var r10 = tL(t10, "number");
  if ("number" == typeof r10)
    throw nZ("Can't convert number to bigint");
  return BigInt(r10);
}, n4 = nA.aTypedArray, n9 = nA.getTypedArrayConstructor;
(0, nA.exportTypedArrayMethod)("with", { with: function(t10, r10) {
  var e10 = n4(this), n10 = rT(t10), o5 = n1(e10) ? n2(r10) : +r10;
  return n0(e10, n9(e10), n10, o5);
} }.with, !function() {
  try {
    new Int8Array(1).with(2, { valueOf: function() {
      throw 8;
    } });
  } catch (t10) {
    return 8 === t10;
  }
}());
var n7 = {}, n3 = Object.keys || function(t10) {
  return rF(t10, rD);
};
n7.f = d && !Z ? Object.defineProperties : function(t10, r10) {
  te(t10);
  for (var e10, n10 = rv(r10), o5 = n3(r10), i2 = o5.length, u2 = 0; i2 > u2; )
    q.f(t10, e10 = o5[u2++], n10[e10]);
  return t10;
};
var n6 = ti("document", "documentElement"), n8 = "prototype", n5 = "script", ot = tq("IE_PROTO"), or = function() {
}, oe = function(t10) {
  return "<" + n5 + ">" + t10 + "</" + n5 + ">";
}, on = function(t10) {
  t10.write(oe("")), t10.close();
  var r10 = t10.parentWindow.Object;
  return t10 = null, r10;
}, oo = function() {
  var t10, r10 = J("iframe");
  return r10.style.display = "none", n6.appendChild(r10), r10.src = String("java" + n5 + ":"), (t10 = r10.contentWindow.document).open(), t10.write(oe("document.F=Object")), t10.close(), t10.F;
}, oi = function() {
  try {
    c = new ActiveXObject("htmlfile");
  } catch (t11) {
  }
  oi = "undefined" != typeof document ? document.domain && c ? on(c) : oo() : on(c);
  for (var t10 = rD.length; t10--; )
    delete oi[n8][rD[t10]];
  return oi();
};
tK[ot] = true;
var ou = Object.create || function(t10, r10) {
  var e10;
  return null !== t10 ? (or[n8] = te(t10), e10 = new or(), or[n8] = null, e10[ot] = t10) : e10 = oi(), void 0 === r10 ? e10 : n7.f(e10, r10);
}, oa = tM("iterator"), oc = false;
[].keys && "next" in (s = [].keys()) && (l = nr(nr(s))) !== Object.prototype && (f = l), (!H(f) || y(function() {
  var t10 = {};
  return f[oa].call(t10) !== t10;
})) && (f = {}), T(f[oa]) || rw(f, oa, function() {
  return this;
});
var of = f, ol = function() {
}, os = [], op = ti("Reflect", "construct"), oy = /^\s*(?:class|function)\b/, od = w(oy.exec), oh = !oy.exec(ol), og = function(t10) {
  if (!T(t10))
    return false;
  try {
    return op(ol, os, t10), true;
  } catch (t11) {
    return false;
  }
}, ov = function(t10) {
  if (!T(t10))
    return false;
  switch (ef(t10)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return false;
  }
  try {
    return oh || !!od(oy, V(t10));
  } catch (t11) {
    return true;
  }
};
ov.sham = true;
var ob = !op || y(function() {
  var t10;
  return og(og.call) || !og(Object) || !og(function() {
    t10 = true;
  }) || t10;
}) ? ov : og, om = TypeError, ow = function(t10) {
  if (ob(t10))
    return t10;
  throw om(tm(t10) + " is not a constructor");
}, oA = tM("species"), ox = w("".charAt), oE = w("".charCodeAt), oO = w("".slice), oT = function(t10) {
  return function(r10, e10) {
    var n10, o5, i2 = es(I(r10)), u2 = rT(e10), a2 = i2.length;
    return u2 < 0 || u2 >= a2 ? t10 ? "" : void 0 : (n10 = oE(i2, u2)) < 55296 || n10 > 56319 || u2 + 1 === a2 || (o5 = oE(i2, u2 + 1)) < 56320 || o5 > 57343 ? t10 ? ox(i2, u2) : n10 : t10 ? oO(i2, u2, u2 + 2) : (n10 - 55296 << 10) + (o5 - 56320) + 65536;
  };
}, oS = { codeAt: oT(false), charAt: oT(true) }.charAt, oj = L.RegExp, oI = y(function() {
  var t10 = oj("a", "y");
  return t10.lastIndex = 2, null != t10.exec("abcd");
}), oR = (oI || y(function() {
  return !oj("a", "y").sticky;
}), oI || y(function() {
  var t10 = oj("^r", "gy");
  return t10.lastIndex = 2, null != t10.exec("str");
})), oP = L.RegExp, o_ = y(function() {
  var t10 = oP(".", "s");
  return !(t10.dotAll && t10.exec("\n") && "s" === t10.flags);
}), ok = L.RegExp, oM = y(function() {
  var t10 = ok("(?<a>b)", "g");
  return "b" !== t10.exec("b").groups.a || "bc" !== "b".replace(t10, "$<a>c");
}), oC = tO, oF = t1.get, oD = oC("native-string-replace", String.prototype.replace), oL = RegExp.prototype.exec, oU = oL, oz = w("".charAt), oW = w("".indexOf), o$ = w("".replace), oB = w("".slice), oV = function() {
  var t10 = /a/, r10 = /b*/g;
  return to(oL, t10, "a"), to(oL, r10, "a"), 0 !== t10.lastIndex || 0 !== r10.lastIndex;
}(), oN = void 0 !== /()??/.exec("")[1];
(oV || oN || oR || o_ || oM) && (oU = function(t10) {
  var r10, e10, n10, o5, i2, u2, a2, c2 = oF(this), f2 = es(t10), l2 = c2.raw;
  if (l2)
    return l2.lastIndex = this.lastIndex, r10 = to(oU, l2, f2), this.lastIndex = l2.lastIndex, r10;
  var s2 = c2.groups, p2 = oR && this.sticky, y2 = to(eN, this), d2 = this.source, h2 = 0, g2 = f2;
  if (p2 && (-1 === oW(y2 = o$(y2, "y", ""), "g") && (y2 += "g"), g2 = oB(f2, this.lastIndex), this.lastIndex > 0 && (!this.multiline || this.multiline && "\n" !== oz(f2, this.lastIndex - 1)) && (d2 = "(?: " + d2 + ")", g2 = " " + g2, h2++), e10 = RegExp("^(?:" + d2 + ")", y2)), oN && (e10 = RegExp("^" + d2 + "$(?!\\s)", y2)), oV && (n10 = this.lastIndex), o5 = to(oL, p2 ? e10 : this, g2), p2 ? o5 ? (o5.input = oB(o5.input, h2), o5[0] = oB(o5[0], h2), o5.index = this.lastIndex, this.lastIndex += o5[0].length) : this.lastIndex = 0 : oV && o5 && (this.lastIndex = this.global ? o5.index + o5[0].length : n10), oN && o5 && o5.length > 1 && to(oD, o5[0], e10, function() {
    for (i2 = 1; i2 < arguments.length - 2; i2++)
      void 0 === arguments[i2] && (o5[i2] = void 0);
  }), o5 && s2)
    for (i2 = 0, o5.groups = u2 = ou(null); i2 < s2.length; i2++)
      u2[(a2 = s2[i2])[0]] = o5[a2[1]];
  return o5;
});
var oY = oU, oG = TypeError, oH = function(t10, r10) {
  return { value: t10, done: r10 };
}, oq = function(t10, r10) {
  var e10, n10 = te(t10).constructor;
  return void 0 === n10 || S(e10 = te(n10)[oA]) ? r10 : ow(e10);
}, oK = function(t10, r10) {
  var e10 = t10.exec;
  if (T(e10)) {
    var n10 = to(e10, t10, r10);
    return null !== n10 && te(n10), n10;
  }
  if ("RegExp" === ry(t10))
    return to(oY, t10, r10);
  throw oG("RegExp#exec called on incompatible receiver");
}, oX = tM("matchAll"), oJ = "RegExp String", oQ = oJ + " Iterator", oZ = t1.set, o0 = t1.getterFor(oQ), o1 = RegExp.prototype, o2 = TypeError, o4 = nE("".indexOf), o9 = nE("".matchAll), o7 = !!o9 && !y(function() {
  o9("a", /./);
}), o3 = function(t10, r10, e10, n10) {
  return t10.prototype = ou(of, { next: tY(1, e10) }), ek(t10, r10 + " Iterator", false), t10;
}(function(t10, r10, e10, n10) {
  oZ(this, { type: oQ, regexp: t10, string: r10, global: e10, unicode: n10, done: false });
}, oJ, function() {
  var t10, r10 = o0(this);
  if (r10.done)
    return oH(void 0, true);
  var e10 = r10.regexp, n10 = r10.string, o5 = oK(e10, n10);
  return null === o5 ? (r10.done = true, oH(void 0, true)) : r10.global ? ("" === es(o5[0]) && (e10.lastIndex = (t10 = rR(e10.lastIndex)) + (r10.unicode ? oS(n10, t10).length : 1)), oH(o5, false)) : (r10.done = true, oH(o5, false));
});
rK({ target: "String", proto: true, forced: o7 }, { matchAll: function(t10) {
  var r10, e10, n10 = I(this);
  if (S(t10)) {
    if (o7)
      return o9(n10, t10);
  } else {
    if (eV(t10) && !~o4(es(I(eG(t10))), "g"))
      throw o2("`.matchAll` does not allow non-global regexes");
    if (o7)
      return o9(n10, t10);
    if (e10 = tx(t10, oX))
      return to(e10, t10, n10);
  }
  return r10 = es(n10), RegExp(t10, "g")[oX](r10);
} }), oX in o1 || rw(o1, oX, function(t10) {
  var r10, e10, n10, o5 = te(this), i2 = es(t10), u2 = oq(o5, RegExp), a2 = es(eG(o5));
  return r10 = new u2(u2 === RegExp ? o5.source : o5, a2), e10 = !!~o4(a2, "g"), n10 = !!~o4(a2, "u"), r10.lastIndex = rR(o5.lastIndex), new o3(r10, i2, e10, n10);
});
