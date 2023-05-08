import { Type, type TypeAny } from "../Type";
import { isArray, isPlainObject } from "@innoai-tech/lodash";

export type JSONSchema = {
  type?: string;
  [x: string]: any;
};

export class JSONSchemaEncoder {
  static encode<T extends TypeAny>(type: T): JSONSchema {
    return new JSONSchemaEncoder().encode(type);
  }

  def = new Map<string, JSONSchema>();

  encode<T extends TypeAny>(type: T): JSONSchema {
    const s = this._encode(type);

    const definitions: Record<string, any> = {};

    for (const [name, d] of this.def) {
      definitions[name] = d;
    }

    return Object.assign(s, {
      definitions: definitions
    });
  }

  private _encode<T extends TypeAny>(type: T): JSONSchema {
    switch (type.type) {
      case "literal": {
        return {
          enum: [type.schema]
        };
      }
      case "enums": {
        return {
          enum: Object.values(type.schema)
        };
      }
      case "object":
        const props: Record<string, any> = {};
        const required: string[] = [];

        for (const p in type.schema) {
          const propSchema = type.schema[p] as Type;
          props[p] = this._encode(propSchema);
          if (!propSchema.isOptional) {
            required.push(p);
          }
        }

        return {
          type: "object",
          properties: props,
          required: required
        };
      case "array":
        return {
          type: "array",
          items: this._encode(type.schema)
        };
      case "binary": {
        return {
          type: "string",
          format: "binary"
        };
      }
      case "string": {
        return {
          type: "string"
        };
      }
      case "number": {
        return {
          type: "number"
        };
      }
      case "integer": {
        return {
          type: "integer"
        };
      }
      case "boolean": {
        return {
          type: "boolean"
        };
      }
    }

    return this._encodeFromSchema(type.schema);
  }

  private _encodeFromSchema(s: Record<string, any> | null): JSONSchema {
    if (!s) {
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
          return p;
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
