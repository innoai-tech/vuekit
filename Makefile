NPX = pnpm exec
TURBO = $(NPX) turbo
VITE = $(NPX) vite

dev: build.pkg
	$(VITE)

build: build.pkg
	$(VITE) build --mode production
	cp ./public/vuekit/index.html  ./public/vuekit/404.html

preview:
	$(VITE) preview

build.pkg:
	$(TURBO) run build

lint:
	$(TURBO) run lint --force --no-cache

test: build
	$(TURBO) run test --force

bootstrap:
	$(NPX) monobundle

dep:
	pnpm i -d

update:
	pnpm up -r --latest

pub:
	pnpm -r publish --no-git-checks
