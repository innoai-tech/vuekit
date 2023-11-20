import {
	Observable,
	type ObservableInput,
	type UnaryFunction,
	from,
	pipe,
} from "rxjs";

export function rx<S extends ObservableInput<any>, A>(
	source: S,
	op1: UnaryFunction<S, A>,
): A;
export function rx<S extends ObservableInput<any>, A, B>(
	source: S,
	op1: UnaryFunction<S, A>,
	op2: UnaryFunction<A, B>,
): B;
export function rx<S extends ObservableInput<any>, A, B, C>(
	source: S,
	op1: UnaryFunction<S, A>,
	op2: UnaryFunction<A, B>,
	op3: UnaryFunction<B, C>,
): C;
export function rx<S extends ObservableInput<any>, A, B, C, D>(
	source: S,
	op1: UnaryFunction<S, A>,
	op2: UnaryFunction<A, B>,
	op3: UnaryFunction<B, C>,
	op4: UnaryFunction<C, D>,
): D;
export function rx<S extends ObservableInput<any>, A, B, C, D, E>(
	source: S,
	op1: UnaryFunction<S, A>,
	op2: UnaryFunction<A, B>,
	op3: UnaryFunction<B, C>,
	op4: UnaryFunction<C, D>,
	op5: UnaryFunction<D, E>,
): E;
export function rx<S extends ObservableInput<any>, A, B, C, D, E, F>(
	source: S,
	op1: UnaryFunction<S, A>,
	op2: UnaryFunction<A, B>,
	op3: UnaryFunction<B, C>,
	op4: UnaryFunction<C, D>,
	op5: UnaryFunction<D, E>,
	op6: UnaryFunction<E, F>,
): F;
export function rx<S extends ObservableInput<any>, A, B, C, D, E, F, G>(
	source: S,
	op1: UnaryFunction<S, A>,
	op2: UnaryFunction<A, B>,
	op3: UnaryFunction<B, C>,
	op4: UnaryFunction<C, D>,
	op5: UnaryFunction<D, E>,
	op6: UnaryFunction<E, F>,
	op7: UnaryFunction<F, G>,
): G;
export function rx<S extends ObservableInput<any>, A, B, C, D, E, F, G, H>(
	source: S,
	op1: UnaryFunction<S, A>,
	op2: UnaryFunction<A, B>,
	op3: UnaryFunction<B, C>,
	op4: UnaryFunction<C, D>,
	op5: UnaryFunction<D, E>,
	op6: UnaryFunction<E, F>,
	op7: UnaryFunction<F, G>,
	op8: UnaryFunction<G, H>,
): H;
export function rx<S extends ObservableInput<any>, A, B, C, D, E, F, G, H, I>(
	source: S,
	op1: UnaryFunction<S, A>,
	op2: UnaryFunction<A, B>,
	op3: UnaryFunction<B, C>,
	op4: UnaryFunction<C, D>,
	op5: UnaryFunction<D, E>,
	op6: UnaryFunction<E, F>,
	op7: UnaryFunction<F, G>,
	op8: UnaryFunction<G, H>,
	op9: UnaryFunction<H, I>,
): I;
export function rx<S extends ObservableInput<any>, A, B, C, D, E, F, G, H, I>(
	source: S,
	op1: UnaryFunction<S, A>,
	op2: UnaryFunction<A, B>,
	op3: UnaryFunction<B, C>,
	op4: UnaryFunction<C, D>,
	op5: UnaryFunction<D, E>,
	op6: UnaryFunction<E, F>,
	op7: UnaryFunction<F, G>,
	op8: UnaryFunction<G, H>,
	op9: UnaryFunction<H, I>,
	...operations: UnaryFunction<any, any>[]
): Observable<unknown>;
export function rx<S extends ObservableInput<any>>(
	source: S,
	...operations: UnaryFunction<any, any>[]
): unknown {
	return (pipe as any)(...operations)(from(source));
}
