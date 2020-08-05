# Overlay 遮罩层

### 介绍

创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作

### 引入

```js
import { Overlay } from '@trillion/muld';
```

## 代码演示

### 基础用法

```html
<Button type="primary" text="显示遮罩层" onClick={() => setState(true)} />
<Overlay show={show} onClick={() => setState(true)} />
 />
```

```js
const [show, setState] = React.useState(false);
```

### 嵌入内容

通过默认插槽可以在遮罩层上嵌入任意内容

```html
<Overlay show={show} onClick={() => setState(true)}>
  <div class="wrapper">
    <div class="block" />
  </div>
</Overlay>

<style>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: #fff;
  }
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否展示遮罩层 | _boolean_ | `false` |
| zIndex | z-index 层级 | _number \| string_ | `1` |
| duration | 动画时长，单位毫秒 | _number \| string_ | `300` |
| className | 自定义类名 | _string_ | - |
| customStyle `v2.2.5` | 自定义样式 | _object_ | - |
| lockScroll `v2.6.2` | 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动 | _boolean_ | `true` |

### Events

| 事件名 | 说明       | 回调参数       |
| ------ | ---------- | -------------- |
| click  | 点击时触发 | _event: Event_ |

