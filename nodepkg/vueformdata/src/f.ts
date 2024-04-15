import { type Component, Type, TypeWrapper } from "@innoai-tech/vuekit";
import type { Field, InputComponentProps, FieldMeta } from "./FormData";

export function label(label: string) {
  return <T, S>(t: Type<T, S>) => {
    return TypeWrapper.of(t, {
      $meta: {
        label: label,
      },
    });
  };
}

export function hint(hint: string) {
  return <T, S>(t: Type<T, S>) => {
    return TypeWrapper.of(t, {
      $meta: {
        hint: hint,
      },
    });
  };
}

export function valueDisplay<V>(
  display: (value: V, field$: Field<V>) => JSX.Element | string,
) {
  return <T, S>(t: Type<T, S>) => {
    return TypeWrapper.of(t, {
      $meta: {
        valueDisplay: display,
      },
    });
  };
}

export function inputBy<T>(component: Component<InputComponentProps<T>>) {
  return <T, S>(t: Type<T, S>) => {
    return TypeWrapper.of(t, {
      $meta: {
        input: component,
      } as FieldMeta<T>,
    });
  };
}

export function readOnlyWhenInitialExist(
  readOnlyWhenInitialExist: boolean = true,
) {
  return <T, S>(t: Type<T, S>) => {
    return TypeWrapper.of(t, {
      $meta: {
        readOnlyWhenInitialExist: readOnlyWhenInitialExist,
      },
    });
  };
}
