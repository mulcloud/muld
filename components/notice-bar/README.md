# NoticeBar

### Install

```js
import { NoticeBar } from '@trillion/muld';
```

## Usage

### Basic Usage

```html
<NoticeBar text="Notice Content" left-icon="volume-o" />
```

### Scrollable

```html
<!-- Enable scroll when text is short -->
<NoticeBar scrollable text="Notice Content" />

<!-- Disable scroll when text is long -->
<NoticeBar
  scrollable
  text="Technology is the common soul of the people who developed it."
/>
```

### Wrapable

```html
<NoticeBar wrapable scrollable={false}">
  Notice Content
</NoticeBar>
```

### Mode

```html
<NoticeBar mode="closeable">
  Notice Content
</NoticeBar>

<NoticeBar mode="link">
  Notice Content
</NoticeBar>
```

### Custom Style

```html
<NoticeBar color="#1989fa" background="#ecf9ff" leftIcon="info-o">
  Notice Content
</NoticeBar>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| mode | Mode, can be set to `closeable` `link` | _string_ | `''` |
| text | Notice text content | _string_ | `''` | - |
| color | Text color | _string_ | `#f60` |
| background | Background color | _string_ | `#fff7cc` |
| leftIcon | Left Icon | _string_ | - |
| delay | Animation delay (s) | _number_ | `1` |
| speed | Scroll speed (px/s) | _number_ | `50` |
| scrollable | Whether to scroll content | _boolean_ | - |
| wrapable | Whether to enable text wrap | _boolean_ | `false` | - |

### Events

| Event           | Description                    | Arguments      |
| --------------- | ------------------------------ | -------------- |
| onClick           | Triggered when click NoticeBar | _event: React.MouseEvent__ |
| onClose           | Triggered when closed          | _event: React.MouseEvent__ |
| onReplay     | Triggered when replay          | -              |
