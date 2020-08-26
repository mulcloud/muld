# ActionSheet 动作面板

### 介绍

底部弹起的模态面板，包含与当前情境相关的多个选项。

### 引入

```js
import {ActionSheet} from '@trillion/muld';
```

## 代码演示

### 基础用法

动作面板通过 `actions` 属性来定义选项，`actions` 属性是一个由对象构成的数组，数组中的每个对象配置一列，     对象格式见文档下方表格。

```js
const action = [{ name: '选项一' }, { name: '选项二' }, { name: '选项三' }]
const [visible, setVisible] = React.useState(false);
const onSelect = (item) => {
  console.log('item', item)
  setVisible(false); 
}
const onCancel = () => { setVisible(false); }
const onCellClick = () => { setVisible(true); }
```
```html

<Cell
    isLink
    title="基础用法"
    onClick={onCellClick}
></Cell>
<ActionSheet
    visible={visible}
    actions={action}
    onSelect={onSelect}
    onCancel={onCancel}
></ActionSheet>
```

### 展示取消按钮

设置 `cancelText` 属性后，会在底部展示取消按钮，点击后关闭当前面板并触发 `cancel` 事件。

```js
const [visible, setVisible] = React.useState(false);
const onCancel = () => { setVisible(false); }
const onCellClick = () => { setVisible(true); }
```
```html
<Cell isLink title="展示取消按钮" onClick={onCellClick} ></Cell>
<ActionSheet
  visible={visible}
  cancelText="取消"
  onCancel={onCancel}
/>
```

### 展示描述信息

通过 `description` 可以在菜单顶部显示描述信息，通过选项的 `subname` 属性可以在选项文字的右侧展示描述信息。

```js
const action = [{ name: '选项一' }, { name: '选项二' }, { name: '选项三', subname: '这是一段描述信息'}]
const [visible, setVisible] = React.useState(false);
const onCancel = () => { setVisible(false); }
const onCellClick = () => { setVisible(true); }
```
```html
<Cell isLink title="展示描述信息" onClick={onCellClick} ></Cell>
<ActionSheet
  visible={visible}
  :actions="actions"
  cancelText="取消"
  description="这是一段描述信息"
  onCancel={onCancel}
/>
```

### 选项状态

可以通过 `loading` 和 `disabled` 将选项设置为加载状态或禁用状态，或者通过`color`设置选项的颜色

```js
const [visible, setVisible] = React.useState(false);
const onCancel = () => { setVisible(false); }
const onCellClick = () => { setVisible(true); }
const action = [
    { name: '着色选项', color: '#ee0a24' },
    { name: '禁用选项', disabled: true },
    { name: '加载选项', loading: true },
]
const onCancel = () => { setVisible(false); }
```
```html
<Cell isLink title="选项状态" onClick={onCellClick} ></Cell>
<ActionSheet
  visible={visible}
  :actions="actions"
  cancelText="取消"
/>
```

### 自定义面板

自定义面板的展示内容，同时可以使用`title`属性展示标题栏

```js
const [visible, setVisible] = React.useState(false);
const onCellClick = () => { setVisible(true); }
const onCancel = () => { setVisible(false); }
```
```html
<Cell isLink title="自定义面板" onClick={onCellClick} ></Cell>
<ActionSheet
  visible={visible}
  title="标题"
  onCancel={onCancel}
/>
  <div style={{padding: '1rem 1rem 10rem'}}>这是内容</div>
</ActionSheet>
```

## API

### Props

| 参数                       | 说明                                                                  | 类型                      | 默认值  |
| -------------------------- | --------------------------------------------------------------------- | ------------------------- | ------- |
| visible                      | 是否显示动作面板                                                      | _boolean_                 | `false` |
| actions                    | 面板选项列表                                                          | _Action[]_                | `[]`    |
| title                      | 顶部标题                                                              | _string_                  | -       |
| cancelText                 | 取消按钮文字                                                          | _string_                  | -       |
| description                | 选项上方的描述信息                                                    | _string_                  | -       |
| closeIcon                  | 关闭[图标名称](#/zh-CN/icon)或图片链接                                | _string_                  | `cross` |
| duration                   | 动画时长，单位秒                                                      | _number \| string_        | `0.3`   |
| round                      | 是否显示圆角                                                          | _boolean_                 | `true`  |
| overlay                    | 是否显示遮罩层                                                        | _boolean_                 | `true`  |
| lockScroll                 | 是否锁定背景滚动                                                      | _boolean_                 | `true`  |
| safeAreaInsetBottom     | 是否开启[底部安全区适配](#/zh-CN/quickstart#di-bu-an-quan-qu-gua-pei) | _boolean_                 | `true`  |

### Action 数据结构

`actions` 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象可以包含以下值：

| 键名      | 说明                     | 类型      |
| --------- | ------------------------ | --------- |
| name      | 标题                     | _string_  |
| subname   | 二级标题                 | _string_  |
| color     | 选项文字颜色             | _string_  |
| className | 为对应列添加额外的 class | _any_     |
| loading   | 是否为加载状态           | _boolean_ |
| disabled  | 是否为禁用状态           | _boolean_ |

### Events

| 事件名 | 说明                                     | 回调参数                        |
| ------ | ---------------------------------------- | ------------------------------- |
| onSelect | 点击选项时触发，禁用或加载状态下不会触发 | _action: Action, index: number_ |
| onCancel | 点击 取消按钮/遮罩 时触发                       | -                               |
| onOpen   | 打开面板时触发                           | -                               |
| onClose  | 关闭面板时触发                           | -                               |
| onOpened | 打开面板且动画结束后触发                 | -                               |
| onClosed | 关闭面板且动画结束后触发                 | -                               |
