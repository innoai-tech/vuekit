package apis

import (
	"github.com/innoai-tech/vuekit/internal/cmd/example/apis/org"
	"github.com/octohelm/courier/pkg/courierhttp"
)

var R = courierhttp.GroupRouter("/api/example").With(
	courierhttp.GroupRouter("/v0").With(
		org.R,
	),
)
