# Field

### Install

```js
import { Field } from '@trillion/muld';
```

## Usage

### Basic Usage

```html
<CellGroup>
  <Field value="" label="Label" placeholder="Text" />
</CellGroup>
```

### Custom Type

Use `type` prop to custom different type fields.

```html
<Field value="" label="Text" />
<Field value="" type="tel" label="Phone" />
<Field value="" type="digit" label="Digit" />
<Field value="" type="number" label="Number" />
<Field value="" type="password" label="Password" />
```

### Disabled

```html
<CellGroup>
  <Field label="Text" value="Input Readonly" readOnly />
  <Field label="Text" value="Input Disabled" disabled />
</CellGroup>
```

### Show Icon

```html
<CellGroup>
  <Field
    value=""
    label="Text"
    leftIcon="smile-o"
    rightIcon="warning-o"
    placeholder="Show Icon"
  />
  <Field
    value=""
    clearable
    label="Text"
    leftIcon="music-o"
    placeholder="Show Clear Icon"
  />
</CellGroup>
```

### Error Info

Use `error` or `errorMessage` to show error info.

```html
<CellGroup>
  <Field
    value=""
    error
    required
    label="Username"
    placeholder="Username"
  />
  <Field
    value=""
    required
    label="Phone"
    placeholder="Phone"
    errorMessage="Invalid phone"
  />
</CellGroup>
```

### Insert Button

Use button slot to insert button.

```html
<Field value="sms" center clearable label="SMS" placeholder="SMS" button={<Button size="small" type="primary">Send SMS</Button>} />
```

### Format Value

Use `formatter` prop to format the input value.

```html
<Field
  value=""
  label="Text"
  formatter={formatter}
  placeholder="Format On Change"
/>
<Field
  value=""
  label="Text"
  formatter={formatter}
  format-trigger="onBlur"
  placeholder="Format On Blur"
/>
```

```js
function formatter(value) {
    return value.replace(/\d/g, '');
}
```

### Auto Resize

Textarea Field can be auto resize when has `autoSize` prop.

```html
<Field
  value=""
  label="Message"
  type="textarea"
  placeholder="Message"
  rows="1"
  autoSize
/>
```

### Show Word Limit

```html
<Field
  value=""
  rows="2"
  autoSize
  label="Message"
  type="textarea"
  maxLength="50"
  placeholder="Message"
  showWordLimit
/>
```

### Input Align

Use `inputAlign` prop to align the input value.

```html
<Field
  value="value"
  label="Text"
  placeholder="Input Align Right"
  inputAlign="right"
/>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| value | Field value | _number \| string_ | - |
| label | Field label | _string_ | - |
| name | Name | _string_ | - |
| type | Input type, can be set to `tel` `digit`<br>`number` `textarea` `password` | _string_ | `text` |
| size | Size，can be set to `large` | _string_ | - |
| maxLength | Max length of value | _number \| string_ | - |
| placeholder | Input placeholder | _string_ | - |
| border | Whether to show inner border | _boolean_ | `true` |
| disabled | Whether to disable field | _boolean_ | `false` |
| readOnly | Whether to be readOnly | _boolean_ | `false` |
| colon | Whether to display colon after label | _boolean_ | `false` |
| required | Whether to show required mark | _boolean_ | `false` |
| center | Whether to center content vertically | _boolean_ | `true` |
| clearable | Whether to be clearable | _boolean_ | `false` |
| clearTrigger | When to display the clear icon, `always` means to display the icon when value is not empty, `focus` means to display the icon when input is focused | _string_ | `focus` |
| clickable | Whether to show click feedback when clicked | _boolean_ | `false` |
| isLink | Whether to show link icon | _boolean_ | `false` |
| showWordLimit | Whether to show word limit, need to set the `maxlength` prop | _boolean_ | `false` |
| error | Whether to show error info | _boolean_ | `false` |
| errorMessage | Error message | _string_ | - |
| formatter | Input value formatter | _Function_ | - |
| formatTrigger | When to format value，can be set to `onBlur` | _string_ | `onChange` |
| arrowDirection | Can be set to `left` `up` `down` | _string_ | `right` |
| labelClass | Label className | _any_ | - |
| labelWidth | Label width | _number \| string_ | `6.2em` |
| labelAlign | Label align, can be set to `center` `right` | _string_ | `left` |
| inputAlign | Input align, can be set to `center` `right` | _string_ | `left` |
| errorMessageAlign | Error message align, can be set to `center` `right` | _string_ | `left` |
| autoSize | Textarea auto resize，can accpet an object,<br>e.g. { maxHeight: 100, minHeight: 50 } | _boolean \| object_ | `false` |
| leftIcon | Left side icon name | _string_ | - |
| rightIcon | Right side icon name | _string_ \| _ReactElement_ | - |
| iconPrefix  | Icon className prefix | _string_ \| _ReactElement_ | `mul-icon` |
| rules  | Form validation rules | _Rule[]_ | - |

### Events

| Event | Description | Parameters |
| --- | --- | --- |
| onChange | Triggered when input value changed | _value: string_ |
| onFocus | Triggered when input gets focus | _event: Event_ |
| onBlur | Triggered when input loses focus | _event: Event_ |
| onClear | Triggered when click clear icon | _event: Event_ |
| onClick | Triggered when click Field | _event: Event_ |
| onClickInput | Triggered when click input | _event: Event_ |
| onClickLeftIcon | Triggered when click the left icon of Field | _event: Event_ |
| onClickRightIcon | Triggered when click the right icon of Field | _event: Event_ |
