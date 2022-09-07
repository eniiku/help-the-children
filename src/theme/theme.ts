import { Theme } from "theme-ui";

const theme: Theme = {
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#07c",
    modes: {
      dark: {
        text: "#fff",
        background: "#000",
        primary: "#0cf",
      },
    },
  },
  fonts: {
    body: "'DM Sans', sans-serif",
    heading: "'DM Sans', sans-serif",
  },
  fontSizes: [12, 15, 16, 20, 22, 24, 32, 36, 42, 48, 64],
  fontWeights: {
    body: 400,
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
  },
  breakpoints: [
    "480px",
    "640px",
    "768px",
    "1024px",
    "1220px",
    "1366px",
    "1620px",
  ],
};

export default theme;
