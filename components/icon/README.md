# Icon

### Install

```js
import { Icon } from '@trillion/muld';

```

## Usage

### Basic Usage

Use `name` prop to set icon name or icon URL

```html
<Icon name="chat-o" />
<Icon name="https://avatar.chengfayun.com.cn/chengfayun-avatar/6ce849b003c18744b54d1a9913db75e9.png" />
```

### Show Badge

Use `dot` prop, a small red dot will be displayed in the upper right corner of the icon.

Use `badge` prop, the badge will be displayed in the upper right corner of the icon.

```html
<Icon name="chat-o" dot />
<Icon name="chat-o" badge="9" />
<Icon name="chat-o" badge="99+" />
```

### Icon Color

Use `color` prop to set icon color

```html
<Icon name="chat-o" color="#1989fa" />
<Icon name="chat-o" color="#07c160" />
```

### Icon Size

Use `size` prop to set icon size

```html
<Icon name="chat-o" size="40" /> <Icon name="chat-o" size="3rem" />
```


## API

### Props

| Attribute      | Description             | Type               | Default    |
| -------------- | ----------------------- | ------------------ | ---------- |
| name           | Icon name or URL        | _string_           | `''`       |
| dot            | Whether to show red dot | _boolean_          | `false`    |
| badge          | Content of the badge    | _number \| string_ | `''`       |
| color          | Icon color              | _string_           | `inherit`  |
| size           | Icon size               | _number \| string_ | `inherit`  |
| class-prefix   | ClassName prefix        | _string_           | `mul-icon` |
| tag            | HTML Tag                | _string_           | `i`        |

### Events

| Event | Description               | Arguments      |
| ----- | ------------------------- | -------------- |
| onClick | Triggered when click icon | _event: Event_ |
| onTouchStart | Triggered when touch start | _event: TouchEvent_ |
