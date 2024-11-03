import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    white: {
      900: "#FFFFFF",
    },
    orange: {
      900: "#F4C550",
      800: "#FFDC86",
      100: "#FBE9BA",
    },
    black: {
      900: "#121417",
      400: "#121417B2",
    },
    gray: {
      300: "#1214171A",
      400: "#8A8A89",
      500: "#F8F8F8",
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
      color: "brand.black.900",
    },
  },
};

const breakpoints = {
  md: "768px",
  lg: "1440px",
};

export const theme = extendTheme({
  styles,
  colors,
  fonts,
  breakpoints,
});
