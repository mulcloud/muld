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

### Router

```html
<CellGroup>
  <Cell title="URL" is-link url="/muld/mobile.html" />
  <Cell title="Router" is-link to="index" />
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
<Cell value="内容" is-link>
  <!-- Use the title slot to customize the title -->
  <template #title>
    <span class="custom-title">单元格</span>
    <Tag type="danger">标签</Tag>
  </template>
</Cell>

<Cell title="单元格" icon="shop-o">
  <!-- Use the right-icon slot to customize the right icon -->
  <template #right-icon>
    <Icon name="search" class="search-icon" />
  </template>
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
| icon-prefix `v2.5.3` | Icon className prefix | _string_ | `mul-icon` |
| border | Whether to show inner border | _boolean_ | `true` |
| center | Whether to center content vertically | _boolean_ | `true` |
| url | Link URL | _string_ | - |
| to | Target route of the link, same as to of react-router | _string \| object_ | - |
| replace | If true, the navigation will not leave a history record | _boolean_ | `false` |
| clickable | Whether to show click feedback when clicked | _boolean_ | `false` |
| is-link | Whether to show link icon | _boolean_ | `false` |
| required | Whether to show required mark | _boolean_ | `false` |
| arrow-direction | Can be set to `left` `up` `down` | _string_ | `right` |
| title-style | Title style | _any_ | - |
| title-class | Title className | _any_ | - |
| value-class | Value className | _any_ | - |
| label-class | Label className | _any_ | - |

### Cell Events

| Event | Description               | Arguments      |
| ----- | ------------------------- | -------------- |
| click | Triggered when click cell | _event: Event_ |

### CellGroup Slots

| Name    | Description  |
| ------- | ------------ |
| default | Default slot |
| title   | Custom title |

### Cell Slots

| Name       | Description                       |
| ---------- | --------------------------------- |
| default    | Custom value                      |
| icon       | Custom icon                       |
| title      | Custom title                      |
| label      | Custom label                      |
| right-icon | Custom right icon                 |
| extra      | Custom extra content on the right |
