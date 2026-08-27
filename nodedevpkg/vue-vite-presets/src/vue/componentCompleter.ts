import { vueComponentCompleter } from "@innoai-tech/bundle-purge/rolldown-plugin";
import type { Plugin } from "vite";

export interface ComponentCompleterOptions {
  include?: RegExp[];
  exclude?: RegExp[];
}

export const viteVueComponentCompleter = (options: ComponentCompleterOptions = {}): Plugin => {
  return vueComponentCompleter(options) as Plugin;
};
