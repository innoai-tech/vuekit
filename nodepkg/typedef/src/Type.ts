import { Struct, type Infer, type Describe } from "superstruct";
import * as ss from "superstruct";
import {
  type InferStructTuple,
  type ObjectType,
  type Simplify,
  type UnionToIntersection
} from "superstruct/dist/utils";
import { type Refiner, type Validator } from "superstruct/dist/struct";

export {
  type Infer,
  type Simplify,
  type UnionToIntersection,
  type Describe,
  type InferStructTuple as InferTuple,
  type ObjectType
};

interface UnaryFunction<T, R> {
  (source: T): R;
}

export type Modifier<T, R, S> = UnaryFunction<Type<T, S>, Type<R, S>>;

export type TypeAny = Type<any, any>;

export class Type<T, S> extends Struct<T, S> {
  static define<T>(name: string, validator: Validator): Type<T, null> {
    return Type.wrap(ss.define(name, validator));
  }

  static refine<T, S>(
    t: Type<T, S>,
    name: string,
    refiner: Refiner<T>
  ): Type<T, S> {
    return Type.wrap(ss.refine(t, name, refiner));
  }

  static wrap<T, S>(
    struct: Struct<T, S>,
    ...modifiers: Array<(t: Type<T, S>) => Type<T, S>>
  ) {
    let t = new Type<T, S>(struct);
    for (const m of modifiers) {
      t = m(t);
    }
    return t;
  }

  meta: Record<string, any>;

  constructor({
                meta,
                ...others
              }: {
    type: Struct<T, S>["type"];
    schema: Struct<T, S>["schema"];
    coercer?: Struct<T, S>["coercer"];
    validator?: Struct<T, S>["validator"];
    refiner?: Struct<T, S>["refiner"];
    entries?: Struct<T, S>["entries"];
    meta?: Record<string, any>;
  }) {
    super(others);
    this.meta = meta ?? {};
  }

  optional(): Type<T | undefined, S> {
    return Type.wrap(ss.optional(this));
  }

  default(v: T): Type<T, S> {
    return Type.wrap(ss.defaulted(this, v));
  }

  use<A>(op1: Modifier<T, A, S>): Type<A, S>;
  use<A, B>(
    op1: Modifier<T, A, S>,
    op2: Modifier<A, B, S>
  ): Type<B, S>;
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
