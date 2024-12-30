import { expect, test } from "bun:test";
import { sortedRoutes } from "../route.ts";

test("#sortedRoutes", () => {
  const routes = [
    {
      name: "admin-remote-registries",
      path: "remote-registries",
      component: "/page/admin/21_remote-registries/index.tsx",
    },
    {
      name: "admin-types",
      path: "types",
      component: "/page/admin/10_types/index.tsx",
    },
    {
      name: "admin-robots",
      path: "robots",
      component: "/page/admin/91_robots/index.tsx",
    },
    {
      name: "admin-stations",
      path: "stations",
      component: "/page/admin/12_stations/index.tsx",
    },
    {
      name: "admin-users",
      path: "users",
      component: "/page/admin/90_users/index.tsx",
    },
    {
      name: "admin-clusters",
      path: "clusters",
      component: "/page/admin/20_clusters/index.tsx",
    },
    {
      name: "admin-vendors",
      path: "vendors",
      component: "/page/admin/19_vendors/index.tsx",
    },
    {
      name: "admin",
      path: "",
      component: "/page/admin/index.tsx",
    },
    {
      name: "admin-remote-registries-remoteRegistryCode",
      path: "remote-registries/:remoteRegistryCode",
      component: "/page/admin/21_remote-registries/[remoteRegistryCode].tsx",
    },
  ];

  const sorted = sortedRoutes(routes);

  expect(sorted[0]?.name).toBe("admin");
  expect(sorted[sorted.length - 1]?.name).toBe("admin-robots");
});
