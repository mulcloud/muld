# Coupon

### Install

```js
import { CouponCell, CouponList } from '@trillion/muld';
```

## Usage

### Basic Usage

```html
<!-- Coupon Cell -->
<CouponCell
  coupons={coupons}
  chosenCoupon={chosenCoupon}
  onClick={() => {setShowList(true)}}
/>
<!-- Coupon List -->
<Popup
  visible={showList}
  round
  position="bottom"
  style={{height: 90%; paddingTop: 0.25rem;}}
  onCancel={() => setShowList(false)}
>
  <CouponList
    coupons={coupons}
    chosenCoupon={chosenCoupon}
    disabledCoupons={disabledCoupons}
    onChange={onChange}
    onExchange={onExchange}
  />
</Popup>
```

```js
const coupon = {
    id: 1,
    condition: '',
    reason: '',
    value: 150,
    name: 'Coupon name',
    startAt: 1489104000,
    endAt: 1514592000,
    valueDesc: '1.5',
    unitDesc: '元',
};

const disabledCoupon =  {
    ...coupon,
    id: 2,
}

const [chosenCoupon, setChosen]= React.useState(-1);

const [showList, setShowList] = React.useState(false);

const [coupons, setCoupons] =  React.useState<CouponType[]>([coupon]);

const [disabledCoupons, setDisabledCoupons] =  React.useState<CouponType[]>([disabledCoupon]);

const randomId = (max: number = 999999) => {
    return Math.floor(Math.random() * max) + 1;
}

const onChange = (index: number) => {
    setShowList(false);
    setChosen(index);
}

const onExchange = () => {
    const newCoupon = {
        ...coupon,
        id: randomId()
    };
    const newCouponList = [...coupons, newCoupon];
    setCoupons(newCouponList);
}
```

## API

### CouponCell Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| title | Cell title | _string_ | `Coupon` |
| chosenCoupon | Index of chosen coupon | _number \| string_ | `-1` |
| coupons | Coupon list | _Coupon[]_ | `[]` |
| editable | Cell editable | _boolean_ | `true` |
| border | Whether to show innner border | _boolean_ | `true` |
| currency | Currency symbol | _string_ | `¥` |

### CouponList Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| code | Current exchange code | _string_ | - |
| chosenCoupon | Index of chosen coupon | _number_ | `-1` |
| coupons | Coupon list | _Coupon[]_ | `[]` |
| disabledCoupons | Disabled coupon list | _Coupon[]_ | `[]` |
| enabledTitle | Title of coupon list | _string_ | `Available` | - |
| disabledTitle | Title of disabled coupon list | _string_ | `Unavailable` | - |
| exchangeButtonText | Exchange button text | _string_ | `Exchange` |
| exchangeButtonLoading | Whether to show loading in exchange button | _boolean_ | `false` |
| exchangeButtonDisabled | Whether to disable exchange button | _boolean_ | `false` |
| exchangeMinLength | Min length to enable exchange button | _number_ | `1` |
| displayedCouponIndex | Index of displayed coupon | _number_ | - |
| closeButtonText | Close button text | _string_ | `Close` |
| inputPlaceholder | Input placeholder | _string_ | `Coupon code` |
| currency | Currency symbol | _string_ | `¥` |
| emptyImage | Placeholder image when list is empty | _string_ | `https://img.yzcdn.cn/vant/coupon-empty.png` |
| showCount  | Whether to show coupon count in tab title | _boolean_ | `true` |

### CouponList Events

| Event | Description | Arguments |
| --- | --- | --- |
| onChange | Triggered when change chosen coupon | index: index of chosen coupon |
| onExchange | Triggered when exchange coupon | code: exchange code |

### Data Structure of Coupon

| Key         | Description                         | Type     |
| ----------- | ----------------------------------- | -------- |
| id          | Id                                  | _string_ |
| name        | Name                                | _string_ |
| condition   | Condition                           | _string_ |
| startAt     | Start time (Timestmap, unit second) | _number_ |
| endAt       | End time (Timestmap, unit second)   | _number_ |
| description | Description                         | _string_ |
| reason      | Unavailable reason                  | _string_ |
| value       | Value                               | _number_ |
| valueDesc   | Value Text                          | _string_ |
| unitDesc    | Unit Text                           | _string_ |
