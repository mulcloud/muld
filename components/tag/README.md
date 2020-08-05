# Tag

### Install

```js
import { Tag } from '@trillion/muld';
```

## Usage

### Basic Usage

```html
<Tag type="primary">Tag</Tag>
<Tag type="success">Tag</Tag>
<Tag type="danger">Tag</Tag>
<Tag type="warning">Tag</Tag>
```

### Round style

```html
<Tag round type="primary">Tag</Tag>
<Tag round type="success">Tag</Tag>
<Tag round type="danger">Tag</Tag>
<Tag round type="warning">Tag</Tag>
```

### Mark style

```html
<Tag mark type="primary">Tag</Tag>
<Tag mark type="success">Tag</Tag>
<Tag mark type="danger">Tag</Tag>
<Tag mark type="warning">Tag</Tag>
```

### Plain style

```html
<Tag plain type="primary">Tag</Tag>
<Tag plain type="success">Tag</Tag>
<Tag plain type="danger">Tag</Tag>
<Tag plain type="warning">Tag</Tag>
```

### Custom Color

```html
<Tag color="#f2826a">Tag</Tag>
<Tag color="#7232dd">Tag</Tag>
<Tag color="#7232dd" plain>Tag</Tag>
<Tag color="#ffe1e1" textColor="#ad0000">Tag</Tag>
```

### Custom Size

```html
<Tag type="danger">Tag</Tag>
<Tag type="danger" size="medium">Tag</Tag>
<Tag type="danger" size="large">Tag</Tag>
```

### Closeable

```html
<Tag
  closeable
  size="medium"
  type="primary"
  onClose={(e) => {console.log('close:', e)}}
>
  Tag
</Tag>
<Tag
  closeable
  size="medium"
  type="success"
  onClose={(e) => {console.log('close:', e)}}
>
  Tag
</Tag>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| type | Type, can be set to `primary` `success` `danger` `warning` | _string_ | `default` |
| size | Size, can be set to `large` `medium` | _string_ | - |
| color | Custom color | _string_ | - |
| plain | Whether to be plain style | _boolean_ | `false` |
| round | Whether to be round style | _boolean_ | `false` |
| mark | Whether to be mark style | _boolean_ | `false` |
| textColor | Text color | _string_ | `white` |
| closeable | Whether to be closeable | _boolean_ | `false` |

### Events

| Event | Description                     | Arguments      |
| ----- | ------------------------------- | -------------- |
| onClick | Triggered when clicked          | _event: Event_ |
| onClose | Triggered when click close icon | -              |
