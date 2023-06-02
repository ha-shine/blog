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
              <NavLink href="/" margin={0}>
                Home
              </NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/projects" margin={0}>
                Projects
              </NavLink>
            </Flex>
            {children}
          </Container>
        </Box>
        {footer}
      </Box>
    </ChakraProvider>
  );
}
