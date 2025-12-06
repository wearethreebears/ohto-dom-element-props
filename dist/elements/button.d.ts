import type { BaseHTMLProps } from '../base';
export type HTMLButtonElementProps = BaseHTMLProps & {
    "type"?: 'button' | 'submit' | 'reset';
    "disabled"?: boolean;
    "form"?: string;
    "formaction"?: string;
    "formenctype"?: string;
    "formmethod"?: string;
    "formnovalidate"?: boolean;
    "formtarget"?: string;
    "name"?: string;
    "value"?: string;
};
