import {
  type AnyType,
  type Infer,
  type Simplify,
  t,
} from "@innoai-tech/typedef";
import {
  type ObjectEmitsOptions,
  type RenderFunction,
  type SlotsType,
  type VNode,
  type Ref,
  type UnwrapRef,
  customRef,
} from "vue";

export type VElementType = string | Component<any>;
export type VNodeChildAtom =
  | VNode
  | string
  | number
  | boolean
  | null
  | undefined;

export type VNodeArrayChildren = Array<VNodeArrayChildren | VNodeChildAtom>;
export type VNodeChild = VNodeChildAtom | VNodeArrayChildren;

export { type RenderFunction, type VNode };

export type Emits = Record<string, (...args: any[]) => any>;

export type Component<P extends Record<string, any>> = {
  (props: P): JSX.Element | null;
  slots?: SlotsType<ToVueSlotsType<PickSlotProps<P>>>;
  propTypes?: any;
};

type ToVueSlotsType<O extends Record<string, any>> = {
  [K in keyof O as K extends string ? SlotName<K> : never]: O[K];
};

export type WithDefaultSlot = {
  $default?: VNodeChild;
};

export type SetupContext<E extends Emits, S> = {
  emit: EmitFn<E>;
  attrs: Record<string, unknown>;
  slots: S;
  expose: (exposed?: Record<string, any>) => void;
};

type EmitFn<
  E extends Emits,
  Event extends keyof E = keyof E,
> = UnionToIntersection<
  {
    [Key in Event]: E[Key] extends (...args: infer Args) => any
      ? (event: Key, ...args: Args) => void
      : (event: Key) => void;
  }[Event]
>;

type UnionToIntersection<U> = (
  U extends any ? (arg: U) => any : never
) extends (arg: infer I) => void
  ? I
  : never;

export type PublicPropsOf<
  PropTypes extends Record<string, AnyType>,
  P extends Record<string, any> = Infer<ReturnType<typeof t.object<PropTypes>>>,
> = Simplify<PickProps<P> & PickSlotProps<P> & Partial<PickEmitProps<P>>>;

export type SetupFunction<Props extends Record<string, any>> = (
  props: InternalPropsOf<Props>,
  ctx: SetupContext<InternalEmitsOf<Props>, InternalSlotsOf<Props>>,
) => RenderFunction;

export type InternalPropsOf<Props extends Record<string, any>> = Simplify<
  PickProps<Props>
>;

export type InternalSlotsOf<Props extends Record<string, any>> = Simplify<
  ToInternalSlots<PickSlotProps<Props>>
>;

export type InternalEmitsOf<Props extends Record<string, any>> =
  ToInternalEmits<Simplify<PickEmitProps<Props>>>;

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

type NormalProp<Prop extends string> =
  Prop extends EmitProp<Prop>
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

export { shallowRef, watch, inject, provide } from "vue";

export function ref<T>(value: T): Ref<UnwrapRef<T>>;
export function ref<T = any>(): Ref<T | undefined> {
  let currentValue: T;

  return customRef<T>((track, trigger) => {
    return {
      get() {
        track();
        return currentValue;
      },
      set(value: T) {
        const newValue = (value as any)?.$$forwardRef ?? value;

        if (newValue !== currentValue) {
          currentValue = newValue;
          trigger();
        }
      },
    };
  });
}
