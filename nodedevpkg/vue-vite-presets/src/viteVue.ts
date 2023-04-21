import vue from "@vitejs/plugin-vue";
import vitePages, {
  type PageResolver,
  type PageOptions
} from "vite-plugin-pages";
import { createPageMetaResolver, viteVueComponentPatcher } from "./vue";
import { mdx } from "./mdx";
import type { PluginOption } from "vite";

export interface ViteReactOptions {
  pagesDirs?: string | (string | PageOptions)[];
  pagesResolver?: Partial<PageResolver>;
}

export const viteVue = (options: ViteReactOptions = {}): PluginOption[] => {
  const r = createPageMetaResolver();

  return [
    r.plugin,
    mdx(),
    vue(),
    viteVueComponentPatcher(),
    vitePages({
      extensions: ["tsx", "mdx", "md", "vue"],
      dirs: options.pagesDirs ?? "./page", // base from UserConfig.root
      onRoutesGenerated: r.onRoutesGenerated,
      resolver: {
        ...r.pagesResolver,
        ...options.pagesResolver
      }
    })
  ];
};
