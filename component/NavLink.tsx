import { Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavLink({ children, href, margin = 7 }) {
  let router = useRouter();
  let border = "none";
  let hover = { "text-decoration": "none" };
  if (router.asPath === href) {
    border = "solid 1px";
  } else {
    hover["color"] = "#94D2BD";
  }

  return (
    <Text
      fontFamily="body"
      fontSize="lg"
      color="gray.200"
      py="2"
      mx={margin}
      as="nav"
    >
      <ChakraLink
        as={Link}
        href={href}
        borderBottom={border}
        borderColor="gray.200"
        _hover={hover}
      >
        {children}
      </ChakraLink>
    </Text>
  );
}
