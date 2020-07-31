# NoticeBar

### Install

```js;
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
  scrollable="false"
  text="Technology is the common soul of the people who developed it."
/>
```

### Wrapable

```html
<NoticeBar wrapable scrollable="false">
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
<NoticeBar color="#1989fa" background="#ecf9ff" left-icon="info-o">
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
| left-icon | Left Icon | _string_ | - |
| delay | Animation delay (s) | _number \| string_ | `1` |
| speed | Scroll speed (px/s) | _number \| string_ | `50` |
| scrollable | Whether to scroll content | _boolean_ | - |
| wrapable | Whether to enable text wrap | _boolean_ | `false` | - |

### Events

| Event           | Description                    | Arguments      |
| --------------- | ------------------------------ | -------------- |
| click           | Triggered when click NoticeBar | _event: Event_ |
| close           | Triggered when closed          | _event: Event_ |
| replay `v2.6.2` | Triggered when replay          | -              |

### Slots

| Name       | Description         |
| ---------- | ------------------- |
| default    | Notice text content |
| left-icon  | Custom left icon    |
| right-icon | Custom right icon   |
