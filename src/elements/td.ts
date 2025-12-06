import type { BaseHTMLProps } from '../base'

export type HTMLTdElementProps = BaseHTMLProps & {
  "colspan"?: number;
  "rowspan"?: number;
  "headers"?: string;
};
