import type { BaseHTMLProps } from '../base'

export type HTMLFormElementProps = BaseHTMLProps & {
  "action"?: string;
  "method"?: 'get' | 'post' | 'dialog';
  "enctype"?: 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';
  "target"?: string;
  "autocomplete"?: 'on' | 'off';
  "novalidate"?: boolean;
  "name"?: string;
};
