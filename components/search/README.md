# Search

### Install

```js
import { Search } from '@trillion/muld';
```

## Usage

### Basic Usage

```html
<Search value="" placeholder="Placeholder" />
```

### Listen to Events

`search` event will be triggered when click the search button on the keyboard, `cancel` event will be triggered when click the cancel button.

```html
<form action="/">
  <Search
    value=""
    showAction
    placeholder="Placeholder"
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

> Tips: There will be a search button on the keyboard when Search is inside a form in iOS.

### Input Align

```html
<Search value="" inputAlign="center" placeholder="Placeholder" />
```

### Disabled

```html
<Search value="" disabled placeholder="Placeholder" />
```

### Custom Background Color

```html
<Search
  value=""
  shape="round"
  background="#4fc08d"
  placeholder="Placeholder"
/>
```

### Custom Action Button

Use `action` prop to custom right button, `cancel` event will no longer be triggered when use this slot.

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

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| label | Left side label | _string_ \| _ReactElement_| - |
| shape | Shape of field, can be set to `round` | _string_ | `square` |
| background | Background color of field | _string_ | `#f2f2f2` |
| maxlength | Max length of value | _number \| string_ | - |
| placeholder | Placeholder | _string_ | - |
| clearable | Whether to be clearable | _boolean_ | `true` |
| clearTrigger | When to display the clear icon, `always` means to display the icon when value is not empty, `focus` means to display the icon when input is focused | _string_ | `focus` |
| autofocus | Whether to auto focus, unsupported in iOS | _boolean_ | `false` |
| showAction | Whether to show right action button | _boolean_ | `false` |
| actionText| Text of action button | _boolean_ | `Cancel` |
| disabled | Whether to disable field | _boolean_ | `false` |
| readonly | Whether to be readonly | _boolean_ | `false` |
| error | Whether to show error info | _boolean_ | `false` |
| inputAlign | Text align of field, can be set to `center` `right` | _string_ | `left` |
| leftIcon | Left icon name | _string_ | `search` |
| rightIcon | Right icon name | _string_ | - |
| left   | Custom left side content                                    |
| action | Custom right button, displayed when `showAction` is `true` |             

### Events

| Event  | Description                        | Arguments       |
| ------ | ---------------------------------- | --------------- |
| onSearch | Triggered when confirm search      | _value: string_ |
| onChange  | Triggered when input value changed | _value: string_ |
| onFocus  | Triggered when input gets focus    | _event: Event_  |
| onBlur   | Triggered when input loses focus   | _event: Event_  |
| onClear  | Triggered when click clear icon    | _event: Event_  |
| onCancel | Triggered when click cancel button | -               |

