let e, t, r, o, i, l, a, s, u, c, f, p;
import { i as d, p as h, k as m, c as g, a as y, b, d as _, o as w } from "./lib-nodepkg-typedef.6f3dc261.chunk.js";
function x(e10, t10) {
  let r10 = /* @__PURE__ */ Object.create(null), o10 = /* @__PURE__ */ e10.split(",");
  for (let e11 = 0; e11 < o10.length; e11++)
    r10[o10[e11]] = true;
  return t10 ? (e11) => !!r10[e11.toLowerCase()] : (e11) => !!r10[e11];
}
let S = /* @__PURE__ */ Object.freeze({}), k = /* @__PURE__ */ Object.freeze([]), $ = () => {
}, O = () => false, C = /^on[^a-z]/, E = (e10) => C.test(e10), P = (e10) => e10.startsWith("onUpdate:"), j = Object.assign, A = (e10, t10) => {
  let r10 = /* @__PURE__ */ e10.indexOf(t10);
  r10 > -1 && e10.splice(r10, 1);
}, T = Object.prototype.hasOwnProperty, I = (e10, t10) => T.call(e10, t10), R = Array.isArray, F = (e10) => "[object Map]" === B(e10), M = (e10) => "[object Set]" === B(e10), N = (e10) => "function" == typeof e10, L = (e10) => "string" == typeof e10, V = (e10) => "symbol" == typeof e10, D = (e10) => null !== e10 && "object" == typeof e10, U = (e10) => (D(e10) || N(e10)) && N(e10.then) && N(e10.catch), z = Object.prototype.toString, B = (e10) => z.call(e10), W = (e10) => B(e10).slice(8, -1), q = (e10) => "[object Object]" === B(e10), H = (e10) => L(e10) && "NaN" !== e10 && "-" !== e10[0] && "" + parseInt(e10, 10) === e10, G = /* @__PURE__ */ x(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), K = /* @__PURE__ */ x("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), Y = (e10) => {
  let t10 = /* @__PURE__ */ Object.create(null);
  return (r10) => {
    let o10 = t10[r10];
    return o10 || (t10[r10] = /* @__PURE__ */ e10(r10));
  };
}, J = /-(\w)/g, Q = /* @__PURE__ */ Y((e10) => e10.replace(J, (e11, t10) => t10 ? t10.toUpperCase() : "")), X = /\B([A-Z])/g, Z = /* @__PURE__ */ Y((e10) => e10.replace(X, "-$1").toLowerCase()), ee = /* @__PURE__ */ Y((e10) => e10.charAt(0).toUpperCase() + e10.slice(1)), et = /* @__PURE__ */ Y((e10) => {
  let t10 = e10 ? `on${ee(e10)}` : "";
  return t10;
}), en = (e10, t10) => !Object.is(e10, t10), er = (e10, t10) => {
  for (let r10 = 0; r10 < e10.length; r10++)
    e10[r10](t10);
}, eo = (e10, t10, r10) => {
  Object.defineProperty(e10, t10, { configurable: true, enumerable: false, value: r10 });
}, ei = (e10) => {
  let t10 = /* @__PURE__ */ parseFloat(e10);
  return isNaN(t10) ? e10 : t10;
}, el = (e10) => {
  let t10 = L(e10) ? Number(e10) : NaN;
  return isNaN(t10) ? e10 : t10;
}, ea = () => e || (e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
function es(e10) {
  if (R(e10)) {
    let t10 = {};
    for (let r10 = 0; r10 < e10.length; r10++) {
      let o10 = e10[r10], i10 = L(o10) ? function(e11) {
        let t11 = {};
        return e11.replace(ef, "").split(eu).forEach((e12) => {
          if (e12) {
            let r11 = /* @__PURE__ */ e12.split(ec);
            r11.length > 1 && (t11[r11[0].trim()] = /* @__PURE__ */ r11[1].trim());
          }
        }), t11;
      }(o10) : es(o10);
      if (i10)
        for (let e11 in i10)
          t10[e11] = i10[e11];
    }
    return t10;
  }
  if (L(e10) || D(e10))
    return e10;
}
let eu = /;(?![^(]*\))/g, ec = /:([^]+)/, ef = /\/\*[^]*?\*\//g;
function ep(e10) {
  let t10 = "";
  if (L(e10))
    t10 = e10;
  else if (R(e10))
    for (let r10 = 0; r10 < e10.length; r10++) {
      let o10 = /* @__PURE__ */ ep(e10[r10]);
      o10 && (t10 += o10 + " ");
    }
  else if (D(e10))
    for (let r10 in e10)
      e10[r10] && (t10 += r10 + " ");
  return t10.trim();
}
let ed = /* @__PURE__ */ x("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot"), eh = /* @__PURE__ */ x("svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view"), ev = /* @__PURE__ */ x("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");
function em(e10) {
  for (var t10 = arguments.length, r10 = Array(t10 > 1 ? t10 - 1 : 0), o10 = 1; o10 < t10; o10++)
    r10[o10 - 1] = arguments[o10];
  console.warn(`[Vue warn] ${e10}`, ...r10);
}
class eg {
  constructor(e10 = false) {
    this.detached = e10, /**
    * @internal
    */
    this._active = true, /**
    * @internal
    */
    this.effects = [], /**
    * @internal
    */
    this.cleanups = [], this.parent = t, !e10 && t && (this.index = (t.scopes || (t.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(e10) {
    if (this._active) {
      let r10 = t;
      try {
        return t = this, e10();
      } finally {
        t = r10;
      }
    } else
      em("cannot run an inactive effect scope.");
  }
  /**
  * This should only be called on non-detached scopes
  * @internal
  */
  on() {
    t = this;
  }
  /**
  * This should only be called on non-detached scopes
  * @internal
  */
  off() {
    t = this.parent;
  }
  stop(e10) {
    if (this._active) {
      let t10, r10;
      for (t10 = 0, r10 = this.effects.length; t10 < r10; t10++)
        this.effects[t10].stop();
      for (t10 = 0, r10 = this.cleanups.length; t10 < r10; t10++)
        this.cleanups[t10]();
      if (this.scopes)
        for (t10 = 0, r10 = this.scopes.length; t10 < r10; t10++)
          this.scopes[t10].stop(true);
      if (!this.detached && this.parent && !e10) {
        let e11 = /* @__PURE__ */ this.parent.scopes.pop();
        e11 && e11 !== this && (this.parent.scopes[this.index] = e11, e11.index = this.index);
      }
      this.parent = void 0, this._active = false;
    }
  }
}
let ey = (e10) => {
  let t10 = new Set(e10);
  return t10.w = 0, t10.n = 0, t10;
}, eb = (e10) => (e10.w & e$) > 0, e_ = (e10) => (e10.n & e$) > 0, ew = (e10) => {
  let { deps: t10 } = e10;
  if (t10.length)
    for (let e11 = 0; e11 < t10.length; e11++)
      t10[e11].w |= e$;
}, ex = (e10) => {
  let { deps: t10 } = e10;
  if (t10.length) {
    let r10 = 0;
    for (let o10 = 0; o10 < t10.length; o10++) {
      let i10 = t10[o10];
      eb(i10) && !e_(i10) ? i10.delete(e10) : t10[r10++] = i10, i10.w &= ~e$, i10.n &= ~e$;
    }
    t10.length = r10;
  }
}, eS = /* @__PURE__ */ new WeakMap(), ek = 0, e$ = 1, eO = /* @__PURE__ */ Symbol("iterate"), eC = /* @__PURE__ */ Symbol("Map key iterate");
class eE {
  constructor(e10, r10 = null, o10) {
    this.fn = e10, this.scheduler = r10, this.active = true, this.deps = [], this.parent = void 0, function(e11) {
      let r11 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
      r11 && r11.active && r11.effects.push(e11);
    }(this, o10);
  }
  run() {
    if (!this.active)
      return this.fn();
    let e10 = r, t10 = ej;
    for (; e10; ) {
      if (e10 === this)
        return;
      e10 = e10.parent;
    }
    try {
      return this.parent = r, r = this, ej = true, e$ = 1 << ++ek, ek <= 30 ? ew(this) : eP(this), this.fn();
    } finally {
      ek <= 30 && ex(this), e$ = 1 << --ek, r = this.parent, ej = t10, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    r === this ? this.deferStop = true : this.active && (eP(this), this.onStop && this.onStop(), this.active = false);
  }
}
function eP(e10) {
  let { deps: t10 } = e10;
  if (t10.length) {
    for (let r10 = 0; r10 < t10.length; r10++)
      t10[r10].delete(e10);
    t10.length = 0;
  }
}
let ej = true, eA = [];
function eT() {
  eA.push(ej), ej = false;
}
function eI() {
  let e10 = /* @__PURE__ */ eA.pop();
  ej = void 0 === e10 || e10;
}
function eR(e10, t10, o10) {
  if (ej && r) {
    let i10 = /* @__PURE__ */ eS.get(e10);
    i10 || eS.set(e10, i10 = /* @__PURE__ */ new Map());
    let l10 = /* @__PURE__ */ i10.get(o10);
    l10 || i10.set(o10, l10 = /* @__PURE__ */ ey());
    let a10 = { effect: r, target: e10, type: t10, key: o10 };
    eF(l10, a10);
  }
}
function eF(e10, t10) {
  let o10 = false;
  ek <= 30 ? e_(e10) || (e10.n |= e$, o10 = !eb(e10)) : o10 = !e10.has(r), o10 && (e10.add(r), r.deps.push(e10), r.onTrack && r.onTrack(/* @__PURE__ */ j({ effect: r }, t10)));
}
function eM(e10, t10, r10, o10, i10, l10) {
  let a10 = /* @__PURE__ */ eS.get(e10);
  if (!a10)
    return;
  let s2 = [];
  if ("clear" === t10)
    s2 = [.../* @__PURE__ */ a10.values()];
  else if ("length" === r10 && R(e10)) {
    let e11 = /* @__PURE__ */ Number(o10);
    a10.forEach((t11, r11) => {
      ("length" === r11 || !V(r11) && r11 >= e11) && s2.push(t11);
    });
  } else
    switch (void 0 !== r10 && s2.push(/* @__PURE__ */ a10.get(r10)), t10) {
      case "add":
        R(e10) ? H(r10) && s2.push(/* @__PURE__ */ a10.get("length")) : (s2.push(/* @__PURE__ */ a10.get(eO)), F(e10) && s2.push(/* @__PURE__ */ a10.get(eC)));
        break;
      case "delete":
        !R(e10) && (s2.push(/* @__PURE__ */ a10.get(eO)), F(e10) && s2.push(/* @__PURE__ */ a10.get(eC)));
        break;
      case "set":
        F(e10) && s2.push(/* @__PURE__ */ a10.get(eO));
    }
  let u2 = { target: e10, type: t10, key: r10, newValue: o10, oldValue: i10, oldTarget: l10 };
  if (1 === s2.length)
    s2[0] && eN(s2[0], u2);
  else {
    let e11 = [];
    for (let t11 of s2)
      t11 && e11.push(...t11);
    eN(/* @__PURE__ */ ey(e11), u2);
  }
}
function eN(e10, t10) {
  let r10 = R(e10) ? e10 : [...e10];
  for (let e11 of r10)
    e11.computed && eL(e11, t10);
  for (let e11 of r10)
    e11.computed || eL(e11, t10);
}
function eL(e10, t10) {
  (e10 !== r || e10.allowRecurse) && (e10.onTrigger && e10.onTrigger(/* @__PURE__ */ j({ effect: e10 }, t10)), e10.scheduler ? e10.scheduler() : e10.run());
}
let eV = /* @__PURE__ */ x("__proto__,__v_isRef,__isVue"), eD = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e10) => "arguments" !== e10 && "caller" !== e10).map((e10) => Symbol[e10]).filter(V)), eU = /* @__PURE__ */ function() {
  let e10 = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t10) => {
    e10[t10] = function() {
      for (var e11 = arguments.length, r10 = Array(e11), o10 = 0; o10 < e11; o10++)
        r10[o10] = arguments[o10];
      let i10 = /* @__PURE__ */ tw(this);
      for (let e12 = 0, t11 = this.length; e12 < t11; e12++)
        eR(i10, "get", e12 + "");
      let l10 = /* @__PURE__ */ i10[t10](...r10);
      return -1 === l10 || false === l10 ? i10[t10](.../* @__PURE__ */ r10.map(tw)) : l10;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t10) => {
    e10[t10] = function() {
      for (var e11 = arguments.length, r10 = Array(e11), o10 = 0; o10 < e11; o10++)
        r10[o10] = arguments[o10];
      eT();
      let i10 = /* @__PURE__ */ tw(this)[t10].apply(this, r10);
      return eI(), i10;
    };
  }), e10;
}();
function ez(e10) {
  let t10 = /* @__PURE__ */ tw(this);
  return eR(t10, "has", e10), t10.hasOwnProperty(e10);
}
class eB {
  constructor(e10 = false, t10 = false) {
    this._isReadonly = e10, this._shallow = t10;
  }
  get(e10, t10, r10) {
    let o10 = this._isReadonly, i10 = this._shallow;
    if ("__v_isReactive" === t10)
      return !o10;
    if ("__v_isReadonly" === t10)
      return o10;
    if ("__v_isShallow" === t10)
      return i10;
    if ("__v_raw" === t10 && r10 === (o10 ? i10 ? tf : tc : i10 ? tu : ts).get(e10))
      return e10;
    let l10 = /* @__PURE__ */ R(e10);
    if (!o10) {
      if (l10 && I(eU, t10))
        return Reflect.get(eU, t10, r10);
      if ("hasOwnProperty" === t10)
        return ez;
    }
    let a10 = /* @__PURE__ */ Reflect.get(e10, t10, r10);
    return (V(t10) ? eD.has(t10) : eV(t10)) ? a10 : (o10 || eR(e10, "get", t10), i10) ? a10 : tC(a10) ? l10 && H(t10) ? a10 : a10.value : D(a10) ? o10 ? th(a10) : tp(a10) : a10;
  }
}
class eW extends eB {
  constructor(e10 = false) {
    super(false, e10);
  }
  set(e10, t10, r10, o10) {
    let i10 = e10[t10];
    if (ty(i10) && tC(i10) && !tC(r10))
      return false;
    if (!this._shallow && (tb(r10) || ty(r10) || (i10 = /* @__PURE__ */ tw(i10), r10 = /* @__PURE__ */ tw(r10)), !R(e10) && tC(i10) && !tC(r10)))
      return i10.value = r10, true;
    let l10 = R(e10) && H(t10) ? Number(t10) < e10.length : I(e10, t10), a10 = /* @__PURE__ */ Reflect.set(e10, t10, r10, o10);
    return e10 === tw(o10) && (l10 ? en(r10, i10) && eM(e10, "set", t10, r10, i10) : eM(e10, "add", t10, r10)), a10;
  }
  deleteProperty(e10, t10) {
    let r10 = /* @__PURE__ */ I(e10, t10), o10 = e10[t10], i10 = /* @__PURE__ */ Reflect.deleteProperty(e10, t10);
    return i10 && r10 && eM(e10, "delete", t10, void 0, o10), i10;
  }
  has(e10, t10) {
    let r10 = /* @__PURE__ */ Reflect.has(e10, t10);
    return V(t10) && eD.has(t10) || eR(e10, "has", t10), r10;
  }
  ownKeys(e10) {
    return eR(e10, "iterate", R(e10) ? "length" : eO), Reflect.ownKeys(e10);
  }
}
class eq extends eB {
  constructor(e10 = false) {
    super(true, e10);
  }
  set(e10, t10) {
    return em(`Set operation on key "${String(t10)}" failed: target is readonly.`, e10), true;
  }
  deleteProperty(e10, t10) {
    return em(`Delete operation on key "${String(t10)}" failed: target is readonly.`, e10), true;
  }
}
let eH = /* @__PURE__ */ new eW(), eG = /* @__PURE__ */ new eq(), eK = /* @__PURE__ */ new eW(true), eY = /* @__PURE__ */ new eq(true), eJ = (e10) => e10, eQ = (e10) => Reflect.getPrototypeOf(e10);
function eX(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o10 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  e10 = e10.__v_raw;
  let i10 = /* @__PURE__ */ tw(e10), l10 = /* @__PURE__ */ tw(t10);
  r10 || (en(t10, l10) && eR(i10, "get", t10), eR(i10, "get", l10));
  let { has: a10 } = eQ(i10), s2 = o10 ? eJ : r10 ? tk : tS;
  return a10.call(i10, t10) ? s2(/* @__PURE__ */ e10.get(t10)) : a10.call(i10, l10) ? s2(/* @__PURE__ */ e10.get(l10)) : void (e10 !== i10 && e10.get(t10));
}
function eZ(e10) {
  let t10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r10 = this.__v_raw, o10 = /* @__PURE__ */ tw(r10), i10 = /* @__PURE__ */ tw(e10);
  return t10 || (en(e10, i10) && eR(o10, "has", e10), eR(o10, "has", i10)), e10 === i10 ? r10.has(e10) : r10.has(e10) || r10.has(i10);
}
function e0(e10) {
  let t10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return e10 = e10.__v_raw, t10 || eR(/* @__PURE__ */ tw(e10), "iterate", eO), Reflect.get(e10, "size", e10);
}
function e1(e10) {
  e10 = /* @__PURE__ */ tw(e10);
  let t10 = /* @__PURE__ */ tw(this), r10 = /* @__PURE__ */ eQ(t10), o10 = /* @__PURE__ */ r10.has.call(t10, e10);
  return o10 || (t10.add(e10), eM(t10, "add", e10, e10)), this;
}
function e2(e10, t10) {
  t10 = /* @__PURE__ */ tw(t10);
  let r10 = /* @__PURE__ */ tw(this), { has: o10, get: i10 } = eQ(r10), l10 = /* @__PURE__ */ o10.call(r10, e10);
  l10 ? ta(r10, o10, e10) : (e10 = /* @__PURE__ */ tw(e10), l10 = /* @__PURE__ */ o10.call(r10, e10));
  let a10 = /* @__PURE__ */ i10.call(r10, e10);
  return r10.set(e10, t10), l10 ? en(t10, a10) && eM(r10, "set", e10, t10, a10) : eM(r10, "add", e10, t10), this;
}
function e3(e10) {
  let t10 = /* @__PURE__ */ tw(this), { has: r10, get: o10 } = eQ(t10), i10 = /* @__PURE__ */ r10.call(t10, e10);
  i10 ? ta(t10, r10, e10) : (e10 = /* @__PURE__ */ tw(e10), i10 = /* @__PURE__ */ r10.call(t10, e10));
  let l10 = o10 ? o10.call(t10, e10) : void 0, a10 = /* @__PURE__ */ t10.delete(e10);
  return i10 && eM(t10, "delete", e10, void 0, l10), a10;
}
function e4() {
  let e10 = /* @__PURE__ */ tw(this), t10 = 0 !== e10.size, r10 = F(e10) ? new Map(e10) : new Set(e10), o10 = /* @__PURE__ */ e10.clear();
  return t10 && eM(e10, "clear", void 0, void 0, r10), o10;
}
function e6(e10, t10) {
  return function(r10, o10) {
    let i10 = this, l10 = i10.__v_raw, a10 = /* @__PURE__ */ tw(l10), s2 = t10 ? eJ : e10 ? tk : tS;
    return e10 || eR(a10, "iterate", eO), l10.forEach((e11, t11) => r10.call(o10, /* @__PURE__ */ s2(e11), /* @__PURE__ */ s2(t11), i10));
  };
}
function e8(e10, t10, r10) {
  return function() {
    for (var o10 = arguments.length, i10 = Array(o10), l10 = 0; l10 < o10; l10++)
      i10[l10] = arguments[l10];
    let a10 = this.__v_raw, s2 = /* @__PURE__ */ tw(a10), u2 = /* @__PURE__ */ F(s2), c2 = "entries" === e10 || e10 === Symbol.iterator && u2, f2 = "keys" === e10 && u2, p2 = /* @__PURE__ */ a10[e10](...i10), d2 = r10 ? eJ : t10 ? tk : tS;
    return t10 || eR(s2, "iterate", f2 ? eC : eO), {
      // iterator protocol
      next() {
        let { value: e11, done: t11 } = p2.next();
        return t11 ? { value: e11, done: t11 } : { value: c2 ? [/* @__PURE__ */ d2(e11[0]), /* @__PURE__ */ d2(e11[1])] : d2(e11), done: t11 };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function e5(e10) {
  return function() {
    for (var t10 = arguments.length, r10 = Array(t10), o10 = 0; o10 < t10; o10++)
      r10[o10] = arguments[o10];
    {
      let t11 = r10[0] ? `on key "${r10[0]}" ` : "";
      console.warn(`${ee(e10)} operation ${t11}failed: target is readonly.`, /* @__PURE__ */ tw(this));
    }
    return "delete" !== e10 && this;
  };
}
let [e7, e9, te, tt] = /* @__PURE__ */ function() {
  let e10 = { get(e11) {
    return eX(this, e11);
  }, get size() {
    return e0(this);
  }, has: eZ, add: e1, set: e2, delete: e3, clear: e4, forEach: /* @__PURE__ */ e6(false, false) }, t10 = { get(e11) {
    return eX(this, e11, false, true);
  }, get size() {
    return e0(this);
  }, has: eZ, add: e1, set: e2, delete: e3, clear: e4, forEach: /* @__PURE__ */ e6(false, true) }, r10 = { get(e11) {
    return eX(this, e11, true);
  }, get size() {
    return e0(this, true);
  }, has(e11) {
    return eZ.call(this, e11, true);
  }, add: /* @__PURE__ */ e5("add"), set: /* @__PURE__ */ e5("set"), delete: /* @__PURE__ */ e5("delete"), clear: /* @__PURE__ */ e5("clear"), forEach: /* @__PURE__ */ e6(true, false) }, o10 = { get(e11) {
    return eX(this, e11, true, true);
  }, get size() {
    return e0(this, true);
  }, has(e11) {
    return eZ.call(this, e11, true);
  }, add: /* @__PURE__ */ e5("add"), set: /* @__PURE__ */ e5("set"), delete: /* @__PURE__ */ e5("delete"), clear: /* @__PURE__ */ e5("clear"), forEach: /* @__PURE__ */ e6(true, true) }, i10 = ["keys", "values", "entries", Symbol.iterator];
  return i10.forEach((i11) => {
    e10[i11] = /* @__PURE__ */ e8(i11, false, false), r10[i11] = /* @__PURE__ */ e8(i11, true, false), t10[i11] = /* @__PURE__ */ e8(i11, false, true), o10[i11] = /* @__PURE__ */ e8(i11, true, true);
  }), [e10, r10, t10, o10];
}();
function tn(e10, t10) {
  let r10 = t10 ? e10 ? tt : te : e10 ? e9 : e7;
  return (t11, o10, i10) => "__v_isReactive" === o10 ? !e10 : "__v_isReadonly" === o10 ? e10 : "__v_raw" === o10 ? t11 : Reflect.get(I(r10, o10) && o10 in t11 ? r10 : t11, o10, i10);
}
let tr = { get: /* @__PURE__ */ tn(false, false) }, to = { get: /* @__PURE__ */ tn(false, true) }, ti = { get: /* @__PURE__ */ tn(true, false) }, tl = { get: /* @__PURE__ */ tn(true, true) };
function ta(e10, t10, r10) {
  let o10 = /* @__PURE__ */ tw(r10);
  if (o10 !== r10 && t10.call(e10, o10)) {
    let t11 = /* @__PURE__ */ W(e10);
    console.warn(`Reactive ${t11} contains both the raw and reactive versions of the same object${"Map" === t11 ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
let ts = /* @__PURE__ */ new WeakMap(), tu = /* @__PURE__ */ new WeakMap(), tc = /* @__PURE__ */ new WeakMap(), tf = /* @__PURE__ */ new WeakMap();
function tp(e10) {
  return ty(e10) ? e10 : tm(e10, false, eH, tr, ts);
}
function td(e10) {
  return tm(e10, false, eK, to, tu);
}
function th(e10) {
  return tm(e10, true, eG, ti, tc);
}
function tv(e10) {
  return tm(e10, true, eY, tl, tf);
}
function tm(e10, t10, r10, o10, i10) {
  if (!D(e10))
    return console.warn(`value cannot be made reactive: ${String(e10)}`), e10;
  if (e10.__v_raw && !(t10 && e10.__v_isReactive))
    return e10;
  let l10 = /* @__PURE__ */ i10.get(e10);
  if (l10)
    return l10;
  let a10 = e10.__v_skip || !Object.isExtensible(e10) ? 0 : function(e11) {
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
  }(/* @__PURE__ */ W(e10));
  if (0 === a10)
    return e10;
  let s2 = new Proxy(e10, 2 === a10 ? o10 : r10);
  return i10.set(e10, s2), s2;
}
function tg(e10) {
  return ty(e10) ? tg(e10.__v_raw) : !!(e10 && e10.__v_isReactive);
}
function ty(e10) {
  return !!(e10 && e10.__v_isReadonly);
}
function tb(e10) {
  return !!(e10 && e10.__v_isShallow);
}
function t_(e10) {
  return tg(e10) || ty(e10);
}
function tw(e10) {
  let t10 = e10 && e10.__v_raw;
  return t10 ? tw(t10) : e10;
}
function tx(e10) {
  return eo(e10, "__v_skip", true), e10;
}
let tS = (e10) => D(e10) ? tp(e10) : e10, tk = (e10) => D(e10) ? th(e10) : e10;
function t$(e10) {
  ej && r && eF((e10 = /* @__PURE__ */ tw(e10)).dep || (e10.dep = /* @__PURE__ */ ey()), { target: e10, type: "get", key: "value" });
}
function tO(e10, t10) {
  e10 = /* @__PURE__ */ tw(e10);
  let r10 = e10.dep;
  r10 && eN(r10, { target: e10, type: "set", key: "value", newValue: t10 });
}
function tC(e10) {
  return !!(e10 && true === e10.__v_isRef);
}
function tE(e10) {
  return tj(e10, false);
}
function tP(e10) {
  return tj(e10, true);
}
function tj(e10, t10) {
  return tC(e10) ? e10 : new tA(e10, t10);
}
class tA {
  constructor(e10, t10) {
    this.__v_isShallow = t10, this.dep = void 0, this.__v_isRef = true, this._rawValue = t10 ? e10 : tw(e10), this._value = t10 ? e10 : tS(e10);
  }
  get value() {
    return t$(this), this._value;
  }
  set value(e10) {
    let t10 = this.__v_isShallow || tb(e10) || ty(e10);
    en(e10 = t10 ? e10 : tw(e10), this._rawValue) && (this._rawValue = e10, this._value = t10 ? e10 : tS(e10), tO(this, e10));
  }
}
function tT(e10) {
  return tC(e10) ? e10.value : e10;
}
let tI = { get: (e10, t10, r10) => tT(/* @__PURE__ */ Reflect.get(e10, t10, r10)), set: (e10, t10, r10, o10) => {
  let i10 = e10[t10];
  return tC(i10) && !tC(r10) ? (i10.value = r10, true) : Reflect.set(e10, t10, r10, o10);
} };
function tR(e10) {
  return tg(e10) ? e10 : new Proxy(e10, tI);
}
class tF {
  constructor(e10) {
    this.dep = void 0, this.__v_isRef = true;
    let { get: t10, set: r10 } = e10(() => t$(this), () => tO(this));
    this._get = t10, this._set = r10;
  }
  get value() {
    return this._get();
  }
  set value(e10) {
    this._set(e10);
  }
}
class tM {
  constructor(e10, t10, r10, o10) {
    this._setter = t10, this.dep = void 0, this.__v_isRef = true, this.__v_isReadonly = false, this._dirty = true, this.effect = new eE(e10, () => {
      this._dirty || (this._dirty = true, tO(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !o10, this.__v_isReadonly = r10;
  }
  get value() {
    let e10 = /* @__PURE__ */ tw(this);
    return t$(e10), (e10._dirty || !e10._cacheable) && (e10._dirty = false, e10._value = /* @__PURE__ */ e10.effect.run()), e10._value;
  }
  set value(e10) {
    this._setter(e10);
  }
}
let tN = [];
function tL(e10) {
  tN.push(e10);
}
function tV() {
  tN.pop();
}
function tD(e10) {
  for (var t10 = arguments.length, r10 = Array(t10 > 1 ? t10 - 1 : 0), o10 = 1; o10 < t10; o10++)
    r10[o10 - 1] = arguments[o10];
  eT();
  let i10 = tN.length ? tN[tN.length - 1].component : null, l10 = i10 && i10.appContext.config.warnHandler, a10 = /* @__PURE__ */ function() {
    let e11 = tN[tN.length - 1];
    if (!e11)
      return [];
    let t11 = [];
    for (; e11; ) {
      let r11 = t11[0];
      r11 && r11.vnode === e11 ? r11.recurseCount++ : t11.push({ vnode: e11, recurseCount: 0 });
      let o11 = e11.component && e11.component.parent;
      e11 = o11 && o11.vnode;
    }
    return t11;
  }();
  if (l10)
    tz(l10, i10, 11, [e10 + r10.join(""), i10 && i10.proxy, /* @__PURE__ */ a10.map((e11) => {
      let { vnode: t11 } = e11;
      return `at <${oO(i10, t11.type)}>`;
    }).join("\n"), a10]);
  else {
    let t11 = [`[Vue warn]: ${e10}`, ...r10];
    a10.length && t11.push(`
`, .../* @__PURE__ */ function(e11) {
      let t12 = [];
      return e11.forEach((e12, r11) => {
        t12.push(...0 === r11 ? [] : [`
`], .../* @__PURE__ */ function(e13) {
          let { vnode: t13, recurseCount: r12 } = e13, o11 = r12 > 0 ? `... (${r12} recursive calls)` : "", i11 = !!t13.component && null == t13.component.parent, l11 = ` at <${oO(t13.component, t13.type, i11)}`, a11 = ">" + o11;
          return t13.props ? [l11, .../* @__PURE__ */ function(e14) {
            let t14 = [], r13 = /* @__PURE__ */ Object.keys(e14);
            return r13.slice(0, 3).forEach((r14) => {
              t14.push(.../* @__PURE__ */ function e15(t15, r15, o12) {
                return L(r15) ? (r15 = /* @__PURE__ */ JSON.stringify(r15), o12 ? r15 : [`${t15}=${r15}`]) : "number" == typeof r15 || "boolean" == typeof r15 || null == r15 ? o12 ? r15 : [`${t15}=${r15}`] : tC(r15) ? (r15 = /* @__PURE__ */ e15(t15, /* @__PURE__ */ tw(r15.value), true), o12 ? r15 : [`${t15}=Ref<`, r15, ">"]) : N(r15) ? [`${t15}=fn${r15.name ? `<${r15.name}>` : ""}`] : (r15 = /* @__PURE__ */ tw(r15), o12 ? r15 : [`${t15}=`, r15]);
              }(r14, e14[r14]));
            }), r13.length > 3 && t14.push(" ..."), t14;
          }(t13.props), a11] : [l11 + a11];
        }(e12));
      }), t12;
    }(a10)), console.warn(...t11);
  }
  eI();
}
let tU = { sp: "serverPrefetch hook", bc: "beforeCreate hook", c: "created hook", bm: "beforeMount hook", m: "mounted hook", bu: "beforeUpdate hook", u: "updated", bum: "beforeUnmount hook", um: "unmounted hook", a: "activated hook", da: "deactivated hook", ec: "errorCaptured hook", rtc: "renderTracked hook", rtg: "renderTriggered hook", 0: "setup function", 1: "render function", 2: "watcher getter", 3: "watcher callback", 4: "watcher cleanup function", 5: "native event handler", 6: "component event handler", 7: "vnode hook", 8: "directive hook", 9: "transition hook", 10: "app errorHandler", 11: "app warnHandler", 12: "ref function", 13: "async component loader", 14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core" };
function tz(e10, t10, r10, o10) {
  let i10;
  try {
    i10 = o10 ? e10(...o10) : e10();
  } catch (e11) {
    tW(e11, t10, r10);
  }
  return i10;
}
function tB(e10, t10, r10, o10) {
  if (N(e10)) {
    let i11 = /* @__PURE__ */ tz(e10, t10, r10, o10);
    return i11 && U(i11) && i11.catch((e11) => {
      tW(e11, t10, r10);
    }), i11;
  }
  let i10 = [];
  for (let l10 = 0; l10 < e10.length; l10++)
    i10.push(/* @__PURE__ */ tB(e10[l10], t10, r10, o10));
  return i10;
}
function tW(e10, t10, r10) {
  let o10 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3], i10 = t10 ? t10.vnode : null;
  if (t10) {
    let o11 = t10.parent, i11 = t10.proxy, l10 = tU[r10];
    for (; o11; ) {
      let t11 = o11.ec;
      if (t11) {
        for (let r11 = 0; r11 < t11.length; r11++)
          if (false === t11[r11](e10, i11, l10))
            return;
      }
      o11 = o11.parent;
    }
    let a10 = t10.appContext.config.errorHandler;
    if (a10) {
      tz(a10, null, 10, [e10, i11, l10]);
      return;
    }
  }
  !function(e11, t11, r11) {
    let o11 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    {
      let i11 = tU[t11];
      if (r11 && tL(r11), tD(`Unhandled error${i11 ? ` during execution of ${i11}` : ""}`), r11 && tV(), o11)
        throw e11;
      console.error(e11);
    }
  }(e10, r10, i10, o10);
}
let tq = false, tH = false, tG = [], tK = 0, tY = [], tJ = null, tQ = 0, tX = /* @__PURE__ */ Promise.resolve(), tZ = null;
function t0(e10) {
  let t10 = tZ || tX;
  return e10 ? t10.then(this ? e10.bind(this) : e10) : t10;
}
function t1(e10) {
  tG.length && tG.includes(e10, tq && e10.allowRecurse ? tK + 1 : tK) || (null == e10.id ? tG.push(e10) : tG.splice(/* @__PURE__ */ function(e11) {
    let t10 = tK + 1, r10 = tG.length;
    for (; t10 < r10; ) {
      let o10 = t10 + r10 >>> 1, i10 = tG[o10], l10 = /* @__PURE__ */ t8(i10);
      l10 < e11 || l10 === e11 && i10.pre ? t10 = o10 + 1 : r10 = o10;
    }
    return t10;
  }(e10.id), 0, e10), t2());
}
function t2() {
  tq || tH || (tH = true, tZ = /* @__PURE__ */ tX.then(function e10(t10) {
    tH = false, tq = true, t10 = t10 || /* @__PURE__ */ new Map(), tG.sort(t5);
    let r10 = (e11) => t7(t10, e11);
    try {
      for (tK = 0; tK < tG.length; tK++) {
        let e11 = tG[tK];
        if (e11 && false !== e11.active) {
          if (r10(e11))
            continue;
          tz(e11, null, 14);
        }
      }
    } finally {
      tK = 0, tG.length = 0, t6(t10), tq = false, tZ = null, (tG.length || tY.length) && e10(t10);
    }
  }));
}
function t3(e10) {
  R(e10) ? tY.push(...e10) : tJ && tJ.includes(e10, e10.allowRecurse ? tQ + 1 : tQ) || tY.push(e10), t2();
}
function t4(e10) {
  let t10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tq ? tK + 1 : 0;
  for (e10 = e10 || /* @__PURE__ */ new Map(); t10 < tG.length; t10++) {
    let r10 = tG[t10];
    if (r10 && r10.pre) {
      if (t7(e10, r10))
        continue;
      tG.splice(t10, 1), t10--, r10();
    }
  }
}
function t6(e10) {
  if (tY.length) {
    let t10 = [...new Set(tY)];
    if (tY.length = 0, tJ) {
      tJ.push(...t10);
      return;
    }
    for (tJ = t10, e10 = e10 || /* @__PURE__ */ new Map(), tJ.sort((e11, t11) => t8(e11) - t8(t11)), tQ = 0; tQ < tJ.length; tQ++)
      t7(e10, tJ[tQ]) || tJ[tQ]();
    tJ = null, tQ = 0;
  }
}
let t8 = (e10) => null == e10.id ? 1 / 0 : e10.id, t5 = (e10, t10) => {
  let r10 = t8(e10) - t8(t10);
  if (0 === r10) {
    if (e10.pre && !t10.pre)
      return -1;
    if (t10.pre && !e10.pre)
      return 1;
  }
  return r10;
};
function t7(e10, t10) {
  if (e10.has(t10)) {
    let r10 = /* @__PURE__ */ e10.get(t10);
    if (r10 > 100) {
      let e11 = t10.ownerInstance, r11 = e11 && o$(e11.type);
      return tD(`Maximum recursive updates exceeded${r11 ? ` in component <${r11}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), true;
    }
    e10.set(t10, r10 + 1);
  } else
    e10.set(t10, 1);
}
let t9 = false, ne = /* @__PURE__ */ new Set();
ea().__VUE_HMR_RUNTIME__ = { createRecord: /* @__PURE__ */ ni(nn), rerender: /* @__PURE__ */ ni(function(e10, t10) {
  let r10 = /* @__PURE__ */ nt.get(e10);
  r10 && (r10.initialDef.render = t10, [...r10.instances].forEach((e11) => {
    t10 && (e11.render = t10, nr(e11.type).render = t10), e11.renderCache = [], t9 = true, e11.update(), t9 = false;
  }));
}), reload: /* @__PURE__ */ ni(function(e10, t10) {
  let r10 = /* @__PURE__ */ nt.get(e10);
  if (!r10)
    return;
  t10 = /* @__PURE__ */ nr(t10), no(r10.initialDef, t10);
  let o10 = [...r10.instances];
  for (let e11 of o10) {
    let o11 = /* @__PURE__ */ nr(e11.type);
    ne.has(o11) || (o11 !== r10.initialDef && no(o11, t10), ne.add(o11)), e11.appContext.propsCache.delete(e11.type), e11.appContext.emitsCache.delete(e11.type), e11.appContext.optionsCache.delete(e11.type), e11.ceReload ? (ne.add(o11), e11.ceReload(t10.styles), ne.delete(o11)) : e11.parent ? t1(e11.parent.update) : e11.appContext.reload ? e11.appContext.reload() : "undefined" != typeof window ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  t3(() => {
    for (let e11 of o10)
      ne.delete(/* @__PURE__ */ nr(e11.type));
  });
}) };
let nt = /* @__PURE__ */ new Map();
function nn(e10, t10) {
  return !nt.has(e10) && (nt.set(e10, { initialDef: /* @__PURE__ */ nr(t10), instances: /* @__PURE__ */ new Set() }), true);
}
function nr(e10) {
  return oC(e10) ? e10.__vccOpts : e10;
}
function no(e10, t10) {
  for (let r10 in j(e10, t10), e10)
    "__file" === r10 || r10 in t10 || delete e10[r10];
}
function ni(e10) {
  return (t10, r10) => {
    try {
      return e10(t10, r10);
    } catch (e11) {
      console.error(e11), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let nl = [], na = false;
function ns(e10) {
  for (var t10 = arguments.length, r10 = Array(t10 > 1 ? t10 - 1 : 0), i10 = 1; i10 < t10; i10++)
    r10[i10 - 1] = arguments[i10];
  o ? o.emit(e10, ...r10) : na || nl.push({ event: e10, args: r10 });
}
let nu = /* @__PURE__ */ nd(
  "component:added"
  /* COMPONENT_ADDED */
), nc = /* @__PURE__ */ nd(
  "component:updated"
  /* COMPONENT_UPDATED */
), nf = /* @__PURE__ */ nd(
  "component:removed"
  /* COMPONENT_REMOVED */
), np = (e10) => {
  o && "function" == typeof o.cleanupBuffer && // remove the component if it wasn't buffered
  !o.cleanupBuffer(e10) && nf(e10);
};
function nd(e10) {
  return (t10) => {
    ns(e10, t10.appContext.app, t10.uid, t10.parent ? t10.parent.uid : void 0, t10);
  };
}
let nh = /* @__PURE__ */ nm(
  "perf:start"
  /* PERFORMANCE_START */
), nv = /* @__PURE__ */ nm(
  "perf:end"
  /* PERFORMANCE_END */
);
function nm(e10) {
  return (t10, r10, o10) => {
    ns(e10, t10.appContext.app, t10.uid, t10, r10, o10);
  };
}
function ng(e10, t10) {
  let r10;
  for (var o10, i10 = arguments.length, l10 = Array(i10 > 2 ? i10 - 2 : 0), a10 = 2; a10 < i10; a10++)
    l10[a10 - 2] = arguments[a10];
  if (e10.isUnmounted)
    return;
  let s2 = e10.vnode.props || S;
  {
    let { emitsOptions: r11, propsOptions: [o11] } = e10;
    if (r11) {
      if (t10 in r11) {
        let e11 = r11[t10];
        if (N(e11)) {
          let r12 = /* @__PURE__ */ e11(...l10);
          r12 || tD(`Invalid event arguments: event validation failed for event "${t10}".`);
        }
      } else
        o11 && et(t10) in o11 || tD(`Component emitted event "${t10}" but it is neither declared in the emits option nor as an "${et(t10)}" prop.`);
    }
  }
  let u2 = l10, c2 = /* @__PURE__ */ t10.startsWith("update:"), f2 = c2 && t10.slice(7);
  if (f2 && f2 in s2) {
    let e11 = `${"modelValue" === f2 ? "model" : f2}Modifiers`, { number: t11, trim: r11 } = s2[e11] || S;
    r11 && (u2 = /* @__PURE__ */ l10.map((e12) => L(e12) ? e12.trim() : e12)), t11 && (u2 = /* @__PURE__ */ l10.map(ei));
  }
  o10 = u2, ns("component:emit", e10.appContext.app, e10, t10, o10);
  {
    let r11 = /* @__PURE__ */ t10.toLowerCase();
    r11 !== t10 && s2[et(r11)] && tD(`Event "${r11}" is emitted in component ${oO(e10, e10.type)} but the handler is registered for "${t10}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Z(t10)}" instead of "${t10}".`);
  }
  let p2 = s2[r10 = /* @__PURE__ */ et(t10)] || // also try camelCase event handler (#2249)
  s2[r10 = /* @__PURE__ */ et(/* @__PURE__ */ Q(t10))];
  !p2 && c2 && (p2 = s2[r10 = /* @__PURE__ */ et(/* @__PURE__ */ Z(t10))]), p2 && tB(p2, e10, 6, u2);
  let d2 = s2[r10 + "Once"];
  if (d2) {
    if (e10.emitted) {
      if (e10.emitted[r10])
        return;
    } else
      e10.emitted = {};
    e10.emitted[r10] = true, tB(d2, e10, 6, u2);
  }
}
function ny(e10, t10) {
  return !!(e10 && E(t10)) && (I(e10, (t10 = /* @__PURE__ */ t10.slice(2).replace(/Once$/, ""))[0].toLowerCase() + t10.slice(1)) || I(e10, /* @__PURE__ */ Z(t10)) || I(e10, t10));
}
let nb = null, n_ = null;
function nw(e10) {
  let t10 = nb;
  return nb = e10, n_ = e10 && e10.type.__scopeId || null, t10;
}
let nx = false;
function nS(e10) {
  let t10, r10, o10;
  let { type: i10, vnode: l10, proxy: a10, withProxy: s2, props: u2, propsOptions: [c2], slots: f2, attrs: p2, emit: d2, render: h2, renderCache: m2, data: g2, setupState: y2, ctx: b2, inheritAttrs: _2 } = e10, w2 = /* @__PURE__ */ nw(e10);
  nx = false;
  try {
    if (4 & l10.shapeFlag) {
      let e11 = s2 || a10;
      t10 = /* @__PURE__ */ oo(/* @__PURE__ */ h2.call(e11, e11, m2, u2, y2, g2, b2)), r10 = p2;
    } else
      p2 === u2 && (nx = true), t10 = /* @__PURE__ */ oo(i10.length > 1 ? i10(u2, { get attrs() {
        return nx = true, p2;
      }, slots: f2, emit: d2 }) : i10(u2, null)), r10 = i10.props ? p2 : nO(p2);
  } catch (r11) {
    tW(r11, e10, 1), t10 = /* @__PURE__ */ ot(r3);
  }
  let x2 = t10;
  if (t10.patchFlag > 0 && 2048 & t10.patchFlag && ([x2, o10] = /* @__PURE__ */ nk(t10)), r10 && false !== _2) {
    let e11 = /* @__PURE__ */ Object.keys(r10), { shapeFlag: t11 } = x2;
    if (e11.length) {
      if (7 & t11)
        c2 && e11.some(P) && (r10 = /* @__PURE__ */ nC(r10, c2)), x2 = /* @__PURE__ */ on(x2, r10);
      else if (!nx && x2.type !== r3) {
        let e12 = /* @__PURE__ */ Object.keys(p2), t12 = [], r11 = [];
        for (let o11 = 0, i11 = e12.length; o11 < i11; o11++) {
          let i12 = e12[o11];
          E(i12) ? P(i12) || t12.push(i12[2].toLowerCase() + i12.slice(3)) : r11.push(i12);
        }
        r11.length && tD(`Extraneous non-props attributes (${r11.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), t12.length && tD(`Extraneous non-emits event listeners (${t12.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return l10.dirs && (nE(x2) || tD("Runtime directive used on component with non-element root node. The directives will not function as intended."), (x2 = /* @__PURE__ */ on(x2)).dirs = x2.dirs ? x2.dirs.concat(l10.dirs) : l10.dirs), l10.transition && (nE(x2) || tD("Component inside <Transition> renders non-element root node that cannot be animated."), x2.transition = l10.transition), o10 ? o10(x2) : t10 = x2, nw(w2), t10;
}
let nk = (e10) => {
  let t10 = e10.children, r10 = e10.dynamicChildren, o10 = /* @__PURE__ */ n$(t10);
  if (!o10)
    return [e10, void 0];
  let i10 = /* @__PURE__ */ t10.indexOf(o10), l10 = r10 ? r10.indexOf(o10) : -1;
  return [/* @__PURE__ */ oo(o10), (o11) => {
    t10[i10] = o11, r10 && (l10 > -1 ? r10[l10] = o11 : o11.patchFlag > 0 && (e10.dynamicChildren = [...r10, o11]));
  }];
};
function n$(e10) {
  let t10;
  for (let r10 = 0; r10 < e10.length; r10++) {
    let o10 = e10[r10];
    if (!r8(o10))
      return;
    if (o10.type !== r3 || "v-if" === o10.children) {
      if (t10)
        return;
      t10 = o10;
    }
  }
  return t10;
}
let nO = (e10) => {
  let t10;
  for (let r10 in e10)
    ("class" === r10 || "style" === r10 || E(r10)) && ((t10 || (t10 = {}))[r10] = e10[r10]);
  return t10;
}, nC = (e10, t10) => {
  let r10 = {};
  for (let o10 in e10)
    P(o10) && o10.slice(9) in t10 || (r10[o10] = e10[o10]);
  return r10;
}, nE = (e10) => 7 & e10.shapeFlag || e10.type === r3;
function nP(e10, t10, r10) {
  let o10 = /* @__PURE__ */ Object.keys(t10);
  if (o10.length !== Object.keys(e10).length)
    return true;
  for (let i10 = 0; i10 < o10.length; i10++) {
    let l10 = o10[i10];
    if (t10[l10] !== e10[l10] && !ny(r10, l10))
      return true;
  }
  return false;
}
let nj = /* @__PURE__ */ Symbol.for("v-ndc"), nA = (e10) => e10.__isSuspense, nT = {};
function nI(e10, t10, r10) {
  return N(t10) || tD("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), nR(e10, t10, r10);
}
function nR(e10, r10) {
  var o10;
  let i10, l10, a10, s2, { immediate: u2, deep: c2, flush: f2, onTrack: p2, onTrigger: d2 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : S;
  r10 || (void 0 !== u2 && tD('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), void 0 !== c2 && tD('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  let h2 = (e11) => {
    tD("Invalid watch source: ", e11, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, m2 = t === (null == (o10 = oc) ? void 0 : o10.scope) ? oc : null, g2 = false, y2 = false;
  if (tC(e10) ? (i10 = () => e10.value, g2 = /* @__PURE__ */ tb(e10)) : tg(e10) ? (i10 = () => e10, c2 = true) : R(e10) ? (y2 = true, g2 = /* @__PURE__ */ e10.some((e11) => tg(e11) || tb(e11)), i10 = () => e10.map((e11) => tC(e11) ? e11.value : tg(e11) ? nN(e11) : N(e11) ? tz(e11, m2, 2) : void h2(e11))) : N(e10) ? i10 = r10 ? () => tz(e10, m2, 2) : () => {
    if (!m2 || !m2.isUnmounted)
      return l10 && l10(), tB(e10, m2, 3, [b2]);
  } : (i10 = $, h2(e10)), r10 && c2) {
    let e11 = i10;
    i10 = () => nN(/* @__PURE__ */ e11());
  }
  let b2 = (e11) => {
    l10 = x2.onStop = () => {
      tz(e11, m2, 4);
    };
  };
  if (oy) {
    if (b2 = $, r10 ? u2 && tB(r10, m2, 3, [/* @__PURE__ */ i10(), y2 ? [] : void 0, b2]) : i10(), "sync" !== f2)
      return $;
    {
      let e11 = /* @__PURE__ */ oA();
      a10 = e11.__watcherHandles || (e11.__watcherHandles = []);
    }
  }
  let _2 = y2 ? Array(e10.length).fill(nT) : nT, w2 = () => {
    if (x2.active) {
      if (r10) {
        let e11 = /* @__PURE__ */ x2.run();
        (c2 || g2 || (y2 ? e11.some((e12, t10) => en(e12, _2[t10])) : en(e11, _2))) && (l10 && l10(), tB(r10, m2, 3, [
          e11,
          // pass undefined as the old value when it's changed for the first time
          _2 === nT ? void 0 : y2 && _2[0] === nT ? [] : _2,
          b2
        ]), _2 = e11);
      } else
        x2.run();
    }
  };
  w2.allowRecurse = !!r10, "sync" === f2 ? s2 = w2 : "post" === f2 ? s2 = () => rq(w2, m2 && m2.suspense) : (w2.pre = true, m2 && (w2.id = m2.uid), s2 = () => t1(w2));
  let x2 = new eE(i10, s2);
  x2.onTrack = p2, x2.onTrigger = d2, r10 ? u2 ? w2() : _2 = /* @__PURE__ */ x2.run() : "post" === f2 ? rq(/* @__PURE__ */ x2.run.bind(x2), m2 && m2.suspense) : x2.run();
  let k2 = () => {
    x2.stop(), m2 && m2.scope && A(m2.scope.effects, x2);
  };
  return a10 && a10.push(k2), k2;
}
function nF(e10, t10, r10) {
  let o10;
  let i10 = this.proxy, l10 = L(e10) ? e10.includes(".") ? nM(i10, e10) : () => i10[e10] : e10.bind(i10, i10);
  N(t10) ? o10 = t10 : (o10 = t10.handler, r10 = t10);
  let a10 = oc;
  od(this);
  let s2 = /* @__PURE__ */ nR(l10, /* @__PURE__ */ o10.bind(i10), r10);
  return a10 ? od(a10) : oh(), s2;
}
function nM(e10, t10) {
  let r10 = /* @__PURE__ */ t10.split(".");
  return () => {
    let t11 = e10;
    for (let e11 = 0; e11 < r10.length && t11; e11++)
      t11 = t11[r10[e11]];
    return t11;
  };
}
function nN(e10, t10) {
  if (!D(e10) || e10.__v_skip || (t10 = t10 || /* @__PURE__ */ new Set()).has(e10))
    return e10;
  if (t10.add(e10), tC(e10))
    nN(e10.value, t10);
  else if (R(e10))
    for (let r10 = 0; r10 < e10.length; r10++)
      nN(e10[r10], t10);
  else if (M(e10) || F(e10))
    e10.forEach((e11) => {
      nN(e11, t10);
    });
  else if (q(e10))
    for (let r10 in e10)
      nN(e10[r10], t10);
  return e10;
}
function nL(e10) {
  K(e10) && tD("Do not use built-in directive ids as custom directive id: " + e10);
}
function nV(e10, t10, r10, o10) {
  let i10 = e10.dirs, l10 = t10 && t10.dirs;
  for (let a10 = 0; a10 < i10.length; a10++) {
    let s2 = i10[a10];
    l10 && (s2.oldValue = l10[a10].value);
    let u2 = s2.dir[o10];
    u2 && (eT(), tB(u2, r10, 8, [e10.el, s2, e10, t10]), eI());
  }
}
let nD = /* @__PURE__ */ Symbol("_leaveCb"), nU = /* @__PURE__ */ Symbol("_enterCb"), nz = [Function, Array], nB = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: nz,
  onEnter: nz,
  onAfterEnter: nz,
  onEnterCancelled: nz,
  // leave
  onBeforeLeave: nz,
  onLeave: nz,
  onAfterLeave: nz,
  onLeaveCancelled: nz,
  // appear
  onBeforeAppear: nz,
  onAppear: nz,
  onAfterAppear: nz,
  onAppearCancelled: nz
}, nW = { name: "BaseTransition", props: nB, setup(e10, t10) {
  let r10, { slots: o10 } = t10, i10 = /* @__PURE__ */ of(), l10 = /* @__PURE__ */ function() {
    let e11 = { isMounted: false, isLeaving: false, isUnmounting: false, leavingVNodes: /* @__PURE__ */ new Map() };
    return n6(() => {
      e11.isMounted = true;
    }), n7(() => {
      e11.isUnmounting = true;
    }), e11;
  }();
  return () => {
    let t11 = o10.default && function e11(t12) {
      let r11 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], o11 = arguments.length > 2 ? arguments[2] : void 0, i11 = [], l11 = 0;
      for (let a11 = 0; a11 < t12.length; a11++) {
        let s3 = t12[a11], u3 = null == o11 ? s3.key : String(o11) + String(null != s3.key ? s3.key : a11);
        s3.type === r1 ? (128 & s3.patchFlag && l11++, i11 = /* @__PURE__ */ i11.concat(/* @__PURE__ */ e11(s3.children, r11, u3))) : (r11 || s3.type !== r3) && i11.push(null != u3 ? on(s3, { key: u3 }) : s3);
      }
      if (l11 > 1)
        for (let e12 = 0; e12 < i11.length; e12++)
          i11[e12].patchFlag = -2;
      return i11;
    }(/* @__PURE__ */ o10.default(), true);
    if (!t11 || !t11.length)
      return;
    let a10 = t11[0];
    if (t11.length > 1) {
      let e11 = false;
      for (let r11 of t11)
        if (r11.type !== r3) {
          if (e11) {
            tD("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
            break;
          }
          a10 = r11, e11 = true;
        }
    }
    let s2 = /* @__PURE__ */ tw(e10), { mode: u2 } = s2;
    if (u2 && "in-out" !== u2 && "out-in" !== u2 && "default" !== u2 && tD(`invalid <transition> mode: ${u2}`), l10.isLeaving)
      return nG(a10);
    let c2 = /* @__PURE__ */ nK(a10);
    if (!c2)
      return nG(a10);
    let f2 = /* @__PURE__ */ nH(c2, s2, l10, i10);
    nY(c2, f2);
    let p2 = i10.subTree, d2 = p2 && nK(p2), h2 = false, { getTransitionKey: m2 } = c2.type;
    if (m2) {
      let e11 = /* @__PURE__ */ m2();
      void 0 === r10 ? r10 = e11 : e11 !== r10 && (r10 = e11, h2 = true);
    }
    if (d2 && d2.type !== r3 && (!r5(c2, d2) || h2)) {
      let e11 = /* @__PURE__ */ nH(d2, s2, l10, i10);
      if (nY(d2, e11), "out-in" === u2)
        return l10.isLeaving = true, e11.afterLeave = () => {
          l10.isLeaving = false, false !== i10.update.active && i10.update();
        }, nG(a10);
      "in-out" === u2 && c2.type !== r3 && (e11.delayLeave = (e12, t12, r11) => {
        let o11 = /* @__PURE__ */ nq(l10, d2);
        o11[String(d2.key)] = d2, e12[nD] = () => {
          t12(), e12[nD] = void 0, delete f2.delayedLeave;
        }, f2.delayedLeave = r11;
      });
    }
    return a10;
  };
} };
function nq(e10, t10) {
  let { leavingVNodes: r10 } = e10, o10 = /* @__PURE__ */ r10.get(t10.type);
  return o10 || (o10 = /* @__PURE__ */ Object.create(null), r10.set(t10.type, o10)), o10;
}
function nH(e10, t10, r10, o10) {
  let { appear: i10, mode: l10, persisted: a10 = false, onBeforeEnter: s2, onEnter: u2, onAfterEnter: c2, onEnterCancelled: f2, onBeforeLeave: p2, onLeave: d2, onAfterLeave: h2, onLeaveCancelled: m2, onBeforeAppear: g2, onAppear: y2, onAfterAppear: b2, onAppearCancelled: _2 } = t10, w2 = /* @__PURE__ */ String(e10.key), x2 = /* @__PURE__ */ nq(r10, e10), S2 = (e11, t11) => {
    e11 && tB(e11, o10, 9, t11);
  }, k2 = (e11, t11) => {
    let r11 = t11[1];
    S2(e11, t11), R(e11) ? e11.every((e12) => e12.length <= 1) && r11() : e11.length <= 1 && r11();
  }, $2 = { mode: l10, persisted: a10, beforeEnter(t11) {
    let o11 = s2;
    if (!r10.isMounted) {
      if (!i10)
        return;
      o11 = g2 || s2;
    }
    t11[nD] && t11[nD](true);
    let l11 = x2[w2];
    l11 && r5(e10, l11) && l11.el[nD] && l11.el[nD](), S2(o11, [t11]);
  }, enter(e11) {
    let t11 = u2, o11 = c2, l11 = f2;
    if (!r10.isMounted) {
      if (!i10)
        return;
      t11 = y2 || u2, o11 = b2 || c2, l11 = _2 || f2;
    }
    let a11 = false, s3 = e11[nU] = (t12) => {
      a11 || (a11 = true, t12 ? S2(l11, [e11]) : S2(o11, [e11]), $2.delayedLeave && $2.delayedLeave(), e11[nU] = void 0);
    };
    t11 ? k2(t11, [e11, s3]) : s3();
  }, leave(t11, o11) {
    let i11 = /* @__PURE__ */ String(e10.key);
    if (t11[nU] && t11[nU](true), r10.isUnmounting)
      return o11();
    S2(p2, [t11]);
    let l11 = false, a11 = t11[nD] = (r11) => {
      l11 || (l11 = true, o11(), r11 ? S2(m2, [t11]) : S2(h2, [t11]), t11[nD] = void 0, x2[i11] !== e10 || delete x2[i11]);
    };
    x2[i11] = e10, d2 ? k2(d2, [t11, a11]) : a11();
  }, clone: (e11) => nH(e11, t10, r10, o10) };
  return $2;
}
function nG(e10) {
  if (nX(e10))
    return (e10 = /* @__PURE__ */ on(e10)).children = null, e10;
}
function nK(e10) {
  return nX(e10) ? e10.children ? e10.children[0] : void 0 : e10;
}
function nY(e10, t10) {
  6 & e10.shapeFlag && e10.component ? nY(e10.component.subTree, t10) : 128 & e10.shapeFlag ? (e10.ssContent.transition = /* @__PURE__ */ t10.clone(e10.ssContent), e10.ssFallback.transition = /* @__PURE__ */ t10.clone(e10.ssFallback)) : e10.transition = t10;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function nJ(e10, t10) {
  return N(e10) ? j({ name: e10.name }, t10, { setup: e10 }) : e10;
}
let nQ = (e10) => !!e10.type.__asyncLoader, nX = (e10) => e10.type.__isKeepAlive;
function nZ(e10, t10) {
  n1(e10, "a", t10);
}
function n0(e10, t10) {
  n1(e10, "da", t10);
}
function n1(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : oc, o10 = e10.__wdc || (e10.__wdc = () => {
    let t11 = r10;
    for (; t11; ) {
      if (t11.isDeactivated)
        return;
      t11 = t11.parent;
    }
    return e10();
  });
  if (n2(t10, o10, r10), r10) {
    let e11 = r10.parent;
    for (; e11 && e11.parent; )
      nX(e11.parent.vnode) && function(e12, t11, r11, o11) {
        let i10 = /* @__PURE__ */ n2(t11, e12, o11, true);
        n9(() => {
          A(o11[t11], i10);
        }, r11);
      }(o10, t10, r10, e11), e11 = e11.parent;
  }
}
function n2(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : oc, o10 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  if (r10) {
    let i10 = r10[e10] || (r10[e10] = []), l10 = t10.__weh || (t10.__weh = function() {
      for (var o11 = arguments.length, i11 = Array(o11), l11 = 0; l11 < o11; l11++)
        i11[l11] = arguments[l11];
      if (r10.isUnmounted)
        return;
      eT(), od(r10);
      let a10 = /* @__PURE__ */ tB(t10, r10, e10, i11);
      return oh(), eI(), a10;
    });
    return o10 ? i10.unshift(l10) : i10.push(l10), l10;
  }
  {
    let t11 = /* @__PURE__ */ et(/* @__PURE__ */ tU[e10].replace(/ hook$/, ""));
    tD(`${t11} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
let n3 = (e10) => function(t10) {
  let r10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oc;
  return (!oy || "sp" === e10) && n2(e10, function() {
    for (var e11 = arguments.length, r11 = Array(e11), o10 = 0; o10 < e11; o10++)
      r11[o10] = arguments[o10];
    return t10(...r11);
  }, r10);
}, n4 = /* @__PURE__ */ n3("bm"), n6 = /* @__PURE__ */ n3("m"), n8 = /* @__PURE__ */ n3("bu"), n5 = /* @__PURE__ */ n3("u"), n7 = /* @__PURE__ */ n3("bum"), n9 = /* @__PURE__ */ n3("um"), re = /* @__PURE__ */ n3("sp"), rt = /* @__PURE__ */ n3("rtg"), rn = /* @__PURE__ */ n3("rtc");
function rr(e10) {
  let t10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oc;
  n2("ec", e10, t10);
}
let ro = (e10) => e10 ? og(e10) ? ox(e10) || e10.proxy : ro(e10.parent) : null, ri = (
  // due to type annotation
  /* @__PURE__ */ j(/* @__PURE__ */ Object.create(null), { $: (e10) => e10, $el: (e10) => e10.vnode.el, $data: (e10) => e10.data, $props: (e10) => tv(e10.props), $attrs: (e10) => tv(e10.attrs), $slots: (e10) => tv(e10.slots), $refs: (e10) => tv(e10.refs), $parent: (e10) => ro(e10.parent), $root: (e10) => ro(e10.root), $emit: (e10) => e10.emit, $options: (e10) => rp(e10), $forceUpdate: (e10) => e10.f || (e10.f = () => t1(e10.update)), $nextTick: (e10) => e10.n || (e10.n = /* @__PURE__ */ t0.bind(e10.proxy)), $watch: (e10) => nF.bind(e10) })
), rl = (e10) => "_" === e10 || "$" === e10, ra = (e10, t10) => e10 !== S && !e10.__isScriptSetup && I(e10, t10), rs = { get(e10, t10) {
  let r10, o10, i10, { _: l10 } = e10, { ctx: a10, setupState: s2, data: u2, props: c2, accessCache: f2, type: p2, appContext: d2 } = l10;
  if ("__isVue" === t10)
    return true;
  if ("$" !== t10[0]) {
    let e11 = f2[t10];
    if (void 0 !== e11)
      switch (e11) {
        case 1:
          return s2[t10];
        case 2:
          return u2[t10];
        case 4:
          return a10[t10];
        case 3:
          return c2[t10];
      }
    else {
      if (ra(s2, t10))
        return f2[t10] = 1, s2[t10];
      if (u2 !== S && I(u2, t10))
        return f2[t10] = 2, u2[t10];
      if (
        // props
        (r10 = l10.propsOptions[0]) && I(r10, t10)
      )
        return f2[t10] = 3, c2[t10];
      if (a10 !== S && I(a10, t10))
        return f2[t10] = 4, a10[t10];
      rc && (f2[t10] = 0);
    }
  }
  let h2 = ri[t10];
  return h2 ? ("$attrs" === t10 ? (eR(l10, "get", t10), nx = true) : "$slots" === t10 && eR(l10, "get", t10), h2(l10)) : (o10 = p2.__cssModules) && (o10 = o10[t10]) ? o10 : a10 !== S && I(a10, t10) ? (f2[t10] = 4, a10[t10]) : I(i10 = d2.config.globalProperties, t10) ? i10[t10] : void (nb && (!L(t10) || // #1091 avoid internal isRef/isVNode checks on component instance leading
  // to infinite warning loop
  0 !== t10.indexOf("__v")) && (u2 !== S && rl(t10[0]) && I(u2, t10) ? tD(`Property ${JSON.stringify(t10)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : l10 === nb && tD(`Property ${JSON.stringify(t10)} was accessed during render but is not defined on instance.`)));
}, set(e10, t10, r10) {
  let { _: o10 } = e10, { data: i10, setupState: l10, ctx: a10 } = o10;
  return ra(l10, t10) ? (l10[t10] = r10, true) : l10.__isScriptSetup && I(l10, t10) ? (tD(`Cannot mutate <script setup> binding "${t10}" from Options API.`), false) : i10 !== S && I(i10, t10) ? (i10[t10] = r10, true) : I(o10.props, t10) ? (tD(`Attempting to mutate prop "${t10}". Props are readonly.`), false) : "$" === t10[0] && t10.slice(1) in o10 ? (tD(`Attempting to mutate public property "${t10}". Properties starting with $ are reserved and readonly.`), false) : (t10 in o10.appContext.config.globalProperties ? Object.defineProperty(a10, t10, { enumerable: true, configurable: true, value: r10 }) : a10[t10] = r10, true);
}, has(e10, t10) {
  let r10, { _: { data: o10, setupState: i10, accessCache: l10, ctx: a10, appContext: s2, propsOptions: u2 } } = e10;
  return !!l10[t10] || o10 !== S && I(o10, t10) || ra(i10, t10) || (r10 = u2[0]) && I(r10, t10) || I(a10, t10) || I(ri, t10) || I(s2.config.globalProperties, t10);
}, defineProperty(e10, t10, r10) {
  return null != r10.get ? e10._.accessCache[t10] = 0 : I(r10, "value") && this.set(e10, t10, r10.value, null), Reflect.defineProperty(e10, t10, r10);
} };
function ru(e10) {
  return R(e10) ? e10.reduce((e11, t10) => (e11[t10] = null, e11), {}) : e10;
}
rs.ownKeys = (e10) => (tD("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e10));
let rc = true;
function rf(e10, t10, r10) {
  tB(R(e10) ? e10.map((e11) => e11.bind(t10.proxy)) : e10.bind(t10.proxy), t10, r10);
}
function rp(e10) {
  let t10;
  let r10 = e10.type, { mixins: o10, extends: i10 } = r10, { mixins: l10, optionsCache: a10, config: { optionMergeStrategies: s2 } } = e10.appContext, u2 = /* @__PURE__ */ a10.get(r10);
  return u2 ? t10 = u2 : l10.length || o10 || i10 ? (t10 = {}, l10.length && l10.forEach((e11) => rd(t10, e11, s2, true)), rd(t10, r10, s2)) : t10 = r10, D(r10) && a10.set(r10, t10), t10;
}
function rd(e10, t10, r10) {
  let o10 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], { mixins: i10, extends: l10 } = t10;
  for (let a10 in l10 && rd(e10, l10, r10, true), i10 && i10.forEach((t11) => rd(e10, t11, r10, true)), t10)
    if (o10 && "expose" === a10)
      tD('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      let o11 = rh[a10] || r10 && r10[a10];
      e10[a10] = o11 ? o11(e10[a10], t10[a10]) : t10[a10];
    }
  return e10;
}
let rh = {
  data: rv,
  props: rb,
  emits: rb,
  // objects
  methods: ry,
  computed: ry,
  // lifecycle
  beforeCreate: rg,
  created: rg,
  beforeMount: rg,
  mounted: rg,
  beforeUpdate: rg,
  updated: rg,
  beforeDestroy: rg,
  beforeUnmount: rg,
  destroyed: rg,
  unmounted: rg,
  activated: rg,
  deactivated: rg,
  errorCaptured: rg,
  serverPrefetch: rg,
  // assets
  components: ry,
  directives: ry,
  // watch
  watch: function(e10, t10) {
    if (!e10)
      return t10;
    if (!t10)
      return e10;
    let r10 = /* @__PURE__ */ j(/* @__PURE__ */ Object.create(null), e10);
    for (let o10 in t10)
      r10[o10] = /* @__PURE__ */ rg(e10[o10], t10[o10]);
    return r10;
  },
  // provide / inject
  provide: rv,
  inject: function(e10, t10) {
    return ry(/* @__PURE__ */ rm(e10), /* @__PURE__ */ rm(t10));
  }
};
function rv(e10, t10) {
  return t10 ? e10 ? function() {
    return j(N(e10) ? e10.call(this, this) : e10, N(t10) ? t10.call(this, this) : t10);
  } : t10 : e10;
}
function rm(e10) {
  if (R(e10)) {
    let t10 = {};
    for (let r10 = 0; r10 < e10.length; r10++)
      t10[e10[r10]] = e10[r10];
    return t10;
  }
  return e10;
}
function rg(e10, t10) {
  return e10 ? [...new Set([].concat(e10, t10))] : t10;
}
function ry(e10, t10) {
  return e10 ? j(/* @__PURE__ */ Object.create(null), e10, t10) : t10;
}
function rb(e10, t10) {
  return e10 ? R(e10) && R(t10) ? [.../* @__PURE__ */ new Set([...e10, ...t10])] : j(/* @__PURE__ */ Object.create(null), /* @__PURE__ */ ru(e10), /* @__PURE__ */ ru(null != t10 ? t10 : {})) : t10;
}
function r_() {
  return { app: null, config: { isNativeTag: O, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let rw = 0, rx = null;
function rS(e10, t10) {
  if (oc) {
    let r10 = oc.provides, o10 = oc.parent && oc.parent.provides;
    o10 === r10 && (r10 = oc.provides = /* @__PURE__ */ Object.create(o10)), r10[e10] = t10;
  } else
    tD("provide() can only be used inside setup().");
}
function rk(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o10 = oc || nb;
  if (o10 || rx) {
    let i10 = o10 ? null == o10.parent ? o10.vnode.appContext && o10.vnode.appContext.provides : o10.parent.provides : rx._context.provides;
    if (i10 && e10 in i10)
      return i10[e10];
    if (arguments.length > 1)
      return r10 && N(t10) ? t10.call(o10 && o10.proxy) : t10;
    tD(`injection "${String(e10)}" not found.`);
  } else
    tD("inject() can only be used inside setup() or functional components.");
}
function r$(e10, t10, r10, o10) {
  let i10;
  let [l10, a10] = e10.propsOptions, s2 = false;
  if (t10)
    for (let u2 in t10) {
      let c2;
      if (G(u2))
        continue;
      let f2 = t10[u2];
      l10 && I(l10, c2 = /* @__PURE__ */ Q(u2)) ? a10 && a10.includes(c2) ? (i10 || (i10 = {}))[c2] = f2 : r10[c2] = f2 : ny(e10.emitsOptions, u2) || u2 in o10 && f2 === o10[u2] || (o10[u2] = f2, s2 = true);
    }
  if (a10) {
    let t11 = /* @__PURE__ */ tw(r10), o11 = i10 || S;
    for (let i11 = 0; i11 < a10.length; i11++) {
      let s3 = a10[i11];
      r10[s3] = /* @__PURE__ */ rO(l10, t11, s3, o11[s3], e10, !I(o11, s3));
    }
  }
  return s2;
}
function rO(e10, t10, r10, o10, i10, l10) {
  let a10 = e10[r10];
  if (null != a10) {
    let e11 = /* @__PURE__ */ I(a10, "default");
    if (e11 && void 0 === o10) {
      let e12 = a10.default;
      if (a10.type !== Function && !a10.skipFactory && N(e12)) {
        let { propsDefaults: l11 } = i10;
        r10 in l11 ? o10 = l11[r10] : (od(i10), o10 = l11[r10] = /* @__PURE__ */ e12.call(null, t10), oh());
      } else
        o10 = e12;
    }
    a10[
      0
      /* shouldCast */
    ] && (l10 && !e11 ? o10 = false : a10[
      1
      /* shouldCastTrue */
    ] && ("" === o10 || o10 === Z(r10)) && (o10 = true));
  }
  return o10;
}
function rC(e10) {
  return "$" !== e10[0] || (tD(`Invalid prop name: "${e10}" is a reserved property.`), false);
}
function rE(e10) {
  let t10 = e10 && e10.toString().match(/^\s*(function|class) (\w+)/);
  return t10 ? t10[2] : null === e10 ? "null" : "";
}
function rP(e10, t10) {
  return R(t10) ? t10.findIndex((t11) => rE(t11) === rE(e10)) : N(t10) ? rE(t10) === rE(e10) ? 0 : -1 : -1;
}
function rj(e10, t10, r10) {
  let o10 = /* @__PURE__ */ tw(t10), i10 = r10.propsOptions[0];
  for (let t11 in i10) {
    let r11 = i10[t11];
    null != r11 && function(e11, t12, r12, o11) {
      let { type: i11, required: l10, validator: a10, skipCheck: s2 } = r12;
      if (l10 && o11) {
        tD('Missing required prop: "' + e11 + '"');
        return;
      }
      if (null != t12 || l10) {
        if (null != i11 && true !== i11 && !s2) {
          let r13 = false, o12 = R(i11) ? i11 : [i11], l11 = [];
          for (let e12 = 0; e12 < o12.length && !r13; e12++) {
            let { valid: i12, expectedType: a11 } = function(e13, t13) {
              let r14;
              let o13 = /* @__PURE__ */ rE(t13);
              if (rA(o13)) {
                let i13 = typeof e13;
                (r14 = i13 === o13.toLowerCase()) || "object" !== i13 || (r14 = e13 instanceof t13);
              } else
                r14 = "Object" === o13 ? /* @__PURE__ */ D(e13) : "Array" === o13 ? /* @__PURE__ */ R(e13) : "null" === o13 ? null === e13 : e13 instanceof t13;
              return { valid: r14, expectedType: o13 };
            }(t12, o12[e12]);
            l11.push(a11 || ""), r13 = i12;
          }
          if (!r13) {
            tD(/* @__PURE__ */ function(e12, t13, r14) {
              let o13 = `Invalid prop: type check failed for prop "${e12}". Expected ${r14.map(ee).join(" | ")}`, i12 = r14[0], l12 = /* @__PURE__ */ W(t13), a11 = /* @__PURE__ */ rT(t13, i12), s3 = /* @__PURE__ */ rT(t13, l12);
              return 1 === r14.length && rI(i12) && !function() {
                for (var e13 = arguments.length, t14 = Array(e13), r15 = 0; r15 < e13; r15++)
                  t14[r15] = arguments[r15];
                return t14.some((e14) => "boolean" === e14.toLowerCase());
              }(i12, l12) && (o13 += ` with value ${a11}`), o13 += `, got ${l12} `, rI(l12) && (o13 += `with value ${s3}.`), o13;
            }(e11, t12, l11));
            return;
          }
        }
        a10 && !a10(t12) && tD('Invalid prop: custom validator check failed for prop "' + e11 + '".');
      }
    }(t11, o10[t11], r11, !I(e10, t11) && !I(e10, /* @__PURE__ */ Z(t11)));
  }
}
let rA = /* @__PURE__ */ x("String,Number,Boolean,Function,Symbol,BigInt");
function rT(e10, t10) {
  return "String" === t10 ? `"${e10}"` : "Number" === t10 ? `${Number(e10)}` : `${e10}`;
}
function rI(e10) {
  return ["string", "number", "boolean"].some((t10) => e10.toLowerCase() === t10);
}
let rR = (e10) => "_" === e10[0] || "$stable" === e10, rF = (e10) => R(e10) ? e10.map(oo) : [/* @__PURE__ */ oo(e10)], rM = (e10, t10, r10) => {
  if (t10._n)
    return t10;
  let o10 = /* @__PURE__ */ function(e11) {
    let t11 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nb;
    if (arguments.length > 2 && arguments[2], !t11 || e11._n)
      return e11;
    let r11 = function() {
      let o11;
      for (var i10 = arguments.length, l10 = Array(i10), a10 = 0; a10 < i10; a10++)
        l10[a10] = arguments[a10];
      r11._d && (r6 += -1);
      let s2 = /* @__PURE__ */ nw(t11);
      try {
        o11 = /* @__PURE__ */ e11(...l10);
      } finally {
        nw(s2), r11._d && (r6 += 1);
      }
      return nc(t11), o11;
    };
    return r11._n = true, r11._c = true, r11._d = true, r11;
  }(function() {
    for (var r11 = arguments.length, o11 = Array(r11), i10 = 0; i10 < r11; i10++)
      o11[i10] = arguments[i10];
    return oc && tD(`Slot "${e10}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), rF(/* @__PURE__ */ t10(...o11));
  }, r10);
  return o10._c = false, o10;
}, rN = (e10, t10, r10) => {
  let o10 = e10._ctx;
  for (let r11 in e10) {
    if (rR(r11))
      continue;
    let i10 = e10[r11];
    if (N(i10))
      t10[r11] = /* @__PURE__ */ rM(r11, i10, o10);
    else if (null != i10) {
      tD(`Non-function value encountered for slot "${r11}". Prefer function slots for better performance.`);
      let e11 = /* @__PURE__ */ rF(i10);
      t10[r11] = () => e11;
    }
  }
}, rL = (e10, t10) => {
  nX(e10.vnode) || tD("Non-function value encountered for default slot. Prefer function slots for better performance.");
  let r10 = /* @__PURE__ */ rF(t10);
  e10.slots.default = () => r10;
}, rV = (e10, t10) => {
  if (32 & e10.vnode.shapeFlag) {
    let r10 = t10._;
    r10 ? (e10.slots = /* @__PURE__ */ tw(t10), eo(t10, "_", r10)) : rN(t10, e10.slots = {});
  } else
    e10.slots = {}, t10 && rL(e10, t10);
  eo(e10.slots, r7, 1);
}, rD = (e10, t10, r10) => {
  let { vnode: o10, slots: i10 } = e10, l10 = true, a10 = S;
  if (32 & o10.shapeFlag) {
    let o11 = t10._;
    o11 ? t9 ? (j(i10, t10), eM(e10, "set", "$slots")) : r10 && 1 === o11 ? l10 = false : (j(i10, t10), r10 || 1 !== o11 || delete i10._) : (l10 = !t10.$stable, rN(t10, i10)), a10 = t10;
  } else
    t10 && (rL(e10, t10), a10 = { default: 1 });
  if (l10)
    for (let e11 in i10)
      rR(e11) || null != a10[e11] || delete i10[e11];
};
function rU(e10, t10, r10, o10) {
  let i10 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
  if (R(e10)) {
    e10.forEach((e11, l11) => rU(e11, t10 && (R(t10) ? t10[l11] : t10), r10, o10, i10));
    return;
  }
  if (nQ(o10) && !i10)
    return;
  let l10 = 4 & o10.shapeFlag ? ox(o10.component) || o10.component.proxy : o10.el, a10 = i10 ? null : l10, { i: s2, r: u2 } = e10;
  if (!s2) {
    tD("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  let c2 = t10 && t10.r, f2 = s2.refs === S ? s2.refs = {} : s2.refs, p2 = s2.setupState;
  if (null != c2 && c2 !== u2 && (L(c2) ? (f2[c2] = null, I(p2, c2) && (p2[c2] = null)) : tC(c2) && (c2.value = null)), N(u2))
    tz(u2, s2, 12, [a10, f2]);
  else {
    let t11 = /* @__PURE__ */ L(u2), o11 = /* @__PURE__ */ tC(u2);
    if (t11 || o11) {
      let s3 = () => {
        if (e10.f) {
          let r11 = t11 ? I(p2, u2) ? p2[u2] : f2[u2] : u2.value;
          i10 ? R(r11) && A(r11, l10) : R(r11) ? r11.includes(l10) || r11.push(l10) : t11 ? (f2[u2] = [l10], I(p2, u2) && (p2[u2] = f2[u2])) : (u2.value = [l10], e10.k && (f2[e10.k] = u2.value));
        } else
          t11 ? (f2[u2] = a10, I(p2, u2) && (p2[u2] = a10)) : o11 ? (u2.value = a10, e10.k && (f2[e10.k] = a10)) : tD("Invalid template ref type:", u2, `(${typeof u2})`);
      };
      a10 ? (s3.id = -1, rq(s3, r10)) : s3();
    } else
      tD("Invalid template ref type:", u2, `(${typeof u2})`);
  }
}
function rz(e10, t10) {
  e10.appContext.config.performance && rW() && l.mark(`vue-${t10}-${e10.uid}`), nh(e10, t10, rW() ? l.now() : Date.now());
}
function rB(e10, t10) {
  if (e10.appContext.config.performance && rW()) {
    let r10 = `vue-${t10}-${e10.uid}`, o10 = r10 + ":end";
    l.mark(o10), l.measure(`<${oO(e10, e10.type)}> ${t10}`, r10, o10), l.clearMarks(r10), l.clearMarks(o10);
  }
  nv(e10, t10, rW() ? l.now() : Date.now());
}
function rW() {
  return void 0 !== i || ("undefined" != typeof window && window.performance ? (i = true, l = window.performance) : i = false), i;
}
let rq = function(e10, t10) {
  t10 && t10.pendingBranch ? R(e10) ? t10.effects.push(...e10) : t10.effects.push(e10) : t3(e10);
};
function rH(e10, t10) {
  let { effect: r10, update: o10 } = e10;
  r10.allowRecurse = o10.allowRecurse = t10;
}
function rG(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o10 = e10.children, i10 = t10.children;
  if (R(o10) && R(i10))
    for (let e11 = 0; e11 < o10.length; e11++) {
      let t11 = o10[e11], l10 = i10[e11];
      !(1 & l10.shapeFlag) || l10.dynamicChildren || ((l10.patchFlag <= 0 || 32 === l10.patchFlag) && ((l10 = i10[e11] = /* @__PURE__ */ oi(i10[e11])).el = t11.el), r10 || rG(t11, l10)), l10.type === r2 && (l10.el = t11.el), l10.type !== r3 || l10.el || (l10.el = t11.el);
    }
}
let rK = (e10) => e10.__isTeleport, rY = (e10) => e10 && (e10.disabled || "" === e10.disabled), rJ = (e10) => "undefined" != typeof SVGElement && e10 instanceof SVGElement, rQ = (e10, t10) => {
  let r10 = e10 && e10.to;
  if (!L(r10))
    return r10 || rY(e10) || tD(`Invalid Teleport target: ${r10}`), r10;
  if (!t10)
    return tD("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"), null;
  {
    let e11 = /* @__PURE__ */ t10(r10);
    return e11 || tD(`Failed to locate Teleport target with selector "${r10}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`), e11;
  }
};
function rX(e10, t10, r10, o10) {
  let { o: { insert: i10 }, m: l10 } = o10, a10 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2;
  0 === a10 && i10(e10.targetAnchor, t10, r10);
  let { el: s2, anchor: u2, shapeFlag: c2, children: f2, props: p2 } = e10, d2 = 2 === a10;
  if (d2 && i10(s2, t10, r10), (!d2 || rY(p2)) && 16 & c2)
    for (let e11 = 0; e11 < f2.length; e11++)
      l10(f2[e11], t10, r10, 2);
  d2 && i10(u2, t10, r10);
}
let rZ = { __isTeleport: true, process(e10, t10, r10, o10, i10, l10, a10, s2, u2, c2) {
  let { mc: f2, pc: p2, pbc: d2, o: { insert: h2, querySelector: m2, createText: g2, createComment: y2 } } = c2, b2 = /* @__PURE__ */ rY(t10.props), { shapeFlag: _2, children: w2, dynamicChildren: x2 } = t10;
  if (t9 && (u2 = false, x2 = null), null == e10) {
    let e11 = t10.el = /* @__PURE__ */ y2("teleport start"), c3 = t10.anchor = /* @__PURE__ */ y2("teleport end");
    h2(e11, r10, o10), h2(c3, r10, o10);
    let p3 = t10.target = /* @__PURE__ */ rQ(t10.props, m2), d3 = t10.targetAnchor = /* @__PURE__ */ g2("");
    p3 ? (h2(d3, p3), a10 = a10 || rJ(p3)) : b2 || tD("Invalid Teleport target on mount:", p3, `(${typeof p3})`);
    let x3 = (e12, t11) => {
      16 & _2 && f2(w2, e12, t11, i10, l10, a10, s2, u2);
    };
    b2 ? x3(r10, c3) : p3 && x3(p3, d3);
  } else {
    t10.el = e10.el;
    let o11 = t10.anchor = e10.anchor, f3 = t10.target = e10.target, h3 = t10.targetAnchor = e10.targetAnchor, g3 = /* @__PURE__ */ rY(e10.props), y3 = g3 ? r10 : f3, _3 = g3 ? o11 : h3;
    if (a10 = a10 || rJ(f3), x2 ? (d2(e10.dynamicChildren, x2, y3, i10, l10, a10, s2), rG(e10, t10, true)) : u2 || p2(e10, t10, y3, _3, i10, l10, a10, s2, false), b2)
      g3 ? t10.props && e10.props && t10.props.to !== e10.props.to && (t10.props.to = e10.props.to) : rX(t10, r10, o11, c2, 1);
    else if ((t10.props && t10.props.to) !== (e10.props && e10.props.to)) {
      let e11 = t10.target = /* @__PURE__ */ rQ(t10.props, m2);
      e11 ? rX(t10, e11, null, c2, 0) : tD("Invalid Teleport target on update:", f3, `(${typeof f3})`);
    } else
      g3 && rX(t10, f3, h3, c2, 1);
  }
  r0(t10);
}, remove(e10, t10, r10, o10, i10, l10) {
  let { um: a10, o: { remove: s2 } } = i10, { shapeFlag: u2, children: c2, anchor: f2, targetAnchor: p2, target: d2, props: h2 } = e10;
  if (d2 && s2(p2), l10 && s2(f2), 16 & u2) {
    let e11 = l10 || !rY(h2);
    for (let o11 = 0; o11 < c2.length; o11++) {
      let i11 = c2[o11];
      a10(i11, t10, r10, e11, !!i11.dynamicChildren);
    }
  }
}, move: rX, hydrate: function(e10, t10, r10, o10, i10, l10, a10, s2) {
  let { o: { nextSibling: u2, parentNode: c2, querySelector: f2 } } = a10, p2 = t10.target = /* @__PURE__ */ rQ(t10.props, f2);
  if (p2) {
    let a11 = p2._lpa || p2.firstChild;
    if (16 & t10.shapeFlag) {
      if (rY(t10.props))
        t10.anchor = /* @__PURE__ */ s2(/* @__PURE__ */ u2(e10), t10, /* @__PURE__ */ c2(e10), r10, o10, i10, l10), t10.targetAnchor = a11;
      else {
        t10.anchor = /* @__PURE__ */ u2(e10);
        let c3 = a11;
        for (; c3; )
          if ((c3 = /* @__PURE__ */ u2(c3)) && 8 === c3.nodeType && "teleport anchor" === c3.data) {
            t10.targetAnchor = c3, p2._lpa = t10.targetAnchor && u2(t10.targetAnchor);
            break;
          }
        s2(a11, t10, p2, r10, o10, i10, l10);
      }
    }
    r0(t10);
  }
  return t10.anchor && u2(t10.anchor);
} };
function r0(e10) {
  let t10 = e10.ctx;
  if (t10 && t10.ut) {
    let r10 = e10.children[0].el;
    for (; r10 && r10 !== e10.targetAnchor; )
      1 === r10.nodeType && r10.setAttribute("data-v-owner", t10.uid), r10 = r10.nextSibling;
    t10.ut();
  }
}
let r1 = /* @__PURE__ */ Symbol.for("v-fgt"), r2 = /* @__PURE__ */ Symbol.for("v-txt"), r3 = /* @__PURE__ */ Symbol.for("v-cmt"), r4 = /* @__PURE__ */ Symbol.for("v-stc"), r6 = 1;
function r8(e10) {
  return !!e10 && true === e10.__v_isVNode;
}
function r5(e10, t10) {
  return 6 & t10.shapeFlag && ne.has(t10.type) ? (e10.shapeFlag &= -257, t10.shapeFlag &= -513, false) : e10.type === t10.type && e10.key === t10.key;
}
let r7 = "__vInternal", r9 = (e10) => {
  let { key: t10 } = e10;
  return null != t10 ? t10 : null;
}, oe = (e10) => {
  let { ref: t10, ref_key: r10, ref_for: o10 } = e10;
  return "number" == typeof t10 && (t10 = "" + t10), null != t10 ? L(t10) || tC(t10) || N(t10) ? { i: nb, r: t10, k: r10, f: !!o10 } : t10 : null;
}, ot = function() {
  for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++)
    t10[r10] = arguments[r10];
  return function(e11) {
    let t11 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r11 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, o10 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, i10 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null, l10 = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
    if (e11 && e11 !== nj || (e11 || tD(`Invalid vnode type when creating vnode: ${e11}.`), e11 = r3), r8(e11)) {
      let o11 = /* @__PURE__ */ on(e11, t11, true);
      return r11 && ol(o11, r11), o11.patchFlag |= -2, o11;
    }
    if (oC(e11) && (e11 = e11.__vccOpts), t11) {
      var a10;
      let { class: e12, style: r12 } = t11 = (a10 = t11) ? t_(a10) || r7 in a10 ? j({}, a10) : a10 : null;
      e12 && !L(e12) && (t11.class = /* @__PURE__ */ ep(e12)), D(r12) && (t_(r12) && !R(r12) && (r12 = /* @__PURE__ */ j({}, r12)), t11.style = /* @__PURE__ */ es(r12));
    }
    let s2 = L(e11) ? 1 : nA(e11) ? 128 : rK(e11) ? 64 : D(e11) ? 4 : N(e11) ? 2 : 0;
    return 4 & s2 && t_(e11) && tD("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e11 = /* @__PURE__ */ tw(e11)), function(e12) {
      let t12 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r12 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, o11 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, i11 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null, l11 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : e12 === r1 ? 0 : 1, a11 = (arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7]), s3 = { __v_isVNode: true, __v_skip: true, type: e12, props: t12, key: t12 && r9(t12), ref: t12 && oe(t12), scopeId: n_, slotScopeIds: null, children: r12, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetAnchor: null, staticCount: 0, shapeFlag: l11, patchFlag: o11, dynamicProps: i11, dynamicChildren: null, appContext: null, ctx: nb };
      return a11 ? (ol(s3, r12), 128 & l11 && e12.normalize(s3)) : r12 && (s3.shapeFlag |= L(r12) ? 8 : 16), s3.key != s3.key && tD("VNode created with invalid key (NaN). VNode type:", s3.type), s3;
    }(e11, t11, r11, o10, i10, s2, l10, true);
  }(...t10);
};
function on(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], { props: o10, ref: i10, patchFlag: l10, children: a10 } = e10, s2 = t10 ? function() {
    for (var e11 = arguments.length, t11 = Array(e11), r11 = 0; r11 < e11; r11++)
      t11[r11] = arguments[r11];
    let o11 = {};
    for (let e12 = 0; e12 < t11.length; e12++) {
      let r12 = t11[e12];
      for (let e13 in r12)
        if ("class" === e13)
          o11.class !== r12.class && (o11.class = /* @__PURE__ */ ep([o11.class, r12.class]));
        else if ("style" === e13)
          o11.style = /* @__PURE__ */ es([o11.style, r12.style]);
        else if (E(e13)) {
          let t12 = o11[e13], i11 = r12[e13];
          i11 && t12 !== i11 && !(R(t12) && t12.includes(i11)) && (o11[e13] = t12 ? [].concat(t12, i11) : i11);
        } else
          "" !== e13 && (o11[e13] = r12[e13]);
    }
    return o11;
  }(o10 || {}, t10) : o10, u2 = {
    __v_isVNode: true,
    __v_skip: true,
    type: e10.type,
    props: s2,
    key: s2 && r9(s2),
    ref: t10 && t10.ref ? (
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r10 && i10 ? R(i10) ? i10.concat(/* @__PURE__ */ oe(t10)) : [i10, /* @__PURE__ */ oe(t10)] : oe(t10)
    ) : i10,
    scopeId: e10.scopeId,
    slotScopeIds: e10.slotScopeIds,
    children: -1 === l10 && R(a10) ? a10.map(or) : a10,
    target: e10.target,
    targetAnchor: e10.targetAnchor,
    staticCount: e10.staticCount,
    shapeFlag: e10.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t10 && e10.type !== r1 ? -1 === l10 ? 16 : 16 | l10 : l10,
    dynamicProps: e10.dynamicProps,
    dynamicChildren: e10.dynamicChildren,
    appContext: e10.appContext,
    dirs: e10.dirs,
    transition: e10.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e10.component,
    suspense: e10.suspense,
    ssContent: e10.ssContent && on(e10.ssContent),
    ssFallback: e10.ssFallback && on(e10.ssFallback),
    el: e10.el,
    anchor: e10.anchor,
    ctx: e10.ctx,
    ce: e10.ce
  };
  return u2;
}
function or(e10) {
  let t10 = /* @__PURE__ */ on(e10);
  return R(e10.children) && (t10.children = /* @__PURE__ */ e10.children.map(or)), t10;
}
function oo(e10) {
  return null == e10 || "boolean" == typeof e10 ? ot(r3) : R(e10) ? ot(r1, null, /* @__PURE__ */ e10.slice()) : "object" == typeof e10 ? oi(e10) : ot(r2, null, /* @__PURE__ */ String(e10));
}
function oi(e10) {
  return null === e10.el && -1 !== e10.patchFlag || e10.memo ? e10 : on(e10);
}
function ol(e10, t10) {
  let r10 = 0, { shapeFlag: o10 } = e10;
  if (null == t10)
    t10 = null;
  else if (R(t10))
    r10 = 16;
  else if ("object" == typeof t10) {
    if (65 & o10) {
      let r11 = t10.default;
      r11 && (r11._c && (r11._d = false), ol(e10, /* @__PURE__ */ r11()), r11._c && (r11._d = true));
      return;
    }
    {
      r10 = 32;
      let o11 = t10._;
      o11 || r7 in t10 ? 3 === o11 && nb && (1 === nb.slots._ ? t10._ = 1 : (t10._ = 2, e10.patchFlag |= 1024)) : t10._ctx = nb;
    }
  } else
    N(t10) ? (t10 = { default: t10, _ctx: nb }, r10 = 32) : (t10 = /* @__PURE__ */ String(t10), 64 & o10 ? (r10 = 16, t10 = [/* @__PURE__ */ function() {
      let e11 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : " ", t11 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return ot(r2, null, e11, t11);
    }(t10)]) : r10 = 8);
  e10.children = t10, e10.shapeFlag |= r10;
}
function oa(e10, t10, r10) {
  let o10 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
  tB(e10, t10, 7, [r10, o10]);
}
let os = /* @__PURE__ */ r_(), ou = 0, oc = null, of = () => oc || nb, op = "__VUE_INSTANCE_SETTERS__";
(s = ea()[op]) || (s = ea()[op] = []), s.push((e10) => oc = e10), a = (e10) => {
  s.length > 1 ? s.forEach((t10) => t10(e10)) : s[0](e10);
};
let od = (e10) => {
  a(e10), e10.scope.on();
}, oh = () => {
  oc && oc.scope.off(), a(null);
}, ov = /* @__PURE__ */ x("slot,component");
function om(e10, t10) {
  let r10 = t10.isNativeTag || O;
  (ov(e10) || r10(e10)) && tD("Do not use built-in or reserved HTML elements as component id: " + e10);
}
function og(e10) {
  return 4 & e10.vnode.shapeFlag;
}
let oy = false;
function ob(e10, t10, r10) {
  N(t10) ? e10.type.__ssrInlineRender ? e10.ssrRender = t10 : e10.render = t10 : D(t10) ? (r8(t10) && tD("setup() should not return VNodes directly - return a render function instead."), e10.devtoolsRawSetupState = t10, e10.setupState = /* @__PURE__ */ tR(t10), function(e11) {
    let { ctx: t11, setupState: r11 } = e11;
    Object.keys(/* @__PURE__ */ tw(r11)).forEach((e12) => {
      if (!r11.__isScriptSetup) {
        if (rl(e12[0])) {
          tD(`setup() return property ${JSON.stringify(e12)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
          return;
        }
        Object.defineProperty(t11, e12, { enumerable: true, configurable: true, get: () => r11[e12], set: $ });
      }
    });
  }(e10)) : void 0 !== t10 && tD(`setup() should return an object. Received: ${null === t10 ? "null" : typeof t10}`), ow(e10, r10);
}
let o_ = () => !u;
function ow(e10, t10, r10) {
  let o10 = e10.type;
  if (!e10.render) {
    if (!t10 && u && !o10.render) {
      let t11 = o10.template || rp(e10).template;
      if (t11) {
        rz(e10, "compile");
        let { isCustomElement: r11, compilerOptions: i10 } = e10.appContext.config, { delimiters: l10, compilerOptions: a10 } = o10, s2 = /* @__PURE__ */ j(/* @__PURE__ */ j({ isCustomElement: r11, delimiters: l10 }, i10), a10);
        o10.render = /* @__PURE__ */ u(t11, s2), rB(e10, "compile");
      }
    }
    e10.render = o10.render || $;
  }
  od(e10), eT();
  try {
    !function(e11) {
      let t11 = /* @__PURE__ */ rp(e11), r11 = e11.proxy, o11 = e11.ctx;
      rc = false, t11.beforeCreate && rf(t11.beforeCreate, e11, "bc");
      let { data: i10, computed: l10, methods: a10, watch: s2, provide: u2, inject: c2, created: f2, beforeMount: p2, mounted: d2, beforeUpdate: h2, updated: m2, activated: g2, deactivated: y2, beforeDestroy: b2, beforeUnmount: _2, destroyed: w2, unmounted: x2, render: S2, renderTracked: k2, renderTriggered: O2, errorCaptured: C2, serverPrefetch: E2, expose: P2, inheritAttrs: j2, components: A2, directives: T2, filters: I2 } = t11, F2 = /* @__PURE__ */ function() {
        let e12 = /* @__PURE__ */ Object.create(null);
        return (t12, r12) => {
          e12[r12] ? tD(`${t12} property "${r12}" is already defined in ${e12[r12]}.`) : e12[r12] = t12;
        };
      }();
      {
        let [t12] = e11.propsOptions;
        if (t12)
          for (let e12 in t12)
            F2("Props", e12);
      }
      if (c2 && function(e12, t12) {
        let r12 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : $;
        for (let o12 in R(e12) && (e12 = /* @__PURE__ */ rm(e12)), e12) {
          let i11;
          let l11 = e12[o12];
          tC(i11 = D(l11) ? "default" in l11 ? /* @__PURE__ */ rk(l11.from || o12, l11.default, true) : /* @__PURE__ */ rk(l11.from || o12) : /* @__PURE__ */ rk(l11)) ? Object.defineProperty(t12, o12, { enumerable: true, configurable: true, get: () => i11.value, set: (e13) => i11.value = e13 }) : t12[o12] = i11, r12("Inject", o12);
        }
      }(c2, o11, F2), a10)
        for (let e12 in a10) {
          let t12 = a10[e12];
          N(t12) ? (Object.defineProperty(o11, e12, { value: /* @__PURE__ */ t12.bind(r11), configurable: true, enumerable: true, writable: true }), F2("Methods", e12)) : tD(`Method "${e12}" has type "${typeof t12}" in the component definition. Did you reference the function correctly?`);
        }
      if (i10) {
        N(i10) || tD("The data option must be a function. Plain object usage is no longer supported.");
        let t12 = /* @__PURE__ */ i10.call(r11, r11);
        if (U(t12) && tD("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), D(t12))
          for (let r12 in e11.data = /* @__PURE__ */ tp(t12), t12)
            F2("Data", r12), rl(r12[0]) || Object.defineProperty(o11, r12, { configurable: true, enumerable: true, get: () => t12[r12], set: $ });
        else
          tD("data() should return an object.");
      }
      if (rc = true, l10)
        for (let e12 in l10) {
          let t12 = l10[e12], i11 = N(t12) ? t12.bind(r11, r11) : N(t12.get) ? t12.get.bind(r11, r11) : $;
          i11 === $ && tD(`Computed property "${e12}" has no getter.`);
          let a11 = !N(t12) && N(t12.set) ? t12.set.bind(r11) : () => {
            tD(`Write operation failed: computed property "${e12}" is readonly.`);
          }, s3 = /* @__PURE__ */ oE({ get: i11, set: a11 });
          Object.defineProperty(o11, e12, { enumerable: true, configurable: true, get: () => s3.value, set: (e13) => s3.value = e13 }), F2("Computed", e12);
        }
      if (s2)
        for (let e12 in s2)
          !function e13(t12, r12, o12, i11) {
            let l11 = i11.includes(".") ? nM(o12, i11) : () => o12[i11];
            if (L(t12)) {
              let e14 = r12[t12];
              N(e14) ? nI(l11, e14) : tD(`Invalid watch handler specified by key "${t12}"`, e14);
            } else if (N(t12))
              nI(l11, /* @__PURE__ */ t12.bind(o12));
            else if (D(t12)) {
              if (R(t12))
                t12.forEach((t13) => e13(t13, r12, o12, i11));
              else {
                let e14 = N(t12.handler) ? t12.handler.bind(o12) : r12[t12.handler];
                N(e14) ? nI(l11, e14, t12) : tD(`Invalid watch handler specified by key "${t12.handler}"`, e14);
              }
            } else
              tD(`Invalid watch option: "${i11}"`, t12);
          }(s2[e12], o11, r11, e12);
      if (u2) {
        let e12 = N(u2) ? u2.call(r11) : u2;
        Reflect.ownKeys(e12).forEach((t12) => {
          rS(t12, e12[t12]);
        });
      }
      function M2(e12, t12) {
        R(t12) ? t12.forEach((t13) => e12(/* @__PURE__ */ t13.bind(r11))) : t12 && e12(/* @__PURE__ */ t12.bind(r11));
      }
      if (f2 && rf(f2, e11, "c"), M2(n4, p2), M2(n6, d2), M2(n8, h2), M2(n5, m2), M2(nZ, g2), M2(n0, y2), M2(rr, C2), M2(rn, k2), M2(rt, O2), M2(n7, _2), M2(n9, x2), M2(re, E2), R(P2)) {
        if (P2.length) {
          let t12 = e11.exposed || (e11.exposed = {});
          P2.forEach((e12) => {
            Object.defineProperty(t12, e12, { get: () => r11[e12], set: (t13) => r11[e12] = t13 });
          });
        } else
          e11.exposed || (e11.exposed = {});
      }
      S2 && e11.render === $ && (e11.render = S2), null != j2 && (e11.inheritAttrs = j2), A2 && (e11.components = A2), T2 && (e11.directives = T2);
    }(e10);
  } finally {
    eI(), oh();
  }
  o10.render || e10.render !== $ || t10 || (o10.template ? tD('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".') : tD("Component is missing template or render function."));
}
function ox(e10) {
  if (e10.exposed)
    return e10.exposeProxy || (e10.exposeProxy = new Proxy(tR(/* @__PURE__ */ tx(e10.exposed)), { get: (t10, r10) => r10 in t10 ? t10[r10] : r10 in ri ? ri[r10](e10) : void 0, has: (e11, t10) => t10 in e11 || t10 in ri }));
}
let oS = /(?:^|[-_])(\w)/g, ok = (e10) => e10.replace(oS, (e11) => e11.toUpperCase()).replace(/[-_]/g, "");
function o$(e10) {
  let t10 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  return N(e10) ? e10.displayName || e10.name : e10.name || t10 && e10.__name;
}
function oO(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o10 = /* @__PURE__ */ o$(t10);
  if (!o10 && t10.__file) {
    let e11 = /* @__PURE__ */ t10.__file.match(/([^/\\]+)\.\w+$/);
    e11 && (o10 = e11[1]);
  }
  if (!o10 && e10 && e10.parent) {
    let r11 = (e11) => {
      for (let r12 in e11)
        if (e11[r12] === t10)
          return r12;
    };
    o10 = r11(e10.components || e10.parent.type.components) || r11(e10.appContext.components);
  }
  return o10 ? ok(o10) : r10 ? "App" : "Anonymous";
}
function oC(e10) {
  return N(e10) && "__vccOpts" in e10;
}
let oE = (e10, t10) => function(e11, t11) {
  let r10, o10, i10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], l10 = /* @__PURE__ */ N(e11);
  l10 ? (r10 = e11, o10 = () => {
    console.warn("Write operation failed: computed value is readonly");
  }) : (r10 = e11.get, o10 = e11.set);
  let a10 = new tM(r10, o10, l10 || !o10, i10);
  return t11 && !i10 && (a10.effect.onTrack = t11.onTrack, a10.effect.onTrigger = t11.onTrigger), a10;
}(e10, t10, oy);
function oP(e10, t10, r10) {
  let o10 = arguments.length;
  return 2 !== o10 ? (o10 > 3 ? r10 = /* @__PURE__ */ Array.prototype.slice.call(arguments, 2) : 3 === o10 && r8(r10) && (r10 = [r10]), ot(e10, t10, r10)) : !D(t10) || R(t10) ? ot(e10, null, t10) : r8(t10) ? ot(e10, null, [t10]) : ot(e10, t10);
}
let oj = /* @__PURE__ */ Symbol.for("v-scx"), oA = () => {
  {
    let e10 = /* @__PURE__ */ rk(oj);
    return e10 || tD("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e10;
  }
};
function oT(e10) {
  return !!(e10 && e10.__v_isShallow);
}
let oI = "3.3.8", oR = "undefined" != typeof document ? document : null, oF = oR && /* @__PURE__ */ oR.createElement("template"), oM = "transition", oN = "animation", oL = /* @__PURE__ */ Symbol("_vtc"), oV = (e10, t10) => {
  let { slots: r10 } = t10;
  return oP(nW, /* @__PURE__ */ function(e11) {
    let t11 = {};
    for (let r12 in e11)
      r12 in oD || (t11[r12] = e11[r12]);
    if (false === e11.css)
      return t11;
    let { name: r11 = "v", type: o10, duration: i10, enterFromClass: l10 = `${r11}-enter-from`, enterActiveClass: a10 = `${r11}-enter-active`, enterToClass: s2 = `${r11}-enter-to`, appearFromClass: u2 = l10, appearActiveClass: c2 = a10, appearToClass: f2 = s2, leaveFromClass: p2 = `${r11}-leave-from`, leaveActiveClass: d2 = `${r11}-leave-active`, leaveToClass: h2 = `${r11}-leave-to` } = e11, m2 = /* @__PURE__ */ function(e12) {
      if (null == e12)
        return null;
      if (D(e12))
        return [/* @__PURE__ */ oB(e12.enter), /* @__PURE__ */ oB(e12.leave)];
      {
        let t12 = /* @__PURE__ */ oB(e12);
        return [t12, t12];
      }
    }(i10), g2 = m2 && m2[0], y2 = m2 && m2[1], { onBeforeEnter: b2, onEnter: _2, onEnterCancelled: w2, onLeave: x2, onLeaveCancelled: S2, onBeforeAppear: k2 = b2, onAppear: $2 = _2, onAppearCancelled: O2 = w2 } = t11, C2 = (e12, t12, r12) => {
      oq(e12, t12 ? f2 : s2), oq(e12, t12 ? c2 : a10), r12 && r12();
    }, E2 = (e12, t12) => {
      e12._isLeaving = false, oq(e12, p2), oq(e12, h2), oq(e12, d2), t12 && t12();
    }, P2 = (e12) => (t12, r12) => {
      let i11 = e12 ? $2 : _2, a11 = () => C2(t12, e12, r12);
      oU(i11, [t12, a11]), oH(() => {
        oq(t12, e12 ? u2 : l10), oW(t12, e12 ? f2 : s2), oz(i11) || oK(t12, o10, g2, a11);
      });
    };
    return j(t11, { onBeforeEnter(e12) {
      oU(b2, [e12]), oW(e12, l10), oW(e12, a10);
    }, onBeforeAppear(e12) {
      oU(k2, [e12]), oW(e12, u2), oW(e12, c2);
    }, onEnter: /* @__PURE__ */ P2(false), onAppear: /* @__PURE__ */ P2(true), onLeave(e12, t12) {
      e12._isLeaving = true;
      let r12 = () => E2(e12, t12);
      oW(e12, p2), document.body.offsetHeight, oW(e12, d2), oH(() => {
        e12._isLeaving && (oq(e12, p2), oW(e12, h2), oz(x2) || oK(e12, o10, y2, r12));
      }), oU(x2, [e12, r12]);
    }, onEnterCancelled(e12) {
      C2(e12, false), oU(w2, [e12]);
    }, onAppearCancelled(e12) {
      C2(e12, true), oU(O2, [e12]);
    }, onLeaveCancelled(e12) {
      E2(e12), oU(S2, [e12]);
    } });
  }(e10), r10);
};
oV.displayName = "Transition";
let oD = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String };
oV.props = /* @__PURE__ */ j({}, nB, oD);
let oU = function(e10) {
  let t10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
  R(e10) ? e10.forEach((e11) => e11(...t10)) : e10 && e10(...t10);
}, oz = (e10) => !!e10 && (R(e10) ? e10.some((e11) => e11.length > 1) : e10.length > 1);
function oB(e10) {
  var t10;
  let r10 = /* @__PURE__ */ el(e10);
  return t10 = "<transition> explicit duration", void 0 !== r10 && ("number" != typeof r10 ? tD(`${t10} is not a valid number - got ${JSON.stringify(r10)}.`) : isNaN(r10) && tD(`${t10} is NaN - the duration expression might be incorrect.`)), r10;
}
function oW(e10, t10) {
  t10.split(/\s+/).forEach((t11) => t11 && e10.classList.add(t11)), (e10[oL] || (e10[oL] = /* @__PURE__ */ new Set())).add(t10);
}
function oq(e10, t10) {
  t10.split(/\s+/).forEach((t11) => t11 && e10.classList.remove(t11));
  let r10 = e10[oL];
  r10 && (r10.delete(t10), r10.size || (e10[oL] = void 0));
}
function oH(e10) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e10);
  });
}
let oG = 0;
function oK(e10, t10, r10, o10) {
  let i10 = e10._endId = ++oG, l10 = () => {
    i10 === e10._endId && o10();
  };
  if (r10)
    return setTimeout(l10, r10);
  let { type: a10, timeout: s2, propCount: u2 } = function(e11, t11) {
    let r11 = /* @__PURE__ */ window.getComputedStyle(e11), o11 = (e12) => (r11[e12] || "").split(", "), i11 = /* @__PURE__ */ o11(`${oM}Delay`), l11 = /* @__PURE__ */ o11(`${oM}Duration`), a11 = /* @__PURE__ */ oY(i11, l11), s3 = /* @__PURE__ */ o11(`${oN}Delay`), u3 = /* @__PURE__ */ o11(`${oN}Duration`), c3 = /* @__PURE__ */ oY(s3, u3), f3 = null, p3 = 0, d3 = 0;
    t11 === oM ? a11 > 0 && (f3 = oM, p3 = a11, d3 = l11.length) : t11 === oN ? c3 > 0 && (f3 = oN, p3 = c3, d3 = u3.length) : d3 = (f3 = (p3 = /* @__PURE__ */ Math.max(a11, c3)) > 0 ? a11 > c3 ? oM : oN : null) ? f3 === oM ? l11.length : u3.length : 0;
    let h2 = f3 === oM && /\b(transform|all)(,|$)/.test(/* @__PURE__ */ o11(`${oM}Property`).toString());
    return { type: f3, timeout: p3, propCount: d3, hasTransform: h2 };
  }(e10, t10);
  if (!a10)
    return o10();
  let c2 = a10 + "end", f2 = 0, p2 = () => {
    e10.removeEventListener(c2, d2), l10();
  }, d2 = (t11) => {
    t11.target === e10 && ++f2 >= u2 && p2();
  };
  setTimeout(() => {
    f2 < u2 && p2();
  }, s2 + 1), e10.addEventListener(c2, d2);
}
function oY(e10, t10) {
  for (; e10.length < t10.length; )
    e10 = /* @__PURE__ */ e10.concat(e10);
  return Math.max(.../* @__PURE__ */ t10.map((t11, r10) => oJ(t11) + oJ(e10[r10])));
}
function oJ(e10) {
  return "auto" === e10 ? 0 : 1e3 * Number(/* @__PURE__ */ e10.slice(0, -1).replace(",", "."));
}
let oQ = /* @__PURE__ */ Symbol("_vod"), oX = /[^\\];\s*$/, oZ = /\s*!important$/;
function o0(e10, t10, r10) {
  if (R(r10))
    r10.forEach((r11) => o0(e10, t10, r11));
  else if (null == r10 && (r10 = ""), oX.test(r10) && tD(`Unexpected semicolon at the end of '${t10}' style value: '${r10}'`), t10.startsWith("--"))
    e10.setProperty(t10, r10);
  else {
    let o10 = /* @__PURE__ */ function(e11, t11) {
      let r11 = o2[t11];
      if (r11)
        return r11;
      let o11 = /* @__PURE__ */ Q(t11);
      if ("filter" !== o11 && o11 in e11)
        return o2[t11] = o11;
      o11 = /* @__PURE__ */ ee(o11);
      for (let r12 = 0; r12 < o1.length; r12++) {
        let i10 = o1[r12] + o11;
        if (i10 in e11)
          return o2[t11] = i10;
      }
      return t11;
    }(e10, t10);
    oZ.test(r10) ? e10.setProperty(/* @__PURE__ */ Z(o10), /* @__PURE__ */ r10.replace(oZ, ""), "important") : e10[o10] = r10;
  }
}
let o1 = ["Webkit", "Moz", "ms"], o2 = {}, o3 = "http://www.w3.org/1999/xlink", o4 = /* @__PURE__ */ Symbol("_vei"), o6 = /(?:Once|Passive|Capture)$/, o8 = 0, o5 = /* @__PURE__ */ Promise.resolve(), o7 = () => o8 || (o5.then(() => o8 = 0), o8 = /* @__PURE__ */ Date.now()), o9 = /^on[a-z]/, ie = /* @__PURE__ */ j({ patchProp: function(e10, t10, r10, o10) {
  var i10;
  let l10 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], a10 = arguments.length > 5 ? arguments[5] : void 0, s2 = arguments.length > 6 ? arguments[6] : void 0, u2 = arguments.length > 7 ? arguments[7] : void 0, c2 = arguments.length > 8 ? arguments[8] : void 0;
  "class" === t10 ? function(e11, t11, r11) {
    let o11 = e11[oL];
    o11 && (t11 = /* @__PURE__ */ (t11 ? [t11, ...o11] : [...o11]).join(" ")), null == t11 ? e11.removeAttribute("class") : r11 ? e11.setAttribute("class", t11) : e11.className = t11;
  }(e10, o10, l10) : "style" === t10 ? function(e11, t11, r11) {
    let o11 = e11.style, i11 = /* @__PURE__ */ L(r11);
    if (r11 && !i11) {
      if (t11 && !L(t11))
        for (let e12 in t11)
          null == r11[e12] && o0(o11, e12, "");
      for (let e12 in r11)
        o0(o11, e12, r11[e12]);
    } else {
      let l11 = o11.display;
      i11 ? t11 !== r11 && (o11.cssText = r11) : t11 && e11.removeAttribute("style"), oQ in e11 && (o11.display = l11);
    }
  }(e10, r10, o10) : E(t10) ? P(t10) || function(e11, t11, r11, o11) {
    let i11 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null, l11 = e11[o4] || (e11[o4] = {}), a11 = l11[t11];
    if (o11 && a11)
      a11.value = o11;
    else {
      let [r12, s3] = function(e12) {
        let t12;
        if (o6.test(e12)) {
          let r14;
          for (t12 = {}; r14 = /* @__PURE__ */ e12.match(o6); )
            e12 = /* @__PURE__ */ e12.slice(0, e12.length - r14[0].length), t12[r14[0].toLowerCase()] = true;
        }
        let r13 = ":" === e12[2] ? e12.slice(3) : Z(/* @__PURE__ */ e12.slice(2));
        return [r13, t12];
      }(t11);
      if (o11) {
        let a12 = l11[t11] = /* @__PURE__ */ function(e12, t12) {
          let r13 = (e13) => {
            if (e13._vts) {
              if (e13._vts <= r13.attached)
                return;
            } else
              e13._vts = /* @__PURE__ */ Date.now();
            tB(/* @__PURE__ */ function(e14, t13) {
              if (!R(t13))
                return t13;
              {
                let r14 = e14.stopImmediatePropagation;
                return e14.stopImmediatePropagation = () => {
                  r14.call(e14), e14._stopped = true;
                }, t13.map((e15) => (t14) => !t14._stopped && e15 && e15(t14));
              }
            }(e13, r13.value), t12, 5, [e13]);
          };
          return r13.value = e12, r13.attached = /* @__PURE__ */ o7(), r13;
        }(o11, i11);
        !function(e12, t12, r13, o12) {
          e12.addEventListener(t12, r13, o12);
        }(e11, r12, a12, s3);
      } else
        a11 && (!function(e12, t12, r13, o12) {
          e12.removeEventListener(t12, r13, o12);
        }(e11, r12, a11, s3), l11[t11] = void 0);
    }
  }(e10, t10, r10, o10, s2) : ("." === t10[0] ? (t10 = /* @__PURE__ */ t10.slice(1), true) : "^" === t10[0] ? (t10 = /* @__PURE__ */ t10.slice(1), false) : (i10 = t10, l10 ? "innerHTML" === i10 || "textContent" === i10 || i10 in e10 && o9.test(i10) && N(o10) : !("spellcheck" === i10 || "draggable" === i10 || "translate" === i10 || "form" === i10 || "list" === i10 && "INPUT" === e10.tagName || "type" === i10 && "TEXTAREA" === e10.tagName || o9.test(i10) && L(o10)) && i10 in e10)) ? function(e11, t11, r11, o11, i11, l11, a11) {
    if ("innerHTML" === t11 || "textContent" === t11) {
      o11 && a11(o11, i11, l11), e11[t11] = null == r11 ? "" : r11;
      return;
    }
    let s3 = e11.tagName;
    if ("value" === t11 && "PROGRESS" !== s3 && // custom elements may use _value internally
    !s3.includes("-")) {
      e11._value = r11;
      let o12 = "OPTION" === s3 ? e11.getAttribute("value") : e11.value, i12 = null == r11 ? "" : r11;
      o12 !== i12 && (e11.value = i12), null == r11 && e11.removeAttribute(t11);
      return;
    }
    let u3 = false;
    if ("" === r11 || null == r11) {
      let o12 = typeof e11[t11];
      if ("boolean" === o12) {
        var c3;
        r11 = !!(c3 = r11) || "" === c3;
      } else
        null == r11 && "string" === o12 ? (r11 = "", u3 = true) : "number" === o12 && (r11 = 0, u3 = true);
    }
    try {
      e11[t11] = r11;
    } catch (e12) {
      u3 || tD(`Failed setting prop "${t11}" on <${s3.toLowerCase()}>: value ${r11} is invalid.`, e12);
    }
    u3 && e11.removeAttribute(t11);
  }(e10, t10, o10, a10, s2, u2, c2) : ("true-value" === t10 ? e10._trueValue = o10 : "false-value" === t10 && (e10._falseValue = o10), function(e11, t11, r11, o11, i11) {
    if (o11 && t11.startsWith("xlink:"))
      null == r11 ? e11.removeAttributeNS(o3, /* @__PURE__ */ t11.slice(6, t11.length)) : e11.setAttributeNS(o3, t11, r11);
    else {
      let o12 = /* @__PURE__ */ ev(t11);
      null == r11 || o12 && !(r11 || "" === r11) ? e11.removeAttribute(t11) : e11.setAttribute(t11, o12 ? "" : r11);
    }
  }(e10, t10, o10, l10));
} }, {
  insert: (e10, t10, r10) => {
    t10.insertBefore(e10, r10 || null);
  },
  remove: (e10) => {
    let t10 = e10.parentNode;
    t10 && t10.removeChild(e10);
  },
  createElement: (e10, t10, r10, o10) => {
    let i10 = t10 ? oR.createElementNS("http://www.w3.org/2000/svg", e10) : oR.createElement(e10, r10 ? { is: r10 } : void 0);
    return "select" === e10 && o10 && null != o10.multiple && i10.setAttribute("multiple", o10.multiple), i10;
  },
  createText: (e10) => oR.createTextNode(e10),
  createComment: (e10) => oR.createComment(e10),
  setText: (e10, t10) => {
    e10.nodeValue = t10;
  },
  setElementText: (e10, t10) => {
    e10.textContent = t10;
  },
  parentNode: (e10) => e10.parentNode,
  nextSibling: (e10) => e10.nextSibling,
  querySelector: (e10) => oR.querySelector(e10),
  setScopeId(e10, t10) {
    e10.setAttribute(t10, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e10, t10, r10, o10, i10, l10) {
    let a10 = r10 ? r10.previousSibling : t10.lastChild;
    if (i10 && (i10 === l10 || i10.nextSibling))
      for (; t10.insertBefore(/* @__PURE__ */ i10.cloneNode(true), r10), i10 !== l10 && (i10 = i10.nextSibling); )
        ;
    else {
      oF.innerHTML = o10 ? `<svg>${e10}</svg>` : e10;
      let i11 = oF.content;
      if (o10) {
        let e11 = i11.firstChild;
        for (; e11.firstChild; )
          i11.appendChild(e11.firstChild);
        i11.removeChild(e11);
      }
      t10.insertBefore(i11, r10);
    }
    return [
      // first
      a10 ? a10.nextSibling : t10.firstChild,
      // last
      r10 ? r10.previousSibling : t10.lastChild
    ];
  }
}), it = function() {
  for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++)
    t10[r10] = arguments[r10];
  let i10 = /* @__PURE__ */ (c || (c = function(e11, t11) {
    var r11;
    let i11, l11;
    !function() {
      let e12 = [];
      if (e12.length) {
        let t12 = e12.length > 1;
        console.warn(`Feature flag${t12 ? "s" : ""} ${e12.join(", ")} ${t12 ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
      }
    }();
    let a10 = /* @__PURE__ */ ea();
    a10.__VUE__ = true, function e12(t12, r12) {
      var i12, l12;
      if (o = t12)
        o.enabled = true, nl.forEach((e13) => {
          let { event: t13, args: r13 } = e13;
          return o.emit(t13, ...r13);
        }), nl = [];
      else if (
        // browser environment to avoid the timer handle stalling test runner exit
        // (#4815)
        "undefined" == typeof window || !// some envs mock window but not fully
        window.HTMLElement || (null == (l12 = null == (i12 = window.navigator) ? void 0 : i12.userAgent) ? void 0 : l12.includes("jsdom"))
      )
        na = true, nl = [];
      else {
        let t13 = r12.__VUE_DEVTOOLS_HOOK_REPLAY__ = r12.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
        t13.push((t14) => {
          e12(t14, r12);
        }), setTimeout(() => {
          o || (r12.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, na = true, nl = []);
        }, 3e3);
      }
    }(a10.__VUE_DEVTOOLS_GLOBAL_HOOK__, a10);
    let { insert: s2, remove: u2, patchProp: c2, createElement: f2, createText: p2, createComment: d2, setText: h2, setElementText: m2, parentNode: g2, nextSibling: y2, setScopeId: b2 = $, insertStaticContent: _2 } = e11, w2 = function(e12, t12, r12) {
      let o10 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, i12 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null, l12 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null, a11 = arguments.length > 6 && void 0 !== arguments[6] && arguments[6], s3 = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, u3 = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : !t9 && !!t12.dynamicChildren;
      if (e12 === t12)
        return;
      e12 && !r5(e12, t12) && (o10 = /* @__PURE__ */ ep2(e12), el2(e12, i12, l12, true), e12 = null), -2 === t12.patchFlag && (u3 = false, t12.dynamicChildren = null);
      let { type: c3, ref: f3, shapeFlag: p3 } = t12;
      switch (c3) {
        case r2:
          x2(e12, t12, r12, o10);
          break;
        case r3:
          O2(e12, t12, r12, o10);
          break;
        case r4:
          null == e12 ? C2(t12, r12, o10, a11) : E2(e12, t12, r12, a11);
          break;
        case r1:
          q2(e12, t12, r12, o10, i12, l12, a11, s3, u3);
          break;
        default:
          1 & p3 ? T2(e12, t12, r12, o10, i12, l12, a11, s3, u3) : 6 & p3 ? H2(e12, t12, r12, o10, i12, l12, a11, s3, u3) : 64 & p3 ? c3.process(e12, t12, r12, o10, i12, l12, a11, s3, u3, eh2) : 128 & p3 ? c3.process(e12, t12, r12, o10, i12, l12, a11, s3, u3, eh2) : tD("Invalid VNode type:", c3, `(${typeof c3})`);
      }
      null != f3 && i12 && rU(f3, e12 && e12.ref, l12, t12 || e12, !t12);
    }, x2 = (e12, t12, r12, o10) => {
      if (null == e12)
        s2(t12.el = /* @__PURE__ */ p2(t12.children), r12, o10);
      else {
        let r13 = t12.el = e12.el;
        t12.children !== e12.children && h2(r13, t12.children);
      }
    }, O2 = (e12, t12, r12, o10) => {
      null == e12 ? s2(t12.el = /* @__PURE__ */ d2(t12.children || ""), r12, o10) : t12.el = e12.el;
    }, C2 = (e12, t12, r12, o10) => {
      [e12.el, e12.anchor] = /* @__PURE__ */ _2(e12.children, t12, r12, o10, e12.el, e12.anchor);
    }, E2 = (e12, t12, r12, o10) => {
      if (t12.children !== e12.children) {
        let i12 = /* @__PURE__ */ y2(e12.anchor);
        A2(e12), [t12.el, t12.anchor] = /* @__PURE__ */ _2(t12.children, r12, i12, o10);
      } else
        t12.el = e12.el, t12.anchor = e12.anchor;
    }, P2 = (e12, t12, r12) => {
      let o10, { el: i12, anchor: l12 } = e12;
      for (; i12 && i12 !== l12; )
        o10 = /* @__PURE__ */ y2(i12), s2(i12, t12, r12), i12 = o10;
      s2(l12, t12, r12);
    }, A2 = (e12) => {
      let t12, { el: r12, anchor: o10 } = e12;
      for (; r12 && r12 !== o10; )
        t12 = /* @__PURE__ */ y2(r12), u2(r12), r12 = t12;
      u2(o10);
    }, T2 = (e12, t12, r12, o10, i12, l12, a11, s3, u3) => {
      a11 = a11 || "svg" === t12.type, null == e12 ? F2(t12, r12, o10, i12, l12, a11, s3, u3) : z2(e12, t12, i12, l12, a11, s3, u3);
    }, F2 = (e12, t12, r12, o10, i12, l12, a11, u3) => {
      let p3, d3;
      let { type: h3, props: g3, shapeFlag: y3, transition: b3, dirs: _3 } = e12;
      if (p3 = e12.el = /* @__PURE__ */ f2(e12.type, l12, g3 && g3.is, g3), 8 & y3 ? m2(p3, e12.children) : 16 & y3 && V2(e12.children, p3, null, o10, i12, l12 && "foreignObject" !== h3, a11, u3), _3 && nV(e12, null, o10, "created"), M2(p3, e12, e12.scopeId, a11, o10), g3) {
        for (let t13 in g3)
          "value" === t13 || G(t13) || c2(p3, t13, null, g3[t13], l12, e12.children, o10, i12, ef2);
        "value" in g3 && c2(p3, "value", null, g3.value), (d3 = g3.onVnodeBeforeMount) && oa(d3, o10, e12);
      }
      Object.defineProperty(p3, "__vnode", { value: e12, enumerable: false }), Object.defineProperty(p3, "__vueParentComponent", { value: o10, enumerable: false }), _3 && nV(e12, null, o10, "beforeMount");
      let w3 = (!i12 || i12 && !i12.pendingBranch) && b3 && !b3.persisted;
      w3 && b3.beforeEnter(p3), s2(p3, t12, r12), ((d3 = g3 && g3.onVnodeMounted) || w3 || _3) && rq(() => {
        d3 && oa(d3, o10, e12), w3 && b3.enter(p3), _3 && nV(e12, null, o10, "mounted");
      }, i12);
    }, M2 = (e12, t12, r12, o10, i12) => {
      if (r12 && b2(e12, r12), o10)
        for (let t13 = 0; t13 < o10.length; t13++)
          b2(e12, o10[t13]);
      if (i12) {
        let r13 = i12.subTree;
        if (r13.patchFlag > 0 && 2048 & r13.patchFlag && (r13 = n$(r13.children) || r13), t12 === r13) {
          let t13 = i12.vnode;
          M2(e12, t13, t13.scopeId, t13.slotScopeIds, i12.parent);
        }
      }
    }, V2 = function(e12, t12, r12, o10, i12, l12, a11, s3) {
      let u3 = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0;
      for (let c3 = u3; c3 < e12.length; c3++) {
        let u4 = e12[c3] = s3 ? oi(e12[c3]) : oo(e12[c3]);
        w2(null, u4, t12, r12, o10, i12, l12, a11, s3);
      }
    }, z2 = (e12, t12, r12, o10, i12, l12, a11) => {
      let s3;
      let u3 = t12.el = e12.el, { patchFlag: f3, dynamicChildren: p3, dirs: d3 } = t12;
      f3 |= 16 & e12.patchFlag;
      let h3 = e12.props || S, g3 = t12.props || S;
      r12 && rH(r12, false), (s3 = g3.onVnodeBeforeUpdate) && oa(s3, r12, t12, e12), d3 && nV(t12, e12, r12, "beforeUpdate"), r12 && rH(r12, true), t9 && (f3 = 0, a11 = false, p3 = null);
      let y3 = i12 && "foreignObject" !== t12.type;
      if (p3 ? (B2(e12.dynamicChildren, p3, u3, r12, o10, y3, l12), rG(e12, t12)) : a11 || ee2(e12, t12, u3, null, r12, o10, y3, l12, false), f3 > 0) {
        if (16 & f3)
          W2(u3, t12, h3, g3, r12, o10, i12);
        else if (2 & f3 && h3.class !== g3.class && c2(u3, "class", null, g3.class, i12), 4 & f3 && c2(u3, "style", h3.style, g3.style, i12), 8 & f3) {
          let l13 = t12.dynamicProps;
          for (let t13 = 0; t13 < l13.length; t13++) {
            let a12 = l13[t13], s4 = h3[a12], f4 = g3[a12];
            (f4 !== s4 || "value" === a12) && c2(u3, a12, s4, f4, i12, e12.children, r12, o10, ef2);
          }
        }
        1 & f3 && e12.children !== t12.children && m2(u3, t12.children);
      } else
        a11 || null != p3 || W2(u3, t12, h3, g3, r12, o10, i12);
      ((s3 = g3.onVnodeUpdated) || d3) && rq(() => {
        s3 && oa(s3, r12, t12, e12), d3 && nV(t12, e12, r12, "updated");
      }, o10);
    }, B2 = (e12, t12, r12, o10, i12, l12, a11) => {
      for (let s3 = 0; s3 < t12.length; s3++) {
        let u3 = e12[s3], c3 = t12[s3], f3 = (
          // which will not have a mounted element
          u3.el && // - In the case of a Fragment, we need to provide the actual parent
          // of the Fragment itself so it can move its children.
          (u3.type === r1 || // - In the case of different nodes, there is going to be a replacement
          // which also requires the correct parent container
          !r5(u3, c3) || // - In the case of a component, it could contain anything.
          70 & u3.shapeFlag) ? g2(u3.el) : (
            // just pass the block element here to avoid a DOM parentNode call.
            r12
          )
        );
        w2(u3, c3, f3, null, o10, i12, l12, a11, true);
      }
    }, W2 = (e12, t12, r12, o10, i12, l12, a11) => {
      if (r12 !== o10) {
        if (r12 !== S)
          for (let s3 in r12)
            G(s3) || s3 in o10 || c2(e12, s3, r12[s3], null, a11, t12.children, i12, l12, ef2);
        for (let s3 in o10) {
          if (G(s3))
            continue;
          let u3 = o10[s3], f3 = r12[s3];
          u3 !== f3 && "value" !== s3 && c2(e12, s3, f3, u3, a11, t12.children, i12, l12, ef2);
        }
        "value" in o10 && c2(e12, "value", r12.value, o10.value);
      }
    }, q2 = (e12, t12, r12, o10, i12, l12, a11, u3, c3) => {
      let f3 = t12.el = e12 ? e12.el : p2(""), d3 = t12.anchor = e12 ? e12.anchor : p2(""), { patchFlag: h3, dynamicChildren: m3, slotScopeIds: g3 } = t12;
      (t9 || 2048 & h3) && (h3 = 0, c3 = false, m3 = null), g3 && (u3 = u3 ? u3.concat(g3) : g3), null == e12 ? (s2(f3, r12, o10), s2(d3, r12, o10), V2(t12.children, r12, d3, i12, l12, a11, u3, c3)) : h3 > 0 && 64 & h3 && m3 && // #2715 the previous fragment could've been a BAILed one as a result
      // of renderSlot() with no valid children
      e12.dynamicChildren ? (B2(e12.dynamicChildren, m3, r12, i12, l12, a11, u3), rG(e12, t12)) : ee2(e12, t12, r12, d3, i12, l12, a11, u3, c3);
    }, H2 = (e12, t12, r12, o10, i12, l12, a11, s3, u3) => {
      t12.slotScopeIds = s3, null == e12 ? 512 & t12.shapeFlag ? i12.ctx.activate(t12, r12, o10, a11, u3) : K2(t12, r12, o10, i12, l12, a11, u3) : Y2(e12, t12, u3);
    }, K2 = (e12, t12, r12, o10, i12, l12, a11) => {
      let s3 = e12.component = /* @__PURE__ */ function(e13, t13, r13) {
        let o11 = e13.type, i13 = (t13 ? t13.appContext : e13.appContext) || os, l13 = {
          uid: ou++,
          vnode: e13,
          type: o11,
          parent: t13,
          appContext: i13,
          root: null,
          // to be immediately set
          next: null,
          subTree: null,
          // will be set synchronously right after creation
          effect: null,
          update: null,
          // will be set synchronously right after creation
          scope: new eg(true),
          render: null,
          proxy: null,
          exposed: null,
          exposeProxy: null,
          withProxy: null,
          provides: t13 ? t13.provides : Object.create(i13.provides),
          accessCache: null,
          renderCache: [],
          // local resolved assets
          components: null,
          directives: null,
          // resolved props and emits options
          propsOptions: /* @__PURE__ */ function e14(t14, r14) {
            let o12 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i14 = r14.propsCache, l14 = /* @__PURE__ */ i14.get(t14);
            if (l14)
              return l14;
            let a12 = t14.props, s4 = {}, u3 = [], c3 = false;
            if (!N(t14)) {
              let i15 = (t15) => {
                c3 = true;
                let [o13, i16] = e14(t15, r14, true);
                j(s4, o13), i16 && u3.push(...i16);
              };
              !o12 && r14.mixins.length && r14.mixins.forEach(i15), t14.extends && i15(t14.extends), t14.mixins && t14.mixins.forEach(i15);
            }
            if (!a12 && !c3)
              return D(t14) && i14.set(t14, k), k;
            if (R(a12))
              for (let e15 = 0; e15 < a12.length; e15++) {
                L(a12[e15]) || tD("props must be strings when using array syntax.", a12[e15]);
                let t15 = /* @__PURE__ */ Q(a12[e15]);
                rC(t15) && (s4[t15] = S);
              }
            else if (a12)
              for (let e15 in D(a12) || tD("invalid props options", a12), a12) {
                let t15 = /* @__PURE__ */ Q(e15);
                if (rC(t15)) {
                  let r15 = a12[e15], o13 = s4[t15] = R(r15) || N(r15) ? { type: r15 } : j({}, r15);
                  if (o13) {
                    let e16 = /* @__PURE__ */ rP(Boolean, o13.type), r16 = /* @__PURE__ */ rP(String, o13.type);
                    o13[
                      0
                      /* shouldCast */
                    ] = e16 > -1, o13[
                      1
                      /* shouldCastTrue */
                    ] = r16 < 0 || e16 < r16, (e16 > -1 || I(o13, "default")) && u3.push(t15);
                  }
                }
              }
            let f3 = [s4, u3];
            return D(t14) && i14.set(t14, f3), f3;
          }(o11, i13),
          emitsOptions: /* @__PURE__ */ function e14(t14, r14) {
            let o12 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i14 = r14.emitsCache, l14 = /* @__PURE__ */ i14.get(t14);
            if (void 0 !== l14)
              return l14;
            let a12 = t14.emits, s4 = {}, u3 = false;
            if (!N(t14)) {
              let i15 = (t15) => {
                let o13 = /* @__PURE__ */ e14(t15, r14, true);
                o13 && (u3 = true, j(s4, o13));
              };
              !o12 && r14.mixins.length && r14.mixins.forEach(i15), t14.extends && i15(t14.extends), t14.mixins && t14.mixins.forEach(i15);
            }
            return a12 || u3 ? (R(a12) ? a12.forEach((e15) => s4[e15] = null) : j(s4, a12), D(t14) && i14.set(t14, s4), s4) : (D(t14) && i14.set(t14, null), null);
          }(o11, i13),
          // emit
          emit: null,
          // to be set immediately
          emitted: null,
          // props default value
          propsDefaults: S,
          // inheritAttrs
          inheritAttrs: o11.inheritAttrs,
          // state
          ctx: S,
          data: S,
          props: S,
          attrs: S,
          slots: S,
          refs: S,
          setupState: S,
          setupContext: null,
          attrsProxy: null,
          slotsProxy: null,
          // suspense related
          suspense: r13,
          suspenseId: r13 ? r13.pendingId : 0,
          asyncDep: null,
          asyncResolved: false,
          // lifecycle hooks
          // not using enums here because it results in computed properties
          isMounted: false,
          isUnmounted: false,
          isDeactivated: false,
          bc: null,
          c: null,
          bm: null,
          m: null,
          bu: null,
          u: null,
          um: null,
          bum: null,
          da: null,
          a: null,
          rtg: null,
          rtc: null,
          ec: null,
          sp: null
        };
        return l13.ctx = /* @__PURE__ */ function(e14) {
          let t14 = {};
          return Object.defineProperty(t14, "_", { configurable: true, enumerable: false, get: () => e14 }), Object.keys(ri).forEach((r14) => {
            Object.defineProperty(t14, r14, {
              configurable: true,
              enumerable: false,
              get: () => ri[r14](e14),
              // intercepted by the proxy so no need for implementation,
              // but needed to prevent set errors
              set: $
            });
          }), t14;
        }(l13), l13.root = t13 ? t13.root : l13, l13.emit = /* @__PURE__ */ ng.bind(null, l13), e13.ce && e13.ce(l13), l13;
      }(e12, o10, i12);
      if (s3.type.__hmrId && function(e13) {
        let t13 = e13.type.__hmrId, r13 = /* @__PURE__ */ nt.get(t13);
        r13 || (nn(t13, e13.type), r13 = /* @__PURE__ */ nt.get(t13)), r13.instances.add(e13);
      }(s3), tL(e12), rz(s3, "mount"), nX(e12) && (s3.ctx.renderer = eh2), rz(s3, "init"), function(e13) {
        let t13 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        oy = t13;
        let { props: r13, children: o11 } = e13.vnode, i13 = /* @__PURE__ */ og(e13);
        (function(e14, t14, r14) {
          let o12 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], i14 = {}, l13 = {};
          for (let r15 in eo(l13, r7, 1), e14.propsDefaults = /* @__PURE__ */ Object.create(null), r$(e14, t14, i14, l13), e14.propsOptions[0])
            r15 in i14 || (i14[r15] = void 0);
          rj(t14 || {}, i14, e14), r14 ? e14.props = o12 ? i14 : td(i14) : e14.type.props ? e14.props = i14 : e14.props = l13, e14.attrs = l13;
        })(e13, r13, i13, t13), rV(e13, o11), i13 && function(e14, t14) {
          var r14;
          let o12 = e14.type;
          if (o12.name && om(o12.name, e14.appContext.config), o12.components) {
            let t15 = /* @__PURE__ */ Object.keys(o12.components);
            for (let r15 = 0; r15 < t15.length; r15++)
              om(t15[r15], e14.appContext.config);
          }
          if (o12.directives) {
            let e15 = /* @__PURE__ */ Object.keys(o12.directives);
            for (let t15 = 0; t15 < e15.length; t15++)
              nL(e15[t15]);
          }
          o12.compilerOptions && o_() && tD('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'), e14.accessCache = /* @__PURE__ */ Object.create(null), e14.proxy = /* @__PURE__ */ tx(new Proxy(e14.ctx, rs)), function(e15) {
            let { ctx: t15, propsOptions: [r15] } = e15;
            r15 && Object.keys(r15).forEach((r16) => {
              Object.defineProperty(t15, r16, { enumerable: true, configurable: true, get: () => e15.props[r16], set: $ });
            });
          }(e14);
          let { setup: i14 } = o12;
          if (i14) {
            let l13 = e14.setupContext = i14.length > 1 ? Object.freeze({ get attrs() {
              return e14.attrsProxy || (e14.attrsProxy = new Proxy(e14.attrs, { get: (t15, r15) => (nx = true, eR(e14, "get", "$attrs"), t15[r15]), set: () => (tD("setupContext.attrs is readonly."), false), deleteProperty: () => (tD("setupContext.attrs is readonly."), false) }));
            }, get slots() {
              return e14.slotsProxy || (e14.slotsProxy = new Proxy(e14.slots, { get: (t15, r15) => (eR(e14, "get", "$slots"), t15[r15]) }));
            }, get emit() {
              return function(t15) {
                for (var r15 = arguments.length, o13 = Array(r15 > 1 ? r15 - 1 : 0), i15 = 1; i15 < r15; i15++)
                  o13[i15 - 1] = arguments[i15];
                return e14.emit(t15, ...o13);
              };
            }, expose: (t15) => {
              if (e14.exposed && tD("expose() should be called only once per setup()."), null != t15) {
                let e15 = typeof t15;
                "object" === e15 && (R(t15) ? e15 = "array" : tC(t15) && (e15 = "ref")), "object" !== e15 && tD(`expose() should be passed a plain object, received ${e15}.`);
              }
              e14.exposed = t15 || {};
            } }) : null;
            od(e14), eT();
            let a12 = /* @__PURE__ */ tz(i14, e14, 0, [/* @__PURE__ */ tv(e14.props), l13]);
            if (eI(), oh(), U(a12)) {
              if (a12.then(oh, oh), t14)
                return a12.then((r15) => {
                  ob(e14, r15, t14);
                }).catch((t15) => {
                  tW(t15, e14, 0);
                });
              if (e14.asyncDep = a12, !e14.suspense) {
                let e15 = null != (r14 = o12.name) ? r14 : "Anonymous";
                tD(`Component <${e15}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
              }
            } else
              ob(e14, a12, t14);
          } else
            ow(e14, t14);
        }(e13, t13), oy = false;
      }(s3), rB(s3, "init"), s3.asyncDep) {
        if (i12 && i12.registerDep(s3, J2), !e12.el) {
          let e13 = s3.subTree = /* @__PURE__ */ ot(r3);
          O2(null, e13, t12, r12);
        }
        return;
      }
      J2(s3, e12, t12, r12, i12, l12, a11), tV(), rB(s3, "mount");
    }, Y2 = (e12, t12, r12) => {
      let o10 = t12.component = e12.component;
      if (function(e13, t13, r13) {
        let { props: o11, children: i12, component: l12 } = e13, { props: a11, children: s3, patchFlag: u3 } = t13, c3 = l12.emitsOptions;
        if ((i12 || s3) && t9 || t13.dirs || t13.transition)
          return true;
        if (!r13 || !(u3 >= 0))
          return (!!i12 || !!s3) && (!s3 || !s3.$stable) || o11 !== a11 && (o11 ? !a11 || nP(o11, a11, c3) : !!a11);
        if (1024 & u3)
          return true;
        if (16 & u3)
          return o11 ? nP(o11, a11, c3) : !!a11;
        if (8 & u3) {
          let e14 = t13.dynamicProps;
          for (let t14 = 0; t14 < e14.length; t14++) {
            let r14 = e14[t14];
            if (a11[r14] !== o11[r14] && !ny(c3, r14))
              return true;
          }
        }
        return false;
      }(e12, t12, r12)) {
        if (o10.asyncDep && !o10.asyncResolved) {
          tL(t12), X2(o10, t12, r12), tV();
          return;
        }
        o10.next = t12, function(e13) {
          let t13 = /* @__PURE__ */ tG.indexOf(e13);
          t13 > tK && tG.splice(t13, 1);
        }(o10.update), o10.update();
      } else
        t12.el = e12.el, o10.vnode = t12;
    }, J2 = (e12, t12, r12, o10, i12, a11, s3) => {
      let u3 = e12.effect = new eE(() => {
        if (e12.isMounted) {
          let t13, { next: r13, bu: o11, u: l12, parent: u4, vnode: c4 } = e12, f3 = r13;
          tL(r13 || e12.vnode), rH(e12, false), r13 ? (r13.el = c4.el, X2(e12, r13, s3)) : r13 = c4, o11 && er(o11), (t13 = r13.props && r13.props.onVnodeBeforeUpdate) && oa(t13, u4, r13, c4), rH(e12, true), rz(e12, "render");
          let p3 = /* @__PURE__ */ nS(e12);
          rB(e12, "render");
          let d3 = e12.subTree;
          e12.subTree = p3, rz(e12, "patch"), w2(d3, p3, /* @__PURE__ */ g2(d3.el), /* @__PURE__ */ ep2(d3), e12, i12, a11), rB(e12, "patch"), r13.el = p3.el, null === f3 && function(e13, t14) {
            let { vnode: r14, parent: o12 } = e13;
            for (; o12 && o12.subTree === r14; )
              (r14 = o12.vnode).el = t14, o12 = o12.parent;
          }(e12, p3.el), l12 && rq(l12, i12), (t13 = r13.props && r13.props.onVnodeUpdated) && rq(() => oa(t13, u4, r13, c4), i12), nc(e12), tV();
        } else {
          let s4;
          let { el: u4, props: c4 } = t12, { bm: f3, m: p3, parent: d3 } = e12, h3 = /* @__PURE__ */ nQ(t12);
          if (rH(e12, false), f3 && er(f3), !h3 && (s4 = c4 && c4.onVnodeBeforeMount) && oa(s4, d3, t12), rH(e12, true), u4 && l11) {
            let r13 = () => {
              rz(e12, "render"), e12.subTree = /* @__PURE__ */ nS(e12), rB(e12, "render"), rz(e12, "hydrate"), l11(u4, e12.subTree, e12, i12, null), rB(e12, "hydrate");
            };
            h3 ? t12.type.__asyncLoader().then(
              // which means it won't track dependencies - but it's ok because
              // a server-rendered async wrapper is already in resolved state
              // and it will never need to change.
              () => !e12.isUnmounted && r13()
            ) : r13();
          } else {
            rz(e12, "render");
            let l12 = e12.subTree = /* @__PURE__ */ nS(e12);
            rB(e12, "render"), rz(e12, "patch"), w2(null, l12, r12, o10, e12, i12, a11), rB(e12, "patch"), t12.el = l12.el;
          }
          if (p3 && rq(p3, i12), !h3 && (s4 = c4 && c4.onVnodeMounted)) {
            let e13 = t12;
            rq(() => oa(s4, d3, e13), i12);
          }
          (256 & t12.shapeFlag || d3 && nQ(d3.vnode) && 256 & d3.vnode.shapeFlag) && e12.a && rq(e12.a, i12), e12.isMounted = true, nu(e12), t12 = r12 = o10 = null;
        }
      }, () => t1(c3), e12.scope), c3 = e12.update = () => u3.run();
      c3.id = e12.uid, rH(e12, true), u3.onTrack = e12.rtc ? (t13) => er(e12.rtc, t13) : void 0, u3.onTrigger = e12.rtg ? (t13) => er(e12.rtg, t13) : void 0, c3.ownerInstance = e12, c3();
    }, X2 = (e12, t12, r12) => {
      t12.component = e12;
      let o10 = e12.vnode.props;
      e12.vnode = t12, e12.next = null, function(e13, t13, r13, o11) {
        let { props: i12, attrs: l12, vnode: { patchFlag: a11 } } = e13, s3 = /* @__PURE__ */ tw(i12), [u3] = e13.propsOptions, c3 = false;
        if (
          // - #1942 if hmr is enabled with sfc component
          // - vite#872 non-sfc component used by sfc component
          !function(e14) {
            for (; e14; ) {
              if (e14.type.__hmrId)
                return true;
              e14 = e14.parent;
            }
          }(e13) && (o11 || a11 > 0) && !(16 & a11)
        ) {
          if (8 & a11) {
            let r14 = e13.vnode.dynamicProps;
            for (let o12 = 0; o12 < r14.length; o12++) {
              let a12 = r14[o12];
              if (ny(e13.emitsOptions, a12))
                continue;
              let f3 = t13[a12];
              if (u3) {
                if (I(l12, a12))
                  f3 !== l12[a12] && (l12[a12] = f3, c3 = true);
                else {
                  let t14 = /* @__PURE__ */ Q(a12);
                  i12[t14] = /* @__PURE__ */ rO(u3, s3, t14, f3, e13, false);
                }
              } else
                f3 !== l12[a12] && (l12[a12] = f3, c3 = true);
            }
          }
        } else {
          let o12;
          for (let a12 in r$(e13, t13, i12, l12) && (c3 = true), s3)
            t13 && // for camelCase
            (I(t13, a12) || // it's possible the original props was passed in as kebab-case
            // and converted to camelCase (#955)
            (o12 = /* @__PURE__ */ Z(a12)) !== a12 && I(t13, o12)) || (u3 ? r13 && // for camelCase
            (void 0 !== r13[a12] || // for kebab-case
            void 0 !== r13[o12]) && (i12[a12] = /* @__PURE__ */ rO(u3, s3, a12, void 0, e13, true)) : delete i12[a12]);
          if (l12 !== s3)
            for (let e14 in l12)
              t13 && I(t13, e14) || (delete l12[e14], c3 = true);
        }
        c3 && eM(e13, "set", "$attrs"), rj(t13 || {}, i12, e13);
      }(e12, t12.props, o10, r12), rD(e12, t12.children, r12), eT(), t4(), eI();
    }, ee2 = function(e12, t12, r12, o10, i12, l12, a11, s3) {
      let u3 = arguments.length > 8 && void 0 !== arguments[8] && arguments[8], c3 = e12 && e12.children, f3 = e12 ? e12.shapeFlag : 0, p3 = t12.children, { patchFlag: d3, shapeFlag: h3 } = t12;
      if (d3 > 0) {
        if (128 & d3) {
          en2(c3, p3, r12, o10, i12, l12, a11, s3, u3);
          return;
        }
        if (256 & d3) {
          et2(c3, p3, r12, o10, i12, l12, a11, s3, u3);
          return;
        }
      }
      8 & h3 ? (16 & f3 && ef2(c3, i12, l12), p3 !== c3 && m2(r12, p3)) : 16 & f3 ? 16 & h3 ? en2(c3, p3, r12, o10, i12, l12, a11, s3, u3) : ef2(c3, i12, l12, true) : (8 & f3 && m2(r12, ""), 16 & h3 && V2(p3, r12, o10, i12, l12, a11, s3, u3));
    }, et2 = (e12, t12, r12, o10, i12, l12, a11, s3, u3) => {
      let c3;
      e12 = e12 || k, t12 = t12 || k;
      let f3 = e12.length, p3 = t12.length, d3 = /* @__PURE__ */ Math.min(f3, p3);
      for (c3 = 0; c3 < d3; c3++) {
        let o11 = t12[c3] = u3 ? oi(t12[c3]) : oo(t12[c3]);
        w2(e12[c3], o11, r12, null, i12, l12, a11, s3, u3);
      }
      f3 > p3 ? ef2(e12, i12, l12, true, false, d3) : V2(t12, r12, o10, i12, l12, a11, s3, u3, d3);
    }, en2 = (e12, t12, r12, o10, i12, l12, a11, s3, u3) => {
      let c3 = 0, f3 = t12.length, p3 = e12.length - 1, d3 = f3 - 1;
      for (; c3 <= p3 && c3 <= d3; ) {
        let o11 = e12[c3], f4 = t12[c3] = u3 ? oi(t12[c3]) : oo(t12[c3]);
        if (r5(o11, f4))
          w2(o11, f4, r12, null, i12, l12, a11, s3, u3);
        else
          break;
        c3++;
      }
      for (; c3 <= p3 && c3 <= d3; ) {
        let o11 = e12[p3], c4 = t12[d3] = u3 ? oi(t12[d3]) : oo(t12[d3]);
        if (r5(o11, c4))
          w2(o11, c4, r12, null, i12, l12, a11, s3, u3);
        else
          break;
        p3--, d3--;
      }
      if (c3 > p3) {
        if (c3 <= d3) {
          let e13 = d3 + 1, p4 = e13 < f3 ? t12[e13].el : o10;
          for (; c3 <= d3; )
            w2(null, t12[c3] = u3 ? oi(t12[c3]) : oo(t12[c3]), r12, p4, i12, l12, a11, s3, u3), c3++;
        }
      } else if (c3 > d3)
        for (; c3 <= p3; )
          el2(e12[c3], i12, l12, true), c3++;
      else {
        let h3;
        let m3 = c3, g3 = c3, y3 = /* @__PURE__ */ new Map();
        for (c3 = g3; c3 <= d3; c3++) {
          let e13 = t12[c3] = u3 ? oi(t12[c3]) : oo(t12[c3]);
          null != e13.key && (y3.has(e13.key) && tD("Duplicate keys found during update:", /* @__PURE__ */ JSON.stringify(e13.key), "Make sure keys are unique."), y3.set(e13.key, c3));
        }
        let b3 = 0, _3 = d3 - g3 + 1, x3 = false, S2 = 0, $2 = Array(_3);
        for (c3 = 0; c3 < _3; c3++)
          $2[c3] = 0;
        for (c3 = m3; c3 <= p3; c3++) {
          let o11;
          let f4 = e12[c3];
          if (b3 >= _3) {
            el2(f4, i12, l12, true);
            continue;
          }
          if (null != f4.key)
            o11 = /* @__PURE__ */ y3.get(f4.key);
          else
            for (h3 = g3; h3 <= d3; h3++)
              if (0 === $2[h3 - g3] && r5(f4, t12[h3])) {
                o11 = h3;
                break;
              }
          void 0 === o11 ? el2(f4, i12, l12, true) : ($2[o11 - g3] = c3 + 1, o11 >= S2 ? S2 = o11 : x3 = true, w2(f4, t12[o11], r12, null, i12, l12, a11, s3, u3), b3++);
        }
        let O3 = x3 ? function(e13) {
          let t13, r13, o11, i13, l13;
          let a12 = /* @__PURE__ */ e13.slice(), s4 = [0], u4 = e13.length;
          for (t13 = 0; t13 < u4; t13++) {
            let u5 = e13[t13];
            if (0 !== u5) {
              if (e13[r13 = s4[s4.length - 1]] < u5) {
                a12[t13] = r13, s4.push(t13);
                continue;
              }
              for (o11 = 0, i13 = s4.length - 1; o11 < i13; )
                e13[s4[l13 = o11 + i13 >> 1]] < u5 ? o11 = l13 + 1 : i13 = l13;
              u5 < e13[s4[o11]] && (o11 > 0 && (a12[t13] = s4[o11 - 1]), s4[o11] = t13);
            }
          }
          for (o11 = s4.length, i13 = s4[o11 - 1]; o11-- > 0; )
            s4[o11] = i13, i13 = a12[i13];
          return s4;
        }($2) : k;
        for (h3 = O3.length - 1, c3 = _3 - 1; c3 >= 0; c3--) {
          let e13 = g3 + c3, p4 = t12[e13], d4 = e13 + 1 < f3 ? t12[e13 + 1].el : o10;
          0 === $2[c3] ? w2(null, p4, r12, d4, i12, l12, a11, s3, u3) : x3 && (h3 < 0 || c3 !== O3[h3] ? ei2(p4, r12, d4, 2) : h3--);
        }
      }
    }, ei2 = function(e12, t12, r12, o10) {
      let i12 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null, { el: l12, type: a11, transition: u3, children: c3, shapeFlag: f3 } = e12;
      if (6 & f3) {
        ei2(e12.component.subTree, t12, r12, o10);
        return;
      }
      if (128 & f3) {
        e12.suspense.move(t12, r12, o10);
        return;
      }
      if (64 & f3) {
        a11.move(e12, t12, r12, eh2);
        return;
      }
      if (a11 === r1) {
        s2(l12, t12, r12);
        for (let e13 = 0; e13 < c3.length; e13++)
          ei2(c3[e13], t12, r12, o10);
        s2(e12.anchor, t12, r12);
        return;
      }
      if (a11 === r4) {
        P2(e12, t12, r12);
        return;
      }
      let p3 = 2 !== o10 && 1 & f3 && u3;
      if (p3) {
        if (0 === o10)
          u3.beforeEnter(l12), s2(l12, t12, r12), rq(() => u3.enter(l12), i12);
        else {
          let { leave: e13, delayLeave: o11, afterLeave: i13 } = u3, a12 = () => s2(l12, t12, r12), c4 = () => {
            e13(l12, () => {
              a12(), i13 && i13();
            });
          };
          o11 ? o11(l12, a12, c4) : c4();
        }
      } else
        s2(l12, t12, r12);
    }, el2 = function(e12, t12, r12) {
      let o10, i12 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], l12 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], { type: a11, props: s3, ref: u3, children: c3, dynamicChildren: f3, shapeFlag: p3, patchFlag: d3, dirs: h3 } = e12;
      if (null != u3 && rU(u3, null, r12, e12, true), 256 & p3) {
        t12.ctx.deactivate(e12);
        return;
      }
      let m3 = 1 & p3 && h3, g3 = !nQ(e12);
      if (g3 && (o10 = s3 && s3.onVnodeBeforeUnmount) && oa(o10, t12, e12), 6 & p3)
        ec2(e12.component, r12, i12);
      else {
        if (128 & p3) {
          e12.suspense.unmount(r12, i12);
          return;
        }
        m3 && nV(e12, null, t12, "beforeUnmount"), 64 & p3 ? e12.type.remove(e12, t12, r12, l12, eh2, i12) : f3 && // #1153: fast path should not be taken for non-stable (v-for) fragments
        (a11 !== r1 || d3 > 0 && 64 & d3) ? ef2(f3, t12, r12, false, true) : (a11 === r1 && 384 & d3 || !l12 && 16 & p3) && ef2(c3, t12, r12), i12 && es2(e12);
      }
      (g3 && (o10 = s3 && s3.onVnodeUnmounted) || m3) && rq(() => {
        o10 && oa(o10, t12, e12), m3 && nV(e12, null, t12, "unmounted");
      }, r12);
    }, es2 = (e12) => {
      let { type: t12, el: r12, anchor: o10, transition: i12 } = e12;
      if (t12 === r1) {
        e12.patchFlag > 0 && 2048 & e12.patchFlag && i12 && !i12.persisted ? e12.children.forEach((e13) => {
          e13.type === r3 ? u2(e13.el) : es2(e13);
        }) : eu2(r12, o10);
        return;
      }
      if (t12 === r4) {
        A2(e12);
        return;
      }
      let l12 = () => {
        u2(r12), i12 && !i12.persisted && i12.afterLeave && i12.afterLeave();
      };
      if (1 & e12.shapeFlag && i12 && !i12.persisted) {
        let { leave: t13, delayLeave: o11 } = i12, a11 = () => t13(r12, l12);
        o11 ? o11(e12.el, l12, a11) : a11();
      } else
        l12();
    }, eu2 = (e12, t12) => {
      let r12;
      for (; e12 !== t12; )
        r12 = /* @__PURE__ */ y2(e12), u2(e12), e12 = r12;
      u2(t12);
    }, ec2 = (e12, t12, r12) => {
      e12.type.__hmrId && function(e13) {
        nt.get(e13.type.__hmrId).instances.delete(e13);
      }(e12);
      let { bum: o10, scope: i12, update: l12, subTree: a11, um: s3 } = e12;
      o10 && er(o10), i12.stop(), l12 && (l12.active = false, el2(a11, e12, t12, r12)), s3 && rq(s3, t12), rq(() => {
        e12.isUnmounted = true;
      }, t12), t12 && t12.pendingBranch && !t12.isUnmounted && e12.asyncDep && !e12.asyncResolved && e12.suspenseId === t12.pendingId && (t12.deps--, 0 === t12.deps && t12.resolve()), np(e12);
    }, ef2 = function(e12, t12, r12) {
      let o10 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], i12 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], l12 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
      for (let a11 = l12; a11 < e12.length; a11++)
        el2(e12[a11], t12, r12, o10, i12);
    }, ep2 = (e12) => 6 & e12.shapeFlag ? ep2(e12.component.subTree) : 128 & e12.shapeFlag ? e12.suspense.next() : y2(e12.anchor || e12.el), ed2 = (e12, t12, r12) => {
      null == e12 ? t12._vnode && el2(t12._vnode, null, null, true) : w2(t12._vnode || null, e12, t12, null, null, null, r12), t4(), t6(), t12._vnode = e12;
    }, eh2 = { p: w2, um: el2, m: ei2, r: es2, mt: K2, mc: V2, pc: ee2, pbc: B2, n: ep2, o: e11 };
    return t11 && ([i11, l11] = /* @__PURE__ */ t11(eh2)), { render: ed2, hydrate: i11, createApp: (r11 = i11, function(e12) {
      let t12 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      N(e12) || (e12 = /* @__PURE__ */ j({}, e12)), null == t12 || D(t12) || (tD("root props passed to app.mount() must be an object."), t12 = null);
      let o10 = /* @__PURE__ */ r_();
      Object.defineProperty(o10.config, "unwrapInjectedRef", { get: () => true, set() {
        tD("app.config.unwrapInjectedRef has been deprecated. 3.3 now always unwraps injected refs in Options API.");
      } });
      let i12 = /* @__PURE__ */ new WeakSet(), l12 = false, a11 = o10.app = { _uid: rw++, _component: e12, _props: t12, _container: null, _context: o10, _instance: null, version: oI, get config() {
        return o10.config;
      }, set config(v) {
        tD("app.config cannot be replaced. Modify individual options instead.");
      }, use(e13) {
        for (var t13 = arguments.length, r12 = Array(t13 > 1 ? t13 - 1 : 0), o11 = 1; o11 < t13; o11++)
          r12[o11 - 1] = arguments[o11];
        return i12.has(e13) ? tD("Plugin has already been applied to target app.") : e13 && N(e13.install) ? (i12.add(e13), e13.install(a11, ...r12)) : N(e13) ? (i12.add(e13), e13(a11, ...r12)) : tD('A plugin must either be a function or an object with an "install" function.'), a11;
      }, mixin: (e13) => (o10.mixins.includes(e13) ? tD("Mixin has already been applied to target app" + (e13.name ? `: ${e13.name}` : "")) : o10.mixins.push(e13), a11), component: (e13, t13) => (om(e13, o10.config), t13) ? (o10.components[e13] && tD(`Component "${e13}" has already been registered in target app.`), o10.components[e13] = t13, a11) : o10.components[e13], directive: (e13, t13) => (nL(e13), t13) ? (o10.directives[e13] && tD(`Directive "${e13}" has already been registered in target app.`), o10.directives[e13] = t13, a11) : o10.directives[e13], mount(i13, s3, u3) {
        if (l12)
          tD(`App has already been mounted.
If you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. \`const createMyApp = () => createApp(App)\``);
        else {
          i13.__vue_app__ && tD(`There is already an app instance mounted on the host container.
 If you want to mount another app on the same host container, you need to unmount the previous app by calling \`app.unmount()\` first.`);
          let c3 = /* @__PURE__ */ ot(e12, t12);
          return c3.appContext = o10, o10.reload = () => {
            ed2(/* @__PURE__ */ on(c3), i13, u3);
          }, s3 && r11 ? r11(c3, i13) : ed2(c3, i13, u3), l12 = true, a11._container = i13, i13.__vue_app__ = a11, a11._instance = c3.component, ns("app:init", a11, oI, { Fragment: r1, Text: r2, Comment: r3, Static: r4 }), ox(c3.component) || c3.component.proxy;
        }
      }, unmount() {
        l12 ? (ed2(null, a11._container), a11._instance = null, ns("app:unmount", a11), delete a11._container.__vue_app__) : tD("Cannot unmount an app that is not mounted.");
      }, provide: (e13, t13) => (e13 in o10.provides && tD(`App already provides property with key "${String(e13)}". It will be overwritten with the new value.`), o10.provides[e13] = t13, a11), runWithContext(e13) {
        rx = a11;
        try {
          return e13();
        } finally {
          rx = null;
        }
      } };
      return a11;
    }) };
  }(ie))).createApp(...t10);
  Object.defineProperty(i10.config, "isNativeTag", { value: (e11) => ed(e11) || eh(e11), writable: false }), function(e11) {
    if (o_()) {
      let t11 = e11.config.isCustomElement;
      Object.defineProperty(e11.config, "isCustomElement", { get: () => t11, set() {
        tD("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
      } });
      let r11 = e11.config.compilerOptions, o10 = `The \`compilerOptions\` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, \`compilerOptions\` must be passed to \`@vue/compiler-dom\` in the build setup instead.
- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.
- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader
- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc`;
      Object.defineProperty(e11.config, "compilerOptions", { get: () => (tD(o10), r11), set() {
        tD(o10);
      } });
    }
  }(i10);
  let { mount: l10 } = i10;
  return i10.mount = (e11) => {
    let t11 = /* @__PURE__ */ function(e12) {
      if (L(e12)) {
        let t12 = /* @__PURE__ */ document.querySelector(e12);
        return t12 || tD(`Failed to mount app: mount target selector "${e12}" returned null.`), t12;
      }
      return window.ShadowRoot && e12 instanceof window.ShadowRoot && "closed" === e12.mode && tD('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'), e12;
    }(e11);
    if (!t11)
      return;
    let r11 = i10._component;
    N(r11) || r11.render || r11.template || (r11.template = t11.innerHTML), t11.innerHTML = "";
    let o10 = /* @__PURE__ */ l10(t11, false, t11 instanceof SVGElement);
    return t11 instanceof Element && (t11.removeAttribute("v-cloak"), t11.setAttribute("data-v-app", "")), o10;
  }, i10;
};
!function() {
  if ("undefined" == typeof window)
    return;
  let e10 = { style: "color:#3ba776" }, t10 = { style: "color:#0b1bc9" }, r10 = { style: "color:#b62e24" }, o10 = { style: "color:#9d288c" }, i10 = { header(t11) {
    if (!D(t11))
      return null;
    if (t11.__isVue)
      return ["div", e10, "VueInstance"];
    if (tC(t11))
      return ["div", {}, ["span", e10, oT(t11) ? "ShallowRef" : t11.effect ? "ComputedRef" : "Ref"], "<", /* @__PURE__ */ a10(t11.value), ">"];
    return tg(t11) ? ["div", {}, ["span", e10, oT(t11) ? "ShallowReactive" : "Reactive"], "<", /* @__PURE__ */ a10(t11), `>${ty(t11) ? " (readonly)" : ""}`] : ty(t11) ? ["div", {}, ["span", e10, oT(t11) ? "ShallowReadonly" : "Readonly"], "<", /* @__PURE__ */ a10(t11), ">"] : null;
  }, hasBody: (e11) => e11 && e11.__isVue, body(e11) {
    if (e11 && e11.__isVue)
      return ["div", {}, .../* @__PURE__ */ function(e12) {
        let t11 = [];
        e12.type.props && e12.props && t11.push(/* @__PURE__ */ l10("props", /* @__PURE__ */ tw(e12.props))), e12.setupState !== S && t11.push(/* @__PURE__ */ l10("setup", e12.setupState)), e12.data !== S && t11.push(/* @__PURE__ */ l10("data", /* @__PURE__ */ tw(e12.data)));
        let r11 = /* @__PURE__ */ s2(e12, "computed");
        r11 && t11.push(/* @__PURE__ */ l10("computed", r11));
        let i11 = /* @__PURE__ */ s2(e12, "inject");
        return i11 && t11.push(/* @__PURE__ */ l10("injected", i11)), t11.push(["div", {}, ["span", { style: o10.style + ";opacity:0.66" }, "$ (internal): "], ["object", { object: e12 }]]), t11;
      }(e11.$)];
  } };
  function l10(e11, t11) {
    return Object.keys(t11 = /* @__PURE__ */ j({}, t11)).length ? ["div", { style: "line-height:1.25em;margin-bottom:0.6em" }, ["div", { style: "color:#476582" }, e11], ["div", { style: "padding-left:1.25em" }, .../* @__PURE__ */ Object.keys(t11).map((e12) => ["div", {}, ["span", o10, e12 + ": "], /* @__PURE__ */ a10(t11[e12], false)])]] : ["span", {}];
  }
  function a10(e11) {
    let i11 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return "number" == typeof e11 ? ["span", t10, e11] : "string" == typeof e11 ? ["span", r10, /* @__PURE__ */ JSON.stringify(e11)] : "boolean" == typeof e11 ? ["span", o10, e11] : D(e11) ? ["object", { object: i11 ? tw(e11) : e11 }] : ["span", r10, /* @__PURE__ */ String(e11)];
  }
  function s2(e11, t11) {
    let r11 = e11.type;
    if (N(r11))
      return;
    let o11 = {};
    for (let i11 in e11.ctx)
      (function e12(t12, r12, o12) {
        let i12 = t12[o12];
        if (R(i12) && i12.includes(r12) || D(i12) && r12 in i12 || t12.extends && e12(t12.extends, r12, o12) || t12.mixins && t12.mixins.some((t13) => e12(t13, r12, o12)))
          return true;
      })(r11, i11, t11) && (o11[i11] = e11.ctx[i11]);
    return o11;
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i10) : window.devtoolsFormatters = [i10];
}();
let ir = (e10) => "function" == typeof e10, io = (e10) => void 0 === e10, ii = (e10) => e10 === r1, il = (e10) => !!ii(e10) || "string" == typeof e10 || "object" == typeof e10 && !!e10.__isTeleport, ia = (e10) => !!e10 && "object" == typeof e10 && !!e10.__vInternal, is = (e10) => ir(e10) ? e10 : Array.isArray(e10) ? () => e10 : io(e10) ? e10 : () => e10, iu = (e10, t10) => {
  let { children: r10, ...o10 } = e10;
  if (ia(r10))
    return [t10 ? { ...o10, key: t10 } : o10, r10];
  let i10 = {}, l10 = {}, a10 = false;
  for (let e11 in o10) {
    let t11 = o10[e11];
    if (e11.startsWith("$")) {
      let r11 = /* @__PURE__ */ e11.slice(1);
      l10[r11] = /* @__PURE__ */ is(t11), a10 = true;
      continue;
    }
    i10[e11] = t11;
  }
  let s2 = /* @__PURE__ */ is(r10);
  return s2 && (l10.default = s2, a10 = true), [t10 ? { ...i10, key: t10 } : i10, a10 ? l10 : void 0];
}, ic = (e10, t10, r10) => ip(e10, t10, r10), ip = (e10, t10, r10) => {
  let [o10, i10] = iu(t10, r10);
  if (il(e10)) {
    var l10, a10;
    return oP(e10, o10, null !== (a10 = null == i10 ? void 0 : null === (l10 = i10.default) || void 0 === l10 ? void 0 : l10.call(i10)) && void 0 !== a10 ? a10 : ii(e10) ? [] : void 0);
  }
  return oP(e10, o10, i10);
}, id = r1;
function ih(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o10 = null != r10 ? r10 : t10, i10 = null != t10 ? t10 : e10, l10 = d(e10) ? {} : e10, [a10, s2] = h(/* @__PURE__ */ Object.keys(l10), (e11) => /^on[A-Z]/.test(e11)), u2 = { emits: /* @__PURE__ */ a10.map((e11) => m(/* @__PURE__ */ e11.slice(2))), props: /* @__PURE__ */ s2.filter((e11) => !/^[$]/.test(e11)).reduce((e11, t11) => {
    let r11 = l10[t11];
    return { ...e11, [t11]: { default: () => {
      try {
        return r11.create(void 0);
      } catch (e12) {
      }
    }, validator: (e12) => r11.validate(e12) } };
  }, {}) };
  return { get name() {
    var c2;
    return null !== (c2 = this.displayName) && void 0 !== c2 ? c2 : o10.name;
  }, set name(n) {
    o10.name = n;
  }, setup: (e11, t11) => i10(e11, t11), emits: u2.emits, props: u2.props, inheritAttrs: o10.inheritAttrs, propTypes: l10 };
}
let iv = (e10, t10) => new Proxy(e10, { get(e11, r10) {
  var o10;
  return null !== (o10 = t10[r10]) && void 0 !== o10 ? o10 : e11[r10];
} });
function im() {
  return "undefined" != typeof navigator && "undefined" != typeof window ? window : "undefined" != typeof global ? global : {};
}
let ig = "function" == typeof Proxy;
class iy {
  constructor(e10, t10) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = e10, this.hook = t10;
    let r10 = {};
    if (e10.settings)
      for (let t11 in e10.settings) {
        let o11 = e10.settings[t11];
        r10[t11] = o11.defaultValue;
      }
    let o10 = `__vue-devtools-plugin-settings__${e10.id}`, i10 = /* @__PURE__ */ Object.assign({}, r10);
    try {
      let e11 = /* @__PURE__ */ localStorage.getItem(o10), t11 = /* @__PURE__ */ JSON.parse(e11);
      Object.assign(i10, t11);
    } catch (e11) {
    }
    this.fallbacks = { getSettings: () => i10, setSettings(e11) {
      try {
        localStorage.setItem(o10, /* @__PURE__ */ JSON.stringify(e11));
      } catch (e12) {
      }
      i10 = e11;
    }, now: () => {
      var e11;
      return (void 0 !== f || ("undefined" != typeof window && window.performance ? (f = true, p = window.performance) : "undefined" != typeof global && (null === (e11 = global.perf_hooks) || void 0 === e11 ? void 0 : e11.performance) ? (f = true, p = global.perf_hooks.performance) : f = false), f) ? p.now() : Date.now();
    } }, t10 && t10.on("plugin:settings:set", (e11, t11) => {
      e11 === this.plugin.id && this.fallbacks.setSettings(t11);
    }), this.proxiedOn = new Proxy({}, { get: (e11, t11) => {
      if (this.target)
        return this.target.on[t11];
      var r11 = this;
      return function() {
        for (var e12 = arguments.length, o11 = Array(e12), i11 = 0; i11 < e12; i11++)
          o11[i11] = arguments[i11];
        r11.onQueue.push({ method: t11, args: o11 });
      };
    } }), this.proxiedTarget = new Proxy({}, { get: (e11, t11) => {
      if (this.target)
        return this.target[t11];
      if ("on" === t11)
        return this.proxiedOn;
      if (Object.keys(this.fallbacks).includes(t11)) {
        var r11 = this;
        return function() {
          for (var e12 = arguments.length, o12 = Array(e12), i11 = 0; i11 < e12; i11++)
            o12[i11] = arguments[i11];
          return r11.targetQueue.push({ method: t11, args: o12, resolve: () => {
          } }), r11.fallbacks[t11](...o12);
        };
      }
      var o11 = this;
      return function() {
        for (var e12 = arguments.length, r12 = Array(e12), i11 = 0; i11 < e12; i11++)
          r12[i11] = arguments[i11];
        return new Promise((e13) => {
          o11.targetQueue.push({ method: t11, args: r12, resolve: e13 });
        });
      };
    } });
  }
  async setRealTarget(e10) {
    for (let t10 of (this.target = e10, this.onQueue))
      this.target.on[t10.method](...t10.args);
    for (let e11 of this.targetQueue)
      e11.resolve(await this.target[e11.method](...e11.args));
  }
}
let ib = "undefined" != typeof window, i_ = Object.assign;
function iw(e10, t10) {
  let r10 = {};
  for (let o10 in t10) {
    let i10 = t10[o10];
    r10[o10] = iS(i10) ? i10.map(e10) : e10(i10);
  }
  return r10;
}
let ix = () => {
}, iS = Array.isArray;
function ik(e10) {
  let t10 = /* @__PURE__ */ Array.from(arguments).slice(1);
  console.warn.apply(console, /* @__PURE__ */ ["[Vue Router warn]: " + e10].concat(t10));
}
let i$ = /\/$/, iO = (e10) => e10.replace(i$, "");
function iC(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/", o10, i10 = {}, l10 = "", a10 = "", s2 = /* @__PURE__ */ t10.indexOf("#"), u2 = /* @__PURE__ */ t10.indexOf("?");
  return s2 < u2 && s2 >= 0 && (u2 = -1), u2 > -1 && (o10 = /* @__PURE__ */ t10.slice(0, u2), i10 = /* @__PURE__ */ e10(l10 = /* @__PURE__ */ t10.slice(u2 + 1, s2 > -1 ? s2 : t10.length))), s2 > -1 && (o10 = o10 || t10.slice(0, s2), // keep the # character
  a10 = /* @__PURE__ */ t10.slice(s2, t10.length)), { fullPath: (
    // no search and no query
    (o10 = /**
    * Resolves a relative path that starts with `.`.
    *
    * @param to - path location we are resolving
    * @param from - currentLocation.path, should start with `/`
    */
    /* @__PURE__ */ function(e11, t11) {
      let r11, o11;
      if (e11.startsWith("/"))
        return e11;
      if (!t11.startsWith("/"))
        return ik(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e11}" from "${t11}". It should look like "/${t11}".`), e11;
      if (!e11)
        return t11;
      let i11 = /* @__PURE__ */ t11.split("/"), l11 = /* @__PURE__ */ e11.split("/"), a11 = l11[l11.length - 1];
      (".." === a11 || "." === a11) && l11.push("");
      let s3 = i11.length - 1;
      for (r11 = 0; r11 < l11.length; r11++)
        if ("." !== (o11 = l11[r11])) {
          if (".." === o11)
            s3 > 1 && s3--;
          else
            break;
        }
      return i11.slice(0, s3).join("/") + "/" + l11.slice(r11 - (r11 === l11.length ? 1 : 0)).join("/");
    }(null != o10 ? o10 : t10, r10)) + (l10 && "?") + l10 + a10
  ), path: o10, query: i10, hash: a10 };
}
function iE(e10, t10) {
  return (
    // no base or base is not found at the beginning
    t10 && e10.toLowerCase().startsWith(/* @__PURE__ */ t10.toLowerCase()) ? e10.slice(t10.length) || "/" : e10
  );
}
function iP(e10, t10, r10) {
  let o10 = t10.matched.length - 1, i10 = r10.matched.length - 1;
  return o10 > -1 && o10 === i10 && ij(t10.matched[o10], r10.matched[i10]) && iA(t10.params, r10.params) && e10(t10.query) === e10(r10.query) && t10.hash === r10.hash;
}
function ij(e10, t10) {
  return (e10.aliasOf || e10) === (t10.aliasOf || t10);
}
function iA(e10, t10) {
  if (Object.keys(e10).length !== Object.keys(t10).length)
    return false;
  for (let i10 in e10) {
    var r10, o10;
    if (r10 = e10[i10], o10 = t10[i10], iS(r10) ? !iT(r10, o10) : iS(o10) ? !iT(o10, r10) : r10 !== o10)
      return false;
  }
  return true;
}
function iT(e10, t10) {
  return iS(t10) ? e10.length === t10.length && e10.every((e11, r10) => e11 === t10[r10]) : 1 === e10.length && e10[0] === t10;
}
(lD = lB || (lB = {})).pop = "pop", lD.push = "push", (lU = lW || (lW = {})).back = "back", lU.forward = "forward", lU.unknown = "";
let iI = /^[^#]+#/;
function iR(e10, t10) {
  return e10.replace(iI, "#") + t10;
}
let iF = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function iM(e10, t10) {
  let r10 = history.state ? history.state.position - t10 : -1;
  return r10 + e10;
}
let iN = /* @__PURE__ */ new Map(), iL = () => location.protocol + "//" + location.host;
function iV(e10, t10) {
  let { pathname: r10, search: o10, hash: i10 } = t10, l10 = /* @__PURE__ */ e10.indexOf("#");
  if (l10 > -1) {
    let t11 = i10.includes(/* @__PURE__ */ e10.slice(l10)) ? e10.slice(l10).length : 1, r11 = /* @__PURE__ */ i10.slice(t11);
    return "/" !== r11[0] && (r11 = "/" + r11), iE(r11, "");
  }
  let a10 = /* @__PURE__ */ iE(r10, e10);
  return a10 + o10 + i10;
}
function iD(e10, t10, r10) {
  let o10 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], i10 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
  return { back: e10, current: t10, forward: r10, replaced: o10, position: window.history.length, scroll: i10 ? iF() : null };
}
function iU(e10) {
  e10 = // Generic utils
  /**
   * Normalizes a base by removing any trailing slash and reading the base tag if
   * present.
   *
   * @param base - base to normalize
   */
  /* @__PURE__ */ function(e11) {
    if (!e11) {
      if (ib) {
        let t11 = /* @__PURE__ */ document.querySelector("base");
        e11 = /* @__PURE__ */ (e11 = t11 && t11.getAttribute("href") || "/").replace(/^\w+:\/\/[^\/]+/, "");
      } else
        e11 = "/";
    }
    return "/" !== e11[0] && "#" !== e11[0] && (e11 = "/" + e11), iO(e11);
  }(e10);
  let t10 = /* @__PURE__ */ function(e11) {
    let { history: t11, location: r11 } = window, o11 = { value: /* @__PURE__ */ iV(e11, r11) }, i10 = { value: t11.state };
    function l10(o12, l11, a10) {
      let s2 = /* @__PURE__ */ e11.indexOf("#"), u2 = s2 > -1 ? (r11.host && document.querySelector("base") ? e11 : e11.slice(s2)) + o12 : iL() + e11 + o12;
      try {
        t11[a10 ? "replaceState" : "pushState"](l11, "", u2), i10.value = l11;
      } catch (e12) {
        ik("Error with push/replace State", e12), // Force the navigation, this also resets the call count
        r11[a10 ? "replace" : "assign"](u2);
      }
    }
    return i10.value || l10(o11.value, {
      back: null,
      current: o11.value,
      forward: null,
      // the length is off by one, we need to decrease it
      position: t11.length - 1,
      replaced: true,
      // don't add a scroll as the user may have an anchor, and we want
      // scrollBehavior to be triggered without a saved position
      scroll: null
    }, true), { location: o11, state: i10, push: function(e12, r12) {
      let a10 = /* @__PURE__ */ i_(
        {},
        // history.replaceState
        // https://github.com/vuejs/router/issues/366
        i10.value,
        t11.state,
        { forward: e12, scroll: /* @__PURE__ */ iF() }
      );
      t11.state || ik(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), l10(a10.current, a10, true);
      let s2 = /* @__PURE__ */ i_({}, /* @__PURE__ */ iD(o11.value, e12, null), { position: a10.position + 1 }, r12);
      l10(e12, s2, false), o11.value = e12;
    }, replace: function(e12, r12) {
      let a10 = /* @__PURE__ */ i_({}, t11.state, /* @__PURE__ */ iD(i10.value.back, e12, i10.value.forward, true), r12, { position: i10.value.position });
      l10(e12, a10, true), o11.value = e12;
    } };
  }(e10), r10 = /* @__PURE__ */ function(e11, t11, r11, o11) {
    let i10 = [], l10 = [], a10 = null, s2 = (l11) => {
      let { state: s3 } = l11, u3 = /* @__PURE__ */ iV(e11, location), c2 = r11.value, f2 = t11.value, p2 = 0;
      if (s3) {
        if (r11.value = u3, t11.value = s3, a10 && a10 === c2) {
          a10 = null;
          return;
        }
        p2 = f2 ? s3.position - f2.position : 0;
      } else
        o11(u3);
      i10.forEach((e12) => {
        e12(r11.value, c2, { delta: p2, type: lB.pop, direction: p2 ? p2 > 0 ? lW.forward : lW.back : lW.unknown });
      });
    };
    function u2() {
      let { history: e12 } = window;
      e12.state && e12.replaceState(/* @__PURE__ */ i_({}, e12.state, { scroll: /* @__PURE__ */ iF() }), "");
    }
    return (
      // set up the listeners and prepare teardown callbacks
      window.addEventListener("popstate", s2), // TODO: could we use 'pagehide' or 'visibilitychange' instead?
      // https://developer.chrome.com/blog/page-lifecycle-api/
      window.addEventListener("beforeunload", u2, { passive: true }), { pauseListeners: function() {
        a10 = r11.value;
      }, listen: function(e12) {
        i10.push(e12);
        let t12 = () => {
          let t13 = /* @__PURE__ */ i10.indexOf(e12);
          t13 > -1 && i10.splice(t13, 1);
        };
        return l10.push(t12), t12;
      }, destroy: function() {
        for (let e12 of l10)
          e12();
        l10 = [], window.removeEventListener("popstate", s2), window.removeEventListener("beforeunload", u2);
      } }
    );
  }(e10, t10.state, t10.location, t10.replace), o10 = /* @__PURE__ */ i_({
    // it's overridden right after
    location: "",
    base: e10,
    go: function(e11) {
      let t11 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
      t11 || r10.pauseListeners(), history.go(e11);
    },
    createHref: /* @__PURE__ */ iR.bind(null, e10)
  }, t10, r10);
  return Object.defineProperty(o10, "location", { enumerable: true, get: () => t10.location.value }), Object.defineProperty(o10, "state", { enumerable: true, get: () => t10.state.value }), o10;
}
function iz(e10) {
  return "string" == typeof e10 || "symbol" == typeof e10;
}
let iB = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 }, iW = /* @__PURE__ */ Symbol("navigation failure");
(lz = lq || (lq = {}))[lz.aborted = 4] = "aborted", /**
* A cancelled navigation is a navigation that failed because a more recent
* navigation finished started (not necessarily finished).
*/
lz[lz.cancelled = 8] = "cancelled", /**
* A duplicated navigation is a navigation that failed because it was
* initiated while already being at the exact same location.
*/
lz[lz.duplicated = 16] = "duplicated";
let iq = { 1(e10) {
  let { location: t10, currentLocation: r10 } = e10;
  return `No match for
 ${JSON.stringify(t10)}${r10 ? "\nwhile being at\n" + JSON.stringify(r10) : ""}`;
}, 2(e10) {
  let { from: t10, to: r10 } = e10;
  return `Redirected from "${t10.fullPath}" to "${function(e11) {
    if ("string" == typeof e11)
      return e11;
    if ("path" in e11)
      return e11.path;
    let t11 = {};
    for (let r11 of iK)
      r11 in e11 && (t11[r11] = e11[r11]);
    return JSON.stringify(t11, null, 2);
  }(r10)}" via a navigation guard.`;
}, 4(e10) {
  let { from: t10, to: r10 } = e10;
  return `Navigation aborted from "${t10.fullPath}" to "${r10.fullPath}" via a navigation guard.`;
}, 8(e10) {
  let { from: t10, to: r10 } = e10;
  return `Navigation cancelled from "${t10.fullPath}" to "${r10.fullPath}" with a new navigation.`;
}, 16(e10) {
  let { from: t10, to: r10 } = e10;
  return `Avoided redundant navigation to current location: "${t10.fullPath}".`;
} };
function iH(e10, t10) {
  return i_(Error(iq[e10](t10)), { type: e10, [iW]: true }, t10);
}
function iG(e10, t10) {
  return e10 instanceof Error && iW in e10 && (null == t10 || !!(e10.type & t10));
}
let iK = ["params", "query", "hash"], iY = "[^/]+?", iJ = { sensitive: false, strict: false, start: true, end: true }, iQ = /[.+*?^${}()[\]/\\]/g;
function iX(e10) {
  let t10 = e10[e10.length - 1];
  return e10.length > 0 && t10[t10.length - 1] < 0;
}
let iZ = { type: 0, value: "" }, i0 = /[a-zA-Z0-9_]/;
function i1(e10, t10) {
  let r10 = {};
  for (let o10 of t10)
    o10 in e10 && (r10[o10] = e10[o10]);
  return r10;
}
function i2(e10) {
  for (; e10; ) {
    if (e10.record.aliasOf)
      return true;
    e10 = e10.parent;
  }
  return false;
}
function i3(e10, t10) {
  let r10 = {};
  for (let o10 in e10)
    r10[o10] = o10 in t10 ? t10[o10] : e10[o10];
  return r10;
}
function i4(e10, t10) {
  return e10.name === t10.name && e10.optional === t10.optional && e10.repeatable === t10.repeatable;
}
let i6 = /#/g, i8 = /&/g, i5 = /\//g, i7 = /=/g, i9 = /\?/g, le = /\+/g, lt = /%5B/g, ln = /%5D/g, lr = /%5E/g, lo = /%60/g, li = /%7B/g, ll = /%7C/g, la = /%7D/g, ls = /%20/g;
function lu(e10) {
  return encodeURI("" + e10).replace(ll, "|").replace(lt, "[").replace(ln, "]");
}
function lc(e10) {
  return lu(e10).replace(le, "%2B").replace(ls, "+").replace(i6, "%23").replace(i8, "%26").replace(lo, "`").replace(li, "{").replace(la, "}").replace(lr, "^");
}
function lf(e10) {
  return null == e10 ? "" : lu(e10).replace(i6, "%23").replace(i9, "%3F").replace(i5, "%2F");
}
function lp(e10) {
  try {
    return decodeURIComponent("" + e10);
  } catch (t10) {
    ik(`Error decoding "${e10}". Using original value`);
  }
  return "" + e10;
}
function ld(e10) {
  let t10 = {};
  if ("" === e10 || "?" === e10)
    return t10;
  let r10 = "?" === e10[0], o10 = /* @__PURE__ */ (r10 ? e10.slice(1) : e10).split("&");
  for (let e11 = 0; e11 < o10.length; ++e11) {
    let r11 = /* @__PURE__ */ o10[e11].replace(le, " "), i10 = /* @__PURE__ */ r11.indexOf("="), l10 = /* @__PURE__ */ lp(i10 < 0 ? r11 : r11.slice(0, i10)), a10 = i10 < 0 ? null : lp(/* @__PURE__ */ r11.slice(i10 + 1));
    if (l10 in t10) {
      let e12 = t10[l10];
      iS(e12) || (e12 = t10[l10] = [e12]), e12.push(a10);
    } else
      t10[l10] = a10;
  }
  return t10;
}
function lh(e10) {
  let t10 = "";
  for (let r10 in e10) {
    let o10 = e10[r10];
    if (r10 = lc(r10).replace(i7, "%3D"), null == o10) {
      void 0 !== o10 && (t10 += (t10.length ? "&" : "") + r10);
      continue;
    }
    let i10 = iS(o10) ? o10.map((e11) => e11 && lc(e11)) : [o10 && lc(o10)];
    i10.forEach((e11) => {
      void 0 !== e11 && // only append & with non-empty search
      (t10 += (t10.length ? "&" : "") + r10, null != e11 && (t10 += "=" + e11));
    });
  }
  return t10;
}
let lv = /* @__PURE__ */ Symbol("router view location matched"), lm = /* @__PURE__ */ Symbol("router view depth"), lg = /* @__PURE__ */ Symbol("router"), ly = /* @__PURE__ */ Symbol("route location"), lb = /* @__PURE__ */ Symbol("router view location");
function l_() {
  let e10 = [];
  return { add: function(t10) {
    return e10.push(t10), () => {
      let r10 = /* @__PURE__ */ e10.indexOf(t10);
      r10 > -1 && e10.splice(r10, 1);
    };
  }, list: () => e10.slice(), reset: function() {
    e10 = [];
  } };
}
function lw(e10, t10, r10, o10, i10) {
  let l10 = o10 && // name is defined if record is because of the function overload
  (o10.enterCallbacks[i10] = o10.enterCallbacks[i10] || []);
  return () => new Promise((a10, s2) => {
    let u2;
    let c2 = (e11) => {
      false === e11 ? s2(/* @__PURE__ */ iH(4, { from: r10, to: t10 })) : e11 instanceof Error ? s2(e11) : "string" == typeof e11 || e11 && "object" == typeof e11 ? s2(/* @__PURE__ */ iH(2, { from: t10, to: e11 })) : (l10 && // since enterCallbackArray is truthy, both record and name also are
      o10.enterCallbacks[i10] === l10 && "function" == typeof e11 && l10.push(e11), a10());
    }, f2 = /* @__PURE__ */ e10.call(o10 && o10.instances[i10], t10, r10, (u2 = 0, function() {
      1 == u2++ && ik(`The "next" callback was called more than once in one navigation guard when going from "${r10.fullPath}" to "${t10.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), // @ts-expect-error: we put it in the original one because it's easier to check
      c2._called = true, 1 === u2 && c2.apply(null, arguments);
    })), p2 = /* @__PURE__ */ Promise.resolve(f2);
    if (e10.length < 3 && (p2 = /* @__PURE__ */ p2.then(c2)), e10.length > 2) {
      let t11 = `The "next" callback was never called inside of ${e10.name ? '"' + e10.name + '"' : ""}:
${e10.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if ("object" == typeof f2 && "then" in f2)
        p2 = /* @__PURE__ */ p2.then((e11) => (
          // @ts-expect-error: _called is added at canOnlyBeCalledOnce
          c2._called ? e11 : (ik(t11), Promise.reject(Error("Invalid navigation guard")))
        ));
      else if (void 0 !== f2 && !c2._called) {
        ik(t11), s2(Error("Invalid navigation guard"));
        return;
      }
    }
    p2.catch((e11) => s2(e11));
  });
}
function lx(e10, t10, r10, o10) {
  let i10 = [];
  for (let a10 of e10)
    for (let e11 in a10.components || a10.children.length || ik(`Record with path "${a10.path}" is either missing a "component(s)" or "children" property.`), a10.components) {
      let s2 = a10.components[e11];
      if (s2 && ("object" == typeof s2 || "function" == typeof s2)) {
        if ("then" in s2) {
          ik(`Component "${e11}" in record with path "${a10.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          let t11 = s2;
          s2 = () => t11;
        } else
          s2.__asyncLoader && // warn only once per component
          !s2.__warnedDefineAsync && (s2.__warnedDefineAsync = true, ik(`Component "${e11}" in record with path "${a10.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      } else
        throw ik(`Component "${e11}" in record with path "${a10.path}" is not a valid component. Received "${String(s2)}".`), Error("Invalid route component");
      if ("beforeRouteEnter" === t10 || a10.instances[e11]) {
        var l10;
        if ("object" == typeof (l10 = s2) || "displayName" in l10 || "props" in l10 || "__vccOpts" in l10) {
          let l11 = s2.__vccOpts || s2, u2 = l11[t10];
          u2 && i10.push(/* @__PURE__ */ lw(u2, r10, o10, a10, e11));
        } else {
          let l11 = /* @__PURE__ */ s2();
          "catch" in l11 || (ik(`Component "${e11}" in record with path "${a10.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), l11 = /* @__PURE__ */ Promise.resolve(l11)), i10.push(() => l11.then((i11) => {
            if (!i11)
              return Promise.reject(Error(`Couldn't resolve component "${e11}" at "${a10.path}"`));
            let l12 = i11.__esModule || "Module" === i11[Symbol.toStringTag] ? i11.default : i11;
            a10.components[e11] = l12;
            let s3 = l12.__vccOpts || l12, u2 = s3[t10];
            return u2 && lw(u2, r10, o10, a10, e11)();
          }));
        }
      }
    }
  return i10;
}
function lS(e10) {
  let t10 = /* @__PURE__ */ rk(lg), r10 = /* @__PURE__ */ rk(ly), o10 = /* @__PURE__ */ oE(() => t10.resolve(/* @__PURE__ */ tT(e10.to))), i10 = /* @__PURE__ */ oE(() => {
    let { matched: e11 } = o10.value, { length: t11 } = e11, i11 = e11[t11 - 1], l11 = r10.matched;
    if (!i11 || !l11.length)
      return -1;
    let a11 = /* @__PURE__ */ l11.findIndex(/* @__PURE__ */ ij.bind(null, i11));
    if (a11 > -1)
      return a11;
    let s2 = /* @__PURE__ */ l$(e11[t11 - 2]);
    return t11 > 1 && // if the parent and matched route have the same path, this link is
    // referring to the empty child. Or we currently are on a different
    // child of the same parent
    l$(i11) === s2 && // avoid comparing the child with its parent
    l11[l11.length - 1].path !== s2 ? l11.findIndex(/* @__PURE__ */ ij.bind(null, e11[t11 - 2])) : a11;
  }), l10 = /* @__PURE__ */ oE(() => i10.value > -1 && function(e11, t11) {
    for (let r11 in t11) {
      let o11 = t11[r11], i11 = e11[r11];
      if ("string" == typeof o11) {
        if (o11 !== i11)
          return false;
      } else if (!iS(i11) || i11.length !== o11.length || o11.some((e12, t12) => e12 !== i11[t12]))
        return false;
    }
    return true;
  }(r10.params, o10.value.params)), a10 = /* @__PURE__ */ oE(() => i10.value > -1 && i10.value === r10.matched.length - 1 && iA(r10.params, o10.value.params));
  if (ib) {
    let e11 = /* @__PURE__ */ of();
    if (e11) {
      let t11 = { route: o10.value, isActive: l10.value, isExactActive: a10.value };
      e11.__vrl_devtools = e11.__vrl_devtools || [], // @ts-expect-error: this is internal
      e11.__vrl_devtools.push(t11), nR(() => {
        t11.route = o10.value, t11.isActive = l10.value, t11.isExactActive = a10.value;
      }, null, { flush: "post" });
    }
  }
  return { route: o10, href: /* @__PURE__ */ oE(() => o10.value.href), isActive: l10, isExactActive: a10, navigate: function() {
    let r11 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return !function(e11) {
      if (!e11.metaKey && !e11.altKey && !e11.ctrlKey && !e11.shiftKey && !e11.defaultPrevented && (void 0 === e11.button || 0 === e11.button)) {
        if (e11.currentTarget && e11.currentTarget.getAttribute) {
          let t11 = /* @__PURE__ */ e11.currentTarget.getAttribute("target");
          if (/\b_blank\b/i.test(t11))
            return;
        }
        return e11.preventDefault && e11.preventDefault(), true;
      }
    }(r11) ? Promise.resolve() : t10[tT(e10.replace) ? "replace" : "push"](/* @__PURE__ */ tT(e10.to)).catch(ix);
  } };
}
let lk = /* @__PURE__ */ nJ({ name: "RouterLink", compatConfig: { MODE: 3 }, props: {
  to: { type: [String, Object], required: true },
  replace: Boolean,
  activeClass: String,
  // inactiveClass: String,
  exactActiveClass: String,
  custom: Boolean,
  ariaCurrentValue: { type: String, default: "page" }
}, useLink: lS, setup(e10, t10) {
  let { slots: r10 } = t10, o10 = /* @__PURE__ */ tp(/* @__PURE__ */ lS(e10)), { options: i10 } = rk(lg), l10 = /* @__PURE__ */ oE(() => ({
    [lO(e10.activeClass, i10.linkActiveClass, "router-link-active")]: o10.isActive,
    // [getLinkClass(
    //   props.inactiveClass,
    //   options.linkInactiveClass,
    //   'router-link-inactive'
    // )]: !link.isExactActive,
    [lO(e10.exactActiveClass, i10.linkExactActiveClass, "router-link-exact-active")]: o10.isExactActive
  }));
  return () => {
    let t11 = r10.default && r10.default(o10);
    return e10.custom ? t11 : oP("a", {
      "aria-current": o10.isExactActive ? e10.ariaCurrentValue : null,
      href: o10.href,
      // this would override user added attrs but Vue will still add
      // the listener, so we end up triggering both
      onClick: o10.navigate,
      class: l10.value
    }, t11);
  };
} });
function l$(e10) {
  return e10 ? e10.aliasOf ? e10.aliasOf.path : e10.path : "";
}
let lO = (e10, t10, r10) => null != e10 ? e10 : null != t10 ? t10 : r10, lC = /* @__PURE__ */ nJ({
  name: "RouterView",
  // #674 we manually inherit them
  inheritAttrs: false,
  props: { name: { type: String, default: "default" }, route: Object },
  // Better compat for @vue/compat users
  // https://github.com/vuejs/router/issues/1315
  compatConfig: { MODE: 3 },
  setup(e10, t10) {
    let { attrs: r10, slots: o10 } = t10;
    !// warn against deprecated usage with <transition> & <keep-alive>
    // due to functional component being no longer eager in Vue 3
    function() {
      let e11 = /* @__PURE__ */ of(), t11 = e11.parent && e11.parent.type.name, r11 = e11.parent && e11.parent.subTree && e11.parent.subTree.type;
      if (t11 && ("KeepAlive" === t11 || t11.includes("Transition")) && "object" == typeof r11 && "RouterView" === r11.name) {
        let e12 = "KeepAlive" === t11 ? "keep-alive" : "transition";
        ik(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${e12}>
    <component :is="Component" />
  </${e12}>
</router-view>`);
      }
    }();
    let i10 = /* @__PURE__ */ rk(lb), l10 = /* @__PURE__ */ oE(() => e10.route || i10.value), a10 = /* @__PURE__ */ rk(lm, 0), s2 = /* @__PURE__ */ oE(() => {
      let e11, t11 = /* @__PURE__ */ tT(a10), { matched: r11 } = l10.value;
      for (; (e11 = r11[t11]) && !e11.components; )
        t11++;
      return t11;
    }), u2 = /* @__PURE__ */ oE(() => l10.value.matched[s2.value]);
    rS(lm, /* @__PURE__ */ oE(() => s2.value + 1)), rS(lv, u2), rS(lb, l10);
    let c2 = /* @__PURE__ */ tE();
    return (
      // watch at the same time the component instance, the route record we are
      // rendering, and the name
      nI(() => [c2.value, u2.value, e10.name], (e11, t11) => {
        let [r11, o11, i11] = e11, [l11, a11, s3] = t11;
        o11 && // this will update the instance for new instances as well as reused
        // instances when navigating to a new route
        (o11.instances[i11] = r11, a11 && a11 !== o11 && r11 && r11 === l11 && (o11.leaveGuards.size || (o11.leaveGuards = a11.leaveGuards), o11.updateGuards.size || (o11.updateGuards = a11.updateGuards))), !r11 || !o11 || // if there is no instance but to and from are the same this might be
        // the first visit
        a11 && ij(o11, a11) && l11 || (o11.enterCallbacks[i11] || []).forEach((e12) => e12(r11));
      }, { flush: "post" }), () => {
        let t11 = l10.value, i11 = e10.name, a11 = u2.value, f2 = a11 && a11.components[i11];
        if (!f2)
          return lE(o10.default, { Component: f2, route: t11 });
        let p2 = a11.props[i11], d2 = p2 ? true === p2 ? t11.params : "function" == typeof p2 ? p2(t11) : p2 : null, h2 = /* @__PURE__ */ oP(f2, /* @__PURE__ */ i_({}, d2, r10, { onVnodeUnmounted: (e11) => {
          e11.component.isUnmounted && (a11.instances[i11] = null);
        }, ref: c2 }));
        if (ib && h2.ref) {
          let e11 = { depth: s2.value, name: a11.name, path: a11.path, meta: a11.meta }, t12 = iS(h2.ref) ? h2.ref.map((e12) => e12.i) : [h2.ref.i];
          t12.forEach((t13) => {
            t13.__vrv_devtools = e11;
          });
        }
        return (
          // h and <component :is="..."> both accept vnodes
          lE(o10.default, { Component: h2, route: t11 }) || h2
        );
      }
    );
  }
});
function lE(e10, t10) {
  if (!e10)
    return null;
  let r10 = /* @__PURE__ */ e10(t10);
  return 1 === r10.length ? r10[0] : r10;
}
function lP(e10, t10) {
  let r10 = /* @__PURE__ */ i_({}, e10, {
    // remove variables that can contain vue instances
    matched: /* @__PURE__ */ e10.matched.map((e11) => function(e12, t11) {
      let r11 = {};
      for (let o10 in e12)
        t11.includes(o10) || // @ts-expect-error
        (r11[o10] = e12[o10]);
      return r11;
    }(e11, ["instances", "children", "aliasOf"]))
  });
  return { _custom: { type: null, readOnly: true, display: e10.fullPath, tooltip: t10, value: r10 } };
}
function lj(e10) {
  return { _custom: { display: e10 } };
}
let lA = 0;
function lT(e10) {
  let t10 = [], { record: r10 } = e10;
  null != r10.name && t10.push({ label: /* @__PURE__ */ String(r10.name), textColor: 0, backgroundColor: 2282478 }), r10.aliasOf && t10.push({ label: "alias", textColor: 0, backgroundColor: 16486972 }), e10.__vd_match && t10.push({ label: "matches", textColor: 0, backgroundColor: 15485081 }), e10.__vd_exactActive && t10.push({ label: "exact", textColor: 0, backgroundColor: 8702998 }), e10.__vd_active && t10.push({ label: "active", textColor: 0, backgroundColor: 2450411 }), r10.redirect && t10.push({ label: "string" == typeof r10.redirect ? `redirect: ${r10.redirect}` : "redirects", textColor: 16777215, backgroundColor: 6710886 });
  let o10 = r10.__vd_id;
  return null == o10 && (o10 = /* @__PURE__ */ String(lI++), r10.__vd_id = o10), { id: o10, label: r10.path, tags: t10, children: /* @__PURE__ */ e10.children.map(lT) };
}
let lI = 0, lR = /^\/(.*)\/([a-z]*)$/;
function lF(e10) {
  e10.__vd_match = false, e10.children.forEach(lF);
}
function lM(e10) {
  let t10, r10, o10;
  let i10 = (
    /**
    * Creates a Router Matcher.
    *
    * @internal
    * @param routes - array of initial routes
    * @param globalOptions - global route options
    */
    /* @__PURE__ */ function(e11, t11) {
      let r11 = [], o11 = /* @__PURE__ */ new Map();
      function i11(e12, a11, s3) {
        let u3, c3;
        let f3 = !s3, p3 = { path: e12.path, redirect: e12.redirect, name: e12.name, meta: e12.meta || {}, aliasOf: void 0, beforeEnter: e12.beforeEnter, props: (
          /**
          * Normalize the optional `props` in a record to always be an object similar to
          * components. Also accept a boolean for components.
          * @param record
          */
          /* @__PURE__ */ function(e13) {
            let t12 = {}, r12 = e13.props || false;
            if ("component" in e13)
              t12.default = r12;
            else
              for (let o12 in e13.components)
                t12[o12] = "object" == typeof r12 ? r12[o12] : r12;
            return t12;
          }(e12)
        ), children: e12.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e12 ? e12.components || null : e12.component && { default: e12.component } };
        a11 && a11.record.name && !p3.name && !p3.path && ik(`The route named "${String(a11.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`), // we might be the child of an alias
        p3.aliasOf = s3 && s3.record;
        let d3 = /* @__PURE__ */ i3(t11, e12), h3 = [p3];
        if ("alias" in e12) {
          let t12 = "string" == typeof e12.alias ? [e12.alias] : e12.alias;
          for (let e13 of t12)
            h3.push(/* @__PURE__ */ i_({}, p3, {
              // this allows us to hold a copy of the `components` option
              // so that async components cache is hold on the original record
              components: s3 ? s3.record.components : p3.components,
              path: e13,
              // we might be the child of an alias
              aliasOf: s3 ? s3.record : p3
            }));
        }
        for (let t12 of h3) {
          let { path: h4 } = t12;
          if (a11 && "/" !== h4[0]) {
            let e13 = a11.record.path, r12 = "/" === e13[e13.length - 1] ? "" : "/";
            t12.path = a11.record.path + (h4 && r12 + h4);
          }
          if ("*" === t12.path)
            throw Error('Catch all routes ("*") must now be defined using a param with a custom regexp.\nSee more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.');
          if (
            // create the object beforehand, so it can be passed to children
            u3 = /* @__PURE__ */ function(e13, t13, r12) {
              let o12 = (
                /**
                * Creates a path parser from an array of Segments (a segment is an array of Tokens)
                *
                * @param segments - array of segments returned by tokenizePath
                * @param extraOptions - optional options for the regexp
                * @returns a PathParser
                */
                /* @__PURE__ */ function(e14, t14) {
                  let r13 = /* @__PURE__ */ i_({}, iJ, t14), o13 = [], i13 = r13.start ? "^" : "", l12 = [];
                  for (let t15 of e14) {
                    let e15 = t15.length ? [] : [
                      90
                      /* PathScore.Root */
                    ];
                    r13.strict && !t15.length && (i13 += "/");
                    for (let o14 = 0; o14 < t15.length; o14++) {
                      let a13 = t15[o14], s4 = 40 + (r13.sensitive ? 0.25 : 0);
                      if (0 === a13.type)
                        o14 || (i13 += "/"), i13 += /* @__PURE__ */ a13.value.replace(iQ, "\\$&"), s4 += 40;
                      else if (1 === a13.type) {
                        let { value: e16, repeatable: r14, optional: u4, regexp: c4 } = a13;
                        l12.push({ name: e16, repeatable: r14, optional: u4 });
                        let f4 = c4 || iY;
                        if (f4 !== iY) {
                          s4 += 10;
                          try {
                            RegExp(`(${f4})`);
                          } catch (t16) {
                            throw Error(`Invalid custom RegExp for param "${e16}" (${f4}): ` + t16.message);
                          }
                        }
                        let p4 = r14 ? `((?:${f4})(?:/(?:${f4}))*)` : `(${f4})`;
                        o14 || (p4 = // or /:p?-:p2
                        u4 && t15.length < 2 ? `(?:/${p4})` : "/" + p4), u4 && (p4 += "?"), i13 += p4, s4 += 20, u4 && (s4 += -8), r14 && (s4 += -20), ".*" === f4 && (s4 += -50);
                      }
                      e15.push(s4);
                    }
                    o13.push(e15);
                  }
                  if (r13.strict && r13.end) {
                    let e15 = o13.length - 1;
                    o13[e15][o13[e15].length - 1] += 0.7000000000000001;
                  }
                  r13.strict || (i13 += "/?"), r13.end ? i13 += "$" : r13.strict && (i13 += "(?:/|$)");
                  let a12 = new RegExp(i13, r13.sensitive ? "" : "i");
                  return { re: a12, score: o13, keys: l12, parse: function(e15) {
                    let t15 = /* @__PURE__ */ e15.match(a12), r14 = {};
                    if (!t15)
                      return null;
                    for (let e16 = 1; e16 < t15.length; e16++) {
                      let o14 = t15[e16] || "", i14 = l12[e16 - 1];
                      r14[i14.name] = o14 && i14.repeatable ? o14.split("/") : o14;
                    }
                    return r14;
                  }, stringify: function(t15) {
                    let r14 = "", o14 = false;
                    for (let i14 of e14)
                      for (let e15 of (o14 && r14.endsWith("/") || (r14 += "/"), o14 = false, i14))
                        if (0 === e15.type)
                          r14 += e15.value;
                        else if (1 === e15.type) {
                          let { value: l13, repeatable: a13, optional: s4 } = e15, u4 = l13 in t15 ? t15[l13] : "";
                          if (iS(u4) && !a13)
                            throw Error(`Provided param "${l13}" is an array but it is not repeatable (* or + modifiers)`);
                          let c4 = iS(u4) ? u4.join("/") : u4;
                          if (!c4) {
                            if (s4)
                              i14.length < 2 && (r14.endsWith("/") ? r14 = /* @__PURE__ */ r14.slice(0, -1) : o14 = true);
                            else
                              throw Error(`Missing required param "${l13}"`);
                          }
                          r14 += c4;
                        }
                    return r14 || "/";
                  } };
                }(
                  // After some profiling, the cache seems to be unnecessary because tokenizePath
                  // (the slowest part of adding a route) is very fast
                  // const tokenCache = new Map<string, Token[][]>()
                  /* @__PURE__ */ function(e14) {
                    let t14, r13;
                    if (!e14)
                      return [[]];
                    if ("/" === e14)
                      return [[iZ]];
                    if (!e14.startsWith("/"))
                      throw Error(`Route paths should start with a "/": "${e14}" should be "/${e14}".`);
                    function o13(e15) {
                      throw Error(`ERR (${i13})/"${c4}": ${e15}`);
                    }
                    let i13 = 0, l12 = 0, a12 = [];
                    function s4() {
                      t14 && a12.push(t14), t14 = [];
                    }
                    let u4 = 0, c4 = "", f4 = "";
                    function p4() {
                      c4 && (0 === i13 ? t14.push({ type: 0, value: c4 }) : 1 === i13 || 2 === i13 || 3 === i13 ? (t14.length > 1 && ("*" === r13 || "+" === r13) && o13(`A repeatable param (${c4}) must be alone in its segment. eg: '/:ids+.`), t14.push({ type: 1, value: c4, regexp: f4, repeatable: "*" === r13 || "+" === r13, optional: "*" === r13 || "?" === r13 })) : o13("Invalid state to consume buffer"), c4 = "");
                    }
                    for (; u4 < e14.length; ) {
                      if ("\\" === (r13 = e14[u4++]) && 2 !== i13) {
                        l12 = i13, i13 = 4;
                        continue;
                      }
                      switch (i13) {
                        case 0:
                          "/" === r13 ? (c4 && p4(), s4()) : ":" === r13 ? (p4(), i13 = 1) : c4 += r13;
                          break;
                        case 4:
                          c4 += r13, i13 = l12;
                          break;
                        case 1:
                          "(" === r13 ? i13 = 2 : i0.test(r13) ? c4 += r13 : (p4(), i13 = 0, "*" !== r13 && "?" !== r13 && "+" !== r13 && u4--);
                          break;
                        case 2:
                          ")" === r13 ? "\\" == f4[f4.length - 1] ? f4 = f4.slice(0, -1) + r13 : i13 = 3 : f4 += r13;
                          break;
                        case 3:
                          p4(), i13 = 0, "*" !== r13 && "?" !== r13 && "+" !== r13 && u4--, f4 = "";
                          break;
                        default:
                          o13("Unknown state");
                      }
                    }
                    return 2 === i13 && o13(`Unfinished custom RegExp for param "${c4}"`), p4(), s4(), a12;
                  }(e13.path),
                  r12
                )
              );
              {
                let t14 = /* @__PURE__ */ new Set();
                for (let r13 of o12.keys)
                  t14.has(r13.name) && ik(`Found duplicated params with name "${r13.name}" for path "${e13.path}". Only the last one will be available on "$route.params".`), t14.add(r13.name);
              }
              let i12 = /* @__PURE__ */ i_(o12, {
                record: e13,
                parent: t13,
                // these needs to be populated by the parent
                children: [],
                alias: []
              });
              return t13 && !i12.record.aliasOf == !t13.record.aliasOf && t13.children.push(i12), i12;
            }(t12, a11, d3), a11 && "/" === h4[0] && function(e13, t13) {
              for (let r12 of t13.keys)
                if (!e13.keys.find(/* @__PURE__ */ i4.bind(null, r12)))
                  return ik(`Absolute path "${e13.record.path}" must have the exact same param named "${r12.name}" as its parent "${t13.record.path}".`);
            }(u3, a11), s3 ? (s3.alias.push(u3), /**
            * Check if a path and its alias have the same required params
            *
            * @param a - original record
            * @param b - alias record
            */
            function(e13, t13) {
              for (let r12 of e13.keys)
                if (!r12.optional && !t13.keys.find(/* @__PURE__ */ i4.bind(null, r12)))
                  return ik(`Alias "${t13.record.path}" and the original record: "${e13.record.path}" must have the exact same param named "${r12.name}"`);
              for (let r12 of t13.keys)
                if (!r12.optional && !e13.keys.find(/* @__PURE__ */ i4.bind(null, r12)))
                  return ik(`Alias "${t13.record.path}" and the original record: "${e13.record.path}" must have the exact same param named "${r12.name}"`);
            }(s3, u3)) : (
              // otherwise, the first record is the original and others are aliases
              ((c3 = c3 || u3) !== u3 && c3.alias.push(u3), f3 && e12.name && !i2(u3) && l11(e12.name))
            ), p3.children
          ) {
            let e13 = p3.children;
            for (let t13 = 0; t13 < e13.length; t13++)
              i11(e13[t13], u3, s3 && s3.children[t13]);
          }
          s3 = s3 || u3, (u3.record.components && Object.keys(u3.record.components).length || u3.record.name || u3.record.redirect) && function(e13) {
            let t13 = 0;
            for (; t13 < r11.length && /**
            * Compare function that can be used with `sort` to sort an array of PathParser
            *
            * @param a - first PathParser
            * @param b - second PathParser
            * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
            */
            function(e14, t14) {
              let r12 = 0, o12 = e14.score, i12 = t14.score;
              for (; r12 < o12.length && r12 < i12.length; ) {
                let e15 = (
                  /**
                  * Compares an array of numbers as used in PathParser.score and returns a
                  * number. This function can be used to `sort` an array
                  *
                  * @param a - first array of numbers
                  * @param b - second array of numbers
                  * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
                  * should be sorted first
                  */
                  /* @__PURE__ */ function(e16, t15) {
                    let r13 = 0;
                    for (; r13 < e16.length && r13 < t15.length; ) {
                      let o13 = t15[r13] - e16[r13];
                      if (o13)
                        return o13;
                      r13++;
                    }
                    return (
                      // if the last subsegment was Static, the shorter segments should be sorted first
                      // otherwise sort the longest segment first
                      e16.length < t15.length ? 1 === e16.length && 80 === e16[0] ? -1 : 1 : e16.length > t15.length ? 1 === t15.length && 80 === t15[0] ? 1 : -1 : 0
                    );
                  }(o12[r12], i12[r12])
                );
                if (e15)
                  return e15;
                r12++;
              }
              if (1 === Math.abs(i12.length - o12.length)) {
                if (iX(o12))
                  return 1;
                if (iX(i12))
                  return -1;
              }
              return i12.length - o12.length;
            }(e13, r11[t13]) >= 0 && // Adding children with empty path should still appear before the parent
            // https://github.com/vuejs/router/issues/1124
            (e13.record.path !== r11[t13].record.path || !function e14(t14, r12) {
              return r12.children.some((r13) => r13 === t14 || e14(t14, r13));
            }(e13, r11[t13])); )
              t13++;
            r11.splice(t13, 0, e13), e13.record.name && !i2(e13) && o11.set(e13.record.name, e13);
          }(u3);
        }
        return c3 ? () => {
          l11(c3);
        } : ix;
      }
      function l11(e12) {
        if (iz(e12)) {
          let t12 = /* @__PURE__ */ o11.get(e12);
          t12 && (o11.delete(e12), r11.splice(/* @__PURE__ */ r11.indexOf(t12), 1), t12.children.forEach(l11), t12.alias.forEach(l11));
        } else {
          let t12 = /* @__PURE__ */ r11.indexOf(e12);
          t12 > -1 && (r11.splice(t12, 1), e12.record.name && o11.delete(e12.record.name), e12.children.forEach(l11), e12.alias.forEach(l11));
        }
      }
      return t11 = /* @__PURE__ */ i3({ strict: false, end: true, sensitive: false }, t11), // add initial routes
      e11.forEach((e12) => i11(e12)), { addRoute: i11, resolve: function(e12, t12) {
        let i12, l12, a11;
        let s3 = {};
        if ("name" in e12 && e12.name) {
          if (!(i12 = /* @__PURE__ */ o11.get(e12.name)))
            throw iH(1, { location: e12 });
          {
            let t13 = /* @__PURE__ */ Object.keys(e12.params || {}).filter((e13) => !i12.keys.find((t14) => t14.name === e13));
            t13.length && ik(`Discarded invalid param(s) "${t13.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
          }
          a11 = i12.record.name, s3 = /* @__PURE__ */ i_(
            /* @__PURE__ */ i1(
              t12.params,
              // TODO: only keep optional params coming from a parent record
              /* @__PURE__ */ i12.keys.filter((e13) => !e13.optional).map((e13) => e13.name)
            ),
            // #1497 this ensures better active/exact matching
            e12.params && i1(e12.params, /* @__PURE__ */ i12.keys.map((e13) => e13.name))
          ), // throws if cannot be stringified
          l12 = /* @__PURE__ */ i12.stringify(s3);
        } else if ("path" in e12)
          (l12 = e12.path).startsWith("/") || ik(`The Matcher cannot resolve relative paths but received "${l12}". Unless you directly called \`matcher.resolve("${l12}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), (i12 = /* @__PURE__ */ r11.find((e13) => e13.re.test(l12))) && // we know the matcher works because we tested the regexp
          (s3 = /* @__PURE__ */ i12.parse(l12), a11 = i12.record.name);
        else {
          if (!// match by name or path of current route
          (i12 = t12.name ? o11.get(t12.name) : r11.find((e13) => e13.re.test(t12.path))))
            throw iH(1, { location: e12, currentLocation: t12 });
          a11 = i12.record.name, // since we are navigating to the same location, we don't need to pick the
          // params like when `name` is provided
          s3 = /* @__PURE__ */ i_({}, t12.params, e12.params), l12 = /* @__PURE__ */ i12.stringify(s3);
        }
        let u3 = [], c3 = i12;
        for (; c3; )
          u3.unshift(c3.record), c3 = c3.parent;
        return { name: a11, path: l12, params: s3, matched: u3, meta: u3.reduce((e13, t13) => i_(e13, t13.meta), {}) };
      }, removeRoute: l11, getRoutes: function() {
        return r11;
      }, getRecordMatcher: function(e12) {
        return o11.get(e12);
      } };
    }(e10.routes, e10)
  ), l10 = e10.parseQuery || ld, a10 = e10.stringifyQuery || lh, s2 = e10.history;
  if (!s2)
    throw Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  let u2 = /* @__PURE__ */ l_(), c2 = /* @__PURE__ */ l_(), f2 = /* @__PURE__ */ l_(), p2 = /* @__PURE__ */ tP(iB), d2 = iB;
  ib && e10.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  let h2 = /* @__PURE__ */ iw.bind(null, (e11) => "" + e11), m2 = /* @__PURE__ */ iw.bind(null, lf), g2 = /* @__PURE__ */ iw.bind(null, lp);
  function y2(e11, t11) {
    let r11;
    if (
      // const objectLocation = routerLocationAsObject(rawLocation)
      // we create a copy to modify it later
      t11 = /* @__PURE__ */ i_({}, t11 || p2.value), "string" == typeof e11
    ) {
      let r12 = /* @__PURE__ */ iC(l10, e11, t11.path), o12 = /* @__PURE__ */ i10.resolve({ path: r12.path }, t11), a11 = /* @__PURE__ */ s2.createHref(r12.fullPath);
      return a11.startsWith("//") ? ik(`Location "${e11}" resolved to "${a11}". A resolved location cannot start with multiple slashes.`) : o12.matched.length || ik(`No match found for location with path "${e11}"`), i_(r12, o12, { params: /* @__PURE__ */ g2(o12.params), hash: /* @__PURE__ */ lp(r12.hash), redirectedFrom: void 0, href: a11 });
    }
    if ("path" in e11)
      "params" in e11 && !("name" in e11) && // @ts-expect-error: the type is never
      Object.keys(e11.params).length && ik(`Path "${e11.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), r11 = /* @__PURE__ */ i_({}, e11, { path: iC(l10, e11.path, t11.path).path });
    else {
      let o12 = /* @__PURE__ */ i_({}, e11.params);
      for (let e12 in o12)
        null == o12[e12] && delete o12[e12];
      r11 = /* @__PURE__ */ i_({}, e11, { params: /* @__PURE__ */ m2(o12) }), // current location params are decoded, we need to encode them in case the
      // matcher merges the params
      t11.params = /* @__PURE__ */ m2(t11.params);
    }
    let o11 = /* @__PURE__ */ i10.resolve(r11, t11), u3 = e11.hash || "";
    u3 && !u3.startsWith("#") && ik(`A \`hash\` should always start with the character "#". Replace "${u3}" with "#${u3}".`), // the matcher might have merged current location params, so
    // we need to run the decoding again
    o11.params = /* @__PURE__ */ h2(/* @__PURE__ */ g2(o11.params));
    let c3 = (
      /**
      * Stringifies a URL object
      *
      * @param stringifyQuery
      * @param location
      */
      /* @__PURE__ */ function(e12, t12) {
        let r12 = t12.query ? e12(t12.query) : "";
        return t12.path + (r12 && "?") + r12 + (t12.hash || "");
      }(a10, /* @__PURE__ */ i_({}, e11, { hash: lu(u3).replace(li, "{").replace(la, "}").replace(lr, "^"), path: o11.path }))
    ), f3 = /* @__PURE__ */ s2.createHref(c3);
    return f3.startsWith("//") ? ik(`Location "${e11}" resolved to "${f3}". A resolved location cannot start with multiple slashes.`) : o11.matched.length || ik(`No match found for location with path "${"path" in e11 ? e11.path : e11}"`), i_({
      fullPath: c3,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: u3,
      query: (
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        a10 === lh ? (
          /**
          * Transforms a {@link LocationQueryRaw} into a {@link LocationQuery} by casting
          * numbers into strings, removing keys with an undefined value and replacing
          * undefined with null in arrays
          *
          * @param query - query object to normalize
          * @returns a normalized query object
          */
          function(e12) {
            let t12 = {};
            for (let r12 in e12) {
              let o12 = e12[r12];
              void 0 !== o12 && (t12[r12] = iS(o12) ? o12.map((e13) => null == e13 ? null : "" + e13) : null == o12 ? o12 : "" + o12);
            }
            return t12;
          }(e11.query)
        ) : e11.query || {}
      )
    }, o11, { redirectedFrom: void 0, href: f3 });
  }
  function b2(e11) {
    return "string" == typeof e11 ? iC(l10, e11, p2.value.path) : i_({}, e11);
  }
  function _2(e11, t11) {
    if (d2 !== e11)
      return iH(8, { from: t11, to: e11 });
  }
  function w2(e11) {
    let t11 = e11.matched[e11.matched.length - 1];
    if (t11 && t11.redirect) {
      let { redirect: r11 } = t11, o11 = "function" == typeof r11 ? r11(e11) : r11;
      if ("string" == typeof o11 && // @ts-expect-error: force empty params when a string is passed to let
      // the router parse them again
      ((o11 = o11.includes("?") || o11.includes("#") ? o11 = /* @__PURE__ */ b2(o11) : { path: o11 }).params = {}), !("path" in o11) && !("name" in o11))
        throw ik(`Invalid redirect found:
${JSON.stringify(o11, null, 2)}
 when navigating to "${e11.fullPath}". A redirect must contain a name or path. This will break in production.`), Error("Invalid redirect");
      return i_({
        query: e11.query,
        hash: e11.hash,
        // avoid transferring params if the redirect has a path
        params: "path" in o11 ? {} : e11.params
      }, o11);
    }
  }
  function x2(e11, t11) {
    let r11;
    let o11 = d2 = /* @__PURE__ */ y2(e11), i11 = p2.value, l11 = e11.state, s3 = e11.force, u3 = true === e11.replace, c3 = /* @__PURE__ */ w2(o11);
    return c3 ? x2(/* @__PURE__ */ i_(/* @__PURE__ */ b2(c3), { state: "object" == typeof c3 ? i_({}, l11, c3.state) : l11, force: s3, replace: u3 }), t11 || o11) : (o11.redirectedFrom = t11, !s3 && iP(a10, i11, o11) && (r11 = /* @__PURE__ */ iH(16, { to: o11, from: i11 }), // trigger scroll to allow scrolling to the same anchor
    T2(
      i11,
      i11,
      // history.listen is with a redirect, which makes it become a push
      true,
      // cannot be manually navigated to
      false
    )), (r11 ? Promise.resolve(r11) : $2(o11, i11)).catch((e12) => iG(e12) ? iG(
      e12,
      2
      /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
    ) ? e12 : A2(e12) : j2(e12, o11, i11)).then((e12) => {
      if (e12) {
        if (iG(
          e12,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return iP(a10, /* @__PURE__ */ y2(e12.to), o11) && // and we have done it a couple of times
          t11 && // @ts-expect-error: added only in dev
          (t11._count = t11._count ? t11._count + 1 : 1) > 30 ? (ik(`Detected a possibly infinite redirection in a navigation guard when going from "${i11.fullPath}" to "${o11.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(Error("Infinite redirect in navigation guard"))) : x2(/* @__PURE__ */ i_({
            // preserve an existing replacement but allow the redirect to override it
            replace: u3
          }, /* @__PURE__ */ b2(e12.to), { state: "object" == typeof e12.to ? i_({}, l11, e12.to.state) : l11, force: s3 }), t11 || o11);
      } else
        e12 = /* @__PURE__ */ C2(o11, i11, true, u3, l11);
      return O2(o11, i11, e12), e12;
    }));
  }
  function S2(e11, t11) {
    let r11 = /* @__PURE__ */ _2(e11, t11);
    return r11 ? Promise.reject(r11) : Promise.resolve();
  }
  function k2(e11) {
    let t11 = R2.values().next().value;
    return t11 && "function" == typeof t11.runWithContext ? t11.runWithContext(e11) : e11();
  }
  function $2(e11, t11) {
    let r11;
    let [o11, i11, l11] = function(e12, t12) {
      let r12 = [], o12 = [], i12 = [], l12 = /* @__PURE__ */ Math.max(t12.matched.length, e12.matched.length);
      for (let a12 = 0; a12 < l12; a12++) {
        let l13 = t12.matched[a12];
        l13 && (e12.matched.find((e13) => ij(e13, l13)) ? o12.push(l13) : r12.push(l13));
        let s3 = e12.matched[a12];
        s3 && !t12.matched.find((e13) => ij(e13, s3)) && i12.push(s3);
      }
      return [r12, o12, i12];
    }(e11, t11);
    for (
      let i12 of
      // all components here have been resolved once because we are leaving
      (r11 = /* @__PURE__ */ lx(/* @__PURE__ */ o11.reverse(), "beforeRouteLeave", e11, t11), o11)
    )
      i12.leaveGuards.forEach((o12) => {
        r11.push(/* @__PURE__ */ lw(o12, e11, t11));
      });
    let a11 = /* @__PURE__ */ S2.bind(null, e11, t11);
    return r11.push(a11), M2(r11).then(() => {
      for (
        let o12 of
        // check global guards beforeEach
        (r11 = [], u2.list())
      )
        r11.push(/* @__PURE__ */ lw(o12, e11, t11));
      return r11.push(a11), M2(r11);
    }).then(() => {
      for (
        let o12 of
        // check in components beforeRouteUpdate
        (r11 = /* @__PURE__ */ lx(i11, "beforeRouteUpdate", e11, t11), i11)
      )
        o12.updateGuards.forEach((o13) => {
          r11.push(/* @__PURE__ */ lw(o13, e11, t11));
        });
      return r11.push(a11), M2(r11);
    }).then(() => {
      for (
        let o12 of
        // check the route beforeEnter
        (r11 = [], l11)
      )
        if (o12.beforeEnter) {
          if (iS(o12.beforeEnter))
            for (let i12 of o12.beforeEnter)
              r11.push(/* @__PURE__ */ lw(i12, e11, t11));
          else
            r11.push(/* @__PURE__ */ lw(o12.beforeEnter, e11, t11));
        }
      return r11.push(a11), M2(r11);
    }).then(() => (
      // NOTE: at this point to.matched is normalized and does not contain any () => Promise<Component>
      // clear existing enterCallbacks, these are added by extractComponentsGuards
      (e11.matched.forEach((e12) => e12.enterCallbacks = {}), // check in-component beforeRouteEnter
      (r11 = /* @__PURE__ */ lx(l11, "beforeRouteEnter", e11, t11)).push(a11), M2(r11))
    )).then(() => {
      for (
        let o12 of
        // check global guards beforeResolve
        (r11 = [], c2.list())
      )
        r11.push(/* @__PURE__ */ lw(o12, e11, t11));
      return r11.push(a11), M2(r11);
    }).catch((e12) => iG(
      e12,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? e12 : Promise.reject(e12));
  }
  function O2(e11, t11, r11) {
    f2.list().forEach((o11) => k2(() => o11(e11, t11, r11)));
  }
  function C2(e11, t11, r11, o11, i11) {
    let l11 = /* @__PURE__ */ _2(e11, t11);
    if (l11)
      return l11;
    let a11 = t11 === iB, u3 = ib ? history.state : {};
    r11 && (o11 || a11 ? s2.replace(e11.fullPath, /* @__PURE__ */ i_({ scroll: a11 && u3 && u3.scroll }, i11)) : s2.push(e11.fullPath, i11)), // accept current navigation
    p2.value = e11, T2(e11, t11, r11, a11), A2();
  }
  let E2 = /* @__PURE__ */ l_(), P2 = /* @__PURE__ */ l_();
  function j2(e11, t11, r11) {
    A2(e11);
    let o11 = /* @__PURE__ */ P2.list();
    return o11.length ? o11.forEach((o12) => o12(e11, t11, r11)) : (ik("uncaught error during route navigation:"), console.error(e11)), Promise.reject(e11);
  }
  function A2(e11) {
    return r10 || // still not ready if an error happened
    (r10 = !e11, t10 || (t10 = /* @__PURE__ */ s2.listen((e12, t11, r11) => {
      if (!F2.listening)
        return;
      let o11 = /* @__PURE__ */ y2(e12), i11 = /* @__PURE__ */ w2(o11);
      if (i11) {
        x2(/* @__PURE__ */ i_(i11, { replace: true }), o11).catch(ix);
        return;
      }
      d2 = o11;
      let l11 = p2.value;
      if (ib) {
        var a11, u3;
        a11 = /* @__PURE__ */ iM(l11.fullPath, r11.delta), u3 = /* @__PURE__ */ iF(), iN.set(a11, u3);
      }
      $2(o11, l11).catch((e13) => iG(
        e13,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? e13 : iG(
        e13,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (
        // Here we could call if (info.delta) routerHistory.go(-info.delta,
        // false) but this is bug prone as we have no way to wait the
        // navigation to be finished before calling pushWithRedirect. Using
        // a setTimeout of 16ms seems to work but there is no guarantee for
        // it to work on every browser. So instead we do not restore the
        // history entry and trigger a new navigation as requested by the
        // navigation guard.
        // the error is already handled by router.push we just want to avoid
        // logging the error
        (x2(e13.to, o11).then((e14) => {
          iG(
            e14,
            20
            /* ErrorTypes.NAVIGATION_DUPLICATED */
          ) && !r11.delta && r11.type === lB.pop && s2.go(-1, false);
        }).catch(ix), Promise.reject())
      ) : (r11.delta && s2.go(-r11.delta, false), j2(e13, o11, l11))).then((e13) => {
        (e13 = e13 || C2(o11, l11, false)) && (r11.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !iG(
          e13,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s2.go(-r11.delta, false) : r11.type === lB.pop && iG(
          e13,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && // manual change in hash history #916
        // it's like a push but lacks the information of the direction
        s2.go(-1, false)), O2(o11, l11, e13);
      }).catch(ix);
    })), E2.list().forEach((t11) => {
      let [r11, o11] = t11;
      return e11 ? o11(e11) : r11();
    }), E2.reset()), e11;
  }
  function T2(t11, r11, o11, i11) {
    let { scrollBehavior: l11 } = e10;
    if (!ib || !l11)
      return Promise.resolve();
    let a11 = !o11 && function(e11) {
      let t12 = /* @__PURE__ */ iN.get(e11);
      return (
        // consume it so it's not used again
        iN.delete(e11), t12
      );
    }(/* @__PURE__ */ iM(t11.fullPath, 0)) || (i11 || !o11) && history.state && history.state.scroll || null;
    return t0().then(() => l11(t11, r11, a11)).then((e11) => e11 && function(e12) {
      let t12;
      if ("el" in e12) {
        let r12 = e12.el, o12 = "string" == typeof r12 && r12.startsWith("#");
        if ("string" == typeof e12.el && (!o12 || !document.getElementById(/* @__PURE__ */ e12.el.slice(1))))
          try {
            let t13 = /* @__PURE__ */ document.querySelector(e12.el);
            if (o12 && t13) {
              ik(`The selector "${e12.el}" should be passed as "el: document.querySelector('${e12.el}')" because it starts with "#".`);
              return;
            }
          } catch (t13) {
            ik(`The selector "${e12.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
            return;
          }
        let i12 = "string" == typeof r12 ? o12 ? document.getElementById(/* @__PURE__ */ r12.slice(1)) : document.querySelector(r12) : r12;
        if (!i12) {
          ik(`Couldn't find element using selector "${e12.el}" returned by scrollBehavior.`);
          return;
        }
        t12 = /* @__PURE__ */ function(e13, t13) {
          let r13 = /* @__PURE__ */ document.documentElement.getBoundingClientRect(), o13 = /* @__PURE__ */ e13.getBoundingClientRect();
          return { behavior: t13.behavior, left: o13.left - r13.left - (t13.left || 0), top: o13.top - r13.top - (t13.top || 0) };
        }(i12, e12);
      } else
        t12 = e12;
      "scrollBehavior" in document.documentElement.style ? window.scrollTo(t12) : window.scrollTo(null != t12.left ? t12.left : window.pageXOffset, null != t12.top ? t12.top : window.pageYOffset);
    }(e11)).catch((e11) => j2(e11, t11, r11));
  }
  let I2 = (e11) => s2.go(e11), R2 = /* @__PURE__ */ new Set(), F2 = { currentRoute: p2, listening: true, addRoute: function(e11, t11) {
    let r11, o11;
    return iz(e11) ? (r11 = /* @__PURE__ */ i10.getRecordMatcher(e11), o11 = t11) : o11 = e11, i10.addRoute(o11, r11);
  }, removeRoute: function(e11) {
    let t11 = /* @__PURE__ */ i10.getRecordMatcher(e11);
    t11 ? i10.removeRoute(t11) : ik(`Cannot remove non-existent route "${String(e11)}"`);
  }, hasRoute: function(e11) {
    return !!i10.getRecordMatcher(e11);
  }, getRoutes: function() {
    return i10.getRoutes().map((e11) => e11.record);
  }, resolve: y2, options: e10, push: function(e11) {
    return x2(e11);
  }, replace: function(e11) {
    return x2(/* @__PURE__ */ i_(/* @__PURE__ */ b2(e11), { replace: true }));
  }, go: I2, back: () => I2(-1), forward: () => I2(1), beforeEach: u2.add, beforeResolve: c2.add, afterEach: f2.add, onError: P2.add, isReady: function() {
    return r10 && p2.value !== iB ? Promise.resolve() : new Promise((e11, t11) => {
      E2.add([e11, t11]);
    });
  }, install(e11) {
    e11.component("RouterLink", lk), e11.component("RouterView", lC), e11.config.globalProperties.$router = this, Object.defineProperty(e11.config.globalProperties, "$route", { enumerable: true, get: () => tT(p2) }), ib && // used for the initial navigation client side to avoid pushing
    // multiple times when the router is used in multiple apps
    !o10 && p2.value === iB && // see above
    (o10 = true, x2(s2.location).catch((e12) => {
      ik("Unexpected error when starting the router:", e12);
    }));
    let l11 = {};
    for (let e12 in iB)
      Object.defineProperty(l11, e12, { get: () => p2.value[e12], enumerable: true });
    e11.provide(lg, this), e11.provide(ly, /* @__PURE__ */ td(l11)), e11.provide(lb, p2);
    let a11 = e11.unmount;
    R2.add(e11), e11.unmount = function() {
      R2.delete(e11), R2.size < 1 && // invalidate the current navigation
      (d2 = iB, t10 && t10(), t10 = null, p2.value = iB, o10 = false, r10 = false), a11();
    }, ib && function(e12, t11, r11) {
      if (t11.__hasDevtools)
        return;
      t11.__hasDevtools = true;
      let o11 = lA++;
      !function(e13, t12) {
        let r12 = /* @__PURE__ */ im(), o12 = im().__VUE_DEVTOOLS_GLOBAL_HOOK__, i11 = ig && e13.enableEarlyProxy;
        if (o12 && (r12.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !i11))
          o12.emit("devtools-plugin:setup", e13, t12);
        else {
          let l12 = i11 ? new iy(e13, o12) : null, a12 = r12.__VUE_DEVTOOLS_PLUGINS__ = r12.__VUE_DEVTOOLS_PLUGINS__ || [];
          a12.push({ pluginDescriptor: e13, setupFn: t12, proxy: l12 }), l12 && t12(l12.proxiedTarget);
        }
      }({ id: "org.vuejs.router" + (o11 ? "." + o11 : ""), label: "Vue Router", packageName: "vue-router", homepage: "https://router.vuejs.org", logo: "https://router.vuejs.org/logo.png", componentStateTypes: ["Routing"], app: e12 }, (i11) => {
        let l12;
        "function" != typeof i11.now && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), // display state added by the router
        i11.on.inspectComponent((e13, r12) => {
          e13.instanceData && e13.instanceData.state.push({ type: "Routing", key: "$route", editable: false, value: /* @__PURE__ */ lP(t11.currentRoute.value, "Current Route") });
        }), // mark router-link as active and display tags on router views
        i11.on.visitComponentTree((e13) => {
          let { treeNode: t12, componentInstance: r12 } = e13;
          if (r12.__vrv_devtools) {
            let e14 = r12.__vrv_devtools;
            t12.tags.push({ label: (e14.name ? `${e14.name.toString()}: ` : "") + e14.path, textColor: 0, tooltip: "This component is rendered by &lt;router-view&gt;", backgroundColor: 15485081 });
          }
          iS(r12.__vrl_devtools) && (r12.__devtoolsApi = i11, r12.__vrl_devtools.forEach((e14) => {
            let r13 = 16486972, o12 = "";
            e14.isExactActive ? (r13 = 8702998, o12 = "This is exactly active") : e14.isActive && (r13 = 2450411, o12 = "This link is active"), t12.tags.push({ label: e14.route.path, textColor: 0, tooltip: o12, backgroundColor: r13 });
          }));
        }), nI(t11.currentRoute, () => {
          c3(), i11.notifyComponentUpdate(), i11.sendInspectorTree(u3), i11.sendInspectorState(u3);
        });
        let a12 = "router:navigations:" + o11;
        i11.addTimelineLayer({ id: a12, label: `Router${o11 ? " " + o11 : ""} Navigations`, color: 4237508 }), // const errorsLayerId = 'router:errors'
        // api.addTimelineLayer({
        //   id: errorsLayerId,
        //   label: 'Router Errors',
        //   color: 0xea5455,
        // })
        t11.onError((e13, t12) => {
          i11.addTimelineEvent({ layerId: a12, event: { title: "Error during Navigation", subtitle: t12.fullPath, logType: "error", time: /* @__PURE__ */ i11.now(), data: { error: e13 }, groupId: t12.meta.__navigationId } });
        });
        let s3 = 0;
        t11.beforeEach((e13, t12) => {
          let r12 = { guard: /* @__PURE__ */ lj("beforeEach"), from: /* @__PURE__ */ lP(t12, "Current Location during this navigation"), to: /* @__PURE__ */ lP(e13, "Target location") };
          Object.defineProperty(e13.meta, "__navigationId", { value: s3++ }), i11.addTimelineEvent({ layerId: a12, event: { time: /* @__PURE__ */ i11.now(), title: "Start of navigation", subtitle: e13.fullPath, data: r12, groupId: e13.meta.__navigationId } });
        }), t11.afterEach((e13, t12, r12) => {
          let o12 = { guard: /* @__PURE__ */ lj("afterEach") };
          r12 ? (o12.failure = { _custom: { type: Error, readOnly: true, display: r12 ? r12.message : "", tooltip: "Navigation Failure", value: r12 } }, o12.status = /* @__PURE__ */ lj("❌")) : o12.status = /* @__PURE__ */ lj("✅"), // we set here to have the right order
          o12.from = /* @__PURE__ */ lP(t12, "Current Location during this navigation"), o12.to = /* @__PURE__ */ lP(e13, "Target location"), i11.addTimelineEvent({ layerId: a12, event: { title: "End of navigation", subtitle: e13.fullPath, time: /* @__PURE__ */ i11.now(), data: o12, logType: r12 ? "warning" : "default", groupId: e13.meta.__navigationId } });
        });
        let u3 = "router-inspector:" + o11;
        function c3() {
          if (!l12)
            return;
          let e13 = l12, o12 = /* @__PURE__ */ r11.getRoutes().filter((e14) => !e14.parent || // these routes have a parent with no component which will not appear in the view
          // therefore we still need to include them
          !e14.parent.record.components);
          o12.forEach(lF), e13.filter && (o12 = /* @__PURE__ */ o12.filter((t12) => function e14(t13, r12) {
            let o13 = /* @__PURE__ */ String(t13.re).match(lR);
            if (t13.__vd_match = false, !o13 || o13.length < 3)
              return false;
            let i12 = new RegExp(o13[1].replace(/\$$/, ""), o13[2]);
            if (i12.test(r12))
              return (
                // exception case: `/`
                // mark children as matches
                t13.children.forEach((t14) => e14(t14, r12)), ("/" !== t13.record.path || "/" === r12) && (t13.__vd_match = /* @__PURE__ */ t13.re.test(r12), true)
              );
            let l13 = /* @__PURE__ */ t13.record.path.toLowerCase(), a13 = /* @__PURE__ */ lp(l13);
            return (
              // also allow partial matching on the path
              !!(!r12.startsWith("/") && (a13.includes(r12) || l13.includes(r12)) || a13.startsWith(r12) || l13.startsWith(r12) || t13.record.name && String(t13.record.name).includes(r12)) || t13.children.some((t14) => e14(t14, r12))
            );
          }(t12, /* @__PURE__ */ e13.filter.toLowerCase()))), // mark active routes
          o12.forEach((e14) => function e15(t12, r12) {
            let o13 = r12.matched.length && ij(r12.matched[r12.matched.length - 1], t12.record);
            t12.__vd_exactActive = t12.__vd_active = o13, o13 || (t12.__vd_active = /* @__PURE__ */ r12.matched.some((e16) => ij(e16, t12.record))), t12.children.forEach((t13) => e15(t13, r12));
          }(e14, t11.currentRoute.value)), e13.rootNodes = /* @__PURE__ */ o12.map(lT);
        }
        i11.addInspector({ id: u3, label: "Routes" + (o11 ? " " + o11 : ""), icon: "book", treeFilterPlaceholder: "Search routes" }), i11.on.getInspectorTree((t12) => {
          l12 = t12, t12.app === e12 && t12.inspectorId === u3 && c3();
        }), /**
        * Display information about the currently selected route record
        */
        i11.on.getInspectorState((t12) => {
          if (t12.app === e12 && t12.inspectorId === u3) {
            let e13 = /* @__PURE__ */ r11.getRoutes(), o12 = /* @__PURE__ */ e13.find((e14) => e14.record.__vd_id === t12.nodeId);
            o12 && (t12.state = { options: /* @__PURE__ */ function(e14) {
              let { record: t13 } = e14, r12 = [{ editable: false, key: "path", value: t13.path }];
              return null != t13.name && r12.push({ editable: false, key: "name", value: t13.name }), r12.push({ editable: false, key: "regexp", value: e14.re }), e14.keys.length && r12.push({ editable: false, key: "keys", value: { _custom: { type: null, readOnly: true, display: /* @__PURE__ */ e14.keys.map((e15) => `${e15.name}${e15.optional ? e15.repeatable ? "*" : "?" : e15.repeatable ? "+" : ""}`).join(" "), tooltip: "Param keys", value: e14.keys } } }), null != t13.redirect && r12.push({ editable: false, key: "redirect", value: t13.redirect }), e14.alias.length && r12.push({ editable: false, key: "aliases", value: /* @__PURE__ */ e14.alias.map((e15) => e15.record.path) }), Object.keys(e14.record.meta).length && r12.push({ editable: false, key: "meta", value: e14.record.meta }), r12.push({ key: "score", editable: false, value: { _custom: { type: null, readOnly: true, display: /* @__PURE__ */ e14.score.map((e15) => e15.join(", ")).join(" | "), tooltip: "Score used to sort routes", value: e14.score } } }), r12;
            }(o12) });
          }
        }), i11.sendInspectorTree(u3), i11.sendInspectorState(u3);
      });
    }(e11, this, i10);
  } };
  function M2(e11) {
    return e11.reduce((e12, t11) => e12.then(() => k2(t11)), /* @__PURE__ */ Promise.resolve());
  }
  return F2;
}
function lN() {
  return rk(lg);
}
let lL = lk, lV = lC;
var lD, lU, lz, lB, lW, lq, lH, lG = function(e10, t10) {
  return (lG = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e11, t11) {
    e11.__proto__ = t11;
  } || function(e11, t11) {
    for (var r10 in t11)
      Object.prototype.hasOwnProperty.call(t11, r10) && (e11[r10] = t11[r10]);
  })(e10, t10);
};
function lK(e10, t10) {
  if ("function" != typeof t10 && null !== t10)
    throw TypeError("Class extends value " + String(t10) + " is not a constructor or null");
  function r10() {
    this.constructor = e10;
  }
  lG(e10, t10), e10.prototype = null === t10 ? Object.create(t10) : (r10.prototype = t10.prototype, new r10());
}
function lY(e10, t10) {
  var r10, o10, i10, l10, a10 = { label: 0, sent: function() {
    if (1 & i10[0])
      throw i10[1];
    return i10[1];
  }, trys: [], ops: [] };
  return l10 = { next: /* @__PURE__ */ s2(0), throw: /* @__PURE__ */ s2(1), return: /* @__PURE__ */ s2(2) }, "function" == typeof Symbol && (l10[Symbol.iterator] = function() {
    return this;
  }), l10;
  function s2(s3) {
    return function(u2) {
      return function(s4) {
        if (r10)
          throw TypeError("Generator is already executing.");
        for (; l10 && (l10 = 0, s4[0] && (a10 = 0)), a10; )
          try {
            if (r10 = 1, o10 && (i10 = 2 & s4[0] ? o10.return : s4[0] ? o10.throw || ((i10 = o10.return) && i10.call(o10), 0) : o10.next) && !(i10 = /* @__PURE__ */ i10.call(o10, s4[1])).done)
              return i10;
            switch (o10 = 0, i10 && (s4 = [2 & s4[0], i10.value]), s4[0]) {
              case 0:
              case 1:
                i10 = s4;
                break;
              case 4:
                return a10.label++, { value: s4[1], done: false };
              case 5:
                a10.label++, o10 = s4[1], s4 = [0];
                continue;
              case 7:
                s4 = /* @__PURE__ */ a10.ops.pop(), a10.trys.pop();
                continue;
              default:
                if (!(i10 = (i10 = a10.trys).length > 0 && i10[i10.length - 1]) && (6 === s4[0] || 2 === s4[0])) {
                  a10 = 0;
                  continue;
                }
                if (3 === s4[0] && (!i10 || s4[1] > i10[0] && s4[1] < i10[3])) {
                  a10.label = s4[1];
                  break;
                }
                if (6 === s4[0] && a10.label < i10[1]) {
                  a10.label = i10[1], i10 = s4;
                  break;
                }
                if (i10 && a10.label < i10[2]) {
                  a10.label = i10[2], a10.ops.push(s4);
                  break;
                }
                i10[2] && a10.ops.pop(), a10.trys.pop();
                continue;
            }
            s4 = /* @__PURE__ */ t10.call(e10, a10);
          } catch (e11) {
            s4 = [6, e11], o10 = 0;
          } finally {
            r10 = i10 = 0;
          }
        if (5 & s4[0])
          throw s4[1];
        return { value: s4[0] ? s4[1] : void 0, done: true };
      }([s3, u2]);
    };
  }
}
function lJ(e10) {
  var t10 = "function" == typeof Symbol && Symbol.iterator, r10 = t10 && e10[t10], o10 = 0;
  if (r10)
    return r10.call(e10);
  if (e10 && "number" == typeof e10.length)
    return { next: function() {
      return e10 && o10 >= e10.length && (e10 = void 0), { value: e10 && e10[o10++], done: !e10 };
    } };
  throw TypeError(t10 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function lQ(e10, t10) {
  var r10 = "function" == typeof Symbol && e10[Symbol.iterator];
  if (!r10)
    return e10;
  var o10, i10, l10 = /* @__PURE__ */ r10.call(e10), a10 = [];
  try {
    for (; (void 0 === t10 || t10-- > 0) && !(o10 = /* @__PURE__ */ l10.next()).done; )
      a10.push(o10.value);
  } catch (e11) {
    i10 = { error: e11 };
  } finally {
    try {
      o10 && !o10.done && (r10 = l10.return) && r10.call(l10);
    } finally {
      if (i10)
        throw i10.error;
    }
  }
  return a10;
}
function lX(e10, t10, r10) {
  if (r10 || 2 == arguments.length)
    for (var o10, i10 = 0, l10 = t10.length; i10 < l10; i10++)
      !o10 && i10 in t10 || (o10 || (o10 = /* @__PURE__ */ Array.prototype.slice.call(t10, 0, i10)), o10[i10] = t10[i10]);
  return e10.concat(o10 || Array.prototype.slice.call(t10));
}
function lZ(e10) {
  return this instanceof lZ ? (this.v = e10, this) : new lZ(e10);
}
function l0(e10) {
  return "function" == typeof e10;
}
function l1(e10) {
  var t10 = /* @__PURE__ */ e10(function(e11) {
    Error.call(e11), e11.stack = Error().stack;
  });
  return t10.prototype = /* @__PURE__ */ Object.create(Error.prototype), t10.prototype.constructor = t10, t10;
}
"function" == typeof SuppressedError && SuppressedError;
var l2 = /* @__PURE__ */ l1(function(e10) {
  return function(t10) {
    e10(this), this.message = t10 ? t10.length + " errors occurred during unsubscription:\n" + t10.map(function(e11, t11) {
      return t11 + 1 + ") " + e11.toString();
    }).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t10;
  };
});
function l3(e10, t10) {
  if (e10) {
    var r10 = /* @__PURE__ */ e10.indexOf(t10);
    0 <= r10 && e10.splice(r10, 1);
  }
}
var l4 = /* @__PURE__ */ function() {
  var e10;
  function t10(e11) {
    this.initialTeardown = e11, this.closed = false, this._parentage = null, this._finalizers = null;
  }
  return t10.prototype.unsubscribe = function() {
    if (!this.closed) {
      this.closed = true;
      var e11, t11, r10, o10, i10, l10 = this._parentage;
      if (l10) {
        if (this._parentage = null, Array.isArray(l10))
          try {
            for (var a10 = /* @__PURE__ */ lJ(l10), s2 = /* @__PURE__ */ a10.next(); !s2.done; s2 = /* @__PURE__ */ a10.next())
              s2.value.remove(this);
          } catch (t12) {
            e11 = { error: t12 };
          } finally {
            try {
              s2 && !s2.done && (t11 = a10.return) && t11.call(a10);
            } finally {
              if (e11)
                throw e11.error;
            }
          }
        else
          l10.remove(this);
      }
      var u2 = this.initialTeardown;
      if (l0(u2))
        try {
          u2();
        } catch (e12) {
          i10 = e12 instanceof l2 ? e12.errors : [e12];
        }
      var c2 = this._finalizers;
      if (c2) {
        this._finalizers = null;
        try {
          for (var f2 = /* @__PURE__ */ lJ(c2), p2 = /* @__PURE__ */ f2.next(); !p2.done; p2 = /* @__PURE__ */ f2.next()) {
            var d2 = p2.value;
            try {
              l5(d2);
            } catch (e12) {
              i10 = null != i10 ? i10 : [], e12 instanceof l2 ? i10 = /* @__PURE__ */ lX(/* @__PURE__ */ lX([], /* @__PURE__ */ lQ(i10)), /* @__PURE__ */ lQ(e12.errors)) : i10.push(e12);
            }
          }
        } catch (e12) {
          r10 = { error: e12 };
        } finally {
          try {
            p2 && !p2.done && (o10 = f2.return) && o10.call(f2);
          } finally {
            if (r10)
              throw r10.error;
          }
        }
      }
      if (i10)
        throw new l2(i10);
    }
  }, t10.prototype.add = function(e11) {
    var r10;
    if (e11 && e11 !== this) {
      if (this.closed)
        l5(e11);
      else {
        if (e11 instanceof t10) {
          if (e11.closed || e11._hasParent(this))
            return;
          e11._addParent(this);
        }
        (this._finalizers = null !== (r10 = this._finalizers) && void 0 !== r10 ? r10 : []).push(e11);
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
    t11 === e11 ? this._parentage = null : Array.isArray(t11) && l3(t11, e11);
  }, t10.prototype.remove = function(e11) {
    var r10 = this._finalizers;
    r10 && l3(r10, e11), e11 instanceof t10 && e11._removeParent(this);
  }, t10.EMPTY = ((e10 = new t10()).closed = true, e10), t10;
}(), l6 = l4.EMPTY;
function l8(e10) {
  return e10 instanceof l4 || e10 && "closed" in e10 && l0(e10.remove) && l0(e10.add) && l0(e10.unsubscribe);
}
function l5(e10) {
  l0(e10) ? e10() : e10.unsubscribe();
}
var l7 = { Promise: void 0, useDeprecatedNextContext: false }, l9 = { setTimeout: function(e10, t10) {
  for (var r10 = [], o10 = 2; o10 < arguments.length; o10++)
    r10[o10 - 2] = arguments[o10];
  var i10 = l9.delegate;
  return (null == i10 ? void 0 : i10.setTimeout) ? i10.setTimeout.apply(i10, /* @__PURE__ */ lX([e10, t10], /* @__PURE__ */ lQ(r10))) : setTimeout.apply(void 0, /* @__PURE__ */ lX([e10, t10], /* @__PURE__ */ lQ(r10)));
}, clearTimeout: function(e10) {
  var t10 = l9.delegate;
  return ((null == t10 ? void 0 : t10.clearTimeout) || clearTimeout)(e10);
}, delegate: void 0 };
function ae(e10) {
  l9.setTimeout(function() {
    throw e10;
  });
}
function at() {
}
var an = /* @__PURE__ */ function(e10) {
  function t10(t11) {
    var r10 = e10.call(this) || this;
    return r10.isStopped = false, t11 ? (r10.destination = t11, l8(t11) && t11.add(r10)) : r10.destination = aa, r10;
  }
  return lK(t10, e10), t10.create = function(e11, t11, r10) {
    return new al(e11, t11, r10);
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
}(l4), ar = Function.prototype.bind;
function ao(e10, t10) {
  return ar.call(e10, t10);
}
var ai = /* @__PURE__ */ function() {
  function e10(e11) {
    this.partialObserver = e11;
  }
  return e10.prototype.next = function(e11) {
    var t10 = this.partialObserver;
    if (t10.next)
      try {
        t10.next(e11);
      } catch (e12) {
        ae(e12);
      }
  }, e10.prototype.error = function(e11) {
    var t10 = this.partialObserver;
    if (t10.error)
      try {
        t10.error(e11);
      } catch (e12) {
        ae(e12);
      }
    else
      ae(e11);
  }, e10.prototype.complete = function() {
    var e11 = this.partialObserver;
    if (e11.complete)
      try {
        e11.complete();
      } catch (e12) {
        ae(e12);
      }
  }, e10;
}(), al = /* @__PURE__ */ function(e10) {
  function t10(t11, r10, o10) {
    var i10, l10, a10 = e10.call(this) || this;
    return l0(t11) || !t11 ? i10 = { next: null != t11 ? t11 : void 0, error: null != r10 ? r10 : void 0, complete: null != o10 ? o10 : void 0 } : a10 && l7.useDeprecatedNextContext ? ((l10 = /* @__PURE__ */ Object.create(t11)).unsubscribe = function() {
      return a10.unsubscribe();
    }, i10 = { next: t11.next && ao(t11.next, l10), error: t11.error && ao(t11.error, l10), complete: t11.complete && ao(t11.complete, l10) }) : i10 = t11, a10.destination = new ai(i10), a10;
  }
  return lK(t10, e10), t10;
}(an), aa = { closed: true, next: at, error: function(e10) {
  throw e10;
}, complete: at }, as = "function" == typeof Symbol && Symbol.observable || "@@observable";
function au(e10) {
  return e10;
}
function ac() {
  for (var e10 = [], t10 = 0; t10 < arguments.length; t10++)
    e10[t10] = arguments[t10];
  return af(e10);
}
function af(e10) {
  return 0 === e10.length ? au : 1 === e10.length ? e10[0] : function(t10) {
    return e10.reduce(function(e11, t11) {
      return t11(e11);
    }, t10);
  };
}
var ap = /* @__PURE__ */ function() {
  function e10(e11) {
    e11 && (this._subscribe = e11);
  }
  return e10.prototype.lift = function(t10) {
    var r10 = new e10();
    return r10.source = this, r10.operator = t10, r10;
  }, e10.prototype.subscribe = function(e11, t10, r10) {
    var o10, i10, l10, a10 = (o10 = e11) && o10 instanceof an || o10 && l0(o10.next) && l0(o10.error) && l0(o10.complete) && l8(o10) ? e11 : new al(e11, t10, r10);
    return i10 = this.operator, l10 = this.source, a10.add(i10 ? i10.call(a10, l10) : l10 ? this._subscribe(a10) : this._trySubscribe(a10)), a10;
  }, e10.prototype._trySubscribe = function(e11) {
    try {
      return this._subscribe(e11);
    } catch (t10) {
      e11.error(t10);
    }
  }, e10.prototype.forEach = function(e11, t10) {
    var r10 = this;
    return new (t10 = /* @__PURE__ */ ad(t10))(function(t11, o10) {
      var i10 = new al({ next: function(t12) {
        try {
          e11(t12);
        } catch (e12) {
          o10(e12), i10.unsubscribe();
        }
      }, error: o10, complete: t11 });
      r10.subscribe(i10);
    });
  }, e10.prototype._subscribe = function(e11) {
    var t10;
    return null === (t10 = this.source) || void 0 === t10 ? void 0 : t10.subscribe(e11);
  }, e10.prototype[as] = function() {
    return this;
  }, e10.prototype.pipe = function() {
    for (var e11 = [], t10 = 0; t10 < arguments.length; t10++)
      e11[t10] = arguments[t10];
    return af(e11)(this);
  }, e10.prototype.toPromise = function(e11) {
    var t10 = this;
    return new (e11 = /* @__PURE__ */ ad(e11))(function(e12, r10) {
      var o10;
      t10.subscribe(function(e13) {
        return o10 = e13;
      }, function(e13) {
        return r10(e13);
      }, function() {
        return e12(o10);
      });
    });
  }, e10.create = function(t10) {
    return new e10(t10);
  }, e10;
}();
function ad(e10) {
  var t10;
  return null !== (t10 = null != e10 ? e10 : l7.Promise) && void 0 !== t10 ? t10 : Promise;
}
function ah(e10) {
  return function(t10) {
    if (l0(null == t10 ? void 0 : t10.lift))
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
function av(e10, t10, r10, o10, i10) {
  return new am(e10, t10, r10, o10, i10);
}
var am = /* @__PURE__ */ function(e10) {
  function t10(t11, r10, o10, i10, l10, a10) {
    var s2 = e10.call(this, t11) || this;
    return s2.onFinalize = l10, s2.shouldUnsubscribe = a10, s2._next = r10 ? function(e11) {
      try {
        r10(e11);
      } catch (e12) {
        t11.error(e12);
      }
    } : e10.prototype._next, s2._error = i10 ? function(e11) {
      try {
        i10(e11);
      } catch (e12) {
        t11.error(e12);
      } finally {
        this.unsubscribe();
      }
    } : e10.prototype._error, s2._complete = o10 ? function() {
      try {
        o10();
      } catch (e11) {
        t11.error(e11);
      } finally {
        this.unsubscribe();
      }
    } : e10.prototype._complete, s2;
  }
  return lK(t10, e10), t10.prototype.unsubscribe = function() {
    var t11;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var r10 = this.closed;
      e10.prototype.unsubscribe.call(this), r10 || null === (t11 = this.onFinalize) || void 0 === t11 || t11.call(this);
    }
  }, t10;
}(an), ag = /* @__PURE__ */ l1(function(e10) {
  return function() {
    e10(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), ay = /* @__PURE__ */ function(e10) {
  function t10() {
    var t11 = e10.call(this) || this;
    return t11.closed = false, t11.currentObservers = null, t11.observers = [], t11.isStopped = false, t11.hasError = false, t11.thrownError = null, t11;
  }
  return lK(t10, e10), t10.prototype.lift = function(e11) {
    var t11 = new ab(this, this);
    return t11.operator = e11, t11;
  }, t10.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new ag();
  }, t10.prototype.next = function(e11) {
    var t11 = this;
    (function() {
      var r10, o10;
      if (t11._throwIfClosed(), !t11.isStopped) {
        t11.currentObservers || (t11.currentObservers = /* @__PURE__ */ Array.from(t11.observers));
        try {
          for (var i10 = /* @__PURE__ */ lJ(t11.currentObservers), l10 = /* @__PURE__ */ i10.next(); !l10.done; l10 = /* @__PURE__ */ i10.next())
            l10.value.next(e11);
        } catch (e12) {
          r10 = { error: e12 };
        } finally {
          try {
            l10 && !l10.done && (o10 = i10.return) && o10.call(i10);
          } finally {
            if (r10)
              throw r10.error;
          }
        }
      }
    })();
  }, t10.prototype.error = function(e11) {
    var t11 = this;
    (function() {
      if (t11._throwIfClosed(), !t11.isStopped) {
        t11.hasError = t11.isStopped = true, t11.thrownError = e11;
        for (var r10 = t11.observers; r10.length; )
          r10.shift().error(e11);
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
    var t11 = this, r10 = this.hasError, o10 = this.isStopped, i10 = this.observers;
    return r10 || o10 ? l6 : (this.currentObservers = null, i10.push(e11), new l4(function() {
      t11.currentObservers = null, l3(i10, e11);
    }));
  }, t10.prototype._checkFinalizedStatuses = function(e11) {
    var t11 = this.hasError, r10 = this.thrownError, o10 = this.isStopped;
    t11 ? e11.error(r10) : o10 && e11.complete();
  }, t10.prototype.asObservable = function() {
    var e11 = new ap();
    return e11.source = this, e11;
  }, t10.create = function(e11, t11) {
    return new ab(e11, t11);
  }, t10;
}(ap), ab = /* @__PURE__ */ function(e10) {
  function t10(t11, r10) {
    var o10 = e10.call(this) || this;
    return o10.destination = t11, o10.source = r10, o10;
  }
  return lK(t10, e10), t10.prototype.next = function(e11) {
    var t11, r10;
    null === (r10 = null === (t11 = this.destination) || void 0 === t11 ? void 0 : t11.next) || void 0 === r10 || r10.call(t11, e11);
  }, t10.prototype.error = function(e11) {
    var t11, r10;
    null === (r10 = null === (t11 = this.destination) || void 0 === t11 ? void 0 : t11.error) || void 0 === r10 || r10.call(t11, e11);
  }, t10.prototype.complete = function() {
    var e11, t11;
    null === (t11 = null === (e11 = this.destination) || void 0 === e11 ? void 0 : e11.complete) || void 0 === t11 || t11.call(e11);
  }, t10.prototype._subscribe = function(e11) {
    var t11, r10;
    return null !== (r10 = null === (t11 = this.source) || void 0 === t11 ? void 0 : t11.subscribe(e11)) && void 0 !== r10 ? r10 : l6;
  }, t10;
}(ay), a_ = /* @__PURE__ */ function(e10) {
  function t10(t11) {
    var r10 = e10.call(this) || this;
    return r10._value = t11, r10;
  }
  return lK(t10, e10), Object.defineProperty(t10.prototype, "value", { get: function() {
    return this.getValue();
  }, enumerable: false, configurable: true }), t10.prototype._subscribe = function(t11) {
    var r10 = /* @__PURE__ */ e10.prototype._subscribe.call(this, t11);
    return r10.closed || t11.next(this._value), r10;
  }, t10.prototype.getValue = function() {
    var e11 = this.hasError, t11 = this.thrownError, r10 = this._value;
    if (e11)
      throw t11;
    return this._throwIfClosed(), r10;
  }, t10.prototype.next = function(t11) {
    e10.prototype.next.call(this, this._value = t11);
  }, t10;
}(ay), aw = { now: function() {
  return (aw.delegate || Date).now();
}, delegate: void 0 }, ax = /* @__PURE__ */ function(e10) {
  function t10(t11, r10) {
    return e10.call(this) || this;
  }
  return lK(t10, e10), t10.prototype.schedule = function(e11, t11) {
    return this;
  }, t10;
}(l4), aS = { setInterval: function(e10, t10) {
  for (var r10 = [], o10 = 2; o10 < arguments.length; o10++)
    r10[o10 - 2] = arguments[o10];
  var i10 = aS.delegate;
  return (null == i10 ? void 0 : i10.setInterval) ? i10.setInterval.apply(i10, /* @__PURE__ */ lX([e10, t10], /* @__PURE__ */ lQ(r10))) : setInterval.apply(void 0, /* @__PURE__ */ lX([e10, t10], /* @__PURE__ */ lQ(r10)));
}, clearInterval: function(e10) {
  var t10 = aS.delegate;
  return ((null == t10 ? void 0 : t10.clearInterval) || clearInterval)(e10);
}, delegate: void 0 }, ak = /* @__PURE__ */ function(e10) {
  function t10(t11, r10) {
    var o10 = e10.call(this, t11, r10) || this;
    return o10.scheduler = t11, o10.work = r10, o10.pending = false, o10;
  }
  return lK(t10, e10), t10.prototype.schedule = function(e11, t11) {
    if (void 0 === t11 && (t11 = 0), this.closed)
      return this;
    this.state = e11;
    var r10, o10 = this.id, i10 = this.scheduler;
    return null != o10 && (this.id = /* @__PURE__ */ this.recycleAsyncId(i10, o10, t11)), this.pending = true, this.delay = t11, this.id = null !== (r10 = this.id) && void 0 !== r10 ? r10 : this.requestAsyncId(i10, this.id, t11), this;
  }, t10.prototype.requestAsyncId = function(e11, t11, r10) {
    return void 0 === r10 && (r10 = 0), aS.setInterval(/* @__PURE__ */ e11.flush.bind(e11, this), r10);
  }, t10.prototype.recycleAsyncId = function(e11, t11, r10) {
    if (void 0 === r10 && (r10 = 0), null != r10 && this.delay === r10 && false === this.pending)
      return t11;
    null != t11 && aS.clearInterval(t11);
  }, t10.prototype.execute = function(e11, t11) {
    if (this.closed)
      return Error("executing a cancelled action");
    this.pending = false;
    var r10 = /* @__PURE__ */ this._execute(e11, t11);
    if (r10)
      return r10;
    false === this.pending && null != this.id && (this.id = /* @__PURE__ */ this.recycleAsyncId(this.scheduler, this.id, null));
  }, t10.prototype._execute = function(e11, t11) {
    var r10, o10 = false;
    try {
      this.work(e11);
    } catch (e12) {
      o10 = true, r10 = e12 || Error("Scheduled action threw falsy error");
    }
    if (o10)
      return this.unsubscribe(), r10;
  }, t10.prototype.unsubscribe = function() {
    if (!this.closed) {
      var t11 = this.id, r10 = this.scheduler, o10 = r10.actions;
      this.work = this.state = this.scheduler = null, this.pending = false, l3(o10, this), null != t11 && (this.id = /* @__PURE__ */ this.recycleAsyncId(r10, t11, null)), this.delay = null, e10.prototype.unsubscribe.call(this);
    }
  }, t10;
}(ax), a$ = /* @__PURE__ */ function() {
  function e10(t10, r10) {
    void 0 === r10 && (r10 = e10.now), this.schedulerActionCtor = t10, this.now = r10;
  }
  return e10.prototype.schedule = function(e11, t10, r10) {
    return void 0 === t10 && (t10 = 0), new this.schedulerActionCtor(this, e11).schedule(r10, t10);
  }, e10.now = aw.now, e10;
}(), aO = new (function(e10) {
  function t10(t11, r10) {
    void 0 === r10 && (r10 = a$.now);
    var o10 = e10.call(this, t11, r10) || this;
    return o10.actions = [], o10._active = false, o10;
  }
  return lK(t10, e10), t10.prototype.flush = function(e11) {
    var t11, r10 = this.actions;
    if (this._active) {
      r10.push(e11);
      return;
    }
    this._active = true;
    do
      if (t11 = /* @__PURE__ */ e11.execute(e11.state, e11.delay))
        break;
    while (e11 = /* @__PURE__ */ r10.shift());
    if (this._active = false, t11) {
      for (; e11 = /* @__PURE__ */ r10.shift(); )
        e11.unsubscribe();
      throw t11;
    }
  }, t10;
}(a$))(ak), aC = function(e10) {
  return e10 && "number" == typeof e10.length && "function" != typeof e10;
};
function aE(e10) {
  return l0(null == e10 ? void 0 : e10.then);
}
function aP(e10) {
  return Symbol.asyncIterator && l0(null == e10 ? void 0 : e10[Symbol.asyncIterator]);
}
function aj(e10) {
  return TypeError("You provided " + (null !== e10 && "object" == typeof e10 ? "an invalid object" : "'" + e10 + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
var aA = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
function aT(e10) {
  return l0(null == e10 ? void 0 : e10[aA]);
}
function aI(e10) {
  return function(e11, t10, r10) {
    if (!Symbol.asyncIterator)
      throw TypeError("Symbol.asyncIterator is not defined.");
    var o10, i10 = /* @__PURE__ */ r10.apply(e11, t10 || []), l10 = [];
    return o10 = {}, a10("next"), a10("throw"), a10("return"), o10[Symbol.asyncIterator] = function() {
      return this;
    }, o10;
    function a10(e12) {
      i10[e12] && (o10[e12] = function(t11) {
        return new Promise(function(r11, o11) {
          l10.push([e12, t11, r11, o11]) > 1 || s2(e12, t11);
        });
      });
    }
    function s2(e12, t11) {
      try {
        var r11;
        (r11 = /* @__PURE__ */ i10[e12](t11)).value instanceof lZ ? Promise.resolve(r11.value.v).then(u2, c2) : f2(l10[0][2], r11);
      } catch (e13) {
        f2(l10[0][3], e13);
      }
    }
    function u2(e12) {
      s2("next", e12);
    }
    function c2(e12) {
      s2("throw", e12);
    }
    function f2(e12, t11) {
      e12(t11), l10.shift(), l10.length && s2(l10[0][0], l10[0][1]);
    }
  }(this, arguments, function() {
    var t10, r10, o10;
    return lY(this, function(i10) {
      switch (i10.label) {
        case 0:
          t10 = /* @__PURE__ */ e10.getReader(), i10.label = 1;
        case 1:
          i10.trys.push([1, , 9, 10]), i10.label = 2;
        case 2:
          return [4, /* @__PURE__ */ lZ(/* @__PURE__ */ t10.read())];
        case 3:
          if (o10 = (r10 = /* @__PURE__ */ i10.sent()).value, !r10.done)
            return [3, 5];
          return [4, /* @__PURE__ */ lZ(void 0)];
        case 4:
          return [2, /* @__PURE__ */ i10.sent()];
        case 5:
          return [4, /* @__PURE__ */ lZ(o10)];
        case 6:
          return [4, /* @__PURE__ */ i10.sent()];
        case 7:
          return i10.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return t10.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function aR(e10) {
  return l0(null == e10 ? void 0 : e10.getReader);
}
function aF(e10) {
  if (e10 instanceof ap)
    return e10;
  if (null != e10) {
    if (l0(e10[as]))
      return new ap(function(t10) {
        var r10 = /* @__PURE__ */ e10[as]();
        if (l0(r10.subscribe))
          return r10.subscribe(t10);
        throw TypeError("Provided object does not correctly implement Symbol.observable");
      });
    if (aC(e10))
      return new ap(function(t10) {
        for (var r10 = 0; r10 < e10.length && !t10.closed; r10++)
          t10.next(e10[r10]);
        t10.complete();
      });
    if (aE(e10))
      return new ap(function(t10) {
        e10.then(function(e11) {
          t10.closed || (t10.next(e11), t10.complete());
        }, function(e11) {
          return t10.error(e11);
        }).then(null, ae);
      });
    if (aP(e10))
      return aM(e10);
    if (aT(e10))
      return new ap(function(t10) {
        var r10, o10;
        try {
          for (var i10 = /* @__PURE__ */ lJ(e10), l10 = /* @__PURE__ */ i10.next(); !l10.done; l10 = /* @__PURE__ */ i10.next()) {
            var a10 = l10.value;
            if (t10.next(a10), t10.closed)
              return;
          }
        } catch (e11) {
          r10 = { error: e11 };
        } finally {
          try {
            l10 && !l10.done && (o10 = i10.return) && o10.call(i10);
          } finally {
            if (r10)
              throw r10.error;
          }
        }
        t10.complete();
      });
    if (aR(e10))
      return aM(/* @__PURE__ */ aI(e10));
  }
  throw aj(e10);
}
function aM(e10) {
  return new ap(function(t10) {
    (function(e11, t11) {
      var r10, o10, i10, l10, a10, s2, u2, c2;
      return a10 = this, s2 = void 0, u2 = void 0, c2 = function() {
        var a11;
        return lY(this, function(s3) {
          switch (s3.label) {
            case 0:
              s3.trys.push([0, 5, 6, 11]), r10 = /* @__PURE__ */ function(e12) {
                if (!Symbol.asyncIterator)
                  throw TypeError("Symbol.asyncIterator is not defined.");
                var t12, r11 = e12[Symbol.asyncIterator];
                return r11 ? r11.call(e12) : (e12 = lJ(e12), t12 = {}, o11("next"), o11("throw"), o11("return"), t12[Symbol.asyncIterator] = function() {
                  return this;
                }, t12);
                function o11(r12) {
                  t12[r12] = e12[r12] && function(t13) {
                    return new Promise(function(o12, i11) {
                      (function(e13, t14, r13, o13) {
                        Promise.resolve(o13).then(function(t15) {
                          e13({ value: t15, done: r13 });
                        }, t14);
                      })(o12, i11, (t13 = /* @__PURE__ */ e12[r12](t13)).done, t13.value);
                    });
                  };
                }
              }(e11), s3.label = 1;
            case 1:
              return [4, /* @__PURE__ */ r10.next()];
            case 2:
              if ((o10 = /* @__PURE__ */ s3.sent()).done)
                return [3, 4];
              if (a11 = o10.value, t11.next(a11), t11.closed)
                return [2];
              s3.label = 3;
            case 3:
              return [3, 1];
            case 4:
              return [3, 11];
            case 5:
              return i10 = { error: /* @__PURE__ */ s3.sent() }, [3, 11];
            case 6:
              if (s3.trys.push([6, , 9, 10]), !(o10 && !o10.done && (l10 = r10.return)))
                return [3, 8];
              return [4, /* @__PURE__ */ l10.call(r10)];
            case 7:
              s3.sent(), s3.label = 8;
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
      }, new (u2 || (u2 = Promise))(function(e12, t12) {
        function r11(e13) {
          try {
            i11(/* @__PURE__ */ c2.next(e13));
          } catch (e14) {
            t12(e14);
          }
        }
        function o11(e13) {
          try {
            i11(/* @__PURE__ */ c2.throw(e13));
          } catch (e14) {
            t12(e14);
          }
        }
        function i11(t13) {
          var i12;
          t13.done ? e12(t13.value) : ((i12 = t13.value) instanceof u2 ? i12 : new u2(function(e13) {
            e13(i12);
          })).then(r11, o11);
        }
        i11(/* @__PURE__ */ (c2 = /* @__PURE__ */ c2.apply(a10, s2 || [])).next());
      });
    })(e10, t10).catch(function(e11) {
      return t10.error(e11);
    });
  });
}
function aN(e10, t10, r10, o10, i10) {
  void 0 === o10 && (o10 = 0), void 0 === i10 && (i10 = false);
  var l10 = /* @__PURE__ */ t10.schedule(function() {
    r10(), i10 ? e10.add(/* @__PURE__ */ this.schedule(null, o10)) : this.unsubscribe();
  }, o10);
  if (e10.add(l10), !i10)
    return l10;
}
function aL(e10, t10) {
  return void 0 === t10 && (t10 = 0), ah(function(r10, o10) {
    r10.subscribe(/* @__PURE__ */ av(o10, function(r11) {
      return aN(o10, e10, function() {
        return o10.next(r11);
      }, t10);
    }, function() {
      return aN(o10, e10, function() {
        return o10.complete();
      }, t10);
    }, function(r11) {
      return aN(o10, e10, function() {
        return o10.error(r11);
      }, t10);
    }));
  });
}
function aV(e10, t10) {
  return void 0 === t10 && (t10 = 0), ah(function(r10, o10) {
    o10.add(/* @__PURE__ */ e10.schedule(function() {
      return r10.subscribe(o10);
    }, t10));
  });
}
function aD(e10, t10) {
  if (!e10)
    throw Error("Iterable cannot be null");
  return new ap(function(r10) {
    aN(r10, t10, function() {
      var o10 = /* @__PURE__ */ e10[Symbol.asyncIterator]();
      aN(r10, t10, function() {
        o10.next().then(function(e11) {
          e11.done ? r10.complete() : r10.next(e11.value);
        });
      }, 0, true);
    });
  });
}
function aU(e10, t10) {
  return t10 ? function(e11, t11) {
    if (null != e11) {
      if (l0(e11[as]))
        return aF(e11).pipe(/* @__PURE__ */ aV(t11), /* @__PURE__ */ aL(t11));
      if (aC(e11))
        return new ap(function(r10) {
          var o10 = 0;
          return t11.schedule(function() {
            o10 === e11.length ? r10.complete() : (r10.next(e11[o10++]), r10.closed || this.schedule());
          });
        });
      if (aE(e11))
        return aF(e11).pipe(/* @__PURE__ */ aV(t11), /* @__PURE__ */ aL(t11));
      if (aP(e11))
        return aD(e11, t11);
      if (aT(e11))
        return new ap(function(r10) {
          var o10;
          return aN(r10, t11, function() {
            o10 = /* @__PURE__ */ e11[aA](), aN(r10, t11, function() {
              var e12, t12, i10;
              try {
                t12 = (e12 = /* @__PURE__ */ o10.next()).value, i10 = e12.done;
              } catch (e13) {
                r10.error(e13);
                return;
              }
              i10 ? r10.complete() : r10.next(t12);
            }, 0, true);
          }), function() {
            return l0(null == o10 ? void 0 : o10.return) && o10.return();
          };
        });
      if (aR(e11))
        return aD(/* @__PURE__ */ aI(e11), t11);
    }
    throw aj(e11);
  }(e10, t10) : aF(e10);
}
function az(e10, t10) {
  return void 0 === t10 && (t10 = aO), ah(function(r10, o10) {
    var i10 = null, l10 = null, a10 = null, s2 = function() {
      if (i10) {
        i10.unsubscribe(), i10 = null;
        var e11 = l10;
        l10 = null, o10.next(e11);
      }
    };
    function u2() {
      var r11 = a10 + e10, l11 = /* @__PURE__ */ t10.now();
      if (l11 < r11) {
        i10 = /* @__PURE__ */ this.schedule(void 0, r11 - l11), o10.add(i10);
        return;
      }
      s2();
    }
    r10.subscribe(/* @__PURE__ */ av(o10, function(r11) {
      l10 = r11, a10 = /* @__PURE__ */ t10.now(), i10 || (i10 = /* @__PURE__ */ t10.schedule(u2, e10), o10.add(i10));
    }, function() {
      s2(), o10.complete();
    }, void 0, function() {
      l10 = i10 = null;
    }));
  });
}
function aB(e10, t10, r10) {
  var o10 = l0(e10) || t10 || r10 ? { next: e10, error: t10, complete: r10 } : e10;
  return o10 ? ah(function(e11, t11) {
    null === (r11 = o10.subscribe) || void 0 === r11 || r11.call(o10);
    var r11, i10 = true;
    e11.subscribe(/* @__PURE__ */ av(t11, function(e12) {
      var r12;
      null === (r12 = o10.next) || void 0 === r12 || r12.call(o10, e12), t11.next(e12);
    }, function() {
      var e12;
      i10 = false, null === (e12 = o10.complete) || void 0 === e12 || e12.call(o10), t11.complete();
    }, function(e12) {
      var r12;
      i10 = false, null === (r12 = o10.error) || void 0 === r12 || r12.call(o10, e12), t11.error(e12);
    }, function() {
      var e12, t12;
      i10 && (null === (e12 = o10.unsubscribe) || void 0 === e12 || e12.call(o10)), null === (t12 = o10.finalize) || void 0 === t12 || t12.call(o10);
    }));
  }) : au;
}
function aW(e10) {
  for (var t10 = arguments.length, r10 = Array(t10 > 1 ? t10 - 1 : 0), o10 = 1; o10 < t10; o10++)
    r10[o10 - 1] = arguments[o10];
  return ac(...r10)(/* @__PURE__ */ aU(e10));
}
var aq = /* @__PURE__ */ Symbol.for("immer-nothing"), aH = /* @__PURE__ */ Symbol.for("immer-draftable"), aG = /* @__PURE__ */ Symbol.for("immer-state"), aK = [
  // All error codes, starting by 0:
  function(e10) {
    return `The plugin for '${e10}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e10}()\` when initializing your application.`;
  },
  function(e10) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e10}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e10) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e10;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e10) {
    return `'current' expects a draft, got: ${e10}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e10) {
    return `'original' expects a draft, got: ${e10}`;
  }
];
function aY(e10) {
  for (var t10 = arguments.length, r10 = Array(t10 > 1 ? t10 - 1 : 0), o10 = 1; o10 < t10; o10++)
    r10[o10 - 1] = arguments[o10];
  {
    let t11 = aK[e10], o11 = "function" == typeof t11 ? t11.apply(null, r10) : t11;
    throw Error(`[Immer] ${o11}`);
  }
}
var aJ = Object.getPrototypeOf;
function aQ(e10) {
  return !!e10 && !!e10[aG];
}
function aX(e10) {
  var t10;
  return !!e10 && (a0(e10) || Array.isArray(e10) || !!e10[aH] || !!(null === (t10 = e10.constructor) || void 0 === t10 ? void 0 : t10[aH]) || a6(e10) || a8(e10));
}
var aZ = /* @__PURE__ */ Object.prototype.constructor.toString();
function a0(e10) {
  if (!e10 || "object" != typeof e10)
    return false;
  let t10 = /* @__PURE__ */ aJ(e10);
  if (null === t10)
    return true;
  let r10 = Object.hasOwnProperty.call(t10, "constructor") && t10.constructor;
  return r10 === Object || "function" == typeof r10 && Function.toString.call(r10) === aZ;
}
function a1(e10, t10) {
  0 === a2(e10) ? Object.entries(e10).forEach((r10) => {
    let [o10, i10] = r10;
    t10(o10, i10, e10);
  }) : e10.forEach((r10, o10) => t10(o10, r10, e10));
}
function a2(e10) {
  let t10 = e10[aG];
  return t10 ? t10.type_ : Array.isArray(e10) ? 1 : a6(e10) ? 2 : a8(e10) ? 3 : 0;
}
function a3(e10, t10) {
  return 2 === a2(e10) ? e10.has(t10) : Object.prototype.hasOwnProperty.call(e10, t10);
}
function a4(e10, t10, r10) {
  let o10 = /* @__PURE__ */ a2(e10);
  2 === o10 ? e10.set(t10, r10) : 3 === o10 ? e10.add(r10) : e10[t10] = r10;
}
function a6(e10) {
  return e10 instanceof Map;
}
function a8(e10) {
  return e10 instanceof Set;
}
function a5(e10) {
  return e10.copy_ || e10.base_;
}
function a7(e10, t10) {
  if (a6(e10))
    return new Map(e10);
  if (a8(e10))
    return new Set(e10);
  if (Array.isArray(e10))
    return Array.prototype.slice.call(e10);
  if (!t10 && a0(e10)) {
    if (!aJ(e10)) {
      let t11 = /* @__PURE__ */ Object.create(null);
      return Object.assign(t11, e10);
    }
    return { ...e10 };
  }
  let r10 = /* @__PURE__ */ Object.getOwnPropertyDescriptors(e10);
  delete r10[aG];
  let o10 = /* @__PURE__ */ Reflect.ownKeys(r10);
  for (let t11 = 0; t11 < o10.length; t11++) {
    let i10 = o10[t11], l10 = r10[i10];
    false === l10.writable && (l10.writable = true, l10.configurable = true), (l10.get || l10.set) && (r10[i10] = {
      configurable: true,
      writable: true,
      // could live with !!desc.set as well here...
      enumerable: l10.enumerable,
      value: e10[i10]
    });
  }
  return Object.create(/* @__PURE__ */ aJ(e10), r10);
}
function a9(e10) {
  let t10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return st(e10) || aQ(e10) || !aX(e10) || (a2(e10) > 1 && (e10.set = e10.add = e10.clear = e10.delete = se), Object.freeze(e10), t10 && a1(e10, (e11, t11) => a9(t11, true))), e10;
}
function se() {
  aY(2);
}
function st(e10) {
  return Object.isFrozen(e10);
}
var sn = {};
function sr(e10) {
  let t10 = sn[e10];
  return t10 || aY(0, e10), t10;
}
function so(e10, t10) {
  t10 && (sr("Patches"), e10.patches_ = [], e10.inversePatches_ = [], e10.patchListener_ = t10);
}
function si(e10) {
  sl(e10), e10.drafts_.forEach(ss), e10.drafts_ = null;
}
function sl(e10) {
  e10 === lH && (lH = e10.parent_);
}
function sa(e10) {
  return lH = {
    drafts_: [],
    parent_: lH,
    immer_: e10,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: true,
    unfinalizedDrafts_: 0
  };
}
function ss(e10) {
  let t10 = e10[aG];
  0 === t10.type_ || 1 === t10.type_ ? t10.revoke_() : t10.revoked_ = true;
}
function su(e10, t10) {
  t10.unfinalizedDrafts_ = t10.drafts_.length;
  let r10 = t10.drafts_[0], o10 = void 0 !== e10 && e10 !== r10;
  return o10 ? (r10[aG].modified_ && (si(t10), aY(4)), aX(e10) && (e10 = /* @__PURE__ */ sc(t10, e10), t10.parent_ || sp(t10, e10)), t10.patches_ && sr("Patches").generateReplacementPatches_(r10[aG].base_, e10, t10.patches_, t10.inversePatches_)) : e10 = /* @__PURE__ */ sc(t10, r10, []), si(t10), t10.patches_ && t10.patchListener_(t10.patches_, t10.inversePatches_), e10 !== aq ? e10 : void 0;
}
function sc(e10, t10, r10) {
  if (st(t10))
    return t10;
  let o10 = t10[aG];
  if (!o10)
    return a1(t10, (i10, l10) => sf(e10, o10, t10, i10, l10, r10)), t10;
  if (o10.scope_ !== e10)
    return t10;
  if (!o10.modified_)
    return sp(e10, o10.base_, true), o10.base_;
  if (!o10.finalized_) {
    o10.finalized_ = true, o10.scope_.unfinalizedDrafts_--;
    let t11 = o10.copy_, i10 = t11, l10 = false;
    3 === o10.type_ && (i10 = new Set(t11), t11.clear(), l10 = true), a1(i10, (i11, a10) => sf(e10, o10, t11, i11, a10, r10, l10)), sp(e10, t11, false), r10 && e10.patches_ && sr("Patches").generatePatches_(o10, r10, e10.patches_, e10.inversePatches_);
  }
  return o10.copy_;
}
function sf(e10, t10, r10, o10, i10, l10, a10) {
  if (i10 === r10 && aY(5), aQ(i10)) {
    let a11 = l10 && t10 && 3 !== t10.type_ && // Set objects are atomic since they have no keys.
    !a3(t10.assigned_, o10) ? l10.concat(o10) : void 0, s2 = /* @__PURE__ */ sc(e10, i10, a11);
    if (a4(r10, o10, s2), !aQ(s2))
      return;
    e10.canAutoFreeze_ = false;
  } else
    a10 && r10.add(i10);
  if (aX(i10) && !st(i10)) {
    if (!e10.immer_.autoFreeze_ && e10.unfinalizedDrafts_ < 1)
      return;
    sc(e10, i10), t10 && t10.scope_.parent_ || sp(e10, i10);
  }
}
function sp(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  !e10.parent_ && e10.immer_.autoFreeze_ && e10.canAutoFreeze_ && a9(t10, r10);
}
var sd = {
  get(e10, t10) {
    if (t10 === aG)
      return e10;
    let r10 = /* @__PURE__ */ a5(e10);
    if (!a3(r10, t10))
      return function(e11, t11, r11) {
        var o11;
        let i10 = /* @__PURE__ */ sm(t11, r11);
        return i10 ? "value" in i10 ? i10.value : null === (o11 = i10.get) || void 0 === o11 ? void 0 : o11.call(e11.draft_) : void 0;
      }(e10, r10, t10);
    let o10 = r10[t10];
    return e10.finalized_ || !aX(o10) ? o10 : o10 === sv(e10.base_, t10) ? (sy(e10), e10.copy_[t10] = /* @__PURE__ */ sb(o10, e10)) : o10;
  },
  has: (e10, t10) => t10 in a5(e10),
  ownKeys: (e10) => Reflect.ownKeys(/* @__PURE__ */ a5(e10)),
  set(e10, t10, r10) {
    let o10 = /* @__PURE__ */ sm(/* @__PURE__ */ a5(e10), t10);
    if (null == o10 ? void 0 : o10.set)
      return o10.set.call(e10.draft_, r10), true;
    if (!e10.modified_) {
      let o11 = /* @__PURE__ */ sv(/* @__PURE__ */ a5(e10), t10), i10 = null == o11 ? void 0 : o11[aG];
      if (i10 && i10.base_ === r10)
        return e10.copy_[t10] = r10, e10.assigned_[t10] = false, true;
      if ((r10 === o11 ? 0 !== r10 || 1 / r10 == 1 / o11 : r10 != r10 && o11 != o11) && (void 0 !== r10 || a3(e10.base_, t10)))
        return true;
      sy(e10), sg(e10);
    }
    return !!(e10.copy_[t10] === r10 && // special case: handle new props with value 'undefined'
    (void 0 !== r10 || t10 in e10.copy_) || // special case: NaN
    Number.isNaN(r10) && Number.isNaN(e10.copy_[t10])) || (e10.copy_[t10] = r10, e10.assigned_[t10] = true, true);
  },
  deleteProperty: (e10, t10) => (void 0 !== sv(e10.base_, t10) || t10 in e10.base_ ? (e10.assigned_[t10] = false, sy(e10), sg(e10)) : delete e10.assigned_[t10], e10.copy_ && delete e10.copy_[t10], true),
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e10, t10) {
    let r10 = /* @__PURE__ */ a5(e10), o10 = /* @__PURE__ */ Reflect.getOwnPropertyDescriptor(r10, t10);
    return o10 ? { writable: true, configurable: 1 !== e10.type_ || "length" !== t10, enumerable: o10.enumerable, value: r10[t10] } : o10;
  },
  defineProperty() {
    aY(11);
  },
  getPrototypeOf: (e10) => aJ(e10.base_),
  setPrototypeOf() {
    aY(12);
  }
}, sh = {};
function sv(e10, t10) {
  let r10 = e10[aG], o10 = r10 ? a5(r10) : e10;
  return o10[t10];
}
function sm(e10, t10) {
  if (!(t10 in e10))
    return;
  let r10 = /* @__PURE__ */ aJ(e10);
  for (; r10; ) {
    let e11 = /* @__PURE__ */ Object.getOwnPropertyDescriptor(r10, t10);
    if (e11)
      return e11;
    r10 = /* @__PURE__ */ aJ(r10);
  }
}
function sg(e10) {
  !e10.modified_ && (e10.modified_ = true, e10.parent_ && sg(e10.parent_));
}
function sy(e10) {
  e10.copy_ || (e10.copy_ = /* @__PURE__ */ a7(e10.base_, e10.scope_.immer_.useStrictShallowCopy_));
}
function sb(e10, t10) {
  let r10 = a6(e10) ? sr("MapSet").proxyMap_(e10, t10) : a8(e10) ? sr("MapSet").proxySet_(e10, t10) : (
    // src/core/proxy.ts
    function(e11, t11) {
      let r11 = /* @__PURE__ */ Array.isArray(e11), o11 = {
        type_: r11 ? 1 : 0,
        // Track which produce call this is associated with.
        scope_: t11 ? t11.scope_ : lH,
        // True for both shallow and deep changes.
        modified_: false,
        // Used during finalization.
        finalized_: false,
        // Track which properties have been assigned (true) or deleted (false).
        assigned_: {},
        // The parent draft state.
        parent_: t11,
        // The base state.
        base_: e11,
        // The base proxy.
        draft_: null,
        // set below
        // The base copy with any updated values.
        copy_: null,
        // Called by the `produce` function.
        revoke_: null,
        isManual_: false
      }, i10 = o11, l10 = sd;
      r11 && (i10 = [o11], l10 = sh);
      let { revoke: a10, proxy: s2 } = Proxy.revocable(i10, l10);
      return o11.draft_ = s2, o11.revoke_ = a10, s2;
    }(e10, t10)
  ), o10 = t10 ? t10.scope_ : lH;
  return o10.drafts_.push(r10), r10;
}
a1(sd, (e10, t10) => {
  sh[e10] = function() {
    return arguments[0] = arguments[0][0], t10.apply(this, arguments);
  };
}), sh.deleteProperty = function(e10, t10) {
  return isNaN(/* @__PURE__ */ parseInt(t10)) && aY(13), sh.set.call(this, e10, t10, void 0);
}, sh.set = function(e10, t10, r10) {
  return "length" !== t10 && isNaN(/* @__PURE__ */ parseInt(t10)) && aY(14), sd.set.call(this, e10[0], t10, r10, e10[0]);
};
var s_ = new class {
  constructor(e10) {
    this.autoFreeze_ = true, this.useStrictShallowCopy_ = false, /**
    * The `produce` function takes a value and a "recipe function" (whose
    * return value often depends on the base state). The recipe function is
    * free to mutate its first argument however it wants. All mutations are
    * only ever applied to a __copy__ of the base state.
    *
    * Pass only a function to create a "curried producer" which relieves you
    * from passing the recipe function every time.
    *
    * Only plain objects and arrays are made mutable. All other objects are
    * considered uncopyable.
    *
    * Note: This function is __bound__ to its `Immer` instance.
    *
    * @param {any} base - the initial state
    * @param {Function} recipe - function that receives a proxy of the base state as first argument and which can be freely modified
    * @param {Function} patchListener - optional function that will be called with all the patches produced here
    * @returns {any} a new state, or the initial state if nothing was modified
    */
    this.produce = (e11, t10, r10) => {
      let o10;
      if ("function" == typeof e11 && "function" != typeof t10) {
        let r11 = t10;
        t10 = e11;
        let o11 = this;
        return function() {
          let e12 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r11;
          for (var i10 = arguments.length, l10 = Array(i10 > 1 ? i10 - 1 : 0), a10 = 1; a10 < i10; a10++)
            l10[a10 - 1] = arguments[a10];
          return o11.produce(e12, (e13) => t10.call(this, e13, ...l10));
        };
      }
      if ("function" != typeof t10 && aY(6), void 0 !== r10 && "function" != typeof r10 && aY(7), aX(e11)) {
        let i10 = /* @__PURE__ */ sa(this), l10 = /* @__PURE__ */ sb(e11, void 0), a10 = true;
        try {
          o10 = /* @__PURE__ */ t10(l10), a10 = false;
        } finally {
          a10 ? si(i10) : sl(i10);
        }
        return so(i10, r10), su(o10, i10);
      }
      if (e11 && "object" == typeof e11)
        aY(1, e11);
      else {
        if (void 0 === (o10 = /* @__PURE__ */ t10(e11)) && (o10 = e11), o10 === aq && (o10 = void 0), this.autoFreeze_ && a9(o10, true), r10) {
          let t11 = [], i10 = [];
          sr("Patches").generateReplacementPatches_(e11, o10, t11, i10), r10(t11, i10);
        }
        return o10;
      }
    }, this.produceWithPatches = (e11, t10) => {
      let r10, o10;
      if ("function" == typeof e11) {
        var i10 = this;
        return function(t11) {
          for (var r11 = arguments.length, o11 = Array(r11 > 1 ? r11 - 1 : 0), l11 = 1; l11 < r11; l11++)
            o11[l11 - 1] = arguments[l11];
          return i10.produceWithPatches(t11, (t12) => e11(t12, ...o11));
        };
      }
      let l10 = /* @__PURE__ */ this.produce(e11, t10, (e12, t11) => {
        r10 = e12, o10 = t11;
      });
      return [l10, r10, o10];
    }, "boolean" == typeof (null == e10 ? void 0 : e10.autoFreeze) && this.setAutoFreeze(e10.autoFreeze), "boolean" == typeof (null == e10 ? void 0 : e10.useStrictShallowCopy) && this.setUseStrictShallowCopy(e10.useStrictShallowCopy);
  }
  createDraft(e10) {
    var t10;
    aX(e10) || aY(8), aQ(e10) && (aQ(t10 = e10) || aY(10, t10), e10 = function e11(t11) {
      let r11;
      if (!aX(t11) || st(t11))
        return t11;
      let o11 = t11[aG];
      if (o11) {
        if (!o11.modified_)
          return o11.base_;
        o11.finalized_ = true, r11 = /* @__PURE__ */ a7(t11, o11.scope_.immer_.useStrictShallowCopy_);
      } else
        r11 = /* @__PURE__ */ a7(t11, true);
      return a1(r11, (t12, o12) => {
        a4(r11, t12, /* @__PURE__ */ e11(o12));
      }), o11 && (o11.finalized_ = false), r11;
    }(t10));
    let r10 = /* @__PURE__ */ sa(this), o10 = /* @__PURE__ */ sb(e10, void 0);
    return o10[aG].isManual_ = true, sl(r10), o10;
  }
  finishDraft(e10, t10) {
    let r10 = e10 && e10[aG];
    r10 && r10.isManual_ || aY(9);
    let { scope_: o10 } = r10;
    return so(o10, t10), su(void 0, o10);
  }
  /**
  * Pass true to automatically freeze all copies created by Immer.
  *
  * By default, auto-freezing is enabled.
  */
  setAutoFreeze(e10) {
    this.autoFreeze_ = e10;
  }
  /**
  * Pass true to enable strict shallow copy.
  *
  * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
  */
  setUseStrictShallowCopy(e10) {
    this.useStrictShallowCopy_ = e10;
  }
  applyPatches(e10, t10) {
    let r10;
    for (r10 = t10.length - 1; r10 >= 0; r10--) {
      let o11 = t10[r10];
      if (0 === o11.path.length && "replace" === o11.op) {
        e10 = o11.value;
        break;
      }
    }
    r10 > -1 && (t10 = /* @__PURE__ */ t10.slice(r10 + 1));
    let o10 = sr("Patches").applyPatches_;
    return aQ(e10) ? o10(e10, t10) : this.produce(e10, (e11) => o10(e11, t10));
  }
}(), sw = s_.produce;
s_.produceWithPatches.bind(s_), s_.setAutoFreeze.bind(s_), s_.setUseStrictShallowCopy.bind(s_), s_.applyPatches.bind(s_), s_.createDraft.bind(s_), s_.finishDraft.bind(s_);
class sx extends a_ {
  next(e10) {
    let t10 = d(e10) ? sw(this.value, e10) : e10;
    Object.is(t10, this.value) || super.next(t10);
  }
}
let sS = (e10, t10) => {
  let r10 = new a_(e10[t10]);
  return nI(() => e10[t10], (e11) => r10.next(e11)), r10;
}, sk = (e10) => {
  let t10 = {};
  for (let o10 in e10) {
    var r10;
    if (d(e10[o10]) || (r10 = e10[o10]) && (r10 instanceof ap || l0(r10.lift) && l0(r10.subscribe))) {
      t10[o10] = e10[o10];
      continue;
    }
    t10[`${o10}$`] = /* @__PURE__ */ sS(e10, o10);
  }
  return t10;
};
function s$(e10) {
  return (t10) => {
    let r10 = /* @__PURE__ */ t10.subscribe(e10);
    n7(() => r10.unsubscribe());
  };
}
function sO(e10) {
  return (t10) => {
    var r10;
    return /* @__PURE__ */ ip(sC, { elem$: /* @__PURE__ */ t10.pipe((r10 = (t11) => () => e10(t11), ah(function(e11, t11) {
      var o10 = 0;
      e11.subscribe(/* @__PURE__ */ av(t11, function(e12) {
        t11.next(/* @__PURE__ */ r10.call(void 0, e12, o10++));
      }));
    }))), children: {} });
  };
}
let sC = /* @__PURE__ */ ih({ elem$: /* @__PURE__ */ g(), $default: /* @__PURE__ */ g() }, (e10, t10) => {
  let {} = t10, r10 = /* @__PURE__ */ tP(null);
  return aW(e10.elem$, /* @__PURE__ */ aB((e11) => r10.value = e11), /* @__PURE__ */ s$()), () => {
    var e11;
    return null === (e11 = r10.value) || void 0 === e11 ? void 0 : e11.call(r10);
  };
}, { name: "RxSlot" });
function sE(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o10 = null != r10 ? r10 : t10, i10 = null != t10 ? t10 : e10, l10 = null != e10 ? e10 : {};
  return ih(l10, (e11, t11) => {
    let r11 = /* @__PURE__ */ sk(e11), o11 = new Proxy({}, { get(t12, o12) {
      var i11;
      return null !== (i11 = e11[o12]) && void 0 !== i11 ? i11 : r11[o12];
    } }), l11 = new Proxy({}, { get: (e12, r12) => "render" == r12 ? sO : t11[r12] }), a10 = /* @__PURE__ */ i10(o11, l11);
    return d(a10) ? a10 : () => a10;
  }, o10);
}
let sP = (e10) => {
  let t10 = new sx(e10), r10 = new tF((e11, r11) => ({ get: () => (e11(), t10.value), set(e12) {
    Object.is(e12, t10.value) || (t10.next(e12), r11());
  } }));
  return new Proxy(t10, { get(e11, o10) {
    var i10;
    return "next" == o10 ? (e12) => {
      r10.value = d(e12) ? sw(t10.value, e12) : e12;
    } : "value" === o10 ? r10.value : null !== (i10 = t10[o10]) && void 0 !== i10 ? i10 : r10[o10];
  }, set: (e11, t11, o10) => ("value" === t11 ? r10.value = o10 : e11[t11] = o10, true) });
}, sj = (e10, t10) => {
  if (y(e10) && y(t10)) {
    if (e10.length !== t10.length)
      return false;
    for (let r10 in e10)
      if (!Object.is(e10[r10], t10[r10]))
        return false;
    return true;
  }
  return Object.is(e10, t10);
}, sA = (e10) => {
  let t10;
  let r10 = null;
  return aB({ next: (o10) => {
    sj(o10, r10) || (t10 && t10(), t10 = /* @__PURE__ */ e10(o10), r10 = o10);
  }, unsubscribe: () => {
    t10 && t10();
  } });
};
function sT(e10, t10, r10) {
  var o10, i10, l10, a10;
  let s2;
  let u2 = b(e10) ? e10 : {}, c2 = d(e10) ? e10 : t10, f2 = null !== (o10 = null != r10 ? r10 : t10) && void 0 !== o10 ? o10 : {}, p2 = /* @__PURE__ */ Symbol(null !== (i10 = f2.name) && void 0 !== i10 ? i10 : "");
  if (_(u2)) {
    let e11;
    let t11 = () => null != e11 ? e11 : e11 = /* @__PURE__ */ c2({}), r11 = /* @__PURE__ */ ih({ value: /* @__PURE__ */ g().optional(), $default: /* @__PURE__ */ g().optional() }, (e12, r12) => {
      var o11;
      let { slots: i11 } = r12;
      return rS(p2, null !== (o11 = e12.value) && void 0 !== o11 ? o11 : t11()), () => {
        var e13;
        return null === (e13 = i11.default) || void 0 === e13 ? void 0 : e13.call(i11);
      };
    }, { ...f2, name: `Provide(${null !== (l10 = f2.name) && void 0 !== l10 ? l10 : ""})` });
    return iv(r11, { use: () => rk(p2, t11, true) });
  }
  let h2 = /* @__PURE__ */ w(u2), m2 = () => h2.create({}), y2 = () => null != s2 ? s2 : s2 = /* @__PURE__ */ c2(/* @__PURE__ */ m2()), x2 = /* @__PURE__ */ ih({ ...u2, $default: /* @__PURE__ */ g().optional() }, (e11, t11) => {
    let { slots: r11 } = t11;
    return rS(p2, /* @__PURE__ */ c2(e11)), () => {
      var e12;
      return null === (e12 = r11.default) || void 0 === e12 ? void 0 : e12.call(r11);
    };
  }, { ...f2, name: `Provide(${null !== (a10 = f2.name) && void 0 !== a10 ? a10 : ""})` });
  return iv(x2, { use: () => rk(p2, y2, true) });
}
export {
  iU as A,
  a_ as B,
  it as C,
  nJ as D,
  oP as E,
  r1 as F,
  id as G,
  sE as H,
  az as I,
  sO as J,
  lV as R,
  oV as T,
  sT as a,
  n4 as b,
  ih as c,
  on as d,
  n7 as e,
  aW as f,
  rZ as g,
  sA as h,
  ic as i,
  ip as j,
  sP as k,
  tP as l,
  ac as m,
  aU as n,
  n6 as o,
  rS as p,
  aB as q,
  tE as r,
  s$ as s,
  sS as t,
  tT as u,
  rk as v,
  nI as w,
  lN as x,
  lL as y,
  lM as z
};
