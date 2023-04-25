import { Type, type TypeAny } from "./Type";

export type MetaBuilder<M extends Record<string, any>> = {
  [K in keyof M]-?: M[K] extends NonNullable<M[K]>
    ? (p: M[K]) => MetaBuilder<Omit<M, K>>
    : (p?: M[K]) => MetaBuilder<Omit<M, K>>;
} & {
  <T extends TypeAny>(t: T): T
}

export function createMetaBuilder<M extends Record<string, any>>(
  meta?: M
): MetaBuilder<M> {
  const metadata = meta ?? ({} as Record<string, any>);

  const fn = (t: Type) => {
    return Type.from(t, {
      meta: {
        ...t.meta,
        ...metadata
      }
    });
  };

  const b = new Proxy(fn, {
    get(_, name: string) {
      return (v: any): any => {
        metadata[name] = v ?? true;
        return b;
      };
    }
  });

  return b as any;
}
