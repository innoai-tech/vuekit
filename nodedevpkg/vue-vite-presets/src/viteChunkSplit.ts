import { get, forEach } from "@innoai-tech/lodash";
import { readFileSync } from "fs";
import { relative, dirname, join, resolve } from "path";
import {
  type ManualChunkMeta,
  type PreRenderedChunk,
  type OutputOptions
} from "rollup";
import {
  type PluginOption,
  searchForWorkspaceRoot,
  createFilter,
  type FilterPattern
} from "vite";

export interface ChunkSplitOptions {
  lib?: FilterPattern;
  handleModuleFederations?: (
    pkgRelations: Record<string, ModuleFederation>
  ) => void;
}

export const viteChunkSplit = (
  options: ChunkSplitOptions = {}
): PluginOption => {
  const viteRoot = searchForWorkspaceRoot(".");
  const cs = new ChunkSplit(resolve(viteRoot), options);

  return {
    name: "vite-presets/chunk-split",
    apply: "build",
    config(c) {
      c.build = c.build ?? {};

      const assetsDir = c.build.assetsDir ?? "assets";

      c.build.rollupOptions = c.build.rollupOptions ?? {};

      c.build.rollupOptions.output =
        c.build.rollupOptions.output ?? ({} as OutputOptions);
      const chunkFileNames = get(
        c.build.rollupOptions.output,
        ["chunkFileNames"],
        `${assetsDir}/[name].[hash].chunk.js`
      );

      c.build.rollupOptions.output = {
        ...c.build.rollupOptions.output,
        chunkFileNames: (chunkInfo: PreRenderedChunk) => {
          if (
            chunkInfo.name.startsWith("lib-") ||
            chunkInfo.name.startsWith("webapp-") ||
            chunkInfo.name.startsWith("vendor-")
          ) {
            return chunkFileNames;
          }

          const name = cs
            .extractName(chunkInfo.moduleIds[0]!)
            .replaceAll(/[\[\]]/g, "_")
            .replaceAll("/", "-");
          return `${assetsDir}/${name}.[hash].chunk.js`;
        }
      };
    },
    outputOptions(o) {
      o.manualChunks = (id: string, meta: ManualChunkMeta) => {
        return cs.chunkName(id, meta)?.replaceAll("/", "-").replaceAll("@", "");
      };
    }
  };
};

class ChunkSplit {
  private readonly isLib: (id: string) => boolean;
  private readonly dependencies: Record<string, string>;

  constructor(private root: string, private options: ChunkSplitOptions) {
    this.isLib = createFilter(options.lib ?? []);
    this.dependencies =
      JSON.parse(String(readFileSync(join(root, "package.json"))))
        .dependencies ?? {};
  }

  private _pkgRelegation?: ReturnType<typeof this.resolvePkgRelations>;

  pkgRelegation(meta: ManualChunkMeta, pkgName: string) {
    return (this._pkgRelegation =
      this._pkgRelegation ?? this.resolvePkgRelations(meta))[pkgName];
  }

  chunkName(id: string, meta: ManualChunkMeta): string | undefined {
    if (this.isLib(id)) {
      return this.pkgRelegation(meta, this.extractPkgName(id))?.federation;
    }

    if (id.includes("node_modules") || id.startsWith("\0")) {
      const pkgName = this.extractPkgName(id);

      if (this.isDirectVendor(pkgName)) {
        return this.pkgRelegation(meta, this.extractPkgName(id))?.federation;
      }
    }

    return;
  }

  private resolvePkgRelations({
                                getModuleInfo,
                                getModuleIds
                              }: ManualChunkMeta) {
    const directImports: Record<string, boolean> = {};
    const moduleFederations: Record<string, ModuleFederation> = {};

    const moduleIds = [...getModuleIds()];

    forEach(moduleIds, (modID) => {
      const pkgName = this.extractPkgName(modID) || modID;

      const markImported = (dep: string) => {
        const currentModuleFederation = (moduleFederations[pkgName] =
          moduleFederations[pkgName] ?? new ModuleFederation(pkgName));
        const moduleFederation = (moduleFederations[dep] =
          moduleFederations[dep] ?? new ModuleFederation(dep));

        moduleFederation.importedBy(currentModuleFederation);
      };

      const m = getModuleInfo(modID)!;

      m.importedIds
        .map((id) => this.extractPkgName(id))
        .filter((v) => v !== pkgName)
        .forEach((dep) => {
          directImports[dep] = true;
          markImported(dep);
        });

      m.dynamicallyImportedIds
        .map((id) => this.extractPkgName(id))
        .filter((v) => v !== pkgName)
        .forEach((dep) => {
          markImported(dep);
        });
    });

    for (const pkgName in directImports) {
      if (pkgName.startsWith("@lib")) {
        continue;
      }

      if (!this.isDirectVendor(pkgName)) {
        delete directImports[pkgName];
      }
    }

    markPkgRelegation(moduleFederations, directImports);

    this.options.handleModuleFederations?.(moduleFederations);

    return moduleFederations;
  }

