import { isUndefined, set } from "@innoai-tech/lodash";
import { readFile } from "fs/promises";
import { type Plugin, type UserConfig, searchForWorkspaceRoot } from "vite";
import { type VueRoute, vueResolver } from "vite-plugin-pages";

const reJsDoc = /\/\*\*\s*\n([^*]|\*[^\/])*\*\//g;
const reProp = /@property( +)\{(?<type>[^}]+)}( +)(?<path>[\w.]+)/g;

type RouteMetadata = {
  id: string;
  imports: Record<string, Record<string, boolean>>;
  meta: Record<string, any>;
};

export const extractRouteMeta = (
  id: string,
  jsdoc: string
): RouteMetadata | undefined => {
  let r:
    | {
    imports: Record<string, Record<string, boolean>>;
    meta: Record<string, any>;
    id: string;
  }
    | undefined;

  for (const m of jsdoc.matchAll(reProp)) {
    const keyPath = m.groups?.["path"] ?? "";
    const type = m.groups?.["type"] ?? "";

    // Support import("@innoai-tech/vuematerial").mdiPlus
    const importType = type.match(
      /(typeof +)?import\(['"](?<importPath>[^)]+)['"]\)\.(?<name>.+)/
    );

    if (isUndefined(r)) {
      r = {
        imports: {} as Record<string, Record<string, boolean>>,
        meta: {} as Record<string, any>,
        id
      };
    }

    if (importType) {
      set(
        r,
        [
          "imports",
          importType.groups?.["importPath"] ?? "",
          importType.groups?.["name"] ?? ""
        ],
        true
      );
      set(r, keyPath, importType.groups?.["name"] ?? "");
    } else {
      set(r, keyPath, type);
    }
  }

  return r;
};

export const createPageMetaResolver = () => {
  const viteRoot = searchForWorkspaceRoot(process.cwd());

  const pageMetaLocalIdSuffix = "page_meta__";
  const pageMetaSuffix = "id=~page-meta.ts";

  const r = vueResolver();

  const metaMap = new Map<string, RouteMetadata>();
  const metaImports = new Map<string, string>();

  const isPageMeta = (id: string) => {
    return id.endsWith(pageMetaSuffix);
  };

  let userConfig: UserConfig;

  return {
    plugin: {
      name: "vite-plugin/vite-pages-page-meta",
      config(c) {
        userConfig = c;
      },
      resolveId(source: string) {
        if (isPageMeta(source)) {
          return source;
        }
        return null;
      },
      load(id: string) {
        if (isPageMeta(id)) {
          const [filepath, search] = id.split("?");
          const m = metaMap.get(filepath ?? "");
          const q = new URLSearchParams(search ?? "");

          if (q.has("exportAsDefault")) {
            return `export { ${q.get("exportAsDefault")} as default } from "${filepath}";`;
          }

          if (m) {
            const nameOfImports: Record<string, string> = {};

            for (const importPath in m.imports) {
              for (const importName in m.imports[importPath]) {
                nameOfImports[importName] = importPath;
              }
            }

            return `
export default {
  meta: {
    ${Object.keys(m.meta)
              .map((k) => {
                const name = m.meta[k];
                if (nameOfImports[name]) {
                  return `${k}: () => import("${nameOfImports[name]}?exportAsDefault=${name}&id=~page-meta.ts")`;
                }
                return `${k}: ${name}`;
              })
              .join(",\n")}
  }
}`;
          }

          return "export default {}";
        }
        return null;
      }
    } as Plugin,
    onRoutesGenerated: async (routes: VueRoute[]) => {
      const imports = new Map<string, string>();

      const walk = async (routes: VueRoute[]) => {
        for (const r of routes) {
          const id = `__pages_import_${imports.size}__`;
          imports.set(id, "");

          let filepath = r.component;

          if (filepath.endsWith(".tsx")) {
            if (!filepath.startsWith(viteRoot)) {
              filepath = `${userConfig.root}${filepath}`;
            }

            const src = String(await readFile(filepath));

            for (const m of src.matchAll(reJsDoc)) {
              const meta = extractRouteMeta(id, m[0]);
              if (meta) {
                metaImports.set(id, filepath);
                metaMap.set(filepath, meta);
              }
            }
          }

          if (r.children) {
            await walk(r.children);
          }
        }
      };

      await walk(routes);

      return routes;
    },
    pagesResolver: {
      ...r,
      stringify: {
        final(code: string) {
          const importDecls = [...metaImports].map(([id, importPath]) => {
            return `import ${id}${pageMetaLocalIdSuffix} from "${importPath}?${pageMetaSuffix}"`;
          });

          return `
${importDecls.join(";\n")}

${code}        
`;
        },
        component(importName: string) {
          if (metaImports.has(importName)) {
            return `Object.assign(${importName}, ${importName}${pageMetaLocalIdSuffix})`;
          }
          return importName;
        }
      }
    }
  };
};
