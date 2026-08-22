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

# 发布所有库包（按依赖拓扑顺序，跳过已发布的版本）
[group("publish")]
[no-cd]
pub:
    @pnpm exec -r tsx {{ justfile_directory() }}/scripts/publish-if-need.mts

# 构建所有库包（按依赖拓扑顺序）
[group("build")]
build *args:
    @pnpm exec turbo run build {{ args }}

# CI 全流程
[group("ci")]
ci:
    just build
    just ts::lint
    just webapp::build-all
    just ts::test
    just webapp::test-e2e
