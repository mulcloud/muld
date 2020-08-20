# Field 输入框

### 介绍

表单中的输入框组件。

### 引入

```js
import { Field, CellGroup } from '@trillion/muld';
```

## 代码演示

### 基础用法

```html
<!-- Field 是基于 Cell 实现的，可以使用 CellGroup 作为容器来提供外边框。 -->
<CellGroup>
  <Field value="" label="文本" placeholder="请输入文本" />
</CellGroup>
```

### 自定义类型

根据 `type` 属性定义不同类型的输入框，默认值为 `text`。

```html
<!-- 输入任意文本 -->
<Field value="" label="文本" placeholder="请输入文本"  />
<!-- 输入手机号，调起手机号键盘 -->
<Field value="" type="tel" label="手机号" placeholder="请输入手机号" />
<!-- 允许输入正整数，调起纯数字键盘 -->
<Field value="" type="digit" label="整数" placeholder="请输入整数" />
<!-- 允许输入数字，调起带符号的纯数字键盘 -->
<Field value="" type="number" label="数字" placeholder="请输入数字（支持小数）" />
<!-- 输入密码 -->
<Field value="" type="password" label="密码" placeholder="请输入密码" />
```

### 禁用输入框

通过 `readOnly` 将输入框设置为只读状态，通过 `disabled` 将输入框设置为禁用状态。

```html
<CellGroup>
  <Field label="文本" value="输入框只读" readOnly />
  <Field label="文本" value="输入框已禁用" disabled />
</CellGroup>
```

### 显示图标

通过 `leftIcon` 和 `rightIcon` 配置输入框两侧的图标，通过设置 `clearable` 在输入过程中展示清除图标。

```html
<CellGroup>
  <Field
    label="文本"
    leftIcon="smile-o"
    rightIcon="warning-o"
    placeholder="显示图标"
  />
  <Field
    value="123"
    clearable
    label="文本"
    leftIcon="music-o"
    placeholder="显示清除图标"
  />
</CellGroup>
```

### 错误提示

设置 `required` 属性表示这是一个必填项，可以配合 `error` 或 `errorMessage` 属性显示对应的错误提示。

```html
<CellGroup>
  <Field
    error
    required
    label="用户名"
    placeholder="请输入用户名"
  />
  <Field
    required
    label="手机号"
    placeholder="请输入手机号"
    errorMessage="手机号格式错误"
  />
  <Field
    required
    label="邮箱"
    errorMessage="邮箱格式错误"
    errorMessageAlign="right"
    placeholder="错误提示文案对齐方式-右对齐"
  />
</CellGroup>
```

### 插入按钮

通过 button 插槽可以在输入框尾部插入按钮。

```html
<Field
    value=""
    center
    label="短信验证码"
    clearable
    placeholder="请输入短信验证码"
    button={
      <Button size="small" type="primary">
          发送验证码
      </Button>
    }
/>
```

### 格式化输入内容

通过 `formatter` 属性可以对输入的内容进行格式化，通过 `formatTrigger` 属性可以指定执行格式化的时机，默认在输入时进行格式化。

```html
<Field value="" label="文本" formatter={formatter} placeholder="在输入时执行格式化" />
<Field
    value="123abc"
    label="文本"
    formatter={formatter}
    formatTrigger="onBlur"
    placeholder="在失焦时执行格式化"
/>
```

```js
function formatter(value) {
    return value.replace(/\d/g, '');
}
```

### 高度自适应

对于 textarea，可以通过 `autoSize` 属性设置高度自适应。

```html
<Field
  rows="1"
  autoSize
  label="留言"
  type="textarea"
  placeholder="请输入留言"
/>
```

### 显示字数统计

设置 `maxLength` 和 `showWordLimit` 属性后会在底部显示字数统计。

```html
<Field
  label="留言"
  type="textarea"
  rows="2"
  maxLength="50"
  showWordLimit
  autoSize
  placeholder="请输入留言"
/>
```

### 输入框内容对齐

通过 `inputAlign` 属性可以设置输入框内容的对齐方式，可选值为 `center`、`right`。

```html
<Field
  value="value"
  label="文本"
  placeholder="输入框内容右对齐"
  inputAlign="right"
/>
```


