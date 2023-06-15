import Layout from "../component/Layout";
import Head from "next/head";
import { Image } from "@chakra-ui/image";
import { Center, Flex, Link, VStack, Text, Box } from "@chakra-ui/react";
import Heading from "../component/Heading";
import SocialIconGroup from "../component/SocialIconGroup";
import { getAllCreationPosts } from "../lib/creation";
import CreationCardContainer from "../component/CreationCardContainer";

export default function Index({ creations }) {
  return (
    <Layout>
      <Head>
        <title>Shine.rocks</title>
        <meta
          name="description"
          content="A personal home page of Htet Aung Shine"
        />
        <meta
          name="og:title"
          property="og:title"
          content="Homepage of shine.rocks"
        />
        <meta
          name="og:description"
          property="og:description"
          content="A personal home page of Htet Aung Shine"
        />
      </Head>
      <Center>
        <VStack mt="120" spacing="4">
          <Image
            boxSize="14em"
            src="https://stuffs.shine.rocks/assets/profile.jpg"
            alt="Htet Aung Shine"
            borderRadius="full"
            objectFit="cover"
            border="solid 10px"
            borderColor="cyan.400"
            mb="6"
          />

          <Heading color="gray.50">Htet Aung Shine</Heading>

          <Center>
            <VStack spacing="0">
              <Text fontWeight="normal" fontSize="lg" color="gray.400">
                Engineer | Maker | 🇦🇺
              </Text>
              <Text fontWeight="normal" fontSize="lg" color="gray.200">
                <Link href="mailto:h@shine.rocks">h@shine.rocks</Link>
              </Text>
            </VStack>
          </Center>

          <Flex pt="4">
            <SocialIconGroup />
          </Flex>
        </VStack>
      </Center>

      <Box my={["10", "20"]}>
        <CreationCardContainer creations={creations} />
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const creations = getAllCreationPosts();
  return {
    props: {
      creations,
    },
  };
}
