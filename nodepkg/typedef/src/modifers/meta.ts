import { Type } from "../Type";

export function meta(meta: Record<string, any>) {
  return <T, S>(t: Type<T, S>): Type<T, S> => {
    return Type.from(t, {
      meta
    });
  };
}
