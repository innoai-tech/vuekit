import { r as e } from "./rolldown-runtime.D8qhy2Lt.chunk.js";
import { G as t, J as r, K as i, R as a, U as n, dt as s, lt as o, q as c, rt as l, st as u, tt as p } from "./vendor-innoai-tech-vuekit.CrdESE0J.chunk.js";
import { G as d } from "./index.7YZvkNcF.entry.js";
var f, h = e(d()), m = class {
	static getOwnPropertyNames(e) {
		return h.getMetadataKeys(e);
	}
	static get(e, t) {
		return h.getMetadata(t, e);
	}
	static define(e, t, i, n) {
		if (e && e.constructor && e.constructor != Object) {
			if (r(i)) return void h.defineMetadata(t, a(h.getMetadata(t, e) ?? n ?? {}, i), e);
			h.defineMetadata(t, i, e);
		}
	}
};
let y = (e) => "function" == typeof e && `${e}`.startsWith("class"), g = {
	path: [],
	branch: []
};
var v = class extends TypeError {
	value;
	key;
	type;
	refinement;
	path;
	branch;
	failures;
	constructor(e, t) {
		let r, { message: i, explanation: a,...n } = e, { path: s } = e, o = 0 === s.length ? i : `At path: ${s.join(".")} -- ${i}`;
		super(a ?? o), null != a && (this.cause = o), Object.assign(this, n), this.name = this.constructor.name, this.failures = () => r ??= [e, ...t()];
	}
};
let w = (e) => !!e && e[b] == b, b = Symbol("Type");
function* O(e, t, r, a) {
	let n, s = e;
	for (let e of (("object" != typeof (n = s) || "function" != typeof n[Symbol.iterator]) && (s = [s]), s)) {
		let n = function(e, t, r, a) {
			if (!0 === e) return;
			let n = {};
			n = !1 === e ? {} : u(e) ? { message: e } : e;
			let { path: s, branch: o, node: c } = t, { type: l } = r, { refinement: p, message: d = i(a) ? "Required" : `Expected a value of type \`${l}\`${p ? ` with refinement \`${p}\`` : ""}, but received: \`${a}\`` } = n;
			return {
				...n,
				value: a,
				type: l,
				refinement: p,
				key: s[s.length - 1],
				path: s,
				branch: o,
				node: c,
				message: d
			};
		}(e, t, r, a);
		n && (yield n);
	}
}
function P(e, t, r = {}) {
	let i = j(e, t, r), a = function(e) {
		let { done: t, value: r } = e.next();
		return t ? void 0 : r;
	}(i);
	return a[0] ? [new v(a[0], function* () {
		for (let e of i) e[0] && (yield e[0]);
	}), void 0] : [void 0, a[1]];
}
function* j(e, t, r = {}) {
	let { path: i = [], branch: a = [e], node: n = { current: t }, coerce: s = !1, mask: c = !1 } = r, l = {
		mask: c,
		path: i,
		branch: a,
		node: n
	}, u = e;
	if (s) {
		let r = t.coercer(e, l);
		void 0 != r && (u = r);
	}
	let p = x.valid;
	for (let i of O(t.validator(u, l), l, t, e)) i.explanation = r.message, p = x.not_valid, yield [i, void 0];
	for (let [e, d, f] of t.entries(u, l)) for (let t of j(d, f, {
		path: void 0 === e ? i : [...i, e],
		branch: void 0 === e ? a : [...a, d],
		node: void 0 === e ? n : {
			current: f,
			parent: n
		},
		coerce: s,
		mask: c,
		message: r.message
	})) t[0] ? (p = null != t[0].refinement ? x.not_refined : x.not_valid, yield [t[0], void 0]) : s && (d = t[1], void 0 === e ? u = d : u instanceof Map ? u.set(e, d) : u instanceof Set ? u.add(d) : o(u) && (u[e] = d));
	if (p !== x.not_valid) for (let i of O(t.refiner(u, l), l, t, e)) i.explanation = r.message, p = x.not_refined, yield [i, void 0];
	p === x.valid && (yield [void 0, u]);
}
var x = ((f = x || {})[f.valid = 0] = "valid", f[f.not_refined = 1] = "not_refined", f[f.not_valid = 2] = "not_valid", f);
let S = (e) => (...t) => {
	let r = e(...t), i = (e, t) => {
		let i = m.get(e, t) ?? {};
		m.define(e, t, {
			...i,
			type: r
		});
	};
	return i.toString = () => `@type:${r.type}`, new Proxy(i, {
		ownKeys: () => [...Object.getOwnPropertyNames(r), ...Object.getOwnPropertySymbols(r)],
		get: (e, t) => r[t]
	});
}, M = (e) => (...t) => {
	let r = (r) => e(r, ...t);
	return new Proxy((e, t) => {
		m.define(e, t, (e) => {
			(e.modifies ??= []).push({ modify: r });
		}, {});
	}, { get(e, t) {
		if ("modify" == t) return r;
	} });
};
var N = class e {
	static RecordKey = Symbol("RecordKey");
	static meta = Symbol("meta");
	static optional = Symbol("optional");
	static underlying = Symbol("underlying");
	static unwrap = Symbol("unwrap");
	static extractSchema = (e) => new k().toValue(e);
	static extractMeta = (t) => new k().toValue(t.meta ?? t[e.meta]);
	static create(t, r, a) {
		let n, o = r ?? t[e.underlying]?.schema ?? {};
		return new Proxy({}, {
			ownKeys(e) {
				let r = /* @__PURE__ */ new Map();
				if (a) {
					if (t[a]) for (let e of Object.getOwnPropertyNames(t[a])) r.set(e, e);
					if (o && o[a]) for (let e of Object.getOwnPropertyNames(o[a])) r.set(e, e);
				} else {
					for (let e of Object.getOwnPropertyNames(t)) r.set(e, e);
					if (o) for (let e of Object.getOwnPropertyNames(o)) r.set(e, e);
				}
				return [...r.keys()];
			},
			get(r, c) {
				if (c === e.meta) return n ??= e.create(t, o, e.meta);
				if (a) {
					if (s(t)) {
						let e = t?.[a]?.[c];
						if (!i(e)) return e;
					}
					return o ? o?.[a]?.[c] : void 0;
				}
				if (s(t)) {
					let e = t?.[c];
					if (!i(e)) return e;
				}
				return o ? o[c] : void 0;
			}
		});
	}
	static schemaProp(e, t) {
		return _(e.schema, t);
	}
	static metaProp(e, t) {
		return $(e.schema, t);
	}
}, _ = (e, t) => {
	if (s(e)) return e[t] ?? (e[N.unwrap] ? _(e[N.unwrap]().schema, t) : void 0);
}, $ = (e, t) => {
	if (s(e)) return e[N.meta]?.[t] ?? (e[N.unwrap] ? $(e[N.unwrap]().schema, t) : void 0);
}, k = class {
	constructor(e = !1) {
		this.deref = e;
	}
	toValue(e) {
		if (e) {
			if (!i(e.schema)) return this.toValue(e.schema);
			if (this.deref && e[N.unwrap]) return this.toValue(e[N.unwrap]());
			if (l(e)) return this.toArray(e);
			if (e.constructor === Object) return this.toObject(e);
		}
		return e;
	}
	toObject(e) {
		let t = {};
		for (let r of Object.getOwnPropertyNames(e)) t[r] = this.toValue(e[r]);
		return t;
	}
	toArray(e) {
		let t = [];
		for (let r of e) t.push(this.toValue(r));
		return t;
	}
}, E = class e {
	static parse(t) {
		if ("" === t) return [];
		if ("/" === t) return [""];
		if ("/" !== t.charAt(0)) throw Error("Invalid JSON pointer: " + t);
		let r = t.substring(1).split(/\//);
		return r.map((t, i) => e.unescape(t, i === r.length - 1));
	}
	static create(t = []) {
		return 0 === t.length ? "" : "/" + t.map(e.escape).join("/");
	}
	static unescape(e, t) {
		return "" == e && t ? N.RecordKey : e.replace(/~1/g, "/").replace(/~0/g, "~");
	}
	static escape(e) {
		return e == N.RecordKey ? "" : e.toString().replace(/~/g, "~0").replace(/\//g, "~1");
	}
	static get(t, r) {
		let i = Array.isArray(r) ? r : e.parse(r);
		for (let e = 0; e < i.length; e++) {
			let r = i[e];
			if (e > 0 && r == N.RecordKey) return i[e - 1];
			if (!("object" == typeof t && r in t)) throw Error("Invalid reference token: " + r);
			t = t[r];
		}
		return t;
	}
}, K = class e {
	static define = S((t = () => !0) => new class extends e {
		validator(e, r) {
			return t(e, r);
		}
	}(null));
	static fromTypeObject = (t, r) => {
		let i = t.type ?? r ?? new e({});
		return t.modifies ? i.use(...t.modifies ?? []) : i;
	};
	[b] = b;
	schema;
	constructor(e) {
		if (e) {
			this.schema = N.create(e);
			return;
		}
		this.schema = e ?? null;
	}
	get meta() {
		return this.schema ? this.schema[N.meta] : {};
	}
	get type() {
		return this.schema?.type ?? "unknown";
	}
	refiner(e, t) {
		return [];
	}
	validator(e, t) {
		return [];
	}
	coercer(e, t) {
		if (u(e)) {
			let t = e.trim();
			if (t.length >= 2) {
				if (t.startsWith("{") && t.endsWith("}")) try {
					return JSON.parse(t);
				} catch (e) {}
				if (t.startsWith("[") && t.endsWith("]")) try {
					return JSON.parse(t);
				} catch (e) {}
			}
		}
		return e;
	}
	*entries(e, t = g) {}
	validate(e, t = {}) {
		return P(e, this, t);
	}
	create(e) {
		let t = P(e, this, { coerce: !0 });
		if (t[0]) throw t[0];
		return t[1];
	}
	mask(e) {
		let t = P(e, this, {
			coerce: !0,
			mask: !0
		});
		if (t[0]) throw t[0];
		return t[1];
	}
	use(...e) {
		return e.reduce((e, t) => t.modify(e), this);
	}
	optional() {
		return R.create(this);
	}
	default(e) {
		return A.create(this, e);
	}
}, T = class e extends K {
	static of(t, r) {
		return new e({
			...r,
			[N.underlying]: t
		});
	}
	static refine(t, r, i) {
		return new class extends e {
			*refiner(e, a) {
				for (let n of (yield* this.unwrap.refiner(e, a), O(r(e, a), a, t, e))) yield {
					...n,
					refinement: Object.keys(i).join(",")
				};
			}
		}({
			...i,
			[N.underlying]: t
		});
	}
	get unwrap() {
		let e = this.schema[N.unwrap];
		return e ? e() : this.schema[N.underlying];
	}
	get type() {
		return this.unwrap.type;
	}
	*entries(e, t = g) {
		yield* this.unwrap.entries(e, {
			...t,
			node: {
				current: this,
				parent: t.node
			}
		});
	}
	validator(e, t) {
		return O(this.unwrap.validator(e, t), t, this, e);
	}
	refiner(e, t) {
		return O(this.unwrap.refiner(e, t), t, this, e);
	}
	coercer(e, t) {
		return this.unwrap.coercer(e, t);
	}
}, A = class e extends T {
	static create = S((t, r) => new e({
		default: r,
		[N.underlying]: t
	}));
	coercer(e, t) {
		return void 0 === e ? this.schema.default : super.unwrap.coercer(e, t);
	}
}, R = class e extends T {
	static create = S((t) => new e({
		[N.underlying]: t,
		[N.optional]: t
	}));
	refiner(e, t) {
		return void 0 === e || super.unwrap.refiner(e, t);
	}
	validator(e, t) {
		return void 0 === e || super.unwrap.validator(e, t);
	}
}, V = class e extends T {
	static create = S((t, r) => new e({
		$ref: t,
		[N.unwrap]: r
	}));
}, q = class e extends K {
	static create = S(() => new e());
	constructor() {
		super({});
	}
	get type() {
		return "any";
	}
	validator() {
		return !0;
	}
}, J = class e extends K {
	static create = S(() => new e({ type: "null" }));
	get type() {
		return "null";
	}
	validator(e, t) {
		return c(e);
	}
	coercer(e, t) {
		return e;
	}
}, W = class e extends K {
	static create = S(() => new e({ type: "string" }));
	get type() {
		return this.schema.type;
	}
	validator(e, t) {
		return u(e);
	}
	coercer(e, t) {
		return i(e) || c(e) ? e : String(e);
	}
}, I = class e extends K {
	static create = S(() => new e({ type: "number" }));
	get type() {
		return this.schema.type;
	}
	validator(e, t) {
		return p(e);
	}
	coercer(e, t) {
		try {
			let t = void 0 != e ? parseFloat(String(e)) : void 0;
			if (p(t)) return t;
		} catch (e) {}
	}
}, F = class e extends K {
	static create = S(() => new e({ type: "integer" }));
	get type() {
		return this.schema.type;
	}
	validator(e, t) {
		return n(e);
	}
	coercer(e, t) {
		try {
			let t = void 0 != e ? parseInt(String(e)) : void 0;
			return n(t) ? t : void 0;
		} catch (e) {
			return;
		}
	}
}, G = class e extends K {
	static create = S(() => new e({ type: "boolean" }));
	get type() {
		return this.schema.type;
	}
	validator(e, r) {
		return t(e);
	}
	coercer(e, t) {
		try {
			return void 0 != e ? "true" === String(e) : void 0;
		} catch (e) {
			return;
		}
	}
}, L = class e extends K {
	static create = S(() => new e({
		type: "string",
		format: "binary"
	}));
	get type() {
		return "binary";
	}
	validator(e, t) {
		return e instanceof File || e instanceof Blob;
	}
	coercer(e, t) {
		return e;
	}
}, B = class e extends K {
	static create = S(e.createEnum);
	static createEnum(t) {
		return new e({ enum: t });
	}
	static literal = S((t) => new e({ enum: [t] }));
	static nativeEnum = S((t) => new e({ enum: Object.values(t) }));
	get type() {
		return "enums";
	}
	validator(e, t) {
		return this.schema.enum.includes(e);
	}
	coercer(e, t) {
		return e;
	}
}, C = class e extends K {
	static create = S(() => new e(!1));
	get type() {
		return "never";
	}
	validator(e, t) {
		return !1;
	}
	coercer(e, t) {
		return e;
	}
}, U = class e extends K {
	static create(t) {
		let r = (e = {}) => {
			let t = [];
			for (let [r, i] of Object.entries(e)) N.schemaProp(i, N.optional) || t.push(r);
			return t;
		};
		return S(() => {
			if (t) {
				if (y(t)) {
					let i = new t(), a = {};
					for (let [e, t] of Object.entries(i)) a[e] = B.literal(t);
					for (let e of m.getOwnPropertyNames(i)) {
						let t = m.get(i, e);
						if (t) {
							let r = K.fromTypeObject(t, a[e]);
							e in a ? a[e] = r.default(a[e].schema?.enum?.[0]) : a[e] = r;
						}
					}
					return new e({
						type: "object",
						properties: a,
						required: r(a),
						additionalProperties: C.create()
					});
				}
				return new e({
					type: "object",
					properties: t,
					required: r(t),
					additionalProperties: C.create()
				});
			}
			return new e({
				type: "object",
				properties: {},
				required: [],
				additionalProperties: C.create()
			});
		})();
	}
	get type() {
		return this.schema.type;
	}
	*entries(e, t = g) {
		if (o(e)) {
			let r = new Set(Object.keys(e));
			if (this.schema.properties) for (let t in this.schema.properties) r.delete(t), yield [
				t,
				e[t],
				this.schema.properties[t]
			];
			if (t.node?.current.type !== "intersection") for (let t of r) yield [
				t,
				e[t],
				this.schema.additionalProperties
			];
		}
	}
	validator(e, t) {
		return o(e);
	}
	coercer(e, t) {
		if (o(e)) {
			let r = { ...e };
			if (t.mask) {
				let e = this.schema.properties;
				if (e) for (let t in r) void 0 === e[t] && delete r[t];
			}
			return r;
		}
		return super.coercer(e, t);
	}
}, z = class e extends K {
	static create = S((t, r) => new e({
		type: "object",
		propertyNames: t,
		additionalProperties: r
	}));
	get type() {
		return "record";
	}
	*entries(e) {
		if (o(e)) for (let [t, r] of Object.entries(e)) yield [
			N.RecordKey,
			t,
			this.schema.propertyNames
		], yield [
			t,
			r,
			this.schema.additionalProperties
		];
	}
	validator(e) {
		return o(e);
	}
}, D = class e extends K {
	static create = S((t) => new e({
		type: "array",
		items: t
	}));
	get type() {
		return this.schema.type;
	}
	*entries(e, t = g) {
		if (Array.isArray(e)) for (let [t, r] of e.entries()) yield [
			t,
			r,
			this.schema.items
		];
	}
	validator(e) {
		return l(e);
	}
	coercer(e) {
		return l(e) ? e.slice() : e;
	}
}, H = class e extends K {
	static create = S((t) => new e({
		type: "array",
		items: t
	}));
	get type() {
		return "tuple";
	}
	*entries(e, t) {
		if (l(e)) {
			let t = Math.max(this.schema.items.length, e.length);
			for (let r = 0; r < t; r++) yield [
				r,
				e[r],
				this.schema.items[r] ?? C.create()
			];
		}
	}
	validator(e) {
		return l(e) && e.length === this.schema.items.length;
	}
	coercer(e) {
		return l(e) ? e.slice() : e;
	}
}, Q = class e extends K {
	static create = S((...t) => new e({ allOf: t }));
	get type() {
		return "intersection";
	}
	*entries(e, t = g) {
		for (let r of this.schema.allOf) yield* r.entries(e, t);
	}
	*validator(e, t) {
		for (let r of this.schema.allOf) yield* O(r.validator(e, t), t, this, e);
	}
	*refiner(e, t) {
		for (let r of this.schema.allOf) yield* O(r.refiner(e, t), t, this, e);
	}
}, X = class e extends K {
	static create = S((...t) => new e({ oneOf: t }));
	static discriminatorMapping(t, ...r) {
		return S(() => {
			let i = [];
			if (1 == r.length && r[0].constructor == Object) for (let [e, a] of Object.entries(r[0])) if (N.schemaProp(a, "$ref")) i.push(a);
			else {
				let r = { [t]: B.literal(e) };
				for (let [e, t, i] of a.entries({}, g)) r[String(e)] = i;
				i.push(U.create(r));
			}
			else for (let e of r) y(e) && i.push(U.create(e));
			return new e({
				oneOf: i,
				discriminator: { propertyName: t }
			});
		})();
	}
	_discriminatorPropName;
	discriminatorPropType(e) {
		return this._discriminatorPropName ??= (() => {
			let t = this.schema.discriminator?.propertyName ?? "", r = [], i = [];
			for (let e of this.schema.oneOf) {
				let a = N.schemaProp(e, "properties")[t];
				if (!a) continue;
				let n = a.schema.enum;
				n && r.push(...n), i.push(a.meta);
			}
			return T.of(B.create(r), { [N.meta]: N.create(i[0], e.node?.current.meta ?? {}) });
		})();
	}
	_discriminatorMappingProps = /* @__PURE__ */ new Map();
	discriminatorMapping(e, t, r) {
		if (this._discriminatorMappingProps.get(t)) return this._discriminatorMappingProps.get(t);
		if ((this.discriminatorPropType(r)?.schema?.enum ?? []).includes(t)) {
			let r = this.schema.oneOf.find((r) => {
				let i = N.schemaProp(r, "properties")[e];
				if (i) {
					let [e, r] = i.validate(t);
					return !e;
				}
				return !1;
			});
			if (r) {
				if (!this._discriminatorMappingProps.has(t)) {
					let i = {};
					for (let [t, a] of Object.entries(N.schemaProp(r, "properties"))) t !== e && (i[t] = a);
					this._discriminatorMappingProps.set(t, i);
				}
				return this._discriminatorMappingProps.get(t);
			}
		}
		return {};
	}
	*entries(e, t = g) {
		if (this.schema.discriminator) {
			let r = this.schema.discriminator.propertyName, i = e?.[r];
			yield* U.create({
				[r]: this.discriminatorPropType(t),
				...this.discriminatorMapping(r, i, t)
			}).entries(e, t);
		}
	}
	get type() {
		return "union";
	}
	coercer(e) {
		for (let t of this.schema.oneOf) {
			let [r, i] = P(e, t, { coerce: !0 });
			if (!r) return i;
		}
		return e;
	}
	validator(e, t) {
		if (this.schema.discriminator) {
			let r = this.schema.discriminator.propertyName, i = e?.[r];
			return U.create({
				[r]: this.discriminatorPropType(t),
				...this.discriminatorMapping(r, i, t)
			}).validator(e, t);
		}
		let r = [];
		for (let i of this.schema.oneOf) {
			let [ ...a] = j(e, i, t), [n] = a;
			if (n && !n[0]) return [];
			for (let [e] of a) e && r.push(e);
		}
		return [`Expected the value to satisfy a union of \`${this.schema.oneOf.map((e) => e.type).join(" | ")}\`, but received: ${e}`, ...r];
	}
};
V.create;
let Y = q.create;
C.create, J.create;
let Z = W.create, ee = M((e, t, r) => T.refine(e, (e) => !!e && e.length >= t || (r ?? `Expected string value length great than or equal ${t}, but received "${e}"`), { minLength: t }));
I.create;
let et = F.create, er = G.create;
L.create;
let ei = B.create, ea = B.nativeEnum;
B.literal;
let en = U.create, es = z.create;
H.create;
let eo = D.create;
Q.create;
let ec = X.create;
X.discriminatorMapping;
let el = K.define;
T.refine;
let eu = M((e) => R.create(e)), ep = M((e, t) => T.of(e, { [N.meta]: t }));
export { g as _, el as a, ee as c, eu as d, es as f, N as g, E as h, er as i, ea as l, ec as m, Y as n, ei as o, Z as p, eo as r, et as s, ep as t, en as u, w as v };
