import { c as e, j as t, T as r, d as n, o as a, r as i, e as o, a as s, u as l, f as c, g as u, t as d, h as f, s as h, i as p, w as m, b as g, F as b } from "./lib-nodepkg-vuekit.ab4a9063.chunk.js";
import { h as v, b as y, j as x, l as w, m as k, n as M, q as C, i as P, r as _, d as S, k as O, g as D, t as T, u as R, v as $, w as A, x as I, c as L, e as F } from "./lib-nodepkg-typedef.3ad1c9f9.chunk.js";
function B(e14, t10) {
  var r10 = {};
  for (var n10 in e14)
    Object.prototype.hasOwnProperty.call(e14, n10) && 0 > t10.indexOf(n10) && (r10[n10] = e14[n10]);
  if (null != e14 && "function" == typeof Object.getOwnPropertySymbols)
    for (var a2 = 0, n10 = Object.getOwnPropertySymbols(e14); a2 < n10.length; a2++)
      0 > t10.indexOf(n10[a2]) && Object.prototype.propertyIsEnumerable.call(e14, n10[a2]) && (r10[n10[a2]] = e14[n10[a2]]);
  return r10;
}
var j, E, V, H, z, W, N, q, U, G, Y, X = function() {
}, K = function() {
};
let J = (e14, t10, r10) => Math.min(Math.max(r10, e14), t10);
function Z(e14, t10) {
  return e14 * Math.sqrt(1 - t10 * t10);
}
let Q = ["duration", "bounce"], ee = ["stiffness", "damping", "mass"];
function et(e14, t10) {
  return t10.some((t11) => void 0 !== e14[t11]);
}
function er(e14) {
  var { from: t10 = 0, to: r10 = 1, restSpeed: n10 = 2, restDelta: a2 } = e14, i2 = B(e14, ["from", "to", "restSpeed", "restDelta"]);
  let o2 = { done: false, value: t10 }, { stiffness: s2, damping: l2, mass: c2, velocity: u2, duration: d2, isResolvedFromDuration: f2 } = function(e15) {
    let t11 = Object.assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: false }, e15);
    if (!et(e15, ee) && et(e15, Q)) {
      let r11 = function(e16) {
        let t12, r12, { duration: n11 = 800, bounce: a3 = 0.25, velocity: i3 = 0, mass: o3 = 1 } = e16;
        X(n11 <= 1e4);
        let s3 = 1 - a3;
        s3 = J(0.05, 1, s3), n11 = J(0.01, 10, n11 / 1e3), s3 < 1 ? (t12 = (e17) => {
          let t13 = e17 * s3, r13 = t13 * n11, a4 = Z(e17, s3);
          return 1e-3 - (t13 - i3) / a4 * Math.exp(-r13);
        }, r12 = (e17) => {
          let r13 = e17 * s3, a4 = r13 * n11, o4 = Math.pow(s3, 2) * Math.pow(e17, 2) * n11, l4 = Z(Math.pow(e17, 2), s3), c4 = -t12(e17) + 1e-3 > 0 ? -1 : 1;
          return c4 * ((a4 * i3 + i3 - o4) * Math.exp(-a4)) / l4;
        }) : (t12 = (e17) => {
          let t13 = Math.exp(-e17 * n11), r13 = (e17 - i3) * n11 + 1;
          return -1e-3 + t13 * r13;
        }, r12 = (e17) => {
          let t13 = Math.exp(-e17 * n11), r13 = (i3 - e17) * (n11 * n11);
          return t13 * r13;
        });
        let l3 = 5 / n11, c3 = function(e17, t13, r13) {
          let n12 = r13;
          for (let r14 = 1; r14 < 12; r14++)
            n12 -= e17(n12) / t13(n12);
          return n12;
        }(t12, r12, l3);
        if (n11 *= 1e3, isNaN(c3))
          return { stiffness: 100, damping: 10, duration: n11 };
        {
          let e17 = Math.pow(c3, 2) * o3;
          return { stiffness: e17, damping: 2 * s3 * Math.sqrt(o3 * e17), duration: n11 };
        }
      }(e15);
      (t11 = Object.assign(Object.assign(Object.assign({}, t11), r11), { velocity: 0, mass: 1 })).isResolvedFromDuration = true;
    }
    return t11;
  }(i2), h2 = en, p2 = en;
  function m2() {
    let e15 = u2 ? -(u2 / 1e3) : 0, n11 = r10 - t10, i3 = l2 / (2 * Math.sqrt(s2 * c2)), o3 = Math.sqrt(s2 / c2) / 1e3;
    if (void 0 === a2 && (a2 = Math.min(Math.abs(r10 - t10) / 100, 0.4)), i3 < 1) {
      let t11 = Z(o3, i3);
      h2 = (a3) => {
        let s3 = Math.exp(-i3 * o3 * a3);
        return r10 - s3 * ((e15 + i3 * o3 * n11) / t11 * Math.sin(t11 * a3) + n11 * Math.cos(t11 * a3));
      }, p2 = (r11) => {
        let a3 = Math.exp(-i3 * o3 * r11);
        return i3 * o3 * a3 * (Math.sin(t11 * r11) * (e15 + i3 * o3 * n11) / t11 + n11 * Math.cos(t11 * r11)) - a3 * (Math.cos(t11 * r11) * (e15 + i3 * o3 * n11) - t11 * n11 * Math.sin(t11 * r11));
      };
    } else if (1 === i3)
      h2 = (t11) => r10 - Math.exp(-o3 * t11) * (n11 + (e15 + o3 * n11) * t11);
    else {
      let t11 = o3 * Math.sqrt(i3 * i3 - 1);
      h2 = (a3) => {
        let s3 = Math.exp(-i3 * o3 * a3), l3 = Math.min(t11 * a3, 300);
        return r10 - s3 * ((e15 + i3 * o3 * n11) * Math.sinh(l3) + t11 * n11 * Math.cosh(l3)) / t11;
      };
    }
  }
  return m2(), { next: (e15) => {
    let t11 = h2(e15);
    if (f2)
      o2.done = e15 >= d2;
    else {
      let i3 = 1e3 * p2(e15), s3 = Math.abs(r10 - t11) <= a2;
      o2.done = Math.abs(i3) <= n10 && s3;
    }
    return o2.value = o2.done ? r10 : t11, o2;
  }, flipTarget: () => {
    u2 = -u2, [t10, r10] = [r10, t10], m2();
  } };
}
er.needsInterpolation = (e14, t10) => "string" == typeof e14 || "string" == typeof t10;
let en = (e14) => 0, ea = (e14, t10, r10) => {
  let n10 = t10 - e14;
  return 0 === n10 ? 1 : (r10 - e14) / n10;
}, ei = (e14, t10, r10) => -r10 * e14 + r10 * t10 + e14, eo = (e14, t10) => (r10) => Math.max(Math.min(r10, t10), e14), es = (e14) => e14 % 1 ? Number(e14.toFixed(5)) : e14, el = /(-)?([\d]*\.?[\d])+/g, ec = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, eu = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function ed(e14) {
  return "string" == typeof e14;
}
let ef = { test: (e14) => "number" == typeof e14, parse: parseFloat, transform: (e14) => e14 }, eh = Object.assign(Object.assign({}, ef), { transform: eo(0, 1) });
Object.assign(Object.assign({}, ef), { default: 1 });
let ep = { test: (e14) => ed(e14) && e14.endsWith("%") && 1 === e14.split(" ").length, parse: parseFloat, transform: (e14) => `${e14}%` };
Object.assign(Object.assign({}, ep), { parse: (e14) => ep.parse(e14) / 100, transform: (e14) => ep.transform(100 * e14) });
let em = (e14, t10) => (r10) => !!(ed(r10) && eu.test(r10) && r10.startsWith(e14) || t10 && Object.prototype.hasOwnProperty.call(r10, t10)), eg = (e14, t10, r10) => (n10) => {
  if (!ed(n10))
    return n10;
  let [a2, i2, o2, s2] = n10.match(el);
  return { [e14]: parseFloat(a2), [t10]: parseFloat(i2), [r10]: parseFloat(o2), alpha: void 0 !== s2 ? parseFloat(s2) : 1 };
}, eb = { test: em("hsl", "hue"), parse: eg("hue", "saturation", "lightness"), transform: (e14) => {
  let { hue: t10, saturation: r10, lightness: n10, alpha: a2 = 1 } = e14;
  return "hsla(" + Math.round(t10) + ", " + ep.transform(es(r10)) + ", " + ep.transform(es(n10)) + ", " + es(eh.transform(a2)) + ")";
} }, ev = eo(0, 255), ey = Object.assign(Object.assign({}, ef), { transform: (e14) => Math.round(ev(e14)) }), ex = { test: em("rgb", "red"), parse: eg("red", "green", "blue"), transform: (e14) => {
  let { red: t10, green: r10, blue: n10, alpha: a2 = 1 } = e14;
  return "rgba(" + ey.transform(t10) + ", " + ey.transform(r10) + ", " + ey.transform(n10) + ", " + es(eh.transform(a2)) + ")";
} }, ew = { test: em("#"), parse: function(e14) {
  let t10 = "", r10 = "", n10 = "", a2 = "";
  return e14.length > 5 ? (t10 = e14.substr(1, 2), r10 = e14.substr(3, 2), n10 = e14.substr(5, 2), a2 = e14.substr(7, 2)) : (t10 = e14.substr(1, 1), r10 = e14.substr(2, 1), n10 = e14.substr(3, 1), a2 = e14.substr(4, 1), t10 += t10, r10 += r10, n10 += n10, a2 += a2), { red: parseInt(t10, 16), green: parseInt(r10, 16), blue: parseInt(n10, 16), alpha: a2 ? parseInt(a2, 16) / 255 : 1 };
}, transform: ex.transform }, ek = { test: (e14) => ex.test(e14) || ew.test(e14) || eb.test(e14), parse: (e14) => ex.test(e14) ? ex.parse(e14) : eb.test(e14) ? eb.parse(e14) : ew.parse(e14), transform: (e14) => ed(e14) ? e14 : e14.hasOwnProperty("red") ? ex.transform(e14) : eb.transform(e14) }, eM = "${c}", eC = "${n}";
function eP(e14) {
  "number" == typeof e14 && (e14 = `${e14}`);
  let t10 = [], r10 = 0, n10 = e14.match(ec);
  n10 && (r10 = n10.length, e14 = e14.replace(ec, eM), t10.push(...n10.map(ek.parse)));
  let a2 = e14.match(el);
  return a2 && (e14 = e14.replace(el, eC), t10.push(...a2.map(ef.parse))), { values: t10, numColors: r10, tokenised: e14 };
}
function e_(e14) {
  return eP(e14).values;
}
function eS(e14) {
  let { values: t10, numColors: r10, tokenised: n10 } = eP(e14), a2 = t10.length;
  return (e15) => {
    let t11 = n10;
    for (let n11 = 0; n11 < a2; n11++)
      t11 = t11.replace(n11 < r10 ? eM : eC, n11 < r10 ? ek.transform(e15[n11]) : es(e15[n11]));
    return t11;
  };
}
let eO = (e14) => "number" == typeof e14 ? 0 : e14, eD = { test: function(e14) {
  var t10, r10, n10, a2;
  return isNaN(e14) && ed(e14) && (null !== (r10 = null === (t10 = e14.match(el)) || void 0 === t10 ? void 0 : t10.length) && void 0 !== r10 ? r10 : 0) + (null !== (a2 = null === (n10 = e14.match(ec)) || void 0 === n10 ? void 0 : n10.length) && void 0 !== a2 ? a2 : 0) > 0;
}, parse: e_, createTransformer: eS, getAnimatableNone: function(e14) {
  let t10 = e_(e14), r10 = eS(e14);
  return r10(t10.map(eO));
} };
function eT(e14, t10, r10) {
  return (r10 < 0 && (r10 += 1), r10 > 1 && (r10 -= 1), r10 < 1 / 6) ? e14 + (t10 - e14) * 6 * r10 : r10 < 0.5 ? t10 : r10 < 2 / 3 ? e14 + (t10 - e14) * (2 / 3 - r10) * 6 : e14;
}
function eR(e14) {
  let { hue: t10, saturation: r10, lightness: n10, alpha: a2 } = e14;
  t10 /= 360, n10 /= 100;
  let i2 = 0, o2 = 0, s2 = 0;
  if (r10 /= 100) {
    let e15 = n10 < 0.5 ? n10 * (1 + r10) : n10 + r10 - n10 * r10, a3 = 2 * n10 - e15;
    i2 = eT(a3, e15, t10 + 1 / 3), o2 = eT(a3, e15, t10), s2 = eT(a3, e15, t10 - 1 / 3);
  } else
    i2 = o2 = s2 = n10;
  return { red: Math.round(255 * i2), green: Math.round(255 * o2), blue: Math.round(255 * s2), alpha: a2 };
}
let e$ = (e14, t10, r10) => {
  let n10 = e14 * e14;
  return Math.sqrt(Math.max(0, r10 * (t10 * t10 - n10) + n10));
}, eA = [ew, ex, eb], eI = (e14) => eA.find((t10) => t10.test(e14)), eL = (e14, t10) => {
  let r10 = eI(e14), n10 = eI(t10), a2 = r10.parse(e14), i2 = n10.parse(t10);
  r10 === eb && (a2 = eR(a2), r10 = ex), n10 === eb && (i2 = eR(i2), n10 = ex);
  let o2 = Object.assign({}, a2);
  return (e15) => {
    for (let t11 in o2)
      "alpha" !== t11 && (o2[t11] = e$(a2[t11], i2[t11], e15));
    return o2.alpha = ei(a2.alpha, i2.alpha, e15), r10.transform(o2);
  };
}, eF = (e14) => "number" == typeof e14, eB = (e14, t10) => (r10) => t10(e14(r10)), ej = function() {
  for (var e14 = arguments.length, t10 = Array(e14), r10 = 0; r10 < e14; r10++)
    t10[r10] = arguments[r10];
  return t10.reduce(eB);
};
function eE(e14, t10) {
  return eF(e14) ? (r10) => ei(e14, t10, r10) : ek.test(e14) ? eL(e14, t10) : eW(e14, t10);
}
let eV = (e14, t10) => {
  let r10 = [...e14], n10 = r10.length, a2 = e14.map((e15, r11) => eE(e15, t10[r11]));
  return (e15) => {
    for (let t11 = 0; t11 < n10; t11++)
      r10[t11] = a2[t11](e15);
    return r10;
  };
}, eH = (e14, t10) => {
  let r10 = Object.assign(Object.assign({}, e14), t10), n10 = {};
  for (let a2 in r10)
    void 0 !== e14[a2] && void 0 !== t10[a2] && (n10[a2] = eE(e14[a2], t10[a2]));
  return (e15) => {
    for (let t11 in n10)
      r10[t11] = n10[t11](e15);
    return r10;
  };
};
function ez(e14) {
  let t10 = eD.parse(e14), r10 = t10.length, n10 = 0, a2 = 0, i2 = 0;
  for (let e15 = 0; e15 < r10; e15++)
    n10 || "number" == typeof t10[e15] ? n10++ : void 0 !== t10[e15].hue ? i2++ : a2++;
  return { parsed: t10, numNumbers: n10, numRGB: a2, numHSL: i2 };
}
let eW = (e14, t10) => {
  let r10 = eD.createTransformer(t10), n10 = ez(e14), a2 = ez(t10), i2 = n10.numHSL === a2.numHSL && n10.numRGB === a2.numRGB && n10.numNumbers >= a2.numNumbers;
  return i2 ? ej(eV(n10.parsed, a2.parsed), r10) : (r11) => `${r11 > 0 ? t10 : e14}`;
}, eN = (e14, t10) => (r10) => ei(e14, t10, r10);
function eq(e14, t10) {
  let { clamp: r10 = true, ease: n10, mixer: a2 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i2 = e14.length;
  K(i2 === t10.length), K(!n10 || !Array.isArray(n10) || n10.length === i2 - 1), e14[0] > e14[i2 - 1] && (e14 = [].concat(e14), t10 = [].concat(t10), e14.reverse(), t10.reverse());
  let o2 = function(e15, t11, r11) {
    var n11;
    let a3 = [], i3 = r11 || ("number" == typeof (n11 = e15[0]) ? eN : "string" == typeof n11 ? ek.test(n11) ? eL : eW : Array.isArray(n11) ? eV : "object" == typeof n11 ? eH : void 0), o3 = e15.length - 1;
    for (let r12 = 0; r12 < o3; r12++) {
      let n12 = i3(e15[r12], e15[r12 + 1]);
      if (t11) {
        let e16 = Array.isArray(t11) ? t11[r12] : t11;
        n12 = ej(e16, n12);
      }
      a3.push(n12);
    }
    return a3;
  }(t10, n10, a2), s2 = 2 === i2 ? function(e15, t11) {
    let [r11, n11] = e15, [a3] = t11;
    return (e16) => a3(ea(r11, n11, e16));
  }(e14, o2) : function(e15, t11) {
    let r11 = e15.length, n11 = r11 - 1;
    return (a3) => {
      let i3 = 0, o3 = false;
      if (a3 <= e15[0] ? o3 = true : a3 >= e15[n11] && (i3 = n11 - 1, o3 = true), !o3) {
        let t12 = 1;
        for (; t12 < r11 && !(e15[t12] > a3) && t12 !== n11; t12++)
          ;
        i3 = t12 - 1;
      }
      let s3 = ea(e15[i3], e15[i3 + 1], a3);
      return t11[i3](s3);
    };
  }(e14, o2);
  return r10 ? (t11) => s2(J(e14[0], e14[i2 - 1], t11)) : s2;
}
let eU = (e14) => (t10) => t10 * t10 * ((e14 + 1) * t10 - e14), eG = (e14) => e14, eY = (j = (e14) => Math.pow(e14, 2), (e14) => e14 <= 0.5 ? j(2 * e14) / 2 : (2 - j(2 * (1 - e14))) / 2);
function eX(e14) {
  let { from: t10 = 0, to: r10 = 1, ease: n10, offset: a2, duration: i2 = 300 } = e14, o2 = { done: false, value: t10 }, s2 = Array.isArray(r10) ? r10 : [t10, r10], l2 = (a2 && a2.length === s2.length ? a2 : function(e15) {
    let t11 = e15.length;
    return e15.map((e16, r11) => 0 !== r11 ? r11 / (t11 - 1) : 0);
  }(s2)).map((e15) => e15 * i2);
  function c2() {
    return eq(l2, s2, { ease: Array.isArray(n10) ? n10 : s2.map(() => n10 || eY).splice(0, s2.length - 1) });
  }
  let u2 = c2();
  return { next: (e15) => (o2.value = u2(e15), o2.done = e15 >= i2, o2), flipTarget: () => {
    s2.reverse(), u2 = c2();
  } };
}
((e14) => {
  let t10 = eU(1.525);
  return (e15) => (e15 *= 2) < 1 ? 0.5 * t10(e15) : 0.5 * (2 - Math.pow(2, -10 * (e15 - 1)));
})(0);
let eK = { keyframes: eX, spring: er, decay: function(e14) {
  let { velocity: t10 = 0, from: r10 = 0, power: n10 = 0.8, timeConstant: a2 = 350, restDelta: i2 = 0.5, modifyTarget: o2 } = e14, s2 = { done: false, value: r10 }, l2 = n10 * t10, c2 = r10 + l2, u2 = void 0 === o2 ? c2 : o2(c2);
  return u2 !== c2 && (l2 = u2 - r10), { next: (e15) => {
    let t11 = -l2 * Math.exp(-e15 / a2);
    return s2.done = !(t11 > i2 || t11 < -i2), s2.value = s2.done ? u2 : u2 + t11, s2;
  }, flipTarget: () => {
  } };
} }, eJ = 1 / 60 * 1e3, eZ = "undefined" != typeof performance ? () => performance.now() : () => Date.now(), eQ = "undefined" != typeof window ? (e14) => window.requestAnimationFrame(e14) : (e14) => setTimeout(() => e14(eZ()), eJ), e0 = true, e1 = false, e2 = false, e4 = { delta: 0, timestamp: 0 }, e5 = ["read", "update", "preRender", "render", "postRender"], e3 = e5.reduce((e14, t10) => (e14[t10] = function(e15) {
  let t11 = [], r10 = [], n10 = 0, a2 = false, i2 = false, o2 = /* @__PURE__ */ new WeakSet(), s2 = { schedule: function(e16) {
    let i3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], s3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], l2 = s3 && a2, c2 = l2 ? t11 : r10;
    return i3 && o2.add(e16), -1 === c2.indexOf(e16) && (c2.push(e16), l2 && a2 && (n10 = t11.length)), e16;
  }, cancel: (e16) => {
    let t12 = r10.indexOf(e16);
    -1 !== t12 && r10.splice(t12, 1), o2.delete(e16);
  }, process: (l2) => {
    if (a2) {
      i2 = true;
      return;
    }
    if (a2 = true, [t11, r10] = [r10, t11], r10.length = 0, n10 = t11.length)
      for (let r11 = 0; r11 < n10; r11++) {
        let n11 = t11[r11];
        n11(l2), o2.has(n11) && (s2.schedule(n11), e15());
      }
    a2 = false, i2 && (i2 = false, s2.process(l2));
  } };
  return s2;
}(() => e1 = true), e14), {}), e8 = e5.reduce((e14, t10) => {
  let r10 = e3[t10];
  return e14[t10] = function(e15) {
    let t11 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return e1 || te(), r10.schedule(e15, t11, n10);
  }, e14;
}, {}), e6 = e5.reduce((e14, t10) => (e14[t10] = e3[t10].cancel, e14), {});
e5.reduce((e14, t10) => (e14[t10] = () => e3[t10].process(e4), e14), {});
let e9 = (e14) => e3[e14].process(e4), e7 = (e14) => {
  e1 = false, e4.delta = e0 ? eJ : Math.max(Math.min(e14 - e4.timestamp, 40), 1), e4.timestamp = e14, e2 = true, e5.forEach(e9), e2 = false, e1 && (e0 = false, eQ(e7));
}, te = () => {
  e1 = true, e0 = true, e2 || eQ(e7);
};
function tt(e14, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
  return e14 - t10 - r10;
}
let tr = (e14) => {
  let t10 = (t11) => {
    let { delta: r10 } = t11;
    return e14(r10);
  };
  return { start: () => e8.update(t10, true), stop: () => e6.update(t10) };
};
function tn(e14) {
  let t10, r10, n10;
  var a2, { from: i2, autoplay: o2 = true, driver: s2 = tr, elapsed: l2 = 0, repeat: c2 = 0, repeatType: u2 = "loop", repeatDelay: d2 = 0, onPlay: f2, onStop: h2, onComplete: p2, onRepeat: m2, onUpdate: g2 } = e14, b2 = B(e14, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
  let { to: v2 } = b2, y2 = 0, x2 = b2.duration, w2 = false, k2 = true, M2 = function(e15) {
    if (Array.isArray(e15.to))
      return eX;
    if (eK[e15.type])
      return eK[e15.type];
    let t11 = new Set(Object.keys(e15));
    if (t11.has("ease") || t11.has("duration") && !t11.has("dampingRatio"))
      ;
    else if (t11.has("dampingRatio") || t11.has("stiffness") || t11.has("mass") || t11.has("damping") || t11.has("restSpeed") || t11.has("restDelta"))
      return er;
    return eX;
  }(b2);
  (null === (a2 = M2.needsInterpolation) || void 0 === a2 ? void 0 : a2.call(M2, i2, v2)) && (n10 = eq([0, 100], [i2, v2], { clamp: false }), i2 = 0, v2 = 100);
  let C2 = M2(Object.assign(Object.assign({}, b2), { from: i2, to: v2 }));
  return o2 && (null == f2 || f2(), (t10 = s2(function(e15) {
    if (k2 || (e15 = -e15), l2 += e15, !w2) {
      let e16 = C2.next(Math.max(0, l2));
      r10 = e16.value, n10 && (r10 = n10(r10)), w2 = k2 ? e16.done : l2 <= 0;
    }
    if (null == g2 || g2(r10), w2) {
      if (0 === y2 && (null != x2 || (x2 = l2)), y2 < c2) {
        var a3, i3;
        a3 = l2, i3 = x2, (k2 ? a3 >= i3 + d2 : a3 <= -d2) && (y2++, "reverse" === u2 ? l2 = function(e16, t11) {
          let r11 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n11 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
          return n11 ? tt(t11 + -e16, t11, r11) : t11 - (e16 - t11) + r11;
        }(l2, x2, d2, k2 = y2 % 2 == 0) : (l2 = tt(l2, x2, d2), "mirror" === u2 && C2.flipTarget()), w2 = false, m2 && m2());
      } else
        t10.stop(), p2 && p2();
    }
  })).start()), { stop: () => {
    null == h2 || h2(), t10.stop();
  } };
}
let ta = (e14, t10) => 1 - 3 * t10 + 3 * e14, ti = (e14, t10) => 3 * t10 - 6 * e14, to = (e14) => 3 * e14, ts = (e14, t10, r10) => ((ta(t10, r10) * e14 + ti(t10, r10)) * e14 + to(t10)) * e14, tl = (e14, t10, r10) => 3 * ta(t10, r10) * e14 * e14 + 2 * ti(t10, r10) * e14 + to(t10);
function tc() {
  return new Proxy({}, { get: (e14, t10) => t10 });
}
let tu = tc(), td = { paddingX: [tu.paddingLeft, tu.paddingRight], paddingY: [tu.paddingTop, tu.paddingBottom], marginX: [tu.marginInlineStart, tu.marginInlineEnd], marginY: [tu.marginTop, tu.marginBottom], borderX: [tu.borderLeft, tu.borderRight], borderY: [tu.borderTop, tu.borderBottom], color: [tu.color, tu.fill], borderTopRadius: [tu.borderTopLeftRadius, tu.borderTopRightRadius], borderBottomRadius: [tu.borderBottomLeftRadius, tu.borderBottomRightRadius], borderRightRadius: [tu.borderTopRightRadius, tu.borderBottomRightRadius], borderLeftRadius: [tu.borderTopLeftRadius, tu.borderBottomLeftRadius], backgroundGradient: [tu.backgroundImage], boxSize: [tu.width, tu.height] }, tf = tc(), th = { font: tf.fontFamily, shadow: tf.boxShadow, rounded: tf.borderRadius, roundedTop: tf.borderTopRadius, roundedBottom: tf.borderBottomRadius, roundedLeft: tf.borderLeftRadius, roundedRight: tf.borderRightRadius, bg: tf.background, bgImage: tf.backgroundImage, bgSize: tf.backgroundSize, bgPosition: tf.backgroundPosition, bgRepeat: tf.backgroundRepeat, bgAttachment: tf.backgroundAttachment, bgColor: tf.backgroundColor, bgGradient: tf.backgroundGradient, bgClip: tf.backgroundClip, pos: tf.position, p: tf.padding, pt: tf.paddingTop, pr: tf.paddingRight, pl: tf.paddingLeft, pb: tf.paddingBottom, ps: tf.paddingInlineStart, pe: tf.paddingInlineEnd, px: tf.paddingX, py: tf.paddingY, m: tf.margin, mt: tf.marginTop, mr: tf.marginRight, ml: tf.marginLeft, mb: tf.marginBottom, ms: tf.marginInlineStart, me: tf.marginInlineEnd, mx: tf.marginX, my: tf.marginY, w: tf.width, minW: tf.minWidth, maxW: tf.maxWidth, h: tf.height, minH: tf.minHeight, maxH: tf.maxHeight }, tp = tc(), tm = function() {
  for (var e14 = arguments.length, t10 = Array(e14), r10 = 0; r10 < e14; r10++)
    t10[r10] = arguments[r10];
  let n10 = [...t10];
  for (let e15 of t10)
    th[e15] && n10.push(th[e15]);
  return n10;
}, tg = { _rtl: "[dir=rtl] &, &[dir=rtl]", _ltr: "[dir=ltr] &, &[dir=ltr]", _dark: "&[data-theme=dark]", _light: "&[data-theme=light]" };
var tb = ((E = tb || {}).var = "var", E.mixin = "mixin", E);
class tv {
  static create(e14, t10) {
    let { value: r10, on: n10, transform: a2 } = t10;
    return { type: e14, value: r10, on: n10, transform: a2, __Tokens: void 0, __ValueType: void 0, __CSSTokens: void 0 };
  }
  static color(e14) {
    return tv.create("var", { value: e14, on: tm(tp.color, tp.bgColor, tp.outlineColor, tp.borderColor, tp.accentColor, tp.fill, tp.stroke), transform: (e15, t10) => v(e15) ? { default: `var(${t10(e15)})`, rgb: `var(${t10(`${e15}/rgb`)})` } : { default: `rgb(${e15[0]}, ${e15[1]}, ${e15[2]})`, rgb: `${e15[0]} ${e15[1]} ${e15[2]}` }, fallback: "" });
  }
  static space(e14) {
    return tv.create("var", { value: e14, on: tm(tp.gap, tp.rowGap, tp.columnGap, tp.top, tp.right, tp.bottom, tp.left, tp.m, tp.ms, tp.me, tp.mt, tp.mr, tp.mb, tp.ml, tp.mx, tp.my, tp.p, tp.ps, tp.pe, tp.pt, tp.pr, tp.pb, tp.pl, tp.px, tp.py) });
  }
  static boxSize(e14) {
    return tv.create("var", { value: e14, on: tm(tp.w, tp.minW, tp.maxW, tp.h, tp.minH, tp.maxH, tp.boxSize), fallback: 0 });
  }
  static fontSize(e14) {
    return tv.create("var", { value: e14, on: tm(tp.fontSize), fallback: 0 });
  }
  static lineHeight(e14) {
    return tv.create("var", { value: e14, on: tm(tp.lineHeight), fallback: 0 });
  }
  static rounded(e14) {
    return tv.create("var", { value: e14, fallback: 0, on: tm(tp.rounded, tp.roundedTop, tp.roundedBottom, tp.roundedLeft, tp.roundedRight, tu.borderTopLeftRadius, tu.borderTopRightRadius, tu.borderBottomLeftRadius, tu.borderBottomRightRadius, tu.borderTopRightRadius, tu.borderBottomRightRadius, tu.borderTopLeftRadius, tu.borderBottomLeftRadius) });
  }
  static transitionTimingFunction(e14) {
    return tv.create("var", { value: e14, on: tm(tp.transitionTimingFunction) });
  }
  static transitionDuration(e14) {
    return tv.create("var", { value: e14, on: tm(tp.transitionDuration), transform: (e15) => `${e15}ms` });
  }
  static font(e14) {
    return tv.create("var", { value: e14, on: tm(tp.font) });
  }
  static fontWeight(e14) {
    return tv.create("var", { value: e14, on: tm(tp.fontWeight) });
  }
  static letterSpacing(e14) {
    return tv.create("var", { value: e14, on: tm(tp.letterSpacing) });
  }
  static shadow(e14) {
    return tv.create("var", { value: e14, on: tm(tp.shadow) });
  }
  static customMixin(e14, t10) {
    return tv.create("mixin", { value: t10, on: [e14] });
  }
  static mixin(e14) {
    return { ...e14, __mixin: true };
  }
}
let ty = class e10 {
  get tokens() {
    return k(this._values);
  }
  get(t10, r10, n10) {
    let a2 = this._values[t10];
    if (M(a2)) {
      var i2;
      return n10 ? a2[r10] : null !== (i2 = a2[r10]) && void 0 !== i2 ? i2 : a2[e10.defaultMode];
    }
    return n10 ? r10 === e10.defaultMode ? a2 : void 0 : a2;
  }
  use(e14) {
    let t10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (this._cssVarRefs[e14])
      return t10 ? `${this._cssVarRefs[e14]}` : `var(${this._cssVarRefs[e14]})`;
  }
  constructor(t10, { cssVar: r10, transformFallback: n10 }) {
    this.__Tokens = void 0, this._values = {}, this._cssVarRefs = {}, e10.walkValues(t10.value, (e14, a2) => {
      let i2 = a2.join("."), o2 = (e15, a3) => {
        let i3 = t10.transform ? t10.transform(e15, r10) : n10(e15);
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
ty.defaultMode = "_default", ty.walkValues = function(e14, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let n10 in e14) {
    let a2 = e14[n10];
    if (y(a2)) {
      if (x(a2, "_default")) {
        t10(a2, [...r10, n10]);
        continue;
      }
      ty.walkValues(a2, t10, [...r10, n10]);
      continue;
    }
    t10(a2, [...r10, n10]);
  }
};
let tx = class e11 {
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
tx.walkValue = function(e14, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let n10 in e14) {
    let a2 = e14[n10];
    if (y(a2)) {
      if (x(a2, "__mixin")) {
        t10(a2, [...r10, n10]);
        continue;
      }
      tx.walkValue(a2, t10, [...r10, n10]);
      continue;
    }
    t10(a2, [...r10, n10]);
  }
};
let tw = (e14) => (t10) => `rgba(var(${t10}--rgb) / ${e14})`, tk = (e14) => P(e14) && x(e14, "token");
function tM(e14, t10) {
  return Object.assign((e15) => t10(e15), { toString: () => e14, token: e14 });
}
var tC = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, tP = /[A-Z]|^ms/g, t_ = /_EMO_([^_]+?)_([^]*?)_EMO_/g, tS = function(e14) {
  return 45 === e14.charCodeAt(1);
}, tO = function(e14) {
  return null != e14 && "boolean" != typeof e14;
}, tD = (V = /* @__PURE__ */ Object.create(null), function(e14) {
  return void 0 === V[e14] && (V[e14] = tS(e14) ? e14 : e14.replace(tP, "-$&").toLowerCase()), V[e14];
}), tT = function(e14, t10) {
  switch (e14) {
    case "animation":
    case "animationName":
      if ("string" == typeof t10)
        return t10.replace(t_, function(e15, t11, r10) {
          return G = { name: t11, styles: r10, next: G }, t11;
        });
  }
  return 1 === tC[e14] || tS(e14) || "number" != typeof t10 || 0 === t10 ? t10 : t10 + "px";
};
function tR(e14, t10, r10) {
  if (null == r10)
    return "";
  if (void 0 !== r10.__emotion_styles)
    return r10;
  switch (typeof r10) {
    case "boolean":
      return "";
    case "object":
      if (1 === r10.anim)
        return G = { name: r10.name, styles: r10.styles, next: G }, r10.name;
      if (void 0 !== r10.styles) {
        var n10 = r10.next;
        if (void 0 !== n10)
          for (; void 0 !== n10; )
            G = { name: n10.name, styles: n10.styles, next: G }, n10 = n10.next;
        return r10.styles + ";";
      }
      return function(e15, t11, r11) {
        var n11 = "";
        if (Array.isArray(r11))
          for (var a3 = 0; a3 < r11.length; a3++)
            n11 += tR(e15, t11, r11[a3]) + ";";
        else
          for (var i3 in r11) {
            var o3 = r11[i3];
            if ("object" != typeof o3)
              null != t11 && void 0 !== t11[o3] ? n11 += i3 + "{" + t11[o3] + "}" : tO(o3) && (n11 += tD(i3) + ":" + tT(i3, o3) + ";");
            else if (Array.isArray(o3) && "string" == typeof o3[0] && (null == t11 || void 0 === t11[o3[0]]))
              for (var s2 = 0; s2 < o3.length; s2++)
                tO(o3[s2]) && (n11 += tD(i3) + ":" + tT(i3, o3[s2]) + ";");
            else {
              var l2 = tR(e15, t11, o3);
              switch (i3) {
                case "animation":
                case "animationName":
                  n11 += tD(i3) + ":" + l2 + ";";
                  break;
                default:
                  n11 += i3 + "{" + l2 + "}";
              }
            }
          }
        return n11;
      }(e14, t10, r10);
    case "function":
      if (void 0 !== e14) {
        var a2 = G, i2 = r10(e14);
        return G = a2, tR(e14, t10, i2);
      }
  }
  if (null == t10)
    return r10;
  var o2 = t10[r10];
  return void 0 !== o2 ? o2 : r10;
}
var t$ = /label:\s*([^\s;\n{]+)\s*(;|$)/g, tA = function(e14, t10, r10) {
  if (1 === e14.length && "object" == typeof e14[0] && null !== e14[0] && void 0 !== e14[0].styles)
    return e14[0];
  var n10, a2 = true, i2 = "";
  G = void 0;
  var o2 = e14[0];
  null == o2 || void 0 === o2.raw ? (a2 = false, i2 += tR(r10, t10, o2)) : i2 += o2[0];
  for (var s2 = 1; s2 < e14.length; s2++)
    i2 += tR(r10, t10, e14[s2]), a2 && (i2 += o2[s2]);
  t$.lastIndex = 0;
  for (var l2 = ""; null !== (n10 = t$.exec(i2)); )
    l2 += "-" + n10[1];
  return { name: function(e15) {
    for (var t11, r11 = 0, n11 = 0, a3 = e15.length; a3 >= 4; ++n11, a3 -= 4)
      t11 = (65535 & (t11 = 255 & e15.charCodeAt(n11) | (255 & e15.charCodeAt(++n11)) << 8 | (255 & e15.charCodeAt(++n11)) << 16 | (255 & e15.charCodeAt(++n11)) << 24)) * 1540483477 + ((t11 >>> 16) * 59797 << 16), t11 ^= t11 >>> 24, r11 = (65535 & t11) * 1540483477 + ((t11 >>> 16) * 59797 << 16) ^ (65535 & r11) * 1540483477 + ((r11 >>> 16) * 59797 << 16);
    switch (a3) {
      case 3:
        r11 ^= (255 & e15.charCodeAt(n11 + 2)) << 16;
      case 2:
        r11 ^= (255 & e15.charCodeAt(n11 + 1)) << 8;
      case 1:
        r11 ^= 255 & e15.charCodeAt(n11), r11 = (65535 & r11) * 1540483477 + ((r11 >>> 16) * 59797 << 16);
    }
    return r11 ^= r11 >>> 13, (((r11 = (65535 & r11) * 1540483477 + ((r11 >>> 16) * 59797 << 16)) ^ r11 >>> 15) >>> 0).toString(36);
  }(i2) + l2, styles: i2, next: G };
};
let tI = class e12 {
  processAll(t10) {
    let r10 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], n10 = [], { state: a2, extends: i2, ...o2 } = t10;
    if (i2)
      for (let e14 of i2)
        n10.push(...this.processAll(e14, r10));
    if (a2) {
      let t11 = {}, r11 = {};
      e12.walkStateValues(a2, (e14, n11, a3) => {
        let i3 = `--${this.opt.varPrefix}-state-${n11.join("-")}`, o3 = _(n11), s2 = {};
        this.process(s2, o3, e14, false), t11[i3] = s2[o3], w(r11, [...a3, o3], `var(${i3})`);
      }), n10.push(t11), n10.push(...this.processAll(r11));
    }
    if (!S(o2)) {
      let e14 = {};
      this.processTo(e14, o2, r10), n10.push(e14);
    }
    return n10;
  }
  processTo(e14, t10) {
    let r10 = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    for (let n10 in t10)
      this.process(e14, n10, t10[n10], r10);
  }
  process(t10, r10, n10) {
    var a2, i2, o2, s2;
    let l2 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (this.opt.mixins[r10]) {
      let e14 = null === (a2 = this.opt.mixins[r10]) || void 0 === a2 ? void 0 : a2.get(n10);
      if (e14)
        for (let r11 in e14)
          this.process(t10, r11, e14[r11], l2);
      return;
    }
    if (y(n10)) {
      t10[r10 = null !== (i2 = e12.convertSelector(r10)) && void 0 !== i2 ? i2 : r10] = null !== (o2 = t10[r10]) && void 0 !== o2 ? o2 : {}, this.processTo(t10[r10], n10);
      return;
    }
    if (l2 && td[r10 = null !== (s2 = th[r10]) && void 0 !== s2 ? s2 : r10]) {
      for (let e14 of td[r10])
        t10[e14] = this.opt.processValue(e14, n10);
      return;
    }
    t10[r10] = this.opt.processValue(r10, n10);
  }
  constructor(e14) {
    this.opt = e14;
  }
};
tI.supportedPseudoClasses = { active: "active", after: "after", anyLink: "any-link", before: "before", blank: "blank", checked: "checked", current: "current", default: "default", defined: "defined", disabled: "disabled", empty: "empty", enabled: "enabled", first: "first", firstChild: "first-child", firstLetter: "first-letter", firstLine: "first-line", firstOfType: "first-of-type", focus: "focus", focusVisible: "focus-visible", focusWithin: "focus-within", fullscreen: "fullscreen", future: "future", hover: "hover", inRange: "in-range", indeterminate: "indeterminate", invalid: "invalid", lastChild: "last-child", lastOfType: "last-of-type", left: "left", link: "link", localLink: "local-link", nthCol: "nth-col", nthLastCol: "nth-last-col", onlyChild: "only-child", onlyOfType: "only-of-type", optional: "optional", outOfRange: "out-of-range", past: "past", paused: "paused", pictureInPicture: "picture-in-picture", placeholderShown: "placeholder-shown", playing: "playing", readOnly: "read-only", readWrite: "read-write", required: "required", right: "right", root: "root", scope: "scope", target: "target", targetWithin: "target-within", userInvalid: "user-invalid", userValid: "user-valid", valid: "valid", visited: "visited" }, tI.convertSelector = (e14) => {
  if (tg[e14])
    return tg[e14];
  if (e14.startsWith("$") || e14.endsWith("$") || e14.startsWith("_")) {
    let t10 = "", r10 = "";
    if (e14.startsWith("_") ? (t10 = "&", e14 = e14.slice(1)) : e14.startsWith("$") ? (t10 = "& ", e14 = e14.slice(1)) : (r10 = " &", e14 = e14.slice(0, e14.length - 1)), e14.startsWith("data") || e14.startsWith("aria")) {
      let [n10, a2] = e14.split("__");
      return a2 ? `${t10}[${O(n10)}='${O(a2)}']${r10}` : `${t10}[${O(n10)}]${r10}`;
    }
    if ("&" == t10) {
      if (e14.startsWith("$"))
        return `${t10}::${e14.slice(1)}`;
      if (tI.supportedPseudoClasses[e14]) {
        let r12 = tI.supportedPseudoClasses[e14];
        return `${t10}:${r12}, ${t10}[data-${r12}]:not([data-${r12}='false']), ${t10}.${r12}`;
      }
      let [r11, n10] = e14.split("__"), a2 = O(r11);
      return n10 ? `${t10}[data-${a2}='${O(n10)}']` : `${t10}[data-${a2}]:not([data-${a2}='false'])`;
    }
  }
}, tI.walkStateValues = function(e14, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { default: {}, selectorPath: [], path: [] }, { $: n10, ...a2 } = e14;
  for (let e15 in a2) {
    var i2;
    let o2 = a2[e15], s2 = null !== (i2 = a2.default) && void 0 !== i2 ? i2 : r10.default, l2 = null != n10 ? n10 : D(s2, [...r10.path.slice(1), "$"]), c2 = l2 ? [...r10.selectorPath, l2] : r10.selectorPath, u2 = [...r10.path, e15];
    if (y(o2)) {
      tI.walkStateValues(o2, t10, { path: u2, selectorPath: c2, default: s2 });
      continue;
    }
    t10(o2, u2, c2);
  }
};
let tL = (e14) => e14.reduce((e15, t10) => ({ ...e15, [t10]: true }), {}), tF = class e13 {
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
    let n10 = null != t10 ? t10 : {};
    return n10.__emotion_styles = null !== (r10 = n10.__emotion_styles) && void 0 !== r10 ? r10 : tA(this.unstable_sx(t10), null == e14 ? void 0 : e14.registered, {}), n10.__emotion_styles;
  }
  toFigmaTokens() {
    let e14 = { space: { dp: { type: "sizing", value: 1 } } }, t10 = {}, r10 = {}, n10 = (e15, t11, r11) => {
      let n11 = e15;
      for (let e16 = 0; e16 < t11.length; e16++) {
        var a3;
        if (e16 == t11.length - 1) {
          n11[t11[e16]] = r11;
          continue;
        }
        n11[t11[e16]] = null !== (a3 = n11[t11[e16]]) && void 0 !== a3 ? a3 : {}, n11 = n11[t11[e16]];
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
            n10(t10, [i2, ...l2.split(".")], a2(s3, e15)), e15 != c2 && n10(r10, [i2, ...l2.split(".")], a2(s3, c2));
          } else
            n10(e14, [i2, ...l2.split(".")], a2(s3, o2.get(l2, "_default")));
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
        n10(t10, [e15, ...o2.split(".")], a2(i3, s2));
      });
      "textStyle" === e15 && i2("typography");
    }
    return { seed: e14, base: t10, dark: r10 };
  }
  constructor(t10, r10 = {}) {
    var n10, a2;
    for (let i2 in this.theme = t10, this.cssVars = {}, this.tokens = {}, this.propValues = {}, this.mixins = {}, this.dp = (e14) => 0 === e14 ? 0 : `calc(${e14} * var(${this.cssVar("space", "dp")}))`, this.transformFallback = (t11, r11) => e13.propsCanBaseDp[t11] && T(r11) ? e13.propsCanPercent[t11] && 1 > Math.abs(r11) ? `${100 * r11}%` : this.dp(r11) : r11, this.token = new Proxy({}, { get: (e14, t11) => {
      var r11, n11;
      return this.tokens[t11] ? Object.assign((e15) => {
        var r12;
        return null === (r12 = this.tokens[t11]) || void 0 === r12 ? void 0 : r12.get(e15, `_${this.mode}`);
      }, { tokens: null === (r11 = this.tokens[t11]) || void 0 === r11 ? void 0 : r11.tokens }) : this.mixins[t11] ? Object.assign((e15) => {
        var r12;
        return null === (r12 = this.mixins[t11]) || void 0 === r12 ? void 0 : r12.get(e15);
      }, { tokens: null === (n11 = this.mixins[t11]) || void 0 === n11 ? void 0 : n11.tokens }) : void 0;
    } }), this.processValue = (e14, t11) => {
      var r11, n11, a3;
      if (tk(t11)) {
        let r12 = null === (n11 = this.propValues[e14]) || void 0 === n11 ? void 0 : n11.use(t11.token, true);
        return r12 ? t11(r12) : void 0;
      }
      return null !== (a3 = null === (r11 = this.propValues[e14]) || void 0 === r11 ? void 0 : r11.use(t11)) && void 0 !== a3 ? a3 : this.transformFallback(e14, t11);
    }, this.unstable_sx = (e14) => new tI({ mixins: this.mixins, varPrefix: this.varPrefix, processValue: this.processValue }).processAll(e14), this.varPrefix = null !== (n10 = r10.varPrefix) && void 0 !== n10 ? n10 : "vk", this.mode = null !== (a2 = r10.mode) && void 0 !== a2 ? a2 : "light", w(this.cssVars, [this.cssVar("space", "dp")], "0.1rem"), t10) {
      let e14 = t10[i2];
      if (e14.type == tb.var) {
        let t11 = new ty(e14, { cssVar: (e15) => this.cssVar(i2, e15), transformFallback: (t12) => this.transformFallback(e14.on[0], t12) });
        for (let r11 of (this.tokens[i2] = t11, e14.on))
          this.propValues[r11] = t11;
        for (let e15 of t11.tokens)
          for (let r11 of ["light", "dark"]) {
            let n11 = r11 === this.mode ? "_default" : `_${r11}`, a3 = t11.get(e15, n11, true);
            R(a3) || ("_default" === n11 ? w(this.cssVars, [this.cssVar(i2, e15)], a3) : w(this.cssVars, [n11, this.cssVar(i2, e15)], a3));
          }
        continue;
      }
      if (e14.type == tb.mixin) {
        let t11 = new tx(e14);
        for (let r11 of e14.on)
          this.mixins[r11] = t11;
      }
    }
  }
};
tF.propsCanPercent = tL([...tv.boxSize({}).on]), tF.propsCanBaseDp = tL([...tv.boxSize({}).on, ...tv.space({}).on, ...tv.fontSize({}).on, ...tv.letterSpacing({}).on, ...tv.lineHeight({}).on, ...tv.rounded({}).on]);
let tB = tF, tj = { shadow: tv.shadow({ 0: { _default: "0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0)", _dark: "0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0)" }, 1: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)", _dark: "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 2: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)", _dark: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 3: { _default: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)" }, 4: { _default: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)" }, 5: { _default: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)", _dark: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)" } }), elevation: tv.customMixin("elevation", { 0: tv.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "0", _hover: { shadow: "1" } }), 1: tv.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "1", _hover: { shadow: "2" } }), 2: tv.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "2", _hover: { shadow: "3" } }), 3: tv.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "3", _hover: { shadow: "4" } }), 4: tv.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "4", _hover: { shadow: "5" } }) }) }, tE = { font: tv.font({ brand: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', plain: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', code: "'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace" }), fontWeight: tv.fontWeight({ regular: 400, medium: 500, bold: 700 }), textStyle: tv.customMixin("textStyle", { sys: { "display-large": tv.mixin({ lineHeight: 64, fontSize: 57, letterSpacing: -0.25, fontWeight: "regular", font: "brand" }), "display-medium": tv.mixin({ lineHeight: 52, fontSize: 45, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "display-small": tv.mixin({ lineHeight: 44, fontSize: 36, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-large": tv.mixin({ lineHeight: 40, fontSize: 32, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-medium": tv.mixin({ lineHeight: 36, fontSize: 28, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-small": tv.mixin({ lineHeight: 32, fontSize: 24, letterSpacing: 0, fontWeight: "regular", font: "plain" }), "title-large": tv.mixin({ lineHeight: 28, fontSize: 22, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "title-medium": tv.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.15, fontWeight: "medium", font: "plain" }), "title-small": tv.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-large": tv.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-medium": tv.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "label-small": tv.mixin({ lineHeight: 16, fontSize: 11, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "body-large": tv.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.5, fontWeight: "regular", font: "plain" }), "body-medium": tv.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.25, fontWeight: "regular", font: "plain" }), "body-small": tv.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.4, fontWeight: "regular", font: "plain" }) } }) };
function tV(e14) {
  return e14 < 0 ? -1 : 0 === e14 ? 0 : 1;
}
function tH(e14, t10, r10) {
  return r10 < e14 ? e14 : r10 > t10 ? t10 : r10;
}
function tz(e14, t10) {
  let r10 = e14[0] * t10[0][0] + e14[1] * t10[0][1] + e14[2] * t10[0][2], n10 = e14[0] * t10[1][0] + e14[1] * t10[1][1] + e14[2] * t10[1][2], a2 = e14[0] * t10[2][0] + e14[1] * t10[2][1] + e14[2] * t10[2][2];
  return [r10, n10, a2];
}
let tW = [[0.41233895, 0.35762064, 0.18051042], [0.2126, 0.7152, 0.0722], [0.01932141, 0.11916382, 0.95034478]], tN = [[3.2413774792388685, -1.5376652402851851, -0.49885366846268053], [-0.9691452513005321, 1.8758853451067872, 0.04156585616912061], [0.05562093689691305, -0.20395524564742123, 1.0571799111220335]], tq = [95.047, 100, 108.883];
function tU(e14, t10, r10) {
  return (-16777216 | (255 & e14) << 16 | (255 & t10) << 8 | 255 & r10) >>> 0;
}
function tG(e14) {
  let t10 = tZ(e14[0]), r10 = tZ(e14[1]), n10 = tZ(e14[2]);
  return tU(t10, r10, n10);
}
function tY(e14) {
  let t10 = function(e15) {
    let t11 = tJ(e15 >> 16 & 255), r10 = tJ(e15 >> 8 & 255), n10 = tJ(255 & e15);
    return tz([t11, r10, n10], tW);
  }(e14)[1];
  return 116 * tQ(t10 / 100) - 16;
}
function tX(e14) {
  return 100 * function(e15) {
    let t10 = e15 * e15 * e15;
    return t10 > 216 / 24389 ? t10 : (116 * e15 - 16) / (24389 / 27);
  }((e14 + 16) / 116);
}
function tK(e14) {
  return 116 * tQ(e14 / 100) - 16;
}
function tJ(e14) {
  let t10 = e14 / 255;
  return t10 <= 0.040449936 ? t10 / 12.92 * 100 : 100 * Math.pow((t10 + 0.055) / 1.055, 2.4);
}
function tZ(e14) {
  var t10;
  let r10 = e14 / 100;
  return (t10 = Math.round(255 * (r10 <= 31308e-7 ? 12.92 * r10 : 1.055 * Math.pow(r10, 1 / 2.4) - 0.055))) < 0 ? 0 : t10 > 255 ? 255 : t10;
}
function tQ(e14) {
  return e14 > 216 / 24389 ? Math.pow(e14, 1 / 3) : (24389 / 27 * e14 + 16) / 116;
}
class t0 {
  static make() {
    var e14, t10;
    let r10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tq, n10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200 / Math.PI * tX(50) / 100, a2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50, i2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2, o2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], s2 = 0.401288 * r10[0] + 0.650173 * r10[1] + -0.051461 * r10[2], l2 = -0.250268 * r10[0] + 1.204414 * r10[1] + 0.045854 * r10[2], c2 = -2079e-6 * r10[0] + 0.048952 * r10[1] + 0.953127 * r10[2], u2 = 0.8 + i2 / 10, d2 = u2 >= 0.9 ? (1 - (e14 = (u2 - 0.9) * 10)) * 0.59 + 0.69 * e14 : (1 - (t10 = (u2 - 0.8) * 10)) * 0.525 + 0.59 * t10, f2 = o2 ? 1 : u2 * (1 - 1 / 3.6 * Math.exp((-n10 - 42) / 92));
    f2 = f2 > 1 ? 1 : f2 < 0 ? 0 : f2;
    let h2 = [f2 * (100 / s2) + 1 - f2, f2 * (100 / l2) + 1 - f2, f2 * (100 / c2) + 1 - f2], p2 = 1 / (5 * n10 + 1), m2 = p2 * p2 * p2 * p2, g2 = 1 - m2, b2 = m2 * n10 + 0.1 * g2 * g2 * Math.cbrt(5 * n10), v2 = tX(a2) / r10[1], y2 = 1.48 + Math.sqrt(v2), x2 = 0.725 / Math.pow(v2, 0.2), w2 = [Math.pow(b2 * h2[0] * s2 / 100, 0.42), Math.pow(b2 * h2[1] * l2 / 100, 0.42), Math.pow(b2 * h2[2] * c2 / 100, 0.42)], k2 = [400 * w2[0] / (w2[0] + 27.13), 400 * w2[1] / (w2[1] + 27.13), 400 * w2[2] / (w2[2] + 27.13)], M2 = (2 * k2[0] + k2[1] + 0.05 * k2[2]) * x2;
    return new t0(v2, M2, x2, x2, d2, u2, h2, b2, Math.pow(b2, 0.25), y2);
  }
  constructor(e14, t10, r10, n10, a2, i2, o2, s2, l2, c2) {
    this.n = e14, this.aw = t10, this.nbb = r10, this.ncb = n10, this.c = a2, this.nc = i2, this.rgbD = o2, this.fl = s2, this.fLRoot = l2, this.z = c2;
  }
}
t0.DEFAULT = t0.make();
class t1 {
  distance(e14) {
    let t10 = this.jstar - e14.jstar, r10 = this.astar - e14.astar, n10 = this.bstar - e14.bstar;
    return 1.41 * Math.pow(Math.sqrt(t10 * t10 + r10 * r10 + n10 * n10), 0.63);
  }
  static fromInt(e14) {
    return t1.fromIntInViewingConditions(e14, t0.DEFAULT);
  }
  static fromIntInViewingConditions(e14, t10) {
    let r10 = tJ((16711680 & e14) >> 16), n10 = tJ((65280 & e14) >> 8), a2 = tJ(255 & e14), i2 = 0.41233895 * r10 + 0.35762064 * n10 + 0.18051042 * a2, o2 = 0.2126 * r10 + 0.7152 * n10 + 0.0722 * a2, s2 = 0.01932141 * r10 + 0.11916382 * n10 + 0.95034478 * a2, l2 = t10.rgbD[0] * (0.401288 * i2 + 0.650173 * o2 - 0.051461 * s2), c2 = t10.rgbD[1] * (-0.250268 * i2 + 1.204414 * o2 + 0.045854 * s2), u2 = t10.rgbD[2] * (-2079e-6 * i2 + 0.048952 * o2 + 0.953127 * s2), d2 = Math.pow(t10.fl * Math.abs(l2) / 100, 0.42), f2 = Math.pow(t10.fl * Math.abs(c2) / 100, 0.42), h2 = Math.pow(t10.fl * Math.abs(u2) / 100, 0.42), p2 = 400 * tV(l2) * d2 / (d2 + 27.13), m2 = 400 * tV(c2) * f2 / (f2 + 27.13), g2 = 400 * tV(u2) * h2 / (h2 + 27.13), b2 = (11 * p2 + -12 * m2 + g2) / 11, v2 = (p2 + m2 - 2 * g2) / 9, y2 = 180 * Math.atan2(v2, b2) / Math.PI, x2 = y2 < 0 ? y2 + 360 : y2 >= 360 ? y2 - 360 : y2, w2 = x2 * Math.PI / 180, k2 = (40 * p2 + 20 * m2 + g2) / 20 * t10.nbb, M2 = 100 * Math.pow(k2 / t10.aw, t10.c * t10.z), C2 = 4 / t10.c * Math.sqrt(M2 / 100) * (t10.aw + 4) * t10.fLRoot, P2 = x2 < 20.14 ? x2 + 360 : x2, _2 = 5e4 / 13 * (0.25 * (Math.cos(P2 * Math.PI / 180 + 2) + 3.8)) * t10.nc * t10.ncb, S2 = Math.pow(_2 * Math.sqrt(b2 * b2 + v2 * v2) / ((20 * p2 + 20 * m2 + 21 * g2) / 20 + 0.305), 0.9) * Math.pow(1.64 - Math.pow(0.29, t10.n), 0.73), O2 = S2 * Math.sqrt(M2 / 100), D2 = O2 * t10.fLRoot, T2 = 50 * Math.sqrt(S2 * t10.c / (t10.aw + 4)), R2 = (1 + 100 * 7e-3) * M2 / (1 + 7e-3 * M2), $2 = 1 / 0.0228 * Math.log(1 + 0.0228 * D2), A2 = $2 * Math.cos(w2), I2 = $2 * Math.sin(w2);
    return new t1(x2, O2, M2, C2, D2, T2, R2, A2, I2);
  }
  static fromJch(e14, t10, r10) {
    return t1.fromJchInViewingConditions(e14, t10, r10, t0.DEFAULT);
  }
  static fromJchInViewingConditions(e14, t10, r10, n10) {
    let a2 = 4 / n10.c * Math.sqrt(e14 / 100) * (n10.aw + 4) * n10.fLRoot, i2 = t10 * n10.fLRoot, o2 = t10 / Math.sqrt(e14 / 100), s2 = 50 * Math.sqrt(o2 * n10.c / (n10.aw + 4)), l2 = r10 * Math.PI / 180, c2 = (1 + 100 * 7e-3) * e14 / (1 + 7e-3 * e14), u2 = 1 / 0.0228 * Math.log(1 + 0.0228 * i2), d2 = u2 * Math.cos(l2), f2 = u2 * Math.sin(l2);
    return new t1(r10, t10, e14, a2, i2, s2, c2, d2, f2);
  }
  static fromUcs(e14, t10, r10) {
    return t1.fromUcsInViewingConditions(e14, t10, r10, t0.DEFAULT);
  }
  static fromUcsInViewingConditions(e14, t10, r10, n10) {
    let a2 = Math.sqrt(t10 * t10 + r10 * r10), i2 = (Math.exp(0.0228 * a2) - 1) / 0.0228 / n10.fLRoot, o2 = Math.atan2(r10, t10) * (180 / Math.PI);
    return o2 < 0 && (o2 += 360), t1.fromJchInViewingConditions(e14 / (1 - (e14 - 100) * 7e-3), i2, o2, n10);
  }
  toInt() {
    return this.viewed(t0.DEFAULT);
  }
  viewed(e14) {
    let t10 = 0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100), r10 = Math.pow(t10 / Math.pow(1.64 - Math.pow(0.29, e14.n), 0.73), 1 / 0.9), n10 = this.hue * Math.PI / 180, a2 = e14.aw * Math.pow(this.j / 100, 1 / e14.c / e14.z), i2 = 0.25 * (Math.cos(n10 + 2) + 3.8) * (5e4 / 13) * e14.nc * e14.ncb, o2 = a2 / e14.nbb, s2 = Math.sin(n10), l2 = Math.cos(n10), c2 = 23 * (o2 + 0.305) * r10 / (23 * i2 + 11 * r10 * l2 + 108 * r10 * s2), u2 = c2 * l2, d2 = c2 * s2, f2 = (460 * o2 + 451 * u2 + 288 * d2) / 1403, h2 = (460 * o2 - 891 * u2 - 261 * d2) / 1403, p2 = (460 * o2 - 220 * u2 - 6300 * d2) / 1403, m2 = Math.max(0, 27.13 * Math.abs(f2) / (400 - Math.abs(f2))), g2 = tV(f2) * (100 / e14.fl) * Math.pow(m2, 1 / 0.42), b2 = Math.max(0, 27.13 * Math.abs(h2) / (400 - Math.abs(h2))), v2 = tV(h2) * (100 / e14.fl) * Math.pow(b2, 1 / 0.42), y2 = Math.max(0, 27.13 * Math.abs(p2) / (400 - Math.abs(p2))), x2 = tV(p2) * (100 / e14.fl) * Math.pow(y2, 1 / 0.42), w2 = g2 / e14.rgbD[0], k2 = v2 / e14.rgbD[1], M2 = x2 / e14.rgbD[2], C2 = function(e15, t11, r11) {
      let n11 = tN[0][0] * e15 + tN[0][1] * t11 + tN[0][2] * r11, a3 = tN[1][0] * e15 + tN[1][1] * t11 + tN[1][2] * r11, i3 = tN[2][0] * e15 + tN[2][1] * t11 + tN[2][2] * r11, o3 = tZ(n11), s3 = tZ(a3), l3 = tZ(i3);
      return tU(o3, s3, l3);
    }(1.86206786 * w2 - 1.01125463 * k2 + 0.14918677 * M2, 0.38752654 * w2 + 0.62144744 * k2 - 897398e-8 * M2, -0.0158415 * w2 - 0.03412294 * k2 + 1.04996444 * M2);
    return C2;
  }
  static fromXyzInViewingConditions(e14, t10, r10, n10) {
    let a2 = n10.rgbD[0] * (0.401288 * e14 + 0.650173 * t10 - 0.051461 * r10), i2 = n10.rgbD[1] * (-0.250268 * e14 + 1.204414 * t10 + 0.045854 * r10), o2 = n10.rgbD[2] * (-2079e-6 * e14 + 0.048952 * t10 + 0.953127 * r10), s2 = Math.pow(n10.fl * Math.abs(a2) / 100, 0.42), l2 = Math.pow(n10.fl * Math.abs(i2) / 100, 0.42), c2 = Math.pow(n10.fl * Math.abs(o2) / 100, 0.42), u2 = 400 * tV(a2) * s2 / (s2 + 27.13), d2 = 400 * tV(i2) * l2 / (l2 + 27.13), f2 = 400 * tV(o2) * c2 / (c2 + 27.13), h2 = (11 * u2 + -12 * d2 + f2) / 11, p2 = (u2 + d2 - 2 * f2) / 9, m2 = 180 * Math.atan2(p2, h2) / Math.PI, g2 = m2 < 0 ? m2 + 360 : m2 >= 360 ? m2 - 360 : m2, b2 = g2 * Math.PI / 180, v2 = (40 * u2 + 20 * d2 + f2) / 20 * n10.nbb, y2 = 100 * Math.pow(v2 / n10.aw, n10.c * n10.z), x2 = 4 / n10.c * Math.sqrt(y2 / 100) * (n10.aw + 4) * n10.fLRoot, w2 = g2 < 20.14 ? g2 + 360 : g2, k2 = 5e4 / 13 * (0.25 * (Math.cos(w2 * Math.PI / 180 + 2) + 3.8)) * n10.nc * n10.ncb, M2 = Math.pow(k2 * Math.sqrt(h2 * h2 + p2 * p2) / ((20 * u2 + 20 * d2 + 21 * f2) / 20 + 0.305), 0.9) * Math.pow(1.64 - Math.pow(0.29, n10.n), 0.73), C2 = M2 * Math.sqrt(y2 / 100), P2 = C2 * n10.fLRoot, _2 = 50 * Math.sqrt(M2 * n10.c / (n10.aw + 4)), S2 = (1 + 100 * 7e-3) * y2 / (1 + 7e-3 * y2), O2 = Math.log(1 + 0.0228 * P2) / 0.0228, D2 = O2 * Math.cos(b2), T2 = O2 * Math.sin(b2);
    return new t1(g2, C2, y2, x2, P2, _2, S2, D2, T2);
  }
  xyzInViewingConditions(e14) {
    let t10 = 0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100), r10 = Math.pow(t10 / Math.pow(1.64 - Math.pow(0.29, e14.n), 0.73), 1 / 0.9), n10 = this.hue * Math.PI / 180, a2 = e14.aw * Math.pow(this.j / 100, 1 / e14.c / e14.z), i2 = 0.25 * (Math.cos(n10 + 2) + 3.8) * (5e4 / 13) * e14.nc * e14.ncb, o2 = a2 / e14.nbb, s2 = Math.sin(n10), l2 = Math.cos(n10), c2 = 23 * (o2 + 0.305) * r10 / (23 * i2 + 11 * r10 * l2 + 108 * r10 * s2), u2 = c2 * l2, d2 = c2 * s2, f2 = (460 * o2 + 451 * u2 + 288 * d2) / 1403, h2 = (460 * o2 - 891 * u2 - 261 * d2) / 1403, p2 = (460 * o2 - 220 * u2 - 6300 * d2) / 1403, m2 = Math.max(0, 27.13 * Math.abs(f2) / (400 - Math.abs(f2))), g2 = tV(f2) * (100 / e14.fl) * Math.pow(m2, 1 / 0.42), b2 = Math.max(0, 27.13 * Math.abs(h2) / (400 - Math.abs(h2))), v2 = tV(h2) * (100 / e14.fl) * Math.pow(b2, 1 / 0.42), y2 = Math.max(0, 27.13 * Math.abs(p2) / (400 - Math.abs(p2))), x2 = tV(p2) * (100 / e14.fl) * Math.pow(y2, 1 / 0.42), w2 = g2 / e14.rgbD[0], k2 = v2 / e14.rgbD[1], M2 = x2 / e14.rgbD[2];
    return [1.86206786 * w2 - 1.01125463 * k2 + 0.14918677 * M2, 0.38752654 * w2 + 0.62144744 * k2 - 897398e-8 * M2, -0.0158415 * w2 - 0.03412294 * k2 + 1.04996444 * M2];
  }
  constructor(e14, t10, r10, n10, a2, i2, o2, s2, l2) {
    this.hue = e14, this.chroma = t10, this.j = r10, this.q = n10, this.m = a2, this.s = i2, this.jstar = o2, this.astar = s2, this.bstar = l2;
  }
}
class t2 {
  static sanitizeRadians(e14) {
    return (e14 + 8 * Math.PI) % (2 * Math.PI);
  }
  static trueDelinearized(e14) {
    let t10 = e14 / 100;
    return 255 * (t10 <= 31308e-7 ? 12.92 * t10 : 1.055 * Math.pow(t10, 1 / 2.4) - 0.055);
  }
  static chromaticAdaptation(e14) {
    let t10 = Math.pow(Math.abs(e14), 0.42);
    return 400 * tV(e14) * t10 / (t10 + 27.13);
  }
  static hueOf(e14) {
    let t10 = tz(e14, t2.SCALED_DISCOUNT_FROM_LINRGB), r10 = t2.chromaticAdaptation(t10[0]), n10 = t2.chromaticAdaptation(t10[1]), a2 = t2.chromaticAdaptation(t10[2]);
    return Math.atan2((r10 + n10 - 2 * a2) / 9, (11 * r10 + -12 * n10 + a2) / 11);
  }
  static areInCyclicOrder(e14, t10, r10) {
    let n10 = t2.sanitizeRadians(t10 - e14), a2 = t2.sanitizeRadians(r10 - e14);
    return n10 < a2;
  }
  static intercept(e14, t10, r10) {
    return (t10 - e14) / (r10 - e14);
  }
  static lerpPoint(e14, t10, r10) {
    return [e14[0] + (r10[0] - e14[0]) * t10, e14[1] + (r10[1] - e14[1]) * t10, e14[2] + (r10[2] - e14[2]) * t10];
  }
  static setCoordinate(e14, t10, r10, n10) {
    let a2 = t2.intercept(e14[n10], t10, r10[n10]);
    return t2.lerpPoint(e14, a2, r10);
  }
  static isBounded(e14) {
    return 0 <= e14 && e14 <= 100;
  }
  static nthVertex(e14, t10) {
    let r10 = t2.Y_FROM_LINRGB[0], n10 = t2.Y_FROM_LINRGB[1], a2 = t2.Y_FROM_LINRGB[2], i2 = t10 % 4 <= 1 ? 0 : 100, o2 = t10 % 2 == 0 ? 0 : 100;
    if (t10 < 4) {
      let t11 = (e14 - i2 * n10 - o2 * a2) / r10;
      return t2.isBounded(t11) ? [t11, i2, o2] : [-1, -1, -1];
    }
    if (t10 < 8) {
      let t11 = (e14 - o2 * r10 - i2 * a2) / n10;
      return t2.isBounded(t11) ? [o2, t11, i2] : [-1, -1, -1];
    }
    {
      let t11 = (e14 - i2 * r10 - o2 * n10) / a2;
      return t2.isBounded(t11) ? [i2, o2, t11] : [-1, -1, -1];
    }
  }
  static bisectToSegment(e14, t10) {
    let r10 = [-1, -1, -1], n10 = r10, a2 = 0, i2 = 0, o2 = false, s2 = true;
    for (let l2 = 0; l2 < 12; l2++) {
      let c2 = t2.nthVertex(e14, l2);
      if (c2[0] < 0)
        continue;
      let u2 = t2.hueOf(c2);
      if (!o2) {
        r10 = c2, n10 = c2, a2 = u2, i2 = u2, o2 = true;
        continue;
      }
      (s2 || t2.areInCyclicOrder(a2, u2, i2)) && (s2 = false, t2.areInCyclicOrder(a2, t10, u2) ? (n10 = c2, i2 = u2) : (r10 = c2, a2 = u2));
    }
    return [r10, n10];
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
    let r10 = t2.bisectToSegment(e14, t10), n10 = r10[0], a2 = t2.hueOf(n10), i2 = r10[1];
    for (let e15 = 0; e15 < 3; e15++)
      if (n10[e15] !== i2[e15]) {
        let r11 = -1, o2 = 255;
        n10[e15] < i2[e15] ? (r11 = t2.criticalPlaneBelow(t2.trueDelinearized(n10[e15])), o2 = t2.criticalPlaneAbove(t2.trueDelinearized(i2[e15]))) : (r11 = t2.criticalPlaneAbove(t2.trueDelinearized(n10[e15])), o2 = t2.criticalPlaneBelow(t2.trueDelinearized(i2[e15])));
        for (let s2 = 0; s2 < 8 && !(1 >= Math.abs(o2 - r11)); s2++) {
          let s3 = Math.floor((r11 + o2) / 2), l2 = t2.CRITICAL_PLANES[s3], c2 = t2.setCoordinate(n10, l2, i2, e15), u2 = t2.hueOf(c2);
          t2.areInCyclicOrder(a2, t10, u2) ? (i2 = c2, o2 = s3) : (n10 = c2, a2 = u2, r11 = s3);
        }
      }
    return t2.midpoint(n10, i2);
  }
  static inverseChromaticAdaptation(e14) {
    let t10 = Math.abs(e14);
    return tV(e14) * Math.pow(Math.max(0, 27.13 * t10 / (400 - t10)), 1 / 0.42);
  }
  static findResultByJ(e14, t10, r10) {
    let n10 = 11 * Math.sqrt(r10), a2 = t0.DEFAULT, i2 = 1 / Math.pow(1.64 - Math.pow(0.29, a2.n), 0.73), o2 = 0.25 * (Math.cos(e14 + 2) + 3.8) * (5e4 / 13) * a2.nc * a2.ncb, s2 = Math.sin(e14), l2 = Math.cos(e14);
    for (let e15 = 0; e15 < 5; e15++) {
      let c2 = n10 / 100, u2 = 0 === t10 || 0 === n10 ? 0 : t10 / Math.sqrt(c2), d2 = Math.pow(u2 * i2, 1 / 0.9), f2 = a2.aw * Math.pow(c2, 1 / a2.c / a2.z), h2 = f2 / a2.nbb, p2 = 23 * (h2 + 0.305) * d2 / (23 * o2 + 11 * d2 * l2 + 108 * d2 * s2), m2 = p2 * l2, g2 = p2 * s2, b2 = (460 * h2 + 451 * m2 + 288 * g2) / 1403, v2 = (460 * h2 - 891 * m2 - 261 * g2) / 1403, y2 = (460 * h2 - 220 * m2 - 6300 * g2) / 1403, x2 = t2.inverseChromaticAdaptation(b2), w2 = t2.inverseChromaticAdaptation(v2), k2 = t2.inverseChromaticAdaptation(y2), M2 = tz([x2, w2, k2], t2.LINRGB_FROM_SCALED_DISCOUNT);
      if (M2[0] < 0 || M2[1] < 0 || M2[2] < 0)
        break;
      let C2 = t2.Y_FROM_LINRGB[0], P2 = t2.Y_FROM_LINRGB[1], _2 = t2.Y_FROM_LINRGB[2], S2 = C2 * M2[0] + P2 * M2[1] + _2 * M2[2];
      if (S2 <= 0)
        break;
      if (4 === e15 || 2e-3 > Math.abs(S2 - r10)) {
        if (M2[0] > 100.01 || M2[1] > 100.01 || M2[2] > 100.01)
          return 0;
        return tG(M2);
      }
      n10 -= (S2 - r10) * n10 / (2 * S2);
    }
    return 0;
  }
  static solveToInt(e14, t10, r10) {
    var n10;
    if (t10 < 1e-4 || r10 < 1e-4 || r10 > 99.9999)
      return function(e15) {
        let t11 = tX(e15), r11 = tZ(t11);
        return tU(r11, r11, r11);
      }(r10);
    (n10 = e14 % 360) < 0 && (n10 += 360), e14 = n10;
    let a2 = e14 / 180 * Math.PI, i2 = tX(r10), o2 = t2.findResultByJ(a2, t10, i2);
    if (0 !== o2)
      return o2;
    let s2 = t2.bisectToLimit(i2, a2);
    return tG(s2);
  }
  static solveToCam(e14, t10, r10) {
    return t1.fromInt(t2.solveToInt(e14, t10, r10));
  }
}
t2.SCALED_DISCOUNT_FROM_LINRGB = [[0.001200833568784504, 0.002389694492170889, 2795742885861124e-19], [5891086651375999e-19, 0.0029785502573438758, 3270666104008398e-19], [10146692491640572e-20, 5364214359186694e-19, 0.0032979401770712076]], t2.LINRGB_FROM_SCALED_DISCOUNT = [[1373.2198709594231, -1100.4251190754821, -7.278681089101213], [-271.815969077903, 559.6580465940733, -32.46047482791194], [1.9622899599665666, -57.173814538844006, 308.7233197812385]], t2.Y_FROM_LINRGB = [0.2126, 0.7152, 0.0722], t2.CRITICAL_PLANES = [0.015176349177441876, 0.045529047532325624, 0.07588174588720938, 0.10623444424209313, 0.13658714259697685, 0.16693984095186062, 0.19729253930674434, 0.2276452376616281, 0.2579979360165119, 0.28835063437139563, 0.3188300904430532, 0.350925934958123, 0.3848314933096426, 0.42057480301049466, 0.458183274052838, 0.4976837250274023, 0.5391024159806381, 0.5824650784040898, 0.6277969426914107, 0.6751227633498623, 0.7244668422128921, 0.775853049866786, 0.829304845476233, 0.8848452951698498, 0.942497089126609, 1.0022825574869039, 1.0642236851973577, 1.1283421258858297, 1.1946592148522128, 1.2631959812511864, 1.3339731595349034, 1.407011200216447, 1.4823302800086415, 1.5599503113873272, 1.6398909516233677, 1.7221716113234105, 1.8068114625156377, 1.8938294463134073, 1.9832442801866852, 2.075074464868551, 2.1693382909216234, 2.2660538449872063, 2.36523901573795, 2.4669114995532007, 2.5710888059345764, 2.6777882626779785, 2.7870270208169257, 2.898822059350997, 3.0131901897720907, 3.1301480604002863, 3.2497121605402226, 3.3718988244681087, 3.4967242352587946, 3.624204428461639, 3.754355295633311, 3.887192587735158, 4.022731918402185, 4.160988767090289, 4.301978482107941, 4.445716283538092, 4.592217266055746, 4.741496401646282, 4.893568542229298, 5.048448422192488, 5.20615066083972, 5.3666897647573375, 5.5300801301023865, 5.696336044816294, 5.865471690767354, 6.037501145825082, 6.212438385869475, 6.390297286737924, 6.571091626112461, 6.7548350853498045, 6.941541251256611, 7.131223617812143, 7.323895587840543, 7.5195704746346665, 7.7182615035334345, 7.919981813454504, 8.124744458384042, 8.332562408825165, 8.543448553206703, 8.757415699253682, 8.974476575321063, 9.194643831691977, 9.417930041841839, 9.644347703669503, 9.873909240696694, 10.106627003236781, 10.342513269534024, 10.58158024687427, 10.8238400726681, 11.069304815507364, 11.317986476196008, 11.569896988756009, 11.825048221409341, 12.083451977536606, 12.345119996613247, 12.610063955123938, 12.878295467455942, 13.149826086772048, 13.42466730586372, 13.702830557985108, 13.984327217668513, 14.269168601521828, 14.55736596900856, 14.848930523210871, 15.143873411576273, 15.44220572664832, 15.743938506781891, 16.04908273684337, 16.35764934889634, 16.66964922287304, 16.985093187232053, 17.30399201960269, 17.62635644741625, 17.95219714852476, 18.281524751807332, 18.614349837764564, 18.95068293910138, 19.290534541298456, 19.633915083172692, 19.98083495742689, 20.331304511189067, 20.685334046541502, 21.042933821039977, 21.404114048223256, 21.76888489811322, 22.137256497705877, 22.50923893145328, 22.884842241736916, 23.264076429332462, 23.6469514538663, 24.033477234264016, 24.42366364919083, 24.817520537484558, 25.21505769858089, 25.61628489293138, 26.021211842414342, 26.429848230738664, 26.842203703840827, 27.258287870275353, 27.678110301598522, 28.10168053274597, 28.529008062403893, 28.96010235337422, 29.39497283293396, 29.83362889318845, 30.276079891419332, 30.722335150426627, 31.172403958865512, 31.62629557157785, 32.08401920991837, 32.54558406207592, 33.010999283389665, 33.4802739966603, 33.953417292456834, 34.430438229418264, 34.911345834551085, 35.39614910352207, 35.88485700094671, 36.37747846067349, 36.87402238606382, 37.37449765026789, 37.87891309649659, 38.38727753828926, 38.89959975977785, 39.41588851594697, 39.93615253289054, 40.460400508064545, 40.98864111053629, 41.520882981230194, 42.05713473317016, 42.597404951718396, 43.141702194811224, 43.6900349931913, 44.24241185063697, 44.798841244188324, 45.35933162437017, 45.92389141541209, 46.49252901546552, 47.065252796817916, 47.64207110610409, 48.22299226451468, 48.808024568002054, 49.3971762874833, 49.9904556690408, 50.587870934119984, 51.189430279724725, 51.79514187861014, 52.40501387947288, 53.0190544071392, 53.637271562750364, 54.259673423945976, 54.88626804504493, 55.517063457223934, 56.15206766869424, 56.79128866487574, 57.43473440856916, 58.08241284012621, 58.734331877617365, 59.39049941699807, 60.05092333227251, 60.715611475655585, 61.38457167773311, 62.057811747619894, 62.7353394731159, 63.417162620860914, 64.10328893648692, 64.79372614476921, 65.48848194977529, 66.18756403501224, 66.89098006357258, 67.59873767827808, 68.31084450182222, 69.02730813691093, 69.74813616640164, 70.47333615344107, 71.20291564160104, 71.93688215501312, 72.67524319850172, 73.41800625771542, 74.16517879925733, 74.9167682708136, 75.67278210128072, 76.43322770089146, 77.1981124613393, 77.96744375590167, 78.74122893956174, 79.51947534912904, 80.30219030335869, 81.08938110306934, 81.88105503125999, 82.67721935322541, 83.4778813166706, 84.28304815182372, 85.09272707154808, 85.90692527145302, 86.72564993000343, 87.54890820862819, 88.3767072518277, 89.2090541872801, 90.04595612594655, 90.88742016217518, 91.73345337380438, 92.58406282226491, 93.43925555268066, 94.29903859396902, 95.16341895893969, 96.03240364439274, 96.9059996312159, 97.78421388448044, 98.6670533535366, 99.55452497210776];
class t4 {
  static from(e14, t10, r10) {
    return new t4(t2.solveToInt(e14, t10, r10));
  }
  static fromInt(e14) {
    return new t4(e14);
  }
  toInt() {
    return this.argb;
  }
  get hue() {
    return this.internalHue;
  }
  set hue(e14) {
    this.setInternalState(t2.solveToInt(e14, this.internalChroma, this.internalTone));
  }
  get chroma() {
    return this.internalChroma;
  }
  set chroma(e14) {
    this.setInternalState(t2.solveToInt(this.internalHue, e14, this.internalTone));
  }
  get tone() {
    return this.internalTone;
  }
  set tone(e14) {
    this.setInternalState(t2.solveToInt(this.internalHue, this.internalChroma, e14));
  }
  setInternalState(e14) {
    let t10 = t1.fromInt(e14);
    this.internalHue = t10.hue, this.internalChroma = t10.chroma, this.internalTone = tY(e14), this.argb = e14;
  }
  inViewingConditions(e14) {
    let t10 = t1.fromInt(this.toInt()), r10 = t10.xyzInViewingConditions(e14), n10 = t1.fromXyzInViewingConditions(r10[0], r10[1], r10[2], t0.make()), a2 = t4.from(n10.hue, n10.chroma, tK(r10[1]));
    return a2;
  }
  constructor(e14) {
    this.argb = e14;
    let t10 = t1.fromInt(e14);
    this.internalHue = t10.hue, this.internalChroma = t10.chroma, this.internalTone = tY(e14), this.argb = e14;
  }
}
class t5 {
  static ratioOfTones(e14, t10) {
    return e14 = tH(0, 100, e14), t10 = tH(0, 100, t10), t5.ratioOfYs(tX(e14), tX(t10));
  }
  static ratioOfYs(e14, t10) {
    let r10 = e14 > t10 ? e14 : t10;
    return (r10 + 5) / ((r10 === t10 ? e14 : t10) + 5);
  }
  static lighter(e14, t10) {
    if (e14 < 0 || e14 > 100)
      return -1;
    let r10 = tX(e14), n10 = t10 * (r10 + 5) - 5, a2 = t5.ratioOfYs(n10, r10);
    if (a2 < t10 && Math.abs(a2 - t10) > 0.04)
      return -1;
    let i2 = tK(n10) + 0.4;
    return i2 < 0 || i2 > 100 ? -1 : i2;
  }
  static darker(e14, t10) {
    if (e14 < 0 || e14 > 100)
      return -1;
    let r10 = tX(e14), n10 = (r10 + 5) / t10 - 5, a2 = t5.ratioOfYs(r10, n10);
    if (a2 < t10 && Math.abs(a2 - t10) > 0.04)
      return -1;
    let i2 = tK(n10) - 0.4;
    return i2 < 0 || i2 > 100 ? -1 : i2;
  }
  static lighterUnsafe(e14, t10) {
    let r10 = t5.lighter(e14, t10);
    return r10 < 0 ? 100 : r10;
  }
  static darkerUnsafe(e14, t10) {
    let r10 = t5.darker(e14, t10);
    return r10 < 0 ? 0 : r10;
  }
}
class t3 {
  static isDisliked(e14) {
    let t10 = Math.round(e14.hue) >= 90 && 111 >= Math.round(e14.hue), r10 = Math.round(e14.chroma) > 16, n10 = 65 > Math.round(e14.tone);
    return t10 && r10 && n10;
  }
  static fixIfDisliked(e14) {
    return t3.isDisliked(e14) ? t4.from(e14.hue, e14.chroma, 70) : e14;
  }
}
class t8 {
  static fromPalette(e14) {
    var t10, r10;
    return new t8(null !== (t10 = e14.name) && void 0 !== t10 ? t10 : "", e14.palette, e14.tone, null !== (r10 = e14.isBackground) && void 0 !== r10 && r10, e14.background, e14.secondBackground, e14.contrastCurve, e14.toneDeltaPair);
  }
  getArgb(e14) {
    return this.getHct(e14).toInt();
  }
  getHct(e14) {
    let t10 = this.hctCache.get(e14);
    if (null != t10)
      return t10;
    let r10 = this.getTone(e14), n10 = this.palette(e14).getHct(r10);
    return this.hctCache.size > 4 && this.hctCache.clear(), this.hctCache.set(e14, n10), n10;
  }
  getTone(e14) {
    let t10 = e14.contrastLevel < 0;
    if (this.toneDeltaPair) {
      let r10 = this.toneDeltaPair(e14), n10 = r10.roleA, a2 = r10.roleB, i2 = r10.delta, o2 = r10.polarity, s2 = r10.stayTogether, l2 = this.background(e14), c2 = l2.getTone(e14), u2 = "nearer" === o2 || "lighter" === o2 && !e14.isDark || "darker" === o2 && e14.isDark, d2 = u2 ? n10 : a2, f2 = u2 ? a2 : n10, h2 = this.name === d2.name, p2 = e14.isDark ? 1 : -1, m2 = d2.contrastCurve.getContrast(e14.contrastLevel), g2 = f2.contrastCurve.getContrast(e14.contrastLevel), b2 = d2.tone(e14), v2 = t5.ratioOfTones(c2, b2) >= m2 ? b2 : t8.foregroundTone(c2, m2), y2 = f2.tone(e14), x2 = t5.ratioOfTones(c2, y2) >= g2 ? y2 : t8.foregroundTone(c2, g2);
      return t10 && (v2 = t8.foregroundTone(c2, m2), x2 = t8.foregroundTone(c2, g2)), (x2 - v2) * p2 >= i2 || ((x2 = tH(0, 100, v2 + i2 * p2)) - v2) * p2 >= i2 || (v2 = tH(0, 100, x2 - i2 * p2)), 50 <= v2 && v2 < 60 ? x2 = p2 > 0 ? Math.max(x2, (v2 = 60) + i2 * p2) : Math.min(x2, (v2 = 49) + i2 * p2) : 50 <= x2 && x2 < 60 && (x2 = s2 ? p2 > 0 ? Math.max(x2, (v2 = 60) + i2 * p2) : Math.min(x2, (v2 = 49) + i2 * p2) : p2 > 0 ? 60 : 49), h2 ? v2 : x2;
    }
    {
      let r10 = this.tone(e14);
      if (null == this.background)
        return r10;
      let n10 = this.background(e14).getTone(e14), a2 = this.contrastCurve.getContrast(e14.contrastLevel);
      if (t5.ratioOfTones(n10, r10) >= a2 || (r10 = t8.foregroundTone(n10, a2)), t10 && (r10 = t8.foregroundTone(n10, a2)), this.isBackground && 50 <= r10 && r10 < 60 && (r10 = t5.ratioOfTones(49, n10) >= a2 ? 49 : 60), this.secondBackground) {
        let [t11, n11] = [this.background, this.secondBackground], [i2, o2] = [t11(e14).getTone(e14), n11(e14).getTone(e14)], [s2, l2] = [Math.max(i2, o2), Math.min(i2, o2)];
        if (t5.ratioOfTones(s2, r10) >= a2 && t5.ratioOfTones(l2, r10) >= a2)
          return r10;
        let c2 = t5.lighter(s2, a2), u2 = t5.darker(l2, a2), d2 = [];
        -1 !== c2 && d2.push(c2), -1 !== u2 && d2.push(u2);
        let f2 = t8.tonePrefersLightForeground(i2) || t8.tonePrefersLightForeground(o2);
        return f2 ? c2 < 0 ? 100 : c2 : 1 === d2.length ? d2[0] : u2 < 0 ? 0 : u2;
      }
      return r10;
    }
  }
  static foregroundTone(e14, t10) {
    let r10 = t5.lighterUnsafe(e14, t10), n10 = t5.darkerUnsafe(e14, t10), a2 = t5.ratioOfTones(r10, e14), i2 = t5.ratioOfTones(n10, e14), o2 = t8.tonePrefersLightForeground(e14);
    if (!o2)
      return i2 >= t10 || i2 >= a2 ? n10 : r10;
    {
      let e15 = 0.1 > Math.abs(a2 - i2) && a2 < t10 && i2 < t10;
      return a2 >= t10 || a2 >= i2 || e15 ? r10 : n10;
    }
  }
  static tonePrefersLightForeground(e14) {
    return 60 > Math.round(e14);
  }
  static toneAllowsLightForeground(e14) {
    return 49 >= Math.round(e14);
  }
  static enableLightForeground(e14) {
    return t8.tonePrefersLightForeground(e14) && !t8.toneAllowsLightForeground(e14) ? 49 : e14;
  }
  constructor(e14, t10, r10, n10, a2, i2, o2, s2) {
    if (this.name = e14, this.palette = t10, this.tone = r10, this.isBackground = n10, this.background = a2, this.secondBackground = i2, this.contrastCurve = o2, this.toneDeltaPair = s2, this.hctCache = /* @__PURE__ */ new Map(), !a2 && i2)
      throw Error(`Color ${e14} has secondBackgrounddefined, but background is not defined.`);
    if (!a2 && o2)
      throw Error(`Color ${e14} has contrastCurvedefined, but background is not defined.`);
    if (a2 && !o2)
      throw Error(`Color ${e14} has backgrounddefined, but contrastCurve is not defined.`);
  }
}
(H = Y || (Y = {}))[H.MONOCHROME = 0] = "MONOCHROME", H[H.NEUTRAL = 1] = "NEUTRAL", H[H.TONAL_SPOT = 2] = "TONAL_SPOT", H[H.VIBRANT = 3] = "VIBRANT", H[H.EXPRESSIVE = 4] = "EXPRESSIVE", H[H.FIDELITY = 5] = "FIDELITY", H[H.CONTENT = 6] = "CONTENT", H[H.RAINBOW = 7] = "RAINBOW", H[H.FRUIT_SALAD = 8] = "FRUIT_SALAD";
class t6 {
  getContrast(e14) {
    var t10, r10, n10, a2, i2, o2, s2, l2, c2;
    return e14 <= -1 ? this.low : e14 < 0 ? (t10 = this.low, r10 = this.normal, (1 - (n10 = (e14 - -1) / 1)) * t10 + n10 * r10) : e14 < 0.5 ? (a2 = this.normal, i2 = this.medium, (1 - (o2 = (e14 - 0) / 0.5)) * a2 + o2 * i2) : e14 < 1 ? (s2 = this.medium, l2 = this.high, (1 - (c2 = (e14 - 0.5) / 0.5)) * s2 + c2 * l2) : this.high;
  }
  constructor(e14, t10, r10, n10) {
    this.low = e14, this.normal = t10, this.medium = r10, this.high = n10;
  }
}
class t9 {
  constructor(e14, t10, r10, n10, a2) {
    this.roleA = e14, this.roleB = t10, this.delta = r10, this.polarity = n10, this.stayTogether = a2;
  }
}
function t7(e14) {
  return e14.variant === Y.FIDELITY || e14.variant === Y.CONTENT;
}
function re(e14) {
  return e14.variant === Y.MONOCHROME;
}
function rt(e14, t10) {
  let r10 = e14.inViewingConditions(t0.make(void 0, void 0, t10.isDark ? 30 : 80, void 0, void 0));
  return t8.tonePrefersLightForeground(e14.tone) && !t8.toneAllowsLightForeground(r10.tone) ? t8.enableLightForeground(e14.tone) : t8.enableLightForeground(r10.tone);
}
class rr {
  static highestSurface(e14) {
    return e14.isDark ? rr.surfaceBright : rr.surfaceDim;
  }
}
rr.contentAccentToneDelta = 15, rr.primaryPaletteKeyColor = t8.fromPalette({ name: "primary_palette_key_color", palette: (e14) => e14.primaryPalette, tone: (e14) => e14.primaryPalette.keyColor.tone }), rr.secondaryPaletteKeyColor = t8.fromPalette({ name: "secondary_palette_key_color", palette: (e14) => e14.secondaryPalette, tone: (e14) => e14.secondaryPalette.keyColor.tone }), rr.tertiaryPaletteKeyColor = t8.fromPalette({ name: "tertiary_palette_key_color", palette: (e14) => e14.tertiaryPalette, tone: (e14) => e14.tertiaryPalette.keyColor.tone }), rr.neutralPaletteKeyColor = t8.fromPalette({ name: "neutral_palette_key_color", palette: (e14) => e14.neutralPalette, tone: (e14) => e14.neutralPalette.keyColor.tone }), rr.neutralVariantPaletteKeyColor = t8.fromPalette({ name: "neutral_variant_palette_key_color", palette: (e14) => e14.neutralVariantPalette, tone: (e14) => e14.neutralVariantPalette.keyColor.tone }), rr.background = t8.fromPalette({ name: "background", palette: (e14) => e14.neutralPalette, tone: (e14) => e14.isDark ? 6 : 98, isBackground: true }), rr.onBackground = t8.fromPalette({ name: "on_background", palette: (e14) => e14.neutralPalette, tone: (e14) => e14.isDark ? 90 : 10, background: (e14) => rr.background, contrastCurve: new t6(3, 3, 4.5, 7) }), rr.surface = t8.fromPalette({ name: "surface", palette: (e14) => e14.neutralPalette, tone: (e14) => e14.isDark ? 6 : 98, isBackground: true }), rr.surfaceDim = t8.fromPalette({ name: "surface_dim", palette: (e14) => e14.neutralPalette, tone: (e14) => e14.isDark ? 6 : 87, isBackground: true }), rr.surfaceBright = t8.fromPalette({ name: "surface_bright", palette: (e14) => e14.neutralPalette, tone: (e14) => e14.isDark ? 24 : 98, isBackground: true }), rr.surfaceContainerLowest = t8.fromPalette({ name: "surface_container_lowest", palette: (e14) => e14.neutralPalette, tone: (e14) => e14.isDark ? 4 : 100, isBackground: true }), rr.surfaceContainerLow = t8.fromPalette({ name: "surface_container_low", palette: (e14) => e14.neutralPalette, tone: (e14) => e14.isDark ? 10 : 96, isBackground: true }), rr.surfaceContainer = t8.fromPalette({ name: "surface_container", palette: (e14) => e14.neutralPalette, tone: (e14) => e14.isDark ? 12 : 94, isBackground: true }), rr.surfaceContainerHigh = t8.fromPalette({ name: "surface_container_high", palette: (e14) => e14.neutralPalette, tone: (e14) => e14.isDark ? 17 : 92, isBackground: true }), rr.surfaceContainerHighest = t8.fromPalette({ name: "surface_container_highest", palette: (e14) => e14.neutralPalette, tone: (e14) => e14.isDark ? 22 : 90, isBackground: true }), rr.onSurface = t8.fromPalette({ name: "on_surface", palette: (e14) => e14.neutralPalette, tone: (e14) => e14.isDark ? 90 : 10, background: (e14) => rr.highestSurface(e14), contrastCurve: new t6(4.5, 7, 11, 21) }), rr.surfaceVariant = t8.fromPalette({ name: "surface_variant", palette: (e14) => e14.neutralVariantPalette, tone: (e14) => e14.isDark ? 30 : 90, isBackground: true }), rr.onSurfaceVariant = t8.fromPalette({ name: "on_surface_variant", palette: (e14) => e14.neutralVariantPalette, tone: (e14) => e14.isDark ? 80 : 30, background: (e14) => rr.highestSurface(e14), contrastCurve: new t6(3, 4.5, 7, 11) }), rr.inverseSurface = t8.fromPalette({ name: "inverse_surface", palette: (e14) => e14.neutralPalette, tone: (e14) => e14.isDark ? 90 : 20 }), rr.inverseOnSurface = t8.fromPalette({ name: "inverse_on_surface", palette: (e14) => e14.neutralPalette, tone: (e14) => e14.isDark ? 20 : 95, background: (e14) => rr.inverseSurface, contrastCurve: new t6(4.5, 7, 11, 21) }), rr.outline = t8.fromPalette({ name: "outline", palette: (e14) => e14.neutralVariantPalette, tone: (e14) => e14.isDark ? 60 : 50, background: (e14) => rr.highestSurface(e14), contrastCurve: new t6(1.5, 3, 4.5, 7) }), rr.outlineVariant = t8.fromPalette({ name: "outline_variant", palette: (e14) => e14.neutralVariantPalette, tone: (e14) => e14.isDark ? 30 : 80, background: (e14) => rr.highestSurface(e14), contrastCurve: new t6(1, 1, 3, 7) }), rr.shadow = t8.fromPalette({ name: "shadow", palette: (e14) => e14.neutralPalette, tone: (e14) => 0 }), rr.scrim = t8.fromPalette({ name: "scrim", palette: (e14) => e14.neutralPalette, tone: (e14) => 0 }), rr.surfaceTint = t8.fromPalette({ name: "surface_tint", palette: (e14) => e14.primaryPalette, tone: (e14) => e14.isDark ? 80 : 40, isBackground: true }), rr.primary = t8.fromPalette({ name: "primary", palette: (e14) => e14.primaryPalette, tone: (e14) => re(e14) ? e14.isDark ? 100 : 0 : e14.isDark ? 80 : 40, isBackground: true, background: (e14) => rr.highestSurface(e14), contrastCurve: new t6(3, 4.5, 7, 11), toneDeltaPair: (e14) => new t9(rr.primaryContainer, rr.primary, 15, "nearer", false) }), rr.onPrimary = t8.fromPalette({ name: "on_primary", palette: (e14) => e14.primaryPalette, tone: (e14) => re(e14) ? e14.isDark ? 10 : 90 : e14.isDark ? 20 : 100, background: (e14) => rr.primary, contrastCurve: new t6(4.5, 7, 11, 21) }), rr.primaryContainer = t8.fromPalette({ name: "primary_container", palette: (e14) => e14.primaryPalette, tone: (e14) => t7(e14) ? rt(e14.sourceColorHct, e14) : re(e14) ? e14.isDark ? 85 : 25 : e14.isDark ? 30 : 90, isBackground: true, background: (e14) => rr.highestSurface(e14), contrastCurve: new t6(1, 1, 3, 7), toneDeltaPair: (e14) => new t9(rr.primaryContainer, rr.primary, 15, "nearer", false) }), rr.onPrimaryContainer = t8.fromPalette({ name: "on_primary_container", palette: (e14) => e14.primaryPalette, tone: (e14) => t7(e14) ? t8.foregroundTone(rr.primaryContainer.tone(e14), 4.5) : re(e14) ? e14.isDark ? 0 : 100 : e14.isDark ? 90 : 10, background: (e14) => rr.primaryContainer, contrastCurve: new t6(4.5, 7, 11, 21) }), rr.inversePrimary = t8.fromPalette({ name: "inverse_primary", palette: (e14) => e14.primaryPalette, tone: (e14) => e14.isDark ? 40 : 80, background: (e14) => rr.inverseSurface, contrastCurve: new t6(3, 4.5, 7, 11) }), rr.secondary = t8.fromPalette({ name: "secondary", palette: (e14) => e14.secondaryPalette, tone: (e14) => e14.isDark ? 80 : 40, isBackground: true, background: (e14) => rr.highestSurface(e14), contrastCurve: new t6(3, 4.5, 7, 11), toneDeltaPair: (e14) => new t9(rr.secondaryContainer, rr.secondary, 15, "nearer", false) }), rr.onSecondary = t8.fromPalette({ name: "on_secondary", palette: (e14) => e14.secondaryPalette, tone: (e14) => re(e14) ? e14.isDark ? 10 : 100 : e14.isDark ? 20 : 100, background: (e14) => rr.secondary, contrastCurve: new t6(4.5, 7, 11, 21) }), rr.secondaryContainer = t8.fromPalette({ name: "secondary_container", palette: (e14) => e14.secondaryPalette, tone: (e14) => {
  let t10 = e14.isDark ? 30 : 90;
  if (re(e14))
    return e14.isDark ? 30 : 85;
  if (!t7(e14))
    return t10;
  let r10 = function(e15, t11, r11, n10) {
    let a2 = r11, i2 = t4.from(e15, t11, r11);
    if (i2.chroma < t11) {
      let r12 = i2.chroma;
      for (; i2.chroma < t11; ) {
        a2 += n10 ? -1 : 1;
        let o2 = t4.from(e15, t11, a2);
        if (r12 > o2.chroma || 0.4 > Math.abs(o2.chroma - t11))
          break;
        let s2 = Math.abs(o2.chroma - t11), l2 = Math.abs(i2.chroma - t11);
        s2 < l2 && (i2 = o2), r12 = Math.max(r12, o2.chroma);
      }
    }
    return a2;
  }(e14.secondaryPalette.hue, e14.secondaryPalette.chroma, t10, !e14.isDark);
  return rt(e14.secondaryPalette.getHct(r10), e14);
}, isBackground: true, background: (e14) => rr.highestSurface(e14), contrastCurve: new t6(1, 1, 3, 7), toneDeltaPair: (e14) => new t9(rr.secondaryContainer, rr.secondary, 15, "nearer", false) }), rr.onSecondaryContainer = t8.fromPalette({ name: "on_secondary_container", palette: (e14) => e14.secondaryPalette, tone: (e14) => t7(e14) ? t8.foregroundTone(rr.secondaryContainer.tone(e14), 4.5) : e14.isDark ? 90 : 10, background: (e14) => rr.secondaryContainer, contrastCurve: new t6(4.5, 7, 11, 21) }), rr.tertiary = t8.fromPalette({ name: "tertiary", palette: (e14) => e14.tertiaryPalette, tone: (e14) => re(e14) ? e14.isDark ? 90 : 25 : e14.isDark ? 80 : 40, isBackground: true, background: (e14) => rr.highestSurface(e14), contrastCurve: new t6(3, 4.5, 7, 11), toneDeltaPair: (e14) => new t9(rr.tertiaryContainer, rr.tertiary, 15, "nearer", false) }), rr.onTertiary = t8.fromPalette({ name: "on_tertiary", palette: (e14) => e14.tertiaryPalette, tone: (e14) => re(e14) ? e14.isDark ? 10 : 90 : e14.isDark ? 20 : 100, background: (e14) => rr.tertiary, contrastCurve: new t6(4.5, 7, 11, 21) }), rr.tertiaryContainer = t8.fromPalette({ name: "tertiary_container", palette: (e14) => e14.tertiaryPalette, tone: (e14) => {
  if (re(e14))
    return e14.isDark ? 60 : 49;
  if (!t7(e14))
    return e14.isDark ? 30 : 90;
  let t10 = rt(e14.tertiaryPalette.getHct(e14.sourceColorHct.tone), e14), r10 = e14.tertiaryPalette.getHct(t10);
  return t3.fixIfDisliked(r10).tone;
}, isBackground: true, background: (e14) => rr.highestSurface(e14), contrastCurve: new t6(1, 1, 3, 7), toneDeltaPair: (e14) => new t9(rr.tertiaryContainer, rr.tertiary, 15, "nearer", false) }), rr.onTertiaryContainer = t8.fromPalette({ name: "on_tertiary_container", palette: (e14) => e14.tertiaryPalette, tone: (e14) => re(e14) ? e14.isDark ? 0 : 100 : t7(e14) ? t8.foregroundTone(rr.tertiaryContainer.tone(e14), 4.5) : e14.isDark ? 90 : 10, background: (e14) => rr.tertiaryContainer, contrastCurve: new t6(4.5, 7, 11, 21) }), rr.error = t8.fromPalette({ name: "error", palette: (e14) => e14.errorPalette, tone: (e14) => e14.isDark ? 80 : 40, isBackground: true, background: (e14) => rr.highestSurface(e14), contrastCurve: new t6(3, 4.5, 7, 11), toneDeltaPair: (e14) => new t9(rr.errorContainer, rr.error, 15, "nearer", false) }), rr.onError = t8.fromPalette({ name: "on_error", palette: (e14) => e14.errorPalette, tone: (e14) => e14.isDark ? 20 : 100, background: (e14) => rr.error, contrastCurve: new t6(4.5, 7, 11, 21) }), rr.errorContainer = t8.fromPalette({ name: "error_container", palette: (e14) => e14.errorPalette, tone: (e14) => e14.isDark ? 30 : 90, isBackground: true, background: (e14) => rr.highestSurface(e14), contrastCurve: new t6(1, 1, 3, 7), toneDeltaPair: (e14) => new t9(rr.errorContainer, rr.error, 15, "nearer", false) }), rr.onErrorContainer = t8.fromPalette({ name: "on_error_container", palette: (e14) => e14.errorPalette, tone: (e14) => e14.isDark ? 90 : 10, background: (e14) => rr.errorContainer, contrastCurve: new t6(4.5, 7, 11, 21) }), rr.primaryFixed = t8.fromPalette({ name: "primary_fixed", palette: (e14) => e14.primaryPalette, tone: (e14) => re(e14) ? 40 : 90, isBackground: true, background: (e14) => rr.highestSurface(e14), contrastCurve: new t6(1, 1, 3, 7), toneDeltaPair: (e14) => new t9(rr.primaryFixed, rr.primaryFixedDim, 10, "lighter", true) }), rr.primaryFixedDim = t8.fromPalette({ name: "primary_fixed_dim", palette: (e14) => e14.primaryPalette, tone: (e14) => re(e14) ? 30 : 80, isBackground: true, background: (e14) => rr.highestSurface(e14), contrastCurve: new t6(1, 1, 3, 7), toneDeltaPair: (e14) => new t9(rr.primaryFixed, rr.primaryFixedDim, 10, "lighter", true) }), rr.onPrimaryFixed = t8.fromPalette({ name: "on_primary_fixed", palette: (e14) => e14.primaryPalette, tone: (e14) => re(e14) ? 100 : 10, background: (e14) => rr.primaryFixedDim, secondBackground: (e14) => rr.primaryFixed, contrastCurve: new t6(4.5, 7, 11, 21) }), rr.onPrimaryFixedVariant = t8.fromPalette({ name: "on_primary_fixed_variant", palette: (e14) => e14.primaryPalette, tone: (e14) => re(e14) ? 90 : 30, background: (e14) => rr.primaryFixedDim, secondBackground: (e14) => rr.primaryFixed, contrastCurve: new t6(3, 4.5, 7, 11) }), rr.secondaryFixed = t8.fromPalette({ name: "secondary_fixed", palette: (e14) => e14.secondaryPalette, tone: (e14) => re(e14) ? 80 : 90, isBackground: true, background: (e14) => rr.highestSurface(e14), contrastCurve: new t6(1, 1, 3, 7), toneDeltaPair: (e14) => new t9(rr.secondaryFixed, rr.secondaryFixedDim, 10, "lighter", true) }), rr.secondaryFixedDim = t8.fromPalette({ name: "secondary_fixed_dim", palette: (e14) => e14.secondaryPalette, tone: (e14) => re(e14) ? 70 : 80, isBackground: true, background: (e14) => rr.highestSurface(e14), contrastCurve: new t6(1, 1, 3, 7), toneDeltaPair: (e14) => new t9(rr.secondaryFixed, rr.secondaryFixedDim, 10, "lighter", true) }), rr.onSecondaryFixed = t8.fromPalette({ name: "on_secondary_fixed", palette: (e14) => e14.secondaryPalette, tone: (e14) => 10, background: (e14) => rr.secondaryFixedDim, secondBackground: (e14) => rr.secondaryFixed, contrastCurve: new t6(4.5, 7, 11, 21) }), rr.onSecondaryFixedVariant = t8.fromPalette({ name: "on_secondary_fixed_variant", palette: (e14) => e14.secondaryPalette, tone: (e14) => re(e14) ? 25 : 30, background: (e14) => rr.secondaryFixedDim, secondBackground: (e14) => rr.secondaryFixed, contrastCurve: new t6(3, 4.5, 7, 11) }), rr.tertiaryFixed = t8.fromPalette({ name: "tertiary_fixed", palette: (e14) => e14.tertiaryPalette, tone: (e14) => re(e14) ? 40 : 90, isBackground: true, background: (e14) => rr.highestSurface(e14), contrastCurve: new t6(1, 1, 3, 7), toneDeltaPair: (e14) => new t9(rr.tertiaryFixed, rr.tertiaryFixedDim, 10, "lighter", true) }), rr.tertiaryFixedDim = t8.fromPalette({ name: "tertiary_fixed_dim", palette: (e14) => e14.tertiaryPalette, tone: (e14) => re(e14) ? 30 : 80, isBackground: true, background: (e14) => rr.highestSurface(e14), contrastCurve: new t6(1, 1, 3, 7), toneDeltaPair: (e14) => new t9(rr.tertiaryFixed, rr.tertiaryFixedDim, 10, "lighter", true) }), rr.onTertiaryFixed = t8.fromPalette({ name: "on_tertiary_fixed", palette: (e14) => e14.tertiaryPalette, tone: (e14) => re(e14) ? 100 : 10, background: (e14) => rr.tertiaryFixedDim, secondBackground: (e14) => rr.tertiaryFixed, contrastCurve: new t6(4.5, 7, 11, 21) }), rr.onTertiaryFixedVariant = t8.fromPalette({ name: "on_tertiary_fixed_variant", palette: (e14) => e14.tertiaryPalette, tone: (e14) => re(e14) ? 90 : 30, background: (e14) => rr.tertiaryFixedDim, secondBackground: (e14) => rr.tertiaryFixed, contrastCurve: new t6(3, 4.5, 7, 11) });
class rn {
  static fromInt(e14) {
    let t10 = t4.fromInt(e14);
    return rn.fromHct(t10);
  }
  static fromHct(e14) {
    return new rn(e14.hue, e14.chroma, e14);
  }
  static fromHueAndChroma(e14, t10) {
    return new rn(e14, t10, rn.createKeyColor(e14, t10));
  }
  static createKeyColor(e14, t10) {
    let r10 = t4.from(e14, t10, 50), n10 = Math.abs(r10.chroma - t10);
    for (let a2 = 1; a2 < 50 && Math.round(t10) !== Math.round(r10.chroma); a2 += 1) {
      let i2 = t4.from(e14, t10, 50 + a2), o2 = Math.abs(i2.chroma - t10);
      o2 < n10 && (n10 = o2, r10 = i2);
      let s2 = t4.from(e14, t10, 50 - a2), l2 = Math.abs(s2.chroma - t10);
      l2 < n10 && (n10 = l2, r10 = s2);
    }
    return r10;
  }
  tone(e14) {
    let t10 = this.cache.get(e14);
    return void 0 === t10 && (t10 = t4.from(this.hue, this.chroma, e14).toInt(), this.cache.set(e14, t10)), t10;
  }
  getHct(e14) {
    return t4.fromInt(this.tone(e14));
  }
  constructor(e14, t10, r10) {
    this.hue = e14, this.chroma = t10, this.keyColor = r10, this.cache = /* @__PURE__ */ new Map();
  }
}
class ra {
  static of(e14) {
    return new ra(e14, false);
  }
  static contentOf(e14) {
    return new ra(e14, true);
  }
  static fromColors(e14) {
    return ra.createPaletteFromColors(false, e14);
  }
  static contentFromColors(e14) {
    return ra.createPaletteFromColors(true, e14);
  }
  static createPaletteFromColors(e14, t10) {
    let r10 = new ra(t10.primary, e14);
    if (t10.secondary) {
      let n10 = new ra(t10.secondary, e14);
      r10.a2 = n10.a1;
    }
    if (t10.tertiary) {
      let n10 = new ra(t10.tertiary, e14);
      r10.a3 = n10.a1;
    }
    if (t10.error) {
      let n10 = new ra(t10.error, e14);
      r10.error = n10.a1;
    }
    if (t10.neutral) {
      let n10 = new ra(t10.neutral, e14);
      r10.n1 = n10.n1;
    }
    if (t10.neutralVariant) {
      let n10 = new ra(t10.neutralVariant, e14);
      r10.n2 = n10.n2;
    }
    return r10;
  }
  constructor(e14, t10) {
    let r10 = t4.fromInt(e14), n10 = r10.hue, a2 = r10.chroma;
    t10 ? (this.a1 = rn.fromHueAndChroma(n10, a2), this.a2 = rn.fromHueAndChroma(n10, a2 / 3), this.a3 = rn.fromHueAndChroma(n10 + 60, a2 / 2), this.n1 = rn.fromHueAndChroma(n10, Math.min(a2 / 12, 4)), this.n2 = rn.fromHueAndChroma(n10, Math.min(a2 / 6, 8))) : (this.a1 = rn.fromHueAndChroma(n10, Math.max(48, a2)), this.a2 = rn.fromHueAndChroma(n10, 16), this.a3 = rn.fromHueAndChroma(n10 + 60, 24), this.n1 = rn.fromHueAndChroma(n10, 4), this.n2 = rn.fromHueAndChroma(n10, 8)), this.error = rn.fromHueAndChroma(25, 84);
  }
}
function ri(e14) {
  e14 = e14.replace("#", "");
  let t10 = 3 === e14.length, r10 = 6 === e14.length, n10 = 8 === e14.length;
  if (!t10 && !r10 && !n10)
    throw Error("unexpected hex " + e14);
  let a2 = 0, i2 = 0, o2 = 0;
  return t10 ? (a2 = ro(e14.slice(0, 1).repeat(2)), i2 = ro(e14.slice(1, 2).repeat(2)), o2 = ro(e14.slice(2, 3).repeat(2))) : r10 ? (a2 = ro(e14.slice(0, 2)), i2 = ro(e14.slice(2, 4)), o2 = ro(e14.slice(4, 6))) : n10 && (a2 = ro(e14.slice(2, 4)), i2 = ro(e14.slice(4, 6)), o2 = ro(e14.slice(6, 8))), (-16777216 | (255 & a2) << 16 | (255 & i2) << 8 | 255 & o2) >>> 0;
}
function ro(e14) {
  return parseInt(e14, 16);
}
let rs = { 0: true, 10: true, 20: true, 30: true, 40: true, 50: true, 60: true, 70: true, 80: true, 90: true, 95: true, 100: true }, rl = (e14) => {
  let t10 = { r: e14 >> 16 & 255, g: e14 >> 8 & 255, b: 255 & e14 };
  return [t10.r, t10.g, t10.b];
}, rc = (e14) => ({ primary: true, secondary: true, tertiary: true, error: true, warning: true, success: true })[e14], ru = class {
  normalizeRoleRules() {
    let e14 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t10 = { shadow: ["neutral", 0, 0], scrim: ["neutral", 0, 0], outline: ["neutralVariant", 60, 50], "outline-variant": ["neutralVariant", 30, 80], surface: ["neutral", 10, 99], "on-surface": ["neutral", 90, 10], "surface-variant": ["neutralVariant", 30, 90], "on-surface-variant": ["neutralVariant", 80, 30], "surface-dim": ["neutral", 6, 87], "surface-bright": ["neutral", 24, 98], "surface-container-lowest": ["neutral", 4, 100], "surface-container-low": ["neutral", 10, 96], "surface-container": ["neutral", 12, 94], "surface-container-high": ["neutral", 17, 92], "surface-container-highest": ["neutral", 22, 90], "inverse-surface": ["neutral", 90, 20], "inverse-on-surface": ["neutral", 20, 95], "inverse-primary": ["primary", 40, 80] };
    for (let e15 in this.seeds)
      e15.startsWith("neutral") || (t10[e15] = [e15, 80, 40], t10[`on-${e15}`] = [e15, 20, 100], t10[`${e15}-container`] = [e15, 30, 90], t10[`on-${e15}-container`] = [e15, 90, 10]);
    return { ...t10, ...e14 };
  }
  getThemeRoleColors(e14) {
    let t10 = {}, r10 = {};
    for (let n10 in e14) {
      let [a2, i2, o2] = e14[n10];
      this.seeds[a2] && (r10[n10] = rs[i2] ? `${a2}.${i2}` : this.seeds[a2].tone(i2), t10[n10] = rs[o2] ? `${a2}.${o2}` : this.seeds[a2].tone(o2));
    }
    return [t10, r10];
  }
  toDesignTokens() {
    let e14 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [t10, r10] = this.getThemeRoleColors(this.normalizeRoleRules(e14)), n10 = {}, a2 = {};
    for (let e15 in t10)
      if (n10[`${e15}`] = { _default: T(t10[e15]) ? rl(t10[e15]) : t10[e15], _dark: T(r10[e15]) ? rl(r10[e15]) : r10[e15] }, rc(e15) && (a2[`${e15}`] = tv.mixin({ bgColor: `sys.${e15}`, color: `sys.on-${e15}` }), a2[`${e15}-container`] = tv.mixin({ bgColor: `sys.${e15}-container`, color: `sys.on-${e15}-container` })), e15.startsWith("surface")) {
        if (e15.includes("container")) {
          a2[`${e15}`] = tv.mixin({ bgColor: `sys.${e15}`, color: "sys.on-surface" });
          continue;
        }
        a2[`${e15}`] = tv.mixin({ bgColor: `sys.${e15}`, color: "sys.on-surface" }), a2[`on-${e15}`] = tv.mixin({ bgColor: `sys.on-${e15}`, color: "sys.inverse-on-surface" });
      }
    let i2 = (e15) => Object.keys(rs).reduce((t11, r11) => ({ ...t11, [r11]: rl(e15.tone(parseInt(r11))) }), {}), o2 = tv.color({ ...$(this.seeds, (e15) => i2(e15)), white: [255, 255, 255], black: [0, 0, 0], sys: n10 }), s2 = tv.customMixin("containerStyle", { sys: a2 });
    return { color: o2, containerStyle: s2 };
  }
  constructor(e14) {
    this.seeds = e14;
  }
};
ru.toHEX = (e14) => `#${rl(e14).map((e15) => I(e15.toString(16), 2, "0")).join("")}`, ru.fromColors = (e14) => {
  let { primary: t10, secondary: r10, tertiary: n10, neutral: a2, neutralVariant: i2, error: o2, ...s2 } = e14, l2 = ra.contentFromColors({ primary: ri(t10), secondary: r10 ? ri(r10) : void 0, tertiary: n10 ? ri(n10) : void 0, error: o2 ? ri(o2) : void 0 });
  return a2 && (l2.n1 = rn.fromHueAndChroma(ri(a2), 4)), i2 && (l2.n2 = rn.fromHueAndChroma(ri(i2), 8)), new ru({ primary: l2.a1, secondary: l2.a2, tertiary: l2.a3, neutral: l2.n1, neutralVariant: l2.n2, error: l2.error, ...$(s2, (e15) => rn.fromInt(ri(e15))) });
};
let rd = ru, rf = (e14, t10, r10, n10) => Object.assign(function(e15, t11, r11, n11) {
  if (e15 === t11 && r11 === n11)
    return eG;
  let a2 = new Float32Array(11);
  for (let t12 = 0; t12 < 11; ++t12)
    a2[t12] = ts(0.1 * t12, e15, r11);
  return (i2) => 0 === i2 || 1 === i2 ? i2 : ts(function(t12) {
    let n12 = 0, i3 = 1;
    for (; 10 !== i3 && a2[i3] <= t12; ++i3)
      n12 += 0.1;
    --i3;
    let o2 = (t12 - a2[i3]) / (a2[i3 + 1] - a2[i3]), s2 = n12 + 0.1 * o2, l2 = tl(s2, e15, r11);
    return l2 >= 1e-3 ? function(e16, t13, r12, n13) {
      for (let a3 = 0; a3 < 8; ++a3) {
        let a4 = tl(t13, r12, n13);
        if (0 === a4)
          break;
        let i4 = ts(t13, r12, n13) - e16;
        t13 -= i4 / a4;
      }
      return t13;
    }(t12, s2, e15, r11) : 0 === l2 ? s2 : function(e16, t13, r12, n13, a3) {
      let i4, o3;
      let s3 = 0;
      do
        (i4 = ts(o3 = t13 + (r12 - t13) / 2, n13, a3) - e16) > 0 ? r12 = o3 : t13 = o3;
      while (Math.abs(i4) > 1e-7 && ++s3 < 10);
      return o3;
    }(t12, n12, n12 + 0.1, e15, r11);
  }(i2), t11, n11);
}(e14, t10, r10, n10), { toString: () => `cubic-bezier(${e14}, ${t10}, ${r10}, ${n10})` }), rh = { duration: { sm1: 50, sm2: 100, sm3: 150, sm4: 200, md1: 250, md2: 300, md3: 350, md4: 400, lg1: 450, lg2: 500, lg3: 550, lg4: 600, xl1: 700, xl2: 800, xl3: 900, xl4: 1e3 }, easing: { linear: rf(0, 0, 1, 1), standard: Object.assign(rf(0.2, 0, 0, 1), { accelerate: rf(0.3, 0, 1, 1), decelerate: rf(0, 0, 0, 1) }), emphasized: Object.assign(rf(0.2, 0, 0, 1), { accelerate: rf(0.3, 0, 0.8, 0.15), decelerate: rf(0.05, 0.7, 0.1, 1) }), legacy: Object.assign(rf(0.4, 0, 0.2, 1), { decelerate: rf(0, 0, 0.2, 1), accelerate: rf(0.4, 0, 1, 1) }) } }, rp = (n10, a2) => (a2 = null != a2 ? a2 : { ...n10, from: { ...n10.to }, to: { ...n10.from } }, e({ onComplete: L(), $default: L() }, (e14, i2) => {
  let o2, {} = e14, { slots: s2, emit: l2 } = i2, c2 = (e15, t10) => {
    o2 = tn({ ...n10, autoplay: true, onComplete: () => {
      t10(), l2("complete", "enter");
    }, onUpdate: (t11) => {
      Object.assign(e15.style, t11);
    } });
  }, u2 = (e15, t10) => {
    o2 = tn({ ...a2, autoplay: true, onComplete: () => {
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
}, { name: "Transition" })), rm = { transitionDuration: tv.transitionDuration(rh.duration), transitionTimingFunction: tv.transitionTimingFunction({ linear: rh.easing.linear.toString(), standard: rh.easing.standard.toString(), "standard-accelerate": rh.easing.standard.accelerate.toString(), "standard-decelerate": rh.easing.standard.decelerate.toString(), emphasized: rh.easing.emphasized.toString(), "emphasized-decelerate": rh.easing.emphasized.decelerate.toString(), "emphasized-accelerate": rh.easing.emphasized.accelerate.toString(), legacy: rh.easing.legacy.toString(), "legacy-decelerate": rh.easing.legacy.decelerate.toString(), "legacy-accelerate": rh.easing.legacy.accelerate.toString() }) }, rg = tv.rounded({ xs: 4, sm: 8, md: 12, lg: 16, xl: 28 }), rb = rd.fromColors({ primary: "#1270f5", secondary: "#8a90a5", tertiary: "#b58391", neutral: "#5e5e5e", error: "#d93f23", warning: "#e69c00", success: "#5ac220" }), rv = { ...tE, ...rm, ...tj, rounded: rg, ...rb.toDesignTokens({ primary: ["primary", 80, 50] }) }, ry = tB.create(rv, { varPrefix: "vk" }), rx = n(() => ry, { name: "Theme" });
var rw = function(e14, t10, r10) {
  var n10 = e14.key + "-" + t10.name;
  false === r10 && void 0 === e14.registered[n10] && (e14.registered[n10] = t10.styles);
}, rk = function(e14, t10, r10) {
  rw(e14, t10, r10);
  var n10 = e14.key + "-" + t10.name;
  if (void 0 === e14.inserted[t10.name]) {
    var a2 = t10;
    do
      e14.insert(t10 === a2 ? "." + n10 : "", a2, e14.sheet, true), a2 = a2.next;
    while (void 0 !== a2);
  }
}, rM = function() {
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
      var n10 = function(e16) {
        if (e16.sheet)
          return e16.sheet;
        for (var t12 = 0; t12 < document.styleSheets.length; t12++)
          if (document.styleSheets[t12].ownerNode === e16)
            return document.styleSheets[t12];
      }(r10);
      try {
        n10.insertRule(e15, n10.cssRules.length);
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
}(), rC = "-ms-", rP = "-moz-", r_ = "-webkit-", rS = "comm", rO = "rule", rD = "decl", rT = "@keyframes", rR = Math.abs, r$ = String.fromCharCode, rA = Object.assign;
function rI(e14, t10, r10) {
  return e14.replace(t10, r10);
}
function rL(e14, t10) {
  return e14.indexOf(t10);
}
function rF(e14, t10) {
  return 0 | e14.charCodeAt(t10);
}
function rB(e14, t10, r10) {
  return e14.slice(t10, r10);
}
function rj(e14) {
  return e14.length;
}
function rE(e14, t10) {
  return t10.push(e14), e14;
}
var rV = 1, rH = 1, rz = 0, rW = 0, rN = 0, rq = "";
function rU(e14, t10, r10, n10, a2, i2, o2) {
  return { value: e14, root: t10, parent: r10, type: n10, props: a2, children: i2, line: rV, column: rH, length: o2, return: "" };
}
function rG(e14, t10) {
  return rA(rU("", null, null, "", null, null, 0), e14, { length: -e14.length }, t10);
}
function rY() {
  return rN = rW < rz ? rF(rq, rW++) : 0, rH++, 10 === rN && (rH = 1, rV++), rN;
}
function rX() {
  return rF(rq, rW);
}
function rK(e14) {
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
function rJ(e14) {
  return rV = rH = 1, rz = rj(rq = e14), rW = 0, [];
}
function rZ(e14) {
  var t10, r10;
  return (t10 = rW - 1, r10 = function e15(t11) {
    for (; rY(); )
      switch (rN) {
        case t11:
          return rW;
        case 34:
        case 39:
          34 !== t11 && 39 !== t11 && e15(rN);
          break;
        case 40:
          41 === t11 && e15(t11);
          break;
        case 92:
          rY();
      }
    return rW;
  }(91 === e14 ? e14 + 2 : 40 === e14 ? e14 + 1 : e14), rB(rq, t10, r10)).trim();
}
function rQ(e14, t10, r10, n10, a2, i2, o2, s2, l2, c2, u2) {
  for (var d2 = a2 - 1, f2 = 0 === a2 ? i2 : [""], h2 = f2.length, p2 = 0, m2 = 0, g2 = 0; p2 < n10; ++p2)
    for (var b2 = 0, v2 = rB(e14, d2 + 1, d2 = rR(m2 = o2[p2])), y2 = e14; b2 < h2; ++b2)
      (y2 = (m2 > 0 ? f2[b2] + " " + v2 : rI(v2, /&\f/g, f2[b2])).trim()) && (l2[g2++] = y2);
  return rU(e14, t10, r10, 0 === a2 ? rO : s2, l2, c2, u2);
}
function r0(e14, t10, r10, n10) {
  return rU(e14, t10, r10, rD, rB(e14, 0, n10), rB(e14, n10 + 1, -1), n10);
}
function r1(e14, t10) {
  for (var r10 = "", n10 = e14.length, a2 = 0; a2 < n10; a2++)
    r10 += t10(e14[a2], a2, e14, t10) || "";
  return r10;
}
function r2(e14, t10, r10, n10) {
  switch (e14.type) {
    case "@layer":
      if (e14.children.length)
        break;
    case "@import":
    case rD:
      return e14.return = e14.return || e14.value;
    case rS:
      return "";
    case rT:
      return e14.return = e14.value + "{" + r1(e14.children, n10) + "}";
    case rO:
      e14.value = e14.props.join(",");
  }
  return rj(r10 = r1(e14.children, n10)) ? e14.return = e14.value + "{" + r10 + "}" : "";
}
var r4 = function(e14, t10, r10) {
  for (var n10 = 0, a2 = 0; n10 = a2, a2 = rX(), 38 === n10 && 12 === a2 && (t10[r10] = 1), !rK(a2); )
    rY();
  return rB(rq, e14, rW);
}, r5 = function(e14, t10) {
  var r10 = -1, n10 = 44;
  do
    switch (rK(n10)) {
      case 0:
        38 === n10 && 12 === rX() && (t10[r10] = 1), e14[r10] += r4(rW - 1, t10, r10);
        break;
      case 2:
        e14[r10] += rZ(n10);
        break;
      case 4:
        if (44 === n10) {
          e14[++r10] = 58 === rX() ? "&\f" : "", t10[r10] = e14[r10].length;
          break;
        }
      default:
        e14[r10] += r$(n10);
    }
  while (n10 = rY());
  return e14;
}, r3 = function(e14, t10) {
  var r10;
  return r10 = r5(rJ(e14), t10), rq = "", r10;
}, r8 = /* @__PURE__ */ new WeakMap(), r6 = function(e14) {
  if ("rule" === e14.type && e14.parent && !(e14.length < 1)) {
    for (var t10 = e14.value, r10 = e14.parent, n10 = e14.column === r10.column && e14.line === r10.line; "rule" !== r10.type; )
      if (!(r10 = r10.parent))
        return;
    if ((1 !== e14.props.length || 58 === t10.charCodeAt(0) || r8.get(r10)) && !n10) {
      r8.set(e14, true);
      for (var a2 = [], i2 = r3(t10, a2), o2 = r10.props, s2 = 0, l2 = 0; s2 < i2.length; s2++)
        for (var c2 = 0; c2 < o2.length; c2++, l2++)
          e14.props[l2] = a2[s2] ? i2[s2].replace(/&\f/g, o2[c2]) : o2[c2] + " " + i2[s2];
    }
  }
}, r9 = function(e14) {
  if ("decl" === e14.type) {
    var t10 = e14.value;
    108 === t10.charCodeAt(0) && 98 === t10.charCodeAt(2) && (e14.return = "", e14.value = "");
  }
}, r7 = [function(e14, t10, r10, n10) {
  if (e14.length > -1 && !e14.return)
    switch (e14.type) {
      case rD:
        e14.return = function e15(t11, r11) {
          switch (45 ^ rF(t11, 0) ? (((r11 << 2 ^ rF(t11, 0)) << 2 ^ rF(t11, 1)) << 2 ^ rF(t11, 2)) << 2 ^ rF(t11, 3) : 0) {
            case 5103:
              return r_ + "print-" + t11 + t11;
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
              return r_ + t11 + t11;
            case 5349:
            case 4246:
            case 4810:
            case 6968:
            case 2756:
              return r_ + t11 + rP + t11 + rC + t11 + t11;
            case 6828:
            case 4268:
              return r_ + t11 + rC + t11 + t11;
            case 6165:
              return r_ + t11 + rC + "flex-" + t11 + t11;
            case 5187:
              return r_ + t11 + rI(t11, /(\w+).+(:[^]+)/, r_ + "box-$1$2" + rC + "flex-$1$2") + t11;
            case 5443:
              return r_ + t11 + rC + "flex-item-" + rI(t11, /flex-|-self/, "") + t11;
            case 4675:
              return r_ + t11 + rC + "flex-line-pack" + rI(t11, /align-content|flex-|-self/, "") + t11;
            case 5548:
              return r_ + t11 + rC + rI(t11, "shrink", "negative") + t11;
            case 5292:
              return r_ + t11 + rC + rI(t11, "basis", "preferred-size") + t11;
            case 6060:
              return r_ + "box-" + rI(t11, "-grow", "") + r_ + t11 + rC + rI(t11, "grow", "positive") + t11;
            case 4554:
              return r_ + rI(t11, /([^-])(transform)/g, "$1" + r_ + "$2") + t11;
            case 6187:
              return rI(rI(rI(t11, /(zoom-|grab)/, r_ + "$1"), /(image-set)/, r_ + "$1"), t11, "") + t11;
            case 5495:
            case 3959:
              return rI(t11, /(image-set\([^]*)/, r_ + "$1$`$1");
            case 4968:
              return rI(rI(t11, /(.+:)(flex-)?(.*)/, r_ + "box-pack:$3" + rC + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + r_ + t11 + t11;
            case 4095:
            case 3583:
            case 4068:
            case 2532:
              return rI(t11, /(.+)-inline(.+)/, r_ + "$1$2") + t11;
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
              if (rj(t11) - 1 - r11 > 6)
                switch (rF(t11, r11 + 1)) {
                  case 109:
                    if (45 !== rF(t11, r11 + 4))
                      break;
                  case 102:
                    return rI(t11, /(.+:)(.+)-([^]+)/, "$1" + r_ + "$2-$3$1" + rP + (108 == rF(t11, r11 + 3) ? "$3" : "$2-$3")) + t11;
                  case 115:
                    return ~rL(t11, "stretch") ? e15(rI(t11, "stretch", "fill-available"), r11) + t11 : t11;
                }
              break;
            case 4949:
              if (115 !== rF(t11, r11 + 1))
                break;
            case 6444:
              switch (rF(t11, rj(t11) - 3 - (~rL(t11, "!important") && 10))) {
                case 107:
                  return rI(t11, ":", ":" + r_) + t11;
                case 101:
                  return rI(t11, /(.+:)([^;!]+)(;|!.+)?/, "$1" + r_ + (45 === rF(t11, 14) ? "inline-" : "") + "box$3$1" + r_ + "$2$3$1" + rC + "$2box$3") + t11;
              }
              break;
            case 5936:
              switch (rF(t11, r11 + 11)) {
                case 114:
                  return r_ + t11 + rC + rI(t11, /[svh]\w+-[tblr]{2}/, "tb") + t11;
                case 108:
                  return r_ + t11 + rC + rI(t11, /[svh]\w+-[tblr]{2}/, "tb-rl") + t11;
                case 45:
                  return r_ + t11 + rC + rI(t11, /[svh]\w+-[tblr]{2}/, "lr") + t11;
              }
              return r_ + t11 + rC + t11 + t11;
          }
          return t11;
        }(e14.value, e14.length);
        break;
      case rT:
        return r1([rG(e14, { value: rI(e14.value, "@", "@" + r_) })], n10);
      case rO:
        if (e14.length)
          return e14.props.map(function(t11) {
            var r11;
            switch (r11 = t11, (r11 = /(::plac\w+|:read-\w+)/.exec(r11)) ? r11[0] : r11) {
              case ":read-only":
              case ":read-write":
                return r1([rG(e14, { props: [rI(t11, /:(read-\w+)/, ":" + rP + "$1")] })], n10);
              case "::placeholder":
                return r1([rG(e14, { props: [rI(t11, /:(plac\w+)/, ":" + r_ + "input-$1")] }), rG(e14, { props: [rI(t11, /:(plac\w+)/, ":" + rP + "$1")] }), rG(e14, { props: [rI(t11, /:(plac\w+)/, rC + "input-$1")] })], n10);
            }
            return "";
          }).join("");
    }
}], ne = function(e14) {
  var t10, r10, n10, a2, i2, o2 = e14.key;
  if ("css" === o2) {
    var s2 = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(s2, function(e15) {
      -1 !== e15.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e15), e15.setAttribute("data-s", ""));
    });
  }
  var l2 = e14.stylisPlugins || r7, c2 = {}, u2 = [];
  a2 = e14.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + o2 + ' "]'), function(e15) {
    for (var t11 = e15.getAttribute("data-emotion").split(" "), r11 = 1; r11 < t11.length; r11++)
      c2[t11[r11]] = true;
    u2.push(e15);
  });
  var d2 = (r10 = (t10 = [r6, r9].concat(l2, [r2, (n10 = function(e15) {
    i2.insert(e15);
  }, function(e15) {
    !e15.root && (e15 = e15.return) && n10(e15);
  })])).length, function(e15, n11, a3, i3) {
    for (var o3 = "", s3 = 0; s3 < r10; s3++)
      o3 += t10[s3](e15, n11, a3, i3) || "";
    return o3;
  }), f2 = function(e15) {
    var t11, r11;
    return r1((r11 = function e16(t12, r12, n11, a3, i3, o3, s3, l3, c3) {
      for (var u3, d3 = 0, f3 = 0, h3 = s3, p2 = 0, m2 = 0, g2 = 0, b2 = 1, v2 = 1, y2 = 1, x2 = 0, w2 = "", k2 = i3, M2 = o3, C2 = a3, P2 = w2; v2; )
        switch (g2 = x2, x2 = rY()) {
          case 40:
            if (108 != g2 && 58 == rF(P2, h3 - 1)) {
              -1 != rL(P2 += rI(rZ(x2), "&", "&\f"), "&\f") && (y2 = -1);
              break;
            }
          case 34:
          case 39:
          case 91:
            P2 += rZ(x2);
            break;
          case 9:
          case 10:
          case 13:
          case 32:
            P2 += function(e17) {
              for (; rN = rX(); )
                if (rN < 33)
                  rY();
                else
                  break;
              return rK(e17) > 2 || rK(rN) > 3 ? "" : " ";
            }(g2);
            break;
          case 92:
            P2 += function(e17, t13) {
              for (var r13; --t13 && rY() && !(rN < 48) && !(rN > 102) && (!(rN > 57) || !(rN < 65)) && (!(rN > 70) || !(rN < 97)); )
                ;
              return r13 = rW + (t13 < 6 && 32 == rX() && 32 == rY()), rB(rq, e17, r13);
            }(rW - 1, 7);
            continue;
          case 47:
            switch (rX()) {
              case 42:
              case 47:
                rE(rU(u3 = function(e17, t13) {
                  for (; rY(); )
                    if (e17 + rN === 57)
                      break;
                    else if (e17 + rN === 84 && 47 === rX())
                      break;
                  return "/*" + rB(rq, t13, rW - 1) + "*" + r$(47 === e17 ? e17 : rY());
                }(rY(), rW), r12, n11, rS, r$(rN), rB(u3, 2, -2), 0), c3);
                break;
              default:
                P2 += "/";
            }
            break;
          case 123 * b2:
            l3[d3++] = rj(P2) * y2;
          case 125 * b2:
          case 59:
          case 0:
            switch (x2) {
              case 0:
              case 125:
                v2 = 0;
              case 59 + f3:
                -1 == y2 && (P2 = rI(P2, /\f/g, "")), m2 > 0 && rj(P2) - h3 && rE(m2 > 32 ? r0(P2 + ";", a3, n11, h3 - 1) : r0(rI(P2, " ", "") + ";", a3, n11, h3 - 2), c3);
                break;
              case 59:
                P2 += ";";
              default:
                if (rE(C2 = rQ(P2, r12, n11, d3, f3, i3, l3, w2, k2 = [], M2 = [], h3), o3), 123 === x2) {
                  if (0 === f3)
                    e16(P2, r12, C2, C2, k2, o3, h3, l3, M2);
                  else
                    switch (99 === p2 && 110 === rF(P2, 3) ? 100 : p2) {
                      case 100:
                      case 108:
                      case 109:
                      case 115:
                        e16(t12, C2, C2, a3 && rE(rQ(t12, C2, C2, 0, 0, i3, l3, w2, i3, k2 = [], h3), M2), i3, M2, h3, l3, a3 ? k2 : M2);
                        break;
                      default:
                        e16(P2, C2, C2, C2, [""], M2, 0, l3, M2);
                    }
                }
            }
            d3 = f3 = m2 = 0, b2 = y2 = 1, w2 = P2 = "", h3 = s3;
            break;
          case 58:
            h3 = 1 + rj(P2), m2 = g2;
          default:
            if (b2 < 1) {
              if (123 == x2)
                --b2;
              else if (125 == x2 && 0 == b2++ && 125 == (rN = rW > 0 ? rF(rq, --rW) : 0, rH--, 10 === rN && (rH = 1, rV--), rN))
                continue;
            }
            switch (P2 += r$(x2), x2 * b2) {
              case 38:
                y2 = f3 > 0 ? 1 : (P2 += "\f", -1);
                break;
              case 44:
                l3[d3++] = (rj(P2) - 1) * y2, y2 = 1;
                break;
              case 64:
                45 === rX() && (P2 += rZ(rY())), p2 = rX(), f3 = h3 = rj(w2 = P2 += function(e17) {
                  for (; !rK(rX()); )
                    rY();
                  return rB(rq, e17, rW);
                }(rW)), x2++;
                break;
              case 45:
                45 === g2 && 2 == rj(P2) && (b2 = 0);
            }
        }
      return o3;
    }("", null, null, null, [""], t11 = rJ(t11 = e15), 0, [0], t11), rq = "", r11), d2);
  }, h2 = { key: o2, sheet: new rM({ key: o2, container: a2, nonce: e14.nonce, speedy: e14.speedy, prepend: e14.prepend, insertionPoint: e14.insertionPoint }), nonce: e14.nonce, inserted: c2, registered: {}, insert: function(e15, t11, r11, n11) {
    i2 = r11, f2(e15 ? e15 + "{" + t11.styles + "}" : t11.styles), n11 && (h2.inserted[t11.name] = true);
  } };
  return h2.sheet.hydrate(u2), h2;
};
let nt = n(() => ne({ key: "css" }), { name: "Cache" }), nr = (e14) => (t10) => {
  if (t10.serialized) {
    if (t10.withoutScoping)
      e14.insert("", t10.serialized, e14.sheet, true);
    else {
      var r10;
      rk(e14, t10.serialized, null === (r10 = t10.isStringTag) || void 0 === r10 || r10);
    }
  }
}, nn = e({ sx: L(), component: L().optional().default("div") }, (e14, r10) => {
  var n10;
  let { slots: i2 } = r10, o2 = rx.use(), s2 = nt.use(), l2 = o2.unstable_css(s2, null !== (n10 = e14.sx) && void 0 !== n10 ? n10 : {}), c2 = () => "0" != l2.name ? `${s2.key}-${l2.name}` : "", u2 = nr(s2);
  return a(() => {
    u2({ serialized: l2, isStringTag: true });
  }), () => {
    var r11;
    let n11 = null !== (r11 = e14.component) && void 0 !== r11 ? r11 : "div";
    return t(n11, { class: c2(), children: i2 });
  };
}), na = Object.assign(nn, { displayName: "Box" }), ni = (e14, r10) => (n10) => {
  let a2 = {};
  for (let t10 in e14)
    "component" !== t10 && "sx" !== t10 && e14[t10] && (a2[`data-${t10}`] = e14[t10]);
  return t(n10, { ...a2, children: r10.slots });
};
function no(t10, r10, n10) {
  var l2;
  let c2 = null !== (l2 = P(r10) ? r10 : n10) && void 0 !== l2 ? l2 : ni, u2 = y(r10) ? r10 : {};
  return (r11) => {
    let n11 = e({ ...u2, sx: L().optional(), component: L().optional() }, (e14, l3) => {
      let u3 = rx.use(), d2 = nt.use(), f2 = nr(d2);
      r11.label = n11.name;
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
        let r12 = b2(na);
        return r12 ? s(r12, { component: e14.component || t10, sx: e14.sx, class: m2() }) : null;
      };
    });
    return n11.__styled = true, n11;
  };
}
let ns = e({ styles: L() }, (e14) => {
  let { styles: t10 } = e14, r10 = rx.use(), n10 = nt.use(), a2 = nr(n10), i2 = r10.unstable_css(n10, v(t10) ? { "&": t10 } : t10);
  return o(() => {
    a2({ serialized: i2, withoutScoping: true });
  }), () => null;
}), nl = Object.assign(ns, { displayName: "GlobalStyle" }), nc = e(() => {
  let e14 = rx.use(), r10 = e14.rootCSSVars;
  return () => t(nl, { styles: { ":host, :root, [data-theme]": r10, "*, *::after, *::before": { boxSizing: "border-box" }, html: { fontSize: "10px" }, a: { color: "inherit" }, body: { textStyle: "sys.body-medium" } } });
}), nu = Object.assign(nc, { displayName: "CSSReset" }), nd = n(() => ({ mountPoint: () => document.body }), { name: "OverlaySetting" }), nf = n(() => new nh(i(null), i(null), () => false), { name: "Overlay" });
class nh {
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
let np = e({ isOpen: F().optional(), style: L().optional(), contentRef: L().optional(), triggerRef: L().optional(), onClickOutside: L(), onEscKeydown: L(), onContentBeforeMount: L(), $transition: L().optional(), $default: L().optional() }, (e14, r10) => {
  var n10;
  let { slots: a2, attrs: o2, emit: l2 } = r10, m2 = e14.contentRef || i(null), g2 = new nh(null !== (n10 = e14.triggerRef) && void 0 !== n10 ? n10 : i(null), m2, () => !!e14.isOpen), b2 = nd.use(), v2 = nf.use();
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
    let n11 = e14.isOpen ? s(t("div", { ...o2, ref: m2, style: e14.style, children: t(nf, { value: g2, children: null === (r11 = a2.default) || void 0 === r11 ? void 0 : r11.call(a2) }) }), { onVnodeBeforeMount: () => {
      l2("content-before-mount");
    } }) : null;
    return t(f, { to: b2.mountPoint(), children: a2.transition ? a2.transition({ content: n11 }) : n11 });
  };
}, { inheritAttrs: false, name: "Overlay" }), nm = Object.assign(np, { displayName: "Overlay" });
var ng = "bottom", nb = "right", nv = "left", ny = "auto", nx = ["top", ng, nb, nv], nw = "start", nk = "viewport", nM = "popper", nC = nx.reduce(function(e14, t10) {
  return e14.concat([t10 + "-" + nw, t10 + "-end"]);
}, []), nP = [].concat(nx, [ny]).reduce(function(e14, t10) {
  return e14.concat([t10, t10 + "-" + nw, t10 + "-end"]);
}, []), n_ = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
function nS(e14) {
  return e14 ? (e14.nodeName || "").toLowerCase() : null;
}
function nO(e14) {
  if (null == e14)
    return window;
  if ("[object Window]" !== e14.toString()) {
    var t10 = e14.ownerDocument;
    return t10 && t10.defaultView || window;
  }
  return e14;
}
function nD(e14) {
  var t10 = nO(e14).Element;
  return e14 instanceof t10 || e14 instanceof Element;
}
function nT(e14) {
  var t10 = nO(e14).HTMLElement;
  return e14 instanceof t10 || e14 instanceof HTMLElement;
}
function nR(e14) {
  if ("undefined" == typeof ShadowRoot)
    return false;
  var t10 = nO(e14).ShadowRoot;
  return e14 instanceof t10 || e14 instanceof ShadowRoot;
}
function n$(e14) {
  return e14.split("-")[0];
}
var nA = Math.max, nI = Math.min, nL = Math.round;
function nF() {
  var e14 = navigator.userAgentData;
  return null != e14 && e14.brands && Array.isArray(e14.brands) ? e14.brands.map(function(e15) {
    return e15.brand + "/" + e15.version;
  }).join(" ") : navigator.userAgent;
}
function nB() {
  return !/^((?!chrome|android).)*safari/i.test(nF());
}
function nj(e14, t10, r10) {
  void 0 === t10 && (t10 = false), void 0 === r10 && (r10 = false);
  var n10 = e14.getBoundingClientRect(), a2 = 1, i2 = 1;
  t10 && nT(e14) && (a2 = e14.offsetWidth > 0 && nL(n10.width) / e14.offsetWidth || 1, i2 = e14.offsetHeight > 0 && nL(n10.height) / e14.offsetHeight || 1);
  var o2 = (nD(e14) ? nO(e14) : window).visualViewport, s2 = !nB() && r10, l2 = (n10.left + (s2 && o2 ? o2.offsetLeft : 0)) / a2, c2 = (n10.top + (s2 && o2 ? o2.offsetTop : 0)) / i2, u2 = n10.width / a2, d2 = n10.height / i2;
  return { width: u2, height: d2, top: c2, right: l2 + u2, bottom: c2 + d2, left: l2, x: l2, y: c2 };
}
function nE(e14) {
  return nO(e14).getComputedStyle(e14);
}
function nV(e14) {
  return ((nD(e14) ? e14.ownerDocument : e14.document) || window.document).documentElement;
}
function nH(e14) {
  return "html" === nS(e14) ? e14 : e14.assignedSlot || e14.parentNode || (nR(e14) ? e14.host : null) || nV(e14);
}
function nz(e14) {
  return nT(e14) && "fixed" !== nE(e14).position ? e14.offsetParent : null;
}
function nW(e14) {
  for (var t10 = nO(e14), r10 = nz(e14); r10 && ["table", "td", "th"].indexOf(nS(r10)) >= 0 && "static" === nE(r10).position; )
    r10 = nz(r10);
  return r10 && ("html" === nS(r10) || "body" === nS(r10) && "static" === nE(r10).position) ? t10 : r10 || function(e15) {
    var t11 = /firefox/i.test(nF());
    if (/Trident/i.test(nF()) && nT(e15) && "fixed" === nE(e15).position)
      return null;
    var r11 = nH(e15);
    for (nR(r11) && (r11 = r11.host); nT(r11) && 0 > ["html", "body"].indexOf(nS(r11)); ) {
      var n10 = nE(r11);
      if ("none" !== n10.transform || "none" !== n10.perspective || "paint" === n10.contain || -1 !== ["transform", "perspective"].indexOf(n10.willChange) || t11 && "filter" === n10.willChange || t11 && n10.filter && "none" !== n10.filter)
        return r11;
      r11 = r11.parentNode;
    }
    return null;
  }(e14) || t10;
}
function nN(e14) {
  return e14.split("-")[1];
}
var nq = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function nU(e14) {
  var t10, r10, n10, a2, i2, o2, s2, l2 = e14.popper, c2 = e14.popperRect, u2 = e14.placement, d2 = e14.variation, f2 = e14.offsets, h2 = e14.position, p2 = e14.gpuAcceleration, m2 = e14.adaptive, g2 = e14.roundOffsets, b2 = e14.isFixed, v2 = f2.x, y2 = void 0 === v2 ? 0 : v2, x2 = f2.y, w2 = void 0 === x2 ? 0 : x2, k2 = "function" == typeof g2 ? g2({ x: y2, y: w2 }) : { x: y2, y: w2 };
  y2 = k2.x, w2 = k2.y;
  var M2 = f2.hasOwnProperty("x"), C2 = f2.hasOwnProperty("y"), P2 = nv, _2 = "top", S2 = window;
  if (m2) {
    var O2 = nW(l2), D2 = "clientHeight", T2 = "clientWidth";
    O2 === nO(l2) && "static" !== nE(O2 = nV(l2)).position && "absolute" === h2 && (D2 = "scrollHeight", T2 = "scrollWidth"), ("top" === u2 || (u2 === nv || u2 === nb) && "end" === d2) && (_2 = ng, w2 -= (b2 && O2 === S2 && S2.visualViewport ? S2.visualViewport.height : O2[D2]) - c2.height, w2 *= p2 ? 1 : -1), (u2 === nv || ("top" === u2 || u2 === ng) && "end" === d2) && (P2 = nb, y2 -= (b2 && O2 === S2 && S2.visualViewport ? S2.visualViewport.width : O2[T2]) - c2.width, y2 *= p2 ? 1 : -1);
  }
  var R2 = Object.assign({ position: h2 }, m2 && nq), $2 = true === g2 ? (t10 = { x: y2, y: w2 }, r10 = nO(l2), n10 = t10.x, a2 = t10.y, { x: nL(n10 * (i2 = r10.devicePixelRatio || 1)) / i2 || 0, y: nL(a2 * i2) / i2 || 0 }) : { x: y2, y: w2 };
  return (y2 = $2.x, w2 = $2.y, p2) ? Object.assign({}, R2, ((s2 = {})[_2] = C2 ? "0" : "", s2[P2] = M2 ? "0" : "", s2.transform = 1 >= (S2.devicePixelRatio || 1) ? "translate(" + y2 + "px, " + w2 + "px)" : "translate3d(" + y2 + "px, " + w2 + "px, 0)", s2)) : Object.assign({}, R2, ((o2 = {})[_2] = C2 ? w2 + "px" : "", o2[P2] = M2 ? y2 + "px" : "", o2.transform = "", o2));
}
var nG = { passive: true }, nY = { left: "right", right: "left", bottom: "top", top: "bottom" };
function nX(e14) {
  return e14.replace(/left|right|bottom|top/g, function(e15) {
    return nY[e15];
  });
}
var nK = { start: "end", end: "start" };
function nJ(e14) {
  return e14.replace(/start|end/g, function(e15) {
    return nK[e15];
  });
}
function nZ(e14) {
  var t10 = nO(e14);
  return { scrollLeft: t10.pageXOffset, scrollTop: t10.pageYOffset };
}
function nQ(e14) {
  return nj(nV(e14)).left + nZ(e14).scrollLeft;
}
function n0(e14) {
  var t10 = nE(e14), r10 = t10.overflow, n10 = t10.overflowX, a2 = t10.overflowY;
  return /auto|scroll|overlay|hidden/.test(r10 + a2 + n10);
}
function n1(e14, t10) {
  void 0 === t10 && (t10 = []);
  var r10, n10 = function e15(t11) {
    return ["html", "body", "#document"].indexOf(nS(t11)) >= 0 ? t11.ownerDocument.body : nT(t11) && n0(t11) ? t11 : e15(nH(t11));
  }(e14), a2 = n10 === (null == (r10 = e14.ownerDocument) ? void 0 : r10.body), i2 = nO(n10), o2 = a2 ? [i2].concat(i2.visualViewport || [], n0(n10) ? n10 : []) : n10, s2 = t10.concat(o2);
  return a2 ? s2 : s2.concat(n1(nH(o2)));
}
function n2(e14) {
  return Object.assign({}, e14, { left: e14.x, top: e14.y, right: e14.x + e14.width, bottom: e14.y + e14.height });
}
function n4(e14, t10, r10) {
  var n10, a2, i2, o2, s2, l2, c2, u2, d2, f2;
  return t10 === nk ? n2(function(e15, t11) {
    var r11 = nO(e15), n11 = nV(e15), a3 = r11.visualViewport, i3 = n11.clientWidth, o3 = n11.clientHeight, s3 = 0, l3 = 0;
    if (a3) {
      i3 = a3.width, o3 = a3.height;
      var c3 = nB();
      (c3 || !c3 && "fixed" === t11) && (s3 = a3.offsetLeft, l3 = a3.offsetTop);
    }
    return { width: i3, height: o3, x: s3 + nQ(e15), y: l3 };
  }(e14, r10)) : nD(t10) ? ((n10 = nj(t10, false, "fixed" === r10)).top = n10.top + t10.clientTop, n10.left = n10.left + t10.clientLeft, n10.bottom = n10.top + t10.clientHeight, n10.right = n10.left + t10.clientWidth, n10.width = t10.clientWidth, n10.height = t10.clientHeight, n10.x = n10.left, n10.y = n10.top, n10) : n2((a2 = nV(e14), o2 = nV(a2), s2 = nZ(a2), l2 = null == (i2 = a2.ownerDocument) ? void 0 : i2.body, c2 = nA(o2.scrollWidth, o2.clientWidth, l2 ? l2.scrollWidth : 0, l2 ? l2.clientWidth : 0), u2 = nA(o2.scrollHeight, o2.clientHeight, l2 ? l2.scrollHeight : 0, l2 ? l2.clientHeight : 0), d2 = -s2.scrollLeft + nQ(a2), f2 = -s2.scrollTop, "rtl" === nE(l2 || o2).direction && (d2 += nA(o2.clientWidth, l2 ? l2.clientWidth : 0) - c2), { width: c2, height: u2, x: d2, y: f2 }));
}
function n5(e14) {
  var t10, r10 = e14.reference, n10 = e14.element, a2 = e14.placement, i2 = a2 ? n$(a2) : null, o2 = a2 ? nN(a2) : null, s2 = r10.x + r10.width / 2 - n10.width / 2, l2 = r10.y + r10.height / 2 - n10.height / 2;
  switch (i2) {
    case "top":
      t10 = { x: s2, y: r10.y - n10.height };
      break;
    case ng:
      t10 = { x: s2, y: r10.y + r10.height };
      break;
    case nb:
      t10 = { x: r10.x + r10.width, y: l2 };
      break;
    case nv:
      t10 = { x: r10.x - n10.width, y: l2 };
      break;
    default:
      t10 = { x: r10.x, y: r10.y };
  }
  var c2 = i2 ? ["top", "bottom"].indexOf(i2) >= 0 ? "x" : "y" : null;
  if (null != c2) {
    var u2 = "y" === c2 ? "height" : "width";
    switch (o2) {
      case nw:
        t10[c2] = t10[c2] - (r10[u2] / 2 - n10[u2] / 2);
        break;
      case "end":
        t10[c2] = t10[c2] + (r10[u2] / 2 - n10[u2] / 2);
    }
  }
  return t10;
}
function n3(e14, t10) {
  void 0 === t10 && (t10 = {});
  var r10, n10, a2, i2, o2, s2, l2, c2 = t10, u2 = c2.placement, d2 = void 0 === u2 ? e14.placement : u2, f2 = c2.strategy, h2 = void 0 === f2 ? e14.strategy : f2, p2 = c2.boundary, m2 = c2.rootBoundary, g2 = c2.elementContext, b2 = void 0 === g2 ? nM : g2, v2 = c2.altBoundary, y2 = c2.padding, x2 = void 0 === y2 ? 0 : y2, w2 = Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, "number" != typeof x2 ? x2 : nx.reduce(function(e15, t11) {
    return e15[t11] = x2, e15;
  }, {})), k2 = e14.rects.popper, M2 = e14.elements[void 0 !== v2 && v2 ? b2 === nM ? "reference" : nM : b2], C2 = (r10 = nD(M2) ? M2 : M2.contextElement || nV(e14.elements.popper), s2 = (o2 = [].concat("clippingParents" === (n10 = void 0 === p2 ? "clippingParents" : p2) ? (a2 = n1(nH(r10)), nD(i2 = ["absolute", "fixed"].indexOf(nE(r10).position) >= 0 && nT(r10) ? nW(r10) : r10) ? a2.filter(function(e15) {
    return nD(e15) && function(e16, t11) {
      var r11 = t11.getRootNode && t11.getRootNode();
      if (e16.contains(t11))
        return true;
      if (r11 && nR(r11)) {
        var n11 = t11;
        do {
          if (n11 && e16.isSameNode(n11))
            return true;
          n11 = n11.parentNode || n11.host;
        } while (n11);
      }
      return false;
    }(e15, i2) && "body" !== nS(e15);
  }) : []) : [].concat(n10), [void 0 === m2 ? nk : m2]))[0], (l2 = o2.reduce(function(e15, t11) {
    var n11 = n4(r10, t11, h2);
    return e15.top = nA(n11.top, e15.top), e15.right = nI(n11.right, e15.right), e15.bottom = nI(n11.bottom, e15.bottom), e15.left = nA(n11.left, e15.left), e15;
  }, n4(r10, s2, h2))).width = l2.right - l2.left, l2.height = l2.bottom - l2.top, l2.x = l2.left, l2.y = l2.top, l2), P2 = nj(e14.elements.reference), _2 = n5({ reference: P2, element: k2, strategy: "absolute", placement: d2 }), S2 = n2(Object.assign({}, k2, _2)), O2 = b2 === nM ? S2 : P2, D2 = { top: C2.top - O2.top + w2.top, bottom: O2.bottom - C2.bottom + w2.bottom, left: C2.left - O2.left + w2.left, right: O2.right - C2.right + w2.right }, T2 = e14.modifiersData.offset;
  if (b2 === nM && T2) {
    var R2 = T2[d2];
    Object.keys(D2).forEach(function(e15) {
      var t11 = [nb, ng].indexOf(e15) >= 0 ? 1 : -1, r11 = ["top", ng].indexOf(e15) >= 0 ? "y" : "x";
      D2[e15] += R2[r11] * t11;
    });
  }
  return D2;
}
let n8 = { name: "flip", enabled: true, phase: "main", fn: function(e14) {
  var t10 = e14.state, r10 = e14.options, n10 = e14.name;
  if (!t10.modifiersData[n10]._skip) {
    for (var a2 = r10.mainAxis, i2 = void 0 === a2 || a2, o2 = r10.altAxis, s2 = void 0 === o2 || o2, l2 = r10.fallbackPlacements, c2 = r10.padding, u2 = r10.boundary, d2 = r10.rootBoundary, f2 = r10.altBoundary, h2 = r10.flipVariations, p2 = void 0 === h2 || h2, m2 = r10.allowedAutoPlacements, g2 = t10.options.placement, b2 = n$(g2) === g2, v2 = l2 || (b2 || !p2 ? [nX(g2)] : function(e15) {
      if (n$(e15) === ny)
        return [];
      var t11 = nX(e15);
      return [nJ(e15), t11, nJ(t11)];
    }(g2)), y2 = [g2].concat(v2).reduce(function(e15, r11) {
      var n11, a3, i3, o3, s3, l3, f3, h3, g3, b3, v3, y3;
      return e15.concat(n$(r11) === ny ? (a3 = (n11 = { placement: r11, boundary: u2, rootBoundary: d2, padding: c2, flipVariations: p2, allowedAutoPlacements: m2 }).placement, i3 = n11.boundary, o3 = n11.rootBoundary, s3 = n11.padding, l3 = n11.flipVariations, h3 = void 0 === (f3 = n11.allowedAutoPlacements) ? nP : f3, 0 === (v3 = (b3 = (g3 = nN(a3)) ? l3 ? nC : nC.filter(function(e16) {
        return nN(e16) === g3;
      }) : nx).filter(function(e16) {
        return h3.indexOf(e16) >= 0;
      })).length && (v3 = b3), Object.keys(y3 = v3.reduce(function(e16, r12) {
        return e16[r12] = n3(t10, { placement: r12, boundary: i3, rootBoundary: o3, padding: s3 })[n$(r12)], e16;
      }, {})).sort(function(e16, t11) {
        return y3[e16] - y3[t11];
      })) : r11);
    }, []), x2 = t10.rects.reference, w2 = t10.rects.popper, k2 = /* @__PURE__ */ new Map(), M2 = true, C2 = y2[0], P2 = 0; P2 < y2.length; P2++) {
      var _2 = y2[P2], S2 = n$(_2), O2 = nN(_2) === nw, D2 = ["top", ng].indexOf(S2) >= 0, T2 = D2 ? "width" : "height", R2 = n3(t10, { placement: _2, boundary: u2, rootBoundary: d2, altBoundary: f2, padding: c2 }), $2 = D2 ? O2 ? nb : nv : O2 ? ng : "top";
      x2[T2] > w2[T2] && ($2 = nX($2));
      var A2 = nX($2), I2 = [];
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
    t10.placement !== C2 && (t10.modifiersData[n10]._skip = true, t10.placement = C2, t10.reset = true);
  }
}, requiresIfExists: ["offset"], data: { _skip: false } };
var n6 = { placement: "bottom", modifiers: [], strategy: "absolute" };
function n9() {
  for (var e14 = arguments.length, t10 = Array(e14), r10 = 0; r10 < e14; r10++)
    t10[r10] = arguments[r10];
  return !t10.some(function(e15) {
    return !(e15 && "function" == typeof e15.getBoundingClientRect);
  });
}
var n7 = (N = void 0 === (W = (z = { defaultModifiers: [{ name: "eventListeners", enabled: true, phase: "write", fn: function() {
}, effect: function(e14) {
  var t10 = e14.state, r10 = e14.instance, n10 = e14.options, a2 = n10.scroll, i2 = void 0 === a2 || a2, o2 = n10.resize, s2 = void 0 === o2 || o2, l2 = nO(t10.elements.popper), c2 = [].concat(t10.scrollParents.reference, t10.scrollParents.popper);
  return i2 && c2.forEach(function(e15) {
    e15.addEventListener("scroll", r10.update, nG);
  }), s2 && l2.addEventListener("resize", r10.update, nG), function() {
    i2 && c2.forEach(function(e15) {
      e15.removeEventListener("scroll", r10.update, nG);
    }), s2 && l2.removeEventListener("resize", r10.update, nG);
  };
}, data: {} }, { name: "popperOffsets", enabled: true, phase: "read", fn: function(e14) {
  var t10 = e14.state, r10 = e14.name;
  t10.modifiersData[r10] = n5({ reference: t10.rects.reference, element: t10.rects.popper, strategy: "absolute", placement: t10.placement });
}, data: {} }, { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: function(e14) {
  var t10 = e14.state, r10 = e14.options, n10 = r10.gpuAcceleration, a2 = r10.adaptive, i2 = r10.roundOffsets, o2 = void 0 === i2 || i2, s2 = { placement: n$(t10.placement), variation: nN(t10.placement), popper: t10.elements.popper, popperRect: t10.rects.popper, gpuAcceleration: void 0 === n10 || n10, isFixed: "fixed" === t10.options.strategy };
  null != t10.modifiersData.popperOffsets && (t10.styles.popper = Object.assign({}, t10.styles.popper, nU(Object.assign({}, s2, { offsets: t10.modifiersData.popperOffsets, position: t10.options.strategy, adaptive: void 0 === a2 || a2, roundOffsets: o2 })))), null != t10.modifiersData.arrow && (t10.styles.arrow = Object.assign({}, t10.styles.arrow, nU(Object.assign({}, s2, { offsets: t10.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: o2 })))), t10.attributes.popper = Object.assign({}, t10.attributes.popper, { "data-popper-placement": t10.placement });
}, data: {} }, { name: "applyStyles", enabled: true, phase: "write", fn: function(e14) {
  var t10 = e14.state;
  Object.keys(t10.elements).forEach(function(e15) {
    var r10 = t10.styles[e15] || {}, n10 = t10.attributes[e15] || {}, a2 = t10.elements[e15];
    nT(a2) && nS(a2) && (Object.assign(a2.style, r10), Object.keys(n10).forEach(function(e16) {
      var t11 = n10[e16];
      false === t11 ? a2.removeAttribute(e16) : a2.setAttribute(e16, true === t11 ? "" : t11);
    }));
  });
}, effect: function(e14) {
  var t10 = e14.state, r10 = { popper: { position: t10.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t10.elements.popper.style, r10.popper), t10.styles = r10, t10.elements.arrow && Object.assign(t10.elements.arrow.style, r10.arrow), function() {
    Object.keys(t10.elements).forEach(function(e15) {
      var n10 = t10.elements[e15], a2 = t10.attributes[e15] || {}, i2 = Object.keys(t10.styles.hasOwnProperty(e15) ? t10.styles[e15] : r10[e15]).reduce(function(e16, t11) {
        return e16[t11] = "", e16;
      }, {});
      nT(n10) && nS(n10) && (Object.assign(n10.style, i2), Object.keys(a2).forEach(function(e16) {
        n10.removeAttribute(e16);
      }));
    });
  };
}, requires: ["computeStyles"] }] }).defaultModifiers) ? [] : W, U = void 0 === (q = z.defaultOptions) ? n6 : q, function(e14, t10, r10) {
  void 0 === r10 && (r10 = U);
  var n10, a2 = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, n6, U), modifiersData: {}, elements: { reference: e14, popper: t10 }, attributes: {}, styles: {} }, i2 = [], o2 = false, s2 = { state: a2, setOptions: function(r11) {
    var n11, o3, c2, u2, d2, f2 = "function" == typeof r11 ? r11(a2.options) : r11;
    l2(), a2.options = Object.assign({}, U, a2.options, f2), a2.scrollParents = { reference: nD(e14) ? n1(e14) : e14.contextElement ? n1(e14.contextElement) : [], popper: n1(t10) };
    var h2 = (o3 = Object.keys(n11 = [].concat(N, a2.options.modifiers).reduce(function(e15, t11) {
      var r12 = e15[t11.name];
      return e15[t11.name] = r12 ? Object.assign({}, r12, t11, { options: Object.assign({}, r12.options, t11.options), data: Object.assign({}, r12.data, t11.data) }) : t11, e15;
    }, {})).map(function(e15) {
      return n11[e15];
    }), c2 = /* @__PURE__ */ new Map(), u2 = /* @__PURE__ */ new Set(), d2 = [], o3.forEach(function(e15) {
      c2.set(e15.name, e15);
    }), o3.forEach(function(e15) {
      u2.has(e15.name) || function e16(t11) {
        u2.add(t11.name), [].concat(t11.requires || [], t11.requiresIfExists || []).forEach(function(t12) {
          if (!u2.has(t12)) {
            var r12 = c2.get(t12);
            r12 && e16(r12);
          }
        }), d2.push(t11);
      }(e15);
    }), n_.reduce(function(e15, t11) {
      return e15.concat(d2.filter(function(e16) {
        return e16.phase === t11;
      }));
    }, []));
    return a2.orderedModifiers = h2.filter(function(e15) {
      return e15.enabled;
    }), a2.orderedModifiers.forEach(function(e15) {
      var t11 = e15.name, r12 = e15.options, n12 = e15.effect;
      if ("function" == typeof n12) {
        var o4 = n12({ state: a2, name: t11, instance: s2, options: void 0 === r12 ? {} : r12 });
        i2.push(o4 || function() {
        });
      }
    }), s2.update();
  }, forceUpdate: function() {
    if (!o2) {
      var e15, t11, r11, n11, i3, l3, c2, u2, d2, f2, h2, p2, m2, g2, b2, v2 = a2.elements, y2 = v2.reference, x2 = v2.popper;
      if (n9(y2, x2)) {
        a2.rects = { reference: (t11 = nW(x2), r11 = "fixed" === a2.options.strategy, n11 = nT(t11), u2 = nT(t11) && (l3 = nL((i3 = t11.getBoundingClientRect()).width) / t11.offsetWidth || 1, c2 = nL(i3.height) / t11.offsetHeight || 1, 1 !== l3 || 1 !== c2), d2 = nV(t11), f2 = nj(y2, u2, r11), h2 = { scrollLeft: 0, scrollTop: 0 }, p2 = { x: 0, y: 0 }, (n11 || !n11 && !r11) && (("body" !== nS(t11) || n0(d2)) && (h2 = (e15 = t11) !== nO(e15) && nT(e15) ? { scrollLeft: e15.scrollLeft, scrollTop: e15.scrollTop } : nZ(e15)), nT(t11) ? (p2 = nj(t11, true), p2.x += t11.clientLeft, p2.y += t11.clientTop) : d2 && (p2.x = nQ(d2))), { x: f2.left + h2.scrollLeft - p2.x, y: f2.top + h2.scrollTop - p2.y, width: f2.width, height: f2.height }), popper: (m2 = nj(x2), g2 = x2.offsetWidth, b2 = x2.offsetHeight, 1 >= Math.abs(m2.width - g2) && (g2 = m2.width), 1 >= Math.abs(m2.height - b2) && (b2 = m2.height), { x: x2.offsetLeft, y: x2.offsetTop, width: g2, height: b2 }) }, a2.reset = false, a2.placement = a2.options.placement, a2.orderedModifiers.forEach(function(e16) {
          return a2.modifiersData[e16.name] = Object.assign({}, e16.data);
        });
        for (var w2 = 0; w2 < a2.orderedModifiers.length; w2++) {
          if (true === a2.reset) {
            a2.reset = false, w2 = -1;
            continue;
          }
          var k2 = a2.orderedModifiers[w2], M2 = k2.fn, C2 = k2.options, P2 = void 0 === C2 ? {} : C2, _2 = k2.name;
          "function" == typeof M2 && (a2 = M2({ state: a2, options: P2, name: _2, instance: s2 }) || a2);
        }
      }
    }
  }, update: function() {
    return n10 || (n10 = new Promise(function(e15) {
      Promise.resolve().then(function() {
        n10 = void 0, e15(new Promise(function(e16) {
          s2.forceUpdate(), e16(a2);
        }));
      });
    })), n10;
  }, destroy: function() {
    l2(), o2 = true;
  } };
  if (!n9(e14, t10))
    return s2;
  function l2() {
    i2.forEach(function(e15) {
      return e15();
    }), i2 = [];
  }
  return s2.setOptions(r10).then(function(e15) {
    !o2 && r10.onFirstUpdate && r10.onFirstUpdate(e15);
  }), s2;
});
function ae(e14, t10) {
  return { fn: e14, enabled: true, ...t10 };
}
let at = e({ isOpen: nm.propTypes.isOpen, onClickOutside: nm.propTypes.onClickOutside, placement: L().optional(), modifiers: L().optional(), $transition: nm.propTypes.$transition, $content: L(), $default: L() }, (e14, r10) => {
  let { slots: n10, emit: a2, attrs: o2 } = r10, l2 = i(null), c2 = i(null);
  return m(() => c2.value, (t10) => {
    if (t10) {
      var r11, n11;
      n7(l2.value, t10, { placement: null !== (r11 = e14.placement) && void 0 !== r11 ? r11 : "bottom", modifiers: [...null !== (n11 = e14.modifiers) && void 0 !== n11 ? n11 : [], n8] });
    }
  }), () => {
    var r11, i2;
    let u2 = null === (r11 = n10.default) || void 0 === r11 ? void 0 : r11.call(n10)[0];
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
    } }), t(nm, { triggerRef: l2, contentRef: c2, isOpen: e14.isOpen, onClickOutside: (e15) => a2("click-outside", e15), style: { zIndex: 100 }, $transition: n10.transition, children: null === (i2 = n10.content) || void 0 === i2 ? void 0 : i2.call(n10) })] }) : null;
  };
}, { name: "Popper", inheritAttrs: false }), ar = Object.assign(at, { displayName: "Popper" });
export {
  na as B,
  nt as C,
  nl as G,
  nm as O,
  ar as P,
  tB as T,
  tw as a,
  rd as b,
  rv as c,
  rp as d,
  nu as e,
  rx as f,
  ae as g,
  no as s,
  rh as t,
  tM as v
};
