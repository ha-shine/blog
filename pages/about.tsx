import { Text } from "@chakra-ui/react";
import Layout from "../component/layout";
import BoxWithTitle from "../component/box-with-title";

export default function About() {
  return (
    <Layout>
      <BoxWithTitle title="About." bg="white">
        <Text>This is where I will write my autobiography</Text>
      </BoxWithTitle>
    </Layout>
  );
}
