import { isArray } from "es-toolkit/compat";
import { tap } from "rxjs";

const equal = (a: any, b: any) => {
  if (isArray(a) && isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }
    for (const i in a) {
      if (!Object.is(a[i], b[i])) {
        return false;
      }
    }
    return true;
  }
  return Object.is(a, b);
};

export const tapEffect = <T>(create: (input: T) => (() => void) | undefined) => {
  let cleanup: (() => void) | undefined = undefined;
  let prevInput: T | null = null;

  return tap({
    next: (input: T) => {
      if (!equal(input, prevInput)) {
        cleanup?.();
        cleanup = create(input);
        prevInput = input;
      }
    },
    unsubscribe: () => {
      cleanup?.();
    },
  });
};
