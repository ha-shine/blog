import { Heading as ChakraHeading } from "@chakra-ui/react";

interface Props {
  children: string,
  level?: number
}

export default function Heading({ children, level = 1 }: Props) {
  const fontSize = `${6 - level}xl`;

  return (
    <ChakraHeading fontWeight="bold" color="#E9D8A6" my="5" fontFamily="heading" fontSize={fontSize}>
      {children}
    </ChakraHeading>
  );
}