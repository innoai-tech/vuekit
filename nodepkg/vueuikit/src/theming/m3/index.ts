import { elevation } from "./elevation";
import { typography } from "./typography";
import { Palette } from "./palette";
import { motion } from "./motion";
import { rounded } from "./shape";

export const defaultTheme = {
  ...Palette.fromColors({
    primary: "#6750A4",
    secondary: "#625B71",
    tertiary: "#7D5260",
    error: "#B3261E",
    // neutral: "#ff00ff",

    pink: "#ff00ff",
    green: "#4caf50",
    yellow: "#ffcd38",
    orange: "#ff9800",
    blue: "#03a9f4"
  }).toDesignTokens(),
  ...typography,
  ...motion,
  ...elevation,
  rounded: rounded
} as const;

export * from "./palette";