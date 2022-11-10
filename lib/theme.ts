import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.50"
      }
    }
  },
  fonts: {
    heading: 'Raleway',
    body: 'Lato'
  }
});

export default theme;