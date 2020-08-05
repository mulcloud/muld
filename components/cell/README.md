# Cell

### Install

```js
import { Cell, CellGroup } from '@trillion/muld';
```

## Usage

### Basic Usage

```html
<CellGroup>
  <Cell title="Cell title" value="Content" />
  <Cell title="Cell title" value="Content" label="Description" />
</CellGroup>
```

### Size

```html
<CellGroup>
  <Cell title="Cell title" value="Content" size="large" />
  <Cell
    title="Cell title"
    value="Content"
    size="large"
    label="Description"
  />
</CellGroup>
```

### Left Icon

```html
<CellGroup>
  <Cell title="Cell title" icon="location-o" />
</CellGroup>
```

### Value only

```html
<CellGroup>
  <Cell value="Content" />
</CellGroup>
```

### Link

```html
<CellGroup>
  <Cell title="Cell title" is-link />
  <Cell title="Cell title" is-link value="Content" />
  <Cell title="Cell title" is-link arrow-direction="down" value="Content" />
</CellGroup>
```

### Group Title

```html
<CellGroup title="Group 1">
  <Cell title="Cell title" value="Content" />
</CellGroup>
<CellGroup title="Group 2">
  <Cell title="Cell title" value="Content" />
</CellGroup>
```

### Use Slots

```html
<!-- Use the title slot to customize the title -->
<Cell value="内容" is-link title={
  <React.Fragment>
    <span className="custom-title">单元格</span>
    <Tag type="danger">标签</Tag>
  </React.Fragment>}>
</Cell>

<!-- Use the right-icon slot to customize the right icon -->
<Cell title="单元格" icon="shop-o" rightIcon={<Icon name="search" className="search-icon" />}>
</Cell>

<style>
  .custom-title {
    margin-right: 4px;
    vertical-align: middle;
  }

  .search-icon {
    font-size: 16px;
    line-height: inherit;
  }
</style>
```

### Vertical Center

```html
<Cell center title="Cell title" value="Content" label="Description" />
```

## API

### CellGroup Props

| Attribute | Description                  | Type      | Default |
| --------- | ---------------------------- | --------- | ------- |
| title     | Group title                  | _string_  | -       |
| border    | Whether to show outer border | _boolean_ | `true`  |

### Cell Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title | _number \| string_ | - |
| value | Right text | _number \| string_ | - |
| label | Description below the title | _string_ | - |
| size | Size，can be set to `large` | _string_ | - |
| icon | Left Icon | _string_ | - |
| iconPrefix | Icon className prefix | _string_ | `mul-icon` |
| border | Whether to show inner border | _boolean_ | `true` |
| center | Whether to center content vertically | _boolean_ | `true` |
| replace | If true, the navigation will not leave a history record | _boolean_ | `false` |
| clickable | Whether to show click feedback when clicked | _boolean_ | `false` |
| isLink | Whether to show link icon | _boolean_ | `false` |
| required | Whether to show required mark | _boolean_ | `false` |
| arrowDirection | Can be set to `left` `up` `down` | _string_ | `right` |
| titleStyle | Title style | _any_ | - |
| titleClass | Title className | _any_ | - |
| valueClass | Value className | _any_ | - |
| labelClass | Label className | _any_ | - |
| rightIcon | Custom right icon | _React.ReactNode_ | - |
| extra      | Custom extra content on the right | _React.ReactNode_ | - |

### Cell Events

| Event | Description               | Arguments      |
| ----- | ------------------------- | -------------- |
| onClick | Triggered when click cell | _event: Event_ |
