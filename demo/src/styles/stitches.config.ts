import { createStitches } from "@stitches/react";

export const { styled, globalCss } = createStitches({
  prefix: "rcp-",
  theme: {
    fonts: {
      montserrat: `"Montserrat", sans-serif`,
    },
    colors: {
      text_primary: "#f3f3f3",
      text_secondary: "#b3b3b3",
      background: "#121212",
      main_social_item_background_hover: "rgba(255, 255, 255, 0.1)",
      controller_background: "#181818",
      controller_button_background: "#242424",
      controller_button_background_active: "#323232",
    },
  },
});

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    padding: 0,
    margin: 0,
  },
  "html, body": {
    fontFamily: "$montserrat",
    color: "$text_primary",
    background: "$background",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100vh",
  },
});
