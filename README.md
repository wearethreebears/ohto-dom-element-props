# @ohto/dom-element-props

TypeScript type definitions for all HTML elements with explicit prop types. Provides a clean, type-safe way to extend HTML element attributes in any TypeScript project.

## Motivation

When building component libraries or typed wrappers around HTML elements, you often need to extend built-in HTML element types. This package provides **explicit type definitions** for all HTML element attributes, making it easy to create type-safe component props.

### Common Use Cases

- Building reusable component libraries in React, Vue, Solid, or vanilla TypeScript
- Creating typed wrappers around HTML elements with additional props
- Avoiding framework-specific compiler issues when extending native types

### Vue 3.2+ Specific Issue

If you're using Vue 3.2+, you may have encountered this compiler error when extending built-in types:

```
[@vue/compiler-sfc] Failed to resolve extends base type.
If this previously worked in 3.2, you can instruct the compiler to ignore this extend by adding /* @vue-ignore */ before it
```

This package solves that problem by providing explicit type definitions that don't reference the built-in `HTML*Element` types, allowing Vue's compiler to resolve types correctly.

## Installation

```bash
npm install @ohto/dom-element-props
```

```bash
pnpm add @ohto/dom-element-props
```

```bash
yarn add @ohto/dom-element-props
```

## Usage

### TypeScript/React Example

```typescript
import type { HTMLButtonElementProps, HTMLInputElementProps } from '@ohto/dom-element-props'

// Extend button props with custom properties
interface MyButtonProps extends HTMLButtonElementProps {
  variant?: 'primary' | 'secondary' | 'danger'
  loading?: boolean
}

// Extend input props
interface MyInputProps extends HTMLInputElementProps {
  error?: string
  label?: string
}

// Use in React
function MyButton({ variant = 'primary', loading, ...props }: MyButtonProps) {
  return (
    <button 
      {...props}
      disabled={props.disabled || loading}
      className={`btn btn-${variant}`}
    />
  )
}
```

### Vue 3 Component Example

```vue
<script setup lang="ts">
import type { HTMLButtonElementProps } from '@ohto/dom-element-props'

interface Props extends HTMLButtonElementProps {
  variant?: 'primary' | 'secondary'
  loading?: boolean
}

const props = defineProps<Props>()
</script>

<template>
  <button 
    :type="props.type || 'button'"
    :disabled="props.disabled || props.loading"
    :class="['btn', `btn-${props.variant}`]"
  >
    <slot />
  </button>
</template>
```

## Available Types

### Base Type

- `BaseHTMLProps` - Common HTML attributes shared by all elements (id, class, style, aria-*, data-*, event handlers, etc.)

### Element Types

All HTML elements are available with the pattern `HTML{ElementName}ElementProps`:

- `HTMLAElementProps` - Anchor/link props (href, target, download, rel, etc.)
- `HTMLButtonElementProps` - Button props (type, disabled, form, etc.)
- `HTMLInputElementProps` - Input props (type, value, placeholder, checked, etc.)
- `HTMLTextareaElementProps` - Textarea props (rows, cols, placeholder, etc.)
- `HTMLSelectElementProps` - Select props (multiple, size, etc.)
- `HTMLFormElementProps` - Form props (action, method, enctype, etc.)
- `HTMLImgElementProps` - Image props (src, alt, width, height, etc.)
- `HTMLVideoElementProps` - Video props (src, controls, autoplay, etc.)
- `HTMLAudioElementProps` - Audio props (src, controls, loop, etc.)
- `HTMLDivElementProps` - Div props (only base props)
- `HTMLSpanElementProps` - Span props (only base props)
- ...and 100+ more element types

### Common Props Included

All element types include:

- **Standard HTML attributes**: `id`, `title`, `hidden`, `role`
- **Styling**: `class` (string or array), `style` (string or object)
- **ARIA attributes**: `aria-*` (all ARIA attributes)
- **Data attributes**: `data-*` (custom data attributes)
- **Event handlers**: `onClick`, `onInput`, `onChange`, `onFocus`, `onBlur`

Plus element-specific attributes like:
- Input: `accept`, `autocomplete`, `checked`, `disabled`, `max`, `min`, `pattern`, `placeholder`, `readonly`, `required`, `step`, `value`
- Button: `type`, `disabled`, `form`, `formaction`, `formmethod`
- Anchor: `href`, `target`, `download`, `rel`, `hreflang`
- Image: `src`, `alt`, `srcset`, `sizes`, `loading`, `decoding`

## Features

✅ **Framework Agnostic** - Works with Vue, React, Solid, or any TypeScript project  
✅ **Comprehensive** - All 100+ HTML elements covered  
✅ **Type-Safe** - Fully typed with proper TypeScript definitions  
✅ **No Built-in Type References** - Avoids framework compiler issues  
✅ **Explicit Attributes** - All element-specific attributes clearly defined  
✅ **Modern Standards** - Includes modern HTML5 attributes

## How It Works

Instead of:
```typescript
// ❌ This causes Vue 3.2+ compiler errors
interface MyProps extends Partial<HTMLButtonElement> {
  variant?: string
}
```

Use:
```typescript
// ✅ This works perfectly
import type { HTMLButtonElementProps } from '@ohto/dom-element-props'

interface MyProps extends HTMLButtonElementProps {
  variant?: string
}
```

The package provides explicit type definitions that don't reference the built-in DOM types, allowing TypeScript and Vue's compiler to resolve types without issues.

## Development

```bash
# Generate element types
pnpm generate

# Build the package
pnpm build

# Do both
pnpm generate && pnpm build
```

## License

MIT

## Contributing

Issues and pull requests are welcome!
