import { has, keys, omit, set } from "es-toolkit/compat";
import type { DesignTokenOption } from "./DesignToken";
import { isMap } from "./util";

export class Mixin {
  static walkValue = (
    o: any,
    cb: (v: any, path: any[]) => void,
    parent: any[] = [],
  ) => {
    for (const k in o) {
      const v = o[k] as any;
      if (isMap(v)) {
        if (has(v, "__mixin")) {
          cb(v, [...parent, k]);
          continue;
        }
        Mixin.walkValue(v, cb, [...parent, k]);
        continue;
      }
      cb(v, [...parent, k]);
    }
  };

  private _values: Record<string, {}> = {};

  constructor(dt: DesignTokenOption<any, any, any, any>) {
    Mixin.walkValue(dt.value, (v, p) => {
      const token = p.join(".");
      set(this._values, [token], omit(v, "__mixin"));
    });
  }

  get tokens() {
    return keys(this._values);
  }

  get(token: string) {
    return this._values[token];
  }
}
