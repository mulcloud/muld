# Checkbox 复选框

### 引入

```js
import { CheckboxGroup } from '@trillion/muld';

```

## 代码演示

### 基础用法

```jsx
<Checkbox
    onChange={(checked) => {
        console.log('checked', checked);
    }}
>
    复选框
</Checkbox>
```

### 受控复选框

```jsx
const [checked, setChecked] = useState(false);
<Checkbox
    checked={checked}
    onChange={(checked) => {
        setChecked(checked);
    }}
>
    受控复选框
</Checkbox>
```

### 禁用状态

通过设置`disabled`属性可以禁用复选框

```jsx
<Checkbox disabled>
    复选框
</Checkbox>
```

### 自定义形状

将`shape`属性设置为`square`，复选框的形状会变成方形

```jsx
<Checkbox shape="square">
    复选框
</Checkbox>
```

### 自定义颜色

通过`checkedColor`属性设置选中状态的图标颜色

```jsx
<Checkbox checkedColor="#07c160">
    复选框
</Checkbox>
```

### 自定义大小

通过`iconSize`属性可以自定义图标的大小

```jsx
<Checkbox iconSize="30px">
    复选框
</Checkbox>
```

### 复选框组

复选框可以与复选框组一起使用, onChange事件拿到选中复选框的name。

```jsx
<CheckboxGroup
  onChange={(checkedList) => {console.log('checkedList ==>', checkedList)}}
>
  <Checkbox name="a">复选框a</Checkbox>
  <Checkbox name="b">复选框a</Checkbox>
</CheckboxGroup>
```

### 受控复选框组

```jsx
const [value, setValue] = useState<any[]>([]);
<CheckboxGroup
    value={value}
    onChange={(checkedList) => {
        setValue(checkedList);
    }}
>
    <Checkbox name="a">复选框a</Checkbox>
    <Checkbox name="b">复选框b</Checkbox>
</CheckboxGroup>
```

### options生成复选框组

```jsx
const options = [
    {
      name: 'a',
      label: 'a',
      disabled: true
    },
    { name: 'b',
      label: 'b',
      onChange: (checked: boolean) => {console.log('checked', checked)}
      },
    { name: 'c',
      label: 'c'
    },
];
<CheckboxGroup options={options}></CheckboxGroup>
```

### 水平排列

```jsx
<CheckboxGroup direction="horizontal">
    <Checkbox name="a">复选框a</Checkbox>
    <Checkbox name="b">复选框b</Checkbox>
</CheckboxGroup>
```

将`direction`属性设置为`horizontal`后，复选框组会变成水平排列

### 限制最大可选数

通过`max`属性可以限制复选框组的最大可选数

```jsx
<CheckboxGroup max={2}>
    <Checkbox name="a">复选框a</Checkbox>
    <Checkbox name="b">复选框b</Checkbox>
    <Checkbox name="c">复选框c</Checkbox>
</CheckboxGroup>
```

### 全选与反选

利用受控组件的形式实现全选与反选

```jsx
const list = ['a', 'b', 'c'];
const [value, setValue] = useState<any[]>(['a']);
<CheckboxGroup
    value={value}
>
    {list.map((name) => (
        <Checkbox key={name} name={name}>
            复选框{name}
        </Checkbox>
    ))}
</CheckboxGroup>
<div>
    <Button
        onClick={() => {
            setValue([...list]);
        }}
    >
        全选
    </Button>
    <Button
        onClick={() => {
            setValue(
                list.filter((item) => !value.includes(item)),
            );
        }}
    >
        反选
    </Button>
</div>
```

### 搭配单元格组件使用

此时你需要再引入`Cell`和`CellGroup`组件，并通过`CheckboxGroup`的受控形式去控制显示

```jsx
const list = ['a', 'b', 'c'];
const [value, setValue] = useState<any[]>(['a']);

<CheckboxGroup
    value={value}
>
    <CellGroup>
        {list.map((name) => {
            return (
                <Cell
                    key={name}
                    clickable
                    title={`复选框${name}`}
                    rightIcon={
                      <Checkbox name={name}>{name}</Checkbox>
                    }
                    onClick={() => {
                        if (value.includes(name)) { // 取消勾选
                            value(
                                value.filter((item) => item !== name),
                            );
                        } else { // 勾选
                            setValue([...value!, name]);
                        }
                    }}
                ></Cell>
            );
        })}
    </CellGroup>
</CheckboxGroup>
```

## API

### Checkbox Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked | 是否为选中状态 | _boolean_ | `false` |
| defaultChecked | 默认选中状态  | _boolean_ | - |
| name | 标识符 | _string_ | 当与CheckboxGroup搭配的时候, 为必传 |
| shape | 形状，可选值为 `square` | _string_ | `round` |
| disabled | 是否禁用复选框 | _boolean_ | `false` |
| labelPosition | 文本位置，可选值为 `left` | _string_ | `right` |
| iconSize | 图标大小，默认单位为`px` | _number \| string_ | `20px` |
| checkedColor | 选中状态颜色 | _string_ | `#1989fa` |

### CheckboxGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 所有选中项的标识符 | _string[]_ | - |
| defaultValue | 默认选中项的标识符 | _any[]_ | - |
| options | 指定可选项 | _CheckboxGroupOption[]_ | - |
| disabled | 是否禁用所有复选框 | _boolean_ | `false` |
| max | 最大可选数，`0`为无限制 | _number_ | `0` |
| direction | 排列方向，可选值为`horizontal` | _string_ | `vertical` |
| iconSize | 所有复选框的图标大小，默认单位为`px` | _number \| string_ | `20px` |
| checkedColor | 所有复选框的选中状态颜色 | _string_ | `#1989fa` |

### CheckboxGroupOption

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 复选框标识符, 必传 | _string[]_ | - |
| label | 复选框的label的显示文字 | _string\| React.ReactNode_ | - |
| disabled | 是否禁用复选框 | _boolean_ | - |
| onChange | 变化时的回调函数 | _(checked: boolean) => void_ | - |

### Checkbox Events

| 事件名 | 说明                     | 回调参数           |
| ------ | ------------------------ | ------------------ |
| onChange | 变化时的回调函数 | _checked: boolean_ |
| onClick  | 点击复选框时触发         | _event: Event_     |

### CheckboxGroup Events

| 事件名 | 说明                     | 回调参数       |
| ------ | ------------------------ | -------------- |
| onChange | 变化时的回调函数 | _names: string[]_ |
