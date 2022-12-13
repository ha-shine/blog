import Markdoc from "@markdoc/markdoc";

export function parse(content: string): string {
  const config = {
    nodes: {
      heading: {
        render: 'Heading',
        attributes: {
          level: { type: Number }
        }
      },
      paragraph: {
        render: 'Paragraph'
      }
    }
  }

  const ast = Markdoc.parse(content);
  const json = Markdoc.transform(ast, config);
  return JSON.stringify(json);
}