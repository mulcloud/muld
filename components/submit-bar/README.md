# SubmitBar

### Install

```js
import { Submitbar } from '@trillion/muld';
```

## Usage

### Basic Usage

```html
<SubmitBar price={3050} buttonText="Submit" onSubmit={onSubmit} />
```

### Disabled

`submit` event will not triggerd when disabled.

```html
<SubmitBar
  disabled
  price={3050}
  buttonText="Submit"
  tip="Some tips"
  tipIcon="info-o"
  onSubmit={onSubmit}
/>
```

### Loading

`submit` event will not triggerd when loading.

```html
<SubmitBar loading price={3050} buttonText="Submit" onSubmit={onSubmit} />
```

### Advanced Usage

Use tip prop to add custom contents.

```html
<SubmitBar price={3050} buttonText="Submit" onSubmit={onSubmit} tip={
                      <React.Fragment>
                        你的收货地址不支持同城送，
                        Some tips, <span @click="onClickEditAddress">Link</span>
                    </React.Fragment>
}>
</SubmitBar>
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| price | Price | _number_ | - |
| label | Price left label | _string_ | `Total：` |
| suffixLabel | Price right label | _string_ | - |
| textAlign  | Price label text align can be set to `left` | _string_ | `right` |
| buttonText | Button text | _string_ | - |
| buttonType | Button type | _string_ | `danger` |
| buttonColor | Button color | _string_ | - |
| top | Custom Top Content| _string_ | - |
| tip | Tip | _string_ | - |
| tipIcon | Icon | _string_ | - |
| currency | Currency symbol | _string_ | `¥` |
| decimalLength | number of digits to appear after the decimal point | _number \| string_ | `2` |
| disabled | Whether to disable button | _boolean_ | `false` |
| loading | Whether to show loading icon | _boolean_ | `false` |
| safeAreaInsetBottom | Whether to enable bottom safe area adaptation | _boolean_ | `true` |

### Events

| Event  | Description                       | Arguments |
| ------ | --------------------------------- | --------- |
| onSubmit | Triggerd when click submit button | -         |

