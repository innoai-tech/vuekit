import {
  t,
  type TypeAny,
  type Infer,
  type Simplify,
  type UnionToIntersection
} from "@innoai-tech/typedef";
import { type ObjectEmitsOptions, type VNode, type RenderFunction } from "vue";

export type VElementType = string | Component<any>;
export type VNodeChildAtom =
  | VNode
  | string
  | number
  | boolean
  | null
  | undefined
  | void;
export type VNodeArrayChildren = Array<VNodeArrayChildren | VNodeChildAtom>;
export type VNodeChild = VNodeChildAtom | VNodeArrayChildren;

export { type RenderFunction, type VNode };

export type Emits = Record<string, (...args: any[]) => any>;

export type Component<P extends Record<string, any>> = {
  (props: P): any;
  propTypes: PropTypesOf<P>;
};

export type WithDefaultSlot = {
  $default?: VNodeChild;
};

export type SetupContext<E extends Emits, S> = {
  emit: EmitFn<E>;
  attrs: Record<string, unknown>;
  slots: S;
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
  [K in keyof RequiredProps]: ReturnType<typeof t.custom<RequiredProps[K]>>;
} & {
  [K in keyof OptionalProps]-?: ReturnType<
    typeof t.custom<NonNullable<OptionalProps[K]> | undefined>
  >;
};

export type SetupFunction<PropTypes extends Record<string, TypeAny>> = (
  props: InternalPropsOf<PropTypes>,
  ctx: SetupContext<InternalEmitsOf<PropTypes>, InternalSlotsOf<PropTypes>>
) => RenderFunction;

export type PublicPropsOf<
  PropTypes extends Record<string, TypeAny>,
  P extends Record<string, any> = TypeOfPublic<PropTypes>
> = Simplify<PickProps<P> & PickSlotProps<P> & Partial<PickEmitProps<P>>>;

export type InternalPropsOf<
  PropTypes extends Record<string, TypeAny>,
  P extends Record<string, any> = TypeOfInternal<PropTypes>
> = Simplify<PickProps<P>>;

export type InternalSlotsOf<
  PropTypes extends Record<string, TypeAny>,
  P extends Record<string, any> = TypeOfInternal<PropTypes>
> = Simplify<ToInternalSlots<PickSlotProps<P>>>;

export type InternalEmitsOf<
  PropTypes extends Record<string, TypeAny>,
  P extends Record<string, any> = TypeOfInternal<PropTypes>
> = ToInternalEmits<Simplify<PickEmitProps<P>>>;

type TypeOfPublic<O extends Record<string, TypeAny>> = Infer<
  ReturnType<typeof t.object<O>>
>;

// optional with default as InternalRequired
type PickInternalRequired<T extends Record<string, TypeAny>> = {
  [K in keyof T as K extends string
    ? Infer<T[K]> extends NonNullable<Infer<T[K]>>
      ? K
      : T[K] extends { __DEFAULTED: boolean }
        ? K
        : never
    : never]: T[K];
};

export type TypeOfInternal<
  PropTypes extends Record<string, TypeAny>,
  RequiredProps extends Record<string, TypeAny> = Pick<
    PropTypes,
    keyof PickInternalRequired<PropTypes>
  >,
  OptionalProps extends Record<string, TypeAny> = Omit<
    PropTypes,
    keyof RequiredProps
  >
> = {
  [K in keyof RequiredProps]: NonNullable<Infer<RequiredProps[K]>>;
} & {
  [K in keyof OptionalProps]?: Infer<OptionalProps[K]>;
};

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

export type PickSlotProps<O extends Record<string, any>> = {
  [K in keyof O as K extends string ? SlotProp<K> : never]: O[K];
};

export type ToInternalSlots<O extends Record<string, any>> = {
  [K in keyof O as K extends string ? SlotName<K> : never]: NonNullable<
    O[K]
  > extends (v: infer P) => any
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
