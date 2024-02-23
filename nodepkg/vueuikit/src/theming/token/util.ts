import { isPlainObject } from "@innoai-tech/lodash";

export const isMap = isPlainObject;

// set like lodash.set but without array
export const setTo = (target: any, keyPath: string[], v: any) => {
  let f = target;

  for (let i = 0; i < keyPath.length; i++) {
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    const key = keyPath[i]!;

    if (i === keyPath.length - 1) {
      f[key] = v;
      continue;
    }

    f[key] = f[key] ?? {};
    f = f[key];
  }
};
