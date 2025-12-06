import type { BaseHTMLProps } from '../base';
export type HTMLMeterElementProps = BaseHTMLProps & {
    "value"?: number;
    "min"?: number;
    "max"?: number;
    "low"?: number;
    "high"?: number;
    "optimum"?: number;
};
