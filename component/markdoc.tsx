import React from "react";
import { renderers } from "@markdoc/markdoc";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

export default function Markdoc({ content }) {
  const json = JSON.parse(content);
  const components = {
    Heading,
    Paragraph
  };

  return (
    <>
      {renderers.react(json, React, { components })}
    </>
  );
}