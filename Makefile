BUN = bun
BUNX = bunx --bun
TURBO = $(BUNX) turbo
VITE = $(BUNX) vite

include .secrets/default.mk

TARGET = local
ifneq ( ,$(wildcard .secrets/$(TARGET).mk))
	include .secrets/$(TARGET).mk
endif

dev.openapi-playground:
	APP=openapi-playground $(VITE)

build.openapi-playground:
	APP=openapi-playground $(VITE) build --mode production
	cp ./tool/openapiview/index.go  ./public/openapi-playground/index.go
	cp go.mod ./public/openapi-playground/go.mod

dev:
	$(VITE)

build: build.pkg.force build.vuekit build.openapi-playground

build.vuekit:
	$(VITE) build --mode production
	cp ./public/vuekit/index.html  ./public/vuekit/404.html

preview:
	$(VITE) preview --host=127.0.0.1

build.pkg:
	$(TURBO) run build

build.pkg.force:
	$(TURBO) run build --force

lint:
	$(TURBO) run lint --force --no-cache

bootstrap:
	$(BUNX) monobundle

test:
	$(BUN) test

ci: bootstrap build test

dep:
	$(BUN) install

dep.update:
	$(BUNX) npm-check-updates -ws --root -ui

clean:
	find . -name 'node_modules' -type d -prune -print -exec rm -rf '{}' \;
	find . -name '.turbo' -type d -prune -print -exec rm -rf '{}' \;

pub:
	$(BUNX) @morlay/bunpublish

