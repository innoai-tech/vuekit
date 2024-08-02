var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { g as e, i as t } from "./vendor-innoai-tech-lodash.BQbaWOEd.chunk.js";
let r = { path: [], branch: [] };
class n extends TypeError {
  constructor(e2, t2) {
    let r2;
    let { message: n2, explanation: i2, ...a2 } = e2, { path: s2 } = e2, o2 = 0 === s2.length ? n2 : `At path: ${s2.join(".")} -- ${n2}`;
    super(null != i2 ? i2 : o2);
    __publicField(this, "value");
    __publicField(this, "key");
    __publicField(this, "type");
    __publicField(this, "refinement");
    __publicField(this, "path");
    __publicField(this, "branch");
    __publicField(this, "failures");
    null != i2 && (this.cause = o2), Object.assign(this, a2), this.name = this.constructor.name, this.failures = () => null != r2 ? r2 : r2 = [e2, ...t2()];
  }
}
class i {
  constructor(e2) {
    __publicField(this, "Type");
    __publicField(this, "Schema");
    this.schema = e2;
  }
  static define() {
    let e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => true;
    return new class extends i {
      validator(t2, r2) {
        return e2(t2, r2);
      }
    }(null);
  }
  get type() {
    var e2;
    return null !== (e2 = (this.schema || {}).type) && void 0 !== e2 ? e2 : "unknown";
  }
  *entries(e2) {
    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  }
  refiner(e2, t2) {
    return [];
  }
  validator(e2, t2) {
    return [];
  }
  coercer(e2, t2) {
    return e2;
  }
  validate(e2) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return c(e2, this, t2);
  }
  create(e2) {
    let t2 = c(e2, this, { coerce: true });
    if (t2[0]) throw t2[0];
    return t2[1];
  }
  mask(e2) {
    let t2 = c(e2, this, { coerce: true, mask: true });
    if (t2[0]) throw t2[0];
    return t2[1];
  }
  default(e2) {
    return o.create(this, e2);
  }
  optional() {
    return u.create(this);
  }
  use() {
    for (var e2 = arguments.length, t2 = Array(e2), r2 = 0; r2 < e2; r2++) t2[r2] = arguments[r2];
    return t2.reduce((e3, t3) => t3(e3), this);
  }
  get unwrap() {
    return this;
  }
  get meta() {
    if (this.schema) {
      var t2;
      return null !== (t2 = e(this.schema, ["$meta"])) && void 0 !== t2 ? t2 : {};
    }
    return {};
  }
  getMeta(t2) {
    if (this.schema) return e(this.schema, ["$meta", t2]);
  }
  getSchema(t2) {
    if (t2 && this.schema) return e(this.schema, [t2]);
  }
  get isOptional() {
    return false;
  }
}
class a extends i {
  static of(e2, t2) {
    return new a({ ...t2, $unwrap: e2 });
  }
  static refine(e2, t2, r2) {
    return new class extends a {
      *refiner(n2, i2) {
        for (let a2 of (yield* this.unwrap.refiner(n2, i2), l(t2(n2, i2), i2, e2, n2))) yield { ...a2, refinement: Object.keys(r2).join(",") };
      }
    }({ ...r2, $unwrap: e2 });
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
    return { ...this.unwrap.meta, ...e(this.schema, ["$meta"], {}) };
  }
  getMeta(t2) {
    if (this.schema) {
      var r2;
      return null !== (r2 = e(this.schema, ["$meta", t2])) && void 0 !== r2 ? r2 : this.unwrap.getMeta(t2);
    }
  }
  getSchema(t2) {
    if (t2) {
      var r2;
      return null !== (r2 = e(this.schema, [t2])) && void 0 !== r2 ? r2 : this.unwrap.getSchema(t2);
    }
  }
  *entries(e2) {
    let t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r;
    yield* this.unwrap.entries(e2, { ...t2, node: s.create(this, t2.node) });
  }
  validator(e2, t2) {
    return l(this.unwrap.validator(e2, t2), t2, this, e2);
  }
  refiner(e2, t2) {
    return l(this.unwrap.refiner(e2, t2), t2, this, e2);
  }
  coercer(e2, t2) {
    return this.unwrap.coercer(e2, t2);
  }
}
class s extends a {
  static create(e2, t2) {
    return new s({ $unwrap: e2, $parent: t2 || null });
  }
}
class o extends a {
  static create(e2, t2) {
    return new o({ $unwrap: e2, default: t2 });
  }
  coercer(e2, t2) {
    return void 0 === e2 ? this.schema.default : super.unwrap.coercer(e2, t2);
  }
}
class u extends a {
  static create(e2) {
    return new u({ $unwrap: e2 });
  }
  get isOptional() {
    return true;
  }
  refiner(e2, t2) {
    return void 0 === e2 || super.unwrap.refiner(e2, t2);
  }
  validator(e2, t2) {
    return void 0 === e2 || super.unwrap.validator(e2, t2);
  }
}
function* l(e2, r2, n2, i2) {
  var a2;
  let s2 = e2;
  for (let e3 of (t(a2 = s2) && "function" == typeof a2[Symbol.iterator] || (s2 = [s2]), s2)) {
    let t2 = function(e4, t3, r3, n3) {
      if (true === e4) return;
      let i3 = {}, { path: a3, branch: s3, node: o2 } = t3, { type: u2 } = r3, { refinement: l2, message: c2 = `Expected a value of type \`${u2}\`${l2 ? ` with refinement \`${l2}\`` : ""}, but received: \`${n3}\`` } = i3 = false === e4 ? {} : "string" == typeof e4 ? { message: e4 } : e4;
      return { value: n3, type: u2, refinement: l2, key: a3[a3.length - 1], path: a3, branch: s3, node: o2, ...i3, message: c2 };
    }(e3, r2, n2, i2);
    t2 && (yield t2);
  }
}
function c(e2, r2) {
  let i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a2 = function* e3(r3, n2) {
    let i3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, { path: a3 = [], branch: o3 = [r3], node: u2 = s.create(n2, null), coerce: c2 = false, mask: h2 = false } = i3, d2 = { mask: h2, path: a3, branch: o3, node: u2 }, p2 = r3;
    c2 && (p2 = n2.coercer(p2, d2));
    let f2 = 0;
    for (let e4 of l(n2.validator(p2, d2), d2, n2, p2)) e4.explanation = i3.message, f2 = 2, yield [e4, void 0];
    for (let [r4, l2, m2] of n2.entries(p2, d2)) for (let n3 of e3(l2, m2, { path: void 0 === r4 ? a3 : [...a3, r4], branch: void 0 === r4 ? o3 : [...o3, l2], node: void 0 === r4 ? u2 : s.create(m2, u2), coerce: c2, mask: h2, message: i3.message })) n3[0] ? (f2 = null != n3[0].refinement ? 1 : 2, yield [n3[0], void 0]) : c2 && (l2 = n3[1], void 0 === r4 ? p2 = l2 : p2 instanceof Map ? p2.set(r4, l2) : p2 instanceof Set ? p2.add(l2) : t(p2) && (void 0 !== l2 || r4 in p2) && (p2[r4] = l2));
    if (2 !== f2) for (let e4 of l(n2.refiner(p2, d2), d2, n2, p2)) e4.explanation = i3.message, f2 = 1, yield [e4, void 0];
    0 === f2 && (yield [void 0, p2]);
  }(e2, r2, i2), o2 = function(e3) {
    let { done: t2, value: r3 } = e3.next();
    return t2 ? void 0 : r3;
  }(a2);
  return o2[0] ? [new n(o2[0], function* () {
    for (let e3 of a2) e3[0] && (yield e3[0]);
  }), void 0] : [void 0, o2[1]];
}
class h extends i {
  static create() {
    return new h(false);
  }
  get type() {
    return "never";
  }
  validator(e2, t2) {
    return false;
  }
}
class d extends i {
  static create() {
    return new d({ type: "string" });
  }
  get type() {
    return this.schema.type;
  }
  validator(e2, t2) {
    return "string" == typeof e2;
  }
}
class p extends i {
  static create() {
    return new p({ type: "boolean" });
  }
  get type() {
    return this.schema.type;
  }
  validator(e2, t2) {
    return "boolean" == typeof e2;
  }
  coercer(e2, t2) {
    try {
      return void 0 != e2 ? "true" === String(e2) : void 0;
    } catch (e3) {
      return;
    }
  }
}
class f extends i {
  static create(e2) {
    return new f({ enum: e2 });
  }
  static literal(e2) {
    return new f({ enum: [e2] });
  }
  static nativeEnum(e2) {
    return new f({ enum: Object.values(e2) });
  }
  get type() {
    return "enums";
  }
  validator(e2, t2) {
    return this.schema.enum.includes(e2);
  }
}
class m extends i {
  static create(e2) {
    let t2 = [];
    if (e2) for (let r2 in e2) {
      let n2 = e2[r2];
      (null == n2 ? void 0 : n2.isOptional) || t2.push(r2);
    }
    return new m({ type: "object", properties: e2, required: t2, additionalProperties: h.create() });
  }
  get type() {
    return this.schema.type;
  }
  *entries(e2, r2) {
    if (t(e2)) {
      var n2;
      let t2 = new Set(Object.keys(e2));
      if (this.schema.properties) for (let r3 in this.schema.properties) t2.delete(r3), yield [r3, e2[r3], this.schema.properties[r3]];
      if ((null === (n2 = r2.node) || void 0 === n2 ? void 0 : n2.type) !== "intersection") for (let r3 of t2) yield [r3, e2[r3], this.schema.additionalProperties];
    }
  }
  validator(e2, r2) {
    return t(e2);
  }
  coercer(e2, r2) {
    if (t(e2)) {
      let t2 = { ...e2 };
      if (r2.mask) {
        let e3 = this.schema.properties;
        if (e3) for (let r3 in t2) void 0 === e3[r3] && delete t2[r3];
      }
      return t2;
    }
    return e2;
  }
}
let v = d.create, y = p.create, w = f.create, g = m.create, $ = i.define;
export {
  i as T,
  y as b,
  $ as c,
  w as e,
  g as o,
  v as s
};
