import type { Plugin } from "rolldown";
import { completeComponent } from "./index";

export interface VueComponentCompleterOptions {
  include?: RegExp[];
  exclude?: RegExp[];
}

/**
 * 组件补全插件：为 component/styled/component$ 调用补全 displayName/props/emits 声明。
 *
 * 基于 rolldown Plugin 接口实现，vite（Plugin extends Rolldown.Plugin）与 tsdown 均可直接复用。
 */
export const vueComponentCompleter = (options: VueComponentCompleterOptions = {}): Plugin => {
  const include = options.include ?? [/\.tsx?$/, /\.mdx?$/];
  const exclude = options.exclude ?? [];

  const match = (id: string): boolean => {
    if (exclude.some((re) => re.test(id))) {
      return false;
    }
    return include.some((re) => re.test(id));
  };

  return Object.assign(
    {
      name: "bundle-purge/vue-component-completer",

      async transform(code, id) {
        const [filepath = ""] = id.split("?");

        if (!match(filepath)) {
          return null;
        }

        // 已 minify 的产物无需补全组件
        if (filepath.includes(".min/") || filepath.includes(".min.")) {
          return null;
        }

        const result = await completeComponent(code, { filename: filepath });

        return (
          result.code && {
            code: result.code,
          }
        );
      },
    } satisfies Plugin,
    {
      enforce: "pre",
    },
  );
};
