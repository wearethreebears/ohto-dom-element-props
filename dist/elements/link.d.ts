import type { BaseHTMLProps } from '../base';
export type HTMLLinkElementProps = BaseHTMLProps & {
    "as"?: string;
    "crossorigin"?: 'anonymous' | 'use-credentials';
    "disabled"?: boolean;
    "href"?: string;
    "hreflang"?: string;
    "integrity"?: string;
    "media"?: string;
    "referrerpolicy"?: ReferrerPolicy;
    "rel"?: string;
    "sizes"?: string;
    "type"?: string;
};
