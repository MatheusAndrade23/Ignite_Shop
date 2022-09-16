import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: "#FFF",

      gray900: "#121214",
      gray800: "#202024",
      gray300: "#C4C4CC",
      gray100: "#E1E1E6",

      green500: "#00875F",
      green300: "#00B37E",
    },

    fontSizes: {
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.25rem",
      "2xl": "2rem",
    },
  },
});
