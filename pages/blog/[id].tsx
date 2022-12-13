import Layout from "../../component/layout";
import { getAllPosts, getPostContent } from "../../lib/posts";
import React from "react";
import { parse } from "../../lib/markdoc";
import { AspectRatio, Box, Text } from "@chakra-ui/react";

export async function getStaticPaths() {
  let posts = getAllPosts().map((post) => {
    return { params: { id: post.id } };
  });

  return {
    paths: posts,
    fallback: false
  };
}

// TODO: This is where I need to render the post
export async function getStaticProps({ params }) {
  const id = params.id;
  const post = getAllPosts().filter(post => post.id === id)[0];
  const rawText = getPostContent(post);

  return {
    props: {
      post: post,
      content: parse(rawText)
    }
  };
}

export default function Post({ post, content }) {
  const cover = `/images/${post.cover}`;

  return (
    <Layout>
      <Text>Hello World</Text>
    </Layout>
  );
}