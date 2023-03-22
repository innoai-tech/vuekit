export const ext = <T extends object, E extends {}>(target: T, ext: E) => {
  return new Proxy(target, {
    get(target: T, p: string | symbol): any {
      return (ext as any)[p] ?? (target as any)[p];
    },
  }) as T & E;
};
