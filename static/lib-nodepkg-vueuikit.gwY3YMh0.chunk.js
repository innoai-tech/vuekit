var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { _ as e, c as t, j as r, T as n, a, o, r as i, b as s, d as l, u as c, e as u, f as d, t as f, g as h, s as p, h as m, w as g, i as v, F as b } from "./lib-nodepkg-vuekit.Cz_QR0I8.chunk.js";
import { e as y, b as w, h as x, s as k, f as M, g as C, j as P, i as _, k as S, l as O, m as T, d as D, n as R, q as $, r as A, t as I, u as L, c as F, v as B } from "./lib-nodepkg-typedef.1Wiqljk4.chunk.js";
var E, j, V, H, z, N, W, q, U, Y, G, X, K = function() {
}, J = function() {
};
K = function(e10, t10) {
  e10 || "undefined" == typeof console || console.warn(t10);
}, J = function(e10, t10) {
  if (!e10)
    throw Error(t10);
};
let Z = (e10, t10, r10) => Math.min(/* @__PURE__ */ Math.max(r10, e10), t10);
function Q(e10, t10) {
  return e10 * Math.sqrt(1 - t10 * t10);
}
let ee = ["duration", "bounce"], et = ["stiffness", "damping", "mass"];
function er(e10, t10) {
  return t10.some((t11) => void 0 !== e10[t11]);
}
function en(t10) {
  var { from: r10 = 0, to: n10 = 1, restSpeed: a2 = 2, restDelta: o2 } = t10, i2 = /* @__PURE__ */ e(t10, ["from", "to", "restSpeed", "restDelta"]);
  let s2 = { done: false, value: r10 }, { stiffness: l2, damping: c2, mass: u2, velocity: d2, duration: f2, isResolvedFromDuration: h2 } = function(e10) {
    let t11 = /* @__PURE__ */ Object.assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: false }, e10);
    if (!er(e10, et) && er(e10, ee)) {
      let r11 = /* @__PURE__ */ function(e11) {
        let t12, r12, { duration: n11 = 800, bounce: a3 = 0.25, velocity: o3 = 0, mass: i3 = 1 } = e11;
        K(n11 <= 1e4, "Spring duration must be 10 seconds or less");
        let s3 = 1 - a3;
        s3 = /* @__PURE__ */ Z(0.05, 1, s3), n11 = /* @__PURE__ */ Z(0.01, 10, n11 / 1e3), s3 < 1 ? (t12 = (e12) => {
          let t13 = e12 * s3, r13 = t13 * n11, a4 = /* @__PURE__ */ Q(e12, s3);
          return 1e-3 - (t13 - o3) / a4 * /* @__PURE__ */ Math.exp(-r13);
        }, r12 = (e12) => {
          let r13 = e12 * s3, a4 = r13 * n11, i4 = Math.pow(s3, 2) * Math.pow(e12, 2) * n11, l4 = /* @__PURE__ */ Q(/* @__PURE__ */ Math.pow(e12, 2), s3), c4 = -t12(e12) + 1e-3 > 0 ? -1 : 1;
          return c4 * ((a4 * o3 + o3 - i4) * /* @__PURE__ */ Math.exp(-a4)) / l4;
        }) : (t12 = (e12) => {
          let t13 = /* @__PURE__ */ Math.exp(-e12 * n11), r13 = (e12 - o3) * n11 + 1;
          return -1e-3 + t13 * r13;
        }, r12 = (e12) => {
          let t13 = /* @__PURE__ */ Math.exp(-e12 * n11), r13 = (o3 - e12) * (n11 * n11);
          return t13 * r13;
        });
        let l3 = 5 / n11, c3 = /* @__PURE__ */ function(e12, t13, r13) {
          let n12 = r13;
          for (let r14 = 1; r14 < 12; r14++)
            n12 -= e12(n12) / t13(n12);
          return n12;
        }(t12, r12, l3);
        if (n11 *= 1e3, isNaN(c3))
          return { stiffness: 100, damping: 10, duration: n11 };
        {
          let e12 = Math.pow(c3, 2) * i3;
          return { stiffness: e12, damping: 2 * s3 * Math.sqrt(i3 * e12), duration: n11 };
        }
      }(e10);
      (t11 = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign({}, t11), r11), { velocity: 0, mass: 1 })).isResolvedFromDuration = true;
    }
    return t11;
  }(i2), p2 = ea, m2 = ea;
  function g2() {
    let e10 = d2 ? -(d2 / 1e3) : 0, t11 = n10 - r10, a3 = c2 / (2 * Math.sqrt(l2 * u2)), i3 = Math.sqrt(l2 / u2) / 1e3;
    if (void 0 === o2 && (o2 = /* @__PURE__ */ Math.min(Math.abs(n10 - r10) / 100, 0.4)), a3 < 1) {
      let r11 = /* @__PURE__ */ Q(i3, a3);
      p2 = (o3) => {
        let s3 = /* @__PURE__ */ Math.exp(-a3 * i3 * o3);
        return n10 - s3 * ((e10 + a3 * i3 * t11) / r11 * Math.sin(r11 * o3) + t11 * Math.cos(r11 * o3));
      }, m2 = (n11) => {
        let o3 = /* @__PURE__ */ Math.exp(-a3 * i3 * n11);
        return a3 * i3 * o3 * (Math.sin(r11 * n11) * (e10 + a3 * i3 * t11) / r11 + t11 * Math.cos(r11 * n11)) - o3 * (Math.cos(r11 * n11) * (e10 + a3 * i3 * t11) - r11 * t11 * Math.sin(r11 * n11));
      };
    } else if (1 === a3)
      p2 = (r11) => n10 - Math.exp(-i3 * r11) * (t11 + (e10 + i3 * t11) * r11);
    else {
      let r11 = i3 * Math.sqrt(a3 * a3 - 1);
      p2 = (o3) => {
        let s3 = /* @__PURE__ */ Math.exp(-a3 * i3 * o3), l3 = /* @__PURE__ */ Math.min(r11 * o3, 300);
        return n10 - s3 * ((e10 + a3 * i3 * t11) * Math.sinh(l3) + r11 * t11 * Math.cosh(l3)) / r11;
      };
    }
  }
  return g2(), { next: (e10) => {
    let t11 = /* @__PURE__ */ p2(e10);
    if (h2)
      s2.done = e10 >= f2;
    else {
      let r11 = 1e3 * m2(e10), i3 = Math.abs(n10 - t11) <= o2;
      s2.done = Math.abs(r11) <= a2 && i3;
    }
    return s2.value = s2.done ? n10 : t11, s2;
  }, flipTarget: () => {
    d2 = -d2, [r10, n10] = [n10, r10], g2();
  } };
}
en.needsInterpolation = (e10, t10) => "string" == typeof e10 || "string" == typeof t10;
let ea = (e10) => 0, eo = (e10, t10, r10) => {
  let n10 = t10 - e10;
  return 0 === n10 ? 1 : (r10 - e10) / n10;
}, ei = (e10, t10, r10) => -r10 * e10 + r10 * t10 + e10, es = (e10, t10) => (r10) => Math.max(/* @__PURE__ */ Math.min(r10, t10), e10), el = (e10) => e10 % 1 ? Number(/* @__PURE__ */ e10.toFixed(5)) : e10, ec = /(-)?([\d]*\.?[\d])+/g, eu = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, ed = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function ef(e10) {
  return "string" == typeof e10;
}
let eh = { test: (e10) => "number" == typeof e10, parse: parseFloat, transform: (e10) => e10 }, ep = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign({}, eh), { transform: /* @__PURE__ */ es(0, 1) });
Object.assign(/* @__PURE__ */ Object.assign({}, eh), { default: 1 });
let em = { test: (e10) => ef(e10) && e10.endsWith("%") && 1 === e10.split(" ").length, parse: parseFloat, transform: (e10) => `${e10}%` };
Object.assign(/* @__PURE__ */ Object.assign({}, em), { parse: (e10) => em.parse(e10) / 100, transform: (e10) => em.transform(100 * e10) });
let eg = (e10, t10) => (r10) => !!(ef(r10) && ed.test(r10) && r10.startsWith(e10) || t10 && Object.prototype.hasOwnProperty.call(r10, t10)), ev = (e10, t10, r10) => (n10) => {
  if (!ef(n10))
    return n10;
  let [a2, o2, i2, s2] = n10.match(ec);
  return { [e10]: /* @__PURE__ */ parseFloat(a2), [t10]: /* @__PURE__ */ parseFloat(o2), [r10]: /* @__PURE__ */ parseFloat(i2), alpha: void 0 !== s2 ? parseFloat(s2) : 1 };
}, eb = { test: /* @__PURE__ */ eg("hsl", "hue"), parse: /* @__PURE__ */ ev("hue", "saturation", "lightness"), transform: (e10) => {
  let { hue: t10, saturation: r10, lightness: n10, alpha: a2 = 1 } = e10;
  return "hsla(" + Math.round(t10) + ", " + em.transform(/* @__PURE__ */ el(r10)) + ", " + em.transform(/* @__PURE__ */ el(n10)) + ", " + el(/* @__PURE__ */ ep.transform(a2)) + ")";
} }, ey = /* @__PURE__ */ es(0, 255), ew = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign({}, eh), { transform: (e10) => Math.round(/* @__PURE__ */ ey(e10)) }), ex = { test: /* @__PURE__ */ eg("rgb", "red"), parse: /* @__PURE__ */ ev("red", "green", "blue"), transform: (e10) => {
  let { red: t10, green: r10, blue: n10, alpha: a2 = 1 } = e10;
  return "rgba(" + ew.transform(t10) + ", " + ew.transform(r10) + ", " + ew.transform(n10) + ", " + el(/* @__PURE__ */ ep.transform(a2)) + ")";
} }, ek = { test: /* @__PURE__ */ eg("#"), parse: function(e10) {
  let t10 = "", r10 = "", n10 = "", a2 = "";
  return e10.length > 5 ? (t10 = /* @__PURE__ */ e10.substr(1, 2), r10 = /* @__PURE__ */ e10.substr(3, 2), n10 = /* @__PURE__ */ e10.substr(5, 2), a2 = /* @__PURE__ */ e10.substr(7, 2)) : (t10 = /* @__PURE__ */ e10.substr(1, 1), r10 = /* @__PURE__ */ e10.substr(2, 1), n10 = /* @__PURE__ */ e10.substr(3, 1), a2 = /* @__PURE__ */ e10.substr(4, 1), t10 += t10, r10 += r10, n10 += n10, a2 += a2), { red: /* @__PURE__ */ parseInt(t10, 16), green: /* @__PURE__ */ parseInt(r10, 16), blue: /* @__PURE__ */ parseInt(n10, 16), alpha: a2 ? parseInt(a2, 16) / 255 : 1 };
}, transform: ex.transform }, eM = { test: (e10) => ex.test(e10) || ek.test(e10) || eb.test(e10), parse: (e10) => ex.test(e10) ? ex.parse(e10) : eb.test(e10) ? eb.parse(e10) : ek.parse(e10), transform: (e10) => ef(e10) ? e10 : e10.hasOwnProperty("red") ? ex.transform(e10) : eb.transform(e10) }, eC = "${c}", eP = "${n}";
function e_(e10) {
  "number" == typeof e10 && (e10 = `${e10}`);
  let t10 = [], r10 = 0, n10 = /* @__PURE__ */ e10.match(eu);
  n10 && (r10 = n10.length, e10 = /* @__PURE__ */ e10.replace(eu, eC), t10.push(.../* @__PURE__ */ n10.map(eM.parse)));
  let a2 = /* @__PURE__ */ e10.match(ec);
  return a2 && (e10 = /* @__PURE__ */ e10.replace(ec, eP), t10.push(.../* @__PURE__ */ a2.map(eh.parse))), { values: t10, numColors: r10, tokenised: e10 };
}
function eS(e10) {
  return e_(e10).values;
}
function eO(e10) {
  let { values: t10, numColors: r10, tokenised: n10 } = e_(e10), a2 = t10.length;
  return (e11) => {
    let t11 = n10;
    for (let n11 = 0; n11 < a2; n11++)
      t11 = /* @__PURE__ */ t11.replace(n11 < r10 ? eC : eP, n11 < r10 ? eM.transform(e11[n11]) : el(e11[n11]));
    return t11;
  };
}
let eT = (e10) => "number" == typeof e10 ? 0 : e10, eD = { test: function(e10) {
  var t10, r10, n10, a2;
  return isNaN(e10) && ef(e10) && (null !== (r10 = null === (t10 = /* @__PURE__ */ e10.match(ec)) || void 0 === t10 ? void 0 : t10.length) && void 0 !== r10 ? r10 : 0) + (null !== (a2 = null === (n10 = /* @__PURE__ */ e10.match(eu)) || void 0 === n10 ? void 0 : n10.length) && void 0 !== a2 ? a2 : 0) > 0;
}, parse: eS, createTransformer: eO, getAnimatableNone: function(e10) {
  let t10 = /* @__PURE__ */ eS(e10), r10 = /* @__PURE__ */ eO(e10);
  return r10(/* @__PURE__ */ t10.map(eT));
} };
function eR(e10, t10, r10) {
  return (r10 < 0 && (r10 += 1), r10 > 1 && (r10 -= 1), r10 < 1 / 6) ? e10 + (t10 - e10) * 6 * r10 : r10 < 0.5 ? t10 : r10 < 2 / 3 ? e10 + (t10 - e10) * (2 / 3 - r10) * 6 : e10;
}
function e$(e10) {
  let { hue: t10, saturation: r10, lightness: n10, alpha: a2 } = e10;
  t10 /= 360, n10 /= 100;
  let o2 = 0, i2 = 0, s2 = 0;
  if (r10 /= 100) {
    let e11 = n10 < 0.5 ? n10 * (1 + r10) : n10 + r10 - n10 * r10, a3 = 2 * n10 - e11;
    o2 = /* @__PURE__ */ eR(a3, e11, t10 + 1 / 3), i2 = /* @__PURE__ */ eR(a3, e11, t10), s2 = /* @__PURE__ */ eR(a3, e11, t10 - 1 / 3);
  } else
    o2 = i2 = s2 = n10;
  return { red: /* @__PURE__ */ Math.round(255 * o2), green: /* @__PURE__ */ Math.round(255 * i2), blue: /* @__PURE__ */ Math.round(255 * s2), alpha: a2 };
}
let eA = (e10, t10, r10) => {
  let n10 = e10 * e10;
  return Math.sqrt(/* @__PURE__ */ Math.max(0, r10 * (t10 * t10 - n10) + n10));
}, eI = [ek, ex, eb], eL = (e10) => eI.find((t10) => t10.test(e10)), eF = (e10) => `'${e10}' is not an animatable color. Use the equivalent color code instead.`, eB = (e10, t10) => {
  let r10 = /* @__PURE__ */ eL(e10), n10 = /* @__PURE__ */ eL(t10);
  J(!!r10, /* @__PURE__ */ eF(e10)), J(!!n10, /* @__PURE__ */ eF(t10));
  let a2 = /* @__PURE__ */ r10.parse(e10), o2 = /* @__PURE__ */ n10.parse(t10);
  r10 === eb && (a2 = /* @__PURE__ */ e$(a2), r10 = ex), n10 === eb && (o2 = /* @__PURE__ */ e$(o2), n10 = ex);
  let i2 = /* @__PURE__ */ Object.assign({}, a2);
  return (e11) => {
    for (let t11 in i2)
      "alpha" !== t11 && (i2[t11] = /* @__PURE__ */ eA(a2[t11], o2[t11], e11));
    return i2.alpha = /* @__PURE__ */ ei(a2.alpha, o2.alpha, e11), r10.transform(i2);
  };
}, eE = (e10) => "number" == typeof e10, ej = (e10, t10) => (r10) => t10(/* @__PURE__ */ e10(r10)), eV = function() {
  for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++)
    t10[r10] = arguments[r10];
  return t10.reduce(ej);
};
function eH(e10, t10) {
  return eE(e10) ? (r10) => ei(e10, t10, r10) : eM.test(e10) ? eB(e10, t10) : eq(e10, t10);
}
let ez = (e10, t10) => {
  let r10 = [...e10], n10 = r10.length, a2 = /* @__PURE__ */ e10.map((e11, r11) => eH(e11, t10[r11]));
  return (e11) => {
    for (let t11 = 0; t11 < n10; t11++)
      r10[t11] = /* @__PURE__ */ a2[t11](e11);
    return r10;
  };
}, eN = (e10, t10) => {
  let r10 = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign({}, e10), t10), n10 = {};
  for (let a2 in r10)
    void 0 !== e10[a2] && void 0 !== t10[a2] && (n10[a2] = /* @__PURE__ */ eH(e10[a2], t10[a2]));
  return (e11) => {
    for (let t11 in n10)
      r10[t11] = /* @__PURE__ */ n10[t11](e11);
    return r10;
  };
};
function eW(e10) {
  let t10 = /* @__PURE__ */ eD.parse(e10), r10 = t10.length, n10 = 0, a2 = 0, o2 = 0;
  for (let e11 = 0; e11 < r10; e11++)
    n10 || "number" == typeof t10[e11] ? n10++ : void 0 !== t10[e11].hue ? o2++ : a2++;
  return { parsed: t10, numNumbers: n10, numRGB: a2, numHSL: o2 };
}
let eq = (e10, t10) => {
  let r10 = /* @__PURE__ */ eD.createTransformer(t10), n10 = /* @__PURE__ */ eW(e10), a2 = /* @__PURE__ */ eW(t10), o2 = n10.numHSL === a2.numHSL && n10.numRGB === a2.numRGB && n10.numNumbers >= a2.numNumbers;
  return o2 ? eV(/* @__PURE__ */ ez(n10.parsed, a2.parsed), r10) : (K(true, `Complex values '${e10}' and '${t10}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), (r11) => `${r11 > 0 ? t10 : e10}`);
}, eU = (e10, t10) => (r10) => ei(e10, t10, r10);
function eY(e10, t10) {
  let { clamp: r10 = true, ease: n10, mixer: a2 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o2 = e10.length;
  J(o2 === t10.length, "Both input and output ranges must be the same length"), J(!n10 || !Array.isArray(n10) || n10.length === o2 - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), e10[0] > e10[o2 - 1] && (e10 = /* @__PURE__ */ [].concat(e10), t10 = /* @__PURE__ */ [].concat(t10), e10.reverse(), t10.reverse());
  let i2 = /* @__PURE__ */ function(e11, t11, r11) {
    var n11;
    let a3 = [], o3 = r11 || ("number" == typeof (n11 = e11[0]) ? eU : "string" == typeof n11 ? eM.test(n11) ? eB : eq : Array.isArray(n11) ? ez : "object" == typeof n11 ? eN : void 0), i3 = e11.length - 1;
    for (let r12 = 0; r12 < i3; r12++) {
      let n12 = /* @__PURE__ */ o3(e11[r12], e11[r12 + 1]);
      if (t11) {
        let e12 = Array.isArray(t11) ? t11[r12] : t11;
        n12 = /* @__PURE__ */ eV(e12, n12);
      }
      a3.push(n12);
    }
    return a3;
  }(t10, n10, a2), s2 = 2 === o2 ? function(e11, t11) {
    let [r11, n11] = e11, [a3] = t11;
    return (e12) => a3(/* @__PURE__ */ eo(r11, n11, e12));
  }(e10, i2) : function(e11, t11) {
    let r11 = e11.length, n11 = r11 - 1;
    return (a3) => {
      let o3 = 0, i3 = false;
      if (a3 <= e11[0] ? i3 = true : a3 >= e11[n11] && (o3 = n11 - 1, i3 = true), !i3) {
        let t12 = 1;
        for (; t12 < r11 && !(e11[t12] > a3) && t12 !== n11; t12++)
          ;
        o3 = t12 - 1;
      }
      let s3 = /* @__PURE__ */ eo(e11[o3], e11[o3 + 1], a3);
      return t11[o3](s3);
    };
  }(e10, i2);
  return r10 ? (t11) => s2(/* @__PURE__ */ Z(e10[0], e10[o2 - 1], t11)) : s2;
}
let eG = (e10) => (t10) => t10 * t10 * ((e10 + 1) * t10 - e10), eX = (e10) => e10, eK = (E = (e10) => Math.pow(e10, 2), (e10) => e10 <= 0.5 ? E(2 * e10) / 2 : (2 - E(2 * (1 - e10))) / 2);
function eJ(e10) {
  let { from: t10 = 0, to: r10 = 1, ease: n10, offset: a2, duration: o2 = 300 } = e10, i2 = { done: false, value: t10 }, s2 = Array.isArray(r10) ? r10 : [t10, r10], l2 = (a2 && a2.length === s2.length ? a2 : function(e11) {
    let t11 = e11.length;
    return e11.map((e12, r11) => 0 !== r11 ? r11 / (t11 - 1) : 0);
  }(s2)).map((e11) => e11 * o2);
  function c2() {
    return eY(l2, s2, { ease: Array.isArray(n10) ? n10 : s2.map(() => n10 || eK).splice(0, s2.length - 1) });
  }
  let u2 = /* @__PURE__ */ c2();
  return { next: (e11) => (i2.value = /* @__PURE__ */ u2(e11), i2.done = e11 >= o2, i2), flipTarget: () => {
    s2.reverse(), u2 = /* @__PURE__ */ c2();
  } };
}
/* @__PURE__ */ ((e10) => {
  let t10 = /* @__PURE__ */ eG(1.525);
  return (e11) => (e11 *= 2) < 1 ? 0.5 * t10(e11) : 0.5 * (2 - Math.pow(2, -10 * (e11 - 1)));
})(0);
let eZ = { keyframes: eJ, spring: en, decay: function(e10) {
  let { velocity: t10 = 0, from: r10 = 0, power: n10 = 0.8, timeConstant: a2 = 350, restDelta: o2 = 0.5, modifyTarget: i2 } = e10, s2 = { done: false, value: r10 }, l2 = n10 * t10, c2 = r10 + l2, u2 = void 0 === i2 ? c2 : i2(c2);
  return u2 !== c2 && (l2 = u2 - r10), { next: (e11) => {
    let t11 = -l2 * Math.exp(-e11 / a2);
    return s2.done = !(t11 > o2 || t11 < -o2), s2.value = s2.done ? u2 : u2 + t11, s2;
  }, flipTarget: () => {
  } };
} }, eQ = 1 / 60 * 1e3, e0 = "undefined" != typeof performance ? () => performance.now() : () => Date.now(), e1 = "undefined" != typeof window ? (e10) => window.requestAnimationFrame(e10) : (e10) => setTimeout(() => e10(/* @__PURE__ */ e0()), eQ), e2 = true, e4 = false, e5 = false, e3 = { delta: 0, timestamp: 0 }, e8 = ["read", "update", "preRender", "render", "postRender"], e6 = /* @__PURE__ */ e8.reduce((e10, t10) => (e10[t10] = /* @__PURE__ */ function(e11) {
  let t11 = [], r10 = [], n10 = 0, a2 = false, o2 = false, i2 = /* @__PURE__ */ new WeakSet(), s2 = { schedule: function(e12) {
    let o3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], s3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], l2 = s3 && a2, c2 = l2 ? t11 : r10;
    return o3 && i2.add(e12), -1 === c2.indexOf(e12) && (c2.push(e12), l2 && a2 && (n10 = t11.length)), e12;
  }, cancel: (e12) => {
    let t12 = /* @__PURE__ */ r10.indexOf(e12);
    -1 !== t12 && r10.splice(t12, 1), i2.delete(e12);
  }, process: (l2) => {
    if (a2) {
      o2 = true;
      return;
    }
    if (a2 = true, [t11, r10] = [r10, t11], r10.length = 0, n10 = t11.length)
      for (let r11 = 0; r11 < n10; r11++) {
        let n11 = t11[r11];
        n11(l2), i2.has(n11) && (s2.schedule(n11), e11());
      }
    a2 = false, o2 && (o2 = false, s2.process(l2));
  } };
  return s2;
}(() => e4 = true), e10), {}), e9 = /* @__PURE__ */ e8.reduce((e10, t10) => {
  let r10 = e6[t10];
  return e10[t10] = function(e11) {
    let t11 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return e4 || tr(), r10.schedule(e11, t11, n10);
  }, e10;
}, {}), e7 = /* @__PURE__ */ e8.reduce((e10, t10) => (e10[t10] = e6[t10].cancel, e10), {});
e8.reduce((e10, t10) => (e10[t10] = () => e6[t10].process(e3), e10), {});
let te = (e10) => e6[e10].process(e3), tt = (e10) => {
  e4 = false, e3.delta = e2 ? eQ : Math.max(/* @__PURE__ */ Math.min(e10 - e3.timestamp, 40), 1), e3.timestamp = e10, e5 = true, e8.forEach(te), e5 = false, e4 && (e2 = false, e1(tt));
}, tr = () => {
  e4 = true, e2 = true, e5 || e1(tt);
};
function tn(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
  return e10 - t10 - r10;
}
let ta = (e10) => {
  let t10 = (t11) => {
    let { delta: r10 } = t11;
    return e10(r10);
  };
  return { start: () => e9.update(t10, true), stop: () => e7.update(t10) };
};
function to(t10) {
  let r10, n10, a2;
  var o2, { from: i2, autoplay: s2 = true, driver: l2 = ta, elapsed: c2 = 0, repeat: u2 = 0, repeatType: d2 = "loop", repeatDelay: f2 = 0, onPlay: h2, onStop: p2, onComplete: m2, onRepeat: g2, onUpdate: v2 } = t10, b2 = /* @__PURE__ */ e(t10, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
  let { to: y2 } = b2, w2 = 0, x2 = b2.duration, k2 = false, M2 = true, C2 = /* @__PURE__ */ function(e10) {
    if (Array.isArray(e10.to))
      return eJ;
    if (eZ[e10.type])
      return eZ[e10.type];
    let t11 = new Set(Object.keys(e10));
    if (t11.has("ease") || t11.has("duration") && !t11.has("dampingRatio"))
      ;
    else if (t11.has("dampingRatio") || t11.has("stiffness") || t11.has("mass") || t11.has("damping") || t11.has("restSpeed") || t11.has("restDelta"))
      return en;
    return eJ;
  }(b2);
  (null === (o2 = C2.needsInterpolation) || void 0 === o2 ? void 0 : o2.call(C2, i2, y2)) && (a2 = /* @__PURE__ */ eY([0, 100], [i2, y2], { clamp: false }), i2 = 0, y2 = 100);
  let P2 = /* @__PURE__ */ C2(/* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.assign({}, b2), { from: i2, to: y2 }));
  return s2 && (null == h2 || h2(), (r10 = /* @__PURE__ */ l2(function(e10) {
    if (M2 || (e10 = -e10), c2 += e10, !k2) {
      let e11 = /* @__PURE__ */ P2.next(/* @__PURE__ */ Math.max(0, c2));
      n10 = e11.value, a2 && (n10 = /* @__PURE__ */ a2(n10)), k2 = M2 ? e11.done : c2 <= 0;
    }
    if (null == v2 || v2(n10), k2) {
      if (0 === w2 && (null != x2 || (x2 = c2)), w2 < u2) {
        var t11, o3;
        t11 = c2, o3 = x2, (M2 ? t11 >= o3 + f2 : t11 <= -f2) && (w2++, "reverse" === d2 ? c2 = /* @__PURE__ */ function(e11, t12) {
          let r11 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n11 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
          return n11 ? tn(t12 + -e11, t12, r11) : t12 - (e11 - t12) + r11;
        }(c2, x2, f2, M2 = w2 % 2 == 0) : (c2 = /* @__PURE__ */ tn(c2, x2, f2), "mirror" === d2 && P2.flipTarget()), k2 = false, g2 && g2());
      } else
        r10.stop(), m2 && m2();
    }
  })).start()), { stop: () => {
    null == p2 || p2(), r10.stop();
  } };
}
let ti = (e10, t10) => 1 - 3 * t10 + 3 * e10, ts = (e10, t10) => 3 * t10 - 6 * e10, tl = (e10) => 3 * e10, tc = (e10, t10, r10) => ((ti(t10, r10) * e10 + ts(t10, r10)) * e10 + tl(t10)) * e10, tu = (e10, t10, r10) => 3 * ti(t10, r10) * e10 * e10 + 2 * ts(t10, r10) * e10 + tl(t10);
function td(e10, t10, r10, n10) {
  if (e10 === t10 && r10 === n10)
    return eX;
  let a2 = new Float32Array(11);
  for (let t11 = 0; t11 < 11; ++t11)
    a2[t11] = /* @__PURE__ */ tc(0.1 * t11, e10, r10);
  return (o2) => 0 === o2 || 1 === o2 ? o2 : tc(/* @__PURE__ */ function(t11) {
    let n11 = 0, o3 = 1;
    for (; 10 !== o3 && a2[o3] <= t11; ++o3)
      n11 += 0.1;
    --o3;
    let i2 = (t11 - a2[o3]) / (a2[o3 + 1] - a2[o3]), s2 = n11 + 0.1 * i2, l2 = /* @__PURE__ */ tu(s2, e10, r10);
    return l2 >= 1e-3 ? function(e11, t12, r11, n12) {
      for (let a3 = 0; a3 < 8; ++a3) {
        let a4 = /* @__PURE__ */ tu(t12, r11, n12);
        if (0 === a4)
          break;
        let o4 = tc(t12, r11, n12) - e11;
        t12 -= o4 / a4;
      }
      return t12;
    }(t11, s2, e10, r10) : 0 === l2 ? s2 : function(e11, t12, r11, n12, a3) {
      let o4, i3;
      let s3 = 0;
      do
        (o4 = tc(i3 = t12 + (r11 - t12) / 2, n12, a3) - e11) > 0 ? r11 = i3 : t12 = i3;
      while (Math.abs(o4) > 1e-7 && ++s3 < 10);
      return i3;
    }(t11, n11, n11 + 0.1, e10, r10);
  }(o2), t10, n10);
}
function tf() {
  return new Proxy({}, { get: (e10, t10) => t10 });
}
let th = /* @__PURE__ */ tf(), tp = { paddingX: [th.paddingLeft, th.paddingRight], paddingY: [th.paddingTop, th.paddingBottom], marginX: [th.marginInlineStart, th.marginInlineEnd], marginY: [th.marginTop, th.marginBottom], borderX: [th.borderLeft, th.borderRight], borderY: [th.borderTop, th.borderBottom], color: [th.color, th.fill], borderTopRadius: [th.borderTopLeftRadius, th.borderTopRightRadius], borderBottomRadius: [th.borderBottomLeftRadius, th.borderBottomRightRadius], borderRightRadius: [th.borderTopRightRadius, th.borderBottomRightRadius], borderLeftRadius: [th.borderTopLeftRadius, th.borderBottomLeftRadius], backgroundGradient: [th.backgroundImage], boxSize: [th.width, th.height] }, tm = /* @__PURE__ */ tf(), tg = { font: tm.fontFamily, shadow: tm.boxShadow, rounded: tm.borderRadius, roundedTop: tm.borderTopRadius, roundedBottom: tm.borderBottomRadius, roundedLeft: tm.borderLeftRadius, roundedRight: tm.borderRightRadius, bg: tm.background, bgImage: tm.backgroundImage, bgSize: tm.backgroundSize, bgPosition: tm.backgroundPosition, bgRepeat: tm.backgroundRepeat, bgAttachment: tm.backgroundAttachment, bgColor: tm.backgroundColor, bgGradient: tm.backgroundGradient, bgClip: tm.backgroundClip, pos: tm.position, p: tm.padding, pt: tm.paddingTop, pr: tm.paddingRight, pl: tm.paddingLeft, pb: tm.paddingBottom, ps: tm.paddingInlineStart, pe: tm.paddingInlineEnd, px: tm.paddingX, py: tm.paddingY, m: tm.margin, mt: tm.marginTop, mr: tm.marginRight, ml: tm.marginLeft, mb: tm.marginBottom, ms: tm.marginInlineStart, me: tm.marginInlineEnd, mx: tm.marginX, my: tm.marginY, w: tm.width, minW: tm.minWidth, maxW: tm.maxWidth, h: tm.height, minH: tm.minHeight, maxH: tm.maxHeight }, tv = /* @__PURE__ */ tf(), tb = function() {
  for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++)
    t10[r10] = arguments[r10];
  let n10 = [...t10];
  for (let e11 of t10)
    tg[e11] && n10.push(tg[e11]);
  return n10;
}, ty = { _rtl: "[dir=rtl] &, &[dir=rtl]", _ltr: "[dir=ltr] &, &[dir=ltr]", _dark: "&[data-theme=dark]", _light: "&[data-theme=light]" };
var tw = ((j = tw || {}).var = "var", j.mixin = "mixin", j);
class tx {
  static create(e10, t10) {
    let { value: r10, on: n10, transform: a2 } = t10;
    return { type: e10, value: r10, on: n10, transform: a2, __Tokens: void 0, __ValueType: void 0, __CSSTokens: void 0 };
  }
  static color(e10) {
    return tx.create("var", { value: e10, on: /* @__PURE__ */ tb(tv.color, tv.bgColor, tv.outlineColor, tv.borderColor, tv.accentColor, tv.fill, tv.stroke), transform: (e11, t10) => y(e11) ? { default: `var(${t10(e11)})`, rgb: `var(${t10(`${e11}/rgb`)})` } : { default: `rgb(${e11[0]}, ${e11[1]}, ${e11[2]})`, rgb: `${e11[0]} ${e11[1]} ${e11[2]}` }, fallback: "" });
  }
  static space(e10) {
    return tx.create("var", { value: e10, on: /* @__PURE__ */ tb(tv.gap, tv.rowGap, tv.columnGap, tv.top, tv.right, tv.bottom, tv.left, tv.m, tv.ms, tv.me, tv.mt, tv.mr, tv.mb, tv.ml, tv.mx, tv.my, tv.p, tv.ps, tv.pe, tv.pt, tv.pr, tv.pb, tv.pl, tv.px, tv.py) });
  }
  static boxSize(e10) {
    return tx.create("var", { value: e10, on: /* @__PURE__ */ tb(tv.w, tv.minW, tv.maxW, tv.h, tv.minH, tv.maxH, tv.boxSize), fallback: 0 });
  }
  static fontSize(e10) {
    return tx.create("var", { value: e10, on: /* @__PURE__ */ tb(tv.fontSize), fallback: 0 });
  }
  static lineHeight(e10) {
    return tx.create("var", { value: e10, on: /* @__PURE__ */ tb(tv.lineHeight), fallback: 0 });
  }
  static rounded(e10) {
    return tx.create("var", { value: e10, fallback: 0, on: /* @__PURE__ */ tb(tv.rounded, tv.roundedTop, tv.roundedBottom, tv.roundedLeft, tv.roundedRight, th.borderTopLeftRadius, th.borderTopRightRadius, th.borderBottomLeftRadius, th.borderBottomRightRadius, th.borderTopRightRadius, th.borderBottomRightRadius, th.borderTopLeftRadius, th.borderBottomLeftRadius) });
  }
  static transitionTimingFunction(e10) {
    return tx.create("var", { value: e10, on: /* @__PURE__ */ tb(tv.transitionTimingFunction) });
  }
  static transitionDuration(e10) {
    return tx.create("var", { value: e10, on: /* @__PURE__ */ tb(tv.transitionDuration), transform: (e11) => `${e11}ms` });
  }
  static font(e10) {
    return tx.create("var", { value: e10, on: /* @__PURE__ */ tb(tv.font) });
  }
  static fontWeight(e10) {
    return tx.create("var", { value: e10, on: /* @__PURE__ */ tb(tv.fontWeight) });
  }
  static letterSpacing(e10) {
    return tx.create("var", { value: e10, on: /* @__PURE__ */ tb(tv.letterSpacing) });
  }
  static shadow(e10) {
    return tx.create("var", { value: e10, on: /* @__PURE__ */ tb(tv.shadow) });
  }
  static customMixin(e10, t10) {
    return tx.create("mixin", { value: t10, on: [e10] });
  }
  static mixin(e10) {
    return { ...e10, __mixin: true };
  }
}
const _tk = class _tk {
  constructor(e10, { cssVar: t10, transformFallback: r10 }) {
    __publicField(this, "__Tokens");
    __publicField(this, "_values", {});
    __publicField(this, "_cssVarRefs", {});
    _tk.walkValues(e10.value, (n10, a2) => {
      let o2 = /* @__PURE__ */ a2.join("."), i2 = (n11, a3) => {
        let o3 = e10.transform ? e10.transform(n11, t10) : r10(n11);
        if (C(o3))
          for (let e11 in o3)
            a3(o3[e11], "default" === e11 ? "" : e11);
        else
          a3(o3, "");
      };
      if (k(this._cssVarRefs, [o2], /* @__PURE__ */ t10(o2)), w(n10))
        for (let e11 in n10)
          i2(n10[e11], (t11, r11) => {
            k(this._values, [`${o2}${r11 ? `/${r11}` : ""}`, e11], t11);
          });
      else
        i2(n10, (e11, t11) => {
          k(this._values, [`${o2}${t11 ? `/${t11}` : ""}`], e11);
        });
    });
  }
  get tokens() {
    return M(this._values);
  }
  get(e10, t10, r10) {
    let n10 = this._values[e10];
    if (C(n10)) {
      var a2;
      return r10 ? n10[t10] : null !== (a2 = n10[t10]) && void 0 !== a2 ? a2 : n10[_tk.defaultMode];
    }
    return r10 ? t10 === _tk.defaultMode ? n10 : void 0 : n10;
  }
  use(e10) {
    let t10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (this._cssVarRefs[e10])
      return t10 ? `${this._cssVarRefs[e10]}` : `var(${this._cssVarRefs[e10]})`;
  }
};
__publicField(_tk, "defaultMode", "_default");
__publicField(_tk, "walkValues", function(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let n10 in e10) {
    let a2 = e10[n10];
    if (w(a2)) {
      if (x(a2, "_default")) {
        t10(a2, [...r10, n10]);
        continue;
      }
      _tk.walkValues(a2, t10, [...r10, n10]);
      continue;
    }
    t10(a2, [...r10, n10]);
  }
});
let tk = _tk;
const _tM = class _tM {
  constructor(e10) {
    __publicField(this, "_values", {});
    _tM.walkValue(e10.value, (e11, t10) => {
      let r10 = /* @__PURE__ */ t10.join(".");
      k(this._values, [r10], /* @__PURE__ */ P(e11, "__mixin"));
    });
  }
  get tokens() {
    return M(this._values);
  }
  get(e10) {
    return this._values[e10];
  }
};
__publicField(_tM, "walkValue", function(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let n10 in e10) {
    let a2 = e10[n10];
    if (w(a2)) {
      if (x(a2, "__mixin")) {
        t10(a2, [...r10, n10]);
        continue;
      }
      _tM.walkValue(a2, t10, [...r10, n10]);
      continue;
    }
    t10(a2, [...r10, n10]);
  }
});
let tM = _tM;
let tC = (e10) => (t10) => `rgba(var(${t10}--rgb) / ${e10})`, tP = (e10) => _(e10) && x(e10, "token");
function t_(e10, t10) {
  return Object.assign((e11) => t10(e11), { toString: () => e10, token: e10 });
}
var tS = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, tO = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, tT = /[A-Z]|^ms/g, tD = /_EMO_([^_]+?)_([^]*?)_EMO_/g, tR = function(e10) {
  return 45 === e10.charCodeAt(1);
}, t$ = function(e10) {
  return null != e10 && "boolean" != typeof e10;
}, tA = (V = /* @__PURE__ */ Object.create(null), function(e10) {
  return void 0 === V[e10] && (V[e10] = tR(e10) ? e10 : e10.replace(tT, "-$&").toLowerCase()), V[e10];
}), tI = function(e10, t10) {
  switch (e10) {
    case "animation":
    case "animationName":
      if ("string" == typeof t10)
        return t10.replace(tD, function(e11, t11, r10) {
          return G = { name: t11, styles: r10, next: G }, t11;
        });
  }
  return 1 === tS[e10] || tR(e10) || "number" != typeof t10 || 0 === t10 ? t10 : t10 + "px";
}, tL = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, tF = ["normal", "none", "initial", "inherit", "unset"], tB = tI, tE = /^-ms-/, tj = /-(.)/g, tV = {};
tI = function(e10, t10) {
  if ("content" === e10 && ("string" != typeof t10 || -1 === tF.indexOf(t10) && !tL.test(t10) && (t10.charAt(0) !== t10.charAt(t10.length - 1) || '"' !== t10.charAt(0) && "'" !== t10.charAt(0))))
    throw Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t10 + "\"'`");
  var r10 = /* @__PURE__ */ tB(e10, t10);
  return "" === r10 || tR(e10) || -1 === e10.indexOf("-") || void 0 !== tV[e10] || (tV[e10] = true, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + e10.replace(tE, "ms-").replace(tj, function(e11, t11) {
    return t11.toUpperCase();
  }) + "?")), r10;
};
var tH = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function tz(e10, t10, r10) {
  if (null == r10)
    return "";
  if (void 0 !== r10.__emotion_styles) {
    if ("NO_COMPONENT_SELECTOR" === r10.toString())
      throw Error(tH);
    return r10;
  }
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
        var a2 = r10.styles + ";";
        return void 0 !== r10.map && (a2 += r10.map), a2;
      }
      return function(e11, t11, r11) {
        var n11 = "";
        if (Array.isArray(r11))
          for (var a3 = 0; a3 < r11.length; a3++)
            n11 += tz(e11, t11, r11[a3]) + ";";
        else
          for (var o3 in r11) {
            var i3 = r11[o3];
            if ("object" != typeof i3)
              null != t11 && void 0 !== t11[i3] ? n11 += o3 + "{" + t11[i3] + "}" : t$(i3) && (n11 += tA(o3) + ":" + tI(o3, i3) + ";");
            else {
              if ("NO_COMPONENT_SELECTOR" === o3)
                throw Error(tH);
              if (Array.isArray(i3) && "string" == typeof i3[0] && (null == t11 || void 0 === t11[i3[0]]))
                for (var s3 = 0; s3 < i3.length; s3++)
                  t$(i3[s3]) && (n11 += tA(o3) + ":" + tI(o3, i3[s3]) + ";");
              else {
                var l3 = /* @__PURE__ */ tz(e11, t11, i3);
                switch (o3) {
                  case "animation":
                  case "animationName":
                    n11 += tA(o3) + ":" + l3 + ";";
                    break;
                  default:
                    "undefined" === o3 && console.error("You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key)."), n11 += o3 + "{" + l3 + "}";
                }
              }
            }
          }
        return n11;
      }(e10, t10, r10);
    case "function":
      if (void 0 !== e10) {
        var o2 = G, i2 = /* @__PURE__ */ r10(e10);
        return G = o2, tz(e10, t10, i2);
      }
      console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    case "string":
      var s2 = [], l2 = /* @__PURE__ */ r10.replace(tD, function(e11, t11, r11) {
        var n11 = "animation" + s2.length;
        return s2.push("const " + n11 + " = keyframes`" + r11.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + n11 + "}";
      });
      s2.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(s2, ["`" + l2 + "`"]).join("\n") + "\n\nYou should wrap it with `css` like this:\n\ncss`" + l2 + "`");
  }
  if (null == t10)
    return r10;
  var c2 = t10[r10];
  return void 0 !== c2 ? c2 : r10;
}
var tN = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
Y = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
var tW = function(e10, t10, r10) {
  if (1 === e10.length && "object" == typeof e10[0] && null !== e10[0] && void 0 !== e10[0].styles)
    return e10[0];
  var n10, a2, o2 = true, i2 = "";
  G = void 0;
  var s2 = e10[0];
  null == s2 || void 0 === s2.raw ? (o2 = false, i2 += /* @__PURE__ */ tz(r10, t10, s2)) : (void 0 === s2[0] && console.error(tO), i2 += s2[0]);
  for (var l2 = 1; l2 < e10.length; l2++)
    i2 += /* @__PURE__ */ tz(r10, t10, e10[l2]), o2 && (void 0 === s2[l2] && console.error(tO), i2 += s2[l2]);
  i2 = /* @__PURE__ */ i2.replace(Y, function(e11) {
    return n10 = e11, "";
  }), tN.lastIndex = 0;
  for (var c2 = ""; null !== (a2 = /* @__PURE__ */ tN.exec(i2)); )
    c2 += "-" + // $FlowFixMe we know it's not null
    a2[1];
  return { name: (
    /* eslint-disable */
    // Inspired by https://github.com/garycourt/murmurhash-js
    // Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
    function(e11) {
      for (var t11, r11 = 0, n11 = 0, a3 = e11.length; a3 >= 4; ++n11, a3 -= 4)
        t11 = /* Math.imul(k, m): */
        (65535 & (t11 = 255 & e11.charCodeAt(n11) | (255 & e11.charCodeAt(++n11)) << 8 | (255 & e11.charCodeAt(++n11)) << 16 | (255 & e11.charCodeAt(++n11)) << 24)) * 1540483477 + ((t11 >>> 16) * 59797 << 16), t11 ^= /* k >>> r: */
        t11 >>> 24, r11 = /* Math.imul(k, m): */
        (65535 & t11) * 1540483477 + ((t11 >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
        (65535 & r11) * 1540483477 + ((r11 >>> 16) * 59797 << 16);
      switch (a3) {
        case 3:
          r11 ^= (255 & e11.charCodeAt(n11 + 2)) << 16;
        case 2:
          r11 ^= (255 & e11.charCodeAt(n11 + 1)) << 8;
        case 1:
          r11 ^= 255 & e11.charCodeAt(n11), r11 = /* Math.imul(h, m): */
          (65535 & r11) * 1540483477 + ((r11 >>> 16) * 59797 << 16);
      }
      return (
        // bytes are well-incorporated.
        r11 ^= r11 >>> 13, (((r11 = /* Math.imul(h, m): */
        (65535 & r11) * 1540483477 + ((r11 >>> 16) * 59797 << 16)) ^ r11 >>> 15) >>> 0).toString(36)
      );
    }(i2) + c2
  ), styles: i2, map: n10, next: G, toString: function() {
    return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
  } };
};
const _tq = class _tq {
  constructor(e10) {
    this.opt = e10;
  }
  processAll(e10) {
    let t10 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], r10 = [], { state: n10, extends: a2, ...o2 } = e10;
    if (a2)
      for (let e11 of a2)
        r10.push(.../* @__PURE__ */ this.processAll(e11, t10));
    if (n10) {
      let e11 = {}, t11 = {};
      _tq.walkStateValues(n10, (r11, n11, a3) => {
        let o3 = `--${this.opt.varPrefix}-state-${n11.join("-")}`, i2 = /* @__PURE__ */ T(n11), s2 = {};
        this.process(s2, i2, r11, false), e11[o3] = s2[i2], k(t11, [...a3, i2], `var(${o3})`);
      }), r10.push(e11), r10.push(.../* @__PURE__ */ this.processAll(t11));
    }
    if (!D(o2)) {
      let e11 = {};
      this.processTo(e11, o2, t10), r10.push(e11);
    }
    return r10;
  }
  processTo(e10, t10) {
    let r10 = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    for (let n10 in t10)
      this.process(e10, n10, t10[n10], r10);
  }
  process(e10, t10, r10) {
    var n10, a2, o2, i2;
    let s2 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (this.opt.mixins[t10]) {
      let a3 = null === (n10 = this.opt.mixins[t10]) || void 0 === n10 ? void 0 : n10.get(r10);
      if (a3)
        for (let t11 in a3)
          this.process(e10, t11, a3[t11], s2);
      return;
    }
    if (w(r10)) {
      e10[t10 = null !== (a2 = /* @__PURE__ */ _tq.convertSelector(t10)) && void 0 !== a2 ? a2 : t10] = null !== (o2 = e10[t10]) && void 0 !== o2 ? o2 : {}, this.processTo(e10[t10], r10);
      return;
    }
    if (s2 && tp[t10 = null !== (i2 = tg[t10]) && void 0 !== i2 ? i2 : t10]) {
      for (let n11 of tp[t10])
        e10[n11] = /* @__PURE__ */ this.opt.processValue(n11, r10);
      return;
    }
    e10[t10] = /* @__PURE__ */ this.opt.processValue(t10, r10);
  }
};
__publicField(_tq, "supportedPseudoClasses", { active: "active", after: "after", anyLink: "any-link", before: "before", blank: "blank", checked: "checked", current: "current", default: "default", defined: "defined", disabled: "disabled", empty: "empty", enabled: "enabled", first: "first", firstChild: "first-child", firstLetter: "first-letter", firstLine: "first-line", firstOfType: "first-of-type", focus: "focus", focusVisible: "focus-visible", focusWithin: "focus-within", fullscreen: "fullscreen", future: "future", hover: "hover", inRange: "in-range", indeterminate: "indeterminate", invalid: "invalid", lastChild: "last-child", lastOfType: "last-of-type", left: "left", link: "link", localLink: "local-link", nthCol: "nth-col", nthLastCol: "nth-last-col", onlyChild: "only-child", onlyOfType: "only-of-type", optional: "optional", outOfRange: "out-of-range", past: "past", paused: "paused", pictureInPicture: "picture-in-picture", placeholderShown: "placeholder-shown", playing: "playing", readOnly: "read-only", readWrite: "read-write", required: "required", right: "right", root: "root", scope: "scope", target: "target", targetWithin: "target-within", userInvalid: "user-invalid", userValid: "user-valid", valid: "valid", visited: "visited" });
__publicField(_tq, "convertSelector", (e10) => {
  if (ty[e10])
    return ty[e10];
  if (e10.startsWith("$") || e10.endsWith("$") || e10.startsWith("_")) {
    let t10 = "", r10 = "";
    if (e10.startsWith("_") ? (t10 = "&", e10 = /* @__PURE__ */ e10.slice(1)) : e10.startsWith("$") ? (t10 = "& ", e10 = /* @__PURE__ */ e10.slice(1)) : (r10 = " &", e10 = /* @__PURE__ */ e10.slice(0, e10.length - 1)), e10.startsWith("data") || e10.startsWith("aria")) {
      let [n10, a2] = e10.split("__");
      return a2 ? `${t10}[${S(n10)}='${S(a2)}']${r10}` : `${t10}[${S(n10)}]${r10}`;
    }
    if ("&" == t10) {
      if (e10.startsWith("$"))
        return `${t10}::${e10.slice(1)}`;
      if (_tq.supportedPseudoClasses[e10]) {
        let r12 = _tq.supportedPseudoClasses[e10];
        return `${t10}:${r12}, ${t10}[data-${r12}]:not([data-${r12}='false']), ${t10}.${r12}`;
      }
      let [r11, n10] = e10.split("__"), a2 = /* @__PURE__ */ S(r11);
      return n10 ? `${t10}[data-${a2}='${S(n10)}']` : `${t10}[data-${a2}]:not([data-${a2}='false'])`;
    }
  }
});
__publicField(_tq, "walkStateValues", function(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { default: {}, selectorPath: [], path: [] }, { $: n10, ...a2 } = e10;
  for (let e11 in a2) {
    var o2;
    let i2 = a2[e11], s2 = null !== (o2 = a2.default) && void 0 !== o2 ? o2 : r10.default, l2 = null != n10 ? n10 : O(s2, [.../* @__PURE__ */ r10.path.slice(1), "$"]), c2 = l2 ? [...r10.selectorPath, l2] : r10.selectorPath, u2 = [...r10.path, e11];
    if (w(i2)) {
      _tq.walkStateValues(i2, t10, { path: u2, selectorPath: c2, default: s2 });
      continue;
    }
    t10(i2, u2, c2);
  }
});
let tq = _tq;
let tU = (e10) => e10.reduce((e11, t10) => ({ ...e11, [t10]: true }), {});
const _tY = class _tY {
  constructor(e10, t10 = {}) {
    __publicField(this, "mode");
    __publicField(this, "varPrefix");
    __publicField(this, "cssVars", {});
    __publicField(this, "tokens", {});
    __publicField(this, "propValues", {});
    __publicField(this, "mixins", {});
    __publicField(this, "dp", (e10) => 0 === e10 ? 0 : `calc(${e10} * var(${this.cssVar("space", "dp")}))`);
    __publicField(this, "transformFallback", (e10, t10) => _tY.propsCanBaseDp[e10] && $(t10) ? _tY.propsCanPercent[e10] && 1 > Math.abs(t10) ? `${100 * t10}%` : this.dp(t10) : t10);
    __publicField(this, "token", new Proxy({}, { get: (e10, t10) => {
      var r10, n10;
      return this.tokens[t10] ? Object.assign((e11) => {
        var r11;
        return null === (r11 = this.tokens[t10]) || void 0 === r11 ? void 0 : r11.get(e11, `_${this.mode}`);
      }, { tokens: null === (r10 = this.tokens[t10]) || void 0 === r10 ? void 0 : r10.tokens }) : this.mixins[t10] ? Object.assign((e11) => {
        var r11;
        return null === (r11 = this.mixins[t10]) || void 0 === r11 ? void 0 : r11.get(e11);
      }, { tokens: null === (n10 = this.mixins[t10]) || void 0 === n10 ? void 0 : n10.tokens }) : void 0;
    } }));
    __publicField(this, "processValue", (e10, t10) => {
      var r10, n10, a2;
      if (tP(t10)) {
        let r11 = null === (n10 = this.propValues[e10]) || void 0 === n10 ? void 0 : n10.use(t10.token, true);
        return r11 ? t10(r11) : void 0;
      }
      return null !== (a2 = null === (r10 = this.propValues[e10]) || void 0 === r10 ? void 0 : r10.use(t10)) && void 0 !== a2 ? a2 : this.transformFallback(e10, t10);
    });
    __publicField(this, "unstable_sx", (e10) => new tq({ mixins: this.mixins, varPrefix: this.varPrefix, processValue: this.processValue }).processAll(e10));
    var r10, n10;
    for (let a2 in this.theme = e10, this.varPrefix = null !== (r10 = t10.varPrefix) && void 0 !== r10 ? r10 : "vk", this.mode = null !== (n10 = t10.mode) && void 0 !== n10 ? n10 : "light", k(this.cssVars, [/* @__PURE__ */ this.cssVar("space", "dp")], "0.1rem"), e10) {
      let t11 = e10[a2];
      if (t11.type == tw.var) {
        let e11 = new tk(t11, { cssVar: (e12) => this.cssVar(a2, e12), transformFallback: (e12) => this.transformFallback(t11.on[0], e12) });
        for (let r11 of (this.tokens[a2] = e11, t11.on))
          this.propValues[r11] = e11;
        for (let t12 of e11.tokens)
          for (let r11 of ["light", "dark"]) {
            let n11 = r11 === this.mode ? "_default" : `_${r11}`, o2 = /* @__PURE__ */ e11.get(t12, n11, true);
            R(o2) || ("_default" === n11 ? k(this.cssVars, [/* @__PURE__ */ this.cssVar(a2, t12)], o2) : k(this.cssVars, [n11, /* @__PURE__ */ this.cssVar(a2, t12)], o2));
          }
        continue;
      }
      if (t11.type == tw.mixin) {
        let e11 = new tM(t11);
        for (let r11 of t11.on)
          this.mixins[r11] = e11;
      }
    }
  }
  static create(e10, t10) {
    return new _tY(e10, t10);
  }
  cssVar(e10, t10) {
    return `--${this.varPrefix}-${S(e10)}__${t10.replaceAll("/", "--").replaceAll(".", "__")}`;
  }
  get rootCSSVars() {
    return this.cssVars;
  }
  unstable_css(e10, t10) {
    var r10;
    let n10 = null != t10 ? t10 : {};
    return n10.__emotion_styles = null !== (r10 = n10.__emotion_styles) && void 0 !== r10 ? r10 : tW(/* @__PURE__ */ this.unstable_sx(t10), null == e10 ? void 0 : e10.registered, {}), n10.__emotion_styles;
  }
  toFigmaTokens() {
    let e10 = { space: { dp: { type: "sizing", value: 1 } } }, t10 = {}, r10 = {}, n10 = (e11, t11, r11) => {
      let n11 = e11;
      for (let e12 = 0; e12 < t11.length; e12++) {
        var a3;
        if (e12 == t11.length - 1) {
          n11[t11[e12]] = r11;
          continue;
        }
        n11[t11[e12]] = null !== (a3 = n11[t11[e12]]) && void 0 !== a3 ? a3 : {}, n11 = n11[t11[e12]];
      }
    }, a2 = (e11, t11) => C(t11) ? { type: e11, value: /* @__PURE__ */ A(t11, (t12) => a2(e11, t12).value) } : (y(t11) && (t11 = /* @__PURE__ */ t11.replace(/var\(([^)]+)\)/g, (e12) => {
      let t12 = /* @__PURE__ */ e12.slice(4, e12.length - 1), r11 = /* @__PURE__ */ t12.slice(`--${this.varPrefix}-`.length).split("--");
      return `{${r11[0].split("__").map((e13, t13) => 0 == t13 ? I(e13) : e13).join(".")}}`;
    }).replace(/calc\(.+\)$/g, (e12) => e12.slice(5, e12.length - 1))), { type: e11, value: t11 });
    for (let o2 in this.tokens) {
      let i2 = this.tokens[o2], s2 = (s3) => i2.tokens.forEach((l2) => {
        if (!l2.includes("/")) {
          if (l2.startsWith("sys.")) {
            let e11 = /* @__PURE__ */ i2.get(l2, "_default"), c2 = /* @__PURE__ */ i2.get(l2, "_dark");
            n10(t10, [o2, .../* @__PURE__ */ l2.split(".")], /* @__PURE__ */ a2(s3, e11)), e11 != c2 && n10(r10, [o2, .../* @__PURE__ */ l2.split(".")], /* @__PURE__ */ a2(s3, c2));
          } else
            n10(e10, [o2, .../* @__PURE__ */ l2.split(".")], /* @__PURE__ */ a2(s3, /* @__PURE__ */ i2.get(l2, "_default")));
        }
      });
      switch (o2) {
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
    for (let e11 in this.mixins) {
      let r11 = this.mixins[e11], o2 = (o3) => r11.tokens.forEach((i2) => {
        let s2 = this.unstable_sx(/* @__PURE__ */ r11.get(i2))[0];
        n10(t10, [e11, .../* @__PURE__ */ i2.split(".")], /* @__PURE__ */ a2(o3, s2));
      });
      "textStyle" === e11 && o2("typography");
    }
    return { seed: e10, base: t10, dark: r10 };
  }
};
__publicField(_tY, "propsCanPercent", tU([...tx.boxSize({}).on]));
__publicField(_tY, "propsCanBaseDp", tU([...tx.boxSize({}).on, ...tx.space({}).on, ...tx.fontSize({}).on, ...tx.letterSpacing({}).on, ...tx.lineHeight({}).on, ...tx.rounded({}).on]));
let tY = _tY;
let tG = { shadow: /* @__PURE__ */ tx.shadow({ 0: { _default: "0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0)", _dark: "0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0)" }, 1: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)", _dark: "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 2: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)", _dark: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 3: { _default: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)" }, 4: { _default: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)" }, 5: { _default: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)", _dark: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)" } }), elevation: /* @__PURE__ */ tx.customMixin("elevation", { 0: /* @__PURE__ */ tx.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "0", _hover: { shadow: "1" } }), 1: /* @__PURE__ */ tx.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "1", _hover: { shadow: "2" } }), 2: /* @__PURE__ */ tx.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "2", _hover: { shadow: "3" } }), 3: /* @__PURE__ */ tx.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "3", _hover: { shadow: "4" } }), 4: /* @__PURE__ */ tx.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "4", _hover: { shadow: "5" } }) }) }, tX = { font: /* @__PURE__ */ tx.font({ brand: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', plain: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', code: "'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace" }), fontWeight: /* @__PURE__ */ tx.fontWeight({ regular: 400, medium: 500, bold: 700 }), textStyle: /* @__PURE__ */ tx.customMixin("textStyle", { sys: { "display-large": /* @__PURE__ */ tx.mixin({ lineHeight: 64, fontSize: 57, letterSpacing: -0.25, fontWeight: "regular", font: "brand" }), "display-medium": /* @__PURE__ */ tx.mixin({ lineHeight: 52, fontSize: 45, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "display-small": /* @__PURE__ */ tx.mixin({ lineHeight: 44, fontSize: 36, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-large": /* @__PURE__ */ tx.mixin({ lineHeight: 40, fontSize: 32, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-medium": /* @__PURE__ */ tx.mixin({ lineHeight: 36, fontSize: 28, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-small": /* @__PURE__ */ tx.mixin({ lineHeight: 32, fontSize: 24, letterSpacing: 0, fontWeight: "regular", font: "plain" }), "title-large": /* @__PURE__ */ tx.mixin({ lineHeight: 28, fontSize: 22, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "title-medium": /* @__PURE__ */ tx.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.15, fontWeight: "medium", font: "plain" }), "title-small": /* @__PURE__ */ tx.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-large": /* @__PURE__ */ tx.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-medium": /* @__PURE__ */ tx.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "label-small": /* @__PURE__ */ tx.mixin({ lineHeight: 16, fontSize: 11, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "body-large": /* @__PURE__ */ tx.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.5, fontWeight: "regular", font: "plain" }), "body-medium": /* @__PURE__ */ tx.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.25, fontWeight: "regular", font: "plain" }), "body-small": /* @__PURE__ */ tx.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.4, fontWeight: "regular", font: "plain" }) } }) };
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
function tK(e10) {
  return e10 < 0 ? -1 : 0 === e10 ? 0 : 1;
}
function tJ(e10, t10, r10) {
  return r10 < e10 ? e10 : r10 > t10 ? t10 : r10;
}
function tZ(e10, t10) {
  let r10 = e10[0] * t10[0][0] + e10[1] * t10[0][1] + e10[2] * t10[0][2], n10 = e10[0] * t10[1][0] + e10[1] * t10[1][1] + e10[2] * t10[1][2], a2 = e10[0] * t10[2][0] + e10[1] * t10[2][1] + e10[2] * t10[2][2];
  return [r10, n10, a2];
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
let tQ = [[0.41233895, 0.35762064, 0.18051042], [0.2126, 0.7152, 0.0722], [0.01932141, 0.11916382, 0.95034478]], t0 = [[3.2413774792388685, -1.5376652402851851, -0.49885366846268053], [-0.9691452513005321, 1.8758853451067872, 0.04156585616912061], [0.05562093689691305, -0.20395524564742123, 1.0571799111220335]], t1 = [95.047, 100, 108.883];
function t2(e10, t10, r10) {
  return (-16777216 | (255 & e10) << 16 | (255 & t10) << 8 | 255 & r10) >>> 0;
}
function t4(e10) {
  let t10 = /* @__PURE__ */ t9(e10[0]), r10 = /* @__PURE__ */ t9(e10[1]), n10 = /* @__PURE__ */ t9(e10[2]);
  return t2(t10, r10, n10);
}
function t5(e10) {
  let t10 = (
    /**
    * Converts a color from XYZ to ARGB.
    */
    function(e11) {
      let t11 = /* @__PURE__ */ t6(e11 >> 16 & 255), r10 = /* @__PURE__ */ t6(e11 >> 8 & 255), n10 = /* @__PURE__ */ t6(255 & e11);
      return tZ([t11, r10, n10], tQ);
    }(e10)[1]
  );
  return 116 * re(t10 / 100) - 16;
}
function t3(e10) {
  return 100 * function(e11) {
    let t10 = e11 * e11 * e11;
    return t10 > 216 / 24389 ? t10 : (116 * e11 - 16) / (24389 / 27);
  }((e10 + 16) / 116);
}
function t8(e10) {
  return 116 * re(e10 / 100) - 16;
}
function t6(e10) {
  let t10 = e10 / 255;
  return t10 <= 0.040449936 ? t10 / 12.92 * 100 : 100 * Math.pow((t10 + 0.055) / 1.055, 2.4);
}
function t9(e10) {
  var t10;
  let r10 = e10 / 100;
  return (t10 = /* @__PURE__ */ Math.round(255 * (r10 <= 31308e-7 ? 12.92 * r10 : 1.055 * Math.pow(r10, 1 / 2.4) - 0.055))) < 0 ? 0 : t10 > 255 ? 255 : t10;
}
function t7(e10) {
  return { r: e10 >> 16 & 255, g: e10 >> 8 & 255, b: 255 & e10, a: e10 >> 24 & 255 };
}
function re(e10) {
  return e10 > 216 / 24389 ? Math.pow(e10, 1 / 3) : (24389 / 27 * e10 + 16) / 116;
}
class rt {
  /**
  * Create ViewingConditions from a simple, physically relevant, set of
  * parameters.
  *
  * @param whitePoint White point, measured in the XYZ color space.
  *     default = D65, or sunny day afternoon
  * @param adaptingLuminance The luminance of the adapting field. Informally,
  *     how bright it is in the room where the color is viewed. Can be
  *     calculated from lux by multiplying lux by 0.0586. default = 11.72,
  *     or 200 lux.
  * @param backgroundLstar The lightness of the area surrounding the color.
  *     measured by L* in L*a*b*. default = 50.0
  * @param surround A general description of the lighting surrounding the
  *     color. 0 is pitch dark, like watching a movie in a theater. 1.0 is a
  *     dimly light room, like watching TV at home at night. 2.0 means there
  *     is no difference between the lighting on the color and around it.
  *     default = 2.0
  * @param discountingIlluminant Whether the eye accounts for the tint of the
  *     ambient lighting, such as knowing an apple is still red in green light.
  *     default = false, the eye does not perform this process on
  *       self-luminous objects like displays.
  */
  static make() {
    var e10, t10;
    let r10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t1, n10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200 / Math.PI * t3(50) / 100, a2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50, o2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2, i2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], s2 = 0.401288 * r10[0] + 0.650173 * r10[1] + -0.051461 * r10[2], l2 = -0.250268 * r10[0] + 1.204414 * r10[1] + 0.045854 * r10[2], c2 = -2079e-6 * r10[0] + 0.048952 * r10[1] + 0.953127 * r10[2], u2 = 0.8 + o2 / 10, d2 = u2 >= 0.9 ? (1 - (e10 = (u2 - 0.9) * 10)) * 0.59 + 0.69 * e10 : (1 - (t10 = (u2 - 0.8) * 10)) * 0.525 + 0.59 * t10, f2 = i2 ? 1 : u2 * (1 - 1 / 3.6 * Math.exp((-n10 - 42) / 92));
    f2 = f2 > 1 ? 1 : f2 < 0 ? 0 : f2;
    let h2 = [f2 * (100 / s2) + 1 - f2, f2 * (100 / l2) + 1 - f2, f2 * (100 / c2) + 1 - f2], p2 = 1 / (5 * n10 + 1), m2 = p2 * p2 * p2 * p2, g2 = 1 - m2, v2 = m2 * n10 + 0.1 * g2 * g2 * Math.cbrt(5 * n10), b2 = t3(a2) / r10[1], y2 = 1.48 + Math.sqrt(b2), w2 = 0.725 / Math.pow(b2, 0.2), x2 = [/* @__PURE__ */ Math.pow(v2 * h2[0] * s2 / 100, 0.42), /* @__PURE__ */ Math.pow(v2 * h2[1] * l2 / 100, 0.42), /* @__PURE__ */ Math.pow(v2 * h2[2] * c2 / 100, 0.42)], k2 = [400 * x2[0] / (x2[0] + 27.13), 400 * x2[1] / (x2[1] + 27.13), 400 * x2[2] / (x2[2] + 27.13)], M2 = (2 * k2[0] + k2[1] + 0.05 * k2[2]) * w2;
    return new rt(b2, M2, w2, w2, d2, u2, h2, v2, Math.pow(v2, 0.25), y2);
  }
  /**
  * Parameters are intermediate values of the CAM16 conversion process. Their
  * names are shorthand for technical color science terminology, this class
  * would not benefit from documenting them individually. A brief overview
  * is available in the CAM16 specification, and a complete overview requires
  * a color science textbook, such as Fairchild's Color Appearance Models.
  */
  constructor(e10, t10, r10, n10, a2, o2, i2, s2, l2, c2) {
    this.n = e10, this.aw = t10, this.nbb = r10, this.ncb = n10, this.c = a2, this.nc = o2, this.rgbD = i2, this.fl = s2, this.fLRoot = l2, this.z = c2;
  }
}
rt.DEFAULT = /* @__PURE__ */ rt.make();
class rr {
  /**
  * All of the CAM16 dimensions can be calculated from 3 of the dimensions, in
  * the following combinations:
  *      -  {j or q} and {c, m, or s} and hue
  *      - jstar, astar, bstar
  * Prefer using a static method that constructs from 3 of those dimensions.
  * This constructor is intended for those methods to use to return all
  * possible dimensions.
  *
  * @param hue
  * @param chroma informally, colorfulness / color intensity. like saturation
  *     in HSL, except perceptually accurate.
  * @param j lightness
  * @param q brightness; ratio of lightness to white point's lightness
  * @param m colorfulness
  * @param s saturation; ratio of chroma to white point's chroma
  * @param jstar CAM16-UCS J coordinate
  * @param astar CAM16-UCS a coordinate
  * @param bstar CAM16-UCS b coordinate
  */
  constructor(e10, t10, r10, n10, a2, o2, i2, s2, l2) {
    this.hue = e10, this.chroma = t10, this.j = r10, this.q = n10, this.m = a2, this.s = o2, this.jstar = i2, this.astar = s2, this.bstar = l2;
  }
  /**
  * CAM16 instances also have coordinates in the CAM16-UCS space, called J*,
  * a*, b*, or jstar, astar, bstar in code. CAM16-UCS is included in the CAM16
  * specification, and is used to measure distances between colors.
  */
  distance(e10) {
    let t10 = this.jstar - e10.jstar, r10 = this.astar - e10.astar, n10 = this.bstar - e10.bstar;
    return 1.41 * Math.pow(/* @__PURE__ */ Math.sqrt(t10 * t10 + r10 * r10 + n10 * n10), 0.63);
  }
  /**
  * @param argb ARGB representation of a color.
  * @return CAM16 color, assuming the color was viewed in default viewing
  *     conditions.
  */
  static fromInt(e10) {
    return rr.fromIntInViewingConditions(e10, rt.DEFAULT);
  }
  /**
  * @param argb ARGB representation of a color.
  * @param viewingConditions Information about the environment where the color
  *     was observed.
  * @return CAM16 color.
  */
  static fromIntInViewingConditions(e10, t10) {
    let r10 = /* @__PURE__ */ t6((16711680 & e10) >> 16), n10 = /* @__PURE__ */ t6((65280 & e10) >> 8), a2 = /* @__PURE__ */ t6(255 & e10), o2 = 0.41233895 * r10 + 0.35762064 * n10 + 0.18051042 * a2, i2 = 0.2126 * r10 + 0.7152 * n10 + 0.0722 * a2, s2 = 0.01932141 * r10 + 0.11916382 * n10 + 0.95034478 * a2, l2 = t10.rgbD[0] * (0.401288 * o2 + 0.650173 * i2 - 0.051461 * s2), c2 = t10.rgbD[1] * (-0.250268 * o2 + 1.204414 * i2 + 0.045854 * s2), u2 = t10.rgbD[2] * (-2079e-6 * o2 + 0.048952 * i2 + 0.953127 * s2), d2 = /* @__PURE__ */ Math.pow(t10.fl * Math.abs(l2) / 100, 0.42), f2 = /* @__PURE__ */ Math.pow(t10.fl * Math.abs(c2) / 100, 0.42), h2 = /* @__PURE__ */ Math.pow(t10.fl * Math.abs(u2) / 100, 0.42), p2 = 400 * tK(l2) * d2 / (d2 + 27.13), m2 = 400 * tK(c2) * f2 / (f2 + 27.13), g2 = 400 * tK(u2) * h2 / (h2 + 27.13), v2 = (11 * p2 + -12 * m2 + g2) / 11, b2 = (p2 + m2 - 2 * g2) / 9, y2 = 180 * /* @__PURE__ */ Math.atan2(b2, v2) / Math.PI, w2 = y2 < 0 ? y2 + 360 : y2 >= 360 ? y2 - 360 : y2, x2 = w2 * Math.PI / 180, k2 = (40 * p2 + 20 * m2 + g2) / 20 * t10.nbb, M2 = 100 * Math.pow(k2 / t10.aw, t10.c * t10.z), C2 = 4 / t10.c * Math.sqrt(M2 / 100) * (t10.aw + 4) * t10.fLRoot, P2 = w2 < 20.14 ? w2 + 360 : w2, _2 = 5e4 / 13 * (0.25 * (Math.cos(P2 * Math.PI / 180 + 2) + 3.8)) * t10.nc * t10.ncb, S2 = Math.pow(_2 * Math.sqrt(v2 * v2 + b2 * b2) / ((20 * p2 + 20 * m2 + 21 * g2) / 20 + 0.305), 0.9) * Math.pow(1.64 - Math.pow(0.29, t10.n), 0.73), O2 = S2 * Math.sqrt(M2 / 100), T2 = O2 * t10.fLRoot, D2 = 50 * Math.sqrt(S2 * t10.c / (t10.aw + 4)), R2 = (1 + 100 * 7e-3) * M2 / (1 + 7e-3 * M2), $2 = 1 / 0.0228 * Math.log(1 + 0.0228 * T2), A2 = $2 * Math.cos(x2), I2 = $2 * Math.sin(x2);
    return new rr(w2, O2, M2, C2, T2, D2, R2, A2, I2);
  }
  /**
  * @param j CAM16 lightness
  * @param c CAM16 chroma
  * @param h CAM16 hue
  */
  static fromJch(e10, t10, r10) {
    return rr.fromJchInViewingConditions(e10, t10, r10, rt.DEFAULT);
  }
  /**
  * @param j CAM16 lightness
  * @param c CAM16 chroma
  * @param h CAM16 hue
  * @param viewingConditions Information about the environment where the color
  *     was observed.
  */
  static fromJchInViewingConditions(e10, t10, r10, n10) {
    let a2 = 4 / n10.c * Math.sqrt(e10 / 100) * (n10.aw + 4) * n10.fLRoot, o2 = t10 * n10.fLRoot, i2 = t10 / Math.sqrt(e10 / 100), s2 = 50 * Math.sqrt(i2 * n10.c / (n10.aw + 4)), l2 = r10 * Math.PI / 180, c2 = (1 + 100 * 7e-3) * e10 / (1 + 7e-3 * e10), u2 = 1 / 0.0228 * Math.log(1 + 0.0228 * o2), d2 = u2 * Math.cos(l2), f2 = u2 * Math.sin(l2);
    return new rr(r10, t10, e10, a2, o2, s2, c2, d2, f2);
  }
  /**
  * @param jstar CAM16-UCS lightness.
  * @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
  *     coordinate on the Y axis.
  * @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
  *     coordinate on the X axis.
  */
  static fromUcs(e10, t10, r10) {
    return rr.fromUcsInViewingConditions(e10, t10, r10, rt.DEFAULT);
  }
  /**
  * @param jstar CAM16-UCS lightness.
  * @param astar CAM16-UCS a dimension. Like a* in L*a*b*, it is a Cartesian
  *     coordinate on the Y axis.
  * @param bstar CAM16-UCS b dimension. Like a* in L*a*b*, it is a Cartesian
  *     coordinate on the X axis.
  * @param viewingConditions Information about the environment where the color
  *     was observed.
  */
  static fromUcsInViewingConditions(e10, t10, r10, n10) {
    let a2 = /* @__PURE__ */ Math.sqrt(t10 * t10 + r10 * r10), o2 = (Math.exp(0.0228 * a2) - 1) / 0.0228 / n10.fLRoot, i2 = Math.atan2(r10, t10) * (180 / Math.PI);
    return i2 < 0 && (i2 += 360), rr.fromJchInViewingConditions(e10 / (1 - (e10 - 100) * 7e-3), o2, i2, n10);
  }
  /**
  *  @return ARGB representation of color, assuming the color was viewed in
  *     default viewing conditions, which are near-identical to the default
  *     viewing conditions for sRGB.
  */
  toInt() {
    return this.viewed(rt.DEFAULT);
  }
  /**
  * @param viewingConditions Information about the environment where the color
  *     will be viewed.
  * @return ARGB representation of color
  */
  viewed(e10) {
    let t10 = 0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100), r10 = /* @__PURE__ */ Math.pow(t10 / Math.pow(1.64 - Math.pow(0.29, e10.n), 0.73), 1 / 0.9), n10 = this.hue * Math.PI / 180, a2 = e10.aw * Math.pow(this.j / 100, 1 / e10.c / e10.z), o2 = 0.25 * (Math.cos(n10 + 2) + 3.8) * (5e4 / 13) * e10.nc * e10.ncb, i2 = a2 / e10.nbb, s2 = /* @__PURE__ */ Math.sin(n10), l2 = /* @__PURE__ */ Math.cos(n10), c2 = 23 * (i2 + 0.305) * r10 / (23 * o2 + 11 * r10 * l2 + 108 * r10 * s2), u2 = c2 * l2, d2 = c2 * s2, f2 = (460 * i2 + 451 * u2 + 288 * d2) / 1403, h2 = (460 * i2 - 891 * u2 - 261 * d2) / 1403, p2 = (460 * i2 - 220 * u2 - 6300 * d2) / 1403, m2 = /* @__PURE__ */ Math.max(0, 27.13 * Math.abs(f2) / (400 - Math.abs(f2))), g2 = tK(f2) * (100 / e10.fl) * Math.pow(m2, 1 / 0.42), v2 = /* @__PURE__ */ Math.max(0, 27.13 * Math.abs(h2) / (400 - Math.abs(h2))), b2 = tK(h2) * (100 / e10.fl) * Math.pow(v2, 1 / 0.42), y2 = /* @__PURE__ */ Math.max(0, 27.13 * Math.abs(p2) / (400 - Math.abs(p2))), w2 = tK(p2) * (100 / e10.fl) * Math.pow(y2, 1 / 0.42), x2 = g2 / e10.rgbD[0], k2 = b2 / e10.rgbD[1], M2 = w2 / e10.rgbD[2], C2 = (
      /**
      * Converts a color from ARGB to XYZ.
      */
      /* @__PURE__ */ function(e11, t11, r11) {
        let n11 = t0[0][0] * e11 + t0[0][1] * t11 + t0[0][2] * r11, a3 = t0[1][0] * e11 + t0[1][1] * t11 + t0[1][2] * r11, o3 = t0[2][0] * e11 + t0[2][1] * t11 + t0[2][2] * r11, i3 = /* @__PURE__ */ t9(n11), s3 = /* @__PURE__ */ t9(a3), l3 = /* @__PURE__ */ t9(o3);
        return t2(i3, s3, l3);
      }(1.86206786 * x2 - 1.01125463 * k2 + 0.14918677 * M2, 0.38752654 * x2 + 0.62144744 * k2 - 897398e-8 * M2, -0.0158415 * x2 - 0.03412294 * k2 + 1.04996444 * M2)
    );
    return C2;
  }
  /// Given color expressed in XYZ and viewed in [viewingConditions], convert to
  /// CAM16.
  static fromXyzInViewingConditions(e10, t10, r10, n10) {
    let a2 = n10.rgbD[0] * (0.401288 * e10 + 0.650173 * t10 - 0.051461 * r10), o2 = n10.rgbD[1] * (-0.250268 * e10 + 1.204414 * t10 + 0.045854 * r10), i2 = n10.rgbD[2] * (-2079e-6 * e10 + 0.048952 * t10 + 0.953127 * r10), s2 = /* @__PURE__ */ Math.pow(n10.fl * Math.abs(a2) / 100, 0.42), l2 = /* @__PURE__ */ Math.pow(n10.fl * Math.abs(o2) / 100, 0.42), c2 = /* @__PURE__ */ Math.pow(n10.fl * Math.abs(i2) / 100, 0.42), u2 = 400 * tK(a2) * s2 / (s2 + 27.13), d2 = 400 * tK(o2) * l2 / (l2 + 27.13), f2 = 400 * tK(i2) * c2 / (c2 + 27.13), h2 = (11 * u2 + -12 * d2 + f2) / 11, p2 = (u2 + d2 - 2 * f2) / 9, m2 = 180 * /* @__PURE__ */ Math.atan2(p2, h2) / Math.PI, g2 = m2 < 0 ? m2 + 360 : m2 >= 360 ? m2 - 360 : m2, v2 = g2 * Math.PI / 180, b2 = (40 * u2 + 20 * d2 + f2) / 20 * n10.nbb, y2 = 100 * Math.pow(b2 / n10.aw, n10.c * n10.z), w2 = 4 / n10.c * Math.sqrt(y2 / 100) * (n10.aw + 4) * n10.fLRoot, x2 = g2 < 20.14 ? g2 + 360 : g2, k2 = 5e4 / 13 * (0.25 * (Math.cos(x2 * Math.PI / 180 + 2) + 3.8)) * n10.nc * n10.ncb, M2 = Math.pow(k2 * Math.sqrt(h2 * h2 + p2 * p2) / ((20 * u2 + 20 * d2 + 21 * f2) / 20 + 0.305), 0.9) * Math.pow(1.64 - Math.pow(0.29, n10.n), 0.73), C2 = M2 * Math.sqrt(y2 / 100), P2 = C2 * n10.fLRoot, _2 = 50 * Math.sqrt(M2 * n10.c / (n10.aw + 4)), S2 = (1 + 100 * 7e-3) * y2 / (1 + 7e-3 * y2), O2 = Math.log(1 + 0.0228 * P2) / 0.0228, T2 = O2 * Math.cos(v2), D2 = O2 * Math.sin(v2);
    return new rr(g2, C2, y2, w2, P2, _2, S2, T2, D2);
  }
  /// XYZ representation of CAM16 seen in [viewingConditions].
  xyzInViewingConditions(e10) {
    let t10 = 0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100), r10 = /* @__PURE__ */ Math.pow(t10 / Math.pow(1.64 - Math.pow(0.29, e10.n), 0.73), 1 / 0.9), n10 = this.hue * Math.PI / 180, a2 = e10.aw * Math.pow(this.j / 100, 1 / e10.c / e10.z), o2 = 0.25 * (Math.cos(n10 + 2) + 3.8) * (5e4 / 13) * e10.nc * e10.ncb, i2 = a2 / e10.nbb, s2 = /* @__PURE__ */ Math.sin(n10), l2 = /* @__PURE__ */ Math.cos(n10), c2 = 23 * (i2 + 0.305) * r10 / (23 * o2 + 11 * r10 * l2 + 108 * r10 * s2), u2 = c2 * l2, d2 = c2 * s2, f2 = (460 * i2 + 451 * u2 + 288 * d2) / 1403, h2 = (460 * i2 - 891 * u2 - 261 * d2) / 1403, p2 = (460 * i2 - 220 * u2 - 6300 * d2) / 1403, m2 = /* @__PURE__ */ Math.max(0, 27.13 * Math.abs(f2) / (400 - Math.abs(f2))), g2 = tK(f2) * (100 / e10.fl) * Math.pow(m2, 1 / 0.42), v2 = /* @__PURE__ */ Math.max(0, 27.13 * Math.abs(h2) / (400 - Math.abs(h2))), b2 = tK(h2) * (100 / e10.fl) * Math.pow(v2, 1 / 0.42), y2 = /* @__PURE__ */ Math.max(0, 27.13 * Math.abs(p2) / (400 - Math.abs(p2))), w2 = tK(p2) * (100 / e10.fl) * Math.pow(y2, 1 / 0.42), x2 = g2 / e10.rgbD[0], k2 = b2 / e10.rgbD[1], M2 = w2 / e10.rgbD[2];
    return [1.86206786 * x2 - 1.01125463 * k2 + 0.14918677 * M2, 0.38752654 * x2 + 0.62144744 * k2 - 897398e-8 * M2, -0.0158415 * x2 - 0.03412294 * k2 + 1.04996444 * M2];
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
class rn {
  /**
  * Sanitizes a small enough angle in radians.
  *
  * @param angle An angle in radians; must not deviate too much
  * from 0.
  * @return A coterminal angle between 0 and 2pi.
  */
  static sanitizeRadians(e10) {
    return (e10 + 8 * Math.PI) % (2 * Math.PI);
  }
  /**
  * Delinearizes an RGB component, returning a floating-point
  * number.
  *
  * @param rgbComponent 0.0 <= rgb_component <= 100.0, represents
  * linear R/G/B channel
  * @return 0.0 <= output <= 255.0, color channel converted to
  * regular RGB space
  */
  static trueDelinearized(e10) {
    let t10 = e10 / 100;
    return 255 * (t10 <= 31308e-7 ? 12.92 * t10 : 1.055 * Math.pow(t10, 1 / 2.4) - 0.055);
  }
  static chromaticAdaptation(e10) {
    let t10 = /* @__PURE__ */ Math.pow(/* @__PURE__ */ Math.abs(e10), 0.42);
    return 400 * tK(e10) * t10 / (t10 + 27.13);
  }
  /**
  * Returns the hue of a linear RGB color in CAM16.
  *
  * @param linrgb The linear RGB coordinates of a color.
  * @return The hue of the color in CAM16, in radians.
  */
  static hueOf(e10) {
    let t10 = /* @__PURE__ */ tZ(e10, rn.SCALED_DISCOUNT_FROM_LINRGB), r10 = /* @__PURE__ */ rn.chromaticAdaptation(t10[0]), n10 = /* @__PURE__ */ rn.chromaticAdaptation(t10[1]), a2 = /* @__PURE__ */ rn.chromaticAdaptation(t10[2]);
    return Math.atan2((r10 + n10 - 2 * a2) / 9, (11 * r10 + -12 * n10 + a2) / 11);
  }
  static areInCyclicOrder(e10, t10, r10) {
    let n10 = /* @__PURE__ */ rn.sanitizeRadians(t10 - e10), a2 = /* @__PURE__ */ rn.sanitizeRadians(r10 - e10);
    return n10 < a2;
  }
  /**
  * Solves the lerp equation.
  *
  * @param source The starting number.
  * @param mid The number in the middle.
  * @param target The ending number.
  * @return A number t such that lerp(source, target, t) = mid.
  */
  static intercept(e10, t10, r10) {
    return (t10 - e10) / (r10 - e10);
  }
  static lerpPoint(e10, t10, r10) {
    return [e10[0] + (r10[0] - e10[0]) * t10, e10[1] + (r10[1] - e10[1]) * t10, e10[2] + (r10[2] - e10[2]) * t10];
  }
  /**
  * Intersects a segment with a plane.
  *
  * @param source The coordinates of point A.
  * @param coordinate The R-, G-, or B-coordinate of the plane.
  * @param target The coordinates of point B.
  * @param axis The axis the plane is perpendicular with. (0: R, 1:
  * G, 2: B)
  * @return The intersection point of the segment AB with the plane
  * R=coordinate, G=coordinate, or B=coordinate
  */
  static setCoordinate(e10, t10, r10, n10) {
    let a2 = /* @__PURE__ */ rn.intercept(e10[n10], t10, r10[n10]);
    return rn.lerpPoint(e10, a2, r10);
  }
  static isBounded(e10) {
    return 0 <= e10 && e10 <= 100;
  }
  /**
  * Returns the nth possible vertex of the polygonal intersection.
  *
  * @param y The Y value of the plane.
  * @param n The zero-based index of the point. 0 <= n <= 11.
  * @return The nth possible vertex of the polygonal intersection
  * of the y plane and the RGB cube, in linear RGB coordinates, if
  * it exists. If this possible vertex lies outside of the cube,
  * [-1.0, -1.0, -1.0] is returned.
  */
  static nthVertex(e10, t10) {
    let r10 = rn.Y_FROM_LINRGB[0], n10 = rn.Y_FROM_LINRGB[1], a2 = rn.Y_FROM_LINRGB[2], o2 = t10 % 4 <= 1 ? 0 : 100, i2 = t10 % 2 == 0 ? 0 : 100;
    if (t10 < 4) {
      let t11 = (e10 - o2 * n10 - i2 * a2) / r10;
      return rn.isBounded(t11) ? [t11, o2, i2] : [-1, -1, -1];
    }
    if (t10 < 8) {
      let t11 = (e10 - i2 * r10 - o2 * a2) / n10;
      return rn.isBounded(t11) ? [i2, t11, o2] : [-1, -1, -1];
    }
    {
      let t11 = (e10 - o2 * r10 - i2 * n10) / a2;
      return rn.isBounded(t11) ? [o2, i2, t11] : [-1, -1, -1];
    }
  }
  /**
  * Finds the segment containing the desired color.
  *
  * @param y The Y value of the color.
  * @param targetHue The hue of the color.
  * @return A list of two sets of linear RGB coordinates, each
  * corresponding to an endpoint of the segment containing the
  * desired color.
  */
  static bisectToSegment(e10, t10) {
    let r10 = [-1, -1, -1], n10 = r10, a2 = 0, o2 = 0, i2 = false, s2 = true;
    for (let l2 = 0; l2 < 12; l2++) {
      let c2 = /* @__PURE__ */ rn.nthVertex(e10, l2);
      if (c2[0] < 0)
        continue;
      let u2 = /* @__PURE__ */ rn.hueOf(c2);
      if (!i2) {
        r10 = c2, n10 = c2, a2 = u2, o2 = u2, i2 = true;
        continue;
      }
      (s2 || rn.areInCyclicOrder(a2, u2, o2)) && (s2 = false, rn.areInCyclicOrder(a2, t10, u2) ? (n10 = c2, o2 = u2) : (r10 = c2, a2 = u2));
    }
    return [r10, n10];
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
  /**
  * Finds a color with the given Y and hue on the boundary of the
  * cube.
  *
  * @param y The Y value of the color.
  * @param targetHue The hue of the color.
  * @return The desired color, in linear RGB coordinates.
  */
  static bisectToLimit(e10, t10) {
    let r10 = /* @__PURE__ */ rn.bisectToSegment(e10, t10), n10 = r10[0], a2 = /* @__PURE__ */ rn.hueOf(n10), o2 = r10[1];
    for (let e11 = 0; e11 < 3; e11++)
      if (n10[e11] !== o2[e11]) {
        let r11 = -1, i2 = 255;
        n10[e11] < o2[e11] ? (r11 = /* @__PURE__ */ rn.criticalPlaneBelow(/* @__PURE__ */ rn.trueDelinearized(n10[e11])), i2 = /* @__PURE__ */ rn.criticalPlaneAbove(/* @__PURE__ */ rn.trueDelinearized(o2[e11]))) : (r11 = /* @__PURE__ */ rn.criticalPlaneAbove(/* @__PURE__ */ rn.trueDelinearized(n10[e11])), i2 = /* @__PURE__ */ rn.criticalPlaneBelow(/* @__PURE__ */ rn.trueDelinearized(o2[e11])));
        for (let s2 = 0; s2 < 8 && !(1 >= Math.abs(i2 - r11)); s2++) {
          let s3 = /* @__PURE__ */ Math.floor((r11 + i2) / 2), l2 = rn.CRITICAL_PLANES[s3], c2 = /* @__PURE__ */ rn.setCoordinate(n10, l2, o2, e11), u2 = /* @__PURE__ */ rn.hueOf(c2);
          rn.areInCyclicOrder(a2, t10, u2) ? (o2 = c2, i2 = s3) : (n10 = c2, a2 = u2, r11 = s3);
        }
      }
    return rn.midpoint(n10, o2);
  }
  static inverseChromaticAdaptation(e10) {
    let t10 = /* @__PURE__ */ Math.abs(e10);
    return tK(e10) * Math.pow(/* @__PURE__ */ Math.max(0, 27.13 * t10 / (400 - t10)), 1 / 0.42);
  }
  /**
  * Finds a color with the given hue, chroma, and Y.
  *
  * @param hueRadians The desired hue in radians.
  * @param chroma The desired chroma.
  * @param y The desired Y.
  * @return The desired color as a hexadecimal integer, if found; 0
  * otherwise.
  */
  static findResultByJ(e10, t10, r10) {
    let n10 = 11 * Math.sqrt(r10), a2 = rt.DEFAULT, o2 = 1 / Math.pow(1.64 - Math.pow(0.29, a2.n), 0.73), i2 = 0.25 * (Math.cos(e10 + 2) + 3.8) * (5e4 / 13) * a2.nc * a2.ncb, s2 = /* @__PURE__ */ Math.sin(e10), l2 = /* @__PURE__ */ Math.cos(e10);
    for (let e11 = 0; e11 < 5; e11++) {
      let c2 = n10 / 100, u2 = 0 === t10 || 0 === n10 ? 0 : t10 / Math.sqrt(c2), d2 = /* @__PURE__ */ Math.pow(u2 * o2, 1 / 0.9), f2 = a2.aw * Math.pow(c2, 1 / a2.c / a2.z), h2 = f2 / a2.nbb, p2 = 23 * (h2 + 0.305) * d2 / (23 * i2 + 11 * d2 * l2 + 108 * d2 * s2), m2 = p2 * l2, g2 = p2 * s2, v2 = (460 * h2 + 451 * m2 + 288 * g2) / 1403, b2 = (460 * h2 - 891 * m2 - 261 * g2) / 1403, y2 = (460 * h2 - 220 * m2 - 6300 * g2) / 1403, w2 = /* @__PURE__ */ rn.inverseChromaticAdaptation(v2), x2 = /* @__PURE__ */ rn.inverseChromaticAdaptation(b2), k2 = /* @__PURE__ */ rn.inverseChromaticAdaptation(y2), M2 = /* @__PURE__ */ tZ([w2, x2, k2], rn.LINRGB_FROM_SCALED_DISCOUNT);
      if (M2[0] < 0 || M2[1] < 0 || M2[2] < 0)
        break;
      let C2 = rn.Y_FROM_LINRGB[0], P2 = rn.Y_FROM_LINRGB[1], _2 = rn.Y_FROM_LINRGB[2], S2 = C2 * M2[0] + P2 * M2[1] + _2 * M2[2];
      if (S2 <= 0)
        break;
      if (4 === e11 || 2e-3 > Math.abs(S2 - r10)) {
        if (M2[0] > 100.01 || M2[1] > 100.01 || M2[2] > 100.01)
          return 0;
        return t4(M2);
      }
      n10 -= (S2 - r10) * n10 / (2 * S2);
    }
    return 0;
  }
  /**
  * Finds an sRGB color with the given hue, chroma, and L*, if
  * possible.
  *
  * @param hueDegrees The desired hue, in degrees.
  * @param chroma The desired chroma.
  * @param lstar The desired L*.
  * @return A hexadecimal representing the sRGB color. The color
  * has sufficiently close hue, chroma, and L* to the desired
  * values, if possible; otherwise, the hue and L* will be
  * sufficiently close, and chroma will be maximized.
  */
  static solveToInt(e10, t10, r10) {
    var n10;
    if (t10 < 1e-4 || r10 < 1e-4 || r10 > 99.9999)
      return (
        /**
        * Converts an L* value to an ARGB representation.
        *
        * @param lstar L* in L*a*b*
        * @return ARGB representation of grayscale color with lightness
        * matching L*
        */
        function(e11) {
          let t11 = /* @__PURE__ */ t3(e11), r11 = /* @__PURE__ */ t9(t11);
          return t2(r11, r11, r11);
        }(r10)
      );
    (n10 = e10 % 360) < 0 && (n10 += 360), e10 = n10;
    let a2 = e10 / 180 * Math.PI, o2 = /* @__PURE__ */ t3(r10), i2 = /* @__PURE__ */ rn.findResultByJ(a2, t10, o2);
    if (0 !== i2)
      return i2;
    let s2 = /* @__PURE__ */ rn.bisectToLimit(o2, a2);
    return t4(s2);
  }
  /**
  * Finds an sRGB color with the given hue, chroma, and L*, if
  * possible.
  *
  * @param hueDegrees The desired hue, in degrees.
  * @param chroma The desired chroma.
  * @param lstar The desired L*.
  * @return An CAM16 object representing the sRGB color. The color
  * has sufficiently close hue, chroma, and L* to the desired
  * values, if possible; otherwise, the hue and L* will be
  * sufficiently close, and chroma will be maximized.
  */
  static solveToCam(e10, t10, r10) {
    return rr.fromInt(/* @__PURE__ */ rn.solveToInt(e10, t10, r10));
  }
}
rn.SCALED_DISCOUNT_FROM_LINRGB = [[0.001200833568784504, 0.002389694492170889, 2795742885861124e-19], [5891086651375999e-19, 0.0029785502573438758, 3270666104008398e-19], [10146692491640572e-20, 5364214359186694e-19, 0.0032979401770712076]], rn.LINRGB_FROM_SCALED_DISCOUNT = [[1373.2198709594231, -1100.4251190754821, -7.278681089101213], [-271.815969077903, 559.6580465940733, -32.46047482791194], [1.9622899599665666, -57.173814538844006, 308.7233197812385]], rn.Y_FROM_LINRGB = [0.2126, 0.7152, 0.0722], rn.CRITICAL_PLANES = [0.015176349177441876, 0.045529047532325624, 0.07588174588720938, 0.10623444424209313, 0.13658714259697685, 0.16693984095186062, 0.19729253930674434, 0.2276452376616281, 0.2579979360165119, 0.28835063437139563, 0.3188300904430532, 0.350925934958123, 0.3848314933096426, 0.42057480301049466, 0.458183274052838, 0.4976837250274023, 0.5391024159806381, 0.5824650784040898, 0.6277969426914107, 0.6751227633498623, 0.7244668422128921, 0.775853049866786, 0.829304845476233, 0.8848452951698498, 0.942497089126609, 1.0022825574869039, 1.0642236851973577, 1.1283421258858297, 1.1946592148522128, 1.2631959812511864, 1.3339731595349034, 1.407011200216447, 1.4823302800086415, 1.5599503113873272, 1.6398909516233677, 1.7221716113234105, 1.8068114625156377, 1.8938294463134073, 1.9832442801866852, 2.075074464868551, 2.1693382909216234, 2.2660538449872063, 2.36523901573795, 2.4669114995532007, 2.5710888059345764, 2.6777882626779785, 2.7870270208169257, 2.898822059350997, 3.0131901897720907, 3.1301480604002863, 3.2497121605402226, 3.3718988244681087, 3.4967242352587946, 3.624204428461639, 3.754355295633311, 3.887192587735158, 4.022731918402185, 4.160988767090289, 4.301978482107941, 4.445716283538092, 4.592217266055746, 4.741496401646282, 4.893568542229298, 5.048448422192488, 5.20615066083972, 5.3666897647573375, 5.5300801301023865, 5.696336044816294, 5.865471690767354, 6.037501145825082, 6.212438385869475, 6.390297286737924, 6.571091626112461, 6.7548350853498045, 6.941541251256611, 7.131223617812143, 7.323895587840543, 7.5195704746346665, 7.7182615035334345, 7.919981813454504, 8.124744458384042, 8.332562408825165, 8.543448553206703, 8.757415699253682, 8.974476575321063, 9.194643831691977, 9.417930041841839, 9.644347703669503, 9.873909240696694, 10.106627003236781, 10.342513269534024, 10.58158024687427, 10.8238400726681, 11.069304815507364, 11.317986476196008, 11.569896988756009, 11.825048221409341, 12.083451977536606, 12.345119996613247, 12.610063955123938, 12.878295467455942, 13.149826086772048, 13.42466730586372, 13.702830557985108, 13.984327217668513, 14.269168601521828, 14.55736596900856, 14.848930523210871, 15.143873411576273, 15.44220572664832, 15.743938506781891, 16.04908273684337, 16.35764934889634, 16.66964922287304, 16.985093187232053, 17.30399201960269, 17.62635644741625, 17.95219714852476, 18.281524751807332, 18.614349837764564, 18.95068293910138, 19.290534541298456, 19.633915083172692, 19.98083495742689, 20.331304511189067, 20.685334046541502, 21.042933821039977, 21.404114048223256, 21.76888489811322, 22.137256497705877, 22.50923893145328, 22.884842241736916, 23.264076429332462, 23.6469514538663, 24.033477234264016, 24.42366364919083, 24.817520537484558, 25.21505769858089, 25.61628489293138, 26.021211842414342, 26.429848230738664, 26.842203703840827, 27.258287870275353, 27.678110301598522, 28.10168053274597, 28.529008062403893, 28.96010235337422, 29.39497283293396, 29.83362889318845, 30.276079891419332, 30.722335150426627, 31.172403958865512, 31.62629557157785, 32.08401920991837, 32.54558406207592, 33.010999283389665, 33.4802739966603, 33.953417292456834, 34.430438229418264, 34.911345834551085, 35.39614910352207, 35.88485700094671, 36.37747846067349, 36.87402238606382, 37.37449765026789, 37.87891309649659, 38.38727753828926, 38.89959975977785, 39.41588851594697, 39.93615253289054, 40.460400508064545, 40.98864111053629, 41.520882981230194, 42.05713473317016, 42.597404951718396, 43.141702194811224, 43.6900349931913, 44.24241185063697, 44.798841244188324, 45.35933162437017, 45.92389141541209, 46.49252901546552, 47.065252796817916, 47.64207110610409, 48.22299226451468, 48.808024568002054, 49.3971762874833, 49.9904556690408, 50.587870934119984, 51.189430279724725, 51.79514187861014, 52.40501387947288, 53.0190544071392, 53.637271562750364, 54.259673423945976, 54.88626804504493, 55.517063457223934, 56.15206766869424, 56.79128866487574, 57.43473440856916, 58.08241284012621, 58.734331877617365, 59.39049941699807, 60.05092333227251, 60.715611475655585, 61.38457167773311, 62.057811747619894, 62.7353394731159, 63.417162620860914, 64.10328893648692, 64.79372614476921, 65.48848194977529, 66.18756403501224, 66.89098006357258, 67.59873767827808, 68.31084450182222, 69.02730813691093, 69.74813616640164, 70.47333615344107, 71.20291564160104, 71.93688215501312, 72.67524319850172, 73.41800625771542, 74.16517879925733, 74.9167682708136, 75.67278210128072, 76.43322770089146, 77.1981124613393, 77.96744375590167, 78.74122893956174, 79.51947534912904, 80.30219030335869, 81.08938110306934, 81.88105503125999, 82.67721935322541, 83.4778813166706, 84.28304815182372, 85.09272707154808, 85.90692527145302, 86.72564993000343, 87.54890820862819, 88.3767072518277, 89.2090541872801, 90.04595612594655, 90.88742016217518, 91.73345337380438, 92.58406282226491, 93.43925555268066, 94.29903859396902, 95.16341895893969, 96.03240364439274, 96.9059996312159, 97.78421388448044, 98.6670533535366, 99.55452497210776];
class ra {
  static from(e10, t10, r10) {
    return new ra(rn.solveToInt(e10, t10, r10));
  }
  /**
  * @param argb ARGB representation of a color.
  * @return HCT representation of a color in default viewing conditions
  */
  static fromInt(e10) {
    return new ra(e10);
  }
  toInt() {
    return this.argb;
  }
  /**
  * A number, in degrees, representing ex. red, orange, yellow, etc.
  * Ranges from 0 <= hue < 360.
  */
  get hue() {
    return this.internalHue;
  }
  /**
  * @param newHue 0 <= newHue < 360; invalid values are corrected.
  * Chroma may decrease because chroma has a different maximum for any given
  * hue and tone.
  */
  set hue(e10) {
    this.setInternalState(/* @__PURE__ */ rn.solveToInt(e10, this.internalChroma, this.internalTone));
  }
  get chroma() {
    return this.internalChroma;
  }
  /**
  * @param newChroma 0 <= newChroma < ?
  * Chroma may decrease because chroma has a different maximum for any given
  * hue and tone.
  */
  set chroma(e10) {
    this.setInternalState(/* @__PURE__ */ rn.solveToInt(this.internalHue, e10, this.internalTone));
  }
  /** Lightness. Ranges from 0 to 100. */
  get tone() {
    return this.internalTone;
  }
  /**
  * @param newTone 0 <= newTone <= 100; invalid valids are corrected.
  * Chroma may decrease because chroma has a different maximum for any given
  * hue and tone.
  */
  set tone(e10) {
    this.setInternalState(/* @__PURE__ */ rn.solveToInt(this.internalHue, this.internalChroma, e10));
  }
  constructor(e10) {
    this.argb = e10;
    let t10 = /* @__PURE__ */ rr.fromInt(e10);
    this.internalHue = t10.hue, this.internalChroma = t10.chroma, this.internalTone = /* @__PURE__ */ t5(e10), this.argb = e10;
  }
  setInternalState(e10) {
    let t10 = /* @__PURE__ */ rr.fromInt(e10);
    this.internalHue = t10.hue, this.internalChroma = t10.chroma, this.internalTone = /* @__PURE__ */ t5(e10), this.argb = e10;
  }
  /**
  * Translates a color into different [ViewingConditions].
  *
  * Colors change appearance. They look different with lights on versus off,
  * the same color, as in hex code, on white looks different when on black.
  * This is called color relativity, most famously explicated by Josef Albers
  * in Interaction of Color.
  *
  * In color science, color appearance models can account for this and
  * calculate the appearance of a color in different settings. HCT is based on
  * CAM16, a color appearance model, and uses it to make these calculations.
  *
  * See [ViewingConditions.make] for parameters affecting color appearance.
  */
  inViewingConditions(e10) {
    let t10 = /* @__PURE__ */ rr.fromInt(/* @__PURE__ */ this.toInt()), r10 = /* @__PURE__ */ t10.xyzInViewingConditions(e10), n10 = /* @__PURE__ */ rr.fromXyzInViewingConditions(r10[0], r10[1], r10[2], /* @__PURE__ */ rt.make()), a2 = /* @__PURE__ */ ra.from(n10.hue, n10.chroma, /* @__PURE__ */ t8(r10[1]));
    return a2;
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
class ro {
  /**
  * Returns a contrast ratio, which ranges from 1 to 21.
  *
  * @param toneA Tone between 0 and 100. Values outside will be clamped.
  * @param toneB Tone between 0 and 100. Values outside will be clamped.
  */
  static ratioOfTones(e10, t10) {
    return e10 = /* @__PURE__ */ tJ(0, 100, e10), t10 = /* @__PURE__ */ tJ(0, 100, t10), ro.ratioOfYs(/* @__PURE__ */ t3(e10), /* @__PURE__ */ t3(t10));
  }
  static ratioOfYs(e10, t10) {
    let r10 = e10 > t10 ? e10 : t10;
    return (r10 + 5) / ((r10 === t10 ? e10 : t10) + 5);
  }
  /**
  * Returns a tone >= tone parameter that ensures ratio parameter.
  * Return value is between 0 and 100.
  * Returns -1 if ratio cannot be achieved with tone parameter.
  *
  * @param tone Tone return value must contrast with.
  * Range is 0 to 100. Invalid values will result in -1 being returned.
  * @param ratio Contrast ratio of return value and tone.
  * Range is 1 to 21, invalid values have undefined behavior.
  */
  static lighter(e10, t10) {
    if (e10 < 0 || e10 > 100)
      return -1;
    let r10 = /* @__PURE__ */ t3(e10), n10 = t10 * (r10 + 5) - 5, a2 = /* @__PURE__ */ ro.ratioOfYs(n10, r10);
    if (a2 < t10 && /* @__PURE__ */ Math.abs(a2 - t10) > 0.04)
      return -1;
    let o2 = t8(n10) + 0.4;
    return o2 < 0 || o2 > 100 ? -1 : o2;
  }
  /**
  * Returns a tone <= tone parameter that ensures ratio parameter.
  * Return value is between 0 and 100.
  * Returns -1 if ratio cannot be achieved with tone parameter.
  *
  * @param tone Tone return value must contrast with.
  * Range is 0 to 100. Invalid values will result in -1 being returned.
  * @param ratio Contrast ratio of return value and tone.
  * Range is 1 to 21, invalid values have undefined behavior.
  */
  static darker(e10, t10) {
    if (e10 < 0 || e10 > 100)
      return -1;
    let r10 = /* @__PURE__ */ t3(e10), n10 = (r10 + 5) / t10 - 5, a2 = /* @__PURE__ */ ro.ratioOfYs(r10, n10);
    if (a2 < t10 && /* @__PURE__ */ Math.abs(a2 - t10) > 0.04)
      return -1;
    let o2 = t8(n10) - 0.4;
    return o2 < 0 || o2 > 100 ? -1 : o2;
  }
  /**
  * Returns a tone >= tone parameter that ensures ratio parameter.
  * Return value is between 0 and 100.
  * Returns 100 if ratio cannot be achieved with tone parameter.
  *
  * This method is unsafe because the returned value is guaranteed to be in
  * bounds for tone, i.e. between 0 and 100. However, that value may not reach
  * the ratio with tone. For example, there is no color lighter than T100.
  *
  * @param tone Tone return value must contrast with.
  * Range is 0 to 100. Invalid values will result in 100 being returned.
  * @param ratio Desired contrast ratio of return value and tone parameter.
  * Range is 1 to 21, invalid values have undefined behavior.
  */
  static lighterUnsafe(e10, t10) {
    let r10 = /* @__PURE__ */ ro.lighter(e10, t10);
    return r10 < 0 ? 100 : r10;
  }
  /**
  * Returns a tone >= tone parameter that ensures ratio parameter.
  * Return value is between 0 and 100.
  * Returns 100 if ratio cannot be achieved with tone parameter.
  *
  * This method is unsafe because the returned value is guaranteed to be in
  * bounds for tone, i.e. between 0 and 100. However, that value may not reach
  * the [ratio with [tone]. For example, there is no color darker than T0.
  *
  * @param tone Tone return value must contrast with.
  * Range is 0 to 100. Invalid values will result in 0 being returned.
  * @param ratio Desired contrast ratio of return value and tone parameter.
  * Range is 1 to 21, invalid values have undefined behavior.
  */
  static darkerUnsafe(e10, t10) {
    let r10 = /* @__PURE__ */ ro.darker(e10, t10);
    return r10 < 0 ? 0 : r10;
  }
}
class ri {
  /**
  * Returns true if a color is disliked.
  *
  * @param hct A color to be judged.
  * @return Whether the color is disliked.
  *
  * Disliked is defined as a dark yellow-green that is not neutral.
  */
  static isDisliked(e10) {
    let t10 = Math.round(e10.hue) >= 90 && 111 >= Math.round(e10.hue), r10 = Math.round(e10.chroma) > 16, n10 = 65 > Math.round(e10.tone);
    return t10 && r10 && n10;
  }
  /**
  * If a color is disliked, lighten it to make it likable.
  *
  * @param hct A color to be judged.
  * @return A new color if the original color is disliked, or the original
  *   color if it is acceptable.
  */
  static fixIfDisliked(e10) {
    return ri.isDisliked(e10) ? ra.from(e10.hue, e10.chroma, 70) : e10;
  }
}
class rs {
  /**
  * Create a DynamicColor defined by a TonalPalette and HCT tone.
  *
  * @param args Functions with DynamicScheme as input. Must provide a palette
  * and tone. May provide a background DynamicColor and ToneDeltaConstraint.
  */
  static fromPalette(e10) {
    var t10, r10;
    return new rs(null !== (t10 = e10.name) && void 0 !== t10 ? t10 : "", e10.palette, e10.tone, null !== (r10 = e10.isBackground) && void 0 !== r10 && r10, e10.background, e10.secondBackground, e10.contrastCurve, e10.toneDeltaPair);
  }
  /**
  * The base constructor for DynamicColor.
  *
  * _Strongly_ prefer using one of the convenience constructors. This class is
  * arguably too flexible to ensure it can support any scenario. Functional
  * arguments allow  overriding without risks that come with subclasses.
  *
  * For example, the default behavior of adjust tone at max contrast
  * to be at a 7.0 ratio with its background is principled and
  * matches accessibility guidance. That does not mean it's the desired
  * approach for _every_ design system, and every color pairing,
  * always, in every case.
  *
  * @param name The name of the dynamic color. Defaults to empty.
  * @param palette Function that provides a TonalPalette given
  * DynamicScheme. A TonalPalette is defined by a hue and chroma, so this
  * replaces the need to specify hue/chroma. By providing a tonal palette, when
  * contrast adjustments are made, intended chroma can be preserved.
  * @param tone Function that provides a tone, given a DynamicScheme.
  * @param isBackground Whether this dynamic color is a background, with
  * some other color as the foreground. Defaults to false.
  * @param background The background of the dynamic color (as a function of a
  *     `DynamicScheme`), if it exists.
  * @param secondBackground A second background of the dynamic color (as a
  *     function of a `DynamicScheme`), if it
  * exists.
  * @param contrastCurve A `ContrastCurve` object specifying how its contrast
  * against its background should behave in various contrast levels options.
  * @param toneDeltaPair A `ToneDeltaPair` object specifying a tone delta
  * constraint between two colors. One of them must be the color being
  * constructed.
  */
  constructor(e10, t10, r10, n10, a2, o2, i2, s2) {
    if (this.name = e10, this.palette = t10, this.tone = r10, this.isBackground = n10, this.background = a2, this.secondBackground = o2, this.contrastCurve = i2, this.toneDeltaPair = s2, this.hctCache = /* @__PURE__ */ new Map(), !a2 && o2)
      throw Error(`Color ${e10} has secondBackgrounddefined, but background is not defined.`);
    if (!a2 && i2)
      throw Error(`Color ${e10} has contrastCurvedefined, but background is not defined.`);
    if (a2 && !i2)
      throw Error(`Color ${e10} has backgrounddefined, but contrastCurve is not defined.`);
  }
  /**
  * Return a ARGB integer (i.e. a hex code).
  *
  * @param scheme Defines the conditions of the user interface, for example,
  * whether or not it is dark mode or light mode, and what the desired
  * contrast level is.
  */
  getArgb(e10) {
    return this.getHct(e10).toInt();
  }
  /**
  * Return a color, expressed in the HCT color space, that this
  * DynamicColor is under the conditions in scheme.
  *
  * @param scheme Defines the conditions of the user interface, for example,
  * whether or not it is dark mode or light mode, and what the desired
  * contrast level is.
  */
  getHct(e10) {
    let t10 = /* @__PURE__ */ this.hctCache.get(e10);
    if (null != t10)
      return t10;
    let r10 = /* @__PURE__ */ this.getTone(e10), n10 = /* @__PURE__ */ this.palette(e10).getHct(r10);
    return this.hctCache.size > 4 && this.hctCache.clear(), this.hctCache.set(e10, n10), n10;
  }
  /**
  * Return a tone, T in the HCT color space, that this DynamicColor is under
  * the conditions in scheme.
  *
  * @param scheme Defines the conditions of the user interface, for example,
  * whether or not it is dark mode or light mode, and what the desired
  * contrast level is.
  */
  getTone(e10) {
    let t10 = e10.contrastLevel < 0;
    if (this.toneDeltaPair) {
      let r10 = /* @__PURE__ */ this.toneDeltaPair(e10), n10 = r10.roleA, a2 = r10.roleB, o2 = r10.delta, i2 = r10.polarity, s2 = r10.stayTogether, l2 = /* @__PURE__ */ this.background(e10), c2 = /* @__PURE__ */ l2.getTone(e10), u2 = "nearer" === i2 || "lighter" === i2 && !e10.isDark || "darker" === i2 && e10.isDark, d2 = u2 ? n10 : a2, f2 = u2 ? a2 : n10, h2 = this.name === d2.name, p2 = e10.isDark ? 1 : -1, m2 = /* @__PURE__ */ d2.contrastCurve.getContrast(e10.contrastLevel), g2 = /* @__PURE__ */ f2.contrastCurve.getContrast(e10.contrastLevel), v2 = /* @__PURE__ */ d2.tone(e10), b2 = ro.ratioOfTones(c2, v2) >= m2 ? v2 : rs.foregroundTone(c2, m2), y2 = /* @__PURE__ */ f2.tone(e10), w2 = ro.ratioOfTones(c2, y2) >= g2 ? y2 : rs.foregroundTone(c2, g2);
      return t10 && // If decreasing contrast, adjust color to the "bare minimum"
      // that satisfies contrast.
      (b2 = /* @__PURE__ */ rs.foregroundTone(c2, m2), w2 = /* @__PURE__ */ rs.foregroundTone(c2, g2)), (w2 - b2) * p2 >= o2 || // 2nd round: expand farther to match delta.
      ((w2 = /* @__PURE__ */ tJ(0, 100, b2 + o2 * p2)) - b2) * p2 >= o2 || // 3rd round: contract nearer to match delta.
      (b2 = /* @__PURE__ */ tJ(0, 100, w2 - o2 * p2)), 50 <= b2 && b2 < 60 ? w2 = p2 > 0 ? /* @__PURE__ */ Math.max(w2, (b2 = 60) + o2 * p2) : /* @__PURE__ */ Math.min(w2, (b2 = 49) + o2 * p2) : 50 <= w2 && w2 < 60 && (w2 = s2 ? p2 > 0 ? /* @__PURE__ */ Math.max(w2, (b2 = 60) + o2 * p2) : /* @__PURE__ */ Math.min(w2, (b2 = 49) + o2 * p2) : p2 > 0 ? 60 : 49), h2 ? b2 : w2;
    }
    {
      let r10 = /* @__PURE__ */ this.tone(e10);
      if (null == this.background)
        return r10;
      let n10 = /* @__PURE__ */ this.background(e10).getTone(e10), a2 = /* @__PURE__ */ this.contrastCurve.getContrast(e10.contrastLevel);
      if (ro.ratioOfTones(n10, r10) >= a2 || // Rough improvement.
      (r10 = /* @__PURE__ */ rs.foregroundTone(n10, a2)), t10 && (r10 = /* @__PURE__ */ rs.foregroundTone(n10, a2)), this.isBackground && 50 <= r10 && r10 < 60 && (r10 = ro.ratioOfTones(49, n10) >= a2 ? 49 : 60), this.secondBackground) {
        let [t11, n11] = [this.background, this.secondBackground], [o2, i2] = [/* @__PURE__ */ t11(e10).getTone(e10), /* @__PURE__ */ n11(e10).getTone(e10)], [s2, l2] = [/* @__PURE__ */ Math.max(o2, i2), /* @__PURE__ */ Math.min(o2, i2)];
        if (ro.ratioOfTones(s2, r10) >= a2 && ro.ratioOfTones(l2, r10) >= a2)
          return r10;
        let c2 = /* @__PURE__ */ ro.lighter(s2, a2), u2 = /* @__PURE__ */ ro.darker(l2, a2), d2 = [];
        -1 !== c2 && d2.push(c2), -1 !== u2 && d2.push(u2);
        let f2 = rs.tonePrefersLightForeground(o2) || rs.tonePrefersLightForeground(i2);
        return f2 ? c2 < 0 ? 100 : c2 : 1 === d2.length ? d2[0] : u2 < 0 ? 0 : u2;
      }
      return r10;
    }
  }
  /**
  * Given a background tone, find a foreground tone, while ensuring they reach
  * a contrast ratio that is as close to [ratio] as possible.
  *
  * @param bgTone Tone in HCT. Range is 0 to 100, undefined behavior when it
  *     falls outside that range.
  * @param ratio The contrast ratio desired between bgTone and the return
  *     value.
  */
  static foregroundTone(e10, t10) {
    let r10 = /* @__PURE__ */ ro.lighterUnsafe(e10, t10), n10 = /* @__PURE__ */ ro.darkerUnsafe(e10, t10), a2 = /* @__PURE__ */ ro.ratioOfTones(r10, e10), o2 = /* @__PURE__ */ ro.ratioOfTones(n10, e10), i2 = /* @__PURE__ */ rs.tonePrefersLightForeground(e10);
    if (!i2)
      return o2 >= t10 || o2 >= a2 ? n10 : r10;
    {
      let e11 = 0.1 > Math.abs(a2 - o2) && a2 < t10 && o2 < t10;
      return a2 >= t10 || a2 >= o2 || e11 ? r10 : n10;
    }
  }
  /**
  * Returns whether [tone] prefers a light foreground.
  *
  * People prefer white foregrounds on ~T60-70. Observed over time, and also
  * by Andrew Somers during research for APCA.
  *
  * T60 used as to create the smallest discontinuity possible when skipping
  * down to T49 in order to ensure light foregrounds.
  * Since `tertiaryContainer` in dark monochrome scheme requires a tone of
  * 60, it should not be adjusted. Therefore, 60 is excluded here.
  */
  static tonePrefersLightForeground(e10) {
    return 60 > Math.round(e10);
  }
  /**
  * Returns whether [tone] can reach a contrast ratio of 4.5 with a lighter
  * color.
  */
  static toneAllowsLightForeground(e10) {
    return 49 >= Math.round(e10);
  }
  /**
  * Adjust a tone such that white has 4.5 contrast, if the tone is
  * reasonably close to supporting it.
  */
  static enableLightForeground(e10) {
    return rs.tonePrefersLightForeground(e10) && !rs.toneAllowsLightForeground(e10) ? 49 : e10;
  }
}
(H = X || (X = {}))[H.MONOCHROME = 0] = "MONOCHROME", H[H.NEUTRAL = 1] = "NEUTRAL", H[H.TONAL_SPOT = 2] = "TONAL_SPOT", H[H.VIBRANT = 3] = "VIBRANT", H[H.EXPRESSIVE = 4] = "EXPRESSIVE", H[H.FIDELITY = 5] = "FIDELITY", H[H.CONTENT = 6] = "CONTENT", H[H.RAINBOW = 7] = "RAINBOW", H[H.FRUIT_SALAD = 8] = "FRUIT_SALAD";
class rl {
  /**
  * Creates a `ContrastCurve` object.
  *
  * @param low Contrast requirement for contrast level -1.0
  * @param normal Contrast requirement for contrast level 0.0
  * @param medium Contrast requirement for contrast level 0.5
  * @param high Contrast requirement for contrast level 1.0
  */
  constructor(e10, t10, r10, n10) {
    this.low = e10, this.normal = t10, this.medium = r10, this.high = n10;
  }
  /**
  * Returns the contrast ratio at a given contrast level.
  *
  * @param contrastLevel The contrast level. 0.0 is the default (normal);
  * -1.0 is the lowest; 1.0 is the highest.
  * @return The contrast ratio, a number between 1.0 and 21.0.
  */
  getContrast(e10) {
    var t10, r10, n10, a2, o2, i2, s2, l2, c2;
    return e10 <= -1 ? this.low : e10 < 0 ? (t10 = this.low, r10 = this.normal, (1 - (n10 = (e10 - -1) / 1)) * t10 + n10 * r10) : e10 < 0.5 ? (a2 = this.normal, o2 = this.medium, (1 - (i2 = (e10 - 0) / 0.5)) * a2 + i2 * o2) : e10 < 1 ? (s2 = this.medium, l2 = this.high, (1 - (c2 = (e10 - 0.5) / 0.5)) * s2 + c2 * l2) : this.high;
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
class rc {
  /**
  * Documents a constraint in tone distance between two DynamicColors.
  *
  * The polarity is an adjective that describes "A", compared to "B".
  *
  * For instance, ToneDeltaPair(A, B, 15, 'darker', stayTogether) states that
  * A's tone should be at least 15 darker than B's.
  *
  * 'nearer' and 'farther' describes closeness to the surface roles. For
  * instance, ToneDeltaPair(A, B, 10, 'nearer', stayTogether) states that A
  * should be 10 lighter than B in light mode, and 10 darker than B in dark
  * mode.
  *
  * @param roleA The first role in a pair.
  * @param roleB The second role in a pair.
  * @param delta Required difference between tones. Absolute value, negative
  * values have undefined behavior.
  * @param polarity The relative relation between tones of roleA and roleB,
  * as described above.
  * @param stayTogether Whether these two roles should stay on the same side of
  * the "awkward zone" (T50-59). This is necessary for certain cases where
  * one role has two backgrounds.
  */
  constructor(e10, t10, r10, n10, a2) {
    this.roleA = e10, this.roleB = t10, this.delta = r10, this.polarity = n10, this.stayTogether = a2;
  }
}
function ru(e10) {
  return e10.variant === X.FIDELITY || e10.variant === X.CONTENT;
}
function rd(e10) {
  return e10.variant === X.MONOCHROME;
}
function rf(e10, t10) {
  let r10 = /* @__PURE__ */ e10.inViewingConditions(rt.make(
    /*whitePoint=*/
    void 0,
    /*adaptingLuminance=*/
    void 0,
    /*backgroundLstar=*/
    t10.isDark ? 30 : 80,
    /*surround=*/
    void 0,
    /*discountingIlluminant=*/
    void 0
  ));
  return rs.tonePrefersLightForeground(e10.tone) && !rs.toneAllowsLightForeground(r10.tone) ? rs.enableLightForeground(e10.tone) : rs.enableLightForeground(r10.tone);
}
class rh {
  static highestSurface(e10) {
    return e10.isDark ? rh.surfaceBright : rh.surfaceDim;
  }
}
rh.contentAccentToneDelta = 15, rh.primaryPaletteKeyColor = /* @__PURE__ */ rs.fromPalette({ name: "primary_palette_key_color", palette: (e10) => e10.primaryPalette, tone: (e10) => e10.primaryPalette.keyColor.tone }), rh.secondaryPaletteKeyColor = /* @__PURE__ */ rs.fromPalette({ name: "secondary_palette_key_color", palette: (e10) => e10.secondaryPalette, tone: (e10) => e10.secondaryPalette.keyColor.tone }), rh.tertiaryPaletteKeyColor = /* @__PURE__ */ rs.fromPalette({ name: "tertiary_palette_key_color", palette: (e10) => e10.tertiaryPalette, tone: (e10) => e10.tertiaryPalette.keyColor.tone }), rh.neutralPaletteKeyColor = /* @__PURE__ */ rs.fromPalette({ name: "neutral_palette_key_color", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.neutralPalette.keyColor.tone }), rh.neutralVariantPaletteKeyColor = /* @__PURE__ */ rs.fromPalette({ name: "neutral_variant_palette_key_color", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.neutralVariantPalette.keyColor.tone }), rh.background = /* @__PURE__ */ rs.fromPalette({ name: "background", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 6 : 98, isBackground: true }), rh.onBackground = /* @__PURE__ */ rs.fromPalette({ name: "on_background", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 90 : 10, background: (e10) => rh.background, contrastCurve: new rl(3, 3, 4.5, 7) }), rh.surface = /* @__PURE__ */ rs.fromPalette({ name: "surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 6 : 98, isBackground: true }), rh.surfaceDim = /* @__PURE__ */ rs.fromPalette({ name: "surface_dim", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 6 : 87, isBackground: true }), rh.surfaceBright = /* @__PURE__ */ rs.fromPalette({ name: "surface_bright", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 24 : 98, isBackground: true }), rh.surfaceContainerLowest = /* @__PURE__ */ rs.fromPalette({ name: "surface_container_lowest", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 4 : 100, isBackground: true }), rh.surfaceContainerLow = /* @__PURE__ */ rs.fromPalette({ name: "surface_container_low", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 10 : 96, isBackground: true }), rh.surfaceContainer = /* @__PURE__ */ rs.fromPalette({ name: "surface_container", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 12 : 94, isBackground: true }), rh.surfaceContainerHigh = /* @__PURE__ */ rs.fromPalette({ name: "surface_container_high", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 17 : 92, isBackground: true }), rh.surfaceContainerHighest = /* @__PURE__ */ rs.fromPalette({ name: "surface_container_highest", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 22 : 90, isBackground: true }), rh.onSurface = /* @__PURE__ */ rs.fromPalette({ name: "on_surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 90 : 10, background: (e10) => rh.highestSurface(e10), contrastCurve: new rl(4.5, 7, 11, 21) }), rh.surfaceVariant = /* @__PURE__ */ rs.fromPalette({ name: "surface_variant", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 30 : 90, isBackground: true }), rh.onSurfaceVariant = /* @__PURE__ */ rs.fromPalette({ name: "on_surface_variant", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 80 : 30, background: (e10) => rh.highestSurface(e10), contrastCurve: new rl(3, 4.5, 7, 11) }), rh.inverseSurface = /* @__PURE__ */ rs.fromPalette({ name: "inverse_surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 90 : 20 }), rh.inverseOnSurface = /* @__PURE__ */ rs.fromPalette({ name: "inverse_on_surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 20 : 95, background: (e10) => rh.inverseSurface, contrastCurve: new rl(4.5, 7, 11, 21) }), rh.outline = /* @__PURE__ */ rs.fromPalette({ name: "outline", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 60 : 50, background: (e10) => rh.highestSurface(e10), contrastCurve: new rl(1.5, 3, 4.5, 7) }), rh.outlineVariant = /* @__PURE__ */ rs.fromPalette({ name: "outline_variant", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 30 : 80, background: (e10) => rh.highestSurface(e10), contrastCurve: new rl(1, 1, 3, 7) }), rh.shadow = /* @__PURE__ */ rs.fromPalette({ name: "shadow", palette: (e10) => e10.neutralPalette, tone: (e10) => 0 }), rh.scrim = /* @__PURE__ */ rs.fromPalette({ name: "scrim", palette: (e10) => e10.neutralPalette, tone: (e10) => 0 }), rh.surfaceTint = /* @__PURE__ */ rs.fromPalette({ name: "surface_tint", palette: (e10) => e10.primaryPalette, tone: (e10) => e10.isDark ? 80 : 40, isBackground: true }), rh.primary = /* @__PURE__ */ rs.fromPalette({ name: "primary", palette: (e10) => e10.primaryPalette, tone: (e10) => rd(e10) ? e10.isDark ? 100 : 0 : e10.isDark ? 80 : 40, isBackground: true, background: (e10) => rh.highestSurface(e10), contrastCurve: new rl(3, 4.5, 7, 11), toneDeltaPair: (e10) => new rc(rh.primaryContainer, rh.primary, 15, "nearer", false) }), rh.onPrimary = /* @__PURE__ */ rs.fromPalette({ name: "on_primary", palette: (e10) => e10.primaryPalette, tone: (e10) => rd(e10) ? e10.isDark ? 10 : 90 : e10.isDark ? 20 : 100, background: (e10) => rh.primary, contrastCurve: new rl(4.5, 7, 11, 21) }), rh.primaryContainer = /* @__PURE__ */ rs.fromPalette({ name: "primary_container", palette: (e10) => e10.primaryPalette, tone: (e10) => ru(e10) ? rf(e10.sourceColorHct, e10) : rd(e10) ? e10.isDark ? 85 : 25 : e10.isDark ? 30 : 90, isBackground: true, background: (e10) => rh.highestSurface(e10), contrastCurve: new rl(1, 1, 3, 7), toneDeltaPair: (e10) => new rc(rh.primaryContainer, rh.primary, 15, "nearer", false) }), rh.onPrimaryContainer = /* @__PURE__ */ rs.fromPalette({ name: "on_primary_container", palette: (e10) => e10.primaryPalette, tone: (e10) => ru(e10) ? rs.foregroundTone(/* @__PURE__ */ rh.primaryContainer.tone(e10), 4.5) : rd(e10) ? e10.isDark ? 0 : 100 : e10.isDark ? 90 : 10, background: (e10) => rh.primaryContainer, contrastCurve: new rl(4.5, 7, 11, 21) }), rh.inversePrimary = /* @__PURE__ */ rs.fromPalette({ name: "inverse_primary", palette: (e10) => e10.primaryPalette, tone: (e10) => e10.isDark ? 40 : 80, background: (e10) => rh.inverseSurface, contrastCurve: new rl(3, 4.5, 7, 11) }), rh.secondary = /* @__PURE__ */ rs.fromPalette({ name: "secondary", palette: (e10) => e10.secondaryPalette, tone: (e10) => e10.isDark ? 80 : 40, isBackground: true, background: (e10) => rh.highestSurface(e10), contrastCurve: new rl(3, 4.5, 7, 11), toneDeltaPair: (e10) => new rc(rh.secondaryContainer, rh.secondary, 15, "nearer", false) }), rh.onSecondary = /* @__PURE__ */ rs.fromPalette({ name: "on_secondary", palette: (e10) => e10.secondaryPalette, tone: (e10) => rd(e10) ? e10.isDark ? 10 : 100 : e10.isDark ? 20 : 100, background: (e10) => rh.secondary, contrastCurve: new rl(4.5, 7, 11, 21) }), rh.secondaryContainer = /* @__PURE__ */ rs.fromPalette({ name: "secondary_container", palette: (e10) => e10.secondaryPalette, tone: (e10) => {
  let t10 = e10.isDark ? 30 : 90;
  if (rd(e10))
    return e10.isDark ? 30 : 85;
  if (!ru(e10))
    return t10;
  let r10 = /* @__PURE__ */ function(e11, t11, r11, n10) {
    let a2 = r11, o2 = /* @__PURE__ */ ra.from(e11, t11, r11);
    if (o2.chroma < t11) {
      let r12 = o2.chroma;
      for (; o2.chroma < t11; ) {
        a2 += n10 ? -1 : 1;
        let i2 = /* @__PURE__ */ ra.from(e11, t11, a2);
        if (r12 > i2.chroma || 0.4 > Math.abs(i2.chroma - t11))
          break;
        let s2 = /* @__PURE__ */ Math.abs(i2.chroma - t11), l2 = /* @__PURE__ */ Math.abs(o2.chroma - t11);
        s2 < l2 && (o2 = i2), r12 = /* @__PURE__ */ Math.max(r12, i2.chroma);
      }
    }
    return a2;
  }(e10.secondaryPalette.hue, e10.secondaryPalette.chroma, t10, !e10.isDark);
  return /* @__PURE__ */ rf(/* @__PURE__ */ e10.secondaryPalette.getHct(r10), e10);
}, isBackground: true, background: (e10) => rh.highestSurface(e10), contrastCurve: new rl(1, 1, 3, 7), toneDeltaPair: (e10) => new rc(rh.secondaryContainer, rh.secondary, 15, "nearer", false) }), rh.onSecondaryContainer = /* @__PURE__ */ rs.fromPalette({ name: "on_secondary_container", palette: (e10) => e10.secondaryPalette, tone: (e10) => ru(e10) ? rs.foregroundTone(/* @__PURE__ */ rh.secondaryContainer.tone(e10), 4.5) : e10.isDark ? 90 : 10, background: (e10) => rh.secondaryContainer, contrastCurve: new rl(4.5, 7, 11, 21) }), rh.tertiary = /* @__PURE__ */ rs.fromPalette({ name: "tertiary", palette: (e10) => e10.tertiaryPalette, tone: (e10) => rd(e10) ? e10.isDark ? 90 : 25 : e10.isDark ? 80 : 40, isBackground: true, background: (e10) => rh.highestSurface(e10), contrastCurve: new rl(3, 4.5, 7, 11), toneDeltaPair: (e10) => new rc(rh.tertiaryContainer, rh.tertiary, 15, "nearer", false) }), rh.onTertiary = /* @__PURE__ */ rs.fromPalette({ name: "on_tertiary", palette: (e10) => e10.tertiaryPalette, tone: (e10) => rd(e10) ? e10.isDark ? 10 : 90 : e10.isDark ? 20 : 100, background: (e10) => rh.tertiary, contrastCurve: new rl(4.5, 7, 11, 21) }), rh.tertiaryContainer = /* @__PURE__ */ rs.fromPalette({ name: "tertiary_container", palette: (e10) => e10.tertiaryPalette, tone: (e10) => {
  if (rd(e10))
    return e10.isDark ? 60 : 49;
  if (!ru(e10))
    return e10.isDark ? 30 : 90;
  let t10 = /* @__PURE__ */ rf(/* @__PURE__ */ e10.tertiaryPalette.getHct(e10.sourceColorHct.tone), e10), r10 = /* @__PURE__ */ e10.tertiaryPalette.getHct(t10);
  return ri.fixIfDisliked(r10).tone;
}, isBackground: true, background: (e10) => rh.highestSurface(e10), contrastCurve: new rl(1, 1, 3, 7), toneDeltaPair: (e10) => new rc(rh.tertiaryContainer, rh.tertiary, 15, "nearer", false) }), rh.onTertiaryContainer = /* @__PURE__ */ rs.fromPalette({ name: "on_tertiary_container", palette: (e10) => e10.tertiaryPalette, tone: (e10) => rd(e10) ? e10.isDark ? 0 : 100 : ru(e10) ? rs.foregroundTone(/* @__PURE__ */ rh.tertiaryContainer.tone(e10), 4.5) : e10.isDark ? 90 : 10, background: (e10) => rh.tertiaryContainer, contrastCurve: new rl(4.5, 7, 11, 21) }), rh.error = /* @__PURE__ */ rs.fromPalette({ name: "error", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 80 : 40, isBackground: true, background: (e10) => rh.highestSurface(e10), contrastCurve: new rl(3, 4.5, 7, 11), toneDeltaPair: (e10) => new rc(rh.errorContainer, rh.error, 15, "nearer", false) }), rh.onError = /* @__PURE__ */ rs.fromPalette({ name: "on_error", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 20 : 100, background: (e10) => rh.error, contrastCurve: new rl(4.5, 7, 11, 21) }), rh.errorContainer = /* @__PURE__ */ rs.fromPalette({ name: "error_container", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 30 : 90, isBackground: true, background: (e10) => rh.highestSurface(e10), contrastCurve: new rl(1, 1, 3, 7), toneDeltaPair: (e10) => new rc(rh.errorContainer, rh.error, 15, "nearer", false) }), rh.onErrorContainer = /* @__PURE__ */ rs.fromPalette({ name: "on_error_container", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 90 : 10, background: (e10) => rh.errorContainer, contrastCurve: new rl(4.5, 7, 11, 21) }), rh.primaryFixed = /* @__PURE__ */ rs.fromPalette({ name: "primary_fixed", palette: (e10) => e10.primaryPalette, tone: (e10) => rd(e10) ? 40 : 90, isBackground: true, background: (e10) => rh.highestSurface(e10), contrastCurve: new rl(1, 1, 3, 7), toneDeltaPair: (e10) => new rc(rh.primaryFixed, rh.primaryFixedDim, 10, "lighter", true) }), rh.primaryFixedDim = /* @__PURE__ */ rs.fromPalette({ name: "primary_fixed_dim", palette: (e10) => e10.primaryPalette, tone: (e10) => rd(e10) ? 30 : 80, isBackground: true, background: (e10) => rh.highestSurface(e10), contrastCurve: new rl(1, 1, 3, 7), toneDeltaPair: (e10) => new rc(rh.primaryFixed, rh.primaryFixedDim, 10, "lighter", true) }), rh.onPrimaryFixed = /* @__PURE__ */ rs.fromPalette({ name: "on_primary_fixed", palette: (e10) => e10.primaryPalette, tone: (e10) => rd(e10) ? 100 : 10, background: (e10) => rh.primaryFixedDim, secondBackground: (e10) => rh.primaryFixed, contrastCurve: new rl(4.5, 7, 11, 21) }), rh.onPrimaryFixedVariant = /* @__PURE__ */ rs.fromPalette({ name: "on_primary_fixed_variant", palette: (e10) => e10.primaryPalette, tone: (e10) => rd(e10) ? 90 : 30, background: (e10) => rh.primaryFixedDim, secondBackground: (e10) => rh.primaryFixed, contrastCurve: new rl(3, 4.5, 7, 11) }), rh.secondaryFixed = /* @__PURE__ */ rs.fromPalette({ name: "secondary_fixed", palette: (e10) => e10.secondaryPalette, tone: (e10) => rd(e10) ? 80 : 90, isBackground: true, background: (e10) => rh.highestSurface(e10), contrastCurve: new rl(1, 1, 3, 7), toneDeltaPair: (e10) => new rc(rh.secondaryFixed, rh.secondaryFixedDim, 10, "lighter", true) }), rh.secondaryFixedDim = /* @__PURE__ */ rs.fromPalette({ name: "secondary_fixed_dim", palette: (e10) => e10.secondaryPalette, tone: (e10) => rd(e10) ? 70 : 80, isBackground: true, background: (e10) => rh.highestSurface(e10), contrastCurve: new rl(1, 1, 3, 7), toneDeltaPair: (e10) => new rc(rh.secondaryFixed, rh.secondaryFixedDim, 10, "lighter", true) }), rh.onSecondaryFixed = /* @__PURE__ */ rs.fromPalette({ name: "on_secondary_fixed", palette: (e10) => e10.secondaryPalette, tone: (e10) => 10, background: (e10) => rh.secondaryFixedDim, secondBackground: (e10) => rh.secondaryFixed, contrastCurve: new rl(4.5, 7, 11, 21) }), rh.onSecondaryFixedVariant = /* @__PURE__ */ rs.fromPalette({ name: "on_secondary_fixed_variant", palette: (e10) => e10.secondaryPalette, tone: (e10) => rd(e10) ? 25 : 30, background: (e10) => rh.secondaryFixedDim, secondBackground: (e10) => rh.secondaryFixed, contrastCurve: new rl(3, 4.5, 7, 11) }), rh.tertiaryFixed = /* @__PURE__ */ rs.fromPalette({ name: "tertiary_fixed", palette: (e10) => e10.tertiaryPalette, tone: (e10) => rd(e10) ? 40 : 90, isBackground: true, background: (e10) => rh.highestSurface(e10), contrastCurve: new rl(1, 1, 3, 7), toneDeltaPair: (e10) => new rc(rh.tertiaryFixed, rh.tertiaryFixedDim, 10, "lighter", true) }), rh.tertiaryFixedDim = /* @__PURE__ */ rs.fromPalette({ name: "tertiary_fixed_dim", palette: (e10) => e10.tertiaryPalette, tone: (e10) => rd(e10) ? 30 : 80, isBackground: true, background: (e10) => rh.highestSurface(e10), contrastCurve: new rl(1, 1, 3, 7), toneDeltaPair: (e10) => new rc(rh.tertiaryFixed, rh.tertiaryFixedDim, 10, "lighter", true) }), rh.onTertiaryFixed = /* @__PURE__ */ rs.fromPalette({ name: "on_tertiary_fixed", palette: (e10) => e10.tertiaryPalette, tone: (e10) => rd(e10) ? 100 : 10, background: (e10) => rh.tertiaryFixedDim, secondBackground: (e10) => rh.tertiaryFixed, contrastCurve: new rl(4.5, 7, 11, 21) }), rh.onTertiaryFixedVariant = /* @__PURE__ */ rs.fromPalette({ name: "on_tertiary_fixed_variant", palette: (e10) => e10.tertiaryPalette, tone: (e10) => rd(e10) ? 90 : 30, background: (e10) => rh.tertiaryFixedDim, secondBackground: (e10) => rh.tertiaryFixed, contrastCurve: new rl(3, 4.5, 7, 11) });
class rp {
  /**
  * @param argb ARGB representation of a color
  * @return Tones matching that color's hue and chroma.
  */
  static fromInt(e10) {
    let t10 = /* @__PURE__ */ ra.fromInt(e10);
    return rp.fromHct(t10);
  }
  /**
  * @param hct Hct
  * @return Tones matching that color's hue and chroma.
  */
  static fromHct(e10) {
    return new rp(e10.hue, e10.chroma, e10);
  }
  /**
  * @param hue HCT hue
  * @param chroma HCT chroma
  * @return Tones matching hue and chroma.
  */
  static fromHueAndChroma(e10, t10) {
    return new rp(e10, t10, rp.createKeyColor(e10, t10));
  }
  constructor(e10, t10, r10) {
    this.hue = e10, this.chroma = t10, this.keyColor = r10, this.cache = /* @__PURE__ */ new Map();
  }
  static createKeyColor(e10, t10) {
    let r10 = /* @__PURE__ */ ra.from(e10, t10, 50), n10 = /* @__PURE__ */ Math.abs(r10.chroma - t10);
    for (
      let a2 = 1;
      // Termination condition rounding instead of minimizing delta to avoid
      // case where requested chroma is 16.51, and the closest chroma is 16.49.
      // Error is minimized, but when rounded and displayed, requested chroma
      // is 17, key color's chroma is 16.
      a2 < 50 && Math.round(t10) !== Math.round(r10.chroma);
      a2 += 1
    ) {
      let o2 = /* @__PURE__ */ ra.from(e10, t10, 50 + a2), i2 = /* @__PURE__ */ Math.abs(o2.chroma - t10);
      i2 < n10 && (n10 = i2, r10 = o2);
      let s2 = /* @__PURE__ */ ra.from(e10, t10, 50 - a2), l2 = /* @__PURE__ */ Math.abs(s2.chroma - t10);
      l2 < n10 && (n10 = l2, r10 = s2);
    }
    return r10;
  }
  /**
  * @param tone HCT tone, measured from 0 to 100.
  * @return ARGB representation of a color with that tone.
  */
  tone(e10) {
    let t10 = /* @__PURE__ */ this.cache.get(e10);
    return void 0 === t10 && (t10 = /* @__PURE__ */ ra.from(this.hue, this.chroma, e10).toInt(), this.cache.set(e10, t10)), t10;
  }
  /**
  * @param tone HCT tone.
  * @return HCT representation of a color with that tone.
  */
  getHct(e10) {
    return ra.fromInt(/* @__PURE__ */ this.tone(e10));
  }
}
class rm {
  /**
  * @param argb ARGB representation of a color
  */
  static of(e10) {
    return new rm(e10, false);
  }
  /**
  * @param argb ARGB representation of a color
  */
  static contentOf(e10) {
    return new rm(e10, true);
  }
  /**
  * Create a [CorePalette] from a set of colors
  */
  static fromColors(e10) {
    return rm.createPaletteFromColors(false, e10);
  }
  /**
  * Create a content [CorePalette] from a set of colors
  */
  static contentFromColors(e10) {
    return rm.createPaletteFromColors(true, e10);
  }
  static createPaletteFromColors(e10, t10) {
    let r10 = new rm(t10.primary, e10);
    if (t10.secondary) {
      let n10 = new rm(t10.secondary, e10);
      r10.a2 = n10.a1;
    }
    if (t10.tertiary) {
      let n10 = new rm(t10.tertiary, e10);
      r10.a3 = n10.a1;
    }
    if (t10.error) {
      let n10 = new rm(t10.error, e10);
      r10.error = n10.a1;
    }
    if (t10.neutral) {
      let n10 = new rm(t10.neutral, e10);
      r10.n1 = n10.n1;
    }
    if (t10.neutralVariant) {
      let n10 = new rm(t10.neutralVariant, e10);
      r10.n2 = n10.n2;
    }
    return r10;
  }
  constructor(e10, t10) {
    let r10 = /* @__PURE__ */ ra.fromInt(e10), n10 = r10.hue, a2 = r10.chroma;
    t10 ? (this.a1 = /* @__PURE__ */ rp.fromHueAndChroma(n10, a2), this.a2 = /* @__PURE__ */ rp.fromHueAndChroma(n10, a2 / 3), this.a3 = /* @__PURE__ */ rp.fromHueAndChroma(n10 + 60, a2 / 2), this.n1 = /* @__PURE__ */ rp.fromHueAndChroma(n10, /* @__PURE__ */ Math.min(a2 / 12, 4)), this.n2 = /* @__PURE__ */ rp.fromHueAndChroma(n10, /* @__PURE__ */ Math.min(a2 / 6, 8))) : (this.a1 = /* @__PURE__ */ rp.fromHueAndChroma(n10, /* @__PURE__ */ Math.max(48, a2)), this.a2 = /* @__PURE__ */ rp.fromHueAndChroma(n10, 16), this.a3 = /* @__PURE__ */ rp.fromHueAndChroma(n10 + 60, 24), this.n1 = /* @__PURE__ */ rp.fromHueAndChroma(n10, 4), this.n2 = /* @__PURE__ */ rp.fromHueAndChroma(n10, 8)), this.error = /* @__PURE__ */ rp.fromHueAndChroma(25, 84);
  }
}
function rg(e10) {
  e10 = /* @__PURE__ */ e10.replace("#", "");
  let t10 = 3 === e10.length, r10 = 6 === e10.length, n10 = 8 === e10.length;
  if (!t10 && !r10 && !n10)
    throw Error("unexpected hex " + e10);
  let a2 = 0, o2 = 0, i2 = 0;
  return t10 ? (a2 = /* @__PURE__ */ rv(/* @__PURE__ */ e10.slice(0, 1).repeat(2)), o2 = /* @__PURE__ */ rv(/* @__PURE__ */ e10.slice(1, 2).repeat(2)), i2 = /* @__PURE__ */ rv(/* @__PURE__ */ e10.slice(2, 3).repeat(2))) : r10 ? (a2 = /* @__PURE__ */ rv(/* @__PURE__ */ e10.slice(0, 2)), o2 = /* @__PURE__ */ rv(/* @__PURE__ */ e10.slice(2, 4)), i2 = /* @__PURE__ */ rv(/* @__PURE__ */ e10.slice(4, 6))) : n10 && (a2 = /* @__PURE__ */ rv(/* @__PURE__ */ e10.slice(2, 4)), o2 = /* @__PURE__ */ rv(/* @__PURE__ */ e10.slice(4, 6)), i2 = /* @__PURE__ */ rv(/* @__PURE__ */ e10.slice(6, 8))), (-16777216 | (255 & a2) << 16 | (255 & o2) << 8 | 255 & i2) >>> 0;
}
function rv(e10) {
  return parseInt(e10, 16);
}
let rb = { 0: true, 10: true, 20: true, 30: true, 40: true, 50: true, 60: true, 70: true, 80: true, 90: true, 95: true, 100: true }, ry = (e10) => {
  let t10 = /* @__PURE__ */ t7(e10);
  return [t10.r, t10.g, t10.b];
}, rw = (e10) => ({ primary: true, secondary: true, tertiary: true, error: true, warning: true, success: true })[e10];
const _rx = class _rx {
  constructor(e10) {
    this.seeds = e10;
  }
  normalizeRoleRules() {
    let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t10 = { shadow: ["neutral", 0, 0], scrim: ["neutral", 0, 0], outline: ["neutralVariant", 60, 50], "outline-variant": ["neutralVariant", 30, 80], surface: ["neutral", 10, 99], "on-surface": ["neutral", 90, 10], "surface-variant": ["neutralVariant", 30, 90], "on-surface-variant": ["neutralVariant", 80, 30], "surface-dim": ["neutral", 6, 87], "surface-bright": ["neutral", 24, 98], "surface-container-lowest": ["neutral", 4, 100], "surface-container-low": ["neutral", 10, 96], "surface-container": ["neutral", 12, 94], "surface-container-high": ["neutral", 17, 92], "surface-container-highest": ["neutral", 22, 90], "inverse-surface": ["neutral", 90, 20], "inverse-on-surface": ["neutral", 20, 95], "inverse-primary": ["primary", 40, 80] };
    for (let e11 in this.seeds)
      e11.startsWith("neutral") || (t10[e11] = [e11, 80, 40], t10[`on-${e11}`] = [e11, 20, 100], t10[`${e11}-container`] = [e11, 30, 90], t10[`on-${e11}-container`] = [e11, 90, 10]);
    return { ...t10, ...e10 };
  }
  getThemeRoleColors(e10) {
    let t10 = {}, r10 = {};
    for (let n10 in e10) {
      let [a2, o2, i2] = e10[n10];
      this.seeds[a2] && (r10[n10] = rb[o2] ? `${a2}.${o2}` : this.seeds[a2].tone(o2), t10[n10] = rb[i2] ? `${a2}.${i2}` : this.seeds[a2].tone(i2));
    }
    return [t10, r10];
  }
  toDesignTokens() {
    let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [t10, r10] = this.getThemeRoleColors(/* @__PURE__ */ this.normalizeRoleRules(e10)), n10 = {}, a2 = {};
    for (let e11 in t10)
      if (n10[`${e11}`] = { _default: $(t10[e11]) ? ry(t10[e11]) : t10[e11], _dark: $(r10[e11]) ? ry(r10[e11]) : r10[e11] }, rw(e11) && (a2[`${e11}`] = /* @__PURE__ */ tx.mixin({ bgColor: `sys.${e11}`, color: `sys.on-${e11}` }), a2[`${e11}-container`] = /* @__PURE__ */ tx.mixin({ bgColor: `sys.${e11}-container`, color: `sys.on-${e11}-container` })), e11.startsWith("surface")) {
        if (e11.includes("container")) {
          a2[`${e11}`] = /* @__PURE__ */ tx.mixin({ bgColor: `sys.${e11}`, color: "sys.on-surface" });
          continue;
        }
        a2[`${e11}`] = /* @__PURE__ */ tx.mixin({ bgColor: `sys.${e11}`, color: "sys.on-surface" }), a2[`on-${e11}`] = /* @__PURE__ */ tx.mixin({ bgColor: `sys.on-${e11}`, color: "sys.inverse-on-surface" });
      }
    let o2 = (e11) => Object.keys(rb).reduce((t11, r11) => ({ ...t11, [r11]: /* @__PURE__ */ ry(/* @__PURE__ */ e11.tone(/* @__PURE__ */ parseInt(r11))) }), {}), i2 = /* @__PURE__ */ tx.color({ ...A(this.seeds, (e11) => o2(e11)), white: [255, 255, 255], black: [0, 0, 0], sys: n10 }), s2 = /* @__PURE__ */ tx.customMixin("containerStyle", { sys: a2 });
    return { color: i2, containerStyle: s2 };
  }
};
__publicField(_rx, "toHEX", (e10) => `#${ry(e10).map((e11) => L(/* @__PURE__ */ e11.toString(16), 2, "0")).join("")}`);
__publicField(_rx, "fromColors", (e10) => {
  let { primary: t10, secondary: r10, tertiary: n10, neutral: a2, neutralVariant: o2, error: i2, ...s2 } = e10, l2 = /* @__PURE__ */ rm.contentFromColors({ primary: /* @__PURE__ */ rg(t10), secondary: r10 ? rg(r10) : void 0, tertiary: n10 ? rg(n10) : void 0, error: i2 ? rg(i2) : void 0 });
  return a2 && (l2.n1 = /* @__PURE__ */ rp.fromHueAndChroma(/* @__PURE__ */ rg(a2), 4)), o2 && (l2.n2 = /* @__PURE__ */ rp.fromHueAndChroma(/* @__PURE__ */ rg(o2), 8)), new _rx({ primary: l2.a1, secondary: l2.a2, tertiary: l2.a3, neutral: l2.n1, neutralVariant: l2.n2, error: l2.error, ...A(s2, (e11) => rp.fromInt(/* @__PURE__ */ rg(e11))) });
});
let rx = _rx;
let rk = (e10, t10, r10, n10) => Object.assign(/* @__PURE__ */ td(e10, t10, r10, n10), { toString: () => `cubic-bezier(${e10}, ${t10}, ${r10}, ${n10})` }), rM = { duration: { sm1: 50, sm2: 100, sm3: 150, sm4: 200, md1: 250, md2: 300, md3: 350, md4: 400, lg1: 450, lg2: 500, lg3: 550, lg4: 600, xl1: 700, xl2: 800, xl3: 900, xl4: 1e3 }, easing: { linear: /* @__PURE__ */ rk(0, 0, 1, 1), standard: /* @__PURE__ */ Object.assign(/* @__PURE__ */ rk(0.2, 0, 0, 1), { accelerate: /* @__PURE__ */ rk(0.3, 0, 1, 1), decelerate: /* @__PURE__ */ rk(0, 0, 0, 1) }), emphasized: /* @__PURE__ */ Object.assign(/* @__PURE__ */ rk(0.2, 0, 0, 1), { accelerate: /* @__PURE__ */ rk(0.3, 0, 0.8, 0.15), decelerate: /* @__PURE__ */ rk(0.05, 0.7, 0.1, 1) }), legacy: /* @__PURE__ */ Object.assign(/* @__PURE__ */ rk(0.4, 0, 0.2, 1), { decelerate: /* @__PURE__ */ rk(0, 0, 0.2, 1), accelerate: /* @__PURE__ */ rk(0.4, 0, 1, 1) }) } }, rC = (e10, a2) => (a2 = null != a2 ? a2 : { ...e10, from: { ...e10.to }, to: { ...e10.from } }, t({ onComplete: /* @__PURE__ */ F(), $default: /* @__PURE__ */ F() }, (t10, o2) => {
  let i2, {} = t10, { slots: s2, emit: l2 } = o2, c2 = (t11, r10) => {
    i2 = /* @__PURE__ */ to({ ...e10, autoplay: true, onComplete: () => {
      r10(), l2("complete", "enter");
    }, onUpdate: (e11) => {
      Object.assign(t11.style, e11);
    } });
  }, u2 = (e11, t11) => {
    i2 = /* @__PURE__ */ to({ ...a2, autoplay: true, onComplete: () => {
      t11(), l2("complete", "leave");
    }, onUpdate: (t12) => {
      Object.assign(e11.style, t12);
    } });
  }, d2 = () => {
    null == i2 || i2.stop();
  };
  return () => {
    var e11;
    return /* @__PURE__ */ r(n, { css: false, onEnter: c2, onEnterCancelled: d2, onLeave: u2, onLeaveCancelled: d2, children: null === (e11 = s2.default) || void 0 === e11 ? void 0 : e11.call(s2) });
  };
}, { name: "Transition" })), rP = { transitionDuration: /* @__PURE__ */ tx.transitionDuration(rM.duration), transitionTimingFunction: /* @__PURE__ */ tx.transitionTimingFunction({ linear: /* @__PURE__ */ rM.easing.linear.toString(), standard: /* @__PURE__ */ rM.easing.standard.toString(), "standard-accelerate": /* @__PURE__ */ rM.easing.standard.accelerate.toString(), "standard-decelerate": /* @__PURE__ */ rM.easing.standard.decelerate.toString(), emphasized: /* @__PURE__ */ rM.easing.emphasized.toString(), "emphasized-decelerate": /* @__PURE__ */ rM.easing.emphasized.decelerate.toString(), "emphasized-accelerate": /* @__PURE__ */ rM.easing.emphasized.accelerate.toString(), legacy: /* @__PURE__ */ rM.easing.legacy.toString(), "legacy-decelerate": /* @__PURE__ */ rM.easing.legacy.decelerate.toString(), "legacy-accelerate": /* @__PURE__ */ rM.easing.legacy.accelerate.toString() }) }, r_ = /* @__PURE__ */ tx.rounded({ xs: 4, sm: 8, md: 12, lg: 16, xl: 28 }), rS = /* @__PURE__ */ rx.fromColors({ primary: "#1270f5", secondary: "#8a90a5", tertiary: "#b58391", neutral: "#5e5e5e", error: "#d93f23", warning: "#e69c00", success: "#5ac220" }), rO = { ...tX, ...rP, ...tG, rounded: r_, ...rS.toDesignTokens({ primary: ["primary", 80, 50] }) }, rT = /* @__PURE__ */ tY.create(rO, { varPrefix: "vk" }), rD = /* @__PURE__ */ a(() => rT, { name: "Theme" });
var rR = function(e10, t10, r10) {
  var n10 = e10.key + "-" + t10.name;
  false === // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  r10 && void 0 === e10.registered[n10] && (e10.registered[n10] = t10.styles);
}, r$ = function(e10, t10, r10) {
  rR(e10, t10, r10);
  var n10 = e10.key + "-" + t10.name;
  if (void 0 === e10.inserted[t10.name]) {
    var a2 = t10;
    do
      e10.insert(t10 === a2 ? "." + n10 : "", a2, e10.sheet, true), a2 = a2.next;
    while (void 0 !== a2);
  }
}, rA = /* @__PURE__ */ function() {
  function e10(e11) {
    var t11 = this;
    this._insertTag = function(e12) {
      var r10;
      r10 = 0 === t11.tags.length ? t11.insertionPoint ? t11.insertionPoint.nextSibling : t11.prepend ? t11.container.firstChild : t11.before : t11.tags[t11.tags.length - 1].nextSibling, t11.container.insertBefore(e12, r10), t11.tags.push(e12);
    }, this.isSpeedy = void 0 !== e11.speedy && e11.speedy, this.tags = [], this.ctr = 0, this.nonce = e11.nonce, this.key = e11.key, this.container = e11.container, this.prepend = e11.prepend, this.insertionPoint = e11.insertionPoint, this.before = null;
  }
  var t10 = e10.prototype;
  return t10.hydrate = function(e11) {
    e11.forEach(this._insertTag);
  }, t10.insert = function(e11) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) == 0) {
      var t11;
      this._insertTag(((t11 = /* @__PURE__ */ document.createElement("style")).setAttribute("data-emotion", this.key), void 0 !== this.nonce && t11.setAttribute("nonce", this.nonce), t11.appendChild(/* @__PURE__ */ document.createTextNode("")), t11.setAttribute("data-s", ""), t11));
    }
    var r10 = this.tags[this.tags.length - 1], n10 = 64 === e11.charCodeAt(0) && 105 === e11.charCodeAt(1);
    if (n10 && this._alreadyInsertedOrderInsensitiveRule && console.error("You're attempting to insert the following rule:\n" + e11 + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !n10, this.isSpeedy) {
      var a2 = /* @__PURE__ */ function(e12) {
        if (e12.sheet)
          return e12.sheet;
        for (var t12 = 0; t12 < document.styleSheets.length; t12++)
          if (document.styleSheets[t12].ownerNode === e12)
            return document.styleSheets[t12];
      }(r10);
      try {
        a2.insertRule(e11, a2.cssRules.length);
      } catch (t12) {
        /:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(e11) || console.error('There was a problem inserting the following rule: "' + e11 + '"', t12);
      }
    } else
      r10.appendChild(/* @__PURE__ */ document.createTextNode(e11));
    this.ctr++;
  }, t10.flush = function() {
    this.tags.forEach(function(e11) {
      return e11.parentNode && e11.parentNode.removeChild(e11);
    }), this.tags = [], this.ctr = 0, this._alreadyInsertedOrderInsensitiveRule = false;
  }, e10;
}(), rI = "-ms-", rL = "-moz-", rF = "-webkit-", rB = "comm", rE = "rule", rj = "decl", rV = "@keyframes", rH = Math.abs, rz = String.fromCharCode, rN = Object.assign;
function rW(e10, t10, r10) {
  return e10.replace(t10, r10);
}
function rq(e10, t10) {
  return e10.indexOf(t10);
}
function rU(e10, t10) {
  return 0 | e10.charCodeAt(t10);
}
function rY(e10, t10, r10) {
  return e10.slice(t10, r10);
}
function rG(e10) {
  return e10.length;
}
function rX(e10, t10) {
  return t10.push(e10), e10;
}
var rK = 1, rJ = 1, rZ = 0, rQ = 0, r0 = 0, r1 = "";
function r2(e10, t10, r10, n10, a2, o2, i2) {
  return { value: e10, root: t10, parent: r10, type: n10, props: a2, children: o2, line: rK, column: rJ, length: i2, return: "" };
}
function r4(e10, t10) {
  return rN(/* @__PURE__ */ r2("", null, null, "", null, null, 0), e10, { length: -e10.length }, t10);
}
function r5() {
  return r0 = rQ < rZ ? rU(r1, rQ++) : 0, rJ++, 10 === r0 && (rJ = 1, rK++), r0;
}
function r3() {
  return rU(r1, rQ);
}
function r8(e10) {
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
function r6(e10) {
  return rK = rJ = 1, rZ = /* @__PURE__ */ rG(r1 = e10), rQ = 0, [];
}
function r9(e10) {
  var t10, r10;
  return (t10 = rQ - 1, r10 = /**
  * @param {number} type
  * @return {number}
  */
  /* @__PURE__ */ function e11(t11) {
    for (; r5(); )
      switch (r0) {
        case t11:
          return rQ;
        case 34:
        case 39:
          34 !== t11 && 39 !== t11 && e11(r0);
          break;
        case 40:
          41 === t11 && e11(t11);
          break;
        case 92:
          r5();
      }
    return rQ;
  }(91 === e10 ? e10 + 2 : 40 === e10 ? e10 + 1 : e10), rY(r1, t10, r10)).trim();
}
function r7(e10, t10, r10, n10, a2, o2, i2, s2, l2, c2, u2) {
  for (var d2 = a2 - 1, f2 = 0 === a2 ? o2 : [""], h2 = f2.length, p2 = 0, m2 = 0, g2 = 0; p2 < n10; ++p2)
    for (var v2 = 0, b2 = /* @__PURE__ */ rY(e10, d2 + 1, d2 = /* @__PURE__ */ rH(m2 = i2[p2])), y2 = e10; v2 < h2; ++v2)
      (y2 = (m2 > 0 ? f2[v2] + " " + b2 : rW(b2, /&\f/g, f2[v2])).trim()) && (l2[g2++] = y2);
  return r2(e10, t10, r10, 0 === a2 ? rE : s2, l2, c2, u2);
}
function ne(e10, t10, r10, n10) {
  return r2(e10, t10, r10, rj, /* @__PURE__ */ rY(e10, 0, n10), /* @__PURE__ */ rY(e10, n10 + 1, -1), n10);
}
function nt(e10, t10) {
  for (var r10 = "", n10 = e10.length, a2 = 0; a2 < n10; a2++)
    r10 += t10(e10[a2], a2, e10, t10) || "";
  return r10;
}
function nr(e10, t10, r10, n10) {
  switch (e10.type) {
    case "@layer":
      if (e10.children.length)
        break;
    case "@import":
    case rj:
      return e10.return = e10.return || e10.value;
    case rB:
      return "";
    case rV:
      return e10.return = e10.value + "{" + nt(e10.children, n10) + "}";
    case rE:
      e10.value = /* @__PURE__ */ e10.props.join(",");
  }
  return rG(r10 = /* @__PURE__ */ nt(e10.children, n10)) ? e10.return = e10.value + "{" + r10 + "}" : "";
}
var nn = function(e10, t10, r10) {
  for (var n10 = 0, a2 = 0; n10 = a2, a2 = /* @__PURE__ */ r3(), 38 === n10 && 12 === a2 && (t10[r10] = 1), !r8(a2); )
    r5();
  return rY(r1, e10, rQ);
}, na = function(e10, t10) {
  var r10 = -1, n10 = 44;
  do
    switch (r8(n10)) {
      case 0:
        38 === n10 && 12 === r3() && (t10[r10] = 1), e10[r10] += /* @__PURE__ */ nn(rQ - 1, t10, r10);
        break;
      case 2:
        e10[r10] += /* @__PURE__ */ r9(n10);
        break;
      case 4:
        if (44 === n10) {
          e10[++r10] = 58 === r3() ? "&\f" : "", t10[r10] = e10[r10].length;
          break;
        }
      default:
        e10[r10] += /* @__PURE__ */ rz(n10);
    }
  while (n10 = /* @__PURE__ */ r5());
  return e10;
}, no = function(e10, t10) {
  var r10;
  return r10 = /* @__PURE__ */ na(/* @__PURE__ */ r6(e10), t10), r1 = "", r10;
}, ni = /* @__PURE__ */ new WeakMap(), ns = function(e10) {
  if ("rule" === e10.type && e10.parent && !// positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  (e10.length < 1)) {
    for (var t10 = e10.value, r10 = e10.parent, n10 = e10.column === r10.column && e10.line === r10.line; "rule" !== r10.type; )
      if (!(r10 = r10.parent))
        return;
    if ((1 !== e10.props.length || 58 === t10.charCodeAt(0) || ni.get(r10)) && !n10) {
      ni.set(e10, true);
      for (var a2 = [], o2 = /* @__PURE__ */ no(t10, a2), i2 = r10.props, s2 = 0, l2 = 0; s2 < o2.length; s2++)
        for (var c2 = 0; c2 < i2.length; c2++, l2++)
          e10.props[l2] = a2[s2] ? o2[s2].replace(/&\f/g, i2[c2]) : i2[c2] + " " + o2[s2];
    }
  }
}, nl = function(e10) {
  if ("decl" === e10.type) {
    var t10 = e10.value;
    108 === t10.charCodeAt(0) && // charcode for b
    98 === t10.charCodeAt(2) && (e10.return = "", e10.value = "");
  }
}, nc = function(e10) {
  return 105 === e10.type.charCodeAt(1) && 64 === e10.type.charCodeAt(0);
}, nu = function(e10, t10) {
  for (var r10 = e10 - 1; r10 >= 0; r10--)
    if (!nc(t10[r10]))
      return true;
  return false;
}, nd = function(e10) {
  e10.type = "", e10.value = "", e10.return = "", e10.children = "", e10.props = "";
}, nf = function(e10, t10, r10) {
  nc(e10) && (e10.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), nd(e10)) : nu(t10, r10) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), nd(e10)));
}, nh = [function(e10, t10, r10, n10) {
  if (e10.length > -1 && !e10.return)
    switch (e10.type) {
      case rj:
        e10.return = /* @__PURE__ */ function e11(t11, r11) {
          switch (45 ^ rU(t11, 0) ? (((r11 << 2 ^ rU(t11, 0)) << 2 ^ rU(t11, 1)) << 2 ^ rU(t11, 2)) << 2 ^ rU(t11, 3) : 0) {
            case 5103:
              return rF + "print-" + t11 + t11;
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
              return rF + t11 + t11;
            case 5349:
            case 4246:
            case 4810:
            case 6968:
            case 2756:
              return rF + t11 + rL + t11 + rI + t11 + t11;
            case 6828:
            case 4268:
              return rF + t11 + rI + t11 + t11;
            case 6165:
              return rF + t11 + rI + "flex-" + t11 + t11;
            case 5187:
              return rF + t11 + rW(t11, /(\w+).+(:[^]+)/, rF + "box-$1$2" + rI + "flex-$1$2") + t11;
            case 5443:
              return rF + t11 + rI + "flex-item-" + rW(t11, /flex-|-self/, "") + t11;
            case 4675:
              return rF + t11 + rI + "flex-line-pack" + rW(t11, /align-content|flex-|-self/, "") + t11;
            case 5548:
              return rF + t11 + rI + rW(t11, "shrink", "negative") + t11;
            case 5292:
              return rF + t11 + rI + rW(t11, "basis", "preferred-size") + t11;
            case 6060:
              return rF + "box-" + rW(t11, "-grow", "") + rF + t11 + rI + rW(t11, "grow", "positive") + t11;
            case 4554:
              return rF + rW(t11, /([^-])(transform)/g, "$1" + rF + "$2") + t11;
            case 6187:
              return rW(/* @__PURE__ */ rW(/* @__PURE__ */ rW(t11, /(zoom-|grab)/, rF + "$1"), /(image-set)/, rF + "$1"), t11, "") + t11;
            case 5495:
            case 3959:
              return rW(t11, /(image-set\([^]*)/, rF + "$1$`$1");
            case 4968:
              return rW(/* @__PURE__ */ rW(t11, /(.+:)(flex-)?(.*)/, rF + "box-pack:$3" + rI + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + rF + t11 + t11;
            case 4095:
            case 3583:
            case 4068:
            case 2532:
              return rW(t11, /(.+)-inline(.+)/, rF + "$1$2") + t11;
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
              if (rG(t11) - 1 - r11 > 6)
                switch (rU(t11, r11 + 1)) {
                  case 109:
                    if (45 !== rU(t11, r11 + 4))
                      break;
                  case 102:
                    return rW(t11, /(.+:)(.+)-([^]+)/, "$1" + rF + "$2-$3$1" + rL + (108 == rU(t11, r11 + 3) ? "$3" : "$2-$3")) + t11;
                  case 115:
                    return ~rq(t11, "stretch") ? e11(/* @__PURE__ */ rW(t11, "stretch", "fill-available"), r11) + t11 : t11;
                }
              break;
            case 4949:
              if (115 !== rU(t11, r11 + 1))
                break;
            case 6444:
              switch (rU(t11, rG(t11) - 3 - (~rq(t11, "!important") && 10))) {
                case 107:
                  return rW(t11, ":", ":" + rF) + t11;
                case 101:
                  return rW(t11, /(.+:)([^;!]+)(;|!.+)?/, "$1" + rF + (45 === rU(t11, 14) ? "inline-" : "") + "box$3$1" + rF + "$2$3$1" + rI + "$2box$3") + t11;
              }
              break;
            case 5936:
              switch (rU(t11, r11 + 11)) {
                case 114:
                  return rF + t11 + rI + rW(t11, /[svh]\w+-[tblr]{2}/, "tb") + t11;
                case 108:
                  return rF + t11 + rI + rW(t11, /[svh]\w+-[tblr]{2}/, "tb-rl") + t11;
                case 45:
                  return rF + t11 + rI + rW(t11, /[svh]\w+-[tblr]{2}/, "lr") + t11;
              }
              return rF + t11 + rI + t11 + t11;
          }
          return t11;
        }(e10.value, e10.length);
        break;
      case rV:
        return nt([/* @__PURE__ */ r4(e10, { value: /* @__PURE__ */ rW(e10.value, "@", "@" + rF) })], n10);
      case rE:
        if (e10.length)
          return e10.props.map(function(t11) {
            var r11;
            switch (r11 = t11, (r11 = /* @__PURE__ */ /(::plac\w+|:read-\w+)/.exec(r11)) ? r11[0] : r11) {
              case ":read-only":
              case ":read-write":
                return nt([/* @__PURE__ */ r4(e10, { props: [/* @__PURE__ */ rW(t11, /:(read-\w+)/, ":" + rL + "$1")] })], n10);
              case "::placeholder":
                return nt([/* @__PURE__ */ r4(e10, { props: [/* @__PURE__ */ rW(t11, /:(plac\w+)/, ":" + rF + "input-$1")] }), /* @__PURE__ */ r4(e10, { props: [/* @__PURE__ */ rW(t11, /:(plac\w+)/, ":" + rL + "$1")] }), /* @__PURE__ */ r4(e10, { props: [/* @__PURE__ */ rW(t11, /:(plac\w+)/, rI + "input-$1")] })], n10);
            }
            return "";
          }).join("");
    }
}], np = function(e10) {
  var t10, r10, n10, a2, o2, i2 = e10.key;
  if (!i2)
    throw Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\nIf multiple caches share the same key they might \"fight\" for each other's style elements.");
  if ("css" === i2) {
    var s2 = /* @__PURE__ */ document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(s2, function(e11) {
      -1 !== /* @__PURE__ */ e11.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e11), e11.setAttribute("data-s", ""));
    });
  }
  var l2 = e10.stylisPlugins || nh;
  if (/[^a-z-]/.test(i2))
    throw Error('Emotion key must only contain lower case alphabetical characters and - but "' + i2 + '" was passed');
  var c2 = {}, u2 = [];
  a2 = e10.container || document.head, Array.prototype.forEach.call(
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    /* @__PURE__ */ document.querySelectorAll('style[data-emotion^="' + i2 + ' "]'),
    function(e11) {
      for (var t11 = /* @__PURE__ */ e11.getAttribute("data-emotion").split(" "), r11 = 1; r11 < t11.length; r11++)
        c2[t11[r11]] = true;
      u2.push(e11);
    }
  );
  var d2 = [ns, nl];
  d2.push((n10 = { get compat() {
    return p2.compat;
  } }, function(e11, t11, r11) {
    if ("rule" === e11.type && !n10.compat) {
      var a3 = /* @__PURE__ */ e11.value.match(/(:first|:nth|:nth-last)-child/g);
      if (a3) {
        for (var o3 = e11.parent ? e11.parent.children : r11, i3 = o3.length - 1; i3 >= 0; i3--) {
          var s3 = o3[i3];
          if (s3.line < e11.line)
            break;
          if (s3.column < e11.column) {
            if ("comm" === s3.type && s3.children.indexOf("emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason") > -1)
              return;
            break;
          }
        }
        a3.forEach(function(e12) {
          console.error('The pseudo class "' + e12 + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + e12.split("-child")[0] + '-of-type".');
        });
      }
    }
  }), nf);
  var f2 = (r10 = (t10 = /* @__PURE__ */ d2.concat(l2, [nr, function(e11) {
    !e11.root && (e11.return ? o2.insert(e11.return) : e11.value && e11.type !== rB && o2.insert(e11.value + "{}"));
  }])).length, function(e11, n11, a3, o3) {
    for (var i3 = "", s3 = 0; s3 < r10; s3++)
      i3 += t10[s3](e11, n11, a3, o3) || "";
    return i3;
  }), h2 = function(e11) {
    var t11, r11;
    return nt((r11 = /**
    * @param {string} value
    * @param {object} root
    * @param {object?} parent
    * @param {string[]} rule
    * @param {string[]} rules
    * @param {string[]} rulesets
    * @param {number[]} pseudo
    * @param {number[]} points
    * @param {string[]} declarations
    * @return {object}
    */
    /* @__PURE__ */ function e12(t12, r12, n11, a3, o3, i3, s3, l3, c3) {
      for (var u3, d3 = 0, f3 = 0, h3 = s3, p3 = 0, m2 = 0, g2 = 0, v2 = 1, b2 = 1, y2 = 1, w2 = 0, x2 = "", k2 = o3, M2 = i3, C2 = a3, P2 = x2; b2; )
        switch (g2 = w2, w2 = /* @__PURE__ */ r5()) {
          case 40:
            if (108 != g2 && 58 == rU(P2, h3 - 1)) {
              -1 != rq(P2 += /* @__PURE__ */ rW(/* @__PURE__ */ r9(w2), "&", "&\f"), "&\f") && (y2 = -1);
              break;
            }
          case 34:
          case 39:
          case 91:
            P2 += /* @__PURE__ */ r9(w2);
            break;
          case 9:
          case 10:
          case 13:
          case 32:
            P2 += /**
            * @param {number} type
            * @return {string}
            */
            /* @__PURE__ */ function(e13) {
              for (; r0 = /* @__PURE__ */ r3(); )
                if (r0 < 33)
                  r5();
                else
                  break;
              return r8(e13) > 2 || r8(r0) > 3 ? "" : " ";
            }(g2);
            break;
          case 92:
            P2 += /**
            * @param {number} index
            * @param {number} count
            * @return {string}
            */
            /* @__PURE__ */ function(e13, t13) {
              for (var r13; --t13 && r5() && !(r0 < 48) && !(r0 > 102) && (!(r0 > 57) || !(r0 < 65)) && (!(r0 > 70) || !(r0 < 97)); )
                ;
              return r13 = rQ + (t13 < 6 && 32 == r3() && 32 == r5()), rY(r1, e13, r13);
            }(rQ - 1, 7);
            continue;
          case 47:
            switch (r3()) {
              case 42:
              case 47:
                rX(r2(u3 = /**
                * @param {number} type
                * @param {number} index
                * @return {number}
                */
                /* @__PURE__ */ function(e13, t13) {
                  for (; r5(); )
                    if (e13 + r0 === 57)
                      break;
                    else if (e13 + r0 === 84 && 47 === r3())
                      break;
                  return "/*" + rY(r1, t13, rQ - 1) + "*" + rz(47 === e13 ? e13 : r5());
                }(/* @__PURE__ */ r5(), rQ), r12, n11, rB, /* @__PURE__ */ rz(r0), /* @__PURE__ */ rY(u3, 2, -2), 0), c3);
                break;
              default:
                P2 += "/";
            }
            break;
          case 123 * v2:
            l3[d3++] = rG(P2) * y2;
          case 125 * v2:
          case 59:
          case 0:
            switch (w2) {
              case 0:
              case 125:
                b2 = 0;
              case 59 + f3:
                -1 == y2 && (P2 = /* @__PURE__ */ rW(P2, /\f/g, "")), m2 > 0 && rG(P2) - h3 && rX(m2 > 32 ? ne(P2 + ";", a3, n11, h3 - 1) : ne(rW(P2, " ", "") + ";", a3, n11, h3 - 2), c3);
                break;
              case 59:
                P2 += ";";
              default:
                if (rX(C2 = /* @__PURE__ */ r7(P2, r12, n11, d3, f3, o3, l3, x2, k2 = [], M2 = [], h3), i3), 123 === w2) {
                  if (0 === f3)
                    e12(P2, r12, C2, C2, k2, i3, h3, l3, M2);
                  else
                    switch (99 === p3 && 110 === rU(P2, 3) ? 100 : p3) {
                      case 100:
                      case 108:
                      case 109:
                      case 115:
                        e12(t12, C2, C2, a3 && rX(/* @__PURE__ */ r7(t12, C2, C2, 0, 0, o3, l3, x2, o3, k2 = [], h3), M2), o3, M2, h3, l3, a3 ? k2 : M2);
                        break;
                      default:
                        e12(P2, C2, C2, C2, [""], M2, 0, l3, M2);
                    }
                }
            }
            d3 = f3 = m2 = 0, v2 = y2 = 1, x2 = P2 = "", h3 = s3;
            break;
          case 58:
            h3 = 1 + rG(P2), m2 = g2;
          default:
            if (v2 < 1) {
              if (123 == w2)
                --v2;
              else if (125 == w2 && 0 == v2++ && 125 == (r0 = rQ > 0 ? rU(r1, --rQ) : 0, rJ--, 10 === r0 && (rJ = 1, rK--), r0))
                continue;
            }
            switch (P2 += /* @__PURE__ */ rz(w2), w2 * v2) {
              case 38:
                y2 = f3 > 0 ? 1 : (P2 += "\f", -1);
                break;
              case 44:
                l3[d3++] = (rG(P2) - 1) * y2, y2 = 1;
                break;
              case 64:
                45 === r3() && (P2 += /* @__PURE__ */ r9(/* @__PURE__ */ r5())), p3 = /* @__PURE__ */ r3(), f3 = h3 = /* @__PURE__ */ rG(x2 = P2 += /**
                * @param {number} index
                * @return {string}
                */
                /* @__PURE__ */ function(e13) {
                  for (; !r8(/* @__PURE__ */ r3()); )
                    r5();
                  return rY(r1, e13, rQ);
                }(rQ)), w2++;
                break;
              case 45:
                45 === g2 && 2 == rG(P2) && (v2 = 0);
            }
        }
      return i3;
    }("", null, null, null, [""], t11 = /* @__PURE__ */ r6(t11 = e11), 0, [0], t11), r1 = "", r11), f2);
  }, p2 = { key: i2, sheet: new rA({ key: i2, container: a2, nonce: e10.nonce, speedy: e10.speedy, prepend: e10.prepend, insertionPoint: e10.insertionPoint }), nonce: e10.nonce, inserted: c2, registered: {}, insert: function(e11, t11, r11, n11) {
    o2 = r11, void 0 !== t11.map && (o2 = { insert: function(e12) {
      r11.insert(e12 + t11.map);
    } }), h2(e11 ? e11 + "{" + t11.styles + "}" : t11.styles), n11 && (p2.inserted[t11.name] = true);
  } };
  return p2.sheet.hydrate(u2), p2;
};
let nm = /* @__PURE__ */ a(() => np({ key: "css" }), { name: "Cache" }), ng = (e10) => (t10) => {
  if (t10.serialized) {
    if (t10.withoutScoping)
      e10.insert("", t10.serialized, e10.sheet, true);
    else {
      var r10;
      r$(e10, t10.serialized, null === (r10 = t10.isStringTag) || void 0 === r10 || r10);
    }
  }
}, nv = /* @__PURE__ */ t({ sx: /* @__PURE__ */ F(), component: /* @__PURE__ */ F().optional().default("div") }, (e10, t10) => {
  var n10;
  let { slots: a2 } = t10, i2 = /* @__PURE__ */ rD.use(), s2 = /* @__PURE__ */ nm.use(), l2 = /* @__PURE__ */ i2.unstable_css(s2, null !== (n10 = e10.sx) && void 0 !== n10 ? n10 : {}), c2 = () => "0" != l2.name ? `${s2.key}-${l2.name}` : "", u2 = /* @__PURE__ */ ng(s2);
  return o(() => {
    u2({ serialized: l2, isStringTag: true });
  }), () => {
    var t11;
    let n11 = null !== (t11 = e10.component) && void 0 !== t11 ? t11 : "div";
    return /* @__PURE__ */ r(n11, { class: /* @__PURE__ */ c2(), children: a2 });
  };
}), nb = /* @__PURE__ */ Object.assign(nv, { displayName: "Box" }), ny = (e10, t10) => (n10) => {
  let a2 = {};
  for (let t11 in e10)
    "component" !== t11 && "sx" !== t11 && e10[t11] && (a2[`data-${t11}`] = e10[t11]);
  return /* @__PURE__ */ r(n10, { ...a2, children: t10.slots });
};
function nw(e10, r10, n10) {
  var a2;
  let c2 = null !== (a2 = _(r10) ? r10 : n10) && void 0 !== a2 ? a2 : ny, u2 = w(r10) ? r10 : {};
  return (r11) => {
    let n11 = t({ ...u2, sx: /* @__PURE__ */ F().optional(), component: /* @__PURE__ */ F().optional() }, (t10, a3) => {
      let u3 = /* @__PURE__ */ rD.use(), d2 = /* @__PURE__ */ nm.use(), f2 = /* @__PURE__ */ ng(d2);
      r11.label = n11.name;
      let h2 = /* @__PURE__ */ i(""), p2 = /* @__PURE__ */ u3.unstable_css(d2, r11), m2 = () => "0" != p2.name ? `${d2.key}-${p2.name}${h2.value}` : `${h2.value}`;
      if (e10.__styled) {
        var g2;
        let e11 = /* @__PURE__ */ u3.unstable_css(d2, null !== (g2 = t10.sx) && void 0 !== g2 ? g2 : {});
        "0" != e11.name && (h2.value = ` ${d2.key}-${e11.name}`), o(() => {
          f2({ serialized: p2, isStringTag: true }), f2({ serialized: e11, isStringTag: true });
        });
      } else
        s(() => {
          f2({ serialized: p2, isStringTag: true });
        });
      let v2 = /* @__PURE__ */ c2(t10, a3);
      return () => {
        if (e10.__styled) {
          let r13 = /* @__PURE__ */ v2(e10);
          return r13 ? l(r13, { component: t10.component, class: /* @__PURE__ */ m2() }) : null;
        }
        let r12 = /* @__PURE__ */ v2(nb);
        return r12 ? l(r12, { component: t10.component || e10, sx: t10.sx, class: /* @__PURE__ */ m2() }) : null;
      };
    });
    return n11.__styled = true, n11;
  };
}
let nx = /* @__PURE__ */ t({ styles: /* @__PURE__ */ F() }, (e10) => {
  let { styles: t10 } = e10, r10 = /* @__PURE__ */ rD.use(), n10 = /* @__PURE__ */ nm.use(), a2 = /* @__PURE__ */ ng(n10), o2 = /* @__PURE__ */ r10.unstable_css(n10, y(t10) ? { "&": t10 } : t10);
  return s(() => {
    a2({ serialized: o2, withoutScoping: true });
  }), () => null;
}), nk = /* @__PURE__ */ Object.assign(nx, { displayName: "GlobalStyle" }), nM = /* @__PURE__ */ t(() => {
  let e10 = /* @__PURE__ */ rD.use(), t10 = e10.rootCSSVars;
  return () => /* @__PURE__ */ r(nk, { styles: { ":host, :root, [data-theme]": t10, "*, *::after, *::before": { boxSizing: "border-box" }, html: { fontSize: "10px" }, a: { color: "inherit" }, body: { textStyle: "sys.body-medium" } } });
}), nC = /* @__PURE__ */ Object.assign(nM, { displayName: "CSSReset" }), nP = /* @__PURE__ */ a(() => ({ mountPoint: () => document.body }), { name: "OverlaySetting" }), n_ = /* @__PURE__ */ a(() => new nS(i(null), i(null), () => false), { name: "Overlay" });
class nS {
  constructor(e10, t10, r10) {
    __publicField(this, "children", []);
    __publicField(this, "add", (e10) => (this.children = [...this.children, e10], () => {
      this.children = /* @__PURE__ */ this.children.filter((t10) => t10 !== e10);
    }));
    __publicField(this, "isClickInside", (e10) => {
      for (let t11 of this.children)
        if (t11.isClickInside(e10))
          return true;
      let t10 = /* @__PURE__ */ c(this.triggerRef), r10 = /* @__PURE__ */ c(this.contentRef);
      return t10 && (t10 === e10.target || e10.composedPath().includes(t10)) || r10 && (r10 === e10.target || e10.composedPath().includes(r10));
    });
    this.triggerRef = e10, this.contentRef = t10, this.isOpen = r10;
  }
  topmost() {
    return 0 == this.children.filter((e10) => e10.isOpen()).length;
  }
}
let nO = /* @__PURE__ */ t({ isOpen: /* @__PURE__ */ B().optional(), style: /* @__PURE__ */ F().optional(), contentRef: /* @__PURE__ */ F().optional(), triggerRef: /* @__PURE__ */ F().optional(), onClickOutside: /* @__PURE__ */ F(), onEscKeydown: /* @__PURE__ */ F(), onContentBeforeMount: /* @__PURE__ */ F(), $transition: /* @__PURE__ */ F().optional(), $default: /* @__PURE__ */ F().optional() }, (e10, t10) => {
  var n10;
  let { slots: a2, attrs: o2, emit: s2 } = t10, c2 = e10.contentRef || i(null), g2 = new nS(null !== (n10 = e10.triggerRef) && void 0 !== n10 ? n10 : i(null), c2, () => !!e10.isOpen), v2 = /* @__PURE__ */ nP.use(), b2 = /* @__PURE__ */ n_.use();
  return u(/* @__PURE__ */ b2.add(g2)), window && d(/* @__PURE__ */ f(c2, "value"), /* @__PURE__ */ m((e11) => {
    if (!e11)
      return;
    let t11 = (e12) => {
      g2.isClickInside(e12) || s2("click-outside", e12);
    };
    return window.addEventListener("pointerdown", t11), () => {
      window.removeEventListener("pointerdown", t11);
    };
  }), /* @__PURE__ */ m((e11) => {
    if (!e11)
      return;
    let t11 = (e12) => {
      "Escape" === e12.key && g2.topmost() && s2("esc-keydown", e12);
    };
    return window.addEventListener("keydown", t11), () => {
      window.removeEventListener("keydown", t11);
    };
  }), /* @__PURE__ */ p()), () => {
    var t11;
    let n11 = e10.isOpen ? l(/* @__PURE__ */ r("div", { ...o2, ref: c2, style: e10.style, children: /* @__PURE__ */ r(n_, { value: g2, children: null === (t11 = a2.default) || void 0 === t11 ? void 0 : t11.call(a2) }) }), { onVnodeBeforeMount: () => {
      s2("content-before-mount");
    } }) : null;
    return /* @__PURE__ */ r(h, { to: /* @__PURE__ */ v2.mountPoint(), children: a2.transition ? a2.transition({ content: n11 }) : n11 });
  };
}, { inheritAttrs: false, name: "Overlay" }), nT = /* @__PURE__ */ Object.assign(nO, { displayName: "Overlay" });
var nD = "bottom", nR = "right", n$ = "left", nA = "auto", nI = ["top", nD, nR, n$], nL = "start", nF = "viewport", nB = "popper", nE = /* @__PURE__ */ nI.reduce(function(e10, t10) {
  return e10.concat([t10 + "-" + nL, t10 + "-end"]);
}, []), nj = /* @__PURE__ */ [].concat(nI, [nA]).reduce(function(e10, t10) {
  return e10.concat([t10, t10 + "-" + nL, t10 + "-end"]);
}, []), nV = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
function nH(e10) {
  return e10 ? (e10.nodeName || "").toLowerCase() : null;
}
function nz(e10) {
  if (null == e10)
    return window;
  if ("[object Window]" !== e10.toString()) {
    var t10 = e10.ownerDocument;
    return t10 && t10.defaultView || window;
  }
  return e10;
}
function nN(e10) {
  var t10 = nz(e10).Element;
  return e10 instanceof t10 || e10 instanceof Element;
}
function nW(e10) {
  var t10 = nz(e10).HTMLElement;
  return e10 instanceof t10 || e10 instanceof HTMLElement;
}
function nq(e10) {
  if ("undefined" == typeof ShadowRoot)
    return false;
  var t10 = nz(e10).ShadowRoot;
  return e10 instanceof t10 || e10 instanceof ShadowRoot;
}
function nU(e10) {
  return e10.split("-")[0];
}
var nY = Math.max, nG = Math.min, nX = Math.round;
function nK() {
  var e10 = navigator.userAgentData;
  return null != e10 && e10.brands && Array.isArray(e10.brands) ? e10.brands.map(function(e11) {
    return e11.brand + "/" + e11.version;
  }).join(" ") : navigator.userAgent;
}
function nJ() {
  return !/^((?!chrome|android).)*safari/i.test(/* @__PURE__ */ nK());
}
function nZ(e10, t10, r10) {
  void 0 === t10 && (t10 = false), void 0 === r10 && (r10 = false);
  var n10 = /* @__PURE__ */ e10.getBoundingClientRect(), a2 = 1, o2 = 1;
  t10 && nW(e10) && (a2 = e10.offsetWidth > 0 && nX(n10.width) / e10.offsetWidth || 1, o2 = e10.offsetHeight > 0 && nX(n10.height) / e10.offsetHeight || 1);
  var i2 = (nN(e10) ? nz(e10) : window).visualViewport, s2 = !nJ() && r10, l2 = (n10.left + (s2 && i2 ? i2.offsetLeft : 0)) / a2, c2 = (n10.top + (s2 && i2 ? i2.offsetTop : 0)) / o2, u2 = n10.width / a2, d2 = n10.height / o2;
  return { width: u2, height: d2, top: c2, right: l2 + u2, bottom: c2 + d2, left: l2, x: l2, y: c2 };
}
function nQ(e10) {
  return nz(e10).getComputedStyle(e10);
}
function n0(e10) {
  return ((nN(e10) ? e10.ownerDocument : e10.document) || window.document).documentElement;
}
function n1(e10) {
  return "html" === nH(e10) ? e10 : (
    // $FlowFixMe[prop-missing]
    e10.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e10.parentNode || (nq(e10) ? e10.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    n0(e10)
  );
}
function n2(e10) {
  return nW(e10) && // https://github.com/popperjs/popper-core/issues/837
  "fixed" !== nQ(e10).position ? e10.offsetParent : null;
}
function n4(e10) {
  for (var t10 = /* @__PURE__ */ nz(e10), r10 = /* @__PURE__ */ n2(e10); r10 && ["table", "td", "th"].indexOf(/* @__PURE__ */ nH(r10)) >= 0 && "static" === nQ(r10).position; )
    r10 = /* @__PURE__ */ n2(r10);
  return r10 && ("html" === nH(r10) || "body" === nH(r10) && "static" === nQ(r10).position) ? t10 : r10 || // return the containing block
  function(e11) {
    var t11 = /* @__PURE__ */ /firefox/i.test(/* @__PURE__ */ nK());
    if (/* @__PURE__ */ /Trident/i.test(/* @__PURE__ */ nK()) && nW(e11) && "fixed" === nQ(e11).position)
      return null;
    var r11 = /* @__PURE__ */ n1(e11);
    for (nq(r11) && (r11 = r11.host); nW(r11) && 0 > ["html", "body"].indexOf(/* @__PURE__ */ nH(r11)); ) {
      var n10 = /* @__PURE__ */ nQ(r11);
      if ("none" !== n10.transform || "none" !== n10.perspective || "paint" === n10.contain || -1 !== ["transform", "perspective"].indexOf(n10.willChange) || t11 && "filter" === n10.willChange || t11 && n10.filter && "none" !== n10.filter)
        return r11;
      r11 = r11.parentNode;
    }
    return null;
  }(e10) || t10;
}
function n5(e10) {
  return e10.split("-")[1];
}
var n3 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function n8(e10) {
  var t10, r10, n10, a2, o2, i2, s2, l2 = e10.popper, c2 = e10.popperRect, u2 = e10.placement, d2 = e10.variation, f2 = e10.offsets, h2 = e10.position, p2 = e10.gpuAcceleration, m2 = e10.adaptive, g2 = e10.roundOffsets, v2 = e10.isFixed, b2 = f2.x, y2 = void 0 === b2 ? 0 : b2, w2 = f2.y, x2 = void 0 === w2 ? 0 : w2, k2 = "function" == typeof g2 ? g2({ x: y2, y: x2 }) : { x: y2, y: x2 };
  y2 = k2.x, x2 = k2.y;
  var M2 = /* @__PURE__ */ f2.hasOwnProperty("x"), C2 = /* @__PURE__ */ f2.hasOwnProperty("y"), P2 = n$, _2 = "top", S2 = window;
  if (m2) {
    var O2 = /* @__PURE__ */ n4(l2), T2 = "clientHeight", D2 = "clientWidth";
    O2 === nz(l2) && "static" !== nQ(O2 = /* @__PURE__ */ n0(l2)).position && "absolute" === h2 && (T2 = "scrollHeight", D2 = "scrollWidth"), ("top" === u2 || (u2 === n$ || u2 === nR) && "end" === d2) && (_2 = nD, x2 -= (v2 && O2 === S2 && S2.visualViewport ? S2.visualViewport.height : O2[T2]) - c2.height, x2 *= p2 ? 1 : -1), (u2 === n$ || ("top" === u2 || u2 === nD) && "end" === d2) && (P2 = nR, y2 -= (v2 && O2 === S2 && S2.visualViewport ? S2.visualViewport.width : O2[D2]) - c2.width, y2 *= p2 ? 1 : -1);
  }
  var R2 = /* @__PURE__ */ Object.assign({ position: h2 }, m2 && n3), $2 = true === g2 ? (t10 = { x: y2, y: x2 }, r10 = /* @__PURE__ */ nz(l2), n10 = t10.x, a2 = t10.y, { x: nX(n10 * (o2 = r10.devicePixelRatio || 1)) / o2 || 0, y: nX(a2 * o2) / o2 || 0 }) : { x: y2, y: x2 };
  return (y2 = $2.x, x2 = $2.y, p2) ? Object.assign({}, R2, ((s2 = {})[_2] = C2 ? "0" : "", s2[P2] = M2 ? "0" : "", s2.transform = 1 >= (S2.devicePixelRatio || 1) ? "translate(" + y2 + "px, " + x2 + "px)" : "translate3d(" + y2 + "px, " + x2 + "px, 0)", s2)) : Object.assign({}, R2, ((i2 = {})[_2] = C2 ? x2 + "px" : "", i2[P2] = M2 ? y2 + "px" : "", i2.transform = "", i2));
}
var n6 = { passive: true }, n9 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function n7(e10) {
  return e10.replace(/left|right|bottom|top/g, function(e11) {
    return n9[e11];
  });
}
var ae = { start: "end", end: "start" };
function at(e10) {
  return e10.replace(/start|end/g, function(e11) {
    return ae[e11];
  });
}
function ar(e10) {
  var t10 = /* @__PURE__ */ nz(e10);
  return { scrollLeft: t10.pageXOffset, scrollTop: t10.pageYOffset };
}
function an(e10) {
  return nZ(/* @__PURE__ */ n0(e10)).left + ar(e10).scrollLeft;
}
function aa(e10) {
  var t10 = /* @__PURE__ */ nQ(e10), r10 = t10.overflow, n10 = t10.overflowX, a2 = t10.overflowY;
  return /auto|scroll|overlay|hidden/.test(r10 + a2 + n10);
}
function ao(e10, t10) {
  void 0 === t10 && (t10 = []);
  var r10, n10 = /* @__PURE__ */ function e11(t11) {
    return ["html", "body", "#document"].indexOf(/* @__PURE__ */ nH(t11)) >= 0 ? t11.ownerDocument.body : nW(t11) && aa(t11) ? t11 : e11(/* @__PURE__ */ n1(t11));
  }(e10), a2 = n10 === (null == (r10 = e10.ownerDocument) ? void 0 : r10.body), o2 = /* @__PURE__ */ nz(n10), i2 = a2 ? [o2].concat(o2.visualViewport || [], aa(n10) ? n10 : []) : n10, s2 = /* @__PURE__ */ t10.concat(i2);
  return a2 ? s2 : s2.concat(/* @__PURE__ */ ao(/* @__PURE__ */ n1(i2)));
}
function ai(e10) {
  return Object.assign({}, e10, { left: e10.x, top: e10.y, right: e10.x + e10.width, bottom: e10.y + e10.height });
}
function as(e10, t10, r10) {
  var n10, a2, o2, i2, s2, l2, c2, u2, d2, f2;
  return t10 === nF ? ai(/* @__PURE__ */ function(e11, t11) {
    var r11 = /* @__PURE__ */ nz(e11), n11 = /* @__PURE__ */ n0(e11), a3 = r11.visualViewport, o3 = n11.clientWidth, i3 = n11.clientHeight, s3 = 0, l3 = 0;
    if (a3) {
      o3 = a3.width, i3 = a3.height;
      var c3 = /* @__PURE__ */ nJ();
      (c3 || !c3 && "fixed" === t11) && (s3 = a3.offsetLeft, l3 = a3.offsetTop);
    }
    return { width: o3, height: i3, x: s3 + an(e11), y: l3 };
  }(e10, r10)) : nN(t10) ? ((n10 = /* @__PURE__ */ nZ(t10, false, "fixed" === r10)).top = n10.top + t10.clientTop, n10.left = n10.left + t10.clientLeft, n10.bottom = n10.top + t10.clientHeight, n10.right = n10.left + t10.clientWidth, n10.width = t10.clientWidth, n10.height = t10.clientHeight, n10.x = n10.left, n10.y = n10.top, n10) : ai((a2 = /* @__PURE__ */ n0(e10), i2 = /* @__PURE__ */ n0(a2), s2 = /* @__PURE__ */ ar(a2), l2 = null == (o2 = a2.ownerDocument) ? void 0 : o2.body, c2 = /* @__PURE__ */ nY(i2.scrollWidth, i2.clientWidth, l2 ? l2.scrollWidth : 0, l2 ? l2.clientWidth : 0), u2 = /* @__PURE__ */ nY(i2.scrollHeight, i2.clientHeight, l2 ? l2.scrollHeight : 0, l2 ? l2.clientHeight : 0), d2 = -s2.scrollLeft + an(a2), f2 = -s2.scrollTop, "rtl" === nQ(l2 || i2).direction && (d2 += nY(i2.clientWidth, l2 ? l2.clientWidth : 0) - c2), { width: c2, height: u2, x: d2, y: f2 }));
}
function al(e10) {
  var t10, r10 = e10.reference, n10 = e10.element, a2 = e10.placement, o2 = a2 ? nU(a2) : null, i2 = a2 ? n5(a2) : null, s2 = r10.x + r10.width / 2 - n10.width / 2, l2 = r10.y + r10.height / 2 - n10.height / 2;
  switch (o2) {
    case "top":
      t10 = { x: s2, y: r10.y - n10.height };
      break;
    case nD:
      t10 = { x: s2, y: r10.y + r10.height };
      break;
    case nR:
      t10 = { x: r10.x + r10.width, y: l2 };
      break;
    case n$:
      t10 = { x: r10.x - n10.width, y: l2 };
      break;
    default:
      t10 = { x: r10.x, y: r10.y };
  }
  var c2 = o2 ? ["top", "bottom"].indexOf(o2) >= 0 ? "x" : "y" : null;
  if (null != c2) {
    var u2 = "y" === c2 ? "height" : "width";
    switch (i2) {
      case nL:
        t10[c2] = t10[c2] - (r10[u2] / 2 - n10[u2] / 2);
        break;
      case "end":
        t10[c2] = t10[c2] + (r10[u2] / 2 - n10[u2] / 2);
    }
  }
  return t10;
}
function ac(e10, t10) {
  void 0 === t10 && (t10 = {});
  var r10, n10, a2, o2, i2, s2, l2, c2 = t10, u2 = c2.placement, d2 = void 0 === u2 ? e10.placement : u2, f2 = c2.strategy, h2 = void 0 === f2 ? e10.strategy : f2, p2 = c2.boundary, m2 = c2.rootBoundary, g2 = c2.elementContext, v2 = void 0 === g2 ? nB : g2, b2 = c2.altBoundary, y2 = c2.padding, w2 = void 0 === y2 ? 0 : y2, x2 = Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, "number" != typeof w2 ? w2 : nI.reduce(function(e11, t11) {
    return e11[t11] = w2, e11;
  }, {})), k2 = e10.rects.popper, M2 = e10.elements[void 0 !== b2 && b2 ? v2 === nB ? "reference" : nB : v2], C2 = (r10 = nN(M2) ? M2 : M2.contextElement || n0(e10.elements.popper), s2 = (i2 = /* @__PURE__ */ [].concat("clippingParents" === (n10 = void 0 === p2 ? "clippingParents" : p2) ? (a2 = /* @__PURE__ */ ao(/* @__PURE__ */ n1(r10)), nN(o2 = ["absolute", "fixed"].indexOf(nQ(r10).position) >= 0 && nW(r10) ? n4(r10) : r10) ? a2.filter(function(e11) {
    return nN(e11) && function(e12, t11) {
      var r11 = t11.getRootNode && t11.getRootNode();
      if (e12.contains(t11))
        return true;
      if (r11 && nq(r11)) {
        var n11 = t11;
        do {
          if (n11 && e12.isSameNode(n11))
            return true;
          n11 = n11.parentNode || n11.host;
        } while (n11);
      }
      return false;
    }(e11, o2) && "body" !== nH(e11);
  }) : []) : [].concat(n10), [void 0 === m2 ? nF : m2]))[0], (l2 = /* @__PURE__ */ i2.reduce(function(e11, t11) {
    var n11 = /* @__PURE__ */ as(r10, t11, h2);
    return e11.top = /* @__PURE__ */ nY(n11.top, e11.top), e11.right = /* @__PURE__ */ nG(n11.right, e11.right), e11.bottom = /* @__PURE__ */ nG(n11.bottom, e11.bottom), e11.left = /* @__PURE__ */ nY(n11.left, e11.left), e11;
  }, /* @__PURE__ */ as(r10, s2, h2))).width = l2.right - l2.left, l2.height = l2.bottom - l2.top, l2.x = l2.left, l2.y = l2.top, l2), P2 = /* @__PURE__ */ nZ(e10.elements.reference), _2 = /* @__PURE__ */ al({ reference: P2, element: k2, strategy: "absolute", placement: d2 }), S2 = /* @__PURE__ */ ai(/* @__PURE__ */ Object.assign({}, k2, _2)), O2 = v2 === nB ? S2 : P2, T2 = { top: C2.top - O2.top + x2.top, bottom: O2.bottom - C2.bottom + x2.bottom, left: C2.left - O2.left + x2.left, right: O2.right - C2.right + x2.right }, D2 = e10.modifiersData.offset;
  if (v2 === nB && D2) {
    var R2 = D2[d2];
    Object.keys(T2).forEach(function(e11) {
      var t11 = [nR, nD].indexOf(e11) >= 0 ? 1 : -1, r11 = ["top", nD].indexOf(e11) >= 0 ? "y" : "x";
      T2[e11] += R2[r11] * t11;
    });
  }
  return T2;
}
let au = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: function(e10) {
    var t10 = e10.state, r10 = e10.options, n10 = e10.name;
    if (!t10.modifiersData[n10]._skip) {
      for (var a2 = r10.mainAxis, o2 = void 0 === a2 || a2, i2 = r10.altAxis, s2 = void 0 === i2 || i2, l2 = r10.fallbackPlacements, c2 = r10.padding, u2 = r10.boundary, d2 = r10.rootBoundary, f2 = r10.altBoundary, h2 = r10.flipVariations, p2 = void 0 === h2 || h2, m2 = r10.allowedAutoPlacements, g2 = t10.options.placement, v2 = /* @__PURE__ */ nU(g2) === g2, b2 = l2 || (v2 || !p2 ? [/* @__PURE__ */ n7(g2)] : function(e11) {
        if (nU(e11) === nA)
          return [];
        var t11 = /* @__PURE__ */ n7(e11);
        return [/* @__PURE__ */ at(e11), t11, /* @__PURE__ */ at(t11)];
      }(g2)), y2 = /* @__PURE__ */ [g2].concat(b2).reduce(function(e11, r11) {
        var n11, a3, o3, i3, s3, l3, f3, h3, g3, v3, b3, y3;
        return e11.concat(nU(r11) === nA ? (a3 = (n11 = { placement: r11, boundary: u2, rootBoundary: d2, padding: c2, flipVariations: p2, allowedAutoPlacements: m2 }).placement, o3 = n11.boundary, i3 = n11.rootBoundary, s3 = n11.padding, l3 = n11.flipVariations, h3 = void 0 === (f3 = n11.allowedAutoPlacements) ? nj : f3, 0 === (b3 = /* @__PURE__ */ (v3 = (g3 = /* @__PURE__ */ n5(a3)) ? l3 ? nE : nE.filter(function(e12) {
          return n5(e12) === g3;
        }) : nI).filter(function(e12) {
          return h3.indexOf(e12) >= 0;
        })).length && (b3 = v3), Object.keys(y3 = /* @__PURE__ */ b3.reduce(function(e12, r12) {
          return e12[r12] = ac(t10, { placement: r12, boundary: o3, rootBoundary: i3, padding: s3 })[nU(r12)], e12;
        }, {})).sort(function(e12, t11) {
          return y3[e12] - y3[t11];
        })) : r11);
      }, []), w2 = t10.rects.reference, x2 = t10.rects.popper, k2 = /* @__PURE__ */ new Map(), M2 = true, C2 = y2[0], P2 = 0; P2 < y2.length; P2++) {
        var _2 = y2[P2], S2 = /* @__PURE__ */ nU(_2), O2 = n5(_2) === nL, T2 = ["top", nD].indexOf(S2) >= 0, D2 = T2 ? "width" : "height", R2 = /* @__PURE__ */ ac(t10, { placement: _2, boundary: u2, rootBoundary: d2, altBoundary: f2, padding: c2 }), $2 = T2 ? O2 ? nR : n$ : O2 ? nD : "top";
        w2[D2] > x2[D2] && ($2 = /* @__PURE__ */ n7($2));
        var A2 = /* @__PURE__ */ n7($2), I2 = [];
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
          var t11 = /* @__PURE__ */ y2.find(function(t12) {
            var r11 = /* @__PURE__ */ k2.get(t12);
            if (r11)
              return r11.slice(0, e11).every(function(e12) {
                return e12;
              });
          });
          if (t11)
            return C2 = t11, "break";
        }, B2 = L2; B2 > 0 && "break" !== /* @__PURE__ */ F2(B2); B2--)
          ;
      t10.placement !== C2 && (t10.modifiersData[n10]._skip = true, t10.placement = C2, t10.reset = true);
    }
  },
  requiresIfExists: ["offset"],
  data: { _skip: false }
};
var ad = { placement: "bottom", modifiers: [], strategy: "absolute" };
function af() {
  for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++)
    t10[r10] = arguments[r10];
  return !t10.some(function(e11) {
    return !(e11 && "function" == typeof e11.getBoundingClientRect);
  });
}
var ah = (W = void 0 === (N = (z = { defaultModifiers: [{
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function() {
  },
  effect: function(e10) {
    var t10 = e10.state, r10 = e10.instance, n10 = e10.options, a2 = n10.scroll, o2 = void 0 === a2 || a2, i2 = n10.resize, s2 = void 0 === i2 || i2, l2 = /* @__PURE__ */ nz(t10.elements.popper), c2 = /* @__PURE__ */ [].concat(t10.scrollParents.reference, t10.scrollParents.popper);
    return o2 && c2.forEach(function(e11) {
      e11.addEventListener("scroll", r10.update, n6);
    }), s2 && l2.addEventListener("resize", r10.update, n6), function() {
      o2 && c2.forEach(function(e11) {
        e11.removeEventListener("scroll", r10.update, n6);
      }), s2 && l2.removeEventListener("resize", r10.update, n6);
    };
  },
  data: {}
}, {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: function(e10) {
    var t10 = e10.state, r10 = e10.name;
    t10.modifiersData[r10] = /* @__PURE__ */ al({ reference: t10.rects.reference, element: t10.rects.popper, strategy: "absolute", placement: t10.placement });
  },
  data: {}
}, {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: function(e10) {
    var t10 = e10.state, r10 = e10.options, n10 = r10.gpuAcceleration, a2 = r10.adaptive, o2 = r10.roundOffsets, i2 = void 0 === o2 || o2, s2 = { placement: /* @__PURE__ */ nU(t10.placement), variation: /* @__PURE__ */ n5(t10.placement), popper: t10.elements.popper, popperRect: t10.rects.popper, gpuAcceleration: void 0 === n10 || n10, isFixed: "fixed" === t10.options.strategy };
    null != t10.modifiersData.popperOffsets && (t10.styles.popper = /* @__PURE__ */ Object.assign({}, t10.styles.popper, /* @__PURE__ */ n8(/* @__PURE__ */ Object.assign({}, s2, { offsets: t10.modifiersData.popperOffsets, position: t10.options.strategy, adaptive: void 0 === a2 || a2, roundOffsets: i2 })))), null != t10.modifiersData.arrow && (t10.styles.arrow = /* @__PURE__ */ Object.assign({}, t10.styles.arrow, /* @__PURE__ */ n8(/* @__PURE__ */ Object.assign({}, s2, { offsets: t10.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: i2 })))), t10.attributes.popper = /* @__PURE__ */ Object.assign({}, t10.attributes.popper, { "data-popper-placement": t10.placement });
  },
  data: {}
}, {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: (
    // and applies them to the HTMLElements such as popper and arrow
    function(e10) {
      var t10 = e10.state;
      Object.keys(t10.elements).forEach(function(e11) {
        var r10 = t10.styles[e11] || {}, n10 = t10.attributes[e11] || {}, a2 = t10.elements[e11];
        nW(a2) && nH(a2) && // effective way to apply styles to an HTMLElement
        // $FlowFixMe[cannot-write]
        (Object.assign(a2.style, r10), Object.keys(n10).forEach(function(e12) {
          var t11 = n10[e12];
          false === t11 ? a2.removeAttribute(e12) : a2.setAttribute(e12, true === t11 ? "" : t11);
        }));
      });
    }
  ),
  effect: function(e10) {
    var t10 = e10.state, r10 = { popper: { position: t10.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
    return Object.assign(t10.elements.popper.style, r10.popper), t10.styles = r10, t10.elements.arrow && Object.assign(t10.elements.arrow.style, r10.arrow), function() {
      Object.keys(t10.elements).forEach(function(e11) {
        var n10 = t10.elements[e11], a2 = t10.attributes[e11] || {}, o2 = /* @__PURE__ */ Object.keys(t10.styles.hasOwnProperty(e11) ? t10.styles[e11] : r10[e11]).reduce(function(e12, t11) {
          return e12[t11] = "", e12;
        }, {});
        nW(n10) && nH(n10) && (Object.assign(n10.style, o2), Object.keys(a2).forEach(function(e12) {
          n10.removeAttribute(e12);
        }));
      });
    };
  },
  requires: ["computeStyles"]
}] }).defaultModifiers) ? [] : N, U = void 0 === (q = z.defaultOptions) ? ad : q, function(e10, t10, r10) {
  void 0 === r10 && (r10 = U);
  var n10, a2 = { placement: "bottom", orderedModifiers: [], options: /* @__PURE__ */ Object.assign({}, ad, U), modifiersData: {}, elements: { reference: e10, popper: t10 }, attributes: {}, styles: {} }, o2 = [], i2 = false, s2 = {
    state: a2,
    setOptions: function(r11) {
      var n11, i3, c2, u2, d2, f2 = "function" == typeof r11 ? r11(a2.options) : r11;
      l2(), a2.options = /* @__PURE__ */ Object.assign({}, U, a2.options, f2), a2.scrollParents = { reference: nN(e10) ? ao(e10) : e10.contextElement ? ao(e10.contextElement) : [], popper: /* @__PURE__ */ ao(t10) };
      var h2 = (i3 = Object.keys(n11 = /* @__PURE__ */ [].concat(W, a2.options.modifiers).reduce(function(e11, t11) {
        var r12 = e11[t11.name];
        return e11[t11.name] = r12 ? Object.assign({}, r12, t11, { options: /* @__PURE__ */ Object.assign({}, r12.options, t11.options), data: /* @__PURE__ */ Object.assign({}, r12.data, t11.data) }) : t11, e11;
      }, {})).map(function(e11) {
        return n11[e11];
      }), c2 = /* @__PURE__ */ new Map(), u2 = /* @__PURE__ */ new Set(), d2 = [], i3.forEach(function(e11) {
        c2.set(e11.name, e11);
      }), i3.forEach(function(e11) {
        u2.has(e11.name) || // check for visited object
        function e12(t11) {
          u2.add(t11.name), /* @__PURE__ */ [].concat(t11.requires || [], t11.requiresIfExists || []).forEach(function(t12) {
            if (!u2.has(t12)) {
              var r12 = /* @__PURE__ */ c2.get(t12);
              r12 && e12(r12);
            }
          }), d2.push(t11);
        }(e11);
      }), nV.reduce(function(e11, t11) {
        return e11.concat(/* @__PURE__ */ d2.filter(function(e12) {
          return e12.phase === t11;
        }));
      }, []));
      return a2.orderedModifiers = /* @__PURE__ */ h2.filter(function(e11) {
        return e11.enabled;
      }), a2.orderedModifiers.forEach(function(e11) {
        var t11 = e11.name, r12 = e11.options, n12 = e11.effect;
        if ("function" == typeof n12) {
          var i4 = /* @__PURE__ */ n12({ state: a2, name: t11, instance: s2, options: void 0 === r12 ? {} : r12 });
          o2.push(i4 || function() {
          });
        }
      }), s2.update();
    },
    // Sync update – it will always be executed, even if not necessary. This
    // is useful for low frequency updates where sync behavior simplifies the
    // logic.
    // For high frequency updates (e.g. `resize` and `scroll` events), always
    // prefer the async Popper#update method
    forceUpdate: function() {
      if (!i2) {
        var e11, t11, r11, n11, o3, l3, c2, u2, d2, f2, h2, p2, m2, g2, v2, b2 = a2.elements, y2 = b2.reference, w2 = b2.popper;
        if (af(y2, w2)) {
          a2.rects = { reference: (t11 = /* @__PURE__ */ n4(w2), r11 = "fixed" === a2.options.strategy, n11 = /* @__PURE__ */ nW(t11), u2 = nW(t11) && (l3 = nX((o3 = /* @__PURE__ */ t11.getBoundingClientRect()).width) / t11.offsetWidth || 1, c2 = nX(o3.height) / t11.offsetHeight || 1, 1 !== l3 || 1 !== c2), d2 = /* @__PURE__ */ n0(t11), f2 = /* @__PURE__ */ nZ(y2, u2, r11), h2 = { scrollLeft: 0, scrollTop: 0 }, p2 = { x: 0, y: 0 }, (n11 || !n11 && !r11) && (("body" !== nH(t11) || // https://github.com/popperjs/popper-core/issues/1078
          aa(d2)) && (h2 = (e11 = t11) !== nz(e11) && nW(e11) ? { scrollLeft: e11.scrollLeft, scrollTop: e11.scrollTop } : ar(e11)), nW(t11) ? (p2 = /* @__PURE__ */ nZ(t11, true), p2.x += t11.clientLeft, p2.y += t11.clientTop) : d2 && (p2.x = /* @__PURE__ */ an(d2))), { x: f2.left + h2.scrollLeft - p2.x, y: f2.top + h2.scrollTop - p2.y, width: f2.width, height: f2.height }), popper: (m2 = /* @__PURE__ */ nZ(w2), g2 = w2.offsetWidth, v2 = w2.offsetHeight, 1 >= Math.abs(m2.width - g2) && (g2 = m2.width), 1 >= Math.abs(m2.height - v2) && (v2 = m2.height), { x: w2.offsetLeft, y: w2.offsetTop, width: g2, height: v2 }) }, // most common use case for this is the `flip` modifier changing the
          // placement, which then needs to re-run all the modifiers, because the
          // logic was previously ran for the previous placement and is therefore
          // stale/incorrect
          a2.reset = false, a2.placement = a2.options.placement, // is filled with the initial data specified by the modifier. This means
          // it doesn't persist and is fresh on each update.
          // To ensure persistent data, use `${name}#persistent`
          a2.orderedModifiers.forEach(function(e12) {
            return a2.modifiersData[e12.name] = /* @__PURE__ */ Object.assign({}, e12.data);
          });
          for (var x2 = 0; x2 < a2.orderedModifiers.length; x2++) {
            if (true === a2.reset) {
              a2.reset = false, x2 = -1;
              continue;
            }
            var k2 = a2.orderedModifiers[x2], M2 = k2.fn, C2 = k2.options, P2 = void 0 === C2 ? {} : C2, _2 = k2.name;
            "function" == typeof M2 && (a2 = M2({ state: a2, options: P2, name: _2, instance: s2 }) || a2);
          }
        }
      }
    },
    // Async and optimistically optimized update – it will not be executed if
    // not necessary (debounced to run at most once-per-tick)
    update: function() {
      return n10 || (n10 = new Promise(function(e11) {
        Promise.resolve().then(function() {
          n10 = void 0, e11(new Promise(function(e12) {
            s2.forceUpdate(), e12(a2);
          }));
        });
      })), n10;
    },
    destroy: function() {
      l2(), i2 = true;
    }
  };
  if (!af(e10, t10))
    return s2;
  function l2() {
    o2.forEach(function(e11) {
      return e11();
    }), o2 = [];
  }
  return s2.setOptions(r10).then(function(e11) {
    !i2 && r10.onFirstUpdate && r10.onFirstUpdate(e11);
  }), s2;
});
function ap(e10, t10) {
  return { fn: e10, enabled: true, ...t10 };
}
let am = /* @__PURE__ */ t({ isOpen: nT.propTypes.isOpen, onClickOutside: nT.propTypes.onClickOutside, placement: /* @__PURE__ */ F().optional(), modifiers: /* @__PURE__ */ F().optional(), $transition: nT.propTypes.$transition, $content: /* @__PURE__ */ F(), $default: /* @__PURE__ */ F() }, (e10, t10) => {
  let { slots: n10, emit: a2, attrs: o2 } = t10, s2 = /* @__PURE__ */ i(null), c2 = /* @__PURE__ */ i(null);
  return g(() => c2.value, (t11) => {
    if (t11) {
      var r10, n11;
      ah(s2.value, t11, { placement: null !== (r10 = e10.placement) && void 0 !== r10 ? r10 : "bottom", modifiers: [...null !== (n11 = e10.modifiers) && void 0 !== n11 ? n11 : [], au] });
    }
  }), () => {
    var t11, i2;
    let u2 = null === (t11 = n10.default) || void 0 === t11 ? void 0 : t11.call(n10)[0];
    return u2 ? /* @__PURE__ */ v(b, { children: [/* @__PURE__ */ l(u2, { ...o2, onVnodeMounted: (e11) => {
      s2.value = /* @__PURE__ */ function e12(t12) {
        if (t12) {
          if (t12 instanceof HTMLElement)
            return t12;
          if (t12 instanceof Text)
            return e12(t12.nextElementSibling);
        }
        return null;
      }(e11.el);
    } }), /* @__PURE__ */ r(nT, { triggerRef: s2, contentRef: c2, isOpen: e10.isOpen, onClickOutside: (e11) => a2("click-outside", e11), style: { zIndex: 100 }, $transition: n10.transition, children: null === (i2 = n10.content) || void 0 === i2 ? void 0 : i2.call(n10) })] }) : null;
  };
}, { name: "Popper", inheritAttrs: false }), ag = /* @__PURE__ */ Object.assign(am, { displayName: "Popper" });
export {
  nb as B,
  rm as C,
  nk as G,
  rx as P,
  tY as T,
  tC as a,
  tW as b,
  rg as c,
  rO as d,
  rp as e,
  td as f,
  np as g,
  to as h,
  ah as i,
  au as j,
  r$ as k,
  nm as l,
  nC as m,
  rD as n,
  ap as o,
  ag as p,
  rC as q,
  t7 as r,
  nw as s,
  rM as t,
  t_ as v
};
