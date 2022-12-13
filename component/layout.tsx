import { Box, ChakraProvider, Container, Text, VStack } from "@chakra-ui/react";
import theme from "../lib/theme";
import Link from "next/link";

interface Props {
  link: string,
  text: string
}
function FooterLink({ link, text }: Props) {
  return (
    <Text fontSize="xl" fontWeight="light" fontFamily="body" color="gray.400" py="1">
      <a href={link} target="_blank">
        {text}
      </a>
    </Text>
  )
}

export default function Layout({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <Box bgGradient="linear(to-r, orange.500, yellow.300)" height="1" />
      <Box bg="gray.900" pb="10">
        <Container maxWidth="container.xl">
          <Text bgGradient="linear(to-r, orange.500, yellow.300)" bgClip="text"
                decoration="none" fontFamily="body" py="2" fontSize="lg">
            <Link href="/">
              SHINE.ROCKS
            </Link>
          </Text>
          <Box>
            <VStack align="left" spacing="-2" py="28">
              <Text fontSize="6xl" color="gray.50" fontWeight="bold" fontFamily="heading">
                Hi, my name is
                <Text as="span" bgClip="text" color="#0A9396" decoration="none"> Shine</Text>
              </Text>
              <Text fontSize="xl" fontWeight="light" color="gray.200" fontFamily="body">
                I'm a senior software engineer and this is my latest attempt at making a personal website.
              </Text>
            </VStack>
          </Box>
          {children}
        </Container>
      </Box>
      <Box bg="gray.800" py="4">
        <Container maxWidth="container.xl">
          <FooterLink link={"https://twitter.com/_sha94"} text={"Twitter"} />
          <FooterLink link={"https://github.com/ha-shine"} text={"GitHub"} />
          <FooterLink link={"https://www.linkedin.com/in/htet-aung-shine-79654192/"} text={"LinkedIn"} />
          <FooterLink link={"mailto:h@shine.rocks"} text={"h@shine.rocks"} />
        </Container>
      </Box>
    </ChakraProvider>
  );
}