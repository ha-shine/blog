import Markdoc from "@markdoc/markdoc";

export function parse(content: string): string {
  const config = {
    nodes: {
      heading: {
        render: "Heading",
        attributes: {
          level: { type: Number },
        },
      },
      paragraph: {
        render: "Paragraph",
      },
      image: {
        render: "Image",
        attributes: {
          alt: { type: String },
          src: { type: String },
        },
      },
      list: {
        render: "List",
        attributes: {
          ordered: { type: Boolean },
        },
      },
      item: {
        render: "ListItem",
      },
      link: {
        render: "Link",
        attributes: {
          href: { type: String },
          title: { type: String },
        },
      },
      strong: {
        render: "Strong",
      },
    },
    tags: {
      flockingSimulation: {
        render: "Flocking",
      },
    },
  };

  const ast = Markdoc.parse(content);
  const json = Markdoc.transform(ast, config);
  return JSON.stringify(json);
}
