# Search 搜索

### 引入

```js
import { Search } from '@trillion/muld';
```

## 代码演示

### 基础用法

value 用于控制搜索框中的文字，background 可以自定义搜索框外部背景色。

```html
<Search value='' placeholder="请输入搜索关键词" />
```

### 事件监听

Search 组件提供了 `onSearch` 和 `onCancel` 事件，`onSearch` 事件在点击键盘上的搜索/回车按钮后触发，`onCancel` 事件在点击搜索框右侧取消按钮时触发。

```html
<form action="/">
  <Search
    value=''
    showAction
    placeholder="请输入搜索关键词"
    onSearch={onSearch}
    onCancel={onCancel}
  />
</form>
```

```js
const onSearch = (value: string) => {
  alert(value);
}

const onCancel = () => {
  alert('取消');
}

```

> Tips: 在 Search 外层增加 form 标签，且 action 不为空，即可在 iOS 输入法中显示搜索按钮。

### 搜索框内容对齐

通过 `inputAlign` 属性设置搜索框内容的对齐方式，可选值为 `center`、`right`。

```html
<Search
  value=''
  placeholder="请输入搜索关键词"
  inputAlign="center"
/>
```

### 禁用搜索框

通过 `disabled` 属性禁用搜索框。

```html
<Search value="" disabled placeholder="请输入搜索关键词" />
```

### 自定义背景色

通过 `background` 属性可以设置搜索框外部的背景色，通过 `shape` 属性设置搜索框的形状，可选值为 `round`。

```html
<Search
  value=""
  shape="round"
  background="#4fc08d"
  placeholder="请输入搜索关键词"
/>
```

### 自定义按钮

使用 `action` 插槽可以自定义右侧按钮的内容。使用插槽后，`cancel` 事件将不再触发。

```html
<Search
  value=""
  showAction
  label="地址"
  placeholder="请输入搜索关键词"
  onSearch={onSearch}
  action =  {<React.Fragment>
                 <div onClick={onSearch}>搜索</div>
            </React.Fragment>}
>
</Search>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 搜索框左侧文本 | _string_ \| _ReactElement_ | - |
| shape | 搜索框形状，可选值为 `round` | _string_ | `square` |
| background | 搜索框外部背景色 | _string_ | `#f2f2f2` |
| maxlength | 输入的最大字符数 | _number \| string_ | - |
| placeholder | 占位提示文字 | _string_ | - |
| clearable | 是否启用清除图标，点击清除图标后会清空输入框 | _boolean_ | `true` |
| clearTrigger | 显示清除图标的时机，`always` 表示输入框不为空时展示，<br>`focus` 表示输入框聚焦且不为空时展示 | _string_ | `focus` |
| autofocus | 是否自动聚焦，iOS 系统不支持该属性 | _boolean_ | `false` |
| showAction | 是否在搜索框右侧显示取消按钮 | _boolean_ | `false` |
| actionText | 取消按钮文字 | _boolean_ | `取消` |
| disabled | 是否禁用输入框 | _boolean_ | `false` |
| readonly | 是否将输入框设为只读 | _boolean_ | `false` |
| error | 是否将输入内容标红 | _boolean_ | `false` |
| inputAlign | 输入框内容对齐方式，可选值为 `center` `right` | _string_ | `left` |
| leftIcon | 输入框左侧[图标名称](#/zh-CN/icon)或图片链接 | _string_ | `search` |
| rightIcon | 输入框右侧[图标名称](#/zh-CN/icon)或图片链接 | _string_ | - |
| left    | 自定义左侧内容（搜索框外）                              |
| action  | 自定义右侧内容（搜索框外），设置`showAction`属性后展示 |


### Events

| 事件名 | 说明                 | 回调参数                       |
| ------ | -------------------- | ------------------------------ |
| onSearch | 确定搜索时触发       | _value: string (当前输入的值)_ |
| onChange  | 输入框内容变化时触发 | _value: string (当前输入的值)_ |
| onFocus  | 输入框获得焦点时触发 | _event: Event_                 |
| onBlur   | 输入框失去焦点时触发 | _event: Event_                 |
| onClear  | 点击清除按钮后触发   | _event: Event_                 |
| onCancel | 点击取消按钮时触发   | -                              |

## 常见问题

### 在桌面端点击清除按钮无效？

清除按钮监听是的移动端 Touch 事件，参见[在桌面端使用](#/zh-CN/quickstart#zai-zhuo-mian-duan-shi-yong)。
