import {
  type TypeOf,
  ZodDefault,
  ZodObject,
  ZodOptional,
  type ZodTypeAny,
  type ZodType,
  type ZodTypeDef
} from "zod";
import {
  type FunctionalComponent,
  type ObjectEmitsOptions,
  type VNode,
  type RenderFunction,
  type Slot
} from "vue";

export type VElementType = string | Component<any>;

export { type RenderFunction };

export type Emits = Record<string, (...args: any[]) => any>;

export type Component<P extends Record<string, any>> = FunctionalComponent<
  P,
  ToInternalEmits<PickEmitProps<P>>
> & {
  propTypes?: PropTypesOf<P>;
};

export type SetupContext<
  E extends Emits,
  S extends Record<string, Slot>
> = {
  attrs: Record<string, unknown>;
  slots: { [K in keyof S]?: S[K] } & { default?: Slot };
  emit: EmitFn<E>;
};

type EmitFn<
  E extends Emits,
  Event extends keyof E = keyof E
> = UnionToIntersection<
  {
    [Key in Event]: E[Key] extends (...args: infer Args) => any
    ? (event: Key, ...args: Args) => void
    : (event: Key) => void;
  }[Event]
>;

type PickRequired<T extends Record<string, any>> = {
  [K in keyof T as K extends string
    ? T[K] extends NonNullable<T[K]>
      ? K
      : never
    : never]: T[K];
};

export type PropTypesOf<
  Props extends Record<string, any>,
  RequiredProps = Pick<Props, keyof PickRequired<Props>>,
  OptionalProps = Omit<Props, keyof RequiredProps>
> = {
  [K in keyof RequiredProps]: ZodType<
    RequiredProps[K],
    ZodTypeDef,
    RequiredProps[K]
  >;
} & {
  [K in keyof OptionalProps]-?: ZodOptional<
    ZodType<
      NonNullable<OptionalProps[K]>,
      ZodTypeDef,
      NonNullable<OptionalProps[K]>
    >
  >;
};

export type SetupFunction<PropTypes extends Record<string, ZodTypeAny>> = (
  props: InternalPropsOf<PropTypes>,
  ctx: SetupContext<InternalEmitsOf<PropTypes>, InternalSlotsOf<PropTypes>>
) => RenderFunction;

export type PublicPropsOf<
  O extends Record<string, ZodTypeAny>,
  P extends Record<string, any> = TypeOfPublic<O>
> = PickProps<P> & Partial<PickEmitProps<P>> & Partial<PickSlotProps<P>>;

export type InternalPropsOf<
  O extends Record<string, ZodTypeAny>,
  P extends Record<string, any> = TypeOfInternal<O>
> = PickProps<P>;

export type InternalEmitsOf<
  O extends Record<string, ZodTypeAny>,
  P extends Record<string, any> = TypeOfInternal<O>
> = ToInternalEmits<PickEmitProps<P>>;

export type InternalSlotsOf<
  O extends Record<string, ZodTypeAny>,
  P extends Record<string, any> = TypeOfInternal<O>
> = ToInternalSlots<PickSlotProps<P>>;

type TypeOfPublic<O extends Record<string, ZodTypeAny>> = TypeOf<
  ZodObject<{
    [K in keyof O]: O[K] extends ZodDefault<infer U> ? U : O[K];
  }>
>;

type TypeOfInternal<O extends Record<string, ZodTypeAny>> = TypeOf<
  ZodObject<{
    [K in keyof O]: O[K] extends ZodOptional<infer U>
      ? U extends ZodDefault<any>
        ? U
        : ZodOptional<U>
      : O[K];
  }>
>;

export type PickProps<O extends Record<string, any>> = {
  [K in keyof O as K extends string ? NormalProp<K> : never]: O[K];
};

export type PickEmitProps<O extends Record<string, any>> = Required<{
  [K in keyof O as K extends string
    ? NonNullable<O[K]> extends (...args: any[]) => any
      ? EmitProp<K>
      : never
    : never]: NonNullable<O[K]>;
}>;

type ToInternalEmits<O extends ObjectEmitsOptions> = {
  [K in keyof O as K extends string ? EmitName<K> : never]: O[K];
};

export type PickSlotProps<O extends Record<string, any>> = Required<{
  [K in keyof O as K extends string ? SlotProp<K> : never]: NonNullable<O[K]>;
}>;

export type ToInternalSlots<O extends Record<string, any>> = {
  [K in keyof O as K extends string ? SlotName<K> : never]: O[K] extends (
      v: infer P
    ) => any
    ? (p: P) => VNode[]
    : () => VNode[];
};

type NormalProp<Prop extends string> = Prop extends EmitProp<Prop>
  ? never
  : Prop extends SlotProp<Prop>
    ? never
    : Prop;

type EmitProp<Prop extends string> = Prop extends `on${infer Name}`
  ? Name extends Capitalize<Name>
    ? `on${Name}`
    : never
  : never;

type EmitName<Prop extends string> = Prop extends `on${infer Name}`
  ? ToKebabCase<Name>
  : never;

type SlotName<Prop extends string> = Prop extends `$${infer Name}`
  ? Name
  : never;

type SlotProp<Prop extends string> = Prop extends `$${infer Name}`
  ? `$${Name}`
  : never;

export type ToKebabCase<S> = S extends `${infer C}${infer T}`
  ? ToKebabCase<T> extends infer U
    ? U extends string
      ? T extends Uncapitalize<T>
        ? `${Uncapitalize<C>}${U}`
        : `${Uncapitalize<C>}-${U}`
      : never
    : never
  : S;

export type ToCamelCase<S extends string> = S extends `${infer T}-${infer U}`
  ? `${T}${Capitalize<ToCamelCase<U>>}`
  : S extends `${infer T}_${infer U}`
    ? `${T}${Capitalize<ToCamelCase<U>>}`
    : S;

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
    k: infer I
  ) => void
  ? I
  : never;
