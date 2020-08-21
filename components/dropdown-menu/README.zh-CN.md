# DropdownMenu 下拉菜单

### 引入

```js
import { DropdownMenu, DropdownItem } from '@trillion/muld';
```

## 代码演示

### 基础用法

```html
<DropdownMenu>
    <DropdownItem value={0} options={option1} />
    <DropdownItem value="a" options={option2} />
</DropdownMenu>
```

```js
const option1 = [
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 },
];
const option2 = [
    { text: '默认排序', value: 'a' },
    { text: '好评排序', value: 'b' },
    { text: '销量排序', value: 'c' },
];
```

### 自定义菜单内容

通过插槽可以自定义`DropdownItem`的内容，此时需要使用实例上的`visible`属性与`onVisibleChange`方法配合去控制菜单的显示

```jsx
function CustomContent() {
    const [visible, setVisible] = React.useState<boolean>(false);
    const option = [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 },
    ];
    function onConfirm() {
        setVisible(false);
    }
    function onVisibleChange(v: boolean) {
        setVisible(v);
    }
    return (
        <DropdownMenu>
            <DropdownItem value={0} options={option} />
            <DropdownItem title="自定义" visible={visible} onVisibleChange={onVisibleChange}>
                <div style={{ margin: 30, textAlign: 'center' }}>自定义内容</div>
                <div style={{ padding: '20px' }}>
                    <Button type="danger" block round onClick={onConfirm}>
                        确认
                    </Button>
                </div>
            </DropdownItem>
        </DropdownMenu>
    )
}
```

### 自定义选中态颜色

通过`activeColor`属性可以自定义菜单标题和选项的选中态颜色

```html
<DropdownMenu activeColor="#ee0a24">
    <DropdownItem value={0} options={option1} />
    <DropdownItem value="a" options={option2} />
</DropdownMenu>
```

```js
const option1 = [
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 },
];
const option2 = [
    { text: '默认排序', value: 'a' },
    { text: '好评排序', value: 'b' },
    { text: '销量排序', value: 'c' },
];
```

### 向上展开

将`direction`属性值设置为`up`，菜单即可向上展开

```html
<DropdownMenu direction="up">
    <DropdownItem value={0} options={option1} />
    <DropdownItem value="a" options={option2} />
</DropdownMenu>
```

```js
const option1 = [
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 },
];
const option2 = [
    { text: '默认排序', value: 'a' },
    { text: '好评排序', value: 'b' },
    { text: '销量排序', value: 'c' },
];
```

### 禁用菜单

```html
<DropdownMenu direction="up">
    <DropdownItem value={0} options={option1} disabled />
    <DropdownItem value="a" options={option2} disabled />
</DropdownMenu>
```

```js
const option1 = [
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 },
];
const option2 = [
    { text: '默认排序', value: 'a' },
    { text: '好评排序', value: 'b' },
    { text: '销量排序', value: 'c' },
];
```

## API

### DropdownMenu Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeColor | 菜单标题和选项的选中态颜色 | _string_ | `#ee0a24` |
| direction  | 菜单展开方向，可选值为`up` | _string_ | `down` |
| zIndex | 菜单栏 z-index 层级 | _number \| string_ | `10` |
| duration | 动画时长，单位秒 | _number \| string_ | `0.2` |
| overlay | 是否显示遮罩层 | _boolean_ | `true` |
| closeOnClickOverlay | 是否在点击遮罩层后关闭菜单 | _boolean_ | `true` |
| closeOnClickOutside  | 是否在点击外部元素后关闭菜单 | _boolean_ | `true` |

### DropdownItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选中项对应的 value | _number \| string_ | - |
| title | 菜单项标题 | _string_ | _React.ReactElement_ | 当前选中项文字 |
| options | 选项数组 | _Option[]_ | `[]` |
| disabled | 是否禁用菜单 | _boolean_ | `false` |
| titleClass | 标题额外类名 | _string_ | - |
| getContainer  | 指定挂载的节点，[用法示例](#/zh-CN/popup#zhi-ding-gua-zai-wei-zhi) | _string \| () => Element_ | - |
| visible | 控制菜单的显示 | _boolean_ | - |
| onVisibleChange | 切换菜单状态时的回调 | _(v: boolean) => void_ | - |

### DropdownItem Events

| 事件名 | 说明                          | 回调参数 |
| ------ | ----------------------------- | -------- |
| onChange | 点击选项导致 value 变化时触发 | value    |
| onOpen   | 打开菜单栏时触发              | -        |
| onClose  | 关闭菜单栏时触发              | -        |
| onOpened | 打开菜单栏且动画结束后触发    | -        |
| onClosed | 关闭菜单栏且动画结束后触发    | -        |

### Option 数据结构

| 键名  | 说明                                   | 类型               |
| ----- | -------------------------------------- | ------------------ |
| text  | 文字                                   | _string_           |
| value | 标识符                                 | _number \| string_ |
| icon  | 左侧[图标名称](#/zh-CN/icon)或图片链接 | _string_           |
