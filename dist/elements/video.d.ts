import type { BaseHTMLProps } from '../base';
export type HTMLVideoElementProps = BaseHTMLProps & {
    "autoplay"?: boolean;
    "controls"?: boolean;
    "crossorigin"?: 'anonymous' | 'use-credentials';
    "height"?: number;
    "loop"?: boolean;
    "muted"?: boolean;
    "playsinline"?: boolean;
    "poster"?: string;
    "preload"?: 'none' | 'metadata' | 'auto';
    "src"?: string;
    "width"?: number;
};
