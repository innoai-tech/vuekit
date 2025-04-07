package main

import (
	"context"

	"github.com/innoai-tech/infra/pkg/cli"
)

var App = cli.NewApp(
	"example",
	"1.0.0",
	cli.WithImageNamespace("ghcr.io/innoai-tech"),
)

func main() {
	cli.Exec(context.Background(), App)
}
