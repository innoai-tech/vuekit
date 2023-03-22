import vue from "@vitejs/plugin-vue";
import vitePages, {
  vueResolver,
  type PageResolver,
  type PageOptions,
} from "vite-plugin-pages";
import { vueJsxHmr } from "./vueJsxHmr";

export interface ViteReactOptions {
  pagesDirs?: string | (string | PageOptions)[];
  pagesResolver?: Partial<PageResolver>;
}

export const viteVue = (options: ViteReactOptions = {}) => {
  return [
    vue(),
    vueJsxHmr(),
    vitePages({
      extensions: ["vue", "tsx"],
      dirs: options.pagesDirs ?? "./page", // base from UserConfig.root
      resolver: {
        ...vueResolver(),
        ...options.pagesResolver,
      },
    }),
  ];
};
