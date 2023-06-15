import {
  Box,
  ChakraProvider,
  Container,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";
import theme from "../lib/theme";
import Link from "next/link";
import NavLink from "./NavLink";

export default function Layout({ children, footer = null }) {
  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" display="flex" flexDir="column">
        <Box bgGradient="linear(to-r, orange.500, yellow.300)" height="1" />
        <Box bg="gray.900" pb="10" flex="1 1 auto">
          <Container maxWidth="container.xl">
            <Flex>
              <Text
                bgGradient="linear(to-r, orange.500, yellow.300)"
                bgClip="text"
                decoration="none"
                fontFamily="body"
                py="2"
                fontSize="lg"
              >
                <Link href="/">SHINE.ROCKS</Link>
              </Text>
              <Spacer />
              <NavigationLink href="/">Home</NavigationLink>
              <NavigationLink href="/creations">Creations</NavigationLink>
              <NavigationLink href="/blog">Blog</NavigationLink>
              <NavigationLink href="/projects">Projects</NavigationLink>
            </Flex>
            {children}
          </Container>
        </Box>
        {footer}
      </Box>
    </ChakraProvider>
  );
}

function NavigationLink({ href, children }) {
  return (
    <NavLink href={href} margin={4}>
      {children}
    </NavLink>
  );
}
