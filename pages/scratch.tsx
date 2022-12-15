import Layout from "../component/layout";
import Head from "next/head";
import Flocking from "../embed/flocking";

export default function Scratch() {
  return (
    <Layout>
      <Head>
        <title>Shine.rocks</title>
      </Head>
      <Flocking />
    </Layout>
  );
}