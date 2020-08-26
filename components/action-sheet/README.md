# ActionSheet

### Install

```js
import {ActionSheet} from '@trillion/muld';
```

## Usage

### Basic Usage

Use `actions` prop to set options of action-sheet.

```js
const action = [{ name: 'Option1' }, { name: 'Option2' }, { name: 'Option3' }]
const [visible, setVisible] = React.useState(false);
const onSelect = (item) => {
  console.log('item', item)
  setVisible(false); 
}
const onCancel = () => { setVisible(false); }
const onCellClick = () => { setVisible(true); }
```
```html

<Cell isLink title="基础用法" onClick={onCellClick}
></Cell>
<ActionSheet
    visible={visible}
    actions={action}
    onSelect={onSelect}
    onCancel={onCancel}
></ActionSheet>
```


### Show Cancel Button

```js
const [visible, setVisible] = React.useState(false);
const onCancel = () => { setVisible(false); }
const onCellClick = () => { setVisible(true); }
```
```html
<Cell isLink title="Show Cancel Button" onClick={onCellClick} ></Cell>
<ActionSheet
  visible={visible}
  cancelText="Cancel"
  onCancel={onCancel}
/>
```

### Show Description

```js
const action = [{ name: 'Option1' }, { name: 'Option2' }, { name: 'Option3', subname: 'description message'}]
const [visible, setVisible] = React.useState(false);
const onCancel = () => { setVisible(false); }
const onCellClick = () => { setVisible(true); }
```
```html
<Cell isLink title="Show Description" onClick={onCellClick} ></Cell>
<ActionSheet
  visible={visible}
  actions={actions}
  cancelText="Cancel"
  description="description message"
  onCancel={onCancel}
/>
```

### Option Status

```js
const [visible, setVisible] = React.useState(false);
const onCancel = () => { setVisible(false); }
const onCellClick = () => { setVisible(true); }
const action = [
    { name: 'colored option', color: '#ee0a24' },
    { name: 'disabled option', disabled: true },
    { name: 'loading option', loading: true },
]
const onCancel = () => { setVisible(false); }
```
```html
<Cell isLink title="Option Status" onClick={onCellClick} ></Cell>
<ActionSheet
  visible={visible}
  actions={actions}
  cancelText="Cancel"
/>
```

### Custom Panel

```js
const [visible, setVisible] = React.useState(false);
const onCellClick = () => { setVisible(true); }
const onCancel = () => { setVisible(false); }
```
```html
<Cell isLink title="Custom Panel" onClick={onCellClick} ></Cell>
<ActionSheet
  visible={visible}
  title="Title"
  onCancel={onCancel}
/>
  <div class="content">Some Content...</div>
</ActionSheet>
<style>
  .content {
    padding: 1rem 1rem 10rem;
  }
</style>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Whether to show ActionSheet | _boolean_ | `false` |
| actions | Options | _Action[]_ | `[]` |
| title | Title | _string_ | - |
| cancelText | Text of cancel button | _string_ | - |
| description | Description above the options | _string_ | - |
| closeIcon | Close icon name | _string_ | `cross` |
| duration | Transition duration, unit second | _number \| string_ | `0.3` |
| round | Whether to show round corner | _boolean_ | `true` |
| overlay | Whether to show overlay | _boolean_ | `true` |
| lockScroll | Whether to lock background scroll | _boolean_ | `true` |
| safeAreaInsetBottom | Whether to enable bottom safe area adaptation | _boolean_ | `true` |
### Data Structure of Action

| Key       | Description                  | Type      |
| --------- | ---------------------------- | --------- |
| name      | Title                        | _string_  |
| subname   | Subtitle                     | _string_  |
| color     | Text color                   | _string_  |
| className | className for the option     | _any_     |
| loading   | Whether to be loading status | _boolean_ |
| disabled  | Whether to be disabled       | _boolean_ |

### Events

| Event | Description | Arguments |
| --- | --- | --- |
| onSelect | Triggered when click option | _action: Action, index: number_ |
| onCancel | Triggered when click cancel button | - |
| onOpen | Triggered when open ActionSheet | - |
| onClose | Triggered when close ActionSheet | - |
| onOpened | Triggered when opened ActionSheet | - |
| onClosed | Triggered when closed ActionSheet | - |
