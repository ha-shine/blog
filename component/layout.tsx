import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  ChakraProvider,
  Container,
  Spacer, Text,
  VStack
} from "@chakra-ui/react";
import theme from "../lib/theme";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <Box bgGradient="linear(to-r, orange.500, yellow.300)" height="1" />
      <Box bg="gray.50">
        <Container maxWidth="container.xl">
          <Box display="flex" alignItems="flex-end" fontFamily="heading" color="gray.700">
            <Spacer />
            <Breadcrumb lineHeight="10" spacing="3">
              <BreadcrumbItem>
                <Link href="/">
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link href="/blog">
                  <BreadcrumbLink href="/blog">Blogs</BreadcrumbLink>
                </Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link href="/fun">
                  <BreadcrumbLink href="/fun">Fun</BreadcrumbLink>
                </Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link href="/about">
                  <BreadcrumbLink href="/about">About</BreadcrumbLink>
                </Link>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>

          <Box>
            <VStack align="left" spacing="-2" py="28">
              <Text fontSize="6xl" fontWeight="bold" fontFamily="body">
                Hi, I'm
                <Text as="span" bgGradient="linear(to-r, orange.500, yellow.300)" bgClip="text"
                      decoration="none"> Shine</Text>
              </Text>
              <Text fontSize="lg" color="gray.600" fontFamily="heading">
                I'm a senior software engineer and this is my <Text decoration="line-through" as="span">3rd</Text> 4th
                attempt at making a personal website
              </Text>
            </VStack>
          </Box>

          {children}
        </Container>
      </Box>
    </ChakraProvider>
  );
}