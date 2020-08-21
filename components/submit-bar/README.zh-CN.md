# SubmitBar 提交订单栏

### 引入

```js
import { Submitbar } from '@trillion/muld';
```

## 代码演示

### 基础用法

```html
<SubmitBar price={3050} buttonText="提交订单" onSubmit={onSubmit} />
```

### 禁用状态

禁用状态下不会触发`submit`事件

```html
<SubmitBar
  disabled
  price={3050}
  buttonText="提交订单"
  tip="你的收货地址不支持同城送, 我们已为你推荐快递"
  tipIcon="info-o"
  onSubmit={onSubmit}
/>
```

### 加载状态

加载状态下不会触发`submit`事件

```html
<SubmitBar
  loading
  price={3050}
  buttonText="提交订单"
  onSubmit={onSubmit}
/>
```

### 高级用法

通过tip属性插入自定义内容

```html
<SubmitBar price={3050} buttonText="提交订单" onSubmit={onSubmit} tip={
                    <React.Fragment>
                        你的收货地址不支持同城送，
                        <span className="edit-address" onClick={onClickLink}>
                            修改地址 
                        </span>
                    </React.Fragment>
                }>
</SubmitBar>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| price | 价格（单位分） | _number_ | - |
| label | 价格左侧文案 | _string_ | `合计：` |
| suffixLabel | 价格右侧文案 | _string_ | - |
| textAlign | 价格文案对齐方向，可选值为 `left` | _string_ | `right` |
| buttonText | 按钮文字 | _string_ | - |
| buttonType | 按钮类型 | _string_ | `danger` |
| buttonColor | 自定义按钮颜色 | _string_ | - |
| top | 自定义订单栏上方内容  | _number \| ReactElement_ |
| tip | 自定义提示文案中的额外操作和说明  | _string \| ReactElement_ |
| tipIcon | 左侧[图标名称](#/zh-CN/icon)或图片链接 | _string_ | - |
| currency | 货币符号 | _string_ | `¥` |
| decimalLength | 价格小数点后位数 | _number \| string_ | `2` |
| disabled | 是否禁用按钮 | _boolean_ | `false` |
| loading | 是否显示加载中的按钮 | _boolean_ | `false` |
| safeAreaInsetBottom | 是否开启[底部安全区适配](#/zh-CN/quickstart#di-bu-an-quan-qu-gua-pei) | _boolean_ | `true` |

### Events

| 事件名 | 说明             | 回调参数 |
| ------ | ---------------- | --------|
| onSubmit | 按钮点击事件回调 | -        |

