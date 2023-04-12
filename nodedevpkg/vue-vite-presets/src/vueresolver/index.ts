import {
  vueResolver,
  PageContext
} from "vite-plugin-pages";
import { set, merge } from "@innoai-tech/lodash";
import { readFile } from "fs/promises";

// @ts-ignore
import { parse } from "jsdoctypeparser";

const reJsDoc = /\/\*\*\s*\n([^*]|\*[^\/])*\*\//g;
const reProp = /@property( +)\{(?<type>[^}]+)}( +)(?<path>[\w.]+)/g;

type RouteMetadata = {
  __imports: Record<string, boolean>,
  meta: Record<string, any>
}

export const extractRouteMeta = (jsdoc: string): RouteMetadata | undefined => {
  let r;
  for (const m of jsdoc.matchAll(reProp)) {
    const keyPath = m.groups!["path"]!;
    const type = m.groups!["type"]!;

    // Support import("@innoai-tech/vuematerial").mdiPlus
    const importType = type.match(/(typeof +)?import\(['"](?<importPath>[^)]+)['"]\)\.(?<name>.+)/);

    r = r ?? {
      __imports: {} as Record<string, boolean>,
      meta: {} as Record<string, any>
    };

    if (importType) {
      set(r, ["__imports", importType.groups!["importPath"]!, importType.groups!["name"]!], true);
      set(r, keyPath, importType.groups!["name"]!);
    } else {
      set(r, keyPath, type);
    }
  }

  return r;
};

export const customVueResolver = () => {
  const r = vueResolver();
  const metaMap = new Map<string, any>();
  let imports = {} as Record<string, Record<string, boolean>>;

  return {
    ...r,
    stringify: {
      final: (code: string) => {


        return `
${Object.keys(imports).map((importPath) => `import { ${Object.keys(imports[importPath]!).join(", ")} } from ${JSON.stringify(importPath)}`).join(";\n")}
          
${code}        
`;
      },
      dynamicImport: (path: string) => {
        if (metaMap.has(path)) {
          const m = metaMap.get(path);

          return `(() => {
    const C = () => import("${path}");
    C.meta = {
      ${Object.keys(m.meta).map((k) => `${k}: ${m.meta[k]}`).join(",\n")}
    };
    return C;
  })()`;
        }

        return `(() => {
    const load = () => import("${path}");
    return load;
  })()`;
      }
    },
    resolveRoutes: async (ctx: PageContext) => {
      for (const [path, _] of ctx.pageRouteMap) {
        if (path.endsWith(".tsx")) {
          const src = String(await readFile(path));
          for (const m of src.matchAll(reJsDoc)) {
            const r = extractRouteMeta(m[0]);
            if (r) {
              metaMap.set(path, r);
              imports = merge(imports, r.__imports);
            }
          }
        }
      }
      return r.resolveRoutes(ctx);
    }
  };
};
