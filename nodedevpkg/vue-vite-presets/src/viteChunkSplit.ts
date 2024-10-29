import { readFileSync } from "fs";
import { dirname, join, relative, resolve } from "path";
import { get, last, sum } from "@innoai-tech/lodash";
import {
  type ManualChunkMeta,
  type OutputOptions,
  type PreRenderedChunk,
} from "rollup";
import {
  type FilterPattern,
  type PluginOption,
  createFilter,
  searchForWorkspaceRoot,
} from "vite";

export interface ChunkSplitOptions {
  lib?: FilterPattern;
  handleModuleFederations?: (
    pkgRelations: Record<string, ModuleFederation>,
  ) => void;
}

export const viteChunkSplit = (
  options: ChunkSplitOptions = {},
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
        `${assetsDir}/[name].[hash].chunk.js`,
      );

      (c.build.rollupOptions.output as any) = {
        ...c.build.rollupOptions.output,
        chunkFileNames: (chunkInfo: PreRenderedChunk) => {
          if (
            chunkInfo.name.startsWith("lib-") ||
            chunkInfo.name.startsWith("webapp-") ||
            chunkInfo.name.startsWith("vendor-")
          ) {
            return chunkFileNames;
          }

          const name = cs.extractName(chunkInfo.moduleIds[0]!);
          return `${assetsDir}/${name}.[hash].chunk.js`;
        },
      };
    },
    outputOptions(o) {
      o.manualChunks = (id: string, meta: ManualChunkMeta) => {
        return cs.chunkName(id, meta);
      };
    },
  };
};

class ChunkSplit {
  private readonly isLib: (id: string) => boolean;
  private readonly dependencies: Record<string, string>;

  constructor(
    private root: string,
    private options: ChunkSplitOptions,
  ) {
    this.isLib = createFilter(options.lib ?? []);

    this.dependencies =
      JSON.parse(String(readFileSync(join(root, "package.json"))))
        .dependencies ?? {};
  }

  #pkgRelegation?: Record<string, ModuleFederation>;

  pkgRelegation(meta: ManualChunkMeta, pkgName: string) {
    return (this.#pkgRelegation ??= this.#resolvePkgRelations(meta))[pkgName];
  }

  chunkName(id: string, meta: ManualChunkMeta): string | undefined {
    return this.#chunkName(id, meta);
  }

  #chunkName(id: string, meta: ManualChunkMeta): string | undefined {
    if (this.isLib(id)) {
      return this.pkgRelegation(meta, this.normalizePkgName(id))?.federation;
    }

    if (id.includes("/node_modules/") || id.startsWith("\0")) {
      const pkgName = this.normalizePkgName(id);

      if (this.isDirectVendor(pkgName)) {
        return this.pkgRelegation(meta, this.normalizePkgName(id))?.federation;
      }
    }

    return this.pkgRelegation(meta, this.normalizePkgName(id))?.federation;
  }

  #resolvePkgRelations({ getModuleInfo, getModuleIds }: ManualChunkMeta) {
    const directImports: Record<string, boolean> = {};
    const moduleFederations: Record<string, ModuleFederation> = {};

    const moduleIds = [...getModuleIds()];

    for (const modID of moduleIds) {
      const pkgName = this.normalizePkgName(modID);

      const markImported = (dep: string) => {
        const currentModuleFederation = (moduleFederations[pkgName] ??=
          new ModuleFederation(pkgName));
        const moduleFederation = (moduleFederations[dep] ??=
          new ModuleFederation(dep));

        moduleFederation.importedBy(currentModuleFederation);
      };

      const m = getModuleInfo(modID)!;

      m.importedIds
        .map((id) => this.normalizePkgName(id))
        .filter((v) => v !== pkgName)
        .forEach((dep) => {
          directImports[dep] = true;
          markImported(dep);
        });

      m.dynamicallyImportedIds
        .map((id) => this.normalizePkgName(id))
        .filter((v) => v !== pkgName)
        .forEach((dep) => {
          markImported(dep);
        });
    }

