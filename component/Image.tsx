import { Image as ChakraImage } from "@chakra-ui/react";

export default function Image({ alt, src }) {
  return (
    <>
      <ChakraImage src={src} alt={alt} />
    </>
  );
}
