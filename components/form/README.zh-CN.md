# Form 表单

### 介绍

用于数据录入、校验，支持输入框、单选框、复选框、文件上传等类型

### 引入

```js
import { Form } from '@trillion/muld';
```

## 代码演示

### 基础用法

在表单中，每个 [Field 组件](#/zh-CN/field) 代表一个表单项，使用 Field 的`rules`属性定义校验规则

```html
<Form validateFirst onSubmit={onSubmit} onFailed={onFailed}>
    <Field
        value=""
        label="用户名"
        name="username"
        placeholder="用户名"
        rules={[{ required: true, message: '请填写用户名' }]}
    />
    <Field
        value=""
        label="密码"
        type="password"
        name="password"
        placeholder="密码"
        rules={[{ required: true, message: '请填写密码' }]}
    />
    <div style={{ margin: '1rem 1rem 0' }}>
        <Button round block type="info" nativeType="submit">
            提交
        </Button>
    </div>
</Form>
```

```js
function onSubmit(values: any) {
        console.log('submit', values);
    }

function onFailed(errorInfo: any) {
    console.log('failed', errorInfo);
}
```

### 校验规则

通过`rules`定义表单校验规则，可用字段见[下方表格](#/zh-CN/form#rule-shu-ju-jie-gou)

```html
<Form validateFirst onSubmit={onSubmit} onFailed={onFailed}>
  <!-- 通过 pattern 进行正则校验 -->
  <Field
      value=""
      label="文本"
      name="pattern"
      placeholder="正则校验"
      rules={[{ pattern: /\d{6}/, message: '请输入正确内容' }]}
  />
  <!-- 通过 validator 进行函数校验 -->
  <Field
      value=""
      label="文本"
      name="validator"
      placeholder="函数校验"
      rules={[{ validator, message: '请输入正确内容' }]}
  />
  <!-- 通过 validator 进行异步函数校验 -->
   <Field
      value=""
      label="文本"
      name="asyncValidator"
      placeholder="异步函数校验"
      rules={[{ validator: asyncValidator, message: '请输入正确内容' }]}
  />
  <div style="margin: 1rem;">
    <Button round block type="info" nativeType="submit">
        提交
    </Button>
  </div>
</Form>
```

```js
function onSubmit(values: any) {
    console.log('submit', values);
}

function onFailed(errorInfo: any) {
    console.log('failed', errorInfo);
}
function validator(val: string) {
    return /1\d{10}/.test(val);
}

function asyncValidator(val: string) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(val === '1234');
        }, 1000);
    });
}
```

### 表单项类型 - 步进器

在表单中使用 [Stepper 组件](#/zh-CN/stepper)

```html
<Form validateFirst onSubmit={onSubmit} onFailed={onFailed}>
    <Field label="步进器" name="stepper">
        <Stepper value="" />
    </Field>
</Form>
```

```js
function onSubmit(values: any) {
    console.log('submit', values);
}

function onFailed(errorInfo: any) {
    console.log('failed', errorInfo);
}
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| labelWidth | 表单项 label 宽度，默认单位为`px` | _number \| string_ | `6.2em` |
| labelAlign |  表单项 label 对齐方式，可选值为 `center` `right` | _string_ | `left` |
| inputAlign | 输入框对齐方式，可选值为 `center` `right` | _string_ | `left` |
| errorMessageAlign | 错误提示文案对齐方式，可选值为 `center` `right` | _string_ | `left` |
| validateTrigger | 表单校验触发时机，可选值为`onChange` | _string_ | `onBlur` |
| colon | 是否在 label 后面添加冒号 | _boolean_ | `false` |
| validateFirst | 是否在某一项校验不通过时停止校验 | _boolean_ | `false` |
| scrollToError | 是否在提交表单且校验不通过时滚动至错误的表单项 | _boolean_ | `false` |
| showError | 是否在校验不通过时标红输入框 | _boolean_ | `true` |
| showErrorMessage | 是否在校验不通过时在输入框下方展示错误提示 | _boolean_ | `true` |
| submitOnEnter  | 是否在按下回车键时提交表单 | _boolean_ | `true` |

> 表单项的 API 参见：[Field 组件](#/zh-CN/field#api)

### Rule 数据结构

使用 Field 的`rules`属性可以定义校验规则，可选属性如下:

| 键名 | 说明 | 类型 |
| --- | --- | --- |
| required | 是否为必选字段 | _boolean_ |
| message  | 错误提示文案 | _string \| (value, rule) => string_ |
| validator | 通过函数进行校验 | _(value, rule) => boolean \| Promise_ |
| pattern | 通过正则表达式进行校验 | _RegExp_ |
| trigger | 本项规则的触发时机，可选值为`onChange`、`onBlur` | _string_ |
| formatter  | 格式化函数，将表单项的值转换后进行校验 | _(value, rule) => any_ |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| onSubmit | 提交表单且验证通过后触发 | _values: object_ |
| onFailed | 提交表单且验证不通过后触发 | _errorInfo: { values: object, errors: object[] }_ |
