import BoxWithTitle from "../../component/box-with-title";
import Layout from "../../component/layout";
import { getAllPosts, getPostContent } from "../../lib/posts";
import React from "react";
import { parse } from "../../lib/markdoc";
import Markdoc from "../../component/markdoc";
import NextImage from "next/image";
import { AspectRatio, Box } from "@chakra-ui/react";

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
      <BoxWithTitle title={parseInt(post.serial)} bg="white" padding="0">
        <AspectRatio position="relative" maxH="lg" ratio={2}>
          <NextImage src={cover} layout="fill" objectFit="cover" />
        </AspectRatio>
        <Box p="4">
          <Markdoc content={content} />
        </Box>
      </BoxWithTitle>
    </Layout>
  );
}