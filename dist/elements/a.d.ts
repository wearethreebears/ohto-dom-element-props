import type { BaseHTMLProps } from '../base';
export type HTMLAElementProps = BaseHTMLProps & {
    "href"?: string;
    "target"?: '_self' | '_blank' | '_parent' | '_top';
    "download"?: string;
    "rel"?: string;
    "hreflang"?: string;
    "type"?: string;
    "referrerpolicy"?: ReferrerPolicy;
};
