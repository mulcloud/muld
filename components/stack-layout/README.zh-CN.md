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
| alignX | x轴方向的对齐方式 | _string_ | `left` |
| alignY | y轴方向的对齐方式 | _string_ | `center` |
| tag | 自定义元素标签 | _string_ | `div` |
| spacing | 子元素间隔 | _boolean \| number_ | - |
| pading | 填充间距 | _boolean \| number_ | - |
| frame | width、height | {width: number, height: number} | - |
| border | border | { color: string; width: number; cornerRadius?: number } | - |
| shadow | shadow | { color: string; radius: number; x: number; y: number } | - |



### VStack Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| alignX | x轴方向的对齐方式 | _string_ | `left` |
| alignY | y轴方向的对齐方式 | _string_ | `center` |
| tag | 自定义元素标签 | _string_ | `div` |
| spacing | 子元素间隔 | _boolean \| number_ | - |
| pading | 填充间距 | _boolean \| number_ | - |
| frame | width、height | {width: number, height: number} | - |
| border | border | { color: string; width: number; cornerRadius?: number } | - |
| shadow | shadow | { color: string; radius: number; x: number; y: number } | - |