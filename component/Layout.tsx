import {
  Box,
  Button,
  ChakraProvider,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import theme from "../lib/theme";
import Link from "next/link";
import NavLink from "./NavLink";
import React from "react";
import BarsIcon from "../icons/bars.svg";

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
              <Box display={["none", "flex"]}>
                <NavigationLink href="/">Home</NavigationLink>
                <NavigationLink href="/blog">Blog</NavigationLink>
                <NavigationLink href="/projects" isLast>
                  Projects
                </NavigationLink>
              </Box>
              <Box display={["flex", "none"]}>
                <MobileDrawer />
              </Box>
            </Flex>
            {children}
          </Container>
        </Box>
        {footer}
      </Box>
    </ChakraProvider>
  );
}

function NavigationLink({ href, children, isLast = false }) {
  let marginRight = isLast ? 0 : 2;

  return (
    <NavLink href={href} margin={[2, 4]} marginRight={marginRight}>
      {children}
    </NavLink>
  );
}

function MobileDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} onClick={onOpen} variant="link">
        <Icon boxSize="1.5em" fill="gray.50" _hover={{ fill: "teal.200" }}>
          <BarsIcon />
        </Icon>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="gray.700">
          <DrawerCloseButton color="gray.50" />
          <DrawerHeader />

          <DrawerBody>
            <HStack>
              <NavigationLink href="/">Home</NavigationLink>
              <Spacer />
            </HStack>
            <HStack>
              <NavigationLink href="/creations">Creations</NavigationLink>
              <Spacer />
            </HStack>
            <HStack>
              <NavigationLink href="/blog">Blog</NavigationLink>
              <Spacer />
            </HStack>
            <HStack>
              <NavigationLink href="/projects">Projects</NavigationLink>
              <Spacer />
            </HStack>
          </DrawerBody>

          <DrawerFooter justifyContent="flex-start">
            <Text
              fontSize="xl"
              fontWeight="light"
              fontFamily="body"
              color="gray.400"
              py="1"
            >
              <a href="mailto:h@shine.rocks" target="_blank">
                h@shine.rocks
              </a>
            </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
