# Swipe 轮播

### 引入

```js
import { Swipe, SwipeItem } from '@trillion/muld';
```

## 代码演示

### 基础用法

每个 SwipeItem 代表一张轮播卡片，可以通过 `autoplay` 属性设置自动轮播的间隔。

```html
<Swipe autoplay="3000">
  <SwipeItem>1</SwipeItem>
  <SwipeItem>2</SwipeItem>
  <SwipeItem>3</SwipeItem>
</Swipe>
```


### 监听 change 事件

```html
<Swipe onChange="onChange">
  <SwipeItem>1</SwipeItem>
  <SwipeItem>2</SwipeItem>
  <SwipeItem>3</SwipeItem>
  <SwipeItem>4</SwipeItem>
</Swipe>
```

### 纵向滚动

设置 `vertical` 属性后滑块会纵向排列，此时需要指定滑块容器的高度。

```html
<Swipe vertical>
  <SwipeItem>1</SwipeItem>
  <SwipeItem>2</SwipeItem>
  <SwipeItem>3</SwipeItem>
  <SwipeItem>4</SwipeItem>
</Swipe>
```

### 自定义指示器

通过 `indicator` 插槽可以自定义指示器的样式。

```html
<Swipe onChange="onChange" indicator={()=> {
  <div>
      {{ current + 1 }}/4
    </div>
}}>
  <SwipeItem>1</SwipeItem>
  <SwipeItem>2</SwipeItem>
  <SwipeItem>3</SwipeItem>
  <SwipeItem>4</SwipeItem>
</Swipe>
```

## API

### Swipe Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoplay | 自动轮播间隔，单位为 ms | _number \| string_ | - |
| duration | 动画时长，单位为 ms | _number \| string_ | `500` |
| initialSwipe | 初始位置索引值 | _number \| string_ | `0` |
| width | 滑块宽度，单位为`px` | _number \| string_ | `auto` |
| height | 滑块高度，单位为`px` | _number \| string_ | `auto` |
| loop | 是否开启循环播放 | _boolean_ | `true` |
| showIndicators | 是否显示指示器 | _boolean_ | `true` |
| vertical | 是否为纵向滚动 | _boolean_ | `false` |
| touchable | 是否可以通过手势滑动 | _boolean_ | `true` |
| stopPropagation | 是否阻止滑动事件冒泡 | _boolean_ | `true` |
| indicatorColor | 指示器颜色 | _string_ | `#1989fa` |
| indicator | 自定义指示器| _() => HTMLElement_ | - |

### Swipe Events

| 事件名 | 说明                 | 回调参数            |
| ------ | -------------------- | ------------------- |
| onChange | 每一页轮播结束后触发 | index, 当前页的索引 |

### SwipeItem Events

| 事件名 | 说明       | 回调参数       |
| ------ | ---------- | -------------- |
| onClick  | 点击时触发 | _event: Event_ |

### Swipe 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| prev | 切换到上一轮播 | - | - |
| next | 切换到下一轮播 | - | - |
| swipeTo | 切换到指定位置 | index: number | void |
| resize  | 外层元素大小变化后，可以调用此方法来触发重绘 | - | void |


## 常见问题

### 滑动轮播时为什么触发了 click 事件？

这种情况通常是由于项目中引入了`fastclick`库导致的。`fastclick`的原理是通过 Touch 事件模拟出 click 事件，而 Swipe 内部默认会阻止 touchmove 事件冒泡，干扰了 fastclick 的判断，导致出现这个问题。

将 Swipe 组件的 stop-propagation 属性设置为 false 即可避免该问题。