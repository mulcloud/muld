# Image

### Install

```js
import { Image } from '@trillion/muld';
```

## Usage

### Basic Usage 

```html
<Image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
```

### Fit Mode

```html
<Image
  width="10rem"
  height="10rem"
  fit="contain"
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
```

### Round

Show round image, it may not works at `fit=contain` and `fit=scale-down`

```html
<Image
  round
  width="10rem"
  height="10rem"
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
```

### Lazy Load

```html
<Image
  width="100"
  height="100"
  lazyLoad
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
```

```js
import { LazyLoad } from '@trillion/muld';
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| src | Src | _string_ | - |
| fit | Fit mode | _string_ | `fill` |
| alt | Alt | _string_ | - |
| width | Width | _number \| string_ | - |
| height | Height | _number \| string_ | - |
| radius | Border Radius | _number \| string_ | `0` |
| round | Whether to be round | _boolean_ | `false` |
| lazyLoad | Whether to enable lazy load，should register [Lazyload](#/en-US/lazyload) component | _boolean_ | `false` |
| showError | Whether to show error placeholder | _boolean_ | `true` |
| showLoading | Whether to show loading placeholder | _boolean_ | `true` |
| errorIcon | Error icon | _string_ | `photo-fail` |
| loadingIcon  | Loading icon | _string_ | `photo` |
| loading | Custom loading placeholder | _React.ReactNode \| string_ | - |
| error   | Custom error placeholder   | _React.ReactNode \| string_ | - |
| className | Custom class  | _React.ReactNode \| string_ | - |

### fit optional value

| name | desctription |
| --- | --- |
| contain | Keep aspect ratio, fully display the long side of the image |
| cover | Keep aspect ratio, fully display the short side of the image, cutting the long side |
| fill | Stretch and resize image to fill the content box |
| none | Not resize image |
| scale-down | Take the smaller of `none` or `contain` |

### Events

| Event | Description                      | Arguments      |
| ----- | -------------------------------- | -------------- |
| onClick | Triggered when click image       | _event: Event_ |
| onLoad  | Triggered when image loaded      | -              |
| onError | Triggered when image load failed | -              |

