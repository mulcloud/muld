# Loading

### Install

```js
import { Loading } from '@trillion/muld';
```

## Usage

### Type

```html
<Loading /> <Loading type="spinner" />
```

### Color

```html
<Loading color="#1989fa" /> <Loading type="spinner" color="#1989fa" />
```

### Size

```html
<Loading size="24" /> <Loading type="spinner" size="1.5rem" />
```

### Text

```html
<Loading size="1.5rem">Loading...</Loading>
```

### Vertical

```html
<Loading size="1.5rem" vertical>Loading...</Loading>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| color | Loading color | _string_ | `#c9c9c9` |
| type | Can be set to `spinner` | _string_ | `circular` |
| size | Icon size | _number \| string_ | `1.875rem` |
| text-size | Text font size | _number \| string_ | `0.875rem` |
| vertical | Whether to arrange icons and text content vertically | _boolean_ | `false` |