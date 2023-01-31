import Layout from "./Layout";
import { Box, Text, VStack } from "@chakra-ui/react";

export default function BlogLayout({ children }) {
  return (
    <Layout>
      <Box>
        <VStack align="left" spacing="-2" py="28">
          <Text
            fontSize="6xl"
            color="gray.50"
            fontWeight="bold"
            fontFamily="heading"
          >
            Hi, my name is
            <Text as="span" bgClip="text" color="#0A9396" decoration="none">
              {" "}
              Shine
            </Text>
          </Text>
          <Text
            fontSize="xl"
            fontWeight="light"
            color="gray.200"
            fontFamily="body"
          >
            I'm a senior software engineer and this is my latest attempt at
            making a personal website.
          </Text>
        </VStack>
      </Box>
      {children}
    </Layout>
  );
}