### 圆角输入框

```html
 <Field value="" round placeholder="请输入文本" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前输入的值 | _number \| string_ | - |
| label | 输入框左侧文本 | _string_ \| _ReactElement_ | - |
| name  | 名称，提交表单的标识符 | _string_ | - |
| type | 输入框类型, 可选值为 `tel` `digit`<br>`number` `textarea` `password` 等 | _string_ | `text` |
| size | 大小，可选值为 `large` | _string_ | - |
| maxLength | 输入的最大字符数 | _number \| string_ | - |
| placeholder | 输入框占位提示文字 | _string_ | - |
| border | 是否显示内边框 | _boolean_ | `true` |
| disabled | 是否禁用输入框 | _boolean_ | `false` |
| readOnly | 是否只读 | _boolean_ | `false` |
| colon | 是否在 label 后面添加冒号 | _boolean_ | `false` |
| required | 是否显示表单必填星号 | _boolean_ | `false` |
| center | 是否使内容垂直居中 | _boolean_ | `false` |
| round | 圆角输入框 | _boolean_ | `false` |
| clearable | 是否启用清除图标，点击清除图标后会清空输入框 | _boolean_ | `false` |
| clearTrigger | 显示清除图标的时机，`always` 表示输入框不为空时展示，<br>`focus` 表示输入框聚焦且不为空时展示 | _string_ | `focus` |
| clickable | 是否开启点击反馈 | _boolean_ | `false` |
| isLink | 是否展示右侧箭头并开启点击反馈 | _boolean_ | `false` |
| showWordLimit | 是否显示字数统计，需要设置`maxLength`属性 | _boolean_ | `false` |
| error | 是否将输入内容标红 | _boolean_ | `false` |
| errorMessage | 底部错误提示文案，为空时不展示 | _string_ | - |
| formatter | 输入内容格式化函数 | _Function_ | - |
| formatTrigger  | 格式化函数触发的时机，可选值为 `onBlur` | _string_ | `onChange` |
| arrowDirection | 箭头方向，可选值为 `left` `up` `down` | _string_ | `right` |
| labelClass | 左侧文本额外类名 | _any_ | - |
| labelWidth | 左侧文本宽度，默认单位为`px` | _number \| string_ | `6.2em` |
| labelAlign | 左侧文本对齐方式，可选值为 `center` `right` | _string_ | `left` |
| inputAlign | 输入框对齐方式，可选值为 `center` `right` | _string_ | `left` |
| errorMessageAlign | 错误提示文案对齐方式，可选值为 `center` `right` | _string_ | `left` |
| autoSize | 是否自适应内容高度，只对 textarea 有效，<br>可传入对象,如 { maxHeight: 100, minHeight: 50 }，<br>单位为`px` | _boolean \| object_ | `false` |
| leftIcon | 左侧[图标名称](#/zh-CN/icon)或图片链接 | _string_ \| _ReactElement_ | - |
| rightIcon | 右侧[图标名称](#/zh-CN/icon)或图片链接 | _string_ \| _ReactElement_ | - |
| button | 自定义输入框尾部按钮 | _string_ | - |
| iconPrefix | 图标类名前缀，同 Icon 组件的 [classPrefix 属性](#/zh-CN/icon#props) | _string_ | `Icon` |
| rules  | 表单校验规则 | _Rule[]_ | - |

### Events

| 事件                 | 说明                 | 回调参数                       |
| -------------------- | -------------------- | ------------------------------ |
| onChange                | 输入框内容变化时触发 | _value: string (当前输入的值)_ |
| onFocus                | 输入框获得焦点时触发 | _event: Event_                 |
| onBlur                 | 输入框失去焦点时触发 | _event: Event_                 |
| onClear                | 点击清除按钮时触发   | _event: Event_                 |
| onClick                | 点击 Field 时触发    | _event: Event_                 |
| onClickInput           | 点击输入区域时触发   | _event: Event_                 |
| onClickLeftIcon        | 点击左侧图标时触发   | _event: Event_                 |
| onClickRightIcon       | 点击右侧图标时触发   | _event: Event_                 |
