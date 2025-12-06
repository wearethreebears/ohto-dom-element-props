import type { BaseHTMLProps } from '../base';
export type HTMLTrackElementProps = BaseHTMLProps & {
    "default"?: boolean;
    "kind"?: 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata';
    "label"?: string;
    "src"?: string;
    "srclang"?: string;
};
