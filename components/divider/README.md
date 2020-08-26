# Divider

### Install

```js
import { Divider } from '@trillion/muld';
```

## Usage

### Basic Usage

```html
<Divider />
```

### With Text

```html
<Divider>Text</Divider>
```

### Content Position

```html
<Divider contentPosition="left">Text</Divider>
<Divider contentPosition="right">Text</Divider>
```

### Dashed

```html
<Divider dashed>Text</Divider>
```

### Custom Style

```html
<Divider
  style={{ color: '#1989fa', borderColor: '#1989fa', padding: '16px' }}
>
  Text
</Divider>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| dashed | Whether to use dashed border | _boolean_ | `false` |
| hairline | Whether to use hairline | _boolean_ | `true` |
| contentPosition | Content position，can be set to `left` `right` | _string_ | `center` |

### Slots

| Name    | Description |
| ------- | ----------- |
| default | content     |
