import { Heading as ChakraHeading } from "@chakra-ui/react";

interface Props {
  children: string;
  level?: number;
  color?: string;
}

export default function Heading({
  children,
  level = 1,
  color = "#E9D8A6",
}: Props) {
  const fontSize = `${6 - level}xl`;

  return (
    <ChakraHeading
      transition="0.2s"
      fontWeight="bold"
      color={color}
      my="5"
      fontFamily="heading"
      fontSize={fontSize}
      _groupHover={{
        color: "#94D2BD",
      }}
    >
      {children}
    </ChakraHeading>
  );
}
