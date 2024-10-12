import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    orange: {
      900: "#F4C550",
      100: "#FBE9BA",
    },
    black: {
      900: "#121417",
    },
    gray: {
      400: "#8A8A89",
    },
    green: {
      400: "#38CD3E",
    },
  },
};

const fonts = {
  body: "Roboto, sans-serif",
  heading: "Roboto, sans-serif",
};

const styles = {
  global: {
    body: {
      bg: "#FFFFFF",
      color: "black.900",
    },
  },
};

const breakpoints = {
  lg: "1440px",
};

export const theme = extendTheme({
  styles,
  colors,
  fonts,
  breakpoints,
});
