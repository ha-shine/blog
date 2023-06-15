import LayoutWithFooter from "../../component/LayoutWithFooter";
import { getAllCreationPosts } from "../../lib/creation";
import CreationCardContainer from "../../component/CreationCardContainer";
import { Box } from "@chakra-ui/react";
import Head from "next/head";

// TODO: All creations link should be active if there are more than certain number
//       of posts
export default function Index({ creations }) {
  return (
    <LayoutWithFooter>
      <Head>
        <title>Shine.rocks | Creations</title>
        <meta
          name="description"
          content="A collection of creations from Htet Aung Shine"
        />
        <meta
          name="og:title"
          property="og:title"
          content="Creations from shine.rocks"
        />
        <meta
          name="og:description"
          property="og:description"
          content="A collection of creations from Htet Aung Shine"
        />
      </Head>
      <Box py="12">
        <CreationCardContainer creations={creations} />
      </Box>
    </LayoutWithFooter>
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
