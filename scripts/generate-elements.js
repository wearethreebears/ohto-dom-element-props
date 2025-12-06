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
    label: { "for": "string" },
    input: { "type": "string", "value": "string | number | boolean" },
    button: { "type": "'button' | 'submit' | 'reset'" },
    img: { "src": "string", "alt": "string" },
    a: { "href": "string", "target": "string" },
    form: { "action": "string", "method": "'get' | 'post'" }
};
function pascal(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function run() {
    if (!fs.existsSync(ELEMENTS_DIR))
        fs.mkdirSync(ELEMENTS_DIR, { recursive: true });
    let indexExports = [`export * from './base'`];
    for (const tag of TAGS) {
        const typeName = `VueHTML${pascal(tag)}Element`;
        const props = EXTRA_PROPS[tag] || {};
        const lines = Object.entries(props).map(([k, v]) => `  "${k}"?: ${v};`).join('\n');
        const content = `import type { VueBaseHTMLAttributes } from '../base'

export type ${typeName} = VueBaseHTMLAttributes & {
${lines}
};
`;
        fs.writeFileSync(path.join(ELEMENTS_DIR, `${tag}.ts`), content);
        indexExports.push(`export * from './elements/${tag}'`);
    }
    fs.writeFileSync(path.join(SRC, 'index.ts'), indexExports.join('\n'));
    console.log("Generated all element types.");
}
run();
