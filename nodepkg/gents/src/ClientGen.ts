import { Genfile, dumpObj } from "./Genfile";
import {
  camelCase,
  first,
  values,
  lowerFirst,
  get,
  set,
  keys
} from "@innoai-tech/lodash";
import {
  JSONSchemaDecoder,
  refName,
  t,
  type AnyType,
  TypedefEncoder,
  TypeScriptEncoder
} from "@innoai-tech/typedef";

export interface RequestCreator {
  importPath: string;
  expose: string;
}

export class ClientGen extends Genfile {
  constructor(
    private clientID: string,
    private openapi: any,
    private requestCreator: RequestCreator
  ) {
    super();
  }

  typedef = new JSONSchemaDecoder((ref) => {
    return [get(this.openapi, ref.split("#/")[1]!.split("/")), refName(ref)];
  });

  td = new TypedefEncoder();
  ts = new TypeScriptEncoder();

  override async sync(file: string) {
    this.decl(this.ts.decls());
    this.decl(this.td.decls());
    return await super.sync(file);
  }

  scan() {
    this.import(this.requestCreator.importPath, this.requestCreator.expose, "");
    this.import("@innoai-tech/typedef", "t", "");

    for (const path in this.openapi.paths) {
      const ops = this.openapi.paths[path];

      for (const method in ops) {
        const op = ops[method];

        if (op.operationId === "") {
          continue;
        }

        if (op.operationId === "OpenAPI") {
          continue;
        }

        this.scanOperation(method, path, op);
      }
    }
  }

  scanOperation(method: string, path: string, op: any) {
    const requestObject = {
      method: method.toUpperCase(),
      url: path
    };

    const requestParameterSchema: Record<string, AnyType> = {};

    const requestUsed = {};
    let hasParamInPath = false;
    let isRequestTypeEmpty = true;

    if (op.parameters) {
      for (const p of op.parameters) {
        if (p.in === "header" && p.name === "Authorization") {
          continue;
        }

        if (p.in === "cookie") {
          continue;
        }

        isRequestTypeEmpty = false;

        if (p.in === "path") {
          hasParamInPath = true;
          requestObject.url = requestObject.url.replace(
            `{${p.name}}`,
            `\${${p.in}_${lowerCamelCase(p.name)}}`
          );
        }

        if (p.in === "header") {
          set(
            requestObject,
            ["headers", p.name],
            Genfile.id(`${p.in}_${lowerCamelCase(p.name)}`)
          );
        }

        if (p.in === "query") {
          set(
            requestObject,
            ["params", p.name],
            Genfile.id(`${p.in}_${lowerCamelCase(p.name)}`)
          );
        }

        set(
          requestUsed,
          p.name,
          Genfile.id(`${p.in}_${lowerCamelCase(p.name)}`)
        );

        if (p.required) {
          set(requestParameterSchema, p.name, this.typedef.decode(p.schema));
        } else {
          set(
            requestParameterSchema,
            p.name,
            this.typedef.decode(p.schema).optional()
          );
        }
      }
    }

    const bodyTypes: AnyType[] = [];

    if (op.requestBody) {
      const contentTypes = keys(op.requestBody.content);

      for (const ct of contentTypes) {
        isRequestTypeEmpty = false;

        let schema = op.requestBody.content[ct].schema;

        if (ct === "application/octet-stream") {
          schema = { type: "string", format: "binary" };
        }

        set(requestObject, "body", Genfile.id("body"));
        set(requestUsed, "body", Genfile.id("body"));

        if (contentTypes.length === 1) {
          if (!get(requestObject, ["headers", "Content-Type"])) {
            set(requestObject, ["headers", "Content-Type"], ct);
          }
          set(requestParameterSchema, "body", this.typedef.decode(schema));
          continue;
        }

        set(
          requestUsed,
          "Content-Type",
          Genfile.id(`${lowerCamelCase("Content-Type")}`)
        );

        set(
          requestObject,
          ["headers", "Content-Type"],
          Genfile.id(`${lowerCamelCase("Content-Type")}`)
        );

        bodyTypes.push(
          t.object({
            "Content-Type": t.literal(ct),
            body: this.typedef.decode(schema)
          })
        );
      }
    }

    if (hasParamInPath) {
      requestObject.url = Genfile.id(`\`${requestObject.url}\``) as any;
    }

    const requestType = isRequestTypeEmpty
      ? "void"
      : this.decodeAsTypeScript(
        bodyTypes.length > 0
          ? t.intersection(
            t.object(requestParameterSchema),
            t.union(...bodyTypes)
          )
          : t.object(requestParameterSchema)
      );

    const responseType = this.decodeAsTypeScript(this.typedef.decode(getRespBodySchema(op.responses)));

    this.decl(`
export const ${lowerCamelCase(op.operationId)} =
/*#__PURE__*/${this.requestCreator.expose}<${requestType}, ${responseType}>(
  "${this.clientID}.${op.operationId}",
  (${isRequestTypeEmpty ? "" : dumpObj(requestUsed)}) => (${dumpObj(
      requestObject
    )}),
)
`);
  }

  private decodeAsTypeScript(t: AnyType) {
    // just for collect
    this.td.encode(t, false);

    return this.ts.encode(t, false);
  }
}

const lowerCamelCase = (id: string) => lowerFirst(camelCase(id));

const getRespBodySchema = (responses: any) => {
  let bodySchema = { type: "null" };

  for (const codeOrDefault in responses) {
    const resp = responses[codeOrDefault];

    const code = Number(codeOrDefault);

    if (code >= 200 && code < 300 && resp.content) {
      const mediaType = first(values(resp.content));
      if (mediaType && mediaType.schema) {
        bodySchema = mediaType.schema;
        break;
      }
    }
  }

  return bodySchema;
};
