var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
let e;
import { c as t, j as r, T as n, d as a, o as i, e as o, i as s, f as l, r as c, g as u, a as d, u as f, h, k as p, t as m, l as g, s as v, m as b, w as y, b as x, F as w } from "./lib-nodepkg-vuekit.CR9yO1ry.chunk.js";
import { c as k } from "./lib-nodepkg-typedef.Czd731t_.chunk.js";
import { k as M, g as C, b as P, l as _, s as S, e as O, f as D, h as R, j as $, i as T, o as A, m as I, n as L, q as F, a as B, c as j, r as V, t as E, u as H } from "./vendor-innoai-tech-lodash.BQbaWOEd.chunk.js";
import { _ as z } from "./vendor-rxjs.NbiRBTYy.chunk.js";
var W, N, q, U, G, Y, X, K, J, Z, Q, ee = function() {
};
let et = (e10, t10, r10) => Math.min(Math.max(r10, e10), t10);
function er(e10, t10) {
  return e10 * Math.sqrt(1 - t10 * t10);
}
let en = ["duration", "bounce"], ea = ["stiffness", "damping", "mass"];
function ei(e10, t10) {
  return t10.some((t11) => void 0 !== e10[t11]);
}
function eo(e10) {
  var { from: t10 = 0, to: r10 = 1, restSpeed: n6 = 2, restDelta: a2 } = e10, i2 = z(e10, ["from", "to", "restSpeed", "restDelta"]);
  let o2 = { done: false, value: t10 }, { stiffness: s2, damping: l2, mass: c2, velocity: u2, duration: d2, isResolvedFromDuration: f2 } = function(e11) {
    let t11 = Object.assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: false }, e11);
    if (!ei(e11, ea) && ei(e11, en)) {
      let r11 = function(e12) {
        let t12, r12, { duration: n7 = 800, bounce: a3 = 0.25, velocity: i3 = 0, mass: o3 = 1 } = e12, s3 = 1 - a3;
        s3 = et(0.05, 1, s3), n7 = et(0.01, 10, n7 / 1e3), s3 < 1 ? (t12 = (e13) => {
          let t13 = e13 * s3, r13 = t13 * n7;
          return 1e-3 - (t13 - i3) / er(e13, s3) * Math.exp(-r13);
        }, r12 = (e13) => {
          let r13 = e13 * s3 * n7, a4 = Math.pow(s3, 2) * Math.pow(e13, 2) * n7, o4 = Math.exp(-r13), l4 = er(Math.pow(e13, 2), s3);
          return (r13 * i3 + i3 - a4) * o4 * (-t12(e13) + 1e-3 > 0 ? -1 : 1) / l4;
        }) : (t12 = (e13) => -1e-3 + Math.exp(-e13 * n7) * ((e13 - i3) * n7 + 1), r12 = (e13) => n7 * n7 * (i3 - e13) * Math.exp(-e13 * n7));
        let l3 = function(e13, t13, r13) {
          let n9 = r13;
          for (let r14 = 1; r14 < 12; r14++) n9 -= e13(n9) / t13(n9);
          return n9;
        }(t12, r12, 5 / n7);
        if (n7 *= 1e3, isNaN(l3)) return { stiffness: 100, damping: 10, duration: n7 };
        {
          let e13 = Math.pow(l3, 2) * o3;
          return { stiffness: e13, damping: 2 * s3 * Math.sqrt(o3 * e13), duration: n7 };
        }
      }(e11);
      (t11 = Object.assign(Object.assign(Object.assign({}, t11), r11), { velocity: 0, mass: 1 })).isResolvedFromDuration = true;
    }
    return t11;
  }(i2), h2 = es, p2 = es;
  function m2() {
    let e11 = u2 ? -(u2 / 1e3) : 0, n7 = r10 - t10, i3 = l2 / (2 * Math.sqrt(s2 * c2)), o3 = Math.sqrt(s2 / c2) / 1e3;
    if (void 0 === a2 && (a2 = Math.min(Math.abs(r10 - t10) / 100, 0.4)), i3 < 1) {
      let t11 = er(o3, i3);
      h2 = (a3) => r10 - Math.exp(-i3 * o3 * a3) * ((e11 + i3 * o3 * n7) / t11 * Math.sin(t11 * a3) + n7 * Math.cos(t11 * a3)), p2 = (r11) => {
        let a3 = Math.exp(-i3 * o3 * r11);
        return i3 * o3 * a3 * (Math.sin(t11 * r11) * (e11 + i3 * o3 * n7) / t11 + n7 * Math.cos(t11 * r11)) - a3 * (Math.cos(t11 * r11) * (e11 + i3 * o3 * n7) - t11 * n7 * Math.sin(t11 * r11));
      };
    } else if (1 === i3) h2 = (t11) => r10 - Math.exp(-o3 * t11) * (n7 + (e11 + o3 * n7) * t11);
    else {
      let t11 = o3 * Math.sqrt(i3 * i3 - 1);
      h2 = (a3) => {
        let s3 = Math.exp(-i3 * o3 * a3), l3 = Math.min(t11 * a3, 300);
        return r10 - s3 * ((e11 + i3 * o3 * n7) * Math.sinh(l3) + t11 * n7 * Math.cosh(l3)) / t11;
      };
    }
  }
  return m2(), { next: (e11) => {
    let t11 = h2(e11);
    if (f2) o2.done = e11 >= d2;
    else {
      let i3 = Math.abs(1e3 * p2(e11)) <= n6, s3 = Math.abs(r10 - t11) <= a2;
      o2.done = i3 && s3;
    }
    return o2.value = o2.done ? r10 : t11, o2;
  }, flipTarget: () => {
    u2 = -u2, [t10, r10] = [r10, t10], m2();
  } };
}
eo.needsInterpolation = (e10, t10) => "string" == typeof e10 || "string" == typeof t10;
let es = (e10) => 0, el = (e10, t10, r10) => {
  let n6 = t10 - e10;
  return 0 === n6 ? 1 : (r10 - e10) / n6;
}, ec = (e10, t10, r10) => -r10 * e10 + r10 * t10 + e10, eu = (e10, t10) => (r10) => Math.max(Math.min(r10, t10), e10), ed = (e10) => e10 % 1 ? Number(e10.toFixed(5)) : e10, ef = /(-)?([\d]*\.?[\d])+/g, eh = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, ep = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function em(e10) {
  return "string" == typeof e10;
}
let eg = { test: (e10) => "number" == typeof e10, parse: parseFloat, transform: (e10) => e10 }, ev = Object.assign(Object.assign({}, eg), { transform: eu(0, 1) });
Object.assign(Object.assign({}, eg), { default: 1 });
let eb = { test: (e10) => em(e10) && e10.endsWith("%") && 1 === e10.split(" ").length, parse: parseFloat, transform: (e10) => `${e10}%` };
Object.assign(Object.assign({}, eb), { parse: (e10) => eb.parse(e10) / 100, transform: (e10) => eb.transform(100 * e10) });
let ey = (e10, t10) => (r10) => !!(em(r10) && ep.test(r10) && r10.startsWith(e10) || t10 && Object.prototype.hasOwnProperty.call(r10, t10)), ex = (e10, t10, r10) => (n6) => {
  if (!em(n6)) return n6;
  let [a2, i2, o2, s2] = n6.match(ef);
  return { [e10]: parseFloat(a2), [t10]: parseFloat(i2), [r10]: parseFloat(o2), alpha: void 0 !== s2 ? parseFloat(s2) : 1 };
}, ew = { test: ey("hsl", "hue"), parse: ex("hue", "saturation", "lightness"), transform: (e10) => {
  let { hue: t10, saturation: r10, lightness: n6, alpha: a2 = 1 } = e10;
  return "hsla(" + Math.round(t10) + ", " + eb.transform(ed(r10)) + ", " + eb.transform(ed(n6)) + ", " + ed(ev.transform(a2)) + ")";
} }, ek = eu(0, 255), eM = Object.assign(Object.assign({}, eg), { transform: (e10) => Math.round(ek(e10)) }), eC = { test: ey("rgb", "red"), parse: ex("red", "green", "blue"), transform: (e10) => {
  let { red: t10, green: r10, blue: n6, alpha: a2 = 1 } = e10;
  return "rgba(" + eM.transform(t10) + ", " + eM.transform(r10) + ", " + eM.transform(n6) + ", " + ed(ev.transform(a2)) + ")";
} }, eP = { test: ey("#"), parse: function(e10) {
  let t10 = "", r10 = "", n6 = "", a2 = "";
  return e10.length > 5 ? (t10 = e10.substr(1, 2), r10 = e10.substr(3, 2), n6 = e10.substr(5, 2), a2 = e10.substr(7, 2)) : (t10 = e10.substr(1, 1), r10 = e10.substr(2, 1), n6 = e10.substr(3, 1), a2 = e10.substr(4, 1), t10 += t10, r10 += r10, n6 += n6, a2 += a2), { red: parseInt(t10, 16), green: parseInt(r10, 16), blue: parseInt(n6, 16), alpha: a2 ? parseInt(a2, 16) / 255 : 1 };
}, transform: eC.transform }, e_ = { test: (e10) => eC.test(e10) || eP.test(e10) || ew.test(e10), parse: (e10) => eC.test(e10) ? eC.parse(e10) : ew.test(e10) ? ew.parse(e10) : eP.parse(e10), transform: (e10) => em(e10) ? e10 : e10.hasOwnProperty("red") ? eC.transform(e10) : ew.transform(e10) }, eS = "${c}", eO = "${n}";
function eD(e10) {
  "number" == typeof e10 && (e10 = `${e10}`);
  let t10 = [], r10 = 0, n6 = e10.match(eh);
  n6 && (r10 = n6.length, e10 = e10.replace(eh, eS), t10.push(...n6.map(e_.parse)));
  let a2 = e10.match(ef);
  return a2 && (e10 = e10.replace(ef, eO), t10.push(...a2.map(eg.parse))), { values: t10, numColors: r10, tokenised: e10 };
}
let eR = function(e10) {
  let { values: t10, numColors: r10, tokenised: n6 } = eD(e10), a2 = t10.length;
  return (e11) => {
    let t11 = n6;
    for (let n7 = 0; n7 < a2; n7++) t11 = t11.replace(n7 < r10 ? eS : eO, n7 < r10 ? e_.transform(e11[n7]) : ed(e11[n7]));
    return t11;
  };
};
function e$(e10, t10, r10) {
  return (r10 < 0 && (r10 += 1), r10 > 1 && (r10 -= 1), r10 < 1 / 6) ? e10 + (t10 - e10) * 6 * r10 : r10 < 0.5 ? t10 : r10 < 2 / 3 ? e10 + (t10 - e10) * (2 / 3 - r10) * 6 : e10;
}
function eT(e10) {
  let { hue: t10, saturation: r10, lightness: n6, alpha: a2 } = e10;
  t10 /= 360, n6 /= 100;
  let i2 = 0, o2 = 0, s2 = 0;
  if (r10 /= 100) {
    let e11 = n6 < 0.5 ? n6 * (1 + r10) : n6 + r10 - n6 * r10, a3 = 2 * n6 - e11;
    i2 = e$(a3, e11, t10 + 1 / 3), o2 = e$(a3, e11, t10), s2 = e$(a3, e11, t10 - 1 / 3);
  } else i2 = o2 = s2 = n6;
  return { red: Math.round(255 * i2), green: Math.round(255 * o2), blue: Math.round(255 * s2), alpha: a2 };
}
let eA = (e10, t10, r10) => {
  let n6 = e10 * e10;
  return Math.sqrt(Math.max(0, r10 * (t10 * t10 - n6) + n6));
}, eI = [eP, eC, ew], eL = (e10) => eI.find((t10) => t10.test(e10)), eF = (e10, t10) => {
  let r10 = eL(e10), n6 = eL(t10), a2 = r10.parse(e10), i2 = n6.parse(t10);
  r10 === ew && (a2 = eT(a2), r10 = eC), n6 === ew && (i2 = eT(i2), n6 = eC);
  let o2 = Object.assign({}, a2);
  return (e11) => {
    for (let t11 in o2) "alpha" !== t11 && (o2[t11] = eA(a2[t11], i2[t11], e11));
    return o2.alpha = ec(a2.alpha, i2.alpha, e11), r10.transform(o2);
  };
}, eB = (e10) => "number" == typeof e10, ej = (e10, t10) => (r10) => t10(e10(r10)), eV = function() {
  for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++) t10[r10] = arguments[r10];
  return t10.reduce(ej);
};
function eE(e10, t10) {
  return eB(e10) ? (r10) => ec(e10, t10, r10) : e_.test(e10) ? eF(e10, t10) : eN(e10, t10);
}
let eH = (e10, t10) => {
  let r10 = [...e10], n6 = r10.length, a2 = e10.map((e11, r11) => eE(e11, t10[r11]));
  return (e11) => {
    for (let t11 = 0; t11 < n6; t11++) r10[t11] = a2[t11](e11);
    return r10;
  };
}, ez = (e10, t10) => {
  let r10 = Object.assign(Object.assign({}, e10), t10), n6 = {};
  for (let a2 in r10) void 0 !== e10[a2] && void 0 !== t10[a2] && (n6[a2] = eE(e10[a2], t10[a2]));
  return (e11) => {
    for (let t11 in n6) r10[t11] = n6[t11](e11);
    return r10;
  };
};
function eW(e10) {
  let t10 = eD(e10).values, r10 = t10.length, n6 = 0, a2 = 0, i2 = 0;
  for (let e11 = 0; e11 < r10; e11++) n6 || "number" == typeof t10[e11] ? n6++ : void 0 !== t10[e11].hue ? i2++ : a2++;
  return { parsed: t10, numNumbers: n6, numRGB: a2, numHSL: i2 };
}
let eN = (e10, t10) => {
  let r10 = eR(t10), n6 = eW(e10), a2 = eW(t10);
  return n6.numHSL === a2.numHSL && n6.numRGB === a2.numRGB && n6.numNumbers >= a2.numNumbers ? eV(eH(n6.parsed, a2.parsed), r10) : (r11) => `${r11 > 0 ? t10 : e10}`;
}, eq = (e10, t10) => (r10) => ec(e10, t10, r10);
function eU(e10, t10) {
  let { clamp: r10 = true, ease: n6, mixer: a2 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i2 = e10.length;
  ee(i2 === t10.length), ee(!n6 || !Array.isArray(n6) || n6.length === i2 - 1), e10[0] > e10[i2 - 1] && (e10 = [].concat(e10), t10 = [].concat(t10), e10.reverse(), t10.reverse());
  let o2 = function(e11, t11, r11) {
    var n7;
    let a3 = [], i3 = r11 || ("number" == typeof (n7 = e11[0]) ? eq : "string" == typeof n7 ? e_.test(n7) ? eF : eN : Array.isArray(n7) ? eH : "object" == typeof n7 ? ez : void 0), o3 = e11.length - 1;
    for (let r12 = 0; r12 < o3; r12++) {
      let n9 = i3(e11[r12], e11[r12 + 1]);
      t11 && (n9 = eV(Array.isArray(t11) ? t11[r12] : t11, n9)), a3.push(n9);
    }
    return a3;
  }(t10, n6, a2), s2 = 2 === i2 ? function(e11, t11) {
    let [r11, n7] = e11, [a3] = t11;
    return (e12) => a3(el(r11, n7, e12));
  }(e10, o2) : function(e11, t11) {
    let r11 = e11.length, n7 = r11 - 1;
    return (a3) => {
      let i3 = 0, o3 = false;
      if (a3 <= e11[0] ? o3 = true : a3 >= e11[n7] && (i3 = n7 - 1, o3 = true), !o3) {
        let t12 = 1;
        for (; t12 < r11 && !(e11[t12] > a3) && t12 !== n7; t12++) ;
        i3 = t12 - 1;
      }
      let s3 = el(e11[i3], e11[i3 + 1], a3);
      return t11[i3](s3);
    };
  }(e10, o2);
  return r10 ? (t11) => s2(et(e10[0], e10[i2 - 1], t11)) : s2;
}
let eG = (e10) => e10, eY = (e = (e10) => Math.pow(e10, 2), (t10) => t10 <= 0.5 ? e(2 * t10) / 2 : (2 - e(2 * (1 - t10))) / 2);
function eX(e10) {
  let { from: t10 = 0, to: r10 = 1, ease: n6, offset: a2, duration: i2 = 300 } = e10, o2 = { done: false, value: t10 }, s2 = Array.isArray(r10) ? r10 : [t10, r10], l2 = (a2 && a2.length === s2.length ? a2 : function(e11) {
    let t11 = e11.length;
    return e11.map((e12, r11) => 0 !== r11 ? r11 / (t11 - 1) : 0);
  }(s2)).map((e11) => e11 * i2);
  function c2() {
    return eU(l2, s2, { ease: Array.isArray(n6) ? n6 : s2.map(() => n6 || eY).splice(0, s2.length - 1) });
  }
  let u2 = c2();
  return { next: (e11) => (o2.value = u2(e11), o2.done = e11 >= i2, o2), flipTarget: () => {
    s2.reverse(), u2 = c2();
  } };
}
let eK = { keyframes: eX, spring: eo, decay: function(e10) {
  let { velocity: t10 = 0, from: r10 = 0, power: n6 = 0.8, timeConstant: a2 = 350, restDelta: i2 = 0.5, modifyTarget: o2 } = e10, s2 = { done: false, value: r10 }, l2 = n6 * t10, c2 = r10 + l2, u2 = void 0 === o2 ? c2 : o2(c2);
  return u2 !== c2 && (l2 = u2 - r10), { next: (e11) => {
    let t11 = -l2 * Math.exp(-e11 / a2);
    return s2.done = !(t11 > i2 || t11 < -i2), s2.value = s2.done ? u2 : u2 + t11, s2;
  }, flipTarget: () => {
  } };
} }, eJ = 1 / 60 * 1e3, eZ = "undefined" != typeof performance ? () => performance.now() : () => Date.now(), eQ = "undefined" != typeof window ? (e10) => window.requestAnimationFrame(e10) : (e10) => setTimeout(() => e10(eZ()), eJ), e0 = true, e1 = false, e2 = false, e4 = { delta: 0, timestamp: 0 }, e5 = ["read", "update", "preRender", "render", "postRender"], e3 = e5.reduce((e10, t10) => (e10[t10] = /* @__PURE__ */ function(e11) {
  let t11 = [], r10 = [], n6 = 0, a2 = false, i2 = false, o2 = /* @__PURE__ */ new WeakSet(), s2 = { schedule: function(e12) {
    let i3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], s3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], l2 = s3 && a2, c2 = l2 ? t11 : r10;
    return i3 && o2.add(e12), -1 === c2.indexOf(e12) && (c2.push(e12), l2 && a2 && (n6 = t11.length)), e12;
  }, cancel: (e12) => {
    let t12 = r10.indexOf(e12);
    -1 !== t12 && r10.splice(t12, 1), o2.delete(e12);
  }, process: (l2) => {
    if (a2) {
      i2 = true;
      return;
    }
    if (a2 = true, [t11, r10] = [r10, t11], r10.length = 0, n6 = t11.length) for (let r11 = 0; r11 < n6; r11++) {
      let n7 = t11[r11];
      n7(l2), o2.has(n7) && (s2.schedule(n7), e11());
    }
    a2 = false, i2 && (i2 = false, s2.process(l2));
  } };
  return s2;
}(() => e1 = true), e10), {}), e8 = e5.reduce((e10, t10) => {
  let r10 = e3[t10];
  return e10[t10] = function(e11) {
    let t11 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n6 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return e1 || te(), r10.schedule(e11, t11, n6);
  }, e10;
}, {}), e6 = e5.reduce((e10, t10) => (e10[t10] = e3[t10].cancel, e10), {});
e5.reduce((e10, t10) => (e10[t10] = () => e3[t10].process(e4), e10), {});
let e9 = (e10) => e3[e10].process(e4), e7 = (e10) => {
  e1 = false, e4.delta = e0 ? eJ : Math.max(Math.min(e10 - e4.timestamp, 40), 1), e4.timestamp = e10, e2 = true, e5.forEach(e9), e2 = false, e1 && (e0 = false, eQ(e7));
}, te = () => {
  e1 = true, e0 = true, e2 || eQ(e7);
};
function tt(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
  return e10 - t10 - r10;
}
let tr = (e10) => {
  let t10 = (t11) => {
    let { delta: r10 } = t11;
    return e10(r10);
  };
  return { start: () => e8.update(t10, true), stop: () => e6.update(t10) };
};
function tn(e10) {
  let t10, r10, n6;
  var a2, { from: i2, autoplay: o2 = true, driver: s2 = tr, elapsed: l2 = 0, repeat: c2 = 0, repeatType: u2 = "loop", repeatDelay: d2 = 0, onPlay: f2, onStop: h2, onComplete: p2, onRepeat: m2, onUpdate: g2 } = e10, v2 = z(e10, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
  let { to: b2 } = v2, y2 = 0, x2 = v2.duration, w2 = false, k2 = true, M2 = function(e11) {
    if (Array.isArray(e11.to)) return eX;
    if (eK[e11.type]) return eK[e11.type];
    let t11 = new Set(Object.keys(e11));
    if (t11.has("ease") || t11.has("duration") && !t11.has("dampingRatio")) ;
    else if (t11.has("dampingRatio") || t11.has("stiffness") || t11.has("mass") || t11.has("damping") || t11.has("restSpeed") || t11.has("restDelta")) return eo;
    return eX;
  }(v2);
  (null === (a2 = M2.needsInterpolation) || void 0 === a2 ? void 0 : a2.call(M2, i2, b2)) && (n6 = eU([0, 100], [i2, b2], { clamp: false }), i2 = 0, b2 = 100);
  let C2 = M2(Object.assign(Object.assign({}, v2), { from: i2, to: b2 }));
  return o2 && (null == f2 || f2(), (t10 = s2(function(e11) {
    if (k2 || (e11 = -e11), l2 += e11, !w2) {
      let e12 = C2.next(Math.max(0, l2));
      r10 = e12.value, n6 && (r10 = n6(r10)), w2 = k2 ? e12.done : l2 <= 0;
    }
    if (null == g2 || g2(r10), w2) {
      if (0 === y2 && (null != x2 || (x2 = l2)), y2 < c2) {
        var a3, i3;
        a3 = l2, i3 = x2, (k2 ? a3 >= i3 + d2 : a3 <= -d2) && (y2++, "reverse" === u2 ? l2 = function(e12, t11) {
          let r11 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n7 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
          return n7 ? tt(t11 + -e12, t11, r11) : t11 - (e12 - t11) + r11;
        }(l2, x2, d2, k2 = y2 % 2 == 0) : (l2 = tt(l2, x2, d2), "mirror" === u2 && C2.flipTarget()), w2 = false, m2 && m2());
      } else t10.stop(), p2 && p2();
    }
  })).start()), { stop: () => {
    null == h2 || h2(), t10.stop();
  } };
}
let ta = (e10, t10) => 1 - 3 * t10 + 3 * e10, ti = (e10, t10) => 3 * t10 - 6 * e10, to = (e10) => 3 * e10, ts = (e10, t10, r10) => ((ta(t10, r10) * e10 + ti(t10, r10)) * e10 + to(t10)) * e10, tl = (e10, t10, r10) => 3 * ta(t10, r10) * e10 * e10 + 2 * ti(t10, r10) * e10 + to(t10);
var tc = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, tu = /[A-Z]|^ms/g, td = /_EMO_([^_]+?)_([^]*?)_EMO_/g, tf = function(e10) {
  return 45 === e10.charCodeAt(1);
}, th = function(e10) {
  return null != e10 && "boolean" != typeof e10;
}, tp = (W = function(e10) {
  return tf(e10) ? e10 : e10.replace(tu, "-$&").toLowerCase();
}, N = /* @__PURE__ */ Object.create(null), function(e10) {
  return void 0 === N[e10] && (N[e10] = W(e10)), N[e10];
}), tm = function(e10, t10) {
  switch (e10) {
    case "animation":
    case "animationName":
      if ("string" == typeof t10) return t10.replace(td, function(e11, t11, r10) {
        return Z = { name: t11, styles: r10, next: Z }, t11;
      });
  }
  return 1 === tc[e10] || tf(e10) || "number" != typeof t10 || 0 === t10 ? t10 : t10 + "px";
};
function tg(e10, t10, r10) {
  if (null == r10) return "";
  if (void 0 !== r10.__emotion_styles) return r10;
  switch (typeof r10) {
    case "boolean":
      return "";
    case "object":
      if (1 === r10.anim) return Z = { name: r10.name, styles: r10.styles, next: Z }, r10.name;
      if (void 0 !== r10.styles) {
        var n6 = r10.next;
        if (void 0 !== n6) for (; void 0 !== n6; ) Z = { name: n6.name, styles: n6.styles, next: Z }, n6 = n6.next;
        return r10.styles + ";";
      }
      return function(e11, t11, r11) {
        var n7 = "";
        if (Array.isArray(r11)) for (var a3 = 0; a3 < r11.length; a3++) n7 += tg(e11, t11, r11[a3]) + ";";
        else for (var i3 in r11) {
          var o3 = r11[i3];
          if ("object" != typeof o3) null != t11 && void 0 !== t11[o3] ? n7 += i3 + "{" + t11[o3] + "}" : th(o3) && (n7 += tp(i3) + ":" + tm(i3, o3) + ";");
          else if (Array.isArray(o3) && "string" == typeof o3[0] && (null == t11 || void 0 === t11[o3[0]])) for (var s2 = 0; s2 < o3.length; s2++) th(o3[s2]) && (n7 += tp(i3) + ":" + tm(i3, o3[s2]) + ";");
          else {
            var l2 = tg(e11, t11, o3);
            switch (i3) {
              case "animation":
              case "animationName":
                n7 += tp(i3) + ":" + l2 + ";";
                break;
              default:
                n7 += i3 + "{" + l2 + "}";
            }
          }
        }
        return n7;
      }(e10, t10, r10);
    case "function":
      if (void 0 !== e10) {
        var a2 = Z, i2 = r10(e10);
        return Z = a2, tg(e10, t10, i2);
      }
  }
  if (null == t10) return r10;
  var o2 = t10[r10];
  return void 0 !== o2 ? o2 : r10;
}
var tv = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
function tb() {
  return new Proxy({}, { get: (e10, t10) => t10 });
}
let ty = tb(), tx = { paddingX: [ty.paddingLeft, ty.paddingRight], paddingY: [ty.paddingTop, ty.paddingBottom], marginX: [ty.marginInlineStart, ty.marginInlineEnd], marginY: [ty.marginTop, ty.marginBottom], borderX: [ty.borderLeft, ty.borderRight], borderY: [ty.borderTop, ty.borderBottom], color: [ty.color, ty.fill], borderTopRadius: [ty.borderTopLeftRadius, ty.borderTopRightRadius], borderBottomRadius: [ty.borderBottomLeftRadius, ty.borderBottomRightRadius], borderRightRadius: [ty.borderTopRightRadius, ty.borderBottomRightRadius], borderLeftRadius: [ty.borderTopLeftRadius, ty.borderBottomLeftRadius], backgroundGradient: [ty.backgroundImage], boxSize: [ty.width, ty.height] }, tw = tb(), tk = { font: tw.fontFamily, shadow: tw.boxShadow, rounded: tw.borderRadius, roundedTop: tw.borderTopRadius, roundedBottom: tw.borderBottomRadius, roundedLeft: tw.borderLeftRadius, roundedRight: tw.borderRightRadius, bg: tw.background, bgImage: tw.backgroundImage, bgSize: tw.backgroundSize, bgPosition: tw.backgroundPosition, bgRepeat: tw.backgroundRepeat, bgAttachment: tw.backgroundAttachment, bgColor: tw.backgroundColor, bgGradient: tw.backgroundGradient, bgClip: tw.backgroundClip, pos: tw.position, p: tw.padding, pt: tw.paddingTop, pr: tw.paddingRight, pl: tw.paddingLeft, pb: tw.paddingBottom, ps: tw.paddingInlineStart, pe: tw.paddingInlineEnd, px: tw.paddingX, py: tw.paddingY, m: tw.margin, mt: tw.marginTop, mr: tw.marginRight, ml: tw.marginLeft, mb: tw.marginBottom, ms: tw.marginInlineStart, me: tw.marginInlineEnd, mx: tw.marginX, my: tw.marginY, w: tw.width, minW: tw.minWidth, maxW: tw.maxWidth, h: tw.height, minH: tw.minHeight, maxH: tw.maxHeight }, tM = tb(), tC = function() {
  for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++) t10[r10] = arguments[r10];
  let n6 = [...t10];
  for (let e11 of t10) tk[e11] && n6.push(tk[e11]);
  return n6;
}, tP = { _rtl: "[dir=rtl] &, &[dir=rtl]", _ltr: "[dir=ltr] &, &[dir=ltr]", _dark: "&[data-theme=dark]", _light: "&[data-theme=light]" };
const _t_ = class _t_ {
  constructor(e10) {
    this.opt = e10;
  }
  processAll(e10) {
    let t10 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], r10 = [], { state: n6, extends: a2, ...i2 } = e10;
    if (a2) for (let e11 of a2) r10.push(...this.processAll(e11, t10));
    if (n6) {
      let e11 = {}, t11 = {};
      _t_.walkStateValues(n6, (r11, n7, a3) => {
        var i3;
        let o2 = `--${this.opt.varPrefix}-state-${n7.join("-")}`, s2 = null !== (i3 = _(n7)) && void 0 !== i3 ? i3 : "", l2 = {};
        this.process(l2, s2, r11, false), e11[o2] = l2[s2], S(t11, [...a3, s2], `var(${o2})`);
      }), r10.push(e11), r10.push(...this.processAll(t11));
    }
    if (!O(i2)) {
      let e11 = {};
      this.processTo(e11, i2, t10), r10.push(e11);
    }
    return r10;
  }
  processTo(e10, t10) {
    let r10 = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    for (let n6 in t10) this.process(e10, n6, t10[n6], r10);
  }
  process(e10, t10, r10) {
    var n6, a2, i2, o2;
    let s2 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (this.opt.mixins[t10]) {
      let a3 = null === (n6 = this.opt.mixins[t10]) || void 0 === n6 ? void 0 : n6.get(r10);
      if (a3) for (let t11 in a3) this.process(e10, t11, a3[t11], s2);
      return;
    }
    let l2 = t10;
    if (P(r10)) {
      e10[l2 = null !== (a2 = _t_.convertSelector(l2)) && void 0 !== a2 ? a2 : l2] = null !== (i2 = e10[l2]) && void 0 !== i2 ? i2 : {}, this.processTo(e10[l2], r10);
      return;
    }
    if (s2 && tx[l2 = null !== (o2 = tk[l2]) && void 0 !== o2 ? o2 : l2]) {
      for (let t11 of tx[l2]) e10[t11] = this.opt.processValue(t11, r10);
      return;
    }
    e10[l2] = this.opt.processValue(l2, r10);
  }
};
__publicField(_t_, "supportedPseudoClasses", { active: "active", after: "after", anyLink: "any-link", before: "before", blank: "blank", checked: "checked", current: "current", default: "default", defined: "defined", disabled: "disabled", empty: "empty", enabled: "enabled", first: "first", firstChild: "first-child", firstLetter: "first-letter", firstLine: "first-line", firstOfType: "first-of-type", focus: "focus", focusVisible: "focus-visible", focusWithin: "focus-within", fullscreen: "fullscreen", future: "future", hover: "hover", inRange: "in-range", indeterminate: "indeterminate", invalid: "invalid", lastChild: "last-child", lastOfType: "last-of-type", left: "left", link: "link", localLink: "local-link", nthCol: "nth-col", nthLastCol: "nth-last-col", onlyChild: "only-child", onlyOfType: "only-of-type", optional: "optional", outOfRange: "out-of-range", past: "past", paused: "paused", pictureInPicture: "picture-in-picture", placeholderShown: "placeholder-shown", playing: "playing", readOnly: "read-only", readWrite: "read-write", required: "required", right: "right", root: "root", scope: "scope", target: "target", targetWithin: "target-within", userInvalid: "user-invalid", userValid: "user-valid", valid: "valid", visited: "visited" });
__publicField(_t_, "convertSelector", (e10) => {
  if (tP[e10]) return tP[e10];
  let t10 = e10;
  if (t10.startsWith("$") || t10.endsWith("$") || t10.startsWith("_")) {
    let e11 = "", r10 = "";
    if (t10.startsWith("_") ? (e11 = "&", t10 = t10.slice(1)) : t10.startsWith("$") ? (e11 = "& ", t10 = t10.slice(1)) : (r10 = " &", t10 = t10.slice(0, t10.length - 1)), t10.startsWith("data") || t10.startsWith("aria")) {
      let [n6, a2] = t10.split("__");
      return a2 ? `${e11}[${M(n6)}='${M(a2)}']${r10}` : `${e11}[${M(n6)}]${r10}`;
    }
    if ("&" === e11) {
      if (t10.startsWith("$")) return `${e11}::${t10.slice(1)}`;
      if (_t_.supportedPseudoClasses[t10]) {
        let r12 = _t_.supportedPseudoClasses[t10];
        return `${e11}:${r12}, ${e11}[data-${r12}]:not([data-${r12}='false']), ${e11}.${r12}`;
      }
      let [r11, n6] = t10.split("__"), a2 = M(r11);
      return n6 ? `${e11}[data-${a2}='${M(n6)}']` : `${e11}[data-${a2}]:not([data-${a2}='false'])`;
    }
  }
});
__publicField(_t_, "walkStateValues", function(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { default: {}, selectorPath: [], path: [] }, { $: n6, ...a2 } = e10;
  for (let e11 in a2) {
    var i2;
    let o2 = a2[e11], s2 = null !== (i2 = a2.default) && void 0 !== i2 ? i2 : r10.default, l2 = null != n6 ? n6 : C(s2, [...r10.path.slice(1), "$"]), c2 = l2 ? [...r10.selectorPath, l2] : r10.selectorPath, u2 = [...r10.path, e11];
    if (P(o2)) {
      _t_.walkStateValues(o2, t10, { path: u2, selectorPath: c2, default: s2 });
      continue;
    }
    t10(o2, u2, c2);
  }
});
let t_ = _t_;
var tS = ((q = tS || {}).var = "var", q.mixin = "mixin", q);
class tO {
  static create(e10, t10) {
    let { value: r10, on: n6, transform: a2 } = t10;
    return { type: e10, value: r10, on: n6, transform: a2, __Tokens: void 0, __ValueType: void 0, __CSSTokens: void 0 };
  }
  static color(e10) {
    return tO.create("var", { value: e10, on: tC(tM.color, tM.bgColor, tM.outlineColor, tM.borderColor, tM.accentColor, tM.fill, tM.stroke), transform: (e11, t10) => D(e11) ? { default: `var(${t10(e11)})`, rgb: `var(${t10(`${e11}/rgb`)})` } : { default: `rgb(${e11[0]}, ${e11[1]}, ${e11[2]})`, rgb: `${e11[0]} ${e11[1]} ${e11[2]}` }, fallback: "" });
  }
  static space(e10) {
    return tO.create("var", { value: e10, on: tC(tM.gap, tM.rowGap, tM.columnGap, tM.top, tM.right, tM.bottom, tM.left, tM.m, tM.ms, tM.me, tM.mt, tM.mr, tM.mb, tM.ml, tM.mx, tM.my, tM.p, tM.ps, tM.pe, tM.pt, tM.pr, tM.pb, tM.pl, tM.px, tM.py) });
  }
  static boxSize(e10) {
    return tO.create("var", { value: e10, on: tC(tM.w, tM.minW, tM.maxW, tM.h, tM.minH, tM.maxH, tM.boxSize), fallback: 0 });
  }
  static fontSize(e10) {
    return tO.create("var", { value: e10, on: tC(tM.fontSize), fallback: 0 });
  }
  static lineHeight(e10) {
    return tO.create("var", { value: e10, on: tC(tM.lineHeight), fallback: 0 });
  }
  static rounded(e10) {
    return tO.create("var", { value: e10, fallback: 0, on: tC(tM.rounded, tM.roundedTop, tM.roundedBottom, tM.roundedLeft, tM.roundedRight, ty.borderTopLeftRadius, ty.borderTopRightRadius, ty.borderBottomLeftRadius, ty.borderBottomRightRadius, ty.borderTopRightRadius, ty.borderBottomRightRadius, ty.borderTopLeftRadius, ty.borderBottomLeftRadius) });
  }
  static transitionTimingFunction(e10) {
    return tO.create("var", { value: e10, on: tC(tM.transitionTimingFunction) });
  }
  static transitionDuration(e10) {
    return tO.create("var", { value: e10, on: tC(tM.transitionDuration), transform: (e11) => `${e11}ms` });
  }
  static font(e10) {
    return tO.create("var", { value: e10, on: tC(tM.font) });
  }
  static fontWeight(e10) {
    return tO.create("var", { value: e10, on: tC(tM.fontWeight) });
  }
  static letterSpacing(e10) {
    return tO.create("var", { value: e10, on: tC(tM.letterSpacing) });
  }
  static shadow(e10) {
    return tO.create("var", { value: e10, on: tC(tM.shadow) });
  }
  static customMixin(e10, t10) {
    return tO.create("mixin", { value: t10, on: [e10] });
  }
  static mixin(e10) {
    return { ...e10, __mixin: true };
  }
}
let tD = (e10, t10, r10) => {
  let n6 = e10;
  for (let e11 = 0; e11 < t10.length; e11++) {
    var a2;
    let i2 = t10[e11];
    if (e11 === t10.length - 1) {
      n6[i2] = r10;
      continue;
    }
    n6[i2] = null !== (a2 = n6[i2]) && void 0 !== a2 ? a2 : {}, n6 = n6[i2];
  }
};
const _tR = class _tR {
  constructor(e10, { cssVar: t10, transformFallback: r10 }) {
    __publicField(this, "__Tokens");
    __publicField(this, "_values", {});
    __publicField(this, "_cssVarRefs", {});
    _tR.walkValues(e10.value, (n6, a2) => {
      let i2 = a2.join("."), o2 = (n7, a3) => {
        let i3 = e10.transform ? e10.transform(n7, t10) : r10(n7);
        if (T(i3)) for (let e11 in i3) a3(i3[e11], "default" === e11 ? "" : e11);
        else a3(i3, "");
      };
      if (S(this._cssVarRefs, [i2], t10(i2)), P(n6)) for (let e11 in n6) o2(n6[e11], (t11, r11) => {
        S(this._values, [`${i2}${r11 ? `/${r11}` : ""}`, e11], t11);
      });
      else o2(n6, (e11, t11) => {
        S(this._values, [`${i2}${t11 ? `/${t11}` : ""}`], e11);
      });
    });
  }
  get tokens() {
    return $(this._values);
  }
  get(e10, t10, r10) {
    let n6 = this._values[e10];
    if (T(n6)) {
      var a2;
      return r10 ? n6[t10] : null !== (a2 = n6[t10]) && void 0 !== a2 ? a2 : n6[_tR.defaultMode];
    }
    return r10 ? t10 === _tR.defaultMode ? n6 : void 0 : n6;
  }
  use(e10) {
    let t10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (this._cssVarRefs[e10]) return t10 ? `${this._cssVarRefs[e10]}` : `var(${this._cssVarRefs[e10]})`;
  }
};
__publicField(_tR, "defaultMode", "_default");
__publicField(_tR, "walkValues", function(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let n6 in e10) {
    let a2 = e10[n6];
    if (P(a2)) {
      if (R(a2, "_default")) {
        t10(a2, [...r10, n6]);
        continue;
      }
      _tR.walkValues(a2, t10, [...r10, n6]);
      continue;
    }
    t10(a2, [...r10, n6]);
  }
});
let tR = _tR;
const _t$ = class _t$ {
  constructor(e10) {
    __publicField(this, "_values", {});
    _t$.walkValue(e10.value, (e11, t10) => {
      let r10 = t10.join(".");
      S(this._values, [r10], A(e11, "__mixin"));
    });
  }
  get tokens() {
    return $(this._values);
  }
  get(e10) {
    return this._values[e10];
  }
};
__publicField(_t$, "walkValue", function(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let n6 in e10) {
    let a2 = e10[n6];
    if (P(a2)) {
      if (R(a2, "__mixin")) {
        t10(a2, [...r10, n6]);
        continue;
      }
      _t$.walkValue(a2, t10, [...r10, n6]);
      continue;
    }
    t10(a2, [...r10, n6]);
  }
});
let t$ = _t$;
let tT = { primary: ["primary"], secondary: ["secondary"], tertiary: ["tertiary"], error: ["error"], warning: ["warning"], success: ["success"], neutral: ["surface", "outline"] }, tA = (e10) => {
  let t10 = C(e10, ["color", "sys"], {});
  return { ...e10, color: { sys: I(tT, (e11) => L(t10, (t11, r10) => F(e11, (e12) => r10.indexOf(e12) > -1))) } };
}, tI = (e10) => (t10) => `rgba(var(${t10}--rgb) / ${e10})`, tL = (e10) => B(e10) && R(e10, "token");
function tF(e10, t10) {
  return Object.assign((e11) => t10(e11), { toString: () => e10, token: e10 });
}
let tB = (e10) => e10.reduce((e11, t10) => Object.assign(e11, { [t10]: true }), {});
const _tj = class _tj {
  constructor(e10, t10 = {}) {
    __publicField(this, "mode");
    __publicField(this, "varPrefix");
    __publicField(this, "cssVars", {});
    __publicField(this, "tokens", {});
    __publicField(this, "propValues", {});
    __publicField(this, "mixins", {});
    __publicField(this, "dp", (e10) => 0 === e10 ? 0 : `calc(${e10} * var(${this.cssVar("space", "dp")}))`);
    __publicField(this, "transformFallback", (e10, t10) => _tj.propsCanBaseDp[e10] && V(t10) ? _tj.propsCanPercent[e10] && 1 > Math.abs(t10) ? `${100 * t10}%` : this.dp(t10) : t10);
    __publicField(this, "token", new Proxy({}, { get: (e10, t10) => {
      var r10, n6;
      return this.tokens[t10] ? Object.assign((e11) => {
        var r11;
        return null === (r11 = this.tokens[t10]) || void 0 === r11 ? void 0 : r11.get(e11, `_${this.mode}`);
      }, { tokens: null === (r10 = this.tokens[t10]) || void 0 === r10 ? void 0 : r10.tokens }) : this.mixins[t10] ? Object.assign((e11) => {
        var r11;
        return null === (r11 = this.mixins[t10]) || void 0 === r11 ? void 0 : r11.get(e11);
      }, { tokens: null === (n6 = this.mixins[t10]) || void 0 === n6 ? void 0 : n6.tokens }) : void 0;
    } }));
    __publicField(this, "processValue", (e10, t10) => {
      var r10, n6, a2;
      if (tL(t10)) {
        let r11 = null === (n6 = this.propValues[e10]) || void 0 === n6 ? void 0 : n6.use(t10.token, true);
        return r11 ? t10(r11) : void 0;
      }
      return null !== (a2 = null === (r10 = this.propValues[e10]) || void 0 === r10 ? void 0 : r10.use(t10)) && void 0 !== a2 ? a2 : this.transformFallback(e10, t10);
    });
    __publicField(this, "unstable_sx", (e10) => new t_({ mixins: this.mixins, varPrefix: this.varPrefix, processValue: this.processValue }).processAll(e10));
    var r10, n6;
    for (let a2 in this.theme = e10, this.varPrefix = null !== (r10 = t10.varPrefix) && void 0 !== r10 ? r10 : "vk", this.mode = null !== (n6 = t10.mode) && void 0 !== n6 ? n6 : "light", S(this.cssVars, [this.cssVar("space", "dp")], "0.1rem"), e10) {
      let t11 = e10[a2];
      if (t11) {
        if (t11.type === tS.var) {
          let e11 = new tR(t11, { cssVar: (e12) => this.cssVar(a2, e12), transformFallback: (e12) => this.transformFallback(t11.on[0], e12) });
          for (let r11 of (this.tokens[a2] = e11, t11.on)) this.propValues[r11] = e11;
          for (let t12 of e11.tokens) for (let r11 of ["light", "dark"]) {
            let n7 = r11 === this.mode ? "_default" : `_${r11}`, i2 = e11.get(t12, n7, true);
            j(i2) || ("_default" === n7 ? S(this.cssVars, [this.cssVar(a2, t12)], i2) : S(this.cssVars, [n7, this.cssVar(a2, t12)], i2));
          }
          continue;
        }
        if (t11.type === tS.mixin) {
          let e11 = new t$(t11);
          for (let r11 of t11.on) this.mixins[r11] = e11;
        }
      }
    }
  }
  static create(e10, t10) {
    return new _tj(e10, t10);
  }
  cssVar(e10, t10) {
    return `--${this.varPrefix}-${M(e10)}__${t10.replaceAll("/", "--").replaceAll(".", "__")}`;
  }
  get rootCSSVars() {
    return this.cssVars;
  }
  unstable_css(e10, t10) {
    var r10;
    let n6 = null != t10 ? t10 : {};
    return n6.__emotion_styles = null !== (r10 = n6.__emotion_styles) && void 0 !== r10 ? r10 : function(e11, t11, r11) {
      if (1 === e11.length && "object" == typeof e11[0] && null !== e11[0] && void 0 !== e11[0].styles) return e11[0];
      var n7, a2 = true, i2 = "";
      Z = void 0;
      var o2 = e11[0];
      null == o2 || void 0 === o2.raw ? (a2 = false, i2 += tg(r11, t11, o2)) : i2 += o2[0];
      for (var s2 = 1; s2 < e11.length; s2++) i2 += tg(r11, t11, e11[s2]), a2 && (i2 += o2[s2]);
      tv.lastIndex = 0;
      for (var l2 = ""; null !== (n7 = tv.exec(i2)); ) l2 += "-" + n7[1];
      return { name: function(e12) {
        for (var t12, r12 = 0, n9 = 0, a3 = e12.length; a3 >= 4; ++n9, a3 -= 4) t12 = (65535 & (t12 = 255 & e12.charCodeAt(n9) | (255 & e12.charCodeAt(++n9)) << 8 | (255 & e12.charCodeAt(++n9)) << 16 | (255 & e12.charCodeAt(++n9)) << 24)) * 1540483477 + ((t12 >>> 16) * 59797 << 16), t12 ^= t12 >>> 24, r12 = (65535 & t12) * 1540483477 + ((t12 >>> 16) * 59797 << 16) ^ (65535 & r12) * 1540483477 + ((r12 >>> 16) * 59797 << 16);
        switch (a3) {
          case 3:
            r12 ^= (255 & e12.charCodeAt(n9 + 2)) << 16;
          case 2:
            r12 ^= (255 & e12.charCodeAt(n9 + 1)) << 8;
          case 1:
            r12 ^= 255 & e12.charCodeAt(n9), r12 = (65535 & r12) * 1540483477 + ((r12 >>> 16) * 59797 << 16);
        }
        return r12 ^= r12 >>> 13, (((r12 = (65535 & r12) * 1540483477 + ((r12 >>> 16) * 59797 << 16)) ^ r12 >>> 15) >>> 0).toString(36);
      }(i2) + l2, styles: i2, next: Z };
    }(this.unstable_sx(t10), null == e10 ? void 0 : e10.registered, {}), n6.__emotion_styles;
  }
  toFigmaTokens() {
    let e10 = { space: { dp: { $type: "sizing", $value: 1 } } }, t10 = {}, r10 = {}, n6 = (e11, t11) => T(t11) ? { $type: e11, $value: I(t11, (t12) => n6(e11, t12).$value) } : D(t11) ? { $type: e11, $value: t11.replace(/var\(([^)]+)\)/g, (e12) => {
      var t12, r11;
      let n7 = null !== (r11 = null === (t12 = e12.slice(4, e12.length - 1).slice(`--${this.varPrefix}-`.length).split("--")[0]) || void 0 === t12 ? void 0 : t12.split("__").map((e13, t13) => 0 === t13 ? E(e13) : e13).join(".")) && void 0 !== r11 ? r11 : "";
      return n7.startsWith("sys.") ? `{${n7}}` : `{seed.${n7}}`;
    }).replace(/calc\(.+\)$/g, (e12) => e12.slice(5, e12.length - 1)) } : { $type: e11, $value: t11 };
    for (let a2 in this.tokens) {
      let i2 = this.tokens[a2], o2 = (o3) => {
        for (let s2 of i2.tokens) if (!s2.includes("/")) {
          if (s2.startsWith("sys.")) {
            let e11 = i2.get(s2, "_default"), l2 = i2.get(s2, "_dark");
            tD(t10, [a2, ...s2.split(".")], n6(o3, e11)), e11 !== l2 && tD(r10, [a2, ...s2.split(".")], n6(o3, l2));
          } else tD(e10, [a2, ...s2.split(".")], n6(o3, i2.get(s2, "_default")));
        }
      };
      switch (a2) {
        case "color":
          o2("color");
          break;
        case "rounded":
          o2("borderRadius");
          break;
        case "shadow":
          o2("boxShadow");
          break;
        case "font":
          o2("fontFamily");
          break;
        case "fontWeight":
          o2("fontWeight");
      }
    }
    for (let e11 in this.mixins) {
      let r11 = this.mixins[e11];
      if (!r11) continue;
      let a2 = (a3) => {
        for (let i2 of r11.tokens) {
          let o2 = r11.get(i2);
          if (!o2) continue;
          let s2 = this.unstable_sx(o2)[0];
          tD(t10, [e11, ...i2.split(".")], n6(a3, s2));
        }
      };
      "textStyle" === e11 && a2("typography");
    }
    return { seed: e10, base: tA(t10), dark: tA(r10) };
  }
};
__publicField(_tj, "propsCanPercent", tB([...tO.boxSize({}).on]));
__publicField(_tj, "propsCanBaseDp", tB([...tO.boxSize({}).on, ...tO.space({}).on, ...tO.fontSize({}).on, ...tO.letterSpacing({}).on, ...tO.lineHeight({}).on, ...tO.rounded({}).on]));
let tj = _tj;
let tV = { shadow: tO.shadow({ 0: { _default: "0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0)", _dark: "0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0)" }, 1: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)", _dark: "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 2: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)", _dark: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 3: { _default: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)" }, 4: { _default: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)" }, 5: { _default: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)", _dark: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)" } }), elevation: tO.customMixin("elevation", { 0: tO.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "0", _hover: { shadow: "1" } }), 1: tO.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "1", _hover: { shadow: "2" } }), 2: tO.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "2", _hover: { shadow: "3" } }), 3: tO.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "3", _hover: { shadow: "4" } }), 4: tO.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "4", _hover: { shadow: "5" } }) }) }, tE = (e10, t10, r10, n6) => Object.assign(function(e11, t11, r11, n7) {
  if (e11 === t11 && r11 === n7) return eG;
  let a2 = new Float32Array(11);
  for (let t12 = 0; t12 < 11; ++t12) a2[t12] = ts(0.1 * t12, e11, r11);
  return (i2) => 0 === i2 || 1 === i2 ? i2 : ts(function(t12) {
    let n9 = 0, i3 = 1;
    for (; 10 !== i3 && a2[i3] <= t12; ++i3) n9 += 0.1;
    let o2 = n9 + (t12 - a2[--i3]) / (a2[i3 + 1] - a2[i3]) * 0.1, s2 = tl(o2, e11, r11);
    return s2 >= 1e-3 ? function(e12, t13, r12, n10) {
      for (let a3 = 0; a3 < 8; ++a3) {
        let a4 = tl(t13, r12, n10);
        if (0 === a4) break;
        let i4 = ts(t13, r12, n10) - e12;
        t13 -= i4 / a4;
      }
      return t13;
    }(t12, o2, e11, r11) : 0 === s2 ? o2 : function(e12, t13, r12, n10, a3) {
      let i4, o3;
      let s3 = 0;
      do
        (i4 = ts(o3 = t13 + (r12 - t13) / 2, n10, a3) - e12) > 0 ? r12 = o3 : t13 = o3;
      while (Math.abs(i4) > 1e-7 && ++s3 < 10);
      return o3;
    }(t12, n9, n9 + 0.1, e11, r11);
  }(i2), t11, n7);
}(e10, t10, r10, n6), { toString: () => `cubic-bezier(${e10}, ${t10}, ${r10}, ${n6})` }), tH = { duration: { sm1: 50, sm2: 100, sm3: 150, sm4: 200, md1: 250, md2: 300, md3: 350, md4: 400, lg1: 450, lg2: 500, lg3: 550, lg4: 600, xl1: 700, xl2: 800, xl3: 900, xl4: 1e3 }, easing: { linear: tE(0, 0, 1, 1), standard: Object.assign(tE(0.2, 0, 0, 1), { accelerate: tE(0.3, 0, 1, 1), decelerate: tE(0, 0, 0, 1) }), emphasized: Object.assign(tE(0.2, 0, 0, 1), { accelerate: tE(0.3, 0, 0.8, 0.15), decelerate: tE(0.05, 0.7, 0.1, 1) }), legacy: Object.assign(tE(0.4, 0, 0.2, 1), { decelerate: tE(0, 0, 0.2, 1), accelerate: tE(0.4, 0, 1, 1) }) } }, tz = (e10, a2) => {
  let i2 = null != a2 ? a2 : { ...e10, from: { ...e10.to }, to: { ...e10.from } };
  return t({ onComplete: k(), $default: k() }, (t10, a3) => {
    let o2, { slots: s2, emit: l2 } = a3, c2 = (t11, r10) => {
      o2 = tn({ ...e10, autoplay: true, onComplete: () => {
        r10(), l2("complete", "enter");
      }, onUpdate: (e11) => {
        Object.assign(t11.style, e11);
      } });
    }, u2 = (e11, t11) => {
      o2 = tn({ ...i2, autoplay: true, onComplete: () => {
        t11(), l2("complete", "leave");
      }, onUpdate: (t12) => {
        Object.assign(e11.style, t12);
      } });
    }, d2 = () => {
      null == o2 || o2.stop();
    };
    return () => {
      var e11;
      return r(n, { css: false, onEnter: c2, onEnterCancelled: d2, onLeave: u2, onLeaveCancelled: d2, children: null === (e11 = s2.default) || void 0 === e11 ? void 0 : e11.call(s2) });
    };
  }, { name: "Transition" });
}, tW = { transitionDuration: tO.transitionDuration(tH.duration), transitionTimingFunction: tO.transitionTimingFunction({ linear: tH.easing.linear.toString(), standard: tH.easing.standard.toString(), "standard-accelerate": tH.easing.standard.accelerate.toString(), "standard-decelerate": tH.easing.standard.decelerate.toString(), emphasized: tH.easing.emphasized.toString(), "emphasized-decelerate": tH.easing.emphasized.decelerate.toString(), "emphasized-accelerate": tH.easing.emphasized.accelerate.toString(), legacy: tH.easing.legacy.toString(), "legacy-decelerate": tH.easing.legacy.decelerate.toString(), "legacy-accelerate": tH.easing.legacy.accelerate.toString() }) };
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
function tN(e10) {
  return e10 < 0 ? -1 : 0 === e10 ? 0 : 1;
}
function tq(e10, t10, r10) {
  return r10 < e10 ? e10 : r10 > t10 ? t10 : r10;
}
function tU(e10, t10) {
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
let tG = [[0.41233895, 0.35762064, 0.18051042], [0.2126, 0.7152, 0.0722], [0.01932141, 0.11916382, 0.95034478]], tY = [[3.2413774792388685, -1.5376652402851851, -0.49885366846268053], [-0.9691452513005321, 1.8758853451067872, 0.04156585616912061], [0.05562093689691305, -0.20395524564742123, 1.0571799111220335]], tX = [95.047, 100, 108.883];
function tK(e10, t10, r10) {
  return (-16777216 | (255 & e10) << 16 | (255 & t10) << 8 | 255 & r10) >>> 0;
}
function tJ(e10) {
  return tK(t2(e10[0]), t2(e10[1]), t2(e10[2]));
}
function tZ(e10) {
  var t10;
  return 116 * t4(tU([t1((t10 = e10) >> 16 & 255), t1(t10 >> 8 & 255), t1(255 & t10)], tG)[1] / 100) - 16;
}
function tQ(e10) {
  return 100 * function(e11) {
    let t10 = e11 * e11 * e11;
    return t10 > 216 / 24389 ? t10 : (116 * e11 - 16) / (24389 / 27);
  }((e10 + 16) / 116);
}
function t0(e10) {
  return 116 * t4(e10 / 100) - 16;
}
function t1(e10) {
  let t10 = e10 / 255;
  return t10 <= 0.040449936 ? t10 / 12.92 * 100 : 100 * Math.pow((t10 + 0.055) / 1.055, 2.4);
}
function t2(e10) {
  var t10;
  let r10 = e10 / 100;
  return (t10 = Math.round(255 * (r10 <= 31308e-7 ? 12.92 * r10 : 1.055 * Math.pow(r10, 1 / 2.4) - 0.055))) < 0 ? 0 : t10 > 255 ? 255 : t10;
}
function t4(e10) {
  return e10 > 216 / 24389 ? Math.pow(e10, 1 / 3) : (24389 / 27 * e10 + 16) / 116;
}
class t5 {
  static make() {
    var e10, t10;
    let r10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tX, n6 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200 / Math.PI * tQ(50) / 100, a2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50, i2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2, o2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], s2 = 0.401288 * r10[0] + 0.650173 * r10[1] + -0.051461 * r10[2], l2 = -0.250268 * r10[0] + 1.204414 * r10[1] + 0.045854 * r10[2], c2 = -2079e-6 * r10[0] + 0.048952 * r10[1] + 0.953127 * r10[2], u2 = 0.8 + i2 / 10, d2 = u2 >= 0.9 ? (1 - (e10 = (u2 - 0.9) * 10)) * 0.59 + 0.69 * e10 : (1 - (t10 = (u2 - 0.8) * 10)) * 0.525 + 0.59 * t10, f2 = o2 ? 1 : u2 * (1 - 1 / 3.6 * Math.exp((-n6 - 42) / 92)), h2 = [100 / s2 * (f2 = f2 > 1 ? 1 : f2 < 0 ? 0 : f2) + 1 - f2, 100 / l2 * f2 + 1 - f2, 100 / c2 * f2 + 1 - f2], p2 = 1 / (5 * n6 + 1), m2 = p2 * p2 * p2 * p2, g2 = 1 - m2, v2 = m2 * n6 + 0.1 * g2 * g2 * Math.cbrt(5 * n6), b2 = tQ(a2) / r10[1], y2 = 1.48 + Math.sqrt(b2), x2 = 0.725 / Math.pow(b2, 0.2), w2 = [Math.pow(v2 * h2[0] * s2 / 100, 0.42), Math.pow(v2 * h2[1] * l2 / 100, 0.42), Math.pow(v2 * h2[2] * c2 / 100, 0.42)], k2 = [400 * w2[0] / (w2[0] + 27.13), 400 * w2[1] / (w2[1] + 27.13), 400 * w2[2] / (w2[2] + 27.13)];
    return new t5(b2, (2 * k2[0] + k2[1] + 0.05 * k2[2]) * x2, x2, x2, d2, u2, h2, v2, Math.pow(v2, 0.25), y2);
  }
  constructor(e10, t10, r10, n6, a2, i2, o2, s2, l2, c2) {
    this.n = e10, this.aw = t10, this.nbb = r10, this.ncb = n6, this.c = a2, this.nc = i2, this.rgbD = o2, this.fl = s2, this.fLRoot = l2, this.z = c2;
  }
}
t5.DEFAULT = t5.make();
class t3 {
  constructor(e10, t10, r10, n6, a2, i2, o2, s2, l2) {
    this.hue = e10, this.chroma = t10, this.j = r10, this.q = n6, this.m = a2, this.s = i2, this.jstar = o2, this.astar = s2, this.bstar = l2;
  }
  distance(e10) {
    let t10 = this.jstar - e10.jstar, r10 = this.astar - e10.astar, n6 = this.bstar - e10.bstar;
    return 1.41 * Math.pow(Math.sqrt(t10 * t10 + r10 * r10 + n6 * n6), 0.63);
  }
  static fromInt(e10) {
    return t3.fromIntInViewingConditions(e10, t5.DEFAULT);
  }
  static fromIntInViewingConditions(e10, t10) {
    let r10 = t1((16711680 & e10) >> 16), n6 = t1((65280 & e10) >> 8), a2 = t1(255 & e10), i2 = 0.41233895 * r10 + 0.35762064 * n6 + 0.18051042 * a2, o2 = 0.2126 * r10 + 0.7152 * n6 + 0.0722 * a2, s2 = 0.01932141 * r10 + 0.11916382 * n6 + 0.95034478 * a2, l2 = t10.rgbD[0] * (0.401288 * i2 + 0.650173 * o2 - 0.051461 * s2), c2 = t10.rgbD[1] * (-0.250268 * i2 + 1.204414 * o2 + 0.045854 * s2), u2 = t10.rgbD[2] * (-2079e-6 * i2 + 0.048952 * o2 + 0.953127 * s2), d2 = Math.pow(t10.fl * Math.abs(l2) / 100, 0.42), f2 = Math.pow(t10.fl * Math.abs(c2) / 100, 0.42), h2 = Math.pow(t10.fl * Math.abs(u2) / 100, 0.42), p2 = 400 * tN(l2) * d2 / (d2 + 27.13), m2 = 400 * tN(c2) * f2 / (f2 + 27.13), g2 = 400 * tN(u2) * h2 / (h2 + 27.13), v2 = (11 * p2 + -12 * m2 + g2) / 11, b2 = (p2 + m2 - 2 * g2) / 9, y2 = 180 * Math.atan2(b2, v2) / Math.PI, x2 = y2 < 0 ? y2 + 360 : y2 >= 360 ? y2 - 360 : y2, w2 = x2 * Math.PI / 180, k2 = 100 * Math.pow((40 * p2 + 20 * m2 + g2) / 20 * t10.nbb / t10.aw, t10.c * t10.z), M2 = 4 / t10.c * Math.sqrt(k2 / 100) * (t10.aw + 4) * t10.fLRoot, C2 = Math.pow(5e4 / 13 * (0.25 * (Math.cos((x2 < 20.14 ? x2 + 360 : x2) * Math.PI / 180 + 2) + 3.8)) * t10.nc * t10.ncb * Math.sqrt(v2 * v2 + b2 * b2) / ((20 * p2 + 20 * m2 + 21 * g2) / 20 + 0.305), 0.9) * Math.pow(1.64 - Math.pow(0.29, t10.n), 0.73), P2 = C2 * Math.sqrt(k2 / 100), _2 = P2 * t10.fLRoot, S2 = 50 * Math.sqrt(C2 * t10.c / (t10.aw + 4)), O2 = 1 / 0.0228 * Math.log(1 + 0.0228 * _2);
    return new t3(x2, P2, k2, M2, _2, S2, (1 + 100 * 7e-3) * k2 / (1 + 7e-3 * k2), O2 * Math.cos(w2), O2 * Math.sin(w2));
  }
  static fromJch(e10, t10, r10) {
    return t3.fromJchInViewingConditions(e10, t10, r10, t5.DEFAULT);
  }
  static fromJchInViewingConditions(e10, t10, r10, n6) {
    let a2 = 4 / n6.c * Math.sqrt(e10 / 100) * (n6.aw + 4) * n6.fLRoot, i2 = t10 * n6.fLRoot, o2 = 50 * Math.sqrt(t10 / Math.sqrt(e10 / 100) * n6.c / (n6.aw + 4)), s2 = r10 * Math.PI / 180, l2 = 1 / 0.0228 * Math.log(1 + 0.0228 * i2);
    return new t3(r10, t10, e10, a2, i2, o2, (1 + 100 * 7e-3) * e10 / (1 + 7e-3 * e10), l2 * Math.cos(s2), l2 * Math.sin(s2));
  }
  static fromUcs(e10, t10, r10) {
    return t3.fromUcsInViewingConditions(e10, t10, r10, t5.DEFAULT);
  }
  static fromUcsInViewingConditions(e10, t10, r10, n6) {
    let a2 = (Math.exp(0.0228 * Math.sqrt(t10 * t10 + r10 * r10)) - 1) / 0.0228 / n6.fLRoot, i2 = 180 / Math.PI * Math.atan2(r10, t10);
    return i2 < 0 && (i2 += 360), t3.fromJchInViewingConditions(e10 / (1 - (e10 - 100) * 7e-3), a2, i2, n6);
  }
  toInt() {
    return this.viewed(t5.DEFAULT);
  }
  viewed(e10) {
    let t10 = Math.pow((0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100)) / Math.pow(1.64 - Math.pow(0.29, e10.n), 0.73), 1 / 0.9), r10 = this.hue * Math.PI / 180, n6 = 0.25 * (Math.cos(r10 + 2) + 3.8), a2 = e10.aw * Math.pow(this.j / 100, 1 / e10.c / e10.z), i2 = 5e4 / 13 * n6 * e10.nc * e10.ncb, o2 = a2 / e10.nbb, s2 = Math.sin(r10), l2 = Math.cos(r10), c2 = 23 * (o2 + 0.305) * t10 / (23 * i2 + 11 * t10 * l2 + 108 * t10 * s2), u2 = c2 * l2, d2 = c2 * s2, f2 = (460 * o2 + 451 * u2 + 288 * d2) / 1403, h2 = (460 * o2 - 891 * u2 - 261 * d2) / 1403, p2 = (460 * o2 - 220 * u2 - 6300 * d2) / 1403, m2 = Math.max(0, 27.13 * Math.abs(f2) / (400 - Math.abs(f2))), g2 = tN(f2) * (100 / e10.fl) * Math.pow(m2, 1 / 0.42), v2 = Math.max(0, 27.13 * Math.abs(h2) / (400 - Math.abs(h2))), b2 = tN(h2) * (100 / e10.fl) * Math.pow(v2, 1 / 0.42), y2 = Math.max(0, 27.13 * Math.abs(p2) / (400 - Math.abs(p2))), x2 = tN(p2) * (100 / e10.fl) * Math.pow(y2, 1 / 0.42), w2 = g2 / e10.rgbD[0], k2 = b2 / e10.rgbD[1], M2 = x2 / e10.rgbD[2];
    return function(e11, t11, r11) {
      let n7 = tY[0][0] * e11 + tY[0][1] * t11 + tY[0][2] * r11, a3 = tY[1][0] * e11 + tY[1][1] * t11 + tY[1][2] * r11, i3 = tY[2][0] * e11 + tY[2][1] * t11 + tY[2][2] * r11;
      return tK(t2(n7), t2(a3), t2(i3));
    }(1.86206786 * w2 - 1.01125463 * k2 + 0.14918677 * M2, 0.38752654 * w2 + 0.62144744 * k2 - 897398e-8 * M2, -0.0158415 * w2 - 0.03412294 * k2 + 1.04996444 * M2);
  }
  static fromXyzInViewingConditions(e10, t10, r10, n6) {
    let a2 = n6.rgbD[0] * (0.401288 * e10 + 0.650173 * t10 - 0.051461 * r10), i2 = n6.rgbD[1] * (-0.250268 * e10 + 1.204414 * t10 + 0.045854 * r10), o2 = n6.rgbD[2] * (-2079e-6 * e10 + 0.048952 * t10 + 0.953127 * r10), s2 = Math.pow(n6.fl * Math.abs(a2) / 100, 0.42), l2 = Math.pow(n6.fl * Math.abs(i2) / 100, 0.42), c2 = Math.pow(n6.fl * Math.abs(o2) / 100, 0.42), u2 = 400 * tN(a2) * s2 / (s2 + 27.13), d2 = 400 * tN(i2) * l2 / (l2 + 27.13), f2 = 400 * tN(o2) * c2 / (c2 + 27.13), h2 = (11 * u2 + -12 * d2 + f2) / 11, p2 = (u2 + d2 - 2 * f2) / 9, m2 = 180 * Math.atan2(p2, h2) / Math.PI, g2 = m2 < 0 ? m2 + 360 : m2 >= 360 ? m2 - 360 : m2, v2 = g2 * Math.PI / 180, b2 = 100 * Math.pow((40 * u2 + 20 * d2 + f2) / 20 * n6.nbb / n6.aw, n6.c * n6.z), y2 = 4 / n6.c * Math.sqrt(b2 / 100) * (n6.aw + 4) * n6.fLRoot, x2 = Math.pow(5e4 / 13 * (0.25 * (Math.cos((g2 < 20.14 ? g2 + 360 : g2) * Math.PI / 180 + 2) + 3.8)) * n6.nc * n6.ncb * Math.sqrt(h2 * h2 + p2 * p2) / ((20 * u2 + 20 * d2 + 21 * f2) / 20 + 0.305), 0.9) * Math.pow(1.64 - Math.pow(0.29, n6.n), 0.73), w2 = x2 * Math.sqrt(b2 / 100), k2 = w2 * n6.fLRoot, M2 = 50 * Math.sqrt(x2 * n6.c / (n6.aw + 4)), C2 = Math.log(1 + 0.0228 * k2) / 0.0228;
    return new t3(g2, w2, b2, y2, k2, M2, (1 + 100 * 7e-3) * b2 / (1 + 7e-3 * b2), C2 * Math.cos(v2), C2 * Math.sin(v2));
  }
  xyzInViewingConditions(e10) {
    let t10 = Math.pow((0 === this.chroma || 0 === this.j ? 0 : this.chroma / Math.sqrt(this.j / 100)) / Math.pow(1.64 - Math.pow(0.29, e10.n), 0.73), 1 / 0.9), r10 = this.hue * Math.PI / 180, n6 = 0.25 * (Math.cos(r10 + 2) + 3.8), a2 = e10.aw * Math.pow(this.j / 100, 1 / e10.c / e10.z), i2 = 5e4 / 13 * n6 * e10.nc * e10.ncb, o2 = a2 / e10.nbb, s2 = Math.sin(r10), l2 = Math.cos(r10), c2 = 23 * (o2 + 0.305) * t10 / (23 * i2 + 11 * t10 * l2 + 108 * t10 * s2), u2 = c2 * l2, d2 = c2 * s2, f2 = (460 * o2 + 451 * u2 + 288 * d2) / 1403, h2 = (460 * o2 - 891 * u2 - 261 * d2) / 1403, p2 = (460 * o2 - 220 * u2 - 6300 * d2) / 1403, m2 = Math.max(0, 27.13 * Math.abs(f2) / (400 - Math.abs(f2))), g2 = tN(f2) * (100 / e10.fl) * Math.pow(m2, 1 / 0.42), v2 = Math.max(0, 27.13 * Math.abs(h2) / (400 - Math.abs(h2))), b2 = tN(h2) * (100 / e10.fl) * Math.pow(v2, 1 / 0.42), y2 = Math.max(0, 27.13 * Math.abs(p2) / (400 - Math.abs(p2))), x2 = tN(p2) * (100 / e10.fl) * Math.pow(y2, 1 / 0.42), w2 = g2 / e10.rgbD[0], k2 = b2 / e10.rgbD[1], M2 = x2 / e10.rgbD[2];
    return [1.86206786 * w2 - 1.01125463 * k2 + 0.14918677 * M2, 0.38752654 * w2 + 0.62144744 * k2 - 897398e-8 * M2, -0.0158415 * w2 - 0.03412294 * k2 + 1.04996444 * M2];
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
class t8 {
  static sanitizeRadians(e10) {
    return (e10 + 8 * Math.PI) % (2 * Math.PI);
  }
  static trueDelinearized(e10) {
    let t10 = e10 / 100;
    return 255 * (t10 <= 31308e-7 ? 12.92 * t10 : 1.055 * Math.pow(t10, 1 / 2.4) - 0.055);
  }
  static chromaticAdaptation(e10) {
    let t10 = Math.pow(Math.abs(e10), 0.42);
    return 400 * tN(e10) * t10 / (t10 + 27.13);
  }
  static hueOf(e10) {
    let t10 = tU(e10, t8.SCALED_DISCOUNT_FROM_LINRGB), r10 = t8.chromaticAdaptation(t10[0]), n6 = t8.chromaticAdaptation(t10[1]), a2 = t8.chromaticAdaptation(t10[2]);
    return Math.atan2((r10 + n6 - 2 * a2) / 9, (11 * r10 + -12 * n6 + a2) / 11);
  }
  static areInCyclicOrder(e10, t10, r10) {
    return t8.sanitizeRadians(t10 - e10) < t8.sanitizeRadians(r10 - e10);
  }
  static intercept(e10, t10, r10) {
    return (t10 - e10) / (r10 - e10);
  }
  static lerpPoint(e10, t10, r10) {
    return [e10[0] + (r10[0] - e10[0]) * t10, e10[1] + (r10[1] - e10[1]) * t10, e10[2] + (r10[2] - e10[2]) * t10];
  }
  static setCoordinate(e10, t10, r10, n6) {
    let a2 = t8.intercept(e10[n6], t10, r10[n6]);
    return t8.lerpPoint(e10, a2, r10);
  }
  static isBounded(e10) {
    return 0 <= e10 && e10 <= 100;
  }
  static nthVertex(e10, t10) {
    let r10 = t8.Y_FROM_LINRGB[0], n6 = t8.Y_FROM_LINRGB[1], a2 = t8.Y_FROM_LINRGB[2], i2 = t10 % 4 <= 1 ? 0 : 100, o2 = t10 % 2 == 0 ? 0 : 100;
    if (t10 < 4) {
      let t11 = (e10 - i2 * n6 - o2 * a2) / r10;
      return t8.isBounded(t11) ? [t11, i2, o2] : [-1, -1, -1];
    }
    if (t10 < 8) {
      let t11 = (e10 - o2 * r10 - i2 * a2) / n6;
      return t8.isBounded(t11) ? [o2, t11, i2] : [-1, -1, -1];
    }
    {
      let t11 = (e10 - i2 * r10 - o2 * n6) / a2;
      return t8.isBounded(t11) ? [i2, o2, t11] : [-1, -1, -1];
    }
  }
  static bisectToSegment(e10, t10) {
    let r10 = [-1, -1, -1], n6 = r10, a2 = 0, i2 = 0, o2 = false, s2 = true;
    for (let l2 = 0; l2 < 12; l2++) {
      let c2 = t8.nthVertex(e10, l2);
      if (c2[0] < 0) continue;
      let u2 = t8.hueOf(c2);
      if (!o2) {
        r10 = c2, n6 = c2, a2 = u2, i2 = u2, o2 = true;
        continue;
      }
      (s2 || t8.areInCyclicOrder(a2, u2, i2)) && (s2 = false, t8.areInCyclicOrder(a2, t10, u2) ? (n6 = c2, i2 = u2) : (r10 = c2, a2 = u2));
    }
    return [r10, n6];
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
    let r10 = t8.bisectToSegment(e10, t10), n6 = r10[0], a2 = t8.hueOf(n6), i2 = r10[1];
    for (let e11 = 0; e11 < 3; e11++) if (n6[e11] !== i2[e11]) {
      let r11 = -1, o2 = 255;
      n6[e11] < i2[e11] ? (r11 = t8.criticalPlaneBelow(t8.trueDelinearized(n6[e11])), o2 = t8.criticalPlaneAbove(t8.trueDelinearized(i2[e11]))) : (r11 = t8.criticalPlaneAbove(t8.trueDelinearized(n6[e11])), o2 = t8.criticalPlaneBelow(t8.trueDelinearized(i2[e11])));
      for (let s2 = 0; s2 < 8 && !(1 >= Math.abs(o2 - r11)); s2++) {
        let s3 = Math.floor((r11 + o2) / 2), l2 = t8.CRITICAL_PLANES[s3], c2 = t8.setCoordinate(n6, l2, i2, e11), u2 = t8.hueOf(c2);
        t8.areInCyclicOrder(a2, t10, u2) ? (i2 = c2, o2 = s3) : (n6 = c2, a2 = u2, r11 = s3);
      }
    }
    return t8.midpoint(n6, i2);
  }
  static inverseChromaticAdaptation(e10) {
    let t10 = Math.abs(e10), r10 = Math.max(0, 27.13 * t10 / (400 - t10));
    return tN(e10) * Math.pow(r10, 1 / 0.42);
  }
  static findResultByJ(e10, t10, r10) {
    let n6 = 11 * Math.sqrt(r10), a2 = t5.DEFAULT, i2 = 1 / Math.pow(1.64 - Math.pow(0.29, a2.n), 0.73), o2 = 5e4 / 13 * (0.25 * (Math.cos(e10 + 2) + 3.8)) * a2.nc * a2.ncb, s2 = Math.sin(e10), l2 = Math.cos(e10);
    for (let e11 = 0; e11 < 5; e11++) {
      let c2 = n6 / 100, u2 = Math.pow((0 === t10 || 0 === n6 ? 0 : t10 / Math.sqrt(c2)) * i2, 1 / 0.9), d2 = a2.aw * Math.pow(c2, 1 / a2.c / a2.z) / a2.nbb, f2 = 23 * (d2 + 0.305) * u2 / (23 * o2 + 11 * u2 * l2 + 108 * u2 * s2), h2 = f2 * l2, p2 = f2 * s2, m2 = (460 * d2 + 451 * h2 + 288 * p2) / 1403, g2 = (460 * d2 - 891 * h2 - 261 * p2) / 1403, v2 = (460 * d2 - 220 * h2 - 6300 * p2) / 1403, b2 = tU([t8.inverseChromaticAdaptation(m2), t8.inverseChromaticAdaptation(g2), t8.inverseChromaticAdaptation(v2)], t8.LINRGB_FROM_SCALED_DISCOUNT);
      if (b2[0] < 0 || b2[1] < 0 || b2[2] < 0) break;
      let y2 = t8.Y_FROM_LINRGB[0], x2 = t8.Y_FROM_LINRGB[1], w2 = t8.Y_FROM_LINRGB[2], k2 = y2 * b2[0] + x2 * b2[1] + w2 * b2[2];
      if (k2 <= 0) break;
      if (4 === e11 || 2e-3 > Math.abs(k2 - r10)) {
        if (b2[0] > 100.01 || b2[1] > 100.01 || b2[2] > 100.01) return 0;
        return tJ(b2);
      }
      n6 -= (k2 - r10) * n6 / (2 * k2);
    }
    return 0;
  }
  static solveToInt(e10, t10, r10) {
    var n6;
    if (t10 < 1e-4 || r10 < 1e-4 || r10 > 99.9999) return function(e11) {
      let t11 = t2(tQ(e11));
      return tK(t11, t11, t11);
    }(r10);
    (n6 = e10 % 360) < 0 && (n6 += 360);
    let a2 = (e10 = n6) / 180 * Math.PI, i2 = tQ(r10), o2 = t8.findResultByJ(a2, t10, i2);
    return 0 !== o2 ? o2 : tJ(t8.bisectToLimit(i2, a2));
  }
  static solveToCam(e10, t10, r10) {
    return t3.fromInt(t8.solveToInt(e10, t10, r10));
  }
}
t8.SCALED_DISCOUNT_FROM_LINRGB = [[0.001200833568784504, 0.002389694492170889, 2795742885861124e-19], [5891086651375999e-19, 0.0029785502573438758, 3270666104008398e-19], [10146692491640572e-20, 5364214359186694e-19, 0.0032979401770712076]], t8.LINRGB_FROM_SCALED_DISCOUNT = [[1373.2198709594231, -1100.4251190754821, -7.278681089101213], [-271.815969077903, 559.6580465940733, -32.46047482791194], [1.9622899599665666, -57.173814538844006, 308.7233197812385]], t8.Y_FROM_LINRGB = [0.2126, 0.7152, 0.0722], t8.CRITICAL_PLANES = [0.015176349177441876, 0.045529047532325624, 0.07588174588720938, 0.10623444424209313, 0.13658714259697685, 0.16693984095186062, 0.19729253930674434, 0.2276452376616281, 0.2579979360165119, 0.28835063437139563, 0.3188300904430532, 0.350925934958123, 0.3848314933096426, 0.42057480301049466, 0.458183274052838, 0.4976837250274023, 0.5391024159806381, 0.5824650784040898, 0.6277969426914107, 0.6751227633498623, 0.7244668422128921, 0.775853049866786, 0.829304845476233, 0.8848452951698498, 0.942497089126609, 1.0022825574869039, 1.0642236851973577, 1.1283421258858297, 1.1946592148522128, 1.2631959812511864, 1.3339731595349034, 1.407011200216447, 1.4823302800086415, 1.5599503113873272, 1.6398909516233677, 1.7221716113234105, 1.8068114625156377, 1.8938294463134073, 1.9832442801866852, 2.075074464868551, 2.1693382909216234, 2.2660538449872063, 2.36523901573795, 2.4669114995532007, 2.5710888059345764, 2.6777882626779785, 2.7870270208169257, 2.898822059350997, 3.0131901897720907, 3.1301480604002863, 3.2497121605402226, 3.3718988244681087, 3.4967242352587946, 3.624204428461639, 3.754355295633311, 3.887192587735158, 4.022731918402185, 4.160988767090289, 4.301978482107941, 4.445716283538092, 4.592217266055746, 4.741496401646282, 4.893568542229298, 5.048448422192488, 5.20615066083972, 5.3666897647573375, 5.5300801301023865, 5.696336044816294, 5.865471690767354, 6.037501145825082, 6.212438385869475, 6.390297286737924, 6.571091626112461, 6.7548350853498045, 6.941541251256611, 7.131223617812143, 7.323895587840543, 7.5195704746346665, 7.7182615035334345, 7.919981813454504, 8.124744458384042, 8.332562408825165, 8.543448553206703, 8.757415699253682, 8.974476575321063, 9.194643831691977, 9.417930041841839, 9.644347703669503, 9.873909240696694, 10.106627003236781, 10.342513269534024, 10.58158024687427, 10.8238400726681, 11.069304815507364, 11.317986476196008, 11.569896988756009, 11.825048221409341, 12.083451977536606, 12.345119996613247, 12.610063955123938, 12.878295467455942, 13.149826086772048, 13.42466730586372, 13.702830557985108, 13.984327217668513, 14.269168601521828, 14.55736596900856, 14.848930523210871, 15.143873411576273, 15.44220572664832, 15.743938506781891, 16.04908273684337, 16.35764934889634, 16.66964922287304, 16.985093187232053, 17.30399201960269, 17.62635644741625, 17.95219714852476, 18.281524751807332, 18.614349837764564, 18.95068293910138, 19.290534541298456, 19.633915083172692, 19.98083495742689, 20.331304511189067, 20.685334046541502, 21.042933821039977, 21.404114048223256, 21.76888489811322, 22.137256497705877, 22.50923893145328, 22.884842241736916, 23.264076429332462, 23.6469514538663, 24.033477234264016, 24.42366364919083, 24.817520537484558, 25.21505769858089, 25.61628489293138, 26.021211842414342, 26.429848230738664, 26.842203703840827, 27.258287870275353, 27.678110301598522, 28.10168053274597, 28.529008062403893, 28.96010235337422, 29.39497283293396, 29.83362889318845, 30.276079891419332, 30.722335150426627, 31.172403958865512, 31.62629557157785, 32.08401920991837, 32.54558406207592, 33.010999283389665, 33.4802739966603, 33.953417292456834, 34.430438229418264, 34.911345834551085, 35.39614910352207, 35.88485700094671, 36.37747846067349, 36.87402238606382, 37.37449765026789, 37.87891309649659, 38.38727753828926, 38.89959975977785, 39.41588851594697, 39.93615253289054, 40.460400508064545, 40.98864111053629, 41.520882981230194, 42.05713473317016, 42.597404951718396, 43.141702194811224, 43.6900349931913, 44.24241185063697, 44.798841244188324, 45.35933162437017, 45.92389141541209, 46.49252901546552, 47.065252796817916, 47.64207110610409, 48.22299226451468, 48.808024568002054, 49.3971762874833, 49.9904556690408, 50.587870934119984, 51.189430279724725, 51.79514187861014, 52.40501387947288, 53.0190544071392, 53.637271562750364, 54.259673423945976, 54.88626804504493, 55.517063457223934, 56.15206766869424, 56.79128866487574, 57.43473440856916, 58.08241284012621, 58.734331877617365, 59.39049941699807, 60.05092333227251, 60.715611475655585, 61.38457167773311, 62.057811747619894, 62.7353394731159, 63.417162620860914, 64.10328893648692, 64.79372614476921, 65.48848194977529, 66.18756403501224, 66.89098006357258, 67.59873767827808, 68.31084450182222, 69.02730813691093, 69.74813616640164, 70.47333615344107, 71.20291564160104, 71.93688215501312, 72.67524319850172, 73.41800625771542, 74.16517879925733, 74.9167682708136, 75.67278210128072, 76.43322770089146, 77.1981124613393, 77.96744375590167, 78.74122893956174, 79.51947534912904, 80.30219030335869, 81.08938110306934, 81.88105503125999, 82.67721935322541, 83.4778813166706, 84.28304815182372, 85.09272707154808, 85.90692527145302, 86.72564993000343, 87.54890820862819, 88.3767072518277, 89.2090541872801, 90.04595612594655, 90.88742016217518, 91.73345337380438, 92.58406282226491, 93.43925555268066, 94.29903859396902, 95.16341895893969, 96.03240364439274, 96.9059996312159, 97.78421388448044, 98.6670533535366, 99.55452497210776];
class t6 {
  static from(e10, t10, r10) {
    return new t6(t8.solveToInt(e10, t10, r10));
  }
  static fromInt(e10) {
    return new t6(e10);
  }
  toInt() {
    return this.argb;
  }
  get hue() {
    return this.internalHue;
  }
  set hue(e10) {
    this.setInternalState(t8.solveToInt(e10, this.internalChroma, this.internalTone));
  }
  get chroma() {
    return this.internalChroma;
  }
  set chroma(e10) {
    this.setInternalState(t8.solveToInt(this.internalHue, e10, this.internalTone));
  }
  get tone() {
    return this.internalTone;
  }
  set tone(e10) {
    this.setInternalState(t8.solveToInt(this.internalHue, this.internalChroma, e10));
  }
  constructor(e10) {
    this.argb = e10;
    let t10 = t3.fromInt(e10);
    this.internalHue = t10.hue, this.internalChroma = t10.chroma, this.internalTone = tZ(e10), this.argb = e10;
  }
  setInternalState(e10) {
    let t10 = t3.fromInt(e10);
    this.internalHue = t10.hue, this.internalChroma = t10.chroma, this.internalTone = tZ(e10), this.argb = e10;
  }
  inViewingConditions(e10) {
    let t10 = t3.fromInt(this.toInt()).xyzInViewingConditions(e10), r10 = t3.fromXyzInViewingConditions(t10[0], t10[1], t10[2], t5.make());
    return t6.from(r10.hue, r10.chroma, t0(t10[1]));
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
class t9 {
  static ratioOfTones(e10, t10) {
    return e10 = tq(0, 100, e10), t10 = tq(0, 100, t10), t9.ratioOfYs(tQ(e10), tQ(t10));
  }
  static ratioOfYs(e10, t10) {
    let r10 = e10 > t10 ? e10 : t10;
    return (r10 + 5) / ((r10 === t10 ? e10 : t10) + 5);
  }
  static lighter(e10, t10) {
    if (e10 < 0 || e10 > 100) return -1;
    let r10 = tQ(e10), n6 = t10 * (r10 + 5) - 5, a2 = t9.ratioOfYs(n6, r10), i2 = Math.abs(a2 - t10);
    if (a2 < t10 && i2 > 0.04) return -1;
    let o2 = t0(n6) + 0.4;
    return o2 < 0 || o2 > 100 ? -1 : o2;
  }
  static darker(e10, t10) {
    if (e10 < 0 || e10 > 100) return -1;
    let r10 = tQ(e10), n6 = (r10 + 5) / t10 - 5, a2 = t9.ratioOfYs(r10, n6), i2 = Math.abs(a2 - t10);
    if (a2 < t10 && i2 > 0.04) return -1;
    let o2 = t0(n6) - 0.4;
    return o2 < 0 || o2 > 100 ? -1 : o2;
  }
  static lighterUnsafe(e10, t10) {
    let r10 = t9.lighter(e10, t10);
    return r10 < 0 ? 100 : r10;
  }
  static darkerUnsafe(e10, t10) {
    let r10 = t9.darker(e10, t10);
    return r10 < 0 ? 0 : r10;
  }
}
class t7 {
  static isDisliked(e10) {
    let t10 = Math.round(e10.hue) >= 90 && 111 >= Math.round(e10.hue), r10 = Math.round(e10.chroma) > 16, n6 = 65 > Math.round(e10.tone);
    return t10 && r10 && n6;
  }
  static fixIfDisliked(e10) {
    return t7.isDisliked(e10) ? t6.from(e10.hue, e10.chroma, 70) : e10;
  }
}
class re {
  static fromPalette(e10) {
    var t10, r10;
    return new re(null !== (t10 = e10.name) && void 0 !== t10 ? t10 : "", e10.palette, e10.tone, null !== (r10 = e10.isBackground) && void 0 !== r10 && r10, e10.background, e10.secondBackground, e10.contrastCurve, e10.toneDeltaPair);
  }
  constructor(e10, t10, r10, n6, a2, i2, o2, s2) {
    if (this.name = e10, this.palette = t10, this.tone = r10, this.isBackground = n6, this.background = a2, this.secondBackground = i2, this.contrastCurve = o2, this.toneDeltaPair = s2, this.hctCache = /* @__PURE__ */ new Map(), !a2 && i2) throw Error(`Color ${e10} has secondBackgrounddefined, but background is not defined.`);
    if (!a2 && o2) throw Error(`Color ${e10} has contrastCurvedefined, but background is not defined.`);
    if (a2 && !o2) throw Error(`Color ${e10} has backgrounddefined, but contrastCurve is not defined.`);
  }
  getArgb(e10) {
    return this.getHct(e10).toInt();
  }
  getHct(e10) {
    let t10 = this.hctCache.get(e10);
    if (null != t10) return t10;
    let r10 = this.getTone(e10), n6 = this.palette(e10).getHct(r10);
    return this.hctCache.size > 4 && this.hctCache.clear(), this.hctCache.set(e10, n6), n6;
  }
  getTone(e10) {
    let t10 = e10.contrastLevel < 0;
    if (this.toneDeltaPair) {
      let r10 = this.toneDeltaPair(e10), n6 = r10.roleA, a2 = r10.roleB, i2 = r10.delta, o2 = r10.polarity, s2 = r10.stayTogether, l2 = this.background(e10).getTone(e10), c2 = "nearer" === o2 || "lighter" === o2 && !e10.isDark || "darker" === o2 && e10.isDark, u2 = c2 ? n6 : a2, d2 = c2 ? a2 : n6, f2 = this.name === u2.name, h2 = e10.isDark ? 1 : -1, p2 = u2.contrastCurve.getContrast(e10.contrastLevel), m2 = d2.contrastCurve.getContrast(e10.contrastLevel), g2 = u2.tone(e10), v2 = t9.ratioOfTones(l2, g2) >= p2 ? g2 : re.foregroundTone(l2, p2), b2 = d2.tone(e10), y2 = t9.ratioOfTones(l2, b2) >= m2 ? b2 : re.foregroundTone(l2, m2);
      return t10 && (v2 = re.foregroundTone(l2, p2), y2 = re.foregroundTone(l2, m2)), (y2 - v2) * h2 >= i2 || ((y2 = tq(0, 100, v2 + i2 * h2)) - v2) * h2 >= i2 || (v2 = tq(0, 100, y2 - i2 * h2)), 50 <= v2 && v2 < 60 ? y2 = h2 > 0 ? Math.max(y2, (v2 = 60) + i2 * h2) : Math.min(y2, (v2 = 49) + i2 * h2) : 50 <= y2 && y2 < 60 && (y2 = s2 ? h2 > 0 ? Math.max(y2, (v2 = 60) + i2 * h2) : Math.min(y2, (v2 = 49) + i2 * h2) : h2 > 0 ? 60 : 49), f2 ? v2 : y2;
    }
    {
      let r10 = this.tone(e10);
      if (null == this.background) return r10;
      let n6 = this.background(e10).getTone(e10), a2 = this.contrastCurve.getContrast(e10.contrastLevel);
      if (t9.ratioOfTones(n6, r10) >= a2 || (r10 = re.foregroundTone(n6, a2)), t10 && (r10 = re.foregroundTone(n6, a2)), this.isBackground && 50 <= r10 && r10 < 60 && (r10 = t9.ratioOfTones(49, n6) >= a2 ? 49 : 60), this.secondBackground) {
        let [t11, n7] = [this.background, this.secondBackground], [i2, o2] = [t11(e10).getTone(e10), n7(e10).getTone(e10)], [s2, l2] = [Math.max(i2, o2), Math.min(i2, o2)];
        if (t9.ratioOfTones(s2, r10) >= a2 && t9.ratioOfTones(l2, r10) >= a2) return r10;
        let c2 = t9.lighter(s2, a2), u2 = t9.darker(l2, a2), d2 = [];
        return (-1 !== c2 && d2.push(c2), -1 !== u2 && d2.push(u2), re.tonePrefersLightForeground(i2) || re.tonePrefersLightForeground(o2)) ? c2 < 0 ? 100 : c2 : 1 === d2.length ? d2[0] : u2 < 0 ? 0 : u2;
      }
      return r10;
    }
  }
  static foregroundTone(e10, t10) {
    let r10 = t9.lighterUnsafe(e10, t10), n6 = t9.darkerUnsafe(e10, t10), a2 = t9.ratioOfTones(r10, e10), i2 = t9.ratioOfTones(n6, e10);
    if (!re.tonePrefersLightForeground(e10)) return i2 >= t10 || i2 >= a2 ? n6 : r10;
    {
      let e11 = 0.1 > Math.abs(a2 - i2) && a2 < t10 && i2 < t10;
      return a2 >= t10 || a2 >= i2 || e11 ? r10 : n6;
    }
  }
  static tonePrefersLightForeground(e10) {
    return 60 > Math.round(e10);
  }
  static toneAllowsLightForeground(e10) {
    return 49 >= Math.round(e10);
  }
  static enableLightForeground(e10) {
    return re.tonePrefersLightForeground(e10) && !re.toneAllowsLightForeground(e10) ? 49 : e10;
  }
}
(U = Q || (Q = {}))[U.MONOCHROME = 0] = "MONOCHROME", U[U.NEUTRAL = 1] = "NEUTRAL", U[U.TONAL_SPOT = 2] = "TONAL_SPOT", U[U.VIBRANT = 3] = "VIBRANT", U[U.EXPRESSIVE = 4] = "EXPRESSIVE", U[U.FIDELITY = 5] = "FIDELITY", U[U.CONTENT = 6] = "CONTENT", U[U.RAINBOW = 7] = "RAINBOW", U[U.FRUIT_SALAD = 8] = "FRUIT_SALAD";
class rt {
  constructor(e10, t10, r10, n6) {
    this.low = e10, this.normal = t10, this.medium = r10, this.high = n6;
  }
  getContrast(e10) {
    var t10, r10, n6, a2, i2, o2, s2, l2, c2;
    return e10 <= -1 ? this.low : e10 < 0 ? (t10 = this.low, r10 = this.normal, (1 - (n6 = (e10 - -1) / 1)) * t10 + n6 * r10) : e10 < 0.5 ? (a2 = this.normal, i2 = this.medium, (1 - (o2 = (e10 - 0) / 0.5)) * a2 + o2 * i2) : e10 < 1 ? (s2 = this.medium, l2 = this.high, (1 - (c2 = (e10 - 0.5) / 0.5)) * s2 + c2 * l2) : this.high;
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
class rr {
  constructor(e10, t10, r10, n6, a2) {
    this.roleA = e10, this.roleB = t10, this.delta = r10, this.polarity = n6, this.stayTogether = a2;
  }
}
function rn(e10) {
  return e10.variant === Q.FIDELITY || e10.variant === Q.CONTENT;
}
function ra(e10) {
  return e10.variant === Q.MONOCHROME;
}
function ri(e10, t10) {
  let r10 = e10.inViewingConditions(t5.make(void 0, void 0, t10.isDark ? 30 : 80, void 0, void 0));
  return re.tonePrefersLightForeground(e10.tone) && !re.toneAllowsLightForeground(r10.tone) ? re.enableLightForeground(e10.tone) : re.enableLightForeground(r10.tone);
}
class ro {
  static highestSurface(e10) {
    return e10.isDark ? ro.surfaceBright : ro.surfaceDim;
  }
}
ro.contentAccentToneDelta = 15, ro.primaryPaletteKeyColor = re.fromPalette({ name: "primary_palette_key_color", palette: (e10) => e10.primaryPalette, tone: (e10) => e10.primaryPalette.keyColor.tone }), ro.secondaryPaletteKeyColor = re.fromPalette({ name: "secondary_palette_key_color", palette: (e10) => e10.secondaryPalette, tone: (e10) => e10.secondaryPalette.keyColor.tone }), ro.tertiaryPaletteKeyColor = re.fromPalette({ name: "tertiary_palette_key_color", palette: (e10) => e10.tertiaryPalette, tone: (e10) => e10.tertiaryPalette.keyColor.tone }), ro.neutralPaletteKeyColor = re.fromPalette({ name: "neutral_palette_key_color", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.neutralPalette.keyColor.tone }), ro.neutralVariantPaletteKeyColor = re.fromPalette({ name: "neutral_variant_palette_key_color", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.neutralVariantPalette.keyColor.tone }), ro.background = re.fromPalette({ name: "background", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 6 : 98, isBackground: true }), ro.onBackground = re.fromPalette({ name: "on_background", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 90 : 10, background: (e10) => ro.background, contrastCurve: new rt(3, 3, 4.5, 7) }), ro.surface = re.fromPalette({ name: "surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 6 : 98, isBackground: true }), ro.surfaceDim = re.fromPalette({ name: "surface_dim", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 6 : 87, isBackground: true }), ro.surfaceBright = re.fromPalette({ name: "surface_bright", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 24 : 98, isBackground: true }), ro.surfaceContainerLowest = re.fromPalette({ name: "surface_container_lowest", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 4 : 100, isBackground: true }), ro.surfaceContainerLow = re.fromPalette({ name: "surface_container_low", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 10 : 96, isBackground: true }), ro.surfaceContainer = re.fromPalette({ name: "surface_container", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 12 : 94, isBackground: true }), ro.surfaceContainerHigh = re.fromPalette({ name: "surface_container_high", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 17 : 92, isBackground: true }), ro.surfaceContainerHighest = re.fromPalette({ name: "surface_container_highest", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 22 : 90, isBackground: true }), ro.onSurface = re.fromPalette({ name: "on_surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 90 : 10, background: (e10) => ro.highestSurface(e10), contrastCurve: new rt(4.5, 7, 11, 21) }), ro.surfaceVariant = re.fromPalette({ name: "surface_variant", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 30 : 90, isBackground: true }), ro.onSurfaceVariant = re.fromPalette({ name: "on_surface_variant", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 80 : 30, background: (e10) => ro.highestSurface(e10), contrastCurve: new rt(3, 4.5, 7, 11) }), ro.inverseSurface = re.fromPalette({ name: "inverse_surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 90 : 20 }), ro.inverseOnSurface = re.fromPalette({ name: "inverse_on_surface", palette: (e10) => e10.neutralPalette, tone: (e10) => e10.isDark ? 20 : 95, background: (e10) => ro.inverseSurface, contrastCurve: new rt(4.5, 7, 11, 21) }), ro.outline = re.fromPalette({ name: "outline", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 60 : 50, background: (e10) => ro.highestSurface(e10), contrastCurve: new rt(1.5, 3, 4.5, 7) }), ro.outlineVariant = re.fromPalette({ name: "outline_variant", palette: (e10) => e10.neutralVariantPalette, tone: (e10) => e10.isDark ? 30 : 80, background: (e10) => ro.highestSurface(e10), contrastCurve: new rt(1, 1, 3, 7) }), ro.shadow = re.fromPalette({ name: "shadow", palette: (e10) => e10.neutralPalette, tone: (e10) => 0 }), ro.scrim = re.fromPalette({ name: "scrim", palette: (e10) => e10.neutralPalette, tone: (e10) => 0 }), ro.surfaceTint = re.fromPalette({ name: "surface_tint", palette: (e10) => e10.primaryPalette, tone: (e10) => e10.isDark ? 80 : 40, isBackground: true }), ro.primary = re.fromPalette({ name: "primary", palette: (e10) => e10.primaryPalette, tone: (e10) => ra(e10) ? e10.isDark ? 100 : 0 : e10.isDark ? 80 : 40, isBackground: true, background: (e10) => ro.highestSurface(e10), contrastCurve: new rt(3, 4.5, 7, 11), toneDeltaPair: (e10) => new rr(ro.primaryContainer, ro.primary, 15, "nearer", false) }), ro.onPrimary = re.fromPalette({ name: "on_primary", palette: (e10) => e10.primaryPalette, tone: (e10) => ra(e10) ? e10.isDark ? 10 : 90 : e10.isDark ? 20 : 100, background: (e10) => ro.primary, contrastCurve: new rt(4.5, 7, 11, 21) }), ro.primaryContainer = re.fromPalette({ name: "primary_container", palette: (e10) => e10.primaryPalette, tone: (e10) => rn(e10) ? ri(e10.sourceColorHct, e10) : ra(e10) ? e10.isDark ? 85 : 25 : e10.isDark ? 30 : 90, isBackground: true, background: (e10) => ro.highestSurface(e10), contrastCurve: new rt(1, 1, 3, 7), toneDeltaPair: (e10) => new rr(ro.primaryContainer, ro.primary, 15, "nearer", false) }), ro.onPrimaryContainer = re.fromPalette({ name: "on_primary_container", palette: (e10) => e10.primaryPalette, tone: (e10) => rn(e10) ? re.foregroundTone(ro.primaryContainer.tone(e10), 4.5) : ra(e10) ? e10.isDark ? 0 : 100 : e10.isDark ? 90 : 10, background: (e10) => ro.primaryContainer, contrastCurve: new rt(4.5, 7, 11, 21) }), ro.inversePrimary = re.fromPalette({ name: "inverse_primary", palette: (e10) => e10.primaryPalette, tone: (e10) => e10.isDark ? 40 : 80, background: (e10) => ro.inverseSurface, contrastCurve: new rt(3, 4.5, 7, 11) }), ro.secondary = re.fromPalette({ name: "secondary", palette: (e10) => e10.secondaryPalette, tone: (e10) => e10.isDark ? 80 : 40, isBackground: true, background: (e10) => ro.highestSurface(e10), contrastCurve: new rt(3, 4.5, 7, 11), toneDeltaPair: (e10) => new rr(ro.secondaryContainer, ro.secondary, 15, "nearer", false) }), ro.onSecondary = re.fromPalette({ name: "on_secondary", palette: (e10) => e10.secondaryPalette, tone: (e10) => ra(e10) ? e10.isDark ? 10 : 100 : e10.isDark ? 20 : 100, background: (e10) => ro.secondary, contrastCurve: new rt(4.5, 7, 11, 21) }), ro.secondaryContainer = re.fromPalette({ name: "secondary_container", palette: (e10) => e10.secondaryPalette, tone: (e10) => {
  let t10 = e10.isDark ? 30 : 90;
  if (ra(e10)) return e10.isDark ? 30 : 85;
  if (!rn(e10)) return t10;
  let r10 = function(e11, t11, r11, n6) {
    let a2 = r11, i2 = t6.from(e11, t11, r11);
    if (i2.chroma < t11) {
      let r12 = i2.chroma;
      for (; i2.chroma < t11; ) {
        a2 += n6 ? -1 : 1;
        let o2 = t6.from(e11, t11, a2);
        if (r12 > o2.chroma || 0.4 > Math.abs(o2.chroma - t11)) break;
        Math.abs(o2.chroma - t11) < Math.abs(i2.chroma - t11) && (i2 = o2), r12 = Math.max(r12, o2.chroma);
      }
    }
    return a2;
  }(e10.secondaryPalette.hue, e10.secondaryPalette.chroma, t10, !e10.isDark);
  return ri(e10.secondaryPalette.getHct(r10), e10);
}, isBackground: true, background: (e10) => ro.highestSurface(e10), contrastCurve: new rt(1, 1, 3, 7), toneDeltaPair: (e10) => new rr(ro.secondaryContainer, ro.secondary, 15, "nearer", false) }), ro.onSecondaryContainer = re.fromPalette({ name: "on_secondary_container", palette: (e10) => e10.secondaryPalette, tone: (e10) => rn(e10) ? re.foregroundTone(ro.secondaryContainer.tone(e10), 4.5) : e10.isDark ? 90 : 10, background: (e10) => ro.secondaryContainer, contrastCurve: new rt(4.5, 7, 11, 21) }), ro.tertiary = re.fromPalette({ name: "tertiary", palette: (e10) => e10.tertiaryPalette, tone: (e10) => ra(e10) ? e10.isDark ? 90 : 25 : e10.isDark ? 80 : 40, isBackground: true, background: (e10) => ro.highestSurface(e10), contrastCurve: new rt(3, 4.5, 7, 11), toneDeltaPair: (e10) => new rr(ro.tertiaryContainer, ro.tertiary, 15, "nearer", false) }), ro.onTertiary = re.fromPalette({ name: "on_tertiary", palette: (e10) => e10.tertiaryPalette, tone: (e10) => ra(e10) ? e10.isDark ? 10 : 90 : e10.isDark ? 20 : 100, background: (e10) => ro.tertiary, contrastCurve: new rt(4.5, 7, 11, 21) }), ro.tertiaryContainer = re.fromPalette({ name: "tertiary_container", palette: (e10) => e10.tertiaryPalette, tone: (e10) => {
  if (ra(e10)) return e10.isDark ? 60 : 49;
  if (!rn(e10)) return e10.isDark ? 30 : 90;
  let t10 = ri(e10.tertiaryPalette.getHct(e10.sourceColorHct.tone), e10), r10 = e10.tertiaryPalette.getHct(t10);
  return t7.fixIfDisliked(r10).tone;
}, isBackground: true, background: (e10) => ro.highestSurface(e10), contrastCurve: new rt(1, 1, 3, 7), toneDeltaPair: (e10) => new rr(ro.tertiaryContainer, ro.tertiary, 15, "nearer", false) }), ro.onTertiaryContainer = re.fromPalette({ name: "on_tertiary_container", palette: (e10) => e10.tertiaryPalette, tone: (e10) => ra(e10) ? e10.isDark ? 0 : 100 : rn(e10) ? re.foregroundTone(ro.tertiaryContainer.tone(e10), 4.5) : e10.isDark ? 90 : 10, background: (e10) => ro.tertiaryContainer, contrastCurve: new rt(4.5, 7, 11, 21) }), ro.error = re.fromPalette({ name: "error", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 80 : 40, isBackground: true, background: (e10) => ro.highestSurface(e10), contrastCurve: new rt(3, 4.5, 7, 11), toneDeltaPair: (e10) => new rr(ro.errorContainer, ro.error, 15, "nearer", false) }), ro.onError = re.fromPalette({ name: "on_error", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 20 : 100, background: (e10) => ro.error, contrastCurve: new rt(4.5, 7, 11, 21) }), ro.errorContainer = re.fromPalette({ name: "error_container", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 30 : 90, isBackground: true, background: (e10) => ro.highestSurface(e10), contrastCurve: new rt(1, 1, 3, 7), toneDeltaPair: (e10) => new rr(ro.errorContainer, ro.error, 15, "nearer", false) }), ro.onErrorContainer = re.fromPalette({ name: "on_error_container", palette: (e10) => e10.errorPalette, tone: (e10) => e10.isDark ? 90 : 10, background: (e10) => ro.errorContainer, contrastCurve: new rt(4.5, 7, 11, 21) }), ro.primaryFixed = re.fromPalette({ name: "primary_fixed", palette: (e10) => e10.primaryPalette, tone: (e10) => ra(e10) ? 40 : 90, isBackground: true, background: (e10) => ro.highestSurface(e10), contrastCurve: new rt(1, 1, 3, 7), toneDeltaPair: (e10) => new rr(ro.primaryFixed, ro.primaryFixedDim, 10, "lighter", true) }), ro.primaryFixedDim = re.fromPalette({ name: "primary_fixed_dim", palette: (e10) => e10.primaryPalette, tone: (e10) => ra(e10) ? 30 : 80, isBackground: true, background: (e10) => ro.highestSurface(e10), contrastCurve: new rt(1, 1, 3, 7), toneDeltaPair: (e10) => new rr(ro.primaryFixed, ro.primaryFixedDim, 10, "lighter", true) }), ro.onPrimaryFixed = re.fromPalette({ name: "on_primary_fixed", palette: (e10) => e10.primaryPalette, tone: (e10) => ra(e10) ? 100 : 10, background: (e10) => ro.primaryFixedDim, secondBackground: (e10) => ro.primaryFixed, contrastCurve: new rt(4.5, 7, 11, 21) }), ro.onPrimaryFixedVariant = re.fromPalette({ name: "on_primary_fixed_variant", palette: (e10) => e10.primaryPalette, tone: (e10) => ra(e10) ? 90 : 30, background: (e10) => ro.primaryFixedDim, secondBackground: (e10) => ro.primaryFixed, contrastCurve: new rt(3, 4.5, 7, 11) }), ro.secondaryFixed = re.fromPalette({ name: "secondary_fixed", palette: (e10) => e10.secondaryPalette, tone: (e10) => ra(e10) ? 80 : 90, isBackground: true, background: (e10) => ro.highestSurface(e10), contrastCurve: new rt(1, 1, 3, 7), toneDeltaPair: (e10) => new rr(ro.secondaryFixed, ro.secondaryFixedDim, 10, "lighter", true) }), ro.secondaryFixedDim = re.fromPalette({ name: "secondary_fixed_dim", palette: (e10) => e10.secondaryPalette, tone: (e10) => ra(e10) ? 70 : 80, isBackground: true, background: (e10) => ro.highestSurface(e10), contrastCurve: new rt(1, 1, 3, 7), toneDeltaPair: (e10) => new rr(ro.secondaryFixed, ro.secondaryFixedDim, 10, "lighter", true) }), ro.onSecondaryFixed = re.fromPalette({ name: "on_secondary_fixed", palette: (e10) => e10.secondaryPalette, tone: (e10) => 10, background: (e10) => ro.secondaryFixedDim, secondBackground: (e10) => ro.secondaryFixed, contrastCurve: new rt(4.5, 7, 11, 21) }), ro.onSecondaryFixedVariant = re.fromPalette({ name: "on_secondary_fixed_variant", palette: (e10) => e10.secondaryPalette, tone: (e10) => ra(e10) ? 25 : 30, background: (e10) => ro.secondaryFixedDim, secondBackground: (e10) => ro.secondaryFixed, contrastCurve: new rt(3, 4.5, 7, 11) }), ro.tertiaryFixed = re.fromPalette({ name: "tertiary_fixed", palette: (e10) => e10.tertiaryPalette, tone: (e10) => ra(e10) ? 40 : 90, isBackground: true, background: (e10) => ro.highestSurface(e10), contrastCurve: new rt(1, 1, 3, 7), toneDeltaPair: (e10) => new rr(ro.tertiaryFixed, ro.tertiaryFixedDim, 10, "lighter", true) }), ro.tertiaryFixedDim = re.fromPalette({ name: "tertiary_fixed_dim", palette: (e10) => e10.tertiaryPalette, tone: (e10) => ra(e10) ? 30 : 80, isBackground: true, background: (e10) => ro.highestSurface(e10), contrastCurve: new rt(1, 1, 3, 7), toneDeltaPair: (e10) => new rr(ro.tertiaryFixed, ro.tertiaryFixedDim, 10, "lighter", true) }), ro.onTertiaryFixed = re.fromPalette({ name: "on_tertiary_fixed", palette: (e10) => e10.tertiaryPalette, tone: (e10) => ra(e10) ? 100 : 10, background: (e10) => ro.tertiaryFixedDim, secondBackground: (e10) => ro.tertiaryFixed, contrastCurve: new rt(4.5, 7, 11, 21) }), ro.onTertiaryFixedVariant = re.fromPalette({ name: "on_tertiary_fixed_variant", palette: (e10) => e10.tertiaryPalette, tone: (e10) => ra(e10) ? 90 : 30, background: (e10) => ro.tertiaryFixedDim, secondBackground: (e10) => ro.tertiaryFixed, contrastCurve: new rt(3, 4.5, 7, 11) });
class rs {
  static fromInt(e10) {
    let t10 = t6.fromInt(e10);
    return rs.fromHct(t10);
  }
  static fromHct(e10) {
    return new rs(e10.hue, e10.chroma, e10);
  }
  static fromHueAndChroma(e10, t10) {
    return new rs(e10, t10, rs.createKeyColor(e10, t10));
  }
  constructor(e10, t10, r10) {
    this.hue = e10, this.chroma = t10, this.keyColor = r10, this.cache = /* @__PURE__ */ new Map();
  }
  static createKeyColor(e10, t10) {
    let r10 = t6.from(e10, t10, 50), n6 = Math.abs(r10.chroma - t10);
    for (let a2 = 1; a2 < 50 && Math.round(t10) !== Math.round(r10.chroma); a2 += 1) {
      let i2 = t6.from(e10, t10, 50 + a2), o2 = Math.abs(i2.chroma - t10);
      o2 < n6 && (n6 = o2, r10 = i2);
      let s2 = t6.from(e10, t10, 50 - a2), l2 = Math.abs(s2.chroma - t10);
      l2 < n6 && (n6 = l2, r10 = s2);
    }
    return r10;
  }
  tone(e10) {
    let t10 = this.cache.get(e10);
    return void 0 === t10 && (t10 = t6.from(this.hue, this.chroma, e10).toInt(), this.cache.set(e10, t10)), t10;
  }
  getHct(e10) {
    return t6.fromInt(this.tone(e10));
  }
}
class rl {
  static of(e10) {
    return new rl(e10, false);
  }
  static contentOf(e10) {
    return new rl(e10, true);
  }
  static fromColors(e10) {
    return rl.createPaletteFromColors(false, e10);
  }
  static contentFromColors(e10) {
    return rl.createPaletteFromColors(true, e10);
  }
  static createPaletteFromColors(e10, t10) {
    let r10 = new rl(t10.primary, e10);
    if (t10.secondary) {
      let n6 = new rl(t10.secondary, e10);
      r10.a2 = n6.a1;
    }
    if (t10.tertiary) {
      let n6 = new rl(t10.tertiary, e10);
      r10.a3 = n6.a1;
    }
    if (t10.error) {
      let n6 = new rl(t10.error, e10);
      r10.error = n6.a1;
    }
    if (t10.neutral) {
      let n6 = new rl(t10.neutral, e10);
      r10.n1 = n6.n1;
    }
    if (t10.neutralVariant) {
      let n6 = new rl(t10.neutralVariant, e10);
      r10.n2 = n6.n2;
    }
    return r10;
  }
  constructor(e10, t10) {
    let r10 = t6.fromInt(e10), n6 = r10.hue, a2 = r10.chroma;
    t10 ? (this.a1 = rs.fromHueAndChroma(n6, a2), this.a2 = rs.fromHueAndChroma(n6, a2 / 3), this.a3 = rs.fromHueAndChroma(n6 + 60, a2 / 2), this.n1 = rs.fromHueAndChroma(n6, Math.min(a2 / 12, 4)), this.n2 = rs.fromHueAndChroma(n6, Math.min(a2 / 6, 8))) : (this.a1 = rs.fromHueAndChroma(n6, Math.max(48, a2)), this.a2 = rs.fromHueAndChroma(n6, 16), this.a3 = rs.fromHueAndChroma(n6 + 60, 24), this.n1 = rs.fromHueAndChroma(n6, 4), this.n2 = rs.fromHueAndChroma(n6, 8)), this.error = rs.fromHueAndChroma(25, 84);
  }
}
function rc(e10) {
  let t10 = 3 === (e10 = e10.replace("#", "")).length, r10 = 6 === e10.length, n6 = 8 === e10.length;
  if (!t10 && !r10 && !n6) throw Error("unexpected hex " + e10);
  let a2 = 0, i2 = 0, o2 = 0;
  return t10 ? (a2 = ru(e10.slice(0, 1).repeat(2)), i2 = ru(e10.slice(1, 2).repeat(2)), o2 = ru(e10.slice(2, 3).repeat(2))) : r10 ? (a2 = ru(e10.slice(0, 2)), i2 = ru(e10.slice(2, 4)), o2 = ru(e10.slice(4, 6))) : n6 && (a2 = ru(e10.slice(2, 4)), i2 = ru(e10.slice(4, 6)), o2 = ru(e10.slice(6, 8))), (-16777216 | (255 & a2) << 16 | (255 & i2) << 8 | 255 & o2) >>> 0;
}
function ru(e10) {
  return parseInt(e10, 16);
}
let rd = { 0: true, 10: true, 20: true, 30: true, 40: true, 50: true, 60: true, 70: true, 80: true, 90: true, 95: true, 100: true }, rf = (e10) => {
  let t10 = { r: e10 >> 16 & 255, g: e10 >> 8 & 255, b: 255 & e10 };
  return [t10.r, t10.g, t10.b];
}, rh = (e10) => ({ primary: true, secondary: true, tertiary: true, error: true, warning: true, success: true })[e10];
const _rp = class _rp {
  constructor(e10) {
    this.seeds = e10;
  }
  static createRoleColorRuleBuilder(e10) {
    let t10 = {}, r10 = new Proxy({}, { get: (n6, a2) => "build" == a2 ? () => t10 : (n7, a3) => (t10[`${n7}${e10 ? `:${e10}` : ""}`] = a3, r10) });
    return r10;
  }
  static createRoleColorSourcePicker() {
    return new Proxy({}, { get: (e10, t10) => (e11) => [t10, e11] });
  }
  normalizeRoleRules() {
    let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t10 = _rp.createRoleColorSourcePicker(), r10 = _rp.createRoleColorRuleBuilder().rule("shadow", t10.neutral(0)).rule("scrim", t10.neutral(0)).rule("outline", t10.neutralVariant(87)).rule("outline-variant", t10.neutralVariant(80)).rule("surface", t10.neutral(99)).rule("on-surface", t10.neutral(10)).rule("surface-variant", t10.neutralVariant(90)).rule("on-surface-variant", t10.neutralVariant(30)).rule("surface-dim", t10.neutral(87)).rule("surface-bright", t10.neutral(98)).rule("surface-container-lowest", t10.neutral(100)).rule("surface-container-low", t10.neutral(96)).rule("surface-container", t10.neutral(94)).rule("surface-container-high", t10.neutral(92)).rule("surface-container-highest", t10.neutral(90)).rule("inverse-surface", t10.neutral(20)).rule("inverse-on-surface", t10.neutral(95)).rule("inverse-primary", t10.primary(80)), n6 = _rp.createRoleColorRuleBuilder("dark").rule("shadow", t10.neutral(0)).rule("scrim", t10.neutral(0)).rule("outline", t10.neutralVariant(60)).rule("outline-variant", t10.neutralVariant(30)).rule("surface", t10.neutral(10)).rule("on-surface", t10.neutral(90)).rule("surface-variant", t10.neutralVariant(30)).rule("on-surface-variant", t10.neutralVariant(80)).rule("surface-dim", t10.neutral(6)).rule("surface-bright", t10.neutral(24)).rule("surface-container-lowest", t10.neutral(4)).rule("surface-container-low", t10.neutral(10)).rule("surface-container", t10.neutral(12)).rule("surface-container-high", t10.neutral(17)).rule("surface-container-highest", t10.neutral(22)).rule("inverse-surface", t10.neutral(90)).rule("inverse-on-surface", t10.neutral(20)).rule("inverse-primary", t10.primary(40));
    for (let e11 in this.seeds) e11.startsWith("neutral") || (r10 = r10.rule(e11, t10[e11](40)).rule(`on-${e11}`, t10[e11](100)).rule(`${e11}-container`, t10[e11](90)).rule(`on-${e11}-container`, t10[e11](10)), n6 = n6.rule(e11, t10[e11](80)).rule(`on-${e11}`, t10[e11](20)).rule(`${e11}-container`, t10[e11](30)).rule(`on-${e11}-container`, t10[e11](90)));
    return { ...r10.build(), ...n6.build(), ...e10 };
  }
  getThemeRoleColors(e10) {
    let t10 = {}, r10 = {};
    for (let [i2, [o2, s2]] of Object.entries(e10)) if (this.seeds[o2]) {
      var n6, a2;
      if (i2.endsWith(":dark")) {
        r10[i2.split(":")[0]] = rd[s2] ? `${String(o2)}.${s2}` : null === (a2 = this.seeds[o2]) || void 0 === a2 ? void 0 : a2.tone(s2);
        continue;
      }
      t10[i2] = rd[s2] ? `${String(o2)}.${s2}` : null === (n6 = this.seeds[o2]) || void 0 === n6 ? void 0 : n6.tone(s2);
    }
    return [t10, r10];
  }
  toDesignTokens() {
    let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t10 = this.normalizeRoleRules(e10), [r10, n6] = this.getThemeRoleColors(t10), a2 = {}, i2 = {};
    for (let e11 in r10) if (a2[`${e11}`] = { _default: V(r10[e11]) ? rf(r10[e11]) : r10[e11], _dark: V(n6[e11]) ? rf(n6[e11]) : n6[e11] }, rh(e11) && (i2[`${e11}`] = tO.mixin({ bgColor: `sys.${e11}`, color: `sys.on-${e11}` }), i2[`${e11}-container`] = tO.mixin({ bgColor: `sys.${e11}-container`, color: `sys.on-${e11}-container` })), e11.startsWith("surface")) {
      if (e11.includes("container")) {
        i2[`${e11}`] = tO.mixin({ bgColor: `sys.${e11}`, color: "sys.on-surface" });
        continue;
      }
      i2[`${e11}`] = tO.mixin({ bgColor: `sys.${e11}`, color: "sys.on-surface" }), i2[`on-${e11}`] = tO.mixin({ bgColor: `sys.on-${e11}`, color: "sys.inverse-on-surface" });
    }
    let o2 = (e11) => Object.keys(rd).reduce((t11, r11) => Object.assign(t11, { [r11]: rf(e11.tone(parseInt(r11))) }), {});
    return { color: tO.color({ ...I(this.seeds, (e11) => o2(e11)), white: [255, 255, 255], black: [0, 0, 0], sys: a2 }), containerStyle: tO.customMixin("containerStyle", { sys: i2 }) };
  }
};
__publicField(_rp, "toHEX", (e10) => `#${rf(e10).map((e11) => H(e11.toString(16), 2, "0")).join("")}`);
__publicField(_rp, "fromColors", (e10) => {
  let { primary: t10, secondary: r10, tertiary: n6, neutral: a2, neutralVariant: i2, error: o2, ...s2 } = e10, l2 = rl.contentFromColors({ primary: rc(t10), secondary: r10 ? rc(r10) : void 0, tertiary: n6 ? rc(n6) : void 0, error: o2 ? rc(o2) : void 0 });
  return a2 && (l2.n1 = rs.fromHueAndChroma(rc(a2), 4)), i2 && (l2.n2 = rs.fromHueAndChroma(rc(i2), 8)), new _rp({ primary: l2.a1, secondary: l2.a2, tertiary: l2.a3, neutral: l2.n1, neutralVariant: l2.n2, error: l2.error, ...I(s2, (e11) => rs.fromInt(rc(e11))) });
});
let rp = _rp;
let rm = tO.rounded({ xs: 4, sm: 8, md: 12, lg: 16, xl: 28 }), rg = { font: tO.font({ brand: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', plain: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', code: "'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace" }), fontWeight: tO.fontWeight({ regular: 400, medium: 500, bold: 700 }), textStyle: tO.customMixin("textStyle", { sys: { "display-large": tO.mixin({ lineHeight: 64, fontSize: 57, letterSpacing: -0.25, fontWeight: "regular", font: "brand" }), "display-medium": tO.mixin({ lineHeight: 52, fontSize: 45, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "display-small": tO.mixin({ lineHeight: 44, fontSize: 36, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-large": tO.mixin({ lineHeight: 40, fontSize: 32, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-medium": tO.mixin({ lineHeight: 36, fontSize: 28, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-small": tO.mixin({ lineHeight: 32, fontSize: 24, letterSpacing: 0, fontWeight: "regular", font: "plain" }), "title-large": tO.mixin({ lineHeight: 28, fontSize: 22, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "title-medium": tO.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.15, fontWeight: "medium", font: "plain" }), "title-small": tO.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-large": tO.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-medium": tO.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "label-small": tO.mixin({ lineHeight: 16, fontSize: 11, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "body-large": tO.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.5, fontWeight: "regular", font: "plain" }), "body-medium": tO.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.25, fontWeight: "regular", font: "plain" }), "body-small": tO.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.4, fontWeight: "regular", font: "plain" }) } }) }, rv = rp.fromColors({ primary: "#1270f5", secondary: "#8a90a5", tertiary: "#b58391", neutral: "#5e5e5e", error: "#d93f23", warning: "#e69c00", success: "#5ac220" }), rb = { ...rg, ...tW, ...tV, rounded: rm, ...rv.toDesignTokens({}) }, ry = tj.create(rb, { varPrefix: "vk" }), rx = a(() => ry, { name: "Theme" });
var rw = function() {
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
      var n6 = function(e12) {
        if (e12.sheet) return e12.sheet;
        for (var t12 = 0; t12 < document.styleSheets.length; t12++) if (document.styleSheets[t12].ownerNode === e12) return document.styleSheets[t12];
      }(r10);
      try {
        n6.insertRule(e11, n6.cssRules.length);
      } catch (e12) {
      }
    } else r10.appendChild(document.createTextNode(e11));
    this.ctr++;
  }, t10.flush = function() {
    this.tags.forEach(function(e11) {
      var t11;
      return null == (t11 = e11.parentNode) ? void 0 : t11.removeChild(e11);
    }), this.tags = [], this.ctr = 0;
  }, e10;
}(), rk = "-ms-", rM = "-moz-", rC = "-webkit-", rP = "comm", r_ = "rule", rS = "decl", rO = "@keyframes", rD = Math.abs, rR = String.fromCharCode, r$ = Object.assign;
function rT(e10, t10, r10) {
  return e10.replace(t10, r10);
}
function rA(e10, t10) {
  return e10.indexOf(t10);
}
function rI(e10, t10) {
  return 0 | e10.charCodeAt(t10);
}
function rL(e10, t10, r10) {
  return e10.slice(t10, r10);
}
function rF(e10) {
  return e10.length;
}
function rB(e10, t10) {
  return t10.push(e10), e10;
}
var rj = 1, rV = 1, rE = 0, rH = 0, rz = 0, rW = "";
function rN(e10, t10, r10, n6, a2, i2, o2) {
  return { value: e10, root: t10, parent: r10, type: n6, props: a2, children: i2, line: rj, column: rV, length: o2, return: "" };
}
function rq(e10, t10) {
  return r$(rN("", null, null, "", null, null, 0), e10, { length: -e10.length }, t10);
}
function rU() {
  return rz = rH < rE ? rI(rW, rH++) : 0, rV++, 10 === rz && (rV = 1, rj++), rz;
}
function rG() {
  return rI(rW, rH);
}
function rY(e10) {
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
function rX(e10) {
  return rj = rV = 1, rE = rF(rW = e10), rH = 0, [];
}
function rK(e10) {
  var t10, r10;
  return (t10 = rH - 1, r10 = function e11(t11) {
    for (; rU(); ) switch (rz) {
      case t11:
        return rH;
      case 34:
      case 39:
        34 !== t11 && 39 !== t11 && e11(rz);
        break;
      case 40:
        41 === t11 && e11(t11);
        break;
      case 92:
        rU();
    }
    return rH;
  }(91 === e10 ? e10 + 2 : 40 === e10 ? e10 + 1 : e10), rL(rW, t10, r10)).trim();
}
function rJ(e10, t10, r10, n6, a2, i2, o2, s2, l2, c2, u2) {
  for (var d2 = a2 - 1, f2 = 0 === a2 ? i2 : [""], h2 = f2.length, p2 = 0, m2 = 0, g2 = 0; p2 < n6; ++p2) for (var v2 = 0, b2 = rL(e10, d2 + 1, d2 = rD(m2 = o2[p2])), y2 = e10; v2 < h2; ++v2) (y2 = (m2 > 0 ? f2[v2] + " " + b2 : rT(b2, /&\f/g, f2[v2])).trim()) && (l2[g2++] = y2);
  return rN(e10, t10, r10, 0 === a2 ? r_ : s2, l2, c2, u2);
}
function rZ(e10, t10, r10, n6) {
  return rN(e10, t10, r10, rS, rL(e10, 0, n6), rL(e10, n6 + 1, -1), n6);
}
function rQ(e10, t10) {
  for (var r10 = "", n6 = e10.length, a2 = 0; a2 < n6; a2++) r10 += t10(e10[a2], a2, e10, t10) || "";
  return r10;
}
function r0(e10, t10, r10, n6) {
  switch (e10.type) {
    case "@layer":
      if (e10.children.length) break;
    case "@import":
    case rS:
      return e10.return = e10.return || e10.value;
    case rP:
      return "";
    case rO:
      return e10.return = e10.value + "{" + rQ(e10.children, n6) + "}";
    case r_:
      e10.value = e10.props.join(",");
  }
  return rF(r10 = rQ(e10.children, n6)) ? e10.return = e10.value + "{" + r10 + "}" : "";
}
var r1 = function(e10, t10, r10) {
  for (var n6 = 0, a2 = 0; n6 = a2, a2 = rG(), 38 === n6 && 12 === a2 && (t10[r10] = 1), !rY(a2); ) rU();
  return rL(rW, e10, rH);
}, r2 = function(e10, t10) {
  var r10 = -1, n6 = 44;
  do
    switch (rY(n6)) {
      case 0:
        38 === n6 && 12 === rG() && (t10[r10] = 1), e10[r10] += r1(rH - 1, t10, r10);
        break;
      case 2:
        e10[r10] += rK(n6);
        break;
      case 4:
        if (44 === n6) {
          e10[++r10] = 58 === rG() ? "&\f" : "", t10[r10] = e10[r10].length;
          break;
        }
      default:
        e10[r10] += rR(n6);
    }
  while (n6 = rU());
  return e10;
}, r4 = function(e10, t10) {
  var r10;
  return r10 = r2(rX(e10), t10), rW = "", r10;
}, r5 = /* @__PURE__ */ new WeakMap(), r3 = function(e10) {
  if ("rule" === e10.type && e10.parent && !(e10.length < 1)) {
    for (var t10 = e10.value, r10 = e10.parent, n6 = e10.column === r10.column && e10.line === r10.line; "rule" !== r10.type; ) if (!(r10 = r10.parent)) return;
    if ((1 !== e10.props.length || 58 === t10.charCodeAt(0) || r5.get(r10)) && !n6) {
      r5.set(e10, true);
      for (var a2 = [], i2 = r4(t10, a2), o2 = r10.props, s2 = 0, l2 = 0; s2 < i2.length; s2++) for (var c2 = 0; c2 < o2.length; c2++, l2++) e10.props[l2] = a2[s2] ? i2[s2].replace(/&\f/g, o2[c2]) : o2[c2] + " " + i2[s2];
    }
  }
}, r8 = function(e10) {
  if ("decl" === e10.type) {
    var t10 = e10.value;
    108 === t10.charCodeAt(0) && 98 === t10.charCodeAt(2) && (e10.return = "", e10.value = "");
  }
}, r6 = [function(e10, t10, r10, n6) {
  if (e10.length > -1 && !e10.return) switch (e10.type) {
    case rS:
      e10.return = function e11(t11, r11) {
        switch (45 ^ rI(t11, 0) ? (((r11 << 2 ^ rI(t11, 0)) << 2 ^ rI(t11, 1)) << 2 ^ rI(t11, 2)) << 2 ^ rI(t11, 3) : 0) {
          case 5103:
            return rC + "print-" + t11 + t11;
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
            return rC + t11 + t11;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return rC + t11 + rM + t11 + rk + t11 + t11;
          case 6828:
          case 4268:
            return rC + t11 + rk + t11 + t11;
          case 6165:
            return rC + t11 + rk + "flex-" + t11 + t11;
          case 5187:
            return rC + t11 + rT(t11, /(\w+).+(:[^]+)/, rC + "box-$1$2" + rk + "flex-$1$2") + t11;
          case 5443:
            return rC + t11 + rk + "flex-item-" + rT(t11, /flex-|-self/, "") + t11;
          case 4675:
            return rC + t11 + rk + "flex-line-pack" + rT(t11, /align-content|flex-|-self/, "") + t11;
          case 5548:
            return rC + t11 + rk + rT(t11, "shrink", "negative") + t11;
          case 5292:
            return rC + t11 + rk + rT(t11, "basis", "preferred-size") + t11;
          case 6060:
            return rC + "box-" + rT(t11, "-grow", "") + rC + t11 + rk + rT(t11, "grow", "positive") + t11;
          case 4554:
            return rC + rT(t11, /([^-])(transform)/g, "$1" + rC + "$2") + t11;
          case 6187:
            return rT(rT(rT(t11, /(zoom-|grab)/, rC + "$1"), /(image-set)/, rC + "$1"), t11, "") + t11;
          case 5495:
          case 3959:
            return rT(t11, /(image-set\([^]*)/, rC + "$1$`$1");
          case 4968:
            return rT(rT(t11, /(.+:)(flex-)?(.*)/, rC + "box-pack:$3" + rk + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + rC + t11 + t11;
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return rT(t11, /(.+)-inline(.+)/, rC + "$1$2") + t11;
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
            if (rF(t11) - 1 - r11 > 6) switch (rI(t11, r11 + 1)) {
              case 109:
                if (45 !== rI(t11, r11 + 4)) break;
              case 102:
                return rT(t11, /(.+:)(.+)-([^]+)/, "$1" + rC + "$2-$3$1" + rM + (108 == rI(t11, r11 + 3) ? "$3" : "$2-$3")) + t11;
              case 115:
                return ~rA(t11, "stretch") ? e11(rT(t11, "stretch", "fill-available"), r11) + t11 : t11;
            }
            break;
          case 4949:
            if (115 !== rI(t11, r11 + 1)) break;
          case 6444:
            switch (rI(t11, rF(t11) - 3 - (~rA(t11, "!important") && 10))) {
              case 107:
                return rT(t11, ":", ":" + rC) + t11;
              case 101:
                return rT(t11, /(.+:)([^;!]+)(;|!.+)?/, "$1" + rC + (45 === rI(t11, 14) ? "inline-" : "") + "box$3$1" + rC + "$2$3$1" + rk + "$2box$3") + t11;
            }
            break;
          case 5936:
            switch (rI(t11, r11 + 11)) {
              case 114:
                return rC + t11 + rk + rT(t11, /[svh]\w+-[tblr]{2}/, "tb") + t11;
              case 108:
                return rC + t11 + rk + rT(t11, /[svh]\w+-[tblr]{2}/, "tb-rl") + t11;
              case 45:
                return rC + t11 + rk + rT(t11, /[svh]\w+-[tblr]{2}/, "lr") + t11;
            }
            return rC + t11 + rk + t11 + t11;
        }
        return t11;
      }(e10.value, e10.length);
      break;
    case rO:
      return rQ([rq(e10, { value: rT(e10.value, "@", "@" + rC) })], n6);
    case r_:
      if (e10.length) {
        var a2, i2;
        return a2 = e10.props, i2 = function(t11) {
          var r11;
          switch (r11 = t11, (r11 = /(::plac\w+|:read-\w+)/.exec(r11)) ? r11[0] : r11) {
            case ":read-only":
            case ":read-write":
              return rQ([rq(e10, { props: [rT(t11, /:(read-\w+)/, ":" + rM + "$1")] })], n6);
            case "::placeholder":
              return rQ([rq(e10, { props: [rT(t11, /:(plac\w+)/, ":" + rC + "input-$1")] }), rq(e10, { props: [rT(t11, /:(plac\w+)/, ":" + rM + "$1")] }), rq(e10, { props: [rT(t11, /:(plac\w+)/, rk + "input-$1")] })], n6);
          }
          return "";
        }, a2.map(i2).join("");
      }
  }
}], r9 = function(e10) {
  var t10, r10, n6, a2, i2, o2, s2 = e10.key;
  if ("css" === s2) {
    var l2 = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(l2, function(e11) {
      -1 !== e11.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e11), e11.setAttribute("data-s", ""));
    });
  }
  var c2 = e10.stylisPlugins || r6, u2 = {}, d2 = [];
  a2 = e10.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + s2 + ' "]'), function(e11) {
    for (var t11 = e11.getAttribute("data-emotion").split(" "), r11 = 1; r11 < t11.length; r11++) u2[t11[r11]] = true;
    d2.push(e11);
  });
  var f2 = (r10 = (t10 = [r3, r8].concat(c2, [r0, (n6 = function(e11) {
    o2.insert(e11);
  }, function(e11) {
    !e11.root && (e11 = e11.return) && n6(e11);
  })])).length, function(e11, n7, a3, i3) {
    for (var o3 = "", s3 = 0; s3 < r10; s3++) o3 += t10[s3](e11, n7, a3, i3) || "";
    return o3;
  }), h2 = function(e11) {
    var t11, r11;
    return rQ((r11 = function e12(t12, r12, n7, a3, i3, o3, s3, l3, c3) {
      for (var u3, d3 = 0, f3 = 0, h3 = s3, p3 = 0, m2 = 0, g2 = 0, v2 = 1, b2 = 1, y2 = 1, x2 = 0, w2 = "", k2 = i3, M2 = o3, C2 = a3, P2 = w2; b2; ) switch (g2 = x2, x2 = rU()) {
        case 40:
          if (108 != g2 && 58 == rI(P2, h3 - 1)) {
            -1 != rA(P2 += rT(rK(x2), "&", "&\f"), "&\f") && (y2 = -1);
            break;
          }
        case 34:
        case 39:
        case 91:
          P2 += rK(x2);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          P2 += function(e13) {
            for (; rz = rG(); ) if (rz < 33) rU();
            else break;
            return rY(e13) > 2 || rY(rz) > 3 ? "" : " ";
          }(g2);
          break;
        case 92:
          P2 += function(e13, t13) {
            for (var r13; --t13 && rU() && !(rz < 48) && !(rz > 102) && (!(rz > 57) || !(rz < 65)) && (!(rz > 70) || !(rz < 97)); ) ;
            return r13 = rH + (t13 < 6 && 32 == rG() && 32 == rU()), rL(rW, e13, r13);
          }(rH - 1, 7);
          continue;
        case 47:
          switch (rG()) {
            case 42:
            case 47:
              rB(rN(u3 = function(e13, t13) {
                for (; rU(); ) if (e13 + rz === 57) break;
                else if (e13 + rz === 84 && 47 === rG()) break;
                return "/*" + rL(rW, t13, rH - 1) + "*" + rR(47 === e13 ? e13 : rU());
              }(rU(), rH), r12, n7, rP, rR(rz), rL(u3, 2, -2), 0), c3);
              break;
            default:
              P2 += "/";
          }
          break;
        case 123 * v2:
          l3[d3++] = rF(P2) * y2;
        case 125 * v2:
        case 59:
        case 0:
          switch (x2) {
            case 0:
            case 125:
              b2 = 0;
            case 59 + f3:
              -1 == y2 && (P2 = rT(P2, /\f/g, "")), m2 > 0 && rF(P2) - h3 && rB(m2 > 32 ? rZ(P2 + ";", a3, n7, h3 - 1) : rZ(rT(P2, " ", "") + ";", a3, n7, h3 - 2), c3);
              break;
            case 59:
              P2 += ";";
            default:
              if (rB(C2 = rJ(P2, r12, n7, d3, f3, i3, l3, w2, k2 = [], M2 = [], h3), o3), 123 === x2) {
                if (0 === f3) e12(P2, r12, C2, C2, k2, o3, h3, l3, M2);
                else switch (99 === p3 && 110 === rI(P2, 3) ? 100 : p3) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    e12(t12, C2, C2, a3 && rB(rJ(t12, C2, C2, 0, 0, i3, l3, w2, i3, k2 = [], h3), M2), i3, M2, h3, l3, a3 ? k2 : M2);
                    break;
                  default:
                    e12(P2, C2, C2, C2, [""], M2, 0, l3, M2);
                }
              }
          }
          d3 = f3 = m2 = 0, v2 = y2 = 1, w2 = P2 = "", h3 = s3;
          break;
        case 58:
          h3 = 1 + rF(P2), m2 = g2;
        default:
          if (v2 < 1) {
            if (123 == x2) --v2;
            else if (125 == x2 && 0 == v2++ && 125 == (rz = rH > 0 ? rI(rW, --rH) : 0, rV--, 10 === rz && (rV = 1, rj--), rz)) continue;
          }
          switch (P2 += rR(x2), x2 * v2) {
            case 38:
              y2 = f3 > 0 ? 1 : (P2 += "\f", -1);
              break;
            case 44:
              l3[d3++] = (rF(P2) - 1) * y2, y2 = 1;
              break;
            case 64:
              45 === rG() && (P2 += rK(rU())), p3 = rG(), f3 = h3 = rF(w2 = P2 += function(e13) {
                for (; !rY(rG()); ) rU();
                return rL(rW, e13, rH);
              }(rH)), x2++;
              break;
            case 45:
              45 === g2 && 2 == rF(P2) && (v2 = 0);
          }
      }
      return o3;
    }("", null, null, null, [""], t11 = rX(t11 = e11), 0, [0], t11), rW = "", r11), f2);
  };
  i2 = function(e11, t11, r11, n7) {
    o2 = r11, h2(e11 ? e11 + "{" + t11.styles + "}" : t11.styles), n7 && (p2.inserted[t11.name] = true);
  };
  var p2 = { key: s2, sheet: new rw({ key: s2, container: a2, nonce: e10.nonce, speedy: e10.speedy, prepend: e10.prepend, insertionPoint: e10.insertionPoint }), nonce: e10.nonce, inserted: u2, registered: {}, insert: i2 };
  return p2.sheet.hydrate(d2), p2;
}, r7 = function(e10, t10, r10) {
  var n6 = e10.key + "-" + t10.name;
  false === r10 && void 0 === e10.registered[n6] && (e10.registered[n6] = t10.styles);
}, ne = function(e10, t10, r10) {
  r7(e10, t10, r10);
  var n6 = e10.key + "-" + t10.name;
  if (void 0 === e10.inserted[t10.name]) {
    var a2 = t10;
    do
      e10.insert(t10 === a2 ? "." + n6 : "", a2, e10.sheet, true), a2 = a2.next;
    while (void 0 !== a2);
  }
};
let nt = a(() => r9({ key: "css" }), { name: "Cache" }), nr = (e10) => (t10) => {
  if (t10.serialized) {
    if (t10.withoutScoping) e10.insert("", t10.serialized, e10.sheet, true);
    else {
      var r10;
      ne(e10, t10.serialized, null === (r10 = t10.isStringTag) || void 0 === r10 || r10);
    }
  }
}, nn = t({ sx: k(), component: k().optional().default("div") }, (e10, t10) => {
  var n6;
  let { slots: a2, expose: s2 } = t10, l2 = rx.use(), c2 = nt.use(), u2 = l2.unstable_css(c2, null !== (n6 = e10.sx) && void 0 !== n6 ? n6 : {}), d2 = () => "0" !== u2.name ? `${c2.key}-${u2.name}` : "", f2 = nr(c2);
  i(() => {
    f2({ serialized: u2, isStringTag: true });
  });
  let h2 = o();
  return s2({ $$forwardRef: h2 }), () => {
    var t11;
    return r(null !== (t11 = e10.component) && void 0 !== t11 ? t11 : "div", { ref: h2, class: d2(), children: a2 });
  };
});
function na() {
  let e10;
  for (var n6 = arguments.length, a2 = Array(n6), o2 = 0; o2 < n6; o2++) a2[o2] = arguments[o2];
  let f2 = "div", h2 = {}, p2 = {};
  for (let t10 of a2) {
    if (B(t10)) {
      e10 = t10;
      continue;
    }
    if (D(t10) || s(t10)) {
      f2 = t10;
      continue;
    }
    j(e10) && l(t10) ? h2 = t10 : p2 = t10;
  }
  return null != e10 || (e10 = (e11, t10) => (n7) => {
    let a3 = {};
    for (let t11 in e11) "component" !== t11 && "sx" !== t11 && e11[t11] && (a3[`data-${t11}`] = e11[t11]);
    return r(n7, { ...a3, children: t10.slots });
  }), (r10) => {
    let n7 = Object.assign(t({ ...h2, sx: k().optional(), component: k().optional() }, (t10, a3) => {
      let o3 = rx.use(), s2 = nt.use(), l2 = nr(s2), h3 = c(""), p3 = o3.unstable_css(s2, r10), m2 = () => ("0" !== p3.name ? `${s2.key}-${p3.name}${h3.value}` : `${h3.value}`) + (n7.name ? ` ${n7.name}` : "");
      if (f2.__styled) {
        var g2;
        let e11 = o3.unstable_css(s2, null !== (g2 = t10.sx) && void 0 !== g2 ? g2 : {});
        "0" !== e11.name && (h3.value = ` ${s2.key}-${e11.name}`), i(() => {
          l2({ serialized: p3, isStringTag: true }), l2({ serialized: e11, isStringTag: true });
        });
      } else u(() => {
        l2({ serialized: p3, isStringTag: true });
      });
      let v2 = e10(t10, a3);
      return () => {
        if (f2.__styled) {
          let e12 = v2(f2);
          return e12 ? d(e12, { component: t10.component, class: m2() }) : null;
        }
        let e11 = v2(nn);
        return e11 ? d(e11, { component: t10.component || f2, sx: t10.sx, class: m2() }) : null;
      };
    }, p2), { __styled: true });
    return n7.toString = () => `.${n7.name}`, n7;
  };
}
let ni = t((e10) => {
  let { styles: t10 } = e10, r10 = rx.use(), n6 = nt.use(), a2 = nr(n6), i2 = r10.unstable_css(n6, D(t10) ? { "&": t10 } : t10);
  return u(() => {
    a2({ serialized: i2, withoutScoping: true });
  }), () => null;
}, { displayName: "GlobalStyle", props: ["styles"] }), no = t(() => {
  let e10 = rx.use().rootCSSVars;
  return () => r(ni, { styles: { ":host, :root, [data-theme]": e10, "*, *::after, *::before": { boxSizing: "border-box" }, html: { fontSize: "10px" }, a: { color: "inherit" }, body: { textStyle: "sys.body-medium" } } });
}, { displayName: "CSSReset" }), ns = a(() => ({ mountPoint: () => document.body }), { name: "OverlaySetting" }), nl = a(() => new nc(c(null), c(null), () => false), { name: "Overlay" });
class nc {
  constructor(e10, t10, r10) {
    __publicField(this, "children", []);
    __publicField(this, "add", (e10) => (this.children = [...this.children, e10], () => {
      this.children = this.children.filter((t10) => t10 !== e10);
    }));
    __publicField(this, "isClickInside", (e10) => {
      for (let t11 of this.children) if (t11.isClickInside(e10)) return true;
      let t10 = f(this.triggerRef), r10 = f(this.contentRef);
      return t10 && (t10 === e10.target || e10.composedPath().includes(t10)) || r10 && (r10 === e10.target || e10.composedPath().includes(r10));
    });
    this.triggerRef = e10, this.contentRef = t10, this.isOpen = r10;
  }
  topmost() {
    return 0 === this.children.filter((e10) => e10.isOpen()).length;
  }
}
let nu = t((e10, t10) => {
  var n6;
  let { slots: a2, attrs: i2, emit: o2 } = t10, s2 = e10.contentRef || c(null), l2 = new nc(null !== (n6 = e10.triggerRef) && void 0 !== n6 ? n6 : c(null), s2, () => !!e10.isOpen), u2 = ns.use();
  return h(nl.use().add(l2)), window && p(m(s2, "value"), b((e11) => {
    if (!e11) return;
    let t11 = (e12) => {
      l2.isClickInside(e12) || o2("click-outside", e12);
    };
    return window.addEventListener("pointerdown", t11), () => {
      window.removeEventListener("pointerdown", t11);
    };
  }), b((e11) => {
    if (!e11) return;
    let t11 = (e12) => {
      "Escape" === e12.key && l2.topmost() && o2("esc-keydown", e12);
    };
    return window.addEventListener("keydown", t11), () => {
      window.removeEventListener("keydown", t11);
    };
  }), v()), () => {
    var t11;
    let n7 = e10.isOpen ? d(r("div", { ...i2, ref: s2, style: e10.style, children: r(nl, { value: l2, children: null === (t11 = a2.default) || void 0 === t11 ? void 0 : t11.call(a2) }) }), { onVnodeBeforeMount: () => {
      o2("content-before-mount");
    } }) : null;
    return r(g, { to: u2.mountPoint(), children: a2.transition ? a2.transition({ content: n7 }) : n7 });
  };
}, { name: "Overlay", inheritAttrs: false }, { displayName: "Overlay", props: ["isOpen", "style", "contentRef", "triggerRef"], emits: ["click-outside", "esc-keydown", "content-before-mount"] });
var nd = "bottom", nf = "right", nh = "left", np = "auto", nm = ["top", nd, nf, nh], ng = "start", nv = "viewport", nb = "popper", ny = nm.reduce(function(e10, t10) {
  return e10.concat([t10 + "-" + ng, t10 + "-end"]);
}, []), nx = [].concat(nm, [np]).reduce(function(e10, t10) {
  return e10.concat([t10, t10 + "-" + ng, t10 + "-end"]);
}, []), nw = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
function nk(e10) {
  return e10 ? (e10.nodeName || "").toLowerCase() : null;
}
function nM(e10) {
  if (null == e10) return window;
  if ("[object Window]" !== e10.toString()) {
    var t10 = e10.ownerDocument;
    return t10 && t10.defaultView || window;
  }
  return e10;
}
function nC(e10) {
  var t10 = nM(e10).Element;
  return e10 instanceof t10 || e10 instanceof Element;
}
function nP(e10) {
  var t10 = nM(e10).HTMLElement;
  return e10 instanceof t10 || e10 instanceof HTMLElement;
}
function n_(e10) {
  if ("undefined" == typeof ShadowRoot) return false;
  var t10 = nM(e10).ShadowRoot;
  return e10 instanceof t10 || e10 instanceof ShadowRoot;
}
function nS(e10) {
  return e10.split("-")[0];
}
var nO = Math.max, nD = Math.min, nR = Math.round;
function n$() {
  var e10 = navigator.userAgentData;
  return null != e10 && e10.brands && Array.isArray(e10.brands) ? e10.brands.map(function(e11) {
    return e11.brand + "/" + e11.version;
  }).join(" ") : navigator.userAgent;
}
function nT() {
  return !/^((?!chrome|android).)*safari/i.test(n$());
}
function nA(e10, t10, r10) {
  void 0 === t10 && (t10 = false), void 0 === r10 && (r10 = false);
  var n6 = e10.getBoundingClientRect(), a2 = 1, i2 = 1;
  t10 && nP(e10) && (a2 = e10.offsetWidth > 0 && nR(n6.width) / e10.offsetWidth || 1, i2 = e10.offsetHeight > 0 && nR(n6.height) / e10.offsetHeight || 1);
  var o2 = (nC(e10) ? nM(e10) : window).visualViewport, s2 = !nT() && r10, l2 = (n6.left + (s2 && o2 ? o2.offsetLeft : 0)) / a2, c2 = (n6.top + (s2 && o2 ? o2.offsetTop : 0)) / i2, u2 = n6.width / a2, d2 = n6.height / i2;
  return { width: u2, height: d2, top: c2, right: l2 + u2, bottom: c2 + d2, left: l2, x: l2, y: c2 };
}
function nI(e10) {
  return nM(e10).getComputedStyle(e10);
}
function nL(e10) {
  return ((nC(e10) ? e10.ownerDocument : e10.document) || window.document).documentElement;
}
function nF(e10) {
  return "html" === nk(e10) ? e10 : e10.assignedSlot || e10.parentNode || (n_(e10) ? e10.host : null) || nL(e10);
}
function nB(e10) {
  return nP(e10) && "fixed" !== nI(e10).position ? e10.offsetParent : null;
}
function nj(e10) {
  for (var t10 = nM(e10), r10 = nB(e10); r10 && ["table", "td", "th"].indexOf(nk(r10)) >= 0 && "static" === nI(r10).position; ) r10 = nB(r10);
  return r10 && ("html" === nk(r10) || "body" === nk(r10) && "static" === nI(r10).position) ? t10 : r10 || function(e11) {
    var t11 = /firefox/i.test(n$());
    if (/Trident/i.test(n$()) && nP(e11) && "fixed" === nI(e11).position) return null;
    var r11 = nF(e11);
    for (n_(r11) && (r11 = r11.host); nP(r11) && 0 > ["html", "body"].indexOf(nk(r11)); ) {
      var n6 = nI(r11);
      if ("none" !== n6.transform || "none" !== n6.perspective || "paint" === n6.contain || -1 !== ["transform", "perspective"].indexOf(n6.willChange) || t11 && "filter" === n6.willChange || t11 && n6.filter && "none" !== n6.filter) return r11;
      r11 = r11.parentNode;
    }
    return null;
  }(e10) || t10;
}
function nV(e10) {
  return e10.split("-")[1];
}
var nE = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function nH(e10) {
  var t10, r10, n6, a2, i2, o2, s2, l2 = e10.popper, c2 = e10.popperRect, u2 = e10.placement, d2 = e10.variation, f2 = e10.offsets, h2 = e10.position, p2 = e10.gpuAcceleration, m2 = e10.adaptive, g2 = e10.roundOffsets, v2 = e10.isFixed, b2 = f2.x, y2 = void 0 === b2 ? 0 : b2, x2 = f2.y, w2 = void 0 === x2 ? 0 : x2, k2 = "function" == typeof g2 ? g2({ x: y2, y: w2 }) : { x: y2, y: w2 };
  y2 = k2.x, w2 = k2.y;
  var M2 = f2.hasOwnProperty("x"), C2 = f2.hasOwnProperty("y"), P2 = nh, _2 = "top", S2 = window;
  if (m2) {
    var O2 = nj(l2), D2 = "clientHeight", R2 = "clientWidth";
    O2 === nM(l2) && "static" !== nI(O2 = nL(l2)).position && "absolute" === h2 && (D2 = "scrollHeight", R2 = "scrollWidth"), ("top" === u2 || (u2 === nh || u2 === nf) && "end" === d2) && (_2 = nd, w2 -= (v2 && O2 === S2 && S2.visualViewport ? S2.visualViewport.height : O2[D2]) - c2.height, w2 *= p2 ? 1 : -1), (u2 === nh || ("top" === u2 || u2 === nd) && "end" === d2) && (P2 = nf, y2 -= (v2 && O2 === S2 && S2.visualViewport ? S2.visualViewport.width : O2[R2]) - c2.width, y2 *= p2 ? 1 : -1);
  }
  var $2 = Object.assign({ position: h2 }, m2 && nE), T2 = true === g2 ? (t10 = { x: y2, y: w2 }, r10 = nM(l2), n6 = t10.x, a2 = t10.y, { x: nR(n6 * (i2 = r10.devicePixelRatio || 1)) / i2 || 0, y: nR(a2 * i2) / i2 || 0 }) : { x: y2, y: w2 };
  return (y2 = T2.x, w2 = T2.y, p2) ? Object.assign({}, $2, ((s2 = {})[_2] = C2 ? "0" : "", s2[P2] = M2 ? "0" : "", s2.transform = 1 >= (S2.devicePixelRatio || 1) ? "translate(" + y2 + "px, " + w2 + "px)" : "translate3d(" + y2 + "px, " + w2 + "px, 0)", s2)) : Object.assign({}, $2, ((o2 = {})[_2] = C2 ? w2 + "px" : "", o2[P2] = M2 ? y2 + "px" : "", o2.transform = "", o2));
}
var nz = { passive: true }, nW = { left: "right", right: "left", bottom: "top", top: "bottom" };
function nN(e10) {
  return e10.replace(/left|right|bottom|top/g, function(e11) {
    return nW[e11];
  });
}
var nq = { start: "end", end: "start" };
function nU(e10) {
  return e10.replace(/start|end/g, function(e11) {
    return nq[e11];
  });
}
function nG(e10) {
  var t10 = nM(e10);
  return { scrollLeft: t10.pageXOffset, scrollTop: t10.pageYOffset };
}
function nY(e10) {
  return nA(nL(e10)).left + nG(e10).scrollLeft;
}
function nX(e10) {
  var t10 = nI(e10), r10 = t10.overflow, n6 = t10.overflowX, a2 = t10.overflowY;
  return /auto|scroll|overlay|hidden/.test(r10 + a2 + n6);
}
function nK(e10, t10) {
  void 0 === t10 && (t10 = []);
  var r10, n6 = function e11(t11) {
    return ["html", "body", "#document"].indexOf(nk(t11)) >= 0 ? t11.ownerDocument.body : nP(t11) && nX(t11) ? t11 : e11(nF(t11));
  }(e10), a2 = n6 === (null == (r10 = e10.ownerDocument) ? void 0 : r10.body), i2 = nM(n6), o2 = a2 ? [i2].concat(i2.visualViewport || [], nX(n6) ? n6 : []) : n6, s2 = t10.concat(o2);
  return a2 ? s2 : s2.concat(nK(nF(o2)));
}
function nJ(e10) {
  return Object.assign({}, e10, { left: e10.x, top: e10.y, right: e10.x + e10.width, bottom: e10.y + e10.height });
}
function nZ(e10, t10, r10) {
  var n6, a2, i2, o2, s2, l2, c2, u2, d2, f2;
  return t10 === nv ? nJ(function(e11, t11) {
    var r11 = nM(e11), n7 = nL(e11), a3 = r11.visualViewport, i3 = n7.clientWidth, o3 = n7.clientHeight, s3 = 0, l3 = 0;
    if (a3) {
      i3 = a3.width, o3 = a3.height;
      var c3 = nT();
      (c3 || !c3 && "fixed" === t11) && (s3 = a3.offsetLeft, l3 = a3.offsetTop);
    }
    return { width: i3, height: o3, x: s3 + nY(e11), y: l3 };
  }(e10, r10)) : nC(t10) ? ((n6 = nA(t10, false, "fixed" === r10)).top = n6.top + t10.clientTop, n6.left = n6.left + t10.clientLeft, n6.bottom = n6.top + t10.clientHeight, n6.right = n6.left + t10.clientWidth, n6.width = t10.clientWidth, n6.height = t10.clientHeight, n6.x = n6.left, n6.y = n6.top, n6) : nJ((a2 = nL(e10), o2 = nL(a2), s2 = nG(a2), l2 = null == (i2 = a2.ownerDocument) ? void 0 : i2.body, c2 = nO(o2.scrollWidth, o2.clientWidth, l2 ? l2.scrollWidth : 0, l2 ? l2.clientWidth : 0), u2 = nO(o2.scrollHeight, o2.clientHeight, l2 ? l2.scrollHeight : 0, l2 ? l2.clientHeight : 0), d2 = -s2.scrollLeft + nY(a2), f2 = -s2.scrollTop, "rtl" === nI(l2 || o2).direction && (d2 += nO(o2.clientWidth, l2 ? l2.clientWidth : 0) - c2), { width: c2, height: u2, x: d2, y: f2 }));
}
function nQ(e10) {
  var t10, r10 = e10.reference, n6 = e10.element, a2 = e10.placement, i2 = a2 ? nS(a2) : null, o2 = a2 ? nV(a2) : null, s2 = r10.x + r10.width / 2 - n6.width / 2, l2 = r10.y + r10.height / 2 - n6.height / 2;
  switch (i2) {
    case "top":
      t10 = { x: s2, y: r10.y - n6.height };
      break;
    case nd:
      t10 = { x: s2, y: r10.y + r10.height };
      break;
    case nf:
      t10 = { x: r10.x + r10.width, y: l2 };
      break;
    case nh:
      t10 = { x: r10.x - n6.width, y: l2 };
      break;
    default:
      t10 = { x: r10.x, y: r10.y };
  }
  var c2 = i2 ? ["top", "bottom"].indexOf(i2) >= 0 ? "x" : "y" : null;
  if (null != c2) {
    var u2 = "y" === c2 ? "height" : "width";
    switch (o2) {
      case ng:
        t10[c2] = t10[c2] - (r10[u2] / 2 - n6[u2] / 2);
        break;
      case "end":
        t10[c2] = t10[c2] + (r10[u2] / 2 - n6[u2] / 2);
    }
  }
  return t10;
}
function n0(e10, t10) {
  void 0 === t10 && (t10 = {});
  var r10, n6, a2, i2, o2, s2, l2, c2, u2 = t10, d2 = u2.placement, f2 = void 0 === d2 ? e10.placement : d2, h2 = u2.strategy, p2 = void 0 === h2 ? e10.strategy : h2, m2 = u2.boundary, g2 = u2.rootBoundary, v2 = u2.elementContext, b2 = void 0 === v2 ? nb : v2, y2 = u2.altBoundary, x2 = u2.padding, w2 = void 0 === x2 ? 0 : x2, k2 = Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, "number" != typeof w2 ? w2 : nm.reduce(function(e11, t11) {
    return e11[t11] = w2, e11;
  }, {})), M2 = e10.rects.popper, C2 = e10.elements[void 0 !== y2 && y2 ? b2 === nb ? "reference" : nb : b2], P2 = (r10 = nC(C2) ? C2 : C2.contextElement || nL(e10.elements.popper), n6 = void 0 === m2 ? "clippingParents" : m2, a2 = void 0 === g2 ? nv : g2, l2 = (s2 = [].concat("clippingParents" === n6 ? (i2 = nK(nF(r10)), nC(o2 = ["absolute", "fixed"].indexOf(nI(r10).position) >= 0 && nP(r10) ? nj(r10) : r10) ? i2.filter(function(e11) {
    return nC(e11) && function(e12, t11) {
      var r11 = t11.getRootNode && t11.getRootNode();
      if (e12.contains(t11)) return true;
      if (r11 && n_(r11)) {
        var n7 = t11;
        do {
          if (n7 && e12.isSameNode(n7)) return true;
          n7 = n7.parentNode || n7.host;
        } while (n7);
      }
      return false;
    }(e11, o2) && "body" !== nk(e11);
  }) : []) : [].concat(n6), [a2]))[0], (c2 = s2.reduce(function(e11, t11) {
    var n7 = nZ(r10, t11, p2);
    return e11.top = nO(n7.top, e11.top), e11.right = nD(n7.right, e11.right), e11.bottom = nD(n7.bottom, e11.bottom), e11.left = nO(n7.left, e11.left), e11;
  }, nZ(r10, l2, p2))).width = c2.right - c2.left, c2.height = c2.bottom - c2.top, c2.x = c2.left, c2.y = c2.top, c2), _2 = nA(e10.elements.reference), S2 = nQ({ reference: _2, element: M2, strategy: "absolute", placement: f2 }), O2 = nJ(Object.assign({}, M2, S2)), D2 = b2 === nb ? O2 : _2, R2 = { top: P2.top - D2.top + k2.top, bottom: D2.bottom - P2.bottom + k2.bottom, left: P2.left - D2.left + k2.left, right: D2.right - P2.right + k2.right }, $2 = e10.modifiersData.offset;
  if (b2 === nb && $2) {
    var T2 = $2[f2];
    Object.keys(R2).forEach(function(e11) {
      var t11 = [nf, nd].indexOf(e11) >= 0 ? 1 : -1, r11 = ["top", nd].indexOf(e11) >= 0 ? "y" : "x";
      R2[e11] += T2[r11] * t11;
    });
  }
  return R2;
}
let n1 = { name: "flip", enabled: true, phase: "main", fn: function(e10) {
  var t10 = e10.state, r10 = e10.options, n6 = e10.name;
  if (!t10.modifiersData[n6]._skip) {
    for (var a2 = r10.mainAxis, i2 = void 0 === a2 || a2, o2 = r10.altAxis, s2 = void 0 === o2 || o2, l2 = r10.fallbackPlacements, c2 = r10.padding, u2 = r10.boundary, d2 = r10.rootBoundary, f2 = r10.altBoundary, h2 = r10.flipVariations, p2 = void 0 === h2 || h2, m2 = r10.allowedAutoPlacements, g2 = t10.options.placement, v2 = nS(g2) === g2, b2 = l2 || (v2 || !p2 ? [nN(g2)] : function(e11) {
      if (nS(e11) === np) return [];
      var t11 = nN(e11);
      return [nU(e11), t11, nU(t11)];
    }(g2)), y2 = [g2].concat(b2).reduce(function(e11, r11) {
      var n7, a3, i3, o3, s3, l3, f3, h3, g3, v3, b3, y3;
      return e11.concat(nS(r11) === np ? (a3 = (n7 = { placement: r11, boundary: u2, rootBoundary: d2, padding: c2, flipVariations: p2, allowedAutoPlacements: m2 }).placement, i3 = n7.boundary, o3 = n7.rootBoundary, s3 = n7.padding, l3 = n7.flipVariations, h3 = void 0 === (f3 = n7.allowedAutoPlacements) ? nx : f3, 0 === (b3 = (v3 = (g3 = nV(a3)) ? l3 ? ny : ny.filter(function(e12) {
        return nV(e12) === g3;
      }) : nm).filter(function(e12) {
        return h3.indexOf(e12) >= 0;
      })).length && (b3 = v3), Object.keys(y3 = b3.reduce(function(e12, r12) {
        return e12[r12] = n0(t10, { placement: r12, boundary: i3, rootBoundary: o3, padding: s3 })[nS(r12)], e12;
      }, {})).sort(function(e12, t11) {
        return y3[e12] - y3[t11];
      })) : r11);
    }, []), x2 = t10.rects.reference, w2 = t10.rects.popper, k2 = /* @__PURE__ */ new Map(), M2 = true, C2 = y2[0], P2 = 0; P2 < y2.length; P2++) {
      var _2 = y2[P2], S2 = nS(_2), O2 = nV(_2) === ng, D2 = ["top", nd].indexOf(S2) >= 0, R2 = D2 ? "width" : "height", $2 = n0(t10, { placement: _2, boundary: u2, rootBoundary: d2, altBoundary: f2, padding: c2 }), T2 = D2 ? O2 ? nf : nh : O2 ? nd : "top";
      x2[R2] > w2[R2] && (T2 = nN(T2));
      var A2 = nN(T2), I2 = [];
      if (i2 && I2.push($2[S2] <= 0), s2 && I2.push($2[T2] <= 0, $2[A2] <= 0), I2.every(function(e11) {
        return e11;
      })) {
        C2 = _2, M2 = false;
        break;
      }
      k2.set(_2, I2);
    }
    if (M2) for (var L2 = p2 ? 3 : 1, F2 = function(e11) {
      var t11 = y2.find(function(t12) {
        var r11 = k2.get(t12);
        if (r11) return r11.slice(0, e11).every(function(e12) {
          return e12;
        });
      });
      if (t11) return C2 = t11, "break";
    }, B2 = L2; B2 > 0 && "break" !== F2(B2); B2--) ;
    t10.placement !== C2 && (t10.modifiersData[n6]._skip = true, t10.placement = C2, t10.reset = true);
  }
}, requiresIfExists: ["offset"], data: { _skip: false } };
var n2 = { placement: "bottom", modifiers: [], strategy: "absolute" };
function n4() {
  for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++) t10[r10] = arguments[r10];
  return !t10.some(function(e11) {
    return !(e11 && "function" == typeof e11.getBoundingClientRect);
  });
}
var n5 = (X = void 0 === (Y = (G = { defaultModifiers: [{ name: "eventListeners", enabled: true, phase: "write", fn: function() {
}, effect: function(e10) {
  var t10 = e10.state, r10 = e10.instance, n6 = e10.options, a2 = n6.scroll, i2 = void 0 === a2 || a2, o2 = n6.resize, s2 = void 0 === o2 || o2, l2 = nM(t10.elements.popper), c2 = [].concat(t10.scrollParents.reference, t10.scrollParents.popper);
  return i2 && c2.forEach(function(e11) {
    e11.addEventListener("scroll", r10.update, nz);
  }), s2 && l2.addEventListener("resize", r10.update, nz), function() {
    i2 && c2.forEach(function(e11) {
      e11.removeEventListener("scroll", r10.update, nz);
    }), s2 && l2.removeEventListener("resize", r10.update, nz);
  };
}, data: {} }, { name: "popperOffsets", enabled: true, phase: "read", fn: function(e10) {
  var t10 = e10.state, r10 = e10.name;
  t10.modifiersData[r10] = nQ({ reference: t10.rects.reference, element: t10.rects.popper, strategy: "absolute", placement: t10.placement });
}, data: {} }, { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: function(e10) {
  var t10 = e10.state, r10 = e10.options, n6 = r10.gpuAcceleration, a2 = r10.adaptive, i2 = r10.roundOffsets, o2 = void 0 === i2 || i2, s2 = { placement: nS(t10.placement), variation: nV(t10.placement), popper: t10.elements.popper, popperRect: t10.rects.popper, gpuAcceleration: void 0 === n6 || n6, isFixed: "fixed" === t10.options.strategy };
  null != t10.modifiersData.popperOffsets && (t10.styles.popper = Object.assign({}, t10.styles.popper, nH(Object.assign({}, s2, { offsets: t10.modifiersData.popperOffsets, position: t10.options.strategy, adaptive: void 0 === a2 || a2, roundOffsets: o2 })))), null != t10.modifiersData.arrow && (t10.styles.arrow = Object.assign({}, t10.styles.arrow, nH(Object.assign({}, s2, { offsets: t10.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: o2 })))), t10.attributes.popper = Object.assign({}, t10.attributes.popper, { "data-popper-placement": t10.placement });
}, data: {} }, { name: "applyStyles", enabled: true, phase: "write", fn: function(e10) {
  var t10 = e10.state;
  Object.keys(t10.elements).forEach(function(e11) {
    var r10 = t10.styles[e11] || {}, n6 = t10.attributes[e11] || {}, a2 = t10.elements[e11];
    nP(a2) && nk(a2) && (Object.assign(a2.style, r10), Object.keys(n6).forEach(function(e12) {
      var t11 = n6[e12];
      false === t11 ? a2.removeAttribute(e12) : a2.setAttribute(e12, true === t11 ? "" : t11);
    }));
  });
}, effect: function(e10) {
  var t10 = e10.state, r10 = { popper: { position: t10.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t10.elements.popper.style, r10.popper), t10.styles = r10, t10.elements.arrow && Object.assign(t10.elements.arrow.style, r10.arrow), function() {
    Object.keys(t10.elements).forEach(function(e11) {
      var n6 = t10.elements[e11], a2 = t10.attributes[e11] || {}, i2 = Object.keys(t10.styles.hasOwnProperty(e11) ? t10.styles[e11] : r10[e11]).reduce(function(e12, t11) {
        return e12[t11] = "", e12;
      }, {});
      nP(n6) && nk(n6) && (Object.assign(n6.style, i2), Object.keys(a2).forEach(function(e12) {
        n6.removeAttribute(e12);
      }));
    });
  };
}, requires: ["computeStyles"] }] }).defaultModifiers) ? [] : Y, J = void 0 === (K = G.defaultOptions) ? n2 : K, function(e10, t10, r10) {
  void 0 === r10 && (r10 = J);
  var n6, a2, i2 = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, n2, J), modifiersData: {}, elements: { reference: e10, popper: t10 }, attributes: {}, styles: {} }, o2 = [], s2 = false, l2 = { state: i2, setOptions: function(r11) {
    var n7, a3, s3, u2, d2, f2 = "function" == typeof r11 ? r11(i2.options) : r11;
    c2(), i2.options = Object.assign({}, J, i2.options, f2), i2.scrollParents = { reference: nC(e10) ? nK(e10) : e10.contextElement ? nK(e10.contextElement) : [], popper: nK(t10) };
    var h2 = (a3 = Object.keys(n7 = [].concat(X, i2.options.modifiers).reduce(function(e11, t11) {
      var r12 = e11[t11.name];
      return e11[t11.name] = r12 ? Object.assign({}, r12, t11, { options: Object.assign({}, r12.options, t11.options), data: Object.assign({}, r12.data, t11.data) }) : t11, e11;
    }, {})).map(function(e11) {
      return n7[e11];
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
    }), nw.reduce(function(e11, t11) {
      return e11.concat(d2.filter(function(e12) {
        return e12.phase === t11;
      }));
    }, []));
    return i2.orderedModifiers = h2.filter(function(e11) {
      return e11.enabled;
    }), i2.orderedModifiers.forEach(function(e11) {
      var t11 = e11.name, r12 = e11.options, n9 = e11.effect;
      if ("function" == typeof n9) {
        var a4 = n9({ state: i2, name: t11, instance: l2, options: void 0 === r12 ? {} : r12 });
        o2.push(a4 || function() {
        });
      }
    }), l2.update();
  }, forceUpdate: function() {
    if (!s2) {
      var e11, t11, r11, n7, a3, o3, c3, u2, d2, f2, h2, p2, m2, g2, v2, b2 = i2.elements, y2 = b2.reference, x2 = b2.popper;
      if (n4(y2, x2)) {
        i2.rects = { reference: (t11 = nj(x2), r11 = "fixed" === i2.options.strategy, n7 = nP(t11), u2 = nP(t11) && (o3 = nR((a3 = t11.getBoundingClientRect()).width) / t11.offsetWidth || 1, c3 = nR(a3.height) / t11.offsetHeight || 1, 1 !== o3 || 1 !== c3), d2 = nL(t11), f2 = nA(y2, u2, r11), h2 = { scrollLeft: 0, scrollTop: 0 }, p2 = { x: 0, y: 0 }, (n7 || !n7 && !r11) && (("body" !== nk(t11) || nX(d2)) && (h2 = (e11 = t11) !== nM(e11) && nP(e11) ? { scrollLeft: e11.scrollLeft, scrollTop: e11.scrollTop } : nG(e11)), nP(t11) ? (p2 = nA(t11, true), p2.x += t11.clientLeft, p2.y += t11.clientTop) : d2 && (p2.x = nY(d2))), { x: f2.left + h2.scrollLeft - p2.x, y: f2.top + h2.scrollTop - p2.y, width: f2.width, height: f2.height }), popper: (m2 = nA(x2), g2 = x2.offsetWidth, v2 = x2.offsetHeight, 1 >= Math.abs(m2.width - g2) && (g2 = m2.width), 1 >= Math.abs(m2.height - v2) && (v2 = m2.height), { x: x2.offsetLeft, y: x2.offsetTop, width: g2, height: v2 }) }, i2.reset = false, i2.placement = i2.options.placement, i2.orderedModifiers.forEach(function(e12) {
          return i2.modifiersData[e12.name] = Object.assign({}, e12.data);
        });
        for (var w2 = 0; w2 < i2.orderedModifiers.length; w2++) {
          if (true === i2.reset) {
            i2.reset = false, w2 = -1;
            continue;
          }
          var k2 = i2.orderedModifiers[w2], M2 = k2.fn, C2 = k2.options, P2 = void 0 === C2 ? {} : C2, _2 = k2.name;
          "function" == typeof M2 && (i2 = M2({ state: i2, options: P2, name: _2, instance: l2 }) || i2);
        }
      }
    }
  }, update: (n6 = function() {
    return new Promise(function(e11) {
      l2.forceUpdate(), e11(i2);
    });
  }, function() {
    return a2 || (a2 = new Promise(function(e11) {
      Promise.resolve().then(function() {
        a2 = void 0, e11(n6());
      });
    })), a2;
  }), destroy: function() {
    c2(), s2 = true;
  } };
  if (!n4(e10, t10)) return l2;
  function c2() {
    o2.forEach(function(e11) {
      return e11();
    }), o2 = [];
  }
  return l2.setOptions(r10).then(function(e11) {
    !s2 && r10.onFirstUpdate && r10.onFirstUpdate(e11);
  }), l2;
});
function n3(e10, t10) {
  return { fn: e10, enabled: true, ...t10 };
}
let n8 = t((e10, t10) => {
  let { slots: n6, emit: a2, attrs: i2 } = t10, o2 = c(null), s2 = c(null);
  return y(() => s2.value, (t11) => {
    if (t11 && o2.value) {
      var r10, n7;
      n5(o2.value, t11, { placement: null !== (r10 = e10.placement) && void 0 !== r10 ? r10 : "bottom", modifiers: [...null !== (n7 = e10.modifiers) && void 0 !== n7 ? n7 : [], n1] });
    }
  }), () => {
    var t11, l2;
    let c2 = null === (t11 = n6.default) || void 0 === t11 ? void 0 : t11.call(n6)[0];
    return c2 ? x(w, { children: [d(c2, { ...i2, onVnodeMounted: (e11) => {
      o2.value = function e12(t12) {
        if (t12) {
          if (t12 instanceof HTMLElement) return t12;
          if (t12 instanceof Text) return e12(t12.nextElementSibling);
        }
        return null;
      }(e11.el);
    } }), r(nu, { triggerRef: o2, contentRef: s2, isOpen: e10.isOpen, onClickOutside: (e11) => a2("click-outside", e11), style: { zIndex: 100 }, $transition: n6.transition, children: null === (l2 = n6.content) || void 0 === l2 ? void 0 : l2.call(n6) })] }) : null;
  };
}, { name: "Popper", inheritAttrs: false }, { displayName: "Popper", props: ["isOpen", "style", "contentRef", "triggerRef", "placement", "modifiers"], emits: ["click-outside", "esc-keydown", "content-before-mount"] });
export {
  nn as B,
  nt as C,
  ni as G,
  nu as O,
  n8 as P,
  rx as T,
  tI as a,
  no as b,
  tj as c,
  tz as d,
  rb as e,
  rp as f,
  n3 as g,
  na as s,
  tH as t,
  tF as v
};
