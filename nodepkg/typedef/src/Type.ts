import { Struct, type Infer, type Describe } from "superstruct";
import * as ss from "superstruct";
import {
  type InferStructTuple,
  type ObjectType,
  type Simplify,
  type UnionToIntersection
} from "superstruct/dist/utils";
import {
  type Coercer,
  type Context,
  type Refiner,
  type Validator
} from "superstruct/dist/struct";

export {
  type Infer,
  type Simplify,
  type UnionToIntersection,
  type Describe,
  type InferStructTuple as InferTuple,
  type ObjectType,
  type Context,
  type Validator
};

interface UnaryFunction<T, R> {
  (source: T): R;
}

export type Modifier<T, R, S> = UnaryFunction<Type<T, S>, Type<R, S>>;

export type TypeAny = Type<any, any>;

export class Type<T, S = unknown> extends Struct<T, S> {
  static define<T>(name: string, validator: Validator): Type<T, null> {
    return new Type({ type: name, schema: null, validator });
  }

  static refine<T, S>(
    t: Type<T, S>,
    name: string,
    refiner: Refiner<T>
  ): Type<T, S> {
    return Type.callWith(t, ss.refine, name, refiner);
  }

  static callWith<T, S, RT, RS, Args extends any[]>(
    source: Type<T, S>,
    fn: (s: Struct<T, S>, ...args: Args) => Struct<RT, RS>,
    ...args: Args
  ) {
    return new Type<RT, RS>({
      ...fn(source, ...args),
      meta: source.meta
    });
  }

  meta: Record<string, any>;

  constructor({
                entries = function* () {
                },
                coercer,
                validator,
                refiner,
                meta,
                ...others
              }: {

    entries?: Struct<T, S>["entries"];
    coercer?: Coercer;
    validator?: Validator;
    refiner?: Refiner<T>;
    meta?: Record<string, any>;
    type: string;
    schema: S;
  }) {
    super({
      ...others,
      coercer: coercer ? (...args: any[]) => {
        return (coercer as any).apply(this, args);
      } : undefined,
      validator: validator ? (...args: any[]) => {
        return (validator as any).apply(this, args);
      } : undefined,
      refiner: refiner ? (...args: any[]) => {
        return (refiner as any).apply(this, args);
      } : undefined
    });

    this.entries = entries as any;
    this.meta = meta ?? {};
  }

  override entries: (
    value: unknown,
    context: Context
  ) => Iterable<[string | number, unknown, Type<any> | Type<never>]>;

  optional(): Type<T | undefined, S> {
    return Type.callWith(this, ss.optional);
  }

  default(v: T): Type<T, S> {
    return Type.callWith(this, ss.defaulted, v);
  }

  use<A>(op1: Modifier<T, A, S>): Type<A, S>;
  use<A, B>(op1: Modifier<T, A, S>, op2: Modifier<A, B, S>): Type<B, S>;
  use<A, B, C>(
    op1: Modifier<T, A, S>,
    op2: Modifier<A, B, S>,
    op3: Modifier<B, C, S>
  ): Type<C, S>;
  use<A, B, C, D>(
    op1: Modifier<T, A, S>,
    op2: Modifier<A, B, S>,
    op3: Modifier<B, C, S>,
    op4: Modifier<C, D, S>
  ): Type<D, S>;
  use<A, B, C, D, E>(
    op1: Modifier<T, A, S>,
    op2: Modifier<A, B, S>,
    op3: Modifier<B, C, S>,
    op4: Modifier<C, D, S>,
    op5: Modifier<D, E, S>
  ): Type<E, S>;
  use<A, B, C, D, E, F>(
    op1: Modifier<T, A, S>,
    op2: Modifier<A, B, S>,
    op3: Modifier<B, C, S>,
    op4: Modifier<C, D, S>,
    op5: Modifier<D, E, S>,
    op6: Modifier<E, F, S>
  ): Type<F, S>;
  use<A, B, C, D, E, F, G>(
    op1: Modifier<T, A, S>,
    op2: Modifier<A, B, S>,
    op3: Modifier<B, C, S>,
    op4: Modifier<C, D, S>,
    op5: Modifier<D, E, S>,
    op6: Modifier<E, F, S>,
    op7: Modifier<F, G, S>
  ): Type<G, S>;
  use<A, B, C, D, E, F, G, H>(
    op1: Modifier<T, A, S>,
    op2: Modifier<A, B, S>,
    op3: Modifier<B, C, S>,
    op4: Modifier<C, D, S>,
    op5: Modifier<D, E, S>,
    op6: Modifier<E, F, S>,
    op7: Modifier<F, G, S>,
    op8: Modifier<G, H, S>
  ): Type<H, S>;
  use<A, B, C, D, E, F, G, H, I>(
    op1: Modifier<T, A, S>,
    op2: Modifier<A, B, S>,
    op3: Modifier<B, C, S>,
    op4: Modifier<C, D, S>,
    op5: Modifier<D, E, S>,
    op6: Modifier<E, F, S>,
    op7: Modifier<F, G, S>,
    op8: Modifier<G, H, S>,
    op9: Modifier<H, I, S>
  ): Type<I, S>;
  use<A, B, C, D, E, F, G, H, I>(
    op1: Modifier<T, A, S>,
    op2: Modifier<A, B, S>,
    op3: Modifier<B, C, S>,
    op4: Modifier<C, D, S>,
    op5: Modifier<D, E, S>,
    op6: Modifier<E, F, S>,
    op7: Modifier<F, G, S>,
    op8: Modifier<G, H, S>,
    op9: Modifier<H, I, S>,
    ...operations: Modifier<any, any, S>[]
  ): Type<unknown, unknown>;
  use(...annotations: any[]): TypeAny {
    return annotations.reduce((ret, r) => r(ret), this);
  }
}