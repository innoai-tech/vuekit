package org

import (
	"context"
	"net/http"

	"github.com/octohelm/courier/pkg/courierhttp"
)

// 拉取组织列表
type ListOrg struct {
	courierhttp.MethodGet `path:"/orgs"`
}

func (r *ListOrg) Output(ctx context.Context) (any, error) {
	return courierhttp.Wrap(
		&DataList{},
		courierhttp.WithStatusCode(http.StatusOK),
		courierhttp.WithMetadata("X-Custom", "X"),
	), nil
}

type DataList struct {
	Data  []Info `json:"data"`
	Total int    `json:"total"`
}
