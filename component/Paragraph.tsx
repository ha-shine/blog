import { Text } from "@chakra-ui/react";

export default function Paragraph({ children }) {
  return (
    <Text fontWeight="normal" fontSize="lg" color="gray.200" my="5">
      {children}
    </Text>
  );
}