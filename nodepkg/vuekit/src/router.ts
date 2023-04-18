import type { Component, WithDefaultSlot } from "./types";

import {
  RouterView as _RouterView,
  type RouterViewProps as _RouterViewProps,
  RouterLink as _RouterLink,
  type RouterLinkProps as _RouterLinkProps
} from "vue-router";

export type RouterLinkProps = _RouterLinkProps & WithDefaultSlot;
export const RouterLink: Component<RouterLinkProps> = _RouterLink as any;

export type RouterViewProps = _RouterViewProps & WithDefaultSlot;
export const RouterView: Component<RouterViewProps> = _RouterView as any;

export {
  useLink,
  useRoute,
  useRouter,
  createRouter,
  createWebHistory
} from "vue-router";
