import type { BaseHTMLProps } from '../base';
export type HTMLThElementProps = BaseHTMLProps & {
    "colspan"?: number;
    "rowspan"?: number;
    "headers"?: string;
    "scope"?: 'col' | 'row' | 'colgroup' | 'rowgroup';
};
