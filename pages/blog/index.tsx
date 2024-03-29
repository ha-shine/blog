import { getAllPosts } from "../../lib/posts";
import { Box, Text } from "@chakra-ui/react";
import Heading from "../../component/Heading";
import Link from "next/link";
import { format } from "date-fns";
import Paragraph from "../../component/Paragraph";
import Head from "next/head";
import BlogLayout from "../../component/BlogLayout";

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
    <BlogLayout>
      <Head>
        <title>Shine.rocks | Blog</title>
        <meta
          name="description"
          content="A collection of rumblings from Htet Aung Shine"
        />
        <meta
          name="og:title"
          property="og:title"
          content="Blogs from shine.rocks"
        />
        <meta
          name="og:description"
          property="og:description"
          content="A collection of rumblings from Htet Aung Shine"
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
    </BlogLayout>
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
