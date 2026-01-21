export const isIterable = <T>(x: unknown): x is Iterable<T> => {
  return (
    typeof x == "object" && typeof (x as any)[Symbol.iterator] === "function"
  );
};

export const isClass = (x: unknown): x is { new (...args: any[]): any } => {
  return typeof x == "function" && `${x}`.startsWith("class");
};
