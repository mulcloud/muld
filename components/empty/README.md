# Empty

### Install

```js
import { Empty } from'@trillion/muld';
```

## Usage

### Basic Usage

```html
<Empty description="Description Word" />
```

### Image Type

Use the image prop to display different placeholder images

```html
<!-- Error -->
<Empty image="error" description="Description Word" />
<!-- Network -->
<Empty image="network" description="Description Word" />
<!-- Search -->
<Empty image="network" description="Description Word" />
```

### Custom Image

```html
<Empty
    className="custom-image"
    image="https://img.yzcdn.cn/vant/custom-empty-image.png"
    description="Description Word"
/>          

<style>
  .custom-image img {
    border-radius: 100%;
  }
</style>
```

### Bottom Content

```html
<Empty description="Description Word">
    <Button round type="danger">
        Button Click
    </Button>
</Empty>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| image | Image type，can be set to `error` `network` `search` or image URL | _string_ | `default` |
| description | Desciption | _string_ | - |

### Slots

| Name        | Description           |
| ----------- | --------------------- |
| default     | Custom bottom content |
| image       | Custom image          |
| description | Custom description    |
