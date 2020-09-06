# Rate

### Install

```js
import { Rate } from '@trillion/rate';
```

## Usage

### Basic Usage

```js
const [basic, setBasic] = React.useState(3);
```
```html
<Rate value={basic} onChange={setBasic} />
```

### Custom Icon

```js
const [customIcon, setCustomIcon] = React.useState(3);
```
```html
<Rate value={customIcon} onChange={setCustomIcon} icon='like' voidIcon="like-o"/>
```

### Custom Style

```js
const [customStyle, setCustomStyle] = React.useState(3);
```
```html
<Rate value={customStyle} onChange={setCustomStyle} color='#ffd21e' voidColor="#eee" voidIcon='star' />
```

### Half Star

```js
const [halfStar, setHalfStar] = React.useState(3.5);
```
```html
<Rate value={halfStar} onChange={setHalfStar} allowHalf={true} />
```

### Custom Count

```js
const [customCount, setCustomCount] = React.useState(3);
```
```html
<Rate value={customCount} onChange={setCustomCount} count={6} />
```

### Disabled

```html
<Rate value={3} disabled={true} />
```

### Readonly

```html
<Rate value={3} readonly={true} />
```

## API

### Props

| Attribute | Description | Type | Default |
| --- | --- | --- | --- |
| value | Current rate | _number_ | - |
| count | Count | _number_ | 5 |
| size | Icon size | _number_ | 20px |
| gutter | Icon gutter | _number_ | 4px |
| color | Selected color | _string_ | `#ee0a24` |
| voidColor | Void color | _string_ | `#c8c9cc` |
| disabledColor | Disabled color | _string_ | `#c8c9cc` |
| icon | Selected icon | _string_ | star |
| voidIcon | Void icon | _string_ | star-0 |
| allowHalf | Weather to allow half star | _boolean_ | false |
| readonly | Weather to be readonly | _boolean_ | false |
| disabled | Weather to disable rate | _boolean_ | false |
| touchable | Weather to allow select rate by touch gesture | _boolean_ | true |


| Event  | Description                 | Parameters   |
| ------ | --------------------------- | ------------ |
| onChange | Triggered when rate changed | current rate |
