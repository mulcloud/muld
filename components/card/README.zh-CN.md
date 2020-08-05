# Card 卡片

### 引入

```js
import { Card } from '@trillion/muld';
```

## 代码演示

### 基础用法

```html
<Card
  num="2"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
/>
```

### 营销信息

通过`originPrice`设置商品原价，通过`tag`设置商品左上角标签

```html
<Card
  num="2"
  tag="标签"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
  originPrice="10.00"
/>
```

### 自定义内容

`Card`组件提供了多个插槽，可以灵活地自定义内容

```html
<Card
  num="2"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
  tags={
    <React.Fragment>
      <Tag plain type="danger">Tag</Tag>
      <Tag plain type="danger">Tag</Tag>
    </React.Fragment>
  }
  footer={
    <React.Fragment>
        <Button size="mini">Button</Button>
        <Button size="mini">Button</Button>
    </React.Fragment>
  }
>
</Card>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| thumb | 左侧图片 URL | _string_ | - |
| title | 标题 | _string_ | - |
| desc | 描述 | _string_ | - |
| tag | 图片角标 | _string_ | - |
| num | 商品数量 | _number \| string_ | - |
| price | 商品价格 | _number \| string_ | - |
| originPrice | 商品划线原价 | _number \| string_ | - |
| centered | 内容是否垂直居中 | _boolean_ | `false` |
| currency | 货币符号 | _string_ | `¥` |
| thumbLink | 点击左侧图片后跳转的链接地址 | _string_ | - |
| lazyLoad(TODO) | 是否开启图片懒加载，须配合 [Lazyload](#/zh-CN/lazyload) 组件使用 | _boolean_ | `false` |
| priceTop    | 自定义价格上方区域 | _React.ReactNode_ | - |
| bottom       | 自定义价格下方区域 | _React.ReactNode_ | - |
| tags         | 自定义描述下方标签区域 |_ React.ReactNod_e | - |
| footer       | 自定义右下角内容   | _React.ReactNode_ | - |

### Events

| 事件名      | 说明                 | 回调参数       |
| ----------- | -------------------- | -------------- |
| onClick     | 点击时触发           | _event: Event_ |
| onClickThumb | 点击自定义图片时触发 | _event: Event_ |
