import { Type } from "../Type";

export function describe(description: string, meta?: Record<string, any>) {
  return <T, S>(t: Type<T, S>): Type<T, S> => {
    return Type.wrap(t, (t) => {
      return Object.assign(t, {
        meta: {
          ...t.meta,
          ...(meta ?? {}),
          description,
        },
      });
    });
  };
}
