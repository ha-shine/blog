import Layout from "./Layout";
import { Box, Container, Text } from "@chakra-ui/react";
import SocialIconGroup from "./SocialIconGroup";

export default function LayoutWithFooter({ children }) {
  const footer = <Footer />;

  return <Layout footer={footer}>{children}</Layout>;
}

interface FooterLinkProps {
  link: string;
  text: string;
}

function FooterLink({ link, text }: FooterLinkProps) {
  return (
    <Text
      fontSize="xl"
      fontWeight="light"
      fontFamily="body"
      color="gray.400"
      py="1"
    >
      <a href={link} target="_blank">
        {text}
      </a>
    </Text>
  );
}

function Footer() {
  return (
    <Box bg="gray.800" py="8">
      <Container maxWidth="container.xl">
        <SocialIconGroup />
        <FooterLink link={"mailto:h@shine.rocks"} text={"h@shine.rocks"} />
      </Container>
    </Box>
  );
}
