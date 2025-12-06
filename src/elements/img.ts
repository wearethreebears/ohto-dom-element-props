import type { BaseHTMLProps } from '../base'

export type HTMLImgElementProps = BaseHTMLProps & {
  "alt"?: string;
  "src"?: string;
  "srcset"?: string;
  "sizes"?: string;
  "crossorigin"?: 'anonymous' | 'use-credentials';
  "decoding"?: 'sync' | 'async' | 'auto';
  "height"?: number;
  "width"?: number;
  "ismap"?: boolean;
  "loading"?: 'eager' | 'lazy';
  "referrerpolicy"?: ReferrerPolicy;
  "usemap"?: string;
};
