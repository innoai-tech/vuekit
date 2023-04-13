import vue from "@vitejs/plugin-vue";
import vitePages, {
  type PageResolver,
  type PageOptions
} from "vite-plugin-pages";
import { customVueResolver, viteVueComponentPatcher } from "./vue";
import { mdx } from "./mdx";
import type { PluginOption, UserConfig } from "vite";

export interface ViteReactOptions {
  pagesDirs?: string | (string | PageOptions)[];
  pagesResolver?: Partial<PageResolver>;
}

export const viteVue = (options: ViteReactOptions = {}): PluginOption[] => {
  let useConfig: UserConfig;
  const useConfigProxy = new Proxy({} as UserConfig, {
    get(_, k) {
      return (useConfig as any)[k];
    }
  });


  return [
    {
      name: "vue-vite-presets/vue",
      enforce: "pre",
      config(c) {
        useConfig = c;
      }
    },
    mdx(),
    vue(),
    viteVueComponentPatcher(),
    vitePages({
      extensions: ["tsx", "mdx", "md", "vue"],
      dirs: options.pagesDirs ?? "./page", // base from UserConfig.root
      resolver: {
        ...customVueResolver(useConfigProxy),
        ...options.pagesResolver
      }
    })
  ];
};
