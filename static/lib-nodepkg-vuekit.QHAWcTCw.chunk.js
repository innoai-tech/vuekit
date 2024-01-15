let e, t, r, o, i, l, a, s, u, c, f, p;
import { i as d, p as h, k as m, c as g, a as y, b, d as _, o as w } from "./lib-nodepkg-typedef.E0gBujd-.chunk.js";
function x(e10, t10) {
  let r10 = new Set(e10.split(","));
  return t10 ? (e11) => r10.has(/* @__PURE__ */ e11.toLowerCase()) : (e11) => r10.has(e11);
}
let S = /* @__PURE__ */ Object.freeze({}), k = /* @__PURE__ */ Object.freeze([]), $ = () => {
}, O = () => false, C = (e10) => 111 === e10.charCodeAt(0) && 110 === e10.charCodeAt(1) && // uppercase letter
(e10.charCodeAt(2) > 122 || 97 > e10.charCodeAt(2)), E = (e10) => e10.startsWith("onUpdate:"), P = Object.assign, A = (e10, t10) => {
  let r10 = /* @__PURE__ */ e10.indexOf(t10);
  r10 > -1 && e10.splice(r10, 1);
}, j = Object.prototype.hasOwnProperty, T = (e10, t10) => j.call(e10, t10), I = Array.isArray, R = (e10) => "[object Map]" === z(e10), M = (e10) => "[object Set]" === z(e10), L = (e10) => "function" == typeof e10, F = (e10) => "string" == typeof e10, N = (e10) => "symbol" == typeof e10, V = (e10) => null !== e10 && "object" == typeof e10, D = (e10) => (V(e10) || L(e10)) && L(e10.then) && L(e10.catch), U = Object.prototype.toString, z = (e10) => U.call(e10), B = (e10) => z(e10).slice(8, -1), W = (e10) => "[object Object]" === z(e10), q = (e10) => F(e10) && "NaN" !== e10 && "-" !== e10[0] && "" + parseInt(e10, 10) === e10, H = /* @__PURE__ */ x(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), G = /* @__PURE__ */ x("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), K = (e10) => {
  let t10 = /* @__PURE__ */ Object.create(null);
  return (r10) => {
    let o10 = t10[r10];
    return o10 || (t10[r10] = /* @__PURE__ */ e10(r10));
  };
}, Y = /-(\w)/g, J = /* @__PURE__ */ K((e10) => e10.replace(Y, (e11, t10) => t10 ? t10.toUpperCase() : "")), Q = /\B([A-Z])/g, X = /* @__PURE__ */ K((e10) => e10.replace(Q, "-$1").toLowerCase()), Z = /* @__PURE__ */ K((e10) => e10.charAt(0).toUpperCase() + e10.slice(1)), ee = /* @__PURE__ */ K((e10) => {
  let t10 = e10 ? `on${Z(e10)}` : "";
  return t10;
}), et = (e10, t10) => !Object.is(e10, t10), en = (e10, t10) => {
  for (let r10 = 0; r10 < e10.length; r10++)
    e10[r10](t10);
}, er = (e10, t10, r10) => {
  Object.defineProperty(e10, t10, { configurable: true, enumerable: false, value: r10 });
}, eo = (e10) => {
  let t10 = /* @__PURE__ */ parseFloat(e10);
  return isNaN(t10) ? e10 : t10;
}, ei = (e10) => {
  let t10 = F(e10) ? Number(e10) : NaN;
  return isNaN(t10) ? e10 : t10;
}, el = () => e || (e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {});
function ea(e10) {
  if (I(e10)) {
    let t10 = {};
    for (let r10 = 0; r10 < e10.length; r10++) {
      let o10 = e10[r10], i10 = F(o10) ? function(e11) {
        let t11 = {};
        return e11.replace(ec, "").split(es).forEach((e12) => {
          if (e12) {
            let r11 = /* @__PURE__ */ e12.split(eu);
            r11.length > 1 && (t11[r11[0].trim()] = /* @__PURE__ */ r11[1].trim());
          }
        }), t11;
      }(o10) : ea(o10);
      if (i10)
        for (let e11 in i10)
          t10[e11] = i10[e11];
    }
    return t10;
  }
  if (F(e10) || V(e10))
    return e10;
}
let es = /;(?![^(]*\))/g, eu = /:([^]+)/, ec = /\/\*[^]*?\*\//g;
function ef(e10) {
  let t10 = "";
  if (F(e10))
    t10 = e10;
  else if (I(e10))
    for (let r10 = 0; r10 < e10.length; r10++) {
      let o10 = /* @__PURE__ */ ef(e10[r10]);
      o10 && (t10 += o10 + " ");
    }
  else if (V(e10))
    for (let r10 in e10)
      e10[r10] && (t10 += r10 + " ");
  return t10.trim();
}
let ep = /* @__PURE__ */ x("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot"), ed = /* @__PURE__ */ x("svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view"), eh = /* @__PURE__ */ x("annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics"), ev = /* @__PURE__ */ x("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");
function em(e10) {
  for (var t10 = arguments.length, r10 = Array(t10 > 1 ? t10 - 1 : 0), o10 = 1; o10 < t10; o10++)
    r10[o10 - 1] = arguments[o10];
  console.warn(`[Vue warn] ${e10}`, ...r10);
}
class eg {
  constructor(e10 = false) {
    this.detached = e10, this._active = true, this.effects = [], this.cleanups = [], this.parent = t, !e10 && t && (this.index = (t.scopes || (t.scopes = [])).push(this) - 1);
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
class ey {
  constructor(e10, r10, o10, i10) {
    this.fn = e10, this.trigger = r10, this.scheduler = o10, this.active = true, this.deps = [], this._dirtyLevel = 3, this._trackId = 0, this._runnings = 0, this._queryings = 0, this._depsLength = 0, function(e11) {
      let r11 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
      r11 && r11.active && r11.effects.push(e11);
    }(this, i10);
  }
  get dirty() {
    if (1 === this._dirtyLevel) {
      for (let e10 of (this._dirtyLevel = 0, this._queryings++, e$(), this.deps))
        if (e10.computed && (e10.computed.value, this._dirtyLevel >= 2))
          break;
      eO(), this._queryings--;
    }
    return this._dirtyLevel >= 2;
  }
  set dirty(e10) {
    this._dirtyLevel = e10 ? 3 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let e10 = ex, t10 = r;
    try {
      return ex = true, r = this, this._runnings++, eb(this), this.fn();
    } finally {
      e_(this), this._runnings--, r = t10, ex = e10;
    }
  }
  stop() {
    var e10;
    this.active && (eb(this), e_(this), null == (e10 = this.onStop) || e10.call(this), this.active = false);
  }
}
function eb(e10) {
  e10._trackId++, e10._depsLength = 0;
}
function e_(e10) {
  if (e10.deps && e10.deps.length > e10._depsLength) {
    for (let t10 = e10._depsLength; t10 < e10.deps.length; t10++)
      ew(e10.deps[t10], e10);
    e10.deps.length = e10._depsLength;
  }
}
function ew(e10, t10) {
  let r10 = /* @__PURE__ */ e10.get(t10);
  void 0 !== r10 && t10._trackId !== r10 && (e10.delete(t10), 0 === e10.size && e10.cleanup());
}
let ex = true, eS = 0, ek = [];
function e$() {
  ek.push(ex), ex = false;
}
function eO() {
  let e10 = /* @__PURE__ */ ek.pop();
  ex = void 0 === e10 || e10;
}
function eC() {
  for (eS--; !eS && eP.length; )
    eP.shift()();
}
function eE(e10, t10, r10) {
  var o10;
  if (t10.get(e10) !== e10._trackId) {
    t10.set(e10, e10._trackId);
    let i10 = e10.deps[e10._depsLength];
    i10 !== t10 ? (i10 && ew(i10, e10), e10.deps[e10._depsLength++] = t10) : e10._depsLength++, null == (o10 = e10.onTrack) || o10.call(e10, /* @__PURE__ */ P({ effect: e10 }, r10));
  }
}
let eP = [];
function eA(e10, t10, r10) {
  var o10;
  for (let i10 of (eS++, e10.keys()))
    if ((i10.allowRecurse || !i10._runnings) && i10._dirtyLevel < t10 && (!i10._runnings || 2 !== t10)) {
      let e11 = i10._dirtyLevel;
      i10._dirtyLevel = t10, 0 === e11 && (!i10._queryings || 2 !== t10) && (null == (o10 = i10.onTrigger) || o10.call(i10, /* @__PURE__ */ P({ effect: i10 }, r10)), i10.trigger(), i10.scheduler && eP.push(i10.scheduler));
    }
  eC();
}
let ej = (e10, t10) => {
  let r10 = /* @__PURE__ */ new Map();
  return r10.cleanup = e10, r10.computed = t10, r10;
}, eT = /* @__PURE__ */ new WeakMap(), eI = /* @__PURE__ */ Symbol("iterate"), eR = /* @__PURE__ */ Symbol("Map key iterate");
function eM(e10, t10, o10) {
  if (ex && r) {
    let i10 = /* @__PURE__ */ eT.get(e10);
    i10 || eT.set(e10, i10 = /* @__PURE__ */ new Map());
    let l10 = /* @__PURE__ */ i10.get(o10);
    l10 || i10.set(o10, l10 = /* @__PURE__ */ ej(() => i10.delete(o10))), eE(r, l10, { target: e10, type: t10, key: o10 });
  }
}
function eL(e10, t10, r10, o10, i10, l10) {
  let a10 = /* @__PURE__ */ eT.get(e10);
  if (!a10)
    return;
  let s2 = [];
  if ("clear" === t10)
    s2 = [.../* @__PURE__ */ a10.values()];
  else if ("length" === r10 && I(e10)) {
    let e11 = /* @__PURE__ */ Number(o10);
    a10.forEach((t11, r11) => {
      ("length" === r11 || !N(r11) && r11 >= e11) && s2.push(t11);
    });
  } else
    switch (void 0 !== r10 && s2.push(/* @__PURE__ */ a10.get(r10)), t10) {
      case "add":
        I(e10) ? q(r10) && s2.push(/* @__PURE__ */ a10.get("length")) : (s2.push(/* @__PURE__ */ a10.get(eI)), R(e10) && s2.push(/* @__PURE__ */ a10.get(eR)));
        break;
      case "delete":
        !I(e10) && (s2.push(/* @__PURE__ */ a10.get(eI)), R(e10) && s2.push(/* @__PURE__ */ a10.get(eR)));
        break;
      case "set":
        R(e10) && s2.push(/* @__PURE__ */ a10.get(eI));
    }
  for (let a11 of (eS++, s2))
    a11 && eA(a11, 3, { target: e10, type: t10, key: r10, newValue: o10, oldValue: i10, oldTarget: l10 });
  eC();
}
let eF = /* @__PURE__ */ x("__proto__,__v_isRef,__isVue"), eN = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e10) => "arguments" !== e10 && "caller" !== e10).map((e10) => Symbol[e10]).filter(N)), eV = /* @__PURE__ */ function() {
  let e10 = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t10) => {
    e10[t10] = function() {
      for (var e11 = arguments.length, r10 = Array(e11), o10 = 0; o10 < e11; o10++)
        r10[o10] = arguments[o10];
      let i10 = /* @__PURE__ */ tb(this);
      for (let e12 = 0, t11 = this.length; e12 < t11; e12++)
        eM(i10, "get", e12 + "");
      let l10 = /* @__PURE__ */ i10[t10](...r10);
      return -1 === l10 || false === l10 ? i10[t10](.../* @__PURE__ */ r10.map(tb)) : l10;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t10) => {
    e10[t10] = function() {
      for (var e11 = arguments.length, r10 = Array(e11), o10 = 0; o10 < e11; o10++)
        r10[o10] = arguments[o10];
      e$(), eS++;
      let i10 = /* @__PURE__ */ tb(this)[t10].apply(this, r10);
      return eC(), eO(), i10;
    };
  }), e10;
}();
function eD(e10) {
  let t10 = /* @__PURE__ */ tb(this);
  return eM(t10, "has", e10), t10.hasOwnProperty(e10);
}
class eU {
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
    if ("__v_raw" === t10)
      return r10 === (o10 ? i10 ? tu : ts : i10 ? ta : tl).get(e10) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(e10) === Object.getPrototypeOf(r10) ? e10 : void 0;
    let l10 = /* @__PURE__ */ I(e10);
    if (!o10) {
      if (l10 && T(eV, t10))
        return Reflect.get(eV, t10, r10);
      if ("hasOwnProperty" === t10)
        return eD;
    }
    let a10 = /* @__PURE__ */ Reflect.get(e10, t10, r10);
    return (N(t10) ? eN.has(t10) : eF(t10)) ? a10 : (o10 || eM(e10, "get", t10), i10) ? a10 : tO(a10) ? l10 && q(t10) ? a10 : a10.value : V(a10) ? o10 ? tp(a10) : tc(a10) : a10;
  }
}
class ez extends eU {
  constructor(e10 = false) {
    super(false, e10);
  }
  set(e10, t10, r10, o10) {
    let i10 = e10[t10];
    if (!this._shallow) {
      let t11 = /* @__PURE__ */ tm(i10);
      if (tg(r10) || tm(r10) || (i10 = /* @__PURE__ */ tb(i10), r10 = /* @__PURE__ */ tb(r10)), !I(e10) && tO(i10) && !tO(r10))
        return !t11 && (i10.value = r10, true);
    }
    let l10 = I(e10) && q(t10) ? Number(t10) < e10.length : T(e10, t10), a10 = /* @__PURE__ */ Reflect.set(e10, t10, r10, o10);
    return e10 === tb(o10) && (l10 ? et(r10, i10) && eL(e10, "set", t10, r10, i10) : eL(e10, "add", t10, r10)), a10;
  }
  deleteProperty(e10, t10) {
    let r10 = /* @__PURE__ */ T(e10, t10), o10 = e10[t10], i10 = /* @__PURE__ */ Reflect.deleteProperty(e10, t10);
    return i10 && r10 && eL(e10, "delete", t10, void 0, o10), i10;
  }
  has(e10, t10) {
    let r10 = /* @__PURE__ */ Reflect.has(e10, t10);
    return N(t10) && eN.has(t10) || eM(e10, "has", t10), r10;
  }
  ownKeys(e10) {
    return eM(e10, "iterate", I(e10) ? "length" : eI), Reflect.ownKeys(e10);
  }
}
class eB extends eU {
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
let eW = /* @__PURE__ */ new ez(), eq = /* @__PURE__ */ new eB(), eH = /* @__PURE__ */ new ez(true), eG = /* @__PURE__ */ new eB(true), eK = (e10) => e10, eY = (e10) => Reflect.getPrototypeOf(e10);
function eJ(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o10 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  e10 = e10.__v_raw;
  let i10 = /* @__PURE__ */ tb(e10), l10 = /* @__PURE__ */ tb(t10);
  r10 || (et(t10, l10) && eM(i10, "get", t10), eM(i10, "get", l10));
  let { has: a10 } = eY(i10), s2 = o10 ? eK : r10 ? tx : tw;
  return a10.call(i10, t10) ? s2(/* @__PURE__ */ e10.get(t10)) : a10.call(i10, l10) ? s2(/* @__PURE__ */ e10.get(l10)) : void (e10 !== i10 && e10.get(t10));
}
function eQ(e10) {
  let t10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r10 = this.__v_raw, o10 = /* @__PURE__ */ tb(r10), i10 = /* @__PURE__ */ tb(e10);
  return t10 || (et(e10, i10) && eM(o10, "has", e10), eM(o10, "has", i10)), e10 === i10 ? r10.has(e10) : r10.has(e10) || r10.has(i10);
}
function eX(e10) {
  let t10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return e10 = e10.__v_raw, t10 || eM(/* @__PURE__ */ tb(e10), "iterate", eI), Reflect.get(e10, "size", e10);
}
function eZ(e10) {
  e10 = /* @__PURE__ */ tb(e10);
  let t10 = /* @__PURE__ */ tb(this), r10 = /* @__PURE__ */ eY(t10), o10 = /* @__PURE__ */ r10.has.call(t10, e10);
  return o10 || (t10.add(e10), eL(t10, "add", e10, e10)), this;
}
function e0(e10, t10) {
  t10 = /* @__PURE__ */ tb(t10);
  let r10 = /* @__PURE__ */ tb(this), { has: o10, get: i10 } = eY(r10), l10 = /* @__PURE__ */ o10.call(r10, e10);
  l10 ? ti(r10, o10, e10) : (e10 = /* @__PURE__ */ tb(e10), l10 = /* @__PURE__ */ o10.call(r10, e10));
  let a10 = /* @__PURE__ */ i10.call(r10, e10);
  return r10.set(e10, t10), l10 ? et(t10, a10) && eL(r10, "set", e10, t10, a10) : eL(r10, "add", e10, t10), this;
}
function e1(e10) {
  let t10 = /* @__PURE__ */ tb(this), { has: r10, get: o10 } = eY(t10), i10 = /* @__PURE__ */ r10.call(t10, e10);
  i10 ? ti(t10, r10, e10) : (e10 = /* @__PURE__ */ tb(e10), i10 = /* @__PURE__ */ r10.call(t10, e10));
  let l10 = o10 ? o10.call(t10, e10) : void 0, a10 = /* @__PURE__ */ t10.delete(e10);
  return i10 && eL(t10, "delete", e10, void 0, l10), a10;
}
function e2() {
  let e10 = /* @__PURE__ */ tb(this), t10 = 0 !== e10.size, r10 = R(e10) ? new Map(e10) : new Set(e10), o10 = /* @__PURE__ */ e10.clear();
  return t10 && eL(e10, "clear", void 0, void 0, r10), o10;
}
function e3(e10, t10) {
  return function(r10, o10) {
    let i10 = this, l10 = i10.__v_raw, a10 = /* @__PURE__ */ tb(l10), s2 = t10 ? eK : e10 ? tx : tw;
    return e10 || eM(a10, "iterate", eI), l10.forEach((e11, t11) => r10.call(o10, /* @__PURE__ */ s2(e11), /* @__PURE__ */ s2(t11), i10));
  };
}
function e4(e10, t10, r10) {
  return function() {
    for (var o10 = arguments.length, i10 = Array(o10), l10 = 0; l10 < o10; l10++)
      i10[l10] = arguments[l10];
    let a10 = this.__v_raw, s2 = /* @__PURE__ */ tb(a10), u2 = /* @__PURE__ */ R(s2), c2 = "entries" === e10 || e10 === Symbol.iterator && u2, f2 = "keys" === e10 && u2, p2 = /* @__PURE__ */ a10[e10](...i10), d2 = r10 ? eK : t10 ? tx : tw;
    return t10 || eM(s2, "iterate", f2 ? eR : eI), {
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
function e6(e10) {
  return function() {
    for (var t10 = arguments.length, r10 = Array(t10), o10 = 0; o10 < t10; o10++)
      r10[o10] = arguments[o10];
    {
      let t11 = r10[0] ? `on key "${r10[0]}" ` : "";
      console.warn(`${Z(e10)} operation ${t11}failed: target is readonly.`, /* @__PURE__ */ tb(this));
    }
    return "delete" !== e10 && ("clear" === e10 ? void 0 : this);
  };
}
let [e8, e5, e7, e9] = /* @__PURE__ */ function() {
  let e10 = { get(e11) {
    return eJ(this, e11);
  }, get size() {
    return eX(this);
  }, has: eQ, add: eZ, set: e0, delete: e1, clear: e2, forEach: /* @__PURE__ */ e3(false, false) }, t10 = { get(e11) {
    return eJ(this, e11, false, true);
  }, get size() {
    return eX(this);
  }, has: eQ, add: eZ, set: e0, delete: e1, clear: e2, forEach: /* @__PURE__ */ e3(false, true) }, r10 = { get(e11) {
    return eJ(this, e11, true);
  }, get size() {
    return eX(this, true);
  }, has(e11) {
    return eQ.call(this, e11, true);
  }, add: /* @__PURE__ */ e6("add"), set: /* @__PURE__ */ e6("set"), delete: /* @__PURE__ */ e6("delete"), clear: /* @__PURE__ */ e6("clear"), forEach: /* @__PURE__ */ e3(true, false) }, o10 = { get(e11) {
    return eJ(this, e11, true, true);
  }, get size() {
    return eX(this, true);
  }, has(e11) {
    return eQ.call(this, e11, true);
  }, add: /* @__PURE__ */ e6("add"), set: /* @__PURE__ */ e6("set"), delete: /* @__PURE__ */ e6("delete"), clear: /* @__PURE__ */ e6("clear"), forEach: /* @__PURE__ */ e3(true, true) }, i10 = ["keys", "values", "entries", Symbol.iterator];
  return i10.forEach((i11) => {
    e10[i11] = /* @__PURE__ */ e4(i11, false, false), r10[i11] = /* @__PURE__ */ e4(i11, true, false), t10[i11] = /* @__PURE__ */ e4(i11, false, true), o10[i11] = /* @__PURE__ */ e4(i11, true, true);
  }), [e10, r10, t10, o10];
}();
function te(e10, t10) {
  let r10 = t10 ? e10 ? e9 : e7 : e10 ? e5 : e8;
  return (t11, o10, i10) => "__v_isReactive" === o10 ? !e10 : "__v_isReadonly" === o10 ? e10 : "__v_raw" === o10 ? t11 : Reflect.get(T(r10, o10) && o10 in t11 ? r10 : t11, o10, i10);
}
let tt = { get: /* @__PURE__ */ te(false, false) }, tn = { get: /* @__PURE__ */ te(false, true) }, tr = { get: /* @__PURE__ */ te(true, false) }, to = { get: /* @__PURE__ */ te(true, true) };
function ti(e10, t10, r10) {
  let o10 = /* @__PURE__ */ tb(r10);
  if (o10 !== r10 && t10.call(e10, o10)) {
    let t11 = /* @__PURE__ */ B(e10);
    console.warn(`Reactive ${t11} contains both the raw and reactive versions of the same object${"Map" === t11 ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
let tl = /* @__PURE__ */ new WeakMap(), ta = /* @__PURE__ */ new WeakMap(), ts = /* @__PURE__ */ new WeakMap(), tu = /* @__PURE__ */ new WeakMap();
function tc(e10) {
  return tm(e10) ? e10 : th(e10, false, eW, tt, tl);
}
function tf(e10) {
  return th(e10, false, eH, tn, ta);
}
function tp(e10) {
  return th(e10, true, eq, tr, ts);
}
function td(e10) {
  return th(e10, true, eG, to, tu);
}
function th(e10, t10, r10, o10, i10) {
  if (!V(e10))
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
  }(/* @__PURE__ */ B(e10));
  if (0 === a10)
    return e10;
  let s2 = new Proxy(e10, 2 === a10 ? o10 : r10);
  return i10.set(e10, s2), s2;
}
function tv(e10) {
  return tm(e10) ? tv(e10.__v_raw) : !!(e10 && e10.__v_isReactive);
}
function tm(e10) {
  return !!(e10 && e10.__v_isReadonly);
}
function tg(e10) {
  return !!(e10 && e10.__v_isShallow);
}
function ty(e10) {
  return tv(e10) || tm(e10);
}
function tb(e10) {
  let t10 = e10 && e10.__v_raw;
  return t10 ? tb(t10) : e10;
}
function t_(e10) {
  return er(e10, "__v_skip", true), e10;
}
let tw = (e10) => V(e10) ? tc(e10) : e10, tx = (e10) => V(e10) ? tp(e10) : e10;
class tS {
  constructor(e10, t10, r10, o10) {
    this._setter = t10, this.dep = void 0, this.__v_isRef = true, this.__v_isReadonly = false, this.effect = new ey(() => e10(this._value), () => t$(this, 1)), this.effect.computed = this, this.effect.active = this._cacheable = !o10, this.__v_isReadonly = r10;
  }
  get value() {
    let e10 = /* @__PURE__ */ tb(this);
    return tk(e10), (!e10._cacheable || e10.effect.dirty) && et(e10._value, e10._value = /* @__PURE__ */ e10.effect.run()) && t$(e10, 2), e10._value;
  }
  set value(e10) {
    this._setter(e10);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(e10) {
    this.effect.dirty = e10;
  }
}
function tk(e10) {
  ex && r && (e10 = /* @__PURE__ */ tb(e10), eE(r, e10.dep || (e10.dep = /* @__PURE__ */ ej(() => e10.dep = void 0, e10 instanceof tS ? e10 : void 0)), { target: e10, type: "get", key: "value" }));
}
function t$(e10) {
  let t10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3, r10 = arguments.length > 2 ? arguments[2] : void 0;
  e10 = /* @__PURE__ */ tb(e10);
  let o10 = e10.dep;
  o10 && eA(o10, t10, { target: e10, type: "set", key: "value", newValue: r10 });
}
function tO(e10) {
  return !!(e10 && true === e10.__v_isRef);
}
function tC(e10) {
  return tP(e10, false);
}
function tE(e10) {
  return tP(e10, true);
}
function tP(e10, t10) {
  return tO(e10) ? e10 : new tA(e10, t10);
}
class tA {
  constructor(e10, t10) {
    this.__v_isShallow = t10, this.dep = void 0, this.__v_isRef = true, this._rawValue = t10 ? e10 : tb(e10), this._value = t10 ? e10 : tw(e10);
  }
  get value() {
    return tk(this), this._value;
  }
  set value(e10) {
    let t10 = this.__v_isShallow || tg(e10) || tm(e10);
    et(e10 = t10 ? e10 : tb(e10), this._rawValue) && (this._rawValue = e10, this._value = t10 ? e10 : tw(e10), t$(this, 3, e10));
  }
}
function tj(e10) {
  return tO(e10) ? e10.value : e10;
}
let tT = { get: (e10, t10, r10) => tj(/* @__PURE__ */ Reflect.get(e10, t10, r10)), set: (e10, t10, r10, o10) => {
  let i10 = e10[t10];
  return tO(i10) && !tO(r10) ? (i10.value = r10, true) : Reflect.set(e10, t10, r10, o10);
} };
function tI(e10) {
  return tv(e10) ? e10 : new Proxy(e10, tT);
}
class tR {
  constructor(e10) {
    this.dep = void 0, this.__v_isRef = true;
    let { get: t10, set: r10 } = e10(() => tk(this), () => t$(this));
    this._get = t10, this._set = r10;
  }
  get value() {
    return this._get();
  }
  set value(e10) {
    this._set(e10);
  }
}
let tM = [];
function tL(e10) {
  tM.push(e10);
}
function tF() {
  tM.pop();
}
function tN(e10) {
  for (var t10 = arguments.length, r10 = Array(t10 > 1 ? t10 - 1 : 0), o10 = 1; o10 < t10; o10++)
    r10[o10 - 1] = arguments[o10];
  e$();
  let i10 = tM.length ? tM[tM.length - 1].component : null, l10 = i10 && i10.appContext.config.warnHandler, a10 = /* @__PURE__ */ function() {
    let e11 = tM[tM.length - 1];
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
    tD(l10, i10, 11, [e10 + r10.join(""), i10 && i10.proxy, /* @__PURE__ */ a10.map((e11) => {
      let { vnode: t11 } = e11;
      return `at <${oC(i10, t11.type)}>`;
    }).join("\n"), a10]);
  else {
    let t11 = [`[Vue warn]: ${e10}`, ...r10];
    a10.length && t11.push(`
`, .../* @__PURE__ */ function(e11) {
      let t12 = [];
      return e11.forEach((e12, r11) => {
        t12.push(...0 === r11 ? [] : [`
`], .../* @__PURE__ */ function(e13) {
          let { vnode: t13, recurseCount: r12 } = e13, o11 = r12 > 0 ? `... (${r12} recursive calls)` : "", i11 = !!t13.component && null == t13.component.parent, l11 = ` at <${oC(t13.component, t13.type, i11)}`, a11 = ">" + o11;
          return t13.props ? [l11, .../* @__PURE__ */ function(e14) {
            let t14 = [], r13 = /* @__PURE__ */ Object.keys(e14);
            return r13.slice(0, 3).forEach((r14) => {
              t14.push(.../* @__PURE__ */ function e15(t15, r15, o12) {
                return F(r15) ? (r15 = /* @__PURE__ */ JSON.stringify(r15), o12 ? r15 : [`${t15}=${r15}`]) : "number" == typeof r15 || "boolean" == typeof r15 || null == r15 ? o12 ? r15 : [`${t15}=${r15}`] : tO(r15) ? (r15 = /* @__PURE__ */ e15(t15, /* @__PURE__ */ tb(r15.value), true), o12 ? r15 : [`${t15}=Ref<`, r15, ">"]) : L(r15) ? [`${t15}=fn${r15.name ? `<${r15.name}>` : ""}`] : (r15 = /* @__PURE__ */ tb(r15), o12 ? r15 : [`${t15}=`, r15]);
              }(r14, e14[r14]));
            }), r13.length > 3 && t14.push(" ..."), t14;
          }(t13.props), a11] : [l11 + a11];
        }(e12));
      }), t12;
    }(a10)), console.warn(...t11);
  }
  eO();
}
let tV = { sp: "serverPrefetch hook", bc: "beforeCreate hook", c: "created hook", bm: "beforeMount hook", m: "mounted hook", bu: "beforeUpdate hook", u: "updated", bum: "beforeUnmount hook", um: "unmounted hook", a: "activated hook", da: "deactivated hook", ec: "errorCaptured hook", rtc: "renderTracked hook", rtg: "renderTriggered hook", 0: "setup function", 1: "render function", 2: "watcher getter", 3: "watcher callback", 4: "watcher cleanup function", 5: "native event handler", 6: "component event handler", 7: "vnode hook", 8: "directive hook", 9: "transition hook", 10: "app errorHandler", 11: "app warnHandler", 12: "ref function", 13: "async component loader", 14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ." };
function tD(e10, t10, r10, o10) {
  let i10;
  try {
    i10 = o10 ? e10(...o10) : e10();
  } catch (e11) {
    tz(e11, t10, r10);
  }
  return i10;
}
function tU(e10, t10, r10, o10) {
  if (L(e10)) {
    let i11 = /* @__PURE__ */ tD(e10, t10, r10, o10);
    return i11 && D(i11) && i11.catch((e11) => {
      tz(e11, t10, r10);
    }), i11;
  }
  let i10 = [];
  for (let l10 = 0; l10 < e10.length; l10++)
    i10.push(/* @__PURE__ */ tU(e10[l10], t10, r10, o10));
  return i10;
}
function tz(e10, t10, r10) {
  let o10 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3], i10 = t10 ? t10.vnode : null;
  if (t10) {
    let o11 = t10.parent, i11 = t10.proxy, l10 = tV[r10];
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
      tD(a10, null, 10, [e10, i11, l10]);
      return;
    }
  }
  !function(e11, t11, r11) {
    let o11 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    {
      let i11 = tV[t11];
      if (r11 && tL(r11), tN(`Unhandled error${i11 ? ` during execution of ${i11}` : ""}`), r11 && tF(), o11)
        throw e11;
      console.error(e11);
    }
  }(e10, r10, i10, o10);
}
let tB = false, tW = false, tq = [], tH = 0, tG = [], tK = null, tY = 0, tJ = /* @__PURE__ */ Promise.resolve(), tQ = null;
function tX(e10) {
  let t10 = tQ || tJ;
  return e10 ? t10.then(this ? e10.bind(this) : e10) : t10;
}
function tZ(e10) {
  tq.length && tq.includes(e10, tB && e10.allowRecurse ? tH + 1 : tH) || (null == e10.id ? tq.push(e10) : tq.splice(/* @__PURE__ */ function(e11) {
    let t10 = tH + 1, r10 = tq.length;
    for (; t10 < r10; ) {
      let o10 = t10 + r10 >>> 1, i10 = tq[o10], l10 = /* @__PURE__ */ t4(i10);
      l10 < e11 || l10 === e11 && i10.pre ? t10 = o10 + 1 : r10 = o10;
    }
    return t10;
  }(e10.id), 0, e10), t0());
}
function t0() {
  tB || tW || (tW = true, tQ = /* @__PURE__ */ tJ.then(function e10(t10) {
    tW = false, tB = true, t10 = t10 || /* @__PURE__ */ new Map(), tq.sort(t6);
    let r10 = (e11) => t8(t10, e11);
    try {
      for (tH = 0; tH < tq.length; tH++) {
        let e11 = tq[tH];
        if (e11 && false !== e11.active) {
          if (r10(e11))
            continue;
          tD(e11, null, 14);
        }
      }
    } finally {
      tH = 0, tq.length = 0, t3(t10), tB = false, tQ = null, (tq.length || tG.length) && e10(t10);
    }
  }));
}
function t1(e10) {
  I(e10) ? tG.push(...e10) : tK && tK.includes(e10, e10.allowRecurse ? tY + 1 : tY) || tG.push(e10), t0();
}
function t2(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : tB ? tH + 1 : 0;
  for (t10 = t10 || /* @__PURE__ */ new Map(); r10 < tq.length; r10++) {
    let o10 = tq[r10];
    if (o10 && o10.pre) {
      if (e10 && o10.id !== e10.uid || t8(t10, o10))
        continue;
      tq.splice(r10, 1), r10--, o10();
    }
  }
}
function t3(e10) {
  if (tG.length) {
    let t10 = /* @__PURE__ */ [...new Set(tG)].sort((e11, t11) => t4(e11) - t4(t11));
    if (tG.length = 0, tK) {
      tK.push(...t10);
      return;
    }
    for (tY = 0, tK = t10, e10 = e10 || /* @__PURE__ */ new Map(); tY < tK.length; tY++)
      t8(e10, tK[tY]) || tK[tY]();
    tK = null, tY = 0;
  }
}
let t4 = (e10) => null == e10.id ? 1 / 0 : e10.id, t6 = (e10, t10) => {
  let r10 = t4(e10) - t4(t10);
  if (0 === r10) {
    if (e10.pre && !t10.pre)
      return -1;
    if (t10.pre && !e10.pre)
      return 1;
  }
  return r10;
};
function t8(e10, t10) {
  if (e10.has(t10)) {
    let r10 = /* @__PURE__ */ e10.get(t10);
    if (r10 > 100) {
      let e11 = t10.ownerInstance, r11 = e11 && oO(e11.type);
      return tz(`Maximum recursive updates exceeded${r11 ? ` in component <${r11}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`, null, 10), true;
    }
    e10.set(t10, r10 + 1);
  } else
    e10.set(t10, 1);
}
let t5 = false, t7 = /* @__PURE__ */ new Set();
el().__VUE_HMR_RUNTIME__ = { createRecord: /* @__PURE__ */ nr(ne), rerender: /* @__PURE__ */ nr(function(e10, t10) {
  let r10 = /* @__PURE__ */ t9.get(e10);
  r10 && (r10.initialDef.render = t10, [...r10.instances].forEach((e11) => {
    t10 && (e11.render = t10, nt(e11.type).render = t10), e11.renderCache = [], t5 = true, e11.effect.dirty = true, e11.update(), t5 = false;
  }));
}), reload: /* @__PURE__ */ nr(function(e10, t10) {
  let r10 = /* @__PURE__ */ t9.get(e10);
  if (!r10)
    return;
  t10 = /* @__PURE__ */ nt(t10), nn(r10.initialDef, t10);
  let o10 = [...r10.instances];
  for (let e11 of o10) {
    let o11 = /* @__PURE__ */ nt(e11.type);
    t7.has(o11) || (o11 !== r10.initialDef && nn(o11, t10), t7.add(o11)), e11.appContext.propsCache.delete(e11.type), e11.appContext.emitsCache.delete(e11.type), e11.appContext.optionsCache.delete(e11.type), e11.ceReload ? (t7.add(o11), e11.ceReload(t10.styles), t7.delete(o11)) : e11.parent ? (e11.parent.effect.dirty = true, tZ(e11.parent.update)) : e11.appContext.reload ? e11.appContext.reload() : "undefined" != typeof window ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  t1(() => {
    for (let e11 of o10)
      t7.delete(/* @__PURE__ */ nt(e11.type));
  });
}) };
let t9 = /* @__PURE__ */ new Map();
function ne(e10, t10) {
  return !t9.has(e10) && (t9.set(e10, { initialDef: /* @__PURE__ */ nt(t10), instances: /* @__PURE__ */ new Set() }), true);
}
function nt(e10) {
  return oE(e10) ? e10.__vccOpts : e10;
}
function nn(e10, t10) {
  for (let r10 in P(e10, t10), e10)
    "__file" === r10 || r10 in t10 || delete e10[r10];
}
function nr(e10) {
  return (t10, r10) => {
    try {
      return e10(t10, r10);
    } catch (e11) {
      console.error(e11), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let no = [], ni = false;
function nl(e10) {
  for (var t10 = arguments.length, r10 = Array(t10 > 1 ? t10 - 1 : 0), i10 = 1; i10 < t10; i10++)
    r10[i10 - 1] = arguments[i10];
  o ? o.emit(e10, ...r10) : ni || no.push({ event: e10, args: r10 });
}
let na = /* @__PURE__ */ nf("component:added"), ns = /* @__PURE__ */ nf("component:updated"), nu = /* @__PURE__ */ nf("component:removed"), nc = (e10) => {
  o && "function" == typeof o.cleanupBuffer && // remove the component if it wasn't buffered
  !o.cleanupBuffer(e10) && nu(e10);
};
function nf(e10) {
  return (t10) => {
    nl(e10, t10.appContext.app, t10.uid, t10.parent ? t10.parent.uid : void 0, t10);
  };
}
let np = /* @__PURE__ */ nh("perf:start"), nd = /* @__PURE__ */ nh("perf:end");
function nh(e10) {
  return (t10, r10, o10) => {
    nl(e10, t10.appContext.app, t10.uid, t10, r10, o10);
  };
}
function nv(e10, t10) {
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
        if (L(e11)) {
          let r12 = /* @__PURE__ */ e11(...l10);
          r12 || tN(`Invalid event arguments: event validation failed for event "${t10}".`);
        }
      } else
        o11 && ee(t10) in o11 || tN(`Component emitted event "${t10}" but it is neither declared in the emits option nor as an "${ee(t10)}" prop.`);
    }
  }
  let u2 = l10, c2 = /* @__PURE__ */ t10.startsWith("update:"), f2 = c2 && t10.slice(7);
  if (f2 && f2 in s2) {
    let e11 = `${"modelValue" === f2 ? "model" : f2}Modifiers`, { number: t11, trim: r11 } = s2[e11] || S;
    r11 && (u2 = /* @__PURE__ */ l10.map((e12) => F(e12) ? e12.trim() : e12)), t11 && (u2 = /* @__PURE__ */ l10.map(eo));
  }
  o10 = u2, nl("component:emit", e10.appContext.app, e10, t10, o10);
  {
    let r11 = /* @__PURE__ */ t10.toLowerCase();
    r11 !== t10 && s2[ee(r11)] && tN(`Event "${r11}" is emitted in component ${oC(e10, e10.type)} but the handler is registered for "${t10}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${X(t10)}" instead of "${t10}".`);
  }
  let p2 = s2[r10 = /* @__PURE__ */ ee(t10)] || // also try camelCase event handler (#2249)
  s2[r10 = /* @__PURE__ */ ee(/* @__PURE__ */ J(t10))];
  !p2 && c2 && (p2 = s2[r10 = /* @__PURE__ */ ee(/* @__PURE__ */ X(t10))]), p2 && tU(p2, e10, 6, u2);
  let d2 = s2[r10 + "Once"];
  if (d2) {
    if (e10.emitted) {
      if (e10.emitted[r10])
        return;
    } else
      e10.emitted = {};
    e10.emitted[r10] = true, tU(d2, e10, 6, u2);
  }
}
function nm(e10, t10) {
  return !!(e10 && C(t10)) && (T(e10, (t10 = /* @__PURE__ */ t10.slice(2).replace(/Once$/, ""))[0].toLowerCase() + t10.slice(1)) || T(e10, /* @__PURE__ */ X(t10)) || T(e10, t10));
}
let ng = null, ny = null;
function nb(e10) {
  let t10 = ng;
  return ng = e10, ny = e10 && e10.type.__scopeId || null, t10;
}
let n_ = false;
function nw(e10) {
  let t10, r10, o10;
  let { type: i10, vnode: l10, proxy: a10, withProxy: s2, props: u2, propsOptions: [c2], slots: f2, attrs: p2, emit: d2, render: h2, renderCache: m2, data: g2, setupState: y2, ctx: b2, inheritAttrs: _2 } = e10, w2 = /* @__PURE__ */ nb(e10);
  n_ = false;
  try {
    if (4 & l10.shapeFlag) {
      let e11 = s2 || a10, o11 = y2.__isScriptSetup ? new Proxy(e11, { get: (e12, t11, r11) => (tN(`Property '${String(t11)}' was accessed via 'this'. Avoid using 'this' in templates.`), Reflect.get(e12, t11, r11)) }) : e11;
      t10 = /* @__PURE__ */ ol(/* @__PURE__ */ h2.call(o11, e11, m2, u2, y2, g2, b2)), r10 = p2;
    } else
      p2 === u2 && (n_ = true), t10 = /* @__PURE__ */ ol(i10.length > 1 ? i10(u2, { get attrs() {
        return n_ = true, p2;
      }, slots: f2, emit: d2 }) : i10(u2, null)), r10 = i10.props ? p2 : nk(p2);
  } catch (r11) {
    tz(r11, e10, 1), t10 = /* @__PURE__ */ or(r6);
  }
  let x2 = t10;
  if (t10.patchFlag > 0 && 2048 & t10.patchFlag && ([x2, o10] = /* @__PURE__ */ nx(t10)), r10 && false !== _2) {
    let e11 = /* @__PURE__ */ Object.keys(r10), { shapeFlag: t11 } = x2;
    if (e11.length) {
      if (7 & t11)
        c2 && e11.some(E) && (r10 = /* @__PURE__ */ n$(r10, c2)), x2 = /* @__PURE__ */ oo(x2, r10);
      else if (!n_ && x2.type !== r6) {
        let e12 = /* @__PURE__ */ Object.keys(p2), t12 = [], r11 = [];
        for (let o11 = 0, i11 = e12.length; o11 < i11; o11++) {
          let i12 = e12[o11];
          C(i12) ? E(i12) || t12.push(i12[2].toLowerCase() + i12.slice(3)) : r11.push(i12);
        }
        r11.length && tN(`Extraneous non-props attributes (${r11.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), t12.length && tN(`Extraneous non-emits event listeners (${t12.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return l10.dirs && (nO(x2) || tN("Runtime directive used on component with non-element root node. The directives will not function as intended."), (x2 = /* @__PURE__ */ oo(x2)).dirs = x2.dirs ? x2.dirs.concat(l10.dirs) : l10.dirs), l10.transition && (nO(x2) || tN("Component inside <Transition> renders non-element root node that cannot be animated."), x2.transition = l10.transition), o10 ? o10(x2) : t10 = x2, nb(w2), t10;
}
let nx = (e10) => {
  let t10 = e10.children, r10 = e10.dynamicChildren, o10 = /* @__PURE__ */ nS(t10);
  if (!o10)
    return [e10, void 0];
  let i10 = /* @__PURE__ */ t10.indexOf(o10), l10 = r10 ? r10.indexOf(o10) : -1;
  return [/* @__PURE__ */ ol(o10), (o11) => {
    t10[i10] = o11, r10 && (l10 > -1 ? r10[l10] = o11 : o11.patchFlag > 0 && (e10.dynamicChildren = [...r10, o11]));
  }];
};
function nS(e10) {
  let t10;
  for (let r10 = 0; r10 < e10.length; r10++) {
    let o10 = e10[r10];
    if (!r7(o10))
      return;
    if (o10.type !== r6 || "v-if" === o10.children) {
      if (t10)
        return;
      t10 = o10;
    }
  }
  return t10;
}
let nk = (e10) => {
  let t10;
  for (let r10 in e10)
    ("class" === r10 || "style" === r10 || C(r10)) && ((t10 || (t10 = {}))[r10] = e10[r10]);
  return t10;
}, n$ = (e10, t10) => {
  let r10 = {};
  for (let o10 in e10)
    E(o10) && o10.slice(9) in t10 || (r10[o10] = e10[o10]);
  return r10;
}, nO = (e10) => 7 & e10.shapeFlag || e10.type === r6;
function nC(e10, t10, r10) {
  let o10 = /* @__PURE__ */ Object.keys(t10);
  if (o10.length !== Object.keys(e10).length)
    return true;
  for (let i10 = 0; i10 < o10.length; i10++) {
    let l10 = o10[i10];
    if (t10[l10] !== e10[l10] && !nm(r10, l10))
      return true;
  }
  return false;
}
let nE = /* @__PURE__ */ Symbol.for("v-ndc"), nP = (e10) => e10.__isSuspense, nA = /* @__PURE__ */ Symbol.for("v-scx"), nj = () => {
  {
    let e10 = /* @__PURE__ */ rk(nA);
    return e10 || tN("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e10;
  }
}, nT = {};
function nI(e10, t10, r10) {
  return L(t10) || tN("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), nR(e10, t10, r10);
}
function nR(e10, r10) {
  let o10, i10, l10, a10, { immediate: s2, deep: u2, flush: c2, once: f2, onTrack: p2, onTrigger: d2 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : S;
  if (r10 && f2) {
    let e11 = r10;
    r10 = function() {
      for (var t10 = arguments.length, r11 = Array(t10), o11 = 0; o11 < t10; o11++)
        r11[o11] = arguments[o11];
      e11(...r11), C2();
    };
  }
  void 0 !== u2 && "number" == typeof u2 && tN('watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'), r10 || (void 0 !== s2 && tN('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), void 0 !== u2 && tN('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'), void 0 !== f2 && tN('watch() "once" option is only respected when using the watch(source, callback, options?) signature.'));
  let h2 = (e11) => {
    tN("Invalid watch source: ", e11, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, m2 = op, g2 = (e11) => true === u2 ? e11 : nF(e11, false === u2 ? 1 : void 0), y2 = false, b2 = false;
  if (tO(e10) ? (o10 = () => e10.value, y2 = /* @__PURE__ */ tg(e10)) : tv(e10) ? (o10 = () => g2(e10), y2 = true) : I(e10) ? (b2 = true, y2 = /* @__PURE__ */ e10.some((e11) => tv(e11) || tg(e11)), o10 = () => e10.map((e11) => tO(e11) ? e11.value : tv(e11) ? g2(e11) : L(e11) ? tD(e11, m2, 2) : void h2(e11))) : L(e10) ? o10 = r10 ? () => tD(e10, m2, 2) : () => (i10 && i10(), tU(e10, m2, 3, [_2])) : (o10 = $, h2(e10)), r10 && u2) {
    let e11 = o10;
    o10 = () => nF(/* @__PURE__ */ e11());
  }
  let _2 = (e11) => {
    i10 = k2.onStop = () => {
      tD(e11, m2, 4), i10 = k2.onStop = void 0;
    };
  };
  if (ob) {
    if (_2 = $, r10 ? s2 && tU(r10, m2, 3, [/* @__PURE__ */ o10(), b2 ? [] : void 0, _2]) : o10(), "sync" !== c2)
      return $;
    {
      let e11 = /* @__PURE__ */ nj();
      l10 = e11.__watcherHandles || (e11.__watcherHandles = []);
    }
  }
  let w2 = b2 ? Array(e10.length).fill(nT) : nT, x2 = () => {
    if (k2.active && k2.dirty) {
      if (r10) {
        let e11 = /* @__PURE__ */ k2.run();
        (u2 || y2 || (b2 ? e11.some((e12, t10) => et(e12, w2[t10])) : et(e11, w2))) && (i10 && i10(), tU(r10, m2, 3, [
          e11,
          // pass undefined as the old value when it's changed for the first time
          w2 === nT ? void 0 : b2 && w2[0] === nT ? [] : w2,
          _2
        ]), w2 = e11);
      } else
        k2.run();
    }
  };
  x2.allowRecurse = !!r10, "sync" === c2 ? a10 = x2 : "post" === c2 ? a10 = () => rq(x2, m2 && m2.suspense) : (x2.pre = true, m2 && (x2.id = m2.uid), a10 = () => tZ(x2));
  let k2 = new ey(o10, $, a10), O2 = t, C2 = () => {
    k2.stop(), O2 && A(O2.effects, k2);
  };
  return k2.onTrack = p2, k2.onTrigger = d2, r10 ? s2 ? x2() : w2 = /* @__PURE__ */ k2.run() : "post" === c2 ? rq(/* @__PURE__ */ k2.run.bind(k2), m2 && m2.suspense) : k2.run(), l10 && l10.push(C2), C2;
}
function nM(e10, t10, r10) {
  let o10;
  let i10 = this.proxy, l10 = F(e10) ? e10.includes(".") ? nL(i10, e10) : () => i10[e10] : e10.bind(i10, i10);
  L(t10) ? o10 = t10 : (o10 = t10.handler, r10 = t10);
  let a10 = /* @__PURE__ */ oh(this), s2 = /* @__PURE__ */ nR(l10, /* @__PURE__ */ o10.bind(i10), r10);
  return a10(), s2;
}
function nL(e10, t10) {
  let r10 = /* @__PURE__ */ t10.split(".");
  return () => {
    let t11 = e10;
    for (let e11 = 0; e11 < r10.length && t11; e11++)
      t11 = t11[r10[e11]];
    return t11;
  };
}
function nF(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o10 = arguments.length > 3 ? arguments[3] : void 0;
  if (!V(e10) || e10.__v_skip)
    return e10;
  if (t10 && t10 > 0) {
    if (r10 >= t10)
      return e10;
    r10++;
  }
  if ((o10 = o10 || /* @__PURE__ */ new Set()).has(e10))
    return e10;
  if (o10.add(e10), tO(e10))
    nF(e10.value, t10, r10, o10);
  else if (I(e10))
    for (let i10 = 0; i10 < e10.length; i10++)
      nF(e10[i10], t10, r10, o10);
  else if (M(e10) || R(e10))
    e10.forEach((e11) => {
      nF(e11, t10, r10, o10);
    });
  else if (W(e10))
    for (let i10 in e10)
      nF(e10[i10], t10, r10, o10);
  return e10;
}
function nN(e10) {
  G(e10) && tN("Do not use built-in directive ids as custom directive id: " + e10);
}
function nV(e10, t10, r10, o10) {
  let i10 = e10.dirs, l10 = t10 && t10.dirs;
  for (let a10 = 0; a10 < i10.length; a10++) {
    let s2 = i10[a10];
    l10 && (s2.oldValue = l10[a10].value);
    let u2 = s2.dir[o10];
    u2 && (e$(), tU(u2, r10, 8, [e10.el, s2, e10, t10]), eO());
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
  let r10, { slots: o10 } = t10, i10 = /* @__PURE__ */ od(), l10 = /* @__PURE__ */ function() {
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
        s3.type === r3 ? (128 & s3.patchFlag && l11++, i11 = /* @__PURE__ */ i11.concat(/* @__PURE__ */ e11(s3.children, r11, u3))) : (r11 || s3.type !== r6) && i11.push(null != u3 ? oo(s3, { key: u3 }) : s3);
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
        if (r11.type !== r6) {
          if (e11) {
            tN("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
            break;
          }
          a10 = r11, e11 = true;
        }
    }
    let s2 = /* @__PURE__ */ tb(e10), { mode: u2 } = s2;
    if (u2 && "in-out" !== u2 && "out-in" !== u2 && "default" !== u2 && tN(`invalid <transition> mode: ${u2}`), l10.isLeaving)
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
    if (d2 && d2.type !== r6 && (!r9(c2, d2) || h2)) {
      let e11 = /* @__PURE__ */ nH(d2, s2, l10, i10);
      if (nY(d2, e11), "out-in" === u2)
        return l10.isLeaving = true, e11.afterLeave = () => {
          l10.isLeaving = false, false !== i10.update.active && (i10.effect.dirty = true, i10.update());
        }, nG(a10);
      "in-out" === u2 && c2.type !== r6 && (e11.delayLeave = (e12, t12, r11) => {
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
    e11 && tU(e11, o10, 9, t11);
  }, k2 = (e11, t11) => {
    let r11 = t11[1];
    S2(e11, t11), I(e11) ? e11.every((e12) => e12.length <= 1) && r11() : e11.length <= 1 && r11();
  }, $2 = { mode: l10, persisted: a10, beforeEnter(t11) {
    let o11 = s2;
    if (!r10.isMounted) {
      if (!i10)
        return;
      o11 = g2 || s2;
    }
    t11[nD] && t11[nD](true);
    let l11 = x2[w2];
    l11 && r9(e10, l11) && l11.el[nD] && l11.el[nD](), S2(o11, [t11]);
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
    return (e10 = /* @__PURE__ */ oo(e10)).children = null, e10;
}
function nK(e10) {
  return nX(e10) ? (
    // it's been replaced during HMR
    e10.component ? e10.component.subTree : e10.children ? e10.children[0] : void 0
  ) : e10;
}
function nY(e10, t10) {
  6 & e10.shapeFlag && e10.component ? nY(e10.component.subTree, t10) : 128 & e10.shapeFlag ? (e10.ssContent.transition = /* @__PURE__ */ t10.clone(e10.ssContent), e10.ssFallback.transition = /* @__PURE__ */ t10.clone(e10.ssFallback)) : e10.transition = t10;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function nJ(e10, t10) {
  return L(e10) ? P({ name: e10.name }, t10, { setup: e10 }) : e10;
}
let nQ = (e10) => !!e10.type.__asyncLoader, nX = (e10) => e10.type.__isKeepAlive;
function nZ(e10, t10) {
  n1(e10, "a", t10);
}
function n0(e10, t10) {
  n1(e10, "da", t10);
}
function n1(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : op, o10 = e10.__wdc || (e10.__wdc = () => {
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
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : op, o10 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  if (r10) {
    let i10 = r10[e10] || (r10[e10] = []), l10 = t10.__weh || (t10.__weh = function() {
      for (var o11 = arguments.length, i11 = Array(o11), l11 = 0; l11 < o11; l11++)
        i11[l11] = arguments[l11];
      if (r10.isUnmounted)
        return;
      e$();
      let a10 = /* @__PURE__ */ oh(r10), s2 = /* @__PURE__ */ tU(t10, r10, e10, i11);
      return a10(), eO(), s2;
    });
    return o10 ? i10.unshift(l10) : i10.push(l10), l10;
  }
  {
    let t11 = /* @__PURE__ */ ee(/* @__PURE__ */ tV[e10].replace(/ hook$/, ""));
    tN(`${t11} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
let n3 = (e10) => function(t10) {
  let r10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : op;
  return (!ob || "sp" === e10) && n2(e10, function() {
    for (var e11 = arguments.length, r11 = Array(e11), o10 = 0; o10 < e11; o10++)
      r11[o10] = arguments[o10];
    return t10(...r11);
  }, r10);
}, n4 = /* @__PURE__ */ n3("bm"), n6 = /* @__PURE__ */ n3("m"), n8 = /* @__PURE__ */ n3("bu"), n5 = /* @__PURE__ */ n3("u"), n7 = /* @__PURE__ */ n3("bum"), n9 = /* @__PURE__ */ n3("um"), re = /* @__PURE__ */ n3("sp"), rt = /* @__PURE__ */ n3("rtg"), rn = /* @__PURE__ */ n3("rtc");
function rr(e10) {
  let t10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : op;
  n2("ec", e10, t10);
}
let ro = (e10) => e10 ? oy(e10) ? oS(e10) || e10.proxy : ro(e10.parent) : null, ri = (
  // due to type annotation
  /* @__PURE__ */ P(/* @__PURE__ */ Object.create(null), { $: (e10) => e10, $el: (e10) => e10.vnode.el, $data: (e10) => e10.data, $props: (e10) => td(e10.props), $attrs: (e10) => td(e10.attrs), $slots: (e10) => td(e10.slots), $refs: (e10) => td(e10.refs), $parent: (e10) => ro(e10.parent), $root: (e10) => ro(e10.root), $emit: (e10) => e10.emit, $options: (e10) => rp(e10), $forceUpdate: (e10) => e10.f || (e10.f = () => {
    e10.effect.dirty = true, tZ(e10.update);
  }), $nextTick: (e10) => e10.n || (e10.n = /* @__PURE__ */ tX.bind(e10.proxy)), $watch: (e10) => nM.bind(e10) })
), rl = (e10) => "_" === e10 || "$" === e10, ra = (e10, t10) => e10 !== S && !e10.__isScriptSetup && T(e10, t10), rs = { get(e10, t10) {
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
      if (u2 !== S && T(u2, t10))
        return f2[t10] = 2, u2[t10];
      if (
        // props
        (r10 = l10.propsOptions[0]) && T(r10, t10)
      )
        return f2[t10] = 3, c2[t10];
      if (a10 !== S && T(a10, t10))
        return f2[t10] = 4, a10[t10];
      rc && (f2[t10] = 0);
    }
  }
  let h2 = ri[t10];
  return h2 ? ("$attrs" === t10 ? (eM(l10, "get", t10), n_ = true) : "$slots" === t10 && eM(l10, "get", t10), h2(l10)) : (o10 = p2.__cssModules) && (o10 = o10[t10]) ? o10 : a10 !== S && T(a10, t10) ? (f2[t10] = 4, a10[t10]) : T(i10 = d2.config.globalProperties, t10) ? i10[t10] : void (ng && (!F(t10) || // #1091 avoid internal isRef/isVNode checks on component instance leading
  // to infinite warning loop
  0 !== t10.indexOf("__v")) && (u2 !== S && rl(t10[0]) && T(u2, t10) ? tN(`Property ${JSON.stringify(t10)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : l10 === ng && tN(`Property ${JSON.stringify(t10)} was accessed during render but is not defined on instance.`)));
}, set(e10, t10, r10) {
  let { _: o10 } = e10, { data: i10, setupState: l10, ctx: a10 } = o10;
  return ra(l10, t10) ? (l10[t10] = r10, true) : l10.__isScriptSetup && T(l10, t10) ? (tN(`Cannot mutate <script setup> binding "${t10}" from Options API.`), false) : i10 !== S && T(i10, t10) ? (i10[t10] = r10, true) : T(o10.props, t10) ? (tN(`Attempting to mutate prop "${t10}". Props are readonly.`), false) : "$" === t10[0] && t10.slice(1) in o10 ? (tN(`Attempting to mutate public property "${t10}". Properties starting with $ are reserved and readonly.`), false) : (t10 in o10.appContext.config.globalProperties ? Object.defineProperty(a10, t10, { enumerable: true, configurable: true, value: r10 }) : a10[t10] = r10, true);
}, has(e10, t10) {
  let r10, { _: { data: o10, setupState: i10, accessCache: l10, ctx: a10, appContext: s2, propsOptions: u2 } } = e10;
  return !!l10[t10] || o10 !== S && T(o10, t10) || ra(i10, t10) || (r10 = u2[0]) && T(r10, t10) || T(a10, t10) || T(ri, t10) || T(s2.config.globalProperties, t10);
}, defineProperty(e10, t10, r10) {
  return null != r10.get ? e10._.accessCache[t10] = 0 : T(r10, "value") && this.set(e10, t10, r10.value, null), Reflect.defineProperty(e10, t10, r10);
} };
function ru(e10) {
  return I(e10) ? e10.reduce((e11, t10) => (e11[t10] = null, e11), {}) : e10;
}
rs.ownKeys = (e10) => (tN("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e10));
let rc = true;
function rf(e10, t10, r10) {
  tU(I(e10) ? e10.map((e11) => e11.bind(t10.proxy)) : e10.bind(t10.proxy), t10, r10);
}
function rp(e10) {
  let t10;
  let r10 = e10.type, { mixins: o10, extends: i10 } = r10, { mixins: l10, optionsCache: a10, config: { optionMergeStrategies: s2 } } = e10.appContext, u2 = /* @__PURE__ */ a10.get(r10);
  return u2 ? t10 = u2 : l10.length || o10 || i10 ? (t10 = {}, l10.length && l10.forEach((e11) => rd(t10, e11, s2, true)), rd(t10, r10, s2)) : t10 = r10, V(r10) && a10.set(r10, t10), t10;
}
function rd(e10, t10, r10) {
  let o10 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], { mixins: i10, extends: l10 } = t10;
  for (let a10 in l10 && rd(e10, l10, r10, true), i10 && i10.forEach((t11) => rd(e10, t11, r10, true)), t10)
    if (o10 && "expose" === a10)
      tN('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
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
    let r10 = /* @__PURE__ */ P(/* @__PURE__ */ Object.create(null), e10);
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
    return P(L(e10) ? e10.call(this, this) : e10, L(t10) ? t10.call(this, this) : t10);
  } : t10 : e10;
}
function rm(e10) {
  if (I(e10)) {
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
  return e10 ? P(/* @__PURE__ */ Object.create(null), e10, t10) : t10;
}
function rb(e10, t10) {
  return e10 ? I(e10) && I(t10) ? [.../* @__PURE__ */ new Set([...e10, ...t10])] : P(/* @__PURE__ */ Object.create(null), /* @__PURE__ */ ru(e10), /* @__PURE__ */ ru(null != t10 ? t10 : {})) : t10;
}
function r_() {
  return { app: null, config: { isNativeTag: O, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
}
let rw = 0, rx = null;
function rS(e10, t10) {
  if (op) {
    let r10 = op.provides, o10 = op.parent && op.parent.provides;
    o10 === r10 && (r10 = op.provides = /* @__PURE__ */ Object.create(o10)), r10[e10] = t10;
  } else
    tN("provide() can only be used inside setup().");
}
function rk(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o10 = op || ng;
  if (o10 || rx) {
    let i10 = o10 ? null == o10.parent ? o10.vnode.appContext && o10.vnode.appContext.provides : o10.parent.provides : rx._context.provides;
    if (i10 && e10 in i10)
      return i10[e10];
    if (arguments.length > 1)
      return r10 && L(t10) ? t10.call(o10 && o10.proxy) : t10;
    tN(`injection "${String(e10)}" not found.`);
  } else
    tN("inject() can only be used inside setup() or functional components.");
}
function r$(e10, t10, r10, o10) {
  let i10;
  let [l10, a10] = e10.propsOptions, s2 = false;
  if (t10)
    for (let u2 in t10) {
      let c2;
      if (H(u2))
        continue;
      let f2 = t10[u2];
      l10 && T(l10, c2 = /* @__PURE__ */ J(u2)) ? a10 && a10.includes(c2) ? (i10 || (i10 = {}))[c2] = f2 : r10[c2] = f2 : nm(e10.emitsOptions, u2) || u2 in o10 && f2 === o10[u2] || (o10[u2] = f2, s2 = true);
    }
  if (a10) {
    let t11 = /* @__PURE__ */ tb(r10), o11 = i10 || S;
    for (let i11 = 0; i11 < a10.length; i11++) {
      let s3 = a10[i11];
      r10[s3] = /* @__PURE__ */ rO(l10, t11, s3, o11[s3], e10, !T(o11, s3));
    }
  }
  return s2;
}
function rO(e10, t10, r10, o10, i10, l10) {
  let a10 = e10[r10];
  if (null != a10) {
    let e11 = /* @__PURE__ */ T(a10, "default");
    if (e11 && void 0 === o10) {
      let e12 = a10.default;
      if (a10.type !== Function && !a10.skipFactory && L(e12)) {
        let { propsDefaults: l11 } = i10;
        if (r10 in l11)
          o10 = l11[r10];
        else {
          let a11 = /* @__PURE__ */ oh(i10);
          o10 = l11[r10] = /* @__PURE__ */ e12.call(null, t10), a11();
        }
      } else
        o10 = e12;
    }
    a10[0] && (l10 && !e11 ? o10 = false : a10[1] && ("" === o10 || o10 === X(r10)) && (o10 = true));
  }
  return o10;
}
function rC(e10) {
  return "$" !== e10[0] || (tN(`Invalid prop name: "${e10}" is a reserved property.`), false);
}
function rE(e10) {
  let t10 = e10 && e10.toString().match(/^\s*(function|class) (\w+)/);
  return t10 ? t10[2] : null === e10 ? "null" : "";
}
function rP(e10, t10) {
  return I(t10) ? t10.findIndex((t11) => rE(t11) === rE(e10)) : L(t10) ? rE(t10) === rE(e10) ? 0 : -1 : -1;
}
function rA(e10, t10, r10) {
  let o10 = /* @__PURE__ */ tb(t10), i10 = r10.propsOptions[0];
  for (let t11 in i10) {
    let r11 = i10[t11];
    null != r11 && function(e11, t12, r12, o11, i11) {
      let { type: l10, required: a10, validator: s2, skipCheck: u2 } = r12;
      if (a10 && i11) {
        tN('Missing required prop: "' + e11 + '"');
        return;
      }
      if (null != t12 || a10) {
        if (null != l10 && true !== l10 && !u2) {
          let r13 = false, o12 = I(l10) ? l10 : [l10], i12 = [];
          for (let e12 = 0; e12 < o12.length && !r13; e12++) {
            let { valid: l11, expectedType: a11 } = function(e13, t13) {
              let r14;
              let o13 = /* @__PURE__ */ rE(t13);
              if (rj(o13)) {
                let i13 = typeof e13;
                (r14 = i13 === o13.toLowerCase()) || "object" !== i13 || (r14 = e13 instanceof t13);
              } else
                r14 = "Object" === o13 ? /* @__PURE__ */ V(e13) : "Array" === o13 ? /* @__PURE__ */ I(e13) : "null" === o13 ? null === e13 : e13 instanceof t13;
              return { valid: r14, expectedType: o13 };
            }(t12, o12[e12]);
            i12.push(a11 || ""), r13 = l11;
          }
          if (!r13) {
            tN(/* @__PURE__ */ function(e12, t13, r14) {
              if (0 === r14.length)
                return `Prop type [] for prop "${e12}" won't match anything. Did you mean to use type Array instead?`;
              let o13 = `Invalid prop: type check failed for prop "${e12}". Expected ${r14.map(Z).join(" | ")}`, i13 = r14[0], l11 = /* @__PURE__ */ B(t13), a11 = /* @__PURE__ */ rT(t13, i13), s3 = /* @__PURE__ */ rT(t13, l11);
              return 1 === r14.length && rI(i13) && !function() {
                for (var e13 = arguments.length, t14 = Array(e13), r15 = 0; r15 < e13; r15++)
                  t14[r15] = arguments[r15];
                return t14.some((e14) => "boolean" === e14.toLowerCase());
              }(i13, l11) && (o13 += ` with value ${a11}`), o13 += `, got ${l11} `, rI(l11) && (o13 += `with value ${s3}.`), o13;
            }(e11, t12, i12));
            return;
          }
        }
        s2 && !s2(t12, o11) && tN('Invalid prop: custom validator check failed for prop "' + e11 + '".');
      }
    }(t11, o10[t11], r11, /* @__PURE__ */ td(o10), !T(e10, t11) && !T(e10, /* @__PURE__ */ X(t11)));
  }
}
let rj = /* @__PURE__ */ x("String,Number,Boolean,Function,Symbol,BigInt");
function rT(e10, t10) {
  return "String" === t10 ? `"${e10}"` : "Number" === t10 ? `${Number(e10)}` : `${e10}`;
}
function rI(e10) {
  return ["string", "number", "boolean"].some((t10) => e10.toLowerCase() === t10);
}
let rR = (e10) => "_" === e10[0] || "$stable" === e10, rM = (e10) => I(e10) ? e10.map(ol) : [/* @__PURE__ */ ol(e10)], rL = (e10, t10, r10) => {
  if (t10._n)
    return t10;
  let o10 = /* @__PURE__ */ function(e11) {
    let t11 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ng;
    if (arguments.length > 2 && arguments[2], !t11 || e11._n)
      return e11;
    let r11 = function() {
      let o11;
      for (var i10 = arguments.length, l10 = Array(i10), a10 = 0; a10 < i10; a10++)
        l10[a10] = arguments[a10];
      r11._d && (r5 += -1);
      let s2 = /* @__PURE__ */ nb(t11);
      try {
        o11 = /* @__PURE__ */ e11(...l10);
      } finally {
        nb(s2), r11._d && (r5 += 1);
      }
      return ns(t11), o11;
    };
    return r11._n = true, r11._c = true, r11._d = true, r11;
  }(function() {
    for (var r11 = arguments.length, o11 = Array(r11), i10 = 0; i10 < r11; i10++)
      o11[i10] = arguments[i10];
    return op && tN(`Slot "${e10}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), rM(/* @__PURE__ */ t10(...o11));
  }, r10);
  return o10._c = false, o10;
}, rF = (e10, t10, r10) => {
  let o10 = e10._ctx;
  for (let r11 in e10) {
    if (rR(r11))
      continue;
    let i10 = e10[r11];
    if (L(i10))
      t10[r11] = /* @__PURE__ */ rL(r11, i10, o10);
    else if (null != i10) {
      tN(`Non-function value encountered for slot "${r11}". Prefer function slots for better performance.`);
      let e11 = /* @__PURE__ */ rM(i10);
      t10[r11] = () => e11;
    }
  }
}, rN = (e10, t10) => {
  nX(e10.vnode) || tN("Non-function value encountered for default slot. Prefer function slots for better performance.");
  let r10 = /* @__PURE__ */ rM(t10);
  e10.slots.default = () => r10;
}, rV = (e10, t10) => {
  if (32 & e10.vnode.shapeFlag) {
    let r10 = t10._;
    r10 ? (e10.slots = /* @__PURE__ */ tb(t10), er(t10, "_", r10)) : rF(t10, e10.slots = {});
  } else
    e10.slots = {}, t10 && rN(e10, t10);
  er(e10.slots, oe, 1);
}, rD = (e10, t10, r10) => {
  let { vnode: o10, slots: i10 } = e10, l10 = true, a10 = S;
  if (32 & o10.shapeFlag) {
    let o11 = t10._;
    o11 ? t5 ? (P(i10, t10), eL(e10, "set", "$slots")) : r10 && 1 === o11 ? l10 = false : (P(i10, t10), r10 || 1 !== o11 || delete i10._) : (l10 = !t10.$stable, rF(t10, i10)), a10 = t10;
  } else
    t10 && (rN(e10, t10), a10 = { default: 1 });
  if (l10)
    for (let e11 in i10)
      rR(e11) || null != a10[e11] || delete i10[e11];
};
function rU(e10, t10, r10, o10) {
  let i10 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
  if (I(e10)) {
    e10.forEach((e11, l11) => rU(e11, t10 && (I(t10) ? t10[l11] : t10), r10, o10, i10));
    return;
  }
  if (nQ(o10) && !i10)
    return;
  let l10 = 4 & o10.shapeFlag ? oS(o10.component) || o10.component.proxy : o10.el, a10 = i10 ? null : l10, { i: s2, r: u2 } = e10;
  if (!s2) {
    tN("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  let c2 = t10 && t10.r, f2 = s2.refs === S ? s2.refs = {} : s2.refs, p2 = s2.setupState;
  if (null != c2 && c2 !== u2 && (F(c2) ? (f2[c2] = null, T(p2, c2) && (p2[c2] = null)) : tO(c2) && (c2.value = null)), L(u2))
    tD(u2, s2, 12, [a10, f2]);
  else {
    let t11 = /* @__PURE__ */ F(u2), o11 = /* @__PURE__ */ tO(u2);
    if (t11 || o11) {
      let s3 = () => {
        if (e10.f) {
          let r11 = t11 ? T(p2, u2) ? p2[u2] : f2[u2] : u2.value;
          i10 ? I(r11) && A(r11, l10) : I(r11) ? r11.includes(l10) || r11.push(l10) : t11 ? (f2[u2] = [l10], T(p2, u2) && (p2[u2] = f2[u2])) : (u2.value = [l10], e10.k && (f2[e10.k] = u2.value));
        } else
          t11 ? (f2[u2] = a10, T(p2, u2) && (p2[u2] = a10)) : o11 ? (u2.value = a10, e10.k && (f2[e10.k] = a10)) : tN("Invalid template ref type:", u2, `(${typeof u2})`);
      };
      a10 ? (s3.id = -1, rq(s3, r10)) : s3();
    } else
      tN("Invalid template ref type:", u2, `(${typeof u2})`);
  }
}
function rz(e10, t10) {
  e10.appContext.config.performance && rW() && l.mark(`vue-${t10}-${e10.uid}`), np(e10, t10, rW() ? l.now() : Date.now());
}
function rB(e10, t10) {
  if (e10.appContext.config.performance && rW()) {
    let r10 = `vue-${t10}-${e10.uid}`, o10 = r10 + ":end";
    l.mark(o10), l.measure(`<${oC(e10, e10.type)}> ${t10}`, r10, o10), l.clearMarks(r10), l.clearMarks(o10);
  }
  nd(e10, t10, rW() ? l.now() : Date.now());
}
function rW() {
  return void 0 !== i || ("undefined" != typeof window && window.performance ? (i = true, l = window.performance) : i = false), i;
}
let rq = function(e10, t10) {
  t10 && t10.pendingBranch ? I(e10) ? t10.effects.push(...e10) : t10.effects.push(e10) : t1(e10);
};
function rH(e10, t10) {
  let { type: r10, props: o10 } = e10;
  return "svg" === t10 && "foreignObject" === r10 || "mathml" === t10 && "annotation-xml" === r10 && o10 && o10.encoding && o10.encoding.includes("html") ? void 0 : t10;
}
function rG(e10, t10) {
  let { effect: r10, update: o10 } = e10;
  r10.allowRecurse = o10.allowRecurse = t10;
}
function rK(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o10 = e10.children, i10 = t10.children;
  if (I(o10) && I(i10))
    for (let e11 = 0; e11 < o10.length; e11++) {
      let t11 = o10[e11], l10 = i10[e11];
      !(1 & l10.shapeFlag) || l10.dynamicChildren || ((l10.patchFlag <= 0 || 32 === l10.patchFlag) && ((l10 = i10[e11] = /* @__PURE__ */ oa(i10[e11])).el = t11.el), r10 || rK(t11, l10)), l10.type === r4 && (l10.el = t11.el), l10.type !== r6 || l10.el || (l10.el = t11.el);
    }
}
let rY = (e10) => e10.__isTeleport, rJ = (e10) => e10 && (e10.disabled || "" === e10.disabled), rQ = (e10) => "undefined" != typeof SVGElement && e10 instanceof SVGElement, rX = (e10) => "function" == typeof MathMLElement && e10 instanceof MathMLElement, rZ = (e10, t10) => {
  let r10 = e10 && e10.to;
  if (!F(r10))
    return r10 || rJ(e10) || tN(`Invalid Teleport target: ${r10}`), r10;
  if (!t10)
    return tN("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"), null;
  {
    let e11 = /* @__PURE__ */ t10(r10);
    return e11 || tN(`Failed to locate Teleport target with selector "${r10}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`), e11;
  }
};
function r0(e10, t10, r10, o10) {
  let { o: { insert: i10 }, m: l10 } = o10, a10 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2;
  0 === a10 && i10(e10.targetAnchor, t10, r10);
  let { el: s2, anchor: u2, shapeFlag: c2, children: f2, props: p2 } = e10, d2 = 2 === a10;
  if (d2 && i10(s2, t10, r10), (!d2 || rJ(p2)) && 16 & c2)
    for (let e11 = 0; e11 < f2.length; e11++)
      l10(f2[e11], t10, r10, 2);
  d2 && i10(u2, t10, r10);
}
let r1 = { name: "Teleport", __isTeleport: true, process(e10, t10, r10, o10, i10, l10, a10, s2, u2, c2) {
  let { mc: f2, pc: p2, pbc: d2, o: { insert: h2, querySelector: m2, createText: g2, createComment: y2 } } = c2, b2 = /* @__PURE__ */ rJ(t10.props), { shapeFlag: _2, children: w2, dynamicChildren: x2 } = t10;
  if (t5 && (u2 = false, x2 = null), null == e10) {
    let e11 = t10.el = /* @__PURE__ */ y2("teleport start"), c3 = t10.anchor = /* @__PURE__ */ y2("teleport end");
    h2(e11, r10, o10), h2(c3, r10, o10);
    let p3 = t10.target = /* @__PURE__ */ rZ(t10.props, m2), d3 = t10.targetAnchor = /* @__PURE__ */ g2("");
    p3 ? (h2(d3, p3), "svg" === a10 || rQ(p3) ? a10 = "svg" : ("mathml" === a10 || rX(p3)) && (a10 = "mathml")) : b2 || tN("Invalid Teleport target on mount:", p3, `(${typeof p3})`);
    let x3 = (e12, t11) => {
      16 & _2 && f2(w2, e12, t11, i10, l10, a10, s2, u2);
    };
    b2 ? x3(r10, c3) : p3 && x3(p3, d3);
  } else {
    t10.el = e10.el;
    let o11 = t10.anchor = e10.anchor, f3 = t10.target = e10.target, h3 = t10.targetAnchor = e10.targetAnchor, g3 = /* @__PURE__ */ rJ(e10.props), y3 = g3 ? r10 : f3, _3 = g3 ? o11 : h3;
    if ("svg" === a10 || rQ(f3) ? a10 = "svg" : ("mathml" === a10 || rX(f3)) && (a10 = "mathml"), x2 ? (d2(e10.dynamicChildren, x2, y3, i10, l10, a10, s2), rK(e10, t10, true)) : u2 || p2(e10, t10, y3, _3, i10, l10, a10, s2, false), b2)
      g3 ? t10.props && e10.props && t10.props.to !== e10.props.to && (t10.props.to = e10.props.to) : r0(t10, r10, o11, c2, 1);
    else if ((t10.props && t10.props.to) !== (e10.props && e10.props.to)) {
      let e11 = t10.target = /* @__PURE__ */ rZ(t10.props, m2);
      e11 ? r0(t10, e11, null, c2, 0) : tN("Invalid Teleport target on update:", f3, `(${typeof f3})`);
    } else
      g3 && r0(t10, f3, h3, c2, 1);
  }
  r2(t10);
}, remove(e10, t10, r10, o10, i10, l10) {
  let { um: a10, o: { remove: s2 } } = i10, { shapeFlag: u2, children: c2, anchor: f2, targetAnchor: p2, target: d2, props: h2 } = e10;
  if (d2 && s2(p2), l10 && s2(f2), 16 & u2) {
    let e11 = l10 || !rJ(h2);
    for (let o11 = 0; o11 < c2.length; o11++) {
      let i11 = c2[o11];
      a10(i11, t10, r10, e11, !!i11.dynamicChildren);
    }
  }
}, move: r0, hydrate: function(e10, t10, r10, o10, i10, l10, a10, s2) {
  let { o: { nextSibling: u2, parentNode: c2, querySelector: f2 } } = a10, p2 = t10.target = /* @__PURE__ */ rZ(t10.props, f2);
  if (p2) {
    let a11 = p2._lpa || p2.firstChild;
    if (16 & t10.shapeFlag) {
      if (rJ(t10.props))
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
    r2(t10);
  }
  return t10.anchor && u2(t10.anchor);
} };
function r2(e10) {
  let t10 = e10.ctx;
  if (t10 && t10.ut) {
    let r10 = e10.children[0].el;
    for (; r10 && r10 !== e10.targetAnchor; )
      1 === r10.nodeType && r10.setAttribute("data-v-owner", t10.uid), r10 = r10.nextSibling;
    t10.ut();
  }
}
let r3 = /* @__PURE__ */ Symbol.for("v-fgt"), r4 = /* @__PURE__ */ Symbol.for("v-txt"), r6 = /* @__PURE__ */ Symbol.for("v-cmt"), r8 = /* @__PURE__ */ Symbol.for("v-stc"), r5 = 1;
function r7(e10) {
  return !!e10 && true === e10.__v_isVNode;
}
function r9(e10, t10) {
  return 6 & t10.shapeFlag && t7.has(t10.type) ? (e10.shapeFlag &= -257, t10.shapeFlag &= -513, false) : e10.type === t10.type && e10.key === t10.key;
}
let oe = "__vInternal", ot = (e10) => {
  let { key: t10 } = e10;
  return null != t10 ? t10 : null;
}, on = (e10) => {
  let { ref: t10, ref_key: r10, ref_for: o10 } = e10;
  return "number" == typeof t10 && (t10 = "" + t10), null != t10 ? F(t10) || tO(t10) || L(t10) ? { i: ng, r: t10, k: r10, f: !!o10 } : t10 : null;
}, or = function() {
  for (var e10 = arguments.length, t10 = Array(e10), r10 = 0; r10 < e10; r10++)
    t10[r10] = arguments[r10];
  return function(e11) {
    let t11 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r11 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, o10 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, i10 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null, l10 = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
    if (e11 && e11 !== nE || (e11 || tN(`Invalid vnode type when creating vnode: ${e11}.`), e11 = r6), r7(e11)) {
      let o11 = /* @__PURE__ */ oo(e11, t11, true);
      return r11 && os(o11, r11), o11.patchFlag |= -2, o11;
    }
    if (oE(e11) && (e11 = e11.__vccOpts), t11) {
      var a10;
      let { class: e12, style: r12 } = t11 = (a10 = t11) ? ty(a10) || oe in a10 ? P({}, a10) : a10 : null;
      e12 && !F(e12) && (t11.class = /* @__PURE__ */ ef(e12)), V(r12) && (ty(r12) && !I(r12) && (r12 = /* @__PURE__ */ P({}, r12)), t11.style = /* @__PURE__ */ ea(r12));
    }
    let s2 = F(e11) ? 1 : nP(e11) ? 128 : rY(e11) ? 64 : V(e11) ? 4 : L(e11) ? 2 : 0;
    return 4 & s2 && ty(e11) && tN("Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e11 = /* @__PURE__ */ tb(e11)), function(e12) {
      let t12 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r12 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, o11 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, i11 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null, l11 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : e12 === r3 ? 0 : 1, a11 = (arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7]), s3 = { __v_isVNode: true, __v_skip: true, type: e12, props: t12, key: t12 && ot(t12), ref: t12 && on(t12), scopeId: ny, slotScopeIds: null, children: r12, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetAnchor: null, staticCount: 0, shapeFlag: l11, patchFlag: o11, dynamicProps: i11, dynamicChildren: null, appContext: null, ctx: ng };
      return a11 ? (os(s3, r12), 128 & l11 && e12.normalize(s3)) : r12 && (s3.shapeFlag |= F(r12) ? 8 : 16), s3.key != s3.key && tN("VNode created with invalid key (NaN). VNode type:", s3.type), s3;
    }(e11, t11, r11, o10, i10, s2, l10, true);
  }(...t10);
};
function oo(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], { props: o10, ref: i10, patchFlag: l10, children: a10 } = e10, s2 = t10 ? function() {
    for (var e11 = arguments.length, t11 = Array(e11), r11 = 0; r11 < e11; r11++)
      t11[r11] = arguments[r11];
    let o11 = {};
    for (let e12 = 0; e12 < t11.length; e12++) {
      let r12 = t11[e12];
      for (let e13 in r12)
        if ("class" === e13)
          o11.class !== r12.class && (o11.class = /* @__PURE__ */ ef([o11.class, r12.class]));
        else if ("style" === e13)
          o11.style = /* @__PURE__ */ ea([o11.style, r12.style]);
        else if (C(e13)) {
          let t12 = o11[e13], i11 = r12[e13];
          i11 && t12 !== i11 && !(I(t12) && t12.includes(i11)) && (o11[e13] = t12 ? [].concat(t12, i11) : i11);
        } else
          "" !== e13 && (o11[e13] = r12[e13]);
    }
    return o11;
  }(o10 || {}, t10) : o10, u2 = {
    __v_isVNode: true,
    __v_skip: true,
    type: e10.type,
    props: s2,
    key: s2 && ot(s2),
    ref: t10 && t10.ref ? (
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r10 && i10 ? I(i10) ? i10.concat(/* @__PURE__ */ on(t10)) : [i10, /* @__PURE__ */ on(t10)] : on(t10)
    ) : i10,
    scopeId: e10.scopeId,
    slotScopeIds: e10.slotScopeIds,
    children: -1 === l10 && I(a10) ? a10.map(oi) : a10,
    target: e10.target,
    targetAnchor: e10.targetAnchor,
    staticCount: e10.staticCount,
    shapeFlag: e10.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t10 && e10.type !== r3 ? -1 === l10 ? 16 : 16 | l10 : l10,
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
    ssContent: e10.ssContent && oo(e10.ssContent),
    ssFallback: e10.ssFallback && oo(e10.ssFallback),
    el: e10.el,
    anchor: e10.anchor,
    ctx: e10.ctx,
    ce: e10.ce
  };
  return u2;
}
function oi(e10) {
  let t10 = /* @__PURE__ */ oo(e10);
  return I(e10.children) && (t10.children = /* @__PURE__ */ e10.children.map(oi)), t10;
}
function ol(e10) {
  return null == e10 || "boolean" == typeof e10 ? or(r6) : I(e10) ? or(r3, null, /* @__PURE__ */ e10.slice()) : "object" == typeof e10 ? oa(e10) : or(r4, null, /* @__PURE__ */ String(e10));
}
function oa(e10) {
  return null === e10.el && -1 !== e10.patchFlag || e10.memo ? e10 : oo(e10);
}
function os(e10, t10) {
  let r10 = 0, { shapeFlag: o10 } = e10;
  if (null == t10)
    t10 = null;
  else if (I(t10))
    r10 = 16;
  else if ("object" == typeof t10) {
    if (65 & o10) {
      let r11 = t10.default;
      r11 && (r11._c && (r11._d = false), os(e10, /* @__PURE__ */ r11()), r11._c && (r11._d = true));
      return;
    }
    {
      r10 = 32;
      let o11 = t10._;
      o11 || oe in t10 ? 3 === o11 && ng && (1 === ng.slots._ ? t10._ = 1 : (t10._ = 2, e10.patchFlag |= 1024)) : t10._ctx = ng;
    }
  } else
    L(t10) ? (t10 = { default: t10, _ctx: ng }, r10 = 32) : (t10 = /* @__PURE__ */ String(t10), 64 & o10 ? (r10 = 16, t10 = [/* @__PURE__ */ function() {
      let e11 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : " ", t11 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      return or(r4, null, e11, t11);
    }(t10)]) : r10 = 8);
  e10.children = t10, e10.shapeFlag |= r10;
}
function ou(e10, t10, r10) {
  let o10 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
  tU(e10, t10, 7, [r10, o10]);
}
let oc = /* @__PURE__ */ r_(), of = 0, op = null, od = () => op || ng;
{
  let e10 = /* @__PURE__ */ el(), t10 = (t11, r10) => {
    let o10;
    return (o10 = e10[t11]) || (o10 = e10[t11] = []), o10.push(r10), (e11) => {
      o10.length > 1 ? o10.forEach((t12) => t12(e11)) : o10[0](e11);
    };
  };
  a = /* @__PURE__ */ t10("__VUE_INSTANCE_SETTERS__", (e11) => op = e11), s = /* @__PURE__ */ t10("__VUE_SSR_SETTERS__", (e11) => ob = e11);
}
let oh = (e10) => {
  let t10 = op;
  return a(e10), e10.scope.on(), () => {
    e10.scope.off(), a(t10);
  };
}, ov = () => {
  op && op.scope.off(), a(null);
}, om = /* @__PURE__ */ x("slot,component");
function og(e10, t10) {
  let r10 = t10.isNativeTag || O;
  (om(e10) || r10(e10)) && tN("Do not use built-in or reserved HTML elements as component id: " + e10);
}
function oy(e10) {
  return 4 & e10.vnode.shapeFlag;
}
let ob = false;
function o_(e10, t10, r10) {
  L(t10) ? e10.type.__ssrInlineRender ? e10.ssrRender = t10 : e10.render = t10 : V(t10) ? (r7(t10) && tN("setup() should not return VNodes directly - return a render function instead."), e10.devtoolsRawSetupState = t10, e10.setupState = /* @__PURE__ */ tI(t10), function(e11) {
    let { ctx: t11, setupState: r11 } = e11;
    Object.keys(/* @__PURE__ */ tb(r11)).forEach((e12) => {
      if (!r11.__isScriptSetup) {
        if (rl(e12[0])) {
          tN(`setup() return property ${JSON.stringify(e12)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
          return;
        }
        Object.defineProperty(t11, e12, { enumerable: true, configurable: true, get: () => r11[e12], set: $ });
      }
    });
  }(e10)) : void 0 !== t10 && tN(`setup() should return an object. Received: ${null === t10 ? "null" : typeof t10}`), ox(e10, r10);
}
let ow = () => !u;
function ox(e10, t10, r10) {
  let o10 = e10.type;
  if (!e10.render) {
    if (!t10 && u && !o10.render) {
      let t11 = o10.template || rp(e10).template;
      if (t11) {
        rz(e10, "compile");
        let { isCustomElement: r11, compilerOptions: i10 } = e10.appContext.config, { delimiters: l10, compilerOptions: a10 } = o10, s2 = /* @__PURE__ */ P(/* @__PURE__ */ P({ isCustomElement: r11, delimiters: l10 }, i10), a10);
        o10.render = /* @__PURE__ */ u(t11, s2), rB(e10, "compile");
      }
    }
    e10.render = o10.render || $;
  }
  {
    let t11 = /* @__PURE__ */ oh(e10);
    e$();
    try {
      !function(e11) {
        let t12 = /* @__PURE__ */ rp(e11), r11 = e11.proxy, o11 = e11.ctx;
        rc = false, t12.beforeCreate && rf(t12.beforeCreate, e11, "bc");
        let { data: i10, computed: l10, methods: a10, watch: s2, provide: u2, inject: c2, created: f2, beforeMount: p2, mounted: d2, beforeUpdate: h2, updated: m2, activated: g2, deactivated: y2, beforeDestroy: b2, beforeUnmount: _2, destroyed: w2, unmounted: x2, render: S2, renderTracked: k2, renderTriggered: O2, errorCaptured: C2, serverPrefetch: E2, expose: P2, inheritAttrs: A2, components: j2, directives: T2, filters: R2 } = t12, M2 = /* @__PURE__ */ function() {
          let e12 = /* @__PURE__ */ Object.create(null);
          return (t13, r12) => {
            e12[r12] ? tN(`${t13} property "${r12}" is already defined in ${e12[r12]}.`) : e12[r12] = t13;
          };
        }();
        {
          let [t13] = e11.propsOptions;
          if (t13)
            for (let e12 in t13)
              M2("Props", e12);
        }
        if (c2 && function(e12, t13) {
          let r12 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : $;
          for (let o12 in I(e12) && (e12 = /* @__PURE__ */ rm(e12)), e12) {
            let i11;
            let l11 = e12[o12];
            tO(i11 = V(l11) ? "default" in l11 ? /* @__PURE__ */ rk(l11.from || o12, l11.default, true) : /* @__PURE__ */ rk(l11.from || o12) : /* @__PURE__ */ rk(l11)) ? Object.defineProperty(t13, o12, { enumerable: true, configurable: true, get: () => i11.value, set: (e13) => i11.value = e13 }) : t13[o12] = i11, r12("Inject", o12);
          }
        }(c2, o11, M2), a10)
          for (let e12 in a10) {
            let t13 = a10[e12];
            L(t13) ? (Object.defineProperty(o11, e12, { value: /* @__PURE__ */ t13.bind(r11), configurable: true, enumerable: true, writable: true }), M2("Methods", e12)) : tN(`Method "${e12}" has type "${typeof t13}" in the component definition. Did you reference the function correctly?`);
          }
        if (i10) {
          L(i10) || tN("The data option must be a function. Plain object usage is no longer supported.");
          let t13 = /* @__PURE__ */ i10.call(r11, r11);
          if (D(t13) && tN("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), V(t13))
            for (let r12 in e11.data = /* @__PURE__ */ tc(t13), t13)
              M2("Data", r12), rl(r12[0]) || Object.defineProperty(o11, r12, { configurable: true, enumerable: true, get: () => t13[r12], set: $ });
          else
            tN("data() should return an object.");
        }
        if (rc = true, l10)
          for (let e12 in l10) {
            let t13 = l10[e12], i11 = L(t13) ? t13.bind(r11, r11) : L(t13.get) ? t13.get.bind(r11, r11) : $;
            i11 === $ && tN(`Computed property "${e12}" has no getter.`);
            let a11 = !L(t13) && L(t13.set) ? t13.set.bind(r11) : () => {
              tN(`Write operation failed: computed property "${e12}" is readonly.`);
            }, s3 = /* @__PURE__ */ oP({ get: i11, set: a11 });
            Object.defineProperty(o11, e12, { enumerable: true, configurable: true, get: () => s3.value, set: (e13) => s3.value = e13 }), M2("Computed", e12);
          }
        if (s2)
          for (let e12 in s2)
            !function e13(t13, r12, o12, i11) {
              let l11 = i11.includes(".") ? nL(o12, i11) : () => o12[i11];
              if (F(t13)) {
                let e14 = r12[t13];
                L(e14) ? nI(l11, e14) : tN(`Invalid watch handler specified by key "${t13}"`, e14);
              } else if (L(t13))
                nI(l11, /* @__PURE__ */ t13.bind(o12));
              else if (V(t13)) {
                if (I(t13))
                  t13.forEach((t14) => e13(t14, r12, o12, i11));
                else {
                  let e14 = L(t13.handler) ? t13.handler.bind(o12) : r12[t13.handler];
                  L(e14) ? nI(l11, e14, t13) : tN(`Invalid watch handler specified by key "${t13.handler}"`, e14);
                }
              } else
                tN(`Invalid watch option: "${i11}"`, t13);
            }(s2[e12], o11, r11, e12);
        if (u2) {
          let e12 = L(u2) ? u2.call(r11) : u2;
          Reflect.ownKeys(e12).forEach((t13) => {
            rS(t13, e12[t13]);
          });
        }
        function N2(e12, t13) {
          I(t13) ? t13.forEach((t14) => e12(/* @__PURE__ */ t14.bind(r11))) : t13 && e12(/* @__PURE__ */ t13.bind(r11));
        }
        if (f2 && rf(f2, e11, "c"), N2(n4, p2), N2(n6, d2), N2(n8, h2), N2(n5, m2), N2(nZ, g2), N2(n0, y2), N2(rr, C2), N2(rn, k2), N2(rt, O2), N2(n7, _2), N2(n9, x2), N2(re, E2), I(P2)) {
          if (P2.length) {
            let t13 = e11.exposed || (e11.exposed = {});
            P2.forEach((e12) => {
              Object.defineProperty(t13, e12, { get: () => r11[e12], set: (t14) => r11[e12] = t14 });
            });
          } else
            e11.exposed || (e11.exposed = {});
        }
        S2 && e11.render === $ && (e11.render = S2), null != A2 && (e11.inheritAttrs = A2), j2 && (e11.components = j2), T2 && (e11.directives = T2);
      }(e10);
    } finally {
      eO(), t11();
    }
  }
  o10.render || e10.render !== $ || t10 || (o10.template ? tN('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".') : tN("Component is missing template or render function."));
}
function oS(e10) {
  if (e10.exposed)
    return e10.exposeProxy || (e10.exposeProxy = new Proxy(tI(/* @__PURE__ */ t_(e10.exposed)), { get: (t10, r10) => r10 in t10 ? t10[r10] : r10 in ri ? ri[r10](e10) : void 0, has: (e11, t10) => t10 in e11 || t10 in ri }));
}
let ok = /(?:^|[-_])(\w)/g, o$ = (e10) => e10.replace(ok, (e11) => e11.toUpperCase()).replace(/[-_]/g, "");
function oO(e10) {
  let t10 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  return L(e10) ? e10.displayName || e10.name : e10.name || t10 && e10.__name;
}
function oC(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o10 = /* @__PURE__ */ oO(t10);
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
  return o10 ? o$(o10) : r10 ? "App" : "Anonymous";
}
function oE(e10) {
  return L(e10) && "__vccOpts" in e10;
}
let oP = (e10, t10) => function(e11, t11) {
  let r10, o10, i10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], l10 = /* @__PURE__ */ L(e11);
  l10 ? (r10 = e11, o10 = () => {
    console.warn("Write operation failed: computed value is readonly");
  }) : (r10 = e11.get, o10 = e11.set);
  let a10 = new tS(r10, o10, l10 || !o10, i10);
  return t11 && !i10 && (a10.effect.onTrack = t11.onTrack, a10.effect.onTrigger = t11.onTrigger), a10;
}(e10, t10, ob);
function oA(e10, t10, r10) {
  let o10 = arguments.length;
  return 2 !== o10 ? (o10 > 3 ? r10 = /* @__PURE__ */ Array.prototype.slice.call(arguments, 2) : 3 === o10 && r7(r10) && (r10 = [r10]), or(e10, t10, r10)) : !V(t10) || I(t10) ? or(e10, null, t10) : r7(t10) ? or(e10, null, [t10]) : or(e10, t10);
}
function oj(e10) {
  return !!(e10 && e10.__v_isShallow);
}
let oT = "3.4.8", oI = "undefined" != typeof document ? document : null, oR = oI && /* @__PURE__ */ oI.createElement("template"), oM = "transition", oL = "animation", oF = /* @__PURE__ */ Symbol("_vtc"), oN = (e10, t10) => {
  let { slots: r10 } = t10;
  return oA(nW, /* @__PURE__ */ function(e11) {
    let t11 = {};
    for (let r12 in e11)
      r12 in oV || (t11[r12] = e11[r12]);
    if (false === e11.css)
      return t11;
    let { name: r11 = "v", type: o10, duration: i10, enterFromClass: l10 = `${r11}-enter-from`, enterActiveClass: a10 = `${r11}-enter-active`, enterToClass: s2 = `${r11}-enter-to`, appearFromClass: u2 = l10, appearActiveClass: c2 = a10, appearToClass: f2 = s2, leaveFromClass: p2 = `${r11}-leave-from`, leaveActiveClass: d2 = `${r11}-leave-active`, leaveToClass: h2 = `${r11}-leave-to` } = e11, m2 = /* @__PURE__ */ function(e12) {
      if (null == e12)
        return null;
      if (V(e12))
        return [/* @__PURE__ */ oz(e12.enter), /* @__PURE__ */ oz(e12.leave)];
      {
        let t12 = /* @__PURE__ */ oz(e12);
        return [t12, t12];
      }
    }(i10), g2 = m2 && m2[0], y2 = m2 && m2[1], { onBeforeEnter: b2, onEnter: _2, onEnterCancelled: w2, onLeave: x2, onLeaveCancelled: S2, onBeforeAppear: k2 = b2, onAppear: $2 = _2, onAppearCancelled: O2 = w2 } = t11, C2 = (e12, t12, r12) => {
      oW(e12, t12 ? f2 : s2), oW(e12, t12 ? c2 : a10), r12 && r12();
    }, E2 = (e12, t12) => {
      e12._isLeaving = false, oW(e12, p2), oW(e12, h2), oW(e12, d2), t12 && t12();
    }, A2 = (e12) => (t12, r12) => {
      let i11 = e12 ? $2 : _2, a11 = () => C2(t12, e12, r12);
      oD(i11, [t12, a11]), oq(() => {
        oW(t12, e12 ? u2 : l10), oB(t12, e12 ? f2 : s2), oU(i11) || oG(t12, o10, g2, a11);
      });
    };
    return P(t11, { onBeforeEnter(e12) {
      oD(b2, [e12]), oB(e12, l10), oB(e12, a10);
    }, onBeforeAppear(e12) {
      oD(k2, [e12]), oB(e12, u2), oB(e12, c2);
    }, onEnter: /* @__PURE__ */ A2(false), onAppear: /* @__PURE__ */ A2(true), onLeave(e12, t12) {
      e12._isLeaving = true;
      let r12 = () => E2(e12, t12);
      oB(e12, p2), document.body.offsetHeight, oB(e12, d2), oq(() => {
        e12._isLeaving && (oW(e12, p2), oB(e12, h2), oU(x2) || oG(e12, o10, y2, r12));
      }), oD(x2, [e12, r12]);
    }, onEnterCancelled(e12) {
      C2(e12, false), oD(w2, [e12]);
    }, onAppearCancelled(e12) {
      C2(e12, true), oD(O2, [e12]);
    }, onLeaveCancelled(e12) {
      E2(e12), oD(S2, [e12]);
    } });
  }(e10), r10);
};
oN.displayName = "Transition";
let oV = { name: String, type: String, css: { type: Boolean, default: true }, duration: [String, Number, Object], enterFromClass: String, enterActiveClass: String, enterToClass: String, appearFromClass: String, appearActiveClass: String, appearToClass: String, leaveFromClass: String, leaveActiveClass: String, leaveToClass: String };
oN.props = /* @__PURE__ */ P({}, nB, oV);
let oD = function(e10) {
  let t10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
  I(e10) ? e10.forEach((e11) => e11(...t10)) : e10 && e10(...t10);
}, oU = (e10) => !!e10 && (I(e10) ? e10.some((e11) => e11.length > 1) : e10.length > 1);
function oz(e10) {
  var t10;
  let r10 = /* @__PURE__ */ ei(e10);
  return t10 = "<transition> explicit duration", void 0 !== r10 && ("number" != typeof r10 ? tN(`${t10} is not a valid number - got ${JSON.stringify(r10)}.`) : isNaN(r10) && tN(`${t10} is NaN - the duration expression might be incorrect.`)), r10;
}
function oB(e10, t10) {
  t10.split(/\s+/).forEach((t11) => t11 && e10.classList.add(t11)), (e10[oF] || (e10[oF] = /* @__PURE__ */ new Set())).add(t10);
}
function oW(e10, t10) {
  t10.split(/\s+/).forEach((t11) => t11 && e10.classList.remove(t11));
  let r10 = e10[oF];
  r10 && (r10.delete(t10), r10.size || (e10[oF] = void 0));
}
function oq(e10) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e10);
  });
}
let oH = 0;
function oG(e10, t10, r10, o10) {
  let i10 = e10._endId = ++oH, l10 = () => {
    i10 === e10._endId && o10();
  };
  if (r10)
    return setTimeout(l10, r10);
  let { type: a10, timeout: s2, propCount: u2 } = function(e11, t11) {
    let r11 = /* @__PURE__ */ window.getComputedStyle(e11), o11 = (e12) => (r11[e12] || "").split(", "), i11 = /* @__PURE__ */ o11(`${oM}Delay`), l11 = /* @__PURE__ */ o11(`${oM}Duration`), a11 = /* @__PURE__ */ oK(i11, l11), s3 = /* @__PURE__ */ o11(`${oL}Delay`), u3 = /* @__PURE__ */ o11(`${oL}Duration`), c3 = /* @__PURE__ */ oK(s3, u3), f3 = null, p3 = 0, d3 = 0;
    t11 === oM ? a11 > 0 && (f3 = oM, p3 = a11, d3 = l11.length) : t11 === oL ? c3 > 0 && (f3 = oL, p3 = c3, d3 = u3.length) : d3 = (f3 = (p3 = /* @__PURE__ */ Math.max(a11, c3)) > 0 ? a11 > c3 ? oM : oL : null) ? f3 === oM ? l11.length : u3.length : 0;
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
function oK(e10, t10) {
  for (; e10.length < t10.length; )
    e10 = /* @__PURE__ */ e10.concat(e10);
  return Math.max(.../* @__PURE__ */ t10.map((t11, r10) => oY(t11) + oY(e10[r10])));
}
function oY(e10) {
  return "auto" === e10 ? 0 : 1e3 * Number(/* @__PURE__ */ e10.slice(0, -1).replace(",", "."));
}
let oJ = /* @__PURE__ */ Symbol("_vod"), oQ = /* @__PURE__ */ Symbol("CSS_VAR_TEXT"), oX = /[^\\];\s*$/, oZ = /\s*!important$/;
function o0(e10, t10, r10) {
  if (I(r10))
    r10.forEach((r11) => o0(e10, t10, r11));
  else if (null == r10 && (r10 = ""), oX.test(r10) && tN(`Unexpected semicolon at the end of '${t10}' style value: '${r10}'`), t10.startsWith("--"))
    e10.setProperty(t10, r10);
  else {
    let o10 = /* @__PURE__ */ function(e11, t11) {
      let r11 = o2[t11];
      if (r11)
        return r11;
      let o11 = /* @__PURE__ */ J(t11);
      if ("filter" !== o11 && o11 in e11)
        return o2[t11] = o11;
      o11 = /* @__PURE__ */ Z(o11);
      for (let r12 = 0; r12 < o1.length; r12++) {
        let i10 = o1[r12] + o11;
        if (i10 in e11)
          return o2[t11] = i10;
      }
      return t11;
    }(e10, t10);
    oZ.test(r10) ? e10.setProperty(/* @__PURE__ */ X(o10), /* @__PURE__ */ r10.replace(oZ, ""), "important") : e10[o10] = r10;
  }
}
let o1 = ["Webkit", "Moz", "ms"], o2 = {}, o3 = "http://www.w3.org/1999/xlink", o4 = /* @__PURE__ */ Symbol("_vei"), o6 = /(?:Once|Passive|Capture)$/, o8 = 0, o5 = /* @__PURE__ */ Promise.resolve(), o7 = () => o8 || (o5.then(() => o8 = 0), o8 = /* @__PURE__ */ Date.now()), o9 = (e10) => 111 === e10.charCodeAt(0) && 110 === e10.charCodeAt(1) && // lowercase letter
e10.charCodeAt(2) > 96 && 123 > e10.charCodeAt(2), ie = /* @__PURE__ */ P({ patchProp: (e10, t10, r10, o10, i10, l10, a10, s2, u2) => {
  let c2 = "svg" === i10;
  "class" === t10 ? function(e11, t11, r11) {
    let o11 = e11[oF];
    o11 && (t11 = /* @__PURE__ */ (t11 ? [t11, ...o11] : [...o11]).join(" ")), null == t11 ? e11.removeAttribute("class") : r11 ? e11.setAttribute("class", t11) : e11.className = t11;
  }(e10, o10, c2) : "style" === t10 ? function(e11, t11, r11) {
    let o11 = e11.style, i11 = /* @__PURE__ */ F(r11);
    if (r11 && !i11) {
      if (t11 && !F(t11))
        for (let e12 in t11)
          null == r11[e12] && o0(o11, e12, "");
      for (let e12 in r11)
        o0(o11, e12, r11[e12]);
    } else {
      let l11 = o11.display;
      if (i11) {
        if (t11 !== r11) {
          let e12 = o11[oQ];
          e12 && (r11 += ";" + e12), o11.cssText = r11;
        }
      } else
        t11 && e11.removeAttribute("style");
      oJ in e11 && (o11.display = l11);
    }
  }(e10, r10, o10) : C(t10) ? E(t10) || function(e11, t11, r11, o11) {
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
        let r13 = ":" === e12[2] ? e12.slice(3) : X(/* @__PURE__ */ e12.slice(2));
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
            tU(/* @__PURE__ */ function(e14, t13) {
              if (!I(t13))
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
  }(e10, t10, r10, o10, a10) : ("." === t10[0] ? (t10 = /* @__PURE__ */ t10.slice(1), 0) : "^" === t10[0] ? (t10 = /* @__PURE__ */ t10.slice(1), 1) : !function(e11, t11, r11, o11) {
    if (o11)
      return !!("innerHTML" === t11 || "textContent" === t11 || t11 in e11 && o9(t11) && L(r11));
    if ("spellcheck" === t11 || "draggable" === t11 || "translate" === t11 || "form" === t11 || "list" === t11 && "INPUT" === e11.tagName || "type" === t11 && "TEXTAREA" === e11.tagName)
      return false;
    if ("width" === t11 || "height" === t11) {
      let t12 = e11.tagName;
      if ("IMG" === t12 || "VIDEO" === t12 || "CANVAS" === t12 || "SOURCE" === t12)
        return false;
    }
    return !(o9(t11) && F(r11)) && t11 in e11;
  }(e10, t10, o10, c2)) ? ("true-value" === t10 ? e10._trueValue = o10 : "false-value" === t10 && (e10._falseValue = o10), function(e11, t11, r11, o11, i11) {
    if (o11 && t11.startsWith("xlink:"))
      null == r11 ? e11.removeAttributeNS(o3, /* @__PURE__ */ t11.slice(6, t11.length)) : e11.setAttributeNS(o3, t11, r11);
    else {
      let o12 = /* @__PURE__ */ ev(t11);
      null == r11 || o12 && !(r11 || "" === r11) ? e11.removeAttribute(t11) : e11.setAttribute(t11, o12 ? "" : r11);
    }
  }(e10, t10, o10, c2)) : function(e11, t11, r11, o11, i11, l11, a11) {
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
      u3 || tN(`Failed setting prop "${t11}" on <${s3.toLowerCase()}>: value ${r11} is invalid.`, e12);
    }
    u3 && e11.removeAttribute(t11);
  }(e10, t10, o10, l10, a10, s2, u2);
} }, {
  insert: (e10, t10, r10) => {
    t10.insertBefore(e10, r10 || null);
  },
  remove: (e10) => {
    let t10 = e10.parentNode;
    t10 && t10.removeChild(e10);
  },
  createElement: (e10, t10, r10, o10) => {
    let i10 = "svg" === t10 ? oI.createElementNS("http://www.w3.org/2000/svg", e10) : "mathml" === t10 ? oI.createElementNS("http://www.w3.org/1998/Math/MathML", e10) : oI.createElement(e10, r10 ? { is: r10 } : void 0);
    return "select" === e10 && o10 && null != o10.multiple && i10.setAttribute("multiple", o10.multiple), i10;
  },
  createText: (e10) => oI.createTextNode(e10),
  createComment: (e10) => oI.createComment(e10),
  setText: (e10, t10) => {
    e10.nodeValue = t10;
  },
  setElementText: (e10, t10) => {
    e10.textContent = t10;
  },
  parentNode: (e10) => e10.parentNode,
  nextSibling: (e10) => e10.nextSibling,
  querySelector: (e10) => oI.querySelector(e10),
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
      oR.innerHTML = "svg" === o10 ? `<svg>${e10}</svg>` : "mathml" === o10 ? `<math>${e10}</math>` : e10;
      let i11 = oR.content;
      if ("svg" === o10 || "mathml" === o10) {
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
    let a10 = /* @__PURE__ */ el();
    a10.__VUE__ = true, function e12(t12, r12) {
      var i12, l12;
      if (o = t12)
        o.enabled = true, no.forEach((e13) => {
          let { event: t13, args: r13 } = e13;
          return o.emit(t13, ...r13);
        }), no = [];
      else if (
        // browser environment to avoid the timer handle stalling test runner exit
        // (#4815)
        "undefined" == typeof window || !// some envs mock window but not fully
        window.HTMLElement || (null == (l12 = null == (i12 = window.navigator) ? void 0 : i12.userAgent) ? void 0 : l12.includes("jsdom"))
      )
        ni = true, no = [];
      else {
        let t13 = r12.__VUE_DEVTOOLS_HOOK_REPLAY__ = r12.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
        t13.push((t14) => {
          e12(t14, r12);
        }), setTimeout(() => {
          o || (r12.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, ni = true, no = []);
        }, 3e3);
      }
    }(a10.__VUE_DEVTOOLS_GLOBAL_HOOK__, a10);
    let { insert: u2, remove: c2, patchProp: f2, createElement: p2, createText: d2, createComment: h2, setText: m2, setElementText: g2, parentNode: y2, nextSibling: b2, setScopeId: _2 = $, insertStaticContent: w2 } = e11, x2 = function(e12, t12, r12) {
      let o10 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, i12 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null, l12 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null, a11 = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : void 0, s2 = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, u3 = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : !t5 && !!t12.dynamicChildren;
      if (e12 === t12)
        return;
      e12 && !r9(e12, t12) && (o10 = /* @__PURE__ */ ed2(e12), es2(e12, i12, l12, true), e12 = null), -2 === t12.patchFlag && (u3 = false, t12.dynamicChildren = null);
      let { type: c3, ref: f3, shapeFlag: p3 } = t12;
      switch (c3) {
        case r4:
          O2(e12, t12, r12, o10);
          break;
        case r6:
          C2(e12, t12, r12, o10);
          break;
        case r8:
          null == e12 ? E2(t12, r12, o10, a11) : A2(e12, t12, r12, a11);
          break;
        case r3:
          G2(e12, t12, r12, o10, i12, l12, a11, s2, u3);
          break;
        default:
          1 & p3 ? M2(e12, t12, r12, o10, i12, l12, a11, s2, u3) : 6 & p3 ? K2(e12, t12, r12, o10, i12, l12, a11, s2, u3) : 64 & p3 ? c3.process(e12, t12, r12, o10, i12, l12, a11, s2, u3, em2) : 128 & p3 ? c3.process(e12, t12, r12, o10, i12, l12, a11, s2, u3, em2) : tN("Invalid VNode type:", c3, `(${typeof c3})`);
      }
      null != f3 && i12 && rU(f3, e12 && e12.ref, l12, t12 || e12, !t12);
    }, O2 = (e12, t12, r12, o10) => {
      if (null == e12)
        u2(t12.el = /* @__PURE__ */ d2(t12.children), r12, o10);
      else {
        let r13 = t12.el = e12.el;
        t12.children !== e12.children && m2(r13, t12.children);
      }
    }, C2 = (e12, t12, r12, o10) => {
      null == e12 ? u2(t12.el = /* @__PURE__ */ h2(t12.children || ""), r12, o10) : t12.el = e12.el;
    }, E2 = (e12, t12, r12, o10) => {
      [e12.el, e12.anchor] = /* @__PURE__ */ w2(e12.children, t12, r12, o10, e12.el, e12.anchor);
    }, A2 = (e12, t12, r12, o10) => {
      if (t12.children !== e12.children) {
        let i12 = /* @__PURE__ */ b2(e12.anchor);
        R2(e12), [t12.el, t12.anchor] = /* @__PURE__ */ w2(t12.children, r12, i12, o10);
      } else
        t12.el = e12.el, t12.anchor = e12.anchor;
    }, j2 = (e12, t12, r12) => {
      let o10, { el: i12, anchor: l12 } = e12;
      for (; i12 && i12 !== l12; )
        o10 = /* @__PURE__ */ b2(i12), u2(i12, t12, r12), i12 = o10;
      u2(l12, t12, r12);
    }, R2 = (e12) => {
      let t12, { el: r12, anchor: o10 } = e12;
      for (; r12 && r12 !== o10; )
        t12 = /* @__PURE__ */ b2(r12), c2(r12), r12 = t12;
      c2(o10);
    }, M2 = (e12, t12, r12, o10, i12, l12, a11, s2, u3) => {
      "svg" === t12.type ? a11 = "svg" : "math" === t12.type && (a11 = "mathml"), null == e12 ? N2(t12, r12, o10, i12, l12, a11, s2, u3) : B2(e12, t12, i12, l12, a11, s2, u3);
    }, N2 = (e12, t12, r12, o10, i12, l12, a11, s2) => {
      let c3, d3;
      let { props: h3, shapeFlag: m3, transition: y3, dirs: b3 } = e12;
      if (c3 = e12.el = /* @__PURE__ */ p2(e12.type, l12, h3 && h3.is, h3), 8 & m3 ? g2(c3, e12.children) : 16 & m3 && z2(e12.children, c3, null, o10, i12, /* @__PURE__ */ rH(e12, l12), a11, s2), b3 && nV(e12, null, o10, "created"), U2(c3, e12, e12.scopeId, a11, o10), h3) {
        for (let t13 in h3)
          "value" === t13 || H(t13) || f2(c3, t13, null, h3[t13], l12, e12.children, o10, i12, ep2);
        "value" in h3 && f2(c3, "value", null, h3.value, l12), (d3 = h3.onVnodeBeforeMount) && ou(d3, o10, e12);
      }
      Object.defineProperty(c3, "__vnode", { value: e12, enumerable: false }), Object.defineProperty(c3, "__vueParentComponent", { value: o10, enumerable: false }), b3 && nV(e12, null, o10, "beforeMount");
      let _3 = (!i12 || i12 && !i12.pendingBranch) && y3 && !y3.persisted;
      _3 && y3.beforeEnter(c3), u2(c3, t12, r12), ((d3 = h3 && h3.onVnodeMounted) || _3 || b3) && rq(() => {
        d3 && ou(d3, o10, e12), _3 && y3.enter(c3), b3 && nV(e12, null, o10, "mounted");
      }, i12);
    }, U2 = (e12, t12, r12, o10, i12) => {
      if (r12 && _2(e12, r12), o10)
        for (let t13 = 0; t13 < o10.length; t13++)
          _2(e12, o10[t13]);
      if (i12) {
        let r13 = i12.subTree;
        if (r13.patchFlag > 0 && 2048 & r13.patchFlag && (r13 = nS(r13.children) || r13), t12 === r13) {
          let t13 = i12.vnode;
          U2(e12, t13, t13.scopeId, t13.slotScopeIds, i12.parent);
        }
      }
    }, z2 = function(e12, t12, r12, o10, i12, l12, a11, s2) {
      let u3 = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0;
      for (let c3 = u3; c3 < e12.length; c3++) {
        let u4 = e12[c3] = s2 ? oa(e12[c3]) : ol(e12[c3]);
        x2(null, u4, t12, r12, o10, i12, l12, a11, s2);
      }
    }, B2 = (e12, t12, r12, o10, i12, l12, a11) => {
      let s2;
      let u3 = t12.el = e12.el, { patchFlag: c3, dynamicChildren: p3, dirs: d3 } = t12;
      c3 |= 16 & e12.patchFlag;
      let h3 = e12.props || S, m3 = t12.props || S;
      if (r12 && rG(r12, false), (s2 = m3.onVnodeBeforeUpdate) && ou(s2, r12, t12, e12), d3 && nV(t12, e12, r12, "beforeUpdate"), r12 && rG(r12, true), t5 && (c3 = 0, a11 = false, p3 = null), p3 ? (W2(e12.dynamicChildren, p3, u3, r12, o10, /* @__PURE__ */ rH(t12, i12), l12), rK(e12, t12)) : a11 || et2(e12, t12, u3, null, r12, o10, /* @__PURE__ */ rH(t12, i12), l12, false), c3 > 0) {
        if (16 & c3)
          q2(u3, t12, h3, m3, r12, o10, i12);
        else if (2 & c3 && h3.class !== m3.class && f2(u3, "class", null, m3.class, i12), 4 & c3 && f2(u3, "style", h3.style, m3.style, i12), 8 & c3) {
          let l13 = t12.dynamicProps;
          for (let t13 = 0; t13 < l13.length; t13++) {
            let a12 = l13[t13], s3 = h3[a12], c4 = m3[a12];
            (c4 !== s3 || "value" === a12) && f2(u3, a12, s3, c4, i12, e12.children, r12, o10, ep2);
          }
        }
        1 & c3 && e12.children !== t12.children && g2(u3, t12.children);
      } else
        a11 || null != p3 || q2(u3, t12, h3, m3, r12, o10, i12);
      ((s2 = m3.onVnodeUpdated) || d3) && rq(() => {
        s2 && ou(s2, r12, t12, e12), d3 && nV(t12, e12, r12, "updated");
      }, o10);
    }, W2 = (e12, t12, r12, o10, i12, l12, a11) => {
      for (let s2 = 0; s2 < t12.length; s2++) {
        let u3 = e12[s2], c3 = t12[s2], f3 = (
          // which will not have a mounted element
          u3.el && // - In the case of a Fragment, we need to provide the actual parent
          // of the Fragment itself so it can move its children.
          (u3.type === r3 || // - In the case of different nodes, there is going to be a replacement
          // which also requires the correct parent container
          !r9(u3, c3) || // - In the case of a component, it could contain anything.
          70 & u3.shapeFlag) ? y2(u3.el) : (
            // just pass the block element here to avoid a DOM parentNode call.
            r12
          )
        );
        x2(u3, c3, f3, null, o10, i12, l12, a11, true);
      }
    }, q2 = (e12, t12, r12, o10, i12, l12, a11) => {
      if (r12 !== o10) {
        if (r12 !== S)
          for (let s2 in r12)
            H(s2) || s2 in o10 || f2(e12, s2, r12[s2], null, a11, t12.children, i12, l12, ep2);
        for (let s2 in o10) {
          if (H(s2))
            continue;
          let u3 = o10[s2], c3 = r12[s2];
          u3 !== c3 && "value" !== s2 && f2(e12, s2, c3, u3, a11, t12.children, i12, l12, ep2);
        }
        "value" in o10 && f2(e12, "value", r12.value, o10.value, a11);
      }
    }, G2 = (e12, t12, r12, o10, i12, l12, a11, s2, c3) => {
      let f3 = t12.el = e12 ? e12.el : d2(""), p3 = t12.anchor = e12 ? e12.anchor : d2(""), { patchFlag: h3, dynamicChildren: m3, slotScopeIds: g3 } = t12;
      (t5 || 2048 & h3) && (h3 = 0, c3 = false, m3 = null), g3 && (s2 = s2 ? s2.concat(g3) : g3), null == e12 ? (u2(f3, r12, o10), u2(p3, r12, o10), z2(
        // such fragment like `<></>` will be compiled into
        // a fragment which doesn't have a children.
        // In this case fallback to an empty array
        t12.children || [],
        r12,
        p3,
        i12,
        l12,
        a11,
        s2,
        c3
      )) : h3 > 0 && 64 & h3 && m3 && // #2715 the previous fragment could've been a BAILed one as a result
      // of renderSlot() with no valid children
      e12.dynamicChildren ? (W2(e12.dynamicChildren, m3, r12, i12, l12, a11, s2), rK(e12, t12)) : et2(e12, t12, r12, p3, i12, l12, a11, s2, c3);
    }, K2 = (e12, t12, r12, o10, i12, l12, a11, s2, u3) => {
      t12.slotScopeIds = s2, null == e12 ? 512 & t12.shapeFlag ? i12.ctx.activate(t12, r12, o10, a11, u3) : Y2(t12, r12, o10, i12, l12, a11, u3) : Q2(e12, t12, u3);
    }, Y2 = (e12, t12, r12, o10, i12, l12, a11) => {
      let u3 = e12.component = /* @__PURE__ */ function(e13, t13, r13) {
        let o11 = e13.type, i13 = (t13 ? t13.appContext : e13.appContext) || oc, l13 = {
          uid: of++,
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
            let a12 = t14.props, s2 = {}, u4 = [], c3 = false;
            if (!L(t14)) {
              let i15 = (t15) => {
                c3 = true;
                let [o13, i16] = e14(t15, r14, true);
                P(s2, o13), i16 && u4.push(...i16);
              };
              !o12 && r14.mixins.length && r14.mixins.forEach(i15), t14.extends && i15(t14.extends), t14.mixins && t14.mixins.forEach(i15);
            }
            if (!a12 && !c3)
              return V(t14) && i14.set(t14, k), k;
            if (I(a12))
              for (let e15 = 0; e15 < a12.length; e15++) {
                F(a12[e15]) || tN("props must be strings when using array syntax.", a12[e15]);
                let t15 = /* @__PURE__ */ J(a12[e15]);
                rC(t15) && (s2[t15] = S);
              }
            else if (a12)
              for (let e15 in V(a12) || tN("invalid props options", a12), a12) {
                let t15 = /* @__PURE__ */ J(e15);
                if (rC(t15)) {
                  let r15 = a12[e15], o13 = s2[t15] = I(r15) || L(r15) ? { type: r15 } : P({}, r15);
                  if (o13) {
                    let e16 = /* @__PURE__ */ rP(Boolean, o13.type), r16 = /* @__PURE__ */ rP(String, o13.type);
                    o13[0] = e16 > -1, o13[1] = r16 < 0 || e16 < r16, (e16 > -1 || T(o13, "default")) && u4.push(t15);
                  }
                }
              }
            let f3 = [s2, u4];
            return V(t14) && i14.set(t14, f3), f3;
          }(o11, i13),
          emitsOptions: /* @__PURE__ */ function e14(t14, r14) {
            let o12 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i14 = r14.emitsCache, l14 = /* @__PURE__ */ i14.get(t14);
            if (void 0 !== l14)
              return l14;
            let a12 = t14.emits, s2 = {}, u4 = false;
            if (!L(t14)) {
              let i15 = (t15) => {
                let o13 = /* @__PURE__ */ e14(t15, r14, true);
                o13 && (u4 = true, P(s2, o13));
              };
              !o12 && r14.mixins.length && r14.mixins.forEach(i15), t14.extends && i15(t14.extends), t14.mixins && t14.mixins.forEach(i15);
            }
            return a12 || u4 ? (I(a12) ? a12.forEach((e15) => s2[e15] = null) : P(s2, a12), V(t14) && i14.set(t14, s2), s2) : (V(t14) && i14.set(t14, null), null);
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
        }(l13), l13.root = t13 ? t13.root : l13, l13.emit = /* @__PURE__ */ nv.bind(null, l13), e13.ce && e13.ce(l13), l13;
      }(e12, o10, i12);
      if (u3.type.__hmrId && function(e13) {
        let t13 = e13.type.__hmrId, r13 = /* @__PURE__ */ t9.get(t13);
        r13 || (ne(t13, e13.type), r13 = /* @__PURE__ */ t9.get(t13)), r13.instances.add(e13);
      }(u3), tL(e12), rz(u3, "mount"), nX(e12) && (u3.ctx.renderer = em2), rz(u3, "init"), function(e13) {
        let t13 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        t13 && s(t13);
        let { props: r13, children: o11 } = e13.vnode, i13 = /* @__PURE__ */ oy(e13);
        (function(e14, t14, r14) {
          let o12 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], i14 = {}, l13 = {};
          for (let r15 in er(l13, oe, 1), e14.propsDefaults = /* @__PURE__ */ Object.create(null), r$(e14, t14, i14, l13), e14.propsOptions[0])
            r15 in i14 || (i14[r15] = void 0);
          rA(t14 || {}, i14, e14), r14 ? e14.props = o12 ? i14 : tf(i14) : e14.type.props ? e14.props = i14 : e14.props = l13, e14.attrs = l13;
        })(e13, r13, i13, t13), rV(e13, o11), i13 && function(e14, t14) {
          var r14;
          let o12 = e14.type;
          if (o12.name && og(o12.name, e14.appContext.config), o12.components) {
            let t15 = /* @__PURE__ */ Object.keys(o12.components);
            for (let r15 = 0; r15 < t15.length; r15++)
              og(t15[r15], e14.appContext.config);
          }
          if (o12.directives) {
            let e15 = /* @__PURE__ */ Object.keys(o12.directives);
            for (let t15 = 0; t15 < e15.length; t15++)
              nN(e15[t15]);
          }
          o12.compilerOptions && ow() && tN('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'), e14.accessCache = /* @__PURE__ */ Object.create(null), e14.proxy = /* @__PURE__ */ t_(new Proxy(e14.ctx, rs)), function(e15) {
            let { ctx: t15, propsOptions: [r15] } = e15;
            r15 && Object.keys(r15).forEach((r16) => {
              Object.defineProperty(t15, r16, { enumerable: true, configurable: true, get: () => e15.props[r16], set: $ });
            });
          }(e14);
          let { setup: i14 } = o12;
          if (i14) {
            let l13 = e14.setupContext = i14.length > 1 ? Object.freeze({ get attrs() {
              return e14.attrsProxy || (e14.attrsProxy = new Proxy(e14.attrs, { get: (t15, r15) => (n_ = true, eM(e14, "get", "$attrs"), t15[r15]), set: () => (tN("setupContext.attrs is readonly."), false), deleteProperty: () => (tN("setupContext.attrs is readonly."), false) }));
            }, get slots() {
              return e14.slotsProxy || (e14.slotsProxy = new Proxy(e14.slots, { get: (t15, r15) => (eM(e14, "get", "$slots"), t15[r15]) }));
            }, get emit() {
              return function(t15) {
                for (var r15 = arguments.length, o13 = Array(r15 > 1 ? r15 - 1 : 0), i15 = 1; i15 < r15; i15++)
                  o13[i15 - 1] = arguments[i15];
                return e14.emit(t15, ...o13);
              };
            }, expose: (t15) => {
              if (e14.exposed && tN("expose() should be called only once per setup()."), null != t15) {
                let e15 = typeof t15;
                "object" === e15 && (I(t15) ? e15 = "array" : tO(t15) && (e15 = "ref")), "object" !== e15 && tN(`expose() should be passed a plain object, received ${e15}.`);
              }
              e14.exposed = t15 || {};
            } }) : null, a12 = /* @__PURE__ */ oh(e14);
            e$();
            let s2 = /* @__PURE__ */ tD(i14, e14, 0, [/* @__PURE__ */ td(e14.props), l13]);
            if (eO(), a12(), D(s2)) {
              if (s2.then(ov, ov), t14)
                return s2.then((r15) => {
                  o_(e14, r15, t14);
                }).catch((t15) => {
                  tz(t15, e14, 0);
                });
              if (e14.asyncDep = s2, !e14.suspense) {
                let e15 = null != (r14 = o12.name) ? r14 : "Anonymous";
                tN(`Component <${e15}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
              }
            } else
              o_(e14, s2, t14);
          } else
            ox(e14, t14);
        }(e13, t13), t13 && s(false);
      }(u3), rB(u3, "init"), u3.asyncDep) {
        if (i12 && i12.registerDep(u3, Z2), !e12.el) {
          let e13 = u3.subTree = /* @__PURE__ */ or(r6);
          C2(null, e13, t12, r12);
        }
      } else
        Z2(u3, e12, t12, r12, i12, l12, a11);
      tF(), rB(u3, "mount");
    }, Q2 = (e12, t12, r12) => {
      let o10 = t12.component = e12.component;
      if (function(e13, t13, r13) {
        let { props: o11, children: i12, component: l12 } = e13, { props: a11, children: s2, patchFlag: u3 } = t13, c3 = l12.emitsOptions;
        if ((i12 || s2) && t5 || t13.dirs || t13.transition)
          return true;
        if (!r13 || !(u3 >= 0))
          return (!!i12 || !!s2) && (!s2 || !s2.$stable) || o11 !== a11 && (o11 ? !a11 || nC(o11, a11, c3) : !!a11);
        if (1024 & u3)
          return true;
        if (16 & u3)
          return o11 ? nC(o11, a11, c3) : !!a11;
        if (8 & u3) {
          let e14 = t13.dynamicProps;
          for (let t14 = 0; t14 < e14.length; t14++) {
            let r14 = e14[t14];
            if (a11[r14] !== o11[r14] && !nm(c3, r14))
              return true;
          }
        }
        return false;
      }(e12, t12, r12)) {
        if (o10.asyncDep && !o10.asyncResolved) {
          tL(t12), ee2(o10, t12, r12), tF();
          return;
        }
        o10.next = t12, function(e13) {
          let t13 = /* @__PURE__ */ tq.indexOf(e13);
          t13 > tH && tq.splice(t13, 1);
        }(o10.update), o10.effect.dirty = true, o10.update();
      } else
        t12.el = e12.el, o10.vnode = t12;
    }, Z2 = (e12, t12, r12, o10, i12, a11, s2) => {
      let u3 = () => {
        if (e12.isMounted) {
          let t13, { next: r13, bu: o11, u: l12, parent: c4, vnode: f4 } = e12;
          {
            let t14 = /* @__PURE__ */ function e13(t15) {
              let r14 = t15.subTree.component;
              if (r14)
                return r14.asyncDep && !r14.asyncResolved ? r14 : e13(r14);
            }(e12);
            if (t14) {
              r13 && (r13.el = f4.el, ee2(e12, r13, s2)), t14.asyncDep.then(() => {
                e12.isUnmounted || u3();
              });
              return;
            }
          }
          let p3 = r13;
          tL(r13 || e12.vnode), rG(e12, false), r13 ? (r13.el = f4.el, ee2(e12, r13, s2)) : r13 = f4, o11 && en(o11), (t13 = r13.props && r13.props.onVnodeBeforeUpdate) && ou(t13, c4, r13, f4), rG(e12, true), rz(e12, "render");
          let d3 = /* @__PURE__ */ nw(e12);
          rB(e12, "render");
          let h3 = e12.subTree;
          e12.subTree = d3, rz(e12, "patch"), x2(h3, d3, /* @__PURE__ */ y2(h3.el), /* @__PURE__ */ ed2(h3), e12, i12, a11), rB(e12, "patch"), r13.el = d3.el, null === p3 && function(e13, t14) {
            let { vnode: r14, parent: o12 } = e13;
            for (; o12; ) {
              let e14 = o12.subTree;
              if (e14.suspense && e14.suspense.activeBranch === r14 && (e14.el = r14.el), e14 === r14)
                (r14 = o12.vnode).el = t14, o12 = o12.parent;
              else
                break;
            }
          }(e12, d3.el), l12 && rq(l12, i12), (t13 = r13.props && r13.props.onVnodeUpdated) && rq(() => ou(t13, c4, r13, f4), i12), ns(e12), tF();
        } else {
          let s3;
          let { el: u4, props: c4 } = t12, { bm: f4, m: p3, parent: d3 } = e12, h3 = /* @__PURE__ */ nQ(t12);
          if (rG(e12, false), f4 && en(f4), !h3 && (s3 = c4 && c4.onVnodeBeforeMount) && ou(s3, d3, t12), rG(e12, true), u4 && l11) {
            let r13 = () => {
              rz(e12, "render"), e12.subTree = /* @__PURE__ */ nw(e12), rB(e12, "render"), rz(e12, "hydrate"), l11(u4, e12.subTree, e12, i12, null), rB(e12, "hydrate");
            };
            h3 ? t12.type.__asyncLoader().then(
              // which means it won't track dependencies - but it's ok because
              // a server-rendered async wrapper is already in resolved state
              // and it will never need to change.
              () => !e12.isUnmounted && r13()
            ) : r13();
          } else {
            rz(e12, "render");
            let l12 = e12.subTree = /* @__PURE__ */ nw(e12);
            rB(e12, "render"), rz(e12, "patch"), x2(null, l12, r12, o10, e12, i12, a11), rB(e12, "patch"), t12.el = l12.el;
          }
          if (p3 && rq(p3, i12), !h3 && (s3 = c4 && c4.onVnodeMounted)) {
            let e13 = t12;
            rq(() => ou(s3, d3, e13), i12);
          }
          (256 & t12.shapeFlag || d3 && nQ(d3.vnode) && 256 & d3.vnode.shapeFlag) && e12.a && rq(e12.a, i12), e12.isMounted = true, na(e12), t12 = r12 = o10 = null;
        }
      }, c3 = e12.effect = new ey(u3, $, () => tZ(f3), e12.scope), f3 = e12.update = () => {
        c3.dirty && c3.run();
      };
      f3.id = e12.uid, rG(e12, true), c3.onTrack = e12.rtc ? (t13) => en(e12.rtc, t13) : void 0, c3.onTrigger = e12.rtg ? (t13) => en(e12.rtg, t13) : void 0, f3.ownerInstance = e12, f3();
    }, ee2 = (e12, t12, r12) => {
      t12.component = e12;
      let o10 = e12.vnode.props;
      e12.vnode = t12, e12.next = null, function(e13, t13, r13, o11) {
        let { props: i12, attrs: l12, vnode: { patchFlag: a11 } } = e13, s2 = /* @__PURE__ */ tb(i12), [u3] = e13.propsOptions, c3 = false;
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
              if (nm(e13.emitsOptions, a12))
                continue;
              let f3 = t13[a12];
              if (u3) {
                if (T(l12, a12))
                  f3 !== l12[a12] && (l12[a12] = f3, c3 = true);
                else {
                  let t14 = /* @__PURE__ */ J(a12);
                  i12[t14] = /* @__PURE__ */ rO(u3, s2, t14, f3, e13, false);
                }
              } else
                f3 !== l12[a12] && (l12[a12] = f3, c3 = true);
            }
          }
        } else {
          let o12;
          for (let a12 in r$(e13, t13, i12, l12) && (c3 = true), s2)
            t13 && // for camelCase
            (T(t13, a12) || // it's possible the original props was passed in as kebab-case
            // and converted to camelCase (#955)
            (o12 = /* @__PURE__ */ X(a12)) !== a12 && T(t13, o12)) || (u3 ? r13 && // for camelCase
            (void 0 !== r13[a12] || // for kebab-case
            void 0 !== r13[o12]) && (i12[a12] = /* @__PURE__ */ rO(u3, s2, a12, void 0, e13, true)) : delete i12[a12]);
          if (l12 !== s2)
            for (let e14 in l12)
              t13 && T(t13, e14) || (delete l12[e14], c3 = true);
        }
        c3 && eL(e13, "set", "$attrs"), rA(t13 || {}, i12, e13);
      }(e12, t12.props, o10, r12), rD(e12, t12.children, r12), e$(), t2(e12), eO();
    }, et2 = function(e12, t12, r12, o10, i12, l12, a11, s2) {
      let u3 = arguments.length > 8 && void 0 !== arguments[8] && arguments[8], c3 = e12 && e12.children, f3 = e12 ? e12.shapeFlag : 0, p3 = t12.children, { patchFlag: d3, shapeFlag: h3 } = t12;
      if (d3 > 0) {
        if (128 & d3) {
          ei2(c3, p3, r12, o10, i12, l12, a11, s2, u3);
          return;
        }
        if (256 & d3) {
          eo2(c3, p3, r12, o10, i12, l12, a11, s2, u3);
          return;
        }
      }
      8 & h3 ? (16 & f3 && ep2(c3, i12, l12), p3 !== c3 && g2(r12, p3)) : 16 & f3 ? 16 & h3 ? ei2(c3, p3, r12, o10, i12, l12, a11, s2, u3) : ep2(c3, i12, l12, true) : (8 & f3 && g2(r12, ""), 16 & h3 && z2(p3, r12, o10, i12, l12, a11, s2, u3));
    }, eo2 = (e12, t12, r12, o10, i12, l12, a11, s2, u3) => {
      let c3;
      e12 = e12 || k, t12 = t12 || k;
      let f3 = e12.length, p3 = t12.length, d3 = /* @__PURE__ */ Math.min(f3, p3);
      for (c3 = 0; c3 < d3; c3++) {
        let o11 = t12[c3] = u3 ? oa(t12[c3]) : ol(t12[c3]);
        x2(e12[c3], o11, r12, null, i12, l12, a11, s2, u3);
      }
      f3 > p3 ? ep2(e12, i12, l12, true, false, d3) : z2(t12, r12, o10, i12, l12, a11, s2, u3, d3);
    }, ei2 = (e12, t12, r12, o10, i12, l12, a11, s2, u3) => {
      let c3 = 0, f3 = t12.length, p3 = e12.length - 1, d3 = f3 - 1;
      for (; c3 <= p3 && c3 <= d3; ) {
        let o11 = e12[c3], f4 = t12[c3] = u3 ? oa(t12[c3]) : ol(t12[c3]);
        if (r9(o11, f4))
          x2(o11, f4, r12, null, i12, l12, a11, s2, u3);
        else
          break;
        c3++;
      }
      for (; c3 <= p3 && c3 <= d3; ) {
        let o11 = e12[p3], c4 = t12[d3] = u3 ? oa(t12[d3]) : ol(t12[d3]);
        if (r9(o11, c4))
          x2(o11, c4, r12, null, i12, l12, a11, s2, u3);
        else
          break;
        p3--, d3--;
      }
      if (c3 > p3) {
        if (c3 <= d3) {
          let e13 = d3 + 1, p4 = e13 < f3 ? t12[e13].el : o10;
          for (; c3 <= d3; )
            x2(null, t12[c3] = u3 ? oa(t12[c3]) : ol(t12[c3]), r12, p4, i12, l12, a11, s2, u3), c3++;
        }
      } else if (c3 > d3)
        for (; c3 <= p3; )
          es2(e12[c3], i12, l12, true), c3++;
      else {
        let h3;
        let m3 = c3, g3 = c3, y3 = /* @__PURE__ */ new Map();
        for (c3 = g3; c3 <= d3; c3++) {
          let e13 = t12[c3] = u3 ? oa(t12[c3]) : ol(t12[c3]);
          null != e13.key && (y3.has(e13.key) && tN("Duplicate keys found during update:", /* @__PURE__ */ JSON.stringify(e13.key), "Make sure keys are unique."), y3.set(e13.key, c3));
        }
        let b3 = 0, _3 = d3 - g3 + 1, w3 = false, S2 = 0, $2 = Array(_3);
        for (c3 = 0; c3 < _3; c3++)
          $2[c3] = 0;
        for (c3 = m3; c3 <= p3; c3++) {
          let o11;
          let f4 = e12[c3];
          if (b3 >= _3) {
            es2(f4, i12, l12, true);
            continue;
          }
          if (null != f4.key)
            o11 = /* @__PURE__ */ y3.get(f4.key);
          else
            for (h3 = g3; h3 <= d3; h3++)
              if (0 === $2[h3 - g3] && r9(f4, t12[h3])) {
                o11 = h3;
                break;
              }
          void 0 === o11 ? es2(f4, i12, l12, true) : ($2[o11 - g3] = c3 + 1, o11 >= S2 ? S2 = o11 : w3 = true, x2(f4, t12[o11], r12, null, i12, l12, a11, s2, u3), b3++);
        }
        let O3 = w3 ? function(e13) {
          let t13, r13, o11, i13, l13;
          let a12 = /* @__PURE__ */ e13.slice(), s3 = [0], u4 = e13.length;
          for (t13 = 0; t13 < u4; t13++) {
            let u5 = e13[t13];
            if (0 !== u5) {
              if (e13[r13 = s3[s3.length - 1]] < u5) {
                a12[t13] = r13, s3.push(t13);
                continue;
              }
              for (o11 = 0, i13 = s3.length - 1; o11 < i13; )
                e13[s3[l13 = o11 + i13 >> 1]] < u5 ? o11 = l13 + 1 : i13 = l13;
              u5 < e13[s3[o11]] && (o11 > 0 && (a12[t13] = s3[o11 - 1]), s3[o11] = t13);
            }
          }
          for (o11 = s3.length, i13 = s3[o11 - 1]; o11-- > 0; )
            s3[o11] = i13, i13 = a12[i13];
          return s3;
        }($2) : k;
        for (h3 = O3.length - 1, c3 = _3 - 1; c3 >= 0; c3--) {
          let e13 = g3 + c3, p4 = t12[e13], d4 = e13 + 1 < f3 ? t12[e13 + 1].el : o10;
          0 === $2[c3] ? x2(null, p4, r12, d4, i12, l12, a11, s2, u3) : w3 && (h3 < 0 || c3 !== O3[h3] ? ea2(p4, r12, d4, 2) : h3--);
        }
      }
    }, ea2 = function(e12, t12, r12, o10) {
      let i12 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null, { el: l12, type: a11, transition: s2, children: c3, shapeFlag: f3 } = e12;
      if (6 & f3) {
        ea2(e12.component.subTree, t12, r12, o10);
        return;
      }
      if (128 & f3) {
        e12.suspense.move(t12, r12, o10);
        return;
      }
      if (64 & f3) {
        a11.move(e12, t12, r12, em2);
        return;
      }
      if (a11 === r3) {
        u2(l12, t12, r12);
        for (let e13 = 0; e13 < c3.length; e13++)
          ea2(c3[e13], t12, r12, o10);
        u2(e12.anchor, t12, r12);
        return;
      }
      if (a11 === r8) {
        j2(e12, t12, r12);
        return;
      }
      let p3 = 2 !== o10 && 1 & f3 && s2;
      if (p3) {
        if (0 === o10)
          s2.beforeEnter(l12), u2(l12, t12, r12), rq(() => s2.enter(l12), i12);
        else {
          let { leave: e13, delayLeave: o11, afterLeave: i13 } = s2, a12 = () => u2(l12, t12, r12), c4 = () => {
            e13(l12, () => {
              a12(), i13 && i13();
            });
          };
          o11 ? o11(l12, a12, c4) : c4();
        }
      } else
        u2(l12, t12, r12);
    }, es2 = function(e12, t12, r12) {
      let o10, i12 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], l12 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], { type: a11, props: s2, ref: u3, children: c3, dynamicChildren: f3, shapeFlag: p3, patchFlag: d3, dirs: h3 } = e12;
      if (null != u3 && rU(u3, null, r12, e12, true), 256 & p3) {
        t12.ctx.deactivate(e12);
        return;
      }
      let m3 = 1 & p3 && h3, g3 = !nQ(e12);
      if (g3 && (o10 = s2 && s2.onVnodeBeforeUnmount) && ou(o10, t12, e12), 6 & p3)
        ef2(e12.component, r12, i12);
      else {
        if (128 & p3) {
          e12.suspense.unmount(r12, i12);
          return;
        }
        m3 && nV(e12, null, t12, "beforeUnmount"), 64 & p3 ? e12.type.remove(e12, t12, r12, l12, em2, i12) : f3 && // #1153: fast path should not be taken for non-stable (v-for) fragments
        (a11 !== r3 || d3 > 0 && 64 & d3) ? ep2(f3, t12, r12, false, true) : (a11 === r3 && 384 & d3 || !l12 && 16 & p3) && ep2(c3, t12, r12), i12 && eu2(e12);
      }
      (g3 && (o10 = s2 && s2.onVnodeUnmounted) || m3) && rq(() => {
        o10 && ou(o10, t12, e12), m3 && nV(e12, null, t12, "unmounted");
      }, r12);
    }, eu2 = (e12) => {
      let { type: t12, el: r12, anchor: o10, transition: i12 } = e12;
      if (t12 === r3) {
        e12.patchFlag > 0 && 2048 & e12.patchFlag && i12 && !i12.persisted ? e12.children.forEach((e13) => {
          e13.type === r6 ? c2(e13.el) : eu2(e13);
        }) : ec2(r12, o10);
        return;
      }
      if (t12 === r8) {
        R2(e12);
        return;
      }
      let l12 = () => {
        c2(r12), i12 && !i12.persisted && i12.afterLeave && i12.afterLeave();
      };
      if (1 & e12.shapeFlag && i12 && !i12.persisted) {
        let { leave: t13, delayLeave: o11 } = i12, a11 = () => t13(r12, l12);
        o11 ? o11(e12.el, l12, a11) : a11();
      } else
        l12();
    }, ec2 = (e12, t12) => {
      let r12;
      for (; e12 !== t12; )
        r12 = /* @__PURE__ */ b2(e12), c2(e12), e12 = r12;
      c2(t12);
    }, ef2 = (e12, t12, r12) => {
      e12.type.__hmrId && function(e13) {
        t9.get(e13.type.__hmrId).instances.delete(e13);
      }(e12);
      let { bum: o10, scope: i12, update: l12, subTree: a11, um: s2 } = e12;
      o10 && en(o10), i12.stop(), l12 && (l12.active = false, es2(a11, e12, t12, r12)), s2 && rq(s2, t12), rq(() => {
        e12.isUnmounted = true;
      }, t12), t12 && t12.pendingBranch && !t12.isUnmounted && e12.asyncDep && !e12.asyncResolved && e12.suspenseId === t12.pendingId && (t12.deps--, 0 === t12.deps && t12.resolve()), nc(e12);
    }, ep2 = function(e12, t12, r12) {
      let o10 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], i12 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], l12 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
      for (let a11 = l12; a11 < e12.length; a11++)
        es2(e12[a11], t12, r12, o10, i12);
    }, ed2 = (e12) => 6 & e12.shapeFlag ? ed2(e12.component.subTree) : 128 & e12.shapeFlag ? e12.suspense.next() : b2(e12.anchor || e12.el), eh2 = false, ev2 = (e12, t12, r12) => {
      null == e12 ? t12._vnode && es2(t12._vnode, null, null, true) : x2(t12._vnode || null, e12, t12, null, null, null, r12), eh2 || (eh2 = true, t2(), t3(), eh2 = false), t12._vnode = e12;
    }, em2 = { p: x2, um: es2, m: ea2, r: eu2, mt: Y2, mc: z2, pc: et2, pbc: W2, n: ed2, o: e11 };
    return t11 && ([i11, l11] = /* @__PURE__ */ t11(em2)), { render: ev2, hydrate: i11, createApp: (r11 = i11, function(e12) {
      let t12 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      L(e12) || (e12 = /* @__PURE__ */ P({}, e12)), null == t12 || V(t12) || (tN("root props passed to app.mount() must be an object."), t12 = null);
      let o10 = /* @__PURE__ */ r_(), i12 = /* @__PURE__ */ new WeakSet(), l12 = false, a11 = o10.app = { _uid: rw++, _component: e12, _props: t12, _container: null, _context: o10, _instance: null, version: oT, get config() {
        return o10.config;
      }, set config(v) {
        tN("app.config cannot be replaced. Modify individual options instead.");
      }, use(e13) {
        for (var t13 = arguments.length, r12 = Array(t13 > 1 ? t13 - 1 : 0), o11 = 1; o11 < t13; o11++)
          r12[o11 - 1] = arguments[o11];
        return i12.has(e13) ? tN("Plugin has already been applied to target app.") : e13 && L(e13.install) ? (i12.add(e13), e13.install(a11, ...r12)) : L(e13) ? (i12.add(e13), e13(a11, ...r12)) : tN('A plugin must either be a function or an object with an "install" function.'), a11;
      }, mixin: (e13) => (o10.mixins.includes(e13) ? tN("Mixin has already been applied to target app" + (e13.name ? `: ${e13.name}` : "")) : o10.mixins.push(e13), a11), component: (e13, t13) => (og(e13, o10.config), t13) ? (o10.components[e13] && tN(`Component "${e13}" has already been registered in target app.`), o10.components[e13] = t13, a11) : o10.components[e13], directive: (e13, t13) => (nN(e13), t13) ? (o10.directives[e13] && tN(`Directive "${e13}" has already been registered in target app.`), o10.directives[e13] = t13, a11) : o10.directives[e13], mount(i13, s2, u3) {
        if (l12)
          tN(`App has already been mounted.
If you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. \`const createMyApp = () => createApp(App)\``);
        else {
          i13.__vue_app__ && tN(`There is already an app instance mounted on the host container.
 If you want to mount another app on the same host container, you need to unmount the previous app by calling \`app.unmount()\` first.`);
          let c3 = /* @__PURE__ */ or(e12, t12);
          return c3.appContext = o10, true === u3 ? u3 = "svg" : false === u3 && (u3 = void 0), o10.reload = () => {
            ev2(/* @__PURE__ */ oo(c3), i13, u3);
          }, s2 && r11 ? r11(c3, i13) : ev2(c3, i13, u3), l12 = true, a11._container = i13, i13.__vue_app__ = a11, a11._instance = c3.component, nl("app:init", a11, oT, { Fragment: r3, Text: r4, Comment: r6, Static: r8 }), oS(c3.component) || c3.component.proxy;
        }
      }, unmount() {
        l12 ? (ev2(null, a11._container), a11._instance = null, nl("app:unmount", a11), delete a11._container.__vue_app__) : tN("Cannot unmount an app that is not mounted.");
      }, provide: (e13, t13) => (e13 in o10.provides && tN(`App already provides property with key "${String(e13)}". It will be overwritten with the new value.`), o10.provides[e13] = t13, a11), runWithContext(e13) {
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
  Object.defineProperty(i10.config, "isNativeTag", { value: (e11) => ep(e11) || ed(e11) || eh(e11), writable: false }), function(e11) {
    {
      let t11 = e11.config.isCustomElement;
      Object.defineProperty(e11.config, "isCustomElement", { get: () => t11, set() {
        tN("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
      } });
      let r11 = e11.config.compilerOptions, o10 = `The \`compilerOptions\` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, \`compilerOptions\` must be passed to \`@vue/compiler-dom\` in the build setup instead.
- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.
- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader
- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc`;
      Object.defineProperty(e11.config, "compilerOptions", { get: () => (tN(o10), r11), set() {
        tN(o10);
      } });
    }
  }(i10);
  let { mount: l10 } = i10;
  return i10.mount = (e11) => {
    let t11 = /* @__PURE__ */ function(e12) {
      if (F(e12)) {
        let t12 = /* @__PURE__ */ document.querySelector(e12);
        return t12 || tN(`Failed to mount app: mount target selector "${e12}" returned null.`), t12;
      }
      return window.ShadowRoot && e12 instanceof window.ShadowRoot && "closed" === e12.mode && tN('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'), e12;
    }(e11);
    if (!t11)
      return;
    let r11 = i10._component;
    L(r11) || r11.render || r11.template || (r11.template = t11.innerHTML), t11.innerHTML = "";
    let o10 = /* @__PURE__ */ l10(t11, false, t11 instanceof SVGElement ? "svg" : "function" == typeof MathMLElement && t11 instanceof MathMLElement ? "mathml" : void 0);
    return t11 instanceof Element && (t11.removeAttribute("v-cloak"), t11.setAttribute("data-v-app", "")), o10;
  }, i10;
};
!function() {
  if ("undefined" == typeof window)
    return;
  let e10 = { style: "color:#3ba776" }, t10 = { style: "color:#1677ff" }, r10 = { style: "color:#f5222d" }, o10 = { style: "color:#eb2f96" }, i10 = { header(t11) {
    if (!V(t11))
      return null;
    if (t11.__isVue)
      return ["div", e10, "VueInstance"];
    if (tO(t11))
      return ["div", {}, ["span", e10, oj(t11) ? "ShallowRef" : t11.effect ? "ComputedRef" : "Ref"], "<", /* @__PURE__ */ a10(t11.value), ">"];
    return tv(t11) ? ["div", {}, ["span", e10, oj(t11) ? "ShallowReactive" : "Reactive"], "<", /* @__PURE__ */ a10(t11), `>${tm(t11) ? " (readonly)" : ""}`] : tm(t11) ? ["div", {}, ["span", e10, oj(t11) ? "ShallowReadonly" : "Readonly"], "<", /* @__PURE__ */ a10(t11), ">"] : null;
  }, hasBody: (e11) => e11 && e11.__isVue, body(e11) {
    if (e11 && e11.__isVue)
      return ["div", {}, .../* @__PURE__ */ function(e12) {
        let t11 = [];
        e12.type.props && e12.props && t11.push(/* @__PURE__ */ l10("props", /* @__PURE__ */ tb(e12.props))), e12.setupState !== S && t11.push(/* @__PURE__ */ l10("setup", e12.setupState)), e12.data !== S && t11.push(/* @__PURE__ */ l10("data", /* @__PURE__ */ tb(e12.data)));
        let r11 = /* @__PURE__ */ s2(e12, "computed");
        r11 && t11.push(/* @__PURE__ */ l10("computed", r11));
        let i11 = /* @__PURE__ */ s2(e12, "inject");
        return i11 && t11.push(/* @__PURE__ */ l10("injected", i11)), t11.push(["div", {}, ["span", { style: o10.style + ";opacity:0.66" }, "$ (internal): "], ["object", { object: e12 }]]), t11;
      }(e11.$)];
  } };
  function l10(e11, t11) {
    return Object.keys(t11 = /* @__PURE__ */ P({}, t11)).length ? ["div", { style: "line-height:1.25em;margin-bottom:0.6em" }, ["div", { style: "color:#476582" }, e11], ["div", { style: "padding-left:1.25em" }, .../* @__PURE__ */ Object.keys(t11).map((e12) => ["div", {}, ["span", o10, e12 + ": "], /* @__PURE__ */ a10(t11[e12], false)])]] : ["span", {}];
  }
  function a10(e11) {
    let i11 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return "number" == typeof e11 ? ["span", t10, e11] : "string" == typeof e11 ? ["span", r10, /* @__PURE__ */ JSON.stringify(e11)] : "boolean" == typeof e11 ? ["span", o10, e11] : V(e11) ? ["object", { object: i11 ? tb(e11) : e11 }] : ["span", r10, /* @__PURE__ */ String(e11)];
  }
  function s2(e11, t11) {
    let r11 = e11.type;
    if (L(r11))
      return;
    let o11 = {};
    for (let i11 in e11.ctx)
      (function e12(t12, r12, o12) {
        let i12 = t12[o12];
        if (I(i12) && i12.includes(r12) || V(i12) && r12 in i12 || t12.extends && e12(t12.extends, r12, o12) || t12.mixins && t12.mixins.some((t13) => e12(t13, r12, o12)))
          return true;
      })(r11, i11, t11) && (o11[i11] = e11.ctx[i11]);
    return o11;
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i10) : window.devtoolsFormatters = [i10];
}();
let ir = r3;
function io(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o10 = null != r10 ? r10 : t10, i10 = null != t10 ? t10 : e10, l10 = d(e10) ? {} : e10, [a10, s2] = h(/* @__PURE__ */ Object.keys(l10), (e11) => /^on[A-Z]/.test(e11)), u2 = { emits: /* @__PURE__ */ a10.map((e11) => m(/* @__PURE__ */ e11.slice(2))), props: /* @__PURE__ */ s2.filter((e11) => !/^[$]/.test(e11)).reduce((e11, t11) => {
    let r11 = l10[t11];
    return {
      // biome-ignore lint/performance/noAccumulatingSpread: <explanation>
      ...e11,
      [t11]: { default: () => {
        try {
          return r11.create(void 0);
        } catch (e12) {
        }
      }, validator: (e12) => r11.validate(e12) }
    };
  }, {}) };
  return { get name() {
    var c2;
    return null !== (c2 = this.displayName) && void 0 !== c2 ? c2 : o10.name;
  }, set name(n) {
    o10.name = n;
  }, setup: (e11, t11) => i10(e11, t11), emits: u2.emits, props: u2.props, inheritAttrs: o10.inheritAttrs, propTypes: l10 };
}
let ii = (e10, t10) => new Proxy(e10, { get(e11, r10) {
  var o10;
  return null !== (o10 = t10[r10]) && void 0 !== o10 ? o10 : e11[r10];
} });
function il() {
  return "undefined" != typeof navigator && "undefined" != typeof window ? window : "undefined" != typeof global ? global : {};
}
let ia = "function" == typeof Proxy;
class is {
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
let iu = "undefined" != typeof window, ic = Object.assign;
function ip(e10, t10) {
  let r10 = {};
  for (let o10 in t10) {
    let i10 = t10[o10];
    r10[o10] = ih(i10) ? i10.map(e10) : e10(i10);
  }
  return r10;
}
let id = () => {
}, ih = Array.isArray;
function iv(e10) {
  let t10 = /* @__PURE__ */ Array.from(arguments).slice(1);
  console.warn.apply(console, /* @__PURE__ */ ["[Vue Router warn]: " + e10].concat(t10));
}
let im = /\/$/, ig = (e10) => e10.replace(im, "");
function iy(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/", o10, i10 = {}, l10 = "", a10 = "", s2 = /* @__PURE__ */ t10.indexOf("#"), u2 = /* @__PURE__ */ t10.indexOf("?");
  return s2 < u2 && s2 >= 0 && (u2 = -1), u2 > -1 && (o10 = /* @__PURE__ */ t10.slice(0, u2), i10 = /* @__PURE__ */ e10(l10 = /* @__PURE__ */ t10.slice(u2 + 1, s2 > -1 ? s2 : t10.length))), s2 > -1 && (o10 = o10 || t10.slice(0, s2), a10 = /* @__PURE__ */ t10.slice(s2, t10.length)), { fullPath: (o10 = /* @__PURE__ */ function(e11, t11) {
    let r11, o11;
    if (e11.startsWith("/"))
      return e11;
    if (!t11.startsWith("/"))
      return iv(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e11}" from "${t11}". It should look like "/${t11}".`), e11;
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
  }(null != o10 ? o10 : t10, r10)) + (l10 && "?") + l10 + a10, path: o10, query: i10, hash: a10 };
}
function ib(e10, t10) {
  return t10 && e10.toLowerCase().startsWith(/* @__PURE__ */ t10.toLowerCase()) ? e10.slice(t10.length) || "/" : e10;
}
function i_(e10, t10, r10) {
  let o10 = t10.matched.length - 1, i10 = r10.matched.length - 1;
  return o10 > -1 && o10 === i10 && iw(t10.matched[o10], r10.matched[i10]) && ix(t10.params, r10.params) && e10(t10.query) === e10(r10.query) && t10.hash === r10.hash;
}
function iw(e10, t10) {
  return (e10.aliasOf || e10) === (t10.aliasOf || t10);
}
function ix(e10, t10) {
  if (Object.keys(e10).length !== Object.keys(t10).length)
    return false;
  for (let i10 in e10) {
    var r10, o10;
    if (r10 = e10[i10], o10 = t10[i10], ih(r10) ? !iS(r10, o10) : ih(o10) ? !iS(o10, r10) : r10 !== o10)
      return false;
  }
  return true;
}
function iS(e10, t10) {
  return ih(t10) ? e10.length === t10.length && e10.every((e11, r10) => e11 === t10[r10]) : 1 === e10.length && e10[0] === t10;
}
(lj = lR || (lR = {})).pop = "pop", lj.push = "push", (lT = lM || (lM = {})).back = "back", lT.forward = "forward", lT.unknown = "";
let ik = /^[^#]+#/;
function i$(e10, t10) {
  return e10.replace(ik, "#") + t10;
}
let iO = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function iC(e10, t10) {
  let r10 = history.state ? history.state.position - t10 : -1;
  return r10 + e10;
}
let iE = /* @__PURE__ */ new Map(), iP = () => location.protocol + "//" + location.host;
function iA(e10, t10) {
  let { pathname: r10, search: o10, hash: i10 } = t10, l10 = /* @__PURE__ */ e10.indexOf("#");
  if (l10 > -1) {
    let t11 = i10.includes(/* @__PURE__ */ e10.slice(l10)) ? e10.slice(l10).length : 1, r11 = /* @__PURE__ */ i10.slice(t11);
    return "/" !== r11[0] && (r11 = "/" + r11), ib(r11, "");
  }
  let a10 = /* @__PURE__ */ ib(r10, e10);
  return a10 + o10 + i10;
}
function ij(e10, t10, r10) {
  let o10 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], i10 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
  return { back: e10, current: t10, forward: r10, replaced: o10, position: window.history.length, scroll: i10 ? iO() : null };
}
function iT(e10) {
  e10 = /* @__PURE__ */ function(e11) {
    if (!e11) {
      if (iu) {
        let t11 = /* @__PURE__ */ document.querySelector("base");
        e11 = /* @__PURE__ */ (e11 = t11 && t11.getAttribute("href") || "/").replace(/^\w+:\/\/[^\/]+/, "");
      } else
        e11 = "/";
    }
    return "/" !== e11[0] && "#" !== e11[0] && (e11 = "/" + e11), ig(e11);
  }(e10);
  let t10 = /* @__PURE__ */ function(e11) {
    let { history: t11, location: r11 } = window, o11 = { value: /* @__PURE__ */ iA(e11, r11) }, i10 = { value: t11.state };
    function l10(o12, l11, a10) {
      let s2 = /* @__PURE__ */ e11.indexOf("#"), u2 = s2 > -1 ? (r11.host && document.querySelector("base") ? e11 : e11.slice(s2)) + o12 : iP() + e11 + o12;
      try {
        t11[a10 ? "replaceState" : "pushState"](l11, "", u2), i10.value = l11;
      } catch (e12) {
        iv("Error with push/replace State", e12), r11[a10 ? "replace" : "assign"](u2);
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
      let a10 = /* @__PURE__ */ ic(
        {},
        // history.replaceState
        // https://github.com/vuejs/router/issues/366
        i10.value,
        t11.state,
        { forward: e12, scroll: /* @__PURE__ */ iO() }
      );
      t11.state || iv(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`), l10(a10.current, a10, true);
      let s2 = /* @__PURE__ */ ic({}, /* @__PURE__ */ ij(o11.value, e12, null), { position: a10.position + 1 }, r12);
      l10(e12, s2, false), o11.value = e12;
    }, replace: function(e12, r12) {
      let a10 = /* @__PURE__ */ ic({}, t11.state, /* @__PURE__ */ ij(i10.value.back, e12, i10.value.forward, true), r12, { position: i10.value.position });
      l10(e12, a10, true), o11.value = e12;
    } };
  }(e10), r10 = /* @__PURE__ */ function(e11, t11, r11, o11) {
    let i10 = [], l10 = [], a10 = null, s2 = (l11) => {
      let { state: s3 } = l11, u3 = /* @__PURE__ */ iA(e11, location), c2 = r11.value, f2 = t11.value, p2 = 0;
      if (s3) {
        if (r11.value = u3, t11.value = s3, a10 && a10 === c2) {
          a10 = null;
          return;
        }
        p2 = f2 ? s3.position - f2.position : 0;
      } else
        o11(u3);
      i10.forEach((e12) => {
        e12(r11.value, c2, { delta: p2, type: lR.pop, direction: p2 ? p2 > 0 ? lM.forward : lM.back : lM.unknown });
      });
    };
    function u2() {
      let { history: e12 } = window;
      e12.state && e12.replaceState(/* @__PURE__ */ ic({}, e12.state, { scroll: /* @__PURE__ */ iO() }), "");
    }
    return window.addEventListener("popstate", s2), window.addEventListener("beforeunload", u2, { passive: true }), { pauseListeners: function() {
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
    } };
  }(e10, t10.state, t10.location, t10.replace), o10 = /* @__PURE__ */ ic({
    // it's overridden right after
    location: "",
    base: e10,
    go: function(e11) {
      let t11 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
      t11 || r10.pauseListeners(), history.go(e11);
    },
    createHref: /* @__PURE__ */ i$.bind(null, e10)
  }, t10, r10);
  return Object.defineProperty(o10, "location", { enumerable: true, get: () => t10.location.value }), Object.defineProperty(o10, "state", { enumerable: true, get: () => t10.state.value }), o10;
}
function iI(e10) {
  return "string" == typeof e10 || "symbol" == typeof e10;
}
let iR = { path: "/", name: void 0, params: {}, query: {}, hash: "", fullPath: "/", matched: [], meta: {}, redirectedFrom: void 0 }, iM = /* @__PURE__ */ Symbol("navigation failure");
(lI = lL || (lL = {}))[lI.aborted = 4] = "aborted", lI[lI.cancelled = 8] = "cancelled", lI[lI.duplicated = 16] = "duplicated";
let iL = { 1(e10) {
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
    for (let r11 of iV)
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
function iF(e10, t10) {
  return ic(Error(iL[e10](t10)), { type: e10, [iM]: true }, t10);
}
function iN(e10, t10) {
  return e10 instanceof Error && iM in e10 && (null == t10 || !!(e10.type & t10));
}
let iV = ["params", "query", "hash"], iD = "[^/]+?", iU = { sensitive: false, strict: false, start: true, end: true }, iz = /[.+*?^${}()[\]/\\]/g;
function iB(e10) {
  let t10 = e10[e10.length - 1];
  return e10.length > 0 && t10[t10.length - 1] < 0;
}
let iW = { type: 0, value: "" }, iq = /[a-zA-Z0-9_]/;
function iH(e10, t10) {
  let r10 = {};
  for (let o10 of t10)
    o10 in e10 && (r10[o10] = e10[o10]);
  return r10;
}
function iG(e10) {
  for (; e10; ) {
    if (e10.record.aliasOf)
      return true;
    e10 = e10.parent;
  }
  return false;
}
function iK(e10, t10) {
  let r10 = {};
  for (let o10 in e10)
    r10[o10] = o10 in t10 ? t10[o10] : e10[o10];
  return r10;
}
function iY(e10, t10) {
  return e10.name === t10.name && e10.optional === t10.optional && e10.repeatable === t10.repeatable;
}
let iJ = /#/g, iQ = /&/g, iX = /\//g, iZ = /=/g, i0 = /\?/g, i1 = /\+/g, i2 = /%5B/g, i3 = /%5D/g, i4 = /%5E/g, i6 = /%60/g, i8 = /%7B/g, i5 = /%7C/g, i7 = /%7D/g, i9 = /%20/g;
function le(e10) {
  return encodeURI("" + e10).replace(i5, "|").replace(i2, "[").replace(i3, "]");
}
function lt(e10) {
  return le(e10).replace(i1, "%2B").replace(i9, "+").replace(iJ, "%23").replace(iQ, "%26").replace(i6, "`").replace(i8, "{").replace(i7, "}").replace(i4, "^");
}
function ln(e10) {
  return null == e10 ? "" : le(e10).replace(iJ, "%23").replace(i0, "%3F").replace(iX, "%2F");
}
function lr(e10) {
  try {
    return decodeURIComponent("" + e10);
  } catch (t10) {
    iv(`Error decoding "${e10}". Using original value`);
  }
  return "" + e10;
}
function lo(e10) {
  let t10 = {};
  if ("" === e10 || "?" === e10)
    return t10;
  let r10 = "?" === e10[0], o10 = /* @__PURE__ */ (r10 ? e10.slice(1) : e10).split("&");
  for (let e11 = 0; e11 < o10.length; ++e11) {
    let r11 = /* @__PURE__ */ o10[e11].replace(i1, " "), i10 = /* @__PURE__ */ r11.indexOf("="), l10 = /* @__PURE__ */ lr(i10 < 0 ? r11 : r11.slice(0, i10)), a10 = i10 < 0 ? null : lr(/* @__PURE__ */ r11.slice(i10 + 1));
    if (l10 in t10) {
      let e12 = t10[l10];
      ih(e12) || (e12 = t10[l10] = [e12]), e12.push(a10);
    } else
      t10[l10] = a10;
  }
  return t10;
}
function li(e10) {
  let t10 = "";
  for (let r10 in e10) {
    let o10 = e10[r10];
    if (r10 = lt(r10).replace(iZ, "%3D"), null == o10) {
      void 0 !== o10 && (t10 += (t10.length ? "&" : "") + r10);
      continue;
    }
    let i10 = ih(o10) ? o10.map((e11) => e11 && lt(e11)) : [o10 && lt(o10)];
    i10.forEach((e11) => {
      void 0 !== e11 && (t10 += (t10.length ? "&" : "") + r10, null != e11 && (t10 += "=" + e11));
    });
  }
  return t10;
}
let ll = /* @__PURE__ */ Symbol("router view location matched"), la = /* @__PURE__ */ Symbol("router view depth"), ls = /* @__PURE__ */ Symbol("router"), lu = /* @__PURE__ */ Symbol("route location"), lc = /* @__PURE__ */ Symbol("router view location");
function lf() {
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
function lp(e10, t10, r10, o10, i10) {
  let l10 = o10 && // name is defined if record is because of the function overload
  (o10.enterCallbacks[i10] = o10.enterCallbacks[i10] || []);
  return () => new Promise((a10, s2) => {
    let u2;
    let c2 = (e11) => {
      false === e11 ? s2(/* @__PURE__ */ iF(4, { from: r10, to: t10 })) : e11 instanceof Error ? s2(e11) : "string" == typeof e11 || e11 && "object" == typeof e11 ? s2(/* @__PURE__ */ iF(2, { from: t10, to: e11 })) : (l10 && // since enterCallbackArray is truthy, both record and name also are
      o10.enterCallbacks[i10] === l10 && "function" == typeof e11 && l10.push(e11), a10());
    }, f2 = /* @__PURE__ */ e10.call(o10 && o10.instances[i10], t10, r10, (u2 = 0, function() {
      1 == u2++ && iv(`The "next" callback was called more than once in one navigation guard when going from "${r10.fullPath}" to "${t10.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), c2._called = true, 1 === u2 && c2.apply(null, arguments);
    })), p2 = /* @__PURE__ */ Promise.resolve(f2);
    if (e10.length < 3 && (p2 = /* @__PURE__ */ p2.then(c2)), e10.length > 2) {
      let t11 = `The "next" callback was never called inside of ${e10.name ? '"' + e10.name + '"' : ""}:
${e10.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if ("object" == typeof f2 && "then" in f2)
        p2 = /* @__PURE__ */ p2.then((e11) => c2._called ? e11 : (iv(t11), Promise.reject(Error("Invalid navigation guard"))));
      else if (void 0 !== f2 && !c2._called) {
        iv(t11), s2(Error("Invalid navigation guard"));
        return;
      }
    }
    p2.catch((e11) => s2(e11));
  });
}
function ld(e10, t10, r10, o10) {
  let i10 = [];
  for (let a10 of e10)
    for (let e11 in a10.components || a10.children.length || iv(`Record with path "${a10.path}" is either missing a "component(s)" or "children" property.`), a10.components) {
      let s2 = a10.components[e11];
      if (s2 && ("object" == typeof s2 || "function" == typeof s2)) {
        if ("then" in s2) {
          iv(`Component "${e11}" in record with path "${a10.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          let t11 = s2;
          s2 = () => t11;
        } else
          s2.__asyncLoader && // warn only once per component
          !s2.__warnedDefineAsync && (s2.__warnedDefineAsync = true, iv(`Component "${e11}" in record with path "${a10.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      } else
        throw iv(`Component "${e11}" in record with path "${a10.path}" is not a valid component. Received "${String(s2)}".`), Error("Invalid route component");
      if ("beforeRouteEnter" === t10 || a10.instances[e11]) {
        var l10;
        if ("object" == typeof (l10 = s2) || "displayName" in l10 || "props" in l10 || "__vccOpts" in l10) {
          let l11 = s2.__vccOpts || s2, u2 = l11[t10];
          u2 && i10.push(/* @__PURE__ */ lp(u2, r10, o10, a10, e11));
        } else {
          let l11 = /* @__PURE__ */ s2();
          "catch" in l11 || (iv(`Component "${e11}" in record with path "${a10.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), l11 = /* @__PURE__ */ Promise.resolve(l11)), i10.push(() => l11.then((i11) => {
            if (!i11)
              return Promise.reject(Error(`Couldn't resolve component "${e11}" at "${a10.path}"`));
            let l12 = i11.__esModule || "Module" === i11[Symbol.toStringTag] ? i11.default : i11;
            a10.components[e11] = l12;
            let s3 = l12.__vccOpts || l12, u2 = s3[t10];
            return u2 && lp(u2, r10, o10, a10, e11)();
          }));
        }
      }
    }
  return i10;
}
function lh(e10) {
  let t10 = /* @__PURE__ */ rk(ls), r10 = /* @__PURE__ */ rk(lu), o10 = /* @__PURE__ */ oP(() => t10.resolve(/* @__PURE__ */ tj(e10.to))), i10 = /* @__PURE__ */ oP(() => {
    let { matched: e11 } = o10.value, { length: t11 } = e11, i11 = e11[t11 - 1], l11 = r10.matched;
    if (!i11 || !l11.length)
      return -1;
    let a11 = /* @__PURE__ */ l11.findIndex(/* @__PURE__ */ iw.bind(null, i11));
    if (a11 > -1)
      return a11;
    let s2 = /* @__PURE__ */ lm(e11[t11 - 2]);
    return t11 > 1 && // if the parent and matched route have the same path, this link is
    // referring to the empty child. Or we currently are on a different
    // child of the same parent
    lm(i11) === s2 && // avoid comparing the child with its parent
    l11[l11.length - 1].path !== s2 ? l11.findIndex(/* @__PURE__ */ iw.bind(null, e11[t11 - 2])) : a11;
  }), l10 = /* @__PURE__ */ oP(() => i10.value > -1 && function(e11, t11) {
    for (let r11 in t11) {
      let o11 = t11[r11], i11 = e11[r11];
      if ("string" == typeof o11) {
        if (o11 !== i11)
          return false;
      } else if (!ih(i11) || i11.length !== o11.length || o11.some((e12, t12) => e12 !== i11[t12]))
        return false;
    }
    return true;
  }(r10.params, o10.value.params)), a10 = /* @__PURE__ */ oP(() => i10.value > -1 && i10.value === r10.matched.length - 1 && ix(r10.params, o10.value.params));
  if (iu) {
    let e11 = /* @__PURE__ */ od();
    if (e11) {
      let t11 = { route: o10.value, isActive: l10.value, isExactActive: a10.value };
      e11.__vrl_devtools = e11.__vrl_devtools || [], e11.__vrl_devtools.push(t11), nR(() => {
        t11.route = o10.value, t11.isActive = l10.value, t11.isExactActive = a10.value;
      }, null, { flush: "post" });
    }
  }
  return { route: o10, href: /* @__PURE__ */ oP(() => o10.value.href), isActive: l10, isExactActive: a10, navigate: function() {
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
    }(r11) ? Promise.resolve() : t10[tj(e10.replace) ? "replace" : "push"](/* @__PURE__ */ tj(e10.to)).catch(id);
  } };
}
let lv = /* @__PURE__ */ nJ({ name: "RouterLink", compatConfig: { MODE: 3 }, props: {
  to: { type: [String, Object], required: true },
  replace: Boolean,
  activeClass: String,
  // inactiveClass: String,
  exactActiveClass: String,
  custom: Boolean,
  ariaCurrentValue: { type: String, default: "page" }
}, useLink: lh, setup(e10, t10) {
  let { slots: r10 } = t10, o10 = /* @__PURE__ */ tc(/* @__PURE__ */ lh(e10)), { options: i10 } = rk(ls), l10 = /* @__PURE__ */ oP(() => ({
    [lg(e10.activeClass, i10.linkActiveClass, "router-link-active")]: o10.isActive,
    // [getLinkClass(
    //   props.inactiveClass,
    //   options.linkInactiveClass,
    //   'router-link-inactive'
    // )]: !link.isExactActive,
    [lg(e10.exactActiveClass, i10.linkExactActiveClass, "router-link-exact-active")]: o10.isExactActive
  }));
  return () => {
    let t11 = r10.default && r10.default(o10);
    return e10.custom ? t11 : oA("a", {
      "aria-current": o10.isExactActive ? e10.ariaCurrentValue : null,
      href: o10.href,
      // this would override user added attrs but Vue will still add
      // the listener, so we end up triggering both
      onClick: o10.navigate,
      class: l10.value
    }, t11);
  };
} });
function lm(e10) {
  return e10 ? e10.aliasOf ? e10.aliasOf.path : e10.path : "";
}
let lg = (e10, t10, r10) => null != e10 ? e10 : null != t10 ? t10 : r10, ly = /* @__PURE__ */ nJ({
  name: "RouterView",
  // #674 we manually inherit them
  inheritAttrs: false,
  props: { name: { type: String, default: "default" }, route: Object },
  // Better compat for @vue/compat users
  // https://github.com/vuejs/router/issues/1315
  compatConfig: { MODE: 3 },
  setup(e10, t10) {
    let { attrs: r10, slots: o10 } = t10;
    !function() {
      let e11 = /* @__PURE__ */ od(), t11 = e11.parent && e11.parent.type.name, r11 = e11.parent && e11.parent.subTree && e11.parent.subTree.type;
      if (t11 && ("KeepAlive" === t11 || t11.includes("Transition")) && "object" == typeof r11 && "RouterView" === r11.name) {
        let e12 = "KeepAlive" === t11 ? "keep-alive" : "transition";
        iv(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${e12}>
    <component :is="Component" />
  </${e12}>
</router-view>`);
      }
    }();
    let i10 = /* @__PURE__ */ rk(lc), l10 = /* @__PURE__ */ oP(() => e10.route || i10.value), a10 = /* @__PURE__ */ rk(la, 0), s2 = /* @__PURE__ */ oP(() => {
      let e11, t11 = /* @__PURE__ */ tj(a10), { matched: r11 } = l10.value;
      for (; (e11 = r11[t11]) && !e11.components; )
        t11++;
      return t11;
    }), u2 = /* @__PURE__ */ oP(() => l10.value.matched[s2.value]);
    rS(la, /* @__PURE__ */ oP(() => s2.value + 1)), rS(ll, u2), rS(lc, l10);
    let c2 = /* @__PURE__ */ tC();
    return nI(() => [c2.value, u2.value, e10.name], (e11, t11) => {
      let [r11, o11, i11] = e11, [l11, a11, s3] = t11;
      o11 && (o11.instances[i11] = r11, a11 && a11 !== o11 && r11 && r11 === l11 && (o11.leaveGuards.size || (o11.leaveGuards = a11.leaveGuards), o11.updateGuards.size || (o11.updateGuards = a11.updateGuards))), !r11 || !o11 || // if there is no instance but to and from are the same this might be
      // the first visit
      a11 && iw(o11, a11) && l11 || (o11.enterCallbacks[i11] || []).forEach((e12) => e12(r11));
    }, { flush: "post" }), () => {
      let t11 = l10.value, i11 = e10.name, a11 = u2.value, f2 = a11 && a11.components[i11];
      if (!f2)
        return lb(o10.default, { Component: f2, route: t11 });
      let p2 = a11.props[i11], d2 = p2 ? true === p2 ? t11.params : "function" == typeof p2 ? p2(t11) : p2 : null, h2 = /* @__PURE__ */ oA(f2, /* @__PURE__ */ ic({}, d2, r10, { onVnodeUnmounted: (e11) => {
        e11.component.isUnmounted && (a11.instances[i11] = null);
      }, ref: c2 }));
      if (iu && h2.ref) {
        let e11 = { depth: s2.value, name: a11.name, path: a11.path, meta: a11.meta }, t12 = ih(h2.ref) ? h2.ref.map((e12) => e12.i) : [h2.ref.i];
        t12.forEach((t13) => {
          t13.__vrv_devtools = e11;
        });
      }
      return (
        // h and <component :is="..."> both accept vnodes
        lb(o10.default, { Component: h2, route: t11 }) || h2
      );
    };
  }
});
function lb(e10, t10) {
  if (!e10)
    return null;
  let r10 = /* @__PURE__ */ e10(t10);
  return 1 === r10.length ? r10[0] : r10;
}
function l_(e10, t10) {
  let r10 = /* @__PURE__ */ ic({}, e10, {
    // remove variables that can contain vue instances
    matched: /* @__PURE__ */ e10.matched.map((e11) => function(e12, t11) {
      let r11 = {};
      for (let o10 in e12)
        t11.includes(o10) || (r11[o10] = e12[o10]);
      return r11;
    }(e11, ["instances", "children", "aliasOf"]))
  });
  return { _custom: { type: null, readOnly: true, display: e10.fullPath, tooltip: t10, value: r10 } };
}
function lw(e10) {
  return { _custom: { display: e10 } };
}
let lx = 0;
function lS(e10) {
  let t10 = [], { record: r10 } = e10;
  null != r10.name && t10.push({ label: /* @__PURE__ */ String(r10.name), textColor: 0, backgroundColor: 2282478 }), r10.aliasOf && t10.push({ label: "alias", textColor: 0, backgroundColor: 16486972 }), e10.__vd_match && t10.push({ label: "matches", textColor: 0, backgroundColor: 15485081 }), e10.__vd_exactActive && t10.push({ label: "exact", textColor: 0, backgroundColor: 8702998 }), e10.__vd_active && t10.push({ label: "active", textColor: 0, backgroundColor: 2450411 }), r10.redirect && t10.push({ label: "string" == typeof r10.redirect ? `redirect: ${r10.redirect}` : "redirects", textColor: 16777215, backgroundColor: 6710886 });
  let o10 = r10.__vd_id;
  return null == o10 && (o10 = /* @__PURE__ */ String(lk++), r10.__vd_id = o10), { id: o10, label: r10.path, tags: t10, children: /* @__PURE__ */ e10.children.map(lS) };
}
let lk = 0, l$ = /^\/(.*)\/([a-z]*)$/;
function lO(e10) {
  e10.__vd_match = false, e10.children.forEach(lO);
}
function lC(e10) {
  let t10, r10, o10;
  let i10 = /* @__PURE__ */ function(e11, t11) {
    let r11 = [], o11 = /* @__PURE__ */ new Map();
    function i11(e12, a11, s3) {
      let u3, c3;
      let f3 = !s3, p3 = { path: e12.path, redirect: e12.redirect, name: e12.name, meta: e12.meta || {}, aliasOf: void 0, beforeEnter: e12.beforeEnter, props: /* @__PURE__ */ function(e13) {
        let t12 = {}, r12 = e13.props || false;
        if ("component" in e13)
          t12.default = r12;
        else
          for (let o12 in e13.components)
            t12[o12] = "object" == typeof r12 ? r12[o12] : r12;
        return t12;
      }(e12), children: e12.children || [], instances: {}, leaveGuards: /* @__PURE__ */ new Set(), updateGuards: /* @__PURE__ */ new Set(), enterCallbacks: {}, components: "components" in e12 ? e12.components || null : e12.component && { default: e12.component } };
      a11 && a11.record.name && !p3.name && !p3.path && iv(`The route named "${String(a11.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`), p3.aliasOf = s3 && s3.record;
      let d3 = /* @__PURE__ */ iK(t11, e12), h3 = [p3];
      if ("alias" in e12) {
        let t12 = "string" == typeof e12.alias ? [e12.alias] : e12.alias;
        for (let e13 of t12)
          h3.push(/* @__PURE__ */ ic({}, p3, {
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
        if (u3 = /* @__PURE__ */ function(e13, t13, r12) {
          let o12 = /* @__PURE__ */ function(e14, t14) {
            let r13 = /* @__PURE__ */ ic({}, iU, t14), o13 = [], i13 = r13.start ? "^" : "", l12 = [];
            for (let t15 of e14) {
              let e15 = t15.length ? [] : [90];
              r13.strict && !t15.length && (i13 += "/");
              for (let o14 = 0; o14 < t15.length; o14++) {
                let a13 = t15[o14], s4 = 40 + (r13.sensitive ? 0.25 : 0);
                if (0 === a13.type)
                  o14 || (i13 += "/"), i13 += /* @__PURE__ */ a13.value.replace(iz, "\\$&"), s4 += 40;
                else if (1 === a13.type) {
                  let { value: e16, repeatable: r14, optional: u4, regexp: c4 } = a13;
                  l12.push({ name: e16, repeatable: r14, optional: u4 });
                  let f4 = c4 || iD;
                  if (f4 !== iD) {
                    s4 += 10;
                    try {
                      RegExp(`(${f4})`);
                    } catch (t16) {
                      throw Error(`Invalid custom RegExp for param "${e16}" (${f4}): ` + t16.message);
                    }
                  }
                  let p4 = r14 ? `((?:${f4})(?:/(?:${f4}))*)` : `(${f4})`;
                  o14 || (p4 = u4 && t15.length < 2 ? `(?:/${p4})` : "/" + p4), u4 && (p4 += "?"), i13 += p4, s4 += 20, u4 && (s4 += -8), r14 && (s4 += -20), ".*" === f4 && (s4 += -50);
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
                    if (ih(u4) && !a13)
                      throw Error(`Provided param "${l13}" is an array but it is not repeatable (* or + modifiers)`);
                    let c4 = ih(u4) ? u4.join("/") : u4;
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
          }(/* @__PURE__ */ function(e14) {
            let t14, r13;
            if (!e14)
              return [[]];
            if ("/" === e14)
              return [[iW]];
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
                  "(" === r13 ? i13 = 2 : iq.test(r13) ? c4 += r13 : (p4(), i13 = 0, "*" !== r13 && "?" !== r13 && "+" !== r13 && u4--);
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
          }(e13.path), r12);
          {
            let t14 = /* @__PURE__ */ new Set();
            for (let r13 of o12.keys)
              t14.has(r13.name) && iv(`Found duplicated params with name "${r13.name}" for path "${e13.path}". Only the last one will be available on "$route.params".`), t14.add(r13.name);
          }
          let i12 = /* @__PURE__ */ ic(o12, {
            record: e13,
            parent: t13,
            // these needs to be populated by the parent
            children: [],
            alias: []
          });
          return t13 && !i12.record.aliasOf == !t13.record.aliasOf && t13.children.push(i12), i12;
        }(t12, a11, d3), a11 && "/" === h4[0] && function(e13, t13) {
          for (let r12 of t13.keys)
            if (!e13.keys.find(/* @__PURE__ */ iY.bind(null, r12)))
              return iv(`Absolute path "${e13.record.path}" must have the exact same param named "${r12.name}" as its parent "${t13.record.path}".`);
        }(u3, a11), s3 ? (s3.alias.push(u3), function(e13, t13) {
          for (let r12 of e13.keys)
            if (!r12.optional && !t13.keys.find(/* @__PURE__ */ iY.bind(null, r12)))
              return iv(`Alias "${t13.record.path}" and the original record: "${e13.record.path}" must have the exact same param named "${r12.name}"`);
          for (let r12 of t13.keys)
            if (!r12.optional && !e13.keys.find(/* @__PURE__ */ iY.bind(null, r12)))
              return iv(`Alias "${t13.record.path}" and the original record: "${e13.record.path}" must have the exact same param named "${r12.name}"`);
        }(s3, u3)) : ((c3 = c3 || u3) !== u3 && c3.alias.push(u3), f3 && e12.name && !iG(u3) && l11(e12.name)), p3.children) {
          let e13 = p3.children;
          for (let t13 = 0; t13 < e13.length; t13++)
            i11(e13[t13], u3, s3 && s3.children[t13]);
        }
        s3 = s3 || u3, (u3.record.components && Object.keys(u3.record.components).length || u3.record.name || u3.record.redirect) && function(e13) {
          let t13 = 0;
          for (; t13 < r11.length && function(e14, t14) {
            let r12 = 0, o12 = e14.score, i12 = t14.score;
            for (; r12 < o12.length && r12 < i12.length; ) {
              let e15 = /* @__PURE__ */ function(e16, t15) {
                let r13 = 0;
                for (; r13 < e16.length && r13 < t15.length; ) {
                  let o13 = t15[r13] - e16[r13];
                  if (o13)
                    return o13;
                  r13++;
                }
                return e16.length < t15.length ? 1 === e16.length && 80 === e16[0] ? -1 : 1 : e16.length > t15.length ? 1 === t15.length && 80 === t15[0] ? 1 : -1 : 0;
              }(o12[r12], i12[r12]);
              if (e15)
                return e15;
              r12++;
            }
            if (1 === Math.abs(i12.length - o12.length)) {
              if (iB(o12))
                return 1;
              if (iB(i12))
                return -1;
            }
            return i12.length - o12.length;
          }(e13, r11[t13]) >= 0 && // Adding children with empty path should still appear before the parent
          // https://github.com/vuejs/router/issues/1124
          (e13.record.path !== r11[t13].record.path || !function e14(t14, r12) {
            return r12.children.some((r13) => r13 === t14 || e14(t14, r13));
          }(e13, r11[t13])); )
            t13++;
          r11.splice(t13, 0, e13), e13.record.name && !iG(e13) && o11.set(e13.record.name, e13);
        }(u3);
      }
      return c3 ? () => {
        l11(c3);
      } : id;
    }
    function l11(e12) {
      if (iI(e12)) {
        let t12 = /* @__PURE__ */ o11.get(e12);
        t12 && (o11.delete(e12), r11.splice(/* @__PURE__ */ r11.indexOf(t12), 1), t12.children.forEach(l11), t12.alias.forEach(l11));
      } else {
        let t12 = /* @__PURE__ */ r11.indexOf(e12);
        t12 > -1 && (r11.splice(t12, 1), e12.record.name && o11.delete(e12.record.name), e12.children.forEach(l11), e12.alias.forEach(l11));
      }
    }
    return t11 = /* @__PURE__ */ iK({ strict: false, end: true, sensitive: false }, t11), e11.forEach((e12) => i11(e12)), { addRoute: i11, resolve: function(e12, t12) {
      let i12, l12, a11;
      let s3 = {};
      if ("name" in e12 && e12.name) {
        if (!(i12 = /* @__PURE__ */ o11.get(e12.name)))
          throw iF(1, { location: e12 });
        {
          let t13 = /* @__PURE__ */ Object.keys(e12.params || {}).filter((e13) => !i12.keys.find((t14) => t14.name === e13));
          t13.length && iv(`Discarded invalid param(s) "${t13.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
        }
        a11 = i12.record.name, s3 = /* @__PURE__ */ ic(
          /* @__PURE__ */ iH(
            t12.params,
            // TODO: only keep optional params coming from a parent record
            /* @__PURE__ */ i12.keys.filter((e13) => !e13.optional).map((e13) => e13.name)
          ),
          // #1497 this ensures better active/exact matching
          e12.params && iH(e12.params, /* @__PURE__ */ i12.keys.map((e13) => e13.name))
        ), l12 = /* @__PURE__ */ i12.stringify(s3);
      } else if ("path" in e12)
        (l12 = e12.path).startsWith("/") || iv(`The Matcher cannot resolve relative paths but received "${l12}". Unless you directly called \`matcher.resolve("${l12}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), (i12 = /* @__PURE__ */ r11.find((e13) => e13.re.test(l12))) && (s3 = /* @__PURE__ */ i12.parse(l12), a11 = i12.record.name);
      else {
        if (!(i12 = t12.name ? o11.get(t12.name) : r11.find((e13) => e13.re.test(t12.path))))
          throw iF(1, { location: e12, currentLocation: t12 });
        a11 = i12.record.name, s3 = /* @__PURE__ */ ic({}, t12.params, e12.params), l12 = /* @__PURE__ */ i12.stringify(s3);
      }
      let u3 = [], c3 = i12;
      for (; c3; )
        u3.unshift(c3.record), c3 = c3.parent;
      return { name: a11, path: l12, params: s3, matched: u3, meta: u3.reduce((e13, t13) => ic(e13, t13.meta), {}) };
    }, removeRoute: l11, getRoutes: function() {
      return r11;
    }, getRecordMatcher: function(e12) {
      return o11.get(e12);
    } };
  }(e10.routes, e10), l10 = e10.parseQuery || lo, a10 = e10.stringifyQuery || li, s2 = e10.history;
  if (!s2)
    throw Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  let u2 = /* @__PURE__ */ lf(), c2 = /* @__PURE__ */ lf(), f2 = /* @__PURE__ */ lf(), p2 = /* @__PURE__ */ tE(iR), d2 = iR;
  iu && e10.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  let h2 = /* @__PURE__ */ ip.bind(null, (e11) => "" + e11), m2 = /* @__PURE__ */ ip.bind(null, ln), g2 = /* @__PURE__ */ ip.bind(null, lr);
  function y2(e11, t11) {
    let r11;
    if (t11 = /* @__PURE__ */ ic({}, t11 || p2.value), "string" == typeof e11) {
      let r12 = /* @__PURE__ */ iy(l10, e11, t11.path), o12 = /* @__PURE__ */ i10.resolve({ path: r12.path }, t11), a11 = /* @__PURE__ */ s2.createHref(r12.fullPath);
      return a11.startsWith("//") ? iv(`Location "${e11}" resolved to "${a11}". A resolved location cannot start with multiple slashes.`) : o12.matched.length || iv(`No match found for location with path "${e11}"`), ic(r12, o12, { params: /* @__PURE__ */ g2(o12.params), hash: /* @__PURE__ */ lr(r12.hash), redirectedFrom: void 0, href: a11 });
    }
    if ("path" in e11)
      "params" in e11 && !("name" in e11) && // @ts-expect-error: the type is never
      Object.keys(e11.params).length && iv(`Path "${e11.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), r11 = /* @__PURE__ */ ic({}, e11, { path: iy(l10, e11.path, t11.path).path });
    else {
      let o12 = /* @__PURE__ */ ic({}, e11.params);
      for (let e12 in o12)
        null == o12[e12] && delete o12[e12];
      r11 = /* @__PURE__ */ ic({}, e11, { params: /* @__PURE__ */ m2(o12) }), t11.params = /* @__PURE__ */ m2(t11.params);
    }
    let o11 = /* @__PURE__ */ i10.resolve(r11, t11), u3 = e11.hash || "";
    u3 && !u3.startsWith("#") && iv(`A \`hash\` should always start with the character "#". Replace "${u3}" with "#${u3}".`), o11.params = /* @__PURE__ */ h2(/* @__PURE__ */ g2(o11.params));
    let c3 = /* @__PURE__ */ function(e12, t12) {
      let r12 = t12.query ? e12(t12.query) : "";
      return t12.path + (r12 && "?") + r12 + (t12.hash || "");
    }(a10, /* @__PURE__ */ ic({}, e11, { hash: le(u3).replace(i8, "{").replace(i7, "}").replace(i4, "^"), path: o11.path })), f3 = /* @__PURE__ */ s2.createHref(c3);
    return f3.startsWith("//") ? iv(`Location "${e11}" resolved to "${f3}". A resolved location cannot start with multiple slashes.`) : o11.matched.length || iv(`No match found for location with path "${"path" in e11 ? e11.path : e11}"`), ic({
      fullPath: c3,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: u3,
      query: (
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        a10 === li ? function(e12) {
          let t12 = {};
          for (let r12 in e12) {
            let o12 = e12[r12];
            void 0 !== o12 && (t12[r12] = ih(o12) ? o12.map((e13) => null == e13 ? null : "" + e13) : null == o12 ? o12 : "" + o12);
          }
          return t12;
        }(e11.query) : e11.query || {}
      )
    }, o11, { redirectedFrom: void 0, href: f3 });
  }
  function b2(e11) {
    return "string" == typeof e11 ? iy(l10, e11, p2.value.path) : ic({}, e11);
  }
  function _2(e11, t11) {
    if (d2 !== e11)
      return iF(8, { from: t11, to: e11 });
  }
  function w2(e11) {
    let t11 = e11.matched[e11.matched.length - 1];
    if (t11 && t11.redirect) {
      let { redirect: r11 } = t11, o11 = "function" == typeof r11 ? r11(e11) : r11;
      if ("string" == typeof o11 && ((o11 = o11.includes("?") || o11.includes("#") ? o11 = /* @__PURE__ */ b2(o11) : { path: o11 }).params = {}), !("path" in o11) && !("name" in o11))
        throw iv(`Invalid redirect found:
${JSON.stringify(o11, null, 2)}
 when navigating to "${e11.fullPath}". A redirect must contain a name or path. This will break in production.`), Error("Invalid redirect");
      return ic({
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
    return c3 ? x2(/* @__PURE__ */ ic(/* @__PURE__ */ b2(c3), { state: "object" == typeof c3 ? ic({}, l11, c3.state) : l11, force: s3, replace: u3 }), t11 || o11) : (o11.redirectedFrom = t11, !s3 && i_(a10, i11, o11) && (r11 = /* @__PURE__ */ iF(16, { to: o11, from: i11 }), T2(
      i11,
      i11,
      // history.listen is with a redirect, which makes it become a push
      true,
      // cannot be manually navigated to
      false
    )), (r11 ? Promise.resolve(r11) : $2(o11, i11)).catch((e12) => iN(e12) ? iN(e12, 2) ? e12 : j2(e12) : A2(e12, o11, i11)).then((e12) => {
      if (e12) {
        if (iN(e12, 2))
          return i_(a10, /* @__PURE__ */ y2(e12.to), o11) && // and we have done it a couple of times
          t11 && // @ts-expect-error: added only in dev
          (t11._count = t11._count ? t11._count + 1 : 1) > 30 ? (iv(`Detected a possibly infinite redirection in a navigation guard when going from "${i11.fullPath}" to "${o11.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(Error("Infinite redirect in navigation guard"))) : x2(/* @__PURE__ */ ic({
            // preserve an existing replacement but allow the redirect to override it
            replace: u3
          }, /* @__PURE__ */ b2(e12.to), { state: "object" == typeof e12.to ? ic({}, l11, e12.to.state) : l11, force: s3 }), t11 || o11);
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
        l13 && (e12.matched.find((e13) => iw(e13, l13)) ? o12.push(l13) : r12.push(l13));
        let s3 = e12.matched[a12];
        s3 && !t12.matched.find((e13) => iw(e13, s3)) && i12.push(s3);
      }
      return [r12, o12, i12];
    }(e11, t11);
    for (let i12 of (r11 = /* @__PURE__ */ ld(/* @__PURE__ */ o11.reverse(), "beforeRouteLeave", e11, t11), o11))
      i12.leaveGuards.forEach((o12) => {
        r11.push(/* @__PURE__ */ lp(o12, e11, t11));
      });
    let a11 = /* @__PURE__ */ S2.bind(null, e11, t11);
    return r11.push(a11), L2(r11).then(() => {
      for (let o12 of (r11 = [], u2.list()))
        r11.push(/* @__PURE__ */ lp(o12, e11, t11));
      return r11.push(a11), L2(r11);
    }).then(() => {
      for (let o12 of (r11 = /* @__PURE__ */ ld(i11, "beforeRouteUpdate", e11, t11), i11))
        o12.updateGuards.forEach((o13) => {
          r11.push(/* @__PURE__ */ lp(o13, e11, t11));
        });
      return r11.push(a11), L2(r11);
    }).then(() => {
      for (let o12 of (r11 = [], l11))
        if (o12.beforeEnter) {
          if (ih(o12.beforeEnter))
            for (let i12 of o12.beforeEnter)
              r11.push(/* @__PURE__ */ lp(i12, e11, t11));
          else
            r11.push(/* @__PURE__ */ lp(o12.beforeEnter, e11, t11));
        }
      return r11.push(a11), L2(r11);
    }).then(() => (e11.matched.forEach((e12) => e12.enterCallbacks = {}), (r11 = /* @__PURE__ */ ld(l11, "beforeRouteEnter", e11, t11)).push(a11), L2(r11))).then(() => {
      for (let o12 of (r11 = [], c2.list()))
        r11.push(/* @__PURE__ */ lp(o12, e11, t11));
      return r11.push(a11), L2(r11);
    }).catch((e12) => iN(e12, 8) ? e12 : Promise.reject(e12));
  }
  function O2(e11, t11, r11) {
    f2.list().forEach((o11) => k2(() => o11(e11, t11, r11)));
  }
  function C2(e11, t11, r11, o11, i11) {
    let l11 = /* @__PURE__ */ _2(e11, t11);
    if (l11)
      return l11;
    let a11 = t11 === iR, u3 = iu ? history.state : {};
    r11 && (o11 || a11 ? s2.replace(e11.fullPath, /* @__PURE__ */ ic({ scroll: a11 && u3 && u3.scroll }, i11)) : s2.push(e11.fullPath, i11)), p2.value = e11, T2(e11, t11, r11, a11), j2();
  }
  let E2 = /* @__PURE__ */ lf(), P2 = /* @__PURE__ */ lf();
  function A2(e11, t11, r11) {
    j2(e11);
    let o11 = /* @__PURE__ */ P2.list();
    return o11.length ? o11.forEach((o12) => o12(e11, t11, r11)) : (iv("uncaught error during route navigation:"), console.error(e11)), Promise.reject(e11);
  }
  function j2(e11) {
    return r10 || (r10 = !e11, t10 || (t10 = /* @__PURE__ */ s2.listen((e12, t11, r11) => {
      if (!M2.listening)
        return;
      let o11 = /* @__PURE__ */ y2(e12), i11 = /* @__PURE__ */ w2(o11);
      if (i11) {
        x2(/* @__PURE__ */ ic(i11, { replace: true }), o11).catch(id);
        return;
      }
      d2 = o11;
      let l11 = p2.value;
      if (iu) {
        var a11, u3;
        a11 = /* @__PURE__ */ iC(l11.fullPath, r11.delta), u3 = /* @__PURE__ */ iO(), iE.set(a11, u3);
      }
      $2(o11, l11).catch((e13) => iN(e13, 12) ? e13 : iN(e13, 2) ? (x2(e13.to, o11).then((e14) => {
        iN(e14, 20) && !r11.delta && r11.type === lR.pop && s2.go(-1, false);
      }).catch(id), Promise.reject()) : (r11.delta && s2.go(-r11.delta, false), A2(e13, o11, l11))).then((e13) => {
        (e13 = e13 || C2(o11, l11, false)) && (r11.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !iN(e13, 8) ? s2.go(-r11.delta, false) : r11.type === lR.pop && iN(e13, 20) && s2.go(-1, false)), O2(o11, l11, e13);
      }).catch(id);
    })), E2.list().forEach((t11) => {
      let [r11, o11] = t11;
      return e11 ? o11(e11) : r11();
    }), E2.reset()), e11;
  }
  function T2(t11, r11, o11, i11) {
    let { scrollBehavior: l11 } = e10;
    if (!iu || !l11)
      return Promise.resolve();
    let a11 = !o11 && function(e11) {
      let t12 = /* @__PURE__ */ iE.get(e11);
      return iE.delete(e11), t12;
    }(/* @__PURE__ */ iC(t11.fullPath, 0)) || (i11 || !o11) && history.state && history.state.scroll || null;
    return tX().then(() => l11(t11, r11, a11)).then((e11) => e11 && function(e12) {
      let t12;
      if ("el" in e12) {
        let r12 = e12.el, o12 = "string" == typeof r12 && r12.startsWith("#");
        if ("string" == typeof e12.el && (!o12 || !document.getElementById(/* @__PURE__ */ e12.el.slice(1))))
          try {
            let t13 = /* @__PURE__ */ document.querySelector(e12.el);
            if (o12 && t13) {
              iv(`The selector "${e12.el}" should be passed as "el: document.querySelector('${e12.el}')" because it starts with "#".`);
              return;
            }
          } catch (t13) {
            iv(`The selector "${e12.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
            return;
          }
        let i12 = "string" == typeof r12 ? o12 ? document.getElementById(/* @__PURE__ */ r12.slice(1)) : document.querySelector(r12) : r12;
        if (!i12) {
          iv(`Couldn't find element using selector "${e12.el}" returned by scrollBehavior.`);
          return;
        }
        t12 = /* @__PURE__ */ function(e13, t13) {
          let r13 = /* @__PURE__ */ document.documentElement.getBoundingClientRect(), o13 = /* @__PURE__ */ e13.getBoundingClientRect();
          return { behavior: t13.behavior, left: o13.left - r13.left - (t13.left || 0), top: o13.top - r13.top - (t13.top || 0) };
        }(i12, e12);
      } else
        t12 = e12;
      "scrollBehavior" in document.documentElement.style ? window.scrollTo(t12) : window.scrollTo(null != t12.left ? t12.left : window.pageXOffset, null != t12.top ? t12.top : window.pageYOffset);
    }(e11)).catch((e11) => A2(e11, t11, r11));
  }
  let I2 = (e11) => s2.go(e11), R2 = /* @__PURE__ */ new Set(), M2 = { currentRoute: p2, listening: true, addRoute: function(e11, t11) {
    let r11, o11;
    return iI(e11) ? (r11 = /* @__PURE__ */ i10.getRecordMatcher(e11), o11 = t11) : o11 = e11, i10.addRoute(o11, r11);
  }, removeRoute: function(e11) {
    let t11 = /* @__PURE__ */ i10.getRecordMatcher(e11);
    t11 ? i10.removeRoute(t11) : iv(`Cannot remove non-existent route "${String(e11)}"`);
  }, hasRoute: function(e11) {
    return !!i10.getRecordMatcher(e11);
  }, getRoutes: function() {
    return i10.getRoutes().map((e11) => e11.record);
  }, resolve: y2, options: e10, push: function(e11) {
    return x2(e11);
  }, replace: function(e11) {
    return x2(/* @__PURE__ */ ic(/* @__PURE__ */ b2(e11), { replace: true }));
  }, go: I2, back: () => I2(-1), forward: () => I2(1), beforeEach: u2.add, beforeResolve: c2.add, afterEach: f2.add, onError: P2.add, isReady: function() {
    return r10 && p2.value !== iR ? Promise.resolve() : new Promise((e11, t11) => {
      E2.add([e11, t11]);
    });
  }, install(e11) {
    e11.component("RouterLink", lv), e11.component("RouterView", ly), e11.config.globalProperties.$router = this, Object.defineProperty(e11.config.globalProperties, "$route", { enumerable: true, get: () => tj(p2) }), iu && // used for the initial navigation client side to avoid pushing
    // multiple times when the router is used in multiple apps
    !o10 && p2.value === iR && (o10 = true, x2(s2.location).catch((e12) => {
      iv("Unexpected error when starting the router:", e12);
    }));
    let l11 = {};
    for (let e12 in iR)
      Object.defineProperty(l11, e12, { get: () => p2.value[e12], enumerable: true });
    e11.provide(ls, this), e11.provide(lu, /* @__PURE__ */ tf(l11)), e11.provide(lc, p2);
    let a11 = e11.unmount;
    R2.add(e11), e11.unmount = function() {
      R2.delete(e11), R2.size < 1 && (d2 = iR, t10 && t10(), t10 = null, p2.value = iR, o10 = false, r10 = false), a11();
    }, iu && function(e12, t11, r11) {
      if (t11.__hasDevtools)
        return;
      t11.__hasDevtools = true;
      let o11 = lx++;
      !function(e13, t12) {
        let r12 = /* @__PURE__ */ il(), o12 = il().__VUE_DEVTOOLS_GLOBAL_HOOK__, i11 = ia && e13.enableEarlyProxy;
        if (o12 && (r12.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !i11))
          o12.emit("devtools-plugin:setup", e13, t12);
        else {
          let l12 = i11 ? new is(e13, o12) : null, a12 = r12.__VUE_DEVTOOLS_PLUGINS__ = r12.__VUE_DEVTOOLS_PLUGINS__ || [];
          a12.push({ pluginDescriptor: e13, setupFn: t12, proxy: l12 }), l12 && t12(l12.proxiedTarget);
        }
      }({ id: "org.vuejs.router" + (o11 ? "." + o11 : ""), label: "Vue Router", packageName: "vue-router", homepage: "https://router.vuejs.org", logo: "https://router.vuejs.org/logo.png", componentStateTypes: ["Routing"], app: e12 }, (i11) => {
        let l12;
        "function" != typeof i11.now && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), i11.on.inspectComponent((e13, r12) => {
          e13.instanceData && e13.instanceData.state.push({ type: "Routing", key: "$route", editable: false, value: /* @__PURE__ */ l_(t11.currentRoute.value, "Current Route") });
        }), i11.on.visitComponentTree((e13) => {
          let { treeNode: t12, componentInstance: r12 } = e13;
          if (r12.__vrv_devtools) {
            let e14 = r12.__vrv_devtools;
            t12.tags.push({ label: (e14.name ? `${e14.name.toString()}: ` : "") + e14.path, textColor: 0, tooltip: "This component is rendered by &lt;router-view&gt;", backgroundColor: 15485081 });
          }
          ih(r12.__vrl_devtools) && (r12.__devtoolsApi = i11, r12.__vrl_devtools.forEach((e14) => {
            let r13 = 16486972, o12 = "";
            e14.isExactActive ? (r13 = 8702998, o12 = "This is exactly active") : e14.isActive && (r13 = 2450411, o12 = "This link is active"), t12.tags.push({ label: e14.route.path, textColor: 0, tooltip: o12, backgroundColor: r13 });
          }));
        }), nI(t11.currentRoute, () => {
          c3(), i11.notifyComponentUpdate(), i11.sendInspectorTree(u3), i11.sendInspectorState(u3);
        });
        let a12 = "router:navigations:" + o11;
        i11.addTimelineLayer({ id: a12, label: `Router${o11 ? " " + o11 : ""} Navigations`, color: 4237508 }), t11.onError((e13, t12) => {
          i11.addTimelineEvent({ layerId: a12, event: { title: "Error during Navigation", subtitle: t12.fullPath, logType: "error", time: /* @__PURE__ */ i11.now(), data: { error: e13 }, groupId: t12.meta.__navigationId } });
        });
        let s3 = 0;
        t11.beforeEach((e13, t12) => {
          let r12 = { guard: /* @__PURE__ */ lw("beforeEach"), from: /* @__PURE__ */ l_(t12, "Current Location during this navigation"), to: /* @__PURE__ */ l_(e13, "Target location") };
          Object.defineProperty(e13.meta, "__navigationId", { value: s3++ }), i11.addTimelineEvent({ layerId: a12, event: { time: /* @__PURE__ */ i11.now(), title: "Start of navigation", subtitle: e13.fullPath, data: r12, groupId: e13.meta.__navigationId } });
        }), t11.afterEach((e13, t12, r12) => {
          let o12 = { guard: /* @__PURE__ */ lw("afterEach") };
          r12 ? (o12.failure = { _custom: { type: Error, readOnly: true, display: r12 ? r12.message : "", tooltip: "Navigation Failure", value: r12 } }, o12.status = /* @__PURE__ */ lw("❌")) : o12.status = /* @__PURE__ */ lw("✅"), o12.from = /* @__PURE__ */ l_(t12, "Current Location during this navigation"), o12.to = /* @__PURE__ */ l_(e13, "Target location"), i11.addTimelineEvent({ layerId: a12, event: { title: "End of navigation", subtitle: e13.fullPath, time: /* @__PURE__ */ i11.now(), data: o12, logType: r12 ? "warning" : "default", groupId: e13.meta.__navigationId } });
        });
        let u3 = "router-inspector:" + o11;
        function c3() {
          if (!l12)
            return;
          let e13 = l12, o12 = /* @__PURE__ */ r11.getRoutes().filter((e14) => !e14.parent || // these routes have a parent with no component which will not appear in the view
          // therefore we still need to include them
          !e14.parent.record.components);
          o12.forEach(lO), e13.filter && (o12 = /* @__PURE__ */ o12.filter((t12) => function e14(t13, r12) {
            let o13 = /* @__PURE__ */ String(t13.re).match(l$);
            if (t13.__vd_match = false, !o13 || o13.length < 3)
              return false;
            let i12 = new RegExp(o13[1].replace(/\$$/, ""), o13[2]);
            if (i12.test(r12))
              return t13.children.forEach((t14) => e14(t14, r12)), ("/" !== t13.record.path || "/" === r12) && (t13.__vd_match = /* @__PURE__ */ t13.re.test(r12), true);
            let l13 = /* @__PURE__ */ t13.record.path.toLowerCase(), a13 = /* @__PURE__ */ lr(l13);
            return !!(!r12.startsWith("/") && (a13.includes(r12) || l13.includes(r12)) || a13.startsWith(r12) || l13.startsWith(r12) || t13.record.name && String(t13.record.name).includes(r12)) || t13.children.some((t14) => e14(t14, r12));
          }(t12, /* @__PURE__ */ e13.filter.toLowerCase()))), o12.forEach((e14) => function e15(t12, r12) {
            let o13 = r12.matched.length && iw(r12.matched[r12.matched.length - 1], t12.record);
            t12.__vd_exactActive = t12.__vd_active = o13, o13 || (t12.__vd_active = /* @__PURE__ */ r12.matched.some((e16) => iw(e16, t12.record))), t12.children.forEach((t13) => e15(t13, r12));
          }(e14, t11.currentRoute.value)), e13.rootNodes = /* @__PURE__ */ o12.map(lS);
        }
        i11.addInspector({ id: u3, label: "Routes" + (o11 ? " " + o11 : ""), icon: "book", treeFilterPlaceholder: "Search routes" }), i11.on.getInspectorTree((t12) => {
          l12 = t12, t12.app === e12 && t12.inspectorId === u3 && c3();
        }), i11.on.getInspectorState((t12) => {
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
  function L2(e11) {
    return e11.reduce((e12, t11) => e12.then(() => k2(t11)), /* @__PURE__ */ Promise.resolve());
  }
  return M2;
}
function lE() {
  return rk(ls);
}
let lP = lv, lA = ly;
var lj, lT, lI, lR, lM, lL, lF, lN = function(e10, t10) {
  return (lN = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e11, t11) {
    e11.__proto__ = t11;
  } || function(e11, t11) {
    for (var r10 in t11)
      Object.prototype.hasOwnProperty.call(t11, r10) && (e11[r10] = t11[r10]);
  })(e10, t10);
};
function lV(e10, t10) {
  if ("function" != typeof t10 && null !== t10)
    throw TypeError("Class extends value " + String(t10) + " is not a constructor or null");
  function r10() {
    this.constructor = e10;
  }
  lN(e10, t10), e10.prototype = null === t10 ? Object.create(t10) : (r10.prototype = t10.prototype, new r10());
}
function lD(e10, t10) {
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
function lU(e10) {
  var t10 = "function" == typeof Symbol && Symbol.iterator, r10 = t10 && e10[t10], o10 = 0;
  if (r10)
    return r10.call(e10);
  if (e10 && "number" == typeof e10.length)
    return { next: function() {
      return e10 && o10 >= e10.length && (e10 = void 0), { value: e10 && e10[o10++], done: !e10 };
    } };
  throw TypeError(t10 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function lz(e10, t10) {
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
function lB(e10, t10, r10) {
  if (r10 || 2 == arguments.length)
    for (var o10, i10 = 0, l10 = t10.length; i10 < l10; i10++)
      !o10 && i10 in t10 || (o10 || (o10 = /* @__PURE__ */ Array.prototype.slice.call(t10, 0, i10)), o10[i10] = t10[i10]);
  return e10.concat(o10 || Array.prototype.slice.call(t10));
}
function lW(e10) {
  return this instanceof lW ? (this.v = e10, this) : new lW(e10);
}
function lq(e10) {
  return "function" == typeof e10;
}
function lH(e10) {
  var t10 = /* @__PURE__ */ e10(function(e11) {
    Error.call(e11), e11.stack = Error().stack;
  });
  return t10.prototype = /* @__PURE__ */ Object.create(Error.prototype), t10.prototype.constructor = t10, t10;
}
"function" == typeof SuppressedError && SuppressedError;
var lG = /* @__PURE__ */ lH(function(e10) {
  return function(t10) {
    e10(this), this.message = t10 ? t10.length + " errors occurred during unsubscription:\n" + t10.map(function(e11, t11) {
      return t11 + 1 + ") " + e11.toString();
    }).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t10;
  };
});
function lK(e10, t10) {
  if (e10) {
    var r10 = /* @__PURE__ */ e10.indexOf(t10);
    0 <= r10 && e10.splice(r10, 1);
  }
}
var lY = /* @__PURE__ */ function() {
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
            for (var a10 = /* @__PURE__ */ lU(l10), s2 = /* @__PURE__ */ a10.next(); !s2.done; s2 = /* @__PURE__ */ a10.next())
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
      if (lq(u2))
        try {
          u2();
        } catch (e12) {
          i10 = e12 instanceof lG ? e12.errors : [e12];
        }
      var c2 = this._finalizers;
      if (c2) {
        this._finalizers = null;
        try {
          for (var f2 = /* @__PURE__ */ lU(c2), p2 = /* @__PURE__ */ f2.next(); !p2.done; p2 = /* @__PURE__ */ f2.next()) {
            var d2 = p2.value;
            try {
              lX(d2);
            } catch (e12) {
              i10 = null != i10 ? i10 : [], e12 instanceof lG ? i10 = /* @__PURE__ */ lB(/* @__PURE__ */ lB([], /* @__PURE__ */ lz(i10)), /* @__PURE__ */ lz(e12.errors)) : i10.push(e12);
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
        throw new lG(i10);
    }
  }, t10.prototype.add = function(e11) {
    var r10;
    if (e11 && e11 !== this) {
      if (this.closed)
        lX(e11);
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
    t11 === e11 ? this._parentage = null : Array.isArray(t11) && lK(t11, e11);
  }, t10.prototype.remove = function(e11) {
    var r10 = this._finalizers;
    r10 && lK(r10, e11), e11 instanceof t10 && e11._removeParent(this);
  }, t10.EMPTY = ((e10 = new t10()).closed = true, e10), t10;
}(), lJ = lY.EMPTY;
function lQ(e10) {
  return e10 instanceof lY || e10 && "closed" in e10 && lq(e10.remove) && lq(e10.add) && lq(e10.unsubscribe);
}
function lX(e10) {
  lq(e10) ? e10() : e10.unsubscribe();
}
var lZ = { Promise: void 0, useDeprecatedNextContext: false }, l0 = { setTimeout: function(e10, t10) {
  for (var r10 = [], o10 = 2; o10 < arguments.length; o10++)
    r10[o10 - 2] = arguments[o10];
  return setTimeout.apply(void 0, /* @__PURE__ */ lB([e10, t10], /* @__PURE__ */ lz(r10)));
}, clearTimeout: function(e10) {
  var t10 = l0.delegate;
  return ((null == t10 ? void 0 : t10.clearTimeout) || clearTimeout)(e10);
}, delegate: void 0 };
function l1(e10) {
  l0.setTimeout(function() {
    throw e10;
  });
}
function l2() {
}
var l3 = /* @__PURE__ */ function(e10) {
  function t10(t11) {
    var r10 = e10.call(this) || this;
    return r10.isStopped = false, t11 ? (r10.destination = t11, lQ(t11) && t11.add(r10)) : r10.destination = l7, r10;
  }
  return lV(t10, e10), t10.create = function(e11, t11, r10) {
    return new l5(e11, t11, r10);
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
}(lY), l4 = Function.prototype.bind;
function l6(e10, t10) {
  return l4.call(e10, t10);
}
var l8 = /* @__PURE__ */ function() {
  function e10(e11) {
    this.partialObserver = e11;
  }
  return e10.prototype.next = function(e11) {
    var t10 = this.partialObserver;
    if (t10.next)
      try {
        t10.next(e11);
      } catch (e12) {
        l1(e12);
      }
  }, e10.prototype.error = function(e11) {
    var t10 = this.partialObserver;
    if (t10.error)
      try {
        t10.error(e11);
      } catch (e12) {
        l1(e12);
      }
    else
      l1(e11);
  }, e10.prototype.complete = function() {
    var e11 = this.partialObserver;
    if (e11.complete)
      try {
        e11.complete();
      } catch (e12) {
        l1(e12);
      }
  }, e10;
}(), l5 = /* @__PURE__ */ function(e10) {
  function t10(t11, r10, o10) {
    var i10, l10, a10 = e10.call(this) || this;
    return lq(t11) || !t11 ? i10 = { next: null != t11 ? t11 : void 0, error: null != r10 ? r10 : void 0, complete: null != o10 ? o10 : void 0 } : a10 && lZ.useDeprecatedNextContext ? ((l10 = /* @__PURE__ */ Object.create(t11)).unsubscribe = function() {
      return a10.unsubscribe();
    }, i10 = { next: t11.next && l6(t11.next, l10), error: t11.error && l6(t11.error, l10), complete: t11.complete && l6(t11.complete, l10) }) : i10 = t11, a10.destination = new l8(i10), a10;
  }
  return lV(t10, e10), t10;
}(l3), l7 = { closed: true, next: l2, error: function(e10) {
  throw e10;
}, complete: l2 }, l9 = "function" == typeof Symbol && Symbol.observable || "@@observable";
function ae(e10) {
  return e10;
}
function at() {
  for (var e10 = [], t10 = 0; t10 < arguments.length; t10++)
    e10[t10] = arguments[t10];
  return an(e10);
}
function an(e10) {
  return 0 === e10.length ? ae : 1 === e10.length ? e10[0] : function(t10) {
    return e10.reduce(function(e11, t11) {
      return t11(e11);
    }, t10);
  };
}
var ar = /* @__PURE__ */ function() {
  function e10(e11) {
    e11 && (this._subscribe = e11);
  }
  return e10.prototype.lift = function(t10) {
    var r10 = new e10();
    return r10.source = this, r10.operator = t10, r10;
  }, e10.prototype.subscribe = function(e11, t10, r10) {
    var o10, i10, l10, a10 = (o10 = e11) && o10 instanceof l3 || o10 && lq(o10.next) && lq(o10.error) && lq(o10.complete) && lQ(o10) ? e11 : new l5(e11, t10, r10);
    return i10 = this.operator, l10 = this.source, a10.add(i10 ? i10.call(a10, l10) : l10 ? this._subscribe(a10) : this._trySubscribe(a10)), a10;
  }, e10.prototype._trySubscribe = function(e11) {
    try {
      return this._subscribe(e11);
    } catch (t10) {
      e11.error(t10);
    }
  }, e10.prototype.forEach = function(e11, t10) {
    var r10 = this;
    return new (t10 = /* @__PURE__ */ ao(t10))(function(t11, o10) {
      var i10 = new l5({ next: function(t12) {
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
  }, e10.prototype[l9] = function() {
    return this;
  }, e10.prototype.pipe = function() {
    for (var e11 = [], t10 = 0; t10 < arguments.length; t10++)
      e11[t10] = arguments[t10];
    return an(e11)(this);
  }, e10.prototype.toPromise = function(e11) {
    var t10 = this;
    return new (e11 = /* @__PURE__ */ ao(e11))(function(e12, r10) {
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
function ao(e10) {
  var t10;
  return null !== (t10 = null != e10 ? e10 : lZ.Promise) && void 0 !== t10 ? t10 : Promise;
}
function ai(e10) {
  return function(t10) {
    if (lq(null == t10 ? void 0 : t10.lift))
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
function al(e10, t10, r10, o10, i10) {
  return new aa(e10, t10, r10, o10, i10);
}
var aa = /* @__PURE__ */ function(e10) {
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
  return lV(t10, e10), t10.prototype.unsubscribe = function() {
    var t11;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var r10 = this.closed;
      e10.prototype.unsubscribe.call(this), r10 || null === (t11 = this.onFinalize) || void 0 === t11 || t11.call(this);
    }
  }, t10;
}(l3), as = /* @__PURE__ */ lH(function(e10) {
  return function() {
    e10(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), au = /* @__PURE__ */ function(e10) {
  function t10() {
    var t11 = e10.call(this) || this;
    return t11.closed = false, t11.currentObservers = null, t11.observers = [], t11.isStopped = false, t11.hasError = false, t11.thrownError = null, t11;
  }
  return lV(t10, e10), t10.prototype.lift = function(e11) {
    var t11 = new ac(this, this);
    return t11.operator = e11, t11;
  }, t10.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new as();
  }, t10.prototype.next = function(e11) {
    var t11 = this;
    (function() {
      var r10, o10;
      if (t11._throwIfClosed(), !t11.isStopped) {
        t11.currentObservers || (t11.currentObservers = /* @__PURE__ */ Array.from(t11.observers));
        try {
          for (var i10 = /* @__PURE__ */ lU(t11.currentObservers), l10 = /* @__PURE__ */ i10.next(); !l10.done; l10 = /* @__PURE__ */ i10.next())
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
    return r10 || o10 ? lJ : (this.currentObservers = null, i10.push(e11), new lY(function() {
      t11.currentObservers = null, lK(i10, e11);
    }));
  }, t10.prototype._checkFinalizedStatuses = function(e11) {
    var t11 = this.hasError, r10 = this.thrownError, o10 = this.isStopped;
    t11 ? e11.error(r10) : o10 && e11.complete();
  }, t10.prototype.asObservable = function() {
    var e11 = new ar();
    return e11.source = this, e11;
  }, t10.create = function(e11, t11) {
    return new ac(e11, t11);
  }, t10;
}(ar), ac = /* @__PURE__ */ function(e10) {
  function t10(t11, r10) {
    var o10 = e10.call(this) || this;
    return o10.destination = t11, o10.source = r10, o10;
  }
  return lV(t10, e10), t10.prototype.next = function(e11) {
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
    return null !== (r10 = null === (t11 = this.source) || void 0 === t11 ? void 0 : t11.subscribe(e11)) && void 0 !== r10 ? r10 : lJ;
  }, t10;
}(au), af = /* @__PURE__ */ function(e10) {
  function t10(t11) {
    var r10 = e10.call(this) || this;
    return r10._value = t11, r10;
  }
  return lV(t10, e10), Object.defineProperty(t10.prototype, "value", { get: function() {
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
}(au), ap = /* @__PURE__ */ function(e10) {
  function t10(t11, r10) {
    return e10.call(this) || this;
  }
  return lV(t10, e10), t10.prototype.schedule = function(e11, t11) {
    return this;
  }, t10;
}(lY), ad = { setInterval: function(e10, t10) {
  for (var r10 = [], o10 = 2; o10 < arguments.length; o10++)
    r10[o10 - 2] = arguments[o10];
  return setInterval.apply(void 0, /* @__PURE__ */ lB([e10, t10], /* @__PURE__ */ lz(r10)));
}, clearInterval: function(e10) {
  var t10 = ad.delegate;
  return ((null == t10 ? void 0 : t10.clearInterval) || clearInterval)(e10);
}, delegate: void 0 }, ah = /* @__PURE__ */ function(e10) {
  function t10(t11, r10) {
    var o10 = e10.call(this, t11, r10) || this;
    return o10.scheduler = t11, o10.work = r10, o10.pending = false, o10;
  }
  return lV(t10, e10), t10.prototype.schedule = function(e11, t11) {
    if (void 0 === t11 && (t11 = 0), this.closed)
      return this;
    this.state = e11;
    var r10, o10 = this.id, i10 = this.scheduler;
    return null != o10 && (this.id = /* @__PURE__ */ this.recycleAsyncId(i10, o10, t11)), this.pending = true, this.delay = t11, this.id = null !== (r10 = this.id) && void 0 !== r10 ? r10 : this.requestAsyncId(i10, this.id, t11), this;
  }, t10.prototype.requestAsyncId = function(e11, t11, r10) {
    return void 0 === r10 && (r10 = 0), ad.setInterval(/* @__PURE__ */ e11.flush.bind(e11, this), r10);
  }, t10.prototype.recycleAsyncId = function(e11, t11, r10) {
    if (void 0 === r10 && (r10 = 0), null != r10 && this.delay === r10 && false === this.pending)
      return t11;
    null != t11 && ad.clearInterval(t11);
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
      this.work = this.state = this.scheduler = null, this.pending = false, lK(o10, this), null != t11 && (this.id = /* @__PURE__ */ this.recycleAsyncId(r10, t11, null)), this.delay = null, e10.prototype.unsubscribe.call(this);
    }
  }, t10;
}(ap), av = /* @__PURE__ */ function() {
  function e10(t10, r10) {
    void 0 === r10 && (r10 = e10.now), this.schedulerActionCtor = t10, this.now = r10;
  }
  return e10.prototype.schedule = function(e11, t10, r10) {
    return void 0 === t10 && (t10 = 0), new this.schedulerActionCtor(this, e11).schedule(r10, t10);
  }, e10.now = function() {
    return Date.now();
  }, e10;
}(), am = new (function(e10) {
  function t10(t11, r10) {
    void 0 === r10 && (r10 = av.now);
    var o10 = e10.call(this, t11, r10) || this;
    return o10.actions = [], o10._active = false, o10;
  }
  return lV(t10, e10), t10.prototype.flush = function(e11) {
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
}(av))(ah), ag = function(e10) {
  return e10 && "number" == typeof e10.length && "function" != typeof e10;
};
function ay(e10) {
  return lq(null == e10 ? void 0 : e10.then);
}
function ab(e10) {
  return Symbol.asyncIterator && lq(null == e10 ? void 0 : e10[Symbol.asyncIterator]);
}
function a_(e10) {
  return TypeError("You provided " + (null !== e10 && "object" == typeof e10 ? "an invalid object" : "'" + e10 + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
var aw = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
function ax(e10) {
  return lq(null == e10 ? void 0 : e10[aw]);
}
function aS(e10) {
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
        (r11 = /* @__PURE__ */ i10[e12](t11)).value instanceof lW ? Promise.resolve(r11.value.v).then(u2, c2) : f2(l10[0][2], r11);
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
    return lD(this, function(i10) {
      switch (i10.label) {
        case 0:
          t10 = /* @__PURE__ */ e10.getReader(), i10.label = 1;
        case 1:
          i10.trys.push([1, , 9, 10]), i10.label = 2;
        case 2:
          return [4, /* @__PURE__ */ lW(/* @__PURE__ */ t10.read())];
        case 3:
          if (o10 = (r10 = /* @__PURE__ */ i10.sent()).value, !r10.done)
            return [3, 5];
          return [4, /* @__PURE__ */ lW(void 0)];
        case 4:
          return [2, /* @__PURE__ */ i10.sent()];
        case 5:
          return [4, /* @__PURE__ */ lW(o10)];
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
function ak(e10) {
  return lq(null == e10 ? void 0 : e10.getReader);
}
function a$(e10) {
  if (e10 instanceof ar)
    return e10;
  if (null != e10) {
    if (lq(e10[l9]))
      return new ar(function(t10) {
        var r10 = /* @__PURE__ */ e10[l9]();
        if (lq(r10.subscribe))
          return r10.subscribe(t10);
        throw TypeError("Provided object does not correctly implement Symbol.observable");
      });
    if (ag(e10))
      return new ar(function(t10) {
        for (var r10 = 0; r10 < e10.length && !t10.closed; r10++)
          t10.next(e10[r10]);
        t10.complete();
      });
    if (ay(e10))
      return new ar(function(t10) {
        e10.then(function(e11) {
          t10.closed || (t10.next(e11), t10.complete());
        }, function(e11) {
          return t10.error(e11);
        }).then(null, l1);
      });
    if (ab(e10))
      return aO(e10);
    if (ax(e10))
      return new ar(function(t10) {
        var r10, o10;
        try {
          for (var i10 = /* @__PURE__ */ lU(e10), l10 = /* @__PURE__ */ i10.next(); !l10.done; l10 = /* @__PURE__ */ i10.next()) {
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
    if (ak(e10))
      return aO(/* @__PURE__ */ aS(e10));
  }
  throw a_(e10);
}
function aO(e10) {
  return new ar(function(t10) {
    (function(e11, t11) {
      var r10, o10, i10, l10, a10, s2, u2, c2;
      return a10 = this, s2 = void 0, u2 = void 0, c2 = function() {
        var a11;
        return lD(this, function(s3) {
          switch (s3.label) {
            case 0:
              s3.trys.push([0, 5, 6, 11]), r10 = /* @__PURE__ */ function(e12) {
                if (!Symbol.asyncIterator)
                  throw TypeError("Symbol.asyncIterator is not defined.");
                var t12, r11 = e12[Symbol.asyncIterator];
                return r11 ? r11.call(e12) : (e12 = lU(e12), t12 = {}, o11("next"), o11("throw"), o11("return"), t12[Symbol.asyncIterator] = function() {
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
function aC(e10, t10, r10, o10, i10) {
  void 0 === o10 && (o10 = 0), void 0 === i10 && (i10 = false);
  var l10 = /* @__PURE__ */ t10.schedule(function() {
    r10(), i10 ? e10.add(/* @__PURE__ */ this.schedule(null, o10)) : this.unsubscribe();
  }, o10);
  if (e10.add(l10), !i10)
    return l10;
}
function aE(e10, t10) {
  return void 0 === t10 && (t10 = 0), ai(function(r10, o10) {
    r10.subscribe(/* @__PURE__ */ al(o10, function(r11) {
      return aC(o10, e10, function() {
        return o10.next(r11);
      }, t10);
    }, function() {
      return aC(o10, e10, function() {
        return o10.complete();
      }, t10);
    }, function(r11) {
      return aC(o10, e10, function() {
        return o10.error(r11);
      }, t10);
    }));
  });
}
function aP(e10, t10) {
  return void 0 === t10 && (t10 = 0), ai(function(r10, o10) {
    o10.add(/* @__PURE__ */ e10.schedule(function() {
      return r10.subscribe(o10);
    }, t10));
  });
}
function aA(e10, t10) {
  if (!e10)
    throw Error("Iterable cannot be null");
  return new ar(function(r10) {
    aC(r10, t10, function() {
      var o10 = /* @__PURE__ */ e10[Symbol.asyncIterator]();
      aC(r10, t10, function() {
        o10.next().then(function(e11) {
          e11.done ? r10.complete() : r10.next(e11.value);
        });
      }, 0, true);
    });
  });
}
function aj(e10, t10) {
  return t10 ? function(e11, t11) {
    if (null != e11) {
      if (lq(e11[l9]))
        return a$(e11).pipe(/* @__PURE__ */ aP(t11), /* @__PURE__ */ aE(t11));
      if (ag(e11))
        return new ar(function(r10) {
          var o10 = 0;
          return t11.schedule(function() {
            o10 === e11.length ? r10.complete() : (r10.next(e11[o10++]), r10.closed || this.schedule());
          });
        });
      if (ay(e11))
        return a$(e11).pipe(/* @__PURE__ */ aP(t11), /* @__PURE__ */ aE(t11));
      if (ab(e11))
        return aA(e11, t11);
      if (ax(e11))
        return new ar(function(r10) {
          var o10;
          return aC(r10, t11, function() {
            o10 = /* @__PURE__ */ e11[aw](), aC(r10, t11, function() {
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
            return lq(null == o10 ? void 0 : o10.return) && o10.return();
          };
        });
      if (ak(e11))
        return aA(/* @__PURE__ */ aS(e11), t11);
    }
    throw a_(e11);
  }(e10, t10) : a$(e10);
}
function aT(e10, t10) {
  return void 0 === t10 && (t10 = am), ai(function(r10, o10) {
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
    r10.subscribe(/* @__PURE__ */ al(o10, function(r11) {
      l10 = r11, a10 = /* @__PURE__ */ t10.now(), i10 || (i10 = /* @__PURE__ */ t10.schedule(u2, e10), o10.add(i10));
    }, function() {
      s2(), o10.complete();
    }, void 0, function() {
      l10 = i10 = null;
    }));
  });
}
function aI(e10, t10, r10) {
  var o10 = lq(e10) || t10 || r10 ? { next: e10, error: t10, complete: r10 } : e10;
  return o10 ? ai(function(e11, t11) {
    null === (r11 = o10.subscribe) || void 0 === r11 || r11.call(o10);
    var r11, i10 = true;
    e11.subscribe(/* @__PURE__ */ al(t11, function(e12) {
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
  }) : ae;
}
function aR(e10) {
  for (var t10 = arguments.length, r10 = Array(t10 > 1 ? t10 - 1 : 0), o10 = 1; o10 < t10; o10++)
    r10[o10 - 1] = arguments[o10];
  return at(...r10)(/* @__PURE__ */ aj(e10));
}
var aM = /* @__PURE__ */ Symbol.for("immer-nothing"), aL = /* @__PURE__ */ Symbol.for("immer-draftable"), aF = /* @__PURE__ */ Symbol.for("immer-state"), aN = [
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
function aV(e10) {
  for (var t10 = arguments.length, r10 = Array(t10 > 1 ? t10 - 1 : 0), o10 = 1; o10 < t10; o10++)
    r10[o10 - 1] = arguments[o10];
  {
    let t11 = aN[e10], o11 = "function" == typeof t11 ? t11.apply(null, r10) : t11;
    throw Error(`[Immer] ${o11}`);
  }
}
var aD = Object.getPrototypeOf;
function aU(e10) {
  return !!e10 && !!e10[aF];
}
function az(e10) {
  var t10;
  return !!e10 && (aW(e10) || Array.isArray(e10) || !!e10[aL] || !!(null === (t10 = e10.constructor) || void 0 === t10 ? void 0 : t10[aL]) || aY(e10) || aJ(e10));
}
var aB = /* @__PURE__ */ Object.prototype.constructor.toString();
function aW(e10) {
  if (!e10 || "object" != typeof e10)
    return false;
  let t10 = /* @__PURE__ */ aD(e10);
  if (null === t10)
    return true;
  let r10 = Object.hasOwnProperty.call(t10, "constructor") && t10.constructor;
  return r10 === Object || "function" == typeof r10 && Function.toString.call(r10) === aB;
}
function aq(e10, t10) {
  0 === aH(e10) ? Object.entries(e10).forEach((r10) => {
    let [o10, i10] = r10;
    t10(o10, i10, e10);
  }) : e10.forEach((r10, o10) => t10(o10, r10, e10));
}
function aH(e10) {
  let t10 = e10[aF];
  return t10 ? t10.type_ : Array.isArray(e10) ? 1 : aY(e10) ? 2 : aJ(e10) ? 3 : 0;
}
function aG(e10, t10) {
  return 2 === aH(e10) ? e10.has(t10) : Object.prototype.hasOwnProperty.call(e10, t10);
}
function aK(e10, t10, r10) {
  let o10 = /* @__PURE__ */ aH(e10);
  2 === o10 ? e10.set(t10, r10) : 3 === o10 ? e10.add(r10) : e10[t10] = r10;
}
function aY(e10) {
  return e10 instanceof Map;
}
function aJ(e10) {
  return e10 instanceof Set;
}
function aQ(e10) {
  return e10.copy_ || e10.base_;
}
function aX(e10, t10) {
  if (aY(e10))
    return new Map(e10);
  if (aJ(e10))
    return new Set(e10);
  if (Array.isArray(e10))
    return Array.prototype.slice.call(e10);
  if (!t10 && aW(e10)) {
    if (!aD(e10)) {
      let t11 = /* @__PURE__ */ Object.create(null);
      return Object.assign(t11, e10);
    }
    return { ...e10 };
  }
  let r10 = /* @__PURE__ */ Object.getOwnPropertyDescriptors(e10);
  delete r10[aF];
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
  return Object.create(/* @__PURE__ */ aD(e10), r10);
}
function aZ(e10) {
  let t10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return a1(e10) || aU(e10) || !az(e10) || (aH(e10) > 1 && (e10.set = e10.add = e10.clear = e10.delete = a0), Object.freeze(e10), t10 && aq(e10, (e11, t11) => aZ(t11, true))), e10;
}
function a0() {
  aV(2);
}
function a1(e10) {
  return Object.isFrozen(e10);
}
var a2 = {};
function a3(e10) {
  let t10 = a2[e10];
  return t10 || aV(0, e10), t10;
}
function a4(e10, t10) {
  t10 && (a3("Patches"), e10.patches_ = [], e10.inversePatches_ = [], e10.patchListener_ = t10);
}
function a6(e10) {
  a8(e10), e10.drafts_.forEach(a7), e10.drafts_ = null;
}
function a8(e10) {
  e10 === lF && (lF = e10.parent_);
}
function a5(e10) {
  return lF = {
    drafts_: [],
    parent_: lF,
    immer_: e10,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: true,
    unfinalizedDrafts_: 0
  };
}
function a7(e10) {
  let t10 = e10[aF];
  0 === t10.type_ || 1 === t10.type_ ? t10.revoke_() : t10.revoked_ = true;
}
function a9(e10, t10) {
  t10.unfinalizedDrafts_ = t10.drafts_.length;
  let r10 = t10.drafts_[0], o10 = void 0 !== e10 && e10 !== r10;
  return o10 ? (r10[aF].modified_ && (a6(t10), aV(4)), az(e10) && (e10 = /* @__PURE__ */ se(t10, e10), t10.parent_ || sn(t10, e10)), t10.patches_ && a3("Patches").generateReplacementPatches_(r10[aF].base_, e10, t10.patches_, t10.inversePatches_)) : e10 = /* @__PURE__ */ se(t10, r10, []), a6(t10), t10.patches_ && t10.patchListener_(t10.patches_, t10.inversePatches_), e10 !== aM ? e10 : void 0;
}
function se(e10, t10, r10) {
  if (a1(t10))
    return t10;
  let o10 = t10[aF];
  if (!o10)
    return aq(t10, (i10, l10) => st(e10, o10, t10, i10, l10, r10)), t10;
  if (o10.scope_ !== e10)
    return t10;
  if (!o10.modified_)
    return sn(e10, o10.base_, true), o10.base_;
  if (!o10.finalized_) {
    o10.finalized_ = true, o10.scope_.unfinalizedDrafts_--;
    let t11 = o10.copy_, i10 = t11, l10 = false;
    3 === o10.type_ && (i10 = new Set(t11), t11.clear(), l10 = true), aq(i10, (i11, a10) => st(e10, o10, t11, i11, a10, r10, l10)), sn(e10, t11, false), r10 && e10.patches_ && a3("Patches").generatePatches_(o10, r10, e10.patches_, e10.inversePatches_);
  }
  return o10.copy_;
}
function st(e10, t10, r10, o10, i10, l10, a10) {
  if (i10 === r10 && aV(5), aU(i10)) {
    let a11 = l10 && t10 && 3 !== t10.type_ && // Set objects are atomic since they have no keys.
    !aG(t10.assigned_, o10) ? l10.concat(o10) : void 0, s2 = /* @__PURE__ */ se(e10, i10, a11);
    if (aK(r10, o10, s2), !aU(s2))
      return;
    e10.canAutoFreeze_ = false;
  } else
    a10 && r10.add(i10);
  if (az(i10) && !a1(i10)) {
    if (!e10.immer_.autoFreeze_ && e10.unfinalizedDrafts_ < 1)
      return;
    se(e10, i10), t10 && t10.scope_.parent_ || sn(e10, i10);
  }
}
function sn(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  !e10.parent_ && e10.immer_.autoFreeze_ && e10.canAutoFreeze_ && aZ(t10, r10);
}
var sr = {
  get(e10, t10) {
    if (t10 === aF)
      return e10;
    let r10 = /* @__PURE__ */ aQ(e10);
    if (!aG(r10, t10))
      return function(e11, t11, r11) {
        var o11;
        let i10 = /* @__PURE__ */ sl(t11, r11);
        return i10 ? "value" in i10 ? i10.value : null === (o11 = i10.get) || void 0 === o11 ? void 0 : o11.call(e11.draft_) : void 0;
      }(e10, r10, t10);
    let o10 = r10[t10];
    return e10.finalized_ || !az(o10) ? o10 : o10 === si(e10.base_, t10) ? (ss(e10), e10.copy_[t10] = /* @__PURE__ */ su(o10, e10)) : o10;
  },
  has: (e10, t10) => t10 in aQ(e10),
  ownKeys: (e10) => Reflect.ownKeys(/* @__PURE__ */ aQ(e10)),
  set(e10, t10, r10) {
    let o10 = /* @__PURE__ */ sl(/* @__PURE__ */ aQ(e10), t10);
    if (null == o10 ? void 0 : o10.set)
      return o10.set.call(e10.draft_, r10), true;
    if (!e10.modified_) {
      let o11 = /* @__PURE__ */ si(/* @__PURE__ */ aQ(e10), t10), i10 = null == o11 ? void 0 : o11[aF];
      if (i10 && i10.base_ === r10)
        return e10.copy_[t10] = r10, e10.assigned_[t10] = false, true;
      if ((r10 === o11 ? 0 !== r10 || 1 / r10 == 1 / o11 : r10 != r10 && o11 != o11) && (void 0 !== r10 || aG(e10.base_, t10)))
        return true;
      ss(e10), sa(e10);
    }
    return !!(e10.copy_[t10] === r10 && // special case: handle new props with value 'undefined'
    (void 0 !== r10 || t10 in e10.copy_) || // special case: NaN
    Number.isNaN(r10) && Number.isNaN(e10.copy_[t10])) || (e10.copy_[t10] = r10, e10.assigned_[t10] = true, true);
  },
  deleteProperty: (e10, t10) => (void 0 !== si(e10.base_, t10) || t10 in e10.base_ ? (e10.assigned_[t10] = false, ss(e10), sa(e10)) : delete e10.assigned_[t10], e10.copy_ && delete e10.copy_[t10], true),
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e10, t10) {
    let r10 = /* @__PURE__ */ aQ(e10), o10 = /* @__PURE__ */ Reflect.getOwnPropertyDescriptor(r10, t10);
    return o10 ? { writable: true, configurable: 1 !== e10.type_ || "length" !== t10, enumerable: o10.enumerable, value: r10[t10] } : o10;
  },
  defineProperty() {
    aV(11);
  },
  getPrototypeOf: (e10) => aD(e10.base_),
  setPrototypeOf() {
    aV(12);
  }
}, so = {};
function si(e10, t10) {
  let r10 = e10[aF], o10 = r10 ? aQ(r10) : e10;
  return o10[t10];
}
function sl(e10, t10) {
  if (!(t10 in e10))
    return;
  let r10 = /* @__PURE__ */ aD(e10);
  for (; r10; ) {
    let e11 = /* @__PURE__ */ Object.getOwnPropertyDescriptor(r10, t10);
    if (e11)
      return e11;
    r10 = /* @__PURE__ */ aD(r10);
  }
}
function sa(e10) {
  !e10.modified_ && (e10.modified_ = true, e10.parent_ && sa(e10.parent_));
}
function ss(e10) {
  e10.copy_ || (e10.copy_ = /* @__PURE__ */ aX(e10.base_, e10.scope_.immer_.useStrictShallowCopy_));
}
function su(e10, t10) {
  let r10 = aY(e10) ? a3("MapSet").proxyMap_(e10, t10) : aJ(e10) ? a3("MapSet").proxySet_(e10, t10) : function(e11, t11) {
    let r11 = /* @__PURE__ */ Array.isArray(e11), o11 = {
      type_: r11 ? 1 : 0,
      // Track which produce call this is associated with.
      scope_: t11 ? t11.scope_ : lF,
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
    }, i10 = o11, l10 = sr;
    r11 && (i10 = [o11], l10 = so);
    let { revoke: a10, proxy: s2 } = Proxy.revocable(i10, l10);
    return o11.draft_ = s2, o11.revoke_ = a10, s2;
  }(e10, t10), o10 = t10 ? t10.scope_ : lF;
  return o10.drafts_.push(r10), r10;
}
aq(sr, (e10, t10) => {
  so[e10] = function() {
    return arguments[0] = arguments[0][0], t10.apply(this, arguments);
  };
}), so.deleteProperty = function(e10, t10) {
  return isNaN(/* @__PURE__ */ parseInt(t10)) && aV(13), so.set.call(this, e10, t10, void 0);
}, so.set = function(e10, t10, r10) {
  return "length" !== t10 && isNaN(/* @__PURE__ */ parseInt(t10)) && aV(14), sr.set.call(this, e10[0], t10, r10, e10[0]);
};
var sc = new class {
  constructor(e10) {
    this.autoFreeze_ = true, this.useStrictShallowCopy_ = false, this.produce = (e11, t10, r10) => {
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
      if ("function" != typeof t10 && aV(6), void 0 !== r10 && "function" != typeof r10 && aV(7), az(e11)) {
        let i10 = /* @__PURE__ */ a5(this), l10 = /* @__PURE__ */ su(e11, void 0), a10 = true;
        try {
          o10 = /* @__PURE__ */ t10(l10), a10 = false;
        } finally {
          a10 ? a6(i10) : a8(i10);
        }
        return a4(i10, r10), a9(o10, i10);
      }
      if (e11 && "object" == typeof e11)
        aV(1, e11);
      else {
        if (void 0 === (o10 = /* @__PURE__ */ t10(e11)) && (o10 = e11), o10 === aM && (o10 = void 0), this.autoFreeze_ && aZ(o10, true), r10) {
          let t11 = [], i10 = [];
          a3("Patches").generateReplacementPatches_(e11, o10, t11, i10), r10(t11, i10);
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
    az(e10) || aV(8), aU(e10) && (aU(t10 = e10) || aV(10, t10), e10 = function e11(t11) {
      let r11;
      if (!az(t11) || a1(t11))
        return t11;
      let o11 = t11[aF];
      if (o11) {
        if (!o11.modified_)
          return o11.base_;
        o11.finalized_ = true, r11 = /* @__PURE__ */ aX(t11, o11.scope_.immer_.useStrictShallowCopy_);
      } else
        r11 = /* @__PURE__ */ aX(t11, true);
      return aq(r11, (t12, o12) => {
        aK(r11, t12, /* @__PURE__ */ e11(o12));
      }), o11 && (o11.finalized_ = false), r11;
    }(t10));
    let r10 = /* @__PURE__ */ a5(this), o10 = /* @__PURE__ */ su(e10, void 0);
    return o10[aF].isManual_ = true, a8(r10), o10;
  }
  finishDraft(e10, t10) {
    let r10 = e10 && e10[aF];
    r10 && r10.isManual_ || aV(9);
    let { scope_: o10 } = r10;
    return a4(o10, t10), a9(void 0, o10);
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
    let o10 = a3("Patches").applyPatches_;
    return aU(e10) ? o10(e10, t10) : this.produce(e10, (e11) => o10(e11, t10));
  }
}(), sf = sc.produce;
sc.produceWithPatches.bind(sc), sc.setAutoFreeze.bind(sc), sc.setUseStrictShallowCopy.bind(sc), sc.applyPatches.bind(sc), sc.createDraft.bind(sc), sc.finishDraft.bind(sc);
class sp extends af {
  next(e10) {
    let t10 = d(e10) ? sf(this.value, e10) : e10;
    Object.is(t10, this.value) || super.next(t10);
  }
}
let sd = (e10) => "function" == typeof e10, sh = (e10) => void 0 === e10, sv = (e10) => e10 === r3, sm = (e10) => !!sv(e10) || "string" == typeof e10 || "object" == typeof e10 && !!e10.__isTeleport, sg = (e10) => !!e10 && "object" == typeof e10 && !!e10.__vInternal, sy = (e10) => sd(e10) ? e10 : Array.isArray(e10) ? () => e10 : sh(e10) ? e10 : () => e10, sb = (e10, t10) => {
  let { children: r10, ...o10 } = e10;
  if (sg(r10))
    return [t10 ? { ...o10, key: t10 } : o10, r10];
  let i10 = {}, l10 = {}, a10 = false;
  for (let e11 in o10) {
    let t11 = o10[e11];
    if (e11.startsWith("$")) {
      let r11 = /* @__PURE__ */ e11.slice(1);
      l10[r11] = /* @__PURE__ */ sy(t11), a10 = true;
      continue;
    }
    i10[e11] = t11;
  }
  let s2 = /* @__PURE__ */ sy(r10);
  return s2 && (l10.default = s2, a10 = true), [t10 ? { ...i10, key: t10 } : i10, a10 ? l10 : void 0];
}, s_ = (e10, t10, r10) => sw(e10, t10, r10), sw = (e10, t10, r10) => {
  let [o10, i10] = sb(t10, r10);
  if (sm(e10)) {
    var l10, a10;
    return oA(e10, o10, null !== (a10 = null == i10 ? void 0 : null === (l10 = i10.default) || void 0 === l10 ? void 0 : l10.call(i10)) && void 0 !== a10 ? a10 : sv(e10) ? [] : void 0);
  }
  return oA(e10, o10, i10);
};
function sx(e10) {
  return (t10) => {
    let r10 = /* @__PURE__ */ t10.subscribe(e10);
    n7(() => r10.unsubscribe());
  };
}
function sS(e10) {
  return (t10) => {
    var r10;
    return /* @__PURE__ */ sw(sk, { elem$: /* @__PURE__ */ t10.pipe((r10 = (t11) => () => e10(t11), ai(function(e11, t11) {
      var o10 = 0;
      e11.subscribe(/* @__PURE__ */ al(t11, function(e12) {
        t11.next(/* @__PURE__ */ r10.call(void 0, e12, o10++));
      }));
    }))), children: {} });
  };
}
let sk = /* @__PURE__ */ io({ elem$: /* @__PURE__ */ g(), $default: /* @__PURE__ */ g() }, (e10, t10) => {
  let r10 = /* @__PURE__ */ tE(null);
  return aR(e10.elem$, /* @__PURE__ */ aI((e11) => {
    r10.value = e11;
  }), /* @__PURE__ */ sx()), () => {
    var e11;
    return null === (e11 = r10.value) || void 0 === e11 ? void 0 : e11.call(r10);
  };
}, { name: "RxSlot" }), s$ = (e10, t10) => {
  let r10 = new af(e10[t10]);
  return nI(() => e10[t10], (e11) => r10.next(e11)), r10;
}, sO = (e10) => {
  let t10 = {};
  for (let o10 in e10) {
    var r10;
    if (d(e10[o10]) || (r10 = e10[o10]) && (r10 instanceof ar || lq(r10.lift) && lq(r10.subscribe))) {
      t10[o10] = e10[o10];
      continue;
    }
    t10[`${o10}$`] = /* @__PURE__ */ s$(e10, o10);
  }
  return t10;
};
function sC(e10, t10) {
  let r10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o10 = null != r10 ? r10 : t10, i10 = null != t10 ? t10 : e10, l10 = null != e10 ? e10 : {};
  return io(l10, (e11, t11) => {
    let r11 = /* @__PURE__ */ sO(e11), o11 = new Proxy({}, { get(t12, o12) {
      var i11;
      return null !== (i11 = e11[o12]) && void 0 !== i11 ? i11 : r11[o12];
    } }), l11 = new Proxy({}, { get: (e12, r12) => "render" === r12 ? sS : t11[r12] }), a10 = /* @__PURE__ */ i10(o11, l11);
    return d(a10) ? a10 : () => a10;
  }, o10);
}
let sE = (e10) => {
  let t10 = new sp(e10), r10 = new tR((e11, r11) => ({ get: () => (e11(), t10.value), set(e12) {
    Object.is(e12, t10.value) || (t10.next(e12), r11());
  } }));
  return new Proxy(t10, { get(e11, o10) {
    var i10;
    return "next" === o10 ? (e12) => {
      r10.value = d(e12) ? sf(t10.value, e12) : e12;
    } : "value" === o10 ? r10.value : null !== (i10 = t10[o10]) && void 0 !== i10 ? i10 : r10[o10];
  }, set: (e11, t11, o10) => ("value" === t11 ? r10.value = o10 : e11[t11] = o10, true) });
}, sP = (e10, t10) => {
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
  return aI({ next: (o10) => {
    sP(o10, r10) || (null == t10 || t10(), t10 = /* @__PURE__ */ e10(o10), r10 = o10);
  }, unsubscribe: () => {
    null == t10 || t10();
  } });
};
function sj(e10, t10, r10) {
  var o10, i10, l10, a10;
  let s2;
  let u2 = b(e10) ? e10 : {}, c2 = d(e10) ? e10 : t10, f2 = null !== (o10 = null != r10 ? r10 : t10) && void 0 !== o10 ? o10 : {}, p2 = /* @__PURE__ */ Symbol(null !== (i10 = f2.name) && void 0 !== i10 ? i10 : "");
  if (_(u2)) {
    let e11;
    let t11 = () => (void 0 === e11 && (e11 = /* @__PURE__ */ c2({})), e11), r11 = /* @__PURE__ */ io({ value: /* @__PURE__ */ g().optional(), $default: /* @__PURE__ */ g().optional() }, (e12, r12) => {
      var o11;
      let { slots: i11 } = r12;
      return rS(p2, null !== (o11 = e12.value) && void 0 !== o11 ? o11 : t11()), () => {
        var e13;
        return null === (e13 = i11.default) || void 0 === e13 ? void 0 : e13.call(i11);
      };
    }, { ...f2, name: `Provide(${null !== (l10 = f2.name) && void 0 !== l10 ? l10 : ""})` });
    return ii(r11, { use: () => rk(p2, t11, true) });
  }
  let h2 = /* @__PURE__ */ w(u2), m2 = () => h2.create({}), y2 = () => (void 0 === s2 && (s2 = /* @__PURE__ */ c2(/* @__PURE__ */ m2())), s2), x2 = /* @__PURE__ */ io({ ...u2, $default: /* @__PURE__ */ g().optional() }, (e11, t11) => {
    let { slots: r11 } = t11;
    return rS(p2, /* @__PURE__ */ c2(e11)), () => {
      var e12;
      return null === (e12 = r11.default) || void 0 === e12 ? void 0 : e12.call(r11);
    };
  }, { ...f2, name: `Provide(${null !== (a10 = f2.name) && void 0 !== a10 ? a10 : ""})` });
  return ii(x2, { use: () => rk(p2, y2, true) });
}
export {
  iT as A,
  af as B,
  it as C,
  nJ as D,
  oA as E,
  r3 as F,
  ir as G,
  sC as H,
  aT as I,
  sS as J,
  lA as R,
  oN as T,
  sj as a,
  n4 as b,
  io as c,
  oo as d,
  n7 as e,
  aR as f,
  r1 as g,
  sA as h,
  s_ as i,
  sw as j,
  sE as k,
  tE as l,
  at as m,
  aj as n,
  n6 as o,
  rS as p,
  aI as q,
  tC as r,
  sx as s,
  s$ as t,
  tj as u,
  rk as v,
  nI as w,
  lE as x,
  lP as y,
  lC as z
};
