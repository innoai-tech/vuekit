import {
  type Component,
  defineModifier,
  type Infer,
  type InferSchema,
  t,
  type Type,
} from "@innoai-tech/vuekit";
import type { Field, InputComponentProps } from "./FormData";

export const label = defineModifier(
  <T extends Type>(type: T, label: string): T => {
    return t
      .annotate<
        T,
        {
          label: typeof label;
        }
      >({ label })
      .modify(type);
  },
);

export const hint = defineModifier(
  <T extends Type>(type: T, hint: string): T => {
    return t
      .annotate<
        T,
        {
          hint: typeof hint;
        }
      >({ hint })
      .modify(type);
  },
);

export const valueDisplay = defineModifier(
  <V extends any, T extends Type<V> = Type<V>>(
    type: T,
    valueDisplay: (value: V, field$: Field<V>) => JSX.Element | string,
  ) => {
    return t
      .annotate<
        T,
        {
          valueDisplay: typeof valueDisplay;
        }
      >({ valueDisplay })
      .modify(type);
  },
);

export const inputBy = defineModifier(
  <V extends any, T extends Type<V> = Type<V>>(
    type: T,
    inputBy: Component<InputComponentProps<V>>,
  ): Type<Infer<T>, InferSchema<T>> => {
    return t
      .annotate<
        T,
        {
          inputBy: typeof inputBy;
        }
      >({ inputBy })
      .modify(type);
  },
);

export const readOnlyWhenInitialExist = defineModifier(
  <T extends Type>(type: T, readOnlyWhenInitialExist: boolean = true) => {
    return t
      .annotate<
        T,
        {
          readOnlyWhenInitialExist: typeof readOnlyWhenInitialExist;
        }
      >({ readOnlyWhenInitialExist })
      .modify(type);
  },
);
