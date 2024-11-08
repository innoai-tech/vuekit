import { camelCase, get, keys, lowerFirst, set } from "@innoai-tech/lodash";
import {
  JSONSchemaDecoder,
  refName,
  t,
  type Type,
  TypedefEncoder,
  TypeScriptEncoder,
} from "@innoai-tech/typedef";
import { dumpObj, Genfile } from "./Genfile";

export interface RequestCreator {
  importPath: string;
  expose: string;
}

export class ClientGen extends Genfile {
  constructor(
    private clientID: string,
    private openapi: any,
    private requestCreator: RequestCreator,
  ) {
    super();
  }

  typedef = new JSONSchemaDecoder((ref) => {
    return [
      get(this.openapi, (ref.split("#/")[1] ?? "").split("/")),
      refName(ref),
    ];
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

    const operations: Record<string, { method: string; path: string } & any> =
      {};

    for (const path in this.openapi.paths) {
      const ops = this.openapi.paths[path];

      for (const method in ops) {
        const op = ops[method];

        if (op.operationId === "") {
          continue;
        }

        if (op.operationId === "OpenAPI" || op.operationId === "OpenAPIView") {
          continue;
        }

        operations[op.operationId] = {
          ...op,
          method: method,
          path: path,
        };
      }
    }

    for (const id of Object.keys(operations).sort()) {
      const op = operations[id]!;

      this.scanOperation(op.method, op.path, op);
    }
  }

  scanOperation(method: string, path: string, op: any) {
    const requestObject = {
      method: method.toUpperCase(),
      url: path,
    };

    const requestParameterSchema: Record<string, Type> = {};

    let hasParamInPath = false;
    let isRequestTypeEmpty = true;
    let hasAccpetHeader = false;

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
            `\${x[${JSON.stringify(p.name)}]}`,
          );
        }

        if (p.in === "header") {
          if (p.name === "Accept") {
            hasAccpetHeader = true;
          }

          set(
            requestObject,
            ["headers", p.name],
            Genfile.id(`x[${JSON.stringify(p.name)}]`),
          );
        }

        if (p.in === "query") {
          set(
            requestObject,
            ["params", p.name],
            Genfile.id(`x[${JSON.stringify(p.name)}]`),
          );
        }

        if (p.required) {
          set(requestParameterSchema, p.name, this.typedef.decode(p.schema));
        } else {
          set(
            requestParameterSchema,
            p.name,
            this.typedef.decode(p.schema).optional(),
          );
        }
      }
    }

    const bodyTypes: Type[] = [];

    if (op.requestBody) {
      const contentTypes = keys(op.requestBody.content);

      for (const ct of contentTypes) {
        isRequestTypeEmpty = false;

        let schema = op.requestBody.content[ct].schema;

        if (ct === "application/octet-stream") {
          schema = { type: "string", format: "binary" };
        }

        set(requestObject, "body", Genfile.id("x.body"));

        if (contentTypes.length === 1) {
          if (!get(requestObject, ["headers", "Content-Type"])) {
            set(requestObject, ["headers", "Content-Type"], ct);
          }
          set(requestParameterSchema, "body", this.typedef.decode(schema));
          continue;
        }

        set(
          requestObject,
          ["headers", "Content-Type"],
          Genfile.id(`x[${JSON.stringify("Content-Type")}]`),
        );

        bodyTypes.push(
          t.object({
            "Content-Type": t.literal(ct),
            body: this.typedef.decode(schema),
          }),
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
                t.union(...bodyTypes),
              )
            : t.object(requestParameterSchema),
        );

    const [accept, respSchema] = getRespBodySchema(op.responses);

    if (!!accept) {
      if (hasAccpetHeader) {
        set(
          requestObject,
          ["headers", "Accept"],
          Genfile.id(`x.Accept ?? ${JSON.stringify(accept)}`),
        );
      } else {
        set(requestObject, ["headers", "Accept"], accept);
      }
    }

    const responseType = this.decodeAsTypeScript(
      this.typedef.decode(respSchema),
    );

    this.decl(`
export const ${lowerCamelCase(op.operationId)} = /*#__PURE__*/${this.requestCreator.expose}<${requestType}, ${responseType}>(
  "${this.clientID}.${op.operationId}",
  (${isRequestTypeEmpty ? "" : "x"}) => (${dumpObj(requestObject)}),
)
`);
  }

  private decodeAsTypeScript(t: Type) {
    // just for collect
    this.td.encode(t, false);

    return this.ts.encode(t, false);
  }
}

const lowerCamelCase = (id: string) => lowerFirst(camelCase(id));

const getRespBodySchema = (responses: any): [string, Object] => {
  let bodySchema = { type: "null" };

  for (const codeOrDefault in responses) {
    const resp = responses[codeOrDefault];

    const code = Number(codeOrDefault);

    if (code >= 200 && code < 300 && resp.content) {
      for (const [contentType, mediaType] of Object.entries(
        resp.content as Record<string, { schema?: Object }>,
      )) {
        if (mediaType && !!mediaType.schema) {
          return [contentType, mediaType.schema];
        }
      }
    }
  }

  return ["", bodySchema];
};
