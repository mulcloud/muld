# Overlay

### Install

```js
import { Overlay } from '@trillion/muld';
```

## Usage

### Basic Usage

```html
<Button type="primary" text="显示遮罩层" onClick={() => setState(true)} />
<Overlay show={show} onClick={() => setState(true)} />
```

```js
const [show, setState] = React.useState(false);
```

### Embedded Content

```html
<Overlay show={show} onClick={() => setState(true)}>
  <div class="wrapper">
    <div class="block" />
  </div>
</Overlay>

<style>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 7.5rem;
    height: 7.5rem;
    background-color: #fff;
  }
</style>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| show | Whether to show overlay | _boolean_ | `false` |
| zIndex | z-index | _number \| string_ | `1` |
| duration | Animation duration | _number \| string_ | `0.3` |
| className | ClassName | _string_ | - |
| customStyle | Custom style | _object_ | - |
| lockScroll | Whether to lock background scroll | _boolean_ | `true` |

### Events

| Event | Description            | Arguments      |
| ----- | ---------------------- | -------------- |
| onClick | Triggered when clicked | _event: Event_ |

