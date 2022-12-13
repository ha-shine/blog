import { Heading as ChakraHeading } from "@chakra-ui/react";

export default function Heading({ children, level }) {
  const fontSize = `${6 - level}xl`;

  return (
    <ChakraHeading fontWeight="bold" color="#E9D8A6" py="2" fontFamily="heading" fontSize={fontSize}>
      {children}
    </ChakraHeading>
  );
}