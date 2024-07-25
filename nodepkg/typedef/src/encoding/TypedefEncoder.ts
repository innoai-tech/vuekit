import { get, isEmpty, omit } from "@innoai-tech/lodash";
import { type AnyType, Type, TypeRef, t } from "../core";

export class TypedefEncoder {
  static encode<T extends AnyType>(type: T): string {
    return new TypedefEncoder().encode(type);
  }

  def = new Map<string, string>();

  encode(type: AnyType, all = true): string {
    const d = this._encode(type);
    if (all) {
      return (type instanceof TypeRef ? "" : d) + this.decls();
    }
    return d;
  }

  decls() {
    let decls = "";
    for (const [name, decl] of this.def) {
      decls += `
      
export const ${name}Schema = /*#__PURE__*/${decl}`;
    }

    return decls;
  }

  private _encode(type: AnyType, declName = ""): string {
    return `${this._encodeCode(type, declName)}${
      type.meta["description"]
        ? `.use(t.annotate({ description: ${JSON.stringify(
            type.meta["description"],
          )} }))`
        : ""
    }`;
  }

  private _encodeCode(typ: AnyType, declName = ""): string {
    let type = typ;

    while (true) {
      if (type instanceof TypeRef) {
        break;
      }
      const unwrapped = type.unwrap;
      if (unwrapped === type) {
        break;
      }
      type = unwrapped as AnyType;
    }

    if (type instanceof TypeRef) {
      const refName = type.schema.$ref;

      if (!this.def.has(refName)) {
        // set to lock to avoid loop
        this.def.set(refName, "");
        this.def.set(refName, this._encode(type.unwrap, refName));
      }

      const refSchemaName = `${refName}Schema`;

      return `t.ref<typeof ${refSchemaName}>("${refName}", () => ${refSchemaName})`;
    }

    switch (type.type) {
      case "intersection": {
        return `t.intersection(${type.schema.allOf
          .map((t: AnyType) => this._encode(t))
          .join(", ")})`;
      }

      case "union": {
        const discriminatorPropertyName = get(type.schema, [
          "discriminator",
          "propertyName",
        ]);

        if (discriminatorPropertyName) {
          const mapping: Record<string, string> = {};

          for (const sub of type.schema.oneOf) {
            const e = get(sub.schema.properties, discriminatorPropertyName);

            const props = omit(
              sub.schema.properties,
              discriminatorPropertyName,
            );

            if (e) {
              if (e.type === "enums") {
                for (const enumValue of e.schema.enum) {
                  mapping[`${enumValue}`] = this._encode(t.object(props));
                }
              }
            }
          }

          return `t.discriminatorMapping("${discriminatorPropertyName}", {
${Object.keys(mapping)
  .map((k) => `${JSON.stringify(k)}: ${mapping[k]}`)
  .join(",\n")}
          })`;
        }

        return `t.union(${type.schema.oneOf
          .map((t: AnyType) => this._encode(t))
          .join(", ")})`;
      }

      case "enums": {
        if (declName) {
          return `t.nativeEnum(${declName})`;
        }

        return `t.enums([${type.schema.enum
          .map((v: any) => JSON.stringify(v))
          .join(", ")}])`;
      }

      case "record": {
        return `t.record(${this._encode(type.schema.propertyNames)}, ${this._encode(type.schema.additionalProperties)})`;
      }

      case "object": {
        if (isEmpty(type.schema.properties)) {
          return "t.object()";
        }

        let ts = `{
`;

        for (const p in type.schema.properties) {
          const propSchema = type.schema.properties[p] as Type;

          ts += `  ${JSON.stringify(p)}`;
          ts += `: ${this._encode(propSchema)}`;

          if (propSchema.isOptional) {
            ts += ".optional()";
          }

          ts += `,
`;
        }

        ts += "}";

        return `t.object(${ts})`;
      }
      case "tuple":
        return `t.tuple([${type.schema.items
          .map((t: AnyType) => this._encode(t))
          .join(", ")}])`;
      case "array":
        return `t.array(${this._encode(type.schema.items)})`;
      case "string":
        return "t.string()";
      case "binary":
        return "t.binary()";
      case "number":
        return "t.number()";
      case "integer":
        return "t.integer()";
      case "boolean":
        return "t.boolean()";
      case "nil":
        return "t.nil()";
    }

    return "t.any()";
  }
}
