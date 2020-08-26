# Form

### Install

```js
import { Form } from '@trillion/muld';
```

## Usage

### Basic Usage

```html
<Form validateFirst onSubmit={onSubmit} onFailed={onFailed}>
    <Field
        value=""
        label="用户名"
        name="username"
        placeholder="用户名"
        rules={[{ required: true, message: 'Username is required' }]}
    />
    <Field
        value=""
        label="密码"
        type="password"
        name="password"
        placeholder="密码"
        rules={[{ required: true, message: 'Password is required' }]}
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

### Validate Rules

```html
<Form validateFirst onSubmit={onSubmit} onFailed={onFailed}>
  <Field
      value=""
      label="文本"
      name="pattern"
      placeholder="正则校验"
      rules={[{ pattern: /\d{6}/, message: 'Error message' }]}
  />
  <Field
      value=""
      label="文本"
      name="validator"
      placeholder="函数校验"
      rules={[{ validator, message: 'Error message' }]}
  />
   <Field
      value=""
      label="文本"
      name="asyncValidator"
      placeholder="Use async validator"
      rules={[{ validator: asyncValidator, message: 'Error message' }]}
  />
  <div style="margin: 1rem;">
    <Button round block type="info" nativeType="submit">
        Submit
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

### Field Type - Stepper

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

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| labelWidth | Field label width | _number \| string_ | `6.2em` |
| labelAlign | Field label align, can be set to `center` `right` | _string_ | `left` |
| inputAlign | Field input align, can be set to `center` `right` | _string_ | `left` |
| errorMessageAlign | Error message align, can be set to `center` `right` | _string_ | `left` |
| validateTrigger  | When to validate the form，can be set to `onChange`、`onSubmit` | _string_ | `onBlur` |
| colon | Whether to display colon after label | _boolean_ | `false` |
| validateFirst | Whether to stop the validation when a rule fails | _boolean_ | `false` |
| scrollToError  | Whether to scroll to the error field when validation failed | _boolean_ | `false` |
| showError  | Whether to highlight input when validation failed | _boolean_ | `true` |
| showErrorMessage  | Whether to show error message when validation failed | _boolean_ | `true` |
| submitOnEnter  | Whether to submit form on enter | _boolean_ | `true` |

### Data Structure of Rule

| Key | Description | Type |
| --- | --- | --- |
| required | Whether to be a required field | _boolean_ |
| message  | Error message | _string \| (value, rule) => string_ |
| validator  | Custom validator | _(value, rule) => boolean \| Promise_ |
| pattern  | Regex pattern | _RegExp_ |
| trigger  | When to validate the form，can be set to `onChange`、`onBlur` | _string_ |
| formatter  | Format value before validate | _(value, rule) => any_ |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| onSubmit | Triggered after submitting the form and validation passed | _values: object_ |
| onFailed | Triggered after submitting the form and validation failed | _errorInfo: { values: object, errors: object[] }_ |

