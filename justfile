# toolchain:ts
mod ts "tool/ts/justfile"
# webapp 模块命令入口
mod webapp "webapp/justfile"
# example 模块命令入口
mod example "internal/cmd/example/justfile"

# 列出所有可用命令
[group("meta")]
default:
    @just --list --list-submodules

# 启动 example 服务（e2e 依赖，Go 工具）
[group("serve")]
[no-cd]
serve-example:
    @just example serve

# 发布所有库包
[group("publish")]
[no-cd]
pub:
    @pnpm dlx @morlay/bunpublish

# 构建所有库包（按依赖拓扑顺序）
[group("build")]
build *args:
    @pnpm exec turbo run build {{ args }}

# CI 全流程
[group("ci")]
ci:
    just build
    just webapp::build-all
    just ts test
    just webapp test-e2e
