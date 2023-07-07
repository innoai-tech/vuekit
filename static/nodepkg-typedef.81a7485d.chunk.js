import { y as e, z as t, A as r, B as i, C as a, w as s, D as o, E as l, f as u, j as d, r as c, u as p, a as h, h as m, b as f, F as g, o as v, e as y, c as x } from "./lib-nodepkg-vuekit.e8de7969.chunk.js";
import { b, e as w, f as $, g as k, h as S, i as _, j as R, k as O, r as C, l as T, m as V } from "./lib-nodepkg-vueuikit.48a0adf2.chunk.js";
import { g as z, m as j, v as P, n as W, i as A, p as H, k as M, b as I, d as E, a as L, u as B, r as N, j as F, t as D, w as X, h as U, l as G, q as Y, y as q } from "./lib-nodepkg-typedef.60c9c151.chunk.js";
let J = { path: [], branch: [] };
class K extends TypeError {
  constructor(e14, t2) {
    let r2;
    let { message: i2, explanation: a2, ...s2 } = e14, { path: o2 } = e14, l2 = 0 === o2.length ? i2 : `At path: ${o2.join(".")} -- ${i2}`;
    super(null != a2 ? a2 : l2), null != a2 && (this.cause = l2), Object.assign(this, s2), this.name = this.constructor.name, this.failures = () => null != r2 ? r2 : r2 = [e14, ...t2()];
  }
}
class Z {
  static define() {
    let e14 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => true;
    return new class extends Z {
      validator(t2, r2) {
        return e14(t2, r2);
      }
    }(null);
  }
  get type() {
    var e14;
    return null !== (e14 = (this.schema || {}).type) && void 0 !== e14 ? e14 : "unknown";
  }
  *entries(e14) {
    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  }
  refiner(e14, t2) {
    return [];
  }
  validator(e14, t2) {
    return [];
  }
  coercer(e14, t2) {
    return e14;
  }
  validate(e14) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return en(e14, this, t2);
  }
  create(e14) {
    let t2 = en(e14, this, { coerce: true });
    if (!t2[0])
      return t2[1];
    throw t2[0];
  }
  mask(e14) {
    let t2 = en(e14, this, { coerce: true, mask: true });
    if (!t2[0])
      return t2[1];
    throw t2[0];
  }
  default(e14) {
    return et.create(this, e14);
  }
  optional() {
    return er.create(this);
  }
  use() {
    for (var e14 = arguments.length, t2 = Array(e14), r2 = 0; r2 < e14; r2++)
      t2[r2] = arguments[r2];
    return t2.reduce((e15, t3) => t3(e15), this);
  }
  annotate(e14) {
    return Q.of(this, { $meta: e14 });
  }
  get unwrap() {
    return this;
  }
  get meta() {
    if (this.schema) {
      var e14;
      return null !== (e14 = z(this.schema, ["$meta"])) && void 0 !== e14 ? e14 : {};
    }
    return {};
  }
  getMeta(e14) {
    if (this.schema)
      return z(this.schema, ["$meta", e14]);
  }
  getSchema(e14) {
    if (e14 && this.schema)
      return z(this.schema, [e14]);
  }
  get isOptional() {
    return false;
  }
  constructor(e14) {
    this.schema = e14;
  }
}
class Q extends Z {
  static of(e14, t2) {
    return new Q({ ...t2, $unwrap: e14 });
  }
  static refine(e14, t2, r2) {
    return new class extends Q {
      *refiner(i2, a2) {
        yield* this.unwrap.refiner(i2, a2);
        let s2 = t2(i2, a2), o2 = ei(s2, a2, e14, i2);
        for (let e15 of o2)
          yield { ...e15, refinement: Object.keys(r2).join(",") };
      }
    }({ ...r2, $unwrap: e14 });
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
    return { ...this.unwrap.meta, ...z(this.schema, ["$meta"], {}) };
  }
  getMeta(e14) {
    if (this.schema) {
      var t2;
      return null !== (t2 = z(this.schema, ["$meta", e14])) && void 0 !== t2 ? t2 : this.unwrap.getMeta(e14);
    }
  }
  getSchema(e14) {
    if (e14) {
      var t2;
      return null !== (t2 = z(this.schema, [e14])) && void 0 !== t2 ? t2 : this.unwrap.getSchema(e14);
    }
  }
  *entries(e14) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : J;
    yield* this.unwrap.entries(e14, { ...t2, node: ee.create(this, t2.node) });
  }
  validator(e14, t2) {
    return ei(this.unwrap.validator(e14, t2), t2, this, e14);
  }
  refiner(e14, t2) {
    return ei(this.unwrap.refiner(e14, t2), t2, this, e14);
  }
  coercer(e14, t2) {
    return this.unwrap.coercer(e14, t2);
  }
}
class ee extends Q {
  static create(e14, t2) {
    return new ee({ $unwrap: e14, $parent: t2 || null });
  }
}
class et extends Q {
  static create(e14, t2) {
    return new et({ $unwrap: e14, default: t2 });
  }
  coercer(e14, t2) {
    return void 0 === e14 ? this.schema.default : super.unwrap.coercer(e14, t2);
  }
}
class er extends Q {
  static create(e14) {
    return new er({ $unwrap: e14 });
  }
  get isOptional() {
    return true;
  }
  refiner(e14, t2) {
    return void 0 === e14 || super.unwrap.refiner(e14, t2);
  }
  validator(e14, t2) {
    return void 0 === e14 || super.unwrap.validator(e14, t2);
  }
}
function* ei(e14, t2, r2, i2) {
  var a2;
  for (let s2 of (j(a2 = e14) && "function" == typeof a2[Symbol.iterator] || (e14 = [e14]), e14)) {
    let e15 = function(e16, t3, r3, i3) {
      if (true === e16)
        return;
      false === e16 ? e16 = {} : "string" == typeof e16 && (e16 = { message: e16 });
      let { path: a3, branch: s3, node: o2 } = t3, { type: l2 } = r3, { refinement: u2, message: d2 = `Expected a value of type \`${l2}\`${u2 ? ` with refinement \`${u2}\`` : ""}, but received: \`${i3}\`` } = e16;
      return { value: i3, type: l2, refinement: u2, key: a3[a3.length - 1], path: a3, branch: s3, node: o2, ...e16, message: d2 };
    }(s2, t2, r2, i2);
    e15 && (yield e15);
  }
}
function en(e14, t2) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i2 = ea(e14, t2, r2), a2 = function(e15) {
    let { done: t3, value: r3 } = e15.next();
    return t3 ? void 0 : r3;
  }(i2);
  if (a2[0]) {
    let e15 = new K(a2[0], function* () {
      for (let e16 of i2)
        e16[0] && (yield e16[0]);
    });
    return [e15, void 0];
  }
  {
    let e15 = a2[1];
    return [void 0, e15];
  }
}
function* ea(e14, t2) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, { path: i2 = [], branch: a2 = [e14], node: s2 = ee.create(t2, null), coerce: o2 = false, mask: l2 = false } = r2, u2 = { mask: l2, path: i2, branch: a2, node: s2 };
  o2 && (e14 = t2.coercer(e14, u2));
  let d2 = 0;
  for (let i3 of ei(t2.validator(e14, u2), u2, t2, e14))
    i3.explanation = r2.message, d2 = 2, yield [i3, void 0];
  for (let [c2, p2, h2] of t2.entries(e14, u2)) {
    let t3 = ea(p2, h2, { path: void 0 === c2 ? i2 : [...i2, c2], branch: void 0 === c2 ? a2 : [...a2, p2], node: void 0 === c2 ? s2 : ee.create(h2, s2), coerce: o2, mask: l2, message: r2.message });
    for (let r3 of t3)
      r3[0] ? (d2 = null != r3[0].refinement ? 1 : 2, yield [r3[0], void 0]) : o2 && (p2 = r3[1], void 0 === c2 ? e14 = p2 : e14 instanceof Map ? e14.set(c2, p2) : e14 instanceof Set ? e14.add(p2) : j(e14) && (void 0 !== p2 || c2 in e14) && (e14[c2] = p2));
  }
  if (2 !== d2)
    for (let i3 of ei(t2.refiner(e14, u2), u2, t2, e14))
      i3.explanation = r2.message, d2 = 1, yield [i3, void 0];
  0 === d2 && (yield [void 0, e14]);
}
class es extends Q {
  static create(e14, t2) {
    return new es({ $unwrap: t2, $ref: e14 });
  }
  get isOptional() {
    return false;
  }
}
class eo extends Z {
  static create() {
    return new eo();
  }
  get type() {
    return "any";
  }
  validator() {
    return true;
  }
  constructor() {
    super({});
  }
}
class el extends Z {
  static create() {
    return new el(false);
  }
  get type() {
    return "never";
  }
  validator(e14, t2) {
    return false;
  }
}
class eu extends Z {
  static create() {
    return new eu({ type: "null" });
  }
  get type() {
    return "null";
  }
  validator(e14, t2) {
    return Object.is(e14, null);
  }
}
class ed extends Z {
  static create() {
    return new ed({ type: "string" });
  }
  get type() {
    return this.schema.type;
  }
  validator(e14, t2) {
    return "string" == typeof e14;
  }
}
class ec extends Z {
  static create() {
    return new ec({ type: "number" });
  }
  get type() {
    return this.schema.type;
  }
  validator(e14, t2) {
    return "number" == typeof e14 && !isNaN(e14);
  }
}
class ep extends Z {
  static create() {
    return new ep({ type: "integer" });
  }
  get type() {
    return this.schema.type;
  }
  validator(e14, t2) {
    return "number" == typeof e14 && !isNaN(e14) && Number.isInteger(e14);
  }
}
class eh extends Z {
  static create() {
    return new eh({ type: "boolean" });
  }
  get type() {
    return this.schema.type;
  }
  validator(e14, t2) {
    return "boolean" == typeof e14;
  }
}
class em extends Z {
  static create() {
    return new em({ type: "string", format: "binary" });
  }
  get type() {
    return "binary";
  }
  validator(e14, t2) {
    return e14 instanceof File || e14 instanceof Blob;
  }
}
class ef extends Z {
  static create(e14) {
    return new ef({ enum: e14 });
  }
  static literal(e14) {
    return new ef({ enum: [e14] });
  }
  static nativeEnum(e14) {
    return new ef({ enum: Object.values(e14) });
  }
  get type() {
    return "enums";
  }
  validator(e14, t2) {
    return this.schema.enum.includes(e14);
  }
}
class eg extends Z {
  static create(e14) {
    let t2 = [];
    if (e14)
      for (let r2 in e14) {
        let i2 = e14[r2];
        i2.isOptional || t2.push(r2);
      }
    return new eg({ type: "object", properties: e14, required: t2, additionalProperties: el.create() });
  }
  get type() {
    return this.schema.type;
  }
  *entries(e14, t2) {
    if (j(e14)) {
      var r2;
      let i2 = new Set(Object.keys(e14));
      if (this.schema.properties)
        for (let t3 in this.schema.properties)
          i2.delete(t3), yield [t3, e14[t3], this.schema.properties[t3]];
      if ((null === (r2 = t2.node) || void 0 === r2 ? void 0 : r2.type) !== "intersection")
        for (let t3 of i2)
          yield [t3, e14[t3], this.schema.additionalProperties];
    }
  }
  validator(e14, t2) {
    return j(e14);
  }
  coercer(e14, t2) {
    if (j(e14)) {
      let r2 = { ...e14 };
      if (t2.mask) {
        let e15 = this.schema.properties;
        if (e15)
          for (let t3 in r2)
            void 0 === e15[t3] && delete r2[t3];
      }
      return r2;
    }
    return e14;
  }
}
class ev extends Z {
  static create(e14, t2) {
    return new ev({ propertyNames: e14, additionalProperties: t2, type: "object" });
  }
  get type() {
    return "record";
  }
  *entries(e14) {
    if (j(e14) && j(e14))
      for (let t2 in e14) {
        let r2 = e14[t2];
        yield [t2, t2, this.schema.propertyNames], yield [t2, r2, this.schema.additionalProperties];
      }
  }
  validator(e14) {
    return j(e14);
  }
}
class ey extends Z {
  static create(e14) {
    return new ey({ type: "array", items: e14 });
  }
  get type() {
    return this.schema.type;
  }
  *entries(e14) {
    if ("any" != this.schema.items.type && Array.isArray(e14))
      for (let [t2, r2] of e14.entries())
        yield [t2, r2, this.schema.items];
  }
  validator(e14) {
    return Array.isArray(e14);
  }
  coercer(e14) {
    return Array.isArray(e14) ? e14.slice() : e14;
  }
}
class ex extends Z {
  static create(e14) {
    return new ex({ type: "array", items: e14 });
  }
  get type() {
    return "tuple";
  }
  *entries(e14, t2) {
    if (Array.isArray(e14)) {
      let t3 = Math.max(this.schema.items.length, e14.length);
      for (let i2 = 0; i2 < t3; i2++) {
        var r2;
        yield [i2, e14[i2], null !== (r2 = this.schema.items[i2]) && void 0 !== r2 ? r2 : el.create()];
      }
    }
  }
  validator(e14) {
    return Array.isArray(e14);
  }
  coercer(e14) {
    return Array.isArray(e14) ? e14.slice() : e14;
  }
}
class eb extends Z {
  static create() {
    for (var e14 = arguments.length, t2 = Array(e14), r2 = 0; r2 < e14; r2++)
      t2[r2] = arguments[r2];
    return new eb({ allOf: t2 });
  }
  get type() {
    return "intersection";
  }
  *entries(e14) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : J;
    for (let r2 of this.schema.allOf)
      yield* r2.entries(e14, t2);
  }
  *validator(e14, t2) {
    for (let r2 of this.schema.allOf)
      yield* ei(r2.validator(e14, t2), t2, this, e14);
  }
  *refiner(e14, t2) {
    for (let r2 of this.schema.allOf)
      yield* ei(r2.refiner(e14, t2), t2, this, e14);
  }
}
class ew extends Z {
  static create() {
    for (var e14 = arguments.length, t2 = Array(e14), r2 = 0; r2 < e14; r2++)
      t2[r2] = arguments[r2];
    return new ew({ oneOf: t2 });
  }
  static discriminatorMapping(e14, t2) {
    let r2 = P(t2, (t3, r3) => {
      let i2 = { [e14]: ef.literal(r3) };
      for (let [e15, r4, a2] of t3.entries({}, J))
        i2[e15] = a2;
      return eg.create(i2);
    });
    return new ew({ oneOf: Object.values(r2), discriminator: { propertyName: e14 } });
  }
  discriminatorPropType(e14) {
    var t2;
    return null !== (t2 = this._discriminatorPropName) && void 0 !== t2 ? t2 : this._discriminatorPropName = (() => {
      var t3, r2;
      let i2 = this.schema.discriminator.propertyName, a2 = this.schema.oneOf.reduce((e15, t4) => [...e15, ...t4.unwrap.schema.properties[i2].unwrap.schema.enum], []);
      return Q.of(ef.create(a2), { $meta: null !== (r2 = null === (t3 = e14.node) || void 0 === t3 ? void 0 : t3.meta) && void 0 !== r2 ? r2 : {} });
    })();
  }
  discriminatorMapping(e14, t2) {
    let r2 = this.schema.discriminator.propertyName;
    if (this._discriminatorMapping[e14])
      return this._discriminatorMapping[e14];
    let i2 = this.discriminatorPropType(t2).unwrap.schema.enum;
    if (i2.includes(e14)) {
      let t3 = this.schema.oneOf.find((t4) => {
        let i3 = t4.unwrap.schema.properties[r2];
        if (i3.unwrap.schema.enum) {
          let [t5, r3] = i3.validate(e14);
          return !t5;
        }
        return false;
      });
      if (t3) {
        var a2, s2, o2;
        return null !== (o2 = (a2 = this._discriminatorMapping)[s2 = `${e14}`]) && void 0 !== o2 ? o2 : a2[s2] = W(t3.unwrap.schema.properties, [r2]);
      }
    }
    return {};
  }
  *entries(e14, t2) {
    if (this.schema.discriminator) {
      let r2 = this.schema.discriminator.propertyName, i2 = (null != e14 ? e14 : {})[r2], a2 = eg.create({ [r2]: this.discriminatorPropType(t2), ...this.discriminatorMapping(i2, t2) });
      yield* a2.entries(e14, t2);
    }
  }
  get type() {
    return "union";
  }
  coercer(e14) {
    for (let t2 of this.schema.oneOf) {
      let [r2, i2] = en(e14, t2, { coerce: true });
      if (!r2)
        return i2;
    }
    return e14;
  }
  validator(e14, t2) {
    if (this.schema.discriminator) {
      let r3 = this.schema.discriminator.propertyName, i2 = (null != e14 ? e14 : {})[r3], a2 = eg.create({ [r3]: this.discriminatorPropType(t2), ...this.discriminatorMapping(i2, t2) });
      return a2.validator(e14, t2);
    }
    let r2 = [];
    for (let i2 of this.schema.oneOf) {
      let [...a2] = ea(e14, i2, t2), [s2] = a2;
      if (s2 && !s2[0])
        return [];
      for (let [e15] of a2)
        e15 && r2.push(e15);
    }
    return [`Expected the value to satisfy a union of \`${this.schema.oneOf.map((e15) => e15.type).join(" | ")}\`, but received: ${e14}`, ...r2];
  }
  constructor() {
    super(...arguments), this._discriminatorMapping = {};
  }
}
let e$ = es.create, ek = eo.create, eS = el.create, e_ = eu.create, eR = ed.create, eO = ec.create, eC = ep.create, eT = eh.create, eV = em.create, ez = ef.create, ej = ef.nativeEnum, eP = ef.literal, eW = eg.create, eA = ev.create, eH = ey.create, eM = ex.create, eI = eb.create, eE = ew.create, eL = ew.discriminatorMapping, eB = Z.define, eN = Q.refine;
var eF, eD = Object.freeze({ __proto__: null, any: ek, array: eH, binary: eV, boolean: eT, custom: eB, discriminatorMapping: eL, enums: ez, integer: eC, intersection: eI, literal: eP, nativeEnum: ej, never: eS, nil: e_, number: eO, object: eW, pattern: function(e14, t2) {
  return (r2) => Q.refine(r2, (i2) => e14.test(i2) || (null != t2 ? t2 : `Expected a ${r2.type} matching \`/${e14.source}/\` but received "${i2}"`), { pattern: e14 });
}, record: eA, ref: e$, refine: eN, string: eR, tuple: eM, union: eE });
function eX(e14, t2) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i2 = null != r2 ? r2 : t2, a2 = null != t2 ? t2 : e14, s2 = A(e14) ? {} : e14, [o2, l2] = H(Object.keys(s2), (e15) => /^on[A-Z]/.test(e15)), u2 = { emits: o2.map((e15) => M(e15.slice(2))), props: l2.filter((e15) => !/^[$]/.test(e15)).reduce((e15, t3) => {
    let r3 = s2[t3];
    return { ...e15, [t3]: { default: () => {
      try {
        return r3.create(void 0);
      } catch (e16) {
      }
    }, validator: (e16) => r3.validate(e16) } };
  }, {}) };
  return { get name() {
    var d2;
    return null !== (d2 = this.displayName) && void 0 !== d2 ? d2 : i2.name;
  }, set name(n) {
    i2.name = n;
  }, setup: (e15, t3) => a2(e15, t3), emits: u2.emits, props: u2.props, inheritAttrs: i2.inheritAttrs, propTypes: s2 };
}
let eU = (e14, t2) => new Proxy(e14, { get(e15, r2) {
  var i2;
  return null !== (i2 = t2[r2]) && void 0 !== i2 ? i2 : e15[r2];
} });
function eG(e14) {
  for (var t2 = arguments.length, a2 = Array(t2 > 1 ? t2 - 1 : 0), s2 = 1; s2 < t2; s2++)
    a2[s2 - 1] = arguments[s2];
  return r(...a2)(i(e14));
}
let eY = (e14, t2) => {
  let r2 = new a(e14[t2]);
  return s(() => e14[t2], (e15) => r2.next(e15)), r2;
};
function eq(e14) {
  return (t2) => {
    let r2 = t2.subscribe(e14);
    u(() => r2.unsubscribe());
  };
}
eX({ elem$: eD.custom(), $default: eD.custom() }, (t2, r2) => {
  let {} = r2, i2 = e(null);
  return eG(t2.elem$, o((e14) => i2.value = e14), eq()), () => {
    var e14;
    return null === (e14 = i2.value) || void 0 === e14 ? void 0 : e14.call(i2);
  };
}, { name: "RxSlot" });
let eJ = (e14, t2) => {
  if (L(e14) && L(t2)) {
    if (e14.length !== t2.length)
      return false;
    for (let r2 in e14)
      if (!Object.is(e14[r2], t2[r2]))
        return false;
    return true;
  }
  return Object.is(e14, t2);
}, eK = (e14) => {
  let t2;
  let r2 = null;
  return o({ next: (i2) => {
    eJ(i2, r2) || (t2 && t2(), t2 = e14(i2), r2 = i2);
  }, unsubscribe: () => {
    t2 && t2();
  } });
};
function eZ(e14, r2, i2) {
  var a2, s2, o2, u2;
  let d2;
  let c2 = I(e14) ? e14 : {}, p2 = A(e14) ? e14 : r2, h2 = null !== (a2 = null != i2 ? i2 : r2) && void 0 !== a2 ? a2 : {}, m2 = Symbol(null !== (s2 = h2.name) && void 0 !== s2 ? s2 : "");
  if (E(c2)) {
    let e15;
    let r3 = () => null != e15 ? e15 : e15 = p2({}), i3 = eX({ value: eD.custom().optional(), $default: eD.custom().optional() }, (e16, i4) => {
      var a3;
      let { slots: s3 } = i4;
      return t(m2, null !== (a3 = e16.value) && void 0 !== a3 ? a3 : r3()), () => {
        var e17;
        return null === (e17 = s3.default) || void 0 === e17 ? void 0 : e17.call(s3);
      };
    }, { ...h2, name: `Provide(${null !== (o2 = h2.name) && void 0 !== o2 ? o2 : ""})` });
    return eU(i3, { use: () => l(m2, r3, true) });
  }
  let f2 = eD.object(c2), g2 = () => f2.create({}), v2 = () => null != d2 ? d2 : d2 = p2(g2()), y2 = eX({ ...c2, $default: eD.custom().optional() }, (e15, r3) => {
    let { slots: i3 } = r3;
    return t(m2, p2(e15)), () => {
      var e16;
      return null === (e16 = i3.default) || void 0 === e16 ? void 0 : e16.call(i3);
    };
  }, { ...h2, name: `Provide(${null !== (u2 = h2.name) && void 0 !== u2 ? u2 : ""})` });
  return eU(y2, { use: () => l(m2, v2, true) });
}
function eQ() {
  return new Proxy({}, { get: (e14, t2) => t2 });
}
let e0 = eQ(), e1 = { paddingX: [e0.paddingLeft, e0.paddingRight], paddingY: [e0.paddingTop, e0.paddingBottom], marginX: [e0.marginInlineStart, e0.marginInlineEnd], marginY: [e0.marginTop, e0.marginBottom], borderX: [e0.borderLeft, e0.borderRight], borderY: [e0.borderTop, e0.borderBottom], color: [e0.color, e0.fill], borderTopRadius: [e0.borderTopLeftRadius, e0.borderTopRightRadius], borderBottomRadius: [e0.borderBottomLeftRadius, e0.borderBottomRightRadius], borderRightRadius: [e0.borderTopRightRadius, e0.borderBottomRightRadius], borderLeftRadius: [e0.borderTopLeftRadius, e0.borderBottomLeftRadius], backgroundGradient: [e0.backgroundImage], boxSize: [e0.width, e0.height] }, e2 = eQ(), e5 = { font: e2.fontFamily, shadow: e2.boxShadow, rounded: e2.borderRadius, roundedTop: e2.borderTopRadius, roundedBottom: e2.borderBottomRadius, roundedLeft: e2.borderLeftRadius, roundedRight: e2.borderRightRadius, bg: e2.background, bgImage: e2.backgroundImage, bgSize: e2.backgroundSize, bgPosition: e2.backgroundPosition, bgRepeat: e2.backgroundRepeat, bgAttachment: e2.backgroundAttachment, bgColor: e2.backgroundColor, bgGradient: e2.backgroundGradient, bgClip: e2.backgroundClip, pos: e2.position, p: e2.padding, pt: e2.paddingTop, pr: e2.paddingRight, pl: e2.paddingLeft, pb: e2.paddingBottom, ps: e2.paddingInlineStart, pe: e2.paddingInlineEnd, px: e2.paddingX, py: e2.paddingY, m: e2.margin, mt: e2.marginTop, mr: e2.marginRight, ml: e2.marginLeft, mb: e2.marginBottom, ms: e2.marginInlineStart, me: e2.marginInlineEnd, mx: e2.marginX, my: e2.marginY, w: e2.width, minW: e2.minWidth, maxW: e2.maxWidth, h: e2.height, minH: e2.minHeight, maxH: e2.maxHeight }, e3 = eQ(), e4 = function() {
  for (var e14 = arguments.length, t2 = Array(e14), r2 = 0; r2 < e14; r2++)
    t2[r2] = arguments[r2];
  let i2 = [...t2];
  for (let e15 of t2)
    e5[e15] && i2.push(e5[e15]);
  return i2;
}, e9 = { _rtl: "[dir=rtl] &, &[dir=rtl]", _ltr: "[dir=ltr] &, &[dir=ltr]", _dark: "&[data-theme=dark]", _light: "&[data-theme=light]" };
var e8 = ((eF = e8 || {})[eF.var = 0] = "var", eF[eF.mixin = 1] = "mixin", eF);
class e6 {
  static create(e14, t2) {
    let { values: r2, on: i2, transform: a2 } = t2;
    return { type: e14, values: r2, on: i2, transform: a2, __Tokens: void 0, __ValueType: void 0, __CSSTokens: void 0 };
  }
  static color(e14) {
    return e6.create(0, { values: e14, on: e4(e3.color, e3.bgColor, e3.outlineColor, e3.borderColor, e3.accentColor, e3.fill, e3.stroke), transform: (e15) => ({ default: `rgb(${e15[0]}, ${e15[1]}, ${e15[2]})`, rgb: `${e15[0]} ${e15[1]} ${e15[2]}` }), fallback: "" });
  }
  static space(e14) {
    return e6.create(0, { values: e14, on: e4(e3.gap, e3.rowGap, e3.columnGap, e3.top, e3.right, e3.bottom, e3.left, e3.m, e3.ms, e3.me, e3.mt, e3.mr, e3.mb, e3.ml, e3.mx, e3.my, e3.p, e3.ps, e3.pe, e3.pt, e3.pr, e3.pb, e3.pl, e3.px, e3.py) });
  }
  static boxSize(e14) {
    return e6.create(0, { values: e14, on: e4(e3.w, e3.minW, e3.maxW, e3.h, e3.minH, e3.maxH, e3.boxSize), fallback: 0 });
  }
  static fontSize(e14) {
    return e6.create(0, { values: e14, on: e4(e3.fontSize), fallback: 0 });
  }
  static lineHeight(e14) {
    return e6.create(0, { values: e14, on: e4(e3.lineHeight), fallback: 0 });
  }
  static rounded(e14) {
    return e6.create(0, { values: e14, fallback: 0, on: e4(e3.rounded, e3.roundedTop, e3.roundedBottom, e3.roundedLeft, e3.roundedRight, e0.borderTopLeftRadius, e0.borderTopRightRadius, e0.borderBottomLeftRadius, e0.borderBottomRightRadius, e0.borderTopRightRadius, e0.borderBottomRightRadius, e0.borderTopLeftRadius, e0.borderBottomLeftRadius) });
  }
  static transitionTimingFunction(e14) {
    return e6.create(0, { values: e14, on: e4(e3.transitionTimingFunction) });
  }
  static transitionDuration(e14) {
    return e6.create(0, { values: e14, on: e4(e3.transitionDuration), transform: (e15) => `${e15}ms` });
  }
  static font(e14) {
    return e6.create(0, { values: e14, on: e4(e3.font) });
  }
  static fontWeight(e14) {
    return e6.create(0, { values: e14, on: e4(e3.fontWeight) });
  }
  static letterSpacing(e14) {
    return e6.create(0, { values: e14, on: e4(e3.letterSpacing) });
  }
  static shadow(e14) {
    return e6.create(0, { values: e14, on: e4(e3.shadow) });
  }
  static customMixin(e14, t2) {
    return e6.create(1, { values: t2, on: [e14] });
  }
  static mixin(e14) {
    return { ...e14, __mixin: true };
  }
}
let e7 = class e10 {
  get tokens() {
    return G(this._values);
  }
  get(t2, r2, i2) {
    let a2 = this._values[t2];
    if (j(a2)) {
      var s2;
      return i2 ? a2[r2] : null !== (s2 = a2[r2]) && void 0 !== s2 ? s2 : a2[e10.defaultMode];
    }
    return i2 ? r2 === e10.defaultMode ? a2 : void 0 : a2;
  }
  use(e14) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (this._cssVarRefs[e14])
      return t2 ? `${this._cssVarRefs[e14]}` : `var(${this._cssVarRefs[e14]})`;
  }
  constructor(t2, { cssVar: r2, transformFallback: i2 }) {
    this.__Tokens = void 0, this._values = {}, this._cssVarRefs = {}, e10.walkValues(t2.values, (e14, a2) => {
      let s2 = a2.join("."), o2 = (e15, r3) => {
        let a3 = t2.transform ? t2.transform(e15) : i2(e15);
        if (j(a3))
          for (let e16 in a3)
            r3(a3[e16], "default" === e16 ? "" : e16);
        else
          r3(a3, "");
      };
      if (F(this._cssVarRefs, [s2], r2(s2)), I(e14))
        for (let t3 in e14)
          o2(e14[t3], (e15, r3) => {
            F(this._values, [`${s2}${r3 ? `/${r3}` : ""}`, t3], e15);
          });
      else
        o2(e14, (e15, t3) => {
          F(this._values, [`${s2}${t3 ? `/${t3}` : ""}`], e15);
        });
    });
  }
};
e7.defaultMode = "_default", e7.walkValues = function(e14, t2) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let i2 in e14) {
    let a2 = e14[i2];
    if (I(a2)) {
      if (U(a2, "_default")) {
        t2(a2, [...r2, i2]);
        continue;
      }
      e7.walkValues(a2, t2, [...r2, i2]);
      continue;
    }
    t2(a2, [...r2, i2]);
  }
};
let te = class e11 {
  get tokens() {
    return G(this._values);
  }
  get(e14) {
    return this._values[e14];
  }
  constructor(t2) {
    this._values = {}, e11.walkValues(t2.values, (e14, t3) => {
      let r2 = t3.join(".");
      F(this._values, [r2], W(e14, "__mixin"));
    });
  }
};
te.walkValues = function(e14, t2) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  for (let i2 in e14) {
    let a2 = e14[i2];
    if (I(a2)) {
      if (U(a2, "__mixin")) {
        t2(a2, [...r2, i2]);
        continue;
      }
      te.walkValues(a2, t2, [...r2, i2]);
      continue;
    }
    t2(a2, [...r2, i2]);
  }
};
let tt = (e14) => A(e14) && U(e14, "token"), tr = class e12 {
  processAll(t2) {
    let r2 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], i2 = [], { state: a2, extends: s2, ...o2 } = t2;
    if (s2)
      for (let e14 of s2)
        i2.push(...this.processAll(e14, r2));
    if (a2) {
      let t3 = {}, r3 = {};
      e12.walkStateValues(a2, (e14, i3, a3) => {
        let s3 = `--${this.opt.varPrefix}-state-${i3.join("-")}`, o3 = Y(i3), l2 = {};
        this.process(l2, o3, e14, false), t3[s3] = l2[o3], F(r3, [...a3, o3], `var(${s3})`);
      }), i2.push(t3), i2.push(...this.processAll(r3));
    }
    if (!E(o2)) {
      let e14 = {};
      this.processTo(e14, o2, r2), i2.push(e14);
    }
    return i2;
  }
  processTo(e14, t2) {
    let r2 = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    for (let i2 in t2)
      this.process(e14, i2, t2[i2], r2);
  }
  process(t2, r2, i2) {
    var a2, s2, o2, l2;
    let u2 = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (this.opt.mixins[r2]) {
      let e14 = null === (a2 = this.opt.mixins[r2]) || void 0 === a2 ? void 0 : a2.get(i2);
      if (e14)
        for (let r3 in e14)
          this.process(t2, r3, e14[r3], u2);
      return;
    }
    if (I(i2)) {
      t2[r2 = null !== (s2 = e12.convertSelector(r2)) && void 0 !== s2 ? s2 : r2] = null !== (o2 = t2[r2]) && void 0 !== o2 ? o2 : {}, this.processTo(t2[r2], i2);
      return;
    }
    if (u2 && e1[r2 = null !== (l2 = e5[r2]) && void 0 !== l2 ? l2 : r2]) {
      for (let e14 of e1[r2])
        t2[e14] = this.opt.processValue(e14, i2);
      return;
    }
    t2[r2] = this.opt.processValue(r2, i2);
  }
  constructor(e14) {
    this.opt = e14;
  }
};
tr.supportedPseudoClasses = { active: "active", after: "after", anyLink: "any-link", before: "before", blank: "blank", checked: "checked", current: "current", default: "default", defined: "defined", disabled: "disabled", empty: "empty", enabled: "enabled", first: "first", firstChild: "first-child", firstLetter: "first-letter", firstLine: "first-line", firstOfType: "first-of-type", focus: "focus", focusVisible: "focus-visible", focusWithin: "focus-within", fullscreen: "fullscreen", future: "future", hover: "hover", inRange: "in-range", indeterminate: "indeterminate", invalid: "invalid", lastChild: "last-child", lastOfType: "last-of-type", left: "left", link: "link", localLink: "local-link", nthCol: "nth-col", nthLastCol: "nth-last-col", onlyChild: "only-child", onlyOfType: "only-of-type", optional: "optional", outOfRange: "out-of-range", past: "past", paused: "paused", pictureInPicture: "picture-in-picture", placeholderShown: "placeholder-shown", playing: "playing", readOnly: "read-only", readWrite: "read-write", required: "required", right: "right", root: "root", scope: "scope", target: "target", targetWithin: "target-within", userInvalid: "user-invalid", userValid: "user-valid", valid: "valid", visited: "visited" }, tr.convertSelector = (e14) => {
  if (e9[e14])
    return e9[e14];
  if (e14.startsWith("$") || e14.endsWith("$") || e14.startsWith("_")) {
    let t2 = "", r2 = "";
    if (e14.startsWith("_") ? (t2 = "&", e14 = e14.slice(1)) : e14.startsWith("$") ? (t2 = "& ", e14 = e14.slice(1)) : (r2 = " &", e14 = e14.slice(0, e14.length - 1)), e14.startsWith("data") || e14.startsWith("aria")) {
      let [i2, a2] = e14.split("__");
      return a2 ? `${t2}[${M(i2)}='${M(a2)}']${r2}` : `${t2}[${M(i2)}]${r2}`;
    }
    if ("&" == t2) {
      if (e14.startsWith("$"))
        return `${t2}::${e14.slice(1)}`;
      if (tr.supportedPseudoClasses[e14]) {
        let r4 = tr.supportedPseudoClasses[e14];
        return `${t2}:${r4}, ${t2}[data-${r4}]:not([data-${r4}='false']), ${t2}.${r4}`;
      }
      let [r3, i2] = e14.split("__"), a2 = M(r3);
      return i2 ? `${t2}[data-${a2}='${M(i2)}']` : `${t2}[data-${a2}]:not([data-${a2}='false'])`;
    }
  }
}, tr.walkStateValues = function(e14, t2) {
  let r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { default: {}, selectorPath: [], path: [] }, { $: i2, ...a2 } = e14;
  for (let e15 in a2) {
    var s2;
    let o2 = a2[e15], l2 = null !== (s2 = a2.default) && void 0 !== s2 ? s2 : r2.default, u2 = null != i2 ? i2 : z(l2, [...r2.path.slice(1), "$"]), d2 = u2 ? [...r2.selectorPath, u2] : r2.selectorPath, c2 = [...r2.path, e15];
    if (I(o2)) {
      tr.walkStateValues(o2, t2, { path: c2, selectorPath: d2, default: l2 });
      continue;
    }
    t2(o2, c2, d2);
  }
};
let ti = (e14) => e14.reduce((e15, t2) => ({ ...e15, [t2]: true }), {}), tn = class e13 {
  static create(t2, r2) {
    return new e13(t2, r2);
  }
  cssVar(e14, t2) {
    return `--${this.varPrefix}-${M(e14)}-${t2.replaceAll(/[./]/g, "-")}`;
  }
  get rootCSSVars() {
    return this.cssVars;
  }
  unstable_css(e14, t2) {
    var r2;
    let i2 = null != t2 ? t2 : {};
    return i2.__emotion_styles = null !== (r2 = i2.__emotion_styles) && void 0 !== r2 ? r2 : _(this.unstable_sx(t2), null == e14 ? void 0 : e14.registered, {}), i2.__emotion_styles;
  }
  constructor(t2, r2 = {}) {
    var i2, a2;
    for (let s2 in this.cssVars = {}, this.tokens = {}, this.propValues = {}, this.mixins = {}, this.dp = (e14) => 0 === e14 ? 0 : `calc(${e14} * var(${this.cssVar("space", "dp")}))`, this.transformFallback = (t3, r3) => e13.propsCanBaseDp[t3] && N(r3) ? e13.propsCanPercent[t3] && 1 > Math.abs(r3) ? `${100 * r3}%` : this.dp(r3) : r3, this.token = new Proxy({}, { get: (e14, t3) => {
      var r3, i3;
      return this.tokens[t3] ? Object.assign((e15) => {
        var r4;
        return null === (r4 = this.tokens[t3]) || void 0 === r4 ? void 0 : r4.get(e15, `_${this.mode}`);
      }, { tokens: null === (r3 = this.tokens[t3]) || void 0 === r3 ? void 0 : r3.tokens }) : this.mixins[t3] ? Object.assign((e15) => {
        var r4;
        return null === (r4 = this.mixins[t3]) || void 0 === r4 ? void 0 : r4.get(e15);
      }, { tokens: null === (i3 = this.mixins[t3]) || void 0 === i3 ? void 0 : i3.tokens }) : void 0;
    } }), this.processValue = (e14, t3) => {
      var r3, i3, a3;
      if (tt(t3)) {
        let r4 = null === (i3 = this.propValues[e14]) || void 0 === i3 ? void 0 : i3.use(t3.token, true);
        return r4 ? t3(r4) : void 0;
      }
      return null !== (a3 = null === (r3 = this.propValues[e14]) || void 0 === r3 ? void 0 : r3.use(t3)) && void 0 !== a3 ? a3 : this.transformFallback(e14, t3);
    }, this.unstable_sx = (e14) => new tr({ mixins: this.mixins, varPrefix: this.varPrefix, processValue: this.processValue }).processAll(e14), this.varPrefix = null !== (i2 = r2.varPrefix) && void 0 !== i2 ? i2 : "vk", this.mode = null !== (a2 = r2.mode) && void 0 !== a2 ? a2 : "light", F(this.cssVars, [this.cssVar("space", "dp")], "0.1rem"), t2) {
      let e14 = t2[s2];
      if (e14.type == e8.var) {
        let t3 = new e7(e14, { cssVar: (e15) => this.cssVar(s2, e15), transformFallback: (t4) => this.transformFallback(e14.on[0], t4) });
        for (let r3 of (this.tokens[s2] = t3, e14.on))
          this.propValues[r3] = t3;
        for (let e15 of t3.tokens)
          for (let r3 of ["light", "dark"]) {
            let i3 = r3 === this.mode ? "_default" : `_${r3}`, a3 = t3.get(e15, i3, true);
            D(a3) || ("_default" === i3 ? F(this.cssVars, [this.cssVar(s2, e15)], a3) : F(this.cssVars, [i3, this.cssVar(s2, e15)], a3));
          }
        continue;
      }
      if (e14.type == e8.mixin) {
        let t3 = new te(e14);
        for (let r3 of e14.on)
          this.mixins[r3] = t3;
      }
    }
  }
};
tn.propsCanPercent = ti([...e6.boxSize({}).on]), tn.propsCanBaseDp = ti([...e6.boxSize({}).on, ...e6.space({}).on, ...e6.fontSize({}).on, ...e6.letterSpacing({}).on, ...e6.lineHeight({}).on, ...e6.rounded({}).on]);
let ta = { shadow: e6.shadow({ 0: { _default: "0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0)", _dark: "0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(0, 0, 0, 0)" }, 1: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)", _dark: "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 2: { _default: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)", _dark: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)" }, 3: { _default: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)" }, 4: { _default: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)", _dark: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)" }, 5: { _default: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)", _dark: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)" } }), elevation: e6.customMixin("elevation", { 0: e6.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "0", _hover: { shadow: "1" } }), 1: e6.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "1", _hover: { shadow: "2" } }), 2: e6.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "2", _hover: { shadow: "3" } }), 3: e6.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "3", _hover: { shadow: "4" } }), 4: e6.mixin({ transitionDuration: "md4", transitionTimingFunction: "standard", shadow: "4", _hover: { shadow: "5" } }) }) }, ts = { font: e6.font({ brand: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', plain: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"', code: "'Lucida Console',Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace" }), fontWeight: e6.fontWeight({ regular: 400, medium: 500, bold: 700 }), textStyle: e6.customMixin("textStyle", { sys: { "display-large": e6.mixin({ lineHeight: 64, fontSize: 57, letterSpacing: -0.25, fontWeight: "regular", font: "brand" }), "display-medium": e6.mixin({ lineHeight: 52, fontSize: 45, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "display-small": e6.mixin({ lineHeight: 44, fontSize: 36, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-large": e6.mixin({ lineHeight: 40, fontSize: 32, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-medium": e6.mixin({ lineHeight: 36, fontSize: 28, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "headline-small": e6.mixin({ lineHeight: 32, fontSize: 24, letterSpacing: 0, fontWeight: "regular", font: "plain" }), "title-large": e6.mixin({ lineHeight: 28, fontSize: 22, letterSpacing: 0, fontWeight: "regular", font: "brand" }), "title-medium": e6.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.15, fontWeight: "medium", font: "plain" }), "title-small": e6.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-large": e6.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.1, fontWeight: "medium", font: "plain" }), "label-medium": e6.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "label-small": e6.mixin({ lineHeight: 16, fontSize: 11, letterSpacing: 0.5, fontWeight: "medium", font: "plain" }), "body-large": e6.mixin({ lineHeight: 24, fontSize: 16, letterSpacing: 0.5, fontWeight: "regular", font: "plain" }), "body-medium": e6.mixin({ lineHeight: 20, fontSize: 14, letterSpacing: 0.25, fontWeight: "regular", font: "plain" }), "body-small": e6.mixin({ lineHeight: 16, fontSize: 12, letterSpacing: 0.4, fontWeight: "regular", font: "plain" }) } }) }, to = { 0: true, 10: true, 20: true, 30: true, 40: true, 50: true, 60: true, 70: true, 80: true, 90: true, 95: true, 100: true }, tl = (e14) => {
  let t2 = C(e14);
  return [t2.r, t2.g, t2.b];
}, tu = (e14) => ({ primary: true, secondary: true, tertiary: true, error: true, warning: true, success: true })[e14], td = class {
  normalizeRoleRules() {
    let e14 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t2 = { shadow: ["neutral", 0, 0], scrim: ["neutral", 0, 0], outline: ["neutralVariant", 60, 50], "outline-variant": ["neutralVariant", 30, 80], surface: ["neutral", 10, 99], "on-surface": ["neutral", 90, 10], "surface-variant": ["neutralVariant", 30, 90], "on-surface-variant": ["neutralVariant", 80, 30], "surface-dim": ["neutral", 6, 87], "surface-bright": ["neutral", 24, 98], "surface-container-lowest": ["neutral", 4, 100], "surface-container-low": ["neutral", 10, 96], "surface-container": ["neutral", 12, 94], "surface-container-high": ["neutral", 17, 92], "surface-container-highest": ["neutral", 22, 90], "inverse-surface": ["neutral", 90, 20], "inverse-on-surface": ["neutral", 20, 95], "inverse-primary": ["primary", 40, 80] };
    for (let e15 in this.seeds)
      e15.startsWith("neutral") || (t2[e15] = [e15, 80, 40], t2[`on-${e15}`] = [e15, 20, 100], t2[`${e15}-container`] = [e15, 30, 90], t2[`on-${e15}-container`] = [e15, 90, 10]);
    return { ...t2, ...e14 };
  }
  getThemeRoleColors(e14) {
    let t2 = {}, r2 = {};
    for (let i2 in e14) {
      let [a2, s2, o2] = e14[i2];
      this.seeds[a2] && (r2[i2] = this.seeds[a2].tone(s2), t2[i2] = this.seeds[a2].tone(o2));
    }
    return [t2, r2];
  }
  toTokenObject() {
    let e14 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t2 = (e15) => ({ type: "color", value: `rgb(${tl(e15).join(",")})` }), r2 = { seed: {}, palette: {}, sys: { dark: {}, light: {} } };
    for (let e15 in this.seeds)
      r2.seed[e15] = t2(this.seeds[e15].keyColor.toInt()), Object.keys(to).forEach((i3) => {
        r2.palette[e15] = { ...r2.palette[e15] || {}, [i3]: t2(this.seeds[e15].tone(parseInt(i3))) };
      });
    let i2 = this.normalizeRoleRules(e14);
    for (let e15 in i2) {
      let [t3, a2, s2] = i2[e15];
      r2.sys.dark[e15] = { value: `{palette.${t3}.${a2}}`, type: "color" }, r2.sys.light[e15] = { value: `{palette.${t3}.${s2}}`, type: "color" };
    }
    return r2;
  }
  toDesignTokens() {
    let e14 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [t2, r2] = this.getThemeRoleColors(this.normalizeRoleRules(e14)), i2 = {}, a2 = {};
    for (let e15 in t2)
      if (i2[`${e15}`] = { _default: tl(t2[e15]), _dark: tl(r2[e15]) }, tu(e15) && (a2[`${e15}`] = e6.mixin({ bgColor: `sys.${e15}`, color: `sys.on-${e15}` }), a2[`${e15}-container`] = e6.mixin({ bgColor: `sys.${e15}-container`, color: `sys.on-${e15}-container` })), e15.startsWith("surface")) {
        if (e15.includes("container")) {
          a2[`${e15}`] = e6.mixin({ bgColor: `sys.${e15}`, color: "sys.on-surface" });
          continue;
        }
        a2[`${e15}`] = e6.mixin({ bgColor: `sys.${e15}`, color: "sys.on-surface" }), a2[`on-${e15}`] = e6.mixin({ bgColor: `sys.on-${e15}`, color: "sys.inverse-on-surface" });
      }
    let s2 = (e15) => Object.keys(to).reduce((t3, r3) => ({ ...t3, [r3]: tl(e15.tone(parseInt(r3))) }), {}), o2 = e6.color({ ...P(this.seeds, (e15) => s2(e15)), white: [255, 255, 255], black: [0, 0, 0], sys: i2 }), l2 = e6.customMixin("containerStyle", { sys: a2 });
    return { color: o2, containerStyle: l2 };
  }
  constructor(e14) {
    this.seeds = e14;
  }
};
td.toHEX = (e14) => `#${tl(e14).map((e15) => B(e15.toString(16), 2, "0")).join("")}`, td.fromColors = (e14) => {
  let { primary: t2, secondary: r2, tertiary: i2, neutral: a2, neutralVariant: s2, error: o2, ...l2 } = e14, u2 = b.contentFromColors({ primary: w(t2), secondary: r2 ? w(r2) : void 0, tertiary: i2 ? w(i2) : void 0, error: o2 ? w(o2) : void 0 });
  return a2 && (u2.n1 = $.fromHueAndChroma(w(a2), 4)), s2 && (u2.n2 = $.fromHueAndChroma(w(s2), 8)), new td({ ...P(l2, (e15) => $.fromInt(w(e15))), primary: u2.a1, secondary: u2.a2, tertiary: u2.a3, neutral: u2.n1, neutralVariant: u2.n2, error: u2.error });
};
let tc = (e14, t2, r2, i2) => Object.assign(k(e14, t2, r2, i2), { toString: () => `cubic-bezier(${e14}, ${t2}, ${r2}, ${i2})` }), tp = { duration: { sm1: 50, sm2: 100, sm3: 150, sm4: 200, md1: 250, md2: 300, md3: 350, md4: 400, lg1: 450, lg2: 500, lg3: 550, lg4: 600, xl1: 700, xl2: 800, xl3: 900, xl4: 1e3 }, easing: { linear: tc(0, 0, 1, 1), standard: Object.assign(tc(0.2, 0, 0, 1), { accelerate: tc(0.3, 0, 1, 1), decelerate: tc(0, 0, 0, 1) }), emphasized: Object.assign(tc(0.2, 0, 0, 1), { accelerate: tc(0.3, 0, 0.8, 0.15), decelerate: tc(0.05, 0.7, 0.1, 1) }), legacy: Object.assign(tc(0.4, 0, 0.2, 1), { decelerate: tc(0, 0, 0.2, 1), accelerate: tc(0.4, 0, 1, 1) }) } }, th = { transitionDuration: e6.transitionDuration(tp.duration), transitionTimingFunction: e6.transitionTimingFunction({ linear: tp.easing.linear.toString(), standard: tp.easing.standard.toString(), "standard-accelerate": tp.easing.standard.accelerate.toString(), "standard-decelerate": tp.easing.standard.decelerate.toString(), emphasized: tp.easing.emphasized.toString(), "emphasized-decelerate": tp.easing.emphasized.decelerate.toString(), "emphasized-accelerate": tp.easing.emphasized.accelerate.toString(), legacy: tp.easing.legacy.toString(), "legacy-decelerate": tp.easing.legacy.decelerate.toString(), "legacy-accelerate": tp.easing.legacy.accelerate.toString() }) }, tm = e6.rounded({ xs: 4, sm: 8, md: 12, lg: 16, xl: 28 }), tf = td.fromColors({ primary: "#1270f5", secondary: "#8a90a5", tertiary: "#b58391", neutral: "#5e5e5e", error: "#d93f23", warning: "#e69c00", success: "#5ac220" }), tg = { ...ts, ...th, ...ta, rounded: tm, ...tf.toDesignTokens({ primary: ["primary", 80, 50] }) }, tv = tn.create(tg, { varPrefix: "vk" }), ty = eZ(() => tv, { name: "Theme" }), tx = eZ(() => S({ key: "css" }), { name: "Cache" }), tb = (e14) => (t2) => {
  if (t2.serialized) {
    if (t2.withoutScoping)
      e14.insert("", t2.serialized, e14.sheet, true);
    else {
      var r2;
      T(e14, t2.serialized, null === (r2 = t2.isStringTag) || void 0 === r2 || r2);
    }
  }
}, tw = eX({ sx: eD.custom(), component: eD.custom().optional().default("div") }, (e14, t2) => {
  var r2;
  let { slots: i2 } = t2, a2 = ty.use(), s2 = tx.use(), o2 = a2.unstable_css(s2, null !== (r2 = e14.sx) && void 0 !== r2 ? r2 : {}), l2 = () => "0" != o2.name ? `${s2.key}-${o2.name}` : "", u2 = tb(s2);
  return v(() => {
    u2({ serialized: o2, isStringTag: true });
  }), () => {
    var t3;
    let r3 = null !== (t3 = e14.component) && void 0 !== t3 ? t3 : "div";
    return d(r3, { class: l2(), children: i2 });
  };
}), t$ = eX({ styles: eD.custom() }, (e14) => {
  let { styles: t2 } = e14, r2 = ty.use(), i2 = tx.use(), a2 = tb(i2), s2 = r2.unstable_css(i2, X(t2) ? { "&": t2 } : t2);
  return y(() => {
    a2({ serialized: s2, withoutScoping: true });
  }), () => null;
});
eX(() => {
  let e14 = ty.use(), t2 = e14.rootCSSVars;
  return () => d(t$, { styles: { ":host, :root, [data-theme]": t2, "*, *::after, *::before": { boxSizing: "border-box" }, html: { fontSize: "10px" }, a: { color: "inherit" }, body: { textStyle: "sys.body-medium" } } });
});
let tk = eZ(() => ({ mountPoint: () => document.body }), { name: "OverlaySetting" }), tS = eZ(() => new t_(c(null), c(null), () => false), { name: "Overlay" });
class t_ {
  topmost() {
    return 0 == this.children.filter((e14) => e14.isOpen()).length;
  }
  constructor(e14, t2, r2) {
    this.triggerRef = e14, this.contentRef = t2, this.isOpen = r2, this.children = [], this.add = (e15) => (this.children = [...this.children, e15], () => {
      this.children = this.children.filter((t3) => t3 !== e15);
    }), this.isClickInside = (e15) => {
      for (let t4 of this.children)
        if (t4.isClickInside(e15))
          return true;
      let t3 = p(this.triggerRef), r3 = p(this.contentRef);
      return t3 && (t3 === e15.target || e15.composedPath().includes(t3)) || r3 && (r3 === e15.target || e15.composedPath().includes(r3));
    };
  }
}
let tR = eX({ isOpen: eD.boolean().optional(), style: eD.custom().optional(), contentRef: eD.custom().optional(), triggerRef: eD.custom().optional(), onClickOutside: eD.custom(), onEscKeydown: eD.custom(), onContentBeforeMount: eD.custom(), $transition: eD.custom().optional(), $default: eD.custom().optional() }, (e14, t2) => {
  var r2;
  let { slots: i2, attrs: a2, emit: s2 } = t2, o2 = e14.contentRef || c(null), l2 = new t_(null !== (r2 = e14.triggerRef) && void 0 !== r2 ? r2 : c(null), o2, () => !!e14.isOpen), p2 = tk.use(), f2 = tS.use();
  return u(f2.add(l2)), window && eG(eY(o2, "value"), eK((e15) => {
    if (!e15)
      return;
    let t3 = (e16) => {
      l2.isClickInside(e16) || s2("click-outside", e16);
    };
    return window.addEventListener("pointerdown", t3), () => {
      window.removeEventListener("pointerdown", t3);
    };
  }), eK((e15) => {
    if (!e15)
      return;
    let t3 = (e16) => {
      "Escape" === e16.key && l2.topmost() && s2("esc-keydown", e16);
    };
    return window.addEventListener("keydown", t3), () => {
      window.removeEventListener("keydown", t3);
    };
  }), eq()), () => {
    var t3;
    let r3 = e14.isOpen ? h(d("div", { ...a2, ref: o2, style: e14.style, children: d(tS, { value: l2, children: null === (t3 = i2.default) || void 0 === t3 ? void 0 : t3.call(i2) }) }), { onVnodeBeforeMount: () => {
      s2("content-before-mount");
    } }) : null;
    return d(m, { to: p2.mountPoint(), children: i2.transition ? i2.transition({ content: r3 }) : r3 });
  };
}, { inheritAttrs: false, name: "Overlay" });
eX({ isOpen: tR.propTypes.isOpen, onClickOutside: tR.propTypes.onClickOutside, placement: eD.custom().optional(), modifiers: eD.custom().optional(), $transition: tR.propTypes.$transition, $content: eD.custom(), $default: eD.custom() }, (e14, t2) => {
  let { slots: r2, emit: i2, attrs: a2 } = t2, o2 = c(null), l2 = c(null);
  return s(() => l2.value, (t3) => {
    if (t3) {
      var r3, i3;
      R(o2.value, t3, { placement: null !== (r3 = e14.placement) && void 0 !== r3 ? r3 : "bottom", modifiers: [...null !== (i3 = e14.modifiers) && void 0 !== i3 ? i3 : [], O] });
    }
  }), () => {
    var t3, s2;
    let u2 = null === (t3 = r2.default) || void 0 === t3 ? void 0 : t3.call(r2)[0];
    return u2 ? f(g, { children: [h(u2, { ...a2, onVnodeMounted: (e15) => {
      o2.value = function e16(t4) {
        if (t4) {
          if (t4 instanceof HTMLElement)
            return t4;
          if (t4 instanceof Text)
            return e16(t4.nextElementSibling);
        }
        return null;
      }(e15.el);
    } }), d(tR, { triggerRef: o2, contentRef: l2, isOpen: e14.isOpen, onClickOutside: (e15) => i2("click-outside", e15), style: { zIndex: 100 }, $transition: r2.transition, children: null === (s2 = r2.content) || void 0 === s2 ? void 0 : s2.call(r2) })] }) : null;
  };
}, { name: "Popper", inheritAttrs: false });
let tO = x(() => {
  let e14 = c({ seed: { primary: "#1270f5", secondary: "#8a90a5", tertiary: "#b58391", neutral: "#5e5e5e", neutralVariant: "#757780", error: "#d93f23", warning: "#e69c00", success: "#5ac220" }, rules: V.fromColors({ primary: "#1270f5", secondary: "#8a90a5", tertiary: "#b58391", neutral: "#5e5e5e", neutralVariant: "#757780", error: "#d93f23", warning: "#e69c00", success: "#5ac220" }).normalizeRoleRules() });
  return () => {
    let t2 = V.fromColors(e14.value.seed);
    return f(tw, { sx: { display: "flex", flexDirection: "column", gap: 24 }, children: [d(tw, { sx: { display: "flex" }, children: q(e14.value.seed, (t3, r2) => f(tw, { sx: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }, children: [d("div", { children: r2 }), d("input", { type: "color", value: t3, onInput: (t4) => {
      e14.value = { ...e14.value, seed: { ...e14.value.seed, [r2]: t4.target.value } };
    } })] })) }), d(tw, { sx: { display: "flex", flexWrap: "wrap", gap: 16 }, children: q(e14.value.rules, (r2, i2) => {
      let [a2, s2, o2] = r2;
      return f(tw, { sx: { display: "flex", alignItems: "center", width: "30%" }, children: [d(tw, { sx: { flex: 1 }, children: i2 }), f(tw, { sx: { flex: 1, display: "flex", gap: 4, "& input": { width: "40%", border: "1px solid", borderColor: "sys.outline" } }, children: [d("input", { type: "number", value: s2, max: 100, min: 0, style: { backgroundColor: V.toHEX(t2.seeds[a2].tone(s2)), color: s2 > 50 ? "black" : "white" }, "data-color": V.toHEX(t2.seeds[a2].tone(s2)), "data-theme": "dark", onChange: (t3) => {
        try {
          let r3 = parseInt(t3.target.value);
          e14.value = { ...e14.value, rules: { ...e14.value.rules, [i2]: [a2, r3, o2] } };
        } catch (e15) {
        }
      } }), d("input", { type: "number", max: 100, min: 0, value: o2, style: { backgroundColor: V.toHEX(t2.seeds[a2].tone(o2)), color: o2 > 50 ? "black" : "white" }, "data-color": V.toHEX(t2.seeds[a2].tone(o2)), "data-theme": "light", onChange: (t3) => {
        try {
          let r3 = parseInt(t3.target.value);
          e14.value = { ...e14.value, rules: { ...e14.value.rules, [i2]: [a2, s2, r3] } };
        } catch (e15) {
        }
      } })] })] });
    }) }), d("pre", { children: d("code", { children: JSON.stringify(t2.toTokenObject(e14.value.rules), null, 2) }) }), d("pre", { children: d("code", { children: JSON.stringify(e14.value, null, 2) }) })] });
  };
}), tC = Object.assign(tO, { displayName: "ColorPaletteDefault" });
export {
  tC as default
};
