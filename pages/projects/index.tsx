import Head from "next/head";
import NextImage from "next/image";
import { Box, Center, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import WasmTetrisPng from "../../public/wasm-tetris.png";
import LayoutWithFooter from "../../component/LayoutWithFooter";

export default function Index() {
  return (
    <LayoutWithFooter>
      <Head>
        <title>Shine.rocks</title>
        <meta
          name="description"
          content="An assembly of toy projects I have done for fun"
        />
        <meta
          name="og:title"
          property="og:title"
          content="Projects from shine.rocks"
        />
        <meta
          name="og:description"
          property="og:description"
          content="An assembly of toy projects I have done for fun"
        />
      </Head>
      <Box py="14">
        <Project
          title="Tetris in WASM with Rust"
          description="Tetris written in Rust using WASM technology"
          avatar={WasmTetrisPng}
          components="Rust, WASM, pixijs"
          link="https://stuffs.shine.rocks/wasm-tetris/index.html"
        />
      </Box>
    </LayoutWithFooter>
  );
}

function Project({ title, description, avatar, components, link }) {
  let transition = "transform 0.35s cubic-bezier(0.19, 1, 0.22, 1) 0.1s";

  return (
    <LinkBox py="14" bgColor="gray.800" cursor="pointer" role="group">
      <LinkOverlay href={link} target="__blank">
        <Center>
          <Text
            fontWeight="bold"
            fontSize="5xl"
            fontFamily="heading"
            color="gray.200"
            _groupHover={{
              transform: "translateY(-14px)",
            }}
            transition={transition}
          >
            {title}
          </Text>
        </Center>
        <Center
          my="12"
          transition={transition}
          _groupHover={{
            transform: "scale(1.2)",
          }}
        >
          <NextImage src={avatar} alt={title} width="90" height="60" />
        </Center>
        <Center>
          <Text
            fontFamily="body"
            fontWeight="300"
            fontSize="lg"
            color="gray.200"
            _groupHover={{
              transform: "translateY(14px)",
            }}
            transition={transition}
          >
            {description}
          </Text>
        </Center>
        <Center mt="2">
          <Text
            fontFamily="body"
            fontWeight="800"
            fontSize="md"
            color="gray.200"
            _groupHover={{
              transform: "translateY(14px)",
            }}
            transition={transition}
          >
            {components}
          </Text>
        </Center>
      </LinkOverlay>
    </LinkBox>
  );
}
