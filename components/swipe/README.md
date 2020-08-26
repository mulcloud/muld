# Swipe

### Install

```js
import { Swipe, SwipeItem } from '@trillion/muld';
```

## Usage

### Basic Usage

Use `autoplay` prop to set autoplay interval.

```html
<Swipe autoplay="3000">
  <SwipeItem>1</SwipeItem>
  <SwipeItem>2</SwipeItem>
  <SwipeItem>3</SwipeItem>
</Swipe>
```

### Change Event

```html
<Swipe onChange="onChange">
  <SwipeItem>1</SwipeItem>
  <SwipeItem>2</SwipeItem>
  <SwipeItem>3</SwipeItem>
  <SwipeItem>4</SwipeItem>
</Swipe>
```

### Vertical Scrolling

```html
<Swipe vertical>
  <SwipeItem>1</SwipeItem>
  <SwipeItem>2</SwipeItem>
  <SwipeItem>3</SwipeItem>
  <SwipeItem>4</SwipeItem>
</Swipe>
```

### Custom Indicator

```html
<Swipe onChange="onChange" indicator={()=> (
  <div>
      {{ current + 1 }}/4
    </div>
)}>
  <SwipeItem>1</SwipeItem>
  <SwipeItem>2</SwipeItem>
  <SwipeItem>3</SwipeItem>
  <SwipeItem>4</SwipeItem>
</Swipe>
```

## API

### Swipe Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| autoplay | Autoplay interval (ms) | _number \| string_ | - |
| duration | Animation duration (ms) | _number \| string_ | `500` |
| initialSwipe | Index of initial swipe, start from 0 | _number \| string_ | `0` |
| width | Set Swiper Item Width | _number \| string_ | `0` |
| height | Set Swiper Item Height | _number \| string_ | `0` |
| loop | Whether to enable loop | _boolean_ | `true` |
| showIndicators | Whether to show indicators | _boolean_ | `true` |
| vertical | Whether to be vertical Scrolling | _boolean_ | `false` |
| touchable | Whether to allow swipe by touch gesture | _boolean_ | `true` |
| stopPropagation | Whether to stop touchmove event propagation | _boolean_ | `false` |
| indicatorColor | Indicator color | _string_ | `#1989fa` |
| indicator | Custom indicator | _() => HTMLElement_ | - |

### Swipe Events

| Event  | Description                         | Arguments                     |
| ------ | ----------------------------------- | ----------------------------- |
| onChange | Triggered when current swipe change | index: index of current swipe |

### SwipeItem Events

| Event | Description            | Arguments      |
| ----- | ---------------------- | -------------- |
| onClick | Triggered when clicked | _event: Event_ |

### Swipe Methods

| Name | Description | Attribute | Return value |
| --- | --- | --- | --- |
| prev  | Swipe to prev item | - | - |
| next  | Swipe to next item | - | - |
| swipeTo | Swipe to target index | index: target index, options: Options | void |
| resize  | Resize Swipe when container element resized | - | void |
