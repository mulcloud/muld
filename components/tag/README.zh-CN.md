# Tag 标记

### 引入

```js
import { Tag } from '@trillion/muld';
```

## 代码演示

### 基础用法

通过 `type` 属性控制标签颜色。

```html
<Tag type="primary">标签</Tag>
<Tag type="success">标签</Tag>
<Tag type="danger">标签</Tag>
<Tag type="warning">标签</Tag>
```

### 圆角样式

通过 `round` 设置为圆角样式。

```html
<Tag round type="primary">标签</Tag>
<Tag round type="success">标签</Tag>
<Tag round type="danger">标签</Tag>
<Tag round type="warning">标签</Tag>
```

### 标记样式

通过 `mark` 设置为标记样式(半圆角)。

```html
<Tag mark type="primary">标签</Tag>
<Tag mark type="success">标签</Tag>
<Tag mark type="danger">标签</Tag>
<Tag mark type="warning">标签</Tag>
```

### 空心样式

设置 `plain` 属性设置为空心样式。

```html
<Tag plain type="primary">标签</Tag>
<Tag plain type="success">标签</Tag>
<Tag plain type="danger">标签</Tag>
<Tag plain type="warning">标签</Tag>
```

### 自定义颜色

```html
<Tag color="#f2826a">标签</Tag>
<Tag color="#7232dd">标签</Tag>
<Tag color="#7232dd" plain>标签</Tag>
<Tag color="#ffe1e1" text-color="#ad0000">标签</Tag>
```

### 标签大小

```html
<Tag type="danger">标签</Tag>
<Tag type="danger" size="medium">标签</Tag>
<Tag type="danger" size="large">标签</Tag>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型，可选值为`primary` `success` `danger` `warning` | _string_ | `default` |
| size | 大小, 可选值为`large` `medium` | _string_ | - |
| color | 标签颜色 | _string_ | - |
| plain | 是否为空心样式 | _boolean_ | `false` |
| round | 是否为圆角样式 | _boolean_ | `false` |
| mark | 是否为标记样式 | _boolean_ | `false` |
| text-color | 文本颜色，优先级高于`color`属性 | _string_ | `white` |
| closeable `v2.2.9` | 是否为可关闭标签 | _boolean_ | `false` |

### Slots

| 名称    | 说明         |
| ------- | ------------ |
| default | 标签显示内容 |

### Events

| 事件名 | 说明           | 回调参数       |
| ------ | -------------- | -------------- |
| click  | 点击时触发     | _event: Event_ |
| close  | 关闭标签时触发 | -              |
