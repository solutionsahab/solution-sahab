// WebMCP declarative form attributes (webmachinelearning.github.io/webmcp), not yet in React's types.
import "react";

declare module "react" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- must match React's declaration to merge
  interface FormHTMLAttributes<T> {
    toolname?: string;
    tooldescription?: string;
  }
}
