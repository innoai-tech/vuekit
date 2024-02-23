BUN = bun
BUNX = bunx --bun
TURBO = $(BUNX) turbo
VITE = $(BUNX) vite

dev:
	$(VITE)

build: build.pkg.force build.app

build.app:
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

ci: bootstrap test build

dep:
	$(BUN) install

dep.update:
	$(BUNX) npm-check-updates -ws --root -ui

clean:
	find . -name 'node_modules' -type d -prune -print -exec rm -rf '{}' \;
	find . -name '.turbo' -type d -prune -print -exec rm -rf '{}' \;

pub:
	$(BUNX) @morlay/bunpublish

