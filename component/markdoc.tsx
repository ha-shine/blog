import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import { renderers } from "@markdoc/markdoc";

export default function Markdoc({ content }) {
  const json = JSON.parse(content);
  const components = {
    Heading,
    Text
  };

  return (
    <>
      {renderers.react(json, React, { components })}
    </>
  )
}