# Steps 步骤条

### 引入

```js
import { Step, Steps } from '@trillion/muld';
```

## 代码演示

### 基础用法

`active`属性表示当前步骤的索引，从 0 起计

```html
<Steps active={active}>
    <Step>买家下单</Step>
    <Step>商家接单</Step>
    <Step>买家提货</Step>
    <Step>交易完成</Step>
</Steps>
```

### 自定义样式

可以通过`activeIcon`和`activeColor`属性设置激活状态下的图标和颜色

```html
<Steps active={active} activeIcon="success" activeColor="#38f">
    <Step>买家下单</Step>
    <Step>商家接单</Step>
    <Step>买家提货</Step>
    <Step>交易完成</Step>
</Steps>
```

### 点击Step事件

点击步骤的标题或图标时触发 onClickStep

```html
<Steps
    active={active}
    onClickStep={(index) => {
        setActive(index);
    }}
>
    <Step>买家下单</Step>
    <Step>商家接单</Step>
    <Step>买家提货</Step>
    <Step>交易完成</Step>
</Steps>
```
### 竖向步骤条

可以通过设置`direction`属性来改变步骤条的显示方向

```html
<Steps direction="vertical" active="0">
    <Step>
        <h3>【城市】物流状态1</h3>
        <p>2016-07-12 12:40</p>
    </Step>
    <Step>
        <h3>【城市】物流状态2</h3>
        <p>2016-07-11 10:00</p>
    </Step>
    <Step>
        <h3>快件已发货</h3>
        <p>2016-07-10 09:30</p>
    </Step>
</Steps>
```

## API

### Steps Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| active | 当前步骤 | _number \| string_ | `0` |
| direction | 显示方向，可选值为 `vertical` | _string_ | `horizontal` |
| activeColor | 激活状态颜色 | _string_ | `#07c160` |
| inactiveColor | 未激活状态颜色 | _string_ | `#969799` |
| activeIcon | 激活状态底部图标，可选值见 [Icon 组件](#/zh-CN/icon) | _string_ | `checked` |
| inactiveIcon | 未激活状态底部图标，可选值见 [Icon 组件](#/zh-CN/icon) | _string_ | - |

### Step Slots

| 名称          | 说明                 |
| ------------- | -------------------- |
| activeIcon   | 自定义激活状态图标   |
| inactiveIcon | 自定义未激活状态图标 |

### Steps Events

| 事件名              | 说明                       | 回调参数        |
| ------------------- | -------------------------- | --------------- |
| onClickStep | 点击步骤的标题或图标时触发 | _index: number_ |
