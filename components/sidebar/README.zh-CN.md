# Sidebar 侧边导航

### 引入

```js
import { Sidebar, SidebarItem } from '@trillion/muld';
```

## 代码演示

### 基础用法

通过`activeKey`指定当前选中项的索引

```html
 <Sidebar activeKey={0}>
    <SidebarItem title="标签名" />
    <SidebarItem title="标签名" />
    <SidebarItem title="标签名" />
</Sidebar>
```

### 徽标提示

设置`dot`属性后，会在右上角展示一个小红点。设置`badge`属性后，会在右上角展示相应的徽标

```html
<Sidebar activeKey={0}>
    <SidebarItem title="标签名" dot />
    <SidebarItem title="标签名" badge="5" />
    <SidebarItem title="标签名" badge="99+" />
</Sidebar>
```

### 禁用选项

通过`disabled`属性禁用选项

```html
<Sidebar activeKey={0}>
    <SidebarItem title="标签名" />
    <SidebarItem title="标签名" disabled />
    <SidebarItem title="标签名" />
</Sidebar>
```

### 监听切换事件

设置`onChange`方法来监听切换导航项时的事件

```jsx
function SidebarWithChange() {
  const onChange = (i: number) => {
      alert(`你切换到了 标签名${i+1}`);
    };
  return (
    <Sidebar activeKey={0} onChange={onChange}>
      <SidebarItem title="标签名1" />
      <SidebarItem title="标签名2" />
      <SidebarItem title="标签名3" />
    </Sidebar>
  );
}
```

## API

### Sidebar Props

| 参数             | 说明             | 类型               | 默认值 |
| ---------------- | ---------------- | ------------------ | ------ |
| activeKey | 当前导航项的索引 | _number \| string_ | `0`    |

### Sidebar Events

| 事件名 | 说明             | 回调参数                |
| ------ | ---------------- | ----------------------- |
| onChange | 切换导航项时触发 | index: 当前导航项的索引 |

### SidebarItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 内容 | _string_ | `''` |
| dot  | 是否显示右上角小红点 | _boolean_ | `false` |
| badge | 图标右上角徽标的内容 | _number \| string_ | - |
| disabled | 是否禁用该项 | _boolean_ | `false` |

### SidebarItem Events

| 事件名 | 说明       | 回调参数                |
| ------ | ---------- | ----------------------- |
| onClick  | 点击时触发 | index: 当前导航项的索引 |
