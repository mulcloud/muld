# Stepper

### Install

```js
import { Stepper } from '@trillion/muld';
```

## Usage

### Basic Usage

```html
<Stepper value="1" />
```

### Step

```html
<Stepper value="1" step="2" />
```

### Range

```html
<Stepper value="1" min="5" max="8" />
```

### Integer

```html
<Stepper value="1" integer />
```

### Disabled

```html
<Stepper value="1" disabled />
```

### Disable Input

```html
<Stepper value="1" disableInput />
```

### Decimal Length

```html
<Stepper value="1" step="0.2" decimalLength="1" />
```

### Custom Size

```html
<Stepper value="1" inputWidth="40px" buttonSize="32px" />
```

### Async Change

```js
function AsyncChange() {
    const [value, setValue] = React.useState<string | number>(1);
    function onChange(value: string) {
        setTimeout(() => {
            setValue(value)
        }, 500);
    }
    return <Stepper value={value} asyncChange change={onChange} />
}
```

### Round Theme

```html
<Stepper value="1" theme="round" buttonSize="22" disableInput />
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| value | Current value | _number \| string_ | - |
| min | Min value | _number \| string_ | `1` |
| max | Max value | _number \| string_ | - |
| defaultValue | Default value, valid when value is empty | _number \| string_ | `1` |
| step | Value change step | _number \| string_ | `1` |
| name | Stepper name | _number \| string_ | - |
| inputWidth | Input width | _number \| string_ | `32px` |
| buttonSize | Button size | _number \| string_ | `28px` |
| decimalLength | Decimal length | _number \| string_ | - |
| theme | Theme, can be set to `round` | _string_ | - |
| placeholder | Input placeholder | _string_ | - |
| integer | Whether to allow only integers | _boolean_ | `false` |
| disabled | Whether to disable value change | _boolean_ | `false` |
| disablePlus | Whether to disable plus button | _boolean_ | `false` |
| disableMinus | Whether to disable minus button | _boolean_ | `false` |
| disableInput | Whether to disable input | _boolean_ | `false` |
| asyncChange | Whether to enable async change | _boolean_ | `false` | - |
| showPlus | Whether to show plus button | _boolean_ | `true` |
| showMinus | Whether to show minus button | _boolean_ | `true` |
| longPress | Whether to allow long press | _boolean_ | `true` |
| allowEmpty | Whether to allow the input to be empty | _boolean_ | `false` |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| onChange | Triggered when value change | _value: string, detail: { name: string }_ |
| onOverlimit | Triggered when click disabled button | - |
| onPlus | Triggered when click plus button | - |
| onMinus | Triggered when click minus button | - |
| onFocus | Triggered when input focused | _event: Event_ |
| onBlur | Triggered when input blured | _event: Event_ |
