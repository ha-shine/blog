import { getAllPosts, getPostContent } from "../../lib/posts";
import React from "react";
import { parse } from "../../lib/markdoc";
import Markdoc from "../../component/markdoc";
import { format } from "date-fns";
import { Text } from "@chakra-ui/react";
import Head from "next/head";
import BlogLayout from "../../component/BlogLayout";

export async function getStaticPaths() {
  let posts = getAllPosts().map((post) => {
    return { params: { id: post.id } };
  });

  return {
    paths: posts,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const post = getAllPosts().filter((post) => post.id === id)[0];
  const rawText = getPostContent(post);

  return {
    props: {
      post: post,
      content: parse(rawText),
    },
  };
}

export default function Post({ post, content }) {
  let date = format(new Date(post.created), "dd MMM yyyy");
  let title = `Shine.rocks | ${post.title}`;

  return (
    <BlogLayout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={post.description} />
        <meta name="og:title" property="og:title" content={title} />
        <meta
          name="og:description"
          property="og:description"
          content={post.description}
        />
      </Head>
      <Text fontWeight="light" fontSize="md" color="gray.50">
        {date}
      </Text>
      <Markdoc content={content} />
    </BlogLayout>
  );
}
