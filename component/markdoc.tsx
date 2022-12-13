import React from "react";
import { renderers } from "@markdoc/markdoc";
import Heading from "../schema/Heading.markdoc";
import Paragraph from "../schema/Paragraph.markdoc";

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