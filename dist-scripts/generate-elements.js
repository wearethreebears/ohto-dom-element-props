import fs from 'fs';
import path from 'path';
const SRC = path.join(process.cwd(), 'src');
const ELEMENTS_DIR = path.join(SRC, 'elements');
const TAGS = [
    'a', 'abbr', 'address', 'area', 'article', 'aside', 'audio',
    'b', 'base', 'bdi', 'bdo', 'blockquote', 'body', 'br', 'button',
    'canvas', 'caption', 'cite', 'code', 'col', 'colgroup',
    'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt',
    'em', 'embed',
    'fieldset', 'figcaption', 'figure', 'footer', 'form',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html',
    'i', 'iframe', 'img', 'input', 'ins',
    'kbd', 'label', 'legend', 'li', 'link',
    'main', 'map', 'mark', 'meta', 'meter',
    'nav', 'noscript',
    'object', 'ol', 'optgroup', 'option', 'output',
    'p', 'picture', 'pre', 'progress',
    'q',
    'rp', 'rt', 'ruby',
    's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup',
    'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track',
    'u', 'ul',
    'var', 'video', 'wbr'
];
const EXTRA_PROPS = {
    a: {
        href: "string",
        target: "'_self' | '_blank' | '_parent' | '_top'",
        download: "string",
        rel: "string",
        hreflang: "string",
        type: "string",
        referrerpolicy: "ReferrerPolicy"
    },
    area: {
        alt: "string",
        coords: "string",
        download: "string",
        href: "string",
        hreflang: "string",
        media: "string",
        referrerpolicy: "ReferrerPolicy",
        rel: "string",
        shape: "string",
        target: "string"
    },
    audio: {
        autoplay: "boolean",
        controls: "boolean",
        crossorigin: "'anonymous' | 'use-credentials'",
        loop: "boolean",
        muted: "boolean",
        preload: "'none' | 'metadata' | 'auto'",
        src: "string"
    },
    base: {
        href: "string",
        target: "string"
    },
    blockquote: {
        cite: "string"
    },
    button: {
        type: "'button' | 'submit' | 'reset'",
        disabled: "boolean",
        form: "string",
        formaction: "string",
        formenctype: "string",
        formmethod: "string",
        formnovalidate: "boolean",
        formtarget: "string",
        name: "string",
        value: "string"
    },
    canvas: {
        width: "number",
        height: "number"
    },
    col: {
        span: "number"
    },
    colgroup: {
        span: "number"
    },
    data: {
        value: "string"
    },
    details: {
        open: "boolean"
    },
    dialog: {
        open: "boolean"
    },
    embed: {
        height: "string",
        src: "string",
        type: "string",
        width: "string"
    },
    fieldset: {
        disabled: "boolean",
        form: "string",
        name: "string"
    },
    form: {
        action: "string",
        method: "'get' | 'post' | 'dialog'",
        enctype: "'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'",
        target: "string",
        autocomplete: "'on' | 'off'",
        novalidate: "boolean",
        name: "string"
    },
    iframe: {
        allow: "string",
        allowfullscreen: "boolean",
        height: "string",
        loading: "'eager' | 'lazy'",
        name: "string",
        referrerpolicy: "ReferrerPolicy",
        sandbox: "string",
        src: "string",
        srcdoc: "string",
        width: "string"
    },
    img: {
        alt: "string",
        src: "string",
        srcset: "string",
        sizes: "string",
        crossorigin: "'anonymous' | 'use-credentials'",
        decoding: "'sync' | 'async' | 'auto'",
        height: "number",
        width: "number",
        ismap: "boolean",
        loading: "'eager' | 'lazy'",
        referrerpolicy: "ReferrerPolicy",
        usemap: "string"
    },
    input: {
        accept: "string",
        alt: "string",
        autocomplete: "string",
        checked: "boolean",
        disabled: "boolean",
        form: "string",
        formaction: "string",
        formenctype: "string",
        formmethod: "string",
        formnovalidate: "boolean",
        formtarget: "string",
        height: "number",
        list: "string",
        max: "string | number",
        maxlength: "number",
        min: "string | number",
        minlength: "number",
        multiple: "boolean",
        name: "string",
        pattern: "string",
        placeholder: "string",
        readonly: "boolean",
        required: "boolean",
        size: "number",
        src: "string",
        step: "string | number",
        type: "string",
        value: "string | number",
        width: "number"
    },
    label: {
        for: "string",
        form: "string"
    },
    legend: {
        align: "string"
    },
    li: {
        value: "number"
    },
    link: {
        as: "string",
        crossorigin: "'anonymous' | 'use-credentials'",
        disabled: "boolean",
        href: "string",
        hreflang: "string",
        integrity: "string",
        media: "string",
        referrerpolicy: "ReferrerPolicy",
        rel: "string",
        sizes: "string",
        type: "string"
    },
    map: {
        name: "string"
    },
    meta: {
        charset: "string",
        content: "string",
        httpEquiv: "string",
        name: "string"
    },
    meter: {
        value: "number",
        min: "number",
        max: "number",
        low: "number",
        high: "number",
        optimum: "number"
    },
    object: {
        data: "string",
        form: "string",
        height: "string",
        name: "string",
        type: "string",
        usemap: "string",
        width: "string"
    },
    ol: {
        reversed: "boolean",
        start: "number",
        type: "'1' | 'a' | 'A' | 'i' | 'I'"
    },
    optgroup: {
        disabled: "boolean",
        label: "string"
    },
    option: {
        disabled: "boolean",
        label: "string",
        selected: "boolean",
        value: "string"
    },
    output: {
        for: "string",
        form: "string",
        name: "string"
    },
    progress: {
        max: "number",
        value: "number"
    },
    q: {
        cite: "string"
    },
    script: {
        async: "boolean",
        crossorigin: "'anonymous' | 'use-credentials'",
        defer: "boolean",
        integrity: "string",
        nomodule: "boolean",
        referrerpolicy: "ReferrerPolicy",
        src: "string",
        type: "string"
    },
    select: {
        autocomplete: "string",
        disabled: "boolean",
        form: "string",
        multiple: "boolean",
        name: "string",
        required: "boolean",
        size: "number"
    },
    source: {
        media: "string",
        sizes: "string",
        src: "string",
        srcset: "string",
        type: "string"
    },
    style: {
        media: "string"
    },
    table: {
        align: "string"
    },
    td: {
        colspan: "number",
        rowspan: "number",
        headers: "string"
    },
    textarea: {
        autocomplete: "string",
        cols: "number",
        disabled: "boolean",
        form: "string",
        maxlength: "number",
        minlength: "number",
        name: "string",
        placeholder: "string",
        readonly: "boolean",
        required: "boolean",
        rows: "number",
        wrap: "'hard' | 'soft'"
    },
    th: {
        colspan: "number",
        rowspan: "number",
        headers: "string",
        scope: "'col' | 'row' | 'colgroup' | 'rowgroup'"
    },
    time: {
        datetime: "string"
    },
    title: {},
    track: {
        default: "boolean",
        kind: "'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata'",
        label: "string",
        src: "string",
        srclang: "string"
    },
    video: {
        autoplay: "boolean",
        controls: "boolean",
        crossorigin: "'anonymous' | 'use-credentials'",
        height: "number",
        loop: "boolean",
        muted: "boolean",
        playsinline: "boolean",
        poster: "string",
        preload: "'none' | 'metadata' | 'auto'",
        src: "string",
        width: "number"
    }
};
function pascal(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function run() {
    if (!fs.existsSync(ELEMENTS_DIR))
        fs.mkdirSync(ELEMENTS_DIR, { recursive: true });
    let indexExports = [`export * from './base'`];
    for (const tag of TAGS) {
        const typeName = `HTML${pascal(tag)}ElementProps`;
        const props = EXTRA_PROPS[tag] || {};
        const lines = Object.entries(props).map(([k, v]) => `  "${k}"?: ${v};`).join('\n');
        const extraProps = lines ? `\n${lines}\n` : '';
        const content = `import type { BaseHTMLProps } from '../base'

export type ${typeName} = BaseHTMLProps & {${extraProps}};
`;
        fs.writeFileSync(path.join(ELEMENTS_DIR, `${tag}.ts`), content);
        indexExports.push(`export * from './elements/${tag}'`);
    }
    fs.writeFileSync(path.join(SRC, 'index.ts'), indexExports.join('\n'));
    console.log("Generated all element types.");
}
run();
