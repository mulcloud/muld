# Skeleton

### Install

```js
import { Skeleton } from '@trillion/muld';
```

## Usage

### Basic Usage

```html
<Skeleton title row="3" />
```

### Show Avatar

```html
<Skeleton title avatar row="3" />
```

### Show Children

```js
const [show, setSkeletonState] = React.useState(false);
```

```html
<Switch value={show} onClick={()=>{setSkeletonState(true)}} />
<Skeleton title avatar row="3" loading={true}>
  <div>The actual content</div>
</Skeleton>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| row | Row count | _number \| string_ | `0` |
| rowWidth | Row width, can be array | _number \| string \|<br>(number \| string)[]_ | `100%` |
| title | Whether to show title placeholder | _boolean_ | `false` |
| avatar | Whether to show avatar placeholder | _boolean_ | `false` |
| loading | Whether to show skeleton，pass `false` to show child component | _boolean_ | `true` |
| animate | Whether to enable animation | _boolean_ | `true` |
| round  | Whether to show round title and row | _boolean_ | `false` |
| titleWidth | Title width | _number \| string_ | `40%` |
| avatarSize | Size of avatar placeholder | _number \| string_ | `2rem` |
| avatarShape | Shape of avatar placeholder，can be set to `square` | _string_ | `round` |
