# Divider 分割线

### 引入

```js
import { Divider } from '@trillion/muld';
```

## 代码演示

### 基础用法

默认渲染一条水平分割线

```html
<Divider />
```

### 展示文字

通过插槽在可以分割线中间插入内容

```html
<Divider>文字</Divider>
```

### 内容位置

通过`contentPosition`指定内容所在位置

```html
<Divider contentPosition="left">文字</Divider>
<Divider contentPosition="right">文字</Divider>
```

### 虚线

添加`dashed`属性使分割线渲染为虚线

```html
<Divider dashed>文字</Divider>
```

### 自定义样式

可以直接通过`style`属性设置分割线的样式

```html
<Divider
  style={{ color: '#1989fa', borderColor: '#1989fa', padding: '16px' }}
>
  文字
</Divider>
```

## API

### Props

| 参数             | 说明                             | 类型      | 默认值   |
| ---------------- | -------------------------------- | --------- | -------- |
| dashed           | 是否使用虚线                     | _boolean_ | `false`  |
| hairline         | 是否使用 0.5px 线                | _boolean_ | `true`   |
| contentPosition | 内容位置，可选值为`left` `right` | _string_  | `center` |

### Slots

| 名称    | 说明 |
| ------- | ---- |
| default | 内容 |
