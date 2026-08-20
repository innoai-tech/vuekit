import { ImmerBehaviorSubject, rx } from "@innoai-tech/vuekit";
import { BehaviorSubject, EMPTY, map, merge, type Observable, of, switchMap } from "rxjs";
import {
  createFetcher,
  createRequestSubject,
  type FetcherResponse,
  paramsSerializer,
  type RequestConfig,
  type RequestSubject,
  transformRequestBody,
} from "@innoai-tech/fetcher";
import { get, pick } from "es-toolkit/compat";

export interface JSONSchema {
  type?: string;

  [k: string]: any;
}

export interface Parameter {
  name: string;
  in: string;
  schema: JSONSchema;
  required?: boolean;
}

export interface RequestBody {
  content: Record<string, { schema: JSONSchema }>;
}

export interface Response {
  description: string;
  content: Record<string, { schema: JSONSchema }>;

  [X: string]: any;
}

export interface Operation {
  operationId: string;
  summary?: string;
  description?: string;
  tags?: string[];
  parameters?: Parameter[];
  requestBody?: RequestBody;
  responses: Record<number, Response>;
}

export interface Server {
  url: string;
  variables?: Record<string, any>;
}

export interface OpenAPIObject {
  openapi: "3.1.0";
  components: {
    schemas: Record<string, JSONSchema>;
  };
  servers?: Server[];
  paths: Record<string, Record<string, Operation>>;
}

export interface OperationWithMethodPath extends Operation {
  method: string;
  path: string;
  group: string;
}

export class OpenAPI extends ImmerBehaviorSubject<OpenAPIObject> {
  static empty() {
    return new OpenAPI({
      openapi: "3.1.0",
      components: {
        schemas: {},
      },
      paths: {},
    });
  }

  #fetcher = createFetcher({
    paramsSerializer,
    transformRequestBody,
  });

  #requests$ = new BehaviorSubject(new Map<string, RequestSubject<any, any, any>>());

  get #baseURL() {
    return this.value.servers?.[0]?.url ?? "";
  }

  response$(operationId: string): Observable<FetcherResponse<any, any>> {
    return rx(
      this.#requests$,
      switchMap((requests$) => {
        const r$ = requests$.get(operationId);
        if (r$) {
          return merge(r$, r$.error$);
        }
        return EMPTY;
      }),
    );
  }

  requesting$(operationId: string): Observable<boolean> {
    return rx(
      this.#requests$,
      switchMap((requests$) => requests$.get(operationId)?.requesting$ ?? of(false)),
    );
  }

  asRequestConfigCreator(
    operationId: string,
  ): ((inputs: Record<string, any>) => RequestConfig<any>) | null {
    const op = this.#operation(operationId);

    if (!op) {
      return null;
    }

    const contentType = Object.keys(op.requestBody?.content ?? {})[0];

    return (inputs: Record<string, any> = {}): RequestConfig<any> => {
      return {
        method: op.method.toUpperCase(),
        url: this.#baseURL + compilePath(op.path, inputs),
        params: pick(
          inputs,
          op.parameters?.filter((p) => p.in == "query").map((p) => p.name) ?? [],
        ),
        headers: {
          ...pick(inputs, op.parameters?.filter((p) => p.in == "header").map((p) => p.name) ?? []),
          ...(contentType
            ? {
                "Content-Type": contentType,
              }
            : {}),
        },
        body: inputs["body"],
        inputs,
      };
    };
  }

  request(operationId: string, inputs: Record<string, any>) {
    let r$ = this.#requests$.value.get(operationId);

    if (!r$) {
      const createRequestConfig = this.asRequestConfigCreator(operationId);

      if (!createRequestConfig) {
        return;
      }

      const createConfig = Object.assign(createRequestConfig, {
        operationID: operationId,
        TRespData: {} as any,
      });

      r$ = createRequestSubject(createConfig, this.#fetcher);

      this.#requests$.value.set(operationId, r$);
      this.#requests$.next(this.#requests$.value);
    }

    r$.next(inputs);
  }

  #operation(operationId: string): OperationWithMethodPath | null {
    for (const op of operations(this.value, { operationId })) {
      if (op) {
        return op;
      }
    }
    return null;
  }

  operation$(operationId: string): Observable<OperationWithMethodPath | null> {
    return rx(
      this,
      switchMap((openapi) => {
        for (const op of operations(openapi, { operationId })) {
          if (op) {
            return of(op);
          }
        }

        return of(null);
      }),
    );
  }

  operations$(filters: {
    tag?: string;
    operationId?: string;
  }): Observable<OperationWithMethodPath[]> {
    return rx(
      this,
      switchMap((openapi) => of([...operations(openapi, filters)])),
    );
  }

  schema$(ref: string): Observable<JSONSchema | null> {
    const keyPath = ref.split("#/")[1]?.split("/") ?? [];

    return rx(
      this,
      switchMap((openapi) => {
        if (keyPath) {
          return of(get(openapi, keyPath) ?? null);
        }
        return of(null);
      }),
      map((s) => {
        return s ? { ...s, $id: keyPath[keyPath.length - 1] } : s;
      }),
    );
  }

  schema(ref: string): JSONSchema | undefined {
    const keyPath = ref.split("#/")[1]?.split("/") ?? [];
    if (keyPath) {
      return get(this.value, keyPath) ?? undefined;
    }
    return undefined;
  }
}

function* operations(
  openapi: OpenAPIObject,
  filters: {
    tag?: string;
    operationId?: string;
  },
): Iterable<OperationWithMethodPath> {
  for (const [path, ops] of Object.entries(openapi.paths)) {
    for (const [method, o] of Object.entries(ops)) {
      if (o.operationId == "OpenAPI" || o.operationId == "OpenAPIView") {
        continue;
      }

      if (filters.tag) {
        if (!(o.tags ?? []).includes(filters.tag)) {
          continue;
        }
      }

      if (filters.operationId) {
        if (filters.operationId.startsWith("*")) {
          if (!o.operationId.toLowerCase().includes(filters.operationId.slice(1).toLowerCase())) {
            continue;
          }
        } else {
          if (o.operationId.toLowerCase() != filters.operationId.toLowerCase()) {
            continue;
          }
        }
      }

      yield {
        ...o,
        method,
        path,
        group: o.tags?.[0] ?? "",
      };
    }
  }
}

export const compilePath = (path: string, params: Record<string, any> = {}): string =>
  path.replace(/{([\s\S]+?)}/g, (target: string, key: string) =>
    ([] as string[]).concat(params[key] || target).join(","),
  );
