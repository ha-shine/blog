import Layout from "../component/layout";
import BoxWithTitle from "../component/box-with-title";
import { Text } from "@chakra-ui/react";

export default function Fun() {
  return (
    <Layout>
      <BoxWithTitle title="Fun." bg="white">
        <Text>This is where the fun stuffs will be</Text>
      </BoxWithTitle>
    </Layout>
  );
}