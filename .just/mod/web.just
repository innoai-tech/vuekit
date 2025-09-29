bun := 'bun'
turbo := 'bunx --bun turbo'
vite := 'bunx --bun vite'
taze := 'bunx --bun taze'
monobundle := 'bunx --bun monobundle'

dep-web:
    {{ bun }} install --no-cache

clean-web:
    rm -f bun.lock;
    find . -name '.swc' -type d -prune -print -exec rm -rf '{}' \;
    find . -name '.turbo' -type d -prune -print -exec rm -rf '{}' \;
    find . -name 'node_modules' -type d -prune -print -exec rm -rf '{}' \;

test-web:
    {{ bun }} test

lint-web:
    {{ turbo }} run lint --force

bootstrap:
    {{ monobundle }}

update-web:
    {{ taze }} -w -r latest

build-pkg:
    {{ turbo }} run build --force

build-web $APP:
    {{ vite }} build --mode production
    {{ if APP == "openapi-playground" { _copy_openapi_playground } else { "" } }}
    {{ if APP == "vuekit" { _copy_vuekit } else { "" } }}

[private]
_copy_openapi_playground := '''
    cp ./tool/openapiview/index.go ./public/openapi-playground/index.go;
    cp ./tool/openapiview/go.mod ./public/openapi-playground/go.mod;
    ls -al ./public/openapi-playground;
    '''
[private]
_copy_vuekit := '''
    cp ./public/vuekit/index.html ./public/vuekit/404.html
    ls -al ./public/vuekit;
    '''

dev-web $APP:
    {{ vite }} --host

preview-web $APP:
    {{ vite }} preview

build-all: build-pkg (build-web 'vuekit') (build-web 'openapi-playground')
