import Layout from "../component/layout";
import { getAllPosts } from "../lib/posts";
import { Box, Text } from "@chakra-ui/react";
import Heading from "../component/Heading";
import Link from "next/link";
import { format } from "date-fns";
import Paragraph from "../component/Paragraph";
import Head from "next/head";

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts().sort((a, b) => {
        if (b.filename <= a.filename) return -1;
        else if (a.filename < b.filename) return 1;
        return 0;
      }),
    },
  };
}

export default function Index({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Shine.rocks</title>
        <meta
          name="description"
          content="A collection of rumblings from a senior software engineer"
        />
        <meta
          name="og:title"
          property="og:title"
          content="Homepage of shine.rocks"
        />
        <meta
          name="og:description"
          property="og:description"
          content="A collection of rumblings from a senior software engineer"
        />
      </Head>
      <Box>
        {posts.map((post, idx) => (
          <BlogPost
            key={post.id}
            post={post}
            isLast={idx == posts.length - 1}
          />
        ))}
      </Box>
    </Layout>
  );
}

function BlogPost({ post, isLast }) {
  let link = `/blog/${post.id}`;
  let date = format(new Date(post.created), "dd MMM yyyy");

  return (
    <Box>
      <Link href={link}>
        <Box cursor="pointer" role="group">
          <Text fontWeight="light" fontSize="md" color="gray.50">
            {date}
          </Text>
          <Heading>{post.title}</Heading>
          <Paragraph>{post.description}</Paragraph>
        </Box>
      </Link>
      {isLast ? null : <Box bg="gray.50" height="0.5" my="10" />}
    </Box>
  );
}
