import { Text } from "@chakra-ui/react";

export default function Paragraph({ children }) {
  return (
    <Text fontWeight="normal" fontSize="lg" color="gray.200" py="2">
      {children}
    </Text>
  );
}