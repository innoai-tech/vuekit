bun := 'bun'
turbo := 'bunx --bun turbo'
vite := 'bunx --bun vite'
taze := 'bunx --bun taze'
monobundle := 'bunx --bun monobundle'

dep-web:
    {{ bun }} install --no-cache

clean-web:
    rm -f bun.lock;
    find . -name '.turbo' -type d -prune -print -exec rm -rf '{}' \;
    find . -name 'node_modules' -type d -prune -print -exec rm -rf '{}' \;

test-web:
    {{ bun }} test

lint-web:
    {{ turbo }} run lint --force
    {{ bun }} run lint

bootstrap:
    {{ monobundle }}

update-web:
    {{ taze }} -w -r latest

build-pkg:
    {{ turbo }} run build --force

build-web $APP:
    {{ vite }} build --mode production
    if [[ "${APP}" == "openapi-playground" ]]; then \
        cp -rf ./tool/openapiview/index.go ./public/openapi-playground/index.go; \
        cp -rf ./tool/openapiview/go.mod ./public/openapi-playground/go.mod; \
    fi

dev-web $APP:
    {{ vite }} --host

preview-web $APP:
    {{ vite }} preview

build-all: build-pkg (build-web 'vuekit') (build-web 'openapi-playground')
