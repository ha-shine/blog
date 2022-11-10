import { Box, Heading } from "@chakra-ui/react";

export default function BoxWithTitle({ title, bg, children, ...props }) {
  const p = props.padding ? props.padding : "4";

  return (
    <Box mt="10" mb="36">
      <Heading color="gray.900" fontSize="8xl" fontWeight="black" lineHeight="none" pl="2">
        {title}
      </Heading>
      <Box bg={bg} my="-7" p={p} pt="10">
        {children}
      </Box>
    </Box>
  );
}