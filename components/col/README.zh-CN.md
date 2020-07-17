# Layout 布局

### 介绍

Layout 提供了`Row`和`Col`两个组件来进行行列布局

### 引入

```js
import { Col, Row } from 'muld';
```

## 代码演示

### 基础用法

Layout 组件提供了`24列栅格`，通过在`Col`上添加`span`属性设置列所占的宽度百分比  
此外，添加`offset`属性可以设置列的偏移宽度，计算方式与 span 相同

```html
<Row>
  <Col span="8">span: 8</Col>
  <Col span="8">span: 8</Col>
  <Col span="8">span: 8</Col>
</Row>

<Row>
  <Col span="4">span: 4</Col>
  <Col span="10" offset="4">offset: 4, span: 10</Col>
</Row>

<Row>
  <Col offset="12" span="12">offset: 12, span: 12</Col>
</Row>
```

### 设置列元素间距

通过`gutter`属性可以设置列元素之间的间距，默认间距为 0

```html
<Row gutter="20">
  <Col span="8">span: 8</Col>
  <Col span="8">span: 8</Col>
  <Col span="8">span: 8</Col>
</Row>
```

### Flex 布局

将 `type` 属性设置为 flex 可以启用 flex 布局，便于进行灵活的对齐

```html
<!-- 左对齐 -->
<Row type="flex">
  <Col span="6">span: 6</Col>
  <Col span="6">span: 6</Col>
  <Col span="6">span: 6</Col>
</Row>

<!-- 居中 -->
<Row type="flex" justify="center">
  <Col span="6">span: 6</Col>
  <Col span="6">span: 6</Col>
  <Col span="6">span: 6</Col>
</Row>

<!-- 右对齐 -->
<Row type="flex" justify="end">
  <Col span="6">span: 6</Col>
  <Col span="6">span: 6</Col>
  <Col span="6">span: 6</Col>
</Row>

<!-- 两端对齐 -->
<Row type="flex" justify="space-between">
  <Col span="6">span: 6</Col>
  <Col span="6">span: 6</Col>
  <Col span="6">span: 6</Col>
</Row>

<!-- 每个元素的两侧间隔相等 -->
<Row type="flex" justify="space-around">
  <Col span="6">span: 6</Col>
  <Col span="6">span: 6</Col>
  <Col span="6">span: 6</Col>
</Row>
```

## API

### Row Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 布局方式，可选值为`flex` | _string_ | - |
| gutter | 列元素之间的间距（单位为 px） | _number \| string_ | - |
| tag | 自定义元素标签 | _string_ | `div` |
| justify | Flex 主轴对齐方式，可选值为 `end` `center` <br> `space-around` `space-between` | _string_ | `start` |
| align | Flex 交叉轴对齐方式，可选值为 `center` `bottom` | _string_ | `top` |

### Col Props

| 参数   | 说明           | 类型               | 默认值 |
| ------ | -------------- | ------------------ | ------ |
| span   | 列元素宽度     | _number \| string_ | -      |
| offset | 列元素偏移距离 | _number \| string_ | -      |
| tag    | 自定义元素标签 | _string_           | `div`  |

### Row Events

| 事件名 | 说明       | 回调参数       |
| ------ | ---------- | -------------- |
| click  | 点击时触发 | _event: Event_ |

### Col Events

| 事件名 | 说明       | 回调参数       |
| ------ | ---------- | -------------- |
| click  | 点击时触发 | _event: Event_ |
