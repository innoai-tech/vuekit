import { basename, dirname, extname, join, relative, resolve } from "path";
import { get, last } from "es-toolkit/compat";
import { type OutputOptions, type PreRenderedChunk } from "rolldown";
import { globby } from "globby";
import {
  createFilter,
  type FilterPattern,
  type PluginOption,
  searchForWorkspaceRoot,
} from "rolldown-vite";
import { readFile } from "fs/promises";

export interface ChunkSplitOptions {
  lib?: FilterPattern;
}

export const viteChunkSplit = (
  options: ChunkSplitOptions = {},
): PluginOption => {
  const viteRoot = searchForWorkspaceRoot(".");
  let cs: ChunkSplit;

  return {
    name: "vite-presets/chunk-split",
    apply: "build",
    async config(c) {
      cs = await ChunkSplit.load(resolve(viteRoot), options);

      c.build = c.build ?? {};

      const assetsDir = c.build.assetsDir ?? "assets";

      c.build.rolldownOptions = c.build.rolldownOptions ?? {};

      c.build.rolldownOptions.output =
        c.build.rolldownOptions.output ?? ({} as OutputOptions);

      const chunkFileNames = get(
        c.build.rolldownOptions.output,
        ["chunkFileNames"],
        `${assetsDir}/[name].[hash].chunk.js`,
      );

      c.build.rolldownOptions.output = {
        ...c.build.rolldownOptions.output,
        chunkFileNames: (chunkInfo: PreRenderedChunk) => {
          if (
            chunkInfo.name.startsWith("lib-") ||
            chunkInfo.name.startsWith("webapp-") ||
            chunkInfo.name.startsWith("vendor-")
          ) {
            return chunkFileNames;
          }

          return `${assetsDir}/${cs.extractName(chunkInfo.facadeModuleId ?? chunkInfo.moduleIds[0] ?? "")}.[hash].chunk.js`;
        },
      };
    },
    outputOptions(o) {
      o.legalComments = "none";

      o.advancedChunks = {
        groups: [
          ...cs.directDepGroups(),
          {
            name: (moduleId: string): string | null => {
              return cs.chunkName(moduleId);
            },
          },
        ],
      };
    },
  };
};

class Package {
  static async load(dirs: string[], name: string): Promise<Package> {
    let pkg: any = {};
    let pkgDir = "";

    for (const dir of dirs) {
      try {
        pkg = JSON.parse(String(await readFile(join(dir, "package.json"))));
        pkgDir = dir;
      } catch (err) {}
    }

    if (pkgDir == "") {
      throw new Error(`package ${name} not found, resolve-dirs:${dirs}`);
    }

    return new Package(pkg.name, pkgDir, pkg.dependencies);
  }

  constructor(
    public name: string,
    public dir: string,
    public dependencies: Record<string, string> = {},
  ) {}

  get isLocal() {
    return !this.dir.startsWith("node_modules");
  }

  dirs() {
    const dirs = [this.dir];
    for (const [name, version] of Object.entries(this.dependencies)) {
      if (version.includes("workspace:")) {
        continue;
      }
      dirs.push("node_modules/" + name);
    }
    return dirs;
  }
}

class ChunkSplit {
  static async load(root: string, options: ChunkSplitOptions) {
    const pkg = JSON.parse(String(await readFile(join(root, "package.json"))));

    const ctx = {
      options: options,
      dependencies: pkg.dependencies ?? ({} as Record<string, string>),
      packages: {} as Record<string, Package>,
    };

    const workspacePkgs = {} as Record<string, Package>;

    for (const packageJSON of await globby(
      [...pkg.workspaces?.map((p: string) => `${p}/package.json`)],
      {
        cwd: root,
      },
    )) {
      const dir = dirname(packageJSON);
      const wp = await Package.load([dir], basename(dir));

      workspacePkgs[wp.name] = wp;
    }

    const load = async (name: string, root: string) => {
      let wp = workspacePkgs[name];

      if (wp) {
        for (const [name] of Object.entries(wp.dependencies)) {
          // dep load first
          await load(name, wp.dir);
        }

        ctx.packages[wp.name] = wp;

        return;
      }

      if (!ctx.packages[name]) {
        wp = await Package.load(
          [join("node_modules", name), join(root, "node_modules", name)],
          name,
        );
        ctx.packages[wp.name] = wp;
      }
    };

    // workload pkgs first
    for (const [name] of Object.entries(ctx.dependencies)) {
      if (workspacePkgs[name]) {
        await load(name, root);
      }
    }

    // then others pkgs
    for (const [name] of Object.entries(ctx.dependencies)) {
      if (!workspacePkgs[name]) {
        await load(name, root);
      }
    }

    return new ChunkSplit(root, ctx);
  }

  private readonly isLib: (id: string) => boolean;

  constructor(
    private root: string,
    private ctx: {
      options: ChunkSplitOptions;
      dependencies: Record<string, string>;
      packages: Record<string, Package>;
    },
  ) {
    this.isLib = createFilter(ctx.options.lib ?? []);
  }

  chunkName(id: string): string | null {
    if (id) {
      const name = this.#chunkName(id);
      if (name && name.startsWith("_")) {
        return null;
      }
      return name;
    }
    return null;
  }

  #chunkName(id: string): string {
    if (this.isLib(id)) {
      return this.normalizePkgName(id);
    }

    if (id.includes("/node_modules/") || id.startsWith("\0")) {
      const pkgName = this.normalizePkgName(id);

      if (id.includes(".min/") || id.includes(".min.")) {
        return (
          pkgName.replace("vendor-", "vendor-min-") +
          "~" +
          basename(id, extname(id))
        );
      }

      if (this.isDirectVendor(pkgName)) {
        return this.normalizePkgName(id);
      }
    }

    return "_" + this.normalizePkgName(id);
  }

  extractName(id: string): string {
    const name = this.normalizePkgName(id);
    if (name.startsWith("_")) {
      return name.slice(1);
    }
    return name;
  }

  normalizePkgName(id: string) {
    // safe path
    return this.#normalizePkgName(id)
      .replaceAll(/[:~_./\[\]]/g, "-")
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
          // vite or rolldown helpers
          if (id[0] === "\0") {
            if (/react/.test(id)) {
              return "react";
            }
            return "_runtime";
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

    return "_runtime";
  }

  private isDirectVendor(pkgName: string) {
    if (pkgName.startsWith("vendor-")) {
      for (const [name] of Object.entries(this.ctx.dependencies)) {
        if (this.normalizePkgName(`/node_modules/${name}`) == pkgName) {
          return true;
        }
      }
    }
    return this.ctx.dependencies[pkgName];
  }

  directDepGroups(): Group[] {
    const groups = [];

    for (const [name, pkg] of Object.entries(this.ctx.packages)) {
      if (pkg.isLocal) {
        const groupName = this.chunkName(`/node_modules/${name}`);

        if (groupName) {
          groups.push({
            name: groupName,
            test: (id) => pkg.dirs().some((p) => id.includes(p)),
            minShareCount: 1,
          } as Group);
        }

        continue;
      }

      groups.push({
        test: (id) => id.includes(`node_modules/${name}`),
        name: (id) => this.chunkName(id),
      } as Group);
    }

    return groups;
  }
}

type Group = NonNullable<
  NonNullable<OutputOptions["advancedChunks"]>["groups"]
>["0"];
