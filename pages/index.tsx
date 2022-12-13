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

export default function Index({ posts }) {
  return (
    <Layout>
      <Box>
        {posts.map((post, idx) => <BlogPost key={post.id} post={post} isLast={idx == posts.length - 1} />)}
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
        <Box cursor="pointer">
          <Text fontWeight="light" fontSize="md" color="gray.50">{date}</Text>
          <Heading fontWeight="bold" fontSize="5xl" color="#E9D8A6" py="2">{post.title}</Heading>
          <Text fontWeight="normal" fontSize="lg" color="gray.200" py="2">{post.description}</Text>
        </Box>
      </Link>
      {isLast ? null : <Box bg="gray.50" height="0.5" my="10" />}
    </Box>
  );
}