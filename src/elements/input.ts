import type { BaseHTMLProps } from '../base'

export type HTMLInputElementProps = BaseHTMLProps & {
  "accept"?: string;
  "alt"?: string;
  "autocomplete"?: string;
  "checked"?: boolean;
  "disabled"?: boolean;
  "form"?: string;
  "formaction"?: string;
  "formenctype"?: string;
  "formmethod"?: string;
  "formnovalidate"?: boolean;
  "formtarget"?: string;
  "height"?: number;
  "list"?: string;
  "max"?: string | number;
  "maxlength"?: number;
  "min"?: string | number;
  "minlength"?: number;
  "multiple"?: boolean;
  "name"?: string;
  "pattern"?: string;
  "placeholder"?: string;
  "readonly"?: boolean;
  "required"?: boolean;
  "size"?: number;
  "src"?: string;
  "step"?: string | number;
  "type"?: string;
  "value"?: string | number;
  "width"?: number;
};
