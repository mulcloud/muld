# Switch

### Install

```js
import { Switch } from '@trillion/muld';
```

## Usage

### Basic Usage

```js
const [$value, setValue] = React.useState(true);
```

```html
<Switch value={$value} onClick={() => {setValue(!$value)})}/>
```

### Disabled

```html
<Switch value={true} disabled />
```

### Loading

```html
<Switch value={true} loading />
```

### Custom Size

```html
<Switch value={true} size="24px" />
```

### Custom Color

```html
<Switch value={true} activeColor="#07c160" inactiveColor="#ee0a24" />
```

### Async Control

```js
function AsyncChange() {
    const [value, setValue] = React.useState(true);
    function handleInput(newVal) {
        setTimeout(() => {
            setValue(newVal)
        }, 500);
    }
    return <Switch value={value} onInput={handleInput} />
}
```

### Inside a Cell

```js
const [$value, setValue] = React.useState(true);
```
```html
<Cell title="title" rightIcon={
    <Switch value={$value} onChange={(newVal) => {setValue(newVal)}/>
}>
</Cell>
```

### Inside a Dialog
```js
const [$value, setValue] = React.useState(true);
const [shwDialog, setShowDialog] = useState(false);
```
```html
<Switch value={$value} onClick={() => {setShowDialog(true)}}/>
<Dialog
  title="title"
  visible={shwDialog}
  showCancelButton
  showConfirmButton
  onCancel={(): void => {
    setShowDialog(false);
  }}
  onConfirm={(): void => {
    setValue(!$value);
    setShowDialog(false);
  }}
>
  Toggle
</Dialog>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| value | Check status of Switch | _ActiveValue \| InactiveValue_ | `false` |
| loading | Whether to show loading icon | _boolean_ | `false` |
| disabled | Whether to disable switch | _boolean_ | `false` |
| size  | Size of switch | _number \| string_ | `30px` |
| activeColor | Background color when active | _string_ | `#1989fa` |
| inactiveColor | Background color when inactive | _string_ | `white` |
| activeValue | Value when active | _any_ | `true` |
| inactiveValue | Value when inactive | _any_ | `false` |

### Events

| Event           | Description                         | Parameters     |
| --------------- | ----------------------------------- | -------------- |
| onChange          | Triggered when check status changed | _value: any_   |
| onClick  | Triggered when clicked              | _event: Event_ |
