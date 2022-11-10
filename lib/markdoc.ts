import Markdoc from "@markdoc/markdoc";

export function parse(content: string): string {
  const config = {
    nodes: {
      heading: {
        render: 'Heading'
      },
      paragraph: {
        render: 'Text'
      }
    }
  }

  const ast = Markdoc.parse(content);
  const json = Markdoc.transform(ast, config);
  return JSON.stringify(json);
}