import vue from "@vitejs/plugin-vue";
import type { PluginOption } from "vite";
import vitePages, {
  type PageResolver,
  type PageOptions
} from "vite-plugin-pages";
import { mdx } from "./mdx";
import {
  createPageMetaResolver,
  viteVueComponentCompleter,
  viteVueComponentHMR
} from "./vue";

export interface ViteReactOptions {
  pagesDirs?: string | (string | PageOptions)[];
  pagesResolver?: Partial<PageResolver>;
}

export const viteVue = (options: ViteReactOptions = {}): PluginOption[] => {
  const r = createPageMetaResolver();

  return [
    r.plugin,
    mdx(),
    viteVueComponentCompleter(),
    vue() as PluginOption,
    viteVueComponentHMR(),
    vitePages({
      extensions: ["tsx", "mdx", "md", "vue"],
      dirs: options.pagesDirs ?? "./page", // base from UserConfig.root
      onRoutesGenerated: r.onRoutesGenerated,
      extendRoute(r) {
        // replace number prefix holders
        if (r.name) {
          r.name = r.name.replace(/[0-9]+_/g, "");
        }
        if (r.path) {
          r.path = r.path.replace(/[0-9]+_/g, "");
        }
        return r;
      },
      resolver: {
        ...r.pagesResolver,
        ...options.pagesResolver
      }
    }) as PluginOption
  ];
};
