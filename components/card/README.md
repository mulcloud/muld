# Card

### Install

```js
import { Card } from '@trillion/muld';
```

## Usage

### Basic Usage
 
```html
<Card
  num="2"
  price="2.00"
  title="Title"
  desc="Description"
  thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
/>
```

### Discount Info

```html
<Card
  num="2"
  tag="Tag"
  price="2.00"
  title="Title"
  desc="Description"
  originPrice="10.00"
  thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
/>
```

### Custom Content

Use slot to custom content.

```html
<Card
  num="2"
  title="Title"
  desc="Description"
  price="2.00"
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

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| thumb | Left thumb image URL | _string_ | - |
| title | Title | _string_ | - |
| desc | Description | _string_ | - |
| tag | Tag | _string_ | - |
| num | number | _number \| string_ | - |
| price | Price | _number \| string_ | - |
| originPrice | Origin price | _number \| string_ | - |
| centered | Whether content vertical centered | _boolean_ | `false` |
| currency | Currency symbol | _string_ | `¥` |
| thumbLink | Thumb link URL | _string_ | - |
| lazyLoad(TODO) | Whether to enable thumb lazy load，should register [Lazyload](#/en-US/lazyload) component | _boolean_ | `false` |
| priceTop  | Custom price top | _React.ReactNode_ | - |
| bottom    | Custom price bottom | _React.ReactNode_ | - |
| tags      | Custom tags         | _React.ReactNode_ | - |
| footer    | Custom footer       | _React.ReactNode_ | - |


### Events

| Event       | Description                  | Arguments      |
| ----------- | ---------------------------- | -------------- |
| onClick       | Triggered when clicked       | _event: Event_ |
| onClickThumb | Triggered when thumb clicked | _event: Event_ |
