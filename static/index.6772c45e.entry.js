var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { l as e, p as t, m as r, n as i, B as a, w as o, q as s, v as l, e as d, j as u, T as c, r as p, u as m, d as h, g as f, i as g, F as v, o as b, b as y, c as _, x, R as w, y as k, z as $, A as S, C } from "./lib-nodepkg-vuekit.c8aa0df1.chunk.js";
import { b as E, C as R, c as O, e as T, f as I, g as z, h as V, i as j, j as A, r as P, k as D, B as M, l as L, m as W, G as N, n as B, T as F, d as H, P as U } from "./lib-nodepkg-vueuikit.d9454114.chunk.js";
import { l as q, g as G, r as X, j as Y, i as K, p as Z, k as J, b as Q, d as ee, a as et, s as en, n as er, q as ei, e as ea, h as eo, f as es, m as el, u as ed, t as eu, c as ec, w as ep, x as em } from "./lib-nodepkg-typedef.6f3dc261.chunk.js";
import { D as eh, m as ef, a as eg, C as ev, b as eb } from "./webapp-vuekit-layout.267ceb16.chunk.js";
(function() {
  let e10 = document.createElement("link").relList;
  if (!(e10 && e10.supports && e10.supports("modulepreload"))) {
    for (let e11 of document.querySelectorAll('link[rel="modulepreload"]'))
      t10(e11);
    new MutationObserver((e11) => {
      for (let r2 of e11)
        if ("childList" === r2.type)
          for (let e12 of r2.addedNodes)
            "LINK" === e12.tagName && "modulepreload" === e12.rel && t10(e12);
    }).observe(document, { childList: true, subtree: true });
  }
  function t10(e11) {
    if (e11.ep)
      return;
    e11.ep = true;
    let t11 = /* @__PURE__ */ function(e12) {
      let t12 = {};
      return e12.integrity && (t12.integrity = e12.integrity), e12.referrerPolicy && (t12.referrerPolicy = e12.referrerPolicy), "use-credentials" === e12.crossOrigin ? t12.credentials = "include" : "anonymous" === e12.crossOrigin ? t12.credentials = "omit" : t12.credentials = "same-origin", t12;
    }(e11);
    fetch(e11.href, t11);
  }
})();
let ey = { path: [], branch: [] };
class e_ extends TypeError {
  constructor(e10, t10) {
    let r2;
    let { message: i2, explanation: a2, ...o2 } = e10, { path: s2 } = e10, l2 = 0 === s2.length ? i2 : `At path: ${s2.join(".")} -- ${i2}`;
    super(null != a2 ? a2 : l2);
    __publicField(this, "value");
    __publicField(this, "key");
    __publicField(this, "type");
    __publicField(this, "refinement");
    __publicField(this, "path");
    __publicField(this, "branch");
    __publicField(this, "failures");
    null != a2 && (this.cause = l2), Object.assign(this, o2), this.name = this.constructor.name, this.failures = () => null != r2 ? r2 : r2 = [e10, .../* @__PURE__ */ t10()];
  }
}
class ex {
  constructor(e10) {
    __publicField(this, "Type");
    this.schema = e10;
  }
  static define() {
    let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => true;
    return new class extends ex {
      validator(t10, r2) {
        return e10(t10, r2);
      }
    }(null);
  }
  get type() {
    var e10;
    return null !== (e10 = (this.schema || {}).type) && void 0 !== e10 ? e10 : "unknown";
  }
  *entries(e10) {
    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  }
  refiner(e10, t10) {
    return [];
  }
  validator(e10, t10) {
    return [];
  }
  coercer(e10, t10) {
    return e10;
  }
  validate(e10) {
    let t10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return eE(e10, this, t10);
  }
  create(e10) {
    let t10 = /* @__PURE__ */ eE(e10, this, { coerce: true });
    if (!t10[0])
      return t10[1];
    throw t10[0];
  }
  mask(e10) {
    let t10 = /* @__PURE__ */ eE(e10, this, { coerce: true, mask: true });
    if (!t10[0])
      return t10[1];
    throw t10[0];
  }
  default(e10) {
    return e$.create(this, e10);
  }
  optional() {
    return eS.create(this);
  }
  use() {
    for (var e10 = arguments.length, t10 = Array(e10), r2 = 0; r2 < e10; r2++)
      t10[r2] = arguments[r2];
    return t10.reduce((e11, t11) => t11(e11), this);
  }
  annotate(e10) {
    return ew.of(this, { $meta: e10 });
  }
  get unwrap() {
    return this;
  }
  get meta() {
    if (this.schema) {
      var e10;
      return null !== (e10 = /* @__PURE__ */ q(this.schema, ["$meta"])) && void 0 !== e10 ? e10 : {};
    }
    return {};
  }
  getMeta(e10) {
    if (this.schema)
      return q(this.schema, ["$meta", e10]);
  }
  getSchema(e10) {
    if (e10 && this.schema)
      return q(this.schema, [e10]);
  }
  get isOptional() {
    return false;
  }
}
class ew extends ex {
  static of(e10, t10) {
    return new ew({ ...t10, $unwrap: e10 });
  }
  static refine(e10, t10, r2) {
    return new class extends ew {
      *refiner(i2, a2) {
        yield* this.unwrap.refiner(i2, a2);
        let o2 = /* @__PURE__ */ t10(i2, a2), s2 = /* @__PURE__ */ eC(o2, a2, e10, i2);
        for (let e11 of s2)
          yield { ...e11, refinement: /* @__PURE__ */ Object.keys(r2).join(",") };
      }
    }({ ...r2, $unwrap: e10 });
  }
  get type() {
    return this.unwrap.type;
  }
  get unwrap() {
    return "function" == typeof this.schema.$unwrap ? this.schema.$unwrap() : this.schema.$unwrap;
  }
  get isOptional() {
    return this.unwrap.isOptional;
  }
  get meta() {
    return { ...this.unwrap.meta, ...q(this.schema, ["$meta"], {}) };
  }
  getMeta(e10) {
    if (this.schema) {
      var t10;
      return null !== (t10 = /* @__PURE__ */ q(this.schema, ["$meta", e10])) && void 0 !== t10 ? t10 : this.unwrap.getMeta(e10);
    }
  }
  getSchema(e10) {
    if (e10) {
      var t10;
      return null !== (t10 = /* @__PURE__ */ q(this.schema, [e10])) && void 0 !== t10 ? t10 : this.unwrap.getSchema(e10);
    }
  }
  *entries(e10) {
    let t10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ey;
    yield* this.unwrap.entries(e10, { ...t10, node: /* @__PURE__ */ ek.create(this, t10.node) });
  }
  validator(e10, t10) {
    return eC(/* @__PURE__ */ this.unwrap.validator(e10, t10), t10, this, e10);
  }
  refiner(e10, t10) {
    return eC(/* @__PURE__ */ this.unwrap.refiner(e10, t10), t10, this, e10);
  }
  coercer(e10, t10) {
    return this.unwrap.coercer(e10, t10);
  }
}
class ek extends ew {
  static create(e10, t10) {
    return new ek({ $unwrap: e10, $parent: t10 || null });
  }
}
class e$ extends ew {
  static create(e10, t10) {
    return new e$({ $unwrap: e10, default: t10 });
  }
  coercer(e10, t10) {
    return void 0 === e10 ? this.schema.default : super.unwrap.coercer(e10, t10);
  }
}
class eS extends ew {
  static create(e10) {
    return new eS({ $unwrap: e10 });
  }
  get isOptional() {
    return true;
  }
  refiner(e10, t10) {
    return void 0 === e10 || super.unwrap.refiner(e10, t10);
  }
  validator(e10, t10) {
    return void 0 === e10 || super.unwrap.validator(e10, t10);
  }
}
function* eC(e10, t10, r2, i2) {
  var a2;
  for (let o2 of (G(a2 = e10) && "function" == typeof a2[Symbol.iterator] || (e10 = [e10]), e10)) {
    let e11 = /* @__PURE__ */ function(e12, t11, r3, i3) {
      if (true === e12)
        return;
      false === e12 ? e12 = {} : "string" == typeof e12 && (e12 = { message: e12 });
      let { path: a3, branch: o3, node: s2 } = t11, { type: l2 } = r3, { refinement: d2, message: u2 = `Expected a value of type \`${l2}\`${d2 ? ` with refinement \`${d2}\`` : ""}, but received: \`${i3}\`` } = e12;
      return { value: i3, type: l2, refinement: d2, key: a3[a3.length - 1], path: a3, branch: o3, node: s2, ...e12, message: u2 };
    }(o2, t10, r2, i2);
    e11 && (yield e11);
  }
}
function eE(e10, t10) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i2 = /* @__PURE__ */ eR(e10, t10, r2), a2 = /* @__PURE__ */ function(e11) {
    let { done: t11, value: r3 } = e11.next();
    return t11 ? void 0 : r3;
  }(i2);
  if (a2[0]) {
    let e11 = new e_(a2[0], function* () {
      for (let e12 of i2)
        e12[0] && (yield e12[0]);
    });
    return [e11, void 0];
  }
  {
    let e11 = a2[1];
    return [void 0, e11];
  }
}
function* eR(e10, t10) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, { path: i2 = [], branch: a2 = [e10], node: o2 = ek.create(t10, null), coerce: s2 = false, mask: l2 = false } = r2, d2 = { mask: l2, path: i2, branch: a2, node: o2 };
  s2 && (e10 = /* @__PURE__ */ t10.coercer(e10, d2));
  let u2 = 0;
  for (let i3 of eC(/* @__PURE__ */ t10.validator(e10, d2), d2, t10, e10))
    i3.explanation = r2.message, u2 = 2, yield [i3, void 0];
  for (let [c2, p2, m2] of t10.entries(e10, d2)) {
    let t11 = /* @__PURE__ */ eR(p2, m2, { path: void 0 === c2 ? i2 : [...i2, c2], branch: void 0 === c2 ? a2 : [...a2, p2], node: void 0 === c2 ? o2 : ek.create(m2, o2), coerce: s2, mask: l2, message: r2.message });
    for (let r3 of t11)
      r3[0] ? (u2 = null != r3[0].refinement ? 1 : 2, yield [r3[0], void 0]) : s2 && (p2 = r3[1], void 0 === c2 ? e10 = p2 : e10 instanceof Map ? e10.set(c2, p2) : e10 instanceof Set ? e10.add(p2) : G(e10) && (void 0 !== p2 || c2 in e10) && (e10[c2] = p2));
  }
  if (2 !== u2)
    for (let i3 of eC(/* @__PURE__ */ t10.refiner(e10, d2), d2, t10, e10))
      i3.explanation = r2.message, u2 = 1, yield [i3, void 0];
  0 === u2 && (yield [void 0, e10]);
}
class eO extends ew {
  static create(e10, t10) {
    return new eO({ $unwrap: t10, $ref: e10 });
  }
  get isOptional() {
    return false;
  }
}
class eT extends ex {
  static create() {
    return new eT();
  }
  constructor() {
    super({});
  }
  get type() {
    return "any";
  }
  validator() {
    return true;
  }
}
class eI extends ex {
  static create() {
    return new eI(false);
  }
  get type() {
    return "never";
  }
  validator(e10, t10) {
    return false;
  }
}
class ez extends ex {
  static create() {
    return new ez({ type: "null" });
  }
  get type() {
    return "null";
  }
  validator(e10, t10) {
    return Object.is(e10, null);
  }
}
class eV extends ex {
  static create() {
    return new eV({ type: "string" });
  }
  get type() {
    return this.schema.type;
  }
  validator(e10, t10) {
    return "string" == typeof e10;
  }
}
class ej extends ex {
  static create() {
    return new ej({ type: "number" });
  }
  get type() {
    return this.schema.type;
  }
  validator(e10, t10) {
    return "number" == typeof e10 && !isNaN(e10);
  }
}
class eA extends ex {
  static create() {
    return new eA({ type: "integer" });
  }
  get type() {
    return this.schema.type;
  }
  validator(e10, t10) {
    return "number" == typeof e10 && !isNaN(e10) && Number.isInteger(e10);
  }
}
class eP extends ex {
  static create() {
    return new eP({ type: "boolean" });
  }
  get type() {
    return this.schema.type;
  }
  validator(e10, t10) {
    return "boolean" == typeof e10;
  }
}
class eD extends ex {
  static create() {
    return new eD({ type: "string", format: "binary" });
  }
  get type() {
    return "binary";
  }
  validator(e10, t10) {
    return e10 instanceof File || e10 instanceof Blob;
  }
}
class eM extends ex {
  static create(e10) {
    return new eM({ enum: e10 });
  }
  static literal(e10) {
    return new eM({ enum: [e10] });
  }
  static nativeEnum(e10) {
    return new eM({ enum: /* @__PURE__ */ Object.values(e10) });
  }
  get type() {
    return "enums";
  }
  validator(e10, t10) {
    return this.schema.enum.includes(e10);
  }
}
class eL extends ex {
  static create(e10) {
    let t10 = [];
    if (e10)
      for (let r2 in e10) {
        let i2 = e10[r2];
        i2.isOptional || t10.push(r2);
      }
    return new eL({ type: "object", properties: e10, required: t10, additionalProperties: /* @__PURE__ */ eI.create() });
  }
  get type() {
    return this.schema.type;
  }
  *entries(e10, t10) {
    if (G(e10)) {
      var r2;
      let i2 = new Set(Object.keys(e10));
      if (this.schema.properties)
        for (let t11 in this.schema.properties)
          i2.delete(t11), yield [t11, e10[t11], this.schema.properties[t11]];
      if ((null === (r2 = t10.node) || void 0 === r2 ? void 0 : r2.type) !== "intersection")
        for (let t11 of i2)
          yield [t11, e10[t11], this.schema.additionalProperties];
    }
  }
  validator(e10, t10) {
    return G(e10);
  }
  coercer(e10, t10) {
    if (G(e10)) {
      let r2 = { ...e10 };
      if (t10.mask) {
        let e11 = this.schema.properties;
        if (e11)
          for (let t11 in r2)
            void 0 === e11[t11] && delete r2[t11];
      }
      return r2;
    }
    return e10;
  }
}
class eW extends ex {
  static create(e10, t10) {
    return new eW({ propertyNames: e10, additionalProperties: t10, type: "object" });
  }
  get type() {
    return "record";
  }
  *entries(e10) {
    if (G(e10) && G(e10))
      for (let t10 in e10) {
        let r2 = e10[t10];
        yield [t10, t10, this.schema.propertyNames], yield [t10, r2, this.schema.additionalProperties];
      }
  }
  validator(e10) {
    return G(e10);
  }
}
class eN extends ex {
  static create(e10) {
    return new eN({ type: "array", items: e10 });
  }
  get type() {
    return this.schema.type;
  }
  *entries(e10) {
    if ("any" != this.schema.items.type && Array.isArray(e10))
      for (let [t10, r2] of e10.entries())
        yield [t10, r2, this.schema.items];
  }
  validator(e10) {
    return Array.isArray(e10);
  }
  coercer(e10) {
    return Array.isArray(e10) ? e10.slice() : e10;
  }
}
class eB extends ex {
  static create(e10) {
    return new eB({ type: "array", items: e10 });
  }
  get type() {
    return "tuple";
  }
  *entries(e10, t10) {
    if (Array.isArray(e10)) {
      let t11 = /* @__PURE__ */ Math.max(this.schema.items.length, e10.length);
      for (let i2 = 0; i2 < t11; i2++) {
        var r2;
        yield [i2, e10[i2], null !== (r2 = this.schema.items[i2]) && void 0 !== r2 ? r2 : eI.create()];
      }
    }
  }
  validator(e10) {
    return Array.isArray(e10);
  }
  coercer(e10) {
    return Array.isArray(e10) ? e10.slice() : e10;
  }
}
class eF extends ex {
  static create() {
    for (var e10 = arguments.length, t10 = Array(e10), r2 = 0; r2 < e10; r2++)
      t10[r2] = arguments[r2];
    return new eF({ allOf: t10 });
  }
  get type() {
    return "intersection";
  }
  *entries(e10) {
    let t10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ey;
    for (let r2 of this.schema.allOf)
      yield* r2.entries(e10, t10);
  }
  *validator(e10, t10) {
    for (let r2 of this.schema.allOf)
      yield* eC(/* @__PURE__ */ r2.validator(e10, t10), t10, this, e10);
  }
  *refiner(e10, t10) {
    for (let r2 of this.schema.allOf)
      yield* eC(/* @__PURE__ */ r2.refiner(e10, t10), t10, this, e10);
  }
}
class eH extends ex {
  constructor() {
    super(...arguments);
    __publicField(this, "_discriminatorPropName");
    __publicField(this, "_discriminatorMapping", {});
  }
  static create() {
    for (var e10 = arguments.length, t10 = Array(e10), r2 = 0; r2 < e10; r2++)
      t10[r2] = arguments[r2];
    return new eH({ oneOf: t10 });
  }
  static discriminatorMapping(e10, t10) {
    let r2 = /* @__PURE__ */ X(t10, (t11, r3) => {
      let i2 = { [e10]: /* @__PURE__ */ eM.literal(r3) };
      for (let [e11, r4, a2] of t11.entries({}, ey))
        i2[e11] = a2;
      return eL.create(i2);
    });
    return new eH({ oneOf: /* @__PURE__ */ Object.values(r2), discriminator: { propertyName: e10 } });
  }
  discriminatorPropType(e10) {
    var t10;
    return null !== (t10 = this._discriminatorPropName) && void 0 !== t10 ? t10 : this._discriminatorPropName = /* @__PURE__ */ (() => {
      var t11, r2;
      let i2 = this.schema.discriminator.propertyName, a2 = /* @__PURE__ */ this.schema.oneOf.reduce((e11, t12) => [...e11, ...t12.unwrap.schema.properties[i2].unwrap.schema.enum], []);
      return ew.of(/* @__PURE__ */ eM.create(a2), { $meta: null !== (r2 = null === (t11 = e10.node) || void 0 === t11 ? void 0 : t11.meta) && void 0 !== r2 ? r2 : {} });
    })();
  }
  discriminatorMapping(e10, t10) {
    let r2 = this.schema.discriminator.propertyName;
    if (this._discriminatorMapping[e10])
      return this._discriminatorMapping[e10];
    let i2 = this.discriminatorPropType(t10).unwrap.schema.enum;
    if (i2.includes(e10)) {
      let t11 = /* @__PURE__ */ this.schema.oneOf.find((t12) => {
        let i3 = t12.unwrap.schema.properties[r2];
        if (i3.unwrap.schema.enum) {
          let [t13, r3] = i3.validate(e10);
          return !t13;
        }
        return false;
      });
      if (t11) {
        var a2, o2, s2;
        return null !== (s2 = (a2 = this._discriminatorMapping)[o2 = `${e10}`]) && void 0 !== s2 ? s2 : a2[o2] = /* @__PURE__ */ Y(t11.unwrap.schema.properties, [r2]);
      }
    }
    return {};
  }
  *entries(e10, t10) {
    if (this.schema.discriminator) {
      let r2 = this.schema.discriminator.propertyName, i2 = (null != e10 ? e10 : {})[r2], a2 = /* @__PURE__ */ eL.create({ [r2]: /* @__PURE__ */ this.discriminatorPropType(t10), ...this.discriminatorMapping(i2, t10) });
      yield* a2.entries(e10, t10);
    }
  }
  get type() {
    return "union";
  }
  coercer(e10) {
    for (let t10 of this.schema.oneOf) {
      let [r2, i2] = eE(e10, t10, { coerce: true });
      if (!r2)
        return i2;
    }
    return e10;
  }
  validator(e10, t10) {
    if (this.schema.discriminator) {
      let r3 = this.schema.discriminator.propertyName, i2 = (null != e10 ? e10 : {})[r3], a2 = /* @__PURE__ */ eL.create({ [r3]: /* @__PURE__ */ this.discriminatorPropType(t10), ...this.discriminatorMapping(i2, t10) });
      return a2.validator(e10, t10);
    }
    let r2 = [];
    for (let i2 of this.schema.oneOf) {
      let [...a2] = eR(e10, i2, t10), [o2] = a2;
      if (o2 && !o2[0])
        return [];
      for (let [e11] of a2)
        e11 && r2.push(e11);
    }
    return [`Expected the value to satisfy a union of \`${this.schema.oneOf.map((e11) => e11.type).join(" | ")}\`, but received: ${e10}`, ...r2];
  }
}
let eU = eO.create, eq = eT.create, eG = eI.create, eX = ez.create, eY = eV.create, eK = ej.create, eZ = eA.create, eJ = eP.create, eQ = eD.create, e0 = eM.create, e1 = eM.nativeEnum, e2 = eM.literal, e4 = eL.create, e5 = eW.create, e3 = eN.create, e8 = eB.create, e6 = eF.create, e9 = eH.create, e7 = eH.discriminatorMapping, te = ex.define, tt = ew.refine;
var tn, tr, ti, ta = /* @__PURE__ */ Object.freeze({ __proto__: null, any: eq, array: e3, binary: eQ, boolean: eJ, custom: te, discriminatorMapping: e7, enums: e0, integer: eZ, intersection: e6, literal: e2, nativeEnum: e1, never: eG, nil: eX, number: eK, object: e4, pattern: function(e10, t10) {
  return (r2) => ew.refine(r2, (i2) => e10.test(i2) || (null != t10 ? t10 : `Expected a ${r2.type} matching \`/${e10.source}/\` but received "${i2}"`), { pattern: e10 });
}, record: e5, ref: eU, refine: tt, string: eY, tuple: e8, union: e9 });
function to(e10, t10) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i2 = null != r2 ? r2 : t10, a2 = null != t10 ? t10 : e10, o2 = K(e10) ? {} : e10, [s2, l2] = Z(/* @__PURE__ */ Object.keys(o2), (e11) => /^on[A-Z]/.test(e11)), d2 = { emits: /* @__PURE__ */ s2.map((e11) => J(/* @__PURE__ */ e11.slice(2))), props: /* @__PURE__ */ l2.filter((e11) => !/^[$]/.test(e11)).reduce((e11, t11) => {
    let r3 = o2[t11];
    return { ...e11, [t11]: { default: () => {
      try {
        return r3.create(void 0);
      } catch (e12) {
      }
    }, validator: (e12) => r3.validate(e12) } };
  }, {}) };
  return { get name() {
    var u2;
    return null !== (u2 = this.displayName) && void 0 !== u2 ? u2 : i2.name;
  }, set name(n) {
    i2.name = n;
  }, setup: (e11, t11) => a2(e11, t11), emits: d2.emits, props: d2.props, inheritAttrs: i2.inheritAttrs, propTypes: o2 };
}
let ts = (e10, t10) => new Proxy(e10, { get(e11, r2) {
  var i2;
  return null !== (i2 = t10[r2]) && void 0 !== i2 ? i2 : e11[r2];
} });
function tl(e10) {
  for (var t10 = arguments.length, a2 = Array(t10 > 1 ? t10 - 1 : 0), o2 = 1; o2 < t10; o2++)
    a2[o2 - 1] = arguments[o2];
  return r(...a2)(/* @__PURE__ */ i(e10));
}
let td = (e10, t10) => {
  let r2 = new a(e10[t10]);
  return o(() => e10[t10], (e11) => r2.next(e11)), r2;
};
function tu(e10) {
  return (t10) => {
    let r2 = /* @__PURE__ */ t10.subscribe(e10);
    d(() => r2.unsubscribe());
  };
}
to({ elem$: /* @__PURE__ */ ta.custom(), $default: /* @__PURE__ */ ta.custom() }, (t10, r2) => {
  let {} = r2, i2 = /* @__PURE__ */ e(null);
  return tl(t10.elem$, /* @__PURE__ */ s((e10) => i2.value = e10), /* @__PURE__ */ tu()), () => {
    var e10;
    return null === (e10 = i2.value) || void 0 === e10 ? void 0 : e10.call(i2);
  };
}, { name: "RxSlot" });
let tc = (e10, t10) => {
  if (et(e10) && et(t10)) {
    if (e10.length !== t10.length)
      return false;
    for (let r2 in e10)
      if (!Object.is(e10[r2], t10[r2]))
        return false;
    return true;
  }
  return Object.is(e10, t10);
}, tp = (e10) => {
  let t10;
  let r2 = null;
  return s({ next: (i2) => {
    tc(i2, r2) || (t10 && t10(), t10 = /* @__PURE__ */ e10(i2), r2 = i2);
  }, unsubscribe: () => {
    t10 && t10();
  } });
};
function tm(e10, r2, i2) {
  var a2, o2, s2, d2;
  let u2;
  let c2 = Q(e10) ? e10 : {}, p2 = K(e10) ? e10 : r2, m2 = null !== (a2 = null != i2 ? i2 : r2) && void 0 !== a2 ? a2 : {}, h2 = /* @__PURE__ */ Symbol(null !== (o2 = m2.name) && void 0 !== o2 ? o2 : "");
  if (ee(c2)) {
    let e11;
    let r3 = () => null != e11 ? e11 : e11 = /* @__PURE__ */ p2({}), i3 = /* @__PURE__ */ to({ value: /* @__PURE__ */ ta.custom().optional(), $default: /* @__PURE__ */ ta.custom().optional() }, (e12, i4) => {
      var a3;
      let { slots: o3 } = i4;
      return t(h2, null !== (a3 = e12.value) && void 0 !== a3 ? a3 : r3()), () => {
        var e13;
        return null === (e13 = o3.default) || void 0 === e13 ? void 0 : e13.call(o3);
      };
    }, { ...m2, name: `Provide(${null !== (s2 = m2.name) && void 0 !== s2 ? s2 : ""})` });
    return ts(i3, { use: () => l(h2, r3, true) });
  }
  let f2 = /* @__PURE__ */ ta.object(c2), g2 = () => f2.create({}), v2 = () => null != u2 ? u2 : u2 = /* @__PURE__ */ p2(/* @__PURE__ */ g2()), b2 = /* @__PURE__ */ to({ ...c2, $default: /* @__PURE__ */ ta.custom().optional() }, (e11, r3) => {
    let { slots: i3 } = r3;
    return t(h2, /* @__PURE__ */ p2(e11)), () => {
      var e12;
      return null === (e12 = i3.default) || void 0 === e12 ? void 0 : e12.call(i3);
    };
  }, { ...m2, name: `Provide(${null !== (d2 = m2.name) && void 0 !== d2 ? d2 : ""})` });
  return ts(b2, { use: () => l(h2, v2, true) });
}
function th() {
  return new Proxy({}, { get: (e10, t10) => t10 });
}
let tf = /* @__PURE__ */ th(), tg = { paddingX: [tf.paddingLeft, tf.paddingRight], paddingY: [tf.paddingTop, tf.paddingBottom], marginX: [tf.marginInlineStart, tf.marginInlineEnd], marginY: [tf.marginTop, tf.marginBottom], borderX: [tf.borderLeft, tf.borderRight], borderY: [tf.borderTop, tf.borderBottom], color: [tf.color, tf.fill], borderTopRadius: [tf.borderTopLeftRadius, tf.borderTopRightRadius], borderBottomRadius: [tf.borderBottomLeftRadius, tf.borderBottomRightRadius], borderRightRadius: [tf.borderTopRightRadius, tf.borderBottomRightRadius], borderLeftRadius: [tf.borderTopLeftRadius, tf.borderBottomLeftRadius], backgroundGradient: [tf.backgroundImage], boxSize: [tf.width, tf.height] }, tv = /* @__PURE__ */ th(), tb = { font: tv.fontFamily, shadow: tv.boxShadow, rounded: tv.borderRadius, roundedTop: tv.borderTopRadius, roundedBottom: tv.borderBottomRadius, roundedLeft: tv.borderLeftRadius, roundedRight: tv.borderRightRadius, bg: tv.background, bgImage: tv.backgroundImage, bgSize: tv.backgroundSize, bgPosition: tv.backgroundPosition, bgRepeat: tv.backgroundRepeat, bgAttachment: tv.backgroundAttachment, bgColor: tv.backgroundColor, bgGradient: tv.backgroundGradient, bgClip: tv.backgroundClip, pos: tv.position, p: tv.padding, pt: tv.paddingTop, pr: tv.paddingRight, pl: tv.paddingLeft, pb: tv.paddingBottom, ps: tv.paddingInlineStart, pe: tv.paddingInlineEnd, px: tv.paddingX, py: tv.paddingY, m: tv.margin, mt: tv.marginTop, mr: tv.marginRight, ml: tv.marginLeft, mb: tv.marginBottom, ms: tv.marginInlineStart, me: tv.marginInlineEnd, mx: tv.marginX, my: tv.marginY, w: tv.width, minW: tv.minWidth, maxW: tv.maxWidth, h: tv.height, minH: tv.minHeight, maxH: tv.maxHeight }, ty = /* @__PURE__ */ th(), t_ = function() {
  for (var e10 = arguments.length, t10 = Array(e10), r2 = 0; r2 < e10; r2++)
    t10[r2] = arguments[r2];
  let i2 = [...t10];
  for (let e11 of t10)
    tb[e11] && i2.push(tb[e11]);
  return i2;
}, tx = { _rtl: "[dir=rtl] &, &[dir=rtl]", _ltr: "[dir=ltr] &, &[dir=ltr]", _dark: "&[data-theme=dark]", _light: "&[data-theme=light]" };
var tw = ((tn = tw || {}).var = "var", tn.mixin = "mixin", tn);
class tk {
  static create(e10, t10) {
    let { value: r2, on: i2, transform: a2 } = t10;
    return { type: e10, value: r2, on: i2, transform: a2, __Tokens: void 0, __ValueType: void 0, __CSSTokens: void 0 };
  }
  static color(e10) {
    return tk.create("var", { value: e10, on: /* @__PURE__ */ t_(ty.color, ty.bgColor, ty.outlineColor, ty.borderColor, ty.accentColor, ty.fill, ty.stroke), transform: (e11, t10) => ea(e11) ? { default: `var(${t10(e11)})`, rgb: `var(${t10(`${e11}/rgb`)})` } : { default: `rgb(${e11[0]}, ${e11[1]}, ${e11[2]})`, rgb: `${e11[0]} ${e11[1]} ${e11[2]}` }, fallback: "" });
  }
  static space(e10) {
    return tk.create("var", { value: e10, on: /* @__PURE__ */ t_(ty.gap, ty.rowGap, ty.columnGap, ty.top, ty.right, ty.bottom, ty.left, ty.m, ty.ms, ty.me, ty.mt, ty.mr, ty.mb, ty.ml, ty.mx, ty.my, ty.p, ty.ps, ty.pe, ty.pt, ty.pr, ty.pb, ty.pl, ty.px, ty.py) });
  }
  static boxSize(e10) {
    return tk.create("var", { value: e10, on: /* @__PURE__ */ t_(ty.w, ty.minW, ty.maxW, ty.h, ty.minH, ty.maxH, ty.boxSize), fallback: 0 });
  }
  static fontSize(e10) {
    return tk.create("var", { value: e10, on: /* @__PURE__ */ t_(ty.fontSize), fallback: 0 });
  }
  static lineHeight(e10) {
    return tk.create("var", { value: e10, on: /* @__PURE__ */ t_(ty.lineHeight), fallback: 0 });
  }
  static rounded(e10) {
    return tk.create("var", { value: e10, fallback: 0, on: /* @__PURE__ */ t_(ty.rounded, ty.roundedTop, ty.roundedBottom, ty.roundedLeft, ty.roundedRight, tf.borderTopLeftRadius, tf.borderTopRightRadius, tf.borderBottomLeftRadius, tf.borderBottomRightRadius, tf.borderTopRightRadius, tf.borderBottomRightRadius, tf.borderTopLeftRadius, tf.borderBottomLeftRadius) });
  }
  static transitionTimingFunction(e10) {
    return tk.create("var", { value: e10, on: /* @__PURE__ */ t_(ty.transitionTimingFunction) });
  }
  static transitionDuration(e10) {
    return tk.create("var", { value: e10, on: /* @__PURE__ */ t_(ty.transitionDuration), transform: (e11) => `${e11}ms` });
  }
  static font(e10) {
    return tk.create("var", { value: e10, on: /* @__PURE__ */ t_(ty.font) });
  }
  static fontWeight(e10) {
    return tk.create("var", { value: e10, on: /* @__PURE__ */ t_(ty.fontWeight) });
  }
  static letterSpacing(e10) {
    return tk.create("var", { value: e10, on: /* @__PURE__ */ t_(ty.letterSpacing) });
  }
  static shadow(e10) {
    return tk.create("var", { value: e10, on: /* @__PURE__ */ t_(ty.shadow) });
  }
  static customMixin(e10, t10) {
    return tk.create("mixin", { value: t10, on: [e10] });
  }
  static mixin(e10) {
    return { ...e10, __mixin: true };
  }
}
const _t$ = class _t$ {
  constructor(e10, { cssVar: t10, transformFallback: r2 }) {
    __publicField(this, "__Tokens");
    __publicField(this, "_values", {});
    __publicField(this, "_cssVarRefs", {});
    _t$.walkValues(e10.value, (i2, a2) => {
      let o2 = /* @__PURE__ */ a2.join("."), s2 = (i3, a3) => {
        let o3 = e10.transform ? e10.transform(i3, t10) : r2(i3);
        if (G(o3))
          for (let e11 in o3)
            a3(o3[e11], "default" === e11 ? "" : e11);
        else
          a3(o3, "");
      };
      if (en(this._cssVarRefs, [o2], /* @__PURE__ */ t10(o2)), Q(i2))
        for (let e11 in i2)
          s2(i2[e11], (t11, r3) => {
            en(this._values, [`${o2}${r3 ? `/${r3}` : ""}`, e11], t11);
          });
      else
        s2(i2, (e11, t11) => {
          en(this._values, [`${o2}${t11 ? `/${t11}` : ""}`], e11);
        });
    });
  }
  get tokens() {
    return es(this._values);
  }
  get(e10, t10, r2) {
    let i2 = this._values[e10];
    if (G(i2)) {
      var a2;
      return r2 ? i2[t10] : null !== (a2 = i2[t10]) && void 0 !== a2 ? a2 : i2[_t$.defaultMode];
    }
    return r2 ? t10 === _t$.defaultMode ? i2 : void 0 : i2;
  }
  use(e10) {
    let t10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (this._cssVarRefs[e10])
      return t10 ? `${this._cssVarRefs[e10]}` : `var(${this._cssVarRefs[e10]})`;
  }
};
__publicField(_t$, "defaultMode", "_default");
__publicField(_t$, "walkValues", function(e10, t10) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let i2 in e10) {
    let a2 = e10[i2];
    if (Q(a2)) {
      if (eo(a2, "_default")) {
        t10(a2, [...r2, i2]);
        continue;
      }
      _t$.walkValues(a2, t10, [...r2, i2]);
      continue;
    }
    t10(a2, [...r2, i2]);
  }
});
let t$ = _t$;
const _tS = class _tS {
  constructor(e10) {
    __publicField(this, "_values", {});
    _tS.walkValue(e10.value, (e11, t10) => {
      let r2 = /* @__PURE__ */ t10.join(".");
      en(this._values, [r2], /* @__PURE__ */ Y(e11, "__mixin"));
    });
  }
  get tokens() {
    return es(this._values);
  }
  get(e10) {
    return this._values[e10];
  }
};
__publicField(_tS, "walkValue", function(e10, t10) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let i2 in e10) {
    let a2 = e10[i2];
    if (Q(a2)) {
      if (eo(a2, "__mixin")) {
        t10(a2, [...r2, i2]);
        continue;
      }
      _tS.walkValue(a2, t10, [...r2, i2]);
      continue;
    }
    t10(a2, [...r2, i2]);
  }
});
let tS = _tS;
let tC = (e10) => (t10) => `rgba(var(${t10}--rgb) / ${e10})`, tE = (e10) => K(e10) && eo(e10, "token");
function tR(e10, t10) {
  return Object.assign((e11) => t10(e11), { toString: () => e10, token: e10 });
}
const _tO = class _tO {
  constructor(e10) {
    this.opt = e10;
  }
  processAll(e10) {
    let t10 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], r2 = [], { state: i2, extends: a2, ...o2 } = e10;
    if (a2)
      for (let e11 of a2)
        r2.push(.../* @__PURE__ */ this.processAll(e11, t10));
    if (i2) {
      let e11 = {}, t11 = {};
      _tO.walkStateValues(i2, (r3, i3, a3) => {
        let o3 = `--${this.opt.varPrefix}-state-${i3.join("-")}`, s2 = /* @__PURE__ */ el(i3), l2 = {};
        this.process(l2, s2, r3, false), e11[o3] = l2[s2], en(t11, [...a3, s2], `var(${o3})`);
      }), r2.push(e11), r2.push(.../* @__PURE__ */ this.processAll(t11));
    }
    if (!ee(o2)) {
      let e11 = {};
      this.processTo(e11, o2, t10), r2.push(e11);
    }
    return r2;
  }
  processTo(e10, t10) {
    let r2 = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    for (let i2 in t10)
      this.process(e10, i2, t10[i2], r2);
  }
  process(e10, t10, r2) {
    var i2, a2, o2, s2;
    let l2 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (this.opt.mixins[t10]) {
      let a3 = null === (i2 = this.opt.mixins[t10]) || void 0 === i2 ? void 0 : i2.get(r2);
      if (a3)
        for (let t11 in a3)
          this.process(e10, t11, a3[t11], l2);
      return;
    }
    if (Q(r2)) {
      e10[t10 = null !== (a2 = /* @__PURE__ */ _tO.convertSelector(t10)) && void 0 !== a2 ? a2 : t10] = null !== (o2 = e10[t10]) && void 0 !== o2 ? o2 : {}, this.processTo(e10[t10], r2);
      return;
    }
    if (l2 && tg[t10 = null !== (s2 = tb[t10]) && void 0 !== s2 ? s2 : t10]) {
      for (let i3 of tg[t10])
        e10[i3] = /* @__PURE__ */ this.opt.processValue(i3, r2);
      return;
    }
    e10[t10] = /* @__PURE__ */ this.opt.processValue(t10, r2);
  }
};
__publicField(_tO, "supportedPseudoClasses", { active: "active", after: "after", anyLink: "any-link", before: "before", blank: "blank", checked: "checked", current: "current", default: "default", defined: "defined", disabled: "disabled", empty: "empty", enabled: "enabled", first: "first", firstChild: "first-child", firstLetter: "first-letter", firstLine: "first-line", firstOfType: "first-of-type", focus: "focus", focusVisible: "focus-visible", focusWithin: "focus-within", fullscreen: "fullscreen", future: "future", hover: "hover", inRange: "in-range", indeterminate: "indeterminate", invalid: "invalid", lastChild: "last-child", lastOfType: "last-of-type", left: "left", link: "link", localLink: "local-link", nthCol: "nth-col", nthLastCol: "nth-last-col", onlyChild: "only-child", onlyOfType: "only-of-type", optional: "optional", outOfRange: "out-of-range", past: "past", paused: "paused", pictureInPicture: "picture-in-picture", placeholderShown: "placeholder-shown", playing: "playing", readOnly: "read-only", readWrite: "read-write", required: "required", right: "right", root: "root", scope: "scope", target: "target", targetWithin: "target-within", userInvalid: "user-invalid", userValid: "user-valid", valid: "valid", visited: "visited" });
__publicField(_tO, "convertSelector", (e10) => {
  if (tx[e10])
    return tx[e10];
  if (e10.startsWith("$") || e10.endsWith("$") || e10.startsWith("_")) {
    let t10 = "", r2 = "";
    if (e10.startsWith("_") ? (t10 = "&", e10 = /* @__PURE__ */ e10.slice(1)) : e10.startsWith("$") ? (t10 = "& ", e10 = /* @__PURE__ */ e10.slice(1)) : (r2 = " &", e10 = /* @__PURE__ */ e10.slice(0, e10.length - 1)), e10.startsWith("data") || e10.startsWith("aria")) {
      let [i2, a2] = e10.split("__");
      return a2 ? `${t10}[${J(i2)}='${J(a2)}']${r2}` : `${t10}[${J(i2)}]${r2}`;
    }
    if ("&" == t10) {
      if (e10.startsWith("$"))
        return `${t10}::${e10.slice(1)}`;
      if (_tO.supportedPseudoClasses[e10]) {
        let r4 = _tO.supportedPseudoClasses[e10];
        return `${t10}:${r4}, ${t10}[data-${r4}]:not([data-${r4}='false']), ${t10}.${r4}`;
      }
      let [r3, i2] = e10.split("__"), a2 = /* @__PURE__ */ J(r3);
      return i2 ? `${t10}[data-${a2}='${J(i2)}']` : `${t10}[data-${a2}]:not([data-${a2}='false'])`;
    }
  }
});
__publicField(_tO, "walkStateValues", function(e10, t10) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { default: {}, selectorPath: [], path: [] }, { $: i2, ...a2 } = e10;
  for (let e11 in a2) {
    var o2;
    let s2 = a2[e11], l2 = null !== (o2 = a2.default) && void 0 !== o2 ? o2 : r2.default, d2 = null != i2 ? i2 : q(l2, [.../* @__PURE__ */ r2.path.slice(1), "$"]), u2 = d2 ? [...r2.selectorPath, d2] : r2.selectorPath, c2 = [...r2.path, e11];
    if (Q(s2)) {
      _tO.walkStateValues(s2, t10, { path: c2, selectorPath: u2, default: l2 });
      continue;
    }
    t10(s2, c2, u2);
  }
});
let tO = _tO;
let tT = (e10) => e10.reduce((e11, t10) => ({ ...e11, [t10]: true }), {});
const _tI = class _tI {
  constructor(e10, t10 = {}) {
    __publicField(this, "mode");
    __publicField(this, "varPrefix");
    __publicField(this, "cssVars", {});
    __publicField(this, "tokens", {});
    __publicField(this, "propValues", {});
    __publicField(this, "mixins", {});
    __publicField(this, "dp", (e10) => 0 === e10 ? 0 : `calc(${e10} * var(${this.cssVar("space", "dp")}))`);
    __publicField(this, "transformFallback", (e10, t10) => _tI.propsCanBaseDp[e10] && ei(t10) ? _tI.propsCanPercent[e10] && 1 > Math.abs(t10) ? `${100 * t10}%` : this.dp(t10) : t10);
    __publicField(this, "token", new Proxy({}, { get: (e10, t10) => {
      var r2, i2;
      return this.tokens[t10] ? Object.assign((e11) => {
        var r3;
        return null === (r3 = this.tokens[t10]) || void 0 === r3 ? void 0 : r3.get(e11, `_${this.mode}`);
      }, { tokens: null === (r2 = this.tokens[t10]) || void 0 === r2 ? void 0 : r2.tokens }) : this.mixins[t10] ? Object.assign((e11) => {
        var r3;
        return null === (r3 = this.mixins[t10]) || void 0 === r3 ? void 0 : r3.get(e11);
      }, { tokens: null === (i2 = this.mixins[t10]) || void 0 === i2 ? void 0 : i2.tokens }) : void 0;
    } }));
    __publicField(this, "processValue", (e10, t10) => {
      var r2, i2, a2;
      if (tE(t10)) {
        let r3 = null === (i2 = this.propValues[e10]) || void 0 === i2 ? void 0 : i2.use(t10.token, true);
        return r3 ? t10(r3) : void 0;
      }
      return null !== (a2 = null === (r2 = this.propValues[e10]) || void 0 === r2 ? void 0 : r2.use(t10)) && void 0 !== a2 ? a2 : this.transformFallback(e10, t10);
    });
    __publicField(this, "unstable_sx", (e10) => new tO({ mixins: this.mixins, varPrefix: this.varPrefix, processValue: this.processValue }).processAll(e10));
    var r2, i2;
    for (let a2 in this.theme = e10, this.varPrefix = null !== (r2 = t10.varPrefix) && void 0 !== r2 ? r2 : "vk", this.mode = null !== (i2 = t10.mode) && void 0 !== i2 ? i2 : "light", en(this.cssVars, [/* @__PURE__ */ this.cssVar("space", "dp")], "0.1rem"), e10) {
      let t11 = e10[a2];
      if (t11.type == tw.var) {
        let e11 = new t$(t11, { cssVar: (e12) => this.cssVar(a2, e12), transformFallback: (e12) => this.transformFallback(t11.on[0], e12) });
        for (let r3 of (this.tokens[a2] = e11, t11.on))
          this.propValues[r3] = e11;
        for (let t12 of e11.tokens)
          for (let r3 of ["light", "dark"]) {
            let i3 = r3 === this.mode ? "_default" : `_${r3}`, o2 = /* @__PURE__ */ e11.get(t12, i3, true);
            er(o2) || ("_default" === i3 ? en(this.cssVars, [/* @__PURE__ */ this.cssVar(a2, t12)], o2) : en(this.cssVars, [i3, /* @__PURE__ */ this.cssVar(a2, t12)], o2));
          }
        continue;
      }
      if (t11.type == tw.mixin) {
        let e11 = new tS(t11);
        for (let r3 of t11.on)
          this.mixins[r3] = e11;
      }
    }
  }
  static create(e10, t10) {
    return new _tI(e10, t10);
  }
  cssVar(e10, t10) {
    return `--${this.varPrefix}-${J(e10)}__${t10.replaceAll("/", "--").replaceAll(".", "__")}`;
  }
  get rootCSSVars() {
    return this.cssVars;
  }
  unstable_css(e10, t10) {
    var r2;
    let i2 = null != t10 ? t10 : {};
    return i2.__emotion_styles = null !== (r2 = i2.__emotion_styles) && void 0 !== r2 ? r2 : E(/* @__PURE__ */ this.unstable_sx(t10), null == e10 ? void 0 : e10.registered, {}), i2.__emotion_styles;
  }
  toFigmaTokens() {
    let e10 = { space: { dp: { type: "sizing", value: 1 } } }, t10 = {}, r2 = {}, i2 = (e11, t11, r3) => {
      let i3 = e11;
      for (let e12 = 0; e12 < t11.length; e12++) {
        var a3;
        if (e12 == t11.length - 1) {
          i3[t11[e12]] = r3;
          continue;
        }
        i3[t11[e12]] = null !== (a3 = i3[t11[e12]]) && void 0 !== a3 ? a3 : {}, i3 = i3[t11[e12]];
      }
    }, a2 = (e11, t11) => G(t11) ? { type: e11, value: /* @__PURE__ */ X(t11, (t12) => a2(e11, t12).value) } : (ea(t11) && (t11 = /* @__PURE__ */ t11.replace(/var\(([^)]+)\)/g, (e12) => {
      let t12 = /* @__PURE__ */ e12.slice(4, e12.length - 1), r3 = /* @__PURE__ */ t12.slice(`--${this.varPrefix}-`.length).split("--");
      return `{${r3[0].split("__").map((e13, t13) => 0 == t13 ? eu(e13) : e13).join(".")}}`;
    }).replace(/calc\(.+\)$/g, (e12) => e12.slice(5, e12.length - 1))), { type: e11, value: t11 });
    for (let o2 in this.tokens) {
      let s2 = this.tokens[o2], l2 = (l3) => s2.tokens.forEach((d2) => {
        if (!d2.includes("/")) {
          if (d2.startsWith("sys.")) {
            let e11 = /* @__PURE__ */ s2.get(d2, "_default"), u2 = /* @__PURE__ */ s2.get(d2, "_dark");
            i2(t10, [o2, .../* @__PURE__ */ d2.split(".")], /* @__PURE__ */ a2(l3, e11)), e11 != u2 && i2(r2, [o2, .../* @__PURE__ */ d2.split(".")], /* @__PURE__ */ a2(l3, u2));
          } else
            i2(e10, [o2, .../* @__PURE__ */ d2.split(".")], /* @__PURE__ */ a2(l3, /* @__PURE__ */ s2.get(d2, "_default")));
        }
      });
      switch (o2) {
        case "color":
          l2("color");
          break;
        case "rounded":
          l2("borderRadius");
          break;
        case "shadow":
          l2("boxShadow");
          break;
        case "font":
          l2("fontFamily");
          break;
        case "fontWeight":
          l2("fontWeight");
      }
    }
    for (let e11 in this.mixins) {
      let r3 = this.mixins[e11], o2 = (o3) => r3.tokens.forEach((s2) => {
        let l2 = this.unstable_sx(/* @__PURE__ */ r3.get(s2))[0];
        i2(t10, [e11, .../* @__PURE__ */ s2.split(".")], /* @__PURE__ */ a2(o3, l2));
      });
      "textStyle" === e11 && o2("typography");
    }
    return { seed: e10, base: t10, dark: r2 };
  }
};
__publicField(_tI, "propsCanPercent", tT([...tk.boxSize({}).on]));
__publicField(_tI, "propsCanBaseDp", tT([...tk.boxSize({}).on, ...tk.space({}).on, ...tk.fontSize({}).on, ...tk.letterSpacing({}).on, ...tk.lineHeight({}).on, ...tk.rounded({}).on]));
let tI = _tI;
let tz = { shadow: /* @__PURE__ */ tk.shadow({ 0: { _default: "0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0)", _dark: "0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0)" }, 1: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)", _dark: "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 2: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)", _dark: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 3: { _default: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)" }, 4: { _default: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)" }, 5: { _default: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)", _dark: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)" } }), elevation: /* @__PURE__ */ tk.customMixin("elevation", { 0: /* @__PURE__ */ tk.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "0", _hover: { shadow: "1" } }), 1: /* @__PURE__ */ tk.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "1", _hover: { shadow: "2" } }), 2: /* @__PURE__ */ tk.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "2", _hover: { shadow: "3" } }), 3: /* @__PURE__ */ tk.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "3", _hover: { shadow: "4" } }), 4: /* @__PURE__ */ tk.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "4", _hover: { shadow: "5" } }) }) }, tV = { font: /* @__PURE__ */ tk.font({ brand: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', plain: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', code: "'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace" }), fontWeight: /* @__PURE__ */ tk.fontWeight({ regular: 400, medium: 500, bold: 700 }), textStyle: /* @__PURE__ */ tk.customMixin("textStyle", { sys: { "display-large": /* @__PURE__ */ tk.mixin({ lineHeight: 64, fontSize: 57, letterSpacing: -0.25, fontWeight: "regular", font: "brand" }), "display-medium": /* @__PURE__ */ tk.mixin({ lineHeight: 52, fontSize: 45, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "display-small": /* @__PURE__ */ tk.mixin({ lineHeight: 44, fontSize: 36, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-large": /* @__PURE__ */ tk.mixin({ lineHeight: 40, fontSize: 32, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-medium": /* @__PURE__ */ tk.mixin({ lineHeight: 36, fontSize: 28, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-small": /* @__PURE__ */ tk.mixin({ lineHeight: 32, fontSize: 24, letterSpacing: 0, fontWeight: "regular", font: "plain" }), "title-large": /* @__PURE__ */ tk.mixin({ lineHeight: 28, fontSize: 22, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "title-medium": /* @__PURE__ */ tk.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.15, fontWeight: "medium", font: "plain" }), "title-small": /* @__PURE__ */ tk.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-large": /* @__PURE__ */ tk.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-medium": /* @__PURE__ */ tk.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "label-small": /* @__PURE__ */ tk.mixin({ lineHeight: 16, fontSize: 11, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "body-large": /* @__PURE__ */ tk.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.5, fontWeight: "regular", font: "plain" }), "body-medium": /* @__PURE__ */ tk.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.25, fontWeight: "regular", font: "plain" }), "body-small": /* @__PURE__ */ tk.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.4, fontWeight: "regular", font: "plain" }) } }) }, tj = { 0: true, 10: true, 20: true, 30: true, 40: true, 50: true, 60: true, 70: true, 80: true, 90: true, 95: true, 100: true }, tA = (e10) => {
  let t10 = /* @__PURE__ */ P(e10);
  return [t10.r, t10.g, t10.b];
}, tP = (e10) => ({ primary: true, secondary: true, tertiary: true, error: true, warning: true, success: true })[e10];
const _tD = class _tD {
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
    let t10 = {}, r2 = {};
    for (let i2 in e10) {
      let [a2, o2, s2] = e10[i2];
      this.seeds[a2] && (r2[i2] = tj[o2] ? `${a2}.${o2}` : this.seeds[a2].tone(o2), t10[i2] = tj[s2] ? `${a2}.${s2}` : this.seeds[a2].tone(s2));
    }
    return [t10, r2];
  }
  toDesignTokens() {
    let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [t10, r2] = this.getThemeRoleColors(/* @__PURE__ */ this.normalizeRoleRules(e10)), i2 = {}, a2 = {};
    for (let e11 in t10)
      if (i2[`${e11}`] = { _default: ei(t10[e11]) ? tA(t10[e11]) : t10[e11], _dark: ei(r2[e11]) ? tA(r2[e11]) : r2[e11] }, tP(e11) && (a2[`${e11}`] = /* @__PURE__ */ tk.mixin({ bgColor: `sys.${e11}`, color: `sys.on-${e11}` }), a2[`${e11}-container`] = /* @__PURE__ */ tk.mixin({ bgColor: `sys.${e11}-container`, color: `sys.on-${e11}-container` })), e11.startsWith("surface")) {
        if (e11.includes("container")) {
          a2[`${e11}`] = /* @__PURE__ */ tk.mixin({ bgColor: `sys.${e11}`, color: "sys.on-surface" });
          continue;
        }
        a2[`${e11}`] = /* @__PURE__ */ tk.mixin({ bgColor: `sys.${e11}`, color: "sys.on-surface" }), a2[`on-${e11}`] = /* @__PURE__ */ tk.mixin({ bgColor: `sys.on-${e11}`, color: "sys.inverse-on-surface" });
      }
    let o2 = (e11) => Object.keys(tj).reduce((t11, r3) => ({ ...t11, [r3]: /* @__PURE__ */ tA(/* @__PURE__ */ e11.tone(/* @__PURE__ */ parseInt(r3))) }), {}), s2 = /* @__PURE__ */ tk.color({ ...X(this.seeds, (e11) => o2(e11)), white: [255, 255, 255], black: [0, 0, 0], sys: i2 }), l2 = /* @__PURE__ */ tk.customMixin("containerStyle", { sys: a2 });
    return { color: s2, containerStyle: l2 };
  }
};
__publicField(_tD, "toHEX", (e10) => `#${tA(e10).map((e11) => ed(/* @__PURE__ */ e11.toString(16), 2, "0")).join("")}`);
__publicField(_tD, "fromColors", (e10) => {
  let { primary: t10, secondary: r2, tertiary: i2, neutral: a2, neutralVariant: o2, error: s2, ...l2 } = e10, d2 = /* @__PURE__ */ R.contentFromColors({ primary: /* @__PURE__ */ O(t10), secondary: r2 ? O(r2) : void 0, tertiary: i2 ? O(i2) : void 0, error: s2 ? O(s2) : void 0 });
  return a2 && (d2.n1 = /* @__PURE__ */ T.fromHueAndChroma(/* @__PURE__ */ O(a2), 4)), o2 && (d2.n2 = /* @__PURE__ */ T.fromHueAndChroma(/* @__PURE__ */ O(o2), 8)), new _tD({ primary: d2.a1, secondary: d2.a2, tertiary: d2.a3, neutral: d2.n1, neutralVariant: d2.n2, error: d2.error, ...X(l2, (e11) => T.fromInt(/* @__PURE__ */ O(e11))) });
});
let tD = _tD;
let tM = (e10, t10, r2, i2) => Object.assign(/* @__PURE__ */ I(e10, t10, r2, i2), { toString: () => `cubic-bezier(${e10}, ${t10}, ${r2}, ${i2})` }), tL = { duration: { sm1: 50, sm2: 100, sm3: 150, sm4: 200, md1: 250, md2: 300, md3: 350, md4: 400, lg1: 450, lg2: 500, lg3: 550, lg4: 600, xl1: 700, xl2: 800, xl3: 900, xl4: 1e3 }, easing: { linear: /* @__PURE__ */ tM(0, 0, 1, 1), standard: /* @__PURE__ */ Object.assign(/* @__PURE__ */ tM(0.2, 0, 0, 1), { accelerate: /* @__PURE__ */ tM(0.3, 0, 1, 1), decelerate: /* @__PURE__ */ tM(0, 0, 0, 1) }), emphasized: /* @__PURE__ */ Object.assign(/* @__PURE__ */ tM(0.2, 0, 0, 1), { accelerate: /* @__PURE__ */ tM(0.3, 0, 0.8, 0.15), decelerate: /* @__PURE__ */ tM(0.05, 0.7, 0.1, 1) }), legacy: /* @__PURE__ */ Object.assign(/* @__PURE__ */ tM(0.4, 0, 0.2, 1), { decelerate: /* @__PURE__ */ tM(0, 0, 0.2, 1), accelerate: /* @__PURE__ */ tM(0.4, 0, 1, 1) }) } }, tW = (e10, t10) => (t10 = null != t10 ? t10 : { ...e10, from: { ...e10.to }, to: { ...e10.from } }, to({ onComplete: /* @__PURE__ */ ta.custom(), $default: /* @__PURE__ */ ta.custom() }, (r2, i2) => {
  let a2, {} = r2, { slots: o2, emit: s2 } = i2, l2 = (t11, r3) => {
    a2 = /* @__PURE__ */ V({ ...e10, autoplay: true, onComplete: () => {
      r3(), s2("complete", "enter");
    }, onUpdate: (e11) => {
      Object.assign(t11.style, e11);
    } });
  }, d2 = (e11, r3) => {
    a2 = /* @__PURE__ */ V({ ...t10, autoplay: true, onComplete: () => {
      r3(), s2("complete", "leave");
    }, onUpdate: (t11) => {
      Object.assign(e11.style, t11);
    } });
  }, p2 = () => {
    null == a2 || a2.stop();
  };
  return () => {
    var e11;
    return /* @__PURE__ */ u(c, { css: false, onEnter: l2, onEnterCancelled: p2, onLeave: d2, onLeaveCancelled: p2, children: null === (e11 = o2.default) || void 0 === e11 ? void 0 : e11.call(o2) });
  };
}, { name: "Transition" })), tN = { transitionDuration: /* @__PURE__ */ tk.transitionDuration(tL.duration), transitionTimingFunction: /* @__PURE__ */ tk.transitionTimingFunction({ linear: /* @__PURE__ */ tL.easing.linear.toString(), standard: /* @__PURE__ */ tL.easing.standard.toString(), "standard-accelerate": /* @__PURE__ */ tL.easing.standard.accelerate.toString(), "standard-decelerate": /* @__PURE__ */ tL.easing.standard.decelerate.toString(), emphasized: /* @__PURE__ */ tL.easing.emphasized.toString(), "emphasized-decelerate": /* @__PURE__ */ tL.easing.emphasized.decelerate.toString(), "emphasized-accelerate": /* @__PURE__ */ tL.easing.emphasized.accelerate.toString(), legacy: /* @__PURE__ */ tL.easing.legacy.toString(), "legacy-decelerate": /* @__PURE__ */ tL.easing.legacy.decelerate.toString(), "legacy-accelerate": /* @__PURE__ */ tL.easing.legacy.accelerate.toString() }) }, tB = /* @__PURE__ */ tk.rounded({ xs: 4, sm: 8, md: 12, lg: 16, xl: 28 }), tF = /* @__PURE__ */ tD.fromColors({ primary: "#1270f5", secondary: "#8a90a5", tertiary: "#b58391", neutral: "#5e5e5e", error: "#d93f23", warning: "#e69c00", success: "#5ac220" }), tH = { ...tV, ...tN, ...tz, rounded: tB, ...tF.toDesignTokens({ primary: ["primary", 80, 50] }) }, tU = /* @__PURE__ */ tI.create(tH, { varPrefix: "vk" }), tq = /* @__PURE__ */ tm(() => tU, { name: "Theme" }), tG = /* @__PURE__ */ tm(() => z({ key: "css" }), { name: "Cache" }), tX = (e10) => (t10) => {
  if (t10.serialized) {
    if (t10.withoutScoping)
      e10.insert("", t10.serialized, e10.sheet, true);
    else {
      var r2;
      D(e10, t10.serialized, null === (r2 = t10.isStringTag) || void 0 === r2 || r2);
    }
  }
}, tY = /* @__PURE__ */ to({ sx: /* @__PURE__ */ ta.custom(), component: /* @__PURE__ */ ta.custom().optional().default("div") }, (e10, t10) => {
  var r2;
  let { slots: i2 } = t10, a2 = /* @__PURE__ */ tq.use(), o2 = /* @__PURE__ */ tG.use(), s2 = /* @__PURE__ */ a2.unstable_css(o2, null !== (r2 = e10.sx) && void 0 !== r2 ? r2 : {}), l2 = () => "0" != s2.name ? `${o2.key}-${s2.name}` : "", d2 = /* @__PURE__ */ tX(o2);
  return b(() => {
    d2({ serialized: s2, isStringTag: true });
  }), () => {
    var t11;
    let r3 = null !== (t11 = e10.component) && void 0 !== t11 ? t11 : "div";
    return /* @__PURE__ */ u(r3, { class: /* @__PURE__ */ l2(), children: i2 });
  };
}), tK = (e10, t10) => (r2) => {
  let i2 = {};
  for (let t11 in e10)
    "component" !== t11 && "sx" !== t11 && e10[t11] && (i2[`data-${t11}`] = e10[t11]);
  return /* @__PURE__ */ u(r2, { ...i2, children: t10.slots });
};
function tZ(e10, t10, r2) {
  var i2;
  let a2 = null !== (i2 = K(t10) ? t10 : r2) && void 0 !== i2 ? i2 : tK, o2 = Q(t10) ? t10 : {};
  return (t11) => {
    let r3 = to({ ...o2, sx: /* @__PURE__ */ ta.custom().optional(), component: /* @__PURE__ */ ta.custom().optional() }, (i3, o3) => {
      let s2 = /* @__PURE__ */ tq.use(), l2 = /* @__PURE__ */ tG.use(), d2 = /* @__PURE__ */ tX(l2);
      t11.label = r3.name;
      let u2 = /* @__PURE__ */ p(""), c2 = /* @__PURE__ */ s2.unstable_css(l2, t11), m2 = () => "0" != c2.name ? `${l2.key}-${c2.name}${u2.value}` : `${u2.value}`;
      if (e10.__styled) {
        var f2;
        let e11 = /* @__PURE__ */ s2.unstable_css(l2, null !== (f2 = i3.sx) && void 0 !== f2 ? f2 : {});
        "0" != e11.name && (u2.value = ` ${l2.key}-${e11.name}`), b(() => {
          d2({ serialized: c2, isStringTag: true }), d2({ serialized: e11, isStringTag: true });
        });
      } else
        y(() => {
          d2({ serialized: c2, isStringTag: true });
        });
      let g2 = /* @__PURE__ */ a2(i3, o3);
      return () => {
        if (e10.__styled) {
          let t13 = /* @__PURE__ */ g2(e10);
          return t13 ? h(t13, { component: i3.component, class: /* @__PURE__ */ m2() }) : null;
        }
        let t12 = /* @__PURE__ */ g2(tY);
        return t12 ? h(t12, { component: i3.component || e10, sx: i3.sx, class: /* @__PURE__ */ m2() }) : null;
      };
    });
    return r3.__styled = true, r3;
  };
}
let tJ = /* @__PURE__ */ to({ styles: /* @__PURE__ */ ta.custom() }, (e10) => {
  let { styles: t10 } = e10, r2 = /* @__PURE__ */ tq.use(), i2 = /* @__PURE__ */ tG.use(), a2 = /* @__PURE__ */ tX(i2), o2 = /* @__PURE__ */ r2.unstable_css(i2, ea(t10) ? { "&": t10 } : t10);
  return y(() => {
    a2({ serialized: o2, withoutScoping: true });
  }), () => null;
});
to(() => {
  let e10 = /* @__PURE__ */ tq.use(), t10 = e10.rootCSSVars;
  return () => /* @__PURE__ */ u(tJ, { styles: { ":host, :root, [data-theme]": t10, "*, *::after, *::before": { boxSizing: "border-box" }, html: { fontSize: "10px" }, a: { color: "inherit" }, body: { textStyle: "sys.body-medium" } } });
});
let tQ = /* @__PURE__ */ tm(() => ({ mountPoint: () => document.body }), { name: "OverlaySetting" }), t0 = /* @__PURE__ */ tm(() => new t1(p(null), p(null), () => false), { name: "Overlay" });
class t1 {
  constructor(e10, t10, r2) {
    __publicField(this, "children", []);
    __publicField(this, "add", (e10) => (this.children = [...this.children, e10], () => {
      this.children = /* @__PURE__ */ this.children.filter((t10) => t10 !== e10);
    }));
    __publicField(this, "isClickInside", (e10) => {
      for (let t11 of this.children)
        if (t11.isClickInside(e10))
          return true;
      let t10 = /* @__PURE__ */ m(this.triggerRef), r2 = /* @__PURE__ */ m(this.contentRef);
      return t10 && (t10 === e10.target || e10.composedPath().includes(t10)) || r2 && (r2 === e10.target || e10.composedPath().includes(r2));
    });
    this.triggerRef = e10, this.contentRef = t10, this.isOpen = r2;
  }
  topmost() {
    return 0 == this.children.filter((e10) => e10.isOpen()).length;
  }
}
let t2 = /* @__PURE__ */ to({ isOpen: /* @__PURE__ */ ta.boolean().optional(), style: /* @__PURE__ */ ta.custom().optional(), contentRef: /* @__PURE__ */ ta.custom().optional(), triggerRef: /* @__PURE__ */ ta.custom().optional(), onClickOutside: /* @__PURE__ */ ta.custom(), onEscKeydown: /* @__PURE__ */ ta.custom(), onContentBeforeMount: /* @__PURE__ */ ta.custom(), $transition: /* @__PURE__ */ ta.custom().optional(), $default: /* @__PURE__ */ ta.custom().optional() }, (e10, t10) => {
  var r2;
  let { slots: i2, attrs: a2, emit: o2 } = t10, s2 = e10.contentRef || p(null), l2 = new t1(null !== (r2 = e10.triggerRef) && void 0 !== r2 ? r2 : p(null), s2, () => !!e10.isOpen), c2 = /* @__PURE__ */ tQ.use(), m2 = /* @__PURE__ */ t0.use();
  return d(/* @__PURE__ */ m2.add(l2)), window && tl(/* @__PURE__ */ td(s2, "value"), /* @__PURE__ */ tp((e11) => {
    if (!e11)
      return;
    let t11 = (e12) => {
      l2.isClickInside(e12) || o2("click-outside", e12);
    };
    return window.addEventListener("pointerdown", t11), () => {
      window.removeEventListener("pointerdown", t11);
    };
  }), /* @__PURE__ */ tp((e11) => {
    if (!e11)
      return;
    let t11 = (e12) => {
      "Escape" === e12.key && l2.topmost() && o2("esc-keydown", e12);
    };
    return window.addEventListener("keydown", t11), () => {
      window.removeEventListener("keydown", t11);
    };
  }), /* @__PURE__ */ tu()), () => {
    var t11;
    let r3 = e10.isOpen ? h(/* @__PURE__ */ u("div", { ...a2, ref: s2, style: e10.style, children: /* @__PURE__ */ u(t0, { value: l2, children: null === (t11 = i2.default) || void 0 === t11 ? void 0 : t11.call(i2) }) }), { onVnodeBeforeMount: () => {
      o2("content-before-mount");
    } }) : null;
    return /* @__PURE__ */ u(f, { to: /* @__PURE__ */ c2.mountPoint(), children: i2.transition ? i2.transition({ content: r3 }) : r3 });
  };
}, { inheritAttrs: false, name: "Overlay" }), t4 = /* @__PURE__ */ to({ isOpen: t2.propTypes.isOpen, onClickOutside: t2.propTypes.onClickOutside, placement: /* @__PURE__ */ ta.custom().optional(), modifiers: /* @__PURE__ */ ta.custom().optional(), $transition: t2.propTypes.$transition, $content: /* @__PURE__ */ ta.custom(), $default: /* @__PURE__ */ ta.custom() }, (e10, t10) => {
  let { slots: r2, emit: i2, attrs: a2 } = t10, s2 = /* @__PURE__ */ p(null), l2 = /* @__PURE__ */ p(null);
  return o(() => l2.value, (t11) => {
    if (t11) {
      var r3, i3;
      j(s2.value, t11, { placement: null !== (r3 = e10.placement) && void 0 !== r3 ? r3 : "bottom", modifiers: [...null !== (i3 = e10.modifiers) && void 0 !== i3 ? i3 : [], A] });
    }
  }), () => {
    var t11, o2;
    let d2 = null === (t11 = r2.default) || void 0 === t11 ? void 0 : t11.call(r2)[0];
    return d2 ? /* @__PURE__ */ g(v, { children: [/* @__PURE__ */ h(d2, { ...a2, onVnodeMounted: (e11) => {
      s2.value = /* @__PURE__ */ function e12(t12) {
        if (t12) {
          if (t12 instanceof HTMLElement)
            return t12;
          if (t12 instanceof Text)
            return e12(t12.nextElementSibling);
        }
        return null;
      }(e11.el);
    } }), /* @__PURE__ */ u(t2, { triggerRef: s2, contentRef: l2, isOpen: e10.isOpen, onClickOutside: (e11) => i2("click-outside", e11), style: { zIndex: 100 }, $transition: r2.transition, children: null === (o2 = r2.content) || void 0 === o2 ? void 0 : o2.call(r2) })] }) : null;
  };
}, { name: "Popper", inheritAttrs: false }), t5 = /* @__PURE__ */ tZ("button", { hover: /* @__PURE__ */ ta.boolean().optional(), focus: /* @__PURE__ */ ta.boolean().optional(), active: /* @__PURE__ */ ta.boolean().optional(), disabled: /* @__PURE__ */ ta.boolean().optional() })({ textStyle: "sys.label-large", display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none", outline: "none", overflow: "hidden", border: 0, margin: 0, userSelect: "none", cursor: "pointer", _disabled: { cursor: "not-allowed" }, gap: 8, h: 40, px: 24, rounded: 20, transitionDuration: "md4", transitionTimingFunction: "standard-accelerate", bg: "none", pos: "relative", zIndex: 1, _$before: { content: '""', pos: "absolute", top: 0, right: 0, left: 0, bottom: 0, zIndex: -1, transitionDuration: "md1", transitionTimingFunction: "standard-accelerate" }, $data_icon: { boxSize: 18, _data_placement__start: { ml: -8 }, _data_placement__end: { mr: -8 } } }), t3 = /* @__PURE__ */ tZ(t5)({ containerStyle: "sys.primary", shadow: "1", _hover: { shadow: "2", _$before: { bgColor: /* @__PURE__ */ tR("white", /* @__PURE__ */ tC(0.08)) } }, _focus: { shadow: "2", _$before: { bgColor: /* @__PURE__ */ tR("white", /* @__PURE__ */ tC(0.12)) } }, _active: { shadow: "2", _$before: { bgColor: /* @__PURE__ */ tR("white", /* @__PURE__ */ tC(0.12)) } }, _disabled: { shadow: "0", color: /* @__PURE__ */ tR("sys.on-surface", /* @__PURE__ */ tC(0.38)), bgColor: "rgba(0,0,0,0)", _$before: { bgColor: /* @__PURE__ */ tR("sys.on-surface", /* @__PURE__ */ tC(0.12)) } } }), t8 = /* @__PURE__ */ tZ(t5)({ color: "sys.primary", shadow: "1", _$before: { bgColor: "sys.surface-container-low" }, _hover: { shadow: "2", _$before: { bgColor: /* @__PURE__ */ tR("sys.primary", /* @__PURE__ */ tC(0.08)) } }, _focus: { shadow: "2", _$before: { bgColor: /* @__PURE__ */ tR("sys.primary", /* @__PURE__ */ tC(0.12)) } }, _active: { shadow: "2", _$before: { bgColor: /* @__PURE__ */ tR("sys.primary", /* @__PURE__ */ tC(0.12)) } }, _disabled: { shadow: "0", color: /* @__PURE__ */ tR("sys.on-surface", /* @__PURE__ */ tC(0.38)), _$before: { bgColor: /* @__PURE__ */ tR("sys.on-surface", /* @__PURE__ */ tC(0.12)) } } }), t6 = /* @__PURE__ */ tZ(t5)({ extends: [{ px: 16, $data_icon: { _data_placement__start: { ml: -4 }, _data_placement__end: { mr: -4 } } }], color: "sys.primary", _$before: { bgColor: "rgba(0,0,0,0)" }, _hover: { _$before: { bgColor: /* @__PURE__ */ tR("sys.primary", /* @__PURE__ */ tC(0.08)) } }, _focus: { _$before: { bgColor: /* @__PURE__ */ tR("sys.primary", /* @__PURE__ */ tC(0.12)) } }, _active: { _$before: { bgColor: /* @__PURE__ */ tR("sys.primary", /* @__PURE__ */ tC(0.12)) } }, _disabled: { color: /* @__PURE__ */ tR("sys.on-surface", /* @__PURE__ */ tC(0.38)), bgColor: "rgba(0,0,0,0)", _$before: { bgColor: "rgba(0,0,0,0)" } } }), t9 = /* @__PURE__ */ tZ(t5)({ containerStyle: "sys.secondary-container", color: "sys.primary", shadow: "0", _hover: { shadow: "1", _$before: { bgColor: /* @__PURE__ */ tR("sys.on-secondary-container", /* @__PURE__ */ tC(0.08)) } }, _focus: { _$before: { bgColor: /* @__PURE__ */ tR("sys.on-secondary-container", /* @__PURE__ */ tC(0.12)) } }, _active: { _$before: { bgColor: /* @__PURE__ */ tR("sys.on-secondary-container", /* @__PURE__ */ tC(0.12)) } }, _disabled: { color: /* @__PURE__ */ tR("sys.on-surface", /* @__PURE__ */ tC(0.38)), bgColor: "rgba(0,0,0,0)", shadow: "0", _$before: { bgColor: /* @__PURE__ */ tR("sys.on-surface", /* @__PURE__ */ tC(0.12)) } } }), t7 = /* @__PURE__ */ tZ(t5)({ extends: [{
  // ensure the order to define border before all
  border: "1px solid"
}], color: "sys.primary", bgColor: "rgba(0,0,0,0)", borderColor: "sys.outline", _hover: { bgColor: /* @__PURE__ */ tR("sys.primary", /* @__PURE__ */ tC(0.08)) }, _active: { bgColor: /* @__PURE__ */ tR("sys.primary", /* @__PURE__ */ tC(0.12)) }, _focus: { bgColor: /* @__PURE__ */ tR("sys.primary", /* @__PURE__ */ tC(0.12)) }, _disabled: { color: /* @__PURE__ */ tR("sys.on-surface", /* @__PURE__ */ tC(0.38)), bgColor: "rgba(0,0,0,0)", borderColor: /* @__PURE__ */ tR("sys.on-surface", /* @__PURE__ */ tC(0.12)) } }), ne = /* @__PURE__ */ tZ(t6, {})({ boxSize: 40, p: 0 }), nt = /* @__PURE__ */ tZ("span", { placement: /* @__PURE__ */ ta.enums(["start", "end"]).optional(), path: /* @__PURE__ */ ta.string() }, (e10, t10) => {
  let {} = t10;
  return (t11) => /* @__PURE__ */ u(t11, { "data-icon": true, "data-placement": e10.placement, children: /* @__PURE__ */ u("svg", { viewBox: "0 0 24 24", children: /* @__PURE__ */ u("path", { d: e10.path }) }) });
})({ boxSize: "1.2em" }), nn = /* @__PURE__ */ tW({ from: { opacity: 0 }, to: { opacity: 1 }, duration: tL.duration.md1, easing: tL.easing.standard.accelerate }, { from: { opacity: 1 }, to: { opacity: 0 }, duration: tL.duration.sm4, easing: tL.easing.standard.decelerate }), nr = /* @__PURE__ */ tZ("div")({ py: 4, px: 12, rounded: "sm", shadow: "3", containerStyle: "sys.on-surface", pos: "relative", zIndex: 100 }), ni = /* @__PURE__ */ to({ title: /* @__PURE__ */ ta.custom(), $default: /* @__PURE__ */ ta.custom() }, (e10, t10) => {
  let { slots: r2 } = t10, i2 = /* @__PURE__ */ p(false);
  return () => {
    let t11 = r2.default()[0];
    return /* @__PURE__ */ u(t4, { isOpen: i2.value, $content: /* @__PURE__ */ u(nr, { children: e10.title }), $transition: (e11) => {
      let { content: t12 } = e11;
      return u(nn, { children: t12 });
    }, children: t11 ? h(t11, { onMouseover: () => i2.value = true, onMouseout: () => i2.value = false }) : null });
  };
}), na = /* @__PURE__ */ tZ("div")({ py: 8, rounded: "sm", shadow: "2", minW: 120, containerStyle: "sys.surface-container", pos: "relative", zIndex: 100 }), no = /* @__PURE__ */ tZ("div")({ "& + &": { borderTop: "1px solid", borderColor: "sys.outline-variant" }, py: 8, px: 16, textStyle: "sys.label-large", containerStyle: "sys.surface-container", _hover: { cursor: "pointer", bgColor: /* @__PURE__ */ tR("sys.on-surface", /* @__PURE__ */ tC(0.08)) } }), ns = /* @__PURE__ */ to({ placement: /* @__PURE__ */ ta.custom().optional(), $menu: /* @__PURE__ */ ta.custom(), $default: /* @__PURE__ */ ta.custom() }, (e10, t10) => {
  let { slots: r2 } = t10, i2 = /* @__PURE__ */ p(false);
  return () => {
    var t11;
    let a2 = r2.default ? r2.default()[0] : void 0;
    return /* @__PURE__ */ u(t4, { isOpen: i2.value, placement: e10.placement, onClickOutside: () => i2.value = false, $content: /* @__PURE__ */ u(na, { children: null === (t11 = r2.menu) || void 0 === t11 ? void 0 : t11.call(r2) }), children: a2 ? h(a2, { onClick: () => i2.value = true }) : null });
  };
}), nl = /* @__PURE__ */ tZ("div")({ pos: "absolute", top: 0, left: 0, h: "100vh", w: "100vw", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center" }), nd = /* @__PURE__ */ tZ("div")({ cursor: "pointer", pos: "absolute", top: 0, left: 0, h: "100vh", w: "100vw", zIndex: -1, bgColor: /* @__PURE__ */ tR("sys.scrim", /* @__PURE__ */ tC(0.38)) }), nu = /* @__PURE__ */ tZ("div")({ py: 12, rounded: "sm", shadow: "3", minW: "50vw", containerStyle: "sys.surface-container-high" }), nc = /* @__PURE__ */ tW({ from: { opacity: 0 }, to: { opacity: 1 }, duration: tL.duration.md1, easing: tL.easing.standard.accelerate }, { from: { opacity: 1 }, to: { opacity: 0 }, duration: tL.duration.sm4, easing: tL.easing.standard.accelerate }), np = /* @__PURE__ */ to({ isOpen: t2.propTypes.isOpen, onClose: /* @__PURE__ */ ta.custom(), $default: /* @__PURE__ */ ta.custom().optional() }, (e10, t10) => {
  var r2;
  let { slots: i2, emit: a2 } = t10, s2 = /* @__PURE__ */ p(null !== (r2 = e10.isOpen) && void 0 !== r2 && r2), l2 = /* @__PURE__ */ p(false);
  return o(() => e10.isOpen, (e11) => {
    true === e11 ? s2.value = true : false === e11 && (l2.value = false);
  }), () => {
    var e11;
    return /* @__PURE__ */ u(t2, { isOpen: s2.value, onContentBeforeMount: () => l2.value = true, onEscKeydown: () => l2.value = false, children: /* @__PURE__ */ g(nl, { children: [/* @__PURE__ */ u(nc, { onComplete: (e12) => {
      "leave" == e12 && (s2.value = false, a2("close"));
    }, children: l2.value ? /* @__PURE__ */ u(nd, { onClick: () => l2.value = false }) : null }), /* @__PURE__ */ u(v, { children: null === (e11 = i2.default) || void 0 === e11 ? void 0 : e11.call(i2) })] }) });
  };
}), nm = /* @__PURE__ */ tZ("label", { valued: /* @__PURE__ */ ta.boolean().optional(), focus: /* @__PURE__ */ ta.boolean().optional(), invalid: /* @__PURE__ */ ta.boolean().optional(), disabled: /* @__PURE__ */ ta.boolean().optional(), $label: /* @__PURE__ */ ta.custom().optional(), $supporting: /* @__PURE__ */ ta.custom().optional(), $leading: /* @__PURE__ */ ta.custom().optional(), $trailing: /* @__PURE__ */ ta.custom().optional(), $default: /* @__PURE__ */ ta.custom() }, (e10, t10) => {
  let { slots: r2 } = t10;
  return (t11) => {
    var i2, a2, o2, s2;
    let l2 = e10.valued, d2 = e10.invalid, c2 = e10.disabled, p2 = /* @__PURE__ */ (null !== (s2 = null === (i2 = r2.default) || void 0 === i2 ? void 0 : i2.call(r2)) && void 0 !== s2 ? s2 : []).map((e11) => "input" === e11.type ? (l2 = !!q(e11.props, ["value"], /* @__PURE__ */ q(e11.props, ["placeholder"], l2)), c2 = /* @__PURE__ */ q(e11.props, ["disabled"], c2), h(e11, { disabled: c2 })) : h(e11));
    return /* @__PURE__ */ g(t11, { "data-valued": l2, "data-invalid": d2, "data-disabled": c2, "data-focus-within": e10.focus, "data-has-leading": !!r2.leading, "data-has-trailing": !!r2.trailing, children: [/* @__PURE__ */ g("div", { "data-input-container": "", children: [r2.leading && /* @__PURE__ */ u(nh, { role: "leading", children: /* @__PURE__ */ r2.leading() }), /* @__PURE__ */ u("div", { "data-input-label": "", children: null === (a2 = r2.label) || void 0 === a2 ? void 0 : a2.call(r2) }), p2, r2.trailing && /* @__PURE__ */ u(nh, { role: "trailing", children: /* @__PURE__ */ r2.trailing() })] }), r2.supporting && /* @__PURE__ */ u("div", { "data-input-supporting": "", children: null === (o2 = r2.supporting) || void 0 === o2 ? void 0 : o2.call(r2) })] });
  };
})({ display: "block", pos: "relative", textStyle: "sys.body-large", $data_input_container: { pos: "relative" }, $data_input: { outline: "none", flex: 1, w: "100%", m: 0, px: 16, py: 4, minHeight: 56, bg: "none", border: "none", cursor: "text", "&[readonly]": { cursor: "pointer" }, bgColor: "sys.surface-container-highest", color: "sys.on-surface", roundedTop: "xs", borderBottom: "1px solid", borderColor: "sys.outline-variant", textStyle: "sys.body-large", transitionDuration: "sm1", transitionTimingFunction: "standard" }, $data_input_label: { pos: "absolute", top: 4, bottom: 4, left: 16, color: "sys.on-surface-variant", display: "flex", alignItems: "center", transitionDuration: "sm2", transitionTimingFunction: "standard-accelerate" }, $data_input_supporting: { textStyle: "sys.body-small", px: 16, pt: 4, display: "flex", gap: 16, color: "sys.on-surface-variant" }, _has_leading: { $data_input: { pl: 36 }, $data_input_label: { left: 36 } }, _has_trailing: { $data_input: { pr: 32 } }, _valued: { $data_input: { pt: 18 }, $data_input_label: { top: 8, bottom: "auto", textStyle: "sys.body-small" } }, _focusWithin: { $data_input: { pt: 18, borderBottom: "2px solid", borderColor: "sys.primary" }, $data_input_label: { top: 8, bottom: "auto", textStyle: "sys.body-small", color: "sys.primary" } }, _invalid: { $data_input: { borderBottom: "2px solid", borderColor: "sys.error" }, $data_input_label: { color: "sys.error" }, $data_input_supporting: { color: "sys.error" } }, _disabled: { opacity: 0.38, cursor: "not-allowed" } }), nh = /* @__PURE__ */ tZ("div", { role: /* @__PURE__ */ ta.enums(["leading", "trailing"]) })({ pos: "absolute", top: 4, bottom: 4, display: "flex", alignItems: "center", color: "sys.on-surface-variant", _role__leading: { left: 12, $data_icon: { ml: -4 } }, _role__trailing: { right: 12, $data_icon: { mr: -4 } } }), nf = /* @__PURE__ */ _(() => {
  let e10 = /* @__PURE__ */ x(), t10 = /* @__PURE__ */ ep(/* @__PURE__ */ e10.options.routes.filter((e11) => "/" != e11.path), (e11) => e11.path.split("/")[1]);
  return () => /* @__PURE__ */ u(M, { sx: { py: 16, px: 0, textTransform: "capitalize" }, children: /* @__PURE__ */ em(t10, (e11, t11) => {
    var r2;
    let [i2, a2] = Z(e11, (e12) => e12.path === `/${t11}`);
    return /* @__PURE__ */ g(M, { sx: { px: 8 }, children: [i2[0] ? /* @__PURE__ */ u(t6, { component: k, sx: { width: "100%", justifyContent: "flex-start" }, activeClass: "active", to: null === (r2 = i2[0]) || void 0 === r2 ? void 0 : r2.path, children: t11 }) : /* @__PURE__ */ u(t6, { sx: { width: "100%", justifyContent: "flex-start" }, children: t11 }), /* @__PURE__ */ u(M, { sx: { pl: 16 }, children: /* @__PURE__ */ em(a2, (e12) => {
      var t12;
      return /* @__PURE__ */ u(t6, { component: k, activeClass: "active", to: e12.path, sx: { width: "100%", justifyContent: "flex-start" }, children: null === (t12 = /* @__PURE__ */ el(/* @__PURE__ */ e12.path.split("/"))) || void 0 === t12 ? void 0 : t12.replaceAll("-", " ") }, e12.name);
    }) })] }, t11);
  }) });
}), ng = /* @__PURE__ */ _({ $default: /* @__PURE__ */ ec().optional() }, (e10, t10) => {
  let { slots: r2 } = t10, i2 = /* @__PURE__ */ p("light");
  return () => {
    var e11;
    return /* @__PURE__ */ g(M, { "data-theme": i2.value, sx: { display: "flex", height: "100vh", width: "100vw", containerStyle: "sys.surface" }, children: [/* @__PURE__ */ g(M, { sx: { display: "flex", flexDirection: "column", width: "280px", height: "100vh", borderRightRadius: "lg", overflowY: "auto", containerStyle: "sys.surface-container-low", elevation: "0", _hover: { elevation: "2" } }, children: [/* @__PURE__ */ u(M, { sx: { flex: 1 }, children: /* @__PURE__ */ u(nb, {}) }), /* @__PURE__ */ g(M, { sx: { p: 16, display: "flex", justifyContent: "flex-end" }, children: [/* @__PURE__ */ u(ne, { component: "a", target: "_blank", sx: { color: "sys.on-surface-variant" }, href: "//github.com/innoai-tech/vuekit", children: /* @__PURE__ */ u(nt, { path: eb }) }), /* @__PURE__ */ u(ni, { title: `切换到${"light" == i2.value ? "深色模式" : "浅色模式"}`, children: /* @__PURE__ */ u(M, { component: ne, "data-test": true, sx: { color: "sys.on-surface-variant" }, onClick: () => {
      i2.value = "light" == i2.value ? "dark" : "light";
    }, children: /* @__PURE__ */ u(nt, { path: "light" == i2.value ? ef : eg }) }) })] })] }), /* @__PURE__ */ u(M, { sx: { flex: 1, overflow: "auto" }, children: /* @__PURE__ */ u(ev, { children: null === (e11 = r2.default) || void 0 === e11 ? void 0 : e11.call(r2) }) })] });
  };
}), nv = /* @__PURE__ */ _(() => {
  let e10 = /* @__PURE__ */ eh.use(), t10 = /* @__PURE__ */ L.use();
  return o([() => e10.value.seed, () => e10.value.rules], (t11) => {
    let [r2, i2] = t11;
    e10.next((e11) => {
      e11.theming = /* @__PURE__ */ F.create({ ...H, ...U.fromColors(r2).toDesignTokens(i2) }, { varPrefix: "vk" });
    });
  }), () => {
    let r2 = e10.value.theming, i2 = /* @__PURE__ */ r2.unstable_css(t10, { ":root": r2.rootCSSVars });
    return /* @__PURE__ */ u(eh, { value: e10, children: /* @__PURE__ */ g(B, { value: r2, children: [/* @__PURE__ */ u(W, {}), /* @__PURE__ */ u(N, { styles: '/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n' }), /* @__PURE__ */ u(ny, { children: /* @__PURE__ */ u(w, {}) })] }, i2.name) });
  };
}), nb = /* @__PURE__ */ Object.assign(nf, { displayName: "Nav" }), ny = /* @__PURE__ */ Object.assign(ng, { displayName: "Scaffold" }), n_ = /* @__PURE__ */ Object.assign(nv, { displayName: "App" }), nx = {}, nw = function(e10, t10, r2) {
  if (!t10 || 0 === t10.length)
    return e10();
  let i2 = /* @__PURE__ */ document.getElementsByTagName("link");
  return Promise.all(/* @__PURE__ */ t10.map((e11) => {
    if ((e11 = "/vuekit/" + e11) in nx)
      return;
    nx[e11] = true;
    let t11 = /* @__PURE__ */ e11.endsWith(".css");
    if (r2)
      for (let r3 = i2.length - 1; r3 >= 0; r3--) {
        let a3 = i2[r3];
        if (a3.href === e11 && (!t11 || "stylesheet" === a3.rel))
          return;
      }
    else if (document.querySelector(`link[href="${e11}"]${t11 ? '[rel="stylesheet"]' : ""}`))
      return;
    let a2 = /* @__PURE__ */ document.createElement("link");
    if (a2.rel = t11 ? "stylesheet" : "modulepreload", t11 || (a2.as = "script", a2.crossOrigin = ""), a2.href = e11, document.head.appendChild(a2), t11)
      return new Promise((t12, r3) => {
        a2.addEventListener("load", t12), a2.addEventListener("error", () => r3(Error(`Unable to preload CSS for ${e11}`)));
      });
  })).then(() => e10()).catch((e11) => {
    let t11 = new Event("vite:preloadError", { cancelable: true });
    if (t11.payload = e11, window.dispatchEvent(t11), !t11.defaultPrevented)
      throw e11;
  });
}, nk = /* @__PURE__ */ _(() => () => /* @__PURE__ */ u(M, { sx: { display: "flex", alignItems: "center", justifyContent: "center", textStyle: "sys.display-large" }, children: "Vuekit" })), n$ = /* @__PURE__ */ Object.assign(nk, { displayName: "IndexDefault" }), nS = [{ name: "vuematerial", path: "/vuematerial", component: () => nw(() => import("./nodepkg-vuematerial-example.37e4f75f.chunk.js"), true ? ["static/nodepkg-vuematerial-example.37e4f75f.chunk.js","static/lib-nodepkg-vuekit.c8aa0df1.chunk.js","static/vendor-core-js.aeb891fb.chunk.js","static/lib-nodepkg-typedef.6f3dc261.chunk.js"] : void 0), props: true }, { name: "vuematerial-buttons", path: "/vuematerial/buttons", component: () => nw(() => import("./nodepkg-vuematerial-example.e9ab3fbe.chunk.js"), true ? ["static/nodepkg-vuematerial-example.e9ab3fbe.chunk.js","static/lib-nodepkg-vuekit.c8aa0df1.chunk.js","static/vendor-core-js.aeb891fb.chunk.js","static/lib-nodepkg-typedef.6f3dc261.chunk.js","static/webapp-vuekit-layout.267ceb16.chunk.js","static/lib-nodepkg-vueuikit.d9454114.chunk.js"] : void 0), props: true }, { name: "vuematerial-icons", path: "/vuematerial/icons", component: () => nw(() => import("./nodepkg-vuematerial-example.b27f85b3.chunk.js"), true ? ["static/nodepkg-vuematerial-example.b27f85b3.chunk.js","static/lib-nodepkg-vuekit.c8aa0df1.chunk.js","static/vendor-core-js.aeb891fb.chunk.js","static/lib-nodepkg-typedef.6f3dc261.chunk.js","static/webapp-vuekit-layout.267ceb16.chunk.js","static/lib-nodepkg-vueuikit.d9454114.chunk.js"] : void 0), props: true }, { name: "vuematerial-textfields", path: "/vuematerial/textfields", component: () => nw(() => import("./nodepkg-vuematerial-example.09d2983f.chunk.js"), true ? ["static/nodepkg-vuematerial-example.09d2983f.chunk.js","static/lib-nodepkg-vuekit.c8aa0df1.chunk.js","static/vendor-core-js.aeb891fb.chunk.js","static/lib-nodepkg-typedef.6f3dc261.chunk.js","static/webapp-vuekit-layout.267ceb16.chunk.js","static/lib-nodepkg-vueuikit.d9454114.chunk.js"] : void 0), props: true }, { name: "vuematerial-overlays", path: "/vuematerial/overlays", component: () => nw(() => import("./nodepkg-vuematerial-example.66b435e8.chunk.js"), true ? ["static/nodepkg-vuematerial-example.66b435e8.chunk.js","static/lib-nodepkg-vuekit.c8aa0df1.chunk.js","static/vendor-core-js.aeb891fb.chunk.js","static/lib-nodepkg-typedef.6f3dc261.chunk.js","static/lib-nodepkg-vueuikit.d9454114.chunk.js","static/webapp-vuekit-layout.267ceb16.chunk.js"] : void 0), props: true }, { name: "vueuikit-color-scheme", path: "/vueuikit/color-scheme", component: () => nw(() => import("./nodepkg-vueuikit-example.082c6bfe.chunk.js"), true ? ["static/nodepkg-vueuikit-example.082c6bfe.chunk.js","static/lib-nodepkg-vuekit.c8aa0df1.chunk.js","static/vendor-core-js.aeb891fb.chunk.js","static/lib-nodepkg-typedef.6f3dc261.chunk.js","static/lib-nodepkg-vueuikit.d9454114.chunk.js"] : void 0), props: true }, { name: "vueuikit-figma-tokens", path: "/vueuikit/figma-tokens", component: () => nw(() => import("./nodepkg-vueuikit-example.344d8689.chunk.js"), true ? ["static/nodepkg-vueuikit-example.344d8689.chunk.js","static/vendor-core-js.aeb891fb.chunk.js","static/lib-nodepkg-vuekit.c8aa0df1.chunk.js","static/lib-nodepkg-typedef.6f3dc261.chunk.js","static/lib-nodepkg-vueuikit.d9454114.chunk.js"] : void 0), props: true }, { name: "vueuikit-popper", path: "/vueuikit/popper", component: () => nw(() => import("./nodepkg-vueuikit-example.2c708228.chunk.js"), true ? ["static/nodepkg-vueuikit-example.2c708228.chunk.js","static/lib-nodepkg-vuekit.c8aa0df1.chunk.js","static/vendor-core-js.aeb891fb.chunk.js","static/lib-nodepkg-typedef.6f3dc261.chunk.js","static/lib-nodepkg-vueuikit.d9454114.chunk.js"] : void 0), props: true }, { name: "vueuikit", path: "/vueuikit", component: () => nw(() => import("./nodepkg-vueuikit-example.47dfcc4f.chunk.js"), true ? ["static/nodepkg-vueuikit-example.47dfcc4f.chunk.js","static/lib-nodepkg-vuekit.c8aa0df1.chunk.js","static/vendor-core-js.aeb891fb.chunk.js","static/lib-nodepkg-typedef.6f3dc261.chunk.js","static/lib-nodepkg-vueuikit.d9454114.chunk.js"] : void 0), props: true }, { name: "vueuikit-typography", path: "/vueuikit/typography", component: () => nw(() => import("./nodepkg-vueuikit-example.754b5783.chunk.js"), true ? ["static/nodepkg-vueuikit-example.754b5783.chunk.js","static/lib-nodepkg-vuekit.c8aa0df1.chunk.js","static/vendor-core-js.aeb891fb.chunk.js","static/lib-nodepkg-typedef.6f3dc261.chunk.js","static/lib-nodepkg-vueuikit.d9454114.chunk.js"] : void 0), props: true }, { name: "vueuikit-color-palette", path: "/vueuikit/color-palette", component: () => nw(() => import("./node_modules-toggle-selection.3d830f48.chunk.js"), true ? ["static/node_modules-toggle-selection.3d830f48.chunk.js","static/lib-nodepkg-vuekit.c8aa0df1.chunk.js","static/vendor-core-js.aeb891fb.chunk.js","static/lib-nodepkg-typedef.6f3dc261.chunk.js","static/lib-nodepkg-vueuikit.d9454114.chunk.js","static/webapp-vuekit-layout.267ceb16.chunk.js"] : void 0), props: true }, { name: "vueuikit-elevation", path: "/vueuikit/elevation", component: () => nw(() => import("./nodepkg-vueuikit-example.b9a25b8e.chunk.js"), true ? ["static/nodepkg-vueuikit-example.b9a25b8e.chunk.js","static/lib-nodepkg-vuekit.c8aa0df1.chunk.js","static/vendor-core-js.aeb891fb.chunk.js","static/lib-nodepkg-typedef.6f3dc261.chunk.js","static/lib-nodepkg-vueuikit.d9454114.chunk.js"] : void 0), props: true }, { name: "vuekit", path: "/vuekit", component: () => nw(() => import("./nodepkg-vuekit-example.d8b74229.chunk.js"), true ? ["static/nodepkg-vuekit-example.d8b74229.chunk.js","static/lib-nodepkg-vuekit.c8aa0df1.chunk.js","static/vendor-core-js.aeb891fb.chunk.js","static/lib-nodepkg-typedef.6f3dc261.chunk.js"] : void 0), props: true }, { name: "vuekit-rx-in-vue", path: "/vuekit/rx-in-vue", component: () => nw(() => import("./nodepkg-vuekit-example.633658aa.chunk.js"), true ? ["static/nodepkg-vuekit-example.633658aa.chunk.js","static/lib-nodepkg-vuekit.c8aa0df1.chunk.js","static/vendor-core-js.aeb891fb.chunk.js","static/lib-nodepkg-typedef.6f3dc261.chunk.js"] : void 0), props: true }, { name: "index", path: "/", component: /* @__PURE__ */ Object.assign(n$, { meta: { name: "Home", icon: () => nw(() => import("./webapp-vuekit-layout.267ceb16.chunk.js").then((e10) => e10.i), true ? ["static/webapp-vuekit-layout.267ceb16.chunk.js","static/lib-nodepkg-vueuikit.d9454114.chunk.js","static/vendor-core-js.aeb891fb.chunk.js","static/lib-nodepkg-vuekit.c8aa0df1.chunk.js","static/lib-nodepkg-typedef.6f3dc261.chunk.js"] : void 0) } }), props: true }];
console.log(nS);
let nC = new URL(null !== (ti = null === (tr = /* @__PURE__ */ document.querySelector("base")) || void 0 === tr ? void 0 : tr.href) && void 0 !== ti ? ti : "/"), nE = /* @__PURE__ */ $({ history: /* @__PURE__ */ S(nC.pathname), routes: nS });
C(n_).use(nE).mount("#root");
export {
  np as D,
  t8 as E,
  t3 as F,
  nt as I,
  no as L,
  ns as M,
  t7 as O,
  t9 as T,
  t6 as a,
  ne as b,
  nm as c,
  nu as d,
  ni as e
};
