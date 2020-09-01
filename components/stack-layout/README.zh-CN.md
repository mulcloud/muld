# Stack Layout

### 介绍

using SwiftUI-like API. HStack 主要用于水平排列元素，VStack 主要用于垂直排列元素。

### 引入

```js
import { HStack, Spacer, VStack } from '@trillion/muld';
```

## 代码演示

### HStack 基础用法

支持x轴方向的`left`、`center`、`right` 元素排列，默认为 `left`，可以通过`spacing`来设置 child 元素之间的间距 

```html
<HStack padding={10} spacing>
    <div className="swift-block">react</div>
    <div className="swift-block">vue</div>
    <div className="swift-block">angular</div>
</HStack>

<HStack alignX="center" spacing={5}>
    <div className="swift-block">react</div>
    <div className="swift-block">vue</div>
    <div className="swift-block">angular</div>
</HStack>

<HStack alignX="right" spacing={10}>
    <div className="swift-block">react</div>
    <div className="swift-block">vue</div>
    <div className="swift-block">angular</div>
</HStack>
```

### HStack 垂直居中

支持y轴方向的`top`、`center`、`bottom` 元素排列

```html
<HStack alignX="center" alignY="center" spacing={10}>
    <div className="swift-block">react</div>
    <div className="swift-block">vue</div>
    <div className="swift-block">angular</div>
</HStack>
```

### VStack 基础用法

支持y轴方向的`top`、`center`、`bottom` 元素排列，默认为 `top`，可以通过`spacing`来设置 child 元素之间的间距 

```html
<VStack padding={20}>
    <div className="swift-block">react</div>
</VStack>

<VStack padding={20} spacing={10} alignY="center">
    <div className="swift-block">react</div>
    <div className="swift-block">vue</div>
</VStack>

<VStack alignX="center" alignY="center">
    <div className="swift-block">react</div>
</VStack>

<VStack alignX="center" alignY="bottom">
    <div className="swift-block">react</div>
</VStack>
```

### Spacer

```html
<HStack>
    <div className="swift-block">react</div>
    <Spacer></Spacer>
    <div className="swift-block">vue</div>
</HStack>
```

## API

### HStack Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| tag | 自定义元素标签 | _string_ | `div` |
| alignX | x轴方向的对齐方式 | _string_ | `left` |
| alignY | y轴方向的对齐方式 | _string_ | `center` |
| spacing | 子元素间隔 | _boolean \| number \| string_ | - |
| padding | 容器填充间距 | _boolean \| number \| string_ | - |
| frame | 容器宽高 | _object_ | - |
| border | border | _object_ | - |
| shadow | shadow | _object_ | - |


### VStack Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| tag | 自定义元素标签 | _string_ | `div` |
| alignX | x轴方向的对齐方式 | _string_ | `left` |
| alignY | y轴方向的对齐方式 | _string_ | `center` |
| spacing | 子元素间隔 | _boolean \| number \| string_ | - |
| padding | 容器填充间距 | _boolean \| number \| string_ | - |
| frame | 容器宽高 | _object_ | - |
| border | border | _object_ | - |
| shadow | shadow | _object_ | - |

### frame

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 容器宽度 | _number_ | - |
| height | 容器高度 | _number_ | - |

### border

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 边框的颜色 | _string_ | - |
| width | 边框的宽度 | _number_ | - |
| radius | 圆角边框 | _number_ | - |

### shadow

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| x | 水平阴影的位置 | _string_ | - |
| y | 垂直阴影的位置 | _number_ | - |
| blur | 模糊距离 | _number_ | - |
| color | 阴影的颜色 | _number_ | - |