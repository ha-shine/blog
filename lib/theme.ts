import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.800"
      }
    }
  },
  fonts: {
    heading: 'Oswald',
    body: 'Lato'
  },
  initialColorMode: 'dark',
  useSystemColorMode: false,
});


export default theme;