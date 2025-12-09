import type { Component, WithDefaultSlot } from "./vue";

import {
  RouterLink as _RouterLink,
  type RouterLinkProps as _RouterLinkProps,
  RouterView as _RouterView,
  type RouterViewProps as _RouterViewProps,
} from "vue-router";

export type RouterLinkProps = _RouterLinkProps & WithDefaultSlot;
export const RouterLink: Component<RouterLinkProps> = _RouterLink as any;

export type RouterViewProps = _RouterViewProps & WithDefaultSlot;
export const RouterView: Component<RouterViewProps> = _RouterView as any;

export { useLink, useRoute, useRouter, createRouter, createWebHistory } from "vue-router";
