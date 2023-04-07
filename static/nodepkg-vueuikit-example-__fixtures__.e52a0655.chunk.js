import{p as t,j as n}from"./lib-nodepkg-vuekit.1c3d6197.chunk.js";import{C as o,S as e}from"./lib-webapp-vuekit.a939c89e.chunk.js";const s=`设计理念沿用 [Material 3](https://m3.material.io/)

这里仅为适配该设计理念，抽象 Design System, 方便开发：

所有的 Design Token 将声明为 \`css var\` ([Custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)),
可同时支持在 \`css-in-js\` 和 \`raw css\` 中使用。

## \`css-in-js\`

TypeScript 的帮助下，还会提供准确的 Design Token 值. 如：

\`\`\`tsx
import { alpha, styled, variant } from "@innoai-tech/vueuikit";

export const Button = styled("button", {
  disabled: z.boolean().optional()
})({
  // 利用 TypeScript 的推导而来，且非 color 属性无该值
  // 实际将转换为 var(--vk-color-sys-primary)
  // sys-* 的 color 还会随暗黑/普通主题进行切换
  color: "sys.primary",

  // color 变种
  // 实际将转换为 rbga(var(--vk-color-sys-primary-rgb) / 0.08)
  bgColor: variant("sys.primary", alpha(0.08)),

  // 通常情况下，组件 props 将转换成 data-<prop> 作为 attr
  // 即： <Button disabled/>  =>  <button data-disabled=true />
  // 同理，在自定义转换规则中，也建议如下做类似的转换，避免动态创建 CSSObject
  ["&[data-disabled=true]"]: {
    bgColor: variant("sys.on-surface", alpha(0.08))
  }
});
\`\`\`

不同于其他框架中的 theme 定义，为了更准确的类型推导，需要由 DesignToken 进行创建
详细请[参考源码](https://github.com/innoai-tech/vuekit/blob/main/nodepkg/vueuikit/src/theming/m3)

虽然底层使用的是 \`@emotion/*\`，但屏蔽掉了 \`array\` 等非 CSSObject 值的使用, 初衷是为了更稳定的类型推导。
另外样式扩展有两种方式

\`\`\`tsx
import { z } from "@innoai-tech/vuekit";
import { alpha, styled, variant, SystemStyleObject } from "@innoai-tech/vueuikit";
import { BaseButton } from "./BaseButton";

const shared: SystemStyleObject = {
  color: "sys.primary"
  // ...
};

// 直接通过 extends 复用样式
// 
// 组件 props 定义需要重新声明
export const ButtonBase = styled("button", {
  disabled: z.boolean().optional()
})({
  extends: [
    shared
  ]
  // ...
});

// 通过 styled 覆写样式
// 可以完全继承 BaseButton 的 props 定义
export const Button = styled(BaseButton)({
  // ...
});
\`\`\`

除 \`styled\` 外，我们还可以使用 \`Box\` 进行快速样式定义, 通过 \`sx\` prop。 并且 \`component\` prop 支持我们随时切换 tag 或者
组件，并且其他 props 会随着不同的 component 切换对应 props 类型约束与提示。

同样的，通过 styled 创建的组件也有一样的特性。

\`\`\`tsx
import { Box } from "@innoai-tech/vueuikit";

(
  <Box sx={{ display: "flex" }}>
    <Box sx={{ display: "block" }} component={"a"}>

    </Box>
  </Box>
);
\`\`\``,i=t(()=>()=>n(o,{children:n(e,{content:s})}));export{i as default};
