import type { BaseHTMLProps } from '../base'

export type HTMLTextareaElementProps = BaseHTMLProps & {
  "autocomplete"?: string;
  "cols"?: number;
  "disabled"?: boolean;
  "form"?: string;
  "maxlength"?: number;
  "minlength"?: number;
  "name"?: string;
  "placeholder"?: string;
  "readonly"?: boolean;
  "required"?: boolean;
  "rows"?: number;
  "wrap"?: 'hard' | 'soft';
};
