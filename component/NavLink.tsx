import { Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavLink({ children, href, margin = 7 }) {
  let router = useRouter();
  let border = "none";
  let hover = { textDecoration: "none" };
  if (router.asPath === href) {
    border = "solid 1px";
  } else {
    hover["color"] = "teal.200";
  }

  return (
    <Text
      fontFamily="body"
      fontSize="lg"
      color="gray.200"
      py="2"
      pb="0"
      mx={margin}
      as="nav"
      borderBottom={border}
      borderColor="gray.200"
      height="9"
      _hover={hover}
    >
      <ChakraLink as={Link} href={href} _hover={{ textDecoration: "none" }}>
        {children}
      </ChakraLink>
    </Text>
  );
}
