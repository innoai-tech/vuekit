import vue from "@vitejs/plugin-vue";
import vitePages, {
  type PageResolver,
  type PageOptions
} from "vite-plugin-pages";
import { vueJsxHmr } from "./vueJsxHmr";
import { customVueResolver } from "./vueresolver";
import { mdx } from "./mdx";
import type { PluginOption } from "vite";

export interface ViteReactOptions {
  pagesDirs?: string | (string | PageOptions)[];
  pagesResolver?: Partial<PageResolver>;
}

export const viteVue = (options: ViteReactOptions = {}): PluginOption[] => {
  return [
    vue({
      include: [/\.vue$/]
    }),
    mdx(),
    vueJsxHmr(),
    vitePages({
      extensions: ["tsx", "mdx", "md", "vue"],
      dirs: options.pagesDirs ?? "./page", // base from UserConfig.root
      resolver: {
        ...customVueResolver(),
        ...options.pagesResolver
      }
    })
  ];
};
