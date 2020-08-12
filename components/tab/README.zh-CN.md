# Tab 标签页

### 引入

```js
import { Tabs, Tab } from '@trillion/muld';

```

## 代码演示

### 基础用法

通过 `active` 绑定当前激活标签对应的索引值，默认情况下启用第一个标签。

```html
<Tabs active={2}>
    <Tab title="标签 1">内容 1</Tab>
    <Tab title="标签 2">内容 2</Tab>
    <Tab title="标签 3">内容 3</Tab>
    <Tab title="标签 4">内容 4</Tab>
</Tabs>
```

### 通过名称匹配

在标签指定 `name` 属性的情况下，`active` 的值为当前标签的 `name`（此时无法通过索引值来匹配标签）。

```html
<Tabs active="a">
  <Tab title="标签 1" name="a">内容 1</Tab>
  <Tab title="标签 2" name="b">内容 2</Tab>
  <Tab title="标签 3" name="c">内容 3</Tab>
</Tabs>
```

### 禁用标签

设置 `disabled` 属性即可禁用标签，如果需要监听禁用标签的点击事件，可以在 `Tabs` 上监听`onDisabled` 事件。
```js
const onClickDisabled = (name: number| string, title: string): void => {
    console.log('click disabled'. name, title);
}
```
```html
<Tabs @onDisabled={onClickDisabled}>
    <Tab title="标签 1">内容 1</Tab>
    <Tab disabled title="标签 2">内容 2</Tab>
    <Tab title="标签 3">内容 3</Tab>
</Tabs>
```

### 样式风格

`Tab` 支持两种样式风格：`line` 和`card`，默认为 `line` 样式，可以通过 `type` 属性切换样式风格。

```html
<Tabs type="card">
  <Tab title="标签 1">内容 1</Tab>
  <Tab title="标签 2">内容 2</Tab>
  <Tab title="标签 3">内容 3</Tab>
</Tabs>
```

### 点击事件

可以在 `Tab` 上绑定 `onClick` 事件，事件传参为标签对应的标识符和标题。
```js
const onClick = (name: number | string, title: string): void => {
    console.log(name, title)
}
```

```html
<Tabs onClick={onClick}>
    <Tab title="标签 1">内容 1</Tab>
    <Tab title="标签 2">内容 2</Tab>
</Tabs>
```

### 粘性布局

通过 `sticky` 属性可以开启粘性布局，粘性布局下，标签页滚动到顶部时会自动吸顶。

```js
const genChildren = (num: number): Array<React.ReactElement> => {
    const result: Array<React.ReactElement> = [];
    for (let i = 1; i < num + 1; i++) {
        result.push(
            <Tab key={i} title={`标签 ${i}`}>
                内容 {i}
            </Tab>,
        );
    }
    return result;
};
```

```html
<Tabs sticky>
  {genChildren(3)}
</Tabs>
```

### 自定义标签

通过 `title` 可以自定义标签内容。

```html
<Tabs>
    <Tab title={<Icon name="like-o" />}>内容1</Tab>
    <Tab title={<Icon name="friends-o" />}>内容2</Tab>
</Tabs>
```

### 切换动画

通过 `animated` 属性可以开启切换标签内容时的转场动画。

```html
<Tabs animated>
    <Tab title="标签 1">内容 1</Tab>
    <Tab title="标签 2">内容 2</Tab>
    <Tab title="标签 3">内容 3</Tab>
</Tabs>
```

### 滑动切换

通过 `swipeable` 属性可以开启滑动切换标签页。

```html
<Tabs swipeable>
    <Tab title="标签 1">内容 1</Tab>
    <Tab title="标签 2">内容 2</Tab>
    <Tab title="标签 3">内容 3</Tab>
</Tabs>
```

### 滚动导航

通过 `scrollspy` 属性可以开启滚动导航模式，该模式下，内容将会平铺展示。

