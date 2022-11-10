import Layout from "../component/layout";
import { getAllPosts } from "../lib/posts";
import { Box, Heading, Text } from "@chakra-ui/react";
import BoxWithTitle from "../component/box-with-title";
import Link from "next/link";

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts()
        .sort((a, b) => {
          if (b.filename <= a.filename)
            return -1;
          else if (a.filename < b.filename)
            return 1;
          return 0;
        })
    }
  };
}

export default function Blog({ posts }) {
  return (
    <Layout>
      <BoxWithTitle title="Blogs." bg="white">
        <Box>
          {posts.map(post => <BlogPost post={post} />)}
        </Box>
      </BoxWithTitle>
    </Layout>
  );
}

// TODO: Change cursor, show some effects here
function BlogPost({ post }) {
  let link = `/blog/${post.id}`

  return (
    <Link href={link}>
      <Box>
        <Heading fontWeight="semibold" fontSize="xl" color="gray.900">{post.title}</Heading>
        <Text fontWeight="light" fontSize="lg" color="gray.900">{post.description}</Text>
      </Box>
    </Link>
  );
}