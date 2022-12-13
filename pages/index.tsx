import Layout from "../component/layout";
import { getAllPosts } from "../lib/posts";
import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { format, parse } from "date-fns";

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

// TODO: The blog posts should have a separator between each
export default function Index({ posts }) {
  return (
    <Layout>
      <Box>
        {posts.map((post, idx) => <BlogPost post={post} isLast={idx == posts.length - 1} />)}
      </Box>
    </Layout>
  );
}

function BlogPost({ post, isLast }) {
  let link = `/blog/${post.id}`;
  let date = format(new Date(post.created), "dd MMM yyyy");

  return (
    <Link href={link}>
      <Box>
        <Text fontWeight="light" fontSize="md" color="gray.50">{date}</Text>
        <Heading fontWeight="bold" fontSize="5xl" color="#E9D8A6" py="2">{post.title}</Heading>
        <Text fontWeight="light" fontSize="lg" color="gray.200" py="2">{post.description}</Text>
        { isLast ? null : <Box bg="gray.50" height="0.5" my="10" /> }
      </Box>
    </Link>
  );
}