  extractName(id: string): string {
    if (id.startsWith(this.root)) {
      return dirname(id.slice(this.root.length + 1));
    }
    return this.extractPkgName(id);
  }

  private extractPkgName(id: string): string {
    if (this.isLib(id)) {
      const base = relative(this.root, id);
      if (base.startsWith("webapp/")) {
        if (base.includes("/mod/")) {
          return `@${base.split("/").slice(0, 4).join("-")}`;
        }
        return `@${base.split("/").slice(0, 3).join("-")}`;
      }
      return `@lib/${base.split("/").slice(0, 2).join("-")}`;
    }

    const parts = id.split("/node_modules/");

    if (parts.length === 1) {
      if (id) {
        // vite or rollup helpers
        if (id[0] === "\0") {
          if (/react/.test(id)) {
            return "react";
          }
          return "@internal";
        }
        if (id[0] !== "/") {
          return id.split("/")[0]!;
        }
      }

      if (id.startsWith(this.root + "/")) {
        return `@${id.slice(this.root.length + 1).replaceAll(/[.\[\]]/g, "_")}`;
      }

      return id;
    }

    const dirPaths = parts[parts.length - 1]!.split("/");

    if (dirPaths[0]![0] === "@") {
      return `vendor-${dirPaths[0]}/${dirPaths[1]}`;
    }

    return `vendor-${dirPaths[0]!}`;
  }

  private isDirectVendor(pkgName: string) {
    if (pkgName.startsWith("vendor-")) {
      return this.dependencies[pkgName.slice("vendor-".length)];
    }
    return this.dependencies[pkgName];
  }
}

export class ModuleFederation {
  _federation?: string;

  _rank = 0;
  _imported = new Map<string, ModuleFederation>();

  constructor(public name: string) {
  }

  get federation() {
    return this._federation ?? this.name;
  }

  rank() {
    return this._rank;
  }

  importedBy(moduleFederation: ModuleFederation) {
    this._rank++;
    this._imported.set(moduleFederation.name, moduleFederation);
  }

  namesOfImported() {
    return [...this._imported.keys()];
  }

  bindFederation(federation: string) {
    this._federation = federation;
  }
}

const markPkgRelegation = (
  moduleFederations: Record<string, ModuleFederation>,
  directs: Record<string, boolean>
) => {
  const federations: Record<string, boolean> = {};

  for (const targetPkg in moduleFederations) {
    let federation = targetPkg;
    const visited: Record<string, boolean> = { }

    while (!visited[federation] && !directs[federation]) {
      visited[federation] = true

      const pkgRelation = moduleFederations[federation]!;

      if (pkgRelation) {
        const names = pkgRelation.namesOfImported();

        names.sort((a, b) => {
          return (moduleFederations[a]?.rank() ?? 0) >
          (moduleFederations[b]?.rank() ?? 0)
            ? -1
            : 1;
        });

        federation = names[0]!;
        continue;
      }
      break;
    }

    moduleFederations[targetPkg]?.bindFederation(federation);
    federations[federation] = true;
  }

  for (const federation in federations) {
    if (!moduleFederations[federation]) {
      moduleFederations[federation] = new ModuleFederation(federation);
    }
  }
};

export const d2Graph = (
  moduleFederations: Record<string, ModuleFederation>
) => {
  let g = "";

  const pkgId = (pkgName: string) => {
    return pkgName.replaceAll("@", "").replaceAll("/", "-");
  };

  const r = (pkgName: string) => {
    if (moduleFederations[pkgName]) {
      const federation = moduleFederations[pkgName]!.federation;
      if (pkgName == federation) {
        return pkgId(pkgName);
      }
      return `${pkgId(federation)}.${pkgId(pkgName)}`;
    }
    return `${pkgId(pkgName)}`;
  };

  for (const pkgName in moduleFederations) {
    const pkgRelation = moduleFederations[pkgName]!;
    for (const d of pkgRelation.namesOfImported()) {
      g += `${r(pkgName)} -> ${r(d)}      
`;
    }
  }

  return g;
};
