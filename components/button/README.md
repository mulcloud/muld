# Button

### Install

```js
import { Button } from '@trillion/muld';
```

## Usage

### Type

```html
<Button type="primary">Primary</Button>
<Button type="info">Info</Button>
<Button type="default">Default</Button>
<Button type="danger">Danger</Button>
<Button type="warning">Warning</Button>
```

### Plain

```html
<Button plain type="primary">Primary</Button>
<Button plain type="info">Danger</Button>
```

### Hairline

```html
<Button plain hairline type="primary">Hairline</Button>
<Button plain hairline type="info">Hairline</Button>
```

### Disabled

```html
<Button disabled type="primary">Diabled</Button>
<Button disabled type="info">Diabled</Button>
```

### Loading

```html
<Button loading type="primary" />
<Button loading type="primary" loading-type="spinner" />
<Button loading type="info" loading-text="Loading..." />
```

### Shape

```html
<Button square type="primary">Square</Button>
<Button round type="info">Round</Button>
```

### Icon

```html
<Button icon="plus" type="primary" />
<Button icon="plus" type="primary">Button</Button>
```

### Size

```html
<Button type="primary" size="large">Large</Button>
<Button type="primary" size="normal">Normal</Button>
<Button type="primary" size="small">Small</Button>
<Button type="primary" size="mini">Mini</Button>
```

### Block Element

```html
<Button type="primary" block>Block Element</Button>
```

### Custom Color

```html
<Button color="#7232dd">Pure</Button>
<Button color="#7232dd" plain>Pure</Button>
<Button color="linear-gradient(to right, #ff6034, #ee0a24)">
  Gradient
</Button>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| type | Can be set to `primary` `info` `warning` `danger` | _string_ | `default` |
| size | Can be set to `large` `small` `mini` | _string_ | `normal` |
| text | Text | _string_ | - |
| color| Color, support linear-gradient | _string_ | - |
| icon | Left Icon | _string_ | - |
| icon-prefix | Icon className prefix | _string_ | `mul-icon` |
| tag | HTML Tag | _string_ | `button` |
| nativeType | Native Type Attribute | _string_ | `''` |
| plain | Whether to be plain button | _boolean_ | `false` |
| block | Whether to set display block | _boolean_ | `false` |
| round | Whether to be round button | _boolean_ | `false` |
| square | Whether to be square button | _boolean_ | `false` |
| disabled | Whether to disable button | _boolean_ | `false` |
| loading | Whether show loading status | _boolean_ | `false` |
| loadingText | Loading text | _string_ | - |
| loadingType | Loading type, can be set to `spinner` | _string_ | `circular` |
| loadingSize | Loading icon size | _string_ | `20px` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| onClick | Triggered when click button and not disabled or loading | _event: Event_ |
| onTouchStart | Triggered when touch start | _event: TouchEvent_ |
