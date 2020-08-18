# Popup

### Install

```js
import { Popup } from '@trillion/muld';
```

## Usage

### Basic Usage

```js

function PopupDemo() {
    const [show, setPopupState] = React.useState(false);
    return (
      <Cell is-link onClick={()=>{setPopupState(true)}}>展示弹出层</Cell>
      <Popup visible={show}>内容</Popup>
    )
}

```

### Position

Use `position` prop to set popup display position

```html
<Popup visible={show} position="top" style={{ height: '30%' }} />
```

### Close Icon

```html
<Popup
  visible={show}
  closeable
  position="bottom"
  style={{ height: '30%' }}
/>
<!-- Custom Icon -->
<Popup
  visible={show}
  closeable
  closeIcon="close"
  position="bottom"
  style={{ height: '30%' }}
/>
<!-- Icon Position -->
<Popup
  visible={show}
  closeable
  closeIconPosition="top-left"
  position="bottom"
  style={{ height: '30%' }}
/>
```

### Round Corner

```html
<Popup visible={show} round position="bottom" style={{ height: '30%' }} />
```

### Get Container

Use `getContainer` prop to specify mount location

```html
<!-- mount to body -->
<Popup visible={show} getContainer="body" />

<!-- mount to #app -->
<Popup visible={show} getContainer="#app" />

<!-- Specify the mount location by function -->
<Popup visible={show} getContainer={getContainer} />
```

```js
  // 返回一个特定的 DOM 节点，作为挂载的父节点
  const getContainer = ()=> {
      return document.querySelector('.my-container');
  };
```

> Tips: The get-container prop cannot be used on the root node

## API

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否显示弹出层 | _boolean_ | `false` |
| overlay | 是否显示遮罩层 | _boolean_ | `true` |
| position | 弹出位置，可选值为 `top` `bottom` `right` `left` | _string_ | `center` |
| overlayClass | 自定义遮罩层类名 | _string_ | - |
| overlayStyle | 自定义遮罩层样式 | _object_ | - |
| duration | 动画时长，单位秒 | _number \| string_ | `0.3` |
| round | 是否显示圆角 | _boolean_ | `false` |
| lockScroll | 是否锁定背景滚动 | _boolean_ | `true` |
| closeOnPopstate(TODO)| 是否在页面回退时自动关闭 | _boolean_ | `true` |
| closeable | 是否显示关闭图标 | _boolean_ | `false` |
| closeIcon | 关闭图标名称或图片链接 | _string_ | `cross` |
| closeIconPosition | 关闭图标位置，可选值为`top-left`<br>`bottom-left` `bottom-right` | _string_ | `top-right` |
| transition | 动画类名 | _string_ | - 
| getContainer | 指定挂载的节点 | _string \| () => Element_ | - |
| safeAreaInsetBottom  | 是否开启[底部安全区适配](#/zh-CN/quickstart#di-bu-an-quan-qu-gua-pei) | _boolean_ | `false` |

### Events

| 事件名        | 说明                       | 回调参数       |
| ------------- | -------------------------- | -------------- |
| onClick         | 点击弹出层时触发           | _event: Event_ |
| onOpen          | 打开弹出层时触发           | -              |
| onClose         | 关闭弹出层时触发           | -              |
| onOpened        | 打开弹出层且动画结束后触发   | -              |
| onClosed        | 关闭弹出层且动画结束后触发   | -              |
| onCancel  | 点击遮罩层或者关闭按钮时触发  | -              |
