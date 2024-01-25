var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { l as e, p as t, m as r, n as i, q as a, B as o, w as s, v as l, e as u, j as d, T as c, r as p, u as m, d as h, g as f, i as g, F as v, o as b, b as y, c as _, x, R as w, y as k, z as $, A as S, C } from "./lib-nodepkg-vuekit.H7ftM6cZ.chunk.js";
import { g as E, j as O, r as R, n as T, m as I, i as z, p as V, k as j, b as P, d as A, a as M, s as D, q as L, l as N, e as W, h as B, f as F, u as H, t as U, c as q, w as G, x as X } from "./lib-nodepkg-typedef.E0gBujd-.chunk.js";
import { b as Y, c as K, C as Z, e as J, f as Q, g as ee, h as et, i as en, j as er, r as ei, k as ea, B as eo, l as es, m as el, G as eu, n as ed, T as ec, d as ep, P as em } from "./lib-nodepkg-vueuikit.YGom7q2x.chunk.js";
import { D as eh, m as ef, a as eg, C as ev, b as eb } from "./webapp-vuekit-layout.BxJpQySn.chunk.js";
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
    if (t10[0])
      throw t10[0];
    return t10[1];
  }
  mask(e10) {
    let t10 = /* @__PURE__ */ eE(e10, this, { coerce: true, mask: true });
    if (t10[0])
      throw t10[0];
    return t10[1];
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
      return null !== (e10 = /* @__PURE__ */ E(this.schema, ["$meta"])) && void 0 !== e10 ? e10 : {};
    }
    return {};
  }
  getMeta(e10) {
    if (this.schema)
      return E(this.schema, ["$meta", e10]);
  }
  getSchema(e10) {
    if (e10 && this.schema)
      return E(this.schema, [e10]);
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
    return { ...this.unwrap.meta, ...E(this.schema, ["$meta"], {}) };
  }
  getMeta(e10) {
    if (this.schema) {
      var t10;
      return null !== (t10 = /* @__PURE__ */ E(this.schema, ["$meta", e10])) && void 0 !== t10 ? t10 : this.unwrap.getMeta(e10);
    }
  }
  getSchema(e10) {
    if (e10) {
      var t10;
      return null !== (t10 = /* @__PURE__ */ E(this.schema, [e10])) && void 0 !== t10 ? t10 : this.unwrap.getSchema(e10);
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
  let o2 = e10;
  for (let e11 of (O(a2 = o2) && "function" == typeof a2[Symbol.iterator] || (o2 = [o2]), o2)) {
    let a3 = /* @__PURE__ */ function(e12, t11, r3, i3) {
      if (true === e12)
        return;
      let a4 = {};
      a4 = false === e12 ? {} : "string" == typeof e12 ? { message: e12 } : e12;
      let { path: o3, branch: s2, node: l2 } = t11, { type: u2 } = r3, { refinement: d2, message: c2 = `Expected a value of type \`${u2}\`${d2 ? ` with refinement \`${d2}\`` : ""}, but received: \`${i3}\`` } = a4;
      return { value: i3, type: u2, refinement: d2, key: o3[o3.length - 1], path: o3, branch: s2, node: l2, ...a4, message: c2 };
    }(e11, t10, r2, i2);
    a3 && (yield a3);
  }
}
function eE(e10, t10) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i2 = /* @__PURE__ */ eO(e10, t10, r2), a2 = /* @__PURE__ */ function(e11) {
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
  let o2 = a2[1];
  return [void 0, o2];
}
function* eO(e10, t10) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, { path: i2 = [], branch: a2 = [e10], node: o2 = ek.create(t10, null), coerce: s2 = false, mask: l2 = false } = r2, u2 = { mask: l2, path: i2, branch: a2, node: o2 }, d2 = e10;
  s2 && (d2 = /* @__PURE__ */ t10.coercer(d2, u2));
  let c2 = 0;
  for (let e11 of eC(/* @__PURE__ */ t10.validator(d2, u2), u2, t10, d2))
    e11.explanation = r2.message, c2 = 2, yield [e11, void 0];
  for (let [e11, p2, m2] of t10.entries(d2, u2)) {
    let t11 = /* @__PURE__ */ eO(p2, m2, { path: void 0 === e11 ? i2 : [...i2, e11], branch: void 0 === e11 ? a2 : [...a2, p2], node: void 0 === e11 ? o2 : ek.create(m2, o2), coerce: s2, mask: l2, message: r2.message });
    for (let r3 of t11)
      r3[0] ? (c2 = null != r3[0].refinement ? 1 : 2, yield [r3[0], void 0]) : s2 && (p2 = r3[1], void 0 === e11 ? d2 = p2 : d2 instanceof Map ? d2.set(e11, p2) : d2 instanceof Set ? d2.add(p2) : O(d2) && (void 0 !== p2 || e11 in d2) && (d2[e11] = p2));
  }
  if (2 !== c2)
    for (let e11 of eC(/* @__PURE__ */ t10.refiner(d2, u2), u2, t10, d2))
      e11.explanation = r2.message, c2 = 1, yield [e11, void 0];
  0 === c2 && (yield [void 0, d2]);
}
class eR extends ew {
  static create(e10, t10) {
    return new eR({ $unwrap: t10, $ref: e10 });
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
    return "number" == typeof e10 && !Number.isNaN(e10);
  }
}
class eP extends ex {
  static create() {
    return new eP({ type: "integer" });
  }
  get type() {
    return this.schema.type;
  }
  validator(e10, t10) {
    return "number" == typeof e10 && !Number.isNaN(e10) && Number.isInteger(e10);
  }
}
class eA extends ex {
  static create() {
    return new eA({ type: "boolean" });
  }
  get type() {
    return this.schema.type;
  }
  validator(e10, t10) {
    return "boolean" == typeof e10;
  }
}
class eM extends ex {
  static create() {
    return new eM({ type: "string", format: "binary" });
  }
  get type() {
    return "binary";
  }
  validator(e10, t10) {
    return e10 instanceof File || e10 instanceof Blob;
  }
}
class eD extends ex {
  static create(e10) {
    return new eD({ enum: e10 });
  }
  static literal(e10) {
    return new eD({ enum: [e10] });
  }
  static nativeEnum(e10) {
    return new eD({ enum: /* @__PURE__ */ Object.values(e10) });
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
        (null == i2 ? void 0 : i2.isOptional) || t10.push(r2);
      }
    return new eL({ type: "object", properties: e10, required: t10, additionalProperties: /* @__PURE__ */ eI.create() });
  }
  get type() {
    return this.schema.type;
  }
  *entries(e10, t10) {
    if (O(e10)) {
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
    return O(e10);
  }
  coercer(e10, t10) {
    if (O(e10)) {
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
let eN = /* @__PURE__ */ Symbol("$_key");
class eW extends ex {
  static create(e10, t10) {
    return new eW({ propertyNames: e10, additionalProperties: t10, type: "object" });
  }
  get type() {
    return "record";
  }
  *entries(e10) {
    if (O(e10))
      for (let t10 in e10) {
        let r2 = e10[t10];
        yield [eN, t10, this.schema.propertyNames], yield [t10, r2, this.schema.additionalProperties];
      }
  }
  validator(e10) {
    return O(e10);
  }
}
class eB extends ex {
  static create(e10) {
    return new eB({ type: "array", items: e10 });
  }
  get type() {
    return this.schema.type;
  }
  *entries(e10) {
    if ("any" !== this.schema.items.type && Array.isArray(e10))
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
class eF extends ex {
  static create(e10) {
    return new eF({ type: "array", items: e10 });
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
class eH extends ex {
  static create() {
    for (var e10 = arguments.length, t10 = Array(e10), r2 = 0; r2 < e10; r2++)
      t10[r2] = arguments[r2];
    return new eH({ allOf: t10 });
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
class eU extends ex {
  constructor() {
    super(...arguments);
    __publicField(this, "_discriminatorPropName");
    __publicField(this, "_discriminatorMapping", {});
  }
  static create() {
    for (var e10 = arguments.length, t10 = Array(e10), r2 = 0; r2 < e10; r2++)
      t10[r2] = arguments[r2];
    return new eU({ oneOf: t10 });
  }
  static discriminatorMapping(e10, t10) {
    let r2 = /* @__PURE__ */ R(t10, (t11, r3) => {
      let i2 = { [e10]: /* @__PURE__ */ eD.literal(r3) };
      for (let [e11, r4, a2] of t11.entries({}, ey))
        i2[String(e11)] = a2;
      return eL.create(i2);
    });
    return new eU({ oneOf: /* @__PURE__ */ Object.values(r2), discriminator: { propertyName: e10 } });
  }
  discriminatorPropType(e10) {
    return T(this._discriminatorPropName) && (this._discriminatorPropName = /* @__PURE__ */ (() => {
      var t10, r2, i2, a2;
      let o2 = null !== (i2 = null === (t10 = this.schema.discriminator) || void 0 === t10 ? void 0 : t10.propertyName) && void 0 !== i2 ? i2 : "", s2 = /* @__PURE__ */ this.schema.oneOf.reduce((e11, t11) => [
        // biome-ignore lint/performance/noAccumulatingSpread: <explanation>
        ...e11,
        ...t11.unwrap.schema.properties[o2].unwrap.schema.enum
      ], []);
      return ew.of(/* @__PURE__ */ eD.create(s2), { $meta: null !== (a2 = null === (r2 = e10.node) || void 0 === r2 ? void 0 : r2.meta) && void 0 !== a2 ? a2 : {} });
    })()), this._discriminatorPropName;
  }
  discriminatorMapping(e10, t10) {
    var r2, i2;
    let a2 = null !== (i2 = null === (r2 = this.schema.discriminator) || void 0 === r2 ? void 0 : r2.propertyName) && void 0 !== i2 ? i2 : "";
    if (this._discriminatorMapping[e10])
      return this._discriminatorMapping[e10];
    let o2 = this.discriminatorPropType(t10).unwrap.schema.enum;
    if (o2.includes(e10)) {
      let t11 = /* @__PURE__ */ this.schema.oneOf.find((t12) => {
        let r3 = t12.unwrap.schema.properties[a2];
        if (r3.unwrap.schema.enum) {
          let [t13, i3] = r3.validate(e10);
          return !t13;
        }
        return false;
      });
      if (t11)
        return T(this._discriminatorMapping[`${e10}`]) && (this._discriminatorMapping[`${e10}`] = /* @__PURE__ */ I(t11.unwrap.schema.properties, [a2])), this._discriminatorMapping[`${e10}`];
    }
    return {};
  }
  *entries(e10, t10) {
    if (this.schema.discriminator) {
      let r2 = this.schema.discriminator.propertyName, i2 = null == e10 ? void 0 : e10[r2], a2 = /* @__PURE__ */ eL.create({ [r2]: /* @__PURE__ */ this.discriminatorPropType(t10), ...this.discriminatorMapping(i2, t10) });
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
      let r3 = this.schema.discriminator.propertyName, i2 = null == e10 ? void 0 : e10[r3], a2 = /* @__PURE__ */ eL.create({ [r3]: /* @__PURE__ */ this.discriminatorPropType(t10), ...this.discriminatorMapping(i2, t10) });
      return a2.validator(e10, t10);
    }
    let r2 = [];
    for (let i2 of this.schema.oneOf) {
      let [...a2] = eO(e10, i2, t10), [o2] = a2;
      if (o2 && !o2[0])
        return [];
      for (let [e11] of a2)
        e11 && r2.push(e11);
    }
    return [`Expected the value to satisfy a union of \`${this.schema.oneOf.map((e11) => e11.type).join(" | ")}\`, but received: ${e10}`, ...r2];
  }
}
let eq = eR.create, eG = eT.create, eX = eI.create, eY = ez.create, eK = eV.create, eZ = ej.create, eJ = eP.create, eQ = eA.create, e0 = eM.create, e1 = eD.create, e2 = eD.nativeEnum, e4 = eD.literal, e5 = eL.create, e3 = eW.create, e8 = eB.create, e6 = eF.create, e9 = eH.create, e7 = eU.create, te = eU.discriminatorMapping, tt = ex.define, tn = ew.refine;
var tr, ti, ta, to = /* @__PURE__ */ Object.freeze({ __proto__: null, any: eG, array: e8, binary: e0, boolean: eQ, custom: tt, discriminatorMapping: te, enums: e1, exclusiveMaximum: function(e10, t10) {
  return (r2) => ew.refine(r2, (r3) => r3 < e10 || (null != t10 ? t10 : `Expected value less than or equal ${e10}, but received "${r3}"`), { maximum: e10 });
}, exclusiveMinimum: function(e10, t10) {
  return (r2) => ew.refine(r2, (r3) => r3 > e10 || (null != t10 ? t10 : `Expected value great than ${e10}, but received "${r3}"`), { minimum: e10 });
}, integer: eJ, intersection: e9, literal: e4, maximum: function(e10, t10) {
  return (r2) => ew.refine(r2, (r3) => r3 <= e10 || (null != t10 ? t10 : `Expected value less than or equal ${e10}, but received "${r3}"`), { maximum: e10 });
}, minimum: function(e10, t10) {
  return (r2) => ew.refine(r2, (r3) => r3 >= e10 || (null != t10 ? t10 : `Expected value great than or equal ${e10}, but received "${r3}"`), { minimum: e10 });
}, multipleOf: function(e10, t10) {
  return (r2) => ew.refine(r2, (r3) => r3 % e10 == 0 || (null != t10 ? t10 : `Expected value multiple of ${e10}, but received "${r3}"`), { multipleOf: e10 });
}, nativeEnum: e2, never: eX, nil: eY, number: eZ, object: e5, pattern: function(e10, t10) {
  return (r2) => ew.refine(r2, (i2) => !!e10.test(i2) || (null != t10 ? t10 : `Expected a ${r2.type} matching \`/${e10.source}/\` but received "${i2}"`), { pattern: e10 });
}, record: e3, ref: eq, refine: tn, string: eK, tuple: e6, union: e7 });
function ts(e10, t10) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i2 = null != r2 ? r2 : t10, a2 = null != t10 ? t10 : e10, o2 = z(e10) ? {} : e10, [s2, l2] = V(/* @__PURE__ */ Object.keys(o2), (e11) => /^on[A-Z]/.test(e11)), u2 = { emits: /* @__PURE__ */ s2.map((e11) => j(/* @__PURE__ */ e11.slice(2))), props: /* @__PURE__ */ l2.filter((e11) => !/^[$]/.test(e11)).reduce((e11, t11) => {
    let r3 = o2[t11];
    return {
      // biome-ignore lint/performance/noAccumulatingSpread: <explanation>
      ...e11,
      [t11]: { default: () => {
        try {
          return r3.create(void 0);
        } catch (e12) {
        }
      }, validator: (e12) => r3.validate(e12) }
    };
  }, {}) }, { name: d2, inheritAttrs: c2, ...p2 } = i2;
  return { ...p2, get name() {
    var m2;
    return null !== (m2 = this.displayName) && void 0 !== m2 ? m2 : d2;
  }, set name(n) {
    i2.name = n;
  }, setup: (e11, t11) => a2(e11, t11), emits: u2.emits, props: u2.props, inheritAttrs: c2, propTypes: o2 };
}
let tl = (e10, t10) => new Proxy(e10, { get(e11, r2) {
  var i2;
  return null !== (i2 = t10[r2]) && void 0 !== i2 ? i2 : e11[r2];
} });
function tu(e10) {
  for (var t10 = arguments.length, a2 = Array(t10 > 1 ? t10 - 1 : 0), o2 = 1; o2 < t10; o2++)
    a2[o2 - 1] = arguments[o2];
  return r(...a2)(/* @__PURE__ */ i(e10));
}
function td(e10) {
  return (t10) => {
    let r2 = /* @__PURE__ */ t10.subscribe(e10);
    u(() => r2.unsubscribe());
  };
}
ts({ elem$: /* @__PURE__ */ to.custom(), $default: /* @__PURE__ */ to.custom() }, (t10, r2) => {
  let i2 = /* @__PURE__ */ e(null);
  return tu(t10.elem$, /* @__PURE__ */ a((e10) => {
    i2.value = e10;
  }), /* @__PURE__ */ td()), () => {
    var e10;
    return null === (e10 = i2.value) || void 0 === e10 ? void 0 : e10.call(i2);
  };
}, { name: "RxSlot" });
let tc = (e10, t10) => {
  let r2 = new o(e10[t10]);
  return s(() => e10[t10], (e11) => r2.next(e11)), r2;
}, tp = (e10, t10) => {
  if (M(e10) && M(t10)) {
    if (e10.length !== t10.length)
      return false;
    for (let r2 in e10)
      if (!Object.is(e10[r2], t10[r2]))
        return false;
    return true;
  }
  return Object.is(e10, t10);
}, tm = (e10) => {
  let t10;
  let r2 = null;
  return a({ next: (i2) => {
    tp(i2, r2) || (null == t10 || t10(), t10 = /* @__PURE__ */ e10(i2), r2 = i2);
  }, unsubscribe: () => {
    null == t10 || t10();
  } });
};
function th(e10, r2, i2) {
  var a2, o2, s2, u2;
  let d2;
  let c2 = P(e10) ? e10 : {}, p2 = z(e10) ? e10 : r2, m2 = null !== (a2 = null != i2 ? i2 : r2) && void 0 !== a2 ? a2 : {}, h2 = /* @__PURE__ */ Symbol(null !== (o2 = m2.name) && void 0 !== o2 ? o2 : "");
  if (A(c2)) {
    let e11;
    let r3 = () => (void 0 === e11 && (e11 = /* @__PURE__ */ p2({})), e11), i3 = /* @__PURE__ */ ts({ value: /* @__PURE__ */ to.custom().optional(), $default: /* @__PURE__ */ to.custom().optional() }, (e12, i4) => {
      var a3;
      let { slots: o3 } = i4;
      return t(h2, null !== (a3 = e12.value) && void 0 !== a3 ? a3 : r3()), () => {
        var e13;
        return null === (e13 = o3.default) || void 0 === e13 ? void 0 : e13.call(o3);
      };
    }, { ...m2, name: `Provide(${null !== (s2 = m2.name) && void 0 !== s2 ? s2 : ""})` });
    return tl(i3, { use: () => l(h2, r3, true) });
  }
  let f2 = /* @__PURE__ */ to.object(c2), g2 = () => f2.create({}), v2 = () => (void 0 === d2 && (d2 = /* @__PURE__ */ p2(/* @__PURE__ */ g2())), d2), b2 = /* @__PURE__ */ ts({ ...c2, $default: /* @__PURE__ */ to.custom().optional() }, (e11, r3) => {
    let { slots: i3 } = r3;
    return t(h2, /* @__PURE__ */ p2(e11)), () => {
      var e12;
      return null === (e12 = i3.default) || void 0 === e12 ? void 0 : e12.call(i3);
    };
  }, { ...m2, name: `Provide(${null !== (u2 = m2.name) && void 0 !== u2 ? u2 : ""})` });
  return tl(b2, { use: () => l(h2, v2, true) });
}
function tf() {
  return new Proxy({}, { get: (e10, t10) => t10 });
}
let tg = /* @__PURE__ */ tf(), tv = { paddingX: [tg.paddingLeft, tg.paddingRight], paddingY: [tg.paddingTop, tg.paddingBottom], marginX: [tg.marginInlineStart, tg.marginInlineEnd], marginY: [tg.marginTop, tg.marginBottom], borderX: [tg.borderLeft, tg.borderRight], borderY: [tg.borderTop, tg.borderBottom], color: [tg.color, tg.fill], borderTopRadius: [tg.borderTopLeftRadius, tg.borderTopRightRadius], borderBottomRadius: [tg.borderBottomLeftRadius, tg.borderBottomRightRadius], borderRightRadius: [tg.borderTopRightRadius, tg.borderBottomRightRadius], borderLeftRadius: [tg.borderTopLeftRadius, tg.borderBottomLeftRadius], backgroundGradient: [tg.backgroundImage], boxSize: [tg.width, tg.height] }, tb = /* @__PURE__ */ tf(), ty = { font: tb.fontFamily, shadow: tb.boxShadow, rounded: tb.borderRadius, roundedTop: tb.borderTopRadius, roundedBottom: tb.borderBottomRadius, roundedLeft: tb.borderLeftRadius, roundedRight: tb.borderRightRadius, bg: tb.background, bgImage: tb.backgroundImage, bgSize: tb.backgroundSize, bgPosition: tb.backgroundPosition, bgRepeat: tb.backgroundRepeat, bgAttachment: tb.backgroundAttachment, bgColor: tb.backgroundColor, bgGradient: tb.backgroundGradient, bgClip: tb.backgroundClip, pos: tb.position, p: tb.padding, pt: tb.paddingTop, pr: tb.paddingRight, pl: tb.paddingLeft, pb: tb.paddingBottom, ps: tb.paddingInlineStart, pe: tb.paddingInlineEnd, px: tb.paddingX, py: tb.paddingY, m: tb.margin, mt: tb.marginTop, mr: tb.marginRight, ml: tb.marginLeft, mb: tb.marginBottom, ms: tb.marginInlineStart, me: tb.marginInlineEnd, mx: tb.marginX, my: tb.marginY, w: tb.width, minW: tb.minWidth, maxW: tb.maxWidth, h: tb.height, minH: tb.minHeight, maxH: tb.maxHeight }, t_ = /* @__PURE__ */ tf(), tx = function() {
  for (var e10 = arguments.length, t10 = Array(e10), r2 = 0; r2 < e10; r2++)
    t10[r2] = arguments[r2];
  let i2 = [...t10];
  for (let e11 of t10)
    ty[e11] && i2.push(ty[e11]);
  return i2;
}, tw = { _rtl: "[dir=rtl] &, &[dir=rtl]", _ltr: "[dir=ltr] &, &[dir=ltr]", _dark: "&[data-theme=dark]", _light: "&[data-theme=light]" };
const _tk = class _tk {
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
      _tk.walkStateValues(i2, (r3, i3, a3) => {
        var o3;
        let s2 = `--${this.opt.varPrefix}-state-${i3.join("-")}`, l2 = null !== (o3 = /* @__PURE__ */ N(i3)) && void 0 !== o3 ? o3 : "", u2 = {};
        this.process(u2, l2, r3, false), e11[s2] = u2[l2], D(t11, [...a3, l2], `var(${s2})`);
      }), r2.push(e11), r2.push(.../* @__PURE__ */ this.processAll(t11));
    }
    if (!A(o2)) {
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
    let u2 = t10;
    if (P(r2)) {
      e10[u2 = null !== (a2 = /* @__PURE__ */ _tk.convertSelector(u2)) && void 0 !== a2 ? a2 : u2] = null !== (o2 = e10[u2]) && void 0 !== o2 ? o2 : {}, this.processTo(e10[u2], r2);
      return;
    }
    if (l2 && tv[u2 = null !== (s2 = ty[u2]) && void 0 !== s2 ? s2 : u2]) {
      for (let t11 of tv[u2])
        e10[t11] = /* @__PURE__ */ this.opt.processValue(t11, r2);
      return;
    }
    e10[u2] = /* @__PURE__ */ this.opt.processValue(u2, r2);
  }
};
__publicField(_tk, "supportedPseudoClasses", { active: "active", after: "after", anyLink: "any-link", before: "before", blank: "blank", checked: "checked", current: "current", default: "default", defined: "defined", disabled: "disabled", empty: "empty", enabled: "enabled", first: "first", firstChild: "first-child", firstLetter: "first-letter", firstLine: "first-line", firstOfType: "first-of-type", focus: "focus", focusVisible: "focus-visible", focusWithin: "focus-within", fullscreen: "fullscreen", future: "future", hover: "hover", inRange: "in-range", indeterminate: "indeterminate", invalid: "invalid", lastChild: "last-child", lastOfType: "last-of-type", left: "left", link: "link", localLink: "local-link", nthCol: "nth-col", nthLastCol: "nth-last-col", onlyChild: "only-child", onlyOfType: "only-of-type", optional: "optional", outOfRange: "out-of-range", past: "past", paused: "paused", pictureInPicture: "picture-in-picture", placeholderShown: "placeholder-shown", playing: "playing", readOnly: "read-only", readWrite: "read-write", required: "required", right: "right", root: "root", scope: "scope", target: "target", targetWithin: "target-within", userInvalid: "user-invalid", userValid: "user-valid", valid: "valid", visited: "visited" });
__publicField(_tk, "convertSelector", (e10) => {
  if (tw[e10])
    return tw[e10];
  let t10 = e10;
  if (t10.startsWith("$") || t10.endsWith("$") || t10.startsWith("_")) {
    let e11 = "", r2 = "";
    if (t10.startsWith("_") ? (e11 = "&", t10 = /* @__PURE__ */ t10.slice(1)) : t10.startsWith("$") ? (e11 = "& ", t10 = /* @__PURE__ */ t10.slice(1)) : (r2 = " &", t10 = /* @__PURE__ */ t10.slice(0, t10.length - 1)), t10.startsWith("data") || t10.startsWith("aria")) {
      let [i2, a2] = t10.split("__");
      return a2 ? `${e11}[${j(i2)}='${j(a2)}']${r2}` : `${e11}[${j(i2)}]${r2}`;
    }
    if ("&" === e11) {
      if (t10.startsWith("$"))
        return `${e11}::${t10.slice(1)}`;
      if (_tk.supportedPseudoClasses[t10]) {
        let r4 = _tk.supportedPseudoClasses[t10];
        return `${e11}:${r4}, ${e11}[data-${r4}]:not([data-${r4}='false']), ${e11}.${r4}`;
      }
      let [r3, i2] = t10.split("__"), a2 = /* @__PURE__ */ j(r3);
      return i2 ? `${e11}[data-${a2}='${j(i2)}']` : `${e11}[data-${a2}]:not([data-${a2}='false'])`;
    }
  }
});
__publicField(_tk, "walkStateValues", function(e10, t10) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { default: {}, selectorPath: [], path: [] }, { $: i2, ...a2 } = e10;
  for (let e11 in a2) {
    var o2;
    let s2 = a2[e11], l2 = null !== (o2 = a2.default) && void 0 !== o2 ? o2 : r2.default, u2 = null != i2 ? i2 : E(l2, [.../* @__PURE__ */ r2.path.slice(1), "$"]), d2 = u2 ? [...r2.selectorPath, u2] : r2.selectorPath, c2 = [...r2.path, e11];
    if (P(s2)) {
      _tk.walkStateValues(s2, t10, { path: c2, selectorPath: d2, default: l2 });
      continue;
    }
    t10(s2, c2, d2);
  }
});
let tk = _tk;
var t$ = ((tr = t$ || {}).var = "var", tr.mixin = "mixin", tr);
class tS {
  static create(e10, t10) {
    let { value: r2, on: i2, transform: a2 } = t10;
    return { type: e10, value: r2, on: i2, transform: a2, __Tokens: void 0, __ValueType: void 0, __CSSTokens: void 0 };
  }
  static color(e10) {
    return tS.create("var", { value: e10, on: /* @__PURE__ */ tx(t_.color, t_.bgColor, t_.outlineColor, t_.borderColor, t_.accentColor, t_.fill, t_.stroke), transform: (e11, t10) => W(e11) ? { default: `var(${t10(e11)})`, rgb: `var(${t10(`${e11}/rgb`)})` } : { default: `rgb(${e11[0]}, ${e11[1]}, ${e11[2]})`, rgb: `${e11[0]} ${e11[1]} ${e11[2]}` }, fallback: "" });
  }
  static space(e10) {
    return tS.create("var", { value: e10, on: /* @__PURE__ */ tx(t_.gap, t_.rowGap, t_.columnGap, t_.top, t_.right, t_.bottom, t_.left, t_.m, t_.ms, t_.me, t_.mt, t_.mr, t_.mb, t_.ml, t_.mx, t_.my, t_.p, t_.ps, t_.pe, t_.pt, t_.pr, t_.pb, t_.pl, t_.px, t_.py) });
  }
  static boxSize(e10) {
    return tS.create("var", { value: e10, on: /* @__PURE__ */ tx(t_.w, t_.minW, t_.maxW, t_.h, t_.minH, t_.maxH, t_.boxSize), fallback: 0 });
  }
  static fontSize(e10) {
    return tS.create("var", { value: e10, on: /* @__PURE__ */ tx(t_.fontSize), fallback: 0 });
  }
  static lineHeight(e10) {
    return tS.create("var", { value: e10, on: /* @__PURE__ */ tx(t_.lineHeight), fallback: 0 });
  }
  static rounded(e10) {
    return tS.create("var", { value: e10, fallback: 0, on: /* @__PURE__ */ tx(t_.rounded, t_.roundedTop, t_.roundedBottom, t_.roundedLeft, t_.roundedRight, tg.borderTopLeftRadius, tg.borderTopRightRadius, tg.borderBottomLeftRadius, tg.borderBottomRightRadius, tg.borderTopRightRadius, tg.borderBottomRightRadius, tg.borderTopLeftRadius, tg.borderBottomLeftRadius) });
  }
  static transitionTimingFunction(e10) {
    return tS.create("var", { value: e10, on: /* @__PURE__ */ tx(t_.transitionTimingFunction) });
  }
  static transitionDuration(e10) {
    return tS.create("var", { value: e10, on: /* @__PURE__ */ tx(t_.transitionDuration), transform: (e11) => `${e11}ms` });
  }
  static font(e10) {
    return tS.create("var", { value: e10, on: /* @__PURE__ */ tx(t_.font) });
  }
  static fontWeight(e10) {
    return tS.create("var", { value: e10, on: /* @__PURE__ */ tx(t_.fontWeight) });
  }
  static letterSpacing(e10) {
    return tS.create("var", { value: e10, on: /* @__PURE__ */ tx(t_.letterSpacing) });
  }
  static shadow(e10) {
    return tS.create("var", { value: e10, on: /* @__PURE__ */ tx(t_.shadow) });
  }
  static customMixin(e10, t10) {
    return tS.create("mixin", { value: t10, on: [e10] });
  }
  static mixin(e10) {
    return { ...e10, __mixin: true };
  }
}
let tC = (e10, t10, r2) => {
  let i2 = e10;
  for (let e11 = 0; e11 < t10.length; e11++) {
    var a2;
    let o2 = t10[e11];
    if (e11 === t10.length - 1) {
      i2[o2] = r2;
      continue;
    }
    i2[o2] = null !== (a2 = i2[o2]) && void 0 !== a2 ? a2 : {}, i2 = i2[o2];
  }
};
const _tE = class _tE {
  constructor(e10, { cssVar: t10, transformFallback: r2 }) {
    __publicField(this, "__Tokens");
    __publicField(this, "_values", {});
    __publicField(this, "_cssVarRefs", {});
    _tE.walkValues(e10.value, (i2, a2) => {
      let o2 = /* @__PURE__ */ a2.join("."), s2 = (i3, a3) => {
        let o3 = e10.transform ? e10.transform(i3, t10) : r2(i3);
        if (O(o3))
          for (let e11 in o3)
            a3(o3[e11], "default" === e11 ? "" : e11);
        else
          a3(o3, "");
      };
      if (D(this._cssVarRefs, [o2], /* @__PURE__ */ t10(o2)), P(i2))
        for (let e11 in i2)
          s2(i2[e11], (t11, r3) => {
            D(this._values, [`${o2}${r3 ? `/${r3}` : ""}`, e11], t11);
          });
      else
        s2(i2, (e11, t11) => {
          D(this._values, [`${o2}${t11 ? `/${t11}` : ""}`], e11);
        });
    });
  }
  get tokens() {
    return F(this._values);
  }
  get(e10, t10, r2) {
    let i2 = this._values[e10];
    if (O(i2)) {
      var a2;
      return r2 ? i2[t10] : null !== (a2 = i2[t10]) && void 0 !== a2 ? a2 : i2[_tE.defaultMode];
    }
    return r2 ? t10 === _tE.defaultMode ? i2 : void 0 : i2;
  }
  use(e10) {
    let t10 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (this._cssVarRefs[e10])
      return t10 ? `${this._cssVarRefs[e10]}` : `var(${this._cssVarRefs[e10]})`;
  }
};
__publicField(_tE, "defaultMode", "_default");
__publicField(_tE, "walkValues", function(e10, t10) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let i2 in e10) {
    let a2 = e10[i2];
    if (P(a2)) {
      if (B(a2, "_default")) {
        t10(a2, [...r2, i2]);
        continue;
      }
      _tE.walkValues(a2, t10, [...r2, i2]);
      continue;
    }
    t10(a2, [...r2, i2]);
  }
});
let tE = _tE;
const _tO = class _tO {
  constructor(e10) {
    __publicField(this, "_values", {});
    _tO.walkValue(e10.value, (e11, t10) => {
      let r2 = /* @__PURE__ */ t10.join(".");
      D(this._values, [r2], /* @__PURE__ */ I(e11, "__mixin"));
    });
  }
  get tokens() {
    return F(this._values);
  }
  get(e10) {
    return this._values[e10];
  }
};
__publicField(_tO, "walkValue", function(e10, t10) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let i2 in e10) {
    let a2 = e10[i2];
    if (P(a2)) {
      if (B(a2, "__mixin")) {
        t10(a2, [...r2, i2]);
        continue;
      }
      _tO.walkValue(a2, t10, [...r2, i2]);
      continue;
    }
    t10(a2, [...r2, i2]);
  }
});
let tO = _tO;
let tR = (e10) => (t10) => `rgba(var(${t10}--rgb) / ${e10})`, tT = (e10) => z(e10) && B(e10, "token");
function tI(e10, t10) {
  return Object.assign((e11) => t10(e11), { toString: () => e10, token: e10 });
}
let tz = (e10) => e10.reduce((e11, t10) => Object.assign(e11, { [t10]: true }), {});
const _tV = class _tV {
  constructor(e10, t10 = {}) {
    __publicField(this, "mode");
    __publicField(this, "varPrefix");
    __publicField(this, "cssVars", {});
    __publicField(this, "tokens", {});
    __publicField(this, "propValues", {});
    __publicField(this, "mixins", {});
    __publicField(this, "dp", (e10) => 0 === e10 ? 0 : `calc(${e10} * var(${this.cssVar("space", "dp")}))`);
    __publicField(this, "transformFallback", (e10, t10) => _tV.propsCanBaseDp[e10] && L(t10) ? _tV.propsCanPercent[e10] && 1 > Math.abs(t10) ? `${100 * t10}%` : this.dp(t10) : t10);
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
      if (tT(t10)) {
        let r3 = null === (i2 = this.propValues[e10]) || void 0 === i2 ? void 0 : i2.use(t10.token, true);
        return r3 ? t10(r3) : void 0;
      }
      return null !== (a2 = null === (r2 = this.propValues[e10]) || void 0 === r2 ? void 0 : r2.use(t10)) && void 0 !== a2 ? a2 : this.transformFallback(e10, t10);
    });
    __publicField(this, "unstable_sx", (e10) => new tk({ mixins: this.mixins, varPrefix: this.varPrefix, processValue: this.processValue }).processAll(e10));
    var r2, i2;
    for (let a2 in this.theme = e10, this.varPrefix = null !== (r2 = t10.varPrefix) && void 0 !== r2 ? r2 : "vk", this.mode = null !== (i2 = t10.mode) && void 0 !== i2 ? i2 : "light", D(this.cssVars, [/* @__PURE__ */ this.cssVar("space", "dp")], "0.1rem"), e10) {
      let t11 = e10[a2];
      if (t11) {
        if (t11.type === t$.var) {
          let e11 = new tE(t11, { cssVar: (e12) => this.cssVar(a2, e12), transformFallback: (e12) => this.transformFallback(t11.on[0], e12) });
          for (let r3 of (this.tokens[a2] = e11, t11.on))
            this.propValues[r3] = e11;
          for (let t12 of e11.tokens)
            for (let r3 of ["light", "dark"]) {
              let i3 = r3 === this.mode ? "_default" : `_${r3}`, o2 = /* @__PURE__ */ e11.get(t12, i3, true);
              T(o2) || ("_default" === i3 ? D(this.cssVars, [/* @__PURE__ */ this.cssVar(a2, t12)], o2) : D(this.cssVars, [i3, /* @__PURE__ */ this.cssVar(a2, t12)], o2));
            }
          continue;
        }
        if (t11.type === t$.mixin) {
          let e11 = new tO(t11);
          for (let r3 of t11.on)
            this.mixins[r3] = e11;
        }
      }
    }
  }
  static create(e10, t10) {
    return new _tV(e10, t10);
  }
  cssVar(e10, t10) {
    return `--${this.varPrefix}-${j(e10)}__${t10.replaceAll("/", "--").replaceAll(".", "__")}`;
  }
  get rootCSSVars() {
    return this.cssVars;
  }
  unstable_css(e10, t10) {
    var r2;
    let i2 = null != t10 ? t10 : {};
    return i2.__emotion_styles = null !== (r2 = i2.__emotion_styles) && void 0 !== r2 ? r2 : Y(/* @__PURE__ */ this.unstable_sx(t10), null == e10 ? void 0 : e10.registered, {}), i2.__emotion_styles;
  }
  toFigmaTokens() {
    let e10 = { space: { dp: { type: "sizing", value: 1 } } }, t10 = {}, r2 = {}, i2 = (e11, t11) => O(t11) ? { type: e11, value: /* @__PURE__ */ R(t11, (t12) => i2(e11, t12).value) } : W(t11) ? { type: e11, value: /* @__PURE__ */ t11.replace(/var\(([^)]+)\)/g, (e12) => {
      var t12;
      let r3 = /* @__PURE__ */ e12.slice(4, e12.length - 1), i3 = /* @__PURE__ */ r3.slice(`--${this.varPrefix}-`.length).split("--");
      return `{${null === (t12 = i3[0]) || void 0 === t12 ? void 0 : t12.split("__").map((e13, t13) => 0 === t13 ? U(e13) : e13).join(".")}}`;
    }).replace(/calc\(.+\)$/g, (e12) => e12.slice(5, e12.length - 1)) } : { type: e11, value: t11 };
    for (let a2 in this.tokens) {
      let o2 = this.tokens[a2], s2 = (s3) => {
        for (let l2 of o2.tokens)
          if (!l2.includes("/")) {
            if (l2.startsWith("sys.")) {
              let e11 = /* @__PURE__ */ o2.get(l2, "_default"), u2 = /* @__PURE__ */ o2.get(l2, "_dark");
              tC(t10, [a2, .../* @__PURE__ */ l2.split(".")], /* @__PURE__ */ i2(s3, e11)), e11 !== u2 && tC(r2, [a2, .../* @__PURE__ */ l2.split(".")], /* @__PURE__ */ i2(s3, u2));
            } else
              tC(e10, [a2, .../* @__PURE__ */ l2.split(".")], /* @__PURE__ */ i2(s3, /* @__PURE__ */ o2.get(l2, "_default")));
          }
      };
      switch (a2) {
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
      let r3 = this.mixins[e11];
      if (!r3)
        continue;
      let a2 = (a3) => {
        for (let o2 of r3.tokens) {
          let s2 = /* @__PURE__ */ r3.get(o2);
          if (!s2)
            continue;
          let l2 = this.unstable_sx(s2)[0];
          tC(t10, [e11, .../* @__PURE__ */ o2.split(".")], /* @__PURE__ */ i2(a3, l2));
        }
      };
      "textStyle" === e11 && a2("typography");
    }
    return { seed: e10, base: t10, dark: r2 };
  }
};
__publicField(_tV, "propsCanPercent", tz([...tS.boxSize({}).on]));
__publicField(_tV, "propsCanBaseDp", tz([...tS.boxSize({}).on, ...tS.space({}).on, ...tS.fontSize({}).on, ...tS.letterSpacing({}).on, ...tS.lineHeight({}).on, ...tS.rounded({}).on]));
let tV = _tV;
let tj = { shadow: /* @__PURE__ */ tS.shadow({ 0: { _default: "0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0)", _dark: "0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0)" }, 1: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)", _dark: "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 2: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)", _dark: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 3: { _default: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)" }, 4: { _default: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)" }, 5: { _default: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)", _dark: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)" } }), elevation: /* @__PURE__ */ tS.customMixin("elevation", { 0: /* @__PURE__ */ tS.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "0", _hover: { shadow: "1" } }), 1: /* @__PURE__ */ tS.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "1", _hover: { shadow: "2" } }), 2: /* @__PURE__ */ tS.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "2", _hover: { shadow: "3" } }), 3: /* @__PURE__ */ tS.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "3", _hover: { shadow: "4" } }), 4: /* @__PURE__ */ tS.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "4", _hover: { shadow: "5" } }) }) }, tP = (e10, t10, r2, i2) => Object.assign(/* @__PURE__ */ K(e10, t10, r2, i2), { toString: () => `cubic-bezier(${e10}, ${t10}, ${r2}, ${i2})` }), tA = { duration: { sm1: 50, sm2: 100, sm3: 150, sm4: 200, md1: 250, md2: 300, md3: 350, md4: 400, lg1: 450, lg2: 500, lg3: 550, lg4: 600, xl1: 700, xl2: 800, xl3: 900, xl4: 1e3 }, easing: { linear: /* @__PURE__ */ tP(0, 0, 1, 1), standard: /* @__PURE__ */ Object.assign(/* @__PURE__ */ tP(0.2, 0, 0, 1), { accelerate: /* @__PURE__ */ tP(0.3, 0, 1, 1), decelerate: /* @__PURE__ */ tP(0, 0, 0, 1) }), emphasized: /* @__PURE__ */ Object.assign(/* @__PURE__ */ tP(0.2, 0, 0, 1), { accelerate: /* @__PURE__ */ tP(0.3, 0, 0.8, 0.15), decelerate: /* @__PURE__ */ tP(0.05, 0.7, 0.1, 1) }), legacy: /* @__PURE__ */ Object.assign(/* @__PURE__ */ tP(0.4, 0, 0.2, 1), { decelerate: /* @__PURE__ */ tP(0, 0, 0.2, 1), accelerate: /* @__PURE__ */ tP(0.4, 0, 1, 1) }) } }, tM = (e10, t10) => {
  let r2 = null != t10 ? t10 : { ...e10, from: { ...e10.to }, to: { ...e10.from } };
  return ts({ onComplete: /* @__PURE__ */ to.custom(), $default: /* @__PURE__ */ to.custom() }, (t11, i2) => {
    let a2, { slots: o2, emit: s2 } = i2, l2 = (t12, r3) => {
      a2 = /* @__PURE__ */ et({ ...e10, autoplay: true, onComplete: () => {
        r3(), s2("complete", "enter");
      }, onUpdate: (e11) => {
        Object.assign(t12.style, e11);
      } });
    }, u2 = (e11, t12) => {
      a2 = /* @__PURE__ */ et({ ...r2, autoplay: true, onComplete: () => {
        t12(), s2("complete", "leave");
      }, onUpdate: (t13) => {
        Object.assign(e11.style, t13);
      } });
    }, p2 = () => {
      null == a2 || a2.stop();
    };
    return () => {
      var e11;
      return /* @__PURE__ */ d(c, { css: false, onEnter: l2, onEnterCancelled: p2, onLeave: u2, onLeaveCancelled: p2, children: null === (e11 = o2.default) || void 0 === e11 ? void 0 : e11.call(o2) });
    };
  }, { name: "Transition" });
}, tD = { transitionDuration: /* @__PURE__ */ tS.transitionDuration(tA.duration), transitionTimingFunction: /* @__PURE__ */ tS.transitionTimingFunction({ linear: /* @__PURE__ */ tA.easing.linear.toString(), standard: /* @__PURE__ */ tA.easing.standard.toString(), "standard-accelerate": /* @__PURE__ */ tA.easing.standard.accelerate.toString(), "standard-decelerate": /* @__PURE__ */ tA.easing.standard.decelerate.toString(), emphasized: /* @__PURE__ */ tA.easing.emphasized.toString(), "emphasized-decelerate": /* @__PURE__ */ tA.easing.emphasized.decelerate.toString(), "emphasized-accelerate": /* @__PURE__ */ tA.easing.emphasized.accelerate.toString(), legacy: /* @__PURE__ */ tA.easing.legacy.toString(), "legacy-decelerate": /* @__PURE__ */ tA.easing.legacy.decelerate.toString(), "legacy-accelerate": /* @__PURE__ */ tA.easing.legacy.accelerate.toString() }) }, tL = { 0: true, 10: true, 20: true, 30: true, 40: true, 50: true, 60: true, 70: true, 80: true, 90: true, 95: true, 100: true }, tN = (e10) => {
  let t10 = /* @__PURE__ */ ei(e10);
  return [t10.r, t10.g, t10.b];
}, tW = (e10) => ({ primary: true, secondary: true, tertiary: true, error: true, warning: true, success: true })[e10];
const _tB = class _tB {
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
    for (let o2 in e10) {
      let [s2, l2, u2] = E(e10, [o2], []);
      if (this.seeds[s2]) {
        var i2, a2;
        r2[o2] = tL[l2] ? `${s2}.${l2}` : null === (i2 = this.seeds[s2]) || void 0 === i2 ? void 0 : i2.tone(l2), t10[o2] = tL[u2] ? `${s2}.${u2}` : null === (a2 = this.seeds[s2]) || void 0 === a2 ? void 0 : a2.tone(u2);
      }
    }
    return [t10, r2];
  }
  toDesignTokens() {
    let e10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [t10, r2] = this.getThemeRoleColors(/* @__PURE__ */ this.normalizeRoleRules(e10)), i2 = {}, a2 = {};
    for (let e11 in t10)
      if (i2[`${e11}`] = { _default: L(t10[e11]) ? tN(t10[e11]) : t10[e11], _dark: L(r2[e11]) ? tN(r2[e11]) : r2[e11] }, tW(e11) && (a2[`${e11}`] = /* @__PURE__ */ tS.mixin({ bgColor: `sys.${e11}`, color: `sys.on-${e11}` }), a2[`${e11}-container`] = /* @__PURE__ */ tS.mixin({ bgColor: `sys.${e11}-container`, color: `sys.on-${e11}-container` })), e11.startsWith("surface")) {
        if (e11.includes("container")) {
          a2[`${e11}`] = /* @__PURE__ */ tS.mixin({ bgColor: `sys.${e11}`, color: "sys.on-surface" });
          continue;
        }
        a2[`${e11}`] = /* @__PURE__ */ tS.mixin({ bgColor: `sys.${e11}`, color: "sys.on-surface" }), a2[`on-${e11}`] = /* @__PURE__ */ tS.mixin({ bgColor: `sys.on-${e11}`, color: "sys.inverse-on-surface" });
      }
    let o2 = (e11) => Object.keys(tL).reduce((t11, r3) => Object.assign(t11, { [r3]: /* @__PURE__ */ tN(/* @__PURE__ */ e11.tone(/* @__PURE__ */ parseInt(r3))) }), {}), s2 = /* @__PURE__ */ tS.color({ ...R(this.seeds, (e11) => o2(e11)), white: [255, 255, 255], black: [0, 0, 0], sys: i2 }), l2 = /* @__PURE__ */ tS.customMixin("containerStyle", { sys: a2 });
    return { color: s2, containerStyle: l2 };
  }
};
__publicField(_tB, "toHEX", (e10) => `#${tN(e10).map((e11) => H(/* @__PURE__ */ e11.toString(16), 2, "0")).join("")}`);
__publicField(_tB, "fromColors", (e10) => {
  let { primary: t10, secondary: r2, tertiary: i2, neutral: a2, neutralVariant: o2, error: s2, ...l2 } = e10, u2 = /* @__PURE__ */ Z.contentFromColors({ primary: /* @__PURE__ */ J(t10), secondary: r2 ? J(r2) : void 0, tertiary: i2 ? J(i2) : void 0, error: s2 ? J(s2) : void 0 });
  return a2 && (u2.n1 = /* @__PURE__ */ Q.fromHueAndChroma(/* @__PURE__ */ J(a2), 4)), o2 && (u2.n2 = /* @__PURE__ */ Q.fromHueAndChroma(/* @__PURE__ */ J(o2), 8)), new _tB({ primary: u2.a1, secondary: u2.a2, tertiary: u2.a3, neutral: u2.n1, neutralVariant: u2.n2, error: u2.error, ...R(l2, (e11) => Q.fromInt(/* @__PURE__ */ J(e11))) });
});
let tB = _tB;
let tF = /* @__PURE__ */ tS.rounded({ xs: 4, sm: 8, md: 12, lg: 16, xl: 28 }), tH = { font: /* @__PURE__ */ tS.font({ brand: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', plain: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', code: "'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace" }), fontWeight: /* @__PURE__ */ tS.fontWeight({ regular: 400, medium: 500, bold: 700 }), textStyle: /* @__PURE__ */ tS.customMixin("textStyle", { sys: { "display-large": /* @__PURE__ */ tS.mixin({ lineHeight: 64, fontSize: 57, letterSpacing: -0.25, fontWeight: "regular", font: "brand" }), "display-medium": /* @__PURE__ */ tS.mixin({ lineHeight: 52, fontSize: 45, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "display-small": /* @__PURE__ */ tS.mixin({ lineHeight: 44, fontSize: 36, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-large": /* @__PURE__ */ tS.mixin({ lineHeight: 40, fontSize: 32, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-medium": /* @__PURE__ */ tS.mixin({ lineHeight: 36, fontSize: 28, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-small": /* @__PURE__ */ tS.mixin({ lineHeight: 32, fontSize: 24, letterSpacing: 0, fontWeight: "regular", font: "plain" }), "title-large": /* @__PURE__ */ tS.mixin({ lineHeight: 28, fontSize: 22, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "title-medium": /* @__PURE__ */ tS.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.15, fontWeight: "medium", font: "plain" }), "title-small": /* @__PURE__ */ tS.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-large": /* @__PURE__ */ tS.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-medium": /* @__PURE__ */ tS.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "label-small": /* @__PURE__ */ tS.mixin({ lineHeight: 16, fontSize: 11, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "body-large": /* @__PURE__ */ tS.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.5, fontWeight: "regular", font: "plain" }), "body-medium": /* @__PURE__ */ tS.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.25, fontWeight: "regular", font: "plain" }), "body-small": /* @__PURE__ */ tS.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.4, fontWeight: "regular", font: "plain" }) } }) }, tU = /* @__PURE__ */ tB.fromColors({ primary: "#1270f5", secondary: "#8a90a5", tertiary: "#b58391", neutral: "#5e5e5e", error: "#d93f23", warning: "#e69c00", success: "#5ac220" }), tq = { ...tH, ...tD, ...tj, rounded: tF, ...tU.toDesignTokens({ primary: ["primary", 80, 50] }) }, tG = /* @__PURE__ */ tV.create(tq, { varPrefix: "vk" }), tX = /* @__PURE__ */ th(() => tG, { name: "Theme" }), tY = /* @__PURE__ */ th(() => ee({ key: "css" }), { name: "Cache" }), tK = (e10) => (t10) => {
  if (t10.serialized) {
    if (t10.withoutScoping)
      e10.insert("", t10.serialized, e10.sheet, true);
    else {
      var r2;
      ea(e10, t10.serialized, null === (r2 = t10.isStringTag) || void 0 === r2 || r2);
    }
  }
}, tZ = /* @__PURE__ */ ts({ sx: /* @__PURE__ */ to.custom(), component: /* @__PURE__ */ to.custom().optional().default("div") }, (e10, t10) => {
  var r2;
  let { slots: i2 } = t10, a2 = /* @__PURE__ */ tX.use(), o2 = /* @__PURE__ */ tY.use(), s2 = /* @__PURE__ */ a2.unstable_css(o2, null !== (r2 = e10.sx) && void 0 !== r2 ? r2 : {}), l2 = () => "0" !== s2.name ? `${o2.key}-${s2.name}` : "", u2 = /* @__PURE__ */ tK(o2);
  return b(() => {
    u2({ serialized: s2, isStringTag: true });
  }), () => {
    var t11;
    let r3 = null !== (t11 = e10.component) && void 0 !== t11 ? t11 : "div";
    return /* @__PURE__ */ d(r3, { class: /* @__PURE__ */ l2(), children: i2 });
  };
}), tJ = (e10, t10) => (r2) => {
  let i2 = {};
  for (let t11 in e10)
    "component" !== t11 && "sx" !== t11 && e10[t11] && (i2[`data-${t11}`] = e10[t11]);
  return /* @__PURE__ */ d(r2, { ...i2, children: t10.slots });
};
function tQ(e10, t10, r2) {
  var i2;
  let a2 = null !== (i2 = z(t10) ? t10 : r2) && void 0 !== i2 ? i2 : tJ, o2 = P(t10) ? t10 : {};
  return (t11) => {
    let r3 = ts({ ...o2, sx: /* @__PURE__ */ to.custom().optional(), component: /* @__PURE__ */ to.custom().optional() }, (i3, o3) => {
      let s2 = /* @__PURE__ */ tX.use(), l2 = /* @__PURE__ */ tY.use(), u2 = /* @__PURE__ */ tK(l2);
      t11.label = r3.name;
      let d2 = /* @__PURE__ */ p(""), c2 = /* @__PURE__ */ s2.unstable_css(l2, t11), m2 = () => "0" !== c2.name ? `${l2.key}-${c2.name}${d2.value}` : `${d2.value}`;
      if (e10.__styled) {
        var f2;
        let e11 = /* @__PURE__ */ s2.unstable_css(l2, null !== (f2 = i3.sx) && void 0 !== f2 ? f2 : {});
        "0" !== e11.name && (d2.value = ` ${l2.key}-${e11.name}`), b(() => {
          u2({ serialized: c2, isStringTag: true }), u2({ serialized: e11, isStringTag: true });
        });
      } else
        y(() => {
          u2({ serialized: c2, isStringTag: true });
        });
      let g2 = /* @__PURE__ */ a2(i3, o3);
      return () => {
        if (e10.__styled) {
          let t13 = /* @__PURE__ */ g2(e10);
          return t13 ? h(t13, { component: i3.component, class: /* @__PURE__ */ m2() }) : null;
        }
        let t12 = /* @__PURE__ */ g2(tZ);
        return t12 ? h(t12, { component: i3.component || e10, sx: i3.sx, class: /* @__PURE__ */ m2() }) : null;
      };
    });
    return r3.__styled = true, r3;
  };
}
let t0 = /* @__PURE__ */ ts({ styles: /* @__PURE__ */ to.custom() }, (e10) => {
  let { styles: t10 } = e10, r2 = /* @__PURE__ */ tX.use(), i2 = /* @__PURE__ */ tY.use(), a2 = /* @__PURE__ */ tK(i2), o2 = /* @__PURE__ */ r2.unstable_css(i2, W(t10) ? { "&": t10 } : t10);
  return y(() => {
    a2({ serialized: o2, withoutScoping: true });
  }), () => null;
});
ts(() => {
  let e10 = /* @__PURE__ */ tX.use(), t10 = e10.rootCSSVars;
  return () => /* @__PURE__ */ d(t0, { styles: { ":host, :root, [data-theme]": t10, "*, *::after, *::before": { boxSizing: "border-box" }, html: { fontSize: "10px" }, a: { color: "inherit" }, body: { textStyle: "sys.body-medium" } } });
});
let t1 = /* @__PURE__ */ th(() => ({ mountPoint: () => document.body }), { name: "OverlaySetting" }), t2 = /* @__PURE__ */ th(() => new t4(p(null), p(null), () => false), { name: "Overlay" });
class t4 {
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
    return 0 === this.children.filter((e10) => e10.isOpen()).length;
  }
}
let t5 = /* @__PURE__ */ ts({ isOpen: /* @__PURE__ */ to.boolean().optional(), style: /* @__PURE__ */ to.custom().optional(), contentRef: /* @__PURE__ */ to.custom().optional(), triggerRef: /* @__PURE__ */ to.custom().optional(), onClickOutside: /* @__PURE__ */ to.custom(), onEscKeydown: /* @__PURE__ */ to.custom(), onContentBeforeMount: /* @__PURE__ */ to.custom(), $transition: /* @__PURE__ */ to.custom().optional(), $default: /* @__PURE__ */ to.custom().optional() }, (e10, t10) => {
  var r2;
  let { slots: i2, attrs: a2, emit: o2 } = t10, s2 = e10.contentRef || p(null), l2 = new t4(null !== (r2 = e10.triggerRef) && void 0 !== r2 ? r2 : p(null), s2, () => !!e10.isOpen), c2 = /* @__PURE__ */ t1.use(), m2 = /* @__PURE__ */ t2.use();
  return u(/* @__PURE__ */ m2.add(l2)), window && tu(/* @__PURE__ */ tc(s2, "value"), /* @__PURE__ */ tm((e11) => {
    if (!e11)
      return;
    let t11 = (e12) => {
      l2.isClickInside(e12) || o2("click-outside", e12);
    };
    return window.addEventListener("pointerdown", t11), () => {
      window.removeEventListener("pointerdown", t11);
    };
  }), /* @__PURE__ */ tm((e11) => {
    if (!e11)
      return;
    let t11 = (e12) => {
      "Escape" === e12.key && l2.topmost() && o2("esc-keydown", e12);
    };
    return window.addEventListener("keydown", t11), () => {
      window.removeEventListener("keydown", t11);
    };
  }), /* @__PURE__ */ td()), () => {
    var t11;
    let r3 = e10.isOpen ? h(/* @__PURE__ */ d("div", { ...a2, ref: s2, style: e10.style, children: /* @__PURE__ */ d(t2, { value: l2, children: null === (t11 = i2.default) || void 0 === t11 ? void 0 : t11.call(i2) }) }), { onVnodeBeforeMount: () => {
      o2("content-before-mount");
    } }) : null;
    return /* @__PURE__ */ d(f, { to: /* @__PURE__ */ c2.mountPoint(), children: i2.transition ? i2.transition({ content: r3 }) : r3 });
  };
}, { inheritAttrs: false, name: "Overlay" }), t3 = /* @__PURE__ */ ts({ isOpen: t5.propTypes.isOpen, onClickOutside: t5.propTypes.onClickOutside, placement: /* @__PURE__ */ to.custom().optional(), modifiers: /* @__PURE__ */ to.custom().optional(), $transition: t5.propTypes.$transition, $content: /* @__PURE__ */ to.custom(), $default: /* @__PURE__ */ to.custom() }, (e10, t10) => {
  let { slots: r2, emit: i2, attrs: a2 } = t10, o2 = /* @__PURE__ */ p(null), l2 = /* @__PURE__ */ p(null);
  return s(() => l2.value, (t11) => {
    if (t11 && o2.value) {
      var r3, i3;
      en(o2.value, t11, { placement: null !== (r3 = e10.placement) && void 0 !== r3 ? r3 : "bottom", modifiers: [...null !== (i3 = e10.modifiers) && void 0 !== i3 ? i3 : [], er] });
    }
  }), () => {
    var t11, s2;
    let u2 = null === (t11 = r2.default) || void 0 === t11 ? void 0 : t11.call(r2)[0];
    return u2 ? /* @__PURE__ */ g(v, { children: [/* @__PURE__ */ h(u2, { ...a2, onVnodeMounted: (e11) => {
      o2.value = /* @__PURE__ */ function e12(t12) {
        if (t12) {
          if (t12 instanceof HTMLElement)
            return t12;
          if (t12 instanceof Text)
            return e12(t12.nextElementSibling);
        }
        return null;
      }(e11.el);
    } }), /* @__PURE__ */ d(t5, { triggerRef: o2, contentRef: l2, isOpen: e10.isOpen, onClickOutside: (e11) => i2("click-outside", e11), style: { zIndex: 100 }, $transition: r2.transition, children: null === (s2 = r2.content) || void 0 === s2 ? void 0 : s2.call(r2) })] }) : null;
  };
}, { name: "Popper", inheritAttrs: false }), t8 = /* @__PURE__ */ tQ("button", { hover: /* @__PURE__ */ to.boolean().optional(), focus: /* @__PURE__ */ to.boolean().optional(), active: /* @__PURE__ */ to.boolean().optional(), disabled: /* @__PURE__ */ to.boolean().optional() })({ textStyle: "sys.label-large", display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none", outline: "none", overflow: "hidden", border: 0, margin: 0, userSelect: "none", cursor: "pointer", _disabled: { cursor: "not-allowed" }, gap: 8, h: 40, px: 24, rounded: 20, transitionDuration: "md4", transitionTimingFunction: "standard-accelerate", bg: "none", pos: "relative", zIndex: 1, _$before: { content: '""', pos: "absolute", top: 0, right: 0, left: 0, bottom: 0, zIndex: -1, transitionDuration: "md1", transitionTimingFunction: "standard-accelerate" }, $data_icon: { boxSize: 18, _data_placement__start: { ml: -8 }, _data_placement__end: { mr: -8 } } }), t6 = /* @__PURE__ */ tQ(t8)({ containerStyle: "sys.primary", shadow: "1", _hover: { shadow: "2", _$before: { bgColor: /* @__PURE__ */ tI("white", /* @__PURE__ */ tR(0.08)) } }, _focus: { shadow: "2", _$before: { bgColor: /* @__PURE__ */ tI("white", /* @__PURE__ */ tR(0.12)) } }, _active: { shadow: "2", _$before: { bgColor: /* @__PURE__ */ tI("white", /* @__PURE__ */ tR(0.12)) } }, _disabled: { shadow: "0", color: /* @__PURE__ */ tI("sys.on-surface", /* @__PURE__ */ tR(0.38)), bgColor: "rgba(0,0,0,0)", _$before: { bgColor: /* @__PURE__ */ tI("sys.on-surface", /* @__PURE__ */ tR(0.12)) } } }), t9 = /* @__PURE__ */ tQ(t8)({ color: "sys.primary", shadow: "1", _$before: { bgColor: "sys.surface-container-low" }, _hover: { shadow: "2", _$before: { bgColor: /* @__PURE__ */ tI("sys.primary", /* @__PURE__ */ tR(0.08)) } }, _focus: { shadow: "2", _$before: { bgColor: /* @__PURE__ */ tI("sys.primary", /* @__PURE__ */ tR(0.12)) } }, _active: { shadow: "2", _$before: { bgColor: /* @__PURE__ */ tI("sys.primary", /* @__PURE__ */ tR(0.12)) } }, _disabled: { shadow: "0", color: /* @__PURE__ */ tI("sys.on-surface", /* @__PURE__ */ tR(0.38)), _$before: { bgColor: /* @__PURE__ */ tI("sys.on-surface", /* @__PURE__ */ tR(0.12)) } } }), t7 = /* @__PURE__ */ tQ(t8)({ extends: [{ px: 16, $data_icon: { _data_placement__start: { ml: -4 }, _data_placement__end: { mr: -4 } } }], color: "sys.primary", _$before: { bgColor: "rgba(0,0,0,0)" }, _hover: { _$before: { bgColor: /* @__PURE__ */ tI("sys.primary", /* @__PURE__ */ tR(0.08)) } }, _focus: { _$before: { bgColor: /* @__PURE__ */ tI("sys.primary", /* @__PURE__ */ tR(0.12)) } }, _active: { _$before: { bgColor: /* @__PURE__ */ tI("sys.primary", /* @__PURE__ */ tR(0.12)) } }, _disabled: { color: /* @__PURE__ */ tI("sys.on-surface", /* @__PURE__ */ tR(0.38)), bgColor: "rgba(0,0,0,0)", _$before: { bgColor: "rgba(0,0,0,0)" } } }), ne = /* @__PURE__ */ tQ(t8)({ containerStyle: "sys.secondary-container", color: "sys.primary", shadow: "0", _hover: { shadow: "1", _$before: { bgColor: /* @__PURE__ */ tI("sys.on-secondary-container", /* @__PURE__ */ tR(0.08)) } }, _focus: { _$before: { bgColor: /* @__PURE__ */ tI("sys.on-secondary-container", /* @__PURE__ */ tR(0.12)) } }, _active: { _$before: { bgColor: /* @__PURE__ */ tI("sys.on-secondary-container", /* @__PURE__ */ tR(0.12)) } }, _disabled: { color: /* @__PURE__ */ tI("sys.on-surface", /* @__PURE__ */ tR(0.38)), bgColor: "rgba(0,0,0,0)", shadow: "0", _$before: { bgColor: /* @__PURE__ */ tI("sys.on-surface", /* @__PURE__ */ tR(0.12)) } } }), nt = /* @__PURE__ */ tQ(t8)({ extends: [{
  // ensure the order to define border before all
  border: "1px solid"
}], color: "sys.primary", bgColor: "rgba(0,0,0,0)", borderColor: "sys.outline", _hover: { bgColor: /* @__PURE__ */ tI("sys.primary", /* @__PURE__ */ tR(0.08)) }, _active: { bgColor: /* @__PURE__ */ tI("sys.primary", /* @__PURE__ */ tR(0.12)) }, _focus: { bgColor: /* @__PURE__ */ tI("sys.primary", /* @__PURE__ */ tR(0.12)) }, _disabled: { color: /* @__PURE__ */ tI("sys.on-surface", /* @__PURE__ */ tR(0.38)), bgColor: "rgba(0,0,0,0)", borderColor: /* @__PURE__ */ tI("sys.on-surface", /* @__PURE__ */ tR(0.12)) } }), nn = /* @__PURE__ */ tQ(t7, {})({ boxSize: 40, p: 0 }), nr = /* @__PURE__ */ tQ("span", { placement: /* @__PURE__ */ to.enums(["start", "end"]).optional(), path: /* @__PURE__ */ to.string() }, (e10, t10) => (t11) => /* @__PURE__ */ d(t11, { "data-icon": true, "data-placement": e10.placement, children: /* @__PURE__ */ d("svg", { viewBox: "0 0 24 24", children: /* @__PURE__ */ d("path", { d: e10.path }) }) }))({ boxSize: "1.2em" }), ni = /* @__PURE__ */ tM({ from: { opacity: 0 }, to: { opacity: 1 }, duration: tA.duration.md1, easing: tA.easing.standard.accelerate }, { from: { opacity: 1 }, to: { opacity: 0 }, duration: tA.duration.sm4, easing: tA.easing.standard.decelerate }), na = /* @__PURE__ */ tQ("div")({ py: 4, px: 12, rounded: "sm", shadow: "3", containerStyle: "sys.on-surface", pos: "relative", zIndex: 100 }), no = /* @__PURE__ */ ts({ title: /* @__PURE__ */ to.custom(), $default: /* @__PURE__ */ to.custom() }, (e10, t10) => {
  let { slots: r2 } = t10, i2 = /* @__PURE__ */ p(false);
  return () => {
    let t11 = r2.default()[0];
    return /* @__PURE__ */ d(t3, { isOpen: i2.value, $content: /* @__PURE__ */ d(na, { children: e10.title }), $transition: (e11) => {
      let { content: t12 } = e11;
      return d(ni, { children: t12 });
    }, children: t11 ? h(t11, { onMouseover: () => {
      i2.value = true;
    }, onMouseout: () => {
      i2.value = false;
    } }) : null });
  };
}), ns = /* @__PURE__ */ tQ("div")({ py: 8, rounded: "sm", shadow: "2", minW: 120, containerStyle: "sys.surface-container", pos: "relative", zIndex: 100 }), nl = /* @__PURE__ */ tQ("div")({ "& + &": { borderTop: "1px solid", borderColor: "sys.outline-variant" }, py: 8, px: 16, textStyle: "sys.label-large", containerStyle: "sys.surface-container", _hover: { cursor: "pointer", bgColor: /* @__PURE__ */ tI("sys.on-surface", /* @__PURE__ */ tR(0.08)) } }), nu = /* @__PURE__ */ ts({ placement: /* @__PURE__ */ to.custom().optional(), $menu: /* @__PURE__ */ to.custom(), $default: /* @__PURE__ */ to.custom() }, (e10, t10) => {
  let { slots: r2 } = t10, i2 = /* @__PURE__ */ p(false);
  return () => {
    var t11;
    let a2 = r2.default ? r2.default()[0] : void 0;
    return /* @__PURE__ */ d(t3, { isOpen: i2.value, placement: e10.placement, onClickOutside: () => {
      i2.value = false;
    }, $content: /* @__PURE__ */ d(ns, { children: null === (t11 = r2.menu) || void 0 === t11 ? void 0 : t11.call(r2) }), children: a2 ? h(a2, { onClick: () => {
      i2.value = true;
    } }) : null });
  };
}), nd = /* @__PURE__ */ tQ("div")({ pos: "absolute", top: 0, left: 0, h: "100vh", w: "100vw", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center" }), nc = /* @__PURE__ */ tQ("div")({ cursor: "pointer", pos: "absolute", top: 0, left: 0, h: "100vh", w: "100vw", zIndex: -1, bgColor: /* @__PURE__ */ tI("sys.scrim", /* @__PURE__ */ tR(0.38)) }), np = /* @__PURE__ */ tQ("div")({ py: 12, rounded: "sm", shadow: "3", minW: "50vw", containerStyle: "sys.surface-container-high" }), nm = /* @__PURE__ */ tM({ from: { opacity: 0 }, to: { opacity: 1 }, duration: tA.duration.md1, easing: tA.easing.standard.accelerate }, { from: { opacity: 1 }, to: { opacity: 0 }, duration: tA.duration.sm4, easing: tA.easing.standard.accelerate }), nh = /* @__PURE__ */ ts({ isOpen: t5.propTypes.isOpen, onClose: /* @__PURE__ */ to.custom(), $default: /* @__PURE__ */ to.custom().optional() }, (e10, t10) => {
  var r2;
  let { slots: i2, emit: a2 } = t10, o2 = /* @__PURE__ */ p(null !== (r2 = e10.isOpen) && void 0 !== r2 && r2), l2 = /* @__PURE__ */ p(false);
  return s(() => e10.isOpen, (e11) => {
    true === e11 ? o2.value = true : false === e11 && (l2.value = false);
  }), () => {
    var e11;
    return /* @__PURE__ */ d(t5, { isOpen: o2.value, onContentBeforeMount: () => {
      l2.value = true;
    }, onEscKeydown: () => {
      l2.value = false;
    }, children: /* @__PURE__ */ g(nd, { children: [/* @__PURE__ */ d(nm, { onComplete: (e12) => {
      "leave" === e12 && (o2.value = false, a2("close"));
    }, children: l2.value ? /* @__PURE__ */ d(nc, { onClick: () => {
      l2.value = false;
    } }) : null }), null === (e11 = i2.default) || void 0 === e11 ? void 0 : e11.call(i2)] }) });
  };
}), nf = /* @__PURE__ */ tQ("label", { valued: /* @__PURE__ */ to.boolean().optional(), focus: /* @__PURE__ */ to.boolean().optional(), invalid: /* @__PURE__ */ to.boolean().optional(), disabled: /* @__PURE__ */ to.boolean().optional(), $label: /* @__PURE__ */ to.custom().optional(), $supporting: /* @__PURE__ */ to.custom().optional(), $leading: /* @__PURE__ */ to.custom().optional(), $trailing: /* @__PURE__ */ to.custom().optional(), $default: /* @__PURE__ */ to.custom() }, (e10, t10) => {
  let { slots: r2 } = t10;
  return (t11) => {
    var i2, a2, o2, s2;
    let l2 = e10.valued, u2 = e10.invalid, c2 = e10.disabled, p2 = /* @__PURE__ */ (null !== (s2 = null === (i2 = r2.default) || void 0 === i2 ? void 0 : i2.call(r2)) && void 0 !== s2 ? s2 : []).map((e11) => "input" === e11.type ? (l2 = !!E(e11.props, ["value"], /* @__PURE__ */ E(e11.props, ["placeholder"], l2)), c2 = /* @__PURE__ */ E(e11.props, ["disabled"], c2), h(e11, { disabled: c2 })) : h(e11));
    return /* @__PURE__ */ g(t11, { "data-valued": l2, "data-invalid": u2, "data-disabled": c2, "data-focus-within": e10.focus, "data-has-leading": !!r2.leading, "data-has-trailing": !!r2.trailing, children: [/* @__PURE__ */ g("div", { "data-input-container": "", children: [r2.leading && /* @__PURE__ */ d(ng, { children: /* @__PURE__ */ r2.leading() }), /* @__PURE__ */ d("div", { "data-input-label": "", children: null === (a2 = r2.label) || void 0 === a2 ? void 0 : a2.call(r2) }), p2, r2.trailing && /* @__PURE__ */ d(ng, { children: /* @__PURE__ */ r2.trailing() })] }), r2.supporting && /* @__PURE__ */ d("div", { "data-input-supporting": "", children: null === (o2 = r2.supporting) || void 0 === o2 ? void 0 : o2.call(r2) })] });
  };
})({ display: "block", pos: "relative", textStyle: "sys.body-large", $data_input_container: { pos: "relative" }, $data_input: { outline: "none", flex: 1, w: "100%", m: 0, px: 16, py: 4, minHeight: 56, bg: "none", border: "none", cursor: "text", "&[readonly]": { cursor: "pointer" }, bgColor: "sys.surface-container-highest", color: "sys.on-surface", roundedTop: "xs", borderBottom: "1px solid", borderColor: "sys.outline-variant", textStyle: "sys.body-large", transitionDuration: "sm1", transitionTimingFunction: "standard" }, $data_input_label: { pos: "absolute", top: 4, bottom: 4, left: 16, color: "sys.on-surface-variant", display: "flex", alignItems: "center", transitionDuration: "sm2", transitionTimingFunction: "standard-accelerate" }, $data_input_supporting: { textStyle: "sys.body-small", px: 16, pt: 4, display: "flex", gap: 16, color: "sys.on-surface-variant" }, _has_leading: { $data_input: { pl: 36 }, $data_input_label: { left: 36 } }, _has_trailing: { $data_input: { pr: 32 } }, _valued: { $data_input: { pt: 18 }, $data_input_label: { top: 8, bottom: "auto", textStyle: "sys.body-small" } }, _focusWithin: { $data_input: { pt: 18, borderBottom: "2px solid", borderColor: "sys.primary" }, $data_input_label: { top: 8, bottom: "auto", textStyle: "sys.body-small", color: "sys.primary" } }, _invalid: { $data_input: { borderBottom: "2px solid", borderColor: "sys.error" }, $data_input_label: { color: "sys.error" }, $data_input_supporting: { color: "sys.error" } }, _disabled: { opacity: 0.38, cursor: "not-allowed" } }), ng = /* @__PURE__ */ tQ("div", { role: /* @__PURE__ */ to.enums(["leading", "trailing"]).optional().default("leading") })({ pos: "absolute", top: 4, bottom: 4, display: "flex", alignItems: "center", color: "sys.on-surface-variant", _role__leading: { left: 12, $data_icon: { ml: -4 } }, _role__trailing: { right: 12, $data_icon: { mr: -4 } } }), nv = /* @__PURE__ */ _(() => {
  let e10 = /* @__PURE__ */ x(), t10 = /* @__PURE__ */ G(/* @__PURE__ */ e10.options.routes.filter((e11) => "/" !== e11.path), (e11) => e11.path.split("/")[1]);
  return () => /* @__PURE__ */ d(eo, { sx: { py: 16, px: 0, textTransform: "capitalize" }, children: /* @__PURE__ */ X(t10, (e11, t11) => {
    var r2;
    let [i2, a2] = V(e11, (e12) => e12.path === `/${t11}`);
    return /* @__PURE__ */ g(eo, { sx: { px: 8 }, children: [i2[0] ? /* @__PURE__ */ d(t7, { component: k, sx: { width: "100%", justifyContent: "flex-start" }, activeClass: "active", to: null === (r2 = i2[0]) || void 0 === r2 ? void 0 : r2.path, children: t11 }) : /* @__PURE__ */ d(t7, { sx: { width: "100%", justifyContent: "flex-start" }, children: t11 }), /* @__PURE__ */ d(eo, { sx: { pl: 16 }, children: /* @__PURE__ */ X(a2, (e12) => {
      var t12;
      return /* @__PURE__ */ d(t7, { component: k, activeClass: "active", to: e12.path, sx: { width: "100%", justifyContent: "flex-start" }, children: null === (t12 = /* @__PURE__ */ N(/* @__PURE__ */ e12.path.split("/"))) || void 0 === t12 ? void 0 : t12.replaceAll("-", " ") }, e12.name);
    }) })] }, t11);
  }) });
}), nb = /* @__PURE__ */ _({ $default: /* @__PURE__ */ q().optional() }, (e10, t10) => {
  let { slots: r2 } = t10, i2 = /* @__PURE__ */ p("light");
  return () => {
    var e11;
    return /* @__PURE__ */ g(eo, { "data-theme": i2.value, sx: { display: "flex", height: "100vh", width: "100vw", containerStyle: "sys.surface" }, children: [/* @__PURE__ */ g(eo, { sx: { display: "flex", flexDirection: "column", width: "280px", height: "100vh", borderRightRadius: "lg", overflowY: "auto", containerStyle: "sys.surface-container-low", elevation: "0", _hover: { elevation: "2" } }, children: [/* @__PURE__ */ d(eo, { sx: { flex: 1 }, children: /* @__PURE__ */ d(n_, {}) }), /* @__PURE__ */ g(eo, { sx: { p: 16, display: "flex", justifyContent: "flex-end" }, children: [/* @__PURE__ */ d(nn, { component: "a", target: "_blank", sx: { color: "sys.on-surface-variant" }, href: "//github.com/innoai-tech/vuekit", children: /* @__PURE__ */ d(nr, { path: eb }) }), /* @__PURE__ */ d(no, { title: `切换到${"light" === i2.value ? "深色模式" : "浅色模式"}`, children: /* @__PURE__ */ d(eo, { component: nn, "data-test": true, sx: { color: "sys.on-surface-variant" }, onClick: () => {
      i2.value = "light" === i2.value ? "dark" : "light";
    }, children: /* @__PURE__ */ d(nr, { path: "light" === i2.value ? ef : eg }) }) })] })] }), /* @__PURE__ */ d(eo, { sx: { flex: 1, overflow: "auto" }, children: /* @__PURE__ */ d(ev, { children: null === (e11 = r2.default) || void 0 === e11 ? void 0 : e11.call(r2) }) })] });
  };
}), ny = /* @__PURE__ */ _(() => {
  let e10 = /* @__PURE__ */ eh.use(), t10 = /* @__PURE__ */ es.use();
  return s([() => e10.value.seed, () => e10.value.rules], (t11) => {
    let [r2, i2] = t11;
    e10.next((e11) => {
      e11.theming = /* @__PURE__ */ ec.create({ ...ep, ...em.fromColors(r2).toDesignTokens(i2) }, { varPrefix: "vk" });
    });
  }), () => {
    let r2 = e10.value.theming, i2 = /* @__PURE__ */ r2.unstable_css(t10, { ":root": r2.rootCSSVars });
    return /* @__PURE__ */ d(eh, { value: e10, children: /* @__PURE__ */ g(ed, { value: r2, children: [/* @__PURE__ */ d(el, {}), /* @__PURE__ */ d(eu, { styles: '/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n' }), /* @__PURE__ */ d(nx, { children: /* @__PURE__ */ d(w, {}) })] }, i2.name) });
  };
}), n_ = /* @__PURE__ */ Object.assign(nv, { displayName: "Nav" }), nx = /* @__PURE__ */ Object.assign(nb, { displayName: "Scaffold" }), nw = /* @__PURE__ */ Object.assign(ny, { displayName: "App" }), nk = {}, n$ = function(e10, t10, r2) {
  let i2 = /* @__PURE__ */ Promise.resolve();
  if (t10 && t10.length > 0) {
    let e11 = /* @__PURE__ */ document.getElementsByTagName("link");
    i2 = /* @__PURE__ */ Promise.all(/* @__PURE__ */ t10.map((t11) => {
      if ((t11 = "/vuekit/" + t11) in nk)
        return;
      nk[t11] = true;
      let i3 = /* @__PURE__ */ t11.endsWith(".css");
      if (r2)
        for (let r3 = e11.length - 1; r3 >= 0; r3--) {
          let a3 = e11[r3];
          if (a3.href === t11 && (!i3 || "stylesheet" === a3.rel))
            return;
        }
      else if (document.querySelector(`link[href="${t11}"]${i3 ? '[rel="stylesheet"]' : ""}`))
        return;
      let a2 = /* @__PURE__ */ document.createElement("link");
      if (a2.rel = i3 ? "stylesheet" : "modulepreload", i3 || (a2.as = "script", a2.crossOrigin = ""), a2.href = t11, document.head.appendChild(a2), i3)
        return new Promise((e12, r3) => {
          a2.addEventListener("load", e12), a2.addEventListener("error", () => r3(Error(`Unable to preload CSS for ${t11}`)));
        });
    }));
  }
  return i2.then(() => e10()).catch((e11) => {
    let t11 = new Event("vite:preloadError", { cancelable: true });
    if (t11.payload = e11, window.dispatchEvent(t11), !t11.defaultPrevented)
      throw e11;
  });
}, nS = /* @__PURE__ */ _(() => () => /* @__PURE__ */ d(eo, { sx: { display: "flex", alignItems: "center", justifyContent: "center", textStyle: "sys.display-large" }, children: "Vuekit" })), nC = /* @__PURE__ */ Object.assign(nS, { displayName: "IndexDefault" }), nE = [{ name: "vuematerial", path: "/vuematerial", component: () => n$(() => import("./nodepkg-vuematerial-example.1waLS7uA.chunk.js"), true ? __vite__mapDeps([0,1,2,3]) : void 0), props: true }, { name: "vuematerial-icons", path: "/vuematerial/icons", component: () => n$(() => import("./nodepkg-vuematerial-example.NNx4jNgz.chunk.js"), true ? __vite__mapDeps([4,1,2,3,5,6]) : void 0), props: true }, { name: "vuematerial-textfields", path: "/vuematerial/textfields", component: () => n$(() => import("./nodepkg-vuematerial-example.bZ4yJjkZ.chunk.js"), true ? __vite__mapDeps([7,1,2,3,6,5]) : void 0), props: true }, { name: "vuematerial-buttons", path: "/vuematerial/buttons", component: () => n$(() => import("./nodepkg-vuematerial-example.T7G3zBAA.chunk.js"), true ? __vite__mapDeps([8,1,2,3,6,5]) : void 0), props: true }, { name: "vuematerial-overlays", path: "/vuematerial/overlays", component: () => n$(() => import("./nodepkg-vuematerial-example.92jofpHW.chunk.js"), true ? __vite__mapDeps([9,1,2,3,6,5]) : void 0), props: true }, { name: "vueuikit-typography", path: "/vueuikit/typography", component: () => n$(() => import("./nodepkg-vueuikit-example.e5odK2RH.chunk.js"), true ? __vite__mapDeps([10,1,2,3,6]) : void 0), props: true }, { name: "vueuikit", path: "/vueuikit", component: () => n$(() => import("./nodepkg-vueuikit-example.EvHBp5ED.chunk.js"), true ? __vite__mapDeps([11,1,2,3,6]) : void 0), props: true }, { name: "vueuikit-color-scheme", path: "/vueuikit/color-scheme", component: () => n$(() => import("./nodepkg-vueuikit-example.5YemKYBb.chunk.js"), true ? __vite__mapDeps([12,1,2,3,6]) : void 0), props: true }, { name: "vueuikit-popper", path: "/vueuikit/popper", component: () => n$(() => import("./nodepkg-vueuikit-example.0P4c74bl.chunk.js"), true ? __vite__mapDeps([13,1,2,3,6]) : void 0), props: true }, { name: "vueuikit-elevation", path: "/vueuikit/elevation", component: () => n$(() => import("./nodepkg-vueuikit-example.MsdBskxA.chunk.js"), true ? __vite__mapDeps([14,1,2,3,6]) : void 0), props: true }, { name: "vueuikit-figma-tokens", path: "/vueuikit/figma-tokens", component: () => n$(() => import("./nodepkg-vueuikit-example.zpWtlM5F.chunk.js"), true ? __vite__mapDeps([15,2,1,3,6]) : void 0), props: true }, { name: "vueuikit-color-palette", path: "/vueuikit/color-palette", component: () => n$(() => import("./node_modules-toggle-selection.qRoXz72k.chunk.js"), true ? __vite__mapDeps([16,1,2,3,6,5]) : void 0), props: true }, { name: "vuekit", path: "/vuekit", component: () => n$(() => import("./nodepkg-vuekit-example.Bif-MX0o.chunk.js"), true ? __vite__mapDeps([17,1,2,3]) : void 0), props: true }, { name: "vuekit-rx-in-vue", path: "/vuekit/rx-in-vue", component: () => n$(() => import("./nodepkg-vuekit-example.AJzUK8Lf.chunk.js"), true ? __vite__mapDeps([18,1,2,3]) : void 0), props: true }, { name: "index", path: "/", component: /* @__PURE__ */ Object.assign(nC, { meta: { name: "Home", icon: () => n$(() => import("./webapp-vuekit-layout.BxJpQySn.chunk.js").then((e10) => e10.i), true ? __vite__mapDeps([5,6,2,1,3]) : void 0) } }), props: true }];
console.log(nE);
let nO = new URL(null !== (ta = null === (ti = /* @__PURE__ */ document.querySelector("base")) || void 0 === ti ? void 0 : ti.href) && void 0 !== ta ? ta : "/"), nR = /* @__PURE__ */ $({ history: /* @__PURE__ */ S(nO.pathname), routes: nE });
C(nw).use(nR).mount("#root");
export {
  nh as D,
  t9 as E,
  t6 as F,
  nr as I,
  nl as L,
  nu as M,
  nt as O,
  nf as T,
  nn as a,
  ne as b,
  t7 as c,
  np as d,
  no as e
};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["static/nodepkg-vuematerial-example.1waLS7uA.chunk.js","static/lib-nodepkg-vuekit.H7ftM6cZ.chunk.js","static/vendor-core-js.CpeR9-zu.chunk.js","static/lib-nodepkg-typedef.E0gBujd-.chunk.js","static/nodepkg-vuematerial-example.NNx4jNgz.chunk.js","static/webapp-vuekit-layout.BxJpQySn.chunk.js","static/lib-nodepkg-vueuikit.YGom7q2x.chunk.js","static/nodepkg-vuematerial-example.bZ4yJjkZ.chunk.js","static/nodepkg-vuematerial-example.T7G3zBAA.chunk.js","static/nodepkg-vuematerial-example.92jofpHW.chunk.js","static/nodepkg-vueuikit-example.e5odK2RH.chunk.js","static/nodepkg-vueuikit-example.EvHBp5ED.chunk.js","static/nodepkg-vueuikit-example.5YemKYBb.chunk.js","static/nodepkg-vueuikit-example.0P4c74bl.chunk.js","static/nodepkg-vueuikit-example.MsdBskxA.chunk.js","static/nodepkg-vueuikit-example.zpWtlM5F.chunk.js","static/node_modules-toggle-selection.qRoXz72k.chunk.js","static/nodepkg-vuekit-example.Bif-MX0o.chunk.js","static/nodepkg-vuekit-example.AJzUK8Lf.chunk.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
