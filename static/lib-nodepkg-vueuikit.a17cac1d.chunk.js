import { c as e, j as t, T as r, d as n, o as a, r as i, e as o, a as s, u as l, f as c, g as u, t as d, h as f, s as h, i as p, w as m, b as g, F as b } from "./lib-nodepkg-vuekit.0af21ef7.chunk.js";
import { h as v, b as y, j as x, l as w, m as k, n as M, q as C, i as P, r as _, d as S, k as O, g as D, t as T, u as R, v as $, w as A, x as I, c as L, e as F } from "./lib-nodepkg-typedef.6b41fceb.chunk.js";
function B(e14, t10) {
  var r10 = {};
  for (var n6 in e14)
    Object.prototype.hasOwnProperty.call(e14, n6) && 0 > t10.indexOf(n6) && (r10[n6] = e14[n6]);
  if (null != e14 && "function" == typeof Object.getOwnPropertySymbols)
    for (var a2 = 0, n6 = Object.getOwnPropertySymbols(e14); a2 < n6.length; a2++)
      0 > t10.indexOf(n6[a2]) && Object.prototype.propertyIsEnumerable.call(e14, n6[a2]) && (r10[n6[a2]] = e14[n6[a2]]);
  return r10;
}
var j, E, V, H, z = function() {
}, W = function() {
};
let N = (e14, t10, r10) => Math.min(Math.max(r10, e14), t10);
function q(e14, t10) {
  return e14 * Math.sqrt(1 - t10 * t10);
}
let U = ["duration", "bounce"], G = ["stiffness", "damping", "mass"];
function Y(e14, t10) {
  return t10.some((t11) => void 0 !== e14[t11]);
}
function X(e14) {
  var { from: t10 = 0, to: r10 = 1, restSpeed: n6 = 2, restDelta: a2 } = e14, i2 = B(e14, ["from", "to", "restSpeed", "restDelta"]);
  let o2 = { done: false, value: t10 }, { stiffness: s2, damping: l2, mass: c2, velocity: u2, duration: d2, isResolvedFromDuration: f2 } = function(e15) {
    let t11 = Object.assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: false }, e15);
    if (!Y(e15, G) && Y(e15, U)) {
      let r11 = function(e16) {
        let t12, r12, { duration: n7 = 800, bounce: a3 = 0.25, velocity: i3 = 0, mass: o3 = 1 } = e16;
        z(n7 <= 1e4);
        let s3 = 1 - a3;
        s3 = N(0.05, 1, s3), n7 = N(0.01, 10, n7 / 1e3), s3 < 1 ? (t12 = (e17) => {
          let t13 = e17 * s3, r13 = t13 * n7, a4 = q(e17, s3);
          return 1e-3 - (t13 - i3) / a4 * Math.exp(-r13);
        }, r12 = (e17) => {
          let r13 = e17 * s3, a4 = r13 * n7, o4 = Math.pow(s3, 2) * Math.pow(e17, 2) * n7, l4 = q(Math.pow(e17, 2), s3), c4 = -t12(e17) + 1e-3 > 0 ? -1 : 1;
          return c4 * ((a4 * i3 + i3 - o4) * Math.exp(-a4)) / l4;
        }) : (t12 = (e17) => {
          let t13 = Math.exp(-e17 * n7), r13 = (e17 - i3) * n7 + 1;
          return -1e-3 + t13 * r13;
        }, r12 = (e17) => {
          let t13 = Math.exp(-e17 * n7), r13 = (i3 - e17) * (n7 * n7);
          return t13 * r13;
        });
        let l3 = 5 / n7, c3 = function(e17, t13, r13) {
          let n8 = r13;
          for (let r14 = 1; r14 < 12; r14++)
            n8 -= e17(n8) / t13(n8);
          return n8;
        }(t12, r12, l3);
        if (n7 *= 1e3, isNaN(c3))
          return { stiffness: 100, damping: 10, duration: n7 };
        {
          let e17 = Math.pow(c3, 2) * o3;
          return { stiffness: e17, damping: 2 * s3 * Math.sqrt(o3 * e17), duration: n7 };
        }
      }(e15);
      (t11 = Object.assign(Object.assign(Object.assign({}, t11), r11), { velocity: 0, mass: 1 })).isResolvedFromDuration = true;
    }
    return t11;
  }(i2), h2 = K, p2 = K;
  function m2() {
    let e15 = u2 ? -(u2 / 1e3) : 0, n7 = r10 - t10, i3 = l2 / (2 * Math.sqrt(s2 * c2)), o3 = Math.sqrt(s2 / c2) / 1e3;
    if (void 0 === a2 && (a2 = Math.min(Math.abs(r10 - t10) / 100, 0.4)), i3 < 1) {
      let t11 = q(o3, i3);
      h2 = (a3) => {
        let s3 = Math.exp(-i3 * o3 * a3);
        return r10 - s3 * ((e15 + i3 * o3 * n7) / t11 * Math.sin(t11 * a3) + n7 * Math.cos(t11 * a3));
      }, p2 = (r11) => {
        let a3 = Math.exp(-i3 * o3 * r11);
        return i3 * o3 * a3 * (Math.sin(t11 * r11) * (e15 + i3 * o3 * n7) / t11 + n7 * Math.cos(t11 * r11)) - a3 * (Math.cos(t11 * r11) * (e15 + i3 * o3 * n7) - t11 * n7 * Math.sin(t11 * r11));
      };
    } else if (1 === i3)
      h2 = (t11) => r10 - Math.exp(-o3 * t11) * (n7 + (e15 + o3 * n7) * t11);
    else {
      let t11 = o3 * Math.sqrt(i3 * i3 - 1);
      h2 = (a3) => {
        let s3 = Math.exp(-i3 * o3 * a3), l3 = Math.min(t11 * a3, 300);
        return r10 - s3 * ((e15 + i3 * o3 * n7) * Math.sinh(l3) + t11 * n7 * Math.cosh(l3)) / t11;
      };
    }
  }
  return m2(), { next: (e15) => {
    let t11 = h2(e15);
    if (f2)
      o2.done = e15 >= d2;
    else {
      let i3 = 1e3 * p2(e15), s3 = Math.abs(r10 - t11) <= a2;
      o2.done = Math.abs(i3) <= n6 && s3;
    }
    return o2.value = o2.done ? r10 : t11, o2;
  }, flipTarget: () => {
    u2 = -u2, [t10, r10] = [r10, t10], m2();
  } };
}
X.needsInterpolation = (e14, t10) => "string" == typeof e14 || "string" == typeof t10;
let K = (e14) => 0, J = (e14, t10, r10) => {
  let n6 = t10 - e14;
  return 0 === n6 ? 1 : (r10 - e14) / n6;
}, Z = (e14, t10, r10) => -r10 * e14 + r10 * t10 + e14, Q = (e14, t10) => (r10) => Math.max(Math.min(r10, t10), e14), ee = (e14) => e14 % 1 ? Number(e14.toFixed(5)) : e14, et = /(-)?([\d]*\.?[\d])+/g, er = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, en = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function ea(e14) {
  return "string" == typeof e14;
}
let ei = { test: (e14) => "number" == typeof e14, parse: parseFloat, transform: (e14) => e14 }, eo = Object.assign(Object.assign({}, ei), { transform: Q(0, 1) });
Object.assign(Object.assign({}, ei), { default: 1 });
let es = { test: (e14) => ea(e14) && e14.endsWith("%") && 1 === e14.split(" ").length, parse: parseFloat, transform: (e14) => `${e14}%` };
Object.assign(Object.assign({}, es), { parse: (e14) => es.parse(e14) / 100, transform: (e14) => es.transform(100 * e14) });
let el = (e14, t10) => (r10) => !!(ea(r10) && en.test(r10) && r10.startsWith(e14) || t10 && Object.prototype.hasOwnProperty.call(r10, t10)), ec = (e14, t10, r10) => (n6) => {
  if (!ea(n6))
    return n6;
  let [a2, i2, o2, s2] = n6.match(et);
  return { [e14]: parseFloat(a2), [t10]: parseFloat(i2), [r10]: parseFloat(o2), alpha: void 0 !== s2 ? parseFloat(s2) : 1 };
}, eu = { test: el("hsl", "hue"), parse: ec("hue", "saturation", "lightness"), transform: (e14) => {
  let { hue: t10, saturation: r10, lightness: n6, alpha: a2 = 1 } = e14;
  return "hsla(" + Math.round(t10) + ", " + es.transform(ee(r10)) + ", " + es.transform(ee(n6)) + ", " + ee(eo.transform(a2)) + ")";
} }, ed = Q(0, 255), ef = Object.assign(Object.assign({}, ei), { transform: (e14) => Math.round(ed(e14)) }), eh = { test: el("rgb", "red"), parse: ec("red", "green", "blue"), transform: (e14) => {
  let { red: t10, green: r10, blue: n6, alpha: a2 = 1 } = e14;
  return "rgba(" + ef.transform(t10) + ", " + ef.transform(r10) + ", " + ef.transform(n6) + ", " + ee(eo.transform(a2)) + ")";
} }, ep = { test: el("#"), parse: function(e14) {
  let t10 = "", r10 = "", n6 = "", a2 = "";
  return e14.length > 5 ? (t10 = e14.substr(1, 2), r10 = e14.substr(3, 2), n6 = e14.substr(5, 2), a2 = e14.substr(7, 2)) : (t10 = e14.substr(1, 1), r10 = e14.substr(2, 1), n6 = e14.substr(3, 1), a2 = e14.substr(4, 1), t10 += t10, r10 += r10, n6 += n6, a2 += a2), { red: parseInt(t10, 16), green: parseInt(r10, 16), blue: parseInt(n6, 16), alpha: a2 ? parseInt(a2, 16) / 255 : 1 };
}, transform: eh.transform }, em = { test: (e14) => eh.test(e14) || ep.test(e14) || eu.test(e14), parse: (e14) => eh.test(e14) ? eh.parse(e14) : eu.test(e14) ? eu.parse(e14) : ep.parse(e14), transform: (e14) => ea(e14) ? e14 : e14.hasOwnProperty("red") ? eh.transform(e14) : eu.transform(e14) }, eg = "${c}", eb = "${n}";
function ev(e14) {
  "number" == typeof e14 && (e14 = `${e14}`);
  let t10 = [], r10 = 0, n6 = e14.match(er);
  n6 && (r10 = n6.length, e14 = e14.replace(er, eg), t10.push(...n6.map(em.parse)));
  let a2 = e14.match(et);
  return a2 && (e14 = e14.replace(et, eb), t10.push(...a2.map(ei.parse))), { values: t10, numColors: r10, tokenised: e14 };
}
function ey(e14) {
  return ev(e14).values;
}
function ex(e14) {
  let { values: t10, numColors: r10, tokenised: n6 } = ev(e14), a2 = t10.length;
  return (e15) => {
    let t11 = n6;
    for (let n7 = 0; n7 < a2; n7++)
      t11 = t11.replace(n7 < r10 ? eg : eb, n7 < r10 ? em.transform(e15[n7]) : ee(e15[n7]));
    return t11;
  };
}
let ew = (e14) => "number" == typeof e14 ? 0 : e14, ek = { test: function(e14) {
  var t10, r10, n6, a2;
  return isNaN(e14) && ea(e14) && (null !== (r10 = null === (t10 = e14.match(et)) || void 0 === t10 ? void 0 : t10.length) && void 0 !== r10 ? r10 : 0) + (null !== (a2 = null === (n6 = e14.match(er)) || void 0 === n6 ? void 0 : n6.length) && void 0 !== a2 ? a2 : 0) > 0;
}, parse: ey, createTransformer: ex, getAnimatableNone: function(e14) {
  let t10 = ey(e14), r10 = ex(e14);
  return r10(t10.map(ew));
} };
function eM(e14, t10, r10) {
  return (r10 < 0 && (r10 += 1), r10 > 1 && (r10 -= 1), r10 < 1 / 6) ? e14 + (t10 - e14) * 6 * r10 : r10 < 0.5 ? t10 : r10 < 2 / 3 ? e14 + (t10 - e14) * (2 / 3 - r10) * 6 : e14;
}
function eC(e14) {
  let { hue: t10, saturation: r10, lightness: n6, alpha: a2 } = e14;
  t10 /= 360, n6 /= 100;
  let i2 = 0, o2 = 0, s2 = 0;
  if (r10 /= 100) {
    let e15 = n6 < 0.5 ? n6 * (1 + r10) : n6 + r10 - n6 * r10, a3 = 2 * n6 - e15;
    i2 = eM(a3, e15, t10 + 1 / 3), o2 = eM(a3, e15, t10), s2 = eM(a3, e15, t10 - 1 / 3);
  } else
    i2 = o2 = s2 = n6;
  return { red: Math.round(255 * i2), green: Math.round(255 * o2), blue: Math.round(255 * s2), alpha: a2 };
}
let eP = (e14, t10, r10) => {
  let n6 = e14 * e14;
  return Math.sqrt(Math.max(0, r10 * (t10 * t10 - n6) + n6));
}, e_ = [ep, eh, eu], eS = (e14) => e_.find((t10) => t10.test(e14)), eO = (e14, t10) => {
  let r10 = eS(e14), n6 = eS(t10), a2 = r10.parse(e14), i2 = n6.parse(t10);
  r10 === eu && (a2 = eC(a2), r10 = eh), n6 === eu && (i2 = eC(i2), n6 = eh);
  let o2 = Object.assign({}, a2);
  return (e15) => {
    for (let t11 in o2)
      "alpha" !== t11 && (o2[t11] = eP(a2[t11], i2[t11], e15));
    return o2.alpha = Z(a2.alpha, i2.alpha, e15), r10.transform(o2);
  };
}, eD = (e14) => "number" == typeof e14, eT = (e14, t10) => (r10) => t10(e14(r10)), eR = function() {
  for (var e14 = arguments.length, t10 = Array(e14), r10 = 0; r10 < e14; r10++)
    t10[r10] = arguments[r10];
  return t10.reduce(eT);
};
function e$(e14, t10) {
  return eD(e14) ? (r10) => Z(e14, t10, r10) : em.test(e14) ? eO(e14, t10) : eF(e14, t10);
}
let eA = (e14, t10) => {
  let r10 = [...e14], n6 = r10.length, a2 = e14.map((e15, r11) => e$(e15, t10[r11]));
  return (e15) => {
    for (let t11 = 0; t11 < n6; t11++)
      r10[t11] = a2[t11](e15);
    return r10;
  };
}, eI = (e14, t10) => {
  let r10 = Object.assign(Object.assign({}, e14), t10), n6 = {};
  for (let a2 in r10)
    void 0 !== e14[a2] && void 0 !== t10[a2] && (n6[a2] = e$(e14[a2], t10[a2]));
  return (e15) => {
    for (let t11 in n6)
      r10[t11] = n6[t11](e15);
    return r10;
  };
};
function eL(e14) {
  let t10 = ek.parse(e14), r10 = t10.length, n6 = 0, a2 = 0, i2 = 0;
  for (let e15 = 0; e15 < r10; e15++)
    n6 || "number" == typeof t10[e15] ? n6++ : void 0 !== t10[e15].hue ? i2++ : a2++;
  return { parsed: t10, numNumbers: n6, numRGB: a2, numHSL: i2 };
}
let eF = (e14, t10) => {
  let r10 = ek.createTransformer(t10), n6 = eL(e14), a2 = eL(t10), i2 = n6.numHSL === a2.numHSL && n6.numRGB === a2.numRGB && n6.numNumbers >= a2.numNumbers;
  return i2 ? eR(eA(n6.parsed, a2.parsed), r10) : (r11) => `${r11 > 0 ? t10 : e14}`;
}, eB = (e14, t10) => (r10) => Z(e14, t10, r10);
function ej(e14, t10) {
  let { clamp: r10 = true, ease: n6, mixer: a2 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i2 = e14.length;
  W(i2 === t10.length), W(!n6 || !Array.isArray(n6) || n6.length === i2 - 1), e14[0] > e14[i2 - 1] && (e14 = [].concat(e14), t10 = [].concat(t10), e14.reverse(), t10.reverse());
  let o2 = function(e15, t11, r11) {
    var n7;
    let a3 = [], i3 = r11 || ("number" == typeof (n7 = e15[0]) ? eB : "string" == typeof n7 ? em.test(n7) ? eO : eF : Array.isArray(n7) ? eA : "object" == typeof n7 ? eI : void 0), o3 = e15.length - 1;
    for (let r12 = 0; r12 < o3; r12++) {
      let n8 = i3(e15[r12], e15[r12 + 1]);
      if (t11) {
        let e16 = Array.isArray(t11) ? t11[r12] : t11;
        n8 = eR(e16, n8);
      }
      a3.push(n8);
    }
    return a3;
  }(t10, n6, a2), s2 = 2 === i2 ? function(e15, t11) {
    let [r11, n7] = e15, [a3] = t11;
    return (e16) => a3(J(r11, n7, e16));
  }(e14, o2) : function(e15, t11) {
    let r11 = e15.length, n7 = r11 - 1;
    return (a3) => {
      let i3 = 0, o3 = false;
      if (a3 <= e15[0] ? o3 = true : a3 >= e15[n7] && (i3 = n7 - 1, o3 = true), !o3) {
        let t12 = 1;
        for (; t12 < r11 && !(e15[t12] > a3) && t12 !== n7; t12++)
          ;
        i3 = t12 - 1;
      }
      let s3 = J(e15[i3], e15[i3 + 1], a3);
      return t11[i3](s3);
    };
  }(e14, o2);
  return r10 ? (t11) => s2(N(e14[0], e14[i2 - 1], t11)) : s2;
}
let eE = (e14) => (t10) => t10 * t10 * ((e14 + 1) * t10 - e14), eV = (e14) => e14, eH = (E = (e14) => Math.pow(e14, 2), (e14) => e14 <= 0.5 ? E(2 * e14) / 2 : (2 - E(2 * (1 - e14))) / 2);
function ez(e14) {
  let { from: t10 = 0, to: r10 = 1, ease: n6, offset: a2, duration: i2 = 300 } = e14, o2 = { done: false, value: t10 }, s2 = Array.isArray(r10) ? r10 : [t10, r10], l2 = (a2 && a2.length === s2.length ? a2 : function(e15) {
    let t11 = e15.length;
    return e15.map((e16, r11) => 0 !== r11 ? r11 / (t11 - 1) : 0);
  }(s2)).map((e15) => e15 * i2);
  function c2() {
    return ej(l2, s2, { ease: Array.isArray(n6) ? n6 : s2.map(() => n6 || eH).splice(0, s2.length - 1) });
  }
  let u2 = c2();
  return { next: (e15) => (o2.value = u2(e15), o2.done = e15 >= i2, o2), flipTarget: () => {
    s2.reverse(), u2 = c2();
  } };
}
((e14) => {
  let t10 = eE(1.525);
  return (e15) => (e15 *= 2) < 1 ? 0.5 * t10(e15) : 0.5 * (2 - Math.pow(2, -10 * (e15 - 1)));
})(0);
let eW = { keyframes: ez, spring: X, decay: function(e14) {
  let { velocity: t10 = 0, from: r10 = 0, power: n6 = 0.8, timeConstant: a2 = 350, restDelta: i2 = 0.5, modifyTarget: o2 } = e14, s2 = { done: false, value: r10 }, l2 = n6 * t10, c2 = r10 + l2, u2 = void 0 === o2 ? c2 : o2(c2);
  return u2 !== c2 && (l2 = u2 - r10), { next: (e15) => {
    let t11 = -l2 * Math.exp(-e15 / a2);
    return s2.done = !(t11 > i2 || t11 < -i2), s2.value = s2.done ? u2 : u2 + t11, s2;
  }, flipTarget: () => {
  } };
} }, eN = 1 / 60 * 1e3, eq = "undefined" != typeof performance ? () => performance.now() : () => Date.now(), eU = "undefined" != typeof window ? (e14) => window.requestAnimationFrame(e14) : (e14) => setTimeout(() => e14(eq()), eN), eG = true, eY = false, eX = false, eK = { delta: 0, timestamp: 0 }, eJ = ["read", "update", "preRender", "render", "postRender"], eZ = eJ.reduce((e14, t10) => (e14[t10] = function(e15) {
  let t11 = [], r10 = [], n6 = 0, a2 = false, i2 = false, o2 = /* @__PURE__ */ new WeakSet(), s2 = { schedule: function(e16) {
    let i3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], s3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], l2 = s3 && a2, c2 = l2 ? t11 : r10;
    return i3 && o2.add(e16), -1 === c2.indexOf(e16) && (c2.push(e16), l2 && a2 && (n6 = t11.length)), e16;
  }, cancel: (e16) => {
    let t12 = r10.indexOf(e16);
    -1 !== t12 && r10.splice(t12, 1), o2.delete(e16);
  }, process: (l2) => {
    if (a2) {
      i2 = true;
      return;
    }
    if (a2 = true, [t11, r10] = [r10, t11], r10.length = 0, n6 = t11.length)
      for (let r11 = 0; r11 < n6; r11++) {
        let n7 = t11[r11];
        n7(l2), o2.has(n7) && (s2.schedule(n7), e15());
      }
    a2 = false, i2 && (i2 = false, s2.process(l2));
  } };
  return s2;
}(() => eY = true), e14), {}), eQ = eJ.reduce((e14, t10) => {
  let r10 = eZ[t10];
  return e14[t10] = function(e15) {
    let t11 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n6 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return eY || e4(), r10.schedule(e15, t11, n6);
  }, e14;
}, {}), e0 = eJ.reduce((e14, t10) => (e14[t10] = eZ[t10].cancel, e14), {});
eJ.reduce((e14, t10) => (e14[t10] = () => eZ[t10].process(eK), e14), {});
let e1 = (e14) => eZ[e14].process(eK), e2 = (e14) => {
  eY = false, eK.delta = eG ? eN : Math.max(Math.min(e14 - eK.timestamp, 40), 1), eK.timestamp = e14, eX = true, eJ.forEach(e1), eX = false, eY && (eG = false, eU(e2));
}, e4 = () => {
  eY = true, eG = true, eX || eU(e2);
};
function e5(e14, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
  return e14 - t10 - r10;
}
let e3 = (e14) => {
  let t10 = (t11) => {
    let { delta: r10 } = t11;
    return e14(r10);
  };
  return { start: () => eQ.update(t10, true), stop: () => e0.update(t10) };
};
function e8(e14) {
  let t10, r10, n6;
  var a2, { from: i2, autoplay: o2 = true, driver: s2 = e3, elapsed: l2 = 0, repeat: c2 = 0, repeatType: u2 = "loop", repeatDelay: d2 = 0, onPlay: f2, onStop: h2, onComplete: p2, onRepeat: m2, onUpdate: g2 } = e14, b2 = B(e14, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
  let { to: v2 } = b2, y2 = 0, x2 = b2.duration, w2 = false, k2 = true, M2 = function(e15) {
    if (Array.isArray(e15.to))
      return ez;
    if (eW[e15.type])
      return eW[e15.type];
    let t11 = new Set(Object.keys(e15));
    if (t11.has("ease") || t11.has("duration") && !t11.has("dampingRatio"))
      ;
    else if (t11.has("dampingRatio") || t11.has("stiffness") || t11.has("mass") || t11.has("damping") || t11.has("restSpeed") || t11.has("restDelta"))
      return X;
    return ez;
  }(b2);
  (null === (a2 = M2.needsInterpolation) || void 0 === a2 ? void 0 : a2.call(M2, i2, v2)) && (n6 = ej([0, 100], [i2, v2], { clamp: false }), i2 = 0, v2 = 100);
  let C2 = M2(Object.assign(Object.assign({}, b2), { from: i2, to: v2 }));
  return o2 && (null == f2 || f2(), (t10 = s2(function(e15) {
    if (k2 || (e15 = -e15), l2 += e15, !w2) {
      let e16 = C2.next(Math.max(0, l2));
      r10 = e16.value, n6 && (r10 = n6(r10)), w2 = k2 ? e16.done : l2 <= 0;
    }
    if (null == g2 || g2(r10), w2) {
      if (0 === y2 && (null != x2 || (x2 = l2)), y2 < c2) {
        var a3, i3;
        a3 = l2, i3 = x2, (k2 ? a3 >= i3 + d2 : a3 <= -d2) && (y2++, "reverse" === u2 ? l2 = function(e16, t11) {
          let r11 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n7 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
          return n7 ? e5(t11 + -e16, t11, r11) : t11 - (e16 - t11) + r11;
        }(l2, x2, d2, k2 = y2 % 2 == 0) : (l2 = e5(l2, x2, d2), "mirror" === u2 && C2.flipTarget()), w2 = false, m2 && m2());
      } else
        t10.stop(), p2 && p2();
    }
  })).start()), { stop: () => {
    null == h2 || h2(), t10.stop();
  } };
}
let e6 = (e14, t10) => 1 - 3 * t10 + 3 * e14, e9 = (e14, t10) => 3 * t10 - 6 * e14, e7 = (e14) => 3 * e14, te = (e14, t10, r10) => ((e6(t10, r10) * e14 + e9(t10, r10)) * e14 + e7(t10)) * e14, tt = (e14, t10, r10) => 3 * e6(t10, r10) * e14 * e14 + 2 * e9(t10, r10) * e14 + e7(t10);
function tr() {
  return new Proxy({}, { get: (e14, t10) => t10 });
}
let tn = tr(), ta = { paddingX: [tn.paddingLeft, tn.paddingRight], paddingY: [tn.paddingTop, tn.paddingBottom], marginX: [tn.marginInlineStart, tn.marginInlineEnd], marginY: [tn.marginTop, tn.marginBottom], borderX: [tn.borderLeft, tn.borderRight], borderY: [tn.borderTop, tn.borderBottom], color: [tn.color, tn.fill], borderTopRadius: [tn.borderTopLeftRadius, tn.borderTopRightRadius], borderBottomRadius: [tn.borderBottomLeftRadius, tn.borderBottomRightRadius], borderRightRadius: [tn.borderTopRightRadius, tn.borderBottomRightRadius], borderLeftRadius: [tn.borderTopLeftRadius, tn.borderBottomLeftRadius], backgroundGradient: [tn.backgroundImage], boxSize: [tn.width, tn.height] }, ti = tr(), to = { font: ti.fontFamily, shadow: ti.boxShadow, rounded: ti.borderRadius, roundedTop: ti.borderTopRadius, roundedBottom: ti.borderBottomRadius, roundedLeft: ti.borderLeftRadius, roundedRight: ti.borderRightRadius, bg: ti.background, bgImage: ti.backgroundImage, bgSize: ti.backgroundSize, bgPosition: ti.backgroundPosition, bgRepeat: ti.backgroundRepeat, bgAttachment: ti.backgroundAttachment, bgColor: ti.backgroundColor, bgGradient: ti.backgroundGradient, bgClip: ti.backgroundClip, pos: ti.position, p: ti.padding, pt: ti.paddingTop, pr: ti.paddingRight, pl: ti.paddingLeft, pb: ti.paddingBottom, ps: ti.paddingInlineStart, pe: ti.paddingInlineEnd, px: ti.paddingX, py: ti.paddingY, m: ti.margin, mt: ti.marginTop, mr: ti.marginRight, ml: ti.marginLeft, mb: ti.marginBottom, ms: ti.marginInlineStart, me: ti.marginInlineEnd, mx: ti.marginX, my: ti.marginY, w: ti.width, minW: ti.minWidth, maxW: ti.maxWidth, h: ti.height, minH: ti.minHeight, maxH: ti.maxHeight }, ts = tr(), tl = function() {
  for (var e14 = arguments.length, t10 = Array(e14), r10 = 0; r10 < e14; r10++)
    t10[r10] = arguments[r10];
  let n6 = [...t10];
  for (let e15 of t10)
    to[e15] && n6.push(to[e15]);
  return n6;
}, tc = { _rtl: "[dir=rtl] &, &[dir=rtl]", _ltr: "[dir=ltr] &, &[dir=ltr]", _dark: "&[data-theme=dark]", _light: "&[data-theme=light]" };
var tu = ((j = tu || {}).var = "var", j.mixin = "mixin", j);
class td {
  static create(e14, t10) {
    let { value: r10, on: n6, transform: a2 } = t10;
    return { type: e14, value: r10, on: n6, transform: a2, __Tokens: void 0, __ValueType: void 0, __CSSTokens: void 0 };
  }
  static color(e14) {
    return td.create("var", { value: e14, on: tl(ts.color, ts.bgColor, ts.outlineColor, ts.borderColor, ts.accentColor, ts.fill, ts.stroke), transform: (e15, t10) => v(e15) ? { default: `var(${t10(e15)})`, rgb: `var(${t10(`${e15}/rgb`)})` } : { default: `rgb(${e15[0]}, ${e15[1]}, ${e15[2]})`, rgb: `${e15[0]} ${e15[1]} ${e15[2]}` }, fallback: "" });
  }
  static space(e14) {
    return td.create("var", { value: e14, on: tl(ts.gap, ts.rowGap, ts.columnGap, ts.top, ts.right, ts.bottom, ts.left, ts.m, ts.ms, ts.me, ts.mt, ts.mr, ts.mb, ts.ml, ts.mx, ts.my, ts.p, ts.ps, ts.pe, ts.pt, ts.pr, ts.pb, ts.pl, ts.px, ts.py) });
  }
  static boxSize(e14) {
    return td.create("var", { value: e14, on: tl(ts.w, ts.minW, ts.maxW, ts.h, ts.minH, ts.maxH, ts.boxSize), fallback: 0 });
  }
  static fontSize(e14) {
    return td.create("var", { value: e14, on: tl(ts.fontSize), fallback: 0 });
  }
  static lineHeight(e14) {
    return td.create("var", { value: e14, on: tl(ts.lineHeight), fallback: 0 });
  }
  static rounded(e14) {
    return td.create("var", { value: e14, fallback: 0, on: tl(ts.rounded, ts.roundedTop, ts.roundedBottom, ts.roundedLeft, ts.roundedRight, tn.borderTopLeftRadius, tn.borderTopRightRadius, tn.borderBottomLeftRadius, tn.borderBottomRightRadius, tn.borderTopRightRadius, tn.borderBottomRightRadius, tn.borderTopLeftRadius, tn.borderBottomLeftRadius) });
  }
  static transitionTimingFunction(e14) {
    return td.create("var", { value: e14, on: tl(ts.transitionTimingFunction) });
  }
  static transitionDuration(e14) {
    return td.create("var", { value: e14, on: tl(ts.transitionDuration), transform: (e15) => `${e15}ms` });
  }
  static font(e14) {
    return td.create("var", { value: e14, on: tl(ts.font) });
  }
  static fontWeight(e14) {
    return td.create("var", { value: e14, on: tl(ts.fontWeight) });
  }
  static letterSpacing(e14) {
    return td.create("var", { value: e14, on: tl(ts.letterSpacing) });
  }
  static shadow(e14) {
    return td.create("var", { value: e14, on: tl(ts.shadow) });
  }
  static customMixin(e14, t10) {
    return td.create("mixin", { value: t10, on: [e14] });
  }
  static mixin(e14) {
    return { ...e14, __mixin: true };
  }
}
let tf = class e10 {
  get tokens() {
    return k(this._values);
  }
  get(t10, r10, n6) {
    let a2 = this._values[t10];
    if (M(a2)) {
      var i2;
      return n6 ? a2[r10] : null !== (i2 = a2[r10]) && void 0 !== i2 ? i2 : a2[e10.defaultMode];
    }
    return n6 ? r10 === e10.defaultMode ? a2 : void 0 : a2;
  }
  use(e14) {
    let t10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (this._cssVarRefs[e14])
      return t10 ? `${this._cssVarRefs[e14]}` : `var(${this._cssVarRefs[e14]})`;
  }
  constructor(t10, { cssVar: r10, transformFallback: n6 }) {
    this.__Tokens = void 0, this._values = {}, this._cssVarRefs = {}, e10.walkValues(t10.value, (e14, a2) => {
      let i2 = a2.join("."), o2 = (e15, a3) => {
        let i3 = t10.transform ? t10.transform(e15, r10) : n6(e15);
        if (M(i3))
          for (let e16 in i3)
            a3(i3[e16], "default" === e16 ? "" : e16);
        else
          a3(i3, "");
      };
      if (w(this._cssVarRefs, [i2], r10(i2)), y(e14))
        for (let t11 in e14)
          o2(e14[t11], (e15, r11) => {
            w(this._values, [`${i2}${r11 ? `/${r11}` : ""}`, t11], e15);
          });
      else
        o2(e14, (e15, t11) => {
          w(this._values, [`${i2}${t11 ? `/${t11}` : ""}`], e15);
        });
    });
  }
};
tf.defaultMode = "_default", tf.walkValues = function(e14, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let n6 in e14) {
    let a2 = e14[n6];
    if (y(a2)) {
      if (x(a2, "_default")) {
        t10(a2, [...r10, n6]);
        continue;
      }
      tf.walkValues(a2, t10, [...r10, n6]);
      continue;
    }
    t10(a2, [...r10, n6]);
  }
};
let th = class e11 {
  get tokens() {
    return k(this._values);
  }
  get(e14) {
    return this._values[e14];
  }
  constructor(t10) {
    this._values = {}, e11.walkValue(t10.value, (e14, t11) => {
      let r10 = t11.join(".");
      w(this._values, [r10], C(e14, "__mixin"));
    });
  }
};
th.walkValue = function(e14, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let n6 in e14) {
    let a2 = e14[n6];
    if (y(a2)) {
      if (x(a2, "__mixin")) {
        t10(a2, [...r10, n6]);
        continue;
      }
      th.walkValue(a2, t10, [...r10, n6]);
      continue;
    }
    t10(a2, [...r10, n6]);
  }
};
let tp = (e14) => (t10) => `rgba(var(${t10}--rgb) / ${e14})`, tm = (e14) => P(e14) && x(e14, "token");
function tg(e14, t10) {
  return Object.assign((e15) => t10(e15), { toString: () => e14, token: e14 });
}
var tb = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, tv = /[A-Z]|^ms/g, ty = /_EMO_([^_]+?)_([^]*?)_EMO_/g, tx = function(e14) {
  return 45 === e14.charCodeAt(1);
}, tw = function(e14) {
  return null != e14 && "boolean" != typeof e14;
}, tk = function(e14) {
  var t10 = /* @__PURE__ */ Object.create(null);
  return function(r10) {
    return void 0 === t10[r10] && (t10[r10] = e14(r10)), t10[r10];
  };
}(function(e14) {
  return tx(e14) ? e14 : e14.replace(tv, "-$&").toLowerCase();
}), tM = function(e14, t10) {
  switch (e14) {
    case "animation":
    case "animationName":
      if ("string" == typeof t10)
        return t10.replace(ty, function(e15, t11, r10) {
          return V = { name: t11, styles: r10, next: V }, t11;
        });
  }
  return 1 === tb[e14] || tx(e14) || "number" != typeof t10 || 0 === t10 ? t10 : t10 + "px";
};
function tC(e14, t10, r10) {
  if (null == r10)
    return "";
  if (void 0 !== r10.__emotion_styles)
    return r10;
  switch (typeof r10) {
    case "boolean":
      return "";
    case "object":
      if (1 === r10.anim)
        return V = { name: r10.name, styles: r10.styles, next: V }, r10.name;
      if (void 0 !== r10.styles) {
        var n6 = r10.next;
        if (void 0 !== n6)
          for (; void 0 !== n6; )
            V = { name: n6.name, styles: n6.styles, next: V }, n6 = n6.next;
        return r10.styles + ";";
      }
      return function(e15, t11, r11) {
        var n7 = "";
        if (Array.isArray(r11))
          for (var a3 = 0; a3 < r11.length; a3++)
            n7 += tC(e15, t11, r11[a3]) + ";";
        else
          for (var i3 in r11) {
            var o3 = r11[i3];
            if ("object" != typeof o3)
              null != t11 && void 0 !== t11[o3] ? n7 += i3 + "{" + t11[o3] + "}" : tw(o3) && (n7 += tk(i3) + ":" + tM(i3, o3) + ";");
            else if (Array.isArray(o3) && "string" == typeof o3[0] && (null == t11 || void 0 === t11[o3[0]]))
              for (var s2 = 0; s2 < o3.length; s2++)
                tw(o3[s2]) && (n7 += tk(i3) + ":" + tM(i3, o3[s2]) + ";");
            else {
              var l2 = tC(e15, t11, o3);
              switch (i3) {
                case "animation":
                case "animationName":
                  n7 += tk(i3) + ":" + l2 + ";";
                  break;
                default:
                  n7 += i3 + "{" + l2 + "}";
              }
            }
          }
        return n7;
      }(e14, t10, r10);
    case "function":
      if (void 0 !== e14) {
        var a2 = V, i2 = r10(e14);
        return V = a2, tC(e14, t10, i2);
      }
  }
  if (null == t10)
    return r10;
  var o2 = t10[r10];
  return void 0 !== o2 ? o2 : r10;
}
var tP = /label:\s*([^\s;\n{]+)\s*(;|$)/g, t_ = function(e14, t10, r10) {
  if (1 === e14.length && "object" == typeof e14[0] && null !== e14[0] && void 0 !== e14[0].styles)
    return e14[0];
  var n6, a2 = true, i2 = "";
  V = void 0;
  var o2 = e14[0];
  null == o2 || void 0 === o2.raw ? (a2 = false, i2 += tC(r10, t10, o2)) : i2 += o2[0];
  for (var s2 = 1; s2 < e14.length; s2++)
    i2 += tC(r10, t10, e14[s2]), a2 && (i2 += o2[s2]);
  tP.lastIndex = 0;
  for (var l2 = ""; null !== (n6 = tP.exec(i2)); )
    l2 += "-" + n6[1];
  return { name: function(e15) {
    for (var t11, r11 = 0, n7 = 0, a3 = e15.length; a3 >= 4; ++n7, a3 -= 4)
      t11 = (65535 & (t11 = 255 & e15.charCodeAt(n7) | (255 & e15.charCodeAt(++n7)) << 8 | (255 & e15.charCodeAt(++n7)) << 16 | (255 & e15.charCodeAt(++n7)) << 24)) * 1540483477 + ((t11 >>> 16) * 59797 << 16), t11 ^= t11 >>> 24, r11 = (65535 & t11) * 1540483477 + ((t11 >>> 16) * 59797 << 16) ^ (65535 & r11) * 1540483477 + ((r11 >>> 16) * 59797 << 16);
    switch (a3) {
      case 3:
        r11 ^= (255 & e15.charCodeAt(n7 + 2)) << 16;
      case 2:
        r11 ^= (255 & e15.charCodeAt(n7 + 1)) << 8;
      case 1:
        r11 ^= 255 & e15.charCodeAt(n7), r11 = (65535 & r11) * 1540483477 + ((r11 >>> 16) * 59797 << 16);
    }
    return r11 ^= r11 >>> 13, (((r11 = (65535 & r11) * 1540483477 + ((r11 >>> 16) * 59797 << 16)) ^ r11 >>> 15) >>> 0).toString(36);
  }(i2) + l2, styles: i2, next: V };
};
let tS = class e12 {
  processAll(t10) {
    let r10 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], n6 = [], { state: a2, extends: i2, ...o2 } = t10;
    if (i2)
      for (let e14 of i2)
        n6.push(...this.processAll(e14, r10));
    if (a2) {
      let t11 = {}, r11 = {};
      e12.walkStateValues(a2, (e14, n7, a3) => {
        let i3 = `--${this.opt.varPrefix}-state-${n7.join("-")}`, o3 = _(n7), s2 = {};
        this.process(s2, o3, e14, false), t11[i3] = s2[o3], w(r11, [...a3, o3], `var(${i3})`);
      }), n6.push(t11), n6.push(...this.processAll(r11));
    }
    if (!S(o2)) {
      let e14 = {};
      this.processTo(e14, o2, r10), n6.push(e14);
    }
    return n6;
  }
  processTo(e14, t10) {
    let r10 = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    for (let n6 in t10)
      this.process(e14, n6, t10[n6], r10);
  }
  process(t10, r10, n6) {
    var a2, i2, o2, s2;
    let l2 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (this.opt.mixins[r10]) {
      let e14 = null === (a2 = this.opt.mixins[r10]) || void 0 === a2 ? void 0 : a2.get(n6);
      if (e14)
        for (let r11 in e14)
          this.process(t10, r11, e14[r11], l2);
      return;
    }
    if (y(n6)) {
      t10[r10 = null !== (i2 = e12.convertSelector(r10)) && void 0 !== i2 ? i2 : r10] = null !== (o2 = t10[r10]) && void 0 !== o2 ? o2 : {}, this.processTo(t10[r10], n6);
      return;
    }
    if (l2 && ta[r10 = null !== (s2 = to[r10]) && void 0 !== s2 ? s2 : r10]) {
      for (let e14 of ta[r10])
        t10[e14] = this.opt.processValue(e14, n6);
      return;
    }
    t10[r10] = this.opt.processValue(r10, n6);
  }
  constructor(e14) {
    this.opt = e14;
  }
};
tS.supportedPseudoClasses = { active: "active", after: "after", anyLink: "any-link", before: "before", blank: "blank", checked: "checked", current: "current", default: "default", defined: "defined", disabled: "disabled", empty: "empty", enabled: "enabled", first: "first", firstChild: "first-child", firstLetter: "first-letter", firstLine: "first-line", firstOfType: "first-of-type", focus: "focus", focusVisible: "focus-visible", focusWithin: "focus-within", fullscreen: "fullscreen", future: "future", hover: "hover", inRange: "in-range", indeterminate: "indeterminate", invalid: "invalid", lastChild: "last-child", lastOfType: "last-of-type", left: "left", link: "link", localLink: "local-link", nthCol: "nth-col", nthLastCol: "nth-last-col", onlyChild: "only-child", onlyOfType: "only-of-type", optional: "optional", outOfRange: "out-of-range", past: "past", paused: "paused", pictureInPicture: "picture-in-picture", placeholderShown: "placeholder-shown", playing: "playing", readOnly: "read-only", readWrite: "read-write", required: "required", right: "right", root: "root", scope: "scope", target: "target", targetWithin: "target-within", userInvalid: "user-invalid", userValid: "user-valid", valid: "valid", visited: "visited" }, tS.convertSelector = (e14) => {
  if (tc[e14])
    return tc[e14];
  if (e14.startsWith("$") || e14.endsWith("$") || e14.startsWith("_")) {
    let t10 = "", r10 = "";
    if (e14.startsWith("_") ? (t10 = "&", e14 = e14.slice(1)) : e14.startsWith("$") ? (t10 = "& ", e14 = e14.slice(1)) : (r10 = " &", e14 = e14.slice(0, e14.length - 1)), e14.startsWith("data") || e14.startsWith("aria")) {
      let [n6, a2] = e14.split("__");
      return a2 ? `${t10}[${O(n6)}='${O(a2)}']${r10}` : `${t10}[${O(n6)}]${r10}`;
    }
    if ("&" == t10) {
      if (e14.startsWith("$"))
        return `${t10}::${e14.slice(1)}`;
      if (tS.supportedPseudoClasses[e14]) {
        let r12 = tS.supportedPseudoClasses[e14];
        return `${t10}:${r12}, ${t10}[data-${r12}]:not([data-${r12}='false']), ${t10}.${r12}`;
      }
      let [r11, n6] = e14.split("__"), a2 = O(r11);
      return n6 ? `${t10}[data-${a2}='${O(n6)}']` : `${t10}[data-${a2}]:not([data-${a2}='false'])`;
    }
  }
}, tS.walkStateValues = function(e14, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { default: {}, selectorPath: [], path: [] }, { $: n6, ...a2 } = e14;
  for (let e15 in a2) {
    var i2;
    let o2 = a2[e15], s2 = null !== (i2 = a2.default) && void 0 !== i2 ? i2 : r10.default, l2 = null != n6 ? n6 : D(s2, [...r10.path.slice(1), "$"]), c2 = l2 ? [...r10.selectorPath, l2] : r10.selectorPath, u2 = [...r10.path, e15];
    if (y(o2)) {
      tS.walkStateValues(o2, t10, { path: u2, selectorPath: c2, default: s2 });
      continue;
    }
    t10(o2, u2, c2);
  }
};
let tO = (e14) => e14.reduce((e15, t10) => ({ ...e15, [t10]: true }), {}), tD = class e13 {
  static create(t10, r10) {
    return new e13(t10, r10);
  }
  cssVar(e14, t10) {
    return `--${this.varPrefix}-${O(e14)}__${t10.replaceAll("/", "--").replaceAll(".", "__")}`;
  }
  get rootCSSVars() {
    return this.cssVars;
  }
  unstable_css(e14, t10) {
    var r10;
    let n6 = null != t10 ? t10 : {};
    return n6.__emotion_styles = null !== (r10 = n6.__emotion_styles) && void 0 !== r10 ? r10 : t_(this.unstable_sx(t10), null == e14 ? void 0 : e14.registered, {}), n6.__emotion_styles;
  }
  toFigmaTokens() {
    let e14 = { space: { dp: { type: "sizing", value: 1 } } }, t10 = {}, r10 = {}, n6 = (e15, t11, r11) => {
      let n7 = e15;
      for (let e16 = 0; e16 < t11.length; e16++) {
        var a3;
        if (e16 == t11.length - 1) {
          n7[t11[e16]] = r11;
          continue;
        }
        n7[t11[e16]] = null !== (a3 = n7[t11[e16]]) && void 0 !== a3 ? a3 : {}, n7 = n7[t11[e16]];
      }
    }, a2 = (e15, t11) => M(t11) ? { type: e15, value: $(t11, (t12) => a2(e15, t12).value) } : (v(t11) && (t11 = t11.replace(/var\(([^)]+)\)/g, (e16) => {
      let t12 = e16.slice(4, e16.length - 1), r11 = t12.slice(`--${this.varPrefix}-`.length).split("--");
      return `{${r11[0].split("__").map((e17, t13) => 0 == t13 ? A(e17) : e17).join(".")}}`;
    }).replace(/calc\(.+\)$/g, (e16) => e16.slice(5, e16.length - 1))), { type: e15, value: t11 });
    for (let i2 in this.tokens) {
      let o2 = this.tokens[i2], s2 = (s3) => o2.tokens.forEach((l2) => {
        if (!l2.includes("/")) {
          if (l2.startsWith("sys.")) {
            let e15 = o2.get(l2, "_default"), c2 = o2.get(l2, "_dark");
            n6(t10, [i2, ...l2.split(".")], a2(s3, e15)), e15 != c2 && n6(r10, [i2, ...l2.split(".")], a2(s3, c2));
          } else
            n6(e14, [i2, ...l2.split(".")], a2(s3, o2.get(l2, "_default")));
        }
      });
      switch (i2) {
        case "color":
          s2("color");
          break;
        case "rounded":
          s2("borderRadius");
          break;
        case "shadow":
          s2("boxShadow");
          break;
        case "font":
          s2("fontFamily");
          break;
        case "fontWeight":
          s2("fontWeight");
      }
    }
    for (let e15 in this.mixins) {
      let r11 = this.mixins[e15], i2 = (i3) => r11.tokens.forEach((o2) => {
        let s2 = this.unstable_sx(r11.get(o2))[0];
        n6(t10, [e15, ...o2.split(".")], a2(i3, s2));
      });
      "textStyle" === e15 && i2("typography");
    }
    return { seed: e14, base: t10, dark: r10 };
  }
  constructor(t10, r10 = {}) {
    var n6, a2;
    for (let i2 in this.theme = t10, this.cssVars = {}, this.tokens = {}, this.propValues = {}, this.mixins = {}, this.dp = (e14) => 0 === e14 ? 0 : `calc(${e14} * var(${this.cssVar("space", "dp")}))`, this.transformFallback = (t11, r11) => e13.propsCanBaseDp[t11] && T(r11) ? e13.propsCanPercent[t11] && 1 > Math.abs(r11) ? `${100 * r11}%` : this.dp(r11) : r11, this.token = new Proxy({}, { get: (e14, t11) => {
      var r11, n7;
      return this.tokens[t11] ? Object.assign((e15) => {
        var r12;
        return null === (r12 = this.tokens[t11]) || void 0 === r12 ? void 0 : r12.get(e15, `_${this.mode}`);
      }, { tokens: null === (r11 = this.tokens[t11]) || void 0 === r11 ? void 0 : r11.tokens }) : this.mixins[t11] ? Object.assign((e15) => {
        var r12;
        return null === (r12 = this.mixins[t11]) || void 0 === r12 ? void 0 : r12.get(e15);
      }, { tokens: null === (n7 = this.mixins[t11]) || void 0 === n7 ? void 0 : n7.tokens }) : void 0;
    } }), this.processValue = (e14, t11) => {
      var r11, n7, a3;
      if (tm(t11)) {
        let r12 = null === (n7 = this.propValues[e14]) || void 0 === n7 ? void 0 : n7.use(t11.token, true);
        return r12 ? t11(r12) : void 0;
      }
      return null !== (a3 = null === (r11 = this.propValues[e14]) || void 0 === r11 ? void 0 : r11.use(t11)) && void 0 !== a3 ? a3 : this.transformFallback(e14, t11);
    }, this.unstable_sx = (e14) => new tS({ mixins: this.mixins, varPrefix: this.varPrefix, processValue: this.processValue }).processAll(e14), this.varPrefix = null !== (n6 = r10.varPrefix) && void 0 !== n6 ? n6 : "vk", this.mode = null !== (a2 = r10.mode) && void 0 !== a2 ? a2 : "light", w(this.cssVars, [this.cssVar("space", "dp")], "0.1rem"), t10) {
      let e14 = t10[i2];
      if (e14.type == tu.var) {
        let t11 = new tf(e14, { cssVar: (e15) => this.cssVar(i2, e15), transformFallback: (t12) => this.transformFallback(e14.on[0], t12) });
        for (let r11 of (this.tokens[i2] = t11, e14.on))
          this.propValues[r11] = t11;
        for (let e15 of t11.tokens)
          for (let r11 of ["light", "dark"]) {
            let n7 = r11 === this.mode ? "_default" : `_${r11}`, a3 = t11.get(e15, n7, true);
            R(a3) || ("_default" === n7 ? w(this.cssVars, [this.cssVar(i2, e15)], a3) : w(this.cssVars, [n7, this.cssVar(i2, e15)], a3));
          }
        continue;
      }
      if (e14.type == tu.mixin) {
        let t11 = new th(e14);
        for (let r11 of e14.on)
          this.mixins[r11] = t11;
      }
    }
  }
};
tD.propsCanPercent = tO([...td.boxSize({}).on]), tD.propsCanBaseDp = tO([...td.boxSize({}).on, ...td.space({}).on, ...td.fontSize({}).on, ...td.letterSpacing({}).on, ...td.lineHeight({}).on, ...td.rounded({}).on]);
let tT = tD, tR = { shadow: td.shadow({ 0: { _default: "0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0)", _dark: "0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0)" }, 1: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)", _dark: "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 2: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)", _dark: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 3: { _default: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)" }, 4: { _default: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)" }, 5: { _default: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)", _dark: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)" } }), elevation: td.customMixin("elevation", { 0: td.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "0", _hover: { shadow: "1" } }), 1: td.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "1", _hover: { shadow: "2" } }), 2: td.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "2", _hover: { shadow: "3" } }), 3: td.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "3", _hover: { shadow: "4" } }), 4: td.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "4", _hover: { shadow: "5" } }) }) }, t$ = { font: td.font({ brand: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', plain: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', code: "'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace" }), fontWeight: td.fontWeight({ regular: 400, medium: 500, bold: 700 }), textStyle: td.customMixin("textStyle", { sys: { "display-large": td.mixin({ lineHeight: 64, fontSize: 57, letterSpacing: -0.25, fontWeight: "regular", font: "brand" }), "display-medium": td.mixin({ lineHeight: 52, fontSize: 45, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "display-small": td.mixin({ lineHeight: 44, fontSize: 36, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-large": td.mixin({ lineHeight: 40, fontSize: 32, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-medium": td.mixin({ lineHeight: 36, fontSize: 28, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-small": td.mixin({ lineHeight: 32, fontSize: 24, letterSpacing: 0, fontWeight: "regular", font: "plain" }), "title-large": td.mixin({ lineHeight: 28, fontSize: 22, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "title-medium": td.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.15, fontWeight: "medium", font: "plain" }), "title-small": td.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-large": td.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-medium": td.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "label-small": td.mixin({ lineHeight: 16, fontSize: 11, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "body-large": td.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.5, fontWeight: "regular", font: "plain" }), "body-medium": td.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.25, fontWeight: "regular", font: "plain" }), "body-small": td.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.4, fontWeight: "regular", font: "plain" }) } }) };
function tA(e14) {
  return e14 < 0 ? -1 : 0 === e14 ? 0 : 1;
}
function tI(e14, t10, r10) {
  return r10 < e14 ? e14 : r10 > t10 ? t10 : r10;
}
function tL(e14, t10) {
  let r10 = e14[0] * t10[0][0] + e14[1] * t10[0][1] + e14[2] * t10[0][2], n6 = e14[0] * t10[1][0] + e14[1] * t10[1][1] + e14[2] * t10[1][2], a2 = e14[0] * t10[2][0] + e14[1] * t10[2][1] + e14[2] * t10[2][2];
  return [r10, n6, a2];
}
let tF = [[0.41233895, 0.35762064, 0.18051042], [0.2126, 0.7152, 0.0722], [0.01932141, 0.11916382, 0.95034478]], tB = [[3.2413774792388685, -1.5376652402851851, -0.49885366846268053], [-0.9691452513005321, 1.8758853451067872, 0.04156585616912061], [0.05562093689691305, -0.20395524564742123, 1.0571799111220335]], tj = [95.047, 100, 108.883];
function tE(e14, t10, r10) {
  return (-16777216 | (255 & e14) << 16 | (255 & t10) << 8 | 255 & r10) >>> 0;
}
function tV(e14) {
  let t10 = tq(e14[0]), r10 = tq(e14[1]), n6 = tq(e14[2]);
  return tE(t10, r10, n6);
}
function tH(e14) {
  let t10 = function(e15) {
    let t11 = tN(e15 >> 16 & 255), r10 = tN(e15 >> 8 & 255), n6 = tN(255 & e15);
    return tL([t11, r10, n6], tF);
  }(e14)[1];
  return 116 * tU(t10 / 100) - 16;
}
function tz(e14) {
  return 100 * function(e15) {
    let t10 = e15 * e15 * e15;
    return t10 > 216 / 24389 ? t10 : (116 * e15 - 16) / (24389 / 27);
  }((e14 + 16) / 116);
}
function tW(e14) {
  return 116 * tU(e14 / 100) - 16;
}
function tN(e14) {
  let t10 = e14 / 255;
  return t10 <= 0.040449936 ? t10 / 12.92 * 100 : 100 * Math.pow((t10 + 0.055) / 1.055, 2.4);
}
function tq(e14) {
  var t10;
  let r10 = e14 / 100;
  return (t10 = Math.round(255 * (r10 <= 31308e-7 ? 12.92 * r10 : 1.055 * Math.pow(r10, 1 / 2.4) - 0.055))) < 0 ? 0 : t10 > 255 ? 255 : t10;
}
function tU(e14) {
  return e14 > 216 / 24389 ? Math.pow(e14, 1 / 3) : (24389 / 27 * e14 + 16) / 116;
}
class tG {
  static make() {
    var e14, t10;
    let r10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tj, n6 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200 / Math.PI * tz(50) / 100, a2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50, i2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2, o2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], s2 = 0.401288 * r10[0] + 0.650173 * r10[1] + -0.051461 * r10[2], l2 = -0.250268 * r10[0] + 1.204414 * r10[1] + 0.045854 * r10[2], c2 = -2079e-6 * r10[0] + 0.048952 * r10[1] + 0.953127 * r10[2], u2 = 0.8 + i2 / 10, d2 = u2 >= 0.9 ? (1 - (e14 = (u2 - 0.9) * 10)) * 0.59 + 0.69 * e14 : (1 - (t10 = (u2 - 0.8) * 10)) * 0.525 + 0.59 * t10, f2 = o2 ? 1 : u2 * (1 - 1 / 3.6 * Math.exp((-n6 - 42) / 92));
    f2 = f2 > 1 ? 1 : f2 < 0 ? 0 : f2;
    let h2 = [f2 * (100 / s2) + 1 - f2, f2 * (100 / l2) + 1 - f2, f2 * (100 / c2) + 1 - f2], p2 = 1 / (5 * n6 + 1), m2 = p2 * p2 * p2 * p2, g2 = 1 - m2, b2 = m2 * n6 + 0.1 * g2 * g2 * Math.cbrt(5 * n6), v2 = tz(a2) / r10[1], y2 = 1.48 + Math.sqrt(v2), x2 = 0.725 / Math.pow(v2, 0.2), w2 = [Math.pow(b2 * h2[0] * s2 / 100, 0.42), Math.pow(b2 * h2[1] * l2 / 100, 0.42), Math.pow(b2 * h2[2] * c2 / 100, 0.42)], k2 = [400 * w2[0] / (w2[0] + 27.13), 400 * w2[1] / (w2[1] + 27.13), 400 * w2[2] / (w2[2] + 27.13)], M2 = (2 * k2[0] + k2[1] + 0.05 * k2[2]) * x2;
    return new tG(v2, M2, x2, x2, d2, u2, h2, b2, Math.pow(b2, 0.25), y2);
  }
  constructor(e14, t10, r10, n6, a2, i2, o2, s2, l2, c2) {
    this.n = e14, this.aw = t10, this.nbb = r10, this.ncb = n6, this.c = a2, this.nc = i2, this.rgbD = o2, this.fl = s2, this.fLRoot = l2, this.z = c2;
  }
}
tG.DEFAULT = tG.make();
class tY {
  distance(e14) {
    let t10 = this.jstar - e14.jstar, r10 = this.astar - e14.astar, n6 = this.bstar - e14.bstar;
    return 1.41 * Math.pow(Math.sqrt(t10 * t10 + r10 * r10 + n6 * n6), 0.63);
  }
  static fromInt(e14) {
    return tY.fromIntInViewingConditions(e14, tG.DEFAULT);
  }
  static fromIntInViewingConditions(e14, t10) {
    let r10 = tN((16711680 & e14) >> 16), n6 = tN((65280 & e14) >> 8), a2 = tN(255 & e14), i2 = 0.41233895 * r10 + 0.35762064 * n6 + 0.18051042 * a2, o2 = 0.2126 * r10 + 0.7152 * n6 + 0.0722 * a2, s2 = 0.01932141 * r10 + 0.11916382 * n6 + 0.95034478 * a2, l2 = t10.rgbD[0] * (0.401288 * i2 + 0.650173 * o2 - 0.051461 * s2), c2 = t10.rgbD[1] * (-0.250268 * i2 + 1.204414 * o2 + 0.045854 * s2), u2 = t10.rgbD[2] * (-2079e-6 * i2 + 0.048952 * o2 + 0.953127 * s2), d2 = Math.pow(t10.fl * Math.abs(l2) / 100, 0.42), f2 = Math.pow(t10.fl * Math.abs(c2) / 100, 0.42), h2 = Math.pow(t10.fl * Math.abs(u2) / 100, 0.42), p2 = 400 * tA(l2) * d2 / (d2 + 27.13), m2 = 400 * tA(c2) * f2 / (f2 + 27.13), g2 = 400 * tA(u2) * h2 / (h2 + 27.13), b2 = (11 * p2 + -12 * m2 + g2) / 11, v2 = (p2 + m2 - 2 * g2) / 9, y2 = 180 * Math.atan2(v2, b2) / Math.PI, x2 = y2 < 0 ? y2 + 360 : y2 >= 360 ? y2 - 360 : y2, w2 = x2 * Math.PI / 180, k2 = (40 * p2 + 20 * m2 + g2) / 20 * t10.nbb, M2 = 100 * Math.pow(k2 / t10.aw, t10.c * t10.z), C2 = 4 / t10.c * Math.sqrt(M2 / 100) * (t10.aw + 4) * t10.fLRoot, P2 = x2 < 20.14 ? x2 + 360 : x2, _2 = 5e4 / 13 * (0.25 * (Math.cos(P2 * Math.PI / 180 + 2) + 3.8)) * t10.nc * t10.ncb, S2 = Math.pow(_2 * Math.sqrt(b2 * b2 + v2 * v2) / ((20 * p2 + 20 * m2 + 21 * g2) / 20 + 0.305), 0.9) * Math.pow(1.64 - Math.pow(0.29, t10.n), 0.73), O2 = S2 * Math.sqrt(M2 / 100), D2 = O2 * t10.fLRoot, T2 = 50 * Math.sqrt(S2 * t10.c / (t10.aw + 4)), R2 = (1 + 100 * 7e-3) * M2 / (1 + 7e-3 * M2), $2 = 1 / 0.0228 * Math.log(1 + 0.0228 * D2), A2 = $2 * Math.cos(w2), I2 = $2 * Math.sin(w2);
    return new tY(x2, O2, M2, C2, D2, T2, R2, A2, I2);
  }
  static fromJch(e14, t10, r10) {
    return tY.fromJchInViewingConditions(e14, t10, r10, tG.DEFAULT);
  }
  static fromJchInViewingConditions(e14, t10, r10, n6) {
    let a2 = 4 / n6.c * Math.sqrt(e14 / 100) * (n6.aw + 4) * n6.fLRoot, i2 = t10 * n6.fLRoot, o2 = t10 / Math.sqrt(e14 / 100), s2 = 50 * Math.sqrt(o2 * n6.c / (n6.aw + 4)), l2 = r10 * Math.PI / 180, c2 = (1 + 100 * 7e-3) * e14 / (1 + 7e-3 * e14), u2 = 1 / 0.0228 * Math.log(1 + 0.0228 * i2), d2 = u2 * Math.cos(l2), f2 = u2 * Math.sin(l2);
    return new tY(r10, t10, e14, a2, i2, s2, c2, d2, f2);
  }
  static fromUcs(e14, t10, r10) {
    return tY.fromUcsInViewingConditions(e14, t10, r10, tG.DEFAULT);
  }
  static fromUcsInViewingConditions(e14, t10, r10, n6) {
    let a2 = (Math.exp(0.0228 * Math.sqrt(t10 * t10 + r10 * r10)) - 1) / 0.0228 / n6.fLRoot, i2 = Math.atan2(r10, t10) * (180 / Math.PI);
    return i2 < 0 && (i2 += 360), tY.fromJchInViewingConditions(e14 / (1 - (e14 - 100) * 7e-3), a2, i2, n6);
  }
  toInt() {
    return this.viewed(tG.DEFAULT);
  }
  viewed(e14) {
    let t10 = 0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100), r10 = Math.pow(t10 / Math.pow(1.64 - Math.pow(0.29, e14.n), 0.73), 1 / 0.9), n6 = this.hue * Math.PI / 180, a2 = e14.aw * Math.pow(this.j / 100, 1 / e14.c / e14.z), i2 = 0.25 * (Math.cos(n6 + 2) + 3.8) * (5e4 / 13) * e14.nc * e14.ncb, o2 = a2 / e14.nbb, s2 = Math.sin(n6), l2 = Math.cos(n6), c2 = 23 * (o2 + 0.305) * r10 / (23 * i2 + 11 * r10 * l2 + 108 * r10 * s2), u2 = c2 * l2, d2 = c2 * s2, f2 = (460 * o2 + 451 * u2 + 288 * d2) / 1403, h2 = (460 * o2 - 891 * u2 - 261 * d2) / 1403, p2 = (460 * o2 - 220 * u2 - 6300 * d2) / 1403, m2 = Math.max(0, 27.13 * Math.abs(f2) / (400 - Math.abs(f2))), g2 = tA(f2) * (100 / e14.fl) * Math.pow(m2, 1 / 0.42), b2 = Math.max(0, 27.13 * Math.abs(h2) / (400 - Math.abs(h2))), v2 = tA(h2) * (100 / e14.fl) * Math.pow(b2, 1 / 0.42), y2 = Math.max(0, 27.13 * Math.abs(p2) / (400 - Math.abs(p2))), x2 = tA(p2) * (100 / e14.fl) * Math.pow(y2, 1 / 0.42), w2 = g2 / e14.rgbD[0], k2 = v2 / e14.rgbD[1], M2 = x2 / e14.rgbD[2], C2 = function(e15, t11, r11) {
      let n7 = tB[0][0] * e15 + tB[0][1] * t11 + tB[0][2] * r11, a3 = tB[1][0] * e15 + tB[1][1] * t11 + tB[1][2] * r11, i3 = tB[2][0] * e15 + tB[2][1] * t11 + tB[2][2] * r11, o3 = tq(n7), s3 = tq(a3), l3 = tq(i3);
      return tE(o3, s3, l3);
    }(1.86206786 * w2 - 1.01125463 * k2 + 0.14918677 * M2, 0.38752654 * w2 + 0.62144744 * k2 - 897398e-8 * M2, -0.0158415 * w2 - 0.03412294 * k2 + 1.04996444 * M2);
    return C2;
  }
  static fromXyzInViewingConditions(e14, t10, r10, n6) {
    let a2 = n6.rgbD[0] * (0.401288 * e14 + 0.650173 * t10 - 0.051461 * r10), i2 = n6.rgbD[1] * (-0.250268 * e14 + 1.204414 * t10 + 0.045854 * r10), o2 = n6.rgbD[2] * (-2079e-6 * e14 + 0.048952 * t10 + 0.953127 * r10), s2 = Math.pow(n6.fl * Math.abs(a2) / 100, 0.42), l2 = Math.pow(n6.fl * Math.abs(i2) / 100, 0.42), c2 = Math.pow(n6.fl * Math.abs(o2) / 100, 0.42), u2 = 400 * tA(a2) * s2 / (s2 + 27.13), d2 = 400 * tA(i2) * l2 / (l2 + 27.13), f2 = 400 * tA(o2) * c2 / (c2 + 27.13), h2 = (11 * u2 + -12 * d2 + f2) / 11, p2 = (u2 + d2 - 2 * f2) / 9, m2 = 180 * Math.atan2(p2, h2) / Math.PI, g2 = m2 < 0 ? m2 + 360 : m2 >= 360 ? m2 - 360 : m2, b2 = g2 * Math.PI / 180, v2 = (40 * u2 + 20 * d2 + f2) / 20 * n6.nbb, y2 = 100 * Math.pow(v2 / n6.aw, n6.c * n6.z), x2 = 4 / n6.c * Math.sqrt(y2 / 100) * (n6.aw + 4) * n6.fLRoot, w2 = g2 < 20.14 ? g2 + 360 : g2, k2 = 5e4 / 13 * (0.25 * (Math.cos(w2 * Math.PI / 180 + 2) + 3.8)) * n6.nc * n6.ncb, M2 = Math.pow(k2 * Math.sqrt(h2 * h2 + p2 * p2) / ((20 * u2 + 20 * d2 + 21 * f2) / 20 + 0.305), 0.9) * Math.pow(1.64 - Math.pow(0.29, n6.n), 0.73), C2 = M2 * Math.sqrt(y2 / 100), P2 = C2 * n6.fLRoot, _2 = 50 * Math.sqrt(M2 * n6.c / (n6.aw + 4)), S2 = (1 + 100 * 7e-3) * y2 / (1 + 7e-3 * y2), O2 = Math.log(1 + 0.0228 * P2) / 0.0228, D2 = O2 * Math.cos(b2), T2 = O2 * Math.sin(b2);
    return new tY(g2, C2, y2, x2, P2, _2, S2, D2, T2);
  }
  xyzInViewingConditions(e14) {
    let t10 = 0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100), r10 = Math.pow(t10 / Math.pow(1.64 - Math.pow(0.29, e14.n), 0.73), 1 / 0.9), n6 = this.hue * Math.PI / 180, a2 = e14.aw * Math.pow(this.j / 100, 1 / e14.c / e14.z), i2 = 0.25 * (Math.cos(n6 + 2) + 3.8) * (5e4 / 13) * e14.nc * e14.ncb, o2 = a2 / e14.nbb, s2 = Math.sin(n6), l2 = Math.cos(n6), c2 = 23 * (o2 + 0.305) * r10 / (23 * i2 + 11 * r10 * l2 + 108 * r10 * s2), u2 = c2 * l2, d2 = c2 * s2, f2 = (460 * o2 + 451 * u2 + 288 * d2) / 1403, h2 = (460 * o2 - 891 * u2 - 261 * d2) / 1403, p2 = (460 * o2 - 220 * u2 - 6300 * d2) / 1403, m2 = Math.max(0, 27.13 * Math.abs(f2) / (400 - Math.abs(f2))), g2 = tA(f2) * (100 / e14.fl) * Math.pow(m2, 1 / 0.42), b2 = Math.max(0, 27.13 * Math.abs(h2) / (400 - Math.abs(h2))), v2 = tA(h2) * (100 / e14.fl) * Math.pow(b2, 1 / 0.42), y2 = Math.max(0, 27.13 * Math.abs(p2) / (400 - Math.abs(p2))), x2 = tA(p2) * (100 / e14.fl) * Math.pow(y2, 1 / 0.42), w2 = g2 / e14.rgbD[0], k2 = v2 / e14.rgbD[1], M2 = x2 / e14.rgbD[2];
    return [1.86206786 * w2 - 1.01125463 * k2 + 0.14918677 * M2, 0.38752654 * w2 + 0.62144744 * k2 - 897398e-8 * M2, -0.0158415 * w2 - 0.03412294 * k2 + 1.04996444 * M2];
  }
  constructor(e14, t10, r10, n6, a2, i2, o2, s2, l2) {
    this.hue = e14, this.chroma = t10, this.j = r10, this.q = n6, this.m = a2, this.s = i2, this.jstar = o2, this.astar = s2, this.bstar = l2;
  }
}
class tX {
  static sanitizeRadians(e14) {
    return (e14 + 8 * Math.PI) % (2 * Math.PI);
  }
  static trueDelinearized(e14) {
    let t10 = e14 / 100;
    return 255 * (t10 <= 31308e-7 ? 12.92 * t10 : 1.055 * Math.pow(t10, 1 / 2.4) - 0.055);
  }
  static chromaticAdaptation(e14) {
    let t10 = Math.pow(Math.abs(e14), 0.42);
    return 400 * tA(e14) * t10 / (t10 + 27.13);
  }
  static hueOf(e14) {
    let t10 = tL(e14, tX.SCALED_DISCOUNT_FROM_LINRGB), r10 = tX.chromaticAdaptation(t10[0]), n6 = tX.chromaticAdaptation(t10[1]), a2 = tX.chromaticAdaptation(t10[2]);
    return Math.atan2((r10 + n6 - 2 * a2) / 9, (11 * r10 + -12 * n6 + a2) / 11);
  }
  static areInCyclicOrder(e14, t10, r10) {
    let n6 = tX.sanitizeRadians(t10 - e14), a2 = tX.sanitizeRadians(r10 - e14);
    return n6 < a2;
  }
  static intercept(e14, t10, r10) {
    return (t10 - e14) / (r10 - e14);
  }
  static lerpPoint(e14, t10, r10) {
    return [e14[0] + (r10[0] - e14[0]) * t10, e14[1] + (r10[1] - e14[1]) * t10, e14[2] + (r10[2] - e14[2]) * t10];
  }
  static setCoordinate(e14, t10, r10, n6) {
    let a2 = tX.intercept(e14[n6], t10, r10[n6]);
    return tX.lerpPoint(e14, a2, r10);
  }
  static isBounded(e14) {
    return 0 <= e14 && e14 <= 100;
  }
  static nthVertex(e14, t10) {
    let r10 = tX.Y_FROM_LINRGB[0], n6 = tX.Y_FROM_LINRGB[1], a2 = tX.Y_FROM_LINRGB[2], i2 = t10 % 4 <= 1 ? 0 : 100, o2 = t10 % 2 == 0 ? 0 : 100;
    if (t10 < 4) {
      let t11 = (e14 - i2 * n6 - o2 * a2) / r10;
      return tX.isBounded(t11) ? [t11, i2, o2] : [-1, -1, -1];
    }
    if (t10 < 8) {
      let t11 = (e14 - o2 * r10 - i2 * a2) / n6;
      return tX.isBounded(t11) ? [o2, t11, i2] : [-1, -1, -1];
    }
    {
      let t11 = (e14 - i2 * r10 - o2 * n6) / a2;
      return tX.isBounded(t11) ? [i2, o2, t11] : [-1, -1, -1];
    }
  }
  static bisectToSegment(e14, t10) {
    let r10 = [-1, -1, -1], n6 = r10, a2 = 0, i2 = 0, o2 = false, s2 = true;
    for (let l2 = 0; l2 < 12; l2++) {
      let c2 = tX.nthVertex(e14, l2);
      if (c2[0] < 0)
        continue;
      let u2 = tX.hueOf(c2);
      if (!o2) {
        r10 = c2, n6 = c2, a2 = u2, i2 = u2, o2 = true;
        continue;
      }
      (s2 || tX.areInCyclicOrder(a2, u2, i2)) && (s2 = false, tX.areInCyclicOrder(a2, t10, u2) ? (n6 = c2, i2 = u2) : (r10 = c2, a2 = u2));
    }
    return [r10, n6];
  }
  static midpoint(e14, t10) {
    return [(e14[0] + t10[0]) / 2, (e14[1] + t10[1]) / 2, (e14[2] + t10[2]) / 2];
  }
  static criticalPlaneBelow(e14) {
    return Math.floor(e14 - 0.5);
  }
  static criticalPlaneAbove(e14) {
    return Math.ceil(e14 - 0.5);
  }
  static bisectToLimit(e14, t10) {
    let r10 = tX.bisectToSegment(e14, t10), n6 = r10[0], a2 = tX.hueOf(n6), i2 = r10[1];
    for (let e15 = 0; e15 < 3; e15++)
      if (n6[e15] !== i2[e15]) {
        let r11 = -1, o2 = 255;
        n6[e15] < i2[e15] ? (r11 = tX.criticalPlaneBelow(tX.trueDelinearized(n6[e15])), o2 = tX.criticalPlaneAbove(tX.trueDelinearized(i2[e15]))) : (r11 = tX.criticalPlaneAbove(tX.trueDelinearized(n6[e15])), o2 = tX.criticalPlaneBelow(tX.trueDelinearized(i2[e15])));
        for (let s2 = 0; s2 < 8 && !(1 >= Math.abs(o2 - r11)); s2++) {
          let s3 = Math.floor((r11 + o2) / 2), l2 = tX.CRITICAL_PLANES[s3], c2 = tX.setCoordinate(n6, l2, i2, e15), u2 = tX.hueOf(c2);
          tX.areInCyclicOrder(a2, t10, u2) ? (i2 = c2, o2 = s3) : (n6 = c2, a2 = u2, r11 = s3);
        }
      }
    return tX.midpoint(n6, i2);
  }
  static inverseChromaticAdaptation(e14) {
    let t10 = Math.abs(e14);
    return tA(e14) * Math.pow(Math.max(0, 27.13 * t10 / (400 - t10)), 1 / 0.42);
  }
  static findResultByJ(e14, t10, r10) {
    let n6 = 11 * Math.sqrt(r10), a2 = tG.DEFAULT, i2 = 1 / Math.pow(1.64 - Math.pow(0.29, a2.n), 0.73), o2 = 0.25 * (Math.cos(e14 + 2) + 3.8) * (5e4 / 13) * a2.nc * a2.ncb, s2 = Math.sin(e14), l2 = Math.cos(e14);
    for (let e15 = 0; e15 < 5; e15++) {
      let c2 = n6 / 100, u2 = 0 === t10 || 0 === n6 ? 0 : t10 / Math.sqrt(c2), d2 = Math.pow(u2 * i2, 1 / 0.9), f2 = a2.aw * Math.pow(c2, 1 / a2.c / a2.z), h2 = f2 / a2.nbb, p2 = 23 * (h2 + 0.305) * d2 / (23 * o2 + 11 * d2 * l2 + 108 * d2 * s2), m2 = p2 * l2, g2 = p2 * s2, b2 = (460 * h2 + 451 * m2 + 288 * g2) / 1403, v2 = (460 * h2 - 891 * m2 - 261 * g2) / 1403, y2 = (460 * h2 - 220 * m2 - 6300 * g2) / 1403, x2 = tX.inverseChromaticAdaptation(b2), w2 = tX.inverseChromaticAdaptation(v2), k2 = tX.inverseChromaticAdaptation(y2), M2 = tL([x2, w2, k2], tX.LINRGB_FROM_SCALED_DISCOUNT);
      if (M2[0] < 0 || M2[1] < 0 || M2[2] < 0)
        break;
      let C2 = tX.Y_FROM_LINRGB[0], P2 = tX.Y_FROM_LINRGB[1], _2 = tX.Y_FROM_LINRGB[2], S2 = C2 * M2[0] + P2 * M2[1] + _2 * M2[2];
      if (S2 <= 0)
        break;
      if (4 === e15 || 2e-3 > Math.abs(S2 - r10)) {
        if (M2[0] > 100.01 || M2[1] > 100.01 || M2[2] > 100.01)
          return 0;
        return tV(M2);
      }
      n6 -= (S2 - r10) * n6 / (2 * S2);
    }
    return 0;
  }
  static solveToInt(e14, t10, r10) {
    var n6;
    if (t10 < 1e-4 || r10 < 1e-4 || r10 > 99.9999)
      return function(e15) {
        let t11 = tz(e15), r11 = tq(t11);
        return tE(r11, r11, r11);
      }(r10);
    (n6 = e14 % 360) < 0 && (n6 += 360), e14 = n6;
    let a2 = e14 / 180 * Math.PI, i2 = tz(r10), o2 = tX.findResultByJ(a2, t10, i2);
    if (0 !== o2)
      return o2;
    let s2 = tX.bisectToLimit(i2, a2);
    return tV(s2);
  }
  static solveToCam(e14, t10, r10) {
    return tY.fromInt(tX.solveToInt(e14, t10, r10));
  }
}
tX.SCALED_DISCOUNT_FROM_LINRGB = [[0.001200833568784504, 0.002389694492170889, 2795742885861124e-19], [5891086651375999e-19, 0.0029785502573438758, 3270666104008398e-19], [10146692491640572e-20, 5364214359186694e-19, 0.0032979401770712076]], tX.LINRGB_FROM_SCALED_DISCOUNT = [[1373.2198709594231, -1100.4251190754821, -7.278681089101213], [-271.815969077903, 559.6580465940733, -32.46047482791194], [1.9622899599665666, -57.173814538844006, 308.7233197812385]], tX.Y_FROM_LINRGB = [0.2126, 0.7152, 0.0722], tX.CRITICAL_PLANES = [0.015176349177441876, 0.045529047532325624, 0.07588174588720938, 0.10623444424209313, 0.13658714259697685, 0.16693984095186062, 0.19729253930674434, 0.2276452376616281, 0.2579979360165119, 0.28835063437139563, 0.3188300904430532, 0.350925934958123, 0.3848314933096426, 0.42057480301049466, 0.458183274052838, 0.4976837250274023, 0.5391024159806381, 0.5824650784040898, 0.6277969426914107, 0.6751227633498623, 0.7244668422128921, 0.775853049866786, 0.829304845476233, 0.8848452951698498, 0.942497089126609, 1.0022825574869039, 1.0642236851973577, 1.1283421258858297, 1.1946592148522128, 1.2631959812511864, 1.3339731595349034, 1.407011200216447, 1.4823302800086415, 1.5599503113873272, 1.6398909516233677, 1.7221716113234105, 1.8068114625156377, 1.8938294463134073, 1.9832442801866852, 2.075074464868551, 2.1693382909216234, 2.2660538449872063, 2.36523901573795, 2.4669114995532007, 2.5710888059345764, 2.6777882626779785, 2.7870270208169257, 2.898822059350997, 3.0131901897720907, 3.1301480604002863, 3.2497121605402226, 3.3718988244681087, 3.4967242352587946, 3.624204428461639, 3.754355295633311, 3.887192587735158, 4.022731918402185, 4.160988767090289, 4.301978482107941, 4.445716283538092, 4.592217266055746, 4.741496401646282, 4.893568542229298, 5.048448422192488, 5.20615066083972, 5.3666897647573375, 5.5300801301023865, 5.696336044816294, 5.865471690767354, 6.037501145825082, 6.212438385869475, 6.390297286737924, 6.571091626112461, 6.7548350853498045, 6.941541251256611, 7.131223617812143, 7.323895587840543, 7.5195704746346665, 7.7182615035334345, 7.919981813454504, 8.124744458384042, 8.332562408825165, 8.543448553206703, 8.757415699253682, 8.974476575321063, 9.194643831691977, 9.417930041841839, 9.644347703669503, 9.873909240696694, 10.106627003236781, 10.342513269534024, 10.58158024687427, 10.8238400726681, 11.069304815507364, 11.317986476196008, 11.569896988756009, 11.825048221409341, 12.083451977536606, 12.345119996613247, 12.610063955123938, 12.878295467455942, 13.149826086772048, 13.42466730586372, 13.702830557985108, 13.984327217668513, 14.269168601521828, 14.55736596900856, 14.848930523210871, 15.143873411576273, 15.44220572664832, 15.743938506781891, 16.04908273684337, 16.35764934889634, 16.66964922287304, 16.985093187232053, 17.30399201960269, 17.62635644741625, 17.95219714852476, 18.281524751807332, 18.614349837764564, 18.95068293910138, 19.290534541298456, 19.633915083172692, 19.98083495742689, 20.331304511189067, 20.685334046541502, 21.042933821039977, 21.404114048223256, 21.76888489811322, 22.137256497705877, 22.50923893145328, 22.884842241736916, 23.264076429332462, 23.6469514538663, 24.033477234264016, 24.42366364919083, 24.817520537484558, 25.21505769858089, 25.61628489293138, 26.021211842414342, 26.429848230738664, 26.842203703840827, 27.258287870275353, 27.678110301598522, 28.10168053274597, 28.529008062403893, 28.96010235337422, 29.39497283293396, 29.83362889318845, 30.276079891419332, 30.722335150426627, 31.172403958865512, 31.62629557157785, 32.08401920991837, 32.54558406207592, 33.010999283389665, 33.4802739966603, 33.953417292456834, 34.430438229418264, 34.911345834551085, 35.39614910352207, 35.88485700094671, 36.37747846067349, 36.87402238606382, 37.37449765026789, 37.87891309649659, 38.38727753828926, 38.89959975977785, 39.41588851594697, 39.93615253289054, 40.460400508064545, 40.98864111053629, 41.520882981230194, 42.05713473317016, 42.597404951718396, 43.141702194811224, 43.6900349931913, 44.24241185063697, 44.798841244188324, 45.35933162437017, 45.92389141541209, 46.49252901546552, 47.065252796817916, 47.64207110610409, 48.22299226451468, 48.808024568002054, 49.3971762874833, 49.9904556690408, 50.587870934119984, 51.189430279724725, 51.79514187861014, 52.40501387947288, 53.0190544071392, 53.637271562750364, 54.259673423945976, 54.88626804504493, 55.517063457223934, 56.15206766869424, 56.79128866487574, 57.43473440856916, 58.08241284012621, 58.734331877617365, 59.39049941699807, 60.05092333227251, 60.715611475655585, 61.38457167773311, 62.057811747619894, 62.7353394731159, 63.417162620860914, 64.10328893648692, 64.79372614476921, 65.48848194977529, 66.18756403501224, 66.89098006357258, 67.59873767827808, 68.31084450182222, 69.02730813691093, 69.74813616640164, 70.47333615344107, 71.20291564160104, 71.93688215501312, 72.67524319850172, 73.41800625771542, 74.16517879925733, 74.9167682708136, 75.67278210128072, 76.43322770089146, 77.1981124613393, 77.96744375590167, 78.74122893956174, 79.51947534912904, 80.30219030335869, 81.08938110306934, 81.88105503125999, 82.67721935322541, 83.4778813166706, 84.28304815182372, 85.09272707154808, 85.90692527145302, 86.72564993000343, 87.54890820862819, 88.3767072518277, 89.2090541872801, 90.04595612594655, 90.88742016217518, 91.73345337380438, 92.58406282226491, 93.43925555268066, 94.29903859396902, 95.16341895893969, 96.03240364439274, 96.9059996312159, 97.78421388448044, 98.6670533535366, 99.55452497210776];
class tK {
  static from(e14, t10, r10) {
    return new tK(tX.solveToInt(e14, t10, r10));
  }
  static fromInt(e14) {
    return new tK(e14);
  }
  toInt() {
    return this.argb;
  }
  get hue() {
    return this.internalHue;
  }
  set hue(e14) {
    this.setInternalState(tX.solveToInt(e14, this.internalChroma, this.internalTone));
  }
  get chroma() {
    return this.internalChroma;
  }
  set chroma(e14) {
    this.setInternalState(tX.solveToInt(this.internalHue, e14, this.internalTone));
  }
  get tone() {
    return this.internalTone;
  }
  set tone(e14) {
    this.setInternalState(tX.solveToInt(this.internalHue, this.internalChroma, e14));
  }
  setInternalState(e14) {
    let t10 = tY.fromInt(e14);
    this.internalHue = t10.hue, this.internalChroma = t10.chroma, this.internalTone = tH(e14), this.argb = e14;
  }
  inViewingConditions(e14) {
    let t10 = tY.fromInt(this.toInt()), r10 = t10.xyzInViewingConditions(e14), n6 = tY.fromXyzInViewingConditions(r10[0], r10[1], r10[2], tG.make()), a2 = tK.from(n6.hue, n6.chroma, tW(r10[1]));
    return a2;
  }
  constructor(e14) {
    this.argb = e14;
    let t10 = tY.fromInt(e14);
    this.internalHue = t10.hue, this.internalChroma = t10.chroma, this.internalTone = tH(e14), this.argb = e14;
  }
}
class tJ {
  static ratioOfTones(e14, t10) {
    return e14 = tI(0, 100, e14), t10 = tI(0, 100, t10), tJ.ratioOfYs(tz(e14), tz(t10));
  }
  static ratioOfYs(e14, t10) {
    let r10 = e14 > t10 ? e14 : t10;
    return (r10 + 5) / ((r10 === t10 ? e14 : t10) + 5);
  }
  static lighter(e14, t10) {
    if (e14 < 0 || e14 > 100)
      return -1;
    let r10 = tz(e14), n6 = t10 * (r10 + 5) - 5, a2 = tJ.ratioOfYs(n6, r10);
    if (a2 < t10 && Math.abs(a2 - t10) > 0.04)
      return -1;
    let i2 = tW(n6) + 0.4;
    return i2 < 0 || i2 > 100 ? -1 : i2;
  }
  static darker(e14, t10) {
    if (e14 < 0 || e14 > 100)
      return -1;
    let r10 = tz(e14), n6 = (r10 + 5) / t10 - 5, a2 = tJ.ratioOfYs(r10, n6);
    if (a2 < t10 && Math.abs(a2 - t10) > 0.04)
      return -1;
    let i2 = tW(n6) - 0.4;
    return i2 < 0 || i2 > 100 ? -1 : i2;
  }
  static lighterUnsafe(e14, t10) {
    let r10 = tJ.lighter(e14, t10);
    return r10 < 0 ? 100 : r10;
  }
  static darkerUnsafe(e14, t10) {
    let r10 = tJ.darker(e14, t10);
    return r10 < 0 ? 0 : r10;
  }
}
class tZ {
  static isDisliked(e14) {
    let t10 = Math.round(e14.hue) >= 90 && 111 >= Math.round(e14.hue), r10 = Math.round(e14.chroma) > 16, n6 = 65 > Math.round(e14.tone);
    return t10 && r10 && n6;
  }
  static fixIfDisliked(e14) {
    return tZ.isDisliked(e14) ? tK.from(e14.hue, e14.chroma, 70) : e14;
  }
}
class tQ {
  static fromPalette(e14) {
    var t10, r10;
    return new tQ(null !== (t10 = e14.name) && void 0 !== t10 ? t10 : "", e14.palette, e14.tone, null !== (r10 = e14.isBackground) && void 0 !== r10 && r10, e14.background, e14.secondBackground, e14.contrastCurve, e14.toneDeltaPair);
  }
  getArgb(e14) {
    return this.getHct(e14).toInt();
  }
  getHct(e14) {
    let t10 = this.hctCache.get(e14);
    if (null != t10)
      return t10;
    let r10 = this.getTone(e14), n6 = this.palette(e14).getHct(r10);
    return this.hctCache.size > 4 && this.hctCache.clear(), this.hctCache.set(e14, n6), n6;
  }
  getTone(e14) {
    let t10 = e14.contrastLevel < 0;
    if (this.toneDeltaPair) {
      let r10 = this.toneDeltaPair(e14), n6 = r10.roleA, a2 = r10.roleB, i2 = r10.delta, o2 = r10.polarity, s2 = r10.stayTogether, l2 = this.background(e14), c2 = l2.getTone(e14), u2 = "nearer" === o2 || "lighter" === o2 && !e14.isDark || "darker" === o2 && e14.isDark, d2 = u2 ? n6 : a2, f2 = u2 ? a2 : n6, h2 = this.name === d2.name, p2 = e14.isDark ? 1 : -1, m2 = d2.contrastCurve.getContrast(e14.contrastLevel), g2 = f2.contrastCurve.getContrast(e14.contrastLevel), b2 = d2.tone(e14), v2 = tJ.ratioOfTones(c2, b2) >= m2 ? b2 : tQ.foregroundTone(c2, m2), y2 = f2.tone(e14), x2 = tJ.ratioOfTones(c2, y2) >= g2 ? y2 : tQ.foregroundTone(c2, g2);
      return t10 && (v2 = tQ.foregroundTone(c2, m2), x2 = tQ.foregroundTone(c2, g2)), (x2 - v2) * p2 >= i2 || ((x2 = tI(0, 100, v2 + i2 * p2)) - v2) * p2 >= i2 || (v2 = tI(0, 100, x2 - i2 * p2)), 50 <= v2 && v2 < 60 ? x2 = p2 > 0 ? Math.max(x2, (v2 = 60) + i2 * p2) : Math.min(x2, (v2 = 49) + i2 * p2) : 50 <= x2 && x2 < 60 && (x2 = s2 ? p2 > 0 ? Math.max(x2, (v2 = 60) + i2 * p2) : Math.min(x2, (v2 = 49) + i2 * p2) : p2 > 0 ? 60 : 49), h2 ? v2 : x2;
    }
    {
      let r10 = this.tone(e14);
      if (null == this.background)
        return r10;
      let n6 = this.background(e14).getTone(e14), a2 = this.contrastCurve.getContrast(e14.contrastLevel);
      if (tJ.ratioOfTones(n6, r10) >= a2 || (r10 = tQ.foregroundTone(n6, a2)), t10 && (r10 = tQ.foregroundTone(n6, a2)), this.isBackground && 50 <= r10 && r10 < 60 && (r10 = tJ.ratioOfTones(49, n6) >= a2 ? 49 : 60), this.secondBackground) {
        let [t11, n7] = [this.background, this.secondBackground], [i2, o2] = [t11(e14).getTone(e14), n7(e14).getTone(e14)], [s2, l2] = [Math.max(i2, o2), Math.min(i2, o2)];
        if (tJ.ratioOfTones(s2, r10) >= a2 && tJ.ratioOfTones(l2, r10) >= a2)
          return r10;
        let c2 = tJ.lighter(s2, a2), u2 = tJ.darker(l2, a2), d2 = [];
        -1 !== c2 && d2.push(c2), -1 !== u2 && d2.push(u2);
        let f2 = tQ.tonePrefersLightForeground(i2) || tQ.tonePrefersLightForeground(o2);
        return f2 ? c2 < 0 ? 100 : c2 : 1 === d2.length ? d2[0] : u2 < 0 ? 0 : u2;
      }
      return r10;
    }
  }
  static foregroundTone(e14, t10) {
    let r10 = tJ.lighterUnsafe(e14, t10), n6 = tJ.darkerUnsafe(e14, t10), a2 = tJ.ratioOfTones(r10, e14), i2 = tJ.ratioOfTones(n6, e14), o2 = tQ.tonePrefersLightForeground(e14);
    if (!o2)
      return i2 >= t10 || i2 >= a2 ? n6 : r10;
    {
      let e15 = 0.1 > Math.abs(a2 - i2) && a2 < t10 && i2 < t10;
      return a2 >= t10 || a2 >= i2 || e15 ? r10 : n6;
    }
  }
  static tonePrefersLightForeground(e14) {
    return 60 > Math.round(e14);
  }
  static toneAllowsLightForeground(e14) {
    return 49 >= Math.round(e14);
  }
  static enableLightForeground(e14) {
    return tQ.tonePrefersLightForeground(e14) && !tQ.toneAllowsLightForeground(e14) ? 49 : e14;
  }
  constructor(e14, t10, r10, n6, a2, i2, o2, s2) {
    if (this.name = e14, this.palette = t10, this.tone = r10, this.isBackground = n6, this.background = a2, this.secondBackground = i2, this.contrastCurve = o2, this.toneDeltaPair = s2, this.hctCache = /* @__PURE__ */ new Map(), !a2 && i2)
      throw Error(`Color ${e14} has secondBackgrounddefined, but background is not defined.`);
    if (!a2 && o2)
      throw Error(`Color ${e14} has contrastCurvedefined, but background is not defined.`);
    if (a2 && !o2)
      throw Error(`Color ${e14} has backgrounddefined, but contrastCurve is not defined.`);
  }
}
!function(e14) {
  e14[e14.MONOCHROME = 0] = "MONOCHROME", e14[e14.NEUTRAL = 1] = "NEUTRAL", e14[e14.TONAL_SPOT = 2] = "TONAL_SPOT", e14[e14.VIBRANT = 3] = "VIBRANT", e14[e14.EXPRESSIVE = 4] = "EXPRESSIVE", e14[e14.FIDELITY = 5] = "FIDELITY", e14[e14.CONTENT = 6] = "CONTENT", e14[e14.RAINBOW = 7] = "RAINBOW", e14[e14.FRUIT_SALAD = 8] = "FRUIT_SALAD";
}(H || (H = {}));
class t0 {
  getContrast(e14) {
    var t10, r10, n6, a2, i2, o2, s2, l2, c2;
    return e14 <= -1 ? this.low : e14 < 0 ? (t10 = this.low, r10 = this.normal, (1 - (n6 = (e14 - -1) / 1)) * t10 + n6 * r10) : e14 < 0.5 ? (a2 = this.normal, i2 = this.medium, (1 - (o2 = (e14 - 0) / 0.5)) * a2 + o2 * i2) : e14 < 1 ? (s2 = this.medium, l2 = this.high, (1 - (c2 = (e14 - 0.5) / 0.5)) * s2 + c2 * l2) : this.high;
  }
  constructor(e14, t10, r10, n6) {
    this.low = e14, this.normal = t10, this.medium = r10, this.high = n6;
  }
}
class t1 {
  constructor(e14, t10, r10, n6, a2) {
    this.roleA = e14, this.roleB = t10, this.delta = r10, this.polarity = n6, this.stayTogether = a2;
  }
}
function t2(e14) {
  return e14.variant === H.FIDELITY || e14.variant === H.CONTENT;
}
function t4(e14) {
  return e14.variant === H.MONOCHROME;
}
function t5(e14, t10) {
  let r10 = e14.inViewingConditions(tG.make(void 0, void 0, t10.isDark ? 30 : 80, void 0, void 0));
  return tQ.tonePrefersLightForeground(e14.tone) && !tQ.toneAllowsLightForeground(r10.tone) ? tQ.enableLightForeground(e14.tone) : tQ.enableLightForeground(r10.tone);
}
class t3 {
  static highestSurface(e14) {
    return e14.isDark ? t3.surfaceBright : t3.surfaceDim;
  }
}
t3.contentAccentToneDelta = 15, t3.primaryPaletteKeyColor = tQ.fromPalette({ name: "primary_palette_key_color", palette: (e14) => e14.primaryPalette, tone: (e14) => e14.primaryPalette.keyColor.tone }), t3.secondaryPaletteKeyColor = tQ.fromPalette({ name: "secondary_palette_key_color", palette: (e14) => e14.secondaryPalette, tone: (e14) => e14.secondaryPalette.keyColor.tone }), t3.tertiaryPaletteKeyColor = tQ.fromPalette({ name: "tertiary_palette_key_color", palette: (e14) => e14.tertiaryPalette, tone: (e14) => e14.tertiaryPalette.keyColor.tone }), t3.neutralPaletteKeyColor = tQ.fromPalette({ name: "neutral_palette_key_color", palette: (e14) => e14.neutralPalette, tone: (e14) => e14.neutralPalette.keyColor.tone }), t3.neutralVariantPaletteKeyColor = tQ.fromPalette({ name: "neutral_variant_palette_key_color", palette: (e14) => e14.neutralVariantPalette, tone: (e14) => e14.neutralVariantPalette.keyColor.tone }), t3.background = tQ.fromPalette({ name: "background", palette: (e14) => e14.neutralPalette, tone: (e14) => e14.isDark ? 6 : 98, isBackground: true }), t3.onBackground = tQ.fromPalette({ name: "on_background", palette: (e14) => e14.neutralPalette, tone: (e14) => e14.isDark ? 90 : 10, background: (e14) => t3.background, contrastCurve: new t0(3, 3, 4.5, 7) }), t3.surface = tQ.fromPalette({ name: "surface", palette: (e14) => e14.neutralPalette, tone: (e14) => e14.isDark ? 6 : 98, isBackground: true }), t3.surfaceDim = tQ.fromPalette({ name: "surface_dim", palette: (e14) => e14.neutralPalette, tone: (e14) => e14.isDark ? 6 : 87, isBackground: true }), t3.surfaceBright = tQ.fromPalette({ name: "surface_bright", palette: (e14) => e14.neutralPalette, tone: (e14) => e14.isDark ? 24 : 98, isBackground: true }), t3.surfaceContainerLowest = tQ.fromPalette({ name: "surface_container_lowest", palette: (e14) => e14.neutralPalette, tone: (e14) => e14.isDark ? 4 : 100, isBackground: true }), t3.surfaceContainerLow = tQ.fromPalette({ name: "surface_container_low", palette: (e14) => e14.neutralPalette, tone: (e14) => e14.isDark ? 10 : 96, isBackground: true }), t3.surfaceContainer = tQ.fromPalette({ name: "surface_container", palette: (e14) => e14.neutralPalette, tone: (e14) => e14.isDark ? 12 : 94, isBackground: true }), t3.surfaceContainerHigh = tQ.fromPalette({ name: "surface_container_high", palette: (e14) => e14.neutralPalette, tone: (e14) => e14.isDark ? 17 : 92, isBackground: true }), t3.surfaceContainerHighest = tQ.fromPalette({ name: "surface_container_highest", palette: (e14) => e14.neutralPalette, tone: (e14) => e14.isDark ? 22 : 90, isBackground: true }), t3.onSurface = tQ.fromPalette({ name: "on_surface", palette: (e14) => e14.neutralPalette, tone: (e14) => e14.isDark ? 90 : 10, background: (e14) => t3.highestSurface(e14), contrastCurve: new t0(4.5, 7, 11, 21) }), t3.surfaceVariant = tQ.fromPalette({ name: "surface_variant", palette: (e14) => e14.neutralVariantPalette, tone: (e14) => e14.isDark ? 30 : 90, isBackground: true }), t3.onSurfaceVariant = tQ.fromPalette({ name: "on_surface_variant", palette: (e14) => e14.neutralVariantPalette, tone: (e14) => e14.isDark ? 80 : 30, background: (e14) => t3.highestSurface(e14), contrastCurve: new t0(3, 4.5, 7, 11) }), t3.inverseSurface = tQ.fromPalette({ name: "inverse_surface", palette: (e14) => e14.neutralPalette, tone: (e14) => e14.isDark ? 90 : 20 }), t3.inverseOnSurface = tQ.fromPalette({ name: "inverse_on_surface", palette: (e14) => e14.neutralPalette, tone: (e14) => e14.isDark ? 20 : 95, background: (e14) => t3.inverseSurface, contrastCurve: new t0(4.5, 7, 11, 21) }), t3.outline = tQ.fromPalette({ name: "outline", palette: (e14) => e14.neutralVariantPalette, tone: (e14) => e14.isDark ? 60 : 50, background: (e14) => t3.highestSurface(e14), contrastCurve: new t0(1.5, 3, 4.5, 7) }), t3.outlineVariant = tQ.fromPalette({ name: "outline_variant", palette: (e14) => e14.neutralVariantPalette, tone: (e14) => e14.isDark ? 30 : 80, background: (e14) => t3.highestSurface(e14), contrastCurve: new t0(1, 1, 3, 7) }), t3.shadow = tQ.fromPalette({ name: "shadow", palette: (e14) => e14.neutralPalette, tone: (e14) => 0 }), t3.scrim = tQ.fromPalette({ name: "scrim", palette: (e14) => e14.neutralPalette, tone: (e14) => 0 }), t3.surfaceTint = tQ.fromPalette({ name: "surface_tint", palette: (e14) => e14.primaryPalette, tone: (e14) => e14.isDark ? 80 : 40, isBackground: true }), t3.primary = tQ.fromPalette({ name: "primary", palette: (e14) => e14.primaryPalette, tone: (e14) => t4(e14) ? e14.isDark ? 100 : 0 : e14.isDark ? 80 : 40, isBackground: true, background: (e14) => t3.highestSurface(e14), contrastCurve: new t0(3, 4.5, 7, 11), toneDeltaPair: (e14) => new t1(t3.primaryContainer, t3.primary, 15, "nearer", false) }), t3.onPrimary = tQ.fromPalette({ name: "on_primary", palette: (e14) => e14.primaryPalette, tone: (e14) => t4(e14) ? e14.isDark ? 10 : 90 : e14.isDark ? 20 : 100, background: (e14) => t3.primary, contrastCurve: new t0(4.5, 7, 11, 21) }), t3.primaryContainer = tQ.fromPalette({ name: "primary_container", palette: (e14) => e14.primaryPalette, tone: (e14) => t2(e14) ? t5(e14.sourceColorHct, e14) : t4(e14) ? e14.isDark ? 85 : 25 : e14.isDark ? 30 : 90, isBackground: true, background: (e14) => t3.highestSurface(e14), contrastCurve: new t0(1, 1, 3, 7), toneDeltaPair: (e14) => new t1(t3.primaryContainer, t3.primary, 15, "nearer", false) }), t3.onPrimaryContainer = tQ.fromPalette({ name: "on_primary_container", palette: (e14) => e14.primaryPalette, tone: (e14) => t2(e14) ? tQ.foregroundTone(t3.primaryContainer.tone(e14), 4.5) : t4(e14) ? e14.isDark ? 0 : 100 : e14.isDark ? 90 : 10, background: (e14) => t3.primaryContainer, contrastCurve: new t0(4.5, 7, 11, 21) }), t3.inversePrimary = tQ.fromPalette({ name: "inverse_primary", palette: (e14) => e14.primaryPalette, tone: (e14) => e14.isDark ? 40 : 80, background: (e14) => t3.inverseSurface, contrastCurve: new t0(3, 4.5, 7, 11) }), t3.secondary = tQ.fromPalette({ name: "secondary", palette: (e14) => e14.secondaryPalette, tone: (e14) => e14.isDark ? 80 : 40, isBackground: true, background: (e14) => t3.highestSurface(e14), contrastCurve: new t0(3, 4.5, 7, 11), toneDeltaPair: (e14) => new t1(t3.secondaryContainer, t3.secondary, 15, "nearer", false) }), t3.onSecondary = tQ.fromPalette({ name: "on_secondary", palette: (e14) => e14.secondaryPalette, tone: (e14) => t4(e14) ? e14.isDark ? 10 : 100 : e14.isDark ? 20 : 100, background: (e14) => t3.secondary, contrastCurve: new t0(4.5, 7, 11, 21) }), t3.secondaryContainer = tQ.fromPalette({ name: "secondary_container", palette: (e14) => e14.secondaryPalette, tone: (e14) => {
  let t10 = e14.isDark ? 30 : 90;
  if (t4(e14))
    return e14.isDark ? 30 : 85;
  if (!t2(e14))
    return t10;
  let r10 = function(e15, t11, r11, n6) {
    let a2 = r11, i2 = tK.from(e15, t11, r11);
    if (i2.chroma < t11) {
      let r12 = i2.chroma;
      for (; i2.chroma < t11; ) {
        a2 += n6 ? -1 : 1;
        let o2 = tK.from(e15, t11, a2);
        if (r12 > o2.chroma || 0.4 > Math.abs(o2.chroma - t11))
          break;
        let s2 = Math.abs(o2.chroma - t11), l2 = Math.abs(i2.chroma - t11);
        s2 < l2 && (i2 = o2), r12 = Math.max(r12, o2.chroma);
      }
    }
    return a2;
  }(e14.secondaryPalette.hue, e14.secondaryPalette.chroma, t10, !e14.isDark);
  return t5(e14.secondaryPalette.getHct(r10), e14);
}, isBackground: true, background: (e14) => t3.highestSurface(e14), contrastCurve: new t0(1, 1, 3, 7), toneDeltaPair: (e14) => new t1(t3.secondaryContainer, t3.secondary, 15, "nearer", false) }), t3.onSecondaryContainer = tQ.fromPalette({ name: "on_secondary_container", palette: (e14) => e14.secondaryPalette, tone: (e14) => t2(e14) ? tQ.foregroundTone(t3.secondaryContainer.tone(e14), 4.5) : e14.isDark ? 90 : 10, background: (e14) => t3.secondaryContainer, contrastCurve: new t0(4.5, 7, 11, 21) }), t3.tertiary = tQ.fromPalette({ name: "tertiary", palette: (e14) => e14.tertiaryPalette, tone: (e14) => t4(e14) ? e14.isDark ? 90 : 25 : e14.isDark ? 80 : 40, isBackground: true, background: (e14) => t3.highestSurface(e14), contrastCurve: new t0(3, 4.5, 7, 11), toneDeltaPair: (e14) => new t1(t3.tertiaryContainer, t3.tertiary, 15, "nearer", false) }), t3.onTertiary = tQ.fromPalette({ name: "on_tertiary", palette: (e14) => e14.tertiaryPalette, tone: (e14) => t4(e14) ? e14.isDark ? 10 : 90 : e14.isDark ? 20 : 100, background: (e14) => t3.tertiary, contrastCurve: new t0(4.5, 7, 11, 21) }), t3.tertiaryContainer = tQ.fromPalette({ name: "tertiary_container", palette: (e14) => e14.tertiaryPalette, tone: (e14) => {
  if (t4(e14))
    return e14.isDark ? 60 : 49;
  if (!t2(e14))
    return e14.isDark ? 30 : 90;
  let t10 = t5(e14.tertiaryPalette.getHct(e14.sourceColorHct.tone), e14), r10 = e14.tertiaryPalette.getHct(t10);
  return tZ.fixIfDisliked(r10).tone;
}, isBackground: true, background: (e14) => t3.highestSurface(e14), contrastCurve: new t0(1, 1, 3, 7), toneDeltaPair: (e14) => new t1(t3.tertiaryContainer, t3.tertiary, 15, "nearer", false) }), t3.onTertiaryContainer = tQ.fromPalette({ name: "on_tertiary_container", palette: (e14) => e14.tertiaryPalette, tone: (e14) => t4(e14) ? e14.isDark ? 0 : 100 : t2(e14) ? tQ.foregroundTone(t3.tertiaryContainer.tone(e14), 4.5) : e14.isDark ? 90 : 10, background: (e14) => t3.tertiaryContainer, contrastCurve: new t0(4.5, 7, 11, 21) }), t3.error = tQ.fromPalette({ name: "error", palette: (e14) => e14.errorPalette, tone: (e14) => e14.isDark ? 80 : 40, isBackground: true, background: (e14) => t3.highestSurface(e14), contrastCurve: new t0(3, 4.5, 7, 11), toneDeltaPair: (e14) => new t1(t3.errorContainer, t3.error, 15, "nearer", false) }), t3.onError = tQ.fromPalette({ name: "on_error", palette: (e14) => e14.errorPalette, tone: (e14) => e14.isDark ? 20 : 100, background: (e14) => t3.error, contrastCurve: new t0(4.5, 7, 11, 21) }), t3.errorContainer = tQ.fromPalette({ name: "error_container", palette: (e14) => e14.errorPalette, tone: (e14) => e14.isDark ? 30 : 90, isBackground: true, background: (e14) => t3.highestSurface(e14), contrastCurve: new t0(1, 1, 3, 7), toneDeltaPair: (e14) => new t1(t3.errorContainer, t3.error, 15, "nearer", false) }), t3.onErrorContainer = tQ.fromPalette({ name: "on_error_container", palette: (e14) => e14.errorPalette, tone: (e14) => e14.isDark ? 90 : 10, background: (e14) => t3.errorContainer, contrastCurve: new t0(4.5, 7, 11, 21) }), t3.primaryFixed = tQ.fromPalette({ name: "primary_fixed", palette: (e14) => e14.primaryPalette, tone: (e14) => t4(e14) ? 40 : 90, isBackground: true, background: (e14) => t3.highestSurface(e14), contrastCurve: new t0(1, 1, 3, 7), toneDeltaPair: (e14) => new t1(t3.primaryFixed, t3.primaryFixedDim, 10, "lighter", true) }), t3.primaryFixedDim = tQ.fromPalette({ name: "primary_fixed_dim", palette: (e14) => e14.primaryPalette, tone: (e14) => t4(e14) ? 30 : 80, isBackground: true, background: (e14) => t3.highestSurface(e14), contrastCurve: new t0(1, 1, 3, 7), toneDeltaPair: (e14) => new t1(t3.primaryFixed, t3.primaryFixedDim, 10, "lighter", true) }), t3.onPrimaryFixed = tQ.fromPalette({ name: "on_primary_fixed", palette: (e14) => e14.primaryPalette, tone: (e14) => t4(e14) ? 100 : 10, background: (e14) => t3.primaryFixedDim, secondBackground: (e14) => t3.primaryFixed, contrastCurve: new t0(4.5, 7, 11, 21) }), t3.onPrimaryFixedVariant = tQ.fromPalette({ name: "on_primary_fixed_variant", palette: (e14) => e14.primaryPalette, tone: (e14) => t4(e14) ? 90 : 30, background: (e14) => t3.primaryFixedDim, secondBackground: (e14) => t3.primaryFixed, contrastCurve: new t0(3, 4.5, 7, 11) }), t3.secondaryFixed = tQ.fromPalette({ name: "secondary_fixed", palette: (e14) => e14.secondaryPalette, tone: (e14) => t4(e14) ? 80 : 90, isBackground: true, background: (e14) => t3.highestSurface(e14), contrastCurve: new t0(1, 1, 3, 7), toneDeltaPair: (e14) => new t1(t3.secondaryFixed, t3.secondaryFixedDim, 10, "lighter", true) }), t3.secondaryFixedDim = tQ.fromPalette({ name: "secondary_fixed_dim", palette: (e14) => e14.secondaryPalette, tone: (e14) => t4(e14) ? 70 : 80, isBackground: true, background: (e14) => t3.highestSurface(e14), contrastCurve: new t0(1, 1, 3, 7), toneDeltaPair: (e14) => new t1(t3.secondaryFixed, t3.secondaryFixedDim, 10, "lighter", true) }), t3.onSecondaryFixed = tQ.fromPalette({ name: "on_secondary_fixed", palette: (e14) => e14.secondaryPalette, tone: (e14) => 10, background: (e14) => t3.secondaryFixedDim, secondBackground: (e14) => t3.secondaryFixed, contrastCurve: new t0(4.5, 7, 11, 21) }), t3.onSecondaryFixedVariant = tQ.fromPalette({ name: "on_secondary_fixed_variant", palette: (e14) => e14.secondaryPalette, tone: (e14) => t4(e14) ? 25 : 30, background: (e14) => t3.secondaryFixedDim, secondBackground: (e14) => t3.secondaryFixed, contrastCurve: new t0(3, 4.5, 7, 11) }), t3.tertiaryFixed = tQ.fromPalette({ name: "tertiary_fixed", palette: (e14) => e14.tertiaryPalette, tone: (e14) => t4(e14) ? 40 : 90, isBackground: true, background: (e14) => t3.highestSurface(e14), contrastCurve: new t0(1, 1, 3, 7), toneDeltaPair: (e14) => new t1(t3.tertiaryFixed, t3.tertiaryFixedDim, 10, "lighter", true) }), t3.tertiaryFixedDim = tQ.fromPalette({ name: "tertiary_fixed_dim", palette: (e14) => e14.tertiaryPalette, tone: (e14) => t4(e14) ? 30 : 80, isBackground: true, background: (e14) => t3.highestSurface(e14), contrastCurve: new t0(1, 1, 3, 7), toneDeltaPair: (e14) => new t1(t3.tertiaryFixed, t3.tertiaryFixedDim, 10, "lighter", true) }), t3.onTertiaryFixed = tQ.fromPalette({ name: "on_tertiary_fixed", palette: (e14) => e14.tertiaryPalette, tone: (e14) => t4(e14) ? 100 : 10, background: (e14) => t3.tertiaryFixedDim, secondBackground: (e14) => t3.tertiaryFixed, contrastCurve: new t0(4.5, 7, 11, 21) }), t3.onTertiaryFixedVariant = tQ.fromPalette({ name: "on_tertiary_fixed_variant", palette: (e14) => e14.tertiaryPalette, tone: (e14) => t4(e14) ? 90 : 30, background: (e14) => t3.tertiaryFixedDim, secondBackground: (e14) => t3.tertiaryFixed, contrastCurve: new t0(3, 4.5, 7, 11) });
class t8 {
  static fromInt(e14) {
    let t10 = tK.fromInt(e14);
    return t8.fromHct(t10);
  }
  static fromHct(e14) {
    return new t8(e14.hue, e14.chroma, e14);
  }
  static fromHueAndChroma(e14, t10) {
    return new t8(e14, t10, t8.createKeyColor(e14, t10));
  }
  static createKeyColor(e14, t10) {
    let r10 = tK.from(e14, t10, 50), n6 = Math.abs(r10.chroma - t10);
    for (let a2 = 1; a2 < 50 && Math.round(t10) !== Math.round(r10.chroma); a2 += 1) {
      let i2 = tK.from(e14, t10, 50 + a2), o2 = Math.abs(i2.chroma - t10);
      o2 < n6 && (n6 = o2, r10 = i2);
      let s2 = tK.from(e14, t10, 50 - a2), l2 = Math.abs(s2.chroma - t10);
      l2 < n6 && (n6 = l2, r10 = s2);
    }
    return r10;
  }
  tone(e14) {
    let t10 = this.cache.get(e14);
    return void 0 === t10 && (t10 = tK.from(this.hue, this.chroma, e14).toInt(), this.cache.set(e14, t10)), t10;
  }
  getHct(e14) {
    return tK.fromInt(this.tone(e14));
  }
  constructor(e14, t10, r10) {
    this.hue = e14, this.chroma = t10, this.keyColor = r10, this.cache = /* @__PURE__ */ new Map();
  }
}
class t6 {
  static of(e14) {
    return new t6(e14, false);
  }
  static contentOf(e14) {
    return new t6(e14, true);
  }
  static fromColors(e14) {
    return t6.createPaletteFromColors(false, e14);
  }
  static contentFromColors(e14) {
    return t6.createPaletteFromColors(true, e14);
  }
  static createPaletteFromColors(e14, t10) {
    let r10 = new t6(t10.primary, e14);
    if (t10.secondary) {
      let n6 = new t6(t10.secondary, e14);
      r10.a2 = n6.a1;
    }
    if (t10.tertiary) {
      let n6 = new t6(t10.tertiary, e14);
      r10.a3 = n6.a1;
    }
    if (t10.error) {
      let n6 = new t6(t10.error, e14);
      r10.error = n6.a1;
    }
    if (t10.neutral) {
      let n6 = new t6(t10.neutral, e14);
      r10.n1 = n6.n1;
    }
    if (t10.neutralVariant) {
      let n6 = new t6(t10.neutralVariant, e14);
      r10.n2 = n6.n2;
    }
    return r10;
  }
  constructor(e14, t10) {
    let r10 = tK.fromInt(e14), n6 = r10.hue, a2 = r10.chroma;
    t10 ? (this.a1 = t8.fromHueAndChroma(n6, a2), this.a2 = t8.fromHueAndChroma(n6, a2 / 3), this.a3 = t8.fromHueAndChroma(n6 + 60, a2 / 2), this.n1 = t8.fromHueAndChroma(n6, Math.min(a2 / 12, 4)), this.n2 = t8.fromHueAndChroma(n6, Math.min(a2 / 6, 8))) : (this.a1 = t8.fromHueAndChroma(n6, Math.max(48, a2)), this.a2 = t8.fromHueAndChroma(n6, 16), this.a3 = t8.fromHueAndChroma(n6 + 60, 24), this.n1 = t8.fromHueAndChroma(n6, 4), this.n2 = t8.fromHueAndChroma(n6, 8)), this.error = t8.fromHueAndChroma(25, 84);
  }
}
function t9(e14) {
  e14 = e14.replace("#", "");
  let t10 = 3 === e14.length, r10 = 6 === e14.length, n6 = 8 === e14.length;
  if (!t10 && !r10 && !n6)
    throw Error("unexpected hex " + e14);
  let a2 = 0, i2 = 0, o2 = 0;
  return t10 ? (a2 = t7(e14.slice(0, 1).repeat(2)), i2 = t7(e14.slice(1, 2).repeat(2)), o2 = t7(e14.slice(2, 3).repeat(2))) : r10 ? (a2 = t7(e14.slice(0, 2)), i2 = t7(e14.slice(2, 4)), o2 = t7(e14.slice(4, 6))) : n6 && (a2 = t7(e14.slice(2, 4)), i2 = t7(e14.slice(4, 6)), o2 = t7(e14.slice(6, 8))), (-16777216 | (255 & a2) << 16 | (255 & i2) << 8 | 255 & o2) >>> 0;
}
function t7(e14) {
  return parseInt(e14, 16);
}
let re = { 0: true, 10: true, 20: true, 30: true, 40: true, 50: true, 60: true, 70: true, 80: true, 90: true, 95: true, 100: true }, rt = (e14) => {
  let t10 = function(e15) {
    return { r: e15 >> 16 & 255, g: e15 >> 8 & 255, b: 255 & e15, a: e15 >> 24 & 255 };
  }(e14);
  return [t10.r, t10.g, t10.b];
}, rr = (e14) => ({ primary: true, secondary: true, tertiary: true, error: true, warning: true, success: true })[e14], rn = class {
  normalizeRoleRules() {
    let e14 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t10 = { shadow: ["neutral", 0, 0], scrim: ["neutral", 0, 0], outline: ["neutralVariant", 60, 50], "outline-variant": ["neutralVariant", 30, 80], surface: ["neutral", 10, 99], "on-surface": ["neutral", 90, 10], "surface-variant": ["neutralVariant", 30, 90], "on-surface-variant": ["neutralVariant", 80, 30], "surface-dim": ["neutral", 6, 87], "surface-bright": ["neutral", 24, 98], "surface-container-lowest": ["neutral", 4, 100], "surface-container-low": ["neutral", 10, 96], "surface-container": ["neutral", 12, 94], "surface-container-high": ["neutral", 17, 92], "surface-container-highest": ["neutral", 22, 90], "inverse-surface": ["neutral", 90, 20], "inverse-on-surface": ["neutral", 20, 95], "inverse-primary": ["primary", 40, 80] };
    for (let e15 in this.seeds)
      e15.startsWith("neutral") || (t10[e15] = [e15, 80, 40], t10[`on-${e15}`] = [e15, 20, 100], t10[`${e15}-container`] = [e15, 30, 90], t10[`on-${e15}-container`] = [e15, 90, 10]);
    return { ...t10, ...e14 };
  }
  getThemeRoleColors(e14) {
    let t10 = {}, r10 = {};
    for (let n6 in e14) {
      let [a2, i2, o2] = e14[n6];
      this.seeds[a2] && (r10[n6] = re[i2] ? `${a2}.${i2}` : this.seeds[a2].tone(i2), t10[n6] = re[o2] ? `${a2}.${o2}` : this.seeds[a2].tone(o2));
    }
    return [t10, r10];
  }
  toDesignTokens() {
    let e14 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [t10, r10] = this.getThemeRoleColors(this.normalizeRoleRules(e14)), n6 = {}, a2 = {};
    for (let e15 in t10)
      if (n6[`${e15}`] = { _default: T(t10[e15]) ? rt(t10[e15]) : t10[e15], _dark: T(r10[e15]) ? rt(r10[e15]) : r10[e15] }, rr(e15) && (a2[`${e15}`] = td.mixin({ bgColor: `sys.${e15}`, color: `sys.on-${e15}` }), a2[`${e15}-container`] = td.mixin({ bgColor: `sys.${e15}-container`, color: `sys.on-${e15}-container` })), e15.startsWith("surface")) {
        if (e15.includes("container")) {
          a2[`${e15}`] = td.mixin({ bgColor: `sys.${e15}`, color: "sys.on-surface" });
          continue;
        }
        a2[`${e15}`] = td.mixin({ bgColor: `sys.${e15}`, color: "sys.on-surface" }), a2[`on-${e15}`] = td.mixin({ bgColor: `sys.on-${e15}`, color: "sys.inverse-on-surface" });
      }
    let i2 = (e15) => Object.keys(re).reduce((t11, r11) => ({ ...t11, [r11]: rt(e15.tone(parseInt(r11))) }), {}), o2 = td.color({ ...$(this.seeds, (e15) => i2(e15)), white: [255, 255, 255], black: [0, 0, 0], sys: n6 }), s2 = td.customMixin("containerStyle", { sys: a2 });
    return { color: o2, containerStyle: s2 };
  }
  constructor(e14) {
    this.seeds = e14;
  }
};
rn.toHEX = (e14) => `#${rt(e14).map((e15) => I(e15.toString(16), 2, "0")).join("")}`, rn.fromColors = (e14) => {
  let { primary: t10, secondary: r10, tertiary: n6, neutral: a2, neutralVariant: i2, error: o2, ...s2 } = e14, l2 = t6.contentFromColors({ primary: t9(t10), secondary: r10 ? t9(r10) : void 0, tertiary: n6 ? t9(n6) : void 0, error: o2 ? t9(o2) : void 0 });
  return a2 && (l2.n1 = t8.fromHueAndChroma(t9(a2), 4)), i2 && (l2.n2 = t8.fromHueAndChroma(t9(i2), 8)), new rn({ primary: l2.a1, secondary: l2.a2, tertiary: l2.a3, neutral: l2.n1, neutralVariant: l2.n2, error: l2.error, ...$(s2, (e15) => t8.fromInt(t9(e15))) });
};
let ra = rn, ri = (e14, t10, r10, n6) => Object.assign(function(e15, t11, r11, n7) {
  if (e15 === t11 && r11 === n7)
    return eV;
  let a2 = new Float32Array(11);
  for (let t12 = 0; t12 < 11; ++t12)
    a2[t12] = te(0.1 * t12, e15, r11);
  return (i2) => 0 === i2 || 1 === i2 ? i2 : te(function(t12) {
    let n8 = 0, i3 = 1;
    for (; 10 !== i3 && a2[i3] <= t12; ++i3)
      n8 += 0.1;
    --i3;
    let o2 = (t12 - a2[i3]) / (a2[i3 + 1] - a2[i3]), s2 = n8 + 0.1 * o2, l2 = tt(s2, e15, r11);
    return l2 >= 1e-3 ? function(e16, t13, r12, n9) {
      for (let a3 = 0; a3 < 8; ++a3) {
        let a4 = tt(t13, r12, n9);
        if (0 === a4)
          break;
        let i4 = te(t13, r12, n9) - e16;
        t13 -= i4 / a4;
      }
      return t13;
    }(t12, s2, e15, r11) : 0 === l2 ? s2 : function(e16, t13, r12, n9, a3) {
      let i4, o3;
      let s3 = 0;
      do
        (i4 = te(o3 = t13 + (r12 - t13) / 2, n9, a3) - e16) > 0 ? r12 = o3 : t13 = o3;
      while (Math.abs(i4) > 1e-7 && ++s3 < 10);
      return o3;
    }(t12, n8, n8 + 0.1, e15, r11);
  }(i2), t11, n7);
}(e14, t10, r10, n6), { toString: () => `cubic-bezier(${e14}, ${t10}, ${r10}, ${n6})` }), ro = { duration: { sm1: 50, sm2: 100, sm3: 150, sm4: 200, md1: 250, md2: 300, md3: 350, md4: 400, lg1: 450, lg2: 500, lg3: 550, lg4: 600, xl1: 700, xl2: 800, xl3: 900, xl4: 1e3 }, easing: { linear: ri(0, 0, 1, 1), standard: Object.assign(ri(0.2, 0, 0, 1), { accelerate: ri(0.3, 0, 1, 1), decelerate: ri(0, 0, 0, 1) }), emphasized: Object.assign(ri(0.2, 0, 0, 1), { accelerate: ri(0.3, 0, 0.8, 0.15), decelerate: ri(0.05, 0.7, 0.1, 1) }), legacy: Object.assign(ri(0.4, 0, 0.2, 1), { decelerate: ri(0, 0, 0.2, 1), accelerate: ri(0.4, 0, 1, 1) }) } }, rs = (n6, a2) => (a2 = null != a2 ? a2 : { ...n6, from: { ...n6.to }, to: { ...n6.from } }, e({ onComplete: L(), $default: L() }, (e14, i2) => {
  let o2, {} = e14, { slots: s2, emit: l2 } = i2, c2 = (e15, t10) => {
    o2 = e8({ ...n6, autoplay: true, onComplete: () => {
      t10(), l2("complete", "enter");
    }, onUpdate: (t11) => {
      Object.assign(e15.style, t11);
    } });
  }, u2 = (e15, t10) => {
    o2 = e8({ ...a2, autoplay: true, onComplete: () => {
      t10(), l2("complete", "leave");
    }, onUpdate: (t11) => {
      Object.assign(e15.style, t11);
    } });
  }, d2 = () => {
    var e15;
    null === (e15 = o2) || void 0 === e15 || e15.stop();
  };
  return () => {
    var e15;
    return t(r, { css: false, onEnter: c2, onEnterCancelled: d2, onLeave: u2, onLeaveCancelled: d2, children: null === (e15 = s2.default) || void 0 === e15 ? void 0 : e15.call(s2) });
  };
}, { name: "Transition" })), rl = { transitionDuration: td.transitionDuration(ro.duration), transitionTimingFunction: td.transitionTimingFunction({ linear: ro.easing.linear.toString(), standard: ro.easing.standard.toString(), "standard-accelerate": ro.easing.standard.accelerate.toString(), "standard-decelerate": ro.easing.standard.decelerate.toString(), emphasized: ro.easing.emphasized.toString(), "emphasized-decelerate": ro.easing.emphasized.decelerate.toString(), "emphasized-accelerate": ro.easing.emphasized.accelerate.toString(), legacy: ro.easing.legacy.toString(), "legacy-decelerate": ro.easing.legacy.decelerate.toString(), "legacy-accelerate": ro.easing.legacy.accelerate.toString() }) }, rc = td.rounded({ xs: 4, sm: 8, md: 12, lg: 16, xl: 28 }), ru = ra.fromColors({ primary: "#1270f5", secondary: "#8a90a5", tertiary: "#b58391", neutral: "#5e5e5e", error: "#d93f23", warning: "#e69c00", success: "#5ac220" }), rd = { ...t$, ...rl, ...tR, rounded: rc, ...ru.toDesignTokens({ primary: ["primary", 80, 50] }) }, rf = tT.create(rd, { varPrefix: "vk" }), rh = n(() => rf, { name: "Theme" });
var rp = function(e14, t10, r10) {
  var n6 = e14.key + "-" + t10.name;
  false === r10 && void 0 === e14.registered[n6] && (e14.registered[n6] = t10.styles);
}, rm = function(e14, t10, r10) {
  rp(e14, t10, r10);
  var n6 = e14.key + "-" + t10.name;
  if (void 0 === e14.inserted[t10.name]) {
    var a2 = t10;
    do
      e14.insert(t10 === a2 ? "." + n6 : "", a2, e14.sheet, true), a2 = a2.next;
    while (void 0 !== a2);
  }
}, rg = function() {
  function e14(e15) {
    var t11 = this;
    this._insertTag = function(e16) {
      var r10;
      r10 = 0 === t11.tags.length ? t11.insertionPoint ? t11.insertionPoint.nextSibling : t11.prepend ? t11.container.firstChild : t11.before : t11.tags[t11.tags.length - 1].nextSibling, t11.container.insertBefore(e16, r10), t11.tags.push(e16);
    }, this.isSpeedy = void 0 === e15.speedy || e15.speedy, this.tags = [], this.ctr = 0, this.nonce = e15.nonce, this.key = e15.key, this.container = e15.container, this.prepend = e15.prepend, this.insertionPoint = e15.insertionPoint, this.before = null;
  }
  var t10 = e14.prototype;
  return t10.hydrate = function(e15) {
    e15.forEach(this._insertTag);
  }, t10.insert = function(e15) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) == 0) {
      var t11;
      this._insertTag(((t11 = document.createElement("style")).setAttribute("data-emotion", this.key), void 0 !== this.nonce && t11.setAttribute("nonce", this.nonce), t11.appendChild(document.createTextNode("")), t11.setAttribute("data-s", ""), t11));
    }
    var r10 = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var n6 = function(e16) {
        if (e16.sheet)
          return e16.sheet;
        for (var t12 = 0; t12 < document.styleSheets.length; t12++)
          if (document.styleSheets[t12].ownerNode === e16)
            return document.styleSheets[t12];
      }(r10);
      try {
        n6.insertRule(e15, n6.cssRules.length);
      } catch (e16) {
      }
    } else
      r10.appendChild(document.createTextNode(e15));
    this.ctr++;
  }, t10.flush = function() {
    this.tags.forEach(function(e15) {
      return e15.parentNode && e15.parentNode.removeChild(e15);
    }), this.tags = [], this.ctr = 0;
  }, e14;
}(), rb = "-ms-", rv = "-moz-", ry = "-webkit-", rx = "comm", rw = "rule", rk = "decl", rM = "@keyframes", rC = Math.abs, rP = String.fromCharCode, r_ = Object.assign;
function rS(e14, t10, r10) {
  return e14.replace(t10, r10);
}
function rO(e14, t10) {
  return e14.indexOf(t10);
}
function rD(e14, t10) {
  return 0 | e14.charCodeAt(t10);
}
function rT(e14, t10, r10) {
  return e14.slice(t10, r10);
}
function rR(e14) {
  return e14.length;
}
function r$(e14, t10) {
  return t10.push(e14), e14;
}
var rA = 1, rI = 1, rL = 0, rF = 0, rB = 0, rj = "";
function rE(e14, t10, r10, n6, a2, i2, o2) {
  return { value: e14, root: t10, parent: r10, type: n6, props: a2, children: i2, line: rA, column: rI, length: o2, return: "" };
}
function rV(e14, t10) {
  return r_(rE("", null, null, "", null, null, 0), e14, { length: -e14.length }, t10);
}
function rH() {
  return rB = rF < rL ? rD(rj, rF++) : 0, rI++, 10 === rB && (rI = 1, rA++), rB;
}
function rz() {
  return rD(rj, rF);
}
function rW(e14) {
  switch (e14) {
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
function rN(e14) {
  return rA = rI = 1, rL = rR(rj = e14), rF = 0, [];
}
function rq(e14) {
  var t10, r10;
  return (t10 = rF - 1, r10 = function e15(t11) {
    for (; rH(); )
      switch (rB) {
        case t11:
          return rF;
        case 34:
        case 39:
          34 !== t11 && 39 !== t11 && e15(rB);
          break;
        case 40:
          41 === t11 && e15(t11);
          break;
        case 92:
          rH();
      }
    return rF;
  }(91 === e14 ? e14 + 2 : 40 === e14 ? e14 + 1 : e14), rT(rj, t10, r10)).trim();
}
function rU(e14, t10, r10, n6, a2, i2, o2, s2, l2, c2, u2) {
  for (var d2 = a2 - 1, f2 = 0 === a2 ? i2 : [""], h2 = f2.length, p2 = 0, m2 = 0, g2 = 0; p2 < n6; ++p2)
    for (var b2 = 0, v2 = rT(e14, d2 + 1, d2 = rC(m2 = o2[p2])), y2 = e14; b2 < h2; ++b2)
      (y2 = (m2 > 0 ? f2[b2] + " " + v2 : rS(v2, /&\f/g, f2[b2])).trim()) && (l2[g2++] = y2);
  return rE(e14, t10, r10, 0 === a2 ? rw : s2, l2, c2, u2);
}
function rG(e14, t10, r10, n6) {
  return rE(e14, t10, r10, rk, rT(e14, 0, n6), rT(e14, n6 + 1, -1), n6);
}
function rY(e14, t10) {
  for (var r10 = "", n6 = e14.length, a2 = 0; a2 < n6; a2++)
    r10 += t10(e14[a2], a2, e14, t10) || "";
  return r10;
}
function rX(e14, t10, r10, n6) {
  switch (e14.type) {
    case "@layer":
      if (e14.children.length)
        break;
    case "@import":
    case rk:
      return e14.return = e14.return || e14.value;
    case rx:
      return "";
    case rM:
      return e14.return = e14.value + "{" + rY(e14.children, n6) + "}";
    case rw:
      e14.value = e14.props.join(",");
  }
  return rR(r10 = rY(e14.children, n6)) ? e14.return = e14.value + "{" + r10 + "}" : "";
}
var rK = function(e14, t10, r10) {
  for (var n6 = 0, a2 = 0; n6 = a2, a2 = rz(), 38 === n6 && 12 === a2 && (t10[r10] = 1), !rW(a2); )
    rH();
  return rT(rj, e14, rF);
}, rJ = function(e14, t10) {
  var r10 = -1, n6 = 44;
  do
    switch (rW(n6)) {
      case 0:
        38 === n6 && 12 === rz() && (t10[r10] = 1), e14[r10] += rK(rF - 1, t10, r10);
        break;
      case 2:
        e14[r10] += rq(n6);
        break;
      case 4:
        if (44 === n6) {
          e14[++r10] = 58 === rz() ? "&\f" : "", t10[r10] = e14[r10].length;
          break;
        }
      default:
        e14[r10] += rP(n6);
    }
  while (n6 = rH());
  return e14;
}, rZ = function(e14, t10) {
  var r10;
  return r10 = rJ(rN(e14), t10), rj = "", r10;
}, rQ = /* @__PURE__ */ new WeakMap(), r0 = function(e14) {
  if ("rule" === e14.type && e14.parent && !(e14.length < 1)) {
    for (var t10 = e14.value, r10 = e14.parent, n6 = e14.column === r10.column && e14.line === r10.line; "rule" !== r10.type; )
      if (!(r10 = r10.parent))
        return;
    if ((1 !== e14.props.length || 58 === t10.charCodeAt(0) || rQ.get(r10)) && !n6) {
      rQ.set(e14, true);
      for (var a2 = [], i2 = rZ(t10, a2), o2 = r10.props, s2 = 0, l2 = 0; s2 < i2.length; s2++)
        for (var c2 = 0; c2 < o2.length; c2++, l2++)
          e14.props[l2] = a2[s2] ? i2[s2].replace(/&\f/g, o2[c2]) : o2[c2] + " " + i2[s2];
    }
  }
}, r1 = function(e14) {
  if ("decl" === e14.type) {
    var t10 = e14.value;
    108 === t10.charCodeAt(0) && 98 === t10.charCodeAt(2) && (e14.return = "", e14.value = "");
  }
}, r2 = [function(e14, t10, r10, n6) {
  if (e14.length > -1 && !e14.return)
    switch (e14.type) {
      case rk:
        e14.return = function e15(t11, r11) {
          switch (45 ^ rD(t11, 0) ? (((r11 << 2 ^ rD(t11, 0)) << 2 ^ rD(t11, 1)) << 2 ^ rD(t11, 2)) << 2 ^ rD(t11, 3) : 0) {
            case 5103:
              return ry + "print-" + t11 + t11;
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
              return ry + t11 + t11;
            case 5349:
            case 4246:
            case 4810:
            case 6968:
            case 2756:
              return ry + t11 + rv + t11 + rb + t11 + t11;
            case 6828:
            case 4268:
              return ry + t11 + rb + t11 + t11;
            case 6165:
              return ry + t11 + rb + "flex-" + t11 + t11;
            case 5187:
              return ry + t11 + rS(t11, /(\w+).+(:[^]+)/, ry + "box-$1$2" + rb + "flex-$1$2") + t11;
            case 5443:
              return ry + t11 + rb + "flex-item-" + rS(t11, /flex-|-self/, "") + t11;
            case 4675:
              return ry + t11 + rb + "flex-line-pack" + rS(t11, /align-content|flex-|-self/, "") + t11;
            case 5548:
              return ry + t11 + rb + rS(t11, "shrink", "negative") + t11;
            case 5292:
              return ry + t11 + rb + rS(t11, "basis", "preferred-size") + t11;
            case 6060:
              return ry + "box-" + rS(t11, "-grow", "") + ry + t11 + rb + rS(t11, "grow", "positive") + t11;
            case 4554:
              return ry + rS(t11, /([^-])(transform)/g, "$1" + ry + "$2") + t11;
            case 6187:
              return rS(rS(rS(t11, /(zoom-|grab)/, ry + "$1"), /(image-set)/, ry + "$1"), t11, "") + t11;
            case 5495:
            case 3959:
              return rS(t11, /(image-set\([^]*)/, ry + "$1$`$1");
            case 4968:
              return rS(rS(t11, /(.+:)(flex-)?(.*)/, ry + "box-pack:$3" + rb + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ry + t11 + t11;
            case 4095:
            case 3583:
            case 4068:
            case 2532:
              return rS(t11, /(.+)-inline(.+)/, ry + "$1$2") + t11;
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
              if (rR(t11) - 1 - r11 > 6)
                switch (rD(t11, r11 + 1)) {
                  case 109:
                    if (45 !== rD(t11, r11 + 4))
                      break;
                  case 102:
                    return rS(t11, /(.+:)(.+)-([^]+)/, "$1" + ry + "$2-$3$1" + rv + (108 == rD(t11, r11 + 3) ? "$3" : "$2-$3")) + t11;
                  case 115:
                    return ~rO(t11, "stretch") ? e15(rS(t11, "stretch", "fill-available"), r11) + t11 : t11;
                }
              break;
            case 4949:
              if (115 !== rD(t11, r11 + 1))
                break;
            case 6444:
              switch (rD(t11, rR(t11) - 3 - (~rO(t11, "!important") && 10))) {
                case 107:
                  return rS(t11, ":", ":" + ry) + t11;
                case 101:
                  return rS(t11, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ry + (45 === rD(t11, 14) ? "inline-" : "") + "box$3$1" + ry + "$2$3$1" + rb + "$2box$3") + t11;
              }
              break;
            case 5936:
              switch (rD(t11, r11 + 11)) {
                case 114:
                  return ry + t11 + rb + rS(t11, /[svh]\w+-[tblr]{2}/, "tb") + t11;
                case 108:
                  return ry + t11 + rb + rS(t11, /[svh]\w+-[tblr]{2}/, "tb-rl") + t11;
                case 45:
                  return ry + t11 + rb + rS(t11, /[svh]\w+-[tblr]{2}/, "lr") + t11;
              }
              return ry + t11 + rb + t11 + t11;
          }
          return t11;
        }(e14.value, e14.length);
        break;
      case rM:
        return rY([rV(e14, { value: rS(e14.value, "@", "@" + ry) })], n6);
      case rw:
        if (e14.length)
          return e14.props.map(function(t11) {
            var r11;
            switch (r11 = t11, (r11 = /(::plac\w+|:read-\w+)/.exec(r11)) ? r11[0] : r11) {
              case ":read-only":
              case ":read-write":
                return rY([rV(e14, { props: [rS(t11, /:(read-\w+)/, ":" + rv + "$1")] })], n6);
              case "::placeholder":
                return rY([rV(e14, { props: [rS(t11, /:(plac\w+)/, ":" + ry + "input-$1")] }), rV(e14, { props: [rS(t11, /:(plac\w+)/, ":" + rv + "$1")] }), rV(e14, { props: [rS(t11, /:(plac\w+)/, rb + "input-$1")] })], n6);
            }
            return "";
          }).join("");
    }
}], r4 = function(e14) {
  var t10, r10, n6, a2, i2, o2 = e14.key;
  if ("css" === o2) {
    var s2 = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(s2, function(e15) {
      -1 !== e15.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e15), e15.setAttribute("data-s", ""));
    });
  }
  var l2 = e14.stylisPlugins || r2, c2 = {}, u2 = [];
  a2 = e14.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + o2 + ' "]'), function(e15) {
    for (var t11 = e15.getAttribute("data-emotion").split(" "), r11 = 1; r11 < t11.length; r11++)
      c2[t11[r11]] = true;
    u2.push(e15);
  });
  var d2 = (r10 = (t10 = [r0, r1].concat(l2, [rX, (n6 = function(e15) {
    i2.insert(e15);
  }, function(e15) {
    !e15.root && (e15 = e15.return) && n6(e15);
  })])).length, function(e15, n7, a3, i3) {
    for (var o3 = "", s3 = 0; s3 < r10; s3++)
      o3 += t10[s3](e15, n7, a3, i3) || "";
    return o3;
  }), f2 = function(e15) {
    var t11, r11;
    return rY((r11 = function e16(t12, r12, n7, a3, i3, o3, s3, l3, c3) {
      for (var u3, d3 = 0, f3 = 0, h3 = s3, p2 = 0, m2 = 0, g2 = 0, b2 = 1, v2 = 1, y2 = 1, x2 = 0, w2 = "", k2 = i3, M2 = o3, C2 = a3, P2 = w2; v2; )
        switch (g2 = x2, x2 = rH()) {
          case 40:
            if (108 != g2 && 58 == rD(P2, h3 - 1)) {
              -1 != rO(P2 += rS(rq(x2), "&", "&\f"), "&\f") && (y2 = -1);
              break;
            }
          case 34:
          case 39:
          case 91:
            P2 += rq(x2);
            break;
          case 9:
          case 10:
          case 13:
          case 32:
            P2 += function(e17) {
              for (; rB = rz(); )
                if (rB < 33)
                  rH();
                else
                  break;
              return rW(e17) > 2 || rW(rB) > 3 ? "" : " ";
            }(g2);
            break;
          case 92:
            P2 += function(e17, t13) {
              for (var r13; --t13 && rH() && !(rB < 48) && !(rB > 102) && (!(rB > 57) || !(rB < 65)) && (!(rB > 70) || !(rB < 97)); )
                ;
              return r13 = rF + (t13 < 6 && 32 == rz() && 32 == rH()), rT(rj, e17, r13);
            }(rF - 1, 7);
            continue;
          case 47:
            switch (rz()) {
              case 42:
              case 47:
                r$(rE(u3 = function(e17, t13) {
                  for (; rH(); )
                    if (e17 + rB === 57)
                      break;
                    else if (e17 + rB === 84 && 47 === rz())
                      break;
                  return "/*" + rT(rj, t13, rF - 1) + "*" + rP(47 === e17 ? e17 : rH());
                }(rH(), rF), r12, n7, rx, rP(rB), rT(u3, 2, -2), 0), c3);
                break;
              default:
                P2 += "/";
            }
            break;
          case 123 * b2:
            l3[d3++] = rR(P2) * y2;
          case 125 * b2:
          case 59:
          case 0:
            switch (x2) {
              case 0:
              case 125:
                v2 = 0;
              case 59 + f3:
                -1 == y2 && (P2 = rS(P2, /\f/g, "")), m2 > 0 && rR(P2) - h3 && r$(m2 > 32 ? rG(P2 + ";", a3, n7, h3 - 1) : rG(rS(P2, " ", "") + ";", a3, n7, h3 - 2), c3);
                break;
              case 59:
                P2 += ";";
              default:
                if (r$(C2 = rU(P2, r12, n7, d3, f3, i3, l3, w2, k2 = [], M2 = [], h3), o3), 123 === x2) {
                  if (0 === f3)
                    e16(P2, r12, C2, C2, k2, o3, h3, l3, M2);
                  else
                    switch (99 === p2 && 110 === rD(P2, 3) ? 100 : p2) {
                      case 100:
                      case 108:
                      case 109:
                      case 115:
                        e16(t12, C2, C2, a3 && r$(rU(t12, C2, C2, 0, 0, i3, l3, w2, i3, k2 = [], h3), M2), i3, M2, h3, l3, a3 ? k2 : M2);
                        break;
                      default:
                        e16(P2, C2, C2, C2, [""], M2, 0, l3, M2);
                    }
                }
            }
            d3 = f3 = m2 = 0, b2 = y2 = 1, w2 = P2 = "", h3 = s3;
            break;
          case 58:
            h3 = 1 + rR(P2), m2 = g2;
          default:
            if (b2 < 1) {
              if (123 == x2)
                --b2;
              else if (125 == x2 && 0 == b2++ && 125 == (rB = rF > 0 ? rD(rj, --rF) : 0, rI--, 10 === rB && (rI = 1, rA--), rB))
                continue;
            }
            switch (P2 += rP(x2), x2 * b2) {
              case 38:
                y2 = f3 > 0 ? 1 : (P2 += "\f", -1);
                break;
              case 44:
                l3[d3++] = (rR(P2) - 1) * y2, y2 = 1;
                break;
              case 64:
                45 === rz() && (P2 += rq(rH())), p2 = rz(), f3 = h3 = rR(w2 = P2 += function(e17) {
                  for (; !rW(rz()); )
                    rH();
                  return rT(rj, e17, rF);
                }(rF)), x2++;
                break;
              case 45:
                45 === g2 && 2 == rR(P2) && (b2 = 0);
            }
        }
      return o3;
    }("", null, null, null, [""], t11 = rN(t11 = e15), 0, [0], t11), rj = "", r11), d2);
  }, h2 = { key: o2, sheet: new rg({ key: o2, container: a2, nonce: e14.nonce, speedy: e14.speedy, prepend: e14.prepend, insertionPoint: e14.insertionPoint }), nonce: e14.nonce, inserted: c2, registered: {}, insert: function(e15, t11, r11, n7) {
    i2 = r11, f2(e15 ? e15 + "{" + t11.styles + "}" : t11.styles), n7 && (h2.inserted[t11.name] = true);
  } };
  return h2.sheet.hydrate(u2), h2;
};
let r5 = n(() => r4({ key: "css" }), { name: "Cache" }), r3 = (e14) => (t10) => {
  if (t10.serialized) {
    if (t10.withoutScoping)
      e14.insert("", t10.serialized, e14.sheet, true);
    else {
      var r10;
      rm(e14, t10.serialized, null === (r10 = t10.isStringTag) || void 0 === r10 || r10);
    }
  }
}, r8 = e({ sx: L(), component: L().optional().default("div") }, (e14, r10) => {
  var n6;
  let { slots: i2 } = r10, o2 = rh.use(), s2 = r5.use(), l2 = o2.unstable_css(s2, null !== (n6 = e14.sx) && void 0 !== n6 ? n6 : {}), c2 = () => "0" != l2.name ? `${s2.key}-${l2.name}` : "", u2 = r3(s2);
  return a(() => {
    u2({ serialized: l2, isStringTag: true });
  }), () => {
    var r11;
    let n7 = null !== (r11 = e14.component) && void 0 !== r11 ? r11 : "div";
    return t(n7, { class: c2(), children: i2 });
  };
}), r6 = Object.assign(r8, { displayName: "Box" }), r9 = (e14, r10) => (n6) => {
  let a2 = {};
  for (let t10 in e14)
    "component" !== t10 && "sx" !== t10 && e14[t10] && (a2[`data-${t10}`] = e14[t10]);
  return t(n6, { ...a2, children: r10.slots });
};
function r7(t10, r10, n6) {
  var l2;
  let c2 = null !== (l2 = P(r10) ? r10 : n6) && void 0 !== l2 ? l2 : r9, u2 = y(r10) ? r10 : {};
  return (r11) => {
    let n7 = e({ ...u2, sx: L().optional(), component: L().optional() }, (e14, l3) => {
      let u3 = rh.use(), d2 = r5.use(), f2 = r3(d2);
      r11.label = n7.name;
      let h2 = i(""), p2 = u3.unstable_css(d2, r11), m2 = () => "0" != p2.name ? `${d2.key}-${p2.name}${h2.value}` : `${h2.value}`;
      if (t10.__styled) {
        var g2;
        let t11 = u3.unstable_css(d2, null !== (g2 = e14.sx) && void 0 !== g2 ? g2 : {});
        "0" != t11.name && (h2.value = ` ${d2.key}-${t11.name}`), a(() => {
          f2({ serialized: p2, isStringTag: true }), f2({ serialized: t11, isStringTag: true });
        });
      } else
        o(() => {
          f2({ serialized: p2, isStringTag: true });
        });
      let b2 = c2(e14, l3);
      return () => {
        if (t10.__styled) {
          let r13 = b2(t10);
          return r13 ? s(r13, { component: e14.component, class: m2() }) : null;
        }
        let r12 = b2(r6);
        return r12 ? s(r12, { component: e14.component || t10, sx: e14.sx, class: m2() }) : null;
      };
    });
    return n7.__styled = true, n7;
  };
}
let ne = e({ styles: L() }, (e14) => {
  let { styles: t10 } = e14, r10 = rh.use(), n6 = r5.use(), a2 = r3(n6), i2 = r10.unstable_css(n6, v(t10) ? { "&": t10 } : t10);
  return o(() => {
    a2({ serialized: i2, withoutScoping: true });
  }), () => null;
}), nt = Object.assign(ne, { displayName: "GlobalStyle" }), nr = e(() => {
  let e14 = rh.use(), r10 = e14.rootCSSVars;
  return () => t(nt, { styles: { ":host, :root, [data-theme]": r10, "*, *::after, *::before": { boxSizing: "border-box" }, html: { fontSize: "10px" }, a: { color: "inherit" }, body: { textStyle: "sys.body-medium" } } });
}), nn = Object.assign(nr, { displayName: "CSSReset" }), na = n(() => ({ mountPoint: () => document.body }), { name: "OverlaySetting" }), ni = n(() => new no(i(null), i(null), () => false), { name: "Overlay" });
class no {
  topmost() {
    return 0 == this.children.filter((e14) => e14.isOpen()).length;
  }
  constructor(e14, t10, r10) {
    this.triggerRef = e14, this.contentRef = t10, this.isOpen = r10, this.children = [], this.add = (e15) => (this.children = [...this.children, e15], () => {
      this.children = this.children.filter((t11) => t11 !== e15);
    }), this.isClickInside = (e15) => {
      for (let t12 of this.children)
        if (t12.isClickInside(e15))
          return true;
      let t11 = l(this.triggerRef), r11 = l(this.contentRef);
      return t11 && (t11 === e15.target || e15.composedPath().includes(t11)) || r11 && (r11 === e15.target || e15.composedPath().includes(r11));
    };
  }
}
let ns = e({ isOpen: F().optional(), style: L().optional(), contentRef: L().optional(), triggerRef: L().optional(), onClickOutside: L(), onEscKeydown: L(), onContentBeforeMount: L(), $transition: L().optional(), $default: L().optional() }, (e14, r10) => {
  var n6;
  let { slots: a2, attrs: o2, emit: l2 } = r10, m2 = e14.contentRef || i(null), g2 = new no(null !== (n6 = e14.triggerRef) && void 0 !== n6 ? n6 : i(null), m2, () => !!e14.isOpen), b2 = na.use(), v2 = ni.use();
  return c(v2.add(g2)), window && u(d(m2, "value"), p((e15) => {
    if (!e15)
      return;
    let t10 = (e16) => {
      g2.isClickInside(e16) || l2("click-outside", e16);
    };
    return window.addEventListener("pointerdown", t10), () => {
      window.removeEventListener("pointerdown", t10);
    };
  }), p((e15) => {
    if (!e15)
      return;
    let t10 = (e16) => {
      "Escape" === e16.key && g2.topmost() && l2("esc-keydown", e16);
    };
    return window.addEventListener("keydown", t10), () => {
      window.removeEventListener("keydown", t10);
    };
  }), h()), () => {
    var r11;
    let n7 = e14.isOpen ? s(t("div", { ...o2, ref: m2, style: e14.style, children: t(ni, { value: g2, children: null === (r11 = a2.default) || void 0 === r11 ? void 0 : r11.call(a2) }) }), { onVnodeBeforeMount: () => {
      l2("content-before-mount");
    } }) : null;
    return t(f, { to: b2.mountPoint(), children: a2.transition ? a2.transition({ content: n7 }) : n7 });
  };
}, { inheritAttrs: false, name: "Overlay" }), nl = Object.assign(ns, { displayName: "Overlay" });
var nc = "bottom", nu = "right", nd = "left", nf = "auto", nh = ["top", nc, nu, nd], np = "start", nm = "viewport", ng = "popper", nb = nh.reduce(function(e14, t10) {
  return e14.concat([t10 + "-" + np, t10 + "-end"]);
}, []), nv = [].concat(nh, [nf]).reduce(function(e14, t10) {
  return e14.concat([t10, t10 + "-" + np, t10 + "-end"]);
}, []), ny = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
function nx(e14) {
  return e14 ? (e14.nodeName || "").toLowerCase() : null;
}
function nw(e14) {
  if (null == e14)
    return window;
  if ("[object Window]" !== e14.toString()) {
    var t10 = e14.ownerDocument;
    return t10 && t10.defaultView || window;
  }
  return e14;
}
function nk(e14) {
  var t10 = nw(e14).Element;
  return e14 instanceof t10 || e14 instanceof Element;
}
function nM(e14) {
  var t10 = nw(e14).HTMLElement;
  return e14 instanceof t10 || e14 instanceof HTMLElement;
}
function nC(e14) {
  if ("undefined" == typeof ShadowRoot)
    return false;
  var t10 = nw(e14).ShadowRoot;
  return e14 instanceof t10 || e14 instanceof ShadowRoot;
}
function nP(e14) {
  return e14.split("-")[0];
}
var n_ = Math.max, nS = Math.min, nO = Math.round;
function nD() {
  var e14 = navigator.userAgentData;
  return null != e14 && e14.brands && Array.isArray(e14.brands) ? e14.brands.map(function(e15) {
    return e15.brand + "/" + e15.version;
  }).join(" ") : navigator.userAgent;
}
function nT() {
  return !/^((?!chrome|android).)*safari/i.test(nD());
}
function nR(e14, t10, r10) {
  void 0 === t10 && (t10 = false), void 0 === r10 && (r10 = false);
  var n6 = e14.getBoundingClientRect(), a2 = 1, i2 = 1;
  t10 && nM(e14) && (a2 = e14.offsetWidth > 0 && nO(n6.width) / e14.offsetWidth || 1, i2 = e14.offsetHeight > 0 && nO(n6.height) / e14.offsetHeight || 1);
  var o2 = (nk(e14) ? nw(e14) : window).visualViewport, s2 = !nT() && r10, l2 = (n6.left + (s2 && o2 ? o2.offsetLeft : 0)) / a2, c2 = (n6.top + (s2 && o2 ? o2.offsetTop : 0)) / i2, u2 = n6.width / a2, d2 = n6.height / i2;
  return { width: u2, height: d2, top: c2, right: l2 + u2, bottom: c2 + d2, left: l2, x: l2, y: c2 };
}
function n$(e14) {
  return nw(e14).getComputedStyle(e14);
}
function nA(e14) {
  return ((nk(e14) ? e14.ownerDocument : e14.document) || window.document).documentElement;
}
function nI(e14) {
  return "html" === nx(e14) ? e14 : e14.assignedSlot || e14.parentNode || (nC(e14) ? e14.host : null) || nA(e14);
}
function nL(e14) {
  return nM(e14) && "fixed" !== n$(e14).position ? e14.offsetParent : null;
}
function nF(e14) {
  for (var t10 = nw(e14), r10 = nL(e14); r10 && ["table", "td", "th"].indexOf(nx(r10)) >= 0 && "static" === n$(r10).position; )
    r10 = nL(r10);
  return r10 && ("html" === nx(r10) || "body" === nx(r10) && "static" === n$(r10).position) ? t10 : r10 || function(e15) {
    var t11 = /firefox/i.test(nD());
    if (/Trident/i.test(nD()) && nM(e15) && "fixed" === n$(e15).position)
      return null;
    var r11 = nI(e15);
    for (nC(r11) && (r11 = r11.host); nM(r11) && 0 > ["html", "body"].indexOf(nx(r11)); ) {
      var n6 = n$(r11);
      if ("none" !== n6.transform || "none" !== n6.perspective || "paint" === n6.contain || -1 !== ["transform", "perspective"].indexOf(n6.willChange) || t11 && "filter" === n6.willChange || t11 && n6.filter && "none" !== n6.filter)
        return r11;
      r11 = r11.parentNode;
    }
    return null;
  }(e14) || t10;
}
function nB(e14) {
  return e14.split("-")[1];
}
var nj = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function nE(e14) {
  var t10, r10, n6, a2, i2, o2, s2, l2 = e14.popper, c2 = e14.popperRect, u2 = e14.placement, d2 = e14.variation, f2 = e14.offsets, h2 = e14.position, p2 = e14.gpuAcceleration, m2 = e14.adaptive, g2 = e14.roundOffsets, b2 = e14.isFixed, v2 = f2.x, y2 = void 0 === v2 ? 0 : v2, x2 = f2.y, w2 = void 0 === x2 ? 0 : x2, k2 = "function" == typeof g2 ? g2({ x: y2, y: w2 }) : { x: y2, y: w2 };
  y2 = k2.x, w2 = k2.y;
  var M2 = f2.hasOwnProperty("x"), C2 = f2.hasOwnProperty("y"), P2 = nd, _2 = "top", S2 = window;
  if (m2) {
    var O2 = nF(l2), D2 = "clientHeight", T2 = "clientWidth";
    O2 === nw(l2) && "static" !== n$(O2 = nA(l2)).position && "absolute" === h2 && (D2 = "scrollHeight", T2 = "scrollWidth"), ("top" === u2 || (u2 === nd || u2 === nu) && "end" === d2) && (_2 = nc, w2 -= (b2 && O2 === S2 && S2.visualViewport ? S2.visualViewport.height : O2[D2]) - c2.height, w2 *= p2 ? 1 : -1), (u2 === nd || ("top" === u2 || u2 === nc) && "end" === d2) && (P2 = nu, y2 -= (b2 && O2 === S2 && S2.visualViewport ? S2.visualViewport.width : O2[T2]) - c2.width, y2 *= p2 ? 1 : -1);
  }
  var R2 = Object.assign({ position: h2 }, m2 && nj), $2 = true === g2 ? (t10 = { x: y2, y: w2 }, r10 = nw(l2), n6 = t10.x, a2 = t10.y, { x: nO(n6 * (i2 = r10.devicePixelRatio || 1)) / i2 || 0, y: nO(a2 * i2) / i2 || 0 }) : { x: y2, y: w2 };
  return (y2 = $2.x, w2 = $2.y, p2) ? Object.assign({}, R2, ((s2 = {})[_2] = C2 ? "0" : "", s2[P2] = M2 ? "0" : "", s2.transform = 1 >= (S2.devicePixelRatio || 1) ? "translate(" + y2 + "px, " + w2 + "px)" : "translate3d(" + y2 + "px, " + w2 + "px, 0)", s2)) : Object.assign({}, R2, ((o2 = {})[_2] = C2 ? w2 + "px" : "", o2[P2] = M2 ? y2 + "px" : "", o2.transform = "", o2));
}
var nV = { passive: true }, nH = { left: "right", right: "left", bottom: "top", top: "bottom" };
function nz(e14) {
  return e14.replace(/left|right|bottom|top/g, function(e15) {
    return nH[e15];
  });
}
var nW = { start: "end", end: "start" };
function nN(e14) {
  return e14.replace(/start|end/g, function(e15) {
    return nW[e15];
  });
}
function nq(e14) {
  var t10 = nw(e14);
  return { scrollLeft: t10.pageXOffset, scrollTop: t10.pageYOffset };
}
function nU(e14) {
  return nR(nA(e14)).left + nq(e14).scrollLeft;
}
function nG(e14) {
  var t10 = n$(e14), r10 = t10.overflow, n6 = t10.overflowX, a2 = t10.overflowY;
  return /auto|scroll|overlay|hidden/.test(r10 + a2 + n6);
}
function nY(e14, t10) {
  void 0 === t10 && (t10 = []);
  var r10, n6 = function e15(t11) {
    return ["html", "body", "#document"].indexOf(nx(t11)) >= 0 ? t11.ownerDocument.body : nM(t11) && nG(t11) ? t11 : e15(nI(t11));
  }(e14), a2 = n6 === (null == (r10 = e14.ownerDocument) ? void 0 : r10.body), i2 = nw(n6), o2 = a2 ? [i2].concat(i2.visualViewport || [], nG(n6) ? n6 : []) : n6, s2 = t10.concat(o2);
  return a2 ? s2 : s2.concat(nY(nI(o2)));
}
function nX(e14) {
  return Object.assign({}, e14, { left: e14.x, top: e14.y, right: e14.x + e14.width, bottom: e14.y + e14.height });
}
function nK(e14, t10, r10) {
  var n6, a2, i2, o2, s2, l2, c2, u2, d2, f2;
  return t10 === nm ? nX(function(e15, t11) {
    var r11 = nw(e15), n7 = nA(e15), a3 = r11.visualViewport, i3 = n7.clientWidth, o3 = n7.clientHeight, s3 = 0, l3 = 0;
    if (a3) {
      i3 = a3.width, o3 = a3.height;
      var c3 = nT();
      (c3 || !c3 && "fixed" === t11) && (s3 = a3.offsetLeft, l3 = a3.offsetTop);
    }
    return { width: i3, height: o3, x: s3 + nU(e15), y: l3 };
  }(e14, r10)) : nk(t10) ? ((n6 = nR(t10, false, "fixed" === r10)).top = n6.top + t10.clientTop, n6.left = n6.left + t10.clientLeft, n6.bottom = n6.top + t10.clientHeight, n6.right = n6.left + t10.clientWidth, n6.width = t10.clientWidth, n6.height = t10.clientHeight, n6.x = n6.left, n6.y = n6.top, n6) : nX((a2 = nA(e14), o2 = nA(a2), s2 = nq(a2), l2 = null == (i2 = a2.ownerDocument) ? void 0 : i2.body, c2 = n_(o2.scrollWidth, o2.clientWidth, l2 ? l2.scrollWidth : 0, l2 ? l2.clientWidth : 0), u2 = n_(o2.scrollHeight, o2.clientHeight, l2 ? l2.scrollHeight : 0, l2 ? l2.clientHeight : 0), d2 = -s2.scrollLeft + nU(a2), f2 = -s2.scrollTop, "rtl" === n$(l2 || o2).direction && (d2 += n_(o2.clientWidth, l2 ? l2.clientWidth : 0) - c2), { width: c2, height: u2, x: d2, y: f2 }));
}
function nJ(e14) {
  var t10, r10 = e14.reference, n6 = e14.element, a2 = e14.placement, i2 = a2 ? nP(a2) : null, o2 = a2 ? nB(a2) : null, s2 = r10.x + r10.width / 2 - n6.width / 2, l2 = r10.y + r10.height / 2 - n6.height / 2;
  switch (i2) {
    case "top":
      t10 = { x: s2, y: r10.y - n6.height };
      break;
    case nc:
      t10 = { x: s2, y: r10.y + r10.height };
      break;
    case nu:
      t10 = { x: r10.x + r10.width, y: l2 };
      break;
    case nd:
      t10 = { x: r10.x - n6.width, y: l2 };
      break;
    default:
      t10 = { x: r10.x, y: r10.y };
  }
  var c2 = i2 ? ["top", "bottom"].indexOf(i2) >= 0 ? "x" : "y" : null;
  if (null != c2) {
    var u2 = "y" === c2 ? "height" : "width";
    switch (o2) {
      case np:
        t10[c2] = t10[c2] - (r10[u2] / 2 - n6[u2] / 2);
        break;
      case "end":
        t10[c2] = t10[c2] + (r10[u2] / 2 - n6[u2] / 2);
    }
  }
  return t10;
}
function nZ(e14, t10) {
  void 0 === t10 && (t10 = {});
  var r10, n6, a2, i2, o2, s2, l2, c2 = t10, u2 = c2.placement, d2 = void 0 === u2 ? e14.placement : u2, f2 = c2.strategy, h2 = void 0 === f2 ? e14.strategy : f2, p2 = c2.boundary, m2 = c2.rootBoundary, g2 = c2.elementContext, b2 = void 0 === g2 ? ng : g2, v2 = c2.altBoundary, y2 = c2.padding, x2 = void 0 === y2 ? 0 : y2, w2 = Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, "number" != typeof x2 ? x2 : nh.reduce(function(e15, t11) {
    return e15[t11] = x2, e15;
  }, {})), k2 = e14.rects.popper, M2 = e14.elements[void 0 !== v2 && v2 ? b2 === ng ? "reference" : ng : b2], C2 = (r10 = nk(M2) ? M2 : M2.contextElement || nA(e14.elements.popper), s2 = (o2 = [].concat("clippingParents" === (n6 = void 0 === p2 ? "clippingParents" : p2) ? (a2 = nY(nI(r10)), nk(i2 = ["absolute", "fixed"].indexOf(n$(r10).position) >= 0 && nM(r10) ? nF(r10) : r10) ? a2.filter(function(e15) {
    return nk(e15) && function(e16, t11) {
      var r11 = t11.getRootNode && t11.getRootNode();
      if (e16.contains(t11))
        return true;
      if (r11 && nC(r11)) {
        var n7 = t11;
        do {
          if (n7 && e16.isSameNode(n7))
            return true;
          n7 = n7.parentNode || n7.host;
        } while (n7);
      }
      return false;
    }(e15, i2) && "body" !== nx(e15);
  }) : []) : [].concat(n6), [void 0 === m2 ? nm : m2]))[0], (l2 = o2.reduce(function(e15, t11) {
    var n7 = nK(r10, t11, h2);
    return e15.top = n_(n7.top, e15.top), e15.right = nS(n7.right, e15.right), e15.bottom = nS(n7.bottom, e15.bottom), e15.left = n_(n7.left, e15.left), e15;
  }, nK(r10, s2, h2))).width = l2.right - l2.left, l2.height = l2.bottom - l2.top, l2.x = l2.left, l2.y = l2.top, l2), P2 = nR(e14.elements.reference), _2 = nJ({ reference: P2, element: k2, strategy: "absolute", placement: d2 }), S2 = nX(Object.assign({}, k2, _2)), O2 = b2 === ng ? S2 : P2, D2 = { top: C2.top - O2.top + w2.top, bottom: O2.bottom - C2.bottom + w2.bottom, left: C2.left - O2.left + w2.left, right: O2.right - C2.right + w2.right }, T2 = e14.modifiersData.offset;
  if (b2 === ng && T2) {
    var R2 = T2[d2];
    Object.keys(D2).forEach(function(e15) {
      var t11 = [nu, nc].indexOf(e15) >= 0 ? 1 : -1, r11 = ["top", nc].indexOf(e15) >= 0 ? "y" : "x";
      D2[e15] += R2[r11] * t11;
    });
  }
  return D2;
}
let nQ = { name: "flip", enabled: true, phase: "main", fn: function(e14) {
  var t10 = e14.state, r10 = e14.options, n6 = e14.name;
  if (!t10.modifiersData[n6]._skip) {
    for (var a2 = r10.mainAxis, i2 = void 0 === a2 || a2, o2 = r10.altAxis, s2 = void 0 === o2 || o2, l2 = r10.fallbackPlacements, c2 = r10.padding, u2 = r10.boundary, d2 = r10.rootBoundary, f2 = r10.altBoundary, h2 = r10.flipVariations, p2 = void 0 === h2 || h2, m2 = r10.allowedAutoPlacements, g2 = t10.options.placement, b2 = nP(g2) === g2, v2 = l2 || (b2 || !p2 ? [nz(g2)] : function(e15) {
      if (nP(e15) === nf)
        return [];
      var t11 = nz(e15);
      return [nN(e15), t11, nN(t11)];
    }(g2)), y2 = [g2].concat(v2).reduce(function(e15, r11) {
      var n7, a3, i3, o3, s3, l3, f3, h3, g3, b3, v3, y3;
      return e15.concat(nP(r11) === nf ? (a3 = (n7 = { placement: r11, boundary: u2, rootBoundary: d2, padding: c2, flipVariations: p2, allowedAutoPlacements: m2 }).placement, i3 = n7.boundary, o3 = n7.rootBoundary, s3 = n7.padding, l3 = n7.flipVariations, h3 = void 0 === (f3 = n7.allowedAutoPlacements) ? nv : f3, 0 === (v3 = (b3 = (g3 = nB(a3)) ? l3 ? nb : nb.filter(function(e16) {
        return nB(e16) === g3;
      }) : nh).filter(function(e16) {
        return h3.indexOf(e16) >= 0;
      })).length && (v3 = b3), Object.keys(y3 = v3.reduce(function(e16, r12) {
        return e16[r12] = nZ(t10, { placement: r12, boundary: i3, rootBoundary: o3, padding: s3 })[nP(r12)], e16;
      }, {})).sort(function(e16, t11) {
        return y3[e16] - y3[t11];
      })) : r11);
    }, []), x2 = t10.rects.reference, w2 = t10.rects.popper, k2 = /* @__PURE__ */ new Map(), M2 = true, C2 = y2[0], P2 = 0; P2 < y2.length; P2++) {
      var _2 = y2[P2], S2 = nP(_2), O2 = nB(_2) === np, D2 = ["top", nc].indexOf(S2) >= 0, T2 = D2 ? "width" : "height", R2 = nZ(t10, { placement: _2, boundary: u2, rootBoundary: d2, altBoundary: f2, padding: c2 }), $2 = D2 ? O2 ? nu : nd : O2 ? nc : "top";
      x2[T2] > w2[T2] && ($2 = nz($2));
      var A2 = nz($2), I2 = [];
      if (i2 && I2.push(R2[S2] <= 0), s2 && I2.push(R2[$2] <= 0, R2[A2] <= 0), I2.every(function(e15) {
        return e15;
      })) {
        C2 = _2, M2 = false;
        break;
      }
      k2.set(_2, I2);
    }
    if (M2)
      for (var L2 = p2 ? 3 : 1, F2 = function(e15) {
        var t11 = y2.find(function(t12) {
          var r11 = k2.get(t12);
          if (r11)
            return r11.slice(0, e15).every(function(e16) {
              return e16;
            });
        });
        if (t11)
          return C2 = t11, "break";
      }, B2 = L2; B2 > 0 && "break" !== F2(B2); B2--)
        ;
    t10.placement !== C2 && (t10.modifiersData[n6]._skip = true, t10.placement = C2, t10.reset = true);
  }
}, requiresIfExists: ["offset"], data: { _skip: false } };
var n0 = { placement: "bottom", modifiers: [], strategy: "absolute" };
function n1() {
  for (var e14 = arguments.length, t10 = Array(e14), r10 = 0; r10 < e14; r10++)
    t10[r10] = arguments[r10];
  return !t10.some(function(e15) {
    return !(e15 && "function" == typeof e15.getBoundingClientRect);
  });
}
var n2 = function(e14) {
  void 0 === e14 && (e14 = {});
  var t10 = e14, r10 = t10.defaultModifiers, n6 = void 0 === r10 ? [] : r10, a2 = t10.defaultOptions, i2 = void 0 === a2 ? n0 : a2;
  return function(e15, t11, r11) {
    void 0 === r11 && (r11 = i2);
    var a3, o2 = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, n0, i2), modifiersData: {}, elements: { reference: e15, popper: t11 }, attributes: {}, styles: {} }, s2 = [], l2 = false, c2 = { state: o2, setOptions: function(r12) {
      var a4, l3, d2, f2, h2, p2 = "function" == typeof r12 ? r12(o2.options) : r12;
      u2(), o2.options = Object.assign({}, i2, o2.options, p2), o2.scrollParents = { reference: nk(e15) ? nY(e15) : e15.contextElement ? nY(e15.contextElement) : [], popper: nY(t11) };
      var m2 = (l3 = Object.keys(a4 = [].concat(n6, o2.options.modifiers).reduce(function(e16, t12) {
        var r13 = e16[t12.name];
        return e16[t12.name] = r13 ? Object.assign({}, r13, t12, { options: Object.assign({}, r13.options, t12.options), data: Object.assign({}, r13.data, t12.data) }) : t12, e16;
      }, {})).map(function(e16) {
        return a4[e16];
      }), d2 = /* @__PURE__ */ new Map(), f2 = /* @__PURE__ */ new Set(), h2 = [], l3.forEach(function(e16) {
        d2.set(e16.name, e16);
      }), l3.forEach(function(e16) {
        f2.has(e16.name) || function e17(t12) {
          f2.add(t12.name), [].concat(t12.requires || [], t12.requiresIfExists || []).forEach(function(t13) {
            if (!f2.has(t13)) {
              var r13 = d2.get(t13);
              r13 && e17(r13);
            }
          }), h2.push(t12);
        }(e16);
      }), ny.reduce(function(e16, t12) {
        return e16.concat(h2.filter(function(e17) {
          return e17.phase === t12;
        }));
      }, []));
      return o2.orderedModifiers = m2.filter(function(e16) {
        return e16.enabled;
      }), o2.orderedModifiers.forEach(function(e16) {
        var t12 = e16.name, r13 = e16.options, n7 = e16.effect;
        if ("function" == typeof n7) {
          var a5 = n7({ state: o2, name: t12, instance: c2, options: void 0 === r13 ? {} : r13 });
          s2.push(a5 || function() {
          });
        }
      }), c2.update();
    }, forceUpdate: function() {
      if (!l2) {
        var e16, t12, r12, n7, a4, i3, s3, u3, d2, f2, h2, p2, m2, g2, b2, v2 = o2.elements, y2 = v2.reference, x2 = v2.popper;
        if (n1(y2, x2)) {
          o2.rects = { reference: (t12 = nF(x2), r12 = "fixed" === o2.options.strategy, n7 = nM(t12), u3 = nM(t12) && (i3 = nO((a4 = t12.getBoundingClientRect()).width) / t12.offsetWidth || 1, s3 = nO(a4.height) / t12.offsetHeight || 1, 1 !== i3 || 1 !== s3), d2 = nA(t12), f2 = nR(y2, u3, r12), h2 = { scrollLeft: 0, scrollTop: 0 }, p2 = { x: 0, y: 0 }, (n7 || !n7 && !r12) && (("body" !== nx(t12) || nG(d2)) && (h2 = (e16 = t12) !== nw(e16) && nM(e16) ? { scrollLeft: e16.scrollLeft, scrollTop: e16.scrollTop } : nq(e16)), nM(t12) ? (p2 = nR(t12, true), p2.x += t12.clientLeft, p2.y += t12.clientTop) : d2 && (p2.x = nU(d2))), { x: f2.left + h2.scrollLeft - p2.x, y: f2.top + h2.scrollTop - p2.y, width: f2.width, height: f2.height }), popper: (m2 = nR(x2), g2 = x2.offsetWidth, b2 = x2.offsetHeight, 1 >= Math.abs(m2.width - g2) && (g2 = m2.width), 1 >= Math.abs(m2.height - b2) && (b2 = m2.height), { x: x2.offsetLeft, y: x2.offsetTop, width: g2, height: b2 }) }, o2.reset = false, o2.placement = o2.options.placement, o2.orderedModifiers.forEach(function(e17) {
            return o2.modifiersData[e17.name] = Object.assign({}, e17.data);
          });
          for (var w2 = 0; w2 < o2.orderedModifiers.length; w2++) {
            if (true === o2.reset) {
              o2.reset = false, w2 = -1;
              continue;
            }
            var k2 = o2.orderedModifiers[w2], M2 = k2.fn, C2 = k2.options, P2 = void 0 === C2 ? {} : C2, _2 = k2.name;
            "function" == typeof M2 && (o2 = M2({ state: o2, options: P2, name: _2, instance: c2 }) || o2);
          }
        }
      }
    }, update: function() {
      return a3 || (a3 = new Promise(function(e16) {
        Promise.resolve().then(function() {
          a3 = void 0, e16(new Promise(function(e17) {
            c2.forceUpdate(), e17(o2);
          }));
        });
      })), a3;
    }, destroy: function() {
      u2(), l2 = true;
    } };
    if (!n1(e15, t11))
      return c2;
    function u2() {
      s2.forEach(function(e16) {
        return e16();
      }), s2 = [];
    }
    return c2.setOptions(r11).then(function(e16) {
      !l2 && r11.onFirstUpdate && r11.onFirstUpdate(e16);
    }), c2;
  };
}({ defaultModifiers: [{ name: "eventListeners", enabled: true, phase: "write", fn: function() {
}, effect: function(e14) {
  var t10 = e14.state, r10 = e14.instance, n6 = e14.options, a2 = n6.scroll, i2 = void 0 === a2 || a2, o2 = n6.resize, s2 = void 0 === o2 || o2, l2 = nw(t10.elements.popper), c2 = [].concat(t10.scrollParents.reference, t10.scrollParents.popper);
  return i2 && c2.forEach(function(e15) {
    e15.addEventListener("scroll", r10.update, nV);
  }), s2 && l2.addEventListener("resize", r10.update, nV), function() {
    i2 && c2.forEach(function(e15) {
      e15.removeEventListener("scroll", r10.update, nV);
    }), s2 && l2.removeEventListener("resize", r10.update, nV);
  };
}, data: {} }, { name: "popperOffsets", enabled: true, phase: "read", fn: function(e14) {
  var t10 = e14.state, r10 = e14.name;
  t10.modifiersData[r10] = nJ({ reference: t10.rects.reference, element: t10.rects.popper, strategy: "absolute", placement: t10.placement });
}, data: {} }, { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: function(e14) {
  var t10 = e14.state, r10 = e14.options, n6 = r10.gpuAcceleration, a2 = r10.adaptive, i2 = r10.roundOffsets, o2 = void 0 === i2 || i2, s2 = { placement: nP(t10.placement), variation: nB(t10.placement), popper: t10.elements.popper, popperRect: t10.rects.popper, gpuAcceleration: void 0 === n6 || n6, isFixed: "fixed" === t10.options.strategy };
  null != t10.modifiersData.popperOffsets && (t10.styles.popper = Object.assign({}, t10.styles.popper, nE(Object.assign({}, s2, { offsets: t10.modifiersData.popperOffsets, position: t10.options.strategy, adaptive: void 0 === a2 || a2, roundOffsets: o2 })))), null != t10.modifiersData.arrow && (t10.styles.arrow = Object.assign({}, t10.styles.arrow, nE(Object.assign({}, s2, { offsets: t10.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: o2 })))), t10.attributes.popper = Object.assign({}, t10.attributes.popper, { "data-popper-placement": t10.placement });
}, data: {} }, { name: "applyStyles", enabled: true, phase: "write", fn: function(e14) {
  var t10 = e14.state;
  Object.keys(t10.elements).forEach(function(e15) {
    var r10 = t10.styles[e15] || {}, n6 = t10.attributes[e15] || {}, a2 = t10.elements[e15];
    nM(a2) && nx(a2) && (Object.assign(a2.style, r10), Object.keys(n6).forEach(function(e16) {
      var t11 = n6[e16];
      false === t11 ? a2.removeAttribute(e16) : a2.setAttribute(e16, true === t11 ? "" : t11);
    }));
  });
}, effect: function(e14) {
  var t10 = e14.state, r10 = { popper: { position: t10.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t10.elements.popper.style, r10.popper), t10.styles = r10, t10.elements.arrow && Object.assign(t10.elements.arrow.style, r10.arrow), function() {
    Object.keys(t10.elements).forEach(function(e15) {
      var n6 = t10.elements[e15], a2 = t10.attributes[e15] || {}, i2 = Object.keys(t10.styles.hasOwnProperty(e15) ? t10.styles[e15] : r10[e15]).reduce(function(e16, t11) {
        return e16[t11] = "", e16;
      }, {});
      nM(n6) && nx(n6) && (Object.assign(n6.style, i2), Object.keys(a2).forEach(function(e16) {
        n6.removeAttribute(e16);
      }));
    });
  };
}, requires: ["computeStyles"] }] });
function n4(e14, t10) {
  return { fn: e14, enabled: true, ...t10 };
}
let n5 = e({ isOpen: nl.propTypes.isOpen, onClickOutside: nl.propTypes.onClickOutside, placement: L().optional(), modifiers: L().optional(), $transition: nl.propTypes.$transition, $content: L(), $default: L() }, (e14, r10) => {
  let { slots: n6, emit: a2, attrs: o2 } = r10, l2 = i(null), c2 = i(null);
  return m(() => c2.value, (t10) => {
    if (t10) {
      var r11, n7;
      n2(l2.value, t10, { placement: null !== (r11 = e14.placement) && void 0 !== r11 ? r11 : "bottom", modifiers: [...null !== (n7 = e14.modifiers) && void 0 !== n7 ? n7 : [], nQ] });
    }
  }), () => {
    var r11, i2;
    let u2 = null === (r11 = n6.default) || void 0 === r11 ? void 0 : r11.call(n6)[0];
    return u2 ? g(b, { children: [s(u2, { ...o2, onVnodeMounted: (e15) => {
      l2.value = function e16(t10) {
        if (t10) {
          if (t10 instanceof HTMLElement)
            return t10;
          if (t10 instanceof Text)
            return e16(t10.nextElementSibling);
        }
        return null;
      }(e15.el);
    } }), t(nl, { triggerRef: l2, contentRef: c2, isOpen: e14.isOpen, onClickOutside: (e15) => a2("click-outside", e15), style: { zIndex: 100 }, $transition: n6.transition, children: null === (i2 = n6.content) || void 0 === i2 ? void 0 : i2.call(n6) })] }) : null;
  };
}, { name: "Popper", inheritAttrs: false }), n3 = Object.assign(n5, { displayName: "Popper" });
export {
  r6 as B,
  r5 as C,
  nt as G,
  nl as O,
  n3 as P,
  tT as T,
  tp as a,
  ra as b,
  rd as c,
  rs as d,
  nn as e,
  rh as f,
  n4 as g,
  r7 as s,
  ro as t,
  tg as v
};
