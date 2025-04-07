package main

import (
	nethttp "net/http"
	"strings"

	"github.com/innoai-tech/infra/cmd/example/apis"
	"github.com/innoai-tech/infra/cmd/example/ui"
	"github.com/innoai-tech/infra/pkg/cli"
	"github.com/innoai-tech/infra/pkg/http"
	"github.com/innoai-tech/infra/pkg/otel"
)

func init() {
	s := cli.AddTo(App, &Serve{})

	s.Server.ApplyRouter(apis.R)
	s.Server.ApplyGlobalHandlers(func(handler nethttp.Handler) nethttp.Handler {
		return nethttp.HandlerFunc(func(rw nethttp.ResponseWriter, req *nethttp.Request) {
			if strings.HasPrefix(req.URL.Path, "/api/") || strings.HasPrefix(req.URL.Path, "/.sys/") {
				handler.ServeHTTP(rw, req)
				return
			}
			ui.UI.ServeHTTP(rw, req)
		})
	})
}

// Start serve
type Serve struct {
	cli.C `component:"server"`
	otel.Otel
	Server http.Server
}
