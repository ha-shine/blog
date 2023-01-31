import Layout from "../../component/layout";
import Head from "next/head";
import { Box } from "@chakra-ui/react";

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Shine.rocks</title>
        <meta
          name="description"
          content="An assembly of toy projects I have done for fun"
        />
        <meta
          name="og:title"
          property="og:title"
          content="Projects from shine.rocks"
        />
        <meta
          name="og:description"
          property="og:description"
          content="An assembly of toy projects I have done for fun"
        />
      </Head>
      <Box>Hello world!</Box>
    </Layout>
  );
}