    for (const pkgName in directImports) {
      if (pkgName.startsWith("lib-") || pkgName.startsWith("webapp-")) {
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
    return this.normalizePkgName(id);
  }

  normalizePkgName(id: string) {
    return this.#normalizePkgName(id)
      .replaceAll(/[:./\[\]]/g, "-")
      .replaceAll(/[@?=]/g, "");
  }

  #normalizePkgName(id: string): string {
    if (id.includes("?")) {
      id = id.split("?")[0]!;
    }

    if (id.includes(":")) {
      return `${id}`;
    }

    if (this.isLib(id)) {
      id = last(id.split("/node_modules/"))!;

      const base = dirname(relative(this.root, id));

      if (base.startsWith("webapp/")) {
        if (base.includes("/mod/")) {
          return `webapp-${base.split("/").slice(1, 4).join("-")}`;
        }
        return `webapp-${base.split("/").slice(1, 3).join("-")}`;
      }

      return `lib-${base.split("/").slice(0, 2).join("-")}`;
    }

    if (id && id.includes("/node_modules/")) {
      const parts = id.split("/node_modules/");

      if (parts.length === 1) {
        if (id) {
          // vite or rollup helpers
          if (id[0] === "\0") {
            if (/react/.test(id)) {
              return "react";
            }
            return "_internal";
          }
          if (id[0] !== "/") {
            return id.split("/")[0]!;
          }
        }

        if (id.startsWith(this.root + "/")) {
          return dirname(id.slice(this.root.length + 1));
        }

        return id;
      }

      const dirPaths = parts[parts.length - 1]!.split("/");

      if (dirPaths[0]![0] === "@") {
        return `vendor-${dirPaths[0]}-${dirPaths[1]}`;
      }

      return `vendor-${dirPaths[0]!}`;
    }

    if (id.startsWith(this.root + "/")) {
      return dirname(id.slice(this.root.length + 1));
    }

    return "_internal";
  }

  private isDirectVendor(pkgName: string) {
    if (pkgName.startsWith("vendor-")) {
      for (const [name] of Object.entries(this.dependencies)) {
        if (this.normalizePkgName(`/node_modules/${name}`) == pkgName) {
          return true;
        }
      }
    }
    return this.dependencies[pkgName];
  }
}

export class ModuleFederation {
  #federation?: string;

  #imported = new Map<string, ModuleFederation>();

  constructor(public name: string) {}

  get federation() {
    return this.#federation ?? this.name;
  }

  importedBy(moduleFederation: ModuleFederation) {
    if (moduleFederation.imported(this.name)) {
      return;
    }

    this.#imported.set(moduleFederation.name, moduleFederation);
  }

  imported(name: string): boolean {
    if (name == this.name) {
      return true;
    }

    for (const [_, m] of this.#imported.entries()) {
      if (m.imported(name)) {
        return true;
      }
    }

    return false;
  }

  #rank?: number;

  get rank(): number {
    return (this.#rank ??=
      this.#imported.size +
      sum([...this.#imported.entries()].map(([_, mf]) => mf.rank)));
  }

  sortedImported() {
    return [...this.#imported.entries()].toSorted(([_a, a], [_b, b]) =>
      a.rank > b.rank ? -1 : 1,
    );
  }

  namesOfImported() {
    return this.sortedImported().map(([name]) => name);
  }

  bindFederation(federation: string) {
    this.#federation = federation;
  }
}

const markPkgRelegation = (
  moduleFederations: Record<string, ModuleFederation>,
  directs: Record<string, boolean>,
) => {
  const federations: Record<string, boolean> = {};

  const walkToNearestDirectFederationFrom = (
    pkg: string,
    visited: Map<string, boolean>,
  ): string => {
    // cycle avoid
    if (visited.has(pkg)) {
      return pkg;
    }

    if (directs[pkg]) {
      return pkg;
    }

    const pkgRelation = moduleFederations[pkg]!;
    if (pkgRelation) {
      const federation = pkgRelation.namesOfImported()[0];

      if (federation) {
        return walkToNearestDirectFederationFrom(federation, visited);
      }
    }

    return pkg;
  };

  for (const [targetPkg, mf] of Object.entries(moduleFederations)) {
    const federation = walkToNearestDirectFederationFrom(targetPkg, new Map());

    mf.bindFederation(federation);
    federations[federation] = true;
  }

  for (const federation in federations) {
    if (!moduleFederations[federation]) {
      moduleFederations[federation] = new ModuleFederation(federation);
    }
  }
};

export const d2Graph = (
  moduleFederations: Record<string, ModuleFederation>,
) => {
  let g = "";

  const pkgId = (pkgName: string) => {
    return pkgName;
  };

  const r = (pkgName: string) => {
    if (moduleFederations[pkgName]) {
      const federation = moduleFederations[pkgName]!.federation;
      return `${JSON.stringify(pkgId(federation))}.${JSON.stringify(pkgId(pkgName))}`;
    }
    return `${JSON.stringify(pkgId(pkgName))}`;
  };

  for (const pkgName in moduleFederations) {
    const pkgRelation = moduleFederations[pkgName]!;
    for (const d of pkgRelation.namesOfImported()) {
      if (r(pkgName) == r(d)) {
        continue;
      }
      g += `${r(pkgName)} -> ${r(d)}      
`;
    }
  }

  return g;
};
