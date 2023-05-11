import { Type, type TypeAny } from "../Type";
import { isArray, isPlainObject } from "@innoai-tech/lodash";

export type JSONSchema = {
  type?: string;
  [x: string]: any;
};

export class JSONSchemaEncoder {
  static encode<T extends TypeAny>(type: T): JSONSchema | false {
    return new JSONSchemaEncoder().encode(type);
  }

  def = new Map<string, JSONSchema | false>();

  encode<T extends TypeAny>(type: T): JSONSchema | false {
    const s = this._encode(type);

    const definitions: Record<string, any> = {};

    for (const [name, d] of this.def) {
      definitions[name] = d;
    }

    return Object.assign(s, {
      definitions: definitions
    });
  }

  private _encode<T extends TypeAny>(type: T): JSONSchema | false {
    const jsonSchema = this._encodeCore(type);

    if (type.meta["description"]) {
      return Object.assign(jsonSchema, {
        description: type.meta["description"]
      });
    }

    return jsonSchema;
  }

  private _encodeCore<T extends TypeAny>(type: T): JSONSchema | false {
    switch (type.type) {
      case "binary":
        return {
          type: "string",
          format: "binary"
        };
    }

    return this._encodeFromSchema(type.schema);
  }

  private _encodeFromSchema(s: Record<string, any> | null): JSONSchema | false {
    if (!s) {
      if (s == false) {
        return false;
      }
      return {};
    }

    if (s["$ref"]) {
      const refName = s["$ref"];

      if (!this.def.has(refName)) {
        // set to lock to avoid loop
        this.def.set(refName, {});
        this.def.set(refName, this._encode(s["$underlying"]()));
      }

      return {
        $ref: `#/definitions/${refName}`
      };
    }

    const schema: Record<string, any> = {};

    for (const n in s) {
      if (n.startsWith("$")) {
        continue;
      }

      const p = s[n];

      if (p instanceof Type) {
        schema[n] = this._encode(p);
      } else if (isArray(p)) {
        schema[n] = p.map((item) => {
          if (item instanceof Type) {
            return this._encode(item);
          }
          return item;
        });
      } else if (isPlainObject(p)) {
        schema[n] = this._encodeFromSchema(p);
      } else {
        schema[n] = s[n];
      }
    }

    return schema;
  }
}
