var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
let e;
import { c as t, j as r, T as n, a, o, r as i, b as s, d as l, e as c, u, f as d, g as f, t as h, h as p, s as m, i as g, w as v, k as y, F as b } from "./lib-nodepkg-vuekit.BljiiEAD.chunk.js";
import { k as w, g as x, b as k, l as M, s as C, d as P, e as _, h as S, f as O, j as T, m as $, n as D, q as R, r as I, i as A, t as L, u as F, v as B, c as j, w as E, x as V } from "./lib-nodepkg-typedef.BqHL_H1W.chunk.js";
function H(e10, t10) {
  var r10 = {};
  for (var n10 in e10)
    Object.prototype.hasOwnProperty.call(e10, n10) && 0 > t10.indexOf(n10) && (r10[n10] = e10[n10]);
  if (null != e10 && "function" == typeof Object.getOwnPropertySymbols)
    for (var a2 = 0, n10 = Object.getOwnPropertySymbols(e10); a2 < n10.length; a2++)
      0 > t10.indexOf(n10[a2]) && Object.prototype.propertyIsEnumerable.call(e10, n10[a2]) && (r10[n10[a2]] = e10[n10[a2]]);
  return r10;
}
var z, W, N, q, U, Y, G, X, K, J, Z, Q, ee = function() {
}, et = function() {
};
ee = function(e10, t10) {
  e10 || "undefined" == typeof console || console.warn(t10);
}, et = function(e10, t10) {
  if (!e10)
    throw Error(t10);
};
let er = (e10, t10, r10) => Math.min(Math.max(r10, e10), t10);
function en(e10, t10) {
  return e10 * Math.sqrt(1 - t10 * t10);
}
let ea = ["duration", "bounce"], eo = ["stiffness", "damping", "mass"];
function ei(e10, t10) {
  return t10.some((t11) => void 0 !== e10[t11]);
}
function es(e10) {
  var { from: t10 = 0, to: r10 = 1, restSpeed: n10 = 2, restDelta: a2 } = e10, o2 = H(e10, ["from", "to", "restSpeed", "restDelta"]);
  let i2 = { done: false, value: t10 }, { stiffness: s2, damping: l2, mass: c2, velocity: u2, duration: d2, isResolvedFromDuration: f2 } = function(e11) {
    let t11 = Object.assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: false }, e11);
    if (!ei(e11, eo) && ei(e11, ea)) {
      let r11 = function(e12) {
        let t12, r12, { duration: n11 = 800, bounce: a3 = 0.25, velocity: o3 = 0, mass: i3 = 1 } = e12;
        ee(n11 <= 1e4, "Spring duration must be 10 seconds or less");
        let s3 = 1 - a3;
        s3 = er(0.05, 1, s3), n11 = er(0.01, 10, n11 / 1e3), s3 < 1 ? (t12 = (e13) => {
          let t13 = e13 * s3, r13 = t13 * n11;
          return 1e-3 - (t13 - o3) / en(e13, s3) * Math.exp(-r13);
        }, r12 = (e13) => {
          let r13 = e13 * s3 * n11, a4 = Math.pow(s3, 2) * Math.pow(e13, 2) * n11, i4 = en(Math.pow(e13, 2), s3);
          return (r13 * o3 + o3 - a4) * Math.exp(-r13) * (-t12(e13) + 1e-3 > 0 ? -1 : 1) / i4;
        }) : (t12 = (e13) => -1e-3 + Math.exp(-e13 * n11) * ((e13 - o3) * n11 + 1), r12 = (e13) => n11 * n11 * (o3 - e13) * Math.exp(-e13 * n11));
        let l3 = function(e13, t13, r13) {
          let n12 = r13;
          for (let r14 = 1; r14 < 12; r14++)
            n12 -= e13(n12) / t13(n12);
          return n12;
        }(t12, r12, 5 / n11);
        if (n11 *= 1e3, isNaN(l3))
          return { stiffness: 100, damping: 10, duration: n11 };
        {
          let e13 = Math.pow(l3, 2) * i3;
          return { stiffness: e13, damping: 2 * s3 * Math.sqrt(i3 * e13), duration: n11 };
        }
      }(e11);
      (t11 = Object.assign(Object.assign(Object.assign({}, t11), r11), { velocity: 0, mass: 1 })).isResolvedFromDuration = true;
    }
    return t11;
  }(o2), h2 = el, p2 = el;
  function m2() {
    let e11 = u2 ? -(u2 / 1e3) : 0, n11 = r10 - t10, o3 = l2 / (2 * Math.sqrt(s2 * c2)), i3 = Math.sqrt(s2 / c2) / 1e3;
    if (void 0 === a2 && (a2 = Math.min(Math.abs(r10 - t10) / 100, 0.4)), o3 < 1) {
      let t11 = en(i3, o3);
      h2 = (a3) => r10 - Math.exp(-o3 * i3 * a3) * ((e11 + o3 * i3 * n11) / t11 * Math.sin(t11 * a3) + n11 * Math.cos(t11 * a3)), p2 = (r11) => {
        let a3 = Math.exp(-o3 * i3 * r11);
        return o3 * i3 * a3 * (Math.sin(t11 * r11) * (e11 + o3 * i3 * n11) / t11 + n11 * Math.cos(t11 * r11)) - a3 * (Math.cos(t11 * r11) * (e11 + o3 * i3 * n11) - t11 * n11 * Math.sin(t11 * r11));
      };
    } else if (1 === o3)
      h2 = (t11) => r10 - Math.exp(-i3 * t11) * (n11 + (e11 + i3 * n11) * t11);
    else {
      let t11 = i3 * Math.sqrt(o3 * o3 - 1);
      h2 = (a3) => {
        let s3 = Math.exp(-o3 * i3 * a3), l3 = Math.min(t11 * a3, 300);
        return r10 - s3 * ((e11 + o3 * i3 * n11) * Math.sinh(l3) + t11 * n11 * Math.cosh(l3)) / t11;
      };
    }
  }
  return m2(), { next: (e11) => {
    let t11 = h2(e11);
    if (f2)
      i2.done = e11 >= d2;
    else {
      let o3 = 1e3 * p2(e11), s3 = Math.abs(r10 - t11) <= a2;
      i2.done = Math.abs(o3) <= n10 && s3;
    }
    return i2.value = i2.done ? r10 : t11, i2;
  }, flipTarget: () => {
    u2 = -u2, [t10, r10] = [r10, t10], m2();
  } };
}
es.needsInterpolation = (e10, t10) => "string" == typeof e10 || "string" == typeof t10;
let el = (e10) => 0, ec = (e10, t10, r10) => {
  let n10 = t10 - e10;
  return 0 === n10 ? 1 : (r10 - e10) / n10;
}, eu = (e10, t10, r10) => -r10 * e10 + r10 * t10 + e10, ed = (e10, t10) => (r10) => Math.max(Math.min(r10, t10), e10), ef = (e10) => e10 % 1 ? Number(e10.toFixed(5)) : e10, eh = /(-)?([\d]*\.?[\d])+/g, ep = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, em = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function eg(e10) {
  return "string" == typeof e10;
}
let ev = { test: (e10) => "number" == typeof e10, parse: parseFloat, transform: (e10) => e10 }, ey = Object.assign(Object.assign({}, ev), { transform: ed(0, 1) });
Object.assign(Object.assign({}, ev), { default: 1 });
let eb = { test: (e10) => eg(e10) && e10.endsWith("%") && 1 === e10.split(" ").length, parse: parseFloat, transform: (e10) => `${e10}%` };
Object.assign(Object.assign({}, eb), { parse: (e10) => eb.parse(e10) / 100, transform: (e10) => eb.transform(100 * e10) });
let ew = (e10, t10) => (r10) => !!(eg(r10) && em.test(r10) && r10.startsWith(e10) || t10 && Object.prototype.hasOwnProperty.call(r10, t10)), ex = (e10, t10, r10) => (n10) => {
  if (!eg(n10))
    return n10;
  let [a2, o2, i2, s2] = n10.match(eh);
  return { [e10]: parseFloat(a2), [t10]: parseFloat(o2), [r10]: parseFloat(i2), alpha: void 0 !== s2 ? parseFloat(s2) : 1 };
}, ek = { test: ew("hsl", "hue"), parse: ex("hue", "saturation", "lightness"), transform: (e10) => {
  let { hue: t10, saturation: r10, lightness: n10, alpha: a2 = 1 } = e10;
  return "hsla(" + Math.round(t10) + ", " + eb.transform(ef(r10)) + ", " + eb.transform(ef(n10)) + ", " + ef(ey.transform(a2)) + ")";
} }, eM = ed(0, 255), eC = Object.assign(Object.assign({}, ev), { transform: (e10) => Math.round(eM(e10)) }), eP = { test: ew("rgb", "red"), parse: ex("red", "green", "blue"), transform: (e10) => {
  let { red: t10, green: r10, blue: n10, alpha: a2 = 1 } = e10;
  return "rgba(" + eC.transform(t10) + ", " + eC.transform(r10) + ", " + eC.transform(n10) + ", " + ef(ey.transform(a2)) + ")";
} }, e_ = { test: ew("#"), parse: function(e10) {
  let t10 = "", r10 = "", n10 = "", a2 = "";
  return e10.length > 5 ? (t10 = e10.substr(1, 2), r10 = e10.substr(3, 2), n10 = e10.substr(5, 2), a2 = e10.substr(7, 2)) : (t10 = e10.substr(1, 1), r10 = e10.substr(2, 1), n10 = e10.substr(3, 1), a2 = e10.substr(4, 1), t10 += t10, r10 += r10, n10 += n10, a2 += a2), { red: parseInt(t10, 16), green: parseInt(r10, 16), blue: parseInt(n10, 16), alpha: a2 ? parseInt(a2, 16) / 255 : 1 };
}, transform: eP.transform }, eS = { test: (e10) => eP.test(e10) || e_.test(e10) || ek.test(e10), parse: (e10) => eP.test(e10) ? eP.parse(e10) : ek.test(e10) ? ek.parse(e10) : e_.parse(e10), transform: (e10) => eg(e10) ? e10 : e10.hasOwnProperty("red") ? eP.transform(e10) : ek.transform(e10) }, eO = "${c}", eT = "${n}";
function e$(e10) {
  "number" == typeof e10 && (e10 = `${e10}`);
  let t10 = [], r10 = 0, n10 = e10.match(ep);
  n10 && (r10 = n10.length, e10 = e10.replace(ep, eO), t10.push(...n10.map(eS.parse)));
  let a2 = e10.match(eh);
  return a2 && (e10 = e10.replace(eh, eT), t10.push(...a2.map(ev.parse))), { values: t10, numColors: r10, tokenised: e10 };
}
let eD = function(e10) {
  let { values: t10, numColors: r10, tokenised: n10 } = e$(e10), a2 = t10.length;
  return (e11) => {
    let t11 = n10;
    for (let n11 = 0; n11 < a2; n11++)
      t11 = t11.replace(n11 < r10 ? eO : eT, n11 < r10 ? eS.transform(e11[n11]) : ef(e11[n11]));
    return t11;
  };
};
function eR(e10, t10, r10) {
  return (r10 < 0 && (r10 += 1), r10 > 1 && (r10 -= 1), r10 < 1 / 6) ? e10 + (t10 - e10) * 6 * r10 : r10 < 0.5 ? t10 : r10 < 2 / 3 ? e10 + (t10 - e10) * (2 / 3 - r10) * 6 : e10;
}
function eI(e10) {
  let { hue: t10, saturation: r10, lightness: n10, alpha: a2 } = e10;
  t10 /= 360, n10 /= 100;
  let o2 = 0, i2 = 0, s2 = 0;
  if (r10 /= 100) {
    let e11 = n10 < 0.5 ? n10 * (1 + r10) : n10 + r10 - n10 * r10, a3 = 2 * n10 - e11;
    o2 = eR(a3, e11, t10 + 1 / 3), i2 = eR(a3, e11, t10), s2 = eR(a3, e11, t10 - 1 / 3);
  } else
    o2 = i2 = s2 = n10;
  return { red: Math.round(255 * o2), green: Math.round(255 * i2), blue: Math.round(255 * s2), alpha: a2 };
}
let eA = (e10, t10, r10) => {
  let n10 = e10 * e10;
  return Math.sqrt(Math.max(0, r10 * (t10 * t10 - n10) + n10));
}, eL = [e_, eP, ek], eF = (e10) => eL.find((t10) => t10.test(e10)), eB = (e10) => `'${e10}' is not an animatable color. Use the equivalent color code instead.`, ej = (e10, t10) => {
  let r10 = eF(e10), n10 = eF(t10);
  et(!!r10, eB(e10)), et(!!n10, eB(t10));
  let a2 = r10.parse(e10), o2 = n10.parse(t10);
  r10 === ek && (a2 = eI(a2), r10 = eP), n10 === ek && (o2 = eI(o2), n10 = eP);
  let i2 = Object.assign({}, a2);
  return (e11) => {
    for (let t11 in i2)
      "alpha" !== t11 && (i2[t11] = eA(a2[t11], o2[t11], e11));
    return i2.alpha = eu(a2.alpha, o2.alpha, e11), r10.transform(i2);
  };
}, eE = (e10) => "number" == typeof e10, eV = (e10, t10) => (r10) => t10(e10(r10)), eH = function() {
  for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++)
    t10[r10] = arguments[r10];
  return t10.reduce(eV);
};
function ez(e10, t10) {
  return eE(e10) ? (r10) => eu(e10, t10, r10) : eS.test(e10) ? ej(e10, t10) : eU(e10, t10);
}
let eW = (e10, t10) => {
  let r10 = [...e10], n10 = r10.length, a2 = e10.map((e11, r11) => ez(e11, t10[r11]));
  return (e11) => {
    for (let t11 = 0; t11 < n10; t11++)
      r10[t11] = a2[t11](e11);
    return r10;
  };
}, eN = (e10, t10) => {
  let r10 = Object.assign(Object.assign({}, e10), t10), n10 = {};
  for (let a2 in r10)
    void 0 !== e10[a2] && void 0 !== t10[a2] && (n10[a2] = ez(e10[a2], t10[a2]));
  return (e11) => {
    for (let t11 in n10)
      r10[t11] = n10[t11](e11);
    return r10;
  };
};
function eq(e10) {
  let t10 = e$(e10).values, r10 = t10.length, n10 = 0, a2 = 0, o2 = 0;
  for (let e11 = 0; e11 < r10; e11++)
    n10 || "number" == typeof t10[e11] ? n10++ : void 0 !== t10[e11].hue ? o2++ : a2++;
  return { parsed: t10, numNumbers: n10, numRGB: a2, numHSL: o2 };
}
let eU = (e10, t10) => {
  let r10 = eD(t10), n10 = eq(e10), a2 = eq(t10);
  return n10.numHSL === a2.numHSL && n10.numRGB === a2.numRGB && n10.numNumbers >= a2.numNumbers ? eH(eW(n10.parsed, a2.parsed), r10) : (ee(true, `Complex values '${e10}' and '${t10}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), (r11) => `${r11 > 0 ? t10 : e10}`);
}, eY = (e10, t10) => (r10) => eu(e10, t10, r10);
function eG(e10, t10) {
  let { clamp: r10 = true, ease: n10, mixer: a2 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o2 = e10.length;
  et(o2 === t10.length, "Both input and output ranges must be the same length"), et(!n10 || !Array.isArray(n10) || n10.length === o2 - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), e10[0] > e10[o2 - 1] && (e10 = [].concat(e10), t10 = [].concat(t10), e10.reverse(), t10.reverse());
  let i2 = function(e11, t11, r11) {
    var n11;
    let a3 = [], o3 = r11 || ("number" == typeof (n11 = e11[0]) ? eY : "string" == typeof n11 ? eS.test(n11) ? ej : eU : Array.isArray(n11) ? eW : "object" == typeof n11 ? eN : void 0), i3 = e11.length - 1;
    for (let r12 = 0; r12 < i3; r12++) {
      let n12 = o3(e11[r12], e11[r12 + 1]);
      t11 && (n12 = eH(Array.isArray(t11) ? t11[r12] : t11, n12)), a3.push(n12);
    }
    return a3;
  }(t10, n10, a2), s2 = 2 === o2 ? function(e11, t11) {
    let [r11, n11] = e11, [a3] = t11;
    return (e12) => a3(ec(r11, n11, e12));
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
      let s3 = ec(e11[o3], e11[o3 + 1], a3);
      return t11[o3](s3);
    };
  }(e10, i2);
  return r10 ? (t11) => s2(er(e10[0], e10[o2 - 1], t11)) : s2;
}
let eX = (e10) => e10, eK = (e = (e10) => Math.pow(e10, 2), (t10) => t10 <= 0.5 ? e(2 * t10) / 2 : (2 - e(2 * (1 - t10))) / 2);
function eJ(e10) {
  let { from: t10 = 0, to: r10 = 1, ease: n10, offset: a2, duration: o2 = 300 } = e10, i2 = { done: false, value: t10 }, s2 = Array.isArray(r10) ? r10 : [t10, r10], l2 = (a2 && a2.length === s2.length ? a2 : function(e11) {
    let t11 = e11.length;
    return e11.map((e12, r11) => 0 !== r11 ? r11 / (t11 - 1) : 0);
  }(s2)).map((e11) => e11 * o2);
  function c2() {
    return eG(l2, s2, { ease: Array.isArray(n10) ? n10 : s2.map(() => n10 || eK).splice(0, s2.length - 1) });
  }
  let u2 = c2();
  return { next: (e11) => (i2.value = u2(e11), i2.done = e11 >= o2, i2), flipTarget: () => {
    s2.reverse(), u2 = c2();
  } };
}
let eZ = { keyframes: eJ, spring: es, decay: function(e10) {
  let { velocity: t10 = 0, from: r10 = 0, power: n10 = 0.8, timeConstant: a2 = 350, restDelta: o2 = 0.5, modifyTarget: i2 } = e10, s2 = { done: false, value: r10 }, l2 = n10 * t10, c2 = r10 + l2, u2 = void 0 === i2 ? c2 : i2(c2);
  return u2 !== c2 && (l2 = u2 - r10), { next: (e11) => {
    let t11 = -l2 * Math.exp(-e11 / a2);
    return s2.done = !(t11 > o2 || t11 < -o2), s2.value = s2.done ? u2 : u2 + t11, s2;
  }, flipTarget: () => {
  } };
} }, eQ = 1 / 60 * 1e3, e0 = "undefined" != typeof performance ? () => performance.now() : () => Date.now(), e1 = "undefined" != typeof window ? (e10) => window.requestAnimationFrame(e10) : (e10) => setTimeout(() => e10(e0()), eQ), e2 = true, e4 = false, e5 = false, e3 = { delta: 0, timestamp: 0 }, e8 = ["read", "update", "preRender", "render", "postRender"], e6 = e8.reduce((e10, t10) => (e10[t10] = /* @__PURE__ */ function(e11) {
  let t11 = [], r10 = [], n10 = 0, a2 = false, o2 = false, i2 = /* @__PURE__ */ new WeakSet(), s2 = { schedule: function(e12) {
    let o3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], s3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], l2 = s3 && a2, c2 = l2 ? t11 : r10;
    return o3 && i2.add(e12), -1 === c2.indexOf(e12) && (c2.push(e12), l2 && a2 && (n10 = t11.length)), e12;
  }, cancel: (e12) => {
    let t12 = r10.indexOf(e12);
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
}(() => e4 = true), e10), {}), e9 = e8.reduce((e10, t10) => {
  let r10 = e6[t10];
  return e10[t10] = function(e11) {
    let t11 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return e4 || tr(), r10.schedule(e11, t11, n10);
  }, e10;
}, {}), e7 = e8.reduce((e10, t10) => (e10[t10] = e6[t10].cancel, e10), {});
e8.reduce((e10, t10) => (e10[t10] = () => e6[t10].process(e3), e10), {});
let te = (e10) => e6[e10].process(e3), tt = (e10) => {
  e4 = false, e3.delta = e2 ? eQ : Math.max(Math.min(e10 - e3.timestamp, 40), 1), e3.timestamp = e10, e5 = true, e8.forEach(te), e5 = false, e4 && (e2 = false, e1(tt));
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
function to(e10) {
  let t10, r10, n10;
  var a2, { from: o2, autoplay: i2 = true, driver: s2 = ta, elapsed: l2 = 0, repeat: c2 = 0, repeatType: u2 = "loop", repeatDelay: d2 = 0, onPlay: f2, onStop: h2, onComplete: p2, onRepeat: m2, onUpdate: g2 } = e10, v2 = H(e10, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
  let { to: y2 } = v2, b2 = 0, w2 = v2.duration, x2 = false, k2 = true, M2 = function(e11) {
    if (Array.isArray(e11.to))
      return eJ;
    if (eZ[e11.type])
      return eZ[e11.type];
    let t11 = new Set(Object.keys(e11));
    if (t11.has("ease") || t11.has("duration") && !t11.has("dampingRatio"))
      ;
    else if (t11.has("dampingRatio") || t11.has("stiffness") || t11.has("mass") || t11.has("damping") || t11.has("restSpeed") || t11.has("restDelta"))
      return es;
    return eJ;
  }(v2);
  (null === (a2 = M2.needsInterpolation) || void 0 === a2 ? void 0 : a2.call(M2, o2, y2)) && (n10 = eG([0, 100], [o2, y2], { clamp: false }), o2 = 0, y2 = 100);
  let C2 = M2(Object.assign(Object.assign({}, v2), { from: o2, to: y2 }));
  return i2 && (null == f2 || f2(), (t10 = s2(function(e11) {
    if (k2 || (e11 = -e11), l2 += e11, !x2) {
      let e12 = C2.next(Math.max(0, l2));
      r10 = e12.value, n10 && (r10 = n10(r10)), x2 = k2 ? e12.done : l2 <= 0;
    }
    if (null == g2 || g2(r10), x2) {
      if (0 === b2 && (null != w2 || (w2 = l2)), b2 < c2) {
        var a3, o3;
        a3 = l2, o3 = w2, (k2 ? a3 >= o3 + d2 : a3 <= -d2) && (b2++, "reverse" === u2 ? l2 = function(e12, t11) {
          let r11 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n11 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
          return n11 ? tn(t11 + -e12, t11, r11) : t11 - (e12 - t11) + r11;
        }(l2, w2, d2, k2 = b2 % 2 == 0) : (l2 = tn(l2, w2, d2), "mirror" === u2 && C2.flipTarget()), x2 = false, m2 && m2());
      } else
        t10.stop(), p2 && p2();
    }
  })).start()), { stop: () => {
    null == h2 || h2(), t10.stop();
  } };
}
let ti = (e10, t10) => 1 - 3 * t10 + 3 * e10, ts = (e10, t10) => 3 * t10 - 6 * e10, tl = (e10) => 3 * e10, tc = (e10, t10, r10) => ((ti(t10, r10) * e10 + ts(t10, r10)) * e10 + tl(t10)) * e10, tu = (e10, t10, r10) => 3 * ti(t10, r10) * e10 * e10 + 2 * ts(t10, r10) * e10 + tl(t10);
function td(e10, t10, r10, n10) {
  if (e10 === t10 && r10 === n10)
    return eX;
  let a2 = new Float32Array(11);
  for (let t11 = 0; t11 < 11; ++t11)
    a2[t11] = tc(0.1 * t11, e10, r10);
  return (o2) => 0 === o2 || 1 === o2 ? o2 : tc(function(t11) {
    let n11 = 0, o3 = 1;
    for (; 10 !== o3 && a2[o3] <= t11; ++o3)
      n11 += 0.1;
    let i2 = n11 + (t11 - a2[--o3]) / (a2[o3 + 1] - a2[o3]) * 0.1, s2 = tu(i2, e10, r10);
    return s2 >= 1e-3 ? function(e11, t12, r11, n12) {
      for (let a3 = 0; a3 < 8; ++a3) {
        let a4 = tu(t12, r11, n12);
        if (0 === a4)
          break;
        let o4 = tc(t12, r11, n12) - e11;
        t12 -= o4 / a4;
      }
      return t12;
    }(t11, i2, e10, r10) : 0 === s2 ? i2 : function(e11, t12, r11, n12, a3) {
      let o4, i3;
      let s3 = 0;
      do
        (o4 = tc(i3 = t12 + (r11 - t12) / 2, n12, a3) - e11) > 0 ? r11 = i3 : t12 = i3;
      while (Math.abs(o4) > 1e-7 && ++s3 < 10);
      return i3;
    }(t11, n11, n11 + 0.1, e10, r10);
  }(o2), t10, n10);
}
var tf = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, th = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, tp = /[A-Z]|^ms/g, tm = /_EMO_([^_]+?)_([^]*?)_EMO_/g, tg = function(e10) {
  return 45 === e10.charCodeAt(1);
}, tv = function(e10) {
  return null != e10 && "boolean" != typeof e10;
}, ty = (z = function(e10) {
  return tg(e10) ? e10 : e10.replace(tp, "-$&").toLowerCase();
}, W = /* @__PURE__ */ Object.create(null), function(e10) {
  return void 0 === W[e10] && (W[e10] = z(e10)), W[e10];
}), tb = function(e10, t10) {
  switch (e10) {
    case "animation":
    case "animationName":
      if ("string" == typeof t10)
        return t10.replace(tm, function(e11, t11, r10) {
          return Z = { name: t11, styles: r10, next: Z }, t11;
        });
  }
  return 1 === tf[e10] || tg(e10) || "number" != typeof t10 || 0 === t10 ? t10 : t10 + "px";
}, tw = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, tx = ["normal", "none", "initial", "inherit", "unset"], tk = tb, tM = /^-ms-/, tC = /-(.)/g, tP = {};
tb = function(e10, t10) {
  if ("content" === e10 && ("string" != typeof t10 || -1 === tx.indexOf(t10) && !tw.test(t10) && (t10.charAt(0) !== t10.charAt(t10.length - 1) || '"' !== t10.charAt(0) && "'" !== t10.charAt(0))))
    throw Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t10 + "\"'`");
  var r10 = tk(e10, t10);
  return "" === r10 || tg(e10) || -1 === e10.indexOf("-") || void 0 !== tP[e10] || (tP[e10] = true, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + e10.replace(tM, "ms-").replace(tC, function(e11, t11) {
    return t11.toUpperCase();
  }) + "?")), r10;
};
var t_ = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function tS(e10, t10, r10) {
  if (null == r10)
    return "";
  if (void 0 !== r10.__emotion_styles) {
    if ("NO_COMPONENT_SELECTOR" === r10.toString())
      throw Error(t_);
    return r10;
  }
  switch (typeof r10) {
    case "boolean":
      return "";
    case "object":
      if (1 === r10.anim)
        return Z = { name: r10.name, styles: r10.styles, next: Z }, r10.name;
      if (void 0 !== r10.styles) {
        var n10 = r10.next;
        if (void 0 !== n10)
          for (; void 0 !== n10; )
            Z = { name: n10.name, styles: n10.styles, next: Z }, n10 = n10.next;
        var a2 = r10.styles + ";";
        return void 0 !== r10.map && (a2 += r10.map), a2;
      }
      return function(e11, t11, r11) {
        var n11 = "";
        if (Array.isArray(r11))
          for (var a3 = 0; a3 < r11.length; a3++)
            n11 += tS(e11, t11, r11[a3]) + ";";
        else
          for (var o3 in r11) {
            var i3 = r11[o3];
            if ("object" != typeof i3)
              null != t11 && void 0 !== t11[i3] ? n11 += o3 + "{" + t11[i3] + "}" : tv(i3) && (n11 += ty(o3) + ":" + tb(o3, i3) + ";");
            else {
              if ("NO_COMPONENT_SELECTOR" === o3)
                throw Error(t_);
              if (Array.isArray(i3) && "string" == typeof i3[0] && (null == t11 || void 0 === t11[i3[0]]))
                for (var s3 = 0; s3 < i3.length; s3++)
                  tv(i3[s3]) && (n11 += ty(o3) + ":" + tb(o3, i3[s3]) + ";");
              else {
                var l3 = tS(e11, t11, i3);
                switch (o3) {
                  case "animation":
                  case "animationName":
                    n11 += ty(o3) + ":" + l3 + ";";
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
        var o2 = Z, i2 = r10(e10);
        return Z = o2, tS(e10, t10, i2);
      }
      console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    case "string":
      var s2 = [], l2 = r10.replace(tm, function(e11, t11, r11) {
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
var tO = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
J = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
var tT = function(e10, t10, r10) {
  if (1 === e10.length && "object" == typeof e10[0] && null !== e10[0] && void 0 !== e10[0].styles)
    return e10[0];
  var n10, a2, o2 = true, i2 = "";
  Z = void 0;
  var s2 = e10[0];
  null == s2 || void 0 === s2.raw ? (o2 = false, i2 += tS(r10, t10, s2)) : (void 0 === s2[0] && console.error(th), i2 += s2[0]);
  for (var l2 = 1; l2 < e10.length; l2++)
    i2 += tS(r10, t10, e10[l2]), o2 && (void 0 === s2[l2] && console.error(th), i2 += s2[l2]);
  i2 = i2.replace(J, function(e11) {
    return n10 = e11, "";
  }), tO.lastIndex = 0;
  for (var c2 = ""; null !== (a2 = tO.exec(i2)); )
    c2 += "-" + a2[1];
  return { name: function(e11) {
    for (var t11, r11 = 0, n11 = 0, a3 = e11.length; a3 >= 4; ++n11, a3 -= 4)
      t11 = (65535 & (t11 = 255 & e11.charCodeAt(n11) | (255 & e11.charCodeAt(++n11)) << 8 | (255 & e11.charCodeAt(++n11)) << 16 | (255 & e11.charCodeAt(++n11)) << 24)) * 1540483477 + ((t11 >>> 16) * 59797 << 16), t11 ^= t11 >>> 24, r11 = (65535 & t11) * 1540483477 + ((t11 >>> 16) * 59797 << 16) ^ (65535 & r11) * 1540483477 + ((r11 >>> 16) * 59797 << 16);
    switch (a3) {
      case 3:
        r11 ^= (255 & e11.charCodeAt(n11 + 2)) << 16;
      case 2:
        r11 ^= (255 & e11.charCodeAt(n11 + 1)) << 8;
      case 1:
        r11 ^= 255 & e11.charCodeAt(n11), r11 = (65535 & r11) * 1540483477 + ((r11 >>> 16) * 59797 << 16);
    }
    return r11 ^= r11 >>> 13, (((r11 = (65535 & r11) * 1540483477 + ((r11 >>> 16) * 59797 << 16)) ^ r11 >>> 15) >>> 0).toString(36);
  }(i2) + c2, styles: i2, map: n10, next: Z, toString: function() {
    return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
  } };
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
function t$(e10) {
  return e10 < 0 ? -1 : 0 === e10 ? 0 : 1;
}
function tD(e10, t10, r10) {
  return r10 < e10 ? e10 : r10 > t10 ? t10 : r10;
}
function tR(e10, t10) {
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
let tI = [[0.41233895, 0.35762064, 0.18051042], [0.2126, 0.7152, 0.0722], [0.01932141, 0.11916382, 0.95034478]], tA = [[3.2413774792388685, -1.5376652402851851, -0.49885366846268053], [-0.9691452513005321, 1.8758853451067872, 0.04156585616912061], [0.05562093689691305, -0.20395524564742123, 1.0571799111220335]], tL = [95.047, 100, 108.883];
function tF(e10, t10, r10) {
  return (-16777216 | (255 & e10) << 16 | (255 & t10) << 8 | 255 & r10) >>> 0;
}
function tB(e10) {
  return tF(tz(e10[0]), tz(e10[1]), tz(e10[2]));
}
function tj(e10) {
  var t10;
  return 116 * tN(tR([tH((t10 = e10) >> 16 & 255), tH(t10 >> 8 & 255), tH(255 & t10)], tI)[1] / 100) - 16;
}
function tE(e10) {
  return 100 * function(e11) {
    let t10 = e11 * e11 * e11;
    return t10 > 216 / 24389 ? t10 : (116 * e11 - 16) / (24389 / 27);
  }((e10 + 16) / 116);
}
function tV(e10) {
  return 116 * tN(e10 / 100) - 16;
}
function tH(e10) {
  let t10 = e10 / 255;
  return t10 <= 0.040449936 ? t10 / 12.92 * 100 : 100 * Math.pow((t10 + 0.055) / 1.055, 2.4);
}
function tz(e10) {
  var t10;
  let r10 = e10 / 100;
  return (t10 = Math.round(255 * (r10 <= 31308e-7 ? 12.92 * r10 : 1.055 * Math.pow(r10, 1 / 2.4) - 0.055))) < 0 ? 0 : t10 > 255 ? 255 : t10;
}
function tW(e10) {
  return { r: e10 >> 16 & 255, g: e10 >> 8 & 255, b: 255 & e10, a: e10 >> 24 & 255 };
}
function tN(e10) {
  return e10 > 216 / 24389 ? Math.pow(e10, 1 / 3) : (24389 / 27 * e10 + 16) / 116;
}
class tq {
  static make() {
    var e10, t10;
    let r10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tL, n10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200 / Math.PI * tE(50) / 100, a2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50, o2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2, i2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], s2 = 0.401288 * r10[0] + 0.650173 * r10[1] + -0.051461 * r10[2], l2 = -0.250268 * r10[0] + 1.204414 * r10[1] + 0.045854 * r10[2], c2 = -2079e-6 * r10[0] + 0.048952 * r10[1] + 0.953127 * r10[2], u2 = 0.8 + o2 / 10, d2 = u2 >= 0.9 ? (1 - (e10 = (u2 - 0.9) * 10)) * 0.59 + 0.69 * e10 : (1 - (t10 = (u2 - 0.8) * 10)) * 0.525 + 0.59 * t10, f2 = i2 ? 1 : u2 * (1 - 1 / 3.6 * Math.exp((-n10 - 42) / 92)), h2 = [100 / s2 * (f2 = f2 > 1 ? 1 : f2 < 0 ? 0 : f2) + 1 - f2, 100 / l2 * f2 + 1 - f2, 100 / c2 * f2 + 1 - f2], p2 = 1 / (5 * n10 + 1), m2 = p2 * p2 * p2 * p2, g2 = 1 - m2, v2 = m2 * n10 + 0.1 * g2 * g2 * Math.cbrt(5 * n10), y2 = tE(a2) / r10[1], b2 = 1.48 + Math.sqrt(y2), w2 = 0.725 / Math.pow(y2, 0.2), x2 = [Math.pow(v2 * h2[0] * s2 / 100, 0.42), Math.pow(v2 * h2[1] * l2 / 100, 0.42), Math.pow(v2 * h2[2] * c2 / 100, 0.42)], k2 = [400 * x2[0] / (x2[0] + 27.13), 400 * x2[1] / (x2[1] + 27.13), 400 * x2[2] / (x2[2] + 27.13)];
    return new tq(y2, (2 * k2[0] + k2[1] + 0.05 * k2[2]) * w2, w2, w2, d2, u2, h2, v2, Math.pow(v2, 0.25), b2);
  }
  constructor(e10, t10, r10, n10, a2, o2, i2, s2, l2, c2) {
    this.n = e10, this.aw = t10, this.nbb = r10, this.ncb = n10, this.c = a2, this.nc = o2, this.rgbD = i2, this.fl = s2, this.fLRoot = l2, this.z = c2;
  }
}
tq.DEFAULT = tq.make();
class tU {
  constructor(e10, t10, r10, n10, a2, o2, i2, s2, l2) {
    this.hue = e10, this.chroma = t10, this.j = r10, this.q = n10, this.m = a2, this.s = o2, this.jstar = i2, this.astar = s2, this.bstar = l2;
  }
  distance(e10) {
    let t10 = this.jstar - e10.jstar, r10 = this.astar - e10.astar, n10 = this.bstar - e10.bstar;
    return 1.41 * Math.pow(Math.sqrt(t10 * t10 + r10 * r10 + n10 * n10), 0.63);
  }
  static fromInt(e10) {
    return tU.fromIntInViewingConditions(e10, tq.DEFAULT);
  }
  static fromIntInViewingConditions(e10, t10) {
    let r10 = tH((16711680 & e10) >> 16), n10 = tH((65280 & e10) >> 8), a2 = tH(255 & e10), o2 = 0.41233895 * r10 + 0.35762064 * n10 + 0.18051042 * a2, i2 = 0.2126 * r10 + 0.7152 * n10 + 0.0722 * a2, s2 = 0.01932141 * r10 + 0.11916382 * n10 + 0.95034478 * a2, l2 = t10.rgbD[0] * (0.401288 * o2 + 0.650173 * i2 - 0.051461 * s2), c2 = t10.rgbD[1] * (-0.250268 * o2 + 1.204414 * i2 + 0.045854 * s2), u2 = t10.rgbD[2] * (-2079e-6 * o2 + 0.048952 * i2 + 0.953127 * s2), d2 = Math.pow(t10.fl * Math.abs(l2) / 100, 0.42), f2 = Math.pow(t10.fl * Math.abs(c2) / 100, 0.42), h2 = Math.pow(t10.fl * Math.abs(u2) / 100, 0.42), p2 = 400 * t$(l2) * d2 / (d2 + 27.13), m2 = 400 * t$(c2) * f2 / (f2 + 27.13), g2 = 400 * t$(u2) * h2 / (h2 + 27.13), v2 = (11 * p2 + -12 * m2 + g2) / 11, y2 = (p2 + m2 - 2 * g2) / 9, b2 = 180 * Math.atan2(y2, v2) / Math.PI, w2 = b2 < 0 ? b2 + 360 : b2 >= 360 ? b2 - 360 : b2, x2 = w2 * Math.PI / 180, k2 = 100 * Math.pow((40 * p2 + 20 * m2 + g2) / 20 * t10.nbb / t10.aw, t10.c * t10.z), M2 = 4 / t10.c * Math.sqrt(k2 / 100) * (t10.aw + 4) * t10.fLRoot, C2 = Math.pow(5e4 / 13 * (0.25 * (Math.cos((w2 < 20.14 ? w2 + 360 : w2) * Math.PI / 180 + 2) + 3.8)) * t10.nc * t10.ncb * Math.sqrt(v2 * v2 + y2 * y2) / ((20 * p2 + 20 * m2 + 21 * g2) / 20 + 0.305), 0.9) * Math.pow(1.64 - Math.pow(0.29, t10.n), 0.73), P2 = C2 * Math.sqrt(k2 / 100), _2 = P2 * t10.fLRoot, S2 = 50 * Math.sqrt(C2 * t10.c / (t10.aw + 4)), O2 = 1 / 0.0228 * Math.log(1 + 0.0228 * _2);
    return new tU(w2, P2, k2, M2, _2, S2, (1 + 100 * 7e-3) * k2 / (1 + 7e-3 * k2), O2 * Math.cos(x2), O2 * Math.sin(x2));
  }
  static fromJch(e10, t10, r10) {
    return tU.fromJchInViewingConditions(e10, t10, r10, tq.DEFAULT);
  }
  static fromJchInViewingConditions(e10, t10, r10, n10) {
    let a2 = 4 / n10.c * Math.sqrt(e10 / 100) * (n10.aw + 4) * n10.fLRoot, o2 = t10 * n10.fLRoot, i2 = 50 * Math.sqrt(t10 / Math.sqrt(e10 / 100) * n10.c / (n10.aw + 4)), s2 = r10 * Math.PI / 180, l2 = 1 / 0.0228 * Math.log(1 + 0.0228 * o2);
    return new tU(r10, t10, e10, a2, o2, i2, (1 + 100 * 7e-3) * e10 / (1 + 7e-3 * e10), l2 * Math.cos(s2), l2 * Math.sin(s2));
  }
  static fromUcs(e10, t10, r10) {
    return tU.fromUcsInViewingConditions(e10, t10, r10, tq.DEFAULT);
  }
  static fromUcsInViewingConditions(e10, t10, r10, n10) {
    let a2 = (Math.exp(0.0228 * Math.sqrt(t10 * t10 + r10 * r10)) - 1) / 0.0228 / n10.fLRoot, o2 = 180 / Math.PI * Math.atan2(r10, t10);
    return o2 < 0 && (o2 += 360), tU.fromJchInViewingConditions(e10 / (1 - (e10 - 100) * 7e-3), a2, o2, n10);
  }
  toInt() {
    return this.viewed(tq.DEFAULT);
  }
  viewed(e10) {
    let t10 = Math.pow((0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100)) / Math.pow(1.64 - Math.pow(0.29, e10.n), 0.73), 1 / 0.9), r10 = this.hue * Math.PI / 180, n10 = e10.aw * Math.pow(this.j / 100, 1 / e10.c / e10.z), a2 = 5e4 / 13 * (0.25 * (Math.cos(r10 + 2) + 3.8)) * e10.nc * e10.ncb, o2 = n10 / e10.nbb, i2 = Math.sin(r10), s2 = Math.cos(r10), l2 = 23 * (o2 + 0.305) * t10 / (23 * a2 + 11 * t10 * s2 + 108 * t10 * i2), c2 = l2 * s2, u2 = l2 * i2, d2 = (460 * o2 + 451 * c2 + 288 * u2) / 1403, f2 = (460 * o2 - 891 * c2 - 261 * u2) / 1403, h2 = (460 * o2 - 220 * c2 - 6300 * u2) / 1403, p2 = Math.max(0, 27.13 * Math.abs(d2) / (400 - Math.abs(d2))), m2 = t$(d2) * (100 / e10.fl) * Math.pow(p2, 1 / 0.42), g2 = Math.max(0, 27.13 * Math.abs(f2) / (400 - Math.abs(f2))), v2 = t$(f2) * (100 / e10.fl) * Math.pow(g2, 1 / 0.42), y2 = Math.max(0, 27.13 * Math.abs(h2) / (400 - Math.abs(h2))), b2 = t$(h2) * (100 / e10.fl) * Math.pow(y2, 1 / 0.42), w2 = m2 / e10.rgbD[0], x2 = v2 / e10.rgbD[1], k2 = b2 / e10.rgbD[2];
    return function(e11, t11, r11) {
      let n11 = tA[0][0] * e11 + tA[0][1] * t11 + tA[0][2] * r11, a3 = tA[1][0] * e11 + tA[1][1] * t11 + tA[1][2] * r11, o3 = tA[2][0] * e11 + tA[2][1] * t11 + tA[2][2] * r11;
      return tF(tz(n11), tz(a3), tz(o3));
    }(1.86206786 * w2 - 1.01125463 * x2 + 0.14918677 * k2, 0.38752654 * w2 + 0.62144744 * x2 - 897398e-8 * k2, -0.0158415 * w2 - 0.03412294 * x2 + 1.04996444 * k2);
  }
  static fromXyzInViewingConditions(e10, t10, r10, n10) {
    let a2 = n10.rgbD[0] * (0.401288 * e10 + 0.650173 * t10 - 0.051461 * r10), o2 = n10.rgbD[1] * (-0.250268 * e10 + 1.204414 * t10 + 0.045854 * r10), i2 = n10.rgbD[2] * (-2079e-6 * e10 + 0.048952 * t10 + 0.953127 * r10), s2 = Math.pow(n10.fl * Math.abs(a2) / 100, 0.42), l2 = Math.pow(n10.fl * Math.abs(o2) / 100, 0.42), c2 = Math.pow(n10.fl * Math.abs(i2) / 100, 0.42), u2 = 400 * t$(a2) * s2 / (s2 + 27.13), d2 = 400 * t$(o2) * l2 / (l2 + 27.13), f2 = 400 * t$(i2) * c2 / (c2 + 27.13), h2 = (11 * u2 + -12 * d2 + f2) / 11, p2 = (u2 + d2 - 2 * f2) / 9, m2 = 180 * Math.atan2(p2, h2) / Math.PI, g2 = m2 < 0 ? m2 + 360 : m2 >= 360 ? m2 - 360 : m2, v2 = g2 * Math.PI / 180, y2 = 100 * Math.pow((40 * u2 + 20 * d2 + f2) / 20 * n10.nbb / n10.aw, n10.c * n10.z), b2 = 4 / n10.c * Math.sqrt(y2 / 100) * (n10.aw + 4) * n10.fLRoot, w2 = Math.pow(5e4 / 13 * (0.25 * (Math.cos((g2 < 20.14 ? g2 + 360 : g2) * Math.PI / 180 + 2) + 3.8)) * n10.nc * n10.ncb * Math.sqrt(h2 * h2 + p2 * p2) / ((20 * u2 + 20 * d2 + 21 * f2) / 20 + 0.305), 0.9) * Math.pow(1.64 - Math.pow(0.29, n10.n), 0.73), x2 = w2 * Math.sqrt(y2 / 100), k2 = x2 * n10.fLRoot, M2 = 50 * Math.sqrt(w2 * n10.c / (n10.aw + 4)), C2 = Math.log(1 + 0.0228 * k2) / 0.0228;
    return new tU(g2, x2, y2, b2, k2, M2, (1 + 100 * 7e-3) * y2 / (1 + 7e-3 * y2), C2 * Math.cos(v2), C2 * Math.sin(v2));
  }
  xyzInViewingConditions(e10) {
    let t10 = Math.pow((0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100)) / Math.pow(1.64 - Math.pow(0.29, e10.n), 0.73), 1 / 0.9), r10 = this.hue * Math.PI / 180, n10 = e10.aw * Math.pow(this.j / 100, 1 / e10.c / e10.z), a2 = 5e4 / 13 * (0.25 * (Math.cos(r10 + 2) + 3.8)) * e10.nc * e10.ncb, o2 = n10 / e10.nbb, i2 = Math.sin(r10), s2 = Math.cos(r10), l2 = 23 * (o2 + 0.305) * t10 / (23 * a2 + 11 * t10 * s2 + 108 * t10 * i2), c2 = l2 * s2, u2 = l2 * i2, d2 = (460 * o2 + 451 * c2 + 288 * u2) / 1403, f2 = (460 * o2 - 891 * c2 - 261 * u2) / 1403, h2 = (460 * o2 - 220 * c2 - 6300 * u2) / 1403, p2 = Math.max(0, 27.13 * Math.abs(d2) / (400 - Math.abs(d2))), m2 = t$(d2) * (100 / e10.fl) * Math.pow(p2, 1 / 0.42), g2 = Math.max(0, 27.13 * Math.abs(f2) / (400 - Math.abs(f2))), v2 = t$(f2) * (100 / e10.fl) * Math.pow(g2, 1 / 0.42), y2 = Math.max(0, 27.13 * Math.abs(h2) / (400 - Math.abs(h2))), b2 = t$(h2) * (100 / e10.fl) * Math.pow(y2, 1 / 0.42), w2 = m2 / e10.rgbD[0], x2 = v2 / e10.rgbD[1], k2 = b2 / e10.rgbD[2];
    return [1.86206786 * w2 - 1.01125463 * x2 + 0.14918677 * k2, 0.38752654 * w2 + 0.62144744 * x2 - 897398e-8 * k2, -0.0158415 * w2 - 0.03412294 * x2 + 1.04996444 * k2];
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
    let t10 = tR(e10, tY.SCALED_DISCOUNT_FROM_LINRGB), r10 = tY.chromaticAdaptation(t10[0]), n10 = tY.chromaticAdaptation(t10[1]), a2 = tY.chromaticAdaptation(t10[2]);
    return Math.atan2((r10 + n10 - 2 * a2) / 9, (11 * r10 + -12 * n10 + a2) / 11);
  }
  static areInCyclicOrder(e10, t10, r10) {
    return tY.sanitizeRadians(t10 - e10) < tY.sanitizeRadians(r10 - e10);
  }
  static intercept(e10, t10, r10) {
    return (t10 - e10) / (r10 - e10);
  }
  static lerpPoint(e10, t10, r10) {
    return [e10[0] + (r10[0] - e10[0]) * t10, e10[1] + (r10[1] - e10[1]) * t10, e10[2] + (r10[2] - e10[2]) * t10];
  }
  static setCoordinate(e10, t10, r10, n10) {
    let a2 = tY.intercept(e10[n10], t10, r10[n10]);
    return tY.lerpPoint(e10, a2, r10);
  }
  static isBounded(e10) {
    return 0 <= e10 && e10 <= 100;
  }
  static nthVertex(e10, t10) {
    let r10 = tY.Y_FROM_LINRGB[0], n10 = tY.Y_FROM_LINRGB[1], a2 = tY.Y_FROM_LINRGB[2], o2 = t10 % 4 <= 1 ? 0 : 100, i2 = t10 % 2 == 0 ? 0 : 100;
    if (t10 < 4) {
      let t11 = (e10 - o2 * n10 - i2 * a2) / r10;
      return tY.isBounded(t11) ? [t11, o2, i2] : [-1, -1, -1];
    }
    if (t10 < 8) {
      let t11 = (e10 - i2 * r10 - o2 * a2) / n10;
      return tY.isBounded(t11) ? [i2, t11, o2] : [-1, -1, -1];
    }
    {
      let t11 = (e10 - o2 * r10 - i2 * n10) / a2;
      return tY.isBounded(t11) ? [o2, i2, t11] : [-1, -1, -1];
    }
  }
  static bisectToSegment(e10, t10) {
    let r10 = [-1, -1, -1], n10 = r10, a2 = 0, o2 = 0, i2 = false, s2 = true;
    for (let l2 = 0; l2 < 12; l2++) {
      let c2 = tY.nthVertex(e10, l2);
      if (c2[0] < 0)
        continue;
      let u2 = tY.hueOf(c2);
      if (!i2) {
        r10 = c2, n10 = c2, a2 = u2, o2 = u2, i2 = true;
        continue;
      }
      (s2 || tY.areInCyclicOrder(a2, u2, o2)) && (s2 = false, tY.areInCyclicOrder(a2, t10, u2) ? (n10 = c2, o2 = u2) : (r10 = c2, a2 = u2));
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
  static bisectToLimit(e10, t10) {
    let r10 = tY.bisectToSegment(e10, t10), n10 = r10[0], a2 = tY.hueOf(n10), o2 = r10[1];
    for (let e11 = 0; e11 < 3; e11++)
      if (n10[e11] !== o2[e11]) {
        let r11 = -1, i2 = 255;
        n10[e11] < o2[e11] ? (r11 = tY.criticalPlaneBelow(tY.trueDelinearized(n10[e11])), i2 = tY.criticalPlaneAbove(tY.trueDelinearized(o2[e11]))) : (r11 = tY.criticalPlaneAbove(tY.trueDelinearized(n10[e11])), i2 = tY.criticalPlaneBelow(tY.trueDelinearized(o2[e11])));
        for (let s2 = 0; s2 < 8 && !(1 >= Math.abs(i2 - r11)); s2++) {
          let s3 = Math.floor((r11 + i2) / 2), l2 = tY.CRITICAL_PLANES[s3], c2 = tY.setCoordinate(n10, l2, o2, e11), u2 = tY.hueOf(c2);
          tY.areInCyclicOrder(a2, t10, u2) ? (o2 = c2, i2 = s3) : (n10 = c2, a2 = u2, r11 = s3);
        }
      }
    return tY.midpoint(n10, o2);
  }
  static inverseChromaticAdaptation(e10) {
    let t10 = Math.abs(e10);
    return t$(e10) * Math.pow(Math.max(0, 27.13 * t10 / (400 - t10)), 1 / 0.42);
  }
  static findResultByJ(e10, t10, r10) {
    let n10 = 11 * Math.sqrt(r10), a2 = tq.DEFAULT, o2 = 1 / Math.pow(1.64 - Math.pow(0.29, a2.n), 0.73), i2 = 5e4 / 13 * (0.25 * (Math.cos(e10 + 2) + 3.8)) * a2.nc * a2.ncb, s2 = Math.sin(e10), l2 = Math.cos(e10);
    for (let e11 = 0; e11 < 5; e11++) {
      let c2 = n10 / 100, u2 = Math.pow((0 === t10 || 0 === n10 ? 0 : t10 / Math.sqrt(c2)) * o2, 1 / 0.9), d2 = a2.aw * Math.pow(c2, 1 / a2.c / a2.z) / a2.nbb, f2 = 23 * (d2 + 0.305) * u2 / (23 * i2 + 11 * u2 * l2 + 108 * u2 * s2), h2 = f2 * l2, p2 = f2 * s2, m2 = (460 * d2 + 451 * h2 + 288 * p2) / 1403, g2 = (460 * d2 - 891 * h2 - 261 * p2) / 1403, v2 = (460 * d2 - 220 * h2 - 6300 * p2) / 1403, y2 = tR([tY.inverseChromaticAdaptation(m2), tY.inverseChromaticAdaptation(g2), tY.inverseChromaticAdaptation(v2)], tY.LINRGB_FROM_SCALED_DISCOUNT);
      if (y2[0] < 0 || y2[1] < 0 || y2[2] < 0)
        break;
      let b2 = tY.Y_FROM_LINRGB[0], w2 = tY.Y_FROM_LINRGB[1], x2 = tY.Y_FROM_LINRGB[2], k2 = b2 * y2[0] + w2 * y2[1] + x2 * y2[2];
      if (k2 <= 0)
        break;
      if (4 === e11 || 2e-3 > Math.abs(k2 - r10)) {
        if (y2[0] > 100.01 || y2[1] > 100.01 || y2[2] > 100.01)
          return 0;
        return tB(y2);
      }
      n10 -= (k2 - r10) * n10 / (2 * k2);
    }
    return 0;
  }
  static solveToInt(e10, t10, r10) {
    var n10;
    if (t10 < 1e-4 || r10 < 1e-4 || r10 > 99.9999)
      return function(e11) {
        let t11 = tz(tE(e11));
        return tF(t11, t11, t11);
      }(r10);
    (n10 = e10 % 360) < 0 && (n10 += 360);
    let a2 = (e10 = n10) / 180 * Math.PI, o2 = tE(r10), i2 = tY.findResultByJ(a2, t10, o2);
    return 0 !== i2 ? i2 : tB(tY.bisectToLimit(o2, a2));
  }
  static solveToCam(e10, t10, r10) {
    return tU.fromInt(tY.solveToInt(e10, t10, r10));
  }
}
tY.SCALED_DISCOUNT_FROM_LINRGB = [[0.001200833568784504, 0.002389694492170889, 2795742885861124e-19], [5891086651375999e-19, 0.0029785502573438758, 3270666104008398e-19], [10146692491640572e-20, 5364214359186694e-19, 0.0032979401770712076]], tY.LINRGB_FROM_SCALED_DISCOUNT = [[1373.2198709594231, -1100.4251190754821, -7.278681089101213], [-271.815969077903, 559.6580465940733, -32.46047482791194], [1.9622899599665666, -57.173814538844006, 308.7233197812385]], tY.Y_FROM_LINRGB = [0.2126, 0.7152, 0.0722], tY.CRITICAL_PLANES = [0.015176349177441876, 0.045529047532325624, 0.07588174588720938, 0.10623444424209313, 0.13658714259697685, 0.16693984095186062, 0.19729253930674434, 0.2276452376616281, 0.2579979360165119, 0.28835063437139563, 0.3188300904430532, 0.350925934958123, 0.3848314933096426, 0.42057480301049466, 0.458183274052838, 0.4976837250274023, 0.5391024159806381, 0.5824650784040898, 0.6277969426914107, 0.6751227633498623, 0.7244668422128921, 0.775853049866786, 0.829304845476233, 0.8848452951698498, 0.942497089126609, 1.0022825574869039, 1.0642236851973577, 1.1283421258858297, 1.1946592148522128, 1.2631959812511864, 1.3339731595349034, 1.407011200216447, 1.4823302800086415, 1.5599503113873272, 1.6398909516233677, 1.7221716113234105, 1.8068114625156377, 1.8938294463134073, 1.9832442801866852, 2.075074464868551, 2.1693382909216234, 2.2660538449872063, 2.36523901573795, 2.4669114995532007, 2.5710888059345764, 2.6777882626779785, 2.7870270208169257, 2.898822059350997, 3.0131901897720907, 3.1301480604002863, 3.2497121605402226, 3.3718988244681087, 3.4967242352587946, 3.624204428461639, 3.754355295633311, 3.887192587735158, 4.022731918402185, 4.160988767090289, 4.301978482107941, 4.445716283538092, 4.592217266055746, 4.741496401646282, 4.893568542229298, 5.048448422192488, 5.20615066083972, 5.3666897647573375, 5.5300801301023865, 5.696336044816294, 5.865471690767354, 6.037501145825082, 6.212438385869475, 6.390297286737924, 6.571091626112461, 6.7548350853498045, 6.941541251256611, 7.131223617812143, 7.323895587840543, 7.5195704746346665, 7.7182615035334345, 7.919981813454504, 8.124744458384042, 8.332562408825165, 8.543448553206703, 8.757415699253682, 8.974476575321063, 9.194643831691977, 9.417930041841839, 9.644347703669503, 9.873909240696694, 10.106627003236781, 10.342513269534024, 10.58158024687427, 10.8238400726681, 11.069304815507364, 11.317986476196008, 11.569896988756009, 11.825048221409341, 12.083451977536606, 12.345119996613247, 12.610063955123938, 12.878295467455942, 13.149826086772048, 13.42466730586372, 13.702830557985108, 13.984327217668513, 14.269168601521828, 14.55736596900856, 14.848930523210871, 15.143873411576273, 15.44220572664832, 15.743938506781891, 16.04908273684337, 16.35764934889634, 16.66964922287304, 16.985093187232053, 17.30399201960269, 17.62635644741625, 17.95219714852476, 18.281524751807332, 18.614349837764564, 18.95068293910138, 19.290534541298456, 19.633915083172692, 19.98083495742689, 20.331304511189067, 20.685334046541502, 21.042933821039977, 21.404114048223256, 21.76888489811322, 22.137256497705877, 22.50923893145328, 22.884842241736916, 23.264076429332462, 23.6469514538663, 24.033477234264016, 24.42366364919083, 24.817520537484558, 25.21505769858089, 25.61628489293138, 26.021211842414342, 26.429848230738664, 26.842203703840827, 27.258287870275353, 27.678110301598522, 28.10168053274597, 28.529008062403893, 28.96010235337422, 29.39497283293396, 29.83362889318845, 30.276079891419332, 30.722335150426627, 31.172403958865512, 31.62629557157785, 32.08401920991837, 32.54558406207592, 33.010999283389665, 33.4802739966603, 33.953417292456834, 34.430438229418264, 34.911345834551085, 35.39614910352207, 35.88485700094671, 36.37747846067349, 36.87402238606382, 37.37449765026789, 37.87891309649659, 38.38727753828926, 38.89959975977785, 39.41588851594697, 39.93615253289054, 40.460400508064545, 40.98864111053629, 41.520882981230194, 42.05713473317016, 42.597404951718396, 43.141702194811224, 43.6900349931913, 44.24241185063697, 44.798841244188324, 45.35933162437017, 45.92389141541209, 46.49252901546552, 47.065252796817916, 47.64207110610409, 48.22299226451468, 48.808024568002054, 49.3971762874833, 49.9904556690408, 50.587870934119984, 51.189430279724725, 51.79514187861014, 52.40501387947288, 53.0190544071392, 53.637271562750364, 54.259673423945976, 54.88626804504493, 55.517063457223934, 56.15206766869424, 56.79128866487574, 57.43473440856916, 58.08241284012621, 58.734331877617365, 59.39049941699807, 60.05092333227251, 60.715611475655585, 61.38457167773311, 62.057811747619894, 62.7353394731159, 63.417162620860914, 64.10328893648692, 64.79372614476921, 65.48848194977529, 66.18756403501224, 66.89098006357258, 67.59873767827808, 68.31084450182222, 69.02730813691093, 69.74813616640164, 70.47333615344107, 71.20291564160104, 71.93688215501312, 72.67524319850172, 73.41800625771542, 74.16517879925733, 74.9167682708136, 75.67278210128072, 76.43322770089146, 77.1981124613393, 77.96744375590167, 78.74122893956174, 79.51947534912904, 80.30219030335869, 81.08938110306934, 81.88105503125999, 82.67721935322541, 83.4778813166706, 84.28304815182372, 85.09272707154808, 85.90692527145302, 86.72564993000343, 87.54890820862819, 88.3767072518277, 89.2090541872801, 90.04595612594655, 90.88742016217518, 91.73345337380438, 92.58406282226491, 93.43925555268066, 94.29903859396902, 95.16341895893969, 96.03240364439274, 96.9059996312159, 97.78421388448044, 98.6670533535366, 99.55452497210776];
class tG {
  static from(e10, t10, r10) {
    return new tG(tY.solveToInt(e10, t10, r10));
  }
  static fromInt(e10) {
    return new tG(e10);
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
  constructor(e10) {
    this.argb = e10;
    let t10 = tU.fromInt(e10);
    this.internalHue = t10.hue, this.internalChroma = t10.chroma, this.internalTone = tj(e10), this.argb = e10;
  }
  setInternalState(e10) {
    let t10 = tU.fromInt(e10);
    this.internalHue = t10.hue, this.internalChroma = t10.chroma, this.internalTone = tj(e10), this.argb = e10;
  }
  inViewingConditions(e10) {
    let t10 = tU.fromInt(this.toInt()).xyzInViewingConditions(e10), r10 = tU.fromXyzInViewingConditions(t10[0], t10[1], t10[2], tq.make());
    return tG.from(r10.hue, r10.chroma, tV(t10[1]));
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
class tX {
  static ratioOfTones(e10, t10) {
    return e10 = tD(0, 100, e10), t10 = tD(0, 100, t10), tX.ratioOfYs(tE(e10), tE(t10));
  }
  static ratioOfYs(e10, t10) {
    let r10 = e10 > t10 ? e10 : t10;
    return (r10 + 5) / ((r10 === t10 ? e10 : t10) + 5);
  }
  static lighter(e10, t10) {
    if (e10 < 0 || e10 > 100)
      return -1;
    let r10 = tE(e10), n10 = t10 * (r10 + 5) - 5, a2 = tX.ratioOfYs(n10, r10);
    if (a2 < t10 && Math.abs(a2 - t10) > 0.04)
      return -1;
    let o2 = tV(n10) + 0.4;
    return o2 < 0 || o2 > 100 ? -1 : o2;
  }
  static darker(e10, t10) {
    if (e10 < 0 || e10 > 100)
      return -1;
    let r10 = tE(e10), n10 = (r10 + 5) / t10 - 5, a2 = tX.ratioOfYs(r10, n10);
    if (a2 < t10 && Math.abs(a2 - t10) > 0.04)
      return -1;
    let o2 = tV(n10) - 0.4;
    return o2 < 0 || o2 > 100 ? -1 : o2;
  }
  static lighterUnsafe(e10, t10) {
    let r10 = tX.lighter(e10, t10);
    return r10 < 0 ? 100 : r10;
  }
  static darkerUnsafe(e10, t10) {
    let r10 = tX.darker(e10, t10);
    return r10 < 0 ? 0 : r10;
  }
}
class tK {
  static isDisliked(e10) {
    let t10 = Math.round(e10.hue) >= 90 && 111 >= Math.round(e10.hue), r10 = Math.round(e10.chroma) > 16, n10 = 65 > Math.round(e10.tone);
    return t10 && r10 && n10;
  }
  static fixIfDisliked(e10) {
    return tK.isDisliked(e10) ? tG.from(e10.hue, e10.chroma, 70) : e10;
  }
}
class tJ {
  static fromPalette(e10) {
    var t10, r10;
    return new tJ(null !== (t10 = e10.name) && void 0 !== t10 ? t10 : "", e10.palette, e10.tone, null !== (r10 = e10.isBackground) && void 0 !== r10 && r10, e10.background, e10.secondBackground, e10.contrastCurve, e10.toneDeltaPair);
  }
  constructor(e10, t10, r10, n10, a2, o2, i2, s2) {
    if (this.name = e10, this.palette = t10, this.tone = r10, this.isBackground = n10, this.background = a2, this.secondBackground = o2, this.contrastCurve = i2, this.toneDeltaPair = s2, this.hctCache = /* @__PURE__ */ new Map(), !a2 && o2)
      throw Error(`Color ${e10} has secondBackgrounddefined, but background is not defined.`);
    if (!a2 && i2)
      throw Error(`Color ${e10} has contrastCurvedefined, but background is not defined.`);
    if (a2 && !i2)
      throw Error(`Color ${e10} has backgrounddefined, but contrastCurve is not defined.`);
  }
  getArgb(e10) {
    return this.getHct(e10).toInt();
  }
  getHct(e10) {
    let t10 = this.hctCache.get(e10);
    if (null != t10)
      return t10;
    let r10 = this.getTone(e10), n10 = this.palette(e10).getHct(r10);
    return this.hctCache.size > 4 && this.hctCache.clear(), this.hctCache.set(e10, n10), n10;
  }
  getTone(e10) {
    let t10 = e10.contrastLevel < 0;
    if (this.toneDeltaPair) {
      let r10 = this.toneDeltaPair(e10), n10 = r10.roleA, a2 = r10.roleB, o2 = r10.delta, i2 = r10.polarity, s2 = r10.stayTogether, l2 = this.background(e10).getTone(e10), c2 = "nearer" === i2 || "lighter" === i2 && !e10.isDark || "darker" === i2 && e10.isDark, u2 = c2 ? n10 : a2, d2 = c2 ? a2 : n10, f2 = this.name === u2.name, h2 = e10.isDark ? 1 : -1, p2 = u2.contrastCurve.getContrast(e10.contrastLevel), m2 = d2.contrastCurve.getContrast(e10.contrastLevel), g2 = u2.tone(e10), v2 = tX.ratioOfTones(l2, g2) >= p2 ? g2 : tJ.foregroundTone(l2, p2), y2 = d2.tone(e10), b2 = tX.ratioOfTones(l2, y2) >= m2 ? y2 : tJ.foregroundTone(l2, m2);
      return t10 && (v2 = tJ.foregroundTone(l2, p2), b2 = tJ.foregroundTone(l2, m2)), (b2 - v2) * h2 >= o2 || ((b2 = tD(0, 100, v2 + o2 * h2)) - v2) * h2 >= o2 || (v2 = tD(0, 100, b2 - o2 * h2)), 50 <= v2 && v2 < 60 ? b2 = h2 > 0 ? Math.max(b2, (v2 = 60) + o2 * h2) : Math.min(b2, (v2 = 49) + o2 * h2) : 50 <= b2 && b2 < 60 && (b2 = s2 ? h2 > 0 ? Math.max(b2, (v2 = 60) + o2 * h2) : Math.min(b2, (v2 = 49) + o2 * h2) : h2 > 0 ? 60 : 49), f2 ? v2 : b2;
    }
    {
      let r10 = this.tone(e10);
      if (null == this.background)
        return r10;
      let n10 = this.background(e10).getTone(e10), a2 = this.contrastCurve.getContrast(e10.contrastLevel);
      if (tX.ratioOfTones(n10, r10) >= a2 || (r10 = tJ.foregroundTone(n10, a2)), t10 && (r10 = tJ.foregroundTone(n10, a2)), this.isBackground && 50 <= r10 && r10 < 60 && (r10 = tX.ratioOfTones(49, n10) >= a2 ? 49 : 60), this.secondBackground) {
        let [t11, n11] = [this.background, this.secondBackground], [o2, i2] = [t11(e10).getTone(e10), n11(e10).getTone(e10)], [s2, l2] = [Math.max(o2, i2), Math.min(o2, i2)];
        if (tX.ratioOfTones(s2, r10) >= a2 && tX.ratioOfTones(l2, r10) >= a2)
          return r10;
        let c2 = tX.lighter(s2, a2), u2 = tX.darker(l2, a2), d2 = [];
        return (-1 !== c2 && d2.push(c2), -1 !== u2 && d2.push(u2), tJ.tonePrefersLightForeground(o2) || tJ.tonePrefersLightForeground(i2)) ? c2 < 0 ? 100 : c2 : 1 === d2.length ? d2[0] : u2 < 0 ? 0 : u2;
      }
      return r10;
    }
  }
  static foregroundTone(e10, t10) {
    let r10 = tX.lighterUnsafe(e10, t10), n10 = tX.darkerUnsafe(e10, t10), a2 = tX.ratioOfTones(r10, e10), o2 = tX.ratioOfTones(n10, e10);
    if (!tJ.tonePrefersLightForeground(e10))
      return o2 >= t10 || o2 >= a2 ? n10 : r10;
    {
      let e11 = 0.1 > Math.abs(a2 - o2) && a2 < t10 && o2 < t10;
      return a2 >= t10 || a2 >= o2 || e11 ? r10 : n10;
    }
  }
  static tonePrefersLightForeground(e10) {
    return 60 > Math.round(e10);
  }
  static toneAllowsLightForeground(e10) {
    return 49 >= Math.round(e10);
  }
  static enableLightForeground(e10) {
    return tJ.tonePrefersLightForeground(e10) && !tJ.toneAllowsLightForeground(e10) ? 49 : e10;
  }
}
(N = Q || (Q = {}))[N.MONOCHROME = 0] = "MONOCHROME", N[N.NEUTRAL = 1] = "NEUTRAL", N[N.TONAL_SPOT = 2] = "TONAL_SPOT", N[N.VIBRANT = 3] = "VIBRANT", N[N.EXPRESSIVE = 4] = "EXPRESSIVE", N[N.FIDELITY = 5] = "FIDELITY", N[N.CONTENT = 6] = "CONTENT", N[N.RAINBOW = 7] = "RAINBOW", N[N.FRUIT_SALAD = 8] = "FRUIT_SALAD";
class tZ {
  constructor(e10, t10, r10, n10) {
    this.low = e10, this.normal = t10, this.medium = r10, this.high = n10;
  }
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
class tQ {
  constructor(e10, t10, r10, n10, a2) {
    this.roleA = e10, this.roleB = t10, this.delta = r10, this.polarity = n10, this.stayTogether = a2;
  }
}
function t0(e10) {
  return e10.variant === Q.FIDELITY || e10.variant === Q.CONTENT;
}
function t1(e10) {
  return e10.variant === Q.MONOCHROME;
}
function t2(e10, t10) {
  let r10 = e10.inViewingConditions(tq.make(void 0, void 0, t10.isDark ? 30 : 80, void 0, void 0));
  return tJ.tonePrefersLightForeground(e10.tone) && !tJ.toneAllowsLightForeground(r10.tone) ? tJ.enableLightForeground(e10.tone) : tJ.enableLightForeground(r10.tone);
}
class t4 {
  static highestSurface(e10) {
    return e10.isDark ? t4.surfaceBright : t4.surfaceDim;
  }
}
t4.contentAccentToneDelta = 15, t4.primaryPaletteKeyColor = tJ.fromPalette({ name: "primary_palette_key_color", palette: (e10) => e10.primaryPalette, tone: (e10) => e10.primaryPalette.keyColor.tone }), t4.secondaryPaletteKeyColor = tJ.fromPalette({ name: "secondary_palette_key_color", palette: (e10) => e10.secondaryPalette, tone: (e10) => e10.secondaryPalette.keyColor.tone }), t4.tertiaryPaletteKeyColor = tJ.fromPalette({ name: "tertiary_palette_key_color", palette: (e10) => e10.tertiaryPalette, tone: (e10) => e10.tertiaryPalette.keyColor.tone }), t4.neutralPaletteKeyColor = tJ.fromPalette({ name: "neutral_palette_key_color", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.neutralPalette.keyColor.tone }), t4.neutralVariantPaletteKeyColor = tJ.fromPalette({ name: "neutral_variant_palette_key_color", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.neutralVariantPalette.keyColor.tone }), t4.background = tJ.fromPalette({ name: "background", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 6 : 98, isBackground: true }), t4.onBackground = tJ.fromPalette({ name: "on_background", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 90 : 10, background: (e10) => t4.background, contrastCurve: new tZ(3, 3, 4.5, 7) }), t4.surface = tJ.fromPalette({ name: "surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 6 : 98, isBackground: true }), t4.surfaceDim = tJ.fromPalette({ name: "surface_dim", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 6 : 87, isBackground: true }), t4.surfaceBright = tJ.fromPalette({ name: "surface_bright", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 24 : 98, isBackground: true }), t4.surfaceContainerLowest = tJ.fromPalette({ name: "surface_container_lowest", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 4 : 100, isBackground: true }), t4.surfaceContainerLow = tJ.fromPalette({ name: "surface_container_low", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 10 : 96, isBackground: true }), t4.surfaceContainer = tJ.fromPalette({ name: "surface_container", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 12 : 94, isBackground: true }), t4.surfaceContainerHigh = tJ.fromPalette({ name: "surface_container_high", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 17 : 92, isBackground: true }), t4.surfaceContainerHighest = tJ.fromPalette({ name: "surface_container_highest", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 22 : 90, isBackground: true }), t4.onSurface = tJ.fromPalette({ name: "on_surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 90 : 10, background: (e10) => t4.highestSurface(e10), contrastCurve: new tZ(4.5, 7, 11, 21) }), t4.surfaceVariant = tJ.fromPalette({ name: "surface_variant", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 30 : 90, isBackground: true }), t4.onSurfaceVariant = tJ.fromPalette({ name: "on_surface_variant", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 80 : 30, background: (e10) => t4.highestSurface(e10), contrastCurve: new tZ(3, 4.5, 7, 11) }), t4.inverseSurface = tJ.fromPalette({ name: "inverse_surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 90 : 20 }), t4.inverseOnSurface = tJ.fromPalette({ name: "inverse_on_surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 20 : 95, background: (e10) => t4.inverseSurface, contrastCurve: new tZ(4.5, 7, 11, 21) }), t4.outline = tJ.fromPalette({ name: "outline", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 60 : 50, background: (e10) => t4.highestSurface(e10), contrastCurve: new tZ(1.5, 3, 4.5, 7) }), t4.outlineVariant = tJ.fromPalette({ name: "outline_variant", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 30 : 80, background: (e10) => t4.highestSurface(e10), contrastCurve: new tZ(1, 1, 3, 7) }), t4.shadow = tJ.fromPalette({ name: "shadow", palette: (e10) => e10.neutralPalette, tone: (e10) => 0 }), t4.scrim = tJ.fromPalette({ name: "scrim", palette: (e10) => e10.neutralPalette, tone: (e10) => 0 }), t4.surfaceTint = tJ.fromPalette({ name: "surface_tint", palette: (e10) => e10.primaryPalette, tone: (e10) => e10.isDark ? 80 : 40, isBackground: true }), t4.primary = tJ.fromPalette({ name: "primary", palette: (e10) => e10.primaryPalette, tone: (e10) => t1(e10) ? e10.isDark ? 100 : 0 : e10.isDark ? 80 : 40, isBackground: true, background: (e10) => t4.highestSurface(e10), contrastCurve: new tZ(3, 4.5, 7, 11), toneDeltaPair: (e10) => new tQ(t4.primaryContainer, t4.primary, 15, "nearer", false) }), t4.onPrimary = tJ.fromPalette({ name: "on_primary", palette: (e10) => e10.primaryPalette, tone: (e10) => t1(e10) ? e10.isDark ? 10 : 90 : e10.isDark ? 20 : 100, background: (e10) => t4.primary, contrastCurve: new tZ(4.5, 7, 11, 21) }), t4.primaryContainer = tJ.fromPalette({ name: "primary_container", palette: (e10) => e10.primaryPalette, tone: (e10) => t0(e10) ? t2(e10.sourceColorHct, e10) : t1(e10) ? e10.isDark ? 85 : 25 : e10.isDark ? 30 : 90, isBackground: true, background: (e10) => t4.highestSurface(e10), contrastCurve: new tZ(1, 1, 3, 7), toneDeltaPair: (e10) => new tQ(t4.primaryContainer, t4.primary, 15, "nearer", false) }), t4.onPrimaryContainer = tJ.fromPalette({ name: "on_primary_container", palette: (e10) => e10.primaryPalette, tone: (e10) => t0(e10) ? tJ.foregroundTone(t4.primaryContainer.tone(e10), 4.5) : t1(e10) ? e10.isDark ? 0 : 100 : e10.isDark ? 90 : 10, background: (e10) => t4.primaryContainer, contrastCurve: new tZ(4.5, 7, 11, 21) }), t4.inversePrimary = tJ.fromPalette({ name: "inverse_primary", palette: (e10) => e10.primaryPalette, tone: (e10) => e10.isDark ? 40 : 80, background: (e10) => t4.inverseSurface, contrastCurve: new tZ(3, 4.5, 7, 11) }), t4.secondary = tJ.fromPalette({ name: "secondary", palette: (e10) => e10.secondaryPalette, tone: (e10) => e10.isDark ? 80 : 40, isBackground: true, background: (e10) => t4.highestSurface(e10), contrastCurve: new tZ(3, 4.5, 7, 11), toneDeltaPair: (e10) => new tQ(t4.secondaryContainer, t4.secondary, 15, "nearer", false) }), t4.onSecondary = tJ.fromPalette({ name: "on_secondary", palette: (e10) => e10.secondaryPalette, tone: (e10) => t1(e10) ? e10.isDark ? 10 : 100 : e10.isDark ? 20 : 100, background: (e10) => t4.secondary, contrastCurve: new tZ(4.5, 7, 11, 21) }), t4.secondaryContainer = tJ.fromPalette({ name: "secondary_container", palette: (e10) => e10.secondaryPalette, tone: (e10) => {
  let t10 = e10.isDark ? 30 : 90;
  if (t1(e10))
    return e10.isDark ? 30 : 85;
  if (!t0(e10))
    return t10;
  let r10 = function(e11, t11, r11, n10) {
    let a2 = r11, o2 = tG.from(e11, t11, r11);
    if (o2.chroma < t11) {
      let r12 = o2.chroma;
      for (; o2.chroma < t11; ) {
        a2 += n10 ? -1 : 1;
        let i2 = tG.from(e11, t11, a2);
        if (r12 > i2.chroma || 0.4 > Math.abs(i2.chroma - t11))
          break;
        Math.abs(i2.chroma - t11) < Math.abs(o2.chroma - t11) && (o2 = i2), r12 = Math.max(r12, i2.chroma);
      }
    }
    return a2;
  }(e10.secondaryPalette.hue, e10.secondaryPalette.chroma, t10, !e10.isDark);
  return t2(e10.secondaryPalette.getHct(r10), e10);
}, isBackground: true, background: (e10) => t4.highestSurface(e10), contrastCurve: new tZ(1, 1, 3, 7), toneDeltaPair: (e10) => new tQ(t4.secondaryContainer, t4.secondary, 15, "nearer", false) }), t4.onSecondaryContainer = tJ.fromPalette({ name: "on_secondary_container", palette: (e10) => e10.secondaryPalette, tone: (e10) => t0(e10) ? tJ.foregroundTone(t4.secondaryContainer.tone(e10), 4.5) : e10.isDark ? 90 : 10, background: (e10) => t4.secondaryContainer, contrastCurve: new tZ(4.5, 7, 11, 21) }), t4.tertiary = tJ.fromPalette({ name: "tertiary", palette: (e10) => e10.tertiaryPalette, tone: (e10) => t1(e10) ? e10.isDark ? 90 : 25 : e10.isDark ? 80 : 40, isBackground: true, background: (e10) => t4.highestSurface(e10), contrastCurve: new tZ(3, 4.5, 7, 11), toneDeltaPair: (e10) => new tQ(t4.tertiaryContainer, t4.tertiary, 15, "nearer", false) }), t4.onTertiary = tJ.fromPalette({ name: "on_tertiary", palette: (e10) => e10.tertiaryPalette, tone: (e10) => t1(e10) ? e10.isDark ? 10 : 90 : e10.isDark ? 20 : 100, background: (e10) => t4.tertiary, contrastCurve: new tZ(4.5, 7, 11, 21) }), t4.tertiaryContainer = tJ.fromPalette({ name: "tertiary_container", palette: (e10) => e10.tertiaryPalette, tone: (e10) => {
  if (t1(e10))
    return e10.isDark ? 60 : 49;
  if (!t0(e10))
    return e10.isDark ? 30 : 90;
  let t10 = t2(e10.tertiaryPalette.getHct(e10.sourceColorHct.tone), e10), r10 = e10.tertiaryPalette.getHct(t10);
  return tK.fixIfDisliked(r10).tone;
}, isBackground: true, background: (e10) => t4.highestSurface(e10), contrastCurve: new tZ(1, 1, 3, 7), toneDeltaPair: (e10) => new tQ(t4.tertiaryContainer, t4.tertiary, 15, "nearer", false) }), t4.onTertiaryContainer = tJ.fromPalette({ name: "on_tertiary_container", palette: (e10) => e10.tertiaryPalette, tone: (e10) => t1(e10) ? e10.isDark ? 0 : 100 : t0(e10) ? tJ.foregroundTone(t4.tertiaryContainer.tone(e10), 4.5) : e10.isDark ? 90 : 10, background: (e10) => t4.tertiaryContainer, contrastCurve: new tZ(4.5, 7, 11, 21) }), t4.error = tJ.fromPalette({ name: "error", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 80 : 40, isBackground: true, background: (e10) => t4.highestSurface(e10), contrastCurve: new tZ(3, 4.5, 7, 11), toneDeltaPair: (e10) => new tQ(t4.errorContainer, t4.error, 15, "nearer", false) }), t4.onError = tJ.fromPalette({ name: "on_error", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 20 : 100, background: (e10) => t4.error, contrastCurve: new tZ(4.5, 7, 11, 21) }), t4.errorContainer = tJ.fromPalette({ name: "error_container", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 30 : 90, isBackground: true, background: (e10) => t4.highestSurface(e10), contrastCurve: new tZ(1, 1, 3, 7), toneDeltaPair: (e10) => new tQ(t4.errorContainer, t4.error, 15, "nearer", false) }), t4.onErrorContainer = tJ.fromPalette({ name: "on_error_container", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 90 : 10, background: (e10) => t4.errorContainer, contrastCurve: new tZ(4.5, 7, 11, 21) }), t4.primaryFixed = tJ.fromPalette({ name: "primary_fixed", palette: (e10) => e10.primaryPalette, tone: (e10) => t1(e10) ? 40 : 90, isBackground: true, background: (e10) => t4.highestSurface(e10), contrastCurve: new tZ(1, 1, 3, 7), toneDeltaPair: (e10) => new tQ(t4.primaryFixed, t4.primaryFixedDim, 10, "lighter", true) }), t4.primaryFixedDim = tJ.fromPalette({ name: "primary_fixed_dim", palette: (e10) => e10.primaryPalette, tone: (e10) => t1(e10) ? 30 : 80, isBackground: true, background: (e10) => t4.highestSurface(e10), contrastCurve: new tZ(1, 1, 3, 7), toneDeltaPair: (e10) => new tQ(t4.primaryFixed, t4.primaryFixedDim, 10, "lighter", true) }), t4.onPrimaryFixed = tJ.fromPalette({ name: "on_primary_fixed", palette: (e10) => e10.primaryPalette, tone: (e10) => t1(e10) ? 100 : 10, background: (e10) => t4.primaryFixedDim, secondBackground: (e10) => t4.primaryFixed, contrastCurve: new tZ(4.5, 7, 11, 21) }), t4.onPrimaryFixedVariant = tJ.fromPalette({ name: "on_primary_fixed_variant", palette: (e10) => e10.primaryPalette, tone: (e10) => t1(e10) ? 90 : 30, background: (e10) => t4.primaryFixedDim, secondBackground: (e10) => t4.primaryFixed, contrastCurve: new tZ(3, 4.5, 7, 11) }), t4.secondaryFixed = tJ.fromPalette({ name: "secondary_fixed", palette: (e10) => e10.secondaryPalette, tone: (e10) => t1(e10) ? 80 : 90, isBackground: true, background: (e10) => t4.highestSurface(e10), contrastCurve: new tZ(1, 1, 3, 7), toneDeltaPair: (e10) => new tQ(t4.secondaryFixed, t4.secondaryFixedDim, 10, "lighter", true) }), t4.secondaryFixedDim = tJ.fromPalette({ name: "secondary_fixed_dim", palette: (e10) => e10.secondaryPalette, tone: (e10) => t1(e10) ? 70 : 80, isBackground: true, background: (e10) => t4.highestSurface(e10), contrastCurve: new tZ(1, 1, 3, 7), toneDeltaPair: (e10) => new tQ(t4.secondaryFixed, t4.secondaryFixedDim, 10, "lighter", true) }), t4.onSecondaryFixed = tJ.fromPalette({ name: "on_secondary_fixed", palette: (e10) => e10.secondaryPalette, tone: (e10) => 10, background: (e10) => t4.secondaryFixedDim, secondBackground: (e10) => t4.secondaryFixed, contrastCurve: new tZ(4.5, 7, 11, 21) }), t4.onSecondaryFixedVariant = tJ.fromPalette({ name: "on_secondary_fixed_variant", palette: (e10) => e10.secondaryPalette, tone: (e10) => t1(e10) ? 25 : 30, background: (e10) => t4.secondaryFixedDim, secondBackground: (e10) => t4.secondaryFixed, contrastCurve: new tZ(3, 4.5, 7, 11) }), t4.tertiaryFixed = tJ.fromPalette({ name: "tertiary_fixed", palette: (e10) => e10.tertiaryPalette, tone: (e10) => t1(e10) ? 40 : 90, isBackground: true, background: (e10) => t4.highestSurface(e10), contrastCurve: new tZ(1, 1, 3, 7), toneDeltaPair: (e10) => new tQ(t4.tertiaryFixed, t4.tertiaryFixedDim, 10, "lighter", true) }), t4.tertiaryFixedDim = tJ.fromPalette({ name: "tertiary_fixed_dim", palette: (e10) => e10.tertiaryPalette, tone: (e10) => t1(e10) ? 30 : 80, isBackground: true, background: (e10) => t4.highestSurface(e10), contrastCurve: new tZ(1, 1, 3, 7), toneDeltaPair: (e10) => new tQ(t4.tertiaryFixed, t4.tertiaryFixedDim, 10, "lighter", true) }), t4.onTertiaryFixed = tJ.fromPalette({ name: "on_tertiary_fixed", palette: (e10) => e10.tertiaryPalette, tone: (e10) => t1(e10) ? 100 : 10, background: (e10) => t4.tertiaryFixedDim, secondBackground: (e10) => t4.tertiaryFixed, contrastCurve: new tZ(4.5, 7, 11, 21) }), t4.onTertiaryFixedVariant = tJ.fromPalette({ name: "on_tertiary_fixed_variant", palette: (e10) => e10.tertiaryPalette, tone: (e10) => t1(e10) ? 90 : 30, background: (e10) => t4.tertiaryFixedDim, secondBackground: (e10) => t4.tertiaryFixed, contrastCurve: new tZ(3, 4.5, 7, 11) });
class t5 {
  static fromInt(e10) {
    let t10 = tG.fromInt(e10);
    return t5.fromHct(t10);
  }
  static fromHct(e10) {
    return new t5(e10.hue, e10.chroma, e10);
  }
  static fromHueAndChroma(e10, t10) {
    return new t5(e10, t10, t5.createKeyColor(e10, t10));
  }
  constructor(e10, t10, r10) {
    this.hue = e10, this.chroma = t10, this.keyColor = r10, this.cache = /* @__PURE__ */ new Map();
  }
  static createKeyColor(e10, t10) {
    let r10 = tG.from(e10, t10, 50), n10 = Math.abs(r10.chroma - t10);
    for (let a2 = 1; a2 < 50 && Math.round(t10) !== Math.round(r10.chroma); a2 += 1) {
      let o2 = tG.from(e10, t10, 50 + a2), i2 = Math.abs(o2.chroma - t10);
      i2 < n10 && (n10 = i2, r10 = o2);
      let s2 = tG.from(e10, t10, 50 - a2), l2 = Math.abs(s2.chroma - t10);
      l2 < n10 && (n10 = l2, r10 = s2);
    }
    return r10;
  }
  tone(e10) {
    let t10 = this.cache.get(e10);
    return void 0 === t10 && (t10 = tG.from(this.hue, this.chroma, e10).toInt(), this.cache.set(e10, t10)), t10;
  }
  getHct(e10) {
    return tG.fromInt(this.tone(e10));
  }
}
class t3 {
  static of(e10) {
    return new t3(e10, false);
  }
  static contentOf(e10) {
    return new t3(e10, true);
  }
  static fromColors(e10) {
    return t3.createPaletteFromColors(false, e10);
  }
  static contentFromColors(e10) {
    return t3.createPaletteFromColors(true, e10);
  }
  static createPaletteFromColors(e10, t10) {
    let r10 = new t3(t10.primary, e10);
    if (t10.secondary) {
      let n10 = new t3(t10.secondary, e10);
      r10.a2 = n10.a1;
    }
    if (t10.tertiary) {
      let n10 = new t3(t10.tertiary, e10);
      r10.a3 = n10.a1;
    }
    if (t10.error) {
      let n10 = new t3(t10.error, e10);
      r10.error = n10.a1;
    }
    if (t10.neutral) {
      let n10 = new t3(t10.neutral, e10);
      r10.n1 = n10.n1;
    }
    if (t10.neutralVariant) {
      let n10 = new t3(t10.neutralVariant, e10);
      r10.n2 = n10.n2;
    }
    return r10;
  }
  constructor(e10, t10) {
    let r10 = tG.fromInt(e10), n10 = r10.hue, a2 = r10.chroma;
    t10 ? (this.a1 = t5.fromHueAndChroma(n10, a2), this.a2 = t5.fromHueAndChroma(n10, a2 / 3), this.a3 = t5.fromHueAndChroma(n10 + 60, a2 / 2), this.n1 = t5.fromHueAndChroma(n10, Math.min(a2 / 12, 4)), this.n2 = t5.fromHueAndChroma(n10, Math.min(a2 / 6, 8))) : (this.a1 = t5.fromHueAndChroma(n10, Math.max(48, a2)), this.a2 = t5.fromHueAndChroma(n10, 16), this.a3 = t5.fromHueAndChroma(n10 + 60, 24), this.n1 = t5.fromHueAndChroma(n10, 4), this.n2 = t5.fromHueAndChroma(n10, 8)), this.error = t5.fromHueAndChroma(25, 84);
  }
}
function t8(e10) {
  let t10 = 3 === (e10 = e10.replace("#", "")).length, r10 = 6 === e10.length, n10 = 8 === e10.length;
  if (!t10 && !r10 && !n10)
    throw Error("unexpected hex " + e10);
  let a2 = 0, o2 = 0, i2 = 0;
  return t10 ? (a2 = t6(e10.slice(0, 1).repeat(2)), o2 = t6(e10.slice(1, 2).repeat(2)), i2 = t6(e10.slice(2, 3).repeat(2))) : r10 ? (a2 = t6(e10.slice(0, 2)), o2 = t6(e10.slice(2, 4)), i2 = t6(e10.slice(4, 6))) : n10 && (a2 = t6(e10.slice(2, 4)), o2 = t6(e10.slice(4, 6)), i2 = t6(e10.slice(6, 8))), (-16777216 | (255 & a2) << 16 | (255 & o2) << 8 | 255 & i2) >>> 0;
}
function t6(e10) {
  return parseInt(e10, 16);
}
var t9 = function() {
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
      this._insertTag(((t11 = document.createElement("style")).setAttribute("data-emotion", this.key), void 0 !== this.nonce && t11.setAttribute("nonce", this.nonce), t11.appendChild(document.createTextNode("")), t11.setAttribute("data-s", ""), t11));
    }
    var r10 = this.tags[this.tags.length - 1], n10 = 64 === e11.charCodeAt(0) && 105 === e11.charCodeAt(1);
    if (n10 && this._alreadyInsertedOrderInsensitiveRule && console.error("You're attempting to insert the following rule:\n" + e11 + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !n10, this.isSpeedy) {
      var a2 = function(e12) {
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
      r10.appendChild(document.createTextNode(e11));
    this.ctr++;
  }, t10.flush = function() {
    this.tags.forEach(function(e11) {
      return e11.parentNode && e11.parentNode.removeChild(e11);
    }), this.tags = [], this.ctr = 0, this._alreadyInsertedOrderInsensitiveRule = false;
  }, e10;
}(), t7 = "-ms-", re = "-moz-", rt = "-webkit-", rr = "comm", rn = "rule", ra = "decl", ro = "@keyframes", ri = Math.abs, rs = String.fromCharCode, rl = Object.assign;
function rc(e10, t10, r10) {
  return e10.replace(t10, r10);
}
function ru(e10, t10) {
  return e10.indexOf(t10);
}
function rd(e10, t10) {
  return 0 | e10.charCodeAt(t10);
}
function rf(e10, t10, r10) {
  return e10.slice(t10, r10);
}
function rh(e10) {
  return e10.length;
}
function rp(e10, t10) {
  return t10.push(e10), e10;
}
var rm = 1, rg = 1, rv = 0, ry = 0, rb = 0, rw = "";
function rx(e10, t10, r10, n10, a2, o2, i2) {
  return { value: e10, root: t10, parent: r10, type: n10, props: a2, children: o2, line: rm, column: rg, length: i2, return: "" };
}
function rk(e10, t10) {
  return rl(rx("", null, null, "", null, null, 0), e10, { length: -e10.length }, t10);
}
function rM() {
  return rb = ry < rv ? rd(rw, ry++) : 0, rg++, 10 === rb && (rg = 1, rm++), rb;
}
function rC() {
  return rd(rw, ry);
}
function rP(e10) {
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
function r_(e10) {
  return rm = rg = 1, rv = rh(rw = e10), ry = 0, [];
}
function rS(e10) {
  var t10, r10;
  return (t10 = ry - 1, r10 = function e11(t11) {
    for (; rM(); )
      switch (rb) {
        case t11:
          return ry;
        case 34:
        case 39:
          34 !== t11 && 39 !== t11 && e11(rb);
          break;
        case 40:
          41 === t11 && e11(t11);
          break;
        case 92:
          rM();
      }
    return ry;
  }(91 === e10 ? e10 + 2 : 40 === e10 ? e10 + 1 : e10), rf(rw, t10, r10)).trim();
}
function rO(e10, t10, r10, n10, a2, o2, i2, s2, l2, c2, u2) {
  for (var d2 = a2 - 1, f2 = 0 === a2 ? o2 : [""], h2 = f2.length, p2 = 0, m2 = 0, g2 = 0; p2 < n10; ++p2)
    for (var v2 = 0, y2 = rf(e10, d2 + 1, d2 = ri(m2 = i2[p2])), b2 = e10; v2 < h2; ++v2)
      (b2 = (m2 > 0 ? f2[v2] + " " + y2 : rc(y2, /&\f/g, f2[v2])).trim()) && (l2[g2++] = b2);
  return rx(e10, t10, r10, 0 === a2 ? rn : s2, l2, c2, u2);
}
function rT(e10, t10, r10, n10) {
  return rx(e10, t10, r10, ra, rf(e10, 0, n10), rf(e10, n10 + 1, -1), n10);
}
function r$(e10, t10) {
  for (var r10 = "", n10 = e10.length, a2 = 0; a2 < n10; a2++)
    r10 += t10(e10[a2], a2, e10, t10) || "";
  return r10;
}
function rD(e10, t10, r10, n10) {
  switch (e10.type) {
    case "@layer":
      if (e10.children.length)
        break;
    case "@import":
    case ra:
      return e10.return = e10.return || e10.value;
    case rr:
      return "";
    case ro:
      return e10.return = e10.value + "{" + r$(e10.children, n10) + "}";
    case rn:
      e10.value = e10.props.join(",");
  }
  return rh(r10 = r$(e10.children, n10)) ? e10.return = e10.value + "{" + r10 + "}" : "";
}
var rR = function(e10, t10, r10) {
  for (var n10 = 0, a2 = 0; n10 = a2, a2 = rC(), 38 === n10 && 12 === a2 && (t10[r10] = 1), !rP(a2); )
    rM();
  return rf(rw, e10, ry);
}, rI = function(e10, t10) {
  var r10 = -1, n10 = 44;
  do
    switch (rP(n10)) {
      case 0:
        38 === n10 && 12 === rC() && (t10[r10] = 1), e10[r10] += rR(ry - 1, t10, r10);
        break;
      case 2:
        e10[r10] += rS(n10);
        break;
      case 4:
        if (44 === n10) {
          e10[++r10] = 58 === rC() ? "&\f" : "", t10[r10] = e10[r10].length;
          break;
        }
      default:
        e10[r10] += rs(n10);
    }
  while (n10 = rM());
  return e10;
}, rA = function(e10, t10) {
  var r10;
  return r10 = rI(r_(e10), t10), rw = "", r10;
}, rL = /* @__PURE__ */ new WeakMap(), rF = function(e10) {
  if ("rule" === e10.type && e10.parent && !(e10.length < 1)) {
    for (var t10 = e10.value, r10 = e10.parent, n10 = e10.column === r10.column && e10.line === r10.line; "rule" !== r10.type; )
      if (!(r10 = r10.parent))
        return;
    if ((1 !== e10.props.length || 58 === t10.charCodeAt(0) || rL.get(r10)) && !n10) {
      rL.set(e10, true);
      for (var a2 = [], o2 = rA(t10, a2), i2 = r10.props, s2 = 0, l2 = 0; s2 < o2.length; s2++)
        for (var c2 = 0; c2 < i2.length; c2++, l2++)
          e10.props[l2] = a2[s2] ? o2[s2].replace(/&\f/g, i2[c2]) : i2[c2] + " " + o2[s2];
    }
  }
}, rB = function(e10) {
  if ("decl" === e10.type) {
    var t10 = e10.value;
    108 === t10.charCodeAt(0) && 98 === t10.charCodeAt(2) && (e10.return = "", e10.value = "");
  }
}, rj = function(e10) {
  return 105 === e10.type.charCodeAt(1) && 64 === e10.type.charCodeAt(0);
}, rE = function(e10, t10) {
  for (var r10 = e10 - 1; r10 >= 0; r10--)
    if (!rj(t10[r10]))
      return true;
  return false;
}, rV = function(e10) {
  e10.type = "", e10.value = "", e10.return = "", e10.children = "", e10.props = "";
}, rH = function(e10, t10, r10) {
  rj(e10) && (e10.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), rV(e10)) : rE(t10, r10) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), rV(e10)));
}, rz = [function(e10, t10, r10, n10) {
  if (e10.length > -1 && !e10.return)
    switch (e10.type) {
      case ra:
        e10.return = function e11(t11, r11) {
          switch (45 ^ rd(t11, 0) ? (((r11 << 2 ^ rd(t11, 0)) << 2 ^ rd(t11, 1)) << 2 ^ rd(t11, 2)) << 2 ^ rd(t11, 3) : 0) {
            case 5103:
              return rt + "print-" + t11 + t11;
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
              return rt + t11 + t11;
            case 5349:
            case 4246:
            case 4810:
            case 6968:
            case 2756:
              return rt + t11 + re + t11 + t7 + t11 + t11;
            case 6828:
            case 4268:
              return rt + t11 + t7 + t11 + t11;
            case 6165:
              return rt + t11 + t7 + "flex-" + t11 + t11;
            case 5187:
              return rt + t11 + rc(t11, /(\w+).+(:[^]+)/, rt + "box-$1$2" + t7 + "flex-$1$2") + t11;
            case 5443:
              return rt + t11 + t7 + "flex-item-" + rc(t11, /flex-|-self/, "") + t11;
            case 4675:
              return rt + t11 + t7 + "flex-line-pack" + rc(t11, /align-content|flex-|-self/, "") + t11;
            case 5548:
              return rt + t11 + t7 + rc(t11, "shrink", "negative") + t11;
            case 5292:
              return rt + t11 + t7 + rc(t11, "basis", "preferred-size") + t11;
            case 6060:
              return rt + "box-" + rc(t11, "-grow", "") + rt + t11 + t7 + rc(t11, "grow", "positive") + t11;
            case 4554:
              return rt + rc(t11, /([^-])(transform)/g, "$1" + rt + "$2") + t11;
            case 6187:
              return rc(rc(rc(t11, /(zoom-|grab)/, rt + "$1"), /(image-set)/, rt + "$1"), t11, "") + t11;
            case 5495:
            case 3959:
              return rc(t11, /(image-set\([^]*)/, rt + "$1$`$1");
            case 4968:
              return rc(rc(t11, /(.+:)(flex-)?(.*)/, rt + "box-pack:$3" + t7 + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + rt + t11 + t11;
            case 4095:
            case 3583:
            case 4068:
            case 2532:
              return rc(t11, /(.+)-inline(.+)/, rt + "$1$2") + t11;
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
              if (rh(t11) - 1 - r11 > 6)
                switch (rd(t11, r11 + 1)) {
                  case 109:
                    if (45 !== rd(t11, r11 + 4))
                      break;
                  case 102:
                    return rc(t11, /(.+:)(.+)-([^]+)/, "$1" + rt + "$2-$3$1" + re + (108 == rd(t11, r11 + 3) ? "$3" : "$2-$3")) + t11;
                  case 115:
                    return ~ru(t11, "stretch") ? e11(rc(t11, "stretch", "fill-available"), r11) + t11 : t11;
                }
              break;
            case 4949:
              if (115 !== rd(t11, r11 + 1))
                break;
            case 6444:
              switch (rd(t11, rh(t11) - 3 - (~ru(t11, "!important") && 10))) {
                case 107:
                  return rc(t11, ":", ":" + rt) + t11;
                case 101:
                  return rc(t11, /(.+:)([^;!]+)(;|!.+)?/, "$1" + rt + (45 === rd(t11, 14) ? "inline-" : "") + "box$3$1" + rt + "$2$3$1" + t7 + "$2box$3") + t11;
              }
              break;
            case 5936:
              switch (rd(t11, r11 + 11)) {
                case 114:
                  return rt + t11 + t7 + rc(t11, /[svh]\w+-[tblr]{2}/, "tb") + t11;
                case 108:
                  return rt + t11 + t7 + rc(t11, /[svh]\w+-[tblr]{2}/, "tb-rl") + t11;
                case 45:
                  return rt + t11 + t7 + rc(t11, /[svh]\w+-[tblr]{2}/, "lr") + t11;
              }
              return rt + t11 + t7 + t11 + t11;
          }
          return t11;
        }(e10.value, e10.length);
        break;
      case ro:
        return r$([rk(e10, { value: rc(e10.value, "@", "@" + rt) })], n10);
      case rn:
        if (e10.length) {
          var a2, o2;
          return a2 = e10.props, o2 = function(t11) {
            var r11;
            switch (r11 = t11, (r11 = /(::plac\w+|:read-\w+)/.exec(r11)) ? r11[0] : r11) {
              case ":read-only":
              case ":read-write":
                return r$([rk(e10, { props: [rc(t11, /:(read-\w+)/, ":" + re + "$1")] })], n10);
              case "::placeholder":
                return r$([rk(e10, { props: [rc(t11, /:(plac\w+)/, ":" + rt + "input-$1")] }), rk(e10, { props: [rc(t11, /:(plac\w+)/, ":" + re + "$1")] }), rk(e10, { props: [rc(t11, /:(plac\w+)/, t7 + "input-$1")] })], n10);
            }
            return "";
          }, a2.map(o2).join("");
        }
    }
}], rW = function(e10) {
  var t10, r10, n10, a2, o2, i2, s2 = e10.key;
  if (!s2)
    throw Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\nIf multiple caches share the same key they might \"fight\" for each other's style elements.");
  if ("css" === s2) {
    var l2 = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(l2, function(e11) {
      -1 !== e11.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e11), e11.setAttribute("data-s", ""));
    });
  }
  var c2 = e10.stylisPlugins || rz;
  if (/[^a-z-]/.test(s2))
    throw Error('Emotion key must only contain lower case alphabetical characters and - but "' + s2 + '" was passed');
  var u2 = {}, d2 = [];
  a2 = e10.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + s2 + ' "]'), function(e11) {
    for (var t11 = e11.getAttribute("data-emotion").split(" "), r11 = 1; r11 < t11.length; r11++)
      u2[t11[r11]] = true;
    d2.push(e11);
  });
  var f2 = [rF, rB];
  f2.push((n10 = { get compat() {
    return m2.compat;
  } }, function(e11, t11, r11) {
    if ("rule" === e11.type && !n10.compat) {
      var a3 = e11.value.match(/(:first|:nth|:nth-last)-child/g);
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
  }), rH);
  var h2 = (r10 = (t10 = f2.concat(c2, [rD, function(e11) {
    !e11.root && (e11.return ? i2.insert(e11.return) : e11.value && e11.type !== rr && i2.insert(e11.value + "{}"));
  }])).length, function(e11, n11, a3, o3) {
    for (var i3 = "", s3 = 0; s3 < r10; s3++)
      i3 += t10[s3](e11, n11, a3, o3) || "";
    return i3;
  }), p2 = function(e11) {
    var t11, r11;
    return r$((r11 = function e12(t12, r12, n11, a3, o3, i3, s3, l3, c3) {
      for (var u3, d3 = 0, f3 = 0, h3 = s3, p3 = 0, m3 = 0, g2 = 0, v2 = 1, y2 = 1, b2 = 1, w2 = 0, x2 = "", k2 = o3, M2 = i3, C2 = a3, P2 = x2; y2; )
        switch (g2 = w2, w2 = rM()) {
          case 40:
            if (108 != g2 && 58 == rd(P2, h3 - 1)) {
              -1 != ru(P2 += rc(rS(w2), "&", "&\f"), "&\f") && (b2 = -1);
              break;
            }
          case 34:
          case 39:
          case 91:
            P2 += rS(w2);
            break;
          case 9:
          case 10:
          case 13:
          case 32:
            P2 += function(e13) {
              for (; rb = rC(); )
                if (rb < 33)
                  rM();
                else
                  break;
              return rP(e13) > 2 || rP(rb) > 3 ? "" : " ";
            }(g2);
            break;
          case 92:
            P2 += function(e13, t13) {
              for (var r13; --t13 && rM() && !(rb < 48) && !(rb > 102) && (!(rb > 57) || !(rb < 65)) && (!(rb > 70) || !(rb < 97)); )
                ;
              return r13 = ry + (t13 < 6 && 32 == rC() && 32 == rM()), rf(rw, e13, r13);
            }(ry - 1, 7);
            continue;
          case 47:
            switch (rC()) {
              case 42:
              case 47:
                rp(rx(u3 = function(e13, t13) {
                  for (; rM(); )
                    if (e13 + rb === 57)
                      break;
                    else if (e13 + rb === 84 && 47 === rC())
                      break;
                  return "/*" + rf(rw, t13, ry - 1) + "*" + rs(47 === e13 ? e13 : rM());
                }(rM(), ry), r12, n11, rr, rs(rb), rf(u3, 2, -2), 0), c3);
                break;
              default:
                P2 += "/";
            }
            break;
          case 123 * v2:
            l3[d3++] = rh(P2) * b2;
          case 125 * v2:
          case 59:
          case 0:
            switch (w2) {
              case 0:
              case 125:
                y2 = 0;
              case 59 + f3:
                -1 == b2 && (P2 = rc(P2, /\f/g, "")), m3 > 0 && rh(P2) - h3 && rp(m3 > 32 ? rT(P2 + ";", a3, n11, h3 - 1) : rT(rc(P2, " ", "") + ";", a3, n11, h3 - 2), c3);
                break;
              case 59:
                P2 += ";";
              default:
                if (rp(C2 = rO(P2, r12, n11, d3, f3, o3, l3, x2, k2 = [], M2 = [], h3), i3), 123 === w2) {
                  if (0 === f3)
                    e12(P2, r12, C2, C2, k2, i3, h3, l3, M2);
                  else
                    switch (99 === p3 && 110 === rd(P2, 3) ? 100 : p3) {
                      case 100:
                      case 108:
                      case 109:
                      case 115:
                        e12(t12, C2, C2, a3 && rp(rO(t12, C2, C2, 0, 0, o3, l3, x2, o3, k2 = [], h3), M2), o3, M2, h3, l3, a3 ? k2 : M2);
                        break;
                      default:
                        e12(P2, C2, C2, C2, [""], M2, 0, l3, M2);
                    }
                }
            }
            d3 = f3 = m3 = 0, v2 = b2 = 1, x2 = P2 = "", h3 = s3;
            break;
          case 58:
            h3 = 1 + rh(P2), m3 = g2;
          default:
            if (v2 < 1) {
              if (123 == w2)
                --v2;
              else if (125 == w2 && 0 == v2++ && 125 == (rb = ry > 0 ? rd(rw, --ry) : 0, rg--, 10 === rb && (rg = 1, rm--), rb))
                continue;
            }
            switch (P2 += rs(w2), w2 * v2) {
              case 38:
                b2 = f3 > 0 ? 1 : (P2 += "\f", -1);
                break;
              case 44:
                l3[d3++] = (rh(P2) - 1) * b2, b2 = 1;
                break;
              case 64:
                45 === rC() && (P2 += rS(rM())), p3 = rC(), f3 = h3 = rh(x2 = P2 += function(e13) {
                  for (; !rP(rC()); )
                    rM();
                  return rf(rw, e13, ry);
                }(ry)), w2++;
                break;
              case 45:
                45 === g2 && 2 == rh(P2) && (v2 = 0);
            }
        }
      return i3;
    }("", null, null, null, [""], t11 = r_(t11 = e11), 0, [0], t11), rw = "", r11), h2);
  };
  o2 = function(e11, t11, r11, n11) {
    i2 = r11, void 0 !== t11.map && (i2 = { insert: function(e12) {
      r11.insert(e12 + t11.map);
    } }), p2(e11 ? e11 + "{" + t11.styles + "}" : t11.styles), n11 && (m2.inserted[t11.name] = true);
  };
  var m2 = { key: s2, sheet: new t9({ key: s2, container: a2, nonce: e10.nonce, speedy: e10.speedy, prepend: e10.prepend, insertionPoint: e10.insertionPoint }), nonce: e10.nonce, inserted: u2, registered: {}, insert: o2 };
  return m2.sheet.hydrate(d2), m2;
}, rN = function(e10, t10, r10) {
  var n10 = e10.key + "-" + t10.name;
  false === r10 && void 0 === e10.registered[n10] && (e10.registered[n10] = t10.styles);
}, rq = function(e10, t10, r10) {
  rN(e10, t10, r10);
  var n10 = e10.key + "-" + t10.name;
  if (void 0 === e10.inserted[t10.name]) {
    var a2 = t10;
    do
      e10.insert(t10 === a2 ? "." + n10 : "", a2, e10.sheet, true), a2 = a2.next;
    while (void 0 !== a2);
  }
}, rU = "bottom", rY = "right", rG = "left", rX = "auto", rK = ["top", rU, rY, rG], rJ = "start", rZ = "viewport", rQ = "popper", r0 = rK.reduce(function(e10, t10) {
  return e10.concat([t10 + "-" + rJ, t10 + "-end"]);
}, []), r1 = [].concat(rK, [rX]).reduce(function(e10, t10) {
  return e10.concat([t10, t10 + "-" + rJ, t10 + "-end"]);
}, []), r2 = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
function r4(e10) {
  return e10 ? (e10.nodeName || "").toLowerCase() : null;
}
function r5(e10) {
  if (null == e10)
    return window;
  if ("[object Window]" !== e10.toString()) {
    var t10 = e10.ownerDocument;
    return t10 && t10.defaultView || window;
  }
  return e10;
}
function r3(e10) {
  var t10 = r5(e10).Element;
  return e10 instanceof t10 || e10 instanceof Element;
}
function r8(e10) {
  var t10 = r5(e10).HTMLElement;
  return e10 instanceof t10 || e10 instanceof HTMLElement;
}
function r6(e10) {
  if ("undefined" == typeof ShadowRoot)
    return false;
  var t10 = r5(e10).ShadowRoot;
  return e10 instanceof t10 || e10 instanceof ShadowRoot;
}
function r9(e10) {
  return e10.split("-")[0];
}
var r7 = Math.max, ne = Math.min, nt = Math.round;
function nr() {
  var e10 = navigator.userAgentData;
  return null != e10 && e10.brands && Array.isArray(e10.brands) ? e10.brands.map(function(e11) {
    return e11.brand + "/" + e11.version;
  }).join(" ") : navigator.userAgent;
}
function nn() {
  return !/^((?!chrome|android).)*safari/i.test(nr());
}
function na(e10, t10, r10) {
  void 0 === t10 && (t10 = false), void 0 === r10 && (r10 = false);
  var n10 = e10.getBoundingClientRect(), a2 = 1, o2 = 1;
  t10 && r8(e10) && (a2 = e10.offsetWidth > 0 && nt(n10.width) / e10.offsetWidth || 1, o2 = e10.offsetHeight > 0 && nt(n10.height) / e10.offsetHeight || 1);
  var i2 = (r3(e10) ? r5(e10) : window).visualViewport, s2 = !nn() && r10, l2 = (n10.left + (s2 && i2 ? i2.offsetLeft : 0)) / a2, c2 = (n10.top + (s2 && i2 ? i2.offsetTop : 0)) / o2, u2 = n10.width / a2, d2 = n10.height / o2;
  return { width: u2, height: d2, top: c2, right: l2 + u2, bottom: c2 + d2, left: l2, x: l2, y: c2 };
}
function no(e10) {
  return r5(e10).getComputedStyle(e10);
}
function ni(e10) {
  return ((r3(e10) ? e10.ownerDocument : e10.document) || window.document).documentElement;
}
function ns(e10) {
  return "html" === r4(e10) ? e10 : e10.assignedSlot || e10.parentNode || (r6(e10) ? e10.host : null) || ni(e10);
}
function nl(e10) {
  return r8(e10) && "fixed" !== no(e10).position ? e10.offsetParent : null;
}
function nc(e10) {
  for (var t10 = r5(e10), r10 = nl(e10); r10 && ["table", "td", "th"].indexOf(r4(r10)) >= 0 && "static" === no(r10).position; )
    r10 = nl(r10);
  return r10 && ("html" === r4(r10) || "body" === r4(r10) && "static" === no(r10).position) ? t10 : r10 || function(e11) {
    var t11 = /firefox/i.test(nr());
    if (/Trident/i.test(nr()) && r8(e11) && "fixed" === no(e11).position)
      return null;
    var r11 = ns(e11);
    for (r6(r11) && (r11 = r11.host); r8(r11) && 0 > ["html", "body"].indexOf(r4(r11)); ) {
      var n10 = no(r11);
      if ("none" !== n10.transform || "none" !== n10.perspective || "paint" === n10.contain || -1 !== ["transform", "perspective"].indexOf(n10.willChange) || t11 && "filter" === n10.willChange || t11 && n10.filter && "none" !== n10.filter)
        return r11;
      r11 = r11.parentNode;
    }
    return null;
  }(e10) || t10;
}
function nu(e10) {
  return e10.split("-")[1];
}
var nd = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function nf(e10) {
  var t10, r10, n10, a2, o2, i2, s2, l2 = e10.popper, c2 = e10.popperRect, u2 = e10.placement, d2 = e10.variation, f2 = e10.offsets, h2 = e10.position, p2 = e10.gpuAcceleration, m2 = e10.adaptive, g2 = e10.roundOffsets, v2 = e10.isFixed, y2 = f2.x, b2 = void 0 === y2 ? 0 : y2, w2 = f2.y, x2 = void 0 === w2 ? 0 : w2, k2 = "function" == typeof g2 ? g2({ x: b2, y: x2 }) : { x: b2, y: x2 };
  b2 = k2.x, x2 = k2.y;
  var M2 = f2.hasOwnProperty("x"), C2 = f2.hasOwnProperty("y"), P2 = rG, _2 = "top", S2 = window;
  if (m2) {
    var O2 = nc(l2), T2 = "clientHeight", $2 = "clientWidth";
    O2 === r5(l2) && "static" !== no(O2 = ni(l2)).position && "absolute" === h2 && (T2 = "scrollHeight", $2 = "scrollWidth"), ("top" === u2 || (u2 === rG || u2 === rY) && "end" === d2) && (_2 = rU, x2 -= (v2 && O2 === S2 && S2.visualViewport ? S2.visualViewport.height : O2[T2]) - c2.height, x2 *= p2 ? 1 : -1), (u2 === rG || ("top" === u2 || u2 === rU) && "end" === d2) && (P2 = rY, b2 -= (v2 && O2 === S2 && S2.visualViewport ? S2.visualViewport.width : O2[$2]) - c2.width, b2 *= p2 ? 1 : -1);
  }
  var D2 = Object.assign({ position: h2 }, m2 && nd), R2 = true === g2 ? (t10 = { x: b2, y: x2 }, r10 = r5(l2), n10 = t10.x, a2 = t10.y, { x: nt(n10 * (o2 = r10.devicePixelRatio || 1)) / o2 || 0, y: nt(a2 * o2) / o2 || 0 }) : { x: b2, y: x2 };
  return (b2 = R2.x, x2 = R2.y, p2) ? Object.assign({}, D2, ((s2 = {})[_2] = C2 ? "0" : "", s2[P2] = M2 ? "0" : "", s2.transform = 1 >= (S2.devicePixelRatio || 1) ? "translate(" + b2 + "px, " + x2 + "px)" : "translate3d(" + b2 + "px, " + x2 + "px, 0)", s2)) : Object.assign({}, D2, ((i2 = {})[_2] = C2 ? x2 + "px" : "", i2[P2] = M2 ? b2 + "px" : "", i2.transform = "", i2));
}
var nh = { passive: true }, np = { left: "right", right: "left", bottom: "top", top: "bottom" };
function nm(e10) {
  return e10.replace(/left|right|bottom|top/g, function(e11) {
    return np[e11];
  });
}
var ng = { start: "end", end: "start" };
function nv(e10) {
  return e10.replace(/start|end/g, function(e11) {
    return ng[e11];
  });
}
function ny(e10) {
  var t10 = r5(e10);
  return { scrollLeft: t10.pageXOffset, scrollTop: t10.pageYOffset };
}
function nb(e10) {
  return na(ni(e10)).left + ny(e10).scrollLeft;
}
function nw(e10) {
  var t10 = no(e10), r10 = t10.overflow, n10 = t10.overflowX, a2 = t10.overflowY;
  return /auto|scroll|overlay|hidden/.test(r10 + a2 + n10);
}
function nx(e10, t10) {
  void 0 === t10 && (t10 = []);
  var r10, n10 = function e11(t11) {
    return ["html", "body", "#document"].indexOf(r4(t11)) >= 0 ? t11.ownerDocument.body : r8(t11) && nw(t11) ? t11 : e11(ns(t11));
  }(e10), a2 = n10 === (null == (r10 = e10.ownerDocument) ? void 0 : r10.body), o2 = r5(n10), i2 = a2 ? [o2].concat(o2.visualViewport || [], nw(n10) ? n10 : []) : n10, s2 = t10.concat(i2);
  return a2 ? s2 : s2.concat(nx(ns(i2)));
}
function nk(e10) {
  return Object.assign({}, e10, { left: e10.x, top: e10.y, right: e10.x + e10.width, bottom: e10.y + e10.height });
}
function nM(e10, t10, r10) {
  var n10, a2, o2, i2, s2, l2, c2, u2, d2, f2;
  return t10 === rZ ? nk(function(e11, t11) {
    var r11 = r5(e11), n11 = ni(e11), a3 = r11.visualViewport, o3 = n11.clientWidth, i3 = n11.clientHeight, s3 = 0, l3 = 0;
    if (a3) {
      o3 = a3.width, i3 = a3.height;
      var c3 = nn();
      (c3 || !c3 && "fixed" === t11) && (s3 = a3.offsetLeft, l3 = a3.offsetTop);
    }
    return { width: o3, height: i3, x: s3 + nb(e11), y: l3 };
  }(e10, r10)) : r3(t10) ? ((n10 = na(t10, false, "fixed" === r10)).top = n10.top + t10.clientTop, n10.left = n10.left + t10.clientLeft, n10.bottom = n10.top + t10.clientHeight, n10.right = n10.left + t10.clientWidth, n10.width = t10.clientWidth, n10.height = t10.clientHeight, n10.x = n10.left, n10.y = n10.top, n10) : nk((a2 = ni(e10), i2 = ni(a2), s2 = ny(a2), l2 = null == (o2 = a2.ownerDocument) ? void 0 : o2.body, c2 = r7(i2.scrollWidth, i2.clientWidth, l2 ? l2.scrollWidth : 0, l2 ? l2.clientWidth : 0), u2 = r7(i2.scrollHeight, i2.clientHeight, l2 ? l2.scrollHeight : 0, l2 ? l2.clientHeight : 0), d2 = -s2.scrollLeft + nb(a2), f2 = -s2.scrollTop, "rtl" === no(l2 || i2).direction && (d2 += r7(i2.clientWidth, l2 ? l2.clientWidth : 0) - c2), { width: c2, height: u2, x: d2, y: f2 }));
}
function nC(e10) {
  var t10, r10 = e10.reference, n10 = e10.element, a2 = e10.placement, o2 = a2 ? r9(a2) : null, i2 = a2 ? nu(a2) : null, s2 = r10.x + r10.width / 2 - n10.width / 2, l2 = r10.y + r10.height / 2 - n10.height / 2;
  switch (o2) {
    case "top":
      t10 = { x: s2, y: r10.y - n10.height };
      break;
    case rU:
      t10 = { x: s2, y: r10.y + r10.height };
      break;
    case rY:
      t10 = { x: r10.x + r10.width, y: l2 };
      break;
    case rG:
      t10 = { x: r10.x - n10.width, y: l2 };
      break;
    default:
      t10 = { x: r10.x, y: r10.y };
  }
  var c2 = o2 ? ["top", "bottom"].indexOf(o2) >= 0 ? "x" : "y" : null;
  if (null != c2) {
    var u2 = "y" === c2 ? "height" : "width";
    switch (i2) {
      case rJ:
        t10[c2] = t10[c2] - (r10[u2] / 2 - n10[u2] / 2);
        break;
      case "end":
        t10[c2] = t10[c2] + (r10[u2] / 2 - n10[u2] / 2);
    }
  }
  return t10;
}
function nP(e10, t10) {
  void 0 === t10 && (t10 = {});
  var r10, n10, a2, o2, i2, s2, l2, c2, u2 = t10, d2 = u2.placement, f2 = void 0 === d2 ? e10.placement : d2, h2 = u2.strategy, p2 = void 0 === h2 ? e10.strategy : h2, m2 = u2.boundary, g2 = u2.rootBoundary, v2 = u2.elementContext, y2 = void 0 === v2 ? rQ : v2, b2 = u2.altBoundary, w2 = u2.padding, x2 = void 0 === w2 ? 0 : w2, k2 = Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, "number" != typeof x2 ? x2 : rK.reduce(function(e11, t11) {
    return e11[t11] = x2, e11;
  }, {})), M2 = e10.rects.popper, C2 = e10.elements[void 0 !== b2 && b2 ? y2 === rQ ? "reference" : rQ : y2], P2 = (r10 = r3(C2) ? C2 : C2.contextElement || ni(e10.elements.popper), n10 = void 0 === m2 ? "clippingParents" : m2, a2 = void 0 === g2 ? rZ : g2, l2 = (s2 = [].concat("clippingParents" === n10 ? (o2 = nx(ns(r10)), r3(i2 = ["absolute", "fixed"].indexOf(no(r10).position) >= 0 && r8(r10) ? nc(r10) : r10) ? o2.filter(function(e11) {
    return r3(e11) && function(e12, t11) {
      var r11 = t11.getRootNode && t11.getRootNode();
      if (e12.contains(t11))
        return true;
      if (r11 && r6(r11)) {
        var n11 = t11;
        do {
          if (n11 && e12.isSameNode(n11))
            return true;
          n11 = n11.parentNode || n11.host;
        } while (n11);
      }
      return false;
    }(e11, i2) && "body" !== r4(e11);
  }) : []) : [].concat(n10), [a2]))[0], (c2 = s2.reduce(function(e11, t11) {
    var n11 = nM(r10, t11, p2);
    return e11.top = r7(n11.top, e11.top), e11.right = ne(n11.right, e11.right), e11.bottom = ne(n11.bottom, e11.bottom), e11.left = r7(n11.left, e11.left), e11;
  }, nM(r10, l2, p2))).width = c2.right - c2.left, c2.height = c2.bottom - c2.top, c2.x = c2.left, c2.y = c2.top, c2), _2 = na(e10.elements.reference), S2 = nC({ reference: _2, element: M2, strategy: "absolute", placement: f2 }), O2 = nk(Object.assign({}, M2, S2)), T2 = y2 === rQ ? O2 : _2, $2 = { top: P2.top - T2.top + k2.top, bottom: T2.bottom - P2.bottom + k2.bottom, left: P2.left - T2.left + k2.left, right: T2.right - P2.right + k2.right }, D2 = e10.modifiersData.offset;
  if (y2 === rQ && D2) {
    var R2 = D2[f2];
    Object.keys($2).forEach(function(e11) {
      var t11 = [rY, rU].indexOf(e11) >= 0 ? 1 : -1, r11 = ["top", rU].indexOf(e11) >= 0 ? "y" : "x";
      $2[e11] += R2[r11] * t11;
    });
  }
  return $2;
}
let n_ = { name: "flip", enabled: true, phase: "main", fn: function(e10) {
  var t10 = e10.state, r10 = e10.options, n10 = e10.name;
  if (!t10.modifiersData[n10]._skip) {
    for (var a2 = r10.mainAxis, o2 = void 0 === a2 || a2, i2 = r10.altAxis, s2 = void 0 === i2 || i2, l2 = r10.fallbackPlacements, c2 = r10.padding, u2 = r10.boundary, d2 = r10.rootBoundary, f2 = r10.altBoundary, h2 = r10.flipVariations, p2 = void 0 === h2 || h2, m2 = r10.allowedAutoPlacements, g2 = t10.options.placement, v2 = r9(g2) === g2, y2 = l2 || (v2 || !p2 ? [nm(g2)] : function(e11) {
      if (r9(e11) === rX)
        return [];
      var t11 = nm(e11);
      return [nv(e11), t11, nv(t11)];
    }(g2)), b2 = [g2].concat(y2).reduce(function(e11, r11) {
      var n11, a3, o3, i3, s3, l3, f3, h3, g3, v3, y3, b3;
      return e11.concat(r9(r11) === rX ? (a3 = (n11 = { placement: r11, boundary: u2, rootBoundary: d2, padding: c2, flipVariations: p2, allowedAutoPlacements: m2 }).placement, o3 = n11.boundary, i3 = n11.rootBoundary, s3 = n11.padding, l3 = n11.flipVariations, h3 = void 0 === (f3 = n11.allowedAutoPlacements) ? r1 : f3, 0 === (y3 = (v3 = (g3 = nu(a3)) ? l3 ? r0 : r0.filter(function(e12) {
        return nu(e12) === g3;
      }) : rK).filter(function(e12) {
        return h3.indexOf(e12) >= 0;
      })).length && (y3 = v3), Object.keys(b3 = y3.reduce(function(e12, r12) {
        return e12[r12] = nP(t10, { placement: r12, boundary: o3, rootBoundary: i3, padding: s3 })[r9(r12)], e12;
      }, {})).sort(function(e12, t11) {
        return b3[e12] - b3[t11];
      })) : r11);
    }, []), w2 = t10.rects.reference, x2 = t10.rects.popper, k2 = /* @__PURE__ */ new Map(), M2 = true, C2 = b2[0], P2 = 0; P2 < b2.length; P2++) {
      var _2 = b2[P2], S2 = r9(_2), O2 = nu(_2) === rJ, T2 = ["top", rU].indexOf(S2) >= 0, $2 = T2 ? "width" : "height", D2 = nP(t10, { placement: _2, boundary: u2, rootBoundary: d2, altBoundary: f2, padding: c2 }), R2 = T2 ? O2 ? rY : rG : O2 ? rU : "top";
      w2[$2] > x2[$2] && (R2 = nm(R2));
      var I2 = nm(R2), A2 = [];
      if (o2 && A2.push(D2[S2] <= 0), s2 && A2.push(D2[R2] <= 0, D2[I2] <= 0), A2.every(function(e11) {
        return e11;
      })) {
        C2 = _2, M2 = false;
        break;
      }
      k2.set(_2, A2);
    }
    if (M2)
      for (var L2 = p2 ? 3 : 1, F2 = function(e11) {
        var t11 = b2.find(function(t12) {
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
    t10.placement !== C2 && (t10.modifiersData[n10]._skip = true, t10.placement = C2, t10.reset = true);
  }
}, requiresIfExists: ["offset"], data: { _skip: false } };
var nS = { placement: "bottom", modifiers: [], strategy: "absolute" };
function nO() {
  for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++)
    t10[r10] = arguments[r10];
  return !t10.some(function(e11) {
    return !(e11 && "function" == typeof e11.getBoundingClientRect);
  });
}
var nT = (Y = void 0 === (U = (q = { defaultModifiers: [{ name: "eventListeners", enabled: true, phase: "write", fn: function() {
}, effect: function(e10) {
  var t10 = e10.state, r10 = e10.instance, n10 = e10.options, a2 = n10.scroll, o2 = void 0 === a2 || a2, i2 = n10.resize, s2 = void 0 === i2 || i2, l2 = r5(t10.elements.popper), c2 = [].concat(t10.scrollParents.reference, t10.scrollParents.popper);
  return o2 && c2.forEach(function(e11) {
    e11.addEventListener("scroll", r10.update, nh);
  }), s2 && l2.addEventListener("resize", r10.update, nh), function() {
    o2 && c2.forEach(function(e11) {
      e11.removeEventListener("scroll", r10.update, nh);
    }), s2 && l2.removeEventListener("resize", r10.update, nh);
  };
}, data: {} }, { name: "popperOffsets", enabled: true, phase: "read", fn: function(e10) {
  var t10 = e10.state, r10 = e10.name;
  t10.modifiersData[r10] = nC({ reference: t10.rects.reference, element: t10.rects.popper, strategy: "absolute", placement: t10.placement });
}, data: {} }, { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: function(e10) {
  var t10 = e10.state, r10 = e10.options, n10 = r10.gpuAcceleration, a2 = r10.adaptive, o2 = r10.roundOffsets, i2 = void 0 === o2 || o2, s2 = { placement: r9(t10.placement), variation: nu(t10.placement), popper: t10.elements.popper, popperRect: t10.rects.popper, gpuAcceleration: void 0 === n10 || n10, isFixed: "fixed" === t10.options.strategy };
  null != t10.modifiersData.popperOffsets && (t10.styles.popper = Object.assign({}, t10.styles.popper, nf(Object.assign({}, s2, { offsets: t10.modifiersData.popperOffsets, position: t10.options.strategy, adaptive: void 0 === a2 || a2, roundOffsets: i2 })))), null != t10.modifiersData.arrow && (t10.styles.arrow = Object.assign({}, t10.styles.arrow, nf(Object.assign({}, s2, { offsets: t10.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: i2 })))), t10.attributes.popper = Object.assign({}, t10.attributes.popper, { "data-popper-placement": t10.placement });
}, data: {} }, { name: "applyStyles", enabled: true, phase: "write", fn: function(e10) {
  var t10 = e10.state;
  Object.keys(t10.elements).forEach(function(e11) {
    var r10 = t10.styles[e11] || {}, n10 = t10.attributes[e11] || {}, a2 = t10.elements[e11];
    r8(a2) && r4(a2) && (Object.assign(a2.style, r10), Object.keys(n10).forEach(function(e12) {
      var t11 = n10[e12];
      false === t11 ? a2.removeAttribute(e12) : a2.setAttribute(e12, true === t11 ? "" : t11);
    }));
  });
}, effect: function(e10) {
  var t10 = e10.state, r10 = { popper: { position: t10.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t10.elements.popper.style, r10.popper), t10.styles = r10, t10.elements.arrow && Object.assign(t10.elements.arrow.style, r10.arrow), function() {
    Object.keys(t10.elements).forEach(function(e11) {
      var n10 = t10.elements[e11], a2 = t10.attributes[e11] || {}, o2 = Object.keys(t10.styles.hasOwnProperty(e11) ? t10.styles[e11] : r10[e11]).reduce(function(e12, t11) {
        return e12[t11] = "", e12;
      }, {});
      r8(n10) && r4(n10) && (Object.assign(n10.style, o2), Object.keys(a2).forEach(function(e12) {
        n10.removeAttribute(e12);
      }));
    });
  };
}, requires: ["computeStyles"] }] }).defaultModifiers) ? [] : U, X = void 0 === (G = q.defaultOptions) ? nS : G, function(e10, t10, r10) {
  void 0 === r10 && (r10 = X);
  var n10, a2, o2 = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, nS, X), modifiersData: {}, elements: { reference: e10, popper: t10 }, attributes: {}, styles: {} }, i2 = [], s2 = false, l2 = { state: o2, setOptions: function(r11) {
    var n11, a3, s3, u2, d2, f2 = "function" == typeof r11 ? r11(o2.options) : r11;
    c2(), o2.options = Object.assign({}, X, o2.options, f2), o2.scrollParents = { reference: r3(e10) ? nx(e10) : e10.contextElement ? nx(e10.contextElement) : [], popper: nx(t10) };
    var h2 = (a3 = Object.keys(n11 = [].concat(Y, o2.options.modifiers).reduce(function(e11, t11) {
      var r12 = e11[t11.name];
      return e11[t11.name] = r12 ? Object.assign({}, r12, t11, { options: Object.assign({}, r12.options, t11.options), data: Object.assign({}, r12.data, t11.data) }) : t11, e11;
    }, {})).map(function(e11) {
      return n11[e11];
    }), s3 = /* @__PURE__ */ new Map(), u2 = /* @__PURE__ */ new Set(), d2 = [], a3.forEach(function(e11) {
      s3.set(e11.name, e11);
    }), a3.forEach(function(e11) {
      u2.has(e11.name) || function e12(t11) {
        u2.add(t11.name), [].concat(t11.requires || [], t11.requiresIfExists || []).forEach(function(t12) {
          if (!u2.has(t12)) {
            var r12 = s3.get(t12);
            r12 && e12(r12);
          }
        }), d2.push(t11);
      }(e11);
    }), r2.reduce(function(e11, t11) {
      return e11.concat(d2.filter(function(e12) {
        return e12.phase === t11;
      }));
    }, []));
    return o2.orderedModifiers = h2.filter(function(e11) {
      return e11.enabled;
    }), o2.orderedModifiers.forEach(function(e11) {
      var t11 = e11.name, r12 = e11.options, n12 = e11.effect;
      if ("function" == typeof n12) {
        var a4 = n12({ state: o2, name: t11, instance: l2, options: void 0 === r12 ? {} : r12 });
        i2.push(a4 || function() {
        });
      }
    }), l2.update();
  }, forceUpdate: function() {
    if (!s2) {
      var e11, t11, r11, n11, a3, i3, c3, u2, d2, f2, h2, p2, m2, g2, v2, y2 = o2.elements, b2 = y2.reference, w2 = y2.popper;
      if (nO(b2, w2)) {
        o2.rects = { reference: (t11 = nc(w2), r11 = "fixed" === o2.options.strategy, n11 = r8(t11), u2 = r8(t11) && (i3 = nt((a3 = t11.getBoundingClientRect()).width) / t11.offsetWidth || 1, c3 = nt(a3.height) / t11.offsetHeight || 1, 1 !== i3 || 1 !== c3), d2 = ni(t11), f2 = na(b2, u2, r11), h2 = { scrollLeft: 0, scrollTop: 0 }, p2 = { x: 0, y: 0 }, (n11 || !n11 && !r11) && (("body" !== r4(t11) || nw(d2)) && (h2 = (e11 = t11) !== r5(e11) && r8(e11) ? { scrollLeft: e11.scrollLeft, scrollTop: e11.scrollTop } : ny(e11)), r8(t11) ? (p2 = na(t11, true), p2.x += t11.clientLeft, p2.y += t11.clientTop) : d2 && (p2.x = nb(d2))), { x: f2.left + h2.scrollLeft - p2.x, y: f2.top + h2.scrollTop - p2.y, width: f2.width, height: f2.height }), popper: (m2 = na(w2), g2 = w2.offsetWidth, v2 = w2.offsetHeight, 1 >= Math.abs(m2.width - g2) && (g2 = m2.width), 1 >= Math.abs(m2.height - v2) && (v2 = m2.height), { x: w2.offsetLeft, y: w2.offsetTop, width: g2, height: v2 }) }, o2.reset = false, o2.placement = o2.options.placement, o2.orderedModifiers.forEach(function(e12) {
          return o2.modifiersData[e12.name] = Object.assign({}, e12.data);
        });
        for (var x2 = 0; x2 < o2.orderedModifiers.length; x2++) {
          if (true === o2.reset) {
            o2.reset = false, x2 = -1;
            continue;
          }
          var k2 = o2.orderedModifiers[x2], M2 = k2.fn, C2 = k2.options, P2 = void 0 === C2 ? {} : C2, _2 = k2.name;
          "function" == typeof M2 && (o2 = M2({ state: o2, options: P2, name: _2, instance: l2 }) || o2);
        }
      }
    }
  }, update: (n10 = function() {
    return new Promise(function(e11) {
      l2.forceUpdate(), e11(o2);
    });
  }, function() {
    return a2 || (a2 = new Promise(function(e11) {
      Promise.resolve().then(function() {
        a2 = void 0, e11(n10());
      });
    })), a2;
  }), destroy: function() {
    c2(), s2 = true;
  } };
  if (!nO(e10, t10))
    return l2;
  function c2() {
    i2.forEach(function(e11) {
      return e11();
    }), i2 = [];
  }
  return l2.setOptions(r10).then(function(e11) {
    !s2 && r10.onFirstUpdate && r10.onFirstUpdate(e11);
  }), l2;
});
function n$() {
  return new Proxy({}, { get: (e10, t10) => t10 });
}
let nD = n$(), nR = { paddingX: [nD.paddingLeft, nD.paddingRight], paddingY: [nD.paddingTop, nD.paddingBottom], marginX: [nD.marginInlineStart, nD.marginInlineEnd], marginY: [nD.marginTop, nD.marginBottom], borderX: [nD.borderLeft, nD.borderRight], borderY: [nD.borderTop, nD.borderBottom], color: [nD.color, nD.fill], borderTopRadius: [nD.borderTopLeftRadius, nD.borderTopRightRadius], borderBottomRadius: [nD.borderBottomLeftRadius, nD.borderBottomRightRadius], borderRightRadius: [nD.borderTopRightRadius, nD.borderBottomRightRadius], borderLeftRadius: [nD.borderTopLeftRadius, nD.borderBottomLeftRadius], backgroundGradient: [nD.backgroundImage], boxSize: [nD.width, nD.height] }, nI = n$(), nA = { font: nI.fontFamily, shadow: nI.boxShadow, rounded: nI.borderRadius, roundedTop: nI.borderTopRadius, roundedBottom: nI.borderBottomRadius, roundedLeft: nI.borderLeftRadius, roundedRight: nI.borderRightRadius, bg: nI.background, bgImage: nI.backgroundImage, bgSize: nI.backgroundSize, bgPosition: nI.backgroundPosition, bgRepeat: nI.backgroundRepeat, bgAttachment: nI.backgroundAttachment, bgColor: nI.backgroundColor, bgGradient: nI.backgroundGradient, bgClip: nI.backgroundClip, pos: nI.position, p: nI.padding, pt: nI.paddingTop, pr: nI.paddingRight, pl: nI.paddingLeft, pb: nI.paddingBottom, ps: nI.paddingInlineStart, pe: nI.paddingInlineEnd, px: nI.paddingX, py: nI.paddingY, m: nI.margin, mt: nI.marginTop, mr: nI.marginRight, ml: nI.marginLeft, mb: nI.marginBottom, ms: nI.marginInlineStart, me: nI.marginInlineEnd, mx: nI.marginX, my: nI.marginY, w: nI.width, minW: nI.minWidth, maxW: nI.maxWidth, h: nI.height, minH: nI.minHeight, maxH: nI.maxHeight }, nL = n$(), nF = function() {
  for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++)
    t10[r10] = arguments[r10];
  let n10 = [...t10];
  for (let e11 of t10)
    nA[e11] && n10.push(nA[e11]);
  return n10;
}, nB = { _rtl: "[dir=rtl] &, &[dir=rtl]", _ltr: "[dir=ltr] &, &[dir=ltr]", _dark: "&[data-theme=dark]", _light: "&[data-theme=light]" };
const _nj = class _nj {
  constructor(e10) {
    this.opt = e10;
  }
  processAll(e10) {
    let t10 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], r10 = [], { state: n10, extends: a2, ...o2 } = e10;
    if (a2)
      for (let e11 of a2)
        r10.push(...this.processAll(e11, t10));
    if (n10) {
      let e11 = {}, t11 = {};
      _nj.walkStateValues(n10, (r11, n11, a3) => {
        var o3;
        let i2 = `--${this.opt.varPrefix}-state-${n11.join("-")}`, s2 = null !== (o3 = M(n11)) && void 0 !== o3 ? o3 : "", l2 = {};
        this.process(l2, s2, r11, false), e11[i2] = l2[s2], C(t11, [...a3, s2], `var(${i2})`);
      }), r10.push(e11), r10.push(...this.processAll(t11));
    }
    if (!P(o2)) {
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
    let l2 = t10;
    if (k(r10)) {
      e10[l2 = null !== (a2 = _nj.convertSelector(l2)) && void 0 !== a2 ? a2 : l2] = null !== (o2 = e10[l2]) && void 0 !== o2 ? o2 : {}, this.processTo(e10[l2], r10);
      return;
    }
    if (s2 && nR[l2 = null !== (i2 = nA[l2]) && void 0 !== i2 ? i2 : l2]) {
      for (let t11 of nR[l2])
        e10[t11] = this.opt.processValue(t11, r10);
      return;
    }
    e10[l2] = this.opt.processValue(l2, r10);
  }
};
__publicField(_nj, "supportedPseudoClasses", { active: "active", after: "after", anyLink: "any-link", before: "before", blank: "blank", checked: "checked", current: "current", default: "default", defined: "defined", disabled: "disabled", empty: "empty", enabled: "enabled", first: "first", firstChild: "first-child", firstLetter: "first-letter", firstLine: "first-line", firstOfType: "first-of-type", focus: "focus", focusVisible: "focus-visible", focusWithin: "focus-within", fullscreen: "fullscreen", future: "future", hover: "hover", inRange: "in-range", indeterminate: "indeterminate", invalid: "invalid", lastChild: "last-child", lastOfType: "last-of-type", left: "left", link: "link", localLink: "local-link", nthCol: "nth-col", nthLastCol: "nth-last-col", onlyChild: "only-child", onlyOfType: "only-of-type", optional: "optional", outOfRange: "out-of-range", past: "past", paused: "paused", pictureInPicture: "picture-in-picture", placeholderShown: "placeholder-shown", playing: "playing", readOnly: "read-only", readWrite: "read-write", required: "required", right: "right", root: "root", scope: "scope", target: "target", targetWithin: "target-within", userInvalid: "user-invalid", userValid: "user-valid", valid: "valid", visited: "visited" });
__publicField(_nj, "convertSelector", (e10) => {
  if (nB[e10])
    return nB[e10];
  let t10 = e10;
  if (t10.startsWith("$") || t10.endsWith("$") || t10.startsWith("_")) {
    let e11 = "", r10 = "";
    if (t10.startsWith("_") ? (e11 = "&", t10 = t10.slice(1)) : t10.startsWith("$") ? (e11 = "& ", t10 = t10.slice(1)) : (r10 = " &", t10 = t10.slice(0, t10.length - 1)), t10.startsWith("data") || t10.startsWith("aria")) {
      let [n10, a2] = t10.split("__");
      return a2 ? `${e11}[${w(n10)}='${w(a2)}']${r10}` : `${e11}[${w(n10)}]${r10}`;
    }
    if ("&" === e11) {
      if (t10.startsWith("$"))
        return `${e11}::${t10.slice(1)}`;
      if (_nj.supportedPseudoClasses[t10]) {
        let r12 = _nj.supportedPseudoClasses[t10];
        return `${e11}:${r12}, ${e11}[data-${r12}]:not([data-${r12}='false']), ${e11}.${r12}`;
      }
      let [r11, n10] = t10.split("__"), a2 = w(r11);
      return n10 ? `${e11}[data-${a2}='${w(n10)}']` : `${e11}[data-${a2}]:not([data-${a2}='false'])`;
    }
  }
});
__publicField(_nj, "walkStateValues", function(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { default: {}, selectorPath: [], path: [] }, { $: n10, ...a2 } = e10;
  for (let e11 in a2) {
    var o2;
    let i2 = a2[e11], s2 = null !== (o2 = a2.default) && void 0 !== o2 ? o2 : r10.default, l2 = null != n10 ? n10 : x(s2, [...r10.path.slice(1), "$"]), c2 = l2 ? [...r10.selectorPath, l2] : r10.selectorPath, u2 = [...r10.path, e11];
    if (k(i2)) {
      _nj.walkStateValues(i2, t10, { path: u2, selectorPath: c2, default: s2 });
      continue;
    }
    t10(i2, u2, c2);
  }
});
let nj = _nj;
var nE = ((K = nE || {}).var = "var", K.mixin = "mixin", K);
class nV {
  static create(e10, t10) {
    let { value: r10, on: n10, transform: a2 } = t10;
    return { type: e10, value: r10, on: n10, transform: a2, __Tokens: void 0, __ValueType: void 0, __CSSTokens: void 0 };
  }
  static color(e10) {
    return nV.create("var", { value: e10, on: nF(nL.color, nL.bgColor, nL.outlineColor, nL.borderColor, nL.accentColor, nL.fill, nL.stroke), transform: (e11, t10) => _(e11) ? { default: `var(${t10(e11)})`, rgb: `var(${t10(`${e11}/rgb`)})` } : { default: `rgb(${e11[0]}, ${e11[1]}, ${e11[2]})`, rgb: `${e11[0]} ${e11[1]} ${e11[2]}` }, fallback: "" });
  }
  static space(e10) {
    return nV.create("var", { value: e10, on: nF(nL.gap, nL.rowGap, nL.columnGap, nL.top, nL.right, nL.bottom, nL.left, nL.m, nL.ms, nL.me, nL.mt, nL.mr, nL.mb, nL.ml, nL.mx, nL.my, nL.p, nL.ps, nL.pe, nL.pt, nL.pr, nL.pb, nL.pl, nL.px, nL.py) });
  }
  static boxSize(e10) {
    return nV.create("var", { value: e10, on: nF(nL.w, nL.minW, nL.maxW, nL.h, nL.minH, nL.maxH, nL.boxSize), fallback: 0 });
  }
  static fontSize(e10) {
    return nV.create("var", { value: e10, on: nF(nL.fontSize), fallback: 0 });
  }
  static lineHeight(e10) {
    return nV.create("var", { value: e10, on: nF(nL.lineHeight), fallback: 0 });
  }
  static rounded(e10) {
    return nV.create("var", { value: e10, fallback: 0, on: nF(nL.rounded, nL.roundedTop, nL.roundedBottom, nL.roundedLeft, nL.roundedRight, nD.borderTopLeftRadius, nD.borderTopRightRadius, nD.borderBottomLeftRadius, nD.borderBottomRightRadius, nD.borderTopRightRadius, nD.borderBottomRightRadius, nD.borderTopLeftRadius, nD.borderBottomLeftRadius) });
  }
  static transitionTimingFunction(e10) {
    return nV.create("var", { value: e10, on: nF(nL.transitionTimingFunction) });
  }
  static transitionDuration(e10) {
    return nV.create("var", { value: e10, on: nF(nL.transitionDuration), transform: (e11) => `${e11}ms` });
  }
  static font(e10) {
    return nV.create("var", { value: e10, on: nF(nL.font) });
  }
  static fontWeight(e10) {
    return nV.create("var", { value: e10, on: nF(nL.fontWeight) });
  }
  static letterSpacing(e10) {
    return nV.create("var", { value: e10, on: nF(nL.letterSpacing) });
  }
  static shadow(e10) {
    return nV.create("var", { value: e10, on: nF(nL.shadow) });
  }
  static customMixin(e10, t10) {
    return nV.create("mixin", { value: t10, on: [e10] });
  }
  static mixin(e10) {
    return { ...e10, __mixin: true };
  }
}
let nH = (e10, t10, r10) => {
  let n10 = e10;
  for (let e11 = 0; e11 < t10.length; e11++) {
    var a2;
    let o2 = t10[e11];
    if (e11 === t10.length - 1) {
      n10[o2] = r10;
      continue;
    }
    n10[o2] = null !== (a2 = n10[o2]) && void 0 !== a2 ? a2 : {}, n10 = n10[o2];
  }
};
const _nz = class _nz {
  constructor(e10, { cssVar: t10, transformFallback: r10 }) {
    __publicField(this, "__Tokens");
    __publicField(this, "_values", {});
    __publicField(this, "_cssVarRefs", {});
    _nz.walkValues(e10.value, (n10, a2) => {
      let o2 = a2.join("."), i2 = (n11, a3) => {
        let o3 = e10.transform ? e10.transform(n11, t10) : r10(n11);
        if (T(o3))
          for (let e11 in o3)
            a3(o3[e11], "default" === e11 ? "" : e11);
        else
          a3(o3, "");
      };
      if (C(this._cssVarRefs, [o2], t10(o2)), k(n10))
        for (let e11 in n10)
          i2(n10[e11], (t11, r11) => {
            C(this._values, [`${o2}${r11 ? `/${r11}` : ""}`, e11], t11);
          });
      else
        i2(n10, (e11, t11) => {
          C(this._values, [`${o2}${t11 ? `/${t11}` : ""}`], e11);
        });
    });
  }
  get tokens() {
    return O(this._values);
  }
  get(e10, t10, r10) {
    let n10 = this._values[e10];
    if (T(n10)) {
      var a2;
      return r10 ? n10[t10] : null !== (a2 = n10[t10]) && void 0 !== a2 ? a2 : n10[_nz.defaultMode];
    }
    return r10 ? t10 === _nz.defaultMode ? n10 : void 0 : n10;
  }
  use(e10) {
    let t10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (this._cssVarRefs[e10])
      return t10 ? `${this._cssVarRefs[e10]}` : `var(${this._cssVarRefs[e10]})`;
  }
};
__publicField(_nz, "defaultMode", "_default");
__publicField(_nz, "walkValues", function(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let n10 in e10) {
    let a2 = e10[n10];
    if (k(a2)) {
      if (S(a2, "_default")) {
        t10(a2, [...r10, n10]);
        continue;
      }
      _nz.walkValues(a2, t10, [...r10, n10]);
      continue;
    }
    t10(a2, [...r10, n10]);
  }
});
let nz = _nz;
const _nW = class _nW {
  constructor(e10) {
    __publicField(this, "_values", {});
    _nW.walkValue(e10.value, (e11, t10) => {
      let r10 = t10.join(".");
      C(this._values, [r10], $(e11, "__mixin"));
    });
  }
  get tokens() {
    return O(this._values);
  }
  get(e10) {
    return this._values[e10];
  }
};
__publicField(_nW, "walkValue", function(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let n10 in e10) {
    let a2 = e10[n10];
    if (k(a2)) {
      if (S(a2, "__mixin")) {
        t10(a2, [...r10, n10]);
        continue;
      }
      _nW.walkValue(a2, t10, [...r10, n10]);
      continue;
    }
    t10(a2, [...r10, n10]);
  }
});
let nW = _nW;
let nN = { primary: ["primary"], secondary: ["secondary"], tertiary: ["tertiary"], error: ["error"], warning: ["warning"], success: ["success"], neutral: ["surface", "outline"] }, nq = (e10) => {
  let t10 = x(e10, ["color", "sys"], {});
  return { ...e10, color: { sys: D(nN, (e11) => R(t10, (t11, r10) => I(e11, (e12) => r10.indexOf(e12) > -1))) } };
}, nU = (e10) => (t10) => `rgba(var(${t10}--rgb) / ${e10})`, nY = (e10) => A(e10) && S(e10, "token");
function nG(e10, t10) {
  return Object.assign((e11) => t10(e11), { toString: () => e10, token: e10 });
}
let nX = (e10) => e10.reduce((e11, t10) => Object.assign(e11, { [t10]: true }), {});
const _nK = class _nK {
  constructor(e10, t10 = {}) {
    __publicField(this, "mode");
    __publicField(this, "varPrefix");
    __publicField(this, "cssVars", {});
    __publicField(this, "tokens", {});
    __publicField(this, "propValues", {});
    __publicField(this, "mixins", {});
    __publicField(this, "dp", (e10) => 0 === e10 ? 0 : `calc(${e10} * var(${this.cssVar("space", "dp")}))`);
    __publicField(this, "transformFallback", (e10, t10) => _nK.propsCanBaseDp[e10] && F(t10) ? _nK.propsCanPercent[e10] && 1 > Math.abs(t10) ? `${100 * t10}%` : this.dp(t10) : t10);
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
      if (nY(t10)) {
        let r11 = null === (n10 = this.propValues[e10]) || void 0 === n10 ? void 0 : n10.use(t10.token, true);
        return r11 ? t10(r11) : void 0;
      }
      return null !== (a2 = null === (r10 = this.propValues[e10]) || void 0 === r10 ? void 0 : r10.use(t10)) && void 0 !== a2 ? a2 : this.transformFallback(e10, t10);
    });
    __publicField(this, "unstable_sx", (e10) => new nj({ mixins: this.mixins, varPrefix: this.varPrefix, processValue: this.processValue }).processAll(e10));
    var r10, n10;
    for (let a2 in this.theme = e10, this.varPrefix = null !== (r10 = t10.varPrefix) && void 0 !== r10 ? r10 : "vk", this.mode = null !== (n10 = t10.mode) && void 0 !== n10 ? n10 : "light", C(this.cssVars, [this.cssVar("space", "dp")], "0.1rem"), e10) {
      let t11 = e10[a2];
      if (t11) {
        if (t11.type === nE.var) {
          let e11 = new nz(t11, { cssVar: (e12) => this.cssVar(a2, e12), transformFallback: (e12) => this.transformFallback(t11.on[0], e12) });
          for (let r11 of (this.tokens[a2] = e11, t11.on))
            this.propValues[r11] = e11;
          for (let t12 of e11.tokens)
            for (let r11 of ["light", "dark"]) {
              let n11 = r11 === this.mode ? "_default" : `_${r11}`, o2 = e11.get(t12, n11, true);
              L(o2) || ("_default" === n11 ? C(this.cssVars, [this.cssVar(a2, t12)], o2) : C(this.cssVars, [n11, this.cssVar(a2, t12)], o2));
            }
          continue;
        }
        if (t11.type === nE.mixin) {
          let e11 = new nW(t11);
          for (let r11 of t11.on)
            this.mixins[r11] = e11;
        }
      }
    }
  }
  static create(e10, t10) {
    return new _nK(e10, t10);
  }
  cssVar(e10, t10) {
    return `--${this.varPrefix}-${w(e10)}__${t10.replaceAll("/", "--").replaceAll(".", "__")}`;
  }
  get rootCSSVars() {
    return this.cssVars;
  }
  unstable_css(e10, t10) {
    var r10;
    let n10 = null != t10 ? t10 : {};
    return n10.__emotion_styles = null !== (r10 = n10.__emotion_styles) && void 0 !== r10 ? r10 : tT(this.unstable_sx(t10), null == e10 ? void 0 : e10.registered, {}), n10.__emotion_styles;
  }
  toFigmaTokens() {
    let e10 = { space: { dp: { $type: "sizing", $value: 1 } } }, t10 = {}, r10 = {}, n10 = (e11, t11) => T(t11) ? { $type: e11, $value: D(t11, (t12) => n10(e11, t12).$value) } : _(t11) ? { $type: e11, $value: t11.replace(/var\(([^)]+)\)/g, (e12) => {
      var t12, r11;
      let n11 = null !== (r11 = null === (t12 = e12.slice(4, e12.length - 1).slice(`--${this.varPrefix}-`.length).split("--")[0]) || void 0 === t12 ? void 0 : t12.split("__").map((e13, t13) => 0 === t13 ? B(e13) : e13).join(".")) && void 0 !== r11 ? r11 : "";
      return n11.startsWith("sys.") ? `{${n11}}` : `{seed.${n11}}`;
    }).replace(/calc\(.+\)$/g, (e12) => e12.slice(5, e12.length - 1)) } : { $type: e11, $value: t11 };
    for (let a2 in this.tokens) {
      let o2 = this.tokens[a2], i2 = (i3) => {
        for (let s2 of o2.tokens)
          if (!s2.includes("/")) {
            if (s2.startsWith("sys.")) {
              let e11 = o2.get(s2, "_default"), l2 = o2.get(s2, "_dark");
              nH(t10, [a2, ...s2.split(".")], n10(i3, e11)), e11 !== l2 && nH(r10, [a2, ...s2.split(".")], n10(i3, l2));
            } else
              nH(e10, [a2, ...s2.split(".")], n10(i3, o2.get(s2, "_default")));
          }
      };
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
    for (let e11 in this.mixins) {
      let r11 = this.mixins[e11];
      if (!r11)
        continue;
      let a2 = (a3) => {
        for (let o2 of r11.tokens) {
          let i2 = r11.get(o2);
          if (!i2)
            continue;
          let s2 = this.unstable_sx(i2)[0];
          nH(t10, [e11, ...o2.split(".")], n10(a3, s2));
        }
      };
      "textStyle" === e11 && a2("typography");
    }
    return { seed: e10, base: nq(t10), dark: nq(r10) };
  }
};
__publicField(_nK, "propsCanPercent", nX([...nV.boxSize({}).on]));
__publicField(_nK, "propsCanBaseDp", nX([...nV.boxSize({}).on, ...nV.space({}).on, ...nV.fontSize({}).on, ...nV.letterSpacing({}).on, ...nV.lineHeight({}).on, ...nV.rounded({}).on]));
let nK = _nK;
let nJ = { shadow: nV.shadow({ 0: { _default: "0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0)", _dark: "0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0)" }, 1: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)", _dark: "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 2: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)", _dark: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 3: { _default: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)" }, 4: { _default: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)" }, 5: { _default: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)", _dark: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)" } }), elevation: nV.customMixin("elevation", { 0: nV.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "0", _hover: { shadow: "1" } }), 1: nV.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "1", _hover: { shadow: "2" } }), 2: nV.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "2", _hover: { shadow: "3" } }), 3: nV.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "3", _hover: { shadow: "4" } }), 4: nV.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "4", _hover: { shadow: "5" } }) }) }, nZ = (e10, t10, r10, n10) => Object.assign(td(e10, t10, r10, n10), { toString: () => `cubic-bezier(${e10}, ${t10}, ${r10}, ${n10})` }), nQ = { duration: { sm1: 50, sm2: 100, sm3: 150, sm4: 200, md1: 250, md2: 300, md3: 350, md4: 400, lg1: 450, lg2: 500, lg3: 550, lg4: 600, xl1: 700, xl2: 800, xl3: 900, xl4: 1e3 }, easing: { linear: nZ(0, 0, 1, 1), standard: Object.assign(nZ(0.2, 0, 0, 1), { accelerate: nZ(0.3, 0, 1, 1), decelerate: nZ(0, 0, 0, 1) }), emphasized: Object.assign(nZ(0.2, 0, 0, 1), { accelerate: nZ(0.3, 0, 0.8, 0.15), decelerate: nZ(0.05, 0.7, 0.1, 1) }), legacy: Object.assign(nZ(0.4, 0, 0.2, 1), { decelerate: nZ(0, 0, 0.2, 1), accelerate: nZ(0.4, 0, 1, 1) }) } }, n0 = (e10, a2) => {
  let o2 = null != a2 ? a2 : { ...e10, from: { ...e10.to }, to: { ...e10.from } };
  return t({ onComplete: j(), $default: j() }, (t10, a3) => {
    let i2, { slots: s2, emit: l2 } = a3, c2 = (t11, r10) => {
      i2 = to({ ...e10, autoplay: true, onComplete: () => {
        r10(), l2("complete", "enter");
      }, onUpdate: (e11) => {
        Object.assign(t11.style, e11);
      } });
    }, u2 = (e11, t11) => {
      i2 = to({ ...o2, autoplay: true, onComplete: () => {
        t11(), l2("complete", "leave");
      }, onUpdate: (t12) => {
        Object.assign(e11.style, t12);
      } });
    }, d2 = () => {
      null == i2 || i2.stop();
    };
    return () => {
      var e11;
      return r(n, { css: false, onEnter: c2, onEnterCancelled: d2, onLeave: u2, onLeaveCancelled: d2, children: null === (e11 = s2.default) || void 0 === e11 ? void 0 : e11.call(s2) });
    };
  }, { name: "Transition" });
}, n1 = { transitionDuration: nV.transitionDuration(nQ.duration), transitionTimingFunction: nV.transitionTimingFunction({ linear: nQ.easing.linear.toString(), standard: nQ.easing.standard.toString(), "standard-accelerate": nQ.easing.standard.accelerate.toString(), "standard-decelerate": nQ.easing.standard.decelerate.toString(), emphasized: nQ.easing.emphasized.toString(), "emphasized-decelerate": nQ.easing.emphasized.decelerate.toString(), "emphasized-accelerate": nQ.easing.emphasized.accelerate.toString(), legacy: nQ.easing.legacy.toString(), "legacy-decelerate": nQ.easing.legacy.decelerate.toString(), "legacy-accelerate": nQ.easing.legacy.accelerate.toString() }) }, n2 = { 0: true, 10: true, 20: true, 30: true, 40: true, 50: true, 60: true, 70: true, 80: true, 90: true, 95: true, 100: true }, n4 = (e10) => {
  let t10 = tW(e10);
  return [t10.r, t10.g, t10.b];
}, n5 = (e10) => ({ primary: true, secondary: true, tertiary: true, error: true, warning: true, success: true })[e10];
const _n3 = class _n3 {
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
    for (let o2 in e10) {
      let [i2, s2, l2] = x(e10, [o2], []);
      if (this.seeds[i2]) {
        var n10, a2;
        r10[o2] = n2[s2] ? `${i2}.${s2}` : null === (n10 = this.seeds[i2]) || void 0 === n10 ? void 0 : n10.tone(s2), t10[o2] = n2[l2] ? `${i2}.${l2}` : null === (a2 = this.seeds[i2]) || void 0 === a2 ? void 0 : a2.tone(l2);
      }
    }
    return [t10, r10];
  }
  toDesignTokens() {
    let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [t10, r10] = this.getThemeRoleColors(this.normalizeRoleRules(e10)), n10 = {}, a2 = {};
    for (let e11 in t10)
      if (n10[`${e11}`] = { _default: F(t10[e11]) ? n4(t10[e11]) : t10[e11], _dark: F(r10[e11]) ? n4(r10[e11]) : r10[e11] }, n5(e11) && (a2[`${e11}`] = nV.mixin({ bgColor: `sys.${e11}`, color: `sys.on-${e11}` }), a2[`${e11}-container`] = nV.mixin({ bgColor: `sys.${e11}-container`, color: `sys.on-${e11}-container` })), e11.startsWith("surface")) {
        if (e11.includes("container")) {
          a2[`${e11}`] = nV.mixin({ bgColor: `sys.${e11}`, color: "sys.on-surface" });
          continue;
        }
        a2[`${e11}`] = nV.mixin({ bgColor: `sys.${e11}`, color: "sys.on-surface" }), a2[`on-${e11}`] = nV.mixin({ bgColor: `sys.on-${e11}`, color: "sys.inverse-on-surface" });
      }
    let o2 = (e11) => Object.keys(n2).reduce((t11, r11) => Object.assign(t11, { [r11]: n4(e11.tone(parseInt(r11))) }), {});
    return { color: nV.color({ ...D(this.seeds, (e11) => o2(e11)), white: [255, 255, 255], black: [0, 0, 0], sys: n10 }), containerStyle: nV.customMixin("containerStyle", { sys: a2 }) };
  }
};
__publicField(_n3, "toHEX", (e10) => `#${n4(e10).map((e11) => E(e11.toString(16), 2, "0")).join("")}`);
__publicField(_n3, "fromColors", (e10) => {
  let { primary: t10, secondary: r10, tertiary: n10, neutral: a2, neutralVariant: o2, error: i2, ...s2 } = e10, l2 = t3.contentFromColors({ primary: t8(t10), secondary: r10 ? t8(r10) : void 0, tertiary: n10 ? t8(n10) : void 0, error: i2 ? t8(i2) : void 0 });
  return a2 && (l2.n1 = t5.fromHueAndChroma(t8(a2), 4)), o2 && (l2.n2 = t5.fromHueAndChroma(t8(o2), 8)), new _n3({ primary: l2.a1, secondary: l2.a2, tertiary: l2.a3, neutral: l2.n1, neutralVariant: l2.n2, error: l2.error, ...D(s2, (e11) => t5.fromInt(t8(e11))) });
});
let n3 = _n3;
let n8 = nV.rounded({ xs: 4, sm: 8, md: 12, lg: 16, xl: 28 }), n6 = { font: nV.font({ brand: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', plain: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', code: "'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace" }), fontWeight: nV.fontWeight({ regular: 400, medium: 500, bold: 700 }), textStyle: nV.customMixin("textStyle", { sys: { "display-large": nV.mixin({ lineHeight: 64, fontSize: 57, letterSpacing: -0.25, fontWeight: "regular", font: "brand" }), "display-medium": nV.mixin({ lineHeight: 52, fontSize: 45, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "display-small": nV.mixin({ lineHeight: 44, fontSize: 36, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-large": nV.mixin({ lineHeight: 40, fontSize: 32, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-medium": nV.mixin({ lineHeight: 36, fontSize: 28, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-small": nV.mixin({ lineHeight: 32, fontSize: 24, letterSpacing: 0, fontWeight: "regular", font: "plain" }), "title-large": nV.mixin({ lineHeight: 28, fontSize: 22, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "title-medium": nV.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.15, fontWeight: "medium", font: "plain" }), "title-small": nV.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-large": nV.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-medium": nV.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "label-small": nV.mixin({ lineHeight: 16, fontSize: 11, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "body-large": nV.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.5, fontWeight: "regular", font: "plain" }), "body-medium": nV.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.25, fontWeight: "regular", font: "plain" }), "body-small": nV.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.4, fontWeight: "regular", font: "plain" }) } }) }, n9 = n3.fromColors({ primary: "#1270f5", secondary: "#8a90a5", tertiary: "#b58391", neutral: "#5e5e5e", error: "#d93f23", warning: "#e69c00", success: "#5ac220" }), n7 = { ...n6, ...n1, ...nJ, rounded: n8, ...n9.toDesignTokens({ primary: ["primary", 80, 50] }) }, ae = nK.create(n7, { varPrefix: "vk" }), at = a(() => ae, { name: "Theme" }), ar = a(() => rW({ key: "css" }), { name: "Cache" }), an = (e10) => (t10) => {
  if (t10.serialized) {
    if (t10.withoutScoping)
      e10.insert("", t10.serialized, e10.sheet, true);
    else {
      var r10;
      rq(e10, t10.serialized, null === (r10 = t10.isStringTag) || void 0 === r10 || r10);
    }
  }
}, aa = Object.assign(t({ sx: j(), component: j().optional().default("div") }, (e10, t10) => {
  var n10;
  let { slots: a2, expose: s2 } = t10, l2 = at.use(), c2 = ar.use(), u2 = l2.unstable_css(c2, null !== (n10 = e10.sx) && void 0 !== n10 ? n10 : {}), d2 = () => "0" !== u2.name ? `${c2.key}-${u2.name}` : "", f2 = an(c2);
  o(() => {
    f2({ serialized: u2, isStringTag: true });
  });
  let h2 = i();
  return s2({ $$forwardRef: h2 }), () => {
    var t11;
    return r(null !== (t11 = e10.component) && void 0 !== t11 ? t11 : "div", { ref: h2, class: d2(), children: a2 });
  };
}), { displayName: "Box" }), ao = (e10, t10) => (n10) => {
  let a2 = {};
  for (let t11 in e10)
    "component" !== t11 && "sx" !== t11 && e10[t11] && (a2[`data-${t11}`] = e10[t11]);
  return r(n10, { ...a2, children: t10.slots });
};
function ai(e10, r10, n10) {
  var a2;
  let i2 = null !== (a2 = A(r10) ? r10 : n10) && void 0 !== a2 ? a2 : ao, u2 = k(r10) ? r10 : {};
  return (r11) => {
    let n11 = t({ ...u2, sx: j().optional(), component: j().optional() }, (t10, a3) => {
      let u3 = at.use(), d2 = ar.use(), f2 = an(d2);
      r11.label = n11.name;
      let h2 = s(""), p2 = u3.unstable_css(d2, r11), m2 = () => "0" !== p2.name ? `${d2.key}-${p2.name}${h2.value}` : `${h2.value}`;
      if (e10.__styled) {
        var g2;
        let e11 = u3.unstable_css(d2, null !== (g2 = t10.sx) && void 0 !== g2 ? g2 : {});
        "0" !== e11.name && (h2.value = ` ${d2.key}-${e11.name}`), o(() => {
          f2({ serialized: p2, isStringTag: true }), f2({ serialized: e11, isStringTag: true });
        });
      } else
        l(() => {
          f2({ serialized: p2, isStringTag: true });
        });
      let v2 = i2(t10, a3);
      return () => {
        if (e10.__styled) {
          let r13 = v2(e10);
          return r13 ? c(r13, { component: t10.component, class: m2() }) : null;
        }
        let r12 = v2(aa);
        return r12 ? c(r12, { component: t10.component || e10, sx: t10.sx, class: m2() }) : null;
      };
    });
    return n11.__styled = true, n11;
  };
}
let as = Object.assign(t({ styles: j() }, (e10) => {
  let { styles: t10 } = e10, r10 = at.use(), n10 = ar.use(), a2 = an(n10), o2 = r10.unstable_css(n10, _(t10) ? { "&": t10 } : t10);
  return l(() => {
    a2({ serialized: o2, withoutScoping: true });
  }), () => null;
}), { displayName: "GlobalStyle" }), al = Object.assign(t(() => {
  let e10 = at.use().rootCSSVars;
  return () => r(as, { styles: { ":host, :root, [data-theme]": e10, "*, *::after, *::before": { boxSizing: "border-box" }, html: { fontSize: "10px" }, a: { color: "inherit" }, body: { textStyle: "sys.body-medium" } } });
}), { displayName: "CSSReset" }), ac = a(() => ({ mountPoint: () => document.body }), { name: "OverlaySetting" }), au = a(() => new ad(s(null), s(null), () => false), { name: "Overlay" });
class ad {
  constructor(e10, t10, r10) {
    __publicField(this, "children", []);
    __publicField(this, "add", (e10) => (this.children = [...this.children, e10], () => {
      this.children = this.children.filter((t10) => t10 !== e10);
    }));
    __publicField(this, "isClickInside", (e10) => {
      for (let t11 of this.children)
        if (t11.isClickInside(e10))
          return true;
      let t10 = u(this.triggerRef), r10 = u(this.contentRef);
      return t10 && (t10 === e10.target || e10.composedPath().includes(t10)) || r10 && (r10 === e10.target || e10.composedPath().includes(r10));
    });
    this.triggerRef = e10, this.contentRef = t10, this.isOpen = r10;
  }
  topmost() {
    return 0 === this.children.filter((e10) => e10.isOpen()).length;
  }
}
let af = Object.assign(t({ isOpen: V().optional(), style: j().optional(), contentRef: j().optional(), triggerRef: j().optional(), onClickOutside: j(), onEscKeydown: j(), onContentBeforeMount: j(), $transition: j().optional(), $default: j().optional() }, (e10, t10) => {
  var n10;
  let { slots: a2, attrs: o2, emit: i2 } = t10, l2 = e10.contentRef || s(null), u2 = new ad(null !== (n10 = e10.triggerRef) && void 0 !== n10 ? n10 : s(null), l2, () => !!e10.isOpen), v2 = ac.use();
  return d(au.use().add(u2)), window && f(h(l2, "value"), g((e11) => {
    if (!e11)
      return;
    let t11 = (e12) => {
      u2.isClickInside(e12) || i2("click-outside", e12);
    };
    return window.addEventListener("pointerdown", t11), () => {
      window.removeEventListener("pointerdown", t11);
    };
  }), g((e11) => {
    if (!e11)
      return;
    let t11 = (e12) => {
      "Escape" === e12.key && u2.topmost() && i2("esc-keydown", e12);
    };
    return window.addEventListener("keydown", t11), () => {
      window.removeEventListener("keydown", t11);
    };
  }), m()), () => {
    var t11;
    let n11 = e10.isOpen ? c(r("div", { ...o2, ref: l2, style: e10.style, children: r(au, { value: u2, children: null === (t11 = a2.default) || void 0 === t11 ? void 0 : t11.call(a2) }) }), { onVnodeBeforeMount: () => {
      i2("content-before-mount");
    } }) : null;
    return r(p, { to: v2.mountPoint(), children: a2.transition ? a2.transition({ content: n11 }) : n11 });
  };
}, { inheritAttrs: false, name: "Overlay" }), { displayName: "Overlay" });
function ah(e10, t10) {
  return { fn: e10, enabled: true, ...t10 };
}
let ap = Object.assign(t({ isOpen: af.propTypes.isOpen, onClickOutside: af.propTypes.onClickOutside, placement: j().optional(), modifiers: j().optional(), $transition: af.propTypes.$transition, $content: j(), $default: j() }, (e10, t10) => {
  let { slots: n10, emit: a2, attrs: o2 } = t10, i2 = s(null), l2 = s(null);
  return v(() => l2.value, (t11) => {
    if (t11 && i2.value) {
      var r10, n11;
      nT(i2.value, t11, { placement: null !== (r10 = e10.placement) && void 0 !== r10 ? r10 : "bottom", modifiers: [...null !== (n11 = e10.modifiers) && void 0 !== n11 ? n11 : [], n_] });
    }
  }), () => {
    var t11, s2;
    let u2 = null === (t11 = n10.default) || void 0 === t11 ? void 0 : t11.call(n10)[0];
    return u2 ? y(b, { children: [c(u2, { ...o2, onVnodeMounted: (e11) => {
      i2.value = function e12(t12) {
        if (t12) {
          if (t12 instanceof HTMLElement)
            return t12;
          if (t12 instanceof Text)
            return e12(t12.nextElementSibling);
        }
        return null;
      }(e11.el);
    } }), r(af, { triggerRef: i2, contentRef: l2, isOpen: e10.isOpen, onClickOutside: (e11) => a2("click-outside", e11), style: { zIndex: 100 }, $transition: n10.transition, children: null === (s2 = n10.content) || void 0 === s2 ? void 0 : s2.call(n10) })] }) : null;
  };
}, { name: "Popper", inheritAttrs: false }), { displayName: "Popper" });
export {
  aa as B,
  t3 as C,
  as as G,
  n3 as P,
  nK as T,
  nU as a,
  tT as b,
  td as c,
  n7 as d,
  t8 as e,
  t5 as f,
  rW as g,
  to as h,
  nT as i,
  n_ as j,
  rq as k,
  ar as l,
  al as m,
  at as n,
  ah as o,
  ap as p,
  n0 as q,
  tW as r,
  ai as s,
  nQ as t,
  nG as v
};
