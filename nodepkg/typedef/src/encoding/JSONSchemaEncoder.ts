import { isType, Schema, type Type } from "../core";
import { isArray, isObjectLike } from "../core/util.ts";

export type JSONSchema = {
  type?: string;
  [x: string]: any;
};

export class JSONSchemaEncoder {
  static encode<T extends Type>(type: T): JSONSchema | false {
    return new JSONSchemaEncoder().encode(type);
  }

  def = new Map<string, JSONSchema | false>();

  encode<T extends Type>(type: T): JSONSchema | false {
    const s = this._encode(type);

    const $defs: Record<string, any> = {};

    for (const [name, d] of this.def) {
      $defs[name] = d;
    }

    return Object.assign(s, {
      $defs: $defs,
    });
  }

  private _encode<T extends Type>(type: T): JSONSchema | false {
    let schema = this._encodeSchema(type);

    if (Schema.metaProp(type, "title")) {
      schema = {
        ...schema,
        title: Schema.metaProp(type, "title"),
      };
    }

    if (Schema.metaProp(type, "description")) {
      schema = {
        ...schema,
        description: Schema.metaProp(type, "description"),
      };
    }

    return schema;
  }

  private _encodeSchema<T extends Type>(type: T): JSONSchema | false {
    if (Schema.schemaProp(type, "$ref")) {
      const refName = Schema.schemaProp(type, "$ref");

      if (refName) {
        if (!this.def.has(refName)) {
          // set to lock to avoid loop
          this.def.set(refName, {});

          const unwrap = (type as any).schema[Schema.unwrap];
          this.def.set(refName, this._encode(unwrap()));
        }

        return {
          $ref: `#/$defs/${refName}`,
        };
      }

      return this._encode(type);
    }

    return this._normalizeSchema(type.schema!);
  }

  private _normalizeSchema(s: Record<string, any> | null): JSONSchema | false {
    if (!s) {
      if (s === false) {
        return false;
      }
      return {};
    }

    const schema: Record<string, any> = {};

    for (const k of Object.getOwnPropertyNames(s)) {
      const v = s[k];

      if (isType(v)) {
        schema[k] = this._encode(v);
      } else if (isArray(v)) {
        schema[k] = v.map((item) => {
          if (isType(item)) {
            return this._encode(item);
          }
          return item;
        });
      } else if (isObjectLike(v)) {
        schema[k] = this._normalizeSchema(v);
      } else {
        schema[k] = v;
      }
    }

    return schema;
  }
}
