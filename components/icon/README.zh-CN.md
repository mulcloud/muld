# Icon 图标

### 介绍

基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过`icon`属性引用

### 引入

```js
import { Icon } from '@trillion/muld';

```

## 代码演示

### 基础用法

`Icon`的`name`属性支持传入图标名称或图片链接，所有可用的图标名称见右侧示例

```html
<Icon name="chat-o" />
<Icon name="https://avatar.chengfayun.com.cn/chengfayun-avatar/6ce849b003c18744b54d1a9913db75e9.png" />
```

### 徽标提示

设置`dot`属性后，会在图标右上角展示一个小红点。设置`badge`属性后，会在图标右上角展示相应的徽标

```html
<Icon name="chat-o" dot />
<Icon name="chat-o" badge="9" />
<Icon name="chat-o" badge="99+" />
```

### 图标颜色

`Icon`的`color`属性用来设置图标的颜色

```html
<Icon name="chat-o" color="#1989fa" />
<Icon name="chat-o" color="#07c160" />
```

### 图标大小

`Icon`的`size`属性用来设置图标的尺寸大小，默认单位为`px`

```html
<Icon name="chat-o" size="40" /> <Icon name="chat-o" size="3rem" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 图标名称或图片链接 | _string_ | - |
| dot | 是否显示图标右上角小红点 | _boolean_ | `false` |
| badge  | 图标右上角徽标的内容 | _number \| string_ | - |
| color | 图标颜色 | _string_ | `inherit` |
| size | 图标大小，如 `20px` `1.25em`，默认单位为`px` | _number \| string_ | `inherit` |
| class-prefix | 类名前缀，用于使用自定义图标 | _string_ | `mul-icon` |
| tag | HTML 标签 | _string_ | `i` |

### Events

| 事件名 | 说明           | 回调参数       |
| ------ | -------------- | -------------- |
| onClick  | 点击图标时触发 | _event: Event_ |
| onTouchStart | 开始触摸按钮时触发 | _event: TouchEvent_ |
