import type { BaseHTMLProps } from '../base'

export type HTMLScriptElementProps = BaseHTMLProps & {
  "async"?: boolean;
  "crossorigin"?: 'anonymous' | 'use-credentials';
  "defer"?: boolean;
  "integrity"?: string;
  "nomodule"?: boolean;
  "referrerpolicy"?: ReferrerPolicy;
  "src"?: string;
  "type"?: string;
};
