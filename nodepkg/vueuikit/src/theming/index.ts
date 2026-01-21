export * from "./Theming";
export * from "./m3";
export * from "./token";
export * from "./csstype";

import { defaultTheme } from "./m3";

import { Theming } from "./Theming";

export const defaultTheming = Theming.create(defaultTheme, { varPrefix: "vk" });

// TODO added support custom
export type SystemStyleObject = Parameters<
  typeof defaultTheming.unstable_sx
>[0];
