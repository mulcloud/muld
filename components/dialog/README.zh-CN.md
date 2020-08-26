# Dialog 弹出框

### 介绍

弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。


### 组件调用

通过组件调用 Dialog 时，可以通过下面的方式进行注册：

```js
import { Dialog } from '@trillion/muld';

```

## 代码演示

### 消息提示

用于提示一些消息，只包含一个确认按钮。

```html
<Dialog visible={boolean} title="标题" showConfirmButton>
  代码是写出来给人看的，附带能在机器上运行
</Dialog>

<Dialog visible={boolean} showConfirmButton>
  代码是写出来给人看的，附带能在机器上运行
</Dialog>
```

### 消息确认

用于确认消息，包含取消和确认按钮。

```html
<Dialog visible={boolean} title="标题" showCancelButton showConfirmButton>
  代码是写出来给人看的，附带能在机器上运行
</Dialog>
```

### 组件调用

如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。

```html
<Dialog visible={boolean} title="标题" showCancelButton showConfirmButton>
  代码是写出来给人看的，附带能在机器上运行
</Dialog>
```


## API

### Props

通过组件调用 `Dialog` 时，支持以下 Props：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否显示弹窗 | _boolean_ | - |
| title | 标题 | _string_ | - |
| width | 弹窗宽度，默认单位为`px` | _number \| string_ | `20rem` |
| messageAlign | 内容对齐方式，可选值为`left` `right` | _string_ | `center` |
| showConfirmButton | 是否展示确认按钮 | _boolean_ | `true` |
| showCancelButton | 是否展示取消按钮 | _boolean_ | `false` |
| confirmButtonText | 确认按钮文案 | _string_ | `确认` |
| confirmButtonColor | 确认按钮颜色 | _string_ | `#1989fa` |
| cancelButtonText | 取消按钮文案 | _string_ | `取消` |
| cancelButtonColor | 取消按钮颜色 | _string_ | `black` |
| overlay | 是否展示遮罩层 | _boolean_ | `true` |
| overlayClass | 自定义遮罩层类名 | _string_ | - |
| overlayStyle | 自定义遮罩层样式 | _object_ | - |
| closeOnClickOverlay | 是否在点击遮罩层后关闭弹窗 | _boolean_ | `false` |
| lockScroll | 是否锁定背景滚动 | _boolean_ | `true` |
| getContainer | 指定挂载的节点 | _string \| Element \| () => Element_ | `body` |

### Events

通过组件调用 `Dialog` 时，支持以下事件：

| 事件    | 说明                     | 回调参数 |
| ------- | ------------------------ | -------- |
| onConfirm | 点击确认按钮时触发       | -        |
| onCancel  | 点击取消按钮时触发       | -        |

