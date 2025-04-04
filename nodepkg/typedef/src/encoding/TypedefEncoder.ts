import { Schema, t, type Type } from "../core";
import { TypeScriptEncoder } from "./TypeScriptEncoder.ts";
import { validationRules } from "./JSONSchemaDecoder.ts";
import { isUndefined } from "../core/util.ts";

export class TypedefEncoder {
  static encode<T extends Type>(type: T): string {
    return new TypedefEncoder().encode(type);
  }

  def = new Map<string, [string, string]>();
  visited = new Map<string, boolean>();

  encode(type: Type, all = true): string {
    const d = this._encode(type);
    if (all) {
      return (Schema.schemaProp(type, "$ref") ? "" : d) + this.decls();
    }
    return d;
  }

  decls() {
    let decls = "";
    for (const [name, [type, decl]] of this.def) {
      decls += `
      
export ${type} ${name} ${decl}`;
    }
    return decls;
  }

  private _encode(rawType: Type): string {
    let type = rawType;

    if (Schema.schemaProp(type, "$ref")) {
      const refName = Schema.schemaProp(type, "$ref");

      if (type.type == "object" || type.type == "intersection") {
        const schemaClass = `${refName}Schema`;

        if (!this.visited.get(schemaClass)) {
          this.visited.set(schemaClass, true);

          let decl = this._encode(Schema.schemaProp(type, Schema.unwrap)());

          if (decl) {
            if (decl) {
              if (decl.endsWith("Schema")) {
                decl = ` extends ${decl} {}`;
              }

              this.def.set(schemaClass, ["class", decl]);
            }

            this.def.set(schemaClass, ["class", decl]);
          }
        }

        return schemaClass;
      }

      if (type.type == "enums") {
        return `/* @type:${type.type} */ ${refName}`;
      }

      return type.type;
    }

    if (type.type == "intersection" || type.type == "object") {
      let d = `{
`;

      for (const [k, _, pt] of type.entries({})) {
        d += `
`;

        const title = Schema.metaProp(pt, "title");
        if (title) {
          d += `@t.annotate(${JSON.stringify({ title })})
`;
        }

        const typedef = this._typedef(pt);

        if (typedef) {
          d += `@${typedef}
`;
        }

        for (const rule of validationRules) {
          if ((t as any)[rule] && !isUndefined(Schema.schemaProp(pt, rule))) {
            if (rule == "pattern") {
              d += `@t.${rule}(new RegExp(${JSON.stringify(Schema.schemaProp(pt, rule))}),${JSON.stringify(Schema.metaProp(pt, "x-pattern-err-msg"))})
`;
            } else {
              d += `@t.${rule}(${JSON.stringify(Schema.schemaProp(pt, rule))})
`;
            }
          }
        }

        const optional = Schema.schemaProp(pt, Schema.optional);
        if (optional) {
          d += `@t.optional()
`;
        }

        d += `${JSON.stringify(k)}${optional ? "?" : "!"}: ${TypeScriptEncoder.encode(pt, false)}
`;
      }
      d += `
}`;

      return d;
    }

    return this._typedef(type);
  }

  private _typedef(type: Type): string {
    switch (type.type) {
      case "union": {
        if (Schema.schemaProp(type, "discriminator")) {
          const discriminator = Schema.schemaProp(type, "discriminator");

          const propName = discriminator["propertyName"];

          const mapping = Schema.schemaProp(type, "oneOf")
            .map((t: any) => {
              const discriminatorSchema = Schema.schemaProp(t, "properties")[
                propName
              ];
              if (!discriminatorSchema) {
                return "";
              }

              const e = discriminatorSchema.schema["enum"];

              if (!e) {
                return "";
              }

              const id = this._encode(t);

              return e
                .map((k: string) => {
                  return `${JSON.stringify(k)}: t.ref(${JSON.stringify(id)}, () => t.object(${id})),`;
                })
                .join("");
            })
            .join("");

          return `t.discriminatorMapping(${JSON.stringify(propName)}, {
            ${mapping}
          })`;
        }

        return `t.union(${Schema.schemaProp(type, "oneOf")
          .map((t: Type) => this._typedef(t))
          .join(", ")})`;
      }

      case "enums": {
        if (Schema.schemaProp(type, "$ref")) {
          return `t.nativeEnum(${Schema.schemaProp(type, "$ref")})`;
        }

        return `t.enums([${Schema.schemaProp(type, "enum")
          .map((v: any) => JSON.stringify(v))
          .join(", ")}])`;
      }

      case "record": {
        return `t.record(${this._typedef(
          Schema.schemaProp(type, "propertyNames") ?? t.string(),
        )}, ${this._typedef(
          Schema.schemaProp(type, "additionalProperties") ?? t.any(),
        )})`;
      }
      case "object": {
        const ref = this._encode(type);
        return `t.ref(${JSON.stringify(ref)}, () => t.object(${ref}))`;
      }
      case "tuple":
        return `t.tuple([${Schema.schemaProp(type, "items")
          .map((t: Type) => this._typedef(t))
          .join(", ")}])`;
      case "array":
        return `t.array(${this._typedef(Schema.schemaProp(type, "items") ?? t.any())})`;
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
