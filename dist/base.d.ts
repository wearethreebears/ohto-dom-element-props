export type BaseHTMLProps = {
    id?: string;
    class?: string | string[];
    style?: string | Record<string, string>;
    title?: string;
    hidden?: boolean;
    role?: string;
    [key: `aria-${string}`]: string | boolean | undefined;
    [key: `data-${string}`]: string | number | boolean | undefined;
    onClick?: (e: MouseEvent) => void;
    onInput?: (e: InputEvent) => void;
    onChange?: (e: Event) => void;
    onFocus?: (e: FocusEvent) => void;
    onBlur?: (e: FocusEvent) => void;
};
