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
        if (r.name) {
          r.name = r.name.replace(/[0-9]+_/g, "");
        }
        if (r.path) {
          r.path = r.path.replace(/[0-9]+_/g, "");
        }

        if (r.children) {
          r.children = (r.children as any[]).toSorted((a, b) => {
            if (a.component.endsWith("/index.tsx") || b.component.endsWith("/index.tsx")) {
              if (a.component.endsWith("index.tsx")) {
                return -1;
              }
              return 0;
            }
            if (a.component < b.component) {
              return -1;
            }
            return 0;
          });
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
