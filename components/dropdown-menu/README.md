# DropdownMenu

### Install

```js
import { DropdownMenu, DropdownItem } from '@trillion/muld';
```

## Usage

### Basic Usage

```html
<DropdownMenu>
    <DropdownItem value={0} options={option1} />
    <DropdownItem value="a" options={option2} />
</DropdownMenu>
```

```js
const option1 = [
    { text: 'Option1', value: 0 },
    { text: 'Option2', value: 1 },
    { text: 'Option3', value: 2 },
];
const option2 = [
    { text: 'Option A', value: 'a' },
    { text: 'Option B', value: 'b' },
    { text: 'Option C', value: 'c' },
];
```

### Custom Content

```jsx
function CustomContent() {
    const [visible, setVisible] = React.useState<boolean>(false);
    const option = [
        { text: 'Option1', value: 0 },
        { text: 'Option2', value: 1 },
        { text: 'Option3', value: 2 },
    ];
    function onConfirm() {
        setVisible(false);
    }
    function onVisibleChange(v: boolean) {
        setVisible(v);
    }
    return (
        <DropdownMenu>
            <DropdownItem value={0} options={option} />
            <DropdownItem title="custom" visible={visible} onVisibleChange={onVisibleChange}>
                <div style={{ margin: 30, textAlign: 'center' }}>custom content</div>
                <div style={{ padding: '1.25rem' }}>
                    <Button type="danger" block round onClick={onConfirm}>
                        Confirm
                    </Button>
                </div>
            </DropdownItem>
        </DropdownMenu>
    )
}
```

### Custom Active Color

Use `activeColor` prop to custom active color of the title and options

```html
<DropdownMenu activeColor="#ee0a24">
    <DropdownItem value={0} options={option1} />
    <DropdownItem value="a" options={option2} />
</DropdownMenu>
```

### Expand Direction

```html
<DropdownMenu direction="up">
    <DropdownItem value={0} options={option1} />
    <DropdownItem value="a" options={option2} />
</DropdownMenu>
```

### Disabled

```html
<DropdownMenu direction="up">
    <DropdownItem value={0} options={option1} disabled />
    <DropdownItem value="a" options={option2} disabled />
</DropdownMenu>
```

## API

### DropdownMenu Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| activeColor | Active color of title and option | _string_ | `#ee0a24` |
| direction  | Expand direction, can be set to `up` | _string_ | `down` |
| zIndex | z-index of menu item | _number \| string_ | `10` |
| duration | Transition duration, unit second | _number \| string_ | `0.2` |
| overlay | Whether to show overlay | _boolean_ | `true` |
| closeOnClickOverlay | Whether to close when click overlay | _boolean_ | `true` |
| closeOnClickOutside | Whether to close when click outside | _boolean_ | `true` |

### DropdownItem Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| value | Value of current option，can use `v-model` | _number \| string_ | - |
| title | Item title | _string_ | Text of selected option |
| options | Options | _Option[]_ | `[]` |
| disabled | Whether to disable dropdown item | _boolean_ | `false` |
| titleClass | Title class | _string_ | - |
| getContainer  | Return the mount node for menu | _string \| () => Element_ | - |
| visible | menu visible | _boolean_ | - |
| onVisibleChange | Triggered when change menu visible | _(v: boolean) => void_ | - |

### DropdownItem Events

| Event  | Description                               | Arguments |
| ------ | ----------------------------------------- | --------- |
| onChange | Triggered select option and value changed | value     |
| onOpen   | Triggered when open menu                  | -         |
| onClose  | Triggered when close menu                 | -         |
| onOpened | Triggered when menu opened                | -         |
| onClosed | Triggered when menu closed                | -         |

### Data Structure of Option

| Key   | Description | Type               |
| ----- | ----------- | ------------------ |
| text  | Text        | _string_           |
| value | Value       | _number \| string_ |
| icon  | Left icon   | _string_           |
