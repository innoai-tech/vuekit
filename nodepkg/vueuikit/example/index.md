设计理念沿用 [Material 3](https://m3.material.io/)

这里仅为适配该设计理念，抽象 Design System, 方便开发：

所有的 Design Token 将声明为 `css var` ([Custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)),
可同时支持在 `css-in-js` 和 `raw css` 中使用。

## `css-in-js`

TypeScript 的帮助下，还会提供准确的 Design Token 值. 如：

```tsx preview
import { Box, alpha, styled, variant } from "@innoai-tech/vueuikit";
import { z } from "@innoai-tech/vuekit";

export const Button = styled("button", {
  disabled: z.boolean().optional(),
})({
  bg: "none",
  outline: "none",
  border: "none",
  px: 16,
  h: 40,
  rounded: "md",

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
  _disabled: {
    color: variant("sys.on-surface", alpha(0.12)),
    bgColor: variant("sys.on-surface", alpha(0.08)),
  },
});

export default () => {
  return (
    <Box sx={{ display: "flex", gap: 8 }}>
      <Button>按钮</Button>
      <Button disabled={true}>按钮</Button>
    </Box>
  );
};
```

不同于其他框架中的 theme 定义，为了更准确的类型推导，需要由 DesignToken 进行创建
详细请[参考源码](https://github.com/innoai-tech/vuekit/blob/main/nodepkg/vueuikit/src/theming/m3)

虽然底层使用的是 `@emotion/*`，但屏蔽掉了 `array` 等非 CSSObject 值的使用, 初衷是为了更稳定的类型推导。
另外样式扩展有两种方式

```tsx
import { z } from "@innoai-tech/vuekit";
import { styled, SystemStyleObject } from "@innoai-tech/vueuikit";

const shared: SystemStyleObject = {
  color: "sys.primary",
  // ...
};

// 直接通过 extends 复用样式
//
// 组件 props 定义需要重新声明
export const ButtonBase = styled("button", {
  disabled: z.boolean().optional(),
})({
  extends: [shared],
  // ...
});

// 通过 styled 覆写样式
// 可以完全继承 BaseButton 的 props 定义
export const Button = styled(ButtonBase)({
  // ...
});
```

除 `styled` 外，我们还可以使用 `Box` 进行快速样式定义, 通过 `sx` prop。 并且 `component` prop 支持我们随时切换 tag 或者
组件，并且其他 props 会随着不同的 component 切换对应 props 类型约束与提示。

同样的，通过 styled 创建的组件也有一样的特性。

```tsx preview
import { component } from "@innoai-tech/vuekit";
import { Box } from "@innoai-tech/vueuikit";

export default component(() => () => (
  <Box sx={{ display: "flex", padding: 10, containerStyle: "sys.primary" }}>
    <Box sx={{ containerStyle: "sys.surface-container" }} component={"button"}>
      Hi 111
    </Box>
  </Box>
));
```

### CSS Selector 简写规则

另外，为了简化 `"&:hover"` `&[aria-current='page']` 等选择器声明，
提供的如下的简化规则：

- 所有名称支持 _下划线命名_ 或者 _驼峰命名_，最终都将转换为 _短横小写命名_, `=` 用 `__` 替代
- `_*` 一般表示**状态**，可用值
    - `data-*` 和 `aria-*`, `
        - 如 `_aria_current__page`： 等效为 `&[aria-current='page']`,
    - `before`，`after` 等[伪元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements), 需要声明 "$" 表示为元素
        - 如 `_$before`： 等效为 `&::before`
    - `hover`, `focus`, `active`, `disabled` 等[伪类](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes)
        - 如 `_hover`： 等效为 `&:hover, &.hover, &[data-hover]:not([data-hover='false'])`,
    - 以及其他自定义状态
        - 如 `_has_icon`： 等效为 `&[data-has-icon]:not([data-has-icon='false'])`
- `$*` 或 `*$`，一般指代**元素节点**, 可用值为
    - `data-*` 和 `aria-*`, `
        - 如 `$data_icon`： 等效为 `&[data-icon]`
        - 如 `$data_popper_arrow`： 等效为 `&[data-popper-arrow]`
        - 如 `data_popper_placement__right$`： 等效为 `[data-popper-placement=right] &`
