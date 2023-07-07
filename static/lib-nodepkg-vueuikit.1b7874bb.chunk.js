import { c as e, j as t, T as r, d as n, o as a, r as o, e as i, a as s, u as l, f as c, g as u, t as d, h as f, s as h, i as p, w as m, b as g, F as b } from "./lib-nodepkg-vuekit.a575cf60.chunk.js";
import { b as v, h as y, j as x, l as w, m as k, n as M, i as C, k as P, g as _, q as S, d as O, r as D, t as T, u as R, v as $, c as A, w as I, e as L } from "./lib-nodepkg-typedef.60c9c151.chunk.js";
function B(e10, t10) {
  var r10 = {};
  for (var n3 in e10)
    Object.prototype.hasOwnProperty.call(e10, n3) && 0 > t10.indexOf(n3) && (r10[n3] = e10[n3]);
  if (null != e10 && "function" == typeof Object.getOwnPropertySymbols)
    for (var a2 = 0, n3 = Object.getOwnPropertySymbols(e10); a2 < n3.length; a2++)
      0 > t10.indexOf(n3[a2]) && Object.prototype.propertyIsEnumerable.call(e10, n3[a2]) && (r10[n3[a2]] = e10[n3[a2]]);
  return r10;
}
var F, j, V, E, H = function() {
}, z = function() {
};
let W = (e10, t10, r10) => Math.min(Math.max(r10, e10), t10);
function N(e10, t10) {
  return e10 * Math.sqrt(1 - t10 * t10);
}
let q = ["duration", "bounce"], U = ["stiffness", "damping", "mass"];
function G(e10, t10) {
  return t10.some((t11) => void 0 !== e10[t11]);
}
function Y(e10) {
  var { from: t10 = 0, to: r10 = 1, restSpeed: n3 = 2, restDelta: a2 } = e10, o2 = B(e10, ["from", "to", "restSpeed", "restDelta"]);
  let i2 = { done: false, value: t10 }, { stiffness: s2, damping: l2, mass: c2, velocity: u2, duration: d2, isResolvedFromDuration: f2 } = function(e11) {
    let t11 = Object.assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: false }, e11);
    if (!G(e11, U) && G(e11, q)) {
      let r11 = function(e12) {
        let t12, r12, { duration: n5 = 800, bounce: a3 = 0.25, velocity: o3 = 0, mass: i3 = 1 } = e12;
        H(n5 <= 1e4);
        let s3 = 1 - a3;
        s3 = W(0.05, 1, s3), n5 = W(0.01, 10, n5 / 1e3), s3 < 1 ? (t12 = (e13) => {
          let t13 = e13 * s3, r13 = t13 * n5, a4 = N(e13, s3);
          return 1e-3 - (t13 - o3) / a4 * Math.exp(-r13);
        }, r12 = (e13) => {
          let r13 = e13 * s3, a4 = r13 * n5, i4 = Math.pow(s3, 2) * Math.pow(e13, 2) * n5, l4 = N(Math.pow(e13, 2), s3), c4 = -t12(e13) + 1e-3 > 0 ? -1 : 1;
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
      let t11 = N(i3, o3);
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
let X = (e10) => 0, K = (e10, t10, r10) => {
  let n3 = t10 - e10;
  return 0 === n3 ? 1 : (r10 - e10) / n3;
}, J = (e10, t10, r10) => -r10 * e10 + r10 * t10 + e10, Z = (e10, t10) => (r10) => Math.max(Math.min(r10, t10), e10), Q = (e10) => e10 % 1 ? Number(e10.toFixed(5)) : e10, ee = /(-)?([\d]*\.?[\d])+/g, et = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, er = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
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
function eb(e10) {
  "number" == typeof e10 && (e10 = `${e10}`);
  let t10 = [], r10 = 0, n3 = e10.match(et);
  n3 && (r10 = n3.length, e10 = e10.replace(et, em), t10.push(...n3.map(ep.parse)));
  let a2 = e10.match(ee);
  return a2 && (e10 = e10.replace(ee, eg), t10.push(...a2.map(ea.parse))), { values: t10, numColors: r10, tokenised: e10 };
}
function ev(e10) {
  return eb(e10).values;
}
function ey(e10) {
  let { values: t10, numColors: r10, tokenised: n3 } = eb(e10), a2 = t10.length;
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
}, parse: ev, createTransformer: ey, getAnimatableNone: function(e10) {
  let t10 = ev(e10), r10 = ey(e10);
  return r10(t10.map(ex));
} };
function ek(e10, t10, r10) {
  return (r10 < 0 && (r10 += 1), r10 > 1 && (r10 -= 1), r10 < 1 / 6) ? e10 + (t10 - e10) * 6 * r10 : r10 < 0.5 ? t10 : r10 < 2 / 3 ? e10 + (t10 - e10) * (2 / 3 - r10) * 6 : e10;
}
function eM(e10) {
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
let eC = (e10, t10, r10) => {
  let n3 = e10 * e10;
  return Math.sqrt(Math.max(0, r10 * (t10 * t10 - n3) + n3));
}, eP = [eh, ef, ec], e_ = (e10) => eP.find((t10) => t10.test(e10)), eS = (e10, t10) => {
  let r10 = e_(e10), n3 = e_(t10), a2 = r10.parse(e10), o2 = n3.parse(t10);
  r10 === ec && (a2 = eM(a2), r10 = ef), n3 === ec && (o2 = eM(o2), n3 = ef);
  let i2 = Object.assign({}, a2);
  return (e11) => {
    for (let t11 in i2)
      "alpha" !== t11 && (i2[t11] = eC(a2[t11], o2[t11], e11));
    return i2.alpha = J(a2.alpha, o2.alpha, e11), r10.transform(i2);
  };
}, eO = (e10) => "number" == typeof e10, eD = (e10, t10) => (r10) => t10(e10(r10)), eT = function() {
  for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++)
    t10[r10] = arguments[r10];
  return t10.reduce(eD);
};
function eR(e10, t10) {
  return eO(e10) ? (r10) => J(e10, t10, r10) : ep.test(e10) ? eS(e10, t10) : eL(e10, t10);
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
let eL = (e10, t10) => {
  let r10 = ew.createTransformer(t10), n3 = eI(e10), a2 = eI(t10), o2 = n3.numHSL === a2.numHSL && n3.numRGB === a2.numRGB && n3.numNumbers >= a2.numNumbers;
  return o2 ? eT(e$(n3.parsed, a2.parsed), r10) : (r11) => `${r11 > 0 ? t10 : e10}`;
}, eB = (e10, t10) => (r10) => J(e10, t10, r10);
function eF(e10, t10) {
  let { clamp: r10 = true, ease: n3, mixer: a2 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o2 = e10.length;
  z(o2 === t10.length), z(!n3 || !Array.isArray(n3) || n3.length === o2 - 1), e10[0] > e10[o2 - 1] && (e10 = [].concat(e10), t10 = [].concat(t10), e10.reverse(), t10.reverse());
  let i2 = function(e11, t11, r11) {
    var n5;
    let a3 = [], o3 = r11 || ("number" == typeof (n5 = e11[0]) ? eB : "string" == typeof n5 ? ep.test(n5) ? eS : eL : Array.isArray(n5) ? e$ : "object" == typeof n5 ? eA : void 0), i3 = e11.length - 1;
    for (let r12 = 0; r12 < i3; r12++) {
      let n6 = o3(e11[r12], e11[r12 + 1]);
      if (t11) {
        let e12 = Array.isArray(t11) ? t11[r12] : t11;
        n6 = eT(e12, n6);
      }
      a3.push(n6);
    }
    return a3;
  }(t10, n3, a2), s2 = 2 === o2 ? function(e11, t11) {
    let [r11, n5] = e11, [a3] = t11;
    return (e12) => a3(K(r11, n5, e12));
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
      let s3 = K(e11[o3], e11[o3 + 1], a3);
      return t11[o3](s3);
    };
  }(e10, i2);
  return r10 ? (t11) => s2(W(e10[0], e10[o2 - 1], t11)) : s2;
}
let ej = (e10) => (t10) => t10 * t10 * ((e10 + 1) * t10 - e10), eV = (e10) => e10, eE = (j = (e10) => Math.pow(e10, 2), (e10) => e10 <= 0.5 ? j(2 * e10) / 2 : (2 - j(2 * (1 - e10))) / 2);
function eH(e10) {
  let { from: t10 = 0, to: r10 = 1, ease: n3, offset: a2, duration: o2 = 300 } = e10, i2 = { done: false, value: t10 }, s2 = Array.isArray(r10) ? r10 : [t10, r10], l2 = (a2 && a2.length === s2.length ? a2 : function(e11) {
    let t11 = e11.length;
    return e11.map((e12, r11) => 0 !== r11 ? r11 / (t11 - 1) : 0);
  }(s2)).map((e11) => e11 * o2);
  function c2() {
    return eF(l2, s2, { ease: Array.isArray(n3) ? n3 : s2.map(() => n3 || eE).splice(0, s2.length - 1) });
  }
  let u2 = c2();
  return { next: (e11) => (i2.value = u2(e11), i2.done = e11 >= o2, i2), flipTarget: () => {
    s2.reverse(), u2 = c2();
  } };
}
((e10) => {
  let t10 = ej(1.525);
  return (e11) => (e11 *= 2) < 1 ? 0.5 * t10(e11) : 0.5 * (2 - Math.pow(2, -10 * (e11 - 1)));
})(0);
let ez = { keyframes: eH, spring: Y, decay: function(e10) {
  let { velocity: t10 = 0, from: r10 = 0, power: n3 = 0.8, timeConstant: a2 = 350, restDelta: o2 = 0.5, modifyTarget: i2 } = e10, s2 = { done: false, value: r10 }, l2 = n3 * t10, c2 = r10 + l2, u2 = void 0 === i2 ? c2 : i2(c2);
  return u2 !== c2 && (l2 = u2 - r10), { next: (e11) => {
    let t11 = -l2 * Math.exp(-e11 / a2);
    return s2.done = !(t11 > o2 || t11 < -o2), s2.value = s2.done ? u2 : u2 + t11, s2;
  }, flipTarget: () => {
  } };
} }, eW = 1 / 60 * 1e3, eN = "undefined" != typeof performance ? () => performance.now() : () => Date.now(), eq = "undefined" != typeof window ? (e10) => window.requestAnimationFrame(e10) : (e10) => setTimeout(() => e10(eN()), eW), eU = true, eG = false, eY = false, eX = { delta: 0, timestamp: 0 }, eK = ["read", "update", "preRender", "render", "postRender"], eJ = eK.reduce((e10, t10) => (e10[t10] = function(e11) {
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
}(() => eG = true), e10), {}), eZ = eK.reduce((e10, t10) => {
  let r10 = eJ[t10];
  return e10[t10] = function(e11) {
    let t11 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return eG || e2(), r10.schedule(e11, t11, n3);
  }, e10;
}, {}), eQ = eK.reduce((e10, t10) => (e10[t10] = eJ[t10].cancel, e10), {});
eK.reduce((e10, t10) => (e10[t10] = () => eJ[t10].process(eX), e10), {});
let e0 = (e10) => eJ[e10].process(eX), e1 = (e10) => {
  eG = false, eX.delta = eU ? eW : Math.max(Math.min(e10 - eX.timestamp, 40), 1), eX.timestamp = e10, eY = true, eK.forEach(e0), eY = false, eG && (eU = false, eq(e1));
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
  var a2, { from: o2, autoplay: i2 = true, driver: s2 = e5, elapsed: l2 = 0, repeat: c2 = 0, repeatType: u2 = "loop", repeatDelay: d2 = 0, onPlay: f2, onStop: h2, onComplete: p2, onRepeat: m2, onUpdate: g2 } = e10, b2 = B(e10, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
  let { to: v2 } = b2, y2 = 0, x2 = b2.duration, w2 = false, k2 = true, M2 = function(e11) {
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
  }(b2);
  (null === (a2 = M2.needsInterpolation) || void 0 === a2 ? void 0 : a2.call(M2, o2, v2)) && (n3 = eF([0, 100], [o2, v2], { clamp: false }), o2 = 0, v2 = 100);
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
          let r11 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n5 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
          return n5 ? e4(t11 + -e12, t11, r11) : t11 - (e12 - t11) + r11;
        }(l2, x2, d2, k2 = y2 % 2 == 0) : (l2 = e4(l2, x2, d2), "mirror" === u2 && C2.flipTarget()), w2 = false, m2 && m2());
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
var tc = ((F = tc || {})[F.var = 0] = "var", F[F.mixin = 1] = "mixin", F);
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
      if (x(this._cssVarRefs, [o2], t10(o2)), v(n3))
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
    if (v(a2)) {
      if (y(a2, "_default")) {
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
      x(this._values, [r10], M(e11, "__mixin"));
    });
  }
};
tf.walkValues = function(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let n3 in e10) {
    let a2 = e10[n3];
    if (v(a2)) {
      if (y(a2, "__mixin")) {
        t10(a2, [...r10, n3]);
        continue;
      }
      tf.walkValues(a2, t10, [...r10, n3]);
      continue;
    }
    t10(a2, [...r10, n3]);
  }
};
let th = (e10) => (t10) => `rgba(var(${t10}-rgb) / ${e10})`, tp = (e10) => C(e10) && y(e10, "token");
function tm(e10, t10) {
  return Object.assign((e11) => t10(e11), { toString: () => e10, token: e10 });
}
var tg = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, tb = /[A-Z]|^ms/g, tv = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ty = function(e10) {
  return 45 === e10.charCodeAt(1);
}, tx = function(e10) {
  return null != e10 && "boolean" != typeof e10;
}, tw = function(e10) {
  var t10 = /* @__PURE__ */ Object.create(null);
  return function(r10) {
    return void 0 === t10[r10] && (t10[r10] = e10(r10)), t10[r10];
  };
}(function(e10) {
  return ty(e10) ? e10 : e10.replace(tb, "-$&").toLowerCase();
}), tk = function(e10, t10) {
  switch (e10) {
    case "animation":
    case "animationName":
      if ("string" == typeof t10)
        return t10.replace(tv, function(e11, t11, r10) {
          return V = { name: t11, styles: r10, next: V }, t11;
        });
  }
  return 1 === tg[e10] || ty(e10) || "number" != typeof t10 || 0 === t10 ? t10 : t10 + "px";
};
function tM(e10, t10, r10) {
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
        var n5 = "";
        if (Array.isArray(r11))
          for (var a3 = 0; a3 < r11.length; a3++)
            n5 += tM(e11, t11, r11[a3]) + ";";
        else
          for (var o3 in r11) {
            var i3 = r11[o3];
            if ("object" != typeof i3)
              null != t11 && void 0 !== t11[i3] ? n5 += o3 + "{" + t11[i3] + "}" : tx(i3) && (n5 += tw(o3) + ":" + tk(o3, i3) + ";");
            else if (Array.isArray(i3) && "string" == typeof i3[0] && (null == t11 || void 0 === t11[i3[0]]))
              for (var s2 = 0; s2 < i3.length; s2++)
                tx(i3[s2]) && (n5 += tw(o3) + ":" + tk(o3, i3[s2]) + ";");
            else {
              var l2 = tM(e11, t11, i3);
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
        var a2 = V, o2 = r10(e10);
        return V = a2, tM(e10, t10, o2);
      }
  }
  if (null == t10)
    return r10;
  var i2 = t10[r10];
  return void 0 !== i2 ? i2 : r10;
}
var tC = /label:\s*([^\s;\n{]+)\s*(;|$)/g, tP = function(e10, t10, r10) {
  if (1 === e10.length && "object" == typeof e10[0] && null !== e10[0] && void 0 !== e10[0].styles)
    return e10[0];
  var n3, a2 = true, o2 = "";
  V = void 0;
  var i2 = e10[0];
  null == i2 || void 0 === i2.raw ? (a2 = false, o2 += tM(r10, t10, i2)) : o2 += i2[0];
  for (var s2 = 1; s2 < e10.length; s2++)
    o2 += tM(r10, t10, e10[s2]), a2 && (o2 += i2[s2]);
  tC.lastIndex = 0;
  for (var l2 = ""; null !== (n3 = tC.exec(o2)); )
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
  }(o2) + l2, styles: o2, next: V };
};
let t_ = class {
  processAll(e10) {
    let t10 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], r10 = [], { state: n3, extends: a2, ...o2 } = e10;
    if (a2)
      for (let e11 of a2)
        r10.push(...this.processAll(e11, t10));
    if (n3) {
      let e11 = {}, t11 = {};
      t_.walkStateValues(n3, (r11, n5, a3) => {
        let o3 = `--${this.opt.varPrefix}-state-${n5.join("-")}`, i2 = S(n5), s2 = {};
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
    if (v(r10)) {
      e10[t10 = null !== (a2 = t_.convertSelector(t10)) && void 0 !== a2 ? a2 : t10] = null !== (o2 = e10[t10]) && void 0 !== o2 ? o2 : {}, this.processTo(e10[t10], r10);
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
t_.supportedPseudoClasses = { active: "active", after: "after", anyLink: "any-link", before: "before", blank: "blank", checked: "checked", current: "current", default: "default", defined: "defined", disabled: "disabled", empty: "empty", enabled: "enabled", first: "first", firstChild: "first-child", firstLetter: "first-letter", firstLine: "first-line", firstOfType: "first-of-type", focus: "focus", focusVisible: "focus-visible", focusWithin: "focus-within", fullscreen: "fullscreen", future: "future", hover: "hover", inRange: "in-range", indeterminate: "indeterminate", invalid: "invalid", lastChild: "last-child", lastOfType: "last-of-type", left: "left", link: "link", localLink: "local-link", nthCol: "nth-col", nthLastCol: "nth-last-col", onlyChild: "only-child", onlyOfType: "only-of-type", optional: "optional", outOfRange: "out-of-range", past: "past", paused: "paused", pictureInPicture: "picture-in-picture", placeholderShown: "placeholder-shown", playing: "playing", readOnly: "read-only", readWrite: "read-write", required: "required", right: "right", root: "root", scope: "scope", target: "target", targetWithin: "target-within", userInvalid: "user-invalid", userValid: "user-valid", valid: "valid", visited: "visited" }, t_.convertSelector = (e10) => {
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
      if (t_.supportedPseudoClasses[e10]) {
        let r12 = t_.supportedPseudoClasses[e10];
        return `${t10}:${r12}, ${t10}[data-${r12}]:not([data-${r12}='false']), ${t10}.${r12}`;
      }
      let [r11, n3] = e10.split("__"), a2 = P(r11);
      return n3 ? `${t10}[data-${a2}='${P(n3)}']` : `${t10}[data-${a2}]:not([data-${a2}='false'])`;
    }
  }
}, t_.walkStateValues = function(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { default: {}, selectorPath: [], path: [] }, { $: n3, ...a2 } = e10;
  for (let e11 in a2) {
    var o2;
    let i2 = a2[e11], s2 = null !== (o2 = a2.default) && void 0 !== o2 ? o2 : r10.default, l2 = null != n3 ? n3 : _(s2, [...r10.path.slice(1), "$"]), c2 = l2 ? [...r10.selectorPath, l2] : r10.selectorPath, u2 = [...r10.path, e11];
    if (v(i2)) {
      t_.walkStateValues(i2, t10, { path: u2, selectorPath: c2, default: s2 });
      continue;
    }
    t10(i2, u2, c2);
  }
};
let tS = (e10) => e10.reduce((e11, t10) => ({ ...e11, [t10]: true }), {}), tO = class {
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
    for (let a2 in this.cssVars = {}, this.tokens = {}, this.propValues = {}, this.mixins = {}, this.dp = (e11) => 0 === e11 ? 0 : `calc(${e11} * var(${this.cssVar("space", "dp")}))`, this.transformFallback = (e11, t11) => tO.propsCanBaseDp[e11] && D(t11) ? tO.propsCanPercent[e11] && 1 > Math.abs(t11) ? `${100 * t11}%` : this.dp(t11) : t11, this.token = new Proxy({}, { get: (e11, t11) => {
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
    }, this.unstable_sx = (e11) => new t_({ mixins: this.mixins, varPrefix: this.varPrefix, processValue: this.processValue }).processAll(e11), this.varPrefix = null !== (r10 = t10.varPrefix) && void 0 !== r10 ? r10 : "vk", this.mode = null !== (n3 = t10.mode) && void 0 !== n3 ? n3 : "light", x(this.cssVars, [this.cssVar("space", "dp")], "0.1rem"), e10) {
      let t11 = e10[a2];
      if (t11.type == tc.var) {
        let e11 = new td(t11, { cssVar: (e12) => this.cssVar(a2, e12), transformFallback: (e12) => this.transformFallback(t11.on[0], e12) });
        for (let r11 of (this.tokens[a2] = e11, t11.on))
          this.propValues[r11] = e11;
        for (let t12 of e11.tokens)
          for (let r11 of ["light", "dark"]) {
            let n5 = r11 === this.mode ? "_default" : `_${r11}`, o2 = e11.get(t12, n5, true);
            T(o2) || ("_default" === n5 ? x(this.cssVars, [this.cssVar(a2, t12)], o2) : x(this.cssVars, [n5, this.cssVar(a2, t12)], o2));
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
tO.propsCanPercent = tS([...tu.boxSize({}).on]), tO.propsCanBaseDp = tS([...tu.boxSize({}).on, ...tu.space({}).on, ...tu.fontSize({}).on, ...tu.letterSpacing({}).on, ...tu.lineHeight({}).on, ...tu.rounded({}).on]);
let tD = { shadow: tu.shadow({ 0: { _default: "0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0)", _dark: "0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0)" }, 1: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)", _dark: "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 2: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)", _dark: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 3: { _default: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)" }, 4: { _default: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)" }, 5: { _default: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)", _dark: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)" } }), elevation: tu.customMixin("elevation", { 0: tu.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "0", _hover: { shadow: "1" } }), 1: tu.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "1", _hover: { shadow: "2" } }), 2: tu.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "2", _hover: { shadow: "3" } }), 3: tu.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "3", _hover: { shadow: "4" } }), 4: tu.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "4", _hover: { shadow: "5" } }) }) }, tT = { font: tu.font({ brand: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', plain: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', code: "'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace" }), fontWeight: tu.fontWeight({ regular: 400, medium: 500, bold: 700 }), textStyle: tu.customMixin("textStyle", { sys: { "display-large": tu.mixin({ lineHeight: 64, fontSize: 57, letterSpacing: -0.25, fontWeight: "regular", font: "brand" }), "display-medium": tu.mixin({ lineHeight: 52, fontSize: 45, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "display-small": tu.mixin({ lineHeight: 44, fontSize: 36, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-large": tu.mixin({ lineHeight: 40, fontSize: 32, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-medium": tu.mixin({ lineHeight: 36, fontSize: 28, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-small": tu.mixin({ lineHeight: 32, fontSize: 24, letterSpacing: 0, fontWeight: "regular", font: "plain" }), "title-large": tu.mixin({ lineHeight: 28, fontSize: 22, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "title-medium": tu.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.15, fontWeight: "medium", font: "plain" }), "title-small": tu.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-large": tu.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-medium": tu.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "label-small": tu.mixin({ lineHeight: 16, fontSize: 11, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "body-large": tu.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.5, fontWeight: "regular", font: "plain" }), "body-medium": tu.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.25, fontWeight: "regular", font: "plain" }), "body-small": tu.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.4, fontWeight: "regular", font: "plain" }) } }) };
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
let tI = [[0.41233895, 0.35762064, 0.18051042], [0.2126, 0.7152, 0.0722], [0.01932141, 0.11916382, 0.95034478]], tL = [[3.2413774792388685, -1.5376652402851851, -0.49885366846268053], [-0.9691452513005321, 1.8758853451067872, 0.04156585616912061], [0.05562093689691305, -0.20395524564742123, 1.0571799111220335]], tB = [95.047, 100, 108.883];
function tF(e10, t10, r10) {
  return (-16777216 | (255 & e10) << 16 | (255 & t10) << 8 | 255 & r10) >>> 0;
}
function tj(e10) {
  let t10 = tW(e10[0]), r10 = tW(e10[1]), n3 = tW(e10[2]);
  return tF(t10, r10, n3);
}
function tV(e10) {
  let t10 = function(e11) {
    let t11 = tz(e11 >> 16 & 255), r10 = tz(e11 >> 8 & 255), n3 = tz(255 & e11);
    return tA([t11, r10, n3], tI);
  }(e10)[1];
  return 116 * tN(t10 / 100) - 16;
}
function tE(e10) {
  return 100 * function(e11) {
    let t10 = e11 * e11 * e11;
    return t10 > 216 / 24389 ? t10 : (116 * e11 - 16) / (24389 / 27);
  }((e10 + 16) / 116);
}
function tH(e10) {
  return 116 * tN(e10 / 100) - 16;
}
function tz(e10) {
  let t10 = e10 / 255;
  return t10 <= 0.040449936 ? t10 / 12.92 * 100 : 100 * Math.pow((t10 + 0.055) / 1.055, 2.4);
}
function tW(e10) {
  var t10;
  let r10 = e10 / 100;
  return (t10 = Math.round(255 * (r10 <= 31308e-7 ? 12.92 * r10 : 1.055 * Math.pow(r10, 1 / 2.4) - 0.055))) < 0 ? 0 : t10 > 255 ? 255 : t10;
}
function tN(e10) {
  return e10 > 216 / 24389 ? Math.pow(e10, 1 / 3) : (24389 / 27 * e10 + 16) / 116;
}
class tq {
  static make() {
    var e10, t10;
    let r10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tB, n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200 / Math.PI * tE(50) / 100, a2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50, o2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2, i2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], s2 = 0.401288 * r10[0] + 0.650173 * r10[1] + -0.051461 * r10[2], l2 = -0.250268 * r10[0] + 1.204414 * r10[1] + 0.045854 * r10[2], c2 = -2079e-6 * r10[0] + 0.048952 * r10[1] + 0.953127 * r10[2], u2 = 0.8 + o2 / 10, d2 = u2 >= 0.9 ? (1 - (e10 = (u2 - 0.9) * 10)) * 0.59 + 0.69 * e10 : (1 - (t10 = (u2 - 0.8) * 10)) * 0.525 + 0.59 * t10, f2 = i2 ? 1 : u2 * (1 - 1 / 3.6 * Math.exp((-n3 - 42) / 92));
    f2 = f2 > 1 ? 1 : f2 < 0 ? 0 : f2;
    let h2 = [f2 * (100 / s2) + 1 - f2, f2 * (100 / l2) + 1 - f2, f2 * (100 / c2) + 1 - f2], p2 = 1 / (5 * n3 + 1), m2 = p2 * p2 * p2 * p2, g2 = 1 - m2, b2 = m2 * n3 + 0.1 * g2 * g2 * Math.cbrt(5 * n3), v2 = tE(a2) / r10[1], y2 = 1.48 + Math.sqrt(v2), x2 = 0.725 / Math.pow(v2, 0.2), w2 = [Math.pow(b2 * h2[0] * s2 / 100, 0.42), Math.pow(b2 * h2[1] * l2 / 100, 0.42), Math.pow(b2 * h2[2] * c2 / 100, 0.42)], k2 = [400 * w2[0] / (w2[0] + 27.13), 400 * w2[1] / (w2[1] + 27.13), 400 * w2[2] / (w2[2] + 27.13)], M2 = (2 * k2[0] + k2[1] + 0.05 * k2[2]) * x2;
    return new tq(v2, M2, x2, x2, d2, u2, h2, b2, Math.pow(b2, 0.25), y2);
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
    let r10 = tz((16711680 & e10) >> 16), n3 = tz((65280 & e10) >> 8), a2 = tz(255 & e10), o2 = 0.41233895 * r10 + 0.35762064 * n3 + 0.18051042 * a2, i2 = 0.2126 * r10 + 0.7152 * n3 + 0.0722 * a2, s2 = 0.01932141 * r10 + 0.11916382 * n3 + 0.95034478 * a2, l2 = t10.rgbD[0] * (0.401288 * o2 + 0.650173 * i2 - 0.051461 * s2), c2 = t10.rgbD[1] * (-0.250268 * o2 + 1.204414 * i2 + 0.045854 * s2), u2 = t10.rgbD[2] * (-2079e-6 * o2 + 0.048952 * i2 + 0.953127 * s2), d2 = Math.pow(t10.fl * Math.abs(l2) / 100, 0.42), f2 = Math.pow(t10.fl * Math.abs(c2) / 100, 0.42), h2 = Math.pow(t10.fl * Math.abs(u2) / 100, 0.42), p2 = 400 * tR(l2) * d2 / (d2 + 27.13), m2 = 400 * tR(c2) * f2 / (f2 + 27.13), g2 = 400 * tR(u2) * h2 / (h2 + 27.13), b2 = (11 * p2 + -12 * m2 + g2) / 11, v2 = (p2 + m2 - 2 * g2) / 9, y2 = 180 * Math.atan2(v2, b2) / Math.PI, x2 = y2 < 0 ? y2 + 360 : y2 >= 360 ? y2 - 360 : y2, w2 = x2 * Math.PI / 180, k2 = (40 * p2 + 20 * m2 + g2) / 20 * t10.nbb, M2 = 100 * Math.pow(k2 / t10.aw, t10.c * t10.z), C2 = 4 / t10.c * Math.sqrt(M2 / 100) * (t10.aw + 4) * t10.fLRoot, P2 = x2 < 20.14 ? x2 + 360 : x2, _2 = 5e4 / 13 * (0.25 * (Math.cos(P2 * Math.PI / 180 + 2) + 3.8)) * t10.nc * t10.ncb, S2 = Math.pow(_2 * Math.sqrt(b2 * b2 + v2 * v2) / ((20 * p2 + 20 * m2 + 21 * g2) / 20 + 0.305), 0.9) * Math.pow(1.64 - Math.pow(0.29, t10.n), 0.73), O2 = S2 * Math.sqrt(M2 / 100), D2 = O2 * t10.fLRoot, T2 = 50 * Math.sqrt(S2 * t10.c / (t10.aw + 4)), R2 = (1 + 100 * 7e-3) * M2 / (1 + 7e-3 * M2), $2 = 1 / 0.0228 * Math.log(1 + 0.0228 * D2), A2 = $2 * Math.cos(w2), I2 = $2 * Math.sin(w2);
    return new tU(x2, O2, M2, C2, D2, T2, R2, A2, I2);
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
    let t10 = 0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100), r10 = Math.pow(t10 / Math.pow(1.64 - Math.pow(0.29, e10.n), 0.73), 1 / 0.9), n3 = this.hue * Math.PI / 180, a2 = e10.aw * Math.pow(this.j / 100, 1 / e10.c / e10.z), o2 = 0.25 * (Math.cos(n3 + 2) + 3.8) * (5e4 / 13) * e10.nc * e10.ncb, i2 = a2 / e10.nbb, s2 = Math.sin(n3), l2 = Math.cos(n3), c2 = 23 * (i2 + 0.305) * r10 / (23 * o2 + 11 * r10 * l2 + 108 * r10 * s2), u2 = c2 * l2, d2 = c2 * s2, f2 = (460 * i2 + 451 * u2 + 288 * d2) / 1403, h2 = (460 * i2 - 891 * u2 - 261 * d2) / 1403, p2 = (460 * i2 - 220 * u2 - 6300 * d2) / 1403, m2 = Math.max(0, 27.13 * Math.abs(f2) / (400 - Math.abs(f2))), g2 = tR(f2) * (100 / e10.fl) * Math.pow(m2, 1 / 0.42), b2 = Math.max(0, 27.13 * Math.abs(h2) / (400 - Math.abs(h2))), v2 = tR(h2) * (100 / e10.fl) * Math.pow(b2, 1 / 0.42), y2 = Math.max(0, 27.13 * Math.abs(p2) / (400 - Math.abs(p2))), x2 = tR(p2) * (100 / e10.fl) * Math.pow(y2, 1 / 0.42), w2 = g2 / e10.rgbD[0], k2 = v2 / e10.rgbD[1], M2 = x2 / e10.rgbD[2], C2 = function(e11, t11, r11) {
      let n5 = tL[0][0] * e11 + tL[0][1] * t11 + tL[0][2] * r11, a3 = tL[1][0] * e11 + tL[1][1] * t11 + tL[1][2] * r11, o3 = tL[2][0] * e11 + tL[2][1] * t11 + tL[2][2] * r11, i3 = tW(n5), s3 = tW(a3), l3 = tW(o3);
      return tF(i3, s3, l3);
    }(1.86206786 * w2 - 1.01125463 * k2 + 0.14918677 * M2, 0.38752654 * w2 + 0.62144744 * k2 - 897398e-8 * M2, -0.0158415 * w2 - 0.03412294 * k2 + 1.04996444 * M2);
    return C2;
  }
  static fromXyzInViewingConditions(e10, t10, r10, n3) {
    let a2 = n3.rgbD[0] * (0.401288 * e10 + 0.650173 * t10 - 0.051461 * r10), o2 = n3.rgbD[1] * (-0.250268 * e10 + 1.204414 * t10 + 0.045854 * r10), i2 = n3.rgbD[2] * (-2079e-6 * e10 + 0.048952 * t10 + 0.953127 * r10), s2 = Math.pow(n3.fl * Math.abs(a2) / 100, 0.42), l2 = Math.pow(n3.fl * Math.abs(o2) / 100, 0.42), c2 = Math.pow(n3.fl * Math.abs(i2) / 100, 0.42), u2 = 400 * tR(a2) * s2 / (s2 + 27.13), d2 = 400 * tR(o2) * l2 / (l2 + 27.13), f2 = 400 * tR(i2) * c2 / (c2 + 27.13), h2 = (11 * u2 + -12 * d2 + f2) / 11, p2 = (u2 + d2 - 2 * f2) / 9, m2 = 180 * Math.atan2(p2, h2) / Math.PI, g2 = m2 < 0 ? m2 + 360 : m2 >= 360 ? m2 - 360 : m2, b2 = g2 * Math.PI / 180, v2 = (40 * u2 + 20 * d2 + f2) / 20 * n3.nbb, y2 = 100 * Math.pow(v2 / n3.aw, n3.c * n3.z), x2 = 4 / n3.c * Math.sqrt(y2 / 100) * (n3.aw + 4) * n3.fLRoot, w2 = g2 < 20.14 ? g2 + 360 : g2, k2 = 5e4 / 13 * (0.25 * (Math.cos(w2 * Math.PI / 180 + 2) + 3.8)) * n3.nc * n3.ncb, M2 = Math.pow(k2 * Math.sqrt(h2 * h2 + p2 * p2) / ((20 * u2 + 20 * d2 + 21 * f2) / 20 + 0.305), 0.9) * Math.pow(1.64 - Math.pow(0.29, n3.n), 0.73), C2 = M2 * Math.sqrt(y2 / 100), P2 = C2 * n3.fLRoot, _2 = 50 * Math.sqrt(M2 * n3.c / (n3.aw + 4)), S2 = (1 + 100 * 7e-3) * y2 / (1 + 7e-3 * y2), O2 = Math.log(1 + 0.0228 * P2) / 0.0228, D2 = O2 * Math.cos(b2), T2 = O2 * Math.sin(b2);
    return new tU(g2, C2, y2, x2, P2, _2, S2, D2, T2);
  }
  xyzInViewingConditions(e10) {
    let t10 = 0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100), r10 = Math.pow(t10 / Math.pow(1.64 - Math.pow(0.29, e10.n), 0.73), 1 / 0.9), n3 = this.hue * Math.PI / 180, a2 = e10.aw * Math.pow(this.j / 100, 1 / e10.c / e10.z), o2 = 0.25 * (Math.cos(n3 + 2) + 3.8) * (5e4 / 13) * e10.nc * e10.ncb, i2 = a2 / e10.nbb, s2 = Math.sin(n3), l2 = Math.cos(n3), c2 = 23 * (i2 + 0.305) * r10 / (23 * o2 + 11 * r10 * l2 + 108 * r10 * s2), u2 = c2 * l2, d2 = c2 * s2, f2 = (460 * i2 + 451 * u2 + 288 * d2) / 1403, h2 = (460 * i2 - 891 * u2 - 261 * d2) / 1403, p2 = (460 * i2 - 220 * u2 - 6300 * d2) / 1403, m2 = Math.max(0, 27.13 * Math.abs(f2) / (400 - Math.abs(f2))), g2 = tR(f2) * (100 / e10.fl) * Math.pow(m2, 1 / 0.42), b2 = Math.max(0, 27.13 * Math.abs(h2) / (400 - Math.abs(h2))), v2 = tR(h2) * (100 / e10.fl) * Math.pow(b2, 1 / 0.42), y2 = Math.max(0, 27.13 * Math.abs(p2) / (400 - Math.abs(p2))), x2 = tR(p2) * (100 / e10.fl) * Math.pow(y2, 1 / 0.42), w2 = g2 / e10.rgbD[0], k2 = v2 / e10.rgbD[1], M2 = x2 / e10.rgbD[2];
    return [1.86206786 * w2 - 1.01125463 * k2 + 0.14918677 * M2, 0.38752654 * w2 + 0.62144744 * k2 - 897398e-8 * M2, -0.0158415 * w2 - 0.03412294 * k2 + 1.04996444 * M2];
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
      let c2 = n3 / 100, u2 = 0 === t10 || 0 === n3 ? 0 : t10 / Math.sqrt(c2), d2 = Math.pow(u2 * o2, 1 / 0.9), f2 = a2.aw * Math.pow(c2, 1 / a2.c / a2.z), h2 = f2 / a2.nbb, p2 = 23 * (h2 + 0.305) * d2 / (23 * i2 + 11 * d2 * l2 + 108 * d2 * s2), m2 = p2 * l2, g2 = p2 * s2, b2 = (460 * h2 + 451 * m2 + 288 * g2) / 1403, v2 = (460 * h2 - 891 * m2 - 261 * g2) / 1403, y2 = (460 * h2 - 220 * m2 - 6300 * g2) / 1403, x2 = tG.inverseChromaticAdaptation(b2), w2 = tG.inverseChromaticAdaptation(v2), k2 = tG.inverseChromaticAdaptation(y2), M2 = tA([x2, w2, k2], tG.LINRGB_FROM_SCALED_DISCOUNT);
      if (M2[0] < 0 || M2[1] < 0 || M2[2] < 0)
        break;
      let C2 = tG.Y_FROM_LINRGB[0], P2 = tG.Y_FROM_LINRGB[1], _2 = tG.Y_FROM_LINRGB[2], S2 = C2 * M2[0] + P2 * M2[1] + _2 * M2[2];
      if (S2 <= 0)
        break;
      if (4 === e11 || 2e-3 > Math.abs(S2 - r10)) {
        if (M2[0] > 100.01 || M2[1] > 100.01 || M2[2] > 100.01)
          return 0;
        return tj(M2);
      }
      n3 -= (S2 - r10) * n3 / (2 * S2);
    }
    return 0;
  }
  static solveToInt(e10, t10, r10) {
    var n3;
    if (t10 < 1e-4 || r10 < 1e-4 || r10 > 99.9999)
      return function(e11) {
        let t11 = tE(e11), r11 = tW(t11);
        return tF(r11, r11, r11);
      }(r10);
    (n3 = e10 % 360) < 0 && (n3 += 360), e10 = n3;
    let a2 = e10 / 180 * Math.PI, o2 = tE(r10), i2 = tG.findResultByJ(a2, t10, o2);
    if (0 !== i2)
      return i2;
    let s2 = tG.bisectToLimit(o2, a2);
    return tj(s2);
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
    this.internalHue = t10.hue, this.internalChroma = t10.chroma, this.internalTone = tV(e10), this.argb = e10;
  }
  inViewingConditions(e10) {
    let t10 = tU.fromInt(this.toInt()), r10 = t10.xyzInViewingConditions(e10), n3 = tU.fromXyzInViewingConditions(r10[0], r10[1], r10[2], tq.make()), a2 = tY.from(n3.hue, n3.chroma, tH(r10[1]));
    return a2;
  }
  constructor(e10) {
    this.argb = e10;
    let t10 = tU.fromInt(e10);
    this.internalHue = t10.hue, this.internalChroma = t10.chroma, this.internalTone = tV(e10), this.argb = e10;
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
class tK {
  static isDisliked(e10) {
    let t10 = Math.round(e10.hue) >= 90 && 111 >= Math.round(e10.hue), r10 = Math.round(e10.chroma) > 16, n3 = 65 > Math.round(e10.tone);
    return t10 && r10 && n3;
  }
  static fixIfDisliked(e10) {
    return tK.isDisliked(e10) ? tY.from(e10.hue, e10.chroma, 70) : e10;
  }
}
class tJ {
  static fromPalette(e10) {
    var t10, r10;
    return new tJ(null !== (t10 = e10.name) && void 0 !== t10 ? t10 : "", e10.palette, e10.tone, null !== (r10 = e10.isBackground) && void 0 !== r10 && r10, e10.background, e10.secondBackground, e10.contrastCurve, e10.toneDeltaPair);
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
      let r10 = this.toneDeltaPair(e10), n3 = r10.roleA, a2 = r10.roleB, o2 = r10.delta, i2 = r10.polarity, s2 = r10.stayTogether, l2 = this.background(e10), c2 = l2.getTone(e10), u2 = "nearer" === i2 || "lighter" === i2 && !e10.isDark || "darker" === i2 && e10.isDark, d2 = u2 ? n3 : a2, f2 = u2 ? a2 : n3, h2 = this.name === d2.name, p2 = e10.isDark ? 1 : -1, m2 = d2.contrastCurve.getContrast(e10.contrastLevel), g2 = f2.contrastCurve.getContrast(e10.contrastLevel), b2 = d2.tone(e10), v2 = tX.ratioOfTones(c2, b2) >= m2 ? b2 : tJ.foregroundTone(c2, m2), y2 = f2.tone(e10), x2 = tX.ratioOfTones(c2, y2) >= g2 ? y2 : tJ.foregroundTone(c2, g2);
      return t10 && (v2 = tJ.foregroundTone(c2, m2), x2 = tJ.foregroundTone(c2, g2)), (x2 - v2) * p2 >= o2 || ((x2 = t$(0, 100, v2 + o2 * p2)) - v2) * p2 >= o2 || (v2 = t$(0, 100, x2 - o2 * p2)), 50 <= v2 && v2 < 60 ? x2 = p2 > 0 ? Math.max(x2, (v2 = 60) + o2 * p2) : Math.min(x2, (v2 = 49) + o2 * p2) : 50 <= x2 && x2 < 60 && (x2 = s2 ? p2 > 0 ? Math.max(x2, (v2 = 60) + o2 * p2) : Math.min(x2, (v2 = 49) + o2 * p2) : p2 > 0 ? 60 : 49), h2 ? v2 : x2;
    }
    {
      let r10 = this.tone(e10);
      if (null == this.background)
        return r10;
      let n3 = this.background(e10).getTone(e10), a2 = this.contrastCurve.getContrast(e10.contrastLevel);
      if (tX.ratioOfTones(n3, r10) >= a2 || (r10 = tJ.foregroundTone(n3, a2)), t10 && (r10 = tJ.foregroundTone(n3, a2)), this.isBackground && 50 <= r10 && r10 < 60 && (r10 = tX.ratioOfTones(49, n3) >= a2 ? 49 : 60), this.secondBackground) {
        let [t11, n5] = [this.background, this.secondBackground], [o2, i2] = [t11(e10).getTone(e10), n5(e10).getTone(e10)], [s2, l2] = [Math.max(o2, i2), Math.min(o2, i2)];
        if (tX.ratioOfTones(s2, r10) >= a2 && tX.ratioOfTones(l2, r10) >= a2)
          return r10;
        let c2 = tX.lighter(s2, a2), u2 = tX.darker(l2, a2), d2 = [];
        -1 !== c2 && d2.push(c2), -1 !== u2 && d2.push(u2);
        let f2 = tJ.tonePrefersLightForeground(o2) || tJ.tonePrefersLightForeground(i2);
        return f2 ? c2 < 0 ? 100 : c2 : 1 === d2.length ? d2[0] : u2 < 0 ? 0 : u2;
      }
      return r10;
    }
  }
  static foregroundTone(e10, t10) {
    let r10 = tX.lighterUnsafe(e10, t10), n3 = tX.darkerUnsafe(e10, t10), a2 = tX.ratioOfTones(r10, e10), o2 = tX.ratioOfTones(n3, e10), i2 = tJ.tonePrefersLightForeground(e10);
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
    return tJ.tonePrefersLightForeground(e10) && !tJ.toneAllowsLightForeground(e10) ? 49 : e10;
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
function t8(e10) {
  e10 = e10.replace("#", "");
  let t10 = 3 === e10.length, r10 = 6 === e10.length, n3 = 8 === e10.length;
  if (!t10 && !r10 && !n3)
    throw Error("unexpected hex " + e10);
  let a2 = 0, o2 = 0, i2 = 0;
  return t10 ? (a2 = t6(e10.slice(0, 1).repeat(2)), o2 = t6(e10.slice(1, 2).repeat(2)), i2 = t6(e10.slice(2, 3).repeat(2))) : r10 ? (a2 = t6(e10.slice(0, 2)), o2 = t6(e10.slice(2, 4)), i2 = t6(e10.slice(4, 6))) : n3 && (a2 = t6(e10.slice(2, 4)), o2 = t6(e10.slice(4, 6)), i2 = t6(e10.slice(6, 8))), (-16777216 | (255 & a2) << 16 | (255 & o2) << 8 | 255 & i2) >>> 0;
}
function t6(e10) {
  return parseInt(e10, 16);
}
let t9 = { 0: true, 10: true, 20: true, 30: true, 40: true, 50: true, 60: true, 70: true, 80: true, 90: true, 95: true, 100: true }, t7 = (e10) => {
  let t10 = function(e11) {
    return { r: e11 >> 16 & 255, g: e11 >> 8 & 255, b: 255 & e11, a: e11 >> 24 & 255 };
  }(e10);
  return [t10.r, t10.g, t10.b];
}, re = (e10) => ({ primary: true, secondary: true, tertiary: true, error: true, warning: true, success: true })[e10], rt = class {
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
      this.seeds[a2] && (r10[n3] = this.seeds[a2].tone(o2), t10[n3] = this.seeds[a2].tone(i2));
    }
    return [t10, r10];
  }
  toTokenObject() {
    let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t10 = (e11) => ({ type: "color", value: `rgb(${t7(e11).join(",")})` }), r10 = { seed: {}, palette: {}, sys: { dark: {}, light: {} } };
    for (let e11 in this.seeds)
      r10.seed[e11] = t10(this.seeds[e11].keyColor.toInt()), Object.keys(t9).forEach((n5) => {
        r10.palette[e11] = { ...r10.palette[e11] || {}, [n5]: t10(this.seeds[e11].tone(parseInt(n5))) };
      });
    let n3 = this.normalizeRoleRules(e10);
    for (let e11 in n3) {
      let [t11, a2, o2] = n3[e11];
      r10.sys.dark[e11] = { value: `{palette.${t11}.${a2}}`, type: "color" }, r10.sys.light[e11] = { value: `{palette.${t11}.${o2}}`, type: "color" };
    }
    return r10;
  }
  toDesignTokens() {
    let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [t10, r10] = this.getThemeRoleColors(this.normalizeRoleRules(e10)), n3 = {}, a2 = {};
    for (let e11 in t10)
      if (n3[`${e11}`] = { _default: t7(t10[e11]), _dark: t7(r10[e11]) }, re(e11) && (a2[`${e11}`] = tu.mixin({ bgColor: `sys.${e11}`, color: `sys.on-${e11}` }), a2[`${e11}-container`] = tu.mixin({ bgColor: `sys.${e11}-container`, color: `sys.on-${e11}-container` })), e11.startsWith("surface")) {
        if (e11.includes("container")) {
          a2[`${e11}`] = tu.mixin({ bgColor: `sys.${e11}`, color: "sys.on-surface" });
          continue;
        }
        a2[`${e11}`] = tu.mixin({ bgColor: `sys.${e11}`, color: "sys.on-surface" }), a2[`on-${e11}`] = tu.mixin({ bgColor: `sys.on-${e11}`, color: "sys.inverse-on-surface" });
      }
    let o2 = (e11) => Object.keys(t9).reduce((t11, r11) => ({ ...t11, [r11]: t7(e11.tone(parseInt(r11))) }), {}), i2 = tu.color({ ...$(this.seeds, (e11) => o2(e11)), white: [255, 255, 255], black: [0, 0, 0], sys: n3 }), s2 = tu.customMixin("containerStyle", { sys: a2 });
    return { color: i2, containerStyle: s2 };
  }
  constructor(e10) {
    this.seeds = e10;
  }
}, rr = rt;
rr.toHEX = (e10) => `#${t7(e10).map((e11) => R(e11.toString(16), 2, "0")).join("")}`, rr.fromColors = (e10) => {
  let { primary: t10, secondary: r10, tertiary: n3, neutral: a2, neutralVariant: o2, error: i2, ...s2 } = e10, l2 = t3.contentFromColors({ primary: t8(t10), secondary: r10 ? t8(r10) : void 0, tertiary: n3 ? t8(n3) : void 0, error: i2 ? t8(i2) : void 0 });
  return a2 && (l2.n1 = t5.fromHueAndChroma(t8(a2), 4)), o2 && (l2.n2 = t5.fromHueAndChroma(t8(o2), 8)), new rt({ ...$(s2, (e11) => t5.fromInt(t8(e11))), primary: l2.a1, secondary: l2.a2, tertiary: l2.a3, neutral: l2.n1, neutralVariant: l2.n2, error: l2.error });
};
let rn = (e10, t10, r10, n3) => Object.assign(function(e11, t11, r11, n5) {
  if (e11 === t11 && r11 === n5)
    return eV;
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
}(e10, t10, r10, n3), { toString: () => `cubic-bezier(${e10}, ${t10}, ${r10}, ${n3})` }), ra = { duration: { sm1: 50, sm2: 100, sm3: 150, sm4: 200, md1: 250, md2: 300, md3: 350, md4: 400, lg1: 450, lg2: 500, lg3: 550, lg4: 600, xl1: 700, xl2: 800, xl3: 900, xl4: 1e3 }, easing: { linear: rn(0, 0, 1, 1), standard: Object.assign(rn(0.2, 0, 0, 1), { accelerate: rn(0.3, 0, 1, 1), decelerate: rn(0, 0, 0, 1) }), emphasized: Object.assign(rn(0.2, 0, 0, 1), { accelerate: rn(0.3, 0, 0.8, 0.15), decelerate: rn(0.05, 0.7, 0.1, 1) }), legacy: Object.assign(rn(0.4, 0, 0.2, 1), { decelerate: rn(0, 0, 0.2, 1), accelerate: rn(0.4, 0, 1, 1) }) } }, ro = (n3, a2) => (a2 = null != a2 ? a2 : { ...n3, from: { ...n3.to }, to: { ...n3.from } }, e({ onComplete: A(), $default: A() }, (e10, o2) => {
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
}, { name: "Transition" })), ri = { transitionDuration: tu.transitionDuration(ra.duration), transitionTimingFunction: tu.transitionTimingFunction({ linear: ra.easing.linear.toString(), standard: ra.easing.standard.toString(), "standard-accelerate": ra.easing.standard.accelerate.toString(), "standard-decelerate": ra.easing.standard.decelerate.toString(), emphasized: ra.easing.emphasized.toString(), "emphasized-decelerate": ra.easing.emphasized.decelerate.toString(), "emphasized-accelerate": ra.easing.emphasized.accelerate.toString(), legacy: ra.easing.legacy.toString(), "legacy-decelerate": ra.easing.legacy.decelerate.toString(), "legacy-accelerate": ra.easing.legacy.accelerate.toString() }) }, rs = tu.rounded({ xs: 4, sm: 8, md: 12, lg: 16, xl: 28 }), rl = rr.fromColors({ primary: "#1270f5", secondary: "#8a90a5", tertiary: "#b58391", neutral: "#5e5e5e", error: "#d93f23", warning: "#e69c00", success: "#5ac220" }), rc = { ...tT, ...ri, ...tD, rounded: rs, ...rl.toDesignTokens({ primary: ["primary", 80, 50] }) }, ru = tO.create(rc, { varPrefix: "vk" }), rd = n(() => ru, { name: "Theme" });
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
}(), rh = "-ms-", rp = "-moz-", rm = "-webkit-", rg = "comm", rb = "rule", rv = "decl", ry = "@keyframes", rx = Math.abs, rw = String.fromCharCode, rk = Object.assign;
function rM(e10, t10, r10) {
  return e10.replace(t10, r10);
}
function rC(e10, t10) {
  return e10.indexOf(t10);
}
function rP(e10, t10) {
  return 0 | e10.charCodeAt(t10);
}
function r_(e10, t10, r10) {
  return e10.slice(t10, r10);
}
function rS(e10) {
  return e10.length;
}
function rO(e10, t10) {
  return t10.push(e10), e10;
}
var rD = 1, rT = 1, rR = 0, r$ = 0, rA = 0, rI = "";
function rL(e10, t10, r10, n3, a2, o2, i2) {
  return { value: e10, root: t10, parent: r10, type: n3, props: a2, children: o2, line: rD, column: rT, length: i2, return: "" };
}
function rB(e10, t10) {
  return rk(rL("", null, null, "", null, null, 0), e10, { length: -e10.length }, t10);
}
function rF() {
  return rA = r$ < rR ? rP(rI, r$++) : 0, rT++, 10 === rA && (rT = 1, rD++), rA;
}
function rj() {
  return rP(rI, r$);
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
function rE(e10) {
  return rD = rT = 1, rR = rS(rI = e10), r$ = 0, [];
}
function rH(e10) {
  var t10, r10;
  return (t10 = r$ - 1, r10 = function e11(t11) {
    for (; rF(); )
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
          rF();
      }
    return r$;
  }(91 === e10 ? e10 + 2 : 40 === e10 ? e10 + 1 : e10), r_(rI, t10, r10)).trim();
}
function rz(e10, t10, r10, n3, a2, o2, i2, s2, l2, c2, u2) {
  for (var d2 = a2 - 1, f2 = 0 === a2 ? o2 : [""], h2 = f2.length, p2 = 0, m2 = 0, g2 = 0; p2 < n3; ++p2)
    for (var b2 = 0, v2 = r_(e10, d2 + 1, d2 = rx(m2 = i2[p2])), y2 = e10; b2 < h2; ++b2)
      (y2 = (m2 > 0 ? f2[b2] + " " + v2 : rM(v2, /&\f/g, f2[b2])).trim()) && (l2[g2++] = y2);
  return rL(e10, t10, r10, 0 === a2 ? rb : s2, l2, c2, u2);
}
function rW(e10, t10, r10, n3) {
  return rL(e10, t10, r10, rv, r_(e10, 0, n3), r_(e10, n3 + 1, -1), n3);
}
function rN(e10, t10) {
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
    case rv:
      return e10.return = e10.return || e10.value;
    case rg:
      return "";
    case ry:
      return e10.return = e10.value + "{" + rN(e10.children, n3) + "}";
    case rb:
      e10.value = e10.props.join(",");
  }
  return rS(r10 = rN(e10.children, n3)) ? e10.return = e10.value + "{" + r10 + "}" : "";
}
var rU = function(e10, t10, r10) {
  for (var n3 = 0, a2 = 0; n3 = a2, a2 = rj(), 38 === n3 && 12 === a2 && (t10[r10] = 1), !rV(a2); )
    rF();
  return r_(rI, e10, r$);
}, rG = function(e10, t10) {
  var r10 = -1, n3 = 44;
  do
    switch (rV(n3)) {
      case 0:
        38 === n3 && 12 === rj() && (t10[r10] = 1), e10[r10] += rU(r$ - 1, t10, r10);
        break;
      case 2:
        e10[r10] += rH(n3);
        break;
      case 4:
        if (44 === n3) {
          e10[++r10] = 58 === rj() ? "&\f" : "", t10[r10] = e10[r10].length;
          break;
        }
      default:
        e10[r10] += rw(n3);
    }
  while (n3 = rF());
  return e10;
}, rY = function(e10, t10) {
  var r10;
  return r10 = rG(rE(e10), t10), rI = "", r10;
}, rX = /* @__PURE__ */ new WeakMap(), rK = function(e10) {
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
}, rJ = function(e10) {
  if ("decl" === e10.type) {
    var t10 = e10.value;
    108 === t10.charCodeAt(0) && 98 === t10.charCodeAt(2) && (e10.return = "", e10.value = "");
  }
}, rZ = [function(e10, t10, r10, n3) {
  if (e10.length > -1 && !e10.return)
    switch (e10.type) {
      case rv:
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
              return rm + t11 + rM(t11, /(\w+).+(:[^]+)/, rm + "box-$1$2" + rh + "flex-$1$2") + t11;
            case 5443:
              return rm + t11 + rh + "flex-item-" + rM(t11, /flex-|-self/, "") + t11;
            case 4675:
              return rm + t11 + rh + "flex-line-pack" + rM(t11, /align-content|flex-|-self/, "") + t11;
            case 5548:
              return rm + t11 + rh + rM(t11, "shrink", "negative") + t11;
            case 5292:
              return rm + t11 + rh + rM(t11, "basis", "preferred-size") + t11;
            case 6060:
              return rm + "box-" + rM(t11, "-grow", "") + rm + t11 + rh + rM(t11, "grow", "positive") + t11;
            case 4554:
              return rm + rM(t11, /([^-])(transform)/g, "$1" + rm + "$2") + t11;
            case 6187:
              return rM(rM(rM(t11, /(zoom-|grab)/, rm + "$1"), /(image-set)/, rm + "$1"), t11, "") + t11;
            case 5495:
            case 3959:
              return rM(t11, /(image-set\([^]*)/, rm + "$1$`$1");
            case 4968:
              return rM(rM(t11, /(.+:)(flex-)?(.*)/, rm + "box-pack:$3" + rh + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + rm + t11 + t11;
            case 4095:
            case 3583:
            case 4068:
            case 2532:
              return rM(t11, /(.+)-inline(.+)/, rm + "$1$2") + t11;
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
              if (rS(t11) - 1 - r11 > 6)
                switch (rP(t11, r11 + 1)) {
                  case 109:
                    if (45 !== rP(t11, r11 + 4))
                      break;
                  case 102:
                    return rM(t11, /(.+:)(.+)-([^]+)/, "$1" + rm + "$2-$3$1" + rp + (108 == rP(t11, r11 + 3) ? "$3" : "$2-$3")) + t11;
                  case 115:
                    return ~rC(t11, "stretch") ? e11(rM(t11, "stretch", "fill-available"), r11) + t11 : t11;
                }
              break;
            case 4949:
              if (115 !== rP(t11, r11 + 1))
                break;
            case 6444:
              switch (rP(t11, rS(t11) - 3 - (~rC(t11, "!important") && 10))) {
                case 107:
                  return rM(t11, ":", ":" + rm) + t11;
                case 101:
                  return rM(t11, /(.+:)([^;!]+)(;|!.+)?/, "$1" + rm + (45 === rP(t11, 14) ? "inline-" : "") + "box$3$1" + rm + "$2$3$1" + rh + "$2box$3") + t11;
              }
              break;
            case 5936:
              switch (rP(t11, r11 + 11)) {
                case 114:
                  return rm + t11 + rh + rM(t11, /[svh]\w+-[tblr]{2}/, "tb") + t11;
                case 108:
                  return rm + t11 + rh + rM(t11, /[svh]\w+-[tblr]{2}/, "tb-rl") + t11;
                case 45:
                  return rm + t11 + rh + rM(t11, /[svh]\w+-[tblr]{2}/, "lr") + t11;
              }
              return rm + t11 + rh + t11 + t11;
          }
          return t11;
        }(e10.value, e10.length);
        break;
      case ry:
        return rN([rB(e10, { value: rM(e10.value, "@", "@" + rm) })], n3);
      case rb:
        if (e10.length)
          return e10.props.map(function(t11) {
            var r11;
            switch (r11 = t11, (r11 = /(::plac\w+|:read-\w+)/.exec(r11)) ? r11[0] : r11) {
              case ":read-only":
              case ":read-write":
                return rN([rB(e10, { props: [rM(t11, /:(read-\w+)/, ":" + rp + "$1")] })], n3);
              case "::placeholder":
                return rN([rB(e10, { props: [rM(t11, /:(plac\w+)/, ":" + rm + "input-$1")] }), rB(e10, { props: [rM(t11, /:(plac\w+)/, ":" + rp + "$1")] }), rB(e10, { props: [rM(t11, /:(plac\w+)/, rh + "input-$1")] })], n3);
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
  var d2 = (r10 = (t10 = [rK, rJ].concat(l2, [rq, (n3 = function(e11) {
    o2.insert(e11);
  }, function(e11) {
    !e11.root && (e11 = e11.return) && n3(e11);
  })])).length, function(e11, n5, a3, o3) {
    for (var i3 = "", s3 = 0; s3 < r10; s3++)
      i3 += t10[s3](e11, n5, a3, o3) || "";
    return i3;
  }), f2 = function(e11) {
    var t11, r11;
    return rN((r11 = function e12(t12, r12, n5, a3, o3, i3, s3, l3, c3) {
      for (var u3, d3 = 0, f3 = 0, h3 = s3, p2 = 0, m2 = 0, g2 = 0, b2 = 1, v2 = 1, y2 = 1, x2 = 0, w2 = "", k2 = o3, M2 = i3, C2 = a3, P2 = w2; v2; )
        switch (g2 = x2, x2 = rF()) {
          case 40:
            if (108 != g2 && 58 == rP(P2, h3 - 1)) {
              -1 != rC(P2 += rM(rH(x2), "&", "&\f"), "&\f") && (y2 = -1);
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
              for (; rA = rj(); )
                if (rA < 33)
                  rF();
                else
                  break;
              return rV(e13) > 2 || rV(rA) > 3 ? "" : " ";
            }(g2);
            break;
          case 92:
            P2 += function(e13, t13) {
              for (var r13; --t13 && rF() && !(rA < 48) && !(rA > 102) && (!(rA > 57) || !(rA < 65)) && (!(rA > 70) || !(rA < 97)); )
                ;
              return r13 = r$ + (t13 < 6 && 32 == rj() && 32 == rF()), r_(rI, e13, r13);
            }(r$ - 1, 7);
            continue;
          case 47:
            switch (rj()) {
              case 42:
              case 47:
                rO(rL(u3 = function(e13, t13) {
                  for (; rF(); )
                    if (e13 + rA === 57)
                      break;
                    else if (e13 + rA === 84 && 47 === rj())
                      break;
                  return "/*" + r_(rI, t13, r$ - 1) + "*" + rw(47 === e13 ? e13 : rF());
                }(rF(), r$), r12, n5, rg, rw(rA), r_(u3, 2, -2), 0), c3);
                break;
              default:
                P2 += "/";
            }
            break;
          case 123 * b2:
            l3[d3++] = rS(P2) * y2;
          case 125 * b2:
          case 59:
          case 0:
            switch (x2) {
              case 0:
              case 125:
                v2 = 0;
              case 59 + f3:
                -1 == y2 && (P2 = rM(P2, /\f/g, "")), m2 > 0 && rS(P2) - h3 && rO(m2 > 32 ? rW(P2 + ";", a3, n5, h3 - 1) : rW(rM(P2, " ", "") + ";", a3, n5, h3 - 2), c3);
                break;
              case 59:
                P2 += ";";
              default:
                if (rO(C2 = rz(P2, r12, n5, d3, f3, o3, l3, w2, k2 = [], M2 = [], h3), i3), 123 === x2) {
                  if (0 === f3)
                    e12(P2, r12, C2, C2, k2, i3, h3, l3, M2);
                  else
                    switch (99 === p2 && 110 === rP(P2, 3) ? 100 : p2) {
                      case 100:
                      case 108:
                      case 109:
                      case 115:
                        e12(t12, C2, C2, a3 && rO(rz(t12, C2, C2, 0, 0, o3, l3, w2, o3, k2 = [], h3), M2), o3, M2, h3, l3, a3 ? k2 : M2);
                        break;
                      default:
                        e12(P2, C2, C2, C2, [""], M2, 0, l3, M2);
                    }
                }
            }
            d3 = f3 = m2 = 0, b2 = y2 = 1, w2 = P2 = "", h3 = s3;
            break;
          case 58:
            h3 = 1 + rS(P2), m2 = g2;
          default:
            if (b2 < 1) {
              if (123 == x2)
                --b2;
              else if (125 == x2 && 0 == b2++ && 125 == (rA = r$ > 0 ? rP(rI, --r$) : 0, rT--, 10 === rA && (rT = 1, rD--), rA))
                continue;
            }
            switch (P2 += rw(x2), x2 * b2) {
              case 38:
                y2 = f3 > 0 ? 1 : (P2 += "\f", -1);
                break;
              case 44:
                l3[d3++] = (rS(P2) - 1) * y2, y2 = 1;
                break;
              case 64:
                45 === rj() && (P2 += rH(rF())), p2 = rj(), f3 = h3 = rS(w2 = P2 += function(e13) {
                  for (; !rV(rj()); )
                    rF();
                  return r_(rI, e13, r$);
                }(r$)), x2++;
                break;
              case 45:
                45 === g2 && 2 == rS(P2) && (b2 = 0);
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
  let c2 = null !== (l2 = C(r10) ? r10 : n3) && void 0 !== l2 ? l2 : r8, u2 = v(r10) ? r10 : {};
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
      let b2 = c2(e10, l3);
      return () => {
        if (t10.__styled) {
          let r13 = b2(t10);
          return r13 ? s(r13, { component: e10.component, class: m2() }) : null;
        }
        let r12 = b2(r3);
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
let no = e({ isOpen: L().optional(), style: A().optional(), contentRef: A().optional(), triggerRef: A().optional(), onClickOutside: A(), onEscKeydown: A(), onContentBeforeMount: A(), $transition: A().optional(), $default: A().optional() }, (e10, r10) => {
  var n3;
  let { slots: a2, attrs: i2, emit: l2 } = r10, m2 = e10.contentRef || o(null), g2 = new na(null !== (n3 = e10.triggerRef) && void 0 !== n3 ? n3 : o(null), m2, () => !!e10.isOpen), b2 = nr.use(), v2 = nn.use();
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
    let n5 = e10.isOpen ? s(t("div", { ...i2, ref: m2, style: e10.style, children: t(nn, { value: g2, children: null === (r11 = a2.default) || void 0 === r11 ? void 0 : r11.call(a2) }) }), { onVnodeBeforeMount: () => {
      l2("content-before-mount");
    } }) : null;
    return t(f, { to: b2.mountPoint(), children: a2.transition ? a2.transition({ content: n5 }) : n5 });
  };
}, { inheritAttrs: false, name: "Overlay" }), ni = Object.assign(no, { displayName: "Overlay" });
var ns = "bottom", nl = "right", nc = "left", nu = "auto", nd = ["top", ns, nl, nc], nf = "start", nh = "viewport", np = "popper", nm = nd.reduce(function(e10, t10) {
  return e10.concat([t10 + "-" + nf, t10 + "-end"]);
}, []), ng = [].concat(nd, [nu]).reduce(function(e10, t10) {
  return e10.concat([t10, t10 + "-" + nf, t10 + "-end"]);
}, []), nb = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
function nv(e10) {
  return e10 ? (e10.nodeName || "").toLowerCase() : null;
}
function ny(e10) {
  if (null == e10)
    return window;
  if ("[object Window]" !== e10.toString()) {
    var t10 = e10.ownerDocument;
    return t10 && t10.defaultView || window;
  }
  return e10;
}
function nx(e10) {
  var t10 = ny(e10).Element;
  return e10 instanceof t10 || e10 instanceof Element;
}
function nw(e10) {
  var t10 = ny(e10).HTMLElement;
  return e10 instanceof t10 || e10 instanceof HTMLElement;
}
function nk(e10) {
  if ("undefined" == typeof ShadowRoot)
    return false;
  var t10 = ny(e10).ShadowRoot;
  return e10 instanceof t10 || e10 instanceof ShadowRoot;
}
function nM(e10) {
  return e10.split("-")[0];
}
var nC = Math.max, nP = Math.min, n_ = Math.round;
function nS() {
  var e10 = navigator.userAgentData;
  return null != e10 && e10.brands && Array.isArray(e10.brands) ? e10.brands.map(function(e11) {
    return e11.brand + "/" + e11.version;
  }).join(" ") : navigator.userAgent;
}
function nO() {
  return !/^((?!chrome|android).)*safari/i.test(nS());
}
function nD(e10, t10, r10) {
  void 0 === t10 && (t10 = false), void 0 === r10 && (r10 = false);
  var n3 = e10.getBoundingClientRect(), a2 = 1, o2 = 1;
  t10 && nw(e10) && (a2 = e10.offsetWidth > 0 && n_(n3.width) / e10.offsetWidth || 1, o2 = e10.offsetHeight > 0 && n_(n3.height) / e10.offsetHeight || 1);
  var i2 = (nx(e10) ? ny(e10) : window).visualViewport, s2 = !nO() && r10, l2 = (n3.left + (s2 && i2 ? i2.offsetLeft : 0)) / a2, c2 = (n3.top + (s2 && i2 ? i2.offsetTop : 0)) / o2, u2 = n3.width / a2, d2 = n3.height / o2;
  return { width: u2, height: d2, top: c2, right: l2 + u2, bottom: c2 + d2, left: l2, x: l2, y: c2 };
}
function nT(e10) {
  return ny(e10).getComputedStyle(e10);
}
function nR(e10) {
  return ((nx(e10) ? e10.ownerDocument : e10.document) || window.document).documentElement;
}
function n$(e10) {
  return "html" === nv(e10) ? e10 : e10.assignedSlot || e10.parentNode || (nk(e10) ? e10.host : null) || nR(e10);
}
function nA(e10) {
  return nw(e10) && "fixed" !== nT(e10).position ? e10.offsetParent : null;
}
function nI(e10) {
  for (var t10 = ny(e10), r10 = nA(e10); r10 && ["table", "td", "th"].indexOf(nv(r10)) >= 0 && "static" === nT(r10).position; )
    r10 = nA(r10);
  return r10 && ("html" === nv(r10) || "body" === nv(r10) && "static" === nT(r10).position) ? t10 : r10 || function(e11) {
    var t11 = /firefox/i.test(nS());
    if (/Trident/i.test(nS()) && nw(e11) && "fixed" === nT(e11).position)
      return null;
    var r11 = n$(e11);
    for (nk(r11) && (r11 = r11.host); nw(r11) && 0 > ["html", "body"].indexOf(nv(r11)); ) {
      var n3 = nT(r11);
      if ("none" !== n3.transform || "none" !== n3.perspective || "paint" === n3.contain || -1 !== ["transform", "perspective"].indexOf(n3.willChange) || t11 && "filter" === n3.willChange || t11 && n3.filter && "none" !== n3.filter)
        return r11;
      r11 = r11.parentNode;
    }
    return null;
  }(e10) || t10;
}
function nL(e10) {
  return e10.split("-")[1];
}
var nB = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function nF(e10) {
  var t10, r10, n3, a2, o2, i2, s2, l2 = e10.popper, c2 = e10.popperRect, u2 = e10.placement, d2 = e10.variation, f2 = e10.offsets, h2 = e10.position, p2 = e10.gpuAcceleration, m2 = e10.adaptive, g2 = e10.roundOffsets, b2 = e10.isFixed, v2 = f2.x, y2 = void 0 === v2 ? 0 : v2, x2 = f2.y, w2 = void 0 === x2 ? 0 : x2, k2 = "function" == typeof g2 ? g2({ x: y2, y: w2 }) : { x: y2, y: w2 };
  y2 = k2.x, w2 = k2.y;
  var M2 = f2.hasOwnProperty("x"), C2 = f2.hasOwnProperty("y"), P2 = nc, _2 = "top", S2 = window;
  if (m2) {
    var O2 = nI(l2), D2 = "clientHeight", T2 = "clientWidth";
    O2 === ny(l2) && "static" !== nT(O2 = nR(l2)).position && "absolute" === h2 && (D2 = "scrollHeight", T2 = "scrollWidth"), ("top" === u2 || (u2 === nc || u2 === nl) && "end" === d2) && (_2 = ns, w2 -= (b2 && O2 === S2 && S2.visualViewport ? S2.visualViewport.height : O2[D2]) - c2.height, w2 *= p2 ? 1 : -1), (u2 === nc || ("top" === u2 || u2 === ns) && "end" === d2) && (P2 = nl, y2 -= (b2 && O2 === S2 && S2.visualViewport ? S2.visualViewport.width : O2[T2]) - c2.width, y2 *= p2 ? 1 : -1);
  }
  var R2 = Object.assign({ position: h2 }, m2 && nB), $2 = true === g2 ? (t10 = { x: y2, y: w2 }, r10 = ny(l2), n3 = t10.x, a2 = t10.y, { x: n_(n3 * (o2 = r10.devicePixelRatio || 1)) / o2 || 0, y: n_(a2 * o2) / o2 || 0 }) : { x: y2, y: w2 };
  return (y2 = $2.x, w2 = $2.y, p2) ? Object.assign({}, R2, ((s2 = {})[_2] = C2 ? "0" : "", s2[P2] = M2 ? "0" : "", s2.transform = 1 >= (S2.devicePixelRatio || 1) ? "translate(" + y2 + "px, " + w2 + "px)" : "translate3d(" + y2 + "px, " + w2 + "px, 0)", s2)) : Object.assign({}, R2, ((i2 = {})[_2] = C2 ? w2 + "px" : "", i2[P2] = M2 ? y2 + "px" : "", i2.transform = "", i2));
}
var nj = { passive: true }, nV = { left: "right", right: "left", bottom: "top", top: "bottom" };
function nE(e10) {
  return e10.replace(/left|right|bottom|top/g, function(e11) {
    return nV[e11];
  });
}
var nH = { start: "end", end: "start" };
function nz(e10) {
  return e10.replace(/start|end/g, function(e11) {
    return nH[e11];
  });
}
function nW(e10) {
  var t10 = ny(e10);
  return { scrollLeft: t10.pageXOffset, scrollTop: t10.pageYOffset };
}
function nN(e10) {
  return nD(nR(e10)).left + nW(e10).scrollLeft;
}
function nq(e10) {
  var t10 = nT(e10), r10 = t10.overflow, n3 = t10.overflowX, a2 = t10.overflowY;
  return /auto|scroll|overlay|hidden/.test(r10 + a2 + n3);
}
function nU(e10, t10) {
  void 0 === t10 && (t10 = []);
  var r10, n3 = function e11(t11) {
    return ["html", "body", "#document"].indexOf(nv(t11)) >= 0 ? t11.ownerDocument.body : nw(t11) && nq(t11) ? t11 : e11(n$(t11));
  }(e10), a2 = n3 === (null == (r10 = e10.ownerDocument) ? void 0 : r10.body), o2 = ny(n3), i2 = a2 ? [o2].concat(o2.visualViewport || [], nq(n3) ? n3 : []) : n3, s2 = t10.concat(i2);
  return a2 ? s2 : s2.concat(nU(n$(i2)));
}
function nG(e10) {
  return Object.assign({}, e10, { left: e10.x, top: e10.y, right: e10.x + e10.width, bottom: e10.y + e10.height });
}
function nY(e10, t10, r10) {
  var n3, a2, o2, i2, s2, l2, c2, u2, d2, f2;
  return t10 === nh ? nG(function(e11, t11) {
    var r11 = ny(e11), n5 = nR(e11), a3 = r11.visualViewport, o3 = n5.clientWidth, i3 = n5.clientHeight, s3 = 0, l3 = 0;
    if (a3) {
      o3 = a3.width, i3 = a3.height;
      var c3 = nO();
      (c3 || !c3 && "fixed" === t11) && (s3 = a3.offsetLeft, l3 = a3.offsetTop);
    }
    return { width: o3, height: i3, x: s3 + nN(e11), y: l3 };
  }(e10, r10)) : nx(t10) ? ((n3 = nD(t10, false, "fixed" === r10)).top = n3.top + t10.clientTop, n3.left = n3.left + t10.clientLeft, n3.bottom = n3.top + t10.clientHeight, n3.right = n3.left + t10.clientWidth, n3.width = t10.clientWidth, n3.height = t10.clientHeight, n3.x = n3.left, n3.y = n3.top, n3) : nG((a2 = nR(e10), i2 = nR(a2), s2 = nW(a2), l2 = null == (o2 = a2.ownerDocument) ? void 0 : o2.body, c2 = nC(i2.scrollWidth, i2.clientWidth, l2 ? l2.scrollWidth : 0, l2 ? l2.clientWidth : 0), u2 = nC(i2.scrollHeight, i2.clientHeight, l2 ? l2.scrollHeight : 0, l2 ? l2.clientHeight : 0), d2 = -s2.scrollLeft + nN(a2), f2 = -s2.scrollTop, "rtl" === nT(l2 || i2).direction && (d2 += nC(i2.clientWidth, l2 ? l2.clientWidth : 0) - c2), { width: c2, height: u2, x: d2, y: f2 }));
}
function nX(e10) {
  var t10, r10 = e10.reference, n3 = e10.element, a2 = e10.placement, o2 = a2 ? nM(a2) : null, i2 = a2 ? nL(a2) : null, s2 = r10.x + r10.width / 2 - n3.width / 2, l2 = r10.y + r10.height / 2 - n3.height / 2;
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
function nK(e10, t10) {
  void 0 === t10 && (t10 = {});
  var r10, n3, a2, o2, i2, s2, l2, c2 = t10, u2 = c2.placement, d2 = void 0 === u2 ? e10.placement : u2, f2 = c2.strategy, h2 = void 0 === f2 ? e10.strategy : f2, p2 = c2.boundary, m2 = c2.rootBoundary, g2 = c2.elementContext, b2 = void 0 === g2 ? np : g2, v2 = c2.altBoundary, y2 = c2.padding, x2 = void 0 === y2 ? 0 : y2, w2 = Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, "number" != typeof x2 ? x2 : nd.reduce(function(e11, t11) {
    return e11[t11] = x2, e11;
  }, {})), k2 = e10.rects.popper, M2 = e10.elements[void 0 !== v2 && v2 ? b2 === np ? "reference" : np : b2], C2 = (r10 = nx(M2) ? M2 : M2.contextElement || nR(e10.elements.popper), s2 = (i2 = [].concat("clippingParents" === (n3 = void 0 === p2 ? "clippingParents" : p2) ? (a2 = nU(n$(r10)), nx(o2 = ["absolute", "fixed"].indexOf(nT(r10).position) >= 0 && nw(r10) ? nI(r10) : r10) ? a2.filter(function(e11) {
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
    }(e11, o2) && "body" !== nv(e11);
  }) : []) : [].concat(n3), [void 0 === m2 ? nh : m2]))[0], (l2 = i2.reduce(function(e11, t11) {
    var n5 = nY(r10, t11, h2);
    return e11.top = nC(n5.top, e11.top), e11.right = nP(n5.right, e11.right), e11.bottom = nP(n5.bottom, e11.bottom), e11.left = nC(n5.left, e11.left), e11;
  }, nY(r10, s2, h2))).width = l2.right - l2.left, l2.height = l2.bottom - l2.top, l2.x = l2.left, l2.y = l2.top, l2), P2 = nD(e10.elements.reference), _2 = nX({ reference: P2, element: k2, strategy: "absolute", placement: d2 }), S2 = nG(Object.assign({}, k2, _2)), O2 = b2 === np ? S2 : P2, D2 = { top: C2.top - O2.top + w2.top, bottom: O2.bottom - C2.bottom + w2.bottom, left: C2.left - O2.left + w2.left, right: O2.right - C2.right + w2.right }, T2 = e10.modifiersData.offset;
  if (b2 === np && T2) {
    var R2 = T2[d2];
    Object.keys(D2).forEach(function(e11) {
      var t11 = [nl, ns].indexOf(e11) >= 0 ? 1 : -1, r11 = ["top", ns].indexOf(e11) >= 0 ? "y" : "x";
      D2[e11] += R2[r11] * t11;
    });
  }
  return D2;
}
let nJ = { name: "flip", enabled: true, phase: "main", fn: function(e10) {
  var t10 = e10.state, r10 = e10.options, n3 = e10.name;
  if (!t10.modifiersData[n3]._skip) {
    for (var a2 = r10.mainAxis, o2 = void 0 === a2 || a2, i2 = r10.altAxis, s2 = void 0 === i2 || i2, l2 = r10.fallbackPlacements, c2 = r10.padding, u2 = r10.boundary, d2 = r10.rootBoundary, f2 = r10.altBoundary, h2 = r10.flipVariations, p2 = void 0 === h2 || h2, m2 = r10.allowedAutoPlacements, g2 = t10.options.placement, b2 = nM(g2) === g2, v2 = l2 || (b2 || !p2 ? [nE(g2)] : function(e11) {
      if (nM(e11) === nu)
        return [];
      var t11 = nE(e11);
      return [nz(e11), t11, nz(t11)];
    }(g2)), y2 = [g2].concat(v2).reduce(function(e11, r11) {
      var n5, a3, o3, i3, s3, l3, f3, h3, g3, b3, v3, y3;
      return e11.concat(nM(r11) === nu ? (a3 = (n5 = { placement: r11, boundary: u2, rootBoundary: d2, padding: c2, flipVariations: p2, allowedAutoPlacements: m2 }).placement, o3 = n5.boundary, i3 = n5.rootBoundary, s3 = n5.padding, l3 = n5.flipVariations, h3 = void 0 === (f3 = n5.allowedAutoPlacements) ? ng : f3, 0 === (v3 = (b3 = (g3 = nL(a3)) ? l3 ? nm : nm.filter(function(e12) {
        return nL(e12) === g3;
      }) : nd).filter(function(e12) {
        return h3.indexOf(e12) >= 0;
      })).length && (v3 = b3), Object.keys(y3 = v3.reduce(function(e12, r12) {
        return e12[r12] = nK(t10, { placement: r12, boundary: o3, rootBoundary: i3, padding: s3 })[nM(r12)], e12;
      }, {})).sort(function(e12, t11) {
        return y3[e12] - y3[t11];
      })) : r11);
    }, []), x2 = t10.rects.reference, w2 = t10.rects.popper, k2 = /* @__PURE__ */ new Map(), M2 = true, C2 = y2[0], P2 = 0; P2 < y2.length; P2++) {
      var _2 = y2[P2], S2 = nM(_2), O2 = nL(_2) === nf, D2 = ["top", ns].indexOf(S2) >= 0, T2 = D2 ? "width" : "height", R2 = nK(t10, { placement: _2, boundary: u2, rootBoundary: d2, altBoundary: f2, padding: c2 }), $2 = D2 ? O2 ? nl : nc : O2 ? ns : "top";
      x2[T2] > w2[T2] && ($2 = nE($2));
      var A2 = nE($2), I2 = [];
      if (o2 && I2.push(R2[S2] <= 0), s2 && I2.push(R2[$2] <= 0, R2[A2] <= 0), I2.every(function(e11) {
        return e11;
      })) {
        C2 = _2, M2 = false;
        break;
      }
      k2.set(_2, I2);
    }
    if (M2)
      for (var L2 = p2 ? 3 : 1, B2 = function(e11) {
        var t11 = y2.find(function(t12) {
          var r11 = k2.get(t12);
          if (r11)
            return r11.slice(0, e11).every(function(e12) {
              return e12;
            });
        });
        if (t11)
          return C2 = t11, "break";
      }, F2 = L2; F2 > 0 && "break" !== B2(F2); F2--)
        ;
    t10.placement !== C2 && (t10.modifiersData[n3]._skip = true, t10.placement = C2, t10.reset = true);
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
      }), nb.reduce(function(e12, t12) {
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
        var e12, t12, r12, n5, a4, o3, s3, u3, d2, f2, h2, p2, m2, g2, b2, v2 = i2.elements, y2 = v2.reference, x2 = v2.popper;
        if (nQ(y2, x2)) {
          i2.rects = { reference: (t12 = nI(x2), r12 = "fixed" === i2.options.strategy, n5 = nw(t12), u3 = nw(t12) && (o3 = n_((a4 = t12.getBoundingClientRect()).width) / t12.offsetWidth || 1, s3 = n_(a4.height) / t12.offsetHeight || 1, 1 !== o3 || 1 !== s3), d2 = nR(t12), f2 = nD(y2, u3, r12), h2 = { scrollLeft: 0, scrollTop: 0 }, p2 = { x: 0, y: 0 }, (n5 || !n5 && !r12) && (("body" !== nv(t12) || nq(d2)) && (h2 = (e12 = t12) !== ny(e12) && nw(e12) ? { scrollLeft: e12.scrollLeft, scrollTop: e12.scrollTop } : nW(e12)), nw(t12) ? (p2 = nD(t12, true), p2.x += t12.clientLeft, p2.y += t12.clientTop) : d2 && (p2.x = nN(d2))), { x: f2.left + h2.scrollLeft - p2.x, y: f2.top + h2.scrollTop - p2.y, width: f2.width, height: f2.height }), popper: (m2 = nD(x2), g2 = x2.offsetWidth, b2 = x2.offsetHeight, 1 >= Math.abs(m2.width - g2) && (g2 = m2.width), 1 >= Math.abs(m2.height - b2) && (b2 = m2.height), { x: x2.offsetLeft, y: x2.offsetTop, width: g2, height: b2 }) }, i2.reset = false, i2.placement = i2.options.placement, i2.orderedModifiers.forEach(function(e13) {
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
  var t10 = e10.state, r10 = e10.instance, n3 = e10.options, a2 = n3.scroll, o2 = void 0 === a2 || a2, i2 = n3.resize, s2 = void 0 === i2 || i2, l2 = ny(t10.elements.popper), c2 = [].concat(t10.scrollParents.reference, t10.scrollParents.popper);
  return o2 && c2.forEach(function(e11) {
    e11.addEventListener("scroll", r10.update, nj);
  }), s2 && l2.addEventListener("resize", r10.update, nj), function() {
    o2 && c2.forEach(function(e11) {
      e11.removeEventListener("scroll", r10.update, nj);
    }), s2 && l2.removeEventListener("resize", r10.update, nj);
  };
}, data: {} }, { name: "popperOffsets", enabled: true, phase: "read", fn: function(e10) {
  var t10 = e10.state, r10 = e10.name;
  t10.modifiersData[r10] = nX({ reference: t10.rects.reference, element: t10.rects.popper, strategy: "absolute", placement: t10.placement });
}, data: {} }, { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: function(e10) {
  var t10 = e10.state, r10 = e10.options, n3 = r10.gpuAcceleration, a2 = r10.adaptive, o2 = r10.roundOffsets, i2 = void 0 === o2 || o2, s2 = { placement: nM(t10.placement), variation: nL(t10.placement), popper: t10.elements.popper, popperRect: t10.rects.popper, gpuAcceleration: void 0 === n3 || n3, isFixed: "fixed" === t10.options.strategy };
  null != t10.modifiersData.popperOffsets && (t10.styles.popper = Object.assign({}, t10.styles.popper, nF(Object.assign({}, s2, { offsets: t10.modifiersData.popperOffsets, position: t10.options.strategy, adaptive: void 0 === a2 || a2, roundOffsets: i2 })))), null != t10.modifiersData.arrow && (t10.styles.arrow = Object.assign({}, t10.styles.arrow, nF(Object.assign({}, s2, { offsets: t10.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: i2 })))), t10.attributes.popper = Object.assign({}, t10.attributes.popper, { "data-popper-placement": t10.placement });
}, data: {} }, { name: "applyStyles", enabled: true, phase: "write", fn: function(e10) {
  var t10 = e10.state;
  Object.keys(t10.elements).forEach(function(e11) {
    var r10 = t10.styles[e11] || {}, n3 = t10.attributes[e11] || {}, a2 = t10.elements[e11];
    nw(a2) && nv(a2) && (Object.assign(a2.style, r10), Object.keys(n3).forEach(function(e12) {
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
      nw(n3) && nv(n3) && (Object.assign(n3.style, o2), Object.keys(a2).forEach(function(e12) {
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
      n0(l2.value, t10, { placement: null !== (r11 = e10.placement) && void 0 !== r11 ? r11 : "bottom", modifiers: [...null !== (n5 = e10.modifiers) && void 0 !== n5 ? n5 : [], nJ] });
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
  rr as b,
  n1 as c,
  ro as d,
  r6 as s,
  ra as t,
  tm as v
};
