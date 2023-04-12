NPX = pnpm exec
TURBO = $(NPX) turbo
VITE = $(NPX) vite

dev:
	$(VITE)

build: build.pkg.force
	$(VITE) build --mode production
	cp ./public/vuekit/index.html  ./public/vuekit/404.html

preview:
	$(VITE) preview

build.pkg:
	$(TURBO) run build

build.pkg.force:
	$(TURBO) run build --force

lint:
	$(TURBO) run lint --force --no-cache

test: build
	$(TURBO) run test --force

bootstrap:
	$(NPX) monobundle

dep:
	pnpm install

update:
	pnpm up -r --latest

clean:
	find . -name 'node_modules' -type d -prune -print -exec rm -rf '{}' \;

pub:
	pnpm -r publish --no-git-checks
