# Sticky

### Install

```js
import { Sticky, Button, Box } from '@trillion/muld';

```

## Usage

### Basic Usage

```html
<Sticky>
    <Button type="primary">Basic Usage</Button>
</Sticky>
```

### Offset Top

```html
<Sticky offsetTop={50}>
    <Button type="info">Offset Top</Button>
</Sticky>
```

### Set Container

```js
const container = React.useRef(null);
```

```html
<div ref={container}>
    <Box height="9.375rem" backgroundColor="#fff">
        <Sticky container={container}>
            <Button type="warning" className="lg">
                Set Container
            </Button>
        </Sticky>
    </Box>
</div>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| offsetTop | Offset top, supports `px` `vw` `rem` unit, default `px` | _number \| string_ | `0` |
| zIndex | z-index when sticky | _number \| string_ | `99` |
| container | Container DOM | _Element_ | - |

### Events

| Event  | Description           | Arguments                      |
| ------ | --------------------- | ------------------------------ |
| onScroll | Triggered when scroll | object: { scrollTop, isFixed } |
