import type { BaseHTMLProps } from '../base';
export type HTMLIframeElementProps = BaseHTMLProps & {
    "allow"?: string;
    "allowfullscreen"?: boolean;
    "height"?: string;
    "loading"?: 'eager' | 'lazy';
    "name"?: string;
    "referrerpolicy"?: ReferrerPolicy;
    "sandbox"?: string;
    "src"?: string;
    "srcdoc"?: string;
    "width"?: string;
};
