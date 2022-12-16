import React from "react";
import { renderers } from "@markdoc/markdoc";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { ListItem, OrderedList, Text, UnorderedList } from "@chakra-ui/react";
import Flocking from "../embed/flocking";

function List({ children, ordered }) {
  if (ordered) {
    return (
      <OrderedList fontWeight="normal" fontSize="lg" color="gray.200" ml="10">
        {children}
      </OrderedList>
    );
  } else {
    return (
      <UnorderedList fontWeight="normal" fontSize="lg" color="gray.200" ml="10">
        {children}
      </UnorderedList>
    );
  }
}

function Link({ children, href }) {
  return (
    <Text as="u" color="#EE9B00">
      <a href={href} target="_blank">{children}</a>
    </Text>
  )
}

function Strong({ children }) {
  return (
    <Text as="b" color="#0A9396">{children}</Text>
  )
}

export default function Markdoc({ content }) {
  const json = JSON.parse(content);
  const components = {
    Heading,
    Paragraph,
    List,
    ListItem,
    Link,
    Strong,

    Flocking
  };

  return (
    <>
      {renderers.react(json, React, { components })}
    </>
  );
}