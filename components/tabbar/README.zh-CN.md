# Tabbar 标签栏

### 引入

```js
import { Tabbar, TabbarItem } from '@trillion/muld'
```

## 代码演示

### 基础用法

`active`默认绑定选中标签的索引值，通过修改`active`即可切换选中的标签

```html
<Tabbar active={0}>
  <TabbarItem icon="home-o">标签</TabbarItem>
  <TabbarItem icon="search">标签</TabbarItem>
  <TabbarItem icon="friends-o">标签</TabbarItem>
  <TabbarItem icon="setting-o">标签</TabbarItem>
</Tabbar>
```

### 通过名称匹配

在标签指定`name`属性的情况下，`active`的值为当前标签的`name`

```html
<Tabbar active="home">
  <TabbarItem name="home" icon="home-o">标签</TabbarItem>
  <TabbarItem name="search" icon="search">标签</TabbarItem>
  <TabbarItem name="friends" icon="friends-o">标签</TabbarItem>
  <TabbarItem name="setting" icon="setting-o">标签</TabbarItem>
</Tabbar>
```

### 徽标提示

设置`dot`属性后，会在图标右上角展示一个小红点。设置`badge`属性后，会在图标右上角展示相应的徽标

```html
<Tabbar avtive={0}>
  <TabbarItem icon="home-o">标签</TabbarItem>
  <TabbarItem icon="search" dot>标签</TabbarItem>
  <TabbarItem icon="friends-o" badge="5">标签</TabbarItem>
  <TabbarItem icon="setting-o" badge="20">标签</TabbarItem>
</Tabbar>
```

### 自定义图标

通过 icon 自定义图标，

```html
<Tabbar active={active} onChange={onChange}>
  <TabbarItem icon={
      <React.Fragment>
          <img src={img ? icon.active: icon.inactive}/>
      </React.Fragment>
  } 
  badge="3">
    <span>自定义</span>
  </TabbarItem>
  <TabbarItem icon="search">标签</TabbarItem>
  <TabbarItem icon="setting-o">标签</TabbarItem>
</Tabbar>
```

```js
const active = 0;
const icon = {
    active: 'https://img.yzcdn.cn/vant/user-active.png',
    inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
}
const [img, setImage] = React.useState<boolean>(true);
const onChange = (index: number | string) => {
    setImage(index === 0);
}
```

### 自定义颜色

```html
<Tabbar active={active} activeColor="#07c160" inactiveColor="#000">
  <TabbarItem icon="home-o">标签</TabbarItem>
  <TabbarItem icon="search">标签</TabbarItem>
  <TabbarItem icon="friends-o">标签</TabbarItem>
  <TabbarItem icon="setting-o">标签</TabbarItem>
</Tabbar>
```

### 监听切换事件

```html
<Tabbar active={active} onChange={onChange}>
  <TabbarItem icon="home-o">标签1</TabbarItem>
  <TabbarItem icon="search">标签2</TabbarItem>
  <TabbarItem icon="friends-o">标签3</TabbarItem>
  <TabbarItem icon="setting-o">标签4</TabbarItem>
</Tabbar>
```

```js
const onChange = (index: number | string) => {
    if (typeof index !== 'string') {
        alert(`你切换到了标签${index + 1}`)
    }
}
```
## API

### Tabbar Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| active | 当前选中标签的名称或索引值 | _number \| string_ | `0` |
| fixed | 是否固定在底部 | _boolean_ | `true` |
| border | 是否显示外边框 | _boolean_ | `true` |
| zIndex | 元素 z-index | _number \| string_ | `1` |
| activeColor | 选中标签的颜色 | _string_ | `#1989fa` |
| inactiveColor | 未选中标签的颜色 | _string_ | `#7d7e80` |
| placeholder | 固定在底部时，是否在标签位置生成一个等高的占位元素 | _boolean_ | `false` |
| safeAreaInsetBottom | 是否开启[底部安全区适配](#/zh-CN/quickstart#di-bu-an-quan-qu-gua-pei)，设置 fixed 时默认开启 | _boolean_ | `false` |

### Tabbar Events

| 事件名 | 说明           | 回调参数                           |
| ------ | -------------- | ---------------------------------- |
| onChange | 切换标签时触发 | active: 当前选中标签的名称或索引值 |

### TabbarItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 标签名称，作为匹配的标识符 | _number \| string_ | 当前标签的索引值 |
| icon | [图标名称](#/zh-CN/icon)或图片链接 | _string_ \| _ReactElement_ | - |
| iconPrefix | 图标类名前缀，同 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props) | _string_ | `mul-icon` |
| dot | 是否显示图标右上角小红点 | _boolean_ | `false` |
| badge | 图标右上角徽标的内容 | _number \| string_ | - |
