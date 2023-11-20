import { get, isFunction, isUndefined, set } from "@innoai-tech/lodash";
import {
	type AnyType,
	EmptyContext,
	ImmerBehaviorSubject,
	type Infer,
	type MetaBuilder,
	createMetaBuilder,
	rx,
} from "@innoai-tech/vuekit";
import { Observable, Subject, distinctUntilChanged, map } from "rxjs";

export class FormData<T extends AnyType = AnyType> extends Subject<Infer<T>> {
	static of<T extends AnyType>(
		schema: T,
		initials: Partial<Infer<T>> | (() => Partial<Infer<T>>),
	) {
		return new FormData(schema, () =>
			isFunction(initials) ? initials() : initials,
		);
	}

	static label(label: string): MetaBuilder<FieldMeta> {
		return createMetaBuilder<FieldMeta>({ label });
	}

	public readonly inputs$: ImmerBehaviorSubject<Partial<Infer<T>>>;

	constructor(
		public typedef: T,
		initials: () => Partial<Infer<T>>,
	) {
		super();
		this.inputs$ = new ImmerBehaviorSubject<Partial<Infer<T>>>(
			initials() ?? {},
		);
	}

	get inputs() {
		return this.inputs$.value;
	}

	public readonly _fields = new Map<string, Field>();

	*fields<T extends AnyType>(
		typedef: T,
		value = this.inputs$.value,
		path: any[] = [],
	): Iterable<Field> {
		for (const [nameOrIdx, _, t] of typedef.entries(value, EmptyContext)) {
			if (t.type === "never") {
				continue;
			}

			const p = [...path, nameOrIdx];

			const name = Field.stringify(p);

			let f = this._fields.get(name);
			if (!f) {
				f = new Field(this, t, p);
				this._fields.set(name, f);
			}

			yield f;
		}
	}

	submit = () => {
		const values = {};

		let hasError = false;

		for (const [name, f] of this._fields) {
			f.blur();

			const value = f.input;

			const err = f.validate(value);
			if (err) {
				f.next((state) => {
					state.error = err;
				});
			}

			if (f.value.error) {
				hasError = true;
				continue;
			}

			if (!isUndefined(value)) {
				set(values, name, value);
			}
		}

		if (hasError) {
			return;
		}

		this.next(values);
	};

	setErrors = (errors: Record<string, string[]>) => {
		for (const name in errors) {
			for (const [_, f] of this._fields) {
				f.next((state) => {
					state.error = errors[name];
				});
			}
		}
	};
}

export interface InputComponentProps<T> {
	name: string;
	value?: T;
	onValueChange: (v: T) => void;
	type: string;
	readOnly?: boolean;
	focus?: boolean;
	onBlur?: () => void;
	onFocus?: () => void;
}

export interface FieldMeta {
	label?: string;
	readOnlyWhenInitialExist?: boolean;
	input?: (props: InputComponentProps<any>) => JSX.Element;
	valueDisplay?: (props: InputComponentProps<any>) => JSX.Element | string;
}

export interface FieldState {
	initial?: any;
	focus?: boolean;
	visited?: boolean;
	touched?: boolean;
	dirty?: boolean;
	error?: string[] | null;
}

export class Field extends ImmerBehaviorSubject<FieldState> {
	static defaultValue = (def: AnyType) => {
		try {
			return def.create(undefined);
		} catch (e) {
			return;
		}
	};

	constructor(
		public readonly form$: FormData,
		public readonly typedef: AnyType,
		public readonly path: Array<string | number>,
		public readonly name = Field.stringify(path),
	) {
		super({
			initial: get(form$.inputs$.value, name, Field.defaultValue(typedef)),
		});
	}

	get input() {
		return get(this.form$.inputs$.value, this.name);
	}

	get meta(): FieldMeta {
		return this.typedef.meta;
	}

	private _optional?: boolean;

	get optional() {
		if (typeof this._optional === "undefined") {
			this._optional = !this.validate(undefined);
		}
		return this._optional;
	}

	get label() {
		return this.meta?.label ?? this.name;
	}

	private _input$?: Observable<any>;
	get input$(): Observable<any> {
		if (typeof this._input$ === "undefined") {
			this._input$ = rx(
				this.form$.inputs$,
				map((v) => get(v, this.name)),
				distinctUntilChanged(),
			);
		}
		return this._input$;
	}

	focus = () => {
		this.next((state) => {
			state.focus = true;
			state.visited = true;
		});
	};

	blur = () => {
		this.next((state: FieldState) => {
			state.focus = false;
			state.touched = true;
		});
	};

	reset = () => {
		this.form$.inputs$.next((inputs) => {
			set(inputs, this.name, this.value.initial);
		});
		this.next({ initial: this.value.initial });
	};

	update = (v: any) => {
		this.form$.inputs$.next((inputs) => {
			set(inputs, this.name, v);
		});

		this.next((state) => {
			state.dirty = v !== state.initial;
			state.error = this.validate(v) ?? null;
		});
	};

	validate(value: any): string[] | undefined {
		const v =
			this.typedef.type === "array"
				? (value ?? []).filter((v: any) => !isUndefined(v))
				: value;

		const [err] = this.typedef.validate(v);

		if (!err) {
			return;
		}

		const failures = err.failures().filter((v) => v.type !== "never");

		if (failures.length === 0) {
			// FIXME
			return;
		}

		return failures.map((f) => {
			if (f.value === undefined) {
				return "字段不能为空";
			}
			return f.message;
		});
	}

	static stringify(path: Array<string | number>) {
		let p = "";

		for (const v of path) {
			if (typeof v === "number") {
				p += `[${v}]`;
				continue;
			}

			p += p ? `.${v}` : v;
		}

		return p;
	}

	destroy() {
		this.form$._fields.delete(this.name);
	}
}
