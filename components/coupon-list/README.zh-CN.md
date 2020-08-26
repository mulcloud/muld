# Coupon 优惠券选择器

### 引入

```js
import { CouponCell, CouponList } from '@trillion/muld';
```

## 代码演示

### 基础用法

```html
<!-- 优惠券单元格 -->
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
    condition: '订单满100元可用',
    reason: '',
    value: 150,
    name: '优惠券名称',
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

const onExchange = (code: string) => {
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

| 参数          | 说明                 | 类型               | 默认值   |
| ------------- | -------------------- | ------------------ | -------- |
| title         | 单元格标题           | _string_           | `优惠券` |
| chosenCoupon | 当前选中优惠券的索引 | _number \| string_ | `-1`     |
| coupons       | 可用优惠券列表       | _Coupon[]_         | `[]`     |
| editable      | 能否切换优惠券       | _boolean_          | `true`   |
| border        | 是否显示内边框       | _boolean_          | `true`   |
| currency      | 货币符号             | _string_           | `¥`      | - |

### CouponList Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| code | 当前输入的兑换码 | _string_ | - |
| chosenCoupon | 当前选中优惠券的索引 | _number_ | `-1` |
| coupons | 可用优惠券列表 | _Coupon[]_ | `[]` |
| disabledCoupons | 不可用优惠券列表 | _Coupon[]_ | `[]` |
| enabledTitle | 可用优惠券列表标题 | _string_ | `可使用优惠券` |
| disabledTitle | 不可用优惠券列表标题 | _string_ | `不可使用优惠券` |
| exchangeButtonText | 兑换按钮文字 | _string_ | `兑换` |
| exchangeButtonLoading | 是否显示兑换按钮加载动画 | _boolean_ | `false` |
| exchangeButtonDisabled | 是否禁用兑换按钮 | _boolean_ | `false` |
| exchangeMinLength | 兑换码最小长度 | _number_ | `1` |
| displayedCouponIndex| 滚动至特定优惠券位置 | _number_ | - |
| showCloseButton | 是否显示列表底部按钮 | _boolean_ | `true` |
| closeButtonText | 列表底部按钮文字 | _string_ | `不使用优惠` |
| inputPlaceholder | 输入框文字提示 | _string_ | `请输入优惠码` |
| showExchangeBar | 是否展示兑换栏 | _boolean_ | `true` |
| currency | 货币符号 | _string_ | `¥` |
| emptyImage | 列表为空时的占位图 | _string_ | `https://img.yzcdn.cn/vant/coupon-empty.png` |
| showCount  | 是否展示可用 / 不可用数量 | _boolean_ | `true` |

### CouponList Events

| 事件名   | 说明           | 回调参数                |
| -------- | -------------- | ----------------------- |
| onChange   | 优惠券切换回调 | index, 选中优惠券的索引 |
| onExchange | 兑换优惠券回调 | code, 兑换码            |

### Coupon 数据结构

| 键名        | 说明                            | 类型     |
| ----------- | ------------------------------- | -------- |
| id          | 优惠券 id                       | _string_ |
| name        | 优惠券名称                      | _string_ |
| condition   | 满减条件                        | _string_ |
| startAt     | 卡有效开始时间 (时间戳, 单位秒) | _number_ |
| endAt       | 卡失效日期 (时间戳, 单位秒)     | _number_ |
| description | 描述信息，优惠券可用时展示      | _string_ |
| reason      | 不可用原因，优惠券不可用时展示  | _string_ |
| value       | 折扣券优惠金额，单位分          | _number_ |
| valueDesc   | 折扣券优惠金额文案              | _string_ |
| unitDesc    | 单位文案                        | _string_ |
