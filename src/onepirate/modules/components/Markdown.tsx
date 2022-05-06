import * as React from "react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const components = {
  h1: ({ node, ...props }: any) => <Typography gutterBottom={true} variant="h1" {...props}>{props.children}</Typography>,
  h2: ({ node, ...props }: any) => <Typography gutterBottom={true} variant="h2" {...props}>{props.children}</Typography>,
  h3: ({ node, ...props }: any) => <Typography gutterBottom={true} variant="subtitle1" {...props}>{props.children}</Typography>,
  h4: ({ node, ...props }: any) => <Typography paragraph={true} gutterBottom={true} variant="caption" {...props}>{props.children}</Typography>,
  h5: ({ node, ...props }: any) => <Typography paragraph={true} variant="h5" {...props}>{props.children}</Typography>,
  h6: ({ node, ...props }: any) => <Typography paragraph={true} variant="h6" {...props}>{props.children}</Typography>,
  p: ({ node, ...props }: any) => <Typography paragraph={true} variant="h5" {...props}>{props.children}</Typography>,
  a: ({ node, ...props }: any) => <Link {...props}>{props.children}</Link>,
  span: ({ node, ...props }: any) => <Typography paragraph={true} variant="h5" {...props}>{props.children}</Typography>,
  li: ({ node, ...props }: any) => <li {...props}>{props.children}</li>,
};

export default function Markdown(props: any) {
  return <ReactMarkdown components={components} children={props.children} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} />;
}
