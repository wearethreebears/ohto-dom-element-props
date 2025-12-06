import type { BaseHTMLProps } from '../base'

export type HTMLAudioElementProps = BaseHTMLProps & {
  "autoplay"?: boolean;
  "controls"?: boolean;
  "crossorigin"?: 'anonymous' | 'use-credentials';
  "loop"?: boolean;
  "muted"?: boolean;
  "preload"?: 'none' | 'metadata' | 'auto';
  "src"?: string;
};
