import { elevation } from "./elevation";
import { motion } from "./motion";
import { Palette } from "./palette";
import { rounded } from "./shape";
import { typography } from "./typography";

const seedColors = Palette.fromColors({
  primary: "#1270f5",
  secondary: "#8a90a5",
  tertiary: "#b58391",
  neutral: "#5e5e5e",
  error: "#d93f23",
  warning: "#e69c00",
  success: "#5ac220",
});

export const defaultTheme = {
  ...typography,
  ...motion,
  ...elevation,
  rounded: rounded,
  ...seedColors.toDesignTokens({
    primary: ["primary", 80, 50],
  }),
} as const;

export * from "./palette";
