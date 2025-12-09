# VueKit

## Code Structure

```
nodepkg/                        # monorepo 子 package, z
    <lib>/
        src/
        package.json

webapp/<APP_NAME>/
    mod/                        # 业务模块
        auth/
        account/
    layout/
    client/
    page/                       # File System Routing
        accounts/
            [id].tsx
            index.tsx
        accounts.tsx            # 作为 /accounts/* 的 Wrap
        about.tsx
        index.tsx
        [...all].tsx            # 其他
```

## Misc

### File System Routing

虽然该功能是由 [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages) 提供，
但由于 meta 纯 yaml 配置，灵活性较差，这里利用 TypeScript JSDoc 的功能，直接将 meta 信息绑定到 `route.component` 上。
定义如下：

```tsx
/**
 * @property {"管理员"} meta.name
 * @property {typeof import("@mdi/js").mdiAccountSupervisor} meta.icon
 */
export default component(/*...*/);
```
