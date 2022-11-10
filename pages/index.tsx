import { Box, Heading, HStack, Text } from "@chakra-ui/react";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "../lib/icons";
import { getAllPosts } from "../lib/posts";
import Layout from "../component/layout";
import BoxWithTitle from "../component/box-with-title";

export async function getStaticProps() {
  return {
    props: {
      latestPosts: getAllPosts()
        .sort((a, b) => {
          if (b.created <= a.created)
            return -1;
          else if (a.created < b.created)
            return 1;
          return 0;
        })
        .slice(0, 4)
    }
  };
}

export default function Home({ latestPosts }) {
  return (
    <Layout>
      <BoxWithTitle title="Latest." bg="white">
        {latestPosts.map(post => {
          return (
            <>
              <Heading fontWeight="semibold" fontSize="xl" color="gray.900">{post.title}</Heading>
              <Text fontWeight="light" fontSize="lg" color="gray.900">{post.description}</Text>
            </>
          );
        })}
      </BoxWithTitle>

      <BoxWithTitle title="Social" bg="#EB7F44">
        <Text color="gray.50" fontWeight="extrabold" fontSize="5xl" fontFamily="body" lineHeight="shorter">
          Say hello, <br />
          h@shine.rocks
        </Text>
        <HStack mt="32" spacing="5">
          <a href="https://twitter.com/_sha94" target="_blank"><TwitterIcon boxSize="10" color="gray.50" /></a>
          <a href="https://www.linkedin.com/in/htet-aung-shine-79654192/" target="_blank"><LinkedInIcon
            boxSize="10" color="gray.50" /></a>
          <a href="https://github.com/ha-shine" target="_blank"><GithubIcon boxSize="10" color="gray.50" /></a>
        </HStack>
      </BoxWithTitle>
    </Layout>
  );
}
