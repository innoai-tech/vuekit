import { c as e, j as t, T as r, d as n, o as a, r as o, e as i, a as s, u as l, f as c, g as u, t as d, h as f, s as h, i as p, w as m, b as g, F as y } from "./lib-nodepkg-vuekit.171adedb.chunk.js";
import { b, h as v, j as x, l as w, m as k, n as C, i as M, k as P, g as S, q as _, d as O, r as T, t as D, u as R, v as $, c as A, w as I, e as B } from "./lib-nodepkg-typedef.9aa925ea.chunk.js";
function F(e10, t10) {
  var r10 = {};
  for (var n3 in e10)
    Object.prototype.hasOwnProperty.call(e10, n3) && 0 > t10.indexOf(n3) && (r10[n3] = e10[n3]);
  if (null != e10 && "function" == typeof Object.getOwnPropertySymbols)
    for (var a2 = 0, n3 = Object.getOwnPropertySymbols(e10); a2 < n3.length; a2++)
      0 > t10.indexOf(n3[a2]) && Object.prototype.propertyIsEnumerable.call(e10, n3[a2]) && (r10[n3[a2]] = e10[n3[a2]]);
  return r10;
}
var L, V, j, E, H = function() {
}, z = function() {
};
let N = (e10, t10, r10) => Math.min(Math.max(r10, e10), t10);
function W(e10, t10) {
  return e10 * Math.sqrt(1 - t10 * t10);
}
let q = ["duration", "bounce"], U = ["stiffness", "damping", "mass"];
function G(e10, t10) {
  return t10.some((t11) => void 0 !== e10[t11]);
}
function Y(e10) {
  var { from: t10 = 0, to: r10 = 1, restSpeed: n3 = 2, restDelta: a2 } = e10, o2 = F(e10, ["from", "to", "restSpeed", "restDelta"]);
  let i2 = { done: false, value: t10 }, { stiffness: s2, damping: l2, mass: c2, velocity: u2, duration: d2, isResolvedFromDuration: f2 } = function(e11) {
    let t11 = Object.assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: false }, e11);
    if (!G(e11, U) && G(e11, q)) {
      let r11 = function(e12) {
        let t12, r12, { duration: n5 = 800, bounce: a3 = 0.25, velocity: o3 = 0, mass: i3 = 1 } = e12;
        H(n5 <= 1e4);
        let s3 = 1 - a3;
        s3 = N(0.05, 1, s3), n5 = N(0.01, 10, n5 / 1e3), s3 < 1 ? (t12 = (e13) => {
          let t13 = e13 * s3, r13 = t13 * n5, a4 = W(e13, s3);
          return 1e-3 - (t13 - o3) / a4 * Math.exp(-r13);
        }, r12 = (e13) => {
          let r13 = e13 * s3, a4 = r13 * n5, i4 = Math.pow(s3, 2) * Math.pow(e13, 2) * n5, l4 = W(Math.pow(e13, 2), s3), c4 = -t12(e13) + 1e-3 > 0 ? -1 : 1;
          return c4 * ((a4 * o3 + o3 - i4) * Math.exp(-a4)) / l4;
        }) : (t12 = (e13) => {
          let t13 = Math.exp(-e13 * n5), r13 = (e13 - o3) * n5 + 1;
          return -1e-3 + t13 * r13;
        }, r12 = (e13) => {
          let t13 = Math.exp(-e13 * n5), r13 = (o3 - e13) * (n5 * n5);
          return t13 * r13;
        });
        let l3 = 5 / n5, c3 = function(e13, t13, r13) {
          let n6 = r13;
          for (let r14 = 1; r14 < 12; r14++)
            n6 -= e13(n6) / t13(n6);
          return n6;
        }(t12, r12, l3);
        if (n5 *= 1e3, isNaN(c3))
          return { stiffness: 100, damping: 10, duration: n5 };
        {
          let e13 = Math.pow(c3, 2) * i3;
          return { stiffness: e13, damping: 2 * s3 * Math.sqrt(i3 * e13), duration: n5 };
        }
      }(e11);
      (t11 = Object.assign(Object.assign(Object.assign({}, t11), r11), { velocity: 0, mass: 1 })).isResolvedFromDuration = true;
    }
    return t11;
  }(o2), h2 = X, p2 = X;
  function m2() {
    let e11 = u2 ? -(u2 / 1e3) : 0, n5 = r10 - t10, o3 = l2 / (2 * Math.sqrt(s2 * c2)), i3 = Math.sqrt(s2 / c2) / 1e3;
    if (void 0 === a2 && (a2 = Math.min(Math.abs(r10 - t10) / 100, 0.4)), o3 < 1) {
      let t11 = W(i3, o3);
      h2 = (a3) => {
        let s3 = Math.exp(-o3 * i3 * a3);
        return r10 - s3 * ((e11 + o3 * i3 * n5) / t11 * Math.sin(t11 * a3) + n5 * Math.cos(t11 * a3));
      }, p2 = (r11) => {
        let a3 = Math.exp(-o3 * i3 * r11);
        return o3 * i3 * a3 * (Math.sin(t11 * r11) * (e11 + o3 * i3 * n5) / t11 + n5 * Math.cos(t11 * r11)) - a3 * (Math.cos(t11 * r11) * (e11 + o3 * i3 * n5) - t11 * n5 * Math.sin(t11 * r11));
      };
    } else if (1 === o3)
      h2 = (t11) => r10 - Math.exp(-i3 * t11) * (n5 + (e11 + i3 * n5) * t11);
    else {
      let t11 = i3 * Math.sqrt(o3 * o3 - 1);
      h2 = (a3) => {
        let s3 = Math.exp(-o3 * i3 * a3), l3 = Math.min(t11 * a3, 300);
        return r10 - s3 * ((e11 + o3 * i3 * n5) * Math.sinh(l3) + t11 * n5 * Math.cosh(l3)) / t11;
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
Y.needsInterpolation = (e10, t10) => "string" == typeof e10 || "string" == typeof t10;
let X = (e10) => 0, J = (e10, t10, r10) => {
  let n3 = t10 - e10;
  return 0 === n3 ? 1 : (r10 - e10) / n3;
}, K = (e10, t10, r10) => -r10 * e10 + r10 * t10 + e10, Z = (e10, t10) => (r10) => Math.max(Math.min(r10, t10), e10), Q = (e10) => e10 % 1 ? Number(e10.toFixed(5)) : e10, ee = /(-)?([\d]*\.?[\d])+/g, et = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, er = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function en(e10) {
  return "string" == typeof e10;
}
let ea = { test: (e10) => "number" == typeof e10, parse: parseFloat, transform: (e10) => e10 }, eo = Object.assign(Object.assign({}, ea), { transform: Z(0, 1) });
Object.assign(Object.assign({}, ea), { default: 1 });
let ei = { test: (e10) => en(e10) && e10.endsWith("%") && 1 === e10.split(" ").length, parse: parseFloat, transform: (e10) => `${e10}%` };
Object.assign(Object.assign({}, ei), { parse: (e10) => ei.parse(e10) / 100, transform: (e10) => ei.transform(100 * e10) });
let es = (e10, t10) => (r10) => !!(en(r10) && er.test(r10) && r10.startsWith(e10) || t10 && Object.prototype.hasOwnProperty.call(r10, t10)), el = (e10, t10, r10) => (n3) => {
  if (!en(n3))
    return n3;
  let [a2, o2, i2, s2] = n3.match(ee);
  return { [e10]: parseFloat(a2), [t10]: parseFloat(o2), [r10]: parseFloat(i2), alpha: void 0 !== s2 ? parseFloat(s2) : 1 };
}, ec = { test: es("hsl", "hue"), parse: el("hue", "saturation", "lightness"), transform: (e10) => {
  let { hue: t10, saturation: r10, lightness: n3, alpha: a2 = 1 } = e10;
  return "hsla(" + Math.round(t10) + ", " + ei.transform(Q(r10)) + ", " + ei.transform(Q(n3)) + ", " + Q(eo.transform(a2)) + ")";
} }, eu = Z(0, 255), ed = Object.assign(Object.assign({}, ea), { transform: (e10) => Math.round(eu(e10)) }), ef = { test: es("rgb", "red"), parse: el("red", "green", "blue"), transform: (e10) => {
  let { red: t10, green: r10, blue: n3, alpha: a2 = 1 } = e10;
  return "rgba(" + ed.transform(t10) + ", " + ed.transform(r10) + ", " + ed.transform(n3) + ", " + Q(eo.transform(a2)) + ")";
} }, eh = { test: es("#"), parse: function(e10) {
  let t10 = "", r10 = "", n3 = "", a2 = "";
  return e10.length > 5 ? (t10 = e10.substr(1, 2), r10 = e10.substr(3, 2), n3 = e10.substr(5, 2), a2 = e10.substr(7, 2)) : (t10 = e10.substr(1, 1), r10 = e10.substr(2, 1), n3 = e10.substr(3, 1), a2 = e10.substr(4, 1), t10 += t10, r10 += r10, n3 += n3, a2 += a2), { red: parseInt(t10, 16), green: parseInt(r10, 16), blue: parseInt(n3, 16), alpha: a2 ? parseInt(a2, 16) / 255 : 1 };
}, transform: ef.transform }, ep = { test: (e10) => ef.test(e10) || eh.test(e10) || ec.test(e10), parse: (e10) => ef.test(e10) ? ef.parse(e10) : ec.test(e10) ? ec.parse(e10) : eh.parse(e10), transform: (e10) => en(e10) ? e10 : e10.hasOwnProperty("red") ? ef.transform(e10) : ec.transform(e10) }, em = "${c}", eg = "${n}";
function ey(e10) {
  "number" == typeof e10 && (e10 = `${e10}`);
  let t10 = [], r10 = 0, n3 = e10.match(et);
  n3 && (r10 = n3.length, e10 = e10.replace(et, em), t10.push(...n3.map(ep.parse)));
  let a2 = e10.match(ee);
  return a2 && (e10 = e10.replace(ee, eg), t10.push(...a2.map(ea.parse))), { values: t10, numColors: r10, tokenised: e10 };
}
function eb(e10) {
  return ey(e10).values;
}
function ev(e10) {
  let { values: t10, numColors: r10, tokenised: n3 } = ey(e10), a2 = t10.length;
  return (e11) => {
    let t11 = n3;
    for (let n5 = 0; n5 < a2; n5++)
      t11 = t11.replace(n5 < r10 ? em : eg, n5 < r10 ? ep.transform(e11[n5]) : Q(e11[n5]));
    return t11;
  };
}
let ex = (e10) => "number" == typeof e10 ? 0 : e10, ew = { test: function(e10) {
  var t10, r10, n3, a2;
  return isNaN(e10) && en(e10) && (null !== (r10 = null === (t10 = e10.match(ee)) || void 0 === t10 ? void 0 : t10.length) && void 0 !== r10 ? r10 : 0) + (null !== (a2 = null === (n3 = e10.match(et)) || void 0 === n3 ? void 0 : n3.length) && void 0 !== a2 ? a2 : 0) > 0;
}, parse: eb, createTransformer: ev, getAnimatableNone: function(e10) {
  let t10 = eb(e10), r10 = ev(e10);
  return r10(t10.map(ex));
} };
function ek(e10, t10, r10) {
  return (r10 < 0 && (r10 += 1), r10 > 1 && (r10 -= 1), r10 < 1 / 6) ? e10 + (t10 - e10) * 6 * r10 : r10 < 0.5 ? t10 : r10 < 2 / 3 ? e10 + (t10 - e10) * (2 / 3 - r10) * 6 : e10;
}
function eC(e10) {
  let { hue: t10, saturation: r10, lightness: n3, alpha: a2 } = e10;
  t10 /= 360, n3 /= 100;
  let o2 = 0, i2 = 0, s2 = 0;
  if (r10 /= 100) {
    let e11 = n3 < 0.5 ? n3 * (1 + r10) : n3 + r10 - n3 * r10, a3 = 2 * n3 - e11;
    o2 = ek(a3, e11, t10 + 1 / 3), i2 = ek(a3, e11, t10), s2 = ek(a3, e11, t10 - 1 / 3);
  } else
    o2 = i2 = s2 = n3;
  return { red: Math.round(255 * o2), green: Math.round(255 * i2), blue: Math.round(255 * s2), alpha: a2 };
}
let eM = (e10, t10, r10) => {
  let n3 = e10 * e10;
  return Math.sqrt(Math.max(0, r10 * (t10 * t10 - n3) + n3));
}, eP = [eh, ef, ec], eS = (e10) => eP.find((t10) => t10.test(e10)), e_ = (e10, t10) => {
  let r10 = eS(e10), n3 = eS(t10), a2 = r10.parse(e10), o2 = n3.parse(t10);
  r10 === ec && (a2 = eC(a2), r10 = ef), n3 === ec && (o2 = eC(o2), n3 = ef);
  let i2 = Object.assign({}, a2);
  return (e11) => {
    for (let t11 in i2)
      "alpha" !== t11 && (i2[t11] = eM(a2[t11], o2[t11], e11));
    return i2.alpha = K(a2.alpha, o2.alpha, e11), r10.transform(i2);
  };
}, eO = (e10) => "number" == typeof e10, eT = (e10, t10) => (r10) => t10(e10(r10)), eD = function() {
  for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++)
    t10[r10] = arguments[r10];
  return t10.reduce(eT);
};
function eR(e10, t10) {
  return eO(e10) ? (r10) => K(e10, t10, r10) : ep.test(e10) ? e_(e10, t10) : eB(e10, t10);
}
let e$ = (e10, t10) => {
  let r10 = [...e10], n3 = r10.length, a2 = e10.map((e11, r11) => eR(e11, t10[r11]));
  return (e11) => {
    for (let t11 = 0; t11 < n3; t11++)
      r10[t11] = a2[t11](e11);
    return r10;
  };
}, eA = (e10, t10) => {
  let r10 = Object.assign(Object.assign({}, e10), t10), n3 = {};
  for (let a2 in r10)
    void 0 !== e10[a2] && void 0 !== t10[a2] && (n3[a2] = eR(e10[a2], t10[a2]));
  return (e11) => {
    for (let t11 in n3)
      r10[t11] = n3[t11](e11);
    return r10;
  };
};
function eI(e10) {
  let t10 = ew.parse(e10), r10 = t10.length, n3 = 0, a2 = 0, o2 = 0;
  for (let e11 = 0; e11 < r10; e11++)
    n3 || "number" == typeof t10[e11] ? n3++ : void 0 !== t10[e11].hue ? o2++ : a2++;
  return { parsed: t10, numNumbers: n3, numRGB: a2, numHSL: o2 };
}
let eB = (e10, t10) => {
  let r10 = ew.createTransformer(t10), n3 = eI(e10), a2 = eI(t10), o2 = n3.numHSL === a2.numHSL && n3.numRGB === a2.numRGB && n3.numNumbers >= a2.numNumbers;
  return o2 ? eD(e$(n3.parsed, a2.parsed), r10) : (r11) => `${r11 > 0 ? t10 : e10}`;
}, eF = (e10, t10) => (r10) => K(e10, t10, r10);
function eL(e10, t10) {
  let { clamp: r10 = true, ease: n3, mixer: a2 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o2 = e10.length;
  z(o2 === t10.length), z(!n3 || !Array.isArray(n3) || n3.length === o2 - 1), e10[0] > e10[o2 - 1] && (e10 = [].concat(e10), t10 = [].concat(t10), e10.reverse(), t10.reverse());
  let i2 = function(e11, t11, r11) {
    var n5;
    let a3 = [], o3 = r11 || ("number" == typeof (n5 = e11[0]) ? eF : "string" == typeof n5 ? ep.test(n5) ? e_ : eB : Array.isArray(n5) ? e$ : "object" == typeof n5 ? eA : void 0), i3 = e11.length - 1;
    for (let r12 = 0; r12 < i3; r12++) {
      let n6 = o3(e11[r12], e11[r12 + 1]);
      if (t11) {
        let e12 = Array.isArray(t11) ? t11[r12] : t11;
        n6 = eD(e12, n6);
      }
      a3.push(n6);
    }
    return a3;
  }(t10, n3, a2), s2 = 2 === o2 ? function(e11, t11) {
    let [r11, n5] = e11, [a3] = t11;
    return (e12) => a3(J(r11, n5, e12));
  }(e10, i2) : function(e11, t11) {
    let r11 = e11.length, n5 = r11 - 1;
    return (a3) => {
      let o3 = 0, i3 = false;
      if (a3 <= e11[0] ? i3 = true : a3 >= e11[n5] && (o3 = n5 - 1, i3 = true), !i3) {
        let t12 = 1;
        for (; t12 < r11 && !(e11[t12] > a3) && t12 !== n5; t12++)
          ;
        o3 = t12 - 1;
      }
      let s3 = J(e11[o3], e11[o3 + 1], a3);
      return t11[o3](s3);
    };
  }(e10, i2);
  return r10 ? (t11) => s2(N(e10[0], e10[o2 - 1], t11)) : s2;
}
let eV = (e10) => (t10) => t10 * t10 * ((e10 + 1) * t10 - e10), ej = (e10) => e10, eE = (V = (e10) => Math.pow(e10, 2), (e10) => e10 <= 0.5 ? V(2 * e10) / 2 : (2 - V(2 * (1 - e10))) / 2);
function eH(e10) {
  let { from: t10 = 0, to: r10 = 1, ease: n3, offset: a2, duration: o2 = 300 } = e10, i2 = { done: false, value: t10 }, s2 = Array.isArray(r10) ? r10 : [t10, r10], l2 = (a2 && a2.length === s2.length ? a2 : function(e11) {
    let t11 = e11.length;
    return e11.map((e12, r11) => 0 !== r11 ? r11 / (t11 - 1) : 0);
  }(s2)).map((e11) => e11 * o2);
  function c2() {
    return eL(l2, s2, { ease: Array.isArray(n3) ? n3 : s2.map(() => n3 || eE).splice(0, s2.length - 1) });
  }
  let u2 = c2();
  return { next: (e11) => (i2.value = u2(e11), i2.done = e11 >= o2, i2), flipTarget: () => {
    s2.reverse(), u2 = c2();
  } };
}
((e10) => {
  let t10 = eV(1.525);
  return (e11) => (e11 *= 2) < 1 ? 0.5 * t10(e11) : 0.5 * (2 - Math.pow(2, -10 * (e11 - 1)));
})(0);
let ez = { keyframes: eH, spring: Y, decay: function(e10) {
  let { velocity: t10 = 0, from: r10 = 0, power: n3 = 0.8, timeConstant: a2 = 350, restDelta: o2 = 0.5, modifyTarget: i2 } = e10, s2 = { done: false, value: r10 }, l2 = n3 * t10, c2 = r10 + l2, u2 = void 0 === i2 ? c2 : i2(c2);
  return u2 !== c2 && (l2 = u2 - r10), { next: (e11) => {
    let t11 = -l2 * Math.exp(-e11 / a2);
    return s2.done = !(t11 > o2 || t11 < -o2), s2.value = s2.done ? u2 : u2 + t11, s2;
  }, flipTarget: () => {
  } };
} }, eN = 1 / 60 * 1e3, eW = "undefined" != typeof performance ? () => performance.now() : () => Date.now(), eq = "undefined" != typeof window ? (e10) => window.requestAnimationFrame(e10) : (e10) => setTimeout(() => e10(eW()), eN), eU = true, eG = false, eY = false, eX = { delta: 0, timestamp: 0 }, eJ = ["read", "update", "preRender", "render", "postRender"], eK = eJ.reduce((e10, t10) => (e10[t10] = function(e11) {
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
        let n5 = t11[r11];
        n5(l2), i2.has(n5) && (s2.schedule(n5), e11());
      }
    a2 = false, o2 && (o2 = false, s2.process(l2));
  } };
  return s2;
}(() => eG = true), e10), {}), eZ = eJ.reduce((e10, t10) => {
  let r10 = eK[t10];
  return e10[t10] = function(e11) {
    let t11 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return eG || e2(), r10.schedule(e11, t11, n3);
  }, e10;
}, {}), eQ = eJ.reduce((e10, t10) => (e10[t10] = eK[t10].cancel, e10), {});
eJ.reduce((e10, t10) => (e10[t10] = () => eK[t10].process(eX), e10), {});
let e0 = (e10) => eK[e10].process(eX), e1 = (e10) => {
  eG = false, eX.delta = eU ? eN : Math.max(Math.min(e10 - eX.timestamp, 40), 1), eX.timestamp = e10, eY = true, eJ.forEach(e0), eY = false, eG && (eU = false, eq(e1));
}, e2 = () => {
  eG = true, eU = true, eY || eq(e1);
};
function e4(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
  return e10 - t10 - r10;
}
let e5 = (e10) => {
  let t10 = (t11) => {
    let { delta: r10 } = t11;
    return e10(r10);
  };
  return { start: () => eZ.update(t10, true), stop: () => eQ.update(t10) };
};
function e3(e10) {
  let t10, r10, n3;
  var a2, { from: o2, autoplay: i2 = true, driver: s2 = e5, elapsed: l2 = 0, repeat: c2 = 0, repeatType: u2 = "loop", repeatDelay: d2 = 0, onPlay: f2, onStop: h2, onComplete: p2, onRepeat: m2, onUpdate: g2 } = e10, y2 = F(e10, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
  let { to: b2 } = y2, v2 = 0, x2 = y2.duration, w2 = false, k2 = true, C2 = function(e11) {
    if (Array.isArray(e11.to))
      return eH;
    if (ez[e11.type])
      return ez[e11.type];
    let t11 = new Set(Object.keys(e11));
    if (t11.has("ease") || t11.has("duration") && !t11.has("dampingRatio"))
      ;
    else if (t11.has("dampingRatio") || t11.has("stiffness") || t11.has("mass") || t11.has("damping") || t11.has("restSpeed") || t11.has("restDelta"))
      return Y;
    return eH;
  }(y2);
  (null === (a2 = C2.needsInterpolation) || void 0 === a2 ? void 0 : a2.call(C2, o2, b2)) && (n3 = eL([0, 100], [o2, b2], { clamp: false }), o2 = 0, b2 = 100);
  let M2 = C2(Object.assign(Object.assign({}, y2), { from: o2, to: b2 }));
  return i2 && (null == f2 || f2(), (t10 = s2(function(e11) {
    if (k2 || (e11 = -e11), l2 += e11, !w2) {
      let e12 = M2.next(Math.max(0, l2));
      r10 = e12.value, n3 && (r10 = n3(r10)), w2 = k2 ? e12.done : l2 <= 0;
    }
    if (null == g2 || g2(r10), w2) {
      if (0 === v2 && (null != x2 || (x2 = l2)), v2 < c2) {
        var a3, o3;
        a3 = l2, o3 = x2, (k2 ? a3 >= o3 + d2 : a3 <= -d2) && (v2++, "reverse" === u2 ? l2 = function(e12, t11) {
          let r11 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n5 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
          return n5 ? e4(t11 + -e12, t11, r11) : t11 - (e12 - t11) + r11;
        }(l2, x2, d2, k2 = v2 % 2 == 0) : (l2 = e4(l2, x2, d2), "mirror" === u2 && M2.flipTarget()), w2 = false, m2 && m2());
      } else
        t10.stop(), p2 && p2();
    }
  })).start()), { stop: () => {
    null == h2 || h2(), t10.stop();
  } };
}
let e8 = (e10, t10) => 1 - 3 * t10 + 3 * e10, e6 = (e10, t10) => 3 * t10 - 6 * e10, e9 = (e10) => 3 * e10, e7 = (e10, t10, r10) => ((e8(t10, r10) * e10 + e6(t10, r10)) * e10 + e9(t10)) * e10, te = (e10, t10, r10) => 3 * e8(t10, r10) * e10 * e10 + 2 * e6(t10, r10) * e10 + e9(t10);
function tt() {
  return new Proxy({}, { get: (e10, t10) => t10 });
}
let tr = tt(), tn = { paddingX: [tr.paddingLeft, tr.paddingRight], paddingY: [tr.paddingTop, tr.paddingBottom], marginX: [tr.marginInlineStart, tr.marginInlineEnd], marginY: [tr.marginTop, tr.marginBottom], borderX: [tr.borderLeft, tr.borderRight], borderY: [tr.borderTop, tr.borderBottom], color: [tr.color, tr.fill], borderTopRadius: [tr.borderTopLeftRadius, tr.borderTopRightRadius], borderBottomRadius: [tr.borderBottomLeftRadius, tr.borderBottomRightRadius], borderRightRadius: [tr.borderTopRightRadius, tr.borderBottomRightRadius], borderLeftRadius: [tr.borderTopLeftRadius, tr.borderBottomLeftRadius], backgroundGradient: [tr.backgroundImage], boxSize: [tr.width, tr.height] }, ta = tt(), to = { font: ta.fontFamily, shadow: ta.boxShadow, rounded: ta.borderRadius, roundedTop: ta.borderTopRadius, roundedBottom: ta.borderBottomRadius, roundedLeft: ta.borderLeftRadius, roundedRight: ta.borderRightRadius, bg: ta.background, bgImage: ta.backgroundImage, bgSize: ta.backgroundSize, bgPosition: ta.backgroundPosition, bgRepeat: ta.backgroundRepeat, bgAttachment: ta.backgroundAttachment, bgColor: ta.backgroundColor, bgGradient: ta.backgroundGradient, bgClip: ta.backgroundClip, pos: ta.position, p: ta.padding, pt: ta.paddingTop, pr: ta.paddingRight, pl: ta.paddingLeft, pb: ta.paddingBottom, ps: ta.paddingInlineStart, pe: ta.paddingInlineEnd, px: ta.paddingX, py: ta.paddingY, m: ta.margin, mt: ta.marginTop, mr: ta.marginRight, ml: ta.marginLeft, mb: ta.marginBottom, ms: ta.marginInlineStart, me: ta.marginInlineEnd, mx: ta.marginX, my: ta.marginY, w: ta.width, minW: ta.minWidth, maxW: ta.maxWidth, h: ta.height, minH: ta.minHeight, maxH: ta.maxHeight }, ti = tt(), ts = function() {
  for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++)
    t10[r10] = arguments[r10];
  let n3 = [...t10];
  for (let e11 of t10)
    to[e11] && n3.push(to[e11]);
  return n3;
}, tl = { _rtl: "[dir=rtl] &, &[dir=rtl]", _ltr: "[dir=ltr] &, &[dir=ltr]", _dark: "&[data-theme=dark]", _light: "&[data-theme=light]" };
var tc = ((L = tc || {})[L.var = 0] = "var", L[L.mixin = 1] = "mixin", L);
class tu {
  static create(e10, t10) {
    let { values: r10, on: n3, transform: a2 } = t10;
    return { type: e10, values: r10, on: n3, transform: a2, __Tokens: void 0, __ValueType: void 0, __CSSTokens: void 0 };
  }
  static color(e10) {
    return tu.create(0, { values: e10, on: ts(ti.color, ti.bgColor, ti.outlineColor, ti.borderColor, ti.accentColor, ti.fill, ti.stroke), transform: (e11) => ({ default: `rgb(${e11[0]}, ${e11[1]}, ${e11[2]})`, rgb: `${e11[0]} ${e11[1]} ${e11[2]}` }), fallback: "" });
  }
  static space(e10) {
    return tu.create(0, { values: e10, on: ts(ti.gap, ti.rowGap, ti.columnGap, ti.top, ti.right, ti.bottom, ti.left, ti.m, ti.ms, ti.me, ti.mt, ti.mr, ti.mb, ti.ml, ti.mx, ti.my, ti.p, ti.ps, ti.pe, ti.pt, ti.pr, ti.pb, ti.pl, ti.px, ti.py) });
  }
  static boxSize(e10) {
    return tu.create(0, { values: e10, on: ts(ti.w, ti.minW, ti.maxW, ti.h, ti.minH, ti.maxH, ti.boxSize), fallback: 0 });
  }
  static fontSize(e10) {
    return tu.create(0, { values: e10, on: ts(ti.fontSize), fallback: 0 });
  }
  static lineHeight(e10) {
    return tu.create(0, { values: e10, on: ts(ti.lineHeight), fallback: 0 });
  }
  static rounded(e10) {
    return tu.create(0, { values: e10, fallback: 0, on: ts(ti.rounded, ti.roundedTop, ti.roundedBottom, ti.roundedLeft, ti.roundedRight, tr.borderTopLeftRadius, tr.borderTopRightRadius, tr.borderBottomLeftRadius, tr.borderBottomRightRadius, tr.borderTopRightRadius, tr.borderBottomRightRadius, tr.borderTopLeftRadius, tr.borderBottomLeftRadius) });
  }
  static transitionTimingFunction(e10) {
    return tu.create(0, { values: e10, on: ts(ti.transitionTimingFunction) });
  }
  static transitionDuration(e10) {
    return tu.create(0, { values: e10, on: ts(ti.transitionDuration), transform: (e11) => `${e11}ms` });
  }
  static font(e10) {
    return tu.create(0, { values: e10, on: ts(ti.font) });
  }
  static fontWeight(e10) {
    return tu.create(0, { values: e10, on: ts(ti.fontWeight) });
  }
  static letterSpacing(e10) {
    return tu.create(0, { values: e10, on: ts(ti.letterSpacing) });
  }
  static shadow(e10) {
    return tu.create(0, { values: e10, on: ts(ti.shadow) });
  }
  static customMixin(e10, t10) {
    return tu.create(1, { values: t10, on: [e10] });
  }
  static mixin(e10) {
    return { ...e10, __mixin: true };
  }
}
let td = class {
  get tokens() {
    return w(this._values);
  }
  get(e10, t10, r10) {
    let n3 = this._values[e10];
    if (k(n3)) {
      var a2;
      return r10 ? n3[t10] : null !== (a2 = n3[t10]) && void 0 !== a2 ? a2 : n3[td.defaultMode];
    }
    return r10 ? t10 === td.defaultMode ? n3 : void 0 : n3;
  }
  use(e10) {
    let t10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (this._cssVarRefs[e10])
      return t10 ? `${this._cssVarRefs[e10]}` : `var(${this._cssVarRefs[e10]})`;
  }
  constructor(e10, { cssVar: t10, transformFallback: r10 }) {
    this.__Tokens = void 0, this._values = {}, this._cssVarRefs = {}, td.walkValues(e10.values, (n3, a2) => {
      let o2 = a2.join("."), i2 = (t11, n5) => {
        let a3 = e10.transform ? e10.transform(t11) : r10(t11);
        if (k(a3))
          for (let e11 in a3)
            n5(a3[e11], "default" === e11 ? "" : e11);
        else
          n5(a3, "");
      };
      if (x(this._cssVarRefs, [o2], t10(o2)), b(n3))
        for (let e11 in n3)
          i2(n3[e11], (t11, r11) => {
            x(this._values, [`${o2}${r11 ? `/${r11}` : ""}`, e11], t11);
          });
      else
        i2(n3, (e11, t11) => {
          x(this._values, [`${o2}${t11 ? `/${t11}` : ""}`], e11);
        });
    });
  }
};
td.defaultMode = "_default", td.walkValues = function(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let n3 in e10) {
    let a2 = e10[n3];
    if (b(a2)) {
      if (v(a2, "_default")) {
        t10(a2, [...r10, n3]);
        continue;
      }
      td.walkValues(a2, t10, [...r10, n3]);
      continue;
    }
    t10(a2, [...r10, n3]);
  }
};
let tf = class {
  get tokens() {
    return w(this._values);
  }
  get(e10) {
    return this._values[e10];
  }
  constructor(e10) {
    this._values = {}, tf.walkValues(e10.values, (e11, t10) => {
      let r10 = t10.join(".");
      x(this._values, [r10], C(e11, "__mixin"));
    });
  }
};
tf.walkValues = function(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let n3 in e10) {
    let a2 = e10[n3];
    if (b(a2)) {
      if (v(a2, "__mixin")) {
        t10(a2, [...r10, n3]);
        continue;
      }
      tf.walkValues(a2, t10, [...r10, n3]);
      continue;
    }
    t10(a2, [...r10, n3]);
  }
};
let th = (e10) => (t10) => `rgba(var(${t10}-rgb) / ${e10})`, tp = (e10) => M(e10) && v(e10, "token");
function tm(e10, t10) {
  return Object.assign((e11) => t10(e11), { toString: () => e10, token: e10 });
}
var tg = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, ty = /[A-Z]|^ms/g, tb = /_EMO_([^_]+?)_([^]*?)_EMO_/g, tv = function(e10) {
  return 45 === e10.charCodeAt(1);
}, tx = function(e10) {
  return null != e10 && "boolean" != typeof e10;
}, tw = function(e10) {
  var t10 = /* @__PURE__ */ Object.create(null);
  return function(r10) {
    return void 0 === t10[r10] && (t10[r10] = e10(r10)), t10[r10];
  };
}(function(e10) {
  return tv(e10) ? e10 : e10.replace(ty, "-$&").toLowerCase();
}), tk = function(e10, t10) {
  switch (e10) {
    case "animation":
    case "animationName":
      if ("string" == typeof t10)
        return t10.replace(tb, function(e11, t11, r10) {
          return j = { name: t11, styles: r10, next: j }, t11;
        });
  }
  return 1 === tg[e10] || tv(e10) || "number" != typeof t10 || 0 === t10 ? t10 : t10 + "px";
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
        return j = { name: r10.name, styles: r10.styles, next: j }, r10.name;
      if (void 0 !== r10.styles) {
        var n3 = r10.next;
        if (void 0 !== n3)
          for (; void 0 !== n3; )
            j = { name: n3.name, styles: n3.styles, next: j }, n3 = n3.next;
        return r10.styles + ";";
      }
      return function(e11, t11, r11) {
        var n5 = "";
        if (Array.isArray(r11))
          for (var a3 = 0; a3 < r11.length; a3++)
            n5 += tC(e11, t11, r11[a3]) + ";";
        else
          for (var o3 in r11) {
            var i3 = r11[o3];
            if ("object" != typeof i3)
              null != t11 && void 0 !== t11[i3] ? n5 += o3 + "{" + t11[i3] + "}" : tx(i3) && (n5 += tw(o3) + ":" + tk(o3, i3) + ";");
            else if (Array.isArray(i3) && "string" == typeof i3[0] && (null == t11 || void 0 === t11[i3[0]]))
              for (var s2 = 0; s2 < i3.length; s2++)
                tx(i3[s2]) && (n5 += tw(o3) + ":" + tk(o3, i3[s2]) + ";");
            else {
              var l2 = tC(e11, t11, i3);
              switch (o3) {
                case "animation":
                case "animationName":
                  n5 += tw(o3) + ":" + l2 + ";";
                  break;
                default:
                  n5 += o3 + "{" + l2 + "}";
              }
            }
          }
        return n5;
      }(e10, t10, r10);
    case "function":
      if (void 0 !== e10) {
        var a2 = j, o2 = r10(e10);
        return j = a2, tC(e10, t10, o2);
      }
  }
  if (null == t10)
    return r10;
  var i2 = t10[r10];
  return void 0 !== i2 ? i2 : r10;
}
var tM = /label:\s*([^\s;\n{]+)\s*(;|$)/g, tP = function(e10, t10, r10) {
  if (1 === e10.length && "object" == typeof e10[0] && null !== e10[0] && void 0 !== e10[0].styles)
    return e10[0];
  var n3, a2 = true, o2 = "";
  j = void 0;
  var i2 = e10[0];
  null == i2 || void 0 === i2.raw ? (a2 = false, o2 += tC(r10, t10, i2)) : o2 += i2[0];
  for (var s2 = 1; s2 < e10.length; s2++)
    o2 += tC(r10, t10, e10[s2]), a2 && (o2 += i2[s2]);
  tM.lastIndex = 0;
  for (var l2 = ""; null !== (n3 = tM.exec(o2)); )
    l2 += "-" + n3[1];
  return { name: function(e11) {
    for (var t11, r11 = 0, n5 = 0, a3 = e11.length; a3 >= 4; ++n5, a3 -= 4)
      t11 = (65535 & (t11 = 255 & e11.charCodeAt(n5) | (255 & e11.charCodeAt(++n5)) << 8 | (255 & e11.charCodeAt(++n5)) << 16 | (255 & e11.charCodeAt(++n5)) << 24)) * 1540483477 + ((t11 >>> 16) * 59797 << 16), t11 ^= t11 >>> 24, r11 = (65535 & t11) * 1540483477 + ((t11 >>> 16) * 59797 << 16) ^ (65535 & r11) * 1540483477 + ((r11 >>> 16) * 59797 << 16);
    switch (a3) {
      case 3:
        r11 ^= (255 & e11.charCodeAt(n5 + 2)) << 16;
      case 2:
        r11 ^= (255 & e11.charCodeAt(n5 + 1)) << 8;
      case 1:
        r11 ^= 255 & e11.charCodeAt(n5), r11 = (65535 & r11) * 1540483477 + ((r11 >>> 16) * 59797 << 16);
    }
    return r11 ^= r11 >>> 13, (((r11 = (65535 & r11) * 1540483477 + ((r11 >>> 16) * 59797 << 16)) ^ r11 >>> 15) >>> 0).toString(36);
  }(o2) + l2, styles: o2, next: j };
};
let tS = class {
  processAll(e10) {
    let t10 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], r10 = [], { state: n3, extends: a2, ...o2 } = e10;
    if (a2)
      for (let e11 of a2)
        r10.push(...this.processAll(e11, t10));
    if (n3) {
      let e11 = {}, t11 = {};
      tS.walkStateValues(n3, (r11, n5, a3) => {
        let o3 = `--${this.opt.varPrefix}-state-${n5.join("-")}`, i2 = _(n5), s2 = {};
        this.process(s2, i2, r11, false), e11[o3] = s2[i2], x(t11, [...a3, i2], `var(${o3})`);
      }), r10.push(e11), r10.push(...this.processAll(t11));
    }
    if (!O(o2)) {
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
    if (b(r10)) {
      e10[t10 = null !== (a2 = tS.convertSelector(t10)) && void 0 !== a2 ? a2 : t10] = null !== (o2 = e10[t10]) && void 0 !== o2 ? o2 : {}, this.processTo(e10[t10], r10);
      return;
    }
    if (s2 && tn[t10 = null !== (i2 = to[t10]) && void 0 !== i2 ? i2 : t10]) {
      for (let n5 of tn[t10])
        e10[n5] = this.opt.processValue(n5, r10);
      return;
    }
    e10[t10] = this.opt.processValue(t10, r10);
  }
  constructor(e10) {
    this.opt = e10;
  }
};
tS.supportedPseudoClasses = { active: "active", after: "after", anyLink: "any-link", before: "before", blank: "blank", checked: "checked", current: "current", default: "default", defined: "defined", disabled: "disabled", empty: "empty", enabled: "enabled", first: "first", firstChild: "first-child", firstLetter: "first-letter", firstLine: "first-line", firstOfType: "first-of-type", focus: "focus", focusVisible: "focus-visible", focusWithin: "focus-within", fullscreen: "fullscreen", future: "future", hover: "hover", inRange: "in-range", indeterminate: "indeterminate", invalid: "invalid", lastChild: "last-child", lastOfType: "last-of-type", left: "left", link: "link", localLink: "local-link", nthCol: "nth-col", nthLastCol: "nth-last-col", onlyChild: "only-child", onlyOfType: "only-of-type", optional: "optional", outOfRange: "out-of-range", past: "past", paused: "paused", pictureInPicture: "picture-in-picture", placeholderShown: "placeholder-shown", playing: "playing", readOnly: "read-only", readWrite: "read-write", required: "required", right: "right", root: "root", scope: "scope", target: "target", targetWithin: "target-within", userInvalid: "user-invalid", userValid: "user-valid", valid: "valid", visited: "visited" }, tS.convertSelector = (e10) => {
  if (tl[e10])
    return tl[e10];
  if (e10.startsWith("$") || e10.endsWith("$") || e10.startsWith("_")) {
    let t10 = "", r10 = "";
    if (e10.startsWith("_") ? (t10 = "&", e10 = e10.slice(1)) : e10.startsWith("$") ? (t10 = "& ", e10 = e10.slice(1)) : (r10 = " &", e10 = e10.slice(0, e10.length - 1)), e10.startsWith("data") || e10.startsWith("aria")) {
      let [n3, a2] = e10.split("__");
      return a2 ? `${t10}[${P(n3)}='${P(a2)}']${r10}` : `${t10}[${P(n3)}]${r10}`;
    }
    if ("&" == t10) {
      if (e10.startsWith("$"))
        return `${t10}::${e10.slice(1)}`;
      if (tS.supportedPseudoClasses[e10]) {
        let r12 = tS.supportedPseudoClasses[e10];
        return `${t10}:${r12}, ${t10}[data-${r12}]:not([data-${r12}='false']), ${t10}.${r12}`;
      }
      let [r11, n3] = e10.split("__"), a2 = P(r11);
      return n3 ? `${t10}[data-${a2}='${P(n3)}']` : `${t10}[data-${a2}]:not([data-${a2}='false'])`;
    }
  }
}, tS.walkStateValues = function(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { default: {}, selectorPath: [], path: [] }, { $: n3, ...a2 } = e10;
  for (let e11 in a2) {
    var o2;
    let i2 = a2[e11], s2 = null !== (o2 = a2.default) && void 0 !== o2 ? o2 : r10.default, l2 = null != n3 ? n3 : S(s2, [...r10.path.slice(1), "$"]), c2 = l2 ? [...r10.selectorPath, l2] : r10.selectorPath, u2 = [...r10.path, e11];
    if (b(i2)) {
      tS.walkStateValues(i2, t10, { path: u2, selectorPath: c2, default: s2 });
      continue;
    }
    t10(i2, u2, c2);
  }
};
let t_ = (e10) => e10.reduce((e11, t10) => ({ ...e11, [t10]: true }), {}), tO = class {
  static create(e10, t10) {
    return new tO(e10, t10);
  }
  cssVar(e10, t10) {
    return `--${this.varPrefix}-${P(e10)}-${t10.replaceAll(/[./]/g, "-")}`;
  }
  get rootCSSVars() {
    return this.cssVars;
  }
  unstable_css(e10, t10) {
    var r10;
    let n3 = null != t10 ? t10 : {};
    return n3.__emotion_styles = null !== (r10 = n3.__emotion_styles) && void 0 !== r10 ? r10 : tP(this.unstable_sx(t10), null == e10 ? void 0 : e10.registered, {}), n3.__emotion_styles;
  }
  constructor(e10, t10 = {}) {
    var r10, n3;
    for (let a2 in this.cssVars = {}, this.tokens = {}, this.propValues = {}, this.mixins = {}, this.dp = (e11) => 0 === e11 ? 0 : `calc(${e11} * var(${this.cssVar("space", "dp")}))`, this.transformFallback = (e11, t11) => tO.propsCanBaseDp[e11] && T(t11) ? tO.propsCanPercent[e11] && 1 > Math.abs(t11) ? `${100 * t11}%` : this.dp(t11) : t11, this.token = new Proxy({}, { get: (e11, t11) => {
      var r11, n5;
      return this.tokens[t11] ? Object.assign((e12) => {
        var r12;
        return null === (r12 = this.tokens[t11]) || void 0 === r12 ? void 0 : r12.get(e12, `_${this.mode}`);
      }, { tokens: null === (r11 = this.tokens[t11]) || void 0 === r11 ? void 0 : r11.tokens }) : this.mixins[t11] ? Object.assign((e12) => {
        var r12;
        return null === (r12 = this.mixins[t11]) || void 0 === r12 ? void 0 : r12.get(e12);
      }, { tokens: null === (n5 = this.mixins[t11]) || void 0 === n5 ? void 0 : n5.tokens }) : void 0;
    } }), this.processValue = (e11, t11) => {
      var r11, n5, a3;
      if (tp(t11)) {
        let r12 = null === (n5 = this.propValues[e11]) || void 0 === n5 ? void 0 : n5.use(t11.token, true);
        return r12 ? t11(r12) : void 0;
      }
      return null !== (a3 = null === (r11 = this.propValues[e11]) || void 0 === r11 ? void 0 : r11.use(t11)) && void 0 !== a3 ? a3 : this.transformFallback(e11, t11);
    }, this.unstable_sx = (e11) => new tS({ mixins: this.mixins, varPrefix: this.varPrefix, processValue: this.processValue }).processAll(e11), this.varPrefix = null !== (r10 = t10.varPrefix) && void 0 !== r10 ? r10 : "vk", this.mode = null !== (n3 = t10.mode) && void 0 !== n3 ? n3 : "light", x(this.cssVars, [this.cssVar("space", "dp")], "0.1rem"), e10) {
      let t11 = e10[a2];
      if (t11.type == tc.var) {
        let e11 = new td(t11, { cssVar: (e12) => this.cssVar(a2, e12), transformFallback: (e12) => this.transformFallback(t11.on[0], e12) });
        for (let r11 of (this.tokens[a2] = e11, t11.on))
          this.propValues[r11] = e11;
        for (let t12 of e11.tokens)
          for (let r11 of ["light", "dark"]) {
            let n5 = r11 === this.mode ? "_default" : `_${r11}`, o2 = e11.get(t12, n5, true);
            D(o2) || ("_default" === n5 ? x(this.cssVars, [this.cssVar(a2, t12)], o2) : x(this.cssVars, [n5, this.cssVar(a2, t12)], o2));
          }
        continue;
      }
      if (t11.type == tc.mixin) {
        let e11 = new tf(t11);
        for (let r11 of t11.on)
          this.mixins[r11] = e11;
      }
    }
  }
};
tO.propsCanPercent = t_([...tu.boxSize({}).on]), tO.propsCanBaseDp = t_([...tu.boxSize({}).on, ...tu.space({}).on, ...tu.fontSize({}).on, ...tu.letterSpacing({}).on, ...tu.lineHeight({}).on, ...tu.rounded({}).on]);
let tT = { shadow: tu.shadow({ 0: { _default: "0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0)", _dark: "0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0)" }, 1: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)", _dark: "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 2: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)", _dark: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 3: { _default: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)" }, 4: { _default: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)" }, 5: { _default: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)", _dark: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)" } }), elevation: tu.customMixin("elevation", { 0: tu.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "0", _hover: { shadow: "1" } }), 1: tu.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "1", _hover: { shadow: "2" } }), 2: tu.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "2", _hover: { shadow: "3" } }), 3: tu.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "3", _hover: { shadow: "4" } }), 4: tu.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "4", _hover: { shadow: "5" } }) }) }, tD = { font: tu.font({ brand: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', plain: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', code: "'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace" }), fontWeight: tu.fontWeight({ regular: 400, medium: 500, bold: 700 }), textStyle: tu.customMixin("textStyle", { sys: { "display-large": tu.mixin({ lineHeight: 64, fontSize: 57, letterSpacing: -0.25, fontWeight: "regular", font: "brand" }), "display-medium": tu.mixin({ lineHeight: 52, fontSize: 45, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "display-small": tu.mixin({ lineHeight: 44, fontSize: 36, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-large": tu.mixin({ lineHeight: 40, fontSize: 32, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-medium": tu.mixin({ lineHeight: 36, fontSize: 28, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-small": tu.mixin({ lineHeight: 32, fontSize: 24, letterSpacing: 0, fontWeight: "regular", font: "plain" }), "title-large": tu.mixin({ lineHeight: 28, fontSize: 22, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "title-medium": tu.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.15, fontWeight: "medium", font: "plain" }), "title-small": tu.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-large": tu.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-medium": tu.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "label-small": tu.mixin({ lineHeight: 16, fontSize: 11, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "body-large": tu.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.5, fontWeight: "regular", font: "plain" }), "body-medium": tu.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.25, fontWeight: "regular", font: "plain" }), "body-small": tu.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.4, fontWeight: "regular", font: "plain" }) } }) };
function tR(e10) {
  return e10 < 0 ? -1 : 0 === e10 ? 0 : 1;
}
function t$(e10, t10, r10) {
  return r10 < e10 ? e10 : r10 > t10 ? t10 : r10;
}
function tA(e10, t10) {
  let r10 = e10[0] * t10[0][0] + e10[1] * t10[0][1] + e10[2] * t10[0][2], n3 = e10[0] * t10[1][0] + e10[1] * t10[1][1] + e10[2] * t10[1][2], a2 = e10[0] * t10[2][0] + e10[1] * t10[2][1] + e10[2] * t10[2][2];
  return [r10, n3, a2];
}
let tI = [[0.41233895, 0.35762064, 0.18051042], [0.2126, 0.7152, 0.0722], [0.01932141, 0.11916382, 0.95034478]], tB = [[3.2413774792388685, -1.5376652402851851, -0.49885366846268053], [-0.9691452513005321, 1.8758853451067872, 0.04156585616912061], [0.05562093689691305, -0.20395524564742123, 1.0571799111220335]], tF = [95.047, 100, 108.883];
function tL(e10, t10, r10) {
  return (-16777216 | (255 & e10) << 16 | (255 & t10) << 8 | 255 & r10) >>> 0;
}
function tV(e10) {
  let t10 = tN(e10[0]), r10 = tN(e10[1]), n3 = tN(e10[2]);
  return tL(t10, r10, n3);
}
function tj(e10) {
  let t10 = function(e11) {
    let t11 = tz(e11 >> 16 & 255), r10 = tz(e11 >> 8 & 255), n3 = tz(255 & e11);
    return tA([t11, r10, n3], tI);
  }(e10)[1];
  return 116 * tW(t10 / 100) - 16;
}
function tE(e10) {
  return 100 * function(e11) {
    let t10 = e11 * e11 * e11;
    return t10 > 216 / 24389 ? t10 : (116 * e11 - 16) / (24389 / 27);
  }((e10 + 16) / 116);
}
function tH(e10) {
  return 116 * tW(e10 / 100) - 16;
}
function tz(e10) {
  let t10 = e10 / 255;
  return t10 <= 0.040449936 ? t10 / 12.92 * 100 : 100 * Math.pow((t10 + 0.055) / 1.055, 2.4);
}
function tN(e10) {
  var t10;
  let r10 = e10 / 100;
  return (t10 = Math.round(255 * (r10 <= 31308e-7 ? 12.92 * r10 : 1.055 * Math.pow(r10, 1 / 2.4) - 0.055))) < 0 ? 0 : t10 > 255 ? 255 : t10;
}
function tW(e10) {
  return e10 > 216 / 24389 ? Math.pow(e10, 1 / 3) : (24389 / 27 * e10 + 16) / 116;
}
class tq {
  static make() {
    var e10, t10;
    let r10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tF, n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200 / Math.PI * tE(50) / 100, a2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50, o2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2, i2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], s2 = 0.401288 * r10[0] + 0.650173 * r10[1] + -0.051461 * r10[2], l2 = -0.250268 * r10[0] + 1.204414 * r10[1] + 0.045854 * r10[2], c2 = -2079e-6 * r10[0] + 0.048952 * r10[1] + 0.953127 * r10[2], u2 = 0.8 + o2 / 10, d2 = u2 >= 0.9 ? (1 - (e10 = (u2 - 0.9) * 10)) * 0.59 + 0.69 * e10 : (1 - (t10 = (u2 - 0.8) * 10)) * 0.525 + 0.59 * t10, f2 = i2 ? 1 : u2 * (1 - 1 / 3.6 * Math.exp((-n3 - 42) / 92));
    f2 = f2 > 1 ? 1 : f2 < 0 ? 0 : f2;
    let h2 = [f2 * (100 / s2) + 1 - f2, f2 * (100 / l2) + 1 - f2, f2 * (100 / c2) + 1 - f2], p2 = 1 / (5 * n3 + 1), m2 = p2 * p2 * p2 * p2, g2 = 1 - m2, y2 = m2 * n3 + 0.1 * g2 * g2 * Math.cbrt(5 * n3), b2 = tE(a2) / r10[1], v2 = 1.48 + Math.sqrt(b2), x2 = 0.725 / Math.pow(b2, 0.2), w2 = [Math.pow(y2 * h2[0] * s2 / 100, 0.42), Math.pow(y2 * h2[1] * l2 / 100, 0.42), Math.pow(y2 * h2[2] * c2 / 100, 0.42)], k2 = [400 * w2[0] / (w2[0] + 27.13), 400 * w2[1] / (w2[1] + 27.13), 400 * w2[2] / (w2[2] + 27.13)], C2 = (2 * k2[0] + k2[1] + 0.05 * k2[2]) * x2;
    return new tq(b2, C2, x2, x2, d2, u2, h2, y2, Math.pow(y2, 0.25), v2);
  }
  constructor(e10, t10, r10, n3, a2, o2, i2, s2, l2, c2) {
    this.n = e10, this.aw = t10, this.nbb = r10, this.ncb = n3, this.c = a2, this.nc = o2, this.rgbD = i2, this.fl = s2, this.fLRoot = l2, this.z = c2;
  }
}
tq.DEFAULT = tq.make();
class tU {
  distance(e10) {
    let t10 = this.jstar - e10.jstar, r10 = this.astar - e10.astar, n3 = this.bstar - e10.bstar;
    return 1.41 * Math.pow(Math.sqrt(t10 * t10 + r10 * r10 + n3 * n3), 0.63);
  }
  static fromInt(e10) {
    return tU.fromIntInViewingConditions(e10, tq.DEFAULT);
  }
  static fromIntInViewingConditions(e10, t10) {
    let r10 = tz((16711680 & e10) >> 16), n3 = tz((65280 & e10) >> 8), a2 = tz(255 & e10), o2 = 0.41233895 * r10 + 0.35762064 * n3 + 0.18051042 * a2, i2 = 0.2126 * r10 + 0.7152 * n3 + 0.0722 * a2, s2 = 0.01932141 * r10 + 0.11916382 * n3 + 0.95034478 * a2, l2 = t10.rgbD[0] * (0.401288 * o2 + 0.650173 * i2 - 0.051461 * s2), c2 = t10.rgbD[1] * (-0.250268 * o2 + 1.204414 * i2 + 0.045854 * s2), u2 = t10.rgbD[2] * (-2079e-6 * o2 + 0.048952 * i2 + 0.953127 * s2), d2 = Math.pow(t10.fl * Math.abs(l2) / 100, 0.42), f2 = Math.pow(t10.fl * Math.abs(c2) / 100, 0.42), h2 = Math.pow(t10.fl * Math.abs(u2) / 100, 0.42), p2 = 400 * tR(l2) * d2 / (d2 + 27.13), m2 = 400 * tR(c2) * f2 / (f2 + 27.13), g2 = 400 * tR(u2) * h2 / (h2 + 27.13), y2 = (11 * p2 + -12 * m2 + g2) / 11, b2 = (p2 + m2 - 2 * g2) / 9, v2 = 180 * Math.atan2(b2, y2) / Math.PI, x2 = v2 < 0 ? v2 + 360 : v2 >= 360 ? v2 - 360 : v2, w2 = x2 * Math.PI / 180, k2 = (40 * p2 + 20 * m2 + g2) / 20 * t10.nbb, C2 = 100 * Math.pow(k2 / t10.aw, t10.c * t10.z), M2 = 4 / t10.c * Math.sqrt(C2 / 100) * (t10.aw + 4) * t10.fLRoot, P2 = x2 < 20.14 ? x2 + 360 : x2, S2 = 5e4 / 13 * (0.25 * (Math.cos(P2 * Math.PI / 180 + 2) + 3.8)) * t10.nc * t10.ncb, _2 = Math.pow(S2 * Math.sqrt(y2 * y2 + b2 * b2) / ((20 * p2 + 20 * m2 + 21 * g2) / 20 + 0.305), 0.9) * Math.pow(1.64 - Math.pow(0.29, t10.n), 0.73), O2 = _2 * Math.sqrt(C2 / 100), T2 = O2 * t10.fLRoot, D2 = 50 * Math.sqrt(_2 * t10.c / (t10.aw + 4)), R2 = (1 + 100 * 7e-3) * C2 / (1 + 7e-3 * C2), $2 = 1 / 0.0228 * Math.log(1 + 0.0228 * T2), A2 = $2 * Math.cos(w2), I2 = $2 * Math.sin(w2);
    return new tU(x2, O2, C2, M2, T2, D2, R2, A2, I2);
  }
  static fromJch(e10, t10, r10) {
    return tU.fromJchInViewingConditions(e10, t10, r10, tq.DEFAULT);
  }
  static fromJchInViewingConditions(e10, t10, r10, n3) {
    let a2 = 4 / n3.c * Math.sqrt(e10 / 100) * (n3.aw + 4) * n3.fLRoot, o2 = t10 * n3.fLRoot, i2 = t10 / Math.sqrt(e10 / 100), s2 = 50 * Math.sqrt(i2 * n3.c / (n3.aw + 4)), l2 = r10 * Math.PI / 180, c2 = (1 + 100 * 7e-3) * e10 / (1 + 7e-3 * e10), u2 = 1 / 0.0228 * Math.log(1 + 0.0228 * o2), d2 = u2 * Math.cos(l2), f2 = u2 * Math.sin(l2);
    return new tU(r10, t10, e10, a2, o2, s2, c2, d2, f2);
  }
  static fromUcs(e10, t10, r10) {
    return tU.fromUcsInViewingConditions(e10, t10, r10, tq.DEFAULT);
  }
  static fromUcsInViewingConditions(e10, t10, r10, n3) {
    let a2 = (Math.exp(0.0228 * Math.sqrt(t10 * t10 + r10 * r10)) - 1) / 0.0228 / n3.fLRoot, o2 = Math.atan2(r10, t10) * (180 / Math.PI);
    return o2 < 0 && (o2 += 360), tU.fromJchInViewingConditions(e10 / (1 - (e10 - 100) * 7e-3), a2, o2, n3);
  }
  toInt() {
    return this.viewed(tq.DEFAULT);
  }
  viewed(e10) {
    let t10 = 0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100), r10 = Math.pow(t10 / Math.pow(1.64 - Math.pow(0.29, e10.n), 0.73), 1 / 0.9), n3 = this.hue * Math.PI / 180, a2 = e10.aw * Math.pow(this.j / 100, 1 / e10.c / e10.z), o2 = 0.25 * (Math.cos(n3 + 2) + 3.8) * (5e4 / 13) * e10.nc * e10.ncb, i2 = a2 / e10.nbb, s2 = Math.sin(n3), l2 = Math.cos(n3), c2 = 23 * (i2 + 0.305) * r10 / (23 * o2 + 11 * r10 * l2 + 108 * r10 * s2), u2 = c2 * l2, d2 = c2 * s2, f2 = (460 * i2 + 451 * u2 + 288 * d2) / 1403, h2 = (460 * i2 - 891 * u2 - 261 * d2) / 1403, p2 = (460 * i2 - 220 * u2 - 6300 * d2) / 1403, m2 = Math.max(0, 27.13 * Math.abs(f2) / (400 - Math.abs(f2))), g2 = tR(f2) * (100 / e10.fl) * Math.pow(m2, 1 / 0.42), y2 = Math.max(0, 27.13 * Math.abs(h2) / (400 - Math.abs(h2))), b2 = tR(h2) * (100 / e10.fl) * Math.pow(y2, 1 / 0.42), v2 = Math.max(0, 27.13 * Math.abs(p2) / (400 - Math.abs(p2))), x2 = tR(p2) * (100 / e10.fl) * Math.pow(v2, 1 / 0.42), w2 = g2 / e10.rgbD[0], k2 = b2 / e10.rgbD[1], C2 = x2 / e10.rgbD[2], M2 = function(e11, t11, r11) {
      let n5 = tB[0][0] * e11 + tB[0][1] * t11 + tB[0][2] * r11, a3 = tB[1][0] * e11 + tB[1][1] * t11 + tB[1][2] * r11, o3 = tB[2][0] * e11 + tB[2][1] * t11 + tB[2][2] * r11, i3 = tN(n5), s3 = tN(a3), l3 = tN(o3);
      return tL(i3, s3, l3);
    }(1.86206786 * w2 - 1.01125463 * k2 + 0.14918677 * C2, 0.38752654 * w2 + 0.62144744 * k2 - 897398e-8 * C2, -0.0158415 * w2 - 0.03412294 * k2 + 1.04996444 * C2);
    return M2;
  }
  static fromXyzInViewingConditions(e10, t10, r10, n3) {
    let a2 = n3.rgbD[0] * (0.401288 * e10 + 0.650173 * t10 - 0.051461 * r10), o2 = n3.rgbD[1] * (-0.250268 * e10 + 1.204414 * t10 + 0.045854 * r10), i2 = n3.rgbD[2] * (-2079e-6 * e10 + 0.048952 * t10 + 0.953127 * r10), s2 = Math.pow(n3.fl * Math.abs(a2) / 100, 0.42), l2 = Math.pow(n3.fl * Math.abs(o2) / 100, 0.42), c2 = Math.pow(n3.fl * Math.abs(i2) / 100, 0.42), u2 = 400 * tR(a2) * s2 / (s2 + 27.13), d2 = 400 * tR(o2) * l2 / (l2 + 27.13), f2 = 400 * tR(i2) * c2 / (c2 + 27.13), h2 = (11 * u2 + -12 * d2 + f2) / 11, p2 = (u2 + d2 - 2 * f2) / 9, m2 = 180 * Math.atan2(p2, h2) / Math.PI, g2 = m2 < 0 ? m2 + 360 : m2 >= 360 ? m2 - 360 : m2, y2 = g2 * Math.PI / 180, b2 = (40 * u2 + 20 * d2 + f2) / 20 * n3.nbb, v2 = 100 * Math.pow(b2 / n3.aw, n3.c * n3.z), x2 = 4 / n3.c * Math.sqrt(v2 / 100) * (n3.aw + 4) * n3.fLRoot, w2 = g2 < 20.14 ? g2 + 360 : g2, k2 = 5e4 / 13 * (0.25 * (Math.cos(w2 * Math.PI / 180 + 2) + 3.8)) * n3.nc * n3.ncb, C2 = Math.pow(k2 * Math.sqrt(h2 * h2 + p2 * p2) / ((20 * u2 + 20 * d2 + 21 * f2) / 20 + 0.305), 0.9) * Math.pow(1.64 - Math.pow(0.29, n3.n), 0.73), M2 = C2 * Math.sqrt(v2 / 100), P2 = M2 * n3.fLRoot, S2 = 50 * Math.sqrt(C2 * n3.c / (n3.aw + 4)), _2 = (1 + 100 * 7e-3) * v2 / (1 + 7e-3 * v2), O2 = Math.log(1 + 0.0228 * P2) / 0.0228, T2 = O2 * Math.cos(y2), D2 = O2 * Math.sin(y2);
    return new tU(g2, M2, v2, x2, P2, S2, _2, T2, D2);
  }
  xyzInViewingConditions(e10) {
    let t10 = 0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100), r10 = Math.pow(t10 / Math.pow(1.64 - Math.pow(0.29, e10.n), 0.73), 1 / 0.9), n3 = this.hue * Math.PI / 180, a2 = e10.aw * Math.pow(this.j / 100, 1 / e10.c / e10.z), o2 = 0.25 * (Math.cos(n3 + 2) + 3.8) * (5e4 / 13) * e10.nc * e10.ncb, i2 = a2 / e10.nbb, s2 = Math.sin(n3), l2 = Math.cos(n3), c2 = 23 * (i2 + 0.305) * r10 / (23 * o2 + 11 * r10 * l2 + 108 * r10 * s2), u2 = c2 * l2, d2 = c2 * s2, f2 = (460 * i2 + 451 * u2 + 288 * d2) / 1403, h2 = (460 * i2 - 891 * u2 - 261 * d2) / 1403, p2 = (460 * i2 - 220 * u2 - 6300 * d2) / 1403, m2 = Math.max(0, 27.13 * Math.abs(f2) / (400 - Math.abs(f2))), g2 = tR(f2) * (100 / e10.fl) * Math.pow(m2, 1 / 0.42), y2 = Math.max(0, 27.13 * Math.abs(h2) / (400 - Math.abs(h2))), b2 = tR(h2) * (100 / e10.fl) * Math.pow(y2, 1 / 0.42), v2 = Math.max(0, 27.13 * Math.abs(p2) / (400 - Math.abs(p2))), x2 = tR(p2) * (100 / e10.fl) * Math.pow(v2, 1 / 0.42), w2 = g2 / e10.rgbD[0], k2 = b2 / e10.rgbD[1], C2 = x2 / e10.rgbD[2];
    return [1.86206786 * w2 - 1.01125463 * k2 + 0.14918677 * C2, 0.38752654 * w2 + 0.62144744 * k2 - 897398e-8 * C2, -0.0158415 * w2 - 0.03412294 * k2 + 1.04996444 * C2];
  }
  constructor(e10, t10, r10, n3, a2, o2, i2, s2, l2) {
    this.hue = e10, this.chroma = t10, this.j = r10, this.q = n3, this.m = a2, this.s = o2, this.jstar = i2, this.astar = s2, this.bstar = l2;
  }
}
class tG {
  static sanitizeRadians(e10) {
    return (e10 + 8 * Math.PI) % (2 * Math.PI);
  }
  static trueDelinearized(e10) {
    let t10 = e10 / 100;
    return 255 * (t10 <= 31308e-7 ? 12.92 * t10 : 1.055 * Math.pow(t10, 1 / 2.4) - 0.055);
  }
  static chromaticAdaptation(e10) {
    let t10 = Math.pow(Math.abs(e10), 0.42);
    return 400 * tR(e10) * t10 / (t10 + 27.13);
  }
  static hueOf(e10) {
    let t10 = tA(e10, tG.SCALED_DISCOUNT_FROM_LINRGB), r10 = tG.chromaticAdaptation(t10[0]), n3 = tG.chromaticAdaptation(t10[1]), a2 = tG.chromaticAdaptation(t10[2]);
    return Math.atan2((r10 + n3 - 2 * a2) / 9, (11 * r10 + -12 * n3 + a2) / 11);
  }
  static areInCyclicOrder(e10, t10, r10) {
    let n3 = tG.sanitizeRadians(t10 - e10), a2 = tG.sanitizeRadians(r10 - e10);
    return n3 < a2;
  }
  static intercept(e10, t10, r10) {
    return (t10 - e10) / (r10 - e10);
  }
  static lerpPoint(e10, t10, r10) {
    return [e10[0] + (r10[0] - e10[0]) * t10, e10[1] + (r10[1] - e10[1]) * t10, e10[2] + (r10[2] - e10[2]) * t10];
  }
  static setCoordinate(e10, t10, r10, n3) {
    let a2 = tG.intercept(e10[n3], t10, r10[n3]);
    return tG.lerpPoint(e10, a2, r10);
  }
  static isBounded(e10) {
    return 0 <= e10 && e10 <= 100;
  }
  static nthVertex(e10, t10) {
    let r10 = tG.Y_FROM_LINRGB[0], n3 = tG.Y_FROM_LINRGB[1], a2 = tG.Y_FROM_LINRGB[2], o2 = t10 % 4 <= 1 ? 0 : 100, i2 = t10 % 2 == 0 ? 0 : 100;
    if (t10 < 4) {
      let t11 = (e10 - o2 * n3 - i2 * a2) / r10;
      return tG.isBounded(t11) ? [t11, o2, i2] : [-1, -1, -1];
    }
    if (t10 < 8) {
      let t11 = (e10 - i2 * r10 - o2 * a2) / n3;
      return tG.isBounded(t11) ? [i2, t11, o2] : [-1, -1, -1];
    }
    {
      let t11 = (e10 - o2 * r10 - i2 * n3) / a2;
      return tG.isBounded(t11) ? [o2, i2, t11] : [-1, -1, -1];
    }
  }
  static bisectToSegment(e10, t10) {
    let r10 = [-1, -1, -1], n3 = r10, a2 = 0, o2 = 0, i2 = false, s2 = true;
    for (let l2 = 0; l2 < 12; l2++) {
      let c2 = tG.nthVertex(e10, l2);
      if (c2[0] < 0)
        continue;
      let u2 = tG.hueOf(c2);
      if (!i2) {
        r10 = c2, n3 = c2, a2 = u2, o2 = u2, i2 = true;
        continue;
      }
      (s2 || tG.areInCyclicOrder(a2, u2, o2)) && (s2 = false, tG.areInCyclicOrder(a2, t10, u2) ? (n3 = c2, o2 = u2) : (r10 = c2, a2 = u2));
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
    let r10 = tG.bisectToSegment(e10, t10), n3 = r10[0], a2 = tG.hueOf(n3), o2 = r10[1];
    for (let e11 = 0; e11 < 3; e11++)
      if (n3[e11] !== o2[e11]) {
        let r11 = -1, i2 = 255;
        n3[e11] < o2[e11] ? (r11 = tG.criticalPlaneBelow(tG.trueDelinearized(n3[e11])), i2 = tG.criticalPlaneAbove(tG.trueDelinearized(o2[e11]))) : (r11 = tG.criticalPlaneAbove(tG.trueDelinearized(n3[e11])), i2 = tG.criticalPlaneBelow(tG.trueDelinearized(o2[e11])));
        for (let s2 = 0; s2 < 8 && !(1 >= Math.abs(i2 - r11)); s2++) {
          let s3 = Math.floor((r11 + i2) / 2), l2 = tG.CRITICAL_PLANES[s3], c2 = tG.setCoordinate(n3, l2, o2, e11), u2 = tG.hueOf(c2);
          tG.areInCyclicOrder(a2, t10, u2) ? (o2 = c2, i2 = s3) : (n3 = c2, a2 = u2, r11 = s3);
        }
      }
    return tG.midpoint(n3, o2);
  }
  static inverseChromaticAdaptation(e10) {
    let t10 = Math.abs(e10);
    return tR(e10) * Math.pow(Math.max(0, 27.13 * t10 / (400 - t10)), 1 / 0.42);
  }
  static findResultByJ(e10, t10, r10) {
    let n3 = 11 * Math.sqrt(r10), a2 = tq.DEFAULT, o2 = 1 / Math.pow(1.64 - Math.pow(0.29, a2.n), 0.73), i2 = 0.25 * (Math.cos(e10 + 2) + 3.8) * (5e4 / 13) * a2.nc * a2.ncb, s2 = Math.sin(e10), l2 = Math.cos(e10);
    for (let e11 = 0; e11 < 5; e11++) {
      let c2 = n3 / 100, u2 = 0 === t10 || 0 === n3 ? 0 : t10 / Math.sqrt(c2), d2 = Math.pow(u2 * o2, 1 / 0.9), f2 = a2.aw * Math.pow(c2, 1 / a2.c / a2.z), h2 = f2 / a2.nbb, p2 = 23 * (h2 + 0.305) * d2 / (23 * i2 + 11 * d2 * l2 + 108 * d2 * s2), m2 = p2 * l2, g2 = p2 * s2, y2 = (460 * h2 + 451 * m2 + 288 * g2) / 1403, b2 = (460 * h2 - 891 * m2 - 261 * g2) / 1403, v2 = (460 * h2 - 220 * m2 - 6300 * g2) / 1403, x2 = tG.inverseChromaticAdaptation(y2), w2 = tG.inverseChromaticAdaptation(b2), k2 = tG.inverseChromaticAdaptation(v2), C2 = tA([x2, w2, k2], tG.LINRGB_FROM_SCALED_DISCOUNT);
      if (C2[0] < 0 || C2[1] < 0 || C2[2] < 0)
        break;
      let M2 = tG.Y_FROM_LINRGB[0], P2 = tG.Y_FROM_LINRGB[1], S2 = tG.Y_FROM_LINRGB[2], _2 = M2 * C2[0] + P2 * C2[1] + S2 * C2[2];
      if (_2 <= 0)
        break;
      if (4 === e11 || 2e-3 > Math.abs(_2 - r10)) {
        if (C2[0] > 100.01 || C2[1] > 100.01 || C2[2] > 100.01)
          return 0;
        return tV(C2);
      }
      n3 -= (_2 - r10) * n3 / (2 * _2);
    }
    return 0;
  }
  static solveToInt(e10, t10, r10) {
    var n3;
    if (t10 < 1e-4 || r10 < 1e-4 || r10 > 99.9999)
      return function(e11) {
        let t11 = tE(e11), r11 = tN(t11);
        return tL(r11, r11, r11);
      }(r10);
    (n3 = e10 % 360) < 0 && (n3 += 360), e10 = n3;
    let a2 = e10 / 180 * Math.PI, o2 = tE(r10), i2 = tG.findResultByJ(a2, t10, o2);
    if (0 !== i2)
      return i2;
    let s2 = tG.bisectToLimit(o2, a2);
    return tV(s2);
  }
  static solveToCam(e10, t10, r10) {
    return tU.fromInt(tG.solveToInt(e10, t10, r10));
  }
}
tG.SCALED_DISCOUNT_FROM_LINRGB = [[0.001200833568784504, 0.002389694492170889, 2795742885861124e-19], [5891086651375999e-19, 0.0029785502573438758, 3270666104008398e-19], [10146692491640572e-20, 5364214359186694e-19, 0.0032979401770712076]], tG.LINRGB_FROM_SCALED_DISCOUNT = [[1373.2198709594231, -1100.4251190754821, -7.278681089101213], [-271.815969077903, 559.6580465940733, -32.46047482791194], [1.9622899599665666, -57.173814538844006, 308.7233197812385]], tG.Y_FROM_LINRGB = [0.2126, 0.7152, 0.0722], tG.CRITICAL_PLANES = [0.015176349177441876, 0.045529047532325624, 0.07588174588720938, 0.10623444424209313, 0.13658714259697685, 0.16693984095186062, 0.19729253930674434, 0.2276452376616281, 0.2579979360165119, 0.28835063437139563, 0.3188300904430532, 0.350925934958123, 0.3848314933096426, 0.42057480301049466, 0.458183274052838, 0.4976837250274023, 0.5391024159806381, 0.5824650784040898, 0.6277969426914107, 0.6751227633498623, 0.7244668422128921, 0.775853049866786, 0.829304845476233, 0.8848452951698498, 0.942497089126609, 1.0022825574869039, 1.0642236851973577, 1.1283421258858297, 1.1946592148522128, 1.2631959812511864, 1.3339731595349034, 1.407011200216447, 1.4823302800086415, 1.5599503113873272, 1.6398909516233677, 1.7221716113234105, 1.8068114625156377, 1.8938294463134073, 1.9832442801866852, 2.075074464868551, 2.1693382909216234, 2.2660538449872063, 2.36523901573795, 2.4669114995532007, 2.5710888059345764, 2.6777882626779785, 2.7870270208169257, 2.898822059350997, 3.0131901897720907, 3.1301480604002863, 3.2497121605402226, 3.3718988244681087, 3.4967242352587946, 3.624204428461639, 3.754355295633311, 3.887192587735158, 4.022731918402185, 4.160988767090289, 4.301978482107941, 4.445716283538092, 4.592217266055746, 4.741496401646282, 4.893568542229298, 5.048448422192488, 5.20615066083972, 5.3666897647573375, 5.5300801301023865, 5.696336044816294, 5.865471690767354, 6.037501145825082, 6.212438385869475, 6.390297286737924, 6.571091626112461, 6.7548350853498045, 6.941541251256611, 7.131223617812143, 7.323895587840543, 7.5195704746346665, 7.7182615035334345, 7.919981813454504, 8.124744458384042, 8.332562408825165, 8.543448553206703, 8.757415699253682, 8.974476575321063, 9.194643831691977, 9.417930041841839, 9.644347703669503, 9.873909240696694, 10.106627003236781, 10.342513269534024, 10.58158024687427, 10.8238400726681, 11.069304815507364, 11.317986476196008, 11.569896988756009, 11.825048221409341, 12.083451977536606, 12.345119996613247, 12.610063955123938, 12.878295467455942, 13.149826086772048, 13.42466730586372, 13.702830557985108, 13.984327217668513, 14.269168601521828, 14.55736596900856, 14.848930523210871, 15.143873411576273, 15.44220572664832, 15.743938506781891, 16.04908273684337, 16.35764934889634, 16.66964922287304, 16.985093187232053, 17.30399201960269, 17.62635644741625, 17.95219714852476, 18.281524751807332, 18.614349837764564, 18.95068293910138, 19.290534541298456, 19.633915083172692, 19.98083495742689, 20.331304511189067, 20.685334046541502, 21.042933821039977, 21.404114048223256, 21.76888489811322, 22.137256497705877, 22.50923893145328, 22.884842241736916, 23.264076429332462, 23.6469514538663, 24.033477234264016, 24.42366364919083, 24.817520537484558, 25.21505769858089, 25.61628489293138, 26.021211842414342, 26.429848230738664, 26.842203703840827, 27.258287870275353, 27.678110301598522, 28.10168053274597, 28.529008062403893, 28.96010235337422, 29.39497283293396, 29.83362889318845, 30.276079891419332, 30.722335150426627, 31.172403958865512, 31.62629557157785, 32.08401920991837, 32.54558406207592, 33.010999283389665, 33.4802739966603, 33.953417292456834, 34.430438229418264, 34.911345834551085, 35.39614910352207, 35.88485700094671, 36.37747846067349, 36.87402238606382, 37.37449765026789, 37.87891309649659, 38.38727753828926, 38.89959975977785, 39.41588851594697, 39.93615253289054, 40.460400508064545, 40.98864111053629, 41.520882981230194, 42.05713473317016, 42.597404951718396, 43.141702194811224, 43.6900349931913, 44.24241185063697, 44.798841244188324, 45.35933162437017, 45.92389141541209, 46.49252901546552, 47.065252796817916, 47.64207110610409, 48.22299226451468, 48.808024568002054, 49.3971762874833, 49.9904556690408, 50.587870934119984, 51.189430279724725, 51.79514187861014, 52.40501387947288, 53.0190544071392, 53.637271562750364, 54.259673423945976, 54.88626804504493, 55.517063457223934, 56.15206766869424, 56.79128866487574, 57.43473440856916, 58.08241284012621, 58.734331877617365, 59.39049941699807, 60.05092333227251, 60.715611475655585, 61.38457167773311, 62.057811747619894, 62.7353394731159, 63.417162620860914, 64.10328893648692, 64.79372614476921, 65.48848194977529, 66.18756403501224, 66.89098006357258, 67.59873767827808, 68.31084450182222, 69.02730813691093, 69.74813616640164, 70.47333615344107, 71.20291564160104, 71.93688215501312, 72.67524319850172, 73.41800625771542, 74.16517879925733, 74.9167682708136, 75.67278210128072, 76.43322770089146, 77.1981124613393, 77.96744375590167, 78.74122893956174, 79.51947534912904, 80.30219030335869, 81.08938110306934, 81.88105503125999, 82.67721935322541, 83.4778813166706, 84.28304815182372, 85.09272707154808, 85.90692527145302, 86.72564993000343, 87.54890820862819, 88.3767072518277, 89.2090541872801, 90.04595612594655, 90.88742016217518, 91.73345337380438, 92.58406282226491, 93.43925555268066, 94.29903859396902, 95.16341895893969, 96.03240364439274, 96.9059996312159, 97.78421388448044, 98.6670533535366, 99.55452497210776];
class tY {
  static from(e10, t10, r10) {
    return new tY(tG.solveToInt(e10, t10, r10));
  }
  static fromInt(e10) {
    return new tY(e10);
  }
  toInt() {
    return this.argb;
  }
  get hue() {
    return this.internalHue;
  }
  set hue(e10) {
    this.setInternalState(tG.solveToInt(e10, this.internalChroma, this.internalTone));
  }
  get chroma() {
    return this.internalChroma;
  }
  set chroma(e10) {
    this.setInternalState(tG.solveToInt(this.internalHue, e10, this.internalTone));
  }
  get tone() {
    return this.internalTone;
  }
  set tone(e10) {
    this.setInternalState(tG.solveToInt(this.internalHue, this.internalChroma, e10));
  }
  setInternalState(e10) {
    let t10 = tU.fromInt(e10);
    this.internalHue = t10.hue, this.internalChroma = t10.chroma, this.internalTone = tj(e10), this.argb = e10;
  }
  inViewingConditions(e10) {
    let t10 = tU.fromInt(this.toInt()), r10 = t10.xyzInViewingConditions(e10), n3 = tU.fromXyzInViewingConditions(r10[0], r10[1], r10[2], tq.make()), a2 = tY.from(n3.hue, n3.chroma, tH(r10[1]));
    return a2;
  }
  constructor(e10) {
    this.argb = e10;
    let t10 = tU.fromInt(e10);
    this.internalHue = t10.hue, this.internalChroma = t10.chroma, this.internalTone = tj(e10), this.argb = e10;
  }
}
class tX {
  static ratioOfTones(e10, t10) {
    return e10 = t$(0, 100, e10), t10 = t$(0, 100, t10), tX.ratioOfYs(tE(e10), tE(t10));
  }
  static ratioOfYs(e10, t10) {
    let r10 = e10 > t10 ? e10 : t10;
    return (r10 + 5) / ((r10 === t10 ? e10 : t10) + 5);
  }
  static lighter(e10, t10) {
    if (e10 < 0 || e10 > 100)
      return -1;
    let r10 = tE(e10), n3 = t10 * (r10 + 5) - 5, a2 = tX.ratioOfYs(n3, r10);
    if (a2 < t10 && Math.abs(a2 - t10) > 0.04)
      return -1;
    let o2 = tH(n3) + 0.4;
    return o2 < 0 || o2 > 100 ? -1 : o2;
  }
  static darker(e10, t10) {
    if (e10 < 0 || e10 > 100)
      return -1;
    let r10 = tE(e10), n3 = (r10 + 5) / t10 - 5, a2 = tX.ratioOfYs(r10, n3);
    if (a2 < t10 && Math.abs(a2 - t10) > 0.04)
      return -1;
    let o2 = tH(n3) - 0.4;
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
class tJ {
  static isDisliked(e10) {
    let t10 = Math.round(e10.hue) >= 90 && 111 >= Math.round(e10.hue), r10 = Math.round(e10.chroma) > 16, n3 = 65 > Math.round(e10.tone);
    return t10 && r10 && n3;
  }
  static fixIfDisliked(e10) {
    return tJ.isDisliked(e10) ? tY.from(e10.hue, e10.chroma, 70) : e10;
  }
}
class tK {
  static fromPalette(e10) {
    var t10, r10;
    return new tK(null !== (t10 = e10.name) && void 0 !== t10 ? t10 : "", e10.palette, e10.tone, null !== (r10 = e10.isBackground) && void 0 !== r10 && r10, e10.background, e10.secondBackground, e10.contrastCurve, e10.toneDeltaPair);
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
      let r10 = this.toneDeltaPair(e10), n3 = r10.roleA, a2 = r10.roleB, o2 = r10.delta, i2 = r10.polarity, s2 = r10.stayTogether, l2 = this.background(e10), c2 = l2.getTone(e10), u2 = "nearer" === i2 || "lighter" === i2 && !e10.isDark || "darker" === i2 && e10.isDark, d2 = u2 ? n3 : a2, f2 = u2 ? a2 : n3, h2 = this.name === d2.name, p2 = e10.isDark ? 1 : -1, m2 = d2.contrastCurve.getContrast(e10.contrastLevel), g2 = f2.contrastCurve.getContrast(e10.contrastLevel), y2 = d2.tone(e10), b2 = tX.ratioOfTones(c2, y2) >= m2 ? y2 : tK.foregroundTone(c2, m2), v2 = f2.tone(e10), x2 = tX.ratioOfTones(c2, v2) >= g2 ? v2 : tK.foregroundTone(c2, g2);
      return t10 && (b2 = tK.foregroundTone(c2, m2), x2 = tK.foregroundTone(c2, g2)), (x2 - b2) * p2 >= o2 || ((x2 = t$(0, 100, b2 + o2 * p2)) - b2) * p2 >= o2 || (b2 = t$(0, 100, x2 - o2 * p2)), 50 <= b2 && b2 < 60 ? x2 = p2 > 0 ? Math.max(x2, (b2 = 60) + o2 * p2) : Math.min(x2, (b2 = 49) + o2 * p2) : 50 <= x2 && x2 < 60 && (x2 = s2 ? p2 > 0 ? Math.max(x2, (b2 = 60) + o2 * p2) : Math.min(x2, (b2 = 49) + o2 * p2) : p2 > 0 ? 60 : 49), h2 ? b2 : x2;
    }
    {
      let r10 = this.tone(e10);
      if (null == this.background)
        return r10;
      let n3 = this.background(e10).getTone(e10), a2 = this.contrastCurve.getContrast(e10.contrastLevel);
      if (tX.ratioOfTones(n3, r10) >= a2 || (r10 = tK.foregroundTone(n3, a2)), t10 && (r10 = tK.foregroundTone(n3, a2)), this.isBackground && 50 <= r10 && r10 < 60 && (r10 = tX.ratioOfTones(49, n3) >= a2 ? 49 : 60), this.secondBackground) {
        let [t11, n5] = [this.background, this.secondBackground], [o2, i2] = [t11(e10).getTone(e10), n5(e10).getTone(e10)], [s2, l2] = [Math.max(o2, i2), Math.min(o2, i2)];
        if (tX.ratioOfTones(s2, r10) >= a2 && tX.ratioOfTones(l2, r10) >= a2)
          return r10;
        let c2 = tX.lighter(s2, a2), u2 = tX.darker(l2, a2), d2 = [];
        -1 !== c2 && d2.push(c2), -1 !== u2 && d2.push(u2);
        let f2 = tK.tonePrefersLightForeground(o2) || tK.tonePrefersLightForeground(i2);
        return f2 ? c2 < 0 ? 100 : c2 : 1 === d2.length ? d2[0] : u2 < 0 ? 0 : u2;
      }
      return r10;
    }
  }
  static foregroundTone(e10, t10) {
    let r10 = tX.lighterUnsafe(e10, t10), n3 = tX.darkerUnsafe(e10, t10), a2 = tX.ratioOfTones(r10, e10), o2 = tX.ratioOfTones(n3, e10), i2 = tK.tonePrefersLightForeground(e10);
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
    return tK.tonePrefersLightForeground(e10) && !tK.toneAllowsLightForeground(e10) ? 49 : e10;
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
}(E || (E = {}));
class tZ {
  getContrast(e10) {
    var t10, r10, n3, a2, o2, i2, s2, l2, c2;
    return e10 <= -1 ? this.low : e10 < 0 ? (t10 = this.low, r10 = this.normal, (1 - (n3 = (e10 - -1) / 1)) * t10 + n3 * r10) : e10 < 0.5 ? (a2 = this.normal, o2 = this.medium, (1 - (i2 = (e10 - 0) / 0.5)) * a2 + i2 * o2) : e10 < 1 ? (s2 = this.medium, l2 = this.high, (1 - (c2 = (e10 - 0.5) / 0.5)) * s2 + c2 * l2) : this.high;
  }
  constructor(e10, t10, r10, n3) {
    this.low = e10, this.normal = t10, this.medium = r10, this.high = n3;
  }
}
class tQ {
  constructor(e10, t10, r10, n3, a2) {
    this.roleA = e10, this.roleB = t10, this.delta = r10, this.polarity = n3, this.stayTogether = a2;
  }
}
function t0(e10) {
  return e10.variant === E.FIDELITY || e10.variant === E.CONTENT;
}
function t1(e10) {
  return e10.variant === E.MONOCHROME;
}
function t2(e10, t10) {
  let r10 = e10.inViewingConditions(tq.make(void 0, void 0, t10.isDark ? 30 : 80, void 0, void 0));
  return tK.tonePrefersLightForeground(e10.tone) && !tK.toneAllowsLightForeground(r10.tone) ? tK.enableLightForeground(e10.tone) : tK.enableLightForeground(r10.tone);
}
class t4 {
  static highestSurface(e10) {
    return e10.isDark ? t4.surfaceBright : t4.surfaceDim;
  }
}
t4.contentAccentToneDelta = 15, t4.primaryPaletteKeyColor = tK.fromPalette({ name: "primary_palette_key_color", palette: (e10) => e10.primaryPalette, tone: (e10) => e10.primaryPalette.keyColor.tone }), t4.secondaryPaletteKeyColor = tK.fromPalette({ name: "secondary_palette_key_color", palette: (e10) => e10.secondaryPalette, tone: (e10) => e10.secondaryPalette.keyColor.tone }), t4.tertiaryPaletteKeyColor = tK.fromPalette({ name: "tertiary_palette_key_color", palette: (e10) => e10.tertiaryPalette, tone: (e10) => e10.tertiaryPalette.keyColor.tone }), t4.neutralPaletteKeyColor = tK.fromPalette({ name: "neutral_palette_key_color", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.neutralPalette.keyColor.tone }), t4.neutralVariantPaletteKeyColor = tK.fromPalette({ name: "neutral_variant_palette_key_color", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.neutralVariantPalette.keyColor.tone }), t4.background = tK.fromPalette({ name: "background", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 6 : 98, isBackground: true }), t4.onBackground = tK.fromPalette({ name: "on_background", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 90 : 10, background: (e10) => t4.background, contrastCurve: new tZ(3, 3, 4.5, 7) }), t4.surface = tK.fromPalette({ name: "surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 6 : 98, isBackground: true }), t4.surfaceDim = tK.fromPalette({ name: "surface_dim", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 6 : 87, isBackground: true }), t4.surfaceBright = tK.fromPalette({ name: "surface_bright", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 24 : 98, isBackground: true }), t4.surfaceContainerLowest = tK.fromPalette({ name: "surface_container_lowest", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 4 : 100, isBackground: true }), t4.surfaceContainerLow = tK.fromPalette({ name: "surface_container_low", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 10 : 96, isBackground: true }), t4.surfaceContainer = tK.fromPalette({ name: "surface_container", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 12 : 94, isBackground: true }), t4.surfaceContainerHigh = tK.fromPalette({ name: "surface_container_high", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 17 : 92, isBackground: true }), t4.surfaceContainerHighest = tK.fromPalette({ name: "surface_container_highest", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 22 : 90, isBackground: true }), t4.onSurface = tK.fromPalette({ name: "on_surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 90 : 10, background: (e10) => t4.highestSurface(e10), contrastCurve: new tZ(4.5, 7, 11, 21) }), t4.surfaceVariant = tK.fromPalette({ name: "surface_variant", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 30 : 90, isBackground: true }), t4.onSurfaceVariant = tK.fromPalette({ name: "on_surface_variant", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 80 : 30, background: (e10) => t4.highestSurface(e10), contrastCurve: new tZ(3, 4.5, 7, 11) }), t4.inverseSurface = tK.fromPalette({ name: "inverse_surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 90 : 20 }), t4.inverseOnSurface = tK.fromPalette({ name: "inverse_on_surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 20 : 95, background: (e10) => t4.inverseSurface, contrastCurve: new tZ(4.5, 7, 11, 21) }), t4.outline = tK.fromPalette({ name: "outline", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 60 : 50, background: (e10) => t4.highestSurface(e10), contrastCurve: new tZ(1.5, 3, 4.5, 7) }), t4.outlineVariant = tK.fromPalette({ name: "outline_variant", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 30 : 80, background: (e10) => t4.highestSurface(e10), contrastCurve: new tZ(1, 1, 3, 7) }), t4.shadow = tK.fromPalette({ name: "shadow", palette: (e10) => e10.neutralPalette, tone: (e10) => 0 }), t4.scrim = tK.fromPalette({ name: "scrim", palette: (e10) => e10.neutralPalette, tone: (e10) => 0 }), t4.surfaceTint = tK.fromPalette({ name: "surface_tint", palette: (e10) => e10.primaryPalette, tone: (e10) => e10.isDark ? 80 : 40, isBackground: true }), t4.primary = tK.fromPalette({ name: "primary", palette: (e10) => e10.primaryPalette, tone: (e10) => t1(e10) ? e10.isDark ? 100 : 0 : e10.isDark ? 80 : 40, isBackground: true, background: (e10) => t4.highestSurface(e10), contrastCurve: new tZ(3, 4.5, 7, 11), toneDeltaPair: (e10) => new tQ(t4.primaryContainer, t4.primary, 15, "nearer", false) }), t4.onPrimary = tK.fromPalette({ name: "on_primary", palette: (e10) => e10.primaryPalette, tone: (e10) => t1(e10) ? e10.isDark ? 10 : 90 : e10.isDark ? 20 : 100, background: (e10) => t4.primary, contrastCurve: new tZ(4.5, 7, 11, 21) }), t4.primaryContainer = tK.fromPalette({ name: "primary_container", palette: (e10) => e10.primaryPalette, tone: (e10) => t0(e10) ? t2(e10.sourceColorHct, e10) : t1(e10) ? e10.isDark ? 85 : 25 : e10.isDark ? 30 : 90, isBackground: true, background: (e10) => t4.highestSurface(e10), contrastCurve: new tZ(1, 1, 3, 7), toneDeltaPair: (e10) => new tQ(t4.primaryContainer, t4.primary, 15, "nearer", false) }), t4.onPrimaryContainer = tK.fromPalette({ name: "on_primary_container", palette: (e10) => e10.primaryPalette, tone: (e10) => t0(e10) ? tK.foregroundTone(t4.primaryContainer.tone(e10), 4.5) : t1(e10) ? e10.isDark ? 0 : 100 : e10.isDark ? 90 : 10, background: (e10) => t4.primaryContainer, contrastCurve: new tZ(4.5, 7, 11, 21) }), t4.inversePrimary = tK.fromPalette({ name: "inverse_primary", palette: (e10) => e10.primaryPalette, tone: (e10) => e10.isDark ? 40 : 80, background: (e10) => t4.inverseSurface, contrastCurve: new tZ(3, 4.5, 7, 11) }), t4.secondary = tK.fromPalette({ name: "secondary", palette: (e10) => e10.secondaryPalette, tone: (e10) => e10.isDark ? 80 : 40, isBackground: true, background: (e10) => t4.highestSurface(e10), contrastCurve: new tZ(3, 4.5, 7, 11), toneDeltaPair: (e10) => new tQ(t4.secondaryContainer, t4.secondary, 15, "nearer", false) }), t4.onSecondary = tK.fromPalette({ name: "on_secondary", palette: (e10) => e10.secondaryPalette, tone: (e10) => t1(e10) ? e10.isDark ? 10 : 100 : e10.isDark ? 20 : 100, background: (e10) => t4.secondary, contrastCurve: new tZ(4.5, 7, 11, 21) }), t4.secondaryContainer = tK.fromPalette({ name: "secondary_container", palette: (e10) => e10.secondaryPalette, tone: (e10) => {
  let t10 = e10.isDark ? 30 : 90;
  if (t1(e10))
    return e10.isDark ? 30 : 85;
  if (!t0(e10))
    return t10;
  let r10 = function(e11, t11, r11, n3) {
    let a2 = r11, o2 = tY.from(e11, t11, r11);
    if (o2.chroma < t11) {
      let r12 = o2.chroma;
      for (; o2.chroma < t11; ) {
        a2 += n3 ? -1 : 1;
        let i2 = tY.from(e11, t11, a2);
        if (r12 > i2.chroma || 0.4 > Math.abs(i2.chroma - t11))
          break;
        let s2 = Math.abs(i2.chroma - t11), l2 = Math.abs(o2.chroma - t11);
        s2 < l2 && (o2 = i2), r12 = Math.max(r12, i2.chroma);
      }
    }
    return a2;
  }(e10.secondaryPalette.hue, e10.secondaryPalette.chroma, t10, !e10.isDark);
  return t2(e10.secondaryPalette.getHct(r10), e10);
}, isBackground: true, background: (e10) => t4.highestSurface(e10), contrastCurve: new tZ(1, 1, 3, 7), toneDeltaPair: (e10) => new tQ(t4.secondaryContainer, t4.secondary, 15, "nearer", false) }), t4.onSecondaryContainer = tK.fromPalette({ name: "on_secondary_container", palette: (e10) => e10.secondaryPalette, tone: (e10) => t0(e10) ? tK.foregroundTone(t4.secondaryContainer.tone(e10), 4.5) : e10.isDark ? 90 : 10, background: (e10) => t4.secondaryContainer, contrastCurve: new tZ(4.5, 7, 11, 21) }), t4.tertiary = tK.fromPalette({ name: "tertiary", palette: (e10) => e10.tertiaryPalette, tone: (e10) => t1(e10) ? e10.isDark ? 90 : 25 : e10.isDark ? 80 : 40, isBackground: true, background: (e10) => t4.highestSurface(e10), contrastCurve: new tZ(3, 4.5, 7, 11), toneDeltaPair: (e10) => new tQ(t4.tertiaryContainer, t4.tertiary, 15, "nearer", false) }), t4.onTertiary = tK.fromPalette({ name: "on_tertiary", palette: (e10) => e10.tertiaryPalette, tone: (e10) => t1(e10) ? e10.isDark ? 10 : 90 : e10.isDark ? 20 : 100, background: (e10) => t4.tertiary, contrastCurve: new tZ(4.5, 7, 11, 21) }), t4.tertiaryContainer = tK.fromPalette({ name: "tertiary_container", palette: (e10) => e10.tertiaryPalette, tone: (e10) => {
  if (t1(e10))
    return e10.isDark ? 60 : 49;
  if (!t0(e10))
    return e10.isDark ? 30 : 90;
  let t10 = t2(e10.tertiaryPalette.getHct(e10.sourceColorHct.tone), e10), r10 = e10.tertiaryPalette.getHct(t10);
  return tJ.fixIfDisliked(r10).tone;
}, isBackground: true, background: (e10) => t4.highestSurface(e10), contrastCurve: new tZ(1, 1, 3, 7), toneDeltaPair: (e10) => new tQ(t4.tertiaryContainer, t4.tertiary, 15, "nearer", false) }), t4.onTertiaryContainer = tK.fromPalette({ name: "on_tertiary_container", palette: (e10) => e10.tertiaryPalette, tone: (e10) => t1(e10) ? e10.isDark ? 0 : 100 : t0(e10) ? tK.foregroundTone(t4.tertiaryContainer.tone(e10), 4.5) : e10.isDark ? 90 : 10, background: (e10) => t4.tertiaryContainer, contrastCurve: new tZ(4.5, 7, 11, 21) }), t4.error = tK.fromPalette({ name: "error", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 80 : 40, isBackground: true, background: (e10) => t4.highestSurface(e10), contrastCurve: new tZ(3, 4.5, 7, 11), toneDeltaPair: (e10) => new tQ(t4.errorContainer, t4.error, 15, "nearer", false) }), t4.onError = tK.fromPalette({ name: "on_error", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 20 : 100, background: (e10) => t4.error, contrastCurve: new tZ(4.5, 7, 11, 21) }), t4.errorContainer = tK.fromPalette({ name: "error_container", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 30 : 90, isBackground: true, background: (e10) => t4.highestSurface(e10), contrastCurve: new tZ(1, 1, 3, 7), toneDeltaPair: (e10) => new tQ(t4.errorContainer, t4.error, 15, "nearer", false) }), t4.onErrorContainer = tK.fromPalette({ name: "on_error_container", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 90 : 10, background: (e10) => t4.errorContainer, contrastCurve: new tZ(4.5, 7, 11, 21) }), t4.primaryFixed = tK.fromPalette({ name: "primary_fixed", palette: (e10) => e10.primaryPalette, tone: (e10) => t1(e10) ? 40 : 90, isBackground: true, background: (e10) => t4.highestSurface(e10), contrastCurve: new tZ(1, 1, 3, 7), toneDeltaPair: (e10) => new tQ(t4.primaryFixed, t4.primaryFixedDim, 10, "lighter", true) }), t4.primaryFixedDim = tK.fromPalette({ name: "primary_fixed_dim", palette: (e10) => e10.primaryPalette, tone: (e10) => t1(e10) ? 30 : 80, isBackground: true, background: (e10) => t4.highestSurface(e10), contrastCurve: new tZ(1, 1, 3, 7), toneDeltaPair: (e10) => new tQ(t4.primaryFixed, t4.primaryFixedDim, 10, "lighter", true) }), t4.onPrimaryFixed = tK.fromPalette({ name: "on_primary_fixed", palette: (e10) => e10.primaryPalette, tone: (e10) => t1(e10) ? 100 : 10, background: (e10) => t4.primaryFixedDim, secondBackground: (e10) => t4.primaryFixed, contrastCurve: new tZ(4.5, 7, 11, 21) }), t4.onPrimaryFixedVariant = tK.fromPalette({ name: "on_primary_fixed_variant", palette: (e10) => e10.primaryPalette, tone: (e10) => t1(e10) ? 90 : 30, background: (e10) => t4.primaryFixedDim, secondBackground: (e10) => t4.primaryFixed, contrastCurve: new tZ(3, 4.5, 7, 11) }), t4.secondaryFixed = tK.fromPalette({ name: "secondary_fixed", palette: (e10) => e10.secondaryPalette, tone: (e10) => t1(e10) ? 80 : 90, isBackground: true, background: (e10) => t4.highestSurface(e10), contrastCurve: new tZ(1, 1, 3, 7), toneDeltaPair: (e10) => new tQ(t4.secondaryFixed, t4.secondaryFixedDim, 10, "lighter", true) }), t4.secondaryFixedDim = tK.fromPalette({ name: "secondary_fixed_dim", palette: (e10) => e10.secondaryPalette, tone: (e10) => t1(e10) ? 70 : 80, isBackground: true, background: (e10) => t4.highestSurface(e10), contrastCurve: new tZ(1, 1, 3, 7), toneDeltaPair: (e10) => new tQ(t4.secondaryFixed, t4.secondaryFixedDim, 10, "lighter", true) }), t4.onSecondaryFixed = tK.fromPalette({ name: "on_secondary_fixed", palette: (e10) => e10.secondaryPalette, tone: (e10) => 10, background: (e10) => t4.secondaryFixedDim, secondBackground: (e10) => t4.secondaryFixed, contrastCurve: new tZ(4.5, 7, 11, 21) }), t4.onSecondaryFixedVariant = tK.fromPalette({ name: "on_secondary_fixed_variant", palette: (e10) => e10.secondaryPalette, tone: (e10) => t1(e10) ? 25 : 30, background: (e10) => t4.secondaryFixedDim, secondBackground: (e10) => t4.secondaryFixed, contrastCurve: new tZ(3, 4.5, 7, 11) }), t4.tertiaryFixed = tK.fromPalette({ name: "tertiary_fixed", palette: (e10) => e10.tertiaryPalette, tone: (e10) => t1(e10) ? 40 : 90, isBackground: true, background: (e10) => t4.highestSurface(e10), contrastCurve: new tZ(1, 1, 3, 7), toneDeltaPair: (e10) => new tQ(t4.tertiaryFixed, t4.tertiaryFixedDim, 10, "lighter", true) }), t4.tertiaryFixedDim = tK.fromPalette({ name: "tertiary_fixed_dim", palette: (e10) => e10.tertiaryPalette, tone: (e10) => t1(e10) ? 30 : 80, isBackground: true, background: (e10) => t4.highestSurface(e10), contrastCurve: new tZ(1, 1, 3, 7), toneDeltaPair: (e10) => new tQ(t4.tertiaryFixed, t4.tertiaryFixedDim, 10, "lighter", true) }), t4.onTertiaryFixed = tK.fromPalette({ name: "on_tertiary_fixed", palette: (e10) => e10.tertiaryPalette, tone: (e10) => t1(e10) ? 100 : 10, background: (e10) => t4.tertiaryFixedDim, secondBackground: (e10) => t4.tertiaryFixed, contrastCurve: new tZ(4.5, 7, 11, 21) }), t4.onTertiaryFixedVariant = tK.fromPalette({ name: "on_tertiary_fixed_variant", palette: (e10) => e10.tertiaryPalette, tone: (e10) => t1(e10) ? 90 : 30, background: (e10) => t4.tertiaryFixedDim, secondBackground: (e10) => t4.tertiaryFixed, contrastCurve: new tZ(3, 4.5, 7, 11) });
class t5 {
  static fromInt(e10) {
    let t10 = tY.fromInt(e10);
    return t5.fromHct(t10);
  }
  static fromHct(e10) {
    return new t5(e10.hue, e10.chroma, e10);
  }
  static fromHueAndChroma(e10, t10) {
    return new t5(e10, t10, t5.createKeyColor(e10, t10));
  }
  static createKeyColor(e10, t10) {
    let r10 = tY.from(e10, t10, 50), n3 = Math.abs(r10.chroma - t10);
    for (let a2 = 1; a2 < 50 && Math.round(t10) !== Math.round(r10.chroma); a2 += 1) {
      let o2 = tY.from(e10, t10, 50 + a2), i2 = Math.abs(o2.chroma - t10);
      i2 < n3 && (n3 = i2, r10 = o2);
      let s2 = tY.from(e10, t10, 50 - a2), l2 = Math.abs(s2.chroma - t10);
      l2 < n3 && (n3 = l2, r10 = s2);
    }
    return r10;
  }
  tone(e10) {
    let t10 = this.cache.get(e10);
    return void 0 === t10 && (t10 = tY.from(this.hue, this.chroma, e10).toInt(), this.cache.set(e10, t10)), t10;
  }
  getHct(e10) {
    return tY.fromInt(this.tone(e10));
  }
  constructor(e10, t10, r10) {
    this.hue = e10, this.chroma = t10, this.keyColor = r10, this.cache = /* @__PURE__ */ new Map();
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
      let n3 = new t3(t10.secondary, e10);
      r10.a2 = n3.a1;
    }
    if (t10.tertiary) {
      let n3 = new t3(t10.tertiary, e10);
      r10.a3 = n3.a1;
    }
    if (t10.error) {
      let n3 = new t3(t10.error, e10);
      r10.error = n3.a1;
    }
    if (t10.neutral) {
      let n3 = new t3(t10.neutral, e10);
      r10.n1 = n3.n1;
    }
    if (t10.neutralVariant) {
      let n3 = new t3(t10.neutralVariant, e10);
      r10.n2 = n3.n2;
    }
    return r10;
  }
  constructor(e10, t10) {
    let r10 = tY.fromInt(e10), n3 = r10.hue, a2 = r10.chroma;
    t10 ? (this.a1 = t5.fromHueAndChroma(n3, a2), this.a2 = t5.fromHueAndChroma(n3, a2 / 3), this.a3 = t5.fromHueAndChroma(n3 + 60, a2 / 2), this.n1 = t5.fromHueAndChroma(n3, Math.min(a2 / 12, 4)), this.n2 = t5.fromHueAndChroma(n3, Math.min(a2 / 6, 8))) : (this.a1 = t5.fromHueAndChroma(n3, Math.max(48, a2)), this.a2 = t5.fromHueAndChroma(n3, 16), this.a3 = t5.fromHueAndChroma(n3 + 60, 24), this.n1 = t5.fromHueAndChroma(n3, 4), this.n2 = t5.fromHueAndChroma(n3, 8)), this.error = t5.fromHueAndChroma(25, 84);
  }
}
class t8 {
  get primary() {
    return this.props.primary;
  }
  get onPrimary() {
    return this.props.onPrimary;
  }
  get primaryContainer() {
    return this.props.primaryContainer;
  }
  get onPrimaryContainer() {
    return this.props.onPrimaryContainer;
  }
  get secondary() {
    return this.props.secondary;
  }
  get onSecondary() {
    return this.props.onSecondary;
  }
  get secondaryContainer() {
    return this.props.secondaryContainer;
  }
  get onSecondaryContainer() {
    return this.props.onSecondaryContainer;
  }
  get tertiary() {
    return this.props.tertiary;
  }
  get onTertiary() {
    return this.props.onTertiary;
  }
  get tertiaryContainer() {
    return this.props.tertiaryContainer;
  }
  get onTertiaryContainer() {
    return this.props.onTertiaryContainer;
  }
  get error() {
    return this.props.error;
  }
  get onError() {
    return this.props.onError;
  }
  get errorContainer() {
    return this.props.errorContainer;
  }
  get onErrorContainer() {
    return this.props.onErrorContainer;
  }
  get background() {
    return this.props.background;
  }
  get onBackground() {
    return this.props.onBackground;
  }
  get surface() {
    return this.props.surface;
  }
  get onSurface() {
    return this.props.onSurface;
  }
  get surfaceVariant() {
    return this.props.surfaceVariant;
  }
  get onSurfaceVariant() {
    return this.props.onSurfaceVariant;
  }
  get outline() {
    return this.props.outline;
  }
  get outlineVariant() {
    return this.props.outlineVariant;
  }
  get shadow() {
    return this.props.shadow;
  }
  get scrim() {
    return this.props.scrim;
  }
  get inverseSurface() {
    return this.props.inverseSurface;
  }
  get inverseOnSurface() {
    return this.props.inverseOnSurface;
  }
  get inversePrimary() {
    return this.props.inversePrimary;
  }
  static light(e10) {
    return t8.lightFromCorePalette(t3.of(e10));
  }
  static dark(e10) {
    return t8.darkFromCorePalette(t3.of(e10));
  }
  static lightContent(e10) {
    return t8.lightFromCorePalette(t3.contentOf(e10));
  }
  static darkContent(e10) {
    return t8.darkFromCorePalette(t3.contentOf(e10));
  }
  static lightFromCorePalette(e10) {
    return new t8({ primary: e10.a1.tone(40), onPrimary: e10.a1.tone(100), primaryContainer: e10.a1.tone(90), onPrimaryContainer: e10.a1.tone(10), secondary: e10.a2.tone(40), onSecondary: e10.a2.tone(100), secondaryContainer: e10.a2.tone(90), onSecondaryContainer: e10.a2.tone(10), tertiary: e10.a3.tone(40), onTertiary: e10.a3.tone(100), tertiaryContainer: e10.a3.tone(90), onTertiaryContainer: e10.a3.tone(10), error: e10.error.tone(40), onError: e10.error.tone(100), errorContainer: e10.error.tone(90), onErrorContainer: e10.error.tone(10), background: e10.n1.tone(99), onBackground: e10.n1.tone(10), surface: e10.n1.tone(99), onSurface: e10.n1.tone(10), surfaceVariant: e10.n2.tone(90), onSurfaceVariant: e10.n2.tone(30), outline: e10.n2.tone(50), outlineVariant: e10.n2.tone(80), shadow: e10.n1.tone(0), scrim: e10.n1.tone(0), inverseSurface: e10.n1.tone(20), inverseOnSurface: e10.n1.tone(95), inversePrimary: e10.a1.tone(80) });
  }
  static darkFromCorePalette(e10) {
    return new t8({ primary: e10.a1.tone(80), onPrimary: e10.a1.tone(20), primaryContainer: e10.a1.tone(30), onPrimaryContainer: e10.a1.tone(90), secondary: e10.a2.tone(80), onSecondary: e10.a2.tone(20), secondaryContainer: e10.a2.tone(30), onSecondaryContainer: e10.a2.tone(90), tertiary: e10.a3.tone(80), onTertiary: e10.a3.tone(20), tertiaryContainer: e10.a3.tone(30), onTertiaryContainer: e10.a3.tone(90), error: e10.error.tone(80), onError: e10.error.tone(20), errorContainer: e10.error.tone(30), onErrorContainer: e10.error.tone(80), background: e10.n1.tone(10), onBackground: e10.n1.tone(90), surface: e10.n1.tone(10), onSurface: e10.n1.tone(90), surfaceVariant: e10.n2.tone(30), onSurfaceVariant: e10.n2.tone(80), outline: e10.n2.tone(60), outlineVariant: e10.n2.tone(30), shadow: e10.n1.tone(0), scrim: e10.n1.tone(0), inverseSurface: e10.n1.tone(90), inverseOnSurface: e10.n1.tone(20), inversePrimary: e10.a1.tone(40) });
  }
  toJSON() {
    return { ...this.props };
  }
  constructor(e10) {
    this.props = e10;
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
}, rt = function(e10) {
  let t10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r10 = {};
  for (let n3 in e10) {
    let a2 = e10[n3];
    r10[$(n3)] = a2.tone(t10 ? 80 : 40), r10[$(`on-${n3}`)] = a2.tone(t10 ? 20 : 100), r10[$(`${n3}-container`)] = a2.tone(t10 ? 30 : 90), r10[$(`on-${n3}-container`)] = a2.tone(t10 ? 90 : 10);
  }
  return r10;
}, rr = (e10) => ({ primary: true, secondary: true, tertiary: true, error: true })[e10], rn = class {
  getThemeColors(e10) {
    let t10 = C((e10 ? t8.darkFromCorePalette : t8.lightFromCorePalette)(this).toJSON(), ["background", "onBackground"]);
    return { ...t10, ...rt(this.ext, e10), surfaceDim: this.n1.tone(e10 ? 6 : 87), surfaceBright: this.n1.tone(e10 ? 24 : 98), surfaceContainerLowest: this.n1.tone(e10 ? 4 : 100), surfaceContainerLow: this.n1.tone(e10 ? 10 : 96), surfaceContainer: this.n1.tone(e10 ? 12 : 94), surfaceContainerHigh: this.n1.tone(e10 ? 17 : 92), surfaceContainerHighest: this.n1.tone(e10 ? 22 : 90) };
  }
  toDesignTokens() {
    let e10 = {}, t10 = {}, r10 = this.getThemeColors(false), n3 = this.getThemeColors(true);
    for (let a3 in r10)
      if (e10[`${P(a3)}`] = { _default: re(r10[a3]), _dark: re(n3[a3]) }, rr(a3) && (t10[`${P(a3)}`] = tu.mixin({ bgColor: `sys.${P(a3)}`, color: `sys.on-${P(a3)}` }), t10[`${P(a3)}-container`] = tu.mixin({ bgColor: `sys.${P(a3)}-container`, color: `sys.on-${P(a3)}-container` })), a3.startsWith("surface")) {
        if (a3.includes("container")) {
          t10[`${P(a3)}`] = tu.mixin({ bgColor: `sys.${P(a3)}`, color: "sys.on-surface" });
          continue;
        }
        t10[`${P(a3)}`] = tu.mixin({ bgColor: `sys.${P(a3)}`, color: "sys.on-surface" }), t10[`on-${P(a3)}`] = tu.mixin({ bgColor: `sys.on-${P(a3)}`, color: "sys.inverse-on-surface" });
      }
    let a2 = (e11) => Object.keys(t7).reduce((t11, r11) => ({ ...t11, [r11]: re(e11.tone(parseInt(r11))) }), {}), o2 = tu.color({ ...R(this.ext, (e11) => a2(e11)), primary: a2(this.a1), secondary: a2(this.a2), tertiary: a2(this.a3), neutral: a2(this.n1), neutralVariant: a2(this.n2), error: a2(this.error), white: [255, 255, 255], black: [0, 0, 0], sys: e10 }), i2 = tu.customMixin("containerStyle", { sys: t10 });
    return { color: o2, containerStyle: i2 };
  }
  constructor(e10, t10, r10, n3, a2, o2, i2) {
    this.a1 = e10, this.a2 = t10, this.a3 = r10, this.n1 = n3, this.n2 = a2, this.error = o2, this.ext = i2;
  }
};
rn.fromColors = (e10) => {
  let { primary: t10, secondary: r10, tertiary: n3, neutral: a2, neutralVariant: o2, error: i2, ...s2 } = e10, l2 = t3.contentFromColors({ primary: t6(t10), secondary: r10 ? t6(r10) : void 0, tertiary: n3 ? t6(n3) : void 0, error: i2 ? t6(i2) : void 0 });
  return a2 && (l2.n1 = t5.fromHueAndChroma(t6(a2), 4)), o2 && (l2.n2 = t5.fromHueAndChroma(t6(o2), 8)), new rn(l2.a1, l2.a2, l2.a3, l2.n1, l2.n2, l2.error, R(s2, (e11) => t5.fromInt(t6(e11))));
};
let ra = (e10, t10, r10, n3) => Object.assign(function(e11, t11, r11, n5) {
  if (e11 === t11 && r11 === n5)
    return ej;
  let a2 = new Float32Array(11);
  for (let t12 = 0; t12 < 11; ++t12)
    a2[t12] = e7(0.1 * t12, e11, r11);
  return (o2) => 0 === o2 || 1 === o2 ? o2 : e7(function(t12) {
    let n6 = 0, o3 = 1;
    for (; 10 !== o3 && a2[o3] <= t12; ++o3)
      n6 += 0.1;
    --o3;
    let i2 = (t12 - a2[o3]) / (a2[o3 + 1] - a2[o3]), s2 = n6 + 0.1 * i2, l2 = te(s2, e11, r11);
    return l2 >= 1e-3 ? function(e12, t13, r12, n7) {
      for (let a3 = 0; a3 < 8; ++a3) {
        let a4 = te(t13, r12, n7);
        if (0 === a4)
          break;
        let o4 = e7(t13, r12, n7) - e12;
        t13 -= o4 / a4;
      }
      return t13;
    }(t12, s2, e11, r11) : 0 === l2 ? s2 : function(e12, t13, r12, n7, a3) {
      let o4, i3;
      let s3 = 0;
      do
        (o4 = e7(i3 = t13 + (r12 - t13) / 2, n7, a3) - e12) > 0 ? r12 = i3 : t13 = i3;
      while (Math.abs(o4) > 1e-7 && ++s3 < 10);
      return i3;
    }(t12, n6, n6 + 0.1, e11, r11);
  }(o2), t11, n5);
}(e10, t10, r10, n3), { toString: () => `cubic-bezier(${e10}, ${t10}, ${r10}, ${n3})` }), ro = { duration: { sm1: 50, sm2: 100, sm3: 150, sm4: 200, md1: 250, md2: 300, md3: 350, md4: 400, lg1: 450, lg2: 500, lg3: 550, lg4: 600, xl1: 700, xl2: 800, xl3: 900, xl4: 1e3 }, easing: { linear: ra(0, 0, 1, 1), standard: Object.assign(ra(0.2, 0, 0, 1), { accelerate: ra(0.3, 0, 1, 1), decelerate: ra(0, 0, 0, 1) }), emphasized: Object.assign(ra(0.2, 0, 0, 1), { accelerate: ra(0.3, 0, 0.8, 0.15), decelerate: ra(0.05, 0.7, 0.1, 1) }), legacy: Object.assign(ra(0.4, 0, 0.2, 1), { decelerate: ra(0, 0, 0.2, 1), accelerate: ra(0.4, 0, 1, 1) }) } }, ri = (n3, a2) => (a2 = null != a2 ? a2 : { ...n3, from: { ...n3.to }, to: { ...n3.from } }, e({ onComplete: A(), $default: A() }, (e10, o2) => {
  let i2, {} = e10, { slots: s2, emit: l2 } = o2, c2 = (e11, t10) => {
    i2 = e3({ ...n3, autoplay: true, onComplete: () => {
      t10(), l2("complete", "enter");
    }, onUpdate: (t11) => {
      Object.assign(e11.style, t11);
    } });
  }, u2 = (e11, t10) => {
    i2 = e3({ ...a2, autoplay: true, onComplete: () => {
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
}, { name: "Transition" })), rs = { transitionDuration: tu.transitionDuration(ro.duration), transitionTimingFunction: tu.transitionTimingFunction({ linear: ro.easing.linear.toString(), standard: ro.easing.standard.toString(), "standard-accelerate": ro.easing.standard.accelerate.toString(), "standard-decelerate": ro.easing.standard.decelerate.toString(), emphasized: ro.easing.emphasized.toString(), "emphasized-decelerate": ro.easing.emphasized.decelerate.toString(), "emphasized-accelerate": ro.easing.emphasized.accelerate.toString(), legacy: ro.easing.legacy.toString(), "legacy-decelerate": ro.easing.legacy.decelerate.toString(), "legacy-accelerate": ro.easing.legacy.accelerate.toString() }) }, rl = tu.rounded({ xs: 4, sm: 8, md: 12, lg: 16, xl: 28 }), rc = { ...rn.fromColors({ primary: "#6750A4", secondary: "#625B71", tertiary: "#7D5260", error: "#B3261E", pink: "#ff00ff", green: "#4caf50", yellow: "#ffcd38", orange: "#ff9800", blue: "#03a9f4" }).toDesignTokens(), ...tD, ...rs, ...tT, rounded: rl }, ru = tO.create(rc, { varPrefix: "vk" }), rd = n(() => ru, { name: "Theme" });
var rf = function() {
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
}(), rh = "-ms-", rp = "-moz-", rm = "-webkit-", rg = "comm", ry = "rule", rb = "decl", rv = "@keyframes", rx = Math.abs, rw = String.fromCharCode, rk = Object.assign;
function rC(e10, t10, r10) {
  return e10.replace(t10, r10);
}
function rM(e10, t10) {
  return e10.indexOf(t10);
}
function rP(e10, t10) {
  return 0 | e10.charCodeAt(t10);
}
function rS(e10, t10, r10) {
  return e10.slice(t10, r10);
}
function r_(e10) {
  return e10.length;
}
function rO(e10, t10) {
  return t10.push(e10), e10;
}
var rT = 1, rD = 1, rR = 0, r$ = 0, rA = 0, rI = "";
function rB(e10, t10, r10, n3, a2, o2, i2) {
  return { value: e10, root: t10, parent: r10, type: n3, props: a2, children: o2, line: rT, column: rD, length: i2, return: "" };
}
function rF(e10, t10) {
  return rk(rB("", null, null, "", null, null, 0), e10, { length: -e10.length }, t10);
}
function rL() {
  return rA = r$ < rR ? rP(rI, r$++) : 0, rD++, 10 === rA && (rD = 1, rT++), rA;
}
function rV() {
  return rP(rI, r$);
}
function rj(e10) {
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
function rE(e10) {
  return rT = rD = 1, rR = r_(rI = e10), r$ = 0, [];
}
function rH(e10) {
  var t10, r10;
  return (t10 = r$ - 1, r10 = function e11(t11) {
    for (; rL(); )
      switch (rA) {
        case t11:
          return r$;
        case 34:
        case 39:
          34 !== t11 && 39 !== t11 && e11(rA);
          break;
        case 40:
          41 === t11 && e11(t11);
          break;
        case 92:
          rL();
      }
    return r$;
  }(91 === e10 ? e10 + 2 : 40 === e10 ? e10 + 1 : e10), rS(rI, t10, r10)).trim();
}
function rz(e10, t10, r10, n3, a2, o2, i2, s2, l2, c2, u2) {
  for (var d2 = a2 - 1, f2 = 0 === a2 ? o2 : [""], h2 = f2.length, p2 = 0, m2 = 0, g2 = 0; p2 < n3; ++p2)
    for (var y2 = 0, b2 = rS(e10, d2 + 1, d2 = rx(m2 = i2[p2])), v2 = e10; y2 < h2; ++y2)
      (v2 = (m2 > 0 ? f2[y2] + " " + b2 : rC(b2, /&\f/g, f2[y2])).trim()) && (l2[g2++] = v2);
  return rB(e10, t10, r10, 0 === a2 ? ry : s2, l2, c2, u2);
}
function rN(e10, t10, r10, n3) {
  return rB(e10, t10, r10, rb, rS(e10, 0, n3), rS(e10, n3 + 1, -1), n3);
}
function rW(e10, t10) {
  for (var r10 = "", n3 = e10.length, a2 = 0; a2 < n3; a2++)
    r10 += t10(e10[a2], a2, e10, t10) || "";
  return r10;
}
function rq(e10, t10, r10, n3) {
  switch (e10.type) {
    case "@layer":
      if (e10.children.length)
        break;
    case "@import":
    case rb:
      return e10.return = e10.return || e10.value;
    case rg:
      return "";
    case rv:
      return e10.return = e10.value + "{" + rW(e10.children, n3) + "}";
    case ry:
      e10.value = e10.props.join(",");
  }
  return r_(r10 = rW(e10.children, n3)) ? e10.return = e10.value + "{" + r10 + "}" : "";
}
var rU = function(e10, t10, r10) {
  for (var n3 = 0, a2 = 0; n3 = a2, a2 = rV(), 38 === n3 && 12 === a2 && (t10[r10] = 1), !rj(a2); )
    rL();
  return rS(rI, e10, r$);
}, rG = function(e10, t10) {
  var r10 = -1, n3 = 44;
  do
    switch (rj(n3)) {
      case 0:
        38 === n3 && 12 === rV() && (t10[r10] = 1), e10[r10] += rU(r$ - 1, t10, r10);
        break;
      case 2:
        e10[r10] += rH(n3);
        break;
      case 4:
        if (44 === n3) {
          e10[++r10] = 58 === rV() ? "&\f" : "", t10[r10] = e10[r10].length;
          break;
        }
      default:
        e10[r10] += rw(n3);
    }
  while (n3 = rL());
  return e10;
}, rY = function(e10, t10) {
  var r10;
  return r10 = rG(rE(e10), t10), rI = "", r10;
}, rX = /* @__PURE__ */ new WeakMap(), rJ = function(e10) {
  if ("rule" === e10.type && e10.parent && !(e10.length < 1)) {
    for (var t10 = e10.value, r10 = e10.parent, n3 = e10.column === r10.column && e10.line === r10.line; "rule" !== r10.type; )
      if (!(r10 = r10.parent))
        return;
    if ((1 !== e10.props.length || 58 === t10.charCodeAt(0) || rX.get(r10)) && !n3) {
      rX.set(e10, true);
      for (var a2 = [], o2 = rY(t10, a2), i2 = r10.props, s2 = 0, l2 = 0; s2 < o2.length; s2++)
        for (var c2 = 0; c2 < i2.length; c2++, l2++)
          e10.props[l2] = a2[s2] ? o2[s2].replace(/&\f/g, i2[c2]) : i2[c2] + " " + o2[s2];
    }
  }
}, rK = function(e10) {
  if ("decl" === e10.type) {
    var t10 = e10.value;
    108 === t10.charCodeAt(0) && 98 === t10.charCodeAt(2) && (e10.return = "", e10.value = "");
  }
}, rZ = [function(e10, t10, r10, n3) {
  if (e10.length > -1 && !e10.return)
    switch (e10.type) {
      case rb:
        e10.return = function e11(t11, r11) {
          switch (45 ^ rP(t11, 0) ? (((r11 << 2 ^ rP(t11, 0)) << 2 ^ rP(t11, 1)) << 2 ^ rP(t11, 2)) << 2 ^ rP(t11, 3) : 0) {
            case 5103:
              return rm + "print-" + t11 + t11;
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
              return rm + t11 + t11;
            case 5349:
            case 4246:
            case 4810:
            case 6968:
            case 2756:
              return rm + t11 + rp + t11 + rh + t11 + t11;
            case 6828:
            case 4268:
              return rm + t11 + rh + t11 + t11;
            case 6165:
              return rm + t11 + rh + "flex-" + t11 + t11;
            case 5187:
              return rm + t11 + rC(t11, /(\w+).+(:[^]+)/, rm + "box-$1$2" + rh + "flex-$1$2") + t11;
            case 5443:
              return rm + t11 + rh + "flex-item-" + rC(t11, /flex-|-self/, "") + t11;
            case 4675:
              return rm + t11 + rh + "flex-line-pack" + rC(t11, /align-content|flex-|-self/, "") + t11;
            case 5548:
              return rm + t11 + rh + rC(t11, "shrink", "negative") + t11;
            case 5292:
              return rm + t11 + rh + rC(t11, "basis", "preferred-size") + t11;
            case 6060:
              return rm + "box-" + rC(t11, "-grow", "") + rm + t11 + rh + rC(t11, "grow", "positive") + t11;
            case 4554:
              return rm + rC(t11, /([^-])(transform)/g, "$1" + rm + "$2") + t11;
            case 6187:
              return rC(rC(rC(t11, /(zoom-|grab)/, rm + "$1"), /(image-set)/, rm + "$1"), t11, "") + t11;
            case 5495:
            case 3959:
              return rC(t11, /(image-set\([^]*)/, rm + "$1$`$1");
            case 4968:
              return rC(rC(t11, /(.+:)(flex-)?(.*)/, rm + "box-pack:$3" + rh + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + rm + t11 + t11;
            case 4095:
            case 3583:
            case 4068:
            case 2532:
              return rC(t11, /(.+)-inline(.+)/, rm + "$1$2") + t11;
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
              if (r_(t11) - 1 - r11 > 6)
                switch (rP(t11, r11 + 1)) {
                  case 109:
                    if (45 !== rP(t11, r11 + 4))
                      break;
                  case 102:
                    return rC(t11, /(.+:)(.+)-([^]+)/, "$1" + rm + "$2-$3$1" + rp + (108 == rP(t11, r11 + 3) ? "$3" : "$2-$3")) + t11;
                  case 115:
                    return ~rM(t11, "stretch") ? e11(rC(t11, "stretch", "fill-available"), r11) + t11 : t11;
                }
              break;
            case 4949:
              if (115 !== rP(t11, r11 + 1))
                break;
            case 6444:
              switch (rP(t11, r_(t11) - 3 - (~rM(t11, "!important") && 10))) {
                case 107:
                  return rC(t11, ":", ":" + rm) + t11;
                case 101:
                  return rC(t11, /(.+:)([^;!]+)(;|!.+)?/, "$1" + rm + (45 === rP(t11, 14) ? "inline-" : "") + "box$3$1" + rm + "$2$3$1" + rh + "$2box$3") + t11;
              }
              break;
            case 5936:
              switch (rP(t11, r11 + 11)) {
                case 114:
                  return rm + t11 + rh + rC(t11, /[svh]\w+-[tblr]{2}/, "tb") + t11;
                case 108:
                  return rm + t11 + rh + rC(t11, /[svh]\w+-[tblr]{2}/, "tb-rl") + t11;
                case 45:
                  return rm + t11 + rh + rC(t11, /[svh]\w+-[tblr]{2}/, "lr") + t11;
              }
              return rm + t11 + rh + t11 + t11;
          }
          return t11;
        }(e10.value, e10.length);
        break;
      case rv:
        return rW([rF(e10, { value: rC(e10.value, "@", "@" + rm) })], n3);
      case ry:
        if (e10.length)
          return e10.props.map(function(t11) {
            var r11;
            switch (r11 = t11, (r11 = /(::plac\w+|:read-\w+)/.exec(r11)) ? r11[0] : r11) {
              case ":read-only":
              case ":read-write":
                return rW([rF(e10, { props: [rC(t11, /:(read-\w+)/, ":" + rp + "$1")] })], n3);
              case "::placeholder":
                return rW([rF(e10, { props: [rC(t11, /:(plac\w+)/, ":" + rm + "input-$1")] }), rF(e10, { props: [rC(t11, /:(plac\w+)/, ":" + rp + "$1")] }), rF(e10, { props: [rC(t11, /:(plac\w+)/, rh + "input-$1")] })], n3);
            }
            return "";
          }).join("");
    }
}], rQ = function(e10) {
  var t10, r10, n3, a2, o2, i2 = e10.key;
  if ("css" === i2) {
    var s2 = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(s2, function(e11) {
      -1 !== e11.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e11), e11.setAttribute("data-s", ""));
    });
  }
  var l2 = e10.stylisPlugins || rZ, c2 = {}, u2 = [];
  a2 = e10.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + i2 + ' "]'), function(e11) {
    for (var t11 = e11.getAttribute("data-emotion").split(" "), r11 = 1; r11 < t11.length; r11++)
      c2[t11[r11]] = true;
    u2.push(e11);
  });
  var d2 = (r10 = (t10 = [rJ, rK].concat(l2, [rq, (n3 = function(e11) {
    o2.insert(e11);
  }, function(e11) {
    !e11.root && (e11 = e11.return) && n3(e11);
  })])).length, function(e11, n5, a3, o3) {
    for (var i3 = "", s3 = 0; s3 < r10; s3++)
      i3 += t10[s3](e11, n5, a3, o3) || "";
    return i3;
  }), f2 = function(e11) {
    var t11, r11;
    return rW((r11 = function e12(t12, r12, n5, a3, o3, i3, s3, l3, c3) {
      for (var u3, d3 = 0, f3 = 0, h3 = s3, p2 = 0, m2 = 0, g2 = 0, y2 = 1, b2 = 1, v2 = 1, x2 = 0, w2 = "", k2 = o3, C2 = i3, M2 = a3, P2 = w2; b2; )
        switch (g2 = x2, x2 = rL()) {
          case 40:
            if (108 != g2 && 58 == rP(P2, h3 - 1)) {
              -1 != rM(P2 += rC(rH(x2), "&", "&\f"), "&\f") && (v2 = -1);
              break;
            }
          case 34:
          case 39:
          case 91:
            P2 += rH(x2);
            break;
          case 9:
          case 10:
          case 13:
          case 32:
            P2 += function(e13) {
              for (; rA = rV(); )
                if (rA < 33)
                  rL();
                else
                  break;
              return rj(e13) > 2 || rj(rA) > 3 ? "" : " ";
            }(g2);
            break;
          case 92:
            P2 += function(e13, t13) {
              for (var r13; --t13 && rL() && !(rA < 48) && !(rA > 102) && (!(rA > 57) || !(rA < 65)) && (!(rA > 70) || !(rA < 97)); )
                ;
              return r13 = r$ + (t13 < 6 && 32 == rV() && 32 == rL()), rS(rI, e13, r13);
            }(r$ - 1, 7);
            continue;
          case 47:
            switch (rV()) {
              case 42:
              case 47:
                rO(rB(u3 = function(e13, t13) {
                  for (; rL(); )
                    if (e13 + rA === 57)
                      break;
                    else if (e13 + rA === 84 && 47 === rV())
                      break;
                  return "/*" + rS(rI, t13, r$ - 1) + "*" + rw(47 === e13 ? e13 : rL());
                }(rL(), r$), r12, n5, rg, rw(rA), rS(u3, 2, -2), 0), c3);
                break;
              default:
                P2 += "/";
            }
            break;
          case 123 * y2:
            l3[d3++] = r_(P2) * v2;
          case 125 * y2:
          case 59:
          case 0:
            switch (x2) {
              case 0:
              case 125:
                b2 = 0;
              case 59 + f3:
                -1 == v2 && (P2 = rC(P2, /\f/g, "")), m2 > 0 && r_(P2) - h3 && rO(m2 > 32 ? rN(P2 + ";", a3, n5, h3 - 1) : rN(rC(P2, " ", "") + ";", a3, n5, h3 - 2), c3);
                break;
              case 59:
                P2 += ";";
              default:
                if (rO(M2 = rz(P2, r12, n5, d3, f3, o3, l3, w2, k2 = [], C2 = [], h3), i3), 123 === x2) {
                  if (0 === f3)
                    e12(P2, r12, M2, M2, k2, i3, h3, l3, C2);
                  else
                    switch (99 === p2 && 110 === rP(P2, 3) ? 100 : p2) {
                      case 100:
                      case 108:
                      case 109:
                      case 115:
                        e12(t12, M2, M2, a3 && rO(rz(t12, M2, M2, 0, 0, o3, l3, w2, o3, k2 = [], h3), C2), o3, C2, h3, l3, a3 ? k2 : C2);
                        break;
                      default:
                        e12(P2, M2, M2, M2, [""], C2, 0, l3, C2);
                    }
                }
            }
            d3 = f3 = m2 = 0, y2 = v2 = 1, w2 = P2 = "", h3 = s3;
            break;
          case 58:
            h3 = 1 + r_(P2), m2 = g2;
          default:
            if (y2 < 1) {
              if (123 == x2)
                --y2;
              else if (125 == x2 && 0 == y2++ && 125 == (rA = r$ > 0 ? rP(rI, --r$) : 0, rD--, 10 === rA && (rD = 1, rT--), rA))
                continue;
            }
            switch (P2 += rw(x2), x2 * y2) {
              case 38:
                v2 = f3 > 0 ? 1 : (P2 += "\f", -1);
                break;
              case 44:
                l3[d3++] = (r_(P2) - 1) * v2, v2 = 1;
                break;
              case 64:
                45 === rV() && (P2 += rH(rL())), p2 = rV(), f3 = h3 = r_(w2 = P2 += function(e13) {
                  for (; !rj(rV()); )
                    rL();
                  return rS(rI, e13, r$);
                }(r$)), x2++;
                break;
              case 45:
                45 === g2 && 2 == r_(P2) && (y2 = 0);
            }
        }
      return i3;
    }("", null, null, null, [""], t11 = rE(t11 = e11), 0, [0], t11), rI = "", r11), d2);
  }, h2 = { key: i2, sheet: new rf({ key: i2, container: a2, nonce: e10.nonce, speedy: e10.speedy, prepend: e10.prepend, insertionPoint: e10.insertionPoint }), nonce: e10.nonce, inserted: c2, registered: {}, insert: function(e11, t11, r11, n5) {
    o2 = r11, f2(e11 ? e11 + "{" + t11.styles + "}" : t11.styles), n5 && (h2.inserted[t11.name] = true);
  } };
  return h2.sheet.hydrate(u2), h2;
};
let r0 = n(() => rQ({ key: "css" }), { name: "Cache" });
var r1 = function(e10, t10, r10) {
  var n3 = e10.key + "-" + t10.name;
  false === r10 && void 0 === e10.registered[n3] && (e10.registered[n3] = t10.styles);
}, r2 = function(e10, t10, r10) {
  r1(e10, t10, r10);
  var n3 = e10.key + "-" + t10.name;
  if (void 0 === e10.inserted[t10.name]) {
    var a2 = t10;
    do
      e10.insert(t10 === a2 ? "." + n3 : "", a2, e10.sheet, true), a2 = a2.next;
    while (void 0 !== a2);
  }
};
let r4 = (e10) => (t10) => {
  if (t10.serialized) {
    if (t10.withoutScoping)
      e10.insert("", t10.serialized, e10.sheet, true);
    else {
      var r10;
      r2(e10, t10.serialized, null === (r10 = t10.isStringTag) || void 0 === r10 || r10);
    }
  }
}, r5 = e({ sx: A(), component: A().optional().default("div") }, (e10, r10) => {
  var n3;
  let { slots: o2 } = r10, i2 = rd.use(), s2 = r0.use(), l2 = i2.unstable_css(s2, null !== (n3 = e10.sx) && void 0 !== n3 ? n3 : {}), c2 = () => "0" != l2.name ? `${s2.key}-${l2.name}` : "", u2 = r4(s2);
  return a(() => {
    u2({ serialized: l2, isStringTag: true });
  }), () => {
    var r11;
    let n5 = null !== (r11 = e10.component) && void 0 !== r11 ? r11 : "div";
    return t(n5, { class: c2(), children: o2 });
  };
}), r3 = Object.assign(r5, { displayName: "Box" }), r8 = (e10, r10) => (n3) => {
  let a2 = {};
  for (let t10 in e10)
    "component" !== t10 && "sx" !== t10 && e10[t10] && (a2[`data-${t10}`] = e10[t10]);
  return t(n3, { ...a2, children: r10.slots });
};
function r6(t10, r10, n3) {
  var l2;
  let c2 = null !== (l2 = M(r10) ? r10 : n3) && void 0 !== l2 ? l2 : r8, u2 = b(r10) ? r10 : {};
  return (r11) => {
    let n5 = e({ ...u2, sx: A().optional(), component: A().optional() }, (e10, l3) => {
      let u3 = rd.use(), d2 = r0.use(), f2 = r4(d2);
      r11.label = n5.name;
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
      let y2 = c2(e10, l3);
      return () => {
        if (t10.__styled) {
          let r13 = y2(t10);
          return r13 ? s(r13, { component: e10.component, class: m2() }) : null;
        }
        let r12 = y2(r3);
        return r12 ? s(r12, { component: e10.component || t10, sx: e10.sx, class: m2() }) : null;
      };
    });
    return n5.__styled = true, n5;
  };
}
let r9 = e({ styles: A() }, (e10) => {
  let { styles: t10 } = e10, r10 = rd.use(), n3 = r0.use(), a2 = r4(n3), o2 = r10.unstable_css(n3, I(t10) ? { "&": t10 } : t10);
  return i(() => {
    a2({ serialized: o2, withoutScoping: true });
  }), () => null;
}), r7 = Object.assign(r9, { displayName: "GlobalStyle" }), ne = e(() => {
  let e10 = rd.use(), r10 = e10.rootCSSVars;
  return () => t(r7, { styles: { ":host, :root, [data-theme]": r10, "*, *::after, *::before": { boxSizing: "border-box" }, html: { fontSize: "10px" }, a: { color: "inherit" }, body: { textStyle: "sys.body-medium" } } });
}), nt = Object.assign(ne, { displayName: "CSSReset" }), nr = n(() => ({ mountPoint: () => document.body }), { name: "OverlaySetting" }), nn = n(() => new na(o(null), o(null), () => false), { name: "Overlay" });
class na {
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
let no = e({ isOpen: B().optional(), style: A().optional(), contentRef: A().optional(), triggerRef: A().optional(), onClickOutside: A(), onEscKeydown: A(), onContentBeforeMount: A(), $transition: A().optional(), $default: A().optional() }, (e10, r10) => {
  var n3;
  let { slots: a2, attrs: i2, emit: l2 } = r10, m2 = e10.contentRef || o(null), g2 = new na(null !== (n3 = e10.triggerRef) && void 0 !== n3 ? n3 : o(null), m2, () => !!e10.isOpen), y2 = nr.use(), b2 = nn.use();
  return c(b2.add(g2)), window && u(d(m2, "value"), p((e11) => {
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
    let n5 = e10.isOpen ? s(t("div", { ...i2, ref: m2, style: e10.style, children: t(nn, { value: g2, children: null === (r11 = a2.default) || void 0 === r11 ? void 0 : r11.call(a2) }) }), { onVnodeBeforeMount: () => {
      l2("content-before-mount");
    } }) : null;
    return t(f, { to: y2.mountPoint(), children: a2.transition ? a2.transition({ content: n5 }) : n5 });
  };
}, { inheritAttrs: false, name: "Overlay" }), ni = Object.assign(no, { displayName: "Overlay" });
var ns = "bottom", nl = "right", nc = "left", nu = "auto", nd = ["top", ns, nl, nc], nf = "start", nh = "viewport", np = "popper", nm = nd.reduce(function(e10, t10) {
  return e10.concat([t10 + "-" + nf, t10 + "-end"]);
}, []), ng = [].concat(nd, [nu]).reduce(function(e10, t10) {
  return e10.concat([t10, t10 + "-" + nf, t10 + "-end"]);
}, []), ny = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
function nb(e10) {
  return e10 ? (e10.nodeName || "").toLowerCase() : null;
}
function nv(e10) {
  if (null == e10)
    return window;
  if ("[object Window]" !== e10.toString()) {
    var t10 = e10.ownerDocument;
    return t10 && t10.defaultView || window;
  }
  return e10;
}
function nx(e10) {
  var t10 = nv(e10).Element;
  return e10 instanceof t10 || e10 instanceof Element;
}
function nw(e10) {
  var t10 = nv(e10).HTMLElement;
  return e10 instanceof t10 || e10 instanceof HTMLElement;
}
function nk(e10) {
  if ("undefined" == typeof ShadowRoot)
    return false;
  var t10 = nv(e10).ShadowRoot;
  return e10 instanceof t10 || e10 instanceof ShadowRoot;
}
function nC(e10) {
  return e10.split("-")[0];
}
var nM = Math.max, nP = Math.min, nS = Math.round;
function n_() {
  var e10 = navigator.userAgentData;
  return null != e10 && e10.brands && Array.isArray(e10.brands) ? e10.brands.map(function(e11) {
    return e11.brand + "/" + e11.version;
  }).join(" ") : navigator.userAgent;
}
function nO() {
  return !/^((?!chrome|android).)*safari/i.test(n_());
}
function nT(e10, t10, r10) {
  void 0 === t10 && (t10 = false), void 0 === r10 && (r10 = false);
  var n3 = e10.getBoundingClientRect(), a2 = 1, o2 = 1;
  t10 && nw(e10) && (a2 = e10.offsetWidth > 0 && nS(n3.width) / e10.offsetWidth || 1, o2 = e10.offsetHeight > 0 && nS(n3.height) / e10.offsetHeight || 1);
  var i2 = (nx(e10) ? nv(e10) : window).visualViewport, s2 = !nO() && r10, l2 = (n3.left + (s2 && i2 ? i2.offsetLeft : 0)) / a2, c2 = (n3.top + (s2 && i2 ? i2.offsetTop : 0)) / o2, u2 = n3.width / a2, d2 = n3.height / o2;
  return { width: u2, height: d2, top: c2, right: l2 + u2, bottom: c2 + d2, left: l2, x: l2, y: c2 };
}
function nD(e10) {
  return nv(e10).getComputedStyle(e10);
}
function nR(e10) {
  return ((nx(e10) ? e10.ownerDocument : e10.document) || window.document).documentElement;
}
function n$(e10) {
  return "html" === nb(e10) ? e10 : e10.assignedSlot || e10.parentNode || (nk(e10) ? e10.host : null) || nR(e10);
}
function nA(e10) {
  return nw(e10) && "fixed" !== nD(e10).position ? e10.offsetParent : null;
}
function nI(e10) {
  for (var t10 = nv(e10), r10 = nA(e10); r10 && ["table", "td", "th"].indexOf(nb(r10)) >= 0 && "static" === nD(r10).position; )
    r10 = nA(r10);
  return r10 && ("html" === nb(r10) || "body" === nb(r10) && "static" === nD(r10).position) ? t10 : r10 || function(e11) {
    var t11 = /firefox/i.test(n_());
    if (/Trident/i.test(n_()) && nw(e11) && "fixed" === nD(e11).position)
      return null;
    var r11 = n$(e11);
    for (nk(r11) && (r11 = r11.host); nw(r11) && 0 > ["html", "body"].indexOf(nb(r11)); ) {
      var n3 = nD(r11);
      if ("none" !== n3.transform || "none" !== n3.perspective || "paint" === n3.contain || -1 !== ["transform", "perspective"].indexOf(n3.willChange) || t11 && "filter" === n3.willChange || t11 && n3.filter && "none" !== n3.filter)
        return r11;
      r11 = r11.parentNode;
    }
    return null;
  }(e10) || t10;
}
function nB(e10) {
  return e10.split("-")[1];
}
var nF = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function nL(e10) {
  var t10, r10, n3, a2, o2, i2, s2, l2 = e10.popper, c2 = e10.popperRect, u2 = e10.placement, d2 = e10.variation, f2 = e10.offsets, h2 = e10.position, p2 = e10.gpuAcceleration, m2 = e10.adaptive, g2 = e10.roundOffsets, y2 = e10.isFixed, b2 = f2.x, v2 = void 0 === b2 ? 0 : b2, x2 = f2.y, w2 = void 0 === x2 ? 0 : x2, k2 = "function" == typeof g2 ? g2({ x: v2, y: w2 }) : { x: v2, y: w2 };
  v2 = k2.x, w2 = k2.y;
  var C2 = f2.hasOwnProperty("x"), M2 = f2.hasOwnProperty("y"), P2 = nc, S2 = "top", _2 = window;
  if (m2) {
    var O2 = nI(l2), T2 = "clientHeight", D2 = "clientWidth";
    O2 === nv(l2) && "static" !== nD(O2 = nR(l2)).position && "absolute" === h2 && (T2 = "scrollHeight", D2 = "scrollWidth"), ("top" === u2 || (u2 === nc || u2 === nl) && "end" === d2) && (S2 = ns, w2 -= (y2 && O2 === _2 && _2.visualViewport ? _2.visualViewport.height : O2[T2]) - c2.height, w2 *= p2 ? 1 : -1), (u2 === nc || ("top" === u2 || u2 === ns) && "end" === d2) && (P2 = nl, v2 -= (y2 && O2 === _2 && _2.visualViewport ? _2.visualViewport.width : O2[D2]) - c2.width, v2 *= p2 ? 1 : -1);
  }
  var R2 = Object.assign({ position: h2 }, m2 && nF), $2 = true === g2 ? (t10 = { x: v2, y: w2 }, r10 = nv(l2), n3 = t10.x, a2 = t10.y, { x: nS(n3 * (o2 = r10.devicePixelRatio || 1)) / o2 || 0, y: nS(a2 * o2) / o2 || 0 }) : { x: v2, y: w2 };
  return (v2 = $2.x, w2 = $2.y, p2) ? Object.assign({}, R2, ((s2 = {})[S2] = M2 ? "0" : "", s2[P2] = C2 ? "0" : "", s2.transform = 1 >= (_2.devicePixelRatio || 1) ? "translate(" + v2 + "px, " + w2 + "px)" : "translate3d(" + v2 + "px, " + w2 + "px, 0)", s2)) : Object.assign({}, R2, ((i2 = {})[S2] = M2 ? w2 + "px" : "", i2[P2] = C2 ? v2 + "px" : "", i2.transform = "", i2));
}
var nV = { passive: true }, nj = { left: "right", right: "left", bottom: "top", top: "bottom" };
function nE(e10) {
  return e10.replace(/left|right|bottom|top/g, function(e11) {
    return nj[e11];
  });
}
var nH = { start: "end", end: "start" };
function nz(e10) {
  return e10.replace(/start|end/g, function(e11) {
    return nH[e11];
  });
}
function nN(e10) {
  var t10 = nv(e10);
  return { scrollLeft: t10.pageXOffset, scrollTop: t10.pageYOffset };
}
function nW(e10) {
  return nT(nR(e10)).left + nN(e10).scrollLeft;
}
function nq(e10) {
  var t10 = nD(e10), r10 = t10.overflow, n3 = t10.overflowX, a2 = t10.overflowY;
  return /auto|scroll|overlay|hidden/.test(r10 + a2 + n3);
}
function nU(e10, t10) {
  void 0 === t10 && (t10 = []);
  var r10, n3 = function e11(t11) {
    return ["html", "body", "#document"].indexOf(nb(t11)) >= 0 ? t11.ownerDocument.body : nw(t11) && nq(t11) ? t11 : e11(n$(t11));
  }(e10), a2 = n3 === (null == (r10 = e10.ownerDocument) ? void 0 : r10.body), o2 = nv(n3), i2 = a2 ? [o2].concat(o2.visualViewport || [], nq(n3) ? n3 : []) : n3, s2 = t10.concat(i2);
  return a2 ? s2 : s2.concat(nU(n$(i2)));
}
function nG(e10) {
  return Object.assign({}, e10, { left: e10.x, top: e10.y, right: e10.x + e10.width, bottom: e10.y + e10.height });
}
function nY(e10, t10, r10) {
  var n3, a2, o2, i2, s2, l2, c2, u2, d2, f2;
  return t10 === nh ? nG(function(e11, t11) {
    var r11 = nv(e11), n5 = nR(e11), a3 = r11.visualViewport, o3 = n5.clientWidth, i3 = n5.clientHeight, s3 = 0, l3 = 0;
    if (a3) {
      o3 = a3.width, i3 = a3.height;
      var c3 = nO();
      (c3 || !c3 && "fixed" === t11) && (s3 = a3.offsetLeft, l3 = a3.offsetTop);
    }
    return { width: o3, height: i3, x: s3 + nW(e11), y: l3 };
  }(e10, r10)) : nx(t10) ? ((n3 = nT(t10, false, "fixed" === r10)).top = n3.top + t10.clientTop, n3.left = n3.left + t10.clientLeft, n3.bottom = n3.top + t10.clientHeight, n3.right = n3.left + t10.clientWidth, n3.width = t10.clientWidth, n3.height = t10.clientHeight, n3.x = n3.left, n3.y = n3.top, n3) : nG((a2 = nR(e10), i2 = nR(a2), s2 = nN(a2), l2 = null == (o2 = a2.ownerDocument) ? void 0 : o2.body, c2 = nM(i2.scrollWidth, i2.clientWidth, l2 ? l2.scrollWidth : 0, l2 ? l2.clientWidth : 0), u2 = nM(i2.scrollHeight, i2.clientHeight, l2 ? l2.scrollHeight : 0, l2 ? l2.clientHeight : 0), d2 = -s2.scrollLeft + nW(a2), f2 = -s2.scrollTop, "rtl" === nD(l2 || i2).direction && (d2 += nM(i2.clientWidth, l2 ? l2.clientWidth : 0) - c2), { width: c2, height: u2, x: d2, y: f2 }));
}
function nX(e10) {
  var t10, r10 = e10.reference, n3 = e10.element, a2 = e10.placement, o2 = a2 ? nC(a2) : null, i2 = a2 ? nB(a2) : null, s2 = r10.x + r10.width / 2 - n3.width / 2, l2 = r10.y + r10.height / 2 - n3.height / 2;
  switch (o2) {
    case "top":
      t10 = { x: s2, y: r10.y - n3.height };
      break;
    case ns:
      t10 = { x: s2, y: r10.y + r10.height };
      break;
    case nl:
      t10 = { x: r10.x + r10.width, y: l2 };
      break;
    case nc:
      t10 = { x: r10.x - n3.width, y: l2 };
      break;
    default:
      t10 = { x: r10.x, y: r10.y };
  }
  var c2 = o2 ? ["top", "bottom"].indexOf(o2) >= 0 ? "x" : "y" : null;
  if (null != c2) {
    var u2 = "y" === c2 ? "height" : "width";
    switch (i2) {
      case nf:
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
  var r10, n3, a2, o2, i2, s2, l2, c2 = t10, u2 = c2.placement, d2 = void 0 === u2 ? e10.placement : u2, f2 = c2.strategy, h2 = void 0 === f2 ? e10.strategy : f2, p2 = c2.boundary, m2 = c2.rootBoundary, g2 = c2.elementContext, y2 = void 0 === g2 ? np : g2, b2 = c2.altBoundary, v2 = c2.padding, x2 = void 0 === v2 ? 0 : v2, w2 = Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, "number" != typeof x2 ? x2 : nd.reduce(function(e11, t11) {
    return e11[t11] = x2, e11;
  }, {})), k2 = e10.rects.popper, C2 = e10.elements[void 0 !== b2 && b2 ? y2 === np ? "reference" : np : y2], M2 = (r10 = nx(C2) ? C2 : C2.contextElement || nR(e10.elements.popper), s2 = (i2 = [].concat("clippingParents" === (n3 = void 0 === p2 ? "clippingParents" : p2) ? (a2 = nU(n$(r10)), nx(o2 = ["absolute", "fixed"].indexOf(nD(r10).position) >= 0 && nw(r10) ? nI(r10) : r10) ? a2.filter(function(e11) {
    return nx(e11) && function(e12, t11) {
      var r11 = t11.getRootNode && t11.getRootNode();
      if (e12.contains(t11))
        return true;
      if (r11 && nk(r11)) {
        var n5 = t11;
        do {
          if (n5 && e12.isSameNode(n5))
            return true;
          n5 = n5.parentNode || n5.host;
        } while (n5);
      }
      return false;
    }(e11, o2) && "body" !== nb(e11);
  }) : []) : [].concat(n3), [void 0 === m2 ? nh : m2]))[0], (l2 = i2.reduce(function(e11, t11) {
    var n5 = nY(r10, t11, h2);
    return e11.top = nM(n5.top, e11.top), e11.right = nP(n5.right, e11.right), e11.bottom = nP(n5.bottom, e11.bottom), e11.left = nM(n5.left, e11.left), e11;
  }, nY(r10, s2, h2))).width = l2.right - l2.left, l2.height = l2.bottom - l2.top, l2.x = l2.left, l2.y = l2.top, l2), P2 = nT(e10.elements.reference), S2 = nX({ reference: P2, element: k2, strategy: "absolute", placement: d2 }), _2 = nG(Object.assign({}, k2, S2)), O2 = y2 === np ? _2 : P2, T2 = { top: M2.top - O2.top + w2.top, bottom: O2.bottom - M2.bottom + w2.bottom, left: M2.left - O2.left + w2.left, right: O2.right - M2.right + w2.right }, D2 = e10.modifiersData.offset;
  if (y2 === np && D2) {
    var R2 = D2[d2];
    Object.keys(T2).forEach(function(e11) {
      var t11 = [nl, ns].indexOf(e11) >= 0 ? 1 : -1, r11 = ["top", ns].indexOf(e11) >= 0 ? "y" : "x";
      T2[e11] += R2[r11] * t11;
    });
  }
  return T2;
}
let nK = { name: "flip", enabled: true, phase: "main", fn: function(e10) {
  var t10 = e10.state, r10 = e10.options, n3 = e10.name;
  if (!t10.modifiersData[n3]._skip) {
    for (var a2 = r10.mainAxis, o2 = void 0 === a2 || a2, i2 = r10.altAxis, s2 = void 0 === i2 || i2, l2 = r10.fallbackPlacements, c2 = r10.padding, u2 = r10.boundary, d2 = r10.rootBoundary, f2 = r10.altBoundary, h2 = r10.flipVariations, p2 = void 0 === h2 || h2, m2 = r10.allowedAutoPlacements, g2 = t10.options.placement, y2 = nC(g2) === g2, b2 = l2 || (y2 || !p2 ? [nE(g2)] : function(e11) {
      if (nC(e11) === nu)
        return [];
      var t11 = nE(e11);
      return [nz(e11), t11, nz(t11)];
    }(g2)), v2 = [g2].concat(b2).reduce(function(e11, r11) {
      var n5, a3, o3, i3, s3, l3, f3, h3, g3, y3, b3, v3;
      return e11.concat(nC(r11) === nu ? (a3 = (n5 = { placement: r11, boundary: u2, rootBoundary: d2, padding: c2, flipVariations: p2, allowedAutoPlacements: m2 }).placement, o3 = n5.boundary, i3 = n5.rootBoundary, s3 = n5.padding, l3 = n5.flipVariations, h3 = void 0 === (f3 = n5.allowedAutoPlacements) ? ng : f3, 0 === (b3 = (y3 = (g3 = nB(a3)) ? l3 ? nm : nm.filter(function(e12) {
        return nB(e12) === g3;
      }) : nd).filter(function(e12) {
        return h3.indexOf(e12) >= 0;
      })).length && (b3 = y3), Object.keys(v3 = b3.reduce(function(e12, r12) {
        return e12[r12] = nJ(t10, { placement: r12, boundary: o3, rootBoundary: i3, padding: s3 })[nC(r12)], e12;
      }, {})).sort(function(e12, t11) {
        return v3[e12] - v3[t11];
      })) : r11);
    }, []), x2 = t10.rects.reference, w2 = t10.rects.popper, k2 = /* @__PURE__ */ new Map(), C2 = true, M2 = v2[0], P2 = 0; P2 < v2.length; P2++) {
      var S2 = v2[P2], _2 = nC(S2), O2 = nB(S2) === nf, T2 = ["top", ns].indexOf(_2) >= 0, D2 = T2 ? "width" : "height", R2 = nJ(t10, { placement: S2, boundary: u2, rootBoundary: d2, altBoundary: f2, padding: c2 }), $2 = T2 ? O2 ? nl : nc : O2 ? ns : "top";
      x2[D2] > w2[D2] && ($2 = nE($2));
      var A2 = nE($2), I2 = [];
      if (o2 && I2.push(R2[_2] <= 0), s2 && I2.push(R2[$2] <= 0, R2[A2] <= 0), I2.every(function(e11) {
        return e11;
      })) {
        M2 = S2, C2 = false;
        break;
      }
      k2.set(S2, I2);
    }
    if (C2)
      for (var B2 = p2 ? 3 : 1, F2 = function(e11) {
        var t11 = v2.find(function(t12) {
          var r11 = k2.get(t12);
          if (r11)
            return r11.slice(0, e11).every(function(e12) {
              return e12;
            });
        });
        if (t11)
          return M2 = t11, "break";
      }, L2 = B2; L2 > 0 && "break" !== F2(L2); L2--)
        ;
    t10.placement !== M2 && (t10.modifiersData[n3]._skip = true, t10.placement = M2, t10.reset = true);
  }
}, requiresIfExists: ["offset"], data: { _skip: false } };
var nZ = { placement: "bottom", modifiers: [], strategy: "absolute" };
function nQ() {
  for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++)
    t10[r10] = arguments[r10];
  return !t10.some(function(e11) {
    return !(e11 && "function" == typeof e11.getBoundingClientRect);
  });
}
var n0 = function(e10) {
  void 0 === e10 && (e10 = {});
  var t10 = e10, r10 = t10.defaultModifiers, n3 = void 0 === r10 ? [] : r10, a2 = t10.defaultOptions, o2 = void 0 === a2 ? nZ : a2;
  return function(e11, t11, r11) {
    void 0 === r11 && (r11 = o2);
    var a3, i2 = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, nZ, o2), modifiersData: {}, elements: { reference: e11, popper: t11 }, attributes: {}, styles: {} }, s2 = [], l2 = false, c2 = { state: i2, setOptions: function(r12) {
      var a4, l3, d2, f2, h2, p2 = "function" == typeof r12 ? r12(i2.options) : r12;
      u2(), i2.options = Object.assign({}, o2, i2.options, p2), i2.scrollParents = { reference: nx(e11) ? nU(e11) : e11.contextElement ? nU(e11.contextElement) : [], popper: nU(t11) };
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
      }), ny.reduce(function(e12, t12) {
        return e12.concat(h2.filter(function(e13) {
          return e13.phase === t12;
        }));
      }, []));
      return i2.orderedModifiers = m2.filter(function(e12) {
        return e12.enabled;
      }), i2.orderedModifiers.forEach(function(e12) {
        var t12 = e12.name, r13 = e12.options, n5 = e12.effect;
        if ("function" == typeof n5) {
          var a5 = n5({ state: i2, name: t12, instance: c2, options: void 0 === r13 ? {} : r13 });
          s2.push(a5 || function() {
          });
        }
      }), c2.update();
    }, forceUpdate: function() {
      if (!l2) {
        var e12, t12, r12, n5, a4, o3, s3, u3, d2, f2, h2, p2, m2, g2, y2, b2 = i2.elements, v2 = b2.reference, x2 = b2.popper;
        if (nQ(v2, x2)) {
          i2.rects = { reference: (t12 = nI(x2), r12 = "fixed" === i2.options.strategy, n5 = nw(t12), u3 = nw(t12) && (o3 = nS((a4 = t12.getBoundingClientRect()).width) / t12.offsetWidth || 1, s3 = nS(a4.height) / t12.offsetHeight || 1, 1 !== o3 || 1 !== s3), d2 = nR(t12), f2 = nT(v2, u3, r12), h2 = { scrollLeft: 0, scrollTop: 0 }, p2 = { x: 0, y: 0 }, (n5 || !n5 && !r12) && (("body" !== nb(t12) || nq(d2)) && (h2 = (e12 = t12) !== nv(e12) && nw(e12) ? { scrollLeft: e12.scrollLeft, scrollTop: e12.scrollTop } : nN(e12)), nw(t12) ? (p2 = nT(t12, true), p2.x += t12.clientLeft, p2.y += t12.clientTop) : d2 && (p2.x = nW(d2))), { x: f2.left + h2.scrollLeft - p2.x, y: f2.top + h2.scrollTop - p2.y, width: f2.width, height: f2.height }), popper: (m2 = nT(x2), g2 = x2.offsetWidth, y2 = x2.offsetHeight, 1 >= Math.abs(m2.width - g2) && (g2 = m2.width), 1 >= Math.abs(m2.height - y2) && (y2 = m2.height), { x: x2.offsetLeft, y: x2.offsetTop, width: g2, height: y2 }) }, i2.reset = false, i2.placement = i2.options.placement, i2.orderedModifiers.forEach(function(e13) {
            return i2.modifiersData[e13.name] = Object.assign({}, e13.data);
          });
          for (var w2 = 0; w2 < i2.orderedModifiers.length; w2++) {
            if (true === i2.reset) {
              i2.reset = false, w2 = -1;
              continue;
            }
            var k2 = i2.orderedModifiers[w2], C2 = k2.fn, M2 = k2.options, P2 = void 0 === M2 ? {} : M2, S2 = k2.name;
            "function" == typeof C2 && (i2 = C2({ state: i2, options: P2, name: S2, instance: c2 }) || i2);
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
    if (!nQ(e11, t11))
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
  var t10 = e10.state, r10 = e10.instance, n3 = e10.options, a2 = n3.scroll, o2 = void 0 === a2 || a2, i2 = n3.resize, s2 = void 0 === i2 || i2, l2 = nv(t10.elements.popper), c2 = [].concat(t10.scrollParents.reference, t10.scrollParents.popper);
  return o2 && c2.forEach(function(e11) {
    e11.addEventListener("scroll", r10.update, nV);
  }), s2 && l2.addEventListener("resize", r10.update, nV), function() {
    o2 && c2.forEach(function(e11) {
      e11.removeEventListener("scroll", r10.update, nV);
    }), s2 && l2.removeEventListener("resize", r10.update, nV);
  };
}, data: {} }, { name: "popperOffsets", enabled: true, phase: "read", fn: function(e10) {
  var t10 = e10.state, r10 = e10.name;
  t10.modifiersData[r10] = nX({ reference: t10.rects.reference, element: t10.rects.popper, strategy: "absolute", placement: t10.placement });
}, data: {} }, { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: function(e10) {
  var t10 = e10.state, r10 = e10.options, n3 = r10.gpuAcceleration, a2 = r10.adaptive, o2 = r10.roundOffsets, i2 = void 0 === o2 || o2, s2 = { placement: nC(t10.placement), variation: nB(t10.placement), popper: t10.elements.popper, popperRect: t10.rects.popper, gpuAcceleration: void 0 === n3 || n3, isFixed: "fixed" === t10.options.strategy };
  null != t10.modifiersData.popperOffsets && (t10.styles.popper = Object.assign({}, t10.styles.popper, nL(Object.assign({}, s2, { offsets: t10.modifiersData.popperOffsets, position: t10.options.strategy, adaptive: void 0 === a2 || a2, roundOffsets: i2 })))), null != t10.modifiersData.arrow && (t10.styles.arrow = Object.assign({}, t10.styles.arrow, nL(Object.assign({}, s2, { offsets: t10.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: i2 })))), t10.attributes.popper = Object.assign({}, t10.attributes.popper, { "data-popper-placement": t10.placement });
}, data: {} }, { name: "applyStyles", enabled: true, phase: "write", fn: function(e10) {
  var t10 = e10.state;
  Object.keys(t10.elements).forEach(function(e11) {
    var r10 = t10.styles[e11] || {}, n3 = t10.attributes[e11] || {}, a2 = t10.elements[e11];
    nw(a2) && nb(a2) && (Object.assign(a2.style, r10), Object.keys(n3).forEach(function(e12) {
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
      nw(n3) && nb(n3) && (Object.assign(n3.style, o2), Object.keys(a2).forEach(function(e12) {
        n3.removeAttribute(e12);
      }));
    });
  };
}, requires: ["computeStyles"] }] });
function n1(e10, t10) {
  return { fn: e10, enabled: true, ...t10 };
}
let n2 = e({ isOpen: ni.propTypes.isOpen, onClickOutside: ni.propTypes.onClickOutside, placement: A().optional(), modifiers: A().optional(), $transition: ni.propTypes.$transition, $content: A(), $default: A() }, (e10, r10) => {
  let { slots: n3, emit: a2, attrs: i2 } = r10, l2 = o(null), c2 = o(null);
  return m(() => c2.value, (t10) => {
    if (t10) {
      var r11, n5;
      n0(l2.value, t10, { placement: null !== (r11 = e10.placement) && void 0 !== r11 ? r11 : "bottom", modifiers: [...null !== (n5 = e10.modifiers) && void 0 !== n5 ? n5 : [], nK] });
    }
  }), () => {
    var r11, o2;
    let u2 = null === (r11 = n3.default) || void 0 === r11 ? void 0 : r11.call(n3)[0];
    return u2 ? g(y, { children: [s(u2, { ...i2, onVnodeMounted: (e11) => {
      l2.value = function e12(t10) {
        if (t10) {
          if (t10 instanceof HTMLElement)
            return t10;
          if (t10 instanceof Text)
            return e12(t10.nextElementSibling);
        }
        return null;
      }(e11.el);
    } }), t(ni, { triggerRef: l2, contentRef: c2, isOpen: e10.isOpen, onClickOutside: (e11) => a2("click-outside", e11), style: { zIndex: 100 }, $transition: n3.transition, children: null === (o2 = n3.content) || void 0 === o2 ? void 0 : o2.call(n3) })] }) : null;
  };
}, { name: "Popper", inheritAttrs: false }), n4 = Object.assign(n2, { displayName: "Popper" });
export {
  r3 as B,
  nt as C,
  r7 as G,
  ni as O,
  n4 as P,
  rd as T,
  th as a,
  n1 as c,
  ri as d,
  r6 as s,
  ro as t,
  tm as v
};
