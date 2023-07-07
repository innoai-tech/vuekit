import { c as e, j as t, T as r, d as n, o as a, r as o, e as i, a as s, u as l, f as c, g as u, t as d, h as f, s as h, i as p, w as m, b as g, F as b } from "./lib-nodepkg-vuekit.bd88abd3.chunk.js";
import { h as v, b as y, j as x, l as w, m as k, n as M, q as C, i as P, k as _, g as S, r as O, d as D, t as T, u as R, v as $, w as A, x as I, c as L, e as F } from "./lib-nodepkg-typedef.6b41fceb.chunk.js";
function B(e10, t10) {
  var r10 = {};
  for (var n3 in e10)
    Object.prototype.hasOwnProperty.call(e10, n3) && 0 > t10.indexOf(n3) && (r10[n3] = e10[n3]);
  if (null != e10 && "function" == typeof Object.getOwnPropertySymbols)
    for (var a2 = 0, n3 = Object.getOwnPropertySymbols(e10); a2 < n3.length; a2++)
      0 > t10.indexOf(n3[a2]) && Object.prototype.propertyIsEnumerable.call(e10, n3[a2]) && (r10[n3[a2]] = e10[n3[a2]]);
  return r10;
}
var j, E, V, H, z = function() {
}, W = function() {
};
let N = (e10, t10, r10) => Math.min(Math.max(r10, e10), t10);
function q(e10, t10) {
  return e10 * Math.sqrt(1 - t10 * t10);
}
let U = ["duration", "bounce"], G = ["stiffness", "damping", "mass"];
function Y(e10, t10) {
  return t10.some((t11) => void 0 !== e10[t11]);
}
function X(e10) {
  var { from: t10 = 0, to: r10 = 1, restSpeed: n3 = 2, restDelta: a2 } = e10, o2 = B(e10, ["from", "to", "restSpeed", "restDelta"]);
  let i2 = { done: false, value: t10 }, { stiffness: s2, damping: l2, mass: c2, velocity: u2, duration: d2, isResolvedFromDuration: f2 } = function(e11) {
    let t11 = Object.assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: false }, e11);
    if (!Y(e11, G) && Y(e11, U)) {
      let r11 = function(e12) {
        let t12, r12, { duration: n6 = 800, bounce: a3 = 0.25, velocity: o3 = 0, mass: i3 = 1 } = e12;
        z(n6 <= 1e4);
        let s3 = 1 - a3;
        s3 = N(0.05, 1, s3), n6 = N(0.01, 10, n6 / 1e3), s3 < 1 ? (t12 = (e13) => {
          let t13 = e13 * s3, r13 = t13 * n6, a4 = q(e13, s3);
          return 1e-3 - (t13 - o3) / a4 * Math.exp(-r13);
        }, r12 = (e13) => {
          let r13 = e13 * s3, a4 = r13 * n6, i4 = Math.pow(s3, 2) * Math.pow(e13, 2) * n6, l4 = q(Math.pow(e13, 2), s3), c4 = -t12(e13) + 1e-3 > 0 ? -1 : 1;
          return c4 * ((a4 * o3 + o3 - i4) * Math.exp(-a4)) / l4;
        }) : (t12 = (e13) => {
          let t13 = Math.exp(-e13 * n6), r13 = (e13 - o3) * n6 + 1;
          return -1e-3 + t13 * r13;
        }, r12 = (e13) => {
          let t13 = Math.exp(-e13 * n6), r13 = (o3 - e13) * (n6 * n6);
          return t13 * r13;
        });
        let l3 = 5 / n6, c3 = function(e13, t13, r13) {
          let n7 = r13;
          for (let r14 = 1; r14 < 12; r14++)
            n7 -= e13(n7) / t13(n7);
          return n7;
        }(t12, r12, l3);
        if (n6 *= 1e3, isNaN(c3))
          return { stiffness: 100, damping: 10, duration: n6 };
        {
          let e13 = Math.pow(c3, 2) * i3;
          return { stiffness: e13, damping: 2 * s3 * Math.sqrt(i3 * e13), duration: n6 };
        }
      }(e11);
      (t11 = Object.assign(Object.assign(Object.assign({}, t11), r11), { velocity: 0, mass: 1 })).isResolvedFromDuration = true;
    }
    return t11;
  }(o2), h2 = K, p2 = K;
  function m2() {
    let e11 = u2 ? -(u2 / 1e3) : 0, n6 = r10 - t10, o3 = l2 / (2 * Math.sqrt(s2 * c2)), i3 = Math.sqrt(s2 / c2) / 1e3;
    if (void 0 === a2 && (a2 = Math.min(Math.abs(r10 - t10) / 100, 0.4)), o3 < 1) {
      let t11 = q(i3, o3);
      h2 = (a3) => {
        let s3 = Math.exp(-o3 * i3 * a3);
        return r10 - s3 * ((e11 + o3 * i3 * n6) / t11 * Math.sin(t11 * a3) + n6 * Math.cos(t11 * a3));
      }, p2 = (r11) => {
        let a3 = Math.exp(-o3 * i3 * r11);
        return o3 * i3 * a3 * (Math.sin(t11 * r11) * (e11 + o3 * i3 * n6) / t11 + n6 * Math.cos(t11 * r11)) - a3 * (Math.cos(t11 * r11) * (e11 + o3 * i3 * n6) - t11 * n6 * Math.sin(t11 * r11));
      };
    } else if (1 === o3)
      h2 = (t11) => r10 - Math.exp(-i3 * t11) * (n6 + (e11 + i3 * n6) * t11);
    else {
      let t11 = i3 * Math.sqrt(o3 * o3 - 1);
      h2 = (a3) => {
        let s3 = Math.exp(-o3 * i3 * a3), l3 = Math.min(t11 * a3, 300);
        return r10 - s3 * ((e11 + o3 * i3 * n6) * Math.sinh(l3) + t11 * n6 * Math.cosh(l3)) / t11;
      };
    }
  }
  return m2(), { next: (e11) => {
    let t11 = h2(e11);
    if (f2)
      i2.done = e11 >= d2;
    else {
      let o3 = 1e3 * p2(e11), s3 = Math.abs(r10 - t11) <= a2;
      i2.done = Math.abs(o3) <= n3 && s3;
    }
    return i2.value = i2.done ? r10 : t11, i2;
  }, flipTarget: () => {
    u2 = -u2, [t10, r10] = [r10, t10], m2();
  } };
}
X.needsInterpolation = (e10, t10) => "string" == typeof e10 || "string" == typeof t10;
let K = (e10) => 0, J = (e10, t10, r10) => {
  let n3 = t10 - e10;
  return 0 === n3 ? 1 : (r10 - e10) / n3;
}, Z = (e10, t10, r10) => -r10 * e10 + r10 * t10 + e10, Q = (e10, t10) => (r10) => Math.max(Math.min(r10, t10), e10), ee = (e10) => e10 % 1 ? Number(e10.toFixed(5)) : e10, et = /(-)?([\d]*\.?[\d])+/g, er = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, en = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function ea(e10) {
  return "string" == typeof e10;
}
let eo = { test: (e10) => "number" == typeof e10, parse: parseFloat, transform: (e10) => e10 }, ei = Object.assign(Object.assign({}, eo), { transform: Q(0, 1) });
Object.assign(Object.assign({}, eo), { default: 1 });
let es = { test: (e10) => ea(e10) && e10.endsWith("%") && 1 === e10.split(" ").length, parse: parseFloat, transform: (e10) => `${e10}%` };
Object.assign(Object.assign({}, es), { parse: (e10) => es.parse(e10) / 100, transform: (e10) => es.transform(100 * e10) });
let el = (e10, t10) => (r10) => !!(ea(r10) && en.test(r10) && r10.startsWith(e10) || t10 && Object.prototype.hasOwnProperty.call(r10, t10)), ec = (e10, t10, r10) => (n3) => {
  if (!ea(n3))
    return n3;
  let [a2, o2, i2, s2] = n3.match(et);
  return { [e10]: parseFloat(a2), [t10]: parseFloat(o2), [r10]: parseFloat(i2), alpha: void 0 !== s2 ? parseFloat(s2) : 1 };
}, eu = { test: el("hsl", "hue"), parse: ec("hue", "saturation", "lightness"), transform: (e10) => {
  let { hue: t10, saturation: r10, lightness: n3, alpha: a2 = 1 } = e10;
  return "hsla(" + Math.round(t10) + ", " + es.transform(ee(r10)) + ", " + es.transform(ee(n3)) + ", " + ee(ei.transform(a2)) + ")";
} }, ed = Q(0, 255), ef = Object.assign(Object.assign({}, eo), { transform: (e10) => Math.round(ed(e10)) }), eh = { test: el("rgb", "red"), parse: ec("red", "green", "blue"), transform: (e10) => {
  let { red: t10, green: r10, blue: n3, alpha: a2 = 1 } = e10;
  return "rgba(" + ef.transform(t10) + ", " + ef.transform(r10) + ", " + ef.transform(n3) + ", " + ee(ei.transform(a2)) + ")";
} }, ep = { test: el("#"), parse: function(e10) {
  let t10 = "", r10 = "", n3 = "", a2 = "";
  return e10.length > 5 ? (t10 = e10.substr(1, 2), r10 = e10.substr(3, 2), n3 = e10.substr(5, 2), a2 = e10.substr(7, 2)) : (t10 = e10.substr(1, 1), r10 = e10.substr(2, 1), n3 = e10.substr(3, 1), a2 = e10.substr(4, 1), t10 += t10, r10 += r10, n3 += n3, a2 += a2), { red: parseInt(t10, 16), green: parseInt(r10, 16), blue: parseInt(n3, 16), alpha: a2 ? parseInt(a2, 16) / 255 : 1 };
}, transform: eh.transform }, em = { test: (e10) => eh.test(e10) || ep.test(e10) || eu.test(e10), parse: (e10) => eh.test(e10) ? eh.parse(e10) : eu.test(e10) ? eu.parse(e10) : ep.parse(e10), transform: (e10) => ea(e10) ? e10 : e10.hasOwnProperty("red") ? eh.transform(e10) : eu.transform(e10) }, eg = "${c}", eb = "${n}";
function ev(e10) {
  "number" == typeof e10 && (e10 = `${e10}`);
  let t10 = [], r10 = 0, n3 = e10.match(er);
  n3 && (r10 = n3.length, e10 = e10.replace(er, eg), t10.push(...n3.map(em.parse)));
  let a2 = e10.match(et);
  return a2 && (e10 = e10.replace(et, eb), t10.push(...a2.map(eo.parse))), { values: t10, numColors: r10, tokenised: e10 };
}
function ey(e10) {
  return ev(e10).values;
}
function ex(e10) {
  let { values: t10, numColors: r10, tokenised: n3 } = ev(e10), a2 = t10.length;
  return (e11) => {
    let t11 = n3;
    for (let n6 = 0; n6 < a2; n6++)
      t11 = t11.replace(n6 < r10 ? eg : eb, n6 < r10 ? em.transform(e11[n6]) : ee(e11[n6]));
    return t11;
  };
}
let ew = (e10) => "number" == typeof e10 ? 0 : e10, ek = { test: function(e10) {
  var t10, r10, n3, a2;
  return isNaN(e10) && ea(e10) && (null !== (r10 = null === (t10 = e10.match(et)) || void 0 === t10 ? void 0 : t10.length) && void 0 !== r10 ? r10 : 0) + (null !== (a2 = null === (n3 = e10.match(er)) || void 0 === n3 ? void 0 : n3.length) && void 0 !== a2 ? a2 : 0) > 0;
}, parse: ey, createTransformer: ex, getAnimatableNone: function(e10) {
  let t10 = ey(e10), r10 = ex(e10);
  return r10(t10.map(ew));
} };
function eM(e10, t10, r10) {
  return (r10 < 0 && (r10 += 1), r10 > 1 && (r10 -= 1), r10 < 1 / 6) ? e10 + (t10 - e10) * 6 * r10 : r10 < 0.5 ? t10 : r10 < 2 / 3 ? e10 + (t10 - e10) * (2 / 3 - r10) * 6 : e10;
}
function eC(e10) {
  let { hue: t10, saturation: r10, lightness: n3, alpha: a2 } = e10;
  t10 /= 360, n3 /= 100;
  let o2 = 0, i2 = 0, s2 = 0;
  if (r10 /= 100) {
    let e11 = n3 < 0.5 ? n3 * (1 + r10) : n3 + r10 - n3 * r10, a3 = 2 * n3 - e11;
    o2 = eM(a3, e11, t10 + 1 / 3), i2 = eM(a3, e11, t10), s2 = eM(a3, e11, t10 - 1 / 3);
  } else
    o2 = i2 = s2 = n3;
  return { red: Math.round(255 * o2), green: Math.round(255 * i2), blue: Math.round(255 * s2), alpha: a2 };
}
let eP = (e10, t10, r10) => {
  let n3 = e10 * e10;
  return Math.sqrt(Math.max(0, r10 * (t10 * t10 - n3) + n3));
}, e_ = [ep, eh, eu], eS = (e10) => e_.find((t10) => t10.test(e10)), eO = (e10, t10) => {
  let r10 = eS(e10), n3 = eS(t10), a2 = r10.parse(e10), o2 = n3.parse(t10);
  r10 === eu && (a2 = eC(a2), r10 = eh), n3 === eu && (o2 = eC(o2), n3 = eh);
  let i2 = Object.assign({}, a2);
  return (e11) => {
    for (let t11 in i2)
      "alpha" !== t11 && (i2[t11] = eP(a2[t11], o2[t11], e11));
    return i2.alpha = Z(a2.alpha, o2.alpha, e11), r10.transform(i2);
  };
}, eD = (e10) => "number" == typeof e10, eT = (e10, t10) => (r10) => t10(e10(r10)), eR = function() {
  for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++)
    t10[r10] = arguments[r10];
  return t10.reduce(eT);
};
function e$(e10, t10) {
  return eD(e10) ? (r10) => Z(e10, t10, r10) : em.test(e10) ? eO(e10, t10) : eF(e10, t10);
}
let eA = (e10, t10) => {
  let r10 = [...e10], n3 = r10.length, a2 = e10.map((e11, r11) => e$(e11, t10[r11]));
  return (e11) => {
    for (let t11 = 0; t11 < n3; t11++)
      r10[t11] = a2[t11](e11);
    return r10;
  };
}, eI = (e10, t10) => {
  let r10 = Object.assign(Object.assign({}, e10), t10), n3 = {};
  for (let a2 in r10)
    void 0 !== e10[a2] && void 0 !== t10[a2] && (n3[a2] = e$(e10[a2], t10[a2]));
  return (e11) => {
    for (let t11 in n3)
      r10[t11] = n3[t11](e11);
    return r10;
  };
};
function eL(e10) {
  let t10 = ek.parse(e10), r10 = t10.length, n3 = 0, a2 = 0, o2 = 0;
  for (let e11 = 0; e11 < r10; e11++)
    n3 || "number" == typeof t10[e11] ? n3++ : void 0 !== t10[e11].hue ? o2++ : a2++;
  return { parsed: t10, numNumbers: n3, numRGB: a2, numHSL: o2 };
}
let eF = (e10, t10) => {
  let r10 = ek.createTransformer(t10), n3 = eL(e10), a2 = eL(t10), o2 = n3.numHSL === a2.numHSL && n3.numRGB === a2.numRGB && n3.numNumbers >= a2.numNumbers;
  return o2 ? eR(eA(n3.parsed, a2.parsed), r10) : (r11) => `${r11 > 0 ? t10 : e10}`;
}, eB = (e10, t10) => (r10) => Z(e10, t10, r10);
function ej(e10, t10) {
  let { clamp: r10 = true, ease: n3, mixer: a2 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o2 = e10.length;
  W(o2 === t10.length), W(!n3 || !Array.isArray(n3) || n3.length === o2 - 1), e10[0] > e10[o2 - 1] && (e10 = [].concat(e10), t10 = [].concat(t10), e10.reverse(), t10.reverse());
  let i2 = function(e11, t11, r11) {
    var n6;
    let a3 = [], o3 = r11 || ("number" == typeof (n6 = e11[0]) ? eB : "string" == typeof n6 ? em.test(n6) ? eO : eF : Array.isArray(n6) ? eA : "object" == typeof n6 ? eI : void 0), i3 = e11.length - 1;
    for (let r12 = 0; r12 < i3; r12++) {
      let n7 = o3(e11[r12], e11[r12 + 1]);
      if (t11) {
        let e12 = Array.isArray(t11) ? t11[r12] : t11;
        n7 = eR(e12, n7);
      }
      a3.push(n7);
    }
    return a3;
  }(t10, n3, a2), s2 = 2 === o2 ? function(e11, t11) {
    let [r11, n6] = e11, [a3] = t11;
    return (e12) => a3(J(r11, n6, e12));
  }(e10, i2) : function(e11, t11) {
    let r11 = e11.length, n6 = r11 - 1;
    return (a3) => {
      let o3 = 0, i3 = false;
      if (a3 <= e11[0] ? i3 = true : a3 >= e11[n6] && (o3 = n6 - 1, i3 = true), !i3) {
        let t12 = 1;
        for (; t12 < r11 && !(e11[t12] > a3) && t12 !== n6; t12++)
          ;
        o3 = t12 - 1;
      }
      let s3 = J(e11[o3], e11[o3 + 1], a3);
      return t11[o3](s3);
    };
  }(e10, i2);
  return r10 ? (t11) => s2(N(e10[0], e10[o2 - 1], t11)) : s2;
}
let eE = (e10) => (t10) => t10 * t10 * ((e10 + 1) * t10 - e10), eV = (e10) => e10, eH = (E = (e10) => Math.pow(e10, 2), (e10) => e10 <= 0.5 ? E(2 * e10) / 2 : (2 - E(2 * (1 - e10))) / 2);
function ez(e10) {
  let { from: t10 = 0, to: r10 = 1, ease: n3, offset: a2, duration: o2 = 300 } = e10, i2 = { done: false, value: t10 }, s2 = Array.isArray(r10) ? r10 : [t10, r10], l2 = (a2 && a2.length === s2.length ? a2 : function(e11) {
    let t11 = e11.length;
    return e11.map((e12, r11) => 0 !== r11 ? r11 / (t11 - 1) : 0);
  }(s2)).map((e11) => e11 * o2);
  function c2() {
    return ej(l2, s2, { ease: Array.isArray(n3) ? n3 : s2.map(() => n3 || eH).splice(0, s2.length - 1) });
  }
  let u2 = c2();
  return { next: (e11) => (i2.value = u2(e11), i2.done = e11 >= o2, i2), flipTarget: () => {
    s2.reverse(), u2 = c2();
  } };
}
((e10) => {
  let t10 = eE(1.525);
  return (e11) => (e11 *= 2) < 1 ? 0.5 * t10(e11) : 0.5 * (2 - Math.pow(2, -10 * (e11 - 1)));
})(0);
let eW = { keyframes: ez, spring: X, decay: function(e10) {
  let { velocity: t10 = 0, from: r10 = 0, power: n3 = 0.8, timeConstant: a2 = 350, restDelta: o2 = 0.5, modifyTarget: i2 } = e10, s2 = { done: false, value: r10 }, l2 = n3 * t10, c2 = r10 + l2, u2 = void 0 === i2 ? c2 : i2(c2);
  return u2 !== c2 && (l2 = u2 - r10), { next: (e11) => {
    let t11 = -l2 * Math.exp(-e11 / a2);
    return s2.done = !(t11 > o2 || t11 < -o2), s2.value = s2.done ? u2 : u2 + t11, s2;
  }, flipTarget: () => {
  } };
} }, eN = 1 / 60 * 1e3, eq = "undefined" != typeof performance ? () => performance.now() : () => Date.now(), eU = "undefined" != typeof window ? (e10) => window.requestAnimationFrame(e10) : (e10) => setTimeout(() => e10(eq()), eN), eG = true, eY = false, eX = false, eK = { delta: 0, timestamp: 0 }, eJ = ["read", "update", "preRender", "render", "postRender"], eZ = eJ.reduce((e10, t10) => (e10[t10] = function(e11) {
  let t11 = [], r10 = [], n3 = 0, a2 = false, o2 = false, i2 = /* @__PURE__ */ new WeakSet(), s2 = { schedule: function(e12) {
    let o3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], s3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], l2 = s3 && a2, c2 = l2 ? t11 : r10;
    return o3 && i2.add(e12), -1 === c2.indexOf(e12) && (c2.push(e12), l2 && a2 && (n3 = t11.length)), e12;
  }, cancel: (e12) => {
    let t12 = r10.indexOf(e12);
    -1 !== t12 && r10.splice(t12, 1), i2.delete(e12);
  }, process: (l2) => {
    if (a2) {
      o2 = true;
      return;
    }
    if (a2 = true, [t11, r10] = [r10, t11], r10.length = 0, n3 = t11.length)
      for (let r11 = 0; r11 < n3; r11++) {
        let n6 = t11[r11];
        n6(l2), i2.has(n6) && (s2.schedule(n6), e11());
      }
    a2 = false, o2 && (o2 = false, s2.process(l2));
  } };
  return s2;
}(() => eY = true), e10), {}), eQ = eJ.reduce((e10, t10) => {
  let r10 = eZ[t10];
  return e10[t10] = function(e11) {
    let t11 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return eY || e4(), r10.schedule(e11, t11, n3);
  }, e10;
}, {}), e0 = eJ.reduce((e10, t10) => (e10[t10] = eZ[t10].cancel, e10), {});
eJ.reduce((e10, t10) => (e10[t10] = () => eZ[t10].process(eK), e10), {});
let e1 = (e10) => eZ[e10].process(eK), e2 = (e10) => {
  eY = false, eK.delta = eG ? eN : Math.max(Math.min(e10 - eK.timestamp, 40), 1), eK.timestamp = e10, eX = true, eJ.forEach(e1), eX = false, eY && (eG = false, eU(e2));
}, e4 = () => {
  eY = true, eG = true, eX || eU(e2);
};
function e5(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
  return e10 - t10 - r10;
}
let e3 = (e10) => {
  let t10 = (t11) => {
    let { delta: r10 } = t11;
    return e10(r10);
  };
  return { start: () => eQ.update(t10, true), stop: () => e0.update(t10) };
};
function e8(e10) {
  let t10, r10, n3;
  var a2, { from: o2, autoplay: i2 = true, driver: s2 = e3, elapsed: l2 = 0, repeat: c2 = 0, repeatType: u2 = "loop", repeatDelay: d2 = 0, onPlay: f2, onStop: h2, onComplete: p2, onRepeat: m2, onUpdate: g2 } = e10, b2 = B(e10, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
  let { to: v2 } = b2, y2 = 0, x2 = b2.duration, w2 = false, k2 = true, M2 = function(e11) {
    if (Array.isArray(e11.to))
      return ez;
    if (eW[e11.type])
      return eW[e11.type];
    let t11 = new Set(Object.keys(e11));
    if (t11.has("ease") || t11.has("duration") && !t11.has("dampingRatio"))
      ;
    else if (t11.has("dampingRatio") || t11.has("stiffness") || t11.has("mass") || t11.has("damping") || t11.has("restSpeed") || t11.has("restDelta"))
      return X;
    return ez;
  }(b2);
  (null === (a2 = M2.needsInterpolation) || void 0 === a2 ? void 0 : a2.call(M2, o2, v2)) && (n3 = ej([0, 100], [o2, v2], { clamp: false }), o2 = 0, v2 = 100);
  let C2 = M2(Object.assign(Object.assign({}, b2), { from: o2, to: v2 }));
  return i2 && (null == f2 || f2(), (t10 = s2(function(e11) {
    if (k2 || (e11 = -e11), l2 += e11, !w2) {
      let e12 = C2.next(Math.max(0, l2));
      r10 = e12.value, n3 && (r10 = n3(r10)), w2 = k2 ? e12.done : l2 <= 0;
    }
    if (null == g2 || g2(r10), w2) {
      if (0 === y2 && (null != x2 || (x2 = l2)), y2 < c2) {
        var a3, o3;
        a3 = l2, o3 = x2, (k2 ? a3 >= o3 + d2 : a3 <= -d2) && (y2++, "reverse" === u2 ? l2 = function(e12, t11) {
          let r11 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n6 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
          return n6 ? e5(t11 + -e12, t11, r11) : t11 - (e12 - t11) + r11;
        }(l2, x2, d2, k2 = y2 % 2 == 0) : (l2 = e5(l2, x2, d2), "mirror" === u2 && C2.flipTarget()), w2 = false, m2 && m2());
      } else
        t10.stop(), p2 && p2();
    }
  })).start()), { stop: () => {
    null == h2 || h2(), t10.stop();
  } };
}
let e6 = (e10, t10) => 1 - 3 * t10 + 3 * e10, e9 = (e10, t10) => 3 * t10 - 6 * e10, e7 = (e10) => 3 * e10, te = (e10, t10, r10) => ((e6(t10, r10) * e10 + e9(t10, r10)) * e10 + e7(t10)) * e10, tt = (e10, t10, r10) => 3 * e6(t10, r10) * e10 * e10 + 2 * e9(t10, r10) * e10 + e7(t10);
function tr() {
  return new Proxy({}, { get: (e10, t10) => t10 });
}
let tn = tr(), ta = { paddingX: [tn.paddingLeft, tn.paddingRight], paddingY: [tn.paddingTop, tn.paddingBottom], marginX: [tn.marginInlineStart, tn.marginInlineEnd], marginY: [tn.marginTop, tn.marginBottom], borderX: [tn.borderLeft, tn.borderRight], borderY: [tn.borderTop, tn.borderBottom], color: [tn.color, tn.fill], borderTopRadius: [tn.borderTopLeftRadius, tn.borderTopRightRadius], borderBottomRadius: [tn.borderBottomLeftRadius, tn.borderBottomRightRadius], borderRightRadius: [tn.borderTopRightRadius, tn.borderBottomRightRadius], borderLeftRadius: [tn.borderTopLeftRadius, tn.borderBottomLeftRadius], backgroundGradient: [tn.backgroundImage], boxSize: [tn.width, tn.height] }, to = tr(), ti = { font: to.fontFamily, shadow: to.boxShadow, rounded: to.borderRadius, roundedTop: to.borderTopRadius, roundedBottom: to.borderBottomRadius, roundedLeft: to.borderLeftRadius, roundedRight: to.borderRightRadius, bg: to.background, bgImage: to.backgroundImage, bgSize: to.backgroundSize, bgPosition: to.backgroundPosition, bgRepeat: to.backgroundRepeat, bgAttachment: to.backgroundAttachment, bgColor: to.backgroundColor, bgGradient: to.backgroundGradient, bgClip: to.backgroundClip, pos: to.position, p: to.padding, pt: to.paddingTop, pr: to.paddingRight, pl: to.paddingLeft, pb: to.paddingBottom, ps: to.paddingInlineStart, pe: to.paddingInlineEnd, px: to.paddingX, py: to.paddingY, m: to.margin, mt: to.marginTop, mr: to.marginRight, ml: to.marginLeft, mb: to.marginBottom, ms: to.marginInlineStart, me: to.marginInlineEnd, mx: to.marginX, my: to.marginY, w: to.width, minW: to.minWidth, maxW: to.maxWidth, h: to.height, minH: to.minHeight, maxH: to.maxHeight }, ts = tr(), tl = function() {
  for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++)
    t10[r10] = arguments[r10];
  let n3 = [...t10];
  for (let e11 of t10)
    ti[e11] && n3.push(ti[e11]);
  return n3;
}, tc = { _rtl: "[dir=rtl] &, &[dir=rtl]", _ltr: "[dir=ltr] &, &[dir=ltr]", _dark: "&[data-theme=dark]", _light: "&[data-theme=light]" };
var tu = ((j = tu || {})[j.var = 0] = "var", j[j.mixin = 1] = "mixin", j);
class td {
  static create(e10, t10) {
    let { values: r10, on: n3, transform: a2 } = t10;
    return { type: e10, values: r10, on: n3, transform: a2, __Tokens: void 0, __ValueType: void 0, __CSSTokens: void 0 };
  }
  static color(e10) {
    return td.create(0, { values: e10, on: tl(ts.color, ts.bgColor, ts.outlineColor, ts.borderColor, ts.accentColor, ts.fill, ts.stroke), transform: (e11, t10) => v(e11) ? { default: `var(${t10(e11)})`, rgb: `var(${t10(`${e11}/rgb`)})` } : { default: `rgb(${e11[0]}, ${e11[1]}, ${e11[2]})`, rgb: `${e11[0]} ${e11[1]} ${e11[2]}` }, fallback: "" });
  }
  static space(e10) {
    return td.create(0, { values: e10, on: tl(ts.gap, ts.rowGap, ts.columnGap, ts.top, ts.right, ts.bottom, ts.left, ts.m, ts.ms, ts.me, ts.mt, ts.mr, ts.mb, ts.ml, ts.mx, ts.my, ts.p, ts.ps, ts.pe, ts.pt, ts.pr, ts.pb, ts.pl, ts.px, ts.py) });
  }
  static boxSize(e10) {
    return td.create(0, { values: e10, on: tl(ts.w, ts.minW, ts.maxW, ts.h, ts.minH, ts.maxH, ts.boxSize), fallback: 0 });
  }
  static fontSize(e10) {
    return td.create(0, { values: e10, on: tl(ts.fontSize), fallback: 0 });
  }
  static lineHeight(e10) {
    return td.create(0, { values: e10, on: tl(ts.lineHeight), fallback: 0 });
  }
  static rounded(e10) {
    return td.create(0, { values: e10, fallback: 0, on: tl(ts.rounded, ts.roundedTop, ts.roundedBottom, ts.roundedLeft, ts.roundedRight, tn.borderTopLeftRadius, tn.borderTopRightRadius, tn.borderBottomLeftRadius, tn.borderBottomRightRadius, tn.borderTopRightRadius, tn.borderBottomRightRadius, tn.borderTopLeftRadius, tn.borderBottomLeftRadius) });
  }
  static transitionTimingFunction(e10) {
    return td.create(0, { values: e10, on: tl(ts.transitionTimingFunction) });
  }
  static transitionDuration(e10) {
    return td.create(0, { values: e10, on: tl(ts.transitionDuration), transform: (e11) => `${e11}ms` });
  }
  static font(e10) {
    return td.create(0, { values: e10, on: tl(ts.font) });
  }
  static fontWeight(e10) {
    return td.create(0, { values: e10, on: tl(ts.fontWeight) });
  }
  static letterSpacing(e10) {
    return td.create(0, { values: e10, on: tl(ts.letterSpacing) });
  }
  static shadow(e10) {
    return td.create(0, { values: e10, on: tl(ts.shadow) });
  }
  static customMixin(e10, t10) {
    return td.create(1, { values: t10, on: [e10] });
  }
  static mixin(e10) {
    return { ...e10, __mixin: true };
  }
}
let tf = class {
  get tokens() {
    return k(this._values);
  }
  get(e10, t10, r10) {
    let n3 = this._values[e10];
    if (M(n3)) {
      var a2;
      return r10 ? n3[t10] : null !== (a2 = n3[t10]) && void 0 !== a2 ? a2 : n3[tf.defaultMode];
    }
    return r10 ? t10 === tf.defaultMode ? n3 : void 0 : n3;
  }
  use(e10) {
    let t10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (this._cssVarRefs[e10])
      return t10 ? `${this._cssVarRefs[e10]}` : `var(${this._cssVarRefs[e10]})`;
  }
  constructor(e10, { cssVar: t10, transformFallback: r10 }) {
    this.__Tokens = void 0, this._values = {}, this._cssVarRefs = {}, tf.walkValues(e10.values, (n3, a2) => {
      let o2 = a2.join("."), i2 = (n6, a3) => {
        let o3 = e10.transform ? e10.transform(n6, t10) : r10(n6);
        if (M(o3))
          for (let e11 in o3)
            a3(o3[e11], "default" === e11 ? "" : e11);
        else
          a3(o3, "");
      };
      if (w(this._cssVarRefs, [o2], t10(o2)), y(n3))
        for (let e11 in n3)
          i2(n3[e11], (t11, r11) => {
            w(this._values, [`${o2}${r11 ? `/${r11}` : ""}`, e11], t11);
          });
      else
        i2(n3, (e11, t11) => {
          w(this._values, [`${o2}${t11 ? `/${t11}` : ""}`], e11);
        });
    });
  }
};
tf.defaultMode = "_default", tf.walkValues = function(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let n3 in e10) {
    let a2 = e10[n3];
    if (y(a2)) {
      if (x(a2, "_default")) {
        t10(a2, [...r10, n3]);
        continue;
      }
      tf.walkValues(a2, t10, [...r10, n3]);
      continue;
    }
    t10(a2, [...r10, n3]);
  }
};
let th = class {
  get tokens() {
    return k(this._values);
  }
  get(e10) {
    return this._values[e10];
  }
  constructor(e10) {
    this._values = {}, th.walkValues(e10.values, (e11, t10) => {
      let r10 = t10.join(".");
      w(this._values, [r10], C(e11, "__mixin"));
    });
  }
};
th.walkValues = function(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let n3 in e10) {
    let a2 = e10[n3];
    if (y(a2)) {
      if (x(a2, "__mixin")) {
        t10(a2, [...r10, n3]);
        continue;
      }
      th.walkValues(a2, t10, [...r10, n3]);
      continue;
    }
    t10(a2, [...r10, n3]);
  }
};
let tp = (e10) => (t10) => `rgba(var(${t10}--rgb) / ${e10})`, tm = (e10) => P(e10) && x(e10, "token");
function tg(e10, t10) {
  return Object.assign((e11) => t10(e11), { toString: () => e10, token: e10 });
}
var tb = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, tv = /[A-Z]|^ms/g, ty = /_EMO_([^_]+?)_([^]*?)_EMO_/g, tx = function(e10) {
  return 45 === e10.charCodeAt(1);
}, tw = function(e10) {
  return null != e10 && "boolean" != typeof e10;
}, tk = function(e10) {
  var t10 = /* @__PURE__ */ Object.create(null);
  return function(r10) {
    return void 0 === t10[r10] && (t10[r10] = e10(r10)), t10[r10];
  };
}(function(e10) {
  return tx(e10) ? e10 : e10.replace(tv, "-$&").toLowerCase();
}), tM = function(e10, t10) {
  switch (e10) {
    case "animation":
    case "animationName":
      if ("string" == typeof t10)
        return t10.replace(ty, function(e11, t11, r10) {
          return V = { name: t11, styles: r10, next: V }, t11;
        });
  }
  return 1 === tb[e10] || tx(e10) || "number" != typeof t10 || 0 === t10 ? t10 : t10 + "px";
};
function tC(e10, t10, r10) {
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
        var n3 = r10.next;
        if (void 0 !== n3)
          for (; void 0 !== n3; )
            V = { name: n3.name, styles: n3.styles, next: V }, n3 = n3.next;
        return r10.styles + ";";
      }
      return function(e11, t11, r11) {
        var n6 = "";
        if (Array.isArray(r11))
          for (var a3 = 0; a3 < r11.length; a3++)
            n6 += tC(e11, t11, r11[a3]) + ";";
        else
          for (var o3 in r11) {
            var i3 = r11[o3];
            if ("object" != typeof i3)
              null != t11 && void 0 !== t11[i3] ? n6 += o3 + "{" + t11[i3] + "}" : tw(i3) && (n6 += tk(o3) + ":" + tM(o3, i3) + ";");
            else if (Array.isArray(i3) && "string" == typeof i3[0] && (null == t11 || void 0 === t11[i3[0]]))
              for (var s2 = 0; s2 < i3.length; s2++)
                tw(i3[s2]) && (n6 += tk(o3) + ":" + tM(o3, i3[s2]) + ";");
            else {
              var l2 = tC(e11, t11, i3);
              switch (o3) {
                case "animation":
                case "animationName":
                  n6 += tk(o3) + ":" + l2 + ";";
                  break;
                default:
                  n6 += o3 + "{" + l2 + "}";
              }
            }
          }
        return n6;
      }(e10, t10, r10);
    case "function":
      if (void 0 !== e10) {
        var a2 = V, o2 = r10(e10);
        return V = a2, tC(e10, t10, o2);
      }
  }
  if (null == t10)
    return r10;
  var i2 = t10[r10];
  return void 0 !== i2 ? i2 : r10;
}
var tP = /label:\s*([^\s;\n{]+)\s*(;|$)/g, t_ = function(e10, t10, r10) {
  if (1 === e10.length && "object" == typeof e10[0] && null !== e10[0] && void 0 !== e10[0].styles)
    return e10[0];
  var n3, a2 = true, o2 = "";
  V = void 0;
  var i2 = e10[0];
  null == i2 || void 0 === i2.raw ? (a2 = false, o2 += tC(r10, t10, i2)) : o2 += i2[0];
  for (var s2 = 1; s2 < e10.length; s2++)
    o2 += tC(r10, t10, e10[s2]), a2 && (o2 += i2[s2]);
  tP.lastIndex = 0;
  for (var l2 = ""; null !== (n3 = tP.exec(o2)); )
    l2 += "-" + n3[1];
  return { name: function(e11) {
    for (var t11, r11 = 0, n6 = 0, a3 = e11.length; a3 >= 4; ++n6, a3 -= 4)
      t11 = (65535 & (t11 = 255 & e11.charCodeAt(n6) | (255 & e11.charCodeAt(++n6)) << 8 | (255 & e11.charCodeAt(++n6)) << 16 | (255 & e11.charCodeAt(++n6)) << 24)) * 1540483477 + ((t11 >>> 16) * 59797 << 16), t11 ^= t11 >>> 24, r11 = (65535 & t11) * 1540483477 + ((t11 >>> 16) * 59797 << 16) ^ (65535 & r11) * 1540483477 + ((r11 >>> 16) * 59797 << 16);
    switch (a3) {
      case 3:
        r11 ^= (255 & e11.charCodeAt(n6 + 2)) << 16;
      case 2:
        r11 ^= (255 & e11.charCodeAt(n6 + 1)) << 8;
      case 1:
        r11 ^= 255 & e11.charCodeAt(n6), r11 = (65535 & r11) * 1540483477 + ((r11 >>> 16) * 59797 << 16);
    }
    return r11 ^= r11 >>> 13, (((r11 = (65535 & r11) * 1540483477 + ((r11 >>> 16) * 59797 << 16)) ^ r11 >>> 15) >>> 0).toString(36);
  }(o2) + l2, styles: o2, next: V };
};
let tS = class {
  processAll(e10) {
    let t10 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], r10 = [], { state: n3, extends: a2, ...o2 } = e10;
    if (a2)
      for (let e11 of a2)
        r10.push(...this.processAll(e11, t10));
    if (n3) {
      let e11 = {}, t11 = {};
      tS.walkStateValues(n3, (r11, n6, a3) => {
        let o3 = `--${this.opt.varPrefix}-state-${n6.join("-")}`, i2 = O(n6), s2 = {};
        this.process(s2, i2, r11, false), e11[o3] = s2[i2], w(t11, [...a3, i2], `var(${o3})`);
      }), r10.push(e11), r10.push(...this.processAll(t11));
    }
    if (!D(o2)) {
      let e11 = {};
      this.processTo(e11, o2, t10), r10.push(e11);
    }
    return r10;
  }
  processTo(e10, t10) {
    let r10 = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    for (let n3 in t10)
      this.process(e10, n3, t10[n3], r10);
  }
  process(e10, t10, r10) {
    var n3, a2, o2, i2;
    let s2 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (this.opt.mixins[t10]) {
      let a3 = null === (n3 = this.opt.mixins[t10]) || void 0 === n3 ? void 0 : n3.get(r10);
      if (a3)
        for (let t11 in a3)
          this.process(e10, t11, a3[t11], s2);
      return;
    }
    if (y(r10)) {
      e10[t10 = null !== (a2 = tS.convertSelector(t10)) && void 0 !== a2 ? a2 : t10] = null !== (o2 = e10[t10]) && void 0 !== o2 ? o2 : {}, this.processTo(e10[t10], r10);
      return;
    }
    if (s2 && ta[t10 = null !== (i2 = ti[t10]) && void 0 !== i2 ? i2 : t10]) {
      for (let n6 of ta[t10])
        e10[n6] = this.opt.processValue(n6, r10);
      return;
    }
    e10[t10] = this.opt.processValue(t10, r10);
  }
  constructor(e10) {
    this.opt = e10;
  }
};
tS.supportedPseudoClasses = { active: "active", after: "after", anyLink: "any-link", before: "before", blank: "blank", checked: "checked", current: "current", default: "default", defined: "defined", disabled: "disabled", empty: "empty", enabled: "enabled", first: "first", firstChild: "first-child", firstLetter: "first-letter", firstLine: "first-line", firstOfType: "first-of-type", focus: "focus", focusVisible: "focus-visible", focusWithin: "focus-within", fullscreen: "fullscreen", future: "future", hover: "hover", inRange: "in-range", indeterminate: "indeterminate", invalid: "invalid", lastChild: "last-child", lastOfType: "last-of-type", left: "left", link: "link", localLink: "local-link", nthCol: "nth-col", nthLastCol: "nth-last-col", onlyChild: "only-child", onlyOfType: "only-of-type", optional: "optional", outOfRange: "out-of-range", past: "past", paused: "paused", pictureInPicture: "picture-in-picture", placeholderShown: "placeholder-shown", playing: "playing", readOnly: "read-only", readWrite: "read-write", required: "required", right: "right", root: "root", scope: "scope", target: "target", targetWithin: "target-within", userInvalid: "user-invalid", userValid: "user-valid", valid: "valid", visited: "visited" }, tS.convertSelector = (e10) => {
  if (tc[e10])
    return tc[e10];
  if (e10.startsWith("$") || e10.endsWith("$") || e10.startsWith("_")) {
    let t10 = "", r10 = "";
    if (e10.startsWith("_") ? (t10 = "&", e10 = e10.slice(1)) : e10.startsWith("$") ? (t10 = "& ", e10 = e10.slice(1)) : (r10 = " &", e10 = e10.slice(0, e10.length - 1)), e10.startsWith("data") || e10.startsWith("aria")) {
      let [n3, a2] = e10.split("__");
      return a2 ? `${t10}[${_(n3)}='${_(a2)}']${r10}` : `${t10}[${_(n3)}]${r10}`;
    }
    if ("&" == t10) {
      if (e10.startsWith("$"))
        return `${t10}::${e10.slice(1)}`;
      if (tS.supportedPseudoClasses[e10]) {
        let r12 = tS.supportedPseudoClasses[e10];
        return `${t10}:${r12}, ${t10}[data-${r12}]:not([data-${r12}='false']), ${t10}.${r12}`;
      }
      let [r11, n3] = e10.split("__"), a2 = _(r11);
      return n3 ? `${t10}[data-${a2}='${_(n3)}']` : `${t10}[data-${a2}]:not([data-${a2}='false'])`;
    }
  }
}, tS.walkStateValues = function(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { default: {}, selectorPath: [], path: [] }, { $: n3, ...a2 } = e10;
  for (let e11 in a2) {
    var o2;
    let i2 = a2[e11], s2 = null !== (o2 = a2.default) && void 0 !== o2 ? o2 : r10.default, l2 = null != n3 ? n3 : S(s2, [...r10.path.slice(1), "$"]), c2 = l2 ? [...r10.selectorPath, l2] : r10.selectorPath, u2 = [...r10.path, e11];
    if (y(i2)) {
      tS.walkStateValues(i2, t10, { path: u2, selectorPath: c2, default: s2 });
      continue;
    }
    t10(i2, u2, c2);
  }
};
let tO = (e10) => e10.reduce((e11, t10) => ({ ...e11, [t10]: true }), {}), tD = class {
  static create(e10, t10) {
    return new tD(e10, t10);
  }
  cssVar(e10, t10) {
    return `--${this.varPrefix}-${_(e10)}__${t10.replaceAll("/", "--").replaceAll(".", "__")}`;
  }
  get rootCSSVars() {
    return this.cssVars;
  }
  unstable_css(e10, t10) {
    var r10;
    let n3 = null != t10 ? t10 : {};
    return n3.__emotion_styles = null !== (r10 = n3.__emotion_styles) && void 0 !== r10 ? r10 : t_(this.unstable_sx(t10), null == e10 ? void 0 : e10.registered, {}), n3.__emotion_styles;
  }
  toFigmaTokens() {
    let e10 = { space: { dp: { type: "sizing", value: 1 } } }, t10 = {}, r10 = (e11, t11, r11) => {
      let n6 = e11;
      for (let e12 = 0; e12 < t11.length; e12++) {
        var a2;
        if (e12 == t11.length - 1) {
          n6[t11[e12]] = r11;
          continue;
        }
        n6[t11[e12]] = null !== (a2 = n6[t11[e12]]) && void 0 !== a2 ? a2 : {}, n6 = n6[t11[e12]];
      }
    }, n3 = (e11, t11) => M(t11) ? { type: e11, value: $(t11, (t12) => n3(e11, t12).value) } : (v(t11) && (t11 = t11.replace(/var\(([^)]+)\)/g, (e12) => {
      let t12 = e12.slice(4, e12.length - 1), r11 = t12.slice(`--${this.varPrefix}-`.length).split("--");
      return `{${r11[0].split("__").map((e13, t13) => 0 == t13 ? A(e13) : e13).join(".")}}`;
    }).replace(/calc\(.+\)$/g, (e12) => e12.slice(5, e12.length - 1))), { type: e11, value: t11 });
    for (let a2 in this.tokens) {
      let o2 = this.tokens[a2], i2 = (i3) => o2.tokens.forEach((s2) => {
        if (s2.includes("/"))
          return;
        let l2 = o2.get(s2, "_default"), c2 = o2.get(s2, "_dark");
        r10(e10, [a2, ...s2.split(".")], n3(i3, l2)), l2 != c2 && r10(t10, [a2, ...s2.split(".")], n3(i3, c2));
      });
      switch (a2) {
        case "color":
          i2("color");
          break;
        case "rounded":
          i2("borderRadius");
          break;
        case "shadow":
          i2("boxShadow");
          break;
        case "font":
          i2("fontFamily");
          break;
        case "fontWeight":
          i2("fontWeight");
      }
    }
    for (let t11 in this.mixins) {
      let a2 = this.mixins[t11], o2 = (o3) => a2.tokens.forEach((i2) => {
        let s2 = this.unstable_sx(a2.get(i2))[0];
        r10(e10, [t11, ...i2.split(".")], n3(o3, s2));
      });
      "textStyle" === t11 && o2("typography");
    }
    return { core: e10, dark: t10 };
  }
  constructor(e10, t10 = {}) {
    var r10, n3;
    for (let a2 in this.cssVars = {}, this.tokens = {}, this.propValues = {}, this.mixins = {}, this.dp = (e11) => 0 === e11 ? 0 : `calc(${e11} * var(${this.cssVar("space", "dp")}))`, this.transformFallback = (e11, t11) => tD.propsCanBaseDp[e11] && T(t11) ? tD.propsCanPercent[e11] && 1 > Math.abs(t11) ? `${100 * t11}%` : this.dp(t11) : t11, this.token = new Proxy({}, { get: (e11, t11) => {
      var r11, n6;
      return this.tokens[t11] ? Object.assign((e12) => {
        var r12;
        return null === (r12 = this.tokens[t11]) || void 0 === r12 ? void 0 : r12.get(e12, `_${this.mode}`);
      }, { tokens: null === (r11 = this.tokens[t11]) || void 0 === r11 ? void 0 : r11.tokens }) : this.mixins[t11] ? Object.assign((e12) => {
        var r12;
        return null === (r12 = this.mixins[t11]) || void 0 === r12 ? void 0 : r12.get(e12);
      }, { tokens: null === (n6 = this.mixins[t11]) || void 0 === n6 ? void 0 : n6.tokens }) : void 0;
    } }), this.processValue = (e11, t11) => {
      var r11, n6, a3;
      if (tm(t11)) {
        let r12 = null === (n6 = this.propValues[e11]) || void 0 === n6 ? void 0 : n6.use(t11.token, true);
        return r12 ? t11(r12) : void 0;
      }
      return null !== (a3 = null === (r11 = this.propValues[e11]) || void 0 === r11 ? void 0 : r11.use(t11)) && void 0 !== a3 ? a3 : this.transformFallback(e11, t11);
    }, this.unstable_sx = (e11) => new tS({ mixins: this.mixins, varPrefix: this.varPrefix, processValue: this.processValue }).processAll(e11), this.varPrefix = null !== (r10 = t10.varPrefix) && void 0 !== r10 ? r10 : "vk", this.mode = null !== (n3 = t10.mode) && void 0 !== n3 ? n3 : "light", w(this.cssVars, [this.cssVar("space", "dp")], "0.1rem"), e10) {
      let t11 = e10[a2];
      if (t11.type == tu.var) {
        let e11 = new tf(t11, { cssVar: (e12) => this.cssVar(a2, e12), transformFallback: (e12) => this.transformFallback(t11.on[0], e12) });
        for (let r11 of (this.tokens[a2] = e11, t11.on))
          this.propValues[r11] = e11;
        for (let t12 of e11.tokens)
          for (let r11 of ["light", "dark"]) {
            let n6 = r11 === this.mode ? "_default" : `_${r11}`, o2 = e11.get(t12, n6, true);
            R(o2) || ("_default" === n6 ? w(this.cssVars, [this.cssVar(a2, t12)], o2) : w(this.cssVars, [n6, this.cssVar(a2, t12)], o2));
          }
        continue;
      }
      if (t11.type == tu.mixin) {
        let e11 = new th(t11);
        for (let r11 of t11.on)
          this.mixins[r11] = e11;
      }
    }
  }
};
tD.propsCanPercent = tO([...td.boxSize({}).on]), tD.propsCanBaseDp = tO([...td.boxSize({}).on, ...td.space({}).on, ...td.fontSize({}).on, ...td.letterSpacing({}).on, ...td.lineHeight({}).on, ...td.rounded({}).on]);
let tT = { shadow: td.shadow({ 0: { _default: "0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0)", _dark: "0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0)" }, 1: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)", _dark: "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 2: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)", _dark: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 3: { _default: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)" }, 4: { _default: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)" }, 5: { _default: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)", _dark: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)" } }), elevation: td.customMixin("elevation", { 0: td.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "0", _hover: { shadow: "1" } }), 1: td.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "1", _hover: { shadow: "2" } }), 2: td.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "2", _hover: { shadow: "3" } }), 3: td.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "3", _hover: { shadow: "4" } }), 4: td.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "4", _hover: { shadow: "5" } }) }) }, tR = { font: td.font({ brand: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', plain: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', code: "'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace" }), fontWeight: td.fontWeight({ regular: 400, medium: 500, bold: 700 }), textStyle: td.customMixin("textStyle", { sys: { "display-large": td.mixin({ lineHeight: 64, fontSize: 57, letterSpacing: -0.25, fontWeight: "regular", font: "brand" }), "display-medium": td.mixin({ lineHeight: 52, fontSize: 45, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "display-small": td.mixin({ lineHeight: 44, fontSize: 36, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-large": td.mixin({ lineHeight: 40, fontSize: 32, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-medium": td.mixin({ lineHeight: 36, fontSize: 28, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-small": td.mixin({ lineHeight: 32, fontSize: 24, letterSpacing: 0, fontWeight: "regular", font: "plain" }), "title-large": td.mixin({ lineHeight: 28, fontSize: 22, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "title-medium": td.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.15, fontWeight: "medium", font: "plain" }), "title-small": td.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-large": td.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-medium": td.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "label-small": td.mixin({ lineHeight: 16, fontSize: 11, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "body-large": td.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.5, fontWeight: "regular", font: "plain" }), "body-medium": td.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.25, fontWeight: "regular", font: "plain" }), "body-small": td.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.4, fontWeight: "regular", font: "plain" }) } }) };
function t$(e10) {
  return e10 < 0 ? -1 : 0 === e10 ? 0 : 1;
}
function tA(e10, t10, r10) {
  return r10 < e10 ? e10 : r10 > t10 ? t10 : r10;
}
function tI(e10, t10) {
  let r10 = e10[0] * t10[0][0] + e10[1] * t10[0][1] + e10[2] * t10[0][2], n3 = e10[0] * t10[1][0] + e10[1] * t10[1][1] + e10[2] * t10[1][2], a2 = e10[0] * t10[2][0] + e10[1] * t10[2][1] + e10[2] * t10[2][2];
  return [r10, n3, a2];
}
let tL = [[0.41233895, 0.35762064, 0.18051042], [0.2126, 0.7152, 0.0722], [0.01932141, 0.11916382, 0.95034478]], tF = [[3.2413774792388685, -1.5376652402851851, -0.49885366846268053], [-0.9691452513005321, 1.8758853451067872, 0.04156585616912061], [0.05562093689691305, -0.20395524564742123, 1.0571799111220335]], tB = [95.047, 100, 108.883];
function tj(e10, t10, r10) {
  return (-16777216 | (255 & e10) << 16 | (255 & t10) << 8 | 255 & r10) >>> 0;
}
function tE(e10) {
  let t10 = tN(e10[0]), r10 = tN(e10[1]), n3 = tN(e10[2]);
  return tj(t10, r10, n3);
}
function tV(e10) {
  let t10 = function(e11) {
    let t11 = tW(e11 >> 16 & 255), r10 = tW(e11 >> 8 & 255), n3 = tW(255 & e11);
    return tI([t11, r10, n3], tL);
  }(e10)[1];
  return 116 * tq(t10 / 100) - 16;
}
function tH(e10) {
  return 100 * function(e11) {
    let t10 = e11 * e11 * e11;
    return t10 > 216 / 24389 ? t10 : (116 * e11 - 16) / (24389 / 27);
  }((e10 + 16) / 116);
}
function tz(e10) {
  return 116 * tq(e10 / 100) - 16;
}
function tW(e10) {
  let t10 = e10 / 255;
  return t10 <= 0.040449936 ? t10 / 12.92 * 100 : 100 * Math.pow((t10 + 0.055) / 1.055, 2.4);
}
function tN(e10) {
  var t10;
  let r10 = e10 / 100;
  return (t10 = Math.round(255 * (r10 <= 31308e-7 ? 12.92 * r10 : 1.055 * Math.pow(r10, 1 / 2.4) - 0.055))) < 0 ? 0 : t10 > 255 ? 255 : t10;
}
function tq(e10) {
  return e10 > 216 / 24389 ? Math.pow(e10, 1 / 3) : (24389 / 27 * e10 + 16) / 116;
}
class tU {
  static make() {
    var e10, t10;
    let r10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tB, n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200 / Math.PI * tH(50) / 100, a2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50, o2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2, i2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], s2 = 0.401288 * r10[0] + 0.650173 * r10[1] + -0.051461 * r10[2], l2 = -0.250268 * r10[0] + 1.204414 * r10[1] + 0.045854 * r10[2], c2 = -2079e-6 * r10[0] + 0.048952 * r10[1] + 0.953127 * r10[2], u2 = 0.8 + o2 / 10, d2 = u2 >= 0.9 ? (1 - (e10 = (u2 - 0.9) * 10)) * 0.59 + 0.69 * e10 : (1 - (t10 = (u2 - 0.8) * 10)) * 0.525 + 0.59 * t10, f2 = i2 ? 1 : u2 * (1 - 1 / 3.6 * Math.exp((-n3 - 42) / 92));
    f2 = f2 > 1 ? 1 : f2 < 0 ? 0 : f2;
    let h2 = [f2 * (100 / s2) + 1 - f2, f2 * (100 / l2) + 1 - f2, f2 * (100 / c2) + 1 - f2], p2 = 1 / (5 * n3 + 1), m2 = p2 * p2 * p2 * p2, g2 = 1 - m2, b2 = m2 * n3 + 0.1 * g2 * g2 * Math.cbrt(5 * n3), v2 = tH(a2) / r10[1], y2 = 1.48 + Math.sqrt(v2), x2 = 0.725 / Math.pow(v2, 0.2), w2 = [Math.pow(b2 * h2[0] * s2 / 100, 0.42), Math.pow(b2 * h2[1] * l2 / 100, 0.42), Math.pow(b2 * h2[2] * c2 / 100, 0.42)], k2 = [400 * w2[0] / (w2[0] + 27.13), 400 * w2[1] / (w2[1] + 27.13), 400 * w2[2] / (w2[2] + 27.13)], M2 = (2 * k2[0] + k2[1] + 0.05 * k2[2]) * x2;
    return new tU(v2, M2, x2, x2, d2, u2, h2, b2, Math.pow(b2, 0.25), y2);
  }
  constructor(e10, t10, r10, n3, a2, o2, i2, s2, l2, c2) {
    this.n = e10, this.aw = t10, this.nbb = r10, this.ncb = n3, this.c = a2, this.nc = o2, this.rgbD = i2, this.fl = s2, this.fLRoot = l2, this.z = c2;
  }
}
tU.DEFAULT = tU.make();
class tG {
  distance(e10) {
    let t10 = this.jstar - e10.jstar, r10 = this.astar - e10.astar, n3 = this.bstar - e10.bstar;
    return 1.41 * Math.pow(Math.sqrt(t10 * t10 + r10 * r10 + n3 * n3), 0.63);
  }
  static fromInt(e10) {
    return tG.fromIntInViewingConditions(e10, tU.DEFAULT);
  }
  static fromIntInViewingConditions(e10, t10) {
    let r10 = tW((16711680 & e10) >> 16), n3 = tW((65280 & e10) >> 8), a2 = tW(255 & e10), o2 = 0.41233895 * r10 + 0.35762064 * n3 + 0.18051042 * a2, i2 = 0.2126 * r10 + 0.7152 * n3 + 0.0722 * a2, s2 = 0.01932141 * r10 + 0.11916382 * n3 + 0.95034478 * a2, l2 = t10.rgbD[0] * (0.401288 * o2 + 0.650173 * i2 - 0.051461 * s2), c2 = t10.rgbD[1] * (-0.250268 * o2 + 1.204414 * i2 + 0.045854 * s2), u2 = t10.rgbD[2] * (-2079e-6 * o2 + 0.048952 * i2 + 0.953127 * s2), d2 = Math.pow(t10.fl * Math.abs(l2) / 100, 0.42), f2 = Math.pow(t10.fl * Math.abs(c2) / 100, 0.42), h2 = Math.pow(t10.fl * Math.abs(u2) / 100, 0.42), p2 = 400 * t$(l2) * d2 / (d2 + 27.13), m2 = 400 * t$(c2) * f2 / (f2 + 27.13), g2 = 400 * t$(u2) * h2 / (h2 + 27.13), b2 = (11 * p2 + -12 * m2 + g2) / 11, v2 = (p2 + m2 - 2 * g2) / 9, y2 = 180 * Math.atan2(v2, b2) / Math.PI, x2 = y2 < 0 ? y2 + 360 : y2 >= 360 ? y2 - 360 : y2, w2 = x2 * Math.PI / 180, k2 = (40 * p2 + 20 * m2 + g2) / 20 * t10.nbb, M2 = 100 * Math.pow(k2 / t10.aw, t10.c * t10.z), C2 = 4 / t10.c * Math.sqrt(M2 / 100) * (t10.aw + 4) * t10.fLRoot, P2 = x2 < 20.14 ? x2 + 360 : x2, _2 = 5e4 / 13 * (0.25 * (Math.cos(P2 * Math.PI / 180 + 2) + 3.8)) * t10.nc * t10.ncb, S2 = Math.pow(_2 * Math.sqrt(b2 * b2 + v2 * v2) / ((20 * p2 + 20 * m2 + 21 * g2) / 20 + 0.305), 0.9) * Math.pow(1.64 - Math.pow(0.29, t10.n), 0.73), O2 = S2 * Math.sqrt(M2 / 100), D2 = O2 * t10.fLRoot, T2 = 50 * Math.sqrt(S2 * t10.c / (t10.aw + 4)), R2 = (1 + 100 * 7e-3) * M2 / (1 + 7e-3 * M2), $2 = 1 / 0.0228 * Math.log(1 + 0.0228 * D2), A2 = $2 * Math.cos(w2), I2 = $2 * Math.sin(w2);
    return new tG(x2, O2, M2, C2, D2, T2, R2, A2, I2);
  }
  static fromJch(e10, t10, r10) {
    return tG.fromJchInViewingConditions(e10, t10, r10, tU.DEFAULT);
  }
  static fromJchInViewingConditions(e10, t10, r10, n3) {
    let a2 = 4 / n3.c * Math.sqrt(e10 / 100) * (n3.aw + 4) * n3.fLRoot, o2 = t10 * n3.fLRoot, i2 = t10 / Math.sqrt(e10 / 100), s2 = 50 * Math.sqrt(i2 * n3.c / (n3.aw + 4)), l2 = r10 * Math.PI / 180, c2 = (1 + 100 * 7e-3) * e10 / (1 + 7e-3 * e10), u2 = 1 / 0.0228 * Math.log(1 + 0.0228 * o2), d2 = u2 * Math.cos(l2), f2 = u2 * Math.sin(l2);
    return new tG(r10, t10, e10, a2, o2, s2, c2, d2, f2);
  }
  static fromUcs(e10, t10, r10) {
    return tG.fromUcsInViewingConditions(e10, t10, r10, tU.DEFAULT);
  }
  static fromUcsInViewingConditions(e10, t10, r10, n3) {
    let a2 = (Math.exp(0.0228 * Math.sqrt(t10 * t10 + r10 * r10)) - 1) / 0.0228 / n3.fLRoot, o2 = Math.atan2(r10, t10) * (180 / Math.PI);
    return o2 < 0 && (o2 += 360), tG.fromJchInViewingConditions(e10 / (1 - (e10 - 100) * 7e-3), a2, o2, n3);
  }
  toInt() {
    return this.viewed(tU.DEFAULT);
  }
  viewed(e10) {
    let t10 = 0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100), r10 = Math.pow(t10 / Math.pow(1.64 - Math.pow(0.29, e10.n), 0.73), 1 / 0.9), n3 = this.hue * Math.PI / 180, a2 = e10.aw * Math.pow(this.j / 100, 1 / e10.c / e10.z), o2 = 0.25 * (Math.cos(n3 + 2) + 3.8) * (5e4 / 13) * e10.nc * e10.ncb, i2 = a2 / e10.nbb, s2 = Math.sin(n3), l2 = Math.cos(n3), c2 = 23 * (i2 + 0.305) * r10 / (23 * o2 + 11 * r10 * l2 + 108 * r10 * s2), u2 = c2 * l2, d2 = c2 * s2, f2 = (460 * i2 + 451 * u2 + 288 * d2) / 1403, h2 = (460 * i2 - 891 * u2 - 261 * d2) / 1403, p2 = (460 * i2 - 220 * u2 - 6300 * d2) / 1403, m2 = Math.max(0, 27.13 * Math.abs(f2) / (400 - Math.abs(f2))), g2 = t$(f2) * (100 / e10.fl) * Math.pow(m2, 1 / 0.42), b2 = Math.max(0, 27.13 * Math.abs(h2) / (400 - Math.abs(h2))), v2 = t$(h2) * (100 / e10.fl) * Math.pow(b2, 1 / 0.42), y2 = Math.max(0, 27.13 * Math.abs(p2) / (400 - Math.abs(p2))), x2 = t$(p2) * (100 / e10.fl) * Math.pow(y2, 1 / 0.42), w2 = g2 / e10.rgbD[0], k2 = v2 / e10.rgbD[1], M2 = x2 / e10.rgbD[2], C2 = function(e11, t11, r11) {
      let n6 = tF[0][0] * e11 + tF[0][1] * t11 + tF[0][2] * r11, a3 = tF[1][0] * e11 + tF[1][1] * t11 + tF[1][2] * r11, o3 = tF[2][0] * e11 + tF[2][1] * t11 + tF[2][2] * r11, i3 = tN(n6), s3 = tN(a3), l3 = tN(o3);
      return tj(i3, s3, l3);
    }(1.86206786 * w2 - 1.01125463 * k2 + 0.14918677 * M2, 0.38752654 * w2 + 0.62144744 * k2 - 897398e-8 * M2, -0.0158415 * w2 - 0.03412294 * k2 + 1.04996444 * M2);
    return C2;
  }
  static fromXyzInViewingConditions(e10, t10, r10, n3) {
    let a2 = n3.rgbD[0] * (0.401288 * e10 + 0.650173 * t10 - 0.051461 * r10), o2 = n3.rgbD[1] * (-0.250268 * e10 + 1.204414 * t10 + 0.045854 * r10), i2 = n3.rgbD[2] * (-2079e-6 * e10 + 0.048952 * t10 + 0.953127 * r10), s2 = Math.pow(n3.fl * Math.abs(a2) / 100, 0.42), l2 = Math.pow(n3.fl * Math.abs(o2) / 100, 0.42), c2 = Math.pow(n3.fl * Math.abs(i2) / 100, 0.42), u2 = 400 * t$(a2) * s2 / (s2 + 27.13), d2 = 400 * t$(o2) * l2 / (l2 + 27.13), f2 = 400 * t$(i2) * c2 / (c2 + 27.13), h2 = (11 * u2 + -12 * d2 + f2) / 11, p2 = (u2 + d2 - 2 * f2) / 9, m2 = 180 * Math.atan2(p2, h2) / Math.PI, g2 = m2 < 0 ? m2 + 360 : m2 >= 360 ? m2 - 360 : m2, b2 = g2 * Math.PI / 180, v2 = (40 * u2 + 20 * d2 + f2) / 20 * n3.nbb, y2 = 100 * Math.pow(v2 / n3.aw, n3.c * n3.z), x2 = 4 / n3.c * Math.sqrt(y2 / 100) * (n3.aw + 4) * n3.fLRoot, w2 = g2 < 20.14 ? g2 + 360 : g2, k2 = 5e4 / 13 * (0.25 * (Math.cos(w2 * Math.PI / 180 + 2) + 3.8)) * n3.nc * n3.ncb, M2 = Math.pow(k2 * Math.sqrt(h2 * h2 + p2 * p2) / ((20 * u2 + 20 * d2 + 21 * f2) / 20 + 0.305), 0.9) * Math.pow(1.64 - Math.pow(0.29, n3.n), 0.73), C2 = M2 * Math.sqrt(y2 / 100), P2 = C2 * n3.fLRoot, _2 = 50 * Math.sqrt(M2 * n3.c / (n3.aw + 4)), S2 = (1 + 100 * 7e-3) * y2 / (1 + 7e-3 * y2), O2 = Math.log(1 + 0.0228 * P2) / 0.0228, D2 = O2 * Math.cos(b2), T2 = O2 * Math.sin(b2);
    return new tG(g2, C2, y2, x2, P2, _2, S2, D2, T2);
  }
  xyzInViewingConditions(e10) {
    let t10 = 0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100), r10 = Math.pow(t10 / Math.pow(1.64 - Math.pow(0.29, e10.n), 0.73), 1 / 0.9), n3 = this.hue * Math.PI / 180, a2 = e10.aw * Math.pow(this.j / 100, 1 / e10.c / e10.z), o2 = 0.25 * (Math.cos(n3 + 2) + 3.8) * (5e4 / 13) * e10.nc * e10.ncb, i2 = a2 / e10.nbb, s2 = Math.sin(n3), l2 = Math.cos(n3), c2 = 23 * (i2 + 0.305) * r10 / (23 * o2 + 11 * r10 * l2 + 108 * r10 * s2), u2 = c2 * l2, d2 = c2 * s2, f2 = (460 * i2 + 451 * u2 + 288 * d2) / 1403, h2 = (460 * i2 - 891 * u2 - 261 * d2) / 1403, p2 = (460 * i2 - 220 * u2 - 6300 * d2) / 1403, m2 = Math.max(0, 27.13 * Math.abs(f2) / (400 - Math.abs(f2))), g2 = t$(f2) * (100 / e10.fl) * Math.pow(m2, 1 / 0.42), b2 = Math.max(0, 27.13 * Math.abs(h2) / (400 - Math.abs(h2))), v2 = t$(h2) * (100 / e10.fl) * Math.pow(b2, 1 / 0.42), y2 = Math.max(0, 27.13 * Math.abs(p2) / (400 - Math.abs(p2))), x2 = t$(p2) * (100 / e10.fl) * Math.pow(y2, 1 / 0.42), w2 = g2 / e10.rgbD[0], k2 = v2 / e10.rgbD[1], M2 = x2 / e10.rgbD[2];
    return [1.86206786 * w2 - 1.01125463 * k2 + 0.14918677 * M2, 0.38752654 * w2 + 0.62144744 * k2 - 897398e-8 * M2, -0.0158415 * w2 - 0.03412294 * k2 + 1.04996444 * M2];
  }
  constructor(e10, t10, r10, n3, a2, o2, i2, s2, l2) {
    this.hue = e10, this.chroma = t10, this.j = r10, this.q = n3, this.m = a2, this.s = o2, this.jstar = i2, this.astar = s2, this.bstar = l2;
  }
}
class tY {
  static sanitizeRadians(e10) {
    return (e10 + 8 * Math.PI) % (2 * Math.PI);
  }
  static trueDelinearized(e10) {
    let t10 = e10 / 100;
    return 255 * (t10 <= 31308e-7 ? 12.92 * t10 : 1.055 * Math.pow(t10, 1 / 2.4) - 0.055);
  }
  static chromaticAdaptation(e10) {
    let t10 = Math.pow(Math.abs(e10), 0.42);
    return 400 * t$(e10) * t10 / (t10 + 27.13);
  }
  static hueOf(e10) {
    let t10 = tI(e10, tY.SCALED_DISCOUNT_FROM_LINRGB), r10 = tY.chromaticAdaptation(t10[0]), n3 = tY.chromaticAdaptation(t10[1]), a2 = tY.chromaticAdaptation(t10[2]);
    return Math.atan2((r10 + n3 - 2 * a2) / 9, (11 * r10 + -12 * n3 + a2) / 11);
  }
  static areInCyclicOrder(e10, t10, r10) {
    let n3 = tY.sanitizeRadians(t10 - e10), a2 = tY.sanitizeRadians(r10 - e10);
    return n3 < a2;
  }
  static intercept(e10, t10, r10) {
    return (t10 - e10) / (r10 - e10);
  }
  static lerpPoint(e10, t10, r10) {
    return [e10[0] + (r10[0] - e10[0]) * t10, e10[1] + (r10[1] - e10[1]) * t10, e10[2] + (r10[2] - e10[2]) * t10];
  }
  static setCoordinate(e10, t10, r10, n3) {
    let a2 = tY.intercept(e10[n3], t10, r10[n3]);
    return tY.lerpPoint(e10, a2, r10);
  }
  static isBounded(e10) {
    return 0 <= e10 && e10 <= 100;
  }
  static nthVertex(e10, t10) {
    let r10 = tY.Y_FROM_LINRGB[0], n3 = tY.Y_FROM_LINRGB[1], a2 = tY.Y_FROM_LINRGB[2], o2 = t10 % 4 <= 1 ? 0 : 100, i2 = t10 % 2 == 0 ? 0 : 100;
    if (t10 < 4) {
      let t11 = (e10 - o2 * n3 - i2 * a2) / r10;
      return tY.isBounded(t11) ? [t11, o2, i2] : [-1, -1, -1];
    }
    if (t10 < 8) {
      let t11 = (e10 - i2 * r10 - o2 * a2) / n3;
      return tY.isBounded(t11) ? [i2, t11, o2] : [-1, -1, -1];
    }
    {
      let t11 = (e10 - o2 * r10 - i2 * n3) / a2;
      return tY.isBounded(t11) ? [o2, i2, t11] : [-1, -1, -1];
    }
  }
  static bisectToSegment(e10, t10) {
    let r10 = [-1, -1, -1], n3 = r10, a2 = 0, o2 = 0, i2 = false, s2 = true;
    for (let l2 = 0; l2 < 12; l2++) {
      let c2 = tY.nthVertex(e10, l2);
      if (c2[0] < 0)
        continue;
      let u2 = tY.hueOf(c2);
      if (!i2) {
        r10 = c2, n3 = c2, a2 = u2, o2 = u2, i2 = true;
        continue;
      }
      (s2 || tY.areInCyclicOrder(a2, u2, o2)) && (s2 = false, tY.areInCyclicOrder(a2, t10, u2) ? (n3 = c2, o2 = u2) : (r10 = c2, a2 = u2));
    }
    return [r10, n3];
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
    let r10 = tY.bisectToSegment(e10, t10), n3 = r10[0], a2 = tY.hueOf(n3), o2 = r10[1];
    for (let e11 = 0; e11 < 3; e11++)
      if (n3[e11] !== o2[e11]) {
        let r11 = -1, i2 = 255;
        n3[e11] < o2[e11] ? (r11 = tY.criticalPlaneBelow(tY.trueDelinearized(n3[e11])), i2 = tY.criticalPlaneAbove(tY.trueDelinearized(o2[e11]))) : (r11 = tY.criticalPlaneAbove(tY.trueDelinearized(n3[e11])), i2 = tY.criticalPlaneBelow(tY.trueDelinearized(o2[e11])));
        for (let s2 = 0; s2 < 8 && !(1 >= Math.abs(i2 - r11)); s2++) {
          let s3 = Math.floor((r11 + i2) / 2), l2 = tY.CRITICAL_PLANES[s3], c2 = tY.setCoordinate(n3, l2, o2, e11), u2 = tY.hueOf(c2);
          tY.areInCyclicOrder(a2, t10, u2) ? (o2 = c2, i2 = s3) : (n3 = c2, a2 = u2, r11 = s3);
        }
      }
    return tY.midpoint(n3, o2);
  }
  static inverseChromaticAdaptation(e10) {
    let t10 = Math.abs(e10);
    return t$(e10) * Math.pow(Math.max(0, 27.13 * t10 / (400 - t10)), 1 / 0.42);
  }
  static findResultByJ(e10, t10, r10) {
    let n3 = 11 * Math.sqrt(r10), a2 = tU.DEFAULT, o2 = 1 / Math.pow(1.64 - Math.pow(0.29, a2.n), 0.73), i2 = 0.25 * (Math.cos(e10 + 2) + 3.8) * (5e4 / 13) * a2.nc * a2.ncb, s2 = Math.sin(e10), l2 = Math.cos(e10);
    for (let e11 = 0; e11 < 5; e11++) {
      let c2 = n3 / 100, u2 = 0 === t10 || 0 === n3 ? 0 : t10 / Math.sqrt(c2), d2 = Math.pow(u2 * o2, 1 / 0.9), f2 = a2.aw * Math.pow(c2, 1 / a2.c / a2.z), h2 = f2 / a2.nbb, p2 = 23 * (h2 + 0.305) * d2 / (23 * i2 + 11 * d2 * l2 + 108 * d2 * s2), m2 = p2 * l2, g2 = p2 * s2, b2 = (460 * h2 + 451 * m2 + 288 * g2) / 1403, v2 = (460 * h2 - 891 * m2 - 261 * g2) / 1403, y2 = (460 * h2 - 220 * m2 - 6300 * g2) / 1403, x2 = tY.inverseChromaticAdaptation(b2), w2 = tY.inverseChromaticAdaptation(v2), k2 = tY.inverseChromaticAdaptation(y2), M2 = tI([x2, w2, k2], tY.LINRGB_FROM_SCALED_DISCOUNT);
      if (M2[0] < 0 || M2[1] < 0 || M2[2] < 0)
        break;
      let C2 = tY.Y_FROM_LINRGB[0], P2 = tY.Y_FROM_LINRGB[1], _2 = tY.Y_FROM_LINRGB[2], S2 = C2 * M2[0] + P2 * M2[1] + _2 * M2[2];
      if (S2 <= 0)
        break;
      if (4 === e11 || 2e-3 > Math.abs(S2 - r10)) {
        if (M2[0] > 100.01 || M2[1] > 100.01 || M2[2] > 100.01)
          return 0;
        return tE(M2);
      }
      n3 -= (S2 - r10) * n3 / (2 * S2);
    }
    return 0;
  }
  static solveToInt(e10, t10, r10) {
    var n3;
    if (t10 < 1e-4 || r10 < 1e-4 || r10 > 99.9999)
      return function(e11) {
        let t11 = tH(e11), r11 = tN(t11);
        return tj(r11, r11, r11);
      }(r10);
    (n3 = e10 % 360) < 0 && (n3 += 360), e10 = n3;
    let a2 = e10 / 180 * Math.PI, o2 = tH(r10), i2 = tY.findResultByJ(a2, t10, o2);
    if (0 !== i2)
      return i2;
    let s2 = tY.bisectToLimit(o2, a2);
    return tE(s2);
  }
  static solveToCam(e10, t10, r10) {
    return tG.fromInt(tY.solveToInt(e10, t10, r10));
  }
}
tY.SCALED_DISCOUNT_FROM_LINRGB = [[0.001200833568784504, 0.002389694492170889, 2795742885861124e-19], [5891086651375999e-19, 0.0029785502573438758, 3270666104008398e-19], [10146692491640572e-20, 5364214359186694e-19, 0.0032979401770712076]], tY.LINRGB_FROM_SCALED_DISCOUNT = [[1373.2198709594231, -1100.4251190754821, -7.278681089101213], [-271.815969077903, 559.6580465940733, -32.46047482791194], [1.9622899599665666, -57.173814538844006, 308.7233197812385]], tY.Y_FROM_LINRGB = [0.2126, 0.7152, 0.0722], tY.CRITICAL_PLANES = [0.015176349177441876, 0.045529047532325624, 0.07588174588720938, 0.10623444424209313, 0.13658714259697685, 0.16693984095186062, 0.19729253930674434, 0.2276452376616281, 0.2579979360165119, 0.28835063437139563, 0.3188300904430532, 0.350925934958123, 0.3848314933096426, 0.42057480301049466, 0.458183274052838, 0.4976837250274023, 0.5391024159806381, 0.5824650784040898, 0.6277969426914107, 0.6751227633498623, 0.7244668422128921, 0.775853049866786, 0.829304845476233, 0.8848452951698498, 0.942497089126609, 1.0022825574869039, 1.0642236851973577, 1.1283421258858297, 1.1946592148522128, 1.2631959812511864, 1.3339731595349034, 1.407011200216447, 1.4823302800086415, 1.5599503113873272, 1.6398909516233677, 1.7221716113234105, 1.8068114625156377, 1.8938294463134073, 1.9832442801866852, 2.075074464868551, 2.1693382909216234, 2.2660538449872063, 2.36523901573795, 2.4669114995532007, 2.5710888059345764, 2.6777882626779785, 2.7870270208169257, 2.898822059350997, 3.0131901897720907, 3.1301480604002863, 3.2497121605402226, 3.3718988244681087, 3.4967242352587946, 3.624204428461639, 3.754355295633311, 3.887192587735158, 4.022731918402185, 4.160988767090289, 4.301978482107941, 4.445716283538092, 4.592217266055746, 4.741496401646282, 4.893568542229298, 5.048448422192488, 5.20615066083972, 5.3666897647573375, 5.5300801301023865, 5.696336044816294, 5.865471690767354, 6.037501145825082, 6.212438385869475, 6.390297286737924, 6.571091626112461, 6.7548350853498045, 6.941541251256611, 7.131223617812143, 7.323895587840543, 7.5195704746346665, 7.7182615035334345, 7.919981813454504, 8.124744458384042, 8.332562408825165, 8.543448553206703, 8.757415699253682, 8.974476575321063, 9.194643831691977, 9.417930041841839, 9.644347703669503, 9.873909240696694, 10.106627003236781, 10.342513269534024, 10.58158024687427, 10.8238400726681, 11.069304815507364, 11.317986476196008, 11.569896988756009, 11.825048221409341, 12.083451977536606, 12.345119996613247, 12.610063955123938, 12.878295467455942, 13.149826086772048, 13.42466730586372, 13.702830557985108, 13.984327217668513, 14.269168601521828, 14.55736596900856, 14.848930523210871, 15.143873411576273, 15.44220572664832, 15.743938506781891, 16.04908273684337, 16.35764934889634, 16.66964922287304, 16.985093187232053, 17.30399201960269, 17.62635644741625, 17.95219714852476, 18.281524751807332, 18.614349837764564, 18.95068293910138, 19.290534541298456, 19.633915083172692, 19.98083495742689, 20.331304511189067, 20.685334046541502, 21.042933821039977, 21.404114048223256, 21.76888489811322, 22.137256497705877, 22.50923893145328, 22.884842241736916, 23.264076429332462, 23.6469514538663, 24.033477234264016, 24.42366364919083, 24.817520537484558, 25.21505769858089, 25.61628489293138, 26.021211842414342, 26.429848230738664, 26.842203703840827, 27.258287870275353, 27.678110301598522, 28.10168053274597, 28.529008062403893, 28.96010235337422, 29.39497283293396, 29.83362889318845, 30.276079891419332, 30.722335150426627, 31.172403958865512, 31.62629557157785, 32.08401920991837, 32.54558406207592, 33.010999283389665, 33.4802739966603, 33.953417292456834, 34.430438229418264, 34.911345834551085, 35.39614910352207, 35.88485700094671, 36.37747846067349, 36.87402238606382, 37.37449765026789, 37.87891309649659, 38.38727753828926, 38.89959975977785, 39.41588851594697, 39.93615253289054, 40.460400508064545, 40.98864111053629, 41.520882981230194, 42.05713473317016, 42.597404951718396, 43.141702194811224, 43.6900349931913, 44.24241185063697, 44.798841244188324, 45.35933162437017, 45.92389141541209, 46.49252901546552, 47.065252796817916, 47.64207110610409, 48.22299226451468, 48.808024568002054, 49.3971762874833, 49.9904556690408, 50.587870934119984, 51.189430279724725, 51.79514187861014, 52.40501387947288, 53.0190544071392, 53.637271562750364, 54.259673423945976, 54.88626804504493, 55.517063457223934, 56.15206766869424, 56.79128866487574, 57.43473440856916, 58.08241284012621, 58.734331877617365, 59.39049941699807, 60.05092333227251, 60.715611475655585, 61.38457167773311, 62.057811747619894, 62.7353394731159, 63.417162620860914, 64.10328893648692, 64.79372614476921, 65.48848194977529, 66.18756403501224, 66.89098006357258, 67.59873767827808, 68.31084450182222, 69.02730813691093, 69.74813616640164, 70.47333615344107, 71.20291564160104, 71.93688215501312, 72.67524319850172, 73.41800625771542, 74.16517879925733, 74.9167682708136, 75.67278210128072, 76.43322770089146, 77.1981124613393, 77.96744375590167, 78.74122893956174, 79.51947534912904, 80.30219030335869, 81.08938110306934, 81.88105503125999, 82.67721935322541, 83.4778813166706, 84.28304815182372, 85.09272707154808, 85.90692527145302, 86.72564993000343, 87.54890820862819, 88.3767072518277, 89.2090541872801, 90.04595612594655, 90.88742016217518, 91.73345337380438, 92.58406282226491, 93.43925555268066, 94.29903859396902, 95.16341895893969, 96.03240364439274, 96.9059996312159, 97.78421388448044, 98.6670533535366, 99.55452497210776];
class tX {
  static from(e10, t10, r10) {
    return new tX(tY.solveToInt(e10, t10, r10));
  }
  static fromInt(e10) {
    return new tX(e10);
  }
  toInt() {
    return this.argb;
  }
  get hue() {
    return this.internalHue;
  }
  set hue(e10) {
    this.setInternalState(tY.solveToInt(e10, this.internalChroma, this.internalTone));
  }
  get chroma() {
    return this.internalChroma;
  }
  set chroma(e10) {
    this.setInternalState(tY.solveToInt(this.internalHue, e10, this.internalTone));
  }
  get tone() {
    return this.internalTone;
  }
  set tone(e10) {
    this.setInternalState(tY.solveToInt(this.internalHue, this.internalChroma, e10));
  }
  setInternalState(e10) {
    let t10 = tG.fromInt(e10);
    this.internalHue = t10.hue, this.internalChroma = t10.chroma, this.internalTone = tV(e10), this.argb = e10;
  }
  inViewingConditions(e10) {
    let t10 = tG.fromInt(this.toInt()), r10 = t10.xyzInViewingConditions(e10), n3 = tG.fromXyzInViewingConditions(r10[0], r10[1], r10[2], tU.make()), a2 = tX.from(n3.hue, n3.chroma, tz(r10[1]));
    return a2;
  }
  constructor(e10) {
    this.argb = e10;
    let t10 = tG.fromInt(e10);
    this.internalHue = t10.hue, this.internalChroma = t10.chroma, this.internalTone = tV(e10), this.argb = e10;
  }
}
class tK {
  static ratioOfTones(e10, t10) {
    return e10 = tA(0, 100, e10), t10 = tA(0, 100, t10), tK.ratioOfYs(tH(e10), tH(t10));
  }
  static ratioOfYs(e10, t10) {
    let r10 = e10 > t10 ? e10 : t10;
    return (r10 + 5) / ((r10 === t10 ? e10 : t10) + 5);
  }
  static lighter(e10, t10) {
    if (e10 < 0 || e10 > 100)
      return -1;
    let r10 = tH(e10), n3 = t10 * (r10 + 5) - 5, a2 = tK.ratioOfYs(n3, r10);
    if (a2 < t10 && Math.abs(a2 - t10) > 0.04)
      return -1;
    let o2 = tz(n3) + 0.4;
    return o2 < 0 || o2 > 100 ? -1 : o2;
  }
  static darker(e10, t10) {
    if (e10 < 0 || e10 > 100)
      return -1;
    let r10 = tH(e10), n3 = (r10 + 5) / t10 - 5, a2 = tK.ratioOfYs(r10, n3);
    if (a2 < t10 && Math.abs(a2 - t10) > 0.04)
      return -1;
    let o2 = tz(n3) - 0.4;
    return o2 < 0 || o2 > 100 ? -1 : o2;
  }
  static lighterUnsafe(e10, t10) {
    let r10 = tK.lighter(e10, t10);
    return r10 < 0 ? 100 : r10;
  }
  static darkerUnsafe(e10, t10) {
    let r10 = tK.darker(e10, t10);
    return r10 < 0 ? 0 : r10;
  }
}
class tJ {
  static isDisliked(e10) {
    let t10 = Math.round(e10.hue) >= 90 && 111 >= Math.round(e10.hue), r10 = Math.round(e10.chroma) > 16, n3 = 65 > Math.round(e10.tone);
    return t10 && r10 && n3;
  }
  static fixIfDisliked(e10) {
    return tJ.isDisliked(e10) ? tX.from(e10.hue, e10.chroma, 70) : e10;
  }
}
class tZ {
  static fromPalette(e10) {
    var t10, r10;
    return new tZ(null !== (t10 = e10.name) && void 0 !== t10 ? t10 : "", e10.palette, e10.tone, null !== (r10 = e10.isBackground) && void 0 !== r10 && r10, e10.background, e10.secondBackground, e10.contrastCurve, e10.toneDeltaPair);
  }
  getArgb(e10) {
    return this.getHct(e10).toInt();
  }
  getHct(e10) {
    let t10 = this.hctCache.get(e10);
    if (null != t10)
      return t10;
    let r10 = this.getTone(e10), n3 = this.palette(e10).getHct(r10);
    return this.hctCache.size > 4 && this.hctCache.clear(), this.hctCache.set(e10, n3), n3;
  }
  getTone(e10) {
    let t10 = e10.contrastLevel < 0;
    if (this.toneDeltaPair) {
      let r10 = this.toneDeltaPair(e10), n3 = r10.roleA, a2 = r10.roleB, o2 = r10.delta, i2 = r10.polarity, s2 = r10.stayTogether, l2 = this.background(e10), c2 = l2.getTone(e10), u2 = "nearer" === i2 || "lighter" === i2 && !e10.isDark || "darker" === i2 && e10.isDark, d2 = u2 ? n3 : a2, f2 = u2 ? a2 : n3, h2 = this.name === d2.name, p2 = e10.isDark ? 1 : -1, m2 = d2.contrastCurve.getContrast(e10.contrastLevel), g2 = f2.contrastCurve.getContrast(e10.contrastLevel), b2 = d2.tone(e10), v2 = tK.ratioOfTones(c2, b2) >= m2 ? b2 : tZ.foregroundTone(c2, m2), y2 = f2.tone(e10), x2 = tK.ratioOfTones(c2, y2) >= g2 ? y2 : tZ.foregroundTone(c2, g2);
      return t10 && (v2 = tZ.foregroundTone(c2, m2), x2 = tZ.foregroundTone(c2, g2)), (x2 - v2) * p2 >= o2 || ((x2 = tA(0, 100, v2 + o2 * p2)) - v2) * p2 >= o2 || (v2 = tA(0, 100, x2 - o2 * p2)), 50 <= v2 && v2 < 60 ? x2 = p2 > 0 ? Math.max(x2, (v2 = 60) + o2 * p2) : Math.min(x2, (v2 = 49) + o2 * p2) : 50 <= x2 && x2 < 60 && (x2 = s2 ? p2 > 0 ? Math.max(x2, (v2 = 60) + o2 * p2) : Math.min(x2, (v2 = 49) + o2 * p2) : p2 > 0 ? 60 : 49), h2 ? v2 : x2;
    }
    {
      let r10 = this.tone(e10);
      if (null == this.background)
        return r10;
      let n3 = this.background(e10).getTone(e10), a2 = this.contrastCurve.getContrast(e10.contrastLevel);
      if (tK.ratioOfTones(n3, r10) >= a2 || (r10 = tZ.foregroundTone(n3, a2)), t10 && (r10 = tZ.foregroundTone(n3, a2)), this.isBackground && 50 <= r10 && r10 < 60 && (r10 = tK.ratioOfTones(49, n3) >= a2 ? 49 : 60), this.secondBackground) {
        let [t11, n6] = [this.background, this.secondBackground], [o2, i2] = [t11(e10).getTone(e10), n6(e10).getTone(e10)], [s2, l2] = [Math.max(o2, i2), Math.min(o2, i2)];
        if (tK.ratioOfTones(s2, r10) >= a2 && tK.ratioOfTones(l2, r10) >= a2)
          return r10;
        let c2 = tK.lighter(s2, a2), u2 = tK.darker(l2, a2), d2 = [];
        -1 !== c2 && d2.push(c2), -1 !== u2 && d2.push(u2);
        let f2 = tZ.tonePrefersLightForeground(o2) || tZ.tonePrefersLightForeground(i2);
        return f2 ? c2 < 0 ? 100 : c2 : 1 === d2.length ? d2[0] : u2 < 0 ? 0 : u2;
      }
      return r10;
    }
  }
  static foregroundTone(e10, t10) {
    let r10 = tK.lighterUnsafe(e10, t10), n3 = tK.darkerUnsafe(e10, t10), a2 = tK.ratioOfTones(r10, e10), o2 = tK.ratioOfTones(n3, e10), i2 = tZ.tonePrefersLightForeground(e10);
    if (!i2)
      return o2 >= t10 || o2 >= a2 ? n3 : r10;
    {
      let e11 = 0.1 > Math.abs(a2 - o2) && a2 < t10 && o2 < t10;
      return a2 >= t10 || a2 >= o2 || e11 ? r10 : n3;
    }
  }
  static tonePrefersLightForeground(e10) {
    return 60 > Math.round(e10);
  }
  static toneAllowsLightForeground(e10) {
    return 49 >= Math.round(e10);
  }
  static enableLightForeground(e10) {
    return tZ.tonePrefersLightForeground(e10) && !tZ.toneAllowsLightForeground(e10) ? 49 : e10;
  }
  constructor(e10, t10, r10, n3, a2, o2, i2, s2) {
    if (this.name = e10, this.palette = t10, this.tone = r10, this.isBackground = n3, this.background = a2, this.secondBackground = o2, this.contrastCurve = i2, this.toneDeltaPair = s2, this.hctCache = /* @__PURE__ */ new Map(), !a2 && o2)
      throw Error(`Color ${e10} has secondBackgrounddefined, but background is not defined.`);
    if (!a2 && i2)
      throw Error(`Color ${e10} has contrastCurvedefined, but background is not defined.`);
    if (a2 && !i2)
      throw Error(`Color ${e10} has backgrounddefined, but contrastCurve is not defined.`);
  }
}
!function(e10) {
  e10[e10.MONOCHROME = 0] = "MONOCHROME", e10[e10.NEUTRAL = 1] = "NEUTRAL", e10[e10.TONAL_SPOT = 2] = "TONAL_SPOT", e10[e10.VIBRANT = 3] = "VIBRANT", e10[e10.EXPRESSIVE = 4] = "EXPRESSIVE", e10[e10.FIDELITY = 5] = "FIDELITY", e10[e10.CONTENT = 6] = "CONTENT", e10[e10.RAINBOW = 7] = "RAINBOW", e10[e10.FRUIT_SALAD = 8] = "FRUIT_SALAD";
}(H || (H = {}));
class tQ {
  getContrast(e10) {
    var t10, r10, n3, a2, o2, i2, s2, l2, c2;
    return e10 <= -1 ? this.low : e10 < 0 ? (t10 = this.low, r10 = this.normal, (1 - (n3 = (e10 - -1) / 1)) * t10 + n3 * r10) : e10 < 0.5 ? (a2 = this.normal, o2 = this.medium, (1 - (i2 = (e10 - 0) / 0.5)) * a2 + i2 * o2) : e10 < 1 ? (s2 = this.medium, l2 = this.high, (1 - (c2 = (e10 - 0.5) / 0.5)) * s2 + c2 * l2) : this.high;
  }
  constructor(e10, t10, r10, n3) {
    this.low = e10, this.normal = t10, this.medium = r10, this.high = n3;
  }
}
class t0 {
  constructor(e10, t10, r10, n3, a2) {
    this.roleA = e10, this.roleB = t10, this.delta = r10, this.polarity = n3, this.stayTogether = a2;
  }
}
function t1(e10) {
  return e10.variant === H.FIDELITY || e10.variant === H.CONTENT;
}
function t2(e10) {
  return e10.variant === H.MONOCHROME;
}
function t4(e10, t10) {
  let r10 = e10.inViewingConditions(tU.make(void 0, void 0, t10.isDark ? 30 : 80, void 0, void 0));
  return tZ.tonePrefersLightForeground(e10.tone) && !tZ.toneAllowsLightForeground(r10.tone) ? tZ.enableLightForeground(e10.tone) : tZ.enableLightForeground(r10.tone);
}
class t5 {
  static highestSurface(e10) {
    return e10.isDark ? t5.surfaceBright : t5.surfaceDim;
  }
}
t5.contentAccentToneDelta = 15, t5.primaryPaletteKeyColor = tZ.fromPalette({ name: "primary_palette_key_color", palette: (e10) => e10.primaryPalette, tone: (e10) => e10.primaryPalette.keyColor.tone }), t5.secondaryPaletteKeyColor = tZ.fromPalette({ name: "secondary_palette_key_color", palette: (e10) => e10.secondaryPalette, tone: (e10) => e10.secondaryPalette.keyColor.tone }), t5.tertiaryPaletteKeyColor = tZ.fromPalette({ name: "tertiary_palette_key_color", palette: (e10) => e10.tertiaryPalette, tone: (e10) => e10.tertiaryPalette.keyColor.tone }), t5.neutralPaletteKeyColor = tZ.fromPalette({ name: "neutral_palette_key_color", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.neutralPalette.keyColor.tone }), t5.neutralVariantPaletteKeyColor = tZ.fromPalette({ name: "neutral_variant_palette_key_color", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.neutralVariantPalette.keyColor.tone }), t5.background = tZ.fromPalette({ name: "background", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 6 : 98, isBackground: true }), t5.onBackground = tZ.fromPalette({ name: "on_background", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 90 : 10, background: (e10) => t5.background, contrastCurve: new tQ(3, 3, 4.5, 7) }), t5.surface = tZ.fromPalette({ name: "surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 6 : 98, isBackground: true }), t5.surfaceDim = tZ.fromPalette({ name: "surface_dim", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 6 : 87, isBackground: true }), t5.surfaceBright = tZ.fromPalette({ name: "surface_bright", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 24 : 98, isBackground: true }), t5.surfaceContainerLowest = tZ.fromPalette({ name: "surface_container_lowest", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 4 : 100, isBackground: true }), t5.surfaceContainerLow = tZ.fromPalette({ name: "surface_container_low", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 10 : 96, isBackground: true }), t5.surfaceContainer = tZ.fromPalette({ name: "surface_container", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 12 : 94, isBackground: true }), t5.surfaceContainerHigh = tZ.fromPalette({ name: "surface_container_high", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 17 : 92, isBackground: true }), t5.surfaceContainerHighest = tZ.fromPalette({ name: "surface_container_highest", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 22 : 90, isBackground: true }), t5.onSurface = tZ.fromPalette({ name: "on_surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 90 : 10, background: (e10) => t5.highestSurface(e10), contrastCurve: new tQ(4.5, 7, 11, 21) }), t5.surfaceVariant = tZ.fromPalette({ name: "surface_variant", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 30 : 90, isBackground: true }), t5.onSurfaceVariant = tZ.fromPalette({ name: "on_surface_variant", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 80 : 30, background: (e10) => t5.highestSurface(e10), contrastCurve: new tQ(3, 4.5, 7, 11) }), t5.inverseSurface = tZ.fromPalette({ name: "inverse_surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 90 : 20 }), t5.inverseOnSurface = tZ.fromPalette({ name: "inverse_on_surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 20 : 95, background: (e10) => t5.inverseSurface, contrastCurve: new tQ(4.5, 7, 11, 21) }), t5.outline = tZ.fromPalette({ name: "outline", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 60 : 50, background: (e10) => t5.highestSurface(e10), contrastCurve: new tQ(1.5, 3, 4.5, 7) }), t5.outlineVariant = tZ.fromPalette({ name: "outline_variant", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 30 : 80, background: (e10) => t5.highestSurface(e10), contrastCurve: new tQ(1, 1, 3, 7) }), t5.shadow = tZ.fromPalette({ name: "shadow", palette: (e10) => e10.neutralPalette, tone: (e10) => 0 }), t5.scrim = tZ.fromPalette({ name: "scrim", palette: (e10) => e10.neutralPalette, tone: (e10) => 0 }), t5.surfaceTint = tZ.fromPalette({ name: "surface_tint", palette: (e10) => e10.primaryPalette, tone: (e10) => e10.isDark ? 80 : 40, isBackground: true }), t5.primary = tZ.fromPalette({ name: "primary", palette: (e10) => e10.primaryPalette, tone: (e10) => t2(e10) ? e10.isDark ? 100 : 0 : e10.isDark ? 80 : 40, isBackground: true, background: (e10) => t5.highestSurface(e10), contrastCurve: new tQ(3, 4.5, 7, 11), toneDeltaPair: (e10) => new t0(t5.primaryContainer, t5.primary, 15, "nearer", false) }), t5.onPrimary = tZ.fromPalette({ name: "on_primary", palette: (e10) => e10.primaryPalette, tone: (e10) => t2(e10) ? e10.isDark ? 10 : 90 : e10.isDark ? 20 : 100, background: (e10) => t5.primary, contrastCurve: new tQ(4.5, 7, 11, 21) }), t5.primaryContainer = tZ.fromPalette({ name: "primary_container", palette: (e10) => e10.primaryPalette, tone: (e10) => t1(e10) ? t4(e10.sourceColorHct, e10) : t2(e10) ? e10.isDark ? 85 : 25 : e10.isDark ? 30 : 90, isBackground: true, background: (e10) => t5.highestSurface(e10), contrastCurve: new tQ(1, 1, 3, 7), toneDeltaPair: (e10) => new t0(t5.primaryContainer, t5.primary, 15, "nearer", false) }), t5.onPrimaryContainer = tZ.fromPalette({ name: "on_primary_container", palette: (e10) => e10.primaryPalette, tone: (e10) => t1(e10) ? tZ.foregroundTone(t5.primaryContainer.tone(e10), 4.5) : t2(e10) ? e10.isDark ? 0 : 100 : e10.isDark ? 90 : 10, background: (e10) => t5.primaryContainer, contrastCurve: new tQ(4.5, 7, 11, 21) }), t5.inversePrimary = tZ.fromPalette({ name: "inverse_primary", palette: (e10) => e10.primaryPalette, tone: (e10) => e10.isDark ? 40 : 80, background: (e10) => t5.inverseSurface, contrastCurve: new tQ(3, 4.5, 7, 11) }), t5.secondary = tZ.fromPalette({ name: "secondary", palette: (e10) => e10.secondaryPalette, tone: (e10) => e10.isDark ? 80 : 40, isBackground: true, background: (e10) => t5.highestSurface(e10), contrastCurve: new tQ(3, 4.5, 7, 11), toneDeltaPair: (e10) => new t0(t5.secondaryContainer, t5.secondary, 15, "nearer", false) }), t5.onSecondary = tZ.fromPalette({ name: "on_secondary", palette: (e10) => e10.secondaryPalette, tone: (e10) => t2(e10) ? e10.isDark ? 10 : 100 : e10.isDark ? 20 : 100, background: (e10) => t5.secondary, contrastCurve: new tQ(4.5, 7, 11, 21) }), t5.secondaryContainer = tZ.fromPalette({ name: "secondary_container", palette: (e10) => e10.secondaryPalette, tone: (e10) => {
  let t10 = e10.isDark ? 30 : 90;
  if (t2(e10))
    return e10.isDark ? 30 : 85;
  if (!t1(e10))
    return t10;
  let r10 = function(e11, t11, r11, n3) {
    let a2 = r11, o2 = tX.from(e11, t11, r11);
    if (o2.chroma < t11) {
      let r12 = o2.chroma;
      for (; o2.chroma < t11; ) {
        a2 += n3 ? -1 : 1;
        let i2 = tX.from(e11, t11, a2);
        if (r12 > i2.chroma || 0.4 > Math.abs(i2.chroma - t11))
          break;
        let s2 = Math.abs(i2.chroma - t11), l2 = Math.abs(o2.chroma - t11);
        s2 < l2 && (o2 = i2), r12 = Math.max(r12, i2.chroma);
      }
    }
    return a2;
  }(e10.secondaryPalette.hue, e10.secondaryPalette.chroma, t10, !e10.isDark);
  return t4(e10.secondaryPalette.getHct(r10), e10);
}, isBackground: true, background: (e10) => t5.highestSurface(e10), contrastCurve: new tQ(1, 1, 3, 7), toneDeltaPair: (e10) => new t0(t5.secondaryContainer, t5.secondary, 15, "nearer", false) }), t5.onSecondaryContainer = tZ.fromPalette({ name: "on_secondary_container", palette: (e10) => e10.secondaryPalette, tone: (e10) => t1(e10) ? tZ.foregroundTone(t5.secondaryContainer.tone(e10), 4.5) : e10.isDark ? 90 : 10, background: (e10) => t5.secondaryContainer, contrastCurve: new tQ(4.5, 7, 11, 21) }), t5.tertiary = tZ.fromPalette({ name: "tertiary", palette: (e10) => e10.tertiaryPalette, tone: (e10) => t2(e10) ? e10.isDark ? 90 : 25 : e10.isDark ? 80 : 40, isBackground: true, background: (e10) => t5.highestSurface(e10), contrastCurve: new tQ(3, 4.5, 7, 11), toneDeltaPair: (e10) => new t0(t5.tertiaryContainer, t5.tertiary, 15, "nearer", false) }), t5.onTertiary = tZ.fromPalette({ name: "on_tertiary", palette: (e10) => e10.tertiaryPalette, tone: (e10) => t2(e10) ? e10.isDark ? 10 : 90 : e10.isDark ? 20 : 100, background: (e10) => t5.tertiary, contrastCurve: new tQ(4.5, 7, 11, 21) }), t5.tertiaryContainer = tZ.fromPalette({ name: "tertiary_container", palette: (e10) => e10.tertiaryPalette, tone: (e10) => {
  if (t2(e10))
    return e10.isDark ? 60 : 49;
  if (!t1(e10))
    return e10.isDark ? 30 : 90;
  let t10 = t4(e10.tertiaryPalette.getHct(e10.sourceColorHct.tone), e10), r10 = e10.tertiaryPalette.getHct(t10);
  return tJ.fixIfDisliked(r10).tone;
}, isBackground: true, background: (e10) => t5.highestSurface(e10), contrastCurve: new tQ(1, 1, 3, 7), toneDeltaPair: (e10) => new t0(t5.tertiaryContainer, t5.tertiary, 15, "nearer", false) }), t5.onTertiaryContainer = tZ.fromPalette({ name: "on_tertiary_container", palette: (e10) => e10.tertiaryPalette, tone: (e10) => t2(e10) ? e10.isDark ? 0 : 100 : t1(e10) ? tZ.foregroundTone(t5.tertiaryContainer.tone(e10), 4.5) : e10.isDark ? 90 : 10, background: (e10) => t5.tertiaryContainer, contrastCurve: new tQ(4.5, 7, 11, 21) }), t5.error = tZ.fromPalette({ name: "error", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 80 : 40, isBackground: true, background: (e10) => t5.highestSurface(e10), contrastCurve: new tQ(3, 4.5, 7, 11), toneDeltaPair: (e10) => new t0(t5.errorContainer, t5.error, 15, "nearer", false) }), t5.onError = tZ.fromPalette({ name: "on_error", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 20 : 100, background: (e10) => t5.error, contrastCurve: new tQ(4.5, 7, 11, 21) }), t5.errorContainer = tZ.fromPalette({ name: "error_container", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 30 : 90, isBackground: true, background: (e10) => t5.highestSurface(e10), contrastCurve: new tQ(1, 1, 3, 7), toneDeltaPair: (e10) => new t0(t5.errorContainer, t5.error, 15, "nearer", false) }), t5.onErrorContainer = tZ.fromPalette({ name: "on_error_container", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 90 : 10, background: (e10) => t5.errorContainer, contrastCurve: new tQ(4.5, 7, 11, 21) }), t5.primaryFixed = tZ.fromPalette({ name: "primary_fixed", palette: (e10) => e10.primaryPalette, tone: (e10) => t2(e10) ? 40 : 90, isBackground: true, background: (e10) => t5.highestSurface(e10), contrastCurve: new tQ(1, 1, 3, 7), toneDeltaPair: (e10) => new t0(t5.primaryFixed, t5.primaryFixedDim, 10, "lighter", true) }), t5.primaryFixedDim = tZ.fromPalette({ name: "primary_fixed_dim", palette: (e10) => e10.primaryPalette, tone: (e10) => t2(e10) ? 30 : 80, isBackground: true, background: (e10) => t5.highestSurface(e10), contrastCurve: new tQ(1, 1, 3, 7), toneDeltaPair: (e10) => new t0(t5.primaryFixed, t5.primaryFixedDim, 10, "lighter", true) }), t5.onPrimaryFixed = tZ.fromPalette({ name: "on_primary_fixed", palette: (e10) => e10.primaryPalette, tone: (e10) => t2(e10) ? 100 : 10, background: (e10) => t5.primaryFixedDim, secondBackground: (e10) => t5.primaryFixed, contrastCurve: new tQ(4.5, 7, 11, 21) }), t5.onPrimaryFixedVariant = tZ.fromPalette({ name: "on_primary_fixed_variant", palette: (e10) => e10.primaryPalette, tone: (e10) => t2(e10) ? 90 : 30, background: (e10) => t5.primaryFixedDim, secondBackground: (e10) => t5.primaryFixed, contrastCurve: new tQ(3, 4.5, 7, 11) }), t5.secondaryFixed = tZ.fromPalette({ name: "secondary_fixed", palette: (e10) => e10.secondaryPalette, tone: (e10) => t2(e10) ? 80 : 90, isBackground: true, background: (e10) => t5.highestSurface(e10), contrastCurve: new tQ(1, 1, 3, 7), toneDeltaPair: (e10) => new t0(t5.secondaryFixed, t5.secondaryFixedDim, 10, "lighter", true) }), t5.secondaryFixedDim = tZ.fromPalette({ name: "secondary_fixed_dim", palette: (e10) => e10.secondaryPalette, tone: (e10) => t2(e10) ? 70 : 80, isBackground: true, background: (e10) => t5.highestSurface(e10), contrastCurve: new tQ(1, 1, 3, 7), toneDeltaPair: (e10) => new t0(t5.secondaryFixed, t5.secondaryFixedDim, 10, "lighter", true) }), t5.onSecondaryFixed = tZ.fromPalette({ name: "on_secondary_fixed", palette: (e10) => e10.secondaryPalette, tone: (e10) => 10, background: (e10) => t5.secondaryFixedDim, secondBackground: (e10) => t5.secondaryFixed, contrastCurve: new tQ(4.5, 7, 11, 21) }), t5.onSecondaryFixedVariant = tZ.fromPalette({ name: "on_secondary_fixed_variant", palette: (e10) => e10.secondaryPalette, tone: (e10) => t2(e10) ? 25 : 30, background: (e10) => t5.secondaryFixedDim, secondBackground: (e10) => t5.secondaryFixed, contrastCurve: new tQ(3, 4.5, 7, 11) }), t5.tertiaryFixed = tZ.fromPalette({ name: "tertiary_fixed", palette: (e10) => e10.tertiaryPalette, tone: (e10) => t2(e10) ? 40 : 90, isBackground: true, background: (e10) => t5.highestSurface(e10), contrastCurve: new tQ(1, 1, 3, 7), toneDeltaPair: (e10) => new t0(t5.tertiaryFixed, t5.tertiaryFixedDim, 10, "lighter", true) }), t5.tertiaryFixedDim = tZ.fromPalette({ name: "tertiary_fixed_dim", palette: (e10) => e10.tertiaryPalette, tone: (e10) => t2(e10) ? 30 : 80, isBackground: true, background: (e10) => t5.highestSurface(e10), contrastCurve: new tQ(1, 1, 3, 7), toneDeltaPair: (e10) => new t0(t5.tertiaryFixed, t5.tertiaryFixedDim, 10, "lighter", true) }), t5.onTertiaryFixed = tZ.fromPalette({ name: "on_tertiary_fixed", palette: (e10) => e10.tertiaryPalette, tone: (e10) => t2(e10) ? 100 : 10, background: (e10) => t5.tertiaryFixedDim, secondBackground: (e10) => t5.tertiaryFixed, contrastCurve: new tQ(4.5, 7, 11, 21) }), t5.onTertiaryFixedVariant = tZ.fromPalette({ name: "on_tertiary_fixed_variant", palette: (e10) => e10.tertiaryPalette, tone: (e10) => t2(e10) ? 90 : 30, background: (e10) => t5.tertiaryFixedDim, secondBackground: (e10) => t5.tertiaryFixed, contrastCurve: new tQ(3, 4.5, 7, 11) });
class t3 {
  static fromInt(e10) {
    let t10 = tX.fromInt(e10);
    return t3.fromHct(t10);
  }
  static fromHct(e10) {
    return new t3(e10.hue, e10.chroma, e10);
  }
  static fromHueAndChroma(e10, t10) {
    return new t3(e10, t10, t3.createKeyColor(e10, t10));
  }
  static createKeyColor(e10, t10) {
    let r10 = tX.from(e10, t10, 50), n3 = Math.abs(r10.chroma - t10);
    for (let a2 = 1; a2 < 50 && Math.round(t10) !== Math.round(r10.chroma); a2 += 1) {
      let o2 = tX.from(e10, t10, 50 + a2), i2 = Math.abs(o2.chroma - t10);
      i2 < n3 && (n3 = i2, r10 = o2);
      let s2 = tX.from(e10, t10, 50 - a2), l2 = Math.abs(s2.chroma - t10);
      l2 < n3 && (n3 = l2, r10 = s2);
    }
    return r10;
  }
  tone(e10) {
    let t10 = this.cache.get(e10);
    return void 0 === t10 && (t10 = tX.from(this.hue, this.chroma, e10).toInt(), this.cache.set(e10, t10)), t10;
  }
  getHct(e10) {
    return tX.fromInt(this.tone(e10));
  }
  constructor(e10, t10, r10) {
    this.hue = e10, this.chroma = t10, this.keyColor = r10, this.cache = /* @__PURE__ */ new Map();
  }
}
class t8 {
  static of(e10) {
    return new t8(e10, false);
  }
  static contentOf(e10) {
    return new t8(e10, true);
  }
  static fromColors(e10) {
    return t8.createPaletteFromColors(false, e10);
  }
  static contentFromColors(e10) {
    return t8.createPaletteFromColors(true, e10);
  }
  static createPaletteFromColors(e10, t10) {
    let r10 = new t8(t10.primary, e10);
    if (t10.secondary) {
      let n3 = new t8(t10.secondary, e10);
      r10.a2 = n3.a1;
    }
    if (t10.tertiary) {
      let n3 = new t8(t10.tertiary, e10);
      r10.a3 = n3.a1;
    }
    if (t10.error) {
      let n3 = new t8(t10.error, e10);
      r10.error = n3.a1;
    }
    if (t10.neutral) {
      let n3 = new t8(t10.neutral, e10);
      r10.n1 = n3.n1;
    }
    if (t10.neutralVariant) {
      let n3 = new t8(t10.neutralVariant, e10);
      r10.n2 = n3.n2;
    }
    return r10;
  }
  constructor(e10, t10) {
    let r10 = tX.fromInt(e10), n3 = r10.hue, a2 = r10.chroma;
    t10 ? (this.a1 = t3.fromHueAndChroma(n3, a2), this.a2 = t3.fromHueAndChroma(n3, a2 / 3), this.a3 = t3.fromHueAndChroma(n3 + 60, a2 / 2), this.n1 = t3.fromHueAndChroma(n3, Math.min(a2 / 12, 4)), this.n2 = t3.fromHueAndChroma(n3, Math.min(a2 / 6, 8))) : (this.a1 = t3.fromHueAndChroma(n3, Math.max(48, a2)), this.a2 = t3.fromHueAndChroma(n3, 16), this.a3 = t3.fromHueAndChroma(n3 + 60, 24), this.n1 = t3.fromHueAndChroma(n3, 4), this.n2 = t3.fromHueAndChroma(n3, 8)), this.error = t3.fromHueAndChroma(25, 84);
  }
}
function t6(e10) {
  e10 = e10.replace("#", "");
  let t10 = 3 === e10.length, r10 = 6 === e10.length, n3 = 8 === e10.length;
  if (!t10 && !r10 && !n3)
    throw Error("unexpected hex " + e10);
  let a2 = 0, o2 = 0, i2 = 0;
  return t10 ? (a2 = t9(e10.slice(0, 1).repeat(2)), o2 = t9(e10.slice(1, 2).repeat(2)), i2 = t9(e10.slice(2, 3).repeat(2))) : r10 ? (a2 = t9(e10.slice(0, 2)), o2 = t9(e10.slice(2, 4)), i2 = t9(e10.slice(4, 6))) : n3 && (a2 = t9(e10.slice(2, 4)), o2 = t9(e10.slice(4, 6)), i2 = t9(e10.slice(6, 8))), (-16777216 | (255 & a2) << 16 | (255 & o2) << 8 | 255 & i2) >>> 0;
}
function t9(e10) {
  return parseInt(e10, 16);
}
let t7 = { 0: true, 10: true, 20: true, 30: true, 40: true, 50: true, 60: true, 70: true, 80: true, 90: true, 95: true, 100: true }, re = (e10) => {
  let t10 = function(e11) {
    return { r: e11 >> 16 & 255, g: e11 >> 8 & 255, b: 255 & e11, a: e11 >> 24 & 255 };
  }(e10);
  return [t10.r, t10.g, t10.b];
}, rt = (e10) => ({ primary: true, secondary: true, tertiary: true, error: true, warning: true, success: true })[e10], rr = class {
  normalizeRoleRules() {
    let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t10 = { shadow: ["neutral", 0, 0], scrim: ["neutral", 0, 0], outline: ["neutralVariant", 60, 50], "outline-variant": ["neutralVariant", 30, 80], surface: ["neutral", 10, 99], "on-surface": ["neutral", 90, 10], "surface-variant": ["neutralVariant", 30, 90], "on-surface-variant": ["neutralVariant", 80, 30], "surface-dim": ["neutral", 6, 87], "surface-bright": ["neutral", 24, 98], "surface-container-lowest": ["neutral", 4, 100], "surface-container-low": ["neutral", 10, 96], "surface-container": ["neutral", 12, 94], "surface-container-high": ["neutral", 17, 92], "surface-container-highest": ["neutral", 22, 90], "inverse-surface": ["neutral", 90, 20], "inverse-on-surface": ["neutral", 20, 95], "inverse-primary": ["primary", 40, 80] };
    for (let e11 in this.seeds)
      e11.startsWith("neutral") || (t10[e11] = [e11, 80, 40], t10[`on-${e11}`] = [e11, 20, 100], t10[`${e11}-container`] = [e11, 30, 90], t10[`on-${e11}-container`] = [e11, 90, 10]);
    return { ...t10, ...e10 };
  }
  getThemeRoleColors(e10) {
    let t10 = {}, r10 = {};
    for (let n3 in e10) {
      let [a2, o2, i2] = e10[n3];
      this.seeds[a2] && (r10[n3] = t7[o2] ? `${a2}.${o2}` : this.seeds[a2].tone(o2), t10[n3] = t7[i2] ? `${a2}.${i2}` : this.seeds[a2].tone(i2));
    }
    return [t10, r10];
  }
  toDesignTokens() {
    let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [t10, r10] = this.getThemeRoleColors(this.normalizeRoleRules(e10)), n3 = {}, a2 = {};
    for (let e11 in t10)
      if (n3[`${e11}`] = { _default: T(t10[e11]) ? re(t10[e11]) : t10[e11], _dark: T(r10[e11]) ? re(r10[e11]) : r10[e11] }, rt(e11) && (a2[`${e11}`] = td.mixin({ bgColor: `sys.${e11}`, color: `sys.on-${e11}` }), a2[`${e11}-container`] = td.mixin({ bgColor: `sys.${e11}-container`, color: `sys.on-${e11}-container` })), e11.startsWith("surface")) {
        if (e11.includes("container")) {
          a2[`${e11}`] = td.mixin({ bgColor: `sys.${e11}`, color: "sys.on-surface" });
          continue;
        }
        a2[`${e11}`] = td.mixin({ bgColor: `sys.${e11}`, color: "sys.on-surface" }), a2[`on-${e11}`] = td.mixin({ bgColor: `sys.on-${e11}`, color: "sys.inverse-on-surface" });
      }
    let o2 = (e11) => Object.keys(t7).reduce((t11, r11) => ({ ...t11, [r11]: re(e11.tone(parseInt(r11))) }), {}), i2 = td.color({ ...$(this.seeds, (e11) => o2(e11)), white: [255, 255, 255], black: [0, 0, 0], sys: n3 });
    console.log(i2);
    let s2 = td.customMixin("containerStyle", { sys: a2 });
    return { color: i2, containerStyle: s2 };
  }
  constructor(e10) {
    this.seeds = e10;
  }
}, rn = rr;
rn.toHEX = (e10) => `#${re(e10).map((e11) => I(e11.toString(16), 2, "0")).join("")}`, rn.fromColors = (e10) => {
  let { primary: t10, secondary: r10, tertiary: n3, neutral: a2, neutralVariant: o2, error: i2, ...s2 } = e10, l2 = t8.contentFromColors({ primary: t6(t10), secondary: r10 ? t6(r10) : void 0, tertiary: n3 ? t6(n3) : void 0, error: i2 ? t6(i2) : void 0 });
  return a2 && (l2.n1 = t3.fromHueAndChroma(t6(a2), 4)), o2 && (l2.n2 = t3.fromHueAndChroma(t6(o2), 8)), new rr({ primary: l2.a1, secondary: l2.a2, tertiary: l2.a3, neutral: l2.n1, neutralVariant: l2.n2, error: l2.error, ...$(s2, (e11) => t3.fromInt(t6(e11))) });
};
let ra = (e10, t10, r10, n3) => Object.assign(function(e11, t11, r11, n6) {
  if (e11 === t11 && r11 === n6)
    return eV;
  let a2 = new Float32Array(11);
  for (let t12 = 0; t12 < 11; ++t12)
    a2[t12] = te(0.1 * t12, e11, r11);
  return (o2) => 0 === o2 || 1 === o2 ? o2 : te(function(t12) {
    let n7 = 0, o3 = 1;
    for (; 10 !== o3 && a2[o3] <= t12; ++o3)
      n7 += 0.1;
    --o3;
    let i2 = (t12 - a2[o3]) / (a2[o3 + 1] - a2[o3]), s2 = n7 + 0.1 * i2, l2 = tt(s2, e11, r11);
    return l2 >= 1e-3 ? function(e12, t13, r12, n8) {
      for (let a3 = 0; a3 < 8; ++a3) {
        let a4 = tt(t13, r12, n8);
        if (0 === a4)
          break;
        let o4 = te(t13, r12, n8) - e12;
        t13 -= o4 / a4;
      }
      return t13;
    }(t12, s2, e11, r11) : 0 === l2 ? s2 : function(e12, t13, r12, n8, a3) {
      let o4, i3;
      let s3 = 0;
      do
        (o4 = te(i3 = t13 + (r12 - t13) / 2, n8, a3) - e12) > 0 ? r12 = i3 : t13 = i3;
      while (Math.abs(o4) > 1e-7 && ++s3 < 10);
      return i3;
    }(t12, n7, n7 + 0.1, e11, r11);
  }(o2), t11, n6);
}(e10, t10, r10, n3), { toString: () => `cubic-bezier(${e10}, ${t10}, ${r10}, ${n3})` }), ro = { duration: { sm1: 50, sm2: 100, sm3: 150, sm4: 200, md1: 250, md2: 300, md3: 350, md4: 400, lg1: 450, lg2: 500, lg3: 550, lg4: 600, xl1: 700, xl2: 800, xl3: 900, xl4: 1e3 }, easing: { linear: ra(0, 0, 1, 1), standard: Object.assign(ra(0.2, 0, 0, 1), { accelerate: ra(0.3, 0, 1, 1), decelerate: ra(0, 0, 0, 1) }), emphasized: Object.assign(ra(0.2, 0, 0, 1), { accelerate: ra(0.3, 0, 0.8, 0.15), decelerate: ra(0.05, 0.7, 0.1, 1) }), legacy: Object.assign(ra(0.4, 0, 0.2, 1), { decelerate: ra(0, 0, 0.2, 1), accelerate: ra(0.4, 0, 1, 1) }) } }, ri = (n3, a2) => (a2 = null != a2 ? a2 : { ...n3, from: { ...n3.to }, to: { ...n3.from } }, e({ onComplete: L(), $default: L() }, (e10, o2) => {
  let i2, {} = e10, { slots: s2, emit: l2 } = o2, c2 = (e11, t10) => {
    i2 = e8({ ...n3, autoplay: true, onComplete: () => {
      t10(), l2("complete", "enter");
    }, onUpdate: (t11) => {
      Object.assign(e11.style, t11);
    } });
  }, u2 = (e11, t10) => {
    i2 = e8({ ...a2, autoplay: true, onComplete: () => {
      t10(), l2("complete", "leave");
    }, onUpdate: (t11) => {
      Object.assign(e11.style, t11);
    } });
  }, d2 = () => {
    var e11;
    null === (e11 = i2) || void 0 === e11 || e11.stop();
  };
  return () => {
    var e11;
    return t(r, { css: false, onEnter: c2, onEnterCancelled: d2, onLeave: u2, onLeaveCancelled: d2, children: null === (e11 = s2.default) || void 0 === e11 ? void 0 : e11.call(s2) });
  };
}, { name: "Transition" })), rs = { transitionDuration: td.transitionDuration(ro.duration), transitionTimingFunction: td.transitionTimingFunction({ linear: ro.easing.linear.toString(), standard: ro.easing.standard.toString(), "standard-accelerate": ro.easing.standard.accelerate.toString(), "standard-decelerate": ro.easing.standard.decelerate.toString(), emphasized: ro.easing.emphasized.toString(), "emphasized-decelerate": ro.easing.emphasized.decelerate.toString(), "emphasized-accelerate": ro.easing.emphasized.accelerate.toString(), legacy: ro.easing.legacy.toString(), "legacy-decelerate": ro.easing.legacy.decelerate.toString(), "legacy-accelerate": ro.easing.legacy.accelerate.toString() }) }, rl = td.rounded({ xs: 4, sm: 8, md: 12, lg: 16, xl: 28 }), rc = rn.fromColors({ primary: "#1270f5", secondary: "#8a90a5", tertiary: "#b58391", neutral: "#5e5e5e", error: "#d93f23", warning: "#e69c00", success: "#5ac220" }), ru = { ...tR, ...rs, ...tT, rounded: rl, ...rc.toDesignTokens({ primary: ["primary", 80, 50] }) }, rd = tD.create(ru, { varPrefix: "vk" }), rf = n(() => rd, { name: "Theme" });
var rh = function() {
  function e10(e11) {
    var t11 = this;
    this._insertTag = function(e12) {
      var r10;
      r10 = 0 === t11.tags.length ? t11.insertionPoint ? t11.insertionPoint.nextSibling : t11.prepend ? t11.container.firstChild : t11.before : t11.tags[t11.tags.length - 1].nextSibling, t11.container.insertBefore(e12, r10), t11.tags.push(e12);
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
    var r10 = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var n3 = function(e12) {
        if (e12.sheet)
          return e12.sheet;
        for (var t12 = 0; t12 < document.styleSheets.length; t12++)
          if (document.styleSheets[t12].ownerNode === e12)
            return document.styleSheets[t12];
      }(r10);
      try {
        n3.insertRule(e11, n3.cssRules.length);
      } catch (e12) {
      }
    } else
      r10.appendChild(document.createTextNode(e11));
    this.ctr++;
  }, t10.flush = function() {
    this.tags.forEach(function(e11) {
      return e11.parentNode && e11.parentNode.removeChild(e11);
    }), this.tags = [], this.ctr = 0;
  }, e10;
}(), rp = "-ms-", rm = "-moz-", rg = "-webkit-", rb = "comm", rv = "rule", ry = "decl", rx = "@keyframes", rw = Math.abs, rk = String.fromCharCode, rM = Object.assign;
function rC(e10, t10, r10) {
  return e10.replace(t10, r10);
}
function rP(e10, t10) {
  return e10.indexOf(t10);
}
function r_(e10, t10) {
  return 0 | e10.charCodeAt(t10);
}
function rS(e10, t10, r10) {
  return e10.slice(t10, r10);
}
function rO(e10) {
  return e10.length;
}
function rD(e10, t10) {
  return t10.push(e10), e10;
}
var rT = 1, rR = 1, r$ = 0, rA = 0, rI = 0, rL = "";
function rF(e10, t10, r10, n3, a2, o2, i2) {
  return { value: e10, root: t10, parent: r10, type: n3, props: a2, children: o2, line: rT, column: rR, length: i2, return: "" };
}
function rB(e10, t10) {
  return rM(rF("", null, null, "", null, null, 0), e10, { length: -e10.length }, t10);
}
function rj() {
  return rI = rA < r$ ? r_(rL, rA++) : 0, rR++, 10 === rI && (rR = 1, rT++), rI;
}
function rE() {
  return r_(rL, rA);
}
function rV(e10) {
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
function rH(e10) {
  return rT = rR = 1, r$ = rO(rL = e10), rA = 0, [];
}
function rz(e10) {
  var t10, r10;
  return (t10 = rA - 1, r10 = function e11(t11) {
    for (; rj(); )
      switch (rI) {
        case t11:
          return rA;
        case 34:
        case 39:
          34 !== t11 && 39 !== t11 && e11(rI);
          break;
        case 40:
          41 === t11 && e11(t11);
          break;
        case 92:
          rj();
      }
    return rA;
  }(91 === e10 ? e10 + 2 : 40 === e10 ? e10 + 1 : e10), rS(rL, t10, r10)).trim();
}
function rW(e10, t10, r10, n3, a2, o2, i2, s2, l2, c2, u2) {
  for (var d2 = a2 - 1, f2 = 0 === a2 ? o2 : [""], h2 = f2.length, p2 = 0, m2 = 0, g2 = 0; p2 < n3; ++p2)
    for (var b2 = 0, v2 = rS(e10, d2 + 1, d2 = rw(m2 = i2[p2])), y2 = e10; b2 < h2; ++b2)
      (y2 = (m2 > 0 ? f2[b2] + " " + v2 : rC(v2, /&\f/g, f2[b2])).trim()) && (l2[g2++] = y2);
  return rF(e10, t10, r10, 0 === a2 ? rv : s2, l2, c2, u2);
}
function rN(e10, t10, r10, n3) {
  return rF(e10, t10, r10, ry, rS(e10, 0, n3), rS(e10, n3 + 1, -1), n3);
}
function rq(e10, t10) {
  for (var r10 = "", n3 = e10.length, a2 = 0; a2 < n3; a2++)
    r10 += t10(e10[a2], a2, e10, t10) || "";
  return r10;
}
function rU(e10, t10, r10, n3) {
  switch (e10.type) {
    case "@layer":
      if (e10.children.length)
        break;
    case "@import":
    case ry:
      return e10.return = e10.return || e10.value;
    case rb:
      return "";
    case rx:
      return e10.return = e10.value + "{" + rq(e10.children, n3) + "}";
    case rv:
      e10.value = e10.props.join(",");
  }
  return rO(r10 = rq(e10.children, n3)) ? e10.return = e10.value + "{" + r10 + "}" : "";
}
var rG = function(e10, t10, r10) {
  for (var n3 = 0, a2 = 0; n3 = a2, a2 = rE(), 38 === n3 && 12 === a2 && (t10[r10] = 1), !rV(a2); )
    rj();
  return rS(rL, e10, rA);
}, rY = function(e10, t10) {
  var r10 = -1, n3 = 44;
  do
    switch (rV(n3)) {
      case 0:
        38 === n3 && 12 === rE() && (t10[r10] = 1), e10[r10] += rG(rA - 1, t10, r10);
        break;
      case 2:
        e10[r10] += rz(n3);
        break;
      case 4:
        if (44 === n3) {
          e10[++r10] = 58 === rE() ? "&\f" : "", t10[r10] = e10[r10].length;
          break;
        }
      default:
        e10[r10] += rk(n3);
    }
  while (n3 = rj());
  return e10;
}, rX = function(e10, t10) {
  var r10;
  return r10 = rY(rH(e10), t10), rL = "", r10;
}, rK = /* @__PURE__ */ new WeakMap(), rJ = function(e10) {
  if ("rule" === e10.type && e10.parent && !(e10.length < 1)) {
    for (var t10 = e10.value, r10 = e10.parent, n3 = e10.column === r10.column && e10.line === r10.line; "rule" !== r10.type; )
      if (!(r10 = r10.parent))
        return;
    if ((1 !== e10.props.length || 58 === t10.charCodeAt(0) || rK.get(r10)) && !n3) {
      rK.set(e10, true);
      for (var a2 = [], o2 = rX(t10, a2), i2 = r10.props, s2 = 0, l2 = 0; s2 < o2.length; s2++)
        for (var c2 = 0; c2 < i2.length; c2++, l2++)
          e10.props[l2] = a2[s2] ? o2[s2].replace(/&\f/g, i2[c2]) : i2[c2] + " " + o2[s2];
    }
  }
}, rZ = function(e10) {
  if ("decl" === e10.type) {
    var t10 = e10.value;
    108 === t10.charCodeAt(0) && 98 === t10.charCodeAt(2) && (e10.return = "", e10.value = "");
  }
}, rQ = [function(e10, t10, r10, n3) {
  if (e10.length > -1 && !e10.return)
    switch (e10.type) {
      case ry:
        e10.return = function e11(t11, r11) {
          switch (45 ^ r_(t11, 0) ? (((r11 << 2 ^ r_(t11, 0)) << 2 ^ r_(t11, 1)) << 2 ^ r_(t11, 2)) << 2 ^ r_(t11, 3) : 0) {
            case 5103:
              return rg + "print-" + t11 + t11;
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
              return rg + t11 + t11;
            case 5349:
            case 4246:
            case 4810:
            case 6968:
            case 2756:
              return rg + t11 + rm + t11 + rp + t11 + t11;
            case 6828:
            case 4268:
              return rg + t11 + rp + t11 + t11;
            case 6165:
              return rg + t11 + rp + "flex-" + t11 + t11;
            case 5187:
              return rg + t11 + rC(t11, /(\w+).+(:[^]+)/, rg + "box-$1$2" + rp + "flex-$1$2") + t11;
            case 5443:
              return rg + t11 + rp + "flex-item-" + rC(t11, /flex-|-self/, "") + t11;
            case 4675:
              return rg + t11 + rp + "flex-line-pack" + rC(t11, /align-content|flex-|-self/, "") + t11;
            case 5548:
              return rg + t11 + rp + rC(t11, "shrink", "negative") + t11;
            case 5292:
              return rg + t11 + rp + rC(t11, "basis", "preferred-size") + t11;
            case 6060:
              return rg + "box-" + rC(t11, "-grow", "") + rg + t11 + rp + rC(t11, "grow", "positive") + t11;
            case 4554:
              return rg + rC(t11, /([^-])(transform)/g, "$1" + rg + "$2") + t11;
            case 6187:
              return rC(rC(rC(t11, /(zoom-|grab)/, rg + "$1"), /(image-set)/, rg + "$1"), t11, "") + t11;
            case 5495:
            case 3959:
              return rC(t11, /(image-set\([^]*)/, rg + "$1$`$1");
            case 4968:
              return rC(rC(t11, /(.+:)(flex-)?(.*)/, rg + "box-pack:$3" + rp + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + rg + t11 + t11;
            case 4095:
            case 3583:
            case 4068:
            case 2532:
              return rC(t11, /(.+)-inline(.+)/, rg + "$1$2") + t11;
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
              if (rO(t11) - 1 - r11 > 6)
                switch (r_(t11, r11 + 1)) {
                  case 109:
                    if (45 !== r_(t11, r11 + 4))
                      break;
                  case 102:
                    return rC(t11, /(.+:)(.+)-([^]+)/, "$1" + rg + "$2-$3$1" + rm + (108 == r_(t11, r11 + 3) ? "$3" : "$2-$3")) + t11;
                  case 115:
                    return ~rP(t11, "stretch") ? e11(rC(t11, "stretch", "fill-available"), r11) + t11 : t11;
                }
              break;
            case 4949:
              if (115 !== r_(t11, r11 + 1))
                break;
            case 6444:
              switch (r_(t11, rO(t11) - 3 - (~rP(t11, "!important") && 10))) {
                case 107:
                  return rC(t11, ":", ":" + rg) + t11;
                case 101:
                  return rC(t11, /(.+:)([^;!]+)(;|!.+)?/, "$1" + rg + (45 === r_(t11, 14) ? "inline-" : "") + "box$3$1" + rg + "$2$3$1" + rp + "$2box$3") + t11;
              }
              break;
            case 5936:
              switch (r_(t11, r11 + 11)) {
                case 114:
                  return rg + t11 + rp + rC(t11, /[svh]\w+-[tblr]{2}/, "tb") + t11;
                case 108:
                  return rg + t11 + rp + rC(t11, /[svh]\w+-[tblr]{2}/, "tb-rl") + t11;
                case 45:
                  return rg + t11 + rp + rC(t11, /[svh]\w+-[tblr]{2}/, "lr") + t11;
              }
              return rg + t11 + rp + t11 + t11;
          }
          return t11;
        }(e10.value, e10.length);
        break;
      case rx:
        return rq([rB(e10, { value: rC(e10.value, "@", "@" + rg) })], n3);
      case rv:
        if (e10.length)
          return e10.props.map(function(t11) {
            var r11;
            switch (r11 = t11, (r11 = /(::plac\w+|:read-\w+)/.exec(r11)) ? r11[0] : r11) {
              case ":read-only":
              case ":read-write":
                return rq([rB(e10, { props: [rC(t11, /:(read-\w+)/, ":" + rm + "$1")] })], n3);
              case "::placeholder":
                return rq([rB(e10, { props: [rC(t11, /:(plac\w+)/, ":" + rg + "input-$1")] }), rB(e10, { props: [rC(t11, /:(plac\w+)/, ":" + rm + "$1")] }), rB(e10, { props: [rC(t11, /:(plac\w+)/, rp + "input-$1")] })], n3);
            }
            return "";
          }).join("");
    }
}], r0 = function(e10) {
  var t10, r10, n3, a2, o2, i2 = e10.key;
  if ("css" === i2) {
    var s2 = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(s2, function(e11) {
      -1 !== e11.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e11), e11.setAttribute("data-s", ""));
    });
  }
  var l2 = e10.stylisPlugins || rQ, c2 = {}, u2 = [];
  a2 = e10.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + i2 + ' "]'), function(e11) {
    for (var t11 = e11.getAttribute("data-emotion").split(" "), r11 = 1; r11 < t11.length; r11++)
      c2[t11[r11]] = true;
    u2.push(e11);
  });
  var d2 = (r10 = (t10 = [rJ, rZ].concat(l2, [rU, (n3 = function(e11) {
    o2.insert(e11);
  }, function(e11) {
    !e11.root && (e11 = e11.return) && n3(e11);
  })])).length, function(e11, n6, a3, o3) {
    for (var i3 = "", s3 = 0; s3 < r10; s3++)
      i3 += t10[s3](e11, n6, a3, o3) || "";
    return i3;
  }), f2 = function(e11) {
    var t11, r11;
    return rq((r11 = function e12(t12, r12, n6, a3, o3, i3, s3, l3, c3) {
      for (var u3, d3 = 0, f3 = 0, h3 = s3, p2 = 0, m2 = 0, g2 = 0, b2 = 1, v2 = 1, y2 = 1, x2 = 0, w2 = "", k2 = o3, M2 = i3, C2 = a3, P2 = w2; v2; )
        switch (g2 = x2, x2 = rj()) {
          case 40:
            if (108 != g2 && 58 == r_(P2, h3 - 1)) {
              -1 != rP(P2 += rC(rz(x2), "&", "&\f"), "&\f") && (y2 = -1);
              break;
            }
          case 34:
          case 39:
          case 91:
            P2 += rz(x2);
            break;
          case 9:
          case 10:
          case 13:
          case 32:
            P2 += function(e13) {
              for (; rI = rE(); )
                if (rI < 33)
                  rj();
                else
                  break;
              return rV(e13) > 2 || rV(rI) > 3 ? "" : " ";
            }(g2);
            break;
          case 92:
            P2 += function(e13, t13) {
              for (var r13; --t13 && rj() && !(rI < 48) && !(rI > 102) && (!(rI > 57) || !(rI < 65)) && (!(rI > 70) || !(rI < 97)); )
                ;
              return r13 = rA + (t13 < 6 && 32 == rE() && 32 == rj()), rS(rL, e13, r13);
            }(rA - 1, 7);
            continue;
          case 47:
            switch (rE()) {
              case 42:
              case 47:
                rD(rF(u3 = function(e13, t13) {
                  for (; rj(); )
                    if (e13 + rI === 57)
                      break;
                    else if (e13 + rI === 84 && 47 === rE())
                      break;
                  return "/*" + rS(rL, t13, rA - 1) + "*" + rk(47 === e13 ? e13 : rj());
                }(rj(), rA), r12, n6, rb, rk(rI), rS(u3, 2, -2), 0), c3);
                break;
              default:
                P2 += "/";
            }
            break;
          case 123 * b2:
            l3[d3++] = rO(P2) * y2;
          case 125 * b2:
          case 59:
          case 0:
            switch (x2) {
              case 0:
              case 125:
                v2 = 0;
              case 59 + f3:
                -1 == y2 && (P2 = rC(P2, /\f/g, "")), m2 > 0 && rO(P2) - h3 && rD(m2 > 32 ? rN(P2 + ";", a3, n6, h3 - 1) : rN(rC(P2, " ", "") + ";", a3, n6, h3 - 2), c3);
                break;
              case 59:
                P2 += ";";
              default:
                if (rD(C2 = rW(P2, r12, n6, d3, f3, o3, l3, w2, k2 = [], M2 = [], h3), i3), 123 === x2) {
                  if (0 === f3)
                    e12(P2, r12, C2, C2, k2, i3, h3, l3, M2);
                  else
                    switch (99 === p2 && 110 === r_(P2, 3) ? 100 : p2) {
                      case 100:
                      case 108:
                      case 109:
                      case 115:
                        e12(t12, C2, C2, a3 && rD(rW(t12, C2, C2, 0, 0, o3, l3, w2, o3, k2 = [], h3), M2), o3, M2, h3, l3, a3 ? k2 : M2);
                        break;
                      default:
                        e12(P2, C2, C2, C2, [""], M2, 0, l3, M2);
                    }
                }
            }
            d3 = f3 = m2 = 0, b2 = y2 = 1, w2 = P2 = "", h3 = s3;
            break;
          case 58:
            h3 = 1 + rO(P2), m2 = g2;
          default:
            if (b2 < 1) {
              if (123 == x2)
                --b2;
              else if (125 == x2 && 0 == b2++ && 125 == (rI = rA > 0 ? r_(rL, --rA) : 0, rR--, 10 === rI && (rR = 1, rT--), rI))
                continue;
            }
            switch (P2 += rk(x2), x2 * b2) {
              case 38:
                y2 = f3 > 0 ? 1 : (P2 += "\f", -1);
                break;
              case 44:
                l3[d3++] = (rO(P2) - 1) * y2, y2 = 1;
                break;
              case 64:
                45 === rE() && (P2 += rz(rj())), p2 = rE(), f3 = h3 = rO(w2 = P2 += function(e13) {
                  for (; !rV(rE()); )
                    rj();
                  return rS(rL, e13, rA);
                }(rA)), x2++;
                break;
              case 45:
                45 === g2 && 2 == rO(P2) && (b2 = 0);
            }
        }
      return i3;
    }("", null, null, null, [""], t11 = rH(t11 = e11), 0, [0], t11), rL = "", r11), d2);
  }, h2 = { key: i2, sheet: new rh({ key: i2, container: a2, nonce: e10.nonce, speedy: e10.speedy, prepend: e10.prepend, insertionPoint: e10.insertionPoint }), nonce: e10.nonce, inserted: c2, registered: {}, insert: function(e11, t11, r11, n6) {
    o2 = r11, f2(e11 ? e11 + "{" + t11.styles + "}" : t11.styles), n6 && (h2.inserted[t11.name] = true);
  } };
  return h2.sheet.hydrate(u2), h2;
};
let r1 = n(() => r0({ key: "css" }), { name: "Cache" });
var r2 = function(e10, t10, r10) {
  var n3 = e10.key + "-" + t10.name;
  false === r10 && void 0 === e10.registered[n3] && (e10.registered[n3] = t10.styles);
}, r4 = function(e10, t10, r10) {
  r2(e10, t10, r10);
  var n3 = e10.key + "-" + t10.name;
  if (void 0 === e10.inserted[t10.name]) {
    var a2 = t10;
    do
      e10.insert(t10 === a2 ? "." + n3 : "", a2, e10.sheet, true), a2 = a2.next;
    while (void 0 !== a2);
  }
};
let r5 = (e10) => (t10) => {
  if (t10.serialized) {
    if (t10.withoutScoping)
      e10.insert("", t10.serialized, e10.sheet, true);
    else {
      var r10;
      r4(e10, t10.serialized, null === (r10 = t10.isStringTag) || void 0 === r10 || r10);
    }
  }
}, r3 = e({ sx: L(), component: L().optional().default("div") }, (e10, r10) => {
  var n3;
  let { slots: o2 } = r10, i2 = rf.use(), s2 = r1.use(), l2 = i2.unstable_css(s2, null !== (n3 = e10.sx) && void 0 !== n3 ? n3 : {}), c2 = () => "0" != l2.name ? `${s2.key}-${l2.name}` : "", u2 = r5(s2);
  return a(() => {
    u2({ serialized: l2, isStringTag: true });
  }), () => {
    var r11;
    let n6 = null !== (r11 = e10.component) && void 0 !== r11 ? r11 : "div";
    return t(n6, { class: c2(), children: o2 });
  };
}), r8 = Object.assign(r3, { displayName: "Box" }), r6 = (e10, r10) => (n3) => {
  let a2 = {};
  for (let t10 in e10)
    "component" !== t10 && "sx" !== t10 && e10[t10] && (a2[`data-${t10}`] = e10[t10]);
  return t(n3, { ...a2, children: r10.slots });
};
function r9(t10, r10, n3) {
  var l2;
  let c2 = null !== (l2 = P(r10) ? r10 : n3) && void 0 !== l2 ? l2 : r6, u2 = y(r10) ? r10 : {};
  return (r11) => {
    let n6 = e({ ...u2, sx: L().optional(), component: L().optional() }, (e10, l3) => {
      let u3 = rf.use(), d2 = r1.use(), f2 = r5(d2);
      r11.label = n6.name;
      let h2 = o(""), p2 = u3.unstable_css(d2, r11), m2 = () => "0" != p2.name ? `${d2.key}-${p2.name}${h2.value}` : `${h2.value}`;
      if (t10.__styled) {
        var g2;
        let t11 = u3.unstable_css(d2, null !== (g2 = e10.sx) && void 0 !== g2 ? g2 : {});
        "0" != t11.name && (h2.value = ` ${d2.key}-${t11.name}`), a(() => {
          f2({ serialized: p2, isStringTag: true }), f2({ serialized: t11, isStringTag: true });
        });
      } else
        i(() => {
          f2({ serialized: p2, isStringTag: true });
        });
      let b2 = c2(e10, l3);
      return () => {
        if (t10.__styled) {
          let r13 = b2(t10);
          return r13 ? s(r13, { component: e10.component, class: m2() }) : null;
        }
        let r12 = b2(r8);
        return r12 ? s(r12, { component: e10.component || t10, sx: e10.sx, class: m2() }) : null;
      };
    });
    return n6.__styled = true, n6;
  };
}
let r7 = e({ styles: L() }, (e10) => {
  let { styles: t10 } = e10, r10 = rf.use(), n3 = r1.use(), a2 = r5(n3), o2 = r10.unstable_css(n3, v(t10) ? { "&": t10 } : t10);
  return i(() => {
    a2({ serialized: o2, withoutScoping: true });
  }), () => null;
}), ne = Object.assign(r7, { displayName: "GlobalStyle" }), nt = e(() => {
  let e10 = rf.use(), r10 = e10.rootCSSVars;
  return () => t(ne, { styles: { ":host, :root, [data-theme]": r10, "*, *::after, *::before": { boxSizing: "border-box" }, html: { fontSize: "10px" }, a: { color: "inherit" }, body: { textStyle: "sys.body-medium" } } });
}), nr = Object.assign(nt, { displayName: "CSSReset" }), nn = n(() => ({ mountPoint: () => document.body }), { name: "OverlaySetting" }), na = n(() => new no(o(null), o(null), () => false), { name: "Overlay" });
class no {
  topmost() {
    return 0 == this.children.filter((e10) => e10.isOpen()).length;
  }
  constructor(e10, t10, r10) {
    this.triggerRef = e10, this.contentRef = t10, this.isOpen = r10, this.children = [], this.add = (e11) => (this.children = [...this.children, e11], () => {
      this.children = this.children.filter((t11) => t11 !== e11);
    }), this.isClickInside = (e11) => {
      for (let t12 of this.children)
        if (t12.isClickInside(e11))
          return true;
      let t11 = l(this.triggerRef), r11 = l(this.contentRef);
      return t11 && (t11 === e11.target || e11.composedPath().includes(t11)) || r11 && (r11 === e11.target || e11.composedPath().includes(r11));
    };
  }
}
let ni = e({ isOpen: F().optional(), style: L().optional(), contentRef: L().optional(), triggerRef: L().optional(), onClickOutside: L(), onEscKeydown: L(), onContentBeforeMount: L(), $transition: L().optional(), $default: L().optional() }, (e10, r10) => {
  var n3;
  let { slots: a2, attrs: i2, emit: l2 } = r10, m2 = e10.contentRef || o(null), g2 = new no(null !== (n3 = e10.triggerRef) && void 0 !== n3 ? n3 : o(null), m2, () => !!e10.isOpen), b2 = nn.use(), v2 = na.use();
  return c(v2.add(g2)), window && u(d(m2, "value"), p((e11) => {
    if (!e11)
      return;
    let t10 = (e12) => {
      g2.isClickInside(e12) || l2("click-outside", e12);
    };
    return window.addEventListener("pointerdown", t10), () => {
      window.removeEventListener("pointerdown", t10);
    };
  }), p((e11) => {
    if (!e11)
      return;
    let t10 = (e12) => {
      "Escape" === e12.key && g2.topmost() && l2("esc-keydown", e12);
    };
    return window.addEventListener("keydown", t10), () => {
      window.removeEventListener("keydown", t10);
    };
  }), h()), () => {
    var r11;
    let n6 = e10.isOpen ? s(t("div", { ...i2, ref: m2, style: e10.style, children: t(na, { value: g2, children: null === (r11 = a2.default) || void 0 === r11 ? void 0 : r11.call(a2) }) }), { onVnodeBeforeMount: () => {
      l2("content-before-mount");
    } }) : null;
    return t(f, { to: b2.mountPoint(), children: a2.transition ? a2.transition({ content: n6 }) : n6 });
  };
}, { inheritAttrs: false, name: "Overlay" }), ns = Object.assign(ni, { displayName: "Overlay" });
var nl = "bottom", nc = "right", nu = "left", nd = "auto", nf = ["top", nl, nc, nu], nh = "start", np = "viewport", nm = "popper", ng = nf.reduce(function(e10, t10) {
  return e10.concat([t10 + "-" + nh, t10 + "-end"]);
}, []), nb = [].concat(nf, [nd]).reduce(function(e10, t10) {
  return e10.concat([t10, t10 + "-" + nh, t10 + "-end"]);
}, []), nv = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
function ny(e10) {
  return e10 ? (e10.nodeName || "").toLowerCase() : null;
}
function nx(e10) {
  if (null == e10)
    return window;
  if ("[object Window]" !== e10.toString()) {
    var t10 = e10.ownerDocument;
    return t10 && t10.defaultView || window;
  }
  return e10;
}
function nw(e10) {
  var t10 = nx(e10).Element;
  return e10 instanceof t10 || e10 instanceof Element;
}
function nk(e10) {
  var t10 = nx(e10).HTMLElement;
  return e10 instanceof t10 || e10 instanceof HTMLElement;
}
function nM(e10) {
  if ("undefined" == typeof ShadowRoot)
    return false;
  var t10 = nx(e10).ShadowRoot;
  return e10 instanceof t10 || e10 instanceof ShadowRoot;
}
function nC(e10) {
  return e10.split("-")[0];
}
var nP = Math.max, n_ = Math.min, nS = Math.round;
function nO() {
  var e10 = navigator.userAgentData;
  return null != e10 && e10.brands && Array.isArray(e10.brands) ? e10.brands.map(function(e11) {
    return e11.brand + "/" + e11.version;
  }).join(" ") : navigator.userAgent;
}
function nD() {
  return !/^((?!chrome|android).)*safari/i.test(nO());
}
function nT(e10, t10, r10) {
  void 0 === t10 && (t10 = false), void 0 === r10 && (r10 = false);
  var n3 = e10.getBoundingClientRect(), a2 = 1, o2 = 1;
  t10 && nk(e10) && (a2 = e10.offsetWidth > 0 && nS(n3.width) / e10.offsetWidth || 1, o2 = e10.offsetHeight > 0 && nS(n3.height) / e10.offsetHeight || 1);
  var i2 = (nw(e10) ? nx(e10) : window).visualViewport, s2 = !nD() && r10, l2 = (n3.left + (s2 && i2 ? i2.offsetLeft : 0)) / a2, c2 = (n3.top + (s2 && i2 ? i2.offsetTop : 0)) / o2, u2 = n3.width / a2, d2 = n3.height / o2;
  return { width: u2, height: d2, top: c2, right: l2 + u2, bottom: c2 + d2, left: l2, x: l2, y: c2 };
}
function nR(e10) {
  return nx(e10).getComputedStyle(e10);
}
function n$(e10) {
  return ((nw(e10) ? e10.ownerDocument : e10.document) || window.document).documentElement;
}
function nA(e10) {
  return "html" === ny(e10) ? e10 : e10.assignedSlot || e10.parentNode || (nM(e10) ? e10.host : null) || n$(e10);
}
function nI(e10) {
  return nk(e10) && "fixed" !== nR(e10).position ? e10.offsetParent : null;
}
function nL(e10) {
  for (var t10 = nx(e10), r10 = nI(e10); r10 && ["table", "td", "th"].indexOf(ny(r10)) >= 0 && "static" === nR(r10).position; )
    r10 = nI(r10);
  return r10 && ("html" === ny(r10) || "body" === ny(r10) && "static" === nR(r10).position) ? t10 : r10 || function(e11) {
    var t11 = /firefox/i.test(nO());
    if (/Trident/i.test(nO()) && nk(e11) && "fixed" === nR(e11).position)
      return null;
    var r11 = nA(e11);
    for (nM(r11) && (r11 = r11.host); nk(r11) && 0 > ["html", "body"].indexOf(ny(r11)); ) {
      var n3 = nR(r11);
      if ("none" !== n3.transform || "none" !== n3.perspective || "paint" === n3.contain || -1 !== ["transform", "perspective"].indexOf(n3.willChange) || t11 && "filter" === n3.willChange || t11 && n3.filter && "none" !== n3.filter)
        return r11;
      r11 = r11.parentNode;
    }
    return null;
  }(e10) || t10;
}
function nF(e10) {
  return e10.split("-")[1];
}
var nB = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function nj(e10) {
  var t10, r10, n3, a2, o2, i2, s2, l2 = e10.popper, c2 = e10.popperRect, u2 = e10.placement, d2 = e10.variation, f2 = e10.offsets, h2 = e10.position, p2 = e10.gpuAcceleration, m2 = e10.adaptive, g2 = e10.roundOffsets, b2 = e10.isFixed, v2 = f2.x, y2 = void 0 === v2 ? 0 : v2, x2 = f2.y, w2 = void 0 === x2 ? 0 : x2, k2 = "function" == typeof g2 ? g2({ x: y2, y: w2 }) : { x: y2, y: w2 };
  y2 = k2.x, w2 = k2.y;
  var M2 = f2.hasOwnProperty("x"), C2 = f2.hasOwnProperty("y"), P2 = nu, _2 = "top", S2 = window;
  if (m2) {
    var O2 = nL(l2), D2 = "clientHeight", T2 = "clientWidth";
    O2 === nx(l2) && "static" !== nR(O2 = n$(l2)).position && "absolute" === h2 && (D2 = "scrollHeight", T2 = "scrollWidth"), ("top" === u2 || (u2 === nu || u2 === nc) && "end" === d2) && (_2 = nl, w2 -= (b2 && O2 === S2 && S2.visualViewport ? S2.visualViewport.height : O2[D2]) - c2.height, w2 *= p2 ? 1 : -1), (u2 === nu || ("top" === u2 || u2 === nl) && "end" === d2) && (P2 = nc, y2 -= (b2 && O2 === S2 && S2.visualViewport ? S2.visualViewport.width : O2[T2]) - c2.width, y2 *= p2 ? 1 : -1);
  }
  var R2 = Object.assign({ position: h2 }, m2 && nB), $2 = true === g2 ? (t10 = { x: y2, y: w2 }, r10 = nx(l2), n3 = t10.x, a2 = t10.y, { x: nS(n3 * (o2 = r10.devicePixelRatio || 1)) / o2 || 0, y: nS(a2 * o2) / o2 || 0 }) : { x: y2, y: w2 };
  return (y2 = $2.x, w2 = $2.y, p2) ? Object.assign({}, R2, ((s2 = {})[_2] = C2 ? "0" : "", s2[P2] = M2 ? "0" : "", s2.transform = 1 >= (S2.devicePixelRatio || 1) ? "translate(" + y2 + "px, " + w2 + "px)" : "translate3d(" + y2 + "px, " + w2 + "px, 0)", s2)) : Object.assign({}, R2, ((i2 = {})[_2] = C2 ? w2 + "px" : "", i2[P2] = M2 ? y2 + "px" : "", i2.transform = "", i2));
}
var nE = { passive: true }, nV = { left: "right", right: "left", bottom: "top", top: "bottom" };
function nH(e10) {
  return e10.replace(/left|right|bottom|top/g, function(e11) {
    return nV[e11];
  });
}
var nz = { start: "end", end: "start" };
function nW(e10) {
  return e10.replace(/start|end/g, function(e11) {
    return nz[e11];
  });
}
function nN(e10) {
  var t10 = nx(e10);
  return { scrollLeft: t10.pageXOffset, scrollTop: t10.pageYOffset };
}
function nq(e10) {
  return nT(n$(e10)).left + nN(e10).scrollLeft;
}
function nU(e10) {
  var t10 = nR(e10), r10 = t10.overflow, n3 = t10.overflowX, a2 = t10.overflowY;
  return /auto|scroll|overlay|hidden/.test(r10 + a2 + n3);
}
function nG(e10, t10) {
  void 0 === t10 && (t10 = []);
  var r10, n3 = function e11(t11) {
    return ["html", "body", "#document"].indexOf(ny(t11)) >= 0 ? t11.ownerDocument.body : nk(t11) && nU(t11) ? t11 : e11(nA(t11));
  }(e10), a2 = n3 === (null == (r10 = e10.ownerDocument) ? void 0 : r10.body), o2 = nx(n3), i2 = a2 ? [o2].concat(o2.visualViewport || [], nU(n3) ? n3 : []) : n3, s2 = t10.concat(i2);
  return a2 ? s2 : s2.concat(nG(nA(i2)));
}
function nY(e10) {
  return Object.assign({}, e10, { left: e10.x, top: e10.y, right: e10.x + e10.width, bottom: e10.y + e10.height });
}
function nX(e10, t10, r10) {
  var n3, a2, o2, i2, s2, l2, c2, u2, d2, f2;
  return t10 === np ? nY(function(e11, t11) {
    var r11 = nx(e11), n6 = n$(e11), a3 = r11.visualViewport, o3 = n6.clientWidth, i3 = n6.clientHeight, s3 = 0, l3 = 0;
    if (a3) {
      o3 = a3.width, i3 = a3.height;
      var c3 = nD();
      (c3 || !c3 && "fixed" === t11) && (s3 = a3.offsetLeft, l3 = a3.offsetTop);
    }
    return { width: o3, height: i3, x: s3 + nq(e11), y: l3 };
  }(e10, r10)) : nw(t10) ? ((n3 = nT(t10, false, "fixed" === r10)).top = n3.top + t10.clientTop, n3.left = n3.left + t10.clientLeft, n3.bottom = n3.top + t10.clientHeight, n3.right = n3.left + t10.clientWidth, n3.width = t10.clientWidth, n3.height = t10.clientHeight, n3.x = n3.left, n3.y = n3.top, n3) : nY((a2 = n$(e10), i2 = n$(a2), s2 = nN(a2), l2 = null == (o2 = a2.ownerDocument) ? void 0 : o2.body, c2 = nP(i2.scrollWidth, i2.clientWidth, l2 ? l2.scrollWidth : 0, l2 ? l2.clientWidth : 0), u2 = nP(i2.scrollHeight, i2.clientHeight, l2 ? l2.scrollHeight : 0, l2 ? l2.clientHeight : 0), d2 = -s2.scrollLeft + nq(a2), f2 = -s2.scrollTop, "rtl" === nR(l2 || i2).direction && (d2 += nP(i2.clientWidth, l2 ? l2.clientWidth : 0) - c2), { width: c2, height: u2, x: d2, y: f2 }));
}
function nK(e10) {
  var t10, r10 = e10.reference, n3 = e10.element, a2 = e10.placement, o2 = a2 ? nC(a2) : null, i2 = a2 ? nF(a2) : null, s2 = r10.x + r10.width / 2 - n3.width / 2, l2 = r10.y + r10.height / 2 - n3.height / 2;
  switch (o2) {
    case "top":
      t10 = { x: s2, y: r10.y - n3.height };
      break;
    case nl:
      t10 = { x: s2, y: r10.y + r10.height };
      break;
    case nc:
      t10 = { x: r10.x + r10.width, y: l2 };
      break;
    case nu:
      t10 = { x: r10.x - n3.width, y: l2 };
      break;
    default:
      t10 = { x: r10.x, y: r10.y };
  }
  var c2 = o2 ? ["top", "bottom"].indexOf(o2) >= 0 ? "x" : "y" : null;
  if (null != c2) {
    var u2 = "y" === c2 ? "height" : "width";
    switch (i2) {
      case nh:
        t10[c2] = t10[c2] - (r10[u2] / 2 - n3[u2] / 2);
        break;
      case "end":
        t10[c2] = t10[c2] + (r10[u2] / 2 - n3[u2] / 2);
    }
  }
  return t10;
}
function nJ(e10, t10) {
  void 0 === t10 && (t10 = {});
  var r10, n3, a2, o2, i2, s2, l2, c2 = t10, u2 = c2.placement, d2 = void 0 === u2 ? e10.placement : u2, f2 = c2.strategy, h2 = void 0 === f2 ? e10.strategy : f2, p2 = c2.boundary, m2 = c2.rootBoundary, g2 = c2.elementContext, b2 = void 0 === g2 ? nm : g2, v2 = c2.altBoundary, y2 = c2.padding, x2 = void 0 === y2 ? 0 : y2, w2 = Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, "number" != typeof x2 ? x2 : nf.reduce(function(e11, t11) {
    return e11[t11] = x2, e11;
  }, {})), k2 = e10.rects.popper, M2 = e10.elements[void 0 !== v2 && v2 ? b2 === nm ? "reference" : nm : b2], C2 = (r10 = nw(M2) ? M2 : M2.contextElement || n$(e10.elements.popper), s2 = (i2 = [].concat("clippingParents" === (n3 = void 0 === p2 ? "clippingParents" : p2) ? (a2 = nG(nA(r10)), nw(o2 = ["absolute", "fixed"].indexOf(nR(r10).position) >= 0 && nk(r10) ? nL(r10) : r10) ? a2.filter(function(e11) {
    return nw(e11) && function(e12, t11) {
      var r11 = t11.getRootNode && t11.getRootNode();
      if (e12.contains(t11))
        return true;
      if (r11 && nM(r11)) {
        var n6 = t11;
        do {
          if (n6 && e12.isSameNode(n6))
            return true;
          n6 = n6.parentNode || n6.host;
        } while (n6);
      }
      return false;
    }(e11, o2) && "body" !== ny(e11);
  }) : []) : [].concat(n3), [void 0 === m2 ? np : m2]))[0], (l2 = i2.reduce(function(e11, t11) {
    var n6 = nX(r10, t11, h2);
    return e11.top = nP(n6.top, e11.top), e11.right = n_(n6.right, e11.right), e11.bottom = n_(n6.bottom, e11.bottom), e11.left = nP(n6.left, e11.left), e11;
  }, nX(r10, s2, h2))).width = l2.right - l2.left, l2.height = l2.bottom - l2.top, l2.x = l2.left, l2.y = l2.top, l2), P2 = nT(e10.elements.reference), _2 = nK({ reference: P2, element: k2, strategy: "absolute", placement: d2 }), S2 = nY(Object.assign({}, k2, _2)), O2 = b2 === nm ? S2 : P2, D2 = { top: C2.top - O2.top + w2.top, bottom: O2.bottom - C2.bottom + w2.bottom, left: C2.left - O2.left + w2.left, right: O2.right - C2.right + w2.right }, T2 = e10.modifiersData.offset;
  if (b2 === nm && T2) {
    var R2 = T2[d2];
    Object.keys(D2).forEach(function(e11) {
      var t11 = [nc, nl].indexOf(e11) >= 0 ? 1 : -1, r11 = ["top", nl].indexOf(e11) >= 0 ? "y" : "x";
      D2[e11] += R2[r11] * t11;
    });
  }
  return D2;
}
let nZ = { name: "flip", enabled: true, phase: "main", fn: function(e10) {
  var t10 = e10.state, r10 = e10.options, n3 = e10.name;
  if (!t10.modifiersData[n3]._skip) {
    for (var a2 = r10.mainAxis, o2 = void 0 === a2 || a2, i2 = r10.altAxis, s2 = void 0 === i2 || i2, l2 = r10.fallbackPlacements, c2 = r10.padding, u2 = r10.boundary, d2 = r10.rootBoundary, f2 = r10.altBoundary, h2 = r10.flipVariations, p2 = void 0 === h2 || h2, m2 = r10.allowedAutoPlacements, g2 = t10.options.placement, b2 = nC(g2) === g2, v2 = l2 || (b2 || !p2 ? [nH(g2)] : function(e11) {
      if (nC(e11) === nd)
        return [];
      var t11 = nH(e11);
      return [nW(e11), t11, nW(t11)];
    }(g2)), y2 = [g2].concat(v2).reduce(function(e11, r11) {
      var n6, a3, o3, i3, s3, l3, f3, h3, g3, b3, v3, y3;
      return e11.concat(nC(r11) === nd ? (a3 = (n6 = { placement: r11, boundary: u2, rootBoundary: d2, padding: c2, flipVariations: p2, allowedAutoPlacements: m2 }).placement, o3 = n6.boundary, i3 = n6.rootBoundary, s3 = n6.padding, l3 = n6.flipVariations, h3 = void 0 === (f3 = n6.allowedAutoPlacements) ? nb : f3, 0 === (v3 = (b3 = (g3 = nF(a3)) ? l3 ? ng : ng.filter(function(e12) {
        return nF(e12) === g3;
      }) : nf).filter(function(e12) {
        return h3.indexOf(e12) >= 0;
      })).length && (v3 = b3), Object.keys(y3 = v3.reduce(function(e12, r12) {
        return e12[r12] = nJ(t10, { placement: r12, boundary: o3, rootBoundary: i3, padding: s3 })[nC(r12)], e12;
      }, {})).sort(function(e12, t11) {
        return y3[e12] - y3[t11];
      })) : r11);
    }, []), x2 = t10.rects.reference, w2 = t10.rects.popper, k2 = /* @__PURE__ */ new Map(), M2 = true, C2 = y2[0], P2 = 0; P2 < y2.length; P2++) {
      var _2 = y2[P2], S2 = nC(_2), O2 = nF(_2) === nh, D2 = ["top", nl].indexOf(S2) >= 0, T2 = D2 ? "width" : "height", R2 = nJ(t10, { placement: _2, boundary: u2, rootBoundary: d2, altBoundary: f2, padding: c2 }), $2 = D2 ? O2 ? nc : nu : O2 ? nl : "top";
      x2[T2] > w2[T2] && ($2 = nH($2));
      var A2 = nH($2), I2 = [];
      if (o2 && I2.push(R2[S2] <= 0), s2 && I2.push(R2[$2] <= 0, R2[A2] <= 0), I2.every(function(e11) {
        return e11;
      })) {
        C2 = _2, M2 = false;
        break;
      }
      k2.set(_2, I2);
    }
    if (M2)
      for (var L2 = p2 ? 3 : 1, F2 = function(e11) {
        var t11 = y2.find(function(t12) {
          var r11 = k2.get(t12);
          if (r11)
            return r11.slice(0, e11).every(function(e12) {
              return e12;
            });
        });
        if (t11)
          return C2 = t11, "break";
      }, B2 = L2; B2 > 0 && "break" !== F2(B2); B2--)
        ;
    t10.placement !== C2 && (t10.modifiersData[n3]._skip = true, t10.placement = C2, t10.reset = true);
  }
}, requiresIfExists: ["offset"], data: { _skip: false } };
var nQ = { placement: "bottom", modifiers: [], strategy: "absolute" };
function n0() {
  for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++)
    t10[r10] = arguments[r10];
  return !t10.some(function(e11) {
    return !(e11 && "function" == typeof e11.getBoundingClientRect);
  });
}
var n1 = function(e10) {
  void 0 === e10 && (e10 = {});
  var t10 = e10, r10 = t10.defaultModifiers, n3 = void 0 === r10 ? [] : r10, a2 = t10.defaultOptions, o2 = void 0 === a2 ? nQ : a2;
  return function(e11, t11, r11) {
    void 0 === r11 && (r11 = o2);
    var a3, i2 = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, nQ, o2), modifiersData: {}, elements: { reference: e11, popper: t11 }, attributes: {}, styles: {} }, s2 = [], l2 = false, c2 = { state: i2, setOptions: function(r12) {
      var a4, l3, d2, f2, h2, p2 = "function" == typeof r12 ? r12(i2.options) : r12;
      u2(), i2.options = Object.assign({}, o2, i2.options, p2), i2.scrollParents = { reference: nw(e11) ? nG(e11) : e11.contextElement ? nG(e11.contextElement) : [], popper: nG(t11) };
      var m2 = (l3 = Object.keys(a4 = [].concat(n3, i2.options.modifiers).reduce(function(e12, t12) {
        var r13 = e12[t12.name];
        return e12[t12.name] = r13 ? Object.assign({}, r13, t12, { options: Object.assign({}, r13.options, t12.options), data: Object.assign({}, r13.data, t12.data) }) : t12, e12;
      }, {})).map(function(e12) {
        return a4[e12];
      }), d2 = /* @__PURE__ */ new Map(), f2 = /* @__PURE__ */ new Set(), h2 = [], l3.forEach(function(e12) {
        d2.set(e12.name, e12);
      }), l3.forEach(function(e12) {
        f2.has(e12.name) || function e13(t12) {
          f2.add(t12.name), [].concat(t12.requires || [], t12.requiresIfExists || []).forEach(function(t13) {
            if (!f2.has(t13)) {
              var r13 = d2.get(t13);
              r13 && e13(r13);
            }
          }), h2.push(t12);
        }(e12);
      }), nv.reduce(function(e12, t12) {
        return e12.concat(h2.filter(function(e13) {
          return e13.phase === t12;
        }));
      }, []));
      return i2.orderedModifiers = m2.filter(function(e12) {
        return e12.enabled;
      }), i2.orderedModifiers.forEach(function(e12) {
        var t12 = e12.name, r13 = e12.options, n6 = e12.effect;
        if ("function" == typeof n6) {
          var a5 = n6({ state: i2, name: t12, instance: c2, options: void 0 === r13 ? {} : r13 });
          s2.push(a5 || function() {
          });
        }
      }), c2.update();
    }, forceUpdate: function() {
      if (!l2) {
        var e12, t12, r12, n6, a4, o3, s3, u3, d2, f2, h2, p2, m2, g2, b2, v2 = i2.elements, y2 = v2.reference, x2 = v2.popper;
        if (n0(y2, x2)) {
          i2.rects = { reference: (t12 = nL(x2), r12 = "fixed" === i2.options.strategy, n6 = nk(t12), u3 = nk(t12) && (o3 = nS((a4 = t12.getBoundingClientRect()).width) / t12.offsetWidth || 1, s3 = nS(a4.height) / t12.offsetHeight || 1, 1 !== o3 || 1 !== s3), d2 = n$(t12), f2 = nT(y2, u3, r12), h2 = { scrollLeft: 0, scrollTop: 0 }, p2 = { x: 0, y: 0 }, (n6 || !n6 && !r12) && (("body" !== ny(t12) || nU(d2)) && (h2 = (e12 = t12) !== nx(e12) && nk(e12) ? { scrollLeft: e12.scrollLeft, scrollTop: e12.scrollTop } : nN(e12)), nk(t12) ? (p2 = nT(t12, true), p2.x += t12.clientLeft, p2.y += t12.clientTop) : d2 && (p2.x = nq(d2))), { x: f2.left + h2.scrollLeft - p2.x, y: f2.top + h2.scrollTop - p2.y, width: f2.width, height: f2.height }), popper: (m2 = nT(x2), g2 = x2.offsetWidth, b2 = x2.offsetHeight, 1 >= Math.abs(m2.width - g2) && (g2 = m2.width), 1 >= Math.abs(m2.height - b2) && (b2 = m2.height), { x: x2.offsetLeft, y: x2.offsetTop, width: g2, height: b2 }) }, i2.reset = false, i2.placement = i2.options.placement, i2.orderedModifiers.forEach(function(e13) {
            return i2.modifiersData[e13.name] = Object.assign({}, e13.data);
          });
          for (var w2 = 0; w2 < i2.orderedModifiers.length; w2++) {
            if (true === i2.reset) {
              i2.reset = false, w2 = -1;
              continue;
            }
            var k2 = i2.orderedModifiers[w2], M2 = k2.fn, C2 = k2.options, P2 = void 0 === C2 ? {} : C2, _2 = k2.name;
            "function" == typeof M2 && (i2 = M2({ state: i2, options: P2, name: _2, instance: c2 }) || i2);
          }
        }
      }
    }, update: function() {
      return a3 || (a3 = new Promise(function(e12) {
        Promise.resolve().then(function() {
          a3 = void 0, e12(new Promise(function(e13) {
            c2.forceUpdate(), e13(i2);
          }));
        });
      })), a3;
    }, destroy: function() {
      u2(), l2 = true;
    } };
    if (!n0(e11, t11))
      return c2;
    function u2() {
      s2.forEach(function(e12) {
        return e12();
      }), s2 = [];
    }
    return c2.setOptions(r11).then(function(e12) {
      !l2 && r11.onFirstUpdate && r11.onFirstUpdate(e12);
    }), c2;
  };
}({ defaultModifiers: [{ name: "eventListeners", enabled: true, phase: "write", fn: function() {
}, effect: function(e10) {
  var t10 = e10.state, r10 = e10.instance, n3 = e10.options, a2 = n3.scroll, o2 = void 0 === a2 || a2, i2 = n3.resize, s2 = void 0 === i2 || i2, l2 = nx(t10.elements.popper), c2 = [].concat(t10.scrollParents.reference, t10.scrollParents.popper);
  return o2 && c2.forEach(function(e11) {
    e11.addEventListener("scroll", r10.update, nE);
  }), s2 && l2.addEventListener("resize", r10.update, nE), function() {
    o2 && c2.forEach(function(e11) {
      e11.removeEventListener("scroll", r10.update, nE);
    }), s2 && l2.removeEventListener("resize", r10.update, nE);
  };
}, data: {} }, { name: "popperOffsets", enabled: true, phase: "read", fn: function(e10) {
  var t10 = e10.state, r10 = e10.name;
  t10.modifiersData[r10] = nK({ reference: t10.rects.reference, element: t10.rects.popper, strategy: "absolute", placement: t10.placement });
}, data: {} }, { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: function(e10) {
  var t10 = e10.state, r10 = e10.options, n3 = r10.gpuAcceleration, a2 = r10.adaptive, o2 = r10.roundOffsets, i2 = void 0 === o2 || o2, s2 = { placement: nC(t10.placement), variation: nF(t10.placement), popper: t10.elements.popper, popperRect: t10.rects.popper, gpuAcceleration: void 0 === n3 || n3, isFixed: "fixed" === t10.options.strategy };
  null != t10.modifiersData.popperOffsets && (t10.styles.popper = Object.assign({}, t10.styles.popper, nj(Object.assign({}, s2, { offsets: t10.modifiersData.popperOffsets, position: t10.options.strategy, adaptive: void 0 === a2 || a2, roundOffsets: i2 })))), null != t10.modifiersData.arrow && (t10.styles.arrow = Object.assign({}, t10.styles.arrow, nj(Object.assign({}, s2, { offsets: t10.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: i2 })))), t10.attributes.popper = Object.assign({}, t10.attributes.popper, { "data-popper-placement": t10.placement });
}, data: {} }, { name: "applyStyles", enabled: true, phase: "write", fn: function(e10) {
  var t10 = e10.state;
  Object.keys(t10.elements).forEach(function(e11) {
    var r10 = t10.styles[e11] || {}, n3 = t10.attributes[e11] || {}, a2 = t10.elements[e11];
    nk(a2) && ny(a2) && (Object.assign(a2.style, r10), Object.keys(n3).forEach(function(e12) {
      var t11 = n3[e12];
      false === t11 ? a2.removeAttribute(e12) : a2.setAttribute(e12, true === t11 ? "" : t11);
    }));
  });
}, effect: function(e10) {
  var t10 = e10.state, r10 = { popper: { position: t10.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t10.elements.popper.style, r10.popper), t10.styles = r10, t10.elements.arrow && Object.assign(t10.elements.arrow.style, r10.arrow), function() {
    Object.keys(t10.elements).forEach(function(e11) {
      var n3 = t10.elements[e11], a2 = t10.attributes[e11] || {}, o2 = Object.keys(t10.styles.hasOwnProperty(e11) ? t10.styles[e11] : r10[e11]).reduce(function(e12, t11) {
        return e12[t11] = "", e12;
      }, {});
      nk(n3) && ny(n3) && (Object.assign(n3.style, o2), Object.keys(a2).forEach(function(e12) {
        n3.removeAttribute(e12);
      }));
    });
  };
}, requires: ["computeStyles"] }] });
function n2(e10, t10) {
  return { fn: e10, enabled: true, ...t10 };
}
let n4 = e({ isOpen: ns.propTypes.isOpen, onClickOutside: ns.propTypes.onClickOutside, placement: L().optional(), modifiers: L().optional(), $transition: ns.propTypes.$transition, $content: L(), $default: L() }, (e10, r10) => {
  let { slots: n3, emit: a2, attrs: i2 } = r10, l2 = o(null), c2 = o(null);
  return m(() => c2.value, (t10) => {
    if (t10) {
      var r11, n6;
      n1(l2.value, t10, { placement: null !== (r11 = e10.placement) && void 0 !== r11 ? r11 : "bottom", modifiers: [...null !== (n6 = e10.modifiers) && void 0 !== n6 ? n6 : [], nZ] });
    }
  }), () => {
    var r11, o2;
    let u2 = null === (r11 = n3.default) || void 0 === r11 ? void 0 : r11.call(n3)[0];
    return u2 ? g(b, { children: [s(u2, { ...i2, onVnodeMounted: (e11) => {
      l2.value = function e12(t10) {
        if (t10) {
          if (t10 instanceof HTMLElement)
            return t10;
          if (t10 instanceof Text)
            return e12(t10.nextElementSibling);
        }
        return null;
      }(e11.el);
    } }), t(ns, { triggerRef: l2, contentRef: c2, isOpen: e10.isOpen, onClickOutside: (e11) => a2("click-outside", e11), style: { zIndex: 100 }, $transition: n3.transition, children: null === (o2 = n3.content) || void 0 === o2 ? void 0 : o2.call(n3) })] }) : null;
  };
}, { name: "Popper", inheritAttrs: false }), n5 = Object.assign(n4, { displayName: "Popper" });
export {
  r8 as B,
  nr as C,
  ne as G,
  ns as O,
  n5 as P,
  rf as T,
  tp as a,
  rn as b,
  n2 as c,
  ri as d,
  r9 as s,
  ro as t,
  tg as v
};
