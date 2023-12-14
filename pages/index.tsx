import Layout from "../component/Layout";
import Head from "next/head";
import { Center, HStack, Text, VStack } from "@chakra-ui/react";
import SocialIconGroup from "../component/SocialIconGroup";
import Link from "next/link";
import { ReactNode } from "react";

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Shine.rocks</title>
        <meta
          name="description"
          content="A personal home page of Htet Aung Shine"
        />
        <meta
          name="og:title"
          property="og:title"
          content="Homepage of shine.rocks"
        />
        <meta
          name="og:description"
          property="og:description"
          content="A personal home page of Htet Aung Shine"
        />
      </Head>
      <Center>
        <VStack mt="120" spacing="4">
          <Center>
            <VStack spacing="20">
              <VStack spacing="4">
                <Text fontWeight="normal" fontSize="3xl" color="gray.400">
                  Hey! I'm Shine, a software engineer from Australia. I am
                  currently employed with{" "}
                  <Link
                    href="https://www.grab.com/sg/"
                    target="_blank"
                    style={{
                      textDecoration: "underline 6px #0A9830",
                      textUnderlineOffset: "1px",
                    }}
                  >
                    Grab
                  </Link>
                  , the Uber of Southeast Asia, working on our internal
                  continuous deployment system. I started my foray into software
                  engineering writing games in Visual Basic, and now I'm what
                  you would call a full-stack engineer.
                </Text>
                <Text fontWeight="normal" fontSize="3xl" color="gray.400">
                  My weapons of choice nowadays are{" "}
                  <IndexLink href="https://kotlinlang.org/" color="#7F52FF">
                    Kotlin
                  </IndexLink>{" "}
                  and{" "}
                  <IndexLink
                    href="https://www.typescriptlang.org/"
                    color="#3078C6"
                  >
                    Typescript
                  </IndexLink>
                  , with{" "}
                  <IndexLink href="https://nextjs.org/" color="#ADADAD">
                    NextJS
                  </IndexLink>{" "}
                  with{" "}
                  <IndexLink href="https://quarkus.io/" color="#4695EB">
                    Quarkus
                  </IndexLink>{" "}
                  being my goto stack. I am a design enthusiast and love
                  building visually pleasing things, although my design skills
                  are not up to my taste yet.
                </Text>
                <Text fontWeight="normal" fontSize="3xl" color="gray.400">
                  I am trying to bootstrap my entrepreneur journey for the
                  moment, and not available for new opportunities at the moment.
                  But if you want to collaborate or have some cool ideas for a
                  project, feel free to contact me at any of my social handles.
                </Text>
              </VStack>
              <SocialIconGroup />
            </VStack>
          </Center>
        </VStack>
      </Center>
    </Layout>
  );
}

type IndexLinkProps = {
  href: string;
  color: string;
  children?: ReactNode;
};

function IndexLink({ href, color, children }: IndexLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      style={{
        textDecoration: `underline 6px ${color}`,
        textUnderlineOffset: "1px",
        textDecorationSkipInk: "none",
      }}
    >
      {children}
    </Link>
  );
}