```js
const genChildren = (num: number): Array<React.ReactElement> => {
    const result: Array<React.ReactElement> = [];
    for (let i = 1; i < num + 1; i++) {
        result.push(
            <Tab key={i} title={`标签 ${i}`}>
                内容 {i}
            </Tab>,
        );
    }
    return result;
};
```

```html
<Tabs scrollspy sticky>
    {genChildren(10)}
</Tabs>
```

### 异步切换

通过 `onBeforeChange` 属性可以在切换标签前执行特定的逻辑。

```js
const onBeforeChange = (name: number | string): Promise<boolean> | boolean => {
    if (name === 1) {
        return false;
    }

    return new Promise((resolve) => {
        resolve(name !== 3);
    });
}

const genChildren = (num: number): Array<React.ReactElement> => {
    const result: Array<React.ReactElement> = [];
    for (let i = 1; i < num + 1; i++) {
        result.push(
            <Tab key={i} title={`标签 ${i}`}>
                内容 {i}
            </Tab>,
        );
    }
    return result;
};
```

```html
<Tabs onBeforeChange={onBeforeChange}>
    {genChildren(4)}
</Tabs>
```

## API

### Tabs Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| active | 绑定当前选中标签的标识符 | _number \| string_ | `0` |
| type | 样式风格类型，可选值为`card` | _string_ | `line` |
| color | 标签主题色 | _string_ | `#ee0a24` |
| background | 标签栏背景色 | _string_ | `white` |
| duration | 动画时间，单位秒 | _number \| string_ | `0.3` |
| lineWidth | 底部条宽度，默认单位`px` | _number \| string_ | `auto` |
| lineHeight | 底部条高度，默认单位`px` | _number \| string_ | `3px` |
| animated | 是否开启切换标签内容时的转场动画 | _boolean_ | `false` |
| border | 是否显示标签栏外边框，仅在`type="line"`时有效 | _boolean_ | `true` |
| ellipsis | 是否省略过长的标题文字 | _boolean_ | `true` |
| sticky | 是否使用粘性定位布局 | _boolean_ | `false` |
| swipeable | 是否开启手势滑动切换 | _boolean_ | `false` |
| lazyRender | 是否开启延迟渲染（首次切换到标签时才触发内容渲染） | _boolean_ | `true` |
| scrollspy | 是否开启滚动导航 | _boolean_ | `false` |
| offsetTop | 粘性定位布局下与顶部的最小距离，支持 `px` `vw` `rem` 单位，默认 `px` | _number \| string_ | `0` |
| swipeThreshold | 滚动阈值，标签数量超过阈值时开始横向滚动 | _number \| string_ | `4` |
| titleActiveColor | 标题选中态颜色 | _string_ | - |
| titleInactiveColor | 标题默认态颜色 | _string_ | - |
| navLeft  | 标题左侧内容 | _ReactNode \| string_ | - |
| navRight | 标题右侧内容 | _ReactNode \| string_ | - |
| onBeforeChange | 切换标签前的回调函数，返回 `false` 可阻止切换，支持返回 Promise | _(name) => boolean \| Promise_ | - |
| onClick | 点击标签时触发 | _(name, title) => void_ | - |
| onChange | 当前激活的标签改变时触发 | _(name, title) => void_ | - |
| onDisabled | 点击被禁用的标签时触发 | _(name, title) => void_ | - |
| onScroll | 滚动时触发，仅在 sticky 模式下生效 | _({scrollTop, isFixed}) => void_| - |

### Tab Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | _string_ | - |
| disabled | 是否禁用标签 | _boolean_ | `false` |
| dot | 是否在标题右上角显示小红点 | _boolean_ | `false` |
| badge | 图标右上角徽标的内容 | _number \| string_ | - |
| name | 标签名称，作为匹配的标识符 | _number \| string_ | 标签的索引值 |
| titleStyle | 自定义标题样式 | _any_ | - |

